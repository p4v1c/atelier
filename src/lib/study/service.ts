/**
 * Couche base de données du planificateur.
 *
 * Les décisions (quelles règles, quel palier, quelle échéance) viennent de
 * scheduler.ts, qui est pur. Ici on ne fait que lire, écrire et assembler.
 *
 * Règle d'or : le verdict est calculé ici, jamais reçu du client. La réponse à
 * /api/session/answer ne contient l'index fautif qu'APRÈS avoir été notée.
 */
import { StudySessionType, type PrismaClient } from "@prisma/client";
import { prisma } from "../prisma";
import { tokenize, type Token } from "../tokenize";
import {
  buildPlacementTest,
  buildSeries,
  buildWeaknessSeries,
  dueAfter,
  estimateLevel,
  isMastered,
  nextBox,
  pickSentence,
  shuffle,
  type Candidate,
  type Random,
} from "./scheduler";

export type StudyMode = "test" | "training" | "targeted" | "weakness" | "rule";

export type Question = {
  /** Position dans la série, à partir de 1. */
  position: number;
  sentenceId: string;
  ruleId: string;
  category: string;
  /** Les mots cliquables. Rien n'y désigne le mot fautif. */
  tokens: Token[];
};

export type StartedSession = {
  studySessionId: string;
  mode: StudyMode;
  category: string | null;
  /** Renseigné pour une série portant sur une seule règle. */
  rule: { slug: string; title: string } | null;
  questions: Question[];
};

type Db = PrismaClient;

/**
 * Toutes les règles jouables, avec la progression de l'utilisateur.
 * Les règles `disputed` sont écartées : ce sont des points de débat, consultables
 * au catalogue, jamais notés. Les `draft` non plus : elles attendent relecture.
 */
async function loadCandidates(
  userId: string,
  category: string | null,
  db: Db = prisma
): Promise<Candidate[]> {
  const rules = await db.rule.findMany({
    where: {
      status: "active",
      ...(category ? { category: { name: category } } : {}),
      // Une règle sans phrase jouable ne doit pas bloquer une série.
      sentences: { some: { status: "active" } },
    },
    select: {
      id: true,
      difficulty: true,
      category: { select: { name: true } },
      progress: { where: { userId }, select: { box: true, dueAtCounter: true, isNew: true } },
    },
  });

  return rules.map((rule) => {
    const p = rule.progress[0];
    return {
      ruleId: rule.id,
      category: rule.category.name,
      difficulty: rule.difficulty,
      box: p?.box ?? 0,
      dueAtCounter: p?.dueAtCounter ?? 0,
      isNew: p?.isNew ?? true,
    };
  });
}

export class NoContentError extends Error {}

/** Ouvre une série et tire ses phrases. */
export async function startStudySession(
  userId: string,
  options: { mode: StudyMode; size: number; category: string | null; rule?: string | null },
  db: Db = prisma,
  random: Random = Math.random
): Promise<StartedSession> {
  const { mode, size, category } = options;

  // Série sur une seule règle : on ne tire pas une phrase par règle, mais
  // plusieurs phrases de la même. C'est le seul mode qui fonctionne ainsi.
  if (mode === "rule") {
    return startSingleRuleSession(userId, options.rule ?? null, size, db, random);
  }

  const user = await db.user.findUniqueOrThrow({
    where: { id: userId },
    select: { answerCounter: true },
  });
  const candidates = await loadCandidates(userId, mode === "test" ? null : category, db);
  if (candidates.length === 0) throw new NoContentError("Aucune règle disponible pour cette sélection.");

  let selection: Candidate[];
  if (mode === "test") selection = buildPlacementTest(candidates, size, random);
  else if (mode === "weakness") selection = buildWeaknessSeries(candidates, size, random);
  else selection = buildSeries(candidates, size, user.answerCounter, random);

  if (selection.length === 0) {
    throw new NoContentError(
      mode === "weakness"
        ? "Aucune faiblesse enregistrée pour l'instant : lance une série normale."
        : "Aucune règle disponible pour cette sélection."
    );
  }

  // Une seule requête pour toutes les phrases de la série.
  const ruleIds = selection.map((c) => c.ruleId);
  const [sentences, progress] = await Promise.all([
    db.sentence.findMany({
      where: { ruleId: { in: ruleIds }, status: "active" },
      select: { id: true, ruleId: true, text: true },
    }),
    db.ruleProgress.findMany({
      where: { userId, ruleId: { in: ruleIds } },
      select: { ruleId: true, lastSentenceId: true },
    }),
  ]);

  const byRule = new Map<string, typeof sentences>();
  for (const s of sentences) {
    const list = byRule.get(s.ruleId) ?? [];
    list.push(s);
    byRule.set(s.ruleId, list);
  }
  const lastByRule = new Map(progress.map((p) => [p.ruleId, p.lastSentenceId]));

  const questions: Question[] = [];
  for (const candidate of selection) {
    const pool = byRule.get(candidate.ruleId) ?? [];
    const sentence = pickSentence(pool, lastByRule.get(candidate.ruleId) ?? null, random);
    if (!sentence) continue; // règle sans phrase active : on la saute plutôt que d'échouer
    questions.push({
      position: questions.length + 1,
      sentenceId: sentence.id,
      ruleId: candidate.ruleId,
      category: candidate.category,
      tokens: tokenize(sentence.text),
    });
  }

  if (questions.length === 0) throw new NoContentError("Aucune phrase disponible pour cette sélection.");

  const studySession = await db.studySession.create({
    data: {
      userId,
      type: StudySessionType[mode],
      category,
      questionCount: questions.length,
    },
    select: { id: true },
  });

  return { studySessionId: studySession.id, mode, category, rule: null, questions };
}

/**
 * Série d'entraînement sur une règle unique, lancée depuis sa fiche.
 *
 * Toutes les phrases de la règle y passent, dans un ordre aléatoire : c'est un
 * exercice de révision ciblée, pas une révision espacée. Le palier bouge
 * néanmoins à chaque réponse, comme partout ailleurs.
 */
async function startSingleRuleSession(
  userId: string,
  slug: string | null,
  size: number,
  db: Db,
  random: Random
): Promise<StartedSession> {
  if (!slug) throw new NoContentError("Aucune règle indiquée.");

  const rule = await db.rule.findFirst({
    where: { slug, status: "active" },
    select: {
      id: true,
      slug: true,
      title: true,
      category: { select: { name: true } },
      sentences: { where: { status: "active" }, select: { id: true, text: true } },
    },
  });
  if (!rule) throw new NoContentError("Cette règle ne peut pas être travaillée seule.");
  if (rule.sentences.length === 0) throw new NoContentError("Cette règle n'a aucune phrase disponible.");

  const questions: Question[] = shuffle(rule.sentences, random)
    .slice(0, size)
    .map((sentence, i) => ({
      position: i + 1,
      sentenceId: sentence.id,
      ruleId: rule.id,
      category: rule.category.name,
      tokens: tokenize(sentence.text),
    }));

  const studySession = await db.studySession.create({
    data: {
      userId,
      type: StudySessionType.rule,
      category: rule.category.name,
      ruleSlug: rule.slug,
      questionCount: questions.length,
    },
    select: { id: true },
  });

  return {
    studySessionId: studySession.id,
    mode: "rule",
    category: rule.category.name,
    rule: { slug: rule.slug, title: rule.title },
    questions,
  };
}

export type AnswerVerdict = {
  correct: boolean;
  /** Index du token fautif, -1 si la phrase était correcte. Révélé après coup. */
  faultyTokenIndex: number;
  correction: string | null;
  rule: { slug: string; title: string; statement: string; tip: string; category: string };
  box: { before: number; after: number; mastered: boolean; justMastered: boolean };
  /** true si la question avait déjà été notée : le palier n'a pas rebougé. */
  alreadyAnswered: boolean;
};

export class SessionError extends Error {}

/**
 * Note une réponse.
 *
 * Rejouer la même question dans la même série ne rapporte rien : on renvoie le
 * verdict d'origine sans toucher au palier. Sans cette garde, un client pourrait
 * répondre juste en boucle et se hisser au palier 5 en six requêtes.
 */
export async function answerQuestion(
  userId: string,
  input: { studySessionId: string; sentenceId: string; answerIndex: number },
  db: Db = prisma
): Promise<AnswerVerdict> {
  const { studySessionId, sentenceId, answerIndex } = input;

  const studySession = await db.studySession.findUnique({
    where: { id: studySessionId },
    select: { id: true, userId: true, finishedAt: true },
  });
  if (!studySession || studySession.userId !== userId) throw new SessionError("Série introuvable.");
  if (studySession.finishedAt) throw new SessionError("Cette série est déjà terminée.");

  const sentence = await db.sentence.findUnique({
    where: { id: sentenceId },
    select: {
      id: true,
      faultyTokenIndex: true,
      correction: true,
      rule: {
        select: {
          id: true,
          slug: true,
          title: true,
          statement: true,
          tip: true,
          category: { select: { name: true } },
        },
      },
    },
  });
  if (!sentence) throw new SessionError("Phrase introuvable.");

  const rule = {
    slug: sentence.rule.slug,
    title: sentence.rule.title,
    statement: sentence.rule.statement,
    tip: sentence.rule.tip,
    category: sentence.rule.category.name,
  };

  const previous = await db.attempt.findFirst({
    where: { userId, studySessionId, sentenceId },
    select: { isCorrect: true },
  });
  if (previous) {
    const box = await db.ruleProgress.findUnique({
      where: { userId_ruleId: { userId, ruleId: sentence.rule.id } },
      select: { box: true },
    });
    const current = box?.box ?? 0;
    return {
      correct: previous.isCorrect,
      faultyTokenIndex: sentence.faultyTokenIndex,
      correction: sentence.correction,
      rule,
      box: { before: current, after: current, mastered: isMastered(current), justMastered: false },
      alreadyAnswered: true,
    };
  }

  const correct = answerIndex === sentence.faultyTokenIndex;

  const verdict = await db.$transaction(async (tx) => {
    const existing = await tx.ruleProgress.findUnique({
      where: { userId_ruleId: { userId, ruleId: sentence.rule.id } },
    });
    const before = existing?.box ?? 0;
    const after = nextBox(before, correct);

    // Le compteur avance d'abord : l'échéance se calcule sur la valeur d'après,
    // exactement comme dans le fichier d'origine.
    const user = await tx.user.update({
      where: { id: userId },
      data: { answerCounter: { increment: 1 } },
      select: { answerCounter: true },
    });

    await tx.ruleProgress.upsert({
      where: { userId_ruleId: { userId, ruleId: sentence.rule.id } },
      create: {
        userId,
        ruleId: sentence.rule.id,
        box: after,
        dueAtCounter: dueAfter(user.answerCounter, after),
        seenCount: 1,
        correctCount: correct ? 1 : 0,
        isNew: false,
        lastReviewedAt: new Date(),
        lastSentenceId: sentenceId,
      },
      update: {
        box: after,
        dueAtCounter: dueAfter(user.answerCounter, after),
        seenCount: { increment: 1 },
        ...(correct ? { correctCount: { increment: 1 } } : {}),
        isNew: false,
        lastReviewedAt: new Date(),
        lastSentenceId: sentenceId,
      },
    });

    await tx.attempt.create({
      data: { userId, sentenceId, answerIndex, isCorrect: correct, studySessionId },
    });

    return { before, after };
  });

  return {
    correct,
    faultyTokenIndex: sentence.faultyTokenIndex,
    correction: sentence.correction,
    rule,
    box: {
      before: verdict.before,
      after: verdict.after,
      mastered: isMastered(verdict.after),
      justMastered: isMastered(verdict.after) && !isMastered(verdict.before),
    },
    alreadyAnswered: false,
  };
}

export type SessionSummary = {
  studySessionId: string;
  mode: StudySessionType;
  score: number;
  correct: number;
  total: number;
  byCategory: { category: string; correct: number; total: number }[];
  level: string;
  mastered: number;
  ruleCount: number;
  /** Règles de la série retombées au plus bas, à retravailler en priorité. */
  weakest: { slug: string; title: string; box: number }[];
};

export async function finishStudySession(
  userId: string,
  studySessionId: string,
  db: Db = prisma
): Promise<SessionSummary> {
  const studySession = await db.studySession.findUnique({
    where: { id: studySessionId },
    select: { id: true, userId: true, type: true, questionCount: true, finishedAt: true },
  });
  if (!studySession || studySession.userId !== userId) throw new SessionError("Série introuvable.");

  const attempts = await db.attempt.findMany({
    where: { userId, studySessionId },
    select: {
      isCorrect: true,
      sentence: {
        select: {
          rule: {
            select: { id: true, slug: true, title: true, category: { select: { name: true } } },
          },
        },
      },
    },
  });

  const total = attempts.length;
  const correct = attempts.filter((a) => a.isCorrect).length;
  const score = total === 0 ? 0 : Math.round((correct / total) * 100);

  const buckets = new Map<string, { correct: number; total: number }>();
  for (const a of attempts) {
    const name = a.sentence.rule.category.name;
    const bucket = buckets.get(name) ?? { correct: 0, total: 0 };
    bucket.total++;
    if (a.isCorrect) bucket.correct++;
    buckets.set(name, bucket);
  }

  if (!studySession.finishedAt) {
    await db.studySession.update({
      where: { id: studySessionId },
      data: { finishedAt: new Date(), score, questionCount: total || studySession.questionCount },
    });
    if (studySession.type === StudySessionType.test) {
      await db.user.update({ where: { id: userId }, data: { placementDoneAt: new Date() } });
    }
  }

  const ruleIds = [...new Set(attempts.map((a) => a.sentence.rule.id))];
  const [ruleCount, mastered, weakProgress] = await Promise.all([
    db.rule.count({ where: { status: "active" } }),
    db.ruleProgress.count({ where: { userId, box: { gte: 4 } } }),
    db.ruleProgress.findMany({
      where: { userId, ruleId: { in: ruleIds }, box: { lte: 1 } },
      orderBy: { box: "asc" },
      take: 5,
      select: { box: true, rule: { select: { slug: true, title: true } } },
    }),
  ]);

  return {
    studySessionId,
    mode: studySession.type,
    score,
    correct,
    total,
    byCategory: [...buckets.entries()].map(([category, v]) => ({ category, ...v })),
    level: estimateLevel(mastered, ruleCount),
    mastered,
    ruleCount,
    weakest: weakProgress.map((p) => ({ slug: p.rule.slug, title: p.rule.title, box: p.box })),
  };
}
