/**
 * Lot « legacy » — les 243 règles et 24 dictées du fichier d'origine.
 *
 * Lit prisma/seed/legacy.json (produit par npm run extract:legacy), applique
 * les six corrections de patches.ts, et rend le tout au format ContentBatch.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { ContentBatch, SeedDictation, SeedRule } from "../../src/lib/content";
import { PATCHES } from "./patches";
import { DICTATION_META } from "./dictations-legacy";

const here = path.dirname(fileURLToPath(import.meta.url));
const LEGACY_JSON = path.resolve(here, "legacy.json");

type LegacyRule = {
  id: string;
  cat: string;
  n: 1 | 2 | 3;
  t: string;
  r: string;
  astuce: string;
  p: { s: string; fix: string | null }[];
};

type LegacyFile = { rules: LegacyRule[]; dictations: string[] };

export const LEGACY_BATCH_ID = "legacy";

export function loadLegacyBatch(): ContentBatch {
  if (!fs.existsSync(LEGACY_JSON)) {
    throw new Error(
      `${LEGACY_JSON} manquant. Lance d'abord : npm run extract:legacy -- /chemin/vers/la-regle.html`
    );
  }
  const file = JSON.parse(fs.readFileSync(LEGACY_JSON, "utf8")) as LegacyFile;

  const applied = new Set<string>();
  const rules: SeedRule[] = file.rules.map((r) => ({
    slug: r.id,
    category: r.cat,
    title: r.t,
    statement: r.r,
    tip: r.astuce,
    difficulty: r.n,
    status: "active",
    sentences: r.p.map((p) => {
      const patch = PATCHES.find((x) => x.ruleSlug === r.id && x.from === p.s);
      if (!patch) return { marked: p.s, fix: p.fix };
      applied.add(`${patch.ruleSlug}::${patch.from}`);
      return { marked: patch.to, fix: patch.fix };
    }),
  }));

  // Un patch qui ne s'applique plus est un patch périmé : on le signale fort,
  // sinon il pourrit en silence à la prochaine ré-extraction.
  const orphans = PATCHES.filter((p) => !applied.has(`${p.ruleSlug}::${p.from}`));
  if (orphans.length > 0) {
    throw new Error(
      "Patchs non appliqués (la phrase d'origine a changé ou n'existe pas) :\n" +
        orphans.map((p) => `  - ${p.ruleSlug} : « ${p.from} »`).join("\n")
    );
  }

  const dictations: SeedDictation[] = file.dictations.map((text, index) => {
    const meta = DICTATION_META.find((m) => m.index === index);
    if (!meta) throw new Error(`métadonnées manquantes pour la dictée n° ${index}`);
    return {
      text,
      theme: meta.theme,
      difficulty: meta.difficulty,
      ruleSlugs: meta.ruleSlugs,
      status: "active",
    };
  });

  return { id: LEGACY_BATCH_ID, rules, dictations };
}
