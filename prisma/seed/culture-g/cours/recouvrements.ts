/**
 * Repère les notions écrites ici dont le SUJET recoupe une leçon héritée.
 *
 * Le validateur garantit qu'aucune question n'est en double ; il ne dit rien
 * des sujets. Deux chapitres distincts sur le même thème se voient pourtant
 * immédiatement au catalogue. Ce script compare les titres en pondérant les
 * mots par leur rareté, et signale les appariements au-dessus de 70 %.
 *
 *     npx tsx prisma/seed/culture-g/cours/recouvrements.ts
 */
import { chargerContenuCultureG } from "../../../../src/modules/culture-g/contenu";

const VIDES = new Set("les des du de la le l d et en un une au aux dans sur son sa ses leur par pour a the ses ce cette qui que quoi ou".split(" "));
const mots = (s: string) =>
  [...new Set(s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z ]/g, " ")
    .split(/\s+/).filter((m) => m.length > 2 && !VIDES.has(m)))];

type E = { slug: string; titre: string; cat: string; m: string[] };
const herite: E[] = [], neuf: E[] = [];
for (const lot of chargerContenuCultureG())
  for (const s of lot.skills) {
    const e = { slug: s.slug, titre: s.title, cat: s.category, m: mots(s.title) };
    (s.slug.startsWith("cg-neuf-") ? neuf : herite).push(e);
  }

// poids d'un mot : rare = discriminant
const freq = new Map<string, number>();
for (const e of [...herite, ...neuf]) for (const m of e.m) freq.set(m, (freq.get(m) ?? 0) + 1);
const poids = (m: string) => 1 / Math.log2(2 + (freq.get(m) ?? 1));

const paires: { s: number; n: E; h: E; communs: string[] }[] = [];
for (const n of neuf) for (const h of herite) {
  if (n.cat !== h.cat) continue;
  const communs = n.m.filter((x) => h.m.includes(x));
  if (communs.length < 2) continue;
  const num = communs.reduce((a, m) => a + poids(m), 0);
  const den = Math.min(n.m.reduce((a, m) => a + poids(m), 0), h.m.reduce((a, m) => a + poids(m), 0));
  const s = num / den;
  if (s >= 0.7) paires.push({ s, n, h, communs });
}
// garder le meilleur appariement par notion neuve
const best = new Map<string, typeof paires[0]>();
for (const p of paires) {
  const c = best.get(p.n.slug);
  if (!c || p.s > c.s) best.set(p.n.slug, p);
}
const liste = [...best.values()].sort((a, b) => b.s - a.s);
const v1 = liste.filter((p) => !/^cg-neuf-[a-z]+[234]-/.test(p.n.slug)).length;
console.log("notions neuves dont le sujet recoupe fortement une leçon héritée :", liste.length, "/", neuf.length);
console.log("  dont premier lot (cours déjà écrits) :", v1, "· lots suivants :", liste.length - v1, "\n");
for (const p of liste) console.log(`  ${(p.s * 100).toFixed(0)}%  [${p.n.cat}]\n     neuf   : ${p.n.titre}\n     hérité : ${p.h.titre}`);
