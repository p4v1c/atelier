/**
 * Les cours des notions écrites ici.
 *
 * Un fichier par matière et par lot, indexé sur le slug de la notion — sans le
 * préfixe `cg-neuf-`. Les fichiers de questions ne sont jamais modifiés :
 * `attacherCours()` fait la jonction au chargement, et bascule au passage le
 * `batch` des exercices de `cg-sans-cours` vers `cg-cours`.
 *
 * Ce qui n'a pas encore son cours n'apparaît simplement pas ici. Pour savoir
 * où on en est :
 *
 *     npx tsx prisma/seed/culture-g/cours/etat.ts
 */
import type { LotCours } from "../commun";
import { COURS_GASTRONOMIE } from "./gastronomie";
import { COURS_SPORT } from "./sport";

export const COURS_TOUS: LotCours = {
  ...COURS_GASTRONOMIE,
  ...COURS_SPORT,
};
