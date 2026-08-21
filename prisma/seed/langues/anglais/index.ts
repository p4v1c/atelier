/**
 * Le contenu du module Anglais.
 *
 * Un lot par fichier, agrégé ici. Pour en ajouter un : écrire le fichier,
 * l'importer, l'ajouter au tableau. Le validateur fera le reste.
 */
import type { DicteeLangue, LotCartes } from "../../../../src/modules/langues/commun";
import { ANGLAIS_BASES } from "./bases";
import { ANGLAIS_CONJUGAISON } from "./conjugaison";
import { ANGLAIS_COURS_AVANCE } from "./cours-avance";
import { ANGLAIS_COURS_GRAMMAIRE } from "./cours-grammaire";
import { ANGLAIS_COURS_USAGE } from "./cours-usage";
import { ANGLAIS_DEBUTANT } from "./debutant";
import { ANGLAIS_DICTEES } from "./dictees";
import { ANGLAIS_FAUX_AMIS } from "./faux-amis";
import { ANGLAIS_TRAVAIL } from "./travail";
import { ANGLAIS_VERBES } from "./verbes";

export const LOTS_ANGLAIS: LotCartes[] = [
  ...ANGLAIS_DEBUTANT,
  ...ANGLAIS_BASES,
  ...ANGLAIS_CONJUGAISON,
  ...ANGLAIS_COURS_GRAMMAIRE,
  ...ANGLAIS_COURS_AVANCE,
  ...ANGLAIS_COURS_USAGE,
  ...ANGLAIS_VERBES,
  ...ANGLAIS_FAUX_AMIS,
  ...ANGLAIS_TRAVAIL,
];

export const DICTEES_ANGLAIS: DicteeLangue[] = ANGLAIS_DICTEES;
