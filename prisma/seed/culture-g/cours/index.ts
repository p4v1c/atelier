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
import { COURS_ARTS_MUSIQUE } from "./arts-musique";
import { COURS_CINEMA_MEDIAS } from "./cinema-medias";
import { COURS_GASTRONOMIE } from "./gastronomie";
import { COURS_GEOGRAPHIE } from "./geographie";
import { COURS_INSTITUTIONS_ECONOMIE } from "./institutions-economie";
import { COURS_LANGUE_FRANCAISE } from "./langue-francaise";
import { COURS_LITTERATURE } from "./litterature";
import { COURS_MYTHOLOGIE_RELIGIONS } from "./mythologie-religions";
import { COURS_PHYSIQUE_CHIMIE } from "./physique-chimie";
import { COURS_SCIENCES_TECH } from "./sciences-tech";
import { COURS_SCIENCES_VIE } from "./sciences-vie";
import { COURS_SPORT } from "./sport";

export const COURS_TOUS: LotCours = {
  ...COURS_ARTS_MUSIQUE,
  ...COURS_CINEMA_MEDIAS,
  ...COURS_GASTRONOMIE,
  ...COURS_GEOGRAPHIE,
  ...COURS_INSTITUTIONS_ECONOMIE,
  ...COURS_LANGUE_FRANCAISE,
  ...COURS_LITTERATURE,
  ...COURS_MYTHOLOGIE_RELIGIONS,
  ...COURS_PHYSIQUE_CHIMIE,
  ...COURS_SCIENCES_TECH,
  ...COURS_SCIENCES_VIE,
  ...COURS_SPORT,
};
