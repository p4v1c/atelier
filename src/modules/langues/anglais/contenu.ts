import { dicteesEnSeed, lotsEnSkills } from "../commun";
import type { ModuleBatch } from "../../types";
import { DICTEES_ANGLAIS, LOTS_ANGLAIS } from "../../../../prisma/seed/langues/anglais";

/**
 * Les deux accents alternent d'une carte à l'autre, de façon déterministe.
 * Un apprenant qui n'a entendu que la BBC ne comprend pas un Américain.
 */
const ACCENTS = ["en-GB", "en-US"];

export function chargerContenuAnglais(): ModuleBatch[] {
  return [
    {
      id: "en-base",
      skills: lotsEnSkills(LOTS_ANGLAIS, ACCENTS, "en-base"),
      dictations: dicteesEnSeed(DICTEES_ANGLAIS),
    },
  ];
}
