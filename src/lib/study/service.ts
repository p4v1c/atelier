/**
 * Couche base de données du planificateur.
 *
 * Les décisions (quelles compétences, quel palier, quelle échéance) viennent de
 * scheduler.ts, qui est pur. Ici on ne fait que lire, écrire et assembler.
 *
 * Deux règles d'or :
 *   · le verdict est calculé ici, jamais reçu du client ;
 *   · ce fichier ne sait pas ce qu'est une faute d'orthographe. Fabriquer la
 *     question et corriger la réponse sont délégués au type d'exercice.
 *     C'est ce qui permet à un module de géographie de réutiliser tout ceci
 *     sans y toucher une ligne.
 */
import { Prisma, StudySessionType, type PrismaClient } from "@prisma/client";
import { prisma } from "../prisma";
import { kind as kindById } from "../../modules";
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

export type StudyMode = "test" | "training" | "targeted" | "weakness" | "skill";

export const MODULE_PAR_DEFAUT = "francais";

export type Question = {
  /** Position dans la série, à partir de 1. */
  position: number;
  exerciseId: string;
  skillId: string;
  category: string;
  /** Type d'exercice : l'écran s'en sert pour choisir quoi afficher. */
  kind: string;
  /** La question, telle que le type d'exercice la donne. Sans la réponse. */
  question: unknown;
};

export type StartedSession = {
  studySessionId: string;
  mode: StudyMode;
  moduleId: string;
  category: string | null;
  /** Renseigné pour une série portant sur une seule compétence. */
  skill: { slug: string; title: string } | null;
  questions: Question[];
};

type Db = PrismaClient;

/**
 * Toutes les compétences jouables du module, avec la progression de
 * l'utilisateur. Les `disputed` sont écartées : ce sont des points de débat,
 * consultables au catalogue, jamais notés. Les `draft` non plus : elles
 * attendent relecture.
 */
async function loadCandidates(
  userId: string,
  moduleId: string,
  category: string | null,
  db: Db = prisma
): Promise<Candidate[]> {
  const skills = await db.skill.findMany({
    where: {
      moduleId,
      status: "active",
      ...(category ? { category: { name: category } } : {}),
      // Une compétence sans exercice jouable ne doit pas bloquer une série.
      exercises: { some: { status: "active" } },
    },
    select: {
      id: true,
      difficulty: true,
      category: { select: { name: true } },
      progress: { where: { userId }, select: { box: true, dueAtCounter: true, isNew: true } },
    },
  });

  return skills.map((skill) => {
    const p = skill.progress[0];
    return {
      ruleId: skill.id,
      category: skill.category.name,
      difficulty: skill.difficulty,
      box: p?.box ?? 0,
      dueAtCounter: p?.dueAtCounter ?? 0,
      isNew: p?.isNew ?? true,
    };
  });
}

export class NoContentError extends Error {}

/** Fabrique la question à envoyer, sans jamais laisser passer la réponse. */
function poser(exercise: { id: string; kind: string; payload: unknown }): unknown {
  return kindById(exercise.kind).toQuestion(exercise.payload);
}

/** Ouvre une série et tire ses exercices. */
export async function startStudySession(
  userId: string,
  options: {
    mode: StudyMode;
    size: number;
    category: string | null;
    skill?: string | null;
    moduleId?: string;
  },
  db: Db = prisma,
  random: Random = Math.random
): Promise<StartedSession> {
  const { mode, size, category } = options;
  const moduleId = options.moduleId ?? MODULE_PAR_DEFAUT;

  // Série sur une seule compétence : on ne tire pas un exercice par compétence,
  // mais plusieurs de la même. C'est le seul mode qui fonctionne ainsi.
  if (mode === "skill") {
    return startSingleSkillSession(userId, moduleId, options.skill ?? null, size, db, random);
  }

  const user = await db.user.findUniqueOrThrow({
    where: { id: userId },
    select: { answerCounter: true },
  });
  const candidates = await loadCandidates(userId, moduleId, mode === "test" ? null : category, db);
  if (candidates.length === 0) throw new NoContentError("Aucun contenu disponible pour cette sélection.");

  let selection: Candidate[];
  if (mode === "test") selection = buildPlacementTest(candidates, size, random);
  else if (mode === "weakness") selection = buildWeaknessSeries(candidates, size, random);
  else selection = buildSeries(candidates, size, user.answerCounter, random);

  if (selection.length === 0) {
    throw new NoContentError(
      mode === "weakness"
        ? "Aucune faiblesse enregistrée pour l'instant : lance une série normale."
        : "Aucun contenu disponible pour cette sélection."
    );
  }

  // Une seule requête pour tous les exercices de la série.
  const skillIds = selection.map((c) => c.ruleId);
  const [exercises, progress] = await Promise.all([
    db.exercise.findMany({
      where: { skillId: { in: skillIds }, status: "active" },
      select: { id: true, skillId: true, kind: true, payload: true },
    }),
    db.skillProgress.findMany({
      where: { userId, skillId: { in: skillIds } },
      select: { skillId: true, lastExerciseId: true },
    }),
  ]);

  const bySkill = new Map<string, typeof exercises>();
  for (const e of exercises) {
    const list = bySkill.get(e.skillId) ?? [];
    list.push(e);
    bySkill.set(e.skillId, list);
  }
  const lastBySkill = new Map(progress.map((p) => [p.skillId, p.lastExerciseId]));

  const questions: Question[] = [];
  for (const candidate of selection) {
    const pool = bySkill.get(candidate.ruleId) ?? [];
    const exercise = pickSentence(pool, lastBySkill.get(candidate.ruleId) ?? null, random);
    if (!exercise) continue; // compétence sans exercice actif : on la saute plutôt que d'échouer
    questions.push({
      position: questions.length + 1,
      exerciseId: exercise.id,
      skillId: candidate.ruleId,
      category: candidate.category,
      kind: exercise.kind,
      question: poser(exercise),
    });
  }

  if (questions.length === 0) throw new NoContentError("Aucun exercice disponible pour cette sélection.");

  const studySession = await db.studySession.create({
    data: {
      userId,
      moduleId,
      type: StudySessionType[mode],
      category,
      questionCount: questions.length,
    },
    select: { id: true },
  });

  return { studySessionId: studySession.id, mode, moduleId, category, skill: null, questions };
}

/**
 * Série d'entraînement sur une compétence unique, lancée depuis sa fiche.
 *
 * Tous ses exercices y passent, dans un ordre aléatoire : c'est une révision
 * ciblée, pas une révision espacée. Le palier bouge néanmoins à chaque réponse,
 * comme partout ailleurs.
 */
async function startSingleSkillSession(
  userId: string,
  moduleId: string,
  slug: string | null,
  size: number,
  db: Db,
  random: Random
): Promise<StartedSession> {
  if (!slug) throw new NoContentError("Aucune compétence indiquée.");

  const skill = await db.skill.findFirst({
    where: { slug, moduleId, status: "active" },
    select: {
      id: true,
      slug: true,
      title: true,
      category: { select: { name: true } },
      exercises: {
        where: { status: "active" },
        select: { id: true, kind: true, payload: true },
      },
    },
  });
  if (!skill) throw new NoContentError("Ce point ne peut pas être travaillé seul.");
  if (skill.exercises.length === 0) throw new NoContentError("Aucun exercice disponible pour ce point.");

  const questions: Question[] = shuffle(skill.exercises, random)
    .slice(0, size)
    .map((exercise, i) => ({
      position: i + 1,
      exerciseId: exercise.id,
      skillId: skill.id,
      category: skill.category.name,
      kind: exercise.kind,
      question: poser(exercise),
    }));

  const studySession = await db.studySession.create({
    data: {
      userId,
      moduleId,
      type: StudySessionType.skill,
      category: skill.category.name,
      skillSlug: skill.slug,
      questionCount: questions.length,
    },
    select: { id: true },
  });

  return {
    studySessionId: studySession.id,
    mode: "skill",
    moduleId,
    category: skill.category.name,
    skill: { slug: skill.slug, title: skill.title },
    questions,
  };
}

export type AnswerVerdict = {
  correct: boolean;
  /** Ce que le type d'exercice consent à dévoiler, une fois la note posée. */
  reveal: unknown;
  skill: {
    slug: string;
    title: string;
    statement: string;
    tip: string;
    category: string;
    moduleId: string;
  };
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
  input: { studySessionId: string; exerciseId: string; answer: unknown },
  db: Db = prisma
): Promise<AnswerVerdict> {
  const { studySessionId, exerciseId, answer } = input;

  const studySession = await db.studySession.findUnique({
    where: { id: studySessionId },
    select: { id: true, userId: true, finishedAt: true },
  });
  if (!studySession || studySession.userId !== userId) throw new SessionError("Série introuvable.");
  if (studySession.finishedAt) throw new SessionError("Cette série est déjà terminée.");

  const exercise = await db.exercise.findUnique({
    where: { id: exerciseId },
    select: {
      id: true,
      kind: true,
      payload: true,
      skill: {
        select: {
          id: true,
          slug: true,
          title: true,
          statement: true,
          tip: true,
          moduleId: true,
          category: { select: { name: true } },
        },
      },
    },
  });
  if (!exercise) throw new SessionError("Exercice introuvable.");

  const skill = {
    slug: exercise.skill.slug,
    title: exercise.skill.title,
    statement: exercise.skill.statement,
    tip: exercise.skill.tip,
    category: exercise.skill.category.name,
    moduleId: exercise.skill.moduleId,
  };

  // La correction : le seul endroit du serveur qui sache ce que « juste » veut
  // dire pour ce type d'exercice.
  const { correct, reveal } = kindById(exercise.kind).grade(exercise.payload, answer);

  const previous = await db.attempt.findFirst({
    where: { userId, studySessionId, exerciseId },
    select: { isCorrect: true },
  });
  if (previous) {
    const box = await db.skillProgress.findUnique({
      where: { userId_skillId: { userId, skillId: exercise.skill.id } },
      select: { box: true },
    });
    const current = box?.box ?? 0;
    return {
      correct: previous.isCorrect,
      reveal,
      skill,
      box: { before: current, after: current, mastered: isMastered(current), justMastered: false },
      alreadyAnswered: true,
    };
  }

  const verdict = await db.$transaction(async (tx) => {
    const existing = await tx.skillProgress.findUnique({
      where: { userId_skillId: { userId, skillId: exercise.skill.id } },
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

    await tx.skillProgress.upsert({
      where: { userId_skillId: { userId, skillId: exercise.skill.id } },
      create: {
        userId,
        skillId: exercise.skill.id,
        box: after,
        dueAtCounter: dueAfter(user.answerCounter, after),
        seenCount: 1,
        correctCount: correct ? 1 : 0,
        isNew: false,
        lastReviewedAt: new Date(),
        lastExerciseId: exerciseId,
      },
      update: {
        box: after,
        dueAtCounter: dueAfter(user.answerCounter, after),
        seenCount: { increment: 1 },
        ...(correct ? { correctCount: { increment: 1 } } : {}),
        isNew: false,
        lastReviewedAt: new Date(),
        lastExerciseId: exerciseId,
      },
    });

    await tx.attempt.create({
      data: {
        userId,
        exerciseId,
        // Une réponse absente est un JSON null explicite, pas une colonne
        // vide : la distinction compte pour les types d'exercice à saisie.
        answer: answer === undefined || answer === null
          ? Prisma.JsonNull
          : (answer as Prisma.InputJsonValue),
        isCorrect: correct,
        studySessionId,
      },
    });

    return { before, after };
  });

  return {
    correct,
    reveal,
    skill,
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
  moduleId: string;
  score: number;
  correct: number;
  total: number;
  byCategory: { category: string; correct: number; total: number }[];
  level: string;
  mastered: number;
  skillCount: number;
  /** Compétences de la série retombées au plus bas, à retravailler en priorité. */
  weakest: { slug: string; title: string; box: number }[];
};

export async function finishStudySession(
  userId: string,
  studySessionId: string,
  db: Db = prisma
): Promise<SessionSummary> {
  const studySession = await db.studySession.findUnique({
    where: { id: studySessionId },
    select: {
      id: true,
      userId: true,
      type: true,
      moduleId: true,
      questionCount: true,
      finishedAt: true,
    },
  });
  if (!studySession || studySession.userId !== userId) throw new SessionError("Série introuvable.");

  const attempts = await db.attempt.findMany({
    where: { userId, studySessionId },
    select: {
      isCorrect: true,
      exercise: {
        select: {
          skill: {
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
    const name = a.exercise.skill.category.name;
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

  const skillIds = [...new Set(attempts.map((a) => a.exercise.skill.id))];
  const [skillCount, mastered, weakProgress] = await Promise.all([
    db.skill.count({ where: { moduleId: studySession.moduleId, status: "active" } }),
    db.skillProgress.count({
      where: { userId, box: { gte: 4 }, skill: { moduleId: studySession.moduleId } },
    }),
    db.skillProgress.findMany({
      where: { userId, skillId: { in: skillIds }, box: { lte: 1 } },
      orderBy: { box: "asc" },
      take: 5,
      select: { box: true, skill: { select: { slug: true, title: true } } },
    }),
  ]);

  return {
    studySessionId,
    mode: studySession.type,
    moduleId: studySession.moduleId,
    score,
    correct,
    total,
    byCategory: [...buckets.entries()].map(([category, v]) => ({ category, ...v })),
    level: estimateLevel(mastered, skillCount),
    mastered,
    skillCount,
    weakest: weakProgress.map((p) => ({ slug: p.skill.slug, title: p.skill.title, box: p.box })),
  };
}
