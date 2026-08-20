/**
 * Module Français — l'existant, devenu un module parmi d'autres.
 *
 * Ce fichier ne porte que la déclaration : identité, vocabulaire, types
 * d'exercices, catégories, contrôles de contenu. Le contenu lui-même est dans
 * contenu.ts, que le navigateur n'importe jamais.
 */
import { CATEGORIES, DISPUTED_CATEGORY } from "../../lib/content";
import { spotError, type SpotErrorPayload } from "../kinds/spot-error";
import type { LearningModule, ModuleFinding } from "../types";

export const francais: LearningModule = {
  id: "francais",
  name: "Français",
  tagline: "Orthographe, grammaire et écrits professionnels",
  position: 1,

  vocabulaire: {
    skill: "règle",
    skillPluriel: "règles",
    exercise: "phrase",
    exercisePluriel: "phrases",
    catalogue: "Les règles",
  },

  kinds: [spotError],

  /**
   * Ce qu'un exercice seul ne peut pas voir.
   */
  validateSkill(skill): ModuleFinding[] {
    const anomalies: ModuleFinding[] = [];
    const payloads = skill.exercises.map((e) => e.payload as SpotErrorPayload);

    // Sans phrase correcte, la règle apprend à cliquer partout : l'utilisateur
    // comprend vite qu'il y a toujours une faute quelque part.
    if (!payloads.some((p) => p.faultyTokenIndex === -1)) {
      anomalies.push({ severity: "error", code: "no-correct-sentence", message: "aucune phrase sans faute" });
    }

    // Une faute toujours au même rang se repère à l'œil, sans lire la phrase.
    const rangs = payloads.filter((p) => p.faultyTokenIndex !== -1).map((p) => p.faultyTokenIndex);
    if (rangs.length >= 3 && new Set(rangs).size === 1) {
      anomalies.push({
        severity: "error",
        code: "same-position",
        message: `les ${rangs.length} phrases fautives placent la faute au même rang (${rangs[0]})`,
      });
    } else if (rangs.length === 2 && new Set(rangs).size === 1) {
      anomalies.push({
        severity: "warn",
        code: "same-position",
        message: `les 2 phrases fautives ont la faute au même rang (${rangs[0]})`,
      });
    }
    return anomalies;
  },
  categories: CATEGORIES,
  categoriesNonNotees: [DISPUTED_CATEGORY],

};
