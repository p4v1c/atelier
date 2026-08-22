/**
 * Fige le contenu des routes publiques en fichiers, pour l'application Android.
 *
 * L'APK n'a pas de serveur : il embarque les réponses. Plutôt que de récrire
 * les requêtes — et de les voir diverger du jour où quelqu'un touchera à une
 * route —, ce script APPELLE les gestionnaires de route eux-mêmes et écrit ce
 * qu'ils renvoient. Le fichier posé dans l'APK est donc, octet pour octet, ce
 * que l'application de bureau aurait reçu du serveur.
 *
 *   npx tsx scripts/exporter-hors-ligne.ts
 *
 * Écrit dans public/hors-ligne/, que `next build` recopie tel quel.
 */
import { mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { GET as getModules } from "../src/app/api/public/modules/route";
import { GET as getContenu } from "../src/app/api/public/content/route";
import { GET as getLecon } from "../src/app/api/public/lessons/[slug]/route";
import { Prisma } from "@prisma/client";
import { prisma } from "../src/lib/prisma";

const RACINE = join(process.cwd(), "public", "hors-ligne");

/** Une requête sans `accept-encoding` : la route répond alors en clair. */
const requete = (url: string) => new Request(`http://hors-ligne${url}`);

async function corps(r: Response): Promise<string> {
  if (r.headers.get("content-encoding") === "gzip") {
    throw new Error("réponse compressée : la requête ne doit pas annoncer gzip");
  }
  return r.text();
}

async function ecrire(chemin: string, contenu: string): Promise<number> {
  await mkdir(join(RACINE, ...chemin.split("/").slice(0, -1)), { recursive: true });
  await writeFile(join(RACINE, chemin), contenu, "utf8");
  return Buffer.byteLength(contenu, "utf8");
}

const ko = (o: number) => `${(o / 1024).toFixed(0)} Ko`;
const mo = (o: number) => `${(o / 1024 / 1024).toFixed(1)} Mo`;

async function main(): Promise<void> {
  await rm(RACINE, { recursive: true, force: true });
  await mkdir(RACINE, { recursive: true });

  let total = 0;

  // ── la liste des matières ──
  const modules = await corps(await getModules());
  total += await ecrire("modules.json", modules);
  const ids: string[] = JSON.parse(modules).modules.map((m: { id: string }) => m.id);
  console.log(`modules.json          ${ids.length} matières`);

  // ── le contenu jouable, une matière par fichier ──
  for (const id of ids) {
    const poids = await ecrire(
      `contenu/${id}.json`,
      await corps(await getContenu(requete(`/api/public/content?module=${id}`)))
    );
    total += poids;
    console.log(`contenu/${id}.json`.padEnd(38) + ko(poids).padStart(9));
  }

  // ── les cours, un fichier par notion ──
  const avecCours = await prisma.skill.findMany({
    where: { status: { in: ["active", "disputed"] }, NOT: { lesson: { equals: Prisma.DbNull } } },
    select: { slug: true },
    orderBy: { slug: "asc" },
  });

  let poidsCours = 0;
  for (const { slug } of avecCours) {
    const r = await getLecon(requete(`/api/public/lessons/${slug}`), {
      params: Promise.resolve({ slug }),
    });
    if (!r.ok) continue;
    poidsCours += await ecrire(`lecons/${slug}.json`, await corps(r));
  }
  total += poidsCours;
  console.log(`lecons/*.json`.padEnd(38) + ko(poidsCours).padStart(9) + `  (${avecCours.length} cours)`);

  console.log(`\n${mo(total)} au total dans public/hors-ligne/`);
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
