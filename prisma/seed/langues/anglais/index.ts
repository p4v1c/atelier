/**
 * Le contenu du module Anglais.
 *
 * Un lot par fichier, agrégé ici. Pour en ajouter un : écrire le fichier,
 * l'importer, l'ajouter au tableau. Le validateur fera le reste.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";
import { ANGLAIS_BASES } from "./bases";
import { ANGLAIS_FAUX_AMIS } from "./faux-amis";
import { ANGLAIS_TRAVAIL } from "./travail";
import { ANGLAIS_VERBES } from "./verbes";

export const LOTS_ANGLAIS: LotCartes[] = [
  ...ANGLAIS_FAUX_AMIS,
  ...ANGLAIS_BASES,
  ...ANGLAIS_VERBES,
  ...ANGLAIS_TRAVAIL,
];
