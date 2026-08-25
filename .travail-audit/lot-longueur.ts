/**
 * npx tsx .travail-audit/lot-longueur.ts <n> — les n pires notions, en compact :
 * pour chaque question, la longueur de la bonne réponse puis les leurres à
 * réécrire. Format resserré pour travailler vite, notion par notion.
 */
import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
import type { QcmPayload } from "../src/modules/kinds/qcm";

const combien = Number(process.argv[2] ?? 2);
type N = { slug: string; ratio: number; sur: number; lignes: string[] };
const notions: N[] = [];
for (const lot of chargerContenuCultureG()) {
  for (const s of lot.skills) {
    let sur = 0, longue = 0;
    const lignes: string[] = [];
    for (const ex of s.exercises) {
      const p = ex.payload as QcmPayload;
      if (!Array.isArray(p.choices) || p.answerIndex === undefined) continue;
      const t = p.choices.map((c) => c.length);
      const bonne = t[p.answerIndex]!;
      const autres = t.filter((_, i) => i !== p.answerIndex);
      sur++;
      if (bonne > Math.max(...autres)) longue++;
      lignes.push(
        `${bonne > Math.max(...autres) ? "▲" : " "}${String(bonne).padStart(3)} ${p.choices[p.answerIndex]}\n` +
          p.choices.map((c, i) => (i === p.answerIndex ? null : `    ${String(c.length).padStart(3)} ${c}`)).filter(Boolean).join("\n"),
      );
    }
    if (sur >= 5) notions.push({ slug: s.slug, ratio: longue / sur, sur, lignes });
  }
}
notions.sort((a, b) => b.ratio - a.ratio || b.sur - a.sur);
for (const n of notions.slice(0, combien)) {
  console.log(`\n════ ${n.slug} — ${Math.round(n.ratio * n.sur)}/${n.sur}`);
  console.log(n.lignes.join("\n"));
}
