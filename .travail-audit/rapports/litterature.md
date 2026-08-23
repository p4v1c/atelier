# Littérature

> ÉTAT : **passe 1 terminée** (tout le périmètre lu). Passe 2 en cours, reprise depuis le début du seed.

## Ce que j'ai lu

| Fichier | Contenu | État |
|---|---|---|
| `prisma/seed/culture-g/litterature.ts` | 13 notions, 129 questions | lu intégralement |
| `prisma/seed/culture-g/litterature-2.ts` | 20 notions, 200 questions | lu intégralement |
| `prisma/seed/culture-g/litterature-3.ts` | 19 notions, 190 questions | lu intégralement |
| `prisma/seed/culture-g/cours/litterature.ts` | 39 cours, 150 sections | lu intégralement |
| `heritage/culture-g/data/litterature.json` | 59 questions + 3 cours (14 sections) | lu intégralement |
| `heritage/culture-g/data/lecons/litterature/*.json` | 17 leçons (85 sections, 85 questions de quiz) | lues intégralement |

Total du seed : **52 notions, 519 questions, 39 cours** (150 sections).

## Constats

### [GRAVE] Phèdre : « la reine amoureuse du fiancé de sa fille » — faux, et contredit par le cours

- **Où** : `prisma/seed/culture-g/litterature-2.ts:74` — `li2-racine-corneille`
- **Texte** : « Quelle tragédie de Racine met en scène une reine amoureuse du fiancé de sa fille ? » — explication : « Phèdre aime son beau-fils Hippolyte. »
- **Problème** : Phèdre n'a pas de fille dans la pièce. Elle est l'épouse de Thésée et aime Hippolyte, **fils de son mari** (né d'Antiope) ; Hippolyte est épris d'Aricie, qui n'est la fille de personne dans l'entourage de Phèdre. L'énoncé contredit sa propre explication (« son beau-fils ») **et** le cours du même slug, qui écrit correctement : « Phèdre met en scène une reine dévorée d'amour pour le fils de son mari » (`cours/litterature.ts:129`). Un apprenant qui retient l'énoncé retient une fausseté sur l'une des tragédies les plus enseignées.
- **Correction proposée** : « Quelle tragédie de Racine met en scène une reine amoureuse du fils de son mari ? »

### [GRAVE] Césaire présenté comme « écrivain africain », et trois distracteurs vrais

- **Où** : `prisma/seed/culture-g/litterature-3.ts:412` — `li3-litterature-engagement`
- **Texte** : « Quel écrivain **africain** a lié son œuvre à la lutte anticoloniale ? » — choix : Aimé Césaire / Léopold Sédar Senghor / Ousmane Sembène / Mongo Beti ; bonne réponse : Césaire.
- **Problème** : double défaut. (1) Césaire est **martiniquais**, pas africain — ce que les deux autres fichiers du domaine disent explicitement (« Quel poète **martiniquais** est l'un des fondateurs de la négritude ? », `litterature.ts:184` ; « Quel écrivain **martiniquais** publie le Cahier… », `litterature-2.ts:404` ; le cours écrit « Aimé Césaire, Martiniquais »). La seule réponse conforme à l'énoncé est donc l'un des distracteurs. (2) Les trois distracteurs sont **tous** des écrivains africains ayant lié leur œuvre à la lutte anticoloniale (Senghor, Sembène, Mongo Beti) : la question a quatre réponses défendables et une bonne réponse fausse.
- **Correction proposée** : « Quel écrivain antillais a lié son œuvre à la lutte anticoloniale ? » avec des distracteurs non africains, ou bien conserver l'énoncé et faire de Mongo Beti la bonne réponse.

### [GRAVE] Camps soviétiques : question à quatre réponses, dont l'explication couronne un distracteur

- **Où** : `prisma/seed/culture-g/litterature-3.ts:292` — `li3-litterature-russe`
- **Texte** : « Quel écrivain russe a documenté le système des camps soviétiques ? » — choix : Soljenitsyne / Chalamov / Grossman / Guinzbourg ; bonne = Soljenitsyne. Explication : « **Chalamov**, avec ses Récits de la Kolyma, en a donné le témoignage littéraire le plus radical. »
- **Problème** : les quatre auteurs proposés ont tous documenté les camps (Chalamov, *Récits de la Kolyma* ; Grossman, *Vie et Destin* ; Guinzbourg, *Le Vertige*). Aucun élément de l'énoncé ne désigne Soljenitsyne, et l'explication valide explicitement un distracteur au lieu de justifier la réponse retenue — l'apprenant qui lit l'explication conclut qu'il s'est trompé alors qu'il avait raison.
- **Correction proposée** : énoncé « Quel écrivain russe publie *L'Archipel du Goulag*, enquête d'ensemble sur le système concentrationnaire soviétique ? » ; explication : « Publié à l'Ouest en 1973, il vaut à Soljenitsyne son expulsion d'URSS l'année suivante. Chalamov, Grossman et Guinzbourg ont témoigné du même monde sous d'autres formes. »

### [GRAVE] Doublon franc : Francis Ponge et *Le Parti pris des choses*, deux fois

- **Où** : `prisma/seed/culture-g/litterature.ts:188` (`li-poesie-francaise`) et `prisma/seed/culture-g/litterature-3.ts:200` (`li3-poesie-contemporaine`)
- **Texte** : « Quel poète français du XXe siècle consacre un recueil aux choses ordinaires dans Le Parti pris des choses ? » / « Quel poète français consacre son œuvre à la présence des choses ? » — même bonne réponse (Francis Ponge), distracteurs quasi identiques (Char, Bonnefoy, Jaccottet / Bonnefoy, Jaccottet, Guillevic), explications redondantes (« le cageot, l'huître ou le pain » / « un parti pris des choses »).
- **Problème** : c'est deux fois la même question, la seconde ne demandant rien de plus que la première.
- **Correction proposée** : remplacer celle de `li3-poesie-contemporaine` par une question sur la méthode de Ponge, p. ex. « Que cherche Francis Ponge en décrivant un cageot ou un galet ? » → « Donner la parole aux objets en évitant le lyrisme du moi ».

### [GRAVE] Le Goncourt « décerné chez Drouant depuis 1903 »

- **Où** : `prisma/seed/culture-g/litterature.ts:162` — `li-roman-francais`
- **Texte** : « Quel prix littéraire français est décerné **chez Drouant depuis 1903** ? »
- **Problème** : les deux faits sont exacts séparément mais faux ensemble. Le premier Goncourt est décerné en 1903, mais au Grand Hôtel ; l'Académie Goncourt ne s'installe chez Drouant qu'en **1914**. Le cours du domaine, lui, dit correctement « un jury de dix membres réunis chez Drouant » sans dater (`cours/litterature.ts:291`).
- **Correction proposée** : « Quel prix littéraire français est décerné chaque automne chez Drouant, à Paris ? » (et garder 1903 pour l'explication : « Décerné pour la première fois en 1903 ; l'Académie Goncourt déjeune chez Drouant depuis 1914. »)

### [MOYEN] Divine Comédie : « chacune de trente-trois chants plus un prologue »

- **Où** : `prisma/seed/culture-g/litterature-3.ts:327` — `li3-litterature-italienne`
- **Texte** : « Enfer, Purgatoire, Paradis, chacune de trente-trois chants plus un prologue. »
- **Problème** : lu littéralement, cela donne 34 × 3 = 102 chants. Le poème en compte **100** : seul l'Enfer a 34 chants (33 + le chant liminaire), le Purgatoire et le Paradis en ont 33 chacun. Le cours du même slug est exact (« de trente-trois chants chacune, plus un chant d'introduction », `cours/litterature.ts:450`) : c'est l'explication de la question qui déraille. Accord fautif au passage (« chacune **de** trente-trois chants »).
- **Correction proposée** : « Enfer, Purgatoire, Paradis : cent chants au total, l'Enfer en comptant trente-quatre avec le chant d'introduction, les deux autres trente-trois. »

### [MOYEN] Rimbaud : les lettres du voyant « écrites à dix-sept ans »

- **Où** : `prisma/seed/culture-g/cours/litterature.ts:352` — `li3-symbolisme-decadence`, section « Verlaine et Rimbaud »
- **Texte** : « Dans les lettres dites du voyant, écrites à dix-sept ans, il réclame un long, immense et raisonné dérèglement de tous les sens »
- **Problème** : les deux lettres (à Izambard le 13 mai 1871, à Demeny le 15 mai 1871) sont écrites alors que Rimbaud, né le 20 octobre 1854, a **seize ans**. L'exploit tient précisément à cet âge ; l'arrondir l'affaiblit et l'apprenant retient un faux.
- **Correction proposée** : « écrites à seize ans ».

### [MOYEN] *Ubu roi* : « un mot de cinq lettres »

- **Où** : `prisma/seed/culture-g/cours/litterature.ts:361` — `li3-theatre-xxe`, section « Le coup d'envoi »
- **Texte** : « Ubu roi d'Alfred Jarry s'ouvre sur un mot de cinq lettres qui déclenche un tumulte de quinze minutes »
- **Problème** : le mot est « Merdre », soit **six** lettres — et c'est le r ajouté qui fait toute la trouvaille. Le détail est de ceux qu'on retient et qu'on ressort.
- **Correction proposée** : « s'ouvre sur un juron déformé d'une lettre — Merdre — qui déclenche un tumulte de quinze minutes ».

### [MOYEN] Thomas Mann : 25 ou 26 ans ? Le cours et la question se contredisent

- **Où** : `prisma/seed/culture-g/litterature-2.ts:388` vs `prisma/seed/culture-g/cours/litterature.ts:218` — `li2-litterature-germanique`
- **Texte** : question : « Publié à vingt-six ans, il lui vaudra le Nobel en 1929. » / cours : « Thomas Mann publie à vingt-cinq ans Les Buddenbrook ».
- **Problème** : contradiction interne, et c'est le cours qui a tort. Mann est né le 6 juin 1875, *Les Buddenbrook* paraît en octobre 1901 : il a **vingt-six ans**.
- **Correction proposée** : dans le cours, « Thomas Mann publie à vingt-six ans Les Buddenbrook ».

### [MOYEN] L'Ère du soupçon : « l'avait précédé de huit ans »

- **Où** : `prisma/seed/culture-g/litterature-2.ts:471` — `li2-oulipo-experiences`
- **Texte** : « Publié en 1963. L'Ère du soupçon, de Nathalie Sarraute, l'avait précédé de huit ans. »
- **Problème** : *L'Ère du soupçon* paraît en **1956**, soit **sept** ans avant *Pour un nouveau roman* (1963). Le calcul est faux dans un contexte où les deux dates sont données.
- **Correction proposée** : « l'avait précédé de sept ans ».

### [MOYEN] Camus « mourut trois ans plus tard »

- **Où** : `prisma/seed/culture-g/litterature-2.ts:239` — `li2-existentialisme`
- **Texte** : « À quarante-quatre ans, il fut l'un des plus jeunes lauréats. Il mourut trois ans plus tard dans un accident. »
- **Problème** : Nobel décerné en décembre 1957, mort le 4 janvier 1960 — **deux ans et deux mois**. « Trois ans » gonfle d'un tiers un intervalle que la question elle-même invite à calculer.
- **Correction proposée** : « Il mourut un peu plus de deux ans plus tard dans un accident de voiture. »

### [MOYEN] Le « vers libre » de La Fontaine contredit la définition donnée ailleurs

- **Où** : `prisma/seed/culture-g/cours/litterature.ts:320` (`li3-fables-lafontaine`) vs `prisma/seed/culture-g/litterature.ts:56` (`li-versification`)
- **Texte** : cours La Fontaine : « Le vers libre, qui alterne mètres longs et courts au gré du récit » / question versification : « Qu'est-ce qu'un vers libre ? » → « Un vers sans mètre ni rime réguliers », « Il s'impose à la fin du XIXe siècle ».
- **Problème** : deux notions distinctes portent ici le même nom. Les « vers libres » de La Fontaine sont **rimés et mesurés**, seule leur longueur varie (on dit aussi vers mêlés) ; le vers libre moderne abandonne mètre et rime. Un apprenant qui a lu les deux conclut soit que La Fontaine écrivait en vers libres modernes, soit que le vers libre date du XVIIe siècle.
- **Correction proposée** : dans le cours La Fontaine, « Les vers mêlés, qui alternent mètres longs et courts au gré du récit — à ne pas confondre avec le vers libre du XIXe siècle, qui abandonne aussi la rime et le mètre ».

### [MOYEN] Les Fables : « deux recueils principaux »

- **Où** : `prisma/seed/culture-g/cours/litterature.ts:318` — `li3-fables-lafontaine`
- **Texte** : « La Fontaine a publié environ deux cent quarante fables, en deux recueils principaux, sur vingt-cinq ans. »
- **Problème** : il y a **trois** recueils : 1668 (livres I-VI), 1678-1679 (livres VII-XI), 1693-1694 (livre XII). La question du même slug dit d'ailleurs « douze livres publiés entre 1668 et 1694 ».
- **Correction proposée** : « en trois recueils, de 1668 à 1694 ».

### [MOYEN] Mallarmé : *Un coup de dés* présenté comme un recueil

- **Où** : `prisma/seed/culture-g/litterature.ts:178` — `li-poesie-francaise`
- **Texte** : « Quel **recueil** de Mallarmé s'achève sur un poème disposé librement sur la page ? » → « Un coup de dés jamais n'abolira le hasard ».
- **Problème** : la bonne réponse n'est pas un recueil mais **le poème lui-même** — alors qu'un des distracteurs (*Poésies*) en est un. La question, prise au mot, n'a pas de réponse juste.
- **Correction proposée** : « Quel poème de Mallarmé, publié en 1897, disperse librement les mots sur la double page ? »

### [MOYEN] Werther : le cours affirme ce que la question déclare invérifiable

- **Où** : `prisma/seed/culture-g/cours/litterature.ts:214` vs `prisma/seed/culture-g/litterature-2.ts:381` — `li2-litterature-germanique`
- **Texte** : cours : « une série de suicides réels lui est attribuée — le **premier cas documenté** de ce que la sociologie appellera l'effet d'imitation médiatique » / question : « on lui attribua une vague de suicides, **réalité difficile à établir** ».
- **Problème** : les deux textes disent le contraire l'un de l'autre sur le même fait. La prudence de la question est la bonne : la vague de suicides de 1774 n'est pas établie par des sources fiables, c'est l'effet Werther *nommé a posteriori* qui est documenté, sur des cas ultérieurs.
- **Correction proposée** : dans le cours, « une série de suicides réels lui est attribuée — attribution invérifiable, mais qui a donné son nom à ce que la sociologie appellera l'effet Werther ».

### [MOYEN] Doublon : Huysmans et *À rebours*, deux fois avec les mêmes distracteurs

- **Où** : `prisma/seed/culture-g/litterature-2.ts:188` (`li2-zola-naturalisme`) et `prisma/seed/culture-g/litterature-3.ts:130` (`li3-symbolisme-decadence`)
- **Texte** : « Quel roman de Huysmans marque une rupture avec le naturalisme en 1884 ? » / « Quel roman de Huysmans est le bréviaire de la décadence ? » — même réponse, distracteurs presque identiques (Là-bas, En route/En rade, Marthe), et les deux cours redisent la même chose (« Le livre devient la bible du courant décadent » / « dont À rebours de Huysmans est le bréviaire »).
- **Correction proposée** : garder la question de `li2-zola-naturalisme` (elle situe la rupture) et remplacer l'autre par une question sur des Esseintes ou sur le contenu du roman.

### [MOYEN] Doublon : Annie Ernaux caractérisée deux fois de la même façon

- **Où** : `prisma/seed/culture-g/litterature-2.ts:444` (`li2-autobiographie`) et `prisma/seed/culture-g/litterature-3.ts:178` (`li3-roman-contemporain`)
- **Texte** : « Quelle écrivaine française fait de sa vie une enquête sociologique ? » / « Quelle écrivaine française explore la mémoire familiale et sociale ? »
- **Problème** : deux énoncés vagues, une seule et même idée, une seule et même réponse. Une troisième question porte encore sur Ernaux (`litterature.ts:160`, Nobel 2022) — celle-là est légitime, elle interroge un fait.
- **Correction proposée** : remplacer l'une des deux par une question factuelle, p. ex. « Quel livre d'Annie Ernaux mêle mémoire personnelle et histoire collective de 1941 à 2006 ? » → *Les Années*.

### [MOYEN] Doublon : le Pulitzer de *Maus*, dans les deux sens

- **Où** : `prisma/seed/culture-g/litterature-2.ts:316` (`li2-bande-dessinee`) et `prisma/seed/culture-g/litterature-3.ts:254` (`li3-romans-graphiques`)
- **Texte** : « Quelle bande dessinée d'Art Spiegelman a reçu un prix Pulitzer ? » → Maus / « Quel auteur américain a reçu le Pulitzer pour un récit sur la Shoah ? » → Art Spiegelman.
- **Problème** : la même paire (auteur, œuvre, prix) interrogée dans un sens puis dans l'autre, avec la même explication sur les souris et les chats.
- **Correction proposée** : remplacer la seconde par une question sur ce que le procédé animalier produit, ou sur la date d'achèvement de l'œuvre.

### [MOYEN] Doublon : Le Deuxième Sexe, deux fois

- **Où** : `prisma/seed/culture-g/litterature-2.ts:228` (`li2-existentialisme`) et `prisma/seed/culture-g/litterature-3.ts:370` (`li3-essais-idees`)
- **Texte** : « Quel essai de Simone de Beauvoir paraît en 1949 ? » / « Quel essai de Simone de Beauvoir analyse la construction du féminin ? » — même réponse, explications toutes deux centrées sur 1949 et sur la réception hostile.
- **Correction proposée** : conserver celle de `li3-essais-idees` et remplacer l'autre par une question sur *Les Mandarins* ou sur la formule « on ne naît pas femme ».

### [MOYEN] Le Mariage de Figaro « interdit pendant six ans »

- **Où** : `prisma/seed/culture-g/cours/litterature.ts:45` — `li-theatre-francais`, section « Les scandales »
- **Texte** : « Le Mariage de Figaro, de Beaumarchais, est écrit en 1778 mais interdit pendant six ans par la censure royale »
- **Problème** : compter l'interdiction à partir de l'écriture est trompeur. La pièce est achevée en 1778, présentée aux Comédiens-Français et acceptée en 1781 ; c'est de 1781 à 1784 que Louis XVI en bloque la création, soit **trois** ans de bataille de censure.
- **Correction proposée** : « écrit en 1778, accepté par les Comédiens-Français en 1781, puis bloqué trois ans par la censure royale ».

### [MOYEN] Traduction neuronale décrite comme « un modèle statistique »

- **Où** : `prisma/seed/culture-g/litterature.ts:340` (`li-langues-traduction`) et `cours/litterature.ts:98`
- **Texte** : « Qu'est-ce que la traduction automatique neuronale ? » → « Une traduction produite par un modèle statistique entraîné sur de grands corpus ».
- **Problème** : « traduction statistique » (SMT) désigne précisément la génération **antérieure**, celle que le neuronal a remplacée vers 2016 — date que l'explication cite elle-même. Définir le neuronal par le mot qui nomme son prédécesseur efface la distinction que la question prétend enseigner.
- **Correction proposée** : « Une traduction produite par un réseau de neurones entraîné sur de grands corpus bilingues » ; explication : « Elle a remplacé vers 2016 la traduction statistique, qui procédait par alignement de segments. »

### [MOYEN] Saint-Simon publié « un siècle après sa mort »

- **Où** : `prisma/seed/culture-g/litterature-2.ts:436` — `li2-autobiographie`
- **Texte** : « Ils ne furent publiés intégralement qu'au XIXe siècle, un siècle après sa mort. »
- **Problème** : Saint-Simon meurt en 1755, la première édition intégrale paraît en 1829-1830 : **soixante-quinze ans**, pas un siècle.
- **Correction proposée** : « qu'en 1829, trois quarts de siècle après sa mort ».

### [MOYEN] Zamiatine « influença Orwell et Huxley »

- **Où** : `prisma/seed/culture-g/litterature-2.ts:261` — `li2-science-fiction`
- **Texte** : « Interdit en URSS, il circula à l'étranger et influença Orwell et Huxley. »
- **Problème** : l'influence sur Orwell est établie (il a lu *Nous autres* en 1946 et l'a chroniqué). Pour Huxley, c'est une hypothèse d'Orwell lui-même, que **Huxley a démentie** — *Le Meilleur des mondes* paraît d'ailleurs en 1932. Présenter une controverse comme un fait acquis.
- **Correction proposée** : « Interdit en URSS, il circula à l'étranger ; Orwell l'avait lu et s'en est inspiré. »

### [MOYEN] Question ambiguë : « Quel poète romantique meurt jeune… »

- **Où** : `prisma/seed/culture-g/litterature-3.ts:102` — `li3-romantisme-francais`
- **Texte** : « Quel poète romantique meurt jeune après une œuvre marquée par la douleur ? » — choix : Musset / Vigny / Nerval / Gautier ; bonne = Musset.
- **Problème** : Musset meurt à 46 ans, **Nerval aussi** (par suicide), et son œuvre est au moins autant « marquée par la douleur ». Rien dans l'énoncé ne départage les deux ; seule l'explication (les *Nuits*, George Sand) le fait, trop tard.
- **Correction proposée** : « Quel poète romantique écrit les Nuits après sa rupture avec George Sand ? »

### [MOYEN] Après fusion, une explication donne la réponse d'une autre question de la même notion

- **Où** : `prisma/seed/culture-g/litterature.ts:236` (`li-litteratures-monde`) et `prisma/seed/culture-g/litterature-3.ts:316` (`li3-litterature-orientale`), que `cours/fusions.ts:156` verse dans la première
- **Texte** : question A, explication : « Dramaturge et poète nigérian. **Naguib Mahfouz, égyptien, l'obtiendra en 1988.** » — question B : « Quel écrivain égyptien reçoit le prix Nobel de littérature en 1988 ? » → Naguib Mahfouz.
- **Problème** : `li3-litterature-orientale` est fusionnée dans `li-litteratures-monde` : les vingt questions se retrouvent dans la même notion, et l'explication de l'une livre mot pour mot la réponse de l'autre. L'apprenant qui a vu la première n'apprend rien à la seconde.
- **Correction proposée** : retirer la phrase sur Mahfouz de l'explication de la question sur Soyinka, et la remplacer par un élément propre à Soyinka (« Emprisonné vingt-deux mois pendant la guerre du Biafra, il a écrit sur du papier de fortune. »)

### [MOYEN] La rupture Camus-Sartre datée de 1951

- **Où** : `prisma/seed/culture-g/litterature-2.ts:236` — `li2-existentialisme`
- **Texte** : « Quel essai de Camus provoque sa rupture avec Sartre **en 1951** ? »
- **Problème** : *L'Homme révolté* paraît bien en 1951, mais la rupture a lieu **en 1952** : Francis Jeanson éreinte le livre dans *Les Temps modernes* en mai 1952, Camus répond en juin, Sartre lui réplique en août. Telle qu'elle est construite, la phrase date la rupture de 1951. La leçon héritée est exacte sur ce point : « la critique des révolutions totalitaires provoque **en 1952** une rupture retentissante avec Sartre » (`heritage/culture-g/data/lecons/litterature/06.json`, section « Camus, de l'absurde à la révolte »).
- **Correction proposée** : « Quel essai de Camus, publié en 1951, provoque sa rupture avec Sartre ? »

### [MINEUR] Shakespeare : trente-sept ou trente-huit pièces ?

- **Où** : `prisma/seed/culture-g/litterature.ts:194` et `cours/litterature.ts:54` (« environ trente-sept pièces ») ; `heritage/.../litterature.json`, question 33 (« environ 37 pièces ») ; `heritage/.../lecons/litterature/07.json` (« environ trente-huit pièces »)
- **Problème** : deux chiffres coexistent dans le même domaine pour le même fait. Les deux se défendent selon qu'on compte les pièces écrites en collaboration, mais l'apprenant qui lit les deux ne sait plus lequel retenir.
- **Correction proposée** : harmoniser sur « trente-sept à trente-neuf pièces selon les attributions », qui dit la vraie difficulté.

### [MINEUR] Christine de Pizan, « femme de lettres du XIVe siècle »

- **Où** : `prisma/seed/culture-g/litterature-2.ts:28` — `li2-litterature-medievale`
- **Texte** : « Quelle femme de lettres du XIVe siècle vécut de sa plume ? »
- **Problème** : née en 1364, Christine de Pizan écrit l'essentiel de son œuvre entre 1399 et 1429 ; *La Cité des dames*, son livre le plus connu, date de **1405**, comme le rappelle la leçon héritée (`lecons/litterature/08.json`). La ranger au XIVe siècle est inexact, et c'est justement le siècle qui sert ici à écarter les distractrices.
- **Correction proposée** : « Quelle femme de lettres du début du XVe siècle fut la première en France à vivre de sa plume ? »

### [MINEUR] « L'âge d'Ovide », XIIIe-XVIe siècles

- **Où** : `heritage/culture-g/data/lecons/litterature/09.json`, section « Ovide, le poète des métamorphoses et de l'exil »
- **Texte** : « au point que l'on a pu parler, pour les XIIIe au XVIe siècles, d'un âge d'Ovide »
- **Problème** : l'*aetas Ovidiana* de la périodisation classique désigne les **XIIe et XIIIe** siècles, encadrée par l'*aetas Virgiliana* et l'*aetas Horatiana*. La fourchette donnée est décalée d'un siècle et déborde sur la Renaissance.
- **Correction proposée** : « au point qu'on a pu appeler les XIIe et XIIIe siècles l'âge d'Ovide ».

### [MOYEN] Les contes de Grimm : quatre-vingt-six récits pour deux volumes

- **Où** : `heritage/culture-g/data/lecons/litterature/12.json`, section « Les frères Grimm et la collecte savante », repris dans l'explication du quiz
- **Texte** : « Ils publient en deux volumes, en 1812 et 1815, les Contes de l'enfance et du foyer, recueil qui rassemble **environ quatre-vingt-six histoires** »
- **Problème** : quatre-vingt-six est le nombre de contes du **premier** volume seul (1812). Le second (1815) en ajoute soixante-dix, soit environ cent cinquante-six pour les deux — et l'édition définitive de 1857 en compte plus de deux cents. Le chiffre est donc attribué à l'ensemble alors qu'il ne vaut que pour la moitié.
- **Correction proposée** : « recueil qui rassemble quatre-vingt-six récits dans son premier volume et environ cent cinquante-six au total ».

### [MOYEN] La part de la jeunesse dans le marché du livre : un cinquième ou 13,7 % ?

- **Où** : `prisma/seed/culture-g/litterature-3.ts:222` et `cours/litterature.ts:406` (`li3-litterature-jeunesse-2`) contre `heritage/culture-g/data/lecons/litterature/12.json`
- **Texte** : seed : « Une part importante, **autour d'un cinquième** » ; cours : « autour d'un cinquième **en valeur**, et davantage encore en nombre d'exemplaires vendus » — leçon héritée : « pesait en France environ **treize virgule sept pour cent** du chiffre d'affaires éditorial ».
- **Problème** : les deux chiffres se contredisent, et c'est le seed qui se trompe, en inversant les deux mesures : la jeunesse pèse environ 13 à 14 % du chiffre d'affaires et davantage — de l'ordre d'un cinquième — en nombre d'exemplaires. Le cours affirme donc l'inverse de la réalité tout en ayant la bonne intuition sur l'écart entre valeur et volume. S'ajoute le défaut signalé par la consigne : un chiffre de marché donné sans année alors qu'il bouge.
- **Correction proposée** : question : « Une part importante, autour d'un septième du chiffre d'affaires » ; cours : « autour de treize à quatorze pour cent du chiffre d'affaires, et près d'un cinquième des exemplaires vendus ».

### [MOYEN] Le mot « négritude » apparaîtrait pour la première fois dans le Cahier de 1939

- **Où** : `prisma/seed/culture-g/litterature-2.ts:405` — `li2-litterature-francophone`
- **Texte** : « Le mot négritude y apparaît **pour la première fois** sous sa plume. » (à propos du *Cahier d'un retour au pays natal*, 1939)
- **Problème** : la leçon héritée du même corpus dit l'inverse, et avec précision : « Césaire l'emploie pour la première fois dans le numéro de **mai-juin 1935** de la revue *L'Étudiant noir* » (`heritage/culture-g/data/lecons/litterature/15.json`, section « La négritude »). C'est l'état admis de la question. Le *Cahier* est le texte qui donne au mot sa portée, pas celui qui l'introduit.
- **Correction proposée** : « Césaire avait lancé le mot dès 1935 dans *L'Étudiant noir* ; le Cahier lui donne sa portée. »

### [MOYEN] Le parchemin remplacerait le papyrus « à partir du IIIe siècle avant notre ère »

- **Où** : `heritage/culture-g/data/lecons/litterature/17.json`, section « Des tablettes au codex »
- **Texte** : « À partir du IIIe siècle avant notre ère, le parchemin, fabriqué à partir de peaux animales, remplace progressivement le papyrus »
- **Problème** : la date est fausse des deux côtés. La tradition attribue la mise au point du parchemin à Pergame sous Eumène II, au **IIe siècle avant** notre ère ; et son remplacement effectif du papyrus, comme la victoire du codex, se joue du **IIIe au Ve siècle après**. Le paragraphe fait basculer de six siècles une transition qu'il présente ensuite, à juste titre, comme la condition matérielle du codex.
- **Correction proposée** : « Mis au point à Pergame au IIe siècle avant notre ère, le parchemin, fabriqué à partir de peaux animales, supplante progressivement le papyrus entre le IIIe et le Ve siècle de notre ère ».

### [MINEUR] « Le gouttière »

- **Où** : `prisma/seed/culture-g/litterature-2.ts:300` — `li2-bande-dessinee`
- **Texte** : « Comment appelle-t-on l'espace entre deux cases de bande dessinée ? » → « **Le** gouttière »
- **Problème** : le mot est féminin — *la* gouttière. La faute est dans la bonne réponse, donc dans ce que l'apprenant mémorise.
- **Correction proposée** : « La gouttière ».

### [MINEUR] Distracteurs mal formés qui se signalent comme faux

- **Où** : `prisma/seed/culture-g/litterature-3.ts:156` (`li3-theatre-xxe`) : « Erwin Piscator **seul** » ; `litterature-3.ts:408` (`li3-litterature-engagement`) : « Les Éditions de Minuit clandestines **seules** ».
- **Problème** : l'ajout de « seul(e)s » n'a aucun sens hors du contexte d'une correction ; ces deux options s'éliminent d'elles-mêmes sans qu'on sache rien du sujet.
- **Correction proposée** : « Erwin Piscator » et « Le Cahier noir » (ou tout autre titre plausible), sans adverbe.

### [MINEUR] Éluard : trois distracteurs qui ne sont pas des poèmes

- **Où** : `prisma/seed/culture-g/litterature.ts:182` — `li-poesie-francaise`
- **Texte** : « Quel **poème** de Paul Éluard… ? » — choix : Liberté / Capitale de la douleur / Le Temps déborde / Poésie et vérité.
- **Problème** : les trois distracteurs sont des **recueils**. La bonne réponse est la seule qui réponde à la catégorie demandée : la question se résout sans rien savoir d'Éluard.
- **Correction proposée** : remplacer par trois titres de poèmes (« La Courbe de tes yeux », « Notre vie », « Couvre-feu »).

### [MINEUR] « Quelle série de romans de Lewis Carroll… »

- **Où** : `prisma/seed/culture-g/litterature.ts:262` — `li-contes-jeunesse`
- **Texte** : « Quelle série de romans de Lewis Carroll met en scène une fillette et un lapin pressé ? »
- **Problème** : *Alice au pays des merveilles* est un roman, pas une série ; et les trois distracteurs ne sont pas davantage des séries. Le mot « série » ne sert à rien et embrouille.
- **Correction proposée** : « Quel roman de Lewis Carroll met en scène une fillette et un lapin pressé ? »

### [MINEUR] La Comédie humaine : « près de quatre-vingt-dix » ou « près de cent » ?

- **Où** : `prisma/seed/culture-g/litterature.ts:147` (« Près de quatre-vingt-dix romans ») vs `cours/litterature.ts:151` (« La Comédie humaine réunira près de cent œuvres »)
- **Problème** : deux ordres de grandeur pour le même ensemble, dans le même domaine. Le chiffre habituel est d'environ 90 à 95 œuvres achevées sur les 137 prévues.
- **Correction proposée** : harmoniser sur « environ quatre-vingt-dix œuvres achevées, sur les cent trente-sept que Balzac avait prévues ».

### [MINEUR] Montaigne : la devise « gravée dans sa librairie »

- **Où** : `prisma/seed/culture-g/litterature-3.ts:16` et `cours/litterature.ts:305` — `li3-montaigne-moralistes`
- **Texte** : « Quelle devise Montaigne fait-il graver dans sa librairie ? » → « Que sais-je ? »
- **Problème** : ce qui est gravé sur les solives de sa librairie, ce sont une cinquantaine de sentences grecques et latines. « Que sais-je ? » est la devise qu'il fait frapper sur une **médaille**, avec une balance. L'amalgame est courant mais reste inexact.
- **Correction proposée** : « Quelle devise Montaigne fait-il frapper sur sa médaille ? », ou « Quelle devise résume le scepticisme de Montaigne ? »

### [MINEUR] La Fontaine élu à l'Académie

- **Où** : `prisma/seed/culture-g/cours/litterature.ts:329` — `li3-fables-lafontaine`
- **Texte** : « il ne fut élu à l'Académie française qu'en 1684 »
- **Problème** : élu en **novembre 1683** ; le roi n'approuva son élection qu'en avril 1684, et il fut reçu le 2 mai 1684. Le fait intéressant est précisément ce délai d'approbation, que la formulation escamote.
- **Correction proposée** : « il ne fut élu qu'en 1683, et le roi attendit six mois avant d'approuver son élection ».

### [MINEUR] Proust : « les quinze dernières années de sa vie »

- **Où** : `prisma/seed/culture-g/cours/litterature.ts:184` — légende de l'image `lit-proust`
- **Problème** : Proust s'installe dans la chambre de liège du boulevard Haussmann en 1910 et meurt en 1922 — douze ans.
- **Correction proposée** : « les douze dernières années de sa vie ».

### [MINEUR] Commentaires de fichier périmés

- **Où** : en-têtes de `litterature.ts` (« treize notions **sans cours** »), `litterature-2.ts` (« vingt notions **sans cours** »), `litterature-3.ts` (« **vingt** notions sans cours »)
- **Problème** : 39 des 52 notions ont désormais un cours, et `litterature-3.ts` en contient 19, pas 20. Sans effet pour l'apprenant, mais trompeur pour qui reprend le fichier.

## Points vérifiés en cours de route

- ~~**Notions sans cours**~~ : vérifié, faux positif. Les 13 slugs sans entrée dans `cours/litterature.ts` sont tous fusionnés dans une notion hôte par `cours/fusions.ts` (lignes 30-34, 65-70, 102, 156). Aucun constat.
- ~~**Anne Brontë**~~ : vérifié, *La Recluse de Wildfell Hall* est bien un titre français attesté (traduction de Georges Charbonnier et André Frédérique, 1947, rééditée chez Libretto). Aucun constat.
- ~~**Césaire et le mot « négritude »**~~ : vérifié, voir le constat MOYEN ci-dessus.

## Ce que la seconde passe a ajouté

_(passe 2 non commencée)_

## Ce qui est sain

Le socle factuel est très solide sur les dates et les attributions d'œuvres : sur plus de cinq cents questions, la quasi-totalité des dates de publication, de création et de prix vérifiées tombent juste (Comédie-Française 1680, Molière mort le 17 février 1673 après la quatrième représentation, Cid 1637, Fleurs du mal et Bovary 1857, Goncourt 1919 à Proust, Nobel de Kawabata 1968, Soyinka 1986, Mahfouz 1988, Modiano 2014, Ernaux 2022). Les citations sont exactes et correctement attribuées — « Va, je ne te hais point » à Chimène, « Seul le silence est grand » à Vigny dans *La Mort du loup*, « Je hais les voyages et les explorateurs » à Lévi-Strauss, « À nous deux maintenant ! » avec la précision utile qu'on la cite souvent de mémoire. Les cours sont d'un niveau nettement supérieur à la moyenne du genre : ils expliquent des mécanismes (pourquoi la contrainte oulipienne engendre, pourquoi la métaphore affirme là où la comparaison illustre, pourquoi le détour animalier protège la critique) au lieu de paraphraser leur titre, et plusieurs prennent la peine de signaler ce qui est discuté ou daté (l'hérédité chez Zola, l'opposition Corneille/Racine « forgée par la critique du XIXe siècle », la banalité du mal « souvent citée à contresens »).
