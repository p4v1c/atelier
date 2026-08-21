/**
 * « Clique dessus » — l'exercice de carte.
 *
 * C'est la mécanique des jeux de géographie, et elle apprend quelque chose
 * qu'aucun QCM ne peut apprendre : la POSITION. Savoir que Lima est la
 * capitale du Pérou et ne pas savoir où est le Pérou, c'est connaître une
 * liste, pas une carte.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * CE QUI NE PART PAS AU CLIENT
 *
 * `cible` et `cibleNom` restent au serveur. Le navigateur reçoit une région,
 * une consigne et, éventuellement, une amorce — un drapeau, un indice. Il ne
 * reçoit jamais l'identifiant attendu.
 *
 * Le fond de carte, lui, est bien dans le navigateur : c'est le plateau de
 * jeu, pas la réponse. Le lire revient à regarder un atlas — ce qui est
 * précisément l'exercice.
 *
 * Conséquence pour l'auteur : quand la consigne ne doit pas nommer le pays —
 * une question posée par un drapeau, par exemple —, c'est à lui de ne pas
 * l'écrire. Le type ne fabrique jamais la consigne à partir de `cibleNom`.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * DEUX COUCHES, ET UNE SEULE VIVANTE À LA FOIS
 *
 * La carte porte les terres et les mers. `couche` dit laquelle répond au clic.
 * Ce n'est pas la réponse — la consigne annonce déjà « clique sur la mer » —,
 * c'est le plateau : sans elle, cliquer la Méditerranée quand on cherche
 * l'Italie compterait comme une réponse, et l'inverse aussi.
 */
import { normalizeForDedupe } from "../../lib/tokenize";
import { CLES_REGION } from "../../lib/cartes/regions";
import type { ExerciseKind } from "../types";

/** Ce sur quoi on clique : une terre, ou une étendue d'eau. */
export type CoucheCarte = "pays" | "mer";

export type CarteMondePayload = {
  /** Clé d'un fond de carte : "monde", "europe", "afrique", "asie", "ameriques". */
  region: string;
  /** La couche qui répond au clic. Par défaut les pays. */
  couche?: CoucheCarte;
  /** Identifiant de la cible — code ISO numérique pour un pays, slug pour une mer. */
  cible: string;
  /** Son nom, pour la correction. Ne part jamais avant la réponse. */
  cibleNom: string;
  /** « Clique sur le Portugal. » Écrite par l'auteur, jamais déduite. */
  consigne: string;
  /** Affiché au-dessus de la carte : un drapeau, une silhouette, un indice. */
  amorce?: string;
  /** Affichée après la réponse. */
  explication?: string;
};

/** La réponse : l'identifiant du pays cliqué. */
export type CarteMondeReponse = string;

export const carteMonde: ExerciseKind<CarteMondePayload, CarteMondeReponse, unknown> = {
  id: "carte-monde",
  name: "Carte",
  consigne: "Clique sur le pays",

  toQuestion: (p) => ({
    region: p.region,
    couche: p.couche ?? "pays",
    consigne: p.consigne,
    amorce: p.amorce ?? null,
  }),

  grade: (p, reponse) => ({
    correct: typeof reponse === "string" && reponse === p.cible,
    reveal: {
      cible: p.cible,
      cibleNom: p.cibleNom,
      explication: p.explication ?? null,
    },
  }),

  /**
   * L'empreinte porte la région, la cible ET la question.
   *
   * Elle n'a pas toujours porté la question, et le contrôle était alors trop
   * grossier : il traitait « 🇵🇹 » et « Lisbonne est la capitale de quel
   * pays ? » comme le même exercice, au motif qu'on y clique le même pays.
   * Ce sont deux questions différentes qui partagent une réponse, et une
   * matière qui interdirait cela ne pourrait parler d'un pays qu'une fois.
   *
   * Ce qui reste interdit — et doit l'être — c'est de poser DEUX FOIS LA MÊME
   * QUESTION : même drapeau, ou même consigne, sur le même fond.
   */
  fingerprint: (p) =>
    `carte-monde:${p.region}:${p.cible}:${normalizeForDedupe(p.amorce ?? p.consigne)}`,

  validate: (p) => {
    const erreurs: string[] = [];
    if (!p.consigne?.trim()) erreurs.push("consigne vide");
    if (!p.cible?.trim()) erreurs.push("cible vide");
    if (!p.cibleNom?.trim()) erreurs.push("nom de la cible vide");
    if (!CLES_REGION.includes(p.region)) {
      erreurs.push(`région inconnue : « ${p.region} » (connues : ${CLES_REGION.join(", ")})`);
    }
    if (p.couche && p.couche !== "pays" && p.couche !== "mer") {
      erreurs.push(`couche inconnue : « ${p.couche} » (pays ou mer)`);
    }
    /* Une consigne qui nomme le pays alors qu'on interroge par un drapeau
       donne la réponse. Le contrôle ne peut pas deviner l'intention, mais il
       peut signaler le cas le plus visible : une amorce ET le nom écrit. */
    if (p.amorce && p.cibleNom && normalizeForDedupe(p.consigne).includes(normalizeForDedupe(p.cibleNom))) {
      erreurs.push(`la consigne nomme « ${p.cibleNom} » alors qu'une amorce le fait deviner`);
    }
    return erreurs;
  },
};
