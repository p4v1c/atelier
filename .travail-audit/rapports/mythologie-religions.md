# Mythologie & Religions

> ÉTAT : **passe 1 terminée.** Lus : les trois lots de questions du seed (52 notions, 516 questions), `cours/mythologie-religions.ts` (45 cours), `heritage/culture-g/data/mythologie-religions.json` (59 questions + 3 cours de 5 sections), et les **17 leçons** de `heritage/culture-g/data/lecons/mythologie-religions/` (85 sections, 85 questions). Vérifié : `cours/fusions.ts`. **Passe 2 en cours.**
>
> Vérifié et écarté : les sept notions sans cours (`mr-mythologie-nordique`, `mr-hindouisme-bouddhisme`, `mr2-mythologie-romaine`, `mr2-mythologies-asiatiques`, `mr2-christianisme-histoire`, `mr2-islam-histoire`, `mr3-judaisme-histoire`) sont toutes listées dans `cours/fusions.ts` : elles sont absorbées par une leçon héritée `cg-mythologie-religions-NN` qui a son cours. Faux positif, pas un constat.

## Ce que j'ai lu

- `prisma/seed/culture-g/mythologie-religions.ts` — 13 notions, **129 questions**
- `prisma/seed/culture-g/mythologie-religions-2.ts` — 20 notions, **198 questions**
- `prisma/seed/culture-g/mythologie-religions-3.ts` — 19 notions, **189 questions**
- `prisma/seed/culture-g/cours/mythologie-religions.ts` — **45 cours** (sur 52 notions), 3 à 4 sections chacun
- (à venir) `heritage/culture-g/data/mythologie-religions.json` et les 17 leçons de `heritage/culture-g/data/lecons/mythologie-religions/`

Total lu à ce stade : **516 questions** et **45 cours**.

## Constats

### [GRAVE] Le jeûne du ramadan est daté du « lever du soleil » — il commence à l'aube
- **Où** : `prisma/seed/culture-g/mythologie-religions-3.ts` — `mr3-islam-pratiques` (question « Qu'est-ce que le ramadan ? ») **et** `prisma/seed/culture-g/cours/mythologie-religions.ts` — `mr3-islam-pratiques`, section « Le temps du jeûne »
- **Texte** : « Un mois de jeûne du lever au coucher du soleil » / « Le ramadan est un mois de jeûne du lever au coucher du soleil »
- **Problème** : le jeûne (sawm) commence à l'**aube** (fajr), pas au lever du soleil — soit une heure à une heure et demie plus tôt. L'erreur est répétée deux fois (question + cours), donc apprise deux fois. Elle contredit d'ailleurs le cours lui-même, qui évoque plus loin « des jeûnes de dix-huit heures » aux latitudes nordiques, durée impossible si l'on comptait du lever du soleil.
- **Correction proposée** : « Un mois de jeûne de l'aube au coucher du soleil » (et, dans le cours, « Le ramadan est un mois de jeûne de l'aube au coucher du soleil : ni nourriture, ni boisson, ni tabac entre l'aube et le crépuscule. »)

### [GRAVE] Le cours contredit sa propre question sur la messe en latin
- **Où** : `prisma/seed/culture-g/cours/mythologie-religions.ts` — `mr2-conciles-doctrines`, section « Les conciles récents » ; question dans `mythologie-religions-2.ts` — `mr2-conciles-doctrines`
- **Texte** : cours — « Vatican II […] dont l'autorisation de la liturgie en langue vernaculaire : **la messe cesse d'être dite en latin** et le prêtre se tourne vers l'assemblée. » ; question — distracteur **faux** : « Il supprime la messe latine », et explication : « Le latin reste autorisé ; c'est son caractère exclusif qui prend fin. »
- **Problème** : le cours affirme mot pour mot le distracteur que la question déclare faux. Un apprenant qui lit le cours répondra faux à la question, et retiendra une erreur : Vatican II n'a pas supprimé le latin, il a autorisé la langue vernaculaire.
- **Correction proposée** : dans le cours, remplacer par « la messe cesse d'être **obligatoirement** dite en latin — le latin reste autorisé, c'est son caractère exclusif qui prend fin — et le prêtre se tourne vers l'assemblée. »

### [GRAVE] Le chandelier de Hanouka : huit branches dans le cours, neuf dans la question
- **Où** : question `mythologie-religions.ts` — `mr-judaisme` (« Que commémore Hanouka ? ») ; cours `cours/mythologie-religions.ts` — `mr-judaisme`, section « Le temps et les fêtes »
- **Texte** : question — « On y allume **une lampe à neuf branches**, une bougie de plus chaque soir pendant huit jours. » ; cours — « par l'allumage progressif d'**un chandelier à huit branches** »
- **Problème** : contradiction franche entre le cours et sa question. La hanoukia compte **neuf** branches : huit pour les huit soirs, plus le *shamash* (bougie servante). Le cours est faux.
- **Correction proposée** : dans le cours, « par l'allumage progressif d'un chandelier à neuf branches — huit bougies, une de plus chaque soir, plus la bougie servante qui les allume. »

### [GRAVE] Spinoza aurait été excommunié « pour » son panthéisme — la chronologie l'interdit
- **Où** : `mythologie-religions.ts` — `mr-philosophie-religion` (« Qu'est-ce que le panthéisme ? ») ; `mythologie-religions-2.ts` — `mr2-athées-libres-penseurs` (« Quel philosophe du XVIIe siècle est excommunié pour ses idées sur Dieu et la nature ? ») ; cours `mr2-athées-libres-penseurs`, section « Les modernes »
- **Texte** : « Spinoza en est la figure majeure, ce qui lui valut d'être excommunié et longtemps tenu pour athée. » / « Spinoza est excommunié de la communauté juive d'Amsterdam en 1656 **pour des idées qui identifient Dieu et la nature** »
- **Problème** : le *herem* de 1656 frappe Spinoza à 23 ans, plus de vingt ans avant la publication de l'*Éthique* (1677) et avant tout écrit connu de lui. Le texte du herem ne précise aucun motif doctrinal (« horribles hérésies » et « actes monstrueux », sans détail). Présenter le panthéisme comme la cause de l'excommunication est une causalité fabriquée, et elle est répétée trois fois dans le domaine.
- **Correction proposée** : question `mr-philosophie-religion` — « Spinoza en est la figure majeure, ce qui lui valut d'être longtemps tenu pour athée. » ; question `mr2-athées-libres-penseurs` — reformuler l'énoncé en « Quel philosophe du XVIIe siècle est exclu de sa communauté religieuse avant de développer une pensée identifiant Dieu et la nature ? » ; cours — « Spinoza est exclu de la communauté juive d'Amsterdam en 1656, pour des motifs que le texte de l'exclusion ne précise pas ; il développera ensuite une pensée qui identifie Dieu et la nature. »

### [GRAVE] La part des sans-affiliation dans le monde : chiffre périmé, donné sans date
- **Où** : `mythologie-religions.ts` — `mr-religions-monde` (« Quelle est approximativement la part de personnes sans affiliation religieuse dans le monde ? ») ; cours `mr-religions-monde`, section « Croyances diffuses et non-croyance »
- **Texte** : bonne réponse « Environ un sixième de la population » ; cours — « les personnes sans affiliation religieuse représentent environ un sixième de la population mondiale, ce qui en ferait le troisième ensemble après le christianisme et l'islam »
- **Problème** : « un sixième » (≈ 16 %) est l'estimation Pew portant sur l'année 2010. Le rapport Pew publié en juin 2025 sur les données 2020 chiffre la population sans affiliation à **24,2 %**, soit près d'un quart — 1,9 milliard de personnes contre 1,6 en 2010. Le distracteur « Environ un tiers » reste faux, mais la bonne réponse l'est devenue aussi : le choix exact aujourd'hui serait « environ un quart », qui n'est pas proposé. La question n'a donc plus de réponse juste parmi ses quatre items. C'est exactement le cas visé par la consigne : un chiffre donné sans date alors qu'il a changé. *(Vérifié en passe 2 : Pew Research Center, « The World's Religious Groups: How Their Sizes Changed from 2010 to 2020 », 9 juin 2025.)*
- **Correction proposée** : remplacer le choix par « Environ un quart de la population », et l'explication par « Environ un quart selon les estimations les plus récentes, en forte hausse depuis 2010. Ce groupe est très hétérogène : athées, agnostiques et personnes croyantes sans appartenance déclarée. »

### [GRAVE] Doublons francs entre les trois lots de questions
Les paires suivantes posent la même chose, souvent avec des explications quasi mot pour mot. Une seule des deux doit survivre.

- **Yin et yang** : `mythologie-religions.ts` — `mr-symboles-rites` « Que représente le symbole du yin et du yang ? » → « Deux principes complémentaires présents l'un dans l'autre » / « Chaque moitié contient un point de l'autre » **vs** `mythologie-religions-3.ts` — `mr3-symboles-religieux` « Que représente le yin et le yang ? » → « Deux principes complémentaires et interdépendants » / « Chaque moitié contient un germe de l'autre ».
- **Noël orthodoxe le 7 janvier** : `mythologie-religions.ts` — `mr-calendriers-fetes` **vs** `mythologie-religions-3.ts` — `mr3-orthodoxie`. Énoncé, réponse et explication identiques à un mot près (« Le décalage… » / « L'écart… est aujourd'hui de treize jours »).
- **Mont Athos** : `mythologie-religions.ts` — `mr-lieux-sacres` « Quel mont grec abrite une république monastique orthodoxe autonome ? » **vs** `mythologie-religions-3.ts` — `mr3-orthodoxie` « Quel mont grec est le centre monastique de l'orthodoxie ? ». Même réponse, même explication (« Vingt monastères y forment… »).
- **Boîte de Pandore** : `mythologie-religions.ts` — `mr-mythes-fondateurs` **vs** `mythologie-religions-2.ts` — `mr2-mythologie-grecque-recits`.
- **Samsara** : `mythologie-religions.ts` — `mr-hindouisme-bouddhisme` **vs** `mythologie-religions-2.ts` — `mr2-eschatologie`.
- **Pesée du cœur / de l'âme** : `mythologie-religions.ts` — `mr-mythologie-egyptienne` « Contre quoi le cœur du défunt est-il pesé ? » **vs** `mythologie-religions-2.ts` — `mr2-eschatologie` « Qu'est-ce que la pesée de l'âme dans l'Égypte antique ? ». Explication reprise presque littéralement (« Un cœur trop lourd était dévoré par la Grande Dévoreuse »).
- **Valhalla** : `mythologie-religions.ts` — `mr-mythologie-nordique` « Où vont les guerriers morts au combat ? » **vs** `mythologie-religions-2.ts` — `mr2-eschatologie` « Qu'est-ce que le Valhalla ? ».
- **Yom Kippour** : `mythologie-religions.ts` — `mr-judaisme` **vs** `mythologie-religions-3.ts` — `mr3-fetes-religieuses`.
- **Culte des ancêtres — trois fois** : `mythologie-religions-2.ts` — `mr2-eschatologie` « Des pratiques rituelles maintenant un lien avec les défunts de la lignée » ; `mythologie-religions-3.ts` — `mr3-taoisme-confucianisme` « Un ensemble de rites entretenant le lien avec les défunts de la lignée » ; `mythologie-religions-3.ts` — `mr3-religions-afrique` « Des pratiques maintenant un lien entre vivants et défunts de la lignée ». Trois formulations de la même définition.
- **Pardon breton** : `mythologie-religions-2.ts` — `mr2-pelerinages` « Qu'est-ce que le pardon en Bretagne ? » **vs** `mythologie-religions-3.ts` — `mr3-croyances-populaires` « Qu'est-ce qu'un pardon breton ? ». Deux distracteurs sont eux-mêmes identiques (« Une absolution collective », « Une fête patronale civile »).
- **Dialogue interreligieux / islamo-chrétien** : `mythologie-religions-2.ts` — `mr2-ethique-religions` « Des échanges organisés entre représentants de traditions différentes » **vs** `mythologie-religions-3.ts` — `mr3-dialogue-conflits` « Des échanges organisés entre représentants des deux traditions ».
- **Taoïsme / wu wei** : `mythologie-religions.ts` — `mr-religions-monde` « Le non-agir n'est pas la passivité mais l'action conforme au cours naturel des choses » **vs** `mythologie-religions-3.ts` — `mr3-taoisme-confucianisme` « Le non-agir, l'action conforme au cours naturel des choses » + « Il ne s'agit pas de passivité mais d'une action sans forçage ». Phrase réemployée.
- **Mithraïsme** : `mythologie-religions-2.ts` — `mr2-mythologie-romaine` « Quel culte oriental s'est répandu dans l'armée romaine ? » **vs** `mythologie-religions-3.ts` — `mr3-cultes-antiques` « Qu'est-ce que le mithraïsme ? ». Même contenu, mêmes *mithraea*.
- **Règle de saint Benoît** : `mythologie-religions-2.ts` — `mr2-christianisme-histoire` « Prière et travail y sont équilibrés, avec une insistance sur la stabilité dans un même monastère » **vs** `mythologie-religions-3.ts` — `mr3-monachisme` « Un équilibre entre prière, travail et lecture » / « La stabilité dans un même monastère en est un principe fondamental ».
- **Correction proposée** : conserver la version la plus riche de chaque paire (généralement celle du lot 2 ou 3, qui contextualise) et remplacer l'autre par une question neuve sur la même notion.

### [GRAVE] Le même « fait » de sécularisation posé cinq fois
- **Où** : `mythologie-religions.ts` — `mr-philosophie-religion` (« Qu'est-ce que la sécularisation ? ») ; `mythologie-religions-2.ts` — `mr2-religions-chiffres` (« Qu'est-ce que la sécularisation observée en Europe occidentale ? ») ; `mythologie-religions-3.ts` — `mr3-nouvelles-spiritualites`, trois questions (« Qu'est-ce que le croire sans appartenir ? », « Qu'est-ce que le rapport des jeunes générations à la religion en Europe ? », « Pourquoi parle-t-on de recomposition plutôt que de disparition du religieux ? »)
- **Texte** : « Elle ne se confond pas avec la disparition des croyances, qui se recomposent plutôt qu'elles ne s'effacent. » / « Les croyances ne disparaissent pas mais se recomposent hors des cadres institutionnels. » / « Les croyances persistent en dehors des cadres institutionnels » / « Les sociologues observent un déplacement plutôt qu'un effacement du croire. »
- **Problème** : une seule idée — les croyances se recomposent au lieu de disparaître — sert de bonne réponse ou d'explication à cinq questions réparties sur trois fichiers. À l'intérieur de la seule notion `mr3-nouvelles-spiritualites`, trois des dix questions disent la même chose.
- **Correction proposée** : garder la formulation conceptuelle (`mr-philosophie-religion`) et celle sur le « croire sans appartenir » ; remplacer les trois autres par des questions portant sur des contenus distincts (chiffres datés, cas nationaux contrastés, mécanismes de transmission).

### [GRAVE] La loi de 1905 traitée trois fois de la même façon
- **Où** : `mythologie-religions.ts` — `mr-religions-monde` (« Qu'est-ce que la laïcité en France ? ») ; `mythologie-religions-2.ts` — `mr2-religions-france` (« Que prévoit l'article 2 de la loi de 1905 ? ») ; `mythologie-religions-3.ts` — `mr3-religion-politique` (« Qu'est-ce que la séparation des Églises et de l'État en France ? »)
- **Texte** : « elle ne reconnaît ni ne subventionne aucun culte » / « La République ne reconnaît, ne salarie ni ne subventionne aucun culte » / « Un régime où l'État ne reconnaît ni ne subventionne aucun culte »
- **Problème** : la même formule de l'article 2 est la bonne réponse trois fois.
- **Correction proposée** : garder la question de `mr2-religions-france` (la plus précise, qui cite l'article) ; réorienter les deux autres vers la liberté de conscience (article 1er), le régime des édifices, ou les exceptions territoriales.

### [MOYEN] Le mont Athos n'est pas un « État »
- **Où** : `mythologie-religions.ts` — `mr-lieux-sacres`
- **Texte** : « Vingt monastères y forment **un État autonome au sein de la Grèce**, dont l'accès est interdit aux femmes depuis des siècles. »
- **Problème** : l'Athos est une communauté monastique autonome sous souveraineté grecque, dotée d'un statut administratif particulier — pas un État. Le cours du même domaine (`mr-lieux-sacres` et `mr3-orthodoxie`) écrit correctement « une république monastique autonome », ce qui crée en outre une incohérence interne.
- **Correction proposée** : « Vingt monastères y forment une république monastique autonome, sous souveraineté grecque, dont l'accès est interdit aux femmes depuis près de mille ans. »

### [MOYEN] Le croissant : « d'origine ottomane » et pourtant antérieur aux Ottomans
- **Où** : `mythologie-religions-3.ts` — `mr3-symboles-religieux` ; cours `mr3-symboles-religieux`, section « Des adoptions tardives »
- **Texte** : « Un symbole d'origine ottomane devenu emblème répandu » / « Le croissant est d'origine ottomane et n'a aucun fondement coranique : **il figurait sur les enseignes de Constantinople bien avant la conquête turque** »
- **Problème** : la phrase du cours se contredit dans sa propre étendue. Si le motif est byzantin et antérieur à 1453, il n'est pas « d'origine ottomane » : les Ottomans l'ont repris et diffusé.
- **Correction proposée** : question — « Un emblème pré-islamique repris par les Ottomans, devenu symbole répandu » ; cours — « Le croissant n'a aucun fondement coranique : motif byzantin figurant sur les enseignes de Constantinople bien avant la conquête turque, il a été repris par les Ottomans et s'est répandu comme emblème avec l'Empire. »

### [MOYEN] Le concile de Nicée tranche la divinité du Christ, pas « sa nature »
- **Où** : `mythologie-religions.ts` — `mr-christianisme` (« Quel concile de 325 formule un credo commun ? ») ; cours `mr-christianisme`, section « D'une secte juive à une religion d'empire »
- **Texte** : « Il tranche la question de **la nature du Christ** contre l'arianisme. » / « le concile de Nicée formule un credo commun pour trancher les disputes sur la nature du Christ »
- **Problème** : le vocabulaire des « natures » du Christ est précisément celui de **Chalcédoine (451)**, comme le dit d'ailleurs `mr2-conciles-doctrines` dans le même domaine. Nicée tranche la **divinité** du Fils et sa consubstantialité au Père. Employer « nature » à Nicée brouille la distinction que le domaine enseigne par ailleurs.
- **Correction proposée** : « Il affirme la divinité du Fils, de même substance que le Père, contre l'arianisme. »

### [MOYEN] Les sourates ne sont pas rangées de la plus longue à la plus courte
- **Où** : `mythologie-religions.ts` — `mr-islam` (« En combien de chapitres le Coran est-il divisé ? »)
- **Texte** : « Elles sont classées de la plus longue à la plus courte, non par ordre chronologique de révélation. »
- **Problème** : l'ordre est **approximativement** décroissant, et la première sourate (al-Fâtiha, sept versets) fait exception. Le cours du même domaine est plus juste : « rangées non par ordre chronologique mais **approximativement** par longueur décroissante ». La question est plus fausse que son cours.
- **Correction proposée** : « Elles sont rangées approximativement par longueur décroissante, non par ordre chronologique de révélation — la première sourate, très courte, faisant exception. »

### [MOYEN] La synagogue ne naît pas de la destruction du Temple
- **Où** : `mythologie-religions.ts` — `mr-judaisme` (« Qu'est-ce qu'une synagogue ? »)
- **Texte** : « Elle s'est développée après la destruction du Second Temple en 70, qui a mis fin au culte sacrificiel. »
- **Problème** : des synagogues sont attestées bien avant 70, en Judée comme en diaspora ; 70 les rend centrales, il ne les crée pas. La formulation laisse croire à une naissance.
- **Correction proposée** : « Attestée bien avant 70, elle devient le centre de la vie religieuse après la destruction du Second Temple, qui met fin au culte sacrificiel. »

### [MOYEN] Le zoroastrisme daté du VIe siècle avant notre ère — le cours dit autre chose
- **Où** : `mythologie-religions.ts` — `mr-religions-monde` ; cours `mr-religions-monde`, section « Doctrines et dualismes »
- **Texte** : question — « Quelle religion fondée en Perse **au VIe siècle avant notre ère** oppose un principe bon à un principe mauvais ? » ; cours — « Le zoroastrisme, fondé en Perse et **attesté dès le premier millénaire avant notre ère** »
- **Problème** : la date de Zarathoustra est très disputée — les estimations vont de 1500-1000 à 600 avant notre ère. La question fige une date contestée ; le cours, prudent, en donne une autre. Incohérence, et fausse précision.
- **Correction proposée** : aligner la question sur le cours : « Quelle religion née en Perse dans l'Antiquité oppose un principe bon à un principe mauvais ? », explication : « Sa fondation par Zarathoustra est difficile à dater, les estimations allant du deuxième millénaire au VIe siècle avant notre ère. »

### [MOYEN] Un distracteur qui est en fait la bonne réponse : mazdéisme
- **Où** : `mythologie-religions.ts` — `mr-religions-monde`, même question
- **Texte** : choix — « Le zoroastrisme » (bon), « Le manichéisme », « Le mithraïsme », « **Le mazdéisme sassanide seul** »
- **Problème** : *mazdéisme* est un synonyme courant de *zoroastrisme*. Le qualificatif « sassanide seul » est un rustinage visible, qui signale au passage que c'est un piège plutôt qu'un vrai distracteur. Même procédé ailleurs dans le domaine : « Amon seul », « Le culte d'Isis seul », « Le Cycle de Finn seul », « La Bible de Tyndale seule », « Les voies romaines de Compostelle seules ».
- **Correction proposée** : remplacer par un distracteur réellement distinct, par exemple « Le culte de Mithra en Inde védique ».

### [MOYEN] La plus ancienne université : le distracteur est plus juste que la réponse
- **Où** : `mythologie-religions-2.ts` — `mr2-islam-histoire`
- **Texte** : « Quelle institution du Caire est l'une des plus anciennes universités du monde ? » → « Al-Azhar » ; explication : « **La Qarawiyyin de Fès**, fondée en 859 par une femme, est souvent citée comme la plus ancienne. » — et « La Qarawiyyin » figure parmi les quatre choix.
- **Problème** : l'explication désigne comme plus ancien un établissement qui est l'un des distracteurs. Seule la mention « du Caire » sauve l'énoncé ; l'apprenant qui lit l'explication en sort avec le sentiment d'avoir mal répondu.
- **Correction proposée** : retirer « La Qarawiyyin » des choix (la remplacer par « La Nizamiyya de Bagdad » ou « Le Bayt al-Hikma ») et garder l'explication.

### [MOYEN] Basilique Saint-Pierre : l'énoncé porte sa réponse, et le superlatif est discutable
- **Où** : `mythologie-religions.ts` — `mr-lieux-sacres`
- **Texte** : « Quelle basilique **du Vatican** est le plus grand édifice religieux catholique ? » → « La basilique Saint-Pierre » ; distracteurs : Saint-Jean-de-Latran, Sainte-Marie-Majeure, Saint-Paul-hors-les-Murs
- **Problème** : double défaut. (1) Saint-Pierre est la seule des quatre à se trouver au Vatican — les trois autres sont des basiliques majeures de Rome : l'énoncé donne la réponse à qui connaît la géographie. (2) « Le plus grand édifice religieux catholique » est contesté : la basilique Notre-Dame-de-la-Paix de Yamoussoukro la dépasse en emprise totale.
- **Correction proposée** : « Quelle basilique romaine est la plus vaste église du monde par sa surface intérieure ? » avec explication « Environ 15 000 m² intérieurs. Saint-Jean-de-Latran est pourtant la cathédrale de Rome et le siège officiel de l'évêque. »

### [MOYEN] Une origine conjecturale de superstition présentée comme un fait
- **Où** : `mythologie-religions-2.ts` — `mr2-superstitions` ; cours `mr2-superstitions`, section « Des origines oubliées »
- **Texte** : « **D'où vient** la crainte du chiffre treize à table ? » → « Du souvenir de la Cène et de ses treize convives » ; explication : « Une tradition nordique évoque **aussi** un banquet de douze dieux troublé par un treizième. » ; cours : « La crainte du chiffre treize à table renvoie au souvenir de la Cène ». Même construction pour le miroir brisé.
- **Problème** : l'explication propose elle-même une origine concurrente, ce qui prouve que l'énoncé « d'où vient » n'a pas de réponse unique. La notion sait pourtant hédger : la question « Pourquoi touche-t-on du bois ? » dit « Probablement… l'origine précise n'est pas établie ». L'inégalité de traitement à l'intérieur de la même notion est un défaut de méthode.
- **Correction proposée** : « À quelle scène la crainte du chiffre treize à table est-elle le plus souvent rattachée ? » et explication : « À la Cène et ses treize convives. D'autres rattachements existent, dont un banquet nordique de douze dieux troublé par un treizième : l'origine réelle n'est pas établie. »

### [MOYEN] Les droits de la Terre mère sont dans la Constitution équatorienne, pas bolivienne
- **Où** : cours `cours/mythologie-religions.ts` — `mr2-mythologies-ameriques`, section « Les Andes »
- **Texte** : « Son culte […] reste vivant aujourd'hui dans les Andes — au point d'avoir été **inscrit dans la Constitution bolivienne au titre des droits de la Terre mère**. »
- **Problème** : c'est la Constitution de l'**Équateur**, en 2008, qui consacre les droits de la nature sous le nom de *Pacha Mama* — premier pays au monde à le faire. En Bolivie, la Pachamama figure au préambule de la Constitution de 2009, mais les droits de la Terre mère relèvent de la **loi 071 de 2010**, complétée par la loi-cadre 300 de 2012 : ce sont des lois, pas la Constitution. Le cours attribue donc à la Bolivie ce qui revient à l'Équateur, et qualifie de constitutionnel ce qui est législatif. *(Vérifié en passe 2.)*
- **Correction proposée** : « au point que l'Équateur a inscrit les droits de la *Pacha Mama* dans sa Constitution de 2008, et la Bolivie les droits de la Terre mère dans une loi de 2010. »

### [MOYEN] Les Pères du désert fuient une Église « officielle » qui ne l'est pas encore
- **Où** : cours `cours/mythologie-religions.ts` — `mr3-monachisme`, section « Se retirer »
- **Texte** : « Les Pères du désert sont des ascètes chrétiens retirés dans les déserts d'Égypte **à partir du IIIe siècle** : **ils fuient une Église devenue officielle et confortable** »
- **Problème** : au IIIe siècle l'Église est persécutée, pas officielle — Antoine se retire vers 270-285, avant même l'édit de Milan (313). Le motif invoqué vaut pour l'essor du IVe siècle, pas pour les débuts. La cause et la date ne peuvent être vraies ensemble.
- **Correction proposée** : « Les Pères du désert sont des ascètes chrétiens retirés dans les déserts d'Égypte à partir du IIIe siècle. Le mouvement s'amplifie au IVe, quand l'Église devient officielle et que le martyre cesse d'être l'horizon de la radicalité chrétienne. »

### [MOYEN] Rupture Moscou-Constantinople : la cause est datée après l'effet
- **Où** : cours `cours/mythologie-religions.ts` — `mr3-orthodoxie`, section « Le calendrier et la crise » ; question `mythologie-religions-3.ts` — `mr3-orthodoxie`
- **Texte** : cours — « la reconnaissance **en 2019** d'une Église orthodoxe ukrainienne autocéphale par le patriarcat de Constantinople a provoqué la rupture de communion du patriarcat de Moscou » ; question — « Le patriarcat de Moscou a rompu la communion avec Constantinople **en 2018**. »
- **Problème** : le tomos d'autocéphalie date de janvier 2019 ; Moscou a rompu la communion en **octobre 2018**, à la suite de la décision synodale de Constantinople. Le cours fait donc précéder l'effet par sa cause.
- **Correction proposée** : « la décision de Constantinople, en octobre 2018, d'accorder l'autocéphalie à une Église orthodoxe ukrainienne — tomos signé en janvier 2019 — a provoqué la rupture de communion du patriarcat de Moscou. »

### [MOYEN] Le blasphème : « n'existe pas depuis 1881 », sauf en Alsace-Moselle jusqu'en 2017
- **Où** : `mythologie-religions-3.ts` — `mr3-dialogue-conflits`
- **Texte** : « Le délit de blasphème n'existe pas en droit français depuis 1881. »
- **Problème** : exact pour l'essentiel du territoire, faux pour l'Alsace-Moselle, où le délit de blasphème issu du droit local est resté en vigueur jusqu'à son abrogation en **janvier 2017**. Le domaine relève pourtant soigneusement l'exception alsacienne-mosellane ailleurs (`mr2-religions-france`, `mr3-religion-politique`) : l'omission est ici incohérente.
- **Correction proposée** : « Le délit de blasphème a disparu du droit français avec la loi de 1881 ; il a subsisté en Alsace-Moselle, au titre du droit local, jusqu'à son abrogation en 2017. »

### [MOYEN] Grace Davie est une sociologue, pas « le sociologue »
- **Où** : `mythologie-religions-3.ts` — `mr3-nouvelles-spiritualites` (« Qu'est-ce que le croire sans appartenir ? »)
- **Texte** : « L'expression est due au **sociologue** britannique Grace Davie. »
- **Problème** : Grace Davie est une femme. L'apprenant retient une information fausse sur la personne.
- **Correction proposée** : « L'expression *believing without belonging* est due à la sociologue britannique Grace Davie. »

### [MOYEN] Le Royaume-Uni donné pour un État confessionnel
- **Où** : `mythologie-religions-3.ts` — `mr3-religion-politique` ; cours `mr3-religion-politique`, section « Toute la gamme »
- **Texte** : « Le Royaume-Uni et le Danemark en sont des exemples européens » / « le Royaume-Uni, le Danemark ou la Grèce en relèvent »
- **Problème** : seule l'**Angleterre** a une Église établie. Le pays de Galles (1920) et l'Irlande du Nord (1871) ont été désétablis, et l'Église d'Écosse n'est pas une Église d'État au même sens. Dire « le Royaume-Uni » est inexact.
- **Correction proposée** : « L'Angleterre, le Danemark et la Grèce en offrent des exemples européens, avec des libertés religieuses garanties. »

### [MOYEN] Herzl et l'affaire Dreyfus : une causalité contestée donnée pour acquise
- **Où** : `mythologie-religions-3.ts` — `mr3-judaisme-histoire`
- **Texte** : « Theodor Herzl en formule le programme en 1896 **après l'affaire Dreyfus**. »
- **Problème** : la formule suggère une cause unique et un enchaînement net. Or l'affaire commence en 1894 et se poursuit jusqu'en 1906 — elle n'est pas « passée » en 1896 — et le rôle déclencheur qu'Herzl lui a lui-même attribué rétrospectivement est discuté par les historiens, qui invoquent aussi l'antisémitisme viennois et les pogroms russes.
- **Correction proposée** : « Theodor Herzl en formule le programme dans *L'État des Juifs* en 1896, dans un contexte marqué par l'affaire Dreyfus et par la montée de l'antisémitisme en Europe centrale et orientale. »

### [MOYEN] Le Bouddha « prince du nord de l'Inde »
- **Où** : `mythologie-religions.ts` — `mr-hindouisme-bouddhisme`
- **Texte** : « Prince du nord de l'Inde au Ve siècle avant notre ère, il devient le Bouddha, l'Éveillé. »
- **Problème** : deux approximations. Lumbini, son lieu de naissance traditionnel, se trouve dans l'actuel **Népal**. Et le titre de « prince » vient de la tradition hagiographique : son père dirigeait le clan des Shakya, groupe organisé en république oligarchique plutôt qu'en royaume. Présenter la légende comme un état civil, dans un domaine qui exige la neutralité, est un défaut.
- **Correction proposée** : « Né dans la plaine gangétique, aux confins de l'Inde et du Népal actuels, vers le Ve siècle avant notre ère ; la tradition en fait un prince du clan des Shakya. »

### [MOYEN] Deux redites de contenu entre notions
- **Isis** : `mythologie-religions.ts` — `mr-mythologie-egyptienne` « Son culte s'est répandu dans tout le monde romain, jusqu'en Gaule et en Bretagne. » **vs** `mythologie-religions-3.ts` — `mr3-cultes-antiques` « Son culte s'est répandu de l'Égypte à la Bretagne romaine. »
- **Reliques** : `mythologie-religions.ts` — `mr-symboles-rites` « Le commerce des reliques, très actif au Moyen Âge, a nourri l'économie de nombreux sanctuaires. » **vs** `mythologie-religions-3.ts` — `mr3-croyances-populaires` « Quel effet économique la possession de reliques avait-elle au Moyen Âge ? » → « Elle attirait pèlerins et donations, enrichissant le sanctuaire. »
- **Aïd** : `mythologie-religions.ts` — `mr-islam` donne en explication « L'Aïd el-Adha, la grande fête, commémore le sacrifice interrompu d'Abraham », qui est exactement la bonne réponse de la question `mr3-fetes-religieuses` « Que commémore l'Aïd el-Adha ? ».
- **Compostelle** : trois formulations quasi identiques sur les motivations mixtes des marcheurs (`mr2-pelerinages` question et cours, `mr3-nouvelles-spiritualites`).
- **Correction proposée** : dédoublonner les explications et déplacer l'information là où elle est interrogée, pas là où elle est donnée gratuitement.

### [MOYEN] Une question agrammaticale, difficile à comprendre
- **Où** : `mythologie-religions.ts` — `mr-lieux-sacres`
- **Texte** : « Quel édifice de La Mecque les musulmans du monde entier orientent-ils leur prière vers lui ? »
- **Problème** : la phrase est fautive (reprise pronominale « vers lui » après un interrogatif déjà complément). Un apprenant doit relire pour comprendre ce qui est demandé.
- **Correction proposée** : « Vers quel édifice de La Mecque les musulmans du monde entier orientent-ils leur prière ? »

### [MINEUR] Quatre notions n'ont que neuf questions au lieu de dix
- **Où** : `mr-mythes-fondateurs`, `mr2-mythologie-grecque-dieux`, `mr2-mythologie-romaine`, `mr3-judaisme-histoire`
- **Problème** : toutes les autres notions du domaine en comptent dix. Irrégularité de gabarit.

### [MINEUR] « rededicace » sans accent
- **Où** : `mythologie-religions.ts` — `mr-judaisme` ; cours `mr-judaisme`, section « Le temps et les fêtes »
- **Texte** : « La rededicace du Temple de Jérusalem au IIe siècle avant notre ère »
- **Problème** : le mot s'écrit avec un accent aigu sur le deuxième *e*. Faute présente deux fois : dans la question et dans le cours.
- **Correction proposée** : « La redédicace du Temple de Jérusalem au IIe siècle avant notre ère ».

### [MINEUR] Réponses commençant par une minuscule
- **Où** : plusieurs, dont `mythologie-religions.ts` — `mr-hindouisme-bouddhisme` (« l'extinction de la soif et la sortie du cycle des renaissances »), `mr-religions-monde` (« l'interdiction des religions dans l'espace public ») ; `mythologie-religions-2.ts` — `mr2-bible-textes` (« l'Exode », « l'Apocalypse », « l'Épître aux Hébreux », « l'Évangile de Jean »), `mr2-islam-histoire` (« l'Empire ottoman »), `mr2-religions-chiffres` (« l'Indonésie », « l'Arabie saoudite », « l'Égypte », « l'hindouisme », « l'islam ») ; `mythologie-religions-3.ts` — `mr3-orthodoxie` (« l'Église orthodoxe russe »)
- **Problème** : dans toutes les autres propositions, la première lettre est une majuscule. L'irrégularité est visible à l'écran et peut, dans une liste, signaler involontairement une réponse.
- **Correction proposée** : majuscule initiale partout (« L'Exode », « L'Apocalypse », « L'Indonésie », etc.).

### [MINEUR] « d'étroites parallèles »
- **Où** : `mythologie-religions-3.ts` — `mr3-mythologie-mesopotamienne`
- **Texte** : « Son récit présente **d'étroites parallèles** avec celui de Noé. »
- **Problème** : *parallèle* au sens de rapprochement est masculin.
- **Correction proposée** : « Son récit présente d'étroits parallèles avec celui de Noé. »

### [MINEUR] Rémus / Remus, et autres flottements orthographiques
- **Où** : questions `mythologie-religions-2.ts` — `mr2-mythologie-romaine` (« Romulus et **Rémus** ») ; cours `mr-mythes-fondateurs`, section « Fonder un peuple » (« Rome avec Romulus et **Remus** »)
- **Correction proposée** : « Rémus » partout.

### [MINEUR] Une ambiguïté pronominale sur Médée
- **Où** : `mythologie-religions-2.ts` — `mr2-mythologie-grecque-recits`
- **Texte** : « Elle tuera ensuite ses propres enfants pour se venger de **sa** trahison, selon Euripide. »
- **Problème** : « sa trahison » se rattache grammaticalement à Médée, alors qu'il s'agit de celle de Jason.
- **Correction proposée** : « Elle tuera ensuite ses propres enfants pour se venger de la trahison de Jason, selon Euripide. »

### [MINEUR] Bornes du nouvel an chinois : deux valeurs différentes
- **Où** : question `mythologie-religions.ts` — `mr-calendriers-fetes` (« entre le 21 janvier et le 20 février ») ; cours `mr-calendriers-fetes` (« entre fin janvier et mi-février »)
- **Correction proposée** : aligner le cours sur la question, qui est exacte.

### [MINEUR] Étymologie populaire de « carnaval » donnée pour littérale
- **Où** : cours `cours/mythologie-religions.ts` — `mr3-christianisme-pratiques`, section « Le calendrier »
- **Texte** : « le carnaval — dont le nom **signifie littéralement** l'adieu à la viande »
- **Problème** : *carne vale* (« adieu, viande ») est une étymologie populaire ; la forme retenue par les linguistes est *carnelevare*, « ôter la viande ».
- **Correction proposée** : « le carnaval — dont le nom vient probablement de *carnelevare*, ôter la viande. »

### [MINEUR] Estimation présentée comme un fait unique
- **Où** : `mythologie-religions-3.ts` — `mr3-textes-sacres-2` ; cours `mr3-textes-sacres-2`, section « Copier »
- **Texte** : « Combien de temps fallait-il pour copier une Bible à la main ? » → « Environ un an de travail pour un copiste »
- **Problème** : les estimations varient largement selon le format, la main et l'enluminure. Les distracteurs (« Quelques jours », « Quelques semaines », « Une dizaine d'années ») sont si invraisemblables que la question ne teste rien.
- **Correction proposée** : « Combien de peaux fallait-il environ pour une Bible manuscrite complète ? » → « Plusieurs centaines », qui est un fait mesurable.

### [GRAVE] « Dans l'Iliade » : l'énoncé affirme le contraire de sa propre explication
- **Où** : `heritage/culture-g/data/mythologie-religions.json` — question 58
- **Texte** : énoncé — « **Dans l'Iliade**, quelle ruse imaginée par Ulysse permet aux Grecs de prendre la ville de Troie ? » ; explication — « L'épisode est **surtout raconté dans l'Odyssée et dans l'Énéide** de Virgile. »
- **Problème** : la prise de Troie ne figure pas dans l'*Iliade*, qui s'achève sur les funérailles d'Hector. L'énoncé pose donc une prémisse fausse, et son explication la dément trois lignes plus bas. Le seed le dit d'ailleurs explicitement (`mythologie-religions-2.ts`, `mr2-mythologie-grecque-recits`) : « L'épisode est raconté dans l'Odyssée et l'Énéide, **non dans l'Iliade**. » Un apprenant qui retient l'énoncé retient une erreur que le reste du domaine corrige.
- **Correction proposée** : « Selon la légende, quelle ruse imaginée par Ulysse permet aux Grecs de prendre la ville de Troie ? »

### [GRAVE] Le corpus neuf redit massivement le cahier d'origine
- **Où** : `prisma/seed/culture-g/mythologie-religions{,-2,-3}.ts` **vs** `heritage/culture-g/data/mythologie-religions.json`
- **Texte** : exemples les plus francs, question du seed puis question héritée —
  - « Quel est l'attribut de Thor ? » `["Le marteau Mjöllnir", "La lance Gungnir", "L'épée Gram", "L'anneau Draupnir"]` **vs** q31 « Comment s'appelle le marteau de Thor ? » `["Gungnir", "Mjöllnir", "Gram", "Draupnir"]` — **les quatre mêmes items**, la même réponse.
  - « Contre quoi le cœur du défunt est-il pesé lors du jugement des morts ? » **vs** q26 « Lors du jugement des morts égyptien, contre quoi le cœur du défunt est-il pesé ? » — même phrase, mots inversés, et le distracteur « un scarabée d'or » dans les deux.
  - « Qu'est-ce que le Livre des morts égyptien ? » → « Un recueil de formules **destinées à** guider le défunt dans l'au-delà » **vs** q28 → « Un recueil de formules **pour** guider le défunt dans l'au-delà ».
  - Et la série : Rê dieu solaire (q21), Anubis et l'embaumement (q22), Isis épouse d'Osiris (q24), Thot scribe à tête d'ibis (q27), Odin père des dieux (q30), Yggdrasil (q35), Zeus roi de l'Olympe (q1), Poséidon dieu des mers (q3), Hermès messager (q9), Artémis sœur d'Apollon (q59), Achille et son talon (q6), Thésée et le Minotaure (q7), Prométhée et le feu (q11), Pandore et la jarre (q4), Romulus et Rémus (q17), les Vestales (q20), Jupiter = Zeus (q15), Vénus = Aphrodite (q18), les cinq piliers (q39), Guru Nanak (q46), Yom Kippour (q47), Hanoukka (q42), la Trimurti (q43), Siddhartha Gautama (q38), le schisme de 1054 (q44), Luther en 1517 (q45), Nicée 325 (q50), Pâques (q48), le dalaï-lama (q52), le cheval de Troie (q58) — chacune a son équivalent dans le seed.
- **Problème** : l'en-tête de `prisma/seed/culture-g/cours/fusions.ts` le dit lui-même — « Le corpus de questions écrit ici a été composé sans être confronté aux 322 leçons du cahier d'origine » — et ajoute « Les questions, elles, ne sont jamais en double — le validateur l'interdit ». Le validateur ne bloque manifestement que les énoncés **identiques** : toutes les paires ci-dessus sont des reformulations, et passent. L'apprenant révise donc deux fois le même fait sous deux habillages. Le problème est aggravé pour les sept notions fusionnées (`mr-mythologie-nordique` → `cg-mythologie-religions-02`, `mr-hindouisme-bouddhisme` → `-07`, `mr2-mythologie-romaine` → `-01`, `mr2-mythologies-asiatiques` → `-10`, `mr2-christianisme-histoire` → `-04`, `mr2-islam-histoire` → `-05`, `mr3-judaisme-histoire` → `-06`) : les questions neuves y rejoignent physiquement la leçon héritée, donc les doublons se retrouvent dans le même chapitre.
- **Correction proposée** : passer le corpus neuf au crible des questions héritées et supprimer les reformulations ; en priorité pour les sept notions fusionnées, où la cohabitation est visible à l'écran. Durcir le validateur : comparer les **couples (fait interrogé, bonne réponse)** et non les chaînes d'énoncés.

### [MOYEN] Cinq questions de philosophie pure dans un domaine « Mythologie & Religions »
- **Où** : `heritage/culture-g/data/mythologie-religions.json` — questions 53 à 57
- **Texte** : « À quel philosophe grec attribue-t-on la formule "Je sais que je ne sais rien" ? », « Quel philosophe est l'auteur de la célèbre allégorie de la caverne ? », « Quelle école philosophique antique, fondée par Zénon de Kition, tire son nom d'un portique d'Athènes ? », « Pour Épicure, en quoi consiste le véritable plaisir ? », « Quel philosophe cynique, qui vivait dans une jarre… »
- **Problème** : aucune de ces cinq questions ne porte sur un mythe, un rite, une croyance ou une institution religieuse. La maïeutique, l'allégorie de la caverne et l'ataraxie ne relèvent pas du domaine. Le seed a bien une notion `mr-philosophie-religion`, mais elle porte, elle, sur les questions religieuses (agnosticisme, problème du mal, pari de Pascal) — ce qui est cohérent. Ici le contenu ne correspond pas à son domaine.
- **Correction proposée** : déplacer ces cinq questions vers un domaine de philosophie, ou les remplacer par des questions portant sur le rapport des écoles antiques au divin (les dieux d'Épicure, la providence stoïcienne, le procès d'impiété de Socrate) — sujets qui, eux, appartiennent au domaine.

### [MINEUR] « Hanouka » et « Hanoukka » : deux graphies dans le même domaine
- **Où** : `prisma/seed/culture-g/mythologie-religions.ts` et `cours/mythologie-religions.ts` — `mr-judaisme` (« Hanouka ») **vs** `heritage/culture-g/data/mythologie-religions.json` — question 42 (« Hanoukka »)
- **Correction proposée** : retenir une graphie unique pour tout le domaine.

### [GRAVE] Le jeûne du ramadan : six fois « du lever du soleil », deux fois « de l'aube » — le domaine se contredit
- **Où** : formulations **fausses** — `prisma/seed/culture-g/mythologie-religions-3.ts` (`mr3-islam-pratiques`, « Qu'est-ce que le ramadan ? ») ; `prisma/seed/culture-g/cours/mythologie-religions.ts` (`mr3-islam-pratiques`, section « Le temps du jeûne ») ; `heritage/culture-g/data/mythologie-religions.json` (questions 39 et 49) ; `heritage/…/lecons/mythologie-religions/05.json` (section « Les cinq piliers » et explication de la troisième question). Formulations **exactes** — `heritage/…/lecons/mythologie-religions/15.json` (section « Le ramadan et l'Aïd al-Fitr » et explication de la quatrième question).
- **Texte** : « Un mois de jeûne **du lever au coucher du soleil** » / « les adultes en bonne santé s'abstiennent de boire, de manger et d'avoir des relations sexuelles **du lever au coucher du soleil** » — contre, dans la leçon 15 : « les adultes en bonne santé s'abstiennent de manger, de boire et d'avoir des relations sexuelles **depuis l'aube jusqu'au coucher du soleil** » et « Le jeûne, l'un des cinq piliers, s'observe **de l'aube au coucher du soleil** ».
- **Problème** : le jeûne commence à l'aube (*fajr*), soit une heure à une heure et demie avant le lever du soleil. Six passages du domaine donnent l'heure fausse, deux donnent la bonne — un apprenant qui révise l'ensemble reçoit deux réponses incompatibles sur un point qu'il est censé apprendre par cœur. La formulation juste existe déjà dans le corpus : il suffit de la propager. Le cours du seed se contredit d'ailleurs lui-même, puisqu'il évoque « un ramadan d'été aux latitudes nordiques [qui] impose des jeûnes de dix-huit heures », durée qui n'est atteignable qu'en comptant depuis l'aube.
- **Correction proposée** : reprendre partout la formulation de la leçon 15 — « de l'aube au coucher du soleil » — et supprimer les six occurrences de « du lever au coucher du soleil ».

### [GRAVE] Damas capitale « au VIIIe siècle » : un siècle de trop
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/05.json` — section « Expansion, empires et civilisation »
- **Texte** : « Damas devient capitale **au VIIIe siècle**, avant Bagdad, fondée par les Abbassides et devenue un grand foyer intellectuel. »
- **Problème** : Damas devient capitale du califat omeyyade en **661**, soit au VIIe siècle. Elle cesse de l'être en 750, quand les Abbassides prennent le pouvoir et fondent Bagdad en 762 — c'est Bagdad qui est du VIIIe siècle. La phrase place le début du califat omeyyade à sa fin.
- **Correction proposée** : « Damas devient capitale du califat omeyyade en 661, avant que les Abbassides ne fondent Bagdad en 762, qui devient un grand foyer intellectuel. »

### [GRAVE] Les cinq questions de la leçon 05 ont chacune leur jumelle dans le seed
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/05.json` (quiz) **vs** `prisma/seed/culture-g/mythologie-religions.ts` (`mr-islam`) et `-2.ts` (`mr2-islam-histoire`)
- **Texte** : les cinq paires, leçon puis seed —
  1. « Quel événement marque le point de départ du calendrier musulman ? » → « L'Hégire, le départ de La Mecque vers Médine en 622 » **vs** « Quel événement marque le début du calendrier musulman ? » → « L'hégire, le départ de La Mecque vers Médine ».
  2. « Comment appelle-t-on les chapitres du Coran ? » → « Les sourates » **vs** « En combien de chapitres le Coran est-il divisé ? » → « Cent quatorze sourates ».
  3. « Lequel de ces éléments ne fait pas partie des cinq piliers de l'islam ? » **vs** « Combien de piliers l'islam sunnite compte-t-il ? » (et, une troisième fois, la question 39 du cahier d'origine).
  4. « Sur quelle question porte principalement la séparation historique entre sunnites et chiites ? » → « La succession à la tête de la communauté après Muhammad » **vs** « Quelle est l'origine de la division entre sunnites et chiites ? » → « Un désaccord sur la succession du Prophète ».
  5. « Quel savant, actif dans le monde musulman médiéval, a laissé son nom au mot algorithme ? » → Al-Khwarizmi, distracteurs Ibn Sina et Ibn Rushd **vs** « Quel savant persan donne son nom à l'algorithme ? » → Al-Khwarizmi, **mêmes distracteurs Ibn Sina et Ibn Rushd**.
- **Problème** : `mr2-islam-histoire` est fusionnée dans `cg-mythologie-religions-05` (`cours/fusions.ts`). Les questions du seed rejoignent donc **physiquement** cette leçon : l'apprenant verra, dans le même chapitre, deux fois la même question sur al-Khwarizmi avec les mêmes distracteurs. Le cas n'est pas isolé : la leçon 06 (`cg-mythologie-religions-06`, hôte de `mr3-judaisme-histoire`) demande « Quel événement de l'an 70 de notre ère transforme profondément le judaïsme ? » → « La destruction du Second Temple par les Romains », et le seed « Que se passe-t-il en 70 de notre ère à Jérusalem ? » → **exactement la même chaîne de caractères**. Idem pour la leçon 02 (`mr-mythologie-nordique`) : « Comment se nomme l'arbre immense qui relie les mondes ? » → Yggdrasil, distracteur Bifröst expliqué comme « le pont arc-en-ciel », face au seed « Comment s'appelle l'arbre-monde de la mythologie nordique ? » → Yggdrasil, « Bifröst est le pont arc-en-ciel ».
- **Correction proposée** : avant toute autre chose, dédoublonner les sept notions fusionnées contre le quiz de leur leçon hôte — c'est là que la redite est visible à l'écran. Puis étendre au reste du domaine.

### [GRAVE] Le recouvrement seed ↔ leçons n'est pas ponctuel : il est systématique
- **Où** : leçons 07, 08 et 09 de `heritage/culture-g/data/lecons/mythologie-religions/` **vs** `mr-hindouisme-bouddhisme`, `mr2-mythologie-celte`, `mr3-mythologie-mesopotamienne`
- **Texte** : les cinq questions du quiz de la **leçon 07** ont chacune leur jumelle dans `mr-hindouisme-bouddhisme` — « Comment se nomment les textes les plus anciens de la tradition hindoue ? » / « Quels sont les textes les plus anciens de la tradition hindoue ? » ; « Dans quel grand poème épique se trouve la Bhagavad-Gita ? » / « Quelle épopée indienne contient la Bhagavad-Gîtâ ? » ; « Que désigne le mot samsara ? » / « Qu'est-ce que le samsara ? » ; « Quel enseignement le Bouddha aurait-il donné lors de son premier sermon ? » / « Quelles sont les quatre nobles vérités du bouddhisme ? » ; « Quel courant du bouddhisme est majoritaire au Sri Lanka, en Thaïlande et en Birmanie ? » / « Quelle grande branche du bouddhisme est majoritaire au Tibet et en Mongolie ? », dont l'explication donne la réponse de l'autre (« Le theravada domine en Asie du Sud-Est »). **Et `mr-hindouisme-bouddhisme` est fusionnée dans `cg-mythologie-religions-07`** : les dix questions se retrouvent dans le même chapitre.
  Pour la **leçon 08** : « Pourquoi les Celtes de l'Antiquité n'ont-ils presque pas laissé de textes sur leurs dieux ? » → « les druides réservaient la transmission du savoir sacré à la mémoire et à l'oral » **vs** seed « Pourquoi la mythologie celtique continentale est-elle mal connue ? » → « Les druides interdisaient de mettre par écrit leur savoir » ; plus Lug et Lugdunum, le Livre des conquêtes, l'Autre Monde, les trois classes sacerdotales, tous repris.
  Pour la **leçon 09** : Enkidu, la quête d'immortalité chez Uta-napishti, la bibliothèque de Ninive, le choc de 1872, Marduk vainqueur de Tiamat — les cinq sujets du quiz sont ceux de `mr3-mythologie-mesopotamienne`.
- **Problème** : le recouvrement n'est pas accidentel sur trois ou quatre questions, il touche des quiz entiers. Sur les leçons 05, 06 et 07 — toutes trois hôtes d'une fusion — c'est **cinq questions sur cinq** qui ont leur double.
- **Correction proposée** : traiter le problème à la racine plutôt que paire par paire. Pour chaque notion fusionnée, réécrire les questions du seed en partant du quiz de la leçon hôte : garder ce que la leçon n'interroge pas (par exemple, pour le bouddhisme : le vinaya, l'ordination temporaire, le rôle d'Ashoka dans les inscriptions), supprimer le reste.

### [MINEUR] Deux translittérations du même nom dans une même notion
- **Où** : après fusion, `mr-hindouisme-bouddhisme` et `cg-mythologie-religions-07` cohabitent
- **Texte** : « Les **Véda**s » et « **Bhagavad-Gita** » (leçon 07) face à « Les **Védas** » et « **Bhagavad-Gîtâ** » (seed) ; de même « **Upanishad** » / « **Upanishads** », « **Purana** » / « **Puranas** ». Ailleurs : « **Uta-napishti** » (leçon 09) face à « **Utnapishtim** » (seed, `mr3-mythologie-mesopotamienne`), « **Énuma elish** » face à « **Enuma Elish** ».
- **Problème** : le seed suit l'usage francisé (accents, marque du pluriel), les leçons l'usage savant (formes invariables). Les deux conventions se défendent ; leur cohabitation dans un même chapitre, non.
- **Correction proposée** : trancher pour l'ensemble du domaine — l'usage francisé étant le plus lisible pour un apprenant — et aligner l'autre corpus.

### [GRAVE] Questions et réponses simplement interverties entre le cahier et le seed
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/06.json` (quiz) **vs** `prisma/seed/culture-g/mythologie-religions.ts` — `mr-judaisme`
- **Texte** : leçon — « Comment appelle-t-on l'ensemble des règles alimentaires du judaïsme ? » → « **La cacherout** » ; seed — « Qu'est-ce que **la cacherout** ? » → « **L'ensemble des règles alimentaires du judaïsme** ». Même paire pour Pessah : leçon — « Quelle fête juive rappelle la sortie d'Égypte ? » → « Pessah » ; seed — « Que commémore la fête de Pessah ? » → « La sortie d'Égypte ».
- **Problème** : ce ne sont pas deux angles différents sur un même sujet, c'est la même paire terme-définition posée dans un sens puis dans l'autre. Aucun apprentissage supplémentaire, et le validateur ne le voit pas puisque les chaînes diffèrent.
- **Correction proposée** : ne garder qu'un sens par paire terme-définition, et réserver la seconde question à un contenu réellement distinct (par exemple, pour la cacherout : la distinction entre *casher* et *halal*, ou l'obligation d'abattage rituel).

### [MOYEN] La résurrection énoncée comme un fait, contre l'usage du reste du domaine
- **Où** : `heritage/culture-g/data/mythologie-religions.json` — troisième cours, section « Le christianisme, religion la plus répandue au monde »
- **Texte** : « Selon les Évangiles, Jésus fut crucifié à Jérusalem sous le gouverneur romain Ponce Pilate, vers l'an 30 ; **sa résurrection, célébrée à Pâques, fonde la foi chrétienne.** »
- **Problème** : le « selon les Évangiles » ne porte que sur la première proposition ; après le point-virgule, la résurrection est affirmée comme un événement, non comme une croyance. C'est le seul endroit du domaine où une croyance est ainsi posée en fait — la leçon 04 écrit au contraire, sur le même sujet, « Ses disciples **affirment ensuite** qu'il est ressuscité » et « la mort et **selon la foi chrétienne** la résurrection de Jésus », et la leçon 04 encore « Pâques est la fête qui commémore, **selon la tradition**, la résurrection ». L'exigence de neutralité est tenue partout ailleurs.
- **Correction proposée** : « Selon les Évangiles, Jésus fut crucifié à Jérusalem sous le gouverneur romain Ponce Pilate, vers l'an 30 ; la foi en sa résurrection, célébrée à Pâques, fonde le christianisme. »

### [MOYEN] Le natron pendant soixante-dix jours
- **Où** : `heritage/culture-g/data/mythologie-religions.json` — deuxième cours, section « La mort et l'au-delà chez les Égyptiens »
- **Texte** : « à **dessécher le corps dans le natron pendant environ soixante-dix jours**, puis à l'envelopper de bandelettes »
- **Problème** : les soixante-dix jours sont la durée de **l'ensemble** du rituel funéraire, telle que la donne Hérodote ; la dessiccation dans le natron proprement dite occupe une quarantaine de jours, le reste étant consacré au traitement et au bandelettage. Rattacher les soixante-dix jours au seul natron, puis ajouter le bandelettage « ensuite », allonge le rituel au-delà de ce qu'il durait.
- **Correction proposée** : « à dessécher le corps dans le natron pendant une quarantaine de jours, puis à l'envelopper de bandelettes, l'ensemble du rituel funéraire durant environ soixante-dix jours. »

### [MINEUR] Trois graphies pour Hanouka, deux pour le shabbat, deux pour Baldr
- **Où** : « Hanouka » (`prisma/seed/culture-g/mythologie-religions.ts` et son cours, `mr-judaisme`), « Hanoukka » (`heritage/…/mythologie-religions.json`, question 42), « Hanoucca » (`heritage/…/lecons/mythologie-religions/06.json`) ; « shabbat » (seed) **vs** « chabbat » (leçon 06) ; « Baldr » (seed, `mr-mythologie-nordique`) **vs** « Balder » (leçon 02)
- **Problème** : trois translittérations du même mot dans un domaine que l'apprenant révise d'un bloc. Sur une fête interrogée dans plusieurs notions, la graphie devient elle-même une source de doute.
- **Correction proposée** : fixer une graphie par terme pour tout le domaine, et l'appliquer au seed comme au cahier d'origine.

### [MINEUR] « Combien de livres compose le Nouveau Testament ? »
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/04.json` — première question du quiz
- **Texte** : « Combien de livres **compose** le Nouveau Testament ? »
- **Problème** : le sujet est « livres », au pluriel.
- **Correction proposée** : « Combien de livres **composent** le Nouveau Testament ? »

### [MINEUR] « au cours des IIe et IVe siècles »
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/04.json` — section « Les textes de référence »
- **Texte** : « La liste définitive de ces livres, appelée canon, s'est fixée progressivement **au cours des IIe et IVe siècles** »
- **Problème** : la formule saute le IIIe siècle et donne à lire deux dates isolées là où il s'agit d'un intervalle. Le seed écrit correctement « entre le IIe et le IVe siècle ».
- **Correction proposée** : « s'est fixée progressivement du IIe au IVe siècle ».

### [MINEUR] « séfévide »
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/05.json` — section « Expansion, empires et civilisation »
- **Texte** : « l'Empire **séfévide** en Perse »
- **Correction proposée** : « l'Empire safavide en Perse », graphie usuelle en français.

### [GRAVE] Le cahier d'origine se redouble lui-même : le fil d'Ariane, quatre fois
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/03.json` (quiz) **et** `…/14.json` (quiz) **et** `heritage/culture-g/data/mythologie-religions.json` (question 7) **et** `prisma/seed/culture-g/mythologie-religions.ts` (`mr-mythes-fondateurs`)
- **Texte** : leçon 03 — « Quel objet Ariane remet-elle à Thésée pour qu'il ressorte du Labyrinthe ? » → « Une pelote de fil » ; leçon 14 — « Comment Thésée parvient-il à sortir du Labyrinthe après avoir tué le Minotaure ? » → « Il déroule une pelote de fil donnée par Ariane » ; cahier, question 7 — « Quel héros athénien tua le Minotaure dans le labyrinthe de Crète ? », dont l'explication détaille le fil ; seed — « Quel héros grec doit affronter le Minotaure dans un labyrinthe ? », explication « Ariane lui donne un fil pour retrouver la sortie ».
- **Problème** : les deux premières sont deux **leçons du même domaine** qui posent la même question à quelques mots près. Le recouvrement n'est donc pas seulement un défaut du corpus neuf ajouté par-dessus l'ancien : le cahier d'origine se répète déjà entre ses propres chapitres.
- **Correction proposée** : la leçon 14 porte sur les créatures : y remplacer la question par une question sur la créature elle-même (la naissance du Minotaure, le taureau de Poséidon et le manquement de Minos, que la leçon expose déjà) et laisser le fil d'Ariane à la leçon 03, qui porte sur les héros.

### [GRAVE] Taoïsme et confucianisme : la leçon 17 et le seed posent les mêmes trois questions
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/17.json` (quiz) **vs** `prisma/seed/culture-g/mythologie-religions-3.ts` — `mr3-taoisme-confucianisme`
- **Texte** :
  - « À quel sage la tradition attribue-t-elle le Dao de jing ? » → « Laozi » **vs** « Quel texte fondateur est attribué à Laozi ? » → « Le Tao-tö king » — même paire, énoncé et réponse simplement échangés.
  - « Que désigne la notion taoïste de wuwei ? » → « **le non-agir, c'est-à-dire l'action accordée au cours des choses** » **vs** « Qu'est-ce que le wu wei dans le taoïsme ? » → « **Le non-agir, l'action conforme au cours naturel des choses** ».
  - « Dans quel recueil les disciples ont-ils rassemblé les propos de Confucius ? » → « les Entretiens » **vs** « Quel recueil rassemble les propos de Confucius ? » → « Les Entretiens ».
- **Problème** : trois des cinq questions de la leçon 17 ont leur double, dont une quasi mot pour mot. S'y ajoutent le *ren*, la piété filiale et la coexistence des « trois enseignements », traités des deux côtés. Le seed écrit par ailleurs « Tao-tö king » et « wu wei » là où la leçon écrit « Dao de jing » et « wuwei » — deux systèmes de transcription du chinois cohabitent dans le même domaine.
- **Correction proposée** : réécrire `mr3-taoisme-confucianisme` autour de ce que la leçon 17 n'aborde pas — le Yi Jing, le feng shui, Zhuangzi et le rêve du papillon — et fixer une transcription unique (pinyin ou EFEO) pour tout le domaine.

### [GRAVE] Le calcul de la date de Pâques et le décalage du calendrier lunaire, chacun posé trois ou quatre fois
- **Où** : `mythologie-religions.ts` — `mr-calendriers-fetes` (deux questions) ; `cours/mythologie-religions.ts` — `mr-calendriers-fetes` ; `mythologie-religions-3.ts` — `mr3-fetes-religieuses` (deux questions) et son cours ; `heritage/…/lecons/mythologie-religions/15.json` (deux questions) ; `heritage/…/mythologie-religions.json` (question 48)
- **Texte** : « Le premier dimanche après la pleine lune suivant l'équinoxe de printemps » (seed) / « Elle tombe le dimanche suivant la première pleine lune après l'équinoxe de printemps » (leçon 15) / « le concile de Nicée (325) l'a fixée au premier dimanche après la première pleine lune de printemps » (cahier) ; et « Le calendrier musulman est purement lunaire » (seed, `mr-calendriers-fetes`) / « Parce que le calendrier musulman est lunaire et se décale d'environ dix à onze jours par an » (leçon 15) / « Les calendriers religieux ne suivent pas tous le calendrier solaire » (seed, `mr3-fetes-religieuses`).
- **Problème** : deux mécanismes, sept ou huit occurrences. Le comput pascal est en outre formulé de trois façons dont une inexacte — « la première pleine lune **de printemps** » (cahier, question 48) n'est pas la même chose que « la pleine lune **suivant l'équinoxe** », et la leçon 15 est la seule à préciser que l'équinoxe est conventionnellement « calé sur le 21 mars », ce qui est le point qui fait vraiment comprendre le calcul.
- **Correction proposée** : ne garder qu'une question par mécanisme, celle de la leçon 15 pour Pâques (la plus complète) et celle de `mr-calendriers-fetes` pour le décalage lunaire ; retirer les autres et reverser leur contenu en explication.

### [MOYEN] Une leçon entière de philosophie antique dans « Mythologie & Religions »
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/12.json` — « La philosophie antique : Socrate, Platon, Aristote » (5 sections, 5 questions), en plus des questions 53 à 57 de `heritage/culture-g/data/mythologie-religions.json`
- **Texte** : les cinq questions portent sur le problème socratique, la maïeutique, le procès de 399, l'allégorie de la caverne et la définition aristotélicienne de la vertu comme juste milieu.
- **Problème** : dix questions et cinq sections sur Socrate, Platon et Aristote, sans qu'aucune n'aborde le rapport de ces philosophes au divin, au culte ou au mythe — le seul angle qui les rattacherait au domaine. Le procès de Socrate pour **impiété** est même raconté sans que la dimension religieuse de l'accusation soit exploitée. À côté, la notion `mr-philosophie-religion` du seed traite, elle, de questions authentiquement religieuses (agnosticisme, problème du mal, pari de Pascal, argument ontologique) : le contraste montre qu'un traitement pertinent au domaine était possible.
- **Correction proposée** : soit déplacer la leçon 12 et les questions 53 à 57 vers un domaine de philosophie, soit les réorienter — les dieux d'Épicure qui ne s'occupent pas des hommes, la providence stoïcienne, le *daimonion* de Socrate et le chef d'accusation d'impiété, le démiurge du *Timée*, le premier moteur d'Aristote.

### [MOYEN] Deux dates pour l'Institution de la religion chrétienne, sans explication
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/16.json` (section « Zwingli, Calvin et la rupture anglaise » et deuxième question du quiz) **vs** `prisma/seed/culture-g/mythologie-religions.ts` — `mr-christianisme`
- **Texte** : leçon 16 — « il publie **en 1536** l'Institution de la religion chrétienne » ; seed — « Son Institution de la religion chrétienne, **publiée en français en 1541** ».
- **Problème** : les deux dates sont exactes — édition latine de 1536, traduction française de 1541 — mais aucun des deux textes ne mentionne l'autre. Un apprenant qui révise le domaine entier voit deux dates contradictoires pour le même ouvrage et n'a aucun moyen de trancher.
- **Correction proposée** : dans la leçon 16, « il publie en 1536 l'Institution de la religion chrétienne, en latin, dont il donnera lui-même une version française en 1541 ».

### [MINEUR] Le shintō d'État « jusqu'à la réforme constitutionnelle de 1945 »
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/17.json` — section « Le shintoïsme et la coexistence des traditions au Japon »
- **Texte** : « le shintō devient religion d'État et sert à fonder l'autorité impériale, **jusqu'à la réforme constitutionnelle de 1945** »
- **Problème** : ce qui met fin au shintō d'État en décembre 1945 est une directive de l'occupant, non une réforme constitutionnelle ; la Constitution qui inscrit la séparation du religieux et de l'État est promulguée en 1946 et entre en vigueur en 1947.
- **Correction proposée** : « jusqu'à sa suppression par la directive sur le shintō de décembre 1945, confirmée par la Constitution de 1946 ».

### [MINEUR] La remontée des mers datée du maximum glaciaire
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/13.json` — section « Ce que la comparaison met en évidence » et explication de la cinquième question
- **Texte** : « la remontée du niveau des mers après la dernière glaciation, **il y a environ vingt et un mille ans**, a englouti d'immenses territoires côtiers »
- **Problème** : vingt et un mille ans est la date du **maximum** glaciaire, pas celle de la remontée : celle-ci s'étale d'environ vingt mille à sept mille ans avant le présent. La phrase attache la date au mauvais événement.
- **Correction proposée** : « la remontée du niveau des mers qui a suivi le maximum glaciaire, il y a environ vingt et un mille ans, et s'est poursuivie pendant plus de dix millénaires, a englouti d'immenses territoires côtiers ».

### [MINEUR] Les leçons 16 et 17 mettent leurs réponses en minuscule, les quinze autres non
- **Où** : `heritage/culture-g/data/lecons/mythologie-religions/16.json` et `17.json`
- **Texte** : « la création de séminaires pour former les prêtres », « la suppression du célibat ecclésiastique », « que chaque prince fixe la confession de son territoire », « l'édit de Nantes », « l'édit de Worms », « le sacrifice offert aux ancêtres », « la piété filiale », « les Entretiens », « la limite entre l'espace sacré et le monde ordinaire »
- **Problème** : les leçons 01 à 15 capitalisent la première lettre de chaque proposition ; les leçons 16 et 17, non. Le même défaut existe au seed (voir plus haut). Un apprenant qui parcourt le domaine voit la convention changer d'un chapitre à l'autre.
- **Correction proposée** : majuscule initiale sur toutes les propositions, du seed comme du cahier d'origine.

### [MINEUR] Graphies flottantes, suite
- **Où** : « hajj » (seed `mr-islam`, leçon 15) **vs** « hadj » (leçon 05) ; « Aïd el-Fitr » (seed, cahier, leçon 05) **vs** « Aïd al-Fitr » (leçon 15) ; « Quetzalcóatl » (seed) **vs** « Quetzalcoatl » (leçon 11) ; « Tao-tö king » / « wu wei » (seed) **vs** « Dao de jing » / « wuwei » (leçon 17)
- **Problème** : s'ajoutent aux trois graphies de Hanouka et aux deux de shabbat, Baldr, Uta-napishti et Véda déjà signalées. Sur un domaine dont une part de l'apprentissage consiste précisément à retenir des noms propres translittérés, l'instabilité orthographique est un obstacle réel.
- **Correction proposée** : établir une table de translittération unique pour le domaine et l'appliquer aux deux corpus.

## Ce que la seconde passe a ajouté

*(à compléter — la passe 2 n'a pas commencé)*

## Ce qui est sain

Le domaine est remarquable sur la neutralité : les croyances y sont presque toujours introduites par « selon le mythe », « rapportée par des témoins », « la tradition en fait », « réputé libérer », et les questions les plus exposées — apparitions mariales, Vierge de Guadalupe, sacrifices humains celtiques, laïcité, islamophobie, athéisme — sont traitées sans prendre parti ni pour ni contre. Les explications nuancent souvent mieux que les énoncés (charia « diversement interprétée », fatwa « consultation, non sentence », monomythe de Campbell explicitement critiqué, mythes grecs « qui se contredisent »). Les cours sont substantiels : ils apprennent réellement quelque chose de plus que leurs questions, et plusieurs sections — l'orthopraxie antique, l'économie des reliques, le partage du monde entre Zeus, Poséidon et Hadès, la fabrique des canons — sont d'un vrai niveau.
