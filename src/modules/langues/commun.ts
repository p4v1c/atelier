/**
 * La fabrique des modules de langue.
 *
 * Toutes les langues marchent pareil : on apprend du vocabulaire, on écoute,
 * on écrit sous la dictée, on lit à voix haute, on étudie un point de
 * grammaire. Ce qui change tient en quatre lignes — le nom, les accents, la
 * couleur et le contenu. Ajouter le thaï reviendra donc à écrire son
 * vocabulaire, pas un module.
 *
 * Le cadre européen (A1 → C2) structure tout : chaque série porte son niveau,
 * ce qui permet de dire à l'apprenant où il en est plutôt que de lui compter
 * des points.
 */
import { ecoute, flashcard, traduction, type CartePayload } from "../kinds/flashcard";
import { prononciation } from "../kinds/prononciation";
import type {
  LearningModule,
  LessonDocument,
  ModuleCategory,
  ModuleFinding,
  SeedDictationLike,
  SeedExercise,
  SeedSkill,
} from "../types";

/* ─────────────────────────── le cadre européen ─────────────────────────── */

export const NIVEAUX = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
export type Niveau = (typeof NIVEAUX)[number];

/** Ce que chaque niveau veut dire, en une phrase qu'on peut afficher. */
export const SENS_NIVEAU: Record<Niveau, string> = {
  A1: "Se présenter, poser des questions simples, comprendre l'essentiel très lentement.",
  A2: "Tenir une conversation courante : commander, demander son chemin, raconter sa journée.",
  B1: "Se débrouiller en voyage, raconter, argumenter simplement, comprendre l'essentiel d'un texte.",
  B2: "Discuter sans effort avec un natif, défendre un point de vue, lire la presse.",
  C1: "S'exprimer avec nuance, comprendre l'implicite, l'ironie et les registres.",
  C2: "Tout comprendre, restituer, nuancer comme un natif cultivé.",
};

/**
 * Les catégories, communes à toutes les langues.
 *
 * « Faux amis » et « Pièges du français » d'abord : c'est là qu'un francophone
 * gagne le plus vite, parce que ce sont des fautes qu'il fait avec assurance.
 */
export const CATEGORIES_LANGUE: ModuleCategory[] = [
  { slug: "bases", name: "Les bases" },
  /* Le vocabulaire thématique a sa catégorie propre. Il était jusqu'ici
     dispersé entre « Les bases » et « Vie quotidienne », qui portent des
     tournures et non des champs lexicaux : on ne pouvait ni le parcourir ni
     s'entraîner dessus seul, alors que c'est ce qu'on cherche le plus souvent
     — « je veux les mots de la cuisine », pas « je veux le présent simple ». */
  { slug: "vocabulaire", name: "Vocabulaire" },
  { slug: "faux-amis", name: "Faux amis" },
  { slug: "pieges", name: "Pièges du français" },
  { slug: "quotidien", name: "Vie quotidienne" },
  { slug: "voyage", name: "Voyage" },
  { slug: "travail", name: "Travail et études" },
  { slug: "verbes", name: "Verbes" },
  { slug: "grammaire", name: "Grammaire en contexte" },
  { slug: "conjugaison", name: "Conjugaison" },
  { slug: "expressions", name: "Expressions" },
  { slug: "prononciation", name: "Prononciation" },
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
  /** Niveau du cadre européen. C'est lui qui situe l'apprenant. */
  niveau: Niveau;
  /**
   * L'oral. À réserver aux phrases : entendre un mot isolé hors contexte
   * n'apprend pas grand-chose, et allonge la série pour rien.
   */
  oral?: boolean;
  /**
   * La prononciation. Réservée aux phrases aussi, et seulement à celles qui
   * valent la peine d'être dites — une formule qu'on emploiera vraiment.
   */
  parle?: boolean;
  /** Un cours attaché à la série : conjugaison, point de grammaire, méthode. */
  cours?: LessonDocument;
  cartes: Carte[];
};

/**
 * Une carte donne deux exercices, et jusqu'à quatre.
 *
 *   flashcard    — langue → français : on reconnaît.
 *   traduction   — français → langue : on produit. Le plus exigeant, donc le
 *                  plus utile.
 *   ecoute       — on entend, on écrit. Lots de phrases seulement.
 *   prononciation— on lit à voix haute. Lots de phrases seulement.
 *
 * Les quatre portent des empreintes distinctes : la même carte revient donc
 * sous une autre forme sans qu'on ait l'impression de se répéter.
 */
/**
 * L'accent d'une carte, tiré de son texte.
 *
 * Déterministe : la même carte sonne toujours pareil, mais deux cartes
 * voisines n'ont pas le même accent. Sans cela, tout un module se lirait
 * d'une seule voix, et l'oreille n'apprendrait qu'une prononciation —
 * exactement ce qu'on cherche à éviter.
 */
function accentPour(texte: string, accents: string[]): string {
  if (accents.length <= 1) return accents[0] ?? "";
  let h = 2166136261;
  for (let i = 0; i < texte.length; i++) {
    h = Math.imul(h ^ texte.charCodeAt(i), 16777619) >>> 0;
  }
  return accents[h % accents.length]!;
}

export function cartesEnExercices(
  lot: LotCartes,
  langueOuAccents: string | string[],
  batch: string
): SeedExercise[] {
  const accents = Array.isArray(langueOuAccents) ? langueOuAccents : [langueOuAccents];
  const exercices: SeedExercise[] = [];

  /*
   * Les chapitres de PRONONCIATION ne donnent que leurs exercices oraux.
   *
   * Leurs cartes portent sur des SONS — ship contre sheep, le TH, l'accent de
   * mot. Les reconnaître de l'anglais vers le français, ou les écrire du
   * français vers l'anglais, ne fait rien travailler de ce que le chapitre
   * annonce : on peut écrire « think » sans savoir le dire. Ces séries
   * comptaient pourtant dix cartes mémoire et dix traductions écrites pour dix
   * écoutes et dix prononciations — trois quarts de ce qu'on ouvrait sous le
   * titre « Le TH et ses deux sons » ne concernait pas le TH.
   *
   * Partout ailleurs, les quatre formes gardent leur sens : une carte de
   * vocabulaire se reconnaît, se produit, s'entend et se dit.
   */
  const oralSeul = lot.category === "Prononciation";

  for (const carte of lot.cartes) {
    const difficulty = carte.difficulte ?? lot.difficulty;
    const langue = accentPour(carte.etranger, accents);

    const versFrancais: CartePayload = {
      recto: carte.etranger,
      verso: carte.francais,
      variantes: carte.aussi,
      note: carte.note,
      langue,
    };
    if (!oralSeul) exercices.push({ kind: flashcard.id, payload: versFrancais, difficulty, batch });

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
    if (!oralSeul) exercices.push({ kind: traduction.id, payload: versLangue, difficulty, batch });

    // L'écoute et la prononciation demandent de restituer la langue étudiée :
    // leurs variantes acceptées sont celles de cette langue.
    const enLangue: CartePayload = { ...versFrancais, variantes: carte.aussiEtranger };

    if (lot.oral) {
      exercices.push({
        kind: ecoute.id,
        payload: enLangue,
        difficulty: Math.min(3, difficulty + 1) as 1 | 2 | 3,
        batch,
      });
    }
    if (lot.parle) {
      exercices.push({ kind: prononciation.id, payload: enLangue, difficulty, batch });
    }
  }
  return exercices;
}

export function lotsEnSkills(
  lots: LotCartes[],
  langueOuAccents: string | string[],
  batch: string
): SeedSkill[] {
  return lots.map((lot) => ({
    slug: lot.slug,
    category: lot.category,
    title: lot.title,
    statement: lot.statement,
    tip: lot.tip,
    difficulty: lot.difficulty,
    level: lot.niveau,
    exercises: cartesEnExercices(lot, langueOuAccents, batch),
    ...(lot.cours ? { lesson: lot.cours } : {}),
  }));
}

/* ─────────────────────────── dictées ─────────────────────────── */

/** Une dictée de langue, telle qu'on l'écrit. */
export type DicteeLangue = {
  texte: string;
  theme: string;
  niveau: Niveau;
  difficulte: 1 | 2 | 3;
  /**
   * L'accent. Varier d'une dictée à l'autre est le seul moyen d'habituer
   * l'oreille : un apprenant qui n'a entendu qu'un accent ne comprend que lui.
   */
  accent: string;
  /** Séries dont la dictée met les points en pratique. */
  series?: string[];
};

export function dicteesEnSeed(dictees: DicteeLangue[]): SeedDictationLike[] {
  return dictees.map((d) => ({
    text: d.texte,
    theme: d.theme,
    difficulty: d.difficulte,
    level: d.niveau,
    voice: d.accent,
    skillSlugs: d.series ?? [],
  }));
}

/* ─────────────────────────── le module ─────────────────────────── */

/**
 * Les signes diacritiques que la langue étudiée n'emploie pas.
 *
 * `aussi` liste des variantes FRANÇAISES, `aussiEtranger` des variantes dans
 * la langue étudiée. Les confondre fait accepter « Bien à vous » comme
 * traduction anglaise de « Kind regards » — une faute déjà commise ici, et
 * que rien ne rattrapait : la carte reste bien formée, le validateur passe,
 * et c'est l'apprenant qui découvre le problème.
 *
 * Le contrôle est un signal, pas une preuve : un accent français dans une
 * variante anglaise est presque toujours du français mal rangé. Il ne voit
 * rien d'une variante sans accent — d'où l'avertissement plutôt que l'erreur.
 * L'espagnol garde ses propres accents (á é í ó ú ñ ü) : seuls ceux qu'il
 * n'écrit jamais sont retenus.
 */
const SIGNES_ABSENTS: Record<string, RegExp> = {
  en: /[àâäèéêëîïôöùûüçœ]/,
  es: /[àâäèêëîïôöùûçœ]/,
};

export type OptionsLangue = {
  id: string;
  name: string;
  tagline: string;
  position: number;
  /** Étiquette de voix par défaut : "en-GB", "es-ES". */
  langue: string;
  /** Les accents disponibles, pour l'écoute et les dictées. */
  accents: { etiquette: string; nom: string }[];
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
      catalogue: "Le programme",
      ...o.vocabulaire,
    },

    kinds: [flashcard, traduction, ecoute, prononciation],
    categories: CATEGORIES_LANGUE,

    validateSkill(skill): ModuleFinding[] {
      const anomalies: ModuleFinding[] = [];
      const payloads = skill.exercises.map((e) => e.payload as CartePayload);

      if (!skill.level) {
        anomalies.push({
          severity: "error",
          code: "sans-niveau",
          message: "aucun niveau du cadre européen : impossible de situer l'apprenant",
        });
      }

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

      /* ── ce qui n'était écrit que dans la consigne ──
         Trois règles d'écriture tenaient dans le prompt et dans la tête de qui
         écrivait : dix cartes par série, la prononciation réservée aux phrases,
         l'écoute jamais sur un mot nu. Rien ne les vérifiait, donc rien
         n'empêchait de les enfreindre. Elles descendent ici. */

      /*
       * Combien de cartes cette série couvre-t-elle ?
       *
       * Le compte se faisait sur le nombre de cartes mémoire, une par carte —
       * ce qui était vrai tant que toutes les séries en produisaient une. Les
       * chapitres de prononciation n'en produisent plus : leurs cartes portent
       * sur des sons, et se reconnaître de l'anglais au français n'y apprend
       * rien. Le contrôle annonçait alors « 0 carte » sur des séries qui en
       * comptent dix, et bloquait le seed.
       *
       * On compte donc les cartes elles-mêmes : la phrase en langue étrangère
       * identifie la carte, quelle que soit la forme sous laquelle elle est
       * servie. Elle est au recto partout, sauf en traduction — où l'on part
       * du français —, et le verso la porte alors.
       */
      const nbCartes = new Set(
        skill.exercises.map((e) => {
          const p = e.payload as CartePayload;
          return (e.kind === traduction.id ? p.verso : p.recto).trim().toLowerCase();
        })
      ).size;
      if (nbCartes < 5) {
        anomalies.push({
          severity: "error",
          code: "serie-trop-courte",
          message: `${nbCartes} carte(s) : une série en demande cinq au minimum, dix en principe`,
        });
      } else if (nbCartes !== 10) {
        anomalies.push({
          severity: "warn",
          code: "serie-hors-gabarit",
          message: `${nbCartes} cartes : le gabarit est de dix`,
        });
      }

      const mots = (texte: string) => texte.trim().split(/\s+/).filter(Boolean).length;

      /* Se faire noter sur la prononciation d'un mot isolé n'apprend rien : ni
         liaison, ni rythme, ni accent de phrase. Au-delà d'une quinzaine de
         mots, la reconnaissance vocale décroche et sanctionne le souffle. */
      for (const e of skill.exercises) {
        if (e.kind !== prononciation.id) continue;
        const n = mots((e.payload as CartePayload).recto);
        if (n < 2 || n > 14) {
          anomalies.push({
            severity: "error",
            code: "prononciation-hors-mesure",
            message: `${n} mot(s) à prononcer : la prononciation ne vaut qu'entre 2 et 14`,
            exercise: (e.payload as CartePayload).recto,
          });
        }
      }

      /* Un mot entendu hors contexte ne se replace pas, et la dictée d'un mot
         nu se joue à pile ou face sur l'orthographe. */
      for (const e of skill.exercises) {
        if (e.kind !== ecoute.id) continue;
        const recto = (e.payload as CartePayload).recto;
        if (mots(recto) < 2) {
          anomalies.push({
            severity: "error",
            code: "ecoute-mot-isole",
            message: "l'écoute ne se pose que sur des phrases, jamais sur un mot isolé",
            exercise: recto,
          });
        }
      }

      /* Les variantes acceptées dans le sens français → langue étudiée : elles
         doivent être dans cette langue, pas dans la nôtre. */
      const absents = SIGNES_ABSENTS[o.langue.split("-")[0]!.toLowerCase()];
      if (absents) {
        for (const e of skill.exercises) {
          if (e.kind === flashcard.id) continue; // là, les variantes SONT françaises
          for (const v of (e.payload as CartePayload).variantes ?? []) {
            if (absents.test(v)) {
              anomalies.push({
                severity: "warn",
                code: "variante-francaise",
                message: `« ${v} » porte un accent que ${o.name.toLowerCase()} n'écrit pas : variante française rangée dans aussiEtranger ?`,
                exercise: (e.payload as CartePayload).recto,
              });
            }
          }
        }
      }

      // Une série qui n'explique rien fait mémoriser sans faire comprendre.
      // Tolérable pour du vocabulaire nu, pas pour un piège ou une règle.
      const exigeantes = ["Faux amis", "Grammaire en contexte", "Pièges du français", "Conjugaison"];
      if (exigeantes.includes(skill.category) && !payloads.some((p) => p.note?.trim())) {
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
