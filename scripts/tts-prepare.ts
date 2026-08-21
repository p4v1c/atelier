/**
 * npm run tts:prepare — synthétise à l'avance ce qui se lit à voix haute.
 *
 * Sans cela, la première écoute attend plusieurs secondes : Piper recharge son
 * modèle à chaque appel, et un modèle « high » pèse une centaine de mégaoctets.
 * Une fois en cache, la lecture est immédiate.
 *
 *   npm run tts:prepare                    # dictées longues + tous les exercices
 *   npm run tts:prepare -- --toutes        # toutes les dictées aussi
 *   npm run tts:prepare -- --module=anglais
 *   npm run tts:prepare -- --dictees       # les dictées seulement
 */
import { PrismaClient } from "@prisma/client";
import { etatTts, synthetiserLot, voixDisponiblePour } from "../src/lib/server/tts";
import { dictationWords } from "../src/lib/study/dictation";

const etat = etatTts();
if (!etat.disponible) {
  console.error("Aucune voix neuronale installée. Voir « npm run tts:check ».");
  process.exit(1);
}

const toutes = process.argv.includes("--toutes");
const dicteesSeules = process.argv.includes("--dictees");
const exercicesSeuls = process.argv.includes("--exercices");
const moduleVoulu = process.argv.find((a) => a.startsWith("--module="))?.slice("--module=".length);

const prisma = new PrismaClient();

/** Ce qu'il y a à synthétiser : un texte, une langue, et de quoi le nommer. */
type Cible = { texte: string; langue: string; quoi: string };

const cibles: Cible[] = [];

/* ── dictées ── */
if (!exercicesSeuls) {
  const dictations = await prisma.dictation.findMany({
    where: { status: "active", ...(moduleVoulu ? { moduleId: moduleVoulu } : {}) },
    select: { text: true, voice: true, moduleId: true },
  });
  for (const d of dictations) {
    // Les courtes se synthétisent vite au vol ; les longues font attendre.
    if (!toutes && dictationWords(d.text).length <= 25) continue;
    cibles.push({ texte: d.text, langue: d.voice, quoi: `dictée ${d.moduleId}` });
  }
}

/* ── exercices parlés ── */
if (!dicteesSeules) {
  const exercices = await prisma.exercise.findMany({
    where: {
      status: { in: ["active", "disputed"] },
      kind: { in: ["flashcard", "ecoute", "prononciation", "traduction"] },
      ...(moduleVoulu ? { skill: { moduleId: moduleVoulu } } : {}),
    },
    select: { kind: true, payload: true, skill: { select: { moduleId: true } } },
  });
  for (const e of exercices) {
    const p = e.payload as { recto?: unknown; verso?: unknown; langue?: unknown };
    // Pour une traduction, le recto est en français : c'est le verso qui se lit.
    const cote = e.kind === "traduction" ? p.verso : p.recto;
    const texte = typeof cote === "string" ? cote.trim() : "";
    const langue = typeof p.langue === "string" ? p.langue : "";
    if (!texte || !langue || !voixDisponiblePour(langue)) continue;
    cibles.push({ texte, langue, quoi: `${e.kind} ${e.skill.moduleId}` });
  }
}

/* Les quatre types d'une même carte partagent souvent le même texte : on ne
   synthétise qu'une fois par couple texte-langue. */
const uniques = new Map<string, Cible>();
for (const c of cibles) uniques.set(`${c.langue}|${c.texte}`, c);
const liste = [...uniques.values()];

const parLangue = new Map<string, number>();
for (const c of liste) parLangue.set(c.langue, (parLangue.get(c.langue) ?? 0) + 1);

console.log(`${liste.length} textes à préparer (${cibles.length} avant dédoublonnage)`);
for (const [l, n] of [...parLangue].sort()) console.log(`  ${l.padEnd(8)} ${n}`);

/* On regroupe par langue : Piper recharge son modèle à chaque lancement, et un
   modèle « high » pèse une centaine de mégaoctets. Un appel par texte demandait
   quarante minutes ; un appel par langue en demande quelques-unes. */
const parLangueTextes = new Map<string, string[]>();
for (const c of liste) {
  (parLangueTextes.get(c.langue) ?? parLangueTextes.set(c.langue, []).get(c.langue)!).push(c.texte);
}

const debut = Date.now();
let total = 0;
for (const [langue, textes] of [...parLangueTextes].sort()) {
  process.stdout.write(`  ${langue.padEnd(8)} `);
  const t0 = Date.now();
  try {
    // Un point tous les dix : écrire à chaque texte remplit les journaux de
    // milliers de lignes pour rien.
    const faits = await synthetiserLot(textes, "moyen", langue, (n) => {
      if (n % 10 === 0) process.stdout.write(`\r  ${langue.padEnd(8)} ${n}/${textes.length}   `);
    });
    total += faits;
    console.log(`\r  ${langue.padEnd(8)} ${faits} écrits en ${Math.round((Date.now() - t0) / 1000)} s   `);
  } catch (e) {
    console.log(`\r  ${langue.padEnd(8)} ÉCHEC : ${e instanceof Error ? e.message : e}`);
  }
}
console.log(`\n${total} fichiers en ${Math.round((Date.now() - debut) / 1000)} s.`);
await prisma.$disconnect();
