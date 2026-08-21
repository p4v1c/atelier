/**
 * Le contenu du module Géographie.
 *
 * Une grille : quatre continents, quatre jeux. Les trois premiers se déduisent
 * de la table des pays, le quatrième a ses propres zones. Le module a porté
 * onze familles hétéroclites ; il porte maintenant deux axes, et l'on sait
 * toujours où l'on est.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { GEO_MERS } from "./mers";
import { GEO_SERIES } from "./series";

export const GEO_SKILLS: SeedSkill[] = [...GEO_SERIES, ...GEO_MERS];
