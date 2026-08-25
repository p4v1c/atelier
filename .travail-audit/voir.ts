/**
 * npx tsx .travail-audit/voir.ts <motif...> — pour chaque règle dont le slug
 * contient l'un des motifs, affiche l'énoncé, l'astuce, et chaque phrase avec
 * le résultat de sa correction appliquée en place.
 *
 * C'est l'outil de vérification de la campagne de corrections : le défaut
 * dominant du module français est la correction bien formée qui produit une
 * phrase impossible, et on ne le voit qu'en lisant la phrase obtenue.
 */
import { loadAllBatches } from "../prisma/seed/index";
import { parseMarkedSentence, tokenize } from "../src/lib/tokenize";

const motifs = process.argv.slice(2);
if (motifs.length === 0) {
  console.error("usage : npx tsx .travail-audit/voir.ts <motif de slug>...");
  process.exit(1);
}

function corriger(marked: string, fix: string): string {
  const parsed = parseMarkedSentence(marked);
  const tokens = tokenize(parsed.text);
  const cible = tokens[parsed.faultyTokenIndex];
  if (!cible) return "(marqueur introuvable)";
  const parts = parsed.text.split(" ");
  parts[parsed.faultyTokenIndex] = `${cible.before}${fix}${cible.after}`;
  return parts.join(" ");
}

let trouvees = 0;
for (const batch of loadAllBatches()) {
  for (const regle of batch.rules) {
    if (!motifs.some((m) => regle.slug.includes(m))) continue;
    trouvees++;
    console.log(`\n═══ ${regle.slug} — ${regle.title}`);
    console.log(`    énoncé : ${regle.statement}`);
    console.log(`    astuce : ${regle.tip}`);
    regle.sentences.forEach((p, i) => {
      if (p.fix === null) {
        console.log(`  ${i}. ✓ ${p.marked}`);
      } else if (p.fix === "à supprimer") {
        console.log(`  ${i}. ✗ ${p.marked}\n     → (suppression du mot marqué)`);
      } else {
        console.log(`  ${i}. ✗ ${p.marked}\n     → ${corriger(p.marked, p.fix)}`);
      }
    });
  }
}
console.log(`\n${trouvees} règle(s).`);
