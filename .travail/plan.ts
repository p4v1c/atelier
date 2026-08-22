import { readFileSync, globSync, writeFileSync } from "node:fs";
import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
import { normalizeForDedupe } from "../src/lib/tokenize";

const mesFichiers = globSync("prisma/seed/culture-g/**/*.ts").map((f) => ({ f, s: readFileSync(f, "utf8") }));
const volume = (f: string) => Number((f.match(/-(\d)\.ts$/) || [])[1] ?? 1);
const source = (q: string) => mesFichiers.find((x) => x.s.includes(q))?.f ?? null;

type Q = { slug: string; matiere: string; question: string; reponse: string };
const questions: Q[] = [];
for (const l of chargerContenuCultureG())
  for (const s of l.skills)
    for (const e of s.exercises) {
      const p: any = e.payload;
      if (p?.question && Array.isArray(p.choices))
        questions.push({ slug: s.slug, matiere: s.category, question: p.question, reponse: String(p.choices[p.answerIndex] ?? "") });
    }

const parRep = new Map<string, Q[]>();
for (const q of questions) { const k = normalizeForDedupe(q.reponse); if (k.length >= 3) (parRep.get(k) ?? parRep.set(k, []).get(k)!).push(q); }
const mots = (s: string) => new Set(normalizeForDedupe(s).split(/\s+/).filter((m) => m.length > 3));
const jac = (a: Set<string>, b: Set<string>) => { let i = 0; for (const x of a) if (b.has(x)) i++; return i / (a.size + b.size - i || 1); };

const aSupprimer = new Set<string>();
const garde: string[] = [];
for (const liste of parRep.values())
  for (let i = 0; i < liste.length; i++)
    for (let j = i + 1; j < liste.length; j++) {
      const a = liste[i]!, b = liste[j]!;
      if (a.slug === b.slug) continue;
      if (jac(mots(a.question), mots(b.question)) < 0.8) continue;
      if (aSupprimer.has(a.question) || aSupprimer.has(b.question)) continue;
      const fa = source(a.question), fb = source(b.question);
      let victime: Q | null = null;
      if (fa && fb) victime = volume(fb) >= volume(fa) ? b : a;      // les deux sont à moi : le volume le plus récent cède
      else if (fb) victime = b;                                      // l'autre vient du cahier d'origine : on garde le cahier
      else if (fa) victime = a;
      if (!victime) { garde.push(`  (deux fois dans le cahier d'origine) ${a.slug} · ${a.question}`); continue; }
      aSupprimer.add(victime.question);
    }

console.log(`à supprimer : ${aSupprimer.size}`);
console.log(`laissées telles quelles (cahier d'origine des deux côtés) : ${garde.length}`);
garde.forEach((g) => console.log(g));
writeFileSync(".travail/a-supprimer-2.json", JSON.stringify([...aSupprimer], null, 1), "utf8");
