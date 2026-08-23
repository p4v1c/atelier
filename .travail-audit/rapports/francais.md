# Français — module « l'Atelier » (prisma/seed/batches, hors dictations)

> ÉTAT : passe 1 en cours. Lus : batch-001 à batch-015 + densify-homophones + densify-accords (17 fichiers, 375 règles, ~2130 phrases). Reste : densify-conjugaison, densify-orthographe, densify-vocabulaire, densify2-* (3), densify3-* (6) — 12 fichiers.

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

Les fichiers `densify-*` ne contiennent pas de règles : ils ajoutent des phrases
à des règles du lot « legacy » qui vivent hors de `batches/`. Je les ai donc jugés
sur la seule phrase et sa correction, sans pouvoir vérifier l'accord avec
l'énoncé de la règle visée.

Total lu à ce stade : **375 règles et 101 groupes d'ajouts, ~2110 phrases**.

**Avertissement d'honnêteté** : le périmètre complet fait une trentaine de
fichiers et près de 10 000 lignes. Ce rapport ne couvre pour l'instant que les
huit fichiers listés ci-dessus. Les 21 autres n'ont pas encore été ouverts.

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

### [MOYEN] `virgule-oui-non` — une phrase illustre une autre règle
- **Où** : `batch-001-ponctuation.ts:341` — slug `virgule-oui-non`
- **Texte** : « Elle a répondu : [oui] mais sans la moindre conviction. », fix `"oui,"`
- **Problème** : le `statement` dit « **En tête de phrase**, oui et non se détachent
  par une virgule ». Ici « oui » n'est pas en tête de phrase, et la virgule
  demandée relève en réalité de la règle `virgule-mais`.

### [MOYEN] `tiret-incise` — un « jamais » de trop
- **Où** : `batch-001-ponctuation.ts:320` — slug `tiret-incise`
- **Texte** : « Une incise peut s'encadrer de <b>tirets longs</b> — comme ici — mais jamais d'un seul. »
- **Problème** : un tiret unique est parfaitement correct lorsque l'incise se
  termine avec la phrase : « Il n'a rien dit — comme d'habitude. » L'énoncé
  absolu est faux.

### [MOYEN] `virgule-complement-tete` — obligation présentée pour un usage recommandé
- **Où** : `batch-001-ponctuation.ts:182-195`
- **Problème** : la virgule après un complément court placé en tête est
  recommandée, non obligatoire. Le `statement` (« se sépare du reste par une
  virgule ») ne le dit pas.

### [MOYEN] `abrev-numero` — le `statement` et le `tip` se contredisent
- **Où** : `batch-002-typographie.ts:135-148`
- **Texte** : statement « « numéro » s'abrège <b>n°</b> — jamais No, jamais n. » ;
  tip « Le petit o est en exposant, pas un zéro ni la lettre O. »
- **Problème** : le `tip` décrit la forme « nᵒ » (o supérieur), que le `statement`
  interdit explicitement sous la graphie « No ». Le `fix` retenu (« n° ») emploie
  le signe degré, précisément ce que le `tip` semble écarter.

### [MOYEN] `euro-place` — la correction change la devise, pas la place du symbole
- **Où** : `batch-002-typographie.ts:309` — slug `euro-place`
- **Texte** : « Le loyer s'élève à [$800] par mois, charges non comprises. », fix `"800 €"`
- **Problème** : la règle porte sur la **position** du symbole ; la correction
  transforme silencieusement des dollars en euros. La faute exercée n'est pas
  celle qu'annonce la règle.

### [MOYEN] `nombres-en-lettres` — une convention de style donnée pour une règle
- **Où** : `batch-002-typographie.ts:330-343`
- **Texte** : « les nombres <b>de zéro à seize</b> s'écrivent en lettres »
- **Problème** : le seuil varie selon les codes typographiques (dix, seize, ou
  « tout ce qui s'écrit en un mot »). Présenté comme une règle unique, sans
  mention qu'il s'agit d'un choix de maison.

### [MOYEN] `date-premier-jour` — une phrase relève d'une autre règle du même lot
- **Où** : `batch-002-typographie.ts:324`
- **Texte** : « La réunion est fixée au [2ème] mardi de chaque mois. », fix `"2e"`
- **Problème** : c'est l'illustration de `abrev-ordinaux` (même lot, même
  correction « 2ème » → « 2e »), pas de la règle du 1er du mois.

### [MOYEN] `million-milliard-symbole` — une phrase hors sujet, et un `fix` qui contredit le titre
- **Où** : `batch-002-typographie.ts:385`
- **Texte** : « Elle a reçu [250K€] de subventions pour lancer son atelier. », fix `"250 000 euros"`
- **Problème** : 250 000 n'est ni un million ni un milliard, et la correction
  produit des **chiffres**, alors que le titre promet « en toutes lettres ».

### [MOYEN] `tic-sur-paris` — le `statement` est lui-même agrammatical
- **Où** : `batch-003-registre.ts:289`
- **Texte** : « On habite <b>à</b> une ville, on travaille <b>à</b> Lyon. »
- **Problème** : « habiter à une ville » n'est pas français. Il fallait « on habite
  **dans** une ville » ou « on habite **à** Lyon ».

### [MOYEN] `anglicisme-versatile` — la phrase corrigée reste fautive ailleurs
- **Où** : `batch-003-registre.ts:131`
- **Texte** : « Ce logiciel très [versatile] gère aussi bien texte que image. », fix `"polyvalent"`
- **Problème** : après correction subsiste « aussi bien texte **que image** » —
  élision manquante (« qu'image ») et articles absents. La phrase modèle reste
  fautive.

### [MOYEN] `pro-excuses` — « vous prie de l'excuser auprès de vous »
- **Où** : `batch-004-professionnels.ts:326`
- **Texte** : « L'équipe [s'excuse] auprès de vous pour cette erreur de facturation. », fix `"vous prie de l'excuser"`
- **Problème** : donne « L'équipe **vous prie de l'excuser auprès de vous** pour
  cette erreur ». Redondance produite par la correction.
- **Note** : la règle affirme par ailleurs comme un fait que « s'excuser, c'est se
  pardonner ». C'est une position prescriptive contestée (Grevisse admet
  « je m'excuse »), et la règle n'est pas marquée `disputed`.

### [MOYEN] `pro-bonjour-monsieur` — double virgule après correction
- **Où** : `batch-004-professionnels.ts:355-356`
- **Texte** : « [Bonjour], je vous adresse ma candidature au poste proposé. », fix `"Madame, Monsieur,"`
- **Problème** : la virgule d'origine subsiste : « Madame, Monsieur**,,** je vous
  adresse… ». Idem pour « [Salut], vous trouverez ci-joint… ».

### [MOYEN] `pro-accuser-reception` — « accuser bonne réception » n'est pas une faute
- **Où** : `batch-004-professionnels.ts:219`
- **Texte** : « Je vous confirme accuser [bonne] réception des pièces jointes. », fix `"à supprimer"`
- **Problème** : « accuser bonne réception » est une formule commerciale attestée
  et correcte. De plus le `statement` porte sur l'**article**, pas sur un adjectif.

### [MOYEN] `accord-sans-complement` — des faits de style transformés en fautes
- **Où** : `batch-006-accords.ts:224-237`
- **Texte** : « Il a rendu une copie sans [fautes], à la virgule près. » → fix `"faute"`
- **Problème** : « une copie sans fautes » comme « sans faute » sont l'un et l'autre
  corrects ; le `statement` le reconnaît (« selon qu'on en attendrait un seul ou
  plusieurs »). Marquer une des deux formes comme fautive dans quatre phrases est
  incohérent avec l'énoncé.

### [MOYEN] `sur-sur-accent` — l'astuce est mise en défaut par une phrase de la même règle
- **Où** : `batch-005-discutes.ts:377-390`
- **Texte** : tip « Remplace par « certain » : si la phrase tient, mets l'accent. » ;
  phrase « Ce chemin n'est pas très [sur] par temps de pluie. » → fix `"sûr"`
- **Problème** : ici « sûr » signifie « sans danger », pas « certain » :
  « Ce chemin n'est pas très certain » ne tient pas, et l'astuce conduirait à ne
  pas mettre l'accent.

### [MOYEN] `du-du-accent` — la phrase modèle est douteuse
- **Où** : `batch-005-discutes.ts:373`
- **Texte** : `fix: null` — « J'ai dû reprendre le travail dû à mon collègue absent. »
- **Problème** : « le travail dû à mon collègue » signifie « le travail qu'on lui
  doit », alors que le sens visé est « le travail de mon collègue ». La tournure
  « dû à » au sens causal est de surcroît critiquée. Mauvaise phrase modèle.

### [MOYEN] `discute-au-temps-pour-moi` — « plusieurs grammairiens » est excessif
- **Où** : `batch-005-discutes.ts:53`
- **Texte** : « Plusieurs grammairiens défendent <b>autant pour moi</b>, jugé plus logique. »
- **Problème** : la défense d'« autant pour moi » est essentiellement le fait de
  Claude Duneton et de quelques suiveurs ; elle reste minoritaire. « Plusieurs
  grammairiens » donne à une hypothèse isolée le poids d'un courant.

### [MOYEN] `conj-verbes-uire` — énoncé trop général
- **Où** : `batch-007-conjugaison.ts:170`
- **Texte** : « Les verbes en <b>-uire</b> font leur participe passé en <b>-uit</b> »
- **Problème** : faux pour *nuire* (nui) et *luire* (lui). L'énoncé devrait se
  limiter aux verbes cités.

### [MOYEN] `conj-verbes-aitre` — la réforme de 1990 n'est pas mentionnée
- **Où** : `batch-007-conjugaison.ts:182-195`
- **Problème** : « il connait », « il paraitra » sans accent sont admis depuis les
  rectifications de 1990 et enseignés à l'école. Les marquer comme fautes sans
  aucune nuance, dans un module qui possède par ailleurs un statut `disputed`,
  est un choix non signalé.

### [MOYEN] `conj-verbes-croire-voir-imparfait` — une phrase hors du champ de la règle
- **Où** : `batch-007-conjugaison.ts:327`
- **Texte** : « Autrefois, nous [travaillons] tous les samedis matin. », fix `"travaillions"`
- **Problème** : le `statement` vise les radicaux terminés « par y ou i » ;
  *travailler* a un radical en -ill-. Le cas est voisin mais n'est pas couvert.

### [MOYEN] `conj-verbe-suivre` — deux phrases sur quatre n'illustrent pas la règle
- **Où** : `batch-007-conjugaison.ts:340-341`
- **Texte** : le `statement` porte sur l'homonymie « je suis » / « je vis » ; les
  phrases « Elle a [vécue] dix ans à l'étranger » et « Nous avons [suivis] ses
  conseils » relèvent de l'accord du participe passé.

### [MOYEN] `pouce-pousse` — astuce fausse
- **Où** : `batch-008-homophones.ts:212`
- **Texte** : « Le pouce est unique, avec un seul s ; la pousse pousse, avec deux. »
- **Problème** : « pouce » ne contient **aucun** s. L'astuce affirme le contraire et
  ne peut qu'égarer.

### [MOYEN] `taule-tole` — « en tôle » pour la prison n'est pas une faute
- **Où** : `batch-008-homophones.ts:278`
- **Texte** : « Il a passé trois ans en [tôle] pour cette affaire. », fix `"taule"`
- **Problème** : les dictionnaires donnent « taule **ou** tôle » au sens familier de
  prison. La phrase d'origine n'est pas fautive.

### [MOYEN] Tension entre `discute-espece-de` et `accord-espece-sorte-de`
- **Où** : `batch-005-discutes.ts:98-112` et `batch-006-accords.ts:314-327`
- **Texte** : lot 005, tip : « garde le féminin : **espèce reste le noyau du groupe** » ;
  lot 006, tip : « Le mot important est **celui qui suit « de »** : c'est lui qu'on décrit. »
- **Problème** : les deux astuces désignent des noyaux opposés. Les règles portent
  sur deux points distincts (genre du déterminant / accord de l'adjectif), mais
  rien ne le dit à l'apprenant.

### [MOYEN] `conj-verbe-ecrire` — l'astuce est démentie par une phrase de la même règle
- **Où** : `batch-010-conjugaison.ts:238-251`
- **Texte** : tip « Le v n'apparaît qu'à partir du pluriel : j'écris, nous écrivons. » ;
  phrase « Elle [écrit] trois pages en moins d'une heure hier soir. », fix `"écrivit"`
- **Problème** : *écrivit* est un singulier, et il porte le v. L'astuce est fausse
  telle qu'elle est formulée (le v appartient au radical de tous les temps sauf le
  présent du singulier et le futur). La phrase 2 relève d'ailleurs de la
  concordance des temps (« hier soir » avec un présent), pas de l'alternance du
  radical.

### [MINEUR] `conj-verbe-vouloir-imperatif` — l'astuce change de verbe en route
- **Où** : `batch-010-conjugaison.ts:107`
- **Texte** : « Veuillez agréer, mais « ne m'en veux pas » : deux impératifs, deux registres. »
- **Problème** : « ne m'en veux pas » n'est pas l'impératif de *vouloir* mais de la
  locution *en vouloir à*. L'opposition proposée ne porte pas sur le même verbe.

### [MINEUR] `conj-verbe-plaire` et `conj-verbe-croitre` — redites partielles
- **Où** : `batch-010-conjugaison.ts:148-161` et `:163-176`
- **Problème** : la première reprend l'accent circonflexe devant *t* déjà enseigné
  par `conj-verbes-aitre` (`batch-007:182`) — son propre `tip` le reconnaît
  (« Comme connaître »). La seconde recoupe `cru-cru-accent`
  (`batch-008:13-26`) sur le couple *cru*/*crû*.

### [MINEUR] `conj-verbe-rire-sourire` — une phrase hors sujet
- **Où** : `batch-010-conjugaison.ts:382`
- **Texte** : « Il a [rit] de bon cœur pendant tout le spectacle. », fix `"ri"`
- **Problème** : c'est le participe passé, pas l'imparfait à double i qu'annonce
  le `statement`.

### [MOYEN] `accord-verbe-ou` — la correction change le mode, pas le nombre
- **Où** : `batch-011-accords.ts:34`
- **Texte** : « Un accident ou une panne [expliqueront] ce retard. », fix `"expliquerait"`
- **Problème** : la règle porte sur le **nombre** ; la correction attendue serait
  « expliquerait » **ou** « expliquera » ? Le `fix` bascule au conditionnel, ce que
  ni le `statement` ni le `tip` n'annoncent. L'apprenant ne peut pas déduire ce
  changement de mode de la règle qu'on lui a donnée.

### [MOYEN] `accord-de-meme-que` — « comme » n'est pas dans la règle, et la phrase n'est pas fautive
- **Où** : `batch-011-accords.ts:95`
- **Texte** : « Toute la journée, le chien comme le chat [dorment] paisiblement. », fix `"dort"`
- **Problème** : le `statement` ne mentionne que *de même que* et *aussi bien que*.
  Or « le chien comme le chat dorment » est un accord parfaitement admis, *comme*
  pouvant coordonner. La règle fabrique ici une faute.

### [MOYEN] `pluriel-adjectifs-composes` — une phrase relève de la règle suivante
- **Où** : `batch-011-accords.ts:155`
- **Texte** : « Des tissus [bleu-clairs] ont été choisis pour les rideaux. », fix `"bleu clair"`
- **Problème** : c'est exactement l'objet de `accord-couleur-composee`, la règle
  **immédiatement suivante dans le même fichier** (`:160-173`), qui contient déjà
  « Elle a les yeux bleu [clairs] » → `"clair"`. Doublon interne.

### [MOYEN] `accord-nom-apres-des` — un fait de registre présenté comme une faute, et un titre qui ne dit pas la règle
- **Où** : `batch-011-accords.ts:370-383`
- **Texte** : statement « Après <b>des</b> partitif, le nom se met au pluriel… » ;
  tip « On dit « de belles maisons », pas « des belles maisons », **dans un
  français soigné**. »
- **Problème** : *des* devant un adjectif épithète est courant et toléré ; le `tip`
  le reconnaît en réservant la forme à un « français soigné », mais les quatre
  phrases sont marquées comme fautives. Par ailleurs *des* n'est pas ici un
  article **partitif** mais l'article indéfini pluriel, et le titre (« Un nom après
  « des » au sens de quelques ») ne décrit pas la règle enseignée.

### [MOYEN] Quatre règles pour un seul mécanisme : l'accord après un quantifieur
- **Où** : `batch-006-accords.ts:179` (`accord-pourcentage-verbe`), `:254` (`accord-collectif-groupe`),
  `batch-011-accords.ts:40` (`accord-fraction`), `:55` (`accord-dizaine`),
  plus `batch-005-discutes.ts:34` (`discute-moitie-accord`)
- **Problème** : cinq règles enseignent la même chose — le verbe s'accorde avec le
  quantifieur ou avec son complément selon l'idée dominante — avec des `statement`
  presque interchangeables. Pire, `discute-moitie-accord` traite le cas comme
  ouvert (`disputed`, toutes phrases correctes) alors que les quatre autres
  tranchent et marquent des fautes.

### [MINEUR] `accord-madame-le-titre` — une phrase illustre autre chose
- **Où** : `batch-011-accords.ts:363`
- **Texte** : « Monsieur le maire et son adjoint [assistera] à la séance. », fix `"assisteront"`
- **Problème** : il s'agit d'une coordination de deux sujets, pas du « noyau
  madame/monsieur » qu'annonce le `statement`.

### [MINEUR] `accord-nom-propre-marque` — une phrase où la correction ne change que la majuscule
- **Où** : `batch-011-accords.ts:215`
- **Texte** : « Elle a acheté deux [Kleenex] en promotion ce matin. », fix `"kleenex"`
- **Problème** : la règle promet un accord au pluriel une fois le mot devenu nom
  commun ; *kleenex* reste identique. L'exemple n'illustre rien.

### [MINEUR] `accord-participe-ayant` — nuance manquante
- **Où** : `batch-011-accords.ts:190-203`
- **Problème** : le `tip` affirme qu'« un participe présent ne s'accorde jamais ».
  Vrai, mais le nom *ayant droit* fait *les ayants droit* — et la règle emploie
  précisément « les familles ayant droit », ce qui invite à la confusion sans la
  lever.

### [MOYEN] `ortho-lettres-grecques-rh` — « rythme » n'a pas de rh
- **Où** : `batch-012-orthographe.ts:208` — slug `ortho-lettres-grecques-rh`
- **Texte** : « Les mots venus du grec gardent <b>rh</b> : rhume, rhétorique, rhinocéros, **rythme**. »
- **Problème** : *rythme* s'écrit r-y-t-h-m-e : le h n'y suit pas le r, il suit le t.
  Le mot n'illustre pas la règle et donne à croire qu'il faudrait écrire
  « rhythme ». Erreur de fait dans une liste d'exemples.
- **Correction proposée** : remplacer *rythme* par *rhapsodie*, *rhododendron* ou *rhubarbe*.

### [MOYEN] `ortho-irriter-irrigation` — une explication étymologique fausse
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

### [MOYEN] `ortho-agrafe-aggraver` — « seul aggraver double le g » est faux
- **Où** : `batch-012-orthographe.ts:44`
- **Texte** : tip « Seul aggraver double le g : c'est l'exception à retenir. »
- **Problème** : *agglomération*, *aggloméré*, *agglutiner*, *aggravation* doublent
  aussi le g. L'astuce affirme une exclusivité qui n'existe pas.

### [MOYEN] `ortho-gageure` — la graphie rectifiée est marquée comme faute
- **Où** : `batch-012-orthographe.ts:123` et `:125`
- **Texte** : « C'est une véritable [gageüre] que d'y parvenir seul. », fix `"gageure"`
- **Problème** : *gageüre*, avec tréma sur le u, est précisément la graphie
  **recommandée par les rectifications orthographiques de 1990**, dont l'objet
  était de faire correspondre l'écriture à la prononciation « ga-jure ». La règle
  la marque comme fautive deux fois, et son titre (« gageure, sans tréma ») en
  fait un interdit. À signaler comme variante, non comme faute.

### [MOYEN] `ortho-mots-en-cial-tial` — deux phrases sur quatre sont hors du son annoncé
- **Où** : `batch-012-orthographe.ts:364-365`
- **Texte** : statement « Le son <b>[sjal]</b> s'écrit -cial ou -tial » ;
  phrases « Cette clause est purement [partiel] et provisoire. » → `"partielle"` et
  « Un traitement [préférenciel] leur a été accordé. » → `"préférentiel"`
- **Problème** : *partielle* et *préférentiel* se terminent en [sjɛl], pas en
  [sjal]. De plus la première correction porte en réalité sur l'accord au féminin,
  pas sur le choix c/t.

### [MOYEN] `ortho-mots-en-tion-ption` — l'énoncé n'explique pas deux de ses quatre phrases
- **Où** : `batch-012-orthographe.ts:280-293`
- **Texte** : statement « -ption après une consonne du radical … et -ssion après un
  radical en -mettre » ; phrases « La [perssion] du public… » → `"pression"` et
  « Cette [exeption]… » → `"exception"`
- **Problème** : *pression* ne vient pas d'un verbe en -mettre, et *exception*
  n'est pas couverte par la formulation retenue. La règle laisse deux fautes sans
  méthode pour les résoudre.

### [MOYEN] `ortho-mots-en-isme` — une phrase reste fautive après correction
- **Où** : `batch-012-orthographe.ts:318`
- **Texte** : « Dans la nuit, un [séïsme] de faible intensité a surpris tous. », fix `"séisme"`
- **Problème** : « a surpris **tous** » n'est pas français : il fallait « a surpris
  tout le monde » ou « les a tous surpris ». La phrase modèle reste incorrecte une
  fois la correction appliquée.

### [MINEUR] `ortho-balade-ballon` — astuce qui ne couvre pas sa propre liste
- **Où** : `batch-012-orthographe.ts:74`
- **Texte** : « Ce qui est rond ou dansé prend deux l : ballon, ballet. »
- **Problème** : *ballot*, cité dans le `statement` de la même règle, n'est ni rond
  ni dansé.

### [MOYEN] `typo-temperature` — l'énoncé se contredit en une phrase
- **Où** : `batch-013-ponctuation-typo.ts:259`
- **Texte** : « Le symbole de degré **se colle au nombre** et l'unité suit : <b>20 °C</b>, **avec une espace avant le degré**. »
- **Problème** : « se colle au nombre » et « une espace avant le degré » sont
  incompatibles. L'exemple donné (20 °C) tranche pour l'espace ; la première moitié
  de l'énoncé enseigne donc le contraire de ce que la règle exerce.

### [MOYEN] `typo-italique-mots-etrangers` — la règle énoncée n'est jamais exercée
- **Où** : `batch-013-ponctuation-typo.ts:226-239`
- **Problème** : le `statement` porte sur l'**italique**, mais aucune des quatre
  corrections n'ajoute d'italique : elles rectifient un trait d'union
  (*curriculum-vitae*), un accent (*à priori*, *postériori*) ou une soudure
  (*in-extremis*). La règle enseignée et la règle exercée ne sont pas la même.

### [MOYEN] `typo-majuscule-mots-composes` — Bourg-en-Bresse n'est pas un village
- **Où** : `batch-013-ponctuation-typo.ts:325`
- **Texte** : « Elle vient de Bourg-en-[bresse], **un village de l'Ain**. »
- **Problème** : Bourg-en-Bresse est la préfecture de l'Ain, une ville d'environ
  quarante mille habitants. Erreur de fait dans une phrase d'exercice.

### [MOYEN] `point-interrogation-indirecte` — deux phrases quasi identiques dans la même règle
- **Où** : `batch-013-ponctuation-typo.ts:171` et `:175`
- **Texte** : « Il se demande si le train partira bien à l'heure [?] » (fautive) et
  « Il se demande si le train partira à l'heure. » (`fix: null`)
- **Problème** : c'est la même phrase à un adverbe près. La phrase déclarée
  correcte n'apprend rien de plus que la correction de la première.
- **Note annexe** : le mot marqué est précédé d'une espace (« à l'heure [?] ») ;
  la substitution par `"."` laisse « à l'heure . ».

### [MOYEN] `typo-abrev-pages` — « jamais pp. » est une position de maison
- **Où** : `batch-013-ponctuation-typo.ts:289`
- **Problème** : *pp.* pour « pages » est d'usage courant en bibliographie
  française et n'est pas une faute ; le Lexique de l'Imprimerie nationale
  préconise *p.* invariable, mais ne condamne pas l'autre. À présenter comme un
  choix, non comme un interdit. Par ailleurs le mot marqué de la phrase 2,
  « [chapître] », cumule deux fautes distinctes (abréviation **et**
  accent circonflexe indu).

### [MOYEN] `typo-abrev-etats` — un usage minoritaire donné pour la règle
- **Où** : `batch-013-ponctuation-typo.ts:346-359`
- **Problème** : *É.-U.* et *R.-U.* sont surtout des abréviations de l'usage
  canadien ; en France, *USA* et *États-Unis* sont parfaitement courants et non
  fautifs. Quatre phrases marquées comme fautives sur une convention qui n'est pas
  celle de la majorité des lecteurs français.

### [MOYEN] `apostrophe-typographique` — la règle condamne tout le reste du module
- **Où** : `batch-013-ponctuation-typo.ts:134-147`
- **Texte** : « En typographie soignée, l'apostrophe est <b>courbe</b> — l'apostrophe
  droite est un signe de machine à écrire. » ; corrections `"l’affaire"`, `"l’ouverture"`…
- **Problème** : cette règle est la **seule** du corpus à employer l'apostrophe
  courbe. Toutes les autres phrases de tous les autres lots — y compris les
  centaines de phrases déclarées correctes par `fix: null` — emploient
  l'apostrophe droite. Le module enseigne donc une règle que son propre contenu
  enfreint partout ailleurs.

### [MOYEN] `deux-points-explication` — déjà contenu dans `deux-points-enumeration`
- **Où** : `batch-013-ponctuation-typo.ts:59-72` et `batch-001-ponctuation.ts:272-285`
- **Problème** : le `statement` du lot 001 annonce déjà que les deux-points
  introduisent « une liste, **une explication** ou une citation ». Le lot 013 en
  refait une règle entière.

### [MOYEN] `typo-majuscule-journaux` contredit `titres-oeuvres-majuscule`
- **Où** : `batch-013-ponctuation-typo.ts:271-284` et `batch-002-typographie.ts:345-358`
- **Problème** : ici « Le Monde » garde ses deux majuscules et « L'Équipe » aussi ;
  là, la règle des titres d'œuvres impose « seul le premier mot prend la
  majuscule » et corrige « Le Rouge et le Noir » en « Le Rouge et le noir ». Les
  deux règles s'appliquent à des objets voisins et se contredisent.

### [MINEUR] `guillemets-imbriques` — « doubles apostrophes »
- **Où** : `batch-013-ponctuation-typo.ts:93`
- **Texte** : tip « Les chevrons restent à l'extérieur : les **doubles apostrophes**
  se glissent dedans. »
- **Problème** : “ ” sont des guillemets anglais, pas des apostrophes. Dans une
  règle de typographie, le terme importe.

### [MINEUR] `virgule-adverbe-phrase` — deux phrases sur quatre n'ont pas d'adverbe
- **Où** : `batch-013-ponctuation-typo.ts:187` et `:189`
- **Texte** : « Chose [curieuse] aucun témoin ne se souvient de rien. » et
  « Comme toujours et bien [naturellement] il est arrivé dernier. »
- **Problème** : la première est un groupe nominal détaché, pas un adverbe de
  phrase ; la seconde est si contournée qu'elle brouille la règle.

### [MOYEN] `impropriete-cloturer` — un usage attesté présenté comme une impropriété
- **Où** : `batch-014-registre-pro.ts:161-174`
- **Texte** : « <b>clôturer</b> signifie entourer d'une clôture. »
- **Problème** : *clôturer* au sens de « clore, terminer » est enregistré par le
  Petit Robert et le Larousse (clôturer une séance, un débat, un exercice), et
  « clôturer un compte » est le terme bancaire courant. La règle en fait un
  interdit absolu.

### [MOYEN] `anglicisme-partager-information` — une justification trop courte
- **Où** : `batch-014-registre-pro.ts:131-144`
- **Texte** : « partager suppose de diviser en parts. »
- **Problème** : on partage depuis toujours un avis, un sentiment, une conviction,
  sans rien diviser. L'argument avancé est donc faux ; il ne reste que
  l'objection de calque, qui n'est pas la même chose.

### [MOYEN] `anglicisme-business` — une phrase peu idiomatique après correction
- **Où** : `batch-014-registre-pro.ts:50`
- **Texte** : « Le [business] a repris après une année difficile. », fix `"chiffre d'affaires"`
- **Problème** : « Le chiffre d'affaires a repris » ne se dit pas (il *repart*, il
  *remonte*). Et *chiffre d'affaires* ne figure pas dans la liste du `statement`.

### [MOYEN] `pro-signature-prenom-nom` — six phrases interchangeables, et une faute discutable
- **Où** : `batch-014-registre-pro.ts:272-287`
- **Problème** : les six phrases fautives ont le même moule (« Cordialement, Prénom
  [NOM], fonction ») ; l'exercice se réduit à six fois le même geste. Par
  ailleurs, la signature avec le patronyme en capitales est d'usage administratif
  français constant : en faire une faute, et non une préférence de style, est
  excessif.

### [MOYEN] `registre-ca-cela` — trois phrases construites sur le même « tout ça »
- **Où** : `batch-014-registre-pro.ts:199`, `:200`, `:202`
- **Texte** : « Tout [ça] mérite une explication… », « tenir compte de tout [ça]… »,
  « Rien de tout [ça] ne figure… »
- **Problème** : trois occurrences du même tour dans une règle de sept phrases.
  S'ajoute la phrase 1, « Cela dit, [ça] ne change rien à l'affaire. », qui donne
  après correction « **Cela** dit, **cela** ne change rien » — une répétition que
  la règle ne signale pas.

### [MINEUR] `pro-abreviations-interdites` — recoupements
- **Où** : `batch-014-registre-pro.ts:334-347`
- **Problème** : la somme abrégée « 50K€ » est déjà traitée par
  `million-milliard-symbole` (`batch-002:375`, « 250K€ » → « 250 000 euros »), et
  l'interdiction des abréviations dans un courrier par `pro-cordialement-abrege`
  et `pro-svp` (`batch-004:74` et `:89`).

### [MOYEN] `expr-a-bon-escient` — l'astuce désigne la mauvaise lettre
- **Où** : `batch-015-expressions.ts:272`
- **Texte** : « Escient garde son <b>s muet</b>, comme science dont il est cousin. »
- **Problème** : dans *escient* [ɛsjɑ̃] le s se prononce ; c'est le **c** du groupe
  *sc* qui ne s'entend pas. L'astuce nomme la mauvaise lettre, et n'aide donc pas
  à choisir entre *essient*, *ecient* et *escient* — les trois graphies fautives
  de la règle.

### [MINEUR] `expr-etre-de-mise` — une étymologie de fantaisie
- **Où** : `batch-015-expressions.ts:182`
- **Texte** : « la mise est ce qu'on met sur la table. »
- **Problème** : *être de mise* vient de la monnaie « de mise », c'est-à-dire ayant
  cours ; la mise du joueur n'a rien à y voir. L'astuce invente une origine.

### [MINEUR] `expr-tenir-tete` et `expr-donner-le-change` — phrases interchangeables
- **Où** : `batch-015-expressions.ts:373-386` et `:148-161`
- **Problème** : dans la première, les quatre phrases fautives portent toutes la
  même faute (« têtes » → « tête ») dans la même construction. Dans la seconde,
  « À leurs concurrents directs, ils ont donné le [changer]. » est syntaxiquement
  contournée au point de gêner la lecture.

### [MOYEN] `densify-homophones` / `aussitot` — « aussitôt que possible » n'est pas une faute
- **Où** : `densify-homophones.ts:227`
- **Texte** : « Nous partirons [aussitôt] que possible demain matin. », fix `"aussi tôt"`
- **Problème** : *aussitôt que possible* est une locution reçue, enregistrée par les
  dictionnaires au sens de « dès que possible ». Les deux autres phrases de la
  série (comparaisons avec *qu'aujourd'hui*, *que son frère*) sont justes ;
  celle-ci fabrique une faute.

### [MOYEN] `densify-homophones` / `ni-ny` — une phrase qui se contredit
- **Où** : `densify-homophones.ts:46`
- **Texte** : « Ce dossier est vide : il [ni] manque pourtant rien. », fix `"n'y"`
- **Problème** : après correction, « Ce dossier est vide : il n'y manque pourtant
  rien. » Un dossier vide auquel rien ne manque : la phrase n'a pas de sens.

### [MOYEN] `densify-accords` / `adj-distance` — une phrase sans verbe principal
- **Où** : `densify-accords.ts:279`
- **Texte** : « Une décision, prise après de longs débats, restée [confidentiel]. », fix `"confidentielle"`
- **Problème** : même corrigée, la suite n'est pas une phrase : il n'y a aucun verbe
  conjugué. « Une décision, prise après de longs débats, **est** restée
  confidentielle. »

### [MOYEN] `densify-accords` / `couleurs` — recoupement avec le lot 011
- **Où** : `densify-accords.ts:323-326` et `batch-011-accords.ts:160-173`
- **Problème** : « Les murs [verts] pâle » → `"vert"` reprend exactement
  `accord-couleur-composee` (« Elle a les yeux bleu [clairs] » → `"clair"`).

### [MINEUR] `densify-accords` / `adj-invariables` — deux cas discutables
- **Où** : `densify-accords.ts:423` et `:425`
- **Texte** : « des tenues très [chics] » → `"chic"` ; « des vacances [supers] » → `"super"`
- **Problème** : *chics* au pluriel est admis par plusieurs dictionnaires ; et
  « des vacances super » relève d'un registre familier que le module condamne
  ailleurs (`registre-ca-cela`, `pro-abreviations-interdites`).

### [MINEUR] `densify-accords` / `pp-impersonnel` — une phrase peu naturelle
- **Où** : `densify-accords.ts:362`
- **Texte** : « Cette semaine, les averses qu'il a [plues] ont tout inondé. », fix `"plu"`
- **Problème** : « les averses qu'il a plu » est une construction que personne
  n'écrit ; l'exemple rend la règle plus obscure qu'elle n'est.

---

### [MINEUR] Slugs qui ne correspondent pas au contenu
- `batch-003-registre.ts:376` — slug `impropriete-avoir-lair` pour une règle sur *s'avérer*.
- `batch-004-professionnels.ts:256` — slug `pro-second-degre-politesse` pour la reprise de la formule d'appel.
- `batch-007-conjugaison.ts:362` — slug `conj-verbes-tressaillir` pour une règle intitulée « Cueillir au futur ».
- `batch-007-conjugaison.ts:317` — slug `conj-verbes-croire-voir-imparfait` pour une règle sur -yer/-ier.

### [MINEUR] Titres annonçant plus que le contenu
- `batch-006-accords.ts:299` — « Pluriels doubles : ciel, aïeul, **œil** » : *œil* n'apparaît ni dans le `statement` ni dans une phrase.
- `batch-008-homophones.ts:358` — « poids, pois ou **poix** » : aucune phrase n'emploie *poix*.

### [MINEUR] Commentaires d'en-tête inexacts
- `batch-006-accords.ts:3` annonce « 25 règles » ; le fichier en contient **24**.
- `batch-002-typographie.ts:5` affirme qu'aucune règle ne recoupe le lot legacy, sans avoir vérifié le recoupement avec le lot 001 (guillemets).

### [MINEUR] Typographie des énoncés
- `batch-001-ponctuation.ts:380` — « Dans la formule <b>Fait à … , le …</b> » : espace parasite avant la virgule.
- `batch-004-professionnels.ts:47` — « jamais par un point ni par rien » : formulation bancale.
- `batch-005-discutes.ts:60-61` — « d'un simple au temps pour moi », « a murmuré autant pour moi » : locutions citées sans guillemets ni italique.

### [MINEUR] Astuce approximative
- `batch-003-registre.ts:215` — « Le verbe français existe depuis **huit siècles** » : *vérifier* est attesté au début du XIVᵉ siècle, soit environ sept siècles.
- `batch-004-professionnels.ts:292` — « Compte les destinataires : un seul, donc un seul « s » de moins » : l'exemple de la règle (« priés » → « priée ») n'est pas une simple suppression de *s*.

### [MINEUR] Phrases inutilement étranges
- `batch-008-homophones.ts:35` — « Le [mal] de tête protège tout le troupeau. » → « Le mâle de tête protège tout le troupeau. » : phrase absconse pour un exercice de niveau 2.
- `batch-006-accords.ts:294` — « moins de deux candidats ont été retenu[s] » : « moins de deux candidats » désigne au plus un candidat ; l'exemple est logiquement bancal.
- `batch-007-conjugaison.ts:294` — « Les efforts qu'il a fallu dépasseront tout ce qu'on imagine. » : concordance des temps hasardeuse.

### [MINEUR] `deux-points-citation` — typographie de la citation
- **Où** : `batch-001-ponctuation.ts:347-359`
- **Problème** : toutes les citations commencent par une minuscule et le point
  final est placé hors des guillemets. Dans un module qui enseigne la
  typographie, c'est au minimum discutable — et la phrase `fix: null`
  (« Elle a murmuré : « ce n'est vraiment pas grave ». ») donne ce modèle.

### [MINEUR] `mer-mere-maire` — le `fix` introduit un quatrième mot
- **Où** : `batch-008-homophones.ts:143`
- **Texte** : « Ils se sont mariés à la [mère] du village. », fix `"mairie"`
- **Problème** : « mairie » n'est pas dans le triplet annoncé par le `statement`.

### [MOYEN] `stupefait-stupefie` — une phrase correcte marquée fautive
- **Où** : `batch-009-paronymes.ts:368` — slug `stupefait-stupefie`
- **Texte** : « Le public fut [stupéfait] par la révélation finale. », fix `"stupéfié"`
- **Problème** : « être stupéfait par » est un tour parfaitement reçu — *stupéfait*
  est un adjectif, et un adjectif se construit sans difficulté avec un complément
  d'agent apparent. Le `statement` de la règle ne dit nulle part que la présence
  de « par » impose le participe. La phrase n'est pas fautive, ou alors la règle
  doit l'expliquer.

### [MINEUR] `egailler-egayer` — deux graphies concurrentes dans les corrections d'une même règle
- **Où** : `batch-009-paronymes.ts:126` et `:128`
- **Texte** : fix `"égayent"` d'un côté, fix `"égaierait"` de l'autre
- **Problème** : *égayer* admet les deux radicaux (égaye/égaie), mais la règle en
  impose un dans une phrase et l'autre dans la suivante, sans le dire. Un
  apprenant conclura qu'il y a une règle là où il n'y a qu'un choix.

### [MINEUR] `luxure-luxe` — l'article trahit la réponse et redouble la faute
- **Où** : `batch-009-paronymes.ts:260`, `:262`, `:263`
- **Texte** : « Cet hôtel est d'un [luxure] tout à fait inutile. », « La [luxe] de la végétation… »
- **Problème** : *luxure* est féminin, *luxe* masculin. Les phrases marquées
  contiennent donc **deux** fautes (le mot et son genre), et le déterminant donne
  la réponse avant même qu'on ait réfléchi au sens.

### [MINEUR] `evasion-invasion` — règle redondante avec `emerger-immerger`
- **Où** : `batch-009-paronymes.ts:178-191`
- **Texte** : tip « É sort, in entre : la même logique qu'émerger et immerger. »
- **Problème** : la règle l'admet elle-même — c'est le même mécanisme enseigné une
  seconde fois. Deux règles pour un seul point.

---

## Ce que la seconde passe a ajouté

*(à compléter — la passe 2 n'a pas encore commencé)*

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
