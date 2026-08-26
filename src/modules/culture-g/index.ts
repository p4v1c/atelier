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
     * Ces contrôles avertissaient sans bloquer, le temps que le compteur
     * descende : le contenu en était truffé, et refuser le seed l'aurait rendu
     * injouable du jour au lendemain. Le chantier est fait — la première
     * astuce est retombée de 66 % à 22 % des questions, le hasard étant à 25 %
     * — et le premier contrôle bloque désormais, pour que l'acquis ne se
     * défasse pas au prochain lot écrit.
     */
    const mots = (t: string) => normalizeForDedupe(t);
    const SEUIL_FUITE = 7;

    // 1. La bonne réponse est la plus longue. Sur les questions écrites à la
    //    main, cocher la plus longue donnait 76 % de réussite — le hasard en
    //    donne 25. On écrit la vraie réponse, complète et précise, puis on
    //    bâcle trois leurres : c'est le geste qu'il faut désapprendre.
    //
    //    Deux seuils, parce que le défaut se mesure sur une notion entière et
    //    non sur une question : au-delà de la moitié il bloque, car aucune
    //    notion du corpus n'y est plus ; à 40 % il avertit, pour qu'une dérive
    //    se voie avant d'être installée.
    const plusLongues = payloads.filter((p) => {
      const l = p.choices.map((c) => c.length);
      const max = Math.max(...l);
      return l[p.answerIndex] === max && l.filter((x) => x === max).length === 1;
    }).length;
    if (payloads.length >= 5 && plusLongues / payloads.length > 0.5) {
      anomalies.push({
        severity: "error",
        code: "reponse-la-plus-longue",
        message: `la bonne réponse est la plus longue dans ${plusLongues} des ${payloads.length} questions : les leurres ne font pas le poids`,
      });
    } else if (payloads.length >= 5 && plusLongues / payloads.length > 0.4) {
      anomalies.push({
        severity: "warn",
        code: "reponse-la-plus-longue",
        message: `la bonne réponse est la plus longue dans ${plusLongues} des ${payloads.length} questions : les leurres s'essoufflent`,
      });
    }

    // 1 bis. Le piège inverse, découvert en réparant le premier. Allonger un
    //    seul leurre au-delà de la bonne réponse ne supprime pas l'astuce : il
    //    la décale d'un rang, et « cocher la deuxième plus longue » marche
    //    aussi bien. Un domaine entier a dû être repris pour ça — 36 % de ses
    //    questions étaient lisibles au rang 2 après un premier passage jugé
    //    terminé. Le remède tient en un mot : allonger deux ou trois leurres,
    //    jamais un seul.
    //
    //    On ne compte que les cas nettement lisibles, quatre caractères
    //    d'écart de part et d'autre : sans cette marge, le bruit des questions
    //    dont les propositions ont naturellement des longueurs voisines noierait
    //    le signal.
    const rangDeux = payloads.filter((p) => {
      const bonne = p.choices[p.answerIndex]?.length ?? 0;
      const autres = p.choices
        .filter((_, i) => i !== p.answerIndex)
        .map((c) => c.length)
        .sort((x, y) => y - x);
      return autres[0] !== undefined && autres[0] >= bonne + 4 && bonne >= (autres[1] ?? 0) + 4;
    }).length;
    if (payloads.length >= 5 && rangDeux / payloads.length > 0.5) {
      anomalies.push({
        severity: "error",
        code: "reponse-deuxieme-plus-longue",
        message: `la bonne réponse est nettement la deuxième plus longue dans ${rangDeux} des ${payloads.length} questions : l'astuce a changé de rang, pas disparu`,
      });
    } else if (payloads.length >= 5 && rangDeux / payloads.length > 0.4) {
      anomalies.push({
        severity: "warn",
        code: "reponse-deuxieme-plus-longue",
        message: `la bonne réponse est nettement la deuxième plus longue dans ${rangDeux} des ${payloads.length} questions : l'astuce se déplace au rang 2`,
      });
    }

    // 1 ter. La minuscule initiale. Une passe automatique de réparation des
    //    élisions avait laissé cent cinquante-cinq propositions commençant par
    //    une minuscule au milieu de propositions capitalisées — « l'Alsace »
    //    face à « La Bretagne ». Ce n'était pas qu'une inélégance : la
    //    minuscule tombait sur la bonne réponse dans 43 % des cas, quand le
    //    hasard en donne 25, et elle se repère sans rien lire.
    //
    //    Le contrôle bloque, parce que rien ne le justifie jamais : c'est une
    //    coquille, pas un arbitrage de rédaction.
    const bancales = payloads.filter((p) => {
      const capitales = p.choices.filter((c) => c.length > 0 && c[0] !== c[0]!.toLowerCase());
      if (capitales.length < 2) return false;
      return p.choices.some((c) => c.length > 0 && c[0] !== c[0]!.toUpperCase());
    }).length;
    if (bancales > 0) {
      anomalies.push({
        severity: "error",
        code: "proposition-en-minuscule",
        message: `${bancales} question(s) mêlent des propositions capitalisées et une proposition en minuscule : la minuscule se repère sans lire`,
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
