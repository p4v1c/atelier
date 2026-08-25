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

### Rectification du lot 1 : ce que l'écran fait vraiment

J'avais écrit, en corrigeant `virgule-donc-intercale`, que « la ponctuation
collée au mot marqué est réinjectée après la correction ». **C'est faux pour
l'écran.** `SpotError.tsx` n'assemble jamais la phrase corrigée : il barre le mot
cliquable et écrit la correction au-dessus, à la main. La ponctuation finale
reste affichée dans la ligne, hors du mot.

Ce qui reste vrai, et qui justifiait la réfection : une correction qui ne
différerait du mot que par sa ponctuation est **invisible** — l'apprenant lit
au-dessus du mot ce qu'il a déjà sous les yeux. Le validateur refusait déjà
`correction === mot` ; il refuse maintenant aussi `correction === mot +
ponctuation`.

`voir.ts` porte désormais l'avertissement : sa reconstruction n'est pas l'écran,
et une correction qui n'ajoute qu'une espace avant un signe (« dommage » →
« dommage ! ») paraît doubler le signe dans l'outil alors qu'elle est juste.
**Ne pas corriger ces cas-là** — il y en a soixante.

### Lot 3 — quatre doublons francs, et neuf règles des écrits professionnels

- `trait-union-inversion` — les quatre corrections doublaient le pronom
  (« Viendra-t-elle elle »). Un marqueur ne pouvant pas contenir d'espace, les
  fautes exercées sont maintenant celles qui tiennent en un mot : le t
  euphonique manquant (« Viendra-elle »), le t de trop (« dit-t-il »),
  l'apostrophe à la place du trait d'union (« Va-t'il »).
- `typo-espace-tiret-intervalle` — « 1939 1939-1945 1945 ». L'intervalle fautif
  tient maintenant en un seul token : « [1939–1945] » → « 1939-1945 ».
- `point-virgule-liste` — **règle supprimée**. Trois de ses corrections étaient
  invisibles à l'écran, et son énoncé porte sur l'énumération **verticale**, que
  le format d'une phrase par exercice ne peut pas montrer. Ses deux phrases qui
  fonctionnaient relèvent de `deux-points-enumeration`, qui existe déjà.
- `pro-restant-disposition` — la règle imposait « Restants », forme que le
  français ne connaît pas (le participe présent est invariable), se contredisait
  d'une phrase à l'autre, et contredisait `accord-participe-ayant`. Elle enseigne
  maintenant l'invariabilité.
- `pro-lettre-recommandee` — **l'énoncé était à l'envers**. La mention du
  récépissé et des textes est « avis de réception » ; « accusé de réception » est
  courant mais n'est pas la forme officielle, et le sigle LRAR vient d'*avis*.
  La règle interdisait la forme exacte et corrigeait du juste vers l'approximatif.
- `pro-objet-reference` — « Réf. : 2024-118 de devis pour le toit ».
- `pro-tutoiement` — le pronom changeait, le verbe restait à l'autre personne
  (« que tu serez présent »). C'est le verbe qui est marqué.
- `pro-formule-refus` — « Je ne peux pas de donner suite ».
- `impropriete-cloturer` — « à midi précise » : midi est masculin, la phrase
  modèle restait fautive une fois corrigée.
- `titres-oeuvres-majuscule` — **la règle enseignait l'inverse de l'usage**.
  Quand un titre commence par un article défini, la majuscule s'étend au premier
  substantif et à l'adjectif qui le précède (*Le Rouge et le Noir*, *Les Fleurs
  du mal*). L'énoncé donnait « Le rouge et le noir » en modèle, les corrections
  détruisaient des graphies correctes, et la phrase déclarée correcte était la
  seule fautive. Au passage, la contradiction avec `accord-titre-oeuvre` du lot
  006 disparaît.

Les quatre doublons francs :

- **Guillemets** : `espace-insecable-guillemet-ouvrant` (lot 002) enseignait mot
  pour mot `espace-guillemets` (lot 001). Règle supprimée ; ses quatre phrases
  distinctes — celles où seul le guillemet ouvrant est collé, dans une citation
  de plusieurs mots — rejoignent la règle qui reste, qu'elles enrichissent.
- **Double i à l'imparfait** : le lot 007 enseigne déjà la règle générale, avec
  le même verbe. `conj-verbe-rire-sourire` se recentre sur le participe passé
  *ri*, *souri* — sans t, invariable.
- **Accord après « qui »** : le lot 006 garde la règle générale (et gagne deux
  vrais pièges d'antécédent, « une des solutions qui conviennent »), le lot 011
  prend toute la tournure « c'est … qui », à toutes les personnes.
- **Marques devenues noms communs** : le lot 011 ne garde que l'invariabilité de
  la marque qui désigne le fabricant, le passage à la minuscule reste au lot 013.

Aucune de ces quatre résolutions ne perd de contenu, sauf la règle des
guillemets, dont une seule phrase faisait doublon exact.

Porte : `tsc` ✓ · `validate:content` 0 erreur / 634 avertissements · 236 tests ✓ ·
`build` ✓.

### Lot 4 — les fichiers de densification

**Deux faux positifs de l'audit, à ne pas « corriger ».** Le rapport signale
comme graves des phrases « rattachées à la mauvaise règle » : `davantage-2` qui
recevrait des phrases sur *quand même*, `eminent-2` des phrases sur
*affluence / influence*. Vérification faite, ces deux slugs du lot d'origine
**portent mal leur nom** : `davantage-2` s'intitule « quand même » et son énoncé
porte sur *quand même* ; `eminent-2` s'intitule « affluence ou influence ». Les
phrases sont donc au bon endroit. Le relecteur le dit lui-même en tête de
rapport : pour les fichiers `densify*`, il ne pouvait juger que d'après le nom du
slug. Renommer ces deux slugs effacerait la progression des comptes : **à voir
avec le propriétaire**, ce n'est pas une correction de contenu.

Un troisième outil, `.travail-audit/redites.ts` : la correction qui avale le mot
d'à côté. Le validateur repérait déjà le cas où elle se termine par le mot
suivant tout entier ; il ne voyait pas celui où le mot est accroché par une
élision — « Il attend [que] il réponde » corrigé en « qu'il » donne « qu'il il
réponde ». Onze phrases trouvées, toutes reprises.

Corrigé :

- `elision`, `quelle-quelle`, `aujourdhui`, `week-end`, `accord-quelques-uns` —
  la correction absorbait le mot suivant, qui restait en place. Les fautes
  exercées tiennent maintenant en un token : l'apostrophe oubliée, les traits
  d'union manquants.
- `quelquefois` — « il lui arrive quelquefois de rentrer » est irréprochable,
  *quelquefois* y vaut « parfois » : la phrase devient un modèle. Et « trois ou
  quelques quatre fois » n'était pas du français — le mot marqué était en trop,
  il passe en `fix: "à supprimer"`.
- `hyphen-nombres` — « vingt et un », « cent quatre-vingts », « trois cent
  cinquante » sont la graphie **traditionnelle**, parfaitement correcte ; le
  trait d'union généralisé vient des rectifications de 1990 et reste une graphie
  *admise*. Les fautes exercées sont désormais celles qui le sont sous les deux
  normes : le nombre écrit d'un seul tenant. **Reste à trancher** : l'énoncé de
  la règle, qui est dans le lot d'origine et que `PATCHES` ne peut pas modifier,
  présente encore la norme de 1990 comme la seule.
- `prescrire` — « le règlement prescrit l'usage du téléphone » se comprend très
  bien : l'exercice n'avait pas de solution. Le contexte tranche maintenant.
- `somptuaire` — « une dépense somptueuse » est correct : la règle corrigeait du
  juste vers la forme spécialisée.
- `savérer` — le fix remplaçait le verbe au lieu de l'attribut, comme dans le
  lot 003.
- `sais-sait`, `quoi-que`, `foi-foie`, `tout-tous`, `pourquoi`, `ces-ses` — des
  phrases correctes déclarées fautives (« Ils ont tout compris », « Voilà
  pourquoi il se bat », « Il range ces outils »), et des corrections qui
  emportaient le pronom (« quoi qu' arrive »). Le contexte impose maintenant la
  lecture attendue, ou la phrase devient un modèle.
- `la-plupart`, `plus-dun`, `tout-le-monde` — l'auxiliaire et le participe
  devaient changer ensemble alors qu'un seul mot peut être marqué : « est
  venus », « se sont plaint », « est rentrés ». Les phrases passent à un temps
  simple.
- `y-compris` — placé après le nom, « y compris » s'accorde : la règle corrigeait
  du juste vers le faux, à l'inverse de sa propre première phrase.
- `auxiliaire` — « Elle est descendue les escaliers ».
- `participe-présent` — suivi de son complément, le mot est un participe présent,
  donc invariable : deux phrases justes étaient déclarées fautives, et la règle
  contredisait `accord-participe-ayant`.
- `original` — « le manuscrit original », « le projet original » sont corrects :
  la règle corrigeait vers le contresens.
- `si-conditionnel` — avec une principale à l'impératif, c'est le présent qui
  s'impose : « Si tu avais le temps, passe me voir demain » n'est pas cohérent.
- `accord-avoir-affaire` — « eu à affaire à », de nouveau.
- `expr-pierre-achoppement` — **l'astuce ordonnait d'écrire la faute** que la
  règle fait corriger : « un seul p à achoppement ». Il en faut deux.

Quatre doublons de plus, entre les fichiers de densification et les lots :
`cest-moi-qui` du lot d'origine et `accord-cest-nous-qui` du lot 011 étaient la
même règle, avec des phrases jumelles — la seconde est supprimée et ses phrases
distinctes rejoignent la première. Les trois autres (`oeil-yeux` contre
`pluriel-ciel-aieul`, `deux-genres` contre `accord-adjectif-deux-noms`,
`nombreux-sujet` contre `accord-titre-oeuvre`) tenaient à des phrases jumelles
dans les additions : elles sont remplacées.

Porte : `tsc` ✓ · `validate:content` 0 erreur / 634 avertissements · 236 tests ✓ ·
`build` ✓.

### Lot 5 — les derniers graves du français

- `discute-espece-de` — la règle « disputée » donnait « **Un** espèce de bruit
  sourd » comme un modèle correct, alors que deux règles notées du même module
  corrigent « [Un] espèce de » en « Une ». « Un espèce de » n'est pas un usage
  discuté : *espèce* est féminin, aucune grammaire ne défend l'autre forme. Les
  deux phrases au masculin passent au féminin ; la nuance sur l'usage oral reste
  dans l'énoncé, à sa place.
- `cest-ce-sont` — « Ce C'est moi qui ai réservé » : le « Ce » précédait le mot
  marqué et restait en place. **Le sens « ce sont » → « c'est » est
  structurellement inexerçable** dans ce format : il demande de supprimer un mot
  en plus d'en changer un. Les deux phrases sont remplacées par des cas du sens
  inverse, qui tient en un token. La règle n'exerce donc plus qu'un sens ; son
  autre moitié reste montrée par la phrase correcte.

**Vérifications faites, sans correction nécessaire** : `accord-tout-autre` et sa
densification sont justes depuis le commit `a982311` ; les copies cassées que le
rapport signale dans les fichiers `densify2-*` (calcul avéré, nombres, élision,
quelquefois, somptuaire) ont toutes été reprises avec leurs originaux au lot 4.

Porte : `tsc` ✓ · `validate:content` 0 erreur / 634 avertissements · 236 tests ✓ ·
`build` ✓.

---

## Où en est le français

Les **90 constats graves** de `francais.md` sont traités : appliqués, ou écartés
avec leur motif. Restent, pour ce domaine, 83 constats moyens et 40 mineurs.

Deux points attendent une décision du propriétaire, parce qu'ils sortent de la
correction de contenu :

1. **Renommer deux slugs du lot d'origine.** `davantage-2` s'appelle « quand
   même », `eminent-2` s'appelle « affluence ou influence », et
   `impropriete-avoir-lair` porte sur « s'avérer ». Les noms sont trompeurs, mais
   un slug est la clé de la progression en base : le renommer efface ce que les
   trois comptes ont appris sur ces règles.
2. **L'énoncé de `hyphen-nombres`**, qui présente la norme de 1990 comme la
   seule, alors que la graphie traditionnelle reste correcte. L'énoncé vit dans
   `legacy.json`, que `PATCHES` ne sait pas modifier — il faudrait étendre le
   mécanisme de patch aux énoncés, ce qui touche au contrat « legacy.json reste
   la copie fidèle du fichier d'origine ».
