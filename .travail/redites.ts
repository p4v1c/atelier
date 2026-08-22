/** Redites dans les cours : paragraphes quasi identiques, et formules trop répétées. */
import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
import { normalizeForDedupe } from "../src/lib/tokenize";

type Bloc = { slug: string; titre: string; section: string; texte: string };
const blocs: Bloc[] = [];
for (const l of chargerContenuCultureG())
  for (const s of l.skills)
    for (const sec of ((s as any).lesson?.sections ?? []))
      for (const par of String(sec.texte).split(/\n\s*\n/)) {
        const t = par.trim();
        if (t.length >= 80) blocs.push({ slug: s.slug, titre: s.title, section: sec.titre, texte: t });
      }

console.log(`${blocs.length} paragraphes de cours`);

/* quasi-doublons par empreintes de 5 mots */
const shingles = (t: string, n = 5) => {
  const m = normalizeForDedupe(t).split(/\s+/);
  const s = new Set<string>();
  for (let i = 0; i + n <= m.length; i++) s.add(m.slice(i, i + n).join(" "));
  return s;
};
const emp = blocs.map((b) => ({ b, s: shingles(b.texte) }));
const index = new Map<string, number[]>();
emp.forEach((x, i) => x.s.forEach((sh) => (index.get(sh) ?? index.set(sh, []).get(sh)!).push(i)));

const vus = new Set<string>();
const paires: { score: number; a: Bloc; b: Bloc }[] = [];
for (const liste of index.values()) {
  if (liste.length < 2 || liste.length > 40) continue;
  for (let i = 0; i < liste.length; i++)
    for (let j = i + 1; j < liste.length; j++) {
      const [x, y] = [liste[i]!, liste[j]!];
      const k = `${x}-${y}`;
      if (vus.has(k)) continue;
      vus.add(k);
      if (emp[x]!.b.slug === emp[y]!.b.slug) continue;
      let inter = 0;
      for (const sh of emp[x]!.s) if (emp[y]!.s.has(sh)) inter++;
      const score = inter / Math.min(emp[x]!.s.size, emp[y]!.s.size);
      if (score >= 0.3) paires.push({ score, a: emp[x]!.b, b: emp[y]!.b });
    }
}
paires.sort((p, q) => q.score - p.score);
console.log(`\nparagraphes se recoupant à 30 % ou plus entre deux cours : ${paires.length}`);
paires.slice(0, 25).forEach((p) => {
  console.log(`\n  ${Math.round(p.score * 100)}%  ${p.a.slug} / ${p.a.section}   ↔   ${p.b.slug} / ${p.b.section}`);
  console.log(`     A « ${p.a.texte.slice(0, 190)} »`);
  console.log(`     B « ${p.b.texte.slice(0, 190)} »`);
});

/* formules trop fréquentes */
const phrases = new Map<string, Set<string>>();
for (const b of blocs)
  for (const ph of b.texte.split(/(?<=[.!?…])\s+/)) {
    const n = normalizeForDedupe(ph);
    if (n.split(" ").length < 6) continue;
    (phrases.get(n) ?? phrases.set(n, new Set()).get(n)!).add(b.slug);
  }
const tics = [...phrases.entries()].filter(([, s]) => s.size > 1).sort((a, b) => b[1].size - a[1].size);
console.log(`\n\nphrases entières réemployées dans plusieurs cours : ${tics.length}`);
tics.slice(0, 15).forEach(([p, s]) => console.log(`  ${s.size}×  « ${p.slice(0, 120)} »  → ${[...s].join(", ")}`));

/* amorces de section répétées */
const amorces = new Map<string, string[]>();
for (const b of blocs) {
  const a = normalizeForDedupe(b.texte).split(/\s+/).slice(0, 6).join(" ");
  (amorces.get(a) ?? amorces.set(a, []).get(a)!).push(b.slug);
}
const amorcesRep = [...amorces.entries()].filter(([, v]) => new Set(v).size >= 3).sort((a, b) => b[1].length - a[1].length);
console.log(`\namorces de paragraphe identiques sur six mots, dans 3 cours ou plus : ${amorcesRep.length}`);
amorcesRep.slice(0, 12).forEach(([a, v]) => console.log(`  ${v.length}×  « ${a} … »`));
