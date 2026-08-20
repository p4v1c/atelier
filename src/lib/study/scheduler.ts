/**
 * Planificateur de répétition espacée.
 *
 * Transcription exacte de la logique du fichier d'origine, à ceci près qu'elle
 * vit désormais côté serveur : le client envoie un identifiant de phrase et un
 * index cliqué, rien d'autre. Il ne peut ni calculer son palier, ni le modifier,
 * ni savoir à l'avance quel mot est fautif.
 *
 * Tout ce fichier est pur : pas de base, pas d'horloge, pas de hasard non
 * injecté. C'est ce qui le rend testable, et c'est ce qui casse en silence si on
 * n'y prend pas garde.
 */

/** Intervalles en NOMBRE DE QUESTIONS RÉPONDUES, pas en jours. Index = palier. */
export const INTERVALS = [3, 12, 35, 90, 220, 500] as const;

export const MIN_BOX = 0;
export const MAX_BOX = 5;
/** À partir de ce palier, la règle est considérée comme maîtrisée. */
export const MASTERY_BOX = 4;
/**
 * Règles inédites introduites au maximum dans une série — plafond SOUPLE.
 *
 * Il tient tant que le reste du vivier suffit à compléter la série. Quand il ne
 * suffit pas, le remplissage final passe outre : sans cela, le premier jour
 * — où tout est inédit — donnerait des séries de six questions au lieu de vingt.
 * C'est le comportement du fichier d'origine, conservé tel quel (voir
 * tests/scheduler.test.ts, « dépasse les six inédites plutôt que… »).
 */
export const MAX_NEW_PER_SERIES = 6;
export const SERIES_SIZES = [10, 20, 35] as const;
export const TEST_SIZE = 25;

/** Bonne réponse : un cran. Mauvaise : deux crans en arrière. */
export function nextBox(box: number, correct: boolean): number {
  return correct ? Math.min(MAX_BOX, box + 1) : Math.max(MIN_BOX, box - 2);
}

/** Prochaine échéance, exprimée dans le compteur global de l'utilisateur. */
export function dueAfter(answerCounter: number, box: number): number {
  const interval = INTERVALS[Math.min(Math.max(box, MIN_BOX), MAX_BOX)] ?? INTERVALS[0];
  return answerCounter + interval;
}

export function isMastered(box: number): boolean {
  return box >= MASTERY_BOX;
}

export type Random = () => number;

/** Mélange de Fisher-Yates. Le hasard est injecté pour que les tests décident. */
export function shuffle<T>(items: readonly T[], random: Random = Math.random): T[] {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

/** Ce que le planificateur a besoin de savoir d'une règle. Rien de plus. */
export type Candidate = {
  ruleId: string;
  category: string;
  /** 1 à 3. */
  difficulty: number;
  box: number;
  dueAtCounter: number;
  isNew: boolean;
};

/**
 * Compose une série d'entraînement.
 *
 * Ordre de service :
 *   1. les règles échues, du palier le plus bas au plus haut ;
 *   2. jusqu'à six règles inédites, des plus faciles aux plus difficiles ;
 *   3. de quoi compléter, par ordre d'échéance ;
 *   4. en dernier recours, d'autres règles inédites.
 * La liste finale est mélangée pour que l'ordre ne trahisse pas le palier.
 */
export function buildSeries(
  candidates: readonly Candidate[],
  size: number,
  answerCounter: number,
  random: Random = Math.random
): Candidate[] {
  const due: Candidate[] = [];
  const fresh: Candidate[] = [];
  const later: Candidate[] = [];

  for (const c of candidates) {
    if (c.isNew) fresh.push(c);
    else if (c.dueAtCounter <= answerCounter) due.push(c);
    else later.push(c);
  }

  due.sort((a, b) => a.box - b.box || a.dueAtCounter - b.dueAtCounter);
  const series = due.slice(0, size);

  fresh.sort((a, b) => a.difficulty - b.difficulty);
  const room = Math.min(MAX_NEW_PER_SERIES, size - series.length);
  for (let i = 0; i < room && i < fresh.length; i++) series.push(fresh[i]!);

  later.sort((a, b) => a.dueAtCounter - b.dueAtCounter);
  for (const c of later) {
    if (series.length >= size) break;
    series.push(c);
  }

  // Dernier recours : au tout début, seules les inédites existent. C'est ici que
  // le plafond de six cède, volontairement.
  const chosen = new Set(series.map((c) => c.ruleId));
  for (const c of fresh) {
    if (series.length >= size) break;
    if (!chosen.has(c.ruleId)) series.push(c);
  }

  return shuffle(series, random);
}

/**
 * Test de positionnement : on pioche à tour de rôle dans chaque catégorie, du
 * plus facile au plus difficile, pour situer le niveau partout à la fois.
 */
export function buildPlacementTest(
  candidates: readonly Candidate[],
  size: number = TEST_SIZE,
  random: Random = Math.random
): Candidate[] {
  const categories = [...new Set(candidates.map((c) => c.category))];
  const decks = categories.map((cat) =>
    shuffle(
      candidates.filter((c) => c.category === cat),
      random
    ).sort((a, b) => a.difficulty - b.difficulty)
  );

  const series: Candidate[] = [];
  const deepest = Math.max(0, ...decks.map((d) => d.length));
  for (let depth = 0; depth < deepest && series.length < size; depth++) {
    for (const deck of decks) {
      const candidate = deck[depth];
      if (!candidate) continue;
      series.push(candidate);
      if (series.length >= size) break;
    }
  }
  return shuffle(series, random);
}

/** Série ciblée sur les points faibles : déjà vues, palier au plus bas. */
export function buildWeaknessSeries(
  candidates: readonly Candidate[],
  size: number,
  random: Random = Math.random
): Candidate[] {
  const weak = candidates.filter((c) => !c.isNew && c.box <= 2);
  return shuffle(weak, random)
    .sort((a, b) => a.box - b.box)
    .slice(0, size);
}

/** Niveau estimé, à partir de la part de règles maîtrisées. */
export function estimateLevel(mastered: number, total: number): string {
  if (total === 0) return "Débutant";
  const ratio = mastered / total;
  if (ratio >= 0.9) return "Expert";
  if (ratio >= 0.7) return "Confirmé";
  if (ratio >= 0.45) return "Solide";
  if (ratio >= 0.2) return "En progrès";
  return "Débutant";
}

/**
 * Choisit la phrase à servir pour une règle : n'importe laquelle sauf celle de
 * la fois précédente, pour ne pas réciter deux fois de suite la même.
 */
export function pickSentence<T extends { id: string }>(
  sentences: readonly T[],
  lastSentenceId: string | null,
  random: Random = Math.random
): T | null {
  if (sentences.length === 0) return null;
  const pool = sentences.length > 1 ? sentences.filter((s) => s.id !== lastSentenceId) : sentences;
  const usable = pool.length > 0 ? pool : sentences;
  return usable[Math.floor(random() * usable.length)] ?? null;
}
