/**
 * npm run validate:content [-- --strict] [-- --json]
 *
 * Compte-rendu : volumes par catégorie, répartition par difficulté, règles
 * sous la cible de 5 phrases, et liste des anomalies. Sortie 1 s'il reste une
 * erreur (ou, avec --strict, un avertissement) : utilisable en pré-commit.
 */
import { loadAllBatches } from "../prisma/seed/index";
import { validateBatches, TARGET_SENTENCES } from "../src/lib/validate-content";

const strict = process.argv.includes("--strict");
const asJson = process.argv.includes("--json");

const batches = loadAllBatches();
const report = validateBatches(batches);

if (asJson) {
  console.log(JSON.stringify(report, null, 2));
  process.exit(report.errorCount > 0 || (strict && report.warnCount > 0) ? 1 : 0);
}

const pad = (s: string, n: number) => s.padEnd(n);
const num = (n: number, w = 5) => String(n).padStart(w);

console.log("\n─── CONTENU ───────────────────────────────────────────────");
console.log(
  `${report.ruleCount} règles · ${report.sentenceCount} phrases · ${report.dictationCount} dictées` +
    `  (lots : ${batches.map((b) => b.id).join(", ")})`
);

console.log("\nPar catégorie");
const cats = Object.entries(report.byCategory).sort((a, b) => b[1].rules - a[1].rules);
for (const [cat, v] of cats) {
  const avg = v.rules ? (v.sentences / v.rules).toFixed(1) : "0";
  console.log(`  ${pad(cat, 24)} ${num(v.rules)} règles ${num(v.sentences)} phrases  (${avg}/règle)`);
}

console.log("\nPar difficulté");
for (const d of [1, 2, 3]) console.log(`  niveau ${d} ${num(report.byDifficulty[d] ?? 0)} règles`);

console.log("\nPar statut");
for (const [s, n] of Object.entries(report.byStatus)) console.log(`  ${pad(s, 24)} ${num(n)} règles`);

console.log(`\nRègles sous ${TARGET_SENTENCES} phrases : ${report.thinRules.length}`);
if (report.thinRules.length > 0) {
  const groups: Record<number, string[]> = {};
  for (const t of report.thinRules) (groups[t.sentences] ??= []).push(t.rule);
  for (const [n, list] of Object.entries(groups)) {
    console.log(`  ${n} phrase(s) : ${list.length} règles`);
    console.log(`     ${list.slice(0, 12).join(", ")}${list.length > 12 ? ` … (+${list.length - 12})` : ""}`);
  }
}

console.log("\n─── ANOMALIES ─────────────────────────────────────────────");
if (report.findings.length === 0) {
  console.log("  aucune.");
} else {
  // Groupé par code ET par gravité : sans quoi une erreur isolée se cacherait
  // dans un groupe majoritairement composé d'avertissements du même code.
  const byCode: Record<string, typeof report.findings> = {};
  for (const f of report.findings) (byCode[`${f.severity}::${f.code}`] ??= []).push(f);
  const ordre = Object.entries(byCode).sort(
    (a, b) =>
      Number(b[0].startsWith("error")) - Number(a[0].startsWith("error")) || b[1].length - a[1].length
  );
  for (const [cle, list] of ordre) {
    const [severity, code] = cle.split("::") as [string, string];
    const sev = severity === "error" ? "ERREUR" : "avert.";
    console.log(`\n  [${sev}] ${code} — ${list.length}`);
    for (const f of list.slice(0, 8)) {
      console.log(`     ${f.rule}${f.sentence ? ` — « ${f.sentence} »` : ""}\n        ${f.message}`);
    }
    if (list.length > 8) console.log(`     … (+${list.length - 8})`);
  }
}

console.log(
  `\n${report.errorCount} erreur(s), ${report.warnCount} avertissement(s)` +
    (strict ? " — mode strict" : "") +
    "\n"
);

process.exit(report.errorCount > 0 || (strict && report.warnCount > 0) ? 1 : 0);
