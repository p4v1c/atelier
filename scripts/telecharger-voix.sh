#!/usr/bin/env bash
# Télécharge les voix neuronales Piper dans .voices/.
#
# Une voix par accent : le nom du fichier suffit à la ranger. fr_FR-siwis
# répond à "fr-FR", en_US-amy à "en-US". Environ 60 Mo chacune, hors dépôt.
#
# Usage : npm run tts:voices
set -euo pipefail

BASE="https://huggingface.co/rhasspy/piper-voices/resolve/main"
# La qualité « high » est préférée quand elle existe : le moteur choisit
# toujours le modèle le plus fin pour une étiquette donnée.
VOIX=(
  "fr/fr_FR/siwis/medium/fr_FR-siwis-medium"
  "en/en_GB/cori/high/en_GB-cori-high"
  "en/en_US/lessac/high/en_US-lessac-high"
  "es/es_ES/davefx/medium/es_ES-davefx-medium"
  "es/es_MX/claude/high/es_MX-claude-high"
)

mkdir -p .voices
for v in "${VOIX[@]}"; do
  n=$(basename "$v")
  for ext in onnx onnx.json; do
    if [ -f ".voices/$n.$ext" ]; then
      echo "  déjà là   $n.$ext"
    else
      echo "  téléchargement $n.$ext"
      curl -fsSL -o ".voices/$n.$ext" "$BASE/$v.$ext"
    fi
  done
done

echo
echo "Voix installées :"
ls -1 .voices/*.onnx | sed 's|.voices/|  |; s|\.onnx$||'
