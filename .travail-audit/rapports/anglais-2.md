# Anglais — moitié avancée (B2 / C1 / C2)

> **ÉTAT : passes 1 et 2 terminées.** Les 18 fichiers du périmètre ont été lus
> deux fois, en entier.

## Ce que j'ai lu

Les 18 fichiers du périmètre, dans `prisma/seed/langues/anglais/` :
`avance-b2.ts`, `avance-c2.ts`, `grammaire-c1.ts`, `vocabulaire-c1.ts`,
`vocabulaire-idees.ts`, `vocabulaire-metiers.ts`, `vocabulaire-societe.ts`,
`idiomes-caractere.ts`, `phrasal-collocations.ts`, `formation-mots.ts`,
`precision.ts`, `sensations.ts`, `oral-interaction.ts`, `domaines-3.ts`,
`cours-avance.ts`, `cours-tournures.ts`, `cours-usage.ts`, `dictees.ts`.

Soit **110 séries**, **1 100 cartes** (donc jusqu'à 4 400 exercices :
reconnaître, produire, écouter, prononcer), **33 cours** totalisant
**99 sections** avec leurs visuels (tableaux, comparaisons, étapes), et les
**10 dictées**. Tout a été lu deux fois.

## Constats

20 GRAVE, 52 MOYEN, 43 MINEUR.

### GRAVE

### [GRAVE] ✅ Une note enseigne une forme agrammaticale : « carry out a research »
- **Vérifié** : le tip actuel de `en-phrasal-ecrit` dit « carry out research est standard — research est indénombrable, jamais « a research » ». Déjà corrigé.
- **Où** : `phrasal-collocations.ts` — série `en-phrasal-ecrit`, champ `tip`
- **Texte** : « C'est souvent l'inverse : carry out a research est standard, perform ne l'est pas davantage. »
- **Problème** : `research` est indénombrable. « A research » est faux, et c'est
  exactement l'erreur que le module dénonce ailleurs (`vocabulaire-c1.ts`,
  carte « Further research is needed here. » : « Research est indénombrable :
  jamais “researches” »). Le tip d'une série C1 enseigne donc la faute.
- **Correction proposée** : « C'est souvent l'inverse : *carry out research* est le verbe standard de la méthode, et *perform* ne fait pas plus savant. »

### [GRAVE] ✅ Anglais fautif donné comme modèle : « The trend has borne out since. »
- **Vérifié** : la dernière carte de `en-phrasal-ecrit` est maintenant « The figures have borne out his prediction. » avec la note « Bear out est transitif : […] Le participe passé est borne, jamais « beared ». » Déjà corrigé.
- **Où** : `phrasal-collocations.ts` — `en-phrasal-ecrit`, dernière carte
- **Texte** : `etranger` « The trend has borne out since. » / note « Bear out à l'intransitif. Le participe passé est borne, jamais “beared”. »
- **Problème** : `bear out` est transitif. La forme intransitive n'existe pas ;
  on écrit *the trend has been borne out*. La note invente un emploi et le
  présente comme un fait d'usage C1. L'apprenant produira une phrase fausse.
- **Correction proposée** : `etranger` « The trend has been borne out since. » ; note « Bear out s'emploie au passif quand la preuve est le sujet. Le participe est *borne*, jamais “beared”. »

### [GRAVE] ✅ Deux notes se contredisent sur « call into question »
- **Vérifié** : les deux notes disent maintenant la même chose — `vocabulaire-c1.ts` : « Le complément se place entre call et into : call the theory into question. » ; `phrasal-collocations.ts` : « Le complément se glisse entre call et into. La forme soudée […] existe mais pèse plus lourd. » Déjà corrigé, harmonisé sur la bonne version.
- **Où** : `vocabulaire-c1.ts` — `en-c1-academique`, carte « The results call the theory into question. » ET `phrasal-collocations.ts` — `en-collocations-academiques`, carte « This calls into question the method. »
- **Texte** : d'un côté « Call into question, en trois mots séparables. » ; de l'autre « Call into question, remettre en cause. **La particule ne se déplace pas.** »
- **Problème** : contradiction frontale entre deux séries du même module, sur le
  même point. Et c'est la seconde qui a tort : *call something into question*
  est la construction la plus courante — le complément se glisse bien entre
  `call` et `into`.
- **Correction proposée** : harmoniser sur « Le complément se place entre call et into : *call the theory into question*. La forme soudée *call into question the method* existe mais est plus lourde. »

### [GRAVE] ✅ Une note enseigne un calque : « fail a control »
- **Vérifié** : la note est maintenant « Fail quality control, sans article, ne pas passer le contrôle qualité. » Déjà corrigé.
- **Où** : `vocabulaire-societe.ts` — `en-voc-industrie`, carte « The batch failed quality control. »
- **Texte** : « A batch, un lot de fabrication. **Fail a control**, ne pas passer un contrôle. »
- **Problème** : « a control » au sens de « un contrôle / une inspection » est
  un faux ami : ça ne se dit pas en anglais. On dit *fail quality control*,
  *fail an inspection*, *fail a test*. La note fabrique la collocation que le
  francophone produirait spontanément — et la valide.
- **Correction proposée** : « A batch, un lot de fabrication. *Fail quality control*, *fail an inspection* — mais jamais « fail a control » : *a control* ne veut pas dire un contrôle. »

### [GRAVE] ✅ Traduction française fausse : « He's got a sweet tooth. » → « Il est très sucré. »
- **Vérifié** : `francais` est maintenant « Il aime beaucoup les sucreries. », avec `aussi` : [« Il est très porté sur le sucré. », « Il a un faible pour le sucré. »]. Déjà corrigé.
- **Où** : `idiomes-caractere.ts` — `en-idiomes-corps`
- **Texte** : `francais` « Il est très sucré. » (`aussi` : « Il aime beaucoup les sucreries. »)
- **Problème** : « il est très sucré » ne veut rien dire en français à propos
  d'une personne (ou signifie qu'elle est édulcorée). C'est la traduction
  principale, donc celle affichée en reconnaissance, et celle attendue en
  production. La bonne est reléguée dans `aussi`.
- **Correction proposée** : `francais` « Il est très porté sur le sucré. », `aussi` : [« Il aime beaucoup les sucreries. », « Il a un faible pour le sucré. »]

### [GRAVE] ✅ Décalage d'un étage : « six storeys » ≠ « six étages »
- **Vérifié** : `francais` est maintenant « L'immeuble compte six niveaux. », note « A storey = un niveau […] six storeys font cinq étages en français, le rez-de-chaussée ne comptant pas. » Déjà corrigé.
- **Où** : `vocabulaire-societe.ts` — `en-voc-architecture`, carte 1
- **Texte** : « The building has six storeys. » → « L'immeuble compte six étages. »
- **Problème** : la série s'ouvre pourtant sur ce piège exact (`tip` : « le
  rez-de-chaussée est the ground floor, et the first floor est notre premier
  étage »). Un *six-storey building* a six niveaux ; « un immeuble de six
  étages » en a sept en français. La carte contredit le tip de sa propre série
  et installe une erreur de comptage.
- **Correction proposée** : « The building has six storeys. » → « L'immeuble compte six niveaux. » (note : « A storey = un niveau, rez-de-chaussée compris. “Six étages” en français ferait seven storeys. »)

### [GRAVE] 🔧 Doublon franc : deux séries C1 sur les mêmes noms abstraits
- **Vérifié** : confirmé par un relecteur précédent et vérifié de nouveau — la fusion antérieure n'avait retiré que la carte *trade-off* de `en-noms-abstraits-2` ; les cartes *scope* (« That's beyond the scope of this study. ») et *rationale* (« The rationale is not explained. ») y restaient, doublonnant `en-c1-abstrait`. Corrigé maintenant : ces deux cartes sont supprimées de `en-noms-abstraits-2`, ainsi que la mention de « scope » et « rationale » dans son `statement`/`tip` (remplacés par un renvoi explicite vers « Les mots de la pensée abstraite » pour ces deux mots). La série ne garde que ce qui lui est propre : extent, stance, body of work, gist (x2), implications, premise, emphasis.
- **Où** : `vocabulaire-metiers.ts` — `en-c1-abstrait` « Les mots de la pensée abstraite » ET `idiomes-caractere.ts` — `en-noms-abstraits-2` « Nommer une notion »
- **Texte** : les deux ouvrent sur *scope* et *rationale* ; les deux ont une carte *trade-off* dont les notes sont quasi identiques — « A trade-off : on perd d'un côté ce qu'on gagne de l'autre. » contre « A trade-off, ce qu'on perd d'un côté pour gagner de l'autre. »
- **Problème** : ce ne sont pas deux angles différents, c'est la même série
  écrite deux fois. L'apprenant révisera deux fois le même contenu en croyant
  progresser.
- **Correction proposée** : fusionner. Garder `en-c1-abstrait` (qui a un cours) et ne conserver dans `en-noms-abstraits-2` que ce qui n'y figure pas : *extent*, *stance*, *gist*, *body of work*, *implications*, *emphasis*.

### [GRAVE] ✅ Phrase de note réemployée mot pour mot d'un cours à l'autre
- **Vérifié** : `en-voc-politique` §3 dit maintenant « Pour poser un sujet : an issue, a matter, a topic et a problem ne se valent pas — la série « Les mots de la pensée abstraite » les sépare un à un. Retiens ici que problem n'est jamais neutre… » — renvoi explicite, plus de paragraphe recopié. Déjà corrigé.
- **Où** : `vocabulaire-idees.ts` — `en-voc-politique`, cours §3 ET `vocabulaire-metiers.ts` — `en-c1-abstrait`, cours §2
- **Texte** : « A problem suppose qu'il y a quelque chose à réparer » + « an issue est une question débattue » — identiques dans les deux cours.
- **Problème** : paragraphe recopié d'un cours à l'autre (consigne §4).
- **Correction proposée** : ne garder la série problem/issue/matter/concern que dans `en-c1-abstrait`, et renvoyer depuis `en-voc-politique`.

### [GRAVE] ✅ Doublon de carte quasi mot pour mot : « addresses three questions/issues »
- **Où** : `vocabulaire-c1.ts` — `en-c1-academique` ET `phrasal-collocations.ts` — `en-collocations-academiques`
- **Texte** : « This paper addresses three questions. » / « Cet article traite trois questions. » / note « Address a question, traiter. Le mot ne veut jamais dire adresser. » — contre « The paper addresses three issues. » / « L'article traite trois questions. » / note « Address an issue, traiter. Le verbe ne veut jamais dire adresser. »
- **Problème** : même phrase, même traduction française, même note. Deux exercices identiques dans deux séries.
- **Correction proposée** : supprimer la carte de `en-collocations-academiques` et la remplacer par une collocation non couverte (*meet a deadline*, *pose a challenge*).
- **Vérifié** : la carte « addresses three issues » n'existe plus dans `en-collocations-academiques` ; elle est remplacée par « This raises a further question. » Déjà corrigé.

### [GRAVE] ✅ Note grammaticale fausse : « carefully peut porter sur must »
- **Vérifié** : la note dit maintenant « Carefully en fin de phrase peut se rattacher au seul review ou à tout le groupe review all the data ; devant le verbe, il ne porte plus que sur l'acte de relire. » Déjà corrigé.
- **Où** : `grammaire-c1.ts` — `en-c2-ambiguite`, carte « We must review all the data carefully. »
- **Texte** : « Carefully en fin de phrase peut porter sur *review* ou sur *must*. Le placer devant le verbe lève le doute. »
- **Problème** : un adverbe de manière ne peut pas modifier un modal. « must
  carefully » n'a aucune lecture. L'ambiguïté annoncée n'existe pas : la carte
  est dans une série sur les ambiguïtés réelles et en invente une.
- **Correction proposée** : remplacer la carte, ou requalifier : « Carefully en fin de phrase peut se rattacher à *review* ou à l'ensemble *review all the data* ; devant le verbe, il ne porte plus que sur l'acte de relire. »

### [GRAVE] 🔧 Deux séries font le même cours sur la litote britannique
- **Vérifié** : toujours fautif au moment du contrôle — le cours C2 gardait ses trois sections, dont les deux premières («Pourquoi la langue atténue», «Les trois signaux») reprenaient les mêmes tableaux et le même mécanisme que le cours B2 (`en-euphemisme`), avec les mêmes exemples « Not bad at all » et « With the greatest respect ». Corrigé maintenant : le cours de `en-c2-ironie` est réduit à une seule section (l'ancienne §3, « De la litote à l'ironie »), précédée d'un renvoi explicite au cours B2 pour les bases ; les deux premières sections dupliquées sont supprimées. Les cartes de la série, qui ne faisaient pas doublon, restent inchangées.
- **Où** : `avance-b2.ts` — `en-euphemisme` (cours « La litote britannique ») ET `avance-c2.ts` — `en-c2-ironie` (cours « Dire moins, dire le contraire », §1 et §2)
- **Texte** : le tableau B2 « Not bad at all. | moyen | franchement bon » et « With the greatest respect… | on va me flatter | je vais vous contredire » ; le tableau C2 « Not bad at all | pas mauvais | vraiment très bien » et « With the greatest respect | avec tout mon respect | vous dites une bêtise ».
- **Problème** : mêmes exemples, même mécanisme (négation du contraire,
  atténuateur inversé, préfixe annonciateur), à deux niveaux différents. Seule
  la troisième section du cours C2 (le passage de la litote à l'ironie) apporte
  du neuf.
- **Correction proposée** : réduire le cours C2 à sa §3 et renvoyer explicitement au cours B2 pour le reste ; retirer du C2 les exemples déjà présents en B2.

### [GRAVE] ✅ « Make sure to » déclaré fautif : c'est faux
- **Vérifié** : le tip dit maintenant « Make sure se construit avec une proposition […] ou avec un infinitif […] : les deux sont corrects. Ce qui ne se dit pas, c'est « make sure of locking ». » Déjà corrigé.
- **Où** : `oral-interaction.ts` — `en-instructions`, `tip` et carte « Make sure you lock the door. »
- **Texte** : tip « Make sure + proposition, **jamais + infinitif** : make sure you lock the door. **La faute est fréquente et s'entend tout de suite.** » ; note « Jamais “make sure to lock” en anglais britannique soigné. »
- **Problème** : *make sure to do something* est une construction parfaitement
  standard, britannique comprise, et figure comme telle dans les dictionnaires
  d'apprentissage (Cambridge, Oxford). Le module invente une faute et apprendra
  à l'étudiant à corriger de l'anglais correct — et à se corriger lui-même à
  tort.
- **Correction proposée** : tip « Make sure se construit avec une proposition (*make sure you lock the door*) ou avec un infinitif (*make sure to lock the door*) : les deux sont corrects. Ce qui ne se dit pas, c'est *make sure of locking*. »

### [GRAVE] ✅ Doublon franc : la carte « I hear you, but… » existe deux fois
- **Vérifié** : `en-desaccord-poli` ne contient plus de carte « I hear you, but… » — elle a été remplacée par « I take your point, but the timing is wrong. » Déjà corrigé (le recouvrement thématique plus large entre les deux séries, mentionné en passant dans le problème, n'était pas le cœur du constat : la carte identique a disparu).
- **Où** : `avance-c2.ts` — `en-c1-negociation`, carte 1 ET `oral-interaction.ts` — `en-desaccord-poli`
- **Texte** : « I hear you, but the budget is fixed. » / note « I hear you accuse réception sans concéder. Ce n'est jamais un accord. » — contre « I hear you, but the timing is wrong. » / note « I hear you accuse réception sans accord. Ce n'est jamais un oui. »
- **Problème** : même formule, même structure de phrase, même note reformulée.
  Les deux séries (`en-c1-negociation` C1 et `en-desaccord-poli` C1) se
  recouvrent d'ailleurs largement : *push back*, *not in a position to*,
  *I'd be cautious about that*, *that's not my call* traitent tous du refus
  professionnel indirect.
- **Correction proposée** : supprimer la carte de `en-desaccord-poli` et y renvoyer explicitement à `en-c1-negociation`, ou fusionner les deux séries.

### [GRAVE] ✅ Deux cours du module se contredisent sur « furthermore »
- **Vérifié** : les deux cours disent maintenant « Moreover et furthermore sont interchangeables […] » (vocabulaire-c1.ts §2, cours-usage.ts §2, et la note de la carte associée dans vocabulaire-c1.ts). Déjà corrigé.
- **Où** : `vocabulaire-c1.ts` — `en-c1-academique`, cours §2 (et la carte « Furthermore, the sample was too small. ») ET `cours-usage.ts` — `en-cours-ecrire`, cours §2
- **Texte** : « Moreover annonce un argument de même force ; **furthermore annonce un argument supplémentaire et souvent décisif.** » — contre « **Furthermore est de plus en plus perçu comme pompeux.** »
- **Problème** : un cours en fait le connecteur fort à privilégier, l'autre un
  mot à éviter. Un apprenant qui suit les deux séries reçoit deux consignes
  opposées sur le même mot, sans qu'aucune ne mentionne l'autre.
- **Correction proposée** : trancher pour une position unique — « *moreover* et *furthermore* sont interchangeables et appartiennent à l'écrit formel ; dans un courriel ou une note, *also* et *what's more* passent mieux » — et l'écrire dans les deux cours.

### [GRAVE] 🔧 Section de cours dupliquée : phrasal verb contre équivalent latin
- **Vérifié** : confirmé par un relecteur précédent et vérifié de nouveau — la §3 « Registre » de `en-cours-phrasal` (`cours-usage.ts`) était toujours un paragraphe complet reprenant les mêmes paires (find out/discover, put off/postpone, give up/abandon, look into/investigate) et la même conclusion que `en-c1-registre`. Corrigé maintenant : cette §3 est réduite à une ligne de renvoi — « Le phrasal verb est le registre courant, son équivalent latin le registre soutenu (find out / discover, put off / postpone) : la série « Choisir son registre » (C1, en-c1-registre) développe ce mécanisme en détail. » — la version complète de `en-c1-registre` n'est pas touchée.
- **Où** : `vocabulaire-c1.ts` — `en-c1-registre`, cours §2 « Le verbe à particule, marqueur du parlé » ET `cours-usage.ts` — `en-cours-phrasal`, cours §3 « Registre »
- **Texte** : « Put off donne postpone, find out donne discover, look into donne investigate, […] give up donne abandon » — contre « find out contre discover, put off contre postpone, give up contre abandon, look into contre investigate ».
- **Problème** : mêmes paires, même argument (le phrasal verb est le registre
  courant, le latin le registre écrit), même conclusion (« savoir les deux et
  choisir » / « choisir selon le contexte est un des marqueurs les plus nets
  d'un bon niveau »). C'est la même section écrite deux fois.
- **Correction proposée** : garder la version de `en-c1-registre` (plus complète) et réduire la §3 de `en-cours-phrasal` à un renvoi d'une ligne.

### [GRAVE] ✅ Deux séries se contredisent frontalement sur « unless »
- **Vérifié** : `en-cours-conditionnels` dit maintenant « Unless veut dire « sauf si » : il pose la seule circonstance qui annulerait la phrase. Il équivaut souvent à if… not, mais pas toujours… » et la carte traduit « À moins que tu ne te dépêches, on sera en retard. » — cohérent avec `en-conditionnels-avances`. Déjà corrigé.
- **Où** : `cours-avance.ts` — `en-cours-conditionnels`, cours §3 et carte « Unless you hurry, we'll be late. » ET `formation-mots.ts` — `en-conditionnels-avances`, `tip` et carte « We'll go unless it rains. »
- **Texte** : « **Unless remplace if… not** : unless you hurry, we'll be late. » et sa carte traduite « **Si tu ne te dépêches pas**, on sera en retard. » — contre « Unless veut dire « sauf si », **pas « si… ne… pas »**. La nuance compte : *unless it rains* n'est pas exactement *if it doesn't rain*. » et sa carte traduite « Nous irons **sauf s'il pleut**. »
- **Problème** : un cours pose l'équivalence, l'autre la refuse explicitement,
  et les traductions françaises des deux cartes appliquent chacune sa doctrine.
  L'apprenant qui fait les deux séries reçoit une règle et son démenti. (Le
  second a raison sur le fond : *unless* introduit la seule circonstance qui
  annulerait l'énoncé, ce que *if… not* ne dit pas toujours.)
- **Correction proposée** : dans `en-cours-conditionnels`, écrire « Unless veut dire “sauf si” : il pose l'exception qui annulerait la phrase. Il équivaut souvent à *if… not*, mais pas toujours — et il ne se cumule jamais avec une négation. » ; la carte devient « Unless you hurry, we'll be late. » → « À moins que tu ne te dépêches, on sera en retard. »

### [GRAVE] ✅ Doublon : deux séries sur le passif, avec les mêmes cartes
- **Vérifié** : `en-passif-avance` ne contient plus les cartes *were given a second chance* ni *is being rebuilt* ; elle couvre maintenant *have something done*, *be said to*, *it is thought/widely believed that*, *the meeting was called off* (particule + passif), *have + participe subi*, *be looked into*, *be believed to have*. Déjà corrigé, conforme à la proposition.
- **Où** : `cours-avance.ts` — `en-cours-passif` (B2) ET `formation-mots.ts` — `en-passif-avance` (C1)
- **Texte** : « I was given a second chance. » → « On m'a donné une seconde chance. » / note « Ce passif-là n'a pas d'équivalent français. » — contre « They were given a second chance. » → « On leur a donné une seconde chance. » / note « Le complément d'attribution devient sujet du passif, ce que le français ne fait pas. » ; et « The house is being renovated. » / note « Passif continu : is being + participe. » — contre « The house is being rebuilt. » / note « Be being + participe : le passif au continu. »
- **Problème** : deux cartes sur quatre de la partie « double passif » et
  « passif continu » sont les mêmes phrases à un mot près, avec la même note
  reformulée. Le C1 est censé aller « au-delà » du B2 : il n'y va que pour
  *have something done* et *be said to*.
- **Correction proposée** : retirer de `en-passif-avance` les cartes *were given a second chance* et *is being rebuilt*, déjà couvertes en B2, et compléter par ce qui manque : *it is widely believed that*, *she is expected to*, *the meeting was called off* au passif avec particule.

### [GRAVE] 🔧 Doublon franc : la série « gérondif ou infinitif » existe deux fois
- **Vérifié** : toujours fautif au moment du contrôle — `en-patterns-verbaux` (`formation-mots.ts`) avait encore ses dix cartes sur stop/regret/try/mean/go on, qui recoupaient presque mot pour mot le cours et les cartes de `en-remember-doing` (remember, forget, stop, try, regret). Corrigé maintenant, en suivant l'option « recentrer » de la correction proposée plutôt que la suppression pure (qui aurait perdu une série entière sans la remplacer) : `en-patterns-verbaux` est réécrite avec quatre couples que `en-remember-doing` ne couvre pas — need doing / need to do, get to do / come to do, be afraid of doing / afraid to do, used to / be used to doing — et son statement renvoie explicitement à `en-remember-doing` pour le principe -ing/to et les sept verbes d'origine.
- **Où** : `cours-tournures.ts` — `en-remember-doing` « Remember doing ou remember to do » (B1) ET `formation-mots.ts` — `en-patterns-verbaux` « Gérondif ou infinitif » (B2)
- **Texte** : tips quasi identiques — « **Le -ing regarde en arrière**, vers ce qui est déjà fait ; **le to regarde en avant**, vers ce qui reste à faire. » contre « **Le gérondif regarde en arrière, l'infinitif en avant.** I remember locking the door : je l'ai fait. » Et les cartes se recouvrent presque toutes : *stopped smoking* / *stopped to smoke*, *regret telling him* / *regret to inform you*, *tried opening* / *tried to open*.
- **Problème** : ce n'est pas un rappel, c'est la même série écrite deux fois, à
  deux niveaux, avec les mêmes verbes et les mêmes phrases. Le cours de
  `en-remember-doing` traite d'ailleurs *go on* et *mean*, dont
  `en-patterns-verbaux` fait ses quatre dernières cartes.
- **Correction proposée** : garder `en-remember-doing` (qui a le cours) et supprimer `en-patterns-verbaux`, ou la recentrer sur ce qui n'y est pas : *need doing / need to do*, *come to do*, *be afraid of doing / afraid to do*, *used to / be used to doing*.

### [GRAVE] 🔧 Doublon franc : la série « make, do, take, have » existe deux fois
- **Vérifié** : toujours fautif au moment du contrôle — `en-collocations-verbes` (`phrasal-collocations.ts`) gardait encore le titre « Make, do, take, have, give » et deux cartes quasi identiques à `en-collocations` : « We need to make a decision today. » / « I need to make a decision. », et « Let me take a look. » / « Can I have a look ? » (les deux notes citant d'ailleurs explicitement l'équivalence take/have a look). Corrigé maintenant, comme proposé : titre renommé « Give et have : les collocations qui restent », statement et tip recentrés sur give/have, les deux cartes dupliquées remplacées par « Give me a hand with this. » et « Let's have a chat about it. » — les cartes déjà propres à la série (give a talk, have a word, take sugar, make sense, give it a miss, do the dishes, make an effort, do one's best) ne sont pas touchées.
- **Où** : `cours-tournures.ts` — `en-collocations` « Make, do, take, have : le bon verbe » (A2) ET `phrasal-collocations.ts` — `en-collocations-verbes` « Make, do, take, have, give » (B2)
- **Texte** : « I need to make a decision. » / note « **Le français prend la décision, l'anglais la fabrique** : make a decision. » — contre « We need to make a decision today. » / note « Make a decision, jamais “take”. **Le français prend là où l'anglais fabrique.** » Les tips se répondent de même : « Make ce qui se produit, do ce qui se travaille » contre « Make va vers ce qu'on produit, do vers ce qu'on accomplit ».
- **Problème** : même titre, même quatuor de verbes, mêmes exemples canoniques
  (*make a decision*, *make a mistake*, *take a look / have a look*), notes
  reformulées. Deux séries entières pour un seul contenu.
- **Correction proposée** : garder `en-collocations` (elle a le cours) ; réduire `en-collocations-verbes` aux emplois qu'elle seule couvre — *give a talk*, *give a hand*, *have a word*, *do the dishes* — et la renommer « Give et have : les collocations qui restent ».

### [GRAVE] 🔧 La méthode d'apprentissage des phrasal verbs, enseignée à l'envers dans deux cours
- **Vérifié** : l'en-tête de `phrasal-collocations.ts` et le statement/tip de `en-cours-phrasal` (`cours-usage.ts`) portaient déjà la version réconciliée (« la particule oriente, le verbe fixe la famille » / « on les apprend par famille de verbe pour réviser, par particule pour deviner — jamais un par un »). Mais le tip de la série `en-phrasal-get`, dans le même fichier que l'en-tête corrigé, disait encore « Chercher le sens du verbe est le meilleur moyen de se tromper » — en contradiction directe avec l'en-tête juste au-dessus et avec `en-cours-phrasal`. Corrigé maintenant : le tip de `en-phrasal-get` dit « Cette série regroupe par verbe pour réviser — pour deviner un sens inconnu, c'est la particule qu'il faut regarder. »
- **Où** : `cours-usage.ts` — `en-cours-phrasal` ET `phrasal-collocations.ts` (en-tête du fichier et `en-phrasal-get`)
- **Texte** : « Ils ne s'apprennent pas par liste : **ils s'apprennent par particule**. […] les particules ont des sens assez stables, et les reconnaître rend une grande partie du vocabulaire **déductible**. » — contre « on les apprend **par famille de verbe**, jamais un par un » et le tip « Get seul veut dire obtenir ou devenir ; avec une particule, il ne veut plus rien dire de tel. **Chercher le sens du verbe est le meilleur moyen de se tromper.** »
- **Problème** : les deux cours donnent la consigne d'étude inverse — l'un dit
  d'entrer par la particule et affirme que le sens est déductible, l'autre dit
  d'entrer par le verbe et affirme que chercher un sens est le plus sûr moyen
  de se tromper. Les séries `en-phrasal-get`, `en-phrasal-take-put` et
  `en-phrasal-come-go` sont d'ailleurs organisées par verbe, et
  `en-cours-phrasal` par particule.
- **Correction proposée** : garder les deux entrées mais les articuler — « La particule oriente (up : achèvement, off : séparation), le verbe fixe la famille. On entre par la particule pour deviner, par le verbe pour réviser. » — et l'écrire dans les deux cours.

### MOYEN

### [MOYEN] ✅ « Significant ne veut pas dire important » : affirmation trop absolue
- **Où** : `avance-b2.ts` — `en-faux-amis-technique` (tableau + carte « These results are not significant. »)
- **Texte** : tableau « significant | statistiquement établi | *faux ami* : important en volume | *le vrai mot* : substantial, large » ; note de carte « Significant veut dire statistiquement établi, pas “important”. »
- **Problème** : hors contexte statistique, *significant* est l'un des mots les
  plus courants de l'anglais pour « important, notable » (*a significant
  increase*, *a significant figure*). Le `tip` de la série le dit correctement
  (« Significant **en science** veut dire… ») mais la note et le tableau
  suppriment la restriction. Un apprenant en conclura qu'il ne peut jamais
  employer *significant* au sens courant.
- **Correction proposée** : note « Dans un article scientifique, *significant* veut dire statistiquement établi — pas simplement important. Ailleurs, le sens courant de “notable” reste parfaitement valide. »
- **Fait** : note reformulée dans `avance-b2.ts` en reprenant la correction proposée telle quelle.

### [MOYEN] ✅ « Revenue » : le pluriel existe
- **Où** : `avance-b2.ts` — `en-chiffres-graphiques`, carte « Revenue doubled between 2019 and 2022. »
- **Texte** : « Revenue au sens de chiffre d'affaires est indénombrable : jamais “revenues”. »
- **Problème** : *revenues* est courant en finance et en comptabilité (*total
  revenues*, *government revenues*, états financiers américains). « Jamais »
  est faux.
- **Correction proposée** : « Revenue est le plus souvent indénombrable ; *revenues* existe quand on distingue plusieurs sources de recettes. »
- **Fait** : note reformulée dans `avance-b2.ts` en reprenant la correction proposée.

### [MOYEN] ✅ « Cut rates, pas lower » : faux
- **Où** : `avance-c2.ts` — `en-c1-economie`, carte « The bank raised interest rates. »
- **Texte** : « Raise rates, relever. Le mouvement inverse est cut rates, **pas “lower”**. »
- **Problème** : *lower rates* est parfaitement standard (« the Fed lowered
  rates »). *Cut* est plus journalistique, pas exclusif.
- **Correction proposée** : « Raise rates / cut rates dans la presse ; *lower rates* se dit aussi, un ton plus neutre. »
- **Fait** : note reformulée dans `avance-c2.ts` en reprenant la correction proposée.

### [MOYEN] ✅ Faux amis fabriqués dans le tableau « le mot, le piège »
- **Où** : `avance-b2.ts` — `en-faux-amis-technique`, tableau
- **Texte** : lignes « trial | le procès, l'essai clinique | *faux ami* : travail | *le vrai mot* : work » ; « compound | le composé chimique | composer | compose » ; « sentence | la peine prononcée | phrase (grammaire) | sentence aussi — le verbe tranche » ; « record | le registre | record sportif | record (mais autre emploi) »
- **Problème** : (a) aucun francophone ne confond *trial* et « travail » — le
  faux ami est inventé ; (b) la colonne « le vrai mot » se vide sur trois
  lignes (« sentence aussi », « record (mais autre emploi) ») et le tableau
  cesse de fonctionner ; (c) pour *sentence*, le tableau range « phrase
  (grammaire) » dans la colonne des faux amis alors que le cours dit deux
  paragraphes plus bas « Le mot désigne **aussi** la phrase en grammaire » —
  le tableau contredit son propre cours.
- **Correction proposée** : retirer les lignes *trial* et *compound* ; pour *sentence*, écrire « sentence | la peine, ET la phrase | le français “sentence” (maxime) | maxim, saying ».
- **Fait** : les deux lignes retirées, la ligne *sentence* réécrite comme proposé. La ligne *record* ("record (mais autre emploi)"), aussi signalée en passant dans le problème, n'a pas de correction explicite dans la proposition : laissée telle quelle.

### [MOYEN] ✅ « Bill » ne veut jamais dire billet — sauf aux États-Unis
- **Où** : `avance-b2.ts` — `en-faux-amis-technique`, tableau (« bill | le projet de loi, l'addition | *faux ami* : bille, billet | marble, ticket ») et cours §3
- **Problème** : en anglais américain, *a ten-dollar bill* est précisément un
  billet de banque. Le tableau enseigne que cette lecture est fausse.
- **Correction proposée** : ajouter « — et *a bill* est aussi le billet de banque en anglais américain ».
- **Fait** : ajouté dans le tableau (`avance-b2.ts`) et dans le cours §3, qui précise maintenant que *a bill* est aussi le billet de banque en anglais américain.

### [MOYEN] ✅ Le cours des idiomes se contredit sur « at the end of the day »
- **Où** : `vocabulaire-c1.ts` — `en-c1-idiomes`, cours §1 puis §3
- **Texte** : §1 « Certains sont neutres et passent partout — **at the end of the day**, in the long run. » ; §3 « Certains idiomes sont devenus des clichés que les rédacteurs évitent — **at the end of the day**, think outside the box… »
- **Problème** : le même exemple sert à illustrer une chose et son contraire, à
  deux sections d'intervalle du même cours.
- **Correction proposée** : en §1, remplacer par « in the long run, by and large » et laisser *at the end of the day* à la section des clichés.
- **Fait** : remplacé dans `vocabulaire-c1.ts` comme proposé.

### [MOYEN] ✅ Le cours et la carte se contredisent sur l'origine de « jump the gun »
- **Où** : `vocabulaire-c1.ts` — `en-c1-idiomes` : cours §2 « La guerre et la chasse : bite the bullet, **jump the gun**, partir trop tôt » ; carte « Don't jump the gun on this. » note « Jump the gun, partir avant le signal. **Image d'athlétisme.** »
- **Problème** : contradiction cours ↔ carte. C'est la carte qui a raison (le
  pistolet du starter).
- **Correction proposée** : déplacer *jump the gun* dans la famille « sport » du cours.
- **Fait** : déplacé dans `vocabulaire-c1.ts`, en l'ajoutant à la phrase sur le tennis et en le retirant de la famille guerre/chasse.

### [MOYEN] ✅ Étymologie douteuse donnée comme fait : le red herring
- **Où** : `idiomes-caractere.ts` — `en-idiomes-animaux`, carte « That's a red herring. »
- **Texte** : « A red herring, un hareng fumé qu'on traînait pour égarer les chiens. »
- **Problème** : cette origine est une légende très répandue mais contestée (la
  pratique attestée servait à *entraîner* les chiens, pas à les égarer, et
  l'emploi figuré est retracé à un pamphlet de 1807). La carte voisine sur
  Nelson prend soin d'écrire « viendrait de » ; celle-ci affirme.
- **Correction proposée** : « A red herring, une fausse piste. L'image *viendrait* du hareng fumé qu'on traînait sur une piste — l'étymologie est discutée. »
- **Fait** : note reformulée dans `idiomes-caractere.ts` en reprenant la correction proposée.

### [MOYEN] ✅ Deux explications incompatibles de « quite » dans le module
- **Où** : `avance-b2.ts` — `en-euphemisme` (tableau : « Quite good. | assez bon (GB) / très bon (US) | l'accent change le sens » ; note « au Royaume-Uni il tempère, aux États-Unis il renforce ») ET `vocabulaire-idees.ts` — `en-voc-emotions` (cours §2 : « quite change de sens. Devant un adjectif ordinaire il tempère — quite good ; devant un extrême il renforce — quite brilliant »)
- **Problème** : les deux faits sont vrais, mais chacun est présenté comme
  *l'*explication du phénomène. Un apprenant qui croise les deux ne saura pas
  laquelle appliquer.
- **Correction proposée** : dans les deux séries, donner la règle complète : « Devant un adjectif gradable, *quite* tempère en anglais britannique et renforce en américain ; devant un adjectif extrême (*brilliant*, *exhausted*), il renforce partout. »
- **Fait** : règle complète écrite dans les deux cours (`avance-b2.ts` et `vocabulaire-idees.ts`).

### [MOYEN] ✅ « Le camping, le parking n'existent pas en anglais » : faux
- **Où** : `vocabulaire-idees.ts` — `en-voc-numerique`, cours §1
- **Texte** : « Un “pressing”, un “camping”, un “parking”, un “brushing” et un “relooking” **n'existent pas non plus**. Ce sont des créations françaises […] et un anglophone ne les comprend pas. »
- **Problème** : *camping* et *parking* sont des mots anglais parfaitement
  courants (*camping is fun*, *parking is free*, *parking space*). Ce qui est
  français, c'est leur emploi comme nom de lieu (« un parking » = *a car
  park*). Dire qu'ils « n'existent pas » est une erreur de fait.
- **Correction proposée** : « *Camping* et *parking* existent en anglais, mais seulement comme noms d'activité : un « parking » se dit *a car park* (GB) ou *a parking lot* (US), un « camping » *a campsite*. En revanche *pressing*, *brushing* et *relooking* sont des créations françaises. »
- **Fait** : cours de `vocabulaire-idees.ts` réécrit en reprenant la correction proposée.

### [MOYEN] ✅ « Furthermore » plus fort que « moreover » : distinction inventée
- **Où** : `vocabulaire-c1.ts` — `en-c1-academique`, cours §2 et carte « Furthermore, the sample was too small. »
- **Texte** : « Moreover annonce un argument de même force ; furthermore annonce un argument supplémentaire et souvent décisif. »
- **Problème** : les deux sont interchangeables dans l'usage et dans les guides
  de style. Présenter une hiérarchie inexistante comme une règle apprendra à
  l'étudiant à corriger des textes corrects.
- **Correction proposée** : « Moreover et furthermore sont interchangeables ; *in addition* est un cran plus neutre, *also* un cran plus courant. »
- **Fait** : le cours (§2 de `en-c1-academique`) portait déjà la bonne règle (fixée par la passe GRAVE) ; seule la note de la carte « Furthermore, the sample was too small. » répétait encore l'ancienne hiérarchie — corrigée pour reprendre la règle unique.

### [MOYEN] ✅ « Explain the discrepancy » traité comme un calque
- **Où** : `vocabulaire-c1.ts` — `en-c1-academique`, cours §1
- **Texte** : « Le calque “explain the discrepancy” existe mais dit moins : account for suppose une explication complète. »
- **Problème** : *explain the discrepancy* est de l'anglais idiomatique
  ordinaire, pas un calque du français. Le mot « calque » induit l'apprenant à
  l'éviter.
- **Correction proposée** : « *Explain the discrepancy* est correct ; *account for* dit en plus qu'on rend compte de la totalité de l'écart. »
- **Fait** : cours de `vocabulaire-c1.ts` réécrit en reprenant la correction proposée.

### [MOYEN] ✅ « Scope donne wide-ranging » : dérivation inexistante
- **Où** : `vocabulaire-metiers.ts` — `en-c1-abstrait`, cours §3
- **Texte** : « apprendre sa famille. Insight donne insightful ; **scope donne wide-ranging** ; accountable donne accountability… »
- **Problème** : *wide-ranging* n'est pas dérivé de *scope*. La consigne de
  méthode (« apprendre la famille morphologique ») est illustrée par un
  contre-exemple.
- **Correction proposée** : « scope donne *wide-scoping*, *out of scope*, *scoping* (la phase de cadrage) ».
- **Fait** : cours de `vocabulaire-metiers.ts` réécrit en reprenant la correction proposée.

### [MOYEN] ✅ Hiérarchie goal / aim / objective / target donnée comme règle
- **Où** : `vocabulaire-metiers.ts` — `en-c1-abstrait`, cours §2 + visuel + carte « The target is measurable, the aim is not. »
- **Problème** : cette échelle (« du plus vague au plus précis ») est un usage
  de jargon managérial, pas un fait de langue : *goal* et *objective* sont
  couramment interchangeables, et *aim* est souvent le plus formel des quatre.
  Présentée comme une règle, elle produira des corrections abusives.
- **Correction proposée** : introduire par « Dans le jargon du management, on hiérarchise souvent ainsi : … Hors de ce cadre, goal et objective sont interchangeables. »
- **Fait** : cours, visuel et note de carte de `vocabulaire-metiers.ts` recadrés comme « jargon du management », avec la précision qu'ailleurs goal/objective sont interchangeables.

### [MOYEN] ✅ « Le mot career est moins employé en anglais qu'en français »
- **Où** : `vocabulaire-metiers.ts` — `en-voc-travail-metiers`, cours §1
- **Texte** : « Le mot français “carrière” a la même portée, mais l'anglais l'emploie moins souvent : on dit plutôt *my working life*. »
- **Problème** : *career* est extrêmement courant en anglais (*career path*,
  *career change*, *careers advice*, *mid-career*). L'affirmation est inverse
  de la réalité.
- **Correction proposée** : supprimer la phrase, ou « *career* est très courant, y compris en composition : career path, career change, careers advice. »
- **Fait** : phrase remplacée dans `vocabulaire-metiers.ts` par la seconde option proposée.

### [MOYEN] ✅ « Stammer / stutter » : la distinction est inversée pour l'anglais britannique
- **Où** : `idiomes-caractere.ts` — `en-verbes-parole`, carte « She stammered an apology. »
- **Texte** : « Stammer, bégayer d'émotion. Stutter désigne plutôt le trouble permanent. »
- **Problème** : en anglais britannique, *stammer* est précisément le terme
  clinique du trouble de la parole (British Stammering Association) ; *stutter*
  est l'usage américain. La note donne la répartition contraire.
- **Correction proposée** : « Stammer et stutter sont synonymes ; *stammer* est le terme britannique, *stutter* l'américain. Tous deux servent pour l'hésitation passagère comme pour le trouble installé. »
- **Fait** : note reformulée dans `idiomes-caractere.ts` en reprenant la correction proposée.

### [MOYEN] ✅ « Police prend un verbe pluriel en anglais britannique » : la restriction est fausse
- **Où** : `vocabulaire-c1.ts` — `en-c1-presse`, carte « Police have launched a probe. »
- **Texte** : « Police prend un verbe pluriel **en anglais britannique**. »
- **Problème** : *the police are / have* vaut aussi en anglais américain. La
  restriction laisse croire à un singulier américain qui n'existe pas.
- **Correction proposée** : « *Police* prend toujours un verbe pluriel : the police are, the police have. »
- **Fait** : note reformulée dans `vocabulaire-c1.ts` en reprenant la correction proposée.

### [MOYEN] ✅ Le cours de registre classe « terminate » dans deux couches à la fois
- **Où** : `vocabulaire-c1.ts` — `en-c1-registre`, cours §1
- **Texte** : couche française : « Request, obtain, purchase, assist, commence, **terminate**, continue. » ; couche latine, deux lignes plus bas : « Solicit, procure, acquire, facilitate, initiate, **terminate**, perpetuate. »
- **Problème** : le même mot sert d'exemple à deux étages opposés du même
  système, dans le même paragraphe.
- **Correction proposée** : retirer *terminate* de la couche française (le tableau de la même section le place bien en colonne « formel »).
- **Fait** : retiré de la couche française dans `vocabulaire-c1.ts`, comme proposé.

### [MOYEN] ✅ Carte hors sujet dans la série des ambiguïtés
- **Où** : `grammaire-c1.ts` — `en-c2-ambiguite`, carte « They can't hear well enough. »
- **Texte** : note « Can't se prononce autrement en anglais britannique et américain : la confusion avec can est fréquente. »
- **Problème** : la série porte sur les ambiguïtés d'*ordre des mots* ; cette
  carte parle de prononciation, et la note n'explique aucune ambiguïté
  syntaxique de la phrase citée.
- **Correction proposée** : déplacer la carte vers `prononciation.ts` et la remplacer par une vraie ambiguïté de portée (ex. « The old men and women left. »).
- **Fait** : la carte a été remplacée dans `grammaire-c1.ts` par « The old men and women left. » (vraie ambiguïté de portée). Le volet « déplacer vers prononciation.ts » n'a pas été fait : ce fichier est hors de mon périmètre (il ne figure pas dans les 18 fichiers assignés) — à signaler au propriétaire ou au relecteur d'`anglais-1.md`.

### [MOYEN] ✅ Non-réversible : « Well, that went well. » → « ça s'est merveilleusement passé »
- **Où** : `avance-c2.ts` — `en-c2-ironie`, carte 1
- **Problème** : l'anglais est plat (*that went well*), le français ajoute
  « merveilleusement ». En production, l'apprenant partant du français écrira
  « that went wonderfully » et sera corrigé à tort. L'ironie doit rester dans
  la situation, pas dans le lexique.
- **Correction proposée** : `francais` « Eh bien, ça s'est bien passé. » avec `aussi` [« Bravo, quel succès. »], et laisser la note porter l'ironie.
- **Fait** : carte d'`avance-c2.ts` réécrite comme proposé (le champ `aussi` portait déjà « Bravo, quel succès. »).

### [MOYEN] ✅ Non-réversible : les cartes « try + gérondif / infinitif »
- **Où** : `formation-mots.ts` — `en-patterns-verbaux`
- **Texte** : « She tried opening the window. » → « Elle a essayé d'ouvrir la fenêtre, **pour voir**. » ; « She tried to open the window. » → « Elle a tenté d'ouvrir la fenêtre, **sans y parvenir**. »
- **Problème** : la glose explicative est entrée dans la traduction. Un
  apprenant produisant l'anglais depuis « sans y parvenir » écrira *without
  managing to*. La distinction doit vivre dans la note, pas dans le français.
- **Correction proposée** : « Elle a essayé d'ouvrir la fenêtre. » pour les deux, en déplaçant « pour voir » / « en vain » dans la note.
- **Fait** : traductions et notes de `formation-mots.ts` réécrites comme proposé.

### [MOYEN] ✅ Deux cartes concurrentes pour le même français
- **Où** : `avance-c2.ts` — `en-c2-rhetorique` (« This begs a further question. » → « Cela soulève une autre question. ») ET `phrasal-collocations.ts` — `en-collocations-academiques` (« This raises a further question. » → « Cela soulève une question de plus. »)
- **Problème** : deux français quasi identiques, deux anglais différents, aucun
  `aussiEtranger`. En production, la moitié des bonnes réponses sera refusée.
  Et le module pousse *beg the question* dans son emploi contesté alors que
  `grammaire-c1.ts` (`en-c1-philosophie`, carte « This begs the question. » →
  « C'est une pétition de principe. ») enseigne le sens strict.
- **Correction proposée** : `aussiEtranger: ["This raises a further question."]` sur la carte C2, et note « *raise* est le verbe sûr ; *beg the question* au sens de “soulever” reste critiqué. »
- **Fait** : `aussiEtranger` et note ajoutés dans `avance-c2.ts` comme proposé.

### [MOYEN] ✅ Non-réversible : « I only saw her on Tuesday. »
- **Où** : `grammaire-c1.ts` — `en-c2-ambiguite`
- **Texte** : « I only saw her on Tuesday. » → « Je ne l'ai vue que mardi. » avec note « Only devant le verbe porte sur toute la phrase et **reste ambigu**. »
- **Problème** : la note dit que la phrase est ambiguë, mais la traduction en
  fige une seule lecture — et cette lecture-là s'écrirait plutôt « I saw her
  only on Tuesday ». L'exercice de production corrigera à tort.
- **Correction proposée** : ajouter `aussiEtranger: ["I saw her only on Tuesday."]` et reformuler la note.
- **Fait** : `aussiEtranger` et note ajoutés dans `grammaire-c1.ts` comme proposé.

### [MOYEN] ✅ « Coping mechanism » ≠ « mécanisme de défense »
- **Où** : `avance-c2.ts` — `en-c1-psychologie`
- **Texte** : « It's a coping mechanism. » → « C'est un mécanisme de défense. » (`aussi` : « C'est une stratégie d'adaptation. »)
- **Problème** : « mécanisme de défense » traduit *defence mechanism*, notion
  freudienne inconsciente ; *coping mechanism* est une stratégie consciente
  d'adaptation. La bonne traduction est reléguée dans `aussi`.
- **Correction proposée** : intervertir : `francais` « C'est une stratégie d'adaptation. », `aussi` [« C'est un mécanisme d'adaptation. »], note « Ne pas confondre avec *defence mechanism*, le mécanisme de défense inconscient. »
- **Fait** : carte d'`avance-c2.ts` réécrite comme proposé.

### [MOYEN] ✅ « Three staff » dans la série des indénombrables
- **Où** : `precision.ts` — `en-nombrable`, carte « There were three staff on duty. »
- **Problème** : la série enseigne qu'on encadre un indénombrable pour le
  compter (*a piece of advice*), puis donne « three staff » sans encadrement,
  et la note parle d'accord du verbe — sujet différent. La forme soignée est
  *three members of staff*.
- **Correction proposée** : `etranger` « There were three members of staff on duty. », note « Staff est collectif : on compte *members of staff*. Le verbe est au pluriel : the staff are. »
- **Fait** : carte de `precision.ts` réécrite comme proposé.

### [MOYEN] ✅ Deux séries sur le climat, et deux notes qui se contredisent
- **Où** : `vocabulaire-metiers.ts` — `en-voc-environnement` « L'environnement et le climat » (B2) ET `vocabulaire-societe.ts` — `en-voc-energie` « Énergie et climat » (C1)
- **Texte** : la première (carte « Fossil fuels still dominate the mix. ») : « **The energy mix, le bouquet énergétique.** » ; la seconde (carte « Renewables now supply a third of the mix. ») : « **The energy mix est passé tel quel en français.** »
- **Problème** : recouvrement large des deux séries (renewables, mix, émissions,
  compensation) et, sur ce point précis, deux notes contradictoires.
- **Correction proposée** : trancher (« bouquet énergétique » est le terme officiel français, « mix énergétique » l'usage courant) et retirer les cartes redondantes de la série C1.
- **Fait** : la carte B2 (`vocabulaire-metiers.ts`) disait déjà « bouquet énergétique » correctement. La carte C1 redondante (`vocabulaire-societe.ts`, « Renewables now supply a third of the mix. ») a été remplacée par une carte sur le curtailment (l'écrêtement de production), un point non couvert ailleurs.

### [MOYEN] ✅ Dictée B2 : « Nobody eventually agreed on the cause »
- **Où** : `dictees.ts` — dictée « Faux amis en contexte », B2, en-US
- **Texte** : « Nobody eventually agreed on the cause, but everyone accepted that something had to change. »
- **Problème** : la phrase est bancale en anglais. *Eventually* ne se place pas
  ainsi après un sujet négatif ; on écrirait « Nobody ever agreed on the
  cause » ou « In the end, nobody agreed on the cause ». Or c'est justement le
  faux ami que la dictée veut faire entendre : l'exemple porteur est le seul
  mal construit.
- **Correction proposée** : « In the end, nobody agreed on the cause, but everyone accepted that something had to change. »
- **Fait** : texte de la dictée (`dictees.ts`) corrigé comme proposé.

### [MOYEN] ✅ Traduction calquée : « The stars were out. » → « Les étoiles étaient sorties. »
- **Où** : `sensations.ts` — `en-voc-lumiere`
- **Texte** : `francais` « Les étoiles étaient sorties. » (`aussi` : « Le ciel était étoilé. »)
- **Problème** : « les étoiles étaient sorties » n'est pas du français : c'est
  le calque mot à mot de *be out*, que la note explique pourtant correctement
  (« Be out se dit des astres visibles »). Comme pour la carte *sweet tooth*,
  la bonne traduction est reléguée en `aussi` et c'est le calque qui sert de
  réponse attendue.
- **Correction proposée** : `francais` « Il y avait des étoiles. », `aussi` [« Le ciel était étoilé. »]
- **Fait** : carte de `sensations.ts` réécrite comme proposé.

### [MOYEN] ✅ Doublon : « fall silent » enseigné deux fois avec la même note
- **Où** : `sensations.ts` — `en-voc-sons`, carte « The crowd fell silent. » ET `avance-c2.ts` — `en-c2-litteraire`, carte « The room fell silent. »
- **Texte** : « Fall silent : le basculement, pas l'état. Be silent dirait l'état. » contre « Fall + adjectif marque le basculement : fall silent, fall ill, fall asleep. »
- **Problème** : même verbe, même collocation, même explication, deux séries.
- **Correction proposée** : garder la version C2 (plus générale, elle donne la famille *fall ill / fall asleep*) et remplacer la carte B2 par un autre bruit.
- **Fait** : carte B2 (`sensations.ts`) remplacée par « The plates clattered in the sink. » ; version C2 (`avance-c2.ts`) conservée telle quelle.

### [MOYEN] ✅ Doublon : « mutter » enseigné deux fois, note quasi identique
- **Où** : `sensations.ts` — `en-voc-sons`, carte « I could hear him muttering. » ET `idiomes-caractere.ts` — `en-verbes-parole`, carte « He muttered something under his breath. »
- **Texte** : « Mutter, parler bas et pour soi, souvent de mauvaise humeur. » contre « Mutter, parler bas et de mauvaise humeur. »
- **Correction proposée** : supprimer la carte de `en-voc-sons` — la série des verbes de parole est sa place naturelle — et la remplacer par un bruit non couvert (*clatter*, *squeak*, *rustle*).
- **Fait** : carte de `sensations.ts` remplacée par « Leaves rustled in the wind. » ; la carte de `idiomes-caractere.ts` (verbes de parole) est conservée.

### [MOYEN] ✅ La traduction annule la leçon : « Next thing I know, he's gone. »
- **Où** : `oral-interaction.ts` — `en-raconter`
- **Texte** : `francais` « Et là, sans que je comprenne, **il avait disparu**. » ; note « Next thing I know + présent : **le récit bascule au présent pour l'effet**. »
- **Problème** : la note enseigne le présent de narration, et la traduction
  française le remplace par un plus-que-parfait. En production, l'apprenant
  partant du français écrira *he had gone* — exactement ce que la carte veut
  éviter. Le `tip` de la série repose entièrement sur ce point.
- **Correction proposée** : `francais` « Et là, d'un coup, il n'est plus là. » (présent), `aussi` [« Et là, il avait disparu. »]
- **Fait** : carte d'`oral-interaction.ts` réécrite comme proposé.

### [MOYEN] ✅ Traduction déplacée : « Make sure you lock the door. » → « N'oublie pas de… »
- **Où** : `oral-interaction.ts` — `en-instructions`
- **Problème** : *make sure* n'est pas *don't forget*. En production, « N'oublie
  pas de fermer à clé » appelle *Don't forget to lock the door*, qui sera compté
  faux alors qu'il est la traduction exacte du français donné. La carte censée
  enseigner *make sure* n'a plus de français qui l'appelle.
- **Correction proposée** : `francais` « Assure-toi de bien fermer à clé. »
- **Fait** : carte d'`oral-interaction.ts` réécrite comme proposé (voir aussi le constat suivant sur « N'oublie pas de fermer à clé »).

### [MOYEN] ✅ Trois cartes différentes pour le même français « Bref »
- **Où** : `oral-interaction.ts` — `en-marqueurs-oral` (« Anyway, where were we? » → « Bref, où en étions-nous ? »), `en-raconter` (« To cut a long story short, we missed it. » → « Bref, on l'a raté. » et « Anyway, that's when it clicked. » → « Bref, c'est là que ça a fait tilt. »)
- **Problème** : trois anglais distincts (*anyway*, *to cut a long story short*)
  pour la même amorce française, sans `aussiEtranger`. L'exercice de production
  refusera des réponses justes.
- **Correction proposée** : différencier les français (« Enfin bref », « Pour faire court », « Toujours est-il que »), ou ajouter les `aussiEtranger` croisés.
- **Fait** : les trois français différenciés dans `oral-interaction.ts` (« Enfin bref », « Pour faire court », « Toujours est-il que »), comme première option proposée.

### [MOYEN] ✅ Deux marqueurs différents traduits pareil dans la même série
- **Où** : `oral-interaction.ts` — `en-marqueurs-oral`
- **Texte** : « Mind you, he did warn us. » → « **Cela dit**, il nous avait prévenus. » et, deux cartes plus loin, « Then again, she might be right. » → « **Ceci dit**, elle a peut-être raison. »
- **Problème** : « cela dit » et « ceci dit » sont la même locution (la seconde
  étant en outre la forme critiquée). Deux cartes voisines de la même série
  deviennent indiscernables en production. Et `avance-c2.ts` emploie déjà
  « Cela dit » pour *that said* (`en-c2-rhetorique`) : trois marqueurs anglais
  pour un seul français.
- **Correction proposée** : « Mind you » → « Remarque, il nous avait prévenus. » ; « Then again » → « D'un autre côté, elle a peut-être raison. » ; réserver « Cela dit » à *that said*.
- **Fait** : les deux cartes réécrites comme proposé dans `oral-interaction.ts`.

### [MOYEN] ✅ Doublon de note : « get over »
- **Où** : `phrasal-collocations.ts` — `en-phrasal-get` (« She never got over it. », note « Get over something, se remettre d'une épreuve ou d'une maladie. ») ET `oral-interaction.ts` — `en-raconter` (« I still can't get over it. », note « Get over something, s'en remettre. »)
- **Correction proposée** : garder les deux cartes si l'on veut (les emplois diffèrent : deuil contre étonnement) mais différencier les notes, la seconde portant sur l'emploi figuré de l'étonnement.
- **Fait** : les deux cartes gardées ; la note d'`oral-interaction.ts` réécrite pour porter explicitement sur l'étonnement qui persiste, distincte du deuil de `phrasal-collocations.ts`.

### [MOYEN] ✅ Doublon : « need + -ing » enseigné deux fois avec le même exemple
- **Où** : `vocabulaire-metiers.ts` — `en-voc-bricolage`, carte « It needs replacing, not repairing. » ET `vocabulaire-societe.ts` — `en-voc-architecture`, carte « The roof needs replacing. »
- **Texte** : « Need + -ing au sens passif : *it needs replacing* veut dire “il doit être remplacé”. » contre « Need + -ing équivaut à un passif : *the roof needs replacing*, il faut le remplacer. »
- **Problème** : même point de grammaire, même verbe d'exemple (*replacing*),
  note reformulée. `domaines-3.ts` (« The lawn needs mowing again. ») et
  `formation-mots.ts` (« The file needs renaming. ») ajoutent deux occurrences
  de plus de la même structure.
- **Correction proposée** : ne garder qu'un exemple avec *replace* ; les autres cartes peuvent conserver la structure mais leur note doit porter sur autre chose.
- **Fait** : gardé l'exemple `replace` de `vocabulaire-metiers.ts` comme référence ; note de `vocabulaire-societe.ts` réécrite (variante avec want) ; vérifié que les notes de `domaines-3.ts` (mow/mown) et `formation-mots.ts` (re- préfixe) portent déjà sur autre chose que la structure need + -ing — aucun changement nécessaire là.

### [MOYEN] ✅ Le tip promet un masculin qu'aucun exemple ne donne
- **Où** : `domaines-3.ts` — `en-voc-animaux`, `tip`
- **Texte** : « Beaucoup de noms d'animaux ont **un mâle, une femelle et un petit distincts** : horse, mare, foal ; sheep, ewe, lamb. Le mot générique n'est pas toujours le masculin. »
- **Problème** : *horse* et *sheep* sont les génériques, pas les mâles — le mâle
  est *stallion* et *ram*. Le tip annonce une série mâle/femelle/petit et livre
  une série générique/femelle/petit. Sa dernière phrase (« le mot générique
  n'est pas toujours le masculin ») laisse d'ailleurs croire qu'il l'est
  parfois, alors qu'aucun des deux exemples ne le montre.
- **Correction proposée** : « Beaucoup d'animaux ont un générique, un mâle, une femelle et un petit : horse / stallion / mare / foal ; sheep / ram / ewe / lamb. Le générique n'est pas le nom du mâle, contrairement au français. »
- **Fait** : tip de `domaines-3.ts` réécrit en reprenant la correction proposée.

### [MOYEN] ✅ Note incohérente avec sa propre carte : « le verbe see suffit, sans complément d'objet »
- **Où** : `domaines-3.ts` — `en-voc-sante-mentale`, carte « He's seeing a therapist. »
- **Texte** : « See a therapist, consulter. **Le verbe see suffit, sans complément d'objet.** »
- **Problème** : la phrase citée a précisément un complément d'objet
  (*a therapist*). La note dit le contraire de la carte qu'elle commente. Le
  point visé est sans doute que le français « consulter » se passe de
  complément — mais ce n'est pas ce qui est écrit.
- **Correction proposée** : « *See a therapist* : le verbe *see* suffit là où le français dirait “aller voir” ou “consulter”. »
- **Fait** : note de `domaines-3.ts` reformulée comme proposé.

### [MOYEN] ✅ Doublon : « coping », deux cartes, deux traductions inconciliables
- **Où** : `avance-c2.ts` — `en-c1-psychologie`, carte « It's a coping mechanism. » ET `domaines-3.ts` — `en-voc-sante-mentale`, carte « It's a common coping strategy. »
- **Texte** : notes « Coping mechanism appartient au vocabulaire clinique passé dans l'usage courant. » et « Coping strategy, du vocabulaire clinique passé dans l'usage. » — quasi identiques ; mais la première carte traduit par « mécanisme de défense » et la seconde par « stratégie d'adaptation ».
- **Problème** : la même notion reçoit deux traductions dont l'une est fausse
  (voir le constat sur *coping mechanism* plus haut), et les deux notes sont la
  même phrase.
- **Correction proposée** : aligner sur « stratégie d'adaptation », et ne garder qu'une des deux cartes.
- **Fait** : la carte d'`avance-c2.ts` traduit maintenant par « stratégie d'adaptation » (voir le constat sur *coping mechanism*) ; la carte de `domaines-3.ts` (« It's a common coping strategy. ») a été remplacée par une carte sur *self-care*, pour ne garder qu'une carte sur la même notion.

### [MOYEN] ✅ Erreur de typographie dans le cours qui enseigne la typographie
- **Où** : `cours-usage.ts` — `en-cours-ecrire`, cours §3 « La ponctuation, qui n'est pas la nôtre »
- **Texte** : « **Les millésimes** et les nombres emploient la virgule pour les milliers et le point pour les décimales : 1,500.75. »
- **Problème** : en anglais, précisément, les millésimes ne prennent pas de
  séparateur de milliers : on écrit *in 1500*, *the year 2000*, jamais
  « 1,500 » pour une année. La règle donnée est fausse pour la moitié de ce
  qu'elle énonce, et c'est la section même qui prétend corriger les réflexes
  français.
- **Correction proposée** : « Les nombres emploient la virgule pour les milliers et le point pour les décimales : 1,500.75 — l'inverse exact du français. Les années, elles, s'écrivent sans séparateur : *in 1500*, *by 2030*. »
- **Fait** : cours de `cours-usage.ts` réécrit en reprenant la correction proposée.

### [MOYEN] ✅ « Les guillemets sont doubles et droits »
- **Où** : `cours-usage.ts` — `en-cours-ecrire`, cours §3
- **Texte** : « Les guillemets sont doubles et **droits** : "like this", pas « comme ceci ». »
- **Problème** : le guillemet droit (") est un artefact de machine à écrire ;
  l'anglais soigné emploie les guillemets courbes “ ”, et l'usage britannique
  préfère souvent les simples ‘ ’. Enseigner « droits » comme la norme est
  inexact, dans un cours qui reproche par ailleurs au francophone sa
  ponctuation.
- **Correction proposée** : « Les guillemets anglais sont courbes et doubles : “like this”. L'usage britannique emploie souvent les simples : ‘like this’. Jamais les chevrons français. »
- **Fait** : cours de `cours-usage.ts` réécrit en reprenant la correction proposée.

### [MOYEN] ✅ Deux notes opposées sur « please find attached »
- **Où** : `grammaire-c1.ts` — `en-c2-registre`, carte « Please find the report attached. » ET `cours-usage.ts` — `en-cours-ecrire`, carte « The report is attached. »
- **Texte** : « **Formule figée du courriel professionnel.** Here's the report est plus naturel entre collègues. » — contre « Plus court que « please find attached », et **parfaitement courant**. »
- **Problème** : les deux notes ne se contredisent pas franchement, mais la
  première présente *please find attached* comme la formule attendue et la
  seconde comme celle qu'on remplace. Aucune ne renvoie à l'autre.
- **Correction proposée** : aligner : « *Please find attached* reste la formule figée des courriers formels ; *the report is attached* et *here's the report* sont les formes courantes du courriel de travail. »
- **Fait** : les deux notes (`grammaire-c1.ts` et `cours-usage.ts`) alignées sur la formulation proposée.

### [MOYEN] ✅ La règle des inséparables est illustrée par un contre-exemple
- **Où** : `cours-usage.ts` — `en-cours-phrasal`, cours §2 « Séparables ou non »
- **Texte** : « D'autres sont inséparables, **en général ceux à deux particules** : look after the children, jamais “look the children after”. »
- **Problème** : *look after* n'a qu'une particule. L'exemple censé démontrer
  la règle des verbes à deux particules n'en a pas deux. (Les vrais exemples
  seraient *get away with*, *put up with*, *look forward to* — que le module
  emploie ailleurs.)
- **Correction proposée** : « D'autres sont inséparables : *look after the children*, jamais “look the children after”. C'est systématiquement le cas de ceux à deux particules : *put up with*, *get away with*, *look forward to*. »
- **Fait** : cours de `cours-usage.ts` réécrit en reprenant la correction proposée.

### [MOYEN] ✅ Doublon : « look into / investigate »
- **Où** : `vocabulaire-c1.ts` — `en-c1-registre`, carte « Could you look into this for me? » (note « Look into à l'oral, investigate à l'écrit formel. ») ET `cours-usage.ts` — `en-cours-phrasal`, carte « I'll look into it tomorrow. » (note « Look into, examiner. Équivalent formel : investigate. »)
- **Correction proposée** : différencier — l'une sur la construction, l'autre sur le registre — ou supprimer l'une des deux.
- **Fait** : différenciées comme proposé — `vocabulaire-c1.ts` garde le registre (oral/écrit formel), la note de `cours-usage.ts` porte maintenant sur la construction (verbe prépositionnel inséparable).

### [MOYEN] ✅ Deux anglais différents pour « N'oublie pas de fermer à clé »
- **Où** : `cours-tournures.ts` — `en-remember-doing`, carte « Remember to lock the door. » → « N'oublie pas de fermer la porte à clé. » ET `oral-interaction.ts` — `en-instructions`, carte « Make sure you lock the door. » → « N'oublie pas de fermer à clé. »
- **Problème** : le même français, à un mot près, appelle deux anglais
  différents dans deux séries, sans `aussiEtranger`. L'apprenant sera corrigé à
  tort dans l'une ou l'autre. (Et le vrai *Don't forget to lock the door*, qui
  est la traduction littérale des deux français, n'est accepté nulle part.)
- **Correction proposée** : `en-remember-doing` garde « N'oublie pas de fermer la porte à clé. » ; `en-instructions` prend « Assure-toi de bien fermer à clé. » (voir le constat précédent sur *make sure*).
- **Fait** : appliqué tel quel — `cours-tournures.ts` inchangé, `oral-interaction.ts` corrigé.

### [MOYEN] ✅ La traduction efface la distinction que la carte enseigne
- **Où** : `cours-tournures.ts` — `en-remember-doing`, carte « Try turning it off and on again. » → « **Essaie de** l'éteindre puis de le rallumer. »
- **Problème** : en français, « essaie de + infinitif » rend *try to*, pas
  *try + -ing*. La carte suivante (« I tried to open the window. » → « J'ai
  tenté d'ouvrir la fenêtre. ») emploie un autre verbe français, mais la
  distinction reste invisible. `formation-mots.ts` résout le problème
  autrement (« pour voir » / « sans y parvenir »), ce qui crée une troisième
  divergence entre les deux séries jumelles.
- **Correction proposée** : « Essaie donc de l'éteindre puis de le rallumer, pour voir. » ou, mieux, « Tu n'as qu'à l'éteindre et le rallumer. »
- **Fait** : carte de `cours-tournures.ts` réécrite avec la seconde option, plus nette.

### [MOYEN] ✅ Le cours des clivées dit « jamais » d'une phrase que son propre visuel donne comme correcte
- **Où** : `grammaire-c1.ts` — `en-cours-cleft`, cours §2 et son visuel « La négation change de place »
- **Texte** : le texte écrit « la négation se place sur be et non sur le verbe principal : It wasn't John who broke it, **jamais “It was John who didn't break it”**, qui dit tout autre chose. » ; le visuel, juste en dessous, donne « It was John who didn't break it. » comme la traduction correcte de « C'est Jean qui ne l'a pas cassé. »
- **Problème** : le mot « jamais » est faux et se contredit dans la même
  section. La phrase n'est pas interdite, elle dit autre chose — ce que la fin
  de la phrase reconnaît d'ailleurs.
- **Correction proposée** : « la négation se place sur be : *It wasn't John who broke it*. Mettre la négation sur le verbe de la relative — *It was John who didn't break it* — est correct mais dit tout autre chose : c'est lui, et lui seul, qui ne l'a pas cassé. »
- **Fait** : cours de `grammaire-c1.ts` réécrit en reprenant la correction proposée.

### [MOYEN] ✅ Doublon : « rule out », deux cartes, la même note
- **Où** : `avance-c2.ts` — `en-c2-scientifique`, carte « We cannot rule out a confounding factor. » ET `phrasal-collocations.ts` — `en-phrasal-ecrit`, carte « We cannot rule out an error. »
- **Texte** : « **Rule out, écarter une hypothèse.** A confounding factor brouille la relation observée. » — contre « **Rule out, écarter une hypothèse.** Le contraire, rule in, ne se dit pratiquement pas. »
- **Problème** : même début de phrase anglaise (*We cannot rule out…*), même
  traduction française (« Nous ne pouvons exclure… »), même première phrase de
  note.
- **Correction proposée** : garder la carte C2 et remplacer celle de `en-phrasal-ecrit` par un autre verbe à particule de l'écrit savant (*single out*, *bring about*, *stem from*).
- **Fait** : carte de `phrasal-collocations.ts` remplacée par « The delay stems from a supplier issue. » (stem from). Carte C2 d'`avance-c2.ts` inchangée.

### [MOYEN] ✅ Non-réversible : « travaux » appelle deux anglais concurrents
- **Où** : `vocabulaire-c1.ts` — `en-c1-academique`, carte « Further research is needed here. » → « Des travaux supplémentaires sont nécessaires ici. » ET `avance-c2.ts` — `en-c2-scientifique`, carte « Further work is needed to confirm this. » → « D'autres travaux sont nécessaires pour le confirmer. »
- **Problème** : le même mot français « travaux » sert de départ à *research*
  dans une série et à *work* dans une autre, sans `aussiEtranger`. Les deux
  sont indénombrables, les deux sont corrects, et l'apprenant se fera corriger
  une fois sur deux.
- **Correction proposée** : ajouter `aussiEtranger: ["Further work is needed here."]` et `aussiEtranger: ["Further research is needed to confirm this."]`.
- **Fait** : les deux `aussiEtranger` ajoutés, dans `vocabulaire-c1.ts` et `avance-c2.ts` respectivement.

### [MOYEN] ✅ Non-réversible : « Tu n'avais pas besoin de te déranger »
- **Où** : `precision.ts` — `en-c2-modal`, carte « You needn't have bothered. »
- **Texte** : note « Needn't have : la chose a été faite pour rien. **Didn't need to dirait qu'elle ne l'a pas été.** »
- **Problème** : le français donné (« Tu n'avais pas besoin de te déranger »)
  est exactement celui qui rend *you didn't need to bother* — c'est-à-dire la
  forme que la note oppose à celle qu'on veut faire produire. La carte
  enseigne une distinction que sa propre traduction efface.
- **Correction proposée** : `francais` « Tu t'es dérangé pour rien. », note « Needn't have : la chose a bien été faite, et pour rien. *Didn't need to* laisse ouvert qu'elle n'ait pas été faite du tout. »
- **Fait** : carte de `precision.ts` réécrite comme proposé.

### [MOYEN] ✅ Une note de remplissage employée huit fois, et qui se dément elle-même
- **Où** : huit cartes du périmètre
- **Texte** : « L'une des rares images identiques dans les deux langues. » (`idiomes-caractere.ts`, *give a hand* et *black sheep*), « L'image est identique dans les deux langues, ce qui est rare. » (*tighten one's belt*), « L'image est identique dans les deux langues. » (`oral-interaction.ts`, *on the tip of my tongue*), « L'image est identique en français. » (`idiomes-caractere.ts`, *fall flat*), « L'une des rares images que le français partage mot pour mot. » (`vocabulaire-c1.ts`, *the ball is in your court*), « Le français et l'anglais emploient ici la même image. » (`phrasal-collocations.ts`, *give a hand*), « L'expression est identique. » (*cost a fortune*)
- **Problème** : la même remarque, sans contenu, tient lieu de note à huit
  cartes ; et trois d'entre elles qualifient le cas de « rare » alors que le
  module en aligne huit. Une note doit apprendre quelque chose de plus que la
  traduction (consigne §5).
- **Correction proposée** : n'en garder qu'une, dans le cours des idiotismes, sous forme de liste (« les rares images partagées : donner un coup de main, le mouton noir, se serrer la ceinture, sur le bout de la langue, la balle dans ton camp, tomber à plat ») et donner aux cartes une note qui enseigne autre chose.
- **Fait** : la liste consolidée ajoutée au cours de `vocabulaire-c1.ts` (`en-c1-idiomes`), avec la précision reportée sur *raining cats and dogs* (voir MINEUR correspondant). Les huit notes individuelles réécrites pour enseigner autre chose : `idiomes-caractere.ts` (*give a hand*, *black sheep*, *tighten one's belt*, *cost a fortune*, *fall flat*), `oral-interaction.ts` (*on the tip of my tongue*), `vocabulaire-c1.ts` (*the ball is in your court*) ; la carte `phrasal-collocations.ts` (*give a hand*) a été remplacée (voir le constat suivant, doublon avec `idiomes-caractere.ts`).

### [MOYEN] ✅ Doublon de carte : « give a hand »
- **Où** : `idiomes-caractere.ts` — `en-idiomes-corps`, carte « I'll give you a hand. » → « Je vais te donner un coup de main. » ET `phrasal-collocations.ts` — `en-collocations-verbes`, carte « She gave me a hand. » → « Elle m'a donné un coup de main. »
- **Problème** : même expression, même traduction, notes interchangeables.
- **Correction proposée** : supprimer l'une des deux.
- **Fait** : carte de `phrasal-collocations.ts` remplacée par « I'll give the gym a miss today. » (give something a miss) ; la carte d'`idiomes-caractere.ts` est conservée.

### MINEUR

### [MINEUR] ✅ Dictées : l'alternance d'accents annoncée est rompue
- **Où** : `dictees.ts`, en-tête et dictées 3 et 4
- **Texte** : « L'accent alterne d'une dictée à l'autre, britannique puis américain. »
- **Problème** : l'ordre réel est GB, US, GB, **GB**, US, GB, US, GB, US, GB.
- **Correction proposée** : passer la dictée 4 (« Last weekend we went to the coast ») en `en-US`, ou retirer la promesse d'alternance stricte du commentaire.
- **Fait** : la première option casse en fait l'alternance ailleurs (dictées 4 et 5 deviendraient toutes deux `en-US`, un nouveau doublon) — le bloc 4-10 alterne déjà correctement en interne, seul le raccord 3-4 déroge. Choisi la seconde option, plus sûre : le commentaire d'en-tête ne promet plus une alternance stricte.

### [MINEUR] ✅ Dictées : un tiret cadratin dicté
- **Où** : `dictees.ts` — dernière dictée (B2, « Réflexion »)
- **Texte** : « The pauses are still there — you simply stop noticing them »
- **Problème** : en dictée, une ponctuation qui ne s'entend pas est un piège
  gratuit : l'apprenant écrira une virgule ou un point.
- **Correction proposée** : remplacer par un point-virgule audible à la pause, ou couper en deux phrases.
- **Fait** : coupé en deux phrases (un point), la seconde option — plus univoque qu'un point-virgule, tout aussi silencieux à l'oral.

### [MINEUR] ✅ Anglais laissé dans un texte français : « ou simply »
- **Où** : `vocabulaire-idees.ts` — `en-voc-argent`, cours §3 (« £3.50 se dit three pounds fifty, ou **simply** three fifty ») ET `en-voc-numerique`, cours §1 (« on dit digital technology ou **simply** digital transformation »)
- **Correction proposée** : « ou simplement ».
- **Fait** : les deux occurrences corrigées dans `vocabulaire-idees.ts` (la première en « ou plus simplement »).

### [MINEUR] ✅ Phrase française cassée : « ne pas contresens »
- **Où** : `vocabulaire-metiers.ts` — `en-c1-droit`, cours §3, première ligne
- **Texte** : « Trois habitudes suffisent à **ne pas contresens** un contrat anglais. »
- **Correction proposée** : « Trois habitudes suffisent à ne pas faire de contresens sur un contrat anglais. »
- **Fait** : corrigé dans `vocabulaire-metiers.ts` comme proposé.

### [MINEUR] ✅ Franglais dans un visuel : « On book an appointment », « Il prescribes du traitement »
- **Où** : `vocabulaire-idees.ts` — `en-voc-medecine`, visuel « Du symptôme à l'ordonnance »
- **Texte** : « On book an appointment with the GP. » ; « Il prescribes du traitement : tablets, a course of antibiotics. »
- **Problème** : deux phrases ni françaises ni anglaises, dans le visuel qui
  sert de fil conducteur au parcours de soins.
- **Correction proposée** : « On prend rendez-vous : *book an appointment with the GP*. » et « Le médecin prescrit : *tablets, a course of antibiotics*. »
- **Fait** : visuel de `vocabulaire-idees.ts` réécrit comme proposé.

### [MINEUR] ✅ Note à demi anglaise : « Source as a verb »
- **Où** : `vocabulaire-societe.ts` — `en-voc-industrie`, carte « We source locally where possible. »
- **Correction proposée** : « *Source* comme verbe : s'approvisionner. »
- **Fait** : note corrigée dans `vocabulaire-societe.ts` comme proposé.

### [MINEUR] ✅ La faute imprimée avant d'être corrigée
- **Où** : `vocabulaire-metiers.ts` — `en-voc-bricolage`, cours §2, dernière ligne
- **Texte** : « a plumber, **a electrician** — attention, an electrician —, a carpenter… »
- **Problème** : la forme fautive est écrite en premier, dans une liste qu'on
  lit en diagonale.
- **Correction proposée** : « a plumber, **an** electrician — attention à l'article devant la voyelle —, a carpenter… »
- **Fait** : corrigé dans `vocabulaire-metiers.ts` comme proposé.

### [MINEUR] ✅ « Privauté n'existe pas »
- **Où** : `vocabulaire-idees.ts` — `en-voc-numerique`, cours §3
- **Texte** : « Privacy est la vie privée — le faux ami “privauté” n'existe pas. »
- **Problème** : « privauté(s) » existe en français (familiarité déplacée).
  L'intention était sans doute « ne traduit pas privacy ».
- **Correction proposée** : « Privacy est la vie privée — jamais “privauté”, qui en français désigne une familiarité déplacée. »
- **Fait** : corrigé dans `vocabulaire-idees.ts` comme proposé.

### [MINEUR] ✅ « Les lettres dans l'autre ordre »
- **Où** : `vocabulaire-idees.ts` — `en-voc-numerique`, cours §3
- **Texte** : « GDPR l'équivalent anglais du RGPD, avec les lettres dans l'autre ordre. »
- **Problème** : GDPR n'est pas RGPD à l'envers (ce serait DPGR). Ce sont les
  mêmes initiales, dans l'ordre de leur langue.
- **Correction proposée** : « GDPR — *General Data Protection Regulation* — est le RGPD : mêmes initiales, dans l'ordre de chaque langue. »
- **Fait** : corrigé dans `vocabulaire-idees.ts` comme proposé.

### [MINEUR] ✅ Un jeu de mots involontaire : « quarante livres en livres »
- **Où** : `vocabulaire-idees.ts` — `en-voc-argent`, carte « I spent forty pounds on books. »
- **Texte** : `francais` « J'ai dépensé quarante livres en livres. »
- **Correction proposée** : « J'ai dépensé quarante livres sterling en bouquins. » ou changer le complément anglais (*on records*).
- **Fait** : traduction changée pour la première option.

### [MINEUR] ✅ Le cours cite « not only… but also », la carte l'abandonne
- **Où** : `grammaire-c1.ts` — `en-cours-inversion` : cours §2 « Les corrélatifs : … not only… but also. **Ces structures sont figées.** » ; carte « Not only did he lie, he also stole. »
- **Correction proposée** : `etranger` « Not only did he lie, but he also stole. »
- **Fait** : carte corrigée dans `grammaire-c1.ts` comme proposé.

### [MINEUR] ✅ Un visuel dont le titre décrit autre chose
- **Où** : `grammaire-c1.ts` — `en-cours-narratif`, comparaison intitulée « **Deux histoires, une virgule d'écart** »
- **Problème** : les deux phrases comparées (*When I arrived, she left.* / *When I arrived, she had left.*) diffèrent par l'auxiliaire *had*, pas par une virgule.
- **Correction proposée** : « Deux histoires, un auxiliaire d'écart ».
- **Fait** : titre corrigé dans `grammaire-c1.ts` comme proposé.

### [MINEUR] ✅ Prénom francisé dans une série, pas dans l'autre carte voisine
- **Où** : `grammaire-c1.ts` — `en-cours-cleft` (« It was John who broke it. » → « C'est **Jean** qui l'a cassé. ») contre `en-cours-inversion` (« Only **Mary** knew the answer. » → « Seule **Mary** connaissait la réponse. »)
- **Correction proposée** : garder les prénoms anglais partout.
- **Fait** : « Jean » remplacé par « John » partout dans `grammaire-c1.ts` (carte, visuel et prose du cours).

### [MINEUR] ✅ « Mend s'emploie surtout pour le tissu »
- **Où** : `vocabulaire-metiers.ts` — `en-voc-bricolage`, cours §2
- **Problème** : *mend a fence*, *mend a road*, *mend one's ways* sont courants.
- **Correction proposée** : « *mend* est britannique et un peu vieilli, mais s'emploie pour tout ce qu'on répare. »
- **Fait** : cours de `vocabulaire-metiers.ts` corrigé comme proposé.

### [MINEUR] ✅ « Complete recovery se dit aussi, total jamais »
- **Où** : `phrasal-collocations.ts` — `en-collocations-adjectifs`
- **Problème** : *total recovery* s'emploie, plus rarement. « Jamais » est trop fort.
- **Correction proposée** : « *full recovery* est la collocation attendue ; *complete* passe, *total* se remarque. »
- **Fait** : note corrigée dans `phrasal-collocations.ts` comme proposé.

### [MINEUR] ✅ « An archive / archives » : distinction contestable
- **Où** : `vocabulaire-societe.ts` — `en-voc-histoire`, carte « The archive was destroyed in the fire. »
- **Texte** : « An archive au singulier désigne le fonds entier. Archives au pluriel dit l'institution. »
- **Problème** : l'usage courant fait plutôt l'inverse ou ne distingue pas.
- **Correction proposée** : « *An archive* est un fonds ; *the archives* désigne aussi bien le fonds que le lieu qui le conserve. »
- **Fait** : note corrigée dans `vocabulaire-societe.ts` comme proposé.

### [MINEUR] ✅ Français maladroit dans quelques traductions
- **Où** : plusieurs
  - `grammaire-c1.ts`, `en-c1-diplomatie` : « The vote passed with three abstentions. » → « **Le vote a été adopté** avec trois abstentions. » — on adopte un texte, pas un vote. Proposer « La motion a été adoptée avec trois abstentions. »
  - `idiomes-caractere.ts`, `en-noms-abstraits-2` : « It's a matter of emphasis. » → « C'est une question **d'accent mis sur les choses**. » — proposer « C'est une question d'accent. »
  - `formation-mots.ts`, `en-suffixes-noms` : « Her performance was flawless. » → « Sa prestation était **sans faute**. » — proposer « … était irréprochable. »
  - `formation-mots.ts`, `en-conditionnels-avances` : « Should you need help, call me. » → « **Si vous aviez besoin** d'aide, appelez-moi. » — l'imparfait suivi d'un impératif ne va pas ; proposer « Si vous avez besoin d'aide, appelez-moi. »
  - `formation-mots.ts`, `en-conditionnels-avances` : « Provided that you agree, we'll start. » → « … nous **commençons** » ; le futur anglais appelle « nous commencerons ».
  - `vocabulaire-c1.ts`, `en-c1-presse` : « The minister vowed to resign. » → « Le ministre **a juré** de démissionner. » — proposer « s'est engagé à démissionner ».
- **Fait** : les six traductions corrigées comme proposé, chacune dans son fichier.

### [MINEUR] ✅ Une carte sur un suffixe dans la série des préfixes
- **Où** : `formation-mots.ts` — `en-prefixes`, dernière carte « The building is fireproof. » (note : « **-proof en suffixe** dit la résistance »)
- **Correction proposée** : déplacer vers `en-suffixes-verbes`.
- **Fait** : carte déplacée vers `en-suffixes-verbes` dans `formation-mots.ts` ; remplacée dans `en-prefixes` par une carte sur le préfixe co- (« They co-authored the report. »).

### [MINEUR] ✅ Deux cartes illustrant strictement le même point
- **Où** : `grammaire-c1.ts` — `en-c2-ambiguite` : « Flying planes can be dangerous. » et « Visiting relatives can be tiring. » (note : « **Même structure** que flying planes, et **même double lecture**. »)
- **Correction proposée** : n'en garder qu'une, et employer la place libérée pour une ambiguïté d'un autre type.
- **Fait** : la carte « Visiting relatives » remplacée dans `grammaire-c1.ts` par « I saw her duck. » (ambiguïté lexicale verbe/nom, d'un type différent).

### [MINEUR] ✅ Niveaux incohérents entre deux séries sur le même idiome
- **Où** : `vocabulaire-c1.ts` — `en-c1-idiomes` (C1, « Nobody mentioned the elephant in the room. », note « L'expression est fixe : ni “in the office” ni “in the meeting” ») ET `idiomes-caractere.ts` — `en-idiomes-animaux` (B2, « There's an elephant in the room. »)
- **Correction proposée** : garder l'idiome dans une seule série.
- **Fait** : gardé dans `vocabulaire-c1.ts` (C1, note plus riche) ; la carte de `idiomes-caractere.ts` remplacée par « I smell a rat. » (autre idiome animalier, non couvert ailleurs).

### [MINEUR] ✅ Deux notes divergentes sur « raining cats and dogs »
- **Où** : `vocabulaire-c1.ts` — `en-c1-idiomes`, visuel « La même idée, deux images » (l'expression y est donnée sans réserve) ET `idiomes-caractere.ts` — `en-idiomes-animaux` (« L'expression est un peu vieillie en anglais. Pouring down est plus courant. »)
- **Correction proposée** : reporter la réserve dans le visuel du cours C1.
- **Fait** : le visuel `comparaison` de ce module n'accepte pas de champ `note` (type `LessonDocument`) ; la réserve a donc été ajoutée dans la prose du cours C1 juste après le visuel, plutôt que dans la structure du visuel elle-même. La note de `idiomes-caractere.ts` reste inchangée (c'est elle qui porte la réserve exacte).

### [MINEUR] ✅ Commentaire de fichier inexact
- **Où** : `grammaire-c1.ts`, en-tête
- **Texte** : « ces trois procédés, l'inversion, la phrase clivée et **la gestion des temps du récit**, ne s'enseignent nulle part dans les manuels courants parce qu'ils ne sont jamais obligatoires. »
- **Problème** : les temps du récit sont enseignés dans tous les manuels, et la
  série correspondante est d'ailleurs déclarée `niveau: "B2"`. (Non visible par
  l'apprenant, mais il oriente les contributeurs.)
- **Fait** : commentaire d'en-tête réécrit pour dissocier inversion/clivée (peu enseignées) des temps du récit (un classique B2).

### [MINEUR] ✅ Note pédagogiquement obscure : « Le pluriel est diagnoses »
- **Où** : `vocabulaire-idees.ts` — `en-voc-medecine`, visuel « Du symptôme à l'ordonnance »
- **Texte** : « Le médecin diagnoses a condition. Le pluriel est diagnoses. »
- **Problème** : le même mot sert de verbe et de pluriel dans la même ligne,
  sans signaler qu'ils ne se prononcent pas pareil.
- **Correction proposée** : « *to diagnose* (verbe) et *diagnoses* (pluriel de *diagnosis*) s'écrivent pareil mais ne se prononcent pas pareil. »
- **Fait** : la correction proposée comparait *to diagnose* (infinitif) et *diagnoses* (pluriel) comme « s'écrivant pareil », ce qui est faux — ce sont deux graphies différentes. Le vrai homographe est la 3e personne du verbe, *he diagnoses*, qui s'écrit comme le pluriel de *diagnosis*. Note réécrite en conséquence dans `vocabulaire-idees.ts`.

### [MINEUR] ✅ Conversion d'unités silencieuse
- **Où** : `sensations.ts` — `en-voc-formes-mesures`, carte « The gap is a couple of inches. »
- **Texte** : `francais` « L'écart fait quelques centimètres. » ; note « L'anglais britannique mesure encore en pouces. »
- **Problème** : deux pouces font cinq centimètres. La traduction convertit sans
  le dire, dans la carte même dont la note attire l'attention sur l'unité — et
  en production, « quelques centimètres » donnera *a few centimetres*.
- **Correction proposée** : `francais` « L'écart fait deux ou trois pouces. », `aussi` [« L'écart fait cinq centimètres environ. »]
- **Fait** : carte corrigée dans `sensations.ts` comme proposé.

### [MINEUR] ✅ « Navy blue est redondant » : trop tranché
- **Où** : `sensations.ts` — `en-voc-couleurs-matieres`, carte « She wore a navy coat. »
- **Texte** : « Navy seul suffit : navy blue est possible mais redondant. »
- **Problème** : *navy blue* est la forme pleine et parfaitement courante, pas
  un pléonasme.
- **Correction proposée** : « *Navy* seul suffit comme adjectif ; *navy blue* est la forme pleine, tout aussi correcte. »
- **Fait** : note corrigée dans `sensations.ts` comme proposé.

### [MINEUR] ✅ Un pronom apparu dans la traduction
- **Où** : `sensations.ts` — `en-voc-formes-mesures`, carte « It's about waist-high. » → « Ça **m'**arrive à peu près à la taille. »
- **Problème** : l'anglais n'a pas de possesseur ; en production, l'apprenant
  cherchera un *my*.
- **Correction proposée** : « Ça arrive à peu près à hauteur de taille. »
- **Fait** : traduction corrigée dans `sensations.ts` comme proposé.

### [MINEUR] ✅ « Taste of burning »
- **Où** : `sensations.ts` — `en-voc-odeurs-gouts`, carte « It tastes slightly burnt. »
- **Texte** : « Taste + adjectif, sans of. Avec of, il faudrait un nom : taste of burning. »
- **Problème** : *it tastes of burning* ne se dit guère ; l'anglais dit *it
  tastes burnt* ou *there's a burnt taste*. L'exemple censé éclairer la règle
  n'est pas de l'anglais courant.
- **Correction proposée** : « Taste + adjectif : *it tastes burnt*. Avec *of*, il faut un nom de produit : *it tastes of smoke*. »
- **Fait** : note corrigée dans `sensations.ts` comme proposé.

### [MINEUR] ✅ « La peinture est encore poisseuse »
- **Où** : `sensations.ts` — `en-voc-textures`, carte « The paint is still tacky. »
- **Problème** : *tacky* décrit une peinture pas encore sèche ; « poisseuse »
  évoque en français une saleté collante.
- **Correction proposée** : « La peinture n'est pas encore sèche. » ou « La peinture colle encore. »
- **Fait** : traduction changée pour la première option, dans `sensations.ts`.

### [MINEUR] ✅ Cartes dont l'énoncé se termine sur « but »
- **Où** : `oral-interaction.ts` — `en-desaccord-poli`, carte « That may be so, but. » → « C'est possible, mais. »
- **Problème** : la série est marquée `oral: true, parle: true` : la carte sera
  dictée et devra être répétée. Une phrase tronquée sur *but* se prononce mal
  et s'écrit mal sous dictée.
- **Correction proposée** : « That may be so, but it doesn't change the deadline. » → « C'est possible, mais cela ne change pas l'échéance. »
- **Fait** : carte complétée dans `oral-interaction.ts` comme proposé.

### [MINEUR] ✅ « Volontairement agrammaticale »
- **Où** : `oral-interaction.ts` — `en-small-talk`, carte « Long time no see. »
- **Texte** : « Formule figée et volontairement agrammaticale. »
- **Problème** : la formule n'est pas une agrammaticalité choisie pour l'effet ;
  elle vient d'un anglais de contact (pidgin) et s'est figée.
- **Correction proposée** : « Formule figée, héritée d'un anglais de contact — d'où sa syntaxe hors normes. »
- **Fait** : note corrigée dans `oral-interaction.ts` comme proposé.

### [MINEUR] ✅ « Charity » ≠ « association reconnue d'utilité publique »
- **Où** : `domaines-3.ts` — `en-voc-social`, carte « She works for a local charity. »
- **Texte** : note « A charity, une association **reconnue d'utilité publique**. »
- **Problème** : la RUP est en France un statut rare accordé par décret ; une
  *registered charity* britannique correspond à une association ordinaire
  enregistrée. Le `tip` de la série est d'ailleurs juste (« une organisation à
  but non lucratif ») : c'est la note qui dérape.
- **Correction proposée** : « A charity, une association à but non lucratif enregistrée comme telle. Le mot n'a rien de la connotation de “charité”. »
- **Fait** : note corrigée dans `domaines-3.ts` comme proposé.

### [MINEUR] ✅ « La falaise s'effrite dans la mer »
- **Où** : `domaines-3.ts` — `en-voc-geologie`, carte « The cliff is crumbling into the sea. »
- **Problème** : en français, une falaise s'éboule ou s'effondre dans la mer ;
  « s'effrite dans la mer » ne se dit pas.
- **Correction proposée** : « La falaise s'éboule dans la mer. »
- **Fait** : traduction corrigée dans `domaines-3.ts` comme proposé ; la note (« Crumble, s'effriter ») ajustée en conséquence.

### [MINEUR] ✅ Une carte réduite à un fragment de phrase
- **Où** : `cours-usage.ts` — `en-cours-ecrire`, carte « Because the deadline moved, » → « En raison du report de l'échéance, »
- **Problème** : les deux faces s'arrêtent sur une virgule. L'exercice de
  reconnaissance affiche une proposition sans principale, et l'exercice de
  production demande de produire une phrase inachevée.
- **Correction proposée** : « Because the deadline moved, we had to reschedule. » → « Comme l'échéance a été repoussée, nous avons dû tout replanifier. »
- **Fait** : carte complétée dans `cours-usage.ts` comme proposé.

### [MINEUR] ✅ « Je reviens vers vous » : calque
- **Où** : `cours-usage.ts` — `en-cours-ecrire`, carte « I'll get back to you by Thursday. »
- **Problème** : « revenir vers quelqu'un » est précisément un calque de *get
  back to someone* — dans une série dont tout le propos est de dénoncer les
  calques. La carte n'a d'ailleurs pas de note.
- **Correction proposée** : « Je vous réponds d'ici jeudi. », note « Get back to someone, recontacter. Le calque “revenir vers vous” s'est répandu en français d'entreprise, mais ce n'en est pas la traduction. »
- **Fait** : carte et note ajoutées dans `cours-usage.ts` comme proposé.

### [MINEUR] ✅ « I'm hangry » comme exemple de h parasite
- **Où** : `cours-usage.ts` — `en-cours-prononciation`, cours §2
- **Texte** : « “I'm 'appy” et “I'm hangry” sont deux erreurs miroir. »
- **Problème** : *hangry* est un mot anglais attesté (*hungry* + *angry*).
  L'exemple choisi pour illustrer un h ajouté par erreur est une forme qui
  existe et signifie autre chose.
- **Correction proposée** : remplacer par « I'm 'ungry » / « I'm harm » (pour *arm*), ou par la paire *eat / heat*.
- **Fait** : remplacé par la paire *eat / heat* dans `cours-usage.ts`.

### [MINEUR] ✅ « Règle absolue : pas de will, pas de would après if »
- **Où** : `cours-avance.ts` — `en-cours-conditionnels`, cours §1
- **Problème** : la règle est bonne au niveau B1, mais le mot « absolue » est
  démenti par le module lui-même : `formation-mots.ts` enseigne
  « **Should** you need help, call me » et « **Were** it not for you… », c'est-à-dire
  des modaux et des auxiliaires dans la protase. Il existe aussi *if you will
  just wait a moment* (formule de politesse).
- **Correction proposée** : « Règle de base, valable pour les quatre : pas de will ni de would dans la proposition en *if*. (Les exceptions — *if you will just wait*, l'inversion *should you need* — se voient plus tard.) »
- **Fait** : cours de `cours-avance.ts` réécrit en reprenant la correction proposée.

### [MINEUR] ✅ Une carte sans note et à traduction non réversible
- **Où** : `cours-avance.ts` — `en-cours-relatives`, carte « She's the one I trust. » → « C'est elle en qui j'ai confiance. »
- **Problème** : le français « en qui j'ai confiance » appelle *in whom I have
  confidence* ; la carte illustre pourtant l'omission du relatif, qui ne se
  voit plus dans la traduction. Aucune note ne le rattrape.
- **Correction proposée** : « C'est elle que je crois sur parole. » ou garder le français et ajouter la note « Le relatif complément s'omet : *the one (that) I trust*. »
- **Fait** : première option retenue (traduction changée), avec en plus la note proposée pour la seconde option — les deux réunies dans `cours-avance.ts`.

### [MINEUR] ✅ « Je n'oublierai jamais d'avoir vécu là-bas »
- **Où** : `cours-tournures.ts` — `en-remember-doing`, carte « I'll never forget living there. »
- **Problème** : la tournure ne se dit pas en français ; « oublier de + infinitif
  passé » n'est pas idiomatique.
- **Correction proposée** : « Je n'oublierai jamais ces années là-bas. » ou « Je n'oublierai jamais d'y avoir vécu. »
- **Fait** : première option retenue dans `cours-tournures.ts`.

### [MINEUR] ✅ Une « faute fréquente » qui n'en est pas une
- **Où** : `cours-tournures.ts` — `en-collocations`, tableau, ligne « prendre son temps | take your time | take | **have your time** »
- **Problème** : aucun francophone ne produit « have your time » : la colonne
  des fautes fréquentes est remplie par une forme inventée. Les autres lignes
  du tableau (*do a mistake*, *make a photo*, *take a decision*) sont, elles,
  de vraies fautes observées.
- **Correction proposée** : remplacer par « take the time » (la vraie confusion : *take your time* / *take the time to*), ou laisser la case vide.
- **Fait** : remplacé par « take the time » dans `cours-tournures.ts`, comme proposé.

### [MINEUR] ✅ Le franglais du visuel médical s'étend au cours
- **Où** : `vocabulaire-idees.ts` — `en-voc-medecine`, cours §2 et §3
- **Texte** : « on est **référé** à un specialist par un referral » ; « Un médecin **qui attends** a conference y assiste. »
- **Problème** : « être référé » est un calque de *to be referred* (le français
  dit « être adressé à ») ; et « un médecin qui attends » mélange un relatif
  français et un verbe anglais conjugué à la troisième personne, ce qui ne se
  lit dans aucune des deux langues. S'ajoute au visuel déjà signalé (« On book
  an appointment », « Il prescribes du traitement »).
- **Correction proposée** : « on est adressé à un spécialiste par un *referral* » ; « Un médecin qui *attends a conference* y assiste ; celui qui *assists a surgeon* l'aide à opérer. » (mettre l'anglais en évidence, ne pas le conjuguer avec un sujet français).
- **Fait** : « référé » remplacé par « adressé » ; la phrase mixte reformulée en « Assister à une conférence se dit to attend a conference ; aider un chirurgien se dit to assist a surgeon. », qui isole proprement les deux verbes anglais sans les conjuguer avec un sujet français.

### [MINEUR] ✅ Ordre des mots fautif en français
- **Où** : `precision.ts` — `en-c2-modal`, carte « He must have left already. » → « **Il a dû partir déjà.** »
- **Correction proposée** : « Il a déjà dû partir. »
- **Fait** : traduction corrigée dans `precision.ts` comme proposé.

### [MINEUR] ✅ Deux notes de préfixes incomplètes
- **Où** : `formation-mots.ts` — `en-prefixes`
- **Texte** : « In- devient im- devant p et b, ir- devant r, il- devant l : impossible, irregular. » et « Un- est le préfixe négatif le plus courant. **Il ne se combine pas avec tout.** »
- **Problème** : (a) *im-* vaut aussi devant *m* (*immoral*, *immature*), et
  aucun exemple en *il-* n'est donné alors que la règle le mentionne ;
  (b) « il ne se combine pas avec tout » n'apprend rien — c'est une note vide.
- **Correction proposée** : « In- devient im- devant p, b et m (impossible, immoral), ir- devant r (irregular), il- devant l (illegal). » et « Un- est le préfixe négatif le plus courant ; il s'attache surtout aux mots germaniques, là où in- va aux mots latins : unhappy mais incapable. »
- **Fait** : les deux notes réécrites dans `formation-mots.ts` comme proposé.

### [MINEUR] ✅ « Tightening their belt »
- **Où** : `idiomes-caractere.ts` — `en-idiomes-argent-temps`, carte « Everyone is tightening their belt. »
- **Problème** : avec *everyone* et le *their* de reprise, l'anglais met le
  pluriel : *tightening their belts*.
- **Correction proposée** : « Everyone is tightening their belts. »
- **Fait** : carte corrigée dans `idiomes-caractere.ts` comme proposé (note aussi mise à profit pour sortir du lot des « huit notes de remplissage », voir le MOYEN correspondant).

## Ce que la seconde passe a ajouté

La relecture a porté d'abord sur les fins de fichiers et sur les cours que la
première passe avait lus vite, puis sur un balayage mécanique des cartes et des
notes identiques d'un fichier à l'autre — le balayage n'a servi qu'à repérer des
candidats, le jugement vient de la relecture. Onze constats de plus, dont une
contradiction de méthode entre deux cours et une contradiction interne à un cours :

- La méthode d'apprentissage des phrasal verbs, enseignée à l'envers dans deux cours
- Le cours des clivées dit « jamais » d'une phrase que son propre visuel donne comme correcte
- Doublon : « rule out », deux cartes, la même note
- Non-réversible : « travaux » appelle deux anglais concurrents
- Non-réversible : « Tu n'avais pas besoin de te déranger »
- Une note de remplissage employée huit fois, et qui se dément elle-même
- Doublon de carte : « give a hand »
- Le franglais du visuel médical s'étend au cours
- Ordre des mots fautif en français
- Deux notes de préfixes incomplètes
- « Tightening their belt »

## Ce qui est sain

Beaucoup, et c'est la majorité du volume. Les trois cours de grammaire de
`grammaire-c1.ts` (inversion après négatif, phrase clivée, temps du récit) sont
les meilleurs textes du module : la règle y est exacte, le contre-exemple utile
(« Only Mary knew » sans inversion), et l'avertissement de registre honnête
(« dans le doute, ne pas déplacer »). Le cours sur les trois couches lexicales
de l'anglais (`en-c1-registre`) et celui sur la grammaire des titres de presse
(`en-c1-presse`) sont justes de bout en bout, y compris sur les détails
(*leader* / *editorial*, *standfirst* / *deck*, *op-ed*, *lede*). Le cours
juridique (`en-c1-droit`) est remarquablement exact : *consideration*, *shall*
d'obligation, doublets saxon-normand, *without prejudice*, *time is of the
essence*. Les séries de verbes à particule (`en-phrasal-get`,
`en-phrasal-come-go`) sont bien construites, avec le bon contraste
(*come across* / *come across as*). Les faux amis médicaux (*intoxication*,
*condition*, *drug*, *cure*) sont tous corrects. Et les dictées progressent
proprement du A1 au B2, avec des textes qui tiennent debout comme textes.
