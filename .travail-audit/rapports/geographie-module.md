# Géographie — le module Atlas (jeux de carte)

> ÉTAT : passes 1 et 2 TERMINÉES. Lus : `prisma/seed/geographie/index.ts`, `commun.ts`,
> `pays.ts` (195 fiches, intégral), `mers.ts` (41 zones, intégral), `series.ts`
> (intégral), `src/modules/geographie/index.ts` + `contenu.ts`,
> `src/modules/kinds/carte-monde.ts`, `src/lib/cartes/regions.ts`,
> `tests/geographie.test.ts`. Croisement id↔fond de carte fait pour les cinq
> fonds, exhaustivement — pays ET mers. Rien ne reste à lire.

## Ce que j'ai lu

- `prisma/seed/geographie/pays.ts` — 195 lignes de fiche : EUROPE 42,
  AFRIQUE 49, ASIE 43, AMÉRIQUES 27, MONDE_SEUL 4, MONDE_RESTE 30. Chaque fiche
  porte `id` (ISO 3166-1 numérique), `a2`, nom, capitale, situation, et
  facultativement une note sur le drapeau et une note sur la ville. Plus la
  table `ARTICLE` (195 entrées) et la fonction `de()`.
- `prisma/seed/geographie/mers.ts` — 41 entrées de zone marine réparties en
  cinq séries (europe 9, afrique 7, asie 13, Amériques 7, monde 5).
- `prisma/seed/geographie/series.ts` — la fabrique des 20 séries du module :
  4 continents × 3 jeux, plus 3 séries « monde », plus les 5 séries de mers
  construites par `mers.ts`. Au total **609 exercices** : 194 quiz de
  drapeau, 181 quiz de capitale (194 moins les 13 pays dont la capitale se lit
  dans le nom), 193 exercices de carte « situer un pays » et 41 « situer une
  mer ». Je les ai tous parcourus, par la table qui les engendre.
- `prisma/seed/geographie/commun.ts` — les trois fabriques d'exercices.
- `src/modules/geographie/index.ts` et `contenu.ts`, `src/modules/kinds/carte-monde.ts`,
  `src/lib/cartes/regions.ts`, `tests/geographie.test.ts`.
- Les cinq fonds de carte `src/lib/cartes/{europe,afrique,asie,ameriques,monde}.ts`,
  dont j'ai extrait les couples `id → nom` (51, 57, 57, 34, 181 entrées) pour
  les confronter une à une à la table des pays.

## Le point le plus coûteux : `cible` ↔ pays nommé — VÉRIFIÉ, SANS UN ÉCART

C'était la priorité. J'ai extrait mécaniquement les couples `id → nom` des cinq
fonds de carte générés et je les ai confrontés aux 195 fiches, sans échantillon :

- **161 exercices « situer » régionaux** (Europe 42, Afrique 49, Asie 43,
  Amériques 27) : **aucun** identifiant absent du fond correspondant, **aucun**
  écart entre le nom de la fiche et le nom porté par le tracé. La correction
  allumera donc bien le pays annoncé.
- **Série « situer — le planisphère »** (32 pays : les 4 de `MONDE_SEUL` +
  28 repris des continents) : les 32 identifiants existent sur le fond `monde`
  avec exactement le même nom.
- Les 30 fiches de `MONDE_RESTE` sont bien **absentes** du fond `monde`
  (micro-États et archipels non tracés), mais elles ne servent **qu'aux quiz
  drapeau/capitale**, jamais à `situer` — le découpage tient.
- Les codes ISO numériques eux-mêmes sont justes, fiche par fiche (contrôlés
  sur les 195). Idem pour les codes à deux lettres, recoupés avec les noms
  officiels français d'ICU : aucun code ne désigne un autre pays que le sien.

J'ai fait la même vérification sur les **41 exercices de mers et océans** :
région, slug de la zone et nom affiché concordent 41 fois sur 41 avec le fond
de carte.

**Conclusion : pas un seul identifiant de cible ne désigne un autre lieu que
celui qu'il nomme, ni pour les 193 exercices de pays, ni pour les 41 exercices
de mers.** C'est la partie la plus solide du module, et c'était le risque
numéro un.

**Mais il reste un cas où un clic juste est compté faux**, et il vient non de
l'identifiant mais du découpage du fond : les cartes d'Afrique et du monde
tracent le **Sahara occidental** (id 732) comme une forme distincte, sans
étiquette et sans exercice, alors que le **Maroc est une cible sur ces deux
cartes**. C'est détaillé plus bas, en [GRAVE].

## Constats

### [GRAVE] Le Kenya n'a pas le seul drapeau à porter une arme traditionnelle
- **Où** : `prisma/seed/geographie/pays.ts` — fiche `["404", "KE", "Kenya", …]`
- **Texte** : « Un bouclier et deux lances masaï : **le seul drapeau national à
  porter une arme traditionnelle**. »
- **Problème** : c'est faux, et le contre-exemple est **dans le même fichier** :
  le drapeau de l'Eswatini (fiche `748`) porte un bouclier nguni, deux lances et
  un bâton de cérémonie. Celui du Mozambique porte aussi une houe et une
  baïonnette. L'apprenant retiendra une exclusivité inexistante.
- **Correction proposée** : « Un bouclier et deux lances masaï. L'Eswatini est
  le seul autre drapeau national à porter des armes traditionnelles. »

### [GRAVE] Addis-Abeba : altitude fausse et rang faux
- **Où** : `prisma/seed/geographie/pays.ts` — fiche `["231", "ET", "Éthiopie", …]`
- **Texte** : « À **deux mille cinq cents mètres**, la **troisième** capitale la
  plus haute du monde. Siège de l'Union africaine. »
- **Problème** : deux erreurs. L'altitude d'Addis-Abeba est d'environ
  2 355 m, pas 2 500. Et le rang est faux **selon les chiffres du fichier
  lui-même** : il donne La Paz à 3 600 m, Quito à 2 800 m, Bogota à 2 600 m —
  Addis-Abeba serait donc quatrième, pas troisième (cinquième si l'on compte
  Sucre, capitale constitutionnelle bolivienne, à 2 810 m). Le fichier se
  contredit tout seul.
- **Correction proposée** : « À deux mille trois cents mètres, l'une des cinq
  capitales les plus hautes du monde. Siège de l'Union africaine. »

### [MOYEN] La Turquie est décrite deux fois, et les deux fiches divergent
- **Où** : `prisma/seed/geographie/pays.ts` — `["792","TR",…]` dans `EUROPE` et
  dans `ASIE`
- **Texte** : la fiche d'Europe porte deux notes (« Croissant et étoile hérités
  de l'Empire ottoman… » et « Atatürk l'a préférée à Istanbul en 1923… ») ;
  celle d'Asie ne porte que la situation, sans aucune note.
- **Problème** : le doublon est **assumé et neutralisé** pour les quiz
  (`series.ts` : `dejaInterroges`, avec un long commentaire), et c'est
  légitime pour la carte. Mais la duplication de la donnée reste une invitation
  à la divergence : les deux `ou` sont déjà identiques au mot près, et rien
  n'empêche qu'ils cessent de l'être. Le commentaire d'en-tête de `pays.ts`
  promet précisément l'inverse : « Écrire trois fois le même pays dans trois
  fichiers aurait garanti qu'ils finissent par se contredire. »
- **Correction proposée** : ne garder qu'une fiche et faire référencer la même
  par les deux continents (par exemple `ASIE = fiches([…]).concat([trouver(EUROPE,"792")])`),
  ou à défaut ajouter un test qui vérifie que deux fiches de même `id` sont
  identiques champ pour champ.

### [MOYEN] Le module annonce 193 États et en porte 194
- **Où** : `prisma/seed/geographie/pays.ts`, en-tête de `MONDE_RESTE` ;
  `series.ts`, commentaire « Le monde »
- **Texte** : « ce qui permet à la matière de couvrir **les cent
  quatre-vingt-treize États membres de l'ONU** plutôt que les cent
  soixante-quatre qui se laissent dessiner. »
- **Problème** : la table contient bien les 193 membres de l'ONU (vérifié code
  par code) **plus Taïwan** (`["158","TW",…]`), qui n'en est pas membre. Le
  compte annoncé est donc exact pour l'ONU mais la table en compte 194 : le
  texte laisse croire que Taïwan est un membre. Le fond de carte `monde`, lui,
  trace aussi le Kosovo, Chypre du Nord, le Somaliland, la Palestine et le
  Sahara occidental — sans fiche, donc sans que la question du statut se pose.
- **Correction proposée** : « … de couvrir les cent quatre-vingt-treize États
  membres de l'ONU, plus Taïwan, plutôt que les cent soixante-quatre qui se
  laissent dessiner. »

### [MOYEN] Sri Lanka : la capitale donnée n'est pas la capitale
- **Où** : `prisma/seed/geographie/pays.ts` — `["144","LK","Sri Lanka","Colombo", …]`
- **Texte** : capitale « Colombo » ; note : « Capitale économique ; le parlement
  siège à Sri Jayawardenepura Kotte, dans sa banlieue. »
- **Problème** : la capitale officielle du Sri Lanka est
  **Sri Jayawardenepura Kotte** depuis 1985 ; Colombo est la capitale
  commerciale. Le quiz demande « Quelle est la capitale de Sri Lanka ? » et
  compte « Colombo » juste : la note rattrape après coup une réponse
  officiellement fausse. Les autres cas de capitale double du fichier
  (Bolivie → Sucre, Afrique du Sud → Pretoria, Bénin → Porto-Novo,
  Côte d'Ivoire → Yamoussoukro, Tanzanie → Dodoma, Pays-Bas → Amsterdam,
  Birmanie → Naypyidaw) donnent tous la capitale **officielle** en réponse.
  Sri Lanka est le seul à faire l'inverse — c'est une incohérence de doctrine
  autant qu'une erreur.
- **Correction proposée** : capitale « Sri Jayawardenepura Kotte », note
  « Capitale officielle depuis 1985 ; Colombo, sa voisine, reste la capitale
  économique et la plus grande ville. »

### [MOYEN] Israël — Jérusalem donnée sans réserve
- **Où** : `prisma/seed/geographie/pays.ts` — `["376","IL","Israël","Jérusalem", …]`
- **Problème** : Israël désigne Jérusalem comme sa capitale, mais ce statut
  n'est pas reconnu par la France ni par l'ONU, et la question « Quelle est la
  capitale d'Israël ? » est posée sans aucune note explicative — alors que le
  fichier prend le soin d'expliquer huit autres cas moins litigieux. Un contenu
  destiné à être appris par cœur ne devrait pas trancher en silence.
- **Correction proposée** : garder « Jérusalem » comme réponse mais ajouter la
  note de ville : « Capitale proclamée par Israël et siège de ses institutions ;
  la France et la plupart des États n'y reconnaissent pas ce statut et gardent
  leur ambassade à Tel-Aviv. »

### [MOYEN] L'Atlantique n'est pas le seul océan d'un pôle à l'autre
- **Où** : `prisma/seed/geographie/mers.ts` — série `monde`, `ocean-atlantique`
- **Texte** : « **Le seul océan qui s'étende d'un pôle à l'autre** en une seule
  pièce, entre deux continents qui se sont séparés il y a cent quatre-vingts
  millions d'années. »
- **Problème** : le Pacifique s'étend lui aussi du détroit de Béring
  (66° N, sur le cercle polaire arctique) à l'océan Austral. L'exclusivité ne
  tient pas. Le reste de la phrase est juste (ouverture de l'Atlantique il y a
  ~180 Ma).
- **Correction proposée** : « Il s'étend d'un pôle à l'autre en une seule
  pièce, entre deux continents qui se sont séparés il y a cent quatre-vingts
  millions d'années. »

### [MOYEN] Le tsunami de 2004 n'est pas né dans la mer d'Andaman
- **Où** : `prisma/seed/geographie/mers.ts` — série `asie`, `mer-d-andaman`
- **Texte** : « Entre la Birmanie et les îles du même nom. **Le tsunami de 2004
  y est né**, au large de Sumatra, à sa pointe sud. »
- **Problème** : l'épicentre du séisme de Sumatra-Andaman (26 décembre 2004)
  était **à l'ouest** de Sumatra, dans l'océan Indien, pas dans la mer
  d'Andaman, qui est de l'autre côté de l'arc insulaire. La rupture s'est
  propagée vers le nord le long de l'arc, mais la vague est née à l'extérieur.
  La même explication est d'ailleurs donnée correctement ailleurs dans le
  fichier (série `asie`, `ocean-indien` : « Le séisme de 2004, au large de
  Sumatra »).
- **Correction proposée** : « Entre la Birmanie et les îles du même nom. Le
  séisme de 2004, dont l'épicentre était juste à l'ouest de l'arc, l'a fait
  déferler sur toutes ses côtes. »

### [MOYEN] « Birmanie » ne figure nulle part comme nom du pays
- **Où** : `prisma/seed/geographie/pays.ts` — `["104","MM","Myanmar","Naypyidaw", …]`,
  contre `mers.ts` — `mer-d-andaman` : « Entre **la Birmanie** et les îles… »
- **Problème** : le même pays est appelé « Myanmar » dans la table et
  « Birmanie » dans les mers. Ce n'est pas une erreur de fait — les deux noms
  ont cours — mais l'apprenant qui apprend « Myanmar » ne reconnaîtra pas
  « Birmanie » deux séries plus loin, et rien ne fait le lien.
- **Correction proposée** : harmoniser sur « Birmanie (Myanmar) » dans `mers.ts`,
  ou ajouter à la fiche une note de ville mentionnant le nom français usuel.

### [MOYEN] Le Gulf Stream ne prend pas naissance dans la mer des Caraïbes
- **Où** : `prisma/seed/geographie/mers.ts` — série `ameriques`, `mer-des-caraibes`
- **Texte** : « Le Gulf Stream **y prend naissance** avant de contourner la
  Floride et de traverser l'Atlantique. »
- **Problème** : on fait naître le Gulf Stream au sortir du détroit de Floride,
  à la sortie du golfe du Mexique ; ce qui traverse la mer des Caraïbes est le
  **courant des Caraïbes**, qui l'alimente. Le raccourci n'est pas absurde mais
  il est présenté comme un fait.
- **Correction proposée** : « Le courant des Caraïbes la traverse, s'engouffre
  dans le golfe du Mexique et en ressort par le détroit de Floride sous le nom
  de Gulf Stream. »

### [MINEUR] « Bogota » sans accent, deux fois
- **Où** : `prisma/seed/geographie/pays.ts` — fiche `["170","CO","Colombie","Bogota", …]` ;
  `prisma/seed/geographie/series.ts` — `REPERES.ameriques.capitales` :
  « Quito, **Bogota**, Mexico et La Paz ».
- **Problème** : l'usage français retient « Bogota » sans accent, l'espagnol
  « Bogotá ». Ce n'est pas une faute, mais le fichier accentue partout ailleurs
  les toponymes hispanophones et lusophones (« Brasília », « Chișinău »,
  « São Tomé ») — sauf « Asuncion », qui devrait être « Asunción ».
- **Correction proposée** : au minimum corriger `["600","PY","Paraguay","Asuncion", …]`
  en « Asunción », et trancher une fois pour toutes pour Bogota.

### [MINEUR] « Asuncion » sans accent
- **Où** : `prisma/seed/geographie/pays.ts` — `["600","PY","Paraguay","Asuncion", …]`
- **Problème** : l'orthographe est « Asunción » (ou « Assomption » en français).
  « Asuncion » n'est ni l'un ni l'autre.
- **Correction proposée** : « Asunción ».

### [MINEUR] Bruxelles n'est pas « dans une enclave néerlandophone »
- **Où** : `prisma/seed/geographie/pays.ts` — fiche `["56","BE","Belgique", …]`
- **Texte** : « Officiellement bilingue, **dans une enclave néerlandophone**. »
- **Problème** : c'est l'inverse qui se dit : Bruxelles est une **enclave**
  bilingue **dans** la région néerlandophone (la Flandre). La formulation
  actuelle fait de la Flandre l'enclave.
- **Correction proposée** : « Officiellement bilingue, enclavée dans la Flandre
  néerlandophone. Elle abrite la Commission européenne. »

### [MINEUR] La Jordanie a un littoral
- **Où** : `prisma/seed/geographie/pays.ts` — `["400","JO","Jordanie","Amman","sans véritable littoral, …"]`
- **Problème** : la Jordanie a vingt-six kilomètres de côte sur le golfe
  d'Aqaba, et le port d'Aqaba y est un enjeu national. « Sans véritable
  littoral » est défendable, mais dans un module qui distingue partout ailleurs
  « sans littoral » (enclavé) de « sur la mer », la formule brouille la seule
  chose que l'apprenant doit retenir.
- **Correction proposée** : « presque enclavée : vingt-six kilomètres de côte
  sur le golfe d'Aqaba, entre Israël, la Syrie, l'Irak et l'Arabie Saoudite ».

### [MINEUR] « Royaume d'Eswatini » et « Brunei Darussalam » : noms longs isolés
- **Où** : `prisma/seed/geographie/pays.ts` — `["748","SZ",…]`, `["96","BN",…]`
- **Problème** : le fichier emploie partout la forme courte française
  (« Tchéquie », et non « République tchèque » ; « Ukraine », et non « République
  d'Ukraine »), sauf pour ces deux-là qui portent leur forme longue. Le nom
  passe en amorce du jeu de carte, donc ces deux amorces détonnent.
- **Correction proposée** : « Eswatini » et « Brunei ». (Attention : le nom
  figure aussi tel quel dans les fonds de carte générés — il faudrait
  régénérer, sinon `cibleNom` ne correspondrait plus au tracé.)

### [GRAVE] L'Éthiopie n'est pas le seul pays d'Afrique jamais colonisé
- **Où** : `prisma/seed/geographie/series.ts` — `REPERES.afrique.drapeaux`
- **Texte** : « Le vert-jaune-rouge vient d'Éthiopie, **seul pays jamais
  durablement colonisé** ; il a essaimé sur tout le continent. »
- **Problème** : le Libéria non plus n'a jamais été colonisé — et le fichier
  des pays le dit lui-même trois cents lignes plus loin : « fondé par des
  affranchis américains, il a copié leur drapeau ». Ce repère s'affiche en tête
  de la série « Drapeaux — Afrique » : c'est la première phrase que
  l'apprenant lit, et elle est fausse. La fiche de l'Éthiopie, elle, est
  correcte : elle écrit « le pays n'a jamais été durablement colonisé », sans
  « seul ».
- **Correction proposée** : « Le vert-jaune-rouge vient d'Éthiopie, l'un des
  deux seuls pays du continent jamais colonisés, avec le Libéria ; il a essaimé
  sur tout le continent. »

### [GRAVE] Berne n'a pas été un compromis entre Zurich et Genève
- **Où** : `prisma/seed/geographie/pays.ts` — fiche `["756","CH","Suisse","Berne", …]`
- **Texte** : « Ni la plus grande ville ni la plus riche : un compromis, en
  1848, **entre Zurich et Genève**. »
- **Problème** : le vote du 28 novembre 1848 opposait Berne à **Zurich et à
  Lucerne**. Genève n'était pas candidate — le canton venait d'entrer dans la
  Confédération en 1815 et se trouvait à l'écart. Berne l'a emporté dès le
  premier tour, pour ne pas renforcer Zurich (déjà le centre économique) et
  pour ne pas récompenser Lucerne, chef de file des cantons du Sonderbund.
- **Correction proposée** : « Ni la plus grande ville ni la plus riche : un
  compromis, en 1848, entre Zurich la puissante et Lucerne la vaincue du
  Sonderbund. »

### [MOYEN] Le drapeau chilien précède celui du Texas de vingt-deux ans, pas trente
- **Où** : `prisma/seed/geographie/pays.ts` — fiche `["152","CL","Chili", …]`
- **Texte** : « Une étoile blanche dans un carré bleu ; il précède de **trente
  ans** le drapeau du Texas. »
- **Problème** : le drapeau chilien date du 18 octobre 1817, le Lone Star
  texan du 25 janvier 1839 : vingt-deux ans, pas trente. Le chiffre rond a été
  arrondi dans le mauvais sens.
- **Correction proposée** : « … il précède de vingt-deux ans le drapeau du
  Texas. »

### [MOYEN] Riyad n'est pas à sept cents kilomètres de toute côte
- **Où** : `prisma/seed/geographie/pays.ts` — fiche `["682","SA","Arabie Saoudite", …]`
- **Texte** : « Au centre du plateau du Nedjd, en plein désert, **à sept cents
  kilomètres de toute côte**. »
- **Problème** : Riyad est à environ quatre cents kilomètres à vol d'oiseau de
  la côte du golfe Persique (Dammam). Sept cents kilomètres correspondrait à peu
  près à la distance jusqu'à la mer Rouge, mais pas à « toute côte ».
- **Correction proposée** : « Au centre du plateau du Nedjd, en plein désert, à
  quatre cents kilomètres du golfe Persique et neuf cents de la mer Rouge. »

### [MOYEN] Kinshasa et Brazzaville ne sont pas les capitales les plus proches du monde
- **Où** : `prisma/seed/geographie/pays.ts` — fiche `["180","CD","République démocratique du Congo", …]`
- **Texte** : « Face à Brazzaville, de l'autre côté du fleuve : **les deux
  capitales les plus proches du monde**. »
- **Problème** : Rome et la Cité du Vatican sont plus proches — l'une est dans
  l'autre. La formule courante réserve le record aux capitales séparées par une
  frontière « ordinaire » ; sans cette réserve, l'affirmation est fausse.
- **Correction proposée** : « Face à Brazzaville, de l'autre côté du fleuve :
  après Rome et le Vatican, les deux capitales les plus proches du monde. »

### [MOYEN] « Quelle est la capitale d'El Salvador ? » — la réponse est dans la question
- **Où** : `prisma/seed/geographie/series.ts` — le filtre `homonyme`, et
  `pays.ts` `["222","SV","El Salvador","San Salvador", …]`
- **Problème** : `series.ts` consacre un long commentaire à écarter les pays
  dont la capitale se lit dans le nom (Luxembourg, Djibouti, Guatemala, Panama,
  Koweït, Tunisie/Tunis, Algérie/Alger, Guinée-Bissau/Bissau,
  Andorre/Andorre-la-Vieille). Le filtre travaille par sous-chaîne après
  suppression des accents : « elsalvador » ne contient pas « sansalvador », et
  le pays passe au travers. La question est pourtant l'exemple le plus criant
  de tout le lot. Deux autres passent de justesse : « la capitale du Brésil »
  (Brasília) et « la capitale du Mexique » (Mexico) — mêmes racines, filtre
  aveugle.
- **Correction proposée** : compléter `homonyme` par une comparaison de
  radicaux, par exemple exclure aussi quand la capitale et le pays partagent
  leurs cinq premières lettres après normalisation (`elsal`/`sansal` ne suffit
  pas : il faut tester chaque mot de la capitale contre le nom, ce qui attrape
  « Salvador » dans « El Salvador »).

### [MOYEN] 107 questions de drapeau dont la correction ne parle pas du drapeau
- **Où** : `prisma/seed/geographie/commun.ts` — `quizDrapeau`, ligne
  `explanation: cible.drapeau ?? \`${cible.nom} : ${cible.ou}.\``
- **Problème** : 88 fiches sur 195 portent une note de drapeau ; les 107 autres
  retombent sur la situation géographique. « Quel est le drapeau du Botswana ? »
  se corrige alors par « Botswana : sans littoral, au nord de l'Afrique du Sud ;
  le Kalahari en occupe l'essentiel. » — qui n'apprend rien sur le dessin qu'on
  vient de rater. Le déséquilibre est extrême sur la série « Drapeaux — le reste
  du monde » : 29 fiches sur 30 sans note, et ce sont précisément les drapeaux
  que personne ne connaît (Kiribati, Palaos, Nauru, Micronésie, Îles Marshall).
  Répartition : Europe 29/42 annotées, Asie 22/43, Afrique 19/49, Amériques
  14/27, reste du monde 1/30.
- **Correction proposée** : pas de reformulation unique — il faut écrire les
  notes manquantes, en priorité pour `MONDE_RESTE` où le taux est de 3 %.

### [MOYEN] La correction du drapeau recopie mot pour mot celle de la carte
- **Où** : `prisma/seed/geographie/commun.ts` — `quizDrapeau` et `situer`
- **Texte** : `quizDrapeau` (sans note) produit « Slovénie : entre les Alpes et
  l'Adriatique, au nord de la Croatie. » ; `situer` produit « Slovénie : entre
  les Alpes et l'Adriatique, au nord de la Croatie. Capitale : Ljubljana. »
- **Problème** : pour les 107 pays sans note de drapeau, la correction du quiz
  de drapeau est un préfixe exact de la correction de l'exercice de carte du
  même pays. L'apprenant lit deux fois la même phrase dans deux séries qui
  prétendent enseigner deux choses différentes. Même mécanisme pour
  `quizCapitale` sans note de ville, dont l'explication reprend `ou` à
  l'identique.
- **Correction proposée** : quand aucune note n'existe, faire porter la
  correction du drapeau sur autre chose que la position — par exemple les
  couleurs et leur famille (« un tricolore vertical », « une croix
  scandinave »), qui sont déductibles de la table des repères de série.

### [MOYEN] Antigua-et-Barbuda est au nord de la Guadeloupe, pas à l'est
- **Où** : `prisma/seed/geographie/pays.ts` — `["28","AG","Antigua-et-Barbuda","Saint John's","deux îles des Petites Antilles, à l'est de la Guadeloupe"]`
- **Problème** : Antigua est à 17,1° N / 61,8° O, la Guadeloupe à 16,25° N /
  61,55° O. Antigua est donc au **nord** de la Guadeloupe, et même très
  légèrement à l'**ouest**. « À l'est » est faux dans les deux sens.
- **Correction proposée** : « deux îles des Petites Antilles, à cent cinquante
  kilomètres au nord de la Guadeloupe ».

### [MOYEN] Le tip de la série « le reste du monde » ne décrit pas son contenu
- **Où** : `prisma/seed/geographie/series.ts` — `REPERES.monde`
- **Texte** : drapeaux — « Beaucoup de ces drapeaux portent des étoiles ou des
  bandes bleues : **la mer est le sujet commun des États insulaires**. » ;
  capitales — « **Sur un atoll**, la capitale est souvent le seul vrai bourg du
  pays. »
- **Problème** : la série contient 34 pays, dont la **Russie**, l'**Australie**,
  la **Nouvelle-Zélande** et la **Papouasie-Nouvelle-Guinée** (`MONDE_SEUL`).
  Moscou n'est pas le bourg d'un atoll et le drapeau russe n'a rien de marin.
  Le repère annonce un contenu que le quart du lot dément — c'est exactement le
  défaut de cohérence série ↔ contenu.
- **Correction proposée** : drapeaux — « Deux mondes dans la même série : trois
  géants que les cartes régionales ne portaient pas, et une trentaine d'États
  insulaires dont les drapeaux se répondent — étoiles, bandes bleues, la mer
  pour sujet commun. » ; capitales — « Pour les insulaires, la capitale est
  souvent le seul vrai bourg du pays, et porte parfois le nom de l'île. »

### [MINEUR] Budapest est née de trois villes, pas de deux
- **Où** : `prisma/seed/geographie/pays.ts` — fiche `["348","HU","Hongrie", …]`
- **Texte** : « **Deux villes** réunies en 1873 : Buda sur les collines, Pest
  sur la plaine. »
- **Problème** : la fusion de 1873 réunissait **trois** villes — Buda, Óbuda et
  Pest. L'omission est traditionnelle, mais le nom même du quartier d'Óbuda
  (« vieux Buda ») la dément.
- **Correction proposée** : « Trois villes réunies en 1873 : Buda et Óbuda sur
  les collines, Pest sur la plaine. »

### [MINEUR] « Neuf voisins, le record d'Europe »
- **Où** : `prisma/seed/geographie/pays.ts` — fiche `["276","DE","Allemagne", …]`
- **Problème** : la Russie en a quatorze, et elle est européenne — la fiche de
  la Chine le rappelle d'ailleurs (« quatorze voisins, autant que la Russie »).
  Le record n'est vrai que si l'on exclut la Russie, ce que le module fait pour
  des raisons de dessin, mais pas l'atlas.
- **Correction proposée** : « neuf voisins, le record d'Europe après la
  Russie ».

### [MINEUR] « À quelques centimètres près » pour une différence de proportion
- **Où** : `prisma/seed/geographie/pays.ts` — fiches `["360","ID","Indonésie", …]`
  et `["492","MC","Monaco", …]`
- **Texte** : « presque exactement celui de Monaco, **à quelques centimètres
  près** » / « comme celui de l'Indonésie **à quelques centimètres de
  proportion près** ».
- **Problème** : un drapeau n'a pas de taille absolue ; la différence est un
  rapport (2:3 pour l'Indonésie, 4:5 pour Monaco). « Quelques centimètres » ne
  veut rien dire, et brouille le seul fait à retenir.
- **Correction proposée** : « le même que celui de Monaco, en plus allongé :
  deux tiers contre quatre cinquièmes. »

### [MINEUR] Le commentaire du filtre `homonyme` ne liste pas tous les pays écartés
- **Où** : `prisma/seed/geographie/series.ts` — commentaire au-dessus de `nu`
- **Problème** : il énumère neuf pays (Luxembourg, Djibouti, Guatemala, Panama,
  Koweït, Tunisie, Algérie, Guinée-Bissau, Andorre) ; le filtre en écarte
  treize — s'y ajoutent Monaco, Saint-Marin, Singapour et São Tomé-et-Principe,
  dans la série « le reste du monde ».
- **Correction proposée** : ajouter « — et, dans le reste du monde, Monaco,
  Saint-Marin, Singapour et São Tomé. »

### [GRAVE] Le Sahara occidental est un piège à clic sur deux cartes où l'on demande le Maroc
- **Où** : `src/lib/cartes/afrique.ts` et `src/lib/cartes/monde.ts` —
  `{ id: "732", nom: "Sahara occidental" }` ; cible visée :
  `prisma/seed/geographie/pays.ts` `["504","MA","Maroc","Rabat", …]`
- **Problème** : c'est le seul cas du module où l'apprenant peut cliquer au bon
  endroit et être compté faux, et il touche deux séries à la fois — « Situer —
  Afrique » et « Situer — le planisphère » demandent toutes deux le Maroc
  (`MONDE` reprend l'id `504`). Les deux fonds tracent le Sahara occidental
  comme une forme distincte et cliquable, sans étiquette et sans qu'aucune
  question ne le désigne jamais. Or les atlas scolaires français montrent le
  plus souvent ce territoire rattaché ou hachuré au Maroc : un apprenant qui
  vise « le Maroc » et clique au sud de l'oued Draa reçoit un « faux » qu'il ne
  peut pas comprendre, puisque la correction lui répondra « Maroc : à l'angle
  nord-ouest du continent ». La fiche du Maroc, elle, ne dit pas un mot du
  Sahara occidental.
- **Correction proposée** : deux voies. Soit fusionner `732` dans `504` à la
  génération des fonds (`scripts/generer-cartes.mjs`), ce qui rend le clic
  juste ; soit — plus honnête — garder la forme séparée et ajouter à la fiche
  du Maroc la mention « le Sahara occidental, au sud, est administré par le
  Maroc mais figure à part sur la carte », de façon que la consigne prévienne.
  Rien ne doit rester en l'état.
  (Le même fond mondial isole aussi le Kosovo, Chypre du Nord, le Somaliland,
  la Palestine, le Groenland, Porto Rico et les Malouines ; aucun de ces
  découpages ne heurte une cible existante, seul le Sahara occidental le fait.)

### [MOYEN] La Slovaquie n'est pas au sud des Carpates : elle est dedans
- **Où** : `prisma/seed/geographie/pays.ts` — `["703","SK","Slovaquie","Bratislava","sans littoral, entre la Tchéquie et l'Ukraine, au sud des Carpates"]`
- **Problème** : les Carpates occidentales — Petites et Hautes Tatras, Basses
  Tatras, monts Métallifères — occupent la moitié nord du pays et culminent au
  Gerlachovský štít, à 2 655 m, sur son territoire. C'est la Hongrie qui est au
  sud des Carpates. La phrase apprend la position inverse de la vraie, et elle
  est la seule chose que la correction de l'exercice de carte annonce.
- **Correction proposée** : « sans littoral, entre la Tchéquie et l'Ukraine ;
  les Carpates en occupent tout le nord, la plaine du Danube tout le sud ».

### [MOYEN] La France « seul pays d'Europe occidentale sur les deux façades »
- **Où** : `prisma/seed/geographie/pays.ts` — `["250","FR","France","Paris","de la Manche à la Méditerranée, seul pays d'Europe occidentale sur les deux façades"]`
- **Problème** : « les deux façades » n'a pas de référent clair. Si l'on entend
  Atlantique et Méditerranée — la lecture la plus naturelle —, c'est **faux** :
  l'Espagne l'est aussi, et le fichier la décrit lui-même « entre les Pyrénées
  et Gibraltar ». La phrase n'est vraie que sous la lecture étroite « la Manche
  et la Méditerranée », que rien n'impose. Le module écrit ailleurs la même
  idée sans ambiguïté (« Colombie : seul pays sud-américain sur deux océans »),
  ce qui montre qu'on sait faire.
- **Correction proposée** : « de la Manche à la Méditerranée : le seul pays
  d'Europe à toucher à la fois la Manche et la Méditerranée ».

### [MOYEN] La sphère armillaire n'est pas un instrument de navigation
- **Où** : `prisma/seed/geographie/pays.ts` — fiche `["620","PT","Portugal", …]`
- **Texte** : « La sphère armillaire est **l'instrument des navigateurs** :
  l'outil qui lui a fait connaître le monde. »
- **Problème** : la sphère armillaire est un modèle mécanique du ciel, à usage
  d'enseignement et de démonstration astronomique ; elle ne sert pas à faire le
  point en mer. Les instruments des navigateurs portugais étaient l'astrolabe
  nautique, le quadrant et l'arbalestrille. La sphère est sur le drapeau comme
  **emblème** des Découvertes — c'était l'emblème personnel de Manuel Iᵉʳ —,
  pas comme outil. « L'outil qui lui a fait connaître le monde » est doublement
  faux.
- **Correction proposée** : « La sphère armillaire, modèle du ciel et emblème
  personnel de Manuel Iᵉʳ, est le symbole des Grandes Découvertes portugaises. »

### [MINEUR] Sept « le seul drapeau national… », dont un faux
- **Où** : `prisma/seed/geographie/pays.ts` — Kenya, Mozambique, Cambodge,
  Népal, Paraguay, Jamaïque, Philippines
- **Problème** : sept notes de drapeau sur quatre-vingt-huit ouvrent par la
  même formule d'exclusivité. Cinq sont justes (Népal non rectangulaire,
  Paraguay à deux faces, Jamaïque sans rouge-blanc-bleu, Philippines retourné
  en guerre, Mozambique et son arme moderne), une est fausse (Kenya, cf. plus
  haut) et une est contestable : « le seul drapeau national à représenter un
  monument : les tours d'Angkor Vat » — les armes de Saint-Marin, sur son
  drapeau, portent les trois tours du mont Titano. Le procédé finit par se voir,
  et un apprenant qui rencontre sept « seuls » cesse de leur faire confiance.
- **Correction proposée** : garder la formule pour les cinq cas incontestables,
  et écrire pour le Cambodge « Le seul drapeau national à représenter un
  bâtiment identifiable : les tours d'Angkor Vat. »

### [MINEUR] « Liberia » sans accent, deux fois, alors que la fiche dit « Libéria »
- **Où** : `prisma/seed/geographie/pays.ts` — `["694","SL","Sierra Leone", …]`
  « entre la Guinée et le **Liberia** » et `["384","CI","Côte d'Ivoire", …]`
  « entre le **Liberia** et le Ghana », contre la fiche `["430","LR","Libéria", …]`
- **Problème** : le même pays s'écrit de deux façons dans le même fichier, et
  c'est le nom accentué qui sert d'amorce sur la carte. L'apprenant qui vient
  de situer « Libéria » lit « Liberia » deux lignes plus loin.
- **Correction proposée** : « Libéria » dans les deux `ou`.

### [MINEUR] « Lettonie : celui du milieu des trois États baltes »
- **Où** : `prisma/seed/geographie/pays.ts` — `["428","LV","Lettonie","Riga","celui du milieu des trois États baltes"]`
- **Problème** : `situer` et `quizDrapeau` composent « Lettonie : celui du
  milieu des trois États baltes. » — le démonstratif renvoie par ellipse à
  « État », mais le lecteur lit d'abord « Lettonie », féminin, et bute. Les deux
  fiches voisines ont le même défaut (« Estonie : le plus au nord… »,
  « Lituanie : le plus au sud… , voisin de la Pologne »), mais celle de la
  Lettonie est la seule où le mot élidé ne se devine pas.
- **Correction proposée** : « le pays du milieu des trois États baltes, sur le
  golfe de Riga ».

### [MINEUR] Les neuf syllabes du drapeau grec sont une hypothèse, pas un fait
- **Où** : `prisma/seed/geographie/pays.ts` — fiche `["300","GR","Grèce", …]`
- **Texte** : « **Neuf bandes pour les neuf syllabes** de « Eleftheria i
  thanatos » — la liberté ou la mort. »
- **Problème** : c'est l'explication la plus répandue, mais elle n'est pas
  officielle et concurrence au moins deux autres lectures (les neuf Muses, les
  neuf lettres du mot Ελευθερία). Le fichier prend ailleurs la précaution de
  dire « dit-on » (Ukraine) ou « aurait choisies » (Pérou) ; ici il tranche.
- **Correction proposée** : « Neuf bandes — pour les neuf syllabes de
  « Eleftheria i thanatos », la liberté ou la mort, dit-on. »

### [MINEUR] La Méditerranée est tracée sur la carte d'Asie et n'y est jamais demandée
- **Où** : `src/lib/cartes/asie.ts` — zone `mediterranee`, contre les treize
  zones asiatiques de `mers.ts`
- **Problème** : le fond d'Asie porte quatorze zones marines, treize sont
  interrogées. La Méditerranée est la seule cliquable sans question — et c'est
  la plus reconnaissable de toutes : un apprenant qui cherche « la mer Noire »
  et se trompe de bassin tombe sur une zone qui n'existe pour aucun exercice.
  Les quatre autres fonds sont exactement couverts (Europe 9/9, Afrique 7/7,
  Amériques 7/7, monde 5/5).
- **Correction proposée** : ajouter à la série `asie` une entrée
  « Méditerranée vue depuis l'Asie » — elle borde la Turquie, la Syrie, le
  Liban et Israël, ce qui en fait une vraie question — ou retirer la zone du
  fond.

### [MINEUR] Apostrophes droites dans tout le module
- **Où** : les cinq fichiers de `prisma/seed/geographie/`
- **Problème** : 543 apostrophes droites (`'`), zéro apostrophe courbe (`’`),
  alors que la typographie française demande la courbe et que ce texte est
  affiché tel quel à l'apprenant. Les guillemets, eux, sont bien français
  (« »), au nombre de vingt-sept.
- **Correction proposée** : rien à faire dans ce module seul — la convention
  est celle de tout le dépôt (`prisma/seed/culture-g/geographie.ts` compte
  311 apostrophes droites et aucune courbe). À traiter globalement ou à
  assumer ; je le signale pour ne pas le taire, pas pour le corriger ici.

## Ce que la seconde passe a ajouté

La passe 2 a rapporté onze constats que la première avait laissés filer, et
c'est elle qui a trouvé le plus grave de tout le rapport :

1. **[GRAVE] Le Sahara occidental**, forme cliquable sur les cartes d'Afrique
   et du monde alors que le Maroc est une cible sur les deux. C'est le seul
   endroit du module où un clic juste est compté faux. La passe 1 l'avait vu
   comme une curiosité du fond de carte ; c'est en recroisant la liste `MONDE`
   de `series.ts` (qui reprend l'id `504`) que la portée est apparue.
2. **[MOYEN] La Slovaquie « au sud des Carpates »** — inversion géographique
   pure, dans un champ qui sert de correction à l'exercice de carte.
3. **[MOYEN] La France « seule sur les deux façades »** — l'Espagne l'est
   aussi ; la phrase n'est vraie que sous une lecture étroite.
4. **[MOYEN] La sphère armillaire donnée pour un instrument de navigation.**
5. **[MINEUR] Les sept « le seul drapeau national… »**, dont celui du Cambodge
   que Saint-Marin conteste.
6. **[MINEUR] « Liberia » sans accent**, deux fois, contre « Libéria » en fiche.
7. **[MINEUR] « Lettonie : celui du milieu… »**, ellipse qui trébuche.
8. **[MINEUR] Les neuf syllabes grecques** données pour un fait.
9. **[MINEUR] La Méditerranée d'Asie**, tracée et jamais interrogée.
10. **[MINEUR] Les apostrophes droites**, uniformes dans tout le dépôt.
11. Et une **vérification exhaustive des 41 zones marines** — que la passe 1
    n'avait pas faite : cible, nom et région de chacune existent bien sur le
    fond annoncé, sans un seul écart. La passe 1 s'était arrêtée aux pays.

La passe 2 a aussi **confirmé** deux choses que je n'avais fait que présumer :
la table `ARTICLE` est juste sur ses 195 entrées (contrôlées une à une : « du
Danemark », « des Pays-Bas », « de la Côte d'Ivoire », « d'Israël »,
« d'Haïti », « de Kiribati » — pas une faute d'article dans les
trois cent quatre-vingt-dix questions qu'elle fabrique), et aucune paire de
drapeaux quasi identiques ne se retrouve jamais dans le même lot de
propositions : Tchad et Roumanie sont sur deux continents, Indonésie et Monaco
aussi, Irlande et Côte d'Ivoire aussi. Ce n'est pas un hasard heureux, c'est le
découpage par continent qui les sépare — mais il valait la peine de le
vérifier.

## Ce qui est sain

La correspondance `cible` ↔ pays nommé, qui était le risque majeur, est
irréprochable sur les 193 exercices de carte : aucun identifiant orphelin,
aucun écart de nom entre la fiche et le tracé. Les codes ISO numériques et
alpha-2 sont justes sur les 195 fiches, donc les drapeaux emoji — qui s'en
déduisent — le sont aussi ; les paires piégeuses (Tchad/Roumanie,
Indonésie/Monaco, Irlande/Côte d'Ivoire) sont d'ailleurs traitées à l'endroit
où elles piègent. Les capitales déplacées, qui sont le vrai gisement d'erreurs
d'un module de ce type, sont presque toutes justes et annotées (Astana rendue à
son nom de 2022, Naypyidaw, Gitega, Dodoma, Yamoussoukro, Porto-Novo, Sucre,
Pretoria, Amsterdam) — Sri Lanka est la seule exception. Les explications des
mers et océans sont, à trois phrases près, exactes et réellement instructives :
elles apprennent quelque chose au-delà de la position, ce qui est exactement ce
qu'on attend d'une correction.
