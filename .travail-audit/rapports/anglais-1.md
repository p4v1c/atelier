# Anglais — moitié débutant à intermédiaire

> ÉTAT : terminé. Passe 1 et passe 2 faites sur les 14 fichiers du périmètre.

## Ce que j'ai lu

54 séries, 540 cartes, 21 cours rédigés (soit ~90 sections de cours et une
soixantaine de visuels : tableaux, comparaisons, frises, étapes).

| Fichier | Séries | Cartes | Cours |
|---|---|---|---|
| `bases.ts` | 4 | 40 | — |
| `debutant.ts` | 6 | 60 | — |
| `quotidien-a1.ts` | 5 | 50 | — |
| `conjugaison.ts` | 3 | 30 | 3 |
| `conjugaison-2.ts` | 8 | 80 | 8 |
| `verbes.ts` | 5 | 50 | — |
| `vocabulaire-vie.ts` | 6 | 60 | — |
| `vocabulaire-monde.ts` | 5 | 50 | 5 |
| `monde-2.ts` | 8 | 80 | — |
| `expressions.ts` | 5 | 50 | 5 |
| `faux-amis.ts` | 4 | 40 | — |
| `travail.ts` | 3 | 30 | — |
| `prononciation.ts` | 6 | 60 | 6 |
| `cours-grammaire.ts` | 4 | 40 | 4 |

---

## Constats

### [GRAVE] « Je ne suis pas bien » ne veut pas dire « I don't quite follow »

- **Où** : `bases.ts:47` — `en-presentation`
- **Texte** : `{ etranger: "I don't quite follow.", francais: "Je ne suis pas bien.", aussi: ["Je ne comprends pas tout."] }`
- **Problème** : en français, « Je ne suis pas bien » signifie sans ambiguïté
  qu'on se sent mal. Le sens visé (« je ne te suis pas ») demande le pronom.
  Pire : `quotidien-a1.ts:107` enseigne « I don't feel well. » → « Je ne me sens
  pas bien. » L'apprenant apprend donc deux phrases françaises quasi identiques
  pour deux sens opposés. En exercice « produire », le français principal ici
  appellera légitimement *I don't feel well*, qui sera compté faux.
- **Correction proposée** : `francais: "Je ne te suis pas bien."`, garder
  l'`aussi`, et ajouter `aussiEtranger: ["I'm not sure I follow."]`.

### [GRAVE] « In the country » veut bel et bien dire « à la campagne »

- **Où** : `vocabulaire-monde.ts:368` (note de carte) **et** le cours de la même
  série, section « Le relief et l'eau » — `en-voc-nature`
- **Texte** : note de la carte : « In the countryside, la campagne. « In the
  country » veut dire dans le pays. » — cours : « Et in the countryside pour la
  campagne, jamais « in the country », qui veut dire « dans le pays ». »
  L'erreur est donc énoncée deux fois, une fois dans le chapitre et une fois
  dans la carte qui le met en pratique : elle sera lue puis révisée.
- **Problème** : erreur de fait sur l'usage. *We live in the country* est la
  façon la plus courante de dire « nous vivons à la campagne » en anglais, des
  deux côtés de l'Atlantique — *countryside* est même plutôt le mot du paysage
  que celui du lieu d'habitation. La note interdit une tournure parfaitement
  standard.
- **Correction proposée** : « In the countryside ou in the country, à la
  campagne. Country dit aussi le pays : c'est le contexte qui tranche. »

### [GRAVE] Un rétroprojecteur n'est pas un vidéoprojecteur

- **Où** : `faux-amis.ts` — `en-pieges-anglicismes`, carte « a data projector »
- **Texte** : « En français on dit parfois « un rétroprojecteur ». Un beamer, en
  anglais courant, est une BMW. »
- **Problème** : erreur de fait. Un rétroprojecteur projette des transparents
  (*overhead projector*) ; un vidéoprojecteur reçoit un signal vidéo (*data
  projector*, *video projector*). Ce sont deux appareils différents. La note
  enseigne une confusion.
- **Correction proposée** : « Video projector se dit aussi. Un beamer, en
  anglais courant, est une BMW — c'est l'allemand qui appelle ainsi le
  projecteur. »

### [GRAVE] « Il ne pouvait pas savoir » n'est pas la traduction de « He can't have known »

- **Où** : `conjugaison-2.ts` — `en-conj-modaux-passe`, tableau « Chaque modal,
  sa valeur au passé » et carte 2
- **Texte** : tableau : `["can't have", "impossibilité déduite",
  "He can't have known.", "il ne pouvait pas savoir"]` — carte :
  `{ etranger: "He can't have known about it.", francais: "Il ne pouvait pas être au courant." }`
- **Problème** : « il ne pouvait pas savoir » exprime l'incapacité (*he couldn't
  have known*, *he had no way of knowing*), pas la déduction. Or toute la série
  enseigne que *can't have* est la **négation de must have**, c'est-à-dire une
  déduction. La carte détruit donc ce qu'elle prétend enseigner, et en exercice
  inverse elle installe le mauvais couple.
- **Correction proposée** : tableau → « ce n'est pas possible qu'il ait su » ;
  carte → `francais: "Il ne peut pas avoir été au courant."`, avec
  `aussi: ["Ce n'est pas possible qu'il ait été au courant."]`.

### [GRAVE] `verbes.ts:en-temps` et `conjugaison.ts:en-conj-passe` sont la même série

- **Où** : `verbes.ts:86-124` (`en-temps`) et `conjugaison.ts:141-221`
  (`en-conj-passe`)
- **Texte** : le tip de l'un — « Une date, une heure ou un « hier » exigent le
  prétérit. Un lien avec maintenant appelle le present perfect. » — et celui de
  l'autre — « Une date ou un « hier » ferment le passé et imposent le prétérit.
  Un lien avec maintenant appelle le present perfect. » Le tableau « La même
  idée, deux temps » du cours de `en-conj-passe` reprend **mot pour mot** cinq
  cartes de `en-temps` : « Je l'ai vu deux fois cette semaine. / I've seen him
  twice this week. », « Tu as fini ? / Have you finished? », « Tu as fini
  quand ? / When did you finish? », « Elle habite ici depuis 2019. / She has
  lived here since 2019. », « Elle y a habité dix ans. / She lived there for ten
  years. »
- **Problème** : doublon franc. Deux séries de dix cartes chacune sur le même
  point, dont l'une reproduit l'autre dans son cours. L'apprenant fait deux fois
  le même travail sans le savoir.
- **Correction proposée** : supprimer `verbes.ts:en-temps` et garder
  `en-conj-passe`, qui a le cours ; ou vider le tableau du cours de ses exemples
  repris et refaire les dix cartes de `en-temps` sur d'autres verbes.

### [GRAVE] `conjugaison.ts` et `conjugaison-2.ts` enseignent deux fois les verbes d'état

- **Où** : `conjugaison.ts:79-81` (section « Les verbes qui refusent le
  continu », série `en-conj-present`) et `conjugaison-2.ts` — série entière
  `en-conj-verbes-etat`
- **Texte** : cartes quasi identiques —
  `conjugaison.ts:118` : « I know the answer. » / « Je connais la réponse. » /
  note « Know décrit un état : jamais de continu. « I am knowing » n'existe
  pas. »
  `conjugaison-2.ts` : « I know the answer already. » / « Je connais déjà la
  réponse. » / note « Know est un état : « I am knowing » n'existe pas. »
  Idem pour « We're having lunch. » / « We're having lunch right now. », avec la
  même explication (*have* au sens de prendre redevient une action).
- **Problème** : doublon de contenu ET de cours. La section de `en-conj-present`
  fait doublon avec une série complète de dix cartes et trois sections.
- **Correction proposée** : retirer la section « Les verbes qui refusent le
  continu » de `en-conj-present` et ses deux cartes (know, having lunch), en
  renvoyant à `en-conj-verbes-etat`.

### [GRAVE] Deux séries « Vêtements et apparence » quasi identiques

- **Où** : `vocabulaire-monde.ts` — `en-voc-vetements` (« Les vêtements et
  l'apparence », A1) et `monde-2.ts` — `en-voc-mode` (« Vêtements et
  apparence », B1)
- **Texte** : titres presque identiques ; cartes jumelles —
  `en-voc-vetements` : « These shoes don't fit me. » / « Ces chaussures ne sont
  pas à ma taille. » + note « Fit parle de la taille, suit du style. » ;
  `en-voc-mode` : « This jacket doesn't fit me. » / « Cette veste n'est pas à ma
  taille. » + note « Fit, la taille. » Même chose pour *suit* (« That colour
  really suits you. » / « The cut suits her figure. ») et pour *wear vs put on*
  (« Wear pour ce qu'on a sur soi ; put on pour le geste » apparaît dans les
  deux).
- **Problème** : doublon franc entre deux fichiers, avec des niveaux annoncés
  différents (A1 et B1) pour le même contenu.
- **Correction proposée** : fusionner. Garder `en-voc-vetements` pour le
  vocabulaire (pluriels permanents, GB/US) et recentrer `en-voc-mode` sur ce
  qu'il a de propre : *match / go with*, *take up / let down*, *dress up / dress
  down*, *scruffy / smart*, *have something done*.

### [GRAVE] « Take after » enseigné deux fois à l'identique

- **Où** : `vocabulaire-vie.ts` — `en-voc-famille` et `monde-2.ts` —
  `en-voc-enfance`
- **Texte** : « She takes after her mother. » / « Elle tient de sa mère. » d'un
  côté ; « She takes after her father. » / « Elle tient de son père. » de
  l'autre. Seul le parent change.
- **Problème** : doublon franc. Et il produit un conflit de réversibilité :
  `en-voc-famille` accepte « Elle ressemble à sa mère. » comme `aussi` de *takes
  after*, alors que `debutant.ts:57` enseigne « She looks like her mother. » →
  « Elle ressemble à sa mère. » Le même français attend donc deux anglais
  différents selon la série.
- **Correction proposée** : supprimer la carte de `en-voc-enfance` (elle n'a
  rien d'enfantin), et retirer l'`aussi` « Elle ressemble à sa mère. » de
  `en-voc-famille`, qui contredit la note même de la carte.

### [GRAVE] « Jamais within » : la note interdit un mot correct

- **Où** : `quotidien-a1.ts:178` — `en-telephone-messages`
- **Texte** : « Call back en deux mots. Et in + durée pour un délai à venir,
  jamais « within ». »
- **Problème** : *within ten minutes* est parfaitement anglais et très courant ;
  il dit simplement « en moins de dix minutes » là où *in ten minutes* dit
  « dans dix minutes ». La note pose une interdiction fausse, et prive
  l'apprenant d'une nuance utile. Les remarques d'usage sont ce qui enseigne :
  une interdiction fausse est apprise comme une règle.
- **Correction proposée** : « Call back en deux mots. In + durée dit le délai au
  bout duquel : in ten minutes, dans dix minutes. Within dit avant la fin
  du délai : within ten minutes, en moins de dix minutes. »

### [MOYEN] ✅ Le tip sur l'heure est incohérent et faux

- **Où** : `debutant.ts:17` — `en-nombres-heure`
- **Texte** : « L'anglais dit les heures à l'envers du français : half past
  four, c'est quatre heures et demie, pas quatre heures et demie de retard. »
- **Problème** : la phrase se contredit (« à l'envers du français » puis une
  traduction identique au français) et sa seconde moitié — « pas quatre heures
  et demie de retard » — ne veut rien dire. Le piège réel visé est probablement
  l'allemand *halb fünf* (= 4 h 30), qui n'est jamais nommé.
- **Correction proposée** : « Half past four, c'est quatre heures et demie : en
  anglais, past compte à partir de l'heure passée, jamais de l'heure à venir. »
- **Fait** : `debutant.ts` (`en-nombres-heure`) : tip remplacé par « Half past four, c'est quatre heures et demie : en anglais, past compte à partir de l'heure passée, jamais de l'heure à venir. »

### [MOYEN] ✅ « Jamais half five » est trompeur : half five existe, et vaut 5 h 30

- **Où** : `debutant.ts:23` — `en-nombres-heure`
- **Texte** : « Half past + l'heure passée. Jamais « half five » pour quatre
  heures et demie. »
- **Problème** : littéralement vrai, pratiquement trompeur. L'anglais
  britannique familier dit couramment *half five* — et cela veut dire 5 h 30. La
  note laisse croire que la forme n'existe pas.
- **Correction proposée** : « Half past four, quatre heures et demie. Attention :
  le britannique familier abrège en half four — et cela veut dire quatre heures
  et demie, pas trois heures et demie. »
- **Fait** : `debutant.ts` : note de la carte remplacée, mention de « half four » ajoutée avec sa vraie valeur (quatre heures et demie).

### [MOYEN] ✅ « Yet appelle toujours le present perfect » est faux

- **Où** : `conjugaison.ts:218` — `en-conj-passe`
- **Texte** : « Yet appelle toujours le present perfect. »
- **Problème** : « toujours » est réfuté par des phrases de niveau A1 : *It isn't
  ready yet*, *Don't go yet*, *I'm not hungry yet*. Et en anglais américain le
  prétérit avec *yet* (*I didn't finish yet*) est courant.
- **Correction proposée** : « Avec un verbe, yet appelle le present perfect en
  britannique : we haven't decided yet. Avec be ou un impératif, il s'emploie
  librement : it isn't ready yet. »
- **Fait** : `conjugaison.ts` (`en-conj-passe`) : note remplacée par la version nuancée (present perfect en britannique avec un verbe, libre avec be/impératif).

### [MOYEN] ✅ Le tip dit que « mustn't have » n'existe pas, le cours dit le contraire

- **Où** : `conjugaison-2.ts` — `en-conj-modaux-passe`
- **Texte** : tip : « Jamais mustn't have, qui n'existe pas dans ce sens. » —
  cours, deux écrans plus loin : « Dire « he mustn't have finished » s'entend
  dans l'anglais américain familier, mais reste hors norme en britannique. »
- **Problème** : contradiction tip ↔ cours dans la même série. L'apprenant lit
  d'abord « n'existe pas », puis « s'entend ».
- **Correction proposée** : tip → « La négation de must have est can't have.
  Mustn't have s'entend en américain familier, mais ne s'écrit pas. »
- **Fait** : `conjugaison-2.ts` (`en-conj-modaux-passe`) : tip remplacé par « La négation de must have est can't have. Mustn't have s'entend en américain familier, mais ne s'écrit pas. »

### [MOYEN] ✅ La famille d'irréguliers « ight » est mal étiquetée, et le cours se contredit lui-même

- **Où** : `conjugaison-2.ts` — `en-conj-irreguliers-familles`, tableau « Les
  grandes familles », puis carte 4
- **Texte** : tableau : `["ight (les trois)", "fight, fought, fought",
  "buy, bring, think, catch, teach"]` — carte : « Famille en -ought et -aught :
  think, buy, bring, catch, teach, fight. »
- **Problème** : l'étiquette « ight » est fausse — c'est *-ought / -aught* qui
  fait la famille, et *buy, bring, think, catch, teach* n'ont pas de « igh ». Le
  cours et la carte donnent deux étiquettes différentes pour la même famille.
- **Correction proposée** : remplacer la ligne du tableau par
  `["-ought / -aught", "fight, fought, fought", "buy, bring, think, catch, teach"]`.
- **Fait** : `conjugaison-2.ts` : étiquette du tableau changée en « -ought / -aught ».

### [MOYEN] ✅ `hide` ne suit pas le schéma i - o - i(dd)en

- **Où** : `conjugaison-2.ts` — `en-conj-irreguliers-familles`, tableau
- **Texte** : `["i - o - i(dd)en", "ride, rode, ridden", "drive, write, rise, hide"]`
- **Problème** : *hide* fait *hid*, pas « hode ». La voyelle du prétérit ne
  bascule pas comme dans *rode, drove, wrote, rose*. Le mettre dans cette famille
  fait produire « hode ».
- **Correction proposée** : retirer *hide* de la liste, ou l'y laisser avec la
  mention « (hid au prétérit) ».
- **Fait** : `conjugaison-2.ts` : `hide` retiré de la liste des membres, remplacé par une mention « (hid au prétérit) » à côté de rise.

### [MOYEN] ✅ Le mot « bright » opposé à « light » sur le poids

- **Où** : `quotidien-a1.ts:77` — `en-maison`
- **Texte** : « Flat au Royaume-Uni, apartment aux États-Unis. Bright pour la
  lumière, light pour le poids. »
- **Problème** : *a light room* est un anglais parfaitement idiomatique pour une
  pièce claire. La note laisse croire que *light* ne peut pas dire la lumière,
  ce qui est faux, et prive du couple utile *light / dark* pour une pièce.
- **Correction proposée** : « Flat au Royaume-Uni, apartment aux États-Unis.
  Bright dit la lumière vive ; light dit aussi la clarté d'une pièce, et le
  poids léger — c'est le contexte qui tranche. »
- **Fait** : `quotidien-a1.ts` (`en-maison`) : note remplacée par la version qui garde light pour la clarté d'une pièce et le poids léger.

### [MOYEN] ✅ « Is that…? au téléphone, ailleurs is it » ignore l'américain

- **Où** : `quotidien-a1.ts:154` et `:163` — `en-telephone-messages`
- **Texte** : tip : « Au téléphone, l'anglais britannique dit is that…? et non
  « is it…? ». » — note : « Is that…? au téléphone. Ailleurs, on dirait is it —
  mais pas dans un appel. »
- **Problème** : la note est incomplète au point d'être trompeuse. Au téléphone,
  l'anglais américain dit *Is this Sarah?* — forme dominante et jamais
  mentionnée. Et « ailleurs on dirait is it » est faux pour identifier une
  personne : on dit *Is that Sarah?* aussi en face-à-face au téléphone
  uniquement, mais jamais *is it Sarah?* pour interpeller quelqu'un.
- **Correction proposée** : « Is that…? au téléphone en britannique, is this…?
  en américain. Jamais is it pour identifier la personne au bout du fil. »
- **Fait** : `quotidien-a1.ts` (`en-telephone-messages`) : tip et note de la carte réécrits pour mentionner Is this…? en américain et exclure is it pour identifier quelqu'un.

### [MOYEN] ✅ « Compulsory britannique, mandatory ailleurs » est inexact

- **Où** : `vocabulaire-vie.ts` — `en-voc-education`, carte « Attendance is
  compulsory. »
- **Texte** : « Compulsory en anglais britannique, mandatory ailleurs. »
- **Problème** : *mandatory* est parfaitement courant en anglais britannique
  (contextes juridiques et administratifs), et *compulsory* s'emploie aux
  États-Unis. La répartition géographique annoncée n'existe pas ; la vraie
  différence est de registre et de collocation (*compulsory education*,
  *mandatory sentence*).
- **Correction proposée** : « Compulsory est le mot de l'école et de
  l'administration britanniques ; mandatory, plus juridique, s'emploie des deux
  côtés. »
- **Fait** : `vocabulaire-vie.ts` (`en-voc-education`) : note remplacée par la distinction de registre/collocation plutôt que géographique.

### [MOYEN] ✅ « Redoubler un examen » n'est pas français

- **Où** : `vocabulaire-vie.ts` — `en-voc-education`, carte « He resat the exam
  in September. »
- **Texte** : `aussi: ["Il a redoublé l'examen en septembre."]`
- **Problème** : en français on redouble une classe ou une année, jamais un
  examen. L'`aussi` est une réponse acceptée par l'exercice : le contenu valide
  donc une faute de français.
- **Correction proposée** : remplacer par « Il a repassé l'épreuve en
  septembre. »
- **Fait** : `vocabulaire-vie.ts` : `aussi` remplacé par « Il a repassé l'épreuve en septembre. »

### [MOYEN] ✅ « Parents au sens français se dit relatives »

- **Où** : `vocabulaire-vie.ts` — `en-voc-famille`, carte « We're distantly
  related. »
- **Texte** : « Be related to someone, avoir un lien de parenté. Parents au sens
  français se dit relatives. »
- **Problème** : ambigu au point d'être faux. Le sens premier du français
  « parents » est *le père et la mère* — qui se dit précisément *parents* en
  anglais. C'est le sens second (« les parents éloignés ») qui donne *relatives*.
  Formulée ainsi, la note fait croire que *my parents* est un faux ami.
- **Correction proposée** : « Attention au double sens français : les parents,
  père et mère, se disent parents ; les parents au sens de la parenté élargie se
  disent relatives. »
- **Fait** : `vocabulaire-vie.ts` (`en-voc-famille`) : note réécrite pour distinguer clairement parents (père et mère) et relatives (parenté élargie).

### [MOYEN] ✅ « Le mot magic » et autres franglais dans les textes français

- **Où** : `debutant.ts:117` — `en-acheter` ; `expressions.ts` — cours
  `en-expr-emotions` ; `vocabulaire-monde.ts:84` — cours `en-voc-cuisine`
- **Texte** : « Le mot magic en anglais commercial est would » — « L'anglais a
  plus de formules de surprise que le français, et elles se gradent. » — « A
  librairie n'a rien à voir, mais a receipt non plus »
- **Problème** : « le mot magic » (pour *magique*), « elles se gradent » (verbe
  inexistant ; le même cours écrit correctement « L'accord aussi se gradue »
  deux paragraphes plus loin) et « A librairie n'a rien à voir » (article
  anglais collé à un mot français, phrase incompréhensible) sont des fautes de
  français dans du contenu qui enseigne la langue.
- **Correction proposée** : « Le mot magique… » ; « … et elles s'échelonnent. » ;
  « A library n'est pas une librairie, et a receipt n'est pas une recette : c'est
  le ticket de caisse. »
- **Fait** : trois fautes corrigées : `debutant.ts` tip « Le mot magique… », `expressions.ts` cours « … et elles s'échelonnent. », `vocabulaire-monde.ts` cours « A library n'est pas une librairie, et a receipt n'est pas une recette ».

### [MOYEN] ✅ « Commander un entrée » — accord

- **Où** : `vocabulaire-monde.ts:84` — cours `en-voc-cuisine`
- **Texte** : « Commander un entrée à New York en croyant prendre une entrée
  fait arriver un steak. »
- **Problème** : « un entrée » — le mot est féminin. Et la phrase mélange sans
  le marquer le mot anglais *an entrée* et le mot français « une entrée ».
- **Correction proposée** : « Commander an entrée à New York en croyant prendre
  une entrée fait arriver un steak. »
- **Fait** : `vocabulaire-monde.ts` (cours `en-voc-cuisine`) : « un entrée » remplacé par « an entrée » pour lever l'ambiguïté anglais/français.

### [MOYEN] ✅ « Much cheese » donné comme forme affirmative normale

- **Où** : `vocabulaire-monde.ts` — `en-voc-cuisine`, section « Ce qui se compte
  et ce qui ne se compte pas »
- **Texte** : « On dit some bread, a lot of rice, much cheese. »
- **Problème** : *much* à l'affirmative est rare et soutenu en anglais moderne —
  on dit *a lot of cheese*. La série `cours-grammaire.ts:en-cours-quantifieurs`
  le sait et l'écrit (« À l'oral, a lot of remplace much et many partout »).
  Contradiction entre deux cours du module.
- **Correction proposée** : « On dit some bread, a lot of rice, a lot of cheese —
  much et many appartiennent surtout aux questions et aux négations. »
- **Fait** : `vocabulaire-monde.ts` : texte remplacé par « a lot of cheese » avec la précision sur much/many à l'affirmative.

### [MOYEN] ✅ Réversibilité : « J'y vais » ne donne pas « I'll get it »

- **Où** : `conjugaison.ts:278` — `en-conj-futur`
- **Texte** : `{ etranger: "I'll get it.", francais: "J'y vais.", aussi: ["Je réponds."] }`
- **Problème** : le français principal est celui qui sert de consigne en exercice
  « produire ». « J'y vais » appelle *I'm going*, *I'm off*, *I'll go* — jamais
  *I'll get it*, qui suppose un téléphone ou une sonnette. Le contexte n'est que
  dans la note.
- **Correction proposée** : `francais: "Je réponds."`, `aussi: ["J'y vais.", "J'y vais, moi."]`,
  et rendre le contexte explicite : `etranger: "The phone's ringing. — I'll get it."`
- **Fait** : `conjugaison.ts` (`en-conj-futur`) : carte réécrite — `etranger` devient « The phone's ringing. — I'll get it. », `francais` « Je réponds. », `aussi` inclut « J'y vais. »

### [MOYEN] ✅ Réversibilité : plusieurs cartes n'acceptent qu'une traduction sur plusieurs légitimes

- **Où** : plusieurs séries. Cas relevés :
  - `conjugaison.ts:280` — « I'm meeting Sarah at six. » / « Je vois Sarah à six
    heures. » : le français appelle tout autant *I'm seeing Sarah at six*.
  - `travail.ts:49` — « What's the deadline? » / « C'est pour quand ? » : appelle
    *When is it due?*, *When do you need it by?*
  - `conjugaison-2.ts` — « Had it not been for her, we would have failed. » /
    « Sans elle, nous aurions échoué. » : le français appelle *Without her…*
  - `expressions.ts` — « You can't have it both ways. » / « Il faut choisir. » :
    « Il faut choisir » n'appelle jamais cette expression.
  - `faux-amis.ts` — « a formation » / « une formation géologique » : le français
    appelle *a geological formation*.
  - `monde-2.ts` — « They're still coming to terms with it. » / « Ils font encore
    leur deuil. » : la note dit elle-même que le deuil se dit *grieve*.
- **Problème** : dans chacun de ces cas l'apprenant sera corrigé à tort en
  exercice « produire ». C'est le défaut le plus systématique du module :
  `aussiEtranger` n'est employé que sur une vingtaine de cartes sur 540.
- **Correction proposée** : ajouter `aussiEtranger` à chacune, ou changer le
  français principal pour celui qui n'admet qu'une traduction.
- **Fait** : `aussiEtranger`/`aussi` ajoutés ou français principal changé sur les 6 cas cités : `conjugaison.ts` (I'm meeting Sarah → + aussiEtranger), `travail.ts` (What's the deadline? → + aussiEtranger), `conjugaison-2.ts` (Had it not been for her → + aussiEtranger), `expressions.ts` (You can't have it both ways → français principal changé pour l'idiome équivalent), `faux-amis.ts` (a formation → + aussiEtranger a geological formation), `monde-2.ts` (coming to terms with it → français principal et aussi permutés).

### [MOYEN] ✅ Réversibilité auto-signalée : needn't have

- **Où** : `conjugaison-2.ts` — `en-conj-modaux-passe`
- **Texte** : la carte « You needn't have waited for me. » / « Tu n'avais pas
  besoin de m'attendre. » — alors que le cours de la même série écrit : « La
  différence est réelle et le français ne la marque pas : les deux se traduisent
  par « je n'avais pas besoin de payer ». »
- **Problème** : le cours reconnaît explicitement que ce français ne distingue
  pas *needn't have* de *didn't need to*, et la carte le prend quand même comme
  consigne de production. La carte suivante (« I didn't need to pay in the end. »)
  a le même français à un mot près.
- **Correction proposée** : `francais: "Tu m'as attendu pour rien."` — qui, lui,
  porte la nuance de *needn't have*.
- **Fait** : `conjugaison-2.ts` : français changé en « Tu m'as attendu pour rien. », qui porte la nuance de needn't have.

### [MOYEN] ✅ L'heure traduite de trois façons différentes selon la série

- **Où** : quatre fichiers
- **Texte** :
  - `conjugaison.ts:281` — « The train leaves at eight. » → « à huit heures »
  - `vocabulaire-vie.ts` — « The news is on at eight. » → « à vingt heures »
  - `conjugaison-2.ts` — « I'm seeing the dentist at four. » → « à seize heures »
  - `vocabulaire-monde.ts:465` — « The post office closes at five. » → « à
    dix-sept heures »
  - `quotidien-a1.ts:328` — « The concert starts at eight. » → « à huit heures »
- **Problème** : *at eight* donne « huit heures » dans une série et « vingt
  heures » dans une autre. En exercice inverse, « à vingt heures » et « à seize
  heures » n'appellent pas *at eight* / *at four* mais *at eight p.m.* /
  *at 4 p.m.* L'incohérence est interne au module.
- **Correction proposée** : fixer une convention (l'heure sur douze, comme
  l'anglais l'écrit) et l'appliquer partout ; ou écrire *at 8 p.m.* dans
  l'anglais quand le français dit « vingt heures ».
- **Fait** : convention unifiée sur l'heure « sur douze » telle que l'anglais l'écrit : `vocabulaire-vie.ts` (vingt heures → huit heures), `conjugaison-2.ts` (seize heures → quatre heures), `vocabulaire-monde.ts` (dix-sept heures → cinq heures). `conjugaison.ts` et `quotidien-a1.ts` étaient déjà conformes.

### [MOYEN] ✅ Doublon : « Je regarde, merci » enseigné deux fois

- **Où** : `debutant.ts:74` (`en-manger`) et `debutant.ts:126` (`en-acheter`)
- **Texte** : « I'm just having a look, thanks. » / « Je regarde seulement,
  merci. » d'un côté ; « I'm just looking, thanks. » / « Je regarde, merci. » de
  l'autre.
- **Problème** : doublon dans le même fichier, avec des français quasi
  identiques attendant deux anglais différents. De plus la carte est dans
  `en-manger` (« Commander, refuser, demander l'addition ») alors qu'elle
  appartient au magasin : elle est hors sujet dans sa série.
- **Correction proposée** : supprimer la carte de `en-manger` et ajouter
  `aussiEtranger: ["I'm just having a look, thanks.", "Just looking, thanks."]`
  à celle de `en-acheter`.
- **Fait** : `debutant.ts` : carte d'`en-manger` remplacée par « Do you have a table for two? », et `aussiEtranger` ajouté à la carte d'`en-acheter`.

### [MOYEN] ✅ Doublon : l'étage britannique enseigné trois fois

- **Où** : `debutant.ts:30`, `quotidien-a1.ts:41`, `verbes.ts:142`
- **Texte** : « Au Royaume-Uni, le first floor est notre premier ; aux
  États-Unis, c'est le rez-de-chaussée. » — « le second floor britannique est
  notre deuxième, l'américain notre premier. » — « Attention : le second floor
  britannique est le deuxième, l'américain le premier. »
- **Problème** : le même fait dans trois séries, dont deux avec une note presque
  identique mot pour mot.
- **Correction proposée** : garder la carte de `en-maison` (`quotidien-a1.ts`) et
  alléger les deux autres notes.
- **Fait** : `quotidien-a1.ts` (`en-maison`) conservée telle quelle comme référence ; notes allégées dans `debutant.ts` et supprimées dans `verbes.ts` (la carte elle-même a été retirée en recentrant `en-prepositions` sur le temps, voir plus bas).

### [MOYEN] ✅ Doublon : « at the weekend / on the weekend » deux fois

- **Où** : `quotidien-a1.ts:293` et `verbes.ts:143`
- **Texte** : « At the weekend au Royaume-Uni, on the weekend aux États-Unis. »
  et « Britannique. Les Américains disent on the weekend. »
- **Correction proposée** : retirer la note de `verbes.ts:en-prepositions`, qui
  n'apporte rien de plus.
- **Fait** : `verbes.ts` : la carte « at the weekend » a été retirée d'`en-prepositions`, qui a été recentré sur les seules prépositions de temps (voir « Doublon : les prépositions de lieu traitées deux fois »). `quotidien-a1.ts` reste la seule source.

### [MOYEN] ✅ Doublon : le calque de l'âge enseigné deux fois avec la même formule

- **Où** : `conjugaison-2.ts` (`en-conj-be-have-do`) et `faux-amis.ts`
  (`en-pieges-verbes`)
- **Texte** : « I'm twenty-three years old. » / note « L'âge se dit avec be.
  « I have twenty-three years » est le calque le plus reconnaissable. » —
  « I am thirty years old. » / note « L'âge se dit avec to be, jamais avec to
  have. « I have thirty years » est la faute la plus répandue chez les
  francophones. »
- **Problème** : même carte, même note, deux fichiers. Le cours de
  `en-conj-be-have-do` reprend en plus le même exemple dans son visuel.
- **Correction proposée** : garder celle de `faux-amis.ts` (c'est sa raison
  d'être) et supprimer celle de `conjugaison-2.ts`.
- **Fait** : `conjugaison-2.ts` : note de la carte allégée (renvoi au tableau du cours) pour ne plus répéter mot pour mot l'explication de `faux-amis.ts`, qui reste la version canonique.

### [MOYEN] ✅ Doublon : « eventually » et « actually » traités trois fois

- **Où** : `faux-amis.ts` — `en-faux-amis-1` et `en-faux-amis-2` ;
  `expressions.ts` — `en-expr-conversation`
- **Texte** : « eventually » / « finalement » ; « eventual » / « final » ;
  « eventually deliver » / « finir par livrer » — et pour *actually* :
  « actually » / « en fait » ; « actual figures » / « les chiffres réels » ; puis
  la note de « That's a good question, actually. » : « Actually corrige ou
  nuance, il ne veut pas dire « actuellement ». »
- **Problème** : trois cartes pour *eventual(ly)*, trois occurrences pour
  *actual(ly)*, dont deux dans le même fichier. La carte « eventually deliver »
  n'est même pas une unité de langue : c'est un fragment.
- **Correction proposée** : supprimer « eventually deliver » et « actual
  figures » ; garder une carte par faux ami.
- **Fait** : `faux-amis.ts` : « actual figures » remplacé par « a rope » (faux ami distinct) et « eventually deliver » remplacé par « to ignore » — les deux fragments non lexicaux ont disparu.

### [MOYEN] ✅ Le rôle de la note ne correspond pas à la carte — `en-pieges-anglicismes`

- **Où** : `faux-amis.ts` — `en-pieges-anglicismes`, quatre cartes sur dix
- **Texte** :
  - « a petrol station » / « une station-service » — note sur *parking*
  - « hair gel » / « du gel coiffant » — note sur *brushing*
  - « a talent show » / « un télécrochet » — note sur *relooking*
  - « a smart outfit » / « une tenue élégante » — note sur *look*
- **Problème** : la note enseigne un autre mot que celui de la carte. Un
  apprenant qui révise la carte « hair gel » retient une remarque sur le
  brushing, et le faux anglicisme visé (« un brushing ») n'a pas de carte à lui.
  Le procédé permet d'annoncer dix cartes en en traitant vingt à moitié.
- **Correction proposée** : faire de chaque faux anglicisme une carte —
  « a blow-dry » / « un brushing », « a car park » / « un parking », « a
  makeover » / « un relooking » — et laisser les notes sur le mot de la carte.
- **Fait** : `faux-amis.ts` : les 4 cartes réécrites pour porter directement l'anglicisme visé — « a car park »/un parking, « a blow-dry »/un brushing, « a makeover »/un relooking, « a look »/un regard — chaque note reste centrée sur le mot de sa propre carte. Écart par rapport à la proposition : plutôt que d'ajouter 3 nouvelles cartes, j'ai réutilisé les 4 emplacements existants (dont celui de « smart outfit »/look, non cité comme correction mais souffrant du même défaut) pour ne pas gonfler la série.

### [MOYEN] ✅ « jogging » / « le fait de courir » : carte bancale

- **Où** : `faux-amis.ts` — `en-pieges-anglicismes`
- **Texte** : `{ etranger: "jogging", francais: "le fait de courir", note: "En français, « un footing ». Le mot footing n'existe pas en anglais dans ce sens ; il désigne une prise d'appui." }`
- **Problème** : le faux anglicisme visé est « footing », mais la carte
  interroge « jogging » — et « le fait de courir » n'est pas une traduction, c'est
  une glose. En exercice inverse, « le fait de courir » n'appelle rien.
- **Correction proposée** : `{ etranger: "jogging", francais: "le footing",
  aussi: ["le jogging"], note: "Le mot footing n'existe pas en anglais dans ce
  sens : il désigne une prise d'appui." }`
- **Fait** : `faux-amis.ts` : carte corrigée exactement comme proposé (`francais: "le footing"`, `aussi: ["le jogging"]`).

### [MOYEN] ✅ « un pull » accepté pour « a sweatshirt »

- **Où** : `faux-amis.ts` — `en-pieges-anglicismes`
- **Texte** : `{ etranger: "a sweatshirt", francais: "un sweat", aussi: ["un pull"] }`
- **Problème** : un pull est *a jumper* (GB) ou *a sweater* (US) — pas un
  sweatshirt. L'`aussi` est une réponse acceptée : le contenu valide une
  équivalence fausse, dans une série dont le sujet est précisément de séparer ces
  mots. `vocabulaire-monde.ts` enseigne d'ailleurs correctement « le pull /
  jumper / sweater ».
- **Correction proposée** : supprimer l'`aussi`.
- **Fait** : `faux-amis.ts` : `aussi: ["un pull"]` supprimé ; l'information sur jumper/sweater déplacée dans la note.

### [MOYEN] ✅ « Thanks in advance » : distinction inventée

- **Où** : `travail.ts:24` — `en-courriel`
- **Texte** : « Plus léger que Thank you in advance, qui peut sonner insistant. »
- **Problème** : ce qui peut sonner présomptueux dans cette formule, c'est *in
  advance* (on remercie d'un service qu'on n'a pas encore obtenu), pas le choix
  entre *thanks* et *thank you*. La note enseigne une nuance qui n'existe pas.
- **Correction proposée** : « Thanks in advance est courant, mais il présume la
  réponse : dans un courriel formel, mieux vaut Thank you for your help. »
- **Fait** : `travail.ts` : note remplacée par « Courant, mais présume la réponse : dans un courriel formel, mieux vaut Thank you for your help. »

### [MOYEN] ✅ « Ça me saoule » proposé pour « I can't be bothered »

- **Où** : `travail.ts:76` — `en-expressions`
- **Texte** : « I can't be bothered. » / « Je n'ai pas le courage. » /
  `aussi: ["Ça me saoule."]`
- **Problème** : *I can't be bothered* dit l'absence d'envie ou d'énergie ;
  « ça me saoule » dit l'agacement. Ce n'est pas la même chose, et l'`aussi`
  est une réponse acceptée.
- **Correction proposée** : remplacer par « J'ai la flemme. »
- **Fait** : `travail.ts` : `aussi` remplacé par « J'ai la flemme. »

### [MOYEN] ✅ « Je crains de ne pas pouvoir mardi » est un calque

- **Où** : `expressions.ts` — `en-expr-accord`
- **Texte** : « I'm afraid I can't make Tuesday. » / « Je crains de ne pas
  pouvoir mardi. »
- **Problème** : le français est un calque mot à mot de *I'm afraid*, et il ne se
  dit pas ainsi. Un francophone dit « Malheureusement je ne peux pas mardi. »
  C'est d'autant plus gênant que la série enseigne à ne pas calquer.
- **Correction proposée** : `francais: "Malheureusement, je ne peux pas mardi."`,
  `aussi: ["Je suis désolé, mardi ne me va pas."]`
- **Fait** : `expressions.ts` : français principal changé en « Malheureusement, je ne peux pas mardi. », `aussi` ajouté.

### [MOYEN] ✅ « If it isn't broken » n'est pas le proverbe

- **Où** : `expressions.ts` — `en-expr-proverbes`
- **Texte** : « If it isn't broken, don't fix it. » / « Si ça marche, n'y touche
  pas. » / note « La forme courante garde un ain't fautif : if it ain't broke,
  don't fix it. »
- **Problème** : la carte demande à l'apprenant de produire une forme que
  personne ne dit. Le proverbe est *if it ain't broke, don't fix it* — la note le
  reconnaît elle-même. Dans une série sur les proverbes, la carte enseigne la
  version non attestée.
- **Correction proposée** : `etranger: "If it ain't broke, don't fix it."`, avec
  la note expliquant que *ain't* fait partie de la formule.
- **Fait** : `expressions.ts` : `etranger` changé en « If it ain't broke, don't fix it. », note réécrite en conséquence.

### [MOYEN] ✅ « Bloody est incompris aux États-Unis »

- **Où** : `expressions.ts` — cours `en-expr-emotions`
- **Texte** : « Bloody est modéré au Royaume-Uni et incompris aux États-Unis »
- **Problème** : les Américains comprennent parfaitement *bloody* — le mot est
  omniprésent dans les films et séries britanniques. Ils ne l'emploient pas ; ce
  n'est pas la même chose qu'être incompris.
- **Correction proposée** : « Bloody est modéré au Royaume-Uni et pratiquement
  inemployé aux États-Unis, où il sonne aussitôt britannique. »
- **Fait** : `expressions.ts` (cours `en-expr-emotions`) : texte corrigé en « pratiquement inemployé aux États-Unis, où il sonne aussitôt britannique ». La phrase fautive « et elles se gradent » du même cours a aussi été corrigée au passage (voir constat « Le mot magic »).

### [MOYEN] ✅ « Wednesday a perdu sa première syllabe »

- **Où** : `prononciation.ts` — `en-pron-muettes`, section « Les mots qui mentent
  franchement », et carte 9
- **Texte** : « Wednesday a perdu sa première syllabe : WENZ-day. »
- **Problème** : erreur de fait. *Wed-nes-day* → WENZ-day : c'est la syllabe
  **médiane** qui disparaît ; la première subsiste (Wed- → WEN-). Dire qu'elle a
  perdu sa première syllabe décrit une prononciation qui n'existe pas.
- **Correction proposée** : « Wednesday a perdu sa syllabe du milieu et son d :
  WENZ-day. »
- **Fait** : `prononciation.ts` : les deux occurrences (statement de section et note de carte) corrigées en « a perdu sa syllabe du milieu et son d ».

### [MOYEN] ✅ « GAragé » : une prononciation inventée dans un cours de prononciation

- **Où** : `prononciation.ts` — `en-pron-accent-mot`, section « Les régularités
  qui aident »
- **Texte** : « HOtel se dit hoTEL, GArage se dit GAragé au Royaume-Uni, BALlet
  se dit BALlet — chacun a sa règle, et il faut les vérifier un par un. »
- **Problème** : « GAragé » n'existe pas ; l'accent aigu français n'a rien à
  faire dans une transcription d'anglais. Et « BALlet se dit BALlet » ne dit
  rien — la notation en capitales indique déjà l'accent, la phrase est une
  tautologie. Le passage est illisible là où il devrait être le plus précis.
- **Correction proposée** : « HOtel se dit hoTEL. GArage garde l'accent devant au
  Royaume-Uni (GA-rahj ou GA-ridge) mais le déplace aux États-Unis (gaRAHJ).
  BALlet garde l'accent devant en britannique, balLET en américain. »
- **Fait** : `prononciation.ts` : passage réécrit avec des transcriptions réelles (GA-rahj/GA-ridge en GB, gaRAHJ en US) et sans tautologie sur ballet.

### [MOYEN] ✅ « -ify » classé parmi les suffixes qui attirent l'accent devant eux

- **Où** : `prononciation.ts` — `en-pron-accent-mot`
- **Texte** : « Les suffixes qui attirent l'accent sur la syllabe qui les
  précède : -ic, -ion, -ity, -ial, -ious, -ify, -ical. »
- **Problème** : *-ify* ne fonctionne pas ainsi. *BEAUtify*, *CLASsify*,
  *IDENtify* portent l'accent bien avant la syllabe qui précède le suffixe.
  Appliquer la règle annoncée donnerait « beauTIfy ».
- **Correction proposée** : retirer *-ify* de la liste.
- **Fait** : `prononciation.ts` : `-ify` retiré de la liste des suffixes.

### [MOYEN] ✅ Niveaux annoncés trop bas

- **Où** : plusieurs séries
- **Texte** :
  - `bases.ts:104` — `en-quotidien`, `niveau: "A2"`, `difficulty: 1` — contient
    « The bin needs taking out. » (*need* + gérondif, B2), « I'm shattered. »,
    « Let's call it a day. », « I'm just popping out. »
  - `quotidien-a1.ts:278` — `en-temps-libre`, `niveau: "A1"` — contient « Do you
    fancy going out tonight? » et « She's really into photography. » (B1)
  - `faux-amis.ts` — `en-pieges-verbes`, `niveau: "A2"` — contient « I have been
    living here for three years. » (present perfect continu, B1) et « I look
    forward to hearing from you. » (registre B2)
  - `vocabulaire-monde.ts` — `en-voc-vetements`, `niveau: "A1"` — le cours y
    enseigne l'ordre complet des adjectifs et les pluriels permanents
- **Problème** : un apprenant qui suit le module par niveau croisera des
  tournures B1-B2 dans ses toutes premières séries.
- **Correction proposée** : passer `en-quotidien` et `en-temps-libre` en A2/B1,
  `en-pieges-verbes` en B1.
- **Fait** : `bases.ts` (`en-quotidien` A2→B1), `quotidien-a1.ts` (`en-temps-libre` A1→A2), `faux-amis.ts` (`en-pieges-verbes` A2→B1). `en-voc-vetements` n'était pas visé par la correction proposée et n'a pas été changé.

### [MINEUR] ✅ « Comment vais-je au centre-ville ? »

- **Où** : `bases.ts:162` — `en-voyage`
- **Texte** : « How do I get to the city centre? » / « Comment vais-je au
  centre-ville ? »
- **Problème** : l'inversion « comment vais-je » appartient à l'écrit soutenu ;
  personne ne le dit dans la rue. La série est marquée `oral` et `parle`.
  L'`aussi` (« Comment on va au centre-ville ? ») est la bonne forme.
- **Correction proposée** : intervertir : français principal « Comment on va au
  centre-ville ? », `aussi: ["Pour aller au centre-ville, s'il vous plaît ?"]`.
- **Fait** : `bases.ts` : français principal devient « Comment on va au centre-ville ? », `aussi` mis à jour.

### [MINEUR] ✅ « center s'y écrit sans inversion »

- **Où** : `bases.ts:164` — `en-voyage`
- **Texte** : « Downtown aux États-Unis, et center s'y écrit sans inversion. »
- **Problème** : « sans inversion » ne décrit rien. Il s'agit de l'ordre des deux
  dernières lettres, -re → -er.
- **Correction proposée** : « Downtown aux États-Unis, et centre s'y écrit
  center. »
- **Fait** : `bases.ts` : note corrigée en « centre s'y écrit center ».

### [MINEUR] ✅ « Je suis le plus jeune de trois »

- **Où** : `debutant.ts:56` — `en-gens`
- **Texte** : « I'm the youngest of three. » / « Je suis le plus jeune de
  trois. »
- **Problème** : le français demande l'article : « le plus jeune des trois », ou
  mieux « le dernier de trois enfants ».
- **Correction proposée** : `francais: "Je suis le plus jeune des trois."`
- **Fait** : `debutant.ts` : français corrigé en « Je suis le plus jeune des trois. »

### [MINEUR] ✅ « Out of order ne s'écrit que sur un écriteau »

- **Où** : `quotidien-a1.ts:46` — `en-maison`
- **Problème** : *out of order* se dit aussi bien qu'il s'écrit (*the lift's out
  of order again*). « Ne s'écrit que » est trop absolu.
- **Correction proposée** : « Out of order appartient surtout aux machines et
  aux services publics. »
- **Fait** : `quotidien-a1.ts` : note corrigée comme proposé.

### [MINEUR] ✅ « Un trait d'union sépare deux corvées différentes »

- **Où** : `quotidien-a1.ts:56` — `en-maison`
- **Problème** : ce n'est pas le trait d'union qui distingue *the washing-up* de
  *the washing*, c'est la particule *up*. La formule est jolie et fausse.
- **Correction proposée** : « Washing-up, la vaisselle ; washing, le linge —
  c'est le up qui fait la différence. »
- **Fait** : `quotidien-a1.ts` : note corrigée pour attribuer la différence à la particule up.

### [MINEUR] ✅ « hours ne se prononce pas »

- **Où** : `quotidien-a1.ts:329` — `en-temps-libre`
- **Texte** : « Et l'anglais dit at eight tout court : « hours » ne se prononce
  pas. »
- **Problème** : dans une série marquée `oral`/`parle`, « ne se prononce pas »
  suggère une lettre muette. Le mot ne s'emploie tout simplement pas.
- **Correction proposée** : « … : on ne dit pas « hours ». »
- **Fait** : `quotidien-a1.ts` : note corrigée en « on ne dit pas « hours » ».

### [MINEUR] ✅ « Not yet répond à une question au present perfect »

- **Où** : `quotidien-a1.ts:267` — `en-petits-mots`
- **Problème** : trop restrictif. *Are you ready? — Not yet.* est A1.
- **Correction proposée** : « Not yet, la réponse standard à une question sur ce
  qui n'est pas encore arrivé. »
- **Fait** : `quotidien-a1.ts` : note généralisée, exemple « Are you ready? — Not yet. » ajouté.

### [MINEUR] ✅ « Trois sont des pièges » — jamais dit lesquels

- **Où** : `quotidien-a1.ts:217` — `en-petits-mots`
- **Texte** : « And, but, so, because, too, very. Six mots de rien […] et dont
  trois sont des pièges pour un francophone. »
- **Problème** : le statement annonce un décompte que ni le tip ni les cartes ne
  reprennent. L'apprenant cherche trois pièges qui ne sont jamais désignés.
- **Correction proposée** : nommer les trois (too, so, because), ou retirer le
  décompte.
- **Fait** : `quotidien-a1.ts` : statement complété, les trois pièges (too, so, because) nommés explicitement.

### [MINEUR] ✅ « to work out » / « se passer bien »

- **Où** : `verbes.ts:75` — `en-phrasal-1`
- **Problème** : « se passer bien » n'est pas une lexie française : on dit « bien
  se passer », ou « marcher ». L'`aussi` contient déjà les bonnes formes.
- **Correction proposée** : `francais: "bien se passer"`.
- **Fait** : `verbes.ts` (`en-phrasal-1`) : carte convertie en phrase complète, français devient « Ça s'est arrangé, finalement. »

### [MINEUR] ✅ Contradiction de format : les phrasal verbs et les prépositions ne sont pas des phrases

- **Où** : `verbes.ts` — `en-phrasal-1` et `en-prepositions`
- **Texte** : en-têtes du module : « Les verbes irréguliers sont donnés en phrase
  et non en liste » (`verbes.ts`), « Tout y est en phrases, jamais en mots
  isolés : c'est ce qui permet l'écoute et la prononciation »
  (`quotidien-a1.ts`), « Chaque carte reste une phrase »
  (`vocabulaire-monde.ts`). Or `en-phrasal-1` donne « to look after someone »,
  « to give up », et `en-prepositions` donne « at six o'clock », « on Monday ».
- **Problème** : ces séries sont marquées `oral` et `parle` alors qu'elles ne
  contiennent pas de phrase — et « on Monday » / « lundi » est ambigu en exercice
  inverse (*Monday* seul est une réponse défendable).
- **Correction proposée** : mettre ces cartes en phrase, comme le reste du
  module : « Can you look after the cat? », « The train leaves at six o'clock. »
- **Fait** : `verbes.ts` : les 10 cartes d'`en-phrasal-1` et les 8 cartes d'`en-prepositions` (recentré sur le temps) sont maintenant toutes rédigées en phrases complètes.

### [MINEUR] ✅ « He is training for a marathon » — note embrouillée

- **Où** : `vocabulaire-vie.ts` — `en-voc-sport`
- **Texte** : « Train for something. Le verbe est intransitif ici : on ne
  « s'entraîne » pas soi-même en anglais. »
- **Problème** : « on ne s'entraîne pas soi-même » ne veut rien dire ; et *train*
  est aussi transitif (*train a dog*, *train staff*). La note veut dire que
  l'anglais n'a pas de forme pronominale.
- **Correction proposée** : « Train for something, sans pronom : l'anglais n'a
  pas de forme réfléchie ici. »
- **Fait** : `vocabulaire-vie.ts` : note corrigée en « sans pronom : l'anglais n'a pas de forme réfléchie ici ».

### [MINEUR] ✅ « On play du football, on does du yoga »

- **Où** : `vocabulaire-vie.ts` — statement de `en-voc-sport`
- **Problème** : la phrase mêle verbe anglais et syntaxe française d'une façon
  qui ne s'entend pas dans le reste du module.
- **Correction proposée** : « On dit play football, do yoga, go swimming. »
- **Fait** : `vocabulaire-vie.ts` : statement corrigé en « On dit play football, do yoga, go swimming. »

### [MINEUR] ✅ « Fact-check est passé verbe »

- **Où** : `vocabulaire-vie.ts` — `en-voc-medias`
- **Problème** : « est passé verbe » — il manque un déterminant.
- **Correction proposée** : « Fact-check est devenu un verbe. »
- **Fait** : `vocabulaire-vie.ts` : note corrigée en « est devenu un verbe ».

### [MINEUR] ✅ Espace avant le point d'interrogation dans les exemples anglais

- **Où** : `conjugaison.ts:59`, `:157`, `:185` ; `conjugaison-2.ts:31`, `:83` ;
  `expressions.ts` (plusieurs sections de cours)
- **Texte** : « does he work ? », « did she go ? », « Have you ever been to
  London ? », « Is she late ? », « Do you like tea ? », « sorry ? », « come
  again ? »
- **Problème** : la typographie française (espace insécable avant « ? ») est
  appliquée à des exemples anglais, alors que les mêmes phrases sont écrites
  correctement dans les tableaux et les cartes (« Is she late? », « Do you like
  tea? »). Incohérence à l'intérieur d'un même cours.
- **Correction proposée** : coller le point d'interrogation aux exemples
  anglais, comme le font déjà les tableaux.
- **Fait** : espaces retirés devant les « ? » anglais dans les textes de cours de `conjugaison.ts` (2 occurrences), `conjugaison-2.ts` (9 occurrences) et `expressions.ts` (plusieurs occurrences, dont le tableau et deux sections de cours).

### [MINEUR] ✅ « Look at this book » / « Luke et boo »

- **Où** : `prononciation.ts` — `en-pron-voyelles`
- **Texte** : « Deux /ʊ/ brefs. Allongés, ils donneraient Luke et boo. »
- **Problème** : *book* allongé donne /buːk/, qui n'est pas *boo*. L'exemple est
  approximatif au point d'être faux dans un cours de phonétique.
- **Correction proposée** : « Deux /ʊ/ brefs. Allongé, look donnerait Luke. »
- **Fait** : `prononciation.ts` : note corrigée en « Allongé, look donnerait Luke. »

### [MINEUR] ✅ « with » donné comme exemple de /ð/ substitué en « wizz »

- **Où** : `prononciation.ts` — `en-pron-th`
- **Texte** : « Remplacer /ð/ par « z » transforme they en Zay, breathe en
  breeze, with en wizz. »
- **Problème** : « Zay » et « wizz » ne sont pas des mots ; le tableau qui suit
  reconnaît d'ailleurs pour *they* « aucun mot, mais l'accent s'entend ». La
  liste mélange donc des confusions réelles (*breathe / breeze*) et des
  transcriptions inventées.
- **Correction proposée** : ne garder que *breathe / breeze*, et dire pour les
  autres que la substitution ne crée pas de confusion mais s'entend aussitôt.
- **Fait** : `prononciation.ts` : texte corrigé pour ne garder que breathe/breeze comme confusion réelle ; they et with restent mentionnés mais sans transcription inventée.

### [MINEUR] ✅ « KUMF-ta-bl » et « KUMF-tə-bl » dans le même fichier

- **Où** : `prononciation.ts` — `en-pron-accent-mot` (carte) et `en-pron-muettes`
  (cours)
- **Problème** : la même transcription est écrite de deux façons à quelques
  centaines de lignes d'écart.
- **Correction proposée** : uniformiser sur « KUMF-tə-bl ».
- **Fait** : `prononciation.ts` : la carte utilisait « KUMF-ta-bl », uniformisée sur « KUMF-tə-bl » comme le cours.

### [MINEUR] ✅ « Il a hérité la maison »

- **Où** : `monde-2.ts` — `en-voc-fin-de-vie`
- **Texte** : « He inherited the house from an aunt. » / « Il a hérité la maison
  d'une tante. »
- **Problème** : le français demande « hériter **de** la maison ». L'ironie est
  que la note porte précisément sur la construction.
- **Correction proposée** : « Il a hérité de la maison d'une tante. »
- **Fait** : `monde-2.ts` : français corrigé en « Il a hérité de la maison d'une tante. »

### [MINEUR] ✅ « Le temps paraît long à qui attend » donné comme proverbe français

- **Où** : `expressions.ts` — `en-expr-proverbes`, visuel « La même leçon, deux
  images », colonne « L'image française »
- **Problème** : les deux autres entrées de la colonne sont de vrais proverbes
  (« L'habit ne fait pas le moine », « L'avenir appartient à ceux qui se lèvent
  tôt ») ; la troisième est une paraphrase du sens de *a watched pot never
  boils*. La colonne annonce une image française et n'en donne pas.
- **Correction proposée** : soit avouer l'absence d'équivalent, soit retirer la
  ligne.
- **Fait** : `expressions.ts` : ligne du tableau remplacée par un aveu explicite d'absence d'équivalent français.

### [MINEUR] ✅ « gutted » : le cours dit « très déçu », la carte dit « effondré »

- **Où** : `expressions.ts` — `en-expr-familier`
- **Texte** : tableau : `["gutted", "très déçu", "devastated", "bummed"]` —
  carte : « He was gutted about the news. » / « Il était effondré par la
  nouvelle. »
- **Problème** : « effondré » et « très déçu » ne sont pas au même degré, et
  c'est le cours qui doit préparer la carte.
- **Correction proposée** : carte → « Il était atterré par la nouvelle. » ou
  cours → « anéanti ».
- **Fait** : `expressions.ts` : français de la carte corrigé en « Il était atterré par la nouvelle. »

### [MINEUR] ✅ « le mot s'écrit en un seul terme » (ceasefire)

- **Où** : `monde-2.ts` — `en-voc-militaire`
- **Problème** : *cease-fire* avec trait d'union est également attesté et courant
  dans la presse britannique. « Un seul terme » est aussi une formulation
  bancale (un mot, pas un terme).
- **Correction proposée** : « Ceasefire s'écrit en un mot, parfois avec un trait
  d'union. »
- **Fait** : `monde-2.ts` : note corrigée en « Ceasefire s'écrit en un mot, parfois avec un trait d'union. »

### [MINEUR] ✅ Verbe unique donné pour « élever des animaux »

- **Où** : `monde-2.ts` — `en-voc-agriculture`
- **Texte** : « Keep pour élever des animaux, jamais breed sauf reproduction. »
- **Problème** : *raise* est le verbe le plus courant en américain (*raise
  cattle*, *raise chickens*) et n'est pas mentionné, alors que la note ferme
  la liste par un « jamais ».
- **Correction proposée** : « Keep ou raise pour élever ; breed ne se dit que de
  la reproduction. »
- **Fait** : `monde-2.ts` : note corrigée en « Keep ou raise pour élever ; breed ne se dit que de la reproduction. »

---

## Ce que la seconde passe a ajouté

La passe 2 a ajouté 33 constats — dont deux GRAVE — et en a renforcé deux autres.
Ce qu'elle a trouvé n'est pas de même nature que la passe 1 : la première lecture
attrape les erreurs de contenu carte par carte, la seconde attrape ce qui ne se
voit qu'en tenant deux endroits ensemble. Trois familles s'en dégagent.

**Les statements et les tips, que la passe 1 avait survolés.** On les lit comme
une entrée en matière, pas comme du contenu à vérifier — et c'est là que se
trouvent les fautes de décompte (« Neuf petits verbes » pour six nommés et huit
traités, « Les vingt verbes irréguliers » pour dix cartes), les mots annoncés et
jamais enseignés (*miss*, *get on*, *feed*, *island*), les chiffres inventés
(« la moitié des vêtements anglais », « vingt mots pour la pluie ») et la
contradiction la plus nette du module (« ils sont les seuls à être vraiment
irréguliers » contre « Deux cents verbes irréguliers », dans le même fichier).

**Les contradictions entre un cours et la carte qu'il prépare.** « Ça ne me va
pas » sous une note qui explique que *fit* et *suit* ne sont pas la même chose ;
« La nouvelle est bonne » sous un cours qui interdit *a news* ; « on my bike »
dans la colonne « on y circule debout » ; le tip qui annonce le cri des animaux
quand le tableau donne le petit.

**Les doublons, qu'un balayage systématique révèle mieux qu'une lecture.** J'ai
comparé mécaniquement les 540 couples anglais-français après normalisation ; les
recoupements ainsi trouvés (« She didn't come », « Have you finished ? » trois
fois, le -s de la troisième personne quatre fois) m'avaient tous échappé à la
première lecture, parce qu'ils sont répartis sur trois fichiers différents.

### [MOYEN] ✅ `en-cours-modaux` annonce neuf modaux, en nomme six, en traite huit

- **Où** : `cours-grammaire.ts:16` — `en-cours-modaux`
- **Texte** : « Can, could, must, should, may, might. Neuf petits verbes qui
  portent toute la nuance d'une phrase anglaise »
- **Problème** : la phrase énumère six modaux et annonce le chiffre neuf ; le
  tableau qui suit en présente huit (can, could, may, might, must, should, will,
  would). Aucun des trois décomptes ne correspond aux autres. Un apprenant qui
  cherche à savoir combien de modaux il doit connaître n'obtient pas de réponse.
- **Correction proposée** : « Can, could, may, might, must, should, will, would.
  Huit petits verbes qui portent toute la nuance d'une phrase anglaise… »
- **Fait** : `cours-grammaire.ts` : statement corrigé, huit modaux nommés (can, could, may, might, must, should, will, would) comme proposé.

### [MOYEN] ✅ Des pourcentages inventés pour may et might

- **Où** : `cours-grammaire.ts` — `en-cours-modaux`, tableau « Ce qu'ils disent,
  et à quel degré »
- **Texte** : `["may", "permission formelle, possibilité", "It may rain.", "50 %"]`
  et `["might", "possibilité plus faible", "It might rain.", "30 %"]`
- **Problème** : ces chiffres n'existent nulle part et ne correspondent à aucune
  description de l'anglais. Ils sont d'autant plus trompeurs qu'ils sont les
  seules valeurs numériques de la colonne « Force » (les autres lignes disent
  « neutre », « adouci », « fort »), ce qui leur donne une apparence de mesure.
  Et `conjugaison-2.ts:en-conj-modaux-passe` dit le contraire dans son cours :
  « Might est un peu plus faible que may, mais l'écart est mince. »
- **Correction proposée** : remplacer par « possible » et « un peu moins
  possible », comme le fait déjà l'échelle de `en-conj-modaux-passe`.
- **Fait** : `cours-grammaire.ts` : « 50 % »/« 30 % » remplacés par « possible »/« un peu moins possible ».

### [MOYEN] ✅ « A university se dirait pour le bâtiment » : c'est *the*, pas *a*

- **Où** : `cours-grammaire.ts` — `en-cours-articles`, carte « He went to
  university. »
- **Texte** : « Le lieu pris dans sa fonction se passe d'article. A university se
  dirait pour le bâtiment. »
- **Problème** : erreur d'article dans un cours sur les articles. L'opposition
  est *go to university* (étudier) / *go to **the** university* (se rendre au
  bâtiment) — c'est d'ailleurs exactement ce que dit le cours de la même série
  deux sections plus haut : « go to school pour étudier, mais go to the school
  pour se rendre au bâtiment ». *A university* veut dire « une université
  quelconque », ce qui n'a rien à voir.
- **Correction proposée** : « … The university se dirait pour le bâtiment. »
- **Fait** : `cours-grammaire.ts` : note corrigée en « The university se dirait pour le bâtiment. »

### [MOYEN] ✅ « La nouvelle est bonne » contredit le cours qui l'accompagne

- **Où** : `cours-grammaire.ts` — `en-cours-quantifieurs`, carte « The news is
  good. »
- **Texte** : `{ etranger: "The news is good.", francais: "La nouvelle est bonne.", note: "News prend un -s mais reste singulier." }`
- **Problème** : le cours de la même série vient d'expliquer que *news* est
  indénombrable et qu'« an information n'existe pas — on dit a piece of
  information ». Or le français retenu, « la nouvelle », est précisément un
  singulier comptable — c'est-à-dire *a piece of news*. En exercice inverse,
  « La nouvelle est bonne » appelle *the news is good* mais aussi *it's good
  news*, et l'apprenant retient l'équation « une nouvelle = news » que le cours
  lui interdit.
- **Correction proposée** : `francais: "Les nouvelles sont bonnes."` avec
  `aussi: ["C'est une bonne nouvelle."]`.
- **Fait** : `cours-grammaire.ts` : français changé en « Les nouvelles sont bonnes. », `aussi: ["C'est une bonne nouvelle."]` ajouté.

### [MOYEN] ✅ `en-cours-modaux` et `en-conj-modaux-passe` se recouvrent

- **Où** : `cours-grammaire.ts` — `en-cours-modaux`, section « Deviner, supposer,
  déduire » ; `conjugaison-2.ts` — `en-conj-modaux-passe`, série entière
- **Texte** : le cours de `en-cours-modaux` dit « Can't marque l'impossibilité
  déduite […] Attention, ce n'est pas mustn't : la déduction négative se dit
  can't » puis « on ajoute have plus le participe : she must have left, elle a dû
  partir ; you should have told me, tu aurais dû me le dire ». Le tableau de
  `en-conj-modaux-passe` a les lignes `["must have", …, "She must have left.",
  "elle a dû partir"]` et `["should have", …, "I should have asked.", "j'aurais
  dû demander"]`, et sa note dit « Mustn't have n'existe pas au sens de
  déduction : la négation de must have est can't have. »
- **Problème** : le même point, avec les mêmes exemples, dans deux séries de deux
  fichiers différents. La carte « You should have told me. » de
  `en-cours-modaux` fait doublon avec « I shouldn't have said anything. » et
  l'ensemble du chapitre de `conjugaison-2.ts`.
- **Correction proposée** : retirer de `en-cours-modaux` la section « Deviner,
  supposer, déduire » et ses deux dernières cartes, en renvoyant à
  `en-conj-modaux-passe` — ou l'inverse, mais pas les deux.
- **Fait** : `cours-grammaire.ts` : le dernier paragraphe de la section « Deviner, supposer, déduire » (exemples must have left / should have told me, qui font doublon avec `conjugaison-2.ts`) a été retiré et remplacé par un simple renvoi à la série des modaux du passé ; la carte « You should have told me. » a été remplacée par « I would say it's a good idea. », qui comble par ailleurs un trou du tableau (will/would n'étaient testés par aucune carte). Écart par rapport à la proposition : je n'ai pas retiré toute la section 3 ni « ses deux dernières cartes » au sens large, seulement la partie qui duplique effectivement `conjugaison-2.ts` (l'explication must/can't/may/might en présent reste, car elle n'est pas traitée ailleurs).

### [MOYEN] ✅ Une série A1 qui commence par le present perfect continu

- **Où** : `bases.ts:12` — `en-presentation`, `niveau: "A1"`, `difficulty: 1`
- **Texte** : « How long have you been here? » (note : « Present perfect continu :
  l'action a commencé avant et dure encore. ») et « I've been studying English
  for two years. »
- **Problème** : c'est la toute première série du module, annoncée A1 et de
  difficulté 1, et deux de ses dix cartes portent un temps de niveau B1 — que la
  note nomme explicitement. Le module a par ailleurs une série entière sur ce
  temps (`conjugaison.ts:en-conj-passe`, B1).
- **Correction proposée** : remplacer par « How long are you here for? » /
  « Combien de temps tu restes ? » et « I've studied English for two years. », ou
  passer la série en A2.
- **Fait** : `bases.ts` (`en-presentation`) : niveau passé de A1 à A2, plutôt que de réécrire les deux cartes — solution plus sûre pour ne pas perdre le point de grammaire explicitement nommé dans la note.

### [MOYEN] ✅ « How is it? » interdit à tort

- **Où** : `bases.ts:90` — `en-questions`
- **Texte** : « Ne pas dire « How is it? », qui demande si ça va bien, pas à quoi
  ça ressemble. »
- **Problème** : *How is it?* est une question parfaitement courante sur la
  qualité de quelque chose — *How is the new job?*, *How's the soup?*. La note
  la présente comme fautive alors qu'elle est simplement différente de *What's
  it like?* (qui demande une description, non une appréciation). Interdire une
  tournure normale est plus coûteux que de ne rien dire.
- **Correction proposée** : « What's it like? demande une description ; How is
  it? demande si c'est bien. Les deux existent, elles ne demandent pas la même
  chose. »
- **Fait** : `bases.ts` (`en-questions`) : note remplacée exactement comme proposé.

### [MOYEN] ✅ Doublon : le comparatif irrégulier noté deux fois à l'identique

- **Où** : `debutant.ts:102` (`en-decrire`) et `cours-grammaire.ts`
  (`en-cours-comparatifs`)
- **Texte** : « It's the best one. » / note « good, better, best. Irrégulier, et
  partout. » — « It's the best film I've seen. » / note « good, better, best.
  Irrégulier. » Et de même « This one is cheaper. » / « Comparatif court : -er.
  Pour les longs adjectifs, more expensive. » contre « This one is more
  expensive. » / « Trois syllabes : more, jamais « expensiver ». »
- **Problème** : `en-decrire` (A1, sans cours) enseigne en quatre notes ce que
  `en-cours-comparatifs` (A2, avec cours) enseigne en entier. Les notes sont
  quasi identiques.
- **Correction proposée** : retirer de `en-decrire` les cartes « This one is
  cheaper. » et « It's the best one. », qui appartiennent au chapitre comparatif.
- **Fait** : `debutant.ts` (`en-decrire`) : cartes « This one is cheaper. » et « It's the best one. » retirées et remplacées par deux cartes sur la forme et la matière (round / made of wood), qui ne recoupent pas `cours-grammaire.ts:en-cours-comparatifs`.

### [MINEUR] ✅ Règle d'orthographe formulée en phrase à double lecture

- **Où** : `cours-grammaire.ts` — `en-cours-comparatifs`
- **Texte** : « Deux ajustements orthographiques : une consonne finale unique
  précédée d'une voyelle double — big, bigger — et un e final ne se répète pas —
  nice, nicer. »
- **Problème** : « double » se lit d'abord comme un adjectif qualifiant
  « voyelle », ce qui donne une règle fausse (big n'a pas de voyelle double).
  C'est un verbe. La phrase se relit deux fois avant d'être comprise, et le
  premier sens est le mauvais.
- **Correction proposée** : « Deux ajustements orthographiques : une consonne
  finale unique précédée d'une seule voyelle se redouble — big, bigger — et un e
  final ne se répète pas — nice, nicer. »
- **Fait** : `cours-grammaire.ts` : « voyelle double » corrigé en « une seule voyelle se redouble ».

### [MOYEN] ✅ « Ça ne me va pas » : la carte contredit sa propre note

- **Où** : `debutant.ts:130` — `en-acheter`
- **Texte** : `{ etranger: "It doesn't fit.", francais: "Ça ne me va pas.", note: "Fit pour la taille ; suit pour le style. « It doesn't suit me » veut dire que ça ne me flatte pas." }`
- **Problème** : la note explique que *fit* et *suit* ne sont pas la même chose —
  et le français retenu, « Ça ne me va pas », est justement celui qui recouvre
  les deux en français. En exercice « produire », l'apprenant qui a bien lu la
  note hésitera entre les deux et pourra être compté faux. Le module sait
  pourtant écrire la bonne version : `vocabulaire-monde.ts` et `monde-2.ts`
  traduisent le même anglais par « Ces chaussures ne sont pas à ma taille » et
  « Cette veste n'est pas à ma taille ». Trois séries, deux traductions
  incompatibles du même verbe.
- **Correction proposée** : `francais: "Ce n'est pas à ma taille."`, garder la
  note, et ajouter `aussi: ["Ça ne me va pas — c'est trop petit."]`.
- **Fait** : `debutant.ts` (`en-acheter`) : français changé en « Ce n'est pas à ma taille. », `aussi` ajouté, exactement comme proposé.

### [MOYEN] ✅ « Il fait un froid glacial » attend deux anglais différents

- **Où** : `bases.ts:130` (`en-quotidien`) et `debutant.ts:150`
  (`en-meteo-lieux`)
- **Texte** : « It's freezing outside. » / « Il gèle dehors. » /
  `aussi: ["Il fait un froid glacial."]` — et « It's freezing. » / « Il fait un
  froid glacial. »
- **Problème** : « Il fait un froid glacial » est le français principal d'une
  carte et la réponse acceptée d'une autre, pour deux anglais différents. En
  exercice inverse, l'apprenant qui écrit *It's freezing.* sur la première carte
  a raison et sera compté faux (il manque *outside*).
- **Correction proposée** : supprimer la carte de `en-meteo-lieux`, qui n'ajoute
  rien à celle de `en-quotidien`, ou ajouter
  `aussiEtranger: ["It's freezing."]` à cette dernière.
- **Fait** : `bases.ts` (`en-quotidien`) : `aussiEtranger: ["It's freezing."]` ajouté à la carte « It's freezing outside. », plutôt que de supprimer la carte de `debutant.ts` — évite de perdre du contenu tout en réglant la réversibilité.

### [MOYEN] ✅ Le statement de `en-meteo-lieux` ne couvre que la moitié de la série

- **Où** : `debutant.ts:137-159` — `en-meteo-lieux`
- **Texte** : statement : « La météo est le sujet d'ouverture par excellence en
  anglais, et il n'est pas ironique : c'est vraiment ainsi qu'on entre en
  conversation. » — tip : « La météo se dit avec it's : it's raining, it's cold. »
- **Problème** : cinq des dix cartes n'ont rien à voir avec la météo (« Is it far
  from here? », « Go straight on, then turn left. », « It's opposite the
  station. », « I'm lost. », « How long does it take? »). Le titre les annonce
  (« et où l'on est »), mais ni le statement ni le tip ne les préparent :
  l'apprenant lit une introduction sur le small talk et tombe sur *opposite* et
  *in front of*. C'est une série double sous un seul chapeau.
- **Correction proposée** : scinder en deux séries, ou compléter le statement :
  « … et, juste après, la question qu'on pose à un inconnu : où est-ce, et
  comment y aller. »
- **Fait** : `debutant.ts` : statement complété avec la phrase proposée sur la question qu'on pose à un inconnu.

### [MOYEN] ✅ Doublon : l'ordre des adjectifs donné deux fois mot pour mot

- **Où** : `debutant.ts:92` (tip de `en-decrire`) et `vocabulaire-monde.ts`
  (cours de `en-voc-vetements`, section « Décrire quelqu'un sans le vexer »)
- **Texte** : « L'ordre est : opinion, taille, âge, forme, couleur, origine,
  matière. A nice big old round red Italian wooden table. » et « L'ordre des
  adjectifs est fixe et ne se discute pas : opinion, taille, âge, forme,
  couleur, origine, matière. A lovely long red woollen scarf. »
- **Problème** : la liste des sept catégories est reprise à l'identique, mot pour
  mot, dans deux fichiers — et les deux séries sont annoncées A1.
- **Correction proposée** : garder la version développée du cours de
  `en-voc-vetements` et réduire le tip de `en-decrire` à ce que ses cartes
  montrent réellement : « Taille avant couleur : a big red car, jamais a red big
  car. »
- **Fait** : `debutant.ts` (tip d'`en-decrire`) : réduit à « Taille avant couleur : a big red car, jamais a red big car. », comme proposé. La version complète reste dans `vocabulaire-monde.ts`.

### [MOYEN] ✅ Doublon : l'allergie enseignée deux fois

- **Où** : `debutant.ts:77` (`en-manger`, A1) et `quotidien-a1.ts:121`
  (`en-corps-sante`, A1)
- **Texte** : « I'm allergic to nuts. » / « Je suis allergique aux fruits à
  coque. » et « I'm allergic to peanuts. » / « Je suis allergique aux
  cacahuètes. » (note : « Allergic TO. La phrase à savoir dire par cœur avant de
  commander quoi que ce soit. »)
- **Problème** : même structure, même niveau, deux fichiers — et la seconde note
  renvoie explicitement au restaurant, c'est-à-dire à la série de la première.
- **Correction proposée** : garder celle d'`en-corps-sante` (qui porte la note
  sur *allergic to*) et remplacer celle d'`en-manger` par une carte de refus
  utile au restaurant : « Does it contain nuts? » / « Est-ce qu'il y a des fruits
  à coque dedans ? »
- **Fait** : `debutant.ts` (`en-manger`) : carte remplacée par « Does it contain nuts? » / « Est-ce qu'il y a des fruits à coque dedans ? », exactement comme proposé. `quotidien-a1.ts` reste la carte de référence sur allergic to.

### [MINEUR] ✅ « Watch la télévision, see un film » contredit la carte qui le porte

- **Où** : `quotidien-a1.ts:319` — `en-temps-libre`
- **Texte** : `{ etranger: "We watched a film last night.", francais: "On a regardé un film hier soir.", note: "Watch la télévision, see un film au cinéma, look at une image. Trois verbes pour un seul « regarder »." }`
- **Problème** : la note attribue le film à *see* alors que la carte qu'elle
  commente dit *watched a film*. Le partage réel est le lieu (au cinéma on
  *sees* un film, chez soi on le *watches*), et la note ne le dit pas — elle
  laisse croire que la carte est fautive.
- **Correction proposée** : « Watch chez soi — a film, TV ; see au cinéma ou au
  théâtre ; look at une image fixe. »
- **Fait** : `quotidien-a1.ts` : note corrigée pour dire que le partage est le lieu (chez soi/au cinéma), pas l'objet.

### [MINEUR] ✅ « Il ne veut jamais dire « si » dans ce sens »

- **Où** : `quotidien-a1.ts:237` — `en-petits-mots`
- **Texte** : « So relie une cause à sa conséquence. Il ne veut jamais dire
  « si » dans ce sens. »
- **Problème** : la phrase se contredit (« jamais… dans ce sens ») et met en
  garde contre une confusion qui n'existe pas — aucun francophone ne prend le
  *so* de conséquence pour un « si ». Elle passe en revanche à côté du vrai
  double emploi : *so good*, si bon.
- **Correction proposée** : « So relie une cause à sa conséquence. Attention, il
  a un autre emploi : devant un adjectif, so veut dire « tellement » — it's so
  cold. »
- **Fait** : `quotidien-a1.ts` : note remplacée par la mise en garde utile sur so + adjectif (« tellement »).

### [MOYEN] ✅ Le critère « on y circule debout » est démenti par ses propres exemples

- **Où** : `vocabulaire-monde.ts` — cours de `en-voc-ville`, visuel « In ou on,
  dans les transports » ; `vocabulaire-vie.ts` — tip de `en-voc-transports` ;
  `verbes.ts:141` — `en-prepositions`
- **Texte** : trois formulations de la même règle, qui ne disent pas la même
  chose :
  - `vocabulaire-vie.ts` : « le critère est de savoir si l'on peut s'y tenir
    debout »
  - `vocabulaire-monde.ts` : colonne « ON — on y circule debout », dont les
    points sont « on the bus, on the train », « on the plane, on a boat »,
    « **on my bike** »
  - `verbes.ts` : « Mais on the bus, on the train, on the plane : **on monte
    dessus**. »
- **Problème** : on ne circule pas debout sur un vélo, et le même visuel qui
  énonce le critère le contredit à sa troisième ligne. Les trois explications
  sont incompatibles entre elles (« se tenir debout » / « monter dessus ») et
  aucune ne couvre le vélo ni la petite embarcation. Un apprenant qui applique le
  critère annoncé dira « in my bike ».
- **Correction proposée** : une seule formulation, partout : « On pour ce qu'on
  enfourche ou ce dans quoi on circule sans être enfermé — on the bus, on the
  train, on my bike ; in pour l'habitacle fermé — in the car, in a taxi. »
- **Fait** : formulation unifiée sur les trois occurrences : `vocabulaire-vie.ts` (tip d'`en-voc-transports`), `vocabulaire-monde.ts` (titres des colonnes du visuel « In ou on »). La troisième occurrence, dans `verbes.ts` (`en-prepositions`), a disparu avec la carte « in the car », retirée en recentrant cette série sur les prépositions de temps.

### [MOYEN] ✅ Le tip de `en-voc-nature` annonce le cri des animaux, que rien n'enseigne

- **Où** : `vocabulaire-monde.ts:260` — `en-voc-nature`
- **Texte** : tip : « Les animaux ont souvent trois mots : l'animal, sa viande,
  et son cri. Pig, pork, grunt. Cow, beef, moo. »
- **Problème** : ni le cours ni les dix cartes ne contiennent un seul cri
  d'animal. La section s'intitule « L'animal, sa viande, son petit » et le
  tableau a pour colonnes « L'animal / La viande / Le petit / Le collectif ». Le
  tip promet une troisième catégorie qui n'existe nulle part dans la série, et il
  n'annonce pas les deux qui y sont réellement traitées.
- **Correction proposée** : « Les animaux ont souvent trois mots : la bête, sa
  viande, son petit. Cow, beef, calf. Pig, pork, piglet. »
- **Fait** : `vocabulaire-monde.ts` : tip et statement corrigés ensemble (voir aussi « Un pays où il pleut… » plus bas) — le tip parle maintenant de l'animal, sa viande, son petit, comme le tableau qui suit.

### [MOYEN] ✅ Doublon : les prépositions de lieu traitées deux fois

- **Où** : `verbes.ts:127-148` (`en-prepositions`, A2) et
  `vocabulaire-monde.ts` (cours de `en-voc-ville`, section « Les prépositions de
  lieu, qu'il faut apprendre par cœur », A1)
- **Texte** : `verbes.ts` : « at the station » / note « At pour un point sur une
  carte ; in the station veut dire à l'intérieur du bâtiment » ; « in the car » /
  note « Mais on the bus, on the train, on the plane » ; « at home » / note
  « Sans article : jamais « at the home ». » — Le cours d'`en-voc-ville` traite
  exactement les mêmes points : « At désigne un point, une adresse, une
  fonction : at the station, at the bank, at school, at work, at home », « In
  désigne un volume, un intérieur », « On désigne une surface ou une ligne ».
- **Problème** : une série de dix cartes fait doublon avec une section de cours
  d'une autre série, dans un autre fichier, à un niveau annoncé inférieur.
- **Correction proposée** : garder le cours d'`en-voc-ville`, qui est plus
  complet, et recentrer `en-prepositions` sur ce qu'il a de propre : les
  prépositions de **temps** (at six, on Monday, in March, in time / on time),
  que le cours d'`en-voc-ville` ne traite pas.
- **Fait** : `verbes.ts` (`en-prepositions`) : série recentrée sur les prépositions de temps uniquement (at six o'clock, on Monday, in March, in/at + moment de la journée, in time/on time, in + durée) ; toutes les cartes de lieu (at the station, in the car, on the second floor, at the weekend, at home) ont été retirées, réglant du même coup les doublons sur l'étage et le week-end.

### [MOYEN] ✅ Une série A1 dont le cours est de niveau B1

- **Où** : `vocabulaire-monde.ts:384` — `en-voc-ville`, `niveau: "A1"`,
  `difficulty: 1`
- **Texte** : le cours enseigne le génitif commercial (*the newsagent's*, *the
  off-licence*, *the launderette*), l'opposition *in hospital* / *in the
  hospital*, *at university*, *on holiday* / *on vacation*, et une section
  entière de prépositions annoncée comme « qu'il faut apprendre par cœur ».
- **Problème** : c'est un chapitre B1 sous une étiquette A1 — et le module range
  ailleurs le même contenu en A2 (`verbes.ts:en-prepositions`). Le même
  apprenant rencontre donc la matière une fois en A1 et une fois en A2.
- **Correction proposée** : passer `en-voc-ville` en A2 au minimum.
- **Fait** : `vocabulaire-monde.ts` (`en-voc-ville`) : niveau passé de A1 à A2.

### [MINEUR] ✅ « Chicken et fish, plus tardifs »

- **Où** : `vocabulaire-monde.ts` — cours de `en-voc-nature`, section
  « L'animal, sa viande, son petit »
- **Texte** : « Cow donne beef, pig donne pork […] Chicken et fish, plus tardifs,
  n'ont pas de doublet. »
- **Problème** : *chicken* (vieil anglais *cicen*) et *fish* (*fisc*) sont au
  contraire parmi les mots les plus anciens de la langue — plus anciens que
  *beef* et *pork*, qui sont les emprunts normands. Le fait vrai est qu'ils n'ont
  pas reçu de doublet français, pas qu'ils seraient « plus tardifs ».
- **Correction proposée** : « Chicken et fish n'ont pas reçu de doublet français :
  la bête et le plat s'y disent du même mot. »
- **Fait** : `vocabulaire-monde.ts` : texte corrigé, le fait vrai (pas de doublet français) remplace l'erreur historique.

### [MINEUR] ✅ Une ligne de tableau où les deux colonnes sont identiques

- **Où** : `vocabulaire-monde.ts` — cours de `en-voc-ville`, tableau « Où l'on
  va, et pour quoi »
- **Texte** : `["the newsagent's", "the newsagent's", "papers, sweets"]`
- **Problème** : le tableau oppose « Le lieu » et « Le génitif » ; sur cette
  ligne les deux cases portent la même chaîne, ce qui ne montre aucune
  opposition. Trois autres lignes ont un tiret dans la colonne génitif — ici il
  aurait fallu un tiret dans la colonne « lieu ».
- **Correction proposée** : `["—", "the newsagent's", "papers, sweets"]`.
- **Fait** : `vocabulaire-monde.ts` : première colonne de la ligne newsagent's remplacée par un tiret.

### [MOYEN] ✅ `en-irreguliers-1` annonce vingt verbes et en donne dix

- **Où** : `verbes.ts:14` — `en-irreguliers-1`
- **Texte** : « Les vingt verbes irréguliers qui reviennent sans arrêt, donnés au
  passé dans une phrase. »
- **Problème** : la série contient dix cartes, donc dix verbes. C'est la même
  faute de décompte que le « Neuf petits verbes » de `en-cours-modaux` : un
  chiffre annoncé dans le statement que le contenu ne tient pas. Et le statement
  de la série jumelle, `en-irreguliers-2`, annonce cinq verbes (« dire,
  comprendre, garder, sentir, tenir ») pour dix cartes — les cinq autres (cost,
  put, sell, spend, rise) ne sont pas annoncés.
- **Correction proposée** : « Les dix verbes irréguliers qui reviennent sans
  arrêt… », et compléter l'énumération de `en-irreguliers-2`.
- **Fait** : `verbes.ts` : statement corrigé en « Les dix verbes irréguliers… » ; statement d'`en-irreguliers-2` complété avec les verbes non annoncés (coûter, vendre, dépenser, se lever, poser).

### [MOYEN] ✅ Doublon : « get on » enseigné trois fois

- **Où** : `debutant.ts:55` (`en-gens`, A1), `verbes.ts:81` (`en-phrasal-1`, B1),
  `vocabulaire-vie.ts` (`en-voc-famille`, B1)
- **Texte** : « We get on very well. » / « On s'entend très bien. » — « to get on
  with someone » / « bien s'entendre avec quelqu'un » — « He gets on well with
  his stepfather. » / « Il s'entend bien avec son beau-père. »
- **Problème** : le même verbe à particule, avec le même sens, dans trois séries
  de trois fichiers, à trois niveaux annoncés différents.
- **Correction proposée** : garder celle d'`en-phrasal-1` (qui porte la note utile
  « Get on with something veut dire s'y mettre ») et retirer les deux autres.
- **Fait** : `verbes.ts` (`en-phrasal-1`) conservée comme référence ; `debutant.ts` (« We get on very well. » → « We're a close family. ») et `vocabulaire-vie.ts` (« He gets on well with his stepfather. » → « My stepmother lives in Bristol. ») remplacées par des cartes qui ne recoupent plus get on.

### [MOYEN] ✅ Doublon : les verbes invariables annoncés deux fois

- **Où** : `verbes.ts:41` (tip d'`en-irreguliers-2`) et `conjugaison-2.ts`
  (`en-conj-irreguliers-familles`, tableau + carte 6)
- **Texte** : tip : « Certains ne changent pas du tout : cut, put, let, cost,
  hit. Ce sont les seuls qu'on peut apprendre en liste sans risque. » — tableau :
  `["identiques", "cut, cut, cut", "put, let, hit, cost, shut, set"]` — carte :
  « Famille invariable : cut, put, let, hit, cost, shut, set. La plus rentable. »
- **Problème** : la même liste, presque le même commentaire (« sans risque » /
  « la plus rentable »), dans deux fichiers. `en-irreguliers-2` illustre en outre
  la règle par deux cartes (« It cost twenty pounds. », « He put it on the
  table. ») que `en-conj-irreguliers-familles` refait en une (« It cost more than
  we had put aside. »).
- **Correction proposée** : retirer le tip et les deux cartes de
  `en-irreguliers-2`, qui n'a pas de cours pour les porter, et laisser le sujet à
  `en-conj-irreguliers-familles`.
- **Fait** : `verbes.ts` (`en-irreguliers-2`) : tip remplacé, cartes « It cost twenty pounds. » et « He put it on the table. » remplacées par « He forgot her birthday. » et « They found a solution. » ; le sujet reste entièrement à `conjugaison-2.ts:en-conj-irreguliers-familles`.

### [MOYEN] ✅ Doublon : `be used to` enseigné dans deux fichiers

- **Où** : `faux-amis.ts` — `en-pieges-verbes`, dernière carte ; et
  `conjugaison-2.ts` — `en-conj-used-to`, série entière avec cours
- **Texte** : « I'm used to working late. » / « J'ai l'habitude de travailler
  tard. » / note « Ne pas confondre avec I used to work late, qui veut dire « je
  travaillais tard, avant ». » — et le tip d'`en-conj-used-to` : « I used to
  swim, c'était mon habitude autrefois. I'm used to swimming, j'y suis habitué
  maintenant. »
- **Problème** : la carte de `faux-amis.ts` résume en une note le chapitre entier
  de `conjugaison-2.ts` — et elle est classée A2 quand le chapitre est classé B1.
- **Correction proposée** : retirer la carte de `en-pieges-verbes` ; le calque
  visé (*I have the habit of…*) n'y est de toute façon pas traité.
- **Fait** : `faux-amis.ts` (`en-pieges-verbes`) : carte remplacée par « I don't usually get up this early. », qui porte le calque non traité ailleurs (« I don't have the habit of » au lieu de usually) plutôt que be used to, laissé entièrement à `conjugaison-2.ts:en-conj-used-to`.

### [MINEUR] ✅ Rupture de registre dans `en-pieges-verbes`

- **Où** : `faux-amis.ts` — `en-pieges-verbes`
- **Texte** : neuf cartes tutoient ou sont neutres (« Dis-moi si tu as besoin de
  quelque chose. », « Tu me manques. ») et une vouvoie dans un registre de
  courrier administratif : « I look forward to hearing from you. » / « Dans
  l'attente de votre réponse. »
- **Problème** : la série est marquée `oral` et `parle` — l'apprenant devra
  prononcer une formule de clôture de lettre au milieu de phrases parlées. Le
  module a déjà une série pour cela, `travail.ts:en-courriel`.
- **Correction proposée** : déplacer la carte dans `en-courriel`, et la remplacer
  ici par un calque oral : « I'm looking forward to it. » / « J'ai hâte. »
- **Fait** : `faux-amis.ts` : carte « I look forward to hearing from you. » déplacée dans `travail.ts:en-courriel` et remplacée ici par « I'm looking forward to it. » / « J'ai hâte. », un calque oral.

### [MINEUR] ✅ « Depend est toujours suivi de on »

- **Où** : `faux-amis.ts` — `en-pieges-verbes`
- **Problème** : *It depends.* seul est extrêmement courant, et c'est
  précisément la réponse d'une conversation. Le « toujours » est faux dès qu'il
  n'y a pas de complément.
- **Correction proposée** : « Depend prend on devant son complément : it depends
  on the weather. Sans complément, il reste nu : it depends. »
- **Fait** : `faux-amis.ts` : note complétée avec le cas sans complément (« it depends » seul).

### [MINEUR] ✅ « Je suis affamé » accepté pour « I am hungry »

- **Où** : `faux-amis.ts` — `en-pieges-verbes`
- **Texte** : `{ etranger: "I am hungry.", francais: "J'ai faim.", aussi: ["Je suis affamé."] }`
- **Problème** : « affamé » traduit *starving*, pas *hungry*. L'`aussi` étant une
  réponse acceptée, il installe une équivalence de degré fausse.
- **Correction proposée** : supprimer l'`aussi`, ou le remplacer par « J'ai un
  petit creux. » — non : par rien, « J'ai faim » se suffit.
- **Fait** : `faux-amis.ts` : `aussi: ["Je suis affamé."]` supprimé, sans remplacement — « J'ai faim. » se suffit, comme suggéré.

### [MOYEN] ✅ Une série d'en-têtes de courriel donnée à prononcer

- **Où** : `travail.ts:8-29` — `en-courriel`, `parle: true` (sans `oral`)
- **Texte** : les cartes « Dear Ms Clarke, », « Kind regards, », « Please find
  attached the report. », « Just a quick reminder about… »
- **Problème** : la série est marquée `parle`, donc chaque carte devient un
  exercice de prononciation évalué par reconnaissance vocale. Or « Dear Ms
  Clarke, » et « Kind regards, » ne se prononcent jamais : ce sont des lignes
  d'en-tête et de signature. Deux autres cartes se terminent par des points de
  suspension (« I'm writing to ask about… »), qu'un moteur de reconnaissance ne
  peut ni entendre ni valider.
- **Correction proposée** : retirer `parle` de `en-courriel`. C'est la seule
  série du module qui porte `parle` sans `oral`, ce qui suggère d'ailleurs que
  l'attribut a été mis par inadvertance.
- **Fait** : `travail.ts` (`en-courriel`) : `parle: true` retiré.

### [MOYEN] ✅ « Madame Clarke, » n'est pas une formule d'appel française

- **Où** : `travail.ts:18` — `en-courriel`
- **Texte** : `{ etranger: "Dear Ms Clarke,", francais: "Madame Clarke," }`
- **Problème** : en français, on n'écrit pas le nom dans la formule d'appel :
  c'est « Madame, » tout court. « Madame Clarke, » est précisément le calque de
  l'anglais que la série annonce vouloir corriger (« Traduire les formules
  françaises mot à mot donne un ton systématiquement trop lourd »). L'apprenant
  apprend donc, en français, une faute d'usage épistolaire.
- **Correction proposée** : `francais: "Madame,"` avec la note complétée : « Le
  français n'écrit pas le nom dans la formule d'appel ; l'anglais si — c'est
  même la marque du courriel personnalisé. »
- **Fait** : `travail.ts` : français changé en « Madame, », note complétée comme proposé.

### [MOYEN] ✅ Une note qui renvoie à une carte d'un autre fichier

- **Où** : `travail.ts:25` — `en-courriel`
- **Texte** : « I'd appreciate a quick reply. » / note : « Plus direct que la
  formule d'attente, et parfaitement poli en anglais. »
- **Problème** : « la formule d'attente » n'a pas d'antécédent. Elle désigne
  vraisemblablement *I look forward to hearing from you*, qui se trouve dans un
  tout autre fichier (`faux-amis.ts`, série `en-pieges-verbes`) et que
  l'apprenant de cette série n'a jamais vue. La note compare à un absent.
- **Correction proposée** : « Plus direct que I look forward to hearing from
  you, et parfaitement poli en anglais. »
- **Fait** : `travail.ts` : note réécrite pour citer explicitement « I look forward to hearing from you » — qui a d'ailleurs été rapatriée dans `en-courriel` (voir « Rupture de registre dans en-pieges-verbes »), donc l'antécédent existe maintenant dans le même fichier.

### [MOYEN] ✅ `travail.ts:en-expressions` recoupe `expressions.ts:en-expr-accord`

- **Où** : `travail.ts:57-79` (`en-expressions`, B2) et `expressions.ts`
  (`en-expr-accord`, B1) ; voir aussi `travail.ts:44` (`en-reunion`)
- **Texte** : « Fair enough. » / « D'accord, ça se tient. » / note « Concède sans
  forcément approuver. » — contre « Fair enough, I hadn't thought of that. » /
  « C'est juste, je n'y avais pas pensé. » / note « Fair enough accepte un
  argument sans le partager entièrement. » Et le cours d'`en-expr-accord` reprend
  une troisième fois : « Fair enough est particulièrement utile : elle accepte un
  argument sans le partager entièrement. » De même « That's a fair point. »
  (`en-reunion`) figure dans le cours d'`en-expr-accord` (« that's a fair
  point ») et « I see what you mean, but… » (`en-reunion`) y a son jumeau
  « I see your point, but I'm not convinced. »
- **Problème** : trois occurrences de *fair enough* avec la même glose, et deux
  paires de cartes quasi identiques entre deux fichiers. Le commentaire en tête
  d'`expressions.ts` (« La catégorie n'en comptait que deux ») montre que les
  séries anciennes n'ont pas été relues au moment d'ajouter les nouvelles.
- **Correction proposée** : supprimer `travail.ts:en-expressions`, dont sept
  cartes sur dix relèvent d'`expressions.ts`, et reverser les trois qui lui sont
  propres (« It's not rocket science. », « It rings a bell. », « It's a bit of a
  stretch. ») dans `en-expr-proverbes` ou `en-expr-familier`.
- **Fait** : correction appliquée seulement en partie : la carte « Fair enough. » de `travail.ts:en-expressions`, seul doublon réellement vérifié mot pour mot avec `expr-accord`, a été remplacée par « It's a piece of cake. » En relisant le détail, les 6 autres cartes citées comme faisant doublon (Let's play it by ear, I'm on the fence, That's a long shot, It's a bit of a stretch, Bear with me, It's up to you, I can't be bothered) ne reprennent pas de formulation identique dans `expressions.ts` — seules « That's a fair point. » et « I see what you mean, but… » d'`en-reunion` sont des paraphrases proches, pas des doublons littéraux. Je n'ai donc pas supprimé toute la série `en-expressions` comme proposé : l'ampleur du recoupement (« sept cartes sur dix ») ne se vérifie pas à la lecture du contenu actuel.

### [MOYEN] ✅ Tutoiement et vouvoiement mêlés dans `en-reunion`

- **Où** : `travail.ts:32-54` — `en-reunion`
- **Texte** : « Excusez-moi, je peux intervenir ? » et « Quelle est
  l'échéance ? » (vouvoiement) voisinent avec « Je vois ce que **tu** veux dire,
  mais… », « Je **te** réponds là-dessus plus tard. », « On peut mettre ça de
  côté pour l'instant ? »
- **Problème** : dans une série sur la prise de parole en réunion, le registre
  décide de tout — et il change d'une carte à l'autre sans raison. L'anglais,
  lui, ne marque pas la différence : c'est donc le français seul qui doit être
  cohérent, et il ne l'est pas.
- **Correction proposée** : tout mettre au vouvoiement, qui est le registre d'une
  réunion professionnelle, ou tout au tutoiement en l'assumant dans le statement.
- **Fait** : `travail.ts` : tout passé au vouvoiement (« Je vois ce que vous voulez dire, mais… », « Je vous réponds là-dessus plus tard. »), registre professionnel cohérent avec les cartes déjà au vouvoiement.

### [MINEUR] ✅ Le tip d'`en-reunion` oppose une forme réelle à une forme inexistante

- **Où** : `travail.ts:37` — `en-reunion`
- **Texte** : « Pour ne pas paraître brutal, l'anglais atténue avec un modal :
  « I'd say » plutôt que « I say ». »
- **Problème** : *I say* n'est pas la tournure qu'un francophone produirait — elle
  n'existe guère qu'en interjection britannique vieillie (*I say!*). Le contraste
  utile est *I'd say* contre l'assertion nue (*It's too expensive* → *I'd say
  it's a bit expensive*).
- **Correction proposée** : « … : « I'd say it's too expensive » plutôt que
  « It's too expensive ». »
- **Fait** : `travail.ts` : tip corrigé en « I'd say it's too expensive » plutôt que « It's too expensive ».

### [MINEUR] ✅ « That's a long shot » / « C'est très peu probable »

- **Où** : `travail.ts:72` — `en-expressions`
- **Problème** : *a long shot* qualifie une tentative dont les chances sont
  minces (« un coup de poker », « ça vaut le coup d'essayer, mais bon »), pas un
  énoncé de probabilité. « C'est très peu probable » se rendrait plutôt par
  *that's unlikely* — et c'est ce que l'apprenant produira en exercice inverse.
- **Correction proposée** : `francais: "C'est un coup de poker."`,
  `aussi: ["Il y a peu de chances que ça marche."]`
- **Fait** : `travail.ts` : français corrigé en « C'est un coup de poker. », `aussi` mis à jour.

### [GRAVE] « Be, have, do sont les seuls verbes vraiment irréguliers » contredit deux séries du même fichier

- **Où** : `conjugaison-2.ts:18` — statement d'`en-conj-be-have-do`
- **Texte** : « Trois verbes portent toute la conjugaison anglaise : ils forment
  les questions, les négations, les temps composés — et **ils sont les seuls à
  être vraiment irréguliers**. »
- **Problème** : c'est faux, et le fichier lui-même le dit deux séries plus loin :
  `en-conj-irreguliers-familles` s'ouvre sur « **Deux cents verbes irréguliers**
  ne s'apprennent pas en liste alphabétique » et consacre trois sections et dix
  cartes à les ranger. `verbes.ts` y consacre deux séries de plus. Un apprenant
  qui lit les séries dans l'ordre annoncé (A1 d'abord) apprend qu'il n'y a que
  trois verbes irréguliers, puis en découvre deux cents.
- **Correction proposée** : « … — et ce sont les plus irréguliers de la langue :
  be change de forme à presque chaque personne. »

### [MOYEN] ✅ Trois statements annoncent des mots que la série n'enseigne pas

- **Où** : `vocabulaire-vie.ts` — `en-voc-transports` et `en-voc-medias` ;
  `prononciation.ts` — `en-pron-muettes`
- **Texte** :
  - « Take, catch, **miss**, **get on**, get off. » — *miss* et *get on*
    n'apparaissent dans aucune des dix cartes (vérifié : ils ne figurent que dans
    le statement et le tip). Les cartes enseignent *get off* et *get out of*, pas
    *get on*, alors même que le tip explique le choix *on* / *in*.
  - « Coverage, outlet, **feed**, thread. » — *feed* n'apparaît nulle part
    ailleurs dans la série (vérifié : une seule occurrence dans tout le fichier,
    celle du statement).
  - « Knight, **island**, subtle, colonel. » — *island* n'apparaît nulle part
    ailleurs dans `prononciation.ts` (une seule occurrence dans les 762 lignes).
- **Problème** : le statement est ce que l'apprenant lit avant de commencer ; il
  y voit un sommaire. Trois séries annoncent un mot qu'elles ne traitent jamais —
  et pour `en-voc-transports`, c'est le verbe *miss* (rater son train), qui est
  précisément celui qui manque au champ lexical.
- **Correction proposée** : soit ajouter les cartes manquantes (« I missed the
  last train. », « Get on at the front. », « It's in my feed. »), soit retirer ces
  mots des statements.
- **Fait** : cartes ajoutées plutôt que mots retirés des statements : `vocabulaire-vie.ts` (« I missed the last train. », « Get on at the front. » dans `en-voc-transports` ; « It's in my feed. » dans `en-voc-medias`). Le troisième cas (island dans `prononciation.ts`) est réglé par le constat suivant, qui remplace island par thumb dans le statement.

### [MOYEN] ✅ L'exemple d'`en-pron-muettes` contredit la règle qu'il illustre

- **Où** : `prononciation.ts:639` — statement d'`en-pron-muettes`
- **Texte** : « Knight, island, subtle, colonel. L'orthographe anglaise garde des
  lettres que **personne ne prononce depuis cinq siècles** — et quelques mots où
  elle ment franchement. »
- **Problème** : deux des quatre exemples ne relèvent pas de la règle énoncée. Le
  s d'*island* n'a **jamais** été prononcé : il a été inséré au XVIᵉ siècle par
  analogie avec *isle*, ce que le cours de la même série explique très bien pour
  *debt* et *doubt* (« ces trois-là n'ont même jamais eu de B prononcé »). Et
  *colonel* n'est pas un cas de lettre muette du tout : c'est une prononciation
  entièrement décalée, que le cours range à juste titre dans « Les mots qui
  mentent franchement ». Le statement mélange donc les deux catégories que le
  cours sépare, et prend pour illustrer la première un mot qui relève de l'autre.
- **Correction proposée** : « Knight, thumb, castle, colonel. L'orthographe
  anglaise garde des lettres que personne ne prononce depuis cinq siècles,
  d'autres qui n'ont jamais été prononcées — et quelques mots où elle ment
  franchement. »
- **Fait** : `prononciation.ts` : statement corrigé en « Knight, thumb, castle, colonel. » avec la troisième catégorie (jamais prononcées) ajoutée, exactement comme proposé.

### [MOYEN] ✅ « La moitié des vêtements anglais ne prennent jamais le singulier »

- **Où** : `vocabulaire-monde.ts` — statement d'`en-voc-vetements`
- **Texte** : « S'habiller se dit avec quatre verbes différents selon qu'on met,
  porte, essaie ou enlève. Et **la moitié des vêtements anglais** ne prennent
  jamais le singulier. »
- **Problème** : chiffre faux présenté comme un fait. Le cours de la même série
  donne la liste complète et elle est fermée : trousers, jeans, shorts, pyjamas,
  tights, glasses, sunglasses, scissors — huit mots, dont deux ne sont pas des
  vêtements. Face à cela, coat, shirt, dress, jumper, skirt, hat, scarf, sock et
  tout le reste du champ ont un singulier normal. On est très loin de la moitié.
- **Correction proposée** : « … Et une poignée de vêtements — tout ce qui a deux
  jambes ou deux verres — ne prend jamais le singulier. »
- **Fait** : `vocabulaire-monde.ts` : statement corrigé en « une poignée de vêtements anglais — tout ce qui a deux jambes ou deux verres ».

### [MOYEN] ✅ « -in-law » présenté comme un préfixe

- **Où** : `vocabulaire-vie.ts` — statement d'`en-voc-famille`
- **Texte** : « In-law, step-, half-, great-. L'anglais compose ses liens de
  parenté avec **quatre préfixes**, là où le français change de mot ou tourne
  autour. »
- **Problème** : *-in-law* est un suffixe — il se place après le nom
  (*sister-in-law*), ce que le tip de la même série écrit correctement avec son
  trait d'union initial (« -in-law pour l'alliance »). Le statement énonce donc
  une erreur de terminologie que son propre tip corrige trois lignes plus bas ;
  et l'apprenant qui applique « préfixe » produira *in-law sister*.
- **Correction proposée** : « In-law, step-, half-, great-. L'anglais compose ses
  liens de parenté avec trois préfixes et un suffixe, là où le français change de
  mot ou tourne autour. »
- **Fait** : `vocabulaire-vie.ts` : statement corrigé en « trois préfixes et un suffixe ».

### [MINEUR] ✅ « Un pays où il pleut a vingt mots pour la pluie »

- **Où** : `vocabulaire-monde.ts` — statement d'`en-voc-nature`
- **Problème** : la série en donne cinq (drizzle, shower, downpour, pouring,
  bucketing down). La formule reprend par ailleurs le cliché des « vingt mots
  esquimaux pour la neige », qui est un lieu commun linguistique démenti depuis
  longtemps. Une exagération rhétorique dans un statement est lue comme un fait.
- **Correction proposée** : « Un pays où il pleut a un mot pour chaque pluie. »
- **Fait** : `vocabulaire-monde.ts` : statement corrigé en « a un mot pour chaque pluie », sans faux chiffre.

### [MINEUR] ✅ « Obligatoire dans l'écrit formel américain »

- **Où** : `conjugaison-2.ts` — statement d'`en-conj-subjonctif`
- **Texte** : « Trois vestiges d'un mode presque disparu — et qui reste
  **obligatoire** dans l'écrit formel américain. »
- **Problème** : le cours de la même série est plus juste et plus nuancé :
  « L'anglais américain emploie le subjonctif mandative sans hésiter, et le
  considère comme la forme correcte. » Considérer une forme comme correcte n'est
  pas la rendre obligatoire — *the board demanded that he should resign* n'est pas
  fautif aux États-Unis, il y est seulement marqué.
- **Correction proposée** : « … — et qui reste la forme attendue dans l'écrit
  formel américain. »
- **Fait** : `conjugaison-2.ts` : statement corrigé en « reste la forme attendue dans l'écrit formel américain ».

### [GRAVE] « She didn't come » : la même carte avec la même note dans deux fichiers

- **Où** : `conjugaison.ts:213` (`en-conj-passe`, B1) et `conjugaison-2.ts:99`
  (`en-conj-be-have-do`, A1)
- **Texte** : « She didn't come. » / « Elle n'est pas venue. » / note « Didn't
  porte le passé ; come reste à l'infinitif. » — et « She didn't come
  yesterday. » / « Elle n'est pas venue hier. » / note « Après did, le verbe
  revient à l'infinitif nu : come, jamais came. »
- **Problème** : même verbe, même sujet, même point de grammaire, même note à la
  formulation près. Et les deux séries se placent à deux extrémités du parcours
  (A1 et B1), si bien que le doublon est invisible à qui écrit et inévitable à
  qui apprend.
- **Correction proposée** : garder celle d'`en-conj-be-have-do`, dont c'est le
  sujet (l'auxiliaire), et remplacer celle d'`en-conj-passe` par une carte qui
  oppose vraiment les trois passés : « She had already gone when I called. »

### [MOYEN] ⏭️ Le -s de la troisième personne après l'auxiliaire : quatre cartes, trois fichiers

- **Où** : `bases.ts:70` (`en-questions`, A2), `conjugaison.ts:102` et `:107`
  (`en-conj-present`, A1), `conjugaison-2.ts:114` (`en-conj-be-have-do`, A1)
- **Texte** :
  - « Where does she work? » / « L'auxiliaire does porte la marque du présent,
    donc work reste nu : jamais « does she works ». »
  - « He doesn't understand. » / « Après doesn't, le verbe reste nu : jamais
    « doesn't understands ». »
  - « Do you speak Spanish? » / « L'auxiliaire do ouvre la question ; le verbe ne
    change pas. »
  - « Does she work on Saturdays? » / « Does porte le s de la troisième personne,
    donc work le perd. »
  S'y ajoutent le cours d'`en-conj-present` (« Écrire « does he works » revient à
  marquer deux fois la même chose ») et celui d'`en-conj-be-have-do` (tableau
  entier, note « Après do, does ou did, le verbe revient à l'infinitif nu »).
- **Problème** : le même point, avec le même verbe *work*, dans quatre cartes et
  deux cours. C'est le point de grammaire le plus répété du module — et rien
  n'indique à l'apprenant qu'il le révise pour la quatrième fois.
- **Correction proposée** : le laisser à `en-conj-be-have-do`, qui a le cours et
  le tableau, et retirer les cartes redondantes des trois autres séries.
- **Fait** : constat écarté délibérément : les quatre occurrences testent le même point (le -s après l'auxiliaire) mais dans des phrases et des contextes différents (question, présent simple, auxiliaires), répartis sur des séries qui ont chacune leur propre raison d'être (former une question, le présent simple/continu, be/have/do). Une répétition espacée du point le plus difficile pour un francophone me semble un bénéfice pédagogique plutôt qu'un défaut — contrairement aux doublons à phrase quasi identique traités ailleurs dans ce rapport, ici les phrases et les verbes diffèrent à chaque fois. Je n'ai donc supprimé aucune carte.

### [MOYEN] ✅ « Have you finished ? » enseigné trois fois

- **Où** : `verbes.ts:108` (`en-temps`), `conjugaison.ts` (tableau du cours
  d'`en-conj-passe`, ligne `["Tu as fini ?", "—", "Have you finished?"]`) et
  `conjugaison-2.ts:94` (`en-conj-be-have-do`)
- **Texte** : « Have you finished? » / « Tu as fini ? » / note « Le résultat
  compte maintenant, pas le moment où c'est arrivé. » — la même ligne dans le
  tableau du cours — et « Have you finished already? » / « Tu as déjà fini ? » /
  note « Have auxiliaire monte lui-même en tête : pas de do devant lui. »
- **Problème** : s'ajoute au doublon déjà signalé entre `verbes.ts:en-temps` et
  `conjugaison.ts:en-conj-passe` — cette phrase-là est le seul énoncé du module à
  apparaître **trois** fois, dans trois fichiers.
- **Correction proposée** : n'en garder qu'une, celle d'`en-conj-be-have-do`.
- **Fait** : `verbes.ts` (`en-temps`) : carte remplacée par « I've never been to Rome. » (une expérience sans date, même point de grammaire, verbe différent) ; `conjugaison-2.ts` (`en-conj-be-have-do`) reste la version canonique. Le doublon dans le tableau de `conjugaison.ts` avait déjà disparu (contenu changé depuis l'audit).

### [MINEUR] ✅ « If you need anything » : trois cartes, trois fichiers

- **Où** : `faux-amis.ts:196` (`en-pieges-verbes`, A2), `conjugaison-2.ts:860`
  (`en-conj-conditionnelles-mixtes`, C1), `expressions.ts:641`
  (`en-expr-familier`, C1)
- **Texte** : « Let me know if you need anything. » / « Dis-moi si tu as besoin de
  quelque chose. » — « Should you need anything, let me know. » / « Si vous avez
  besoin de quoi que ce soit, dites-le-moi. » — « Give me a shout if you need
  anything. » / « Fais-moi signe si tu as besoin de quoi que ce soit. »
- **Problème** : ici la répétition est en partie voulue (la carte C1 illustre
  l'inversion, et c'est un bon choix pédagogique de reprendre la même phrase à
  deux registres). Mais la troisième, dans `en-expr-familier`, n'ajoute rien, et
  les français « si tu as besoin de quoi que ce soit » et « si vous avez besoin
  de quoi que ce soit » ne diffèrent que par la personne pour deux anglais
  différents : en exercice inverse, le second sera produit à la place du
  troisième.
- **Correction proposée** : retirer la carte d'`en-expr-familier` — *give
  someone a shout* peut s'enseigner sur une autre phrase (« Give me a shout when
  you're ready. »).
- **Fait** : `expressions.ts` (`en-expr-familier`) : carte remplacée par « Give me a shout when you're ready. », qui n'entre plus en collision avec `faux-amis.ts` et `conjugaison-2.ts`.

### [MINEUR] ✅ Doublon : « Could you help me… » deux fois

- **Où** : `bases.ts:99` (`en-questions`) et `cours-grammaire.ts`
  (`en-cours-modaux`)
- **Texte** : « Could you help me with something? » / « Tu peux m'aider pour un
  truc ? » et « Could you help me for a second? » / « Tu peux m'aider une
  seconde ? »
- **Correction proposée** : varier l'une des deux (« Could I ask you
  something? »).
- **Fait** : `bases.ts` : carte remplacée par « Could I ask you something? » / « Je peux te demander un truc ? »

## Ce qui est sain

Les cours rédigés de `conjugaison-2.ts` sont d'un niveau nettement au-dessus du
reste : le chapitre `en-conj-used-to` (le test « remplacer used par
accustomed »), celui sur les conditionnelles mixtes (« chaque moitié prend le
temps qui correspond à SA propre temporalité », qui libère vraiment de la
mémorisation) et celui sur le subjonctif (la distinction *she insisted that he
be* / *that he was*) sont exacts, bien construits et enseignent quelque chose
qu'aucun manuel courant ne dit aussi clairement. `prononciation.ts` est de la
même veine : la règle du `-ed` en trois réalisations, les formes faibles et le
schwa sont traités avec une précision phonétique juste, et l'idée finale — « ce
qu'on ne sait pas produire, on ne l'entend pas non plus » — est le genre de
remarque qui change la façon d'écouter. Enfin `cours-grammaire.ts:en-cours-modaux`
traite *mustn't* contre *don't have to* exactement comme il faut, et
`monde-2.ts` couvre des champs (la mer, la ferme, la fin de vie) que je n'ai
trouvés fautifs nulle part : les notes y sont sobres et vérifiées.
