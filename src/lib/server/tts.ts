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
 * Installation (voir README) :
 *   python3 -m venv .venv-tts && .venv-tts/bin/pip install piper-tts
 *   puis un modèle dans .voices/
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

/** Modèle de voix : variable d'environnement, sinon le premier .onnx de .voices/. */
function trouverVoix(): string | null {
  const explicite = process.env.PIPER_VOICE;
  if (explicite && fs.existsSync(explicite)) return explicite;
  const dossier = path.join(RACINE, ".voices");
  try {
    const fichier = fs.readdirSync(dossier).find((f) => f.endsWith(".onnx"));
    return fichier ? path.join(dossier, fichier) : null;
  } catch {
    return null;
  }
}

export type EtatTts = { disponible: boolean; voix: string | null };

let etatMemo: EtatTts | null = null;

export function etatTts(): EtatTts {
  if (etatMemo) return etatMemo;
  const binaire = trouverBinaire();
  const voix = trouverVoix();
  etatMemo = {
    disponible: Boolean(binaire && voix),
    voix: voix ? path.basename(voix, ".onnx") : null,
  };
  return etatMemo;
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
export async function synthetiser(texte: string, vitesse: Vitesse): Promise<Buffer | null> {
  const binaire = trouverBinaire();
  const voix = trouverVoix();
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
