/**
 * Le registre des présentations.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  DONNER SON PROPRE LOOK À UN MODULE
 *  1. écrire ses écrans dans src/components/modules/<nom>/
 *  2. écrire son CSS dans src/app/modules/<nom>.css, accroché à
 *     [data-module="<nom>"], et l'importer dans layout.tsx
 *  3. l'inscrire ci-dessous
 * Un module absent de ce registre garde l'apparence par défaut : c'est le
 * cas normal, pas un défaut.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { cultureG } from "./culture-g";
import type { PresentationModule } from "./types";

export const PRESENTATIONS: Record<string, PresentationModule> = {
  "culture-g": cultureG,
};

export function presentation(moduleId: string): PresentationModule {
  return PRESENTATIONS[moduleId] ?? {};
}

export type { PresentationModule };
