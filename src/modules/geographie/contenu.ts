import type { ModuleBatch } from "../types";
import { GEO_SKILLS } from "../../../prisma/seed/geographie";
import { LOT } from "../../../prisma/seed/geographie/commun";

export function chargerContenuGeographie(): ModuleBatch[] {
  return [{ id: LOT, skills: GEO_SKILLS }];
}
