/**
 * Le contenu de chaque module.
 *
 * Séparé du registre pour une raison précise : `src/modules/index.ts` est
 * importé par les routes et par le navigateur, alors que le contenu pèse des
 * centaines de kilo-octets et ne sert qu'à deux endroits — le seed et le
 * validateur. Les mélanger ferait entrer 4 336 phrases dans le paquet de
 * chaque route.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  AJOUTER LE CONTENU D'UN MODULE
 *  1. écrire une fonction qui rend des `ModuleBatch[]`
 *  2. l'inscrire dans CONTENU ci-dessous, sous l'identifiant du module
 * ─────────────────────────────────────────────────────────────────────────
 */
import { chargerContenuCultureG } from "./culture-g/contenu";
import { chargerContenuAnglais } from "./langues/anglais/contenu";
import { chargerContenuEspagnol } from "./langues/espagnol/contenu";
import { chargerContenuFrancais } from "./francais/contenu";
import type { LearningModule, ModuleBatch } from "./types";

/** Chargeurs de contenu, par identifiant de module. */
export const CONTENU: Record<string, () => ModuleBatch[]> = {
  francais: chargerContenuFrancais,
  "culture-g": chargerContenuCultureG,
  anglais: chargerContenuAnglais,
  espagnol: chargerContenuEspagnol,
};

/**
 * Le contenu d'un module.
 *
 * Un module sans contenu déclaré rend un tableau vide plutôt qu'une erreur :
 * c'est l'état normal d'un module de jeux, qui n'a pas d'exercices à semer.
 */
export function contenuDe(mod: LearningModule): ModuleBatch[] {
  return CONTENU[mod.id]?.() ?? [];
}
