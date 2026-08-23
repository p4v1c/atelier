# Audit du contenu — plan et suivi

Vingt relecteurs indépendants, sans contexte hérité, chacun sur son périmètre,
chacun en deux passes. Consigne commune : `CONSIGNE.md`. Rapports dans
`rapports/`.

## Lancés (20 — plafond de simultanéité atteint)

| Périmètre | Rapport |
| --- | --- |
| Histoire de France | `histoire-france.md` |
| Histoire du monde | `histoire-monde.md` |
| Sciences de la vie & Terre | `sciences-vie.md` |
| Physique & Chimie | `physique-chimie.md` |
| Géographie (culture G) | `geographie.md` |
| Institutions & Économie | `institutions-economie.md` |
| Langue française (culture G) | `langue-francaise.md` |
| Littérature | `litterature.md` |
| Arts & Musique | `arts-musique.md` |
| Cinéma & Médias | `cinema-medias.md` |
| Mythologie & Religions | `mythologie-religions.md` |
| Inventions & Technologie | `sciences-tech.md` |
| Gastronomie & Art de vivre | `gastronomie.md` |
| Sport | `sport.md` |
| Anglais A1→B1 | `anglais-1.md` |
| Anglais B2→C2 | `anglais-2.md` |
| Espagnol A1→B1 | `espagnol-1.md` |
| Espagnol B2→C2 | `espagnol-2.md` |
| Module Géographie (l'Atlas) | `geographie-module.md` |
| Français (règles et phrases) | `francais.md` |

## À lancer dès qu'une place se libère

| Périmètre | Rapport |
| --- | --- |
| Doublons et contradictions entre domaines | `inter-domaines.md` |

## Interrompu le 23 août 2026

Les vingt relecteurs ont été coupés en cours de lecture, faute de jetons. Ils
avaient tous lu une part sérieuse de leur périmètre — leurs transcriptions
pesaient de 370 Ko à 1,4 Mo — mais **aucun n'avait encore écrit son rapport** :
la consigne leur demandait de rapporter à la fin. Ce travail est perdu.

La consigne a été corrigée en conséquence : un relecteur doit désormais créer
son rapport dès le début et le compléter à chaque fichier terminé, en tête d'une
ligne d'état qui dit où il en est. Une interruption ne coûtera plus que le
fichier en cours.

À la reprise, lancer **par petits groupes de trois ou quatre**, et non vingt
d'un coup : on voit ce que ça consomme avant d'engager la suite.

## Où en est l'audit

**Cinq rapports rendus** (partiels, passe 1 seulement) : histoire du monde,
sciences de la vie, physique & chimie, gastronomie, inventions & technologie.
Ensemble : **43 constats graves, 69 moyens, 40 mineurs**, sur ~3 000 questions
et ~300 cours réellement lus. Coût : 272 000 jetons par relecteur, trois minutes
chacun, cache chaud.

**Quinze relecteurs restent interrompus**, chacun avec sa lecture faite mais
rien d'écrit : histoire de France, géographie (culture G), institutions &
économie, langue française, littérature, arts & musique, cinéma & médias,
mythologie & religions, sport, anglais A1→B1, anglais B2→C2, espagnol A1→B1,
espagnol B2→C2, module Géographie, français. Le relecteur inter-domaines n'a
jamais été lancé.

## À la reprise

1. Réveiller les quinze pour qu'ils écrivent leur rapport partiel, comme les
   cinq premiers. Le cache de contexte tient une heure : passé ce délai, le
   nombre de jetons ne change pas mais le prix par jeton monte. Si les
   transcriptions ne sont plus joignables, relancer des relecteurs neufs avec
   la consigne corrigée — ils écriront au fil de l'eau, plus rien ne se perdra.
2. Puis leur faire finir le travail : la fin de la passe 1, et la passe 2.
3. Lancer enfin le relecteur inter-domaines.

## Deux faux positifs déjà identifiés — à écarter au tri

- **« Notion sans cours »** pour un slug `cg-neuf-*`. Il n'y a que 42 notions
  sans cours et ce sont exactement les questions libres (`cg-libre-*`), qui n'en
  ont pas par construction. Les relecteurs lisent les fichiers bruts et ne
  voient pas les fusions de `cours/fusions.ts`, qui versent certaines notions
  dans une autre : la notion absorbée disparaît du catalogue, ses questions
  rejoignent l'hôte, qui a son cours.
- **« Toutes les bonnes réponses au rang 0 »**. C'est l'ordre de stockage ;
  `src/modules/kinds/melange.ts` permute les propositions au chargement.

## Trois motifs de fond, confirmés par les cinq rapports

1. **Le dernier lot de questions reformule le précédent** — dans les cinq
   domaines. Le dédoublonnage automatique ne les voit pas : ils sont reformulés
   au-delà de ses seuils.
2. **Le cahier d'origine est plus juste que les questions écrites depuis.**
   Quand les deux divergent, l'héritage a raison.
3. **Des cours contredisent leurs propres questions** : dates, chiffres,
   dénombrements.

## Ensuite

1. Lire les rapports, trier le vrai du faux positif.
2. Appliquer les corrections (aucun agent ne modifie de fichier).
3. Porte complète : validate, vitest, build, contraste, seed, APK.
