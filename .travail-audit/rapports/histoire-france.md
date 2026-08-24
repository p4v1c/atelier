# Histoire de France

> ÉTAT : **passes 1 et 2 terminées.** Passe 1 : les 4 fichiers de questions, `fusions.ts`,
> `cours/histoire-france.ts`, le cahier d'origine et les 17 leçons héritées. Passe 2 : contrôles
> transversaux (astuces, fusions, dates absentes), relecture des 4 fichiers de questions,
> croisement du module chargé par `contenuDe`, relecture du fichier de cours, revérification de
> mes propres corrections de passe 1, relecture du cahier d'origine et des 17 leçons.
> Reste : rien. Voir « Ce que la seconde passe a ajouté » en fin de rapport.

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


---

# Reprise de la lecture — leçons héritées

## Ce que j'ai lu (suite)

- `heritage/culture-g/data/lecons/histoire-france/01.json` — « La Gaule et la conquête romaine »,
  5 sections, 5 questions de quiz. Lu intégralement.
- `heritage/culture-g/data/lecons/histoire-france/02.json` — « Mérovingiens et Carolingiens »,
  5 sections, 5 questions de quiz. Lu intégralement.
- `heritage/culture-g/data/lecons/histoire-france/03.json` — « Les Capétiens et la France
  médiévale (987-1328) », 5 sections, 5 questions de quiz. Lu intégralement. **Rien à signaler** :
  dates, filiations (Philippe le Bel petit-fils de Louis IX) et chronologie vérifiées, exactes.
- `heritage/culture-g/data/lecons/histoire-france/04.json` — « La guerre de Cent Ans
  (1337-1453) », 5 sections, 5 questions de quiz. Lu intégralement. **Rien à signaler** :
  Crécy 1346 (« archers gallois **et anglais** » — la leçon dit juste là où
  `cours/histoire-france.ts:378` ne dit que « gallois »), Calais 1347-1558, Poitiers 1356,
  Brétigny 1360, Azincourt 1415, Troyes 1420, Castillon 1453, les 116 ans : tout est exact.
- `heritage/culture-g/data/lecons/histoire-france/05.json` — « Renaissance et guerres de
  Religion (1494-1598) », 5 sections, 5 questions de quiz. Lu intégralement.
- `heritage/culture-g/data/lecons/histoire-france/06.json` — « Louis XIV et l'absolutisme
  (1643-1715) », 5 sections, 5 questions de quiz. Lu intégralement. Aucune erreur de fait :
  Alès 1629, Fouquet septembre 1661, remontrances supprimées en 1673, Versailles 1682,
  Fontainebleau 18 octobre 1685, Utrecht 1713 / Rastatt 1714, mort le 1er septembre 1715.
  La leçon écrit d'ailleurs prudemment « Les traités de Westphalie, en 1648, donnent à la France
  **des droits** en Alsace », là où `histoire-france.ts` (`hf-richelieu-mazarin`) écrit « La France
  y gagne l'Alsace » — le constat [MOYEN] correspondant est confirmé.
- `heritage/culture-g/data/lecons/histoire-france/07.json` — « La IIIe République (1870-1940) »,
  5 sections, 5 questions de quiz. Lu intégralement. **Rien à signaler** : Sedan 2 septembre,
  proclamation le 4, Francfort 10 mai 1871, amendement Wallon à une voix, 16 mai 1877,
  Ferry 1881/1882, Goblet 1886, Naquet et Waldeck-Rousseau 1884, Carnot 1894, J'accuse
  13 janvier 1898, réhabilitation 1906, loi du 9 décembre 1905, charte d'Amiens 1906,
  10 juillet 1940 — vérifiés, exacts.
- `heritage/culture-g/data/lecons/histoire-france/08.json` — « La Restauration et la monarchie
  de Juillet (1814-1848) », 5 sections, 5 questions de quiz. Lu intégralement.
- `heritage/culture-g/data/lecons/histoire-france/09.json` — « La IIe République et le Second
  Empire (1848-1870) », 5 sections, 5 questions de quiz. Lu intégralement.
- `heritage/culture-g/data/lecons/histoire-france/10.json` — « La Commune de Paris (1871) »,
  5 sections, 5 questions de quiz. Lu intégralement. **Rien à signaler** : 18 mars - 28 mai,
  72 jours, élections du 26 mars, proclamation du 28, colonne Vendôme le 16 mai, Darboy le 24,
  rue Haxo le 26, Delescluze le 25, amnisties de 1879 et 1880 — exacts. La leçon prend même le
  soin de signaler que le bilan humain « s'échelonne d'environ 6 000 à 20 000 » selon les
  auteurs, précaution que peu de textes du domaine s'imposent.
- `heritage/culture-g/data/lecons/histoire-france/11.json` — « L'affaire Dreyfus (1894-1906) »,
  5 sections, 5 questions de quiz. Lu intégralement. Chronologie exacte de bout en bout
  (arrestation 15 octobre 1894, condamnation 22 décembre, dégradation 5 janvier 1895,
  acquittement d'Esterhazy janvier 1898, faux Henry août 1898, Rennes 1899, cassation sans
  renvoi le 12 juillet 1906, attentat de 1908 au Panthéon).
- `heritage/culture-g/data/lecons/histoire-france/12.json` — « Vichy, la Résistance et la
  Libération (1940-1945) », 5 sections, 5 questions de quiz. Lu intégralement. Chiffres et dates
  vérifiés, exacts : 569 voix contre 80, statut des Juifs du 3 octobre 1940, Montoire
  24 octobre 1940, invasion de la zone sud le 11 novembre 1942, STO février 1943, Milice
  janvier 1943, MUR janvier 1943, CNR 27 mai 1943, Caluire 21 juin 1943, Oradour 10 juin 1944,
  ordonnance du 21 avril 1944, environ 75 000 déportés juifs dont moins de 3 000 revenus.
- `heritage/culture-g/data/lecons/histoire-france/13.json` — « La IVe République et la
  reconstruction (1946-1958) », 5 sections, 5 questions de quiz. Lu intégralement. Dates exactes
  (référendum du 21 octobre 1945, rejet du 5 mai 1946, adoption du 13 octobre, entrée en vigueur
  du 27 octobre, démission du 20 janvier 1946, CECA 1951, CED 1954, Rome 25 mars 1957,
  Diên Biên Phu 7 mai 1954, 1er novembre 1954, 13 mai et 1er juin 1958, 28 septembre 1958).
- `heritage/culture-g/data/lecons/histoire-france/14.json` — « La Ve République, de 1958 à nos
  jours », 5 sections, 5 questions de quiz. Lu intégralement. Aucune erreur de fait, jusqu'à
  l'inscription de l'IVG dans la Constitution le 4 mars 2024. La leçon écrit d'ailleurs
  « Régime le plus durable **depuis 1789** après la Troisième République » : c'est exactement la
  restriction que l'astuce de `cg-neuf-hf4-troisieme-republique` laisse tomber, ce qui confirme
  le constat correspondant.
- `heritage/culture-g/data/lecons/histoire-france/15.json` — « La guerre d'Algérie (1954-1962) »,
  5 sections, 5 questions de quiz. Lu intégralement. **Rien à signaler**, et c'est l'une des
  leçons les mieux faites du domaine : elle date correctement (Toussaint rouge, pouvoirs spéciaux
  de 1956, 16 septembre 1959, putsch d'avril 1961, Évian le 18 mars, cessez-le-feu le 19,
  référendum du 8 avril, indépendance le 5 juillet 1962) et, sur le bilan humain, elle donne les
  fourchettes concurrentes en disant qui les avance, au lieu de trancher — 25 000 militaires
  français, « 250 000 à 400 000 morts » côté algérien selon les évaluations françaises, « un
  million et demi de martyrs » selon l'Algérie.
- `heritage/culture-g/data/lecons/histoire-france/16.json` — « L'empire colonial français
  (XVIe-XXe siècle) », 5 sections, 5 questions de quiz. Lu intégralement. Faits exacts (Cartier
  1534, Québec 1608, Code noir 1685, Paris 1763, Louisiane 1803, Haïti 1804, Abd el-Kader 1847,
  indigénat du 28 juin 1881, AOF 1895, AEF 1910, Lamine Guèye mai 1946, Vanuatu 1980).
- `heritage/culture-g/data/lecons/histoire-france/17.json` — « Les Trente Glorieuses et Mai 68
  (1945-1975) », 5 sections, 5 questions de quiz. Lu intégralement. Chronologie de mai exacte
  (Sorbonne le 3, barricades du 10 au 11, manifestation du 13, Grenelle du 25 au 27,
  Baden-Baden le 29, allocution du 30), et le SMIG relevé d'environ 35 %.

**Total de la passe 1 : 75 notions neuves (730 questions), 53 cours neufs, le cahier d'origine
(60 questions, 3 cours) et les 17 leçons héritées (85 sections, 85 questions de quiz).**

## Constats (suite)

### [MOYEN] La leçon héritée dit juste là où le cours neuf dit faux (rois fainéants, Brunehaut)

- **Où** : `heritage/culture-g/data/lecons/histoire-france/02.json`, section « Le royaume
  mérovingien : partages et déclin »
- **Texte** : « La tradition les a longtemps appelés les rois fainéants, expression péjorative
  **forgée plus tard** et que les historiens jugent injuste. » ; « La fin du VIe siècle est
  marquée par la lutte sanglante entre les reines Brunehaut […] et Frédégonde. »
- **Problème** : ce n'est pas un défaut de la leçon, c'est une pièce à charge contre le corpus
  neuf. La leçon héritée date correctement l'expression *après* l'époque carolingienne, alors
  que `cours/histoire-france.ts:13` et `:245` l'attribuent à Éginhard ; et elle borne la
  rivalité à « la fin du VIe siècle », alors que `cours/histoire-france.ts:232` l'étire à
  quarante ans. Les deux constats déjà consignés plus haut sont donc confirmés sur pièces :
  c'est bien le corpus neuf qui a dérivé, pas le cahier d'origine.
- **Correction proposée** : aucune sur la leçon ; aligner le corpus neuf sur elle.

### [MOYEN] Collège royal : la leçon héritée tranche, et c'est le corpus neuf qui a tort

- **Où** : `heritage/culture-g/data/lecons/histoire-france/05.json`, section « François Ier et
  l'État royal »
- **Texte** : « Il crée en 1530 un collège de lecteurs royaux, ancêtre du Collège de France, où
  l'on enseigne **le grec et l'hébreu** hors de l'université. »
- **Problème** : la leçon d'origine est exacte — la fondation de 1530 crée des lecteurs royaux
  de grec et d'hébreu, rien d'autre. Le corpus neuf ajoute une troisième discipline, et pas la
  même selon le fichier : « le latin » dans `cours/histoire-france.ts:64`, « les mathématiques »
  dans les questions de `histoire-france.ts` et `histoire-france-2.ts`. Le constat [MOYEN]
  « Le Collège royal : le cours dit latin, les questions disent mathématiques » est donc tranché :
  aucun des deux n'a raison contre la leçon, ils ont tort tous les deux.
- **Correction proposée** : aligner les trois textes neufs sur « le grec et l'hébreu », en
  précisant si l'on veut que le latin et les mathématiques sont ajoutés dans les décennies
  suivantes.

### [MINEUR] Cent-Jours : deux bornes qui se chevauchent dans la même section

- **Où** : `heritage/culture-g/data/lecons/histoire-france/08.json`, section « La Première
  Restauration et les Cent-Jours »
- **Texte** : « La Première Restauration commence le 6 avril 1814 et prend fin le **20 mars
  1815**. » puis, six lignes plus bas, « l'Empereur reprend le pouvoir pour la période dite des
  Cent-Jours, **du 1er mars au 18 juin 1815** ».
- **Problème** : les deux bornes se chevauchent de vingt jours. Le 1er mars est le débarquement
  à Golfe-Juan, le 20 mars l'entrée aux Tuileries : la même section fait donc coexister deux
  régimes pendant trois semaines. L'usage retient les Cent-Jours du 20 mars au 22 juin (ou au
  8 juillet, retour de Louis XVIII) — soit une centaine de jours, ce que « 1er mars - 18 juin »
  ne donne pas non plus (109 jours).
- **Correction proposée** : « … pour la période dite des Cent-Jours, du 20 mars au 22 juin 1815 »,
  en gardant le 1er mars pour le seul débarquement.

### [MOYEN] La leçon héritée borne correctement la monarchie de Juillet — le lot 4 non

- **Où** : `heritage/culture-g/data/lecons/histoire-france/08.json`, section « La monarchie de
  Juillet, régime bourgeois (1830-1848) », contre `prisma/seed/culture-g/histoire-france-4.ts`
  (`cg-neuf-hf4-restauration`) et `cours/histoire-france.ts:596`
- **Texte** : leçon — « La monarchie de Juillet, qui dure **du 9 août 1830 au 24 février 1848** » ;
  lot 4 — « Trois régimes se succèdent entre 1815 et 1848 ».
- **Problème** : la leçon d'origine est exacte et précise ; c'est le corpus neuf qui a fabriqué
  la borne fausse. Confirme les deux constats déjà consignés (astuce `hf4-restauration` et
  section « Trois régimes en trente-trois ans »).
- **Correction proposée** : voir ces constats — « entre 1815 et 1852 ».

### [MOYEN] Sedan : la leçon 09 date la capitulation du 1er septembre, tout le reste du domaine du 2

- **Où** : `heritage/culture-g/data/lecons/histoire-france/09.json`, section « Politique
  extérieure, Empire libéral et effondrement de 1870 » **et** la bonne réponse de son quiz 4
- **Texte** : « le **1er septembre 1870**, la défaite de Sedan se solde par la capture de
  l'Empereur » ; choix juste : « La **capitulation** de Napoléon III à Sedan le **1er septembre
  1870** ».
- **Problème** : le 1er septembre est le jour de la **bataille** ; la **capitulation** est signée
  le **2 septembre**, l'empereur remettant son épée à Guillaume Ier ce jour-là. Tous les autres
  textes du domaine disent 2 septembre : `heritage/culture-g/data/lecons/histoire-france/07.json`
  (« Le 2 septembre 1870, à Sedan, Napoléon III capitule »),
  `heritage/culture-g/data/histoire-france.json:412` (« Le 2 septembre 1870, l'armée française
  encerclée à Sedan capitule ») et `cours/histoire-france.ts:650` (« elle capitule le
  2 septembre »). La leçon 09 est donc seule contre quatre, et l'erreur est logée dans la
  **chaîne de la bonne réponse** d'une question — c'est-à-dire dans ce que l'apprenant répétera.
  Elle rend en outre incohérent l'enchaînement « deux jours plus tard, le 4 septembre » que la
  leçon 07 construit sur le 2.
- **Correction proposée** : section — « le 2 septembre 1870, au lendemain de la bataille de
  Sedan, l'armée encerclée capitule et l'Empereur est fait prisonnier » ; choix juste — « La
  capitulation de Napoléon III à Sedan le 2 septembre 1870 ».

### [MOYEN] La même question sur *J'accuse* posée dans deux leçons du même domaine

- **Où** : `heritage/culture-g/data/lecons/histoire-france/07.json` quiz 2 et
  `heritage/culture-g/data/lecons/histoire-france/11.json` quiz 2
- **Texte** : « Quel texte publié par Émile Zola en janvier 1898 relance l'affaire Dreyfus ? »
  → « J'accuse » ; et « Où et quand paraît le texte J'accuse d'Émile Zola ? » → « Dans L'Aurore,
  le 13 janvier 1898 ».
- **Problème** : le même apprenant suit les deux leçons — 07 « La IIIe République » et 11
  « L'affaire Dreyfus » sont deux chapitres du même parcours. Les deux explications reprennent
  d'ailleurs les mêmes éléments dans le même ordre (L'Aurore, lettre ouverte au président,
  condamnation à un an de prison, exil en Angleterre, réhabilitation de 1906). La seconde
  question est en outre plus facile après la première, puisque celle-ci a déjà donné le nom du
  texte. Plus largement, toute la section 2 de la leçon 07 est un résumé de la leçon 11 :
  Dreyfus, Picquart, Esterhazy, *J'accuse*, la grâce de 1899 et la réhabilitation de 1906 y sont
  déjà exposés.
- **Correction proposée** : garder la question de la leçon 11, seule leçon consacrée à l'affaire,
  et remplacer celle de la leçon 07 par une question sur un fait propre à cette leçon
  (boulangisme, scandale de Panama, assassinat de Sadi Carnot), qui n'est pour l'instant testé
  par aucune question.

### [MOYEN] Vél d'Hiv : c'est le cahier d'origine, et lui seul, qui donne 12 884

- **Où** : `heritage/culture-g/data/lecons/histoire-france/12.json` (section « La Révolution
  nationale… » et quiz 2) contre `heritage/culture-g/data/histoire-france.json`, question 44
- **Texte** : leçon — « **plus de 13 000** Juifs, dont plus de 4 000 enfants » (deux fois) ;
  cahier — « la police française arrête à Paris et en banlieue **12 884** Juifs ».
- **Problème** : précision du constat déjà consigné plus haut. Le désaccord n'oppose pas
  l'héritage au corpus neuf : à l'intérieur même de l'héritage, la leçon détaillée dit « plus de
  13 000 » comme le corpus neuf, et seule la question 44 du cahier retient 12 884 — chiffre des
  seules arrestations recensées le premier jour, longtemps repris. Le décompte du Mémorial de la
  Shoah est de 13 152 personnes, dont 4 115 enfants.
- **Correction proposée** : corriger la seule question 44 du cahier, en « 13 152 personnes, dont
  4 115 enfants », et laisser les leçons telles quelles.

### [MINEUR] IVe République : la leçon d'origine porte elle-même les deux décomptes

- **Où** : `heritage/culture-g/data/lecons/histoire-france/13.json`, section « Des institutions
  parlementaires… » et quiz 2 (choix juste **et** explication)
- **Texte** : section — « environ **vingt-quatre** gouvernements se succèdent en une douzaine
  d'années » ; choix juste — « une **vingtaine** de gouvernements en douze ans » ; explication du
  même quiz — « environ **vingt-quatre** cabinets en une douzaine d'années ».
- **Problème** : voilà l'origine du désaccord relevé plus haut entre `histoire-france-2.ts`
  (« vingt-quatre ») et `histoire-france-4.ts` (« une vingtaine »). Ce n'est pas le corpus neuf
  qui a inventé la divergence : il a recopié les deux formulations d'une même leçon, qui hésite
  entre elles à trois lignes d'intervalle. La chaîne de la bonne réponse dit « une vingtaine »
  et l'explication qui la suit dit « vingt-quatre ».
- **Correction proposée** : fixer un seul décompte — le plus courant est vingt-deux gouvernements
  entre janvier 1947 et mai 1958 — et l'employer dans la leçon comme dans les quatre textes neufs.

### [MOYEN] Le quinquennat, quatrième fois — la leçon héritée pose la même question que trois notions neuves

- **Où** : `heritage/culture-g/data/lecons/histoire-france/14.json` quiz 3 ;
  `prisma/seed/culture-g/histoire-france.ts:291` ; `prisma/seed/culture-g/histoire-france-2.ts:446` ;
  `prisma/seed/culture-g/histoire-france-4.ts` (`cg-neuf-hf4-cinquieme-republique`)
- **Texte** : « Quelle réforme les Français approuvent-ils par référendum en septembre 2000 ? »
  → « La réduction du mandat présidentiel de sept à cinq ans » ; « Quelle réforme de 2000
  raccourcit le mandat présidentiel ? » ; « Quelle réforme de 2000 réduit la durée du mandat
  présidentiel ? » ; et la question du lot 4.
- **Problème** : le doublon triple déjà signalé dans le corpus neuf est en réalité un quadruplon,
  la leçon héritée posant la même chose une quatrième fois. Or `hf4-cinquieme-republique` est
  versée dans `hf2-cinquieme-republique` : après chargement du module, l'apprenant rencontre la
  question sur le quinquennat au moins trois fois dans la même série. Même remarque, à un degré
  moindre, pour la cohabitation (leçon 14 quiz 2 + trois questions neuves) et pour la QPC
  (leçon 14 quiz 4 + deux questions neuves).
- **Correction proposée** : ne conserver qu'une question par fait. Le quinquennat étant déjà
  traité par la leçon héritée, c'est dans les lots neufs qu'il faut supprimer, pas l'inverse.

### [MOYEN] La leçon 16 refait la section coloniale de la leçon 07, liste de dates comprise

- **Où** : `heritage/culture-g/data/lecons/histoire-france/07.json`, section « L'empire colonial
  et la société de la Belle Époque », et `heritage/culture-g/data/lecons/histoire-france/16.json`,
  section « L'apogée sous la IIIe République »
- **Texte** : 07 — « Jules Ferry en est le principal promoteur, invoquant à la fois des raisons
  économiques, la recherche de débouchés et de matières premières, stratégiques, et une prétendue
  mission civilisatrice […]. La France impose son protectorat sur la Tunisie en 1881, conquiert
  le Tonkin et l'Annam […], s'installe à Madagascar en 1895 et au Maroc en 1912 […]. En 1898, la
  crise de Fachoda […] se termine par le recul français. Le second empire colonial du monde,
  après le britannique… » / 16 — « Jules Ferry […] défend devant la Chambre l'idée d'une mission
  civilisatrice […]. La Tunisie devient protectorat en 1881, l'Annam et le Tonkin sont soumis
  […]. Madagascar est conquise en 1895 […], le Maroc devient protectorat en 1912. La rivalité
  avec les Britanniques manque de dégénérer en guerre lors de la crise de Fachoda, en 1898 […]
  la deuxième puissance coloniale du monde derrière le Royaume-Uni. »
- **Problème** : même argumentaire, mêmes six dates, même conclusion, dans deux leçons que le
  même apprenant suit. Le procédé se répète en petit : le statut départemental de l'Algérie « à
  partir de 1848 » est énoncé trois fois — leçon 15 section 1, leçon 16 section 2 et
  l'explication du quiz 1 de la leçon 16 — dans des termes presque identiques.
- **Correction proposée** : dans la leçon 07, réduire la section coloniale à ce qu'elle apporte
  en propre — l'articulation entre expansion et politique intérieure de la IIIe République — et
  laisser à la leçon 16 le déroulé des conquêtes et des dates.

### [MOYEN] Mai 68 : une quatrième estimation du nombre de grévistes, et c'est une bonne réponse

- **Où** : `heritage/culture-g/data/lecons/histoire-france/17.json`, section « La plus grande
  grève de l'histoire de France » et **choix juste** du quiz 2
- **Texte** : « **Près de dix millions** de salariés cessent le travail » ; « Combien de salariés
  participent à la grève générale de mai-juin 1968 ? » → « **Environ dix millions** ».
- **Problème** : complète le constat déjà consigné sur les fourchettes divergentes. Le domaine
  donne maintenant quatre chiffres pour un seul fait : « 7 à 10 millions »
  (`heritage/culture-g/data/histoire-france.json`, question 50), « environ sept à neuf millions »
  (`histoire-france-2.ts`), « entre sept et neuf millions » (`histoire-france-3.ts`), « sept à
  neuf millions » (`cours/histoire-france.ts`) et « près de dix millions » ici. La valeur haute
  isolée est celle qui figure dans la **chaîne de la bonne réponse** d'une question : un
  apprenant qui a retenu « sept à neuf millions » du corpus neuf lit ici que la réponse est dix.
  Les distracteurs (cent mille, un million, trente millions) sont si éloignés que la question
  reste soluble, mais le chiffre appris est le mauvais.
- **Correction proposée** : « sept à neuf millions » partout, y compris dans le choix juste de ce
  quiz, avec des distracteurs recalibrés (« environ un million », « environ trois millions »,
  « environ vingt millions »).

---

# Passe 2

> Relecture intégrale du périmètre, sans relire mes notes d'abord. Ce qui suit n'était pas
> dans la passe 1.

### [GRAVE] Huit astuces donnent la réponse littérale d'une question de leur propre notion

L'astuce (cinquième argument de `notion()`) est le premier texte que l'apprenant lit quand il
ouvre le chapitre. Dans huit notions, elle contient mot pour mot la bonne réponse d'une des
questions qui suivent — et cinq fois, c'est la **toute première** question, deux lignes plus bas
dans le fichier. La question ne mesure alors plus rien : elle vérifie que l'apprenant sait lire.

| Où | L'astuce | La question, et sa bonne réponse |
|---|---|---|
| `histoire-france-3.ts:218` / `:220` — `hf3-decentralisation-territoires` | « L'expression **Paris et le désert français** date de **1947**. » | « Quel ouvrage de **1947** dénonce le déséquilibre entre Paris et la province ? » → « **Paris et le désert français** » |
| `histoire-france-2.ts:312` / `:314` — `hf2-second-empire` | « **Le suffrage universel masculin**, instauré **en 1848**, n'a jamais été supprimé depuis. » | « Quelle avancée majeure la Deuxième République instaure-t-elle **en 1848** ? » → « **Le suffrage universel masculin** » |
| `histoire-france-2.ts:442` / `:444` — `hf2-cinquieme-republique` | « L'élection du président **au suffrage universel direct** date de **1962**, pas de 1958. » | « Quelle réforme de **1962** modifie l'élection du président ? » → « Son élection **au suffrage universel direct** » |
| `histoire-france-3.ts:142` / `:144` — `hf3-sante-france` | « L'hôpital français est passé d'**un lieu d'accueil des pauvres** à un lieu de soin technique. » | « Qu'était l'hôtel-Dieu médiéval ? » → « **Un lieu d'accueil des pauvres**, des malades et des voyageurs » |
| `histoire-france-2.ts:208` / `:210` — `hf2-revolution-1789` | « La Révolution commence par **une crise financière** que la monarchie ne parvient pas à résoudre. » | « Pourquoi Louis XVI convoque-t-il les états généraux en 1789 ? » → « Pour résoudre **une crise financière** » |
| `histoire-france.ts:119` / `:127` — `hf-francois-premier` | « L'ordonnance de Villers-Cotterêts, en 1539 […] : il impose **le français dans les actes** officiels. » | « Que prévoit l'ordonnance de Villers-Cotterêts en 1539 ? » → « L'usage du **français dans les actes** de justice et l'état civil » |
| `histoire-france.ts:145` / `:155` — `hf-richelieu-mazarin` | « Mazarin sert la régente **Anne d'Autriche**. » | « Qui exerce le pouvoir pendant la minorité de Louis XIV ? » → « **Anne d'Autriche** et Mazarin » |
| `histoire-france.ts:169` / `:185` — `hf-lumieres-france` | « … et un blocage politique **des parlements**. » | « Comment appelle-t-on les tribunaux qui s'opposent aux réformes royales ? » → « **Les parlements** » |

Deux cas voisins, plus légers : `hf2-carolingiens` (« Le **partage** de Verdun de 843 » /
« Que décide le traité de Verdun en 843 ? » → « **Le partage** de l'Empire entre les trois fils
de Louis le Pieux ») et `hf-etat-providence` (« **1936** donne les **congés payés**, 1945 crée la
Sécurité sociale » / « Quelles avancées le Front populaire obtient-il en **1936** ? » → « **Congés
payés**, semaine de quarante heures et conventions collectives »).

- **Problème** : ce n'est pas un hasard de vocabulaire. Dans cinq des huit cas, l'astuce et la
  question qu'elle éventre se suivent immédiatement dans le fichier, ce qui suggère que
  l'astuce a été écrite à partir de la première question plutôt qu'en amont du chapitre. L'effet
  est le contraire de celui recherché : l'astuce doit orienter la lecture, pas fournir une
  réponse à recopier.
- **Correction proposée** : réécrire chaque astuce pour qu'elle donne un **angle**, jamais un
  contenu testé. Par exemple, pour `hf3-decentralisation-territoires` : « L'aménagement du
  territoire naît d'un constat de déséquilibre formulé à la fin des années 1940 ; retenez la
  chronologie des institutions qui en sortent. » Pour `hf2-second-empire` : « Un même régime peut
  élargir le droit de vote et confisquer le pouvoir : suivez ce double mouvement de 1848 à 1852. »

### [GRAVE] Cinq questions neuves atterrissent, après fusion, dans le chapitre qui pose déjà la même question

La passe 1 avait mesuré les doublons entre notions neuves. Elle avait manqué l'autre versant :
`FUSIONS` verse neuf notions du domaine **dans une leçon héritée**, et cette leçon a son propre
quiz. `verser()` n'écarte que les clés strictement identiques : les cinq paires ci-dessous
franchissent le filtre et se retrouvent dans le même chapitre, à quelques questions d'écart.

| Chapitre d'accueil | La question neuve | La question du quiz hérité |
|---|---|---|
| `cg-histoire-france-10` « La Commune de Paris » ← `hf4-commune` | `histoire-france-4.ts:474` — « Qu'est-ce qui a déclenché l'insurrection du 18 mars 1871 ? » → « La tentative de récupérer les canons de la garde nationale à Montmartre » | `lecons/histoire-france/10.json` quiz 0 — « Quel événement déclenche l'insurrection parisienne du 18 mars 1871 ? » → « La tentative de l'armée de reprendre les canons de Montmartre » |
| `cg-histoire-france-c03` « La France dans les deux guerres mondiales » ← `hf4-france-guerres` | `histoire-france-4.ts:530` — « Qu'est-ce que les mutineries de 1917 ? » → « Des refus d'obéissance après l'échec de **l'offensive du Chemin des Dames** » | `histoire-france.json`, cours 3 — « Quelle **offensive** française de 1917 provoque des **mutineries** dans l'armée ? » → « **L'offensive du Chemin des Dames** » |
| `cg-histoire-france-01` « La Gaule et la conquête romaine » ← `hf2-gaule-romaine` | `histoire-france-2.ts:16` — « Quelle ville devient la capitale des Gaules sous Auguste ? » → « Lugdunum, l'actuelle Lyon » | `lecons/histoire-france/01.json` quiz 1 — « Quelle ville Auguste fait-il de la capitale de la Gaule romaine…? » → « Lugdunum (Lyon) » |
| `cg-histoire-france-08` « La Restauration et la monarchie de Juillet » ← `hf2-restauration-monarchie-juillet` | `histoire-france-2.ts:288` — « Quel texte fonde le régime de la Restauration en 1814 ? » → « La Charte constitutionnelle » | `lecons/histoire-france/08.json` quiz 0 — « Quel texte sert de fondement constitutionnel à la Restauration ? » → « La Charte octroyée du 4 juin 1814 » |
| `cg-histoire-france-05` « Renaissance et guerres de Religion » ← `hf4-guerres-religion` | `histoire-france-4.ts:260` — « Qu'est-ce que l'édit de Nantes ? » → « Un texte de 1598 accordant une liberté de culte encadrée aux protestants » | `lecons/histoire-france/05.json` quiz 3 — « Que garantit l'édit de Nantes signé en avril 1598 ? » → « La liberté de conscience et un culte protestant limité à certains lieux » |

- **Problème** : la paire du Chemin des Dames est la plus grave, parce que les deux questions
  s'entre-répondent : la seconde a pour bonne réponse exactement la locution que la première
  donne dans sa propre bonne réponse. Quel que soit l'ordre de tirage, la première rencontrée
  résout la seconde. Les quatre autres sont des redites franches : même fait, même réponse, à
  la reformulation près. Ce constat corrige aussi une affirmation de ma passe 1, qui donnait
  `hf4-commune` pour « du contenu original, sans doublon » : c'est vrai face aux autres notions
  neuves, faux face à la leçon qui l'absorbe.
- **Correction proposée** : supprimer la question neuve dans les cinq cas — le quiz hérité est
  mieux daté et mieux formulé —, et remplacer, dans `hf4-france-guerres`, la question sur les
  mutineries par une question sur leur traitement (Pétain, les conseils de guerre, les
  fusillés pour l'exemple), que rien ne teste aujourd'hui.

### [GRAVE] « Quand François Mitterrand a-t-il été élu ? » — la bonne date est absente du cours, la seule qu'il donne est un distracteur

- **Où** : `prisma/seed/culture-g/histoire-france-4.ts:586` — `cg-neuf-hf4-cinquieme-republique`,
  versée par `FUSIONS_INTERNES` dans `hf2-cinquieme-republique`
- **Texte** : « Quand François Mitterrand a-t-il été élu ? » — propositions : « **En 1981** »,
  « En 1974 », « En 1988 seulement », « En 1978 » ; bonne réponse : 1981.
- **Problème** : le chapitre qui recevra cette question est `hf2-cinquieme-republique`, et son
  cours (`cours/histoire-france.ts`, quatre sections) **ne nomme jamais François Mitterrand et
  n'écrit jamais 1981**. Il écrit en revanche « **La réforme de 1974** élargit la saisine du
  Conseil constitutionnel » — 1974 est donc le seul des quatre millésimes que le cours donne,
  et c'est un distracteur. L'apprenant qui a lu le cours et cherche à s'y raccrocher est conduit
  vers la mauvaise case : il est puni d'avoir lu la leçon. La question est par ailleurs
  insoluble à partir du chapitre, ce qui contrevient à la règle « une question doit pouvoir se
  répondre après avoir lu son cours ».
- **Correction proposée** : deux options. Soit supprimer la question — 1981 est déjà traité par
  `hf-france-1970-2000`, dont le cours dit « François Mitterrand est élu en 1981 ». Soit ajouter
  au cours de `hf2-cinquieme-republique` la phrase qui manque, dans la section « Un régime qui
  se corrige » : « La première alternance, en 1981, montre que le régime peut changer de camp
  sans changer de constitution. » Et remplacer « En 1988 seulement » par « En 1986 », distracteur
  plausible (première cohabitation) au lieu d'un distracteur neutralisé par un adverbe.

### [MOYEN] Cinq autres bonnes réponses datées que le chapitre d'accueil ne date jamais

Même vérification, appliquée à toutes les notions versées par `FUSIONS` et `FUSIONS_INTERNES` :
cinq autres questions ont pour bonne réponse une date que le cours ou la leçon d'accueil ne
donne nulle part. Aucun distracteur n'y est en revanche mieux placé, ce qui les rend moins
graves que le cas Mitterrand — mais elles restent sans appui dans le chapitre.

| Question | Chapitre d'accueil | La date manquante |
|---|---|---|
| `histoire-france-4.ts:134` « Quelle crise met fin aux Capétiens directs ? » → « L'absence d'héritier mâle après **1316** » | `hf2-capetiens` | le cours s'arrête à 1314 et ne mentionne ni 1316, ni 1328, ni la crise successorale |
| `histoire-france-4.ts:562` « Quel rôle la France a-t-elle joué dans la construction européenne ? » → « Un rôle initiateur avec la CECA en **1951** » | `hf2-quatrieme-republique` | le cours ne connaît que « le traité de Rome, signé en 1957 » ; ni CECA, ni Schuman, ni 1951 |
| `histoire-france-4.ts:462` « Qu'est-ce que la perte de l'Alsace-Moselle ? » → « … le traité de Francfort en **1871** » | `cg-histoire-france-09` (leçon « La IIe République et le Second Empire ») | la leçon s'achève au 4 septembre 1870 ; Francfort est raconté dans la leçon 07 |
| `histoire-france-4.ts:264` « Quand l'édit de Nantes a-t-il été révoqué ? » → « En **1685**, par Louis XIV » | `cg-histoire-france-05` (leçon « Renaissance et guerres de Religion ») | 1685 n'apparaît que dans l'explication d'un autre quiz, jamais dans le texte de la leçon |
| `histoire-france-2.ts:304` « Quelle crise […] précipite la chute de Louis-Philippe ? » → « La crise de **1846-1847** … » | `cg-histoire-france-08` | la leçon parle de la campagne des banquets sans jamais dater la crise économique |

- **Correction proposée** : ajouter la date manquante au chapitre d'accueil — une proposition
  subordonnée suffit dans chaque cas — plutôt que de retoucher les questions, qui sont justes.

## Passe 2 — relecture de `prisma/seed/culture-g/histoire-france.ts` (13 notions, 127 questions)

### [MOYEN] Jeanne d'Arc : « quatre ans qui font basculer la guerre de Cent Ans »

- **Où** : `prisma/seed/culture-g/histoire-france.ts:99` — `cg-neuf-hf-jeanne-darc`, description de
  la notion
- **Texte** : « Une paysanne de dix-sept ans, un siège levé en neuf jours, un sacre à Reims, un
  procès à Rouen : **quatre ans** qui font basculer la guerre de Cent Ans. »
- **Problème** : le compte ne tient sous aucune lecture. Jeanne quitte Domrémy en janvier 1429,
  rencontre Charles VII en mars, est brûlée le 30 mai 1431 : **deux ans et quatre mois**. Même
  en partant de sa première démarche auprès de Baudricourt, en mai 1428, on n'atteint que trois
  ans. Le chiffre est d'autant plus regrettable qu'il ouvre la notion : c'est la phrase de
  présentation du chapitre, lue avant toute question. Les autres nombres de la même phrase sont
  justes (dix-sept ans, neuf jours).
- **Correction proposée** : « … : deux ans qui font basculer la guerre de Cent Ans. »

### [MINEUR] Distracteurs fantaisistes dans la notion sur les symboles

- **Où** : `prisma/seed/culture-g/histoire-france.ts` — `cg-neuf-hf-symboles-republique`
- **Texte** : « Quel coq figure parmi les emblèmes français ? » → « Le coq gaulois » ;
  distracteurs « Le coq d'or », « Le coq de Bruyère », « Le coq de Sarlat ».
- **Problème** : même défaut que la question sur Mayotte relevée en passe 1 — un oiseau de
  montagne et une volaille de basse-cour proposés comme emblèmes nationaux. L'énoncé se répond
  sans rien savoir. Le sujet mériterait une vraie question (« Pourquoi le coq est-il devenu un
  emblème français ? » → le jeu de mots latin *gallus*, que l'explication donne déjà).
- **Correction proposée** : remplacer par une question sur l'origine du symbole, ou par des
  distracteurs qui soient de véritables emblèmes (« La fleur de lys », « L'aigle impérial »,
  « L'abeille napoléonienne »).

*Rien d'autre de neuf sur ce fichier : les onze autres notions résistent à la seconde lecture,
y compris les chiffres que j'ai revérifiés un à un (28 volumes et plus de 60 000 articles pour
l'Encyclopédie, 3 070 m pour le piton des Neiges, 51,04 % pour Maastricht, La Rochelle assiégée
quatorze mois, Notre-Dame commencée en 1163, les Invalides fondés en 1670, l'Arc de triomphe
1806-1836, le Louvre musée en 1793, le Mont-Saint-Michel prison jusqu'en 1863).*

## Passe 2 — relecture de `prisma/seed/culture-g/histoire-france-2.ts` (20 notions, 190 questions)

### [GRAVE] Une neuvième astuce qui donne la réponse — celle de la zone économique exclusive

- **Où** : `prisma/seed/culture-g/histoire-france-2.ts:466` et `:480` —
  `cg-neuf-hf2-france-outre-mer`
- **Texte** : astuce — « Grâce à ses outre-mer, la France dispose de la **deuxième** zone
  économique exclusive du monde. » ; question — « Quel rang la France occupe-t-elle pour la
  taille de sa **zone économique exclusive** ? » → « **Le deuxième** mondial ».
- **Problème** : à ajouter au tableau des huit astuces relevées plus haut ; celle-ci est la plus
  franche de toutes, puisque l'astuce et la question portent sur exactement la même grandeur et
  que le mot de la réponse y figure tel quel. Elle avait échappé à mon relevé automatique parce
  que la réponse est courte (« Le deuxième mondial »).
- **Correction proposée** : « Les outre-mer représentent moins de 1 % de la population française
  mais l'essentiel de son espace maritime : c'est là que se joue le rang de la France sur les
  océans. »

### [MOYEN] *Les Misérables* (1862) dans un chapitre qui s'arrête en 1848

- **Où** : `prisma/seed/culture-g/histoire-france-2.ts:302` —
  `cg-neuf-hf2-restauration-monarchie-juillet`, versée dans la leçon héritée
  `cg-histoire-france-08` « La Restauration et la monarchie de Juillet (1814-1848) »
- **Texte** : « Quel écrivain publie **Les Misérables en 1862** après un long exil ? » →
  « Victor Hugo » ; explication : « Opposant à **Napoléon III**, il vécut près de vingt ans hors
  de France. »
- **Problème** : la question et son explication sont exactes, mais elles portent sur le Second
  Empire et n'ont rien à faire dans un chapitre dont le titre, la description (« 1815-1848 :
  deux monarchies constitutionnelles ») et la leçon d'accueil s'arrêtent en février 1848.
  L'apprenant qui révise la monarchie de Juillet se voit interroger sur 1862 et sur un régime
  qu'il n'a pas encore étudié — et la réponse ne se trouve nulle part dans le chapitre.
- **Correction proposée** : déplacer la question dans `hf2-second-empire`, où elle est chez elle,
  ou la remplacer par une question sur la production littéraire de la période effectivement
  couverte (Balzac et *La Comédie humaine*, Stendhal, *Notre-Dame de Paris* en 1831).

### [MINEUR] La description de `hf2-capetiens` ne couvre pas ses propres questions

- **Où** : `prisma/seed/culture-g/histoire-france-2.ts:61` — `cg-neuf-hf2-capetiens`
- **Texte** : « **De Hugues Capet à Philippe Auguste** : la lente construction du domaine royal. »
- **Problème** : trois des neuf questions portent sur Louis IX (canonisation de 1297), sur
  Philippe le Bel et Boniface VIII, et sur la suppression de l'ordre du Temple en 1312 — soit
  près d'un siècle après Philippe Auguste, mort en 1223. La description annonce donc moins que
  ce que le chapitre demande.
- **Correction proposée** : « De Hugues Capet à Philippe le Bel : la lente construction du
  domaine royal et de l'État. »

### [MINEUR] Clemenceau donné pour « directeur du journal L'Aurore »

- **Où** : `prisma/seed/culture-g/histoire-france-2.ts:351` — `cg-neuf-hf2-troisieme-republique`
- **Texte** : « Le titre est de Clemenceau, alors **directeur** du journal L'Aurore. »
- **Problème** : le journal était dirigé par Ernest Vaughan, qui l'avait fondé en 1897 ;
  Clemenceau y tenait la direction **politique** et l'éditorial. La leçon héritée l'écrit
  correctement (`lecons/histoire-france/11.json` : « L'Aurore, dirigé par Ernest Vaughan avec
  Georges Clemenceau parmi ses plumes »). Le raccourci du seed efface un nom et fausse une
  responsabilité.
- **Correction proposée** : « Le titre est de Clemenceau, alors directeur politique de L'Aurore,
  journal fondé par Ernest Vaughan. »

*Le reste du fichier tient à la seconde lecture : Drancy et ses soixante-trois mille déportés,
les taxis de la Marne présentés sans légende, le CNR rue du Four en mai 1943, les quatre-vingt-trois
départements de 1790, les dix-sept articles de la Déclaration, les sept prisonniers de la Bastille,
Clemenceau à soixante-seize ans, le calendrier républicain abandonné en 1806, le monopole
d'émission de la Banque de France en 1803 — tout se vérifie.*

## Passe 2 — relecture de `prisma/seed/culture-g/histoire-france-3.ts` (20 notions, 189 questions)

### [GRAVE] Deux astuces de plus donnent la réponse — dont la plus flagrante du domaine

Après la neuvième relevée sur `histoire-france-2.ts`, la relecture du lot 3 en ajoute deux, ce
qui porte le total à **onze notions sur soixante-quinze**.

| Où | L'astuce | La question, et sa bonne réponse |
|---|---|---|
| `histoire-france-3.ts:340` / `:343` — `hf3-france-monde` | « La France dispose du **troisième réseau diplomatique mondial**. » | « Quel rang la France occupe-t-elle par la taille de son **réseau diplomatique** ? » → « **Troisième mondial** » |
| `histoire-france-3.ts:269` / `:272` — `hf3-justice-france-histoire` | « **La torture judiciaire** a été abolie en France en 1788, un an avant la Révolution. » | « Qu'est-ce que **la question** judiciaire sous l'Ancien Régime ? » → « **La torture** employée pour obtenir des aveux » |

- **Problème** : dans les deux cas la question visée est la **première** de la notion, trois
  lignes sous l'astuce. Celle de `hf3-france-monde` est la plus franche de tout le domaine :
  l'astuce et l'énoncé emploient les mêmes mots (« réseau diplomatique », « troisième »,
  « mondial »), et il n'y a rien d'autre à savoir. Celle de `hf3-justice-france-histoire` est
  d'un genre plus subtil et plus dommageable : la question repose entièrement sur le fait que
  l'apprenant ignore que « la question » désigne la torture — or l'astuce vient d'écrire
  « la torture judiciaire » à propos de la même abolition de 1788. Le seul obstacle
  lexical de la question est levé avant qu'elle soit posée.
- **Correction proposée** : pour `hf3-france-monde` — « La diplomatie française tient d'abord à
  son maillage : compte le nombre de pays où la France est représentée, et demande-toi ce que ce
  réseau sert. » Pour `hf3-justice-france-histoire` — « Entre le bourreau et le juge des libertés,
  quatre siècles : suis le déplacement du but de la peine, de l'aveu vers la réinsertion. »

### [MOYEN] L'astuce de l'agriculture compare deux grandeurs qui ne se comparent pas — et contredit sa propre notion

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts:174` — `cg-neuf-hf3-agriculture-france`
- **Texte** : astuce — « La France comptait plus de **six millions d'agriculteurs** en 1950 ;
  ils sont **moins de quatre cent mille** aujourd'hui. » ; explication de la première question de
  la même notion — « Contre **moins de deux pour cent** [de la population active] aujourd'hui. »
- **Problème** : les deux chiffres de l'astuce ne mesurent pas la même chose. Les « six millions »
  de 1950 sont la population **active agricole** au sens large (chefs d'exploitation, conjoints,
  aides familiaux) ; les « quatre cent mille » d'aujourd'hui sont les seuls **chefs
  d'exploitation** à titre principal (400 000 environ en 2019, soit 1,5 % de l'emploi total,
  pour environ 390 000 exploitations au recensement de 2020). L'effectif comparable à celui de
  1950 est d'environ **750 000 actifs agricoles permanents**. L'astuce affiche donc une division
  par quinze là où le rapport réel est d'environ un à huit. Et elle se contredit dans la même
  notion : « moins de deux pour cent » d'une population active de près de trente millions,
  c'est de l'ordre de cinq à six cent mille personnes, pas « moins de quatre cent mille ».
- **Correction proposée** : « La France comptait environ six millions d'actifs agricoles en 1950 ;
  ils sont aujourd'hui moins de huit cent mille, dont quelque quatre cent mille chefs
  d'exploitation. »

### [MOYEN] « Une femme de lettres qui tient un salon influent au XVIIIe siècle » : trois réponses sur quatre sont vraies

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts:363` — `cg-neuf-hf3-personnages-france`
- **Texte** : « Quelle femme de lettres tient un salon influent au XVIIIe siècle ? » → « Madame
  Geoffrin » ; distracteurs « Madame de Sévigné », « **Madame de Staël seule** », « **Madame
  Roland** ».
- **Problème** : Germaine de Staël ouvre son salon de la rue du Bac en 1786 et il compte parmi
  les plus influents de la fin du siècle ; Manon Roland tient de 1791 à 1793 le salon d'où sort
  la Gironde. Toutes deux sont des femmes de lettres du XVIIIe siècle tenant un salon influent :
  l'énoncé admet trois réponses. Le seul obstacle est le mot « seule » accolé à Madame de Staël,
  qui ne veut rien dire ici et qui sert visiblement à disqualifier un distracteur devenu vrai —
  c'est le même procédé que celui déjà relevé pour l'amphithéâtre de Provence. Madame de Sévigné,
  morte en 1696, est le seul distracteur qui fonctionne.
- **Correction proposée** : dater l'énoncé sur la période où Madame Geoffrin est seule à
  répondre — « Quelle femme de lettres tient, rue Saint-Honoré, le salon des encyclopédistes et
  des artistes dans les années 1750 et 1760 ? » — et remplacer les deux distracteurs vrais par
  « Madame de Sévigné » et « Madame de La Fayette ».

### [MINEUR] « Chaque grande catastrophe française a produit une réforme de la prévention »

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts:466` — `cg-neuf-hf3-catastrophes-france`
- **Problème** : « chaque » est une généralisation présentée comme un fait, dans l'astuce d'une
  notion dont les dix questions ne l'établissent pas — la marée noire de l'*Amoco Cadiz* et
  l'incendie de Notre-Dame n'y sont suivis d'aucune réforme de prévention. La leçon à retenir
  est vraie en tendance, fausse comme règle.
- **Correction proposée** : « La plupart des grandes catastrophes françaises ont été suivies
  d'une réforme de la prévention : cherche laquelle à chaque fois. »

*Le reste du lot 3 résiste à la seconde lecture. J'ai revérifié un à un les chiffres et les
dates que la passe 1 n'avait pas contrôlés : Courrières 1906 (1 099 morts), le procédé Thomas
de 1878, la fin de l'exploitation du bassin du Nord en 1990, la journée de huit heures en 1919,
les douze jours ouvrables de 1936 puis 1956, 1969 et 1982, le certificat d'études de 1866 supprimé
en 1989, la loi Camille Sée de 1880, la réforme Berthoin de 1959 applicable en 1967, l'Hôpital
général de 1656, le BCG de 1921, la canicule de 2003 (environ 15 000 décès en excès), la Retirada
(450 000 personnes), la Marche de 1983, le premier hypermarché de 1963 à Sainte-Geneviève-des-Bois,
les neuf millions de Minitel, les trente-neuf heures de 1982, le compromis de Luxembourg de 1966,
les européennes de 1979, le CNRS de 1939, le CEA de 1945, l'INSERM de 1964 issu de l'institut
d'hygiène de 1941, l'INRAE de 2020, Galois mort à vingt ans en 1832, Bourbaki en 1935, le retrait
de l'OTAN en 1966 et le retour en 2009, le premier essai nucléaire de 1960, les 75 langues du
rapport de 1999, Malpasset (423 morts), Lothar et Martin (environ 90 morts), AZF (31 morts),
Xynthia en 2010, le régime cat-nat de 1982 — tout se vérifie.*

## Passe 2 — relecture de `prisma/seed/culture-g/histoire-france-4.ts` (23 notions, 224 questions)

### [GRAVE] « Le droit de grève avait été reconnu en 1864 » — faux, et le lot 3 dit le contraire

- **Où** : `prisma/seed/culture-g/histoire-france-4.ts:504` — `cg-neuf-hf4-troisieme-republique`
- **Texte** : explication de la question sur la loi de 1884 — « Le **droit de grève** avait été
  **reconnu en 1864**. »
- **Problème** : la loi Ollivier du 25 mai 1864 **supprime le délit de coalition** : elle
  dépénalise la grève, elle ne la reconnaît pas comme un droit. La grève reste un motif légitime
  de licenciement et de rupture du contrat jusqu'au XXe siècle ; le **droit** de grève n'est
  consacré qu'en 1946, par le préambule de la Constitution du 27 octobre (« le droit de grève
  s'exerce dans le cadre des lois qui le réglementent »). Le domaine se contredit d'ailleurs
  lui-même, et c'est le lot 4 qui a tort : `histoire-france-3.ts` (`hf3-mouvement-ouvrier`)
  écrit exactement la bonne formule à propos de la même loi — « La grève cesse d'être une
  infraction pénale, **sans être encore reconnue comme un droit**. » Un apprenant qui suit les
  deux chapitres reçoit deux versions incompatibles du même fait.
- **Correction proposée** : « La loi Ollivier de 1864 avait dépénalisé la grève ; le droit de
  grève lui-même n'est reconnu qu'en 1946, par le préambule de la Constitution. »

### [MOYEN] Deux énoncés de plus dont le mot interrogatif ne correspond à aucune de leurs réponses

La passe 1 avait relevé trois questions du lot 4 dont l'énoncé demande *contre qui*, *qui* ou
*comment* et dont les quatre propositions sont toutes des définitions nominales (Blocus
continental, suffrage censitaire, vénalité des offices). La relecture en ajoute deux, ce qui
porte le défaut à **cinq questions sur les deux cent vingt-quatre du fichier** — assez pour que
ce soit une habitude d'écriture et non un accident.

| Où | L'énoncé | La bonne réponse |
|---|---|---|
| `histoire-france-4.ts:583` — `hf4-cinquieme-republique` | « **Que permet** une question prioritaire de constitutionnalité ? » | « **Un mécanisme** permettant de contester une loi en vigueur devant le Conseil constitutionnel » |
| `histoire-france-4.ts:571` — `hf4-quatrieme-republique` | « **À quoi** le plan Marshall était-il destiné ? » | « **Une aide** américaine à la reconstruction européenne » |

- **Problème** : « Que permet… ? » appelle un verbe, et la réponse commence par « Un mécanisme » ;
  « À quoi… destiné ? » appelle un but, et la réponse énonce une nature. Dans les deux cas
  l'énoncé a manifestement été réécrit après coup sans que les propositions suivent — les trois
  autres distracteurs, eux, sont bien construits comme des définitions (« Un recours
  administratif », « Un plan de modernisation français »), ce qui confirme que c'est l'énoncé
  qui a bougé.
- **Correction proposée** : « Qu'est-ce qu'une question prioritaire de constitutionnalité ? » et
  « Qu'est-ce que le plan Marshall ? », sans toucher aux propositions.

### [MOYEN] La vénalité des offices définie deux fois, dans deux notions que rien ne réunit

- **Où** : `prisma/seed/culture-g/histoire-france-3.ts:30` — `cg-neuf-hf3-societe-ancien-regime`
  et `prisma/seed/culture-g/histoire-france-4.ts:288` — `cg-neuf-hf4-richelieu-mazarin`
- **Texte** : « Qu'est-ce que la vénalité des offices ? » → « L'achat de charges publiques,
  transmissibles par hérédité », explication « Elle procurait des revenus immédiats à la monarchie
  au prix d'une administration difficile à réformer. » / « Comment la monarchie tirait-elle parti
  de la vénalité des offices ? » → « La vente de charges publiques par la monarchie », explication
  « Rentable à court terme, elle a créé un corps d'officiers difficile à contrôler. »
- **Problème** : même notion enseignée, même réponse au verbe près (acheter / vendre), et deux
  explications qui disent la même chose dans le même ordre (rentable tout de suite, ingouvernable
  ensuite). Ni `FUSIONS` ni `FUSIONS_INTERNES` ne rapprochent ces deux notions : le doublon
  s'ajoute à la liste de la passe 1, où il manquait.
- **Correction proposée** : supprimer la question de `hf4-richelieu-mazarin`, dont l'énoncé est
  par ailleurs mal construit (voir ci-dessus), et la remplacer par une question sur la
  **paulette** de 1604, qui rend les offices héréditaires et que rien ne teste dans le domaine.

### [MINEUR] Le lot 4 confirme que la question sur les salons du lot 3 a plusieurs réponses

- **Où** : `prisma/seed/culture-g/histoire-france-4.ts:331` — `cg-neuf-hf4-lumieres-france`
- **Texte** : « Ceux de **Mme Geoffrin** ou de **Mme du Deffand** furent particulièrement
  influents. »
- **Problème** : le domaine sait donc parfaitement, dans un autre fichier, que plusieurs femmes
  tenaient des salons influents au XVIIIe siècle — et il en nomme une, Mme du Deffand, qui ne
  figure même pas parmi les propositions de la question de `hf3-personnages-france` (« Quelle
  femme de lettres tient un salon influent au XVIIIe siècle ? »). Cela confirme, de l'intérieur
  du corpus, que cette question ne peut pas admettre une réponse unique en l'état.
- **Correction proposée** : voir le constat correspondant sur `hf3-personnages-france` — dater
  l'énoncé et changer les distracteurs.

### [MINEUR] « Le dernier carolingien, Louis V »

- **Où** : `prisma/seed/culture-g/histoire-france-4.ts:118` — `cg-neuf-hf4-carolingiens`
- **Texte** : « Le **dernier carolingien**, Louis V, meurt sans héritier direct. »
- **Problème** : Louis V est le dernier roi carolingien, non le dernier Carolingien. Son oncle
  Charles, duc de Basse-Lotharingie, lui survit, revendique la couronne contre Hugues Capet, est
  capturé en 991 et meurt en 992 ; sa descendance se prolonge encore. La formule efface
  précisément ce qui rend l'élection de 987 remarquable — il y avait un héritier carolingien
  disponible, et les grands ont choisi quelqu'un d'autre.
- **Correction proposée** : « Louis V, dernier roi carolingien, meurt sans enfant ; les grands
  écartent son oncle Charles de Basse-Lotharingie et élisent Hugues Capet. »

*Le reste du lot 4 tient à la seconde lecture, et j'ai revérifié les faits que la passe 1 n'avait
pas contrôlés un à un : Vouillé 507, la loi salique réinterprétée au XIVe siècle, la déposition
de 751, Anagni 1303, l'arrestation des templiers en 1307, Suger et Saint-Denis, Notre-Dame de
1163 au milieu du XIVe siècle, Édouard III petit-fils de Philippe le Bel par sa mère, Crécy 1346,
Poitiers 1356, Troyes 1420, le sacre de 1429, Castillon 1453, Marignan 1515, Pavie 1525,
Villers-Cotterêts 1539, le Collège royal de 1530, Budé bibliothécaire du roi, la Pléiade et le
manifeste de 1549, la Saint-Barthélemy d'août 1572, la journée des Barricades de 1588,
l'abjuration de 1593 et le sacre de Chartres en 1594, Ravaillac rue de la Ferronnerie en 1610,
l'Académie française de 1635, La Rochelle 1628, les Pyrénées 1659, le règne personnel de 1661,
Versailles 1682, les douze sites Vauban au patrimoine mondial, la Succession d'Espagne 1701-1714,
Le Nôtre, l'Encyclopédie 1751-1772, *De l'esprit des lois* 1748, *Du contrat social* et *Émile*
en 1762, les sept prisonniers de la Bastille, le Jeu de paume du 20 juin, la Constitution civile
de 1790, le 10 août 1792, la loi du 22 prairial, le 18 brumaire du 9 novembre 1799, le Concordat
de 1801 en vigueur jusqu'en 1905, le lycée de 1802, le Code civil de 1804, Austerlitz 1805,
la campagne de Russie de 1812, Waterloo le 18 juin 1815, la mort en 1821, les canuts de 1831,
Abd el-Kader jusqu'en 1847, les journées de juin 1848, le coup d'État de 1851 et l'Empire de
décembre 1852, Haussmann, le traité de 1860 avec le Royaume-Uni, Nice et la Savoie en 1859-1860,
Maximilien fusillé en 1867, Sedan et le 2 septembre 1870, Francfort 1871, les soixante-douze jours
de la Commune, Louise Michel et la révolte kanak de 1878, les lois de 1881, 1884, 1901 et 1905,
Dreyfus réhabilité en 1906, le million quatre cent mille morts de 1914-1918 (un mobilisé sur six),
Verdun et ses dix mois, Versailles 1919, l'appel du 18 juin, le CNR de 1943, la Sécurité sociale
de 1945, le plan Monnet, la CECA de 1951, Rome 1957, le référendum du 28 septembre 1958, la
réforme de 1962, les trois cohabitations de 1986 à 2002, les lois Defferre de 1982 et la QPC
de 2008 — tout se vérifie.*

## Passe 2 — le contenu chargé comme l'application le charge (`contenuDe`)

> Jusqu'ici j'avais lu les fichiers. Ici j'ai chargé le module par
> `contenuDe(MODULES['culture-g'])`, c'est-à-dire après application de `FUSIONS`,
> `FUSIONS_INTERNES` et du mélange des propositions, puis croisé chaque question avec
> **toutes les autres du même chapitre** — ce que voit l'apprenant, et non ce que contient un
> fichier. Trois choses apparaissent, qu'aucune lecture séquentielle ne pouvait donner.

### [GRAVE] Trente explications donnent la réponse littérale d'une autre question du même chapitre

La passe 1 avait relevé un cas isolé (« Deux questions consécutives sur Alésia, dont l'une donne
la réponse de l'autre »). Le croisement systématique montre que ce n'est pas un accident : dans
**seize chapitres d'Histoire de France sur les cinquante-trois**, l'explication d'une question
contient mot pour mot la bonne réponse d'une autre question du **même** chapitre. Trente paires
au total. Comme les questions d'un chapitre sont servies dans la même série de révision,
l'apprenant qui a répondu à l'une reçoit la seconde en cadeau — et souvent dans les minutes qui
suivent.

Les plus nettes, par ordre de gravité :

| Chapitre | L'explication qui fuit | La question qu'elle résout |
|---|---|---|
| `cg-neuf-hf-lumieres-france` | « **De l'esprit des lois** paraît en **1748**. » (question « Qui était Montesquieu ? ») | « Quel ouvrage de Montesquieu paraît en 1748 ? » → « **De l'esprit des lois** » |
| `cg-neuf-hf-lumieres-france` | « **Du contrat social** et Émile paraissent tous deux en **1762**. » (« Qui était Rousseau ? ») | « Quel ouvrage de Rousseau paraît en 1762 sur le fondement du pouvoir ? » → « **Du contrat social** » |
| `cg-neuf-hf-lumieres-france` | « **L'affaire Calas** illustre son engagement judiciaire. » (« Qui était Voltaire ? ») | « Quelle affaire judiciaire Voltaire fait-il réviser en 1765 ? » → « **L'affaire Calas** » |
| `cg-neuf-hf-symboles-republique` | « Écrite à **Strasbourg** comme Chant de guerre pour l'armée du Rhin… » | « Dans quelle ville la Marseillaise est-elle composée en 1792 ? » → « **Strasbourg** » |
| `cg-neuf-hf-symboles-republique` | « **Rouget de Lisle** y était officier du génie. » | « Qui compose la Marseillaise en 1792 ? » → « **Rouget de Lisle** » |
| `cg-neuf-hf-symboles-republique` | « Adoptée en 1795, interdite **sous l'Empire et la Restauration**… » | « Sous quels régimes la Marseillaise a-t-elle été écartée au XIXe siècle ? » → « **Sous l'Empire et la Restauration** » |
| `cg-neuf-hf-charlemagne-empire` | « **La minuscule caroline**, écriture claire mise au point alors… » | « Quelle écriture se diffuse sous Charlemagne et facilite la lecture ? » → « **La minuscule caroline** » |
| `cg-neuf-hf-richelieu-mazarin` | « Le siège de **La Rochelle** en 1628 en est l'illustration. » | « Quelle place forte protestante Richelieu réduit-il en 1628 ? » → « **La Rochelle** » |
| `cg-neuf-hf-francois-premier` | « Capturé par **Charles Quint**, il est emmené à Madrid. » | « Quel rival européen François Ier affronte-t-il toute sa vie ? » → « **Charles Quint** » |
| `cg-neuf-hf-francois-premier` | « … parfois attribué à une idée de **Léonard de Vinci**. » | « Quel artiste italien François Ier accueille-t-il en France ? » → « **Léonard de Vinci** » (et sa jumelle « … meurt en France en 1519 ») |
| `cg-neuf-hf-merovingiens-rois` | « Brunehaut finit suppliciée sur ordre de **Clotaire II**. » | « Quel roi réunifie brièvement le royaume franc en 613 ? » → « **Clotaire II** » |
| `cg-neuf-hf-france-1970-2000` | « … il l'emporte de justesse contre **François Mitterrand**. » | « Qui est élu président de la République en 1981 ? » → « **François Mitterrand** » |
| `cg-neuf-hf-france-1970-2000` | « C'est l'une des premières mesures du septennat de **Valéry Giscard d'Estaing**. » | « Quel président est élu en 1974 ? » → « **Valéry Giscard d'Estaing** » |
| `cg-neuf-hf-france-1970-2000` | « La première a lieu en 1986 entre **François Mitterrand** et **Jacques Chirac**. » | résout **deux** questions : « … élu en 1981 ? » et « Qui est élu président en 1995 ? » |
| `cg-neuf-hf-outre-mer-histoire` | « … un processus qui aboutira à **l'accord de Nouméa** en 1998. » | « Quel accord de 1998 organise l'avenir institutionnel de la Nouvelle-Calédonie ? » → « **L'accord de Nouméa** » |
| `cg-neuf-hf2-capetiens` | « Il rendait la justice sous un chêne… et acquit la couronne d'épines pour **la Sainte-Chapelle**. » | « Quel édifice Louis IX fait-il construire pour abriter des reliques ? » → « **La Sainte-Chapelle** » |
| `cg-neuf-hf2-capetiens` | « Abandonnée quand l'hérédité fut devenue une évidence, sous **Philippe Auguste**. » | « Quel roi capétien allonge considérablement le domaine royal au XIIe siècle ? » → « **Philippe Auguste** » |
| `cg-neuf-hf2-revolution-1789` | « Elle a précipité **l'abolition des privilèges**. » (« Qu'est-ce que la Grande Peur ? ») | « Que décide l'Assemblée dans la nuit du 4 août 1789 ? » → « **L'abolition des privilèges** » |
| `cg-histoire-france-04` | « L'arc long anglais y décime la chevalerie française… » | « Quelle arme donne un avantage décisif aux Anglais à Crécy en 1346 ? » → « **L'arc long** » |
| `cg-histoire-france-04` | « … après la capture de **Jean II le Bon**. » | « Quel roi de France est fait prisonnier à Poitiers en 1356 ? » → « **Jean II le Bon** » |
| `cg-histoire-france-04` | « **Le traité de Troyes**, conclu en 1420… » et, plus loin, « … la légitimité que le traité de Troyes lui contestait » | « Quel traité de 1420 déshérite le dauphin au profit du roi d'Angleterre ? » → « **Le traité de Troyes** » (deux fois) |
| `cg-histoire-france-05` | « **L'ordonnance de Villers-Cotterêts**, de 1539, concerne l'usage du français dans les actes de justice… » | « Quelle ordonnance de 1539 impose l'usage du français dans les actes de justice ? » — énoncé **et** réponse recopiés |
| `cg-histoire-france-08` | « … les députés qui l'ont appelé au trône en août 1830 » et « **Louis-Philippe** abdique le 24 février 1848 » | « Quel roi accède au trône en 1830 ? » → « **Louis-Philippe** » (deux fois) |
| `cg-histoire-france-10` | « La répression judiciaire qui suit **la Semaine sanglante**… » | « Comment appelle-t-on la reconquête de Paris par l'armée versaillaise du 21 au 28 mai 1871 ? » → « **La Semaine sanglante** » |
| `cg-histoire-france-01` | « La reddition de **Vercingétorix** a lieu en 52 avant J.-C., à l'issue du siège d'**Alésia**. » | « Quel chef gaulois affronte César à Alésia en 52 avant notre ère ? » → « **Vercingétorix** » |
| `cg-libre-histoire-france-2` | « … engagements de **François Mitterrand**, élu président en mai 1981 » | « Qui devient en 1981 le premier président socialiste de la Cinquième République ? » → « **François Mitterrand** » |

- **Problème** : le cas de `cg-histoire-france-05` est le plus caricatural — l'explication du
  concordat de Bologne recopie l'énoncé entier de la question suivante *et* sa réponse. Le cas de
  `hf-lumieres-france` est le plus systématique : les trois questions « Qui était X ? » ont pour
  seule explication le titre de l'ouvrage que trois autres questions du même chapitre demandent.
  Et celui de `hf-symboles-republique` est circulaire : la question sur le compositeur donne la
  ville, la question sur la ville donne le compositeur. Ces explications sont pourtant justes et
  utiles ; le défaut n'est pas dans le texte, il est dans le voisinage — que seul le chargement
  du module révèle.
- **Correction proposée** : ce n'est pas une réécriture de trente explications. Deux gestes
  suffisent, dans cet ordre. **1.** Là où la fuite double une question déjà redondante (Léonard
  de Vinci, le traité de Troyes, Louis-Philippe, Vercingétorix, Villers-Cotterêts), supprimer la
  question redondante : la fuite disparaît avec elle. **2.** Pour les autres, déplacer le fait
  fuité dans l'explication de la question qui l'interroge, et remplacer dans l'explication
  source par un fait que rien ne teste — par exemple, pour « Qui était Montesquieu ? » :
  « Président à mortier au parlement de Bordeaux, il tire sa théorie d'une lecture — contestée —
  du régime anglais. »

### [GRAVE] Le résumé automatique « Cette leçon couvre : … » donne la réponse dans trois chapitres hérités

- **Où** : `cg-histoire-france-04`, `cg-histoire-france-08`, `cg-histoire-france-10`
- **Texte** : le `tip` de ces chapitres n'est pas une astuce rédigée : c'est la liste de leurs
  titres de sections, concaténée. Or ces titres nomment ce que le quiz demande.

| Chapitre | Le titre de section, dans l'astuce | La question qu'il résout |
|---|---|---|
| `cg-histoire-france-04` | « La folie de Charles VI, la guerre civile et **Azincourt** » | « Quelle bataille de 1415 est un désastre pour la chevalerie française ? » → « **Azincourt** » |
| `cg-histoire-france-04` | « … puis le redressement de **Charles V** » | « Quel roi français surnommé le Sage redresse la situation dans les années 1360 ? » → « **Charles V** » |
| `cg-histoire-france-08` | « **Les Trois Glorieuses** et l'avènement de **Louis-Philippe** » | deux questions : « Quelle révolution de juillet 1830 renverse Charles X ? » → « **Les Trois Glorieuses** » ; « Quel roi accède au trône en 1830 ? » → « **Louis-Philippe** » |
| `cg-histoire-france-10` | « La guerre civile et **la Semaine sanglante (21-28 mai 1871)** » | « Comment appelle-t-on la reconquête de Paris par l'armée versaillaise **du 21 au 28 mai 1871** ? » → « **La Semaine sanglante** » |

- **Problème** : la dernière est la pire du domaine, toutes catégories confondues. Le titre de
  section donne le nom **et** les dates exactes que l'énoncé reprend mot pour mot ; la question
  ne teste plus rien du tout. Et le mécanisme est différent de celui des onze astuces rédigées :
  ici personne n'a écrit d'astuce, c'est la génération automatique à partir des titres de
  sections qui fuit. Toute leçon dont un titre de section nomme un événement que son quiz
  interroge présente le même défaut — ce qui en fait un problème de fabrication, pas de rédaction.
- **Correction proposée** : ne pas composer le `tip` d'une leçon à partir de ses titres de
  sections lorsqu'un titre contient la bonne réponse d'une de ses questions ; ou, plus simplement,
  ne pas afficher ce résumé de sommaire à côté du quiz. À défaut, retitrer les trois sections
  fautives : « La guerre civile et la reconquête de Paris », « Le désastre de 1415 »,
  « La révolution de juillet et le nouveau roi ».

### [MOYEN] Deux astuces déjà signalées trahissent en fait une seconde question chacune

- **Où** : `prisma/seed/culture-g/histoire-france.ts:71` — `cg-neuf-hf-croisades-france`, et
  `:145` — `cg-neuf-hf-richelieu-mazarin`
- **Texte** : « Deux rois de France seulement ont pris la croix : **Louis VII** et Louis IX. » →
  « Quel roi de France participe à la deuxième croisade en 1147 ? » → « **Louis VII** ».
  « **Richelieu sert Louis XIII**, Mazarin sert la régente Anne d'Autriche. » → « Quel roi
  Richelieu a-t-il servi ? » → « **Louis XIII** ».
- **Problème** : l'astuce des croisades avait été signalée en passe 1 pour son erreur de fait
  (elle oublie Philippe Auguste) ; elle donne en outre la réponse littérale de la première
  question du chapitre. Celle de Richelieu figurait dans le tableau des huit pour « Anne
  d'Autriche » ; elle trahit aussi « Louis XIII ». Le décompte réel du domaine est donc de
  **onze notions dont l'astuce donne la réponse d'au moins une question**, pour **quinze
  questions** rendues sans objet — auxquelles s'ajoutent les cinq questions des trois chapitres
  hérités ci-dessus, soit vingt en tout.
- **Correction proposée** : voir les reformulations déjà proposées ; pour les croisades, la
  correction de fait et la correction de fuite se font d'un seul geste — « Trois rois ont pris
  la croix pour l'Orient, à trois croisades différentes : retiens laquelle pour chacun, et ce
  qu'il en est advenu. »

### [MOYEN] *Le Contrat social* et *Du contrat social* : le même livre demandé deux fois, sous deux titres

- **Où** : `cg-neuf-hf-lumieres-france`, après fusion de `hf2-lumieres-france` et
  `hf4-lumieres-france`
- **Texte** : « Quel **livre** de Rousseau paraît en **1762** sur **l'origine** du pouvoir ? » →
  « **Le Contrat social** » / « Quel **ouvrage** de Rousseau paraît en **1762** sur le
  **fondement** du pouvoir ? » → « **Du contrat social** ».
- **Problème** : deux questions synonymes à trois mots près, dans le même chapitre, dont les
  bonnes réponses donnent **deux titres différents pour le même ouvrage**. Le titre exact est
  *Du contrat social* ; « Le Contrat social » est l'usage courant, mais servi comme bonne réponse
  à côté de l'autre il enseigne une hésitation au lieu d'un fait. C'est le doublon le plus
  serré du chapitre le plus dupliqué du domaine (29 questions après trois fusions).
- **Correction proposée** : n'en garder qu'une, avec le titre exact — « Quel ouvrage de Rousseau,
  paru en 1762, fonde la souveraineté sur le peuple ? » → « *Du contrat social* », explication
  « On l'appelle couramment *Le Contrat social* ; le titre exact commence par *Du*. »

### [MOYEN] Utrecht : dans le chapitre Louis XIV, une explication neuve résout la question du quiz hérité

- **Où** : `cg-histoire-france-06` « Louis XIV et l'absolutisme », qui absorbe `hf4-louis-xiv`
- **Texte** : question neuve « Qu'est-ce que la guerre de Succession d'Espagne ? », explication
  « Elle s'achève par les **traités d'Utrecht** et de Rastatt. » ; question du quiz hérité
  « Quel traité de **1713** met fin à l'essentiel de la guerre de Succession d'Espagne ? » →
  « **Le traité d'Utrecht** ».
- **Problème** : à ajouter aux cinq paires de la passe 2 déjà relevées entre questions neuves et
  quiz hérités — celle-ci n'est pas un doublon d'énoncé mais une fuite d'explication, et elle
  n'apparaît que module chargé.
- **Correction proposée** : dans l'explication neuve, remplacer par « Elle oppose la France à une
  coalition européenne pendant treize ans et laisse le royaume exsangue. »

*Ce que le croisement a également **confirmé** : les doublons du premier tableau de la passe 1
sont bien tous présents dans un seul chapitre après fusion (Bouvines, 49.3, Trente Glorieuses,
cahiers de doléances, nuit du 4 août, biens nationaux, Constitution civile, Aix-la-Chapelle,
Boniface VIII, salons), et le mesureur d'astuces du dépôt (`.travail-audit/mesure-astuce.txt`)
ne détecte que trois des vingt fuites d'astuce du domaine, parce qu'il exige une bonne réponse
d'au moins douze caractères — « Louis VII », « Charles V », « Azincourt » et « Louis XIII »
passent sous son seuil.*

## Passe 2 — relecture de `prisma/seed/culture-g/cours/histoire-france.ts` (53 cours)

### [GRAVE] « Le droit de grève est reconnu en 1864 » — cette fois dans le cours

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts` — `hf-etat-providence`, section
  « Les premières lois »
- **Texte** : « **Le droit de grève est reconnu en 1864**, les syndicats autorisés en 1884. »
- **Problème** : c'est la même erreur que celle relevée plus haut dans `histoire-france-4.ts`,
  mais ici elle est **dans le cours**, c'est-à-dire dans le texte que l'apprenant lit avant de
  répondre, et affirmée sans nuance dans une phrase de synthèse mémorisable. La loi Ollivier de
  1864 supprime le délit de coalition : elle dépénalise la grève. Le droit de grève n'est reconnu
  qu'en 1946, par le préambule de la Constitution. Le domaine porte plusieurs versions du même
  fait — la bonne dans `hf3-mouvement-ouvrier` et `hf4-restauration`, la fausse ici, dans
  `hf4-troisieme-republique` et dans la leçon héritée 09 (voir le constat correspondant plus
  bas). La correction de l'une sans les autres laisserait la contradiction en place.
- **Correction proposée** : « La grève cesse d'être un délit en 1864, les syndicats sont
  autorisés en 1884 ; le droit de grève lui-même ne sera reconnu qu'en 1946. »

### [MINEUR] Les mots gaulois survivants : une troisième estimation, incompatible avec les deux autres

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts` — `hf4-gaule-celtique`, section
  « Une religion sans archives »
- **Texte** : « … une **poignée de mots** passés en français : *chêne*, *alouette*, *charrue*,
  *bruyère*, *mouton*, *lieue*, et une part importante des noms de lieux et de rivières. »
- **Problème** : la passe 1 avait relevé deux chiffres contradictoires pour le même fait — « une
  **centaine** » dans `hf2-gaule-romaine`, « quelques **dizaines** » dans `hf4-gaule-celtique`.
  Le cours en ajoute un troisième, « une poignée », qui est le plus bas des trois et le plus
  éloigné de l'estimation courante (environ cent cinquante mots). Trois formulations
  incompatibles pour un fait unique, dans un même domaine.
- **Correction proposée** : harmoniser partout sur « environ cent cinquante mots », en gardant
  la liste d'exemples de ce cours, qui est la plus riche des trois.

### [GRAVE] Baignoires en 1954 : le cours dit « un quart », le vrai chiffre est un dixième

- **Où** : `prisma/seed/culture-g/cours/histoire-france.ts` — `hf3-vie-quotidienne`, section
  « Un confort qui arrive »
- **Texte** : « En 1954, environ six logements sur dix disposaient de l'eau courante, **un quart
  d'une baignoire ou d'une douche**, et un quart de toilettes intérieures. »
- **Problème** : le recensement de 1954 donne **10,4 %** de logements équipés d'une baignoire ou
  d'une douche, et **26,6 %** de toilettes intérieures. Le cours a recopié le chiffre des
  toilettes sur celui de la salle de bains : il multiplie par deux et demi l'équipement sanitaire
  de la France de 1954, et il efface du même coup ce que la statistique a de frappant — que
  neuf logements sur dix n'avaient alors ni baignoire ni douche. La question correspondante de
  `hf3-vie-quotidienne` écrit, elle, « moins d'un logement sur dix » : c'est presque juste (10,4 %,
  la passe 1 l'avait signalé comme une approximation à corriger en « à peine un sur dix »), et
  c'est surtout du simple au double et demi par rapport à son propre cours. L'apprenant qui lit
  le cours puis répond à la question voit deux chiffres inconciliables et n'a aucun moyen de
  savoir lequel retenir.
- **Correction proposée** : « En 1954, environ six logements sur dix disposaient de l'eau
  courante, un sur quatre de toilettes intérieures, et **à peine un sur dix** d'une baignoire ou
  d'une douche. »

### [MOYEN] Ce que la relecture du fichier de cours confirme sur trois constats déjà ouverts

Trois erreurs signalées plus haut se doublent d'une **version correcte** ailleurs dans le même
fichier, ce qui rend la correction facile et l'incohérence d'autant moins excusable :

| Le fait | La formulation fausse | La formulation juste, dans le même fichier |
|---|---|---|
| Le droit de grève | `hf-etat-providence` : « **Le droit de grève est reconnu en 1864**, les syndicats autorisés en 1884. » | `hf3-mouvement-ouvrier` : « La loi Ollivier de 1864 supprime le délit de coalition et **rend donc la grève licite — sans pour autant autoriser les organisations permanentes**. » ; `hf4-restauration` : « Cette interdiction ne sera levée qu'**en 1864 pour la grève** et en 1884 pour les syndicats. » |
| Les deux Nobel de Marie Curie | `hf-femmes-france` : « **la seule personne à avoir reçu deux prix Nobel scientifiques** » | `hf3-personnages-france` : « la première personne à recevoir deux prix Nobel, et **la seule à ce jour à les avoir obtenus dans deux disciplines scientifiques distinctes** » |
| Les corporations de 1791 | questions de `hf3-societe-ancien-regime` et `hf3-mouvement-ouvrier` : « Supprimées en 1791 par la **loi Le Chapelier** » | `hf3-societe-ancien-regime`, cours : « définitivement abolies en 1791 par le **décret d'Allarde et la loi Le Chapelier** » |

- **Correction proposée** : dans les trois cas, aligner sur la formulation déjà présente. Aucune
  recherche n'est nécessaire : le domaine contient sa propre correction.

### [MINEUR] Quatre défauts de détail de plus dans le fichier de cours

- **`hf3-catastrophes-france`, section « Les catastrophes industrielles »** — « La catastrophe de
  Courrières […] fait **plus de mille cent morts** ». Le bilan officiel est de **1 099** victimes :
  c'est un peu moins de mille cent, pas plus. La question de `hf3-industrialisation-france`
  écrit prudemment « plus de mille morts ». → « fait près de mille cent morts (1 099) ».
- **`hf3-industrialisation-france`, section « Les régions industrielles »** — le deuxième
  paragraphe s'ouvre sur « Le bassin du Nord-Pas-de-Calais **paie ce rythme** au prix fort »,
  alors que le paragraphe précédent, qui redonne le même nom de bassin, ne parle d'aucun rythme :
  l'antécédent se trouve dans une **autre section** (« Un rythme propre »). Le raccord d'un
  paragraphe rapporté n'a pas été refait. → « Ce bassin a payé son essor au prix fort : … ».
- **`hf3-france-monde`, section « Un réseau et un siège »** — « troisième réseau diplomatique
  mondial, **derrière les États-Unis et la Chine** », quand l'explication de la question du même
  chapitre écrit « **Derrière la Chine et les États-Unis** ». Les classements récents placent la
  Chine première ; harmoniser dans ce sens, ou écrire « derrière la Chine et les États-Unis,
  dont il est très proche en nombre de postes ».
- **`hf2-second-empire`, section « Moderniser un pays »** — le cours écrit que le réseau
  ferroviaire « passe de **trois mille à dix-sept mille** kilomètres », là où la question de
  `hf4-second-empire` annonce « de quelques milliers à **près de vingt mille** ». Dix-sept mille
  n'est pas « près de vingt mille ». → aligner la question sur le cours.

*Sur les 53 cours du fichier, le reste résiste à la seconde lecture, et j'ai revérifié tout ce que
la passe 1 n'avait pas contrôlé : Charlemagne régnant quarante-six ans, le titre impérial disparu
depuis 476, la Lotharingie, Hugues Capet 987, Philippe Auguste 1180-1223, Louis IX 1226-1270 et
sa canonisation de 1297, Philippe le Bel 1285-1314, Anagni 1303, Molay 1314, Avignon pour près de
soixante-dix ans, la trêve de Dieu du mercredi soir au lundi matin, Suger vers 1135, Notre-Dame
1163-1345, la charte de Venise de 1964, la taille permanente de 1439, les compagnies d'ordonnance,
Calais perdu en 1558, le Cateau-Cambrésis de 1559, Léonard accueilli en 1516, les guerres d'Italie
1494-1559, l'édit de Nantes mettant fin à trente-six ans de guerre civile, La Rochelle en
1627-1628 (quatorze mois), la paix d'Alès de 1629, *La Gazette* de 1631, Fouquet et ses dix-neuf
ans de forteresse, le règne de soixante-douze ans, le grand hiver de 1709, les Camisards de 1702,
Valmy le 20 septembre 1792, l'an I au 22 septembre, le 21 janvier 1793, le calendrier républicain
et ses treize ans, la loi Jourdan de 1798, le 9 thermidor et l'exécution du lendemain, le franc
germinal stable jusqu'en 1914, la Légion d'honneur de 1802, Trafalgar six semaines avant
Austerlitz, le rétablissement de l'esclavage en 1802, le corps électoral passant de 250 000 à
9 millions en 1848, les Trois Glorieuses des 27, 28 et 29 juillet, les canuts de 1831 et 1834,
Haussmann préfet de 1853 à 1870, Suez en 1869 et le contrôle britannique de 1875, Sedan le
2 septembre, l'Alsace-Lorraine et ses quarante-sept ans, l'amendement Wallon à une voix, Boulanger
élu en janvier 1889, Picquart en 1896, Dreyfus gracié en 1899 et réhabilité en 1906, la Marne à
cinquante kilomètres de Paris, les sept cents kilomètres de tranchées, les soixante millions
d'obus de Verdun, la Voie sacrée et son camion toutes les quatorze secondes, Clemenceau en
novembre 1917, l'article 231, les trente-six mille monuments aux morts, l'armistice du 22 juin
1940, les 1,8 million de prisonniers, le statut des Juifs d'octobre 1940, la reconnaissance de
1995, Drancy et ses soixante-trois mille déportés, le STO de février 1943, le CNR de mai 1943 et
son programme de mars 1944, Diên Biên Phu et ses cinquante-sept jours, la reconnaissance légale
de la guerre d'Algérie en 1999, le collège de quatre-vingt mille élus de 1958, l'article 16
employé en 1961, l'unique motion de censure adoptée en 1962, la QPC de 2010, la démission de 1969,
les treize parlements d'Ancien Régime, la paulette, Turgot en 1776, Dupleix, le million trois cent
mille captifs déportés par la France, le Bardo en 1881 et Fès en 1912, Ferry contre Clemenceau en
1885, le procédé Thomas de 1878, Citroën passé à Michelin en 1934, le dernier haut fourneau
lorrain en 2011, la charte d'Amiens de 1906, les retraites ouvrières de 1910, Matignon et ses
hausses de sept à quinze pour cent, la loi Goblet de 1886, le lycée payant jusqu'en 1930, le
BCG et ses treize ans de repiquages, la loi Veil provisoire jusqu'en 1979, les huit métropoles
d'équilibre de 1964, les mille cinq cents quartiers prioritaires, le TNP de Vilar en 1951, le
Festival d'Avignon quatre ans plus tôt, Aigues-Mortes en 1893, la Nueve, le regroupement familial
de 1976 confirmé en 1978, le Minitel arrêté en 2012 après trente-deux ans, Maastricht à 51,04 %,
le non de 2005 à près de 55 %, l'euro en janvier 2002, l'OIF et ses quatre-vingt-huit membres,
Galois, Lebesgue, Bourbaki, le retrait de l'OTAN en 1966 et le retour en 2009, les SNLE de 1971,
la ZEE de plus de dix millions de kilomètres carrés, le traité de l'Élysée de 1963, *Le Petit
Journal* de 1863, l'ORTF démantelé en 1974, TF1 privatisée en 1987, Malpasset et ses cinquante
millions de mètres cubes, l'Amoco Cadiz et ses quatorze ans de procédure, le préjudice écologique
inscrit au Code civil en 2016, la journée de solidarité — tout se vérifie.*

## Passe 2 — revérification de mes propres corrections de passe 1

> J'ai repris une à une les cinquante-huit « Correction proposée » de la passe 1 et je les ai
> vérifiées sur pièces, sans supposer qu'elles étaient justes du seul fait d'avoir été écrites
> par un relecteur. **Trois sont fautives.** C'est le résultat le plus désagréable de cette
> seconde passe, et le plus utile : une correction fausse est pire qu'une erreur signalée, parce
> qu'elle sera appliquée sans discussion.

### [GRAVE] Ma correction sur l'élection de 1974 est fausse : l'écart n'est pas « moins d'un point »

- **Où** : constat de passe 1 « [GRAVE] Phrase absurde sur l'élection de Valéry Giscard
  d'Estaing » (`histoire-france.ts:275` — `cg-neuf-hf-france-1970-2000`)
- **Ma correction** : « Élu à quarante-huit ans, il l'emporte de justesse contre François
  Mitterrand, **avec moins d'un point d'écart**. »
- **Problème** : au second tour du 19 mai 1974, Giscard d'Estaing obtient **50,81 %** et
  Mitterrand **49,19 %**. L'écart entre les deux candidats est donc de **1,62 point**, soit
  environ **425 000 voix** sur près de vingt-six millions de suffrages exprimés. « Moins d'un
  point » ne correspond à rien : ce n'est ni l'écart entre les deux, ni un chiffre publié.
  L'erreur vient probablement d'une confusion avec l'avance de Giscard sur la barre des 50 %
  (0,81 point), qui n'est pas une manière usuelle de dire l'écart d'une élection. La phrase de
  passe 1 diagnostiquait justement une phrase qui « ne veut rien dire » ; ma correction en
  introduisait une autre.
- **Correction rectifiée** : « Élu à quarante-huit ans, il l'emporte de justesse contre François
  Mitterrand — 50,81 % contre 49,19 %, soit environ 425 000 voix d'écart. »

### [MOYEN] Ma correction sur Jeanne d'Arc à Chinon remplace une date défendable par une date contestée

- **Où** : constat de passe 1 « [MINEUR] Jeanne d'Arc à Chinon : février ou mars ? »
  (`cours/histoire-france.ts:44` — `hf-jeanne-darc`)
- **Ma correction** : « **Début mars** 1429, elle rencontre le futur Charles VII à Chinon. »
- **Problème** : la chronologie que j'ai invoquée (départ de Vaucouleurs vers le 22 février,
  arrivée à Chinon début mars, entrevue « traditionnellement datée du 6 mars ») est celle de
  Régine Pernoud ; elle n'est plus celle que retiennent les travaux récents ni le site historique
  lui-même. La reconstitution aujourd'hui la mieux étayée place le départ de Vaucouleurs vers le
  **13 février**, l'arrivée à Chinon le **23 février** et la première audience le
  **25 février 1429** ; la « seconde rencontre », plus solennelle, se tient entre fin mars et
  début avril. Autrement dit : le texte du cours, « en février 1429 », était **au moins aussi
  défendable que ma correction, et probablement plus juste**. Corriger une date exacte en une
  date contestée est le pire cas de figure pour un contenu qu'on apprend par cœur.
- **Correction rectifiée** : **retirer ce constat**. Laisser « En février 1429 », ou, si l'on
  veut désamorcer la divergence des sources : « À la fin de l'hiver 1429, elle rencontre le futur
  Charles VII à Chinon. »

### [MOYEN] Ma correction sur la rivalité Brunehaut-Frédégonde sous-estime autant que le cours surestimait

- **Où** : constat de passe 1 « [MOYEN] Brunehaut “capturée à quatre-vingts ans passés” et une
  rivalité de quarante ans » (`cours/histoire-france.ts` — `hf4-merovingiens`)
- **Ma correction** : « Elles s'affrontent **une vingtaine d'années**, jusqu'à la mort de
  Frédégonde en 597 ; Brunehaut, vaincue à près de soixante-dix ans, est exécutée en 613. »
- **Problème** : la rivalité s'ouvre avec l'assassinat de Galswinthe, sœur de Brunehaut et épouse
  de Chilpéric, **vers 568**, et se referme à la mort de Frédégonde en **597** : cela fait
  **près de trente ans**, pas une vingtaine. Le cours écrivait « quarante ans », ce qui était
  trop ; j'ai corrigé de l'autre côté, ce qui l'est aussi. La bonne mesure était disponible et je
  ne l'ai pas prise. Le reste du constat tient : Brunehaut, née vers 547, avait bien environ
  soixante-six ans en 613, et non « quatre-vingts ans passés ».
- **Correction rectifiée** : « Elles s'affrontent près de trente ans, de l'assassinat de
  Galswinthe vers 568 à la mort de Frédégonde en 597 ; Brunehaut, vaincue à environ
  soixante-six ans, est exécutée en 613. »

### [MINEUR] Une correction juste, mais qui doit porter sa justification : les gouvernements de la IVe République

- **Où** : constat de passe 1 « [MOYEN] Nombre de gouvernements de la IVe République »
- **Ma correction** : « vingt-deux gouvernements en douze ans » partout.
- **Vérification** : le chiffre dépend de ce qu'on compte. **Vingt-deux** est le décompte des
  ministères formés depuis celui de Léon Blum (décembre 1946) jusqu'à celui de Pflimlin
  (mai 1958) ; on trouve **vingt et un** si l'on part de Ramadier en janvier 1947, et
  **vingt-quatre** si l'on compte séparément certains remaniements. Le chiffre proposé est donc
  bon, mais il n'est pas le seul, et l'imposer sans le dire risque de recréer la contradiction
  ailleurs.
- **Correction rectifiée** : garder « vingt-deux gouvernements en douze ans », en ajoutant dans
  l'explication « soit une durée moyenne de six mois » — formule vraie quel que soit le décompte
  retenu, et qui est de toute façon ce que la question veut faire retenir.

*Les cinquante-quatre autres corrections de la passe 1 résistent à la vérification. J'ai
notamment recontrôlé : l'écart de cinquante et un ans avec la Nouvelle-Zélande (1893) ; le rang
de Simone Veil au Panthéon — cinquième femme à y reposer, quatrième pour ses mérites propres,
derrière Sophie Berthelot (1907, comme épouse), Marie Curie (1995), Germaine Tillion et
Geneviève de Gaulle-Anthonioz (2015) ; les trois rois croisés pour l'Orient (Louis VII,
Philippe Auguste, Louis IX), Louis VIII n'ayant mené que la croisade contre les albigeois ;
les 426 pièces de Chambord ; le grec et l'hébreu d'abord au Collège royal, les mathématiques
en 1531 et le latin en 1534 ; les vingt-trois ans entre 1958 et 1981 ; Henri IV deuxième roi
assassiné en vingt et un ans après Henri III ; les quelque quarante mille morts de la Terreur
dont environ dix-sept mille condamnations capitales exécutées ; les archers anglais **et**
gallois de Crécy ; les 643 d'Oradour ; les 13 152 arrêtés et 4 115 enfants du Vél d'Hiv ;
les neuf villes nouvelles (cinq en Île-de-France, quatre en province) ; les soixante-douze ans
de règne de Louis XIV contre cinquante-quatre de règne personnel ; les trente-trois millions
d'entrées de l'Exposition coloniale pour quelque huit millions de visiteurs ; la France « l'un
des derniers » pays d'Europe occidentale à abolir la peine de mort, l'Irlande (1990), la
Belgique (1996) et le Royaume-Uni (1998) l'ayant fait après elle ; et la correction sur Beauvais
(« le chœur gothique le plus haut de France, 48,5 mètres sous voûte, sa nef n'ayant jamais été
construite »), qui est exacte.*

## Passe 2 — relecture du cahier d'origine et des leçons héritées

### [MOYEN] La révocation de l'édit de Nantes : la leçon héritée chiffre et nuance, le corpus neuf gonfle

- **Où** : `heritage/culture-g/data/lecons/histoire-france/06.json`, section « Un roi, une loi,
  une foi », contre `prisma/seed/culture-g/cours/histoire-france.ts` (`hf2-louis-xiv`, section
  « Ce que le règne laisse ») et `prisma/seed/culture-g/histoire-france-4.ts`
  (`cg-neuf-hf4-guerres-religion`)
- **Texte** : leçon — « environ **150 000 à 200 000** protestants s'enfuient vers la Suisse, les
  Provinces-Unies, l'Angleterre ou le Brandebourg […] ; **les estimations varient selon les
  historiens**. » ; cours — « provoque l'exil de **plusieurs centaines de milliers** de
  personnes » ; question — « La révocation provoque l'exil de **centaines de milliers** de
  protestants. »
- **Problème** : « plusieurs centaines de milliers » signifie au moins trois cent mille, soit
  le double de la fourchette basse et cinquante pour cent au-dessus de la fourchette haute
  généralement retenue. La leçon héritée donne le chiffre juste **et** signale l'incertitude ;
  les deux textes neufs le gonflent et le donnent pour acquis. C'est un cas de plus où le cahier
  d'origine est le texte fiable et où le corpus neuf a dérivé en reformulant.
- **Correction proposée** : « provoque l'exil de cent cinquante à deux cent mille personnes,
  selon les estimations » dans le cours, et « l'exil de plus de cent cinquante mille protestants »
  dans l'explication de la question.

### [MOYEN] La loi salique « réinterprétée » : le XIVe siècle dans trois textes, le XVe dans un quatrième

- **Où** : `heritage/culture-g/data/lecons/histoire-france/04.json`, section « Les origines du
  conflit », contre `prisma/seed/culture-g/histoire-france-4.ts` (`cg-neuf-hf4-merovingiens`) et
  `cours/histoire-france.ts` (`hf4-merovingiens`)
- **Texte** : leçon — « ce principe sera plus tard justifié par la référence à la loi salique,
  texte franc ancien **réinterprété au XVe siècle** » ; question — « Son usage dynastique est une
  réinterprétation tardive, **au XIVe siècle**. » ; cours — « Un de ses articles […] sera exhumé
  **au XIVe siècle** et invoqué pour exclure les femmes de la succession au trône de France. »
- **Problème** : un siècle d'écart sur le même fait, dans le même domaine, et sans que rien ne
  signale la divergence. Les deux dates recouvrent en réalité deux moments distincts : la
  **redécouverte** du texte par Richard Lescot vers 1358 (XIVe siècle) et son **érection en loi
  fondamentale** par les juristes du parti français, Jean de Montreuil et Jean Juvénal des
  Ursins, dans les années 1410-1440 (XVe siècle). Aucun des trois textes ne fait cette
  distinction : chacun tranche, et ils tranchent différemment.
- **Correction proposée** : dire les deux temps, ce qui supprime la contradiction et apprend
  quelque chose : « Texte franc du VIe siècle, exhumé vers 1358 et érigé au siècle suivant en
  loi fondamentale du royaume pour exclure les femmes de la succession. »

*Sur les leçons 01 à 06, la seconde lecture ne trouve rien d'autre, et le contrôle a porté sur
tous les chiffres et toutes les dates : la Narbonnaise de 121 et la colonie de Narbonne en 118,
Lugdunum fondée en 43 et l'autel des Trois Gaules vers 12 av. J.-C., la légion d'Ambiorix
anéantie en 54, l'échec de Gergovie, Uxellodunum en 51, le triomphe de 46, les Tables
claudiennes de 48, l'édit de Caracalla de 212, les martyrs de Lyon de 177, l'Empire des Gaules
de 260 à 274, le Rhin franchi le 31 décembre 406, les Wisigoths en Aquitaine en 418, les champs
Catalauniques en 451, Soissons 486, Tolbiac vers 496, Vouillé 507, Clotaire vers 558 et sa mort
en 561, Dagobert 629-639, Tertry 687, la mort de Charles Martel en 741, Soissons 751, le sacre
de Saint-Denis en 754, la donation de Pépin et les États pontificaux jusqu'en 1870, Carloman
mort en 771, la Lombardie en 774, les Saxons de 772 à 804, Roncevaux 778, Louis le Pieux
814-840, Quierzy 877, Paris assiégé en 885-886, Saint-Clair-sur-Epte en 911, Cluny en 909,
Adalbéron vers 1025, Louis VI 1108-1137, l'annulation de 1152 et Henri Plantagenêt roi en 1154,
Jean sans Terre condamné en 1202, Bouvines le 27 juillet 1214, le traité de Paris de 1259,
Mansourah et la captivité de 1250, les états généraux de 1302, Anagni 1303, Molay 1314,
l'université de Paris en 1215 et le collège de Sorbon vers 1257, L'Écluse en 1340, Crécy le
26 août 1346, Calais après onze mois de siège en 1347, Poitiers le 19 septembre 1356, la peste
de 1348 (un quart à un tiers de la population), Étienne Marcel et l'ordonnance de 1357, la
Jacquerie de 1358, Charles V 1364-1380, Charles VI à onze ans en 1380 et sa maladie de 1392,
Louis d'Orléans assassiné en 1407, Azincourt le 25 octobre 1415, Montereau 1419, Troyes 1420,
les deux morts de 1422, Orléans délivrée le 8 mai 1429 et le sacre du 17 juillet, Compiègne en
mai 1430, Rouen le 30 mai 1431, Arras 1435, les compagnies d'ordonnance de 1445, Formigny 1450,
Castillon le 17 juillet 1453, Gutenberg vers 1450 et Paris en 1470, les Essais à partir de 1580,
Marignan les 13 et 14 septembre 1515, Bologne 1516, l'élection impériale de 1519, Pavie le
24 février 1525 et la libération de 1526, les Placards d'octobre 1534, l'Institution de 1536
traduite en 1541, le synode de 1559, Châteaubriant 1551, la mort d'Henri II en 1559, l'édit de
janvier et Wassy le 1er mars 1562, la Saint-Barthélemy du 24 août 1572, les Barricades de 1588,
Jacques Clément en 1589, Arques 1589 et Ivry 1590, l'abjuration du 25 juillet 1593, le sacre de
Chartres en février 1594, Vervins et l'édit de Nantes du 13 avril 1598, Ravaillac le 14 mai 1610,
Alès 1629, Westphalie 1648, les Pyrénées 1659, mars 1661 et les vingt-deux ans du roi, les
remontrances supprimées en 1673, Colbert en 1665, Saint-Gobain en 1665, les tarifs de 1664 et
1667, le canal du Midi en 1681, l'Académie des sciences de 1666, les Quatre Articles de 1682,
Port-Royal rasé en 1710-1711, Fontainebleau le 18 octobre 1685, les camisards de 1702, Dévolution
1667-1668, Nimègue 1678, Augsbourg 1686 et Ryswick 1697, Utrecht 1713 et Rastatt 1714, les
famines de 1693-1694 et 1709, la mort du 1er septembre 1715 — tout se vérifie, et plusieurs de
ces leçons prennent le soin, rare dans le corpus neuf, de dire que les historiens ne s'accordent
pas (le baptême de Clovis « 496, mais parfois 499 ou 508 », l'exil des protestants, la peste).*

### [GRAVE] La leçon 14 attribue à Giscard d'Estaing la légalisation de la contraception, acquise sept ans plus tôt

- **Où** : `heritage/culture-g/data/lecons/histoire-france/14.json`, section « Pompidou, Giscard
  d'Estaing et les mutations de la société »
- **Texte** : « Sous son septennat sont adoptés l'abaissement de la majorité civile de vingt et un
  à dix-huit ans, **la légalisation de la contraception** puis l'autorisation de l'interruption
  volontaire de grossesse par la loi défendue par Simone Veil et promulguée le 17 janvier 1975,
  ainsi que le divorce par consentement mutuel. »
- **Problème** : la contraception a été **légalisée par la loi Neuwirth du 28 décembre 1967**,
  sous la présidence du général de Gaulle — sept ans avant l'élection de Giscard d'Estaing. Ce
  que son septennat apporte est autre chose, et la confusion efface justement ce qui faisait
  l'enjeu : la loi du 4 décembre 1974 rend la contraception **remboursable** par la Sécurité
  sociale et accessible aux mineures sans autorisation parentale, les décrets d'application de
  1967 ayant été retardés jusqu'en 1969 et 1972. La leçon transforme une mesure d'application en
  une légalisation, et déplace de sept ans une des dates les plus souvent demandées du programme.
  Le corpus neuf, lui, dit juste : `hf3-sante-france` écrit « La contraception avait été
  légalisée par la loi Neuwirth en 1967 ». C'est donc, une fois de plus, **la leçon héritée qui
  se trompe et le corpus neuf qui a raison** — l'inverse du schéma habituel de ce domaine, et la
  raison pour laquelle il ne faut pas corriger l'un par l'autre sans vérifier.
- **Correction proposée** : « Sous son septennat sont adoptés l'abaissement de la majorité civile
  de vingt et un à dix-huit ans, le remboursement de la contraception — légalisée dès 1967 par la
  loi Neuwirth — et l'autorisation de l'interruption volontaire de grossesse par la loi défendue
  par Simone Veil, promulguée le 17 janvier 1975, ainsi que le divorce par consentement mutuel. »

### [MOYEN] « Le droit de grève accordé en 1864 » : le raccourci est aussi dans la leçon 09

- **Où** : `heritage/culture-g/data/lecons/histoire-france/09.json`, section « L'Empire
  autoritaire, la modernisation économique et Haussmann »
- **Texte** : « … une classe ouvrière urbaine se forme, à laquelle l'Empire finit par accorder
  en 1864 **le droit de grève**, tout en maintenant une surveillance étroite des organisations
  ouvrières. »
- **Problème** : je dois nuancer le constat que j'ai porté plus haut. La formule fautive n'est
  pas propre au corpus neuf : elle apparaît **quatre fois** dans le domaine — `hf-etat-providence`
  (cours), `hf4-troisieme-republique` (explication), la leçon 09, et sous une forme atténuée
  ailleurs — contre **deux formulations exactes** (`hf3-mouvement-ouvrier` et `hf4-restauration`,
  qui écrivent « supprime le délit de coalition », « levée pour la grève »). C'est donc un
  raccourci de manuel installé, et non l'erreur d'un rédacteur isolé, ce qui rend la correction
  plus lourde mais aussi plus nécessaire : la loi Ollivier du 25 mai 1864 dépénalise la grève,
  elle ne la constitue pas en droit, et le droit de grève n'est reconnu qu'en 1946 par le
  préambule de la Constitution.
- **Correction proposée** : « … à laquelle l'Empire finit par accorder en 1864 le droit de
  cesser le travail, en supprimant le délit de coalition — sans reconnaître pour autant un droit
  de grève, qui n'existera qu'en 1946. »

### [MINEUR] Le corps électoral de 1831 rapporté à une population qui n'est pas la bonne

- **Où** : `heritage/culture-g/data/lecons/histoire-france/08.json`, section « La monarchie de
  Juillet, régime bourgeois (1830-1848) »
- **Texte** : « L'abaissement du cens de 300 à 200 francs porte le corps électoral d'un peu moins
  de 100 000 votants à environ 166 000 en 1831, **soit à peine un Français sur cent
  soixante-dix**. »
- **Problème** : les deux chiffres d'électeurs sont exacts, le rapport ne l'est pas. La France de
  1831 compte environ **32,6 millions** d'habitants : 32 600 000 ÷ 166 000 donne **un sur cent
  quatre-vingt-seize**, et non un sur cent soixante-dix. Le ratio annoncé supposerait une
  population de vingt-huit millions, celle de la France de la fin du XVIIIe siècle. Le chiffre
  est d'ailleurs plus frappant dans sa version exacte.
- **Correction proposée** : « … soit à peine un Français sur deux cents ».

### [MINEUR] L'expédition du Mexique : 1861 dans la leçon, 1862 dans le cours

- **Où** : `heritage/culture-g/data/lecons/histoire-france/09.json` (« l'expédition du Mexique,
  **engagée en 1861** ») contre `cours/histoire-france.ts`, `hf2-second-empire`
  (« L'expédition du Mexique, **entre 1862 et 1867** »)
- **Problème** : les deux dates renvoient à deux faits distincts — la convention tripartite de
  Londres d'octobre 1861 et le débarquement des troupes françaises à Veracruz en décembre 1861 -
  janvier 1862, puis le début des opérations proprement françaises en 1862. Aucun des deux textes
  ne le dit, et l'apprenant qui suit les deux chapitres retient deux bornes différentes pour le
  même épisode.
- **Correction proposée** : « L'expédition du Mexique, décidée fin 1861 et menée par la France
  seule à partir de 1862, se solde par un échec en 1867. »

*Sur les leçons 07 à 17, la seconde lecture ne trouve rien d'autre, et le contrôle a de nouveau
porté sur tous les chiffres : les 100 000 morts et 1 800 000 prisonniers de 1940, Pétain appelé
le 16 juin, l'armistice du 22 juin, les 569 voix contre 80 du 10 juillet, le statut des Juifs du
3 octobre 1940 aggravé en juin 1941, Montoire le 24 octobre, le retour de Laval en avril 1942,
l'invasion de la zone sud le 11 novembre 1942, le STO de février 1943, la Milice de janvier 1943,
les MUR de janvier 1943, le CNR du 27 mai 1943, Caluire le 21 juin, les 1 200 titres clandestins,
les 75 000 déportés dont moins de 3 000 revenus, Oradour le 10 juin 1944, le débarquement de
Provence le 15 août, les FFI de février 1944 sous Koenig, Paris libéré le 25 août, l'ordonnance
du 21 avril 1944 exercée en 1945 ; la Première Restauration du 6 avril 1814, l'île d'Elbe le
1er mars 1815, la Seconde Restauration du 8 juillet, la Chambre introuvable dissoute en septembre
1816, la loi Lainé de 1817, le duc de Berry en février 1820, Villèle en 1821, l'expédition
d'Espagne de 1823, la mort de Louis XVIII en septembre 1824, le sacre de 1825, Alger le
5 juillet 1830, les ordonnances du 25 juillet, l'intronisation du 9 août et la Charte révisée du
7 août, les canuts du 21 novembre 1831, Fieschi le 28 juillet 1835, la loi Guizot du 28 juin
1833 ; les 241 000 électeurs censitaires de 1848 devenus neuf millions, les ateliers nationaux du
27 février fermés le 21 juin, les 1 500 fusillés de juin, la Constitution du 4 novembre 1848,
les 74 % du 10 décembre, la loi Falloux du 15 mars 1850 et la loi du 31 mai, la Constitution du
14 janvier 1852, l'Empire du 2 décembre 1852, la Crimée de 1853-1856, Magenta et Solférino,
Nice et la Savoie en 1860, la presse libre en 1868, Ollivier en 1870 ; le référendum du
28 septembre 1958 à près de 83 %, la promulgation du 4 octobre, le Petit-Clamart d'août 1962,
le référendum du 28 octobre 1962, le départ du 28 avril 1969, Pompidou élu en juin 1969 et mort
en avril 1974, la loi Veil du 17 janvier 1975, la saisine élargie de 1974, l'abolition du
9 octobre 1981, les trois cohabitations, le référendum de septembre 2000, le rejet du 29 mai
2005, la révision du 23 juillet 2008, l'IVG constitutionnalisée le 4 mars 2024 ; Cartier 1534,
Québec 1608, le Code noir de 1685, Paris 1763, la Louisiane en 1803, Haïti 1804, Abd el-Kader
jusqu'en 1847, Berlin 1884-1885, l'AOF de 1895, l'AEF de 1910, Madagascar 1895-1896, Fès 1912,
Fachoda 1898, les treize millions et demi de kilomètres carrés, l'indigénat du 28 juin 1881,
Lamine Guèye en mai 1946, Genève 1954, 1956 pour le Maroc et la Tunisie, 1960 pour l'Afrique,
le 5 juillet 1962, le Vanuatu en 1980 ; les 5 % de croissance annuelle de 1950 à 1973, les 2 %
de chômage, les 37 % puis 10 % d'actifs agricoles, les 500 000 chômeurs de 1968, la Sorbonne du
3 mai, les barricades du 10 au 11 mai, Grenelle du 25 au 27, Baden-Baden le 29, l'allocution du
30 — tout se vérifie.*

---

## Ce que la seconde passe a ajouté

**Vingt et un constats neufs**, dont sept graves, plus la rectification de trois corrections de
la passe 1. Par ordre d'importance :

1. **Trente explications donnent la réponse d'une autre question du même chapitre**, dans seize
   chapitres. Invisible en lecture séquentielle : il a fallu charger le module par `contenuDe`,
   c'est-à-dire après application de `FUSIONS` et `FUSIONS_INTERNES`, et croiser chaque question
   avec toutes les autres de son chapitre d'arrivée. C'est le constat le plus étendu du domaine
   après la duplication.
2. **Le résumé automatique « Cette leçon couvre : … » donne la réponse dans trois chapitres
   hérités** — cinq questions annulées, dont une où le titre de section fournit le nom *et* les
   dates que l'énoncé reprend mot pour mot. Mécanisme de fabrication, pas de rédaction : aucune
   relecture de texte ne pouvait le voir.
3. **Trois de mes propres corrections de passe 1 étaient fausses** : l'écart de l'élection de
   1974 (1,62 point, et non « moins d'un point »), la date de Jeanne d'Arc à Chinon (février
   1429 était juste, mars ne l'est pas), et la durée de la rivalité Brunehaut-Frédégonde (près de
   trente ans, et non une vingtaine).
4. **Deux erreurs de fait neuves dans le corpus** : « le droit de grève reconnu en 1864 »
   (quatre occurrences, dont le cours et une leçon héritée ; le droit de grève date de 1946), et
   l'équipement sanitaire de 1954 donné pour « un quart » des logements dans le cours quand le
   recensement dit 10,4 %.
5. **Une erreur de fait dans une leçon héritée** : la leçon 14 attribue au septennat de Giscard
   d'Estaing la légalisation de la contraception, acquise en 1967 par la loi Neuwirth. Le corpus
   neuf, lui, dit juste — l'inverse du schéma habituel du domaine, et la démonstration qu'il ne
   faut pas corriger le seed par le cahier sans vérifier.
6. **Deux astuces de notion supplémentaires donnent la réponse littérale** (`hf3-france-monde`,
   `hf3-justice-france-histoire`), et deux astuces déjà signalées en trahissent une seconde
   chacune : le domaine compte **onze notions concernées et vingt questions annulées**, contre
   les huit relevées au début de la passe 2.
7. **Deux doublons neufs** : la vénalité des offices définie deux fois dans deux notions que
   rien ne réunit, et *Le Contrat social* / *Du contrat social* demandé deux fois dans le même
   chapitre, sous deux titres différents pour le même livre.
8. **Trois contradictions internes neuves** : la révocation de l'édit de Nantes (150-200 000
   exilés dans la leçon, « plusieurs centaines de milliers » dans le cours), la loi salique
   (réinterprétée au XIVe siècle dans trois textes, au XVe dans un quatrième), et l'expédition
   du Mexique (1861 / 1862).
9. **Une astuce dont les deux chiffres ne se comparent pas** (`hf3-agriculture-france` : six
   millions d'actifs agricoles en 1950 contre quatre cent mille chefs d'exploitation
   aujourd'hui), et **une question à trois réponses vraies** (les salons du XVIIIe siècle).
10. Le reste : deux énoncés de plus dont le mot interrogatif ne correspond à aucune proposition,
    une fuite d'explication entre question neuve et quiz hérité (Utrecht), le ratio électoral de
    1831, le bilan de Courrières, « le dernier carolingien Louis V », une troisième estimation
    des mots gaulois, et trois défauts de rédaction dans le fichier de cours.

**Une mise en garde sur ce rapport lui-même.** J'ai d'abord rédigé six constats — Beauvais
(question et cours), Marie Curie, Chambord, Brunehaut, l'accord fautif de
`hf3-decentralisation-territoires` — avant de m'apercevoir qu'ils figuraient déjà dans la passe 1,
dont je n'avais lu que la fin de la liste. Je les ai retirés. La seconde lecture les confirme
tous : ils sont exacts, et le constat sur Beauvais est même plus grave que ma reformulation, la
photographie qui illustre la section du cours étant précisément **la nef d'Amiens**, c'est-à-dire
la bonne réponse à la question que le texte fait rater. Quiconque appliquera les corrections doit
donc traiter la liste de la passe 1 comme faisant autorité sur ces six points.

## Ce qui est sain — après deux passes

Le socle factuel reste, après vérification pièce par pièce des quelque quatre cents dates et
chiffres du domaine, remarquablement exact : en dehors des cinq erreurs de fait relevées sur
l'ensemble des deux passes, tout ce que j'ai contrôlé se vérifie, y compris les chiffres réputés
glissants (48,50 m à Beauvais, 51,04 % à Maastricht, 13 152 arrêtés au Vél d'Hiv, 643 à Oradour,
423 à Malpasset, 1 099 à Courrières, 82,6 % au référendum de 1958, 74 % en décembre 1848).
Les leçons héritées 01 à 06 et 12 sortent indemnes de la seconde lecture, et plusieurs d'entre
elles font ce que le corpus neuf ne fait presque jamais : donner les fourchettes concurrentes en
disant qui les avance, plutôt que de trancher — le baptême de Clovis « 496, mais parfois 499 ou
508 », les 150 000 à 200 000 exilés de la révocation, le quart à un tiers de la population
emporté par la peste, les six mille à vingt mille morts de la Semaine sanglante, les bilans
opposés de la guerre d'Algérie. Le problème du domaine n'a pas changé de nature entre les deux
passes : ce n'est pas la justesse, c'est la répétition — et, ce que la passe 2 ajoute, la
**porosité** : dans un chapitre sur trois, quelque chose ailleurs dans le même chapitre donne la
réponse avant qu'on ait à la chercher.
