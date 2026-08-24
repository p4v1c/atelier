import { MODULES } from "../src/modules";
import { contenuDe } from "../src/modules/contenu";

const m = MODULES.find((x) => x.id === "culture-g")!;
const out: any[] = [];
for (const b of contenuDe(m)) {
  for (const s of b.skills) {
    if (s.category !== "Sport") continue;
    out.push({
      batch: b.id,
      slug: s.slug,
      title: s.title,
      tip: s.tip,
      nb: s.exercises.length,
      ex: s.exercises.map((e: any) => {
        const p = e.payload;
        return { q: p.question, choix: p.choices, bonne: p.answerIndex, exp: p.explanation ?? p.explication };
      }),
    });
  }
}
console.log(JSON.stringify(out, null, 1));
