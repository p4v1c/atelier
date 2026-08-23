/**
 * Le contenu de chaque module.
 *
 * Séparé du registre pour une raison précise : `src/modules/index.ts` est
 * importé par les routes et par le navigateur, alors que le contenu pèse des
 * centaines de kilo-octets et ne sert qu'à deux endroits — le seed et le
 * validateur. Les mélanger ferait entrer 4 336 phrases dans le paquet de
 * chaque route.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  AJOUTER LE CONTENU D'UN MODULE
 *  1. écrire une fonction qui rend des `ModuleBatch[]`
 *  2. l'inscrire dans CONTENU ci-dessous, sous l'identifiant du module
 * ─────────────────────────────────────────────────────────────────────────
 */
import { chargerContenuCultureG } from "./culture-g/contenu";
import { chargerContenuAnglais } from "./langues/anglais/contenu";
import { chargerContenuEspagnol } from "./langues/espagnol/contenu";
import { chargerContenuGeographie } from "./geographie/contenu";
import { chargerContenuFrancais } from "./francais/contenu";
import { aDesPropositions, graineDe, melangerPropositions } from "./kinds/melange";
import type { LearningModule, ModuleBatch } from "./types";

/** Chargeurs de contenu, par identifiant de module. */
export const CONTENU: Record<string, () => ModuleBatch[]> = {
  francais: chargerContenuFrancais,
  "culture-g": chargerContenuCultureG,
  anglais: chargerContenuAnglais,
  espagnol: chargerContenuEspagnol,
  geographie: chargerContenuGeographie,
};

/**
 * Le contenu d'un module.
 *
 * Un module sans contenu déclaré rend un tableau vide plutôt qu'une erreur :
 * c'est l'état normal d'un module de jeux, qui n'a pas d'exercices à semer.
 *
 * C'est ici, et nulle part ailleurs, que les propositions des choix multiples
 * sont mélangées — voir `kinds/melange`. Ici, parce que c'est le SEUL passage
 * commun au seed et au validateur : les mélanger plus loin ferait diverger ce
 * que le validateur contrôle de ce que la base reçoit, et le contrôle
 * « toutes les bonnes réponses au même rang » se prononcerait sur un contenu
 * qui n'existe plus.
 *
 * L'empreinte de dédoublonnage d'un QCM ne porte que sur l'énoncé : permuter
 * les propositions ne change donc pas l'identité de l'exercice, et le seed met
 * à jour la ligne existante au lieu d'en créer une neuve. La progression
 * déjà acquise reste attachée.
 */
export function contenuDe(mod: LearningModule): ModuleBatch[] {
  const lots = CONTENU[mod.id]?.() ?? [];
  return lots.map((lot) => ({
    ...lot,
    skills: lot.skills.map((skill) => ({
      ...skill,
      exercises: skill.exercises.map((exercice) =>
        aDesPropositions(exercice.payload)
          ? // La graine est l'énoncé : deux questions différentes tirent des
            // permutations différentes, la même question tire toujours la
            // sienne.
            { ...exercice, payload: melangerPropositions(exercice.payload, graineDe(exercice.payload)) }
          : exercice
      ),
    })),
  }));
}
