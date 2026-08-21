/**
 * Géographie — l'Atlas.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * DEUX AXES, PAS ONZE FAMILLES
 *
 * Le module a porté onze catégories hétéroclites — capitales, drapeaux,
 * fleuves, climats, projections, outre-mer. Il y avait de quoi réviser, et
 * pourtant on s'y perdait : rien ne disait où l'on en était.
 *
 * Il tient maintenant sur une grille. En colonnes les continents, en lignes
 * les jeux ; on choisit un continent, puis ce qu'on veut y travailler. C'est
 * la forme des jeux de géographie, et elle vaut mieux qu'un catalogue non
 * parce qu'elle offre moins, mais parce qu'elle se lit d'un coup d'œil.
 *
 * Deux types d'exercices, et la division est nette. Le drapeau et la capitale
 * sont des QUIZ : on reconnaît, on départage quatre propositions. Situer un
 * pays ou une mer se joue sur la CARTE, et n'apprend pas la même chose —
 * savoir que Lima est la capitale du Pérou sans savoir où est le Pérou, c'est
 * connaître une liste, pas une carte.
 *
 * Les tracés viennent de Natural Earth, qui est dans le domaine public,
 * projetés une fois pour toutes par scripts/generer-cartes.mjs. Rien n'est
 * dessiné de mémoire. Les zones marines, elles, sont écrites à la main —
 * parce que les limites d'une mer sont une convention et non un relevé, et le
 * fichier le dit.
 */
import { carteMonde, type CarteMondePayload } from "../kinds/carte-monde";
import { qcm, type QcmPayload } from "../kinds/qcm";
import type { LearningModule, ModuleFinding } from "../types";

export const geographie: LearningModule = {
  id: "geographie",
  name: "Géographie",
  tagline: "Drapeaux, capitales et cartes, continent par continent",
  position: 5,

  vocabulaire: {
    skill: "série",
    skillPluriel: "séries",
    exercise: "question",
    exercisePluriel: "questions",
    catalogue: "L'atlas",
  },

  kinds: [qcm, carteMonde],

  categories: [
    { slug: "drapeaux", name: "Drapeaux" },
    { slug: "capitales", name: "Capitales" },
    { slug: "situer", name: "Situer sur la carte" },
    { slug: "mers", name: "Mers et océans" },
  ],

  validateSkill(skill): ModuleFinding[] {
    const anomalies: ModuleFinding[] = [];

    /* Une question de géographie sans correction ne fait rien apprendre : on
       répond, on a bon ou faux, et l'on repart avec la même carte mentale.
       C'est ce qui sépare un atlas d'un jeu d'adresse. */
    const muettes = skill.exercises.filter((e) =>
      e.kind === qcm.id
        ? !(e.payload as QcmPayload).explanation?.trim()
        : !(e.payload as CarteMondePayload).explication?.trim()
    );
    if (muettes.length > 0) {
      anomalies.push({
        severity: "error",
        code: "sans-explication",
        message: `${muettes.length} question(s) sans correction`,
      });
    }

    /* Un quiz dont les leurres viendraient d'un autre continent se résoudrait
       sans rien savoir : on reconnaîtrait l'intrus. Quatre propositions au
       moins, et toutes du même lot — c'est la fabrique qui s'en charge, ce
       contrôle vérifie qu'elle a bien été employée. */
    const maigres = skill.exercises.filter(
      (e) => e.kind === qcm.id && (e.payload as QcmPayload).choices.length < 4
    );
    if (maigres.length > 0) {
      anomalies.push({
        severity: "error",
        code: "quiz-trop-court",
        message: `${maigres.length} question(s) à moins de quatre propositions`,
        exercise: (maigres[0]!.payload as QcmPayload).question,
      });
    }

    /* Une série mélangée est illisible : « Drapeaux — Europe » doit être un
       quiz de bout en bout, « Situer » une carte de bout en bout. */
    const types = new Set(skill.exercises.map((e) => e.kind));
    if (types.size > 1) {
      anomalies.push({
        severity: "warn",
        code: "serie-melangee",
        message: `deux types d'exercices dans la même série : ${[...types].join(", ")}`,
      });
    }

    return anomalies;
  },
};
