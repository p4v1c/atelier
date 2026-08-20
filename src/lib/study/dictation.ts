/**
 * Correction des dictées, mot à mot.
 *
 * Reprend la normalisation du fichier d'origine : apostrophes unifiées,
 * guillemets retirés, ponctuation détachée des mots. La comparaison ignore la
 * casse mais PAS les accents — c'est précisément ce que la dictée travaille.
 */

export function normalizeDictationText(text: string): string {
  return text
    .replace(/[’´]/g, "'")
    .replace(/[«»"]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function dictationWords(text: string): string[] {
  return normalizeDictationText(text)
    .split(" ")
    .map((w) => w.replace(/^[.,;:!?()]+|[.,;:!?()]+$/g, ""))
    .filter(Boolean);
}

export type WordVerdict =
  | { status: "ok"; expected: string }
  | { status: "wrong"; expected: string; given: string }
  | { status: "missing"; expected: string }
  /** Mot écrit alors qu'il ne figure pas dans le texte. */
  | { status: "extra"; given: string };

export type DictationResult = {
  score: number;
  correctWords: number;
  totalWords: number;
  words: WordVerdict[];
  /** Mots écrits en trop, repris à part pour le compte rendu. */
  extra: string[];
};

/**
 * Plus longue sous-suite commune entre les mots attendus et les mots écrits.
 *
 * La comparaison position par position ne tient pas sur une dictée de soixante
 * mots : un seul mot oublié décale tout ce qui suit et fait tomber le score à
 * zéro alors que la copie est presque juste. L'alignement rend au contraire un
 * relevé fidèle — ce mot-ci manque, celui-là est en trop, le reste est bon.
 *
 * Coût quadratique, négligeable à cette échelle : cent mots font dix mille
 * cases.
 */
function alignement(attendus: string[], donnes: string[]): number[][] {
  const table: number[][] = Array.from({ length: attendus.length + 1 }, () =>
    new Array<number>(donnes.length + 1).fill(0)
  );
  for (let i = attendus.length - 1; i >= 0; i--) {
    for (let j = donnes.length - 1; j >= 0; j--) {
      table[i]![j]! =
        attendus[i]!.toLowerCase() === donnes[j]!.toLowerCase()
          ? table[i + 1]![j + 1]! + 1
          : Math.max(table[i + 1]![j]!, table[i]![j + 1]!);
    }
  }
  return table;
}

export function gradeDictation(expectedText: string, givenText: string): DictationResult {
  const expected = dictationWords(expectedText);
  const given = dictationWords(givenText);

  const table = alignement(expected, given);
  const words: WordVerdict[] = [];
  const extra: string[] = [];
  let correctWords = 0;
  let i = 0;
  let j = 0;

  while (i < expected.length && j < given.length) {
    if (expected[i]!.toLowerCase() === given[j]!.toLowerCase()) {
      words.push({ status: "ok", expected: expected[i]! });
      correctWords++;
      i++;
      j++;
      continue;
    }
    // Un mot manquant et un mot en trop au même endroit : c'est une faute
    // d'orthographe, pas un décalage. On les apparie pour l'afficher ainsi.
    const sautAttendu = table[i + 1]![j]!;
    const sautDonne = table[i]![j + 1]!;
    if (sautAttendu === sautDonne) {
      words.push({ status: "wrong", expected: expected[i]!, given: given[j]! });
      i++;
      j++;
    } else if (sautAttendu > sautDonne) {
      words.push({ status: "missing", expected: expected[i]! });
      i++;
    } else {
      words.push({ status: "extra", given: given[j]! });
      extra.push(given[j]!);
      j++;
    }
  }
  while (i < expected.length) words.push({ status: "missing", expected: expected[i++]! });
  while (j < given.length) {
    words.push({ status: "extra", given: given[j]! });
    extra.push(given[j++]!);
  }

  return {
    score: expected.length === 0 ? 0 : Math.round((correctWords / expected.length) * 100),
    correctWords,
    totalWords: expected.length,
    words,
    extra,
  };
}
