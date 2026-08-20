/**
 * Agrégateur des lots de contenu.
 *
 * Étape B : chaque lot de 25 règles arrive dans son propre fichier
 * prisma/seed/batches/batch-NNN.ts, importé ici. Un lot n'est ajouté qu'après
 * être passé au vert sous `npm run validate:content`.
 */
import { resolveBatches, type ContentBatch } from "../../src/lib/content";
import { loadLegacyBatch } from "./legacy";
import { BATCHES } from "./batches";

/**
 * Tous les lots, additions repliées. C'est l'unique porte d'entrée du contenu :
 * validateur et seed passent tous les deux par là.
 */
export function loadAllBatches(): ContentBatch[] {
  return resolveBatches([loadLegacyBatch(), ...BATCHES]);
}
