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
