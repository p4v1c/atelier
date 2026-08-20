/**
 * Le registre des modules.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  AJOUTER UN MODULE
 *  1. créer src/modules/<nom>/index.ts qui exporte un `LearningModule`
 *  2. l'importer et l'ajouter au tableau ci-dessous
 *  3. `npm run seed`
 * Rien d'autre. Ni migration, ni table, ni route, ni écran de série.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { cultureGenerale } from "./culture-g";
import { francais } from "./francais";
import { indexerKinds, type ExerciseKind, type LearningModule } from "./types";

export const MODULES: LearningModule[] = [francais, cultureGenerale];

export const MODULE_BY_ID = new Map(MODULES.map((m) => [m.id, m]));

/** Tous les types d'exercices déclarés, par identifiant. */
export const KINDS: Map<string, ExerciseKind> = indexerKinds(MODULES);

export function module(id: string): LearningModule {
  const m = MODULE_BY_ID.get(id);
  if (!m) throw new Error(`Module inconnu : « ${id} ».`);
  return m;
}

/**
 * Le type d'exercice d'un exercice stocké.
 *
 * Erreur franche si le type est inconnu : une base qui contient un exercice
 * qu'aucun module ne sait corriger est un problème de déploiement, pas une
 * situation à contourner en silence.
 */
export function kind(id: string): ExerciseKind {
  const k = KINDS.get(id);
  if (!k) throw new Error(`Type d'exercice inconnu : « ${id} ». Module désinstallé ?`);
  return k;
}

/**
 * Le type d'exercice d'un exercice, cherché d'abord dans le module qui le
 * porte. Erreur franche s'il est inconnu : un exercice qu'aucun module ne sait
 * corriger est un problème de déploiement, pas une situation à contourner.
 */
export function kindOf(mod: LearningModule, kindId: string): ExerciseKind {
  const k = mod.kinds.find((x) => x.id === kindId);
  if (!k) {
    throw new Error(
      `Le module « ${mod.id} » ne déclare pas le type d'exercice « ${kindId} ».`
    );
  }
  return k;
}

export type { ExerciseKind, LearningModule };
export * from "./types";
