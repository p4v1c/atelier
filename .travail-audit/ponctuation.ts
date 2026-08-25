/**
 * npx tsx .travail-audit/ponctuation.ts — les corrections invisibles à l'écran.
 *
 * L'écran n'assemble pas la phrase corrigée : il barre le mot cliquable et
 * écrit la correction au-dessus, à la main (voir SpotError.tsx). La ponctuation
 * finale, elle, reste affichée dans la ligne, hors du mot.
 *
 * Une correction qui vaut « le mot marqué + sa ponctuation » n'apprend donc
 * rien : l'apprenant voit écrit au-dessus du mot exactement ce qu'il a déjà
 * sous les yeux.
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
      if (phrase.fix !== cible.word + cible.after) continue;
      n++;
      console.log(`${regle.slug}\n  ✗ ${phrase.marked} → « ${phrase.fix} », soit le mot déjà écrit`);
    }
  }
}
console.log(`\n${n} correction(s) invisibles à l'écran.`);
