# Le Cahier de culture G

Application web de révision de culture générale, en français.
**2 209 questions**, **280 leçons illustrées**, **14 matières**.

Chaque réponse est suivie d'un mini-cours qui explique le fond de la question.
Les leçons sont rédigées comme un manuel et enrichies de frises, tableaux, graphiques
et images libres de droits.

## Les modes

- **Quiz** — par matière ou toutes matières mêlées. Après chaque réponse, l'explication
  détaillée s'affiche. Les questions déjà réussies repassent en dernier.
- **Cours** — des leçons de 5 sections, avec un mini-quiz de validation à la fin de chacune.
- **Fiche de révision** — par matière, toutes les questions relues d'affilée avec leur
  réponse et leur explication, classées par difficulté.
- **Révision des erreurs** — ne repropose que les questions ratées.
- **Progression** — un pourcentage par matière, enregistré dans le navigateur.

Au clavier : touches <kbd>1</kbd> à <kbd>4</kbd> pour répondre, <kbd>Entrée</kbd> pour enchaîner.

## Les matières

Histoire de France · Histoire du monde · Géographie · Physique & Chimie ·
Sciences de la vie & Terre · Sport · Littérature · Arts & Musique · Cinéma & Médias ·
Institutions & Économie · Mythologie & Religions · Inventions & Technologie ·
Gastronomie & Art de vivre · Langue française

## Organisation du dépôt

    data/<matiere>.json            questions de la matière + ses 3 premières leçons
    data/lecons/<matiere>/NN.json  une leçon par fichier
    data/images/<slug>.json        images encodées, avec crédit et licence
    app_template.html              l'application (HTML, CSS, JS)
    build.py                       assemble tout dans un fichier unique site.html
    build_web.py                   génère le site multi-fichiers dans web/
    test_app.js / test_web.js      vérifient que chaque écran fonctionne
    doublons.py                    détecte les questions en double
    images.py                      récupère une image sur Wikimedia Commons

## Construire

```sh
./maj.sh              # fichier unique site.html, ouvrable hors connexion
python3 build_web.py  # site multi-fichiers dans web/, pour l'hébergement
node test_web.js      # vérifie l'application
```

Le build refuse de produire un site si une question est mal formée (moins de quatre choix,
bonne réponse hors limites, explication trop courte) et retire automatiquement les doublons.

## Deux versions du même contenu

| | Poids au premier affichage | Usage |
|---|---|---|
| **Site web** (`web/`) | 44 Ko + 1,6 Ko d'index | en ligne, chargement à la demande |
| **Fichier unique** (`site.html`) | 11 Mo | hors connexion, un seul fichier à garder |

## Le contenu

Rédigé à partir de connaissances encyclopédiques établies. Les leçons ajoutées à partir
d'août 2026 ont été écrites après consultation des articles Wikipédia cités en source dans
chaque leçon. Une vérification par échantillon a porté sur 54 questions difficiles :
43 exactes, 1 fausse et 10 imprécises, toutes corrigées.

Les images proviennent de Wikimedia Commons, sous licence libre (domaine public,
CC0, CC BY ou CC BY-SA). L'auteur et la licence sont crédités sous chaque image.

Voir `SOURCES.md` pour les jeux de données ouverts étudiés pour enrichir la banque,
et `VISUELS.md` pour le format des éléments visuels.
