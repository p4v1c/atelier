# Guide des visuels de leçon

Ce fichier décrit comment enrichir une leçon avec des éléments visuels.

## Principe directeur : la sobriété

**Un visuel ne s'ajoute que s'il apprend quelque chose que le texte dit moins bien.**
Certaines leçons n'en ont besoin d'aucun — un chapitre d'analyse littéraire ou de
philosophie se lit très bien sans illustration. D'autres en réclament trois ou quatre :
une leçon de géographie sans carte, une chronologie sans frise, une comparaison sans
tableau perdent en clarté.

Fourchette : **0 à 4 visuels par leçon, 2 en moyenne.** Ne jamais illustrer pour illustrer.
Un visuel décoratif qui n'apporte rien est pire que pas de visuel.

Choisir le type selon ce que le lecteur doit comprendre :

| Le lecteur doit… | Type |
|---|---|
| situer des événements dans le temps | `frise` |
| comparer des grandeurs chiffrées | `barres` |
| croiser plusieurs critères | `tableau` |
| retenir des repères marquants | `chiffres` |
| suivre un processus, un cycle | `etapes` |
| opposer deux modèles | `comparaison` |
| voir un lieu, une œuvre, un visage, une carte | `image` |

## Où les placer

Dans le fichier de la leçon, une **section** peut recevoir :
- `"visuel": { … }` pour un seul,
- `"visuels": [ { … }, { … } ]` pour plusieurs.

Place le visuel dans la section dont il illustre le propos, jamais en vrac à la fin.

## Les sept types

```json
{"type":"frise","titre":"…","evenements":[{"date":"1789","label":"…","texte":"facultatif"}]}

{"type":"tableau","titre":"…","colonnes":["…","…"],"lignes":[["…","…"]],"note":"facultatif"}

{"type":"chiffres","titre":"…","items":[{"valeur":"206","label":"os chez l'adulte"}]}

{"type":"barres","titre":"…","unite":"km","donnees":[{"label":"Nil","valeur":6650},
                                                     {"label":"Loire","valeur":1006,"focus":true}]}

{"type":"etapes","titre":"…","etapes":[{"label":"Évaporation","texte":"facultatif"}]}

{"type":"comparaison","titre":"…","colonnes":[{"titre":"Athènes","points":["…","…"]},
                                              {"titre":"Sparte","points":["…","…"]}]}

{"type":"image","image":"<slug>","legende":"…","alt":"description pour les non-voyants"}
```

Notes :
- `focus: true` met une barre en évidence (couleur d'accent) — utile pour situer la France
  dans un classement mondial, par exemple.
- `affichage` remplace la valeur écrite si le format demande mieux : `{"valeur":8849,
  "affichage":"8 849 m"}`.
- Les `chiffres` acceptent du texte : `"37 °C"`, `"8,5 M km²"`.
- Un `tableau` dépasse rarement 6 lignes utiles ; au-delà on ne le lit plus.
- `alt` est obligatoire sur une image : décris ce qu'on voit.

## Les images

Elles viennent de Wikimedia Commons, sont compressées et embarquées dans la page.
Trois commandes, depuis `/home/pavic/Downloads/culture-g` :

```sh
# 1. trouver le nom exact d'un fichier (n'utilise QUE les lignes marquées [OUI])
python3 images.py --cherche "cathedrale amiens gothique"

# 2. le récupérer sous un identifiant court, préfixé par ta matière
python3 images.py "Amiens Cathedral front.jpg" geo-cathedrale-amiens

# 3. le référencer dans une leçon
{"type":"image","image":"geo-cathedrale-amiens","legende":"…","alt":"…"}
```

Règles :
- **Seules les licences marquées `[OUI]`** (domaine public, CC0, CC BY, CC BY-SA) sont
  acceptées ; le script refuse les autres de lui-même.
- Le crédit d'auteur et la licence s'affichent automatiquement sous l'image : ne les
  recopie pas dans la légende.
- Préfixe tes identifiants par ta matière (`geo-`, `hf-`, `svt-`…) pour éviter les
  collisions entre rédacteurs.
- **Maximum 12 images par matière** : chacune pèse dans le fichier final. Réserve-les
  aux cas où voir compte vraiment — un lieu, une œuvre d'art, un visage célèbre, une carte.
- Vérifie que l'image montre bien le sujet : une recherche peut renvoyer un homonyme.

## Après chaque leçon modifiée

Valide immédiatement, avant de passer à la suivante :

```sh
python3 -c "import json;d=json.load(open('CHEMIN.json'));print(d['titre'])"
```

Et quand tu as fini, reconstruis pour vérifier que rien n'est cassé :

```sh
./maj.sh
```
