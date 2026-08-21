/**
 * Les présentations des modules de langue.
 *
 * L'anglais et l'espagnol partagent tout — la peau, l'accueil, les onglets — et
 * ne diffèrent que par leur marque et leur couleur d'accent, celle-ci posée en
 * CSS sur [data-langue]. Ajouter le thaï ne demandera qu'une ligne ici.
 */
import { AccueilLangue } from "./Accueil";
import type { PresentationModule } from "../types";

function presentationLangue(
  marque: React.ReactNode,
  sousMarque: string,
  accents: { etiquette: string; nom: string }[]
): PresentationModule {
  return {
    theme: "langue",
    langue: true,
    marque,
    sousMarque,
    onglets: [
      { cle: "accueil", libelle: "Accueil" },
      { cle: "serie", libelle: "S’entraîner" },
      { cle: "catalogue", libelle: "Programme" },
      { cle: "stats", libelle: "Progression" },
    ],
    ecrans: {
      accueil: (props) => <AccueilLangue {...props} accents={accents} />,
    },
  };
}

export const anglaisPresentation = presentationLangue(
  <>
    Learn <em>English</em>
  </>,
  "en-GB · en-US",
  [
    { etiquette: "en-GB", nom: "Britannique" },
    { etiquette: "en-US", nom: "Américain" },
  ]
);

export const espagnolPresentation = presentationLangue(
  <>
    Aprender <em>Español</em>
  </>,
  "es-ES · es-MX",
  [
    { etiquette: "es-ES", nom: "Espagne" },
    { etiquette: "es-MX", nom: "Amérique latine" },
  ]
);
