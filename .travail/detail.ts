import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
import { normalizeForDedupe } from "../src/lib/tokenize";
type B = { slug: string; section: string; texte: string };
const blocs: B[] = [];
for (const l of chargerContenuCultureG())
  for (const s of l.skills)
    for (const sec of ((s as any).lesson?.sections ?? []))
      for (const par of String(sec.texte).split(/\n\s*\n/)) {
        const t = par.trim();
        if (t.length >= 80) blocs.push({ slug: s.slug, section: sec.titre, texte: t });
      }
const sh = (t: string, n = 5) => { const m = normalizeForDedupe(t).split(/\s+/); const s = new Set<string>(); for (let i = 0; i + n <= m.length; i++) s.add(m.slice(i, i + n).join(" ")); return s; };
const e = blocs.map((b) => ({ b, s: sh(b.texte) }));
const idx = new Map<string, number[]>();
e.forEach((x, i) => x.s.forEach((k) => (idx.get(k) ?? idx.set(k, []).get(k)!).push(i)));
const vus = new Set<string>(); let n = 0;
for (const liste of idx.values()) {
  if (liste.length < 2 || liste.length > 40) continue;
  for (let i = 0; i < liste.length; i++) for (let j = i + 1; j < liste.length; j++) {
    const [x, y] = [liste[i]!, liste[j]!]; const k = `${x}-${y}`;
    if (vus.has(k)) continue; vus.add(k);
    if (e[x]!.b.slug === e[y]!.b.slug) continue;
    let inter = 0; for (const s of e[x]!.s) if (e[y]!.s.has(s)) inter++;
    const score = inter / Math.min(e[x]!.s.size, e[y]!.s.size);
    if (score < 0.3) continue;
    console.log(`\n${"=".repeat(78)}\n${Math.round(score*100)}%  ${e[x]!.b.slug} / ${e[x]!.b.section}   ↔   ${e[y]!.b.slug} / ${e[y]!.b.section}`);
    console.log(`--- A ---\n${e[x]!.b.texte}\n--- B ---\n${e[y]!.b.texte}`);
    n++;
  }
}
console.log(`\n${n} paires`);
