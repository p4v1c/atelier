/**
 * npx tsx .travail-audit/reparer-elisions.ts — écrit sur la sortie standard le
 * plan JSON de réparation du piège d'élision : la correction reprend le
 * préfixe élidé du mot marqué (« sous l'[egide] » → fix « l'égide »).
 */
import { loadAllBatches } from "../prisma/seed/index";
import { parseMarkedSentence, tokenize } from "../src/lib/tokenize";

const PREFIXE = /^([ldnqsjmtc]')/i;
const VOYELLE = /^[aàâeéèêëiîïoôuûùyhAÀÂEÉÈÊËIÎÏOÔUÛÙYH]/;
const paires: [string, string][] = [];
for (const batch of loadAllBatches()) {
  for (const regle of batch.rules) {
    for (const phrase of regle.sentences) {
      if (phrase.fix === null || phrase.fix === "à supprimer") continue;
      const parsed = parseMarkedSentence(phrase.marked);
      const cible = tokenize(parsed.text)[parsed.faultyTokenIndex];
      if (!cible) continue;
      const m = cible.word.match(PREFIXE);
      if (!m) continue;
      if (/^[a-zà-ÿ]'/i.test(phrase.fix)) continue;
      if (!VOYELLE.test(phrase.fix)) continue;
      paires.push([
        `{ marked: ${JSON.stringify(phrase.marked)}, fix: ${JSON.stringify(phrase.fix)} }`,
        `{ marked: ${JSON.stringify(phrase.marked)}, fix: ${JSON.stringify(m[1] + phrase.fix)} }`,
      ]);
    }
  }
}
console.log(JSON.stringify(paires, null, 0));
