/**
 * Géographie — l'Atlas.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * UN SEUL GESTE
 *
 * Le module a porté onze familles et trois types de questions. Il y avait de
 * quoi réviser, et pourtant on s'y perdait : le catalogue faisait écran à ce
 * que la matière a de particulier. Un QCM sur les climats est un QCM ; il
 * n'apprend rien qu'une autre matière n'apprendrait aussi bien.
 *
 * Ce qui reste est ce qu'aucun questionnaire ne sait faire — la POSITION.
 * Savoir que Lima est la capitale du Pérou sans savoir où est le Pérou, c'est
 * connaître une liste, pas une carte. Trois séries, un seul type d'exercice,
 * et tout se joue en cliquant sur le fond.
 *
 * Les tracés viennent de Natural Earth, qui est dans le domaine public,
 * projetés une fois pour toutes par scripts/generer-cartes.mjs. Rien n'est
 * dessiné de mémoire : une frontière inventée serait pire que pas de carte.
 * Les zones marines, elles, sont écrites à la main — parce que les limites
 * d'une mer sont une convention et non un relevé, et le fichier le dit.
 */
import { carteMonde, type CarteMondePayload } from "../kinds/carte-monde";
import type { LearningModule, ModuleFinding } from "../types";

export const geographie: LearningModule = {
  id: "geographie",
  name: "Géographie",
  tagline: "Drapeaux, capitales et mers — sur la carte",
  position: 5,

  vocabulaire: {
    skill: "série",
    skillPluriel: "séries",
    exercise: "question",
    exercisePluriel: "questions",
    catalogue: "L'atlas",
  },

  kinds: [carteMonde],

  categories: [
    { slug: "drapeaux", name: "Drapeaux" },
    { slug: "capitales", name: "Capitales" },
    { slug: "mers", name: "Mers et océans" },
  ],

  validateSkill(skill): ModuleFinding[] {
    const anomalies: ModuleFinding[] = [];
    const cartes = skill.exercises.map((e) => e.payload as CarteMondePayload);

    /* Une question de géographie sans explication ne fait rien apprendre : on
       clique, on a bon ou faux, et l'on repart avec la même carte mentale.
       C'est ce qui sépare un atlas d'un jeu d'adresse. */
    const muettes = cartes.filter((p) => !p.explication?.trim());
    if (muettes.length > 0) {
      anomalies.push({
        severity: "error",
        code: "carte-sans-explication",
        message: `${muettes.length} question(s) sans explication`,
        exercise: muettes[0]!.consigne,
      });
    }

    /* Une série qui ne se joue que sur une carte n'apprend qu'un continent.
       Trois fonds au moins, sinon la série est une région déguisée en série. */
    const fonds = new Set(cartes.map((p) => p.region));
    if (skill.exercises.length >= 12 && fonds.size < 3) {
      anomalies.push({
        severity: "warn",
        code: "serie-mono-carte",
        message: `${skill.exercises.length} questions sur ${fonds.size} fond(s) : la série ne fait travailler qu'une région`,
      });
    }

    return anomalies;
  },
};
