import { CG_NEUF } from "./prisma/seed/culture-g";
const prefixe = process.argv[2];
for (const s of CG_NEUF) {
  const slug = s.slug.replace(/^cg-neuf-/, "");
  if (!slug.startsWith(prefixe)) continue;
  if (s.lesson) continue;
  console.log(`\n### ${slug} — ${s.title}`);
  console.log(`> ${s.statement} | ${s.tip}`);
  for (const e of s.exercises) {
    const p = e.payload as any;
    console.log(`- ${p.question} → ${p.choices[p.answerIndex]}`);
  }
}
