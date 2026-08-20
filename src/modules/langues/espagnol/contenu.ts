import { lotsEnSkills } from "../commun";
import type { ModuleBatch } from "../../types";
import { LOTS_ESPAGNOL } from "../../../../prisma/seed/langues/espagnol";

export function chargerContenuEspagnol(): ModuleBatch[] {
  return [{ id: "es-base", skills: lotsEnSkills(LOTS_ESPAGNOL, "es-ES", "es-base") }];
}
