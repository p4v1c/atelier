/**
 * Modèle de contenu partagé par le validateur et le seed.
 *
 * Un lot de contenu (legacy ou batch-NNN) est un tableau de `SeedRule`.
 * Les phrases y sont au FORMAT D'IMPORT (crochets) ; la conversion vers le
 * format de stockage passe par src/lib/tokenize.ts, jamais autrement.
 */

export type ContentStatus = "active" | "draft" | "disputed";

export type SeedSentence = {
  /** Format d'import : « Il commence [a] comprendre. » — crochets autour du mot fautif. */
  marked: string;
  /** Forme correcte attendue ; null si et seulement si la phrase est correcte. */
  fix: string | null;
  difficulty?: 1 | 2 | 3;
  status?: ContentStatus;
  /** Lot d'origine de la phrase, quand elle est ajoutée à une règle plus ancienne. */
  batch?: string;
};

/**
 * Étape C — densification : des phrases ajoutées à une règle qui existe déjà.
 *
 * La règle n'est pas retouchée (ni son énoncé, ni son astuce, ni sa
 * difficulté) : on ne fait qu'allonger sa réserve de phrases, pour qu'elle ne
 * se récite plus par cœur au bout de trois semaines.
 */
export type SentenceAddition = {
  ruleSlug: string;
  sentences: SeedSentence[];
};

export type SeedRule = {
  slug: string;
  category: string;
  title: string;
  /** Énoncé de la règle, HTML léger : <b> uniquement. */
  statement: string;
  tip: string;
  difficulty: 1 | 2 | 3;
  status?: ContentStatus;
  sentences: SeedSentence[];
};

export type SeedDictation = {
  text: string;
  theme: string;
  difficulty: 1 | 2 | 3;
  ruleSlugs: string[];
  status?: ContentStatus;
};

export type ContentBatch = {
  /** Identifiant du lot, repris dans Rule.batch : "legacy", "batch-001"… */
  id: string;
  rules: SeedRule[];
  dictations?: SeedDictation[];
  /** Phrases ajoutées à des règles définies dans un autre lot. */
  additions?: SentenceAddition[];
};

/**
 * Replie les `additions` de tous les lots dans les règles qu'elles visent.
 *
 * Le validateur comme le seed travaillent sur le résultat : une règle y apparaît
 * une seule fois, avec toutes ses phrases, d'où qu'elles viennent. Une addition
 * qui vise une règle inexistante est une erreur franche, pas un silence.
 */
export function resolveBatches(batches: ContentBatch[]): ContentBatch[] {
  const ruleBySlug = new Map<string, SeedRule>();
  for (const batch of batches) {
    for (const rule of batch.rules) ruleBySlug.set(rule.slug, rule);
  }

  const orphans: string[] = [];
  for (const batch of batches) {
    for (const addition of batch.additions ?? []) {
      const rule = ruleBySlug.get(addition.ruleSlug);
      if (!rule) {
        orphans.push(`${batch.id} → ${addition.ruleSlug}`);
        continue;
      }
      rule.sentences = [
        ...rule.sentences,
        ...addition.sentences.map((s) => ({ ...s, batch: s.batch ?? batch.id })),
      ];
    }
  }
  if (orphans.length > 0) {
    throw new Error(`Phrases ajoutées à des règles inconnues :\n  ${orphans.join("\n  ")}`);
  }

  return batches.map((b) => ({ ...b, additions: undefined }));
}

/** Catégories, dans l'ordre d'affichage. Les cinq premières existent déjà. */
export const CATEGORIES: { slug: string; name: string }[] = [
  { slug: "homophones", name: "Homophones" },
  { slug: "accords", name: "Accords" },
  { slug: "conjugaison", name: "Conjugaison" },
  { slug: "orthographe-usage", name: "Orthographe d'usage" },
  { slug: "vocabulaire", name: "Vocabulaire" },
  { slug: "ponctuation", name: "Ponctuation" },
  { slug: "typographie", name: "Typographie" },
  { slug: "registre-style", name: "Registre et style" },
  { slug: "ecrits-professionnels", name: "Écrits professionnels" },
  { slug: "cas-discutes", name: "Cas discutés" },
];

export const CATEGORY_BY_NAME = new Map(CATEGORIES.map((c) => [c.name, c]));

/** Les règles de cette catégorie ne comptent jamais comme des fautes. */
export const DISPUTED_CATEGORY = "Cas discutés";
