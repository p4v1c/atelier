/**
 * Le contenu du module Culture générale.
 *
 * Il lit les fichiers du cahier d'origine tels quels et les traduit vers le
 * format du moteur. Rien n'est réécrit à la main : remettre le contenu à jour
 * se fait en recopiant les fichiers depuis le dépôt d'origine.
 *
 * Deux formes de compétence en sortent :
 *   · une par leçon — son cours, et le quiz qui la conclut ;
 *   · une par sujet et par niveau — les questions libres, qui ne dépendent
 *     d'aucune leçon.
 */
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { qcm, type QcmPayload } from "../kinds/qcm";
import type { LessonDocument, LessonVisuel, ModuleBatch, SeedExercise, SeedSkill } from "../types";
import { SUJETS } from "./index";
import { CG_NEUF } from "../../../prisma/seed/culture-g";

/**
 * Le contenu du cahier d'origine, tel qu'il est arrivé par la fusion.
 *
 * On y lit directement plutôt que d'en tenir une copie : douze mégaoctets
 * entretenus à deux endroits finissent toujours par diverger, et les scripts
 * Python du cahier continuent de fonctionner sur ces mêmes fichiers.
 */
const RACINE = join(process.cwd(), "heritage", "culture-g", "data");

/* ───────────────────────── formes du cahier d'origine ───────────────────── */

type QuestionSource = {
  q: string;
  choix: string[];
  bonne: number;
  difficulte: number;
  explication?: string;
};

type VisuelSource = Record<string, unknown> & { type: string };

type LeconSource = {
  titre: string;
  sections: { titre: string; texte: string; visuel?: VisuelSource; visuels?: VisuelSource[] }[];
  quiz?: QuestionSource[];
  sources?: { titre: string; url: string }[];
};

/**
 * Un fichier de matière.
 *
 * Il porte les questions libres ET trois leçons, écrites avant que les autres
 * ne soient sorties dans lecons/. Les oublier coûtait 42 leçons et 210
 * questions — c'est exactement ce qui est arrivé au premier import.
 */
type SujetSource = {
  id: string;
  nom: string;
  questions?: QuestionSource[];
  cours?: LeconSource[];
};

function lireJson<T>(chemin: string): T {
  return JSON.parse(readFileSync(chemin, "utf8")) as T;
}

/* ─────────────────────────────── visuels ─────────────────────────────── */

/** Les images, en data-URI, par slug. Chargées une fois. */
let imagesParSlug: Map<string, string> | null = null;
function image(slug: string): string | null {
  if (imagesParSlug === null) {
    imagesParSlug = new Map();
    const dossier = join(RACINE, "images");
    if (existsSync(dossier)) {
      for (const f of readdirSync(dossier).filter((f) => f.endsWith(".json"))) {
        const v = lireJson<{ slug: string; data: string }>(join(dossier, f));
        if (v.slug && v.data) imagesParSlug.set(v.slug, v.data);
      }
    }
  }
  return imagesParSlug.get(slug) ?? null;
}

/**
 * Traduit un visuel du cahier vers la forme que sait afficher l'écran.
 *
 * Une image dont le fichier manque est écartée plutôt que rendue cassée : mieux
 * vaut une section sans illustration qu'un cadre vide.
 */
function convertirVisuel(v: VisuelSource): LessonVisuel | null {
  switch (v.type) {
    case "frise":
    case "chiffres":
    case "etapes":
    case "tableau":
    case "barres":
    case "comparaison":
      return v as unknown as LessonVisuel;
    case "image": {
      const src = image(String(v.image ?? ""));
      if (!src) return null;
      return {
        type: "image",
        src,
        legende: typeof v.legende === "string" ? v.legende : undefined,
        alt: typeof v.alt === "string" ? v.alt : undefined,
      };
    }
    default:
      return null;
  }
}

/* ──────────────────────────── mise en forme ──────────────────────────── */

/**
 * Les premières phrases d'un texte : de quoi présenter sans tout dire.
 *
 * Cette accroche s'affiche dans le panneau de correction, sous le titre. Elle
 * est coupée sur un espace et non au caractère près : « les Parisii, l… » se lit
 * mal, « les Parisii… » se lit bien.
 */
function accroche(texte: string, maximum = 260): string {
  const phrases = texte.match(/[^.!?]+[.!?]+/g) ?? [texte];
  let debut = "";
  for (const phrase of phrases) {
    if (debut && (debut + phrase).trim().length > maximum) break;
    debut = `${debut}${phrase}`;
  }
  debut = debut.trim() || texte.trim();
  if (debut.length <= maximum) return debut;
  const coupe = debut.slice(0, maximum);
  const espace = coupe.lastIndexOf(" ");
  return `${coupe.slice(0, espace > 60 ? espace : maximum).replace(/[,;:\s]+$/, "")}…`;
}

/** Le niveau d'une compétence : la moyenne de ses questions, bornée à 1-3. */
function niveauMoyen(questions: QuestionSource[]): 1 | 2 | 3 {
  if (questions.length === 0) return 2;
  const moyenne = questions.reduce((n, q) => n + (q.difficulte || 2), 0) / questions.length;
  return Math.min(3, Math.max(1, Math.round(moyenne))) as 1 | 2 | 3;
}

/**
 * Un mélange déterministe, tiré du texte de la question.
 *
 * Le cahier d'origine range la bonne réponse en tête deux fois sur trois et
 * mélange à l'affichage. Ça marche tant qu'un seul client lit les données ;
 * ça devient un piège dès qu'un autre les lit sans mélanger — un export, une
 * révision papier, un futur écran. On remet donc l'ordre d'aplomb dans les
 * données elles-mêmes, une bonne fois.
 *
 * Déterministe pour que deux seeds successifs ne réécrivent pas 2 000 lignes.
 */
function melangerDepuis(n: number, graine: string): number[] {
  const rangs = Array.from({ length: n }, (_, i) => i);
  let h = 2166136261;
  for (let i = 0; i < graine.length; i++) {
    h = Math.imul(h ^ graine.charCodeAt(i), 16777619) >>> 0;
  }
  for (let i = rangs.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0;
    const j = h % (i + 1);
    [rangs[i], rangs[j]] = [rangs[j]!, rangs[i]!];
  }
  return rangs;
}

function exercice(q: QuestionSource, batch: string): SeedExercise {
  const ordre = melangerDepuis(q.choix.length, q.q);
  const choices = ordre.map((r) => q.choix[r]!);
  const payload: QcmPayload = {
    question: q.q,
    choices,
    answerIndex: ordre.indexOf(q.bonne),
    explanation: q.explication?.trim() || undefined,
  };
  return {
    kind: qcm.id,
    payload,
    difficulty: Math.min(3, Math.max(1, q.difficulte || 2)) as 1 | 2 | 3,
    batch,
  };
}

/* ────────────────────────────── chargement ────────────────────────────── */

/** Une leçon, d'où qu'elle vienne, traduite en compétence. */
function leconEnSkill(
  source: LeconSource,
  sujet: { slug: string; name: string },
  slug: string,
  batch: string
): SeedSkill | null {
  const quiz = source.quiz ?? [];
  // Une leçon sans quiz n'est pas jouable : elle serait servie en série sans
  // aucune question. On la laisse de côté plutôt que de fabriquer du vide.
  if (quiz.length < 2) return null;

  const sections = (source.sections ?? []).map((s) => {
    const bruts = s.visuel ? [s.visuel] : (s.visuels ?? []);
    const visuels = bruts.map(convertirVisuel).filter((v): v is LessonVisuel => v !== null);
    return { titre: s.titre, texte: s.texte, ...(visuels.length > 0 ? { visuels } : {}) };
  });

  const lesson: LessonDocument = {
    titre: source.titre,
    sections,
    ...(source.sources?.length ? { sources: source.sources } : {}),
  };

  return {
    slug,
    category: sujet.name,
    title: source.titre,
    statement: accroche(sections[0]?.texte ?? source.titre),
    tip: sections.length
      ? `Cette leçon couvre : ${sections.map((s) => s.titre).join(" · ")}`
      : "Lis le cours, puis teste-toi dessus.",
    difficulty: niveauMoyen(quiz),
    exercises: quiz.map((q) => exercice(q, batch)),
    lesson,
  };
}

function chargerLecons(sujet: { slug: string; name: string }): SeedSkill[] {
  const skills: SeedSkill[] = [];
  const vus = new Set<string>();

  // 1. Les trois leçons rangées dans le fichier de matière.
  const fichierSujet = join(RACINE, `${sujet.slug}.json`);
  if (existsSync(fichierSujet)) {
    const source = lireJson<SujetSource>(fichierSujet);
    for (const [i, cours] of (source.cours ?? []).entries()) {
      const skill = leconEnSkill(
        cours,
        sujet,
        `cg-${sujet.slug}-c${String(i + 1).padStart(2, "0")}`,
        `cg-lecons-${sujet.slug}`
      );
      if (skill) {
        skills.push(skill);
        vus.add(cours.titre.trim().toLowerCase());
      }
    }
  }

  // 2. Celles sorties dans lecons/. Une leçon présente aux deux endroits n'est
  //    prise qu'une fois — même règle d'appariement que le build d'origine.
  const dossier = join(RACINE, "lecons", sujet.slug);
  if (existsSync(dossier)) {
    for (const fichier of readdirSync(dossier).filter((f) => f.endsWith(".json")).sort()) {
      const source = lireJson<LeconSource>(join(dossier, fichier));
      if (vus.has(source.titre.trim().toLowerCase())) continue;
      const skill = leconEnSkill(
        source,
        sujet,
        `cg-${sujet.slug}-${fichier.replace(/\.json$/, "")}`,
        `cg-lecons-${sujet.slug}`
      );
      if (skill) skills.push(skill);
    }
  }

  return skills;
}

/**
 * Les questions libres d'un sujet, regroupées par niveau.
 *
 * Elles ne se rattachent à aucune leçon. Les ranger par niveau donne trois
 * compétences par sujet — « Géographie, niveau 1 », etc. C'est une découpe
 * imparfaite, assumée : un palier par sujet entier ne voudrait rien dire, et
 * on ne peut pas deviner à quelle leçon chaque question se rapporte.
 */
function chargerLibres(sujet: { slug: string; name: string }): SeedSkill[] {
  const fichier = join(RACINE, `${sujet.slug}.json`);
  if (!existsSync(fichier)) return [];
  const source = lireJson<SujetSource>(fichier);
  const questions = source.questions ?? [];

  const NIVEAUX: { n: 1 | 2 | 3; nom: string }[] = [
    { n: 1, nom: "premières notions" },
    { n: 2, nom: "pour aller plus loin" },
    { n: 3, nom: "les pointues" },
  ];

  const skills: SeedSkill[] = [];
  for (const niveau of NIVEAUX) {
    const lot = questions.filter(
      (q) => Math.min(3, Math.max(1, q.difficulte || 2)) === niveau.n
    );
    if (lot.length < 2) continue;
    skills.push({
      slug: `cg-libre-${sujet.slug}-${niveau.n}`,
      category: sujet.name,
      title: `${sujet.name} — ${niveau.nom}`,
      statement:
        `Des questions qui balaient tout le sujet, sans leçon préalable. ` +
        `L'explication qui suit chaque réponse tient lieu de cours.`,
      tip: "Si une question te surprend, lis l'explication en entier : c'est là qu'est le vrai contenu.",
      difficulty: niveau.n,
      exercises: lot.map((q) => exercice(q, `cg-libre-${sujet.slug}`)),
    });
  }
  return skills;
}

/** Le texte d'une question, réduit à ce qui permet de reconnaître un jumeau. */
function cleQuestion(payload: unknown): string {
  return qcm.fingerprint(payload as QcmPayload);
}

export function chargerContenuCultureG(): ModuleBatch[] {
  const lecons: SeedSkill[] = [];
  const libres: SeedSkill[] = [];
  for (const sujet of SUJETS) {
    lecons.push(...chargerLecons(sujet));
    libres.push(...chargerLibres(sujet));
  }

  // Quelques questions libres reprennent mot pour mot une question de quiz.
  // La version de la leçon gagne : elle arrive avec son cours et son contexte.
  const vues = new Set(lecons.flatMap((s) => s.exercises.map((e) => cleQuestion(e.payload))));
  for (const skill of libres) {
    skill.exercises = skill.exercises.filter((e) => !vues.has(cleQuestion(e.payload)));
  }

  /* Les notions écrites à la main, qui n'ont pas encore de cours. Elles sont
     dans un lot à part pour qu'on puisse les retrouver d'un coup d'œil —
     c'est un chantier en cours, pas un état définitif. Voir
     prisma/seed/culture-g/RESUME.md. */
  return [
    { id: "cg-lecons", skills: lecons },
    // Un groupe vidé de ses doublons peut tomber sous le minimum jouable.
    { id: "cg-libre", skills: libres.filter((s) => s.exercises.length >= 2) },
    { id: "cg-neuf", skills: CG_NEUF },
  ];
}
