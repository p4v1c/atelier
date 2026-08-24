# Histoire du monde

> ÉTAT (session 2, **terminée**) : périmètre complet lu. Session 2 a couvert ce qui manquait — les **23 leçons** `heritage/culture-g/data/lecons/histoire-monde/01..23.json` (115 sections, 114 questions de quiz) et les **3 cours** du JSON héritage — puis a mené la **passe 2** sur l'ensemble : relecture de la fin de `histoire-monde-4.ts` et `-3.ts` (zone la plus faible de la session 1), et croisement systématique des 922 énoncés du domaine. Rien ne reste à lire.
>
> ÉTAT (session 1, close) : Fichiers lus : `prisma/seed/culture-g/histoire-monde.ts`, `histoire-monde-2.ts`, `histoire-monde-3.ts`, `histoire-monde-4.ts` (intégralement), `prisma/seed/culture-g/cours/histoire-monde.ts` (intégralement), `heritage/culture-g/data/histoire-monde.json` (66 questions sur 66, 3 cours **non lus**). Reste à lire : les 3 cours du JSON héritage, et **les 23 leçons** `heritage/culture-g/data/lecons/histoire-monde/01..23.json` (aucune ouverte). **Passe 1 seulement** — la seconde passe n'a pas été faite.

## Ce que j'ai lu

- `prisma/seed/culture-g/histoire-monde.ts` — 13 notions, 130 questions
- `prisma/seed/culture-g/histoire-monde-2.ts` — 21 notions, 200 questions
- `prisma/seed/culture-g/histoire-monde-3.ts` — 20 notions, 197 questions
- `prisma/seed/culture-g/histoire-monde-4.ts` — 22 notions, 215 questions
- **Total seed : 76 notions, 742 questions, toutes lues.**
- `prisma/seed/culture-g/cours/histoire-monde.ts` — 51 cours (≈ 200 sections), tous lus.
- `heritage/culture-g/data/histoire-monde.json` — 66 questions (session 1) **et les 3 cours, 15 sections, lus en session 2**.
- `heritage/culture-g/data/lecons/histoire-monde/*.json` — **23 leçons, 115 sections et 114 questions de quiz, toutes lues en session 2.**
- **Total du périmètre : 922 énoncés et environ 330 sections de cours, tout est lu.** Deux
  passes : passe 1 fichier par fichier, passe 2 par relecture de la fin des lots 3 et 4 et par
  croisement de tous les énoncés entre eux.

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

# Session 2 — les leçons du cahier d'origine

`heritage/culture-g/data/lecons/histoire-monde/*.json` : 23 leçons, chacune 5 sections
longues (≈ 1 500 signes) + 5 questions de quiz (sauf `06.json`, 4 questions).
Ce corpus **n'avait jamais été ouvert**. Format : `{titre, sections:[{titre, texte,
visuel?}], quiz:[{q, choix, bonne, difficulte, explication}], sources?}`.

## Constats — leçons héritage

### [MOYEN] Énoncé à deux réponses défendables, et l'explication l'admet elle-même

- **Où** : `heritage/culture-g/data/lecons/histoire-monde/01.json` — quiz, question 5
- **Texte** : « Quel événement marque **la fin de l'Égypte indépendante** et son passage sous domination romaine ? » — choix : « La conquête de Cambyse en 525 av. J.-C. », « L'arrivée d'Alexandre le Grand en 332 av. J.-C. », « La mort de Cléopâtre VII en 30 av. J.-C. », « Le déchiffrement des hiéroglyphes en 1822 » ; bonne = 2. Explication : « Les conquêtes perse et macédonienne, plus anciennes, **avaient déjà mis fin à l'indépendance politique**, mais c'est en 30 que s'ouvre la période romaine. »
- **Problème** : l'énoncé pose deux critères, dont le premier (« fin de l'Égypte indépendante ») désigne 525 av. J.-C. — ce que l'explication concède noir sur blanc. Un apprenant attentif qui coche « Cambyse » a lu correctement l'énoncé et est compté faux. La question de la leçon 19 (Perse) enseigne d'ailleurs la même conquête.
- **Correction proposée** : « Quel événement fait passer l'Égypte sous domination romaine ? »

### [MINEUR] Distracteurs hors catégorie : trois pharaons contre un architecte

- **Où** : `01.json` — quiz, question 2
- **Texte** : « Qui fut l'**architecte** de la première pyramide égyptienne, la pyramide à degrés de Saqqarah ? » — `["Imhotep", "Khéops", "Ramsès", "Thoutmosis"]`.
- **Problème** : les trois distracteurs sont des noms de pharaons ; la bonne réponse est la seule qui ne soit pas un roi. Qui sait seulement que Khéops et Ramsès sont des pharaons trouve sans rien connaître d'Imhotep.
- **Correction proposée** : distracteurs d'architectes ou de hauts fonctionnaires — « Hémiounou », « Senmout », « Ineni ».

### [MINEUR] La hauteur de Khéops : la leçon confirme 146 m, c'est le cahier de questions qui est isolé

- **Où** : `01.json` § « L'unification et l'Ancien Empire » et légende du visuel — « près de **146** mètres » (deux fois), contre `heritage/culture-g/data/histoire-monde.json` q. 0 — « près de **147** mètres ».
- **Problème** : complète le constat déjà noté plus haut. Le seed, les cours du seed et la leçon d'origine disent tous 146 ; seule la question 0 du cahier dit 147. La correction proposée en session 1 (« harmoniser sur environ cent quarante-sept mètres ») va donc dans le mauvais sens.
- **Correction proposée** : harmoniser sur « près de cent quarante-six mètres » et corriger la question 0 du cahier, pas l'inverse.

### [MINEUR] La frise fait mourir Périclès en 430, le texte de la même leçon dit 429

- **Où** : `02.json` — section « Les guerres médiques et le siècle de Périclès » (frise) et section « La guerre du Péloponnèse »
- **Texte** : frise — « **430 av. J.-C.** — Épidémie à Athènes — **Elle emporte Périclès.** » ; texte de la section précédente — « Périclès, régulièrement réélu entre 461 et **sa mort en 429** ».
- **Problème** : l'épidémie éclate en 430, Périclès en meurt en 429. La frise, qui est ce que l'apprenant retient visuellement, contredit le corps de la leçon à deux sections d'écart.
- **Correction proposée** : frise — « 430-429 av. J.-C. — Épidémie à Athènes — Elle emporte Périclès en 429. »

### [MOYEN] Le précepteur d'Alexandre : quatrième occurrence du même item

- **Où** : `02.json` — quiz, question 5 ; s'ajoute à `hm-alexandre` et `hm2-alexandre-hellenistique` (déjà signalés) et à `heritage/culture-g/data/histoire-monde.json`
- **Texte** : « Quel philosophe, élève de Platon, fut le précepteur d'Alexandre le Grand ? »
- **Problème** : le constat « doublons francs » de la session 1 sous-estimait la portée : l'item existe aussi dans le cahier d'origine. Le domaine pose donc quatre fois la même question à l'apprenant selon le parcours qu'il suit.
- **Correction proposée** : le conserver dans la leçon 02 (c'est là qu'il est le mieux expliqué : Stagire, l'Académie, le Lycée) et le retirer de l'une au moins des deux notions du seed.

### [MINEUR] Typographie : ligature œ manquante, et apostrophe droite dans tout le domaine

- **Où** : relevé exhaustif sur les 23 leçons — `02.json` « son **oeuvre** », `03.json` « le **choeur** de la basilique », « pénurie de **main-d'oeuvre** », `04.json` « une **oeuvre** », « Richard **Coeur** de Lion », `05.json` (2 occ. « oeuvre »), `06.json` « **manoeuvres** », `07.json` « **oeuvre** ». Apostrophe : **0 apostrophe courbe** sur l'ensemble du domaine (leçons, cahier, seed, cours) — 312 droites dans `histoire-monde.ts`, 1 968 dans `cours/histoire-monde.ts`, 852 dans `histoire-monde.json`, ≈ 700 dans les leçons.
- **Problème** : la ligature œ est une faute d'orthographe, pas un choix typographique (« cœur », « œuvre », « manœuvres », « chœur »). L'apostrophe droite, elle, est **uniformément** appliquée : c'est une convention du dépôt, pas une négligence ponctuelle — à trancher globalement, pas fichier par fichier.
- **Correction proposée** : corriger les 9 occurrences de `oe` → `œ` (attention : ne pas toucher « Groenland », « Soekarno », « coexistence », qui sont corrects) ; pour l'apostrophe, décider une fois pour tout le domaine plutôt que de signaler chaque fichier.

### [SAIN] Leçon 03 — Moyen Âge : rien à signaler

Vérifiée date par date (476, Soissons 486, Vouillé 507, Justinien 527-565, Poitiers 732,
751, 768, Noël 800, Verdun 843, Cluny 910, Cîteaux 1098, Clermont 1095, Jérusalem 1099,
Saladin 1187, Saint-Denis v. 1140, Notre-Dame 1163, Acre 1291, famine 1315, peste 1347,
Jacquerie 1358, 1381, Cent Ans 1337-1453, Crécy 1346, Azincourt 1415, Orléans 1429,
Rouen 1431, Schisme 1378-1417, Constantinople 1453) : **tout est exact**. La leçon fait
mieux que le seed sur deux points sensibles : elle présente 476 comme « un repère commode
plus qu'une rupture brutale » et signale que la date du baptême de Clovis, « longtemps
fixée à 496, reste discutée ». Les quatre distracteurs de chaque question sont plausibles
et faux.

### [MOYEN] Poitiers 732 : les leçons enseignent exactement la lecture que le cours du seed démonte

- **Où** : `03.json` § « L'Empire de Charlemagne » et sa frise ; `04.json` § « La naissance de l'islam » et sa frise — contre `prisma/seed/culture-g/cours/histoire-monde.ts` § « Deux limites » (`hm2-islam-conquetes`)
- **Texte** : leçon 03 — « Charles Martel **arrête une expédition musulmane** près de Poitiers en 732 » ; leçon 04 — « **l'avancée vers le nord est stoppée** en Gaule près de Poitiers en 732 » ; frise de la leçon 04 — « **732 — L'avancée est stoppée près de Poitiers** ». Cours du seed — « Il s'agissait d'une **razzia et non d'une entreprise de conquête**, et les opérations en Gaule méridionale **se poursuivront des décennies**. L'historiographie européenne du XIXe siècle en a fait le salut de la chrétienté, lecture que les travaux récents ont considérablement nuancée. »
- **Problème** : ce n'est pas une erreur de date mais une causalité fausse — « l'avancée est stoppée » présente une razzia comme le coup d'arrêt d'une conquête, ce que le cours du seed identifie nommément comme le mythe du XIXe siècle. Un apprenant qui suit les leçons du cahier apprend le contraire de ce que lui enseigne le cours du seed sur le même fait. Le corpus se contredit sur son propre point d'historiographie le plus sensible.
- **Correction proposée** : leçon 04 — « une incursion arabe est repoussée en Gaule près de Poitiers en 732, sans que les opérations dans le Midi cessent pour autant » ; frise — « 732 — Poitiers : une razzia repoussée ». Même retouche dans la leçon 03.

### [SAIN] Leçon 04 — monde musulman et Ottomans : dates exactes de bout en bout

Contrôlé : 570, 610, 622, 632, Égypte 642, Damas 661, Espagne 711, Abbassides 750,
Bagdad 762, Haroun al-Rachid 786-809, califat de Cordoue 929, Le Caire 969, Seldjoukides
à Bagdad 1055, Manzikert 1071, Jérusalem 1099, Hattin et Jérusalem 1187, Mamelouks 1250,
Bagdad 1258, Aïn Djalout 1260, Acre 1291, Osman v. 1299, Kosovo 1389, Ankara 1402,
Constantinople 1453, Grenade 1492, Selim Ier 1516-1517, Soliman 1520-1566, Belgrade 1521,
Rhodes 1522, Mohács 1526, Vienne 1529. **Aucune erreur.** À signaler comme bonne pratique :
la Maison de la sagesse est introduite par « un centre de traduction et d'étude **que les
sources appellent** la Maison de la sagesse » — la prudence exacte qu'appelle un objet
dont les historiens contestent aujourd'hui l'existence institutionnelle.

### [SAIN] Leçon 05 — révolution industrielle : exacte, et explicitement multicausale

Contrôlé : Kay 1733, Hargreaves v. 1765, Arkwright 1769, Cartwright 1785, Newcomen 1712,
condenseur de Watt breveté 1769, Darby coke 1709, puddlage de Cort 1784, Rainhill 1829,
Liverpool-Manchester 1830, Paris-Saint-Germain 1837, Fulton 1807, Zollverein 1834,
transcontinentale et Suez 1869, Meiji 1868, Factory Act 1833, Bessemer 1856, Edison 1879,
Ford 1913, Smith 1776, *Manifeste* 1848, *Le Capital* 1867, AIT 1864, Waldeck-Rousseau 1884,
*Rerum novarum* 1891. Les deux ordres de grandeur démographiques tiennent aussi
(6 → 18 millions en Angleterre et pays de Galles entre 1750 et 1850 ; Manchester
25 000 → 300 000). **Aucune erreur relevée.** La section 1 se termine par « Aucun de ces
facteurs ne suffit à lui seul : c'est leur combinaison qui rend possible le décollage
industriel » — exactement le refus de la cause unique que la consigne demande de vérifier
ailleurs.

### [MOYEN] La leçon 14-18 a perdu sa question sur Sarajevo : sa première section n'est plus évaluée

- **Où** : `06.json` — « La Première Guerre mondiale (1914-1918) », bloc `quiz`
- **Texte** : la leçon compte **4 questions** là où les 22 autres leçons du domaine en comptent 5 (contrôlé : sur les 238 leçons de tout le cahier, **deux seulement** ont 4 questions — `histoire-monde/06.json` et `cinema-medias/06.json`). Le commit `eb0dfc2` « culture-g : passe doublons — 86 questions redondantes retirees » a supprimé : « Quel événement du 28 juin 1914 déclenche l'engrenage menant à la guerre ? » (difficulté 1).
- **Problème** : la passe de dédoublonnage a vidé la **leçon** plutôt que le seed. Résultat : la section 1, « Les origines du conflit et l'été 1914 » — Sarajevo, l'ultimatum, l'engrenage des alliances, soit la matière la plus dense de la leçon — n'est plus testée par aucune question, et l'apprenant perd du même coup la seule question de difficulté 1, c'est-à-dire son point d'entrée. Les quatre questions restantes portent sur les sections 2, 3, 4 et 5. Le fait, lui, subsiste dans `histoire-monde.ts` et dans le cahier (`histoire-monde.json`) : ce n'est pas une perte de contenu, c'est un trou d'évaluation créé au mauvais endroit.
- **Correction proposée** : réintroduire dans la leçon 06 une cinquième question portant sur la section 1 mais formulée autrement que celle du seed — par exemple sur l'enchaînement plutôt que sur l'attentat : « Quel enchaînement transforme en dix jours un attentat en guerre européenne ? », avec l'ultimatum autrichien du 23 juillet, la déclaration du 28 juillet et les mobilisations du 1er au 4 août. Et, plus généralement, vérifier que la passe doublons n'a pas laissé d'autres sections sans question.

### [SAIN] Leçon 06 — 1914-1918 : le récit et les dates sont justes

Contrôlé : crises marocaines 1905 et 1911, guerres balkaniques 1912-1913, Triple Alliance
1882, accords de 1892 / 1904 / 1907, Sarajevo 28 juin, ultimatum et déclaration du
28 juillet, 1er-4 août, Marne 6-12 septembre, front de 700 km, gaz à Ypres avril 1915,
Tannenberg août 1914, Verdun 21 février 1916 et ses dix mois, Somme juillet-novembre,
premiers chars septembre 1916, génocide arménien 1915-1916, Chemin des Dames avril 1917,
Clemenceau novembre 1917, révolutions de février et d'octobre, Brest-Litovsk mars 1918,
entrée américaine le 6 avril 1917, quatorze points janvier 1918, Foch, seconde Marne,
capitulations bulgare (septembre), ottomane (30 octobre) et austro-hongroise (3 novembre),
Rethondes 11 novembre, 9-10 millions de militaires morts, Versailles 28 juin 1919,
100 000 hommes, article 231. **Aucune erreur.** Deux formulations méritent d'être gardées
telles quelles : les mutineries de 1917 sont expliquées « moins par refus de défendre le
pays que par protestation contre des attaques jugées inutiles », et le distracteur « Le
retour de la Rhénanie à la France » est réfuté dans l'explication (« démilitarisée et
occupée temporairement », non annexée).

### [MOYEN] Le ghetto de Varsovie daté de 1939 : il est créé en octobre 1940

- **Où** : `07.json` — section « Une guerre d'anéantissement : la Shoah », et son visuel « Les étapes du génocide des Juifs d'Europe », étape 1
- **Texte** : texte — « **Dès 1939**, les Juifs de Pologne sont enfermés dans des ghettos surpeuplés **comme celui de Varsovie**. » ; visuel — « **1939 : les ghettos** — Les Juifs de Pologne sont enfermés dans des quartiers surpeuplés, **comme celui de Varsovie**. »
- **Problème** : les premiers ghettos apparaissent bien dès octobre 1939 (Piotrków Trybunalski), mais celui de Varsovie — le seul nommé, donc le seul que l'apprenant retiendra — est créé en octobre 1940 et fermé le 16 novembre 1940. L'exemple contredit la date qu'il est censé illustrer, et l'erreur est reprise telle quelle dans le visuel, c'est-à-dire à l'endroit le plus mémorisable de la leçon. C'est une date de la Shoah : elle mérite d'être juste.
- **Correction proposée** : texte — « Dès l'automne 1939, les Juifs de Pologne sont enfermés dans des ghettos surpeuplés ; celui de Varsovie, le plus grand, est fermé en novembre 1940. » ; visuel — « 1939-1940 : les ghettos […] celui de Varsovie est fermé en novembre 1940 ».

### [MINEUR] Berlin prise avant le suicide de Hitler

- **Où** : `07.json` — section « 1944-1945 : la victoire alliée et le bilan »
- **Texte** : « **Berlin est prise par les Soviétiques ; Hitler se suicide le 30 avril** et l'Allemagne capitule sans condition »
- **Problème** : la phrase énumère dans l'ordre inverse. Hitler se suicide le 30 avril, la garnison de Berlin capitule le 2 mai. Écrit ainsi, un apprenant retient que Berlin tombe d'abord et que Hitler se tue ensuite.
- **Correction proposée** : « Hitler se suicide le 30 avril, Berlin tombe le 2 mai, et l'Allemagne capitule sans condition, ce qui est célébré le 8 mai 1945. »

### [SAIN] Leçon 07 — 1939-1945 : le reste est exact

Contrôlé : krach d'octobre 1929, Mussolini 1922, Hitler 30 janvier 1933, service militaire
1935, Rhénanie 1936, Anschluss mars 1938, Munich septembre 1938, Prague mars 1939,
Mandchourie 1931 et Chine 1937, pacte du 23 août 1939, 1er et 3 septembre, 10 mai 1940,
armistice du 22 juin 1940, bataille d'Angleterre, Barbarossa le 22 juin 1941 avec plus de
trois millions d'hommes, Moscou décembre 1941, Pearl Harbor 7 décembre 1941, Midway juin
1942 et ses quatre porte-avions, El-Alamein octobre-novembre 1942, Torch, Stalingrad
2 février 1943, Koursk juillet 1943, Sicile juillet 1943, Téhéran fin 1943, Einsatzgruppen
été 1941, Wannsee janvier 1942, les cinq centres de mise à mort, cinq à six millions de
victimes juives, Vél d'Hiv juillet 1942, Nankin 1937, 6 juin et 15 août 1944, Yalta février
1945, 8 mai 1945, Hiroshima 6 août, Nagasaki 9 août, capitulation annoncée le 15 août,
reddition du 2 septembre, 50 à 60 millions de morts, San Francisco juin 1945. La section 4
est traitée avec la précision qu'elle exige : les fusillades de masse *avant* les chambres à
gaz, Wannsee présentée comme une **coordination administrative** et non comme la décision
d'exterminer, la collaboration de Vichy nommée.

### [GRAVE] La ziggourat du lot 4 : l'énoncé ne pose pas la question à laquelle les choix répondent, et l'explication répond à une autre question

- **Où** : `prisma/seed/culture-g/histoire-monde-4.ts:20` — `hm4-mesopotamie` ; à comparer avec `histoire-monde-2.ts:20` — `hm2-mesopotamie` et `heritage/.../lecons/histoire-monde/08.json` quiz 5
- **Texte** : `["À quoi servait une ziggourat mésopotamienne ?", ["Un temple à degrés mésopotamien", "Une tour de défense", "Un palais royal", "Un tombeau monumental"], 0, "Celle d'Ur est la mieux conservée aujourd'hui."]`
- **Problème** : trois défauts cumulés sur une seule question.
  1. L'énoncé demande **à quoi elle servait** ; les quatre choix sont des **définitions** d'édifices. La bonne réponse « Un temple à degrés mésopotamien » ne dit pas un usage, elle dit ce que c'est.
  2. La bonne réponse est **la seule à reprendre l'adjectif de l'énoncé** (« ziggourat *mésopotamienne* » → « temple à degrés *mésopotamien* »). C'est exactement le tell que la consigne demande de traquer : la formulation trahit la réponse.
  3. L'explication, « Celle d'Ur est la mieux conservée aujourd'hui », **n'explique rien de la réponse** — et elle donne mot pour mot la solution de l'autre question du corpus, `hm2-mesopotamie` : « Quelle ziggourat est la mieux conservée de Mésopotamie ? » → « Celle d'Ur ». Un apprenant qui fait le lot 4 avant le lot 2 a la réponse d'avance.
- **Correction proposée** : « Qu'est-ce qu'une ziggourat ? » — `["Une tour à degrés surmontée d'un sanctuaire", "Une tour de défense", "Un palais royal", "Un tombeau monumental"]`, explication : « Bâtie en briques crues avec un parement de briques cuites, elle dominait le temple de la cité. Le souvenir de ces tours a nourri le récit biblique de la tour de Babel. » (formulation reprise de la leçon 08, qui est juste et complète).

### [MOYEN] Question du cunéiforme dupliquée entre le seed et le cahier, à un mot près

- **Où** : `prisma/seed/culture-g/histoire-monde-2.ts:14` — `hm2-mesopotamie` ; `heritage/culture-g/data/histoire-monde.json:19`
- **Texte** : seed — « Quelle **civilisation** invente l'écriture cunéiforme vers 3300 avant notre ère ? » ; cahier — « Quel **peuple de Mésopotamie** invente l'écriture cunéiforme vers 3300 av. J.-C. ? »
- **Problème** : même fait, même date, même réponse (les Sumériens) ; seul le mot interrogatif change. S'y ajoute la question 1 de la leçon 08, qui porte sur le même fait sous un autre angle (« Quel est le premier système d'écriture connu ? »).
- **Correction proposée** : garder la version du cahier, plus précise, et remplacer celle du seed par une question sur le **support** ou l'**usage** (« Pourquoi l'écriture est-elle inventée en Mésopotamie ? » → la comptabilité des temples), qui n'est posée nulle part.

### [SAIN] Leçon 08 — Mésopotamie : la meilleure leçon du domaine

Contrôlé : période d'Ourouk 3400-2900, cunéiforme 3400-3200, Dynasties archaïques
2900-2340, Sargon v. 2340 et Naram-Sin, chute d'Akkad v. 2180, Our III 2112-2004,
paléo-babylonien 2004-1595, Hammurabi 1792-1750, sac hittite v. 1595, médio-assyrien
1400-1000, néo-assyrien 934-612, Teglath-Phalasar III 745-727, Sargon II 722-705,
Sennachérib 704-681, Assarhaddon 680-669, Assurbanipal 668-630, Ninive 612,
néo-babylonien 625-539, Cyrus 539. **Aucune erreur.** La leçon va plus loin que
l'exactitude : elle donne les dimensions de la stèle (2,25 m sur 79 cm), l'hiver de sa
découverte (1901-1902), la raison pour laquelle elle était à Suse (butin élamite), et
elle signale que **le découpage en 282 articles est une numérotation moderne du père
Scheil, absente de l'original** — un scrupule qu'aucune question du seed n'a. Les
sources Wikipédia sont déclarées en fin de fichier (présentes à partir de `08.json`).

### [GRAVE] L'effondrement démographique amérindien : quatre fois la même question, dont deux à choix identiques

- **Où** : `histoire-monde-2.ts:328` (`hm2-decouvertes`), `histoire-monde-3.ts:404` (`hm3-epidemies-histoire`), `histoire-monde-4.ts:208` (`hm4-amerique-precolombienne`), `heritage/.../lecons/histoire-monde/09.json` quiz 5
- **Texte** :
  - `hm2` — « Quelle fut la principale cause de l'effondrement démographique amérindien ? » `["Les maladies importées, contre lesquelles les populations n'étaient pas immunisées", "Les guerres de conquête", "Le travail forcé", "Les famines"]`
  - `hm4` — « Quelle cause a le plus contribué à l'effondrement démographique amérindien ? » `["Les maladies apportées par les Européens", "Les guerres de conquête", "Le travail forcé", "Les famines"]`
  - `hm3` — « Quelle maladie a le plus contribué à l'effondrement démographique amérindien ? » `["La variole", "La peste", "Le choléra", "La grippe"]`
  - leçon 09 — « Quelle a été la principale cause de l'effondrement démographique des populations amérindiennes après la conquête ? » → « Les épidémies apportées par les Européens »
- **Problème** : `hm2` et `hm4` ont **les trois mêmes distracteurs, dans le même ordre**, et une bonne réponse qui ne diffère que par sa formulation ; la question de la leçon est la même à la troisième reformulation près. Seule `hm3` change réellement d'objet (quelle maladie, et non quelle cause). Le constat de la session 1 signalait le couple `hm2`/`hm4` ; il faut y ajouter la leçon du cahier. Un apprenant qui parcourt le domaine répond quatre fois « les maladies ».
- **Correction proposée** : conserver `hm3` (la variole) et la question de la leçon 09, qui est celle dont l'explication est la plus complète (chiffres de 1519 et 1618, rôle des alliances tlaxcaltèques et de la guerre civile inca) ; supprimer `hm2` et `hm4`.

### [MINEUR] Deux graphies de Tawantinsuyu dans la même section

- **Où** : `09.json` — section 4
- **Texte** : titre de section — « Les Incas et le **Tahuantinsuyu** » ; première phrase — « l'Empire inca, appelé **Tawantinsuyu**, c'est-à-dire les quatre parties réunies ».
- **Problème** : les deux transcriptions sont attestées, mais les employer à trois mots d'écart, dans le titre et dans le texte qu'il coiffe, donne à l'apprenant l'impression de deux mots différents.
- **Correction proposée** : retenir « Tawantinsuyu » aux deux endroits.

### [SAIN] Leçon 09 — civilisations précolombiennes : exacte et honnête sur ses incertitudes

Contrôlé : aire maya ≈ 340 000 km², préclassique v. 2500-2000 av. J.-C., classique 250-900,
effondrement des basses terres 750-1050, Chichén Itzá et Uxmal, calendriers de 260 et
365 jours, Compte long, zéro et numération de position, Aztlan, fondation traditionnelle
en 1325, Triple Alliance v. 1430, Moctezuma II en 1502, Tawantinsuyu ≈ 4 500 km et
1,8 million de km², Cuzco à 3 400 m, Pachacutec 1438-1472, Qhapaq Ñan de 22 500 à
38 600 km, mit'a et quipus, Cortés en 1519 avec environ quatre cents hommes, Noche Triste
1er juillet 1520, chute de Tenochtitlan 13 août 1521, Cuauhtémoc exécuté en 1524, guerre
civile inca 1527-1532, conquête achevée en 1533, Vilcabamba 1572, Mayas jusqu'en 1696-1697.
**Aucune erreur.** Trois précautions à conserver : la fondation de 1325 est donnée « selon
la tradition » et confrontée aux fouilles (« environ 1300 ») ; les causes de l'effondrement
maya sont explicitement laissées ouvertes (« les historiens discutent encore ») ; et la
force de Cortés est attribuée aux alliances, aux maladies et à la guerre civile inca, non
à sa poignée de soldats.

### [GRAVE] Ce qui a été découvert en 1974, ce n'est pas « l'entrée du mausolée »

- **Où** : `10.json` — section « Qin Shi Huang et la naissance de l'empire » ; contredit `prisma/seed/culture-g/cours/histoire-monde.ts:533`
- **Texte** : leçon 10 — « Son mausolée, **dont l'entrée fut découverte en 1974** près de Xi'an, a livré la fameuse armée de terre cuite. » ; cours du seed — « **Découverte fortuitement en 1974 par des paysans creusant un puits**, elle n'a été fouillée que partiellement, et le tombeau lui-même n'a pas été ouvert. »
- **Problème** : erreur de fait. Le tumulus du mausolée de Qin Shi Huang n'a jamais été perdu — il est mentionné par les sources chinoises depuis l'Antiquité — et sa chambre funéraire n'a toujours pas été ouverte : il n'y a donc pas d'« entrée découverte en 1974 ». Ce que des paysans ont trouvé en creusant un puits en mars 1974, à environ 1,5 km à l'est du tumulus, ce sont les fosses de l'armée de terre cuite. La leçon transforme la découverte d'un dépôt annexe en ouverture d'un tombeau, et contredit sur ce point le cours du seed, qui est juste et plus prudent.
- **Correction proposée** : « L'armée de terre cuite, découverte fortuitement en 1974 par des paysans creusant un puits près de Xi'an, gardait les abords de son mausolée, dont la chambre funéraire n'a jamais été ouverte. »

### [SAIN] Leçon 10 — Chine impériale : le reste tient, dynastie par dynastie

Contrôlé : Qin 221-206 et mort de Qin Shi Huang en 210, Han 202 av. J.-C. - 220, Trois
Royaumes, Sui et Grand Canal à la fin du VIe siècle, Tang 618-907, Taizong 626-649,
Wu Zetian 690-705, An Lushan 755, Song à partir de 960, Yuan 1271-1368, Ming 1368-1644,
Zheng He 1405-1433 et ses sept expéditions, Qing 1644-1912, Kangxi 1661-1722, Yongzheng
1723-1735, Qianlong 1735-1796, treize millions de km², opium 1839-1842, Nankin 1842,
Taiping 1851-1864, Xinhai 1911, abdication 1912. Le tableau des dynasties et la frise du
« siècle des humiliations » sont cohérents avec le texte. Deux nuances justes à conserver :
les examens impériaux sont dits « **développés** » par les Tang (et non inventés), et
l'arrêt des expéditions de Zheng He est expliqué par un arbitrage stratégique (frontières
du nord contre marine lointaine) plutôt que par un repli inexpliqué.

### [GRAVE] Meiji : la même question posée deux fois dans le seed, avec le même distracteur

- **Où** : `prisma/seed/culture-g/histoire-monde.ts:150` (`hm-meiji-japon`) et `prisma/seed/culture-g/histoire-monde-4.ts:154` (`hm4-japon-histoire`) ; s'y ajoute `11.json` quiz 5
- **Texte** :
  - `hm-meiji-japon` — « Que désigne l'ère Meiji, commencée en 1868 ? » `["La restauration du pouvoir impérial et la modernisation", "Le retour du shogunat", "Une période de guerre civile", "L'isolement du pays"]`
  - `hm4-japon-histoire` — « Qu'est-ce que la restauration Meiji ? » `["Un retour du pouvoir à l'empereur en 1868, suivi d'une modernisation rapide", "Une restauration du shogunat", "Une réforme militaire", "Une révolution populaire"]`
  - leçon 11 — « Quel événement de 1868 met fin au shogunat et ouvre une période de modernisation accélérée du Japon ? » → « La restauration de Meiji »
- **Problème** : deux questions du seed disent littéralement la même chose, avec la même bonne réponse (pouvoir impérial + modernisation) et le même distracteur principal (le retour du shogunat). Dans les deux cas la bonne réponse est aussi la plus longue et la seule à porter une date. Le fait est en outre traité une troisième fois par la leçon du cahier. C'est le cas le plus net du recouvrement `hm-*` / `hm4-*` signalé en session 1 : ici il ne s'agit pas de deux questions voisines sur un même thème, mais du même item écrit deux fois.
- **Correction proposée** : supprimer la question de `hm4-japon-histoire` ; si le lot 4 doit garder un item sur Meiji, l'orienter vers ce que les autres ne demandent pas — l'abolition des fiefs en 1871 ou la révolte de Satsuma en 1877, tous deux traités par la leçon 11 et par aucune question.

### [SAIN] Leçon 11 — Japon : exacte, y compris sur les dates fines

Contrôlé : Kojiki 712, Nihon shoki 720, Heian-kyo 794, Heian jusqu'en 1185, Genpei et
Yoritomo 1185, Kamakura 1185-1333, Ashikaga 1336, guerre d'Onin 1467-1477, Sengoku
v. 1477-1573, Portugais 1543, Nobunaga (né 1534, Okehazama 1560, Kyoto 1568, mort 1582),
Hideyoshi mort en 1598, Ieyasu (né 1543, Sekigahara 1600, shogun 1603), Edo 1603-1868,
sakoku à partir de 1635, Dejima à Nagasaki, population de 12 à 30 millions, Perry 1853,
restauration 1868, fiefs abolis 1871, Satsuma 1877, constitution 1889, Diète 1890,
Shimonoseki 1895, Tsushima 1905, Corée 1910, mort de l'empereur le 30 juillet 1912.
**Aucune erreur.** Le tableau des époques et sa note (« De 1185 à 1868, l'empereur garde le
prestige religieux à Kyoto pendant que le shogun exerce le pouvoir réel ») donnent en deux
lignes la clé que quatre questions du seed tournent autour sans la formuler.

### [SAIN] Leçon 12 — Inde : exacte, et elle tranche deux points que le seed embrouille

Contrôlé : Chandragupta Maurya v. 321, Bindusara 297-273, Ashoka 273-232, Kalinga v. 260
avec les chiffres du treizième édit (150 000 déportés, 100 000 tués), Brihadratha v. 185,
Gupta (Chandragupta Ier 319-335, Samudragupta 335-375, Chandragupta II 375-415,
Kumaragupta Ier 415-455, Skandagupta 455-467), effondrement v. 550, Panipat 1526 et
Ibrahim Lodi, les six Grands Moghols avec leurs dates, djizîa abolie par Akbar et rétablie
par Aurangzeb en 1679, mort d'Aurangzeb 1707, cipayes 1857, Couronne 1858, Raj 1858-1947,
Victoria impératrice **en 1876**, 388 millions d'habitants en 1941, réseau ferré de 1 349 km
en 1860 à 25 495 km en 1880, Congrès 1885, retour de Gandhi 1915, loi de 1947. **Aucune
erreur.** Deux apports directement utiles aux constats déjà ouverts :
1. la leçon sépare correctement **1858** (administration directe) et **1876** (titre
   d'impératrice), là où le cours du seed `hm2-inde-histoire` enchaîne les deux comme
   simultanés — la formulation à reprendre est ici ;
2. elle décrit la partition sans avancer de chiffre de déplacés, échappant ainsi au conflit
   « dix millions / quinze millions » qui traverse six notions du seed. Si l'on doit
   harmoniser, c'est la prudence de cette leçon qu'il faut suivre.

### [SAIN] Leçon 13 — empires sahéliens : exacte, et prudente là où les sources le sont peu

Contrôlé : Ghana / Wagadou du IVe au XIIIe siècle, Koumbi Saleh, Al-Bakri au XIe siècle,
attaques almoravides v. 1070, absorption par le Mali au XIIIe siècle, Kirina v. 1235 et
Soundiata Keïta, Charte du Manden, Mansa Moussa 1312-1337, pèlerinage de 1324, absorption
par Ségou v. 1670, Sonni Ali Ber 1464-1492, Askia Mohammed 1493-1528, environ 1,4 million
de km², Tondibi 1591 et Yuder Pacha, pachalik de Tombouctou, fouilles de Koumbi Saleh
commencées en 1914. **Aucune erreur.** Trois précautions à conserver : le déclin du Ghana
est attribué à « plusieurs pressions convergentes » et non à la seule conquête almoravide
(que les travaux récents contestent) ; les dix tonnes d'or de Mansa Moussa sont données au
conditionnel (« il **aurait** emporté ») ; et la leçon prend soin de préciser que l'empire
du Ghana n'a rien à voir avec l'État actuel du même nom, confusion que rien d'autre dans le
domaine ne prévient. L'explication de la question 5 réfute explicitement son distracteur
(« Ces manuscrits sont copiés à la main : l'imprimerie n'y était pas employée »), ce qui est
la bonne pratique.

### [MOYEN] Les Vikings n'existent nulle part dans le seed

- **Où** : `14.json` (leçon entière) contre les 76 notions du seed — recherche de « viking » dans `histoire-monde{,-2,-3,-4}.ts`, `cours/histoire-monde.ts` et `histoire-monde.json` : **zéro occurrence**
- **Problème** : le domaine compte 742 questions de seed réparties sur 76 notions, et pas une seule ne porte sur les Scandinaves, sur le Danelaw, sur Saint-Clair-sur-Epte ou sur la découverte norroise de l'Amérique. La leçon 14 du cahier est le seul endroit du domaine où l'apprenant rencontre ce sujet — et comme les cinq questions de cette leçon sont les seules à en traiter, il ne le reverra jamais en révision libre. À l'inverse, plusieurs notions du seed (`hm3-monnaie-histoire`, `hm3-villes-histoire`, `hm3-memoire-histoire`, `hm3-droit-international`) n'ont aucune leçon correspondante. Le déséquilibre n'est pas une erreur de contenu, mais c'est un trou de couverture : le lot 4, entièrement redondant (constat le plus grave de ce rapport), aurait pu être ce chapitre-là.
- **Correction proposée** : si l'on supprime le lot 4 comme proposé, réemployer le budget de notions pour créer `hm4-vikings` à partir de la leçon 14, qui fournit déjà la matière exacte et vérifiée.

### [SAIN] Leçon 14 — Vikings : exacte, et exemplaire sur le traitement des sources

Contrôlé : Lindisfarne 793, Hastings 1066, Danelaw, Saint-Clair-sur-Epte 911 (Charles le
Simple, Rollon), Richard II premier duc vers l'an mille, Islande années 870, Groenland 986
et Erik le Rouge, Bjarni Herjolfsson 985-986, Leif Erikson et le Vinland vers l'an mille,
L'Anse aux Meadows, monnaie norvégienne de 1065-1080 trouvée dans le Maine, Thorfinn
Karlsefni, Skraelings, Varègues à Constantinople, navire d'Oseberg, Normandie conquise par
Philippe Auguste en 1204. **Aucune erreur.** La leçon fait deux choses que rien d'autre dans
le domaine ne fait : elle rappelle que « viking » désignait **une activité et non un
peuple**, appuyée sur les analyses génétiques récentes ; et elle date les sagas
(« rédigées au treizième siècle, soit environ deux cent cinquante ans après les événements,
**ce qui impose la prudence** ») avant de dire ce que l'archéologie confirme réellement.

### [MINEUR] Leçon 15 : des distracteurs qu'aucun apprenant ne peut choisir

- **Où** : `15.json` — quiz, questions 3 et 4
- **Texte** : q. 3, « Que proclame la Déclaration d'indépendance du 4 juillet 1776 ? » — distracteurs « Le rattachement des colonies à la France », « La création d'une monarchie américaine ». q. 4, « Quels sont les deux grands principes d'organisation de la Constitution américaine de 1787 ? » — distracteurs « La centralisation et **le parti unique** », « **La théocratie** et le droit coutumier ».
- **Problème** : la consigne demande des distracteurs « plausibles, et clairement faux à qui sait ». Ceux-ci sont faux à qui ne sait rien : « parti unique » est un anachronisme de plus d'un siècle, « théocratie » n'a jamais été en discussion à Philadelphie. Les deux questions se répondent par élimination sans rien connaître du sujet, ce qui est d'autant plus dommage que la leçon, elle, est d'une précision remarquable.
- **Correction proposée** : q. 4 — remplacer par des principes réellement débattus en 1787 : « La souveraineté des États et le vote par colonie », « Le suffrage universel et le mandat impératif ». q. 3 — « La convocation d'un Parlement colonial à Londres », « La suppression des assemblées coloniales ».

### [SAIN] Leçon 15 — révolution américaine : la leçon la plus précise du cahier

Contrôlé : Sugar Act 1764, Stamp Act 1765, Townshend 1767, Boston Tea Party 1773, lois
intolérables et premier Congrès continental 1774, premiers combats au printemps 1775,
Déclaration du 4 juillet 1776 (Jefferson), Saratoga 1777, engagement français 1778,
Yorktown 1781, traité de Paris 1783, convention ouverte le **25 mai 1787**, **55 délégués**
de **12 États** (Rhode Island absent), signature du **17 septembre** par **39 des 42**
présents, ratification du Delaware le **7 décembre 1787**, du New Hampshire — neuvième — le
**21 juin 1788**, entrée en vigueur le **4 mars 1789**, Déclaration des droits ratifiée le
**15 décembre 1791**, 27 amendements aujourd'hui. **Tout est exact, à la date près.** La
section 5 ne s'arrête pas à l'éloge : elle nomme les limites (esclavage maintenu et en
extension, mot évité par la Constitution, femmes exclues, terres amérindiennes conquises) et
relie la contradiction à la guerre de Sécession.

### [MOYEN] Nicolas II abdique « le 2 mars » six jours avant une révolution datée du 8 mars

- **Où** : `16.json` — section 1, frise de la section 2, et quiz question 1 (choix 0 et explication)
- **Texte** : « Le **23 février 1917** selon le calendrier julien alors en usage en Russie, **soit le 8 mars du calendrier grégorien**, des ouvrières manifestent à Petrograd […] Privé de tout appui, Nicolas II abdique **le 2 mars 1917** » ; choix de la question 1 : « L'abdication de Nicolas II **le 2 mars** ».
- **Problème** : le premier événement est daté dans les deux calendriers, le second dans le seul calendrier julien, sans le dire. Lu tel quel, le paragraphe fait abdiquer le tsar **six jours avant** la manifestation qui le renverse. La note du visuel (« Les premières dates suivent le calendrier julien ; entre parenthèses, le calendrier grégorien ») ne sauve que la frise ; ni le corps du texte ni le choix de QCM ne portent de marqueur. C'est exactement le cas d'une donnée exacte devenue trompeuse par omission d'un repère.
- **Correction proposée** : « Nicolas II abdique le 2 mars (15 mars) 1917 » dans le texte, et « L'abdication de Nicolas II le 2 mars julien, soit le 15 mars » dans le choix de QCM — ou, plus simple, dater toute la leçon dans un seul calendrier en signalant l'autre une fois.

### [SAIN] Leçon 16 — révolution russe et URSS : chiffrée au dixième près et juste

Contrôlé : 23 février (8 mars) 1917, Thèses d'avril, Kornilov en août, 25 octobre
(7 novembre), décrets sur la paix et sur la terre, Assemblée constituante dissoute, Armée
rouge le 28 janvier 1918, Brest-Litovsk mars 1918, guerre civile 1918-1921, NEP 1921-1929,
URSS le 30 décembre 1922, 22,4 millions de km² et onze fuseaux horaires, Staline secrétaire
général le 3 avril 1922, mort de Lénine en janvier 1924, exil de Trotski en 1929, premier
plan 1929-1933, deux millions de koulaks déportés, famine de 1932-1933 (4 à 10 millions),
Grande Terreur 1937-1938, vingt-sept millions de morts soviétiques, mort de Staline le
5 mars 1953, déstalinisation à partir de 1956, Brejnev 1964-1982, Gorbatchev 1985,
référendum de mars 1991 à **77,85 %**, putsch d'août, CEI le 8 décembre, démission le 25,
disparition de l'URSS le **26 décembre 1991**. **Aucune erreur.** C'est la seule source du
domaine à donner la date exacte de disparition de l'URSS ; les quatre notions du seed qui
posent la question se contentent de « décembre 1991 ».

### [GRAVE] De Gaulle n'est pas revenu au pouvoir en septembre 1958

- **Où** : `17.json` — section 5 « La guerre d'Algérie », et quiz question 5 (explication) — l'erreur est donc écrite deux fois
- **Texte** : section 5 — « **en septembre 1958, le retour au pouvoir de Charles de Gaulle** met fin à la Quatrième République et fonde la Cinquième » ; question 5 — « provoquant **en septembre 1958 le retour au pouvoir** de Charles de Gaulle et la fin de la Quatrième République ».
- **Problème** : erreur de date sur un fait central. De Gaulle revient au pouvoir en **mai-juin 1958** : appelé après le 13 mai, il est investi président du Conseil le **1er juin 1958**. Septembre 1958, c'est le référendum constitutionnel du 28 septembre ; la Quatrième République prend fin avec la promulgation de la Constitution le **4 octobre 1958**. La phrase agglomère trois moments distincts sous une seule date fausse pour les deux premiers. Un apprenant qui révise l'histoire de France dans le même Atelier trouvera ailleurs juin 1958.
- **Correction proposée** : « la crise emporte les institutions françaises : de Gaulle est investi président du Conseil le 1er juin 1958, la Constitution est approuvée par référendum le 28 septembre et la Cinquième République naît le 4 octobre. »

### [MINEUR] Le bilan algérien plafonné à 250 000 morts, sans dire que le chiffre est un enjeu de mémoire

- **Où** : `17.json` — section 5, visuel « Le bilan de la guerre d'Algérie », et explication de la question 5
- **Texte** : « de 140 000 à plus de 150 000 combattants algériens tués, **des estimations globales allant jusqu'à 250 000 morts** ».
- **Problème** : 250 000 correspond à l'estimation basse des historiens français (Ageron) ; d'autres travaux montent nettement plus haut, et l'Algérie retient officiellement un million et demi de morts. Présenter 250 000 comme le plafond des estimations donne un chiffre pour un débat. Le domaine possède pourtant une notion `hm3-memoire-histoire` faite exactement pour ce genre d'écart.
- **Correction proposée** : « les estimations globales vont de 250 000 à plusieurs centaines de milliers de morts ; l'Algérie retient officiellement un million et demi de victimes, chiffre que les historiens jugent très supérieur au bilan démographiquement mesurable. »

### [SAIN] Leçon 17 — décolonisations : le reste est juste et bien chiffré

Contrôlé : Inde 1947, Indonésie 1949, Diên Biên Phu 1954, Bandung **du 18 au 24 avril 1955**
avec **29 pays** (23 d'Asie, 6 d'Afrique, le Japon seul pays industrialisé), 1960 et ses
**17** indépendances, colonies portugaises 1974-1975, Toussaint rouge du **1er novembre
1954**, bataille d'Alger **du 7 janvier au 24 septembre 1957**, cessez-le-feu du **19 mars
1962**, indépendance proclamée le **3 juillet 1962**, sept ans et huit mois de guerre
(le calcul tombe juste), 25 600 soldats français tués. La section 1 énumère cinq causes
distinctes de l'effondrement des empires sans en privilégier une — c'est le traitement
multicausal que la consigne demande et que plusieurs questions du seed ne font pas.

### [MOYEN] La frise de la préhistoire fait commencer le Paléolithique après les premiers outils

- **Où** : `18.json` — frise « Les grandes bornes de la préhistoire », entrées 1 et 3
- **Texte** : « **3,3 Ma — Premiers outils taillés** — Site de Lomekwi, au Kenya : les plus anciens outils de pierre connus. » puis, deux entrées plus loin, « **1,76 Ma — Début du Paléolithique inférieur** — Les bifaces acheuléens accompagnent l'expansion d'Homo erectus. »
- **Problème** : la même frise place la fabrication des premiers outils **un million et demi d'années avant le début de l'âge de la pierre taillée**, ce qui est contradictoire — le Paléolithique inférieur s'ouvre avec les premiers outils, vers 3,3 ou 2,6 millions d'années selon la borne retenue. Ce qui commence en 1,76 Ma, c'est l'**Acheuléen**, la culture du biface, ce que dit d'ailleurs le texte de l'entrée. L'étiquette et son contenu ne parlent pas de la même chose.
- **Correction proposée** : « 1,76 Ma — Début de l'Acheuléen — Les bifaces accompagnent l'expansion d'Homo erectus. »

### [MINEUR] Le fossile de 2,8 Ma attribué à Homo habilis

- **Où** : `18.json` — frise, entrée 2 (« 2,8 Ma — Apparition du genre Homo — Les premiers fossiles **attribués à Homo habilis** en Afrique de l'Est ») et tableau (« Homo habilis, environ **2,8** à 1,5 Ma »)
- **Problème** : la mandibule de Ledi-Geraru, datée de 2,8 Ma, est rattachée au **genre** *Homo* sans attribution d'espèce ; *Homo habilis* est daté d'environ 2,4 à 1,65 Ma. Le titre de l'entrée est juste (« apparition du genre Homo »), son sous-titre va au-delà de ce que les fossiles permettent. La note du tableau (« Les datations extrêmes varient selon les découvertes et font régulièrement l'objet de révisions ») atténue, sans corriger.
- **Correction proposée** : « Les premiers fossiles attribués au genre Homo, en Afrique de l'Est ; l'espèce reste indéterminée. »

### [MOYEN] La préhistoire, comme les Vikings, est absente du seed

- **Où** : `18.json` contre les 76 notions du seed — « préhist », « Néandert », « Lascaux » : **zéro occurrence** dans `histoire-monde{,-2,-3,-4}.ts` et dans `cours/histoire-monde.ts` ; « Néolithique » une fois (`histoire-monde-3.ts`), « sapiens » une fois
- **Problème** : deuxième trou de couverture du même ordre que celui des Vikings, et plus étonnant encore : le domaine « Histoire du monde » ne pose aucune question sur les trois millions d'années qui précèdent l'écriture, alors qu'il en pose quatre sur la dissolution de l'URSS. Les cinq questions de la leçon 18 sont les seules du domaine sur ce sujet.
- **Correction proposée** : même remède que pour les Vikings — une notion `hm4-prehistoire` construite sur la leçon 18, qui est de loin la source la plus à jour de tout le domaine.

### [SAIN] Leçon 18 — préhistoire : la source la plus récente et la plus prudente du domaine

Contrôlé : Lomekwi 3,3 Ma, genre *Homo* 2,8 Ma, séparation d'avec les chimpanzés 7 Ma,
Lucy 3,2 Ma découverte en 1974, 600 cm³ contre 1 350 cm³, *Homo erectus* v. 2 Ma et sortie
d'Afrique (Géorgie, Chine, Java), feu occasionnel 1,5 Ma / maîtrisé v. 400 000 ans, Jebel
Irhoud v. 300 000 ans (redaté en 2017), Omo Kibish v. 233 000 ans, Misliya v. 185 000 ans,
Paléolithique supérieur v. 45 000 ans, Chauvet v. 36 000 ans, Lascaux 17 000-18 000 ans,
disparition de Néandertal v. 40 000 ans, 1,8 à 2,6 % d'ADN néandertalien, Australie
≥ 50 000 ans, grotte Mandrin v. 54 000 ans, plateau tibétain à 4 600 m entre 40 000 et
30 000 ans, Béringie 25 000-15 000 ans, 99,9 % de patrimoine génétique commun, onze foyers
de domestication, Jéricho et Çatal Höyük, fin du Paléolithique à 11 700 ans. **Tout est
exact et à jour** (les redatations de 2017 et de 2022 sont intégrées). Trois qualités rares :
la leçon explique que les bornes de la préhistoire dépendent de la question posée
(« Aucune de ces dates n'est fausse : elles répondent simplement à des questions
différentes ») ; elle démonte le mot « révolution » néolithique tout en le gardant ; et elle
refuse la cause unique pour la disparition de Néandertal (« sans qu'on sache trancher entre
concurrence, changements climatiques et absorption progressive »).

### [GRAVE] Deux leçons du même cahier datent différemment la conquête perse de l'Égypte

- **Où** : `19.json` — section 1 et explication de la question 1, contre `01.json` — section 5, frise « Les conquérants de l'Égypte » et choix 0 de la question 5
- **Texte** : leçon 19 — « Son fils Cambyse II achève l'ensemble en conquérant l'Égypte **entre 527 et 522** » (repris tel quel dans l'explication de la question 1) ; leçon 01 — « le Perse Cambyse ne conquière l'Égypte **en 525 avant Jésus-Christ** », frise « **525 av. J.-C.** — Conquête perse de Cambyse », et choix de QCM « La conquête de Cambyse **en 525 av. J.-C.** ».
- **Problème** : contradiction interne au cahier, sur cinq occurrences. Et c'est la leçon 19 qui a tort : Cambyse II règne de 530 à 522, et la conquête de l'Égypte se joue en **525** (bataille de Péluse, prise de Memphis). « Entre 527 et 522 » ne correspond ni à la campagne, ni au règne, ni à aucune chronologie courante. La gravité vient du fait qu'un apprenant peut rencontrer la question de la leçon 01, dont **525 est un choix**, après avoir lu la leçon 19.
- **Correction proposée** : leçon 19 — « Son fils Cambyse II achève l'ensemble en conquérant l'Égypte en 525, avant de mourir en 522. »

### [MOYEN] « Qui a fondé l'empire achéménide ? » : quatre choix identiques dans le seed et dans la leçon

- **Où** : `prisma/seed/culture-g/histoire-monde-4.ts:66` (`hm4-perse`) et `19.json` quiz 1
- **Texte** : seed — « Qui a fondé l'empire achéménide ? » `["Cyrus II", "Darius Ier", "Xerxès Ier", "Cambyse II"]` ; leçon — « Quel souverain fonde l'Empire perse achéménide et s'empare de Babylone en 539 av. J.-C. ? » `["Darius Ier", "Cyrus II", "Xerxès Ier", "Cambyse II"]`.
- **Problème** : **les quatre mêmes noms**, la même bonne réponse, à l'ordre près. La version de la leçon est meilleure (elle ancre la réponse sur un fait daté) ; celle du seed n'apporte rien.
- **Correction proposée** : supprimer la question de `hm4-perse` — d'autant que le même bloc contient déjà le distracteur fautif « Le mazdéisme tardif » signalé en session 1.

### [SAIN] Leçon 19 — Perse antique : exacte sur onze siècles, et propre là où le seed ne l'est pas

Contrôlé : Cyrus 559-530, Astyage v. 550, Crésus v. 546, Babylone 539, mort de Cyrus en 530
chez les Massagètes, Darius Ier 522-486, Behistun en trois langues et trois écritures,
une vingtaine de satrapies selon Hérodote, darique, Marathon 490, Gaugamèles 331,
assassinat de Darius III en 330, Arsace Ier v. 247, Mithridate Ier 171-138, Carrhes 53 et
la mort de Crassus, Ardachîr Ier et Artaban IV en 224, Ctésiphon capitale à partir de 226,
Valérien capturé en 260 près d'Édesse, Naqsh-e Rostam, Khosro Ier au VIe siècle, Khosro II
contre Héraclius, chute de Ctésiphon en 637, Nahavand 642, Yazdgard III assassiné à Merv en
651. Deux points remarquables : le **cylindre de Cyrus** est présenté comme « un texte de
propagande royale rédigé selon les codes babyloniens » et la lecture « première charte des
droits de l'homme » est explicitement qualifiée d'anachronique — la même prudence que le
cours du seed ; et la question 3 sur le zoroastrisme utilise des distracteurs réellement
distincts (manichéisme, bouddhisme, judaïsme) là où `hm4-perse` propose « Le mazdéisme
tardif », qui est un synonyme de la bonne réponse.

### [SAIN] Leçon 20 — Byzance et les croisades : rien à reprendre, et la meilleure page d'historiographie du domaine

Contrôlé : 330, 395 et le partage entre les fils de Théodose, Justinien 527-565,
Sainte-Sophie 532-537, peste des années 540, Héraclius et le passage au grec, thèmes, feu
grégeois, iconoclasme des VIIIe-IXe siècles, schisme de 1054, Cyrille et Méthode,
conversion de la Rus' de Kiev à la fin du Xe siècle, Manzikert 1071, Alexis Ier Comnène,
Clermont novembre 1095, massacres rhénans, Antioche 1098, Jérusalem juillet 1099, les
quatre États latins, deuxième croisade 1146-1149 prêchée par Bernard de Clairvaux, Saladin
1187, troisième croisade 1189-1192, Édesse 1144, Antioche 1268, Tripoli 1289,
Saint-Jean-d'Acre 1291, contrat vénitien de 85 000 marcs pour 51 000 réunis, Zara, Dandolo,
sac d'avril 1204, Empire latin jusqu'en 1261, Michel VIII Paléologue, siège du 6 avril au
29 mai 1453 (53 jours), Mehmed II à 21 ans, 80 000-100 000 assiégeants contre 7 000-8 000
défenseurs, canon d'Urbain de huit mètres, mort de Constantin XI, Yarmouk 636, Nicopolis
1396, Lépante 1571. **Aucune erreur.** Trois formulations à préserver telles quelles :
« Ses habitants ne se sont jamais appelés byzantins, mot forgé bien plus tard par les
historiens : ils se disaient Romains » ; Cyrille et Méthode « créent un alphabet, **à
l'origine du** cyrillique » (et non le cyrillique lui-même, ce qui est la formulation
exacte) ; et surtout « l'idée qu'elles auraient fait découvrir à l'Europe la science
orientale est **très exagérée** : l'Espagne et la Sicile ont bien davantage joué ce rôle ».
Le visuel « Deux regards sur les croisades » oppose explicitement le récit occidental
traditionnel et l'état actuel de la recherche — c'est le seul endroit du domaine où la
distinction entre le fait et son récit est enseignée pour elle-même.

### [SAIN] Leçon 21 — Renaissance et Réformes : exacte, y compris sur les dates de curie

Contrôlé : Gutenberg à Mayence v. 1450, chute de Constantinople 1453, 95 thèses du
**31 octobre 1517**, bulle *Exsurge Domine* de **juin 1520**, excommunication du **3 janvier
1521**, diète de Worms 1521, Nouveau Testament allemand 1522 et Ancien Testament 1534,
Zwingli à Zurich à partir de 1522, *Institution* de Calvin 1536 et installation à Genève en
1541, Acte de suprématie d'Henri VIII 1534, Copernic et Vésale la même année 1543, Tycho
Brahe dans les années 1570-1590, Kepler 1609-1619, Galilée 1610 et son procès de 1633,
concile de Trente 1545-1563, Compagnie de Jésus d'Ignace de Loyola, paix d'Augsbourg 1555,
guerre de Trente Ans du **23 mai 1618** (défenestration de Prague) au **24 octobre 1648**,
traités de Westphalie, Utrecht 1713, Tordesillas 1494, congrès de Vienne 1815, Nicée 325.
**Aucune erreur.** Trois précautions notables : la leçon refuse la rupture nette
(« Il ne faut pourtant pas croire à une rupture totale : le Moyen Âge connaissait déjà
l'Antiquité ») ; l'explication de la question 3 corrige d'avance le contresens le plus
fréquent sur Augsbourg (« Il ne s'agit donc nullement d'une liberté de conscience
individuelle […] le calvinisme, lui, n'est pas inclus dans l'accord ») ; et le bilan de la
guerre de Trente Ans distingue les pertes militaires chiffrables (700 000 à 800 000) de la
chute démographique allemande, donnée en fourchette et explicitement dite « très discutée
faute de recensements fiables ».

À noter pour le constat déjà ouvert sur Galien : cette leçon date le modèle de Ptolémée de
« **quatorze** siècles », ce qui est le bon ordre de grandeur et confirme que c'est le cours
du seed (« quinze siècles » pour Galien) qu'il faut corriger, non la question.

### [GRAVE] Mortalité du passage du milieu : cinquième valeur, et la correction proposée en session 1 est à revoir

- **Où** : `22.json` — section 3 et explication de la question 4 ; à rapprocher du constat « le cours et la question d'une même notion donnent deux chiffres différents » plus haut
- **Texte** : leçon 22 — « La mortalité moyenne des déportés est estimée **entre 11,9 et 13,25 %** », « soit environ **un déporté sur huit**, pour une traversée durant en moyenne **66 jours** » ; et « certaines bases de données recensant environ **douze millions et demi d'embarquements pour un peu moins de onze millions de débarquements** ».
- **Problème** : le domaine porte désormais **cinq** valeurs pour le même fait — « environ un dixième » (`hm2-afrique-precoloniale`), « dix à quinze pour cent » (`hm3-esclavage-abolitions`), « de l'ordre de quinze pour cent » (cours `hm3`), « fréquemment quinze pour cent » (`hm4-traite-esclavage`), « 11,9 à 13,25 % » (leçon 22). Surtout, **la correction proposée en session 1 — « aligner partout sur de l'ordre de quinze pour cent » — irait contre la seule source du corpus qui donne une fourchette sourcée et un dénominateur explicite.** La leçon 22 est la seule à fournir les deux termes du calcul (12,5 millions embarqués, un peu moins de 11 millions débarqués) ; l'écart correspond à environ 12-14 %, pas 15 %, et sûrement pas « un sixième » comme le laisse calculer le cours du seed (« environ douze millions […] dont près de deux millions moururent »).
- **Correction proposée** : retenir partout la formulation de la leçon 22 — « environ un déporté sur huit, soit de 12 à 13 % » — et corriger le cours de `hm3-esclavage-abolitions`, le cours de `hm2-afrique-precoloniale` (« près de deux millions » → « environ un million et demi ») et la question de `hm4-traite-esclavage`. La question de `hm2-afrique-precoloniale` (« environ un dixième »), que la session 1 jugeait la plus fautive, est en réalité la moins éloignée.

### [MOYEN] Le Danemark n'a pas interdit la traite en 1807

- **Où** : `22.json` — section 5 et frise « L'abolition, une conquête par étapes »
- **Texte** : « le Danemark et le Royaume-Uni interdisent la traite **en 1807** » ; frise — « **1807** — Interdiction de la traite — Par le Danemark et le Royaume-Uni ».
- **Problème** : les deux pays sont mis sous la même date, mais le Danemark légifère en **1792** avec effet au **1er janvier 1803** — ce qui en fait la première puissance européenne à interdire la traite, quatre ans avant le Royaume-Uni. Fusionner les deux dates supprime précisément le fait qui rend le Danemark intéressant, et l'erreur est répétée dans la frise.
- **Correction proposée** : « le Danemark interdit la traite par une loi de 1792, applicable en 1803, et le Royaume-Uni en 1807 » ; frise — « 1803 et 1807 — Interdiction de la traite — Le Danemark le premier, puis le Royaume-Uni ; le trafic illégal se poursuit. »

### [SAIN] Leçon 22 — traite atlantique : le reste est exact et remarquablement équilibré

Contrôlé : plantations portugaises de Madère et São Tomé, au moins 11 millions de déportés,
66 jours de traversée en moyenne, mortalité pré-embarquement de 23 à 50 %, mortalité des
équipages nantais près de 18 %, Rio premier port négrier devant Liverpool et Nantes,
Palmares, Dahomey, Ashanti, protestations du Kongo, insurrection du **22 août 1791**,
abolition locale d'août 1793, décret de la Convention du **4 février 1794**, rétablissement
de 1802, indépendance d'Haïti le **1er janvier 1804**, reconnaissance française de 1825
contre 150 millions de francs-or, abolition britannique de 1833 avec indemnisation des
**propriétaires**, France 1848, États-Unis 1865, Cuba 1886, Brésil 1888. Le visuel « Deux
erreurs symétriques sur la traite » est le passage le plus utile de tout le domaine : il
nomme les deux contresens opposés (les Européens capturaient eux-mêmes / les Africains se
sont vendus entre eux, donc responsabilité partagée à parts égales) et répond aux deux.
La leçon corrige aussi d'elle-même le schéma du triangle (« une grande partie du trafic est
directe, entre l'Afrique et les Amériques »), nuance absente des questions du seed.

### [SAIN] Leçon 23 — Chine contemporaine : exacte, et elle corrige d'elle-même le défaut de `hm3-chine-contemporaine`

Contrôlé : Wuchang 10 octobre 1911, Sun Yat-sen président provisoire le 1er janvier 1912,
abdication de Puyi le 12 février 1912, mort de Yuan Shikai en 1916, mouvement du 4 mai 1919,
PCC 1921, rupture de Shanghai 1927, Longue Marche 1934-1935 (370 jours, 12 500 km),
Mandchourie 1931 et guerre totale 1937-1945, incident de Xi'an 1936, proclamation du
1er octobre 1949, réforme agraire 1950-1953 pour environ 300 millions de paysans, Grand Bond
1958 et famine 1959-1962 (15 à 55 millions selon les estimations), Révolution culturelle
1966-1976, mort de Mao en septembre 1976, Deng en 1978, enfant unique à partir de 1979,
118 garçons pour 100 filles au milieu des années 2000, deux enfants en 2016 et trois en 2021,
Tiananmen juin 1989, OMC 2001, deuxième économie **en 2010**, 9,6 millions de km²,
1,4 milliard d'habitants, part des actifs de 70 % en 2011 à 65 % en 2018. **Aucune erreur.**

Point directement utile au constat déjà ouvert : là où `hm3-chine-contemporaine` demande
« Quelle place la Chine occupe-t-elle **aujourd'hui** dans l'économie mondiale ? » — un rang
sans date ni convention —, la leçon écrit « **En 2010**, il devient la deuxième économie de
la planète derrière les États-Unis ». C'est la formulation à reprendre. La leçon fait de même
sur les naissances évitées (« Le régime affirme avoir évité quatre cents millions de
naissances, **chiffre contesté, car la fécondité chutait déjà fortement avant 1979** ») et sur
la famine (« L'écart considérable entre ces chiffres s'explique par la fiabilité douteuse des
statistiques de l'époque et par le caractère politiquement sensible du sujet »).

## Constats — les 3 cours du cahier d'origine

`heritage/culture-g/data/histoire-monde.json`, clé `cours` : trois cours de cinq sections
chacun — « Rome, de la République à l'Empire », « Les grandes découvertes (XVe-XVIe siècles) »,
« La guerre froide (1947-1991) ». **Jamais lus jusqu'ici.**

### [MOYEN] La boussole arrive en Europe par les Arabes ici, par les Mongols dans le seed

- **Où** : cours « Les grandes découvertes », § « Les innovations qui rendent l'exploration possible » — contre `prisma/seed/culture-g/cours/histoire-monde.ts`, cours `hm2-mongols` § « L'héritage » et `hm-routes-echanges` § « La soie et le sel »
- **Texte** : cahier — « la boussole, **invention chinoise transmise par les Arabes**, qui indique le nord » ; seed — « La poudre, **la boussole**, l'imprimerie et le papier-monnaie **arrivent en Occident à cette période** » (la période mongole, XIIIe siècle).
- **Problème** : le corpus donne **deux canaux de transmission incompatibles** pour le même objet, et les deux sont présentés comme des faits établis. Le constat de session 1 signalait déjà que la version mongole est chronologiquement fausse (la boussole est attestée en Europe dès les années 1180-1190) ; la version arabe n'est pas mieux assurée — l'origine de la boussole européenne est débattue, une invention indépendante restant possible. Un apprenant qui lit les deux sources apprend deux histoires différentes du même objet.
- **Correction proposée** : dans les deux textes, s'en tenir à ce qui est établi : « la boussole, dont le principe est connu en Chine bien avant, est attestée en Europe dès la fin du XIIe siècle ; la voie exacte de sa transmission reste discutée. »

### [MINEUR] Cortés débarque avec 400 hommes dans la leçon 09, avec 500 dans le cours du cahier

- **Où** : cours « Les grandes découvertes », § « La conquête du Nouveau Monde » — « Hernán Cortés débarque au Mexique avec **environ 500 hommes** » ; contre `lecons/histoire-monde/09.json` § 5 — « Hernán Cortés débarque sur la côte mexicaine avec **environ quatre cents soldats** » (repris dans l'explication de la question 5 : « Cortés ne disposait que de quelques centaines d'hommes »).
- **Problème** : deux chiffres pour le même débarquement, dans le même fichier de matière. Les deux sont dans la fourchette des sources (Bernal Díaz compte 508 soldats, plus les marins), mais l'écart est visible pour qui révise les deux.
- **Correction proposée** : « environ cinq cents hommes, dont un peu plus de quatre cents soldats », aux deux endroits.

### [MINEUR] Douze millions de déportés « vers les Amériques » : embarqués et débarqués confondus

- **Où** : cours « Les grandes découvertes », § « Un monde transformé » — « **plus de douze millions d'Africains sont déportés comme esclaves vers les Amériques** » ; contre `lecons/histoire-monde/22.json`, qui distingue « environ **douze millions et demi d'embarquements** pour un peu moins de **onze millions de débarquements** ».
- **Problème** : la différence entre les deux chiffres, c'est précisément la mortalité de la traversée — le fait central du § « passage du milieu ». Écrire « douze millions déportés vers les Amériques » fait disparaître le million et demi de morts que la leçon 22 compte explicitement.
- **Correction proposée** : « plus de douze millions d'Africains sont embarqués, dont un peu moins de onze millions arrivent vivants aux Amériques ».

### [SAIN] Cours « Rome, de la République à l'Empire » : exact de bout en bout

Contrôlé : 753 av. J.-C. et la nuance archéologique (« des villages de bergers latins […] à un
gué stratégique du Tibre »), 509 et Tarquin le Superbe, Douze Tables v. 450, guerres puniques
264-241 / 218-201 / fin en 146, Cannes 216, Zama 202, Gaule 58-51, Spartacus 73-71, Gracques
133 et 121, Rubicon 49, Pharsale, dictature à vie en 44, ides de mars, Actium 31, titre
d'Auguste en 27, mort en 14, apogée sous Trajan, 50 à 70 millions d'habitants, édit de
Caracalla 212, édit de Milan 313, Constantinople 330, Théodose 380, partage de 395, sac de
Rome 410 puis 455, 476. **Aucune erreur.** La distinction entre la légende et l'archéologie est
posée dès la première phrase, et 476 est présentée comme une borne « conventionnelle ».

### [SAIN] Cours « La guerre froide » : exact, sauf la date de dissolution (voir ci-dessous)

Contrôlé : discours de Fulton en mars 1946, doctrine Truman et plan Marshall 1947, Jdanov et
Kominform, OTAN 1949, pacte de Varsovie 1955, premier essai nucléaire soviétique 1949, blocus
de Berlin de juin 1948 à mai 1949, création de la RFA et de la RDA en 1949, mur construit dans
la nuit du **12 au 13 août 1961**, « Ich bin ein Berliner » en 1963, chute du mur le 9 novembre
1989, Corée de juin 1950 à l'armistice de 1953 sur le 38e parallèle, crise de Cuba d'octobre
1962 et ses treize jours, engagement américain au Vietnam à partir de 1965 avec plus de
500 000 hommes, retrait de 1973, chute de Saïgon en 1975, Afghanistan 1979-1989, Spoutnik
1957, Gagarine 1961, Armstrong le 20 juillet 1969, Fischer-Spassky 1972, téléphone rouge,
SALT, Reagan et l'IDS, Gorbatchev 1985, Tchernobyl 1986, Solidarność et la Pologne, révolution
de velours, Ceaușescu, réunification allemande en octobre 1990, putsch d'août 1991, démission
du 25 décembre 1991. Le cours explique aussi *pourquoi* on dit « froide » (« ne s'affrontent
jamais directement ») tout en rappelant que ces conflits sont « chauds pour les peuples
concernés » — nuance que les questions du seed ne portent pas.

---

## Ce que la seconde passe a ajouté

La passe 2 a porté d'abord sur ce que la session 1 désignait comme sa zone la plus faible :
la **fin** de `histoire-monde-4.ts` et de `histoire-monde-3.ts`. Elle s'est ensuite faite en
croisant systématiquement chaque fait daté ou chiffré du seed avec la leçon du cahier qui
traite le même sujet — croisement impossible en session 1, puisque les leçons n'étaient pas
lues. Voici ce qu'elle a trouvé.

### [GRAVE] (passe 2) L'Indonésie : la question du seed a pour bonne réponse une date que la leçon ne donne jamais, et pour distracteur celle qu'elle donne

- **Où** : `prisma/seed/culture-g/histoire-monde-4.ts` — `hm4-decolonisations` ; contre `heritage/.../lecons/histoire-monde/17.json` § 2 et frise
- **Texte** : question — « Quand l'Indonésie a-t-elle proclamé son indépendance ? » `["En 1945", "En 1949", "En 1950", "En 1947"]`, **bonne = 1945**, explication « Les Pays-Bas ne la reconnaissent qu'en 1949, après un conflit. » ; leçon 17 — « les nationalistes conduits par Soekarno proclament la république et l'emportent après plusieurs années d'affrontements contre les Pays-Bas, **qui reconnaissent l'indépendance en 1949** », frise — « **1949** — Les Pays-Bas reconnaissent l'indépendance de l'Indonésie ».
- **Problème** : **1945 n'apparaît nulle part dans la leçon.** Un apprenant qui a lu la leçon 17, la seule matière du domaine sur ce point, ne connaît qu'une date pour l'Indonésie : 1949. Or 1949 est le distracteur immédiatement suivant. La question ne sanctionne pas l'ignorance, elle sanctionne d'avoir lu le cours. C'est le cas le plus net de rupture cours ↔ question de tout le domaine, et il n'était pas détectable sans avoir lu les leçons.
- **Correction proposée** : compléter la leçon 17 — « Soekarno proclame l'indépendance **le 17 août 1945**, deux jours après la capitulation japonaise ; les Pays-Bas ne la reconnaissent qu'en 1949, après quatre ans de guerre » — et reformuler la question du seed pour qu'elle distingue explicitement les deux dates : « Quelle date sépare la proclamation de l'indépendance indonésienne de sa reconnaissance par les Pays-Bas ? »

### [MOYEN] (passe 2) Deux questions de la même notion ont la boussole pour réponse

- **Où** : `histoire-monde-4.ts` — `hm4-histoire-sciences-monde`, questions 3 et 4 (consécutives)
- **Texte** : q. 3 — « Quelle invention chinoise a transformé la navigation ? » → « **La boussole** » ; q. 4 — « Quelles sont les quatre grandes inventions traditionnellement attribuées à la Chine ? » → « Papier, imprimerie, poudre et **boussole** ».
- **Problème** : la réponse de la question 3 est contenue dans la réponse de la question 4, posée juste après. Qui répond à l'une a la seconde. Doublon interne à une notion, au sens du point 4 de la consigne.
- **Correction proposée** : supprimer la question 3 — la question 4 couvre le fait et son explication est meilleure (« Cette liste est une construction historiographique, mais chacune est bien attestée »).

### [MOYEN] (passe 2) « Remarquablement stable » : la part des migrants a augmenté de moitié en cinquante ans

- **Où** : `histoire-monde-4.ts` — `hm4-migrations-histoire`, dernière question chiffrée
- **Texte** : « Quelle part de la population mondiale vit hors de son pays de naissance ? » → « Environ trois à quatre pour cent », explication : « **Cette proportion est remarquablement stable sur le long terme.** »
- **Problème** : le chiffre est juste (environ 3,6 % aujourd'hui), mais le commentaire ne l'est pas : la part était d'environ 2,3 % en 1970 et de 3,6 % en 2020, soit une hausse de plus de moitié en valeur relative. « Remarquablement stable » enseigne le contraire de ce que montrent les séries, et c'est précisément le genre d'affirmation qu'un apprenant retient parce qu'elle contredit son intuition. Exact sur le chiffre, faux sur la tendance.
- **Correction proposée** : « Cette proportion reste faible, mais elle a augmenté de moitié depuis 1970, où elle était d'environ deux et demi pour cent. »

### [MOYEN] (passe 2) Un distracteur que le domaine enseigne lui-même comme vrai : les conventions de Genève et les réfugiés

- **Où** : `histoire-monde-3.ts` — `hm3-droit-international` ; contre `histoire-monde-4.ts` — `hm4-migrations-histoire` et `histoire-monde-3.ts` — `hm3-migrations-histoire`
- **Texte** : `hm3-droit-international` — « Que régissent les conventions de Genève ? » `["Le droit humanitaire applicable aux conflits armés", "Le droit de la mer", "**Le droit des réfugiés seul**", "Le droit diplomatique"]` ; `hm4-migrations-histoire` — « Qu'est-ce que le statut de réfugié ? » → « Une protection définie par la **convention de Genève de 1951** ».
- **Problème** : le domaine apprend à l'apprenant, dans une notion, que la convention de Genève définit le statut de réfugié, puis lui présente cette même idée comme un distracteur dans une autre. Seul le mot « seul » rend le choix faux — c'est-à-dire le procédé de bricolage déjà signalé en session 1 (« Tours seule », « Zacatecas seul », « Les Bardi seuls »…), employé ici sur un contenu que le corpus a lui-même enseigné. La collision n'est pas une coïncidence : les conventions de 1949 (droit humanitaire) et celle de 1951 (réfugiés) portent réellement le même nom de ville.
- **Correction proposée** : lever l'ambiguïté dans l'énoncé plutôt que dans le choix — « Que régissent les **quatre conventions de Genève de 1949** ? », et remplacer le distracteur par « Le droit de l'espace ». Ajouter dans l'explication : « À ne pas confondre avec la convention de Genève de 1951, qui définit le statut de réfugié. »

### [GRAVE] (passe 2) Deux questions consécutives qui se donnent mutuellement la réponse : Cortés et Pizarro

- **Où** : `prisma/seed/culture-g/histoire-monde.ts:100` et `:102` — `hm-espagne-or`, questions voisines dans la même notion
- **Texte** :
  - « Quel conquistador abat l'Empire **aztèque** ? » `["Hernán Cortés", "**Francisco Pizarro**", "Vasco de Balboa", "Pedro de Alvarado"]`
  - « Quel conquistador abat l'Empire **inca** ? » `["Francisco Pizarro", "**Hernán Cortés**", "Diego de Almagro", "Gonzalo Jiménez"]`
- **Problème** : chacune des deux questions a pour premier distracteur la bonne réponse de l'autre. Elles se répondent l'une l'autre : qui sait que Cortés a abattu les Aztèques élimine Cortés de la seconde, et réciproquement. Comme elles sont **consécutives dans la même notion**, l'apprenant les rencontre à la suite. Ce n'est pas un doublon de contenu — les deux faits sont distincts et méritent d'être sus — mais un défaut de construction qui annule la difficulté des deux.
- **Et le défaut est présent deux fois** : `histoire-monde-4.ts:326` et `:328` (`hm4-decouvertes`) rejouent exactement le même couple — « Qui a conquis l'empire aztèque ? » `["Hernán Cortés", "**Francisco Pizarro**", "Diego de Almagro", "Pedro de Alvarado"]` et « Qui a conquis l'empire inca ? » `["Francisco Pizarro", "**Hernán Cortés**", "Vasco Núñez de Balboa", "Diego de Almagro"]`. Le domaine pose donc **quatre fois** la question du conquérant aztèque ou inca, en deux paires dont chacune se résout elle-même.
- **Correction proposée** : supprimer la paire de `hm4-decouvertes` (redondante avec `hm-espagne-or`) ; dans `hm-espagne-or`, garder les deux questions et retirer le conquistador de l'autre de chaque liste : aztèque → `["Hernán Cortés", "Pánfilo de Narváez", "Vasco de Balboa", "Pedro de Alvarado"]` ; inca → `["Francisco Pizarro", "Diego de Almagro", "Sebastián de Belalcázar", "Gonzalo Jiménez"]`.

### [GRAVE] (passe 2) Le bilan de 14-18 : l'énoncé ne dit pas « militaires », et le distracteur est défendable

- **Où** : `prisma/seed/culture-g/histoire-monde-3.ts:30` — `hm3-premiere-guerre`
- **Texte** : « Quel **bilan humain** la Première Guerre mondiale laisse-t-elle ? » `["Environ dix millions de militaires tués", "Environ trois millions", "**Environ vingt millions**", "Environ cinq cent mille"]`, bonne = 0.
- **Problème** : l'énoncé demande le **bilan humain**, sans restriction. Or le bilan humain complet de 1914-1918 est d'environ 15 à 20 millions de morts (9 à 10 millions de militaires plus 6 à 13 millions de civils) : le distracteur « environ vingt millions » est donc défendable, et même plus juste que la bonne réponse pour qui lit l'énoncé littéralement. Seule la bonne réponse porte la précision « de militaires » — ce qui la trahit doublement, puisqu'elle est aussi la seule qualifiée.
  C'est également la source du constat déjà ouvert sur « cinq fois plus de morts que la Première » : la question voisine `hm3-seconde-guerre:82` répond « entre cinquante et soixante-dix millions **de morts** » (tous confondus). Le rapport de cinq ne tient que parce que les deux questions comptent des choses différentes, dans le même fichier, à cinquante lignes d'écart.
- **Correction proposée** : « Combien de **militaires** la Première Guerre mondiale a-t-elle tués ? » `["Environ dix millions", "Environ trois millions", "Environ trente millions", "Environ cinq cent mille"]`, et ajouter à l'explication : « Avec les victimes civiles, le bilan total approche quinze à vingt millions de morts. » La phrase-repère de `hm3-seconde-guerre` devient alors cohérente en « environ trois fois plus de morts que la Première ».

### [GRAVE] (passe 2) La chute du mur : trois fois la même question, et la version du lot 4 est la moins bien construite

- **Où** : `histoire-monde.ts:260` (`hm-chute-urss`), `histoire-monde-4.ts:462` (`hm4-guerre-froide-2`), `heritage/culture-g/data/histoire-monde.json:679`
- **Texte** :
  - `hm-chute-urss` — « Quand le mur de Berlin tombe-t-il ? » `["Le 9 novembre 1989", "Le 3 octobre 1990", "Le 12 juin 1987", "Le 25 décembre 1991"]`
  - `hm4-guerre-froide-2` — « Quand le mur de Berlin est-il tombé ? » `["Le 9 novembre 1989", "**En octobre 1989**", "**En décembre 1989**", "**En 1990**"]`
  - cahier — « À quelle date le mur de Berlin tombe-t-il ? »
- **Problème** : deux défauts cumulés. D'abord la question est posée **trois fois** dans le domaine, et les deux versions du seed sont identiques au verbe près — c'est le seul couple de tout le corpus à atteindre une similitude de 100 % sur l'énoncé. Ensuite, la version du lot 4 est mal bâtie : la bonne réponse est **la seule à porter un jour précis**, les trois distracteurs se contentant d'un mois ou d'une année. C'est exactement le tell que la consigne demande de traquer (« la seule précise »). La version de `hm-chute-urss`, elle, aligne quatre dates complètes et fait de vrais choix : c'est celle à garder.
- **Correction proposée** : supprimer la question de `hm4-guerre-froide-2` et conserver celle de `hm-chute-urss`.

### Comptage de la passe 2

922 énoncés ont été extraits de l'ensemble du périmètre (742 du seed, 66 du cahier,
114 des 23 leçons) et comparés deux à deux. **66 couples** dépassent le seuil de recouvrement
lexical retenu, dont un à 100 % (les deux formulations de la chute du mur). Chaque couple
signalé a été relu à la main — le script n'a servi qu'à repérer les candidats. Le décompte
final des faits posés trois fois ou davantage : la dissolution de l'URSS (**5** avec la
leçon 16), le précepteur d'Alexandre (**4**), la cause de l'effondrement démographique
amérindien (**4**), le conquérant aztèque puis inca (**4**, en deux paires auto-résolues), la
chute du mur (**3**), Meiji (**3**), la ziggourat (**3**), le cunéiforme (**3**).

### Ce que la passe 2 n'a pas remis en cause

Les constats de la session 1 sur les erreurs de fait tiennent tous après vérification : Mau
Mau, Amritsar / Jallianwala, ALENA signé en 1992, Tours / Poitiers, mazdéisme, plan Cerdà,
Diên Biên Phu, Charte d'Athènes, Victoria 1876. Deux **corrections proposées** en session 1
sont en revanche à revoir, la lecture des leçons ayant fourni la source qui manquait :

- la hauteur de Khéops — c'est **146 m** qu'il faut retenir (leçon 01, seed et cours
  concordent), pas 147 comme le proposait la session 1 ;
- la mortalité du passage du milieu — c'est **12 à 13 %** (leçon 22, seule source à donner
  embarqués et débarqués), pas « de l'ordre de quinze pour cent ».

Ces deux points sont détaillés plus haut. Une correction fondée sur les notes de la session 1
seule aurait introduit deux erreurs.

## Ce qui est sain

Les cours du seed sont d'une qualité nettement supérieure aux questions : ils nuancent (Poitiers « razzia et non entreprise de conquête », la Reconquista comme « construction tardive », les causes multiples de la chute de Rome, le cylindre de Cyrus qualifié d'anachronisme, la mémoire musulmane des croisades réintroduite au XIXe siècle), ils datent, et ils vont souvent chercher le détail vérifiable et juste — papyrus de Merer retrouvé en 2013, stèle de Hammurabi retrouvée à Suse en 1901, emprunt britannique d'indemnisation des propriétaires soldé en 2015, archives de l'opération Condor découvertes au Paraguay en 1992. Le cahier d'origine (`heritage/.../histoire-monde.json`), sur ses 66 questions lues, est le morceau le plus solide du domaine : explications longues, dates précises et exactes, idées reçues explicitement démontées (la circumnavigation de Magellan « ne démontre pas la rotondité de la Terre », la Grande Muraille « n'est pas visible à l'œil nu depuis la Lune », la grippe de 1918 « n'est pas née en Espagne »). Je n'y ai relevé aucune erreur de fait. Le problème du domaine n'est pas l'exactitude : c'est la redondance massive du seed, et le fait que les questions n'aient pas été relues contre leurs propres cours.

**Ajout de la session 2.** Les 23 leçons du cahier sont la meilleure matière du domaine, et de
loin. Sur 115 sections lues et 114 questions, **quinze leçons sur vingt-trois n'appellent
aucune correction** — dates, chiffres et attributions vérifiés un par un. Trois d'entre elles
méritent d'être citées : la leçon 08 (Mésopotamie), qui donne les dimensions de la stèle de
Hammurabi et signale que son découpage en 282 articles est une numérotation moderne du père
Scheil ; la leçon 18 (préhistoire), qui intègre les redatations de 2017 et de 2022 et explique
que les bornes de la période dépendent de la question posée ; la leçon 20 (Byzance et
croisades), dont le visuel « Deux regards sur les croisades » oppose explicitement le récit
traditionnel et l'état de la recherche. Plusieurs leçons corrigent d'elles-mêmes des défauts
du seed : la leçon 23 date la deuxième place économique chinoise (« en 2010 ») là où le seed
écrit « aujourd'hui » ; la leçon 12 sépare 1858 et 1876 là où le cours du seed les colle ; la
leçon 19 emploie des distracteurs propres là où `hm4-perse` propose un synonyme de la bonne
réponse. Les trois cours du cahier (Rome, grandes découvertes, guerre froide) sont exacts eux
aussi, à trois écarts de détail près.

Le déséquilibre est donc net et il est l'inverse de ce qu'on attendrait : **le corpus le plus
fiable est celui qui a le moins de questions** (114 contre 742), et les deux sujets que le
seed ignore complètement — les Vikings et la préhistoire — sont couverts par deux des
meilleures leçons du cahier. Si un arbitrage doit être fait, c'est vers le cahier qu'il faut
harmoniser, pas l'inverse.
