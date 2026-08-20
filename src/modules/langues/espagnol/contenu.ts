import { dicteesEnSeed, lotsEnSkills } from "../commun";
import type { ModuleBatch } from "../../types";
import { DICTEES_ESPAGNOL, LOTS_ESPAGNOL } from "../../../../prisma/seed/langues/espagnol";

export function chargerContenuEspagnol(): ModuleBatch[] {
  return [
    {
      id: "es-base",
      skills: lotsEnSkills(LOTS_ESPAGNOL, "es-ES", "es-base"),
      dictations: dicteesEnSeed(DICTEES_ESPAGNOL),
    },
  ];
}
