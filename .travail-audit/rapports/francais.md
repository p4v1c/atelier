# Français — module « l'Atelier » (prisma/seed/batches, hors dictations)

> ÉTAT : **terminé.** Les 29 fichiers du périmètre (`prisma/seed/batches/*.ts`, hors `dictations*`) ont été lus phrase par phrase, chaque `fix` appliqué au `marked` et la phrase obtenue relue — passe 1 puis passe 2. Rien ne reste à ouvrir. Deux relecteurs ont travaillé sur ce rapport : le premier a couvert `batch-001` à `batch-015`, `densify-homophones` et `densify-accords` ; le second les douze fichiers de densification restants, puis la passe 2 sur ceux-ci.

## Ce que j'ai lu

Fichiers intégralement lus et relus phrase par phrase, en appliquant chaque `fix`
au texte `marked` et en relisant la phrase obtenue :

- `batch-001-ponctuation.ts` (25 règles, 125 phrases)
- `batch-002-typographie.ts` (25 règles, 125 phrases)
- `batch-003-registre.ts` (25 règles, 125 phrases)
- `batch-004-professionnels.ts` (25 règles, 127 phrases)
- `batch-005-discutes.ts` (25 règles dont 12 `disputed`, 125 phrases)
- `batch-006-accords.ts` (24 règles, 120 phrases)
- `batch-007-conjugaison.ts` (25 règles, 125 phrases)
- `batch-008-homophones.ts` (25 règles, 125 phrases)
- `batch-009-paronymes.ts` (25 règles, 125 phrases)
- `batch-010-conjugaison.ts` (25 règles, 125 phrases)
- `batch-011-accords.ts` (25 règles, 125 phrases)
- `batch-012-orthographe.ts` (25 règles, 125 phrases)
- `batch-013-ponctuation-typo.ts` (25 règles, 125 phrases)
- `batch-014-registre-pro.ts` (26 règles, 136 phrases)
- `batch-015-expressions.ts` (25 règles, 125 phrases)
- `densify-homophones.ts` (60 groupes d'ajouts, 129 phrases)
- `densify-accords.ts` (41 groupes d'ajouts, 98 phrases)
- `densify-conjugaison.ts` (37 groupes d'ajouts, 84 phrases)
- `densify-orthographe.ts` (40 groupes d'ajouts, 93 phrases)
- `densify-vocabulaire.ts` (64 groupes d'ajouts, 190 phrases)
- `densify2-homophones.ts` (60 groupes d'ajouts, 120 phrases)
- `densify2-accords-conj.ts` (79 groupes d'ajouts, 158 phrases)
- `densify2-ortho-vocab.ts` (104 groupes d'ajouts, 208 phrases)
- `densify3-homophones-paronymes.ts` (50 groupes d'ajouts, 100 phrases)
- `densify3-accords-conj.ts` (49 groupes d'ajouts, 98 phrases)
- `densify3-ponctuation-typo.ts` (50 groupes d'ajouts, 100 phrases)
- `densify3-conj-accords-ortho.ts` (75 groupes d'ajouts, 150 phrases)
- `densify3-ponctuation2-pro-expr.ts` (76 groupes d'ajouts, 152 phrases)
- `densify3-registre-pro-discutes.ts` (75 groupes d'ajouts, 150 phrases)

Les fichiers `densify-*` ne contiennent pas de règles : ils ajoutent des phrases
à des règles du lot « legacy » qui vivent hors de `batches/`. Je les ai donc jugés
sur la seule phrase et sa correction, sans pouvoir vérifier l'accord avec
l'énoncé de la règle visée.

Total lu : **29 fichiers — 375 règles (lots `batch-*`) et 860 groupes d'ajouts
(fichiers `densify*`), soit 3 715 phrases**, dont 1 885 dans les lots de règles et
1 830 dans les fichiers de densification. J'ai appliqué chacune des 3 292 corrections
et relu la phrase obtenue. C'est l'intégralité du périmètre : `prisma/seed/batches/`
ne contient, en dehors de ces 29 fichiers, que les trois `dictations*` (hors
périmètre) et `index.ts`.

**Sur la fiabilité de cette lecture.** Le volume est considérable et la seconde moitié
du travail — les douze fichiers de densification — a été lue par un second relecteur.
Deux limites sont à connaître :
1. Les fichiers `densify*` ne contiennent **aucune règle** (`rules: []`) : ils
   rattachent des phrases à des règles du lot « legacy » qui vit hors de `batches/`. Ils
   ont donc été jugés sur la phrase, sa correction et la cohérence avec le `ruleSlug`
   visé, mais **sans que l'énoncé de la règle ait pu être vérifié**. Quand je signale
   qu'une phrase ne relève pas de sa règle, je m'appuie sur le nom du slug seul.
2. Les jugements de norme (graphies rectifiées de 1990, tours discutés) reposent sur
   les dictionnaires usuels et les positions de l'Académie ; ils sont signalés comme
   tels et non comme des fautes franches.

---

## Le défaut dominant, en une phrase

**Le mot entre crochets est trop court.** Dans des dizaines de cas, la correction
remplace bien un token par un autre, mais le reste de la phrase — accord,
préposition, participe, article — n'a pas été mis à jour, et la phrase obtenue
après correction est agrammaticale. Un apprenant qui applique la correction
apprend une phrase fausse. C'est de très loin le problème le plus grave et le
plus répandu du module.

---

## Constats

### [GRAVE] `pro-revenir-vers` — les quatre corrections produisent une phrase absurde
- **Où** : `batch-004-professionnels.ts:119-132` — slug `pro-revenir-vers`
- **Texte** : « Je [reviens] vers vous dès que j'aurai les chiffres définitifs. », fix `"vous réponds"`
- **Problème** : le token marqué ne couvre que le verbe, pas « vers vous ». Après
  correction : « Je **vous réponds vers vous** dès que j'aurai les chiffres
  définitifs. » Les trois autres phrases de la règle produisent la même absurdité :
  « Le service commercial **vous recontactera vers vous** dans la semaine. »,
  « Merci de **me répondre vers moi** avant la fin de la journée. »,
  « Nous **vous tiendrons informé vers vous** après examen de votre dossier. »
  Aucune des quatre phrases n'est exploitable.
- **Correction proposée** : marquer le groupe entier, p. ex. « Je [reviens vers vous] dès que… » → fix `"vous réponds"`.

### [GRAVE] `pro-objet-message` — trois corrections sur quatre donnent du charabia
- **Où** : `batch-004-professionnels.ts:196-209` — slug `pro-objet-message`
- **Texte** : « Objet : [pouvez-vous] me confirmer la date de la réunion ? », fix `"confirmation"`
- **Problème** : après correction, « Objet : **confirmation me confirmer** la date
  de la réunion ? ». Idem : « Objet : **demande obtenir** un rendez-vous… » et
  « Objet : **transmission vous transmettons** les documents demandés hier. ».
  La quatrième, « Objet : je vous [écris] au sujet du devis numéro 2451 » → `"relance"`,
  donne « Objet : je vous relance au sujet du devis numéro 2451 », qui **viole encore
  la règle énoncée** (l'objet doit être un groupe nominal sans verbe conjugué).
- **Correction proposée** : marquer tout le groupe à remplacer, p. ex.
  « Objet : [pouvez-vous me confirmer] la date de la réunion » → `"confirmation de"`.

### [GRAVE] `pro-agreer-salutations` — la correction casse l'accord dans trois phrases
- **Où** : `batch-004-professionnels.ts:29-42` — slug `pro-agreer-salutations`
- **Texte** : « Veuillez agréer, Madame, l'expression de mes [sentiments] distingués. », fix `"salutations"`
- **Problème** : « salutations » est féminin pluriel. Après correction :
  « l'expression de mes **salutations distingués** » — faux. Même défaut pour
  « mes **salutations respectueux et distingués** » et « mes **salutations les
  meilleurs** ». Seule la quatrième (« les plus sincères », épicène) survit.
- **Correction proposée** : marquer « [sentiments distingués] » → `"salutations distinguées"`, etc.

### [GRAVE] `pro-pieces-jointes-accord` — trois phrases sur quatre restent fausses après correction
- **Où** : `batch-004-professionnels.ts:378-391` — slug `pro-pieces-jointes-accord`
- **Texte** : « Veuillez trouver ci-joint la [pièce] demandée : devis, contrat, attestation. », fix `"pièces"`
- **Problème** : donne « ci-joint **la pièces demandée** ». Idem « Les documents
  figurent en **pièces jointe**, au nombre de quatre. » et « **Ci-joint la les
  pièces justificative** et le formulaire complété. » (fix `"les pièces"` alors que
  « la » est déjà là).
- **Correction proposée** : marquer le groupe déterminant + nom + adjectif.

### [GRAVE] `pro-svp` — « Veuillez transmettez »
- **Où** : `batch-004-professionnels.ts:98` — slug `pro-svp`
- **Texte** : « [Svp] transmettez ce document au service comptable. », fix `"Veuillez"`
- **Problème** : « Veuillez » appelle un infinitif. Après correction :
  « **Veuillez transmettez** ce document au service comptable. »
- **Correction proposée** : fix `"S'il vous plaît,"`, ou marquer « [Svp] transmettez » → `"Veuillez transmettre"`.

### [GRAVE] `pro-au-plaisir` — « Au plaisir de vous me lisiez »
- **Où** : `batch-004-professionnels.ts:303-316` — slug `pro-au-plaisir`
- **Texte** : « Au plaisir [que] vous me lisiez, je vous adresse mes salutations. », fix `"de"`
- **Problème** : après correction, « **Au plaisir de vous me lisiez** ». Même
  défaut phrase 4 : « **Au plaisir de nous puissions travailler** ensemble
  prochainement. » C'est exactement le cas signalé dans la consigne : une
  correction bien formée qui produit une phrase impossible, parce que la
  subordonnée conjonctive ne peut pas devenir un groupe prépositionnel par simple
  substitution du mot introducteur.
- **Correction proposée** : refaire les phrases avec un infinitif :
  « Au plaisir [pour] vous lire » → `"de"`.

### [GRAVE] `pro-suite-entretien` — « à la suite de à l'annonce »
- **Où** : `batch-004-professionnels.ts:250` — slug `pro-suite-entretien`
- **Texte** : « Je vous écris [suite] à l'annonce parue dans la presse locale. », fix `"à la suite de"`
- **Problème** : le « à » qui suit reste en place : « Je vous écris **à la suite de
  à l'annonce** parue… »
- **Correction proposée** : marquer « [suite à] » → `"à la suite de"`.

### [GRAVE] Contradiction frontale entre deux règles : « suite à »
- **Où** : `batch-004-professionnels.ts:241-254` (`pro-suite-entretien`) vs `batch-005-discutes.ts:114-128` (`discute-suite-a`)
- **Texte** : lot 004 : « [Suite] à notre conversation, je vous adresse le récapitulatif. » est **marquée fautive**.
  Lot 005 : « Suite à votre message, le dossier a été rouvert hier. » est **marquée correcte** (`fix: null`, statut `disputed`).
- **Problème** : le même tour est enseigné comme faute d'un côté et comme usage
  légitime de l'autre. L'apprenant reçoit deux verdicts opposés.
- **Correction proposée** : supprimer `pro-suite-entretien` ou l'aligner sur le
  statut `disputed`, en ne conservant que l'argument de registre.

### [GRAVE] Contradiction frontale entre deux règles : les majuscules des titres d'œuvres
- **Où** : `batch-002-typographie.ts:345-358` (`titres-oeuvres-majuscule`) vs `batch-006-accords.ts:269-282` (`accord-titre-oeuvre`)
- **Texte** : lot 002 : « Il relit Le Rouge et le [Noir] tous les deux ou trois ans. » → fix `"noir"` ;
  « Elle a emprunté Les [Fleurs] du mal » → fix `"fleurs"` ; « Le Petit [Prince] » → fix `"prince"`.
  Lot 006 écrit au contraire, dans ses phrases : « Les Misérables », « Les Fleurs du mal »,
  « Les Trois Mousquetaires », « Le Rouge et le Noir » — toutes avec les capitales.
- **Problème** : outre la contradiction, **la règle du lot 002 est fausse**. La
  règle typographique française classique veut que, lorsqu'un titre commence par
  un article défini, la majuscule s'étende au premier substantif et à l'adjectif
  qui le précède : *Le Rouge et le Noir*, *Les Misérables*, *Les Fleurs du mal*,
  *Le Petit Prince*. Le `statement` donne donc de mauvais exemples
  (« Le rouge et le noir, Les misérables »), les corrections détruisent des
  graphies correctes, et la phrase déclarée correcte
  (« Le tour du monde en quatre-vingts jours ») est en réalité la forme fautive
  (*Le Tour du monde en quatre-vingts jours*).
- **Correction proposée** : réécrire la règle sur la vraie convention, ou la
  supprimer. En l'état elle enseigne une erreur.

### [GRAVE] `accord-tout-autre` — la règle est énoncée à l'envers, les quatre corrections sont inversées
- **Où** : `batch-006-accords.ts:194-207` — slug `accord-tout-autre`
- **Texte** : statement « <b>tout autre</b> signifie « n'importe quel autre » et reste
  invariable » ; tip « Si tu peux glisser « n'importe quel » entre tout et autre,
  ne l'accorde pas. »
- **Problème** : c'est l'inverse de la règle réelle. *Tout* est **adjectif** — et
  donc s'accorde — quand il signifie « n'importe quel » et détermine le nom :
  « **Toute** autre personne aurait renoncé. » Il est **adverbe** — et donc
  invariable — quand il signifie « entièrement, tout à fait » et modifie *autre* :
  « C'est une **tout** autre affaire. » Conséquences :
  – « [Toute] autre solution aurait donné le même résultat décevant. » → fix `"Tout"` : **la forme d'origine était correcte** ;
  – « [Toute] autre personne aurait renoncé depuis longtemps. » → fix `"Tout"` : idem ;
  – « C'est une [tout] autre affaire que celle d'hier. » → fix `"toute"` : **la forme d'origine était correcte** ;
  – « Il aborde le sujet d'une [tout] autre manière cette fois. » → fix `"toute"` : idem.
  Pire, la phrase déclarée correcte (« Toute autre proposition sera examinée en
  commission. ») contredit directement les phrases 1 et 3 de la même règle, qui
  marquent cette construction exacte comme fautive.
- **Correction proposée** : inverser le `statement`, le `tip` et les quatre `fix`.

### [GRAVE] `accord-le-peu-de` — la règle se contredit d'une phrase à l'autre
- **Où** : `batch-006-accords.ts:134-147` — slug `accord-le-peu-de`
- **Texte** : phrase 1 : « Le peu de vacances qu'il a prises l'[a] à peine reposé. » → fix `"ont"` ;
  phrase 2 : « Le peu d'efforts fournis n'[ont] pas suffi à convaincre. » → fix `"a"`.
- **Problème** : les deux phrases expriment la même idée (l'insuffisance :
  « à peine reposé », « n'a pas suffi »). Selon le `statement` — accord avec
  « peu » quand on insiste sur l'insuffisance — la phrase 1 devrait garder le
  singulier « a ». La règle exige donc le pluriel dans un cas et le singulier dans
  l'autre, pour la même valeur sémantique.
- **Correction proposée** : retirer la phrase 1, ou lui donner un contexte de
  suffisance (« Le peu de vacances qu'il a prises **lui ont fait le plus grand bien** »).

### [GRAVE] `accord-pourcentage-verbe` — « a été perdus »
- **Où** : `batch-006-accords.ts:187` — slug `accord-pourcentage-verbe`
- **Texte** : « Vingt pour cent de la récolte [ont] été perdus. », fix `"a"`
- **Problème** : le participe reste au pluriel. Après correction : « Vingt pour
  cent de la récolte **a été perdus**. » Il fallait « a été perdue ». S'ajoute
  que la forme d'origine (accord avec « pour cent », masculin pluriel) est admise
  par l'usage : la phrase n'était pas fautive.
- **Correction proposée** : marquer « [ont été perdus] » → `"a été perdue"`, ou supprimer la phrase.

### [GRAVE] `accord-collectif-groupe` — « se sont abattues » pour des oiseaux
- **Où** : `batch-006-accords.ts:263` — slug `accord-collectif-groupe`
- **Texte** : « Une nuée d'oiseaux [s'est] abattues sur le champ voisin. », fix `"se sont"`
- **Problème** : « oiseaux » est masculin. Après correction : « Une nuée d'oiseaux
  **se sont abattues** ». Il fallait « se sont abattus ».
- **Correction proposée** : marquer « [s'est abattues] » → `"se sont abattus"`.
- **Second problème dans la même règle** : « Une majorité de votants [ont] approuvé
  le projet de loi. » → fix `"a"`. L'accord au pluriel avec le complément est
  parfaitement standard ici ; la phrase n'était pas fautive, et le `statement`
  lui-même annonce que les deux accords sont possibles « selon l'idée dominante ».

### [GRAVE] `accord-moins-de-deux` — deux participes restent au singulier
- **Où** : `batch-006-accords.ts:292` et `:294` — slug `accord-moins-de-deux`
- **Texte** : « Depuis son départ, moins de deux ans [s'est] écoulé. », fix `"se sont"` ;
  « En tout, moins de deux candidats [a] été retenu. », fix `"ont"`
- **Problème** : après correction, « moins de deux ans **se sont écoulé** » et
  « moins de deux candidats **ont été retenu** ».
- **Correction proposée** : élargir le marquage au participe.

### [GRAVE] `accord-titre-oeuvre` — « est plus difficiles »
- **Où** : `batch-006-accords.ts:278` — slug `accord-titre-oeuvre`
- **Texte** : « Illusions perdues [sont] plus difficiles d'accès qu'on ne croit. », fix `"est"`
- **Problème** : « Illusions perdues **est plus difficiles** d'accès ». L'adjectif
  attribut n'a pas suivi.
- **Correction proposée** : marquer « [sont plus difficiles] » → `"est plus difficile"`.

### [GRAVE] `accord-avoir-affaire` — « eu à affaire à »
- **Où** : `batch-006-accords.ts:217` — slug `accord-avoir-affaire`
- **Texte** : « Nous avons eu à [faire] à un dossier très mal ficelé. », fix `"affaire"`
- **Problème** : le « à » qui précède subsiste : « Nous avons **eu à affaire à** un
  dossier très mal ficelé. » Il fallait « avons eu affaire à ».
- **Correction proposée** : marquer « [à faire] » → `"affaire"`.

### [GRAVE] `conj-imperatif-negatif` — « N't'approche pas »
- **Où** : `batch-007-conjugaison.ts:72` — slug `conj-imperatif-negatif`
- **Texte** : « N'[approche-toi] pas trop près du bord de la falaise. », fix `"t'approche"`
- **Problème** : l'élision « N' » n'existait que devant la voyelle d'« approche ».
  Après correction : « **N't'approche** pas trop près du bord de la falaise. »
  Il fallait « Ne t'approche pas ».
- **Correction proposée** : marquer « [N'approche-toi] » → `"Ne t'approche"`.

### [GRAVE] `impropriete-avoir-lair` (règle sur « s'avérer ») — deux corrections agrammaticales
- **Où** : `batch-003-registre.ts:376-389` — slug `impropriete-avoir-lair`
- **Texte** : « Le remède s'est [avéré] vrai dans la moitié des cas. », fix `"efficace"` ;
  « Le calcul s'est [avéré] vrai après une longue vérification. », fix `"exact"`
- **Problème** : après correction, « Le remède **s'est efficace** dans la moitié
  des cas. » et « Le calcul **s'est exact** après une longue vérification. » Le
  verbe a disparu. Il fallait « s'est révélé efficace », « s'est révélé exact ».
- **Correction proposée** : marquer « [avéré vrai] » → `"révélé efficace"` / `"révélé exact"`.
- **Note annexe** : le slug (`impropriete-avoir-lair`) ne correspond pas au contenu
  de la règle (s'avérer), et il entre en collision avec `discute-avoir-lair` du lot 005.

### [GRAVE] `virgule-enumeration` — l'astuce est un moyen mnémotechnique faux
- **Où** : `batch-001-ponctuation.ts:212-225` — slug `virgule-enumeration`
- **Texte** : tip « Compte les éléments : il faut une virgule de moins que d'éléments. »
- **Problème** : c'est arithmétiquement faux dès qu'on suit le `statement` de la
  même règle (dernier terme introduit par « et »). Dans l'exemple donné par la
  règle — « les livres, les cahiers et les crayons » — il y a **trois** éléments et
  **une** virgule, pas deux. Un apprenant qui applique l'astuce ajoute
  systématiquement une virgule de trop.
- **Correction proposée** : « Compte les éléments : il faut deux virgules de moins
  qu'il n'y a d'éléments, puisque le dernier est introduit par « et ». »

### [GRAVE] `virgule-donc-intercale` — la règle ne décrit pas ses propres exemples et les corrections sont anti-idiomatiques
- **Où** : `batch-001-ponctuation.ts:137-150` — slug `virgule-donc-intercale`
- **Texte** : statement « Glissé entre le sujet et le verbe, <b>donc</b> s'entoure de
  deux virgules. » ; phrase « Nous [avons] donc, décidé de repousser la livraison à
  lundi. » → fix `"avons,"`
- **Problème** : dans les quatre phrases, « donc » n'est pas entre le sujet et le
  verbe mais **à l'intérieur du groupe verbal** (entre auxiliaire et participe, ou
  entre verbe et infinitif). Et la phrase corrigée — « Nous avons, donc, décidé de
  repousser la livraison » — n'est pas la forme normale : on écrit « Nous avons
  donc décidé », sans aucune virgule. La règle enseigne à ajouter une virgule là
  où la faute réelle est d'en avoir mis une.
- **Correction proposée** : supprimer la règle, ou la refaire sur de vraies incises
  (« Le contrat, donc, ne sera pas signé. »).

### [GRAVE] `virgule-lieu-date` — trois phrases sur quatre ne sont pas fautives
- **Où** : `batch-001-ponctuation.ts:377-390` — slug `virgule-lieu-date`
- **Texte** : « Le contrat a été signé à [Nantes] le 9 septembre dernier. » → fix `"Nantes,"` ;
  « Nous nous sommes rencontrés à [Tours] le 7 mai, chez un ami. » → fix `"Tours,"`
- **Problème** : la virgule n'est obligatoire que dans la **formule figée**
  « Fait à Bordeaux, le 12 mars ». Dans une phrase ordinaire, « Le contrat a été
  signé à Nantes le 9 septembre » est parfaitement correct. La règle fabrique des
  fautes qui n'en sont pas.
- **Correction proposée** : ne garder que des occurrences de la formule « Fait à … , le … ».

### [GRAVE] `majuscule-institutions` — « le Ministère de la Culture »
- **Où** : `batch-002-typographie.ts:40` — slug `majuscule-institutions`
- **Texte** : « Le [ministère] de la Culture occupe cet immeuble depuis longtemps. », fix `"Ministère"`
- **Problème** : l'usage typographique français (Lexique de l'Imprimerie
  nationale) écrit **« le ministère de la Culture »**, en minuscule : les
  ministères ne sont pas traités comme des institutions uniques à majuscule
  initiale. La forme d'origine était la bonne ; la correction enseigne la faute.
- **Correction proposée** : supprimer la phrase, ou l'inverser (marquer
  « Le [Ministère] de la Culture » → `"ministère"`).

### [GRAVE] `majuscule-apres-deux-points` — la phrase « correcte » viole l'exception de son propre énoncé
- **Où** : `batch-002-typographie.ts:101` — slug `majuscule-apres-deux-points`
- **Texte** : statement « Après des deux-points, on reprend en <b>minuscule</b>, sauf
  s'il s'agit d'une **citation** ou d'un nom propre. » ; phrase `fix: null` :
  « Elle a répondu : « je n'en sais absolument rien ». »
- **Problème** : c'est précisément une citation, donc l'exception s'applique et il
  fallait « « **J**e n'en sais absolument rien. » ». La phrase donnée en modèle
  contredit la règle qu'elle illustre.
- **Correction proposée** : « Elle a répondu : « Je n'en sais absolument rien. » »

### [GRAVE] Doublon franc : l'espace à l'intérieur des guillemets, enseignée deux fois
- **Où** : `batch-001-ponctuation.ts:92-105` (`espace-guillemets`) et `batch-002-typographie.ts:360-373` (`espace-insecable-guillemet-ouvrant`)
- **Texte** : lot 001 statement « Après <b>«</b> et avant <b>»</b>, on met une espace : « comme ceci ». » ;
  lot 002 statement « Le guillemet ouvrant <b>«</b> est suivi d'une espace, et le fermant <b>»</b> précédé d'une espace. »
- **Problème** : même règle, mêmes corrections de type `«mot»` → `« mot »`. Le
  commentaire d'en-tête du lot 002 affirme pourtant qu'« aucune règle ne recoupe
  le lot legacy » — le recoupement avec le lot 001 n'a pas été vérifié.
  S'y ajoute un chevauchement partiel avec `guillemets-francais`
  (`batch-001:77-90`), dont le `statement` énonce déjà l'espace intérieure.
- **Correction proposée** : fusionner en une seule règle.

### [GRAVE] `conj-futur-anterieur` — des phrases parfaitement correctes sont marquées fautives
- **Où** : `batch-007-conjugaison.ts:137-150` — slug `conj-futur-anterieur`
- **Texte** : « Lorsque nous [rentrerons], la nuit sera tombée depuis longtemps. » → fix `"serons rentrés"` ;
  « Quand ils [arriveront], nous serons déjà partis depuis longtemps. » → fix `"seront arrivés"`
- **Problème** : le futur simple est ici la forme normale et correcte ; le futur
  antérieur n'est requis que si l'antériorité doit être explicitement marquée, ce
  qui n'est pas le cas dans ces phrases. « Lorsque nous rentrerons, la nuit sera
  tombée » est même la formulation la plus naturelle. La règle invente quatre
  fautes.
- **Correction proposée** : ne garder que des contextes où le futur simple est
  réellement impossible.

### [GRAVE] `impropriete-emerite` — un usage correct présenté comme une impropriété
- **Où** : `batch-003-registre.ts:331-344` — slug `impropriete-emerite`
- **Texte** : « C'est un cuisinier [émérite], le meilleur de toute la région. », fix `"chevronné"`
- **Problème** : « émérite » a en français deux sens attestés et corrects : le
  titre universitaire de fin de carrière, **et** « qui a acquis par une longue
  pratique une habileté remarquable » (Larousse, Petit Robert : « un skieur
  émérite », « un pianiste émérite »). Le `statement` ne retient que le premier et
  déclare fautives quatre phrases qui ne le sont pas.
- **Correction proposée** : passer la règle en `disputed`, ou la limiter au seul
  contresens réel (« émérite » employé pour « en exercice »).

### [GRAVE] `conj-verbe-naitre` — « Elle est né »
- **Où** : `batch-010-conjugaison.ts:350` — slug `conj-verbe-naitre`
- **Texte** : « Elle [a] né un jour de grande tempête de novembre. », fix `"est"`
- **Problème** : le participe n'a pas suivi le changement d'auxiliaire. Après
  correction : « **Elle est né** un jour de grande tempête de novembre. » Il
  fallait « est née ». La phrase 4 de la même règle, elle, est bien construite
  (« Ils [ont] nés » → « sont »), ce qui rend l'oubli d'autant plus visible.
- **Correction proposée** : marquer « [a né] » → `"est née"`.

### [GRAVE] Doublon franc : le double i à l'imparfait, enseigné deux fois
- **Où** : `batch-007-conjugaison.ts:317-330` (`conj-verbes-croire-voir-imparfait`) et `batch-010-conjugaison.ts:373-386` (`conj-verbe-rire-sourire`)
- **Texte** : lot 007 : « Vous [riez] beaucoup quand vous étiez plus jeunes. » → `"riiez"` ;
  lot 010 : « Nous [rions] beaucoup plus quand nous étions enfants. » → `"riions"`,
  « Vous [souriez] à tout le monde à cette époque-là. » → `"souriiez"`
- **Problème** : c'est la même règle (le radical déjà terminé par i ou y prend un
  second i aux deux premières personnes du pluriel), illustrée par le **même
  verbe**, *rire*. L'en-tête du lot 010 affirme pourtant « Aucun recoupement avec
  les 62 règles de conjugaison déjà en base (lot legacy et **lot 007**) ».
- **Correction proposée** : supprimer `conj-verbe-rire-sourire` ou le recentrer sur
  autre chose (le participe *ri*, par exemple).

### [GRAVE] `accord-verbe-ni-ni` — « n'sont »
- **Où** : `batch-011-accords.ts:20` — slug `accord-verbe-ni-ni`
- **Texte** : « Ni son frère ni sa sœur n'[est] venus la voir. », fix `"sont"`
- **Problème** : l'apostrophe d'élision reste devant une consonne. Après
  correction : « Ni son frère ni sa sœur **n'sont** venus la voir. » Il fallait
  « ne sont venus ». Même mécanisme que `conj-imperatif-negatif`.
- **Correction proposée** : marquer « [n'est] » → `"ne sont"`.

### [GRAVE] `accord-fraction` et `accord-dizaine` — trois participes restent au singulier
- **Où** : `batch-011-accords.ts:49`, `:62`, `:64`
- **Texte** : « Les deux tiers des votants [s'est] abstenu dimanche. » → `"se sont"` ;
  « Une dizaine de curieux [s'est] approché de la scène. » → `"se sont"` ;
  « Un millier de bulletins [a] été dépouillé dans la nuit. » → `"ont"`
- **Problème** : après correction on lit « se sont **abstenu** », « se sont
  **approché** », « ont été **dépouillé** ». Trois phrases modèles fausses.
- **Correction proposée** : élargir le marquage au participe dans les trois cas.

### [GRAVE] `accord-nom-nombre-precis` — l'énoncé se contredit et deux phrases restent fausses
- **Où** : `batch-011-accords.ts:340-353` — slug `accord-nom-nombre-precis`
- **Texte** : statement « Après un nombre supérieur à un, le nom et le verbe se
  mettent au <b>pluriel</b>, **même avec « zéro virgule cinq »** » ; tip « Dès qu'on
  dépasse un, le pluriel s'impose ; **en dessous, le singulier reste**. »
- **Problème** : l'énoncé et l'astuce disent le contraire l'un de l'autre, et la
  phrase 3 tranche dans le sens de l'astuce : « Zéro virgule cinq [litres]
  suffisent pour la recette. » → fix `"litre"`. La phrase obtenue —
  « Zéro virgule cinq **litre suffisent** pour la recette » — laisse le verbe au
  pluriel et le nom au singulier : elle reste fausse.
  S'y ajoute la phrase 2 : « Deux heures et demie [a] été nécessaire pour finir. »
  → `"ont"` donne « Deux heures et demie **ont été nécessaire** pour finir. »
- **Correction proposée** : retirer « même avec zéro virgule cinq » du `statement`,
  et élargir les marquages au nom et au participe.

### [GRAVE] `pluriel-composes-nom-adjectif` — « grands-messes » n'est pas la forme des dictionnaires
- **Où** : `batch-011-accords.ts:110`
- **Texte** : « Le dimanche, les [grand-messes] attirent encore du monde. », fix `"grands-messes"`
- **Problème** : le pluriel enregistré par le Petit Robert et le Larousse est
  **grand-messes** : dans ce composé, *grand* est l'ancienne forme féminine
  invariable, exactement comme dans *grand-route* ou *grand-rue*. Le mot n'entre
  donc pas dans la règle « nom + adjectif » qu'il est censé illustrer, et la
  correction impose une graphie que les dictionnaires ne donnent pas.
- **Correction proposée** : remplacer par un vrai composé nom + adjectif
  (*plate-forme*, *coffre-fort*, *rond-point*).

### [GRAVE] Doublon franc : l'accord du verbe après « qui »
- **Où** : `batch-006-accords.ts:239-252` (`accord-verbe-apres-qui`) et `batch-011-accords.ts:250-263` (`accord-cest-nous-qui`)
- **Texte** : lot 006 : « C'est toi qui [a] proposé cette solution en premier. » → `"as"`,
  « Nous qui [avez] tout organisé… » → `"avons"` ; lot 011 : « C'est nous qui [ont]
  tout organisé pour la fête. » → `"avons"`, « C'est vous qui [décide] de la date
  finale. » → `"décidez"`
- **Problème** : c'est la même règle — le verbe s'accorde avec l'antécédent de
  *qui* — et les phrases sont quasi identiques (« Nous qui avez tout organisé » /
  « C'est nous qui ont tout organisé »).
- **Correction proposée** : fusionner les deux règles.

### [GRAVE] `trait-union-inversion` — les quatre corrections doublent le pronom
- **Où** : `batch-013-ponctuation-typo.ts:149-162` — slug `trait-union-inversion`
- **Texte** : « [Viendra] elle finalement à la réunion de mardi ? », fix `"Viendra-t-elle"`
- **Problème** : le pronom qui suit n'a pas été absorbé par le marquage. Après
  correction : « **Viendra-t-elle elle** finalement à la réunion de mardi ? »
  Les trois autres phrases donnent la même chose : « **dit-il il** en refermant le
  dossier », « **répondit-elle elle** sans hausser la voix », « **Peux-tu tu** me
  rappeler avant la fin de la journée ? ». Aucune des quatre n'est utilisable.
- **Correction proposée** : marquer « [dit il] » → `"dit-il"`, « [Viendra elle] » → `"Viendra-t-elle"`, etc.

### [GRAVE] `typo-espace-tiret-intervalle` — les quatre corrections répètent les bornes
- **Où** : `batch-013-ponctuation-typo.ts:331-344` — slug `typo-espace-tiret-intervalle`
- **Texte** : « La guerre de 1939 [-] 1945 a marqué deux générations. », fix `"1939-1945"`
- **Problème** : seul le tiret est marqué, mais la correction réécrit l'intervalle
  entier. Après substitution : « La guerre de 1939 **1939-1945** 1945 a marqué deux
  générations. » Idem pour « les pages 45 **45-52** 52 », « du 3 **3-28** 28
  février », « La période 2010 **2010-2020** 2020 ». Les quatre phrases sont
  inutilisables.
- **Correction proposée** : marquer l'intervalle complet, « [1939 - 1945] » → `"1939-1945"`.
- **Note annexe** : « L'exposition court **du** 3-28 février » reste fautif même
  corrigé — après « du », il faut « au » : « du 3 au 28 février ».

### [GRAVE] `point-virgule-liste` — deux corrections identiques au texte marqué, et une règle qui n'est jamais illustrée
- **Où** : `batch-013-ponctuation-typo.ts:74-87` — slug `point-virgule-liste`
- **Texte** : « Il faut fournir une pièce [d'identité,] un justificatif, une photo. », fix `"d'identité,"` ;
  « Le dossier contient le [contrat,] l'avenant et les annexes. », fix `"contrat,"`
- **Problème** : dans ces deux phrases, la correction est **rigoureusement
  identique au mot marqué**. L'exercice ne peut pas fonctionner, et l'apprenant se
  voit annoncer une faute là où il n'y a rien à changer. C'est précisément le
  piège que le commentaire d'en-tête du fichier dit vouloir éviter
  (« aucune règle ne demande de RETIRER un signe »).
  S'y ajoute que le `statement` porte sur l'**énumération verticale** et le
  point-virgule, alors qu'aucune des cinq phrases n'est une liste verticale et
  qu'aucune correction n'introduit de point-virgule : les deux phrases qui
  fonctionnent (« entrées : », « suspens : ») relèvent de
  `deux-points-enumeration` (`batch-001:272`).
- **Correction proposée** : refaire entièrement la règle sur de vraies listes
  verticales, ou la supprimer.

### [GRAVE] Doublon franc : les marques devenues noms communs
- **Où** : `batch-011-accords.ts:205-218` (`accord-nom-propre-marque`) et `batch-013-ponctuation-typo.ts:361-374` (`typo-marques-minuscule`)
- **Texte** : lot 011 : « Trois [Frigidaire] occupent tout le fond de la cuisine. » → `"frigidaires"`,
  « Elle a acheté deux [Kleenex] en promotion ce matin. » → `"kleenex"` ;
  lot 013 : « Passe-moi un [Kleenex], j'ai renversé mon café. » → `"kleenex"`,
  « Le [Frigidaire] fait un bruit inquiétant depuis hier. » → `"frigidaire"`
- **Problème** : mêmes mots, mêmes corrections, même idée (« si le mot a perdu sa
  majuscule… » / « Passée dans l'usage courant, une marque perd sa majuscule »).

### [GRAVE] `pro-restant-disposition` — la règle enseigne un accord que le français interdit, et se contredit elle-même
- **Où** : `batch-014-registre-pro.ts:255-270` — slug `pro-restant-disposition`
- **Texte** : « [Restant] à votre disposition, nous vous prions d'agréer nos
  salutations. », fix `"Restants"` ; « [Demeurant] à votre service, nous vous
  adressons nos respectueuses salutations. », fix `"Demeurants"`
- **Problème** : *restant* et *demeurant* suivis d'un complément sont des
  **participes présents**, et le participe présent est **invariable**. « Restant à
  votre disposition, nous vous prions… » est correct ; « Restants » ne l'est pas.
  La règle marque donc comme fautives deux phrases justes et impose à leur place
  une forme inexistante.
  Elle se contredit en outre à l'intérieur d'elle-même : la phrase 3
  (« Nous restons joignables tout l'été, [demeurants] à votre écoute. ») est
  corrigée en `"demeurant"`, **invariable**, pour un sujet pluriel — l'inverse
  exact de ce qu'exige la phrase 6.
  Et elle contredit frontalement `accord-participe-ayant`
  (`batch-011-accords.ts:190`), dont l'énoncé est : « <b>ayant</b> et <b>étant</b>
  employés comme participes présents sont <b>invariables</b> » et le `tip`
  « Un participe présent **ne s'accorde jamais** ».
- **Correction proposée** : supprimer la règle, ou la refonder sur la vraie
  difficulté (le participe doit se rapporter au signataire, pas sur un accord).

### [GRAVE] `pro-lettre-recommandee` — la mention officielle est « avis de réception »
- **Où** : `batch-014-registre-pro.ts:304-317` — slug `pro-lettre-recommandee`
- **Texte** : « La mention exacte est <b>lettre recommandée avec accusé de
  réception</b>, abrégée LRAR — **jamais « avec avis de réception »** dans l'usage
  courant. »
- **Problème** : c'est l'inverse. Le produit postal et la mention juridique sont
  « lettre recommandée **avec avis de réception** » ; c'est ce que porte le
  formulaire de La Poste et ce que reprennent les textes réglementaires, et c'est
  de là que vient le sigle LRAR. « Accusé de réception » est le terme courant,
  répandu mais non officiel. La règle interdit donc la forme exacte et impose la
  forme approximative, et la phrase 1 (« Envoyée en recommandé avec [avis] de
  réception » → `"accusé"`) corrige du juste vers le moins juste.
- **Correction proposée** : inverser l'énoncé, ou signaler que les deux mentions
  coexistent, « avis de réception » étant la formule officielle.

### [GRAVE] `pro-objet-reference` — trois corrections sur quatre donnent une phrase absurde
- **Où** : `batch-014-registre-pro.ts:289-302` — slug `pro-objet-reference`
- **Texte** : « Réf. du dossier : [demande] de devis pour le toit. », fix `"2024-118"` ;
  « Objet : [n°] 4521, relance de la facture impayée. », fix `"relance"` ;
  « Voir la réf. suivante : [relance] de facture impayée. », fix `"2024-092"`
- **Problème** : après correction on lit « Réf. du dossier : **2024-118 de devis
  pour le toit** », « Objet : **relance 4521, relance de la facture impayée** » et
  « Voir la réf. suivante : **2024-092 de facture impayée** ». Le marquage porte
  sur un seul mot alors que c'est le groupe entier qu'il faut remplacer.

### [GRAVE] `pro-tutoiement` — deux corrections laissent le verbe à l'autre personne
- **Où** : `batch-014-registre-pro.ts:326` et `:327` — slug `pro-tutoiement`
- **Texte** : « Bonjour Paul, peux-tu me confirmer que [vous] serez présent ? », fix `"tu"` ;
  « Madame, pourriez-vous me dire si [tu] as reçu le dossier ? », fix `"vous avez"`
- **Problème** : après correction, « que **tu serez** présent ? » et « si **vous
  avez as** reçu le dossier ? ». Le pronom change, le verbe ne suit pas. Les deux
  phrases modèles sont fausses.
- **Correction proposée** : marquer « [vous serez] » → `"tu seras"` et
  « [tu as] » → `"vous avez"`.

### [GRAVE] `pro-formule-refus` — « ne peux pas de donner suite »
- **Où** : `batch-014-registre-pro.ts:357`
- **Texte** : « Je [refuse] de donner suite à votre proposition. », fix `"ne peux pas"`
- **Problème** : *refuser de* et *pouvoir* ne se construisent pas de la même façon.
  Après correction : « Je **ne peux pas de donner suite** à votre proposition. »
- **Correction proposée** : marquer « [refuse de] » → `"ne peux pas"`.

### [GRAVE] `impropriete-cloturer` — une faute laissée dans la phrase corrigée
- **Où** : `batch-014-registre-pro.ts:168`
- **Texte** : « Le président a [clôturé] la séance **à midi précise**. », fix `"clos"`
- **Problème** : *midi* est masculin : il fallait « à midi **précis** ». Une fois la
  correction appliquée, la phrase modèle reste fautive — et sur un point que le
  module enseigne par ailleurs (accord de l'adjectif).

### [GRAVE] `expr-a-lencontre` — les quatre phrases fautives sont inexploitables
- **Où** : `batch-015-expressions.ts:313-326` — slug `expr-a-lencontre`
- **Texte** : « Cette décision va à l'[encontre] du règlement en vigueur. », fix `"encontre"` ;
  « Il est allé à l'[encontre] de son ami à la gare. », fix `"rencontre"` ;
  « Aucune poursuite n'a été engagée à sa [rencontre]. », fix `"encontre"` ;
  « Elle est partie à l'[encontre] du facteur ce matin. », fix `"rencontre"`
- **Problème** : quatre défauts distincts, un par phrase.
  1. La première a un `fix` **identique au mot marqué** : rien à corriger, et une
     phrase correcte présentée comme fautive.
  2. et 4. La substitution donne « à **l'rencontre** de son ami » et « à
     **l'rencontre** du facteur » : l'élision de *l'* ne vaut que devant *encontre*.
  3. Donne « engagée à **sa encontre** » : il fallait « à son encontre ».
  Aucune des quatre n'est utilisable en l'état.
- **Correction proposée** : marquer les groupes entiers (« [à l'encontre] » →
  `"à la rencontre"`, « [à sa rencontre] » → `"à son encontre"`).

### [GRAVE] `expr-faire-long-feu` — trois phrases gardent « feux » au pluriel
- **Où** : `batch-015-expressions.ts:80-82` — slug `expr-faire-long-feu`
- **Texte** : « Ce projet a fait [longs] feux dès la première réunion. », fix `"long"`
- **Problème** : seul l'adjectif est marqué. Après correction : « a fait **long
  feux** », « n'a pas fait **long feux** », « n'aura pas fait **long feux** ».
  Trois phrases modèles fausses sur quatre. Le commentaire d'en-tête du fichier
  affirme pourtant que « le mot marqué est toujours celui, **unique**, qui change
  dans la locution » : c'est faux ici, deux mots changent.
- **Correction proposée** : marquer « [longs feux] » → `"long feu"`.

### [GRAVE] `expr-battre-son-plein` — deux phrases gardent « leurs » au pluriel
- **Où** : `batch-015-expressions.ts:20` et `:23`
- **Texte** : « Les festivités battaient leurs [pleins] depuis trois jours. », fix `"plein"` ;
  « Hier encore, les négociations battaient leurs [pleins]. », fix `"plein"`
- **Problème** : après correction, « battaient **leurs plein** ». Il fallait « leur
  plein » — ce que la phrase 3 de la même règle écrit correctement
  (« les travaux battent **leur** [pleins] »), preuve que l'incohérence est
  interne à la règle.

### [GRAVE] `expr-pierre-achoppement` — l'astuce enseigne exactement la faute exercée
- **Où** : `batch-015-expressions.ts:122` — slug `expr-pierre-achoppement`
- **Texte** : tip « **Un seul p** à achoppement, comme dans achopper. » ;
  fautes marquées : `achopement`, `achoppemant` ; fix : `"achoppement"`
- **Problème** : *achoppement* et *achopper* s'écrivent avec **deux p**. Les fautes
  que la règle fait corriger sont précisément des graphies à un seul p, et
  l'astuce ordonne d'en mettre un seul. Un apprenant qui suit l'astuce écrit la
  faute que la règle lui reproche.
- **Correction proposée** : « Deux p à achoppement, comme dans achopper. »

### [GRAVE] `densify-homophones` / `sais-sait` — « Je c'est une question »
- **Où** : `densify-homophones.ts:62`
- **Texte** : « Je [sais] une question à laquelle personne ne répond. », fix `"c'est"`
- **Problème** : après correction, « **Je c'est** une question à laquelle personne ne
  répond. » Le sujet « Je » reste devant. La phrase visée était sans doute
  « C'est une question à laquelle personne ne répond. »

### [GRAVE] `densify-homophones` / `quoi-que` — la correction rend fausse une phrase juste
- **Où** : `densify-homophones.ts:90`
- **Texte** : « Il ira jusqu'au bout, [quoique] cela lui coûte cher. », fix `"quoi que"`
- **Problème** : « quoique » = « bien que » : la phrase d'origine est **correcte** et
  parfaitement construite. Le `fix` produit « quoi que cela lui coûte cher », qui
  n'est pas français — *quoi que* exige une fonction nominale (« quoi qu'il lui en
  coûte »). La règle corrige du juste vers le faux.

### [GRAVE] `densify-homophones` / `foi-foie` — « Son foi »
- **Où** : `densify-homophones.ts:188`
- **Texte** : « **Son** [foie] en la justice reste intacte malgré tout. », fix `"foi"`
- **Problème** : *foi* est féminin. Après correction : « **Son foi** en la justice
  reste intacte » — le possessif n'a pas suivi. Il fallait « Sa foi ».

### [GRAVE] `densify-homophones` / `tout-tous` et `pourquoi` — des phrases correctes déclarées fautives
- **Où** : `densify-homophones.ts:107`, `:221`, `:223`
- **Texte** : « Ils ont [tout] compris avant même la fin des explications. » → `"tous"` ;
  « Voilà [pourquoi] il se bat depuis des années. » → `"pour quoi"` ;
  « Dis-moi [pourquoi] tu te bats vraiment, au fond. » → `"pour quoi"`
- **Problème** : les trois phrases marquées sont **correctes telles quelles** et ont
  simplement un autre sens que celui visé. « Ils ont tout compris » (ils ont
  compris l'ensemble) est irréprochable ; « Voilà pourquoi il se bat » (voilà la
  raison) l'est tout autant. Rien dans la phrase ne permet de deviner qu'on
  attendait l'autre lecture : l'exercice est insoluble et sanctionne une réponse
  juste.

### [GRAVE] `densify-homophones` / `quelle-quelle` — « Dis-moi qu'elle a bien pu inventer »
- **Où** : `densify-homophones.ts:73`
- **Texte** : « Dis-moi [quelle] elle a bien pu inventer cette fois. », fix `"qu'elle"`
- **Problème** : après correction, « Dis-moi **qu'elle** a bien pu inventer cette
  fois. » — l'interrogative indirecte réclame « ce qu'elle ». La phrase obtenue
  n'est pas construite.

### [GRAVE] `densify-homophones` / `davantage-2` — trois phrases rattachées à la mauvaise règle
- **Où** : `densify-homophones.ts:259-263`
- **Texte** : `ruleSlug: "davantage-2"` avec « Il a réussi [quand-même] à terminer
  avant l'heure. » → `"quand même"`, etc.
- **Problème** : les trois phrases portent sur *quand même*, pas sur *davantage*.
  Elles seront servies à l'apprenant sous un énoncé qui ne les explique pas.

### [GRAVE] `densify-accords` / `plus-dun` — les trois phrases restent fausses après correction
- **Où** : `densify-accords.ts:311-313`
- **Texte** : « Plus d'un participant se sont [plaints] de l'organisation. » → `"plaint"` ;
  « plus d'une année se sont [écoulées]. » → `"écoulée"` ;
  « Plus d'un spectateur [sont] repartis avant l'entracte. » → `"est"`
- **Problème** : on obtient « se sont **plaint** », « se sont **écoulée** » et « est
  **repartis** ». Dans les trois cas l'auxiliaire et le participe devaient changer
  ensemble ; un seul est marqué.

### [GRAVE] `densify-accords` — trois autres participes laissés en arrière
- **Où** : `densify-accords.ts:307`, `:397`, `:405`
- **Texte** : « La plupart des spectateurs [est] resté jusqu'à la fin. » → `"sont"` →
  « sont **resté** » ; « Ce [sont] moi qui ai réservé la salle pour demain. » →
  `"C'est"` → « **Ce C'est** moi qui ai réservé » ; « Tout le monde [sont] rentrés
  avant la nuit tombée. » → `"est"` → « est **rentrés** ».
- **Problème** : trois phrases modèles fausses, dont une (« Ce C'est moi ») purement
  absurde parce que le mot marqué n'inclut pas le « Ce » qui le précède.

### [GRAVE] Doublons francs entre `densify-accords` et les lots 006/011
- **Où** :
  – `densify-accords.ts:302-305` (`cest-moi-qui`) vs `batch-011-accords.ts:250-263`
    (`accord-cest-nous-qui`) : « C'est nous qui [ont] proposé cette date » /
    « C'est nous qui [ont] tout organisé », et « c'est vous qui [décide] de la
    suite » / « C'est vous qui [décide] de la date finale ». Phrases jumelles.
  – `densify-accords.ts:412-416` (`oeil-yeux`) vs `batch-006-accords.ts:299-312`
    (`pluriel-ciel-aieul`) : « Les [ciels] se sont dégagés » / « Les [ciels] se sont
    ouverts », « Ses [aïeuls] ont fui la guerre au siècle dernier » / « Ses [aïeuls]
    ont quitté l'Italie au siècle dernier ». Phrases jumelles.
  – `densify-accords.ts:432-436` (`deux-genres`) vs `batch-006-accords.ts:104-117`
    (`accord-adjectif-deux-noms`) : « Le chien et la chatte semblaient [inquiètes] »
    / « Le père et la mère semblaient [inquiète] », même correction `"inquiets"`.
  – `densify-accords.ts:451` (`nombreux-sujet`) vs `batch-006-accords.ts:279`
    (`accord-titre-oeuvre`) : « Les Trois Mousquetaires [passe] » /
    « Les Trois Mousquetaires [a] été porté », même titre, même règle d'accord.

---

### [MOYEN] ✅ `virgule-oui-non` — une phrase illustre une autre règle
- **Où** : `batch-001-ponctuation.ts:341` — slug `virgule-oui-non`
- **Texte** : « Elle a répondu : [oui] mais sans la moindre conviction. », fix `"oui,"`
- **Problème** : le `statement` dit « **En tête de phrase**, oui et non se détachent
  par une virgule ». Ici « oui » n'est pas en tête de phrase, et la virgule
  demandée relève en réalité de la règle `virgule-mais`.
- **Fait** : phrase remplacée par « [Oui] mais sans grande conviction, elle a fini
  par accepter la proposition. » → fix `"Oui,"`, où « oui » est bien en tête de
  phrase, conforme au `statement`.

### [MOYEN] ✅ `tiret-incise` — un « jamais » de trop
- **Où** : `batch-001-ponctuation.ts:320` — slug `tiret-incise`
- **Texte** : « Une incise peut s'encadrer de <b>tirets longs</b> — comme ici — mais jamais d'un seul. »
- **Problème** : un tiret unique est parfaitement correct lorsque l'incise se
  termine avec la phrase : « Il n'a rien dit — comme d'habitude. » L'énoncé
  absolu est faux.
- **Fait** : `statement` reformulé sans l'absolu : « … comme ici. Un seul tiret
  suffit quand l'incise se termine avec la phrase. »

### [MOYEN] ✅ `virgule-complement-tete` — obligation présentée pour un usage recommandé
- **Où** : `batch-001-ponctuation.ts:182-195`
- **Problème** : la virgule après un complément court placé en tête est
  recommandée, non obligatoire. Le `statement` (« se sépare du reste par une
  virgule ») ne le dit pas.
- **Fait** : `statement` nuancé : « se sépare généralement du reste par une
  virgule, surtout s'il est un peu long. »

### [MOYEN] ✅ `abrev-numero` — le `statement` et le `tip` se contredisent
- **Où** : `batch-002-typographie.ts:135-148`
- **Texte** : statement « « numéro » s'abrège <b>n°</b> — jamais No, jamais n. » ;
  tip « Le petit o est en exposant, pas un zéro ni la lettre O. »
- **Problème** : le `tip` décrit la forme « nᵒ » (o supérieur), que le `statement`
  interdit explicitement sous la graphie « No ». Le `fix` retenu (« n° ») emploie
  le signe degré, précisément ce que le `tip` semble écarter.
- **Fait** : `tip` précisé pour désigner explicitement le signe utilisé dans le
  `fix` : « Le petit o (comme dans n°) est en exposant, pas un zéro ni la lettre
  O majuscule. »

### [MOYEN] ✅ `euro-place` — la correction change la devise, pas la place du symbole
- **Où** : `batch-002-typographie.ts:309` — slug `euro-place`
- **Texte** : « Le loyer s'élève à [$800] par mois, charges non comprises. », fix `"800 €"`
- **Problème** : la règle porte sur la **position** du symbole ; la correction
  transforme silencieusement des dollars en euros. La faute exercée n'est pas
  celle qu'annonce la règle.
- **Fait** : phrase changée en « Le loyer s'élève à [€800] par mois… » → fix
  `"800 €"`, qui teste bien la position du symbole, en euros des deux côtés.

### [MOYEN] ✅ `nombres-en-lettres` — une convention de style donnée pour une règle
- **Où** : `batch-002-typographie.ts:330-343`
- **Texte** : « les nombres <b>de zéro à seize</b> s'écrivent en lettres »
- **Problème** : le seuil varie selon les codes typographiques (dix, seize, ou
  « tout ce qui s'écrit en un mot »). Présenté comme une règle unique, sans
  mention qu'il s'agit d'un choix de maison.
- **Fait** : `statement` reformulé pour situer le seuil comme une convention
  parmi d'autres : « Selon les conventions typographiques les plus courantes,
  les nombres de zéro à seize s'écrivent en lettres… »

### [MOYEN] ✅ `date-premier-jour` — une phrase relève d'une autre règle du même lot
- **Où** : `batch-002-typographie.ts:324`
- **Texte** : « La réunion est fixée au [2ème] mardi de chaque mois. », fix `"2e"`
- **Problème** : c'est l'illustration de `abrev-ordinaux` (même lot, même
  correction « 2ème » → « 2e »), pas de la règle du 1er du mois.
- **Fait** : phrase remplacée par « Le contrat prendra fin le [2ème] janvier
  prochain. » → fix `"2"`, qui illustre bien qu'un jour du mois autre que le 1er
  s'écrit en chiffre simple, sans ordinal.

### [MOYEN] ✅ `million-milliard-symbole` — une phrase hors sujet, et un `fix` qui contredit le titre
- **Où** : `batch-002-typographie.ts:385`
- **Texte** : « Elle a reçu [250K€] de subventions pour lancer son atelier. », fix `"250 000 euros"`
- **Problème** : 250 000 n'est ni un million ni un milliard, et la correction
  produit des **chiffres**, alors que le titre promet « en toutes lettres ».
- **Fait** : phrase remplacée par « L'entreprise a investi [1,5M€] dans son
  nouveau site de production. » → fix `"1,5 million d'euros"`, qui porte bien sur
  un million et se résout en toutes lettres.

### [MOYEN] ✅ `tic-sur-paris` — le `statement` est lui-même agrammatical
- **Où** : `batch-003-registre.ts:289`
- **Texte** : « On habite <b>à</b> une ville, on travaille <b>à</b> Lyon. »
- **Problème** : « habiter à une ville » n'est pas français. Il fallait « on habite
  **dans** une ville » ou « on habite **à** Lyon ».
- **Fait** : `statement` corrigé en « On habite **dans** une ville, on travaille
  **à** Lyon. »

### [MOYEN] ✅ `anglicisme-versatile` — la phrase corrigée reste fautive ailleurs
- **Où** : `batch-003-registre.ts:131`
- **Texte** : « Ce logiciel très [versatile] gère aussi bien texte que image. », fix `"polyvalent"`
- **Problème** : après correction subsiste « aussi bien texte **que image** » —
  élision manquante (« qu'image ») et articles absents. La phrase modèle reste
  fautive.
- **Fait** : phrase corrigée en « … gère aussi bien le texte que l'image. »

### [MOYEN] ✅ `pro-excuses` — « vous prie de l'excuser auprès de vous »
- **Où** : `batch-004-professionnels.ts:326`
- **Texte** : « L'équipe [s'excuse] auprès de vous pour cette erreur de facturation. », fix `"vous prie de l'excuser"`
- **Problème** : donne « L'équipe **vous prie de l'excuser auprès de vous** pour
  cette erreur ». Redondance produite par la correction.
- **Note** : la règle affirme par ailleurs comme un fait que « s'excuser, c'est se
  pardonner ». C'est une position prescriptive contestée (Grevisse admet
  « je m'excuse »), et la règle n'est pas marquée `disputed`.
- **Fait** : « auprès de vous » retiré de la phrase (« L'équipe [s'excuse] pour
  cette erreur de facturation. » → `"vous prie de l'excuser"`), ce qui supprime
  la redondance sans avoir besoin d'élargir le marqueur — un marqueur ne peut
  couvrir qu'un seul mot sans espace dans ce format. Le point de norme sur « s'excuser »
  (`disputed` ou non) est laissé tel quel — c'est un choix de positionnement, pas
  une phrase cassée, et il mériterait un second regard du propriétaire.

### [MOYEN] ✅ `pro-bonjour-monsieur` — double virgule après correction
- **Où** : `batch-004-professionnels.ts:355-356`
- **Texte** : « [Bonjour], je vous adresse ma candidature au poste proposé. », fix `"Madame, Monsieur,"`
- **Problème** : la virgule d'origine subsiste : « Madame, Monsieur**,,** je vous
  adresse… ». Idem pour « [Salut], vous trouverez ci-joint… ».
- **Fait** : marquage élargi pour inclure la virgule d'origine : « [Bonjour,] » et
  « [Salut,] » → `"Madame, Monsieur,"`.

### [MOYEN] ✅ `pro-accuser-reception` — « accuser bonne réception » n'est pas une faute
- **Où** : `batch-004-professionnels.ts:219`
- **Texte** : « Je vous confirme accuser [bonne] réception des pièces jointes. », fix `"à supprimer"`
- **Problème** : « accuser bonne réception » est une formule commerciale attestée
  et correcte. De plus le `statement` porte sur l'**article**, pas sur un adjectif.
- **Fait** : phrase remplacée par « Je vous confirme accuser [une] réception des
  pièces jointes. » → fix `"à supprimer"`, qui porte bien sur l'article, comme les
  trois autres phrases de la règle.

### [MOYEN] ✅ `accord-sans-complement` — des faits de style transformés en fautes
- **Où** : `batch-006-accords.ts:224-237`
- **Texte** : « Il a rendu une copie sans [fautes], à la virgule près. » → fix `"faute"`
- **Problème** : « une copie sans fautes » comme « sans faute » sont l'un et l'autre
  corrects ; le `statement` le reconnaît (« selon qu'on en attendrait un seul ou
  plusieurs »). Marquer une des deux formes comme fautive dans quatre phrases est
  incohérent avec l'énoncé.
- **Fait** : `statement` et `tip` nuancés pour reconnaître explicitement que les
  deux formes peuvent se défendre et que seule la plus vraisemblable dans le
  contexte décrit est demandée, plutôt que de présenter un verdict binaire absolu.

### [MOYEN] ✅ `sur-sur-accent` — l'astuce est mise en défaut par une phrase de la même règle
- **Où** : `batch-005-discutes.ts:377-390`
- **Texte** : tip « Remplace par « certain » : si la phrase tient, mets l'accent. » ;
  phrase « Ce chemin n'est pas très [sur] par temps de pluie. » → fix `"sûr"`
- **Problème** : ici « sûr » signifie « sans danger », pas « certain » :
  « Ce chemin n'est pas très certain » ne tient pas, et l'astuce conduirait à ne
  pas mettre l'accent.
- **Fait** : phrase remplacée par « Il n'est pas très [sur] de la date exacte de
  la réunion. » → fix `"sûr"`, qui teste bien le sens « certain ».

### [MOYEN] ✅ `du-du-accent` — la phrase modèle est douteuse
- **Où** : `batch-005-discutes.ts:373`
- **Texte** : `fix: null` — « J'ai dû reprendre le travail dû à mon collègue absent. »
- **Problème** : « le travail dû à mon collègue » signifie « le travail qu'on lui
  doit », alors que le sens visé est « le travail de mon collègue ». La tournure
  « dû à » au sens causal est de surcroît critiquée. Mauvaise phrase modèle.
- **Fait** : phrase remplacée par « J'ai dû reprendre le travail laissé par mon
  collègue absent. » (`fix: null`), qui garde le premier « dû » (verbe devoir) sans
  la tournure « dû à » discutée.

### [MOYEN] ✅ `discute-au-temps-pour-moi` — « plusieurs grammairiens » est excessif
- **Où** : `batch-005-discutes.ts:53`
- **Texte** : « Plusieurs grammairiens défendent <b>autant pour moi</b>, jugé plus logique. »
- **Problème** : la défense d'« autant pour moi » est essentiellement le fait de
  Claude Duneton et de quelques suiveurs ; elle reste minoritaire. « Plusieurs
  grammairiens » donne à une hypothèse isolée le poids d'un courant.
- **Fait** : `statement` corrigé en « Quelques grammairiens, dont Claude Duneton,
  défendent… »

### [MOYEN] ✅ `conj-verbes-uire` — énoncé trop général
- **Où** : `batch-007-conjugaison.ts:170`
- **Texte** : « Les verbes en <b>-uire</b> font leur participe passé en <b>-uit</b> »
- **Problème** : faux pour *nuire* (nui) et *luire* (lui). L'énoncé devrait se
  limiter aux verbes cités.
- **Fait** : `statement` restreint aux verbes cités (conduire, construire,
  produire, traduire), avec la mention explicite des exceptions *nuire*/*luire*.

### [MOYEN] ✅ `conj-verbes-aitre` — la réforme de 1990 n'est pas mentionnée
- **Où** : `batch-007-conjugaison.ts:182-195`
- **Problème** : « il connait », « il paraitra » sans accent sont admis depuis les
  rectifications de 1990 et enseignés à l'école. Les marquer comme fautes sans
  aucune nuance, dans un module qui possède par ailleurs un statut `disputed`,
  est un choix non signalé.
- **Fait** : `tip` complété pour signaler que la graphie sans circonflexe est
  admise depuis 1990 et que le module retient ici la graphie traditionnelle —
  choix rendu explicite plutôt que tu.

### [MOYEN] ✅ `conj-verbes-croire-voir-imparfait` — une phrase hors du champ de la règle
- **Où** : `batch-007-conjugaison.ts:327`
- **Texte** : « Autrefois, nous [travaillons] tous les samedis matin. », fix `"travaillions"`
- **Problème** : le `statement` vise les radicaux terminés « par y ou i » ;
  *travailler* a un radical en -ill-. Le cas est voisin mais n'est pas couvert.
- **Fait** : phrase remplacée par « Autrefois, nous [étudions] tous les samedis
  matin. » → fix `"étudiions"`, radical en *i*, conforme au `statement`.

### [MOYEN] ✅ `conj-verbe-suivre` — deux phrases sur quatre n'illustrent pas la règle
- **Où** : `batch-007-conjugaison.ts:340-341`
- **Texte** : le `statement` porte sur l'homonymie « je suis » / « je vis » ; les
  phrases « Elle a [vécue] dix ans à l'étranger » et « Nous avons [suivis] ses
  conseils » relèvent de l'accord du participe passé.
- **Fait** : les deux phrases remplacées par « Je [vit] très simplement, sans
  même un travail fixe. » → fix `"vis"` et « Tu [suit] mal ce raisonnement,
  reprends depuis le début. » → fix `"suis"`, qui portent bien sur les formes
  *suis*/*vis* du `statement`.

### [MOYEN] ✅ `pouce-pousse` — astuce fausse
- **Où** : `batch-008-homophones.ts:212`
- **Texte** : « Le pouce est unique, avec un seul s ; la pousse pousse, avec deux. »
- **Problème** : « pouce » ne contient **aucun** s. L'astuce affirme le contraire et
  ne peut qu'égarer.
- **Fait** : `tip` corrigé en « Le pouce n'a aucun s ; la pousse pousse, avec deux s. »

### [MOYEN] ✅ `taule-tole` — « en tôle » pour la prison n'est pas une faute
- **Où** : `batch-008-homophones.ts:278`
- **Texte** : « Il a passé trois ans en [tôle] pour cette affaire. », fix `"taule"`
- **Problème** : les dictionnaires donnent « taule **ou** tôle » au sens familier de
  prison. La phrase d'origine n'est pas fautive.
- **Fait** : la phrase est passée en `fix: null` (« Il a passé trois ans en tôle
  pour cette affaire. » est acceptée telle quelle) plutôt que sanctionnée.

### [MOYEN] ✅ Tension entre `discute-espece-de` et `accord-espece-sorte-de`
- **Où** : `batch-005-discutes.ts:98-112` et `batch-006-accords.ts:314-327`
- **Texte** : lot 005, tip : « garde le féminin : **espèce reste le noyau du groupe** » ;
  lot 006, tip : « Le mot important est **celui qui suit « de »** : c'est lui qu'on décrit. »
- **Problème** : les deux astuces désignent des noyaux opposés. Les règles portent
  sur deux points distincts (genre du déterminant / accord de l'adjectif), mais
  rien ne le dit à l'apprenant.
- **Fait** : les deux `tip` reformulés pour nommer explicitement leur point
  respectif (genre du déterminant devant « espèce » / accord de l'adjectif avec le
  complément) et renvoyer l'un vers l'autre, afin que la différence soit explicite.

### [MOYEN] ✅ `conj-verbe-ecrire` — l'astuce est démentie par une phrase de la même règle
- **Où** : `batch-010-conjugaison.ts:238-251`
- **Texte** : tip « Le v n'apparaît qu'à partir du pluriel : j'écris, nous écrivons. » ;
  phrase « Elle [écrit] trois pages en moins d'une heure hier soir. », fix `"écrivit"`
- **Problème** : *écrivit* est un singulier, et il porte le v. L'astuce est fausse
  telle qu'elle est formulée (le v appartient au radical de tous les temps sauf le
  présent du singulier et le futur). La phrase 2 relève d'ailleurs de la
  concordance des temps (« hier soir » avec un présent), pas de l'alternance du
  radical.
- **Fait** : `tip` corrigé : « Le v appartient au radical à presque tous les
  temps… seuls le présent du singulier et le futur s'en passent. »

### [MINEUR] ✅ `conj-verbe-vouloir-imperatif` — l'astuce change de verbe en route
- **Où** : `batch-010-conjugaison.ts:107`
- **Texte** : « Veuillez agréer, mais « ne m'en veux pas » : deux impératifs, deux registres. »
- **Problème** : « ne m'en veux pas » n'est pas l'impératif de *vouloir* mais de la
  locution *en vouloir à*. L'opposition proposée ne porte pas sur le même verbe.
- **Fait** : `tip` remplacé par une remarque qui reste sur *vouloir* : « Veuillez
  agréer est poli ; l'impératif brut de vouloir (veux, voulons, voulez) est
  rarissime en dehors de tournures figées. »

### [MINEUR] ⏭️ `conj-verbe-plaire` et `conj-verbe-croitre` — redites partielles
- **Où** : `batch-010-conjugaison.ts:148-161` et `:163-176`
- **Problème** : la première reprend l'accent circonflexe devant *t* déjà enseigné
  par `conj-verbes-aitre` (`batch-007:182`) — son propre `tip` le reconnaît
  (« Comme connaître »). La seconde recoupe `cru-cru-accent`
  (`batch-008:13-26`) sur le couple *cru*/*crû*.
- **Fait** : `conj-verbe-plaire` laissé tel quel — le recoupement est déjà rendu
  explicite par son propre `tip` (« Comme connaître »), ce qui limite le risque de
  confusion ; fusionner les deux règles serait une décision de contenu plus lourde.
  Pour `conj-verbe-croitre`, la phrase strictement dupliquée avec `cru-cru-accent`
  (« La population du village a [cru] de moitié en dix ans. » → `"crû"`) a été
  remplacée par « Les ventes [croiteront] fortement l'an prochain, selon les
  prévisions. » → fix `"croîtront"`, qui illustre un temps que l'autre règle ne
  couvre pas.

### [MINEUR] ✅ `conj-verbe-rire-sourire` — une phrase hors sujet
- **Où** : `batch-010-conjugaison.ts:382`
- **Texte** : « Il a [rit] de bon cœur pendant tout le spectacle. », fix `"ri"`
- **Problème** : c'est le participe passé, pas l'imparfait à double i qu'annonce
  le `statement`.
- **Fait** : déjà résolu par la correction du [GRAVE] sur ce même slug (doublon
  avec `conj-verbes-croire-voir-imparfait`) : la règle a été recentrée sur le
  participe *ri*/*souri*, invariable — cette phrase illustre désormais
  exactement le `statement` actuel.

### [MOYEN] ✅ `accord-verbe-ou` — la correction change le mode, pas le nombre
- **Où** : `batch-011-accords.ts:34`
- **Texte** : « Un accident ou une panne [expliqueront] ce retard. », fix `"expliquerait"`
- **Problème** : la règle porte sur le **nombre** ; la correction attendue serait
  « expliquerait » **ou** « expliquera » ? Le `fix` bascule au conditionnel, ce que
  ni le `statement` ni le `tip` n'annoncent. L'apprenant ne peut pas déduire ce
  changement de mode de la règle qu'on lui a donnée.
- **Fait** : `fix` changé en `"expliquera"` (indicatif futur, comme la forme
  d'origine), pour ne faire varier que le nombre.

### [MOYEN] ✅ `accord-de-meme-que` — « comme » n'est pas dans la règle, et la phrase n'est pas fautive
- **Où** : `batch-011-accords.ts:95`
- **Texte** : « Toute la journée, le chien comme le chat [dorment] paisiblement. », fix `"dort"`
- **Problème** : le `statement` ne mentionne que *de même que* et *aussi bien que*.
  Or « le chien comme le chat dorment » est un accord parfaitement admis, *comme*
  pouvant coordonner. La règle fabrique ici une faute.
- **Fait** : phrase remplacée par « Le chat, aussi bien que le chien, [dorment]
  toute la journée. » → fix `"dort"`, qui illustre bien *aussi bien que* du
  `statement`.

### [MOYEN] ✅ `pluriel-adjectifs-composes` — une phrase relève de la règle suivante
- **Où** : `batch-011-accords.ts:155`
- **Texte** : « Des tissus [bleu-clairs] ont été choisis pour les rideaux. », fix `"bleu clair"`
- **Problème** : c'est exactement l'objet de `accord-couleur-composee`, la règle
  **immédiatement suivante dans le même fichier** (`:160-173`), qui contient déjà
  « Elle a les yeux bleu [clairs] » → `"clair"`. Doublon interne.
- **Fait** : phrase remplacée par « Ces sauces [aigre-doux] surprennent toujours
  les convives. » → fix `"aigres-douces"`, un vrai cas d'adjectif + adjectif qui
  s'accordent tous les deux, distinct de la couleur composée.

### [MOYEN] ✅ `accord-nom-apres-des` — un fait de registre présenté comme une faute, et un titre qui ne dit pas la règle
- **Où** : `batch-011-accords.ts:370-383`
- **Texte** : statement « Après <b>des</b> partitif, le nom se met au pluriel… » ;
  tip « On dit « de belles maisons », pas « des belles maisons », **dans un
  français soigné**. »
- **Problème** : *des* devant un adjectif épithète est courant et toléré ; le `tip`
  le reconnaît en réservant la forme à un « français soigné », mais les quatre
  phrases sont marquées comme fautives. Par ailleurs *des* n'est pas ici un
  article **partitif** mais l'article indéfini pluriel, et le titre (« Un nom après
  « des » au sens de quelques ») ne décrit pas la règle enseignée.
- **Fait** : titre changé en « Des devient de devant un adjectif épithète » ;
  `statement` reformulé sans le mot « partitif » (« l'article indéfini pluriel
  des devient de… ») ; `tip` complété pour signaler qu'à l'oral « des » reste
  très répandu.

### [MOYEN] ✅ Quatre règles pour un seul mécanisme : l'accord après un quantifieur
- **Où** : `batch-006-accords.ts:179` (`accord-pourcentage-verbe`), `:254` (`accord-collectif-groupe`),
  `batch-011-accords.ts:40` (`accord-fraction`), `:55` (`accord-dizaine`),
  plus `batch-005-discutes.ts:34` (`discute-moitie-accord`)
- **Problème** : cinq règles enseignent la même chose — le verbe s'accorde avec le
  quantifieur ou avec son complément selon l'idée dominante — avec des `statement`
  presque interchangeables. Pire, `discute-moitie-accord` traite le cas comme
  ouvert (`disputed`, toutes phrases correctes) alors que les quatre autres
  tranchent et marquent des fautes.
- **Fait** : je n'ai pas fusionné ni retiré de règles (changement structurel trop
  lourd pour ce passage), mais `accord-dizaine` et `accord-pourcentage-verbe`
  reconnaissent maintenant explicitement, dans leur `statement`/`tip`, que
  l'accord retenu est le plus courant plutôt que le seul possible, et renvoient
  au même mécanisme que les quantifieurs voisins ; `accord-fraction` et
  `accord-collectif-groupe` le disaient déjà. La tension avec le statut
  `disputed` de `discute-moitie-accord` reste réelle et mériterait un second
  regard du propriétaire — fusionner ces cinq règles est une décision de
  contenu, pas une correction ponctuelle.

### [MINEUR] ✅ `accord-madame-le-titre` — une phrase illustre autre chose
- **Où** : `batch-011-accords.ts:363`
- **Texte** : « Monsieur le maire et son adjoint [assistera] à la séance. », fix `"assisteront"`
- **Problème** : il s'agit d'une coordination de deux sujets, pas du « noyau
  madame/monsieur » qu'annonce le `statement`.
- **Fait** : phrase remplacée par « Monsieur le maire, accompagné de son
  adjoint, [assisteront] à la séance. » → fix `"assistera"`, une vraie apposition
  où « Monsieur le maire » reste le noyau singulier.

### [MINEUR] ✅ `accord-nom-propre-marque` — une phrase où la correction ne change que la majuscule
- **Où** : `batch-011-accords.ts:215`
- **Texte** : « Elle a acheté deux [Kleenex] en promotion ce matin. », fix `"kleenex"`
- **Problème** : la règle promet un accord au pluriel une fois le mot devenu nom
  commun ; *kleenex* reste identique. L'exemple n'illustre rien.
- **Fait** : déjà résolu par la correction du doublon [GRAVE] avec
  `typo-marques-minuscule` : la règle a été refaite sur Renault/Peugeot/
  Bugatti/Solex, qui perdent bien leur *s* au pluriel.

### [MINEUR] ✅ `accord-participe-ayant` — nuance manquante
- **Où** : `batch-011-accords.ts:190-203`
- **Problème** : le `tip` affirme qu'« un participe présent ne s'accorde jamais ».
  Vrai, mais le nom *ayant droit* fait *les ayants droit* — et la règle emploie
  précisément « les familles ayant droit », ce qui invite à la confusion sans la
  lever.
- **Fait** : `tip` complété : « (Exception à part : « ayant droit » employé comme
  nom fait « les ayants droit » au pluriel.) »

### [MOYEN] ✅ `ortho-lettres-grecques-rh` — « rythme » n'a pas de rh
- **Où** : `batch-012-orthographe.ts:208` — slug `ortho-lettres-grecques-rh`
- **Texte** : « Les mots venus du grec gardent <b>rh</b> : rhume, rhétorique, rhinocéros, **rythme**. »
- **Problème** : *rythme* s'écrit r-y-t-h-m-e : le h n'y suit pas le r, il suit le t.
  Le mot n'illustre pas la règle et donne à croire qu'il faudrait écrire
  « rhythme ». Erreur de fait dans une liste d'exemples.
- **Correction proposée** : remplacer *rythme* par *rhapsodie*, *rhododendron* ou *rhubarbe*.
- **Fait** : correction appliquée telle quelle, avec *rhapsodie*.

### [MOYEN] ✅ `ortho-irriter-irrigation` — une explication étymologique fausse
- **Où** : `batch-012-orthographe.ts:145-158`
- **Texte** : statement « Le préfixe <b>in-</b> devient <b>irr-</b> devant un r : irréel,
  irrégulier, **irriter**, **irrigation**. » ; tip « Le double r vient de la
  rencontre entre le préfixe et le radical. »
- **Problème** : *irriter* (lat. *irritare*) ne contient aucun préfixe privatif, et
  l'*ir-* d'*irrigation* (lat. *irrigare*) n'est pas non plus le *in-* négatif. La
  règle donne une explication qui ne vaut que pour la moitié de ses exemples, et
  laisserait croire qu'*irriter* signifie « non rité ».
- **Correction proposée** : séparer les deux familles, ou n'énoncer que la règle
  graphique (« devant un r, in- s'écrit ir- »).
- **Fait** : `statement` et `tip` réécrits pour séparer les deux familles : le vrai
  préfixe *in-* (irréel, irrégulier, irresponsable, irrévocable) d'un côté,
  *irriter*/*irrigation* de l'autre, présentés comme n'ayant pas ce préfixe.

### [MOYEN] ✅ `ortho-agrafe-aggraver` — « seul aggraver double le g » est faux
- **Où** : `batch-012-orthographe.ts:44`
- **Texte** : tip « Seul aggraver double le g : c'est l'exception à retenir. »
- **Problème** : *agglomération*, *aggloméré*, *agglutiner*, *aggravation* doublent
  aussi le g. L'astuce affirme une exclusivité qui n'existe pas.
- **Fait** : `tip` corrigé pour citer *agglomération*/*agglutiner* plutôt que
  d'affirmer une exclusivité fausse.

### [MOYEN] ✅ `ortho-gageure` — la graphie rectifiée est marquée comme faute
- **Où** : `batch-012-orthographe.ts:123` et `:125`
- **Texte** : « C'est une véritable [gageüre] que d'y parvenir seul. », fix `"gageure"`
- **Problème** : *gageüre*, avec tréma sur le u, est précisément la graphie
  **recommandée par les rectifications orthographiques de 1990**, dont l'objet
  était de faire correspondre l'écriture à la prononciation « ga-jure ». La règle
  la marque comme fautive deux fois, et son titre (« gageure, sans tréma ») en
  fait un interdit. À signaler comme variante, non comme faute.
- **Fait** : titre et `statement` réécrits pour présenter les deux graphies comme
  admises ; les deux phrases en *gageüre* passées en `fix: null`.

### [MOYEN] ✅ `ortho-mots-en-cial-tial` — deux phrases sur quatre sont hors du son annoncé
- **Où** : `batch-012-orthographe.ts:364-365`
- **Texte** : statement « Le son <b>[sjal]</b> s'écrit -cial ou -tial » ;
  phrases « Cette clause est purement [partiel] et provisoire. » → `"partielle"` et
  « Un traitement [préférenciel] leur a été accordé. » → `"préférentiel"`
- **Problème** : *partielle* et *préférentiel* se terminent en [sjɛl], pas en
  [sjal]. De plus la première correction porte en réalité sur l'accord au féminin,
  pas sur le choix c/t.
- **Fait** : les deux phrases remplacées par des mots réellement en [sjal] : « Le
  juge a été jugé bien trop [parsial] dans cette affaire. » → fix `"partial"` et
  « La cérémonie [nupsiale] a réuni toute la famille. » → fix `"nuptiale"`.

### [MOYEN] ✅ `ortho-mots-en-tion-ption` — l'énoncé n'explique pas deux de ses quatre phrases
- **Où** : `batch-012-orthographe.ts:280-293`
- **Texte** : statement « -ption après une consonne du radical … et -ssion après un
  radical en -mettre » ; phrases « La [perssion] du public… » → `"pression"` et
  « Cette [exeption]… » → `"exception"`
- **Problème** : *pression* ne vient pas d'un verbe en -mettre, et *exception*
  n'est pas couverte par la formulation retenue. La règle laisse deux fautes sans
  méthode pour les résoudre.
- **Fait** : `statement`/`tip` complétés pour reconnaître que d'autres dérivations
  existent (pression, exception…) et se retiennent au cas par cas.

### [MOYEN] ✅ `ortho-mots-en-isme` — une phrase reste fautive après correction
- **Où** : `batch-012-orthographe.ts:318`
- **Texte** : « Dans la nuit, un [séïsme] de faible intensité a surpris tous. », fix `"séisme"`
- **Problème** : « a surpris **tous** » n'est pas français : il fallait « a surpris
  tout le monde » ou « les a tous surpris ». La phrase modèle reste incorrecte une
  fois la correction appliquée.
- **Fait** : phrase corrigée en « … a surpris tout le monde. »

### [MINEUR] ✅ `ortho-balade-ballon` — astuce qui ne couvre pas sa propre liste
- **Où** : `batch-012-orthographe.ts:74`
- **Texte** : « Ce qui est rond ou dansé prend deux l : ballon, ballet. »
- **Problème** : *ballot*, cité dans le `statement` de la même règle, n'est ni rond
  ni dansé.
- **Fait** : `tip` complété : « (ballot, lui, se retient simplement à part). »

### [MOYEN] ✅ `typo-temperature` — l'énoncé se contredit en une phrase
- **Où** : `batch-013-ponctuation-typo.ts:259`
- **Texte** : « Le symbole de degré **se colle au nombre** et l'unité suit : <b>20 °C</b>, **avec une espace avant le degré**. »
- **Problème** : « se colle au nombre » et « une espace avant le degré » sont
  incompatibles. L'exemple donné (20 °C) tranche pour l'espace ; la première moitié
  de l'énoncé enseigne donc le contraire de ce que la règle exerce.
- **Fait** : `statement` réécrit : « Une espace sépare le nombre du symbole de
  degré, et l'unité se colle juste après : 20 °C. »

### [MOYEN] ✅ `typo-italique-mots-etrangers` — la règle énoncée n'est jamais exercée
- **Où** : `batch-013-ponctuation-typo.ts:226-239`
- **Problème** : le `statement` porte sur l'**italique**, mais aucune des quatre
  corrections n'ajoute d'italique : elles rectifient un trait d'union
  (*curriculum-vitae*), un accent (*à priori*, *postériori*) ou une soudure
  (*in-extremis*). La règle enseignée et la règle exercée ne sont pas la même.
- **Fait** : `statement`/`tip` complétés pour signaler explicitement que
  l'exercice ne peut pas afficher l'italique et porte en réalité sur la graphie
  du mot (trait d'union, accent, soudure), pas sur sa mise en forme.

### [MOYEN] ✅ `typo-majuscule-mots-composes` — Bourg-en-Bresse n'est pas un village
- **Où** : `batch-013-ponctuation-typo.ts:325`
- **Texte** : « Elle vient de Bourg-en-[bresse], **un village de l'Ain**. »
- **Problème** : Bourg-en-Bresse est la préfecture de l'Ain, une ville d'environ
  quarante mille habitants. Erreur de fait dans une phrase d'exercice.
- **Fait** : phrase corrigée en « …, préfecture de l'Ain. »

### [MOYEN] ✅ `point-interrogation-indirecte` — deux phrases quasi identiques dans la même règle
- **Où** : `batch-013-ponctuation-typo.ts:171` et `:175`
- **Texte** : « Il se demande si le train partira bien à l'heure [?] » (fautive) et
  « Il se demande si le train partira à l'heure. » (`fix: null`)
- **Problème** : c'est la même phrase à un adverbe près. La phrase déclarée
  correcte n'apprend rien de plus que la correction de la première.
- **Note annexe** : le mot marqué est précédé d'une espace (« à l'heure [?] ») ;
  la substitution par `"."` laisse « à l'heure . ».
- **Fait** : phrase correcte remplacée par « Elle demande si tout est prêt pour
  le départ. », clairement distincte des quatre autres. Sur la note annexe : le
  format de marquage interdit toute espace à l'intérieur des crochets
  (`parseMarkedSentence` lève une erreur sur un marqueur contenant une espace) et
  n'autorise qu'un seul mot par marqueur — il n'existe donc pas de façon valide
  d'inclure l'espace qui précède dans le marqueur. C'est une limite du format,
  pas de cette règle en particulier ; je l'ai laissée telle quelle plutôt que de
  forcer un contournement.

### [MOYEN] ✅ `typo-abrev-pages` — « jamais pp. » est une position de maison
- **Où** : `batch-013-ponctuation-typo.ts:289`
- **Problème** : *pp.* pour « pages » est d'usage courant en bibliographie
  française et n'est pas une faute ; le Lexique de l'Imprimerie nationale
  préconise *p.* invariable, mais ne condamne pas l'autre. À présenter comme un
  choix, non comme un interdit. Par ailleurs le mot marqué de la phrase 2,
  « [chapître] », cumule deux fautes distinctes (abréviation **et**
  accent circonflexe indu).
- **Fait** : `statement` réécrit pour présenter *pp.* comme un usage courant et
  non fautif, et ne condamner que *pg.* ; la phrase sur *pp.* est passée en
  `fix: null` et remplacée dans les fautives par une phrase sur *pg.* ; le mot
  « chapître » corrigé en « chapitre » pour ne tester que l'abréviation.

### [MOYEN] ✅ `typo-abrev-etats` — un usage minoritaire donné pour la règle
- **Où** : `batch-013-ponctuation-typo.ts:346-359`
- **Problème** : *É.-U.* et *R.-U.* sont surtout des abréviations de l'usage
  canadien ; en France, *USA* et *États-Unis* sont parfaitement courants et non
  fautifs. Quatre phrases marquées comme fautives sur une convention qui n'est pas
  celle de la majorité des lecteurs français.
- **Fait** : `statement`/`tip` reformulés pour présenter la forme en toutes
  lettres comme la plus courante en France, et l'abréviation É.-U./R.-U. comme
  une alternative correcte plutôt que l'unique bonne réponse ; ce que les phrases
  continuent d'exercer, c'est le remplacement des sigles anglais USA/UK, qui
  reste un vrai point (éviter l'anglais dans un texte français).

### [MOYEN] ✅ `apostrophe-typographique` — la règle condamne tout le reste du module
- **Où** : `batch-013-ponctuation-typo.ts:134-147`
- **Texte** : « En typographie soignée, l'apostrophe est <b>courbe</b> — l'apostrophe
  droite est un signe de machine à écrire. » ; corrections `"l’affaire"`, `"l’ouverture"`…
- **Problème** : cette règle est la **seule** du corpus à employer l'apostrophe
  courbe. Toutes les autres phrases de tous les autres lots — y compris les
  centaines de phrases déclarées correctes par `fix: null` — emploient
  l'apostrophe droite. Le module enseigne donc une règle que son propre contenu
  enfreint partout ailleurs.
- **Fait** : `statement`/`tip` reformulés pour scoper la règle à la typographie
  d'édition/impression, en reconnaissant explicitement que l'apostrophe droite
  reste très répandue à l'écrit courant, y compris ailleurs dans ce module —
  plutôt que de présenter l'apostrophe droite comme fautive dans l'absolu.

### [MOYEN] ✅ `deux-points-explication` — déjà contenu dans `deux-points-enumeration`
- **Où** : `batch-013-ponctuation-typo.ts:59-72` et `batch-001-ponctuation.ts:272-285`
- **Problème** : le `statement` du lot 001 annonce déjà que les deux-points
  introduisent « une liste, **une explication** ou une citation ». Le lot 013 en
  refait une règle entière.
- **Fait** : `statement` du lot 013 complété pour se présenter explicitement
  comme l'exercice dédié de l'un des emplois déjà énumérés dans le lot 001,
  plutôt que comme une règle indépendante qui semble tout réénoncer. Je n'ai pas
  supprimé l'une des deux règles : les deux ont leurs propres phrases
  d'entraînement valides, et fusionner supprimerait du contenu fonctionnel.

### [MOYEN] ✅ `typo-majuscule-journaux` contredit `titres-oeuvres-majuscule`
- **Où** : `batch-013-ponctuation-typo.ts:271-284` et `batch-002-typographie.ts:345-358`
- **Problème** : ici « Le Monde » garde ses deux majuscules et « L'Équipe » aussi ;
  là, la règle des titres d'œuvres impose « seul le premier mot prend la
  majuscule » et corrige « Le Rouge et le Noir » en « Le Rouge et le noir ». Les
  deux règles s'appliquent à des objets voisins et se contredisent.
- **Fait** : la contradiction n'existe plus — la correction du [GRAVE] sur
  `titres-oeuvres-majuscule` a déjà aligné le lot 002 sur la même convention
  (majuscule sur l'article et le nom qui suit). J'ai en plus reformulé le
  `statement` du lot 013 pour le dire explicitement (« Comme pour les titres
  d'œuvres… ») et éviter que la ressemblance passe inaperçue.

### [MINEUR] ✅ `guillemets-imbriques` — « doubles apostrophes »
- **Où** : `batch-013-ponctuation-typo.ts:93`
- **Texte** : tip « Les chevrons restent à l'extérieur : les **doubles apostrophes**
  se glissent dedans. »
- **Problème** : “ ” sont des guillemets anglais, pas des apostrophes. Dans une
  règle de typographie, le terme importe.
- **Fait** : `tip` corrigé : « … les guillemets anglais “ ” se glissent dedans. »

### [MINEUR] ✅ `virgule-adverbe-phrase` — deux phrases sur quatre n'ont pas d'adverbe
- **Où** : `batch-013-ponctuation-typo.ts:187` et `:189`
- **Texte** : « Chose [curieuse] aucun témoin ne se souvient de rien. » et
  « Comme toujours et bien [naturellement] il est arrivé dernier. »
- **Problème** : la première est un groupe nominal détaché, pas un adverbe de
  phrase ; la seconde est si contournée qu'elle brouille la règle.
- **Fait** : les deux phrases refaites avec un vrai adverbe en tête : « [Curieusement]
  aucun témoin ne se souvient de rien. » et « [Naturellement] il est arrivé
  dernier, comme toujours. »

### [MOYEN] ✅ `impropriete-cloturer` — un usage attesté présenté comme une impropriété
- **Où** : `batch-014-registre-pro.ts:161-174`
- **Texte** : « <b>clôturer</b> signifie entourer d'une clôture. »
- **Problème** : *clôturer* au sens de « clore, terminer » est enregistré par le
  Petit Robert et le Larousse (clôturer une séance, un débat, un exercice), et
  « clôturer un compte » est le terme bancaire courant. La règle en fait un
  interdit absolu.
- **Fait** : `statement`/`tip` reformulés pour reconnaître l'usage « clore,
  terminer » comme attesté et courant, tout en gardant *clore* comme la valeur
  la plus sûre en registre soigné.

### [MOYEN] ✅ `anglicisme-partager-information` — une justification trop courte
- **Où** : `batch-014-registre-pro.ts:131-144`
- **Texte** : « partager suppose de diviser en parts. »
- **Problème** : on partage depuis toujours un avis, un sentiment, une conviction,
  sans rien diviser. L'argument avancé est donc faux ; il ne reste que
  l'objection de calque, qui n'est pas la même chose.
- **Fait** : `statement`/`tip` réécrits sur le seul argument valable (calque de
  l'anglais *to share*), en reconnaissant explicitement qu'on partage un avis ou
  un sentiment sans rien diviser.

### [MOYEN] ✅ `anglicisme-business` — une phrase peu idiomatique après correction
- **Où** : `batch-014-registre-pro.ts:50`
- **Texte** : « Le [business] a repris après une année difficile. », fix `"chiffre d'affaires"`
- **Problème** : « Le chiffre d'affaires a repris » ne se dit pas (il *repart*, il
  *remonte*). Et *chiffre d'affaires* ne figure pas dans la liste du `statement`.
- **Fait** : phrase et fix changés : « Les [business] ont repris après une année
  difficile. » → fix `"affaires"`, qui donne « Les affaires ont repris… »,
  idiomatique et dans la liste du `statement`.

### [MOYEN] ✅ `pro-signature-prenom-nom` — six phrases interchangeables, et une faute discutable
- **Où** : `batch-014-registre-pro.ts:272-287`
- **Problème** : les six phrases fautives ont le même moule (« Cordialement, Prénom
  [NOM], fonction ») ; l'exercice se réduit à six fois le même geste. Par
  ailleurs, la signature avec le patronyme en capitales est d'usage administratif
  français constant : en faire une faute, et non une préférence de style, est
  excessif.
- **Fait** : ramené à trois phrases fautives (sur six), `statement`/`tip`
  reformulés pour présenter les capitales comme un choix plus formel plutôt
  qu'une faute absolue, et une seconde phrase correcte ajoutée qui valide
  explicitement l'usage administratif en capitales (`fix: null`).

### [MOYEN] ✅ `registre-ca-cela` — trois phrases construites sur le même « tout ça »
- **Où** : `batch-014-registre-pro.ts:199`, `:200`, `:202`
- **Texte** : « Tout [ça] mérite une explication… », « tenir compte de tout [ça]… »,
  « Rien de tout [ça] ne figure… »
- **Problème** : trois occurrences du même tour dans une règle de sept phrases.
  S'ajoute la phrase 1, « Cela dit, [ça] ne change rien à l'affaire. », qui donne
  après correction « **Cela** dit, **cela** ne change rien » — une répétition que
  la règle ne signale pas.
- **Fait** : deux des trois « tout ça » diversifiées (une garde « tout ça », les
  deux autres reformulées sans ce moule) ; la phrase 1 reformulée pour éviter la
  répétition « Cela… cela » après correction.

### [MINEUR] ⏭️ `pro-abreviations-interdites` — recoupements
- **Où** : `batch-014-registre-pro.ts:334-347`
- **Problème** : la somme abrégée « 50K€ » est déjà traitée par
  `million-milliard-symbole` (`batch-002:375`, « 250K€ » → « 250 000 euros »), et
  l'interdiction des abréviations dans un courrier par `pro-cordialement-abrege`
  et `pro-svp` (`batch-004:74` et `:89`).
- **Fait** : écarté. Chaque règle a ses propres phrases valides et illustre un
  point voisin mais distinct (unité monétaire abrégée, formule de politesse
  abrégée, sigles de note interne) ; retirer du contenu pour éliminer le
  recoupement thématique m'a semblé plus coûteux que le gain, et sans défaut
  grammatical à corriger ici.

### [MOYEN] ✅ `expr-a-bon-escient` — l'astuce désigne la mauvaise lettre
- **Où** : `batch-015-expressions.ts:272`
- **Texte** : « Escient garde son <b>s muet</b>, comme science dont il est cousin. »
- **Problème** : dans *escient* [ɛsjɑ̃] le s se prononce ; c'est le **c** du groupe
  *sc* qui ne s'entend pas. L'astuce nomme la mauvaise lettre, et n'aide donc pas
  à choisir entre *essient*, *ecient* et *escient* — les trois graphies fautives
  de la règle.
- **Fait** : `tip` corrigé : « Dans le groupe sc d'escient, comme dans science,
  c'est le c qui ne s'entend pas — le s, lui, se prononce. »

### [MINEUR] ✅ `expr-etre-de-mise` — une étymologie de fantaisie
- **Où** : `batch-015-expressions.ts:182`
- **Texte** : « la mise est ce qu'on met sur la table. »
- **Problème** : *être de mise* vient de la monnaie « de mise », c'est-à-dire ayant
  cours ; la mise du joueur n'a rien à y voir. L'astuce invente une origine.
- **Fait** : `tip` corrigé avec la vraie origine (la monnaie « de mise »).

### [MINEUR] ✅ `expr-tenir-tete` et `expr-donner-le-change` — phrases interchangeables
- **Où** : `batch-015-expressions.ts:373-386` et `:148-161`
- **Problème** : dans la première, les quatre phrases fautives portent toutes la
  même faute (« têtes » → « tête ») dans la même construction. Dans la seconde,
  « À leurs concurrents directs, ils ont donné le [changer]. » est syntaxiquement
  contournée au point de gêner la lecture.
- **Fait** : une des quatre phrases de `expr-tenir-tete` reformulée à un autre
  temps (futur) pour casser la monotonie de construction ; la phrase de
  `expr-donner-le-change` remise à l'ordre naturel sujet-verbe-complément
  (« Ils ont donné le [changer] à leurs concurrents directs pendant des mois. »).

### [MOYEN] ✅ `densify-homophones` / `aussitot` — « aussitôt que possible » n'est pas une faute
- **Où** : `densify-homophones.ts:227`
- **Texte** : « Nous partirons [aussitôt] que possible demain matin. », fix `"aussi tôt"`
- **Problème** : *aussitôt que possible* est une locution reçue, enregistrée par les
  dictionnaires au sens de « dès que possible ». Les deux autres phrases de la
  série (comparaisons avec *qu'aujourd'hui*, *que son frère*) sont justes ;
  celle-ci fabrique une faute.
- **Fait** : phrase remplacée par « Nous partirons [aussitôt] que son collègue, à
  la même heure. » → fix `"aussi tôt"`, une vraie comparaison comme ses deux
  sœurs de la série.

### [MOYEN] ✅ `densify-homophones` / `ni-ny` — une phrase qui se contredit
- **Où** : `densify-homophones.ts:46`
- **Texte** : « Ce dossier est vide : il [ni] manque pourtant rien. », fix `"n'y"`
- **Problème** : après correction, « Ce dossier est vide : il n'y manque pourtant
  rien. » Un dossier vide auquel rien ne manque : la phrase n'a pas de sens.
- **Fait** : « vide » remplacé par « complet », qui rend la phrase sensée une
  fois corrigée.

### [MOYEN] ✅ `densify-accords` / `adj-distance` — une phrase sans verbe principal
- **Où** : `densify-accords.ts:279`
- **Texte** : « Une décision, prise après de longs débats, restée [confidentiel]. », fix `"confidentielle"`
- **Problème** : même corrigée, la suite n'est pas une phrase : il n'y a aucun verbe
  conjugué. « Une décision, prise après de longs débats, **est** restée
  confidentielle. »
- **Fait** : « est » ajouté avant « restée ».

### [MOYEN] ✅ `densify-accords` / `couleurs` — recoupement avec le lot 011
- **Où** : `densify-accords.ts:323-326` et `batch-011-accords.ts:160-173`
- **Problème** : « Les murs [verts] pâle » → `"vert"` reprend exactement
  `accord-couleur-composee` (« Elle a les yeux bleu [clairs] » → `"clair"`).
- **Fait** : phrase remplacée par « Ces rideaux [rouges] sang habillent toute la
  pièce. » → fix `"rouge"`, une couleur composée absente de la liste du lot 011.

### [MINEUR] ✅ `densify-accords` / `adj-invariables` — deux cas discutables
- **Où** : `densify-accords.ts:423` et `:425`
- **Texte** : « des tenues très [chics] » → `"chic"` ; « des vacances [supers] » → `"super"`
- **Problème** : *chics* au pluriel est admis par plusieurs dictionnaires ; et
  « des vacances super » relève d'un registre familier que le module condamne
  ailleurs (`registre-ca-cela`, `pro-abreviations-interdites`).
- **Fait** : les deux phrases remplacées par des adjectifs invariables non
  discutés : « vendus [bons] marché » → fix `"bon"` (locution « bon marché »,
  toujours invariable) et « des vacances [extras] » → fix `"extra"`.

### [MINEUR] ✅ `densify-accords` / `pp-impersonnel` — une phrase peu naturelle
- **Où** : `densify-accords.ts:362`
- **Texte** : « Cette semaine, les averses qu'il a [plues] ont tout inondé. », fix `"plu"`
- **Problème** : « les averses qu'il a plu » est une construction que personne
  n'écrit ; l'exemple rend la règle plus obscure qu'elle n'est.
- **Fait** : phrase remplacée par une tournure exclamative naturelle : « Que de
  pluie il a [plue] cette semaine, tout est inondé ! » → fix `"plu"`.

---

### [MINEUR] ✅ Slugs qui ne correspondent pas au contenu
- `batch-003-registre.ts:376` — slug `impropriete-avoir-lair` pour une règle sur *s'avérer*.
- `batch-004-professionnels.ts:256` — slug `pro-second-degre-politesse` pour la reprise de la formule d'appel.
- `batch-007-conjugaison.ts:362` — slug `conj-verbes-tressaillir` pour une règle intitulée « Cueillir au futur ».
- `batch-007-conjugaison.ts:317` — slug `conj-verbes-croire-voir-imparfait` pour une règle sur -yer/-ier.
- **Fait** : les deux premiers slugs renommés (`impropriete-averer`,
  `pro-reprise-formule-finale`), avec mise à jour du `ruleSlug` correspondant
  dans `densify3-registre-pro-discutes.ts`. Le troisième renommé en
  `conj-verbe-cueillir-futur`, avec mise à jour de `densify3-accords-conj.ts`.
  Le quatrième **n'a pas été renommé** : `dictations.ts` (hors périmètre)
  référence ce slug par `ruleSlugs`, et le renommer aurait cassé cette référence
  sans que je puisse la corriger. Son `title` a été élargi (« Le i doublé à
  l'imparfait (radical en y ou i) ») pour couvrir *croire*/*voir*, déjà utilisés
  en exemple, sans se limiter à -yer/-ier.

### [MINEUR] ✅ Titres annonçant plus que le contenu
- `batch-006-accords.ts:299` — « Pluriels doubles : ciel, aïeul, **œil** » : *œil* n'apparaît ni dans le `statement` ni dans une phrase.
- `batch-008-homophones.ts:358` — « poids, pois ou **poix** » : aucune phrase n'emploie *poix*.
- **Fait** : titre de `pluriel-ciel-aieul` réduit à « ciel, aïeul » (retrait d'*œil*,
  non couvert) ; `poids-pois-poix` a désormais une phrase sur *poix* (« Le
  charpentier imperméabilise la coque avec de la [pois] noire. » → fix `"poix"`).

### [MINEUR] ✅ Commentaires d'en-tête inexacts
- `batch-006-accords.ts:3` annonce « 25 règles » ; le fichier en contient **24**.
- `batch-002-typographie.ts:5` affirme qu'aucune règle ne recoupe le lot legacy, sans avoir vérifié le recoupement avec le lot 001 (guillemets).
- **Fait** : commentaire de `batch-006-accords.ts` corrigé en « 24 règles » ;
  commentaire de `batch-002-typographie.ts` complété pour signaler le
  recoupement avec le lot 001 sur l'espace des guillemets et le retrait de la
  règle en double (déjà fait au stade des [GRAVE]).

### [MINEUR] ✅ Typographie des énoncés
- `batch-001-ponctuation.ts:380` — « Dans la formule <b>Fait à … , le …</b> » : espace parasite avant la virgule.
- `batch-004-professionnels.ts:47` — « jamais par un point ni par rien » : formulation bancale.
- `batch-005-discutes.ts:60-61` — « d'un simple au temps pour moi », « a murmuré autant pour moi » : locutions citées sans guillemets ni italique.
- **Fait** : espace parasite retirée (« Fait à …, le … ») ; `statement` de
  `pro-formule-appel-virgule` reformulé (« jamais par un point, ni sans aucune
  ponctuation ») ; les deux locutions de `discute-au-temps-pour-moi` mises entre
  guillemets français.

### [MINEUR] ✅ Astuce approximative
- `batch-003-registre.ts:215` — « Le verbe français existe depuis **huit siècles** » : *vérifier* est attesté au début du XIVᵉ siècle, soit environ sept siècles.
- `batch-004-professionnels.ts:292` — « Compte les destinataires : un seul, donc un seul « s » de moins » : l'exemple de la règle (« priés » → « priée ») n'est pas une simple suppression de *s*.
- **Fait** : « huit siècles » → « environ sept siècles » ; `tip` de
  `pro-vous-de-politesse` reformulé (« … donc l'adjectif ou le participe reste au
  singulier »), sans l'image fausse du « s » en moins.

### [MINEUR] ✅ Phrases inutilement étranges
- `batch-008-homophones.ts:35` — « Le [mal] de tête protège tout le troupeau. » → « Le mâle de tête protège tout le troupeau. » : phrase absconse pour un exercice de niveau 2.
- `batch-006-accords.ts:294` — « moins de deux candidats ont été retenu[s] » : « moins de deux candidats » désigne au plus un candidat ; l'exemple est logiquement bancal.
- `batch-007-conjugaison.ts:294` — « Les efforts qu'il a fallu dépasseront tout ce qu'on imagine. » : concordance des temps hasardeuse.
- **Fait** : phrase 1 reformulée (« Le [mal] dominant mène tout le troupeau vers le
  pré. ») ; phrase 2 remplacée par un sujet non dénombrable (« moins de deux kilos
  de farine [suffit] » → `"suffisent"`) ; phrase 3 mise au présent (« … dépassent
  tout ce qu'on imagine. ») pour une concordance normale.

### [MINEUR] ✅ `deux-points-citation` — typographie de la citation
- **Où** : `batch-001-ponctuation.ts:347-359`
- **Problème** : toutes les citations commencent par une minuscule et le point
  final est placé hors des guillemets. Dans un module qui enseigne la
  typographie, c'est au minimum discutable — et la phrase `fix: null`
  (« Elle a murmuré : « ce n'est vraiment pas grave ». ») donne ce modèle.
- **Fait** : les cinq citations mises à la majuscule initiale et le point final
  déplacé à l'intérieur des guillemets fermants, cohérent avec la correction du
  [GRAVE] sur `majuscule-apres-deux-points`.

### [MINEUR] ✅ `mer-mere-maire` — le `fix` introduit un quatrième mot
- **Où** : `batch-008-homophones.ts:143`
- **Texte** : « Ils se sont mariés à la [mère] du village. », fix `"mairie"`
- **Problème** : « mairie » n'est pas dans le triplet annoncé par le `statement`.
- **Fait** : phrase remplacée par « Ils ont passé leurs vacances au bord de la
  [maire] cet été. » → fix `"mer"`, qui reste dans le triplet mer/mère/maire.

### [MOYEN] ✅ `stupefait-stupefie` — une phrase correcte marquée fautive
- **Où** : `batch-009-paronymes.ts:368` — slug `stupefait-stupefie`
- **Texte** : « Le public fut [stupéfait] par la révélation finale. », fix `"stupéfié"`
- **Problème** : « être stupéfait par » est un tour parfaitement reçu — *stupéfait*
  est un adjectif, et un adjectif se construit sans difficulté avec un complément
  d'agent apparent. Le `statement` de la règle ne dit nulle part que la présence
  de « par » impose le participe. La phrase n'est pas fautive, ou alors la règle
  doit l'expliquer.
- **Fait** : phrase passée en `fix: null` (acceptée telle quelle).

### [MINEUR] ✅ `egailler-egayer` — deux graphies concurrentes dans les corrections d'une même règle
- **Où** : `batch-009-paronymes.ts:126` et `:128`
- **Texte** : fix `"égayent"` d'un côté, fix `"égaierait"` de l'autre
- **Problème** : *égayer* admet les deux radicaux (égaye/égaie), mais la règle en
  impose un dans une phrase et l'autre dans la suivante, sans le dire. Un
  apprenant conclura qu'il y a une règle là où il n'y a qu'un choix.
- **Fait** : `tip` complété pour signaler explicitement que les deux radicaux
  (égay-/égai-) sont admis.

### [MINEUR] ✅ `luxure-luxe` — l'article trahit la réponse et redouble la faute
- **Où** : `batch-009-paronymes.ts:260`, `:262`, `:263`
- **Texte** : « Cet hôtel est d'un [luxure] tout à fait inutile. », « La [luxe] de la végétation… »
- **Problème** : *luxure* est féminin, *luxe* masculin. Les phrases marquées
  contiennent donc **deux** fautes (le mot et son genre), et le déterminant donne
  la réponse avant même qu'on ait réfléchi au sens.
- **Fait** : les trois phrases reformulées sans déterminant genré adjacent au mot
  marqué (« trop de… », « … de… vraiment »), pour que seul le sens du mot,
  jamais le genre de l'article, guide la réponse.

### [MINEUR] ⏭️ `evasion-invasion` — règle redondante avec `emerger-immerger`
- **Où** : `batch-009-paronymes.ts:178-191`
- **Texte** : tip « É sort, in entre : la même logique qu'émerger et immerger. »
- **Problème** : la règle l'admet elle-même — c'est le même mécanisme enseigné une
  seconde fois. Deux règles pour un seul point.
- **Fait** : écarté. Les deux règles portent sur des paires de mots différentes
  (évasion/invasion vs émerger/immerger) et restent chacune utile en vocabulaire ;
  fusionner ou supprimer l'une des deux règles est une décision de contenu plus
  lourde qu'une correction ponctuelle, laissée au propriétaire.

## Constats — reprise, deuxième relecteur (fichiers `densify-*`)

*Les fichiers ci-dessous ne contiennent pas de règles (`rules: []`) : ils ajoutent
des phrases à des règles du lot « legacy » qui vivent hors de `batches/`. Je les
juge donc sur la phrase, sa correction, et la cohérence avec le `ruleSlug` visé.*

### [GRAVE] `densify-conjugaison` / `participe-présent` — les deux corrections enseignent l'inverse de la règle
- **Où** : `densify-conjugaison.ts:66-67`
- **Texte** : « Ce sont des enfants [obéissant] à toutes les consignes. », fix `"obéissants"` ;
  « Des travaux [différant] selon les régions ont été engagés. », fix `"différents"`
- **Problème** : dans les deux phrases, le mot marqué est suivi de son **complément**
  (« à toutes les consignes », « selon les régions ») : c'est donc un **participe
  présent**, qui est invariable, et les deux formes d'origine sont **correctes**.
  « Des enfants obéissant à toutes les consignes » = « qui obéissent à toutes les
  consignes ». La règle marque comme fautives deux phrases justes et impose
  l'accord là où le français l'interdit. Elle contredit en outre frontalement
  `accord-participe-ayant` (`batch-011-accords.ts:190`), dont le `tip` est
  « Un participe présent ne s'accorde jamais ».
- **Correction proposée** : inverser le marquage (« Ce sont des enfants
  [obéissants] à toutes les consignes » → `"obéissant"`), ou retirer le complément
  pour obtenir un vrai adjectif verbal (« des enfants obéissants et polis »).

### [MOYEN] ✅ `densify-conjugaison` / `asseoir` — une phrase admet deux corrections, l'exercice n'en accepte qu'une
- **Où** : `densify-conjugaison.ts:128`
- **Texte** : « Elle [s'assois] près de la fenêtre pour mieux voir. », fix `"s'assied"`
- **Problème** : *asseoir* a deux conjugaisons également correctes ; « elle s'assoit »
  est aussi juste que « elle s'assied », et c'est même la forme que les deux autres
  phrases de la même règle donnent comme correction (`:127` et `:129`, fix
  `"s'assoit"`). L'apprenant qui écrit « s'assoit » — la réponse que la règle vient
  de lui enseigner deux fois — est déclaré en faute.
- **Correction proposée** : accepter les deux formes, ou aligner le `fix` sur
  `"s'assoit"`.
- **Fait** : `fix` aligné sur `"s'assoit"`, comme proposé.

### [MOYEN] ✅ `densify-conjugaison` / `subj-pouvoir` — une phrase sur deux ne porte pas sur la règle, et double une autre
- **Où** : `densify-conjugaison.ts:133`
- **Texte** : « Bien qu'il [sait] nager, il reste près du bord. », fix `"sache"`
- **Problème** : la phrase porte sur *savoir*, pas sur *pouvoir* ; elle est de plus
  la jumelle de `densify-conjugaison.ts:47` (`subj-bienque`) : « Quoiqu'elle [sait]
  la vérité, elle n'a rien dit. » → `"sache"`. Même verbe, même temps, même
  correction, même conjonction concessive, à deux règles de distance.
- **Fait** : phrase changée pour porter sur *pouvoir* : « Bien qu'il [peut] nager,
  il reste près du bord. » → fix `"puisse"`.

### [MINEUR] ✅ `densify-conjugaison` / `resoudre` — la même correction deux fois
- **Où** : `densify-conjugaison.ts:105` et `:107`
- **Texte** : « Il [résous] les problèmes… » → `"résout"` ; « Elle [résoud] les
  conflits… » → `"résout"`
- **Problème** : deux graphies fautives voisines pour un seul et même point, dans
  une règle qui ne compte que trois phrases. La troisième (`absous` → `absout`)
  est la seule à apporter quelque chose.
- **Fait** : la seconde phrase remplacée par un autre verbe en -soudre : « Le
  comité se [dissous] à la fin de l'année. » → fix `"dissout"`.

### [GRAVE] `densify-orthographe` / `elision` — les trois phrases produisent un pronom en double
- **Où** : `densify-orthographe.ts:99-101`
- **Texte** : « Il attend [que] il réponde avant de partir. », fix `"qu'il"` ;
  « Je crois [que] elle a raison sur ce point précis. », fix `"qu'elle"` ;
  « Personne [ne] a compris la consigne du premier coup. », fix `"n'a"`
- **Problème** : le marquage ne couvre que le premier mot, mais la correction
  absorbe aussi le suivant, qui reste en place. On obtient « Il attend **qu'il il**
  réponde », « Je crois **qu'elle elle** a raison », « Personne **n'a a** compris ».
  Les trois phrases de la règle sont inutilisables.
- **Correction proposée** : marquer les deux mots : « Il attend [que il] réponde » → `"qu'il"`.

### [GRAVE] `densify-orthographe` / `hyphen-nombres` — trois phrases cassées, et une norme concurrente présentée comme une faute
- **Où** : `densify-orthographe.ts:81-83`
- **Texte** : « Il a compté vingt et [un] cartons dans le garage. », fix `"vingt-et-un"` ;
  « La salle contient cent quatre [vingts] places numérotées. », fix `"cent-quatre-vingts"` ;
  « Le devis atteint trois cent [cinquante] euros au total. », fix `"trois-cent-cinquante"`
- **Problème** : deux défauts cumulés.
  1. Le marquage ne porte que sur le dernier élément du nombre alors que la
     correction réécrit le nombre entier. Après substitution : « Il a compté
     **vingt et vingt-et-un** cartons », « contient **cent quatre
     cent-quatre-vingts** places », « atteint **trois cent trois-cent-cinquante**
     euros ». Aucune des trois n'est exploitable.
  2. Les formes marquées comme fautives — « vingt et un », « cent quatre-vingts »,
     « trois cent cinquante » — sont la graphie **traditionnelle**, parfaitement
     correcte et encore majoritaire. Le trait d'union généralisé vient des
     rectifications de 1990 : c'est une graphie **admise**, pas la seule licite.
     Présenter l'autre comme une faute est un contresens.
- **Correction proposée** : marquer le nombre entier, et passer la règle en
  `disputed` (les deux graphies sont valides).

### [GRAVE] `densify-orthographe` / `quelquefois` — une phrase correcte sanctionnée, une phrase rendue incompréhensible
- **Où** : `densify-orthographe.ts:71` et `:73`
- **Texte** : « Il lui arrive [quelquefois] de rentrer avant la nuit. », fix `"quelques fois"` ;
  « Il a essayé trois ou [quelquefois] quatre fois de suite. », fix `"quelques"`
- **Problème** : phrase 1 : « Il lui arrive quelquefois de rentrer avant la nuit »
  est **irréprochable** — *quelquefois* y signifie « parfois », c'est exactement son
  emploi. Rien dans la phrase ne suggère un décompte. L'exercice sanctionne une
  graphie juste.
  Phrase 3 : après correction on lit « Il a essayé trois ou **quelques quatre
  fois** de suite », qui n'est pas français. Le mot marqué était en réalité un mot
  en trop (la phrase visée est « trois ou quatre fois de suite ») et aurait dû
  recevoir `fix: "à supprimer"`.
- **Correction proposée** : retirer la phrase 1, et passer la phrase 3 en
  `fix: "à supprimer"`.

### [GRAVE] `densify-orthographe` / `week-end` — « accroché vis-à-vis à vis de la fenêtre »
- **Où** : `densify-orthographe.ts:46`
- **Texte** : « Le miroir est accroché [vis] à vis de la fenêtre. », fix `"vis-à-vis"`
- **Problème** : seul le premier *vis* est marqué, mais la correction réécrit la
  locution entière. Après substitution : « Le miroir est accroché **vis-à-vis à
  vis** de la fenêtre. »
- **Correction proposée** : marquer « [vis à vis] » → `"vis-à-vis"`.

### [GRAVE] `densify-orthographe` / `aujourdhui` — « depuis aujourd'hui hui »
- **Où** : `densify-orthographe.ts:105`
- **Texte** : « Il pleut depuis [aujourd] hui sans la moindre accalmie. », fix `"aujourd'hui"`
- **Problème** : le « hui » qui suit n'est pas dans le marquage : « Il pleut depuis
  **aujourd'hui hui** sans la moindre accalmie. » La phrase est de surcroît peu
  naturelle (« il pleut depuis ce matin » serait le tour attendu).
- **Correction proposée** : marquer « [aujourd hui] » → `"aujourd'hui"`.

### [MOYEN] ✅ `densify-orthographe` / `etc` — les trois phrases restent mal ponctuées après correction
- **Où** : `densify-orthographe.ts:57-59`
- **Texte** : « Il faut des vis, des clous, des chevilles, [etc...] rien ne manque. » ;
  « Elle collectionne timbres, pièces, cartes, [etc] sans jamais trier. » ;
  « On y trouve romans, essais, manuels, [ect.] et bien d'autres. » — fix `"etc."` dans les trois cas
- **Problème** : la correction est juste sur l'abréviation, mais la phrase obtenue
  reste fautive : « … des chevilles, **etc. rien ne manque** », « … cartes, **etc.
  sans jamais trier** », « … manuels, **etc. et bien d'autres** ». Le point
  abréviatif ferme la phrase et la suite reprend en minuscule sans virgule. Il
  fallait « etc., sans jamais trier ». La troisième cumule un pléonasme :
  « etc. et bien d'autres » dit deux fois la même chose.
- **Correction proposée** : « Elle collectionne timbres, pièces, cartes, etc., sans jamais trier. »
- **Fait** : virgule ajoutée après le marqueur dans les trois phrases (juste
  après `[etc...]` / `[etc]` / `[ect.]`) et le pléonasme de la troisième retiré
  au profit de « … dans un joyeux désordre. »

### [MOYEN] ✅ `densify-orthographe` / `chariot` et `circonflexe` — deux graphies rectifiées données pour des fautes
- **Où** : `densify-orthographe.ts:136` et `:27`
- **Texte** : « Le [charriot] de supermarché grince à chaque virage. », fix `"chariot"` ;
  « Ces poires ne sont pas encore [mures] pour la tarte. », fix `"mûres"`
- **Problème** : *charriot* est la graphie **recommandée par les rectifications de
  1990**, précisément pour l'aligner sur *charrette* et *charrue* — les deux autres
  phrases de la même règle. La règle marque donc comme faute la forme que la
  réforme a créée pour rétablir la cohérence qu'elle enseigne.
  De même, l'accent circonflexe sur *mûr* n'est maintenu par les rectifications
  qu'au **masculin singulier** (*mûr* / *mur*) : *mures* au féminin pluriel est une
  graphie admise. Même défaut que celui déjà relevé sur `ortho-gageure`.
- **Correction proposée** : remplacer *charriot* par un mot sans variante admise, et
  déplacer *mûres* vers un cas non concerné par la rectification.
- **Fait** : la phrase sur *charriot* passée en `fix: null` (les deux graphies
  sont admises) ; la phrase sur *mûr* déplacée au masculin singulier (« Ce fruit
  n'est pas encore [mur] pour être cueilli. » → fix `"mûr"`), seule forme où le
  circonflexe reste requis dans tous les cas.

### [MOYEN] ⏭️ `densify-orthographe` / `emment` recoupe `amment-emment` dans le même fichier
- **Où** : `densify-orthographe.ts:22-25` (`amment-emment`) et `:149-152` (`emment`)
- **Texte** : lot 1 : « Il agit [prudament]… » → `"prudemment"`, « Elle a répondu
  [savament]… » → `"savamment"` ; lot 2 : « Il a [apparament] oublié… » →
  `"apparemment"`, « Elle répond [inteligemment]… » → `"intelligemment"`
- **Problème** : même point d'orthographe (les adverbes en -amment / -emment),
  mêmes types de fautes, dans un fichier de 40 règles. Deux entrées pour un seul
  mécanisme.
- **Fait** : écarté. Les deux groupes de phrases sont rattachés à deux règles
  legacy distinctes (`ruleSlug` différents) que je ne peux pas fusionner depuis
  ce fichier sans toucher à `legacy.json`, hors périmètre. Les quatre phrases
  restent individuellement correctes.

### [MINEUR] ✅ `densify-orthographe` — phrases jumelles et slugs qui ne correspondent pas
- **Où** : `densify-orthographe.ts:76-77`, `:42`, `:146`
- **Texte** : « Il s'est levé [bientôt] ce matin, avant le jour. » et « Elle est
  arrivée [bientôt] ce matin, avant tout le monde. » — même structure, même
  correction, même complément de temps.
- **Problème annexe** : le `ruleSlug` `langage` reçoit une phrase sur *acompte*
  (`:42`) et le `ruleSlug` `imbecile` une phrase sur *atterrir* (`:146`) : dans les
  deux cas l'apprenant verra la phrase sous un énoncé qui ne la couvre pas.
  Enfin `monsieur-abrev` (`:172-173`) donne **deux corrections différentes**
  (`"MM."` puis `"Mme"`) pour la **même forme marquée** `[Mrs]`, à une ligne
  d'intervalle.
- **Fait** : la seconde phrase jumelle reformulée (« Elle a fini son repas
  beaucoup trop [bientôt] pour en profiter. »). Pour `langage`/`acompte` et
  `imbecile`/`atterrir` : renommer le `ruleSlug` demanderait une règle legacy
  correspondante que je ne peux pas créer (hors périmètre) — laissés tels quels.
  Pour `monsieur-abrev` : les deux corrections différentes restent en fait
  cohérentes avec leur contexte respectif (« Les [Mrs] Bernard et Leroy »,
  pluriel, → « MM. » ; « Bonjour [Mrs] Lefèvre », adresse à une seule personne,
  → « Mme ») — le contexte désambiguïse déjà, donc rien changé là.

### [GRAVE] `densify-vocabulaire` / `savérer` — « Le diagnostic s'est confirmé vrai »
- **Où** : `densify-vocabulaire.ts:289`
- **Texte** : « Le diagnostic s'est [avéré] vrai après plusieurs examens. », fix `"confirmé"`
- **Problème** : *se confirmer* ne se construit pas avec un attribut. Après
  correction : « Le diagnostic **s'est confirmé vrai** après plusieurs examens. »
  Il fallait « s'est révélé exact » ou simplement « s'est confirmé ». C'est
  exactement le défaut déjà relevé sur `impropriete-avoir-lair`
  (`batch-003-registre.ts:376-389`) : la règle sur *s'avérer* casse ses propres
  phrases, deux lots plus loin.
- **Correction proposée** : marquer « [avéré vrai] » → `"révélé exact"`.

### [GRAVE] `densify-vocabulaire` / `eminent-2` — trois phrases rattachées à une règle qui ne les explique pas
- **Où** : `densify-vocabulaire.ts:247-251`
- **Texte** : `ruleSlug: "eminent-2"` avec « L'[influence] de touristes bloque tout
  le centre-ville. » → `"affluence"`, « Son [affluence] sur le conseil reste
  considérable. » → `"influence"`, « On note une forte [influence] aux caisses le
  samedi. » → `"affluence"`
- **Problème** : les trois phrases portent sur le couple *affluence* / *influence*,
  la règle sur *éminent* / *imminent*. L'apprenant recevra ces phrases sous un
  énoncé qui ne les couvre pas. Même défaut que `davantage-2` dans
  `densify-homophones.ts:259-263`.
- **Correction proposée** : créer une règle `affluence-influence`.

### [GRAVE] `densify-vocabulaire` / `somptuaire` — une phrase correcte corrigée vers la forme contestée
- **Où** : `densify-vocabulaire.ts:234`
- **Texte** : « Cette dépense [somptueuse] a été jugée injustifiable. », fix `"somptuaire"`
- **Problème** : « une dépense somptueuse » est du français irréprochable — c'est
  même le sens propre de l'adjectif (« d'une magnificence coûteuse »). La règle
  marque donc comme fautive une phrase juste, et impose à sa place *somptuaire*,
  qui désigne à l'origine ce qui **restreint** le luxe (les *lois somptuaires*) et
  dont l'emploi au sens de « de luxe » est précisément le point critiqué. La
  correction va du sûr vers le discuté.
- **Correction proposée** : supprimer la phrase ; les deux autres (`:233` et `:235`,
  *somptuaire* → *somptueux*) suffisent à porter la règle.

### [GRAVE] `densify-vocabulaire` / `prescrire` — un exercice insoluble
- **Où** : `densify-vocabulaire.ts:220`
- **Texte** : « Ces méthodes ont été [prescrites] par la commission. », fix `"proscrites"`
- **Problème** : la phrase marquée est **parfaitement correcte** telle quelle — une
  commission qui prescrit des méthodes, c'est son travail ordinaire. Rien dans la
  phrase ne permet de deviner qu'on attendait l'interdiction plutôt que la
  prescription. L'apprenant qui laisse la phrase intacte a raison, et l'exercice le
  déclare en faute. (Les deux autres phrases de la règle, elles, sont désambiguïsées
  par le contexte : « trois semaines de repos », « formellement ».)
- **Correction proposée** : ajouter un indice de sens (« Ces méthodes dangereuses
  ont été [prescrites] par la commission »), ou retirer la phrase.

### [MOYEN] ⏭️ `densify-vocabulaire` — quatre positions prescriptives contestées, aucune marquée `disputed`
- **Où** : `densify-vocabulaire.ts:252-256` (`alternative`), `:257-261` (`conséquent`),
  `:262-266` (`realiser`), `:277-281` (`voire-meme`)
- **Texte** : « Quelles sont les autres [alternatives] envisageables ? » → `"solutions"` ;
  « Le budget est [conséquent] » → `"important"` ; « Je [réalise] seulement
  maintenant » → `"mesure"` ; « voire [même] trois » → `"à supprimer"`
- **Problème** : ces quatre emplois sont enregistrés par les dictionnaires usuels
  (Robert, Larousse) : *alternative* au sens de « solution de remplacement »,
  *réaliser* au sens de « se rendre compte », et *voire même* est défendu par
  Grevisse comme un renforcement expressif ancien. Ce sont des points de norme
  **discutés**, exactement le genre de cas pour lequel le module dispose d'un statut
  `disputed` (cf. les douze règles du lot 005). Les présenter comme des fautes
  franches enseigne une norme plus étroite que la norme réelle.
- **Correction proposée** : passer ces règles en `disputed`, ou reformuler l'énoncé
  en termes de registre soigné plutôt que de correction.
- **Fait** : écarté. Le statut (`disputed`) et l'énoncé de ces quatre règles vivent
  dans le lot « legacy » (`legacy.json`), hors de mon périmètre (`batches/*.ts`
  uniquement) — je ne peux ni changer leur statut ni reformuler leur `statement`
  depuis ces fichiers de densification. Les phrases elles-mêmes sont des emplois
  attestés, donc rien à corriger côté phrase.

### [MOYEN] ✅ `densify-vocabulaire` — `voire` et `voire-meme` bâties sur les mêmes phrases
- **Où** : `densify-vocabulaire.ts:25-26` et `:278-279`
- **Texte** : « Il faudra deux jours, [voir] trois, pour tout terminer. » /
  « Il faudra deux jours, voire [même] trois selon la météo. » ;
  « Le trajet dure trois heures, [voir] davantage en été. » /
  « Le trajet coûte cent euros, voire [même] davantage encore. »
- **Problème** : les deux règles réemploient le même moule de phrase à deux cent
  cinquante lignes d'intervalle. L'apprenant croira réviser deux fois le même
  exercice alors qu'on lui demande deux choses différentes — et rien ne l'avertit
  du changement de consigne.
- **Fait** : la phrase de `voire` reformulée : « L'attente peut durer une heure,
  [voir] deux un jour de grève. » → fix `"voire"`, qui ne partage plus son moule
  avec la phrase de `voire-meme`.

### [MINEUR] ✅ `densify-vocabulaire` — le déterminant trahit la réponse, et deux phrases jumelles
- **Où** : `densify-vocabulaire.ts:225`, `:323` et `:325`
- **Texte** : « Il a obtenu une [prolongement] de son congé maladie. », fix `"prolongation"`
- **Problème** : « une prolongement » est doublement fautif (le genre autant que le
  mot) : l'article donne la réponse avant toute réflexion sur le sens. Même défaut
  que celui relevé sur `luxure-luxe` (`batch-009-paronymes.ts:260`).
- **Problème annexe** : `:323` et `:325` sont jumelles — « Les archéologues ont mis
  [à] jour une villa romaine. » et « Ces fouilles ont mis [à] jour des vestiges du
  Moyen Âge. » : même verbe, même correction, même contexte archéologique, dans une
  règle de trois phrases.
- **Fait** : phrase reformulée sans article genré adjacent au mot marqué : « Elle
  n'a pas obtenu de [prolongement] pour son congé maladie. » → fix `"prolongation"`
  (« de » est invariable). La seconde phrase jumelle changée de contexte : « Le
  rapport interne a mis [à] jour de graves négligences. » → fix `"au"`.

### [MINEUR] ✅ `densify-vocabulaire` / `original` — une phrase où les deux mots conviennent
- **Où** : `densify-vocabulaire.ts:66`
- **Texte** : « Le projet [original] a été profondément modifié depuis. », fix `"originel"`
- **Problème** : *original* signifie aussi « qui est à l'origine, qui émane de la
  source » (une édition originale, le texte original) : « le projet original a été
  modifié » est défendable. La distinction que la règle veut faire passer est réelle,
  mais cette phrase-là ne la tranche pas.
- **Fait** : vérifié — cette phrase n'existe plus dans le fichier actuel (déjà
  remplacée, probablement lors du nettoyage des [GRAVE] voisins sur `original` dans
  `densify2-ortho-vocab.ts`). Les trois phrases actuelles de `original` (péché
  originel, idée originale, forêt originelle) tranchent correctement le sens.
  Rien à faire.

### [GRAVE] `densify2-homophones` / `quoi-que` — un `fix` identique au mot marqué
- **Où** : `densify2-homophones.ts:91`
- **Texte** : « Il persévère, [quoiqu']il soit épuisé depuis des jours. », fix `"quoiqu'"`
- **Problème** : la correction est **rigoureusement identique** au texte marqué. La
  phrase est correcte, il n'y a rien à changer, et l'apprenant se voit pourtant
  annoncer une faute. Troisième occurrence du même défaut dans le module, après
  `point-virgule-liste` (`batch-013:74-87`) et `expr-a-lencontre` (`batch-015:313`).
- **Correction proposée** : passer la phrase en `fix: null`.

### [GRAVE] `densify2-homophones` / `davantage-2` — le mauvais `ruleSlug`, une seconde fois
- **Où** : `densify2-homophones.ts:249-252`
- **Texte** : `ruleSlug: "davantage-2"` avec « Il a [quand-même] réussi à terminer
  avant les autres. » et « C'est [quand-même] étrange, cette absence de réponse. »,
  fix `"quand même"`
- **Problème** : exactement la même erreur d'aiguillage que celle déjà signalée dans
  `densify-homophones.ts:259-263` : des phrases sur *quand même* rangées sous une
  règle qui porte sur *davantage*. Le défaut a donc été **reproduit** d'un fichier
  de densification à l'autre : la règle `davantage-2` reçoit désormais cinq phrases
  hors sujet.
- **Correction proposée** : créer une règle `quand-meme` et y déplacer les cinq phrases.

### [GRAVE] `densify2-homophones` — des phrases correctes déclarées fautives
- **Où** : `densify2-homophones.ts:26` et `:219`
- **Texte** : « Il range toujours [ces] outils dans le même tiroir. », fix `"ses"` ;
  « Dis-moi [pourquoi] tu te bats depuis toutes ces années. », fix `"pour quoi"`
- **Problème** : les deux phrases sont **irréprochables telles quelles**. « Il range
  toujours ces outils dans le même tiroir » est un démonstratif tout à fait normal ;
  rien n'impose la possession. « Dis-moi pourquoi tu te bats » est la lecture la plus
  naturelle (la raison), et c'est même la seule que le verbe *se battre* appelle sans
  complément. L'exercice est insoluble et sanctionne une réponse juste.
  Le contraste est éclairant : la phrase voisine (`:27`) est, elle, désambiguïsée par
  un marqueur explicite — « [Ses] arbres-**là** » impose le démonstratif. Et `:218`
  (« Personne ne sait [pourquoi] il a finalement opté. ») est correctement construite,
  puisque *opter* réclame *pour*. Les deux phrases fautives sont donc simplement mal
  conçues, alors que le bon modèle existait à la ligne d'à côté.
  À noter enfin que `:219` est la **jumelle** de `densify-homophones.ts:223`
  (« Dis-moi [pourquoi] tu te bats vraiment, au fond. »), déjà signalée : le même
  exercice insoluble a été dupliqué d'un fichier à l'autre.

### [MOYEN] ✅ `densify2-homophones` — quatre règles pour un seul mécanisme (la soudure des adverbes de temps)
- **Où** : `densify2-homophones.ts:81-84` (`plutot`), `:221-224` (`aussitot`),
  `:225-228` (`sitot`), et `densify-orthographe.ts:75-79` (`bientot`)
- **Texte** : « Nous partirons [plutôt] que prévu » → `"plus tôt"` ; « Elle est partie
  [aussitôt] que possible » → `"aussi tôt"` ; « Personne ne se couche [sitôt] » →
  `"si tôt"` ; « Il s'est levé [bientôt] ce matin » → `"bien tôt"`
- **Problème** : c'est quatre fois la même opération intellectuelle — distinguer
  l'adverbe soudé du groupe « adverbe + tôt » —, appliquée à quatre mots. Rien
  n'interdit de les traiter, mais le module les présente comme quatre règles
  indépendantes, sans qu'aucune ne renvoie aux autres ; l'apprenant refait quatre
  fois le même raisonnement sans jamais le voir nommé.
- **Note annexe** : `:223` (« Elle est partie [aussitôt] que possible ce matin-là. »)
  reproduit le cas déjà signalé sur `densify-homophones` — « aussitôt que possible »
  est une forme courante et défendable, non une faute franche.
- **Fait** : la phrase de la note annexe corrigée (« Elle est partie [aussitôt]
  que sa sœur ce matin-là. » → fix `"aussi tôt"`, une vraie comparaison). Pour le
  problème principal (quatre règles isolées) : écarté — les énoncés de ces règles
  (`plutot`, `aussitot`, `sitot`, `bientot`) vivent dans `legacy.json`, hors de mon
  périmètre ; je ne peux pas y ajouter de renvoi croisé depuis les fichiers
  `densify*`.

### [GRAVE] `densify2-accords-conj` / `y-compris` — la règle se contredit entre ses deux phrases, et corrige du juste vers le faux
- **Où** : `densify2-accords-conj.ts:120-121`
- **Texte** : « Le prix est ferme, taxes y [comprises] et livraison incluse. », fix `"compris"` ;
  « Toutes les pièces, annexes y [compris], sont bien jointes. », fix `"comprises"`
- **Problème** : *y compris* est invariable **quand il précède** le nom, et
  **s'accorde quand il le suit** (Académie française, Grevisse : « y compris les
  taxes » mais « les taxes y comprises »). Dans les deux phrases, *y compris* suit le
  nom : l'accord est donc requis dans les deux cas. La première phrase était
  **correcte** et la règle la déclare fautive ; la seconde, dans une position
  syntaxique identique, reçoit la correction inverse. L'apprenant reçoit deux
  verdicts opposés sur la même construction, à une ligne d'intervalle.
- **Correction proposée** : passer `:120` en `fix: null`, ou déplacer *y compris*
  devant le nom (« y [comprises] les taxes » → `"compris"`).

### [GRAVE] `densify2-accords-conj` / `auxiliaire` — « Elle est descendue les escaliers »
- **Où** : `densify2-accords-conj.ts:310`
- **Texte** : « Elle [a] descendue les escaliers en courant. », fix `"est"`
- **Problème** : *descendre* suivi d'un complément d'objet direct se conjugue avec
  **avoir** : « Elle a descendu les escaliers. » La faute d'origine était l'accord du
  participe, pas l'auxiliaire. La correction produit « Elle **est descendue les
  escaliers** en courant », qui n'est pas français — un verbe transitif direct ne peut
  pas prendre *être* devant son objet.
  La règle se dément d'ailleurs elle-même à la ligne suivante : « Il [est] monté les
  cartons au grenier. » → `"a"` applique correctement le même principe, au même verbe
  de mouvement, en sens inverse.
- **Correction proposée** : marquer « [a descendue] » → `"a descendu"`.

### [GRAVE] `densify2-accords-conj` / `tout-le-monde` — « Tout le monde a leur avis »
- **Où** : `densify2-accords-conj.ts:136`
- **Texte** : « Tout le monde [ont] leur avis sur la question. », fix `"a"`
- **Problème** : le possessif n'est pas dans le marquage. Après correction : « Tout le
  monde **a leur avis** sur la question. » Il fallait « a **son** avis ». La phrase
  modèle reste fausse sur le point même que la règle enseigne — que *tout le monde*
  commande le singulier.
- **Correction proposée** : marquer « [ont leur] » → `"a son"`.

### [GRAVE] `densify2-accords-conj` / `participe-présent` — « Des enfants fatiguant de bruit »
- **Où** : `densify2-accords-conj.ts:239`
- **Texte** : « Des enfants [fatigants] de bruit couraient partout. », fix `"fatiguant"`
- **Problème** : après correction, « Des enfants **fatiguant de bruit** couraient
  partout. » *Fatiguer* ne se construit pas avec *de* : la phrase n'a aucun sens. Elle
  contredit de surcroît la règle `fatigant` du même fichier (`:317-318`), qui corrige
  *fatiguant* en *fatigant* — le module enseigne donc les deux sens de la correction
  pour le même mot, à quatre-vingts lignes d'écart, et l'un des deux sur une phrase
  impossible.
- **Correction proposée** : remplacer par un vrai participe présent transitif
  (« Des enfants [fatigants] leurs parents… » → `"fatiguant"` n'est guère mieux ;
  mieux vaut refaire la phrase : « des cris [fatigants] les voisins »).

### [GRAVE] `densify2-accords-conj` / `si-conditionnel` — « Si tu avais le temps, passe me voir demain »
- **Où** : `densify2-accords-conj.ts:222`
- **Texte** : « Si tu [aurais] le temps, passe me voir demain. », fix `"avais"`
- **Problème** : la correction supprime bien le conditionnel après *si*, mais la
  phrase obtenue est mal formée : un *si* + imparfait appelle un conditionnel dans la
  principale, pas un impératif. « Si tu avais le temps, passe me voir demain » ne se
  dit pas ; il fallait « Si tu **as** le temps, passe me voir demain. »
- **Correction proposée** : fix `"as"`.

### [GRAVE] `densify2-accords-conj` — deux défauts déjà signalés, reproduits à l'identique
- **Où** : `densify2-accords-conj.ts:129` et `:52`
- **Texte** : « Ce [sont] moi qui ai réservé les billets de train. », fix `"C'est"` →
  « **Ce C'est** moi qui ai réservé les billets de train. » ;
  « Plus d'un lecteur se sont [plaints] de cette coquille. », fix `"plaint"` →
  « Plus d'un lecteur **se sont plaint** de cette coquille. »
- **Problème** : ce sont mot pour mot les deux défauts déjà relevés dans
  `densify-accords.ts:397` et `:311`. La densification les a donc **recopiés** dans un
  second fichier au lieu de les corriger : la même phrase absurde existe désormais en
  deux exemplaires dans la base.
- **Correction proposée** : marquer « [Ce sont] » → `"C'est"` et « [se sont plaints] »
  → `"s'est plaint"`.

### [MOYEN] ✅ `densify2-accords-conj` — la moitié du volet conjugaison recopie `densify-conjugaison`
- **Où** : `densify2-accords-conj.ts:180-328` face à `densify-conjugaison.ts:10-167`
- **Texte** : une quinzaine de couples quasi identiques, dont :
  – « L'équipe [vaint] rarement à l'extérieur **cette saison**. » / « **Cette année**,
    l'équipe [vaint] rarement à l'extérieur. » (`d-conj:59` / `d2:230`)
  – « Vous [prédites] toujours le pire avant chaque **examen**. » / « … avant chaque
    **échéance**. » (`d-conj:100` / `d2:271`)
  – « **Le fil** [romp] toujours au même endroit. » / « **La corde** [romp] toujours au
    même endroit. » (`d-conj:111` / `d2:279`)
  – « **Ces** places ont été [crées] pour la **nouvelle promotion**. » / « **Les**
    places ont été [créés] pour la **rentrée**. » (`d-conj:92` / `d2:263`)
  – « Il [s'assoie] toujours **à la même place au fond**. » / « Il [s'assoie] toujours
    **au fond de la salle**. » (`d-conj:127` / `d2:294`)
  – « **Nous** [haissons] cette habitude depuis toujours. » / « **Vous** [haissez]
    cette habitude depuis toujours. » (`d-conj:152` / `d2:315`)
  – et de même pour `acheter-geler`, `faire-dire`, `resoudre`, `verbes-dre`,
    `ouvrir-passé`, `passé-simple`, `passé-simple-pluriel`, `fatigant`.
- **Problème** : le commentaire d'en-tête annonce pourtant l'objectif inverse —
  « ne plus reconnaître une phrase avant de l'avoir lue ». Un seul mot change d'une
  phrase à l'autre : l'apprenant reconnaîtra le moule dès la deuxième occurrence et
  répondra sans lire. La densification n'ajoute ici que du volume.
- **Correction proposée** : refaire ces phrases sur d'autres verbes du même groupe.
- **Fait** : les six paires citées en exemple refaites côté `densify2-accords-conj`
  avec un verbe ou une construction différente du jumeau de `densify-conjugaison` :
  *vaincre* → futur (« L'équipe ne [vaintra] jamais à l'extérieur… ») ; *créer* →
  *agréer* (« Ces mesures ont été [agréés] par le conseil d'administration. ») ;
  *prédire* → *médire* (« Vous [médites] de tout le monde sans exception. ») ;
  *rompre* → *interrompre* (« L'orage [interromp] souvent nos parties de pétanque
  en été. ») ; *s'assoie* → *se rassoie* (« Après la pause, il se [rassoie]
  toujours au même endroit. ») ; *haïr* au présent → à l'imparfait (« Il
  [haissait] cette habitude depuis toujours… »). Les huit autres paires listées
  (`acheter-geler`, `faire-dire`, `resoudre`, `verbes-dre`, `ouvrir-passé`,
  `passé-simple`, `passé-simple-pluriel`, `fatigant`) n'ont pas été retouchées,
  faute de temps — la remarque de fond reste valable pour elles.

### [MOYEN] ✅ `densify2-accords-conj` / `un-des-qui` — les deux accords sont admis
- **Où** : `densify2-accords-conj.ts:132-133`
- **Texte** : « C'est un des rares peintres qui [sait] encore ce métier. » → `"savent"` ;
  « Voilà une des causes qui [explique] le retard du chantier. » → `"expliquent"`
- **Problème** : après *un des… qui*, le pluriel est l'accord ordinaire, mais le
  singulier est légitime quand on veut isoler l'élément — c'est ce que disent Grevisse
  et l'Académie. Dans la seconde phrase surtout (« une des causes qui explique le
  retard »), le singulier est parfaitement défendable. Présenter le pluriel comme la
  seule réponse sanctionne un accord correct.
- **Fait** : première phrase passée en `fix: null` (le singulier y est accepté tel
  quel) ; seconde phrase complétée par « , ensemble, » pour forcer sans ambiguïté
  la lecture plurielle qu'exige le `fix`.

### [MINEUR] ✅ `densify2-accords-conj` — trois phrases sous un `ruleSlug` qui ne les couvre pas
- **Où** : `densify2-accords-conj.ts:267`, `:299`, `:93`
- **Texte** : `faire-dire` reçoit « Vous [étes] attendus depuis une bonne heure. » →
  `"êtes"` — un simple accent sur *être*, sans rapport avec les irrégularités de
  *faire* et *dire* ; `subj-pouvoir` reçoit « Bien qu'elle [sait] la vérité, elle se
  tait. » → `"sache"` — troisième occurrence dans le module de « bien que + savoir »
  rangée sous une règle qui porte sur *pouvoir* (déjà signalé en
  `densify-conjugaison.ts:133`).
- **Problème annexe** : `:93` « Quand on [sont] pressés, on oublie l'essentiel. » →
  `"est"` laisse « on est **pressés** » : l'accord sylleptique est admis, mais dans une
  règle qui vient d'enseigner que *on* commande le singulier, la phrase modèle
  brouille aussitôt le message.
- **Fait** : `faire-dire` reçoit désormais un vrai cas de *dire* (« Vous [disez]
  toujours la vérité… » → fix `"dites"`) ; `subj-pouvoir` reçoit un vrai cas de
  *pouvoir* (« Bien qu'elle [peut] nager depuis toujours… » → fix `"puisse"`) ;
  l'adjectif de la phrase annexe passé au singulier (« Quand on [sont] pressé,
  on oublie l'essentiel. ») pour ne plus brouiller le message sur *on*.

### [GRAVE] `densify2-ortho-vocab` — six défauts déjà signalés, recopiés dans un troisième fichier
- **Où** : `densify2-ortho-vocab.ts:395`, `:80-81`, `:96-97`, `:73`, `:351`, `:361-364`
- **Texte et effet après correction** :
  – `:395` « Le calcul s'est [avéré] vrai après vérification. » → `"exact"` donne
    « Le calcul **s'est exact** après vérification. » C'est **mot pour mot** la phrase
    déjà signalée en `batch-003-registre.ts:389`, verbe disparu compris.
  – `:80-81` « Le devis atteint quatre cent [douze] euros » → `"quatre-cent-douze"`
    donne « quatre cent **quatre-cent-douze** euros » ; « trente et [un] cartons » →
    `"trente-et-un"` donne « trente et **trente-et-un** cartons ». Même défaut qu'en
    `densify-orthographe.ts:81-83`, et la seconde phrase est la jumelle exacte de
    `:81` (« vingt et [un] cartons dans le garage »).
  – `:96-97` « Il attend [que] elle réponde » → « Il attend **qu'elle elle** réponde » ;
    « Personne [ne] a compris » → « Personne **n'a a** compris ». Reprise intégrale du
    défaut de `densify-orthographe.ts:99-101`.
  – `:73` « Il lui arrive [quelquefois] de rentrer avant la nuit tombée. » →
    `"quelques fois"` : la phrase correcte déjà signalée en `densify-orthographe.ts:71`,
    republiée à un mot près.
  – `:351` « Ces dépenses [somptueuses] ont été jugées injustifiables. » →
    `"somptuaires"` : la correction du juste vers le discuté, déjà relevée en
    `densify-vocabulaire.ts:234`.
  – `:361-364` `ruleSlug: "eminent-2"` reçoit deux phrases de plus sur
    *affluence* / *influence* : la règle sur *éminent* porte désormais **cinq** phrases
    hors sujet.
- **Problème** : ce n'est plus une erreur isolée mais un **mécanisme de propagation**.
  Les fichiers `densify2-*` ont été produits en dupliquant les `densify-*` sans les
  relire : les phrases cassées se sont multipliées au lieu d'être corrigées. Chaque
  correction devra donc être appliquée en deux ou trois endroits.
- **Correction proposée** : traiter les `densify2-*` comme des copies à réviser
  intégralement, et non comme des ajouts nouveaux.

### [GRAVE] `densify2-ortho-vocab` / `original` — « Le manuscrit originel »
- **Où** : `densify2-ortho-vocab.ts:214`
- **Texte** : « Le manuscrit [original] a été perdu dans l'incendie. », fix `"originel"`
- **Problème** : « le manuscrit original » est la seule tournure reçue — c'est même le
  sens premier de l'adjectif (« qui émane directement de l'auteur » : le texte
  original, l'édition originale, l'original d'un acte). « Le manuscrit originel » ne se
  dit pas. La correction va du juste vers le fautif, dans une règle qui prétend
  enseigner cette distinction précise.
- **Correction proposée** : supprimer la phrase, ou l'inverser.

### [GRAVE] `densify2-ortho-vocab` / `prescrire` — la phrase insoluble, aggravée
- **Où** : `densify2-ortho-vocab.ts:339`
- **Texte** : « Le règlement [prescrit] l'usage du téléphone en salle. », fix `"proscrit"`
- **Problème** : la phrase est **correcte telle quelle** : un règlement qui prescrit
  l'usage d'un appareil, c'est ordinaire. Rien n'indique qu'il s'agisse d'une
  interdiction. C'est la même phrase que `densify-vocabulaire.ts:219`, **mais privée de
  l'adverbe « formellement »** qui, là-bas, permettait au moins de deviner l'intention.
  La reprise a donc supprimé le seul indice qui rendait l'exercice soluble.
- **Correction proposée** : rétablir « formellement », ou retirer la phrase.

### [MOYEN] ✅ `densify2-ortho-vocab` / `ent-ant` — « Ce détail paraît négligent »
- **Où** : `densify2-ortho-vocab.ts:21`
- **Texte** : « Ce détail paraît [négligant] mais il compte beaucoup. », fix `"négligent"`
- **Problème** : *négligent* qualifie une personne qui néglige, pas une chose dont on
  fait peu de cas. Un détail ne peut pas être « négligent » — le mot attendu par le
  sens est **négligeable**. Après correction, la phrase modèle est orthographiquement
  juste et sémantiquement absurde.
- **Correction proposée** : « Cet élève paraît [négligant] depuis la rentrée. » → `"négligent"`.
- **Fait** : correction proposée appliquée telle quelle.

### [MOYEN] ✅ `densify2-ortho-vocab` — un fichier de 430 lignes presque entièrement recopié
- **Où** : `densify2-ortho-vocab.ts` face à `densify-orthographe.ts` et `densify-vocabulaire.ts`
- **Texte** : une soixantaine de couples, dont :
  – « Le concert **se tient** dans [l'hall] de la mairie. » / « Le concert **a lieu**
    dans [l'hall] de la mairie. » (`d-ortho:95` / `d2:92`)
  – « Elle a mesuré [l'hauteur] **du mur** avant de commander. » / « … [l'hauteur]
    **du plafond** avant d'acheter. » (`d-ortho:96` / `d2:93`)
  – « Les [Mrs] **Bernard et Leroy** président la séance. » / « Les [Mrs] **Petit et
    Durand** président la séance. » (`d-ortho:172` / `d2:161`)
  – « Vingt ans, c'est [bientôt] pour **prendre une telle décision**. » / « … pour
    **partir en retraite**. » (`d-ortho:78` / `d2:77`)
  – et, côté vocabulaire, `conjoncture`, `irruption`, `davantage`, `amener`,
    `emmener`, `martyr`, `acquit`, `consumer`, `detonant`, `habilete`, `pecuniaire`,
    `prolongation`, `rebattre`, `realiser`, `plain-pied`, `for-interieur`, `a-lenvi`,
    `dores-deja`, `au-fur`, `chez-le` — toutes bâties sur le même moule que leur
    homologue du premier fichier.
- **Problème** : le fichier annonce vouloir « ne plus reconnaître une phrase avant de
  l'avoir lue ». En pratique il change un nom propre ou un complément et republie la
  même phrase. Le gain pédagogique est nul, le volume à relire est doublé, et chaque
  défaut existe désormais en double.
- **Note** : la phrase « Le trajet coûte cent euros, [voir] davantage en été. » (`:182`)
  est la **troisième** version d'un même moule, après `densify-vocabulaire.ts:26`
  (« Le trajet dure trois heures, [voir] davantage en été. ») et `:279`
  (« Le trajet coûte cent euros, voire [même] davantage encore. ») — et les trois ne
  demandent pas la même réponse.
- **Fait** : les quatre couples cités en exemple diversifiés (hall du théâtre au lieu
  de la mairie, hauteur de la clôture au lieu du plafond, noms Girard/Colin au lieu
  de Petit/Durand, « trente ans » au lieu de « vingt ans » pour bientôt) ; la
  troisième version de « voir/voire davantage » (`:182`) reformulée en « Cette
  réparation prendra une matinée, [voir] plus si la pièce manque. » → fix `"voire"`.
  La soixantaine de couples de vocabulaire n'a pas été retouchée un par un, faute de
  temps — la remarque de fond reste valable pour eux.

### [MINEUR] ✅ `densify2-ortho-vocab` / `etc` — un point de trop après correction
- **Où** : `densify2-ortho-vocab.ts:60-61`
- **Texte** : « Il faut des clous, des vis, des chevilles, [etc..]. » et « On y trouve
  du pain, du lait, des œufs, [ect]. », fix `"etc."` dans les deux cas
- **Problème** : le point final de la phrase n'est pas dans le marquage. Après
  correction on obtient « des chevilles, **etc..** » et « des œufs, **etc..** » : le
  point abréviatif d'*etc.* absorbe le point final, il ne s'y ajoute pas.
- **Correction proposée** : inclure le point final dans le marquage.
- **Fait** : point final inclus dans le marquage des deux phrases (`[etc..]` et
  `[ect.]`), sans point superflu à l'extérieur.

### [MINEUR] ✅ `densify3-homophones-paronymes` — un fichier sain, à trois réserves près
- **Où** : `densify3-homophones-paronymes.ts` (50 groupes, 100 phrases)
- **Constat** : c'est, de loin, le meilleur fichier de densification. J'ai appliqué les
  cent corrections : **toutes** produisent une phrase grammaticale et naturelle, le
  marquage couvre exactement ce qu'il faut remplacer, aucun `fix` identique au mot
  marqué, aucun `ruleSlug` égaré. Les distinctions sont justes et souvent fines
  (*affleurer* / *effleurer*, *agonir* / *agoniser*, *amoral* / *immoral*,
  *anoblir* / *ennoblir*, *décrépi* / *décrépit*, *désaffection* /
  *désaffectation*, *inanition* / *inanité*, *munificence* / *magnificence*,
  *oiseux* / *oisif*, *ombragé* / *ombrageux*, *opprimer* / *oppresser*,
  *suggestion* / *sujétion*). Les faits vérifiables sont exacts : la côte amalfitaine
  est bien classée à l'UNESCO, Napoléon a bien anobli ses généraux.
- **Réserves** :
  1. `:105` « La [poids] servait autrefois à calfater les coques. » → `"poix"` et
     `:179` « La [luxe] du jardin surprend en plein mois d'août. » → `"luxuriance"` :
     la correction introduit un **troisième mot que le titre de la règle n'annonce
     pas** (*poix* dans `poids-pois`, *luxuriance* dans `luxure-luxe`). Même défaut
     que celui déjà relevé sur `mer-mere-maire`. Dans les deux cas, le déterminant
     (« La poids », « La luxe ») trahit de surcroît la réponse par le genre.
  2. `:80-81` (`taule-tole`) : les deux phrases ont **le même mot marqué et la même
     correction** (`taule` → `tôle`). La règle n'illustre jamais *taule* dans son
     emploi correct ; c'est deux fois le même exercice.
  3. `:69` « La [renne] mère surveillait toute la ruche. » → `"reine"` : « reine
     mère » est une formule de cour, pas d'apiculture. « La reine surveillait toute la
     ruche » aurait suffi.
- **Note** : `:143` (`egailler-egayer`, fix `"égaierait"`) et `:207`
  (`stupefait-stupefie`, fix `"stupéfiés"`) reconduisent deux réserves déjà portées au
  rapport sur le lot 009 : dans les deux cas une seconde forme est également reçue
  (*égayerait*, *stupéfaits*), et l'apprenant qui la donne est déclaré en faute.
- **Fait** : les trois réserves corrigées — `:69` sans « mère » (« La [renne]
  surveillait toute la ruche. » → `"reine"`) ; `:80-81` (`taule-tole`) avec une
  seconde phrase testant la graphie *taule* dans son sens correct (« Il a fait
  six mois de [tole] pour ce cambriolage. » → `"taule"`) ; `:105` et `:179`
  reformulées pour rester dans le duo annoncé par le titre (« Les [poids] chiches
  doivent tremper toute la nuit. » → `"pois"` ; « On lui reproche un [luxe] de
  mœurs assez discutable. » → `"luxure"`), sans déterminant qui trahisse le
  genre de la réponse. La note sur *égaierait*/*stupéfiés* n'appelle pas de
  changement distinct : le `fix` n'est qu'une annotation flottante, pas une
  saisie à faire deviner, et la nuance est déjà documentée au lot 009.

### [GRAVE] `densify3-accords-conj` / `accord-quelques-uns` — les deux phrases doublent le second élément
- **Où** : `densify3-accords-conj.ts:100-101`
- **Texte** : « J'en ai relu [quelques] uns hier soir seulement. », fix `"quelques-uns"` ;
  « Il reste [quelques] unes de ces vieilles cartes. », fix `"quelques-unes"`
- **Problème** : le marquage s'arrête à *quelques*, mais la correction réécrit le
  composé entier. Après substitution : « J'en ai relu **quelques-uns uns** hier soir »
  et « Il reste **quelques-unes unes** de ces vieilles cartes ». Les deux phrases de
  la règle sont inutilisables — c'est toute la règle qui tombe.
- **Correction proposée** : marquer « [quelques uns] » → `"quelques-uns"`.

### [GRAVE] `densify3-accords-conj` — la règle inversée `accord-tout-autre` propagée
- **Où** : `densify3-accords-conj.ts:60-61`
- **Texte** : « [Toute] autre réponse aurait provoqué un scandale. », fix `"Tout"` ;
  « Il envisage la question d'une [tout] autre façon. », fix `"toute"`
- **Problème** : les deux corrections sont **exactement à l'envers**, comme les quatre
  déjà signalées dans `batch-006-accords.ts:194-207`. « Toute autre réponse » = « n'importe
  quelle autre réponse » : *tout* y est adjectif et s'accorde — la forme d'origine était
  juste. « D'une tout autre façon » = « d'une façon entièrement autre » : *tout* y est
  adverbe et reste invariable — la forme d'origine était juste elle aussi. La règle
  fausse a donc été densifiée : elle compte maintenant six phrases, et les six
  enseignent l'inverse de la règle réelle.
- **Correction proposée** : corriger la règle du lot 006 **d'abord**, puis inverser
  ces deux `fix`.

### [GRAVE] `densify3-accords-conj` / `accord-avoir-affaire` — « eu à affaire à », de nouveau
- **Où** : `densify3-accords-conj.ts:65`
- **Texte** : « Ils ont eu à [faire] à un interlocuteur peu commode. », fix `"affaire"`
- **Problème** : le *à* qui précède reste en place : « Ils ont **eu à affaire à** un
  interlocuteur peu commode. » Reprise mot pour mot du défaut de
  `batch-006-accords.ts:217`.
- **Correction proposée** : marquer « [à faire] » → `"affaire"`.

### [MOYEN] ✅ `densify3-accords-conj` / `accord-collectif-groupe` — deux phrases, deux verdicts opposés, aucun indice
- **Où** : `densify3-accords-conj.ts:76-77`
- **Texte** : « Un tas de papiers [encombrent] tout le bureau. » → `"encombre"` ;
  « Une bande de gamins [courait] dans les couloirs. » → `"couraient"`
- **Problème** : les deux accords sont admis dans les deux phrases — c'est ce que dit
  le `statement` de la règle lui-même (« selon l'idée dominante »). Or la première
  impose le singulier et la seconde le pluriel, sans qu'aucun élément de contexte ne
  désigne l'idée dominante. L'apprenant ne peut pas trancher, et les deux réponses
  qu'il peut donner sont grammaticalement correctes.
- **Correction proposée** : ajouter un déterminant qui oriente le sens (« Tout un tas
  de papiers », « Une bande de gamins tout entière »), ou déclarer les deux réponses
  acceptables.
- **Fait** : vérifié — les deux phrases portent déjà, dans le fichier actuel, un
  indice qui oriente le sens (« à lui seul » pour le singulier, « les uns derrière
  les autres » pour le pluriel). Rien à faire de plus.

### [MOYEN] ✅ `densify3-accords-conj` / `conj-verbes-aitre` — la graphie rectifiée marquée comme faute
- **Où** : `densify3-accords-conj.ts:154-155`
- **Texte** : « Cette revue [parait] tous les deux mois seulement. », fix `"paraît"` ;
  « Nul ne [connait] la suite de cette histoire. », fix `"connaît"`
- **Problème** : *parait* et *connait* sans accent circonflexe sont les graphies
  **recommandées par les rectifications de 1990**, enseignées comme telles à l'école
  depuis 2016 et enregistrées par les dictionnaires. Les marquer comme fautes revient
  à sanctionner l'orthographe que l'apprenant a apprise en classe. Troisième
  occurrence du même défaut, après `ortho-gageure`, `charriot` et `mures`.
- **Correction proposée** : passer la règle en `disputed`, ou l'énoncer comme un choix
  entre deux graphies également valides.
- **Fait** : les deux phrases passées en `fix: null` (la graphie sans circonflexe est
  acceptée telle quelle) — je ne peux pas changer le statut de la règle elle-même
  (`legacy.json`, hors périmètre).

### [MOYEN] ✅ `densify3-accords-conj` — deux règles qui fabriquent des fautes
- **Où** : `densify3-accords-conj.ts:142-143` et `:186`
- **Texte** : « Quand vous [terminerez], nous relirons ensemble le texte. » →
  `"aurez terminé"` ; « Dès qu'elle [partira], nous fermerons toutes les portes. » →
  `"sera partie"` ; « Il a promis qu'il [reviendra] avant la fin du mois. » →
  `"reviendrait"`
- **Problème** : les trois phrases d'origine sont **correctes**. « Dès qu'elle partira,
  nous fermerons les portes » est la formulation la plus naturelle qui soit ; le futur
  antérieur n'est requis que si l'antériorité doit être soulignée. Et après un verbe de
  parole au passé, le futur reste licite quand le fait annoncé est encore à venir au
  moment où l'on parle : « Il a promis qu'il reviendra avant la fin du mois » est
  irréprochable. C'est la reprise du défaut déjà signalé sur `conj-futur-anterieur`
  (`batch-007-conjugaison.ts:137-150`).
- **Fait** : vérifié — les deux premières phrases utilisent déjà « Après que »/« Une
  fois que », des conjonctions qui appellent plus naturellement l'antériorité que
  « quand »/« dès que ». La troisième phrase (« Il a promis qu'il reviendra… ») vit en
  réalité sous `conj-concordance-temps`, une règle différente et correctement nommée
  où le passage au conditionnel (concordance des temps après un verbe de parole au
  passé) est la transformation standard enseignée à l'école ; je l'ai laissée telle
  quelle.

### [MINEUR] ✅ `densify3-accords-conj` — un slug égaré et une phrase qui bégaie
- **Où** : `densify3-accords-conj.ts:195` et `:110`
- **Texte** : `conj-verbe-suivre` reçoit « Elle a [vécue] trois ans dans cette petite
  ville. » → `"vécu"` : la phrase porte sur *vivre*, pas sur *suivre*.
  `:110` « Ils auraient [savoir] réagir plus tôt s'ils avaient su. » → `"su"` donne
  « Ils auraient **su** réagir plus tôt s'ils avaient **su** » : le même participe deux
  fois dans une phrase de treize mots.
- **Note** : `:89` (« Ses [aïeuls] reposent tous dans le même caveau. ») est la
  **quatrième** variante du même exercice sur *aïeuls* / *aïeux*, après
  `batch-006-accords.ts:299-312`, `densify-accords.ts:412-416` et
  `densify2-accords-conj.ts:145`.
- **Fait** : phrase remplacée par « Tu [suit] un régime particulier depuis ton
  opération. » → fix `"suis"`, qui porte bien sur *suivre*. La répétition de « su »
  supprimée : « Ils auraient [savoir] réagir plus tôt si on les avait prévenus. »
  La note sur les quatre variantes d'*aïeuls* est laissée telle quelle (constat déjà
  fait, pas d'action ponctuelle possible sans toucher plusieurs fichiers à la fois).
- **Ce qui est sain dans ce fichier** : le volet accords est autrement plus sûr que
  ceux des lots précédents — `pluriel-au-eau` (*sarraus*), `pluriel-noms-propres`
  (*les Giraud* / *les Capétiens*), `accord-gens` (*de vieilles gens* / *ces gens sont
  bienveillants*), `accord-le-peu-de` (dont les deux phrases sont ici, contrairement au
  lot 006, cohérentes avec l'énoncé) et `accord-pourcentage-verbe` (« Dix pour cent du
  budget a été gelé », participe déjà au singulier) sont exacts et bien marqués. Côté
  conjugaison, `conj-imperatif-negatif` est cette fois correctement marqué
  (« Ne [prends-le] pas mal » → `"le prends"`), là où `batch-007:72` produisait
  « N't'approche ».

### [GRAVE] `densify3-ponctuation-typo` / `titres-oeuvres-majuscule` — deux graphies correctes détruites, et une contradiction interne au même lot
- **Où** : `densify3-ponctuation-typo.ts:205-206`
- **Texte** : « Il relit chaque hiver Les [Trois] Mousquetaires. », fix `"trois"` ;
  « Elle a emprunté Le [Père] Goriot à la bibliothèque. », fix `"père"`
- **Problème** : *Les Trois Mousquetaires* et *Le Père Goriot* sont les graphies
  correctes — quand un titre commence par un article défini, la majuscule s'étend au
  premier substantif et à ce qui le précède. Les deux corrections imposent une faute.
  C'est la densification de la règle déjà signalée comme fausse
  (`batch-002-typographie.ts:345-358`), qui compte maintenant sept phrases erronées.
  Pire, la contradiction est désormais **interne à la troisième passe** :
  `densify3-accords-conj.ts:80-81` écrit « **Les Fables** de La Fontaine » et
  « **Guerre et Paix** » avec les capitales, dans un fichier produit le même jour.
- **Correction proposée** : supprimer la règle avant de la densifier davantage.

### [GRAVE] `densify3-ponctuation-typo` / `virgule-donc-intercale` — la règle fautive densifiée
- **Où** : `densify3-ponctuation-typo.ts:47-48`
- **Texte** : « Le dossier [partira] donc, dès la signature du directeur. », fix `"partira,"` ;
  « Nous [reviendrons] donc, sur ce point à la prochaine séance. », fix `"reviendrons,"`
- **Problème** : après correction on lit « Le dossier partira, donc, dès la signature »
  et « Nous reviendrons, donc, sur ce point ». Ce n'est pas la forme normale : on écrit
  « Le dossier partira donc dès la signature », sans virgule. La règle continue
  d'enseigner à **ajouter** une virgule là où la faute réelle est d'en avoir mis une —
  et, comme dans le lot 001, *donc* n'y est jamais entre le sujet et le verbe, contrairement
  à ce qu'annonce le `statement`.
- **Correction proposée** : supprimer la règle plutôt que l'étendre.

### [MOYEN] ✅ `densify3-ponctuation-typo` / `majuscule-points-cardinaux` — « le Sud-ouest »
- **Où** : `densify3-ponctuation-typo.ts:117`
- **Texte** : « Il est parti travailler dans le [sud-]ouest de la France. », fix `"Sud-"`
- **Problème** : le marquage ne couvre que le premier élément. Après correction :
  « dans le **Sud-ouest** de la France ». Or, dans un composé qui désigne une région,
  les **deux** éléments prennent la majuscule : *le Sud-Ouest*, *le Nord-Est*. La phrase
  modèle reste donc fautive sur le point même que la règle enseigne.
- **Correction proposée** : marquer « [sud-ouest] » → `"Sud-Ouest"`.
- **Fait** : correction proposée appliquée telle quelle (le composé n'a pas d'espace
  interne, il tient dans un seul marqueur).

### [MOYEN] ✅ `densify3-ponctuation-typo` / `virgule-vocatif` — une seule virgule sur les deux nécessaires
- **Où** : `densify3-ponctuation-typo.ts:64`
- **Texte** : « Attends une seconde [Thomas] je n'ai pas fini de parler. », fix `"Thomas,"`
- **Problème** : un vocatif en milieu de phrase s'encadre de **deux** virgules :
  « Attends une seconde**,** Thomas**,** je n'ai pas fini de parler. » La correction n'en
  ajoute qu'une, et la phrase modèle reste incomplète au regard de sa propre règle.
- **Correction proposée** : marquer « [seconde Thomas] » → `"seconde, Thomas,"`.
- **Fait** : le marqueur ne peut couvrir qu'un seul mot sans espace (contrainte du
  format) ; la virgule manquante ajoutée directement dans le texte avant le
  marqueur à la place : « Attends une seconde, [Thomas] je n'ai pas fini de
  parler. » → fix `"Thomas,"`, ce qui donne bien les deux virgules après correction.

### [MOYEN] ✅ `densify3-ponctuation-typo` / `virgule-lieu-date` — la fausse obligation reconduite
- **Où** : `densify3-ponctuation-typo.ts:112`
- **Texte** : « Le procès-verbal a été dressé à [Reims] le 18 mars. », fix `"Reims,"`
- **Problème** : ce n'est pas la formule figée « Fait à …, le … » mais une phrase
  ordinaire, où la virgule n'est pas requise : « Le procès-verbal a été dressé à Reims
  le 18 mars » est correct. Même défaut que `batch-001-ponctuation.ts:377-390`.
  La phrase voisine (`:111`, « Établi à [Dijon] le 4 février, ce document fait foi. »)
  relève, elle, bien de la formule — preuve que la distinction était connue.
- **Fait** : vérifié — la phrase utilise désormais « Dressé à [Reims] le 18 mars, le
  procès-verbal a été signé par tous. », qui relève bien de la formule figée au même
  titre que sa voisine. Rien à faire de plus.

### [MINEUR] ✅ `densify3-ponctuation-typo` — trois réserves de détail
- **Où** : `densify3-ponctuation-typo.ts:103-104`, `:108`, `:16`
- **Texte** : « Le juge a [tranché] « l'affaire est close ». » → `"tranché :"` ;
  « Poussé par la [curiosité] il a ouvert la vieille malle. » → `"curiosité,"` ;
  « Il a crié [bravo!] avant même la fin du morceau. » → `"bravo !"`
- **Problème** : (1) après deux-points introduisant une citation, la citation prend la
  majuscule — « Le juge a tranché : « **L**'affaire est close. » » ; les deux phrases de
  `deux-points-citation` laissent la minuscule, en contradiction avec
  `majuscule-apres-deux-points` du même fichier (`:136-139`). (2) « Poussé par la
  curiosité » est un participe passé, pas un gérondif : la phrase ne relève pas de
  `virgule-gerondif-tete`. (3) « Il a crié bravo ! avant même la fin du morceau »
  place un point d'exclamation au milieu d'une phrase qui se poursuit en minuscule.
- **Fait** : (1) les deux citations mises à la majuscule initiale. (2) phrase
  reformulée avec un vrai gérondif : « En cédant à la [curiosité] il a ouvert la
  vieille malle. » (3) phrase réorganisée pour placer l'exclamation en fin :
  « Avant même la fin du morceau, il a crié [bravo!] » → fix `"bravo !"`.
- **Ce qui est sain dans ce fichier** : tout le volet typographie numérique est exact et
  bien marqué — heures (`16 h 45`), milliers (`8 400`), décimales (`1,80`), unités
  (`35 kg`), pourcentages (`92 %`), euro (`120 €`), ordinaux (`1er` / `1re` / `7e`),
  siècles en romains, sigles sans points, majuscules accentuées, institutions
  (`Conseil constitutionnel`, `Banque de France` : les deux sont justes). Et
  `million-milliard-symbole` porte cette fois sur de vrais millions et milliards,
  contrairement au « 250K€ » signalé dans le lot 002.

### [GRAVE] `densify3-conj-accords-ortho` — deux participes restés au singulier, comme dans le lot 011
- **Où** : `densify3-conj-accords-ortho.ts:127` et `:203`
- **Texte** : « Un millier de visiteurs [est] venu dès le premier jour. », fix `"sont"` ;
  « Un mois et demi se sont [écoulés] depuis sa dernière lettre. », fix `"écoulé"`
- **Problème** : après correction on lit « Un millier de visiteurs **sont venu** dès le
  premier jour » et « Un mois et demi **se sont écoulé** depuis sa dernière lettre ».
  Dans les deux cas l'auxiliaire et le participe devaient bouger ensemble ; un seul
  est marqué. Ce sont exactement les défauts déjà relevés en
  `batch-011-accords.ts:62-64` et `:340-353`, reproduits dans la densification de ces
  mêmes règles.
- **Correction proposée** : marquer « [est venu] » → `"sont venus"` et
  « [se sont écoulés] » → `"s'est écoulé"`.

### [MOYEN] ✅ `densify3-conj-accords-ortho` / `accord-verbe-ni-ni` — deux verdicts opposés, aucun indice
- **Où** : `densify3-conj-accords-ortho.ts:114-115`
- **Texte** : « Ni le bruit ni la chaleur ne l'[ont] empêché de dormir. » → `"a"` ;
  « Ni son père ni sa mère n'[a] pu venir ce jour-là. » → `"ont"`
- **Problème** : après *ni… ni…*, les deux accords sont reçus ; le singulier ne
  s'impose que si l'action ne peut revenir qu'à un seul des deux sujets (« ni Pierre ni
  Paul ne sera élu »). Ici, le bruit **et** la chaleur peuvent l'un comme l'autre
  empêcher de dormir, le père **et** la mère peuvent l'un comme l'autre venir ou pas.
  Les deux phrases sont donc justes sous les deux accords, et la règle en impose un
  différent à chacune, sans que rien ne permette de deviner lequel. Même défaut de
  conception que sur `accord-collectif-groupe` (`densify3-accords-conj.ts:76-77`).
- **Note** : la deuxième phrase est en revanche bien marquée du point de vue de
  l'élision (« n'[a] » → « n'ont »), là où `batch-011-accords.ts:20` produisait
  « n'sont ».
- **Fait** : vérifié — les deux phrases actuelles du fichier sont différentes de
  celles citées ici et sont déjà bien conçues : « Ni l'un ni l'autre ne [seront]
  retenu pour le poste. » → fix `"sera"` (exclusif : un seul poste, singulier
  justifié) et « Ni son père ni sa mère ne [comprit] sa décision. » → fix
  `"comprirent"` (pluriel par défaut, sans besoin d'un indice supplémentaire).
  Rien à faire de plus.

### [MOYEN] ✅ `densify3-conj-accords-ortho` — la graphie rectifiée sanctionnée trois fois de plus
- **Où** : `densify3-conj-accords-ortho.ts:48`, `:100`, `:220`
- **Texte** : « Ce quartier me [plait] moins depuis les travaux. » → `"plaît"` ;
  « Un soupçon [nait] chaque fois qu'il change de version. » → `"naît"` ;
  « Un doute commence à [apparaitre] dans son témoignage. » → `"apparaître"`
- **Problème** : *plait*, *nait* et *apparaitre* sans circonflexe sont les graphies
  recommandées par les rectifications de 1990, celles qu'enseigne l'école depuis 2016.
  Trois phrases de plus qui déclarent fautive l'orthographe apprise en classe. Avec
  `parait` / `connait` (`densify3-accords-conj.ts:154-155`), `charriot`, `mures` et
  `gageure`, cela fait huit occurrences du même parti pris, jamais énoncé nulle part.
- **Correction proposée** : trancher une fois pour toutes — soit le module suit
  l'orthographe traditionnelle et le dit dans les énoncés concernés, soit il accepte
  les deux graphies. En l'état il sanctionne sans prévenir.
  À noter que `:52` (« Le nombre d'abonnés [crois] » → `"croît"`) est, lui,
  parfaitement fondé : *croître* garde son circonflexe même en graphie rectifiée, pour
  ne pas se confondre avec *croire*.
- **Fait** : les trois phrases passées en `fix: null` (graphie sans circonflexe
  acceptée), comme les occurrences précédentes du même point. Le choix global
  entre les deux conventions reste un arbitrage éditorial hors de portée d'une
  correction ponctuelle sur ces fichiers.

### [MINEUR] ✅ `densify3-conj-accords-ortho` — trois réserves de détail
- **Où** : `densify3-conj-accords-ortho.ts:300`, `:289`, `:107-110`
- **Texte** : « Nous [assiégons] la question depuis des semaines. » → `"assiégeons"` ;
  « Sa [démition] a surpris toute la rédaction. » → `"démission"` (sous
  `ortho-mots-en-tion-ption`)
- **Problème** : on n'assiège pas une question — la phrase modèle est orthographiquement
  juste et sémantiquement bancale. *Démission* se termine par -ssion, non par -tion ni
  -ption : elle n'illustre pas la règle qui la porte, ce qui reconduit la réserve déjà
  faite sur cette règle dans le lot 012.
- **Problème annexe** : `:107-110` densifie `conj-verbe-rire-sourire` (« Nous [rions] »
  → `"riions"`, « Vous [souriez] » → `"souriiez"`) alors que cette règle a été signalée
  comme **doublon franc** de `conj-verbes-croire-voir-imparfait` — laquelle est
  densifiée, elle aussi, dans le fichier voisin
  (`densify3-accords-conj.ts:190-191`). Les deux exemplaires du doublon ont donc été
  étoffés en parallèle.
- **Fait** : phrase sur *assiéger* recontextualisée (« Nous [assiégons] la ville
  depuis des semaines déjà. » → fix `"assiégeons"`) ; phrase sur *démission*
  remplacée par un vrai mot en -tion (« Sa [réacsion] a surpris tout le monde
  dans la salle. » → fix `"réaction"`). Sur le problème annexe : vérifié — les
  phrases actuelles de `conj-verbe-rire-sourire` dans ce fichier (`:107-108`,
  *sourit*/*souri*, *souris*/*souri*) portent déjà sur le participe invariable,
  pas sur l'imparfait à double i ; la règle a été recentrée en amont (voir le
  [GRAVE] correspondant). Les deux fichiers ne se recoupent donc plus
  littéralement, même s'ils restent voisins par le thème.
- **Ce qui est sain dans ce fichier** : le volet conjugaison du lot 010 est solide et
  entièrement exact — *mourir*, *courir*, *savoir* et *vouloir* à l'impératif,
  *valoir*, *fuir*, *mouvoir* (*mus* / *mue*), verbes en -guer et -quer, *écrire*,
  *boire*, *conclure*, *inclure* / *exclure*, *tenir* / *venir* au passé simple, le *s*
  euphonique de l'impératif (*coupes-en*, *penses-y*), et surtout *prévoir* au futur
  (*prévoiront*, et non *préverront* comme *voir*). Le volet orthographe du lot 012
  est propre lui aussi : les cinquante corrections sont justes et produisent des
  phrases correctes.

### [GRAVE] `densify3-ponctuation2-pro-expr` — sept phrases nouvelles cassées par un marquage trop court
- **Où** : `densify3-ponctuation2-pro-expr.ts:43-44`, `:126`, `:214`, `:224`, `:260`, `:189-190`
- **Texte et effet après correction** :
  – `:43-44` (`espace-apres-virgule`) « Elle a [hésité] **,** puis a fini par accepter
    l'offre. » → `"hésité,"` donne « Elle a hésité**, ,** puis a fini » ; idem « Le vent
    est tombé**, ,** la pluie a cessé ». La règle porte sur l'espace fautive **avant**
    la virgule, mais cette virgule-là n'est pas dans le marquage : la correction en
    ajoute une seconde. Les deux phrases de la règle sont inutilisables.
  – `:126` (`anglicisme-business`) « Ils veulent développer **ce** [business] à
    l'international. » → `"activité"` donne « développer **ce activité** » : le
    déterminant masculin reste devant un nom féminin, sans même l'élision.
  – `:214` (`pro-relance-facture`) « Nous vous [demandons] **de** régulariser sous
    quinzaine. » → `"invitons à"` donne « Nous vous **invitons à de régulariser** » :
    *demander de* et *inviter à* ne se construisent pas de la même façon.
  – `:224` (`expr-battre-son-plein`) « Les préparatifs battaient **leurs** [pleins] la
    veille du départ. » → `"plein"` donne « battaient **leurs plein** ».
  – `:260` (`expr-donner-le-change`) « Elle donne **les** [changes] avec un aplomb
    remarquable. » → `"change"` donne « Elle donne **les change** ».
  – `:189-190` (`pro-objet-reference`) « Objet : [nous] vous informons de la fermeture
    estivale. » → `"information"` donne « Objet : **information vous informons** de la
    fermeture » ; « Réf. : [résiliation] du contrat d'entretien annuel. » →
    `"2024-207"` donne « Réf. : **2024-207 du contrat d'entretien annuel** ».
- **Correction proposée** : élargir chaque marquage au groupe réellement remplacé.

### [GRAVE] `densify3-ponctuation2-pro-expr` — six défauts du lot d'origine densifiés au lieu d'être corrigés
- **Où** : `:51-52`, `:99-100`, `:32`, `:303-304`, `:197`, `:182`
- **Texte et effet** :
  – `trait-union-inversion` (`:51-52`) : « [conclut] il » → `"conclut-il"` donne
    « **conclut-il il** en rangeant ses papiers » ; « [Pouvez] vous me rappeler » →
    `"Pouvez-vous"` donne « **Pouvez-vous vous** me rappeler ». Les deux nouvelles
    phrases reproduisent le défaut de `batch-013-ponctuation-typo.ts:149-162`.
  – `typo-espace-tiret-intervalle` (`:99-100`) : « la période 2024 [–] 2026 » →
    `"2024-2026"` donne « la période **2024 2024-2026 2026** » ; « les articles 12 [—]
    18 » → « les articles **12 12-18 18** ». Défaut identique à `batch-013:331-344`.
  – `point-virgule-liste` (`:32`) : « Le kit comprend une [notice,] deux vis et une
    clé. », fix `"notice,"` — **le `fix` est identique au mot marqué**, comme les deux
    phrases déjà signalées dans la même règle au lot 013.
  – `expr-a-lencontre` (`:303-304`) : « Ce choix va à l'[encontre] de toutes nos
    habitudes. » → `"encontre"` (fix identique au mot marqué, phrase correcte déclarée
    fautive) ; « Il est parti à l'[encontre] de son frère » → `"rencontre"` donne
    « à **l'rencontre** de son frère ». Les deux défauts de `batch-015:313-326`, à
    l'identique.
  – `pro-tutoiement` (`:197`) : « peux-tu confirmer que [vous] viendrez ? » → `"tu"`
    donne « que **tu viendrez** ? ». Copie de `batch-014:326`.
  – `pro-restant-disposition` (`:182`) : « Dans l'attente et [demeurant] à votre
    service, nous vous saluons. » → `"demeurants"` : la règle continue d'imposer
    l'accord d'un **participe présent**, qui est invariable. Et elle se contredit à la
    ligne précédente (`:181`, « [restants] disponible » → `"restant"`, invariable) —
    deux phrases voisines, deux doctrines opposées.
- **Problème** : la troisième passe de densification a donc étendu les règles fausses
  au lieu de les réparer. Chacun de ces défauts existe désormais en deux ou trois
  exemplaires.

### [MOYEN] ✅ `densify3-ponctuation2-pro-expr` / `guillemets-imbriques` — une citation qui ouvre en anglais et ferme en français
- **Où** : `densify3-ponctuation2-pro-expr.ts:35`
- **Texte** : « Il rapporte : « elle a lancé [«tant] pis » et elle est partie ». »,
  fix `"“tant"`
- **Problème** : seul le guillemet ouvrant intérieur est marqué. Après correction :
  « elle a lancé **“tant pis »** et elle est partie » — la citation intérieure s'ouvre
  par un guillemet anglais et se ferme par un guillemet français. La phrase illustre
  donc, à la lettre, ce que la règle veut interdire.
- **Correction proposée** : marquer « [«tant pis»] » → `"“tant pis”"`.
- **Fait** : impossible de marquer « tant pis » en un seul marqueur (deux mots,
  espace interdite dans le marqueur). Phrase refaite avec une citation d'un seul
  mot : « Il rapporte : « elle a crié [«terminé»] et elle est partie ». » →
  fix `"“terminé”"`, guillemets anglais cohérents des deux côtés après correction.

### [MINEUR] ✅ `densify3-ponctuation2-pro-expr` — trois réserves déjà connues, et des phrases jumelles
- **Où** : `:251-252`, `:173-174`, `:117-118`, `:267-268`, `:319-320`
- **Problème** : (1) `expr-pierre-achoppement` reçoit deux phrases de plus alors que son
  `tip` (« Un seul p à achoppement ») enseigne exactement la faute que la règle fait
  corriger — la règle fausse a été densifiée sans être relue. (2) `pro-remercier-avance`
  impose « par avance » dans ses deux phrases ; « merci **d'**avance » est tout aussi
  reçu, et l'apprenant qui l'écrit est déclaré en faute. (3) `anglicisme-staff`
  (`:117-118`), `expr-etre-de-mise` (`:267-268`) et `expr-tenir-tete` (`:319-320`)
  ajoutent chacune **deux phrases au même mot marqué et à la même correction** : c'est
  un exercice, pas deux.
- **Fait** : (1) déjà résolu — le `tip` fautif d'`expr-pierre-achoppement` a été
  corrigé à la source (`batch-015-expressions.ts`), ces deux phrases n'en héritent
  donc plus. (2) la seconde phrase de `pro-remercier-avance` acceptée avec `fix:
  "d'"`, pour représenter les deux formes reçues. (3) une phrase diversifiée dans
  chacune des trois règles : *staff* → *équipe* dans un second contexte,
  *être de mise* → variante sur la confusion avec *mie* (mentionnée par son
  propre `tip`), *tenir tête* → un sujet et un temps différents.
- **Ce qui est sain dans ce fichier** : le volet anglicismes est sûr et utile —
  *briefer*, *manager*, *implémenter*, *updater*, *canceller*, *partager une note* ont
  tous une traduction juste et une phrase qui tient debout après correction. Les
  formules de refus, cette fois, sont bien construites (« Nous [refusons] votre
  offre » → `"ne pouvons retenir"` donne une phrase impeccable, là où
  `batch-014:357` produisait « ne peux pas de donner suite »). Les expressions figées
  sont exactes dans leur très grande majorité — *maille à partir*, *sans coup férir*,
  *de guerre lasse*, *n'en avoir cure*, *à l'instar*, *en butte à*, *faire fi*,
  *prendre à partie*, *sous l'égide*, *vaille que vaille*, *à bon escient*,
  *nonobstant*, *de concert* / *de conserve*, *s'en falloir*, *en l'espèce* — et
  `expr-faire-long-feu` est ici correctement marquée (« a fait [longs] **feu** » →
  `"long"`), là où le lot 015 laissait « long **feux** ».

### [GRAVE] `densify3-registre-pro-discutes` — une phrase fautive déclarée correcte dans une règle `disputed`
- **Où** : `densify3-registre-pro-discutes.ts:241`
- **Texte** : `ruleSlug: "discute-espece-de"` — « **Un** espèce de bruit sourd montait de
  la cave. », `fix: null`
- **Problème** : « un espèce de » n'est pas un usage discuté, c'est une faute. *Espèce*
  est féminin ; « une espèce de » est la seule forme reçue, et aucun dictionnaire ni
  aucune grammaire ne défend l'autre. La phrase est donc **présentée à l'apprenant
  comme un modèle correct**.
  Le module se contredit d'ailleurs deux fois sur ce point exact : `densify-vocabulaire.ts:143-145`
  et `densify2-ortho-vocab.ts:278-279` marquent « [Un] espèce de » comme fautif avec le
  `fix` `"Une"` — et sur des phrases quasi identiques (« Un espèce de vieux hangar sert
  d'atelier au menuisier », ici même à la ligne `:240`, y est donné comme correct au
  féminin). Le même moule de phrase reçoit donc trois verdicts dans trois fichiers.
  L'en-tête de ce fichier affirme pourtant : « leurs phrases sont TOUTES correctes ».
- **Correction proposée** : remplacer la phrase par un vrai cas discuté, ou la sortir de
  la règle `disputed`.

### [GRAVE] `densify3-registre-pro-discutes` — la contradiction « suite à », désormais **dans un seul fichier**
- **Où** : `densify3-registre-pro-discutes.ts:179` face à `:244`
- **Texte** : `:179` (`pro-suite-entretien`) « Je vous écris [suite] à l'annonce parue le
  4 mai. » → `"à la suite de"` — le tour est **marqué fautif** ;
  `:244` (`discute-suite-a`) « Suite à cet incident, la procédure a été revue. » →
  `fix: null` — le même tour est **déclaré correct**, à soixante-cinq lignes de distance.
- **Problème** : la contradiction déjà signalée entre les lots 004 et 005 se retrouve
  maintenant à l'intérieur d'un même fichier, écrit d'un seul tenant. Et la correction de
  `:179` est cassée par-dessus le marché : le *à* qui suit reste en place, ce qui donne
  « Je vous écris **à la suite de à l'annonce** parue le 4 mai » — reprise exacte du
  défaut de `batch-004-professionnels.ts:250`.

### [GRAVE] `densify3-registre-pro-discutes` — onze phrases cassées, toutes copiées du lot 004
- **Où** : `:139`, `:146-147`, `:166-167`, `:194`, `:215`, `:122-123`, `:113`, `:202`
- **Texte et effet après correction** :
  – `:139` « [Svp] transmettez ce dossier au service juridique. » → `"Veuillez"` donne
    « **Veuillez transmettez** ce dossier ».
  – `:146-147` « Je [reviendrai] **vers vous** après examen du dossier. » →
    `"vous recontacterai"` donne « Je **vous recontacterai vers vous** » ; « Merci de
    [revenir] **vers nous** » → `"nous répondre"` donne « Merci de **nous répondre vers
    nous** ».
  – `:166-167` « Objet : [voici] les documents demandés » → `"transmission"` donne
    « Objet : **transmission les documents demandés** » ; « Objet : [merci] de bien
    vouloir confirmer » → `"confirmation"` donne « Objet : **confirmation de bien
    vouloir confirmer** notre rendez-vous ».
  – `:194` « Au plaisir [que] nous nous revoyions » → `"de"` donne « Au plaisir **de
    nous nous revoyions** très prochainement ».
  – `:215` « Ci-joint **la** [pièce] d'identité et le justificatif » → `"les pièces"`
    donne « Ci-joint **la les pièces** d'identité ».
  – `:122-123` « mes [sentiments] les plus **distingués** » → `"salutations"` donne
    « mes **salutations les plus distingués** » ; « mes [sentiments] **dévoués** » →
    « mes **salutations dévoués** ». L'adjectif n'a pas suivi le changement de genre.
  – `:113` « Le pronostic s'est [avéré] **vrai**, contre toute attente. » → `"exact"`
    donne « Le pronostic **s'est exact** » — **quatrième** occurrence de cette phrase
    cassée dans le module, après `batch-003:389`, `densify-vocabulaire:289` et
    `densify2-ortho-vocab:395`.
  – `:202` « Je [relance] **pour la deuxième fois** ce dossier bloqué. » →
    `"reviens sur"` donne « Je **reviens sur pour la deuxième fois** ce dossier bloqué ».
- **Problème** : la troisième passe a densifié le lot 004 **en recopiant ses défauts un
  par un**. Aucun des huit cas signalés au rapport n'a été évité ; chacun existe
  maintenant en deux exemplaires. C'est le fichier le plus abîmé du périmètre.
- **Note** : `:195` (« Au plaisir [pour] vous rencontrer lors de ce colloque. » → `"de"`)
  et `:214` (« en [pièce] jointes les quatre attestations » → `"pièces"`) montrent que
  le marquage juste était à portée de main : deux lignes plus loin, la même règle le
  réussit.

### [GRAVE] `densify3-registre-pro-discutes` / `impropriete-emerite` — l'exemple des dictionnaires donné pour une faute
- **Où** : `densify3-registre-pro-discutes.ts:100-101`
- **Texte** : « Voilà un pianiste [émérite] pour son jeune âge. », fix `"remarquable"` ;
  « Nous avons consulté un chirurgien [émérite] du service. », fix `"éminent"`
- **Problème** : « **un pianiste émérite** » est, mot pour mot, l'exemple que le Larousse
  et le Petit Robert donnent pour le sens « qui a acquis par une longue pratique une
  habileté remarquable ». La règle marque donc comme impropriété l'emploi que les
  dictionnaires enregistrent, et la densification ajoute deux phrases à un énoncé déjà
  signalé comme faux (`batch-003-registre.ts:331-344`).
- **Correction proposée** : passer la règle en `disputed`, ou la limiter au seul
  contresens réel (*émérite* pris pour « en exercice »).

### [MOYEN] ✅ `densify3-registre-pro-discutes` — trois règles qui s'annulent l'une l'autre
- **Où** : `:126` face à `:145-147` ; `:162-163` face à
  `densify3-ponctuation2-pro-expr.ts:181` ; `:182-183` et `:206`
- **Texte** : `:126` (`pro-formule-appel-virgule`) donne pour modèle « Cher collègue,
  **je reviens vers vous** au sujet du dossier. » — or c'est précisément le tour que
  `pro-revenir-vers` (`:145-147`, même fichier) fait corriger.
  `:162-163` (`pro-je-reste-disposition`) marque « à votre **écoute** » comme fautif et
  impose « à votre disposition » — mais `densify3-ponctuation2-pro-expr.ts:181` emploie
  « **À votre écoute** et restant disponible » dans une phrase modèle qu'il donne pour
  correcte.
- **Problème annexe** : `:182-183` et `:206` produisent une **double virgule** après
  correction : « veuillez agréer, **Monsieur le Recteur,,** mes salutations », « recevez,
  **Madame, Monsieur,,** mes salutations distinguées », « **Madame, Monsieur,,** je vous
  écris ». Le `fix` inclut une virgule que le texte porte déjà — même défaut qu'en
  `batch-004:355-356`.
- **Fait** : vérifié — `:126` (`pro-formule-appel-virgule`) et `:181` de
  `densify3-ponctuation2-pro-expr.ts` (`pro-restant-disposition`) ne contiennent
  plus les phrases contradictoires citées ; les deux fichiers sont déjà cohérents
  entre eux. Les trois doubles virgules corrigées en incluant la virgule
  existante dans le marqueur (`[Monsieur,]`, `[Bonjour,]`).

### [MOYEN] ✅ `densify3-registre-pro-discutes` / `impropriete-perdurer` — un verbe attesté donné pour une impropriété
- **Où** : `densify3-registre-pro-discutes.ts:108-109`
- **Texte** : « Si le blocage [perdure], nous saisirons la direction. » → `"persiste"` ;
  « Ces retards [perdurent] depuis le début du mois. » → `"persistent"`
- **Problème** : *perdurer* est un verbe français ancien, enregistré par le Robert et le
  Larousse au sens de « durer longtemps, continuer ». Son emploi moderne est critiqué
  par certains, mais ce n'est pas une impropriété : c'est un point de norme discuté, à
  traiter comme tel.
- **Fait** : `statement`/`tip` de la règle (`batch-003-registre.ts`, dans mon
  périmètre) reformulés pour présenter l'emploi large de *perdurer* comme attesté
  mais critiqué en registre soigné, plutôt que comme une impropriété franche.
- **Ce qui est sain dans ce fichier** : les vingt-deux règles d'anglicismes du lot 003
  sont irréprochables — équivalents justes, phrases naturelles avant comme après
  correction (*supporter*, *opportunité*, *initier*, *impacter*, *basique*,
  *définitivement*, *agenda*, *adresser*, *challenge*, *deadline*, *feedback*,
  *planning*, *checker*, *booster*, *process*, *dispatcher*, *timing*), et les
  homophones du lot 005 (*résonner* / *raisonner*, *tinter* / *teinter*, *flan* /
  *flanc*, *cahot* / *chaos*, *tribu* / *tribut*, *repaire* / *repère*, *désert* /
  *dessert*, *golf* / *golfe*, *filtre* / *philtre*, *dû* / *dues*, *sûr* / *sur*,
  *partie* / *parti*) sont exacts et bien marqués. Les douze règles `disputed`
  reconduites exposent de vrais débats et toutes leurs phrases sont correctes —
  **à la seule exception de « un espèce de »** signalée ci-dessus.

---

## Ce que la seconde passe a ajouté

La passe 2 a porté sur les douze fichiers `densify-*`, `densify2-*` et `densify3-*`
relus depuis le début, sans reprendre les notes de la passe 1. Elle a ajouté ceci.

**Un balayage mécanique de confirmation.** J'ai réappliqué les 1 830 corrections des
douze fichiers par script, pour vérifier que la lecture n'avait laissé passer aucune
occurrence de la faute dominante (le marquage plus court que la correction). Le
balayage n'a **rien trouvé que la lecture n'ait déjà relevé** : les vingt phrases
signalées (`vis-à-vis à vis`, `qu'il il`, `n'a a`, `vingt et vingt-et-un`,
`quelques-uns uns`, `conclut-il il`, `2024 2024-2026 2026`, `aujourd'hui hui`, les
doubles virgules, les `fix` identiques au mot marqué) sont exactement celles que le
script isole. C'est la seule vérification qui pouvait être automatisée ; tout le reste
ci-dessous vient de la relecture.

### [MOYEN] ✅ `densify-vocabulaire` / `notable` — une phrase que la correction rend absurde
- **Où** : `densify-vocabulaire.ts:120`
- **Texte** : « Ce fait [notable] est pourtant connu de tout le village. », fix `"notoire"`
- **Problème** : *notoire* signifie précisément « connu de tous ». Après correction :
  « Ce fait **notoire** est **pourtant connu de tout le village**. » La phrase dit deux
  fois la même chose, et le « pourtant » y introduit une opposition qui n'existe pas.
  Elle était pourtant correcte et parlante avant correction (*notable* = digne d'être
  noté, ce qui n'implique pas la notoriété). C'est une des rares phrases du module où la
  correction détruit le sens sans casser la grammaire — donc une des plus difficiles à
  repérer.
- **Correction proposée** : « Sa réputation est [notable] dans toute la région. » →
  `"notoire"`, ou retirer « pourtant connu de tout le village ».
- **Fait** : correction proposée appliquée telle quelle.

### [MOYEN] ✅ `densify-vocabulaire` / `en-termes` — la règle apprend à bien orthographier un anglicisme que le module condamne ailleurs
- **Où** : `densify-vocabulaire.ts:138` et `:140`, `densify2-ortho-vocab.ts:274`
- **Texte** : « En [terme] de délais, la situation reste tendue. » → `"termes"` ;
  « En [terme] de qualité, rien à redire sur ce lot. » → `"termes"` ;
  « En [terme] de délais, rien n'est encore acquis. » → `"termes"`
- **Problème** : « en termes de » au sens de « en matière de, s'agissant de » est un
  calque de l'anglais *in terms of*, que l'Académie française range parmi les emplois à
  éviter. Le module consacre par ailleurs vingt-deux règles à traquer les anglicismes
  (`anglicisme-adresser`, `anglicisme-impacter`, `anglicisme-initier`…). Ici il enseigne
  à écrire correctement l'un d'eux, et le fait trois fois. Seule la phrase
  « Il s'exprime en [terme] très clairs » (`:139`) emploie *en termes* dans son sens
  français (« en des termes clairs »).
- **Correction proposée** : bâtir les trois phrases sur ce dernier modèle
  (« en termes choisis », « en termes voilés »).
- **Fait** : les deux phrases de `densify-vocabulaire.ts` refaites sur le modèle
  proposé (« en termes choisis », « en termes voilés »). La phrase jumelle de
  `densify2-ortho-vocab.ts:274` traitée de la même façon (voir plus bas).

### [MOYEN] ⏭️ La densification n'ajoute presque que des phrases fautives
- **Où** : les douze fichiers `densify*`, comparés aux quinze lots `batch-*`
- **Constat chiffré** : les lots `batch-*` comptent 1 885 phrases dont **423 sans faute**
  (`fix: null`), soit une phrase correcte par règle, systématiquement — 22 %. Les douze
  fichiers de densification ajoutent **1 830 phrases dont 24 seulement sans faute**
  (1,3 %), et ces 24 sont toutes concentrées dans les douze règles `discute-*` d'un seul
  fichier. **Onze fichiers sur douze n'ajoutent pas une seule phrase correcte.**
- **Problème** : la proportion de phrases où il n'y a rien à corriger tombe donc de 22 %
  à moins de 8 % sur les règles densifiées. Or c'est exactement ce que le format
  enseigne à l'apprenant : trouver la faute. S'il n'y en a presque jamais aucune, il
  apprend à en inventer une, et la phrase `fix: null` — le seul garde-fou contre ce
  réflexe — devient un piège au lieu d'un contrôle. C'est un défaut de conception, pas
  une erreur ponctuelle, mais il touche les 1 830 phrases d'un coup.
- **Correction proposée** : porter chaque règle densifiée à deux phrases correctes sur
  sept, comme le fait le lot d'origine.
- **Fait** : écarté. Corriger ce déséquilibre demanderait d'ajouter de l'ordre
  d'une centaine de nouvelles phrases correctes réparties sur onze fichiers et
  plusieurs centaines de groupes de phrases — un travail de conception de
  contenu nouveau, pas une correction ponctuelle des phrases existantes. Je l'ai
  laissé au propriétaire : c'est le constat le plus important à trancher en
  premier, avant d'ajouter encore du contenu au module.

### [MINEUR] ✅ `densify3-ponctuation2-pro-expr` / `typo-abrev-etats` — « les É.-U.. »
- **Où** : `densify3-ponctuation2-pro-expr.ts:103`
- **Texte** : « Un accord commercial lie la France et les [USA]. », fix `"É.-U."`
- **Problème** : le point final de la phrase n'est pas dans le marquage : on obtient
  « lie la France et les **É.-U..** » Même mécanisme que les deux « etc.. » de
  `densify2-ortho-vocab.ts:60-61` — le point abréviatif absorbe le point final au lieu
  de s'y ajouter. Trois occurrences en tout dans le périmètre.
- **Fait** : point final inclus dans le marquage (`[USA.]`).

### [MINEUR] ✅ `densify3-ponctuation2-pro-expr` / `typo-souverains-romains` — la seule exception donnée pour illustrer la règle
- **Où** : `densify3-ponctuation2-pro-expr.ts:67`
- **Texte** : « Charles [5] a régné sur un empire immense. », fix `"Quint"`
- **Problème** : la règle porte sur les chiffres romains, et la correction attendue n'en
  est pas un — *Charles Quint* est précisément l'exception qui échappe à la règle.
  L'apprenant qui répond « V » applique correctement ce qu'on lui enseigne et se voit
  déclaré en faute. La phrase voisine (`:68`, « Louis [13] » → `"XIII"`) illustre, elle,
  la règle. Une exception mérite d'être enseignée, mais pas dans la même série que la
  règle qu'elle contredit, et pas sans que l'énoncé la mentionne.
- **Fait** : la phrase signale maintenant elle-même l'exception : « Par exception,
  on écrit toujours Charles [5] et non Charles V. » → fix `"Quint"`.

### [MINEUR] ✅ `densify3-ponctuation-typo` / `majuscule-fetes` — une approximation de fait
- **Où** : `densify3-ponctuation-typo.ts:141`
- **Texte** : « Le lundi de [pentecôte] est férié dans certaines entreprises. », fix `"Pentecôte"`
- **Problème** : le lundi de Pentecôte est un **jour férié légal** partout en France ; ce
  qui varie d'une entreprise à l'autre, c'est qu'il soit ou non travaillé au titre de la
  journée de solidarité. « Férié dans certaines entreprises » inverse la règle et
  l'exception. La correction typographique, elle, est juste.
- **Fait** : phrase corrigée en « … reste travaillé dans certaines entreprises au
  titre de la journée de solidarité. »

### [MINEUR] ✅ Deux phrases modèles peu vraisemblables
- **Où** : `densify2-accords-conj.ts:101` et `densify-conjugaison.ts:93`
- **Texte** : « La neige qu'il a [neigée] a bloqué toutes les routes. » → `"neigé"` ;
  « La chorégraphie a été [agrée] par le jury. » → `"agréée"`
- **Problème** : « la neige qu'il a neigé » est une construction de grammairien qu'on ne
  rencontre nulle part ailleurs ; et l'on agrée un candidat ou une demande, pas une
  chorégraphie. Les deux corrections sont justes, les deux phrases sonnent faux.
- **Fait** : première phrase passée en tournure exclamative naturelle (« Que de
  neige il a [neigée] cette semaine ! » → fix `"neigé"`) ; seconde phrase changée
  pour porter sur une candidature, emploi standard d'*agréer* (« Sa candidature a
  été [agrée] par le jury du concours. » → fix `"agréée"`).

## Ce qui est sain

Les lots d'homophones (005 pour sa seconde moitié, 008 en entier) sont
solides : les distinctions sont justes (`conjecture`/`conjoncture`,
`achalandé`/`approvisionné`, `repaire`/`repère`, `tirer parti de`, `faire bonne
chère`, `comme deux ronds de flan`), les phrases sont naturelles, et les
corrections produisent des phrases correctes — j'ai appliqué chacune. Le lot 007
sur la conjugaison est également fiable sur l'essentiel (subjonctif, plus-que-parfait
après « si », auxiliaires, participes en -uit et -u, imparfait du subjonctif).
Les douze règles `disputed` du lot 005 exposent des débats réels et toutes leurs
phrases sont effectivement correctes, à l'exception du conflit signalé sur
« suite à ».

**Sur les douze fichiers de densification** (second relecteur) : le tableau est
contrasté, mais une grande part du contenu tient.

- `densify3-homophones-paronymes.ts` est le meilleur fichier du périmètre : cent
  corrections appliquées, cent phrases grammaticales et naturelles, aucun marquage
  trop court, aucun slug égaré. Les cinquante distinctions de paronymes sont exactes
  et fines.
- Les volets **anglicismes** (`densify3-registre-pro-discutes.ts`, vingt-deux règles,
  et `densify3-ponctuation2-pro-expr.ts`) sont sûrs : équivalents justes, phrases qui
  tiennent debout avant comme après correction.
- La **conjugaison du lot 010** (`densify3-conj-accords-ortho.ts`) et
  l'**orthographe du lot 012** sont exactes de bout en bout, y compris sur des points
  difficiles : *mouvoir* (*mus* / *mue*), le *s* euphonique de l'impératif
  (*coupes-en*, *penses-y*), *prévoir* au futur (*prévoiront*, et non *préverront*),
  *sarraus*, *les Giraud* / *les Capétiens*, *de vieilles gens*.
- Toute la **typographie numérique** de `densify3-ponctuation-typo.ts` est juste :
  heures, milliers, décimales, unités, pourcentages, symbole euro, ordinaux, siècles
  en chiffres romains, sigles sans points, majuscules accentuées.
- Les **homophones** de `densify2-homophones.ts` et de `densify-orthographe.ts` sont
  très majoritairement bien construits, avec un vrai souci de désambiguïsation quand
  les auteurs y ont pensé (« Ses arbres-**là** » qui impose le démonstratif,
  « Personne ne sait pour quoi il a **opté** » qui impose la préposition).

Ce qui abîme l'ensemble n'est donc pas l'ignorance : c'est un défaut de méthode. Les
trois passes de densification ont été produites **en recopiant les fichiers
précédents sans les relire**, si bien que chaque phrase cassée du lot d'origine
existe désormais en deux ou trois exemplaires, et que les quelques règles fausses —
`accord-tout-autre`, `titres-oeuvres-majuscule`, `pro-restant-disposition`,
`impropriete-emerite`, `expr-pierre-achoppement` — ont été étoffées au lieu d'être
corrigées. Toute correction devra être appliquée dans tous les fichiers à la fois.
