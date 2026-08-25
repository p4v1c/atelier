/**
 * Module Culture générale.
 *
 * Repris du cahier de culture G : 14 sujets, 2 002 questions à choix multiple
 * et 238 leçons. Ce fichier ne porte que la déclaration ; le contenu est dans
 * contenu.ts, que le navigateur n'importe jamais.
 *
 * Deux formes de compétence y cohabitent, et c'est voulu :
 *   · une leçon, avec son cours et le quiz qui la conclut ;
 *   · une série de questions libres par sujet et par niveau, pour les
 *     questions qui ne dépendent d'aucune leçon.
 * Le moteur ne fait pas la différence : dans les deux cas, un palier et une
 * échéance.
 */
import { normalizeForDedupe } from "../../lib/tokenize";
import { qcm, type QcmPayload } from "../kinds/qcm";
import type { LearningModule, ModuleFinding } from "../types";

/** Les 14 sujets, dans l'ordre d'affichage du cahier d'origine. */
export const SUJETS: { slug: string; name: string; emoji: string }[] = [
  { slug: "histoire-france", name: "Histoire de France", emoji: "🇫🇷" },
  { slug: "histoire-monde", name: "Histoire du monde", emoji: "🌍" },
  { slug: "geographie", name: "Géographie", emoji: "🗺️" },
  { slug: "institutions-economie", name: "Institutions & Économie", emoji: "🏛️" },
  { slug: "litterature", name: "Littérature", emoji: "📚" },
  { slug: "langue-francaise", name: "Langue française", emoji: "✒️" },
  { slug: "arts-musique", name: "Arts & Musique", emoji: "🎨" },
  { slug: "cinema-medias", name: "Cinéma & Médias", emoji: "🎬" },
  { slug: "mythologie-religions", name: "Mythologie & Religions", emoji: "⚡" },
  { slug: "sciences-vie", name: "Sciences de la vie & Terre", emoji: "🌱" },
  { slug: "physique-chimie", name: "Physique & Chimie", emoji: "⚗️" },
  { slug: "sciences-tech", name: "Inventions & Technologie", emoji: "💡" },
  { slug: "gastronomie", name: "Gastronomie & Art de vivre", emoji: "🍷" },
  { slug: "sport", name: "Sport", emoji: "🏅" },
];

export const cultureGenerale: LearningModule = {
  id: "culture-g",
  name: "Culture générale",
  tagline: "Histoire, sciences, arts — 238 leçons et leurs quiz",
  position: 2,

  vocabulaire: {
    skill: "notion",
    skillPluriel: "notions",
    exercise: "question",
    exercisePluriel: "questions",
    catalogue: "Les notions",
  },

  kinds: [qcm],
  categories: SUJETS.map((s) => ({ slug: s.slug, name: s.name })),

  validateSkill(skill): ModuleFinding[] {
    const anomalies: ModuleFinding[] = [];
    const payloads = skill.exercises.map((e) => e.payload as QcmPayload);

    // Toutes les bonnes réponses au même rang : on apprendrait la position.
    // L'écran mélange à l'affichage, mais un contenu bâti ainsi reste suspect —
    // c'est presque toujours le signe d'un import mal fait.
    const rangs = payloads.map((p) => p.answerIndex);
    if (rangs.length >= 4 && new Set(rangs).size === 1) {
      anomalies.push({
        severity: "warn",
        code: "same-answer-index",
        message: `les ${rangs.length} questions ont leur bonne réponse au rang ${rangs[0]}`,
      });
    }

    // Une explication est ce qui distingue une révision d'un jeu de hasard.
    const sans = payloads.filter((p) => !p.explanation?.trim()).length;
    if (sans > 0) {
      anomalies.push({
        severity: "warn",
        code: "no-explanation",
        message: `${sans} question(s) sans explication`,
      });
    }

    /*
     * Les trois façons de répondre juste sans savoir.
     *
     * Un audit de tout le contenu en a trouvé cinq. Deux relevaient du code et
     * sont réglées : la bonne réponse toujours au même rang, corrigée par
     * `kinds/melange`, et l'astuce des leçons héritées qui récitait les titres
     * de leurs sections. Les trois qui suivent sont dans la rédaction, se
     * comptent, et n'avaient aucun garde-fou.
     *
     * Ces contrôles avertissent, ils ne bloquent pas : le contenu existant en
     * est truffé, et refuser le seed le rendrait injouable du jour au
     * lendemain. L'avertissement est là pour que le compteur descende, et pour
     * qu'une question neuve ne l'aggrave pas.
     */
    const mots = (t: string) => normalizeForDedupe(t);
    const SEUIL_FUITE = 7;

    // 1. La bonne réponse est la plus longue. Sur les questions écrites à la
    //    main, cocher la plus longue donnait 76 % de réussite — le hasard en
    //    donne 25. On écrit la vraie réponse, complète et précise, puis on
    //    bâcle trois leurres : c'est le geste qu'il faut désapprendre.
    const plusLongues = payloads.filter((p) => {
      const l = p.choices.map((c) => c.length);
      const max = Math.max(...l);
      return l[p.answerIndex] === max && l.filter((x) => x === max).length === 1;
    }).length;
    if (payloads.length >= 5 && plusLongues / payloads.length > 0.6) {
      anomalies.push({
        severity: "warn",
        code: "reponse-la-plus-longue",
        message: `la bonne réponse est la plus longue dans ${plusLongues} des ${payloads.length} questions : les leurres ne font pas le poids`,
      });
    }

    // Le plancher a d'abord été fixé à douze caractères, ce qui laissait
    // passer les réponses courtes — et ce sont les plus faciles à recopier
    // sans y penser : « L'Odyssée », « Le Nil », « Pixar ». Sept caractères
    // attrapent celles-là sans se déclencher sur « Zéro » ou « En 1789 ».
    // 2. L'astuce de la notion donne la réponse d'une de ses questions. Elle
    //    s'affiche sur la fiche du catalogue, donc avant toute question.
    const astuce = mots(skill.tip ?? "");
    const trahies = astuce
      ? payloads.filter((p) => {
          const bonne = mots(p.choices[p.answerIndex] ?? "");
          return bonne.length >= SEUIL_FUITE && astuce.includes(bonne);
        }).length
      : 0;
    if (trahies > 0) {
      anomalies.push({
        severity: "warn",
        code: "astuce-qui-repond",
        message: `l'astuce donne la réponse de ${trahies} question(s) de cette notion`,
      });
    }

    // 3. L'explication d'une question donne la réponse d'une AUTRE question de
    //    la même notion. Les fusions y sont pour beaucoup : elles mettent côte
    //    à côte des questions écrites séparément.
    let croisees = 0;
    payloads.forEach((p, i) => {
      const explication = mots(p.explanation ?? "");
      if (!explication) return;
      payloads.forEach((autre, j) => {
        if (i === j) return;
        const bonne = mots(autre.choices[autre.answerIndex] ?? "");
        if (bonne.length >= SEUIL_FUITE && explication.includes(bonne)) croisees++;
      });
    });
    if (croisees > 0) {
      anomalies.push({
        severity: "warn",
        code: "explication-qui-repond-ailleurs",
        message: `${croisees} explication(s) donnent la réponse d'une autre question de la même notion`,
      });
    }

    return anomalies;
  },
};
