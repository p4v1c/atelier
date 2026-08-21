/**
 * Géographie — les deux fabriques de contenu.
 *
 * Écrire un exercice à la main demande de répéter `kind`, `difficulty` et
 * `batch` à chaque ligne. Ces deux fonctions les portent une fois pour toutes,
 * et laissent le fichier de contenu ne dire que ce qui change.
 */
import { appariement, type Paire } from "../../../src/modules/kinds/appariement";
import { carteMonde } from "../../../src/modules/kinds/carte-monde";
import { qcm } from "../../../src/modules/kinds/qcm";
import type { SeedExercise } from "../../../src/modules/types";

export const LOT = "geo-atlas";

/** Une question à choix multiple. L'explication n'est pas facultative ici. */
export function q(
  question: string,
  choices: string[],
  answerIndex: number,
  explanation: string,
  difficulty: 1 | 2 | 3 = 2
): SeedExercise {
  return {
    kind: qcm.id,
    payload: { question, choices, answerIndex, explanation },
    difficulty,
    batch: LOT,
  };
}

/** Un appariement : de trois à six paires, mélangées à l'affichage. */
export function relie(
  consigne: string,
  paires: [string, string][],
  explication: string,
  difficulty: 1 | 2 | 3 = 2
): SeedExercise {
  return {
    kind: appariement.id,
    payload: {
      consigne,
      paires: paires.map(([gauche, droite]): Paire => ({ gauche, droite })),
      explication,
    },
    difficulty,
    batch: LOT,
  };
}

/**
 * Un clic sur la carte.
 *
 * `cible` est le code ISO 3166-1 numérique du pays, en chaîne — le même
 * identifiant que celui des fonds générés. `cibleNom` doit reprendre le nom
 * tel qu'il figure dans le fond, faute de quoi la correction annoncerait un
 * autre nom que celui qui s'allume sur la carte.
 *
 * Quand l'amorce est un drapeau, la consigne ne doit pas nommer le pays : le
 * contrôle du type le refuse, et il a raison.
 */
export function surCarte(
  region: string,
  cible: string,
  cibleNom: string,
  consigne: string,
  explication: string,
  options: { amorce?: string; difficulty?: 1 | 2 | 3 } = {}
): SeedExercise {
  return {
    kind: carteMonde.id,
    payload: {
      region,
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
