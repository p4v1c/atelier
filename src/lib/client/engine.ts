/**
 * Moteur de jeu, en deux implémentations d'une même interface.
 *
 *   ServerEngine — connecté : tout passe par l'API, le palier est calculé
 *                  côté serveur, la réponse n'arrive qu'après avoir répondu.
 *   GuestEngine  — invité : le contenu est chargé une fois, le planificateur
 *                  (le même fichier, pur) tourne dans le navigateur, la
 *                  progression va dans localStorage.
 *
 * Les écrans n'utilisent que cette interface : ils ignorent lequel des deux
 * les alimente, et il n'y a donc qu'une seule version de chaque écran.
 *
 * Les deux corrigent par le même registre de types d'exercices : le mode
 * invité et le mode connecté ne peuvent pas diverger sur ce qui est juste.
 */
import type {
  AnswerVerdict,
  CataloguePayload,
  DictationDetail,
  DictationResultPayload,
  DictationsPayload,
  ProgressPayload,
  PublicContent,
  SkillProgressView,
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
import { kind as kindById } from "../../modules";
import { apiGet, apiPost } from "./api";
import {
  clearGuestState,
  emptyGuestState,
  guestModule,
  guestSkill,
  loadGuestState,
  MODULE_PAR_DEFAUT,
  saveGuestState,
  type GuestState,
} from "./guest-store";

export type StartOptions = {
  mode: StudyMode;
  size: number;
  category: string | null;
  skill?: string | null;
  moduleId?: string;
};

export type AnswerInput = { studySessionId: string; exerciseId: string; answer: unknown };

export interface Engine {
  readonly isGuest: boolean;
  start(options: StartOptions): Promise<StartedSession>;
  answer(input: AnswerInput): Promise<AnswerVerdict>;
  finish(studySessionId: string): Promise<SessionSummary>;
  progress(moduleId?: string): Promise<ProgressPayload>;
  catalogue(moduleId?: string): Promise<CataloguePayload>;
  dictations(moduleId?: string): Promise<DictationsPayload>;
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
    if (options.skill) params.set("skill", options.skill);
    if (options.moduleId) params.set("module", options.moduleId);
    return apiGet<StartedSession>(`/api/session/next?${params}`);
  }
  answer(input: AnswerInput): Promise<AnswerVerdict> {
    return apiPost<AnswerVerdict>("/api/session/answer", input);
  }
  finish(studySessionId: string): Promise<SessionSummary> {
    return apiPost<SessionSummary>("/api/session/finish", { studySessionId });
  }
  progress(moduleId?: string): Promise<ProgressPayload> {
    return apiGet<ProgressPayload>(`/api/progress${moduleId ? `?module=${moduleId}` : ""}`);
  }
  catalogue(moduleId?: string): Promise<CataloguePayload> {
    return apiGet<CataloguePayload>(`/api/catalogue${moduleId ? `?module=${moduleId}` : ""}`);
  }
  dictations(moduleId?: string): Promise<DictationsPayload> {
    return apiGet<DictationsPayload>(`/api/dictations${moduleId ? `?module=${moduleId}` : ""}`);
  }
  dictation(id: string): Promise<DictationDetail> {
    return apiGet<DictationDetail>(`/api/dictations/${id}`);
  }
  gradeDictation(id: string, text: string): Promise<DictationResultPayload> {
    return apiPost<DictationResultPayload>(`/api/dictations/${id}/attempt`, { text });
  }
}

/* ──────────────────────────── mode invité ──────────────────────────── */

const contentByModule = new Map<string, Promise<PublicContent>>();
export function loadPublicContent(moduleId = "francais"): Promise<PublicContent> {
  let p = contentByModule.get(moduleId);
  if (!p) {
    p = apiGet<PublicContent>(`/api/public/content?module=${moduleId}`);
    contentByModule.set(moduleId, p);
  }
  return p;
}

export class GuestEngine implements Engine {
  readonly isGuest = true;
  private state: GuestState;
  /** Séries en cours, en mémoire seulement : une série n'a pas à survivre au rechargement. */
  private series = new Map<
    string,
    {
      mode: StudyMode;
      moduleId: string;
      category: string | null;
      skillByExercise: Map<string, string>;
      results: Map<string, boolean>;
    }
  >();
  private counter = 0;

  constructor(private readonly content: PublicContent) {
    this.state = loadGuestState();
  }

  private get moduleId() {
    return this.content.moduleId ?? MODULE_PAR_DEFAUT;
  }

  private save() {
    saveGuestState(this.state);
  }

  private progressOf(slug: string) {
    return guestSkill(this.state, this.moduleId, slug);
  }

  /** Compétences jouables : les « cas discutés » sont consultables, jamais servis. */
  private playableSkills() {
    return this.content.skills.filter((r) => !r.disputed && r.exercises.length > 0);
  }

  private candidates(category: string | null): Candidate[] {
    const skills = guestModule(this.state, this.moduleId).skills;
    return this.playableSkills()
      .filter((r) => !category || r.category === category)
      .map((r) => {
        const p = skills[r.slug];
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

  /** Fabrique la question comme le ferait le serveur : même code, même retrait. */
  private poser(exercise: { id: string; kind: string; payload: unknown }) {
    return kindById(exercise.kind).toQuestion(exercise.payload);
  }

  async start(options: StartOptions): Promise<StartedSession> {
    // Série sur une seule compétence : tous ses exercices, dans le désordre.
    if (options.mode === "skill") return this.startSingleSkill(options);

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
          : "Aucun contenu disponible pour cette sélection."
      );
    }

    const bySlug = new Map(this.content.skills.map((r) => [r.slug, r]));
    const skillByExercise = new Map<string, string>();
    const questions = selection.flatMap((candidate, i) => {
      const skill = bySlug.get(candidate.ruleId);
      if (!skill) return [];
      const exercise = pickSentence(skill.exercises, this.progressOf(skill.slug).lastExerciseId);
      if (!exercise) return [];
      skillByExercise.set(exercise.id, skill.slug);
      return [
        {
          position: i + 1,
          exerciseId: exercise.id,
          skillId: skill.slug,
          category: skill.category,
          kind: exercise.kind,
          question: this.poser(exercise),
        },
      ];
    });

    const studySessionId = `invite-${++this.counter}`;
    this.series.set(studySessionId, {
      mode: options.mode,
      moduleId: this.moduleId,
      category: options.category,
      skillByExercise,
      results: new Map(),
    });
    return {
      studySessionId,
      mode: options.mode,
      moduleId: this.moduleId,
      category: options.category,
      skill: null,
      questions,
    };
  }

  private startSingleSkill(options: StartOptions): StartedSession {
    const skill = this.content.skills.find((r) => r.slug === options.skill && !r.disputed);
    if (!skill || skill.exercises.length === 0) {
      throw new NoContentError("Ce point ne peut pas être travaillé seul.");
    }
    const skillByExercise = new Map<string, string>();
    const questions = shuffle(skill.exercises)
      .slice(0, options.size)
      .map((exercise, i) => {
        skillByExercise.set(exercise.id, skill.slug);
        return {
          position: i + 1,
          exerciseId: exercise.id,
          skillId: skill.slug,
          category: skill.category,
          kind: exercise.kind,
          question: this.poser(exercise),
        };
      });

    const studySessionId = `invite-${++this.counter}`;
    this.series.set(studySessionId, {
      mode: "skill" as const,
      moduleId: this.moduleId,
      category: skill.category,
      skillByExercise,
      results: new Map(),
    });
    return {
      studySessionId,
      mode: "skill",
      moduleId: this.moduleId,
      category: skill.category,
      skill: { slug: skill.slug, title: skill.title },
      questions,
    };
  }

  async answer(input: AnswerInput): Promise<AnswerVerdict> {
    const series = this.series.get(input.studySessionId);
    const slug = series?.skillByExercise.get(input.exerciseId);
    const skill = this.content.skills.find((r) => r.slug === slug);
    const exercise = skill?.exercises.find((s) => s.id === input.exerciseId);
    if (!series || !skill || !exercise) throw new NoContentError("Question introuvable.");

    const skillView = {
      slug: skill.slug,
      title: skill.title,
      statement: skill.statement,
      tip: skill.tip,
      category: skill.category,
      moduleId: this.moduleId,
    };

    // Exactement la correction du serveur — le même fichier, le même verdict.
    const { correct, reveal } = kindById(exercise.kind).grade(exercise.payload, input.answer);

    const progress = this.progressOf(skill.slug);
    if (series.results.has(input.exerciseId)) {
      return {
        correct: series.results.get(input.exerciseId)!,
        reveal,
        skill: skillView,
        box: {
          before: progress.box,
          after: progress.box,
          mastered: isMastered(progress.box),
          justMastered: false,
        },
        alreadyAnswered: true,
      };
    }

    const before = progress.box;
    const after = nextBox(before, correct);
    this.state.answerCounter++;
    guestModule(this.state, this.moduleId).skills[skill.slug] = {
      slug: skill.slug,
      box: after,
      dueAtCounter: dueAfter(this.state.answerCounter, after),
      seenCount: progress.seenCount + 1,
      correctCount: progress.correctCount + (correct ? 1 : 0),
      lastExerciseId: exercise.id,
    };
    series.results.set(input.exerciseId, correct);
    this.save();

    return {
      correct,
      reveal,
      skill: skillView,
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
    const bySlug = new Map(this.content.skills.map((r) => [r.slug, r]));

    const buckets = new Map<string, { correct: number; total: number }>();
    for (const [exerciseId, correct] of results) {
      const slug = series?.skillByExercise.get(exerciseId);
      const category = slug ? (bySlug.get(slug)?.category ?? "—") : "—";
      const bucket = buckets.get(category) ?? { correct: 0, total: 0 };
      bucket.total++;
      if (correct) bucket.correct++;
      buckets.set(category, bucket);
    }

    const total = results.length;
    const correct = results.filter(([, ok]) => ok).length;
    if (series?.mode === "test") this.state.placementDone = true;
    this.state.sessions.push({
      total,
      correct,
      at: new Date().toISOString(),
      module: this.moduleId,
    });
    if (this.state.sessions.length > 40) this.state.sessions.shift();
    this.save();

    const playable = this.playableSkills();
    const skills = guestModule(this.state, this.moduleId).skills;
    const mastered = playable.filter((r) => isMastered(skills[r.slug]?.box ?? 0)).length;

    const weakest = [...(series?.skillByExercise.values() ?? [])]
      .map((slug) => ({ slug, skill: bySlug.get(slug), box: skills[slug]?.box ?? 0 }))
      .filter((x) => x.skill && x.box <= 1)
      .slice(0, 5)
      .map((x) => ({ slug: x.slug, title: x.skill!.title, box: x.box }));

    return {
      studySessionId,
      mode: series?.mode ?? "training",
      moduleId: this.moduleId,
      score: total === 0 ? 0 : Math.round((correct / total) * 100),
      correct,
      total,
      byCategory: [...buckets.entries()].map(([category, v]) => ({ category, ...v })),
      level: estimateLevel(mastered, playable.length),
      mastered,
      skillCount: playable.length,
      weakest,
    };
  }

  async progress(): Promise<ProgressPayload> {
    const playable = this.playableSkills();
    const counter = this.state.answerCounter;
    const stored = guestModule(this.state, this.moduleId).skills;

    const skills: SkillProgressView[] = playable.map((r) => {
      const p = stored[r.slug];
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

    const categories = new Map<
      string,
      { category: string; skills: number; mastered: number; due: number; unseen: number }
    >();
    for (const r of skills) {
      const bucket =
        categories.get(r.category) ?? { category: r.category, skills: 0, mastered: 0, due: 0, unseen: 0 };
      bucket.skills++;
      if (r.mastered) bucket.mastered++;
      if (r.due) bucket.due++;
      if (r.isNew) bucket.unseen++;
      categories.set(r.category, bucket);
    }

    const mastered = skills.filter((r) => r.mastered).length;
    const seen = skills.filter((r) => !r.isNew).length;

    return {
      moduleId: this.moduleId,
      // Un invité n'a qu'un module chargé à la fois : le tableau de bord ne lui
      // montre que celui-là, et l'invite à créer un compte pour les autres.
      modules: [
        {
          id: this.moduleId,
          name: this.content.moduleName,
          tagline: this.content.moduleTagline,
          progression: "repetition-espacee",
          skillCount: skills.length,
          dictationCount: this.content.dictations.length,
          seen,
          mastered,
          due: skills.filter((r) => r.due).length,
          unseen: skills.length - seen,
          level: estimateLevel(mastered, skills.length),
        },
      ],
      level: estimateLevel(mastered, skills.length),
      masteryBox: MASTERY_BOX,
      answerCounter: counter,
      skillCount: skills.length,
      mastered,
      due: skills.filter((r) => r.due).length,
      unseen: skills.filter((r) => r.isNew).length,
      categories: [...categories.values()],
      skills,
      weakest: skills
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
    for (const r of this.content.skills) counts.set(r.category, (counts.get(r.category) ?? 0) + 1);
    const stored = guestModule(this.state, this.moduleId).skills;
    return {
      moduleId: this.moduleId,
      vocabulaire: this.content.vocabulaire ?? {
        skill: "point",
        skillPluriel: "points",
        exercise: "exercice",
        exercisePluriel: "exercices",
        catalogue: "Le catalogue",
      },
      categories: this.content.categories
        .filter((c) => counts.has(c))
        .map((name) => ({ name, skills: counts.get(name) ?? 0 })),
      niveaux: [],
      skills: this.content.skills.map((r) => {
        const p = stored[r.slug];
        return {
          slug: r.slug,
          title: r.title,
          statement: r.statement,
          tip: r.tip,
          difficulty: r.difficulty,
          category: r.category,
          disputed: r.disputed,
          exerciseCount: r.exercises.length,
          box: p?.box ?? 0,
          isNew: p === undefined,
          seenCount: p?.seenCount ?? 0,
          correctCount: p?.correctCount ?? 0,
        };
      }),
    };
  }

  async dictations(): Promise<DictationsPayload> {
    const scores = guestModule(this.state, this.moduleId).dictations;
    return {
      themes: [...new Set(this.content.dictations.map((d) => d.theme))].sort(),
      dictations: this.content.dictations.map((d) => ({
        id: d.id,
        number: d.number,
        theme: d.theme,
        difficulty: d.difficulty,
        voice: d.voice,
        level: d.level,
        wordCount: dictationWords(d.text).length,
        skills: d.skills.map((slug) => ({
          slug,
          title: this.content.skills.find((r) => r.slug === slug)?.title ?? slug,
        })),
        bestScore: scores[d.id] ?? null,
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
      voice: d.voice,
      level: d.level,
      bestScore: guestModule(this.state, this.moduleId).dictations[d.id] ?? null,
    };
  }

  async gradeDictation(id: string, text: string): Promise<DictationResultPayload> {
    const d = this.content.dictations.find((x) => x.id === id);
    if (!d) throw new NoContentError("Dictée introuvable.");
    const result = gradeDictation(d.text, text);
    const scores = guestModule(this.state, this.moduleId).dictations;
    const best = Math.max(scores[id] ?? 0, result.score);
    scores[id] = best;
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
