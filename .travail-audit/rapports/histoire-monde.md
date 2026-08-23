# Histoire du monde

> ÉTAT : interrompu. Fichiers lus : `prisma/seed/culture-g/histoire-monde.ts`, `histoire-monde-2.ts`, `histoire-monde-3.ts`, `histoire-monde-4.ts` (intégralement), `prisma/seed/culture-g/cours/histoire-monde.ts` (intégralement), `heritage/culture-g/data/histoire-monde.json` (66 questions sur 66, 3 cours **non lus**). Reste à lire : les 3 cours du JSON héritage, et **les 23 leçons** `heritage/culture-g/data/lecons/histoire-monde/01..23.json` (aucune ouverte). **Passe 1 seulement** — la seconde passe n'a pas été faite.

## Ce que j'ai lu

- `prisma/seed/culture-g/histoire-monde.ts` — 13 notions, 130 questions
- `prisma/seed/culture-g/histoire-monde-2.ts` — 21 notions, 200 questions
- `prisma/seed/culture-g/histoire-monde-3.ts` — 20 notions, 197 questions
- `prisma/seed/culture-g/histoire-monde-4.ts` — 22 notions, 215 questions
- **Total seed : 76 notions, 742 questions, toutes lues.**
- `prisma/seed/culture-g/cours/histoire-monde.ts` — 51 cours (≈ 200 sections), tous lus.
- `heritage/culture-g/data/histoire-monde.json` — 66 questions lues ; les 3 cours de ce fichier **n'ont pas été ouverts**.
- `heritage/culture-g/data/lecons/histoire-monde/*.json` — **23 fichiers, aucun lu.**

---

## Constats

### [GRAVE] Le lot 4 est en très large partie une redite des lots 1, 2 et 3

- **Où** : `prisma/seed/culture-g/histoire-monde-4.ts` (tout le fichier), contre `histoire-monde.ts`, `-2.ts`, `-3.ts`
- **Texte** : `hm4-mesopotamie` / `hm2-mesopotamie`, explication identique mot pour mot : « Nos soixante minutes et nos trois cent soixante degrés en descendent directement. »
- **Problème** : ce n'est pas un chevauchement de sujet, c'est une reprise question par question. Recensé au minimum :
  - `hm4-mesopotamie` ↔ `hm2-mesopotamie` (Sargon, Hammurabi, ziggourat d'Ur, bibliothèque d'Assurbanipal à Ninive, Nabuchodonosor, sexagésimal) ;
  - `hm4-egypte-ancienne` ↔ `hm2-egypte-pharaonique` (Narmer, Hatchepsout au XVe s., Qadesh, fin romaine en 30 av.) ;
  - `hm4-chine-imperiale` ↔ `hm2-chine-imperiale` (Qin Shi Huang 221, armée de terre cuite 1974, Han, examens impériaux, Tang, Yuan/Kubilai, Zheng He, Qing/Puyi 1912) — quasi intégral ;
  - `hm4-japon-histoire` ↔ `hm2-japon-histoire` **et** `hm-meiji-japon` (shogun, sakoku, Perry 1853, Meiji 1868, russo-japonaise 1905) ;
  - `hm4-mongols` ↔ `hm2-mongols` **et** `hm-empire-mongol` : **triple** (1206, yassa, Aïn Djalout 1260, Horde d'Or, yam, pax mongolica + peste, Tamerlan) ;
  - `hm4-empire-byzantin` ↔ `hm2-byzance` ; `hm4-monde-musulman` ↔ `hm2-islam-conquetes` (Avicenne, Averroès) ;
  - `hm4-decouvertes` ↔ `hm2-decouvertes` (Magellan, échange colombien, Cortés, Pizarro) ;
  - `hm4-amerique-precolombienne` ↔ `hm2-amerique-latine` (Mayas, quipu, Machu Picchu) — et la question « Quelle cause a le plus contribué à l'effondrement démographique amérindien ? » reprend **les quatre mêmes choix** que celle de `hm2-decouvertes` ;
  - `hm4-afrique-royaumes` ↔ `hm2-afrique-precoloniale` (Mansa Moussa 1324, Aksoum, Kongo, Grand Zimbabwe, Kilwa) ;
  - `hm4-revolutions-atlantiques` ↔ `hm2-etats-unis` + `hm-independances-amerique-latine` (1776, Constitution 1787, Bill of Rights 1791, Bolívar, San Martín/Andes 1817, Brésil 1822) ;
  - `hm4-imperialismes` ↔ `hm2-colonisation` (Berlin 1884-85, Léopold II, Éthiopie/Adoua 1896, Fachoda 1898) ;
  - `hm4-guerre-froide-2` ↔ `hm2-guerre-froide` + `hm-chute-urss` : **triple** (détente/SALT/Helsinki, perestroïka, glasnost, mur 9 nov. 1989, dissolution déc. 1991) ;
  - `hm4-decolonisations` ↔ `hm-decolonisation-afrique` + `hm2-colonisation` + `hm3-decolonisation-conflits` (Bandung, 1960, apartheid, Mandela, Diên Biên Phu) ;
  - `hm4-traite-esclavage` ↔ `hm3-esclavage-abolitions` (Code noir 1685, 1794/1802/1848, Schœlcher, Toussaint/fort de Joux, passage du milieu, 12 millions) ;
  - `hm4-histoire-sciences-monde` ↔ `hm3-histoire-sciences-monde` (Royal Society 1660, Académie des sciences 1666 — questions jumelles) ;
  - `hm4-migrations-histoire` ↔ `hm3-migrations-histoire` (Ellis Island 1892-1954, émigration européenne, convention de Genève 1951, déplacés internes) ;
  - `hm4-monde-contemporain` ↔ `hm-genocide-crimes`, `hm3-droit-international`, `hm-organisations-internationales` (Rwanda 1994 — **4e occurrence** ; CPI 1998 — **3e** ; OMC 1995 ; 11 septembre 2001).
- **Correction proposée** : supprimer le lot 4 en tant que lot, et ne conserver que les notions qui apportent réellement du neuf (`hm4-perse`, `hm4-ottomans`, `hm4-nationalismes`, `hm4-inde-ancienne`, et les seules questions inédites des autres). Un apprenant qui révise le domaine entier rencontre aujourd'hui trois fois « Qui unifie les tribus mongoles en 1206 ? ».

### [GRAVE] Doublons francs à l'intérieur des lots 1 à 3

- **Où** : `histoire-monde.ts` / `histoire-monde-2.ts` / `histoire-monde-3.ts`
- **Texte** : `hm-alexandre` « Quel philosophe fut le précepteur d'Alexandre ? » — `hm2-alexandre-hellenistique` « Qui fut le précepteur d'Alexandre le Grand ? » (mêmes quatre choix). Idem « Quelle bataille de 331 … ? » dans les deux notions.
- **Problème** : `hm-alexandre` et `hm2-alexandre-hellenistique` sont deux notions au même titre à un mot près. Autres doublons relevés :
  - guerres puniques : `hm-carthage-rome` ↔ `hm2-rome-republique` (Hannibal/Alpes/éléphants, Zama/Scipion 202) ;
  - Lagides : `hm-alexandre` ↔ `hm2-egypte-pharaonique` ;
  - Tchernobyl 1986 : `hm-chute-urss` ↔ `hm3-russie-urss` (mêmes distracteurs, dont Kychtym) ;
  - dissolution de l'URSS décembre 1991 : `hm-chute-urss` ↔ `hm2-guerre-froide` ↔ `hm3-russie-urss` ↔ `hm4-guerre-froide-2` (**quatre fois**) ;
  - génocide arménien 1915 : `hm-genocide-crimes` ↔ `hm3-premiere-guerre` (même fourchette « huit cent mille à un million et demi ») ;
  - Nuremberg 1945-1946 : `hm-genocide-crimes` ↔ `hm3-droit-international` ;
  - Rwanda 1994 : `hm-genocide-crimes` ↔ `hm3-afrique-independance` ↔ `hm4-monde-contemporain` ;
  - Cachemire, assassinat de Gandhi, partition : `hm-inde-independance` ↔ `hm2-inde-histoire` ↔ `hm3-inde-pakistan` ;
  - guerre d'Algérie 1954-1962 : `hm-decolonisation-afrique` ↔ `hm2-colonisation` (énoncés quasi identiques) ;
  - colonies portugaises 1975 / révolution des Œillets : `hm-decolonisation-afrique` ↔ `hm3-decolonisation-conflits` ;
  - doctrine Monroe 1823 : `hm-independances-amerique-latine` ↔ `hm2-etats-unis` ; Libertador : `hm-independances-amerique-latine` ↔ `hm2-amerique-latine` ;
  - **phrase réemployée mot pour mot** : « Marchandises vers l'Afrique, captifs vers l'Amérique, denrées coloniales vers l'Europe » — explication de `hm-routes-echanges` et de `hm3-esclavage-abolitions`.
- **Correction proposée** : fusionner `hm-alexandre` et `hm2-alexandre-hellenistique` ; arbitrer un « propriétaire » par fait (Tchernobyl → `hm3-russie-urss` ; Rwanda → `hm-genocide-crimes` ; partition de l'Inde → `hm3-inde-pakistan`) et supprimer ailleurs.

### [GRAVE] Question à deux bonnes réponses : Amritsar et Jallianwala sont le même massacre

- **Où** : `prisma/seed/culture-g/histoire-monde.ts` — `hm-inde-independance`
- **Texte** : « Quel massacre de 1919 marque une rupture avec les Britanniques ? » — `["Amritsar", "Calcutta", "Chauri Chaura", "Jallianwala"]`, bonne = 0.
- **Problème** : Jallianwala Bagh est le jardin d'Amritsar où le massacre a eu lieu ; l'événement est nommé indifféremment « massacre d'Amritsar » ou « massacre de Jallianwala Bagh ». Le distracteur 3 est donc exact lui aussi. Un candidat qui connaît le sujet peut être compté faux.
- **Correction proposée** : remplacer « Jallianwala » par « Chandpur » ou « Lahore ».

### [GRAVE] Erreur de fait dans l'énoncé : les Mau Mau ne sont pas des colons

- **Où** : `prisma/seed/culture-g/histoire-monde.ts` — `hm-decolonisation-afrique`
- **Texte** : « Quel mouvement **de colons kényans** est réprimé dans les années 1950 ? » → « La révolte des Mau Mau ».
- **Problème** : les Mau Mau étaient un mouvement insurrectionnel kikuyu **contre** la colonisation et les colons britanniques. Écrire « mouvement de colons » inverse exactement le sens de l'événement. Le cours de la même notion dit correctement « la révolte des Mau Mau est écrasée dans les années 1950 » : la question contredit son propre cours.
- **Correction proposée** : « Quel mouvement insurrectionnel kényan est réprimé par les Britanniques dans les années 1950 ? »

### [GRAVE] Le cours et la question d'une même notion donnent deux chiffres différents pour la mortalité du passage du milieu

- **Où** : `histoire-monde-2.ts` — `hm2-afrique-precoloniale` (question) et `cours/histoire-monde.ts` — `hm2-afrique-precoloniale`, section « Des États et une catastrophe »
- **Texte** : question — « Environ **un dixième** mourut pendant la traversée. » ; cours — « environ douze millions de personnes […] dont **près de deux millions** moururent pendant la traversée ».
- **Problème** : 2 sur 12, c'est un sixième (≈ 16 %), pas un dixième. Le cours donne l'ordre de grandeur retenu par les historiens (≈ 15 %) ; la question le sous-estime d'un tiers. Et le domaine propose **trois** valeurs pour ce même fait : « environ un dixième » (`hm2-afrique-precoloniale`), « dix à quinze pour cent » (`hm3-esclavage-abolitions`, question), « fréquemment quinze pour cent » (`hm4-traite-esclavage`), le cours de `hm3` disant « de l'ordre de quinze pour cent ».
- **Correction proposée** : aligner partout sur « de l'ordre de quinze pour cent », et corriger l'explication de `hm2-afrique-precoloniale` : « Environ une personne sur sept mourut pendant la traversée. »

### [GRAVE] Trois dates contradictoires pour la fin de l'apartheid

- **Où** : `histoire-monde.ts` `hm-decolonisation-afrique` (question + cours) ; `histoire-monde-3.ts` `hm3-afrique-independance` ; `histoire-monde-4.ts` `hm4-decolonisations` ; `cours/histoire-monde.ts` `hm2-colonisation` section « Le démantèlement » et `hm3-afrique-independance`
- **Texte** : question `hm-decolonisation-afrique` — « Quel régime sud-africain prend fin **en 1994** ? » ; question `hm4-decolonisations` — « Institué en 1948, il **prend fin en 1991**. » ; question `hm3-afrique-independance` — « **En 1991-1994** » ; cours `hm2-colonisation` — « ne prendra fin **qu'en 1991** » ; cours `hm-decolonisation-afrique` — « Il faut attendre **1994** […] pour qu'il prenne fin ».
- **Problème** : le même corpus donne trois réponses à la même question, et deux cours se contredisent frontalement. Un apprenant qui répond « 1991 » sur une notion sera compté faux sur une autre.
- **Correction proposée** : retenir partout la formulation de `hm3` — abrogation des lois de ségrégation en 1991, fin du régime avec les élections d'avril 1994 — et reformuler la question de `hm-decolonisation-afrique` en « Quelle date marque la fin du régime d'apartheid, avec les premières élections multiraciales ? ».

### [MOYEN] Chiffres discordants pour les déplacés de la partition de 1947

- **Où** : `hm-inde-independance` (question + cours) ; `hm2-inde-histoire` ; `hm3-inde-pakistan` ; `hm4-migrations-histoire` ; cours `hm2-inde-histoire` et `hm2-colonisation` ; `heritage/.../histoire-monde.json` q. 51
- **Texte** : « quinze millions de déplacés » (`hm-inde-independance` et héritage) contre « plus de dix millions » (`hm2`, `hm3`, `hm4`, cours `hm2-inde-histoire`, cours `hm2-colonisation`).
- **Problème** : deux chiffres pour un même fait, sur six notions. Les deux sont dans la fourchette des estimations, mais un QCM ne peut pas accepter les deux.
- **Correction proposée** : retenir « entre dix et quinze millions de personnes déplacées » partout, ou trancher sur « plus de dix millions », qui est la formulation majoritaire dans le corpus.

### [MOYEN] Le « miracle économique japonais » ne se termine pas à la même décennie selon la notion

- **Où** : `histoire-monde-3.ts` `hm3-japon-asie-est` et `histoire-monde-4.ts` `hm4-japon-histoire`
- **Texte** : `hm3` — « Une croissance très rapide des années 1950 aux **années 1970** » ; `hm4` — « Une croissance très rapide des années 1950 aux **années 1980** ».
- **Problème** : deux bonnes réponses incompatibles à la même question. La haute croissance s'achève avec le choc pétrolier de 1973 ; la bulle des années 1980 est une autre séquence, ce que dit d'ailleurs le cours `hm3-japon-asie-est`.
- **Correction proposée** : aligner `hm4` sur « des années 1950 aux années 1970 ».

### [MOYEN] ALENA : date de signature fausse, et contredite par le cours

- **Où** : `histoire-monde-3.ts` — `hm3-amerique-nord-contemporaine`
- **Texte** : question — « Qu'est-ce que l'ALENA devenu ACEUM ? […] **Signé en 1994**, renégocié et remplacé en 2020. » ; cours de la même notion — « L'ALENA, **entré en vigueur en 1994** et devenu ACEUM en 2020 ».
- **Problème** : l'ALENA a été signé en décembre 1992 et est entré en vigueur le 1er janvier 1994. L'explication de la question est fausse et contredit son propre cours.
- **Correction proposée** : « Signé en 1992, entré en vigueur en 1994, renégocié et remplacé en 2020. »

### [MOYEN] Distracteur en fait exact : « Tours » et « Poitiers » désignent la même bataille

- **Où** : `histoire-monde-2.ts` — `hm2-islam-conquetes`
- **Texte** : « Quelle bataille de 732 arrête une incursion arabe en Gaule ? » — `["Poitiers", "Tours seule", "Narbonne", "Toulouse"]`.
- **Problème** : la bataille de 732 s'appelle « bataille de Poitiers » en français et « battle of Tours » en anglais ; le distracteur 1 nomme le même événement. Le mot « seule » ne suffit pas à le rendre faux.
- **Correction proposée** : remplacer « Tours seule » par « Autun » ou « Bordeaux ».

### [MOYEN] Distracteur en fait exact : mazdéisme = zoroastrisme

- **Où** : `histoire-monde-4.ts` — `hm4-perse`
- **Texte** : « Quelle religion dominait l'empire perse ? » — `["Le zoroastrisme", "Le mithraïsme", "Le manichéisme", "Le mazdéisme tardif"]`.
- **Problème** : « mazdéisme » est un synonyme usuel de « zoroastrisme ». Le distracteur 3 est défendable.
- **Correction proposée** : remplacer par « Le culte de Cybèle ».

### [MOYEN] Distracteur en fait exact : le plan Cerdà est le plan d'Ildefons Cerdà

- **Où** : `histoire-monde-3.ts` — `hm3-villes-histoire`
- **Texte** : « Quel plan d'urbanisme transforme Barcelone au XIXe siècle ? » — `["Le plan Cerdà", "Le plan Haussmann", "Le plan Ildefons", "Le plan de l'Eixample seul"]`, et l'explication précise « Ildefons Cerdà y conçoit […] dit Eixample ».
- **Problème** : deux des trois distracteurs désignent la même chose que la bonne réponse — l'explication le dit elle-même.
- **Correction proposée** : remplacer par « Le plan Soria » et « Le plan Jaussely ».

### [MOYEN] Redite interne dans le cours de Byzance : le même constat deux paragraphes de suite

- **Où** : `cours/histoire-monde.ts` — `hm4-empire-byzantin`, section « Justinien »
- **Texte** : « L'entreprise réussit militairement et échoue financièrement : les campagnes vident le trésor […] et l'essentiel des territoires repris est perdu en une génération. » puis, au paragraphe suivant : « L'entreprise épuise l'Empire pour un résultat éphémère : les conquêtes italiennes seront perdues en une génération, et l'effort financier et militaire affaiblit durablement les défenses orientales. »
- **Problème** : deux formulations du même énoncé collées l'une à l'autre — remplissage manifeste.
- **Correction proposée** : supprimer le second paragraphe.

### [MOYEN] Redite interne dans le cours sur la partition

- **Où** : `cours/histoire-monde.ts` — `hm3-inde-pakistan`, section « La partition »
- **Texte** : « Le Pakistan naît en deux morceaux séparés par mille cinq cents kilomètres de territoire indien » — puis, dernier paragraphe : « Jinnah recevait un pays coupé en deux moitiés séparées par mille cinq cents kilomètres de territoire indien. »
- **Problème** : même fait, même chiffre, presque les mêmes mots, dans la même section.
- **Correction proposée** : au dernier paragraphe, écrire simplement « Jinnah recevait un pays coupé en deux ».

### [MOYEN] « Cinq fois plus de morts que la Première » compare deux bases différentes

- **Où** : `histoire-monde-3.ts` — `hm3-seconde-guerre`, phrase-repère de la notion
- **Texte** : « La Seconde Guerre mondiale a fait environ cinq fois plus de morts que la Première. »
- **Problème** : le rapport n'est de cinq que si l'on compare les **10 millions de militaires** de 1914-1918 (chiffre donné par la question de `hm3-premiere-guerre`) aux **50 à 70 millions de morts totaux** de 1939-1945. À bases comparables (morts totaux ≈ 18-20 millions contre 50-70), le rapport est d'environ trois. Exact en apparence, trompeur en fait.
- **Correction proposée** : « La Seconde Guerre mondiale a fait environ trois fois plus de morts que la Première, et pour la première fois une majorité de civils. »

### [MOYEN] La boussole n'est pas arrivée en Europe avec les Mongols

- **Où** : `cours/histoire-monde.ts` — `hm2-mongols`, section « L'héritage » ; et `hm-routes-echanges`, section « La soie et le sel »
- **Texte** : « La poudre, **la boussole**, l'imprimerie et le papier-monnaie arrivent en Occident à cette période. »
- **Problème** : la boussole est attestée en Europe dès les années 1180-1190, soit un demi-siècle avant les conquêtes mongoles. Cause unique donnée à une transmission qui a plusieurs canaux et plusieurs dates.
- **Correction proposée** : « La poudre, l'imprimerie et le papier-monnaie parviennent en Occident à cette période ; la boussole, elle, y était connue depuis la fin du XIIe siècle. »

### [MOYEN] « La deuxième économie mondiale » : un rang sans date et sans convention

- **Où** : `histoire-monde-3.ts` — `hm3-chine-contemporaine`
- **Texte** : « Quelle place la Chine occupe-t-elle **aujourd'hui** dans l'économie mondiale ? » → « La deuxième économie et le premier exportateur », distracteur « La première économie ».
- **Problème** : la Chine est deuxième en PIB nominal mais **première en parité de pouvoir d'achat** depuis 2014 : le distracteur est vrai sous une autre convention, jamais précisée. « Aujourd'hui » n'est pas une date.
- **Correction proposée** : « Quelle place la Chine occupe-t-elle dans l'économie mondiale en PIB nominal ? » et préciser dans l'explication qu'elle est première en parité de pouvoir d'achat.

### [MOYEN] Le cours de Justinien / l'explication d'Aryabhata : explications hors sujet

- **Où** : `histoire-monde-2.ts` — `hm2-inde-histoire`
- **Texte** : « Quel mathématicien indien du Ve siècle calcule une valeur précise de pi ? » → Aryabhata. Explication : « Brahmagupta, au VIIe siècle, sera le premier à traiter le zéro comme un nombre à part entière. »
- **Problème** : l'explication ne dit rien de la réponse. Elle apprend quelque chose, mais sur un autre savant et un autre siècle ; l'apprenant ne saura toujours pas ce qu'Aryabhata a calculé. Le cours `hm4-inde-ancienne` a l'information utile (« exacte à quatre décimales ») — elle n'a pas été reportée.
- **Correction proposée** : « Sa valeur, exacte à quatre décimales, accompagne d'autres intuitions remarquables : il proposait déjà que la Terre tourne sur elle-même. »

### [MOYEN] Fuite de réponse d'une question à la suivante

- **Où** : `histoire-monde-2.ts` — `hm2-colonisation`, questions 2 et 3
- **Texte** : q. 2, explication — « Elle repousse l'invasion italienne **à Adoua en 1896**. » ; q. 3, énoncé — « Quelle bataille de 1896 voit une armée africaine battre une puissance européenne ? » → « Adoua ».
- **Problème** : la question précédente donne la réponse de la suivante, mot pour mot, dans l'ordre où elles sont posées.
- **Correction proposée** : retirer « à Adoua en 1896 » de l'explication de la question 2.

### [MINEUR] Diên Biên Phu : cinquante-sept jours au lieu de cinquante-six

- **Où** : `histoire-monde-3.ts` — `hm3-decolonisation-conflits` (question) et `cours/histoire-monde.ts` — même notion
- **Texte** : « après cinquante-sept jours de siège » (les deux fois).
- **Problème** : le siège court du 13 mars au 7 mai 1954, soit 56 jours — d'où la formule consacrée « cinquante-six jours, cinquante-six nuits ».
- **Correction proposée** : « après cinquante-six jours de siège ».

### [MINEUR] Galien : quatorze ou quinze siècles selon l'endroit

- **Où** : question `hm3-histoire-sciences-monde` — « la doctrine de Galien, dominante depuis **quatorze** siècles » ; cours de la même notion — « contre une doctrine galénique vieille de **quinze** siècles ».
- **Problème** : la question et son cours ne disent pas la même chose. Galien meurt vers 216, Harvey publie en 1628 : quatorze siècles.
- **Correction proposée** : « quatorze siècles » dans le cours.

### [MINEUR] L'équipage de Magellan compte trois effectifs différents

- **Où** : `hm2-decouvertes` (« dix-huit hommes sur environ **deux cent cinquante** »), cours `hm4-decouvertes` (« **deux cent trente-sept** hommes »), héritage q. 25 (« environ **270** hommes »).
- **Correction proposée** : retenir « environ deux cent soixante-dix hommes » partout, chiffre le plus courant.

### [MINEUR] Déchiffrement des glyphes mayas : années 1950 ou années 1980

- **Où** : `hm2-amerique-latine` (« déchiffré qu'à partir des années 1950 ») contre `hm4-amerique-precolombienne` (« largement déchiffré depuis les années 1980 ») et son cours (« achevé dans les années 1980 »).
- **Correction proposée** : « les percées commencent dans les années 1950 et le déchiffrement est pour l'essentiel achevé dans les années 1980 ».

### [MINEUR] Faute d'orthographe : « favoraient »

- **Où** : `cours/histoire-monde.ts` — `hm2-rome-republique`, section « Une république très inégale »
- **Texte** : « l'ordre de vote comme le poids de chaque centurie **favoraient** les plus riches »
- **Correction proposée** : « favorisaient ».

### [MINEUR] Faute d'accord : « Quel invention »

- **Où** : `histoire-monde-2.ts` — `hm2-reforme-guerres-religion`
- **Texte** : « **Quel** invention favorise la diffusion rapide des idées de la Réforme ? »
- **Correction proposée** : « Quelle invention ».

### [MINEUR] Majuscules manquantes en tête de choix

- **Où** : `histoire-monde-2.ts` (`hm2-colonisation` : « l'Éthiopie », « l'État indépendant du Congo », « l'Angola » ; `hm2-afrique-precoloniale` : « l'Éthiopie »), `histoire-monde-3.ts` (`hm3-entre-deux-guerres` : « l'ONU » ; `hm3-afrique-independance` : « l'UEMOA » ; `hm3-amerique-latine-contemporaine` : « l'UNASUR », « l'ALBA » ; `hm3-epidemies-histoire` : « l'hépatite C »), `histoire-monde-4.ts` (`hm4-decouvertes` : « l'Espagne » ; `hm4-histoire-sciences-monde` : « d'Inde, transmis par le monde arabe » ; `hm4-decolonisations` / `hm3-decolonisation-conflits` : « l'Angola et le Mozambique »)
- **Problème** : les autres choix de la même liste commencent par une majuscule ; l'irrégularité est visible à l'écran et peut, dans certaines listes, signaler la bonne réponse.
- **Correction proposée** : capitaliser tous les premiers mots de choix.

### [MINEUR] Commentaires d'en-tête faux : « notions sans cours » alors que les cours existent

- **Où** : en-tête de `histoire-monde.ts` (« treize notions **sans cours** »), `-2.ts` (« **vingt** notions sans cours » alors qu'il y en a **vingt et une**), `-3.ts`, `-4.ts`
- **Problème** : `cours/histoire-monde.ts` fournit des cours pour 51 de ces notions, dont les treize du premier lot. Et le décompte du lot 2 est faux.
- **Correction proposée** : « Histoire du monde, deuxième lot — vingt et une notions. »

### [MINEUR] Divergences de détail entre le cahier d'origine et le seed

- **Où** : héritage q. 3 (« mort vers 1327 av. J.-C. à environ **18 ans** ») contre `hm2-egypte-pharaonique` (« mort vers **dix-neuf** ans ») ; héritage q. 35 (« la Grande Colombie se disloque **de son vivant** ») contre `hm-independances-amerique-latine` (« Elle éclate en **1831, peu après la mort** de Bolívar ») ; héritage q. 0 (« près de **147** mètres ») contre cours et questions du seed (« cent quarante-**six** mètres »).
- **Problème** : incohérences mineures mais visibles pour qui révise les deux sources.
- **Correction proposée** : harmoniser sur « environ dix-neuf ans », « la Grande Colombie se défait en 1830-1831, autour de la mort de Bolívar », « environ cent quarante-sept mètres ».

### [MINEUR] Momification : soixante-dix jours de natron

- **Où** : `cours/histoire-monde.ts` — `hm2-egypte-pharaonique`, section « Bâtir pour l'éternité »
- **Texte** : « dessiccation au natron pendant **soixante-dix** jours »
- **Problème** : soixante-dix jours est la durée du **rituel complet** ; la dessiccation au natron proprement dite durait une quarantaine de jours. Formulation reprise d'Hérodote sans le dire.
- **Correction proposée** : « une quarantaine de jours de dessiccation au natron, dans un rituel qui en durait soixante-dix ».

### [MINEUR] « Aucune monnaie n'est convertible en quoi que ce soit »

- **Où** : `cours/histoire-monde.ts` — `hm3-monnaie-histoire`, section « Ce qui donne sa valeur à la monnaie »
- **Texte** : « Depuis 1971, toutes les monnaies du monde sont dans ce cas : aucune n'est convertible en quoi que ce soit. »
- **Problème** : les monnaies sont convertibles entre elles, et plusieurs sont arrimées à une autre devise. Ce qui a disparu, c'est la convertibilité **métallique**.
- **Correction proposée** : « aucune n'est plus convertible en métal ».

### [MINEUR] La Charte d'Athènes n'a pas été publiée en 1933

- **Où** : question `hm3-villes-histoire` (« la Charte d'Athènes de 1933 ») et cours de la même notion (« publiée en 1933 à l'issue d'un congrès »)
- **Problème** : le congrès des CIAM se tient en 1933 ; la Charte est publiée en 1943 par Le Corbusier. Le cours dit explicitement « publiée en 1933 », ce qui est faux.
- **Correction proposée** : « issue du congrès des CIAM de 1933 et publiée dix ans plus tard ».

### [MINEUR] Victoria impératrice des Indes en 1876, pas en 1858

- **Où** : `cours/histoire-monde.ts` — `hm2-inde-histoire`, section « De la Compagnie à l'indépendance »
- **Texte** : « l'Inde passe sous administration directe de la Couronne, et la reine Victoria devient impératrice des Indes »
- **Problème** : la phrase enchaîne les deux faits comme s'ils étaient simultanés ; dix-huit ans les séparent (1858 et 1876).
- **Correction proposée** : « l'Inde passe sous administration directe de la Couronne en 1858, et Victoria prendra le titre d'impératrice des Indes en 1876 ».

### [MINEUR] Tang : « aux VIIe et IXe siècles »

- **Où** : `cours/histoire-monde.ts` — `hm4-chine-imperiale`, section « Les grandes dynasties »
- **Texte** : « Les Tang, **aux VIIe et IXe siècles**, marquent un apogée culturel »
- **Problème** : la formule saute le VIIIe siècle et ne correspond ni à la question de `hm2-chine-imperiale` (« entre le VIIe et le Xe siècle ») ni à celle de `hm4-chine-imperiale` (« aux VIIe-IXe siècles »).
- **Correction proposée** : « Les Tang, du VIIe au Xe siècle ».

### [MINEUR] Pizarro : 1532 ou 1533, et « moins de quarante ans »

- **Où** : `cours/histoire-monde.ts` — `hm-espagne-or`, section « 1492 »
- **Texte** : « **En moins de quarante ans**, deux empires américains tombent : Hernán Cortés abat l'Empire aztèque en 1521, Francisco Pizarro l'Empire inca **en 1533**. »
- **Problème** : de 1492 à 1533, il s'écoule quarante et un ans. Par ailleurs la question de la même notion date la capture d'Atahualpa de 1532 ; les deux dates coexistent sans être articulées.
- **Correction proposée** : « En un peu plus de quarante ans […] Pizarro l'Empire inca entre 1532 et 1533. »

### [MINEUR] Question au distracteur trop long / trop précis

- **Où** : `histoire-monde.ts` — `hm-espagne-or`
- **Texte** : « Quelle mine d'argent enrichit l'Espagne à partir de 1545 ? » — `["Le Potosí, dans l'actuelle Bolivie", "Zacatecas seul", "Les mines de Guanajuato", "Les gisements de Colombie"]`
- **Problème** : la bonne réponse est la seule à être localisée et la plus longue ; le « seul » de Zacatecas trahit un distracteur bricolé. Le procédé se répète ailleurs (« Tours seule », « Le Liberia seul », « Le MRTA seul », « L'Éthiopie seule », « Le royaume du Monomotapa seul », « Le Digeste seul », « Les Saints-Apôtres seule », « Les Bardi seuls »).
- **Correction proposée** : « Le Potosí », « Zacatecas », « Guanajuato », « Muzo » — et, plus généralement, réécrire les distracteurs suffixés en « seul(e) », qui signalent au lecteur qu'ils sont faux.

---

## Ce que la seconde passe a ajouté

**Rien : la seconde passe n'a pas eu lieu.** La session a été interrompue pendant la lecture du cahier d'origine. Tous les constats ci-dessus proviennent de la passe 1. Restent à faire, dans l'ordre d'urgence :

1. les 23 leçons `heritage/culture-g/data/lecons/histoire-monde/01..23.json`, **jamais ouvertes** — c'est le plus gros angle mort de cet audit ;
2. les 3 cours du fichier `heritage/culture-g/data/histoire-monde.json` (seul le premier, « Rome, de la République à l'Empire », a été entrevu sur ses deux premières sections) ;
3. la seconde passe sur les quatre fichiers de questions, en commençant par la **fin** de `histoire-monde-4.ts` et de `histoire-monde-3.ts`, moins bien couverte que le début.

## Ce qui est sain

Les cours du seed sont d'une qualité nettement supérieure aux questions : ils nuancent (Poitiers « razzia et non entreprise de conquête », la Reconquista comme « construction tardive », les causes multiples de la chute de Rome, le cylindre de Cyrus qualifié d'anachronisme, la mémoire musulmane des croisades réintroduite au XIXe siècle), ils datent, et ils vont souvent chercher le détail vérifiable et juste — papyrus de Merer retrouvé en 2013, stèle de Hammurabi retrouvée à Suse en 1901, emprunt britannique d'indemnisation des propriétaires soldé en 2015, archives de l'opération Condor découvertes au Paraguay en 1992. Le cahier d'origine (`heritage/.../histoire-monde.json`), sur ses 66 questions lues, est le morceau le plus solide du domaine : explications longues, dates précises et exactes, idées reçues explicitement démontées (la circumnavigation de Magellan « ne démontre pas la rotondité de la Terre », la Grande Muraille « n'est pas visible à l'œil nu depuis la Lune », la grippe de 1918 « n'est pas née en Espagne »). Je n'y ai relevé aucune erreur de fait. Le problème du domaine n'est pas l'exactitude : c'est la redondance massive du seed, et le fait que les questions n'aient pas été relues contre leurs propres cours.
