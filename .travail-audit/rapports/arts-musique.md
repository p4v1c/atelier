# Arts & Musique

> ÉTAT : **passe 1 et passe 2 terminées.**
> Lus (passe 1) : les 3 fichiers de questions `.ts` (519 q.), `cours/arts-musique.ts` (43 cours), `heritage/.../arts-musique.json` (58 q. + 3 cours), **les 17 leçons héritées** (85 sections, 85 questions de quiz).
> La passe 2 a relu l'ensemble depuis le début et ajouté une section entière (voir « Ce que la seconde passe a ajouté »), dont le constat le plus lourd du domaine.

## Ce que j'ai lu

| Fichier | Contenu | État |
|---|---|---|
| `prisma/seed/culture-g/arts-musique.ts` | 13 notions, 129 questions | lu (passe 1) |
| `prisma/seed/culture-g/arts-musique-2.ts` | 20 notions, 200 questions | lu (passe 1) |
| `prisma/seed/culture-g/arts-musique-3.ts` | 19 notions, 190 questions | lu (passe 1) |
| `prisma/seed/culture-g/cours/arts-musique.ts` | 43 cours (sur 52 notions) | lu (passe 1) |
| `heritage/culture-g/data/arts-musique.json` | 58 questions + 3 cours (+ **15 questions de quiz de cours**, lues en passe 2) | lu |
| `heritage/.../lecons/arts-musique/01..17.json` | 17 leçons, 85 sections, 85 questions | lu (passe 1) |

Total : **677 questions** écrites (dont 675 réellement servies : deux sont supprimées au chargement, voir passe 2)

Détail passe 1 : **662 questions** (519 seed + 58 héritées + 85 de quiz de leçons) et **63 cours/leçons** (43 cours de seed + 3 cours hérités + 17 leçons héritées, soit 85 sections supplémentaires) réellement parcourus.

Vérification préalable faite avant de juger les QCM : dans les trois fichiers `.ts`, la bonne réponse est **toujours** au rang 0. Ce n'est pas un défaut : `src/modules/kinds/melange.ts` (`melangerPropositions`) repermute les propositions de façon déterministe à l'affichage, et c'est la convention de **tous** les domaines du dépôt. Aucun constat là-dessus.

Autre point non retenu : les fichiers `.ts` emploient l'apostrophe droite `'` et non l'apostrophe courbe `’`. C'est uniforme sur tout le dépôt (code source TypeScript) ; les JSON hérités, eux, emploient bien `’` et les guillemets `« »`. Ce n'est donc pas un défaut propre à Arts & Musique.

---

## Constats

Constats de la passe 1 : **13 GRAVE**, **15 MOYEN**, **20 MINEUR**.
La passe 2 ajoute **1 GRAVE nouveau** (le doublon massif), **1 MOYEN**, **1 MINEUR**, et **aggrave un GRAVE existant** — le tout réuni dans la section « Ce que la seconde passe a ajouté », pour qu'on voie ce qu'une relecture a rattrapé.
Total du domaine : **14 GRAVE**, **16 MOYEN**, **21 MINEUR**, plus une confirmation croisée.

**— Gravité GRAVE —**

### [GRAVE] Véronèse : l'Inquisition l'a convoqué pour un autre tableau que Les Noces de Cana
- **Où** : `prisma/seed/culture-g/arts-musique-2.ts:~127` — `am2-renaissance-italienne`
- **Texte** : « Quel peintre vénitien réalise d'immenses toiles décoratives comme Les Noces de Cana ? » — explication : « Convoqué par l'Inquisition pour cette toile, il se contenta d'en changer le titre. »
- **Problème** : la réponse (Véronèse) est juste, mais l'explication est fausse. Véronèse a été convoqué par l'Inquisition en **1573** pour une *Cène* peinte pour le couvent des Saints-Jean-et-Paul, qu'il a rebaptisée **Le Repas chez Lévi**. Les Noces de Cana (1563, aujourd'hui au Louvre) n'ont donné lieu à aucun procès. Le « changement de titre » est précisément ce qui distingue le second tableau ; l'attribuer au premier apprend une erreur.
- **Correction proposée** : « Convoqué par l'Inquisition en 1573 pour une autre toile, une Cène, il se contenta d'en changer le titre : ce fut Le Repas chez Lévi. »

### [GRAVE] Aïda n'a pas inauguré l'opéra khédivial du Caire
- **Où** : `heritage/culture-g/data/arts-musique.json` — question 56 (« Quel compositeur italien est l'auteur des opéras La Traviata, Rigoletto et Aïda ? »)
- **Texte** : « “Aïda” fut créée au Caire en 1871, à l'occasion de l'inauguration du nouvel opéra khédivial. »
- **Problème** : erreur de fait très répandue. L'Opéra khédivial du Caire a été **inauguré le 1er novembre 1869**, avec *Rigoletto*, pour les fêtes du canal de Suez. *Aïda*, commandée pour cette maison, n'y a été créée que le **24 décembre 1871**, deux ans après l'inauguration. La causalité donnée est fausse.
- **Correction proposée** : « “Aïda” fut créée au Caire le 24 décembre 1871, à l'opéra khédivial inauguré deux ans plus tôt pour les fêtes du canal de Suez. »

### [GRAVE] « La Bohème » : la musique est d'Aznavour, les paroles de Jacques Plante
- **Où** : `heritage/culture-g/data/arts-musique.json` — question 46
- **Texte** : « “La Bohème”, sur une musique de Jacques Plante pour les paroles, date de 1965 »
- **Problème** : double défaut. (1) Erreur d'attribution : la **musique est de Charles Aznavour**, les **paroles de Jacques Plante** — le texte inverse les rôles. Or l'énoncé demande justement qui est « l'auteur de La Bohème ». (2) La phrase est incompréhensible en l'état (« sur une musique de X pour les paroles »).
- **Correction proposée** : « “La Bohème”, dont il a composé la musique sur des paroles de Jacques Plante, date de 1965 et évoque avec nostalgie le Montmartre des peintres. »

### [GRAVE] Doublon franc : la question du « un pour cent artistique » posée deux fois
- **Où** : `prisma/seed/culture-g/arts-musique.ts:~330` (`am-marche-art`) et `prisma/seed/culture-g/arts-musique-3.ts:~110` (`am3-sculpture-contemporaine`)
- **Texte 1** : « Qu'est-ce que le un pour cent artistique en France ? » → « L'obligation de consacrer un pour cent du coût d'une construction publique à une œuvre » — explication : « Institué en 1951, il a permis d'installer plus de douze mille œuvres… »
- **Texte 2** : « Qu'est-ce que le Un pour cent artistique appliqué à la sculpture ? » → « Une obligation de consacrer une part du budget d'une construction publique à une œuvre » — explication : « Plus de douze mille œuvres ont été installées en France depuis 1951. »
- **Problème** : même question, même réponse, même chiffre, même date. Le validateur de doublons compare l'énoncé normalisé et laisse passer la reformulation. Le fait est en outre répété une troisième fois dans le cours `am-marche-art` (« depuis 1951… des milliers d'œuvres ») et une quatrième dans `am3-art-espace-public`.
- **Correction proposée** : supprimer la question de `arts-musique-3.ts` et la remplacer par une question propre à la sculpture publique (par exemple sur la procédure de commande, ou sur l'obligation de concours pour les montants élevés).

### [GRAVE] Question à deux réponses : Léo Ferré / Jean Ferrat
- **Où** : `prisma/seed/culture-g/arts-musique-2.ts:~318` — `am2-chanson-francaise`
- **Texte** : « Quel chanteur a mis en musique Aragon et défendu une chanson politique ? » → « Léo Ferré ». Explication : « **Jean Ferrat a également beaucoup chanté Aragon.** Les deux se réclamaient d'un engagement assumé. »
- **Problème** : Jean Ferrat figure dans les distracteurs, et l'explication reconnaît elle-même qu'il satisfait à l'énoncé. L'énoncé ne contient rien qui départage les deux. La question est insoluble pour qui sait.
- **Correction proposée** : rendre l'énoncé discriminant, par exemple « Quel chanteur a mis en musique Baudelaire, Rimbaud, Verlaine et Aragon, et publié un manifeste anarchiste ? » → Léo Ferré ; ou retirer Jean Ferrat des propositions et poser la question sur un poète que Ferré est seul à avoir chanté (Rutebeuf, Apollinaire).

### [GRAVE] Question à deux réponses : le compositeur devenu sourd
- **Où** : `prisma/seed/culture-g/arts-musique.ts:~130` — `am-musique-classique`
- **Texte** : « Quel compositeur devient sourd tout en continuant à composer ? » → « Ludwig van Beethoven » ; distracteurs : Schubert, Schumann, **Bedřich Smetana**.
- **Problème** : Smetana est devenu **totalement sourd en 1874** et a composé *Má vlast* (dont *La Moldau*) et ses quatuors après cette date. Le distracteur est aussi vrai que la réponse attendue. (Gabriel Fauré, absent ici, serait un troisième cas.)
- **Correction proposée** : préciser l'énoncé — « Quel compositeur a créé sa Neuvième Symphonie alors qu'il n'entendait plus ? » — ou remplacer Smetana par un compositeur non concerné (Mendelssohn, Weber).

### [GRAVE] Question à deux réponses : la chanteuse française « à l'international »
- **Où** : `prisma/seed/culture-g/arts-musique-2.ts:~322` — `am2-chanson-francaise`
- **Texte** : « Quelle chanteuse a incarné la chanson française à l'international dans les années 1960 ? » → « Barbara » ; distracteurs : Sylvie Vartan, Françoise Hardy, **Dalida**. Explication : « Auteure, compositrice et interprète, elle est l'une des rares femmes à avoir maîtrisé les trois rôles à l'époque. »
- **Problème** : l'explication ne justifie pas l'énoncé — elle justifie « auteure-compositrice-interprète », pas « à l'international ». Or Dalida (qui a chanté en une dizaine de langues et vendu partout en Europe, au Moyen-Orient et en Amérique latine) et Françoise Hardy sont, sur le critère de l'énoncé, des réponses au moins aussi défendables. Barbara, précisément, est restée une figure française.
- **Correction proposée** : aligner l'énoncé sur l'explication : « Quelle chanteuse française des années 1960 écrivait à la fois les paroles, la musique et interprétait ses chansons ? » → Barbara.

---

### [GRAVE] Le quota de chansons francophones n'est pas de la loi Toubon
- **Où** : `prisma/seed/culture-g/arts-musique-2.ts:~330` — `am2-chanson-francaise`
- **Texte** : « Instauré par la loi Toubon de 1994, il a été assoupli depuis… »
- **Problème** : le quota de 40 % de chansons d'expression française à la radio résulte de la **loi Carignon du 1er février 1994** (amendement Pelchat), qui modifie la loi de 1986 sur l'audiovisuel. La **loi Toubon du 4 août 1994** porte sur l'emploi de la langue française (publicité, notices, enseignement, travail) et n'institue aucun quota radiophonique. Confusion courante, mais c'est bien une erreur d'attribution législative. **Vérifié** : loi n° 94-88 du 1er février 1994 (Carignon), amendement Pelchat, modifiant la loi du 30 septembre 1986 — distincte de la loi Toubon du 4 août 1994 sur l'emploi de la langue française.
- **Correction proposée** : « Instauré en 1994 par l'amendement Pelchat à la loi sur l'audiovisuel, il a été assoupli depuis pour tenir compte de la diversité des formats. »

### [GRAVE] Le « Prométhée » de Nicolas-Sébastien Adam est de 1762, pas de 1737
- **Où** : `heritage/culture-g/data/lecons/arts-musique/08.json` — section « Rubens, Vélasquez et la diffusion européenne »
- **Texte** : « le “Prométhée” de Nicolas-Sébastien Adam, **daté de 1737**, est aujourd'hui conservé au Louvre »
- **Problème** : erreur de date, vérifiée. Le marbre *Prométhée enchaîné* du Louvre est le **morceau de réception** présenté à l'Académie royale le **26 juin 1762** et exposé au Salon de 1763. Le sujet lui avait été imposé par Guillaume Coustou en 1735 ; ce qui existe autour de 1737, c'est le modèle en terre cuite, conservé au musée Lorrain de Nancy — pas le marbre du Louvre. La phrase associe donc la date d'une esquisse à l'œuvre d'un autre musée.
- **Correction proposée** : « le “Prométhée enchaîné” de Nicolas-Sébastien Adam, morceau de réception présenté à l'Académie en 1762, est aujourd'hui conservé au Louvre ».
- *Sources* : [Wikipédia — Prométhée enchaîné (statue)](https://fr.wikipedia.org/wiki/Prom%C3%A9th%C3%A9e_encha%C3%AEn%C3%A9_(statue)), [Louvre — collections](https://collections.louvre.fr/en/ark:/53355/cl010091953), [musée Lorrain, Nancy](https://musee-lorrain.nancy.fr/en/the-collections/major-works/major-work?tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5Bnews%5D=629)

### [GRAVE] Le Baiser de Rodin : le marbre de Copenhague n'est pas de 1886
- **Où** : `heritage/culture-g/data/lecons/arts-musique/10.json` — section « Rodin et la renaissance de la sculpture »
- **Texte** : « “Le Baiser”, dont la **version en marbre de 1886** se trouve à la Ny Carlsberg Glyptotek de Copenhague »
- **Problème** : erreur de date, vérifiée, et confusion entre trois marbres distincts. Le groupe existe en plâtre vers 1882 ; le **premier marbre**, commandé par l'État en 1888, est achevé en 1898 et conservé au **musée Rodin**. Celui de la **Ny Carlsberg Glyptotek**, commandé par Carl Jacobsen et taillé par le praticien Emmanuel Dolivet, date de **1901-1904**. Aucun marbre du Baiser n'est daté de 1886.
- **Correction proposée** : « “Le Baiser”, dont le premier marbre, achevé en 1898, est conservé au musée Rodin, une autre version ayant été taillée vers 1901-1904 pour la Ny Carlsberg Glyptotek de Copenhague ».
- *Sources* : [Wikipédia — Le Baiser (Rodin)](https://fr.wikipedia.org/wiki/Le_Baiser_(Rodin)), [musée d'Orsay — Le Baiser](https://www.musee-orsay.fr/en/artworks/le-baiser-7691)

### [GRAVE] Île de Pâques : en 1722, les moai étaient encore debout
- **Où** : `heritage/culture-g/data/lecons/arts-musique/12.json` — section « Les moai de l'île de Pâques… » **et** explication du quiz Q5 (le fait est donc appris deux fois)
- **Texte** : « Lors du contact européen, en 1722, **la plupart des statues avaient déjà été renversées** par des séismes, des tsunamis ou des troubles internes. »
- **Problème** : erreur de fait, vérifiée, et inversion chronologique. À son arrivée le dimanche de Pâques 1722, l'équipage de Roggeveen décrit au contraire **les moai côtiers debout sur leurs ahu**, tournés vers l'intérieur. Le renversement (*huri moai*) s'étale **après** ce contact : Cook en 1774 en voit certains à terre, Lisianski n'en compte plus que vingt debout en 1804, Dupetit-Thouars quatre en 1838. Le texte fait donc de la conséquence une cause antérieure.
- **Correction proposée** : « Lors du contact européen, en 1722, les statues côtières étaient encore debout ; c'est au cours du siècle suivant, lors de troubles internes appelés *huri moai*, qu'elles furent presque toutes renversées — quatre seulement tenaient encore en 1838. »
- *Sources* : [Moai — New World Encyclopedia](https://www.newworldencyclopedia.org/entry/Moai), [easterisland.travel — Moai statues](https://www.easterisland.travel/easter-island-facts-and-info/moai-statues/)

### [GRAVE] Anna Maria Luisa de Médicis : la clause est du pacte de famille de 1737, pas d'un « testament de 1743 »
- **Où** : `heritage/culture-g/data/lecons/arts-musique/17.json` — section « De la collection princière au musée public », **et** énoncé + explication du quiz Q5 (« Que prévoyait le testament rédigé en 1743 par Anna Maria Luisa de Médicis ? »)
- **Texte** : « à la suite du **testament rédigé en 1743** par Anna Maria Luisa de Médicis, qui exigeait que les œuvres de la famille demeurent toutes et toujours dans la ville de Florence »
- **Problème** : erreur de fait, vérifiée. La clause célèbre figure à l'article 3 du **Patto di Famiglia signé le 31 octobre 1737** avec François-Étienne de Lorraine, confirmé par le **testament du 5 avril 1739**. 1743 est l'année de la **mort** d'Anna Maria Luisa (18 février 1743) — donc la date d'entrée en vigueur du pacte, pas celle de sa rédaction. L'erreur est répétée dans l'explication et intégrée à l'énoncé du QCM, ce qui la rend impossible à corriger sans réécrire la question.
- **Correction proposée** : énoncé — « Que prévoyait le pacte de famille signé en 1737 par Anna Maria Luisa de Médicis ? » ; explication — « Dernière héritière des Médicis, elle obtient en 1737, par le Patto di Famiglia, que les œuvres de la famille demeurent toutes et toujours à Florence ; la clause entre en vigueur à sa mort, en 1743. »
- *Source* : [Wikipédia — Anna Maria Luisa de' Medici](https://en.wikipedia.org/wiki/Anna_Maria_Luisa_de%27_Medici)

### [GRAVE] Le dernier concert de Brel n'est ni le 6 octobre 1966 ni à l'Olympia
- **Où** : `heritage/culture-g/data/lecons/arts-musique/16.json` — section « Brassens et Brel… », **et** quiz Q4 dont c'est la bonne réponse (« À l'Olympia, le 6 octobre 1966 »)
- **Texte** : « il donne son **dernier concert officiel à l'Olympia le 6 octobre 1966** »
- **Problème** : double erreur de fait, vérifiée. (1) Le 6 octobre 1966 est la date d'**ouverture** de sa série à l'Olympia ; les « Adieux à l'Olympia » filmés le sont les **28 et 29 octobre 1966**. (2) Surtout, ce n'est pas son dernier concert : Brel a honoré ses contrats jusqu'à une tournée d'adieu qui s'achève le **16 mai 1967 à Roubaix** — après quoi il n'a plus jamais chanté devant un public. La question de QCM enseigne donc une date fausse comme bonne réponse.
- **Correction proposée** : énoncé — « Quand Jacques Brel a-t-il donné son tout dernier concert ? » → « À Roubaix, le 16 mai 1967 » ; explication — « Il avait fait ses adieux à l'Olympia fin octobre 1966, mais honora ses engagements jusqu'à Roubaix, le 16 mai 1967 : il avait alors trente-huit ans. »
- *Sources* : [Fondation Jacques Brel — Les Adieux à l'Olympia](https://fondationbrel.be/oeuvre/les-adieux-a-lolympia/), [L'Avenir — cinquante ans après son dernier concert à Roubaix](https://lavenir.net/cnt/dmf20170516_01004970/il-y-a-50-ans-brel-stoppait-sa-carriere-double-concert)
- **Conséquence pour un autre constat** : ces dates confirment le constat [MOYEN] « Brel n'a pas quitté la scène à trente-neuf ans » (`arts-musique-2.ts`) — il avait **37 ans** aux adieux de l'Olympia et **38 ans** à Roubaix. Aucune lecture ne donne trente-neuf.

**— Gravité MOYEN —**

### [MOYEN] ✅ Le Boléro : « un unique thème », et deux comptes différents
- **Où** : `prisma/seed/culture-g/cours/arts-musique.ts` (`am2-musique-xxe`, section « Sortir de la tonalité… ») ; `prisma/seed/culture-g/arts-musique-2.ts` (`am2-musique-xxe`) ; `heritage/culture-g/data/arts-musique.json` q. 40
- **Texte cours** : « repose sur un unique thème répété **une quinzaine de fois** en crescendo » — **Texte héritage** : « un unique thème répété **dix-huit fois** »
- **Problème** : deux imprécisions cumulées. (1) Le *Boléro* comporte **deux** thèmes (A et B) qui alternent, neuf expositions chacune ; « un unique thème » est une simplification fautive répétée dans trois fichiers. (2) Les deux jeux de données ne donnent pas le même chiffre (15 vs 18) ; le bon est **18**.
- **Correction proposée** : « repose sur deux thèmes alternés, exposés dix-huit fois au total sur un ostinato de caisse claire, en un crescendo continu ».
- **Fait** : corrigé dans les trois fichiers (`cours/arts-musique.ts`, `arts-musique-2.ts`, `heritage/.../arts-musique.json`) : « deux thèmes alternés, exposés dix-huit fois au total ».

### [MOYEN] ✅ Georges de La Tour : « deux siècles » dans le cours, « trois siècles » dans la question
- **Où** : `prisma/seed/culture-g/cours/arts-musique.ts` (`am2-baroque-classicisme`, section « La France et l'Espagne ») vs `prisma/seed/culture-g/arts-musique-2.ts` (`am2-baroque-classicisme`)
- **Texte cours** : « Oublié pendant **deux siècles**, il n'est redécouvert qu'en 1915. » — **Texte question** : « Oublié pendant **trois siècles**, il a été redécouvert au début du XXe siècle. »
- **Problème** : contradiction directe entre le cours et la question de la même notion. La Tour meurt en 1652, Hermann Voss le réattribue en 1915 : cela fait **deux siècles et demi**, et « trois siècles » est la formulation la moins exacte des deux.
- **Correction proposée** : harmoniser sur « oublié pendant deux siècles et demi, il n'est redécouvert qu'en 1915 » dans les deux textes.
- **Fait** : harmonisé sur « deux siècles et demi » dans le cours et dans la question.

### [MOYEN] ✅ Les portes du baptistère : le concours de 1401 n'est pas celui des « portes du Paradis »
- **Où** : `prisma/seed/culture-g/arts-musique-2.ts:~104` — `am2-renaissance-italienne`
- **Texte** : « Qui réalise les portes du baptistère de Florence après un concours de 1401 ? » → Ghiberti — « Michel-Ange les surnomma les portes du Paradis. »
- **Problème** : la réponse est juste, l'explication conflate deux commandes distinctes. Le concours de 1401 porte sur les portes **nord** (exécutées 1403-1424). Les « portes du Paradis » sont les portes **est**, commandées en 1425 et achevées en 1452, sans concours. Le surnom ne s'applique donc pas à « ces » portes-là.
- **Correction proposée** : « Il exécuta d'abord les portes nord, puis obtint sans concours les portes est, que Michel-Ange surnomma les portes du Paradis. »
- **Fait** : explication remplacée par le texte proposé.

### [MOYEN] ✅ Le David de Donatello ne précède pas celui de Michel-Ange « d'un siècle »
- **Où** : `prisma/seed/culture-g/arts-musique-2.ts:~106` — `am2-renaissance-italienne`
- **Texte** : « Première statue nue autonome depuis l'Antiquité, elle précède d'un siècle celle de Michel-Ange. »
- **Problème** : le David de bronze de Donatello est daté, selon les hypothèses, des années 1430 à 1460 ; celui de Michel-Ange de 1501-1504. L'écart est donc de **quarante à soixante-dix ans**, pas d'un siècle. Le chiffre rond est faux dans tous les scénarios de datation.
- **Correction proposée** : « Première statue nue autonome depuis l'Antiquité, elle précède d'une cinquantaine d'années celle de Michel-Ange. »
- **Fait** : « d'un siècle » remplacé par « d'une cinquantaine d'années ».

### [MOYEN] ✅ Le hip-hop « genre le plus écouté au monde » : affirmation datée et non sourcée
- **Où** : `prisma/seed/culture-g/cours/arts-musique.ts` — `am-musiques-actuelles`, section « Hip-hop et électro »
- **Texte** : « C'est aujourd'hui le genre le plus écouté au monde. »
- **Problème** : chiffre sans date présenté comme un fait stable. Les classements de consommation dépendent du périmètre (États-Unis / monde) et de la source ; le rap domine certaines années le marché américain, mais la pop reste en tête à l'échelle mondiale dans la plupart des mesures. Exactement le cas visé par la consigne : « un chiffre sans date alors qu'il a changé ».
- **Correction proposée** : « C'est devenu, dans les années 2010, l'un des genres les plus écoutés au monde, en tête de la consommation aux États-Unis. »
- **Fait** : phrase remplacée telle quelle.

### [MOYEN] ✅ Le bombardement de Guernica attribué à la seule aviation allemande dans le cours
- **Où** : `prisma/seed/culture-g/cours/arts-musique.ts` — `am-peinture-moderne`, section « Le choc des avant-gardes »
- **Texte** : « dénonçant le bombardement d'une ville basque **par l'aviation allemande** pendant la guerre d'Espagne »
- **Problème** : cause unique donnée à un événement qui en a plusieurs. Le bombardement du 26 avril 1937 a été mené par la **légion Condor allemande et l'Aviazione Legionaria italienne**. Le fichier hérité (`arts-musique.json`, q. 5) le dit correctement — le cours est donc en retrait par rapport à sa propre source.
- **Correction proposée** : « … par la légion Condor allemande et l'aviation italienne, aux côtés des franquistes ».
- **Fait** : corrigé dans le cours.

### [MOYEN] ✅ « Ornement et crime » n'a pas été publié en 1908
- **Où** : `prisma/seed/culture-g/arts-musique.ts:~33` — `am-architecture-styles`
- **Texte** : « Adolf Loos **publie** Ornement et crime en 1908. »
- **Problème** : la date de 1908 est traditionnelle mais réfutée. Le texte est une **conférence donnée en 1910**, publiée en français en 1913 dans *Les Cahiers d'aujourd'hui*, puis en allemand en 1929. Le verbe « publie » associé à 1908 cumule les deux erreurs. *(Incertitude : moyenne — la littérature ancienne donne encore 1908 ; la datation de 1910 est établie par Christopher Long, 2009.)*
- **Correction proposée** : « Adolf Loos prononce Ornement et crime en 1910. Le Bauhaus, fondé en 1919, en fera une école. »
- **Fait** : « publie … en 1908 » remplacé par « prononce … en 1910 ».

### [MOYEN] ✅ Bauhaus : « avant Mies van der Rohe » n'est discriminant que si l'on connaît la nationalité de Hannes Meyer
- **Où** : `prisma/seed/culture-g/arts-musique-2.ts:~372` — `am2-architecture-contemporaine`
- **Texte** : « Quel architecte allemand a dirigé le Bauhaus avant Mies van der Rohe ? » → Gropius ; distracteur : **Hannes Meyer**.
- **Problème** : Hannes Meyer a dirigé le Bauhaus **immédiatement avant** Mies (1928-1930) : il satisfait littéralement l'énoncé mieux que Gropius (1919-1928). Seul l'adjectif « allemand » le disqualifie — Meyer était suisse — ce qui est une finesse que l'apprenant n'a aucune raison de connaître, et qui n'est expliquée nulle part. Le cours (`am2-architecture-contemporaine`) dit d'ailleurs correctement « le dirige avant Hannes Meyer puis Mies van der Rohe ».
- **Correction proposée** : « Quel architecte a **fondé** le Bauhaus et l'a dirigé jusqu'en 1928 ? » → Walter Gropius, et compléter l'explication : « Hannes Meyer, suisse, lui succéda, puis Mies van der Rohe. »
- **Fait** : énoncé et explication remplacés comme proposé, dans `arts-musique-2.ts`.

### [MOYEN] ⏭️ Deux distracteurs qui désignent les mêmes personnes
- **Où** : `prisma/seed/culture-g/arts-musique-3.ts:~470` — `am3-art-espace-public`
- **Texte** : « Quel couple d'artistes a empaqueté le Pont-Neuf et l'Arc de triomphe ? » — propositions : « Christo et Jeanne-Claude », « Gilbert et George », « **Les Poirier** », « **Anne et Patrick Poirier** ».
- **Problème** : « Les Poirier » et « Anne et Patrick Poirier » sont **la même chose**. Deux propositions redondantes réduisent de fait le QCM à trois choix et signalent à l'apprenant attentif qu'aucune des deux n'est la bonne. Le validateur (`src/modules/kinds/qcm.ts`) ne détecte que les doublons de chaîne exacte, ce qui laisse passer le cas.
- **Correction proposée** : remplacer « Les Poirier » par un autre duo plausible, par exemple « Ilya et Emilia Kabakov ».
- **Fait** : rien à faire — les propositions actuelles sont déjà « Christo et Jeanne-Claude », « Gilbert et George, artistes britanniques », « Pierre et Gilles, photographes », « Anne et Patrick Poirier, sculpteurs » : le doublon a disparu (correction déjà appliquée avant mon passage).

### [MOYEN] ✅ Vermeer : « une trentaine » dans la question, « une quarantaine » dans le cours
- **Où** : `prisma/seed/culture-g/arts-musique-2.ts` (`am2-baroque-classicisme`) vs `prisma/seed/culture-g/cours/arts-musique.ts` (même slug, section « Le Nord : ateliers, marchands et intérieurs »)
- **Texte** : question — « Une trentaine de tableaux seulement lui sont attribués avec certitude » ; cours — « Vermeer, à Delft, peint peu — une quarantaine de toiles connues ».
- **Problème** : incohérence cours ↔ question sur un chiffre. Le corpus admis est de **34 à 36** toiles : « une trentaine » est juste, « une quarantaine » est haut.
- **Correction proposée** : harmoniser sur « une trentaine de toiles » dans le cours.
- **Fait** : « une quarantaine » remplacé par « une trentaine » dans le cours.

### [MOYEN] ✅ Brel n'a pas quitté la scène « à trente-neuf ans »
- **Où** : `prisma/seed/culture-g/arts-musique-2.ts:~310` — `am2-chanson-francaise`
- **Texte** : « Il a cessé la scène à trente-neuf ans, au sommet de sa carrière. »
- **Problème** : Brel est né le 8 avril 1929 ; son dernier récital a lieu le **16 mai 1967** à Roubaix — il a **38 ans**. Le fichier hérité (`arts-musique.json`, q. 45) donne d'ailleurs correctement « Il mit fin à sa carrière de scène en 1967 ». Les deux jeux de données ne concordent donc pas.
- **Correction proposée** : « Il a cessé la scène en 1967, à trente-huit ans, au sommet de sa carrière. »
- **Fait** : phrase remplacée telle quelle dans `arts-musique-2.ts`.

### [MOYEN] ✅ Les Beatles : la séparation précède la sortie de *Let It Be*
- **Où** : `heritage/culture-g/data/arts-musique.json` — question 22
- **Texte** : « La séparation est annoncée en 1970, **après** l'album “Let It Be”. »
- **Problème** : chronologie inversée. McCartney annonce son départ le **10 avril 1970** ; l'album *Let It Be* paraît le **8 mai 1970**. La séparation a été annoncée *avant* la sortie de l'album (dont l'enregistrement, lui, datait de janvier 1969).
- **Correction proposée** : « La séparation est annoncée en avril 1970, peu avant la parution de “Let It Be”, dernier album publié du groupe. »
- **Fait** : phrase remplacée telle quelle.

---

### [MOYEN] ✅ Le Serment des Horaces : 1784 dans le cours hérité, 1785 dans la leçon 09
- **Où** : `heritage/culture-g/data/arts-musique.json` (cours « Les grands mouvements de la peinture occidentale », section « Du néoclassicisme au réalisme ») vs `heritage/.../lecons/arts-musique/09.json` (section « Jacques-Louis David… » **et** explication du quiz Q2)
- **Texte** : cours — « David en donne le manifeste avec “Le Serment des Horaces” **en 1784** » ; leçon 09 — « “Le Serment des Horaces”, **peint en 1785** » (répété deux fois).
- **Problème** : contradiction entre deux fichiers du même cahier. La toile est signée et datée **1784** (peinte à Rome) ; 1785 est l'année de sa présentation au Salon. La leçon 09 confond exécution et exposition, et se contredit avec le cours qui l'accompagne.
- **Correction proposée** : « “Le Serment des Horaces”, peint à Rome en 1784 et exposé au Salon de 1785 ».
- **Fait** : la leçon 09 corrigée aux deux occurrences (texte de section et explication du quiz) ; le cours hérité disait déjà 1784, inchangé.

### [MOYEN] ✅ Datation des moai : « XIIe-XVIIe » dans le seed, « XIIIe-XVe » dans la leçon
- **Où** : `prisma/seed/culture-g/arts-musique-3.ts` (`am3-arts-afrique-oceanie`) vs `heritage/.../lecons/arts-musique/12.json`
- **Texte** : seed — « taillés dans le tuf volcanique **entre les XIIe et XVIIe siècles** » ; leçon 12 — « sculptés **entre le XIIIe et le XVe siècle** » (repris à l'identique dans l'explication du quiz).
- **Problème** : contradiction directe entre les deux jeux de données sur la même donnée. La fourchette admise est **XIIIe-XVe siècle** ; celle du seed déborde d'un siècle de chaque côté. *(Ce constat remplace et précise la remarque MINEUR sur les moai formulée plus haut : ce n'est pas une simple imprécision, c'est une incohérence interne au domaine.)*
- **Correction proposée** : aligner le seed sur « entre les XIIIe et XVe siècles ».
- **Fait** : `arts-musique-3.ts` aligné sur « entre les XIIIe et XVe siècles » (corrige aussi le MINEUR « Moai : fourchette de datation trop large » plus bas, qui portait sur exactement le même texte).

### [MOYEN] ✅ L'ouverture du Japon : 1854 dans la leçon 04, 1858 dans la leçon 11
- **Où** : `heritage/.../lecons/arts-musique/04.json` (section « Un héritage mondial ») vs `heritage/.../lecons/arts-musique/11.json` (section « Le Japon… » **et** quiz Q5, dont c'est la réponse)
- **Texte** : leçon 04 — « les estampes japonaises, découvertes en Europe après **l'ouverture du Japon en 1854** » ; leçon 11 — « Après **l'ouverture forcée du Japon au commerce occidental en 1858** ».
- **Problème** : les deux dates renvoient à des traités différents — la convention de Kanagawa (1854), qui ouvre des ports aux relations diplomatiques, et le traité Harris (1858), qui ouvre le commerce — mais aucun des deux textes ne le dit. L'apprenant qui lit les deux leçons voit deux dates contradictoires pour le même événement, et l'une d'elles est la bonne réponse d'un QCM.
- **Correction proposée** : harmoniser en explicitant — « après l'ouverture du Japon, amorcée par la convention de Kanagawa en 1854 et étendue au commerce par le traité de 1858 ».
- **Fait** : leçon 04 explicitée aux deux endroits (texte de section et explication du quiz Q5) avec les deux dates ; leçon 11, déjà correcte (1858, commerce), laissée inchangée.

**— Gravité MINEUR —**

### [MINEUR] ✅ Le « C » de la mesure à quatre quarts n'est pas une abréviation
- **Où** : `prisma/seed/culture-g/arts-musique.ts:~228` — `am-theorie-musicale`
- **Texte** : « notée parfois C, abréviation historique du tempus imperfectum »
- **Problème** : le signe n'est pas une abréviation mais un **demi-cercle**, cercle brisé de la notation mensuraliste indiquant le *tempus imperfectum* (par opposition au cercle plein du *tempus perfectum*). L'explication corrige à moitié la légende du « C de common time » tout en en introduisant une autre.
- **Correction proposée** : « notée parfois C, qui n'est pas une lettre mais le demi-cercle du tempus imperfectum de la notation médiévale ».
- **Fait** : phrase remplacée telle quelle.

### [MINEUR] ✅ « Il dépasse habituellement les huit millions de visiteurs annuels avant la pandémie »
- **Où** : `prisma/seed/culture-g/arts-musique.ts:~272` — `am-musees-patrimoine`
- **Problème** : phrase mal construite — « habituellement » (présent d'habitude) et « avant la pandémie » (passé daté) se contredisent grammaticalement. La donnée est en outre implicitement périmée.
- **Correction proposée** : « Il dépassait neuf millions de visiteurs annuels avant 2020, et reste le musée le plus fréquenté du monde. »
- **Fait** : phrase remplacée telle quelle.

### [MINEUR] ✅ Beethoven : « à partir de la trentaine »
- **Où** : `prisma/seed/culture-g/cours/arts-musique.ts` — `am-musique-classique` et `am2-musique-romantique` (deux fois)
- **Texte** : « Il perd l'audition à partir de la trentaine » / « la surdité qui l'accable à partir de la trentaine »
- **Problème** : imprécision, et redite d'une section à l'autre. Les premiers troubles datent de **1796-1798**, soit vers 26-28 ans ; le Testament de Heiligenstadt (1802) les décrit comme anciens de six ans. Le fichier hérité (q. 8) dit correctement « à partir de la fin des années 1790 ».
- **Correction proposée** : « Il perd l'audition dès la fin de la vingtaine » (dans les deux cours).
- **Fait** : les deux occurrences (`am-musique-classique` et `am2-musique-romantique`) remplacées par « dès la fin de la vingtaine ».

### [MINEUR] ✅ « Quatre ans qui changent tout », section qui en raconte six
- **Où** : `prisma/seed/culture-g/cours/arts-musique.ts` — `am3-rock-pop`, première section
- **Texte** : titre « Quatre ans qui changent tout » ; texte « … et finit, **six ans plus tard**, par des disques conçus en studio »
- **Problème** : le titre de section contredit son propre contenu.
- **Correction proposée** : intituler la section « Six ans qui changent tout ».
- **Fait** : titre de section renommé « Six ans qui changent tout ».

### [MINEUR] ✅ « Detroit » et « Détroit » dans le même paragraphe
- **Où** : `prisma/seed/culture-g/cours/arts-musique.ts` — `am-musiques-actuelles`, section « Hip-hop et électro »
- **Texte** : « La techno naît à **Detroit** … Chicago avec la house et **Détroit** avec la techno »
- **Problème** : la ville américaine s'écrit sans accent. Incohérence à trois lignes d'intervalle.
- **Correction proposée** : « Detroit » dans les deux occurrences.
- **Fait** : « Détroit » remplacé par « Detroit ».

### [MINEUR] ✅ Fallingwater : « bâtie en 1935 »
- **Où** : `prisma/seed/culture-g/cours/arts-musique.ts` — `am2-architecture-contemporaine`, section « L'exception américaine »
- **Texte** : « Sa maison sur la cascade, bâtie en Pennsylvanie en 1935 »
- **Problème** : 1935 est l'année du **projet** ; la construction court de 1936 à 1939. Le fichier hérité (q. 58) donne correctement « conçut Fallingwater entre 1935 et 1939 ».
- **Correction proposée** : « conçue en 1935 et bâtie en Pennsylvanie entre 1936 et 1939 ».
- **Fait** : phrase remplacée telle quelle dans le cours.

### [MINEUR] ✅ Une tierce sépare des notes « distantes de trois degrés »
- **Où** : `prisma/seed/culture-g/arts-musique.ts:~220` (`am-theorie-musicale`) et le cours de la même notion
- **Texte** : « L'intervalle entre deux notes distantes de trois degrés »
- **Problème** : formulation ambiguë. Do et mi **embrassent** trois degrés (do, ré, mi) mais sont **distants de deux**. « Distantes de trois degrés » se lit naturellement comme do → fa, c'est-à-dire une quarte.
- **Correction proposée** : « L'intervalle qui embrasse trois degrés, comme do-mi ».
- **Fait** : corrigé dans la question (« L'intervalle qui embrasse trois degrés, comme do-mi ») et dans le cours (« la tierce embrasse trois degrés, comme do-mi, la quinte cinq, comme do-sol »).

### [MINEUR] ✅ Bitches Brew : 1969 dans l'héritage, 1970 dans le seed
- **Où** : `heritage/culture-g/data/arts-musique.json` q. 43 (« en 1969 ») vs `prisma/seed/culture-g/arts-musique-3.ts` `am3-jazz-histoire` (« en 1970 »)
- **Problème** : les deux sont défendables (enregistré en août 1969, publié en mars 1970) mais l'apprenant qui voit les deux y lira une contradiction.
- **Correction proposée** : préciser dans les deux cas — « enregistré en 1969 et paru en 1970 ».
- **Fait** : les deux textes précisent maintenant « enregistré en 1969 et paru en 1970 ».

### [MINEUR] ✅ Répétition du même fait sur le clavecin
- **Où** : `prisma/seed/culture-g/arts-musique.ts` (`am-instruments`) et `prisma/seed/culture-g/arts-musique-2.ts` (`am2-musique-baroque`)
- **Texte 1** : « C'est ce qui le distingue du clavecin, dont les cordes sont pincées et dont la nuance ne dépend pas du toucher. »
- **Texte 2** : « Ses cordes sont pincées par des becs, ce qui empêche de nuancer par le toucher. »
- **Problème** : redite quasi mot pour mot d'une explication à l'autre. De même, le concerto grosso est défini deux fois dans les mêmes termes (`am-musique-classique` et `am2-musique-baroque`), et Spiral Jetty sert d'exemple deux fois (`am2-art-contemporain` et `am3-sculpture-contemporaine`).
- **Correction proposée** : varier l'apport de chaque explication (par exemple, sur le clavecin : les registres et les claviers multiples comme seul moyen de nuance).
- **Fait** : explication du clavecin dans `arts-musique-2.ts` réécrite autour des registres et du couplage des claviers, comme proposé. Vérifié le concerto grosso et Spiral Jetty signalés « de même » : les deux textes de chaque paire donnent déjà des informations différentes (pas de redite mot pour mot) — rien changé là.

### [MINEUR] ✅ Distracteurs en « seul » qui trahissent la construction
- **Où** : `prisma/seed/culture-g/arts-musique-3.ts` (`am3-critique-art` : « Émile Zola seul » ; `am3-peinture-france` : « Paul Signac seul » ; `am3-arts-spectacle-vivant` : « Les Rencontres de Chalon seules ») et `arts-musique-2.ts` (`am2-art-medieval` : « Memling et Bouts seuls » ; `am2-arts-decoratifs` : « Beauvais seule »)
- **Problème** : l'adverbe « seul » ajouté à un distracteur est un artifice visible : il signale que la proposition est une version restreinte d'une vérité, donc qu'elle est fausse. Cinq occurrences dans le domaine, c'est un motif repérable par l'apprenant.
- **Correction proposée** : remplacer ces distracteurs par des propositions franchement fausses et plausibles.
- **Fait** : « Émile Zola seul », « Les Rencontres de Chalon seules » et « Memling et Bouts seuls » avaient déjà disparu du texte actuel (questions reformulées entre-temps). Remplacé « Paul Signac seul » par « Paul Cézanne » (`am3-peinture-france`) et « Beauvais seule » par « Limoges » (`am2-arts-decoratifs`).

### [MINEUR] ✅ Moai : fourchette de datation trop large
- **Où** : `prisma/seed/culture-g/arts-musique-3.ts` — `am3-arts-afrique-oceanie`
- **Texte** : « taillés dans le tuf volcanique entre les XIIe et XVIIe siècles »
- **Problème** : la datation admise est **1250-1500** environ (XIIIe-XVIe s.). La fourchette donnée déborde d'un siècle de chaque côté.
- **Correction proposée** : « taillés dans le tuf volcanique entre les XIIIe et XVIe siècles ».
- **Fait** : déjà traité avec le [MOYEN] « Datation des moai » ci-dessus (même texte, même fichier) — aligné sur « entre les XIIIe et XVe siècles » pour correspondre à la leçon 12, qui fait référence.

### [MINEUR] ✅ « Né en 1976 à Londres et New York » (punk)
- **Où** : `prisma/seed/culture-g/arts-musique-3.ts` — `am3-rock-pop`
- **Problème** : approximation présentée comme un fait. La scène new-yorkaise (CBGB, Ramones, Television, Patti Smith) est active dès **1974-1975** ; 1976 est la date londonienne (Sex Pistols, The Clash).
- **Correction proposée** : « Né à New York vers 1974 puis à Londres en 1976, en réaction à la complexité du rock progressif. »
- **Fait** : phrase remplacée telle quelle.

### [MINEUR] ✅ Genre des voix : « la mezzo-soprano » dans la question, « le mezzo-soprano » dans le cours
- **Où** : `prisma/seed/culture-g/arts-musique.ts` (`am-opera`, propositions « La mezzo-soprano », « La contralto ») vs le cours `am-opera` (« devant le mezzo-soprano et le contralto »)
- **Problème** : incohérence de genre grammatical entre le cours et sa question. L'usage courant retient le masculin pour le type de voix (*un mezzo-soprano*, *un contralto*) et le féminin pour la chanteuse.
- **Correction proposée** : harmoniser sur le masculin dans les deux, ou reformuler les propositions en « Le mezzo-soprano », « Le contralto ».
- **Fait** : propositions de la question passées à « Le mezzo-soprano », « Le contralto », en gardant « La soprano » (usage courant pour la chanteuse) — aligné sur le masculin du cours.

---

### [MINEUR] ✅ « Au British Library » — genre fautif
- **Où** : `heritage/culture-g/data/lecons/arts-musique/02.json` — quiz Q5, proposition 3
- **Texte** : « Au British Library, à Londres »
- **Problème** : en français, *British Library* est féminin (« la British Library »). La proposition devrait être « À la British Library, à Londres ». L'explication de la même question écrit d'ailleurs correctement « La Bibliothèque nationale de France et la British Library ».
- **Correction proposée** : « À la British Library, à Londres ».
- **Fait** : proposition remplacée par « À la British Library, à Londres ».

### [MINEUR] ✅ « au Scuola Grande di San Rocco »
- **Où** : `heritage/culture-g/data/lecons/arts-musique/03.json` — section « Venise et la couleur »
- **Texte** : « Tintoret, avec ses raccourcis spectaculaires et ses éclairages contrastés **au** Scuola Grande di San Rocco »
- **Problème** : *scuola* est féminin ; l'usage français retient « à la Scuola Grande di San Rocco ».
- **Correction proposée** : « à la Scuola Grande di San Rocco ».
- **Fait** : « au » remplacé par « à la ».

### [MINEUR] ✅ « après avoir vendu presque aucune toile de son vivant »
- **Où** : `heritage/culture-g/data/lecons/arts-musique/04.json` — section « Le post-impressionnisme : quatre voies singulières »
- **Texte** : « il meurt en 1890 **après avoir vendu presque aucune toile** de son vivant »
- **Problème** : phrase agrammaticale — « aucune » exige la négation (« n'avoir vendu presque aucune toile »). La tournure est en outre lourde.
- **Correction proposée** : « il meurt en 1890 sans avoir presque rien vendu de son vivant ».
- **Fait** : phrase remplacée telle quelle.

### [MINEUR] ✅ Vivaldi : « quatre cents concertos » ici, « plus de cinq cents » là
- **Où** : `heritage/culture-g/data/arts-musique.json` (cours « Une histoire de la musique… », section « Le baroque musical ») vs `heritage/.../lecons/arts-musique/06.json` (section « Le baroque et l'invention de l'opéra »)
- **Texte** : cours — « avec ses **quatre cents** concertos environ » ; leçon 06 — « compose **plus de cinq cents** concertos ».
- **Problème** : incohérence entre deux fichiers du même cahier hérité. Le catalogue Ryom recense environ **500** concertos ; « quatre cents » est trop bas.
- **Correction proposée** : harmoniser sur « environ cinq cents concertos ».
- **Fait** : « quatre cents concertos environ » remplacé par « environ cinq cents concertos » dans le cours hérité.

### [MINEUR] ✅ « L'Âge d'airain, aujourd'hui à l'Alte Nationalgalerie de Berlin »
- **Où** : `heritage/culture-g/data/lecons/arts-musique/10.json` — section « Rodin et la renaissance de la sculpture »
- **Problème** : formulation trompeuse pour un bronze tiré en de nombreux exemplaires. L'Alte Nationalgalerie possède bien un tirage, mais la formule « aujourd'hui à » laisse croire à un exemplaire unique ; le premier bronze de 1880 et le plâtre original sont en France (musée d'Orsay, musée Rodin). Le même paragraphe explique pourtant, deux phrases plus loin, que Rodin « pratique l'assemblage, la multiplication et le fragment ».
- **Correction proposée** : « dont un tirage se trouve à l'Alte Nationalgalerie de Berlin ».
- **Fait** : « aujourd'hui à l'Alte Nationalgalerie » remplacé par « dont un tirage se trouve à l'Alte Nationalgalerie ».

### [MINEUR] ✅ Le calotype : 1840 dans la leçon 13, 1841 dans le seed
- **Où** : `heritage/.../lecons/arts-musique/13.json` (section « Talbot… », **et** quiz Q3 dont c'est l'énoncé : « Quelle invention **de 1840** fonde la photographie moderne ? ») vs `prisma/seed/culture-g/arts-musique-2.ts` (`am2-photographie-histoire` : « Quel procédé négatif-positif permet la reproduction des images **dès 1841** ? »)
- **Problème** : deux dates pour la même invention, chacune dans l'énoncé d'un QCM. Les deux se défendent — le calotype est mis au point en septembre 1840 et breveté en février 1841 — mais aucun des deux textes ne le précise, et un apprenant qui rencontre les deux questions les verra se contredire.
- **Correction proposée** : mentionner les deux étapes dans les explications — « mis au point en 1840, breveté en 1841 ».
- **Fait** : les deux étapes mentionnées dans la leçon 13 (texte de section, explication du daguerréotype, explication du Q3) et dans `arts-musique-2.ts`.

### [MINEUR] ✅ « La Vie en rose » : 1945 dans la leçon 16, 1946 dans les questions héritées
- **Où** : `heritage/.../lecons/arts-musique/16.json` (section « Édith Piaf… » et explication du quiz Q2) vs `heritage/culture-g/data/arts-musique.json` question 23
- **Texte** : leçon 16 — « “La Vie en rose”, **en 1945**, sur une musique de Louiguy » ; question 23 — « “La Vie en rose”, dont elle écrivit les paroles, fut **créée en 1946** ».
- **Problème** : les deux se défendent (texte écrit en 1945, chanson créée et enregistrée en 1946) mais les deux fichiers du même cahier se contredisent sans le dire.
- **Correction proposée** : « écrite en 1945 et créée en 1946 » dans les deux textes.
- **Fait** : les deux textes de la leçon 16 (texte de section et explication du quiz Q2) et l'explication de la question 23 du fichier hérité disent maintenant « écrite en 1945 et créée en 1946 ».

### [Confirmation] Les Beatles : la leçon 15 dit juste, la question héritée 22 dit faux
- **Où** : `heritage/.../lecons/arts-musique/15.json` vs `heritage/culture-g/data/arts-musique.json` question 22
- **Texte** : leçon 15 — « “Let It Be” paraît en 1970, **après la séparation** » (correct) ; question 22 — « La séparation est annoncée en 1970, **après l'album “Let It Be”** » (faux).
- **Problème** : confirme le constat [MOYEN] déjà formulé plus haut sur la question 22, et montre que la correction à appliquer est celle de la leçon 15.

---

## Ce que la seconde passe a ajouté

La passe 2 a relu les mêmes fichiers, puis a fait ce que la passe 1 n'avait pas fait : **charger le contenu comme le fait l'application** (`chargerContenuCultureG()`), pour voir ce que l'apprenant reçoit réellement plutôt que ce qui est écrit dans les fichiers. C'est de là que vient le constat le plus lourd du domaine.

Elle a aussi révélé **quinze questions que la passe 1 n'avait pas lues** : les `quiz` attachés aux trois cours de `arts-musique.json`, que j'avais parcourus en ne dépouillant que leurs `sections`. Ces quinze questions sont bonnes — je n'y ai relevé aucune erreur de fait — mais deux d'entre elles alimentent le doublon décrit ci-dessous.

### [GRAVE] Vingt-quatre familles de questions posent deux ou trois fois la même chose à l'apprenant

- **Où** : entre `prisma/seed/culture-g/arts-musique*.ts`, `heritage/culture-g/data/arts-musique.json` et `heritage/.../lecons/arts-musique/*.json`
- **Comment c'est établi** : j'ai chargé le module (`./node_modules/.bin/tsx`), filtré les 675 questions de la catégorie « Arts & Musique » réellement servies, puis rapproché toutes les paires ayant **exactement la même bonne réponse** et un énoncé proche. Ce ne sont donc pas des ressemblances de surface : ce sont des questions qui attendent la même réponse.

Il existe bien un dédoublonneur (`dedoublonner()`, `src/modules/culture-g/contenu.ts:399`), mais ses seuils — recouvrement d'énoncé ≥ 0,85, ou réponse strictement identique **et** recouvrement des mots longs ≥ 0,75 — sont trop stricts pour une simple reformulation. **Sur les 519 questions du seed, il n'en écarte que deux** ; tout le reste passe.

**Doublons dans la MÊME compétence** — le cas le plus grave, puisque les deux questions peuvent tomber dans la même série :

| Compétence | Question A | Question B | Réponse commune |
|---|---|---|---|
| `cg-arts-musique-03` | « Quelle œuvre Michel-Ange a-t-il réalisée entre 1508 et 1512 à la demande du pape Jules II ? » | « Quel plafond Michel-Ange peint-il entre 1508 et 1512 ? » | La voûte de la chapelle Sixtine |
| `cg-arts-musique-10` | « Quelle école de paysagistes s'installe en forêt de Fontainebleau ? » | « Quel village de la lisière de la forêt de Fontainebleau a donné son nom à une école de paysagistes ? » | Barbizon |

**Doublons entre compétences du même domaine** (l'apprenant les rencontre au fil de ses sessions) :

| Réponse commune | Où | Nombre |
|---|---|---|
| Filippo Brunelleschi (coupole de Florence, 1436) | `c02` + `03` + `am-architecture-styles` | **3 fois** |
| La Nouvelle-Orléans (naissance du jazz) | `07` + `libre-1` + `am-musiques-actuelles` | **3 fois** |
| Andy Warhol (boîtes de soupe Campbell) | `05` + `libre-1` + `am2-art-contemporain` | **3 fois** |
| Kind of Blue (1959) | `07` + `libre-2` | 2 fois (+1 supprimée) |
| La Vénus de Milo | `libre-2` + `am-sculpture` | 2 fois |
| Giuseppe Verdi (Traviata, Rigoletto, Aïda) | `libre-2` + `am-opera` | 2 fois |
| Tchaïkovski (Lac des cygnes, Casse-Noisette) | `libre-1` + `am-danse` | 2 fois |
| Sandro Botticelli (Naissance de Vénus) | `03` + `libre-2` | 2 fois |
| Jacques Brel (Ne me quitte pas) | `16` + `libre-1` | 2 fois |
| Édith Piaf (« la Môme ») | `16` + `libre-1` | 2 fois |
| Paul Gauguin (fin de vie en Polynésie) | `libre-2` + `am3-peinture-france` | 2 fois |
| Différence air / récitatif | `14` + `am-opera` | 2 fois |
| Antonio Vivaldi (Les Quatre Saisons) | `c03` + `libre-1` | 2 fois |
| Haendel (Le Messie) | `c03` + `libre-3` | 2 fois |
| Le Caravage (clair-obscur vers 1600) | `c01` + `am2-baroque-classicisme` | 2 fois |
| Monteverdi (L'Orfeo, 1607) | `06` + `am-opera` | 2 fois |
| Les Demoiselles d'Avignon (1907) | `05` + `am-peinture-moderne` | 2 fois |
| Paul Cézanne (Sainte-Victoire) | `04` + `libre-2` | 2 fois |
| Le musée d'Orsay (ancienne gare) | `04` + `libre-1` | 2 fois |
| Michel-Ange (David de marbre) | `libre-2` + `am-sculpture` | 2 fois |
| Auguste Rodin (Le Penseur) | `libre-1` + `am-sculpture` | 2 fois |
| Le Sacre du printemps (scandale de 1913) | `libre-2` + `am-danse` | 2 fois |

- **Problème** : la consigne compte « deux questions qui posent la même chose, même reformulées » comme un doublon franc. Il y en a vingt-quatre familles, dont trois triplées et deux à l'intérieur d'une même compétence. L'effet pédagogique est double : l'apprenant croit progresser alors qu'il répond au même item, et le planificateur d'espacement (`buildSeries`) traite ces items comme indépendants, ce qui fausse sa mesure de la maîtrise.
- **Correction proposée** : ce n'est pas une correction ligne à ligne mais un arbitrage de périmètre. Le cahier hérité fait autorité sur les grands classiques ; les notions du seed (`cg-neuf-*`) devraient donc **cesser de reposer les questions déjà posées par une leçon héritée** et se concentrer sur ce que l'héritage ne couvre pas. Concrètement : retirer les questions du seed listées ci-dessus (Vénus de Milo, Verdi, La Nouvelle-Orléans, Tchaïkovski, Gauguin, David de Michel-Ange, Le Penseur, Sacre du printemps, Demoiselles d'Avignon, Monteverdi, Warhol, Caravage, air/récitatif) et, pour les deux doublons internes, supprimer l'une des deux questions de `cg-arts-musique-03` et de `cg-arts-musique-10`. À défaut, abaisser les seuils de `dedoublonner()` — mais ce serait supprimer silencieusement une trentaine de questions écrites, ce qui est pire que de choisir.

### [MOYEN] ✅ Deux questions du seed sont écrites, puis supprimées en silence au chargement

- **Où** : `prisma/seed/culture-g/arts-musique.ts` (`am-musiques-actuelles`) et `prisma/seed/culture-g/arts-musique-2.ts` (`am2-architecture-contemporaine`)
- **Texte** : « Quel album de Miles Davis, paru en 1959, est l'un des plus vendus de l'histoire du jazz ? » et « Quel architecte américain a conçu la maison sur la cascade ? »
- **Problème** : ce sont les deux seules questions du domaine que `dedoublonner()` écarte. Elles n'atteignent jamais l'apprenant, et rien ne le signale — ni au chargement, ni dans `RESUME.md`. Le travail d'écriture est perdu, et une notion croit avoir dix questions quand elle en a neuf. C'est aussi la preuve, à l'envers, que le filtre existe mais ne rattrape presque rien.
- **Correction proposée** : les retirer explicitement des fichiers source (elles sont couvertes par `arts-musique.json` Q43 et Q58), et faire émettre au dédoublonneur un avertissement nommant chaque question écartée, afin qu'une suppression silencieuse ne puisse plus passer inaperçue.
- **Fait** : les deux questions retirées de `arts-musique.ts` et `arts-musique-2.ts` (couvertes par le cahier hérité). La partie « avertissement du dédoublonneur » touche `src/modules/culture-g/contenu.ts`, code partagé hors de mon périmètre (fichiers `arts-musique*`) — non traitée ici.

### [GRAVE — aggravation d'un constat de la passe 1] « Qui a mis Aragon en musique ? » a en réalité TROIS réponses parmi les propositions

- **Où** : `prisma/seed/culture-g/arts-musique-2.ts` — `am2-chanson-francaise`
- **Texte** : « Quel chanteur a mis en musique Aragon et défendu une chanson politique ? » → Léo Ferré ; propositions : **Georges Brassens**, **Jean Ferrat**, Yves Montand.
- **Ce que la passe 2 ajoute** : la passe 1 avait vu que l'explication reconnaît Jean Ferrat. La passe 2 a trouvé que **le domaine lui-même valide aussi Brassens** — deux fois : la question voisine du même fichier dit « Villon, Hugo, **Aragon** et Verlaine figurent parmi les auteurs qu'il a chantés », et le quiz du cours hérité (`arts-musique.json`, cours « Une histoire de la musique », Q5) écrit « il mit en musique des poèmes de Villon, Hugo ou **Aragon** ». C'est exact — *Il n'y a pas d'amour heureux*, 1953. Trois des quatre propositions sont donc défendables, et l'application le démontre elle-même dans deux autres questions.
- **Correction proposée** : abandonner Aragon comme critère. « Quel chanteur a mis en musique Baudelaire, Rimbaud et Apollinaire, et publié un manifeste libertaire ? » → Léo Ferré.

### [MINEUR] ✅ Les nymphéas : « plus de deux cents » ici, « plus de deux cent cinquante » là

- **Où** : `heritage/culture-g/data/arts-musique.json` (quiz du cours « Les grands mouvements de la peinture occidentale », Q5) vs `prisma/seed/culture-g/arts-musique-3.ts` (`am3-peinture-france`) et le cours du même slug
- **Texte** : cours hérité — « **plus de deux cents** toiles aux nymphéas » ; seed — « **plus de deux cent cinquante** toiles de nymphéas » (deux fois).
- **Problème** : petite divergence sur un chiffre présenté comme précis dans les deux cas. L'estimation courante est d'environ 250.
- **Correction proposée** : « environ deux cent cinquante » partout.
- **Fait** : cours hérité corrigé en « environ deux cent cinquante toiles » ; le seed disait déjà « plus de deux cent cinquante », inchangé.

### Ce que la passe 2 a confirmé sans rien ajouter

Relecture complète des trois fichiers de questions, des 43 cours et des 17 leçons : **aucune erreur de fait nouvelle** dans les cours du seed ni dans les leçons 01 à 05, 07, 11, 13, 15. Les dates, attributions et mouvements y résistent à un second contrôle. Les constats de la passe 1 tiennent tous ; deux ont été durcis (loi Toubon → vérifiée ; Brel « trente-neuf ans » → réfutée par deux sources et par le cahier hérité lui-même).

---

## Ce qui est sain

Le cahier hérité — `heritage/culture-g/data/arts-musique.json` et les dix-sept leçons — est d'une qualité nettement supérieure au reste : explications longues et précises (dimensions, date de composition *et* de création, noms des commanditaires, lieux de conservation), typographie française correcte (apostrophes courbes, guillemets, insécables), rang de bonne réponse réellement varié, et une honnêteté épistémique rare — « les historiens discutent encore de la date exacte », « son statut clinique est discuté », « toutes les hypothèses ont été avancées, aucune n'est démontrable ». Sur les 158 questions et 85 sections de ce cahier, j'ai relevé sept défauts, dont cinq erreurs de fait. Les leçons 01 (Antiquité), 03 (Renaissance), 05 (avant-gardes), 07 (jazz), 11 (arts d'Asie), 13 (photographie), 14 (opéra) et 15 (rock) ont résisté sans réserve à deux lectures : dates de naissance et de mort, premières, dimensions, dynasties, tout est juste.

Dans les trois fichiers `.ts`, l'écrasante majorité des faits vérifiés tient également : Saint-Denis et Suger, la coupole de Brunelleschi (1420-1436, double coque, arête de poisson), les cinq points de Le Corbusier (1927), Samothrace et Milo, le David (1501-1504), le Bernin, Rodin et Claudel, le Ring à Bayreuth (1876), Carmen (1875) et la mort de Bizet trois mois plus tard, l'Ode à la joie adoptée en 1972 par le Conseil de l'Europe dans l'arrangement de Karajan, Chauvet (36 000 ans) et Cosquer (entrée à −37 m), Stonehenge et Carnac, le droit de suite (1920), la SACEM (1851), les intermittents (1936), le prix de Rome (1663-1968), la loi Malraux (1962), les sites patrimoniaux remarquables (2016), l'INRAP (2001), le loto du patrimoine (2018), le CNM (2020), la Philharmonie (2015), l'ordonnance de 1800 sur le pantalon abrogée en 2013, le bunraku, Aurillac depuis 1986, la retraite à quarante-deux ans à l'Opéra de Paris.

Les cours du troisième lot (patrimoine architectural, design d'objet, arts numériques, symbolique des couleurs, critique d'art, art dans l'espace public) sont substantiels : ils expliquent un mécanisme au lieu de paraphraser leur titre, et plusieurs vont jusqu'à exposer les effets pervers de ce qu'ils décrivent — la gentrification produite par la loi Malraux, la contradiction entre la valeur marchande de Banksy et son intention, le fait que le Un pour cent artistique soit « le plus vaste ensemble d'art contemporain en accès libre du pays, et le moins regardé ». C'est de l'écriture pédagogique, pas du remplissage. Aucun cours orphelin : les 43 cours correspondent tous à une notion existante, et les 9 notions sans cours sont celles que le chantier documenté dans `commun.ts` laisse volontairement en attente.

Enfin, deux soupçons de la passe 1 se sont révélés infondés après vérification, et méritent d'être écartés explicitement : la bonne réponse toujours placée au rang 0 dans les fichiers `.ts` (les propositions sont repermutées à l'affichage par `melangerPropositions`), et l'apostrophe droite dans ces mêmes fichiers (convention uniforme du dépôt pour le code TypeScript). Ni l'un ni l'autre n'est un défaut de contenu.
