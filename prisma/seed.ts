/**
 * npm run seed [-- --strict] [-- --prune]
 *
 * Idempotent : relançable sans rien casser. Les phrases sont appariées sur leur
 * forme normalisée, les règles sur leur slug, les dictées sur leur texte.
 *
 * Par défaut le seed ne SUPPRIME rien : une phrase présente en base mais absente
 * du lot est signalée, pas effacée — la supprimer emporterait avec elle les
 * `Attempt` qui la référencent. `--prune` force la suppression, en le disant.
 *
 * Rien n'entre en base sans être passé par le validateur (assertValid).
 */
import { PrismaClient, type ContentStatus } from "@prisma/client";
import { CATEGORIES } from "../src/lib/content";
import { normalizeForDedupe, parseMarkedSentence } from "../src/lib/tokenize";
import { assertValid } from "../src/lib/validate-content";
import { loadAllBatches } from "./seed/index";

const prisma = new PrismaClient();
const strict = process.argv.includes("--strict");
const prune = process.argv.includes("--prune");

async function main() {
  const batches = loadAllBatches();
  const report = assertValid(batches, strict);
  console.log(
    `Validation OK — ${report.ruleCount} règles, ${report.sentenceCount} phrases, ` +
      `${report.dictationCount} dictées (${report.warnCount} avertissement(s)).`
  );

  /* ── catégories ── */
  const categoryIdByName = new Map<string, string>();
  for (const [position, c] of CATEGORIES.entries()) {
    const row = await prisma.category.upsert({
      where: { slug: c.slug },
      create: { slug: c.slug, name: c.name, position },
      update: { name: c.name, position },
    });
    categoryIdByName.set(c.name, row.id);
  }
  console.log(`Catégories : ${categoryIdByName.size}`);

  /* ── règles et phrases ── */
  let rulesTouched = 0;
  let sentencesTouched = 0;
  const orphans: string[] = [];

  for (const batch of batches) {
    for (const seed of batch.rules) {
      const categoryId = categoryIdByName.get(seed.category);
      if (!categoryId) throw new Error(`catégorie « ${seed.category} » absente (règle ${seed.slug})`);

      const status = (seed.status ?? "active") as ContentStatus;
      const rule = await prisma.rule.upsert({
        where: { slug: seed.slug },
        create: {
          slug: seed.slug,
          categoryId,
          title: seed.title,
          statement: seed.statement,
          tip: seed.tip,
          difficulty: seed.difficulty,
          status,
          batch: batch.id,
        },
        update: {
          categoryId,
          title: seed.title,
          statement: seed.statement,
          tip: seed.tip,
          difficulty: seed.difficulty,
          status,
          batch: batch.id,
        },
      });
      rulesTouched++;

      const keptKeys: string[] = [];
      for (const s of seed.sentences) {
        const parsed = parseMarkedSentence(s.marked);
        const key = normalizeForDedupe(parsed.text);
        keptKeys.push(key);
        const data = {
          ruleId: rule.id,
          text: parsed.text,
          faultyTokenIndex: parsed.faultyTokenIndex,
          correction: s.fix,
          isCorrect: parsed.faultyTokenIndex === -1,
          difficulty: s.difficulty ?? seed.difficulty,
          status: (s.status ?? status) as ContentStatus,
          batch: batch.id,
        };
        await prisma.sentence.upsert({
          where: { textNormalized: key },
          create: { ...data, textNormalized: key },
          update: data,
        });
        sentencesTouched++;
      }

      const stale = await prisma.sentence.findMany({
        where: { ruleId: rule.id, textNormalized: { notIn: keptKeys } },
        select: { id: true, text: true },
      });
      for (const s of stale) orphans.push(`${seed.slug} — « ${s.text} »`);
      if (prune && stale.length > 0) {
        await prisma.sentence.deleteMany({ where: { id: { in: stale.map((s) => s.id) } } });
      }
    }
  }
  console.log(`Règles : ${rulesTouched} · Phrases : ${sentencesTouched}`);

  /* ── dictées ── */
  let dictationsTouched = 0;
  const keptDictations: string[] = [];
  for (const batch of batches) {
    for (const d of batch.dictations ?? []) {
      const rules = await prisma.rule.findMany({
        where: { slug: { in: d.ruleSlugs } },
        select: { id: true, slug: true },
      });
      const missing = d.ruleSlugs.filter((s) => !rules.some((r) => r.slug === s));
      if (missing.length > 0) {
        throw new Error(`dictée « ${d.text.slice(0, 30)}… » : règles introuvables ${missing.join(", ")}`);
      }
      const data = {
        theme: d.theme,
        difficulty: d.difficulty,
        status: (d.status ?? "active") as ContentStatus,
        batch: batch.id,
        rules: { set: rules.map((r) => ({ id: r.id })) },
      };
      await prisma.dictation.upsert({
        where: { text: d.text },
        create: { text: d.text, ...data, rules: { connect: rules.map((r) => ({ id: r.id })) } },
        update: data,
      });
      dictationsTouched++;
      keptDictations.push(d.text);
    }
  }
  console.log(`Dictées : ${dictationsTouched}`);

  // Une dictée retirée d'un lot resterait sinon en base, invisible dans les
  // fichiers mais bien servie à l'utilisateur.
  const staleDictations = await prisma.dictation.findMany({
    where: { text: { notIn: keptDictations } },
    select: { id: true, text: true },
  });
  for (const d of staleDictations) orphans.push(`dictée — « ${d.text} »`);
  if (prune && staleDictations.length > 0) {
    await prisma.dictation.deleteMany({ where: { id: { in: staleDictations.map((d) => d.id) } } });
  }

  // Une règle retirée des lots — renommée, remplacée — resterait sinon en base
  // et continuerait d'être servie, invisible dans les fichiers.
  const keptSlugs = batches.flatMap((b) => b.rules.map((r) => r.slug));
  const staleRules = await prisma.rule.findMany({
    where: { slug: { notIn: keptSlugs } },
    select: { id: true, slug: true, _count: { select: { sentences: true } } },
  });
  for (const r of staleRules) orphans.push(`règle — ${r.slug} (${r._count.sentences} phrases)`);
  if (prune && staleRules.length > 0) {
    await prisma.rule.deleteMany({ where: { id: { in: staleRules.map((r) => r.id) } } });
  }

  if (orphans.length > 0) {
    console.log(
      `\n${orphans.length} élément(s) en base sans équivalent dans les lots` +
        (prune ? " — SUPPRIMÉES (--prune) :" : " — conservées (relance avec --prune pour les retirer) :")
    );
    for (const o of orphans.slice(0, 20)) console.log(`  ${o}`);
    if (orphans.length > 20) console.log(`  … (+${orphans.length - 20})`);
  }

  const [rules, sentences, dictations] = await Promise.all([
    prisma.rule.count(),
    prisma.sentence.count(),
    prisma.dictation.count(),
  ]);
  console.log(`\nEn base : ${rules} règles · ${sentences} phrases · ${dictations} dictées`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e instanceof Error ? e.message : e);
    await prisma.$disconnect();
    process.exit(1);
  });
