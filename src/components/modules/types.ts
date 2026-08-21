import type { ComponentType } from "react";
import type { ScreenProps } from "../App";
import type { Onglet } from "../Coque";

/**
 * La présentation d'un module.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * Un module n'est pas qu'un jeu de données : c'est une identité. Le français
 * a son cahier d'écolier, la culture générale son carnet bleu bic, les
 * langues leur signalétique. Rien n'oblige deux matières à se ressembler.
 *
 * Depuis la refonte, elles partagent en revanche la même COQUE — flanc,
 * en-tête, pied. Ce qui distingue une matière, c'est sa marque, ses onglets,
 * sa couleur d'accent, et au besoin ses écrans. Pas une page entière à
 * redessiner.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Ce fichier est à part du registre de données (src/modules/) parce qu'il
 * importe des composants React : le seed et le validateur, qui tournent sous
 * Node, n'ont rien à faire avec du JSX.
 */
export type PresentationModule = {
  /**
   * Valeur posée dans `data-module` sur la racine. Le CSS du module s'y
   * accroche. Sans thème, le module hérite de l'apparence par défaut.
   */
  theme?: string;

  /** Pose aussi `data-langue` : les modules de langue partagent une peau. */
  langue?: boolean;

  /** La marque, en haut du flanc. Sans elle, le nom du module suffit. */
  marque?: React.ReactNode;
  /** Sous la marque : la nature de la matière, en petites capitales. */
  sousMarque?: string;

  /** Les onglets de l'en-tête. Sans eux, les onglets génériques. */
  onglets?: Onglet[];

  /**
   * Écrans propres au module. Chacun est facultatif : ce qui manque retombe
   * sur l'écran générique.
   */
  ecrans?: {
    accueil?: ComponentType<ScreenProps>;
    catalogue?: ComponentType<ScreenProps>;
    stats?: ComponentType<ScreenProps>;
    lecon?: ComponentType<ScreenProps & { slug: string }>;
  };
};
