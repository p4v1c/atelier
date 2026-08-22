/** Où en est la rédaction des cours : combien sont faits, ce qui reste. */
import { CG_NEUF } from "..";

const parCat = new Map<string, { total: number; faits: number; restants: string[] }>();
for (const s of CG_NEUF) {
  const e = parCat.get(s.category) ?? { total: 0, faits: 0, restants: [] };
  e.total++;
  if (s.lesson) e.faits++;
  else e.restants.push(s.slug.replace(/^cg-neuf-/, ""));
  parCat.set(s.category, e);
}

let total = 0;
let faits = 0;
const lignes = [...parCat].sort((a, b) => a[1].faits / a[1].total - b[1].faits / b[1].total);
for (const [cat, e] of lignes) {
  total += e.total;
  faits += e.faits;
  const barre = "█".repeat(Math.round((e.faits / e.total) * 20)).padEnd(20, "·");
  console.log(`${barre} ${String(e.faits).padStart(3)}/${String(e.total).padEnd(3)} ${cat}`);
}
console.log(`\n${faits} / ${total} notions ont leur cours (${Math.round((faits / total) * 100)} %).`);

if (process.argv[2] === "--reste") {
  const cat = process.argv[3];
  for (const [c, e] of parCat) {
    if (cat && !c.toLowerCase().includes(cat.toLowerCase())) continue;
    if (e.restants.length) console.log(`\n${c} :\n  ${e.restants.join("\n  ")}`);
  }
}
