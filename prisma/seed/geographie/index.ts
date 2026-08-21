/**
 * Le contenu du module Géographie.
 *
 * Trois séries, un seul geste : cliquer sur la carte. Le module a longtemps
 * porté onze familles et une dizaine de types de questions ; on s'y perdait,
 * et le catalogue faisait écran à ce que la matière a de particulier. Ce qui
 * reste est ce qu'aucun questionnaire ne sait faire — la position.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { GEO_CAPITALES } from "./capitales";
import { GEO_DRAPEAUX } from "./drapeaux";
import { GEO_MERS } from "./mers";

export const GEO_SKILLS: SeedSkill[] = [...GEO_DRAPEAUX, ...GEO_CAPITALES, ...GEO_MERS];
