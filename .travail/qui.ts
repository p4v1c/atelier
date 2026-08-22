import { readFileSync, globSync } from "node:fs";
import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
import { normalizeForDedupe } from "../src/lib/tokenize";

const fichiers = [...globSync("prisma/seed/culture-g/**/*.ts"), ...globSync("heritage/culture-g/data/*.json")].map((f) => ({ f, s: readFileSync(f, "utf8") }));
const source = (q: string) => fichiers.filter((x) => x.s.includes(q)).map((x) => x.f).join(",") || "?";

type Q = { slug: string; matiere: string; question: string; reponse: string; nbNotion: number };
const questions: Q[] = [];
for (const l of chargerContenuCultureG())
  for (const s of l.skills)
    for (const e of s.exercises) {
      const p: any = e.payload;
      if (!p?.question || !Array.isArray(p.choices)) continue;
      questions.push({ slug: s.slug, matiere: s.category, question: p.question, reponse: String(p.choices[p.answerIndex] ?? ""), nbNotion: s.exercises.length });
    }

const parRep = new Map<string, Q[]>();
for (const q of questions) { const k = normalizeForDedupe(q.reponse); if (k.length < 3) continue; (parRep.get(k) ?? parRep.set(k, []).get(k)!).push(q); }
const mots = (s: string) => new Set(normalizeForDedupe(s).split(/\s+/).filter((m) => m.length > 3));
const jac = (a: Set<string>, b: Set<string>) => { let i = 0; for (const x of a) if (b.has(x)) i++; return i / (a.size + b.size - i || 1); };

const seuil = Number(process.argv[2] ?? 0.5);
const classe = process.argv[3] ?? "MEME-NOTION";
for (const liste of parRep.values())
  for (let i = 0; i < liste.length; i++)
    for (let j = i + 1; j < liste.length; j++) {
      const a = liste[i]!, b = liste[j]!, s = jac(mots(a.question), mots(b.question));
      if (s < seuil) continue;
      const c = a.slug === b.slug ? "MEME-NOTION" : a.matiere === b.matiere ? "meme-matiere" : "inter-matiere";
      if (classe !== "tout" && c !== classe) continue;
      console.log(`${Math.round(s * 100)}% ${a.slug} [${a.nbNotion}q]`);
      console.log(`   A ${a.question}   « ${source(a.question)} »`);
      console.log(`   B ${b.question}   « ${source(b.question)} »`);
      console.log(`   → ${a.reponse}`);
    }
