/**
 * La fabrique des modules de langue.
 *
 * Toutes les langues marchent pareil : des cartes recto-verso, trois manières
 * de les réviser, les mêmes catégories. Ce qui change tient en quatre lignes —
 * le nom, l'étiquette de voix, le drapeau et le contenu. Ajouter le thaï
 * reviendra donc à écrire son vocabulaire, pas un module.
 */
import { ecoute, flashcard, traduction, type CartePayload } from "../kinds/flashcard";
import type { LearningModule, ModuleCategory, ModuleFinding, SeedExercise, SeedSkill } from "../types";

/**
 * Les catégories, communes à toutes les langues.
 *
 * « Faux amis » et « Pièges du français » d'abord : c'est là qu'un francophone
 * gagne le plus vite, parce que ce sont des fautes qu'il fait avec assurance.
 */
export const CATEGORIES_LANGUE: ModuleCategory[] = [
  { slug: "bases", name: "Les bases" },
  { slug: "faux-amis", name: "Faux amis" },
  { slug: "pieges", name: "Pièges du français" },
  { slug: "quotidien", name: "Vie quotidienne" },
  { slug: "voyage", name: "Voyage" },
  { slug: "travail", name: "Travail et études" },
  { slug: "verbes", name: "Verbes" },
  { slug: "grammaire", name: "Grammaire en contexte" },
  { slug: "expressions", name: "Expressions" },
];

/* ─────────────────────────── écriture du contenu ─────────────────────── */

/** Une carte, telle qu'on l'écrit dans les fichiers de contenu. */
export type Carte = {
  /** Dans la langue étudiée. */
  etranger: string;
  /** En français. */
  francais: string;
  /**
   * Autres formulations FRANÇAISES acceptées.
   *
   * Elles ne valent que dans le sens langue → français. Les employer dans
   * l'autre sens accepterait « Bien à vous » comme traduction anglaise de
   * « Cordialement » — c'est exactement le bug que ce commentaire évite.
   */
  aussi?: string[];
  /** Autres formulations acceptées DANS LA LANGUE ÉTUDIÉE. */
  aussiEtranger?: string[];
  /** Remarque affichée après la réponse : emploi, piège, nuance. */
  note?: string;
  difficulte?: 1 | 2 | 3;
};

export type LotCartes = {
  slug: string;
  category: string;
  title: string;
  /** Ce que la série apprend, en une phrase ou deux. */
  statement: string;
  tip: string;
  difficulty: 1 | 2 | 3;
  /**
   * L'oral. À réserver aux phrases : entendre un mot isolé hors contexte
   * n'apprend pas grand-chose, et allonge la série pour rien.
   */
  oral?: boolean;
  cartes: Carte[];
};

/**
 * Une carte donne deux exercices, et parfois trois.
 *
 *   flashcard  — langue → français : on reconnaît.
 *   traduction — français → langue : on produit. C'est le plus exigeant, donc
 *                le plus utile.
 *   ecoute     — seulement pour les lots de phrases.
 *
 * Les trois portent des empreintes distinctes : la même carte peut donc revenir
 * sous une autre forme sans qu'on ait l'impression de se répéter.
 */
export function cartesEnExercices(lot: LotCartes, langue: string, batch: string): SeedExercise[] {
  const exercices: SeedExercise[] = [];
  for (const carte of lot.cartes) {
    const difficulty = carte.difficulte ?? lot.difficulty;

    const versFrancais: CartePayload = {
      recto: carte.etranger,
      verso: carte.francais,
      variantes: carte.aussi,
      note: carte.note,
      langue,
    };
    exercices.push({ kind: flashcard.id, payload: versFrancais, difficulty, batch });

    const versLangue: CartePayload = {
      recto: carte.francais,
      verso: carte.etranger,
      // Les variantes de la langue étudiée, et elles seules : la réponse
      // attendue est ici dans cette langue.
      variantes: carte.aussiEtranger,
      note: carte.note,
      // La langue de lecture est celle du VERSO : on écrit en anglais, et c'est
      // la réponse qu'on veut pouvoir entendre.
      langue,
    };
    exercices.push({ kind: traduction.id, payload: versLangue, difficulty, batch });

    if (lot.oral) {
      // L'écoute demande de retranscrire le RECTO, donc la langue étudiée :
      // ses variantes acceptées sont celles de cette langue.
      const aEcouter: CartePayload = { ...versFrancais, variantes: carte.aussiEtranger };
      exercices.push({
        kind: ecoute.id,
        payload: aEcouter,
        difficulty: Math.min(3, difficulty + 1) as 1 | 2 | 3,
        batch,
      });
    }
  }
  return exercices;
}

export function lotsEnSkills(lots: LotCartes[], langue: string, batch: string): SeedSkill[] {
  return lots.map((lot) => ({
    slug: lot.slug,
    category: lot.category,
    title: lot.title,
    statement: lot.statement,
    tip: lot.tip,
    difficulty: lot.difficulty,
    exercises: cartesEnExercices(lot, langue, batch),
  }));
}

/* ─────────────────────────── le module ─────────────────────────── */

export type OptionsLangue = {
  id: string;
  name: string;
  tagline: string;
  position: number;
  /** Étiquette BCP-47 pour la synthèse vocale : "en-GB", "es-ES". */
  langue: string;
  /** Le mot pour une carte : « mot », « palabra »… reste français ici. */
  vocabulaire?: Partial<LearningModule["vocabulaire"]>;
};

export function moduleLangue(o: OptionsLangue): LearningModule {
  return {
    id: o.id,
    name: o.name,
    tagline: o.tagline,
    position: o.position,

    vocabulaire: {
      skill: "série",
      skillPluriel: "séries",
      exercise: "carte",
      exercisePluriel: "cartes",
      catalogue: "Le vocabulaire",
      ...o.vocabulaire,
    },

    kinds: [flashcard, traduction, ecoute],
    categories: CATEGORIES_LANGUE,

    validateSkill(skill): ModuleFinding[] {
      const anomalies: ModuleFinding[] = [];
      const payloads = skill.exercises.map((e) => e.payload as CartePayload);

      // Un mot traduit deux fois différemment dans la même série se contredit :
      // l'utilisateur en apprend un, se trompe sur l'autre, et n'a pas tort.
      const parRecto = new Map<string, Set<string>>();
      for (const p of payloads) {
        const cle = p.recto.trim().toLowerCase();
        (parRecto.get(cle) ?? parRecto.set(cle, new Set()).get(cle)!).add(p.verso.trim());
      }
      for (const [recto, versos] of parRecto) {
        if (versos.size > 1) {
          anomalies.push({
            severity: "error",
            code: "traduction-contradictoire",
            message: `« ${recto} » a deux traductions dans la même série : ${[...versos].join(" / ")}`,
          });
        }
      }

      // Une série qui n'a aucune note n'explique rien : elle fait mémoriser
      // sans faire comprendre. Tolérable pour du vocabulaire nu, pas pour un
      // lot de faux amis ou de grammaire.
      if (
        (skill.category === "Faux amis" || skill.category === "Grammaire en contexte") &&
        !payloads.some((p) => p.note?.trim())
      ) {
        anomalies.push({
          severity: "warn",
          code: "sans-note",
          message: "aucune carte n'explique le piège",
        });
      }
      return anomalies;
    },
  };
}
