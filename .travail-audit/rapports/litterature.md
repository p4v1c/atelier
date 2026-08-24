# Littérature

> ÉTAT : **passe 1 terminée**. **Passe 2 en cours** — méthode : chargement du module
> par `contenuDe(MODULES)` (fusions de `cours/fusions.ts` appliquées), 62 notions /
> 678 questions après fusion. Notions relues : toutes notions fusionnées + astuces des 62 notions ; scan croisé en cours

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

La passe 2 n'a pas relu les fichiers : elle a chargé le module comme le fait
l'application (`contenuDe`), ce qui applique les treize fusions de
`cours/fusions.ts` qui concernent la littérature (lignes 30-34, 65-70, 102, 156)
et met dans une même notion des questions écrites dans deux fichiers différents,
à des années d'intervalle. Les constats ci-dessous sont **invisibles fichier par
fichier** : ils n'existent qu'après fusion, ou ne se voient qu'en mettant
l'astuce, l'énoncé et les explications d'une notion côte à côte.

### [GRAVE] `cg-litterature-09` — après fusion, quatre des cinq questions héritées donnent la réponse des questions du seed

- **Où** : notion `cg-litterature-09` « La littérature antique : Homère, Virgile, Ovide » — cinq questions de `heritage/culture-g/data/lecons/litterature/09.json` + les dix de `li2-litterature-antique` (`prisma/seed/culture-g/litterature-2.ts:340-361`), versées là par `cours/fusions.ts:70`.
- **Texte** (les fuites, une par une) :
  - explication de « Quel est le sujet annoncé dès l'ouverture de *L'Iliade* ? » : « Le retour d'Ulysse est le sujet de **L'Odyssée**. » → c'est mot pour mot la réponse de « Quelle épopée raconte le retour d'Ulysse ? » (bonne réponse : *L'Odyssée*).
  - explication de « Quelle épopée raconte le retour d'Ulysse ? » : « Le récit commence **in medias res**, au milieu de l'action. » → réponse **et** définition de « Comment appelle-t-on le procédé narratif consistant à commencer *L'Odyssée* en pleine action…? » (bonne réponse : *In medias res*).
  - explication de « Combien de chants comptent respectivement *L'Iliade* et *L'Odyssée* ? » : « Douze est le nombre de chants de *L'Énéide* **de Virgile**, et quinze celui des livres des ***Métamorphoses* d'Ovide**. » → donne d'un coup la réponse de « Quel poète latin écrit l'Énéide ? » (*Virgile*) **et** celle de « Quelle œuvre d'Ovide rassemble des récits de transformations ? » (*Les Métamorphoses*).
  - explication de « Où Ovide a-t-il été relégué par Auguste ? » : « *Les Métamorphoses*, en quinze livres, ont nourri toute la culture européenne. » → même fuite, une seconde fois.
- **Problème** : sur les dix questions du seed versées dans cette leçon, quatre deviennent gratuites pour qui a vu les questions héritées, qui passent avant elles dans le même chapitre. Aucune de ces fuites n'est visible dans `litterature-2.ts` ni dans `lecons/litterature/09.json` pris séparément.
- **Correction proposée** : retirer les phrases de renvoi devenues internes — dans la première explication, remplacer la dernière phrase par « Le poème s'ouvre sur le mot *mênin*, la colère » ; dans la deuxième, remplacer par « Vingt-quatre chants pour quarante jours d'action présente » ; dans la troisième, supprimer la dernière phrase (les distracteurs 12 et 15 se justifient sans être nommés) ; dans la quatrième, remplacer par « Il y meurt vers 17 ou 18 de notre ère sans avoir obtenu son rappel. »

### [GRAVE] `cg-litterature-09` — le même fait posé deux fois, dans les deux sens

- **Où** : notion `cg-litterature-09`, questions issues de `heritage/.../lecons/litterature/09.json` et de `prisma/seed/culture-g/litterature-2.ts` (`li2-litterature-antique`).
- **Texte** : « Quel est le sujet annoncé dès l'ouverture de *L'Iliade* ? » → « La colère d'Achille » / « Quelle épopée raconte la colère d'Achille ? » → « *L'Iliade* ». Et les deux explications redisent la même chose : « quelques semaines de la dixième année du siège » d'un côté, « Elle ne couvre que quelques semaines de la dixième année du siège de Troie » de l'autre.
- **Problème** : c'est le couple (œuvre, sujet) interrogé dans un sens puis dans l'autre, avec la même explication reformulée. Après fusion les deux questions sont dans le même chapitre.
- **Correction proposée** : remplacer « Quelle épopée raconte la colère d'Achille ? » par une question qui ne recouvre pas la première, p. ex. « Quel héros troyen *L'Iliade* oppose-t-il à Achille dans le combat décisif ? » → « Hector ».

### [MOYEN] `cg-litterature-09` — l'astuce de la leçon contient trois réponses

- **Où** : notion `cg-litterature-09`, champ `tip` (sommaire de la leçon héritée).
- **Texte** : « Cette leçon couvre : Homère et la question homérique · **« L'Iliade » : la colère et la mort** · **« L'Odyssée » : le récit du retour** · **Virgile** et « L'Énéide », épopée d'un empire · Ovide, le poète des métamorphoses et de l'exil »
- **Problème** : l'astuce est affichée avec les questions. Elle apparie ici explicitement *L'Iliade* et « la colère », *L'Odyssée* et « le retour », *Virgile* et *L'Énéide* — soit les réponses de trois des questions du seed, sans qu'il faille rien savoir. Le mécanisme n'est pas propre à cette notion : le sommaire d'une leçon héritée sert d'astuce à toutes les questions versées dans cette leçon par la fusion.
- **Correction proposée** : quand une notion héritée absorbe des questions par fusion, ne pas réutiliser le sommaire des sections comme `tip`, ou en retirer les noms propres (« Les deux épopées homériques · L'épopée latine · Ovide et l'exil »).

### [GRAVE] `cg-litterature-08` — l'explication de la question sur *La Cité des dames* donne les réponses de deux autres questions

- **Où** : notion `cg-litterature-08` « La littérature française du Moyen Âge » — heritage `lecons/litterature/08.json` + `li2-litterature-medievale` (`prisma/seed/culture-g/litterature-2.ts`), fusionnés par `cours/fusions.ts:65`.
- **Texte** : explication de « Qui est l'auteure de *La Cité des dames*, publiée en 1405 ? » : « **Christine de Pizan** est souvent présentée comme **la première femme à avoir vécu de sa plume** en France. **Marie de France**, au XIIe siècle, est **l'auteure de lais** d'inspiration bretonne… »
- **Problème** : deux fuites dans une seule explication. (1) La question du seed « Quelle femme de lettres du XIVe siècle vécut de sa plume ? » a pour réponse *Christine de Pizan* : l'explication en donne le nom **et** le critère de reconnaissance. Les deux questions ont d'ailleurs la même bonne réponse — c'est un doublon franc dans une même notion. (2) La question du seed « Quelle poétesse du XIIe siècle écrit des Lais ? » a pour réponse *Marie de France* : la même explication l'apparie explicitement au XIIe siècle et aux lais.
- **Correction proposée** : réécrire la fin de l'explication sans nommer les distracteurs (« Veuve à vingt-cinq ans, elle vit de commandes princières ; ses adversaires dans la querelle du *Roman de la Rose* comptent parmi les clercs les plus en vue de son temps. ») et supprimer purement et simplement la question « Quelle femme de lettres du XIVe siècle vécut de sa plume ? », redondante et de surcroît fautive sur le siècle (voir le constat MINEUR de la passe 1).

### [MOYEN] `cg-litterature-08` — Chrétien de Troyes nommé dans trois questions avant celle qui le demande

- **Où** : notion `cg-litterature-08`.
- **Texte** : « Lequel de ces romans **de Chrétien de Troyes** est resté inachevé ? » (énoncé) ; « L'octosyllabe, lui, est le vers du roman courtois, celui qu'emploie **Chrétien de Troyes** » (explication de la question sur le décasyllabe) ; « **Chrétien** est considéré comme le premier romancier français », avec la liste « *Lancelot*, *Yvain* » (explication de la question sur *Perceval*).
- **Problème** : la question du seed « Quel auteur du XIIe siècle écrit plusieurs romans arthuriens ? » → *Chrétien de Troyes*, dont l'explication est « Lancelot, Yvain, Perceval : il fixe pour des siècles la matière de Bretagne », arrive dans un chapitre où son nom et sa liste d'œuvres ont déjà été donnés trois fois. Elle n'enseigne plus rien.
- **Correction proposée** : remplacer cette question par une question sur ce que Chrétien apporte (« Quelle nouveauté Chrétien de Troyes introduit-il par rapport à la chanson de geste ? » → « L'aventure individuelle et l'analyse du sentiment amoureux »), ou la retirer.

### [MOYEN] `cg-litterature-08` — *La Chanson de Roland* nommée dans deux énoncés avant d'être la réponse à trouver

- **Où** : notion `cg-litterature-08`.
- **Texte** : énoncés hérités « Par quel manuscrit connaît-on principalement ***La Chanson de Roland*** ? » et « Quel épisode historique se trouve à l'origine de ***La Chanson de Roland*** ? » ; question du seed « Quelle est la plus ancienne chanson de geste française conservée ? » → *La Chanson de Roland*.
- **Problème** : le titre est écrit deux fois dans les énoncés du même chapitre ; associé à « chanson de geste » par la question héritée sur le manuscrit, il ne reste rien à trouver. S'ajoute une redite : l'explication du seed (« elle transfigure un épisode militaire de **778** en combat contre les Sarrasins ») donne la date qui est la clé de la réponse de la question héritée sur l'épisode d'origine (« Le massacre de l'arrière-garde de Charlemagne en **778** »).
- **Correction proposée** : remplacer la question du seed par « Combien de siècles séparent la bataille de Roncevaux de la composition du poème ? » → « Trois siècles environ », et retirer « en combat contre les Sarrasins » de l'explication héritée pour ne pas doublonner.

### [GRAVE] `cg-litterature-02` — *Les Contemplations* : la même question deux fois, avec la même explication

- **Où** : notion `cg-litterature-02` « Victor Hugo et le romantisme français » — la plus grosse notion du domaine après fusion (25 questions) : heritage `lecons/litterature/02.json` + `li2-hugo` + `li3-romantisme-francais`, réunis par `cours/fusions.ts:66` et `:102`.
- **Texte** :
  - « Dans quel recueil **de 1856** Victor Hugo évoque-t-il longuement **la mort de sa fille** Léopoldine ? » → *Les Contemplations*. Explication : « organisées en deux parties, **Autrefois et Aujourd'hui, séparées par la mort de Léopoldine** ».
  - « Quel recueil poétique Hugo publie-t-il **en 1856** autour **du deuil de sa fille** ? » → *Les Contemplations*. Explication : « Il le divise en deux parties, **Autrefois et Aujourd'hui, séparées par la mort de Léopoldine**. »
- **Problème** : même bonne réponse, même critère (1856 + la fille morte), et une explication qui reprend la précédente presque au mot près. Les deux questions sont désormais dans le même chapitre : l'apprenant répond deux fois à la même chose et n'apprend rien la seconde fois.
- **Correction proposée** : supprimer la seconde, ou la remplacer par une question sur un contenu propre au recueil (« Quel poème des *Contemplations* raconte la marche du poète vers la tombe de sa fille ? » → « *Demain, dès l'aube* »).

### [GRAVE] `cg-litterature-02` — deux questions sur la Préface de Cromwell qui se donnent mutuellement la réponse

- **Où** : notion `cg-litterature-02`.
- **Texte** :
  - « Quel principe esthétique **la Préface de Cromwell (1827)** met-elle au cœur du drame romantique ? » → « Le mélange du sublime et du grotesque ».
  - « Dans quelle préface Hugo formule-t-il le programme du drame romantique ? » → « **La préface de Cromwell** ». Explication : « **Publiée en 1827**, elle appelle à **mêler le sublime et le grotesque** contre les règles classiques. »
- **Problème** : le cas d'école de la fuite croisée. L'énoncé de la première nomme la réponse de la seconde (titre **et** date) ; l'explication de la seconde donne la réponse de la première (« mêler le sublime et le grotesque »). Aucune des deux n'est plus une question dès lors qu'on a vu l'autre. À quoi s'ajoute que l'explication de la première finit par « L'application de ces idées viendra trois ans plus tard avec ***Hernani*** », qui est la réponse d'une troisième question du même chapitre (« Quelle pièce de Victor Hugo provoque en 1830 une célèbre bataille…? »).
- **Correction proposée** : supprimer « Dans quelle préface Hugo formule-t-il le programme du drame romantique ? » (redondante), et remplacer dans la première explication la phrase finale par « Hugo n'écrira jamais de représentation scénique de *Cromwell* : la pièce est injouable, longue de plus de six mille vers. »

### [GRAVE] `cg-litterature-02` — l'exil : une question héritée qui répond à trois questions du seed

- **Où** : notion `cg-litterature-02`.
- **Texte** : explication de « Sur quelle île anglo-normande Victor Hugo s'installe-t-il en 1855 ? » : « Hugo s'exile à Bruxelles, puis **à Jersey en 1852 et enfin à Guernesey en 1855**… C'est pendant cet exil qu'il écrit ***Les Contemplations***, ***La Légende des siècles*** et ***Les Misérables***. Il **refuse l'amnistie offerte en 1859**… et **rentre en France en septembre 1870**. »
- **Problème** : cette seule explication contient, mot pour mot ou presque, la réponse de quatre autres questions du même chapitre : « Où Hugo passe-t-il l'essentiel de son exil ? » → « **À Jersey puis Guernesey** » (dont l'explication, « Il refusa l'amnistie de 1859 : il ne rentra qu'après la chute de l'Empire en 1870 », est elle aussi déjà écrite ici) ; « Quel recueil poétique Hugo publie-t-il en 1856…? » → *Les Contemplations* ; « Quelle vaste fresque poétique Hugo consacre-t-il à l'humanité ? » → *La Légende des siècles* ; « Quel roman de Victor Hugo, paru en 1862…? » → *Les Misérables*. La question « Où Hugo passe-t-il l'essentiel de son exil ? » est de surcroît un **doublon** de la question héritée sur l'île anglo-normande.
- **Correction proposée** : supprimer « Où Hugo passe-t-il l'essentiel de son exil ? », et réécrire l'explication héritée sans la liste d'œuvres : « Hugo s'exile à Bruxelles, puis à Jersey en 1852 et enfin à Guernesey en 1855, où il achète Hauteville House. Il y écrit l'essentiel de son œuvre d'exil et refuse l'amnistie de 1859, déclarant qu'il ne rentrera que lorsque la liberté rentrera. »

### [MOYEN] `cg-litterature-02` — *La Légende des siècles*, *Notre-Dame de Paris*, Jean Valjean : trois réponses livrées par des explications voisines

- **Où** : notion `cg-litterature-02`.
- **Texte** :
  - explication de la question sur *Les Contemplations* : « ***La Légende des siècles*** est **une épopée de l'humanité** publiée à partir de 1859 » → réponse de « Quelle **vaste fresque poétique** Hugo consacre-t-il à **l'humanité** ? ».
  - énoncé de la question héritée sur *Les Misérables* : « suit le destin de **l'ancien forçat Jean Valjean** », et son explication « Jean Valjean, condamné au bagne pour avoir volé un pain, **poursuivi par l'inspecteur Javert** » → réponse et explication de « Quel personnage des *Misérables* est **un ancien bagnard poursuivi par un policier** ? ».
  - même explication : « ***Notre-Dame de Paris*** date de **1831** » → réponse de « Quel roman de Hugo se déroule autour d'une cathédrale parisienne ? », dont l'explication commence par « Publié en 1831 ».
- **Problème** : trois questions du seed rendues sans objet par des explications héritées écrites sans savoir qu'elles se retrouveraient dans le même chapitre.
- **Correction proposée** : dans les explications héritées, ne plus caractériser les distracteurs par ce qui sert de définition ailleurs — remplacer par des dates seules (« *Notre-Dame de Paris*, 1831 ; *L'Homme qui rit*, 1869 ; *Quatrevingt-treize*, 1874 ») et supprimer « une épopée de l'humanité ».

### [MOYEN] `cg-litterature-02` — l'astuce nomme *Hernani*

- **Où** : notion `cg-litterature-02`, champ `tip`.
- **Texte** : « Cette leçon couvre : … Le théâtre et **la bataille d'Hernani** · Le romancier des misérables · L'exil… »
- **Problème** : la première question du chapitre est « Quelle pièce de Victor Hugo provoque en 1830 une célèbre **bataille** entre classiques et romantiques ? », avec *Hernani* parmi quatre titres. L'astuce, affichée à côté, la donne.
- **Correction proposée** : « Le théâtre et la bataille de 1830 ».

### [GRAVE] `cg-litterature-01` — *La Comédie humaine* et le procès de *Madame Bovary* : deux doublons, chacun avec fuite croisée

- **Où** : notion `cg-litterature-01` « Le roman français du XIXe siècle » — heritage `lecons/litterature/01.json` + `li-roman-francais` (`prisma/seed/culture-g/litterature.ts:145-165`), fusionnés par `cours/fusions.ts:31`.
- **Texte** :
  - « Quel nom Balzac donne-t-il à **l'ensemble de son œuvre romanesque** ? » → *La Comédie humaine* / « Quel **ensemble romanesque** Balzac construit-il à partir de 1830 ? » → *La Comédie humaine*. Même réponse, même chose demandée. Les deux explications se recoupent jusqu'au chiffre : « environ **quatre-vingt-dix œuvres achevées** » / « Près de **quatre-vingt-dix romans** ».
  - « En quelle année ***Madame Bovary*** de Flaubert paraît-il en volume, année où son auteur est **traduit en justice** ? » → 1857 / « Quel roman de Flaubert vaut à son auteur un **procès en 1857** ? » → *Madame Bovary*. Le couple (titre, année, procès) posé dans un sens puis dans l'autre : l'énoncé de chacune contient la réponse de l'autre.
- **Problème** : deux paires de questions qui interrogent le même fait dans une même notion, dont l'une est un aller-retour parfait. Rien de tout cela n'est visible dans les fichiers pris séparément.
- **Correction proposée** : supprimer « Quel ensemble romanesque Balzac construit-il à partir de 1830 ? » et « Quel roman de Flaubert vaut à son auteur un procès en 1857 ? » ; si l'on tient à garder deux questions sur Flaubert, poser « Quel roman de Flaubert, resté inachevé, met en scène deux copistes lancés dans l'encyclopédie des savoirs ? » → *Bouvard et Pécuchet*.

### [MOYEN] `cg-litterature-01` — le retour des personnages et *Les Rougon-Macquart* donnés par les explications voisines

- **Où** : notion `cg-litterature-01`.
- **Texte** :
  - explication de « Quel ensemble romanesque Balzac construit-il à partir de 1830 ? » : « Près de quatre-vingt-dix romans **reliés par le retour des personnages** » → réponse exacte de « Quel **procédé narratif** Balzac systématise-t-il pour unifier *La Comédie humaine* ? » (« Le retour des personnages d'un roman à l'autre »).
  - explication de la question sur *La Comédie humaine* : « ***Les Rougon-Macquart*** est **le cycle de Zola** » ; explication de la question sur *Germinal* : « le treizième roman **du cycle des Rougon-Macquart** d'Émile Zola » → réponse de « Quelle fresque romanesque Zola consacre-t-il à une famille sous le Second Empire ? », donnée deux fois avant d'être demandée.
  - l'astuce du chapitre annonce « **Balzac et La Comédie humaine** », soit la réponse des deux questions ci-dessus.
- **Correction proposée** : dans les explications héritées, désigner les distracteurs sans les définir (« *Les Rougon-Macquart*, *Les Misérables* et *Les Soirées de Médan* ne sont pas de Balzac ») ; astuce : « Balzac et son grand cycle ».

### [GRAVE] `cg-litterature-03` — Villon et *Les Fleurs du mal* : deux doublons de plus après fusion

- **Où** : notion `cg-litterature-03` « La poésie française, de Villon à Apollinaire » — heritage `lecons/litterature/03.json` + `li-poesie-francaise` (`prisma/seed/culture-g/litterature.ts:172-190`), fusionnés par `cours/fusions.ts:32`.
- **Texte** :
  - « Quel poète du XVe siècle, **banni de Paris**, est l'auteur du *Testament* (1461) ? » → *François Villon* / « Quel poète du XVe siècle écrit la *Ballade des pendus* ? » → *François Villon*. Mêmes quatre noms proposés (Rutebeuf, Charles d'Orléans, Clément Marot, Villon), simplement réordonnés. L'explication de la seconde (« une exécution finalement commuée en **bannissement** ») ne dit rien que la première n'ait déjà dit.
  - « Quel recueil, publié en **1857**, vaut à son auteur une **condamnation pour outrage aux bonnes mœurs** ? » → *Les Fleurs du mal* / « Quel recueil de Baudelaire est **condamné en 1857** ? » → *Les Fleurs du mal*. Les deux explications disent la même chose : « **six pièces** jugées immorales doivent être retirées » / « **Six pièces** sont censurées ».
- **Problème** : deux paires de questions parfaitement redondantes dans la même notion, avec des explications qui se répètent. L'astuce (« Le Moyen Âge et **la voix de Villon** ») donne en outre la réponse des deux premières.
- **Correction proposée** : supprimer les deux questions du seed, ou les remplacer par des questions qui ajoutent quelque chose : « Quel refrain de Villon interroge le devenir des femmes célèbres du passé ? » → « Mais où sont les neiges d'antan ? » ; « En quelle année les six pièces condamnées des *Fleurs du mal* ont-elles été réhabilitées ? » → « 1949 ».

### [GRAVE] `cg-litterature-03` — *Alcools* : deux questions qui se donnent la réponse l'une à l'autre

- **Où** : notion `cg-litterature-03`.
- **Texte** :
  - « Quelle particularité formelle Apollinaire donne-t-il à son recueil *Alcools* (1913) ? » → « Il est **dépourvu de toute ponctuation** ». Explication : « Le recueil rassemble … « Zone », « ***Le Pont Mirabeau*** » et « La Chanson du mal-aimé ». »
  - « Quel poème d'Apollinaire évoque la Seine et le temps qui passe ? » → « ***Le Pont Mirabeau*** ». Explication : « Tiré d'*Alcools*, publié en 1913, recueil **dont Apollinaire a supprimé toute ponctuation**. »
- **Problème** : fuite croisée complète. L'explication de la première nomme la bonne réponse de la seconde parmi trois titres — dont les deux autres, « Zone » et « La Chanson du mal-aimé », sont justement les distracteurs. L'explication de la seconde énonce mot pour mot la bonne réponse de la première. Les deux questions s'annulent.
- **Correction proposée** : supprimer la phrase finale de l'explication du *Pont Mirabeau* (« Tiré d'*Alcools*, 1913 » suffit) et remplacer dans l'explication d'*Alcools* la liste de poèmes par « Le recueil rassemble des poèmes composés sur une quinzaine d'années. »

### [MINEUR] `cg-litterature-03` — « Il pleure dans mon cœur » : la réponse n'est pas un poème mais un cycle

- **Où** : notion `cg-litterature-03`, question issue de `prisma/seed/culture-g/litterature.ts` (`li-poesie-francaise`).
- **Texte** : « Quel **poème** de Verlaine commence par « Il pleure dans mon cœur » ? » → « **Ariettes oubliées** » ; distracteurs : *Mon rêve familier*, *Chanson d'automne*, *Green*.
- **Problème** : « Ariettes oubliées » est le titre d'une **suite de neuf poèmes** ouvrant *Romances sans paroles* ; « Il pleure dans mon cœur » en est la troisième pièce, sans titre propre. Les trois distracteurs, eux, sont bien des poèmes uniques : la seule réponse qui ne réponde pas à la catégorie demandée est la bonne. Le défaut est le symétrique de celui déjà relevé sur Éluard en passe 1.
- **Correction proposée** : « De quelle suite de *Romances sans paroles* « Il pleure dans mon cœur » est-il tiré ? » → « Les *Ariettes oubliées* ».

### [GRAVE] `cg-litterature-13` — « la gouttière » et « le gouttière » : la même question deux fois, à un genre près

- **Où** : notion `cg-litterature-13` « La bande dessinée et le roman graphique » — heritage `lecons/litterature/13.json` + `li2-bande-dessinee` (`prisma/seed/culture-g/litterature-2.ts:296-317`), fusionnés par `cours/fusions.ts:69`.
- **Texte** : « Comment appelle-t-on l'espace blanc qui sépare deux cases dans une bande dessinée ? » → « **La gouttière** » / « Comment appelle-t-on l'espace entre deux cases de bande dessinée ? » → « **Le gouttière** ». Explications : « c'est là que se joue l'ellipse, puisque **le lecteur y reconstitue mentalement** ce qui n'est pas montré entre deux images » / « C'est là que **le lecteur opère mentalement** le passage d'une image à l'autre. »
- **Problème** : c'est la même question, avec la même réponse, la même explication reformulée — et les deux versions ne diffèrent que par une faute de genre dans celle du seed. L'apprenant voit successivement « la gouttière » puis « le gouttière » dans le même chapitre : non seulement il apprend deux fois la même chose, mais on lui apprend une faute juste après le mot correct. (La faute seule était déjà signalée en passe 1 ; c'est la fusion qui montre que la question tout entière est en trop.)
- **Correction proposée** : supprimer la question du seed. Si l'on veut conserver deux questions de vocabulaire, poser « Comment appelle-t-on le bandeau de texte du narrateur, distinct de la bulle ? » → « Le récitatif ».

### [GRAVE] `cg-litterature-13` — *Maus* et le Pulitzer : troisième occurrence, et l'astuce donne la réponse

- **Où** : notion `cg-litterature-13`.
- **Texte** :
  - astuce du chapitre : « Cette leçon couvre : … ***Maus***, l'œuvre qui a tout changé ».
  - « Quelle distinction *Maus* d'Art Spiegelman a-t-il obtenue en 1992 ? » → « **Le prix Pulitzer** ». Explication : « Elle **représente les Juifs en souris, les nazis en chats** et les Polonais en cochons. »
  - « Quelle bande dessinée d'Art Spiegelman a reçu un **prix Pulitzer** ? » → « ***Maus*** ». Explication : « Elle raconte la Shoah en **représentant les Juifs en souris et les nazis en chats**. »
- **Problème** : le même couple (œuvre, prix) posé dans les deux sens à l'intérieur d'un même chapitre, avec la même explication réécrite ; et l'astuce, affichée à côté, nomme *Maus*. La passe 1 avait déjà relevé une paire *Maus* entre `li2-bande-dessinee` et `li3-romans-graphiques` : le domaine pose donc **trois fois** la même chose, dont deux dans la même notion.
- **Correction proposée** : supprimer la question du seed (« Quelle bande dessinée d'Art Spiegelman a reçu un prix Pulitzer ? ») ; retirer *Maus* de l'astuce (« L'œuvre qui a tout changé »).

### [GRAVE] `cg-litterature-13` — Hergé, Tezuka, la planche, le manga : quatre réponses données par les explications héritées

- **Où** : notion `cg-litterature-13`.
- **Texte** :
  - explication de la question sur Töpffer : « **Hergé lance Tintin en 1929** et fonde l'école franco-belge de **la ligne claire**. » → réponse **et** explication de « Quel auteur belge crée Tintin en 1929 ? » → *Hergé*, « La ligne claire, son style… ». L'énoncé et la justification sont tous deux déjà écrits.
  - énoncé de la question sur *La Nouvelle Île au trésor* : « Quelle œuvre **d'Osamu Tezuka**… » → réponse de « Quel auteur japonais est surnommé le dieu du manga ? ».
  - explication de la même : « Le manga se caractérise par **la lecture de droite à gauche**, l'impression en noir et blanc » → réponse de « Qu'est-ce qu'un manga ? » (« Une bande dessinée japonaise, lue de droite à gauche »).
  - explication de la question sur la gouttière : « **La planche**, enfin, **désigne l'ensemble des cases occupant une page**. » → réponse mot pour mot de « Qu'est-ce qu'une planche en bande dessinée ? » (« Une page complète composée de plusieurs cases »).
- **Problème** : quatre des dix questions versées par la fusion sont résolues d'avance par les explications héritées qui les précèdent dans le chapitre. L'astuce ajoute « **De Töpffer** aux grands journaux illustrés », qui donne la réponse d'une cinquième.
- **Correction proposée** : dans l'explication sur Töpffer, ne pas nommer les distracteurs par ce qui les définit (« Outcault, Hergé et Eisner appartiennent tous à des époques plus tardives ») ; supprimer la dernière phrase de l'explication sur Tezuka et la définition de « planche » dans celle sur la gouttière ; astuce : « Des pionniers du XIXe siècle aux grands journaux illustrés ».

### [GRAVE] `cg-litterature-10` — trois couples de questions réversibles dans une seule notion

- **Où** : notion `cg-litterature-10` « Le roman policier, du crime au thriller » — heritage `lecons/litterature/10.json` + `li2-policier` (`prisma/seed/culture-g/litterature-2.ts:268-289`), fusionnés par `cours/fusions.ts:68`.
- **Texte** :
  - « En quelle année **Marcel Duhamel** fonde-t-il **la Série noire** chez Gallimard ? » → 1945 / « Quelle collection française lancée en **1945** popularise le roman noir ? » → *La Série noire*, explication « Son nom, dû à **Marcel Duhamel**… ». Le fait est en outre redit une troisième fois dans l'explication de la question sur le néo-polar (« Marcel Duhamel a fondé la Série noire en 1945 ») et l'astuce annonce « **La Série noire** et le néo-polar français ».
  - « Quel roman d'**Agatha Christie**, paru en **1926**, l'a imposée au premier rang du genre ? » → *Le Meurtre de Roger Ackroyd*, explication « grâce à un **procédé narratif audacieux qui a longtemps fait débat** » / « Quel roman d'Agatha Christie repose sur **un narrateur inattendu** ? » → *Le Meurtre de Roger Ackroyd*, explication « Sa parution en **1926** fit scandale : certains l'accusèrent de tricher avec le lecteur. » Même réponse, même argument, même date.
  - l'explication de la première ajoute « *La Mystérieuse Affaire de Styles*, en 1920, était son premier roman et **l'entrée en scène d'Hercule Poirot** » → réponse de « Quelle romancière britannique crée **Hercule Poirot** et Miss Marple ? ».
- **Problème** : sur les dix questions du seed versées dans ce chapitre, trois n'ont plus rien à demander.
- **Correction proposée** : supprimer « Quelle collection française lancée en 1945 popularise le roman noir ? » et « Quel roman d'Agatha Christie repose sur un narrateur inattendu ? » ; retirer « et l'entrée en scène d'Hercule Poirot » de l'explication héritée ; astuce : « Le polar français d'après-guerre ».

### [MOYEN] `cg-litterature-10` — les définitions du roman à énigme et du roman noir sont données avant d'être demandées

- **Où** : notion `cg-litterature-10`.
- **Texte** :
  - explication de « Qu'est-ce qui distingue le thriller du roman à énigme ? » : « **Le roman à énigme part d'un crime déjà commis et progresse vers la découverte du coupable** » → réponse de « Qu'est-ce que le roman à énigme ? » (« Un récit centré sur la résolution intellectuelle d'un crime »).
  - explication de « Dans quel type de publication naît le roman noir américain ? » : « montrer un univers violent, **la corruption policière et le crime organisé**, avec un regard pessimiste sur la société… **Dashiell Hammett**… **Raymond Chandler** donnera ensuite à cette veine une véritable ambition littéraire » → réponse de « Qu'est-ce que le roman noir américain ? » (« Un genre décrivant la corruption sociale à travers le crime ») et son explication (« Hammett et Chandler en sont les fondateurs »).
- **Correction proposée** : dans la première explication, remplacer la phrase d'ouverture par « Le thriller met en scène une menace en cours qu'il faut arrêter » ; dans la seconde, s'en tenir au support (les pulps, leur papier, leur prix) sans définir le genre.

### [MINEUR] `cg-litterature-10` — un distracteur sous un titre abandonné

- **Où** : notion `cg-litterature-10`, question « Quel roman d'Agatha Christie repose sur un narrateur inattendu ? »
- **Texte** : distracteur « **Dix Petits Nègres** ».
- **Problème** : le roman est publié en français sous le titre ***Ils étaient dix*** depuis 2020, l'ancien titre ayant été retiré du commerce à la demande des ayants droit. Le faire figurer tel quel dans un contenu d'apprentissage écrit aujourd'hui est daté et évitable.
- **Correction proposée** : « *Ils étaient dix* », ou tout autre titre (« *A.B.C. contre Poirot* »).

### [GRAVE] `cg-litterature-12` — Perrault et 1697 : la question posée dans les deux sens, à la suite

- **Où** : notion `cg-litterature-12` « Les contes et la littérature jeunesse » — heritage `lecons/litterature/12.json` + `li-contes-jeunesse` (`prisma/seed/culture-g/litterature.ts:250-270`), fusionnés par `cours/fusions.ts:33`.
- **Texte** : « En quelle année **Charles Perrault** publie-t-il *Histoires ou contes du temps passé* ? » → **1697** / « Qui publie en **1697** les *Histoires ou contes du temps passé* ? » → **Charles Perrault**. Explications : « réunit huit contes en prose, parmi lesquels « **Cendrillon** », « **Le Petit Chaperon rouge** » et « **Le Chat botté** » » / « **Le Petit Chaperon rouge, Cendrillon et Le Chat botté** y figurent ».
- **Problème** : l'aller-retour parfait — chaque énoncé contient la réponse de l'autre, et les deux explications citent les mêmes trois contes. C'est le doublon le plus visible du domaine une fois la fusion appliquée.
- **Correction proposée** : supprimer la question du seed ; à la place, « Sous quel nom Perrault publie-t-il ses contes en 1697 ? » → « Sous le nom de son fils, Pierre Darmancour ».

### [MOYEN] `cg-litterature-12` — l'astuce et une explication donnent les frères Grimm

- **Où** : notion `cg-litterature-12`.
- **Texte** : astuce : « Cette leçon couvre : … **Charles Perrault** et les contes du temps passé · **Les frères Grimm** et la collecte savante… » ; explication de la question sur leur méthode : « **Jacob et Wilhelm Grimm** ont publié les *Contes de l'enfance et du foyer* en deux volumes, **en 1812** et 1815 » — à comparer à la question du seed « Qui recueille en Allemagne les contes de Blanche-Neige et Hansel et Gretel ? » → « **Les frères Grimm** », explication « Jacob et Wilhelm Grimm, philologues, publient leur recueil **à partir de 1812** ».
- **Problème** : l'astuce nomme les deux réponses du chapitre (Perrault, les frères Grimm) ; l'explication héritée redit exactement l'explication du seed. Deux questions sur quinze deviennent gratuites.
- **Correction proposée** : astuce sans noms propres (« Les contes du temps passé · La collecte savante allemande… ») ; supprimer la question du seed sur les frères Grimm, dont le contenu est déjà entièrement couvert.

### [GRAVE] `cg-litterature-17` — « incunable » : la définition est la réponse de l'autre question

- **Où** : notion `cg-litterature-17` « L'histoire du livre » — heritage `lecons/litterature/17.json` + `li-edition-livre` (`prisma/seed/culture-g/litterature.ts`), fusionnés par `cours/fusions.ts:34`.
- **Texte** : « Comment appelle-t-on **les livres imprimés avant 1501** ? » → « Des **incunables** ». Explication : « **On nomme incunables les livres imprimés avant 1501**… » — et, dans le même chapitre : « Qu'est-ce qu'un **incunable** ? » → « **Un livre imprimé avant 1501** ».
- **Problème** : les deux questions sont la même définition retournée, et l'explication de la première l'énonce mot pour mot dans les termes de la bonne réponse de la seconde. Le cas est invisible dans les fichiers séparés : les deux questions n'ont ni le même énoncé ni la même bonne réponse au sens du validateur de doublons.
- **Correction proposée** : supprimer « Qu'est-ce qu'un incunable ? » ; si l'on veut garder deux questions, poser « Combien d'exemplaires de la Bible à quarante-deux lignes l'atelier de Gutenberg a-t-il produits ? » → « Environ cent quatre-vingts ».

### [MOYEN] `cg-litterature-17` — la Bibliothèque bleue définie dans l'explication de la question précédente

- **Où** : notion `cg-litterature-17`.
- **Texte** : explication de « Comment appelle-t-on les livres imprimés avant 1501 ? » : « Les chapbooks sont des **livrets populaires** anglais **bon marché**, équivalents de **la Bibliothèque bleue** française, **diffusés par colportage**… » — question suivante : « Qu'est-ce que la Bibliothèque bleue ? » → « Une collection de **livres populaires bon marché diffusés par colportage** ».
- **Problème** : la bonne réponse est écrite, presque mot pour mot, dans l'explication qui précède, et jusque dans le distracteur (« Des chapbooks ») de la question d'avant.
- **Correction proposée** : dans l'explication sur les incunables, s'arrêter à « Les chapbooks sont des livrets anglais bien postérieurs à cette période. »

### [GRAVE] `cg-neuf-li-litteratures-monde` — l'astuce est la réponse d'une question, mot pour mot

- **Où** : notion `cg-neuf-li-litteratures-monde` « Les littératures du monde » (`prisma/seed/culture-g/litterature.ts`, `li-litteratures-monde`, augmentée de `li3-litterature-orientale` par `cours/fusions.ts:156` — 20 questions).
- **Texte** : astuce : « **Le Dit du Genji**, écrit vers l'an mille **par une femme de la cour japonaise**, est **souvent tenu pour le premier roman du monde**. » Question : « Quelle œuvre japonaise du XIe siècle est **souvent tenue pour le premier roman du monde** ? » → « **Le Dit du Genji** », explication : « Écrit par Murasaki Shikibu, **dame de la cour** impériale de Heian. »
- **Problème** : l'astuce est affichée avec la question. Elle en reprend la formulation exacte (« souvent tenu pour le premier roman du monde »), donne la bonne réponse et anticipe même l'explication. La question ne teste plus rien.
- **Correction proposée** : changer l'astuce pour un fait qui n'est demandé nulle part dans la notion, p. ex. « Les littératures du monde se lisent surtout en traduction : le choix du traducteur fait partie de l'œuvre que tu lis. »

### [MOYEN] `cg-neuf-li-litteratures-monde` — l'énoncé d'une question donne la réponse d'une autre (haïku)

- **Où** : notion `cg-neuf-li-litteratures-monde`.
- **Texte** : « Quelle forme poétique japonaise compte dix-sept syllabes ? » → « **Le haïku** » (distracteurs : tanka, waka, renga) ; question suivante : « Quel poète japonais du XVIIe siècle a porté **le haïku** à sa maturité ? »
- **Problème** : le mot à trouver est écrit dans l'énoncé de la question voisine, dans le même chapitre.
- **Correction proposée** : « Quel poète japonais du XVIIe siècle a fait de cette forme brève un art, avec *La Sente étroite du Bout-du-Monde* ? »

### [GRAVE] `cg-litterature-11` — *Le Horla* : donné par l'astuce et par l'explication de la question qui précède

- **Où** : notion `cg-litterature-11` « La science-fiction et le fantastique » — heritage `lecons/litterature/11.json` + `li2-science-fiction`, fusionnés par `cours/fusions.ts:67`.
- **Texte** :
  - astuce : « Cette leçon couvre : … Le fantastique, du roman gothique **au Horla** … »
  - explication de « Selon Todorov, qu'est-ce qui définit le fantastique ? » : « **La folie du personnage** joue souvent le rôle d'explication de rechange, ce qui entretient l'ambiguïté, comme dans « **Le Horla** » de Maupassant **paru en 1887**. »
  - question suivante : « Quel roman de Maupassant, **publié en 1887**, est un modèle du récit fantastique fondé sur **le doute et la folie** ? » → « **Le Horla** ».
- **Problème** : le titre, l'auteur, la date et jusqu'au motif (la folie comme explication de rechange) sont donnés deux fois avant que la question ne soit posée. Symétriquement, l'énoncé de la question sur *Le Horla* (« fondé sur le doute ») livre la réponse de la question de Todorov (« L'hésitation entre explication naturelle et surnaturelle »).
- **Correction proposée** : dans l'explication de Todorov, remplacer l'exemple par un autre titre du même chapitre absent des questions (« comme dans *La Vénus d'Ille* de Mérimée ») ; retirer « au Horla » de l'astuce.

### [MOYEN] `cg-litterature-11` — le cyberpunk défini avant d'être demandé

- **Où** : notion `cg-litterature-11`.
- **Texte** : explication de « Qu'apporte la New Wave à la science-fiction ? » : « Il prépare aussi **le cyberpunk** des années 1980, qui délaisse l'espace pour des **mondes urbains saturés d'informatique et dominés par de grandes entreprises**. » — question du seed : « Qu'est-ce que le cyberpunk ? » → « Un courant mêlant **haute technologie et déliquescence sociale** ».
- **Problème** : la définition attendue est déjà donnée, sous d'autres mots mais sans ambiguïté, par une explication du même chapitre. Les trois distracteurs (« humoristique », « postapocalyptique », « spatiale classique ») sont écartés d'avance.
- **Correction proposée** : arrêter l'explication de la New Wave à « Il prépare aussi le cyberpunk des années 1980. »

### [GRAVE] L'astuce donne la réponse littérale d'une de ses propres questions — dans une notion sur trois

- **Où** : champ `tip` des notions du seed (`prisma/seed/culture-g/litterature{,-2,-3}.ts`) et des leçons héritées. J'ai comparé, pour les 62 notions du domaine après fusion, le texte de l'astuce à la bonne réponse de chacune de ses questions. **Vingt notions sur soixante-deux** ont une astuce qui donne au moins une de leurs propres réponses ; dans quatorze cas, elle la donne mot pour mot.
- **Texte** — les cas où l'astuce et la bonne réponse coïncident littéralement :

| Notion | Astuce | Question | Bonne réponse |
|---|---|---|---|
| `li-litterature-anglaise` | « Shakespeare a écrit environ trente-sept pièces et **cent cinquante-quatre sonnets**. » | Combien de sonnets Shakespeare a-t-il écrits ? | **Cent cinquante-quatre** |
| `li-theatre-francais` | « La Comédie-Française naît en **1680** de la fusion de troupes voulue par **Louis XIV**. » | En quelle année la Comédie-Française est-elle fondée ? | **1680** (explication : « Louis XIV fusionne la troupe de Molière… ») |
| `li2-moliere` | « Molière est mort en jouant **Le Malade imaginaire**, mais pas sur scène : **quelques heures après**. » | Quelle pièce Molière jouait-il le soir de sa mort en 1673 ? | **Le Malade imaginaire** (explication : « Il mourut quelques heures après la représentation. ») |
| `li2-litterature-germanique` | « **Faust** a occupé Goethe pendant **près de soixante ans**. » | Quel drame Goethe a-t-il écrit sur près de soixante ans ? | **Faust** |
| `li2-autobiographie` | « **Les Confessions** de Rousseau **inaugurent** l'idée de tout dire sur soi… » | Quel ouvrage de Rousseau inaugure l'autobiographie moderne ? | **Les Confessions** |
| `li2-balzac-realisme` | « Balzac a inventé **le retour des personnages d'un roman à l'autre**… » | Quel procédé Balzac invente-t-il pour relier ses romans ? | **Le retour des mêmes personnages d'un livre à l'autre** |
| `li-figures-style` | « La comparaison montre l'outil de comparaison ; **la métaphore le supprime**. » | Qu'est-ce qu'une métaphore ? | **Une comparaison sans outil de comparaison** |
| `li2-racine-corneille` | « Chez Corneille **le héros choisit son destin** ; chez Racine **la passion le détruit**. » | Quelle différence essentielle sépare le héros cornélien du héros racinien ? | **Le premier maîtrise sa volonté, le second est emporté par la passion** |
| `li3-montaigne-moralistes` | « Les moralistes ne prêchent pas la morale : **ils décrivent les mœurs**. » | Pourquoi parle-t-on de moralistes plutôt que de philosophes ? | **Ils décrivent les mœurs sans construire de système** |
| `li-langues-traduction` | « **Le traducteur est légalement un auteur** : sa traduction est une **œuvre protégée** à part entière. » | Quel statut juridique la loi française reconnaît-elle au traducteur littéraire ? | **Celui d'auteur d'une œuvre dérivée protégée** |
| `li2-litterature-hispanique` | « **Don Quichotte** est souvent tenu pour le premier roman moderne européen. » | Quel roman de Cervantès paraît en deux parties en 1605 et 1615 ? | **Don Quichotte** |
| `li3-roman-contemporain` | « Le roman contemporain français mêle volontiers **enquête**, récit de soi et histoire collective. » | Quelle tendance marque le roman français contemporain ? | **Un fort retour du récit du réel et de l'enquête** |
| `li3-lecture-numerique` | « Le livre numérique **n'a pas remplacé le papier**, contrairement aux prédictions des années 2000. » | Quelle part du marché du livre le numérique représente-t-il en France ? | **Une part minoritaire, autour de dix pour cent** (les trois distracteurs sont « la moitié », « un quart », « moins d'un pour cent » : l'astuce élimine les deux premiers) |
| `li-litteratures-monde` | voir le constat détaillé ci-dessus | Quelle œuvre japonaise du XIe siècle… | **Le Dit du Genji** |

Et, du côté des leçons héritées, où l'astuce est le sommaire des sections : `cg-litterature-c01` (« Réalisme et naturalisme » → « Le réalisme »), `cg-litterature-01` (« Balzac et **La Comédie humaine** »), `cg-litterature-02` (« la bataille d'**Hernani** »), `cg-litterature-03` (« la voix de **Villon** »), `cg-litterature-05` (« **Voltaire**, Rousseau, Diderot » → « Qui est l'auteur de *Candide* ? »), `cg-litterature-06` (« ***À la recherche du temps perdu*** »), `cg-litterature-08` (« ***La Chanson de Roland*** »), `cg-litterature-09` (*L'Iliade*, *L'Odyssée*, Virgile), `cg-litterature-10` (« **La Série noire** »), `cg-litterature-12` (« **Charles Perrault** », « **Les frères Grimm** »), `cg-litterature-13` (« **Töpffer** », « ***Maus*** »).

- **Problème** : l'astuce est affichée en même temps que la question. Dans tous ces cas, elle rend la réponse trouvable sans rien savoir — parfois avec la formulation exacte de la bonne réponse, parfois avec l'explication en prime (`li2-moliere`, `li-theatre-francais`). Deux mécanismes distincts et cumulés : dans le seed, l'astuce est un fait choisi comme « le plus marquant » de la notion — donc précisément celui qu'une question pose ; dans les leçons héritées, c'est le sommaire des sections, qui nomme mécaniquement les œuvres et les auteurs interrogés.
- **Correction proposée** : règle générale — **l'astuce ne doit contenir aucun mot qui figure dans une bonne réponse de sa notion**. Concrètement : dans le seed, faire porter l'astuce sur une méthode ou un piège (« Un genre se définit par sa forme, pas par son sujet », astuce de `li-genres-litteraires`, est le bon modèle : elle aide sans rien donner) ; dans les leçons héritées, remplacer le sommaire des sections par une phrase de méthode, ou en retirer les noms propres.

### [MINEUR] `cg-neuf-li2-prix-litteraires` — l'astuce amorce « dix » pour la mauvaise raison

- **Où** : notion `cg-neuf-li2-prix-litteraires`.
- **Texte** : astuce : « Le prix Goncourt ne rapporte que **dix** euros à son lauréat… » ; question : « Combien de membres compte le jury du prix Goncourt ? » → « **Dix** » (distracteurs : Douze, Sept, Quinze).
- **Problème** : ce n'est pas la même information, mais l'astuce met le mot *dix* sous les yeux de l'apprenant au moment où il doit choisir entre quatre nombres. Il répondra juste sans savoir, et pourra en repartir avec une confusion (dix membres / dix euros).
- **Correction proposée** : astuce « Le Goncourt ne rapporte presque rien à son lauréat : c'est le tirage qui compte. »

### [GRAVE] `cg-litterature-c01` — « manifeste de 1830 » : la question date de 1830 un texte de 1827, et son explication la contredit

- **Où** : notion `cg-litterature-c01` « Les grands mouvements littéraires français » — heritage `lecons/litterature/c01.json` + `li-mouvements-litteraires`, fusionnés par `cours/fusions.ts:30`.
- **Texte** : « Quel **manifeste de 1830** a opposé les romantiques aux classiques lors d'une bataille restée célèbre ? » → « La préface de *Cromwell*, dont la pièce *Hernani* fut l'application ». Explication : « Victor Hugo expose **en 1827** dans la préface de *Cromwell* le programme du drame romantique… La première d'*Hernani*, en février 1830, en fut l'application scénique. »
- **Problème** : la préface de *Cromwell* est de **1827** ; 1830 est la date de la bataille d'*Hernani*, pas celle du manifeste. L'énoncé fusionne les deux et attribue au texte théorique la date de la représentation — et son explication le dément deux lignes plus bas. Un apprenant qui retient l'énoncé retient une date fausse pour le manifeste du romantisme français.
- **Correction proposée** : « Quel manifeste de 1827 a fourni son programme au drame romantique, appliqué sur scène en 1830 lors d'une bataille restée célèbre ? »

### [GRAVE] `cg-litterature-c01` — la règle des trois unités demandée deux fois, mot pour mot

- **Où** : notion `cg-litterature-c01`.
- **Texte** : « Quelle règle du théâtre classique impose une seule action, en un lieu et en une journée ? » → « **La règle des trois unités** » / « Quelle règle domine le théâtre classique du XVIIe siècle ? » → « **La règle des trois unités** ». Explications : « unité d'action, de lieu et de temps… elle vise la concentration dramatique et **la vraisemblance** » / « Unité d'action, de lieu et de temps, au nom de **la vraisemblance et de la bienséance**. »
- **Problème** : bonne réponse identique au caractère près, même définition en explication, dans le même chapitre. La première pose d'ailleurs la définition dans son énoncé (« une seule action, en un lieu et en une journée »), ce qui rend la seconde superflue même sans l'avoir vue.
- **Correction proposée** : supprimer « Quelle règle domine le théâtre classique du XVIIe siècle ? », ou la remplacer par « Quelle règle interdit au théâtre classique de montrer la violence sur scène ? » → « La bienséance ».

### [MOYEN] `cg-litterature-c01` — Breton et 1924 donnés par l'explication de la question sur Apollinaire

- **Où** : notion `cg-litterature-c01`.
- **Texte** : explication de « Quel poète a inventé le mot *surréalisme* et écrit *Alcools* ? » : « **André Breton** le reprit **en 1924** pour baptiser son mouvement. » — question du même chapitre : « Qui publie le Manifeste du surréalisme **en 1924** ? » → « **André Breton** ».
- **Problème** : le nom et l'année sont donnés ensemble, dans la même phrase, avant que la question ne soit posée ; les trois distracteurs (Aragon, Tzara, Éluard) n'ont plus aucune chance d'être choisis.
- **Correction proposée** : « André Breton le reprit sept ans plus tard pour baptiser son mouvement. »

### [MOYEN] `cg-neuf-li2-moliere` — Lully nommé dans l'explication de la question précédente

- **Où** : notion `cg-neuf-li2-moliere` (`prisma/seed/culture-g/litterature-2.ts`).
- **Texte** : explication de « Qu'est-ce qu'une comédie-ballet ? » : « Molière en écrivit plusieurs **avec Lully**, dont *Le Bourgeois gentilhomme*. » — question suivante : « Qui composa la musique de plusieurs pièces de Molière avant de se brouiller avec lui ? » → « **Jean-Baptiste Lully** » (distracteurs : Michel Lambert, Robert Cambert, Marc-Antoine Charpentier).
- **Problème** : la réponse est écrite dans l'explication qui précède, avec le même lien (« la musique des pièces de Molière »). Le chapitre donne par ailleurs *Le Malade imaginaire* trois fois : dans l'astuce, dans cette explication indirectement, et dans celle de la question sur Lully (« Charpentier prit le relais… notamment pour *Le Malade imaginaire* »).
- **Correction proposée** : « Molière en écrivit plusieurs, dont *Le Bourgeois gentilhomme* et *Le Malade imaginaire*. » (sans nommer le compositeur).

### [MOYEN] `cg-neuf-li-theatre-francais` — l'énoncé d'une question nomme la réponse de la précédente

- **Où** : notion `cg-neuf-li-theatre-francais` (`prisma/seed/culture-g/litterature.ts`).
- **Texte** : « Qui fonde le Théâtre national populaire dans sa forme d'après-guerre ? » → « **Jean Vilar** » ; question suivante : « Quel festival de théâtre **Jean Vilar** crée-t-il en 1947 ? » → « Le Festival d'Avignon ».
- **Problème** : le nom à trouver est imprimé dans l'énoncé voisin du même chapitre.
- **Correction proposée** : « Quel festival de théâtre le même homme crée-t-il en Provence en 1947 ? », ou intervertir : « Qui fonde le Festival d'Avignon en 1947 ? » → Jean Vilar, puis « Quelle institution théâtrale populaire Jean Vilar dirige-t-il à partir de 1951 ? » → le TNP.

<!--P2-->

## Ce qui est sain

Le socle factuel est très solide sur les dates et les attributions d'œuvres : sur plus de cinq cents questions, la quasi-totalité des dates de publication, de création et de prix vérifiées tombent juste (Comédie-Française 1680, Molière mort le 17 février 1673 après la quatrième représentation, Cid 1637, Fleurs du mal et Bovary 1857, Goncourt 1919 à Proust, Nobel de Kawabata 1968, Soyinka 1986, Mahfouz 1988, Modiano 2014, Ernaux 2022). Les citations sont exactes et correctement attribuées — « Va, je ne te hais point » à Chimène, « Seul le silence est grand » à Vigny dans *La Mort du loup*, « Je hais les voyages et les explorateurs » à Lévi-Strauss, « À nous deux maintenant ! » avec la précision utile qu'on la cite souvent de mémoire. Les cours sont d'un niveau nettement supérieur à la moyenne du genre : ils expliquent des mécanismes (pourquoi la contrainte oulipienne engendre, pourquoi la métaphore affirme là où la comparaison illustre, pourquoi le détour animalier protège la critique) au lieu de paraphraser leur titre, et plusieurs prennent la peine de signaler ce qui est discuté ou daté (l'hérédité chez Zola, l'opposition Corneille/Racine « forgée par la critique du XIXe siècle », la banalité du mal « souvent citée à contresens »).
