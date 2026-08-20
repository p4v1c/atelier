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

/** Carte mémoire, traduction, écoute : la face visible seulement. */
export type CarteQuestion = { recto?: string; langue: string | null };

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
  seen: number;
  mastered: number;
  due: number;
  unseen: number;
  level: string;
};

export type ProgressPayload = {
  moduleId: string;
  modules: ModuleSummary[];
  level: string;
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
  box: number;
  isNew: boolean;
  seenCount: number;
  correctCount: number;
};

export type CataloguePayload = {
  moduleId: string;
  vocabulaire: ModuleVocabulaire;
  categories: { name: string; skills: number }[];
  skills: CatalogueSkill[];
};

/* ─────────────────────────── dictées ─────────────────────────── */

export type DictationSummary = {
  id: string;
  number: number;
  theme: string;
  difficulty: number;
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
    skills: string[];
  }[];
};
