/**
 * npx tsx .travail-audit/longueur-notions.ts [motif] — le biais de longueur,
 * notion par notion.
 *
 * Sans argument : les notions où la bonne réponse est la plus longue le plus
 * souvent, les pires d'abord. Avec un motif : le détail des questions d'une
 * notion, longueur de chaque proposition, pour réécrire les leurres.
 */
import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
import type { QcmPayload } from "../src/modules/kinds/qcm";

const motif = process.argv[2];
type Ligne = { notion: string; sur: number; plusLongue: number; ecart: number };
const lignes: Ligne[] = [];

for (const lot of chargerContenuCultureG()) {
  for (const notion of lot.skills) {
    let sur = 0, plusLongue = 0, ecart = 0;
    const detail: string[] = [];
    for (const ex of notion.exercises) {
      const p = ex.payload as QcmPayload;
      if (!Array.isArray(p.choices) || p.answerIndex === undefined) continue;
      const tailles = p.choices.map((x) => x.length);
      const bonne = tailles[p.answerIndex]!;
      const autres = tailles.filter((_, i) => i !== p.answerIndex);
      sur++;
      if (bonne > Math.max(...autres)) plusLongue++;
      ecart += bonne - autres.reduce((a, b) => a + b, 0) / autres.length;
      if (motif && notion.slug.includes(motif)) {
        detail.push(
          `  ${bonne > Math.max(...autres) ? "▲" : " "} ${p.question}\n` +
            p.choices.map((x, i) => `      ${i === p.answerIndex ? "✔" : " "} [${String(x.length).padStart(3)}] ${x}`).join("\n"),
        );
      }
    }
    if (sur === 0) continue;
    if (motif && notion.slug.includes(motif)) {
      console.log(`\n═══ ${notion.slug} — ${plusLongue}/${sur}\n${detail.join("\n")}`);
    }
    lignes.push({ notion: notion.slug, sur, plusLongue, ecart: ecart / sur });
  }
}

if (!motif) {
  lignes.sort((a, b) => b.plusLongue / b.sur - a.plusLongue / a.sur || b.sur - a.sur);
  for (const l of lignes.slice(0, 40)) {
    console.log(`${String(l.plusLongue).padStart(2)}/${String(l.sur).padEnd(3)} écart ${String(Math.round(l.ecart)).padStart(3)}  ${l.notion}`);
  }
  const tot = lignes.reduce((a, l) => a + l.sur, 0);
  const bad = lignes.reduce((a, l) => a + l.plusLongue, 0);
  console.log(`\n${bad}/${tot} questions — ${Math.round((bad / tot) * 100)} % · ${lignes.filter((l) => l.plusLongue / l.sur > 0.5).length} notions au-dessus de la moitié`);
}
