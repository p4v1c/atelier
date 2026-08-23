# Carnet de bord — l'Atelier

## Phase 1 — doublons et répétitions : TERMINÉE (commit 758034b)
- 91 questions redondantes retirées, 23 fusions de notions, 29 paragraphes réécrits.
- Contrôles restants à zéro : doublons exacts, paires ≥ 80 %, paragraphes ≥ 30 %, phrases réemployées.
- Outils jetables dans `.travail/` (redites.ts, doublons.ts, remplacer.py…).

## Phase 2 — UI du lecteur de cours « manuel scolaire » : TERMINÉE
- `src/components/screens/Lecon.tsx` réécrit : page de papier (jetons --exo-*),
  ouverture de chapitre + repères, parties numérotées, lettrine, documents
  numérotés « Doc. N », plan repliable, colophon, actions en pied sur mobile.
- `src/app/globals.css` : bloc LEÇONS entièrement refait.
- `src/app/coque.css` : deux bugs corrigés — le bloc mobile de la ligne 586
  était écrasé par les règles de défilement écrites après (la page ne défilait
  pas sur téléphone, sur TOUS les écrans), et les matières se chevauchaient
  dans le bandeau horizontal.
- Contrôles : 0 contraste sous le seuil sur les 4 thèmes, 0 classe morte,
  219 tests, build vert.

## Phase 3 — APK hors ligne : à faire
- Contenu figé depuis /api/public/*, export statique sans src/app/api, Capacitor, MAJ GitHub.

## Phase 3 — APK hors ligne : TERMINÉE
- `src/lib/hors-ligne.ts` (aiguillage), `src/lib/client/api.ts` (détournement),
  `depot-hors-ligne.ts` (IndexedDB), `mise-a-jour.ts` (GitHub), `sauvegarde.ts`.
- `src/components/screens/Application.tsx` : progression (sauvegarde/restauration),
  contenu (version, mise à jour), application (version, publications).
- `scripts/exporter-hors-ligne.ts` — appelle les gestionnaires de route eux-mêmes.
- `scripts/publier-contenu.ts` — prépare publication/, n'envoie rien.
- `scripts/construire-apk.sh` — copie de travail, export statique, Capacitor, Gradle.
- `ressources/icone.svg` + `generer-icones.mjs`.
- APK : atelier-1.0.0.apk, 21 Mo, fr.atelier.app, minSdk 24, 1039 fichiers de contenu.
- SDK installé dans ~/Android/sdk (platforms 35 et 36, build-tools 35 et 36).
- Vérifié : série jouée hors réseau, progression conservée après redémarrage,
  sauvegarde téléchargée, mise à jour complète depuis un faux GitHub (25 Mo,
  1033 cours éclatés), 227 tests, 0 contraste sous le seuil.

## Passe de cohérence sur toute l'application — TERMINÉE

1. **Le mélange des propositions.** Personne ne mélangeait : ni l'écran, ni le
   seed, alors que deux commentaires se renvoyaient la responsabilité. 83,6 %
   des questions de culture générale avaient leur bonne réponse au rang 0
   (100 % de celles écrites ici), et répondre toujours « la première » donnait
   55 % à l'écran. `src/modules/kinds/melange.ts`, appliqué dans `contenuDe`.
   Mesuré après : 30 % sur vingt questions, contre 25 % au hasard.
2. **Le dédoublonnage.** Il ne voyait que les reprises mot pour mot entre
   questions libres et leçons. Généralisé aux trois sources et aux
   reformulations, deux passes calibrées sur des paires connues. 30 questions
   retirées, toutes relues une à une.
3. **Le validateur.** 630 avertissements → 0. Les trois notions trop maigres
   ont reçu cinq questions neuves (faille transformante, globe de cristal,
   tardigrade, parthénogenèse).
4. **Le téléphone.** Trois tableaux et les listes de séries poussaient la page
   hors de l'écran (`minmax(420px, 1fr)` sur un écran de 390). Huit colonnes de
   grille bornées par `min()`, tableaux dans un cadre défilant, onglets et
   filtres à la taille d'un pouce.
5. **La documentation.** Chiffres remis d'aplomb (culture générale annoncée à
   322 notions, elle en a 949), test renommé pour dire ce qu'il vérifie,
   portée du validateur corrigée.
