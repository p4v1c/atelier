/**
 * Repère les notions écrites ici dont les sujets se recoupent entre elles.
 *
 * Le validateur garantit qu'aucune question n'est en double, et
 * recouvrements.ts compare les sujets aux leçons héritées. Restait un angle
 * mort : deux notions du corpus neuf traitant le même thème dans deux lots
 * différents. On compare ici leurs titres, en pondérant les mots par leur
 * rareté, et on signale les paires au-dessus du seuil.
 *
 *     npx tsx prisma/seed/culture-g/cours/doublons-internes.ts
 *     npx tsx prisma/seed/culture-g/cours/doublons-internes.ts 0.6
 */
import { chargerContenuCultureG } from "../../../../src/modules/culture-g/contenu";

const SEUIL = Number(process.argv[2] ?? 0.75);
const VIDES = new Set("les des du de la le l d et en un une au aux dans sur son sa ses leur par pour a ce cette qui que ou".split(" "));
const mots = (s: string) =>
  [...new Set(
    s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z ]/g, " ")
      .split(/\s+/).filter((m) => m.length > 2 && !VIDES.has(m))
  )];

const neuves = (chargerContenuCultureG().find((l) => l.id === "cg-neuf")?.skills ?? []).map((s) => ({
  slug: s.slug.replace(/^cg-neuf-/, ""),
  titre: s.title,
  cat: s.category,
  m: mots(s.title),
}));

const freq = new Map<string, number>();
for (const e of neuves) for (const m of e.m) freq.set(m, (freq.get(m) ?? 0) + 1);
const poids = (m: string) => 1 / Math.log2(2 + (freq.get(m) ?? 1));

const paires: { s: number; a: (typeof neuves)[0]; b: (typeof neuves)[0] }[] = [];
for (let i = 0; i < neuves.length; i++) {
  for (let j = i + 1; j < neuves.length; j++) {
    const a = neuves[i]!;
    const b = neuves[j]!;
    if (a.cat !== b.cat) continue;
    const communs = a.m.filter((x) => b.m.includes(x));
    if (communs.length < 2) continue;
    const num = communs.reduce((t, m) => t + poids(m), 0);
    const den = Math.min(a.m.reduce((t, m) => t + poids(m), 0), b.m.reduce((t, m) => t + poids(m), 0));
    if (num / den >= SEUIL) paires.push({ s: num / den, a, b });
  }
}

paires.sort((x, y) => y.s - x.s);
console.log(`sujets qui se recoupent entre eux (seuil ${SEUIL}) : ${paires.length}\n`);
for (const p of paires)
  console.log(`  ${(p.s * 100).toFixed(0)}%  [${p.a.cat}]\n     ${p.a.titre}  [${p.a.slug}]\n     ${p.b.titre}  [${p.b.slug}]`);
