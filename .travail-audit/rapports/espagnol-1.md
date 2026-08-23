# Espagnol — moitié débutant à intermédiaire

> ÉTAT : **terminé.** Passe 1 (lecture intégrale des 13 fichiers) et passe 2 (relecture + contrôles transversaux : niveaux, titres, doublons inter-fichiers, ponctuation espagnole sur les 680 cartes, vérification de toutes les affirmations absolues des notes) faites.

## Ce que j'ai lu

Les treize fichiers du périmètre, intégralement. Comptés sur le texte, pas de mémoire :

| Fichier | Séries | Cartes | Cours | `aussiEtranger` |
|---|---|---|---|---|
| `bases.ts` | 4 | 40 | 0 | 3 |
| `debutant.ts` | 5 | 50 | 0 | 0 |
| `quotidien-a2.ts` | 5 | 50 | 2 | 0 |
| `conjugaison.ts` | 3 | 30 | 3 | 0 |
| `conjugacion-2.ts` | 8 | 80 | 8 | 0 |
| `verbes.ts` | 4 | 40 | 0 | 2 |
| `vocabulario-vida.ts` | 6 | 60 | 0 | 2 |
| `vocabulaire-mundo.ts` | 5 | 50 | 5 | 0 |
| `mundo-2.ts` | 8 | 80 | 0 | 0 |
| `expresiones.ts` | 5 | 50 | 5 | 0 |
| `faux-amis.ts` | 4 | 40 | 0 | 0 |
| `pronunciacion.ts` | 6 | 60 | 6 | 0 |
| `cours-grammaire.ts` | 5 | 50 | 5 | 0 |
| **Total** | **68** | **680** | **34** | **7** |

Chaque carte donnant jusqu'à quatre exercices, le périmètre représente environ
2 700 exercices générés.

---

## Constats

### [GRAVE] `aussiEtranger` sur 7 cartes sur 680 : l'exercice « produire » sanctionnera des bonnes réponses

- **Où** : tout le périmètre. **7 cartes sur 680 portent `aussiEtranger`, soit 1,0 %.**
  Elles sont toutes dans trois fichiers — `bases.ts` (3), `verbes.ts` (2),
  `vocabulario-vida.ts` (2). **Dix fichiers sur treize n'en ont aucune** :
  `debutant.ts`, `quotidien-a2.ts`, `conjugaison.ts`, `conjugacion-2.ts`,
  `vocabulaire-mundo.ts`, `mundo-2.ts`, `expresiones.ts`, `faux-amis.ts`,
  `pronunciacion.ts`, `cours-grammaire.ts` — soit 570 cartes d'affilée sans une
  seule traduction alternative acceptée.
  À comparer aux **64 cartes** qui portent `aussi` : l'alternative est prévue
  neuf fois plus souvent dans le sens facile (reconnaître) que dans le sens
  difficile (produire), qui est justement celui qui en a besoin.
- **Problème** : l'exercice « produire » donne le français et attend l'espagnol.
  Dès que le français admet deux traductions espagnoles également correctes, une
  seule est acceptée et l'apprenant est corrigé à tort.

  **Le cas le plus coûteux est mesurable : 24 cartes ont une note qui nomme
  elle-même une variante régionale correcte, et n'en acceptent aucune.** Le module
  enseigne la variété dans la note et la sanctionne à l'exercice. Exemples :
  - `bases.ts` — « Se puede ir andando. » note « En Amérique latine : caminando. »
    → *Se puede ir caminando* est refusé.
  - `quotidien-a2.ts` — « Hoy es uno de enero. » note « El uno en Espagne, el
    primero en Amérique latine. » → *Hoy es primero de enero* est refusé, alors
    que le cours de la même série lui consacre un visuel entier.
  - `quotidien-a2.ts` — « Te llamo luego, ¿vale? » note « Vale en Espagne. En
    Amérique latine, ¿bueno? ou ¿listo? » → les deux variantes citées sont refusées.
  - `quotidien-a2.ts` — « Nos vemos el sábado por la tarde. » note « Por la tarde
    en Espagne, en la tarde en Amérique latine. » → *en la tarde* refusé.
  - `vocabulario-vida.ts` — « Estoy atrapado en un atasco. » note « un trancón en
    Colombie, un taco au Chili. » → les deux refusées.
  - `vocabulario-vida.ts` — « Saqué el billete por internet. » note « comprar un
    boleto ou un pasaje en Amérique latine. » → les deux refusées.
  - `vocabulaire-mundo.ts` — « Hay que pelar las patatas primero. » note « Patata
    en Espagne, papa en Amérique latine. » → *papas* refusé.
  - `quotidien-a2.ts` — « ¿Diga? ¿Quién es? » note « bueno au Mexique, aló en
    Colombie et au Pérou. » → les deux refusées.

  **Et une seconde famille, indépendante de la région** — le français est ambigu
  et une seule construction est acceptée :
  - `conjugacion-2.ts` — « J'ai cassé le verre. » → seul *Se me rompió el vaso.*
    passe ; *Rompí el vaso.* est refusé. Idem « Nous n'avons plus de pain. »
    (*Se nos acabó el pan.*).
  - `conjugaison.ts` — « Personne ne le sait. » → seul *No hay nadie que lo sepa.*
    passe ; *Nadie lo sabe.* est refusé.
  - `debutant.ts` — « Celui-ci est moins cher. » → seul *Este es más barato.*
    passe ; *Este es menos caro.* est refusé.
  - `expresiones.ts` — « Un café, s'il te plaît. » → seul *Me pones un café, por
    favor.* passe, alors que le cours de la même série donne *Ponme un café* et
    *¿Me puedes poner un café?* comme également corrects.
  - `cours-grammaire.ts` — « Je préfère le faire moi-même. » → seul *Prefiero
    hacerlo yo.* passe, alors que la note de la carte dit textuellement que
    *« Lo prefiero hacer » est aussi correct*.
  - `conjugacion-2.ts` — « Je vais me lever tôt. » → seul *Voy a levantarme
    temprano.* passe, alors que la note dit *« me voy a levantar aussi »*.

  Les trois derniers cas sont les plus graves de tous : **la carte refuse une
  réponse que sa propre note déclare correcte.**
- **Correction proposée** : règle mécanique, applicable sans jugement — dès qu'une
  `note` nomme une autre forme espagnole comme correcte (variante régionale ou
  variante de construction), cette forme est ajoutée en `aussiEtranger`. Cela
  couvre les 24 cartes régionales et les trois auto-contradictions ci-dessus.
  Au-delà, ouvrir `aussiEtranger` sur toute carte dont le français est
  structurellement ambigu (pronominal / non pronominal, `se` accidentel / actif).

### [GRAVE] Deux séries entières enseignent la même chose à deux niveaux différents

- **Où** : `verbes.ts:33` — `es-passe`, « Passé composé ou passé simple », niveau **B1**
  et `conjugaison.ts:94` — `es-conj-passes`, « Les passés : indéfini, simple, imparfait », niveau **A2**
- **Texte** : le `tip` est identique au caractère près dans les deux séries :
  « Hoy, esta semana, este año appellent le passé composé. Ayer, el año pasado
  appellent le passé simple. »
  Les cartes se recopient : `Hoy he comido tarde.` / `Hoy he trabajado mucho.` ;
  `Ayer comí tarde.` / `Ayer trabajé mucho.` ; `Nunca he estado allí.` /
  `Nunca he estado en Perú.` ; `Cuando llegué, ya se habían ido.` /
  (dans `conjugacion-2.ts`) `Cuando llegué, ya se había ido.`
  Les notes aussi : « Ayer ferme la période : passé simple, même si le français
  dit « j'ai mangé » » contre « Ayer ferme la période : indefinido, même si le
  français dit « j'ai travaillé » ».
- **Problème** : doublon franc, et surtout **niveau contradictoire** — le même
  contenu est A2 dans un fichier et B1 dans l'autre. L'apprenant le rencontrera
  deux fois sans rien apprendre de neuf, et le module se contredit sur la
  difficulté.
- **Correction proposée** : supprimer `es-passe` de `verbes.ts` (la série de
  `conjugaison.ts` porte un cours, l'autre non) et fixer le niveau à B1.

### [GRAVE] Deux séries « vêtements » distinctes, au même contenu

- **Où** : `vocabulaire-mundo.ts` — `es-voc-ropa`, « Les vêtements et l'apparence », niveau A1
  et `mundo-2.ts:339` — `es-voc-moda`, « Vêtements et apparence », niveau B1
- **Texte** : le même couple `quedar bien` / `sentar bien` est enseigné dans les
  deux : « Esta camiseta me queda grande. » et « Ese color te sienta muy bien. »
  contre « Esta chaqueta no me queda bien. » et « Ese corte le sienta de maravilla. »
  ; la même opposition `llevar` / `ponerse` est notée dans les deux
  (« Llevar pour ce qu'on a sur soi ; ponerse pour le geste »).
- **Problème** : deux séries au titre presque identique, au champ lexical
  identique, à quatre niveaux d'écart (A1 contre B1).
- **Correction proposée** : fondre les deux, garder le cours de `es-voc-ropa` et
  ne conserver de `es-voc-moda` que ce qu'il ajoute vraiment (`pegar con`,
  `meter el bajo`, `desaliñado`, `ponerse de moda`), au niveau B1.

### [GRAVE] Une règle donnée puis démentie : cinq ou six subjonctifs irréguliers ?

- **Où** : `conjugaison.ts:170` — `es-conj-subjonctif`, cours, section « La forme, à partir du présent »
  contre `conjugacion-2.ts` — `es-conj-irregulares-familias`, cours, section « Les verbes en -go »
- **Texte** : « **Six** verbes échappent à la règle, faute de -o à la première
  personne : ser (sea), ir (vaya), saber (sepa), haber (haya), estar (esté), dar (dé). »
  contre « Seuls **cinq** verbes échappent à cette régularité au subjonctif : ser
  donne sea, ir donne vaya, haber donne haya, saber donne sepa, dar donne dé.
  Ceux-là s'apprennent par cœur, et **il n'y en a que cinq**. »
- **Problème** : deux cours du même module donnent deux comptes différents et
  deux listes différentes (`estar` présent dans l'un, absent de l'autre).
  L'apprenant qui les lit tous les deux ne peut pas trancher.
  **Et la justification du premier est fausse** : « faute de -o à la première
  personne » ne vaut que pour `saber` (sé) et `haber` (he). `ser` fait *soy*,
  `ir` fait *voy*, `estar` fait *estoy*, `dar` fait *doy* — tous en -o. La raison
  donnée est démentie par quatre des six verbes qu'elle prétend expliquer.
- **Correction proposée** : dans les deux cours, « Six verbes ne se construisent
  pas sur la première personne du présent : dar (dé), estar (esté), haber (haya),
  ir (vaya), saber (sepa), ser (sea). Ils s'apprennent par cœur. »

### [GRAVE] Une phrase espagnole écrite à moitié en français

- **Où** : `conjugacion-2.ts` — `es-conj-voz-pasiva`, cours, section « Les cas où le passif est impossible »
- **Texte** : « **Fue detenido par la police** est correct, mais lo detuvieron est
  bien plus courant. »
- **Problème** : « par la police » est du français inséré dans une phrase
  espagnole. La forme correcte est *fue detenido por la policía*. Un apprenant
  qui mémorise cet exemple apprend une phrase qui n'existe pas.
- **Correction proposée** : « *Fue detenido por la policía* est correct, mais
  *lo detuvieron* est bien plus courant. »

### [GRAVE] Faute de genre dans un cours : « un bombilla »

- **Où** : `quotidien-a2.ts` — `es-diminutivos`, cours, section « Quand ne pas s'en servir »
- **Texte** : « Un bolsillo n'est pas un petit sac mais une poche ; una manzanilla
  n'est pas une petite pomme mais de la camomille ; **un bombilla** n'est pas une
  petite bombe mais une ampoule. »
- **Problème** : *bombilla* est féminin — *una bombilla*. La faute est d'autant
  plus visible qu'elle est encadrée par deux exemples correctement accordés.
- **Correction proposée** : « una bombilla n'est pas une petite bombe mais une ampoule ».

### [GRAVE] Erreur de fait sur la ponctuation des nombres en français

- **Où** : `quotidien-a2.ts` — `es-numeros-fechas`, cours, section « Les ordinaux, et jusqu'où ils vont »
- **Texte** : « Enfin, l'espagnol partage avec le français la ponctuation des
  nombres : virgule pour les décimales, **point pour les milliers**. C'est
  l'anglais qui fait l'inverse, et c'est de là que viennent les erreurs de facture. »
- **Problème** : le français **ne met pas de point** pour les milliers — il met
  une espace insécable (1 500,25). Le point millier est espagnol traditionnel,
  pas français. L'affirmation « l'espagnol partage avec le français » est fausse
  sur sa moitié la plus concrète. De plus la norme actuelle de la RAE recommande
  elle aussi l'espace, pas le point.
- **Correction proposée** : « L'espagnol et le français mettent tous deux la
  virgule aux décimales, là où l'anglais met le point. Pour les milliers,
  l'espagnol a longtemps écrit un point (1.500) ; l'usage soigné actuel préfère,
  comme le français, une espace : 1 500. »

### [GRAVE] Traduction fausse : `estudiar` rendu par « travailler »

- **Où** : `conjugacion-2.ts` — `es-conj-haber-tener`, carte 7
- **Texte** : `etranger: "Tengo que estudiar esta noche."` /
  `francais: "Je dois travailler ce soir."`
- **Problème** : *estudiar* est « étudier », « réviser ». À l'exercice « produire »,
  l'apprenant à qui l'on demande « Je dois travailler ce soir » écrira
  *Tengo que trabajar esta noche* — parfaitement juste — et sera corrigé. Dans
  l'autre sens il apprend une équivalence fausse.
- **Correction proposée** : `francais: "Je dois réviser ce soir."`

### [GRAVE] Ser/estar fautif dans la série destinée aux débutants

- **Où** : `bases.ts` — `es-restaurant`, carte 9, niveau A1
- **Texte** : `etranger: "Está para llevar."` / `francais: "C'est à emporter."`
- **Problème** : la formule espagnole est *Es para llevar* — ou simplement
  *Para llevar*. `estar para` + infinitif veut dire « être sur le point de »
  ou « être d'humeur à » : *no está para bromas*. La carte enseigne donc une
  faute de ser/estar dans la série même où l'on installe la distinction, et à
  un public A1 qui n'a aucun moyen de la repérer.
- **Correction proposée** : `etranger: "Es para llevar."`, note « Para llevar
  seul suffit au comptoir. »

### [GRAVE] Un cours de gérondif qui range `poder` parmi les verbes en -ir

- **Où** : `conjugacion-2.ts` — `es-conj-gerundio`, cours, section « La forme, et ses irrégularités »
- **Texte** : « Les verbes **en -ir** à changement vocalique : le e devient i, le o
  devient u. Pedir donne pidiendo, sentir sintiendo, dormir durmiendo, morir
  muriendo, **poder pudiendo**. »
- **Problème** : *poder* est un verbe en **-er**. Il est le seul de la liste à ne
  pas être en -ir, et il est donné comme exemple de la règle « verbes en -ir ».
  La règle telle qu'énoncée est donc immédiatement démentie par son dernier
  exemple, et un apprenant en déduira *comiendo → cumiendo*.
- **Correction proposée** : sortir `poder` de la liste et l'ajouter en fin de
  section : « Un verbe en -er fait de même, et c'est le seul : poder → pudiendo. »

### [GRAVE] « Se déplacer » enseigné deux fois, à deux niveaux — *(passe 2)*

- **Où** : `bases.ts` — `es-voyage`, « Se déplacer et se loger », catégorie Voyage, niveau **A2**
  contre `vocabulario-vida.ts` — `es-voc-transportes`, « Se déplacer », catégorie Vocabulaire, niveau **B1**
- **Texte** : les cartes se recouvrent presque une à une —
  « ¿Hay que hacer transbordo? » (A2) contre « Hay que hacer transbordo en Atocha. » (B1),
  avec la même note (« hacer transbordo : changer de train ou de ligne » /
  « Hacer transbordo, changer de ligne ») ;
  « El vuelo lleva retraso. » contre « El vuelo lleva dos horas de retraso. » ;
  « Se puede ir andando. » (note « En Amérique latine : caminando ») contre
  « Prefiero ir andando que en coche. » (note « Ir andando en Espagne, ir
  caminando en Amérique latine »).
- **Problème** : trois cartes sur dix sont la même carte, à un complément près, et
  les séries sont données à deux niveaux différents. Le titre de l'une est
  contenu dans le titre de l'autre.
- **Correction proposée** : garder `es-voyage` pour l'hôtel et le guichet, retirer
  de `es-voc-transportes` les trois cartes redondantes et le recentrer sur ce
  qu'il apporte (`perder el tren`, `bajarse`, `atasco`, `acercar`, `calle cortada`).

### [GRAVE] Les études enseignées deux fois, à quatre niveaux d'écart — *(passe 2)*

- **Où** : `quotidien-a2.ts` — `es-estudios`, « L'école, la fac, les examens », niveau **A2**
  contre `vocabulario-vida.ts` — `es-voc-estudios-superiores`, « Passer, réussir, obtenir », niveau **B2**
  (même catégorie « Travail et études »)
- **Texte** : les deux séries reposent sur les mêmes trois faux amis.
  `suspender` : « Suspendí el examen de física. » note « Suspender veut dire
  échouer à un examen. Le faux ami « suspendre » n'a rien à voir. » contre
  « Suspendí dos asignaturas. » note « Suspender, échouer — jamais suspendre. »
  `curso` : « Me matriculé en el segundo curso. » note « Curso, l'année scolaire.
  Le cours lui-même se dit clase. » contre « Dejó la carrera en segundo curso. »
  note « La carrera est le cursus universitaire. El curso, l'année d'études. »
  `aprobar` : « Aprobé con un siete. » contre « Aprobé el examen en junio. »
  `matricularse` : présent dans les deux.
  Les `tip` se répondent : « Curso, c'est l'année scolaire ; clase, c'est le
  cours. » contre « Una carrera est un cursus universitaire, pas un parcours
  professionnel. Suspender veut dire échouer à un examen, pas suspendre. »
- **Problème** : le même noyau lexical est donné en A2 puis redonné en B2. Rien
  n'indique à l'apprenant que la seconde série suppose la première, et la seconde
  n'ajoute en propre que `asignatura`, `convocatoria`, `beca`, `doctorado`.
- **Correction proposée** : laisser `es-estudios` en A2 avec les faux amis, et
  réduire `es-voc-estudios-superiores` au lexique proprement universitaire
  (`asignatura`, `convocatoria`, `beca`, `matrícula`, `tesis`, `entrega`), en
  retirant `suspender`, `aprobar` et `curso` déjà acquis.

### [MOYEN] Deux séries « famille » aux titres presque identiques — *(passe 2)*

- **Où** : `debutant.ts` — `es-gens`, « La famille et les gens », A1
  contre `vocabulario-vida.ts` — `es-voc-familia`, « La famille et les liens », B1
- **Problème** : les titres ne se distinguent que par un mot, et les deux séries
  traitent la ressemblance familiale : « Se parece a su madre. » (A1, note
  « parecerse a ») contre « Ha salido a su madre. » (B1, note « Salir a alguien,
  tenir de quelqu'un. Parecerse a dit la seule ressemblance. »). L'apprenant ne
  peut pas deviner laquelle il révise.
- **Correction proposée** : renommer la seconde « Les liens d'alliance :
  cuñado, suegra, yerno », ce qui est son contenu réel.

### [MOYEN] Une série dont le titre annonce l'école et qui n'en parle pas — *(passe 2)*

- **Où** : `mundo-2.ts` — `es-voc-infancia`, « L'enfance **et l'école** »
- **Problème** : sur dix cartes, une seule mentionne l'école
  (« Lo regañaron en el colegio. »), et encore incidemment — la note porte sur
  `regañar`, pas sur le colegio. Les neuf autres sont la petite enfance
  (`criarse`, `andar`, `malcriar`, `berrinche`, `los dientes`, `tiquismiquis`).
  Le titre promet un champ qui n'est pas là — et ce champ est justement traité
  ailleurs, par `es-estudios`.
- **Correction proposée** : « L'enfance et l'éducation des enfants ».

### [MOYEN] Deux cartes interchangeables dans une même série — *(passe 2)*

- **Où** : `verbes.ts` — `es-expressions`, cartes 4 et 8
- **Texte** : « Me da igual. » / « Ça m'est égal. » `aussi: ["Peu importe."]`
  et « Da lo mismo. » / « C'est pareil. » `aussi: ["Ça revient au même."]`
- **Problème** : les deux tournures espagnoles sont synonymes et interchangeables
  dans presque tout contexte. À l'exercice « produire », rien ne permet de deviner
  si « Ça m'est égal » attend *me da igual* ou *da lo mismo* — et l'apprenant qui
  répond l'autre sera corrigé alors qu'il a raison. La même série contient aussi
  « Menos mal. », que `expresiones.ts` reprend en « ¡Menos mal que llegaste! ».
- **Correction proposée** : fondre les deux en une carte,
  `aussiEtranger: ["Da lo mismo.", "Me da lo mismo."]`.

### [MOYEN] Cours nettement au-dessus du niveau annoncé — *(passe 2)*

- **Où** : `conjugacion-2.ts` — `es-conj-participio`, déclaré **A2**, et
  `es-conj-haber-tener`, déclaré **A1** / difficulté 1
- **Problème** : le cours de `es-conj-participio` traite, dans sa troisième
  section, le *futuro perfecto*, le *condicional compuesto* et le subjonctif
  composé (« haya comido, hubiera comido — suit la concordance des temps ») :
  c'est du B2-C1 servi sous une étiquette A2. Celui de `es-conj-haber-tener`,
  étiqueté A1 difficulté 1, enseigne `tener` + participe accordé
  (« tengo escritas tres cartas ») — une construction que `es-conj-participio`
  lui-même range plus loin. Un débutant à qui l'on annonce A1 rencontre du B2.
- **Correction proposée** : `es-conj-participio` → B1, et déplacer sa section 3
  vers `es-conj-anterioridad` qui la traite déjà ; retirer le paragraphe
  `tener` + participe du cours A1 de `es-conj-haber-tener`.

### [MINEUR] « L'on approuve » — calque de l'espagnol — *(passe 2)*

- **Où** : `quotidien-a2.ts` — `es-estudios`, carte 3
- **Texte** : « Aprobé con un siete. » — note « En Espagne on note sur dix, et
  **l'on approuve** à partir de cinq. »
- **Problème** : « approuver » n'a pas ce sens en français ; c'est *aprobar* laissé
  tel quel. La note explique un faux ami en commettant le faux ami.
- **Correction proposée** : « En Espagne on note sur dix, et la moyenne est à cinq. »

### [MINEUR] Jargon espagnol employé avant d'être défini — *(passe 2)*

- **Où** : `debutant.ts` — `es-nombres-heure`, carte 4, niveau A1
- **Texte** : « Nací en 1997. » — note « nacer → nací **à l'indefinido**. »
- **Problème** : `indefinido` n'est défini nulle part avant `conjugaison.ts`
  (`es-conj-passes`, A2). En A1, la note emploie un terme que l'apprenant n'a pas
  encore rencontré, là où le reste des séries A1 dit « passé simple ».
- **Correction proposée** : « nacer → nací au passé simple. »

### [GRAVE] « Estar pour le lieu, toujours » — règle affirmée trois fois, démentie par une carte du module — *(passe 2)*

- **Où** : la règle est posée sans réserve à trois endroits —
  `debutant.ts:116` (`es-meteo-lieux`, `statement`) : « Se situer emploie estar, **toujours**. » ;
  `conjugaison.ts:88` (`es-conj-present`) : « Están en casa. » note « estar pour le lieu, **toujours**. » ;
  `faux-amis.ts:117` (`es-ser-estar`) : « Está en casa. » note « Un lieu, **toujours** estar. »
- **Texte qui la dément** : `vocabulaire-mundo.ts:134` (`es-voc-cocina`) —
  `etranger: "La cena es a las nueve **en España**."`
- **Problème** : l'espagnol emploie **ser**, jamais estar, pour situer un
  **événement** dans le temps ou dans l'espace : *la fiesta es en mi casa*,
  *¿dónde es la boda?*, *la reunión es en la sala*. C'est l'exception la plus
  connue de ser/estar, et le module ne la mentionne nulle part — alors qu'il
  l'emploie correctement au moins cinq fois : « La cena **es** a las nueve en
  España. », « La reunión **es** el once de abril. », « El entierro **es** el
  jueves. », « Las noticias **son** a las ocho. », « La fecha de entrega **es**
  el viernes. »
  L'apprenant qui a retenu « un lieu, toujours estar » corrigera
  *la cena es en España* en *la cena está en España* — ce qui veut dire que le
  dîner est physiquement rangé quelque part en Espagne. La règle telle
  qu'énoncée fabrique la faute.
- **Correction proposée** : dans les trois notes, « Pour situer une chose ou une
  personne : estar. Mais pour situer un **événement**, c'est ser : la fiesta es
  en mi casa, la reunión es a las tres. » Et ajouter une carte à `es-ser-estar` :
  « ¿Dónde es la fiesta? » / « Où a lieu la fête ? », note « Un événement se situe
  avec ser, jamais estar. C'est la grande exception à « lieu = estar ». »

### [GRAVE] « Salir prend toujours de » — démenti par trois cartes du module — *(passe 2)*

- **Où** : `vocabulaire-mundo.ts:605` — `es-voc-movimiento`, carte 4
- **Texte** : « Salió corriendo de la oficina. » — note « Salir + gérondif pour une
  sortie brusque. **Salir prend toujours de.** »
- **Problème** : c'est faux, et le module se contredit lui-même à trois endroits :
  `bases.ts:50` « **Salgo un momento.** » (aucune préposition),
  `verbes.ts:25` « **Salgo a las ocho.** »,
  `faux-amis.ts:152` « **Salgo para Madrid.** » — cette dernière portant même la
  note « Destination : para ». S'y ajoutent *salir a la calle*, *salir con
  alguien*, *salir en televisión*, tous courants.
  Un apprenant qui applique « toujours de » produira *salgo de las ocho*.
- **Correction proposée** : « Salir **de** pour le lieu qu'on quitte : salgo de la
  oficina. Mais salir a, para, con selon ce qui suit. »

### [MOYEN] « Llegar prend toujours a, jamais en » — trop absolu, deux fois — *(passe 2)*

- **Où** : `vocabulaire-mundo.ts:575` (note du tableau « Le verbe et sa préposition »)
  et `vocabulaire-mundo.ts:610` (carte « Llegamos a Sevilla a las ocho. »)
- **Texte** : « Llegar prend toujours a, **jamais en** : llegar a Madrid. »
- **Problème** : la règle vise la destination, mais elle est écrite sans
  restriction. Or *llegar en tren*, *llegar en avión*, *llegar en coche* sont
  parfaitement standard — `en` y introduit le moyen, pas la destination. Formulée
  ainsi, la note interdit une construction courante.
- **Correction proposée** : « Llegar **a** pour la destination : llegar a Madrid,
  jamais « llegar en Madrid ». Avec un moyen de transport, en revanche : llegar
  en tren. »

### [MOYEN] « Todavía no appelle toujours le perfecto » — vrai en Espagne seulement — *(passe 2)*

- **Où** : `conjugaison.ts:149` — « Todavía no lo he terminado. » note « Todavía no
  appelle **toujours** le perfecto. » et `verbes.ts:51` — « Aún no me han
  contestado. » note « Aún no, comme todavía no, appelle **toujours** le passé
  composé. »
- **Problème** : c'est la norme d'Espagne. *Todavía no llegó*, *aún no me
  contestaron* sont normaux dans la plus grande partie de l'Amérique latine — et
  le cours de `conjugacion-2.ts` l'écrit lui-même : « En Amérique latine, le
  passé simple a presque entièrement mangé le passé composé ». Le mot
  « toujours », employé deux fois, transforme un usage régional en règle.
- **Correction proposée** : remplacer « toujours » par « en Espagne » dans les
  deux notes.

### [MOYEN] La contradiction quedar / quedarse, dans un même visuel

- **Où** : `conjugacion-2.ts` — `es-conj-reflexivos`, cours, visuel « Le même verbe, avec et sans pronom »
- **Texte** : la ligne du tableau dit `["quedar — rester (convenir)", "quedarse — rester (demeurer)", "sens différent"]`,
  et la note du même tableau dit « Quedar veut dire **donner rendez-vous** ;
  quedarse, rester quelque part. »
- **Problème** : le tableau donne *quedar* = « rester », sa propre note dit
  l'inverse. Deux lectures incompatibles à trois lignes d'écart.
- **Correction proposée** : ligne « quedar — se donner rendez-vous » / « quedarse — rester ».

### [MOYEN] Trois cartes redondantes pour « quedar », dans trois séries

- **Où** : `quotidien-a2.ts` (`es-tiempo-libre`) : « Quedamos a las ocho en la plaza. » ;
  `conjugacion-2.ts` (`es-conj-reflexivos`) : « Quedamos a las siete en la plaza. » ;
  `expresiones.ts` (`es-expr-jerga`) : « Vale, quedamos a las ocho. »
- **Problème** : la même phrase à l'heure près, avec la même note dans deux cas.
- **Correction proposée** : n'en garder qu'une, dans `es-conj-reflexivos` où la
  règle est enseignée.

### [MOYEN] « Jugar a » enseigné quatre fois

- **Où** : `verbes.ts` (« Juego al fútbol. »), `quotidien-a2.ts` (« Juego al fútbol los jueves. »),
  `conjugacion-2.ts` (« Juego al ajedrez los martes. »), `vocabulario-vida.ts` (« Juego al baloncesto los martes. »)
- **Problème** : quatre cartes, quatre notes qui disent la même chose
  (`jugar` seul verbe à diphtonguer u→ue, `jugar a` obligatoire).
- **Correction proposée** : garder celle de `es-voc-deporte` (qui ajoute la
  variante latino-américaine `jugar fútbol`) et celle de `es-conj-irregulares-familias`
  pour la diphtongue ; supprimer les deux autres.

### [MOYEN] Le cours « Les périphrases du mouvement » recopie « Les périphrases verbales »

- **Où** : `vocabulaire-mundo.ts` — `es-voc-movimiento`, cours, section 3
  contre `conjugacion-2.ts` — `es-conj-perifrasis`, cours
- **Texte** : « volver a + infinitif dit la répétition : vuelvo a leerlo, je le
  relis. Le français emploie le préfixe re-, l'espagnol une périphrase. » —
  présent dans les deux, à la virgule près. Idem pour « Ir a + infinitif exprime
  le futur proche… bien plus que le futur simple », « Ir + gérondif marque une
  progression : va mejorando », « Andar + gérondif exprime une activité dispersée,
  souvent avec un soupçon de reproche : anda buscando… ».
  Les cartes suivent : « Vuelvo a leerlo esta noche. » contre
  « Vuelve a explicármelo, por favor. »
- **Problème** : un paragraphe entier réemployé d'un cours à l'autre.
- **Correction proposée** : dans `es-voc-movimiento`, remplacer cette section par
  un renvoi et ne garder que ce qui est propre au mouvement (`salir + gérondif`,
  `venir + gérondif`).

### [MOYEN] La place des pronoms, enseignée deux fois à l'identique

- **Où** : `cours-grammaire.ts` — `es-cours-pronoms`, section « Où les mettre »
  contre `conjugacion-2.ts` — `es-conj-reflexivos`, section « Où se place le pronom »
- **Problème** : mêmes trois règles, mêmes exemples (`dímelo`, `no me lo digas`,
  `está duchándose` / `se está duchando`), même remarque sur l'accent écrit.
- **Correction proposée** : garder la version de `es-cours-pronoms`, réduire
  l'autre à deux lignes propres aux pronominaux.

### [MOYEN] « Serían las tres cuando llegó » donné comme exemple du conditionnel **composé**

- **Où** : `conjugacion-2.ts` — `es-conj-anterioridad`, cours, section « L'antériorité au futur et à l'hypothèse »
- **Texte** : « El condicional compuesto — habría terminado — dit l'hypothèse non
  réalisée… Et il sert lui aussi à supposer, mais sur un passé plus lointain :
  **serían las tres cuando llegó**, il devait être trois heures quand il est arrivé. »
- **Problème** : *serían* est un conditionnel **simple**, pas composé. L'exemple
  n'illustre pas la forme dont parle le paragraphe. La même phrase est d'ailleurs
  reprise, correctement cette fois, dans `cours-grammaire.ts` (`es-cours-futur`),
  sous « le conditionnel exprime la supposition sur le passé ».
- **Correction proposée** : déplacer l'exemple sous le conditionnel simple et
  illustrer le composé par *habrían salido ya cuando llamaste*.

### [MOYEN] Un titre de série qui invente un troisième passé

- **Où** : `conjugaison.ts:96` — `es-conj-passes`
- **Texte** : titre « Les passés : **indéfini, simple**, imparfait », alors que le
  cours de la série dit explicitement du *pretérito indefinido* : « C'est notre
  **passé simple**, mais vivant ».
- **Problème** : le titre présente comme deux temps distincts ce que son propre
  cours identifie comme un seul. Les trois temps traités sont le *perfecto*,
  l'*indefinido* et l'*imperfecto*.
- **Correction proposée** : « Les passés : composé, simple, imparfait ».

### [MOYEN] Deux tableaux qui annoncent douze entrées et en donnent dix

- **Où** : `conjugacion-2.ts` — `es-conj-participio`, visuel « Les douze participes irréguliers » (10 lignes) ;
  `cours-grammaire.ts` — `es-cours-futur`, visuel « Les douze radicaux irréguliers, communs aux deux temps » (10 lignes),
  dont le `statement` répète « avec les mêmes douze irréguliers ».
- **Problème** : le compte annoncé ne correspond pas au contenu. Pour le futur il
  manque `valer` (valdr-) et `caber` (cabr-) ; pour les participes, `cubrir` et
  `freír` ont été absorbés dans une autre colonne — et `cubrir` s'y trouve
  présenté comme un composé d'`abrir`, ce qu'il n'est pas.
- **Correction proposée** : compléter les tableaux à douze lignes, ou aligner le
  titre sur le nombre réellement montré.

### [MOYEN] Le passé composé espagnol donné comme règle générale, alors qu'il est régional

- **Où** : `verbes.ts:38` et `conjugaison.ts:99` — `tip` identique
- **Texte** : « Hoy, esta semana, este año appellent le passé composé. Ayer, el
  año pasado appellent le passé simple. »
- **Problème** : c'est la norme d'**Espagne**. Dans la plus grande partie de
  l'Amérique latine on dit *hoy comí*, et le cours de `conjugacion-2.ts` le dit
  lui-même (« En Amérique latine, le passé simple a presque entièrement mangé le
  passé composé »). Le `tip`, qui est la seule chose que beaucoup liront, présente
  une règle régionale comme universelle. Une seule carte de la série
  (`¿Has visto la película?`) mentionne « en Espagne ».
- **Correction proposée** : ajouter « — en Espagne ; l'Amérique latine emploie
  l'indefinido dans les deux cas. » au `tip`.

### [MOYEN] `Se borró la cuenta` traduit par une phrase active

- **Où** : `vocabulario-vida.ts` — `es-voc-medios`, carte 8
- **Texte** : `"Se borró la cuenta."` / `"Il a supprimé son compte."`,
  note « Borrar una cuenta, l'effacer. »
- **Problème** : *se borró la cuenta* se lit d'abord comme un passif réfléchi —
  « le compte a été supprimé » — ou comme un accidentel. Pour dire qu'il l'a
  supprimé volontairement, on dit *borró su cuenta*. La note enseigne la forme
  non pronominale et la carte donne la pronominale.
- **Correction proposée** : `etranger: "Borró su cuenta."`

### [MOYEN] « Bajar seul voudrait dire descendre quelque chose »

- **Où** : `vocabulario-vida.ts` — `es-voc-transportes`, carte 3
- **Texte** : « Bajarse d'un transport, pronominal. Bajar seul voudrait dire
  descendre quelque chose. »
- **Problème** : *bajar del tren*, *bajar del autobús* sans pronom sont
  parfaitement standard et très courants. La note interdit une forme correcte.
- **Correction proposée** : « Bajarse insiste sur le mouvement propre ; bajar del
  autobús se dit tout autant. »

### [MOYEN] « Por la mañana » expliqué par une raison fausse, et sans sa variante

- **Où** : `faux-amis.ts` — `es-por-para`, carte 7
- **Texte** : `"Por la mañana."` / `"Le matin."`, note « Une période approximative : por. »
- **Problème** : *por la mañana* n'a rien d'approximatif — c'est la façon normale
  de dire « le matin ». Le sens approximatif de *por* est celui de *por aquí*,
  *por marzo*. Et la carte ne dit pas que l'Amérique latine dit *en la mañana*,
  alors que `quotidien-a2.ts` le signale correctement pour *por la tarde*.
- **Correction proposée** : note « Por + moment de la journée : por la mañana,
  por la tarde. En Amérique latine, en la mañana. »

### [MOYEN] Une carte de `por/para` qui accepte la réponse qu'elle veut interdire

- **Où** : `faux-amis.ts` — `es-por-para`, carte 5
- **Texte** : `"Lo hice por ti."` / `"Je l'ai fait à cause de toi."`,
  `aussi: ["Je l'ai fait pour toi."]`, note « Por ti : à cause de toi, en ton
  honneur. Para ti : pour te le donner. »
- **Problème** : la série existe pour séparer *por* de *para*, et cette carte
  accepte comme équivalent le français qui correspond précisément à *para ti*.
- **Correction proposée** : retirer l'`aussi`, ou le remplacer par
  « Je l'ai fait en pensant à toi. »

### [MOYEN] Trois cartes anglo-espagnoles dans une série de faux amis du français

- **Où** : `faux-amis.ts` — `es-faux-amis-2`, cartes `asistir a`, `actualmente`, `la fábrica`
- **Texte** : « Vrai ami, contrairement à l'anglais to assist. » ; « Vrai ami
  aussi : c'est l'anglais actually qui est le traître. » ; « Un tissu se dit una
  tela ; la fabrique française vient du même mot latin. »
- **Problème** : la série s'annonce comme les faux amis **du français**
  (`statement` : « Des mots espagnols qui ressemblent trait pour trait à un mot
  français »). Ces trois-là ne sont pas des faux amis du français du tout —
  *fábrica* correspond exactement à « fabrique/usine ». Trois cartes sur dix
  n'illustrent pas ce que la série annonce.
- **Correction proposée** : les regrouper dans une série « faux amis hérités de
  l'anglais », ou ajouter à `statement` que la série signale aussi les vrais amis
  qu'on croit faux.

### [MOYEN] Le `tip` de la politesse contredit le cours de sa propre série

- **Où** : `expresiones.ts` — `es-expr-cortesia`
- **Texte** : `tip` : « **Dame un café** n'a rien de grossier dans un bar
  espagnol : **c'est la formule normale.** » — mais le tableau du cours classe
  `Ponme un café.` comme « direct — bar, **entre proches** » et donne
  `Me pones un café, por favor.` comme le registre « neutre — partout », ce que
  la carte 1 confirme.
- **Problème** : ce que le `tip` appelle « la formule normale », le cours l'appelle
  un registre réservé aux proches.
- **Correction proposée** : « Dame un café n'a rien de grossier entre habitués ;
  la formule passe-partout reste me pones un café, por favor. »

### [MOYEN] Un cours qui se contredit sur `ciudad`

- **Où** : `pronunciacion.ts` — `es-pron-diptongos`, cours, section « Fortes et faibles »
- **Texte** : « Une forte et une faible forment une seule syllabe… bue-no, tie-ne,
  sie-te, **ciu-dad**. » puis, deux lignes plus bas : « Deux faibles forment aussi
  une seule syllabe : **ciu-dad**, cui-da-do, viu-da. »
- **Problème** : *ciudad* est donné comme exemple des deux catégories. Le `iu` est
  faible + faible ; sa présence dans la première liste est une erreur.
- **Correction proposée** : retirer `ciu-dad` de la liste « forte + faible ».

### [MOYEN] `bueno` syllabé en trois syllabes dans un cours qui le syllabe en deux

- **Où** : `pronunciacion.ts` — `es-pron-diptongos`, cours, section « Ce que le francophone doit désapprendre »
- **Texte** : « Un francophone qui lit bueno en cherchant un « ou » se trompe :
  c'est **bu-e-no**, soudé en « boué-no ». »
- **Problème** : le tableau de la section précédente donne `bue-no` comme
  diphtongue, **une** syllabe pour `ue`. Écrire `bu-e-no` contredit directement la
  règle enseignée deux écrans plus haut, sur l'exemple même qui l'illustrait.
- **Correction proposée** : « c'est bue-no, une seule syllabe pour ue, soudée en « boué » ».

### [MOYEN] Note fausse : « deux h muets dans hermano »

- **Où** : `pronunciacion.ts` — `es-pron-vocales`, carte 10
- **Texte** : `"Con mi hermano y con mi prima."` — note : « Deux con, deux o purs.
  Et **deux h muets dans hermano**. »
- **Problème** : *hermano* ne contient qu'un h, et la phrase n'en contient qu'un
  au total. Le compte est faux.
- **Correction proposée** : « Deux con, deux o purs. Et le h de hermano, muet
  comme tous les h espagnols. »

### [MOYEN] L'estanco présenté comme sans équivalent français

- **Où** : `vocabulaire-mundo.ts` — `es-voc-ciudad`, cours, section « La machine à fabriquer des commerces »
- **Texte** : « el estanco est le bureau de tabac espagnol, qui vend aussi les
  timbres — un monopole d'État **sans équivalent exact en France**, où la loterie
  et le tabac se partagent autrement. »
- **Problème** : le bureau de tabac français est lui aussi un débit sous monopole
  d'État et vend lui aussi les timbres. L'affirmation est au mieux trompeuse, et
  la fin de phrase ne veut pas dire grand-chose.
- **Correction proposée** : « el estanco est le bureau de tabac espagnol : comme
  en France, un débit sous monopole d'État, et il vend aussi les timbres. »

### [MOYEN] Un tableau dont la troisième colonne change de sens en cours de route

- **Où** : `vocabulaire-mundo.ts` — `es-voc-ciudad`, visuel « Le produit, le commerce, la personne »
- **Texte** : les huit premières lignes donnent bien un commerçant
  (`el panadero`, `el carnicero`…), les deux dernières donnent
  `["—", "la ferretería", "**quincaillerie**"]` et `["—", "el estanco", "**tabac et timbres**"]`.
- **Problème** : la colonne « La personne » reçoit une glose française. Le lecteur
  qui parcourt la colonne lit « el panadero, el carnicero, …, quincaillerie ».
- **Correction proposée** : mettre `el ferretero` et `el estanquero`, ou sortir ces
  deux lignes du tableau.

### [MOYEN] `Me he dormido` traduit par « Je me suis rendormi »

- **Où** : `bases.ts` — `es-quotidien`, carte 1
- **Texte** : `"Me he dormido."` / `"Je me suis rendormi."`,
  `aussi: ["J'ai trop dormi."]`, note « Dormirse, c'est s'endormir ; dormir,
  c'est dormir. »
- **Problème** : la note dit *dormirse* = s'endormir, la traduction dit
  « rendormi » — qui se dirait *me he vuelto a dormir*. Dans le contexte de la
  série (la journée qui commence mal), le sens visé est « je ne me suis pas
  réveillé ». La carte et sa propre note ne disent pas la même chose.
- **Correction proposée** : `francais: "Je me suis endormi."`,
  `aussi: ["Je ne me suis pas réveillé.", "J'ai trop dormi."]`

### [MOYEN] `Vivo en el piso tercero` contre `Vivo en el primer piso`

- **Où** : `quotidien-a2.ts` — `es-numeros-fechas`, carte 8, et `debutant.ts` — `es-nombres-heure`, carte 8
- **Texte** : « Vivo en el **piso tercero**. » / « J'habite au troisième étage. »
  contre « Vivo en el **primer piso**. » / « J'habite au premier étage. »
- **Problème** : deux ordres différents pour la même construction, sans que rien
  ne l'explique. La forme courante est *el tercer piso*, comme *el primer piso* ;
  *piso tercero* appartient au style des adresses écrites. La note de la carte
  (« Ordinal jusqu'à dix, cardinal au-delà ») ne dit rien de cette inversion.
- **Correction proposée** : « Vivo en el tercer piso. », note « tercero se
  raccourcit en tercer devant un nom masculin, comme primero. »

### [MOYEN] Note hors sujet sur les pourcentages

- **Où** : `quotidien-a2.ts` — `es-numeros-fechas`, carte 10
- **Texte** : « Mide un metro con setenta y cinco. » — note : « Con relie les deux
  parties d'une mesure. **Et por ciento s'écrit en deux mots.** »
- **Problème** : la carte ne contient aucun pourcentage. La deuxième phrase de la
  note ne se rattache à rien.
- **Correction proposée** : supprimer la seconde phrase.

### [MINEUR] Phrase française cassée dans un `tip`

- **Où** : `debutant.ts:67` — `es-acheter`
- **Texte** : « Pour demander poliment, l'imparfait suffit : quería **voir** plus
  doux que quiero, sans être moins clair. »
- **Problème** : « voir » pour « sonne » ou « fait ». La phrase ne se construit pas.
- **Correction proposée** : « quería sonne plus doux que quiero, sans être moins clair. »

### [MINEUR] `enseguida` et `en seguida` dans le même fichier

- **Où** : `verbes.ts` — `es-irreguliers` carte 5 (« Vengo **enseguida**. ») et
  `es-expressions` carte 9 (« **En seguida** vuelvo. »)
- **Problème** : les deux graphies sont admises par la RAE, mais leur alternance
  à quatre-vingts lignes d'écart, sans un mot d'explication, se lira comme une
  faute d'un côté ou de l'autre — et l'exercice de dictée n'en acceptera qu'une.
- **Correction proposée** : unifier sur `enseguida`.

### [MINEUR] Un `tip` qui compte mal

- **Où** : `vocabulaire-mundo.ts` — `es-voc-ropa`
- **Texte** : « Ponerse pour le geste, llevar pour l'état, quitarse pour enlever.
  **Les trois sont réfléchis sauf llevar.** »
- **Problème** : trois verbes moins un en fait deux. La formulation dit le
  contraire de ce qu'elle veut dire.
- **Correction proposée** : « Ponerse et quitarse sont pronominaux ; llevar ne
  l'est jamais dans cet emploi. »

### [MINEUR] Note vide de substance

- **Où** : `verbes.ts` — `es-travail`, carte 8
- **Texte** : « Tenemos una reunión el martes. » — note : « El martes, avec
  l'article : « mardi » sans article **se dirait autrement**. »
- **Problème** : la note annonce une différence et ne la dit pas. L'apprenant
  n'apprend rien.
- **Correction proposée** : « El martes, avec l'article obligatoire : l'espagnol
  n'a pas de « mardi » nu. Los martes marque l'habitude. »

### [MINEUR] Typographie : espace surnuméraire dans les guillemets

- **Où** : `vocabulaire-mundo.ts` — `es-voc-movimiento`, `tip`
- **Texte** : « Répondre « ¡voy!␣␣» quand on nous appelle, jamais « ¡vengo! ». »
- **Problème** : double espace avant le guillemet fermant.

### [MINEUR] Niveaux qui ne correspondent pas au contenu

- **Où** : `verbes.ts` — `es-expressions` déclaré **B2** pour *Vale*, *No pasa nada*,
  *Ni idea*, *Me da igual*, *Menos mal* — toutes des formules A2 ;
  `vocabulaire-mundo.ts` — `es-voc-cocina` et `es-voc-ropa` déclarés **A1** alors
  que leurs cours enseignent *sofreír*, *guisar*, *hornear*, et les variantes
  `campera`/`pollera`/`championes` du Cône Sud ;
  `vocabulario-vida.ts` — `es-voc-deporte` déclaré **B1** pour
  « Juego al baloncesto los martes » et « Hago natación dos veces por semana ».
- **Correction proposée** : `es-expressions` → A2 ; `es-voc-cocina` et
  `es-voc-ropa` → A2 ; `es-voc-deporte` → A2.

### [MINEUR] Heures traduites en heures de l'après-midi sans que rien ne l'indique

- **Où** : `conjugacion-2.ts` (« Salgo del trabajo a las seis. » → « à dix-huit
  heures »), `vocabulario-vida.ts` (« Las noticias son a las ocho. » → « à vingt
  heures »), `vocabulaire-mundo.ts` (« La cena es a las nueve en España. » → « à
  vingt et une heures », « El centro de salud cierra a las ocho. » → « à vingt
  heures »)
- **Problème** : à l'exercice « produire », « à dix-huit heures » appelle
  *a las dieciocho* autant que *a las seis*. Le contexte rend la lecture
  plausible, mais la réponse attendue n'est pas déductible.

---

## Ce que la seconde passe a ajouté

La passe 1 a lu les cartes une à une ; la passe 2 les a relues **en les
confrontant entre fichiers**, ce que la première ne pouvait pas faire. Elle a
ajouté neuf constats, dont trois GRAVE — et les trois plus importants du rapport
avec celui sur `aussiEtranger` :

1. **[GRAVE] « Estar pour le lieu, toujours »**, affirmé trois fois et démenti par
   « La cena es a las nueve en España. » du module lui-même. Invisible en passe 1
   parce que la règle et son contre-exemple sont dans deux fichiers différents.
2. **[GRAVE] « Salir prend toujours de »**, démenti par trois cartes du module
   (`Salgo un momento.`, `Salgo a las ocho.`, `Salgo para Madrid.`).
3. **[GRAVE] « Se déplacer » enseigné deux fois** (`es-voyage` A2 / `es-voc-transportes` B1),
   trois cartes communes.
4. **[GRAVE] Les études enseignées deux fois** (`es-estudios` A2 /
   `es-voc-estudios-superiores` B2), mêmes faux amis `suspender`, `curso`, `aprobar`.
5. [MOYEN] Deux séries « famille » aux titres quasi identiques.
6. [MOYEN] `es-voc-infancia` annonce l'école et n'en parle pas.
7. [MOYEN] `Me da igual` et `Da lo mismo`, deux cartes interchangeables dans une
   même série.
8. [MOYEN] Cours au-dessus de leur niveau (`es-conj-participio` A2, `es-conj-haber-tener` A1).
9. [MOYEN] « Llegar jamais en » et « Todavía no toujours le perfecto », deux
   absolus de trop. [MINEUR] « l'on approuve », `indefinido` employé en A1.

La passe 2 a aussi **corrigé la passe 1 sur les chiffres** : j'avais retenu
« 57 séries, 570 cartes, 11 `aussiEtranger` » ; le compte réel est **68 séries,
680 cartes, 7 `aussiEtranger`**. Le défaut principal du module est donc plus
étendu que ce que la première lecture donnait à croire.

Elle a enfin **innocenté** un point : le contrôle mécanique des 680 cartes ne
trouve aucune paire `¿…?` ou `¡…!` mal appariée, ni aucun accent écrit manquant
sur les mots courants. La saisie de l'espagnol est irréprochable ; les fautes du
module sont dans les notes et les cours, pas dans les phrases.

---

## Ce qui est sain

Les cours de prononciation sont la meilleure partie du périmètre : la section
sur l'enchaînement et la resyllabification (`el agua` → « e-la-gua »,
`los amigos` → « lo-sa-mi-gos ») explique correctement ce qui rend l'espagnol
illisible à l'oreille française, et les proportions données sur le seseo
(« plus de neuf hispanophones sur dix ») sont justes. Les cours sur `haber`/`tener`,
sur le `se` involontaire (`se me rompió el vaso`) et sur le passif que l'espagnol
évite sont solides et disent des choses qu'un manuel ordinaire ne dit pas. La
série `es-diminutivos` est excellente sur le fond — le diminutif qui n'est pas
une mesure — malgré la faute de genre relevée. Les régionalismes sont
signalés bien plus souvent que je ne m'y attendais : `coger`, `concha`, `pinche`,
`ahorita`, `apetecer`/`provocar`/`antojarse` sont tous correctement situés.
