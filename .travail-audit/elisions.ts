/**
 * npx tsx .travail-audit/elisions.ts — traque le piège d'élision.
 *
 * « ne l'[a] découragé » : le token marqué est « l'a » tout entier, pas le seul
 * « a ». La correction remplace donc le pronom ou la négation en même temps que
 * le verbe, et la phrase corrigée perd un mot : « ne ont découragé ».
 *
 * On signale toute phrase dont le mot marqué porte un préfixe élidé (l', n',
 * qu', d', s', j', m', t', c') que la correction ne reprend pas.
 */
import { loadAllBatches } from "../prisma/seed/index";
import { parseMarkedSentence, tokenize } from "../src/lib/tokenize";

const PREFIXE = /^([ldnqsjmtc]')/i;
let n = 0;
for (const batch of loadAllBatches()) {
  for (const regle of batch.rules) {
    for (const phrase of regle.sentences) {
      if (phrase.fix === null || phrase.fix === "à supprimer") continue;
      const parsed = parseMarkedSentence(phrase.marked);
      const cible = tokenize(parsed.text)[parsed.faultyTokenIndex];
      if (!cible) continue;
      const m = cible.word.match(PREFIXE);
      if (!m) continue;
      // Un fix qui porte lui-même une élision remplace le préfixe à dessein
      // (« c'est » → « s'est ») : ce n'est pas le piège.
      if (/^[a-zà-ÿ]'/i.test(phrase.fix)) continue;
      // Le piège n'existe que si le préfixe devait rester : il ne reste que
      // devant une voyelle ou un h. « n'y » → « ni », « d'en » → « dans » sont
      // des homophones dont le token entier est la faute.
      if (!/^[aàâeéèêëiîïoôuûùyhAÀÂEÉÈÊËIÎÏOÔUÛÙYH]/.test(phrase.fix)) continue;
      const parts = parsed.text.split(" ");
      parts[parsed.faultyTokenIndex] = `${cible.before}${phrase.fix}${cible.after}`;
      n++;
      console.log(`${regle.slug}\n  ✗ ${phrase.marked}\n  → ${parts.join(" ")}`);
    }
  }
}
console.log(`\n${n} phrase(s) où l'élision est emportée par la correction.`);
console.log(
  "Reste attendu : 1. « laisser au [l'hasard] » — ici l'élision fautive fait\n" +
  "partie de la faute (h aspiré), la correction doit bien la retirer.",
);
