/**
 * Le registre des vues d'exercices.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  AJOUTER UN TYPE D'EXERCICE À L'INTERFACE
 *  1. écrire un composant qui suit `VueExercice`
 *  2. l'inscrire ci-dessous, sous l'identifiant du type
 * L'écran de série n'a pas à changer.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { qcmVue } from "./Qcm";
import { spotErrorVue } from "./SpotError";
import type { VueExercice } from "./types";

export const VUES: Record<string, VueExercice> = {
  "spot-error": spotErrorVue,
  qcm: qcmVue,
};

export function vuePour(kind: string): VueExercice | null {
  return VUES[kind] ?? null;
}

export type { VueExercice, VueExerciceProps } from "./types";
