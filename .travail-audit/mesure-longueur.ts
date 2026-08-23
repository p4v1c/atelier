/** La bonne réponse est-elle la plus longue ? Le taux de réussite d'un tricheur. */
import { MODULES } from "../src/modules";
import { contenuDe } from "../src/modules/contenu";

for (const m of MODULES) {
  const par: Record<string, { n: number; plusLongue: number; gagne: number; ecart: number }> = {};
  for (const b of contenuDe(m))
    for (const s of b.skills)
      for (const e of s.exercises) {
        const p = e.payload as { choices?: string[]; answerIndex?: number };
        if (!p.choices || typeof p.answerIndex !== "number") continue;
        const src = s.slug.startsWith("cg-neuf-") ? "écrit ici" : s.slug.startsWith("cg-libre") ? "libre" : "héritage";
        const a = (par[src] ??= { n: 0, plusLongue: 0, gagne: 0, ecart: 0 });
        a.n++;
        const longueurs = p.choices.map((c) => c.length);
        const max = Math.max(...longueurs);
        const bonne = longueurs[p.answerIndex]!;
        // strictement la plus longue
        if (bonne === max && longueurs.filter((l) => l === max).length === 1) a.plusLongue++;
        // ce que gagne quelqu'un qui coche toujours la plus longue (au hasard en cas d'égalité)
        const exaequo = longueurs.filter((l) => l === max).length;
        if (bonne === max) a.gagne += 1 / exaequo;
        const autres = longueurs.filter((_, i) => i !== p.answerIndex);
        a.ecart += bonne - autres.reduce((x, y) => x + y, 0) / autres.length;
      }
  const total = Object.values(par).reduce((n, a) => n + a.n, 0);
  if (!total) continue;
  console.log(`\n${m.id} — ${total} questions à choix`);
  for (const [src, a] of Object.entries(par))
    console.log(
      `  ${src.padEnd(10)} ${String(a.n).padStart(5)} q · la plus longue dans ${((a.plusLongue / a.n) * 100).toFixed(1).padStart(5)} % · ` +
        `« toujours la plus longue » gagne ${((a.gagne / a.n) * 100).toFixed(1).padStart(5)} % · écart moyen ${(a.ecart / a.n).toFixed(0).padStart(4)} caractères`
    );
}
