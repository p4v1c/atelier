/**
 * Métadonnées des 24 dictées d'origine.
 *
 * Le fichier HTML ne stockait que le texte : ni thème, ni difficulté, ni règles
 * associées. Ces trois champs sont donc rédigés ici, texte par texte, dans
 * l'ordre exact du tableau DICTEES. Le texte lui-même n'est pas touché : il
 * vient de legacy.json et est apparié par position.
 */

export type DictationMeta = {
  /** Position dans le tableau DICTEES d'origine — la clé d'appariement. */
  index: number;
  theme: string;
  difficulty: 1 | 2 | 3;
  /** Slugs des règles travaillées par la dictée. Vérifiés au seed. */
  ruleSlugs: string[];
};

export const DICTATION_META: DictationMeta[] = [
  { index: 0,  theme: "Vie scolaire",          difficulty: 2, ruleSlugs: ["pp-avoir"] },
  { index: 1,  theme: "Travail",               difficulty: 2, ruleSlugs: ["quel-que", "parmi-malgré"] },
  { index: 2,  theme: "Écrits professionnels", difficulty: 2, ruleSlugs: ["savoir-gré", "ces-ses", "futur-cond"] },
  { index: 3,  theme: "Bureau",                difficulty: 2, ruleSlugs: ["pronominaux", "cedille", "ces-ses"] },
  { index: 4,  theme: "Vie quotidienne",       difficulty: 2, ruleSlugs: ["voire", "appeler", "tout-le-monde", "pp-impersonnel"] },
  { index: 5,  theme: "Discussion",            difficulty: 2, ruleSlugs: ["ces-ses", "la-là-la", "leur", "mais-mes"] },
  { index: 6,  theme: "Vie quotidienne",       difficulty: 1, ruleSlugs: ["on-ont", "leur", "é-er"] },
  { index: 7,  theme: "Maison",                difficulty: 2, ruleSlugs: ["pp-avoir", "on-ont"] },
  { index: 8,  theme: "Travail",               difficulty: 2, ruleSlugs: ["subj-bienque", "a-à", "son-sont"] },
  { index: 9,  theme: "Discussion",            difficulty: 2, ruleSlugs: ["quand-quant", "aie-ait", "tout-tous"] },
  { index: 10, theme: "Bureau",                difficulty: 3, ruleSlugs: ["rendu-compte", "son-sont"] },
  { index: 11, theme: "Vie scolaire",          difficulty: 3, ruleSlugs: ["pronominaux", "ce-se"] },
  { index: 12, theme: "Récit",                 difficulty: 3, ruleSlugs: ["sans-sen", "pronominaux", "tout-adverbe"] },
  { index: 13, theme: "Travail",               difficulty: 1, ruleSlugs: ["verbes-cer", "cedille", "a-à", "on-ont", "pourquoi"] },
  { index: 14, theme: "Récit",                 difficulty: 2, ruleSlugs: ["si-conditionnel", "a-à"] },
  { index: 15, theme: "Écrits professionnels", difficulty: 3, ruleSlugs: ["ci-joint", "pp-avoir", "ez-er"] },
  { index: 16, theme: "Vie scolaire",          difficulty: 2, ruleSlugs: ["la-plupart", "on-ont", "parmi-malgré"] },
  { index: 17, theme: "Nombres et mesures",    difficulty: 3, ruleSlugs: ["vingt-cent", "hyphen-nombres", "a-à"] },
  { index: 18, theme: "Récit",                 difficulty: 3, ruleSlugs: ["nu-demi"] },
  { index: 19, theme: "Vie quotidienne",       difficulty: 3, ruleSlugs: ["fait-infinitif", "ce-se"] },
  { index: 20, theme: "Discussion",            difficulty: 3, ruleSlugs: ["cest-moi-qui", "quoi-que", "cest-sest"] },
  { index: 21, theme: "Vie quotidienne",       difficulty: 2, ruleSlugs: ["pluriel-al", "et-est"] },
  { index: 22, theme: "Travail",               difficulty: 2, ruleSlugs: ["subj-falloir", "la-là-la", "verbes-cer"] },
  { index: 23, theme: "Bureau",                difficulty: 3, ruleSlugs: ["aucun", "circonflexe"] },
];
