/**
 * Un fond de carte : des chemins SVG déjà projetés, et rien d'autre.
 *
 * Le navigateur ne projette rien et ne charge aucune bibliothèque de
 * cartographie : tout le calcul a eu lieu dans scripts/generer-cartes.mjs.
 */

/** Un pays ou une mer sur la carte : son identifiant, son nom, son tracé. */
export type Trace = {
  /**
   * Pour un pays : le code ISO 3166-1 numérique, en chaîne — ou « x-… » pour
   * les territoires qui n'en ont pas. Pour une mer : un mot-clé.
   */
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
  /**
   * Les zones marines, dessinées SOUS les terres.
   *
   * Elles n'ont pas la même nature que les pays, et le code ne doit pas
   * l'oublier : un tracé de côte est un fait, les limites d'une mer sont une
   * convention. L'en-tête de scripts/generer-cartes.mjs dit laquelle.
   */
  mers: Trace[];
  pays: Trace[];
};
