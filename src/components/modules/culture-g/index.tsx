import { AccueilCultureG } from "./Accueil";
import type { PresentationModule } from "../types";

/**
 * Le Cahier de culture G garde sa marque, ses onglets et son bleu bic ; il
 * partage désormais la coque avec les autres matières. Ce qui l'identifie,
 * c'est son nom et ses couleurs — pas une mise en page à part.
 */
export const cultureG: PresentationModule = {
  theme: "culture-g",
  marque: (
    <>
      Le Cahier <em>de culture G</em>
    </>
  ),
  sousMarque: "réviser · apprendre · retenir",
  onglets: [
    { cle: "accueil", libelle: "Accueil" },
    { cle: "serie", libelle: "Quiz" },
    { cle: "catalogue", libelle: "Cours" },
    { cle: "stats", libelle: "Progression" },
  ],
  ecrans: { accueil: AccueilCultureG },
};
