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
    return anomalies;
  },
};
