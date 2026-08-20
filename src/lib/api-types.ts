/**
 * Formes échangées entre l'API et le navigateur.
 *
 * Un seul jeu de types pour les deux modes : le mode connecté les reçoit du
 * serveur, le mode invité les fabrique dans le navigateur. Les écrans ne savent
 * pas lequel des deux les alimente.
 */
import type { Token } from "./tokenize";

export type { Token };

export type PublicUser = {
  id: string;
  email: string;
  pseudo: string;
  createdAt: string;
  lastLoginAt: string | null;
  answerCounter: number;
  placementDone: boolean;
};

export type Question = {
  position: number;
  sentenceId: string;
  ruleId: string;
  category: string;
  tokens: Token[];
};

export type StartedSession = {
  studySessionId: string;
  mode: StudyMode;
  category: string | null;
  /** Renseigné quand la série porte sur une seule règle. */
  rule: { slug: string; title: string } | null;
  questions: Question[];
};

export type StudyMode = "test" | "training" | "targeted" | "weakness" | "rule";

export type AnswerVerdict = {
  correct: boolean;
  faultyTokenIndex: number;
  correction: string | null;
  rule: { slug: string; title: string; statement: string; tip: string; category: string };
  box: { before: number; after: number; mastered: boolean; justMastered: boolean };
  alreadyAnswered: boolean;
};

export type SessionSummary = {
  studySessionId: string;
  mode: string;
  score: number;
  correct: number;
  total: number;
  byCategory: { category: string; correct: number; total: number }[];
  level: string;
  mastered: number;
  ruleCount: number;
  weakest: { slug: string; title: string; box: number }[];
};

export type RuleProgressView = {
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

export type ProgressPayload = {
  level: string;
  masteryBox: number;
  answerCounter: number;
  ruleCount: number;
  mastered: number;
  due: number;
  unseen: number;
  categories: { category: string; rules: number; mastered: number; due: number; unseen: number }[];
  rules: RuleProgressView[];
  weakest: RuleProgressView[];
  recentSessions: { type: string; questionCount: number; score: number | null; startedAt: string; finishedAt: string | null }[];
};

export type CatalogueRule = {
  slug: string;
  title: string;
  statement: string;
  tip: string;
  difficulty: number;
  category: string;
  disputed: boolean;
  sentenceCount: number;
  box: number;
  isNew: boolean;
  seenCount: number;
  correctCount: number;
};

export type CataloguePayload = {
  categories: { name: string; rules: number }[];
  rules: CatalogueRule[];
};

export type DictationSummary = {
  id: string;
  number: number;
  theme: string;
  difficulty: number;
  wordCount: number;
  rules: { slug: string; title: string }[];
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

export type PublicContent = {
  categories: string[];
  rules: {
    id: string;
    slug: string;
    title: string;
    statement: string;
    tip: string;
    difficulty: number;
    category: string;
    disputed: boolean;
    sentences: { id: string; text: string; faultyTokenIndex: number; correction: string | null }[];
  }[];
  dictations: { id: string; number: number; text: string; theme: string; difficulty: number; rules: string[] }[];
};
