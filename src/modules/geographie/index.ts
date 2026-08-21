/**
 * Géographie — l'Atlas.
 *
 * Le module était un gabarit : deux notions, quatorze questions, écrites pour
 * vérifier qu'ajouter une matière ne demandait qu'un fichier de contenu et deux
 * lignes de registre. La démonstration a tenu ; il devient une matière.
 *
 * Il emploie deux types d'exercices, et le second est neuf. Le QCM sait poser
 * une question et proposer un intrus. L'appariement en pose cinq d'un coup et
 * les fait tenir ensemble — pays et capitale, drapeau et pays, fleuve et
 * embouchure. C'est la mécanique des jeux de géographie, et elle apprend autre
 * chose : elle oblige à départager cinq voisins plutôt qu'à reconnaître un
 * intrus parmi quatre.
 *
 * Le troisième est la carte elle-même : « clique sur le Portugal ». Elle
 * apprend ce qu'aucun QCM ne peut apprendre — la position. Savoir que Lima est
 * la capitale du Pérou sans savoir où est le Pérou, c'est connaître une liste,
 * pas une carte.
 *
 * Les fonds viennent de Natural Earth, qui est dans le domaine public, projetés
 * une fois pour toutes par scripts/generer-cartes.mjs. Rien n'est dessiné de
 * mémoire : une frontière inventée serait pire que pas de carte du tout.
 */
import { appariement } from "../kinds/appariement";
import { carteMonde } from "../kinds/carte-monde";
import { qcm } from "../kinds/qcm";
import type { LearningModule, ModuleFinding } from "../types";
import type { QcmPayload } from "../kinds/qcm";

export const geographie: LearningModule = {
  id: "geographie",
  name: "Géographie",
  tagline: "Capitales, drapeaux, fleuves et frontières",
  position: 5,

  vocabulaire: {
    skill: "notion",
    skillPluriel: "notions",
    exercise: "question",
    exercisePluriel: "questions",
    catalogue: "L'atlas",
  },

  kinds: [qcm, appariement, carteMonde],

  categories: [
    { slug: "capitales", name: "Capitales" },
    { slug: "drapeaux", name: "Drapeaux" },
    { slug: "frontieres", name: "Frontières et voisins" },
    { slug: "reliefs", name: "Reliefs et fleuves" },
    { slug: "mers", name: "Mers et océans" },
    { slug: "milieux", name: "Climats et milieux" },
    { slug: "villes", name: "Villes et populations" },
    { slug: "etats", name: "États et territoires" },
    { slug: "france", name: "France et outre-mer" },
    { slug: "reperes", name: "Repères et cartographie" },
    { slug: "carte", name: "Sur la carte" },
  ],

  validateSkill(skill): ModuleFinding[] {
    const anomalies: ModuleFinding[] = [];

    /* Une question de géographie sans explication ne fait rien apprendre : on
       coche, on a bon ou faux, et l'on repart avec la même carte mentale.
       C'est ce qui sépare un questionnaire d'un atlas. */
    const qcms = skill.exercises.filter((e) => e.kind === qcm.id);
    const sansMot = qcms.filter((e) => !(e.payload as QcmPayload).explanation?.trim());
    if (sansMot.length > 0) {
      anomalies.push({
        severity: "error",
        code: "qcm-sans-explication",
        message: `${sansMot.length} question(s) sans explication`,
        exercise: (sansMot[0]!.payload as QcmPayload).question,
      });
    }

    /* Une notion tout en QCM se parcourt sans jamais avoir à produire quoi que
       ce soit : on reconnaît un intrus parmi quatre, et c'est tout. Un
       appariement ou une carte au moins par notion tient l'exigence. */
    const actifs = [appariement.id, carteMonde.id];
    if (skill.exercises.length >= 6 && !skill.exercises.some((e) => actifs.includes(e.kind))) {
      anomalies.push({
        severity: "warn",
        code: "sans-exercice-actif",
        message: "ni appariement ni carte : la notion ne se travaille qu'en reconnaissance",
      });
    }

    return anomalies;
  },
};
