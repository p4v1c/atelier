/**
 * Les classes CSS que plus aucun composant ne rend.
 *
 * Le CSS ne se plaint jamais d'une règle inutile : elle reste, on la relit, on
 * la croit vivante. Ce balayage compare les sélecteurs de classe des quatre
 * feuilles aux className écrits dans src/**\/*.tsx, et signale l'écart.
 *
 * Il lit les className littéraux ET les gabarits `x ${…}` : une classe posée
 * par une expression entière — jamais le cas ici — passerait entre les mailles.
 *
 *   node scripts/classes-mortes.mjs
 */
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const FEUILLES = [
  "src/app/globals.css",
  "src/app/coque.css",
  "src/app/modules/culture-g.css",
  "src/app/modules/langues.css",
];

const classes = new Map();
for (const f of FEUILLES) {
  const texte = readFileSync(f, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  for (const m of texte.matchAll(/\.([a-zA-Z][\w-]*)/g)) {
    if (!classes.has(m[1])) classes.set(m[1], new Set());
    classes.get(m[1]).add(f);
  }
}

function fichiers(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...fichiers(p));
    else if (p.endsWith(".tsx") || p.endsWith(".ts")) out.push(p);
  }
  return out;
}

/* Seuls les className comptent : le mot « module » dans un commentaire ou une
   variable ne prouve pas qu'une règle .module sert encore.
   On prend l'expression entière du className, accolades équilibrées, et l'on
   en retire TOUTE chaîne littérale : les modificateurs d'un ternaire —
   `segment ${actif ? "actif" : ""}` — comptent comme posés. Le body de
   layout.tsx et les classes ajoutées par classList sont ratissés de même. */
const posees = new Set();

function expressionEntiere(texte, depart) {
  let profondeur = 0;
  for (let i = depart; i < texte.length; i++) {
    if (texte[i] === "{") profondeur++;
    else if (texte[i] === "}") {
      profondeur--;
      if (profondeur === 0) return texte.slice(depart, i + 1);
    }
  }
  return texte.slice(depart, depart + 400);
}

/* Les chaînes d'une expression, en tenant compte du guillemet ouvrant : une
   recherche par alternation confondait la fin d'un gabarit avec le début du
   littéral suivant, et `puce ${x ? "active" : ""}` ne livrait pas « active ». */
function chainesDe(expr) {
  const out = [];
  for (let i = 0; i < expr.length; i++) {
    const q = expr[i];
    if (q !== '"' && q !== "'" && q !== "`") continue;
    let j = i + 1;
    let courant = "";
    while (j < expr.length && expr[j] !== q) {
      if (expr[j] === "\\") j++;
      // Dans un gabarit, ${…} est du code, pas du texte.
      else if (q === "`" && expr[j] === "$" && expr[j + 1] === "{") {
        const sous = expressionEntiere(expr, j + 1);
        out.push(...chainesDe(sous));
        j += sous.length + 1;
        courant += " ";
        continue;
      } else courant += expr[j];
      j++;
    }
    out.push(courant);
    i = j;
  }
  return out;
}

function ajouterMots(fragment) {
  for (const mot of fragment.split(/[\s]+/)) if (mot && /^[a-zA-Z][\w-]*$/.test(mot)) posees.add(mot);
}

for (const f of fichiers("src")) {
  const texte = readFileSync(f, "utf8");
  for (const m of texte.matchAll(/className=/g)) {
    const apres = m.index + "className=".length;
    if (texte[apres] === "{") {
      const expr = expressionEntiere(texte, apres);
      for (const lit of chainesDe(expr)) ajouterMots(lit);
    } else {
      for (const lit of chainesDe(texte.slice(apres, apres + 200))) {
        ajouterMots(lit);
        break;
      }
    }
  }
  // classList.add("x"), setAttribute("class", "x"), document.body.className = "x"
  for (const m of texte.matchAll(/(?:classList\.(?:add|remove|toggle)|setAttribute\(\s*"class"\s*,|\.className\s*=)\s*\(?\s*([^)\n]*)/g)) {
    for (const lit of chainesDe(m[1])) ajouterMots(lit);
  }
}

const mortes = [...classes.keys()].filter((c) => !posees.has(c)).sort();
if (mortes.length === 0) {
  console.log(`${classes.size} classes · aucune sans emploi.`);
} else {
  console.log(`${classes.size} classes · ${mortes.length} qu'aucun composant ne rend :\n`);
  for (const c of mortes) {
    console.log(`  .${c.padEnd(24)} ${[...classes.get(c)].map((f) => f.split("/").pop()).join(", ")}`);
  }
  process.exitCode = 1;
}
