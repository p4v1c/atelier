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
 * autres matières ont des séries à parcourir et des cours à lire avant de
 * s'exercer ; celle-ci a trois façons de lire la même carte. Trois portes
 * derrière un couloir de quatre onglets, c'était trois portes de trop.
 */
export const geographiePresentation: PresentationModule = {
  theme: "geographie",
  marque: (
    <>
      L’<em>Atlas</em>
    </>
  ),
  sousMarque: "cartes · drapeaux · mers",
  onglets: [],
  nomAccueil: "L’atlas",
  ecrans: { accueil: Atlas },
};
