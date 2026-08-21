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
  LessonPayload,
  ModulePublic,
  ModuleSummary,
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
  /** Le cours attaché à une compétence, quand elle en a un. */
  lesson(slug: string): Promise<LessonPayload>;
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
  lesson(slug: string): Promise<LessonPayload> {
    return apiGet<LessonPayload>(`/api/lessons/${encodeURIComponent(slug)}`);
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

let modulesPublics: Promise<ModulePublic[]> | null = null;

/**
 * La liste des matières, sans compte.
 *
 * Elle sert au flanc, qui doit toutes les montrer avant d'en ouvrir une :
 * charger les 4 336 phrases du français pour afficher « Espagnol » dans une
 * liste serait absurde.
 */
export function loadPublicModules(): Promise<ModulePublic[]> {
  modulesPublics ??= apiGet<{ modules: ModulePublic[] }>("/api/public/modules").then((r) => r.modules);
  return modulesPublics;
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

  /**
   * Le contenu déjà chargé, par matière.
   *
   * Un invité ouvre rarement les cinq : on ne descend une matière que
   * lorsqu'il y entre. Le catalogue des matières, lui, est connu d'emblée.
   */
  private readonly contenus = new Map<string, PublicContent>();
  private courant: string;

  constructor(
    content: PublicContent,
    private readonly matieres: ModulePublic[] = []
  ) {
    this.state = loadGuestState();
    this.contenus.set(content.moduleId ?? MODULE_PAR_DEFAUT, content);
    this.courant = content.moduleId ?? MODULE_PAR_DEFAUT;
  }

  /** Le contenu d'une matière, téléchargé au besoin. */
  private async ouvrir(moduleId?: string): Promise<PublicContent> {
    const id = moduleId ?? this.courant;
    const deja = this.contenus.get(id);
    if (deja) {
      this.courant = id;
      return deja;
    }
    const contenu = await loadPublicContent(id);
    this.contenus.set(id, contenu);
    this.courant = id;
    return contenu;
  }

  /** La matière qui porte cet exercice, parmi celles déjà ouvertes. */
  private trouverParExercice(exerciseId: string): PublicContent | null {
    for (const c of this.contenus.values()) {
      if (c.skills.some((s) => s.exercises.some((e) => e.id === exerciseId))) return c;
    }
    return null;
  }

  private trouverParDictee(id: string): PublicContent | null {
    for (const c of this.contenus.values()) {
      if (c.dictations.some((d) => d.id === id)) return c;
    }
    return null;
  }

  private get moduleId() {
    return this.courant;
  }
private save() {
    saveGuestState(this.state);
  }

  private progressOf(moduleId: string, slug: string) {
    return guestSkill(this.state, moduleId, slug);
  }

  /** Compétences jouables : les « cas discutés » sont consultables, jamais servis. */
  private playableSkills(contenu: PublicContent) {
    return contenu.skills.filter((r) => !r.disputed && r.exercises.length > 0);
  }

  private candidates(contenu: PublicContent, category: string | null): Candidate[] {
    const skills = guestModule(this.state, contenu.moduleId).skills;
    return this.playableSkills(contenu)
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
    const contenu = await this.ouvrir(options.moduleId);

    // Série sur une seule compétence : tous ses exercices, dans le désordre.
    if (options.mode === "skill") return this.startSingleSkill(contenu, options);

    const pool = this.candidates(contenu, options.mode === "test" ? null : options.category);
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

    const bySlug = new Map(contenu.skills.map((r) => [r.slug, r]));
    const skillByExercise = new Map<string, string>();
    const questions = selection.flatMap((candidate, i) => {
      const skill = bySlug.get(candidate.ruleId);
      if (!skill) return [];
      const exercise = pickSentence(
        skill.exercises,
        this.progressOf(contenu.moduleId, skill.slug).lastExerciseId
      );
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
      moduleId: contenu.moduleId,
      category: options.category,
      skillByExercise,
      results: new Map(),
    });
    return {
      studySessionId,
      mode: options.mode,
      moduleId: contenu.moduleId,
      category: options.category,
      skill: null,
      questions,
    };
  }

  private startSingleSkill(contenu: PublicContent, options: StartOptions): StartedSession {
    const skill = contenu.skills.find((r) => r.slug === options.skill && !r.disputed);
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
      moduleId: contenu.moduleId,
      category: skill.category,
      skillByExercise,
      results: new Map(),
    });
    return {
      studySessionId,
      mode: "skill",
      moduleId: contenu.moduleId,
      category: skill.category,
      skill: { slug: skill.slug, title: skill.title },
      questions,
    };
  }

  async answer(input: AnswerInput): Promise<AnswerVerdict> {
    const series = this.series.get(input.studySessionId);
    const contenu = series ? this.contenus.get(series.moduleId) : this.trouverParExercice(input.exerciseId);
    const slug = series?.skillByExercise.get(input.exerciseId);
    const skill = contenu?.skills.find((r) => r.slug === slug);
    const exercise = skill?.exercises.find((s) => s.id === input.exerciseId);
    if (!series || !contenu || !skill || !exercise) throw new NoContentError("Question introuvable.");

    const moduleId = contenu.moduleId;
    const skillView = {
      slug: skill.slug,
      title: skill.title,
      statement: skill.statement,
      tip: skill.tip,
      category: skill.category,
      moduleId,
    };

    // Exactement la correction du serveur — le même fichier, le même verdict.
    const { correct, reveal } = kindById(exercise.kind).grade(exercise.payload, input.answer);

    const progress = this.progressOf(moduleId, skill.slug);
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
    guestModule(this.state, moduleId).skills[skill.slug] = {
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
    const moduleId = series?.moduleId ?? this.courant;
    const contenu = this.contenus.get(moduleId);
    const results = [...(series?.results ?? new Map<string, boolean>())];
    const bySlug = new Map((contenu?.skills ?? []).map((r) => [r.slug, r]));

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
    this.state.sessions.push({ total, correct, at: new Date().toISOString(), module: moduleId });
    if (this.state.sessions.length > 40) this.state.sessions.shift();
    this.save();

    const playable = contenu ? this.playableSkills(contenu) : [];
    const skills = guestModule(this.state, moduleId).skills;
    const mastered = playable.filter((r) => isMastered(skills[r.slug]?.box ?? 0)).length;

    const weakest = [...(series?.skillByExercise.values() ?? [])]
      .map((slug) => ({ slug, skill: bySlug.get(slug), box: skills[slug]?.box ?? 0 }))
      .filter((x) => x.skill && x.box <= 1)
      .slice(0, 5)
      .map((x) => ({ slug: x.slug, title: x.skill!.title, box: x.box }));

    return {
      studySessionId,
      mode: series?.mode ?? "training",
      moduleId,
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

  /**
   * Le récapitulatif de TOUTES les matières, même celles jamais ouvertes.
   *
   * Le flanc doit les montrer sans avoir à télécharger leur contenu : les
   * volumes viennent du catalogue public, la progression de localStorage.
   */
  private resumeDesModules(counter: number): ModuleSummary[] {
    return this.matieres.map((m) => {
      const skills = Object.values(guestModule(this.state, m.id).skills);
      const acquises = skills.filter((s) => isMastered(s.box)).length;
      const dues = skills.filter((s) => s.dueAtCounter <= counter).length;
      return {
        id: m.id,
        name: m.name,
        tagline: m.tagline,
        progression: m.progression,
        skillCount: m.skillCount,
        dictationCount: m.dictationCount,
        seen: skills.length,
        mastered: acquises,
        due: dues,
        unseen: Math.max(0, m.skillCount - skills.length),
        level: estimateLevel(acquises, m.skillCount),
      };
    });
  }

  async progress(moduleId?: string): Promise<ProgressPayload> {
    const contenu = await this.ouvrir(moduleId);
    const id = contenu.moduleId;
    const playable = this.playableSkills(contenu);
    const counter = this.state.answerCounter;
    const stored = guestModule(this.state, id).skills;

    const skills: SkillProgressView[] = playable.map((r) => {
      const p = stored[r.slug];
      const box = p?.box ?? 0;
      const isNew = p === undefined;
      return {
        slug: r.slug,
        title: r.title,
        category: r.category,
        difficulty: r.difficulty,
        level: r.level ?? null,
        hasLesson: r.hasLesson ?? false,
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

    /* Les niveaux du cadre européen, même règle que côté serveur : un niveau
       est tenu à 80 %, et le niveau annoncé est le premier qui ne l'est pas. */
    const parNiveau = new Map<string, { total: number; acquis: number; vus: number }>();
    for (const s of skills) {
      if (!s.level) continue;
      const b = parNiveau.get(s.level) ?? { total: 0, acquis: 0, vus: 0 };
      b.total++;
      if (s.mastered) b.acquis++;
      if (!s.isNew) b.vus++;
      parNiveau.set(s.level, b);
    }
    const ORDRE = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const niveaux = ORDRE.filter((n) => parNiveau.has(n)).map((n) => {
      const b = parNiveau.get(n)!;
      return {
        niveau: n,
        total: b.total,
        acquis: b.acquis,
        vus: b.vus,
        part: b.total ? Math.round((b.acquis / b.total) * 100) : 0,
      };
    });
    const tenus = niveaux.filter((n) => n.part >= 80);

    return {
      moduleId: id,
      modules: this.resumeDesModules(counter),
      level: estimateLevel(mastered, skills.length),
      niveaux,
      niveauEstime:
        niveaux.length === 0
          ? null
          : (niveaux.find((n) => n.part < 80)?.niveau ?? niveaux[niveaux.length - 1]!.niveau),
      niveauAcquis: tenus.length ? tenus[tenus.length - 1]!.niveau : null,
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
        .filter((s) => (s.module ?? MODULE_PAR_DEFAUT) === id)
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

  async catalogue(moduleId?: string): Promise<CataloguePayload> {
    const contenu = await this.ouvrir(moduleId);
    const counts = new Map<string, number>();
    for (const r of contenu.skills) counts.set(r.category, (counts.get(r.category) ?? 0) + 1);
    const stored = guestModule(this.state, contenu.moduleId).skills;
    return {
      moduleId: contenu.moduleId,
      vocabulaire: contenu.vocabulaire ?? {
        skill: "point",
        skillPluriel: "points",
        exercise: "exercice",
        exercisePluriel: "exercices",
        catalogue: "Le catalogue",
      },
      categories: contenu.categories
        .filter((c) => counts.has(c))
        .map((name) => ({ name, skills: counts.get(name) ?? 0 })),
      niveaux: [
        ...new Set(contenu.skills.map((s) => s.level).filter((n): n is string => Boolean(n))),
      ].sort(),
      skills: contenu.skills.map((r) => {
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
          hasLesson: r.hasLesson ?? false,
          level: r.level ?? null,
          box: p?.box ?? 0,
          isNew: p === undefined,
          seenCount: p?.seenCount ?? 0,
          correctCount: p?.correctCount ?? 0,
        };
      }),
    };
  }

  async dictations(moduleId?: string): Promise<DictationsPayload> {
    const contenu = await this.ouvrir(moduleId);
    const scores = guestModule(this.state, contenu.moduleId).dictations;
    return {
      themes: [...new Set(contenu.dictations.map((d) => d.theme))].sort(),
      dictations: contenu.dictations.map((d) => ({
        id: d.id,
        number: d.number,
        theme: d.theme,
        difficulty: d.difficulty,
        voice: d.voice,
        level: d.level,
        wordCount: dictationWords(d.text).length,
        skills: d.skills.map((slug) => ({
          slug,
          title: contenu.skills.find((r) => r.slug === slug)?.title ?? slug,
        })),
        bestScore: scores[d.id] ?? null,
        lastAttemptAt: null,
      })),
    };
  }

  /**
   * Le cours, par la route publique.
   *
   * Un cours se lit, il ne se corrige pas : il n'y a rien à protéger dedans,
   * et rien ne justifie d'en priver un invité.
   */
  async lesson(slug: string): Promise<LessonPayload> {
    return apiGet<LessonPayload>(`/api/public/lessons/${encodeURIComponent(slug)}`);
  }

  async dictation(id: string): Promise<DictationDetail> {
    const contenu = this.trouverParDictee(id) ?? (await this.ouvrir());
    const d = contenu.dictations.find((x) => x.id === id);
    if (!d) throw new NoContentError("Dictée introuvable.");
    return {
      id: d.id,
      text: d.text,
      theme: d.theme,
      difficulty: d.difficulty,
      voice: d.voice,
      level: d.level,
      bestScore: guestModule(this.state, contenu.moduleId).dictations[d.id] ?? null,
    };
  }

  async gradeDictation(id: string, text: string): Promise<DictationResultPayload> {
    const contenu = this.trouverParDictee(id) ?? (await this.ouvrir());
    const d = contenu.dictations.find((x) => x.id === id);
    if (!d) throw new NoContentError("Dictée introuvable.");
    const result = gradeDictation(d.text, text);
    const scores = guestModule(this.state, contenu.moduleId).dictations;
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
