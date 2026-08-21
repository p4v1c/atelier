/**
 * Un fond de carte : des chemins SVG déjà projetés, et rien d'autre.
 *
 * Le navigateur ne projette rien et ne charge aucune bibliothèque de
 * cartographie : tout le calcul a eu lieu dans scripts/generer-cartes.mjs.
 */

/** Un pays sur la carte : son identifiant, son nom, son tracé. */
export type PaysTrace = {
  /** Code ISO 3166-1 numérique, en chaîne. Les territoires sans code ont un id « x-… ». */
  id: string;
  nom: string;
  /** L'attribut d d'un <path>, déjà projeté dans le viewBox du fond. */
  d: string;
};

export type FondDeCarte = {
  cle: string;
  titre: string;
  largeur: number;
  hauteur: number;
  pays: PaysTrace[];
};
