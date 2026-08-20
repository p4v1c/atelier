import { lotsEnSkills } from "../commun";
import type { ModuleBatch } from "../../types";
import { LOTS_ANGLAIS } from "../../../../prisma/seed/langues/anglais";

export function chargerContenuAnglais(): ModuleBatch[] {
  return [{ id: "en-base", skills: lotsEnSkills(LOTS_ANGLAIS, "en-GB", "en-base") }];
}
