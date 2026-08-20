/**
 * npm run validate:content [-- --strict] [-- --json] [-- --module=<id>]
 *
 * Compte-rendu par module : volumes par catégorie, répartition par difficulté,
 * compétences sous la cible de 5 exercices, et liste des anomalies. Sortie 1
 * s'il reste une erreur (ou, avec --strict, un avertissement) : utilisable en
 * pré-commit.
 */
import { MODULES } from "../src/modules";
import { contenuDe } from "../src/modules/contenu";
import { validateModule, TARGET_EXERCISES, type Report } from "../src/lib/validate-content";

const strict = process.argv.includes("--strict");
const asJson = process.argv.includes("--json");
const seulement = process.argv.find((a) => a.startsWith("--module="))?.slice("--module=".length);

const modules = seulement ? MODULES.filter((m) => m.id === seulement) : MODULES;
if (modules.length === 0) {
  console.error(`Aucun module « ${seulement} » dans le registre.`);
  process.exit(2);
}

const rapports: { module: (typeof MODULES)[number]; report: Report; lots: string[] }[] = modules.map(
  (mod) => {
    const batches = contenuDe(mod);
    return { module: mod, report: validateModule(mod, batches), lots: batches.map((b) => b.id) };
  }
);

const erreurs = rapports.reduce((n, r) => n + r.report.errorCount, 0);
const avertissements = rapports.reduce((n, r) => n + r.report.warnCount, 0);

if (asJson) {
  console.log(JSON.stringify(rapports.map((r) => r.report), null, 2));
  process.exit(erreurs > 0 || (strict && avertissements > 0) ? 1 : 0);
}

const pad = (s: string, n: number) => s.padEnd(n);
const num = (n: number, w = 5) => String(n).padStart(w);

for (const { module: mod, report, lots } of rapports) {
  const voc = mod.vocabulaire;

  console.log(`\n─── ${mod.name.toUpperCase()} ${"─".repeat(Math.max(0, 54 - mod.name.length))}`);
  console.log(
    `${report.skillCount} ${voc.skillPluriel} · ${report.exerciseCount} ${voc.exercisePluriel}` +
      (report.dictationCount > 0 ? ` · ${report.dictationCount} dictées` : "") +
      `  (${lots.length} lot(s) : ${lots.slice(0, 6).join(", ")}${lots.length > 6 ? "…" : ""})`
  );

  console.log("\nPar catégorie");
  const cats = Object.entries(report.byCategory).sort((a, b) => b[1].skills - a[1].skills);
  for (const [cat, v] of cats) {
    const moyenne = v.skills ? (v.exercises / v.skills).toFixed(1) : "0";
    console.log(
      `  ${pad(cat, 24)} ${num(v.skills)} ${pad(voc.skillPluriel, 10)} ` +
        `${num(v.exercises)} ${pad(voc.exercisePluriel, 10)} (${moyenne}/${voc.skill})`
    );
  }

  if (Object.keys(report.byKind).length > 1) {
    console.log("\nPar type d'exercice");
    for (const [k, n] of Object.entries(report.byKind).sort((a, b) => b[1] - a[1])) {
      console.log(`  ${pad(k, 24)} ${num(n)}`);
    }
  }

  console.log("\nPar difficulté");
  for (const d of [1, 2, 3]) console.log(`  niveau ${d} ${num(report.byDifficulty[d] ?? 0)}`);

  console.log("\nPar statut");
  for (const [s, n] of Object.entries(report.byStatus)) console.log(`  ${pad(s, 24)} ${num(n)}`);

  console.log(`\nSous ${TARGET_EXERCISES} ${voc.exercisePluriel} : ${report.thinSkills.length}`);
  if (report.thinSkills.length > 0) {
    const groups: Record<number, string[]> = {};
    for (const t of report.thinSkills) (groups[t.exercises] ??= []).push(t.skill);
    for (const [n, list] of Object.entries(groups)) {
      console.log(`  ${n} : ${list.length}`);
      console.log(
        `     ${list.slice(0, 12).join(", ")}${list.length > 12 ? ` … (+${list.length - 12})` : ""}`
      );
    }
  }

  console.log("\n  Anomalies");
  if (report.findings.length === 0) {
    console.log("    aucune.");
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
      console.log(`\n    [${sev}] ${code} — ${list.length}`);
      for (const f of list.slice(0, 8)) {
        console.log(`       ${f.skill}${f.exercise ? ` — « ${f.exercise} »` : ""}\n          ${f.message}`);
      }
      if (list.length > 8) console.log(`       … (+${list.length - 8})`);
    }
  }
}

console.log(
  `\n${erreurs} erreur(s), ${avertissements} avertissement(s) sur ${rapports.length} module(s)` +
    (strict ? " — mode strict" : "") +
    "\n"
);

process.exit(erreurs > 0 || (strict && avertissements > 0) ? 1 : 0);
