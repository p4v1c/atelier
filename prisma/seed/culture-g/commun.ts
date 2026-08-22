/**
 * Culture générale — les questions écrites ici, et non héritées du cahier.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * CHANTIER EN COURS — À LIRE AVANT DE CONTINUER
 *
 * Ces notions n'ont PAS de cours. C'est délibéré et provisoire : on écrit
 * d'abord les questions, on écrira les cours ensuite. Chaque notion est donc
 * un thème assez étroit pour qu'un cours vienne s'y attacher tel quel, sans
 * avoir à redécouper quoi que ce soit.
 *
 * Trois marques permettent de les retrouver, quelle que soit la session qui
 * reprend le travail :
 *
 *   · le slug commence par `cg-neuf-`
 *   · chaque exercice porte `batch: "cg-sans-cours"`
 *   · le lot s'appelle `cg-neuf` dans chargerContenuCultureG()
 *
 * Pour lister ce qui attend encore son cours :
 *
 *     npx tsx -e "import {CG_NEUF} from './prisma/seed/culture-g'; \
 *       CG_NEUF.forEach(n => console.log(n.slug, '·', n.title))"
 *
 * L'état d'avancement — quels sujets sont faits, ce qui reste — est tenu dans
 * prisma/seed/culture-g/RESUME.md. Le mettre à jour fait partie du travail.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * LES RÈGLES D'ÉCRITURE
 *
 * Quatre propositions, jamais moins. Une explication à chaque question, qui
 * apprend quelque chose de plus que la réponse — c'est elle qui tient lieu de
 * cours en attendant le vrai. Aucune proposition en double dans une même
 * question, et surtout aucune QUESTION en double dans tout le module : le
 * validateur compare l'énoncé normalisé de toutes les matières, et refuse le
 * seed au premier jumeau.
 *
 * Les faits viennent de connaissances encyclopédiques établies — le niveau du
 * manuel scolaire et de l'encyclopédie, comme le reste du cahier. En cas de
 * doute sur une date ou un chiffre, on écarte la question plutôt que de la
 * risquer : une erreur apprise est pire qu'une question de moins.
 */
import type { SeedExercise, SeedSkill } from "../../../src/modules/types";

/** [énoncé, propositions, rang de la bonne, explication, difficulté ?] */
export type Q = [string, string[], number, string, (1 | 2 | 3)?];

export const LOT_SANS_COURS = "cg-sans-cours";

/**
 * Une notion : un thème étroit, ses questions, et pas de cours.
 *
 * `difficulty` est celle de la notion entière ; chaque question peut la
 * nuancer par son cinquième élément.
 */
export function notion(
  slug: string,
  category: string,
  title: string,
  statement: string,
  tip: string,
  difficulty: 1 | 2 | 3,
  questions: Q[]
): SeedSkill {
  return {
    slug: `cg-neuf-${slug}`,
    category,
    title,
    statement,
    tip,
    difficulty,
    exercises: questions.map(([question, choices, answerIndex, explanation, d]): SeedExercise => ({
      kind: "qcm",
      payload: { question, choices, answerIndex, explanation },
      difficulty: d ?? difficulty,
      batch: LOT_SANS_COURS,
    })),
  };
}
