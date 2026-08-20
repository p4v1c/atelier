/**
 * Étape A — extraction. Lit les tableaux REGLES et DICTEES du fichier
 * la-regle.html d'origine et les recopie tels quels dans prisma/seed/legacy.json.
 *
 * Aucune reformulation ici : ce script ne fait que changer le contenant.
 * Les corrections ponctuelles vivent séparément dans prisma/seed/patches.ts,
 * pour rester lisibles et révocables.
 *
 * Usage : npm run extract:legacy -- [chemin/vers/la-regle.html]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const source = process.argv[2] ?? path.resolve(here, "../heritage/la-regle/la-regle.html");
const out = path.resolve(here, "../prisma/seed/legacy.json");

const html = fs.readFileSync(source, "utf8");
const lines = html.split("\n");

function sliceArray(declaration) {
  const start = lines.findIndex((l) => l.startsWith(`const ${declaration}`));
  if (start === -1) throw new Error(`déclaration « const ${declaration} » introuvable dans ${source}`);
  let depth = 0;
  for (let i = start; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === "[") depth++;
      else if (ch === "]") depth--;
    }
    if (depth === 0 && i > start) {
      const src = lines.slice(start, i + 1).join("\n");
      return src.replace(new RegExp(`^const ${declaration}\\s*=`), "");
    }
  }
  throw new Error(`tableau ${declaration} non refermé`);
}

// Les tableaux sont des littéraux JS (clés non quotées) : eval est ici le
// parseur le plus honnête, sur un fichier local qu'on fournit soi-même.
const REGLES = eval(sliceArray("REGLES"));
const DICTEES = eval(sliceArray("DICTEES"));

if (!Array.isArray(REGLES) || !Array.isArray(DICTEES)) throw new Error("extraction ratée");

const payload = {
  extractedFrom: path.basename(source),
  ruleCount: REGLES.length,
  sentenceCount: REGLES.reduce((n, r) => n + r.p.length, 0),
  dictationCount: DICTEES.length,
  rules: REGLES,
  dictations: DICTEES,
};

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(payload, null, 1), "utf8");

console.log(
  `legacy.json écrit : ${payload.ruleCount} règles, ${payload.sentenceCount} phrases, ${payload.dictationCount} dictées`
);
