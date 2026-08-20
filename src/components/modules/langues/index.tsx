/**
 * Les présentations des modules de langue.
 *
 * L'anglais et l'espagnol partagent tout — l'enveloppe, l'accueil, le CSS — et
 * ne diffèrent que par leur nom et leur couleur d'accent, celle-ci posée en
 * CSS sur [data-langue]. Ajouter le thaï ne demandera qu'une ligne ici et une
 * couleur là-bas.
 */
import { AccueilLangue } from "./Accueil";
import { EnveloppeLangue } from "./Enveloppe";
import type { PresentationModule } from "../types";

function presentationLangue(
  nom: string,
  accents: { etiquette: string; nom: string }[]
): PresentationModule {
  return {
    theme: "langue",
    enteteAutonome: true,
    enveloppe: (props) => <EnveloppeLangue {...props} nom={nom} />,
    ecrans: {
      accueil: (props) => <AccueilLangue {...props} accents={accents} />,
    },
  };
}

export const anglaisPresentation = presentationLangue("Learn English", [
  { etiquette: "en-GB", nom: "Britannique" },
  { etiquette: "en-US", nom: "Américain" },
]);

export const espagnolPresentation = presentationLangue("Aprender Español", [
  { etiquette: "es-ES", nom: "Espagne" },
  { etiquette: "es-MX", nom: "Amérique latine" },
]);
