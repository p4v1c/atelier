import { chargerContenuCultureG } from "./src/modules/culture-g/contenu";
const prefixe = process.argv[2];
const max = Number(process.argv[3] ?? 99);
const neuves = chargerContenuCultureG().find((l) => l.id === "cg-neuf")?.skills ?? [];
let n = 0;
for (const s of neuves) {
  const slug = s.slug.replace(/^cg-neuf-/, "");
  if (!slug.startsWith(prefixe) || s.lesson) continue;
  if (++n > max) break;
  console.log(`\n### ${slug} — ${s.title}`);
  console.log(`> ${s.statement} | ${s.tip}`);
  for (const e of s.exercises) {
    const p = e.payload as any;
    console.log(`- ${p.question} → ${p.choices[p.answerIndex]}`);
  }
}
