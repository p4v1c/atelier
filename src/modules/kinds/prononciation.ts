/**
 * « Dis-le à voix haute » — l'exercice de prononciation.
 *
 * Ce qu'il mesure, et ce qu'il ne mesure pas
 * ─────────────────────────────────────────
 * Le navigateur sait faire de la RECONNAISSANCE vocale, pas de l'évaluation
 * phonétique. On ne note donc pas ton accent : on note si un logiciel te
 * comprend. C'est un révélateur honnête — dire « sheep » quand on visait
 * « ship » se voit immédiatement — mais ce n'est pas un professeur.
 *
 * Deux limites à assumer, dites à l'écran plutôt que cachées :
 *   · seuls Chrome et Edge savent le faire ;
 *   · Chrome envoie l'audio à ses serveurs pour le transcrire.
 *
 * Le texte est visible : c'est le principe même, on lit à voix haute. Il n'y a
 * donc rien à protéger dans la question.
 */
import { memeReponse, type CartePayload } from "./flashcard";
import { normalizeForDedupe } from "../../lib/tokenize";
import type { ExerciseKind } from "../types";

export const prononciation: ExerciseKind<CartePayload, string, unknown> = {
  id: "prononciation",
  name: "Prononciation",
  consigne: "Lis la phrase à voix haute",

  toQuestion: (p) => ({
    recto: p.recto,
    verso: p.verso,
    note: p.note ?? null,
    langue: p.langue ?? null,
  }),

  /**
   * On compare la transcription au texte attendu, avec la même tolérance
   * qu'une traduction écrite : la reconnaissance vocale rend rarement la
   * ponctuation, et jamais les majuscules de façon fiable.
   */
  grade: (p, transcription) => ({
    correct: [p.recto, ...(p.variantes ?? [])].some((v) => memeReponse(v, transcription ?? "")),
    reveal: { recto: p.recto, verso: p.verso, note: p.note ?? null, entendu: transcription ?? "" },
  }),

  fingerprint: (p) => `prononciation:${normalizeForDedupe(p.recto)}`,

  validate: (p) => {
    const erreurs: string[] = [];
    if (!p.recto?.trim()) erreurs.push("rien à prononcer");
    if (!p.langue) erreurs.push("langue absente : la reconnaissance ne saurait quoi écouter");
    // Un mot isolé se reconnaît mal hors contexte, et n'apprend pas la
    // prosodie. La prononciation se travaille sur des phrases.
    const mots = p.recto.trim().split(/\s+/).length;
    if (mots < 2) erreurs.push("un seul mot : la prononciation se travaille sur une phrase");
    if (mots > 14) erreurs.push(`${mots} mots, trop long à dire d'un trait`);
    return erreurs;
  },
};
