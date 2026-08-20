/**
 * npm run tts:prepare — synthétise à l'avance toutes les dictées.
 *
 * Sans cela, la première écoute d'une dictée attend deux à trois secondes.
 * Avec, tout est déjà en cache. Compter une dizaine de minutes et environ
 * 150 Mo pour les 310 dictées à vitesse moyenne.
 *
 *   npm run tts:prepare              # les dictées longues seulement
 *   npm run tts:prepare -- --toutes  # les 310
 */
import { PrismaClient } from "@prisma/client";
import { etatTts, synthetiser } from "../src/lib/server/tts";
import { dictationWords } from "../src/lib/study/dictation";

const etat = etatTts();
if (!etat.disponible) {
  console.error("Aucune voix neuronale installée. Voir « npm run tts:check ».");
  process.exit(1);
}

const toutes = process.argv.includes("--toutes");
const prisma = new PrismaClient();
const dictations = await prisma.dictation.findMany({
  where: { status: "active" },
  select: { id: true, text: true },
});
const cibles = toutes ? dictations : dictations.filter((d) => dictationWords(d.text).length > 25);

console.log(`Voix ${etat.voix} · ${cibles.length} dictées à préparer`);
const debut = Date.now();
let fait = 0;
for (const d of cibles) {
  await synthetiser(d.text, "moyen");
  fait++;
  if (fait % 10 === 0 || fait === cibles.length) {
    const parSeconde = fait / ((Date.now() - debut) / 1000);
    const reste = Math.round((cibles.length - fait) / parSeconde);
    process.stdout.write(`\r${fait}/${cibles.length} · encore ${reste} s   `);
  }
}
console.log(`\nTerminé en ${Math.round((Date.now() - debut) / 1000)} s.`);
await prisma.$disconnect();
