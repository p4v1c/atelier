/**
 * Géographie — les deux fabriques de contenu.
 *
 * Écrire un exercice à la main demande de répéter `kind`, `difficulty` et
 * `batch` à chaque ligne. Ces deux fonctions les portent une fois pour toutes,
 * et laissent le fichier de contenu ne dire que ce qui change.
 */
import { appariement, type Paire } from "../../../src/modules/kinds/appariement";
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
