/**
 * Géographie — la fabrique d'exercices.
 *
 * Trois jeux sortent de la même fiche de pays, et c'est tout l'intérêt de la
 * table : le drapeau, la capitale et la position ne peuvent pas se contredire,
 * puisqu'ils viennent de la même ligne.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * DEUX PROBLÈMES DE FRANÇAIS
 *
 * « Quel est le drapeau de … ? » demande une préposition contractée : du
 * Portugal, de la France, de l'Iran, des Pays-Bas, de Cuba. Une version
 * précédente contournait la difficulté en mettant le nom en tête —
 * « Kiribati — quel est son drapeau ? » —, ce qui marchait pour toutes les
 * fiches et ne ressemblait à rien. La table des pays porte donc l'article, un
 * par pays, et `de()` fait la contraction.
 *
 * Pour la carte, le nom passe en amorce au-dessus du fond, et la consigne ne
 * le prononce pas. Le problème ne se pose pas, et c'est en plus la forme la
 * plus lisible : on voit ce qu'on cherche, on cherche où c'est.
 */
import { carteMonde } from "../../../src/modules/kinds/carte-monde";
import { qcm } from "../../../src/modules/kinds/qcm";
import type { SeedExercise } from "../../../src/modules/types";
import { de, drapeauDe, type Fiche } from "./pays";

export const LOT = "geo-atlas";

/**
 * Un tirage stable, dérivé du contenu.
 *
 * Les leurres d'un QCM doivent être les mêmes à chaque passage : autrement le
 * même exercice serait tantôt facile, tantôt impossible, et deux personnes ne
 * réviseraient pas la même chose. Rien n'est donc tiré au sort — tout se
 * déduit du nom du pays, par un hachage FNV-1a.
 */
function graine(texte: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < texte.length; i++) {
    h ^= texte.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

/** Trois voisins du même continent, distincts, jamais la cible. */
function leurres(cible: Fiche, continent: Fiche[], combien: number): Fiche[] {
  const autres = continent.filter((f) => f.id !== cible.id);
  const choisis: Fiche[] = [];
  let h = graine(cible.nom);
  while (choisis.length < combien && choisis.length < autres.length) {
    h = Math.imul(h ^ (h >>> 13), 0x01000193) >>> 0;
    const candidat = autres[h % autres.length]!;
    if (!choisis.some((c) => c.id === candidat.id)) choisis.push(candidat);
  }
  return choisis;
}

/** Où poser la bonne réponse parmi les propositions — stable, mais pas toujours la même. */
const rang = (cible: Fiche, sur: number) => graine(`${cible.id}:${cible.nom}`) % sur;

function poser<T>(bonne: T, leurresRendus: T[], cible: Fiche): { choices: T[]; answerIndex: number } {
  const choices = [...leurresRendus];
  const answerIndex = rang(cible, choices.length + 1);
  choices.splice(answerIndex, 0, bonne);
  return { choices, answerIndex };
}

/** « Quel est le drapeau du Portugal ? », et quatre drapeaux à départager. */
export function quizDrapeau(cible: Fiche, continent: Fiche[]): SeedExercise {
  const { choices, answerIndex } = poser(
    drapeauDe(cible.a2),
    leurres(cible, continent, 3).map((f) => drapeauDe(f.a2)),
    cible
  );
  return {
    kind: qcm.id,
    payload: {
      question: `Quel est le drapeau ${de(cible)} ?`,
      choices,
      answerIndex,
      explanation: cible.drapeau ?? `${cible.nom} : ${cible.ou}.`,
    },
    difficulty: 2,
    batch: LOT,
  };
}

/** « Quelle est la capitale du Portugal ? », et quatre villes du même continent. */
export function quizCapitale(cible: Fiche, continent: Fiche[]): SeedExercise {
  const { choices, answerIndex } = poser(
    cible.capitale,
    leurres(cible, continent, 3).map((f) => f.capitale),
    cible
  );
  return {
    kind: qcm.id,
    payload: {
      question: `Quelle est la capitale ${de(cible)} ?`,
      choices,
      answerIndex,
      /* Les deux points, encore : « le pays EST une principauté de… » serait
         faux la moitié du temps, car `ou` est tantôt un lieu, tantôt une
         description. La ponctuation, elle, marche dans les deux cas. */
      explanation: cible.ville ?? `${cible.capitale}. ${cible.nom} : ${cible.ou}.`,
    },
    difficulty: 2,
    batch: LOT,
  };
}

/**
 * « Où est-ce ? » — le nom s'affiche, on clique le pays.
 *
 * `cibleNom` doit reprendre le nom TEL QU'IL FIGURE dans le fond de carte,
 * faute de quoi la correction annoncerait un autre nom que celui qui s'allume.
 * Un test le vérifie fond par fond.
 */
export function situer(region: string, cible: Fiche): SeedExercise {
  return {
    kind: carteMonde.id,
    payload: {
      region,
      couche: "pays",
      cible: cible.id,
      cibleNom: cible.nom,
      amorce: cible.nom,
      consigne: "Trouve ce pays sur la carte et clique dessus.",
      explication: `${cible.nom} : ${cible.ou}. Capitale : ${cible.capitale}.`,
    },
    difficulty: 2,
    batch: LOT,
  };
}

/** Une mer, un golfe, un océan : la cible est une zone marine, pas une terre. */
export function mer(
  region: string,
  cible: string,
  cibleNom: string,
  consigne: string,
  explication: string,
  difficulty: 1 | 2 | 3 = 2
): SeedExercise {
  return {
    kind: carteMonde.id,
    payload: { region, couche: "mer", cible, cibleNom, consigne, explication },
    difficulty,
    batch: LOT,
  };
}
