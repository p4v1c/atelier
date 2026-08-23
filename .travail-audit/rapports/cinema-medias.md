# Cinéma & Médias

> ÉTAT : passes 1 et 2 terminées. Rapport complet.

## Ce que j'ai lu

- `prisma/seed/culture-g/cinema-medias.ts` — 13 notions, 129 questions (et non 130 : voir constat structurel).
- `prisma/seed/culture-g/cinema-medias-2.ts` — 20 notions, 200 questions.
- `prisma/seed/culture-g/cinema-medias-3.ts` — 20 notions, 200 questions.
- `prisma/seed/culture-g/cours/cinema-medias.ts` — 41 cours, 155 sections.
- `heritage/culture-g/data/cinema-medias.json` — 60 questions, 3 cours (12 sections) et leurs 15 questions de quiz.
- `heritage/culture-g/data/lecons/cinema-medias/01..17.json` — 17 leçons, 85 sections, 84 questions de quiz.

Total : **688 questions** et **61 cours (252 sections)** réellement lus, ligne à ligne.

## Constats

### [GRAVE] Explication d'une question partie en vrille : texte incohérent et faux laissé dans le contenu
- **Où** : `heritage/culture-g/data/cinema-medias.json` — question 38, « Quelle récompense principale est décernée par le festival international du film de Berlin ? »
- **Texte** : « Parmi les lauréats célèbres de l'Ours d'or figurent « Le Voyage de Chihiro » de Miyazaki et « La Vie des autres » n'en est pas un, mais bien « Sur mes lèvres »... non : citons plutôt « Larmes et soupirs » — retenons simplement que le palmarès mêle cinéma d'auteur et films engagés. »
- **Problème** : phrase inachevée, auto-contredite, qui hésite à voix haute et finit par affirmer des faits faux. *La Vie des autres* n'a pas d'Ours d'or (Oscar 2007 du meilleur film étranger) ; *Sur mes lèvres* (Audiard, 2001) n'en a pas non plus ; *Cris et chuchotements* (« Larmes et soupirs » n'est pas son titre français) n'a jamais eu d'Ours d'or. Seul *Le Voyage de Chihiro* est exact (Ours d'or 2002). C'est le seul passage du corpus qui laisse voir de la fabrication brute.
- **Correction proposée** : « Parmi les lauréats célèbres de l'Ours d'or figurent *Le Voyage de Chihiro* de Miyazaki (2002) et *Taxi Téhéran* de Jafar Panahi (2015) : le palmarès mêle cinéma d'auteur et films engagés. »

### [GRAVE] Le cours définit faussement le plan moyen
- **Où** : `prisma/seed/culture-g/cours/cinema-medias.ts` — `cm-langage-cinematographique`, section « Cadrer »
- **Texte** : « Le plan moyen coupe à mi-cuisses, le plan rapproché à la poitrine, et le gros plan isole un visage ou un détail »
- **Problème** : erreur de fait sur le point central de la notion. C'est le **plan américain** qui coupe à mi-cuisses ; le plan moyen cadre le personnage en pied. L'apprenant révise l'échelle des plans dans un cours qui lui donne la mauvaise correspondance, et le plan américain disparaît de l'échelle.
- **Correction proposée** : « Le plan moyen cadre le personnage en entier, le plan américain le coupe à mi-cuisses, le plan rapproché à la poitrine, et le gros plan isole un visage ou un détail »
- **Corroboration interne** : `heritage/…/lecons/cinema-medias/05.json` donne la définition juste — « Le plan moyen cadre un personnage en pied, le plan américain le coupe à mi-cuisses, appellation héritée des westerns où l'on devait voir le revolver à la ceinture » — et en fait même une question de quiz, dont le distracteur explicitement écarté est « le plan moyen ». Le corpus se contredit donc lui-même, et c'est le seed qui a tort ; la formulation correcte existe déjà, il suffit de la reprendre.

### [GRAVE] Question à deux réponses également défendables : le compositeur italien
- **Où** : `prisma/seed/culture-g/cinema-medias-3.ts` — `cm3-cinema-italien`
- **Texte** : « Quel compositeur a signé les musiques de très nombreux films italiens ? » — choix : Ennio Morricone / Nino Rota / Armando Trovajoli / Riz Ortolani. Explication : « Nino Rota a lui aussi marqué le cinéma italien, notamment avec Fellini. »
- **Problème** : l'énoncé ne discrimine rien (les quatre propositions sont vraies, Trovajoli et Ortolani compris), et l'explication reconnaît elle-même que le distracteur classé faux est également juste. Question insoluble.
- **Correction proposée** : « Quel compositeur a signé les musiques des westerns de Sergio Leone ? » — mais cette question existe déjà dans `cm2-musique-film` ; préférer : « Quel compositeur italien a écrit la musique de *Il était une fois dans l'Ouest* ? » avec l'explication « Ennio Morricone a composé pour plus de quatre cents films ; Nino Rota, lui, est le compositeur attitré de Fellini. »

### [GRAVE] Question fausse sur Céline Sciamma : « langue des signes »
- **Où** : `prisma/seed/culture-g/cinema-medias-2.ts` — `cm2-cinema-francais-2`
- **Texte** : « Quel réalisateur français est connu pour ses films tournés en langue des signes et sur l'adolescence ? » — choix : « Céline Sciamma pour l'adolescence » / Abdellatif Kechiche / Robert Guédiguian / Laurent Cantet. Explication : « Bande de filles, Tomboy et Naissance des pieuvres composent une trilogie sur la construction de soi. »
- **Problème** : trois défauts cumulés. (1) Attribution fausse : Sciamma n'a tourné aucun film en langue des signes — la confusion vient sans doute de *La Famille Bélier* (Éric Lartigau, 2014), dont elle a coécrit le scénario. (2) Accord faux : « Quel réalisateur… » pour une réalisatrice. (3) Le libellé de la bonne réponse, « Céline Sciamma pour l'adolescence », trahit la réponse et admet à demi-mot que la question est mal posée.
- **Correction proposée** : « Quelle réalisatrice française a construit une œuvre sur l'adolescence et la construction de soi ? » — choix : « Céline Sciamma » / « Claire Denis » / « Catherine Breillat » / « Rebecca Zlotowski ».

### [GRAVE] Doublons francs entre lots : la même question posée deux fois
Toutes ces paires sont dans des notions distinctes ; l'apprenant les rencontrera comme deux questions différentes.

- `cinema-medias.ts` `cm-cinemas-monde` : « Quel pays produit le plus grand nombre de films par an ? » / `cinema-medias-3.ts` `cm3-cinema-economie-mondiale` : « Quel pays produit le plus de films par an ? » — **mêmes quatre choix dans le même ordre** (l'Inde, Les États-Unis, La Chine, Le Nigeria). Doublon parfait.
- `cm-photographie-presse` : « Comment vérifie-t-on l'origine d'une image circulant en ligne ? » (recherche inversée + métadonnées) / `cm2-desinformation` : « Comment vérifier une image trouvée en ligne ? » (recherche inversée + contexte).
- `cm-langage-cinematographique` : « Qu'est-ce que le bruitage, ou foley ? » / `cm3-son-cinema` : « Qu'est-ce qu'un bruitage ? ».
- `cm2-cinema-technique-projection` : « Qu'est-ce que le son multicanal en salle ? » / `cm3-son-cinema` : « Qu'est-ce que la spatialisation sonore en salle ? » — **explications quasi mot pour mot** : « Les systèmes récents ajoutent des canaux au plafond pour un rendu tridimensionnel. » / « Les systèmes récents ajoutent des enceintes au plafond pour un rendu tridimensionnel. »
- `cm2-critique-cinema` : « Qu'est-ce que la profondeur de champ dans l'analyse d'un film ? » (« L'étendue de netteté qui peut hiérarchiser ou égaliser les plans de l'image ») / `cm3-cinema-technique-image` : « Qu'est-ce que la profondeur de champ au cinéma ? » (« L'étendue de netteté qui hiérarchise ou égalise les plans »).
- `cm-hollywood-industrie` : « Qu'est-ce que le code Hays ? » / `cm3-censure-liberte` : « Qu'est-ce que le code Hays aux États-Unis ? » — même réponse (« code d'autocensure »), mêmes bornes 1934-1968.
- `cm-television` : « Quelle institution conserve les archives de la radio et de la télévision françaises ? » / `cm3-archives-audiovisuelles` : « Quel organisme conserve les archives de la radio et de la télévision françaises ? » — même réponse (l'INA), énoncés interchangeables.
- `cm-radio-podcast` : « Qu'est-ce qu'un podcast natif ? » / `cm3-radio-france` : « Qu'est-ce que le podcast natif en France ? ».
- `cm-jeu-video` : « Quel système de classification informe sur l'âge conseillé des jeux en Europe ? » (PEGI) / `cm3-jeu-video-industrie` : « Qu'est-ce que la classification PEGI ? ».
- `cm2-histoire-presse` : « Qu'est-ce qu'un modèle payant en ligne pour un journal ? » / `cm3-medias-numeriques` : « Qu'est-ce qu'un paywall ? » — même définition, mêmes variantes citées en explication.
- `cm2-documentaire` : « Quel documentaire français de 2002 filme une classe unique rurale ? » / `cm3-cinema-documentaire-france` : « Quel documentaire de Nicolas Philibert filme une classe unique ? » — même réponse (*Être et avoir*).
- `cm-hollywood-industrie` : « Quel studio d'animation a produit Toy Story, premier long métrage entièrement en images de synthèse ? » / `cm2-animation` : « Quel studio américain a produit le premier long métrage entièrement en images de synthèse ? » — même réponse (Pixar), mêmes explications (« quatre ans de production »).
- **Correction proposée** : supprimer une occurrence de chaque paire et la remplacer par une question portant sur un fait non encore couvert de la notion hôte.

### [GRAVE] Phrase de cours réemployée telle quelle d'un cours à l'autre
- **Où** : `cours/cinema-medias.ts` — `cm-hollywood-industrie` § « Ce qu'on peut montrer » et `cm3-censure-liberte` § « Ce qu'on ne dit pas »
- **Texte** : « une autocensure de la profession, adoptée pour devancer une réglementation publique » (les deux fois, à l'identique)
- **Problème** : le code Hays est traité deux fois, avec la même formule, dans deux cours qui ne se citent pas. Le second n'apprend rien de plus que le premier.
- **Correction proposée** : dans `cm3-censure-liberte`, renvoyer au cas Hays en une incise et développer plutôt un exemple d'autocensure contemporaine (retrait préventif d'un sujet sous menace de procès).

### [MOYEN] Anachronisme : « The Walt Disney Company » en 1923
- **Où** : `cinema-medias.ts` — `cm-hollywood-industrie`
- **Texte** : « Quel studio d'animation Walt Disney fonde-t-il avec son frère en 1923 ? » — bonne réponse « The Walt Disney Company »
- **Problème** : en 1923 le studio s'appelle *Disney Brothers Cartoon Studio* ; « The Walt Disney Company » date de 1986. Le cours du même slug est, lui, correct (« Walt Disney fonde son studio avec son frère Roy en 1923 ») : la question contredit son propre cours.
- **Correction proposée** : bonne réponse « Le Disney Brothers Cartoon Studio », explication « Rebaptisé Walt Disney Studio en 1926, il ne prend le nom de The Walt Disney Company qu'en 1986. »

### [MOYEN] Parasite : « quatre-vingt-douze ans après la création de la cérémonie »
- **Où** : `cinema-medias.ts` — `cm-hollywood-industrie`
- **Texte** : « Premier film en langue étrangère à l'obtenir, quatre-vingt-douze ans après la création de la cérémonie. »
- **Problème** : confusion entre le rang de la cérémonie et le nombre d'années. La première cérémonie s'est tenue en 1929 ; 2020 est la **92ᵉ** cérémonie, soit **91 ans** après la première.
- **Correction proposée** : « Premier film en langue étrangère à l'obtenir, lors de la quatre-vingt-douzième cérémonie. »

### [MOYEN] Truffaut : « deux ans après avoir violemment critiqué le cinéma français »
- **Où** : `cinema-medias.ts` — `cm-cinema-francais`
- **Texte** : « Il y obtient le prix de la mise en scène à Cannes, deux ans après avoir violemment critiqué le cinéma français. »
- **Problème** : le compte ne tombe juste sur rien. Le pamphlet « Une certaine tendance du cinéma français » date de 1954, soit cinq ans avant *Les Quatre Cents Coups*. Le fait marquant à un an d'intervalle est son exclusion du festival de Cannes en 1958 — c'est d'ailleurs ce que dit correctement le cahier d'origine (`heritage/…/cinema-medias.json`, q. 18 : « dont il avait pourtant été exclu comme critique l'année précédente »).
- **Correction proposée** : « Il y obtient le prix de la mise en scène à Cannes, un an après en avoir été exclu comme critique. »

### [MOYEN] Agnès Varda présentée comme « seule femme du groupe de la Rive gauche »
- **Où** : `cinema-medias.ts` — `cm-cinema-francais`
- **Texte** : « Quelle réalisatrice, seule femme du groupe de la Rive gauche, tourne Cléo de 5 à 7 ? » — distracteurs : Marguerite Duras, Chantal Akerman, Nelly Kaplan
- **Problème** : Marguerite Duras est habituellement rattachée au groupe de la Rive gauche (avec Resnais, Marker, Robbe-Grillet, Cayrol). Un distracteur du QCM contredit donc l'énoncé, et l'apprenant qui connaît le sujet peut légitimement bloquer.
- **Correction proposée** : « Quelle réalisatrice, figure du groupe de la Rive gauche, tourne Cléo de 5 à 7 ? »

### [MOYEN] « Le Joueur d'échecs » cité comme plan-séquence célèbre
- **Où** : `cinema-medias.ts` — `cm-langage-cinematographique`
- **Texte** : « L'ouverture de La Soif du mal et celle du Joueur d'échecs comptent parmi les plus célèbres »
- **Problème** : *La Soif du mal* (Welles, 1958) est exact. *Le Joueur d'échecs* (Raymond Bernard, 1927) n'est connu pour aucun plan-séquence d'ouverture ; l'exemple canonique qui lui est presque toujours associé est *The Player* de Robert Altman (1992), dont l'ouverture cite d'ailleurs explicitement Welles. Confusion de titre très probable.
- **Correction proposée** : « L'ouverture de La Soif du mal et celle de The Player, qui la cite explicitement, comptent parmi les plus célèbres »

### [MOYEN] « Le doctorat de script » : terme inexistant
- **Où** : `cinema-medias-2.ts` — `cm2-scenario` ; et `cours/cinema-medias.ts` — `cm2-scenario` § « Adapter, et réécrire »
- **Texte** : « Qu'est-ce que le doctorat de script ? » / « Le doctorat de script, ou script doctoring, est une réécriture confiée à un scénariste extérieur »
- **Problème** : « doctorat de script » n'existe pas en français et évoque un diplôme universitaire — ce qui est précisément l'un des distracteurs (« Une expertise universitaire »). Les usages professionnels sont *script doctor* / *script doctoring*, ou « réécriture ».
- **Correction proposée** : « Qu'est-ce que le script doctoring ? », et dans le cours « Le script doctoring est une réécriture confiée à un scénariste extérieur ».

### [MOYEN] Le foley présenté comme une invention de Jack Foley (cours), alors que la question dit « systématisa »
- **Où** : `cours/cinema-medias.ts` — `cm-langage-cinematographique` § « Entendre » vs question du même slug
- **Texte** : cours : « le bruitage, ou foley, du nom de son inventeur » ; question : « Le nom vient de Jack Foley, technicien américain qui **en systématisa la pratique** dans les années 1930. »
- **Problème** : le cours contredit son propre QCM et dit faux : le bruitage existait au théâtre et à la radio bien avant ; Foley en a systématisé la pratique en studio.
- **Correction proposée** : cours → « le bruitage, ou foley, du nom du technicien qui en systématisa la pratique ».

### [MOYEN] La panique de *La Guerre des mondes* affirmée comme un fait
- **Où** : `cinema-medias-2.ts` — `cm2-radio-formats`
- **Texte** : « La panique provoquée par la Guerre des mondes en 1938 en illustre la puissance d'évocation. »
- **Problème** : exact en apparence, trompeur en réalité — l'ampleur de la panique de 1938 est le cas d'école de la légende médiatique, et le cahier d'origine le dit correctement (`heritage/…/cinema-medias.json`, q. 57 : « la presse du lendemain amplifie l'ampleur de la panique, aujourd'hui relativisée par les historiens »). Le seed enseigne donc l'inverse de sa propre source.
- **Correction proposée** : « L'émission de 1938 tirée de La Guerre des mondes en illustre la puissance d'évocation : la panique qu'on lui prête a surtout été amplifiée par la presse du lendemain. »

### [MOYEN] Question « photographier un bâtiment » : deux réponses défendables
- **Où** : `cinema-medias.ts` — `cm-photographie-presse`
- **Texte** : « Peut-on photographier librement un bâtiment récent en France ? » — bonne réponse « Non, l'architecte détient un droit d'auteur sur son œuvre » ; distracteur « Non, sauf pour un usage privé ». Explication : « La liberté de panorama a été introduite en 2016 pour les usages non commerciaux des particuliers. »
- **Problème** : *photographier* est libre ; c'est la **diffusion** de l'image qui est encadrée. Avec l'exception de panorama rappelée par l'explication elle-même, le distracteur « Non, sauf pour un usage privé » est au moins aussi juste que la réponse retenue.
- **Correction proposée** : « Peut-on librement publier la photographie d'un bâtiment récent en France ? » — bonne réponse « Non, l'architecte détient un droit d'auteur sur son œuvre », explication inchangée.

### [MOYEN] Une notion à neuf questions au lieu de dix
- **Où** : `cinema-medias.ts` — `cm-festivals-recompenses`
- **Problème** : les 52 autres notions du domaine en comptent exactement dix ; celle-ci en a neuf (Cannes création, Lion d'or, Ours d'or, Cannes 1968, Campion, César, Molière, Oscars, Caméra d'or). Un trou dans une notion centrale, celle qui porte justement les palmarès.
- **Correction proposée** : ajouter une question sur le Grand Prix (« Que récompense le Grand Prix à Cannes ? — La deuxième distinction de la compétition, après la Palme d'or »), sujet absent du domaine.

### [MOYEN] Redites de fait d'une notion à l'autre (sans être des doublons de question)
- Cyberharcèlement puni « même si chaque auteur n'a agi qu'une fois » : `cm-numerique-reseaux` et `cm2-reseaux-sociaux`, formulation quasi identique.
- Influenceur défini deux fois avec le même distracteur « Un créateur de contenu populaire » : `cm-publicite` et `cm2-reseaux-sociaux`.
- Son / musique diégétique défini deux fois avec le même exemple radio vs orchestre : `cm-langage-cinematographique` et `cm2-musique-film`.
- Coffres à butin assimilés à des jeux de hasard : `cm-jeu-video` (explication) et `cm3-jeu-video-industrie` (question entière).
- Jeu indépendant rendu viable par la distribution numérique : `cm-jeu-video`, `cm2-…` et `cm3-jeu-video-industrie`.
- « Le jeu vidéo pèse plus que le cinéma et la musique réunis » : accroche de `cm-jeu-video` **et** accroche de `cm3-jeu-video-industrie` **et** première question de cette dernière **et** dernière phrase du cours `cm-jeu-video`. Quatre fois.
- Film noir nommé par la critique française après 1945 : `cm-hollywood-industrie`, `cm2-genres-cinema`, et les deux cours correspondants.
- CLEMI créé en 1983 : `cm-numerique-reseaux` (explication) et `cm2-education-medias` (question entière).

### [MOYEN] Discordances chiffrées entre un cours et ses questions
- Langues du cinéma indien : cours `cm3-cinema-economie-mondiale` « une douzaine de langues » vs question `cm-cinemas-monde` « une vingtaine de langues ».
- Écrans chinois : cours « de quelques centaines de salles à plus de quatre-vingt mille écrans » vs question `cm3-cinema-economie-mondiale` « de quelques milliers à plus de quatre-vingt mille ».
- Mesure d'audience radio : cours `cm3-radio-france` « des dizaines de milliers d'entretiens » vs question « Médiamétrie interroge chaque année plus de cent mille personnes ».
- Fact-checking : cours `cm-presse-journalisme` « développé à partir des années 2000 » vs question « Les rubriques dédiées se sont multipliées à partir des années 2010 ».
- **Correction proposée** : aligner sur le chiffre le plus défendable (une vingtaine de langues ; environ deux mille écrans en 2003 ; plus de cent mille entretiens ; apparition dans les années 2000, généralisation dans les années 2010).

### [MOYEN] TNT : « fin des années 2000 » pour l'extinction de l'analogique
- **Où** : `cours/cinema-medias.ts` — `cm-television` § « Diffuser et mesurer »
- **Texte** : « La TNT […] a remplacé la diffusion analogique à la fin des années 2000 »
- **Problème** : la TNT démarre en 2005 (ce que dit la question), mais l'extinction complète de l'analogique en France date du **30 novembre 2011**.
- **Correction proposée** : « La TNT, lancée en 2005, a remplacé la diffusion analogique, éteinte en novembre 2011 »

### [MOYEN] Phrase de cours inintelligible (MP3)
- **Où** : `cours/cinema-medias.ts` — `cm-radio-podcast` § « Le son à la demande »
- **Texte** : « Il a autant bouleversé l'industrie musicale qu'aucune décision commerciale. »
- **Problème** : construction impossible — « autant … qu'aucune » ne veut rien dire. L'intention est manifestement « plus qu'aucune décision commerciale ».
- **Correction proposée** : « Il a plus bouleversé l'industrie musicale qu'aucune décision commerciale. »

### [MINEUR] « Le bruiteur recrée pas, tissus et objets »
- **Où** : `cinema-medias-3.ts` — `cm3-son-cinema`
- **Texte** : « Le bruiteur recrée pas, tissus et objets en synchronisme avec l'image. »
- **Problème** : sans article, « recrée pas » se lit d'abord comme une négation. Phrase à relire deux fois.
- **Correction proposée** : « Le bruiteur recrée les pas, les tissus et les objets en synchronisme avec l'image. »

### [MINEUR] Capitalisation flottante des récompenses dans les choix
- **Où** : `cinema-medias.ts` — `cm-festivals-recompenses`, `cm-cinemas-monde`, `cm-television`, `cm-presse-journalisme`, `cm-publicite`
- **Texte** : « l'Ours d'or », « l'Inde », « l'ORTF », « l'INA », « l'Agence France-Presse », « l'ARPP », « l'Académie des arts et des sciences du cinéma » en tête de choix, à côté de « Le Lion d'or », « La Palme d'or », « Les États-Unis »
- **Problème** : les choix commençant par une élision ne portent pas la majuscule initiale que portent tous les autres. Incohérence visible dans une même liste.

### [MINEUR] Formulation contournée sur *Le Parrain, 2e partie*
- **Où** : `heritage/culture-g/data/cinema-medias.json` — question 32
- **Texte** : « « Le Parrain, 2e partie » (1974) est le premier film dont la suite gagne aussi l'Oscar du meilleur film. »
- **Problème** : le film cité **est** la suite ; la phrase dit donc le contraire de ce qu'elle veut dire.
- **Correction proposée** : « *Le Parrain, 2ᵉ partie* (1974) est la première suite à remporter à son tour l'Oscar du meilleur film. »

### [MINEUR] Référent ambigu dans une explication
- **Où** : `heritage/culture-g/data/cinema-medias.json` — question 44 (Simone Signoret)
- **Texte** : « On cite parfois Claudette Colbert […] dont elle avait la nationalité. Grande figure du cinéma français, elle avait triomphé dans « Casque d'or » »
- **Problème** : le second « elle » renvoie à Signoret, mais la phrase précédente parle de Colbert. Deux relectures nécessaires.
- **Correction proposée** : « Grande figure du cinéma français, Simone Signoret avait triomphé dans *Casque d'or*… »

### [MINEUR] Apostrophes droites dans tout le domaine
- **Où** : les trois fichiers de seed et le fichier de cours
- **Problème** : l'apostrophe droite (`'`) est employée partout, alors que la consigne typographique demande l'apostrophe courbe (’). Le JSON d'héritage utilise, lui, les guillemets français correctement.
- **Note** : c'est un choix homogène sur tout le corpus, à traiter globalement plutôt que domaine par domaine.

### [MOYEN] Gollum daté de 2001 dans le seed, de 2002 dans l'héritage
- **Où** : `cinema-medias-2.ts` — `cm2-effets-speciaux` ; contredit par `heritage/…/lecons/cinema-medias/05.json`
- **Texte** : seed → « Le personnage de Gollum, en 2001, en a été une démonstration marquante. » ; héritage → « la capture de mouvement […] donne le Gollum du "Seigneur des anneaux" (2002) ».
- **Problème** : Gollum n'apparaît que quelques secondes dans *La Communauté de l'anneau* (2001) ; la performance en capture de mouvement d'Andy Serkis qui a fait date est celle des *Deux Tours* (2002). La date du seed est celle du mauvais film.
- **Correction proposée** : « Le personnage de Gollum, dans Les Deux Tours en 2002, en a été la démonstration marquante. »

### [MOYEN] Brando attribué à Lee Strasberg
- **Où** : `cinema-medias-2.ts` — `cm2-acteurs-jeu` ; et `cours/cinema-medias.ts` — `cm2-acteurs-jeu` § « Plusieurs traditions, pas une méthode »
- **Texte** : « Lee Strasberg y forma Marlon Brando, James Dean, Al Pacino et bien d'autres. » / « Elle a formé Brando, Dean, De Niro, Pacino »
- **Problème** : contredit par la leçon d'héritage `09.json`, qui est plus exacte : « Il se forme auprès de Stella Adler […] Brando a toujours nié appartenir à la Méthode de Lee Strasberg et revendiquait l'enseignement de Stella Adler. » Attribuer la formation de Brando à Strasberg est l'erreur la plus répandue sur le sujet, et le corpus la commet dans le seed tout en la corrigeant dans l'héritage.
- **Correction proposée** : « Lee Strasberg y forma James Dean, Al Pacino et bien d'autres ; Marlon Brando, lui, se réclamait de Stella Adler. »

### [MOYEN] Le CLEMI : sigle développé de façon inexacte, deux fois
- **Où** : `cours/cinema-medias.ts` — `cm2-education-medias` § « Chercher plutôt que retenir » ; et `heritage/…/lecons/cinema-medias/07.json` § « S'informer aujourd'hui »
- **Texte** : « le CLEMI, centre de liaison de l'enseignement et des médias d'information » (les deux fois)
- **Problème** : forme hybride, fausse dans les deux sens. À sa création en 1983, le sigle développait « Centre de liaison de l'enseignement et des **moyens** d'information » ; depuis 2015, il se lit « Centre pour l'**éducation aux médias et à l'information** ».
- **Correction proposée** : « le CLEMI, Centre pour l'éducation aux médias et à l'information, créé en 1983 sous le nom de Centre de liaison de l'enseignement et des moyens d'information »

### [MINEUR] Greta Garbo rangée parmi les comédiens « venus du théâtre et du vaudeville »
- **Où** : `heritage/…/lecons/cinema-medias/10.json` § « La révolution technique du son enregistré »
- **Texte** : « des vedettes du muet comme John Gilbert ou Emil Jannings s'effondrent, tandis que les comédiens venus du théâtre et du vaudeville, tels Al Jolson, Greta Garbo ou Marlene Dietrich, s'imposent »
- **Problème** : Garbo était précisément une vedette du muet, venue du cinéma suédois, et non une comédienne de théâtre ou de vaudeville — elle illustre au contraire la transition réussie d'une star du muet. Le contraste construit par la phrase s'effondre sur son cas.
- **Correction proposée** : « […] tandis que d'autres, comme Greta Garbo, franchissent le cap sans dommage, et que les comédiens venus du théâtre et du vaudeville, tels Al Jolson ou Marlene Dietrich, s'imposent »

### [MINEUR] Une leçon à quatre questions de quiz au lieu de cinq
- **Où** : `heritage/…/lecons/cinema-medias/06.json` (« Le cinéma d'animation, de Méliès aux studios Ghibli »)
- **Problème** : les seize autres leçons du domaine comptent exactement cinq questions de quiz ; celle-ci en compte quatre. La section « Disney et l'âge d'or du dessin animé américain » et celle sur l'animation européenne sont d'ailleurs les seules à n'être couvertes par aucune question — sauf Kirikou.
- **Correction proposée** : ajouter une question sur *Steamboat Willie* (1928) et la synchronisation du son, sujet développé dans la leçon et non évalué.

### [MINEUR] Convention flottante sur l'année des Oscars
- **Où** : `heritage/…/lecons/cinema-medias/10.json`
- **Texte** : « Après un premier Oscar en 1971 pour l'adaptation musicale d'"Un violon sur le toit" »
- **Problème** : le film est de 1971, l'Oscar a été remis en 1972. Ailleurs dans la même section, le corpus date les Oscars par la cérémonie (« l'Oscar de la meilleure musique originale en 2016 […] pour "Les Huit Salopards" », film de 2015). Deux conventions dans le même paragraphe.
- **Correction proposée** : « Après un premier Oscar en 1972 pour l'adaptation musicale d'*Un violon sur le toit* »

### [MINEUR] « la vallée de Monument Valley »
- **Où** : `heritage/…/lecons/cinema-medias/01.json` § « Le western, épopée de la conquête de l'Ouest »
- **Texte** : « il tourne à plusieurs reprises dans la vallée de Monument Valley »
- **Problème** : pléonasme, et Monument Valley n'est pas une vallée mais un plateau parsemé de buttes, à cheval sur l'Arizona et l'Utah.
- **Correction proposée** : « il tourne à plusieurs reprises à Monument Valley »

### [MINEUR] Méliès vendeur de jouets ou de confiseries
- **Où** : `heritage/…/cinema-medias.json` (q. 4, « fini vendeur de jouets à la gare Montparnasse ») vs `heritage/…/lecons/cinema-medias/08.json` (« vendeur de confiseries à la gare Montparnasse »)
- **Problème** : les deux sont vrais — il tenait un kiosque de jouets et de confiseries — mais deux formulations exclusives dans le même corpus font douter le lecteur attentif.
- **Correction proposée** : harmoniser sur « vendeur de jouets et de confiseries à la gare Montparnasse ».

### [MINEUR] Attribution flottante de « T'as d'beaux yeux, tu sais »
- **Où** : `heritage/…/cinema-medias.json` — cours 2 « Le cinéma français, du réalisme poétique à nos jours », § « Les années 1930 et le réalisme poétique »
- **Texte** : « portés par Jean Gabin […] et par Arletty ou Michèle Morgan, à qui l'on doit la réplique fameuse "T'as d'beaux yeux, tu sais" »
- **Problème** : la construction attribue la réplique à Michèle Morgan alors que c'est Jean Gabin qui la lui dit, dans *Le Quai des brumes* ; Morgan répond « Embrasse-moi ».
- **Correction proposée** : « […] et par Arletty ou Michèle Morgan, à qui Gabin lance dans *Le Quai des brumes* la réplique fameuse "T'as d'beaux yeux, tu sais" »

### [GRAVE] Le journal télévisé de 1949 présenté comme le premier au monde
- **Où** : `heritage/…/lecons/cinema-medias/15.json` — § « Les débuts, d'un ministère à un journal télévisé », et la première question du quiz
- **Texte** : « le 29 juin 1949, Pierre Sabbagh lance un journal télévisé quotidien, **le premier au monde** ». Question : « Quel événement du 29 juin 1949 marque **une première mondiale** pour la télévision française ? » → « Le lancement du premier journal télévisé quotidien au monde ».
- **Problème** : erreur de fait, et elle porte toute une question. La BBC diffuse son *Television Newsreel* depuis le 5 janvier 1948, et CBS son journal quotidien présenté par Douglas Edwards depuis mai 1948 : le JT de Sabbagh est le premier journal télévisé **français**, pas le premier du monde. Le cahier d'origine, lui, écrit correctement « Le premier journal télévisé **français** » (`heritage/…/cinema-medias.json`, q. 53) — le corpus se contredit, et c'est la version fausse qui sert de réponse à une question.
- **Correction proposée** : section → « le 29 juin 1949, Pierre Sabbagh lance le premier journal télévisé français quotidien » ; question → « Quel événement du 29 juin 1949 marque une étape décisive pour la télévision française ? » → « Le lancement du premier journal télévisé français quotidien », avec en explication « La BBC et CBS avaient lancé le leur dès 1948 ; la France suit en 1949. »

### [MINEUR] Une date de palmarès prise pour une date de projection
- **Où** : `heritage/…/lecons/cinema-medias/12.json` — § « La Nouvelle Vague française »
- **Texte** : « "Les Quatre Cents Coups" […] lui vaut le prix de la mise en scène au Festival de Cannes le 4 mai 1959 »
- **Problème** : le 4 mai 1959 est la date de la projection du film à Cannes ; le palmarès de cette édition a été proclamé à la clôture, le 15 mai. Donner une date au jour près sur un fait daté d'un autre jour est le genre de précision qui se retient et se répète.
- **Correction proposée** : « lui vaut le prix de la mise en scène au Festival de Cannes en mai 1959 »

### [MINEUR] Conventions de datation des Oscars incohérentes d'une leçon à l'autre
- **Où** : `heritage/…/lecons/cinema-medias/17.json` (« "La Liste de Schindler" lui vaut ses premiers Oscars » daté 1993, remis en 1994 ; « "La Strada", en 1954, obtient l'Oscar du meilleur film étranger », remis en 1957) et `10.json` (« un premier Oscar en 1971 pour "Un violon sur le toit" », remis en 1972) ; alors que `04.json` et le cahier d'origine datent systématiquement par la cérémonie (« *Parasite* en 2020 », « Marion Cotillard en 2008 »).
- **Problème** : le corpus mélange l'année du film et l'année de la cérémonie sans jamais le dire. L'apprenant qui compare deux leçons ne peut pas savoir laquelle des deux conventions s'applique.
- **Correction proposée** : dater partout par la cérémonie, en nommant le film et son année entre parenthèses.

### [MINEUR] Le genre de « Steadicam » flotte
- **Où** : `heritage/…/lecons/cinema-medias/05.json` (« le Steadicam, harnais stabilisateur inventé en 1975 par Garrett Brown ») vs `17.json` (« il exploite **la** Steadicam »)
- **Correction proposée** : retenir le masculin, usage dominant en français professionnel.

### [MINEUR] Chronologie inversée dans une même phrase
- **Où** : `heritage/…/lecons/cinema-medias/15.json` — § « 1984-1987, l'irruption du privé »
- **Texte** : « Le 16 avril 1987, le groupe […] Bouygues rachète TF1 […]. Le 1er mars 1987, M6 est lancée **à son tour**. »
- **Problème** : « à son tour » place M6 après la privatisation de TF1, alors qu'elle la précède de six semaines — ce que la question du quiz rétablit d'ailleurs correctement (« M6 est lancée quelques semaines plus tôt »).
- **Correction proposée** : « M6 avait été lancée six semaines plus tôt, le 1er mars 1987. »

## Ce que la seconde passe a ajouté

La relecture a commencé par les fins de fichiers et a porté surtout sur le seed, qui est la partie faible du domaine. Elle a ajouté deux constats GRAVES, dont l'un est une récompense qui n'existe pas.

### [GRAVE] Un César du directeur de casting qui n'existe pas
- **Où** : `prisma/seed/culture-g/cinema-medias-2.ts` — `cm2-metiers-cinema`
- **Texte** : « Que fait un directeur de casting ? » → explication : « **Le métier n'a été reconnu par un César qu'en 2023.** »
- **Problème** : erreur de fait, vérifiée. L'Académie des César ne décerne aucun prix de la direction de casting. Les seules catégories créées dans les années 2020 le sont pour la 47ᵉ cérémonie (2022) : meilleurs effets visuels, et rétablissement du meilleur court métrage documentaire. Les directeurs de casting sont représentés dans les collèges votants de l'Académie, et siègent au comité Révélations — mais ils n'ont pas de César. La confusion vient probablement de l'annonce, en 2024, d'un Oscar du meilleur casting créé pour la 98ᵉ cérémonie.
- **Correction proposée** : « La profession n'a longtemps été distinguée par aucun prix : l'Oscar du meilleur casting n'a été créé qu'en 2024, et les César n'ont toujours pas d'équivalent. »

### [GRAVE] Un distracteur qui désigne la bonne réponse
- **Où** : `prisma/seed/culture-g/cinema-medias-3.ts` — `cm3-cinema-documentaire-france`
- **Texte** : « Quel festival français est consacré au documentaire ? » — choix : « **Le Festival international du documentaire de Marseille** » (bonne réponse) / « Le festival d'Annecy » / « **Le FID de Lussas seul** » / « Le festival de La Rochelle ». Explication : « Les États généraux du documentaire de Lussas en sont un autre rendez-vous majeur. »
- **Problème** : le FID **est** le Festival international du documentaire de Marseille — c'est son sigle. Le troisième choix nomme donc la bonne réponse une seconde fois, en lui accolant par erreur le village ardéchois qui accueille un tout autre festival, les États généraux du documentaire. Deux choix pour une même chose, et une confusion de fait entre deux manifestations que l'explication distingue pourtant correctement.
- **Correction proposée** : remplacer le troisième choix par « Le Cinéma du réel, à Paris » (autre festival documentaire réel, et faux ici puisque l'énoncé attend Marseille), ou mieux, préciser l'énoncé : « Quel festival de documentaire se tient à Marseille ? ».

### [GRAVE] Les fusions aggravent trois doublons : même notion, deux fois la même question
`prisma/seed/culture-g/cours/fusions.ts` verse `cm3-jeu-video-industrie` et `cm2-jeux-video-culture` dans `cm-jeu-video`, et `cm2-reseaux-sociaux` dans `cm-numerique-reseaux`. Trois des paires signalées plus haut ne sont donc pas réparties entre deux chapitres : elles se retrouvent **dans le même chapitre**, où l'apprenant tombera deux fois sur la même chose.
- PEGI : « Quel système de classification informe sur l'âge conseillé des jeux en Europe ? » et « Qu'est-ce que la classification PEGI ? » cohabitent dans `cm-jeu-video`.
- Cyberharcèlement : « Qu'est-ce que le cyberharcèlement ? » et « Qu'est-ce que le cyberharcèlement en meute ? » cohabitent dans `cm-numerique-reseaux`, avec la même explication sur l'auteur qui n'a agi qu'une fois.
- Jeu indépendant : « Qu'est-ce qu'un jeu indépendant ? » et « Qu'est-ce que le jeu vidéo indépendant a apporté ? » cohabitent dans `cm-jeu-video`, avec deux fois la même explication sur la distribution numérique — et le coffre à butin y est expliqué deux fois de plus.
- **Correction proposée** : traiter ces trois paires en priorité, avant les doublons inter-chapitres.

### [MOYEN] Une question qui demande un procédé et répond par un film
- **Où** : `prisma/seed/culture-g/cinema-medias.ts` — `cm-naissance-cinema`
- **Texte** : « Quel **procédé** fait entrer le cinéma dans l'ère du parlant en 1927 ? » — bonne réponse : « Le film Le Chanteur de jazz avec son synchronisé » ; distracteurs : la projection à vingt-quatre images par seconde, le Technicolor, le CinémaScope.
- **Problème** : l'énoncé demande un procédé, les trois distracteurs sont des procédés, et la bonne réponse est un film — dont le libellé commence d'ailleurs par « Le film », ce qui la désigne. Le procédé attendu est le Vitaphone, que le cahier d'origine nomme correctement (« grâce au procédé Vitaphone »).
- **Correction proposée** : « Quel procédé sonore, employé pour Le Chanteur de jazz en 1927, fait entrer le cinéma dans l'ère du parlant ? » — choix : « Le Vitaphone » / « Le Technicolor » / « Le CinémaScope » / « Le Movietone », avec pour explication « Le Vitaphone synchronisait un disque et le projecteur ; le son optique, gravé sur la pellicule, l'a supplanté dès 1930. »

### [MOYEN] L'accident de laboratoire de Capa donné comme un fait établi
- **Où** : `prisma/seed/culture-g/cinema-medias.ts` — `cm-photographie-presse`
- **Texte** : « Onze clichés seulement **ont survécu au développement**, leur flou accidentel devenant leur signature. »
- **Problème** : exact en apparence, trompeur en réalité. C'est la version diffusée pendant soixante-dix ans par John Morris, alors rédacteur photo de *Life* à Londres, et elle est démontée depuis 2014 par les travaux d'A. D. Coleman : le laborantin mis en cause a démenti tout accident, et les onze images constituent très probablement la totalité de ce que Capa a photographié sur Omaha Beach avant de rembarquer. Présenter le sinistre de laboratoire comme acquis, c'est enseigner la légende plutôt que le fait.
- **Correction proposée** : « Onze clichés seulement nous sont parvenus. La légende d'un accident de laboratoire, longtemps répétée, est aujourd'hui contestée : Capa n'aurait sans doute pas pris davantage d'images. »

### [MOYEN] Le distracteur amputé par « seul » : un procédé systématique, vingt occurrences
- **Où** : les trois fichiers de seed, vingt libellés se terminant par *seul*, *seule* ou *seuls* ; une quinzaine sont des distracteurs
- **Exemples** : « L'Avance sur recettes seule », « La BNF seule », « La DGCCRF seule », « Yojimbo seul », « Irving Penn seul », « La Bergère et le Ramoneur seule », « La biomécanique de Meyerhold seule », « La direction d'acteurs seule », « La vitesse du montage seule », « Le FID de Lussas seul », « Un filtrage par mots-clés seul », « Une limitation horaire seule »
- **Problème** : dans chacun de ces cas, la proposition serait vraie ou défendable sans le mot ajouté, qui sert uniquement à la rendre fausse. Trois conséquences : l'apprenant attentif repère que le choix ainsi marqué n'est jamais la bonne réponse ; l'énoncé n'a donc plus besoin d'être précis, et il ne l'est pas ; et certains libellés deviennent agrammaticaux (« Le FID de Lussas seul », « Un témoignage en son seul »). Deux explications avouent d'ailleurs que le distracteur ainsi amputé est vrai : « Irving Penn a également marqué durablement ce champ » et « Yojimbo a inspiré Pour une poignée de dollars ».
- **Correction proposée** : reformuler les énoncés pour qu'ils discriminent d'eux-mêmes, et réserver ce tour aux cas où « seul » appartient naturellement à la proposition (« Une œuvre dramatique conçue pour l'écoute seule » est légitime).

### [MINEUR] Accord fautif dans une explication
- **Où** : `prisma/seed/culture-g/cinema-medias-2.ts` — `cm2-economie-cinema`
- **Texte** : « Qu'est-ce qu'un minimum garanti ? […] **Elle** se récupère sur les recettes avant tout partage. »
- **Correction proposée** : « Il se récupère sur les recettes avant tout partage. »

### [MINEUR] Le renouvellement d'une marque conditionné à l'usage
- **Où** : `prisma/seed/culture-g/cinema-medias.ts` — `cm-publicite`
- **Texte** : « le dépôt à l'INPI vaut dix ans, renouvelable indéfiniment, **à condition d'un usage effectif** »
- **Problème** : le renouvellement décennal n'exige aucune preuve d'usage ; c'est une action distincte, la déchéance pour défaut d'exploitation, qui sanctionne cinq ans d'inusage. La formulation fusionne deux mécanismes.
- **Correction proposée** : « le dépôt à l'INPI vaut dix ans, renouvelable indéfiniment ; mais une marque non exploitée pendant cinq ans peut être annulée pour déchéance. »

### [MINEUR] « Droit de suite » employé dans un sens qui en télescope un autre
- **Où** : `prisma/seed/culture-g/cinema-medias-2.ts` — `cm2-deontologie-journalisme`
- **Texte** : « Qu'est-ce qu'un droit de suite pour un lecteur ? » → « Le droit d'être informé de la suite donnée à une affaire relatée »
- **Problème** : l'usage déontologique existe, mais « droit de suite » désigne d'abord, en droit français, le droit de l'artiste à un pourcentage sur la revente de son œuvre. L'énoncé ne lève l'ambiguïté qu'a posteriori.
- **Correction proposée** : « Qu'est-ce que le droit de suite, au sens de la déontologie journalistique ? »

### [MINEUR] La ligature œ absente des leçons d'héritage
- **Où** : `heritage/…/lecons/cinema-medias/` — vingt-deux occurrences de « oeuvre », « oeuvres » ou « coeur » réparties sur quatorze des dix-sept leçons (six dans la seule leçon `11`)
- **Problème** : le seed n'a pas un seul cas, `cinema-medias.json` écrit « œuvre » quatorze fois sur quatorze, et les leçons `16` et `17` respectent la ligature — le défaut est donc bien une négligence, pas une convention.
- **Correction proposée** : remplacer partout « oe » par « œ » dans œuvre, cœur, sœur.

### [MINEUR] Deux typographies pour les titres de films selon le fichier
- **Où** : le cahier d'origine et les leçons citent les titres entre guillemets français (253 paires dans `cinema-medias.json`, 74 dans la seule leçon `01`) ; le seed n'en contient aucune, et écrit les titres nus (« Le Cuirassé Potemkine en est la démonstration »).
- **Problème** : dans une phrase comme « L'ouverture de La Soif du mal et celle du Joueur d'échecs », l'absence de guillemets rend la lecture franchement difficile.
- **Correction proposée** : adopter les guillemets français dans le seed comme dans l'héritage, ou l'italique.

## Ce qui est sain

Aucune notion n'est orpheline de cours : les douze slugs `cm-*` sans entrée dans `cours/cinema-medias.ts` sont tous versés par `cours/fusions.ts` dans une leçon d'héritage ou dans une notion hôte qui, elle, a son chapitre (`cm-naissance-cinema` → le cours « Naissance et âge d'or du cinéma », `cm-festivals-recompenses` → la leçon `04`, etc.). J'ai vérifié la table avant de conclure. Là où le cours existe directement, la couverture est complète : pour `cm-publicite`, `cm-jeu-video`, `cm-langage-cinematographique`, `cm-presse-journalisme` et `cm-radio-podcast`, j'ai repris les dix questions une à une et la réponse de chacune se trouve bien dans le cours.

Les leçons d'héritage (`lecons/cinema-medias/*.json`) sont d'une tout autre tenue que le seed : denses, datées, prudentes là où il faut l'être — la place discutée du *Chanteur de jazz* comme « premier film parlant » et ses deux cent quatre-vingts mots prononcés, la panique de 1938 relativisée, le contenu raciste de *Naissance d'une nation* nettement distingué de son apport technique, *Les Aventures du prince Ahmed* présenté comme le premier long métrage d'animation **conservé**. Je n'y ai relevé aucune erreur de date sur plusieurs centaines de mentions vérifiées. Les palmarès et les dates du seed, qui étaient le principal risque, sont très majoritairement exacts : Palme d'or de Campion en 1993 ex æquo avec *Adieu ma concubine*, de Kiarostami en 1997, de Cantet en 2008, de Ducournau en 2021 « vingt-huit ans après Jane Campion » (le compte tombe juste), Lion d'or de *Rashômon* en 1951 et de *La Cité des douleurs* en 1989, Ours d'or de *Sur l'Adamant* en 2023, les onze Oscars de *Titanic*, les quatre Oscars étrangers de Fellini, les cinq de *The Artist*, les quatre de *Parasite*. Les dates institutionnelles françaises sont solides de bout en bout (ORTF 1964-1974, publicité de marque 1968, privatisation de TF1 en 1987, Arte 1992, loi de 1881, loi Évin 1991, publicité comparative 1992, Arcom au 1ᵉʳ janvier 2022, CDJM en 2019, directive anti-procès-bâillon de 2024). Le cahier d'origine est nettement mieux écrit que le seed : ses explications apportent réellement un supplément de savoir, et plusieurs nuancent correctement des points que le seed durcit à tort.
