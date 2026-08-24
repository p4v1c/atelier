# Constats de l'audit de contenu de l'Atelier

Vingt relecteurs indépendants ont lu le contenu de l'application, chacun sur son
domaine, la plupart en deux passes. **1 227 constats** : 320 graves, 563 moyens,
344 mineurs. Un rapport par domaine, dans ce dossier.

Chaque constat donne : le fichier et la ligne, la citation exacte, le problème,
et **une correction rédigée, prête à appliquer**.

## Les rapports

| Fichier | État de l'audit | Graves / Moyens / Mineurs |
| --- | --- | --- |
| `anglais-1.md` | deux passes terminées | 11 / 67 / 36 |
| `anglais-2.md` | deux passes terminées | 20 / 52 / 43 |
| `arts-musique.md` | deux passes terminées | 14 / 16 / 21 |
| `cinema-medias.md` | deux passes terminées | 10 / 20 / 20 |
| `espagnol-1.md` | deux passes terminées | 14 / 29 / 9 |
| `geographie-module.md` | deux passes terminées | 5 / 19 / 15 |
| `institutions-economie.md` | deux passes terminées | 14 / 25 / 11 |
| `langue-francaise.md` | deux passes terminées | 32 / 29 / 14 |
| `litterature.md` | passe 1 terminée | 5 / 25 / 12 |
| `mythologie-religions.md` | passe 1 terminée | 18 / 25 / 19 |
| `espagnol-2.md` | passe 1 en cours | 20 / 49 / 43 |
| `francais.md` | passe 1 en cours | 56 / 57 / 25 |
| `geographie.md` | passe 1 en cours | 23 / 22 / 6 |
| `histoire-france.md` | passe 1 en cours | 17 / 35 / 13 |
| `sport.md` | passe 1 en cours | 17 / 22 / 17 |
| `gastronomie.md` | notes vidées seulement | 6 / 14 / 8 |
| `histoire-monde.md` | notes vidées seulement | 6 / 13 / 16 |
| `physique-chimie.md` | notes vidées seulement | 12 / 13 / 4 |
| `sciences-tech.md` | notes vidées seulement | 8 / 17 / 6 |
| `sciences-vie.md` | notes vidées seulement | 12 / 14 / 6 |

La première ligne de chaque rapport dit exactement quels fichiers ont été lus et
lesquels restent. Les douze derniers domaines n'ont pas fini : leurs chiffres
sont un plancher, pas un total.

`CONSIGNE.md` est la consigne que les relecteurs ont reçue — utile pour relancer
l'audit là où il s'est arrêté.

## Trois défauts systémiques, confirmés par plusieurs relecteurs

**1. La bonne réponse est la plus longue.** Mesuré sur tout le corpus
(`mesure-longueur.ts`, résultat dans `mesure-longueur.txt`) : cocher
systématiquement la proposition la plus longue donne **68 % de bonnes réponses
en culture générale**, et **76 % sur les questions écrites à la main**, contre
25 % au hasard. Écart moyen : vingt-deux caractères. C'est le défaut jumeau de
celui déjà corrigé — la bonne réponse toujours au rang 0 — et il vient du même
geste : on écrit la vraie réponse, complète, puis on bâcle trois leurres.
Ce n'est pas réparable automatiquement : il faut réécrire les leurres pour
qu'ils fassent le poids. Chantier à part entière.

**2. L'astuce de la notion donne la réponse.** Chaque notion porte un `tip`
affiché à côté de ses questions. Deux relecteurs indépendants — gastronomie et
physique-chimie — ont trouvé la même chose sans se concerter : **dans une notion
sur trois, l'astuce contient la réponse d'une de ses propres questions**, parfois
de deux. Une astuce va jusqu'à orienter vers un distracteur
(`pc-lumiere-ondes`). La mesure mécanique de `mesure-astuce.ts` en confirme 67
notions et 74 questions, mais elle ne compte que les reprises **littérales** :
c'est un plancher, la lecture humaine en trouve trois à cinq fois plus.

**3. Le distracteur qui s'annonce faux.** Une proposition qui affirme une
exclusivité — « le seul… », « toujours », « jamais », « uniquement », « aucun »
— est presque toujours le leurre. Mesuré par `mesure-absolus.ts` :
**971 propositions absolues en culture générale, dont 105 justes seulement
(10,8 %)**, réparties sur 862 questions. Écarter d'office toute proposition
absolue fait donc gagner **89 % du temps**, sans rien savoir du sujet. Le
relecteur inventions a compté chez lui « 27 questions, 19 compétences, zéro
exception ».

**4. Les doublons que le filtre ne voit pas.** Le dernier lot de questions
reformule le précédent, dans presque tous les domaines : ~40 paires en
gastronomie, ~25 en langue française, 24 familles en arts, 12 en cinéma. Le
filtre `dedoublonner()` de `src/modules/culture-g/contenu.ts` n'en attrape
aucune — le relecteur langue française l'a rejoué sur ses trouvailles, y compris
sur une paire d'énoncés identiques à 88 %.

**5. Le cahier d'origine est plus juste que ce qui a été écrit depuis.** Quand
`heritage/` et `prisma/seed/culture-g/` divergent, l'héritage a raison le plus
souvent, et il contient déjà la bonne version de plusieurs erreurs graves.

**Mais ce n'est pas une règle universelle, et s'y fier aveuglément produirait des
erreurs.** En sciences de la vie, c'est l'inverse : six erreurs graves nouvelles
ont été trouvées dans les leçons du cahier — cellules gliales « beaucoup plus
nombreuses » que les neurones, 35 millions d'années au lieu de 115, un cœur de
baleine à 600 kg né d'une conversion depuis 600 livres — et le relecteur conclut
que « chaque fois que le seed et le cahier se contredisent, c'est le seed qui a
raison ». **Vérifier domaine par domaine, jamais par principe.**

## Deux faux positifs — les écarter au tri

- **« Notion sans cours »** pour un slug `cg-neuf-*`. Il n'y a que 42 notions
  sans cours et ce sont exactement les questions libres (`cg-libre-*`), qui n'en
  ont pas par construction. Les fusions de
  `prisma/seed/culture-g/cours/fusions.ts` versent certaines notions dans une
  autre : l'absorbée disparaît du catalogue, ses questions rejoignent l'hôte,
  qui a son cours.
- **« Toutes les bonnes réponses au rang 0 »**. C'est l'ordre de stockage ;
  `src/modules/kinds/melange.ts` permute les propositions au chargement.
