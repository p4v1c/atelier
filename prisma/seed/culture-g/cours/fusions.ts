/**
 * Les sujets déjà traités par une leçon héritée.
 *
 * Le corpus de questions écrit ici a été composé sans être confronté aux 322
 * leçons du cahier d'origine. Résultat : cent onze notions traitent un sujet
 * qui a déjà son chapitre. Les questions, elles, ne sont jamais en double —
 * le validateur l'interdit — mais deux chapitres sur le même thème se voient
 * immédiatement au catalogue.
 *
 * Plutôt que de laisser cohabiter deux chapitres concurrents, on verse les
 * questions de la notion neuve dans la leçon héritée : un seul chapitre par
 * sujet, mieux fourni. La notion neuve disparaît alors du catalogue, et son
 * cours n'a pas à être écrit.
 *
 * La table est figée à la main, à partir de la sortie de recouvrements.ts —
 * jamais recalculée à l'exécution : une heuristique qui se tromperait
 * rangerait des questions sous le mauvais chapitre.
 *
 *   clé   : slug de la notion écrite ici, sans le préfixe cg-neuf-
 *   valeur: slug de la leçon héritée qui l'absorbe
 */
export const FUSIONS: Record<string, string> = {
  "hm-meiji-japon": "cg-histoire-monde-11", // 100% Le Japon de Meiji à 1945 <- Le Japon, des samouraïs à l'ère Meiji (VIIIe siècle - 1912)
  "pc-electricite": "cg-physique-chimie-c03", // 100% L'électricité et le magnétisme <- Électricité, magnétisme et ondes
  "pc-forces-mouvement": "cg-physique-chimie-01", // 100% Forces, mouvement et gravitation <- Les forces et le mouvement : de Newton à la gravitation universelle
  "pc-reactions-chimiques": "cg-physique-chimie-c02", // 100% Les réactions chimiques <- L'atome, les éléments et les réactions chimiques
  "pc-nucleaire-radioactivite": "cg-physique-chimie-05", // 100% Le nucléaire et la radioactivité <- La radioactivité et l'énergie nucléaire
  "pc-chimie-quotidien": "cg-physique-chimie-04", // 100% La chimie du quotidien <- La chimie du quotidien : acides, bases, combustions et plastiques
  "ie-commerce-mondial": "cg-institutions-economie-09", // 100% Le commerce international <- La mondialisation et le commerce international
  "li-mouvements-litteraires": "cg-litterature-c01", // 100% Les mouvements littéraires <- Les grands mouvements littéraires français
  "li-roman-francais": "cg-litterature-01", // 100% Le roman français <- Le roman français du XIXe siècle : de Stendhal à Zola
  "li-poesie-francaise": "cg-litterature-03", // 100% La poésie française <- La poésie française, de Villon à Apollinaire
  "li-contes-jeunesse": "cg-litterature-12", // 100% Contes et littérature de jeunesse <- Les contes et la littérature jeunesse
  "li-edition-livre": "cg-litterature-17", // 100% Le livre et l'édition <- L'histoire du livre, de l'imprimerie à l'édition
  "lf-histoire-langue": "cg-langue-francaise-c01", // 100% L'histoire de la langue française <- Naissance et histoire de la langue française
  "lf-academie-norme": "cg-langue-francaise-03", // 100% L'Académie française et la norme <- L'Académie française et la norme : qui décide de la langue ?
  "lf-langues-france": "cg-langue-francaise-10", // 100% Les langues de France <- Les langues régionales de France
  "am-instruments": "cg-arts-musique-06", // 100% Les instruments de musique <- La musique classique : époques, formes et instruments
  "cm-naissance-cinema": "cg-cinema-medias-c01", // 100% La naissance du cinéma <- Naissance et âge d'or du cinéma
  "cm-cinema-francais": "cg-cinema-medias-c02", // 100% Le cinéma français <- Le cinéma français, du réalisme poétique à nos jours
  "cm-festivals-recompenses": "cg-cinema-medias-04", // 100% Festivals et récompenses <- Les festivals et les récompenses : Cannes, Venise, Oscars et Césars
  "cm-cinemas-monde": "cg-cinema-medias-03", // 100% Les cinémas du monde <- Les cinémas du monde : néoréalisme italien, Japon, Inde et nouveaux foyers
  "mr-mythologie-nordique": "cg-mythologie-religions-02", // 100% La mythologie nordique <- La mythologie nordique en détail : Odin, les Eddas et le Ragnarök
  "mr-hindouisme-bouddhisme": "cg-mythologie-religions-07", // 100% L'hindouisme et le bouddhisme <- L'hindouisme et le bouddhisme : deux traditions nées en Inde
  "st-intelligence-artificielle": "cg-sciences-tech-08", // 100% L'intelligence artificielle <- L'intelligence artificielle et la robotique
  "ga-cuisine-francaise": "cg-gastronomie-c01", // 100% La cuisine française <- Une histoire de la cuisine française
  "ga-cuisines-monde": "cg-gastronomie-05", // 100% Les cuisines du monde <- Les cuisines du monde et l'histoire des boissons
  "ga-pain-patisserie": "cg-gastronomie-03", // 100% Le pain et la pâtisserie <- Le pain, la viennoiserie et la pâtisserie
  "sp-jeux-olympiques": "cg-sport-c01", // 100% Les Jeux olympiques <- Histoire des Jeux olympiques
  "sp-dopage-ethique": "cg-sport-15", // 100% Dopage et éthique sportive <- Le dopage et l'éthique sportive
  "sp-sport-economie": "cg-sport-16", // 100% L'économie du sport <- L'économie et les médias du sport
  "hm2-chine-imperiale": "cg-histoire-monde-10", // 100% La Chine impériale <- La Chine impériale, des Qin aux Qing (221 av. J.-C. - 1912)
  "hm2-byzance": "cg-histoire-monde-20", // 100% L'Empire byzantin <- L'Empire byzantin et les croisades (330 - 1453)
  "hm2-decouvertes": "cg-histoire-monde-c02", // 100% Les grandes découvertes <- Les grandes découvertes (XVe-XVIe siècles)
  "hm2-revolution-industrielle": "cg-histoire-monde-05", // 100% La révolution industrielle <- La révolution industrielle (v. 1750 - 1914)
  "hm2-guerre-froide": "cg-histoire-monde-c03", // 100% La guerre froide <- La guerre froide (1947-1991)
  "hf2-gaule-romaine": "cg-histoire-france-01", // 100% La Gaule romaine <- La Gaule et la conquête romaine (IIe siècle av. J.-C. - Ve siècle apr. J.-C.)
  "hf2-guerre-cent-ans": "cg-histoire-france-04", // 100% La guerre de Cent Ans <- La guerre de Cent Ans (1337-1453)
  "hf2-restauration-monarchie-juillet": "cg-histoire-france-08", // 100% Restauration et monarchie de Juillet <- La Restauration et la monarchie de Juillet (1814-1848)
  "geo2-fleuves-monde": "cg-geographie-09", // 100% Les fleuves du monde <- Les grands fleuves du monde
  "geo2-population-mondiale": "cg-geographie-02", // 100% La population mondiale <- La population mondiale : croissance, répartition et migrations
  "geo2-urbanisation": "cg-geographie-15", // 100% Villes et urbanisation <- Les villes et l'urbanisation mondiale
  "geo2-agriculture-monde": "cg-geographie-14", // 100% L'agriculture dans le monde <- L'agriculture et l'alimentation dans le monde
  "geo2-risques-naturels": "cg-geographie-07", // 100% Les risques naturels <- Les risques naturels : séismes, volcans et cyclones
  "li2-litterature-medievale": "cg-litterature-08", // 100% La littérature du Moyen Âge <- La littérature française du Moyen Âge
  "li2-hugo": "cg-litterature-02", // 100% Victor Hugo <- Victor Hugo et le romantisme français
  "li2-science-fiction": "cg-litterature-11", // 100% La science-fiction <- La science-fiction et le fantastique
  "li2-policier": "cg-litterature-10", // 100% Le roman policier <- Le roman policier, du crime au thriller
  "li2-bande-dessinee": "cg-litterature-13", // 100% La bande dessinée <- La bande dessinée et le roman graphique
  "li2-litterature-antique": "cg-litterature-09", // 100% La littérature antique <- La littérature antique : Homère, Virgile, Ovide
  "sv2-nutrition-digestion": "cg-sciences-vie-09", // 100% La digestion et la nutrition <- La nutrition et la digestion
  "sv2-oceans-vie": "cg-sciences-vie-14", // 100% La vie marine <- Les océans et la vie marine
  "sv2-neurosciences": "cg-sciences-vie-08", // 100% Le système nerveux <- Le cerveau et le système nerveux
  "pc2-quantique": "cg-physique-chimie-13", // 100% La physique quantique <- Introduction à la physique quantique
  "pc2-chimie-organique": "cg-physique-chimie-08", // 100% La chimie organique <- La chimie organique et les molécules du vivant
  "am2-art-antique": "cg-arts-musique-01", // 100% L'art de l'Antiquité <- L'art de l'Antiquité : Égypte, Grèce, Rome
  "am2-art-medieval": "cg-arts-musique-02", // 100% L'art du Moyen Âge <- L'art du Moyen Âge : roman, gothique et enluminure
  "am2-renaissance-italienne": "cg-arts-musique-03", // 100% La Renaissance italienne <- La Renaissance italienne, de Florence à Rome
  "am2-art-xixe": "cg-arts-musique-10", // 100% L'art du XIXe siècle <- Le réalisme et l'art du XIXe siècle
  "am2-musique-baroque": "cg-arts-musique-c03", // 100% La musique baroque <- Une histoire de la musique, du baroque au rock
  "am2-chanson-francaise": "cg-arts-musique-16", // 100% La chanson française <- La chanson française, de Piaf à aujourd'hui
  "ie2-union-europeenne": "cg-institutions-economie-c02", // 100% L'Union européenne <- L'Union européenne et les organisations internationales
  "ie2-education-systeme": "cg-institutions-economie-15", // 100% Le système éducatif français <- L'école et le système éducatif français
  "st2-agriculture-techniques": "cg-sciences-tech-09", // 100% Les techniques agricoles <- L'histoire de l'agriculture et des techniques agricoles
  "st2-informatique-histoire": "cg-sciences-tech-c02", // 100% L'histoire de l'informatique <- De la Pascaline à Internet : histoire de l'informatique
  "mr2-mythologie-romaine": "cg-mythologie-religions-01", // 100% La mythologie romaine <- La mythologie romaine et ses différences avec la mythologie grecque
  "mr2-mythologies-asiatiques": "cg-mythologie-religions-10", // 100% Mythologies d'Asie <- Les mythologies d'Asie : Chine, Japon, Inde
  "mr2-christianisme-histoire": "cg-mythologie-religions-04", // 100% Le christianisme dans l'histoire <- Le christianisme : histoire, textes et grands courants
  "mr2-islam-histoire": "cg-mythologie-religions-05", // 100% L'islam dans l'histoire <- L'islam : histoire, textes et pratiques
  "cm2-metiers-cinema": "cg-cinema-medias-05", // 100% Les métiers du cinéma <- Les métiers et les techniques du cinéma : plan, montage, lumière, effets spéciaux
  "cm2-effets-speciaux": "cg-cinema-medias-05", // 100% Les effets spéciaux <- Les métiers et les techniques du cinéma : plan, montage, lumière, effets spéciaux
  "cm2-animation": "cg-cinema-medias-06", // 100% Le cinéma d'animation <- Le cinéma d'animation, de Méliès aux studios Ghibli
  "cm2-musique-film": "cg-cinema-medias-10", // 100% La musique de film <- La musique de film et le son au cinéma
  "sp2-basket-nba": "cg-sport-06", // 100% Le basket-ball <- Le basket-ball et le handball, deux sports collectifs de salle
  "sp2-sports-mecaniques": "cg-sport-07", // 100% Les sports mécaniques <- Les sports mécaniques, de la Formule 1 au rallye
  "sp2-sport-medias": "cg-sport-16", // 100% Sport et médias <- L'économie et les médias du sport
  "sp2-sport-feminin": "cg-sport-14", // 100% Le sport féminin <- L'histoire du sport féminin
  "hm3-premiere-guerre": "cg-histoire-monde-06", // 100% La Première Guerre mondiale <- La Première Guerre mondiale (1914-1918)
  "hm3-seconde-guerre": "cg-histoire-monde-07", // 100% La Seconde Guerre mondiale <- La Seconde Guerre mondiale (1939-1945)
  "hm3-chine-contemporaine": "cg-histoire-monde-23", // 100% La Chine contemporaine <- La Chine contemporaine, de la fin de l'empire à la superpuissance (1911 - nos jours)
  "geo3-forets": "cg-geographie-12", // 100% Les forêts dans le monde <- Les forêts du monde et la déforestation
  "li3-romantisme-francais": "cg-litterature-02", // 100% Le romantisme français <- Victor Hugo et le romantisme français
  "am3-jazz-histoire": "cg-arts-musique-07", // 100% L'histoire du jazz <- Une histoire du jazz, de La Nouvelle-Orléans à aujourd'hui
  "am3-arts-afrique-oceanie": "cg-arts-musique-12", // 100% Arts d'Afrique et d'Océanie <- Les arts d'Afrique et d'Océanie
  "ie3-elections-france": "cg-institutions-economie-02", // 100% Les élections en France <- Les élections et le droit de vote en France
  "st3-inventions-francaises": "cg-sciences-tech-17", // 100% Inventions françaises <- Les inventions françaises et leurs inventeurs
  "mr3-judaisme-histoire": "cg-mythologie-religions-06", // 100% Le judaïsme dans l'histoire <- Le judaïsme : histoire, textes et pratiques
  "cm3-cinema-muet": "cg-cinema-medias-08", // 100% Le cinéma muet <- Le cinéma muet et ses pionniers
  "lf3-prononciation": "cg-langue-francaise-09", // 100% La prononciation du français <- Prononciation, liaisons et accents du français
  "ga3-conservation": "cg-gastronomie-11", // 100% Conserver les aliments <- Conserver les aliments, du saloir au Nutri-Score
  "ga3-arts-table": "cg-gastronomie-c03", // 100% Arts de la table <- Le repas gastronomique des Français et les arts de la table
  "ga3-herbes-epices": "cg-gastronomie-09", // 100% Herbes et épices <- Les épices, les herbes et les condiments
  "sp3-sports-combat": "cg-sport-09", // 100% Les sports de combat <- Les arts martiaux et les sports de combat
  "hm4-monde-musulman": "cg-histoire-monde-04", // 100% Le monde musulman médiéval <- Le monde musulman médiéval et l'Empire ottoman (VIIe - XVIIe siècle)
  "hm4-ottomans": "cg-histoire-monde-04", // 100% L'Empire ottoman <- Le monde musulman médiéval et l'Empire ottoman (VIIe - XVIIe siècle)
  "hm4-traite-esclavage": "cg-histoire-monde-22", // 100% La traite atlantique et l'esclavage <- La traite atlantique et l'esclavage (XVIe - XIXe siècle)
  "hm4-guerre-froide-2": "cg-histoire-monde-c03", // 100% La guerre froide, seconde phase <- La guerre froide (1947-1991)
  "hf4-guerres-religion": "cg-histoire-france-05", // 100% Les guerres de Religion <- Renaissance et guerres de Religion (1494-1598)
  "hf4-napoleon": "cg-histoire-france-c02", // 100% Napoléon et l'Empire <- Napoléon et le Premier Empire (1799-1815)
  "hf4-second-empire": "cg-histoire-france-09", // 100% Le Second Empire <- La IIe République et le Second Empire (1848-1870)
  "hf4-commune": "cg-histoire-france-10", // 100% La Commune de Paris <- La Commune de Paris (1871)
  "hf4-france-guerres": "cg-histoire-france-c03", // 100% La France dans les guerres mondiales <- La France dans les deux guerres mondiales
  "ie-entreprise-travail": "cg-institutions-economie-06", // 83% L'entreprise et le monde du travail <- L'entreprise, le travail et le droit du travail
  "hm2-etats-unis": "cg-histoire-monde-15", // 83% L'histoire des États-Unis <- La révolution américaine et la naissance des États-Unis (1763 - 1791)
  "pc-etats-matiere": "cg-physique-chimie-03", // 82% Les états de la matière et leurs changements <- Les états de la matière et les changements d'état
  "sp3-jo-hiver": "cg-sport-c01", // 82% Les Jeux olympiques d'hiver <- Histoire des Jeux olympiques
  "hf4-louis-xiv": "cg-histoire-france-06", // 81% Le siècle de Louis XIV <- Louis XIV et l'absolutisme (1643-1715)
  "ie-securite-sociale": "cg-institutions-economie-03",
  "ie3-securite-sociale-branches": "cg-institutions-economie-03", // 72% Les branches de la protection sociale // 80% La protection sociale française <- La protection sociale et la Sécurité sociale
  "geo-fleuves-monde": "cg-geographie-09", // 77% Les grands fleuves et leurs bassins <- Les grands fleuves du monde
  "lf-expressions-francaises": "cg-langue-francaise-02", // 77% Les expressions et locutions françaises <- Expressions et locutions : enquête sur leurs origines
  "ie3-transition-economie": "cg-institutions-economie-17", // 77% Économie et transition écologique <- Le développement durable et la transition écologique
  "ie-collectivites": "cg-institutions-economie-04", // 76% Les collectivités territoriales françaises <- Les collectivités territoriales et la décentralisation
  "ie-energie-transition": "cg-institutions-economie-17", // 75% Énergie et transition écologique <- Le développement durable et la transition écologique
};

/**
 * Les notions écrites ici qui traitent le même sujet qu'une autre notion
 * écrite ici — même angle mort, un lot plus loin.
 *
 * Les lots ont été composés l'un après l'autre sans être confrontés entre
 * eux : « Le jeu vidéo » du premier lot et « L'industrie du jeu vidéo » du
 * troisième ont fini par cohabiter. Même remède que pour les leçons héritées :
 * la notion la plus tardive est versée dans la plus ancienne, qui garde le
 * chapitre.
 *
 *   clé   : slug absorbé          valeur : slug d'accueil
 */
export const FUSIONS_INTERNES: Record<string, string> = {
  "hf2-carolingiens": "hf-charlemagne-empire",
  "hf2-renaissance-francaise": "hf-francois-premier",
  "hf2-lumieres-france": "hf-lumieres-france",
  "hf2-france-outre-mer": "hf-outre-mer-histoire",
  "hm2-alexandre-hellenistique": "hm-alexandre",
  "geo3-regions-france": "geo-france-regions",
  "li3-litterature-orientale": "li-litteratures-monde",
  "cm2-reseaux-sociaux": "cm-numerique-reseaux",
  "cm2-jeux-video-culture": "cm-jeu-video",
  "cm3-jeu-video-industrie": "cm-jeu-video",
  "ga3-cuisine-technique": "ga-techniques-cuisine",
  "ga3-produits-mer": "ga2-produits-mer",
  "sp3-sports-collectifs-divers": "sp-sports-collectifs",
  "sp3-sport-societe": "sp-sport-societe",
  "sp3-sports-glisse": "sp2-sports-glisse",
  "hm3-amerique-latine-contemporaine": "hm2-amerique-latine",
  "hm4-histoire-sciences-monde": "hm3-histoire-sciences-monde",
  "hm4-migrations-histoire": "hm3-migrations-histoire",
  "hf4-revolution-terreur": "hf2-terreur-directoire",
  "lf3-langue-droit": "lf2-textes-officiels",
  "hf4-richelieu-mazarin": "hf-richelieu-mazarin",
  "hf4-lumieres-france": "hf-lumieres-france",
  "hf2-symboles-republique": "hf-symboles-republique",
  "ga-agriculture-alimentation": "ga3-agriculture-alimentation",
  "hm4-mesopotamie": "hm2-mesopotamie",
  "hm4-mongols": "hm2-mongols",
  "hm4-japon-histoire": "hm2-japon-histoire",
  "hf4-capetiens": "hf2-capetiens",
  "hf4-troisieme-republique": "hf2-troisieme-republique",
  "hf4-quatrieme-republique": "hf2-quatrieme-republique",
  "hf4-cinquieme-republique": "hf2-cinquieme-republique",
  "sp3-gymnastique": "sp2-gymnastique",
  "hm4-egypte-ancienne": "hm2-egypte-pharaonique",
  "hm4-afrique-royaumes": "hm2-afrique-precoloniale",
  "hm4-imperialismes": "hm2-colonisation",
  "hm4-decolonisations": "hm2-colonisation",
  "hf4-1789": "hf2-revolution-1789",
  "sp-cyclisme": "sp3-cyclisme-3",
  "sp-athletisme": "sp3-athletisme-lancers",
  "geo-mers-oceans": "geo2-oceans-mers",
  "geo-cartographie-outils": "geo2-cartographie",
  "sp3-paralympiques": "sp2-handisport",
  "sp3-rugby-3": "sp2-rugby",
};

