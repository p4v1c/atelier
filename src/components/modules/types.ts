import type { ComponentType } from "react";
import type { ScreenProps } from "../App";

/**
 * La présentation d'un module.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * Un module n'est pas qu'un jeu de données : c'est aussi une identité. Le
 * français a son cahier d'écolier, la culture générale a son carnet de
 * révision, une langue aura autre chose encore. Rien n'oblige deux matières
 * à se ressembler — c'est même le contraire qu'on veut.
 *
 * `theme` pose un attribut sur la racine, et le CSS du module s'accroche
 * dessus. `ecrans` va plus loin : le module fournit ses propres écrans, avec
 * sa navigation et sa mise en page. Ceux qu'il ne fournit pas retombent sur
 * les écrans génériques, qui marchent pour tout le monde.
 *
 * Le moteur, lui, ne change pas : même planificateur, même compte, même
 * progression. C'est l'enveloppe qui diffère, pas la mécanique.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Ce fichier est à part du registre de données (src/modules/) parce qu'il
 * importe des composants React : le seed et le validateur, qui tournent sous
 * Node, n'ont rien à faire avec du JSX.
 */
export type PresentationModule = {
  /**
   * Valeur posée dans `data-module` sur `.app`. Le CSS du module s'y accroche.
   * Sans thème, le module hérite de l'apparence par défaut.
   */
  theme?: string;

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

  /**
   * Le module dessine son propre en-tête : l'ossature masque alors le sien.
   * C'est ce qui permet à une matière de ressembler vraiment à un autre site.
   */
  enteteAutonome?: boolean;

  /**
   * Une enveloppe posée autour de TOUS les écrans du module.
   *
   * C'est elle qui porte la barre de navigation, la largeur de page et le pied
   * de page. Sans elle, un module au look propre le perdrait dès qu'on quitte
   * son accueil pour un écran générique.
   */
  enveloppe?: ComponentType<{
    children: React.ReactNode;
    onde: (destination: EcranModule) => void;
    actif: EcranModule;
  }>;
};

/** Les destinations de la navigation d'un module. */
export type EcranModule = "accueil" | "serie" | "catalogue" | "stats" | "atelier";
