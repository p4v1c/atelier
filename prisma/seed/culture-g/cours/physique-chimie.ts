/** Physique et chimie, premier lot — les cours. */
import type { LotCours } from "../commun";

export const COURS_PHYSIQUE_CHIMIE: LotCours = {
  "pc-tableau-periodique": [
    ["Ranger les éléments", `En 1869, Dmitri Mendeleïev publie un tableau où les éléments sont rangés par masse croissante et regroupés par propriétés. Son geste décisif n'est pas le classement lui-même mais les cases qu'il laisse vides : il prédit l'existence et les propriétés d'éléments encore inconnus, découverts dans les années suivantes. Le tableau moderne compte cent dix-huit cases, rangées par numéro atomique.

Le numéro atomique d'un élément est son nombre de protons : c'est lui, et non la masse, qui définit l'identité chimique. Deux isotopes d'un même élément ont le même nombre de protons mais un nombre de neutrons différent : ils ont donc les mêmes propriétés chimiques et des masses distinctes.`],
    ["Lire une colonne", `Une colonne du tableau réunit des éléments aux propriétés voisines, parce que c'est le nombre d'électrons de leur couche externe qui gouverne leur comportement chimique. Les gaz nobles, dernière colonne, ont une couche externe saturée : ils sont chimiquement très peu réactifs, ce qui explique leur emploi dans les atmosphères protectrices.

Quelques symboles ne s'accordent pas avec les noms français, parce qu'ils viennent du latin : Fe pour le fer, du latin ferrum ; Au pour l'or, de aurum ; Pb pour le plomb, de plumbum. Le mercure est le seul métal liquide à température ambiante, propriété qui lui a valu son usage dans les thermomètres avant que sa toxicité ne l'écarte.`],
    ["D'où viennent les atomes", `L'hydrogène est l'élément le plus abondant de l'univers : il constitue l'essentiel de la matière ordinaire, formée dans les premières minutes après le Big Bang. Au cœur du Soleil, la fusion transforme cet hydrogène en hélium, réaction qui libère l'énergie rayonnée.

Les étoiles fabriquent ensuite par fusions successives les éléments jusqu'au fer. Au-delà, la fusion ne libère plus d'énergie : les éléments plus lourds que le fer se forment lors d'événements violents — supernovae et fusions d'étoiles à neutrons. L'or d'une bague vient donc d'une catastrophe stellaire, ce qui n'est pas une image mais une description.`],
  ],

  "pc-lumiere-ondes": [
    ["Un spectre large", `Le visible n'est qu'une mince tranche du spectre électromagnétique, bornée par le violet et le rouge, entre l'ultraviolet et l'infrarouge. De part et d'autre s'étendent les ondes radio, les micro-ondes, les rayons X et les rayons gamma, qui ont la plus courte longueur d'onde et l'énergie la plus élevée.

La vitesse de la lumière dans le vide vaut exactement 299 792 458 mètres par seconde — exactement, car depuis 1983 c'est cette valeur qui définit le mètre : la longueur n'est plus mesurée, elle est déduite d'une durée.`],
    ["Se propager, se courber", `La réfraction est le changement de direction de la lumière lorsqu'elle passe d'un milieu à un autre où sa vitesse diffère. Elle explique le bâton qui semble brisé dans l'eau et le fonctionnement des lentilles.

Newton décompose au XVIIe siècle la lumière blanche avec un prisme, montrant qu'elle contient toutes les couleurs, puis les recombine — la démonstration décisive contre l'idée que le prisme colorait la lumière. Un arc-en-ciel combine ces deux phénomènes : réfraction à l'entrée et à la sortie des gouttes de pluie, réflexion à l'intérieur. Le ciel, lui, est bleu parce que les molécules de l'air diffusent davantage les courtes longueurs d'onde ; au couchant, l'épaisseur d'atmosphère traversée les élimine et laisse passer les rouges.`],
    ["Onde ou particule", `L'effet photoélectrique — l'éjection d'électrons par la lumière frappant un métal — a résisté à toute explication ondulatoire : l'énergie des électrons dépend de la couleur, pas de l'intensité. Einstein l'explique en 1905 en supposant la lumière constituée de quanta, ce qui lui vaudra le Nobel.

De là vient la dualité onde-corpuscule : la lumière, et la matière, se comportent tantôt comme des ondes, tantôt comme des particules, selon l'expérience réalisée. Ce n'est pas une hésitation mais une propriété. Le laser exploite précisément la nature quantique de la lumière : son nom est l'acronyme anglais de l'amplification de lumière par émission stimulée de rayonnement.`],
  ],

  "pc-energie": [
    ["Deux principes", `Le premier principe de la thermodynamique énonce que l'énergie se conserve : elle ne se crée ni ne se perd, elle change de forme. L'unité d'énergie du Système international est le joule.

Le second principe ajoute une direction : l'entropie d'un système isolé ne peut que croître. Autrement dit, l'énergie se dégrade — elle se disperse en chaleur diffuse, inutilisable. C'est ce principe, et non un défaut de fabrication, qui plafonne le rendement de toute machine thermique : un moteur de voiture convertit typiquement trente à quarante pour cent de l'énergie du carburant en mouvement, le reste partant en chaleur.`],
    ["Les formes de l'énergie", `L'énergie cinétique est liée au mouvement d'un corps et croît avec le carré de sa vitesse : doubler la vitesse quadruple l'énergie à dissiper au freinage, ce qui explique l'allongement des distances d'arrêt. L'énergie potentielle de pesanteur est liée à la position d'un corps dans un champ de pesanteur : l'eau d'un barrage la stocke, la turbine la convertit.

La relation E = mc² établit que masse et énergie sont deux formes d'une même grandeur, avec un facteur de conversion énorme : une masse minuscule correspond à une énergie considérable. C'est ce qui rend les réactions nucléaires si énergétiques comparées aux réactions chimiques.`],
    ["Machines et noyaux", `Une pompe à chaleur transfère la chaleur d'un milieu froid vers un milieu chaud, ce qui semble contredire le sens spontané des transferts : elle ne le fait qu'au prix d'un travail fourni. Son intérêt est qu'elle déplace plus de chaleur qu'elle ne consomme d'énergie, avec des coefficients de performance de trois à quatre.

La fission casse un noyau lourd en noyaux plus légers ; la fusion assemble au contraire des noyaux légers. Les deux libèrent de l'énergie, pour des raisons liées à la courbe de stabilité des noyaux. Enfin, l'exergie désigne la part d'une énergie réellement convertible en travail : deux quantités d'énergie identiques n'ont pas la même valeur d'usage selon leur température et leur forme.`],
  ],

  "pc-astronomie-systeme": [
    ["Huit planètes", `Depuis 2006, le système solaire compte officiellement huit planètes. La définition adoptée cette année-là exige qu'une planète orbite autour du Soleil, soit assez massive pour être sphérique, et ait nettoyé le voisinage de son orbite. C'est ce dernier critère qui a exclu Pluton, reclassée en planète naine.

Jupiter est la plus grosse planète, avec une masse supérieure à celle de toutes les autres réunies. Mercure est la plus proche du Soleil, mais ce n'est pas la plus chaude : Vénus détient ce record, avec plus de quatre cent soixante degrés en surface, du fait d'un effet de serre massif dû à son atmosphère de gaz carbonique.`],
    ["Les petits corps", `La ceinture d'astéroïdes principale se situe entre Mars et Jupiter : ce ne sont pas les débris d'une planète détruite, mais des matériaux que l'influence gravitationnelle de Jupiter a empêchés de s'agréger. Au-delà de Neptune s'étend la ceinture de Kuiper, région d'objets glacés dont Pluton fait partie.

Ce qui distingue une comète d'un astéroïde est sa composition : riche en glaces, la comète développe en s'approchant du Soleil une chevelure et une queue, formées par la sublimation de ces glaces. La sonde New Horizons a survolé Pluton en 2015, après neuf ans de voyage, et livré les premières images détaillées de cet objet.`],
    ["Distances et origines", `La lumière du Soleil met environ huit minutes à nous parvenir : nous voyons donc toujours le Soleil tel qu'il était huit minutes plus tôt. À l'échelle du système solaire, c'est la seule façon commode d'exprimer les distances.

Quant à la Lune, l'hypothèse aujourd'hui dominante veut qu'elle se soit formée par la collision de la Terre primitive avec un corps de la taille de Mars : les débris éjectés se seraient agrégés en orbite. Cette explication rend compte de la composition de la Lune, très proche de celle du manteau terrestre, et de sa faible teneur en fer.`],
  ],

  "pc-univers-cosmologie": [
    ["L'expansion", `L'univers a environ treize milliards huit cents millions d'années. En 1929, Edwin Hubble observe que les galaxies s'éloignent de nous d'autant plus vite qu'elles sont lointaines : c'est la signature d'une expansion. Le prêtre et physicien belge Georges Lemaître avait proposé quelques années plus tôt l'idée d'un univers en expansion issu d'un atome primitif.

L'expansion n'est pas une fuite dans l'espace : c'est l'espace lui-même qui s'étire, entraînant les galaxies. Il n'y a donc pas de centre d'où tout s'écarterait — l'observation est la même depuis n'importe quelle galaxie.`],
    ["Le rayonnement fossile et l'inconnu", `Le fond diffus cosmologique est le rayonnement émis environ trois cent quatre-vingt mille ans après le Big Bang, lorsque l'univers, en se refroidissant, est devenu transparent. Détecté par hasard en 1965, il constitue la preuve observationnelle la plus solide du modèle, et ses minuscules variations de température ont livré l'essentiel des paramètres cosmologiques connus.

Reste un problème considérable : environ quatre-vingt-quinze pour cent du contenu de l'univers échappe à toute identification. La matière noire est une matière invisible détectée par ses seuls effets gravitationnels sur la rotation des galaxies. L'énergie noire est la composante, encore plus énigmatique, qui accélère l'expansion.`],
    ["Notre place, et les extrêmes", `Le système solaire se trouve dans la Voie lactée, galaxie spirale barrée de quelques centaines de milliards d'étoiles, à environ vingt-six mille années-lumière de son centre. La galaxie majeure la plus proche est Andromède, distante d'environ deux millions et demi d'années-lumière — et qui se rapproche : les deux fusionneront dans quelques milliards d'années.

Un trou noir est une région dont la gravité est si intense que rien ne peut s'en échapper, pas même la lumière. L'horizon des événements est la frontière au-delà de laquelle aucun retour n'est possible : ce n'est pas une surface matérielle, mais une limite géométrique. La première image d'un environnement de trou noir a été publiée en 2019.`],
  ],

  "pc-mesures-unites": [
    ["Sept unités", `Le Système international compte sept unités de base : mètre, kilogramme, seconde, ampère, kelvin, mole et candela. Toutes les autres en dérivent.

Depuis la réforme entrée en vigueur en 2019, plus aucune ne repose sur un objet matériel. Le kilogramme était le dernier : il était défini jusque-là par un cylindre de platine iridié conservé à Sèvres, dont la masse dérivait imperceptiblement. Il est désormais défini à partir de la constante de Planck. La seconde repose sur une transition de l'atome de césium 133, le mètre sur la distance parcourue par la lumière en une fraction de seconde.`],
    ["Ce que mesurent les autres", `La mole mesure une quantité de matière : elle correspond à un nombre fixé d'entités élémentaires, ce qui permet de raisonner en nombre d'atomes tout en pesant des grammes. Le kelvin mesure une température absolue, dont l'origine est le zéro absolu : un écart d'un kelvin égale un écart d'un degré Celsius, seule l'origine change.

Les préfixes forment un système décimal : kilo multiplie par mille, méga par un million, giga par un milliard, téra par mille milliards. Dans l'autre sens, milli, micro, nano : un nanomètre vaut un milliardième de mètre, échelle des molécules.`],
    ["Estimer, et se tromper", `Attention aux fausses unités. Une année-lumière n'est pas une durée mais une distance : celle que parcourt la lumière en un an, soit environ neuf mille cinq cents milliards de kilomètres.

L'art de l'ordre de grandeur consiste à estimer sans calculer, en arrondissant à la puissance de dix la plus proche : il permet de repérer immédiatement un résultat aberrant. Son absence coûte cher. En 1999, la sonde Mars Climate Orbiter a été perdue parce qu'une équipe travaillait en unités impériales et l'autre en unités métriques : une confusion d'unités a détruit une mission de plusieurs centaines de millions de dollars.`],
  ],

  "pc-materiaux": [
    ["Dur, résistant, tenace", `Dur n'est pas résistant. Le diamant est le matériau naturel le plus dur connu — il raye tous les autres — mais il se brise net sous un choc, car il n'est pas tenace. La dureté mesure la résistance à la rayure, la résistance mécanique la charge supportée, la ténacité la capacité à absorber un choc sans rompre : trois propriétés indépendantes.

Le béton illustre le même point : très résistant en compression, il se fissure en traction, ce qui oblige à l'armer d'acier dans toute poutre ou dalle. C'est l'acier qui reprend les efforts de traction, le béton ceux de compression.`],
    ["Assembler pour améliorer", `Un alliage est un mélange d'un métal avec un ou plusieurs autres éléments, dont les propriétés dépassent celles de ses composants : l'acier inoxydable doit sa résistance à la corrosion au chrome, qui forme en surface une couche d'oxyde protectrice et auto-régénérante.

Un matériau composite associe des matériaux aux propriétés complémentaires sans qu'ils se mélangent : des fibres résistantes noyées dans une matrice qui les lie et transmet les efforts. Fibre de carbone, fibre de verre, béton armé relèvent tous du même principe. Le kevlar, fibre synthétique à très haute résistance à la traction, est utilisé pour les gilets pare-balles.`],
    ["Matériaux à propriétés singulières", `Le verre est transparent parce que sa structure désordonnée ne possède pas de niveaux d'énergie absorbant le visible : les photons le traversent sans être arrêtés. Un semi-conducteur a une conductivité intermédiaire entre celle des métaux et celle des isolants, et surtout modulable : c'est ce qui fait tout l'électronique.

Deux matériaux plus récents illustrent la recherche actuelle. Le graphène est un feuillet de carbone d'un seul atome d'épaisseur, extrêmement résistant et bon conducteur, isolé en 2004. Un matériau à mémoire de forme est un alliage qui, déformé à froid, retrouve sa forme initiale après chauffage : il équipe des montures de lunettes, des agrafes chirurgicales et des actionneurs.`],
  ],

};
