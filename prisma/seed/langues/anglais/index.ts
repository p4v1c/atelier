/**
 * Le contenu du module Anglais.
 *
 * Un lot par fichier, agrégé ici. Pour en ajouter un : écrire le fichier,
 * l'importer, l'ajouter au tableau. Le validateur fera le reste.
 */
import type { DicteeLangue, LotCartes } from "../../../../src/modules/langues/commun";
import { ANGLAIS_AVANCE_B2 } from "./avance-b2";
import { ANGLAIS_BASES } from "./bases";
import { ANGLAIS_CONJUGAISON } from "./conjugaison";
import { ANGLAIS_CONJUGAISON_2 } from "./conjugaison-2";
import { ANGLAIS_COURS_AVANCE } from "./cours-avance";
import { ANGLAIS_COURS_GRAMMAIRE } from "./cours-grammaire";
import { ANGLAIS_COURS_TOURNURES } from "./cours-tournures";
import { ANGLAIS_COURS_USAGE } from "./cours-usage";
import { ANGLAIS_DEBUTANT } from "./debutant";
import { ANGLAIS_DICTEES } from "./dictees";
import { ANGLAIS_FAUX_AMIS } from "./faux-amis";
import { ANGLAIS_QUOTIDIEN_A1 } from "./quotidien-a1";
import { ANGLAIS_TRAVAIL } from "./travail";
import { ANGLAIS_VERBES } from "./verbes";
import { ANGLAIS_VOCABULAIRE_C1 } from "./vocabulaire-c1";
import { ANGLAIS_VOCABULAIRE_IDEES } from "./vocabulaire-idees";
import { ANGLAIS_VOCABULAIRE_METIERS } from "./vocabulaire-metiers";
import { ANGLAIS_VOCABULAIRE_MONDE } from "./vocabulaire-monde";

export const LOTS_ANGLAIS: LotCartes[] = [
  ...ANGLAIS_DEBUTANT,
  ...ANGLAIS_QUOTIDIEN_A1,
  ...ANGLAIS_BASES,
  ...ANGLAIS_CONJUGAISON,
  ...ANGLAIS_CONJUGAISON_2,
  ...ANGLAIS_COURS_GRAMMAIRE,
  ...ANGLAIS_COURS_AVANCE,
  ...ANGLAIS_COURS_USAGE,
  ...ANGLAIS_COURS_TOURNURES,
  ...ANGLAIS_VERBES,
  ...ANGLAIS_FAUX_AMIS,
  ...ANGLAIS_TRAVAIL,
  ...ANGLAIS_AVANCE_B2,
  ...ANGLAIS_VOCABULAIRE_MONDE,
  ...ANGLAIS_VOCABULAIRE_IDEES,
  ...ANGLAIS_VOCABULAIRE_METIERS,
  ...ANGLAIS_VOCABULAIRE_C1,
];

export const DICTEES_ANGLAIS: DicteeLangue[] = ANGLAIS_DICTEES;
