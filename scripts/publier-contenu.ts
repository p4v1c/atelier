/**
 * Prépare les pièces jointes d'une publication GitHub : le contenu que
 * l'application ira chercher pour se mettre à jour sans être réinstallée.
 *
 *   npx tsx scripts/exporter-hors-ligne.ts     (d'abord : fige le contenu)
 *   npx tsx scripts/publier-contenu.ts         (ensuite : prépare les pièces)
 *
 * Écrit dans publication/ :
 *   manifeste.json      version, liste des pièces, taille de chacune
 *   modules.json        la liste des matières
 *   contenu-<id>.json   le contenu jouable, une pièce par matière
 *   lecons.json         les 1033 cours en un seul fichier
 *
 * Les cours voyagent groupés et se rangent éclatés dans le téléphone : un
 * téléchargement au lieu de mille, une lecture ciblée au lieu de quinze
 * mégaoctets relus à chaque cours ouvert.
 *
 * Ce script NE PUBLIE RIEN. Il imprime la commande à lancer — publier est une
 * décision, pas un effet de bord.
 */
import { mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const SOURCE = join(process.cwd(), "public", "hors-ligne");
const CIBLE = join(process.cwd(), "publication");

type Piece = { chemin: string; nom: string; octets: number; eclater?: string };

const mo = (o: number) => `${(o / 1024 / 1024).toFixed(1)} Mo`;

async function poser(nom: string, contenu: string): Promise<number> {
  await writeFile(join(CIBLE, nom), contenu, "utf8");
  return (await stat(join(CIBLE, nom))).size;
}

async function main(): Promise<void> {
  try {
    await stat(SOURCE);
  } catch {
    console.error("public/hors-ligne/ est absent — lance d'abord exporter-hors-ligne.ts");
    process.exit(1);
  }

  await rm(CIBLE, { recursive: true, force: true });
  await mkdir(CIBLE, { recursive: true });

  // Date LOCALE : `toISOString` rend l'UTC, et une publication faite à minuit
  // passé s'annoncerait de la veille.
  const version =
    process.env.VERSION_CONTENU ??
    new Date().toLocaleDateString("sv-SE", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });
  const application = JSON.parse(await readFile("package.json", "utf8")).version as string;
  const pieces: Piece[] = [];

  // ── la liste des matières ──
  const modules = await readFile(join(SOURCE, "modules.json"), "utf8");
  pieces.push({
    chemin: "hors-ligne/modules.json",
    nom: "modules.json",
    octets: await poser("modules.json", modules),
  });

  // ── le contenu jouable ──
  for (const f of await readdir(join(SOURCE, "contenu"))) {
    const id = f.replace(/\.json$/, "");
    const nom = `contenu-${id}.json`;
    pieces.push({
      chemin: `hors-ligne/contenu/${id}.json`,
      nom,
      octets: await poser(nom, await readFile(join(SOURCE, "contenu", f), "utf8")),
    });
  }

  // ── les cours, groupés ──
  const cours: Record<string, unknown> = {};
  for (const f of await readdir(join(SOURCE, "lecons"))) {
    cours[f.replace(/\.json$/, "")] = JSON.parse(await readFile(join(SOURCE, "lecons", f), "utf8"));
  }
  pieces.push({
    chemin: "hors-ligne/lecons.json",
    nom: "lecons.json",
    octets: await poser("lecons.json", JSON.stringify(cours)),
    eclater: "hors-ligne/lecons/",
  });

  const manifeste = { version, application, fichiers: pieces };
  await poser("manifeste.json", JSON.stringify(manifeste, null, 1));

  const total = pieces.reduce((n, p) => n + p.octets, 0);
  for (const p of pieces) console.log(`  ${p.nom.padEnd(26)}${mo(p.octets).padStart(9)}`);
  console.log(`\ncontenu ${version} · ${Object.keys(cours).length} cours · ${mo(total)} au total`);
  console.log(`\nÀ publier, quand tu le décides :\n`);
  console.log(`  gh release create contenu-${version} publication/* \\`);
  console.log(`     --title "Contenu du ${version}" --notes "Mise à jour du contenu."\n`);
  console.log(`Ou, si la publication existe déjà :\n`);
  console.log(`  gh release upload contenu-${version} publication/* --clobber\n`);
  console.log(`L'application lit toujours la DERNIÈRE publication du dépôt.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
