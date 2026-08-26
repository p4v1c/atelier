# Langue française

> ÉTAT : **audit terminé.** Passe 1 et passe 2 faites sur la totalité du périmètre.

## Ce que j'ai lu

- `prisma/seed/culture-g/langue-francaise.ts` — 13 notions, 128 questions.
- `prisma/seed/culture-g/langue-francaise-2.ts` — 20 notions, 200 questions.
- `prisma/seed/culture-g/langue-francaise-3.ts` — 23 notions, 229 questions.
- `prisma/seed/culture-g/cours/langue-francaise.ts` — 50 cours, 170 sections, intégral.
- `heritage/culture-g/data/langue-francaise.json` — 55 questions libres, 3 cours
  (14 sections) et leurs 15 questions de quiz.
- `heritage/culture-g/data/lecons/langue-francaise/01.json` à `11.json` — 11 leçons,
  55 sections, 55 questions de quiz.

Soit **682 questions** et **64 cours** (239 sections), lus intégralement deux fois.

**Bilan : 32 constats GRAVE, 29 MOYEN, 14 MINEUR.**

Remarque préalable : toutes les questions ont `answerIndex` à 0. Ce n'est **pas** un
défaut : `src/modules/kinds/melange.ts` permute les propositions à l'affichage, et
`src/modules/culture-g/index.ts` documente explicitement le cas. Aucun constat là-dessus.

## Constats

### [GRAVE] ✅ L'étymologie de « choucroute » est fausse, et l'erreur est répétée dans le cours

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:82-83` — `lf-etymologie` ;
  `prisma/seed/culture-g/cours/langue-francaise.ts:12` — `lf-etymologie`, section « Fabriquer des mots »
- **Texte** : « Choucroute vient de l'alsacien sürkrüt, réinterprété par chou, alors que le
  mot ne contient aucun chou à l'origine. » / « choucroute n'a rien à voir avec le chou ni
  avec la croûte, c'est une déformation de l'alsacien surkrut »
- **Problème** : l'alsacien *sürkrüt* est composé de *sür* (aigre) et *krüt* (chou, cf. all.
  *Kraut*). Le mot contient donc bien un chou à l'origine — c'est le **premier** élément
  (*sür*, aigre) qui a été réinterprété en « chou », et le second (*krüt*, chou) en « croûte ».
  Dire qu'il « ne contient aucun chou » inverse l'analyse. C'est de plus la seule illustration
  donnée de l'étymologie populaire : l'exemple n'illustre pas la règle, il la contredit.
- **Correction proposée** : « Choucroute vient de l'alsacien *sürkrüt*, littéralement
  « chou aigre » : *sür* (aigre) a été réinterprété en « chou » et *krüt* (chou) en « croûte ».
  La fausse analyse a fixé la graphie actuelle. »
- Accessoirement, la graphie du mot alsacien diffère entre la question (*sürkrüt*) et le
  cours (*surkrut*).
- **Vérification** : déjà corrigé — question et cours donnent tous deux la bonne analyse (*sür* → « chou », *krüt* → « croûte ») avec la même graphie *sürkrüt*.

### [GRAVE] ✅ « le latin pater donne l'anglais father » — l'anglais n'est pas issu du latin

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:116` — `lf2-familles-langues`,
  section « Une parenté, pas une ressemblance »
- **Texte** : « Si le latin *pater* donne le français *père* et l'anglais *father*, ce n'est
  pas par emprunt mais parce que la même consonne initiale a évolué de la même façon dans
  tous les mots concernés — *pes/pied/foot*, *piscis/poisson/fish*. »
- **Problème** : *father*, *foot* et *fish* ne **descendent** pas du latin : ce sont des
  cognats germaniques, issus comme les mots latins d'un ancêtre indo-européen commun (loi de
  Grimm, p → f). Le verbe « donne » affirme une filiation fausse — et le même cours affirme
  trois paragraphes plus loin (l. 123) que l'anglais est germanique. C'est la section qui
  explique la méthode comparative : l'erreur y est particulièrement coûteuse.
- **Correction proposée** : « Si le latin *pater* et l'anglais *father* se correspondent, ce
  n'est pas par emprunt : les deux descendent d'un même mot indo-européen, et le *p* latin
  répond régulièrement au *f* germanique — *pes/foot*, *piscis/fish*. »
- **Vérification** : déjà corrigé — le cours dit maintenant que *father* « remonte à la même racine indo-européenne », sans filiation depuis le latin.

### [GRAVE] ✅ La table serait « neutre en allemand »

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:318` — `lf2-genres-noms`,
  section « Un genre largement arbitraire »
- **Texte** : « *la table* est féminine en français et neutre en allemand »
- **Problème** : « table » se dit *der Tisch* en allemand — masculin. L'allemand n'a pas de
  mot neutre courant pour « table » (*die Tafel* est féminin). L'exemple, censé prouver
  l'arbitraire du genre, est simplement faux.
- **Correction proposée** : « *la table* est féminine en français et masculine en allemand
  (*der Tisch*) »
- **Vérification** : déjà corrigé — le cours dit « *la table* est féminine en français et masculine en allemand ».

### [GRAVE] ✅ « anagramme » et « anacoluthe » employés au masculin, contre le cours lui-même

- **Où** : `prisma/seed/culture-g/langue-francaise-2.ts:382` (« Un anagramme parfait »),
  `:396` (« Un anagramme visuel »), `:266` (« Qu'est-ce qu'un anacoluthe ? »)
- **Texte** : « Qu'est-ce qu'un anacoluthe ? … Volontaire, **elle** est une figure de style »
- **Problème** : *anagramme* et *anacoluthe* sont **féminins**. Le cours le dit d'ailleurs
  explicitement : `cours/langue-francaise.ts:329` range *anagramme* parmi les féminins, et
  `:368` écrit « Une anacoluthe ». La question 266 se contredit dans sa propre ligne :
  masculin dans l'énoncé, féminin dans l'explication. Dans un contenu qui enseigne le genre
  des noms, c'est une faute qui s'apprendra.
- **Correction proposée** : « Une anagramme approximative », « Une anagramme visuelle »,
  « Qu'est-ce qu'une anacoluthe ? »
- **Vérification** : déjà corrigé — les trois occurrences (palindrome, rébus, anacoluthe) emploient désormais le féminin correct.

### [GRAVE] ✅ « un expiration longue » et « un monnaie »

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:512` — `lf2-communication-orale` ;
  `:685` — `lf3-vocabulaire-formation`
- **Texte** : « un expiration longue ralentit le rythme cardiaque » / « un porte-monnaie
  n'est pas un monnaie qu'on porte »
- **Problème** : deux fautes d'accord élémentaires (« une expiration », « une monnaie »).
- **Correction proposée** : « une expiration longue » ; « n'est pas une monnaie qu'on porte ».
- **Vérification** : déjà corrigé — le cours porte « une expiration longue » et « n'est pas une monnaie qu'on porte ».

### [GRAVE] ✅ « fautée », « Moliérisée » : deux mots qui n'existent pas

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:207` — `lf2-orthographe-histoire` ;
  `:387` — `lf2-litterature-langue`
- **Texte** : « elle aurait été **fautée** plusieurs dizaines de fois par l'empereur » /
  « **Moliérisée** dans *Les Précieuses ridicules* »
- **Problème** : *fauter* ne se construit pas ainsi (il signifie « commettre une faute
  morale », il est intransitif) ; *moliériser* n'existe pas. Deux barbarismes dans un contenu
  qui enseigne le français.
- **Correction proposée** : « l'empereur y aurait commis soixante-quinze fautes et
  l'impératrice soixante-deux » ; « Raillée par Molière dans *Les Précieuses ridicules* ».
- **Vérification** : déjà corrigé — le cours porte « Raillée par Molière » ; l'occurrence de « fautée » a également disparu.

### [GRAVE] ✅ « cette dernière » renvoie au mauvais mot, et au mauvais genre

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:806` — `lf3-francais-afrique`
- **Texte** : « le wolof au Sénégal, le bambara au Mali, le lingala et le swahili en Afrique
  centrale et orientale — cette dernière étant parlée par plus de cent millions de personnes. »
- **Problème** : « cette dernière » ne peut renvoyer qu'à « l'Afrique … orientale ». Le
  référent voulu est *le swahili*, masculin. La phrase dit littéralement que l'Afrique
  orientale est parlée par cent millions de personnes.
- **Correction proposée** : « … le lingala et le swahili en Afrique centrale et orientale,
  ce dernier étant parlé par plus de cent millions de personnes. »
- **Vérification** : déjà corrigé — le cours porte « ce dernier étant parlé par plus de cent millions de personnes ».

### [GRAVE] ✅ Le référendum de 1995 n'a pas été perdu « à moins d'un point »

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:161` — `lf3-francais-quebec` ;
  `cours/langue-francaise.ts:759`
- **Texte** : « Celui de 1995 a été perdu par les souverainistes à moins d'un point d'écart. »
  / « le second échouant de moins d'un pour cent »
- **Problème** : le Non l'a emporté avec 50,58 % contre 49,42 %, soit **1,16 point** d'écart.
  L'erreur est répétée dans la question et dans le cours.
- **Correction proposée** : « … perdu de peu, 50,58 % contre 49,42 %, soit 1,16 point d'écart. »
- **Vérification** : déjà corrigé — question et cours donnent tous deux « 50,58 % contre 49,42 %, soit 1,16 point d'écart ».

### [GRAVE] 🔧 « Rabelais avait déjà fourni gargantuesque »

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:378` — `lf2-litterature-langue` ;
  question corrélée `langue-francaise-2.ts:288`
- **Texte** : « Rabelais avait déjà fourni *gargantuesque*, formé sur son géant. » /
  « Quel mot Rabelais a-t-il popularisé pour désigner un géant vorace ? — Gargantuesque,
  formé sur Gargantua »
- **Problème** : l'adjectif *gargantuesque* est une formation du XIXe siècle (attestée vers
  1859), pas de Rabelais. Et l'énoncé de la question demande un mot « pour désigner un géant
  vorace » alors que *gargantuesque* est un adjectif qui ne désigne pas un géant. À vérifier,
  mais la datation du mot est bien postérieure de trois siècles à Rabelais.
- **Correction proposée** : supprimer la phrase du cours ; reformuler la question en
  « Sur quel personnage de Rabelais l'adjectif *gargantuesque* a-t-il été formé au XIXe siècle ? ».
- **Vérification** : le cours était déjà corrigé (« Le XIXe siècle tirera de même *gargantuesque* du géant de Rabelais, trois siècles après le livre »), mais la question `langue-francaise-2.ts` gardait « Gargantuesque, formé sur Gargantua » comme bonne réponse à « Quel mot Rabelais a-t-il popularisé… », avec une explication qui parlait en fait de *pantagruélique* — une question qui se contredisait elle-même. Reformulée en « Sur quel personnage de Rabelais l'adjectif *gargantuesque* a-t-il été formé, au XIXe siècle ? » (bonne réponse : Gargantua).

### [GRAVE] 🔧 Breton reprend « surréalisme » sept ans après, pas trois

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:830` — `lf3-litterature-langue-3`
- **Texte** : « Guillaume Apollinaire crée *surréalisme* en 1917 …, mot qu'André Breton
  reprendra **trois ans plus tard** pour baptiser son mouvement »
- **Problème** : le *Manifeste du surréalisme* est de 1924, soit sept ans plus tard — et la
  question `langue-francaise-2.ts:291` écrit d'ailleurs « Breton s'en empare pour nommer le
  mouvement en 1924 ». Le cours contredit la question.
- **Correction proposée** : « … mot qu'André Breton reprendra en 1924 pour baptiser son
  mouvement ».
- **Second point, même passage** : le cours dit qu'Apollinaire forge le mot « pour qualifier
  le ballet *Parade* », la question `langue-francaise-3.ts:229` dit « pour qualifier son
  propre drame *Les Mamelles de Tirésias* ». Les deux usages de 1917 sont réels, mais
  l'apprenant qui lit les deux verra une contradiction. À harmoniser.
- **Vérification** : le cours était déjà corrigé (« en 1924 », plus de « trois ans »). La question `langue-francaise-3.ts` gardait cependant « pour qualifier son propre drame *Les Mamelles de Tirésias* », en désaccord avec le cours (« pour qualifier le ballet *Parade* ») — traité en supprimant cette question en doublon avec celle de `langue-francaise-2.ts` (constat suivant, « Doublons francs entre lots »), qui elle est neutre sur ce point.

### [GRAVE] ✅ Question à deux réponses : le mot emprunté puis réemprunté

- **Où** : `prisma/seed/culture-g/langue-francaise-2.ts:48-49` — `lf2-anglicismes`
- **Texte** : « Quel mot français a été emprunté par l'anglais puis réemprunté par le
  français ? — [Tennis, issu du français tenez / Sport / Budget / Rosbif] … *Budget vient
  également du français bougette, la petite bourse, réemprunté ensuite à l'anglais.* »
- **Problème** : l'explication déclare elle-même vrai le distracteur « Budget ». *Sport*
  (de l'ancien français *desport*) l'est également. Trois propositions sur quatre sont
  défendables : la question est insoluble.
- **Correction proposée** : « Quel mot du vocabulaire sportif vient du français *tenez*,
  passé en anglais puis revenu en français ? » avec des distracteurs qui ne sont pas eux-mêmes
  des allers-retours (Golf, Rugby, Cricket).
- **Vérification** : déjà corrigé — la question porte désormais « Quel mot du vocabulaire sportif vient du français « tenez », passé en anglais puis revenu ? » avec Golf/Rugby/Cricket comme distracteurs.

### [GRAVE] ✅ Question à deux réponses : le séducteur littéraire

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:234-235` — `lf3-litterature-langue-3`
- **Texte** : « Quel nom de personnage littéraire désigne un séducteur ? — [Don Juan /
  Casanova seul / Lovelace / Valmont] … *Lovelace, personnage de Richardson, a également donné
  un nom commun en français.* »
- **Problème** : l'explication reconnaît que le distracteur *Lovelace* est lui aussi une
  bonne réponse. *Valmont* est également employé en ce sens.
- **Correction proposée** : « Quel personnage de Molière et de Mozart a donné le nom commun
  désignant un séducteur ? » (Don Juan), avec des distracteurs non concurrents.
- **Vérification** : déjà corrigé — la question porte désormais sur Don Juan, avec Lovelace/Valmont regroupés dans l'explication plutôt qu'en distracteurs concurrents.

### [GRAVE] ✅ Question à deux réponses : le verbicruciste réputé

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:538-539` — `lf3-jeux-langue`
- **Texte** : « Quel verbicruciste français est réputé pour ses définitions ? — [Georges
  Perec / Michel Laclos / …] … *Michel Laclos et Georges Perec ont tous deux marqué le genre
  en France.* »
- **Problème** : l'explication désigne explicitement le distracteur comme également correct.
  Michel Laclos est même le plus célèbre des deux dans ce rôle précis.
- **Correction proposée** : « Quel auteur de *La Disparition* a aussi composé les grilles de
  mots croisés du *Point* ? » (Georges Perec).
- **Vérification** : déjà corrigé — la question porte désormais sur l'auteur de *La Disparition*, Michel Laclos n'étant plus un distracteur concurrent.

### [GRAVE] 🔧 Doublons francs entre lots

Ces questions posent la même chose, souvent avec la même explication réemployée mot pour mot.
Le validateur ne les voit pas parce que l'énoncé est reformulé.

1. **Onomatopée** — `langue-francaise.ts:78` (« Qu'appelle-t-on une onomatopée ? ») et
   `langue-francaise-2.ts:390` (« Qu'est-ce qu'une onomatopée ? »). Même définition.
2. **Septante** — `langue-francaise.ts:100` et `langue-francaise-3.ts:170`. Même réponse,
   explication quasi identique : « Nonante pour quatre-vingt-dix. La Suisse romande ajoute
   huitante ou octante selon les cantons. » / « Nonante pour quatre-vingt-dix ; la Suisse
   ajoute huitante ou octante dans certains cantons. »
3. **Alliance française depuis 1883** — `langue-francaise.ts:104` et
   `langue-francaise-3.ts:570`. Même réponse, mêmes distracteurs (« l'Institut français »).
4. **Suffixe -ac** — `langue-francaise.ts:308` et `langue-francaise-2.ts:466`. Même réponse
   (« un domaine gallo-romain »), même explication sur les formes en -y/-é du nord.
5. **Mot-valise** — `langue-francaise.ts:74` et `langue-francaise-3.ts:544`. Même réponse
   (« un mot formé par la fusion de deux mots »).
6. **Surréalisme / Apollinaire** — `langue-francaise-2.ts:290` et `langue-francaise-3.ts:228`.
   Même réponse, même explication (« Il l'emploie en 1917 »).
7. **Pataphysique / Jarry** — `langue-francaise-2.ts:286` et `langue-francaise-3.ts:226`.
   Même réponse, mêmes distracteurs partiels.
8. **Émoji** — `langue-francaise-2.ts:438` et `langue-francaise-3.ts:590`. Explication
   **identique au mot près** : « Il compense l'absence d'intonation et de gestes propre à
   l'écrit. » (et la graphie diffère : « émoji » puis « emoji »).
9. **Accord de proximité** — `langue-francaise-2.ts:238` et `langue-francaise-3.ts:406`.
   Proposition correcte identique : « L'accord de l'adjectif avec le nom le plus proche ».
10. **Brin / brun** — `langue-francaise-2.ts:152` et `langue-francaise-3.ts:44`. Même fait,
    même explication (« de quatre à trois voyelles nasales »).
11. **Féminisation des métiers** — trois questions sur le même sujet :
    `langue-francaise.ts:56`, `langue-francaise-2.ts:236`, `langue-francaise-3.ts:418`.
- **Correction proposée** : supprimer un membre de chaque paire, et pour la n° 11 ne garder
  que la question de `lf3-ecriture-inclusive`, qui est la notion à laquelle le sujet appartient.
- **Vérification** : la féminisation des métiers (n° 11) était déjà résolue (les trois questions posent maintenant des faits distincts). Les dix autres paires (onomatopée, septante, Alliance française, suffixe -ac, mot-valise, surréalisme/Apollinaire, pataphysique/Jarry, émoji, accord de proximité, brin/brun) étaient encore des doublons complets — retiré un membre de chaque paire, en gardant à chaque fois la version la plus proche du thème de sa notion (par exemple « émoji » gardé côté `lf3-francais-numerique-usages`, qui traite les usages, et retiré côté `lf2-numerique-langue`, qui traite désormais les outils).

### [GRAVE] ✅ « je m'en rappelle » présenté comme une hypercorrection — le cours dit le contraire

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:126-127` — `lf3-normes-usages`
- **Texte** : « Qu'est-ce que l'hypercorrection ? … *Dire je m'en rappelle par crainte de
  je m'en souviens en est un exemple courant.* »
- **Problème** : deux défauts. (a) La phrase n'a pas de sens : on ne dit pas « je m'en
  rappelle » **par crainte de** « je m'en souviens », qui est la forme correcte. (b) Le cours
  attaché à la même notion (`cours/langue-francaise.ts:728`) donne exactement cet exemple
  comme une **régularisation analogique**, pas comme une hypercorrection : « je m'en rappelle
  applique la construction de je m'en souviens, et le sujet parlant qui la produit n'a commis
  aucune incohérence ». La question contredit son propre cours.
- **Correction proposée** : « *Prononcer une liaison là où elle est interdite, ou dire
  « je vous serais gré », relèvent de ce mécanisme : on applique une règle hors de son
  domaine par souci de bien faire.* »
- **Vérification** : déjà corrigé — la question porte désormais l'exemple « je vous serais gré », cohérent avec le cours.

### [GRAVE] ✅ Le même fait dit trois fois sur le point final des messages courts

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:1170` **et** `:1172` — deux
  paragraphes consécutifs de la **même section** de `lf3-francais-numerique-usages` ; puis une
  troisième fois en `:868` (`lf3-ponctuation-usages`)
- **Texte** : « un point final en fin de message court y est lu comme sec ou fâché, l'absence
  de ponctuation comme neutre, la majuscule prolongée comme un cri » (l. 1170), suivi
  immédiatement de « La majuscule intégrale est perçue comme un cri ou une insistance forte…
  un point final dans un message court est lu comme sec ou fâché par les jeunes locuteurs »
  (l. 1172)
- **Problème** : deux paragraphes qui se suivent énoncent exactement la même chose. C'est du
  remplissage visible, et le lecteur croit avoir sauté une ligne.
- **Correction proposée** : supprimer le paragraphe de la l. 1170 à partir de « Les usages
  numériques ont surtout créé… », le suivant dit la même chose en mieux.
- **Vérification** : déjà corrigé — la section `lf3-francais-numerique-usages` ne compte plus qu'une seule occurrence du fait sur le point final (avec celle, distincte, de `lf3-ponctuation-usages`).

### [GRAVE] 🔧 Deux cours qui traitent le même sujet

- **Où** : `lf2-numerique-langue` (`cours/langue-francaise.ts:538-564`) et
  `lf3-francais-numerique-usages` (`:1165-1188`)
- **Problème** : les deux cours ouvrent sur la même phrase d'idée (« Les usages écrits en ligne
  ont créé des formes hybrides entre oral et écrit » / « L'écrit numérique a créé des formes
  intermédiaires entre l'oral et l'écrit »), développent tous deux la compensation de
  l'intonation absente, et concluent tous deux sur le reflux de l'écriture SMS et les alarmes
  infondées des années 2000 (`:543` et `:1186`). Deux notions distinctes pour un seul contenu.
- **Correction proposée** : réserver à `lf2-numerique-langue` le traitement automatique et les
  outils (correcteurs, modèles de langue, langues peu dotées), et à
  `lf3-francais-numerique-usages` les usages et les codes de plateforme, en supprimant de part
  et d'autre ce qui appartient à l'autre.
- **Vérification** : encore en grande partie chevauchant — la section « Écrire comme on parle » de `lf2-numerique-langue` répétait l'ouverture, l'émoji et le reflux de l'écriture SMS déjà traités par `lf3-francais-numerique-usages`. Section supprimée de `lf2-numerique-langue`, qui ne garde plus que les trois sections consacrées aux outils et au traitement automatique.

### [GRAVE] ✅ « Deux exceptions » suivies de cinq exceptions

- **Où** : `heritage/culture-g/data/langue-francaise.json` — question 27 (« Laquelle de ces
  quatre phrases est correctement orthographiée ? », yeux marron)
- **Texte** : « **Deux** exceptions sont entrées dans l'usage et s'accordent comme de vrais
  adjectifs : rose, mauve, pourpre, écarlate et fauve. »
- **Problème** : cinq mots sont énumérés après l'annonce de deux. Le cours du même fichier
  (cours 2, section « Couleurs, nombres, tout et demi ») donne la liste exacte sans se
  tromper : « Font exception … rose, mauve, pourpre, écarlate et fauve ». La question
  contredit son propre cours sur un point que l'apprenant est censé retenir par cœur.
- **Correction proposée** : « Cinq adjectifs font exception et s'accordent normalement :
  rose, mauve, pourpre, écarlate et fauve. »
- **Vérification** : déjà corrigé — la question et le cours parlent tous deux de « cinq adjectifs ».

### [GRAVE] ✅ Deux doublons tombent dans la MÊME notion, par la fusion

- **Où** : `prisma/seed/culture-g/cours/fusions.ts:35` verse `lf-histoire-langue` dans
  `cg-langue-francaise-c01`, c'est-à-dire le cours « Naissance et histoire de la langue
  française » de `heritage/culture-g/data/langue-francaise.json`
- **Texte** : le quiz du cours contient « Que désigne le terme « langue d'oïl » ? →
  **L'ensemble des parlers romans du nord de la France** » ; la notion fusionnée apporte
  « Qu'est-ce que la langue d'oïl ? → **L'ensemble des parlers romans du nord de la France** »
  (`langue-francaise.ts:28`). La bonne réponse est identique **au caractère près**.
  Même chose pour « Quel peuple germanique a laissé au français environ quatre cents mots… →
  Les Francs » et « Quelle langue a le plus enrichi le vocabulaire français au Moyen Âge,
  après le latin ? → Le francique germanique » (`langue-francaise.ts:24`).
- **Problème** : ce ne sont plus deux questions voisines dans deux notions différentes, mais
  deux questions dans **la même série**, que l'apprenant enchaînera dans la même session.
- **Correction proposée** : retirer de `lf-histoire-langue` les deux questions sur la langue
  d'oïl et sur le francique, déjà posées par le quiz du cours d'accueil.
- Les quatre autres fusions à surveiller de la même façon : `lf-academie-norme` →
  `cg-langue-francaise-03`, `lf-expressions-francaises` → `cg-langue-francaise-02`,
  `lf3-prononciation` → `cg-langue-francaise-09`, `lf-langues-france` →
  `cg-langue-francaise-10`.
- **Vérification** : déjà corrigé — `lf-histoire-langue` ne pose plus de question sur la langue d'oïl ni sur le francique dans les termes cités ; ces deux points ont été reformulés ou retirés.

### [GRAVE] ⏭️ Le filtre anti-doublons ne rattrape aucun des doublons signalés

- **Où** : `src/modules/culture-g/contenu.ts:399-445` (`dedoublonner`)
- **Problème** : le filtre écarte une question quand le recouvrement des mots de l'énoncé
  atteint 0,85 **et** celui de la réponse 0,3, ou quand la réponse est identique **et** le
  recouvrement des mots longs de l'énoncé atteint 0,75. J'ai rejoué cette logique sur les
  25 paires signalées dans ce rapport : **aucune n'est filtrée**. Exemples de mesures
  obtenues — langue d'oïl : recouvrement d'énoncé 0,50 pour une réponse identique (1,00) ;
  Alliance française 1883 : 0,40 / 1,00 ; accord de proximité : 0,40 / 1,00 ; mot-valise :
  0,50 / 1,00 ; surréalisme : 0,40 / 1,00.
- **Ce que ça veut dire** : le seuil de 0,85 sur l'énoncé est hors d'atteinte dès qu'on
  reformule la question, ce que fait systématiquement le contenu de ce domaine. Les doublons
  listés plus haut arrivent donc bel et bien jusqu'à l'apprenant — ils ne sont pas
  neutralisés en amont, contrairement à ce que le commentaire du fichier laisse espérer.
- **Correction proposée** : hors périmètre de cet audit, mais la seconde branche du test
  (réponse rigoureusement identique) gagnerait à se suffire à elle-même, ou à abaisser son
  seuil de recouvrement d'énoncé à 0,4 — ce qui suffirait à attraper la moitié des cas
  ci-dessus.
- **Vérification** : ⏭️ écarté — la correction porte sur `src/modules/culture-g/contenu.ts`, hors du périmètre de fichiers autorisé pour cette tâche (module de code, pas contenu culture générale).

### [GRAVE] 🔧 Le cahier d'origine et les lots seed se recouvrent largement

- **Où** : `heritage/culture-g/data/langue-francaise.json` (questions libres) contre les trois
  lots `prisma/seed/culture-g/langue-francaise*.ts`
- **Problème** : au moins treize sujets sont traités des deux côtés, avec la même réponse de
  fond — *salaire* (héritage q31 / `langue-francaise.ts:70`), *travail/tripalium* (q30 /
  `-2.ts:170`), *candidat* (q32 / `-2.ts:172`), *poubelle* (q33 / `-2.ts:182`), *silhouette*
  (q34 / `-2.ts:184`), *algèbre* (q37 / `langue-francaise.ts:66`), *guerre/francique* (q40 /
  `langue-francaise.ts:24`), *mot gaulois* (q39 / `langue-francaise.ts:20`), *doublet
  hôtel/hôpital* (q41 / `langue-francaise.ts:64`), *maille à partir* (q45 /
  `langue-francaise.ts:222`), *loucherbem* (q51 / `-2.ts:200`), *septante* (q52 /
  `langue-francaise.ts:100` et `-3.ts:170`), *huitante* (q53 / `-3.ts:170`), *courriel
  québécois* (q54 / `-2.ts:40`).
- **Correction proposée** : le cahier d'origine est la source (le commentaire de
  `contenu.ts:368` le dit : « une question libre l'emporte sur une notion écrite ici »).
  Retirer côté seed les questions qui redisent le cahier.
- **Vérification** : sur les treize recoupements listés, neuf ont été traités en retirant la question du lot seed (salaire, travail/tripalium, candidat, poubelle, silhouette, algèbre, maille à partir, loucherbem, et septante — qui recoupait aussi, en plus de son doublon interne au seed déjà traité plus haut, la question du cahier). « guerre/francique » était déjà réglé (la question correspondante n'existe plus dans `lf-histoire-langue`). Les quatre autres (mot gaulois, doublet hôtel/hôpital, huitante, courriel québécois) testent en réalité des faits distincts de leur pendant du cahier (mot différent, angle différent) : laissés en l'état.

### [GRAVE] ✅ Deux expressions non bibliques données comme venant de la Bible

- **Où** : `heritage/culture-g/data/lecons/langue-francaise/02.json` — section « Mythologie,
  Bible et histoire dans la langue courante »
- **Texte** : « La Bible a fourni le bouc émissaire… ; le colosse aux pieds d'argile… ; la
  pierre d'achoppement, le veau d'or, la traversée du désert, **le péché mignon**, **un
  travail de Bénédictin**. »
- **Problème** : *un travail de bénédictin* vient de l'érudition des moines bénédictins de
  Saint-Maur, pas de la Bible ; *le péché mignon* n'a aucune source biblique non plus. Deux
  items sur cinq d'une liste explicitement présentée comme biblique n'y appartiennent pas —
  et c'est précisément le genre de liste qu'un apprenant recopie telle quelle. La majuscule à
  « Bénédictin » est en outre fautive dans cette locution.
- **Correction proposée** : « … la pierre d'achoppement, le veau d'or, la traversée du désert.
  La vie monastique a donné de son côté *un travail de bénédictin*. »
- **Vérification** : déjà corrigé — la leçon porte « La vie monastique a donné de son côté un travail de bénédictin », *péché mignon* n'est plus rattaché à la Bible.

### [GRAVE] ✅ Quatre doublons dans la seule notion « Les langues régionales de France »

- **Où** : `fusions.ts:37` verse `lf-langues-france` dans `cg-langue-francaise-10`
  (`heritage/culture-g/data/lecons/langue-francaise/10.json`)
- **Texte** : le quiz de la leçon et les questions versées posent quatre fois la même chose :
  - « Quelle langue parlée en France n'est apparentée à aucune autre langue connue au monde ?
    → **Le basque** » et « Quelle langue régionale de France n'est pas indo-européenne ?
    → **Le basque** » (`langue-francaise.ts:142`)
  - « Parmi ces langues régionales de France, laquelle appartient à la famille germanique ?
    → L'alsacien » et « À quelle famille l'alsacien appartient-il ? → Aux langues
    germaniques » (`:146`) — les deux questions sont l'exacte inverse l'une de l'autre
  - « Quel écrivain a obtenu le prix Nobel de littérature en 1904 pour une œuvre composée en
    provençal ? → **Frédéric Mistral** » et « Quel prix Nobel de littérature un poète de
    langue provençale a-t-il reçu en 1904 ? → **Frédéric Mistral** » (`:150`)
  - « Le breton **est une langue celtique**. D'où vient-il ? » et « À quelle famille le breton
    appartient-il ? → Aux langues celtiques » (`:144`) — ici la première question **donne la
    réponse** de la seconde, dans la même série.
- **Problème** : quatre redites dans une notion qui n'en compte que quinze questions. La
  quatrième est pire qu'une redite : elle rend l'autre question gratuite.
- **Correction proposée** : retirer de `lf-langues-france` les quatre questions sur le basque,
  l'alsacien, le breton et Mistral — la leçon d'accueil les pose déjà.
- **Vérification** : déjà corrigé — la notion `lf-langues-france` ne contient plus aucune des quatre questions citées (basque, alsacien, breton, Mistral).

### [GRAVE] ✅ Deux doublons dans la notion « L'Académie française et la norme »

- **Où** : `fusions.ts:36` verse `lf-academie-norme` dans `cg-langue-francaise-03`
- **Texte** : « Quelle position l'Académie française a-t-elle adoptée en 2019 sur la
  féminisation des noms de métiers ? → Elle a adopté un rapport favorable » (quiz de la leçon)
  et « Qu'est-ce que la féminisation des noms de métiers en France ? → Un usage recommandé
  par l'Académie depuis 2019 après des décennies de réticence » (`langue-francaise.ts:56`) ;
  « Quelle valeur ont les rectifications orthographiques de 1990 ? → Ce sont des
  recommandations » et « Que proposent les rectifications orthographiques de 1990 ? → Des
  simplifications facultatives » (`:50`).
- **Correction proposée** : retirer les deux questions versées, la leçon d'accueil couvre
  déjà les deux points.
- **Vérification** : déjà corrigé — les deux questions citées (rectifications de 1990, féminisation 2019) ont été reformulées dans `lf-academie-norme` et ne redisent plus le quiz de la leçon 03 dans les termes cités.

### [GRAVE] 🔧 Une paire de questions identiques à 88 % passe quand même le filtre

- **Où** : `heritage/culture-g/data/lecons/langue-francaise/03.json` (quiz) contre
  `prisma/seed/culture-g/langue-francaise-2.ts:236`
- **Texte** : « Quelle position l'Académie française a-t-elle adoptée en 2019 sur la
  féminisation des noms de métiers ? » / « Quelle position l'Académie française a-t-elle
  adoptée en 2019 sur la féminisation des métiers ? » — un mot d'écart.
- **Problème** : le recouvrement d'énoncé est de 0,88, au-dessus du seuil de 0,85 ; mais les
  deux réponses sont rédigées différemment (« Elle a adopté un rapport favorable » /
  « Elle n'y voit plus d'obstacle de principe »), le recouvrement de réponse tombe à 0,00, et
  la condition `&&` fait échouer le test. C'est le cas d'école du défaut signalé plus haut :
  reformuler la bonne réponse suffit à faire passer n'importe quel doublon.
- **Correction proposée** : supprimer la question du lot seed ; elle redit le quiz de la leçon.
- **Vérification** : encore présente à l'identique (« Quelle position l'Académie française a-t-elle adoptée en 2019 sur la féminisation des métiers ? ») dans `langue-francaise-2.ts` (notion `lf2-genres-noms`). Question supprimée.

### [GRAVE] ✅ La glottophobie n'est pas punie par la loi française

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:53` — `lf3-prononciation`
- **Texte** : « Le terme a été forgé par le linguiste Philippe Blanchet ; la discrimination est
  punie par la loi française **depuis 2020**. »
- **Problème** : vérifié sur le dossier législatif du Sénat. La proposition de loi Euzet
  « visant à promouvoir la France des accents » a bien été **adoptée par l'Assemblée
  nationale** le 26 novembre 2020 (98 voix contre 3), mais elle n'a jamais été adoptée par le
  Sénat : elle y est restée bloquée, puis rejetée. L'accent ne figure donc pas parmi les
  critères de l'article 225-1 du code pénal. L'affirmation est fausse, et c'est exactement le
  type de fait qu'un apprenant retiendra tel quel.
- **Correction proposée** : « Le terme a été forgé par le linguiste Philippe Blanchet. Une
  proposition de loi ajoutant l'accent aux critères de discrimination a été adoptée par
  l'Assemblée nationale en 2020, sans jamais aboutir au Sénat. »
- Sources : [dossier législatif du Sénat](https://www.senat.fr/dossier-legislatif/ppl20-159.html),
  [France Bleu](https://www.francebleu.fr/infos/societe/la-loi-sur-la-discrimination-a-l-accent-bloquee-au-senat-depuis-pres-d-un-1632404248).
- **Vérification** : déjà corrigé — la question porte désormais « Une proposition de loi ajoutant l'accent aux critères de discrimination a été adoptée par l'Assemblée nationale en 2020, sans jamais aboutir au Sénat ».

### [GRAVE] ✅ La loi Deixonne n'a jamais couvert l'alsacien

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:153` — `lf-langues-france`
- **Texte** : « Elle concernait d'abord le breton, le basque, le catalan et l'occitan. **Le
  corse et l'alsacien** s'y sont ajoutés plus tard. »
- **Problème** : la leçon d'accueil de cette même notion, `heritage/.../lecons/langue-francaise/10.json`,
  section « Ce que dit le droit aujourd'hui », écrit : « la loi Deixonne, en 1951, a ouvert la
  première brèche en autorisant un enseignement facultatif du breton, du basque, du catalan et
  de l'occitan, **liste étendue ensuite au corse, au tahitien** et à d'autres ». Le corse a
  été ajouté en 1974, le tahitien en 1981 ; l'alsacien, dialecte germanique, a relevé d'un
  régime distinct et n'a jamais été intégré à la loi Deixonne. La question contredit son
  propre cours — et c'est la question qui a tort.
- **Correction proposée** : « Elle concernait d'abord le breton, le basque, le catalan et
  l'occitan ; le corse s'y est ajouté en 1974, le tahitien en 1981. »
- **Vérification** : déjà corrigé — la question porte désormais « le corse s'y est ajouté en 1974, le tahitien en 1981 », cohérent avec la leçon.

### [GRAVE] 🔧 Quatre des cinq questions de la leçon 04 sont redites par le lot seed

- **Où** : `heritage/culture-g/data/lecons/langue-francaise/04.json` (quiz) contre
  `lf-francophonie` (`prisma/seed/culture-g/langue-francaise.ts:86-110`)
- **Texte** :
  - « Dans quelle ville a été créée en 1970 l'agence…? → **Niamey** » — et l'explication de
    la question seed `:91` donne la réponse : « Créée en 1970 à Niamey ».
  - « Quel poète et chef d'État sénégalais fut l'un des promoteurs de la Francophonie…? →
    **Léopold Sédar Senghor** » / « Qui est l'un des principaux promoteurs africains de l'idée
    de francophonie ? → **Léopold Sédar Senghor** » (`:92`)
  - « Que dit-on d'un créole à base lexicale française…? → C'est une langue à part entière »
    / « Qu'est-ce qu'un créole à base lexicale française ? → Une langue née du contact… »
    (`:108`)
  - « En Belgique francophone, comment dit-on le nombre 90 ? → nonante » — le fait est déjà
    donné par l'explication de `:101`.
- **Problème** : la leçon n'a que cinq questions de quiz ; quatre sont redites ailleurs dans
  la même matière. La première est la pire : la question seed *affiche* la réponse de l'autre
  dans son explication.
- **Correction proposée** : réécrire `lf-francophonie` en partant de ce que la leçon 04 ne
  traite pas (Alliance française, TV5 Monde, loi 101 dans le détail, Vietnam), et retirer les
  quatre recouvrements.
- **Vérification** : le recouvrement sur le nombre 90 en Belgique était déjà réglé (question absente de `lf-francophonie`). Les trois autres (création de l'agence à Niamey, Senghor promoteur, définition du créole) redisaient encore le quiz de la leçon 04 — retirés de `lf-francophonie`, qui garde les points que la leçon ne traite pas (RDC, Nouveau-Brunswick, loi 101, Vietnam, TV5 Monde).

### [GRAVE] 🔧 Les jeux de langue sont traités deux fois de bout en bout

- **Où** : `heritage/culture-g/data/lecons/langue-francaise/11.json` contre `lf2-poesie-langue`
  (`langue-francaise-2.ts:374-398`) et `lf3-jeux-langue` (`langue-francaise-3.ts:528-552`)
- **Problème** : la leçon 11 traite anagramme, palindrome, contrepèterie, calembour,
  lipogramme, Oulipo, *La Disparition*, *Les Revenentes* — et les deux notions seed reposent
  exactement les mêmes questions, avec **les mêmes exemples** : « Ésope reste ici et se
  repose » (leçon 11 et `-2.ts:383`), *La Disparition* et la lettre e (leçon 11 et
  `-3.ts:547`), Bison Ravi (leçon 11 et `-2.ts:385`), l'Oulipo fondé en 1960 par Queneau et
  Le Lionnais (leçon 11 et `cours:394`). Soit une vingtaine de questions seed pour un contenu
  déjà entièrement couvert.
- **Correction proposée** : fusionner `lf2-poesie-langue` et `lf3-jeux-langue` dans
  `cg-langue-francaise-11` en ne gardant que ce que la leçon n'aborde pas (assonance,
  allitération, pangramme, charade, rébus, acrostiche, tautogramme).
- **Vérification** : `lf2-poesie-langue` posait encore contrepèterie, calembour, palindrome (même exemple « Ésope reste ici et se repose » que la leçon 11) et anagramme ; `lf3-jeux-langue` posait encore le lipogramme avec le même exemple (*La Disparition*, la lettre *e*). Ces cinq questions retirées ; les deux notions ne gardent que ce que la leçon 11 ne traite pas.

### [GRAVE] ✅ Dans 83 % des questions, la bonne réponse est la plus longue

- **Où** : les trois lots `prisma/seed/culture-g/langue-francaise*.ts`, 557 questions
- **Mesure** : j'ai comparé, pour chaque question, la longueur de la bonne réponse à celle des
  trois distracteurs.

  | lot | questions | bonne réponse strictement la plus longue | longueur bonne / moyenne des autres |
  |---|---|---|---|
  | `langue-francaise.ts` | 128 | 91 (71 %) | ×1,9 |
  | `langue-francaise-2.ts` | 200 | 175 (88 %) | ×2,1 |
  | `langue-francaise-3.ts` | 229 | 197 (86 %) | ×2,3 |
  | **total seed** | **557** | **463 (83 %)** | **×2,1** |
  | *cahier d'origine, questions libres* | *55* | *19 (35 %)* | *×1,25* |
  | *cahier d'origine, quiz* | *70* | *35 (50 %)* | *×1,27* |

- **Problème** : un apprenant qui coche systématiquement la proposition la plus longue obtient
  83 % sans rien savoir. Ce n'est plus un défaut de style, c'est une faille qui vide les
  questions de leur fonction — et la comparaison avec le cahier d'origine, à 35 %, montre que
  ce n'est pas une fatalité du format mais une habitude d'écriture propre à ces trois lots.
  Les cas les plus voyants :
  - « Combien de modes personnels le français compte-t-il ? — [**Quatre : indicatif,
    subjonctif, conditionnel et impératif** / Trois / Cinq / Deux] » (`-2.ts:68`) : la bonne
    réponse est **treize fois** plus longue que la moyenne des autres.
  - « Combien de genres le latin comptait-il ? — [**Trois : masculin, féminin et neutre** /
    Deux / Quatre / Un seul] » (`-2.ts:224`) : ×6,2.
  - « Quand les mots croisés apparaissent-ils ? — [**En 1913, dans un journal new-yorkais** /
    En 1890 / En 1930 / En 1875] » (`-3.ts:532`) : seule la bonne réponse mentionne un lieu.
- **Correction proposée** : mettre les quatre propositions au même gabarit. Pour les questions
  de dénombrement, ne donner que le nombre dans les quatre propositions et déplacer
  l'énumération dans l'explication : « Combien de modes personnels le français compte-t-il ? —
  [Quatre / Trois / Cinq / Deux] », explication « Indicatif, subjonctif, conditionnel et
  impératif ; infinitif, participe et gérondif sont impersonnels. »
- **Vérification** : déjà corrigé — mesuré à nouveau sur les trois lots, la bonne réponse est
  désormais strictement la plus longue dans 37 % des questions (contre 83 % à l'audit), un taux
  comparable à celui du cahier d'origine cité en référence. Les trois exemples cités (modes
  personnels, genres du latin, mots croisés) ont chacun été retraités en étoffant les
  distracteurs plutôt qu'en réduisant la bonne réponse, si bien qu'aucun des trois n'est plus
  signalé par sa longueur.

### [GRAVE] 🔧 Trente-cinq propositions se terminent par un mot-signal, aucune n'est la bonne

- **Où** : les trois lots seed
- **Mesure** : 26 propositions se terminent par « seul / seule / seuls » (« Le Roman de la
  Rose **seul** », « Pantagruélique **seule** », « Ambassadeur **seul** », « Le Procès
  **seul** », « George Sand **seule** », « Casanova **seul** », « Quintessence **seule** »,
  « Le loucherbem **seul** », « Le Serment de Verdun »…) et 9 par
  « uniquement / systématiquement / toujours ». **Aucune de ces trente-cinq propositions n'est
  la bonne réponse.**
- **Problème** : c'est une seconde clé de lecture, indépendante de la longueur. Combinée à la
  précédente, elle permet de répondre juste sans lire l'énoncé.
- **Correction proposée** : réécrire ces distracteurs sans le mot-béquille — ou, quand le
  « seul » sert vraiment à les rendre faux, déplacer la restriction ailleurs dans la phrase.
- **Vérification** : 13 des 35 propositions avaient déjà été retraitées. Les 22 restantes (21 en
  « seul(e)(s) » et 1 en « uniquement ») ont été réécrites sans le mot-béquille — en le retirant
  simplement quand il n'était pas nécessaire au caractère faux de la proposition, ou en déplaçant
  la restriction ailleurs dans la phrase quand il l'était (par exemple « Ambassadeur, et lui
  seul » → « Ambassadeur, un terme propre au français hexagonal »).

### [GRAVE] 🔧 La même question sur « si j'avais su » posée deux fois dans le cahier

- **Où** : `heritage/culture-g/data/langue-francaise.json`, quiz du cours « Orthographe et
  accords : les pièges du français » — et
  `heritage/culture-g/data/lecons/langue-francaise/06.json`, quiz
- **Texte** : « Laquelle de ces phrases est correcte ? [Si j'aurais su, je ne serais pas
  venu. / **Si j'avais su, je ne serais pas venu.** / …] » et « Laquelle de ces quatre phrases
  respecte la règle de concordance après le « si » de condition ? [Si j'aurais su, je ne
  serais pas venu. / **Si j'avais su, je ne serais pas venu.** / …] »
- **Problème** : même règle, même bonne réponse au caractère près, et deux distracteurs
  identiques. Ce doublon-là est interne au cahier d'origine, il ne vient pas des lots seed.
- **Correction proposée** : retirer la question du quiz du cours « Orthographe et accords »,
  la leçon 06 la traite avec une explication plus complète.
- **Vérification** : encore présente à l'identique dans `heritage/culture-g/data/langue-francaise.json` (quiz du cours « Orthographe et accords ») en plus de la leçon 06. Question retirée du cours.

### [MOYEN] ✅ L'invention du mot « robot » est attribuée au mauvais Čapek

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:73` — `lf-etymologie` ;
  `cours/langue-francaise.ts:12`
- **Texte** : « Karel Čapek forge le terme en 1920 pour sa pièce R.U.R. » / « le mot a été
  forgé par l'écrivain Karel Čapek dans une pièce de 1920 »
- **Problème** : Karel Čapek a lui-même écrit publiquement que le mot lui avait été soufflé
  par son frère **Josef** Čapek. L'attribution est un point d'histoire bien documenté.
- **Correction proposée** : « Karel Čapek l'emploie dans sa pièce *R.U.R.* (1920), mais il a
  reconnu tenir le mot de son frère Josef. »
- **Fait** : explication de la question et phrase du cours réécrites pour créditer Josef Čapek.

### [MOYEN] ✅ La loi Duruy n'a pas étendu « l'obligation » aux filles

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:277` — `lf-lecture-illettrisme`
- **Texte** : « La loi Duruy de 1867 étendra l'obligation aux filles. »
- **Problème** : il n'existait aucune obligation de scolarisation avant 1882. La loi Duruy
  oblige les **communes** de plus de cinq cents habitants à ouvrir une école de filles ; elle
  n'oblige personne à y aller. Écrit ainsi, l'apprenant retiendra qu'une obligation scolaire
  existait dès 1867.
- **Correction proposée** : « La loi Duruy de 1867 oblige les communes de plus de cinq cents
  habitants à ouvrir une école de filles. »
- **Fait** : explication corrigée en ce sens.

### [MOYEN] ✅ Braille avait seize ans en 1825, pas quinze

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:184-185` — `lf-ecriture-alphabets`
- **Texte** : « Qui met au point un système d'écriture en relief pour les aveugles en 1825 ?
  … *Il avait quinze ans.* »
- **Problème** : Louis Braille est né le 4 janvier 1809. En 1825 il a seize ans. La version
  courante est « en 1824, à quinze ans ». La date et l'âge donnés dans la même ligne sont
  incompatibles.
- **Correction proposée** : soit « en 1824 … il avait quinze ans », soit « en 1825 … il avait
  seize ans ».
- **Fait** : question alignée sur « en 1824 » (l'âge de quinze ans est conservé).

### [MOYEN] ✅ « Octante » n'est pas une variante suisse vivante

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:101` ; `langue-francaise-3.ts:171`
- **Texte** : « La Suisse romande ajoute huitante ou octante selon les cantons. »
- **Problème** : *huitante* est employé à Vaud, en Valais et à Fribourg ; *octante* est
  pratiquement sorti de l'usage. Genève et Neuchâtel disent *quatre-vingts*. Le cours, lui,
  ne mentionne que *huitante* (`cours/langue-francaise.ts:792`) — il est plus juste que les
  deux questions.
- **Correction proposée** : « La Suisse romande ajoute *huitante* dans plusieurs cantons ;
  Genève et Neuchâtel emploient *quatre-vingts*. »
- **Fait** : les deux explications (lot 1 et lot 3) corrigées en ce sens ; le doublon des deux
  questions elles-mêmes reste (constat GRAVE distinct, hors périmètre).

### [MOYEN] ✅ Le largonji n'insère pas de syllabes — le cours le dit, la question non

- **Où** : `prisma/seed/culture-g/langue-francaise-2.ts:198-199` — `lf2-argot-francais`
- **Texte** : « Quel procédé consiste à insérer des syllabes parasites dans les mots ? —
  Le largonji ou le javanais »
- **Problème** : le javanais insère bien des syllabes (*Paris* → *pavaravis*). Le largonji,
  lui, **déplace l'initiale, la remplace par un *l* et ajoute un suffixe** — c'est le procédé
  du loucherbem, et le cours de la même notion l'explique correctement
  (`cours/langue-francaise.ts:300` : « *jargon* devient *largonji* — le nom du procédé étant
  lui-même produit par le procédé »). La réponse de la question est donc à moitié fausse, et
  la question suivante (`:200`) attribue au loucherbem la définition même du largonji.
- **Correction proposée** : réponse « Le javanais » seule.
- **Fait** : déjà conforme — la question (`langue-francaise-2.ts:198`) ne propose plus que
  « Le javanais des faubourgs parisiens » comme bonne réponse, avec l'explication qui distingue
  largonji et javanais. Rien à changer.

### [MOYEN] ✅ « Éponyme » défini à l'envers

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:76` — `lf-etymologie`
- **Texte** : « Qu'est-ce qu'un éponyme ? — Un mot commun formé sur un nom propre »
- **Problème** : l'éponyme est la personne (ou la chose) **qui donne son nom** ; le mot commun
  qui en dérive relève de l'antonomase ou de la déonomastique. Le cours emploie d'ailleurs le
  terme juste : « Certains mots communs sont d'anciens noms propres, phénomène que les
  linguistes appellent **antonomase** » (`cours/langue-francaise.ts:281`). La question
  contredit son cours sur la terminologie.
- **Correction proposée** : « Qu'appelle-t-on une antonomase ? — Un nom propre devenu nom
  commun ».
- **Fait** : question reformulée en ce sens. En creusant j'ai trouvé la même confusion
  « éponyme »/« antonomase » à la source, dans le cours lui-même (`cours:12`, section
  « Fabriquer des mots ») — corrigé aussi en remplaçant « L'éponyme forme un nom commun… »
  par « L'antonomase forme un nom commun… ».

### [MOYEN] ✅ Les exemples du suffixe -acum n'illustrent pas la règle

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:309` — `lf-noms-propres`
- **Texte** : « Il donne -ay, -é ou -y dans le nord de la France : Cormeilles, Vitry, Chambly. »
- **Problème** : trois formes annoncées (-ay, -é, -y) et trois exemples donnés, mais
  *Cormeilles* ne se termine par aucune des trois et n'est pas un dérivé en *-acum*. Seuls
  *Vitry* et *Chambly* illustrent le propos. Le cours (`:93`) donne, lui, des exemples corrects
  (Vitry, Savigny).
- **Correction proposée** : « Il donne -y, -ay ou -é dans le nord : Vitry, Chambly, Savigny. »
- **Fait** : explication corrigée en ce sens (Cormeilles retiré).

### [MOYEN] ✅ Chiffres sans date

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:32` (« Environ trois cent vingt millions »
  de francophones « selon l'OIF ») ; `:286` (« Environ sept pour cent » d'adultes en situation
  d'illettrisme) ; `langue-francaise-3.ts:558` (« Environ cent trente millions » d'apprenants)
- **Problème** : ces chiffres viennent de rapports datés (OIF 2022 : 321 millions ;
  132 millions d'apprenants ; enquêtes ANLCI/INSEE). Présentés sans millésime, ils seront
  faux dans quelques années et l'apprenant n'a aucun moyen de le savoir. La consigne demande
  explicitement de signaler « un chiffre sans date alors qu'il a changé ».
- **Correction proposée** : ajouter le millésime dans l'explication — « 321 millions selon le
  rapport de l'OIF de 2022 ».
- **Fait** : millésime ajouté aux trois explications (OIF 2022 pour les locuteurs et les
  apprenants, enquête Insee IVQ 2011 pour l'illettrisme).

### [MOYEN] ✅ Le compte des francophones du Québec se contredit dans sa propre phrase

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:144-145` ; `cours/langue-francaise.ts:755`
- **Texte** : « Plus de six millions » … « le français y est la langue maternelle d'environ
  quatre-vingts pour cent de la population »
- **Problème** : le Québec compte environ 8,9 millions d'habitants ; 80 % de langue maternelle
  française font déjà plus de sept millions, et près de 94 % de la population parle français.
  « Plus de six millions » est techniquement vrai mais incompatible avec le pourcentage donné
  dans la même explication.
- **Correction proposée** : « Plus de sept millions » avec « environ 78 % de locuteurs de
  langue maternelle française ».
- **Fait** : question (`langue-francaise-3.ts:144-145`) et cours (`:755`) alignés sur « plus
  de sept millions » / « environ soixante-dix-huit pour cent ».

### [MOYEN] ✅ « Après la conquête britannique de 1763 »

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:757` — `lf3-francais-quebec`
- **Problème** : la conquête militaire est de 1759-1760 (Plaines d'Abraham, capitulation de
  Montréal) ; 1763 est la date du traité de Paris qui cède la Nouvelle-France. Mélanger les
  deux est une imprécision facile à éviter.
- **Correction proposée** : « Après la conquête britannique de 1759-1760, entérinée par le
  traité de Paris de 1763 ».
- **Fait** : phrase corrigée en ce sens.

### [MOYEN] ✅ « Rrose Sélavy » n'est pas une anagramme

- **Où** : `prisma/seed/culture-g/langue-francaise-2.ts:385` — `lf2-poesie-langue`
- **Texte** : « Marcel Duchamp signait Rrose Sélavy, anagramme approximative d'Éros c'est la vie. »
- **Problème** : *Rrose Sélavy* / « Éros, c'est la vie » est une **homophonie**, un calembour —
  pas un réarrangement de lettres. Dans une question qui définit précisément l'anagramme,
  l'exemple contredit la définition. Le cours donne, lui, de vraies anagrammes
  (*Boris Vian* → *Bison Ravi*).
- **Correction proposée** : « Boris Vian signait Bison Ravi, anagramme exacte de son nom. »
- **Fait** : explication remplacée en ce sens.

### [MOYEN] ✅ « Captain Samouraï Flower » donné comme anagramme

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:493` — `lf2-poesie-langue`
- **Texte** : « Pascal Obispo signant Captain Samouraï Flower »
- **Problème** : le pseudonyme compte une vingtaine de lettres contre douze pour « Pascal
  Obispo » : ce ne peut pas être une anagramme de son nom. **Incertain** sur ce que le
  pseudonyme anagrammatise réellement, mais l'exemple ne tient pas tel qu'il est présenté.
- **Correction proposée** : le supprimer, l'exemple de Boris Vian qui suit suffit.
- **Fait** : exemple Pascal Obispo retiré de la phrase, ne reste que Boris Vian / Bison Ravi.

### [MOYEN] ✅ « un tiers du vocabulaire courant vient d'ailleurs que du latin »

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:143` — `lf2-anglicismes`
- **Problème** : les décomptes usuels (Henriette Walter sur le *Petit Robert*) situent les
  emprunts aux langues autres que le latin et le grec autour de 13 %. « Un tiers » me paraît
  très surestimé et n'est rattaché à aucune source. **À vérifier.**
- **Correction proposée** : « Les emprunts aux autres langues représentent environ un mot
  sur huit du vocabulaire courant. »
- **Fait** : phrase remplacée par la correction proposée (chiffre de Henriette Walter, ~13 %).

### [MOYEN] ✅ « doctoresse » attribué au français médiéval

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:332` — `lf2-genres-noms`
- **Texte** : « le français médiéval disposait de *doctoresse*, *mairesse*, *chirurgienne*,
  *autrice* »
- **Problème** : *mairesse*, *chirurgienne* et *autrice* sont bien attestés en ancien ou moyen
  français ; *doctoresse* est une formation du XIXe siècle. **À vérifier**, mais l'exemple
  paraît anachronique dans une liste qui sert justement à établir l'ancienneté des formes.
- **Correction proposée** : retirer *doctoresse* de la liste.
- **Fait** : traité en même temps que le constat « autrice : médiéval, XVIIe siècle, ou les
  deux ? » ci-dessous — *doctoresse* retiré, *autrice* redaté au XVIIe siècle.

### [MOYEN] ✅ « entre vous et je » : un exemple d'hypercorrection qui n'est pas français

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:738` — `lf3-normes-usages`
- **Problème** : « entre vous et je » est le calque d'un phénomène anglais (*between you and I*).
  Ce n'est pas une hypercorrection attestée en français, où l'on dit « entre vous et moi » sans
  effort. L'exemple n'illustre pas la notion pour un francophone.
- **Correction proposée** : le remplacer par « je vous serais gré » (pour « je vous saurais
  gré »), hypercorrection française bien attestée.
- **Fait** : remplacé dans le cours. Au passage, la question `langue-francaise-3.ts:127`
  ciblée par le constat GRAVE voisin (« je m'en rappelle ») était déjà corrigée et utilise
  cet exemple.

### [MOYEN] ✅ Le point d'ironie : XVIe ou XIXe siècle ?

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:263` (« depuis le XVIe siècle ») ;
  `cours/langue-francaise.ts:866` (« depuis le XIXe siècle — par Alcanter de Brahm »)
- **Problème** : le cours et la question donnent deux siècles différents pour la même
  information. Alcanter de Brahm propose son point d'ironie en 1899.
- **Correction proposée** : aligner sur « depuis la fin du XIXe siècle ».
- **Fait** : explication de la question corrigée en ce sens (l'énoncé lui-même ne mentionnait
  déjà plus de siècle).

### [MOYEN] ✅ Énoncés auxquels la bonne réponse ne répond pas grammaticalement

- **Où** : plusieurs, dont
  `langue-francaise-3.ts:238` (« Quel **roman** a donné l'adjectif kafkaïen ? » → « L'œuvre de
  Kafka **dans son ensemble** » : la réponse nie l'énoncé) ;
  `langue-francaise-3.ts:406` (« **Sur quel nom** l'accord de proximité se fait-il ? » →
  « L'accord de l'adjectif avec le nom le plus proche ») ;
  `langue-francaise-3.ts:544` (« **Sur quel principe** repose un mot-valise ? » → « Un mot
  formé par fusion de deux mots ») ;
  `langue-francaise-2.ts:152` (« Qu'est-ce **qu'un phonème** disparu … ? » → « La distinction
  entre brin et brun ») ;
  `langue-francaise-3.ts:338` (« Quel **mot** … ? » → « Attaché, chargé d'affaires et
  communiqué », trois mots) ;
  `langue-francaise.ts:334-338` (« Qu'est-ce qu'un homme de paille ? » → « **Déformer** la
  thèse adverse », infinitif pour un nom).
- **Problème** : dans un module de langue française, l'accord entre l'énoncé et sa réponse est
  la première chose que l'apprenant remarque. Plusieurs de ces réponses ne sont pas de la
  catégorie demandée.
- **Correction proposée** : reformuler l'énoncé dans chaque cas (« De quel auteur vient
  l'adjectif kafkaïen ? », « Avec quel nom l'adjectif s'accorde-t-il dans l'accord de
  proximité ? », etc.).
- **Fait** : les six énoncés reformulés pour accorder question et réponse — kafkaïen (auteur
  au lieu de roman), accord de proximité (« avec quel nom »), mot-valise (« comment… est-il
  formé »), phonème brin/brun (reformulé en son nasal), mots diplomatiques (question mise au
  pluriel), homme de paille (« en quoi consiste… »).

### [MOYEN] ✅ La bonne réponse est la seule à être précisée

- **Où** : `prisma/seed/culture-g/langue-francaise-2.ts:232` — `lf2-genres-noms`
- **Texte** : « Quel mot est souvent employé au mauvais genre en français ? —
  [**Autoroute, qui est féminin** / Avion / Wagon / Bureau] »
- **Problème** : la bonne réponse est la seule à porter une explication (« qui est féminin ») ;
  elle se repère sans rien savoir. Même défaut ailleurs : « Tennis, **issu du français tenez** »
  (`:48`), « Magazine, **du français magasin** » (`langue-francaise-3.ts:334`),
  « Gargantuesque, **formé sur Gargantua** » (`:288`).
- **Correction proposée** : mettre toutes les propositions au même format (« Autoroute »,
  « Avion », « Wagon », « Bureau »).
- **Fait** : `langue-francaise-2.ts:232` (Autoroute) mis au même format, l'annotation déplacée
  dans l'explication. `Tennis` (`:48`) était déjà corrigé (fusionné avec le constat GRAVE sur
  le doublon budget/tennis). `Magazine` (`langue-francaise-3.ts:334`) a déjà une annotation sur
  chaque proposition, plus de dissymétrie. **`Gargantuesque, formé sur Gargantua`
  (`langue-francaise-2.ts:288`) n'a pas été touché** : c'est la même question que le constat
  GRAVE « Rabelais avait déjà fourni gargantuesque », qui ne semble pas avoir été appliqué
  (voir signalement en fin de rapport) — je laisse cette ligne à qui traitera ce GRAVE.

### [MOYEN] ⏭️ Redondance entre notions voisines

- `lf2-numerique-langue` et `lf3-francais-numerique-usages` traitent le même sujet (émoji,
  abréviations, effet sur l'orthographe) — cf. `langue-francaise-2.ts:436-438` et
  `langue-francaise-3.ts:586-602`.
- `lf2-genres-noms` (section « Les procédés en débat ») et `lf3-ecriture-inclusive` reprennent
  intégralement écriture inclusive, doublets, point médian, accord de proximité.
- `lf-noms-propres` (« Les noms de lieux ») et `lf2-noms-lieux-france` partagent le suffixe
  -ac et le préfixe Plou-/Ker-.
- `lf-communication-rhetorique` (argument d'autorité, homme de paille) et
  `lf3-argumentation-langue` (argument d'autorité, réfutation, épouvantail) se recouvrent.
- **Correction proposée** : arbitrer une notion propriétaire par sujet et retirer les doublons
  des autres.
- **Fait** : écarté délibérément. Vérifié que les quatre recouvrements sont bien réels (par
  exemple, `lf2-numerique-langue`/`lf3-francais-numerique-usages` partagent une question émoji
  à l'explication identique au mot près — mais celle-ci est déjà l'objet d'un constat GRAVE
  distinct, apparemment non traité, cf. signalement en fin de rapport). Une vraie correction
  suppose de choisir, pour chacune des quatre paires, une notion propriétaire et de réécrire ou
  retirer plusieurs questions de l'autre — une décision de contenu qui dépasse un correctif
  ponctuel et qui risquerait, faite à la hâte, de casser l'équilibre des lots (comptes de
  questions, fusions.ts). Je laisse ce chantier à un passage dédié.

### [MOYEN] ✅ Cendrillon : « sept siècles » ne colle pas

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:1074` — `lf3-oralite-traditions`
- **Texte** : « une version chinoise du IXe siècle antérieure de sept siècles à celle de Perrault »
- **Problème** : le conte de Ye Xian est daté du milieu du IXe siècle, la *Cendrillon* de
  Perrault de 1697 : l'écart est de plus de huit siècles, pas de sept.
- **Correction proposée** : « … antérieure de plus de huit siècles à celle de Perrault ».
- **Fait** : phrase corrigée en ce sens.

### [MOYEN] ✅ Dièse ou croisillon : la question contredit le cours

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:594` — `lf3-francais-numerique-usages`
- **Texte** : « Qu'est-ce qu'un hashtag ? — Un mot-clé précédé d'un **dièse** servant à indexer
  un contenu »
- **Problème** : le cours de `lf2-anglicismes` (`cours/langue-francaise.ts:154`) explique
  précisément que « le signe employé n'est pas un dièse mais un croisillon », et le cours
  attaché à la notion même de cette question (`:1175`) écrit « précédé d'un croisillon ». La
  bonne réponse de la question reprend l'erreur que les cours dénoncent.
- **Correction proposée** : « Un mot-clé précédé d'un croisillon servant à indexer un contenu ».
- **Fait** : question corrigée en ce sens.

### [MOYEN] ✅ Un exemple annoncé et jamais donné

- **Où** : `heritage/culture-g/data/langue-francaise.json` — cours « Les figures de style »,
  section « Opposition, insistance et atténuation »
- **Texte** : « Le paradoxe pousse plus loin en énonçant une idée qui heurte l'opinion
  commune, comme dans la formule de La Rochefoucauld. »
- **Problème** : la formule n'est pas citée. Toutes les autres figures de la section sont
  illustrées par un exemple précis ; celle-ci renvoie à un exemple absent, ce qui rend la
  phrase inutilisable pour qui ne connaît pas déjà la maxime visée.
- **Correction proposée** : citer la maxime, par exemple « nos vertus ne sont, le plus
  souvent, que des vices déguisés ».
- **Fait** : maxime citée dans le texte, JSON revérifié valide.

### [MOYEN] ✅ « loucherbem » ou « louchébem » : deux graphies dans le même produit

- **Où** : `heritage/culture-g/data/langue-francaise.json` q51 (« Le louchébem ») contre
  `prisma/seed/culture-g/langue-francaise-2.ts:200` et
  `cours/langue-francaise.ts:300` (« loucherbem »)
- **Problème** : les deux graphies existent, mais un apprenant qui rencontre les deux dans la
  même matière conclura que l'une est fautive. Même problème pour *émoji* / *emoji*
  (`-2.ts:438` contre `-3.ts:590`), pour *vigésimal* / *vicésimal* (`cours:792` contre
  héritage q52), et pour le titre de Du Bellay, modernisé côté seed
  (`langue-francaise.ts:22` : « La Défense et illustration de la langue française ») et donné
  en graphie d'époque côté héritage (« la Deffence et illustration de la langue françoyse »).
- **Correction proposée** : arrêter une graphie par mot et l'appliquer partout.
- **Fait** : standardisé sur les quatre points cités — « loucherbem » partout (héritage
  `langue-francaise.json` et `lecons/05.json` alignés sur la graphie majoritaire du seed),
  « émoji » partout (`langue-francaise-3.ts:590` aligné), « vigésimal » partout (héritage
  aligné sur le terme du cours), et le titre modernisé « La Défense et illustration de la
  langue française » retenu dans le héritage aussi (à la place de la graphie d'époque).

### [MOYEN] ✅ Deux questions sur « tomber dans les pommes » dans la même notion

- **Où** : `fusions.ts:131` verse `lf-expressions-francaises` dans `cg-langue-francaise-02`
- **Texte** : « Que signifie « tomber dans les pommes » ? → S'évanouir. *L'origine est
  incertaine : peut-être une déformation de « pâmes »* » (`langue-francaise.ts:220`) et
  « Que dit la recherche étymologique sur l'expression « tomber dans les pommes » ? → Son
  origine reste incertaine » (quiz de la leçon 02).
- **Problème** : l'explication de la première question est la réponse de la seconde. Les deux
  arriveront dans la même série.
- **Correction proposée** : retirer la question du lot seed, la leçon traite le point mieux
  et plus longuement.
- **Fait** : question retirée de `langue-francaise.ts` (`lf-expressions-francaises`).

### [MOYEN] ✅ « autrice » : médiéval, XVIIe siècle, ou les deux ?

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:332` (« le français médiéval
  disposait de doctoresse, mairesse, chirurgienne, autrice ») contre
  `heritage/culture-g/data/lecons/langue-francaise/03.json`, section « Féminisation et
  écriture inclusive » (« autrice, ce dernier attesté dès le XVIIe siècle »)
- **Problème** : deux datations différentes pour le même mot dans le même produit. La leçon
  est la plus prudente des deux ; le cours seed est celui qui ajoute *doctoresse*, formation
  du XIXe siècle, à une liste présentée comme médiévale.
- **Correction proposée** : aligner sur la leçon, et retirer *doctoresse* de la liste du cours.
- **Fait** : cours réécrit — *autrice* n'est plus daté du médiéval mais du XVIIe siècle (aligné
  sur la leçon 03), *mairesse* et *chirurgienne* restent en ancien/moyen français, *doctoresse*
  retiré.

### [MOYEN] ✅ Rectifications de 1990 : deux sources donnent 2008, la question dit 2016

- **Où** : `heritage/culture-g/data/lecons/langue-francaise/03.json` (« Les programmes
  scolaires français y font référence depuis 2008 ») et
  `cours/langue-francaise.ts:214` (« depuis 2008 ») contre
  `prisma/seed/culture-g/langue-francaise-2.ts:107` (« Les manuels scolaires les appliquent
  depuis 2016 »)
- **Problème** : les deux dates sont défendables — les programmes de 2008 donnent
  l'orthographe rectifiée comme référence, ceux de 2016 le réaffirment —, mais le cours seed
  et la leçon du cahier disent tous deux 2008, et la question du lot 2 est seule à dire 2016.
  Un apprenant qui lit le cours puis répond à la question voit une contradiction ; c'est la
  question qu'il faut aligner.
- **Correction proposée** : « Les programmes scolaires les donnent comme référence depuis
  2008, ce que les programmes de 2016 ont réaffirmé. »
- **Fait** : explication corrigée en ce sens.

### [MOYEN] ✅ Trois traitements incompatibles de « je m'en rappelle »

- **Où** : `langue-francaise-3.ts:127` (hypercorrection), `cours/langue-francaise.ts:728`
  (régularisation parfaitement cohérente), `heritage/.../lecons/langue-francaise/07.json`
  (« la faute la plus tenace du français parlé »)
- **Problème** : le même fait de langue reçoit trois étiquettes différentes dans le même
  domaine — une faute par excès de zèle, un usage régulier qu'il ne faut pas condamner, et une
  faute tenace. Un apprenant qui rencontre les trois ne sait plus quoi retenir. Le premier
  des trois est en outre linguistiquement faux, et sa formulation (« par crainte de je m'en
  souviens ») n'a pas de sens.
- **Correction proposée** : garder la position descriptive du cours et de la leçon (« une
  construction régulière, mais écartée par la norme »), et supprimer l'exemple de la question
  sur l'hypercorrection, en le remplaçant par une liaison fautive.
- **Fait** : la question sur l'hypercorrection (`langue-francaise-3.ts:127`) ne cite déjà plus
  « je m'en rappelle » — elle utilise l'exemple « je vous serais gré » (cf. constat MOYEN sur
  « entre vous et je » ci-dessus). La leçon 07 du cahier (« demeure la faute la plus tenace »)
  a été adoucie pour rejoindre la position du cours : construction par analogie, très répandue,
  que la norme continue d'écarter — sans plus la qualifier de « faute ».

### [MOYEN] ✅ L'OIF ne compte plus quatre-vingt-huit membres

- **Où** : `heritage/culture-g/data/lecons/langue-francaise/04.json` — section
  « L'Organisation internationale de la Francophonie »
- **Texte** : « L'organisation réunit **aujourd'hui quatre-vingt-huit** États et
  gouvernements »
- **Problème** : c'était le compte issu du sommet de Djerba (2022). Le sommet de
  Villers-Cotterêts (2024) a admis de nouveaux membres et porté le total au-delà. Le mot
  « aujourd'hui » accolé à un chiffre daté est précisément le défaut que la consigne demande
  de signaler. **À vérifier** pour le chiffre exact avant correction.
- **Correction proposée** : « L'organisation réunissait quatre-vingt-huit États et
  gouvernements après le sommet de Djerba en 2022, et elle s'est encore élargie depuis. »
- **Fait** : chiffre exact vérifié par recherche web — le sommet de Villers-Cotterêts
  (octobre 2024) a porté le total à 93 États et gouvernements (56 membres, 5 associés,
  32 observateurs). Les deux occurrences (texte de la leçon et explication du quiz) mises à
  jour : « quatre-vingt-huit … après Djerba en 2022 », « quatre-vingt-treize depuis
  Villers-Cotterêts en 2024 ».

### [MOYEN] ✅ « L'anglais ne met aucune espace »

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:247` — `lf-ponctuation-typographie`
- **Texte** : « Une espace insécable, pour éviter que le signe ne passe seul à la ligne.
  **L'anglais ne met aucune espace.** »
- **Problème** : l'anglais met bien une espace **après** ces signes ; ce qu'il ne met pas,
  c'est une espace **avant**. Écrite sans ce mot, la phrase est fausse — et elle l'est dans la
  notion même qui enseigne la typographie.
- **Correction proposée** : « L'anglais n'en met aucune avant. »
- **Fait** : phrase corrigée en ce sens.

### [MINEUR] ✅ Capitale manquante en tête de proposition

- **Où** : `langue-francaise.ts:96` (« l'Ontario »), `:102` (« l'Indonésie »), `:104`
  (« l'Institut français »), `:142` (« l'occitan », « l'alsacien »), `:148`, `:158`, `:324`
  (« l'ethos, le pathos et le logos ») ; `langue-francaise-2.ts:20` (« l'estonien »), `:26`
  (« l'anglais », « l'espagnol », « l'hindi »), `:50` (« l'arabe ») ;
  `langue-francaise-3.ts:148` (« l'Office québécois… », « l'Académie québécoise »), `:332`,
  `:570` (« l'Institut français »).
- **Problème** : les autres propositions de la même question commencent par une capitale.
  L'incohérence est visible à l'écran, et en `langue-francaise-2.ts:50` c'est la **bonne**
  réponse qui se distingue ainsi des trois autres.
- **Correction proposée** : capitale initiale partout (« L'Ontario », « L'occitan », …).
- **Fait** : déjà conforme — vérifié un par un les douze emplacements cités (Ontario,
  Indonésie, Institut français, occitan, alsacien ×2, ethos, estonien, anglais/espagnol/hindi,
  arabe, Office québécois, Institut français bis) : toutes les propositions portent déjà une
  capitale initiale dans les trois lots. Recherche systématique par motif ne trouve plus aucune
  proposition commençant par une minuscule après une apostrophe. Rien à changer.

### [MINEUR] ✅ Apostrophes droites dans tout le corpus

- **Où** : les quatre fichiers, sans exception.
- **Problème** : la consigne demande l'apostrophe courbe (’). Le corpus emploie
  systématiquement l'apostrophe droite ('). C'est un choix cohérent et sans doute délibéré
  (contrainte de code source), mais il vaut d'être signalé dans une notion qui **enseigne**
  la typographie française (`lf-ponctuation-typographie`).
- **Correction proposée** : décision globale à prendre, ou mention explicite dans le cours.
- **Fait** : converti tout le corpus en apostrophe courbe étant hors de proportion pour ce
  correctif (des milliers d'occurrences, dans du code source où l'apostrophe droite sert aussi
  de délimiteur de chaîne), j'ai retenu l'option « mention explicite » : ajouté un paragraphe
  dans `lf-ponctuation-typographie` (section « Une typographie nationale ») qui nomme la règle
  correcte (apostrophe courbe) et explique que le corpus emploie la droite pour des raisons
  techniques.

### [MINEUR] ✅ « Saint-Glinglin » : les deux éléments sont intervertis

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:237`
- **Texte** : « le mot viendrait d'un croisement entre seing, le signe, et glinglin, la cloche »
- **Problème** : l'explication usuelle fait de *seing* (du latin *signum*) la **cloche**, et
  de *glinglin* (de *glinguer*, sonner) le **son**. Les gloses sont inversées.
- **Correction proposée** : « … entre *seing*, du latin *signum* qui a désigné la cloche, et
  *glinglin*, tiré du dialectal *glinguer*, sonner. »
- **Fait** : explication corrigée en ce sens.

### [MINEUR] ✅ « apostrophes doubles » pour les guillemets anglais

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:863` — `lf3-ponctuation-usages`
- **Texte** : « Le français a conservé les chevrons doubles, là où l'anglais emploie des
  apostrophes doubles. »
- **Problème** : le terme typographique est « guillemets anglais » (ou « guillemets droits
  doubles »). Parler d'« apostrophes doubles » dans un cours de ponctuation est un
  contresens terminologique.
- **Correction proposée** : « … là où l'anglais emploie les guillemets anglais. »
- **Fait** : phrase corrigée en ce sens.

### [MINEUR] ✅ La conversion, illustrée par des étiquettes fausses

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:698` — `lf3-vocabulaire-formation`
- **Texte** : « l'adjectif *le beau*, le verbe *le manger*, le nom *un rouge* »
- **Problème** : *rouge* est un adjectif, pas un nom — c'est justement le point de départ de
  la conversion. Les étiquettes désignent tantôt la catégorie de départ, tantôt celle
  d'arrivée, et la troisième est fausse dans les deux lectures.
- **Correction proposée** : « l'adjectif *beau* devenu nom dans *le beau*, l'infinitif
  *manger* dans *le manger*, l'adjectif *rouge* dans *un rouge* ».
- **Fait** : phrase réécrite en ce sens.

### [MINEUR] ✅ « les langues romanes descendent toutes de caballus »

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:121`
- **Problème** : ce sont les **mots** romans désignant le cheval qui descendent de *caballus*,
  non les langues.
- **Correction proposée** : « … et les mots romans pour « cheval » descendent tous de
  *caballus* ».
- **Fait** : phrase corrigée en ce sens.

### [MINEUR] ✅ Énoncé bancal sur les registres belges

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:100`
- **Texte** : « Comment appelle-t-on la variété de français parlée en Belgique pour
  « soixante-dix » ? »
- **Problème** : la phrase ne veut rien dire — on ne nomme pas une « variété de français …
  pour soixante-dix ». Le distracteur « Septuante » n'existe par ailleurs dans aucun usage.
- **Correction proposée** : « Comment dit-on soixante-dix en Belgique ? »
- **Fait** : énoncé reformulé en ce sens.

### [MINEUR] ✅ Question de typographie construite sur une ambiguïté invisible

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:264`
- **Texte** : « Quel signe distingue « des jumelles » de « des jumelles » selon le contexte,
  faute de marque écrite ? »
- **Problème** : l'énoncé répète deux fois la même chaîne, ce qui donne à l'écran une question
  qui paraît bugguée. L'idée (aucun signe ne les distingue) est juste, mais la formulation la
  rend illisible.
- **Correction proposée** : « Qu'est-ce qui distingue à l'écrit les deux sens de « des
  jumelles » ? »
- **Fait** : énoncé reformulé en ce sens.

### [MINEUR] ✅ « ver, vers, vert, verre, vair et Vert »

- **Où** : `heritage/culture-g/data/langue-francaise.json` — cours « Orthographe et accords »,
  section « Pourquoi l'orthographe française est-elle si difficile ? »
- **Problème** : la série d'homophones énumère *vert* puis *Vert* avec une majuscule, sans
  dire que le second est un nom propre. Le lecteur y verra une coquille — ou pire, croira à
  deux orthographes du même adjectif.
- **Correction proposée** : « ver, vers, vert, verre, vair, et le nom propre Vert ».
- **Fait** : phrase corrigée en ce sens.

### [MINEUR] ✅ Des chiffres en chiffres dans un corpus qui écrit les nombres en toutes lettres

- **Où** : `heritage/culture-g/data/lecons/langue-francaise/06.json` (« Le troisième groupe,
  avec environ **485** verbes ») et `11.json` (« le Grand Palindrome de 1969 aligne **5 566**
  lettres »)
- **Problème** : tout le reste du domaine écrit les nombres en toutes lettres — « une centaine
  de mots », « environ quatre cents mots », « à peine trois cents », dans les phrases voisines
  du même paragraphe. Ces deux chiffres détonnent. Le premier est en outre d'une précision
  suspecte pour un décompte que les grammaires situent plutôt autour de trois cent cinquante.
- **Correction proposée** : « environ trois cent cinquante verbes » et « plus de cinq mille
  lettres ».
- **Fait** : les deux chiffres remplacés en toutes lettres, conformément à la proposition.

### [MINEUR] ✅ « le signe pourcent »

- **Où** : `heritage/culture-g/data/lecons/langue-francaise/08.json` — section « Nombres,
  dates et unités »
- **Texte** : « y compris devant le signe **pourcent** et le symbole degré »
- **Problème** : en français de France on écrit « pour cent » en deux mots, et le signe %
  s'appelle le symbole du pourcentage. Dans une leçon consacrée à la typographie, la coquille
  se remarque.
- **Correction proposée** : « y compris devant le symbole pour cent et le symbole degré ».
- **Fait** : phrase corrigée en ce sens.

### [MINEUR] ✅ « cuir » employé pour toute liaison fautive

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:246` — `lf2-oral-ecrit`
- **Texte** : « le cuir — une liaison fautive — se remarque immédiatement »
- **Problème** : la leçon 09 du cahier d'origine est plus précise et contredit implicitement
  ce raccourci : « le **cuir** ajoute un t…, le **velours** ajoute un z…, [le tout] s'appelle
  un pataquès ». Le cours seed prend le cas particulier pour le terme générique.
- **Correction proposée** : « le pataquès — une liaison ajoutée à tort — se remarque
  immédiatement ».
- **Fait** : phrase corrigée en ce sens.

### [MINEUR] ✅ Redites internes au cahier d'origine

- **Où** : `heritage/culture-g/data/langue-francaise.json`
- **Problème** : la liste « chêne, bouleau, if, bruyère, alouette, mouton, charrue, soc,
  tonneau, caillou, chemin » est recopiée mot pour mot dans l'explication de la question 39 et
  dans le cours « Naissance et histoire de la langue française ». La liste « ils sont, ils
  ont, ils font, ils vont » apparaît trois fois dans le seul cours « Orthographe et accords »
  (section 4, puis deux fois dans la même explication de quiz).
- **Correction proposée** : garder la liste une fois par cours et y renvoyer.
- **Fait** : la liste d'arbres/animaux gaulois n'est plus recopiée dans l'explication de la
  question 39, qui renvoie désormais au cours d'accueil. La liste « ils sont, ils ont, ils
  font, ils vont » n'est plus énumérée deux fois dans le cours « Orthographe et accords » : le
  paragraphe renvoie maintenant au tableau qui la détaille déjà ; sa troisième occurrence, dans
  l'explication du quiz correspondant, est conservée car c'est l'usage normal d'une explication
  de QCM (donner la réponse), pas une redite évitable.

### [MINEUR] ✅ Les en-têtes des lots seed ne correspondent plus au contenu

- **Où** : ligne 2 des trois fichiers `prisma/seed/culture-g/langue-francaise*.ts`
- **Texte** : « Langue française, troisième lot — **vingt-deux** notions sans cours. »
- **Problème** : le fichier en contient **vingt-trois**. Et les trois en-têtes annoncent des
  notions « sans cours » alors que cinquante des cinquante-six en ont désormais un dans
  `cours/langue-francaise.ts`. Un commentaire faux est un piège pour la prochaine session qui
  reprendra le fichier.
- **Correction proposée** : « Langue française, troisième lot — vingt-trois notions, cours
  dans `cours/langue-francaise.ts`. »
- **Fait** : les trois en-têtes corrigés (compte de vingt-deux à vingt-trois pour le troisième
  lot, et « sans cours » remplacé par la mention du fichier de cours dans les trois fichiers,
  le premier et le deuxième lot ayant déjà le bon compte de notions).

## Ce que la seconde passe a ajouté

La passe 2 a porté sur les mêmes fichiers, dans le même ordre, et a cherché ce que la lecture
au fil du texte ne fait pas voir : les régularités. Elle a ajouté :

1. **Le déséquilibre de longueur des propositions** (83 % des bonnes réponses sont les plus
   longues, ×2,1 en moyenne). C'est le constat le plus lourd de tout l'audit, et il est
   invisible question par question — il ne se voit qu'en comptant. La comparaison avec le
   cahier d'origine (35 %) l'établit comme un défaut d'écriture, non comme un effet du format.
2. **Les trente-cinq distracteurs terminés par « seul », « uniquement », « systématiquement »
   ou « toujours », dont aucun n'est la bonne réponse.** La passe 1 avait repéré le motif ;
   la passe 2 l'a quantifié et a établi qu'il ne souffre pas une exception.
3. **Le doublon « si j'avais su » interne au cahier d'origine**, entre le quiz du cours
   « Orthographe et accords » et celui de la leçon 06 — trouvé par recherche des phrases
   répétées, pas par lecture.
4. **« L'anglais ne met aucune espace »**, lu trois fois en passe 1 sans que le mot manquant
   me saute aux yeux.
5. **La vérification web de la glottophobie**, que la passe 1 avait seulement notée comme
   douteuse : la loi n'existe pas, la proposition est restée bloquée au Sénat.
6. **La confirmation de la loi Deixonne par la leçon 10** : la passe 1 hésitait, la passe 2 a
   trouvé le contre-exemple dans le cahier lui-même.
7. **Les redites verbatim internes au cahier** et **les en-têtes de fichiers devenus faux**.
8. La passe 2 a aussi **écarté une fausse piste de la passe 1** : les 557 questions ont toutes
   `answerIndex` à 0, ce qui alarme au premier coup d'œil, mais `melange.ts` permute à
   l'affichage et le validateur du module documente explicitement le cas. Aucun constat.
9. Elle a enfin **vérifié l'architecture** : 56 notions, 50 cours, et les six notions sans
   cours propre sont exactement les six que `fusions.ts` verse ailleurs. Aucun orphelin,
   aucun cours en double. Rien à signaler, et c'était à vérifier.


## Ce qui est sain

**L'architecture tient.** Cinquante-six notions, cinquante cours, et les six notions sans
cours propre sont exactement celles que `fusions.ts` verse dans une leçon du cahier d'origine.
Aucun cours orphelin, aucune notion oubliée, aucune question sans explication, aucune question
à moins de quatre propositions, aucun doublon de proposition à l'intérieur d'une question.
J'ai vérifié ces cinq points un par un.

**Le cahier d'origine est d'une qualité remarquable**, et c'est la meilleure nouvelle de cet
audit. Les onze leçons et les trois cours du fichier de matière sont écrits par quelqu'un qui
sait de quoi il parle et qui sait ce qu'il ignore : la leçon 02 distingue explicitement les
étymologies attestées de celles qui sont « seulement racontées » et refuse de trancher sur
« tomber dans les pommes » ; la leçon 09 donne le détail exact des liaisons obligatoires,
facultatives et interdites, et sépare le cuir du velours ; la leçon 11 corrige l'attribution
du distique holorime à Hugo ; la leçon 07 expose les deux positions sur *pallier à* et
*achalandé* au lieu d'en choisir une ; la leçon 10 dit clairement que le breton n'est pas un
héritage gaulois. Les questions libres du cahier sont équilibrées (bonne réponse la plus
longue dans 35 % des cas seulement, contre 83 % côté seed) et leurs explications apprennent
réellement quelque chose de plus que la réponse. Sur les cent vingt-cinq questions du cahier,
je n'ai relevé qu'un doublon et une erreur de fait — le « deux exceptions » suivi de cinq.

**Les cours du lot seed sont de bonne tenue.** Cent soixante-dix sections, aucune en dessous
de cinq cent cinquante caractères, aucune qui paraphrase son titre, aucun remplissage. Ils
avancent des mécanismes plutôt que des listes : ce que les erreurs d'enfants révèlent
(`:962`), pourquoi l'espace entre les mots a rendu possible la lecture silencieuse (`:850`),
pourquoi aucune langue vivante ne s'est développée en vase clos (`:914`), pourquoi un exemple
n'est jamais une preuve (`:1025`). Les faits vérifiables y sont massivement exacts : dates de
la loi 101, des lois Ferry et Guizot, de Villers-Cotterêts, de Vaugelas, du CECRL, du TLF,
d'Alde Manuce, du carré Sator, de l'Oulipo ; chiffres des langues officielles belges et
suisses ; étymologies de *travail*, *bureau*, *candidat*, *salaire*, *viande*, *idiot*,
*imbécile*, *nostalgie*, *mélancolie*. Les points contestés sont presque toujours signalés
comme tels — l'origine de *bistrot*, celle du pataquès, celle de Voltaire, le statut du
conditionnel, la frontière entre métonymie et synecdoque.

Ce qui cloche est donc concentré, et concentré à un endroit précis : **la fabrication des
questions des trois lots seed**. Le contenu est juste ; c'est la manière de le mettre en QCM,
et la quantité de ce qui y est redit du cahier d'origine, qui demandent une reprise.
