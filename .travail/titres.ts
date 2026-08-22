import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
const n = chargerContenuCultureG().flatMap((l) => l.skills);
for (const s of process.argv.slice(2)) {
  const x = n.find((y) => y.slug === s || y.slug === `cg-neuf-${s}`);
  console.log(x ? `${s}\n   « ${x.title} » — ${x.statement}` : `${s} INTROUVABLE`);
}
