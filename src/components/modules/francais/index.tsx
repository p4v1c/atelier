import type { PresentationModule } from "../types";

/**
 * Le français n'a pas de marque à lui : c'est la matière d'origine, celle
 * dont l'Atelier est né. Il porte donc le nom de la maison, et son cahier
 * d'écolier en sous-titre.
 */
export const francais: PresentationModule = {
  marque: (
    <>
      L’<em>Atelier</em>
    </>
  ),
  sousMarque: "cahier d’écolier",
};
