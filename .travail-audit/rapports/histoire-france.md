# Histoire de France

> ÉTAT : passe 1 en cours. Lus : les 4 fichiers de questions (75 notions, 730 q.), `fusions.ts`,
> `cours/histoire-france.ts` en entier (53 cours), et `heritage/culture-g/data/histoire-france.json`
> (60 questions, 3 cours). Reste : `heritage/culture-g/data/lecons/histoire-france/*.json`
> (17 leçons, 85 sections, 85 quiz), puis passe 2 intégrale.

## Ce que j'ai lu

- `prisma/seed/culture-g/histoire-france.ts` — 13 notions, 127 questions, lues intégralement.
- `prisma/seed/culture-g/histoire-france-2.ts` — 20 notions, 190 questions, lues intégralement.
- `prisma/seed/culture-g/histoire-france-3.ts` — 19 notions, 189 questions, lues intégralement.
- `prisma/seed/culture-g/histoire-france-4.ts` — 23 notions, 224 questions, lues intégralement.

Total à ce stade : **75 notions, 730 questions**.

---

## Constats

### [GRAVE] L'astuce des croisades contredit une question de sa propre notion

- **Où** : `prisma/seed/culture-g/histoire-france.ts:71` — `cg-neuf-hf-croisades-france`
- **Texte** : « Deux rois de France seulement ont pris la croix : Louis VII et Louis IX. »
- **Problème** : faux, et contredit une question située quatre lignes plus bas dans la même
  notion : « Quel roi de France participe à la troisième croisade avec Richard Cœur de Lion ? »
  → *Philippe Auguste*. Philippe Auguste a bien pris la croix (1190-1191), Louis VIII a mené
  la croisade contre les albigeois en 1226. L'apprenant lit l'astuce, puis répond à une
  question que l'astuce lui dit impossible.
- **Correction proposée** : « Trois rois ont pris la croix pour l'Orient : Louis VII,
  Philippe Auguste et Louis IX. Retenez qui fait quoi, et le rôle des ordres militaires. »

### [GRAVE] Écart faux entre le vote des femmes en France et en Nouvelle-Zélande

- **Où** : `prisma/seed/culture-g/histoire-france.ts:300` — `cg-neuf-hf-femmes-france`
- **Texte** : « La France accorde le droit de vote aux femmes en 1944, soit vingt-six ans après
  le Royaume-Uni et soixante-et-onze ans après la Nouvelle-Zélande. »
- **Problème** : la Nouvelle-Zélande accorde le vote aux femmes en **1893**. 1944 − 1893 = **51**,
  pas 71. « Soixante-et-onze ans » renverrait à 1873, où rien ne s'est passé. L'écart avec le
  Royaume-Uni (1918) est bien de 26 ans : le premier chiffre est juste, ce qui rend le second
  d'autant plus crédible — et d'autant plus dangereux.
- **Correction proposée** : « … soit vingt-six ans après le Royaume-Uni et cinquante et un ans
  après la Nouvelle-Zélande. »

### [GRAVE] Simone Veil au Panthéon : le rang est faux

- **Où** : `prisma/seed/culture-g/histoire-france.ts:315` — `cg-neuf-hf-femmes-france`
- **Texte** : « Elle y est inhumée avec son mari. Elle est la cinquième femme à y entrer pour
  ses mérites propres. »
- **Problème** : avant elle, entrent au Panthéon pour leurs mérites propres Marie Curie (1995),
  Germaine Tillion et Geneviève de Gaulle-Anthonioz (2015) : Simone Veil est la **quatrième**.
  Elle est la cinquième femme à y reposer, toutes causes confondues, parce que Sophie Berthelot
  (1907) y a été inhumée auprès de son mari et non pour son œuvre. Les deux comptes ont été
  mélangés en un seul.
- **Correction proposée** : « Elle y est inhumée avec son mari. Elle est la cinquième femme à
  y reposer, et la quatrième à y entrer pour ses mérites propres. »

### [GRAVE] Phrase absurde sur l'élection de Valéry Giscard d'Estaing

- **Où** : `prisma/seed/culture-g/histoire-france.ts:275` — `cg-neuf-hf-france-1970-2000`
- **Texte** : « Élu à trente-huit ans d'écart avec son prédécesseur, il l'emporte de justesse
  contre François Mitterrand. »
- **Problème** : la phrase ne veut rien dire et aucune lecture ne la sauve. VGE a 48 ans en
  1974 ; l'écart d'âge avec Pompidou (né en 1911) est de 15 ans ; l'écart entre les deux
  élections est de 5 ans. « Trente-huit » ne correspond à rien. Seule la seconde moitié de la
  phrase est exacte (50,81 % contre 49,19 %).
- **Correction proposée** : « Élu à quarante-huit ans, il l'emporte de justesse contre
  François Mitterrand, avec moins d'un point d'écart. »

### [GRAVE] La médaille Fields présentée comme un prix français

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts` — `cg-neuf-hf3-sciences-france`
- **Texte** : énoncé « Quel prix scientifique **français** a récompensé de nombreux
  mathématiciens ? » — bonne réponse « La médaille Fields, souvent attribuée à des Français ».
- **Problème** : la médaille Fields n'est pas française. Elle est créée par le Canadien
  John Charles Fields et décernée par l'Union mathématique internationale. La bonne réponse
  contredit donc l'énoncé, et sa propre formulation le reconnaît à demi-mot (« souvent attribuée
  à des Français » — donc pas française). Les trois distracteurs sont par ailleurs inexistants
  (« prix Nobel de mathématiques », « prix Abel français ») : aucune des quatre propositions ne
  répond à la question posée.
- **Correction proposée** : reformuler l'énoncé — « Quelle distinction internationale les
  mathématiciens français ont-ils souvent reçue ? » — et garder l'explication : « La France est
  le deuxième pays par le nombre de médailles Fields, derrière les États-Unis. »

### [GRAVE] Cathédrale de Beauvais : la question dit « nef », la réponse dit « chœur »

- **Où** : `prisma/seed/culture-g/histoire-france-4.ts` — `cg-neuf-hf4-cathedrales`
- **Texte** : « Quelle cathédrale possède la **nef** gothique la plus haute de France ? » →
  « Beauvais, dont le **chœur** culmine à plus de quarante-huit mètres ».
- **Problème** : Beauvais n'a jamais eu de nef — le chantier s'est arrêté avant. La cathédrale
  détient le record du chœur gothique le plus haut (48,5 m), pas de la nef. La nef achevée la
  plus haute de France est celle d'Amiens (42,3 m), qui figure ici en distracteur : le
  distracteur est la vraie réponse à la question telle qu'elle est posée.
- **Correction proposée** : « Quelle cathédrale possède le chœur gothique le plus haut de
  France ? » → « Beauvais, dont le chœur culmine à 48,5 mètres. » Explication : « Sa nef n'a
  jamais été achevée : le chantier a connu plusieurs effondrements. »

### [GRAVE] Trois questions dont l'énoncé ne correspond pas aux propositions

Même défaut de fabrication répété : l'énoncé demande *qui* ou *contre qui* ou *comment*, et
les quatre propositions sont des **définitions**. Aucune ne répond à la question posée ; on ne
peut trancher qu'en devinant l'intention du rédacteur.

- **Où** : `prisma/seed/culture-g/histoire-france-4.ts` — `cg-neuf-hf4-napoleon`
  - **Texte** : « **Contre qui** le Blocus continental était-il dirigé ? » → « Une fermeture du
    continent au commerce britannique ».
  - **Correction proposée** : « Qu'est-ce que le Blocus continental ? »
- **Où** : `prisma/seed/culture-g/histoire-france-4.ts` — `cg-neuf-hf4-restauration`
  - **Texte** : « **Qui** pouvait voter sous un régime de suffrage censitaire ? » → « Un droit
    de vote réservé aux plus imposés ».
  - **Correction proposée** : « Qui pouvait voter sous un régime de suffrage censitaire ? » →
    « Les seuls citoyens payant un montant d'impôt suffisant ».
- **Où** : `prisma/seed/culture-g/histoire-france-4.ts` — `cg-neuf-hf4-richelieu-mazarin`
  - **Texte** : « **Comment** la monarchie tirait-elle parti de la vénalité des offices ? » →
    « La vente de charges publiques par la monarchie ».
  - **Correction proposée** : « Comment la monarchie tirait-elle parti de la vénalité des
    offices ? » → « En vendant les charges publiques contre un versement immédiat ».

### [GRAVE] Le cours des croisades se contredit dans le même paragraphe

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:37` — `hf-croisades-france`, section
  « Les rois croisés »
- **Texte** : « **Deux rois de France seulement ont pris la croix.** Louis VII participe à la
  deuxième croisade en 1147, expédition coûteuse et sans résultat. **Philippe Auguste** part pour
  la troisième croisade avec Richard Cœur de Lion […]. **Louis IX**, futur Saint Louis, s'engage
  bien davantage. »
- **Problème** : le paragraphe annonce deux rois puis en nomme trois, dans les trois phrases qui
  suivent immédiatement. La même erreur figure dans l'astuce de la notion
  (`histoire-france.ts:71`). C'est donc l'erreur qui apparaît d'abord à l'apprenant, avant le
  cours qui la dément et la question qui la dément encore.
- **Correction proposée** : « Trois rois de France ont pris la croix pour l'Orient. »

### [GRAVE] « Marie Curie, la seule personne à avoir reçu deux prix Nobel scientifiques »

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:145` — `hf-femmes-france`, section
  « Des figures »
- **Texte** : « Marie Curie est la seule personne à avoir reçu deux prix Nobel scientifiques,
  en physique en 1903 puis en chimie en 1911. »
- **Problème** : faux. John Bardeen a reçu deux Nobel de physique (1956 et 1972), Frederick
  Sanger deux Nobel de chimie (1958 et 1980) — quatre prix scientifiques pour deux hommes. Ce
  qui est unique à Marie Curie, c'est d'avoir été distinguée dans **deux sciences différentes**.
  Les questions correspondantes, elles, restent justes (« Quelle femme reçoit deux prix Nobel
  scientifiques ? », « une performance jamais renouvelée par une femme ») : c'est le cours seul
  qui déborde.
- **Correction proposée** : « Marie Curie est la seule personne à avoir reçu le prix Nobel dans
  deux disciplines scientifiques différentes, en physique en 1903 puis en chimie en 1911. »

### [GRAVE] « La France est le dernier pays d'Europe occidentale à abolir la peine de mort »

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:133` — `hf-france-1970-2000`,
  section « 1981 et l'alternance »
- **Texte** : « La France est le dernier pays d'Europe occidentale à l'abolir. »
- **Problème** : faux, et le cours contredit sa propre question. La Belgique n'abolit en droit
  qu'en 1996, l'Irlande en 1990, le Royaume-Uni ne supprime les derniers cas qu'en 1998,
  l'Espagne abolit pour les crimes militaires en 1995. La question de la notion écrit
  correctement « **l'un** des derniers pays d'Europe occidentale à abolir »
  (`histoire-france.ts:281`) : c'est le cours qui a laissé tomber la nuance qui rendait la
  phrase vraie.
- **Correction proposée** : « La France est l'un des derniers pays d'Europe occidentale à
  l'abolir. »

### [GRAVE] Le cours donne le bon écart Nouvelle-Zélande, l'astuce le mauvais

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:140` — `hf-femmes-france` contre
  `prisma/seed/culture-g/histoire-france.ts:300`
- **Texte** : cours — « vingt-six ans après le Royaume-Uni, **cinquante et un ans** après la
  Nouvelle-Zélande » ; astuce — « vingt-six ans après le Royaume-Uni et **soixante-et-onze** ans
  après la Nouvelle-Zélande ».
- **Problème** : les deux textes de la même notion se contredisent sur le même chiffre. Le cours
  a raison (1944 − 1893 = 51). L'astuce, qui est ce que l'apprenant lit en premier, a tort.
  Voir aussi le constat sur l'astuce, plus bas.
- **Correction proposée** : aligner l'astuce sur le cours.

### [MOYEN] Chambord : trois nombres de pièces différents dans le même domaine

- **Où** : `cours/histoire-france.ts:63` (`hf-francois-premier`) —
  « château de chasse aux **quatre cent quarante** pièces » ;
  `histoire-france.ts:129` — « Le château compte **plus de quatre cents** pièces » ;
  `histoire-france-2.ts:116` — « **Quatre cent vingt** pièces. »
- **Problème** : trois chiffres pour un même fait, dans trois textes qu'un même apprenant
  rencontrera. Le décompte usuel est de 426 pièces.
- **Correction proposée** : retenir « quatre cent vingt-six pièces » partout, ou « plus de quatre
  cents » partout si l'on préfère l'approximation — mais une seule des deux formes.

### [MOYEN] Le Collège royal : le cours dit « latin », les questions disent « mathématiques »

- **Où** : `cours/histoire-france.ts:64` — « enseigner le grec, l'hébreu et le **latin** hors du
  contrôle de la Sorbonne » ; `histoire-france.ts` `hf-francois-premier` — « Créé pour enseigner
  le grec, l'hébreu et les **mathématiques** » ; `histoire-france-2.ts` — « l'hébreu, le grec et
  les **mathématiques** ».
- **Problème** : le cours et les deux questions ne s'accordent pas sur la troisième discipline.
  Historiquement, la fondation de 1530 crée des lecteurs de grec et d'hébreu ; le latin et les
  mathématiques sont ajoutés dans les années qui suivent. Le cours dément la question que
  l'apprenant devra pourtant réussir.
- **Correction proposée** : dans les trois textes, « le grec et l'hébreu d'abord, puis le latin
  et les mathématiques ».

### [MOYEN] « Quarante-trois ans après le dernier gouvernement de gauche »

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:132` — `hf-france-1970-2000`
- **Texte** : « François Mitterrand est élu en 1981 : c'est la première alternance de la
  Ve République, quarante-trois ans après le dernier gouvernement de gauche. »
- **Problème** : le compte ne tient que si l'on remonte à la fin du Front populaire en 1938 et
  qu'on ignore Guy Mollet, socialiste, président du Conseil de 1956 à 1957 — soit vingt-quatre
  ans plus tôt. Exact sous une définition, faux sous une autre, et la définition n'est pas
  donnée. La question correspondante dit plus sobrement « la gauche accède au pouvoir vingt-trois
  ans après la fondation de la Ve République ».
- **Correction proposée** : « c'est la première alternance de la Ve République, vingt-trois ans
  après sa fondation. »

### [MOYEN] « Rois fainéants » : l'expression attribuée à Éginhard

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:13` — `hf-merovingiens-rois`
- **Texte** : « Les historiens ont retenu l'expression rois fainéants […]. Elle vient d'Éginhard,
  biographe de Charlemagne. »
- **Problème** : Éginhard fournit l'**image** — des rois sans pouvoir, promenés en char à bœufs —
  mais pas la formule, qui apparaît en français bien plus tard et se répand au XVIIe siècle avec
  Mézeray. La question, plus prudente, dit « L'expression vient des chroniqueurs carolingiens ».
- **Correction proposée** : « L'image vient d'Éginhard, biographe de Charlemagne ; la formule
  française, elle, est bien postérieure. »

### [MINEUR] Jeanne d'Arc à Chinon : février ou mars ?

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:44` — `hf-jeanne-darc`
- **Texte** : « En février 1429, elle rencontre le futur Charles VII à Chinon. »
- **Problème** : elle quitte Vaucouleurs vers le 22 février et arrive à Chinon début mars ;
  l'entrevue est traditionnellement datée du 6 mars 1429.
- **Correction proposée** : « Début mars 1429, elle rencontre le futur Charles VII à Chinon. »

### [MINEUR] Phrase mal construite dans le cours sur la Fronde

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:74` — `hf-richelieu-mazarin`
- **Texte** : « Les traités de Westphalie mettent fin en 1648 à la guerre de Trente Ans, mais
  l'année même où éclate la Fronde. »
- **Problème** : la subordonnée n'a pas d'antécédent ; la phrase reste en suspens.
- **Correction proposée** : « Les traités de Westphalie mettent fin à la guerre de Trente Ans en
  1648 — l'année même où éclate la Fronde. »

### [GRAVE] Le cours de Beauvais se contredit dans la même phrase

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:352` — `hf4-cathedrales`, section
  « Des chantiers de plusieurs générations »
- **Texte** : « Beauvais, dont le chœur culmine à plus de quarante-huit mètres sous voûte, est
  **la plus haute nef gothique de France**. Elle s'est effondrée partiellement en 1284, puis sa
  tour-lanterne en 1573, et la cathédrale n'a jamais été achevée — **sa nef n'existe pas.** »
- **Problème** : la même phrase affirme que Beauvais a la plus haute nef de France et que sa nef
  n'existe pas. La question de la notion reprend la première moitié (« Quelle cathédrale possède
  la nef gothique la plus haute de France ? »), c'est-à-dire précisément la moitié fausse. Le
  fait exact est celui du chœur, 48,5 m sous voûte, record du gothique.
- **Correction proposée** : « Beauvais, dont le chœur culmine à 48,5 mètres sous voûte, détient
  le record de hauteur du gothique — mais sa nef n'a jamais été construite. »

### [GRAVE] « Trois régimes, chacun renversé par une révolution parisienne »

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:596` — `hf4-restauration`, section
  « Trois régimes en trente-trois ans »
- **Texte** : « Trois régimes se succèdent entre 1815 et 1848, **chacun renversé par une
  révolution parisienne** : la Restauration, la monarchie de Juillet, la Deuxième République. »
- **Problème** : deux erreurs en une phrase. D'abord la Deuxième République n'a pas été renversée
  par une révolution parisienne mais par le coup d'État de Louis-Napoléon Bonaparte, le
  2 décembre 1851 — le cours l'écrit d'ailleurs correctement ailleurs. Ensuite les trois régimes
  ne tiennent pas « entre 1815 et 1848 » : la Deuxième République commence en 1848 et s'achève
  en 1852. Le titre de section, « Trois régimes en trente-trois ans », propage la même erreur de
  bornes.
- **Correction proposée** : « Trois régimes se succèdent entre 1815 et 1852 : la Restauration et
  la monarchie de Juillet, emportées chacune par une révolution parisienne, puis la Deuxième
  République, emportée par un coup d'État. »

### [MOYEN] « Le troisième roi de France tué en un demi-siècle »

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:433` — `hf2-henri-iv-richelieu`
- **Texte** : « Henri IV est assassiné en 1610 par Ravaillac […]. Il est le troisième roi de
  France tué en un demi-siècle. »
- **Problème** : le compte ne tient qu'en assimilant la mort accidentelle d'Henri II, blessé en
  tournoi en 1559, à un meurtre. Seuls Henri III (1589) et Henri IV (1610) ont été assassinés.
  Affirmation frappante, mais fabriquée.
- **Correction proposée** : « Il est le deuxième roi de France assassiné en une vingtaine
  d'années, après Henri III. »

### [MOYEN] Brunehaut « capturée à quatre-vingts ans passés » et une rivalité de quarante ans

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:232` — `hf4-merovingiens`
- **Texte** : « Brunehaut et Frédégonde […] s'affrontent pendant quarante ans par assassinats et
  par guerres interposées. Brunehaut, capturée à quatre-vingts ans passés, sera exécutée en 613. »
- **Problème** : deux exagérations. Brunehaut, née vers 547, avait environ soixante-six ans en
  613, pas plus de quatre-vingts. Et Frédégonde meurt en 597 : les deux femmes ne peuvent
  s'affronter quarante ans. La question dit d'ailleurs « de 575 à 613 », ce qui prolonge tout
  autant la rivalité au-delà de la mort de l'une des deux.
- **Correction proposée** : « Elles s'affrontent une vingtaine d'années, jusqu'à la mort de
  Frédégonde en 597 ; Brunehaut, vaincue à près de soixante-dix ans, est exécutée en 613. »

### [MOYEN] Un paragraphe du pont du Gard réemployé d'un cours à l'autre

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:160` (`hf-monuments-france`) et
  `:200` (`hf4-gaule-romaine`)
- **Texte** : « bâti au Ier siècle pour alimenter la ville en eau sur une cinquantaine de
  kilomètres, avec une pente moyenne de vingt-cinq centimètres par kilomètre » /
  « pour alimenter Nîmes depuis une source distante de cinquante kilomètres. Sa pente moyenne
  est d'environ vingt-cinq centimètres par kilomètre ».
- **Problème** : même fait, mêmes deux chiffres, presque les mêmes mots, dans deux cours du même
  domaine — en plus des trois questions déjà consacrées au même monument.
- **Correction proposée** : garder le développement dans `hf4-gaule-romaine`, où il est à sa
  place technique, et réduire la mention de `hf-monuments-france` à une phrase sur le changement
  d'échelle des ouvrages romains.

### [MOYEN] Les deux cours ne s'accordent pas sur Chambord ni sur le Collège royal

- **Où** : `cours/histoire-france.ts:63` (`hf-francois-premier`) contre `:416`
  (`hf4-renaissance-france`)
- **Texte** : « château de chasse aux **quatre cent quarante** pièces » / « **Quatre cent
  vingt-six** pièces pour un château où le roi n'a séjourné que quelques semaines » ; et
  « enseigner le grec, l'hébreu et le **latin** » / « grec, hébreu, **mathématiques** ».
- **Problème** : deux cours du même domaine, sur le même règne, se contredisent sur deux faits.
  Avec les deux questions concernées, cela fait quatre chiffres pour Chambord (440, « plus de
  400 », 420, 426) et deux listes de disciplines pour le Collège royal. Le chiffre juste est 426 ;
  la fondation de 1530 crée des lecteurs de grec et d'hébreu, le latin et les mathématiques
  venant ensuite.
- **Correction proposée** : aligner les quatre textes sur « quatre cent vingt-six pièces » et sur
  « le grec et l'hébreu, bientôt rejoints par le latin et les mathématiques ».

### [MOYEN] « Quarante mille exécutions » sous la Terreur

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:531` — `hf2-terreur-directoire`
- **Texte** : « Son bilan est de l'ordre de quarante mille exécutions, très inégalement
  réparties. »
- **Problème** : le chiffre de quarante mille désigne l'ensemble des victimes de la Terreur —
  condamnations exécutées, morts en détention, exécutions sommaires. Les condamnations à mort
  effectivement exécutées par les tribunaux sont de l'ordre de dix-sept mille. Le mot
  « exécutions » double donc le fait.
- **Correction proposée** : « Son bilan est de l'ordre de quarante mille morts, dont environ
  dix-sept mille condamnations capitales exécutées. »

### [MINEUR] Crécy : « des archers gallois »

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:378` — `hf4-guerre-cent-ans`
- **Texte** : « la chevalerie française charge en désordre contre des archers gallois retranchés »
- **Problème** : l'archerie d'Édouard III était anglaise et galloise ; en la disant seulement
  galloise on prive l'apprenant du lien avec « l'arc long anglais » que la question de la même
  notion lui demande de retenir.
- **Correction proposée** : « contre des archers anglais et gallois retranchés ».

### [MINEUR] Élision manquante

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:245` — `hf4-merovingiens`
- **Texte** : « expression qui vient **de Éginhard**, biographe de Charlemagne »
- **Correction proposée** : « qui vient d'Éginhard ».

### [GRAVE] Deux paragraphes recopiés d'un cours à l'autre

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts` — `hf3-sante-france`, section « Les
  crises et leurs leçons », et `hf3-catastrophes-france`, section « Indemniser et reconstruire »
- **Texte** : « La canicule de 2003 a révélé une vulnérabilité d'un autre ordre : quinze mille
  décès en excès, concentrés sur les personnes âgées isolées, et un système d'alerte incapable de
  détecter la surmortalité en temps réel. Elle a conduit à la création d'un plan canicule, d'un
  registre des personnes fragiles en mairie, et d'une surveillance sanitaire réactive. » /
  « La canicule d'août 2003 provoque environ quinze mille décès en excès, concentrés sur les
  personnes âgées isolées. Elle révèle deux défaillances : l'absence de système d'alerte capable
  de détecter une surmortalité en temps réel […]. Elle a produit le plan canicule, le registre
  communal des personnes fragiles […] et une surveillance sanitaire réactive. »
- **Problème** : même paragraphe, même chiffre, mêmes trois mesures, dans deux cours du même
  domaine — auxquels s'ajoutent les deux questions déjà en double sur le même sujet. Le même
  phénomène se répète pour Courrières, traité dans `hf3-industrialisation-france` et dans
  `hf3-catastrophes-france`, les deux cours mentionnant la création du ministère du Travail.
- **Correction proposée** : garder le développement complet dans `hf3-catastrophes-france` ;
  dans `hf3-sante-france`, ne conserver qu'une phrase reliant l'épisode à la veille sanitaire,
  sans réénoncer les chiffres. Idem pour Courrières entre les deux cours.

### [MOYEN] Jaurès assassiné « trois jours avant la mobilisation »

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:686` — `hf2-troisieme-republique`
- **Texte** : « Jean Jaurès […] est assassiné le 31 juillet 1914, trois jours avant la
  mobilisation. »
- **Problème** : la mobilisation générale est décrétée le 1er août 1914, soit le **lendemain**.
  Le chiffre affaiblit ce que la phrase veut dire — Jaurès tombe la veille même du basculement.
- **Correction proposée** : « assassiné le 31 juillet 1914, la veille de la mobilisation
  générale ».

### [MOYEN] Oradour : 642 dans le cours, 643 dans la question

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:755` (`hf2-france-1940-1944`) contre
  `prisma/seed/culture-g/histoire-france-2.ts` (`hf2-france-1940-1944`)
- **Texte** : « une division SS détruit Oradour-sur-Glane et massacre **six cent quarante-deux**
  habitants » / « **Six cent quarante-trois** victimes. »
- **Problème** : deux chiffres pour un même massacre, dans le cours et dans la question d'une
  même notion. Le décompte officiel du mémorial est de 643 victimes ; 642 est le chiffre
  longtemps retenu avant l'ajout d'une victime identifiée plus tard.
- **Correction proposée** : retenir 643 aux deux endroits.

### [MOYEN] Blessés de 1914-1918 : trois millions dans le cours, quatre dans la question

- **Où** : `cours/histoire-france.ts:719` (`hf2-france-1914-1918`) contre
  `histoire-france-2.ts:378`
- **Texte** : « S'y ajoutent **plus de trois millions** de blessés. » / « Auxquels s'ajoutent
  **plus de quatre millions** de blessés, dont de nombreux mutilés. »
- **Problème** : contradiction dans une même notion. Le chiffre usuel est de l'ordre de
  4,2 millions de blessés, en comptant les blessures multiples ; environ 3 millions de blessés
  distincts.
- **Correction proposée** : « environ trois millions de blessés, pour plus de quatre millions de
  blessures » aux deux endroits, ou retenir « plus de quatre millions » partout.

### [MOYEN] Exposition coloniale de 1931 : huit millions ou trente millions ?

- **Où** : `cours/histoire-france.ts:882` (`hf3-marine-empire-colonial`) contre
  `histoire-france-3.ts` (`hf3-marine-empire-colonial`)
- **Texte** : « célèbre l'empire devant **plus de huit millions de visiteurs** » / « **Plus de
  trente millions de visites.** »
- **Problème** : les deux chiffres circulent, mais ils ne mesurent pas la même chose — environ
  33 millions d'entrées vendues pour environ 8 millions de visiteurs distincts. Posés côte à côte
  sans unité, ils se contredisent.
- **Correction proposée** : « environ trente-trois millions d'entrées, pour quelque huit millions
  de visiteurs » dans les deux textes.

### [MOYEN] Villes nouvelles de province : trois ou quatre ?

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:1102` —
  `hf3-decentralisation-territoires`
- **Texte** : « Cinq villes nouvelles sont créées en région parisienne […]. **Trois autres sont
  créées en province.** »
- **Problème** : elles sont quatre — Villeneuve-d'Ascq, L'Isle-d'Abeau, Le Vaudreuil et les Rives
  de l'étang de Berre —, pour un total de neuf.
- **Correction proposée** : « Quatre autres sont créées en province, portant le total à neuf. »

### [MINEUR] Faute d'accord dans le cours sur les zones de revitalisation rurale

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts:1108` —
  `hf3-decentralisation-territoires`
- **Texte** : « les évaluations montrent des effets d'aubaine importants, les entreprises **se
  serait** souvent installées de toute façon. »
- **Correction proposée** : « les entreprises se seraient souvent installées de toute façon ».

### [MOYEN] Les cours corrigent les questions — mais l'apprenant voit les deux

Ce n'est pas un constat isolé mais un motif, et il vaut d'être signalé comme tel : dans **six**
cas relevés ci-dessus, le cours dit juste et la question ou l'astuce de la même notion dit faux.

| Fait | Le cours | La question ou l'astuce |
|---|---|---|
| Vote des femmes en Nouvelle-Zélande | « cinquante et un ans » (`hf-femmes-france`) | « soixante-et-onze ans » (astuce) |
| Âge de VGE en 1974 | « à quarante-huit ans » (`hf-france-1970-2000`) | « à trente-huit ans d'écart avec son prédécesseur » |
| Rang de Simone Veil au Panthéon | Marie Curie « première femme à entrer pour ses propres mérites » en 1995 (`hf3-personnages-france`) | Simone Veil « cinquième femme à y entrer pour ses mérites propres » |
| Médaille Fields | « équivalent du Nobel pour les mathématiques » (`hf3-sciences-france`) | « Quel prix scientifique **français** » |
| Création des SAFER | « lois d'orientation agricole de 1960 et 1962 » (`hf3-agriculture-france`) | « Les lois Pisani ont notamment créé les SAFER » |
| Rattrapage téléphonique de 1974 | « un retard téléphonique considérable, corrigé » (`hf3-vie-quotidienne`) | « du dernier au premier rang européen » |

Un apprenant lit l'astuce, puis le cours, puis répond aux questions. Quand les trois ne
s'accordent pas, ce qu'il retiendra est ce qu'il a répété — la question. Corriger les questions
importe donc davantage que corriger les cours, alors que ce sont les cours qui ont été écrits
avec le plus de soin.

### [GRAVE] Une question du cahier d'origine a deux réponses défendables

- **Où** : `heritage/culture-g/data/histoire-france.json`, question 18
- **Texte** : « Combien d'années dure le règne **personnel et nominal** de Louis XIV, le plus long
  de l'histoire de France ? » — propositions : « 72 ans », « 54 ans », « 61 ans », « 48 ans » ;
  bonne réponse attendue : 72 ans.
- **Problème** : « le règne personnel et nominal » veut dire le règne entier, mais se lit
  spontanément comme « le règne personnel ». Or 54 ans est précisément la durée du règne
  personnel, et le corpus neuf la martèle : `hf4-louis-xiv` (« Louis XIV a exercé le pouvoir
  personnel pendant cinquante-quatre ans »), le cours `hf-richelieu-mazarin` (« Elle tiendra
  cinquante-quatre ans »), le cours `hf2-louis-xiv` (« décision qu'il tiendra pendant
  cinquante-quatre ans »). Un apprenant qui a lu ces cours répondra 54 et aura tort, alors qu'il
  aura correctement retenu ce qu'on lui a enseigné. Les deux réponses sont défendables, une
  seule est acceptée.
- **Correction proposée** : « Combien d'années Louis XIV a-t-il porté la couronne, de son
  avènement à sa mort ? » → « 72 ans », en gardant « 54 ans » comme distracteur et en précisant
  dans l'explication qu'il s'agit de la durée du règne personnel.

### [MOYEN] Deux questions consécutives sur Alésia, dont l'une donne la réponse de l'autre

- **Où** : `heritage/culture-g/data/histoire-france.json`, questions 0 et 1
- **Texte** : « En quelle année Vercingétorix se rend-il à Jules César après le siège
  d'Alésia ? » → « 52 av. J.-C. » ; puis « Qui remporte la bataille d'Alésia **en 52 av. J.-C.**
  ? » → « Jules César ».
- **Problème** : la seconde question inscrit dans son énoncé la réponse de la première. Elles se
  suivent immédiatement dans le fichier, et les deux explications redisent l'une et l'autre le
  siège, la reddition et la romanisation de la Gaule.
- **Correction proposée** : fusionner en une seule question sur Alésia, ou retirer « en
  52 av. J.-C. » de la seconde.

### [MOYEN] Vél d'Hiv : 12 884 dans le cahier, « plus de treize mille » dans le corpus neuf

- **Où** : `heritage/culture-g/data/histoire-france.json`, question 44, contre
  `prisma/seed/culture-g/histoire-france-2.ts` (`hf2-france-1940-1944`) et
  `cours/histoire-france.ts:748`
- **Texte** : « la police française arrête à Paris et en banlieue **12 884** Juifs, dont plus de
  4 000 enfants » / « Plus de **treize mille** personnes arrêtées, dont plus de quatre mille
  enfants ».
- **Problème** : deux décomptes pour la même rafle, dans deux textes que le même apprenant lira.
  Le chiffre retenu par le Mémorial de la Shoah est 13 152 arrestations, dont 4 115 enfants.
- **Correction proposée** : « 13 152 personnes arrêtées, dont 4 115 enfants », aux trois endroits.

### [MOYEN] Mai 68 : trois fourchettes de grévistes différentes

- **Où** : `heritage/culture-g/data/histoire-france.json`, question 50 — « 7 à 10 millions de
  grévistes » ; `prisma/seed/culture-g/histoire-france-2.ts` (`hf2-cinquieme-republique`) —
  « Environ sept à neuf millions » ; `histoire-france-3.ts` (`hf3-mouvement-ouvrier`) — « Entre
  sept et neuf millions » ; `cours/histoire-france.ts` (`hf2-cinquieme-republique`) — « sept à
  neuf millions ».
- **Problème** : la borne haute change d'un texte à l'autre sans raison.
- **Correction proposée** : retenir « sept à neuf millions » partout, fourchette la plus
  couramment retenue.

### [MOYEN] Gouvernements de la IVe République : le cahier tranche à l'inverse du corpus neuf

- **Où** : `heritage/culture-g/data/histoire-france.json`, question 47 — « une **vingtaine** de
  gouvernements en douze ans » ; `histoire-france-4.ts` — « Une vingtaine » ;
  contre `histoire-france-2.ts` (astuce) et `cours/histoire-france.ts` — « **vingt-quatre**
  gouvernements en douze ans, soit une durée moyenne de six mois ».
- **Problème** : quatre textes, deux chiffres, et ils se répartissent également. Le décompte
  usuel est de vingt-deux gouvernements.
- **Correction proposée** : « vingt-deux gouvernements en douze ans » partout.

### [GRAVE] Duplication massive entre les quatre lots — et la table de fusions ne la résorbe pas

C'est le constat de loin le plus lourd du domaine, et il est structurel.
Les lots 2, 3 et 4 ne prolongent pas le lot 1 : ils **recommencent** le programme d'histoire de
France du début. Un apprenant qui suit tout le domaine révisera trois fois Marignan, trois fois
les *missi dominici*, trois fois le quinquennat, avec des formulations à peine variées et des
explications parfois recopiées mot pour mot.

J'ai vérifié `prisma/seed/culture-g/cours/fusions.ts` avant de conclure, comme il se doit.
Sur les 75 notions du domaine, **22 sont bien absorbées** — 9 par une leçon héritée, 13 par une
autre notion neuve. Mais cela ne règle pas le problème, pour deux raisons distinctes.

**Raison 1 — fusionner n'est pas dédoublonner : la fusion concentre les doublons.**
`verser()`, dans `src/modules/culture-g/contenu.ts:470-477`, verse les questions de la notion
absorbée dans l'hôte et n'écarte que celles dont la clé normalisée est **identique**. Deux
questions qui posent le même fait avec deux formulations différentes passent toutes les deux.
Résultat : les doublons qui étaient répartis entre deux chapitres se retrouvent **côte à côte
dans un seul**. Décompte des paires quasi identiques qui atterrissent dans la même notion :

| Notion d'accueil | Absorbe | Paires de questions redondantes qui s'y retrouvent |
|---|---|---|
| `hf2-revolution-1789` | `hf4-1789` | 7 — états généraux, cahiers de doléances, Jeu de paume, Bastille, nuit du 4 août, biens nationaux, Constitution civile du clergé |
| `hf2-cinquieme-republique` | `hf4-cinquieme-republique` | 6 — réforme de 1962, article 49.3, cohabitation, quinquennat, QPC, Mai 68 |
| `hf2-quatrieme-republique` | `hf4-quatrieme-republique` | 6 — Sécurité sociale de 1945, Trente Glorieuses, plan Monnet, instabilité, traité de Rome, fin du régime en 1958 |
| `hf-francois-premier` | `hf2-renaissance-francaise` | 5 — Pavie, Léonard de Vinci, Chambord, Villers-Cotterêts, Collège royal |
| `hf-symboles-republique` | `hf2-symboles-republique` | 5 — drapeau, Marseillaise, devise, bonnet phrygien de Marianne, 14 Juillet |
| `hf2-capetiens` | `hf4-capetiens` | 5 — sacre du fils du vivant du père, Bouvines, Boniface VIII, ordre du Temple, canonisation de Louis IX |
| `hf2-troisieme-republique` | `hf4-troisieme-republique` | 5 — loi de 1901, loi de 1905, affaire Dreyfus, J'accuse, boulangisme |
| `hf2-terreur-directoire` | `hf4-revolution-terreur` | 5 — Comité de salut public, Directoire, chute de Robespierre, 18 brumaire, Vendée |
| `hf-charlemagne-empire` | `hf2-carolingiens` | 4 — Aix-la-Chapelle, missi dominici, serments de Strasbourg, minuscule caroline |
| `hf-richelieu-mazarin` | `hf4-richelieu-mazarin` | 4 — Académie française, traité des Pyrénées, Mazarin sous la minorité, politique anti-Habsbourg |
| `hf-lumieres-france` | `hf2-lumieres-france` **et** `hf4-lumieres-france` | 5, dont certaines **en triple** — salons, Contrat social, De l'esprit des lois, Encyclopédie, parlements |
| `hf-outre-mer-histoire` | `hf2-france-outre-mer` | 3 — Saint-Pierre-et-Miquelon, départementalisation de 1946, Guyane |

La fusion aggrave donc le symptôme le plus visible pour l'apprenant : dans une même série de
révision, il tombera deux fois de suite sur la même question reformulée. Deux contradictions
chiffrées se retrouvent d'ailleurs enfermées dans une seule notion : `hf2-quatrieme-republique`
annonce « vingt-quatre gouvernements en douze ans » dans son astuce et « une vingtaine de
gouvernements » dans une explication venue de `hf4`.

**Raison 2 — six paires de notions jumelles ne figurent dans aucune des deux tables.**
Elles restent toutes deux au catalogue, chacune avec son chapitre :

| Sujet | Les deux notions autonomes |
|---|---|
| Mérovingiens | `hf-merovingiens-rois` « Les rois mérovingiens après Clovis » / `hf4-merovingiens` « Les Mérovingiens » |
| Carolingiens | `hf-charlemagne-empire` / `hf4-carolingiens` — et le premier a déjà absorbé `hf2-carolingiens`, ce qui fait **trois** jeux de questions pour deux chapitres |
| François Ier | `hf-francois-premier` / `hf4-renaissance-france` — même remarque, le premier a déjà absorbé `hf2-renaissance-francaise` |
| Richelieu et Mazarin | `hf-richelieu-mazarin` / `hf2-henri-iv-richelieu` |
| Femmes et figures | `hf-femmes-france` / `hf3-personnages-france` |
| Louis XIV | `hf2-louis-xiv` autonome, tandis que `hf4-louis-xiv` a été versé dans la leçon héritée `cg-histoire-france-06` : deux chapitres pour un règne |

S'y ajoutent quatre cas où une notion neuve autonome refait une leçon héritée déjà servie par
une notion absorbée : `hf4-gaule-romaine` en face de `cg-histoire-france-01`,
`hf4-guerre-cent-ans` en face de `cg-histoire-france-04`, `hf4-restauration` en face de
`cg-histoire-france-08`, `hf2-napoleon` en face de `cg-histoire-france-c02`,
`hf2-second-empire` en face de `cg-histoire-france-09`, et `hf2-france-1914-1918` +
`hf2-france-1940-1944` en face de `cg-histoire-france-c03`.

Doublons de questions les plus francs, pour donner à voir la matière :

- **Pont du Gard, trois fois** : `histoire-france.ts:339` (« Quel pont romain enjambe le Gard
  près de Nîmes ? »), `histoire-france-2.ts:20` (« Quel aqueduc romain enjambe le Gardon dans le
  sud de la France ? »), `histoire-france-4.ts` `hf4-gaule-romaine` (« Qu'est-ce que le pont du
  Gard ? »).
- **Aix-la-Chapelle, trois fois** : `histoire-france.ts:53`, `histoire-france-2.ts:42`,
  `histoire-france-4.ts` `hf4-carolingiens` — les deux premières atterrissent dans la même notion.
- **Missi dominici, trois fois** ; les trois explications répètent « ils allaient par deux, un
  laïc et un clerc ».
- **Serments de Strasbourg, trois fois** ; mêmes trois notions.
- **Léonard de Vinci accueilli par François Ier, trois fois** : `histoire-france.ts:125`,
  `histoire-france-2.ts:114`, `histoire-france-4.ts:228` — et les propositions de la première
  et de la troisième sont **identiques mot pour mot** : « Léonard de Vinci », « Michel-Ange »,
  « Raphaël », « Titien ».
- **Pavie 1525, trois fois** ; **Villers-Cotterêts 1539, trois fois** ; **Collège royal 1530,
  trois fois** ; **Chambord et son escalier, trois fois**.
- **Règne personnel de Louis XIV en 1661, trois fois** : `hf-richelieu-mazarin` (« Il gouverne
  seul, sans premier ministre — à vingt-deux ans »), `hf2-louis-xiv` (« 1661 — il avait
  vingt-deux ans et décida de ne pas nommer de premier ministre »), `hf4-louis-xiv`.
- **Cahiers de doléances, trois fois** ; **convocation des états généraux, trois fois**, les
  trois explications répétant « ils ne s'étaient plus réunis depuis 1614 ».
- **Cohabitation, trois fois** ; **quinquennat de 2000, trois fois** — dont deux énoncés
  synonymes à un verbe près : « Quelle réforme de 2000 **raccourcit** le mandat présidentiel ? »
  (`histoire-france.ts:291`) et « Quelle réforme de 2000 **réduit la durée** du mandat
  présidentiel ? » (`histoire-france-2.ts:446`).
- **Article 49 alinéa 3, deux fois, énoncés quasi identiques** : « Qu'est-ce que l'article 49
  alinéa 3 de la Constitution ? » et « Qu'est-ce que l'article 49 alinéa 3 ? » — désormais dans
  la même notion.
- **Front populaire 1936, trois fois**, dont deux avec la **même chaîne de réponse exacte** :
  « Congés payés, semaine de quarante heures et conventions collectives » (`histoire-france.ts:255`
  et `histoire-france-2.ts:358`), suivie de la même explication sur les accords Matignon.
- **Sécurité sociale de 1945, trois fois** ; **Trente Glorieuses, deux fois**, les deux avec
  « Jean Fourastié en 1979 ».
- **Abolition de l'esclavage en 1848, deux fois**, les deux avec la **même phrase** :
  « L'abolition de 1794 avait été annulée par Bonaparte en 1802. »
- **Maastricht 1992, deux fois** : `histoire-france.ts:287` et `histoire-france-3.ts:334`.
- **Loi Veil 1975, deux fois** : `histoire-france.ts:277` et `histoire-france-3.ts:152`.
- **Olympe de Gouges, Marie Curie, Germaine Tillion, Simone Veil au Panthéon** : les quatre
  questions de `hf-femmes-france` sont reprises une à une dans `hf3-personnages-france`, deux
  notions qu'aucune fusion ne réunit. Explications quasi superposables (Tillion : « Elle y entre
  le même jour que Geneviève de Gaulle-Anthonioz, Jean Zay et Pierre Brossolette » / « Elle y est
  entrée avec Geneviève de Gaulle-Anthonioz, Jean Zay et Pierre Brossolette »).
- **Saint-Pierre-et-Miquelon, deux fois**, les deux avec « Dernier vestige de la Nouvelle-France ».
- **Corvée seigneuriale** : `hf3-societe-ancien-regime` et `hf4-societe-feodale` ont la **même
  chaîne de bonne réponse**, « Un travail gratuit dû au seigneur ».
- **Jean II le Bon capturé à Poitiers en 1356** : `histoire-france-2.ts:94` et
  `histoire-france-4.ts:198`, mêmes quatre propositions.

**Correction proposée** : ce n'est pas une correction ligne à ligne. Deux gestes.
1. Compléter `FUSIONS_INTERNES` pour les six paires manquantes ci-dessus.
2. Surtout, **dédoublonner les questions dans les notions déjà fusionnées** : `verser()` ne
   compare que des clés exactes, il faut une passe humaine sur les douze notions du premier
   tableau. Les notions réellement neuves du lot 4 — `hf4-commune`, `hf4-guerres-religion`,
   `hf4-cathedrales`, `hf4-societe-feodale`, `hf4-gaule-celtique` — et les notions thématiques
   du lot 3 sont à conserver telles quelles : elles n'ont pas de jumelle.

### [GRAVE] Deux doublons à l'intérieur d'un même fichier

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts` — `cg-neuf-hf3-industrialisation-france`
  et `cg-neuf-hf3-catastrophes-france`
- **Texte** : « Quelle catastrophe minière frappe Courrières en 1906 ? » → « Un coup de poussier
  faisant plus de mille morts » / « Quelle catastrophe minière survient à Courrières en 1906 ? »
  → « Une explosion faisant plus de mille morts ».
- **Problème** : même événement, même énoncé à un verbe près, même ordre de grandeur, et deux
  réponses formulées différemment (« coup de poussier » / « explosion ») dans deux notions du
  même fichier — l'apprenant peut hésiter à croire qu'il s'agit de deux catastrophes.
- **Correction proposée** : supprimer la question de `hf3-catastrophes-france` et conserver
  celle de `hf3-industrialisation-france`, plus précise.

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts` — `cg-neuf-hf3-sante-france` et
  `cg-neuf-hf3-catastrophes-france`
- **Texte** : la canicule de 2003, avec dans les deux cas « Environ quinze mille décès en excès ».
- **Correction proposée** : n'en garder qu'une, dans `hf3-catastrophes-france`.

### [MOYEN] Nombre de mots gaulois survivants : deux chiffres contradictoires

- **Où** : `prisma/seed/culture-g/histoire-france-2.ts` `hf2-gaule-romaine` et
  `histoire-france-4.ts` `hf4-gaule-celtique`
- **Texte** : « Le gaulois s'est éteint entre le IIIe et le VIe siècle, laissant environ **une
  centaine** de mots. » / « Quelques **dizaines** de mots français en descendent, comme chêne
  ou alouette. »
- **Problème** : deux ordres de grandeur incompatibles pour le même fait, dans le même domaine.
  L'estimation courante tourne autour de 150 mots d'origine gauloise en français.
- **Correction proposée** : harmoniser sur « environ cent cinquante mots, comme chêne, alouette
  ou charrue ».

### [MOYEN] Nombre de gouvernements de la IVe République : deux chiffres contradictoires

- **Où** : `prisma/seed/culture-g/histoire-france-2.ts` `hf2-quatrieme-republique` (astuce) et
  `histoire-france-4.ts` `hf4-quatrieme-republique`
- **Texte** : « La Quatrième République a connu **vingt-quatre** gouvernements en douze ans. » /
  « Une **vingtaine** de gouvernements se sont succédé en douze ans. »
- **Correction proposée** : retenir le décompte usuel de vingt-deux gouvernements et l'employer
  aux deux endroits.

### [MOYEN] Le décret d'Allarde attribué à la loi Le Chapelier

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts` — `cg-neuf-hf3-societe-ancien-regime`
  et `cg-neuf-hf3-mouvement-ouvrier`
- **Texte** : « Supprimées en 1791 par la loi Le Chapelier, qui interdit aussi toute coalition
  ouvrière. » / « Elle supprime les corporations mais interdit aussi toute association
  professionnelle. »
- **Problème** : ce sont deux textes distincts de la même année. Le **décret d'Allarde**
  (mars 1791) supprime les corporations ; la **loi Le Chapelier** (juin 1791) interdit
  coalitions et associations professionnelles. L'erreur est répétée deux fois, ce qui la
  consolide.
- **Correction proposée** : « Supprimées en mars 1791 par le décret d'Allarde ; la loi
  Le Chapelier, en juin, y ajoute l'interdiction de toute coalition. »

### [MOYEN] Les SAFER attribuées aux lois Pisani

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts` — `cg-neuf-hf3-agriculture-france`
- **Texte** : « Les lois Pisani ont notamment créé les SAFER et les indemnités de départ. »
- **Problème** : les SAFER sont créées par la loi d'orientation agricole du 5 août **1960**,
  avant l'arrivée d'Edgard Pisani au ministère. La loi complémentaire de 1962, elle, leur donne
  le droit de préemption et crée l'indemnité viagère de départ.
- **Correction proposée** : « La loi d'orientation de 1960 crée les SAFER ; la loi
  complémentaire de 1962, portée par Pisani, leur donne le droit de préemption et institue
  l'indemnité viagère de départ. »

### [MOYEN] « Du dernier au premier rang européen » : exagération présentée comme un fait

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts` — `cg-neuf-hf3-vie-quotidienne`
- **Texte** : « Le plan de rattrapage téléphonique de 1974 a fait passer la France du dernier
  au premier rang européen. »
- **Problème** : la France était effectivement l'un des pays les moins équipés d'Europe
  occidentale et est devenue l'un des mieux équipés — mais ni « dernier » ni « premier » ne
  sont établis. Une formule d'accroche est ici donnée comme une donnée.
- **Correction proposée** : « Le plan de rattrapage de 1974 a fait passer la France du bas au
  haut du classement européen en une dizaine d'années. »

### [MOYEN] François Ier « capturé par Charles Quint »

- **Où** : `prisma/seed/culture-g/histoire-france.ts:123` — `cg-neuf-hf-francois-premier`
- **Texte** : « Capturé par Charles Quint, il est emmené à Madrid. »
- **Problème** : Charles Quint n'était pas à Pavie. François Ier est capturé par les troupes
  impériales et remis à l'empereur. La formulation laisse croire à une capture personnelle.
- **Correction proposée** : « Capturé par les troupes de Charles Quint, il est emmené à Madrid. »

### [MOYEN] Marignan : l'adoubement par Bayard donné pour certain

- **Où** : `prisma/seed/culture-g/histoire-france.ts` — `cg-neuf-hf-francois-premier`
- **Texte** : « … et lui vaut d'être adoubé par Bayard sur le champ de bataille. »
- **Problème** : la tradition est célèbre mais contestée, et le fichier lui-même sait hésiter
  ailleurs (« formule apocryphe mais tenace » à propos de « tout est perdu fors l'honneur »,
  `histoire-france-2.ts:112`). Ici l'épisode est donné sans réserve.
- **Correction proposée** : « … et lui vaut, selon une tradition tenace, d'être adoubé par
  Bayard sur le champ de bataille. »

### [MOYEN] « La France y gagne l'Alsace » aux traités de Westphalie

- **Où** : `prisma/seed/culture-g/histoire-france.ts` — `cg-neuf-hf-richelieu-mazarin`
- **Texte** : « La France y gagne l'Alsace. »
- **Problème** : ce que la France obtient en 1648 est un ensemble de droits sur les possessions
  des Habsbourg en Alsace, dans des termes assez ambigus pour nourrir un demi-siècle de litiges ;
  la Décapole reste hors du lot et n'est annexée qu'ensuite. Exact en raccourci, trompeur tel quel.
- **Correction proposée** : « La France y obtient les droits des Habsbourg en Alsace, dans des
  termes assez flous pour nourrir des conflits pendant des décennies. »

### [MOYEN] « Le territoire français le plus vaste » : le distracteur est défendable

- **Où** : `prisma/seed/culture-g/histoire-france-2.ts:472` — `cg-neuf-hf2-france-outre-mer`
- **Texte** : « Quel territoire français est le plus vaste en superficie ? » → « La Guyane »,
  distracteur « Les Terres australes ».
- **Problème** : la Guyane est bien la plus vaste **région et collectivité** française
  (83 846 km²), mais les TAAF, avec la terre Adélie revendiquée, couvrent plus de 400 000 km².
  Le mot « territoire », non qualifié, rend le distracteur soutenable.
- **Correction proposée** : « Quelle collectivité française est la plus vaste ? »

### [MOYEN] Amphithéâtre de Provence : plusieurs réponses vraies, neutralisées par un « seul »

- **Où** : `prisma/seed/culture-g/histoire-france-2.ts` — `cg-neuf-hf2-gaule-romaine`
- **Texte** : « Quel amphithéâtre romain de Provence accueille encore des spectacles ? » →
  « Les arènes d'Arles » ; distracteurs « Le théâtre d'Orange **seul** », « L'amphithéâtre de
  Fréjus ».
- **Problème** : Orange et Fréjus accueillent eux aussi des spectacles ; le distracteur d'Orange
  n'est rendu faux que par l'ajout artificiel de « seul », procédé qui revient plusieurs fois
  dans le domaine (« La Bretagne seule », « Madame de Staël seule », « En 1988 seulement »,
  « Prosper Mérimée seul »…). L'explication ajoute d'ailleurs « Les arènes de Nîmes également »,
  alors que Nîmes n'est pas en Provence.
- **Correction proposée** : « Quel amphithéâtre romain d'Arles accueille encore des
  spectacles ? » ou, mieux, distracteurs qui ne soient pas des monuments réellement en activité.

### [MOYEN] IIIe République « régime le plus durable de l'histoire de France »

- **Où** : `prisma/seed/culture-g/histoire-france-4.ts` — `cg-neuf-hf4-troisieme-republique` (astuce)
- **Texte** : « La Troisième République est le régime le plus durable de l'histoire de France. »
- **Problème** : le lot 2 formule la même idée avec la restriction qui la rend vraie —
  « le régime le plus durable de l'histoire française **depuis 1789** » — restriction que le lot 4
  laisse tomber. Sans elle, l'affirmation est fausse (la monarchie capétienne, l'Ancien Régime).
  Elle est en outre en train de devenir fragile : soixante-dix ans pour la IIIe, soixante-huit
  pour la Ve.
- **Correction proposée** : reprendre « le régime le plus durable depuis 1789 ».

### [MOYEN] « Trois régimes se succèdent entre 1815 et 1848 »

- **Où** : `prisma/seed/culture-g/histoire-france-4.ts` — `cg-neuf-hf4-restauration` (astuce)
- **Problème** : entre 1815 et 1848 il y en a deux — la Restauration et la monarchie de Juillet.
  Le troisième, la IIe République, commence *en* 1848 et s'achève en 1852.
- **Correction proposée** : « Trois régimes se succèdent entre 1815 et 1852. »

### [MOYEN] Parité : l'article 1er de la Constitution daté de 1999

- **Où** : `prisma/seed/culture-g/histoire-france-2.ts` — `cg-neuf-hf2-symboles-republique`
- **Texte** : « Le caractère décentralisé y a été ajouté en 2003, l'égal accès aux mandats en 1999. »
- **Problème** : la révision de 1999 inscrit la parité aux articles **3 et 4** ; c'est la révision
  de **2008** qui la déplace à l'article 1er, dont il est question ici.
- **Correction proposée** : « Le caractère décentralisé y a été ajouté en 2003 ; l'égal accès aux
  mandats, inscrit en 1999 aux articles 3 et 4, y a été transféré en 2008. »

### [MOYEN] « Le premier quotidien à grand tirage » : accord fautif et réponse discutable

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts` — `cg-neuf-hf3-medias-france`
- **Texte** : « Quelle est la première **quotidienne** française à grand tirage au XIXe siècle ? »
- **Problème** : double. D'une part l'accord est fautif — *le premier quotidien*. D'autre part
  *La Presse* de Girardin (1836), qui figure en distracteur, est ordinairement présentée comme
  le premier quotidien à bas prix et gros tirage, avant *Le Petit Journal* (1863).
- **Correction proposée** : « Quel quotidien français dépasse le million d'exemplaires à la fin
  du XIXe siècle ? » → « Le Petit Journal ».

### [MOYEN] Répétition d'un même fait à deux questions d'intervalle

- **Où** : `prisma/seed/culture-g/histoire-france-2.ts` — `cg-neuf-hf2-symboles-republique`
- **Texte** : deux questions consécutives se terminent l'une par « Le titre initial était Chant
  de guerre pour l'armée du Rhin », l'autre par « Il fut d'abord baptisé Chant de guerre pour
  l'armée du Rhin ».
- **Correction proposée** : ne garder l'information qu'une fois et employer la seconde
  explication à autre chose (l'adoption par décret du 14 juillet 1795, par exemple).

### [MOYEN] Colbert traité deux fois dans la même notion

- **Où** : `prisma/seed/culture-g/histoire-france-4.ts` — `cg-neuf-hf4-louis-xiv`
- **Texte** : « Qui était Colbert ? » (explication : « Sa politique économique est associée au
  mercantilisme ») suivie immédiatement de « Qu'est-ce que le mercantilisme colbertiste ? ».
- **Problème** : la première question donne la réponse de la seconde. Deux questions pour une
  seule idée.
- **Correction proposée** : fusionner, ou remplacer la première par une question sur les
  compagnies de commerce ou le Code noir.

### [MINEUR] Chute de Robespierre : arrestation et exécution confondues

- **Où** : `prisma/seed/culture-g/histoire-france-4.ts` — `cg-neuf-hf4-revolution-terreur`
- **Texte** : « Son arrestation et son exécution en thermidor an II. […] Elle correspond au
  27 juillet 1794. »
- **Problème** : le 27 juillet (9 thermidor) est le jour de l'arrestation ; l'exécution a lieu
  le lendemain, 28 juillet (10 thermidor) — ce que le lot 2 dit correctement (« Il est exécuté
  le lendemain »).
- **Correction proposée** : « Arrêté le 9 thermidor (27 juillet 1794), il est guillotiné le
  lendemain. »

### [MINEUR] « Moins d'un logement sur dix » avec baignoire en 1954

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts` — `cg-neuf-hf3-vie-quotidienne`
- **Texte** : « Moins d'un logement sur dix disposait alors d'une baignoire ou d'une douche. »
- **Problème** : le recensement de 1954 donne 10,4 % — soit un peu **plus** d'un sur dix.
- **Correction proposée** : « À peine un logement sur dix disposait alors d'une baignoire ou
  d'une douche. »

### [MINEUR] Ordre chronologique inversé dans la notion sur les croisades

- **Où** : `prisma/seed/culture-g/histoire-france.ts` — `cg-neuf-hf-croisades-france`
- **Problème** : la mort de Saint Louis devant Tunis (1270, huitième croisade) est posée **avant**
  sa captivité en Égypte (1250, septième croisade). Les autres questions de la notion suivent
  l'ordre chronologique : la rupture est d'autant plus déroutante.
- **Correction proposée** : intervertir les deux questions.

### [MINEUR] « Qu'est-ce que » suivi d'un pluriel

- **Où** : surtout `prisma/seed/culture-g/histoire-france-4.ts`, une dizaine d'occurrences —
  « Qu'est-ce que les cahiers de doléances ? », « Qu'est-ce que les journées d'octobre 1789 ? »,
  « Qu'est-ce que les Trois Glorieuses ? », « Qu'est-ce que les journées de juin 1848 ? »,
  « Qu'est-ce que les guerres d'Italie ? », « Qu'est-ce que les lois Ferry ? »,
  « Qu'est-ce que les mutineries de 1917 ? », « Qu'est-ce que la Neustrie et l'Austrasie ? ».
- **Problème** : la tournure correcte au pluriel est « Que sont… ? ». Le lot 2 l'emploie
  d'ailleurs (« Que sont les cahiers de doléances ? », « Que sont les biens nationaux ? ») :
  l'incohérence est interne au domaine.
- **Correction proposée** : « Que sont les cahiers de doléances ? », etc.

### [MINEUR] « De quoi Jeanne est-elle finalement condamnée en 1431 ? »

- **Où** : `prisma/seed/culture-g/histoire-france.ts` — `cg-neuf-hf-jeanne-darc`
- **Problème** : on est condamné *pour* un motif, pas *de*. La construction correcte serait
  « De quoi est-elle accusée » ou « Pour quel motif est-elle condamnée ».
- **Correction proposée** : « Pour quel motif Jeanne est-elle condamnée en 1431 ? »

### [MINEUR] Propositions commençant par une minuscule

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts`, plusieurs notions — « l'Exposition
  coloniale internationale », « l'Hôpital général », « l'État français », « l'Agence du
  médicament, ancêtre de l'ANSM », « l'Office national d'immigration », « l'Académie des
  sciences », « l'INSERM », « l'INRAE », « l'IRSN », « l'Institut français et le réseau des
  alliances », « l'Opéra Bastille ».
- **Problème** : ailleurs dans le domaine les propositions portent la majuscule. L'irrégularité
  se voit à l'écran, et la seule proposition en minuscule d'une liste attire l'œil.
- **Correction proposée** : capitaliser (« L'Exposition coloniale internationale », etc.).

### [MINEUR] En-tête de fichier faux

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts:2`
- **Texte** : « Histoire de France, troisième lot — **vingt** notions sans cours. »
- **Problème** : le fichier en contient **dix-neuf**.
- **Correction proposée** : « dix-neuf notions ».

### [MINEUR] Distracteurs qui ne peuvent tromper personne

- **Où** : `prisma/seed/culture-g/histoire-france.ts` — `cg-neuf-hf-outre-mer-histoire`
- **Texte** : « Quel département français se trouve dans le canal du Mozambique ? » → « Mayotte » ;
  distracteurs « Les Comores », « Madagascar ».
- **Problème** : deux États souverains proposés comme départements français. Restent deux
  propositions réelles, dont une (La Réunion) hors du canal du Mozambique : la question se
  répond sans rien savoir de Mayotte.
- **Correction proposée** : remplacer par des collectivités françaises plausibles (« La Réunion »,
  « Les îles Éparses », « Les Terres australes »).

---

## Ce qui est sain

Le socle factuel est, dans son immense majorité, exact et bien calibré : dates, chiffres et
attributions résistent à la vérification presque partout — Tertry 687, la tonsure de Childéric III,
le décompte des 116 ans de la guerre de Cent Ans, les 51,04 % de Maastricht, les 13 152 arrêtés du
Vél d'Hiv, les 643 victimes d'Oradour, les 423 morts de Malpasset, les 31 d'AZF, la dernière
exécution à Marseille en 1977, la chronologie scolaire de Guizot à Haby. Plusieurs explications
font ce qu'on attend d'elles : elles apprennent quelque chose de plus que la réponse, et
quelques-unes prennent même le soin rare de signaler l'incertitude historiographique — les « rois
fainéants » présentés comme une expression de propagande carolingienne, la portée de Poitiers 732
« amplifiée par l'historiographie ultérieure », les colonnes infernales dont « la qualification
reste l'objet de débats », le bilan de la Semaine sanglante révisé à la baisse par les travaux
récents, la « diagonale du vide » signalée comme terme critiqué. Les notions thématiques du lot 3
(justice, langue, immigration, aménagement du territoire, médias) et les notions neuves du lot 4
(Commune de Paris, guerres de Religion, cathédrales gothiques, société féodale) sont du contenu
original, sans doublon, et bien construit. Le problème du domaine n'est pas la justesse : c'est
la répétition.
