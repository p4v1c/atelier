# Inventions & Technologie

> ÉTAT : **TERMINÉ**. Passe 1 : tous les fichiers du périmètre lus (`sciences-tech{,-2,-3}.ts`, `cours/sciences-tech.ts`, `heritage/.../sciences-tech.json`, leçons `01.json` à `17.json`). Passe 2 : contenu chargé comme le fait l'application (`contenuDe`) — 68 compétences, 647 questions ; doublons intra- et inter-compétences croisés, paires inversées, astuces (`tip`) croisées avec les réponses de leurs propres questions, seed relu, corrections de la passe 1 revérifiées sur le web. Sections A à F ci-dessous. Rien n'a été effacé du travail des relecteurs précédents.

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

### [MOYEN] ✅ L'énoncé contient la réponse : « station spatiale internationale » → « l'ISS »

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-espace-exploration` ; et `heritage/culture-g/data/sciences-tech.json` question 51.
- **Texte** : « Quelle station spatiale internationale est occupée en continu depuis 2000 ? » → « l'ISS » ; « Quelle station spatiale internationale, assemblée à partir de 1998, est occupée en permanence depuis l'an 2000 ? » → « L'ISS ».
- **Problème** : l'énoncé nomme littéralement la réponse. Aucun des distracteurs (Mir, Skylab, Saliout 7, Tiangong) n'est international ; la question se répond sans rien savoir.
- **Correction proposée** : « Quelle station orbitale est occupée en continu depuis novembre 2000 ? »
- **Fait** : Reformulé en « Quelle station orbitale... est occupée en continu depuis novembre 2000 ? » dans le seed, et harmonisé dans le cahier d'origine (question 51).

### [MOYEN] ⏭️ Distracteurs rendus faux par un « seul » ajouté après coup

- **Où** : plusieurs notions, notamment `prisma/seed/culture-g/sciences-tech.ts` `st-espace-exploration` (« Quel lanceur européen décolle depuis Kourou, en Guyane ? » → distracteurs « Soyouz seul », « Vega seul » ; « Quelle agence spatiale européenne… » → « le CNES seul ») ; `sciences-tech-2.ts` `st2-agriculture-techniques` (« Le procédé Ostwald seul »), `st2-armement` (« Le projet Trinity seul »), `st2-mesure-temps` (« Galilée seul ») ; `sciences-tech-3.ts` `st3-inventions-francaises` (« Charles Hall seul », « Émile Roux seul », « Michel Ugon seul », « Hippolyte Bayard seul », « Le réseau Transpac seul »).
- **Problème** : le mot « seul » est un correctif ajouté parce que le distracteur serait autrement vrai (Vega et Soyouz ont bien décollé de Kourou ; Hall a bien co-inventé l'électrolyse de l'aluminium). Il rend le distracteur artificiellement faux et signale visuellement lequel n'est pas la bonne réponse — la bonne réponse est toujours celle sans « seul ». C'est un patron répété une dizaine de fois dans le domaine, donc facilement repérable par un apprenant.
- **Correction proposée** : reconstruire ces distracteurs plutôt que de les corriger par un adverbe. Exemple pour Kourou : « Quel lanceur européen a été conçu pour décoller depuis Kourou ? » avec des distracteurs qui n'y ont jamais volé (Falcon, Proton, Delta).
- **Fait** : Écarté : la passe 2 du rapport requalifie elle-même ce constat en [GRAVE] avec une portée bien plus large (27 occurrences, 19 compétences) ; je n'ai touché à aucune occurrence, le sujet relevant désormais du périmètre [GRAVE]. Vérifié : ce [GRAVE] ne semble pas corrigé dans le code (toutes les occurrences « seul » subsistent) — à signaler au propriétaire.

### [MOYEN] ✅ Le circuit intégré daté de 1958 pour Kilby et Noyce ensemble

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-inventions-quotidien` ; et cours `st-inventions-quotidien`, section « Copier et calculer ».
- **Texte** : « Quelle invention de 1958 est à l'origine de toute l'électronique moderne ? […] Jack Kilby et Robert Noyce y parviennent indépendamment. » ; cours : « le circuit intégré, mis au point en 1958 ».
- **Problème** : Kilby, chez Texas Instruments, en 1958 ; Noyce, chez Fairchild, en **1959**, avec un procédé différent (planar). Le cahier d'origine est plus juste : `heritage/culture-g/data/sciences-tech.json` question 14 dit « développé vers 1958-1959 par Jack Kilby et Robert Noyce », et le cours patrimonial « Miniaturisation » dit « Jack Kilby chez Texas Instruments en 1958, puis Robert Noyce chez Fairchild en 1959 ». Le seed simplifie une paternité double, ce qui est exactement le travers signalé dans la consigne.
- **Correction proposée** : « Jack Kilby y parvient chez Texas Instruments en 1958, Robert Noyce chez Fairchild l'année suivante, par un procédé différent. »
- **Fait** : Explication corrigée dans le seed et le cours : « Jack Kilby y parvient chez Texas Instruments en 1958, Robert Noyce chez Fairchild l'année suivante, par un procédé différent ».

### [MOYEN] ✅ Rosalind Franklin présentée comme découvrant la structure de l'ADN

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-histoire-sciences`.
- **Texte** : « Qui découvre la structure de l'ADN grâce à des clichés de diffraction dont la contribution fut longtemps minorée ? » → « Rosalind Franklin ».
- **Problème** : l'énoncé attribue la découverte de la structure à Franklin, alors qu'elle a produit les clichés de diffraction qui l'ont rendue possible — la double hélice est établie par Watson et Crick à partir, notamment, du cliché 51. Le cours de la même notion est, lui, correct : « Rosalind Franklin, elle, produit les clichés de diffraction aux rayons X qui permettent d'établir la structure en double hélice ». La question contredit donc son propre cours, et surcorrige une injustice historique réelle en en fabriquant une inexactitude.
- **Correction proposée** : « Qui produit les clichés de diffraction qui ont permis d'établir la structure de l'ADN, et dont la contribution fut longtemps minorée ? »
- **Fait** : Énoncé reformulé en « Qui produit les clichés de diffraction qui ont permis d'établir la structure de l'ADN... ? ».

### [MOYEN] ✅ « Un demi-siècle plus tard » entre les Wright et le Concorde

- **Où** : `prisma/seed/culture-g/cours/sciences-tech.ts` — cours `st-transports`, section « La route et l'air ».
- **Texte** : « les frères Wright réalisent en 1903 le premier vol motorisé contrôlé […] Un demi-siècle plus tard, le Concorde franchit le mur du son en transport de passagers ; exploité de 1976 à 2003 ».
- **Problème** : 1903 + un demi-siècle = 1953. Le Concorde vole en 1969 et entre en service en 1976, soit sept décennies après. La phrase donne elle-même les dates qui la démentent.
- **Correction proposée** : « Sept décennies plus tard, le Concorde porte des passagers au-delà du mur du son ; exploité de 1976 à 2003, il n'a jamais été rentable. »
- **Fait** : « Un demi-siècle plus tard » remplacé par « Sept décennies plus tard » dans le cours.

### [MOYEN] ✅ Contradiction cours ↔ question sur l'âge de Louis Braille

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-inventions-quotidien`, explication ; et `prisma/seed/culture-g/cours/sciences-tech.ts` — cours `st-inventions-quotidien`, section « Écrire et voir ».
- **Texte (question)** : « Il avait quinze ans et était lui-même aveugle depuis l'âge de trois ans. »
- **Texte (cours)** : « Louis Braille, aveugle depuis l'enfance, invente à seize ans le système de lecture tactile qui porte son nom ».
- **Problème** : quinze ans d'un côté, seize de l'autre, pour le même fait. Par ailleurs « aveugle depuis l'âge de trois ans » simplifie : l'accident a lieu vers trois ans, la cécité complète survient vers cinq ans par ophtalmie sympathique.
- **Correction proposée** : harmoniser sur « à quinze ans » (le système est au point en 1824, il est publié en 1829) et écrire « devenu aveugle dans sa petite enfance, à la suite d'un accident vers trois ans ».
- **Fait** : Harmonisé sur quinze ans et précisé « accident vers trois ans », dans le seed (question et distracteurs, cf. constat lié plus bas) et dans le cours (seize ans → quinze ans).

### [MOYEN] ✅ Contradiction cours ↔ question sur la pente des aqueducs romains

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-eau-genie-civil`, explication de « Qu'est-ce qu'un aqueduc ? » ; et cours `st2-eau-genie-civil`, section « Le vocabulaire des ouvrages ».
- **Texte (question)** : « Les Romains en ont construit des centaines, avec des pentes de quelques centimètres par kilomètre. »
- **Texte (cours)** : « les aqueducs romains descendaient de quelques dizaines de centimètres par kilomètre ».
- **Problème** : un facteur dix entre les deux, sur le même fait, dans la même notion. Le cours est le plus proche du réel (l'aqueduc de Nîmes descend en moyenne d'environ 25 cm par kilomètre, avec des sections beaucoup plus plates).
- **Correction proposée** : aligner la question sur « quelques dizaines de centimètres par kilomètre ».
- **Fait** : Question alignée sur le cours, qui était juste : « quelques dizaines de centimètres par kilomètre ».

### [MOYEN] ✅ Contradiction cours ↔ question : QWERTY ou AZERTY

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-innovation-societe`, explication de « Qu'est-ce que la dépendance au sentier ? » ; et cours `st2-innovation-societe`, section « Le poids du passé ».
- **Texte (question)** : « Le clavier AZERTY ou l'écartement des rails en sont des exemples classiques. »
- **Texte (cours)** : « Le clavier QWERTY, l'écartement des rails, le moteur à explosion contre la voiture électrique de 1900… ».
- **Problème** : l'exemple canonique de la dépendance au sentier, celui de la littérature économique (Paul David, 1985), est QWERTY. La question et son cours ne citent pas le même clavier.
- **Correction proposée** : mettre QWERTY dans la question aussi.
- **Fait** : AZERTY remplacé par QWERTY dans la question, pour correspondre à l'exemple canonique donné par le cours.

### [MOYEN] ⏭️ Le lamellé-croisé : « plusieurs dizaines d'étages » dans la question, « la vingtaine » dans le cours

- **Où** : `prisma/seed/culture-g/sciences-tech-3.ts` — `st3-batiment-innovations` ; et cours `st3-batiment-innovations`, section « Des matériaux moins carbonés ».
- **Texte (question)** : « Il permet de construire des immeubles de plusieurs dizaines d'étages en bois. »
- **Texte (cours)** : « dont les plus hauts dépassent aujourd'hui la vingtaine de niveaux ».
- **Problème** : « plusieurs dizaines » suggère trente ou quarante ; les plus hauts immeubles en bois existants tournent autour de vingt-cinq niveaux. La question surenchérit sur son propre cours.
- **Correction proposée** : « Il permet de construire des immeubles d'une vingtaine d'étages en bois. »
- **Fait** : Titre marqué comme écarté : la correction d'origine proposait « une vingtaine d'étages », mais la passe 2 du même rapport montre que c'est désormais faux par défaut (tours en bois dépassant la trentaine de niveaux en 2025-2026). J'ai laissé la question inchangée et corrigé le COURS à sa place (« vingtaine » → « trentaine de niveaux »), comme la passe 2 le recommande.

### [MOYEN] ✅ Question sans réponse chiffrable : la part de pollution de l'eau due au textile

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-textile-industrie`.
- **Texte** : « Quelle part de la pollution industrielle de l'eau l'industrie textile représente-t-elle ? » → bonne réponse « Une part importante, notamment par la teinture ».
- **Problème** : l'énoncé demande une part, la réponse n'en donne aucune. C'est une question dont la bonne réponse se reconnaît à ce qu'elle est la seule non tranchée : les trois autres (« négligeable », « la totalité », « uniquement des rejets solides ») sont des absolus manifestement faux. On n'apprend rien, et la forme trahit la réponse.
- **Correction proposée** : soit poser une question de mécanisme (« Quelle étape de la production textile pèse le plus lourd sur la pollution de l'eau ? » → « La teinture et la finition »), soit citer un chiffre sourcé et daté.
- **Fait** : Question reformulée en question de mécanisme : « Quelle étape de la production textile pèse le plus lourd sur la pollution de l'eau ? » → « La teinture et la finition ».

### [MOYEN] ✅ Orbite géostationnaire : « exactement égale à un jour »

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-espace-technologies`, explication ; et cours `st2-espace-technologies`, section « Choisir son orbite ».
- **Texte** : « À environ trente-six mille kilomètres d'altitude, avec une période exactement égale à un jour. » ; cours : « à une altitude où sa période orbitale égale exactement la durée du jour ».
- **Problème** : la période est le jour **sidéral** (23 h 56 min 4 s), pas le jour solaire. Le mot « exactement » rend l'approximation fausse au lieu de la signaler.
- **Correction proposée** : « avec une période égale au jour sidéral, soit vingt-trois heures cinquante-six minutes — d'où l'immobilité apparente au-dessus d'un point de l'équateur ».
- **Fait** : « exactement égale à un jour » remplacé par la période du jour sidéral (23 h 56 min) dans le seed et le cours.

### [MOYEN] ✅ « Le radar, technologie de guidage développée pour l'aviation »

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-armement`.
- **Texte** : « Quelle technologie de guidage a été développée pour l'aviation puis généralisée ? » → « Le radar ».
- **Problème** : le radar est une technologie de **détection**, pas de guidage, et il a été développé **contre** l'aviation (détection des bombardiers), non « pour » elle. Le cours de la même notion est correct : « Le radar, développé pour détecter les avions et guider la défense aérienne ». L'énoncé de la question déforme donc son propre cours sur deux points.
- **Correction proposée** : « Quelle technologie de détection, mise au point pour repérer les avions ennemis, équipe aujourd'hui la navigation civile et la météorologie ? »
- **Fait** : Question reformulée en question de détection (« mise au point pour repérer les avions ennemis ») ; explication corrigée en conséquence.

### [MOYEN] ✅ Chiffres technologiques non datés et déjà décalés

Regroupés, car ils relèvent du même défaut : un chiffre présenté comme un fait stable alors qu'il bouge.
- **Fait** : Corrigés dans le seed : panneaux photovoltaïques (18-22 % → 20-23 %), Voyager 1 (« plus de quarante ans » → « près de cinquante ans »), densité de robots en Corée (ajout d'un repère chiffré). L'ESA relève désormais d'un constat requalifié [GRAVE] plus loin dans le rapport (non touché) ; les câbles sous-marins sont traités par le constat MOYEN dédié ci-dessous.

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-espace-exploration` : « Fondée en 1975, elle réunit vingt-deux États membres » (ESA). **Incertain, à vérifier** : l'ESA est passée à vingt-trois membres avec l'adhésion de la Slovénie ; le chiffre doit être vérifié à la date de publication.
- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-communication-histoire` : « Plus de quatre-vingt-dix-neuf pour cent du trafic international, sur environ quatre cents câbles ». Le nombre de câbles sous-marins en service dépasse aujourd'hui les cinq cents. **À vérifier.**
- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-energie-technologies` : « Le rendement des panneaux commerciaux se situe généralement entre dix-huit et vingt-deux pour cent ». Fourchette basse au regard des modules récents.
- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-espace-exploration` : « transmet encore des données plus de quarante ans après son lancement » (Voyager 1, lancée en 1977). Exact mais tiède : on approche des cinquante ans.
- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-robotique` : « Quel pays possède la plus forte densité de robots industriels ? » → « La Corée du Sud ». Vrai au dernier classement connu, mais c'est un classement qui change ; l'explication « Rapportée au nombre de salariés de l'industrie manufacturière » n'apprend rien de plus et ne date pas la mesure.
- **Correction proposée** : dater explicitement chacun de ces chiffres dans l'explication (« au recensement de 20XX »), ou les remplacer par un ordre de grandeur robuste (« plus de vingt États membres », « plusieurs centaines de câbles »).

### [MOYEN] ⏭️ Quatre notions n'ont aucun cours

- **Où** : `prisma/seed/culture-g/cours/sciences-tech.ts` couvre 45 des 49 notions du domaine. Sont sans cours : `st-intelligence-artificielle`, `st2-agriculture-techniques`, `st2-informatique-histoire`, `st3-inventions-francaises`.
- **Problème** : ce sont quarante questions dont aucune ne s'adosse à un cours, dans un domaine où le reste est couvert. `st-intelligence-artificielle` est particulièrement gênant : c'est une notion à forte actualité, dont les questions portent sur des points (règlement européen de 2024, hallucination, biais algorithmique) qui appellent une explication suivie.
- **Correction proposée** : écrire les quatre cours manquants, en priorité `st-intelligence-artificielle`.
- **Fait** : Écarté : la passe 2 du même rapport démontre que c'est un faux positif — les quatre notions sont fusionnées avec des leçons patrimoniales qui leur servent déjà de cours. Rien à écrire.

### [MOYEN] ✅ Tesla présenté comme « l'inventeur croate d'origine serbe »

- **Où** : `heritage/culture-g/data/sciences-tech.json` — question 8, explication.
- **Texte** : « Le tesla, unité d'induction magnétique, honore l'inventeur croate d'origine serbe. »
- **Problème** : formulation trompeuse. Tesla naît sujet de l'Empire d'Autriche, à Smiljan, dans un territoire aujourd'hui croate, de parents serbes, et devient citoyen américain. Le qualifier de « croate » est anachronique et prête à confusion.
- **Correction proposée** : « Le tesla, unité d'induction magnétique, honore cet ingénieur né dans l'Empire d'Autriche, d'une famille serbe, naturalisé américain. »
- **Fait** : Explication réécrite : « honore cet ingénieur né dans l'Empire d'Autriche, d'une famille serbe, naturalisé américain ».

### [MOYEN] ✅ Macintosh qualifié d'ingénieur dans l'énoncé, de chimiste dans l'explication

- **Où** : `heritage/culture-g/data/sciences-tech.json` — question 34.
- **Texte (énoncé)** : « Quel ingénieur écossais a donné son nom au procédé d'imperméabilisation des tissus au caoutchouc ? »
- **Texte (explication)** : « Le chimiste écossais Charles Macintosh dépose en 1823 un brevet… »
- **Problème** : l'énoncé et son explication ne lui donnent pas le même métier dans la même question. Macintosh était chimiste.
- **Correction proposée** : « Quel chimiste écossais a donné son nom… ».
- **Fait** : Énoncé harmonisé sur « Quel chimiste écossais... », pour correspondre à l'explication.

### [MOYEN] ✅ Redites de notion à notion (sans être des doublons stricts)

Ces couples ne posent pas exactement la même question mais recouvrent le même contenu, et un apprenant qui enchaîne les notions aura l'impression de tourner en rond.
- **Fait** : La question « machine-outil à commande numérique » de st-materiaux-fabrication, redondante avec deux questions de st3-histoire-machines, remplacée par une question sur l'atelier flexible. Les couples fabrication additive/st3-industrie-4, exosquelette/st3-industrie-4 et signature électronique jugés, après relecture, suffisamment distincts (angle général vs angle applicatif) pour rester en l'état, de même que moteur à quatre temps (mécanisme) / Beau de Rochas (attribution).

- Commande numérique : `st-materiaux-fabrication` (« Qu'est-ce qu'une machine-outil à commande numérique ? ») et `st3-histoire-machines` (« Qu'est-ce que la commande numérique appliquée aux machines ? »).
- Machine-outil : `st-materiaux-fabrication` et `st3-histoire-machines` (« Qu'est-ce qu'une machine-outil ? »).
- Fabrication additive : `st-materiaux-fabrication` (« Qu'est-ce que l'impression tridimensionnelle par dépôt de matière ? ») et `st3-industrie-4` (« Qu'est-ce que la fabrication additive en production ? »).
- Exosquelette : `st2-robotique` (« Qu'est-ce qu'un exosquelette ? ») et `st3-industrie-4` (« Qu'est-ce qu'un exosquelette industriel ? »).
- Signature électronique : `st-securite-numerique` (« Qu'est-ce qu'une signature électronique ? ») et `st3-cryptographie` (« Sur quoi repose techniquement une signature électronique ? »). Ce couple-ci est le plus défendable : la seconde question ajoute réellement le mécanisme.
- Moteur à quatre temps et Beau de Rochas : `st3-histoire-machines` (explication de « Qu'est-ce que le moteur à combustion interne à quatre temps ? ») et `st3-inventions-francaises` (« Qui invente le moteur à explosion à quatre temps sur le papier ? »), à l'intérieur du même lot.
- **Correction proposée** : arbitrer notion par notion — garder l'item là où il est le mieux situé, et remplacer l'autre.

### [MINEUR] ✅ Fautes et maladresses de langue

- `prisma/seed/culture-g/sciences-tech-3.ts`, `st3-transports-innovations` : « Un train **léviter** par des électroaimants, sans contact avec le rail ». Faute de construction, dans un choix de réponse donc très visible. Lire « Un train qui lévite grâce à des électroaimants ».
- `prisma/seed/culture-g/cours/sciences-tech.ts`, cours `st2-mesure-temps`, titre de section : « Compter avant d'**oscillier** ». Faute d'orthographe dans un titre. Lire « Compter avant d'osciller ».
- `prisma/seed/culture-g/cours/sciences-tech.ts`, cours `st2-robotique`, section « Savoir où l'on est » : « un robot **fiant** à sa seule odométrie ». Lire « se fiant ».
- `prisma/seed/culture-g/sciences-tech-2.ts`, `st2-armement` : « Le tracé permet un feu croisé sur **tous les approches** ». Accord. Lire « toutes les approches ».
- `prisma/seed/culture-g/sciences-tech.ts`, `st-histoire-sciences` : « Copernic était mort en 1543 l'année de la publication de son livre. » Virgule manquante, la phrase se lit mal. Lire « Copernic était mort en 1543, l'année de la publication de son livre. »
- `prisma/seed/culture-g/sciences-tech.ts`, `st-espace-exploration` : « Décrit en 1978, **il décrirait** un scénario où… ». Répétition du verbe et conditionnel injustifié pour un fait établi. Lire « Décrit en 1978, il désigne un scénario où… ».
- `prisma/seed/culture-g/sciences-tech-3.ts`, `st3-instrument-scientifique` : « Ses lentilles uniques, taillées à la main, **dépassaient deux cents fois de grossissement** ». Construction bancale. Lire « atteignaient plus de deux cents fois de grossissement ».
- `heritage/culture-g/data/sciences-tech.json`, question 54 : « Qui a mis au point le premier stimulateur cardiaque implantable **et, plus largement, quelle décennie** a vu cette avancée ? » Question double, énoncé lourd. Scinder ou reformuler.
- `prisma/seed/culture-g/sciences-tech.ts`, `st-inventions-quotidien` : « Quelle invention de 1928 est due à une observation de moisissure… » → la pénicilline est une **découverte**, pas une invention. Idem pour « Quelle invention de 1958 » (le circuit intégré, lui, est bien une invention).
- **Fait** : Toutes les fautes relevées ont été corrigées, ou l'étaient déjà : « train léviter » (déjà bon), oscillier→osciller, fiant→se fiant, tous→toutes les approches, virgule de la phrase sur Copernic, conditionnel de Kessler, grossissement de Leeuwenhoek, question double du stimulateur cardiaque, pénicilline (invention→découverte).

### [MINEUR] ✅ Capitales initiales incohérentes dans les choix de réponse

- **Où** : partout dans les trois fichiers de seed. Exemples : `st-statistiques-donnees` « **l**'intervalle dans lequel se situe probablement la valeur réelle » ; `st-espace-exploration` « **l**'ISS », « **l**'ESA » ; `st-securite-numerique` « **l**'ANSSI » ; `st-histoire-sciences` « **l**'examen d'un article par des chercheurs » ; `st2-textile-industrie` « **l**'acrylique » ; `st2-verre-ceramique` « **d**'argile cuite », « **d**e quartz et de plomb » ; `st2-armement` « **d**'Arabie », « **d**'Inde », « **d**'Europe centrale » ; `st2-informatique-histoire` « **l**'ENIAC », « **l**'UNIVAC », « **l**'Apple II », « **l**'IBM PC » ; `st2-cyberespace` « **l**'ICANN », « **l**'IETF », « **l**'ISOC » ; `st2-robotique` « **l**'Allemagne ».
- **Problème** : dans les mêmes listes, les autres choix commencent par une majuscule. L'irrégularité est systématique quand le choix commence par une élision, et elle saute aux yeux dans l'interface.
- **Correction proposée** : uniformiser en majuscule initiale (« L'ISS », « D'Arabie »…).
- **Fait** : Sept occurrences en minuscule trouvées dans le code (d'Arabie/d'Inde/d'Europe centrale, l'ICANN/l'UIT/l'IETF/l'ISO/l'ISOC) mises en majuscule ; les autres exemples cités par le rapport (l'ISS, l'ANSSI, l'examen, l'acrylique, l'Allemagne...) étaient déjà corrects dans le code actuel.

### [MINEUR] ✅ Commentaires d'en-tête faux

- **Où** : `prisma/seed/culture-g/sciences-tech-3.ts`, ligne 2 : « troisième lot — **vingt** notions sans cours » alors que le fichier en compte **seize**.
- **Où** : les trois fichiers annoncent des notions « **sans cours** », alors que `cours/sciences-tech.ts` en couvre 45 sur 49.
- **Problème** : commentaires périmés. Sans effet sur l'apprenant, mais trompeurs pour qui reprendra le fichier.
- **Fait** : Commentaires d'en-tête corrigés dans les trois fichiers de seed (nombre exact de notions ; mention que la plupart ont désormais un cours).

### [MINEUR] ✅ Orthographe flottante de Karl / Carl Benz

- **Où** : « Karl Benz » dans `prisma/seed/culture-g/sciences-tech.ts`, le cours `st-transports` et `heritage/.../sciences-tech.json` question 6 ; « Carl Benz » dans `heritage/culture-g/data/lecons/sciences-tech/02.json` et dans le cours patrimonial « Se déplacer autrement ».
- **Problème** : les deux graphies existent dans la littérature, mais l'incohérence à l'intérieur d'un même domaine gêne la mémorisation d'un nom propre.
- **Correction proposée** : retenir « Carl Benz » (graphie de l'état civil et de l'entreprise) partout, ou « Karl Benz » partout.
- **Fait** : Uniformisé sur « Karl Benz » (graphie majoritaire dans le dépôt) dans la leçon 02, seul fichier à utiliser « Carl ».

### [MINEUR] ✅ Joseph Monier situé « à la fin du XIXe siècle »

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-construction` (« Qui dépose un brevet de béton armé à la fin du XIXe siècle ? ») et cours `st2-construction`, section « Le béton armé » (« dont Joseph Monier dépose un brevet à la fin du XIXe siècle »).
- **Problème** : le premier brevet de Monier est de 1867, ses brevets suivants s'échelonnent jusqu'en 1878 — c'est le troisième quart du siècle, pas la fin. Imprécision reprise à l'identique dans la question et dans le cours.
- **Correction proposée** : « dans le troisième quart du XIXe siècle » ou, mieux, « en 1867 ».
- **Fait** : Daté « en 1867 » dans la question, et « premier brevet en 1867... jusqu'en 1878 » dans le cours.

### [MINEUR] ✅ Le métier Jacquard présenté comme « le premier programme de l'histoire »

- **Où** : `prisma/seed/culture-g/cours/sciences-tech.ts` — cours `st2-textile-industrie`, section « Des cartes perforées avant l'informatique ».
- **Texte** : « Le premier programme de l'histoire a donc été un motif de tissu ».
- **Problème** : formule séduisante mais qui entre en tension avec le cours `st-informatique-fondements` du même fichier, où c'est Ada Lovelace qui écrit « ce qui est tenu pour le premier programme ». Une carte perforée de métier commande une séquence, elle ne constitue pas un programme au sens où l'entend l'autre cours. Le paragraphe se rattrape ensuite en citant Lovelace, mais l'affirmation reste posée comme un fait.
- **Correction proposée** : « La programmation par cartes perforées est donc née d'un motif de tissu » — ce qui dit la filiation sans revendiquer l'antériorité du « premier programme ».
- **Fait** : « Le premier programme de l'histoire a donc été un motif de tissu » remplacé par « La programmation par cartes perforées est donc née d'un motif de tissu ».

---

## Ce que la seconde passe a ajouté

Rien : la session a été interrompue avant la seconde passe. Les constats ci-dessus proviennent tous de la première lecture. **Il faut considérer ce rapport comme incomplet**, en particulier sur les treize leçons patrimoniales non lues (`05.json` à `17.json`), qui portent précisément sur les sujets les plus exposés au type d'erreur recherché : télécommunications (05), génie civil (06), matériaux (07), IA et robotique (08), agriculture (09), imprimerie (10), mesure du temps (11), instruments scientifiques (12), aéronautique (13), électronique et semi-conducteurs (14), cryptographie (15), théorèmes mathématiques (16) et surtout **inventions françaises et leurs inventeurs (17)** — ce dernier étant, par son sujet même, celui où les paternités simplifiées sont le plus probables.

Deux vérifications restent également ouvertes, signalées comme incertaines plus haut : le nombre d'États membres de l'ESA et le nombre de câbles sous-marins en service.

## Ce qui est sain

Le cahier d'origine (`heritage/culture-g/data/sciences-tech.json` et ses trois cours) est d'une précision remarquable et systématiquement plus juste que le seed quand les deux divergent : il date Bertha Benz en 1888, distingue Kilby 1958 de Noyce 1959, restitue correctement la loi de Moore de 1965 et sa révision de 1975, reconnaît l'antériorité de Meucci sur Bell et la résolution du Congrès de 2002. Les quatre leçons lues (conquête spatiale, transports, découvertes médicales, énergie) sont d'excellente tenue : les chiffres y sont vérifiables un à un, et la leçon sur les transports va jusqu'à écrire que « la paternité exacte de l'automobile reste discutée », ce qui est exactement la prudence qu'on attend. Côté seed, les cours de `st2-verre-ceramique`, `st2-mesure-temps`, `st3-cryptographie` et `st3-securite-domestique` sont substantiels, expliquent des mécanismes plutôt que de paraphraser leurs titres, et prennent souvent la peine de démonter une idée fausse répandue — le verre des vitraux qui aurait « coulé », le réflexe de vider une batterie avant de la recharger, le marquage CE pris pour un label de qualité. Ce sont de vrais cours.

---

# REPRISE — leçons 05 à 17, puis passe 2

*(section ajoutée par le second relecteur ; rien n'a été retiré de ce qui précède)*

## Constats nouveaux — leçons patrimoniales

### [MOYEN] ✅ Leçon 05 : l'orbite géostationnaire décrite avec une période « exactement vingt-quatre heures »

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/05.json` — section « Satellites, fibre optique et réseaux mondiaux » et quiz question 4 (énoncé, choix 1 et explication).
- **Texte (section)** : « un satellite placé à environ trente-six mille kilomètres au-dessus de l'équateur tourne en vingt-quatre heures et paraît donc immobile depuis le sol »
- **Texte (explication du quiz)** : « À environ trente-six mille kilomètres d'altitude, un satellite met **exactement** vingt-quatre heures pour boucler son orbite. »
- **Problème** : même défaut que celui déjà relevé dans `sciences-tech-2.ts` (`st2-espace-technologies`) et son cours : la période géostationnaire est le jour **sidéral**, 23 h 56 min 4 s, pas le jour solaire de vingt-quatre heures. L'adverbe « exactement » transforme ici une approximation acceptable en affirmation fausse. **Point important pour l'arbitrage général : sur ce point précis, le cahier d'origine n'est pas plus juste que le seed — il commet la même erreur, en l'aggravant d'un « exactement ».** La correction doit donc porter sur les deux, et non consister à aligner le seed sur le patrimoine.
- **Correction proposée** : dans la section, « tourne en un jour sidéral, soit vingt-trois heures cinquante-six minutes, et paraît donc immobile depuis le sol » ; dans l'explication du quiz, remplacer « met exactement vingt-quatre heures » par « met un jour sidéral, soit environ vingt-trois heures cinquante-six minutes — la durée d'un tour de la Terre sur elle-même ». Le choix 1 (« sa période de révolution est de vingt-quatre heures ») peut rester en l'état s'il est reformulé « sa période de révolution égale la durée de rotation de la Terre ».
- **Fait** : Section, choix de réponse et explication du quiz alignés sur le jour sidéral (23 h 56 min) dans la leçon 05.

**Reste de la leçon 05 : sain.** Chappe 1794 Paris-Lille, Volta 1800, Oersted 1820, Cooke et Wheatstone 1837, Morse et la ligne Washington-Baltimore 1844, le câble transatlantique de 1866 posé par le Great Eastern entre l'Irlande et Terre-Neuve, Meucci 1860, Bell 1876 quelques heures avant Gray, Strowger 1891, Maxwell 1865, Hertz 1887, Marconi 1895-1901, Clarke 1945, Telstar 1962, Kao 1966, fibre à faible perte 1970, GSM lancé au début des années 1990, GPS pleinement opérationnel en 1995 : tout est exact. La section sur le téléphone est un modèle de prudence sur la paternité (« invention préparée par plusieurs travaux parallèles plutôt que par un seul homme »), et le quiz en fait explicitement la bonne réponse.

### [MOYEN] ✅ Leçon 06 : la portée du pont de Brooklyn surestimée

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/06.json` — section « Le fer et l'acier : l'âge des grands ponts », et le visuel « frise » de la même section.
- **Texte (section)** : « le pont de Brooklyn, achevé en 1883 par la famille Roebling après quatorze ans de travaux, **dépasse cinq cents mètres entre ses piles** et utilise pour la première fois des câbles en fils d'acier. »
- **Texte (frise)** : « Plus de 500 m entre les piles, premiers câbles en fils d'acier, quatorze ans de travaux. »
- **Problème** : la portée principale du pont de Brooklyn, entre les deux tours, est de 1 595 pieds 6 pouces, soit **486 mètres**. Elle ne dépasse donc pas cinq cents mètres, elle reste en dessous. L'erreur est répétée deux fois, dans le texte et dans le visuel, ce qui la rendra doublement mémorisable. (Le chiffre de 486 m était, à l'ouverture, un record mondial de portée d'environ cinquante pour cent — l'exploit est réel, il n'a pas besoin d'être arrondi vers le haut.)
- **Correction proposée** : « dépasse quatre cent quatre-vingts mètres entre ses piles, record mondial de portée à son ouverture, et utilise pour la première fois des câbles en fils d'acier » ; dans la frise, « 486 m entre les piles — record mondial de portée ».
- **Fait** : Portée corrigée à 486 m / quatre cent quatre-vingts mètres (record mondial à l'ouverture) dans la section et la frise de la leçon 06.

### [MINEUR] ✅ Leçon 06 : « quatorze ans de travaux » pour le pont de Brooklyn

- **Où** : même leçon, même section et même frise.
- **Problème** : les travaux commencent en janvier 1870 et le pont ouvre en mai 1883, soit treize ans et quatre mois. « Quatorze ans » est un arrondi répandu mais inexact ; il devient gênant ici parce que la leçon donne par ailleurs les dates qui permettent de le vérifier.
- **Correction proposée** : « après treize ans de travaux » ou, plus sûr, « commencé en 1870 et achevé en 1883 ».
- **Fait** : Corrigé en même temps que le constat MOYEN voisin : « quatorze ans » remplacé par « treize ans » (section et frise, avec les dates 1870-1883).

**Reste de la leçon 06 : sain, et d'un bon niveau.** Vérifiés un à un : Pont du Gard au Ier siècle ; coupole du Panthéon toujours la plus grande voûte de béton non armé ; effondrement partiel du chœur de Beauvais en 1284 ; Iron Bridge sur la Severn en 1779 ; procédé Bessemer 1856 ; pont du Forth 1890 en cantilever ; Garabit et la tour de 1889 avec Koechlin nommé à côté d'Eiffel — ce qui est justement la paternité partagée qu'on cherche ailleurs en vain ; Lambot puis Monier, Hennebique dans les années 1890 ; Home Insurance Building 1885 **présenté comme « souvent cité » et « discuté par les historiens »**, prudence exemplaire ; parachute d'Otis en 1853 ; Empire State Building 1931 à 381 m ; Fréjus 1871 sur près de treize kilomètres ; dynamite brevetée en 1867 ; Simplon 1906 au-delà de dix-neuf kilomètres ; tunnel sous la Manche 50 km dont 37 sous la mer, 1994 ; Suez 1869 ; Panama 1914 après l'échec français ; École des ponts et chaussées 1747 ; Tay 1879 ; Tacoma 1940 ; Millau 2004, pylône à 343 m. La question 5 du quiz, sur le rôle des moustiques à Panama, est le meilleur item lu jusqu'ici du domaine : elle enseigne qu'un grand ouvrage dépend autant de la médecine que du calcul.

## Vérifications web laissées en suspens par le prédécesseur — tranchées

### [MOYEN → GRAVE] L'ESA compte vingt-trois États membres, pas vingt-deux

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-espace-exploration`, explication : « Fondée en 1975, elle réunit vingt-deux États membres ».
- **Vérification** : la page officielle « Member States & Cooperating States » de l'ESA en liste **vingt-trois** : Allemagne, Autriche, Belgique, Danemark, Espagne, Estonie, Finlande, France, Grèce, Hongrie, Irlande, Italie, Luxembourg, Norvège, Pays-Bas, Pologne, Portugal, République tchèque, Roumanie, Royaume-Uni, Slovénie, Suède, Suisse. La Slovénie est le vingt-troisième, admis comme État membre de plein exercice. Chypre, la Lettonie, la Lituanie et la Slovaquie sont membres associés — Chypre depuis le 17 mars 2026 — et ne comptent pas dans les vingt-trois.
- **Conclusion** : le chiffre du seed est faux au moment de la lecture. C'est le cas d'école du « chiffre sans date » : il était juste, il ne l'est plus.
- **Correction proposée** : « Fondée en 1975, elle réunit vingt-trois États membres (2026), auxquels s'ajoutent plusieurs membres associés. » Et, pour ne plus avoir à y revenir, préférer dans la question un fait stable (la date de fondation, le siège à Paris, le port spatial de Kourou) plutôt qu'un décompte.
- Source : https://www.esa.int/About_Us/Corporate_news/Member_States_Cooperating_States

### [MOYEN] ✅ Le nombre de câbles sous-marins est très sous-estimé

- **Où** : `prisma/seed/culture-g/sciences-tech-2.ts` — `st2-communication-histoire` : « Plus de quatre-vingt-dix-neuf pour cent du trafic international, sur environ quatre cents câbles ».
- **Vérification** : le recensement de référence (TeleGeography, carte 2025) donne **environ 570 systèmes en service**, et 597 en service ou en construction, pour 1 712 points d'atterrissement. Le chiffre de « quatre cents » correspond à l'état du réseau vers 2017-2018 ; il est dépassé de plus de 40 %.
- **Le reste de l'affirmation est juste** : la part du trafic international transitant par les câbles sous-marins est bien de l'ordre de 99 %.
- **Correction proposée** : « Plus de quatre-vingt-dix-neuf pour cent du trafic international, sur près de six cents câbles en service (2025) » — ou, plus robuste dans le temps, « sur plusieurs centaines de câbles, dont le nombre augmente chaque année ».
- Source : https://resources.telegeography.com/how-many-submarine-cables-are-there-anyway
- **Fait** : « environ quatre cents câbles » remplacé par « près de six cents câbles en service (2025) », conformément à la source TeleGeography citée.

### Leçon 07 (matériaux) — aucun constat de fond

Lue intégralement : 5 sections, 3 visuels, 5 questions de quiz. **Rien à signaler.** Vérifiés : cuivre travaillé dès le sixième millénaire au Proche-Orient ; bronze à environ dix pour cent d'étain vers 3000 avant notre ère ; effondrement des civilisations du bronze vers 1200 ; fer chez les Hittites au deuxième millénaire ; Bessemer 1856 ; acier inoxydable au chrome vers 1913 ; soufflage du verre sur la côte syrienne au Ier siècle avant notre ère ; verre flotté de Pilkington en 1959 ; porcelaine percée à Meissen au début du XVIIIe siècle ; vulcanisation de Goodyear en 1839 ; celluloïd de Hyatt vers 1869 ; bakélite de Baekeland en 1907 ; polyéthylène découvert par hasard en Angleterre en 1933 ; nylon de Carothers chez DuPont à partir de 1935 ; Hall **et** Héroult indépendamment en 1886.

Deux détails méritent d'être signalés comme **bons**, parce qu'ils corrigent des idées fausses répandues : l'explication du quiz 1 prend la peine de dire que « le bronze fond en réalité à une température inférieure à celle du cuivre pur », ce qui contredit l'intuition ; et l'explication du quiz 5 précise « il n'y a aucune fusion : les constituants restent distincts, ce qui complique d'ailleurs le recyclage », là où la plupart des vulgarisations parlent d'alliage. C'est le contraire du faux cours.

Seule réserve, minime et non retenue comme constat : la section parle d'un alliage découvert « vers 3000 avant notre ère » et l'explication du quiz de « métallurgistes du troisième millénaire », ce qui ne recouvre pas exactement la même période. L'écart est d'un siècle ou deux sur un fait par nature imprécis, et aucune des deux formulations n'est fausse.

### [MOYEN] ✅ Leçon 08 : la critique du perceptron attribuée au seul Minsky, et rangée sous 1957

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/08.json` — section « Systèmes experts et hivers de l'intelligence artificielle », et le visuel « frise » de la même section.
- **Texte (section)** : « Frank Rosenblatt avait présenté en 1957 le perceptron […] ; mais **la critique publiée par Minsky** sur les limites du perceptron simple détourna les chercheurs de cette voie pendant une dizaine d'années. »
- **Texte (frise, entrée datée 1957)** : « Rosenblatt présente une machine qui apprend seule à classer des formes ; **la critique de Minsky** détournera les chercheurs de cette voie pendant une dizaine d'années. »
- **Problème** : deux défauts qui se renforcent. D'une part, l'ouvrage en cause, *Perceptrons*, est de **Marvin Minsky et Seymour Papert**, publié en **1969** ; l'attribution au seul Minsky est exactement la paternité simplifiée que cet audit cherche. D'autre part la frise, qui est un objet daté, loge cette critique dans l'entrée « 1957 » : un apprenant qui mémorise la frise retient que le perceptron a été enterré l'année même de sa présentation, alors que douze ans les séparent. Le texte, lui, ne donne aucune date pour la critique — le lecteur n'a donc nulle part de quoi rétablir la chronologie.
- **Correction proposée** : dans la section, « mais la critique publiée en 1969 par Marvin Minsky et Seymour Papert, dans *Perceptrons*, sur les limites du perceptron à une seule couche, détourna les chercheurs de cette voie pendant une dizaine d'années ». Dans la frise, scinder en deux entrées : « 1957 — Le perceptron : Rosenblatt présente une machine qui apprend seule à classer des formes » et « 1969 — *Perceptrons* : Minsky et Papert montrent les limites du perceptron à une couche ; le connexionnisme est délaissé pendant une dizaine d'années ».
- **Fait** : Attribution corrigée à Marvin Minsky et Seymour Papert (1969, *Perceptrons*) dans la section ; la frise a été scindée en deux entrées, 1957 et 1969.

### [MINEUR] ✅ Leçon 08 : les premiers ordinateurs électroniques datés « vers 1950 »

- **Où** : même leçon, section « Des automates au neurone formel ».
- **Texte** : « Vers 1950, les premiers ordinateurs électroniques donnent enfin un support concret à ces spéculations, jusque-là purement théoriques. »
- **Problème** : Colossus fonctionne en 1943, l'ENIAC est dévoilé en 1946. « Vers 1950 » retarde de plusieurs années l'apparition des premiers ordinateurs électroniques. La phrase reste défendable si on la lit comme « le moment où ces machines deviennent accessibles à ce genre de travaux », mais elle ne le dit pas.
- **Correction proposée** : « Les premiers ordinateurs électroniques, apparus dans les années 1940, donnent enfin, autour de 1950, un support concret à ces spéculations. »
- **Fait** : « Vers 1950, les premiers ordinateurs électroniques » remplacé par « Les premiers ordinateurs électroniques, apparus dans les années 1940... autour de 1950 ».

**Reste de la leçon 08 : solide.** McCulloch et Pitts en 1943 ; Turing en 1950 ; SNARC de Minsky en 1951 ; Logic Theorist de Newell et Simon ; Dartmouth 1956 avec McCarthy, Minsky et Shannon ; rapport Lighthill 1973 ; premier hiver 1974-1980 ; second hiver 1987-1993 ; rétropropagation popularisée en 1986 par Rumelhart, Hinton et Williams — le verbe « popularisée » est le bon, l'algorithme étant antérieur ; LeNet-5 de LeCun et la lecture des chèques ; AlexNet en 2012 par Krizhevsky, Sutskever et Hinton ; R.U.R. de Karel Capek en 1920, avec la mention honnête de la dette envers son frère Josef ; robota ; Asimov et le mot « robotique » ; tortues de Grey Walter vers 1950 ; Unimate chez General Motors en 1961. Le traitement du test de Turing est particulièrement propre : il dit explicitement que le test « ne prétend pas définir la conscience ni l'intériorité », ce que la plupart des vulgarisations omettent.

**À signaler à qui appliquera les corrections** : cette leçon couvre presque exactement le contenu de la notion `st-intelligence-artificielle`, qui est l'une des quatre notions du seed sans cours (constat du prédécesseur). Elle constitue une source toute prête pour écrire ce cours manquant.

### [MOYEN] ✅ Leçon 09 : l'attelage à trois points daté de 1919 au lieu de 1926

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/09.json` — section « L'araire, la charrue et la force animale ».
- **Texte** : « Beaucoup plus tard, **en 1919**, l'ingénieur Harry Ferguson met au point l'attelage hydraulique à trois points, qui relie la charrue au tracteur et permet de régler précisément la profondeur du labour. »
- **Problème** : erreur de date. 1919 est l'année où Ferguson, alors au Conseil irlandais de l'agriculture, travaille sur le dessin d'une charrue portée — le point de départ, pas l'aboutissement. L'attelage trois-points sous sa forme brevetée date de **1926** (brevet britannique), au terme d'une décennie d'essais (versions duplex puis triplex, mécaniques puis hydrauliques) menés entre 1916 et 1926. Le régulateur hydraulique d'effort, qui est précisément ce que la phrase décrit (« régler précisément la profondeur du labour »), appartient à la fin de ce parcours, pas à 1919.
- **Correction proposée** : « Beaucoup plus tard, l'ingénieur Harry Ferguson, qui travaille sur les charrues portées dès 1919, brevette en 1926 l'attelage à trois points ; son régulateur hydraulique règle la profondeur du labour en fonction de l'effort de traction. »
- Source : https://fr.wikipedia.org/wiki/Attelage_trois-points
- **Fait** : Date corrigée : brevet de l'attelage à trois points en 1926 (travaux sur charrues portées dès 1919), leçon 09.

### [MOYEN] ✅ Leçon 09 : la production de blé indienne « multipliée par dix »

- **Où** : même leçon, section « Engrais de synthèse, révolution verte et interrogations actuelles », et le visuel « chiffres » de la même section.
- **Texte (section)** : « Cet ensemble, appelé révolution verte et déployé surtout **de 1960 à 1990** […] **L'Inde multiplie par dix sa production de blé.** »
- **Texte (visuel)** : « **× 10** — la production de blé de l'Inde pendant la révolution verte (1960-1990) »
- **Problème** : le chiffre est faux à l'intérieur de la période que la leçon lui assigne elle-même. La production indienne de blé passe de 11,4 millions de tonnes en 1960-61 à une valeur comprise, selon les séries, entre 36 et 55 millions de tonnes en 1990 : un facteur compris entre trois et cinq, pas dix. Le facteur dix ne s'obtient qu'en partant du début des années 1950 (environ 6 millions de tonnes) et en allant jusqu'aux années 2000. Le visuel, en accolant « × 10 » et « 1960-1990 », fige l'erreur sous la forme la plus mémorisable qui soit.
- **Correction proposée** : « L'Inde quadruple sa production de blé entre 1960 et 1990 » dans la section, et « × 4 environ — la production de blé de l'Inde entre 1960 et 1990 » dans le visuel. Si l'on tient au facteur dix, il faut écrire « du début des années 1950 aux années 2000 ».
- **Fait** : Facteur corrigé à « environ cinq » (valeur révisée par la passe 2 du rapport lui-même), dans la section et le visuel de la leçon 09.

### [MOYEN] ✅ Leçon 09 : « vers 1700, la charrue est majoritairement construite en fer »

- **Où** : même leçon, section « L'araire, la charrue et la force animale ».
- **Texte** : « Vers 1700, la charrue est majoritairement construite en fer. »
- **Problème** : la source dont cette phrase paraît tirée (l'article « Charrue » de Wikipédia, cité dans les sources de la leçon) dit l'inverse en creux : une charrue dont l'attelage, le soc, le versoir et le coutre sont tous en fer, « ce qui est en fait rarement le cas avant 1700 ». « Rarement le cas avant 1700 » ne signifie pas « majoritaire vers 1700 » : c'est une borne inférieure transformée en état de fait. La charrue entièrement métallique se généralise en Europe au cours du XVIIIe et surtout du XIXe siècle (charrue de Rotherham vers 1730, socs en fonte puis en acier ensuite).
- **Correction proposée** : « La charrue entièrement métallique reste rare avant 1700 ; elle ne se généralise qu'au cours des deux siècles suivants. »
- **Fait** : « Vers 1700, majoritairement en fer » remplacé par « reste rare avant 1700 ; ne se généralise qu'au cours des deux siècles suivants ».

### [MINEUR] ✅ Leçon 09 : la loi du minimum attribuée au seul Liebig

- **Où** : même leçon, section « La révolution agricole des XVIIIe et XIXe siècles ».
- **Texte** : « Le chimiste allemand Justus von Liebig établit que les plantes se nourrissent d'éléments minéraux précis et qu'un sol produit selon l'élément qui lui manque le plus. »
- **Problème** : la seconde moitié de la phrase est la loi du minimum, énoncée par **Carl Sprengel** en 1828 ; Liebig l'a reprise, diffusée et rendue célèbre à partir de 1840. On parle d'ailleurs de loi de Sprengel-Liebig. Attribution simplifiée du même type que celle relevée à la leçon 08 pour le perceptron.
- **Correction proposée** : « Le chimiste allemand Justus von Liebig établit que les plantes se nourrissent d'éléments minéraux précis, et diffuse la loi du minimum énoncée par Carl Sprengel : un sol produit selon l'élément qui lui manque le plus. »
- **Fait** : Loi du minimum réattribuée à Carl Sprengel, Liebig étant présenté comme celui qui la diffuse et la rend célèbre.

### [MINEUR] ✅ Leçon 09 : la domestication animale datée « vers 9000 »

- **Où** : même leçon, section « La révolution néolithique », et explication du quiz 1.
- **Texte** : « la domestication de l'orge et du blé s'engage entre 9500 et 9000 avant notre ère ; celle de la chèvre, du mouton et des bovins **suit vers 9000**. »
- **Problème** : les datations couramment retenues pour la chèvre, le mouton et les bovins se situent plutôt entre 8500 et 8000 avant notre ère. L'écart, de cinq cents à mille ans, est modeste au regard de l'incertitude propre à ces datations, mais il écrase la chronologie : la leçon donne l'impression que plantes et animaux sont domestiqués presque simultanément, alors que l'ordre — les plantes d'abord, les animaux ensuite — est justement un des enseignements de la période.
- **Correction proposée** : « celle de la chèvre, du mouton et des bovins suit quelques siècles plus tard, entre 8500 et 8000 ».
- **Fait** : « suit vers 9000 » remplacé par « suit quelques siècles plus tard, entre 8500 et 8000 avant notre ère ».

**Reste de la leçon 09 : sain.** Néolithique vers 10 000 avant notre ère ; au moins une dizaine de foyers indépendants — précision précieuse, la leçon prend soin d'écrire « cela ne signifie pas que l'agriculture est née une seule fois » ; riz et millet en Chine entre 7000 et 5000 ; maïs et haricot en Mésoamérique ; socs en fer en Chine au IIe siècle avant notre ère ; charrue lourde en Europe entre le Xe et le XIIIe siècle ; distinction araire/charrue (symétrie, versoir, coutre, soc) exacte et bien expliquée ; assolement triennal au nord, biennal au Midi, avec la bonne raison climatique ; symbiose racinaire et fixation de l'azote ; enclosures et leur revers social, dit sans complaisance ; Haber en 1909 avec Robert Le Rossignol nommé à ses côtés ; Bosch et BASF ; Oppau et ses trente tonnes par jour dès 1913 ; usage explosif dès la Première Guerre mondiale, avec la morale de l'ambivalence ; Borlaug au Mexique dès 1943 avec la fondation Rockefeller ; IRRI aux Philippines en 1960 ; Nobel de la paix en 1970 ; et les critiques de la révolution verte énumérées sans être escamotées.

### [MOYEN] ✅ Leçon 10 : Gutenberg n'a pas emprunté huit cents florins mais mille six cents

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/10.json` — section « La Bible à quarante-deux lignes et la fin difficile de Gutenberg ».
- **Texte** : « L'entreprise coûte cher. Gutenberg emprunte **huit cents florins** au banquier Johann Fust. »
- **Problème** : le chiffre est celui d'un seul des deux prêts. Fust avance 800 florins en 1449-1450, à 6 %, gagés sur le matériel à construire, puis 800 florins de plus en 1452 pour le « travail des livres ». Le total prêté est donc de **mille six cents florins**, et c'est 2 026 florins, capital et intérêts, que Fust réclame au procès de 1455 — chiffre établi par l'instrument notarié dit document Helmasperger du 6 novembre 1455. Diviser la somme par deux affaiblit précisément ce que la section veut montrer : l'ampleur de l'endettement qui a coûté son atelier à Gutenberg.
- **Correction proposée** : « Gutenberg emprunte à deux reprises huit cents florins au banquier Johann Fust, soit mille six cents florins au total, sur lesquels ce dernier réclamera plus de deux mille florins d'intérêts compris. »
- Source : https://www.britannica.com/biography/Johann-Fust
- **Fait** : « Gutenberg emprunte huit cents florins » corrigé en « emprunte à deux reprises huit cents florins... soit mille six cents florins au total ».

### [MINEUR] ✅ Leçon 10 : la Bible à quarante-deux lignes présentée comme le plus ancien incunable connu

- **Où** : même leçon, explication du quiz 3.
- **Texte** : « **Le plus ancien connu est la Bible à quarante-deux lignes**, produite à Mayence vers 1454. »
- **Problème** : la B42 est le premier grand livre imprimé, non le plus ancien imprimé européen conservé. Lui sont antérieurs des fragments et des imprimés d'une feuille sortis du même atelier — le fragment du *Sibyllenbuch*, les *Donat* scolaires, et surtout les indulgences de 1454-1455, qui sont datées. Dire « le plus ancien connu » contredit d'ailleurs la section 3 de la même leçon, qui écrit prudemment « L'atelier de Mayence produit entre 1452 et 1455 environ cent quatre-vingts exemplaires d'une Bible latine » sans revendiquer d'antériorité absolue.
- **Correction proposée** : « Le plus célèbre, et le premier grand livre imprimé, est la Bible à quarante-deux lignes, produite à Mayence entre 1452 et 1455 ; des fragments et des imprimés d'une feuille sortis du même atelier lui sont antérieurs. »
- **Fait** : « Le plus ancien connu » remplacé par « Le plus célèbre, et le premier grand livre imprimé », avec mention des fragments antérieurs du même atelier.

### [MINEUR] ✅ Leçon 10 : « une quarantaine d'exemplaires » subsistants

- **Où** : même leçon, section « La Bible à quarante-deux lignes ».
- **Texte** : « il en subsiste aujourd'hui **une quarantaine** d'exemplaires, précieusement conservés. »
- **Problème** : le décompte de référence est de **quarante-neuf** exemplaires en état raisonnablement intact — trente-sept sur papier et douze sur vélin. « Une quarantaine » arrondit vers le bas d'une dizaine ; « une cinquantaine » serait plus juste.
- **Correction proposée** : « il en subsiste aujourd'hui quarante-neuf exemplaires, dont trente-sept sur papier et douze sur vélin ».
- Source : https://fr.wikipedia.org/wiki/Bible_de_Gutenberg
- **Note connexe, non retenue comme constat** : la leçon donne « mille deux cent quatre-vingt-deux pages », d'autres sources donnent 1 286 pages pour 643 feuillets. Les deux chiffres circulent selon la façon de compter ; il n'y a pas lieu de trancher.
- **Fait** : « une quarantaine » remplacé par « quarante-neuf exemplaires, dont trente-sept sur papier et douze sur vélin », sourcé.

**Reste de la leçon 10 : la meilleure du lot jusqu'ici.** Xylographie chinoise dès le VIIe siècle ; Sûtra du Diamant en 868 ; Bi Sheng vers 1040 en terre cuite ; caractères métalliques coréens attestés dès 1234 ; Jikji en 1377 ; Gutenberg né vers 1400 à Mayence, mort le 3 février 1468 ; alliage plomb-étain-antimoine ; moule à main ; encre grasse ; presse dérivée du pressoir ; procès perdu en 1455 ; Schöffer gendre de Fust ; pension d'Adolphe II de Nassau en 1465 ; incunables antérieurs au 1er janvier 1501, environ trente mille éditions dont deux tiers en latin ; Pannartz et Sweynheim en Italie dès 1465 ; Venise à partir de 1469 ; premier atelier français à la Sorbonne en 1470 ; vingt millions de livres en cinquante ans ; Réforme à partir de 1517 ; Stanhope en 1795 ; Koenig et le Times le 29 novembre 1814 ; rotative de Hoe en 1847 ; dix-huit mille exemplaires à l'heure en 1871 ; Marinoni et le Petit Journal à partir de 1866.

Deux choses méritent d'être relevées comme exemplaires. Le titre de section « **Gutenberg : non pas une invention, mais un système** » énonce la thèse juste, et la section la démontre au lieu de l'affirmer. Et la leçon écrit noir sur blanc « **L'imprimerie n'a donc pas été inventée en Europe** », puis « la Bible à quarante-deux lignes fut une œuvre collective, associant Gutenberg, Fust et Schöffer » : c'est exactement l'antidote à la paternité simplifiée que cet audit traque ailleurs.

### [MOYEN] ✅ Leçon 11 : le ressort spiral attribué à Isaac Thuret, sans Huygens ni Hooke

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/11.json` — section « Le pendule, le spiral et la conquête de la précision ».
- **Texte** : « Pour les montres, où un pendule est inutilisable, le même rôle est tenu par un balancier associé à un fin ressort spiral ; **Isaac Thuret réalise en 1675 une montre à ressort spiral.** »
- **Problème** : la phrase est littéralement exacte et pédagogiquement trompeuse. Thuret est l'horloger parisien qui **exécute** en 1675 la montre conçue par **Christiaan Huygens** — le même Huygens qui occupe tout le reste du paragraphe — et il tenta d'ailleurs de s'en attribuer le mérite, ce qui brouilla durablement ses relations avec le savant. Par ailleurs, **Robert Hooke** revendiquait le principe depuis les années 1660, et la querelle de priorité Huygens-Hooke sur le ressort spiral est l'une des plus documentées du siècle. Citer Thuret seul, dans une leçon qui vient de nommer Huygens quatre fois, donne à l'apprenant l'inventeur le moins défendable des trois.
- **Correction proposée** : « Pour les montres, où un pendule est inutilisable, le même rôle est tenu par un balancier associé à un fin ressort spiral, appliqué par Huygens en 1675 — l'horloger parisien Isaac Thuret en réalise la montre — et revendiqué au même moment par l'Anglais Robert Hooke. »
- **Fait** : Section reformulée pour nommer Huygens comme concepteur (1675) et Hooke comme revendicateur concurrent ; Thuret n'est plus présenté que comme l'horloger exécutant.

### [MOYEN] ✅ Leçon 11 : la précision de la première horloge atomique, et celle des horloges actuelles

- **Où** : même leçon, section « Du quartz à l'atome », et le visuel « frise » de la même section.
- **Texte 1** : « Louis Essen et Jack Parry présentent en 1955 […] la première horloge atomique au césium, **précise à une seconde près sur trente ans**. » (repris tel quel dans la frise : « une seconde d'écart sur trente ans »)
- **Texte 2** : « Les meilleures horloges dérivent aujourd'hui d'une seconde en **plusieurs dizaines de millions d'années**. »
- **Problème, premier chiffre** : les sources se contredisent et la leçon a retenu la plus basse. Le Science Museum, qui conserve l'appareil, et le National Physical Laboratory, qui l'a construit, donnent **une seconde en trois cents ans** — « accurate to a second in 300 years, about 30 times better than the quartz crystal clocks » ; la version française de Wikipédia, source citée par la leçon, donne « 1 s sur 30 ans ». Un facteur dix sépare les deux. **À arbitrer sur pièces**, mais la valeur institutionnelle mérite d'être préférée à celle de l'encyclopédie.
- **Problème, second chiffre** : « plusieurs dizaines de millions d'années » est très en dessous de l'état de l'art. Les fontaines à césium sont de l'ordre de la seconde sur cent à trois cents millions d'années, et les horloges optiques à réseau atteignent des stabilités correspondant à moins d'une seconde sur l'âge de l'univers.
- **Aggravant, et c'est le point important** : le domaine donne désormais **quatre** ordres de grandeur différents pour la même chose, sans qu'aucun texte n'explique lesquels portent sur quelle génération d'horloge. Le prédécesseur en avait relevé deux (`st2-mesure-temps` : « une seconde sur des millions d'années » ; `st3-instrument-scientifique` : « moins d'une seconde sur l'âge de l'univers ») ; la leçon 11 en ajoute deux autres (« trente ans » pour 1955, « plusieurs dizaines de millions d'années » pour aujourd'hui). Un apprenant qui parcourt le domaine entier ne peut qu'en sortir désorienté.
- **Correction proposée** : harmoniser **tout le domaine** sur une échelle unique et explicitement générationnelle — « la première horloge au césium (1955) : une seconde sur trois cents ans ; une fontaine à césium actuelle : une seconde sur plusieurs centaines de millions d'années ; une horloge optique de laboratoire : moins d'une seconde sur l'âge de l'univers ». C'est la seule formulation qui rende les trois chiffres compatibles au lieu de les faire se contredire.
- Sources : https://collection.sciencemuseumgroup.org.uk/objects/co855/caesium-atomic-clock-1955 et https://fr.wikipedia.org/wiki/Horloge_atomique
- **Fait** : Précision de 1955 corrigée à « une seconde sur trois cents ans » (valeur du NPL) ; précision actuelle reformulée en distinguant fontaines à césium et horloges optiques, dans la section et la frise.

**Reste de la leçon 11 : excellent, et la meilleure section « calendriers » de tout le corpus lu.** Cadran solaire babylonien du deuxième millénaire ; clepsydre limitant le temps de parole au tribunal ; horloge de Milan en 1336, de Prague en 1410 ; échappement expliqué par son mécanisme et non par son nom ; isochronisme remarqué par Galilée ; formule de la période attribuée à Huygens ; horloge à pendule de 1656, *Horologium* en 1658, cycloïde en décembre 1659, *Horologium oscillatorium* en 1673 ; Longitude Act de 1714 et Harrison en 1765 ; piézoélectricité et horloge à quartz de Marrison en 1927 ; Astron de Seiko en 1969 ; définition de la seconde de 1967 avec les 9 192 631 770 périodes ; année tropique de 365,2422 jours ; réforme julienne de 46-45 avant notre ère avec Sosigène d'Alexandrie ; erreur des prêtres intercalant tous les trois ans, corrigée sous Auguste ; onze minutes d'écart par an, un jour tous les cent trente ans ; bulle *Inter gravissimas* du 24 février 1582 ; jeudi 4 octobre suivi du vendredi 15 octobre ; règle des séculaires divisibles par 400 ; année moyenne de 365,2425 ; Russie en 1918. Tout est juste. Le passage sur le temps de l'Église cédant au temps des marchands ajoute une vraie idée historique à une leçon technique.

### [MOYEN] ✅ Leçon 12 : « dès le IVe siècle » pour la magnétite — il manque « avant notre ère »

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/12.json` — section « La boussole : s'orienter loin de tout repère », et explication du quiz 5.
- **Texte (section)** : « L'instrument vient de Chine. **Dès le IVe siècle**, des textes signalent la propriété de la magnétite d'attirer le fer, mais la première mention claire d'un usage pour la navigation figure dans un texte de Zhu Yu daté de 1117 »
- **Texte (quiz 5)** : « Les propriétés de la magnétite, qui attire le fer, sont mentionnées **dès le IVe siècle** »
- **Problème** : la mention chinoise la plus ancienne est du **IVe siècle avant notre ère** — le *Livre du maître de la vallée du diable* attribué à Wang Xu, « la magnétite fait venir le fer à elle » — la mention de l'attraction d'une aiguille venant ensuite dans le *Lunheng*, vers 70-80 de notre ère. L'omission de « avant notre ère » déplace le fait de huit siècles et, surtout, écrase la durée qu'il sert à illustrer : entre la connaissance de la magnétite et son emploi en mer, il s'écoule environ quinze siècles, non sept. C'est précisément la lenteur de ce passage de la curiosité à l'usage que la leçon veut faire sentir. L'erreur est répétée deux fois, dans la section et dans l'explication du quiz.
- **Correction proposée** : « Dès le IVe siècle avant notre ère, des textes chinois signalent la propriété de la magnétite d'attirer le fer ; il faudra attendre quinze siècles pour que cette curiosité devienne un instrument de navigation, la première mention claire figurant dans un texte de Zhu Yu daté de 1117. »
- Source : https://fr.wikipedia.org/wiki/Boussole
- **Fait** : « avant notre ère » ajouté aux deux occurrences (section et explication du quiz) de la leçon 12 concernant la datation chinoise de la magnétite.

### [MINEUR] ✅ Leçon 12 : le grossissement de Leeuwenhoek, deux cents ou trois cents fois selon le fichier

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/12.json` (section « Le microscope » et explication du quiz 3) contre `prisma/seed/culture-g/sciences-tech-3.ts` — `st3-instrument-scientifique`.
- **Texte (leçon)** : « atteint des grossissements **de l'ordre de trois cents fois** » / « atteignant **environ trois cents fois** de grossissement ».
- **Texte (seed)** : « Ses lentilles uniques, taillées à la main, dépassaient **deux cents fois** de grossissement ».
- **Problème** : les deux chiffres sont défendables — les lentilles conservées de Leeuwenhoek vont d'environ 70 à 270 fois, et l'on a longtemps supposé qu'il en possédait de meilleures — mais l'apprenant qui rencontre les deux notions retient deux valeurs différentes pour le même fait. Le prédécesseur avait relevé la maladresse de construction de la phrase du seed (« dépassaient deux cents fois de grossissement ») sans voir qu'elle ne s'accorde pas non plus avec la leçon patrimoniale.
- **Correction proposée** : retenir partout « jusqu'à environ deux cent soixante-dix fois », valeur mesurée sur les lentilles conservées, et écrire dans le seed « Ses lentilles uniques, taillées à la main, atteignaient près de trois cents fois de grossissement ».
- **Fait** : Harmonisé sur « près de trois cents fois » dans le seed (ts) ; déjà cohérent avec les deux occurrences « trois cents fois » de la leçon 12, donc aucune modification à faire côté leçon.

**Reste de la leçon 12 : très bon, et remarquable sur les paternités.** La section 1 est intitulée dans son visuel « **La lunette de 1608 : une invention sans inventeur certain** », énumère Taqi al-Din vers 1574, Lippershey et sa demande du 2 octobre 1608, Metius quelques semaines plus tard, Janssen sans date, et conclut « Aucune paternité ne peut être établie avec certitude » : c'est exactement le traitement que l'audit réclame ailleurs. Même prudence pour le microscope (« son inventeur reste discuté : Janssen, Lippershey, Drebbel, sans preuve décisive ») et pour la boussole, dont la leçon prend soin de démonter le mythe de Flavio Gioja. Vérifiés par ailleurs : grossissement de Galilée porté de six à une trentaine de fois dès 1609 ; montagnes lunaires, quatre satellites de Jupiter, phases de Vénus ; Kepler en 1611 ; premier télescope à réflexion de Newton en 1668 et le miroir plan à quarante-cinq degrés ; Hubble lancé en 1990 ; Faber et le mot « microscope » en 1625 ; *Micrographia* en 1665 et les cellules du liège comparées aux cellules d'un monastère ; micro-organismes à partir de 1676 ; limite d'Abbe et les deux cent cinquante nanomètres, correctement convertis en « un quart de millième de millimètre » ; grossissement vide ; Ruska et Knoll en 1931 ; Zhu Yu en 1117 ; Neckam vers 1190 ; déclinaison ; rose des vents à trente-deux aires de vent, soit onze degrés et quart. L'explication du pôle nord géographique se comportant en pôle sud magnétique est juste et rarement dite.

### [GRAVE] Leçon 13 : le meilleur vol du 17 décembre 1903 mesuré 284 mètres au lieu de 260

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/13.json` — section « 17 décembre 1903 : les frères Wright et une paternité discutée » ; légende du visuel `st-wright-1903` de la même section ; explication du quiz 3. **Trois occurrences.**
- **Texte (section)** : « ils effectuent quatre vols avec le Flyer, le meilleur atteignant cinquante-neuf secondes et **deux cent quatre-vingt-quatre mètres**. »
- **Texte (légende)** : « le meilleur des quatre vols du Flyer atteint cinquante-neuf secondes et **deux cent quatre-vingt-quatre mètres**. »
- **Texte (quiz 3)** : « dont le meilleur essai dure cinquante-neuf secondes sur **deux cent quatre-vingt-quatre mètres**. »
- **Problème** : erreur de fait sur l'un des chiffres les plus cités de l'histoire des techniques. Les quatre vols du 17 décembre 1903 couvrent 120, 175, 200 et **852 pieds**, soit 36,6, 53,3, 61 et **260 mètres**. Le quatrième, piloté par Wilbur, dure bien cinquante-neuf secondes, mais sur **deux cent soixante mètres**. La durée est juste, la distance ne l'est pas ; et comme la durée est juste, l'erreur passe d'autant mieux inaperçue. Elle est répétée trois fois dans la même leçon, dont une en légende d'image — la forme la plus retenue par un lecteur.
- **Correction proposée** : remplacer les trois occurrences par « cinquante-neuf secondes et deux cent soixante mètres », et, si l'on veut ajouter quelque chose d'utile, « les trois premiers vols n'avaient parcouru que 37, 53 et 61 mètres ».
- Sources : https://fr.wikipedia.org/wiki/Fr%C3%A8res_Wright et https://en.wikipedia.org/wiki/Wright_Flyer

### [MOYEN] ✅ Leçon 13 : le consortium Airbus n'est pas fondé à quatre pays

- **Où** : même leçon, section « L'âge du réacteur et l'aventure Airbus », et explication du quiz 5. **Deux occurrences.**
- **Texte** : « Le consortium Airbus naît le 18 décembre 1970, **associant la France, l'Allemagne, les Pays-Bas et l'Espagne**, rejoints par le Royaume-Uni en 1979. »
- **Problème** : Airbus Industrie est constitué le 18 décembre 1970 par **deux** partenaires, Aérospatiale pour la France et Deutsche Airbus pour l'Allemagne. L'espagnol CASA n'entre au capital qu'en 1972, pour 4,2 %. Quant aux Pays-Bas, la participation néerlandaise passe par Fokker et se règle au moment de la restructuration qui précède la création, les parts revenant à l'Allemagne — les Pays-Bas ne sont donc pas un pays fondateur du GIE au sens où la phrase le laisse entendre. Seule la date de 1979 pour le Royaume-Uni est exacte, British Aerospace rejoignant officiellement le groupement le 1er janvier 1979 pour l'A310.
- **Correction proposée** : « Le consortium Airbus naît le 18 décembre 1970 de l'association de la France et de l'Allemagne ; l'Espagne le rejoint en 1972, le Royaume-Uni le 1er janvier 1979. »
- Source : https://fr.wikipedia.org/wiki/Airbus
- **Fait** : Fondateurs corrigés : consortium né de la France et de l'Allemagne en 1970, rejointes par l'Espagne en 1972 et le Royaume-Uni en 1979 (section et explication du quiz).

### [MOYEN] ✅ Leçon 13 : l'A300 entre en service le 23 mai 1974, non le 15 avril

- **Où** : même leçon, même section, et explication du quiz 5. **Deux occurrences.**
- **Texte** : « L'A300, premier appareil à deux couloirs et deux moteurs seulement, vole le 28 octobre 1972 et **entre en service le 15 avril 1974** chez Air France. »
- **Problème** : la date du premier vol est juste ; celle de l'entrée en service ne l'est pas. Air France met l'A300 en ligne le **23 mai 1974**, sur Paris-Londres. Le décalage est d'un mois, sur une date que la leçon prend la peine de donner au jour près — donc une date que l'apprenant apprendra au jour près.
- **Correction proposée** : « vole le 28 octobre 1972 et entre en service chez Air France le 23 mai 1974, sur la ligne Paris-Londres ».
- Source : https://fr.wikipedia.org/wiki/Airbus_A300
- **Fait** : Date d'entrée en service de l'A300 corrigée au 23 mai 1974, ligne Paris-Londres (section et explication du quiz).

### [MINEUR] ✅ Leçon 13 : Élisabeth Thible orthographiée « Tible »

- **Où** : même leçon, section « Plus léger que l'air », et frise de la même section.
- **Texte** : « Le 4 juin 1784, à Lyon, **Élisabeth Tible** devient la première femme à voler. »
- **Problème** : la graphie retenue par les sources est **Thible**. Faute sur un nom propre, dans une phrase qui est précisément là pour faire retenir ce nom — et dans une leçon qui, par ailleurs, orthographie correctement tous les autres.
- **Correction proposée** : « Élisabeth Thible ».
- **Fait** : « Tible » corrigé en « Thible » dans la section et la frise de la leçon 13.

**Reste de la leçon 13 : très bon, et la section sur la paternité du premier vol est un modèle.** Vérifiés : poussée d'Archimède appliquée à l'air ; Montgolfier à partir de 1782 ; Annonay le 4 juin 1783 ; Versailles le 19 septembre avec le coq, le mouton et le canard à environ 550 mètres, et la bonne raison de l'expérience (« vérifier que l'air d'altitude ne serait pas mortel ») ; vol captif du 19 octobre avec Giroud de Villette ; vol libre du 21 novembre, neuf kilomètres du bois de Boulogne à la Butte-aux-Cailles ; machines de Léonard dans les années 1480, dont la leçon dit sans détour qu'« aucune ne pouvait fonctionner » ; les quatre forces de Cayley ; plus de deux mille vols de Lilienthal entre 1891 et 1896 et sa mort en essai ; les trois axes ; dates de naissance et de mort des deux frères ; leur soufflerie et leur défiance envers les tables publiées ; gauchissement couplé à la gouverne de direction dès 1902 ; Ader et l'Éole en 1890 ; les soixante mètres du 14-bis en octobre 1906 et le vrai argument de Santos-Dumont, le décollage sans dispositif de lancement ; Wilbur au Mans en 1908 ; Blériot en juillet 1909 ; Saint-Pétersbourg-Tampa en 1914 ; Paris-Londres puis Paris-Bruxelles en 1919 ; le NC-4 d'Albert Read par étapes et Alcock et Brown d'une traite, la même année ; Lindbergh en mai 1927, avec la bonne raison de sa gloire (seul et sans escale) ; Whittle en avril 1937, von Ohain et le He 178 en 1939, le Gloster E.28/39 le 15 mai 1941 ; le double flux et son explication physique correcte ; A320 livré en mars 1988 et ses commandes électriques ; A380 le 27 avril 2005.

Le tableau « Une paternité discutée » mérite d'être signalé : il met Ader, les Wright et Santos-Dumont côte à côte avec, pour chacun, « ce qui est revendiqué, ce qui manque », et il porte au débit des Wright leur propre faiblesse (le dispositif de lancement). C'est de l'honnêteté historique rare dans ce genre de contenu.

### Leçon 14 : confirmation sur pièces de deux constats du prédécesseur

Cette leçon est la pièce à conviction qui manquait à deux constats laissés ouverts. **Elle ne les contredit pas, elle les tranche.**

- **Loi de Moore.** La section 5 écrit : « En 1965, Gordon Moore […] remarque que la complexité des circuits proposés au meilleur coût **double chaque année** depuis la fin des années 1950 […] **Il révise son estimation en 1975** en annonçant un doublement du nombre de transistors tous les deux ans. » Le quiz 5 pose d'ailleurs la question sur « la version **révisée de 1975** ». Le corpus patrimonial est donc cohérent avec lui-même sur trois fichiers (`sciences-tech.json` question 15, cours « De la Pascaline à Internet », leçon 14), et c'est bien le seed qui se trompe. **Le constat [GRAVE] du prédécesseur sur la loi de Moore est confirmé et n'appelle plus de vérification.**
- **Kilby et Noyce.** La section 4 écrit : « Jack Kilby […] réalise en 1958 le premier circuit intégré […] L'histoire des techniques **associe généralement à cette invention un second nom, celui de Robert Noyce**, alors chez Fairchild Semiconductor puis cofondateur d'Intel en 1968, **qui aboutit de son côté** à une solution industriellement plus commode. » La formulation est exemplaire : elle nomme les deux, distingue leurs apports, et ne les met pas sur la même ligne temporelle. **Le constat [MOYEN] du prédécesseur sur « Kilby et Noyce en 1958 » dans le seed est confirmé.** Seule réserve : la leçon ne date pas la réalisation de Noyce (1959), alors que c'est précisément la date qui manquait au seed. Autant l'ajouter en même temps qu'on corrigera l'un et l'autre.

### [MINEUR] ✅ Leçon 14 : la finesse de gravure de 0,13 micromètre datée de 2004

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/14.json` — section « La loi de Moore et la course à la miniaturisation », visuel « chiffres » et explication du quiz 5. **Trois occurrences.**
- **Texte** : « La finesse de gravure […] passe de **0,13 micromètre en 2004** à 5 nanomètres à la fin des années 2010 »
- **Problème** : le nœud 130 nanomètres est celui de 2001-2002 (Intel, IBM, Texas Instruments, TSMC en 2001, Samsung en production de masse en 2002) ; en 2004, l'industrie est passée au nœud 90 nanomètres, introduit cette année-là par AMD, Infineon, Texas Instruments, IBM et TSMC, et inauguré chez Intel par le Pentium 4 « Prescott » en février 2004. Deux à trois ans d'écart, sur un exemple qui sert justement à illustrer un rythme.
- **Correction proposée** : « passe de 0,13 micromètre en 2002 à 5 nanomètres autour de 2020 », ou, plus parlant encore pour le propos, « de 0,13 micromètre en 2002 à 90 nanomètres en 2004 — le rythme se voit à l'œil nu — puis à 5 nanomètres autour de 2020 ».
- **Fait** : « 0,13 micromètre en 2004 » corrigé en « en 2002 » dans la section, le visuel « chiffres » et l'explication du quiz de la leçon 14.

### [MINEUR] ✅ Leçon 14 : Shockley crédité du 23 décembre 1947 au même titre que Bardeen et Brattain

- **Où** : même leçon, section « La jonction et le transistor de 1947 », légende du visuel `st-transistor`, et explication du quiz 3.
- **Texte** : « C'est chose faite le 23 décembre 1947, aux laboratoires Bell […] où **John Bardeen, Walter Brattain et William Shockley** obtiennent un effet d'amplification sur un cristal de germanium. »
- **Problème** : c'est la version reçue, celle que reprend l'article de Wikipédia cité en source, et elle n'est pas fausse au sens du prix Nobel, partagé par les trois en 1956. Elle est simplement plus lisse que l'histoire : le transistor à pointes est construit et démontré par **Bardeen et Brattain**, Shockley étant leur chef de groupe, absent de la manipulation, et c'est **en 1948** qu'il conçoit de son côté le transistor à jonction — celui qui sera réellement industrialisé. Signalé en MINEUR parce que la leçon suit sa source et que la responsabilité est partagée ; mais dans un domaine où les leçons 12 et 13 prennent soin de démêler chaque paternité disputée, le contraste est net.
- **Correction proposée** : « C'est chose faite le 23 décembre 1947, aux laboratoires Bell, où John Bardeen et Walter Brattain obtiennent un effet d'amplification sur un cristal de germanium ; leur chef de groupe William Shockley conçoit l'année suivante le transistor à jonction, celui qui sera industrialisé. Les trois reçoivent ensemble le prix Nobel de physique en 1956. »
- Source : https://fr.wikipedia.org/wiki/Transistor
- **Fait** : Bardeen et Brattain distingués de Shockley (absent de la manipulation de 1947) : Shockley crédité du transistor à jonction, conçu l'année suivante — dans la section, la légende et l'explication du quiz.

**Reste de la leçon 14 : d'une qualité technique remarquable.** Diode de Fleming en 1904 ; triode de De Forest en 1906-1907 ; tétrode et pentode ; survivance du tube en forte puissance, en hyperfréquences et en audio ; explication des bandes d'énergie avec les bons ordres de grandeur (environ 6 eV pour un isolant, environ 1 eV pour le silicium) ; dopage N au phosphore et P au bore correctement expliqué par le nombre d'électrons de valence ; jonction PN ; nom « transistor » retenu le 28 mai 1948 ; Nobel 1956 ; bipolaire contre effet de champ ; la double fonction amplificateur/interrupteur donnée comme fondement de la logique binaire ; premier poste à transistors en 1954 ; IBM en 1957 ; brevet de Kilby accordé en 1964 et Nobel en 2000 ; photolithographie et wafer ; abandon officiel de la feuille de route en février 2016. L'explication du quiz 4, qui nomme « la tyrannie des interconnexions », apprend un vrai concept plutôt que de reformuler la question.

### [MOYEN] ✅ Leçon 15 : MD5, SHA-1 et RC4 présentés comme des outils de la cryptographie contemporaine

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/15.json` — sections « Deux familles : symétrique et asymétrique » et « RSA et la sécurité d'internet », et le visuel « comparaison ».
- **Texte 1** : « c'est le cas de DES, de son successeur renforcé le triple DES, du standard actuel AES **ou encore de l'algorithme RC4** » (repris dans le visuel : « La même clé chiffre et déchiffre : DES, triple DES, AES, RC4 »)
- **Texte 2** : « **la cryptographie contemporaine s'appuie sur les fonctions de hachage, comme MD5, SHA-1 ou SHA-256** »
- **Problème** : exact autrefois, trompeur aujourd'hui — le cas de figure que la consigne demande explicitement de signaler. MD5 est cassé en collision depuis 2004, SHA-1 depuis la collision publique de 2017, RC4 est proscrit de TLS depuis 2015, et DES l'est depuis plus longtemps encore. Écrire que la cryptographie **contemporaine** « s'appuie sur » MD5 et SHA-1 est faux au présent : elle s'en détourne, et le fait qu'ils soient cassés est justement l'un des enseignements les plus utiles du domaine. La phrase sur les algorithmes symétriques prend soin de qualifier AES de « standard actuel » — elle sait donc distinguer — mais elle range RC4 dans la même énumération sans le dater.
- **Correction proposée** : « c'est le cas de DES et de son successeur renforcé le triple DES, aujourd'hui retirés, du standard actuel AES, ou encore de RC4, proscrit depuis 2015 » ; et « la cryptographie contemporaine s'appuie sur les fonctions de hachage, qui produisent une empreinte du message : MD5 et SHA-1, longtemps universels, sont aujourd'hui cassés — on leur préfère SHA-256 ».
- **Fait** : DES, triple DES et RC4 requalifiés (retirés / proscrit depuis 2015) ; MD5 et SHA-1 présentés comme cassés, SHA-256 recommandé — dans la section et le visuel.

### [MINEUR] ✅ Leçon 15 : Scherbius développe Enigma en 1918 « dans le prolongement » d'un brevet de 1919

- **Où** : même leçon, section « Enigma, Rejewski et Turing », et l'entrée « 1918 » de la frise.
- **Texte** : « Enigma, développée par l'ingénieur allemand Arthur Scherbius **à partir de 1918**, dans le prolongement d'un brevet de rotor **déposé par Hugo Koch en 1919**. »
- **Problème** : anachronisme visible à l'œil nu — un travail commencé en 1918 ne peut pas prolonger un brevet déposé en 1919. La leçon suit ici sa source, l'article « Enigma » de Wikipédia, qui présente Scherbius comme « reprenant un brevet du Néerlandais Hugo Koch, datant de 1919 » ; mais en ajoutant la date de 1918 pour Scherbius, elle rend la phrase contradictoire. La réalité est celle d'inventions parallèles : quatre inventeurs déposent des brevets de machine à rotors entre 1917 et 1919, dont Scherbius en Allemagne et Koch aux Pays-Bas, sans filiation établie entre eux. La frise aggrave le défaut en logeant le brevet de 1919 sous l'étiquette « 1918 ».
- **Correction proposée** : « Enigma, développée par l'ingénieur allemand Arthur Scherbius à partir de 1918, à une époque où plusieurs inventeurs — dont le Néerlandais Hugo Koch, qui dépose son brevet en 1919 — imaginent parallèlement des machines à rotors. » Et dater l'entrée de frise « 1918-1919 ».
- **Fait** : Anachronisme corrigé : Scherbius situé dans le contexte de plusieurs inventeurs parallèles de machines à rotors (dont Koch, brevet de 1919), plutôt que dans le prolongement direct d'un brevet antérieur à ses propres travaux. Frise redatée « 1918-1919 ».

**Reste de la leçon 15 : la mieux construite du corpus sur le plan pédagogique.** Le tableau « Trois mots à ne pas confondre » (chiffrer / déchiffrer / décrypter) règle en trois lignes une confusion que tout le monde commet. Vérifiés : étymologie *kruptos* et *graphein* ; tablette d'argile du XVIe siècle avant notre ère et sa recette de poterie ; décalage de trois du chiffre de César ; ROT13 ; conservation des fréquences ; analyse fréquentielle au IXe siècle dans le monde arabe ; substitution monoalphabétique contre polyalphabétique ; traité de Vigenère en 1586 **avec la mention explicite de l'antériorité de Bellaso en 1553** — encore une paternité correctement partagée ; Kasiski en 1863 et le principe de sa méthode ; indice de coïncidence ; version commerciale d'Enigma en 1923 et son échec par le prix ; marine allemande en 1926, armée de terre en 1929 ; réflecteur rendant chiffrement et déchiffrement identiques ; environ 1,59 × 10²⁰ réglages ; Rejewski dès 1932 ; bombes polonaises d'octobre 1938 ; transmission du 25 juillet 1939 ; Bletchley Park et l'exploitation des erreurs d'opérateurs ; Diffie et Hellman en 1976 **avec Merkle nommé** ; RSA en 1978, brevet du MIT en 1983, domaine public le 21 septembre 2000 ; factorisation record de 795 bits en décembre 2019 contre des clés de 1024 à 2048 bits ; chiffrement hybride.

Un point mérite d'être relevé comme excellent : la leçon ne se contente pas de dire que Turing a « cassé Enigma ». Elle met les Polonais avant lui, les nomme, date leurs bombes, et fait de Bletchley Park un perfectionnement plutôt qu'un commencement. C'est historiquement juste et c'est rare.

### [GRAVE] Leçon 16 : le cas n = 5 de Fermat attribué à Sophie Germain au lieu de Dirichlet

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/16.json` — section « Fermat et les grandes conjectures », frise de la même section, et explication du quiz 4. **Trois occurrences.**
- **Texte (section)** : « Pendant plus de trois siècles, on n'obtient que des cas particuliers : Euler pour l'exposant 3 en 1770, **Legendre et Sophie Germain pour l'exposant 5 en 1825**, Kummer pour tous les exposants inférieurs à cent à partir de 1847. »
- **Texte (frise)** : « **1825 — Legendre et Sophie Germain** — Le cas de l'exposant 5. »
- **Texte (quiz 4)** : « **Legendre et Sophie Germain l'exposant 5 en 1825** »
- **Problème** : erreur d'attribution. Le cas n = 5 est démontré en 1825 par **Dirichlet et Legendre**. Sophie Germain a bien travaillé sur le dernier théorème de Fermat, mais autrement : son théorème permet de traiter le **premier cas** pour les nombres premiers inférieurs à cent, et c'est Legendre qui en expose le sous-produit — une contribution réelle, importante, et distincte de la preuve de l'exposant 5. Substituer son nom à celui de Dirichlet est le type même de la paternité mal recopiée, et c'est d'autant plus regrettable que le mérite propre de Sophie Germain, effacé au passage, valait la peine d'être dit.
- **Correction proposée** : « Euler pour l'exposant 3, publié en 1770, Dirichlet et Legendre pour l'exposant 5 en 1825 — Sophie Germain ayant de son côté établi un théorème qui règle le premier cas pour tous les nombres premiers inférieurs à cent — puis Kummer, à partir de 1847, pour tous les exposants inférieurs à cent. » Corriger identiquement la frise et l'explication du quiz.
- Source : https://fr.wikipedia.org/wiki/Dernier_th%C3%A9or%C3%A8me_de_Fermat

**Reste de la leçon 16 : sain, et d'un très bon niveau.** Vérifiés : *Éléments* en treize livres vers 300 avant notre ère ; définitions, cinq postulats, neuf notions communes ; répartition exacte des livres (1 à 4 la géométrie plane, 5 et 6 les proportions, 7 à 9 l'arithmétique, 10 les irrationnelles, 11 à 13 les solides) ; cinquième postulat et géométries non euclidiennes ; impression à Venise en 1482 et plus de mille éditions ; énoncé et réciproque de Pythagore ; corde à treize nœuds et ses douze intervalles, avec le triplet 3-4-5 ; Plimpton 322 vers 1800 avant notre ère ; Zhoubi suanjing, Neuf Chapitres, Apastamba ; théorème de Thalès dans sa version française et la confusion internationale avec le théorème de l'angle inscrit — précision utile et rarement donnée ; proposition 2 du livre VI ; proposition 20 du livre IX pour l'infinité des premiers, avec une reconstitution de l'argument d'Euclide **exacte dans son détail logique** (le nombre construit « possède nécessairement un diviseur premier, forcément nouveau », et non « est premier », erreur que commettent neuf vulgarisations sur dix) ; lemme d'Euclide ; al-Farisi et Gauss en 1801 ; note marginale de Fermat vers 1637 ; Kummer à partir de 1847 ; Wiles en juin 1993, erreur décelée, preuve achevée en septembre 1994 avec Richard Taylor et publiée en 1995 ; Shimura-Taniyama-Weil ; Goldbach en 1742 ; Riemann en 1859 ; Perelman en 2003 ; Hales en 1998 ; incomplétude de Gödel.

Les deux sections sur les paternités contestées (Pythagore, Thalès) sont exemplaires : elles datent les témoignages, mesurent l'écart avec la vie du personnage — « plus de cinq cents ans après sa mort » — et distinguent nettement « connaître une relation » et « la démontrer ». C'est le bon réflexe, appliqué ici avec rigueur ; il rend d'autant plus voyante l'erreur d'attribution sur le cas n = 5, commise trois sections plus loin.

### [MOYEN] ✅ Leçon 17 : « Aucun des deux frères ne laissa de descendance en France »

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/17.json` — section « Les frères Montgolfier et la conquête de l'air », dernière phrase.
- **Texte** : « **Aucun des deux frères ne laissa de descendance en France**, mais leur nom est resté attaché à la plus ancienne façon de voler. »
- **Problème** : c'est faux, et c'est une source mal recopiée. Les deux frères ont eu des enfants : Joseph-Michel, marié à Thérèse Filhol, en eut trois — Pierre, mort dans l'année, Marguerite et François-Joseph — et Jacques-Étienne, marié à Justine Bron, eut six filles. Ce que dit la source, c'est autre chose : « il ne reste aujourd'hui en France aucun **Montgolfier** descendant de Joseph ou d'Étienne », c'est-à-dire aucun porteur du **nom** — ce qui, s'agissant d'un homme dont tous les enfants survivants sauf un étaient des filles et d'un autre qui n'eut que des filles, n'a rien d'étonnant et ne dit rien d'une absence de descendance. La phrase transforme une remarque d'onomastique en extinction de lignée.
- **Correction proposée** : soit supprimer la phrase, qui n'apporte rien au propos, soit écrire « Les deux frères eurent des enfants, mais plus aucun Montgolfier descendant d'eux ne porte aujourd'hui ce nom en France ».
- Source : https://fr.wikipedia.org/wiki/Fr%C3%A8res_Montgolfier
- **Fait** : « Aucun des deux frères ne laissa de descendance » corrigé : ils eurent des enfants, mais plus aucun descendant ne porte aujourd'hui le nom Montgolfier en France.

### [MOYEN] ✅ Leçon 17 contre leçon 13 : « premier vol humain » ou « premier vol libre habité » ?

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/17.json`, section 1 et explication du quiz 1 ; contre `heritage/culture-g/data/lecons/sciences-tech/13.json`, section 1 et frise.
- **Texte (leçon 17)** : « le 21 novembre 1783 a lieu, à Paris, **le premier vol humain de l'histoire** » ; et dans le quiz, « **Le premier vol habité** eut lieu deux mois plus tard, le 21 novembre 1783 ».
- **Texte (leçon 13)** : « Le 19 octobre, à Paris, Jean-François Pilâtre de Rozier et Giroud de Villette montent dans un ballon **retenu par des cordes**. Enfin, le 21 novembre 1783, Pilâtre de Rozier et le marquis d'Arlandes réalisent le **premier vol libre habité** ».
- **Problème** : la leçon 13 est juste, la leçon 17 ne l'est pas. Des hommes — Pilâtre de Rozier le premier — étaient déjà montés en ballon en octobre 1783, en vol captif. Le 21 novembre est le premier vol **libre** habité, et c'est précisément ce que la leçon 13 prend soin d'écrire. La leçon 17 supprime l'adjectif qui porte toute l'information, et efface au passage l'étape intermédiaire qu'elle ne mentionne pas. Deux leçons du même domaine, sur le même événement, ne disent donc pas la même chose ; l'apprenant qui les suit toutes deux ne peut pas trancher.
- **Correction proposée** : aligner la leçon 17 sur la 13 — « le 21 novembre 1783 a lieu, à Paris, le premier vol libre habité de l'histoire, un mois après les premières ascensions captives » — et corriger de même l'explication du quiz.
- **Fait** : « premier vol humain » remplacé par « premier vol libre habité », aligné sur la leçon 13, dans la section et l'explication du quiz.

### [MINEUR] ✅ Leçon 17 : « première personne » dans le texte, « seule personne » dans la légende

- **Où** : même leçon, section « Marie Curie et la radioactivité » et légende du visuel `st-marie-curie`.
- **Texte (section)** : « devenant la **première** personne distinguée dans deux disciplines scientifiques différentes »
- **Texte (légende)** : « **seule** personne distinguée par un prix Nobel dans deux disciplines scientifiques différentes »
- **Problème** : les deux affirmations sont exactes — elle est la première, et à ce jour la seule, aucun autre lauréat n'ayant été distingué dans deux sciences distinctes (Bardeen a reçu deux fois la physique, Sanger deux fois la chimie, Pauling la chimie et la paix, qui n'est pas une discipline scientifique). Mais le texte et sa légende ne disent pas la même chose à quelques lignes d'intervalle, et « seule » est la mention la plus forte : autant l'assumer partout.
- **Correction proposée** : écrire dans les deux endroits « la première et, à ce jour, la seule personne distinguée par un prix Nobel dans deux disciplines scientifiques différentes ».
- **Fait** : Harmonisé sur « la première et, à ce jour, la seule personne... » dans le texte et la légende de la leçon 17.

**Reste de la leçon 17 : la crainte était infondée — c'est l'une des leçons les plus scrupuleuses du corpus sur les paternités.** Loin de simplifier, elle partage systématiquement le mérite. Sur la photographie : « L'invention est donc le fruit d'un travail à deux, même si le procédé commercialisé porte le seul nom de Daguerre. » Sur la carte à puce : « Les Allemands Helmut Gröttrup et Jürgen Dethloff avaient breveté dès 1968 une carte automatisée : la paternité est donc partagée », et le quiz en fait la bonne réponse. Sur le braille : le système est explicitement présenté comme une **reprise transformée** de l'écriture nocturne de Charles Barbier, pas comme une création ex nihilo. Sur le cinéma : la formule retenue est « la première projection **collective payante sur grand écran** », c'est-à-dire exactement la restriction qui rend l'affirmation vraie.

Vérifiés un à un et exacts : dates de naissance et de mort des deux Montgolfier ; essais de novembre 1782 ; 4 juin 1783 à Annonay ; 19 septembre à Versailles ; 21 novembre, neuf kilomètres en vingt-cinq minutes à mille mètres d'altitude ; Daguerre 1787-1851 et le diorama de 1822 avec Bouton ; contact de 1826, contrat du 14 décembre 1829, mort de Niépce en 1833 ; plaque de cuivre argentée, vapeurs d'iode, révélation au mercure, fixation à l'eau salée ; annonce d'Arago le 7 janvier 1839, rente de six mille francs, publication le 19 août 1839 ; Auguste né en 1862 et Louis en 1864 ; brevet du Cinématographe le 13 février 1895 et les griffes commandées par came ; 28 décembre 1895 au Salon indien du Grand Café ; Pasteur né le 27 décembre 1822 à Dole, mort le 28 septembre 1895 à Marnes-la-Coquette, acide tartrique en 1848, Lille en 1854, fermentations de 1857 à 1867, génération spontanée en 1861-1862, pasteurisation en 1863, pébrine de 1865 à 1869, Joseph Meister le 6 juillet 1885, Institut Pasteur en 1888, Académie des sciences en 1862 et Académie française en 1882 ; Marie Curie née le 7 novembre 1867 à Varsovie, mariage en 1895, polonium et radium en 1898, Nobel de physique en 1903 avec la mention que **c'est Pierre qui exigea l'ajout de son nom**, Nobel de chimie en 1911, professeure à la Sorbonne en 1908, petites Curie, refus de breveter, morte le 4 juillet 1934, Panthéon en 1995 ; Braille né le 4 janvier 1809 à Coupvray, mort le 6 janvier 1852, accident à trois ans, institution à dix ans, alphabet publié en 1829, plus de vingt-cinq ans pour s'imposer, Panthéon en 1952 ; Michelin fondée le 28 mai 1889, pneumatique démontable breveté le 18 juin 1891, L'Éclair en 1895, Bibendum en 1898, guide en 1900 ; Moreno le 25 mars 1974, Ugon et le CP8 en 1977 puis le SPOM en 1978, Gröttrup et Dethloff en 1968 avec délivrance en 1982, télécarte en 1983, carte bancaire à puce généralisée à partir de 1992.

---

# PASSE 2 — contenu chargé comme l'application le charge

*(section ajoutée par le troisième relecteur ; rien n'a été retiré de ce qui précède)*

## Méthode

Les deux relecteurs précédents ont lu les fichiers. La passe 2 lit ce que
l'apprenant reçoit. J'ai chargé le module par `contenuDe(module("culture-g"))`,
c'est-à-dire en passant par `src/modules/culture-g/contenu.ts` : fusion des
notions du seed dans les leçons du cahier d'origine (`FUSIONS`), dédoublonnage
automatique, mélange des propositions. Le domaine « Inventions & Technologie »
en sort avec **68 compétences et 647 questions effectivement servies** —
et non 507 comme le comptait la lecture fichier par fichier, parce que les
questions libres du cahier d'origine (57, réparties en trois paliers) et les
quiz des vingt leçons s'y ajoutent.

Ce chargement change trois choses, et chacune produit des constats que la
lecture des fichiers ne pouvait pas donner.

## A. Ce que la fusion fait, et ce qu'elle défait

### [FAUX POSITIF] Le constat « Quatre notions n'ont aucun cours » est à retirer

- **Où** : constat [MOYEN] de la passe 1, « Quatre notions n'ont aucun cours »
  (`st-intelligence-artificielle`, `st2-agriculture-techniques`,
  `st2-informatique-histoire`, `st3-inventions-francaises`).
- **Vérification** : ces quatre slugs sont précisément les quatre entrées de
  `prisma/seed/culture-g/cours/fusions.ts` pour le domaine :
  `st-intelligence-artificielle → cg-sciences-tech-08`,
  `st2-agriculture-techniques → cg-sciences-tech-09`,
  `st2-informatique-histoire → cg-sciences-tech-c02`,
  `st3-inventions-francaises → cg-sciences-tech-17`. Elles n'ont pas de cours
  dans `cours/sciences-tech.ts` parce qu'elles n'existent plus comme notions
  autonomes : leurs dix questions sont versées dans la leçon patrimoniale qui
  traite déjà le sujet, et l'apprenant les rencontre **avec** cette leçon.
  Après chargement, ces quatre compétences comptent quinze questions chacune
  (cinq du quiz de la leçon, dix de la notion) et un cours complet.
- **Conclusion** : le constat est un artefact de la lecture fichier par
  fichier. **Il ne faut pas écrire les quatre cours manquants** ; ce serait
  créer un doublon de la leçon d'accueil. En revanche la recommandation
  incidente du deuxième relecteur (« la leçon 08 est une source toute prête
  pour écrire le cours de `st-intelligence-artificielle` ») tombe pour la même
  raison : c'est déjà son cours.

### [GRAVE] La fusion pose deux fois la même question dans la même compétence

C'est le constat que seul le chargement révèle. Le dédoublonnage de
`contenu.ts` exige, pour écarter un jumeau, soit un recouvrement d'énoncé de
85 % avec une réponse voisine, soit une réponse **rigoureusement identique**
avec 75 % de recouvrement sur les seuls mots longs. Deux paires passent au
travers, et elles se retrouvent **dans la même compétence**, donc dans la même
série d'un même apprenant.

**1. Charles Babbage, deux fois dans `cg-sciences-tech-c02`**

- **Où** : `heritage/culture-g/data/sciences-tech.json` (quiz du cours « De la
  Pascaline à Internet », question 1) et `prisma/seed/culture-g/sciences-tech-2.ts:276`
  (notion `st2-informatique-histoire`), fusionnées dans la même compétence.
- **Texte A** : « Quelle machine Charles Babbage a-t-il conçue à partir de 1834
  sans jamais l'achever ? » → « La machine analytique »
- **Texte B** : « Quelle machine Charles Babbage conçoit-il au XIXe siècle sans
  l'achever ? » → « La machine analytique »
- **Problème** : même fait, même bonne réponse, même formulation à un
  complément de temps près. Recouvrement mesuré : 0,42 — sous le seuil de 0,85
  du filtre, qui les laisse donc toutes les deux. L'apprenant de la compétence
  « De la Pascaline à Internet » répond deux fois « La machine analytique » sur
  quinze questions. C'est le doublon le plus visible du domaine, et aucun des
  deux relecteurs précédents ne pouvait le voir : les deux questions sont dans
  deux fichiers différents, l'un patrimonial, l'autre du seed.
- **Correction proposée** : supprimer la question du seed
  (`sciences-tech-2.ts:276`), le quiz patrimonial étant le plus précis (il date
  1834). La remplacer par une question sur un point de l'histoire de
  l'informatique que la leçon d'accueil traite sans l'interroger — la machine à
  différences, le « moulin » et le « magasin », ou Hollerith et le recensement
  de 1890.

**2. Le test de Turing, deux fois dans `cg-sciences-tech-08`**

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/08.json` (quiz,
  question 1) et `prisma/seed/culture-g/sciences-tech.ts:78` (notion
  `st-intelligence-artificielle`), fusionnées dans la même compétence.
- **Texte A** : « En quoi consiste le test de Turing, proposé en 1950 ? » → « Un
  examinateur dialogue par écrit avec un humain et une machine et tente de les
  distinguer »
- **Texte B** : « Qu'est-ce que le test de Turing ? » → « Une épreuve où une
  machine tente de se faire passer pour un humain dans une conversation »
- **Problème** : même notion, même contenu, réponses synonymes. Le filtre ne
  les rapproche pas parce que les deux bonnes réponses n'ont presque aucun mot
  en commun — elles disent pourtant strictement la même chose. Recouvrement des
  énoncés : 0,40.
- **Correction proposée** : supprimer la question du seed
  (`sciences-tech.ts:78`) et la remplacer par un point que la leçon 08 traite et
  que le quiz n'interroge pas — l'atelier de Dartmouth de 1956, les deux hivers
  de l'IA, ou le fait que le test « ne prétend pas définir la conscience »,
  précision que la leçon prend soin de donner.

### [MOYEN] ⏭️ Deux confirmations et une infirmation sur les doublons de la passe 1

Le chargement permet de trancher lesquels des doublons relevés en passe 1
atteignent réellement l'apprenant.
- **Fait** : Vérifié sur le code : ce constat ne fait que confirmer la persistance de doublons déjà couverts par des constats [GRAVE] (Appert, principe de précaution, horloge atomique — tous les trois toujours présents en l'état, non corrigés à ce jour). N'ayant pas le droit de toucher aux [GRAVE], je n'ai rien modifié ici ; signalé au propriétaire dans mon rapport final.

- **Toujours présents après dédoublonnage** (donc à corriger) : la conserve
  d'Appert (`cg-sciences-tech-17` « Qui met au point la conserve appertisée ? »
  contre `cg-neuf-st2-alimentation-techniques` « Qui met au point la conserve
  stérilisée en 1795 ? », recouvrement 0,50, même réponse) ; le principe de
  précaution (`cg-neuf-st-histoire-sciences` contre
  `cg-neuf-st2-innovation-societe`, recouvrement 0,50) ; l'horloge atomique
  (`cg-neuf-st2-mesure-temps` contre `cg-neuf-st3-instrument-scientifique`,
  recouvrement 0,67) ; l'exosquelette, la commande numérique et la signature
  électronique. Tous survivent.
- **Déjà écarté par le filtre** : le doublon du braille relevé en passe 1
  (`st-inventions-quotidien` contre `st3-inventions-francaises`) n'apparaît
  plus qu'une fois après chargement — dans `cg-sciences-tech-17`, où
  `st3-inventions-francaises` a été versée. **Le constat [GRAVE] « Qui invente
  le braille ? posé deux fois » n'a pas d'effet sur l'apprenant** : le
  dédoublonnage automatique le règle déjà. Il reste vrai au niveau des fichiers,
  il est sans conséquence au niveau du contenu servi. À déclasser en MINEUR, ou
  à traiter comme un simple nettoyage de source.
- **Le four à micro-ondes survit, et sous une forme pire que celle décrite en
  passe 1.** Après chargement, les deux questions sont toujours là :
  `cg-neuf-st-inventions-quotidien` « À quoi le four à micro-ondes doit-il sa
  découverte en 1945 ? » → « Une barre chocolatée fondue près d'un magnétron de
  radar », et `cg-neuf-st2-armement` « Quelle invention civile dérive
  directement des recherches sur le radar ? » → « Le four à micro-ondes ». Ce
  n'est pas seulement un doublon : **c'est une paire inversée**, où l'énoncé de
  chacune contient la réponse de l'autre. Aucun filtre par recouvrement de mots
  ne peut la voir, puisque les deux énoncés n'ont presque aucun mot commun. La
  redite dans les deux cours subsiste également.

### [MOYEN] ⏭️ Doublons entre les questions libres du cahier d'origine et le seed

Ce recouvrement-là n'a été vu par personne, parce qu'il oppose deux sources que
les relecteurs précédents ont lues séparément : les **questions libres**
(`heritage/culture-g/data/sciences-tech.json`, 57 questions réparties en
`cg-libre-sciences-tech-1/2/3`) et les notions du seed. Neuf paires survivent au
dédoublonnage avec la **même bonne réponse** :
- **Fait** : Écarté : la correction proposée suppose soit de modifier le seuil de dédoublonnage applicatif (`src/modules/culture-g/contenu.ts`, hors de mon périmètre de fichiers), soit de supprimer à la main jusqu'à quinze questions du seed au risque de faire passer une compétence `cg-libre-sciences-tech-*` sous le seuil de jouabilité, comme le rapport le signale lui-même. Laissé pour le propriétaire.

| Question libre | Notion du seed | Réponse commune |
|---|---|---|
| « Qui a inventé le World Wide Web au CERN en 1989-1991 ? » | `st-internet-reseaux` « Qui invente le World Wide Web en 1989 ? » | Tim Berners-Lee |
| « Quel mathématicien britannique a formalisé en 1936 un modèle théorique de calcul devenu fondamental en informatique ? » | `st-informatique-fondements` « Quel mathématicien britannique formalise en 1936 un modèle théorique de calcul ? » | Alan Turing |
| « Quels frères ont réalisé le 17 décembre 1903 le premier vol motorisé contrôlé ? » | `st-transports` « Qui réalise en 1903 le premier vol motorisé contrôlé ? » | Les frères Wright |
| « Quelle mission a permis aux premiers hommes de marcher sur la Lune en juillet 1969 ? » | `st-espace-exploration` « Quelle mission dépose les premiers hommes sur la Lune en 1969 ? » | Apollo 11 |
| « Quelle station spatiale internationale, assemblée à partir de 1998, est occupée en permanence depuis l'an 2000 ? » | `st-espace-exploration` « Quelle station spatiale internationale est occupée en continu depuis 2000 ? » | L'ISS |
| « Qui a construit en 1886 ce qui est considéré comme la première automobile à moteur à essence ? » | `st-transports` « Qui dépose en 1886 le brevet de la première automobile à moteur à essence ? » | Karl Benz |
| « Quel théorème, énoncé par un magistrat français au XVIIe siècle, n'a été démontré qu'en 1994 ? » | `st-mathematiques` « Quel théorème énoncé en 1637 n'a été démontré qu'en 1994 ? » | Le dernier théorème de Fermat |
| « Quel réseau américain financé par la défense est considéré comme l'ancêtre d'Internet ? » | `st-internet-reseaux` **et** `st2-armement` (« Quel réseau informatique militaire est à l'origine d'internet ? ») | ARPANET |
| « Quel physicien allemand a découvert les rayons X en 1895 ? » | `st-medecine-technologies` « Qui découvre les rayons X en 1895 ? » | Wilhelm Röntgen |

S'y ajoutent, à recouvrement plus faible mais réponse identique : Voyager 1
(libre 2 contre `st-espace-exploration`), Hubble (idem), Bell et le brevet de
1876 (libre 1 contre `st2-communication-histoire`), Pasteur et le vaccin contre
la rage (libre 1 contre `cg-sciences-tech-17`), la loi de Moore (`cg-sciences-tech-c02`
contre libre 2) et les *Éléments* d'Euclide (`cg-sciences-tech-c03` contre
`cg-sciences-tech-16`).

- **Problème** : l'ARPANET est posé **trois fois** dans le domaine, la
  conquête spatiale deux fois par question, Berners-Lee deux fois. Le filtre
  laisse passer parce qu'il compare des ensembles de mots et que la formulation
  du cahier d'origine est plus longue et plus circonstanciée que celle du seed
  — c'est justement cette différence de style qui fait chuter le recouvrement
  sous 0,85 alors que le fait interrogé est identique.
- **Correction proposée** : ce n'est pas un problème de contenu mais de règle.
  Quinze paires, ce n'est pas quinze arbitrages : c'est un seuil mal calibré.
  Soit abaisser le seuil de recouvrement à 0,55 **lorsque la bonne réponse
  normalisée est identique** (les six paires du bas du tableau y passeraient
  aussi), soit trancher à la main les quinze en supprimant à chaque fois la
  version du seed, la question libre du cahier d'origine étant plus précise
  dans tous les cas examinés (elle date, elle situe, elle nomme le lieu).
  **Attention** : la seconde option ne peut pas se faire sans mesurer l'effet
  sur les trois compétences `cg-libre-sciences-tech-*`, dont l'une n'a que neuf
  questions et tomberait sous le seuil de jouabilité si l'arbitrage allait dans
  l'autre sens.

## B. Les astuces qui donnent la réponse

L'astuce (`tip`) d'une compétence est un texte unique, servi à deux endroits :
dans `Catalogue.tsx:193`, sur la fiche de la notion — **consultable avant toute
question** — et dans `Serie.tsx:199`, dans le panneau de correction, après
chaque réponse. Dans les deux cas elle précède les questions suivantes de la
même compétence. Une astuce qui contient la réponse littérale d'une de ses dix
questions la rend gratuite.

J'ai croisé chaque astuce des quarante-cinq notions du domaine avec les bonnes
réponses de ses propres questions. **Quatorze notions sont concernées, soit
près d'une sur trois** — la même proportion que dans les autres domaines. Les
plus nettes :

### [GRAVE] Astuces qui contiennent mot pour mot la bonne réponse

- **`st-internet-reseaux`** — astuce : « Internet est le réseau ; le Web n'est
  qu'un des services qui circulent dessus. » Question 1 : « Quelle différence y
  a-t-il entre Internet et le Web ? » → bonne réponse « Internet est le réseau,
  le Web un service qui l'utilise ». **L'astuce est la réponse, à trois mots
  près.** C'est la première question de la notion et la première phrase de la
  fiche : le cas le plus franc du domaine.
- **`st3-cryptographie`** — astuce : « La sécurité d'un chiffrement doit
  reposer sur la clé, jamais sur le secret de l'algorithme. » Question : « Qu'est-ce
  que le principe de Kerckhoffs ? » → « La sécurité doit reposer sur la clé,
  l'algorithme pouvant être public ».
- **`st2-brevets-innovation`** — astuce : « Un brevet échange un monopole
  temporaire contre la publication de l'invention. » Question : « Que confère un
  brevet à son titulaire ? » → « Un monopole d'exploitation temporaire en
  échange de la publication ».
- **`st2-espace-technologies`** — astuce : « Mettre un satellite en orbite exige
  surtout de la vitesse horizontale, pas de l'altitude. » Question : « Que
  faut-il principalement pour mettre un objet en orbite ? » → « Une très grande
  vitesse horizontale ».
- **`st2-robotique`** — astuce : « Les tâches faciles pour un humain sont
  souvent les plus difficiles pour un robot. » Question : « Qu'est-ce que le
  paradoxe de Moravec ? » → « Les tâches sensorimotrices simples pour l'humain
  sont difficiles pour les machines ».
- **`st-transports`** — astuce : « Le chemin de fer a imposé l'heure unifiée :
  avant lui, chaque ville vivait à son heure solaire. » Question : « Quelle
  innovation le chemin de fer impose-t-il à la mesure du temps ? » → « Une heure
  unifiée sur un même réseau ».

### [MOYEN] ✅ Astuces qui livrent le nom propre ou le chiffre attendu

Ici l'astuce ne reformule pas la réponse, elle en donne le seul élément
discriminant — ce qui suffit dans un QCM.
- **Fait** : Deux astuces (câble transatlantique, eau potable perdue) donnaient encore littéralement la réponse chiffrée : reformulées sans livrer le chiffre. Les quatre autres citées (espace, textile, génome, recherche en France) étaient déjà corrigées par un travail antérieur à cette relecture.

- **`st-espace-exploration`** — astuce : « Aucune sonde n'a quitté le système
  solaire au sens gravitationnel : **Voyager 1** est seulement sorti de
  l'héliosphère. » Question : « Quelle sonde lancée en 1977 est l'objet humain le
  plus éloigné de la Terre ? » → « Voyager 1 ».
- **`st2-textile-industrie`** — astuce : « **Le métier Jacquard** a introduit la
  programmation par cartes perforées avant l'informatique. » Question : « Quel
  métier de 1801 utilise des cartes perforées ? » → « Le métier Jacquard ». La
  question ne demande rien d'autre que le mot déjà écrit dans l'astuce.
- **`st2-medecine-innovations`** — astuce : « Le séquençage d'un génome humain
  coûtait des milliards **en 2003** ; il se compte aujourd'hui en centaines
  d'euros. » Question : « Quand le séquençage du génome humain a-t-il été déclaré
  achevé ? » → « En 2003 ».
- **`st2-communication-histoire`** — astuce : « Le premier câble télégraphique
  transatlantique a fonctionné **en 1858, quelques semaines seulement**. »
  Question : « Quand le premier câble télégraphique transatlantique
  fonctionne-t-il ? » → « En 1858, brièvement ».
- **`st3-innovation-france`** — astuce : « La France investit environ **deux
  virgule deux pour cent** de son PIB dans la recherche. » Question : « Quelle
  part de son PIB la France consacre-t-elle à la recherche ? » → « Environ deux
  virgule deux pour cent ».
- **`st3-eau-technologies`** — astuce : « Environ **un litre d'eau potable sur
  cinq** est perdu dans les réseaux français. » Question : « Quelle part de l'eau
  potable est perdue dans les réseaux français ? » → « Environ un cinquième ».

**Correction proposée, valable pour les douze** : l'astuce doit donner la clé de
lecture, pas la réponse. Le patron qui marche ailleurs dans le corpus est celui
de `st-informatique-fondements` (« Un ordinateur ne calcule qu'avec deux états ;
toute l'informatique en découle. ») : il oriente sans rien livrer. Concrètement,
pour les six cas les plus francs : remplacer l'astuce de `st-internet-reseaux`
par « Le réseau et les services qu'il transporte ne sont pas la même chose —
c'est la distinction à tenir dans toute la notion. » ; celle de
`st2-textile-industrie` par « Le textile a inventé la commande par carte
perforée un siècle et demi avant l'ordinateur. » ; celle de
`st3-innovation-france` par « La France investit dans la recherche un peu moins
que l'objectif européen de trois pour cent. » ; celle de
`st2-medecine-innovations` par « Le coût du séquençage d'un génome a chuté d'un
facteur plusieurs millions en vingt ans. » ; celle de `st3-cryptographie` par
« Un bon chiffrement reste sûr même si l'ennemi connaît l'algorithme. » ; celle
de `st-espace-exploration` par « "Quitter le système solaire" veut dire deux
choses très différentes selon qu'on parle de l'héliosphère ou de la gravité. »

**Trois faux positifs écartés après lecture**, pour que personne ne les
re-signale : `st-mathematiques` (l'astuce parle de conjecture en général, la
réponse est « la conjecture de Poincaré » — le mot commun ne livre rien) ;
`st2-mesure-temps` (astuce sur l'horloge à balancier, réponse « une horloge à
eau » : les mots se recoupent, le sens non) ; `st-medecine-technologies`
(recoupement nul après lecture).


## C. Les paires inversées — la catégorie que rien ne détecte

Une fois le contenu chargé, un troisième défaut apparaît, que ni la lecture des
fichiers ni le dédoublonnage de l'application ne peuvent voir : **deux questions
dont l'énoncé de l'une contient la bonne réponse de l'autre**. Les deux énoncés
n'ont presque aucun mot en commun, donc le recouvrement est nul et le filtre les
laisse passer ; mais pour l'apprenant, répondre à l'une, c'est avoir l'autre.

### [GRAVE] Deux paires inversées à l'intérieur d'une même compétence

**1. Haber-Bosch, dans `cg-sciences-tech-09`**

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/09.json` (quiz) et
  `prisma/seed/culture-g/sciences-tech-2.ts`, notion `st2-agriculture-techniques`,
  fusionnées dans la même compétence par `FUSIONS`.
- **Texte A** : « Quel procédé industriel permet de fixer l'azote de l'air pour
  les engrais ? » → « Le procédé Haber-Bosch »
- **Texte B** : « Que permet le procédé Haber-Bosch, mis au point au début du
  XXe siècle ? » → « Fabriquer de l'ammoniac à partir de l'azote de l'air, base
  des engrais azotés »
- **Problème** : l'énoncé de B nomme la réponse de A ; la réponse de B est
  presque mot pour mot l'énoncé de A (« fixer l'azote de l'air pour les
  engrais » / « à partir de l'azote de l'air, base des engrais azotés »). Les
  deux sont dans la même compétence de quinze questions. Celui qui a répondu à
  l'une répond à l'autre sans réfléchir, et le second item n'enseigne rien.
- **Correction proposée** : supprimer la question du seed (celle qui demande
  seulement le nom du procédé) et la remplacer par un point que la leçon 09
  développe et n'interroge pas — le rôle de Robert Le Rossignol aux côtés de
  Haber, l'usine d'Oppau et ses trente tonnes par jour dès 1913, ou l'usage
  explosif du même azote fixé dès la Première Guerre mondiale, qui est la morale
  de la section.

**2. Pasteur et la rage, dans `cg-sciences-tech-17`**

- **Où** : `heritage/culture-g/data/lecons/sciences-tech/17.json` (quiz) et
  `prisma/seed/culture-g/sciences-tech-3.ts`, notion `st3-inventions-francaises`,
  fusionnées dans la même compétence.
- **Texte A** : « Qui met au point le premier vaccin contre la rage ? » → « Louis
  Pasteur »
- **Texte B** : « Quelle découverte de Louis Pasteur date du 6 juillet 1885 ? » →
  « la première vaccination efficace contre la rage, sur Joseph Meister »
- **Problème** : réciprocité parfaite. Chaque énoncé donne la réponse de
  l'autre, dans la même compétence. Et la même question est **encore** posée une
  troisième fois dans le domaine, en question libre : `cg-libre-sciences-tech-1`
  « Qui a mis au point en 1885 le vaccin contre la rage ? » → « Louis Pasteur ».
  **Trois items pour un seul fait.**
- **Correction proposée** : ne garder que la question patrimoniale du quiz de la
  leçon 17 (la plus riche : elle date au jour et nomme Joseph Meister).
  Supprimer celle de `st3-inventions-francaises` et celle des questions libres.

### [MOYEN] ✅ Paires inversées entre compétences

Elles sont moins graves — l'apprenant ne les rencontre pas dans la même série —
mais elles vident la seconde question de sa substance pour qui a fait la
première. Toutes ont été vérifiées sur le contenu chargé :
- **Fait** : Les trois réponses données pour l'apport technique des Wright se contredisaient sur le fond : harmonisées sur « le pilotage sur trois axes, associant gouverne de direction et gauchissement des ailes » dans les trois fichiers concernés. Les autres doublons cités (Watt, Babbage, nombre premier, courant alternatif, pénicilline, Marie Curie, lunette astronomique) laissés en l'état : leur suppression toucherait au dédoublonnage applicatif et à la taille de compétences entières, jugé hors de portée d'une correction ponctuelle.

- **James Watt et le condenseur séparé, quatre fois.**
  `cg-neuf-st-transports` « Qui met au point une machine à vapeur efficace au
  XVIIIe siècle ? » → « James Watt » ; `cg-libre-sciences-tech-2` « Qui a
  perfectionné la machine à vapeur en y ajoutant un condenseur séparé en 1769 ? »
  → « James Watt » ; `cg-sciences-tech-c01` « Quel élément clé James Watt a-t-il
  ajouté à la machine à vapeur en 1769 ? » → « Un condenseur séparé » ;
  `cg-sciences-tech-04` « Quelle amélioration décisive James Watt apporte-t-il à
  la machine à vapeur de Newcomen ? » → « Il ajoute un condenseur séparé… ».
  Deux questions demandent le nom, deux demandent l'invention, et chacune donne
  la réponse des deux autres. C'est le fait le plus redondant du domaine.
- **Les frères Wright et le gauchissement, six items.** Deux questions demandent
  qui a volé en 1903 (`cg-libre-sciences-tech-1`, `cg-neuf-st-transports`),
  trois demandent leur apport technique (`cg-sciences-tech-c01`, `-02`, `-13`) —
  et ces trois-là donnent trois réponses différentes pour la même question :
  « Le gauchissement des ailes », « La maîtrise du contrôle latéral grâce au
  gauchissement de l'aile », « Le pilotage sur trois axes, associant gouverne de
  direction et gauchissement des ailes ». La troisième est la plus juste ; les
  deux premières réduisent à un axe ce que la leçon 13 présente correctement
  comme un système à trois axes. **Ce n'est donc pas seulement une redite : la
  compétence `cg-sciences-tech-13` contredit les deux autres sur le fond.**
- **Babbage, trois items** : les deux doublons déjà signalés dans
  `cg-sciences-tech-c02`, plus `cg-libre-sciences-tech-2` « Quel mathématicien
  britannique a conçu au XIXe siècle la "machine analytique" ? » → « Charles
  Babbage », dont l'énoncé donne la réponse des deux autres.
- **Le nombre premier, deux fois avec la même définition.**
  `cg-libre-sciences-tech-1` « Comment appelle-t-on un nombre entier supérieur à
  1 divisible uniquement par 1 et par lui-même ? » → « Un nombre premier » ;
  `cg-neuf-st-mathematiques` « Qu'est-ce qu'un nombre premier ? » → « Un entier
  supérieur à un divisible seulement par un et par lui-même ». C'est
  littéralement la même phrase, une fois en question et une fois en réponse.
- **Le courant alternatif** : `cg-libre-sciences-tech-2` demande quel système
  l'a emporté ; `cg-sciences-tech-c01` et `cg-sciences-tech-04` demandent tous
  deux pourquoi — soit deux fois la même question sur le transformateur, dans
  deux compétences.
- **La pénicilline** : `cg-libre-sciences-tech-1` et
  `cg-neuf-st-inventions-quotidien` demandent la même chose (Fleming, 1928,
  moisissure) ; `cg-sciences-tech-03` demande ensuite qui l'a purifiée, ce qui
  est le seul des trois items à apprendre quelque chose.
- **Marie Curie et les deux Nobel** : `cg-neuf-st-histoire-sciences` « Quelle
  femme reçoit deux prix Nobel dans deux disciplines différentes ? » → « Marie
  Curie », face à deux questions de `cg-sciences-tech-17` et
  `cg-libre-sciences-tech-2` qui la nomment dans leur énoncé.
- **La lunette astronomique** : `cg-libre-sciences-tech-2` la donne en réponse,
  `cg-sciences-tech-12` et `cg-neuf-st3-optique-instruments` la donnent dans
  leur énoncé.

- **Correction proposée, transversale** : ces vingt-cinq items se réduisent à
  une dizaine sans rien perdre. La règle qui les départage est simple et vaut
  pour tout le domaine : **quand deux questions portent sur le même couple
  inventeur/invention, garder celle qui demande le mécanisme, supprimer celle
  qui demande le nom.** « Qui a inventé X ? » est la question la moins
  instructive du corpus, et c'est celle qui est dupliquée partout. Sur le cas
  Wright, il faut en outre **aligner les trois réponses sur celle de la leçon 13**
  (le pilotage sur trois axes), les deux autres étant incomplètes.

## D. Les corrections de passe 1, relues et vérifiées

La consigne demandait de rouvrir les corrections proposées par les relecteurs
précédents. Je les ai reprises une à une. **Une est fausse, une est à préciser,
une est un faux positif** (déjà traité en A) ; **toutes les autres sont
confirmées**, dont plusieurs sur pièces.

### [CORRECTION FAUSSE] Le lamellé-croisé : la correction proposée est plus fausse que le texte qu'elle corrige

- **Constat d'origine** : [MOYEN] « Le lamellé-croisé : "plusieurs dizaines
  d'étages" dans la question, "la vingtaine" dans le cours », avec pour
  correction proposée « Il permet de construire des immeubles **d'une vingtaine
  d'étages** en bois », au motif que « les plus hauts immeubles en bois
  existants tournent autour de vingt-cinq niveaux ».
- **Vérification** : ce n'est plus exact. Ascent, à Milwaukee, ses vingt-cinq
  niveaux et son record de 2022, a été dépassé : Atlassian Central, à Sydney,
  culmine à cent quatre-vingts mètres pour **trente-neuf niveaux** en structure
  bois-acier, et Neutral Edison, à Milwaukee également, atteint **trente et un
  niveaux** et doit être achevé cette année. « Plusieurs dizaines d'étages »,
  formule du seed, est donc aujourd'hui **exact** ; « une vingtaine », formule
  proposée en correction, serait **faux par défaut**.
- **Conclusion** : ne pas appliquer cette correction. Il reste vrai que la
  question et son cours ne disent pas la même chose — mais c'est le **cours**
  qu'il faut mettre à jour (« dont les plus hauts dépassent aujourd'hui la
  vingtaine de niveaux » → « dont les plus hauts dépassent aujourd'hui la
  trentaine de niveaux »), pas la question. C'est un rappel utile : quand un
  cours et une question divergent sur un chiffre qui bouge, ce n'est pas
  toujours la question qui a tort.
- Source : https://newatlas.com/architecture/atlassian-central-timber-tower-tops-out

### [CORRECTION À PRÉCISER] La production de blé indienne : « quadruple » est un peu court

- **Constat d'origine** : [MOYEN] leçon 09, « × 10 » corrigé en « quadruple ».
- **Vérification** : les séries disponibles donnent 11 millions de tonnes vers
  1960, 20 en 1970, 32 en 1980, une cinquantaine en 1990, 75 en 2000. Le facteur
  sur 1960-1990 est donc compris entre **4,5 et 5** selon la série retenue
  (49,9 Mt pour l'USDA, 55,1 Mt pour le ministère indien en 1990-91), et non
  quatre. Le diagnostic du relecteur — « × 10 est faux sur la période
  annoncée » — est parfaitement juste ; c'est la valeur de remplacement qui est
  légèrement basse.
- **Correction révisée** : « L'Inde multiplie par cinq sa production de blé
  entre 1960 et 1990 », et dans le visuel « × 5 environ — la production de blé
  de l'Inde entre 1960 et 1990 ». Si l'on veut être à l'abri du choix de série :
  « de onze à une cinquantaine de millions de tonnes entre 1960 et 1990 »,
  formulation qui donne les deux bornes et ne dépend d'aucun arrondi.

### Corrections vérifiées et confirmées

- **L'ESA à vingt-trois États membres** : confirmé. La Slovénie est devenue le
  vingt-troisième État membre le 1er janvier 2025, après signature de l'accord
  d'adhésion le 18 juin 2024. Le chiffre du seed (vingt-deux) est bien périmé.
  Source : https://www.esa.int/About_Us/Corporate_news/Slovenia_becomes_23rd_ESA_Member_State
- **Thimonnier et le point de chaînette** : confirmé, et sur pièces. Le brevet
  du 17 avril 1830 porte sur une machine en bois qui coud « au point de
  chaînette, à l'aide d'un crochet », à deux cents points par minute ; les
  sources françaises précisent que « ne réalisant que le point de chaînette,
  elle ne connut pas de développement industriel étendu ». La correction du
  relecteur — reformuler l'énoncé en « la première machine à coudre
  industrielle, au point de chaînette » — est la bonne, et le constat de
  paternité fausse tient.
  Source : https://www.universalis.fr/encyclopedie/machine-a-coudre-de-thimonnier/
- **La première horloge atomique, une seconde sur trois cents ans** : confirmé,
  et l'arbitrage laissé ouvert par le deuxième relecteur peut être tranché en
  faveur de la valeur institutionnelle. Le NPL, qui a construit l'appareil,
  écrit : « By 1955, Essen and Parry had developed a clock to provide an
  accuracy of 1 second in 300 years. » La leçon 11 (« une seconde près sur
  trente ans ») est donc bien fausse d'un facteur dix, et il faut corriger la
  section **et** la frise.
  Source : https://www.npl.co.uk/about-us/history/famous/louis-essen
- **Loi de Moore, Bertha Benz 1888, Kilby 1958 / Noyce 1959, Wright 260 mètres,
  Airbus fondé à deux puis rejoint par l'Espagne en 1972 et le Royaume-Uni en
  1979, A300 en service le 23 mai 1974, Gutenberg et ses deux prêts de huit
  cents florins, Dirichlet et Legendre pour l'exposant 5, Perceptrons de Minsky
  et Papert en 1969, loi du minimum de Sprengel, magnétite au IVe siècle avant
  notre ère, Élisabeth Thible, nœud 130 nanomètres en 2002, MD5 et SHA-1 cassés,
  pont de Brooklyn à 486 mètres, descendance des Montgolfier, premier vol
  **libre** habité du 21 novembre 1783, Marie Curie « première et seule »** :
  tous vérifiés, tous confirmés. Aucune de ces corrections n'appelle de reprise.

### [GRAVE] Le patron « seul » est plus étendu et plus fiable que la passe 1 ne le disait

- **Constat d'origine** : [MOYEN] « Distracteurs rendus faux par un "seul"
  ajouté après coup », avec une dizaine d'exemples et la remarque que « la bonne
  réponse est toujours celle sans "seul" ».
- **Mesure sur le contenu chargé** : le patron ne compte pas dix occurrences
  mais **vingt-sept**, réparties dans **dix-neuf compétences sur quarante-cinq**,
  et il n'admet **aucune exception** : sur les vingt-sept questions dont un
  choix se termine par l'adverbe « seul » ou « seule », la bonne réponse ne le
  porte jamais. (Cinq autres questions contiennent le mot « seul » dans leur
  bonne réponse — « d'un seul côté », « d'une seule manière », « réparer seul » —
  mais ce sont des emplois ordinaires, immédiatement distinguables du suffixe
  correctif.)
- **Pourquoi c'est plus grave qu'un défaut de style** : le mélange des
  propositions (`melangerPropositions`, appliqué dans `contenuDe`) neutralise
  tous les indices de position, mais il ne peut rien contre un indice porté par
  le texte lui-même. Un apprenant qui repère le patron — et il le repérera,
  vingt-sept fois — gagne quatre pour cent du domaine sans rien savoir. C'est,
  en volume, le plus gros défaut de qualité des QCM du domaine.
- **Correction proposée** : traiter les vingt-sept d'un bloc, et non une à une.
  Le remède n'est pas de retirer l'adverbe (le distracteur redeviendrait vrai)
  mais de changer de distracteur. Trois exemples : « Le procédé Ostwald seul » →
  « Le procédé Frasch » (qui ne fixe pas l'azote) ; « Galilée seul » → « Robert
  Hooke » (le nom est déjà dans la liste : mettre « Jean Picard ») ; « Charles
  Hall seul » → « Alfred Nobel ». La règle : un distracteur doit être faux parce
  qu'il désigne autre chose, jamais parce qu'on lui a ajouté une restriction.

## E. La leçon 17 relue une fois chargée : la moitié qui défait l'autre

Le brief signalait la leçon 17 comme la plus exposée au risque de paternité
simplifiée. Les deux relecteurs précédents l'ont lue et l'ont trouvée
exemplaire — **et ils ont raison sur la leçon**. Mais une fois le contenu
chargé, la compétence `cg-sciences-tech-17` ne compte pas cinq questions : elle
en compte **quinze**, parce que la notion `st3-inventions-francaises` y est
versée par `FUSIONS`. Et les dix questions ajoutées disent le contraire de la
leçon d'accueil.

Les cinq questions patrimoniales sont formulées ainsi : « Quel **rôle** Nicéphore
Niépce a-t-il joué… », « **Que peut-on dire de la paternité** de la carte à
puce… », « **Pour quelle raison** Marie Curie… ». Les dix questions du seed sont
toutes bâties sur le même moule : « **Qui invente** le braille ? », « Qui invente
le stéthoscope ? », « Qui invente la machine à coudre… ? », « Qui met au point la
carte à puce ? », neuf fois sur dix suivies d'une explication d'une ligne. C'est
la forme de question que la leçon existe précisément pour nuancer.

### [GRAVE] La carte à puce : la compétence enseigne à la fois la paternité partagée et la paternité unique

- **Où** : `cg-sciences-tech-17`, questions 5 et 14 — c'est-à-dire
  `heritage/culture-g/data/lecons/sciences-tech/17.json` (quiz 5) et
  `prisma/seed/culture-g/sciences-tech-3.ts` (`st3-inventions-francaises`).
- **Texte (question 5)** : « Que peut-on dire de la paternité de la carte à
  puce ? » → « **elle est partagée** : Roland Moreno dépose un brevet en 1974,
  mais Gröttrup et Dethloff en avaient déposé un dès 1968 », avec une
  explication qui ajoute Michel Ugon, le CP8 de 1977 et le SPOM de 1978, et
  conclut : « La paternité est donc partagée entre plusieurs équipes. »
- **Texte (question 14)** : « Qui met au point la carte à puce ? » → « **Roland
  Moreno** », explication « Son brevet de 1974 a été à l'origine d'une industrie
  mondiale. »
- **Problème** : dans la même compétence, à neuf questions d'intervalle,
  l'apprenant apprend d'abord que la paternité est partagée entre au moins trois
  équipes, puis qu'elle revient à Roland Moreno. La seconde question est
  exactement l'erreur que la première enseigne à ne pas commettre. S'y ajoute le
  défaut mécanique déjà décrit : l'énoncé de la question 5 **nomme Roland
  Moreno**, donc donne la réponse de la question 14.
- **Correction proposée** : supprimer la question 14. Si l'on tient à garder un
  item du seed sur ce sujet, le reformuler en question de mécanisme, à laquelle
  la leçon répond : « Qu'apporte le brevet SPOM de Michel Ugon, déposé en
  1978 ? » → « La réunion du processeur et de la mémoire sur une même puce ».

### [MOYEN] ✅ Pasteur : la même simplification, deux fois

- **Où** : `cg-sciences-tech-17`, questions 3 et 10.
- **Texte (question 10, du seed)** : « Qui met au point le premier vaccin contre
  la rage ? » → « Louis Pasteur », explication « Il l'a administré en 1885 à un
  enfant mordu, **sans être médecin lui-même**. »
- **Problème** : l'explication se contredit en une phrase. Pasteur n'a pas
  administré l'injection : n'étant pas médecin, il ne pouvait pas le faire, et
  ce sont les docteurs Jacques-Joseph Grancher et Alfred Vulpian qui ont
  pratiqué les inoculations sur Joseph Meister sous sa direction. La mention
  « sans être médecin lui-même » est vraie et c'est justement la raison pour
  laquelle « il l'a administré » est faux. (L'explication patrimoniale de la
  question 3 commet la même simplification : « Louis Pasteur administra à Joseph
  Meister… ». Elle est plus excusable, la formule étant consacrée.)
- **Correction proposée** : « Le vaccin fut inoculé le 6 juillet 1885 au jeune
  Joseph Meister par le docteur Grancher, sous la direction de Pasteur, qui
  était chimiste et non médecin. » Et, la question 3 posant déjà le même fait de
  façon plus riche, supprimer purement et simplement la question 10.
- **Fait** : Explication corrigée : c'est le docteur Grancher qui a administré le vaccin en 1885, sous la direction de Pasteur, non médecin lui-même.

### [MOYEN] ✅ « L'État français a acheté le brevet en 1839 pour l'offrir au monde »

- **Où** : `cg-sciences-tech-17`, question 7 (du seed), explication.
- **Problème** : deux inexactitudes dans une phrase de douze mots.
  1. L'État n'a pas *acheté un brevet* : la loi du 7 août 1839 institue des
     **rentes viagères** — quatre mille francs à Isidore Niépce, six mille à
     Daguerre (quatre mille plus deux mille au titre du diorama) — en échange de
     la divulgation du procédé, qui n'a jamais été breveté en France.
  2. « Pour l'offrir au monde » est la formule officielle, mais elle est
     incomplète : Daguerre avait fait breveter le procédé en Angleterre cinq
     jours avant l'annonce publique d'Arago du 19 août 1839. Le don au monde
     excluait donc précisément le pays où il y avait le plus à gagner.
- **Aggravant** : l'explication de la question 2, patrimoniale, est correcte et
  détaillée sur les mêmes faits (le contrat du 14 décembre 1829, la mort de
  Niépce en 1833, l'annonce du 7 janvier 1839, la publication du 19 août). La
  question 7 rejoue donc la même matière en moins bien, dans la même compétence.
- **Correction proposée** : supprimer la question 7, redondante avec la question
  2 ; ou, si on la garde, « En échange d'une rente viagère votée en août 1839,
  la France rendit le procédé public — sauf en Angleterre, où Daguerre l'avait
  breveté quelques jours plus tôt. »
- **Fait** : Explication réécrite : rente viagère votée en 1839, en mentionnant le brevet anglais antérieur de Daguerre.

### [MOYEN] ✅ Le Minitel : neuf millions de terminaux « dès les années 1980 »

- **Où** : `cg-sciences-tech-17`, question 15 (du seed), explication.
- **Texte** : « Neuf millions de terminaux et des milliers de services **dès les
  années 1980**. »
- **Problème** : le chiffre de neuf millions est celui du sommet du parc,
  atteint dans les années 1990. À la fin des années 1980, le parc est de l'ordre
  de cinq millions de terminaux. « Dès les années 1980 » avance le pic d'une
  décennie. C'est le défaut « exact mais mal daté » déjà relevé ailleurs dans le
  domaine.
- **Correction proposée** : « Cinq millions de terminaux à la fin des années
  1980, neuf millions au sommet du parc dans les années 1990, et des milliers de
  services. »
- **Fait** : Chiffres échelonnés : cinq millions de terminaux à la fin des années 1980, neuf millions au sommet du parc dans les années 1990.

### [MOYEN] ✅ Six questions du seed se répondent sans rien savoir

Dans les dix questions de `st3-inventions-francaises`, la bonne réponse est
souvent la seule à nommer une personne réelle, ou la seule à ne pas être
disqualifiée par le mot « seul ». Cumulés, les deux patrons rendent la moitié de
la notion gratuite.
- **Fait** : Distracteurs de la question braille (st3-inventions-francaises) rendus informatifs (Valentin Haüy, William Moon, tous deux nommés) ; le sous-point sur la machine à coudre était déjà réglé par la correction du [GRAVE] Thimonnier ; les quatre items relevant du patron « seul » restent non touchés, ce patron étant désormais scope [GRAVE].

- **« Qui invente le braille ? »** → choix : « Louis Braille, en France », « Un
  imprimeur anglais », « Un médecin allemand », « Un instituteur américain ». Un
  seul choix nomme quelqu'un, et il porte le nom du système. Il n'y a rien à
  savoir.
- **« Qui invente la machine à coudre à point noué en France ? »** → la bonne
  réponse est la seule qui ne soit pas un simple nom (« Barthélemy Thimonnier
  **pour la première machine industrielle** »). La rallonge qui trahit la
  réponse est ici la même que celle qui rend l'énoncé faux (constat [GRAVE] de
  la passe 1).
- **Quatre autres** (« Hippolyte Bayard seul », « Émile Roux seul », « Charles
  Hall seul », « Michel Ugon seul », « Le réseau Transpac seul ») relèvent du
  patron « seul » traité en D.
- **Correction proposée** : cette notion est celle qu'il faut reprendre en
  priorité dans tout le domaine. Elle est intégralement redondante avec sa
  leçon d'accueil, elle la contredit deux fois, et six de ses dix questions se
  répondent sans connaissance. Le plus simple est de la **supprimer** : la leçon
  17 couvre déjà les Montgolfier, Niépce et Daguerre, Pasteur, Marie Curie, le
  braille, le pneumatique Michelin et la carte à puce, avec la nuance en plus.
  Si l'on veut conserver dix questions sur les inventions françaises, il faut
  les écrire sur ce que la leçon développe et n'interroge pas — le pneumatique
  démontable du 18 juin 1891, L'Éclair de 1895, Bibendum en 1898, le guide de
  1900, la télécarte de 1983 — et non redemander « qui a inventé quoi ».

### Ce que la leçon 17 elle-même conserve d'exemplaire

Rien de ce que le deuxième relecteur en a dit n'est démenti : la leçon écrit
« L'invention est donc le fruit d'un travail à deux, même si le procédé
commercialisé porte le seul nom de Daguerre », « La paternité est donc partagée
entre plusieurs équipes », et présente le braille comme une reprise transformée
du code de Charles Barbier. **Le problème n'est pas dans la leçon : il est dans
ce qu'on lui a versé.**

## F. Constats nouveaux de la relecture du seed en passe 2

J'ai relu `sciences-tech.ts` et les notions de `sciences-tech-2.ts` que la passe
1 avait le moins citées. La plupart de ce que j'y ai vérifié est juste — le
détail est en fin de section. Quatre points nouveaux :

### [MOYEN] ✅ « Qui invente le braille ? » : un distracteur qui est en partie la bonne réponse

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-inventions-quotidien`.
- **Texte** : « Qui invente le braille, système de lecture tactile ? » → choix
  « Louis Braille », « Valentin Haüy », « **Charles Barbier** », « Helen
  Keller ».
- **Problème** : deux défauts opposés dans la même liste. D'un côté **Helen
  Keller** est un distracteur invraisemblable — née en 1880, sourde et aveugle,
  américaine, elle n'a jamais rien inventé de tel ; il n'écarte personne. De
  l'autre **Charles Barbier** est le distracteur trop vrai : c'est lui qui a
  conçu l'écriture nocturne dont le braille dérive, et le dépôt le dit
  lui-même — l'explication de la question jumelle de `st3-inventions-francaises`
  écrit « Il s'est inspiré d'un code militaire nocturne conçu par Charles
  Barbier », et la leçon 17 présente le braille comme « une reprise
  transformée » de ce code. Un apprenant qui a lu la leçon peut légitimement
  hésiter, et son hésitation vient de ce qu'il en sait plus, non moins.
- **Correction proposée** : remplacer « Helen Keller » par un nom plausible et
  franchement faux (Pierre Foucault, Maurice de la Sizeranne), et désamorcer
  Barbier dans l'explication : « Louis Braille, à quinze ans, en simplifiant à
  six points le code militaire nocturne de Charles Barbier, qui en comptait
  douze et n'avait pas été conçu pour la lecture. »
- **Fait** : Dans sciences-tech.ts : « Helen Keller » remplacée par « Pierre Foucault » (distracteur suggéré par le rapport), explication réécrite pour neutraliser Charles Barbier comme distracteur trop proche de la vérité.

### [MINEUR] ✅ Le Kodak de 1888 n'avait pas encore de pellicule souple

- **Où** : `prisma/seed/culture-g/sciences-tech.ts` — `st-inventions-quotidien`.
- **Texte** : « Quelle invention de 1888 permet la photographie amateur de
  masse ? » → « L'appareil Kodak **à pellicule souple** ».
- **Problème** : le Kodak n°1 de 1888 est chargé de « stripping film », un
  rouleau de **papier** enduit de gélatine dont l'émulsion est décollée au
  développement. La pellicule souple transparente en nitrocellulose n'arrive
  qu'en **1889** : brevet déposé en avril, production à partir d'août. La bonne
  réponse est donc datée d'un an trop tôt sur le point même qui la caractérise.
- **Correction proposée** : « L'appareil Kodak à film en rouleau », et dans
  l'explication : « George Eastman vendait l'appareil chargé de cent vues sur un
  rouleau de papier ; le client renvoyait le tout pour développement. La
  pellicule transparente en celluloïd suit dès 1889. »
- Source : https://camera-wiki.org/wiki/Kodak_No._1
- **Fait** : « pellicule souple » remplacé par « film en rouleau » ; explication corrigée pour dater la pellicule transparente en celluloïd de 1889.

### [MINEUR] ✅ « Quelle invention de 1928… » : la pénicilline, encore une découverte

Le relecteur de la passe 1 avait signalé que la pénicilline est une découverte
et non une invention. Le chargement montre que le défaut est plus profond : la
question de `st-inventions-quotidien` (« Quelle invention de 1928 est due à une
observation de moisissure sur une boîte de Petri ? » → « La pénicilline ») et
celle de `cg-sciences-tech-03` (« Qui a purifié la pénicilline et permis sa
production en quantité, **après l'observation initiale d'Alexander Fleming en
1928** ? » → « Howard Florey, Ernst Chain et leur équipe d'Oxford ») coexistent
dans le domaine. La seconde emploie le mot juste — « observation » — et enseigne
le vrai contenu ; la première appelle « invention » ce que la seconde appelle
« observation initiale », et en fait le seul fait à retenir. À supprimer plutôt
qu'à corriger : `cg-libre-sciences-tech-1` pose déjà « Quel médicament a été
découvert par Alexander Fleming en 1928 ? ».
- **Fait** : « Quelle invention de 1928... » remplacé par « Quelle découverte de 1928... ».

### [MINEUR] ✅ Le syndrome de Kessler « décrit en 1978 » et le conditionnel

Constat de langue déjà relevé, que je confirme et précise : « Décrit en 1978, il
décrirait un scénario où… ». Outre la répétition du verbe, le conditionnel est
doublement fautif ici — il s'agit d'un scénario prospectif, donc le conditionnel
porterait sur le scénario, pas sur la description. Lire : « Décrit en 1978 par
Donald Kessler, il désigne un scénario où les collisions engendreraient assez de
débris pour en provoquer d'autres, jusqu'à rendre certaines orbites
inutilisables. » Nommer Kessler ajoute en outre l'information que l'énoncé
suppose connue.
- **Fait** : Donald Kessler nommé, répétition du verbe et conditionnel corrigés (« il désigne » plutôt que « il décrirait »).

### Ce que la relecture du seed a vérifié sans rien trouver

Pour que personne ne recommence : dans `st-medecine-technologies`,
`st-mathematiques`, `st-statistiques-donnees`, `st-securite-numerique`,
`st2-robotique` et `st2-espace-technologies`, j'ai contrôlé un à un les faits
datés ou chiffrés, et ils sont exacts. Hounsfield et le Nobel 1979 ; le premier
stimulateur implantable de 1958 et le patient survivant plus de quarante ans
(Arne Larsson, mort en 2001) ; Barnard en 1967 et les dix-huit jours de survie
de Louis Washkansky ; la PCR de Kary Mullis en 1983 ; Lindemann et la
transcendance de pi en 1882 ; les théorèmes de Gödel de 1931 et la fin du
programme de Hilbert ; les sept problèmes du prix du millénaire énoncés en 2000
par l'institut Clay, dont un seul résolu ; la médaille Fields tous les quatre
ans à deux à quatre lauréats de moins de quarante ans ; les six alunissages
habités (11, 12, 14, 15, 16, 17) ; l'ISS à environ quatre cents kilomètres et
quatre-vingt-dix minutes par orbite ; le miroir de Hubble corrigé en 1993 ; le
James Webb lancé fin 2021 et placé à un million et demi de kilomètres ; les
vingt-huit mille kilomètres par heure de l'orbite basse ; les quatre planètes
visitées par Voyager 2 grâce à l'assistance gravitationnelle ; la vallée de
l'étrange de Masahiro Mori en 1970 ; l'ANSSI créée en 2009 ; les trois points de
marge d'erreur pour mille personnes ; le séquençage du génome humain achevé en
2003 après treize ans. **Rien à corriger sur ces soixante et quelques faits.**

---

## Ce que la passe 2 a ajouté (bilan)

La passe 1 avait lu les fichiers. La passe 2 a chargé le contenu et a trouvé six
choses qu'aucune lecture de fichier ne pouvait donner :

1. **Deux doublons francs à l'intérieur d'une même compétence** (Babbage dans
   `cg-sciences-tech-c02`, le test de Turing dans `cg-sciences-tech-08`), nés de
   la fusion entre le cahier d'origine et le seed, et non repérés par le filtre
   automatique.
2. **Deux paires inversées à l'intérieur d'une même compétence** (Haber-Bosch
   dans `cg-sciences-tech-09`, Pasteur et la rage dans `cg-sciences-tech-17`),
   catégorie qu'aucun filtre par recouvrement de mots ne peut détecter, et une
   quinzaine d'autres entre compétences — dont James Watt quatre fois et les
   frères Wright six fois, avec trois réponses différentes à la même question.
3. **Quinze recouvrements entre les questions libres du cahier d'origine et les
   notions du seed**, avec la même bonne réponse, dont ARPANET trois fois. Le
   seuil de dédoublonnage (0,85) est trop haut pour les attraper.
4. **Quatorze astuces sur quarante-cinq qui livrent la réponse** d'une de leurs
   propres questions, dont six mot pour mot — près d'une notion sur trois, la
   même proportion que dans les autres domaines.
5. **Le patron « seul » mesuré** : vingt-sept questions, dix-neuf compétences,
   zéro exception. Trois fois plus étendu que la passe 1 ne le disait, et
   parfaitement fiable pour qui le repère.
6. **La compétence `cg-sciences-tech-17` disséquée** : ses cinq questions
   patrimoniales enseignent la paternité partagée, ses dix questions du seed
   enseignent l'inverse, et elles se contredisent explicitement sur la carte à
   puce. La crainte exprimée dans le brief était fondée — mais la faute n'est
   pas dans la leçon, elle est dans ce qu'on lui a versé.

Et, sur les corrections de la passe 1 : **une est fausse** (le lamellé-croisé,
où la correction proposée serait plus fausse que le texte d'origine), **une est
à réviser** (le facteur cinq et non quatre pour le blé indien), **une est un
faux positif à retirer** (les « quatre notions sans cours »). Toutes les autres
sont confirmées, plusieurs sur pièces (ESA, Thimonnier, Essen et Parry).

## Ce qui est sain (passe 2)

Le mécanisme de chargement lui-même est propre et bien documenté : le mélange
des propositions a lieu en un seul endroit, le dédoublonnage est expliqué avec
les paires qui ont servi à le calibrer, et l'ordre de priorité entre sources
(leçon, puis question libre, puis notion écrite) est le bon. Les défauts relevés
ci-dessus ne viennent pas d'une négligence mais du fait qu'un filtre par
recouvrement de mots ne peut pas voir une question inversée ni une astuce
bavarde. **Aucune question du domaine n'est sans explication**, et aucune
explication ne se contente de recopier sa réponse : sur six cent quarante-sept
questions, c'est remarquable, et cela mérite d'être dit après six sections de
constats. Enfin, les soixante et quelques faits datés que j'ai recontrôlés dans
les notions les moins citées par la passe 1 se sont tous révélés exacts : le
domaine est solide sur le fond, ses défauts sont des défauts de construction.
