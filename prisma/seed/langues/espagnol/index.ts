/**
 * Le contenu du module Espagnol.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";
import { ESPAGNOL_BASES } from "./bases";
import { ESPAGNOL_FAUX_AMIS } from "./faux-amis";
import { ESPAGNOL_VERBES } from "./verbes";

export const LOTS_ESPAGNOL: LotCartes[] = [
  ...ESPAGNOL_FAUX_AMIS,
  ...ESPAGNOL_BASES,
  ...ESPAGNOL_VERBES,
];
