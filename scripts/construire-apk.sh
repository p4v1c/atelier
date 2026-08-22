#!/usr/bin/env bash
# Construit l'application hors ligne, puis l'APK.
#
# `output: "export"` de Next refuse tout gestionnaire de route. Plutôt que de
# déplacer src/app/api le temps de la construction — un ctrl-C au mauvais
# moment laisserait le dépôt amputé —, on bâtit dans une COPIE, qui n'a pas
# ces routes. Le dépôt n'est jamais modifié.
#
#   scripts/construire-apk.sh          contenu + site + APK de débogage
#   scripts/construire-apk.sh site     s'arrête après le site statique
set -euo pipefail
cd "$(dirname "$0")/.."
RACINE=$PWD
COPIE=$RACINE/.hors-ligne

# Les deux versions que l'application affichera. La version du contenu est la
# date du jour : c'est elle que le manifeste publié sur GitHub compare.
VERSION_APP=$(node -p "require('./package.json').version")
VERSION_CONTENU=${VERSION_CONTENU:-$(date +%F)}
export VERSION_CONTENU
export NEXT_PUBLIC_VERSION_APP="$VERSION_APP"
export NEXT_PUBLIC_VERSION_CONTENU="$VERSION_CONTENU"
echo "application $VERSION_APP · contenu $VERSION_CONTENU"
echo

echo "── 1. le contenu ──"
npx tsx scripts/exporter-hors-ligne.ts

echo
echo "── 2. la copie de travail ──"
rm -rf "$COPIE"
mkdir -p "$COPIE"
# tar plutôt que rsync : rsync n'est pas installé partout, tar l'est.
# Le contenu figé pèse 25 Mo et les dépendances bien plus : on les lie.
tar -c \
  --exclude=./node_modules --exclude=./.next --exclude=./.next-hors-ligne \
  --exclude=./.git --exclude=./.hors-ligne --exclude=./android \
  --exclude=./sauvegardes --exclude=./public/hors-ligne --exclude=./out \
  --exclude=./.travail --exclude=./.travail-cours \
  --exclude=./tests --exclude=./scripts \
  -C "$RACINE" . | tar -x -C "$COPIE"
ln -s "$RACINE/node_modules" "$COPIE/node_modules"
ln -s "$RACINE/public/hors-ligne" "$COPIE/public/hors-ligne"
rm -rf "$COPIE/src/app/api"
# tests et scripts sont restés dehors : ils importent les routes qu'on vient
# de retirer, et le contrôle de types de `next build` les lirait. `prisma`,
# lui, reste : les catalogues de contenu de src/modules en viennent.
node -e '
  const f = ".hors-ligne/tsconfig.json", c = JSON.parse(require("fs").readFileSync(f, "utf8"));
  c.include = c.include.filter((x) => !["tests", "scripts"].includes(x));
  require("fs").writeFileSync(f, JSON.stringify(c, null, 2));
' 

echo
echo "── 3. le site statique ──"
cd "$COPIE"
NEXT_PUBLIC_HORS_LIGNE=1 npx next build
cd "$RACINE"
rm -rf out && cp -r "$COPIE/out" out
# cp -r suit le lien symbolique : le contenu est bien dans out/, pas un lien.
echo "→ $(du -sh out | cut -f1) dans out/"

[ "${1:-}" = "site" ] && exit 0

echo
echo "── 4. l'APK ──"
node ressources/generer-icones.mjs
# La version de l'APK vient du package.json : un seul endroit pour la dire.
# Le code de version, entier croissant, est la date sans les tirets — Android
# refuse d'installer par-dessus une version dont le code est plus grand.
node -e '
  const fs = require("fs"), f = "android/app/build.gradle";
  const v = require("./package.json").version;
  const code = Number(process.env.VERSION_CONTENU.replace(/-/g, ""));
  fs.writeFileSync(f, fs.readFileSync(f, "utf8")
    .replace(/versionCode \d+/, "versionCode " + code)
    .replace(/versionName "[^"]*"/, `versionName "${v}"`));
'
npx cap sync android
cd android
./gradlew assembleDebug
cd "$RACINE"
APK=android/app/build/outputs/apk/debug/app-debug.apk
cp "$APK" "atelier-$VERSION_APP.apk"
echo "→ $(du -h "atelier-$VERSION_APP.apk" | cut -f1)  atelier-$VERSION_APP.apk"
echo
echo "Pour préparer la mise à jour par GitHub : npx tsx scripts/publier-contenu.ts"
