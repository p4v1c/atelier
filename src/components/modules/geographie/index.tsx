import type { PresentationModule } from "../types";
import { Atlas } from "./Atlas";

/**
 * L'Atlas.
 *
 * La géographie n'a ni cahier d'écolier ni signalétique : elle a la carte.
 * Son thème reprend les codes de l'atlas imprimé — le fond bleu de mer, le
 * vert des terres, le graticule en filigrane et le trait de côte en or.
 *
 * Elle ne déclare AUCUN onglet, et c'est le seul module dans ce cas. Les
 * autres matières ont soixante séries à parcourir et des cours à lire avant
 * de s'exercer ; celle-ci est une grille — un continent, puis un jeu — et une
 * grille au bout d'un couloir de quatre onglets ne se voit pas.
 */
export const geographiePresentation: PresentationModule = {
  theme: "geographie",
  marque: (
    <>
      L’<em>Atlas</em>
    </>
  ),
  sousMarque: "drapeaux · capitales · cartes",
  onglets: [],
  nomAccueil: "L’atlas",
  ecrans: { accueil: Atlas },
};
