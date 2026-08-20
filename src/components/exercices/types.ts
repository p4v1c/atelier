import type { ComponentType } from "react";
import type { AnswerVerdict } from "@/lib/api-types";

export type VueExerciceProps = {
  /** La question telle que le type d'exercice l'a fabriquée. À lire selon le type. */
  question: unknown;
  /** null tant que l'utilisateur n'a pas répondu. */
  verdict: AnswerVerdict | null;
  /** Le rang cliqué, la chaîne saisie… ce que l'utilisateur a répondu. */
  choix: unknown;
  repondre: (answer: unknown) => void;
};

/**
 * Ce qu'il faut fournir pour qu'un type d'exercice s'affiche.
 *
 * L'écran de série ne connaît que ça : il ne sait ni ce qu'est un mot fautif,
 * ni ce qu'est une proposition. Ajouter un type d'exercice, c'est écrire un
 * composant et l'inscrire dans le registre — pas toucher à la série.
 */
export type VueExercice = {
  Vue: ComponentType<VueExerciceProps>;
  /** Affichée sous la question tant qu'on n'a pas répondu. */
  consigne: string;
  /** Le mot du verdict, quand le type a mieux à dire que « Ce n'était pas ça ». */
  titreVerdict?(verdict: AnswerVerdict): string | null;
};
