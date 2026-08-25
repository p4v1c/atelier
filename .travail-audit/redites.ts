/**
 * npx tsx .travail-audit/redites.ts — la correction avale le mot d'à côté.
 *
 * « Il attend [que] il réponde » corrigé en « qu'il » laisse le « il » en place :
 * « qu'il il réponde ». Le validateur repère déjà le cas où la correction se
 * termine par le mot suivant tout entier ; il ne voit pas celui où le mot est
 * accroché par une élision (« qu'il », « n'a », « vis-à-vis »).
 *
 * On découpe donc la correction sur les espaces, les apostrophes et les traits
 * d'union, et on compare ses extrémités aux tokens voisins.
 */
import { loadAllBatches } from "../prisma/seed/index";
import { parseMarkedSentence, tokenize } from "../src/lib/tokenize";

const nu = (m: string | undefined) => m?.toLowerCase().replace(/[.,;:!?»«"]/g, "");
const morceler = (s: string) => s.split(/[\s'’-]+/).filter(Boolean).map((m) => nu(m)!);

let n = 0;
for (const batch of loadAllBatches()) {
  for (const regle of batch.rules) {
    for (const phrase of regle.sentences) {
      if (phrase.fix === null || phrase.fix === "à supprimer") continue;
      const parsed = parseMarkedSentence(phrase.marked);
      const tokens = tokenize(parsed.text);
      const i = parsed.faultyTokenIndex;
      const bouts = morceler(phrase.fix);
      if (bouts.length < 2) continue;
      const suivant = nu(tokens[i + 1]?.word);
      const precedent = nu(tokens[i - 1]?.word);
      const raisons: string[] = [];
      if (suivant && bouts[bouts.length - 1] === suivant) raisons.push(`« ${suivant} » juste après`);
      if (precedent && bouts[0] === precedent) raisons.push(`« ${precedent} » juste avant`);
      if (raisons.length === 0) continue;
      const parts = parsed.text.split(" ");
      const c = tokens[i]!;
      parts[i] = `${c.before}${phrase.fix}${c.after}`;
      n++;
      console.log(`${regle.slug} — ${raisons.join(", ")}\n  ✗ ${phrase.marked}\n  → ${parts.join(" ")}`);
    }
  }
}
console.log(`\n${n} correction(s) qui répètent un mot voisin.`);
