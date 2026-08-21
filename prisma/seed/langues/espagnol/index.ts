/**
 * Le contenu du module Espagnol.
 */
import type { DicteeLangue, LotCartes } from "../../../../src/modules/langues/commun";
import { ESPAGNOL_BASES } from "./bases";
import { ESPAGNOL_CONJUGAISON } from "./conjugaison";
import { ESPAGNOL_AVANCE } from "./avance";
import { ESPAGNOL_AVANCE_B2 } from "./avance-b2";
import { ESPAGNOL_COURS_GRAMMAIRE } from "./cours-grammaire";
import { ESPAGNOL_COURS_USAGE } from "./cours-usage";
import { ESPAGNOL_DEBUTANT } from "./debutant";
import { ESPAGNOL_DICTEES } from "./dictees";
import { ESPAGNOL_FAUX_AMIS } from "./faux-amis";
import { ESPAGNOL_QUOTIDIEN_A2 } from "./quotidien-a2";
import { ESPAGNOL_REGISTRES } from "./registres";
import { ESPAGNOL_VERBES } from "./verbes";

export const LOTS_ESPAGNOL: LotCartes[] = [
  ...ESPAGNOL_DEBUTANT,
  ...ESPAGNOL_BASES,
  ...ESPAGNOL_QUOTIDIEN_A2,
  ...ESPAGNOL_CONJUGAISON,
  ...ESPAGNOL_COURS_GRAMMAIRE,
  ...ESPAGNOL_COURS_USAGE,
  ...ESPAGNOL_AVANCE,
  ...ESPAGNOL_VERBES,
  ...ESPAGNOL_FAUX_AMIS,
  ...ESPAGNOL_REGISTRES,
  ...ESPAGNOL_AVANCE_B2,
];

export const DICTEES_ESPAGNOL: DicteeLangue[] = ESPAGNOL_DICTEES;
