/**
 * Le contenu du module Espagnol.
 */
import type { DicteeLangue, LotCartes } from "../../../../src/modules/langues/commun";
import { ESPAGNOL_BASES } from "./bases";
import { ESPAGNOL_PERIFRASIS_COLOCACIONES } from "./perifrasis-colocaciones";
import { ESPAGNOL_PRECISION } from "./precision";
import { ESPAGNOL_GRAMATICA_C1 } from "./gramatica-c1";
import { ESPAGNOL_VOCABULARIO_SOCIEDAD } from "./vocabulario-sociedad";
import { ESPAGNOL_AVANZADO_C2 } from "./avanzado-c2";
import { ESPAGNOL_VOCABULARIO_VIDA } from "./vocabulario-vida";
import { ESPAGNOL_CONJUGAISON } from "./conjugaison";
import { ESPAGNOL_CONJUGACION_2 } from "./conjugacion-2";
import { ESPAGNOL_AVANCE } from "./avance";
import { ESPAGNOL_AVANCE_B2 } from "./avance-b2";
import { ESPAGNOL_COURS_GRAMMAIRE } from "./cours-grammaire";
import { ESPAGNOL_COURS_USAGE } from "./cours-usage";
import { ESPAGNOL_DEBUTANT } from "./debutant";
import { ESPAGNOL_DICTEES } from "./dictees";
import { ESPAGNOL_EXPRESIONES } from "./expresiones";
import { ESPAGNOL_FAUX_AMIS } from "./faux-amis";
import { ESPAGNOL_PRONUNCIACION } from "./pronunciacion";
import { ESPAGNOL_QUOTIDIEN_A2 } from "./quotidien-a2";
import { ESPAGNOL_REGISTRES } from "./registres";
import { ESPAGNOL_VOCABULAIRE_C1 } from "./vocabulaire-c1";
import { ESPAGNOL_VOCABULAIRE_IDEAS } from "./vocabulaire-ideas";
import { ESPAGNOL_VOCABULAIRE_MUNDO } from "./vocabulaire-mundo";
import { ESPAGNOL_VOCABULAIRE_OFICIOS } from "./vocabulaire-oficios";
import { ESPAGNOL_VERBES } from "./verbes";

export const LOTS_ESPAGNOL: LotCartes[] = [
  ...ESPAGNOL_DEBUTANT,
  ...ESPAGNOL_BASES,
  ...ESPAGNOL_QUOTIDIEN_A2,
  ...ESPAGNOL_CONJUGAISON,
  ...ESPAGNOL_CONJUGACION_2,
  ...ESPAGNOL_COURS_GRAMMAIRE,
  ...ESPAGNOL_COURS_USAGE,
  ...ESPAGNOL_AVANCE,
  ...ESPAGNOL_VERBES,
  ...ESPAGNOL_FAUX_AMIS,
  ...ESPAGNOL_REGISTRES,
  ...ESPAGNOL_AVANCE_B2,
  ...ESPAGNOL_VOCABULAIRE_MUNDO,
  ...ESPAGNOL_VOCABULAIRE_IDEAS,
  ...ESPAGNOL_VOCABULAIRE_OFICIOS,
  ...ESPAGNOL_VOCABULAIRE_C1,
  ...ESPAGNOL_PRONUNCIACION,
  ...ESPAGNOL_EXPRESIONES,
  ...ESPAGNOL_VOCABULARIO_VIDA,
  ...ESPAGNOL_VOCABULARIO_SOCIEDAD,
  ...ESPAGNOL_GRAMATICA_C1,
  ...ESPAGNOL_PERIFRASIS_COLOCACIONES,
  ...ESPAGNOL_PRECISION,
  ...ESPAGNOL_AVANZADO_C2,
];

export const DICTEES_ESPAGNOL: DicteeLangue[] = ESPAGNOL_DICTEES;
