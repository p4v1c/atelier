/**
 * Où en est la rédaction des cours : combien sont faits, ce qui reste.
 *
 * On lit le contenu tel que le module le sert, et non la liste brute des
 * notions : celles qui ont été versées dans une leçon héritée n'attendent
 * plus de cours et n'ont rien à faire dans le décompte.
 *
 *     npx tsx prisma/seed/culture-g/cours/etat.ts
 *     npx tsx prisma/seed/culture-g/cours/etat.ts --reste sport
 */
import { chargerContenuCultureG } from "../../../../src/modules/culture-g/contenu";

const neuves = chargerContenuCultureG().find((l) => l.id === "cg-neuf")?.skills ?? [];

const parCat = new Map<string, { total: number; faits: number; restants: string[] }>();
for (const s of neuves) {
  const e = parCat.get(s.category) ?? { total: 0, faits: 0, restants: [] };
  e.total++;
  if (s.lesson) e.faits++;
  else e.restants.push(s.slug.replace(/^cg-neuf-/, ""));
  parCat.set(s.category, e);
}

let total = 0;
let faits = 0;
for (const [cat, e] of [...parCat].sort((a, b) => a[1].faits / a[1].total - b[1].faits / b[1].total)) {
  total += e.total;
  faits += e.faits;
  const barre = "█".repeat(Math.round((e.faits / e.total) * 20)).padEnd(20, "·");
  console.log(`${barre} ${String(e.faits).padStart(3)}/${String(e.total).padEnd(3)} ${cat}`);
}
console.log(`\n${faits} / ${total} notions ont leur cours (${Math.round((faits / total) * 100)} %).`);

if (process.argv[2] === "--reste") {
  const filtre = process.argv[3];
  for (const [c, e] of parCat) {
    if (filtre && !c.toLowerCase().includes(filtre.toLowerCase())) continue;
    if (e.restants.length) console.log(`\n${c} :\n  ${e.restants.join("\n  ")}`);
  }
}
