# Langue française

> ÉTAT : passe 1 en cours. Lus : `prisma/seed/culture-g/langue-francaise.ts`,
> `langue-francaise-2.ts`, `langue-francaise-3.ts`, `cours/langue-francaise.ts` — tous intégraux.
> Puis `heritage/culture-g/data/langue-francaise.json` (55 questions libres + 3 cours).
> Puis les onze leçons `01.json` à `11.json`. **Passe 1 terminée.**
> Reste : la passe 2.

## Ce que j'ai lu

- `prisma/seed/culture-g/langue-francaise.ts` — 13 notions, 128 questions.
- `prisma/seed/culture-g/langue-francaise-2.ts` — 20 notions, 200 questions.
- `prisma/seed/culture-g/langue-francaise-3.ts` — 22 notions, 229 questions.
- `prisma/seed/culture-g/cours/langue-francaise.ts` — 50 cours, 170 sections, intégral.
- `heritage/culture-g/data/langue-francaise.json` — 55 questions libres, 3 cours
  (14 sections) et leurs 15 questions de quiz.
- `heritage/culture-g/data/lecons/langue-francaise/01.json` à `11.json` — 11 leçons,
  55 sections, 55 questions de quiz.

Soit **682 questions** et **64 cours** lus en passe 1.

Remarque préalable : toutes les questions ont `answerIndex` à 0. Ce n'est **pas** un
défaut : `src/modules/kinds/melange.ts` permute les propositions à l'affichage, et
`src/modules/culture-g/index.ts` documente explicitement le cas. Aucun constat là-dessus.

## Constats

### [GRAVE] L'étymologie de « choucroute » est fausse, et l'erreur est répétée dans le cours

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

### [GRAVE] « le latin pater donne l'anglais father » — l'anglais n'est pas issu du latin

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

### [GRAVE] La table serait « neutre en allemand »

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:318` — `lf2-genres-noms`,
  section « Un genre largement arbitraire »
- **Texte** : « *la table* est féminine en français et neutre en allemand »
- **Problème** : « table » se dit *der Tisch* en allemand — masculin. L'allemand n'a pas de
  mot neutre courant pour « table » (*die Tafel* est féminin). L'exemple, censé prouver
  l'arbitraire du genre, est simplement faux.
- **Correction proposée** : « *la table* est féminine en français et masculine en allemand
  (*der Tisch*) »

### [GRAVE] « anagramme » et « anacoluthe » employés au masculin, contre le cours lui-même

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

### [GRAVE] « un expiration longue » et « un monnaie »

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:512` — `lf2-communication-orale` ;
  `:685` — `lf3-vocabulaire-formation`
- **Texte** : « un expiration longue ralentit le rythme cardiaque » / « un porte-monnaie
  n'est pas un monnaie qu'on porte »
- **Problème** : deux fautes d'accord élémentaires (« une expiration », « une monnaie »).
- **Correction proposée** : « une expiration longue » ; « n'est pas une monnaie qu'on porte ».

### [GRAVE] « fautée », « Moliérisée » : deux mots qui n'existent pas

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:207` — `lf2-orthographe-histoire` ;
  `:387` — `lf2-litterature-langue`
- **Texte** : « elle aurait été **fautée** plusieurs dizaines de fois par l'empereur » /
  « **Moliérisée** dans *Les Précieuses ridicules* »
- **Problème** : *fauter* ne se construit pas ainsi (il signifie « commettre une faute
  morale », il est intransitif) ; *moliériser* n'existe pas. Deux barbarismes dans un contenu
  qui enseigne le français.
- **Correction proposée** : « l'empereur y aurait commis soixante-quinze fautes et
  l'impératrice soixante-deux » ; « Raillée par Molière dans *Les Précieuses ridicules* ».

### [GRAVE] « cette dernière » renvoie au mauvais mot, et au mauvais genre

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:806` — `lf3-francais-afrique`
- **Texte** : « le wolof au Sénégal, le bambara au Mali, le lingala et le swahili en Afrique
  centrale et orientale — cette dernière étant parlée par plus de cent millions de personnes. »
- **Problème** : « cette dernière » ne peut renvoyer qu'à « l'Afrique … orientale ». Le
  référent voulu est *le swahili*, masculin. La phrase dit littéralement que l'Afrique
  orientale est parlée par cent millions de personnes.
- **Correction proposée** : « … le lingala et le swahili en Afrique centrale et orientale,
  ce dernier étant parlé par plus de cent millions de personnes. »

### [GRAVE] Le référendum de 1995 n'a pas été perdu « à moins d'un point »

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:161` — `lf3-francais-quebec` ;
  `cours/langue-francaise.ts:759`
- **Texte** : « Celui de 1995 a été perdu par les souverainistes à moins d'un point d'écart. »
  / « le second échouant de moins d'un pour cent »
- **Problème** : le Non l'a emporté avec 50,58 % contre 49,42 %, soit **1,16 point** d'écart.
  L'erreur est répétée dans la question et dans le cours.
- **Correction proposée** : « … perdu de peu, 50,58 % contre 49,42 %, soit 1,16 point d'écart. »

### [GRAVE] « Rabelais avait déjà fourni gargantuesque »

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

### [GRAVE] Breton reprend « surréalisme » sept ans après, pas trois

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

### [GRAVE] Question à deux réponses : le mot emprunté puis réemprunté

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

### [GRAVE] Question à deux réponses : le séducteur littéraire

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:234-235` — `lf3-litterature-langue-3`
- **Texte** : « Quel nom de personnage littéraire désigne un séducteur ? — [Don Juan /
  Casanova seul / Lovelace / Valmont] … *Lovelace, personnage de Richardson, a également donné
  un nom commun en français.* »
- **Problème** : l'explication reconnaît que le distracteur *Lovelace* est lui aussi une
  bonne réponse. *Valmont* est également employé en ce sens.
- **Correction proposée** : « Quel personnage de Molière et de Mozart a donné le nom commun
  désignant un séducteur ? » (Don Juan), avec des distracteurs non concurrents.

### [GRAVE] Question à deux réponses : le verbicruciste réputé

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:538-539` — `lf3-jeux-langue`
- **Texte** : « Quel verbicruciste français est réputé pour ses définitions ? — [Georges
  Perec / Michel Laclos / …] … *Michel Laclos et Georges Perec ont tous deux marqué le genre
  en France.* »
- **Problème** : l'explication désigne explicitement le distracteur comme également correct.
  Michel Laclos est même le plus célèbre des deux dans ce rôle précis.
- **Correction proposée** : « Quel auteur de *La Disparition* a aussi composé les grilles de
  mots croisés du *Point* ? » (Georges Perec).

### [GRAVE] Doublons francs entre lots

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

### [GRAVE] « je m'en rappelle » présenté comme une hypercorrection — le cours dit le contraire

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

### [MOYEN] L'invention du mot « robot » est attribuée au mauvais Čapek

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:73` — `lf-etymologie` ;
  `cours/langue-francaise.ts:12`
- **Texte** : « Karel Čapek forge le terme en 1920 pour sa pièce R.U.R. » / « le mot a été
  forgé par l'écrivain Karel Čapek dans une pièce de 1920 »
- **Problème** : Karel Čapek a lui-même écrit publiquement que le mot lui avait été soufflé
  par son frère **Josef** Čapek. L'attribution est un point d'histoire bien documenté.
- **Correction proposée** : « Karel Čapek l'emploie dans sa pièce *R.U.R.* (1920), mais il a
  reconnu tenir le mot de son frère Josef. »

### [MOYEN] La loi Deixonne et l'alsacien

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:153` — `lf-langues-france`
- **Texte** : « Elle concernait d'abord le breton, le basque, le catalan et l'occitan. Le
  corse et l'alsacien s'y sont ajoutés plus tard. »
- **Problème** : le corse a bien été ajouté (1974), suivi du tahitien et de langues
  mélanésiennes. L'alsacien — dialecte germanique — n'a jamais été intégré à la loi Deixonne ;
  son enseignement a relevé d'un régime distinct. **À vérifier**, mais l'affirmation me paraît
  fausse en l'état.
- **Correction proposée** : « Elle concernait d'abord le breton, le basque, le catalan et
  l'occitan ; le corse s'y est ajouté en 1974, le tahitien en 1981. »

### [MOYEN] La loi Duruy n'a pas étendu « l'obligation » aux filles

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:277` — `lf-lecture-illettrisme`
- **Texte** : « La loi Duruy de 1867 étendra l'obligation aux filles. »
- **Problème** : il n'existait aucune obligation de scolarisation avant 1882. La loi Duruy
  oblige les **communes** de plus de cinq cents habitants à ouvrir une école de filles ; elle
  n'oblige personne à y aller. Écrit ainsi, l'apprenant retiendra qu'une obligation scolaire
  existait dès 1867.
- **Correction proposée** : « La loi Duruy de 1867 oblige les communes de plus de cinq cents
  habitants à ouvrir une école de filles. »

### [MOYEN] Braille avait seize ans en 1825, pas quinze

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:184-185` — `lf-ecriture-alphabets`
- **Texte** : « Qui met au point un système d'écriture en relief pour les aveugles en 1825 ?
  … *Il avait quinze ans.* »
- **Problème** : Louis Braille est né le 4 janvier 1809. En 1825 il a seize ans. La version
  courante est « en 1824, à quinze ans ». La date et l'âge donnés dans la même ligne sont
  incompatibles.
- **Correction proposée** : soit « en 1824 … il avait quinze ans », soit « en 1825 … il avait
  seize ans ».

### [MOYEN] « Octante » n'est pas une variante suisse vivante

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:101` ; `langue-francaise-3.ts:171`
- **Texte** : « La Suisse romande ajoute huitante ou octante selon les cantons. »
- **Problème** : *huitante* est employé à Vaud, en Valais et à Fribourg ; *octante* est
  pratiquement sorti de l'usage. Genève et Neuchâtel disent *quatre-vingts*. Le cours, lui,
  ne mentionne que *huitante* (`cours/langue-francaise.ts:792`) — il est plus juste que les
  deux questions.
- **Correction proposée** : « La Suisse romande ajoute *huitante* dans plusieurs cantons ;
  Genève et Neuchâtel emploient *quatre-vingts*. »

### [MOYEN] Le largonji n'insère pas de syllabes — le cours le dit, la question non

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

### [MOYEN] « Éponyme » défini à l'envers

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:76` — `lf-etymologie`
- **Texte** : « Qu'est-ce qu'un éponyme ? — Un mot commun formé sur un nom propre »
- **Problème** : l'éponyme est la personne (ou la chose) **qui donne son nom** ; le mot commun
  qui en dérive relève de l'antonomase ou de la déonomastique. Le cours emploie d'ailleurs le
  terme juste : « Certains mots communs sont d'anciens noms propres, phénomène que les
  linguistes appellent **antonomase** » (`cours/langue-francaise.ts:281`). La question
  contredit son cours sur la terminologie.
- **Correction proposée** : « Qu'appelle-t-on une antonomase ? — Un nom propre devenu nom
  commun ».

### [MOYEN] Les exemples du suffixe -acum n'illustrent pas la règle

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:309` — `lf-noms-propres`
- **Texte** : « Il donne -ay, -é ou -y dans le nord de la France : Cormeilles, Vitry, Chambly. »
- **Problème** : trois formes annoncées (-ay, -é, -y) et trois exemples donnés, mais
  *Cormeilles* ne se termine par aucune des trois et n'est pas un dérivé en *-acum*. Seuls
  *Vitry* et *Chambly* illustrent le propos. Le cours (`:93`) donne, lui, des exemples corrects
  (Vitry, Savigny).
- **Correction proposée** : « Il donne -y, -ay ou -é dans le nord : Vitry, Chambly, Savigny. »

### [MOYEN] Chiffres sans date

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:32` (« Environ trois cent vingt millions »
  de francophones « selon l'OIF ») ; `:286` (« Environ sept pour cent » d'adultes en situation
  d'illettrisme) ; `langue-francaise-3.ts:558` (« Environ cent trente millions » d'apprenants)
- **Problème** : ces chiffres viennent de rapports datés (OIF 2022 : 321 millions ;
  132 millions d'apprenants ; enquêtes ANLCI/INSEE). Présentés sans millésime, ils seront
  faux dans quelques années et l'apprenant n'a aucun moyen de le savoir. La consigne demande
  explicitement de signaler « un chiffre sans date alors qu'il a changé ».
- **Correction proposée** : ajouter le millésime dans l'explication — « 321 millions selon le
  rapport de l'OIF de 2022 ».

### [MOYEN] Le compte des francophones du Québec se contredit dans sa propre phrase

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:144-145` ; `cours/langue-francaise.ts:755`
- **Texte** : « Plus de six millions » … « le français y est la langue maternelle d'environ
  quatre-vingts pour cent de la population »
- **Problème** : le Québec compte environ 8,9 millions d'habitants ; 80 % de langue maternelle
  française font déjà plus de sept millions, et près de 94 % de la population parle français.
  « Plus de six millions » est techniquement vrai mais incompatible avec le pourcentage donné
  dans la même explication.
- **Correction proposée** : « Plus de sept millions » avec « environ 78 % de locuteurs de
  langue maternelle française ».

### [MOYEN] « Après la conquête britannique de 1763 »

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:757` — `lf3-francais-quebec`
- **Problème** : la conquête militaire est de 1759-1760 (Plaines d'Abraham, capitulation de
  Montréal) ; 1763 est la date du traité de Paris qui cède la Nouvelle-France. Mélanger les
  deux est une imprécision facile à éviter.
- **Correction proposée** : « Après la conquête britannique de 1759-1760, entérinée par le
  traité de Paris de 1763 ».

### [MOYEN] « Rrose Sélavy » n'est pas une anagramme

- **Où** : `prisma/seed/culture-g/langue-francaise-2.ts:385` — `lf2-poesie-langue`
- **Texte** : « Marcel Duchamp signait Rrose Sélavy, anagramme approximative d'Éros c'est la vie. »
- **Problème** : *Rrose Sélavy* / « Éros, c'est la vie » est une **homophonie**, un calembour —
  pas un réarrangement de lettres. Dans une question qui définit précisément l'anagramme,
  l'exemple contredit la définition. Le cours donne, lui, de vraies anagrammes
  (*Boris Vian* → *Bison Ravi*).
- **Correction proposée** : « Boris Vian signait Bison Ravi, anagramme exacte de son nom. »

### [MOYEN] « Captain Samouraï Flower » donné comme anagramme

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:493` — `lf2-poesie-langue`
- **Texte** : « Pascal Obispo signant Captain Samouraï Flower »
- **Problème** : le pseudonyme compte une vingtaine de lettres contre douze pour « Pascal
  Obispo » : ce ne peut pas être une anagramme de son nom. **Incertain** sur ce que le
  pseudonyme anagrammatise réellement, mais l'exemple ne tient pas tel qu'il est présenté.
- **Correction proposée** : le supprimer, l'exemple de Boris Vian qui suit suffit.

### [MOYEN] « un tiers du vocabulaire courant vient d'ailleurs que du latin »

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:143` — `lf2-anglicismes`
- **Problème** : les décomptes usuels (Henriette Walter sur le *Petit Robert*) situent les
  emprunts aux langues autres que le latin et le grec autour de 13 %. « Un tiers » me paraît
  très surestimé et n'est rattaché à aucune source. **À vérifier.**
- **Correction proposée** : « Les emprunts aux autres langues représentent environ un mot
  sur huit du vocabulaire courant. »

### [MOYEN] « doctoresse » attribué au français médiéval

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:332` — `lf2-genres-noms`
- **Texte** : « le français médiéval disposait de *doctoresse*, *mairesse*, *chirurgienne*,
  *autrice* »
- **Problème** : *mairesse*, *chirurgienne* et *autrice* sont bien attestés en ancien ou moyen
  français ; *doctoresse* est une formation du XIXe siècle. **À vérifier**, mais l'exemple
  paraît anachronique dans une liste qui sert justement à établir l'ancienneté des formes.
- **Correction proposée** : retirer *doctoresse* de la liste.

### [MOYEN] « entre vous et je » : un exemple d'hypercorrection qui n'est pas français

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:738` — `lf3-normes-usages`
- **Problème** : « entre vous et je » est le calque d'un phénomène anglais (*between you and I*).
  Ce n'est pas une hypercorrection attestée en français, où l'on dit « entre vous et moi » sans
  effort. L'exemple n'illustre pas la notion pour un francophone.
- **Correction proposée** : le remplacer par « je vous serais gré » (pour « je vous saurais
  gré »), hypercorrection française bien attestée.

### [MOYEN] Le point d'ironie : XVIe ou XIXe siècle ?

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:263` (« depuis le XVIe siècle ») ;
  `cours/langue-francaise.ts:866` (« depuis le XIXe siècle — par Alcanter de Brahm »)
- **Problème** : le cours et la question donnent deux siècles différents pour la même
  information. Alcanter de Brahm propose son point d'ironie en 1899.
- **Correction proposée** : aligner sur « depuis la fin du XIXe siècle ».

### [MOYEN] Rectifications de 1990 : 2008 dans le cours, 2016 dans la question

- **Où** : `prisma/seed/culture-g/langue-francaise-2.ts:107` (« Les manuels scolaires les
  appliquent depuis 2016 ») ; `cours/langue-francaise.ts:214` (« Les programmes scolaires les
  mentionnent comme référence depuis 2008 »)
- **Problème** : les deux dates sont défendables (programmes de 2008, réaffirmation de 2016),
  mais telles quelles elles se contredisent pour qui lit les deux.
- **Correction proposée** : « Les programmes scolaires les donnent comme référence depuis 2008,
  ce que les programmes de 2016 ont réaffirmé. »

### [MOYEN] Énoncés auxquels la bonne réponse ne répond pas grammaticalement

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

### [MOYEN] La bonne réponse est la seule à être précisée

- **Où** : `prisma/seed/culture-g/langue-francaise-2.ts:232` — `lf2-genres-noms`
- **Texte** : « Quel mot est souvent employé au mauvais genre en français ? —
  [**Autoroute, qui est féminin** / Avion / Wagon / Bureau] »
- **Problème** : la bonne réponse est la seule à porter une explication (« qui est féminin ») ;
  elle se repère sans rien savoir. Même défaut ailleurs : « Tennis, **issu du français tenez** »
  (`:48`), « Magazine, **du français magasin** » (`langue-francaise-3.ts:334`),
  « Gargantuesque, **formé sur Gargantua** » (`:288`).
- **Correction proposée** : mettre toutes les propositions au même format (« Autoroute »,
  « Avion », « Wagon », « Bureau »).

### [MOYEN] Le mot « seul » collé aux distracteurs les trahit

- **Où** : motif récurrent — `langue-francaise.ts:18` (« Le Serment de Verdun »),
  `langue-francaise-2.ts:198` (« Le loucherbem seul »), `:288` (« Pantagruélique seul »),
  `langue-francaise-3.ts:28` (« Le Roman de la Rose seul »), `:222` (« Quintessence seule »),
  `:234` (« Casanova seul »), `:238` (« Le Procès seul »), `:338` (« Ambassadeur seul »),
  `:486` (« George Sand seule »), `:570` — et une vingtaine d'autres.
- **Problème** : « seul » n'apparaît jamais dans une bonne réponse. Un apprenant repère le
  motif en une dizaine de questions et répond sans lire.
- **Correction proposée** : réécrire ces distracteurs sans le mot-béquille.

### [MOYEN] Redondance entre notions voisines

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

### [MINEUR] Capitale manquante en tête de proposition

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

### [MINEUR] Apostrophes droites dans tout le corpus

- **Où** : les quatre fichiers, sans exception.
- **Problème** : la consigne demande l'apostrophe courbe (’). Le corpus emploie
  systématiquement l'apostrophe droite ('). C'est un choix cohérent et sans doute délibéré
  (contrainte de code source), mais il vaut d'être signalé dans une notion qui **enseigne**
  la typographie française (`lf-ponctuation-typographie`).
- **Correction proposée** : décision globale à prendre, ou mention explicite dans le cours.

### [MINEUR] « Saint-Glinglin » : les deux éléments sont intervertis

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:237`
- **Texte** : « le mot viendrait d'un croisement entre seing, le signe, et glinglin, la cloche »
- **Problème** : l'explication usuelle fait de *seing* (du latin *signum*) la **cloche**, et
  de *glinglin* (de *glinguer*, sonner) le **son**. Les gloses sont inversées.
- **Correction proposée** : « … entre *seing*, du latin *signum* qui a désigné la cloche, et
  *glinglin*, tiré du dialectal *glinguer*, sonner. »

### [MINEUR] « apostrophes doubles » pour les guillemets anglais

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:863` — `lf3-ponctuation-usages`
- **Texte** : « Le français a conservé les chevrons doubles, là où l'anglais emploie des
  apostrophes doubles. »
- **Problème** : le terme typographique est « guillemets anglais » (ou « guillemets droits
  doubles »). Parler d'« apostrophes doubles » dans un cours de ponctuation est un
  contresens terminologique.
- **Correction proposée** : « … là où l'anglais emploie les guillemets anglais. »

### [MINEUR] La conversion, illustrée par des étiquettes fausses

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:698` — `lf3-vocabulaire-formation`
- **Texte** : « l'adjectif *le beau*, le verbe *le manger*, le nom *un rouge* »
- **Problème** : *rouge* est un adjectif, pas un nom — c'est justement le point de départ de
  la conversion. Les étiquettes désignent tantôt la catégorie de départ, tantôt celle
  d'arrivée, et la troisième est fausse dans les deux lectures.
- **Correction proposée** : « l'adjectif *beau* devenu nom dans *le beau*, l'infinitif
  *manger* dans *le manger*, l'adjectif *rouge* dans *un rouge* ».

### [MINEUR] « les langues romanes descendent toutes de caballus »

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:121`
- **Problème** : ce sont les **mots** romans désignant le cheval qui descendent de *caballus*,
  non les langues.
- **Correction proposée** : « … et les mots romans pour « cheval » descendent tous de
  *caballus* ».

### [MINEUR] Énoncé bancal sur les registres belges

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:100`
- **Texte** : « Comment appelle-t-on la variété de français parlée en Belgique pour
  « soixante-dix » ? »
- **Problème** : la phrase ne veut rien dire — on ne nomme pas une « variété de français …
  pour soixante-dix ». Le distracteur « Septuante » n'existe par ailleurs dans aucun usage.
- **Correction proposée** : « Comment dit-on soixante-dix en Belgique ? »

### [MINEUR] Question de typographie construite sur une ambiguïté invisible

- **Où** : `prisma/seed/culture-g/langue-francaise.ts:264`
- **Texte** : « Quel signe distingue « des jumelles » de « des jumelles » selon le contexte,
  faute de marque écrite ? »
- **Problème** : l'énoncé répète deux fois la même chaîne, ce qui donne à l'écran une question
  qui paraît bugguée. L'idée (aucun signe ne les distingue) est juste, mais la formulation la
  rend illisible.
- **Correction proposée** : « Qu'est-ce qui distingue à l'écrit les deux sens de « des
  jumelles » ? »

### [GRAVE] Le même fait dit trois fois sur le point final des messages courts

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

### [GRAVE] Deux cours qui traitent le même sujet

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

### [MOYEN] Cendrillon : « sept siècles » ne colle pas

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:1074` — `lf3-oralite-traditions`
- **Texte** : « une version chinoise du IXe siècle antérieure de sept siècles à celle de Perrault »
- **Problème** : le conte de Ye Xian est daté du milieu du IXe siècle, la *Cendrillon* de
  Perrault de 1697 : l'écart est de plus de huit siècles, pas de sept.
- **Correction proposée** : « … antérieure de plus de huit siècles à celle de Perrault ».

### [MOYEN] Dièse ou croisillon : la question contredit le cours

- **Où** : `prisma/seed/culture-g/langue-francaise-3.ts:594` — `lf3-francais-numerique-usages`
- **Texte** : « Qu'est-ce qu'un hashtag ? — Un mot-clé précédé d'un **dièse** servant à indexer
  un contenu »
- **Problème** : le cours de `lf2-anglicismes` (`cours/langue-francaise.ts:154`) explique
  précisément que « le signe employé n'est pas un dièse mais un croisillon », et le cours
  attaché à la notion même de cette question (`:1175`) écrit « précédé d'un croisillon ». La
  bonne réponse de la question reprend l'erreur que les cours dénoncent.
- **Correction proposée** : « Un mot-clé précédé d'un croisillon servant à indexer un contenu ».

### [GRAVE] « Deux exceptions » suivies de cinq exceptions

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

### [GRAVE] Deux doublons tombent dans la MÊME notion, par la fusion

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

### [GRAVE] Le filtre anti-doublons ne rattrape aucun des doublons signalés

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

### [GRAVE] Le cahier d'origine et les lots seed se recouvrent largement

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

### [MOYEN] Un exemple annoncé et jamais donné

- **Où** : `heritage/culture-g/data/langue-francaise.json` — cours « Les figures de style »,
  section « Opposition, insistance et atténuation »
- **Texte** : « Le paradoxe pousse plus loin en énonçant une idée qui heurte l'opinion
  commune, comme dans la formule de La Rochefoucauld. »
- **Problème** : la formule n'est pas citée. Toutes les autres figures de la section sont
  illustrées par un exemple précis ; celle-ci renvoie à un exemple absent, ce qui rend la
  phrase inutilisable pour qui ne connaît pas déjà la maxime visée.
- **Correction proposée** : citer la maxime, par exemple « nos vertus ne sont, le plus
  souvent, que des vices déguisés ».

### [MOYEN] « loucherbem » ou « louchébem » : deux graphies dans le même produit

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

### [MINEUR] « ver, vers, vert, verre, vair et Vert »

- **Où** : `heritage/culture-g/data/langue-francaise.json` — cours « Orthographe et accords »,
  section « Pourquoi l'orthographe française est-elle si difficile ? »
- **Problème** : la série d'homophones énumère *vert* puis *Vert* avec une majuscule, sans
  dire que le second est un nom propre. Le lecteur y verra une coquille — ou pire, croira à
  deux orthographes du même adjectif.
- **Correction proposée** : « ver, vers, vert, verre, vair, et le nom propre Vert ».

### [GRAVE] Deux expressions non bibliques données comme venant de la Bible

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

### [GRAVE] Quatre doublons dans la seule notion « Les langues régionales de France »

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

### [GRAVE] Deux doublons dans la notion « L'Académie française et la norme »

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

### [GRAVE] Une paire de questions identiques à 88 % passe quand même le filtre

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

### [MOYEN] Deux questions sur « tomber dans les pommes » dans la même notion

- **Où** : `fusions.ts:131` verse `lf-expressions-francaises` dans `cg-langue-francaise-02`
- **Texte** : « Que signifie « tomber dans les pommes » ? → S'évanouir. *L'origine est
  incertaine : peut-être une déformation de « pâmes »* » (`langue-francaise.ts:220`) et
  « Que dit la recherche étymologique sur l'expression « tomber dans les pommes » ? → Son
  origine reste incertaine » (quiz de la leçon 02).
- **Problème** : l'explication de la première question est la réponse de la seconde. Les deux
  arriveront dans la même série.
- **Correction proposée** : retirer la question du lot seed, la leçon traite le point mieux
  et plus longuement.

### [MOYEN] « autrice » : médiéval, XVIIe siècle, ou les deux ?

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:332` (« le français médiéval
  disposait de doctoresse, mairesse, chirurgienne, autrice ») contre
  `heritage/culture-g/data/lecons/langue-francaise/03.json`, section « Féminisation et
  écriture inclusive » (« autrice, ce dernier attesté dès le XVIIe siècle »)
- **Problème** : deux datations différentes pour le même mot dans le même produit. La leçon
  est la plus prudente des deux ; le cours seed est celui qui ajoute *doctoresse*, formation
  du XIXe siècle, à une liste présentée comme médiévale.
- **Correction proposée** : aligner sur la leçon, et retirer *doctoresse* de la liste du cours.

### [MOYEN] Rectifications de 1990 : deux sources donnent 2008, la question dit 2016

- **Où** : `heritage/culture-g/data/lecons/langue-francaise/03.json` (« Les programmes
  scolaires français y font référence depuis 2008 ») et
  `cours/langue-francaise.ts:214` (« depuis 2008 ») contre
  `prisma/seed/culture-g/langue-francaise-2.ts:107` (« Les manuels scolaires les appliquent
  depuis 2016 »)
- **Problème** : confirme le constat déjà noté plus haut — la question du lot 2 est
  l'exception, et c'est elle qu'il faut aligner.

### [GRAVE] La glottophobie n'est pas punie par la loi française

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

### [GRAVE] La loi Deixonne et l'alsacien — confirmé par la leçon du même domaine

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

### [GRAVE] Quatre des cinq questions de la leçon 04 sont redites par le lot seed

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

### [GRAVE] Les jeux de langue sont traités deux fois de bout en bout

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

### [MOYEN] Trois traitements incompatibles de « je m'en rappelle »

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

### [MOYEN] L'OIF ne compte plus quatre-vingt-huit membres

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

### [MINEUR] Des chiffres en chiffres dans un corpus qui écrit les nombres en toutes lettres

- **Où** : `heritage/culture-g/data/lecons/langue-francaise/06.json` (« Le troisième groupe,
  avec environ **485** verbes ») et `11.json` (« le Grand Palindrome de 1969 aligne **5 566**
  lettres »)
- **Problème** : tout le reste du domaine écrit les nombres en toutes lettres — « une centaine
  de mots », « environ quatre cents mots », « à peine trois cents », dans les phrases voisines
  du même paragraphe. Ces deux chiffres détonnent. Le premier est en outre d'une précision
  suspecte pour un décompte que les grammaires situent plutôt autour de trois cent cinquante.
- **Correction proposée** : « environ trois cent cinquante verbes » et « plus de cinq mille
  lettres ».

### [MINEUR] « le signe pourcent »

- **Où** : `heritage/culture-g/data/lecons/langue-francaise/08.json` — section « Nombres,
  dates et unités »
- **Texte** : « y compris devant le signe **pourcent** et le symbole degré »
- **Problème** : en français de France on écrit « pour cent » en deux mots, et le signe %
  s'appelle le symbole du pourcentage. Dans une leçon consacrée à la typographie, la coquille
  se remarque.
- **Correction proposée** : « y compris devant le symbole pour cent et le symbole degré ».

### [MINEUR] « cuir » employé pour toute liaison fautive

- **Où** : `prisma/seed/culture-g/cours/langue-francaise.ts:246` — `lf2-oral-ecrit`
- **Texte** : « le cuir — une liaison fautive — se remarque immédiatement »
- **Problème** : la leçon 09 du cahier d'origine est plus précise et contredit implicitement
  ce raccourci : « le **cuir** ajoute un t…, le **velours** ajoute un z…, [le tout] s'appelle
  un pataquès ». Le cours seed prend le cas particulier pour le terme générique.
- **Correction proposée** : « le pataquès — une liaison ajoutée à tort — se remarque
  immédiatement ».

## Ce que la seconde passe a ajouté

*(passe 2 non commencée — section à compléter)*

## Ce qui est sain

Les cours de `cours/langue-francaise.ts` sont, dans l'ensemble, d'une qualité nettement
supérieure aux questions : ils enseignent réellement quelque chose, avancent des mécanismes
plutôt que des listes, et savent hiérarchiser (l'exposé sur norme et insécurité linguistique,
celui sur l'oral et l'écrit, celui sur le loucherbem et le largonji, celui sur la traduction
sous contrainte). Plusieurs sont même remarquables : la section sur les espaces entre les mots
et la lecture silencieuse (`:850-856`), celle sur les emprunts comme preuve qu'aucune langue ne
vit en vase clos (`:914-920`), celle sur ce que les erreurs d'enfants révèlent (`:962-964`).
Les faits vérifiables y sont massivement exacts — dates de la loi 101, des lois Ferry, de
Villers-Cotterêts, de Vaugelas, du CECRL, du TLF, chiffres des langues officielles belges et
suisses, étymologies de *travail*, *bureau*, *candidat*, *salaire*, *viande*, *idiot*. Ce qui
cloche est concentré dans les questions, et surtout dans les redites entre les trois lots.
