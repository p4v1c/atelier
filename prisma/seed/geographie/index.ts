/**
 * Le contenu du module Géographie.
 *
 * Un fichier par famille, agrégé ici. Le lot s'appelle « geo-atlas » : le lot
 * d'origine, « geo-essai », a servi à prouver qu'ajouter une matière était
 * bon marché, et cette démonstration est faite.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { GEO_CAPITALES } from "./capitales";
import { GEO_DRAPEAUX } from "./drapeaux";
import { GEO_FRANCE } from "./france";
import { GEO_MILIEUX } from "./milieux";
import { GEO_POLITIQUE } from "./politique";
import { GEO_RELIEFS } from "./reliefs";
import { GEO_REPERES } from "./reperes";

export const GEO_SKILLS: SeedSkill[] = [
  ...GEO_CAPITALES,
  ...GEO_DRAPEAUX,
  ...GEO_RELIEFS,
  ...GEO_POLITIQUE,
  ...GEO_MILIEUX,
  ...GEO_FRANCE,
  ...GEO_REPERES,
];
