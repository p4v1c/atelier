/**
 * Géographie — la fabrique d'exercices.
 *
 * Le module n'a qu'un type d'exercice : le clic sur la carte. Tout passe donc
 * par ces deux fonctions, et un fichier de contenu ne dit plus que ce qui
 * change — la cible, la consigne, et ce qu'on apprend en la trouvant.
 */
import { carteMonde } from "../../../src/modules/kinds/carte-monde";
import type { SeedExercise } from "../../../src/modules/types";

export const LOT = "geo-atlas";

type Options = { amorce?: string; difficulty?: 1 | 2 | 3 };

function surCarte(
  couche: "pays" | "mer",
  region: string,
  cible: string,
  cibleNom: string,
  consigne: string,
  explication: string,
  options: Options = {}
): SeedExercise {
  return {
    kind: carteMonde.id,
    payload: {
      region,
      couche,
      cible,
      cibleNom,
      consigne,
      ...(options.amorce ? { amorce: options.amorce } : {}),
      explication,
    },
    difficulty: options.difficulty ?? 2,
    batch: LOT,
  };
}

/**
 * Un pays à trouver.
 *
 * `cible` est le code ISO 3166-1 numérique, en chaîne — le même identifiant
 * que celui des fonds générés. `cibleNom` doit reprendre le nom TEL QU'IL
 * FIGURE dans le fond : sans quoi la correction annoncerait un autre nom que
 * celui qui s'allume sur la carte. Un test le vérifie fond par fond.
 */
export const pays = (
  region: string,
  cible: string,
  cibleNom: string,
  consigne: string,
  explication: string,
  options?: Options
) => surCarte("pays", region, cible, cibleNom, consigne, explication, options);

/**
 * Une mer, un golfe, un océan.
 *
 * Même contrat, mais la cible est un mot-clé de zone marine. Ces zones sont
 * conventionnelles, pas relevées : voir l'en-tête de generer-cartes.mjs.
 */
export const mer = (
  region: string,
  cible: string,
  cibleNom: string,
  consigne: string,
  explication: string,
  options?: Options
) => surCarte("mer", region, cible, cibleNom, consigne, explication, options);
