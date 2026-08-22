/**
 * Fabrique les icônes Android depuis ressources/icone.svg.
 *
 * Android en veut deux formes : l'icône ancienne, carrée et complète, et
 * l'icône adaptative, dont l'avant-plan est rogné par le lanceur — d'où la
 * marge de sûreté : ce qui compte reste dans les deux tiers du centre.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import sharp from "sharp";

const RES = "android/app/src/main/res";
const svg = readFileSync("ressources/icone.svg");
const FOND = "#16112E";

/** densité → taille de l'icône classique (dp 48) et de l'avant-plan (dp 108). */
const DENSITES = [
  ["mdpi", 48, 108],
  ["hdpi", 72, 162],
  ["xhdpi", 96, 216],
  ["xxhdpi", 144, 324],
  ["xxxhdpi", 192, 432],
];

for (const [densite, carre, adaptatif] of DENSITES) {
  const dossier = `${RES}/mipmap-${densite}`;
  await mkdir(dossier, { recursive: true });

  // L'icône classique : la page sur le fond d'encre, bord à bord.
  const page = await sharp(svg, { density: 600 }).resize(carre, carre).png().toBuffer();
  const fond = await sharp({
    create: { width: carre, height: carre, channels: 4, background: FOND },
  })
    .composite([{ input: page }])
    .png()
    .toBuffer();
  await writeFile(`${dossier}/ic_launcher.png`, fond);
  await writeFile(`${dossier}/ic_launcher_round.png`, fond);

  // L'avant-plan adaptatif : la page seule, réduite au tiers central, sur du
  // transparent. Le fond est une couleur unie déclarée en ressource.
  const dedans = Math.round(adaptatif * 0.62);
  const marge = Math.round((adaptatif - dedans) / 2);
  const petite = await sharp(svg, { density: 600 }).resize(dedans, dedans).png().toBuffer();
  await writeFile(
    `${dossier}/ic_launcher_foreground.png`,
    await sharp({
      create: { width: adaptatif, height: adaptatif, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
    })
      .composite([{ input: petite, top: marge, left: marge }])
      .png()
      .toBuffer()
  );
}

await writeFile(
  `${RES}/values/ic_launcher_background.xml`,
  `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">${FOND}</color>\n</resources>\n`
);

console.log("icônes écrites pour " + DENSITES.map((d) => d[0]).join(", "));
