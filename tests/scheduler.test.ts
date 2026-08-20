/**
 * Calcul des paliers et composition des séries.
 *
 * Ce fichier verrouille la logique reprise du fichier d'origine : une erreur
 * d'un cran ou un intervalle décalé ne se voit pas à l'usage, mais rend la
 * révision espacée inefficace pendant des semaines.
 */
import { describe, expect, it } from "vitest";
import {
  buildPlacementTest,
  buildSeries,
  buildWeaknessSeries,
  dueAfter,
  estimateLevel,
  INTERVALS,
  isMastered,
  MASTERY_BOX,
  MAX_BOX,
  MAX_NEW_PER_SERIES,
  nextBox,
  pickSentence,
  shuffle,
  type Candidate,
} from "@/lib/study/scheduler";

/** Hasard neutralisé : prend toujours le premier élément restant. */
const noShuffle = () => 0;

function candidate(over: Partial<Candidate> & { ruleId: string }): Candidate {
  return { category: "Homophones", difficulty: 1, box: 0, dueAtCounter: 0, isNew: false, ...over };
}

describe("nextBox", () => {
  it("monte d'un cran sur bonne réponse", () => {
    expect(nextBox(0, true)).toBe(1);
    expect(nextBox(3, true)).toBe(4);
  });

  it("descend de deux crans sur mauvaise réponse", () => {
    expect(nextBox(5, false)).toBe(3);
    expect(nextBox(3, false)).toBe(1);
  });

  it("plafonne à 5 et plancher à 0", () => {
    expect(nextBox(5, true)).toBe(MAX_BOX);
    expect(nextBox(1, false)).toBe(0);
    expect(nextBox(0, false)).toBe(0);
  });

  it("une erreur coûte deux bonnes réponses", () => {
    let box = 4;
    box = nextBox(box, false);
    expect(box).toBe(2);
    expect(nextBox(nextBox(box, true), true)).toBe(4);
  });
});

describe("dueAfter", () => {
  it("reprend les intervalles d'origine, en questions répondues", () => {
    expect(INTERVALS).toEqual([3, 12, 35, 90, 220, 500]);
    for (const [box, interval] of INTERVALS.entries()) {
      expect(dueAfter(100, box)).toBe(100 + interval);
    }
  });

  it("ne sort pas du tableau sur un palier aberrant", () => {
    expect(dueAfter(0, 99)).toBe(INTERVALS[5]);
    expect(dueAfter(0, -3)).toBe(INTERVALS[0]);
  });
});

describe("isMastered", () => {
  it("bascule à partir du palier 4", () => {
    expect(MASTERY_BOX).toBe(4);
    expect(isMastered(3)).toBe(false);
    expect(isMastered(4)).toBe(true);
    expect(isMastered(5)).toBe(true);
  });
});

describe("buildSeries", () => {
  it("sert d'abord les règles échues, du palier le plus bas au plus haut", () => {
    const pool = [
      candidate({ ruleId: "haut", box: 4, dueAtCounter: 10 }),
      candidate({ ruleId: "bas", box: 0, dueAtCounter: 10 }),
      candidate({ ruleId: "milieu", box: 2, dueAtCounter: 10 }),
    ];
    expect(buildSeries(pool, 3, 50, noShuffle).map((c) => c.ruleId).sort()).toEqual(["bas", "haut", "milieu"]);

    const two = buildSeries(pool, 2, 50, noShuffle).map((c) => c.ruleId);
    expect(two).toContain("bas");
    expect(two).toContain("milieu");
    expect(two).not.toContain("haut");
  });

  it("écarte les règles pas encore échues tant qu'il reste des échues", () => {
    const pool = [
      candidate({ ruleId: "échue", dueAtCounter: 5 }),
      candidate({ ruleId: "plus-tard", dueAtCounter: 900 }),
    ];
    expect(buildSeries(pool, 1, 10, noShuffle).map((c) => c.ruleId)).toEqual(["échue"]);
  });

  it("s'en tient à six inédites quand il y a de quoi remplir autrement", () => {
    const pool = [
      ...Array.from({ length: 30 }, (_, i) => candidate({ ruleId: `neuve-${i}`, isNew: true })),
      ...Array.from({ length: 14 }, (_, i) => candidate({ ruleId: `due-${i}`, dueAtCounter: 0 })),
    ];
    const series = buildSeries(pool, 20, 100, noShuffle);
    expect(series).toHaveLength(20);
    expect(series.filter((c) => c.isNew)).toHaveLength(MAX_NEW_PER_SERIES);
  });

  it("dépasse les six inédites plutôt que de servir une série trop courte", () => {
    // 10 échues, 30 inédites, rien d'autre : le plafond de six ne tient pas, et
    // c'est voulu — sinon le premier jour donnerait des séries de six questions.
    const pool = [
      ...Array.from({ length: 30 }, (_, i) => candidate({ ruleId: `neuve-${i}`, isNew: true })),
      ...Array.from({ length: 10 }, (_, i) => candidate({ ruleId: `due-${i}`, dueAtCounter: 0 })),
    ];
    const series = buildSeries(pool, 20, 100, noShuffle);
    expect(series).toHaveLength(20);
    expect(series.filter((c) => c.isNew)).toHaveLength(10);
  });

  it("respecte le plafond dès qu'un report suffit à compléter", () => {
    const pool = [
      ...Array.from({ length: 30 }, (_, i) => candidate({ ruleId: `neuve-${i}`, isNew: true })),
      ...Array.from({ length: 10 }, (_, i) => candidate({ ruleId: `due-${i}`, dueAtCounter: 0 })),
      ...Array.from({ length: 10 }, (_, i) => candidate({ ruleId: `plus-tard-${i}`, dueAtCounter: 999 })),
    ];
    const series = buildSeries(pool, 20, 100, noShuffle);
    expect(series.filter((c) => c.isNew)).toHaveLength(MAX_NEW_PER_SERIES);
  });

  it("introduit les inédites de la plus facile à la plus difficile", () => {
    const pool = [
      candidate({ ruleId: "dure", isNew: true, difficulty: 3 }),
      candidate({ ruleId: "facile", isNew: true, difficulty: 1 }),
      candidate({ ruleId: "moyenne", isNew: true, difficulty: 2 }),
    ];
    expect(buildSeries(pool, 2, 0, noShuffle).map((c) => c.ruleId).sort()).toEqual(["facile", "moyenne"]);
  });

  it("complète par ordre d'échéance quand il n'y a pas assez d'échues", () => {
    const pool = [
      candidate({ ruleId: "échue", dueAtCounter: 1 }),
      candidate({ ruleId: "bientôt", dueAtCounter: 20 }),
      candidate({ ruleId: "lointaine", dueAtCounter: 800 }),
    ];
    const series = buildSeries(pool, 2, 10, noShuffle).map((c) => c.ruleId);
    expect(series).toContain("échue");
    expect(series).toContain("bientôt");
  });

  it("remplit avec des inédites quand il n'y a rien d'autre — premier jour", () => {
    const pool = Array.from({ length: 40 }, (_, i) => candidate({ ruleId: `n-${i}`, isNew: true }));
    const series = buildSeries(pool, 20, 0, noShuffle);
    expect(series).toHaveLength(20);
    expect(new Set(series.map((c) => c.ruleId)).size).toBe(20);
  });

  it("ne rend jamais deux fois la même règle", () => {
    const pool = [
      ...Array.from({ length: 8 }, (_, i) => candidate({ ruleId: `neuve-${i}`, isNew: true })),
      ...Array.from({ length: 3 }, (_, i) => candidate({ ruleId: `due-${i}`, dueAtCounter: 0 })),
    ];
    const series = buildSeries(pool, 11, 5, noShuffle);
    expect(new Set(series.map((c) => c.ruleId)).size).toBe(series.length);
  });

  it("ne dépasse jamais la taille demandée", () => {
    const pool = Array.from({ length: 100 }, (_, i) => candidate({ ruleId: `r-${i}`, dueAtCounter: 0 }));
    expect(buildSeries(pool, 10, 500, noShuffle)).toHaveLength(10);
  });

  it("rend une liste vide sur un vivier vide, sans lever d'exception", () => {
    expect(buildSeries([], 20, 0, noShuffle)).toEqual([]);
  });
});

describe("buildPlacementTest", () => {
  const pool = ["Homophones", "Accords", "Conjugaison", "Vocabulaire", "Orthographe d'usage"].flatMap((cat) =>
    Array.from({ length: 10 }, (_, i) =>
      candidate({ ruleId: `${cat}-${i}`, category: cat, difficulty: ((i % 3) + 1) as 1 | 2 | 3, isNew: true })
    )
  );

  it("fait 25 questions", () => {
    expect(buildPlacementTest(pool, 25, noShuffle)).toHaveLength(25);
  });

  it("touche toutes les catégories, à peu près également", () => {
    const counts = new Map<string, number>();
    for (const c of buildPlacementTest(pool, 25, noShuffle)) {
      counts.set(c.category, (counts.get(c.category) ?? 0) + 1);
    }
    expect(counts.size).toBe(5);
    expect(Math.max(...counts.values()) - Math.min(...counts.values())).toBeLessThanOrEqual(1);
  });

  it("commence par le plus facile de chaque catégorie", () => {
    const series = buildPlacementTest(pool, 5, noShuffle);
    expect(series.every((c) => c.difficulty === 1)).toBe(true);
  });

  it("s'arrête au vivier disponible s'il est plus petit", () => {
    const small = [candidate({ ruleId: "a", isNew: true }), candidate({ ruleId: "b", isNew: true })];
    expect(buildPlacementTest(small, 25, noShuffle)).toHaveLength(2);
  });
});

describe("buildWeaknessSeries", () => {
  it("ne garde que les règles déjà vues et de palier 2 ou moins", () => {
    const pool = [
      candidate({ ruleId: "faible", box: 1 }),
      candidate({ ruleId: "limite", box: 2 }),
      candidate({ ruleId: "solide", box: 3 }),
      candidate({ ruleId: "jamais-vue", box: 0, isNew: true }),
    ];
    const series = buildWeaknessSeries(pool, 10, noShuffle).map((c) => c.ruleId);
    expect(series.sort()).toEqual(["faible", "limite"]);
  });

  it("rend une liste vide quand rien ne cloche", () => {
    expect(buildWeaknessSeries([candidate({ ruleId: "bonne", box: 5 })], 10, noShuffle)).toEqual([]);
  });
});

describe("estimateLevel", () => {
  it("échelonne du débutant à l'expert", () => {
    expect(estimateLevel(0, 100)).toBe("Débutant");
    expect(estimateLevel(19, 100)).toBe("Débutant");
    expect(estimateLevel(20, 100)).toBe("En progrès");
    expect(estimateLevel(45, 100)).toBe("Solide");
    expect(estimateLevel(70, 100)).toBe("Confirmé");
    expect(estimateLevel(90, 100)).toBe("Expert");
  });

  it("ne divise pas par zéro sur une base vide", () => {
    expect(estimateLevel(0, 0)).toBe("Débutant");
  });
});

describe("pickSentence", () => {
  const sentences = [{ id: "a" }, { id: "b" }, { id: "c" }];

  it("évite la phrase servie la fois précédente", () => {
    for (let i = 0; i < 20; i++) {
      expect(pickSentence(sentences, "a")!.id).not.toBe("a");
    }
  });

  it("resert l'unique phrase disponible plutôt que de ne rien rendre", () => {
    expect(pickSentence([{ id: "seule" }], "seule")!.id).toBe("seule");
  });

  it("rend null sur une règle sans phrase", () => {
    expect(pickSentence([], null)).toBeNull();
  });
});

describe("shuffle", () => {
  it("garde exactement les mêmes éléments", () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(shuffle(items).sort((a, b) => a - b)).toEqual(items);
  });

  it("ne touche pas au tableau d'origine", () => {
    const items = [1, 2, 3];
    shuffle(items);
    expect(items).toEqual([1, 2, 3]);
  });
});
