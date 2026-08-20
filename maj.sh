#!/bin/sh
# Reconstruit site.html à partir du contenu de data/, puis vérifie que l'appli fonctionne.
cd "$(dirname "$0")" || exit 1
python3 build.py || exit 1
if command -v node >/dev/null 2>&1; then
  node test_app.js | tail -3
else
  echo "(node absent : tests non exécutés, le site est quand même reconstruit)"
fi
echo
echo "Ouvre site.html dans ton navigateur."
