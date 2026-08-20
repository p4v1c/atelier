import type { ModuleBatch } from "../types";
import { GEO_SKILLS } from "../../../prisma/seed/geographie/capitales";

export function chargerContenuGeographie(): ModuleBatch[] {
  return [{ id: "geo-essai", skills: GEO_SKILLS }];
}
