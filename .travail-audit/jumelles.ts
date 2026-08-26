/**
 * Les questions jumelles : deux fois le même fait dans une même notion.
 *
 * Le dédoublonnage de `contenu.ts` refuse deux questions dont l'énoncé est
 * identique, et deux questions dont l'énoncé et la réponse se recouvrent
 * fortement. Il ne voit pas la paire que les fusions fabriquent : une notion
 * écrite ici et une leçon héritée posent le même fait avec des mots
 * différents — « Que se passe-t-il en 70 de notre ère à Jérusalem ? » et
 * « Quel événement de l'an 70 transforme profondément le judaïsme ? ».
 *
 * On les repère par la bonne réponse, pas par l'énoncé : deux formulations
 * d'une même question divergent, mais la réponse dit le même fait.
 *
 *   npx tsx .travail-audit/jumelles.ts            toutes les paires
 *   npx tsx .travail-audit/jumelles.ts geo        celles d'un domaine
 */
import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
import { normalizeForDedupe } from "../src/lib/tokenize";
import type { QcmPayload } from "../src/modules/kinds/qcm";

const motif = process.argv[2];

const MOTS_VIDES = new Set(
  ("le la les un une des du de d a à au aux et ou en dans sur pour par avec sans " +
    "que qui quoi dont ce cet cette ces son sa ses leur leurs il elle ils elles on " +
    "est sont etre avoir plus moins tres tout tous toute toutes lui y se ne pas").split(/\s+/),
);

const mots = (texte: string) =>
  new Set(
    normalizeForDedupe(texte)
      .split(/\s+/)
      .filter((m) => m.length > 2 && !MOTS_VIDES.has(m)),
  );

const communs = (a: Set<string>, b: Set<string>) => {
  let n = 0;
  for (const m of a) if (b.has(m)) n++;
  return n;
};
const recouvrement = (a: Set<string>, b: Set<string>) =>
  communs(a, b) / (a.size + b.size - communs(a, b) || 1);

let paires = 0;
const parNotion: string[] = [];

for (const lot of chargerContenuCultureG()) {
  for (const notion of lot.skills) {
    if (motif && !notion.slug.includes(motif)) continue;
    const qs = notion.exercises
      .map((ex) => ex.payload as QcmPayload)
      .filter((p) => Array.isArray(p.choices) && p.answerIndex !== undefined)
      .map((p) => ({
        question: p.question,
        reponse: p.choices[p.answerIndex] ?? "",
        rep: mots(p.choices[p.answerIndex] ?? ""),
        enonce: mots(p.question),
      }));

    const trouvees: string[] = [];
    for (let i = 0; i < qs.length; i++) {
      for (let j = i + 1; j < qs.length; j++) {
        const a = qs[i]!;
        const b = qs[j]!;
        // Deux réponses qui disent la même chose, sous des énoncés qui ne se
        // ressemblent pas assez pour que le dédoublonnage les ait vues.
        const memeReponse = a.rep.size >= 2 && recouvrement(a.rep, b.rep) >= 0.6;
        const memeFait = recouvrement(a.enonce, b.enonce) >= 0.3;
        if (!memeReponse && !(memeFait && recouvrement(a.rep, b.rep) >= 0.4)) continue;
        trouvees.push(
          `    « ${a.question} »\n      → ${a.reponse}\n` +
            `    « ${b.question} »\n      → ${b.reponse}`,
        );
        paires++;
      }
    }
    if (trouvees.length) {
      parNotion.push(`\n═══ ${notion.slug} — ${trouvees.length} paire(s)\n${trouvees.join("\n")}`);
    }
  }
}

console.log(parNotion.join("\n"));
console.log(`\n${paires} paire(s) dans ${parNotion.length} notion(s)`);
