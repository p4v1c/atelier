/**
 * Les types d'exercices du module Langues.
 *
 * `flashcard`   — on se juge soi-même (« je savais » / « je ne savais pas »).
 * `traduction`  — on écrit, la correction est textuelle et tolérante.
 * `ecoute`      — on entend, on écrit. Même correction, source différente.
 *
 * Les trois partagent la même charge utile : une face, un dos, des variantes
 * acceptées. Les séparer permet à l'écran de savoir quoi afficher sans
 * inspecter la charge utile.
 */
import { normalizeForDedupe } from "../../lib/tokenize";
import type { ExerciseKind } from "../types";

export type CartePayload = {
  /** Ce qu'on montre : le mot étranger, ou la phrase à traduire. */
  recto: string;
  /** La réponse attendue. */
  verso: string;
  /** Autres formulations acceptées. */
  variantes?: string[];
  /** Contexte affiché après la réponse : exemple d'emploi, remarque. */
  note?: string;
  /** Langue du recto, pour la synthèse vocale : "en-GB", "es-ES"… */
  langue?: string;
};

/** Comparaison tolérante : casse, accents, ponctuation et articles ignorés. */
export function memeReponse(attendu: string, donne: string): boolean {
  const nettoyer = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s']/g, " ")
      .replace(/\b(le|la|les|un|une|des|the|a|an|to|el|los|las)\b/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  return nettoyer(attendu) === nettoyer(donne) && nettoyer(attendu) !== "";
}

function validerCarte(p: CartePayload): string[] {
  const erreurs: string[] = [];
  if (!p.recto?.trim()) erreurs.push("recto vide");
  if (!p.verso?.trim()) erreurs.push("verso vide");
  if (p.recto?.trim() && p.recto.trim() === p.verso?.trim()) erreurs.push("recto identique au verso");
  return erreurs;
}

/**
 * Auto-évaluation : le serveur enregistre le verdict que l'utilisateur se donne.
 *
 * Le verso part avec la question, et il le faut : on retourne la carte, on lit
 * la réponse, PUIS on dit si on la savait. L'attendre du serveur reviendrait à
 * demander de juger avant d'avoir vu.
 *
 * Il n'y a rien à protéger ici : la note qu'on se donne est déclarative de bout
 * en bout. Se mentir est possible, et ne trompe que soi.
 */
export const flashcard: ExerciseKind<CartePayload, boolean, unknown> = {
  id: "flashcard",
  name: "Carte mémoire",
  consigne: "Retourne la carte, puis dis si tu savais",
  toQuestion: (p) => ({
    recto: p.recto,
    verso: p.verso,
    note: p.note ?? null,
    langue: p.langue ?? null,
  }),
  grade: (p, savait) => ({ correct: savait === true, reveal: { verso: p.verso, note: p.note ?? null } }),
  fingerprint: (p) => `flashcard:${normalizeForDedupe(p.recto)}`,
  validate: validerCarte,
};

export const traduction: ExerciseKind<CartePayload, string, unknown> = {
  id: "traduction",
  name: "Traduction",
  consigne: "Écris la traduction",
  toQuestion: (p) => ({ recto: p.recto, langue: p.langue ?? null }),
  grade: (p, saisi) => ({
    correct: [p.verso, ...(p.variantes ?? [])].some((v) => memeReponse(v, saisi ?? "")),
    reveal: { verso: p.verso, variantes: p.variantes ?? [], note: p.note ?? null },
  }),
  fingerprint: (p) => `traduction:${normalizeForDedupe(p.recto)}`,
  validate: validerCarte,
};

/**
 * Le recto n'est pas montré : il est lu à voix haute.
 *
 * Exception assumée à la règle « la question ne contient jamais la réponse » :
 * la synthèse vocale du navigateur a besoin du texte pour le prononcer, et le
 * serveur ne sait produire de l'audio qu'en français. Le texte part donc au
 * client, dans `aLire`, sans être affiché.
 *
 * C'est le même pacte que la carte mémoire, où l'on se juge soi-même : aller
 * chercher la réponse dans l'onglet réseau ne trompe personne d'autre que soi.
 * Le jour où le serveur saura lire l'anglais, `aLire` disparaîtra d'ici.
 */
export const ecoute: ExerciseKind<CartePayload, string, unknown> = {
  id: "ecoute",
  name: "Compréhension orale",
  consigne: "Écoute, puis écris ce que tu entends",
  toQuestion: (p) => ({ langue: p.langue ?? null, aLire: p.recto }),
  grade: (p, saisi) => ({
    correct: [p.recto, ...(p.variantes ?? [])].some((v) => memeReponse(v, saisi ?? "")),
    reveal: { recto: p.recto, verso: p.verso, note: p.note ?? null },
  }),
  fingerprint: (p) => `ecoute:${normalizeForDedupe(p.recto)}`,
  validate: validerCarte,
};
