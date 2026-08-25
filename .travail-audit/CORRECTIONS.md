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

---

## Anglais — constats GRAVES

### Lot 6 — `anglais-1.md` (11 graves) et l'essentiel d'`anglais-2.md` (20 graves)

Une partie d'`anglais-1` avait déjà été appliquée au commit `e9a7302` : la
présentation, le rétroprojecteur, le tableau des modaux, la note sur *in the
country*. Restaient, et sont faits :

- **Le cours** de `en-voc-nature` répétait l'erreur que la carte, elle, avait été
  corrigée : « in the countryside pour la campagne, jamais in the country ».
  *We live in the country* est la façon la plus courante de le dire.
- `en-telephone-messages` — « in + durée, jamais within » : *within ten minutes*
  est parfaitement anglais et dit autre chose (« en moins de dix minutes »).
  Une interdiction fausse s'apprend comme une règle.
- `precision.ts` — « She can't have known. » → « Elle ne pouvait pas être au
  courant. » : c'est l'incapacité, quand la note dit qu'il s'agit d'une
  déduction. Même défaut que celui déjà corrigé dans `conjugaison-2.ts`, dans un
  autre fichier — corrigé par fait, pas par ligne.
- `en-conj-be-have-do` — « be, have et do sont **les seuls** verbes vraiment
  irréguliers », quand le même fichier consacre deux séries plus loin trois
  sections et dix cartes aux deux cents irréguliers.

Quatre doublons francs, résolus en réécrivant le côté qui recopiait :

- `en-conj-passe` reprenait cinq cartes d'`en-temps` **mot pour mot** dans le
  tableau de son cours. Nouveaux exemples, et un tip qui dit ce que la série a de
  propre (trois passés, non deux).
- `en-conj-present` refaisait une série entière (`en-conj-verbes-etat`) en une
  section et deux cartes. La section renvoie maintenant à la série, et les deux
  cartes portent sur ce que le continu dit vraiment.
- Deux séries « Vêtements et apparence », A1 et B1, avec trois cartes jumelles.
  La B1 prend ce qu'elle seule couvre : *take up / let down*, *dress up*,
  *scruffy / smart*.
- « Take after » enseigné deux fois à un parent près, et son `aussi` (« Elle
  ressemble à sa mère ») contredisait la note de sa propre carte tout en entrant
  en conflit avec `debutant.ts`.
- « She didn't come » : la même carte, la même note, dans une série A1 et une
  série B1.

`anglais-2` — quatre erreurs de fait et trois contradictions frontales :

- **« make sure to do » n'est pas une faute.** Le module l'interdisait dans un
  tip et dans une note (« jamais en anglais britannique soigné ») : Cambridge et
  Oxford la donnent comme standard. La règle inventée apprenait à corriger de
  l'anglais correct.
- **« call into question »** : deux séries se contredisaient sur la place du
  complément, et c'est celle qui l'interdisait qui avait tort.
- **« carefully peut porter sur must »** : un adverbe de manière ne modifie pas
  un modal. Une série sur les ambiguïtés réelles en inventait une.
- **« unless »** : un cours posait l'équivalence avec *if… not*, un autre la
  refusait explicitement, et chaque carte traduisait selon sa doctrine. Position
  unique, celle qui est juste : *unless* pose l'exception qui annulerait la
  phrase.
- **« furthermore »** : un cours en faisait le connecteur fort à privilégier,
  l'autre un mot devenu pompeux. Une seule position, écrite dans les deux.
- **La méthode des phrasal verbs** était enseignée à l'envers dans deux cours —
  entrer par la particule ici, par le verbe là, chacun disant l'autre voie
  trompeuse. Les deux entrées sont maintenant articulées : la particule pour
  deviner, le verbe pour réviser.
- Quatre cartes ou paragraphes recopiés d'une série à l'autre (*addresses three
  questions*, *I hear you but*, les deux cartes de passif du C1 qui reprenaient
  le B2, *trade-off*, le paragraphe *problem / issue / matter / concern*).

**Reste d'`anglais-2`, et c'est une décision à prendre** : trois doublons ne se
règlent pas en réécrivant quelques cartes, parce que ce sont des **séries
entières écrites deux fois** — « gérondif ou infinitif » (B1 et B2), « make, do,
take, have » (A2 et B2), et le cours sur la litote britannique (B2 et C2). Le
rapport propose de garder celle qui a le cours et de recentrer l'autre sur ce
qu'elle seule couvre : c'est une réécriture de dix cartes par série, pas une
correction. **À décider avec le propriétaire** avant de la mener.

Porte : `tsc` ✓ · `validate:content` 0 erreur / 634 avertissements · 236 tests ✓ ·
`build` ✓.

---

## Culture générale — constats GRAVES

### Lot 7 — `arts-musique.md` (14) et `cinema-medias.md` (10)

**Attention** : les corrections annoncées comme déjà appliquées dans
`ATELIER-REPRISE.md` (Véronèse, amendement Pelchat, moai, César du casting,
Sciamma, plan moyen…) ne l'étaient **pas** : le commit `082e3e6` a été annulé par
`6b626fc`. Elles sont faites ici. Trois l'étaient bien, en revanche, par une voie
différente : Aïda, La Bohème, le distracteur Smetana.

Arts et musique — erreurs de fait :

- **Véronèse** : l'Inquisition l'a convoqué en 1573 pour une *Cène*, rebaptisée
  *Le Repas chez Lévi*. Les Noces de Cana n'ont donné lieu à aucun procès — le
  changement de titre est précisément ce qui distingue l'autre tableau.
- **Le quota de chansons francophones** vient de l'amendement Pelchat à la loi
  Carignon du 1er février 1994, non de la loi Toubon du 4 août, qui porte sur
  l'emploi de la langue et n'institue aucun quota radiophonique.
- **Le Prométhée du Louvre** est le morceau de réception de 1762 ; 1737 est la
  date du modèle en terre cuite, qui est à Nancy.
- **Le Baiser de Rodin** : aucun marbre n'est daté de 1886. Le premier, achevé en
  1898, est au musée Rodin ; celui de Copenhague date de 1901-1904.
- **Les moai** : en 1722 les statues côtières étaient encore debout. Le
  renversement est postérieur au contact européen — le cours en faisait une cause
  antérieure.
- **Anna Maria Luisa de Médicis** : la clause est l'article 3 du pacte de famille
  du 31 octobre 1737. 1743 est l'année de sa mort, donc de l'entrée en vigueur.
  L'erreur portait aussi l'énoncé d'une question de quiz.
- **Le dernier concert de Brel** n'est ni le 6 octobre 1966 ni à l'Olympia : le
  6 octobre ouvre sa série, les adieux filmés sont de fin octobre, et son tout
  dernier concert est à Roubaix, le 16 mai 1967. C'était la bonne réponse d'une
  question.
- Deux questions à deux réponses (Léo Ferré contre Jean Ferrat ; Barbara « à
  l'international » quand l'explication justifiait tout autre chose) et un
  doublon franc sur le un pour cent artistique.

Cinéma et médias :

- **Une explication laissée en chantier** dans le cahier d'origine : elle hésite
  à voix haute (« non : citons plutôt… ») et finit par citer trois films qui
  n'ont jamais eu l'Ours d'or. C'est le seul endroit du corpus où la fabrication
  se voit à l'œil nu.
- **Le plan moyen** : c'est le plan américain qui coupe à mi-cuisses. Le cours du
  seed donnait la mauvaise correspondance, et faisait disparaître le plan
  américain de l'échelle — alors que la leçon d'origine, elle, est juste et en
  fait même une question dont « le plan moyen » est le distracteur écarté.
- **Le journal télévisé de 1949** n'est pas le premier au monde : la BBC diffuse
  le sien depuis janvier 1948, CBS depuis mai. C'était la bonne réponse d'une
  question intitulée « une première mondiale ».
- **Un César du directeur de casting qui n'existe pas.** La confusion vient de
  l'Oscar du meilleur casting, créé en 2024.
- **Un distracteur qui nomme la bonne réponse** : « Le FID de Lussas seul », quand
  le FID *est* le Festival international du documentaire de Marseille.
- Une question insoluble sur le compositeur italien (les quatre propositions
  étaient vraies, et l'explication le reconnaissait) et une attribution fausse à
  Céline Sciamma, qui n'a tourné aucun film en langue des signes.
- **Douze questions posées deux fois** dans deux lots — dont une avec les mêmes
  quatre propositions dans le même ordre, et trois qui, après les fusions de
  `cours/fusions.ts`, se retrouvaient **dans le même chapitre**. Chacune est
  remplacée par une question propre à sa notion. Et la même formule sur le code
  Hays, mot pour mot dans deux cours, laisse place à un cas d'autocensure
  contemporaine.

Porte : `tsc` ✓ · `validate:content` 0 erreur / 633 avertissements (un de moins) ·
236 tests ✓ · `build` ✓.

### Lot 8 — `espagnol-1.md` (14 graves) et `geographie-module.md` (5)

Espagnol, erreurs de fait :

- **Cinq ou six subjonctifs irréguliers ?** Deux cours du module donnaient deux
  comptes et deux listes différentes — `estar` dans l'une, absent de l'autre. Et
  la raison invoquée par la première (« faute de -o à la première personne »)
  était démentie par quatre des six verbes : *ser* fait *soy*, *ir* *voy*,
  *estar* *estoy*, *dar* *doy*. Les deux cours donnent maintenant la même liste
  de six, sans justification fausse.
- **Un cours de gérondif rangeait `poder` parmi les verbes en -ir** — c'est le
  seul de la liste en -er, et il servait d'exemple à la règle des -ir. Un
  apprenant en déduisait *comiendo → cumiendo*.
- **« un bombilla »** dans un cours, entre deux exemples correctement accordés.
- **La ponctuation des nombres** : le français ne met pas de point aux milliers
  mais une espace insécable, et la RAE recommande elle aussi l'espace. Le cours
  affirmait que « l'espagnol partage avec le français » le point.
- **`estudiar` traduit par « travailler »** : à l'exercice « produire »,
  *trabajar* — juste — aurait été compté faux.
- **« Está para llevar »** dans la série A1 du restaurant : la formule est *Es
  para llevar*. *Estar para* veut dire « être sur le point de ». La faute était
  dans la série même où l'on installe ser/estar.
- **« Un lieu, toujours estar »**, affirmé à trois endroits — alors que l'espagnol
  situe un **événement** avec *ser* (*¿dónde es la fiesta?*), ce que le module
  fait correctement cinq fois sans le dire nulle part. La règle absolue
  fabriquait la faute.
- **« Salir prend toujours de »**, démenti par trois cartes du module même
  (*salgo un momento*, *salgo a las ocho*, *salgo para Madrid*).

Trois séries écrites deux fois, à deux niveaux différents — « passé composé ou
passé simple » (A2 et B1, tip identique au caractère près), « se déplacer » (A2 et
B1), « les études » (A2 et B2), « vêtements » (A1 et B1). La série du niveau
supérieur prend chaque fois ce qu'elle apporte vraiment : imparfait contre passé
simple, *perder el tren* et *atasco*, *convocatoria* et *asignatura pendiente*,
*pegar con* et *de segunda mano*.

Géographie, module :

- Le Kenya n'a pas **le seul** drapeau à porter une arme traditionnelle : celui
  de l'Eswatini en porte, et le fichier le dit trois cents lignes plus loin.
- **Addis-Abeba** : 2 355 m, pas 2 500, et le rang annoncé (troisième capitale la
  plus haute) est faux **selon les chiffres du fichier lui-même**, qui place La
  Paz, Quito et Bogota au-dessus.
- L'Éthiopie n'est pas le **seul** pays d'Afrique jamais colonisé — le Libéria
  non plus, et le fichier des pays le dit. Cette phrase s'affiche en tête de la
  série « Drapeaux — Afrique » : c'est la première que l'apprenant lit.
- **Berne** : le vote de 1848 opposait Berne à Zurich et à Lucerne. Genève, entrée
  dans la Confédération en 1815, n'était pas candidate.
- **Le Sahara occidental**, seul endroit du module où cliquer au bon endroit
  comptait faux. Deux séries demandent le Maroc, et le tracé du Sahara était une
  forme distincte et cliquable, jamais étiquetée ni jamais demandée. Les deux
  tracés sont **fusionnés en un seul**, deux sous-chemins sous l'identifiant du
  Maroc — un simple partage d'identifiant aurait cassé le contrôle « aucun
  identifiant en double » du test des fonds de carte, qu'il n'était pas question
  d'affaiblir.

**Écarté, faute d'être une correction** : le rapport signale que sept cartes sur
680 seulement portent un `aussiEtranger`, si bien que l'exercice « produire »
sanctionne des réponses espagnoles justes. C'est un manque de contenu à produire
sur tout le module, pas une erreur à corriger — **à décider avec le propriétaire**.

Porte : `tsc` ✓ · `validate:content` 0 erreur / 633 avertissements · 236 tests ✓ ·
`build` ✓.

### Lot 9 — `institutions-economie.md` (14) et `langue-francaise.md` (32)

Institutions : les quatre erreurs de fait (zone euro à vingt et un depuis
l'entrée de la Bulgarie, deux motions de censure abouties depuis décembre 2024,
la commission de déontologie supprimée en 2020, le Nobel 2002 attribué à Tversky
mort en 1996) étaient déjà appliquées par le commit `d696b93` — sauf **le cours**,
qui écrivait encore « vingt pays utilisent l'euro ». Six questions posées deux
fois dans deux notions, avec la même réponse à la reformulation près (CSG,
chômage partiel, indice de Gini, vice caché, DMA, dette souveraine), sont
remplacées par des questions que leur notion ne couvrait pas.

Langue française — erreurs de fait :

- **Choucroute** : l'alsacien *sürkrüt*, c'est « chou aigre ». Le mot contient
  bien un chou — c'est *sür* (aigre) qui a été réinterprété en « chou », et *krüt*
  (chou) en « croûte ». Le cours affirmait qu'il n'y avait « aucun chou à
  l'origine » : le seul exemple donné de l'étymologie populaire contredisait la
  règle qu'il illustrait.
- **La loi Deixonne n'a jamais couvert l'alsacien** — dialecte germanique relevant
  d'un régime distinct. La question contredisait la leçon d'accueil de sa propre
  notion, et c'est la question qui avait tort.
- **La glottophobie n'est pas punie par la loi.** La proposition de loi a été
  adoptée par l'Assemblée en 2020 mais n'a jamais abouti au Sénat : l'accent ne
  figure pas à l'article 225-1 du code pénal.
- **Le référendum de 1995** n'a pas été perdu « à moins d'un point » : 50,58 %
  contre 49,42 %, soit 1,16 point. L'erreur était dans la question **et** dans le
  cours.
- **`gargantuesque` n'est pas un mot de Rabelais** : la formation est du XIXe
  siècle, trois siècles après le livre.
- **Breton reprend « surréalisme » en 1924**, sept ans après Apollinaire et non
  trois — la question du même module écrivait d'ailleurs 1924.
- *anagramme* est féminin, et le cours du module le range lui-même parmi les
  féminins ; *moliériser* n'existe pas ; « cette dernière » disait littéralement
  que l'Afrique orientale est parlée par cent millions de personnes ; « deux
  exceptions » étaient suivies de cinq exceptions ; et deux expressions non
  bibliques (« le péché mignon », « un travail de bénédictin ») figuraient dans
  une liste donnée comme biblique.
- **« je m'en rappelle » donné comme une hypercorrection** : le cours de la même
  notion en fait une régularisation analogique, et la phrase n'avait pas de sens —
  on ne dit pas une forme « par crainte de » la forme correcte.

Trois questions dont **l'explication déclarait elle-même vrai le distracteur**
classé faux (le mot réemprunté, le séducteur littéraire, le verbicruciste) : les
énoncés départagent maintenant.

Huit questions qui, **par l'effet des fusions**, redisaient dans la même série le
quiz de la leçon d'accueil — la langue d'oïl, les Francs, le basque, le breton,
l'alsacien, Mistral, les rectifications de 1990, la féminisation. Toutes
remplacées, aucune supprimée. Et deux paragraphes consécutifs de la même section
qui disaient exactement la même chose sur le point final des messages courts.

**Les deux chantiers que ce rapport ouvre et que je n'ai pas menés**, parce qu'ils
ne se corrigent pas constat par constat :

1. **Le biais de longueur.** Mesuré ici sur 515 questions d'institutions : la
   bonne réponse est la plus longue dans **86 %** des cas, et « je coche toujours
   la plus longue sans lire » donne **87 %**. Sur la langue française, 83 %. C'est
   le point 3 de l'ordre de marche, et il vaut pour tout le module.
2. **Le filtre `dedoublonner()`**, qui ne rattrape aucun des doublons signalés :
   le rapport donne une paire d'énoncés identiques à 88 % qui passe, parce que la
   condition `&&` exige aussi un recouvrement des réponses — reformuler la bonne
   réponse suffit à faire passer n'importe quel doublon. C'est le point 4, et les
   paires citées dans les rapports en forment le jeu d'essai.

Porte : `tsc` ✓ · `validate:content` 0 erreur / 634 avertissements · 236 tests ✓ ·
`build` ✓.
