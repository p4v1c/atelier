/**
 * Synthèse vocale neuronale, côté serveur.
 *
 * espeak-ng, la seule voix que le navigateur trouve sous Linux, est un
 * synthétiseur à formants : intelligible à la rigueur, jamais naturel. Pour une
 * dictée, où il faut distinguer « les » de « le » et entendre les liaisons, ça
 * ne suffit pas.
 *
 * Piper produit une voix neuronale, tourne localement, ne demande ni réseau ni
 * clé d'interface. Il est facultatif : sans lui, l'application retombe sur la
 * voix du navigateur, en le disant.
 *
 * Plusieurs voix cohabitent, une par accent : le nom du fichier suffit à les
 * ranger. `fr_FR-siwis-medium.onnx` répond à "fr-FR", `en_US-amy-medium.onnx`
 * à "en-US". Varier l'accent d'une dictée à l'autre est le seul moyen
 * d'habituer l'oreille à autre chose qu'à une seule prononciation.
 *
 * Installation (voir README) :
 *   python3 -m venv .venv-tts && .venv-tts/bin/pip install piper-tts
 *   npm run tts:voices        # télécharge les modèles dans .voices/
 */
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

/** Trois vitesses, comme à l'écran. Piper raisonne en « longueur » : plus c'est grand, plus c'est lent. */
export const ECHELLES: Record<string, number> = { lent: 1.55, moyen: 1.25, normal: 1.0 };
export type Vitesse = keyof typeof ECHELLES;

const RACINE = process.cwd();

function premierExistant(chemins: string[]): string | null {
  for (const c of chemins) {
    try {
      if (c && fs.existsSync(c)) return c;
    } catch {
      /* chemin illisible : on passe au suivant */
    }
  }
  return null;
}

/** Binaire piper : variable d'environnement, sinon venv du projet, sinon PATH. */
function trouverBinaire(): string | null {
  return premierExistant([
    process.env.PIPER_BIN ?? "",
    path.join(RACINE, ".venv-tts/bin/piper"),
    "/usr/local/bin/piper",
    "/usr/bin/piper",
  ]);
}

/** Piper publie ses modèles en trois qualités. On veut la meilleure. */
const QUALITES = ["x_low", "low", "medium", "high"];

function qualite(fichier: string): number {
  const rang = QUALITES.findIndex((q) => fichier.includes(`-${q}.onnx`));
  return rang === -1 ? 0 : rang;
}

/**
 * Les modèles installés, rangés par étiquette de langue.
 *
 * Un fichier `en_GB-cori-high.onnx` donne l'entrée "en-gb". On garde aussi une
 * entrée pour la langue seule — "en" — qui sert de repli quand l'accent
 * demandé n'est pas installé : mieux vaut de l'anglais américain que pas
 * d'anglais du tout.
 *
 * Quand plusieurs modèles couvrent la même étiquette, c'est le plus fin qui
 * gagne. Un classement alphabétique aurait retenu `alba-medium` plutôt que
 * `cori-high`, soit exactement le contraire de ce qu'on veut.
 */
function catalogueVoix(): Map<string, string> {
  const index = new Map<string, string>();
  const dossier = path.join(RACINE, ".voices");
  let fichiers: string[] = [];
  try {
    fichiers = fs
      .readdirSync(dossier)
      .filter((f) => f.endsWith(".onnx"))
      .sort((a, b) => qualite(b) - qualite(a) || a.localeCompare(b));
  } catch {
    return index;
  }
  for (const fichier of fichiers) {
    const chemin = path.join(dossier, fichier);
    // « en_GB-alba-medium » → étiquette « en-gb », langue « en »
    const region = fichier.split("-")[0]?.replace("_", "-").toLowerCase();
    if (!region) continue;
    if (!index.has(region)) index.set(region, chemin);
    const langue = region.split("-")[0]!;
    if (!index.has(langue)) index.set(langue, chemin);
  }
  return index;
}

/**
 * Le modèle qui répond à une étiquette.
 *
 * "en-GB" tente d'abord l'accent exact, puis n'importe quel anglais. Rien
 * n'est rendu si la langue est absente : lire de l'espagnol avec une voix
 * française apprendrait une mauvaise prononciation, ce qui est pire que le
 * silence.
 */
function trouverVoix(etiquette = "fr-FR"): string | null {
  const explicite = process.env.PIPER_VOICE;
  if (explicite && fs.existsSync(explicite)) return explicite;
  const index = catalogueVoix();
  const cible = etiquette.toLowerCase();
  return index.get(cible) ?? index.get(cible.split("-")[0]!) ?? null;
}

export type EtatTts = {
  disponible: boolean;
  voix: string | null;
  /** Les étiquettes servies, accents compris : ["fr-FR", "en-GB", "en-US"…]. */
  langues: string[];
};

let etatMemo: EtatTts | null = null;

export function etatTts(): EtatTts {
  if (etatMemo) return etatMemo;
  const binaire = trouverBinaire();
  const index = catalogueVoix();
  const parDefaut = trouverVoix("fr-FR") ?? [...index.values()][0] ?? null;
  etatMemo = {
    disponible: Boolean(binaire && parDefaut),
    voix: parDefaut ? path.basename(parDefaut, ".onnx") : null,
    // Seules les étiquettes complètes : « en » n'est qu'un repli interne.
    langues: [...index.keys()].filter((k) => k.includes("-")),
  };
  return etatMemo;
}

/** Vrai si une voix sait lire cette langue, accent exact ou non. */
export function voixDisponiblePour(etiquette: string): boolean {
  return trouverVoix(etiquette) !== null;
}

function dossierCache(): string {
  const dossier = process.env.TTS_CACHE_DIR ?? path.join(os.tmpdir(), "la-regle-tts");
  fs.mkdirSync(dossier, { recursive: true });
  return dossier;
}

/**
 * Rend le WAV correspondant au texte, en le synthétisant au besoin.
 *
 * Le résultat est mis en cache sur disque : une dictée relue dix fois n'est
 * synthétisée qu'une seule. La clé mélange le texte, la vitesse et le modèle,
 * de sorte qu'un changement de voix invalide le cache tout seul.
 */
export async function synthetiser(
  texte: string,
  vitesse: Vitesse,
  etiquette = "fr-FR"
): Promise<Buffer | null> {
  const binaire = trouverBinaire();
  const voix = trouverVoix(etiquette);
  if (!binaire || !voix) return null;

  const echelle = ECHELLES[vitesse] ?? ECHELLES.moyen!;
  const cle = createHash("sha256").update(`${voix}|${echelle}|${texte}`).digest("hex").slice(0, 32);
  const fichier = path.join(dossierCache(), `${cle}.wav`);

  try {
    return await fs.promises.readFile(fichier);
  } catch {
    /* pas encore en cache : on synthétise */
  }

  const partiel = `${fichier}.${process.pid}.partiel`;
  await new Promise<void>((resolve, reject) => {
    const p = spawn(binaire, ["-m", voix, "--length-scale", String(echelle), "-f", partiel], {
      stdio: ["pipe", "ignore", "pipe"],
    });
    let erreur = "";
    p.stderr.on("data", (d) => (erreur += String(d)));
    p.on("error", reject);
    p.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(`piper a échoué (${code}) : ${erreur.slice(0, 300)}`))
    );
    p.stdin.write(texte.replace(/\s+/g, " ").trim());
    p.stdin.end();
  });

  // Écriture atomique : deux requêtes simultanées ne peuvent pas se marcher dessus.
  await fs.promises.rename(partiel, fichier);
  return fs.promises.readFile(fichier);
}

/* ─────────────────────────── synthèse par lots ─────────────────────────── */

/**
 * Synthétise plusieurs textes d'une même langue en un seul appel à Piper.
 *
 * Le gain est considérable : Piper recharge son modèle à chaque lancement, et
 * un modèle « high » pèse une centaine de mégaoctets. Sur 780 textes, un appel
 * par texte demandait quarante minutes ; un appel par langue en demande
 * quelques-unes.
 *
 * Réservé à la préparation hors ligne (`npm run tts:prepare`). À l'exécution,
 * on sert le cache, et on ne synthétise à l'unité que ce qui y manque.
 *
 * Rend le nombre de textes effectivement écrits.
 */
export async function synthetiserLot(
  textes: string[],
  vitesse: Vitesse,
  etiquette: string,
  onProgres?: (faits: number) => void
): Promise<number> {
  const binaire = trouverBinaire();
  const voix = trouverVoix(etiquette);
  if (!binaire || !voix || textes.length === 0) return 0;

  const echelle = ECHELLES[vitesse] ?? ECHELLES.moyen!;
  const cache = dossierCache();

  // Ne demander que ce qui manque : relancer la préparation ne doit rien
  // resynthétiser.
  const aFaire: { texte: string; cible: string }[] = [];
  for (const texte of textes) {
    const propre = texte.replace(/\s+/g, " ").trim();
    if (!propre) continue;
    const cle = createHash("sha256").update(`${voix}|${echelle}|${propre}`).digest("hex").slice(0, 32);
    const cible = path.join(cache, `${cle}.wav`);
    if (fs.existsSync(cible)) continue;
    aFaire.push({ texte: propre, cible });
  }
  if (aFaire.length === 0) return 0;

  const provisoire = fs.mkdtempSync(path.join(os.tmpdir(), "piper-lot-"));
  try {
    // Piper journalise « Wrote <chemin> » dans l'ordre des lignes reçues :
    // c'est ce journal qui permet de rattacher chaque fichier à son texte.
    const ecrits: string[] = [];
    await new Promise<void>((resolve, reject) => {
      const p = spawn(
        binaire,
        ["-m", voix, "--length-scale", String(echelle), "-d", provisoire, "--output-dir-naming", "timestamp"],
        { stdio: ["pipe", "ignore", "pipe"] }
      );
      let tampon = "";
      p.stderr.on("data", (d) => {
        tampon += String(d);
        let saut: number;
        while ((saut = tampon.indexOf("\n")) !== -1) {
          const ligne = tampon.slice(0, saut);
          tampon = tampon.slice(saut + 1);
          const m = /Wrote (.+\.wav)\s*$/.exec(ligne);
          if (m?.[1]) {
            ecrits.push(m[1]);
            onProgres?.(ecrits.length);
          }
        }
      });
      p.on("error", reject);
      p.on("close", (code) => (code === 0 ? resolve() : reject(new Error(`piper a échoué (${code})`))));
      p.stdin.write(aFaire.map((x) => x.texte).join("\n") + "\n");
      p.stdin.end();
    });

    // Un décalage entre les lignes envoyées et les fichiers écrits rendrait
    // le cache faux, ce qui est pire que lent : on refuse plutôt que de deviner.
    if (ecrits.length !== aFaire.length) {
      throw new Error(`piper a écrit ${ecrits.length} fichiers pour ${aFaire.length} textes`);
    }

    let faits = 0;
    for (const [i, x] of aFaire.entries()) {
      await fs.promises.rename(ecrits[i]!, x.cible);
      faits++;
    }
    return faits;
  } finally {
    fs.rmSync(provisoire, { recursive: true, force: true });
  }
}
