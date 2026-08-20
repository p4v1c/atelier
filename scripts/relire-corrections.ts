/**
 * npm run relire — applique la correction à chaque phrase fautive et met en
 * évidence celles dont le résultat risque de ne rien vouloir dire.
 *
 * Le validateur vérifie la forme : un seul marqueur, une correction non vide,
 * une position variée. Il ne peut pas vérifier que « dans l'attente [que] vous
 * me répondiez » corrigé en « de » donne une phrase française — ça, il faut le
 * lire. Ce script réduit les 3 600 phrases fautives à la centaine qui mérite
 * une relecture humaine.
 */
import { loadAllBatches } from "../prisma/seed/index";
import { parseMarkedSentence, tokenize } from "../src/lib/tokenize";

/** Mots outils : c'est là que la substitution en place déraille le plus souvent. */
const OUTILS = new Set([
  "que", "qu'", "de", "d'", "à", "a", "en", "y", "le", "la", "les", "du", "des",
  "ce", "se", "ne", "n'", "ni", "si", "ou", "où", "au", "aux", "un", "une",
  "pour", "par", "dans", "sur", "avec", "sans", "leur", "lui", "il", "elle",
]);

const bas = (m: string) => m.toLowerCase().replace(/[.,;:!?»«"]/g, "");

type Suspecte = { motif: string; regle: string; avant: string; apres: string };
const suspectes: Suspecte[] = [];
let total = 0;

for (const batch of loadAllBatches()) {
  for (const regle of batch.rules) {
    for (const phrase of regle.sentences) {
      // « à supprimer » est une convention d'affichage, pas un remplacement.
      if (phrase.fix === null || phrase.fix === "à supprimer") continue;
      total++;
      const parsed = parseMarkedSentence(phrase.marked);
      const tokens = tokenize(parsed.text);
      const cible = tokens[parsed.faultyTokenIndex];
      if (!cible) continue;

      const parts = parsed.text.split(" ");
      parts[parsed.faultyTokenIndex] = `${cible.before}${phrase.fix}${cible.after}`;
      const corrigee = parts.join(" ");

      const motMarque = bas(cible.word);
      const motFix = bas(phrase.fix);

      // Deux mots outils différents échangés : la phrase peut devenir bancale.
      if (OUTILS.has(motMarque) && OUTILS.has(motFix) && motMarque !== motFix) {
        suspectes.push({ motif: "outil→outil", regle: regle.slug, avant: phrase.marked, apres: corrigee });
        continue;
      }
      // Un mot outil remplacé par un groupe : la suite de la phrase doit suivre.
      if ((OUTILS.has(motMarque) || OUTILS.has(motFix)) && phrase.fix.includes(" ")) {
        suspectes.push({ motif: "outil→groupe", regle: regle.slug, avant: phrase.marked, apres: corrigee });
        continue;
      }
      // Une correction de plusieurs mots change la structure de la phrase.
      if (phrase.fix.split(" ").length >= 3) {
        suspectes.push({ motif: "groupe long", regle: regle.slug, avant: phrase.marked, apres: corrigee });
      }
    }
  }
}

console.log(`${total} phrases fautives · ${suspectes.length} à relire\n`);
const parMotif: Record<string, Suspecte[]> = {};
for (const s of suspectes) (parMotif[s.motif] ??= []).push(s);
for (const [motif, liste] of Object.entries(parMotif)) {
  console.log(`\n═══ ${motif} — ${liste.length} ═══`);
  for (const s of liste) console.log(`${s.regle}\n  ✗ ${s.avant}\n  → ${s.apres}`);
}
