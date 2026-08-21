import { dicteesEnSeed, lotsEnSkills } from "../commun";
import type { ModuleBatch } from "../../types";
import { DICTEES_ESPAGNOL, LOTS_ESPAGNOL } from "../../../../prisma/seed/langues/espagnol";

/**
 * Espagne et Amérique latine alternent d'une carte à l'autre. Le seseo, le
 * vocabulaire et le rythme diffèrent assez pour qu'une oreille habituée à un
 * seul des deux soit perdue devant l'autre.
 */
const ACCENTS = ["es-ES", "es-MX"];

export function chargerContenuEspagnol(): ModuleBatch[] {
  return [
    {
      id: "es-base",
      skills: lotsEnSkills(LOTS_ESPAGNOL, ACCENTS, "es-base"),
      dictations: dicteesEnSeed(DICTEES_ESPAGNOL),
    },
  ];
}
