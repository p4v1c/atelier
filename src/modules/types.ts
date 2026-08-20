/**
 * Le contrat d'un module.
 *
 * Un module, c'est une matière : le français, la culture générale, une langue,
 * un jeu de géographie. Pour en ajouter un, il faut écrire UN fichier qui rend
 * un objet `LearningModule`, et l'inscrire dans src/modules/index.ts. Rien
 * d'autre : ni migration, ni table, ni route, ni écran de série. Le
 * planificateur, les comptes, le catalogue, les statistiques et le tableau de
 * bord s'y appliquent d'office.
 *
 * Ce fichier est pur : aucune base, aucun accès réseau, aucune horloge, et
 * AUCUN contenu. C'est ce qui permet de le charger côté serveur comme côté
 * navigateur sans y traîner des centaines de kilo-octets d'exercices — le
 * contenu vit à part, dans src/modules/contenu.ts, que seuls le seed et le
 * validateur importent.
 */
import type { ContentStatus } from "../lib/content";

/* ─────────────────────────── types d'exercices ─────────────────────────── */

/**
 * Un type d'exercice sait quatre choses, et seulement quatre : fabriquer la
 * question SANS la réponse, corriger une réponse, produire une empreinte de
 * dédoublonnage, et se relire.
 *
 * Le serveur ne sait jamais ce que veut dire « repérer la faute » ou « cocher
 * la bonne case » : il délègue. C'est ce qui rend un nouveau type d'exercice
 * additif plutôt qu'invasif.
 */
export type ExerciseKind<Payload = any, Answer = any, Reveal = any> = {
  /** Identifiant stocké en base : "spot-error", "qcm", "flashcard"… */
  id: string;
  /** Nom lisible, pour les écrans de contenu. */
  name: string;
  /** Consigne affichée au-dessus de la question. */
  consigne: string;

  /**
   * Ce que le client reçoit AVANT de répondre.
   * Tout ce qui trahirait la réponse doit être écarté ici — c'est la seule
   * barrière entre la bonne réponse et l'inspecteur du navigateur.
   */
  toQuestion(payload: Payload): unknown;

  /** Le verdict. Calculé côté serveur, jamais ailleurs. */
  grade(payload: Payload, answer: Answer): { correct: boolean; reveal: Reveal };

  /** Clé de dédoublonnage : deux exercices de même empreinte sont des jumeaux. */
  fingerprint(payload: Payload): string;

  /** Contrôles propres à ce type, appelés par le validateur de contenu. */
  validate?(payload: Payload): string[];
};

/* ───────────────────────── contenu générique ───────────────────────── */

export type SeedExercise = {
  kind: string;
  payload: unknown;
  difficulty?: 1 | 2 | 3;
  status?: ContentStatus;
  batch?: string;
};

/** Ce que le moteur appelle une compétence ; le module lui donne son nom. */
export type SeedSkill = {
  slug: string;
  /** Nom d'une catégorie déclarée par le module. */
  category: string;
  title: string;
  /** HTML léger : <b> uniquement. */
  statement: string;
  tip: string;
  difficulty: 1 | 2 | 3;
  status?: ContentStatus;
  exercises: SeedExercise[];
  /**
   * Un support de cours, quand la compétence en a un : le texte à lire avant
   * de répondre. Sa forme regarde le module — voir `LessonDocument` pour celle
   * que sait afficher l'écran de leçon fourni.
   */
  lesson?: unknown;
};

/**
 * La forme de leçon que l'écran de lecture sait rendre.
 *
 * Un module peut en stocker une autre : ce sera à lui de fournir sa propre
 * vue. Celle-ci couvre le cas courant — des sections de texte, des visuels
 * structurés, des sources.
 */
export type LessonDocument = {
  titre: string;
  sections: {
    titre: string;
    texte: string;
    visuels?: LessonVisuel[];
  }[];
  sources?: { titre: string; url: string }[];
};

export type LessonVisuel =
  | { type: "frise"; titre: string; evenements: { date: string; label: string; texte?: string }[] }
  | { type: "chiffres"; titre: string; items: { valeur: string; label: string; texte?: string }[] }
  | { type: "etapes"; titre: string; etapes: { titre: string; texte: string }[] }
  | { type: "tableau"; titre: string; colonnes: string[]; lignes: string[][]; note?: string }
  | { type: "barres"; titre: string; donnees: { label: string; valeur: number; affichage?: string }[]; note?: string }
  | { type: "comparaison"; titre: string; colonnes: { titre: string; points: string[] }[] }
  | { type: "image"; src: string; legende?: string; alt?: string };

export type SeedDictationLike = {
  text: string;
  theme: string;
  difficulty: 1 | 2 | 3;
  skillSlugs: string[];
  status?: ContentStatus;
};

export type ModuleBatch = {
  /** Identifiant du lot : "legacy", "batch-007", "geo-capitales". */
  id: string;
  skills: SeedSkill[];
  /** Textes longs à écouter et à retranscrire. Optionnel, propre à certains modules. */
  dictations?: SeedDictationLike[];
};

/* ─────────────────────────────── modules ─────────────────────────────── */

export type ModuleCategory = { slug: string; name: string };

/** Une anomalie relevée par un contrôle propre au module. */
export type ModuleFinding = {
  severity: "error" | "warn";
  code: string;
  message: string;
  /** L'exercice en cause, s'il y en a un. */
  exercise?: string;
};

/**
 * Le vocabulaire du module.
 *
 * Le moteur dit « compétence » et « exercice » ; l'écran dit « règle » et
 * « phrase » en français, « notion » et « question » en culture générale,
 * « carte » en langues. Sans ça, une plateforme multi-matières finit par
 * parler comme sa base de données.
 */
export type ModuleVocabulaire = {
  skill: string;
  skillPluriel: string;
  exercise: string;
  exercisePluriel: string;
  /** Titre de l'écran de catalogue : « Les règles », « Les notions »… */
  catalogue: string;
};

export type LearningModule = {
  /** Identifiant stable, repris en base et dans les URL : "francais". */
  id: string;
  /** Nom affiché : « Français ». */
  name: string;
  /** Une phrase, sous le nom, sur le tableau de bord. */
  tagline: string;
  /** Ordre d'affichage. */
  position: number;
  status?: ContentStatus;

  vocabulaire: ModuleVocabulaire;

  /** Types d'exercices employés par ce module. */
  kinds: ExerciseKind[];

  /** Catégories internes, dans l'ordre d'affichage. */
  categories: ModuleCategory[];

  /**
   * Les catégories dont les erreurs ne comptent jamais.
   * En français : « Cas discutés ». Ailleurs : souvent aucune.
   */
  categoriesNonNotees?: string[];

  /**
   * Contrôles propres au module, qui portent sur une compétence entière —
   * donc sur ce qu'un exercice seul ne peut pas voir : « aucun exercice sans
   * faute », « les trois fautes sont au même rang », « trop peu d'exercices ».
   */
  validateSkill?(skill: SeedSkill): ModuleFinding[];

  /**
   * Le modèle de progression.
   *
   * `repetition-espacee` : paliers et échéances, le cas courant.
   * `scores` : un score qui monte et redescend — les jeux. Le planificateur
   * ignore alors complètement le module, et c'est voulu : lui imposer des
   * paliers reviendrait à tordre le modèle jusqu'à le casser.
   */
  progression?: "repetition-espacee" | "scores";
};

/** Les types d'exercices de tous les modules, par identifiant. */
export function indexerKinds(modules: LearningModule[]): Map<string, ExerciseKind> {
  const index = new Map<string, ExerciseKind>();
  for (const m of modules) {
    for (const k of m.kinds) {
      const existant = index.get(k.id);
      if (existant && existant !== k) {
        throw new Error(
          `Deux types d'exercice différents portent l'identifiant « ${k.id} » (module ${m.id}).`
        );
      }
      index.set(k.id, k);
    }
  }
  return index;
}
