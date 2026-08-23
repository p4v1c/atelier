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

## Ensuite

1. Lire les rapports, trier le vrai du faux positif.
2. Appliquer les corrections (aucun agent ne modifie de fichier).
3. Porte complète : validate, vitest, build, contraste, seed, APK.
