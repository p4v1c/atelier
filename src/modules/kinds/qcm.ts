/**
 * « Choisis la bonne réponse » — le type d'exercice de la culture générale.
 *
 * La bonne réponse ne quitte jamais le serveur avant que l'utilisateur ait
 * répondu : `toQuestion` laisse `answerIndex` derrière lui.
 */
import { normalizeForDedupe } from "../../lib/tokenize";
import type { ExerciseKind } from "../types";

export type QcmPayload = {
  question: string;
  /** Deux propositions au moins, six au plus. */
  choices: string[];
  /** Rang de la bonne proposition dans `choices`. */
  answerIndex: number;
  /** Affichée après la réponse. Facultative mais vivement conseillée. */
  explanation?: string;
};

export const qcm: ExerciseKind<QcmPayload, number, unknown> = {
  id: "qcm",
  name: "Question à choix multiple",
  consigne: "Choisis la bonne réponse",

  // Les propositions partent dans l'ordre stocké, et c'est le bon endroit pour
  // ne rien faire : mélanger ICI rendrait la correction impossible, puisque le
  // client renverrait un rang mélangé que le serveur ne saurait pas relire. Le
  // mélange a lieu une fois pour toutes en amont, dans `contenuDe` — voir
  // `kinds/melange`.
  toQuestion: (p) => ({ question: p.question, choices: p.choices }),

  grade: (p, answer) => ({
    correct: answer === p.answerIndex,
    reveal: { answerIndex: p.answerIndex, explanation: p.explanation ?? null },
  }),

  fingerprint: (p) => normalizeForDedupe(p.question),

  validate: (p) => {
    const erreurs: string[] = [];
    if (!p.question?.trim()) erreurs.push("question vide");
    if (p.choices.length < 2) erreurs.push(`${p.choices.length} proposition(s), minimum 2`);
    if (p.choices.length > 6) erreurs.push(`${p.choices.length} propositions, maximum 6`);
    if (p.choices.some((c) => !c?.trim())) erreurs.push("proposition vide");
    if (p.answerIndex < 0 || p.answerIndex >= p.choices.length) {
      erreurs.push(`answerIndex ${p.answerIndex} hors des ${p.choices.length} propositions`);
    }
    // Deux propositions identiques rendent la question insoluble : l'une des
    // deux est juste, l'autre est fausse, et rien ne les distingue.
    //
    // La comparaison est littérale, aux espaces près, et c'est essentiel :
    // « Un Belge néerlandophone » et « Un belge néerlandophone » sont deux
    // propositions bien distinctes quand la question porte sur les majuscules,
    // tout comme « U = R × I » et « U = R / I ». Normaliser ici reviendrait à
    // interdire les questions d'orthographe et de formules.
    const vues = new Set(p.choices.map((c) => c.trim().replace(/\s+/g, " ")));
    if (vues.size !== p.choices.length) erreurs.push("deux propositions identiques");
    return erreurs;
  },
};
