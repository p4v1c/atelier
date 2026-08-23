# Inventions & Technologie

> ÉTAT : interrompu. Fichiers lus : `prisma/seed/culture-g/sciences-tech.ts` (intégral), `prisma/seed/culture-g/sciences-tech-2.ts` (intégral), `prisma/seed/culture-g/sciences-tech-3.ts` (intégral), `prisma/seed/culture-g/cours/sciences-tech.ts` (intégral), `heritage/culture-g/data/sciences-tech.json` (intégral : 57 questions + 3 cours de 5 sections), `heritage/culture-g/data/lecons/sciences-tech/01.json` à `04.json` (intégral). Reste à lire : `heritage/culture-g/data/lecons/sciences-tech/05.json` à `17.json` (13 leçons, 65 sections, 65 questions de quiz). Passe 1 seulement — la seconde passe n'a pas pu être menée.

## Ce que j'ai lu

- `prisma/seed/culture-g/sciences-tech.ts` : 13 notions, 130 questions.
- `prisma/seed/culture-g/sciences-tech-2.ts` : 20 notions, 200 questions.
- `prisma/seed/culture-g/sciences-tech-3.ts` : 16 notions, 160 questions.
- `prisma/seed/culture-g/cours/sciences-tech.ts` : 45 cours (sur 49 notions), environ 180 sections.
- `heritage/culture-g/data/sciences-tech.json` : 57 questions, 3 cours de 5 sections.
- `heritage/culture-g/data/lecons/sciences-tech/01.json` à `04.json` : 20 sections de cours, 20 questions de quiz.

Total effectivement lu : **507 questions** et **environ 215 sections de cours**.

---

## Constats

### [GRAVE] La loi de Moore de 1965 est présentée avec la formulation révisée de 1975

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — notion `st-informatique-fondements`, question « Qu'énonce la loi de Moore formulée en 1965 ? » ; et `prisma/seed/culture-g/cours/sciences-tech.ts` — cours `st-informatique-fondements`, section « Faire tourner les machines ».
- **Texte (question)** : « Qu'énonce la loi de Moore formulée en 1965 ? » → bonne réponse « Le nombre de transistors d'une puce double environ tous les deux ans ».
- **Texte (cours)** : « Quant à la loi de Moore, formulée en 1965, elle observait que le nombre de transistors d'une puce doublait environ tous les deux ans ».
- **Problème** : erreur de fait. Dans son article de 1965, Moore annonce un doublement **chaque année**. C'est en 1975 qu'il révise sa prévision à un doublement tous les deux ans. Le dépôt le sait par ailleurs : `heritage/culture-g/data/sciences-tech.json`, question 15, dit correctement « observe en 1965 que le nombre de composants intégrés sur une puce double environ chaque année, prévision qu'il révise en 1975 à un doublement tous les deux ans », et le cours patrimonial « De la Pascaline à Internet » dit la même chose. Le seed contredit donc le cahier d'origine sur un point de date.
- **Aggravant** : le distracteur « La vitesse des processeurs double chaque année » est proche de l'énoncé réel de 1965 ; un apprenant informé peut légitimement hésiter.
- **Correction proposée** : énoncé « Qu'observe Gordon Moore en 1965, dans ce qu'on appellera la loi de Moore ? », bonne réponse « Le nombre de transistors d'une puce double environ chaque année », explication « Il révise sa prévision en 1975 à un doublement tous les deux ans. Ce n'est pas une loi physique mais une observation empirique devenue objectif industriel, aujourd'hui en fin de course. » Et dans le cours : « la loi de Moore, formulée en 1965 (doublement annuel), révisée par Moore lui-même en 1975 à un doublement tous les deux ans ».

### [GRAVE] Le voyage de Bertha Benz est daté d'un an trop tôt

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — notion `st-transports`, question « Qui dépose en 1886 le brevet de la première automobile à moteur à essence ? ».
- **Texte** : « Sa femme Bertha Benz réalisa l'année suivante le premier long trajet, prouvant la viabilité du véhicule. »
- **Problème** : le brevet est de janvier 1886 ; « l'année suivante » donne 1887. Le trajet Mannheim–Pforzheim de Bertha Benz date d'**août 1888**. Le dépôt lui-même le dit ailleurs : `heritage/culture-g/data/sciences-tech.json` question 6 (« En 1888, son épouse Bertha Benz effectue un trajet de plus de cent kilomètres entre Mannheim et Pforzheim ») et le cours patrimonial « Se déplacer autrement » (« le trajet de plus de cent kilomètres accompli en 1888 par son épouse Bertha »). Contradiction interne au domaine.
- **Correction proposée** : « Sa femme Bertha Benz réalisa en 1888 le premier long trajet, de Mannheim à Pforzheim, prouvant la viabilité du véhicule. »

### [GRAVE] Paternité fausse : la machine à coudre « à point noué » attribuée à Thimonnier

- **Où** : `prisma/seed/culture-g/sciences-tech-3.ts` — notion `st3-inventions-francaises`.
- **Texte** : « Qui invente la machine à coudre à point noué en France ? » → bonne réponse « Barthélemy Thimonnier pour la première machine industrielle » ; explication « Son atelier fut détruit en 1831 par des ouvriers tailleurs craignant pour leur emploi. »
- **Problème** : la machine de Thimonnier (brevet 1830) coud au **point de chaînette**, pas au point noué. Le point noué (lockstitch) est dû à Walter Hunt puis Elias Howe, tous deux dans les choix comme distracteurs — deux distracteurs sont donc en réalité plus proches de la vérité que la bonne réponse. L'option retenue ne répond d'ailleurs pas à la question posée : elle esquive vers « la première machine industrielle », ce qui trahit que l'énoncé est mal construit.
- **Correction proposée** : reformuler l'énoncé en « Qui met au point en France la première machine à coudre industrielle, au point de chaînette ? », bonne réponse « Barthélemy Thimonnier », explication « Brevetée en 1830, elle cousait au point de chaînette ; le point noué, plus solide, viendra d'Elias Howe aux États-Unis. Son atelier fut détruit en 1831 par des ouvriers tailleurs craignant pour leur emploi. »

### [GRAVE] Doublon franc : la conserve d'Appert posée deux fois avec les mêmes choix

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-alimentation-techniques` ; et `prisma/seed/culture-g/sciences-tech-3.ts` — `st3-inventions-francaises`.
- **Texte 1** : « Qui met au point la conserve stérilisée en 1795 ? », choix `["Nicolas Appert", "Louis Pasteur", "Peter Durand", "Ferdinand Carré"]`, explication « Il répondait à un concours lancé par le gouvernement pour nourrir les armées. »
- **Texte 2** : « Qui met au point la conserve appertisée ? », choix `["Nicolas Appert", "Louis Pasteur", "Peter Durand", "Ferdinand Carré"]`, explication « Il répondait à un concours lancé pour nourrir les armées napoléoniennes. »
- **Problème** : même fait, mêmes quatre choix dans le même ordre, même explication reformulée. Doublon franc.
- **Correction proposée** : supprimer la question de `st3-inventions-francaises` et la remplacer par une invention française non encore traitée dans le domaine (par exemple le procédé Chardonnet de la soie artificielle, ou l'aérotrain, ou le scaphandre autonome de Cousteau et Gagnan).

### [GRAVE] Doublon franc : « Qui invente le braille ? » posé deux fois

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-inventions-quotidien` (« Qui invente le braille, système de lecture tactile ? ») ; et `prisma/seed/culture-g/sciences-tech-3.ts` — `st3-inventions-francaises` (« Qui invente le braille ? »).
- **Problème** : même question, même réponse. Les explications diffèrent (âge de l'inventeur d'un côté, filiation avec le code de Charles Barbier de l'autre) mais l'item est identique du point de vue de l'apprenant.
- **Correction proposée** : garder la version de `st3-inventions-francaises` (l'explication sur Barbier apprend davantage) et remplacer celle de `st-inventions-quotidien`.

### [GRAVE] Doublon franc : le four à micro-ondes et la barre chocolatée, trois fois

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-inventions-quotidien` (« À quoi le four à micro-ondes doit-il sa découverte en 1945 ? ») ; `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-armement` (« Quelle invention civile dérive directement des recherches sur le radar ? ») ; `prisma/seed/culture-g/cours/sciences-tech.ts` — cours `st-inventions-quotidien` section « L'observation et le hasard » **et** cours `st2-armement` section « Ce que la guerre lègue au quotidien ».
- **Texte** : « Percy Spencer, ingénieur chez Raytheon, comprit que les micro-ondes chauffaient les aliments. » / « Percy Spencer remarqua qu'un magnétron faisait fondre la barre chocolatée dans sa poche. » / « un ingénieur ayant remarqué qu'une barre chocolatée fondait dans sa poche près d'un magnétron en fonctionnement. »
- **Problème** : la même anecdote, dans les mêmes termes, revient dans deux questions de deux notions différentes et dans deux cours. C'est de la redite pure.
- **Correction proposée** : la garder une seule fois, dans `st-inventions-quotidien`. Dans `st2-armement`, remplacer la question par une autre retombée civile du militaire déjà mentionnée par le cours (le GPS, la conserve, l'aviation à réaction), et retirer la phrase redondante du cours `st2-armement`.

### [GRAVE] Doublon franc : le principe de précaution traité deux fois en question et deux fois en cours

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-histoire-sciences` (« Qu'est-ce que le principe de précaution en droit français ? ») ; `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-innovation-societe` (« Qu'est-ce que le principe de précaution ? ») ; cours `st-histoire-sciences` section « Ceux qui l'ont faite, et à quel prix » ; cours `st2-innovation-societe` section « Quand la technique devient politique ».
- **Texte** : « Prendre des mesures proportionnées face à un risque incertain mais grave » / « Agir face à un risque incertain mais potentiellement grave » ; explications « il impose d'agir malgré l'incertitude, non de s'abstenir » / « Il exige des mesures proportionnées, non l'inaction ».
- **Problème** : doublon quasi mot pour mot, questions et cours confondus.
- **Aggravant** : les deux versions ne donnent pas la même date. La question de `st-histoire-sciences` dit « Inscrit dans la Charte de l'environnement de 2004 », le cours de `st2-innovation-societe` dit « inscrit dans la Constitution française en 2005 ». Les deux sont défendables (Charte adoptée en 2004, constitutionnalisée par la loi constitutionnelle du 1er mars 2005), mais l'apprenant voit deux dates sans explication.
- **Correction proposée** : ne traiter le principe de précaution qu'une fois, dans `st2-innovation-societe`, avec une formule unique : « Inscrit dans la Charte de l'environnement, adossée à la Constitution en 2005 ». Retirer l'item et le paragraphe de `st-histoire-sciences`.

### [GRAVE] Doublon franc : l'horloge atomique posée deux fois

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-mesure-temps` (« Sur quoi repose une horloge atomique ? ») ; et `prisma/seed/culture-g/sciences-tech-3.ts` — `st3-instrument-scientifique` (« Qu'est-ce qu'une horloge atomique ? »).
- **Problème** : même notion, même réponse (transition atomique, césium). De surcroît les deux explications donnent des ordres de grandeur très différents sans le dire : « Sa dérive est de l'ordre d'une seconde sur des millions d'années » d'un côté, « Les meilleures dérivent de moins d'une seconde sur l'âge de l'univers » de l'autre. Les deux chiffres sont exacts mais portent sur des générations d'horloges différentes (césium contre réseau optique) ; juxtaposés sans précision, ils se contredisent en apparence.
- **Correction proposée** : supprimer l'item de `st3-instrument-scientifique` ; dans `st2-mesure-temps`, préciser « Une horloge à césium dérive d'environ une seconde sur des millions d'années ; les horloges optiques les plus récentes, de moins d'une seconde sur l'âge de l'univers. »

### [MOYEN] L'énoncé contient la réponse : « station spatiale internationale » → « l'ISS »

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-espace-exploration` ; et `heritage/culture-g/data/sciences-tech.json` question 51.
- **Texte** : « Quelle station spatiale internationale est occupée en continu depuis 2000 ? » → « l'ISS » ; « Quelle station spatiale internationale, assemblée à partir de 1998, est occupée en permanence depuis l'an 2000 ? » → « L'ISS ».
- **Problème** : l'énoncé nomme littéralement la réponse. Aucun des distracteurs (Mir, Skylab, Saliout 7, Tiangong) n'est international ; la question se répond sans rien savoir.
- **Correction proposée** : « Quelle station orbitale est occupée en continu depuis novembre 2000 ? »

### [MOYEN] Distracteurs rendus faux par un « seul » ajouté après coup

- **Où** : plusieurs notions, notamment `prisma/seed/culture-g/sciences-tech.ts` `st-espace-exploration` (« Quel lanceur européen décolle depuis Kourou, en Guyane ? » → distracteurs « Soyouz seul », « Vega seul » ; « Quelle agence spatiale européenne… » → « le CNES seul ») ; `sciences-tech-2.ts` `st2-agriculture-techniques` (« Le procédé Ostwald seul »), `st2-armement` (« Le projet Trinity seul »), `st2-mesure-temps` (« Galilée seul ») ; `sciences-tech-3.ts` `st3-inventions-francaises` (« Charles Hall seul », « Émile Roux seul », « Michel Ugon seul », « Hippolyte Bayard seul », « Le réseau Transpac seul »).
- **Problème** : le mot « seul » est un correctif ajouté parce que le distracteur serait autrement vrai (Vega et Soyouz ont bien décollé de Kourou ; Hall a bien co-inventé l'électrolyse de l'aluminium). Il rend le distracteur artificiellement faux et signale visuellement lequel n'est pas la bonne réponse — la bonne réponse est toujours celle sans « seul ». C'est un patron répété une dizaine de fois dans le domaine, donc facilement repérable par un apprenant.
- **Correction proposée** : reconstruire ces distracteurs plutôt que de les corriger par un adverbe. Exemple pour Kourou : « Quel lanceur européen a été conçu pour décoller depuis Kourou ? » avec des distracteurs qui n'y ont jamais volé (Falcon, Proton, Delta).

### [MOYEN] Le circuit intégré daté de 1958 pour Kilby et Noyce ensemble

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-inventions-quotidien` ; et cours `st-inventions-quotidien`, section « Copier et calculer ».
- **Texte** : « Quelle invention de 1958 est à l'origine de toute l'électronique moderne ? […] Jack Kilby et Robert Noyce y parviennent indépendamment. » ; cours : « le circuit intégré, mis au point en 1958 ».
- **Problème** : Kilby, chez Texas Instruments, en 1958 ; Noyce, chez Fairchild, en **1959**, avec un procédé différent (planar). Le cahier d'origine est plus juste : `heritage/culture-g/data/sciences-tech.json` question 14 dit « développé vers 1958-1959 par Jack Kilby et Robert Noyce », et le cours patrimonial « Miniaturisation » dit « Jack Kilby chez Texas Instruments en 1958, puis Robert Noyce chez Fairchild en 1959 ». Le seed simplifie une paternité double, ce qui est exactement le travers signalé dans la consigne.
- **Correction proposée** : « Jack Kilby y parvient chez Texas Instruments en 1958, Robert Noyce chez Fairchild l'année suivante, par un procédé différent. »

### [MOYEN] Rosalind Franklin présentée comme découvrant la structure de l'ADN

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-histoire-sciences`.
- **Texte** : « Qui découvre la structure de l'ADN grâce à des clichés de diffraction dont la contribution fut longtemps minorée ? » → « Rosalind Franklin ».
- **Problème** : l'énoncé attribue la découverte de la structure à Franklin, alors qu'elle a produit les clichés de diffraction qui l'ont rendue possible — la double hélice est établie par Watson et Crick à partir, notamment, du cliché 51. Le cours de la même notion est, lui, correct : « Rosalind Franklin, elle, produit les clichés de diffraction aux rayons X qui permettent d'établir la structure en double hélice ». La question contredit donc son propre cours, et surcorrige une injustice historique réelle en en fabriquant une inexactitude.
- **Correction proposée** : « Qui produit les clichés de diffraction qui ont permis d'établir la structure de l'ADN, et dont la contribution fut longtemps minorée ? »

### [MOYEN] « Un demi-siècle plus tard » entre les Wright et le Concorde

- **Où** : `prisma/seed/culture-g/cours/sciences-tech.ts` — cours `st-transports`, section « La route et l'air ».
- **Texte** : « les frères Wright réalisent en 1903 le premier vol motorisé contrôlé […] Un demi-siècle plus tard, le Concorde franchit le mur du son en transport de passagers ; exploité de 1976 à 2003 ».
- **Problème** : 1903 + un demi-siècle = 1953. Le Concorde vole en 1969 et entre en service en 1976, soit sept décennies après. La phrase donne elle-même les dates qui la démentent.
- **Correction proposée** : « Sept décennies plus tard, le Concorde porte des passagers au-delà du mur du son ; exploité de 1976 à 2003, il n'a jamais été rentable. »

### [MOYEN] Contradiction cours ↔ question sur l'âge de Louis Braille

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-inventions-quotidien`, explication ; et `prisma/seed/culture-g/cours/sciences-tech.ts` — cours `st-inventions-quotidien`, section « Écrire et voir ».
- **Texte (question)** : « Il avait quinze ans et était lui-même aveugle depuis l'âge de trois ans. »
- **Texte (cours)** : « Louis Braille, aveugle depuis l'enfance, invente à seize ans le système de lecture tactile qui porte son nom ».
- **Problème** : quinze ans d'un côté, seize de l'autre, pour le même fait. Par ailleurs « aveugle depuis l'âge de trois ans » simplifie : l'accident a lieu vers trois ans, la cécité complète survient vers cinq ans par ophtalmie sympathique.
- **Correction proposée** : harmoniser sur « à quinze ans » (le système est au point en 1824, il est publié en 1829) et écrire « devenu aveugle dans sa petite enfance, à la suite d'un accident vers trois ans ».

### [MOYEN] Contradiction cours ↔ question sur la pente des aqueducs romains

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-eau-genie-civil`, explication de « Qu'est-ce qu'un aqueduc ? » ; et cours `st2-eau-genie-civil`, section « Le vocabulaire des ouvrages ».
- **Texte (question)** : « Les Romains en ont construit des centaines, avec des pentes de quelques centimètres par kilomètre. »
- **Texte (cours)** : « les aqueducs romains descendaient de quelques dizaines de centimètres par kilomètre ».
- **Problème** : un facteur dix entre les deux, sur le même fait, dans la même notion. Le cours est le plus proche du réel (l'aqueduc de Nîmes descend en moyenne d'environ 25 cm par kilomètre, avec des sections beaucoup plus plates).
- **Correction proposée** : aligner la question sur « quelques dizaines de centimètres par kilomètre ».

### [MOYEN] Contradiction cours ↔ question : QWERTY ou AZERTY

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-innovation-societe`, explication de « Qu'est-ce que la dépendance au sentier ? » ; et cours `st2-innovation-societe`, section « Le poids du passé ».
- **Texte (question)** : « Le clavier AZERTY ou l'écartement des rails en sont des exemples classiques. »
- **Texte (cours)** : « Le clavier QWERTY, l'écartement des rails, le moteur à explosion contre la voiture électrique de 1900… ».
- **Problème** : l'exemple canonique de la dépendance au sentier, celui de la littérature économique (Paul David, 1985), est QWERTY. La question et son cours ne citent pas le même clavier.
- **Correction proposée** : mettre QWERTY dans la question aussi.

### [MOYEN] Le lamellé-croisé : « plusieurs dizaines d'étages » dans la question, « la vingtaine » dans le cours

- **Où** : `prisma/seed/culture-g/sciences-tech-3.ts` — `st3-batiment-innovations` ; et cours `st3-batiment-innovations`, section « Des matériaux moins carbonés ».
- **Texte (question)** : « Il permet de construire des immeubles de plusieurs dizaines d'étages en bois. »
- **Texte (cours)** : « dont les plus hauts dépassent aujourd'hui la vingtaine de niveaux ».
- **Problème** : « plusieurs dizaines » suggère trente ou quarante ; les plus hauts immeubles en bois existants tournent autour de vingt-cinq niveaux. La question surenchérit sur son propre cours.
- **Correction proposée** : « Il permet de construire des immeubles d'une vingtaine d'étages en bois. »

### [MOYEN] Question sans réponse chiffrable : la part de pollution de l'eau due au textile

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-textile-industrie`.
- **Texte** : « Quelle part de la pollution industrielle de l'eau l'industrie textile représente-t-elle ? » → bonne réponse « Une part importante, notamment par la teinture ».
- **Problème** : l'énoncé demande une part, la réponse n'en donne aucune. C'est une question dont la bonne réponse se reconnaît à ce qu'elle est la seule non tranchée : les trois autres (« négligeable », « la totalité », « uniquement des rejets solides ») sont des absolus manifestement faux. On n'apprend rien, et la forme trahit la réponse.
- **Correction proposée** : soit poser une question de mécanisme (« Quelle étape de la production textile pèse le plus lourd sur la pollution de l'eau ? » → « La teinture et la finition »), soit citer un chiffre sourcé et daté.

### [MOYEN] Orbite géostationnaire : « exactement égale à un jour »

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-espace-technologies`, explication ; et cours `st2-espace-technologies`, section « Choisir son orbite ».
- **Texte** : « À environ trente-six mille kilomètres d'altitude, avec une période exactement égale à un jour. » ; cours : « à une altitude où sa période orbitale égale exactement la durée du jour ».
- **Problème** : la période est le jour **sidéral** (23 h 56 min 4 s), pas le jour solaire. Le mot « exactement » rend l'approximation fausse au lieu de la signaler.
- **Correction proposée** : « avec une période égale au jour sidéral, soit vingt-trois heures cinquante-six minutes — d'où l'immobilité apparente au-dessus d'un point de l'équateur ».

### [MOYEN] « Le radar, technologie de guidage développée pour l'aviation »

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-armement`.
- **Texte** : « Quelle technologie de guidage a été développée pour l'aviation puis généralisée ? » → « Le radar ».
- **Problème** : le radar est une technologie de **détection**, pas de guidage, et il a été développé **contre** l'aviation (détection des bombardiers), non « pour » elle. Le cours de la même notion est correct : « Le radar, développé pour détecter les avions et guider la défense aérienne ». L'énoncé de la question déforme donc son propre cours sur deux points.
- **Correction proposée** : « Quelle technologie de détection, mise au point pour repérer les avions ennemis, équipe aujourd'hui la navigation civile et la météorologie ? »

### [MOYEN] Chiffres technologiques non datés et déjà décalés

Regroupés, car ils relèvent du même défaut : un chiffre présenté comme un fait stable alors qu'il bouge.

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-espace-exploration` : « Fondée en 1975, elle réunit vingt-deux États membres » (ESA). **Incertain, à vérifier** : l'ESA est passée à vingt-trois membres avec l'adhésion de la Slovénie ; le chiffre doit être vérifié à la date de publication.
- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-communication-histoire` : « Plus de quatre-vingt-dix-neuf pour cent du trafic international, sur environ quatre cents câbles ». Le nombre de câbles sous-marins en service dépasse aujourd'hui les cinq cents. **À vérifier.**
- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-energie-technologies` : « Le rendement des panneaux commerciaux se situe généralement entre dix-huit et vingt-deux pour cent ». Fourchette basse au regard des modules récents.
- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-espace-exploration` : « transmet encore des données plus de quarante ans après son lancement » (Voyager 1, lancée en 1977). Exact mais tiède : on approche des cinquante ans.
- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-robotique` : « Quel pays possède la plus forte densité de robots industriels ? » → « La Corée du Sud ». Vrai au dernier classement connu, mais c'est un classement qui change ; l'explication « Rapportée au nombre de salariés de l'industrie manufacturière » n'apprend rien de plus et ne date pas la mesure.
- **Correction proposée** : dater explicitement chacun de ces chiffres dans l'explication (« au recensement de 20XX »), ou les remplacer par un ordre de grandeur robuste (« plus de vingt États membres », « plusieurs centaines de câbles »).

### [MOYEN] Quatre notions n'ont aucun cours

- **Où** : `prisma/seed/culture-g/cours/sciences-tech.ts` couvre 45 des 49 notions du domaine. Sont sans cours : `st-intelligence-artificielle`, `st2-agriculture-techniques`, `st2-informatique-histoire`, `st3-inventions-francaises`.
- **Problème** : ce sont quarante questions dont aucune ne s'adosse à un cours, dans un domaine où le reste est couvert. `st-intelligence-artificielle` est particulièrement gênant : c'est une notion à forte actualité, dont les questions portent sur des points (règlement européen de 2024, hallucination, biais algorithmique) qui appellent une explication suivie.
- **Correction proposée** : écrire les quatre cours manquants, en priorité `st-intelligence-artificielle`.

### [MOYEN] Tesla présenté comme « l'inventeur croate d'origine serbe »

- **Où** : `heritage/culture-g/data/sciences-tech.json` — question 8, explication.
- **Texte** : « Le tesla, unité d'induction magnétique, honore l'inventeur croate d'origine serbe. »
- **Problème** : formulation trompeuse. Tesla naît sujet de l'Empire d'Autriche, à Smiljan, dans un territoire aujourd'hui croate, de parents serbes, et devient citoyen américain. Le qualifier de « croate » est anachronique et prête à confusion.
- **Correction proposée** : « Le tesla, unité d'induction magnétique, honore cet ingénieur né dans l'Empire d'Autriche, d'une famille serbe, naturalisé américain. »

### [MOYEN] Macintosh qualifié d'ingénieur dans l'énoncé, de chimiste dans l'explication

- **Où** : `heritage/culture-g/data/sciences-tech.json` — question 34.
- **Texte (énoncé)** : « Quel ingénieur écossais a donné son nom au procédé d'imperméabilisation des tissus au caoutchouc ? »
- **Texte (explication)** : « Le chimiste écossais Charles Macintosh dépose en 1823 un brevet… »
- **Problème** : l'énoncé et son explication ne lui donnent pas le même métier dans la même question. Macintosh était chimiste.
- **Correction proposée** : « Quel chimiste écossais a donné son nom… ».

### [MOYEN] Redites de notion à notion (sans être des doublons stricts)

Ces couples ne posent pas exactement la même question mais recouvrent le même contenu, et un apprenant qui enchaîne les notions aura l'impression de tourner en rond.

- Commande numérique : `st-materiaux-fabrication` (« Qu'est-ce qu'une machine-outil à commande numérique ? ») et `st3-histoire-machines` (« Qu'est-ce que la commande numérique appliquée aux machines ? »).
- Machine-outil : `st-materiaux-fabrication` et `st3-histoire-machines` (« Qu'est-ce qu'une machine-outil ? »).
- Fabrication additive : `st-materiaux-fabrication` (« Qu'est-ce que l'impression tridimensionnelle par dépôt de matière ? ») et `st3-industrie-4` (« Qu'est-ce que la fabrication additive en production ? »).
- Exosquelette : `st2-robotique` (« Qu'est-ce qu'un exosquelette ? ») et `st3-industrie-4` (« Qu'est-ce qu'un exosquelette industriel ? »).
- Signature électronique : `st-securite-numerique` (« Qu'est-ce qu'une signature électronique ? ») et `st3-cryptographie` (« Sur quoi repose techniquement une signature électronique ? »). Ce couple-ci est le plus défendable : la seconde question ajoute réellement le mécanisme.
- Moteur à quatre temps et Beau de Rochas : `st3-histoire-machines` (explication de « Qu'est-ce que le moteur à combustion interne à quatre temps ? ») et `st3-inventions-francaises` (« Qui invente le moteur à explosion à quatre temps sur le papier ? »), à l'intérieur du même lot.
- **Correction proposée** : arbitrer notion par notion — garder l'item là où il est le mieux situé, et remplacer l'autre.

### [MINEUR] Fautes et maladresses de langue

- `prisma/seed/culture-g/sciences-tech-3.ts`, `st3-transports-innovations` : « Un train **léviter** par des électroaimants, sans contact avec le rail ». Faute de construction, dans un choix de réponse donc très visible. Lire « Un train qui lévite grâce à des électroaimants ».
- `prisma/seed/culture-g/cours/sciences-tech.ts`, cours `st2-mesure-temps`, titre de section : « Compter avant d'**oscillier** ». Faute d'orthographe dans un titre. Lire « Compter avant d'osciller ».
- `prisma/seed/culture-g/cours/sciences-tech.ts`, cours `st2-robotique`, section « Savoir où l'on est » : « un robot **fiant** à sa seule odométrie ». Lire « se fiant ».
- `prisma/seed/culture-g/sciences-tech-2.ts`, `st2-armement` : « Le tracé permet un feu croisé sur **tous les approches** ». Accord. Lire « toutes les approches ».
- `prisma/seed/culture-g/sciences-tech.ts`, `st-histoire-sciences` : « Copernic était mort en 1543 l'année de la publication de son livre. » Virgule manquante, la phrase se lit mal. Lire « Copernic était mort en 1543, l'année de la publication de son livre. »
- `prisma/seed/culture-g/sciences-tech.ts`, `st-espace-exploration` : « Décrit en 1978, **il décrirait** un scénario où… ». Répétition du verbe et conditionnel injustifié pour un fait établi. Lire « Décrit en 1978, il désigne un scénario où… ».
- `prisma/seed/culture-g/sciences-tech-3.ts`, `st3-instrument-scientifique` : « Ses lentilles uniques, taillées à la main, **dépassaient deux cents fois de grossissement** ». Construction bancale. Lire « atteignaient plus de deux cents fois de grossissement ».
- `heritage/culture-g/data/sciences-tech.json`, question 54 : « Qui a mis au point le premier stimulateur cardiaque implantable **et, plus largement, quelle décennie** a vu cette avancée ? » Question double, énoncé lourd. Scinder ou reformuler.
- `prisma/seed/culture-g/sciences-tech.ts`, `st-inventions-quotidien` : « Quelle invention de 1928 est due à une observation de moisissure… » → la pénicilline est une **découverte**, pas une invention. Idem pour « Quelle invention de 1958 » (le circuit intégré, lui, est bien une invention).

### [MINEUR] Capitales initiales incohérentes dans les choix de réponse

- **Où** : partout dans les trois fichiers de seed. Exemples : `st-statistiques-donnees` « **l**'intervalle dans lequel se situe probablement la valeur réelle » ; `st-espace-exploration` « **l**'ISS », « **l**'ESA » ; `st-securite-numerique` « **l**'ANSSI » ; `st-histoire-sciences` « **l**'examen d'un article par des chercheurs » ; `st2-textile-industrie` « **l**'acrylique » ; `st2-verre-ceramique` « **d**'argile cuite », « **d**e quartz et de plomb » ; `st2-armement` « **d**'Arabie », « **d**'Inde », « **d**'Europe centrale » ; `st2-informatique-histoire` « **l**'ENIAC », « **l**'UNIVAC », « **l**'Apple II », « **l**'IBM PC » ; `st2-cyberespace` « **l**'ICANN », « **l**'IETF », « **l**'ISOC » ; `st2-robotique` « **l**'Allemagne ».
- **Problème** : dans les mêmes listes, les autres choix commencent par une majuscule. L'irrégularité est systématique quand le choix commence par une élision, et elle saute aux yeux dans l'interface.
- **Correction proposée** : uniformiser en majuscule initiale (« L'ISS », « D'Arabie »…).

### [MINEUR] Commentaires d'en-tête faux

- **Où** : `prisma/seed/culture-g/sciences-tech-3.ts`, ligne 2 : « troisième lot — **vingt** notions sans cours » alors que le fichier en compte **seize**.
- **Où** : les trois fichiers annoncent des notions « **sans cours** », alors que `cours/sciences-tech.ts` en couvre 45 sur 49.
- **Problème** : commentaires périmés. Sans effet sur l'apprenant, mais trompeurs pour qui reprendra le fichier.

### [MINEUR] Orthographe flottante de Karl / Carl Benz

- **Où** : « Karl Benz » dans `prisma/seed/culture-g/sciences-tech.ts`, le cours `st-transports` et `heritage/.../sciences-tech.json` question 6 ; « Carl Benz » dans `heritage/culture-g/data/lecons/sciences-tech/02.json` et dans le cours patrimonial « Se déplacer autrement ».
- **Problème** : les deux graphies existent dans la littérature, mais l'incohérence à l'intérieur d'un même domaine gêne la mémorisation d'un nom propre.
- **Correction proposée** : retenir « Carl Benz » (graphie de l'état civil et de l'entreprise) partout, ou « Karl Benz » partout.

### [MINEUR] Joseph Monier situé « à la fin du XIXe siècle »

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-construction` (« Qui dépose un brevet de béton armé à la fin du XIXe siècle ? ») et cours `st2-construction`, section « Le béton armé » (« dont Joseph Monier dépose un brevet à la fin du XIXe siècle »).
- **Problème** : le premier brevet de Monier est de 1867, ses brevets suivants s'échelonnent jusqu'en 1878 — c'est le troisième quart du siècle, pas la fin. Imprécision reprise à l'identique dans la question et dans le cours.
- **Correction proposée** : « dans le troisième quart du XIXe siècle » ou, mieux, « en 1867 ».

### [MINEUR] Le métier Jacquard présenté comme « le premier programme de l'histoire »

- **Où** : `prisma/seed/culture-g/cours/sciences-tech.ts` — cours `st2-textile-industrie`, section « Des cartes perforées avant l'informatique ».
- **Texte** : « Le premier programme de l'histoire a donc été un motif de tissu ».
- **Problème** : formule séduisante mais qui entre en tension avec le cours `st-informatique-fondements` du même fichier, où c'est Ada Lovelace qui écrit « ce qui est tenu pour le premier programme ». Une carte perforée de métier commande une séquence, elle ne constitue pas un programme au sens où l'entend l'autre cours. Le paragraphe se rattrape ensuite en citant Lovelace, mais l'affirmation reste posée comme un fait.
- **Correction proposée** : « La programmation par cartes perforées est donc née d'un motif de tissu » — ce qui dit la filiation sans revendiquer l'antériorité du « premier programme ».

---

## Ce que la seconde passe a ajouté

Rien : la session a été interrompue avant la seconde passe. Les constats ci-dessus proviennent tous de la première lecture. **Il faut considérer ce rapport comme incomplet**, en particulier sur les treize leçons patrimoniales non lues (`05.json` à `17.json`), qui portent précisément sur les sujets les plus exposés au type d'erreur recherché : télécommunications (05), génie civil (06), matériaux (07), IA et robotique (08), agriculture (09), imprimerie (10), mesure du temps (11), instruments scientifiques (12), aéronautique (13), électronique et semi-conducteurs (14), cryptographie (15), théorèmes mathématiques (16) et surtout **inventions françaises et leurs inventeurs (17)** — ce dernier étant, par son sujet même, celui où les paternités simplifiées sont le plus probables.

Deux vérifications restent également ouvertes, signalées comme incertaines plus haut : le nombre d'États membres de l'ESA et le nombre de câbles sous-marins en service.

## Ce qui est sain

Le cahier d'origine (`heritage/culture-g/data/sciences-tech.json` et ses trois cours) est d'une précision remarquable et systématiquement plus juste que le seed quand les deux divergent : il date Bertha Benz en 1888, distingue Kilby 1958 de Noyce 1959, restitue correctement la loi de Moore de 1965 et sa révision de 1975, reconnaît l'antériorité de Meucci sur Bell et la résolution du Congrès de 2002. Les quatre leçons lues (conquête spatiale, transports, découvertes médicales, énergie) sont d'excellente tenue : les chiffres y sont vérifiables un à un, et la leçon sur les transports va jusqu'à écrire que « la paternité exacte de l'automobile reste discutée », ce qui est exactement la prudence qu'on attend. Côté seed, les cours de `st2-verre-ceramique`, `st2-mesure-temps`, `st3-cryptographie` et `st3-securite-domestique` sont substantiels, expliquent des mécanismes plutôt que de paraphraser leurs titres, et prennent souvent la peine de démonter une idée fausse répandue — le verre des vitraux qui aurait « coulé », le réflexe de vider une batterie avant de la recharger, le marquage CE pris pour un label de qualité. Ce sont de vrais cours.
