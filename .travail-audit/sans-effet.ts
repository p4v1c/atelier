/**
 * npx tsx .travail-audit/sans-effet.ts — les corrections qui ne corrigent rien.
 *
 * Une phrase dont le `fix` reproduit le mot marqué (à la ponctuation près) est
 * un exercice vide : l'apprenant clique, et la phrase ne change pas.
 */
import { loadAllBatches } from "../prisma/seed/index";
import { parseMarkedSentence, tokenize } from "../src/lib/tokenize";

let n = 0;
for (const batch of loadAllBatches()) {
  for (const regle of batch.rules) {
    for (const phrase of regle.sentences) {
      if (phrase.fix === null || phrase.fix === "à supprimer") continue;
      const parsed = parseMarkedSentence(phrase.marked);
      const cible = tokenize(parsed.text)[parsed.faultyTokenIndex];
      if (!cible) continue;
      if (cible.word !== phrase.fix) continue;
      n++;
      console.log(`${regle.slug}\n  ✗ ${phrase.marked}  (fix « ${phrase.fix} »)`);
    }
  }
}
console.log(`\n${n} correction(s) sans effet.`);
