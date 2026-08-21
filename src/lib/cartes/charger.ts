/**
 * Charger un fond de carte à la demande.
 *
 * Les cinq fonds pèsent ensemble un demi-méga-octet, et il n'y a aucune raison
 * qu'un écran de français les transporte. Ce tableau est écrit À LA MAIN plutôt
 * que calculé : un `import()` dont le chemin est une variable empêche
 * l'empaqueteur de découper quoi que ce soit, et le gain disparaît.
 *
 * Il vit dans un fichier à part parce que deux écrans s'en servent maintenant —
 * l'exercice de carte et la carte muette de consultation — et qu'un tableau
 * recopié finit toujours par diverger.
 */
import type { FondDeCarte } from "./types";

export const FONDS: Record<string, () => Promise<FondDeCarte>> = {
  monde: () => import("./monde").then((m) => m.MONDE),
  europe: () => import("./europe").then((m) => m.EUROPE),
  afrique: () => import("./afrique").then((m) => m.AFRIQUE),
  asie: () => import("./asie").then((m) => m.ASIE),
  ameriques: () => import("./ameriques").then((m) => m.AMERIQUES),
};
