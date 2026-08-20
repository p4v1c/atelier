/**
 * npm run tts:check — dit si la voix neuronale est installée, et la fait parler.
 */
import fs from "node:fs";
import { etatTts, synthetiser } from "../src/lib/server/tts";

const etat = etatTts();
console.log(etat.disponible ? `Voix neuronale : ${etat.voix}` : "Aucune voix neuronale installée.");
if (!etat.disponible) {
  console.log("\nPour l'installer :");
  console.log("  python3 -m venv .venv-tts && .venv-tts/bin/pip install piper-tts");
  console.log("  mkdir -p .voices && cd .voices");
  console.log("  curl -LO https://huggingface.co/rhasspy/piper-voices/resolve/main/fr/fr_FR/siwis/medium/fr_FR-siwis-medium.onnx");
  console.log("  curl -LO https://huggingface.co/rhasspy/piper-voices/resolve/main/fr/fr_FR/siwis/medium/fr_FR-siwis-medium.onnx.json");
  process.exit(1);
}

const debut = Date.now();
const wav = await synthetiser(
  "Les élèves que j'ai rencontrés hier m'ont paru très motivés par ce projet.",
  "moyen"
);
if (!wav) {
  console.error("La synthèse a échoué.");
  process.exit(1);
}
fs.writeFileSync("/tmp/la-regle-tts.wav", wav);
console.log(`${(wav.byteLength / 1024).toFixed(0)} Ko en ${Date.now() - debut} ms → /tmp/la-regle-tts.wav`);
console.log("Écoute : aplay /tmp/la-regle-tts.wav");
