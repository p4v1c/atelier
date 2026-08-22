import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
const n = chargerContenuCultureG().flatMap((l) => l.skills);
for (const s of process.argv.slice(2)) {
  const x: any = n.find((y) => y.slug === `cg-neuf-${s}`);
  console.log(`${s} « ${x.title} »`);
  x.lesson?.sections.forEach((sec: any) => console.log("   · " + sec.titre));
}
