/**
 * Moteur de jeu, en deux implémentations d'une même interface.
 *
 *   ServerEngine — connecté : tout passe par l'API, le palier est calculé
 *                  côté serveur, le mot fautif n'arrive qu'après la réponse.
 *   GuestEngine  — invité : le contenu est chargé une fois, le planificateur
 *                  (le même fichier, pur) tourne dans le navigateur, la
 *                  progression va dans localStorage.
 *
 * Les écrans n'utilisent que cette interface : ils ignorent lequel des deux
 * les alimente, et il n'y a donc qu'une seule version de chaque écran.
 */
import type {
  AnswerVerdict,
  CataloguePayload,
  DictationDetail,
  DictationResultPayload,
  DictationsPayload,
  ProgressPayload,
  PublicContent,
  RuleProgressView,
  SessionSummary,
  StartedSession,
  StudyMode,
} from "../api-types";
import { gradeDictation, dictationWords } from "../study/dictation";
import {
  buildPlacementTest,
  buildSeries,
  buildWeaknessSeries,
  dueAfter,
  estimateLevel,
  isMastered,
  MASTERY_BOX,
  nextBox,
  pickSentence,
  shuffle,
  TEST_SIZE,
  type Candidate,
} from "../study/scheduler";
import { tokenize } from "../tokenize";
import { apiGet, apiPost } from "./api";
import {
  clearGuestState,
  emptyGuestState,
  guestRule,
  loadGuestState,
  saveGuestState,
  type GuestState,
} from "./guest-store";

export type StartOptions = { mode: StudyMode; size: number; category: string | null; rule?: string | null };

export interface Engine {
  readonly isGuest: boolean;
  start(options: StartOptions): Promise<StartedSession>;
  answer(input: { studySessionId: string; sentenceId: string; answerIndex: number }): Promise<AnswerVerdict>;
  finish(studySessionId: string): Promise<SessionSummary>;
  progress(): Promise<ProgressPayload>;
  catalogue(): Promise<CataloguePayload>;
  dictations(): Promise<DictationsPayload>;
  dictation(id: string): Promise<DictationDetail>;
  gradeDictation(id: string, text: string): Promise<DictationResultPayload>;
  /** Efface la progression. Le mode connecté ne le propose pas. */
  reset?(): Promise<void>;
}

export class NoContentError extends Error {}

/* ─────────────────────────── mode connecté ─────────────────────────── */

export class ServerEngine implements Engine {
  readonly isGuest = false;

  start(options: StartOptions): Promise<StartedSession> {
    const params = new URLSearchParams({ mode: options.mode, size: String(options.size) });
    if (options.category) params.set("category", options.category);
    if (options.rule) params.set("rule", options.rule);
    return apiGet<StartedSession>(`/api/session/next?${params}`);
  }
  answer(input: { studySessionId: string; sentenceId: string; answerIndex: number }): Promise<AnswerVerdict> {
    return apiPost<AnswerVerdict>("/api/session/answer", input);
  }
  finish(studySessionId: string): Promise<SessionSummary> {
    return apiPost<SessionSummary>("/api/session/finish", { studySessionId });
  }
  progress(): Promise<ProgressPayload> {
    return apiGet<ProgressPayload>("/api/progress");
  }
  catalogue(): Promise<CataloguePayload> {
    return apiGet<CataloguePayload>("/api/rules");
  }
  dictations(): Promise<DictationsPayload> {
    return apiGet<DictationsPayload>("/api/dictations");
  }
  dictation(id: string): Promise<DictationDetail> {
    return apiGet<DictationDetail>(`/api/dictations/${id}`);
  }
  gradeDictation(id: string, text: string): Promise<DictationResultPayload> {
    return apiPost<DictationResultPayload>(`/api/dictations/${id}/attempt`, { text });
  }
}

/* ──────────────────────────── mode invité ──────────────────────────── */

let contentPromise: Promise<PublicContent> | null = null;
export function loadPublicContent(): Promise<PublicContent> {
  contentPromise ??= apiGet<PublicContent>("/api/public/content");
  return contentPromise;
}

export class GuestEngine implements Engine {
  readonly isGuest = true;
  private state: GuestState;
  /** Séries en cours, en mémoire seulement : une série n'a pas à survivre au rechargement. */
  private series = new Map<string, { mode: StudyMode; category: string | null; ruleBySentence: Map<string, string>; results: Map<string, boolean> }>();
  private counter = 0;

  constructor(private readonly content: PublicContent) {
    this.state = loadGuestState();
  }

  private save() {
    saveGuestState(this.state);
  }

  /** Règles jouables : les « cas discutés » sont consultables, jamais servis. */
  private playableRules() {
    return this.content.rules.filter((r) => !r.disputed && r.sentences.length > 0);
  }

  private candidates(category: string | null): Candidate[] {
    return this.playableRules()
      .filter((r) => !category || r.category === category)
      .map((r) => {
        const p = this.state.rules[r.slug];
        return {
          ruleId: r.slug,
          category: r.category,
          difficulty: r.difficulty,
          box: p?.box ?? 0,
          dueAtCounter: p?.dueAtCounter ?? 0,
          isNew: p === undefined,
        };
      });
  }

  async start(options: StartOptions): Promise<StartedSession> {
    // Série sur une seule règle : toutes ses phrases, dans le désordre.
    if (options.mode === "rule") return this.startSingleRule(options);

    const pool = this.candidates(options.mode === "test" ? null : options.category);
    const selection =
      options.mode === "test"
        ? buildPlacementTest(pool, TEST_SIZE)
        : options.mode === "weakness"
          ? buildWeaknessSeries(pool, options.size)
          : buildSeries(pool, options.size, this.state.answerCounter);

    if (selection.length === 0) {
      throw new NoContentError(
        options.mode === "weakness"
          ? "Aucune faiblesse enregistrée pour l'instant : lance une série normale."
          : "Aucune règle disponible pour cette sélection."
      );
    }

    const bySlug = new Map(this.content.rules.map((r) => [r.slug, r]));
    const ruleBySentence = new Map<string, string>();
    const questions = selection.flatMap((candidate, i) => {
      const rule = bySlug.get(candidate.ruleId);
      if (!rule) return [];
      const sentence = pickSentence(rule.sentences, guestRule(this.state, rule.slug).lastSentenceId);
      if (!sentence) return [];
      ruleBySentence.set(sentence.id, rule.slug);
      return [
        {
          position: i + 1,
          sentenceId: sentence.id,
          ruleId: rule.slug,
          category: rule.category,
          tokens: tokenize(sentence.text),
        },
      ];
    });

    const studySessionId = `invite-${++this.counter}`;
    this.series.set(studySessionId, {
      mode: options.mode,
      category: options.category,
      ruleBySentence,
      results: new Map(),
    });
    return { studySessionId, mode: options.mode, category: options.category, rule: null, questions };
  }

  private startSingleRule(options: StartOptions): StartedSession {
    const rule = this.content.rules.find((r) => r.slug === options.rule && !r.disputed);
    if (!rule || rule.sentences.length === 0) {
      throw new NoContentError("Cette règle ne peut pas être travaillée seule.");
    }
    const ruleBySentence = new Map<string, string>();
    const questions = shuffle(rule.sentences)
      .slice(0, options.size)
      .map((sentence, i) => {
        ruleBySentence.set(sentence.id, rule.slug);
        return {
          position: i + 1,
          sentenceId: sentence.id,
          ruleId: rule.slug,
          category: rule.category,
          tokens: tokenize(sentence.text),
        };
      });

    const studySessionId = `invite-${++this.counter}`;
    this.series.set(studySessionId, {
      mode: "rule",
      category: rule.category,
      ruleBySentence,
      results: new Map(),
    });
    return {
      studySessionId,
      mode: "rule",
      category: rule.category,
      rule: { slug: rule.slug, title: rule.title },
      questions,
    };
  }

  async answer(input: { studySessionId: string; sentenceId: string; answerIndex: number }): Promise<AnswerVerdict> {
    const series = this.series.get(input.studySessionId);
    const slug = series?.ruleBySentence.get(input.sentenceId);
    const rule = this.content.rules.find((r) => r.slug === slug);
    const sentence = rule?.sentences.find((s) => s.id === input.sentenceId);
    if (!series || !rule || !sentence) throw new NoContentError("Question introuvable.");

    const ruleView = {
      slug: rule.slug,
      title: rule.title,
      statement: rule.statement,
      tip: rule.tip,
      category: rule.category,
    };

    const already = series.results.has(input.sentenceId);
    const progress = guestRule(this.state, rule.slug);
    if (already) {
      return {
        correct: series.results.get(input.sentenceId)!,
        faultyTokenIndex: sentence.faultyTokenIndex,
        correction: sentence.correction,
        rule: ruleView,
        box: { before: progress.box, after: progress.box, mastered: isMastered(progress.box), justMastered: false },
        alreadyAnswered: true,
      };
    }

    const correct = input.answerIndex === sentence.faultyTokenIndex;
    const before = progress.box;
    const after = nextBox(before, correct);
    this.state.answerCounter++;
    this.state.rules[rule.slug] = {
      slug: rule.slug,
      box: after,
      dueAtCounter: dueAfter(this.state.answerCounter, after),
      seenCount: progress.seenCount + 1,
      correctCount: progress.correctCount + (correct ? 1 : 0),
      lastSentenceId: sentence.id,
    };
    series.results.set(input.sentenceId, correct);
    this.save();

    return {
      correct,
      faultyTokenIndex: sentence.faultyTokenIndex,
      correction: sentence.correction,
      rule: ruleView,
      box: {
        before,
        after,
        mastered: isMastered(after),
        justMastered: isMastered(after) && !isMastered(before),
      },
      alreadyAnswered: false,
    };
  }

  async finish(studySessionId: string): Promise<SessionSummary> {
    const series = this.series.get(studySessionId);
    const results = [...(series?.results ?? new Map<string, boolean>())];
    const bySlug = new Map(this.content.rules.map((r) => [r.slug, r]));

    const buckets = new Map<string, { correct: number; total: number }>();
    for (const [sentenceId, correct] of results) {
      const slug = series?.ruleBySentence.get(sentenceId);
      const category = slug ? (bySlug.get(slug)?.category ?? "—") : "—";
      const bucket = buckets.get(category) ?? { correct: 0, total: 0 };
      bucket.total++;
      if (correct) bucket.correct++;
      buckets.set(category, bucket);
    }

    const total = results.length;
    const correct = results.filter(([, ok]) => ok).length;
    if (series?.mode === "test") this.state.placementDone = true;
    this.state.sessions.push({ total, correct, at: new Date().toISOString() });
    if (this.state.sessions.length > 40) this.state.sessions.shift();
    this.save();

    const playable = this.playableRules();
    const mastered = playable.filter((r) => isMastered(this.state.rules[r.slug]?.box ?? 0)).length;

    const weakest = [...(series?.ruleBySentence.values() ?? [])]
      .map((slug) => ({ slug, rule: bySlug.get(slug), box: this.state.rules[slug]?.box ?? 0 }))
      .filter((x) => x.rule && x.box <= 1)
      .slice(0, 5)
      .map((x) => ({ slug: x.slug, title: x.rule!.title, box: x.box }));

    return {
      studySessionId,
      mode: series?.mode ?? "training",
      score: total === 0 ? 0 : Math.round((correct / total) * 100),
      correct,
      total,
      byCategory: [...buckets.entries()].map(([category, v]) => ({ category, ...v })),
      level: estimateLevel(mastered, playable.length),
      mastered,
      ruleCount: playable.length,
      weakest,
    };
  }

  async progress(): Promise<ProgressPayload> {
    const playable = this.playableRules();
    const counter = this.state.answerCounter;

    const rules: RuleProgressView[] = playable.map((r) => {
      const p = this.state.rules[r.slug];
      const box = p?.box ?? 0;
      const isNew = p === undefined;
      return {
        slug: r.slug,
        title: r.title,
        category: r.category,
        difficulty: r.difficulty,
        box,
        isNew,
        mastered: !isNew && isMastered(box),
        due: !isNew && (p?.dueAtCounter ?? 0) <= counter,
        seenCount: p?.seenCount ?? 0,
        correctCount: p?.correctCount ?? 0,
        lastReviewedAt: null,
      };
    });

    const categories = new Map<string, { category: string; rules: number; mastered: number; due: number; unseen: number }>();
    for (const r of rules) {
      const bucket = categories.get(r.category) ?? { category: r.category, rules: 0, mastered: 0, due: 0, unseen: 0 };
      bucket.rules++;
      if (r.mastered) bucket.mastered++;
      if (r.due) bucket.due++;
      if (r.isNew) bucket.unseen++;
      categories.set(r.category, bucket);
    }

    const mastered = rules.filter((r) => r.mastered).length;
    return {
      level: estimateLevel(mastered, rules.length),
      masteryBox: MASTERY_BOX,
      answerCounter: counter,
      ruleCount: rules.length,
      mastered,
      due: rules.filter((r) => r.due).length,
      unseen: rules.filter((r) => r.isNew).length,
      categories: [...categories.values()],
      rules,
      weakest: rules
        .filter((r) => !r.isNew)
        .sort((a, b) => a.box - b.box || a.correctCount / a.seenCount - b.correctCount / b.seenCount)
        .slice(0, 8),
      recentSessions: this.state.sessions
        .slice(-12)
        .reverse()
        .map((s) => ({
          type: "training",
          questionCount: s.total,
          score: s.total === 0 ? 0 : Math.round((s.correct / s.total) * 100),
          startedAt: s.at,
          finishedAt: s.at,
        })),
    };
  }

  async catalogue(): Promise<CataloguePayload> {
    const counts = new Map<string, number>();
    for (const r of this.content.rules) counts.set(r.category, (counts.get(r.category) ?? 0) + 1);
    return {
      categories: this.content.categories
        .filter((c) => counts.has(c))
        .map((name) => ({ name, rules: counts.get(name) ?? 0 })),
      rules: this.content.rules.map((r) => {
        const p = this.state.rules[r.slug];
        return {
          slug: r.slug,
          title: r.title,
          statement: r.statement,
          tip: r.tip,
          difficulty: r.difficulty,
          category: r.category,
          disputed: r.disputed,
          sentenceCount: r.sentences.length,
          box: p?.box ?? 0,
          isNew: p === undefined,
          seenCount: p?.seenCount ?? 0,
          correctCount: p?.correctCount ?? 0,
        };
      }),
    };
  }

  async dictations(): Promise<DictationsPayload> {
    return {
      themes: [...new Set(this.content.dictations.map((d) => d.theme))].sort(),
      dictations: this.content.dictations.map((d) => ({
        id: d.id,
        number: d.number,
        theme: d.theme,
        difficulty: d.difficulty,
        wordCount: dictationWords(d.text).length,
        rules: d.rules.map((slug) => ({
          slug,
          title: this.content.rules.find((r) => r.slug === slug)?.title ?? slug,
        })),
        bestScore: this.state.dictations[d.id] ?? null,
        lastAttemptAt: null,
      })),
    };
  }

  async dictation(id: string): Promise<DictationDetail> {
    const d = this.content.dictations.find((x) => x.id === id);
    if (!d) throw new NoContentError("Dictée introuvable.");
    return {
      id: d.id,
      text: d.text,
      theme: d.theme,
      difficulty: d.difficulty,
      bestScore: this.state.dictations[d.id] ?? null,
    };
  }

  async gradeDictation(id: string, text: string): Promise<DictationResultPayload> {
    const d = this.content.dictations.find((x) => x.id === id);
    if (!d) throw new NoContentError("Dictée introuvable.");
    const result = gradeDictation(d.text, text);
    const best = Math.max(this.state.dictations[id] ?? 0, result.score);
    this.state.dictations[id] = best;
    this.save();
    return { ...result, expected: d.text, bestScore: best };
  }

  async reset(): Promise<void> {
    clearGuestState();
    this.state = emptyGuestState();
    this.series.clear();
  }

  /** Ce que l'inscription enverra pour reprendre la progression locale. */
  snapshot(): GuestState {
    return this.state;
  }
}
