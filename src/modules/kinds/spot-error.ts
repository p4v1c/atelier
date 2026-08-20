/**
 * « Repère la faute » — le type d'exercice du module Français.
 *
 * Une phrase, un mot fautif au plus, et un clic. C'est le format d'origine de
 * La Règle ; il devient ici un type d'exercice parmi d'autres.
 */
import { normalizeForDedupe, tokenize, wordCount } from "../../lib/tokenize";
import type { ExerciseKind } from "../types";

/** Trop courte, la phrase ne porte pas de contexte ; trop longue, on la survole. */
export const MIN_MOTS = 5;
export const MAX_MOTS = 25;

export type SpotErrorPayload = {
  /** Texte propre, SANS crochets. Les crochets sont un format d'import. */
  text: string;
  /** Index du token fautif dans tokenize(text). -1 si la phrase est correcte. */
  faultyTokenIndex: number;
  /** Forme correcte. null si et seulement si faultyTokenIndex vaut -1. */
  correction: string | null;
};

export const spotError: ExerciseKind<SpotErrorPayload, number, unknown> = {
  id: "spot-error",
  name: "Repérage de faute",
  consigne: "Clique sur le mot fautif",

  toQuestion: (p) => ({ text: p.text, tokens: tokenize(p.text) }),

  grade: (p, answer) => ({
    correct: answer === p.faultyTokenIndex,
    reveal: { faultyTokenIndex: p.faultyTokenIndex, correction: p.correction },
  }),

  fingerprint: (p) => normalizeForDedupe(p.text),

  validate: (p) => {
    const erreurs: string[] = [];
    const tokens = tokenize(p.text);
    const correcte = p.faultyTokenIndex === -1;

    if (correcte && p.correction !== null) erreurs.push("phrase correcte mais avec une correction");
    if (!correcte && !p.correction?.trim()) erreurs.push("phrase fautive sans correction");
    if (/[[\]]/.test(p.text)) erreurs.push("crochets stockés : format d'import, pas de stockage");

    const mots = wordCount(p.text);
    if (mots < MIN_MOTS || mots > MAX_MOTS) {
      erreurs.push(`${mots} mots, attendu ${MIN_MOTS}-${MAX_MOTS}`);
    }

    if (!correcte) {
      const fautif = tokens[p.faultyTokenIndex];
      // La tokenisation doit retomber sur ses pieds : l'index stocké doit
      // désigner un token réel, sinon la phrase est inservable côté client.
      if (fautif === undefined) {
        erreurs.push(`index ${p.faultyTokenIndex} hors des ${tokens.length} tokens`);
        return erreurs;
      }
      if (p.correction === fautif.word) {
        erreurs.push(`la correction vaut le mot marqué : « ${p.correction} »`);
      }

      // La correction remplace UN token : le résultat doit rester une phrase.
      // On ne sait pas analyser le français, mais on sait repérer une
      // duplication — « je vous prie d'agréer » substitué à « veuillez »
      // devant « agréer » donnait « je vous prie d'agréer agréer ».
      if (p.correction) {
        const nu = (m: string | undefined) => m?.toLowerCase().replace(/[.,;:!?]/g, "");
        const morceaux = p.correction.trim().split(/\s+/);
        const suivant = nu(tokens[p.faultyTokenIndex + 1]?.word);
        const dernier = nu(morceaux[morceaux.length - 1]);
        if (suivant && dernier && suivant === dernier) {
          erreurs.push(`la correction se terminerait par « ${dernier} », juste avant « ${suivant} »`);
        }
        const precedent = nu(tokens[p.faultyTokenIndex - 1]?.word);
        const premier = nu(morceaux[0]);
        if (precedent && premier && precedent === premier) {
          erreurs.push(`la correction commencerait par « ${premier} », juste après « ${precedent} »`);
        }
      }
    }
    return erreurs;
  },
};
