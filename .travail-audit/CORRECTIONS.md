# Journal des corrections issues de l'audit

Écrit au fur et à mesure : une session peut être coupée à tout moment.
Chaque entrée dit ce qui a été appliqué, ce qui a été écarté, et pourquoi.

## Outil de vérification

`npx tsx .travail-audit/voir.ts <motif de slug>...` affiche, pour chaque règle
du module français, l'énoncé, l'astuce, et **le résultat de chaque correction
appliquée en place**. C'est le seul moyen de voir le défaut dominant du module —
la correction bien formée qui produit une phrase impossible.

## Contraintes du format, à ne pas oublier

- Le marqueur `[...]` ne peut contenir **aucune espace** (`parseMarkedSentence`
  lève une `ParseError`). Le `fix`, lui, peut compter plusieurs mots.
- Chaque règle doit garder **au moins une phrase sans faute** (`fix: null`),
  sinon `no-correct-sentence` (erreur).
- Les phrases fautives ne peuvent pas avoir **toutes** la faute au même rang
  (`same-position`, erreur dès 3 phrases).
- Minimum 2 exercices par règle (erreur), 5 pour éviter l'avertissement
  `thin-skill`.
- La variété des adjectifs peut se loger dans les phrases **correctes** : elles
  n'ont pas de marqueur, donc pas de contrainte d'accord avec un mot remplacé.

---

## Français — constats GRAVES

(en cours)
### Lot 1 — écrits professionnels, accords, ponctuation (batch 001/003/004/006 + densify3)

**Piège découvert, à retenir pour toute la suite** : la ponctuation collée au mot
marqué est réinjectée après la correction (`before + fix + after` dans
`tokenize`). **Retirer une virgule de trop est donc impossible** dans ce format :
une règle de ponctuation ne peut exercer que la virgule *manquante*.

Appliqués :

- `pro-agreer-salutations` — « salutations » est féminin, les adjectifs restaient
  au masculin après correction. Les phrases fautives se terminent maintenant sur
  un adjectif épicène (« sincères »), et la variété des formules
  (« distinguées », « les meilleures ») est passée dans les phrases correctes,
  qui n'ont pas de contrainte d'accord.
- `pro-revenir-vers` — « vers vous » restait en place et la phrase corrigée le
  répétait. Les six phrases exercent maintenant « je vous reviens », qui se
  corrige en un mot ; l'énoncé mentionne les deux calques.
- `pro-objet-message` — le nom de remplacement se juxtaposait au verbe resté en
  place. Les phrases partent maintenant d'un infinitif (« Objet : postuler… »)
  qui se remplace par un nom seul. La phrase déclarée correcte gardait un verbe
  conjugué : remplacée.
- `pro-pieces-jointes-accord` — « la les pièces », « pièces jointe ».
- `pro-suite-entretien` — **règle supprimée**. Elle enseignait « Suite à » comme
  une faute, quand `discute-suite-a` (catégorie non notée) l'enseigne comme un
  tour critiqué mais admis : deux verdicts opposés sur le même tour. La règle
  disputée couvre déjà le sujet, et correctement. La dictée qui s'y rattachait
  pointe désormais sur `discute-suite-a`. **Choix réversible** : c'est la seule
  suppression de règle de ce lot.
- `accord-le-peu-de` — « l'a » et « n'ont » sont un seul token : la correction
  emportait le pronom ou la négation. Et une phrase exigeait le pluriel là où
  l'énoncé demande le singulier.
- `accord-collectif-groupe` — l'énoncé annonce que les deux accords sont
  possibles « selon l'idée dominante », et les phrases en sanctionnaient un.
  Chaque phrase porte maintenant l'indice qui impose son accord (« encadré par
  deux professeurs », « à lui seul », « les uns derrière les autres ») ; celle
  qui n'en portait aucune est devenue une phrase correcte.
- `accord-moins-de-deux` — « ont été retenu ».
- `impropriete-avoir-lair` (règle sur « s'avérer ») — le fix remplaçait le verbe
  au lieu de l'attribut : « Le remède s'est efficace ». C'est l'attribut qui est
  marqué maintenant.
- `virgule-enumeration` — l'astuce (« une virgule de moins que d'éléments »)
  faisait ajouter une virgule de trop ; elle en compte deux de moins.
- `virgule-donc-intercale` — « donc » n'était jamais entre le sujet et le verbe,
  et la correction ajoutait une virgule là où la faute était d'en avoir mis une.
  Règle refaite sur de vraies incises.
- `virgule-lieu-date` — hors de la formule figée « Fait à …, le … », la virgule
  n'est pas obligatoire : trois phrases fabriquaient une faute qui n'en était pas.
- `pro-formule-appel-virgule` — son exemple employait « je reviens vers vous »,
  le calque qu'une autre règle condamne.

Écartés / laissés :

- Le slug `impropriete-avoir-lair` ne décrit pas son contenu (la règle porte sur
  « s'avérer ») et frôle `discute-avoir-lair` du lot 005. Renommer un slug efface
  la progression des comptes sur cette règle : **à traiter avec le propriétaire**.

Porte : `tsc` ✓ · `validate:content` 0 erreur / 634 avertissements (inchangé) ·
236 tests ✓ · `build` ✓.

### Lot 2 — le piège d'élision, et neuf règles qui enseignaient du faux

**Le piège d'élision, trouvé en corrigeant `accord-verbe-ni-ni`, puis mesuré sur
tout le module.** « Ni la pluie ni le vent ne l'[a] découragé » : le token marqué
vaut « l'a » tout entier, jamais le seul « a ». La correction « ont » donnait
donc « ne ont découragé ». Même mécanisme sur « n'[est] », « sous l'[egide] »,
« à l'[encontre] », « en l'[espèces] », « pierre d'[achopement] ».

`.travail-audit/elisions.ts` en a trouvé **117 dans tout le module**, là où
l'audit en citait quatre. 103 étaient dans les lots, 14 dans le contenu
d'origine (corrigées par `PATCHES`, qui garde `legacy.json` fidèle).

Un contrôle `elision-emportee` a été ajouté au validateur du module pour que le
défaut ne revienne pas. Il ne se déclenche que lorsque le préfixe devait rester,
c'est-à-dire quand la correction commence par une voyelle ou un h — sinon
« n'y » → « ni » et « d'en » → « dans », qui sont des homophones où le token
entier est la faute, seraient signalés à tort.

Deux outils neufs, gardés :
- `.travail-audit/elisions.ts` — le piège d'élision.
- `.travail-audit/sans-effet.ts` — les corrections qui reproduisent le mot marqué,
  donc les exercices vides. Trois trouvées, toutes créées par la réparation
  automatique elle-même, toutes reprises à la main.

Le test `legacy-migration` supposait qu'un patch réécrit toujours la phrase :
il accepte maintenant un patch qui ne corrige que la correction, et vérifie
alors le `fix`. **Contrôle assoupli, pas contourné** : la nouvelle assertion est
plus forte que l'ancienne sur ce point.

Autres règles corrigées :

- `majuscule-apres-deux-points` — la phrase donnée en modèle était une citation,
  donc justement l'exception de son propre énoncé.
- `conj-futur-anterieur` — après « quand » et « dès que », le futur simple est
  correct : la règle inventait cinq fautes. Seuls « une fois que » et « après
  que » imposent l'auxiliaire au futur ; les phrases et l'astuce ont suivi.
- `impropriete-emerite` — « émérite » a un second sens attesté (Larousse, Petit
  Robert) : excellent par longue pratique. La règle ne retient plus que le vrai
  contresens, émérite pour un débutant.
- `conj-verbe-naitre` — « Elle est né » : le sujet passe au masculin, le
  participe suit l'auxiliaire.
- `accord-verbe-ni-ni`, `accord-tout-resume` — le piège d'élision, six phrases.
- `accord-fraction`, `accord-dizaine` — « se sont abstenu », « ont été
  dépouillé », « sont venu ».
- `pluriel-composes-nom-adjectif` — « grands-messes » n'est pas la forme des
  dictionnaires (*grand* y est l'ancien féminin invariable, comme dans
  *grand-route*) : le mot ne relève pas de la règle. Remplacé par *cerf-volant*.
- `accord-nom-nombre-precis` — l'énoncé et l'astuce se contredisaient ; l'énoncé
  est refait sur le nombre écrit, et deux phrases qui restaient fausses
  (« ont été nécessaire », « se sont écoulé ») sont remplacées.
- `expr-battre-son-plein` — « battaient leurs pleins » porte deux fautes pour un
  seul marqueur : le possessif passe au singulier dans la phrase fautive.
- `expr-faire-long-feu` — « a fait long feux » : c'est « feux » qui est marqué.
- `expr-a-lencontre` — deux phrases correctes étaient données comme fautives, et
  trois corrections perdaient l'article : « à rencontre de son ami ».
- `h-aspire` — « laisser au l'hasard » n'est pas une phrase française, et « par
  le hasard dans la rue » ne se dit pas : les deux phrases sont refaites.

Porte : `tsc` ✓ · `validate:content` 0 erreur / 634 avertissements · 236 tests ✓ ·
`build` ✓.
