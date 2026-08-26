/**
 * Les notions où « cocher la deuxième plus longue » remplace l'ancienne astuce.
 *
 * Sans argument : la liste des notions au-dessus du seuil, les pires d'abord.
 * Avec un slug : le détail, question par question, les propositions ordonnées
 * par longueur pour voir d'un coup d'œil quel leurre allonger.
 */
import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
import type { QcmPayload } from "../src/modules/kinds/qcm";

const motif = process.argv[2];
const lignes: { slug: string; n: number; sur: number }[] = [];

for (const lot of chargerContenuCultureG()) {
  for (const notion of lot.skills) {
    const qs = notion.exercises
      .map((ex) => ex.payload as QcmPayload)
      .filter((p) => Array.isArray(p.choices) && p.answerIndex !== undefined);
    if (qs.length < 5) continue;
    let n = 0;
    const detail: string[] = [];
    for (const p of qs) {
      const bonne = p.choices[p.answerIndex]?.length ?? 0;
      const autres = p.choices
        .filter((_, i) => i !== p.answerIndex)
        .map((c) => c.length)
        .sort((x, y) => y - x);
      const touche = autres[0] !== undefined && autres[0] >= bonne + 4 && bonne >= (autres[1] ?? 0) + 4;
      if (touche) n++;
      if (motif && notion.slug.includes(motif)) {
        detail.push(
          `  ${touche ? "▲" : " "} ${p.question}\n` +
            p.choices
              .map((c, i) => ({ c, i }))
              .sort((a, b) => b.c.length - a.c.length)
              .map((x) => `      ${x.i === p.answerIndex ? "✔" : " "} [${String(x.c.length).padStart(3)}] ${x.c}`)
              .join("\n"),
        );
      }
    }
    if (motif && notion.slug.includes(motif)) {
      console.log(`\n═══ ${notion.slug} — ${n}/${qs.length}\n${detail.join("\n")}`);
    }
    lignes.push({ slug: notion.slug, n, sur: qs.length });
  }
}

if (!motif) {
  lignes
    .filter((l) => l.n / l.sur > 0.4)
    .sort((a, b) => b.n / b.sur - a.n / a.sur)
    .forEach((l) => console.log(`${l.n}/${l.sur}\t${l.n / l.sur > 0.5 ? "ERREUR" : "avert."}\t${l.slug}`));
}
