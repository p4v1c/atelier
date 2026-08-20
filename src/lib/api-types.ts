/**
 * Formes échangées entre l'API et le navigateur.
 *
 * Un seul jeu de types pour les deux modes : le mode connecté les reçoit du
 * serveur, le mode invité les fabrique dans le navigateur. Les écrans ne savent
 * pas lequel des deux les alimente.
 *
 * Rien ici ne suppose une matière : c'est le `kind` d'une question qui dit à
 * l'écran quoi afficher, et le vocabulaire du module qui dit comment l'appeler.
 */
import type { Token } from "./tokenize";
import type { ModuleVocabulaire } from "../modules/types";

export type { Token, ModuleVocabulaire };

export type PublicUser = {
  id: string;
  email: string;
  pseudo: string;
  createdAt: string;
  lastLoginAt: string | null;
  answerCounter: number;
  placementDone: boolean;
};

/* ─────────────────────── questions, par type d'exercice ─────────────────── */

/** « Repère la faute » : les mots cliquables, rien qui désigne le fautif. */
export type SpotErrorQuestion = { text: string; tokens: Token[] };

/** « Choisis la bonne réponse » : l'énoncé et les propositions, sans la clé. */
export type QcmQuestion = { question: string; choices: string[] };

/**
 * Carte mémoire, traduction, écoute.
 *
 * `recto` est absent pour l'écoute, où c'est `aLire` qui porte le texte —
 * envoyé sans être affiché, parce que la voix du navigateur en a besoin.
 */
export type CarteQuestion = {
  recto?: string;
  /** Présent pour la carte mémoire : on le lit avant de se juger. */
  verso?: string;
  note?: string | null;
  /** Présent pour l'écoute : le texte à prononcer, jamais affiché. */
  aLire?: string;
  langue: string | null;
};

export type Question = {
  position: number;
  exerciseId: string;
  skillId: string;
  category: string;
  /** "spot-error" | "qcm" | "flashcard" | "traduction" | "ecoute" */
  kind: string;
  /** À lire selon `kind`. */
  question: unknown;
};

export type StudyMode = "test" | "training" | "targeted" | "weakness" | "skill";

export type StartedSession = {
  studySessionId: string;
  mode: StudyMode;
  moduleId: string;
  category: string | null;
  /** Renseigné quand la série porte sur une seule compétence. */
  skill: { slug: string; title: string } | null;
  questions: Question[];
};

/* ─────────────────────────── verdicts ─────────────────────────── */

/** Ce que « repère la faute » dévoile une fois la note posée. */
export type SpotErrorReveal = { faultyTokenIndex: number; correction: string | null };

/** Ce qu'un QCM dévoile. */
export type QcmReveal = { answerIndex: number; explanation: string | null };

export type AnswerVerdict = {
  correct: boolean;
  /** À lire selon le `kind` de la question. */
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
  alreadyAnswered: boolean;
};

export type SessionSummary = {
  studySessionId: string;
  mode: string;
  moduleId: string;
  score: number;
  correct: number;
  total: number;
  byCategory: { category: string; correct: number; total: number }[];
  level: string;
  mastered: number;
  skillCount: number;
  weakest: { slug: string; title: string; box: number }[];
};

/* ─────────────────────────── progression ─────────────────────────── */

export type SkillProgressView = {
  slug: string;
  title: string;
  category: string;
  difficulty: number;
  /** Niveau du cadre européen, quand la matière en a un. */
  level?: string | null;
  /** Un cours est attaché à cette série. */
  hasLesson?: boolean;
  box: number;
  isNew: boolean;
  mastered: boolean;
  due: boolean;
  seenCount: number;
  correctCount: number;
  lastReviewedAt: string | null;
};

/** Une ligne du tableau de bord : un module, vu de haut. */
export type ModuleSummary = {
  id: string;
  name: string;
  tagline: string;
  progression: string;
  skillCount: number;
  /** 0 quand la matière ne se prête pas à la dictée. */
  dictationCount: number;
  seen: number;
  mastered: number;
  due: number;
  unseen: number;
  level: string;
};

/** Un niveau du cadre européen, et où en est l'apprenant dedans. */
export type NiveauView = {
  niveau: string;
  total: number;
  acquis: number;
  vus: number;
  part: number;
};

export type ProgressPayload = {
  moduleId: string;
  modules: ModuleSummary[];
  level: string;
  /** Vide hors des langues. */
  niveaux?: NiveauView[];
  /** Le niveau en cours d'acquisition — celui qu'on travaille. */
  niveauEstime?: string | null;
  /** Le dernier niveau tenu à 80 %. Null tant qu'aucun ne l'est. */
  niveauAcquis?: string | null;
  masteryBox: number;
  answerCounter: number;
  skillCount: number;
  mastered: number;
  due: number;
  unseen: number;
  categories: { category: string; skills: number; mastered: number; due: number; unseen: number }[];
  skills: SkillProgressView[];
  weakest: SkillProgressView[];
  recentSessions: {
    type: string;
    questionCount: number;
    score: number | null;
    startedAt: string;
    finishedAt: string | null;
  }[];
};

/* ─────────────────────────── catalogue ─────────────────────────── */

export type CatalogueSkill = {
  slug: string;
  title: string;
  statement: string;
  tip: string;
  difficulty: number;
  category: string;
  disputed: boolean;
  exerciseCount: number;
  /** Un cours est attaché : l'écran propose de le lire avant de s'exercer. */
  hasLesson?: boolean;
  /** Niveau du cadre européen. Null hors des langues. */
  level?: string | null;
  box: number;
  isNew: boolean;
  seenCount: number;
  correctCount: number;
};

export type CataloguePayload = {
  moduleId: string;
  vocabulaire: ModuleVocabulaire;
  categories: { name: string; skills: number }[];
  /** Les niveaux présents. Vide hors des langues. */
  niveaux?: string[];
  skills: CatalogueSkill[];
};

/* ─────────────────────────── leçons ─────────────────────────── */

export type { LessonDocument, LessonVisuel } from "../modules/types";

export type LessonPayload = {
  slug: string;
  title: string;
  moduleId: string;
  category: string;
  difficulty: number;
  exerciseCount: number;
  box: number;
  isNew: boolean;
  lesson: import("../modules/types").LessonDocument;
};

/* ─────────────────────────── dictées ─────────────────────────── */

export type DictationSummary = {
  id: string;
  number: number;
  theme: string;
  difficulty: number;
  /** Étiquette de voix : "fr-FR", "en-GB", "es-MX"… */
  voice: string;
  /** Niveau du cadre européen, quand la matière en a. */
  level: string | null;
  wordCount: number;
  skills: { slug: string; title: string }[];
  bestScore: number | null;
  lastAttemptAt: string | null;
};

export type DictationsPayload = { themes: string[]; dictations: DictationSummary[] };

export type DictationDetail = {
  id: string;
  text: string;
  theme: string;
  difficulty: number;
  voice: string;
  level: string | null;
  bestScore: number | null;
};

export type WordVerdict =
  | { status: "ok"; expected: string }
  | { status: "wrong"; expected: string; given: string }
  | { status: "missing"; expected: string }
  | { status: "extra"; given: string };

export type DictationResultPayload = {
  score: number;
  correctWords: number;
  totalWords: number;
  words: WordVerdict[];
  extra: string[];
  expected: string;
  bestScore: number;
};

/* ─────────────────────────── mode invité ─────────────────────────── */

export type PublicContent = {
  moduleId: string;
  moduleName: string;
  moduleTagline: string;
  vocabulaire: ModuleVocabulaire | null;
  categories: string[];
  skills: {
    id: string;
    slug: string;
    title: string;
    statement: string;
    tip: string;
    difficulty: number;
    category: string;
    disputed: boolean;
    exercises: { id: string; kind: string; payload: unknown }[];
  }[];
  dictations: {
    id: string;
    number: number;
    text: string;
    theme: string;
    difficulty: number;
    voice: string;
    level: string | null;
    skills: string[];
  }[];
};
