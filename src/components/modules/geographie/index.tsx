import type { PresentationModule } from "../types";

/**
 * L'Atlas.
 *
 * La géographie n'a ni cahier d'écolier ni signalétique : elle a la carte.
 * Son thème reprend donc les codes de l'atlas imprimé — le fond bleu de mer,
 * le vert des terres, le graticule en filigrane et le trait de côte en or.
 * Ce sont trois couleurs et une trame, pas une page redessinée.
 */
export const geographiePresentation: PresentationModule = {
  theme: "geographie",
  marque: (
    <>
      L’<em>Atlas</em>
    </>
  ),
  sousMarque: "cartes · drapeaux · frontières",
  onglets: [
    { cle: "accueil", libelle: "Accueil" },
    { cle: "serie", libelle: "Jouer" },
    { cle: "catalogue", libelle: "L’atlas" },
    { cle: "stats", libelle: "Progression" },
  ],
};
