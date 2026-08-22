import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
const n = chargerContenuCultureG().flatMap((l) => l.skills);
for (const s of process.argv.slice(2)) {
  const x: any = n.find((y) => y.slug === `cg-neuf-${s}` || y.slug === s);
  const l = x?.lesson;
  console.log(`${s} : ${x.exercises.length} questions · ${l ? l.sections.length + " sections, " + l.sections.reduce((a: number, y: any) => a + y.texte.length, 0) + " signes" : "pas de cours"}`);
}
