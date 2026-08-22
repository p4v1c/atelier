import { writeFileSync } from "node:fs";
import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
import { normalizeForDedupe } from "../src/lib/tokenize";

type Q = { slug: string; titre: string; matiere: string; question: string; reponse: string };
const questions: Q[] = [];
for (const lecon of chargerContenuCultureG())
  for (const s of lecon.skills)
    for (const e of s.exercises) {
      const p: any = e.payload;
      if (!p?.question || !Array.isArray(p.choices)) continue;
      questions.push({ slug: s.slug, titre: s.title, matiere: s.category, question: p.question, reponse: String(p.choices[p.answerIndex] ?? "") });
    }

const parReponse = new Map<string, Q[]>();
for (const q of questions) {
  const k = normalizeForDedupe(q.reponse);
  if (k.length < 3) continue;
  (parReponse.get(k) ?? parReponse.set(k, []).get(k)!).push(q);
}

const mots = (s: string) => new Set(normalizeForDedupe(s).split(/\s+/).filter((m) => m.length > 3));
function jac(a: Set<string>, b: Set<string>) { let i = 0; for (const x of a) if (b.has(x)) i++; return i / (a.size + b.size - i || 1); }

type Paire = { score: number; a: Q; b: Q; classe: string };
const paires: Paire[] = [];
for (const liste of parReponse.values()) {
  if (liste.length < 2) continue;
  for (let i = 0; i < liste.length; i++)
    for (let j = i + 1; j < liste.length; j++) {
      const a = liste[i]!, b = liste[j]!;
      const s = jac(mots(a.question), mots(b.question));
      if (s < 0.5) continue;
      const classe = a.slug === b.slug ? "MEME-NOTION" : a.matiere === b.matiere ? "meme-matiere" : "inter-matiere";
      paires.push({ score: s, a, b, classe });
    }
}
paires.sort((x, y) => (x.classe === "MEME-NOTION" ? -1 : y.classe === "MEME-NOTION" ? 1 : y.score - x.score));

const compte = { "MEME-NOTION": 0, "meme-matiere": 0, "inter-matiere": 0 } as any;
for (const p of paires) compte[p.classe]++;
console.log(`paires (même bonne réponse, question proche ≥ 50 %) : ${paires.length}`);
console.log(compte);
console.log(`  dont ≥ 80 % : ${paires.filter((p) => p.score >= 0.8).length}`);

const lignes = paires.map((p) => `[${p.classe}] ${Math.round(p.score * 100)}%\n  ${p.a.slug} (${p.a.matiere}) — ${p.a.question}  → ${p.a.reponse}\n  ${p.b.slug} (${p.b.matiere}) — ${p.b.question}  → ${p.b.reponse}`);
writeFileSync(".travail/paires.txt", lignes.join("\n\n"), "utf8");
console.log("\n→ .travail/paires.txt");
console.log("\n=== MÊME NOTION ===");
paires.filter((p) => p.classe === "MEME-NOTION").forEach((p) => console.log(`  ${Math.round(p.score*100)}%  ${p.a.slug}\n     A: ${p.a.question}\n     B: ${p.b.question}\n     → ${p.a.reponse}`));
