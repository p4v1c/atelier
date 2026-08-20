/**
 * Le contenu du module Espagnol.
 */
import type { DicteeLangue, LotCartes } from "../../../../src/modules/langues/commun";
import { ESPAGNOL_BASES } from "./bases";
import { ESPAGNOL_CONJUGAISON } from "./conjugaison";
import { ESPAGNOL_DEBUTANT } from "./debutant";
import { ESPAGNOL_DICTEES } from "./dictees";
import { ESPAGNOL_FAUX_AMIS } from "./faux-amis";
import { ESPAGNOL_VERBES } from "./verbes";

export const LOTS_ESPAGNOL: LotCartes[] = [
  ...ESPAGNOL_DEBUTANT,
  ...ESPAGNOL_BASES,
  ...ESPAGNOL_CONJUGAISON,
  ...ESPAGNOL_VERBES,
  ...ESPAGNOL_FAUX_AMIS,
];

export const DICTEES_ESPAGNOL: DicteeLangue[] = ESPAGNOL_DICTEES;
