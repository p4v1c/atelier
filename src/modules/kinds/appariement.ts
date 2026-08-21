/**
 * « Relie chaque élément à son correspondant ».
 *
 * Le QCM pose une question et propose quatre réponses ; l'appariement en pose
 * cinq d'un coup et les fait tenir ensemble. C'est la mécanique des jeux de
 * géographie — pays et capitale, drapeau et pays, fleuve et embouchure — et
 * elle apprend autre chose qu'un QCM : elle oblige à départager cinq voisins
 * plutôt qu'à reconnaître un intrus.
 *
 * La colonne de droite est mélangée par une permutation TIRÉE DU CONTENU
 * lui-même, pas au hasard. Trois conséquences, toutes voulues :
 *   — l'auteur n'a pas de permutation à écrire, donc pas de permutation à se
 *     tromper ;
 *   — le même exercice se présente toujours pareil, ce qui rend l'empreinte de
 *     dédoublonnage et les captures stables ;
 *   — le serveur et le client la recalculent à l'identique, donc la correction
 *     n'a pas besoin de la transporter.
 */
import { normalizeForDedupe } from "../../lib/tokenize";
import type { ExerciseKind } from "../types";

export type Paire = {
  /** Ce qui reste dans l'ordre, à gauche. */
  gauche: string;
  /** Ce qui est mélangé, à droite. */
  droite: string;
};

export type AppariementPayload = {
  /** « Relie chaque pays à sa capitale ». */
  consigne: string;
  /** Trois paires au moins, six au plus : au-delà, l'écran devient un mur. */
  paires: Paire[];
  /** Affichée après la réponse. Facultative, vivement conseillée. */
  explication?: string;
};

/**
 * La réponse : pour chaque ligne de gauche, le rang choisi dans la colonne de
 * droite TELLE QU'ELLE EST AFFICHÉE.
 */
export type AppariementReponse = number[];

/**
 * L'ordre d'affichage de la colonne de droite.
 *
 * Déterministe et dérivé du contenu : `ordreDroite[j]` est l'indice, dans
 * `paires`, de ce qui s'affiche à la j-ième ligne de droite.
 *
 * Le mélange est un Fisher-Yates alimenté par une empreinte FNV du contenu.
 * Deux exercices voisins n'ont donc pas le même mélange, et le même exercice
 * a toujours le sien.
 */
export function ordreDroite(paires: Paire[]): number[] {
  let h = 2166136261;
  for (const p of paires) {
    for (const texte of [p.gauche, p.droite]) {
      for (let i = 0; i < texte.length; i++) {
        h = Math.imul(h ^ texte.charCodeAt(i), 16777619) >>> 0;
      }
    }
  }
  const ordre = paires.map((_, i) => i);
  for (let i = ordre.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0;
    const j = h % (i + 1);
    [ordre[i], ordre[j]] = [ordre[j]!, ordre[i]!];
  }
  /* Un mélange qui rend l'identité laisserait la réponse à l'écran : les deux
     colonnes seraient alignées. On décale d'un cran, ce qui reste déterministe
     et ne peut plus coïncider dès qu'il y a deux paires. */
  if (ordre.every((valeur, rang) => valeur === rang)) ordre.push(ordre.shift()!);
  return ordre;
}

export const appariement: ExerciseKind<AppariementPayload, AppariementReponse, unknown> = {
  id: "appariement",
  name: "Appariement",
  consigne: "Relie chaque élément à son correspondant",

  /* La correspondance ne part jamais : le client reçoit deux colonnes, et
     rien qui dise laquelle va avec laquelle. */
  toQuestion: (p) => ({
    consigne: p.consigne,
    gauche: p.paires.map((paire) => paire.gauche),
    droite: ordreDroite(p.paires).map((i) => p.paires[i]!.droite),
  }),

  grade: (p, reponse) => {
    const ordre = ordreDroite(p.paires);
    const attendu = p.paires.map((_, i) => ordre.indexOf(i));
    const donne = Array.isArray(reponse) ? reponse : [];
    const justes = attendu.map((rang, i) => donne[i] === rang);
    return {
      correct: justes.every(Boolean) && donne.length === attendu.length,
      reveal: {
        attendu,
        justes,
        paires: p.paires,
        explication: p.explication ?? null,
      },
    };
  },

  /* L'empreinte porte sur la consigne ET sur les côtés gauches : deux séries
     qui relient les mêmes pays à leurs capitales sont bien des jumelles, même
     si l'une a changé une explication. */
  fingerprint: (p) =>
    `appariement:${normalizeForDedupe(p.consigne)}|${p.paires
      .map((paire) => normalizeForDedupe(paire.gauche))
      .sort()
      .join("~")}`,

  validate: (p) => {
    const erreurs: string[] = [];
    if (!p.consigne?.trim()) erreurs.push("consigne vide");
    if (p.paires.length < 3) erreurs.push(`${p.paires.length} paire(s), minimum 3`);
    if (p.paires.length > 6) erreurs.push(`${p.paires.length} paires, maximum 6`);
    if (p.paires.some((paire) => !paire.gauche?.trim() || !paire.droite?.trim())) {
      erreurs.push("paire incomplète");
    }
    /* Deux fois le même élément d'un côté rend l'exercice insoluble : deux
       lignes se valent, et l'une des deux sera comptée fausse à tort. */
    for (const [cote, valeurs] of [
      ["gauche", p.paires.map((paire) => paire.gauche)],
      ["droite", p.paires.map((paire) => paire.droite)],
    ] as const) {
      const vues = new Set(valeurs.map((v) => v.trim().replace(/\s+/g, " ")));
      if (vues.size !== valeurs.length) erreurs.push(`deux éléments identiques à ${cote}`);
    }
    return erreurs;
  },
};
