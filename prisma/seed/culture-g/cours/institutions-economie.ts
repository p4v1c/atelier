/** Institutions et économie, premier lot — les cours. */
import type { LotCours } from "../commun";

export const COURS_INSTITUTIONS_ECONOMIE: LotCours = {
  "ie-justice-france": [
    ["Deux ordres", `La justice française est organisée en deux ordres distincts, ce qui la singularise. L'ordre judiciaire juge les litiges entre personnes privées et les infractions pénales ; l'ordre administratif juge les litiges opposant les particuliers à l'administration. Cette séparation remonte à la Révolution et à la méfiance envers des juges qui entraveraient l'action publique.

Chaque ordre a son sommet : la Cour de cassation pour l'ordre judiciaire, le Conseil d'État pour l'ordre administratif. Ni l'une ni l'autre ne rejuge les faits : elles vérifient que le droit a été correctement appliqué. Lorsque la compétence elle-même est disputée entre les deux ordres, c'est le Tribunal des conflits, composé à parité, qui tranche.`],
    ["Les degrés et les acteurs", `Le principe du double degré de juridiction garantit qu'une affaire puisse être rejugée entièrement en appel, en fait comme en droit. Le pourvoi en cassation constitue un troisième temps, mais d'une autre nature : il ne porte que sur le droit.

Au pénal, la cour d'assises juge les crimes — les infractions les plus graves — avec un jury populaire, tandis que les délits relèvent du tribunal correctionnel. Le procureur de la République représente la société et requiert une peine ; il n'est pas juge. Le juge d'instruction, saisi des affaires les plus complexes, enquête à charge et à décharge : il est le seul magistrat à pouvoir mener une information judiciaire.`],
    ["Les garanties", `La présomption d'innocence pose que toute personne est réputée innocente tant qu'elle n'a pas été jugée coupable : c'est un principe constitutionnel, qui s'impose aussi aux médias et à l'administration, et qui fonde la charge de la preuve sur l'accusation.

Depuis 2010, la question prioritaire de constitutionnalité permet à un justiciable de contester, à l'occasion d'un procès, la constitutionnalité d'une loi déjà en vigueur. Avant cette réforme, le contrôle ne pouvait intervenir qu'avant la promulgation, sur saisine d'autorités politiques : des lois anciennes pouvaient donc violer des droits sans qu'aucun juge puisse s'en saisir.`],
  ],

  "ie-monnaie-banques": [
    ["Qu'est-ce que la monnaie", `La monnaie remplit trois fonctions : unité de compte, qui permet d'exprimer les prix ; intermédiaire des échanges, qui évite le troc ; réserve de valeur, qui permet de reporter un pouvoir d'achat dans le temps. Une monnaie qui cesse d'assurer la troisième — en cas d'hyperinflation — perd rapidement les deux autres.

Contrairement à une intuition répandue, ce ne sont pas les banques centrales qui créent l'essentiel de la monnaie en circulation, mais les banques commerciales, en accordant des crédits : un prêt crée un dépôt, donc de la monnaie, qui disparaît lorsqu'il est remboursé.`],
    ["La banque centrale", `L'objectif principal de la Banque centrale européenne est la stabilité des prix, définie comme une inflation proche de deux pour cent à moyen terme. Cet objectif unique la distingue de la Réserve fédérale américaine, qui poursuit aussi le plein emploi.

Son outil ordinaire est le taux directeur. Quand elle le relève, le crédit devient plus cher pour les banques puis pour leurs clients, ce qui freine la demande et donc les prix. En période de taux déjà nuls, elle recourt à l'assouplissement quantitatif : l'achat massif de titres, principalement obligataires, pour injecter des liquidités et faire baisser les taux longs.`],
    ["Prix, changes et fragilités", `L'inflation se mesure par un indice des prix à la consommation calculé sur un panier de biens représentatif, dont la composition est révisée régulièrement — ce qui explique les écarts entre inflation mesurée et inflation ressentie. La déflation, baisse générale et durable des prix, est plus redoutée que l'inflation modérée : elle incite à reporter les achats et alourdit le poids réel des dettes.

Le taux de change est le prix d'une monnaie exprimé dans une autre. Vingt pays utilisent l'euro comme monnaie officielle au sein de la zone euro. Enfin, une crise de liquidité bancaire survient lorsqu'une banque solvable ne parvient plus à se financer à court terme : ses actifs valent davantage que ses dettes, mais elle ne peut pas les vendre assez vite — d'où le rôle de prêteur en dernier ressort de la banque centrale.`],
  ],

  "ie-croissance-inegalites": [
    ["Ce que mesure le PIB", `Le produit intérieur brut mesure la valeur des biens et services produits sur un territoire en un an. Il mesure une production marchande, pas un bien-être : il compte les dégâts réparés comme de la richesse — un accident qui génère des soins et des réparations augmente le PIB — et ignore le bénévolat, le travail domestique et la dégradation environnementale.

Ces critiques ont conduit à proposer des compléments. L'indice de développement humain combine espérance de vie, niveau d'éducation et revenu par habitant, ce qui déplace considérablement les classements. D'autres indicateurs intègrent l'empreinte écologique ou la satisfaction déclarée, sans qu'aucun ne se soit imposé.`],
    ["Répartir", `L'indice de Gini mesure l'inégalité de répartition des revenus : zéro correspond à l'égalité parfaite, un à la concentration totale. Il résume en un chiffre une distribution entière, ce qui est commode et réducteur.

En France, le seuil de pauvreté monétaire est fixé à soixante pour cent du niveau de vie médian : c'est une définition relative, qui mesure un écart à la société et non un minimum vital absolu. Thomas Piketty a popularisé dans les années 2010 l'étude des inégalités à partir des données fiscales plutôt que des enquêtes déclaratives, ce qui a permis de reconstituer des séries longues et de documenter la concentration des hauts revenus.`],
    ["Les grandes relations", `La productivité du travail rapporte la production à la quantité de travail employée : c'est elle qui, à long terme, détermine le niveau de vie possible. Le pouvoir d'achat désigne la quantité de biens qu'un revenu permet d'acheter : il dépend donc du revenu nominal et des prix.

Deux courbes célèbres décrivent des relations discutées. La courbe de Kuznets pose l'hypothèse que les inégalités croissent puis décroissent avec le développement économique ; les données de la fin du XXe siècle l'ont largement démentie. La courbe de Phillips décrit une relation inverse entre chômage et inflation : vérifiée sur certaines périodes, elle s'est brouillée dès les années 1970 avec la stagflation, qui a associé les deux maux.`],
  ],

  "ie-budget-etat": [
    ["Voter le budget", `Chaque année, la loi de finances fixe les recettes et les dépenses de l'État. Elle est examinée à l'automne par le Parlement selon une procédure encadrée par des délais constitutionnels stricts, et complétée en cours d'année par des lois de finances rectificatives.

Côté recettes, le premier impôt de l'État français est la taxe sur la valeur ajoutée : impôt indirect sur la consommation, payé par le consommateur final et collecté par les entreprises. Un impôt progressif, à l'inverse, voit son taux augmenter avec le montant imposé : c'est le cas de l'impôt sur le revenu, avec ses tranches.`],
    ["Déficit, dette et règles", `Le déficit est un flux annuel : la différence entre ce que l'État dépense et ce qu'il encaisse sur une année. La dette est un stock : l'accumulation des déficits passés, moins les remboursements. Combler le déficit ne rembourse donc pas la dette, cela cesse seulement de l'accroître.

Le traité de Maastricht fixe un plafond de déficit public à trois pour cent du PIB et un plafond d'endettement à soixante pour cent — critères devenus des repères politiques bien au-delà de leur portée juridique effective, et suspendus lors des crises récentes. La dette publique française est détenue par des investisseurs français et étrangers sous forme de titres d'État : elle n'est due ni à un pays ni à une institution unique.`],
    ["Contrôler", `Le premier poste de la dépense publique française n'est ni l'éducation ni la défense : c'est la protection sociale, qui en représente à elle seule plus de la moitié lorsqu'on considère l'ensemble des administrations publiques.

La Cour des comptes contrôle l'emploi des fonds publics et publie chaque année un rapport largement commenté ; elle juge les comptes et évalue les politiques, sans pouvoir de sanction politique. Sur les marchés, une note souveraine attribuée par une agence de notation mesure le risque estimé qu'un État ne rembourse pas sa dette : elle influence le taux auquel il emprunte, et son abaissement a un coût budgétaire réel.`],
  ],

  "ie-onu-organisations": [
    ["La charte et les organes", `La charte des Nations unies est signée à San Francisco en juin 1945, avant même la fin de la guerre dans le Pacifique. L'ONU compte aujourd'hui cent quatre-vingt-treize États membres et son siège est à New York, sur un territoire international cédé par les États-Unis.

Six organes principaux la composent, dont l'Assemblée générale, où chaque État dispose d'une voix, et le Conseil de sécurité, seul habilité à prendre des décisions contraignantes. Cinq membres permanents — Chine, États-Unis, France, Royaume-Uni, Russie — y disposent du droit de veto : c'est ce qui explique la paralysie du Conseil dès qu'un conflit met en cause l'un d'eux ou ses alliés.`],
    ["Juger et soigner", `La Cour internationale de justice, qui siège à La Haye, juge les différends entre États et rend des avis consultatifs : elle ne juge pas des individus, à la différence de la Cour pénale internationale, qui est une institution distincte.

Parmi les agences spécialisées, l'UNESCO œuvre pour l'éducation, la science et la culture, et gère notamment la liste du patrimoine mondial. L'Organisation mondiale de la santé peut déclarer une urgence de santé publique de portée internationale, décision qui déclenche des recommandations et une coordination sans pouvoir contraindre les États. Le HCR, Haut-Commissariat pour les réfugiés, assure la protection des personnes déplacées relevant de la convention de 1951.`],
    ["Au-delà de l'ONU", `L'OTAN est une alliance militaire distincte des Nations unies. Son article 5 prévoit qu'une attaque armée contre un membre est considérée comme une attaque contre tous : il n'a été invoqué qu'une fois dans l'histoire, après les attentats du 11 septembre 2001.

En matière de développement, les objectifs de développement durable adoptés en 2015 fixent dix-sept objectifs mondiaux à l'horizon 2030 — pauvreté, faim, santé, éducation, climat, inégalités. Ils succèdent aux objectifs du Millénaire et s'adressent à tous les pays, riches compris, ce qui constituait la principale nouveauté.`],
  ],

  "ie-medias-information": [
    ["Le socle juridique", `La loi du 29 juillet 1881 fonde la liberté de la presse en France et l'encadre encore aujourd'hui : elle pose le principe de liberté et définit limitativement les abus — diffamation, injure, provocation. Sa longévité tient à cette architecture, qui fait de la répression l'exception et non la règle.

Deux droits en découlent. Le secret des sources permet au journaliste de ne pas révéler l'identité de ses informateurs, protection renforcée en 2010 ; sans lui, aucune enquête reposant sur des témoignages internes ne serait possible. Le droit de réponse permet à toute personne nommément citée d'obtenir la publication de sa réponse, sans avoir à démontrer un préjudice.`],
    ["Réguler", `L'Arcom, née en 2022 de la fusion du CSA et de la Hadopi, régule l'audiovisuel et une partie du numérique : respect du pluralisme, protection des mineurs, obligations de production. La CNIL, créée dès 1978, protège les données personnelles et veille à l'application du RGPD, le règlement général sur la protection des données, entré en vigueur en 2018 à l'échelle européenne.

Le règlement européen sur les services numériques, adopté en 2022, impose aux grandes plateformes des obligations de modération, de transparence sur leurs algorithmes et d'accès aux données pour les chercheurs. Il change de logique : plutôt que de juger chaque contenu, il encadre les procédures.`],
    ["L'économie et ses effets", `La presse en ligne se finance principalement par la publicité et les abonnements, dans un équilibre instable : la publicité numérique est captée en majorité par quelques grandes plateformes, ce qui a poussé de nombreux titres vers le modèle payant.

Sur le plan déontologique, la charte de Munich de 1971 énonce dix devoirs et cinq droits des journalistes, et sert de référence européenne. Sur le plan des usages, la bulle de filtre décrit l'enfermement progressif d'un internaute dans des contenus conformes à ses opinions, par l'effet conjugué des algorithmes de recommandation et de ses propres choix — l'ampleur réelle du phénomène fait débat parmi les chercheurs.`],
  ],

  "ie-democratie-regimes": [
    ["Séparer les pouvoirs", `Montesquieu théorise la séparation des pouvoirs en 1748 dans De l'esprit des lois : il ne s'agit pas de cloisonner mais de faire en sorte que chaque pouvoir en limite un autre. Cette idée fonde l'État de droit, ordre dans lequel les pouvoirs publics sont eux-mêmes soumis au droit et contrôlés par un juge.

De la manière dont s'articulent exécutif et législatif naissent les types de régimes. Dans un régime présidentiel, le gouvernement n'est pas responsable devant le Parlement, et le président ne peut pas dissoudre les assemblées : chacun tient sa légitimité des urnes. Dans un régime parlementaire, le gouvernement est responsable devant le Parlement, qui peut le renverser par une motion de censure — ce n'est donc pas un régime sans président, mais un régime où le gouvernement doit conserver une majorité.`],
    ["Le cas français", `La Ve République est qualifiée de semi-présidentielle : elle combine un président élu au suffrage universel direct, doté de pouvoirs propres, et un gouvernement responsable devant l'Assemblée nationale. Cette hybridation explique la possibilité des cohabitations et le déplacement du centre de gravité selon les majorités.

Le référendum, consultation directe des citoyens sur un texte ou une question, y occupe une place particulière : très utilisé sous de Gaulle, il est devenu rare, et le référendum d'initiative partagée créé en 2008 n'a jamais abouti en raison de seuils très élevés.`],
    ["Compter les voix, et compter les contre-pouvoirs", `Le mode de scrutin façonne le paysage politique. Le scrutin majoritaire à deux tours fait gagner celui qui arrive en tête au second tour : il favorise les grandes formations et produit des majorités nettes, au prix d'une sous-représentation des minorités. La représentation proportionnelle répartit les sièges selon le pourcentage de voix : elle représente mieux la diversité et rend les coalitions nécessaires.

Une notion récente complète ce vocabulaire : la démocratie illibérale désigne un régime issu des urnes qui affaiblit progressivement les contre-pouvoirs — justice, presse, opposition, société civile — sans supprimer les élections. Elle rappelle qu'un vote majoritaire ne suffit pas à définir une démocratie.`],
  ],

  "ie-consommation-droit": [
    ["Les garanties", `La garantie légale de conformité est due par le vendeur, gratuite, et dure deux ans pour un bien neuf en France. Elle ne se confond pas avec la garantie commerciale, facultative et souvent payante, que le vendeur ou le fabricant propose en supplément : cette dernière ne peut jamais réduire la première.

À côté d'elle existe la garantie des vices cachés, qui couvre un défaut non apparent rendant le bien impropre à son usage. Elle peut être invoquée bien après deux ans, dans un délai de deux ans à compter de la découverte du vice, et vise le vendeur professionnel comme le particulier.`],
    ["Acheter à distance", `Le délai de rétractation est de quatorze jours pour un achat à distance : l'acheteur peut renoncer sans motif ni pénalité, parce qu'il n'a pas pu examiner le bien avant de commander. C'est précisément pour cette raison qu'il ne s'applique pas aux achats en magasin, où le client a vu le produit — un retour en boutique relève d'un geste commercial, non d'un droit.

Le même raisonnement fonde l'encadrement du démarchage et du crédit. Le taux annuel effectif global exprime le coût total d'un crédit en pourcentage annuel, en intégrant intérêts, frais de dossier et assurances obligatoires : c'est le seul chiffre qui permette de comparer honnêtement deux offres.`],
    ["Les protections collectives", `Une clause abusive est une clause qui crée un déséquilibre significatif entre les droits et obligations des parties au détriment du consommateur ; elle est réputée non écrite, c'est-à-dire qu'elle disparaît du contrat sans que le reste soit annulé.

La DGCCRF contrôle la loyauté des pratiques commerciales et la sécurité des produits. L'action de groupe, introduite en France en 2014, permet d'engager une action en justice pour un ensemble de consommateurs lésés par un même professionnel, ce qui rend possibles des litiges dont le montant individuel serait trop faible pour justifier un procès. Deux dispositifs récents visent enfin la durabilité : le délit d'obsolescence programmée, qui sanctionne la réduction délibérée de la durée de vie d'un produit, et l'indice de réparabilité, note affichée indiquant la facilité de réparer un appareil.`],
  ],

  "ie2-parlement-francais": [
    ["Deux chambres, deux légitimités", `Le Parlement français est bicaméral, et ses deux chambres ne représentent pas la même chose. L'Assemblée nationale compte cinq cent soixante-dix-sept députés élus au suffrage universel direct : elle représente les citoyens. Le Sénat est élu au suffrage indirect par un collège composé très majoritairement de délégués des conseils municipaux : il représente les collectivités territoriales.

Cette composition explique le biais structurel du Sénat en faveur des communes rurales, surreprésentées par rapport à leur population — un maire d'un village de trois cents habitants et un conseiller d'une grande ville pèsent d'un poids sans commune mesure avec les électeurs qu'ils représentent. Ce déséquilibre est assumé, la chambre haute ayant précisément pour objet de faire entendre les territoires.

En cas de désaccord persistant, l'Assemblée nationale a le dernier mot : le gouvernement peut lui demander de statuer définitivement. Cette prééminence découle de sa légitimité directe, et elle est la contrepartie du fait qu'elle seule peut renverser le gouvernement.`],
    ["Comment une loi est votée", `Un texte examiné par le Parlement suit la navette parlementaire : il passe successivement d'une chambre à l'autre, chacune l'amendant, jusqu'à ce que les deux adoptent un texte identique. Une lecture consiste en un examen en commission puis en séance publique.

Quand le désaccord persiste, le gouvernement peut convoquer une commission mixte paritaire : sept députés et sept sénateurs cherchent un texte de compromis. S'ils y parviennent, le texte est soumis aux deux chambres ; s'ils échouent, la navette reprend avant que l'Assemblée ne tranche.

Une loi organique occupe une place particulière : elle précise l'organisation et le fonctionnement des pouvoirs publics prévus par la Constitution, et son adoption suit une procédure renforcée — délais allongés, majorité absolue exigée à l'Assemblée en dernière lecture, et contrôle obligatoire du Conseil constitutionnel avant promulgation. Elle se situe entre la Constitution et la loi ordinaire dans la hiérarchie des normes.`],
    ["Contrôler le gouvernement", `Légiférer n'est qu'une des deux missions du Parlement ; contrôler l'exécutif en est l'autre, et la Constitution l'a explicitement ajoutée en 2008.

Les questions au gouvernement sont une séance hebdomadaire d'interpellation des ministres, retransmise en direct. Leur portée réelle est limitée — les questions comme les réponses sont préparées, et le format favorise la formule plus que la réponse — mais elles constituent le moment de visibilité politique le plus régulier.

Une commission d'enquête parlementaire est un instrument beaucoup plus puissant : temporaire, créée pour six mois au plus sur un sujet déterminé, elle dispose de pouvoirs d'investigation étendus. Ses rapporteurs peuvent obtenir communication de documents, et les personnes convoquées sont tenues de comparaître et de déposer sous serment — un faux témoignage y est pénalement sanctionné. Plusieurs affaires majeures ont été éclairées par cette voie.`],
    ["Le statut du parlementaire", `L'immunité parlementaire protège l'élu de deux façons distinctes, souvent confondues. L'irresponsabilité couvre les opinions et les votes émis dans l'exercice du mandat : elle est absolue et perpétuelle, et permet de s'exprimer en séance sans craindre de poursuite. L'inviolabilité protège des mesures privatives de liberté pour les autres actes, sauf autorisation du bureau de l'assemblée ou crime flagrant : elle ne fait pas obstacle aux poursuites elles-mêmes, contrairement à une croyance répandue.

Depuis 2017, un mandat parlementaire est incompatible avec une fonction exécutive locale — maire, président de conseil départemental ou régional, adjoint. Cette fin du cumul, longtemps réclamée, visait à rendre les parlementaires plus disponibles pour leur travail législatif et à ouvrir le renouvellement du personnel politique.

Ses effets sont discutés. Les parlementaires siègent davantage, mais ont perdu l'ancrage local et les moyens administratifs qu'apportait une mairie ; certains observateurs y voient l'une des causes de l'affaiblissement du lien entre les élus nationaux et les territoires.`,
      { image: "ie-palais-bourbon", legende: "Le Palais-Bourbon : légiférer n'est que l'une des deux missions du Parlement, contrôler l'exécutif est l'autre.", alt: "Façade du Palais-Bourbon" }],
  ],

  "ie2-fonction-publique": [
    ["Trois versants", `La fonction publique française compte trois versants distincts, créés à des dates différentes et régis par des statuts propres. La fonction publique d'État emploie les agents des ministères et de leurs services déconcentrés — enseignants, policiers, magistrats administratifs, agents des finances. La fonction publique territoriale, créée en 1984 avec la décentralisation, emploie ceux des communes, départements et régions. La fonction publique hospitalière emploie les personnels des établissements publics de santé et médico-sociaux.

Ensemble, elles représentent environ un emploi sur cinq en France. Cette proportion est régulièrement citée dans les débats, souvent sans préciser que l'enseignement, la santé et la sécurité en constituent l'essentiel — et que la comparaison internationale dépend entièrement du périmètre retenu, un hôpital public en France étant un hôpital privé ailleurs.`],
    ["Le concours et le statut", `L'accès à la fonction publique française repose sur le principe de l'égal accès par concours, hérité de l'article 6 de la Déclaration de 1789 : tous les citoyens sont également admissibles aux emplois publics, sans autre distinction que celle de leurs vertus et de leurs talents. Le concours anonyme est le moyen technique de cette égalité — il substitue une épreuve à une recommandation.

Un fonctionnaire titulaire est nommé dans un grade et occupe un emploi statutaire : il est régi par un statut légal et réglementaire, non par un contrat. Il en découle que ses droits et obligations peuvent être modifiés unilatéralement par la loi, et qu'il est propriétaire de son grade mais non de son emploi — il peut être affecté ailleurs sans que cela constitue une rupture.

Un agent contractuel est au contraire recruté par contrat, à durée déterminée ou indéterminée, sans être titulaire d'un grade. Leur proportion a fortement augmenté et dépasse aujourd'hui un agent public sur cinq, ce qui interroge la cohérence d'un système fondé sur le concours.`],
    ["Les grands principes du service public", `Trois principes classiques, dégagés par la jurisprudence administrative, gouvernent tout service public.

La continuité impose que le service fonctionne sans interruption injustifiée. C'est ce principe qui fonde l'encadrement du droit de grève dans certains services, le service minimum et la réquisition possible d'agents.

L'égalité impose que tous les usagers placés dans la même situation soient traités de façon identique. Elle n'interdit pas de traiter différemment des situations différentes — un tarif modulé selon les revenus est conforme au principe, précisément parce que les situations diffèrent.

La mutabilité, ou adaptabilité, impose que le service évolue avec les besoins. Elle explique qu'aucun usager ne dispose d'un droit acquis au maintien d'un service en l'état, et qu'un agent ne peut s'opposer à une réorganisation.

Le devoir de réserve, qui s'impose aux agents, est une obligation de modération dans l'expression publique en lien avec leurs fonctions. Il ne supprime pas la liberté d'opinion mais en module l'exercice selon le niveau hiérarchique, la nature des fonctions et la publicité des propos.`],
    ["L'encadrement supérieur", `L'ENA a formé les hauts fonctionnaires français de 1945 à 2021. Créée à la Libération pour démocratiser l'accès aux emplois supérieurs de l'État et unifier leur formation, elle a produit une élite administrative homogène et compétente — et concentré les critiques : reproduction sociale, uniformité des profils, faible ouverture à d'autres parcours. Elle a été remplacée par l'Institut national du service public, avec un tronc commun élargi à d'autres écoles de service public.

Le pantouflage désigne le passage d'un haut fonctionnaire vers le secteur privé, souvent dans un domaine qu'il régulait. La question n'est pas la mobilité en soi — elle peut enrichir les deux sphères — mais le conflit d'intérêts potentiel et le risque de capture du régulateur.

Le dispositif de contrôle a été renforcé : la Haute Autorité pour la transparence de la vie publique examine les projets de départ, peut les assortir de réserves ou les refuser, et un délai de carence s'applique. Le contrôle porte aussi sur le retour dans l'administration après un passage dans le privé, situation symétrique et longtemps ignorée.`],
  ],

  "ie2-droits-libertes": [
    ["Les textes de référence", `La Déclaration universelle des droits de l'homme, adoptée par l'Assemblée générale des Nations unies en 1948, énonce des droits reconnus à tous les êtres humains. Elle n'est pas juridiquement contraignante en elle-même — c'est une déclaration, non un traité — mais elle a inspiré la quasi-totalité des textes ultérieurs et sa portée morale et politique est considérable.

La Convention européenne des droits de l'homme, adoptée en 1950 au sein du Conseil de l'Europe, est en revanche contraignante et surtout dotée d'un juge : la Cour européenne des droits de l'homme, à Strasbourg, devant laquelle tout individu peut porter une requête après épuisement des recours internes. C'est cette possibilité de saisine individuelle qui fait son originalité et son efficacité.

En France, le bloc de constitutionnalité désigne l'ensemble des normes de valeur constitutionnelle : le texte de la Constitution de 1958, mais aussi son préambule, qui renvoie à la Déclaration de 1789, au préambule de 1946 et à la Charte de l'environnement. Le Conseil constitutionnel a reconnu en 1971 la valeur juridique de ce préambule, décision qui a transformé un contrôle de procédure en véritable contrôle des libertés.`],
    ["Quelques libertés fondamentales", `La loi du 29 juillet 1881 protège en France la liberté de la presse. Toujours en vigueur, elle pose un principe de liberté et énumère limitativement les abus punissables — diffamation, injure, provocation. Sa technique juridique est remarquable : elle enferme les poursuites dans des délais et des formes très stricts, dont la moindre irrégularité entraîne la nullité, précisément pour décourager les procédures d'intimidation.

Le droit au respect de la vie privée protège contre l'immixtion dans la sphère personnelle : domicile, correspondance, santé, vie familiale, image. Il s'est étendu aux données personnelles, et il entre régulièrement en tension avec la liberté d'expression et avec les impératifs de sécurité.

La présomption d'innocence pose que toute personne est réputée innocente jusqu'à condamnation définitive. Elle a des conséquences procédurales — la charge de la preuve pèse sur l'accusation, le doute profite à l'accusé — et médiatiques, la présentation d'une personne comme coupable avant jugement étant sanctionnable.

La liberté de conscience, enfin, garantit le droit de croire, de ne pas croire et de changer de conviction. Elle est plus large que la liberté religieuse, qu'elle englobe.`],
    ["Concilier plutôt que hiérarchiser", `Aucune liberté n'est absolue : toutes se concilient avec d'autres droits et avec l'ordre public. La liberté d'expression ne couvre pas la diffamation, la liberté de manifester s'exerce sous réserve de la sécurité, la liberté d'entreprendre cède devant la santé publique. L'idée d'une liberté sans limite est un contresens juridique, car les libertés s'exercent entre personnes dont les droits se rencontrent.

La technique par laquelle le juge opère cette conciliation est le contrôle de proportionnalité. Il vérifie qu'une mesure restreignant une liberté est adaptée — elle permet effectivement d'atteindre l'objectif —, nécessaire — aucune mesure moins attentatoire ne l'atteindrait —, et non excessive au regard du but poursuivi.

Ce raisonnement en trois temps est devenu la méthode commune des juridictions européennes et constitutionnelles. Son mérite est de refuser autant l'absolutisme des libertés que leur sacrifice au premier motif invoqué : il oblige l'autorité à justifier précisément, mesure par mesure.`],
    ["Les régimes d'exception et les gardiens", `L'état d'urgence est un régime d'exception qui élargit les pouvoirs administratifs : assignations à résidence, perquisitions administratives, interdictions de réunion, décidées par le préfet ou le ministre sans autorisation judiciaire préalable. Créé en 1955 pendant la guerre d'Algérie, il a été appliqué en 2005 puis de 2015 à 2017.

Sa difficulté est connue et documentée : un régime d'exception tend à durer, et ses mesures les plus efficaces sont ensuite intégrées au droit commun. C'est ce qui s'est produit en 2017, plusieurs dispositifs de l'état d'urgence ayant été pérennisés dans la loi ordinaire — mécanisme que les juristes désignent comme la banalisation de l'exception.

Le Défenseur des droits est une autorité administrative indépendante inscrite dans la Constitution, qui protège les droits des usagers face aux administrations, lutte contre les discriminations, veille au respect de la déontologie des forces de sécurité et défend les droits de l'enfant. Il ne juge pas mais peut enquêter, recommander, se substituer à une médiation et présenter des observations devant les tribunaux. Sa saisine est gratuite et directe.`],
  ],

  "ie2-mondialisation": [
    ["Ce que le mot recouvre", `La mondialisation économique est l'intégration croissante des économies nationales par les échanges de biens et de services, les mouvements de capitaux, les migrations et la circulation de l'information.

Ce n'est pas un phénomène nouveau : les routes de la soie, le commerce triangulaire et la première mondialisation des années 1870-1914, portée par le télégraphe, le bateau à vapeur et l'étalon-or, en constituent des épisodes antérieurs. Ce qui est nouveau depuis les années 1980, c'est l'intensité et la vitesse — la baisse spectaculaire des coûts de transport et de communication a rendu possible la fragmentation des chaînes de production entre des dizaines de pays, ce qu'aucune époque antérieure n'avait connu.

Une firme multinationale est une entreprise implantée et produisant dans plusieurs pays. Un investissement direct à l'étranger est une prise de participation durable dans une entreprise étrangère, avec influence sur sa gestion — ce qui le distingue de l'investissement de portefeuille, purement financier.`],
    ["Déplacer la production", `Une délocalisation est le transfert d'une activité vers un pays à coûts plus faibles. Le mot est employé plus largement qu'il ne le devrait : beaucoup de ce qu'on nomme délocalisation est en réalité une non-localisation, la croissance ayant eu lieu ailleurs sans qu'une usine française ait fermé.

Ses effets sont dissymétriques et c'est ce qui rend le débat difficile. Les gains — prix plus bas pour tous les consommateurs — sont diffus, faibles individuellement et peu perceptibles. Les pertes — fermetures, chômage local — sont concentrées sur des territoires et des personnes identifiables. Cette asymétrie explique que le bilan agrégé puisse être positif sans que la mesure soit politiquement soutenable, et que les mécanismes de compensation aient été très en deçà de ce que la théorie économique elle-même préconisait.

La relocalisation est le retour d'une production sur le territoire national. Elle progresse pour des raisons qui ne sont pas seulement politiques : automatisation qui réduit le poids du coût du travail, hausse des salaires dans les pays d'accueil, coûts logistiques, délais, et recherche de sécurité d'approvisionnement après les ruptures de 2020.`],
    ["Où va l'impôt", `Un paradis fiscal est un territoire à fiscalité très faible et à opacité élevée. Sa fonction n'est pas d'accueillir une activité mais d'y localiser un bénéfice.

L'optimisation fiscale est l'usage légal des règles fiscales pour réduire l'impôt dû, et se distingue en droit de la fraude, qui est illégale. La frontière est cependant poreuse, et l'abus de droit — un montage sans autre motif que fiscal — est sanctionnable.

Le levier principal est le prix de transfert : le prix auquel les entités d'un même groupe se facturent entre elles biens, services, redevances de marque et de brevet. En fixant ces prix, un groupe décide où apparaît son bénéfice. Une filiale française qui verse une redevance élevée à une filiale irlandaise détentrice de la marque déplace son résultat sans déplacer aucune activité. Le principe de pleine concurrence, qui impose des prix comparables au marché, est difficile à appliquer aux actifs incorporels, dont il n'existe pas de marché.

L'impôt minimum mondial adopté en 2021 sous l'égide de l'OCDE instaure un taux plancher de quinze pour cent sur les bénéfices des grandes multinationales : si un pays taxe moins, un autre peut prélever la différence, ce qui retire tout intérêt au transfert. C'est le premier accord fiscal international de cette ampleur, et sa transposition reste inégale.`],
    ["Un mouvement qui ralentit", `La démondialisation désigne un ralentissement ou un recul de l'intégration économique mondiale. Les données montrent depuis la crise de 2008 une stagnation du ratio des échanges au PIB mondial, après trois décennies de hausse continue — on parle plutôt de plateau que de recul.

Plusieurs facteurs y concourent : la maturation des chaînes de valeur, la croissance de la consommation intérieure chinoise, les tensions géopolitiques et le retour des politiques industrielles, la prise en compte du risque de rupture d'approvisionnement, et l'enjeu climatique du transport.

La recomposition semble plus juste que le recul : les échanges se réorganisent en blocs régionaux et selon des alignements politiques plutôt que de diminuer. Le vocabulaire des dirigeants a d'ailleurs évolué de l'efficacité vers la résilience et la souveraineté — mots qui désignent tous l'acceptation d'un coût supplémentaire en échange d'une moindre dépendance.`],
  ],

  "ie2-marche-concurrence": [
    ["Ce qu'est un marché", `Un marché est, en économie, un lieu réel ou abstrait où se rencontrent une offre et une demande. Il n'a pas besoin d'exister physiquement : le marché du travail, le marché des changes ou celui de l'électricité n'ont pas d'adresse.

La loi de l'offre et de la demande énonce que le prix tend vers le niveau qui égalise les quantités offertes et demandées. Si le prix est trop élevé, l'offre excède la demande et le prix baisse ; s'il est trop bas, l'inverse se produit.

Ce mécanisme suppose des conditions précises : un grand nombre d'acheteurs et de vendeurs dont aucun ne peut influencer le prix, un produit homogène, une information parfaite, une entrée et une sortie libres du marché. Un marché concurrentiel suppose donc des conditions rarement toutes réunies dans la réalité — ce qui n'invalide pas le modèle, qui sert de référence pour mesurer les écarts, mais interdit de le prendre pour une description.`],
    ["Quand la concurrence manque", `Un monopole est une situation où un seul offreur est présent sur un marché. Il peut fixer son prix au-dessus du niveau concurrentiel et réduire les quantités, ce qui lui procure une rente au détriment des consommateurs. Certains monopoles sont naturels — un réseau ferroviaire ou électrique se duplique difficilement — ce qui justifie non de les interdire mais de les réguler.

Un oligopole est un marché dominé par un petit nombre d'offreurs. Sa particularité est l'interdépendance : chacun anticipe les réactions des autres, ce qui peut conduire à une concurrence féroce comme à une entente tacite sur les prix.

Une entente illicite est un accord entre concurrents pour fausser la concurrence — fixation concertée des prix, répartition des marchés, échange d'informations sensibles. C'est l'infraction la plus lourdement sanctionnée, précisément parce qu'elle est secrète et difficile à détecter ; les programmes de clémence, qui exonèrent le premier participant à dénoncer l'entente, ont été conçus pour briser cette solidarité.

Un abus de position dominante est l'exploitation abusive d'une puissance de marché : prix prédateurs, ventes liées, refus d'accès à une infrastructure essentielle. Être dominant n'est pas illégal ; en abuser l'est. L'Autorité de la concurrence sanctionne ces pratiques en France, avec des amendes pouvant atteindre dix pour cent du chiffre d'affaires mondial.`],
    ["Quand le marché échoue", `Certaines situations font échouer le marché même en l'absence de tout comportement fautif. Les économistes parlent de défaillances de marché, et elles fondent l'intervention publique bien plus solidement que des considérations morales.

Une externalité négative est un coût imposé à des tiers sans compensation par le marché : une usine qui pollue une rivière fait supporter un coût à des riverains qui ne sont partie à aucune transaction. Le prix de marché ne reflète alors pas le coût réel, et la quantité produite est excessive. La correction consiste à internaliser cette externalité — par une taxe, une norme ou un marché de quotas.

Un bien public au sens économique est non rival — la consommation de l'un ne réduit pas celle des autres — et non excluable — on ne peut empêcher quiconque d'en bénéficier. L'éclairage public, la défense nationale, la connaissance scientifique en relèvent. Aucun acteur privé n'a intérêt à les financer puisqu'il ne peut faire payer les bénéficiaires, d'où leur prise en charge collective.`],
    ["Ce que chacun sait", `L'asymétrie d'information désigne une situation où une partie à l'échange en sait plus que l'autre. C'est l'une des défaillances les plus répandues, et son analyse a valu le prix Nobel d'économie à Akerlof, Spence et Stiglitz en 2001.

Akerlof l'a illustrée par le marché des voitures d'occasion : le vendeur connaît l'état réel du véhicule, l'acheteur non. Ce dernier, incapable de distinguer, ne propose qu'un prix moyen ; les vendeurs de bonnes voitures se retirent, la qualité moyenne baisse, le prix baisse encore, et le marché peut s'effondrer entièrement. C'est la sélection adverse.

Le même mécanisme opère en assurance — les plus risqués s'assurent le plus —, en crédit et sur le marché du travail. Les réponses sont connues : signaux crédibles et coûteux à imiter comme le diplôme, garanties, certifications, réputation, obligations légales d'information. Une bonne part du droit de la consommation et du droit financier consiste précisément à corriger cette asymétrie.`],
  ],

  "ie2-emploi-chomage": [
    ["Compter les chômeurs", `Le chômage se mesure selon des définitions précises, et tous les sans-emploi n'y entrent pas. Un chômeur au sens du Bureau international du travail est une personne sans aucun emploi — pas même une heure dans la semaine —, disponible pour travailler sous deux semaines, et ayant effectué une démarche active de recherche dans le mois écoulé. Les trois conditions sont cumulatives.

Cette définition, harmonisée à l'échelle internationale, permet les comparaisons entre pays. Elle diffère du nombre d'inscrits à France Travail, qui obéit à une logique administrative : on peut être inscrit sans être chômeur au sens du BIT — parce qu'on a travaillé quelques heures — et être chômeur sans être inscrit. Les deux chiffres sont justes et ne mesurent pas la même chose, ce qui explique bien des polémiques.

La population active regroupe les personnes en emploi et les chômeurs. Le taux de chômage rapporte les chômeurs à cette population active, non à la population totale. Le taux d'emploi mesure autrement : la part des personnes en emploi dans la population en âge de travailler. Il est moins sensible aux effets de découragement, et souvent plus révélateur — un pays où beaucoup renoncent à chercher affiche un chômage bas et un taux d'emploi médiocre.`],
    ["Les zones grises", `Deux notions complètent le tableau et sont indispensables pour ne pas se tromper sur la réalité du marché du travail.

Le halo autour du chômage regroupe les personnes qui souhaitent travailler mais ne remplissent pas l'un des critères du BIT : elles n'ont pas cherché activement, ou ne sont pas immédiatement disponibles — pour cause de garde d'enfant, de formation, de santé, ou par découragement. Elles représentent en France près de deux millions de personnes, un ordre de grandeur comparable à celui du chômage lui-même.

Le sous-emploi désigne les personnes en emploi qui travaillent moins qu'elles ne le souhaiteraient : temps partiel subi, chômage technique. Ce n'est pas du chômage, mais ce n'est pas non plus un emploi satisfaisant.

Additionner chômage, halo et sous-emploi donne une image bien plus complète que le seul taux de chômage — et c'est ce que fait l'INSEE lorsqu'il publie ces indicateurs conjointement.`],
    ["Deux chômages qui n'appellent pas les mêmes réponses", `Le chômage frictionnel est le chômage de courte durée lié aux transitions entre emplois : le temps de chercher, de comparer, de déménager. Il est inévitable et même souhaitable — un marché où personne ne change jamais d'emploi serait un marché figé. Les politiques qui le visent portent sur l'information, l'appariement et l'accompagnement.

Le chômage structurel tient à une inadéquation durable entre les emplois offerts et les compétences ou la localisation des demandeurs. Il résiste à la croissance : des postes restent vacants pendant que des personnes restent sans emploi. Ses remèdes sont lents — formation, mobilité, logement, transport — et supposent d'agir sur autre chose que le marché du travail lui-même.

S'y ajoute le chômage conjoncturel, lié à un ralentissement de l'activité, seul à répondre rapidement à une relance. Confondre ces trois chômages conduit à appliquer le mauvais remède, et c'est l'une des sources les plus constantes de désaccord entre économistes et responsables politiques.`],
    ["Les instruments", `Le SMIC est le salaire minimum légal en France, en dessous duquel aucun employeur ne peut rémunérer. Il est revalorisé au moins une fois par an selon une formule tenant compte de l'inflation constatée pour les ménages modestes et de la moitié du gain de pouvoir d'achat du salaire horaire de base ouvrier, avec possibilité de coup de pouce gouvernemental. Environ un salarié sur huit en France est rémunéré à son niveau.

Son effet sur l'emploi est l'un des débats les plus disputés de l'économie. La théorie standard prédit qu'un salaire minimum élevé détruit des emplois peu qualifiés ; les études empiriques, depuis les travaux de Card et Krueger, montrent des effets bien plus faibles qu'attendu aux niveaux observés. La France a répondu par une voie propre : maintenir un SMIC élevé tout en allégeant massivement les cotisations sociales à son niveau.

La formation professionnelle continue est un droit à se former tout au long de la vie active, financé par les employeurs et mobilisable notamment par le compte personnel de formation. Le taux d'activité des seniors — part des cinquante-cinq à soixante-quatre ans en emploi ou au chômage — reste inférieur en France à la moyenne européenne, ce qui pèse sur l'équilibre du système de retraites et constitue l'un des enjeux centraux des réformes successives.`],
  ],

  "ie2-finance": [
    ["Propriétaire ou créancier", `Une action est une part de propriété d'une société ; une obligation est une créance sur elle. La différence est essentielle et commande tout le reste.

L'actionnaire est copropriétaire : il possède une fraction du capital, dispose d'un droit de vote en assemblée générale, et perçoit éventuellement un dividende, c'est-à-dire la part du bénéfice que la société décide de distribuer. Il n'a droit à rien de garanti : si la société ne gagne rien, il ne reçoit rien, et en cas de liquidation il est remboursé en dernier, après tous les créanciers. En contrepartie, sa participation aux gains est illimitée.

L'obligataire est prêteur : il perçoit un intérêt fixé au départ et récupère son capital à l'échéance. Il est payé avant les actionnaires en cas de difficulté. Son gain est plafonné, son risque plus faible.

Cette asymétrie explique la hiérarchie du risque et du rendement, qui est la règle la plus constante de la finance : un placement ne peut offrir un rendement supérieur sans un risque supérieur. Toute promesse contraire signale une fraude ou une information manquante.`],
    ["Les marchés", `Une introduction en Bourse est la première mise sur le marché des actions d'une société, qui lui permet de lever des capitaux auprès du public et à ses actionnaires historiques de céder une partie de leurs titres. Elle s'accompagne d'obligations de transparence considérables — publication des comptes, information sur les risques, communication permanente.

Le CAC 40 est l'indice des quarante principales capitalisations de la Bourse de Paris, pondéré par le flottant. Il est souvent lu comme un baromètre de l'économie française, ce qu'il n'est pas : ses entreprises réalisent l'essentiel de leur chiffre d'affaires hors de France, et il ne dit rien des petites entreprises ni de l'emploi domestique.

Un produit dérivé est un contrat dont la valeur dépend d'un actif sous-jacent — action, matière première, taux, devise. Sa fonction première est la couverture : un agriculteur ou une compagnie aérienne y sécurisent un prix futur. Sa fonction spéculative est la contrepartie, l'effet de levier permettant d'engager des positions considérables pour une mise faible.

L'Autorité des marchés financiers régule ces marchés en France : elle agrée les acteurs, contrôle l'information délivrée aux investisseurs, surveille les transactions et sanctionne les abus de marché, dont le délit d'initié.`],
    ["Quand tout s'emballe", `Une bulle spéculative est une hausse des prix déconnectée de la valeur fondamentale de l'actif, entretenue par l'anticipation que quelqu'un rachètera plus cher. Elle suit une mécanique bien décrite : innovation ou nouveauté, afflux de crédit, entrée d'investisseurs non professionnels, euphorie, puis retournement brutal. La tulipomanie hollandaise, la bulle internet et l'immobilier des années 2000 en offrent des versions séparées par des siècles et pourtant très semblables.

La crise des subprimes débute en 2007 avec les crédits immobiliers américains accordés à des ménages peu solvables, à taux variable, sur l'hypothèse d'une hausse continue des prix. Ces créances ont été titrisées — transformées en titres négociables, découpées et mélangées — puis notées de façon trop favorable et diffusées dans tout le système financier mondial. Quand les défauts sont survenus, plus personne ne savait qui portait le risque.

C'est la définition même du risque systémique : le risque qu'une défaillance individuelle se propage à l'ensemble du système. Il justifie une régulation particulière des établissements dont la faillite serait insupportable, avec des exigences de fonds propres renforcées — et il pose le problème de l'aléa moral, une banque qui se sait indispensable étant incitée à prendre plus de risques.

Le trading à haute fréquence, enfin, exécute des transactions automatisées en fractions de seconde pour exploiter des écarts minimes. Il apporte de la liquidité en temps normal et l'a retirée brutalement lors de plusieurs décrochages éclairs, ce qui a conduit à instaurer des coupe-circuits sur les places.`],
  ],

  "ie2-logement": [
    ["Le premier poste de dépense", `Le logement et les charges associées constituent le premier poste de dépense des ménages français, devant l'alimentation et les transports. Sa part dans le budget a environ doublé depuis les années 1960.

Le taux d'effort mesure la part du revenu consacrée à se loger. Sa moyenne masque une dispersion considérable : il dépasse largement le tiers du revenu pour les ménages modestes du parc locatif privé en zone tendue, et reste faible pour les propriétaires ayant achevé de rembourser leur emprunt. C'est cette dispersion, plus que la moyenne, qui décrit la réalité du problème.

Cette évolution tient moins au coût de la construction qu'à celui du foncier, et à un décalage durable entre la construction et la demande dans les zones où l'emploi se concentre. Le logement est ainsi devenu l'un des principaux facteurs d'inégalité entre ceux qui possédaient déjà et ceux qui arrivent sur le marché.`],
    ["Les politiques du logement social", `Un logement social est un logement à loyer plafonné, attribué sous conditions de ressources, construit et géré par des organismes agréés. Il représente environ un logement sur six en France, proportion élevée en comparaison européenne, et abrite des ménages dont les revenus vont bien au-delà des plus modestes — les plafonds concernent une majorité de la population.

La loi SRU de 2000 impose un quota de logements sociaux — vingt à vingt-cinq pour cent selon les cas — aux communes d'une certaine taille situées dans des agglomérations tendues, sous peine de pénalités financières. Son objectif est autant la mixité sociale que le volume : elle vise à empêcher que certaines communes concentrent les logements sociaux et d'autres aucun.

Son bilan est contrasté. Elle a produit des dizaines de milliers de logements et fait bouger des communes récalcitrantes ; plusieurs préfèrent cependant payer la pénalité, dont le montant reste inférieur au coût politique et foncier de la construction.`],
    ["Encadrer et protéger", `L'encadrement des loyers plafonne le loyer au mètre carré dans les zones tendues, par référence à un loyer médian constaté, avec un complément possible pour des caractéristiques exceptionnelles. Appliqué à Paris puis étendu à plusieurs agglomérations, il fait l'objet d'un débat empirique nourri : il protège les locataires en place, et son effet sur l'offre et sur la qualité de l'entretien est discuté.

La trêve hivernale suspend les expulsions locatives du 1er novembre au 31 mars. Elle ne supprime pas la dette ni la décision de justice : elle en diffère l'exécution, avec des exceptions notamment pour les squats et les logements dangereux.

Le droit au logement opposable, institué en 2007, permet à une personne mal logée ou sans logement de saisir une commission puis, en cas d'échec, d'exercer un recours contre l'État devant le juge administratif. Il transforme un objectif politique en obligation juridiquement sanctionnable — innovation notable, dont l'efficacité bute sur le nombre de logements disponibles : l'État est condamné à des astreintes sans pour autant pouvoir reloger.`],
    ["Le logement et l'environnement", `Une passoire thermique est un logement très mal isolé, classé F ou G au diagnostic de performance énergétique. Ce diagnostic évalue de manière standardisée la consommation d'énergie et les émissions d'un logement, sur une échelle de A à G, et il est obligatoire à la vente comme à la location.

Sa portée est devenue juridique : les logements les plus énergivores sont progressivement interdits à la location, par étapes successives. La mesure vise à sortir du marché les logements les plus coûteux à chauffer, qui sont aussi ceux qu'occupent les ménages les plus modestes — d'où sa difficulté, car un logement retiré du marché sans être rénové aggrave la pénurie.

L'artificialisation des sols liée à l'habitat désigne la transformation de terres naturelles ou agricoles en surfaces construites ou imperméabilisées. L'étalement pavillonnaire en est le principal moteur en France, avec des effets sur les sols, l'eau, la biodiversité et les déplacements. L'objectif de « zéro artificialisation nette » à l'horizon 2050 impose de compenser toute artificialisation nouvelle par une renaturation — ce qui suppose de construire davantage sur des espaces déjà urbanisés, et heurte de plein fouet le modèle de la maison individuelle avec jardin.`],
  ],

  "ie2-sante-systeme": [
    ["Une offre libérale, un financement socialisé", `La France combine une offre de soins largement libérale — médecins de ville installés à leur compte, cliniques privées — et un financement massivement socialisé. Cette combinaison est une singularité : la plupart des pays ont soit un système national de santé public, soit un système d'assurance privée.

Les soins sont principalement financés par l'assurance maladie obligatoire, qui couvre en moyenne près de huit euros sur dix de la dépense de santé, complétée par les mutuelles et assurances complémentaires. Le reste à charge des ménages est l'un des plus faibles au monde, ce qui explique un accès financier aux soins comparativement bon.

Cette architecture a une conséquence directe : le financeur ne dirige pas l'offre. L'assurance maladie paie des actes qu'elle ne prescrit pas et n'implante pas les cabinets, ce qui limite fortement sa capacité à orienter la répartition territoriale des professionnels.`],
    ["Le parcours du patient", `Le parcours de soins coordonné organise l'accès aux soins autour du médecin traitant, qui suit le patient et l'oriente vers les spécialistes. Consulter hors de ce parcours entraîne une moindre prise en charge. Son objectif était double : améliorer la coordination et limiter le nomadisme médical.

Une affection de longue durée est une maladie chronique ouvrant droit à une prise en charge à cent pour cent des soins liés à cette pathologie. Une trentaine d'affections figurent sur la liste — diabète, cancer, insuffisance cardiaque. Ce dispositif concentre une part majeure des dépenses de l'assurance maladie sur une minorité d'assurés, et c'est précisément l'objet d'une assurance sociale : le partage du risque.

Le tiers payant dispense le patient de faire l'avance des frais, le professionnel étant payé directement. Généralisé pour la part assurance maladie sur les médicaments et pour certains publics, sa généralisation complète a été plusieurs fois annoncée puis reportée, la profession médicale y voyant une charge administrative et une perte de lien avec le coût réel.`],
    ["Les tensions sur l'accès", `Un désert médical est un territoire où l'offre de soins est très insuffisante au regard de la population. Le phénomène ne concerne pas seulement le rural : des quartiers urbains denses en sont également touchés.

Sa cause principale est démographique. Le numerus clausus, qui limitait strictement le nombre d'étudiants admis en deuxième année de médecine, a été maintenu à un niveau très bas des années 1970 aux années 2000, dans l'idée qu'une offre réduite réduirait la dépense. Le résultat s'est manifesté vingt ans plus tard, au moment où partait à la retraite une génération nombreuse. Le dispositif a été remplacé en 2020 par un numerus apertus fixant des objectifs régionaux, mais l'effet d'une formation qui dure une décennie ne se fera sentir que tardivement.

Le secteur 2 autorise certains médecins à pratiquer des dépassements d'honoraires, avec « tact et mesure ». Sa généralisation dans certaines spécialités et certaines villes crée une barrière financière, en partie couverte par les complémentaires — ce qui rend l'accès effectif dépendant du niveau de couverture complémentaire.`],
    ["Évaluer et surveiller", `Un générique est une copie d'un médicament dont le brevet a expiré, contenant le même principe actif à la même dose, et dont la bioéquivalence est démontrée. Son prix est nettement inférieur puisqu'il n'a pas à amortir la recherche. Sa diffusion représente une économie considérable pour l'assurance maladie, et la France a longtemps été en retard sur ses voisins en la matière.

La Haute Autorité de santé est une autorité publique indépendante qui évalue les médicaments, dispositifs et actes en vue de leur remboursement, élabore des recommandations de bonne pratique et certifie les établissements. Son avis sur le service médical rendu conditionne le taux de prise en charge.

La pharmacovigilance surveille les effets indésirables des médicaments après leur commercialisation. Elle est indispensable parce qu'un essai clinique, même large, ne détecte pas les effets rares ni ceux qui apparaissent après des années d'usage. Le scandale du Mediator a montré ce qui arrive quand les signaux remontés ne sont pas traités : le dispositif a été profondément réformé en 2011, avec une agence rénovée, une transparence accrue des liens d'intérêts et une possibilité de signalement direct par les patients.`],
  ],

  "ie2-defense-securite": [
    ["Qui commande", `Le président de la République est le chef des armées en France, aux termes de la Constitution. Il préside les conseils de défense, dispose de la décision d'emploi de l'arme nucléaire, et décide de l'engagement des forces. Le Premier ministre est responsable de la défense nationale, et le Parlement autorise la prolongation au-delà de quatre mois d'une intervention extérieure — sans avoir à autoriser son déclenchement.

Cette concentration est l'une des caractéristiques les plus marquées de la Ve République, souvent qualifiée de « domaine réservé » — expression qui n'a aucun fondement constitutionnel mais décrit une pratique constante depuis 1958.

Le service militaire obligatoire a été suspendu — et non supprimé — en 1997, la conscription pouvant être rétablie par la loi. L'armée est depuis professionnelle. La journée défense et citoyenneté en est le vestige : une journée obligatoire de sensibilisation pour tous les jeunes Français, qui conditionne l'inscription aux examens et aux concours.`],
    ["La dissuasion", `La dissuasion nucléaire française repose sur le principe de stricte suffisance : disposer du minimum d'armes nécessaire pour infliger à un agresseur des dommages inacceptables, et pas davantage. Elle se distingue ainsi d'une logique de parité ou de supériorité numérique, et explique un arsenal de quelques centaines de têtes là où d'autres puissances en comptent des milliers.

Elle repose sur deux composantes complémentaires. La composante océanique, portée par des sous-marins nucléaires lanceurs d'engins dont l'un au moins est en permanence à la mer, assure l'invulnérabilité : un adversaire ne peut détruire une force qu'il ne localise pas. La composante aéroportée, portée par des avions de combat, apporte la souplesse et la possibilité d'un avertissement gradué.

La doctrine française est strictement défensive et vise les intérêts vitaux du pays, notion volontairement laissée imprécise — l'ambiguïté fait partie du dispositif, un adversaire ne devant pas pouvoir calculer jusqu'où il peut aller.`],
    ["Les forces intérieures", `La gendarmerie nationale est une force armée exerçant des missions de police, statut hybride sans équivalent dans beaucoup de pays. Militaire par son statut, sa discipline et ses règles d'emploi, elle est rattachée au ministère de l'Intérieur pour ses missions de sécurité intérieure depuis 2009. Elle couvre environ la moitié de la population et la grande majorité du territoire, la police nationale exerçant en zone urbaine.

Ce statut militaire lui donne des capacités propres : disponibilité permanente, logement en caserne, projection en opérations extérieures, unités spécialisées comme le GIGN.

La DGSE assure le renseignement extérieur, c'est-à-dire la recherche et l'exploitation d'informations hors du territoire national, et relève du ministère des Armées. La DGSI est son homologue pour le renseignement intérieur, rattachée à l'Intérieur. La communauté du renseignement française compte plusieurs autres services, et son activité a été encadrée par une loi de 2015 instaurant un contrôle par une commission indépendante — auparavant, ces techniques s'exerçaient largement hors de tout cadre légal.`],
    ["Se protéger, se doter", `Le plan Vigipirate est un dispositif national permanent de vigilance et de protection contre le terrorisme, articulé en niveaux d'alerte qui déclenchent des mesures graduées : contrôles renforcés, patrouilles, protection de sites sensibles. Créé en 1978, il est devenu une composante visible du paysage urbain, avec la question récurrente de l'accoutumance à un dispositif permanent.

La cyberdéfense protège les systèmes d'information contre les attaques, et constitue depuis une quinzaine d'années une priorité affirmée. Elle se distingue de la cybersécurité par sa dimension d'action de l'État, et associe une agence chargée de la protection des systèmes critiques et un commandement militaire disposant de capacités offensives assumées depuis 2019.

Une loi de programmation militaire fixe les moyens des armées sur plusieurs années : effectifs, équipements, crédits. Son intérêt est de donner de la visibilité à des programmes d'armement dont le cycle dépasse largement une législature — un porte-avions ou un avion de combat se conçoivent sur des décennies. Sa faiblesse historique était son inexécution, les crédits étant régulièrement révisés à la baisse en cours de route ; les dernières programmations ont été exécutées plus fidèlement, dans un contexte de remontée des budgets de défense en Europe.`],
  ],

  "ie2-histoire-economique": [
    ["1929 et la naissance de l'État économique", `En octobre 1929, la Bourse de New York s'effondre après une décennie de hausse alimentée par le crédit. Le krach n'est pas en soi la crise : c'est l'enchaînement qui suit — faillites bancaires en chaîne, contraction du crédit, effondrement de la demande, chômage de masse — qui produit la Grande Dépression. Aux États-Unis, un quart de la population active se retrouve sans emploi.

Le New Deal est le programme américain de relance et de réformes lancé par Roosevelt : grands travaux, régulation bancaire avec séparation des banques de dépôt et d'investissement, assurance des dépôts, droits syndicaux, et premières bases d'un système de sécurité sociale. Son efficacité conjoncturelle est encore discutée par les historiens ; son effet institutionnel est indiscutable, puisqu'il installe durablement l'idée que l'État est responsable de la situation économique.

John Maynard Keynes en fournit la théorie en 1936 : dans une économie où la demande est insuffisante, l'équilibre peut s'établir durablement avec un chômage massif, et seule une dépense publique peut relancer la machine. Il rompt avec l'idée que le marché revient spontanément au plein emploi — rupture intellectuelle majeure, qui domine la pensée économique pendant quarante ans.`],
    ["Les contradicteurs", `Milton Friedman conteste cette domination à partir des années 1950 en réhabilitant le rôle de la monnaie. Il soutient, dans une histoire monétaire des États-Unis restée célèbre, que la Dépression n'est pas due à une défaillance du marché mais à une erreur de la banque centrale, qui a laissé la masse monétaire se contracter. Il en tire une conclusion générale : l'action discrétionnaire de l'État est plus souvent nuisible qu'utile, et mieux vaut des règles stables.

Friedrich Hayek développe une critique d'un autre ordre. Le marché, pour lui, est avant tout un système de traitement de l'information : les prix agrègent des connaissances dispersées entre des millions d'individus, qu'aucun planificateur ne pourrait rassembler. L'objection à la planification n'est donc pas morale mais épistémique — c'est un problème de connaissance, non de volonté.

Joseph Schumpeter, enfin, place l'innovation au cœur de la dynamique capitaliste avec la notion de destruction créatrice : le progrès détruit les activités anciennes en même temps qu'il en crée de nouvelles, et cette destruction n'est pas un dysfonctionnement mais le mécanisme même de la croissance. Sa portée est double, car elle explique aussi bien le dynamisme du système que les résistances sociales qu'il rencontre.`],
    ["Bretton Woods et les chocs", `Le système de Bretton Woods, conçu en 1944, organise l'ordre monétaire de l'après-guerre : des changes fixes mais ajustables, le dollar convertible en or, et deux institutions nouvelles — le Fonds monétaire international et la Banque mondiale. Il apporte trois décennies de stabilité monétaire et accompagne la plus forte croissance de l'histoire occidentale.

Il s'effondre en 1971 quand les États-Unis suspendent la convertibilité du dollar en or, incapables de tenir leurs engagements face à la masse de dollars en circulation. Les changes deviennent flottants, ce qu'ils sont restés.

Les chocs pétroliers de 1973 et 1979 ajoutent une difficulté que la théorie dominante n'avait pas prévue : une hausse brutale du prix du pétrole provoque simultanément inflation et récession. La stagflation contredit la relation supposée entre chômage et inflation, et fragilise durablement le keynésianisme au profit des thèses monétaristes.`],
    ["Les crises récentes", `La crise de la dette souveraine européenne, à partir de 2010, est une crise de confiance sur la capacité de plusieurs États de la zone euro à rembourser. Elle révèle un défaut de construction : une monnaie unique sans budget commun ni prêteur en dernier ressort clairement désigné pour les États. Les taux d'intérêt divergent brutalement entre pays partageant pourtant la même monnaie.

Sa résolution passe par des plans d'aide assortis de programmes d'austérité aux effets sociaux sévères, puis par l'engagement de la Banque centrale européenne en 2012 de faire « tout ce qu'il faudra » pour préserver l'euro — trois mots qui ont calmé les marchés sans qu'un euro soit dépensé, illustration de ce que vaut la crédibilité d'une banque centrale.

La crise de 2020 présente une particularité inédite : un arrêt volontaire de l'activité pour raisons sanitaires. Ce n'est ni un choc financier ni un choc d'offre ordinaire, mais une interruption décidée. Cette nature explique la réponse — soutien massif des revenus et de la trésorerie plutôt que relance de la demande — et la rapidité du rebond, l'appareil productif n'ayant pas été détruit. Elle a laissé en héritage un endettement public sans précédent en temps de paix, et le retour de l'inflation deux ans plus tard.

Chaque grande crise a ainsi produit une remise en cause des idées dominantes de son époque : c'est probablement la régularité la plus solide de l'histoire de la pensée économique.`],
  ],

  "ie2-numerique-economie": [
    ["Les plateformes", `Une plateforme ne vend pas un produit : elle organise la rencontre entre plusieurs groupes d'utilisateurs. C'est ce qu'on appelle un marché biface — ou multiface — où l'intermédiaire met en relation deux catégories distinctes dont chacune a besoin de l'autre : chauffeurs et passagers, vendeurs et acheteurs, développeurs d'applications et propriétaires de téléphones.

Sa particularité économique est la structure des prix. Une plateforme peut facturer très cher un côté et rien du tout à l'autre, voire subventionner ce dernier, parce que sa valeur pour le premier dépend du nombre d'utilisateurs du second. Un journal gratuit financé par la publicité, une carte bancaire gratuite pour le porteur et facturée au commerçant relèvent du même modèle bien avant internet.

L'effet de réseau amplifie tout : la valeur d'un service augmente avec le nombre de ses utilisateurs. Un réseau social sans membres ne vaut rien, et le même service avec un milliard d'utilisateurs devient difficile à quitter. Ces effets produisent une tendance forte à la concentration — le premier arrivé à une certaine taille devient très difficile à déloger — ce qui explique que les marchés numériques comptent souvent un acteur dominant plutôt qu'une concurrence dispersée.`],
    ["Le modèle de l'attention", `L'économie de l'attention désigne un modèle où le temps et l'attention des utilisateurs constituent la ressource vendue. Le service est gratuit pour l'utilisateur parce que celui-ci n'est pas le client : l'annonceur l'est, et ce qui est vendu est un accès à une audience qualifiée.

La conséquence est directe sur la conception des produits : ce qui est optimisé n'est pas la satisfaction de l'utilisateur mais le temps passé et l'engagement. Les algorithmes de recommandation, les notifications, le défilement infini et les mécanismes de récompense variable sont des choix d'ingénierie orientés vers cet objectif, et ils empruntent explicitement aux travaux sur le conditionnement.

Cette structure explique aussi pourquoi les contenus clivants ou indignants sont favorisés : ils suscitent plus de réactions, donc plus d'engagement, sans qu'aucune intention éditoriale ne soit nécessaire. C'est un effet du critère d'optimisation, non d'un choix de contenu — ce qui le rend d'autant plus difficile à corriger.`],
    ["Réguler", `Le RGPD, entré en application en 2018, encadre le traitement des données personnelles dans l'Union européenne. Il repose sur quelques principes : une base légale obligatoire pour tout traitement, la minimisation des données collectées, la limitation des finalités, et des droits pour les personnes — accès, rectification, effacement, portabilité. Son extraterritorialité en a fait une norme de fait bien au-delà de l'Europe.

Le règlement sur les marchés numériques poursuit un objectif distinct : encadrer les pratiques des très grandes plateformes qui contrôlent l'accès aux marchés. Il leur interdit certaines pratiques — favoriser leurs propres services, empêcher la désinstallation d'applications préchargées, exploiter les données de leurs vendeurs contre eux — et leur impose l'interopérabilité. La logique est celle du droit de la concurrence, mais avec des obligations définies à l'avance plutôt qu'une sanction après coup, l'expérience ayant montré que les procédures classiques aboutissaient trop tard.`],
    ["Les effets sur le travail et l'environnement", `Le travail de plateforme est une activité exercée sous statut indépendant mais organisée par une application qui fixe les prix, attribue les courses, note les prestataires et peut les déconnecter. Le débat juridique porte sur la qualification : l'existence d'un lien de subordination fait basculer vers le salariat, et plusieurs décisions de justice en France et en Europe ont requalifié des contrats. Une directive européenne a introduit une présomption de salariat, laissant aux plateformes la charge de la preuve contraire.

La fracture numérique recouvre à la fois des inégalités d'accès — équipement, connexion — et d'usage, c'est-à-dire de compétences. La dématérialisation des services publics a rendu la seconde aussi bloquante que la première.

L'empreinte environnementale du numérique regroupe les impacts des équipements, des réseaux et des centres de données. Contrairement à une idée reçue, la fabrication des terminaux en constitue la part majeure, devant la consommation d'usage — ce qui déplace le levier d'action vers la durée de vie des appareils plutôt que vers les usages.

Un logiciel libre, enfin, est un logiciel dont la licence garantit quatre libertés : l'utiliser, l'étudier, le modifier et le redistribuer. Ce n'est pas une question de gratuité mais de droits sur le code, et une part majeure des infrastructures d'internet en dépend.`],
  ],

  "ie2-inegalites-mondiales": [
    ["Mesurer la pauvreté", `L'extrême pauvreté, au sens de la Banque mondiale, se définit par un seuil international de revenu quotidien, exprimé en parité de pouvoir d'achat pour être comparable entre pays. Ce seuil est régulièrement réévalué, et il correspond au niveau des seuils nationaux des pays les plus pauvres.

Son évolution depuis 1990 est l'une des transformations les plus considérables de la période : la part de l'humanité vivant sous ce seuil a été divisée par plus de trois, malgré une population mondiale en forte croissance. Cette baisse est portée avant tout par l'Asie, et particulièrement par la Chine, dont la sortie de la pauvreté de plusieurs centaines de millions de personnes représente à elle seule l'essentiel du mouvement mondial.

Ce constat massif est compatible avec un autre, apparemment contradictoire : l'écart entre pays s'est réduit tandis que les inégalités internes augmentaient dans de nombreux États. Les moyennes nationales convergent, les écarts à l'intérieur des sociétés se creusent. Les deux phénomènes coexistent et expliquent qu'on puisse produire des récits opposés à partir de données également exactes.`],
    ["Les flux vers les pays pauvres", `L'aide publique au développement rassemble les transferts publics des pays riches vers les pays en développement, sous forme de dons ou de prêts concessionnels. L'objectif de zéro virgule sept pour cent du revenu national brut, fixé en 1970, n'est atteint que par une poignée de pays.

Les transferts de fonds des migrants représentent, pour de nombreux pays, une ressource supérieure à cette aide — souvent trois fois plus à l'échelle mondiale. Ils ont deux avantages notables : ils vont directement aux ménages, sans intermédiaire administratif, et ils sont contracycliques, augmentant quand le pays d'origine traverse une crise. Leur inconvénient est le coût des frais de transfert, qui prélèvent une part significative des sommes envoyées et que les organisations internationales cherchent à réduire.

Le microcrédit est un prêt de faible montant accordé à des personnes exclues du système bancaire, sans garantie matérielle mais souvent avec une caution solidaire de groupe. Popularisé par la Grameen Bank de Muhammad Yunus, prix Nobel de la paix en 2006, il a été présenté comme un instrument de sortie de la pauvreté. Les évaluations rigoureuses menées depuis ont considérablement nuancé ce récit : le microcrédit améliore la trésorerie et l'activité de microentreprises existantes, mais ne fait pas sortir de la pauvreté et peut conduire au surendettement.

Le commerce équitable garantit un prix minimum au producteur ainsi qu'une prime collective et des conditions de production. Son effet est réel pour les producteurs certifiés, et sa portée limitée par la part encore modeste des volumes concernés.`],
    ["Le poids de la dette", `La dette des pays en développement pose un problème dont l'ampleur est mal perçue : son service — remboursement du capital et paiement des intérêts — peut absorber une part majeure des recettes publiques, davantage que les budgets de santé et d'éducation réunis dans plusieurs pays.

Deux facteurs aggravent la situation. Ces dettes sont souvent libellées en devises étrangères, si bien qu'une dépréciation de la monnaie nationale en augmente mécaniquement le poids. Et les taux exigés sont bien supérieurs à ceux des pays riches, pour un risque perçu plus élevé, ce qui crée un cercle vicieux.

Les initiatives d'allègement pour les pays pauvres très endettés, lancées à la fin des années 1990, ont annulé des montants considérables en échange de réformes. La question s'est reposée après 2020, avec une difficulté nouvelle : les créanciers se sont diversifiés — États hors club de Paris, détenteurs privés d'obligations — ce qui rend beaucoup plus difficile la coordination d'une restructuration.`],
    ["Les inégalités à l'intérieur", `Le coefficient de Gini mesure la concentration des revenus ou des patrimoines au sein d'une population : zéro pour une égalité parfaite, un pour une concentration totale. Sa lecture demande de la prudence — il résume en un chiffre toute une distribution, et deux sociétés très différentes peuvent avoir le même Gini. Il est en outre bien plus élevé pour le patrimoine que pour le revenu, ce dernier étant fortement redistribué par l'impôt et les transferts.

La mobilité sociale intergénérationnelle est la capacité à occuper une position sociale différente de celle de ses parents. Elle intéresse autant que le niveau des inégalités : une société inégale mais fluide n'a pas les mêmes propriétés qu'une société inégale et figée.

La courbe dite de Gatsby le Magnifique met en relation ces deux dimensions à l'échelle internationale, et fait apparaître une corrélation nette : les pays les plus inégalitaires sont aussi ceux où la mobilité sociale est la plus faible. L'intuition selon laquelle de fortes inégalités stimuleraient l'ascension sociale n'est donc pas confirmée par les données — c'est plutôt l'inverse qui s'observe, l'écart entre les positions rendant leur franchissement plus difficile.`],
  ],

  "ie2-justice-penale": [
    ["Trois degrés d'infraction", `Le droit pénal français classe les infractions en trois catégories selon leur gravité, et cette classification commande tout le reste : la juridiction compétente, la procédure, les délais et les peines.

Les contraventions sont les plus légères, jugées par le tribunal de police, sanctionnées par des amendes. Les délits — vol, escroquerie, violences, conduite en état d'ivresse — relèvent du tribunal correctionnel et sont punis d'amende et d'emprisonnement jusqu'à dix ans. Les crimes — meurtre, viol, vol à main armée — relèvent de la cour d'assises ou de la cour criminelle départementale, et sont punis de réclusion.

Le principe de légalité des délits et des peines gouverne l'ensemble : nul ne peut être puni pour un fait que la loi n'a pas prévu et défini avant sa commission. Formulé par Beccaria au XVIIIe siècle et inscrit dans la Déclaration de 1789, il interdit l'incrimination rétroactive et impose au législateur de définir précisément les comportements punissables. C'est la garantie la plus fondamentale contre l'arbitraire.

La prescription pénale fixe le délai au-delà duquel une infraction ne peut plus être poursuivie : un an pour les contraventions, six ans pour les délits, vingt ans pour les crimes, avec des règles particulières pour les infractions sur mineurs, dont le délai ne court qu'à partir de la majorité, et l'imprescriptibilité des crimes contre l'humanité.`],
    ["Avant le jugement", `La procédure pénale française est mixte : inquisitoire à l'instruction, accusatoire au procès. Pendant l'enquête, un magistrat dirige les investigations à charge et à décharge ; à l'audience, l'accusation et la défense s'affrontent devant un juge arbitre. Ce système hybride se distingue des procédures anglo-saxonnes, purement accusatoires du début à la fin.

La garde à vue est une mesure privative de liberté décidée par un officier de police judiciaire pendant une enquête, d'une durée de vingt-quatre heures renouvelable, portée à plusieurs jours pour certaines infractions. Elle a été profondément réformée en 2011 après des condamnations européennes : la personne doit désormais être informée de ses droits, du droit de se taire, et peut être assistée d'un avocat dès le début et lors des auditions — ce qui n'était pas le cas auparavant.

La détention provisoire est l'incarcération d'une personne présumée innocente avant son jugement. Elle n'est possible que pour des motifs limitativement énumérés — risque de fuite, de concertation, de renouvellement, trouble à l'ordre public — et doit rester l'exception. Elle représente pourtant une part importante de la population carcérale française, ce qui constitue l'une des critiques récurrentes adressées au système.`],
    ["Le procès et les peines", `Une partie civile est la victime qui se joint à l'action publique pour demander réparation de son préjudice. Sa place dans le procès pénal français est plus large que dans beaucoup de systèmes étrangers : elle peut déclencher les poursuites par une plainte avec constitution de partie civile, ce qui oblige à l'ouverture d'une instruction même si le parquet ne souhaitait pas poursuivre.

Le sursis dispense d'exécuter tout ou partie d'une peine sous condition de ne pas commettre de nouvelle infraction pendant un délai d'épreuve, et peut s'accompagner d'obligations — soins, travail, indemnisation. La libération conditionnelle permet une sortie anticipée avant la fin de la peine, sous conditions et avec un suivi. Toutes deux répondent à un constat empirique constant : la sortie sans accompagnement est le principal facteur de récidive, et une libération encadrée protège mieux la société qu'une sortie sèche en fin de peine.

La peine de mort a été abolie en France en 1981, à l'initiative de Robert Badinter, alors que l'opinion publique y était majoritairement défavorable. L'abolition a été inscrite dans la Constitution en 2007, ce qui la rend irréversible sans révision constitutionnelle. Elle est aujourd'hui une condition d'adhésion à l'Union européenne.`],
    ["Réparer autrement", `La justice restaurative propose un processus de dialogue entre l'auteur et la victime, ou avec des personnes ayant subi des faits comparables, encadré par des professionnels formés et sur la base d'un volontariat des deux parties.

Elle ne remplace pas la justice pénale et ne se substitue à aucune peine : elle s'y ajoute, à n'importe quel stade de la procédure ou après. Son objectif n'est pas de mesurer une responsabilité mais de permettre à la victime de poser ses questions et d'exprimer ce qu'elle a subi, et à l'auteur de mesurer les conséquences concrètes de ses actes.

Introduite en droit français en 2014, elle reste peu développée en pratique. Les évaluations disponibles, principalement anglo-saxonnes, montrent une satisfaction élevée des victimes et un effet modéré mais réel sur la récidive. Son intérêt tient surtout à ce qu'elle répond à un besoin que le procès pénal satisfait mal : la victime y est un témoin de l'action publique plus qu'une personne à qui l'on s'adresse.`],
  ],

  "ie2-agriculture-politique": [
    ["Nourrir un continent", `La politique agricole commune, lancée en 1962, a d'abord été conçue pour assurer l'autosuffisance alimentaire de l'Europe. Le contexte l'explique : le continent sortait de deux guerres et de restrictions, et l'importation dépendait de devises rares.

Ses instruments d'origine étaient des prix garantis et des achats publics illimités aux producteurs. Le résultat a dépassé l'objectif : l'autosuffisance a été atteinte en une quinzaine d'années, puis les excédents se sont accumulés — les fameuses montagnes de beurre et lacs de lait des années 1980 —, stockés à grands frais ou exportés à prix subventionnés, ce qui déstabilisait les marchés des pays tiers.

La réforme de 1992 a opéré le basculement décisif : les prix garantis ont été abaissés vers les prix mondiaux, et la perte de revenu compensée par des aides directes. Un paiement direct est une aide au revenu versée à l'hectare, découplée de ce qui est produit — l'agriculteur touche la même somme quelle que soit sa production, ce qui supprime l'incitation à produire des excédents.`],
    ["Conditionner les aides", `L'écoconditionnalité subordonne le versement des aides au respect de règles environnementales, sanitaires et de bien-être animal. Le principe est simple : l'argent public ne finance que des pratiques conformes à des exigences fixées collectivement.

Les réformes successives l'ont progressivement renforcée, avec des exigences portant sur le maintien des prairies permanentes, la diversification des cultures, les surfaces d'intérêt écologique, la couverture des sols. Les évaluations restent mitigées — plusieurs critères ont été jugés peu contraignants au regard des pratiques déjà en place — et chaque réforme est un arbitrage entre exigence environnementale et revenu agricole.

La politique agricole commune représente encore une part majeure du budget européen, ce qui en fait la politique commune la plus intégrée, et la plus disputée. Elle est le seul domaine où l'Union dispose de moyens financiers réellement substantiels.`],
    ["Le rapport de force commercial", `La loi EGalim, adoptée en France en 2018 puis complétée à plusieurs reprises, vise à rééquilibrer les relations commerciales entre agriculteurs, transformateurs et distributeurs. Son idée directrice est d'inverser la construction du prix : partir des coûts de production de l'agriculteur plutôt que du prix que le distributeur veut afficher.

Elle a relevé le seuil de revente à perte — prix plancher en dessous duquel un distributeur ne peut vendre — de dix pour cent sur les produits alimentaires, et encadré les promotions. La logique était que la marge ainsi reconstituée profiterait à l'amont ; les évaluations montrent que le ruissellement attendu s'est produit de façon très partielle.

Une interprofession agricole réunit les acteurs d'une filière — production, transformation, distribution — et peut établir des accords étendus à l'ensemble des opérateurs, sur la qualité, la promotion ou les indicateurs de coût. C'est l'un des rares dispositifs où le droit de la concurrence admet une organisation collective, précisément pour compenser l'atomisation du côté agricole.`],
    ["Les chantiers ouverts", `La souveraineté alimentaire désigne la capacité d'un pays à définir sa politique agricole et à nourrir sa population. Le terme, forgé par les organisations paysannes latino-américaines, s'est progressivement imposé dans le vocabulaire officiel français — parfois dans un sens plus étroit, réduit à la balance commerciale, qui perd la dimension de choix démocratique des politiques agricoles portée par le concept d'origine.

Le plan Écophyto vise à réduire l'usage des produits phytosanitaires. Lancé en 2008 avec un objectif de réduction de moitié en dix ans, il a été plusieurs fois reporté et révisé sans que l'usage baisse significativement — l'un des échecs les mieux documentés de la politique environnementale française, dont l'analyse renvoie à l'absence d'alternatives techniques disponibles à coût comparable et à la crainte des distorsions de concurrence.

Le foncier agricole — les terres et les règles régissant leur accès — est devenu un enjeu central pour une raison arithmétique : l'installation d'un jeune agriculteur suppose l'accès à des terres dont le prix a fortement augmenté, alors que le renouvellement des générations s'impose, près de la moitié des agriculteurs devant partir à la retraite dans la décennie. Qui reprendra ces exploitations, et sous quelle forme, est probablement la question qui déterminera le plus l'agriculture française des trente prochaines années.`],
  ],

  "ie2-transports-politiques": [
    ["Le premier secteur émetteur", `Le transport est le premier secteur émetteur de gaz à effet de serre en France, devant l'industrie, l'agriculture et le bâtiment. C'est aussi le seul dont les émissions n'ont pas baissé depuis 1990 : les gains d'efficacité des moteurs ont été absorbés par l'augmentation des distances parcourues et par l'alourdissement des véhicules.

Au sein du secteur, la voiture individuelle domine largement les émissions, devant les poids lourds ; l'aérien intérieur et le ferroviaire ne pèsent que marginalement. Cette répartition oriente toute politique sérieuse : agir sur la voiture particulière est arithmétiquement indispensable, quelles que soient les mesures prises ailleurs.

Elle explique aussi pourquoi les politiques de transport sont politiquement si difficiles. La voiture n'est pas un choix libre pour une grande part de la population : dans les territoires peu denses, sans alternative, elle conditionne l'accès à l'emploi, aux soins et aux services. Toute mesure qui en renchérit l'usage sans offrir d'alternative est vécue comme une injustice, et l'a été.`],
    ["Organiser les réseaux", `SNCF Réseau gère l'infrastructure ferroviaire française — voies, signalisation, gares de triage — et attribue les sillons, c'est-à-dire les créneaux de circulation. Sa séparation d'avec l'exploitant historique découle du droit européen, qui impose de distinguer le gestionnaire d'infrastructure de l'entreprise ferroviaire pour permettre l'ouverture à la concurrence.

Celle-ci autorise plusieurs opérateurs à exploiter des lignes, soit librement pour les services commerciaux comme la grande vitesse, soit par appel d'offres pour les services conventionnés par les régions. Ses premiers effets se lisent surtout sur les liaisons rentables ; les conséquences sur le maillage fin restent à évaluer.

Une autorité organisatrice de mobilité est la collectivité chargée d'organiser les transports sur son territoire : la région pour les trains régionaux et les cars, l'intercommunalité pour les réseaux urbains. Elle définit l'offre, les tarifs et confie l'exploitation. Le versement mobilité, contribution assise sur la masse salariale des employeurs d'une certaine taille, en constitue la principale ressource : ce sont donc largement les entreprises qui financent les transports publics urbains français, particularité peu répandue à l'étranger.`],
    ["Reporter et restreindre", `Le report modal est le transfert de trafic d'un mode de transport vers un autre, en général de la route vers le rail, le fluvial ou le vélo. C'est le levier privilégié des politiques publiques, et le plus difficile à obtenir : il suppose que l'alternative soit compétitive en temps, en coût et en fiabilité, ce qui est rarement le cas simultanément.

Le fret ferroviaire illustre cette difficulté. Sa part dans le transport de marchandises a fortement reculé en France depuis les années 1980, alors qu'elle se maintenait chez plusieurs voisins. Ses causes sont connues : priorité donnée aux voyageurs sur un réseau partagé, disparition des embranchements particuliers desservant les usines, souplesse supérieure du camion. Le transport combiné, qui achemine une même unité de charge — conteneur ou caisse mobile — par plusieurs modes successifs, cherche à concilier la massification du rail et la souplesse de la route sur le dernier kilomètre.

Une zone à faibles émissions est un périmètre urbain où la circulation des véhicules les plus polluants est restreinte selon leur classement. Généralisées en Europe, ces zones améliorent mesurablement la qualité de l'air, et posent une question sociale directe : les véhicules les plus anciens appartiennent aux ménages les plus modestes, ce qui a conduit à en repousser ou assouplir plusieurs calendriers.`],
    ["Changer de motorisation", `Une infrastructure de recharge conditionne l'usage réel des véhicules électriques bien davantage que l'autonomie des batteries. La majorité des recharges s'effectue au domicile ou sur le lieu de travail, ce qui avantage nettement les propriétaires de maison individuelle et laisse en difficulté les habitants d'immeubles collectifs sans place attitrée — inégalité peu discutée mais déterminante pour la diffusion du véhicule électrique.

Le maillage en recharge rapide sur les axes longue distance a beaucoup progressé, et son enjeu n'est plus tant le nombre de points que leur fiabilité, leur puissance et la simplicité du paiement.

La transition du parc pose enfin une question de rythme : un véhicule dure une quinzaine d'années, si bien que le parc en circulation reflète les ventes de la décennie écoulée. Même en supposant une bascule complète des ventes neuves, le renouvellement complet du parc prendrait des décennies — ce qui explique que les politiques de transport combinent nécessairement le changement de motorisation, le report modal et la réduction des distances parcourues, aucune des trois ne suffisant seule.`],
  ],

  "ie2-culture-politiques": [
    ["Le premier ministère de la Culture", `La France a créé en 1959 le premier ministère de la Culture au monde, confié à André Malraux. Sa mission, définie par le décret fondateur, était de rendre accessibles les œuvres capitales de l'humanité au plus grand nombre possible de Français.

Cette formulation contient toute l'ambition et toute la difficulté de la politique culturelle française : elle suppose que les œuvres existent indépendamment des publics, et que l'obstacle est l'accès. Les maisons de la culture, équipements de proximité implantés en province sous Malraux, en furent l'instrument principal — un lieu par département, conçu comme une cathédrale du XXe siècle où l'œuvre rencontrerait le public.

Le bilan de cette conception a été discuté dès les années 1960 par des sociologues montrant que la fréquentation restait fortement déterminée par le milieu social et le capital scolaire, et que la gratuité ne suffisait pas à lever les barrières symboliques. Le débat entre démocratisation — élargir l'accès aux œuvres reconnues — et démocratie culturelle — reconnaître la diversité des pratiques — structure depuis lors la politique culturelle française.`],
    ["L'exception culturelle", `L'exception culturelle française désigne le refus de traiter les biens culturels comme des marchandises ordinaires soumises au seul libre-échange. Elle a été défendue lors des négociations commerciales internationales des années 1990, où la France a obtenu que l'audiovisuel soit exclu des engagements de libéralisation.

Son argument est double : un film ou un livre ne sont pas des biens comme les autres parce qu'ils portent une identité et une langue, et parce que le marché seul conduirait à la domination des productions les plus capitalisées.

Le cinéma français en est le principal bénéficiaire. Il est soutenu par un mécanisme original : une taxe sur les billets de cinéma et sur les diffuseurs, redistribuée par le Centre national du cinéma sous forme d'avances et de soutiens automatiques. Le système est circulaire — le succès commercial finance la création — et a permis à la France de conserver l'une des rares industries cinématographiques nationales durablement productives en Europe.

La chronologie des médias fixe les délais entre la sortie en salle et les autres modes de diffusion : vidéo, télévision, plateformes. Elle protège la salle, premier maillon du financement, et fait l'objet de renégociations constantes depuis l'arrivée des plateformes de diffusion en continu, qui contestent des délais conçus pour un autre paysage.`],
    ["Les publics", `Le pass Culture est une aide financière créditée sur une application, destinée à l'accès des jeunes aux biens et sorties culturels, avec une part individuelle et une part collective mobilisée par les établissements scolaires. Son évaluation a montré un effet réel sur les dépenses, et une concentration importante sur le livre — notamment la bande dessinée et le manga —, ce qui a conduit à en ajuster les règles pour orienter davantage vers la diversification des pratiques.

La gratuité des collections permanentes des musées nationaux pour les moins de vingt-six ans s'applique aux résidents de l'Union européenne, sur présentation d'un justificatif. Instaurée en 2009, elle a nettement augmenté la fréquentation de cette tranche d'âge, sans transformer sa composition sociale — confirmation que le prix n'est qu'une barrière parmi d'autres.

Une scène nationale est un label attribué par l'État à des établissements de spectacle vivant répartis sur le territoire, avec un cahier des charges de création, de diffusion et d'action culturelle. Le réseau, avec les centres dramatiques nationaux et les centres chorégraphiques, constitue l'ossature de la décentralisation théâtrale engagée dès l'après-guerre.`],
    ["Le financement privé", `Le mécénat culturel est un soutien privé — d'entreprise ou de particulier — ouvrant droit à une réduction d'impôt substantielle, soixante pour cent du versement pour les entreprises dans la limite d'un plafond. Il se distingue du parrainage, qui est une prestation publicitaire relevant d'une logique commerciale et d'un traitement fiscal différent.

Ce dispositif, l'un des plus généreux au monde, a considérablement développé le financement privé de la culture et du patrimoine en France. Il soulève deux questions récurrentes. La première est budgétaire : une réduction d'impôt est une dépense publique indirecte, si bien que l'État finance une part majoritaire d'un choix décidé par un donateur privé. La seconde porte sur l'orientation : le mécénat se dirige vers les institutions et les projets les plus visibles, ce qui peut accentuer les écarts entre grandes institutions et structures modestes.

Ces débats ne remettent pas en cause l'apport du mécénat, mais rappellent qu'il complète une politique publique sans s'y substituer — et que le choix des projets soutenus est un pouvoir en soi.`],
  ],

  "ie2-associations-economie-sociale": [
    ["Une autre règle de décision", `Dans une coopérative, chaque associé dispose d'une voix, quel que soit son apport en capital. Cette règle — une personne, une voix — est la différence fondamentale avec une société classique, où le pouvoir est proportionnel au capital détenu.

Elle emporte des conséquences en chaîne. Le capital n'est plus le critère du pouvoir, ce qui rend la coopérative peu attractive pour un investisseur cherchant le contrôle ; les réserves sont impartageables, c'est-à-dire qu'elles ne peuvent être distribuées même en cas de dissolution ; et la finalité déclarée n'est pas la maximisation du profit mais le service rendu aux membres.

Une SCOP est une société coopérative dont les salariés sont associés majoritaires : ils détiennent au moins la majorité du capital et des droits de vote, et élisent leurs dirigeants. Le modèle a fait la preuve d'une résistance particulière aux crises — les salariés y acceptent des ajustements de rémunération plutôt que des licenciements — et d'un taux de survie à cinq ans supérieur à la moyenne des entreprises.`],
    ["Les autres familles", `Une mutuelle est une organisation à but non lucratif qui couvre des risques pour ses adhérents, lesquels en sont à la fois les assurés et les propriétaires. Née des sociétés de secours mutuel du XIXe siècle, elle précède la sécurité sociale et en a préparé les principes.

Une association loi 1901 est un groupement de personnes à but non lucratif, fondé sur la liberté d'association consacrée cette année-là. Sa souplesse explique son succès : quelques formalités suffisent à la créer, elle peut employer des salariés, exercer une activité économique, et seule la non-distribution des bénéfices la distingue d'une entreprise. La France en compte plus d'un million en activité.

Une fondation est l'affectation irrévocable de biens à une œuvre d'intérêt général. Son point de départ n'est donc pas un groupement de personnes mais un patrimoine dédié, ce qui la distingue nettement de l'association.

L'ensemble de ces structures — coopératives, mutuelles, associations, fondations — forme l'économie sociale et solidaire, qui représente environ un dixième de l'emploi salarié français, avec une présence dominante dans l'action sociale, le sport, la culture et une part importante de la banque et de l'assurance.`],
    ["Employer autrement", `L'insertion par l'activité économique emploie des personnes durablement éloignées de l'emploi dans une structure de production, avec un accompagnement social et professionnel et un encadrement renforcé. Le travail y est un support, non une fin : l'objectif est le retour vers l'emploi ordinaire.

Ces structures — associations intermédiaires, ateliers et chantiers d'insertion, entreprises d'insertion — bénéficient d'aides compensant l'écart de productivité et le coût de l'accompagnement. Les évaluations montrent des taux de sortie vers l'emploi variables selon les publics et les secteurs, et une efficacité supérieure lorsque la structure travaille sur un marché réel plutôt que sur des activités occupationnelles.

Une entreprise à mission est une société commerciale ordinaire qui inscrit dans ses statuts une raison d'être et des objectifs sociaux ou environnementaux, avec un comité de mission chargé du suivi et une vérification par un tiers indépendant. Introduit par la loi Pacte en 2019, ce statut ne relève pas de l'économie sociale — le capital y garde le pouvoir — mais il en emprunte l'idée d'une finalité inscrite dans les statuts.`],
    ["Donner de son temps", `Le bénévolat est une activité librement consentie et non rémunérée, au bénéfice d'autrui ou d'un projet collectif. Il représente en France un volume de travail considérable, équivalent à plusieurs centaines de milliers d'emplois à temps plein, et fait fonctionner l'essentiel du tissu associatif sportif, culturel et social.

Sa frontière avec le salariat est juridiquement précise : l'absence de lien de subordination et de rémunération. Un remboursement de frais réels est admis, une indemnisation déguisée requalifiée.

Le service civique est un engagement volontaire de six à douze mois, indemnisé par l'État, ouvert aux jeunes de seize à vingt-cinq ans sans condition de diplôme, sur des missions d'intérêt général. Il n'est ni un stage ni un emploi : la mission doit être complémentaire de l'action des salariés et non se substituer à un poste — règle centrale, dont le respect fait l'objet d'un contrôle et de critiques récurrentes.

Créé en 2010, il accueille chaque année plusieurs dizaines de milliers de jeunes, et ses évaluations montrent un effet positif sur la confiance en soi et l'orientation, plus incertain sur l'insertion professionnelle immédiate.`],
  ],

  "ie3-partis-politiques": [
    ["Ce que dit la Constitution", `La Constitution française consacre les partis politiques dans son article 4 : ils concourent à l'expression du suffrage, se forment et exercent leur activité librement, et doivent respecter les principes de la souveraineté nationale et de la démocratie.

Cette reconnaissance est plus tardive et plus prudente qu'on ne l'imagine. Les constitutions antérieures ignoraient les partis, et une méfiance ancienne, remontant à la Révolution et à sa condamnation des factions, a longtemps pesé sur leur légitimité. La Ve République les reconnaît tout en étant conçue pour limiter leur emprise sur les institutions.

Un groupe parlementaire est le prolongement d'un parti dans l'assemblée : un regroupement de parlementaires partageant des orientations communes, qui donne accès aux temps de parole, aux postes dans les commissions, aux moyens matériels et à certains droits de procédure. Un député non inscrit, qui n'appartient à aucun groupe, dispose de droits considérablement réduits — ce qui rend l'appartenance à un groupe déterminante pour l'efficacité d'un élu.`],
    ["L'argent public des partis", `Les partis politiques français sont financés en grande partie sur fonds publics, choix opéré au début des années 1990 après une série d'affaires de financement occulte. Le raisonnement est explicite : si les partis ont besoin d'argent, mieux vaut qu'il vienne d'une source transparente que d'entreprises attendant une contrepartie.

Ce financement se décompose en deux fractions. La première dépend des résultats obtenus aux élections législatives, calculée sur le nombre de suffrages, à condition d'avoir présenté des candidats dans un nombre suffisant de circonscriptions. La seconde dépend du nombre de parlementaires qui se rattachent au parti. La première fraction est modulée en fonction du respect de la parité des candidatures — les partis qui présentent trop peu de femmes voient leur dotation réduite, mécanisme qui a fait progresser la parité sans la garantir.

Les dons de personnes morales aux partis et aux campagnes sont interdits depuis 1995. Les dons de particuliers sont plafonnés à sept mille cinq cents euros par an et par personne, tous partis confondus, et ouvrent droit à une réduction d'impôt.`],
    ["Contrôler les campagnes", `Le plafonnement des dépenses de campagne fixe une limite légale au montant qu'un candidat peut engager, variable selon l'élection et le nombre d'habitants. Son objectif est double : éviter que la richesse détermine l'issue du scrutin, et contenir la course à la dépense.

La Commission nationale des comptes de campagne et des financements politiques est l'autorité indépendante qui contrôle ces comptes. Chaque candidat doit déposer un compte certifié par un expert-comptable, retraçant recettes et dépenses. La Commission peut l'approuver, le réformer ou le rejeter.

Les conséquences d'un rejet sont sérieuses : perte du remboursement forfaitaire de l'État, et saisine du juge de l'élection, qui peut prononcer l'inéligibilité et l'annulation du scrutin. Ce dispositif a fait l'objet d'applications retentissantes, y compris à des campagnes présidentielles.`],
    ["Désigner et décider", `Une primaire est une élection interne désignant le candidat d'un parti ou d'un camp. Ouverte, elle associe des sympathisants au-delà des adhérents ; fermée, elle est réservée à ces derniers. Importée du modèle américain, la pratique s'est développée en France dans les années 2010 avec des résultats contrastés : elle légitime le candidat désigné, et elle expose les divisions internes et peut porter au premier plan un candidat mal placé pour l'élection générale.

La démocratie interne d'un parti désigne les procédures permettant aux adhérents de participer aux décisions : élection des dirigeants, votes sur les orientations, désignation des candidats. Elle varie considérablement d'une organisation à l'autre, et son affaiblissement accompagne partout la chute du nombre d'adhérents — les partis français comptent aujourd'hui une fraction des effectifs qu'ils réunissaient dans les années 1970.

Le clivage gauche-droite, enfin, tire son origine d'une circonstance matérielle : lors des débats de l'Assemblée constituante en 1789 sur le veto royal, les partisans se sont regroupés à droite du président de séance et les opposants à gauche. Une disposition physique devenue une catégorie politique universelle, dont la pertinence est régulièrement contestée sans qu'aucune autre ne s'impose durablement.`],
  ],

  "ie3-fiscalite": [
    ["Progressif, proportionnel, régressif", `Un impôt progressif prélève une part croissante du revenu à mesure que celui-ci augmente. Un impôt proportionnel applique un taux identique quel que soit le montant imposé. Un impôt est dit régressif lorsque sa charge, rapportée au revenu, pèse davantage sur les revenus modestes.

L'impôt sur le revenu français est progressif et fonctionne par tranches : chaque fraction du revenu est taxée à son propre taux, et non l'ensemble au taux le plus élevé atteint. C'est le malentendu le plus répandu en matière fiscale — franchir une tranche n'a jamais fait baisser un revenu net, puisque seul l'euro supplémentaire est taxé au taux supérieur.

La TVA est proportionnelle dans son taux et régressive dans ses effets : elle frappe la consommation, or les ménages modestes consomment la quasi-totalité de leur revenu quand les plus aisés en épargnent une part. Rapportée au revenu, la charge est donc plus lourde en bas de l'échelle. Les taux réduits sur l'alimentation, les livres ou les transports atténuent partiellement cet effet, sans le supprimer.`],
    ["L'impôt sur le revenu en pratique", `Le quotient familial divise le revenu imposable par un nombre de parts dépendant de la composition du foyer — deux parts pour un couple, une demi-part par enfant pour les deux premiers, une part au-delà. Le barème progressif s'applique ensuite au revenu par part, ce qui réduit l'impôt d'autant plus que le foyer est nombreux.

Son avantage est plafonné, précisément parce que le mécanisme profite mécaniquement davantage aux hauts revenus, chez qui la baisse du revenu par part fait franchir des tranches à taux élevé. Ce plafonnement est l'objet de débats récurrents entre logique familiale et logique redistributive.

Un peu moins de la moitié des foyers fiscaux français acquitte l'impôt sur le revenu. Ce chiffre alimente des lectures opposées, et son interprétation exige de rappeler que l'impôt sur le revenu n'est pas le principal prélèvement en France : la TVA et les cotisations sociales rapportent bien davantage, et sont acquittées par tous.

Le prélèvement à la source, entré en vigueur en 2019, collecte l'impôt directement sur le revenu au moment de son versement. Il supprime le décalage d'un an entre la perception du revenu et le paiement de l'impôt, ce qui protège en cas de baisse brutale de revenu.`],
    ["Les autres impôts", `La taxe foncière est un impôt local dû par les propriétaires de biens immobiliers, calculée sur une valeur locative cadastrale multipliée par des taux votés par les collectivités. Sa base est ancienne — les valeurs locatives datent pour l'essentiel des années 1970, revalorisées forfaitairement — ce qui produit des écarts considérables avec la réalité du marché et une inégalité entre contribuables. Sa révision est annoncée depuis des décennies et sans cesse repoussée, tant elle produirait de perdants identifiables.

Elle a pris une importance croissante avec la suppression de la taxe d'habitation sur les résidences principales, qui a privé les communes de leur principal impôt lié aux habitants et renforcé leur dépendance aux dotations de l'État.

L'impôt sur la fortune immobilière a remplacé en 2018 l'impôt de solidarité sur la fortune, en restreignant l'assiette au seul patrimoine immobilier au-delà d'un seuil. Les actifs financiers en sont sortis, l'argument avancé étant qu'ils financent l'économie productive. L'évaluation de cette réforme reste discutée, les effets attendus sur l'investissement et ceux constatés sur les recettes n'ayant pas fait l'objet de conclusions consensuelles.`],
    ["Les dérogations", `Une niche fiscale est un dispositif dérogatoire réduisant l'impôt dû : exonération, déduction, réduction ou crédit d'impôt. La France en compte plusieurs centaines, pour un coût budgétaire annuel de plusieurs dizaines de milliards d'euros.

Chacune poursuit un objectif défendable — soutenir l'emploi à domicile, l'investissement locatif, la recherche, le don aux associations, l'outre-mer. Leur accumulation pose trois problèmes bien identifiés. Elles réduisent le rendement de l'impôt, ce qui oblige à des taux plus élevés sur ceux qui n'en bénéficient pas. Elles bénéficient souvent davantage aux contribuables les mieux informés et les mieux conseillés. Et leur efficacité est rarement évaluée sérieusement, alors même qu'une dépense fiscale équivaut économiquement à une dépense budgétaire.

C'est ce dernier point qui distingue une dépense fiscale d'une subvention : la seconde figure dans un budget, se discute chaque année et se supprime ; la première est inscrite dans le code des impôts, se reconduit tacitement et crée des situations acquises difficiles à défaire. Un plafonnement global des avantages a été instauré, avec de nombreuses exceptions qui en limitent la portée.`],
  ],

  "ie3-protection-consommateur": [
    ["Protéger la partie faible", `Le droit de la consommation repose sur un postulat explicite : entre un professionnel et un consommateur, les positions ne sont pas équivalentes. Le premier connaît son produit, rédige le contrat, dispose de conseils juridiques ; le second contracte occasionnellement, sans expertise. Le droit protège donc la partie présumée la plus faible, en dérogeant au principe civiliste selon lequel les parties sont libres et égales.

Un contrat d'adhésion illustre ce déséquilibre : ses clauses ne sont pas négociables, le consommateur ne peut qu'accepter ou renoncer. Abonnements, assurances, conditions générales d'utilisation en relèvent. Le droit y répond par la notion de clause abusive : une clause créant un déséquilibre significatif entre les droits des parties est réputée non écrite, c'est-à-dire supprimée sans que le reste du contrat tombe.

L'obligation d'information précontractuelle impose au professionnel de communiquer avant l'achat les caractéristiques essentielles du bien ou du service, son prix total, les délais et les modalités d'exécution. Son manquement engage la responsabilité du vendeur et peut permettre l'annulation.`],
    ["Les délais", `Deux délais sont constamment confondus alors qu'ils s'appliquent à des moments opposés. Un délai de réflexion précède la signature : le consommateur reçoit une offre et ne peut l'accepter avant l'expiration du délai — c'est le cas du crédit immobilier, où l'offre ne peut être acceptée avant onze jours. Un délai de rétractation suit la conclusion : le contrat est formé, et le consommateur peut revenir dessus sans motif ni pénalité.

Le délai de rétractation est de quatorze jours pour les achats à distance et le démarchage. Il ne s'applique pas aux achats en magasin — un commerçant qui accepte un retour le fait commercialement, non par obligation légale, ce qui est l'une des méprises les plus répandues.

Le démarchage téléphonique est encadré en France par des horaires autorisés, une limite du nombre d'appels et un registre d'opposition sur lequel tout consommateur peut s'inscrire gratuitement. Certains secteurs, comme la rénovation énergétique, y sont purement interdits après des abus massifs.`],
    ["Quand le produit est défectueux", `Trois protections se superposent et se cumulent, ce que les vendeurs signalent rarement.

La garantie légale de conformité oblige le vendeur professionnel à livrer un bien conforme au contrat, pendant deux ans pour un bien neuf, avec présomption que tout défaut apparu dans ce délai existait à la livraison — c'est donc au vendeur de prouver le contraire.

La garantie légale des vices cachés protège contre un défaut non apparent au moment de l'achat, qui rend le bien impropre à son usage ou en diminue fortement l'usage. Elle s'exerce dans les deux ans de la découverte du vice, y compris longtemps après l'achat, et vaut aussi entre particuliers.

La garantie commerciale, enfin, est celle que propose le vendeur ou le fabricant. Elle est facultative, souvent payante, et ne peut jamais réduire les deux précédentes. Un service après-vente qui renvoie le client vers une extension de garantie payante pour un défaut couvert par la garantie légale commet une pratique commerciale trompeuse.`],
    ["Régler un litige, et l'argent", `La médiation de la consommation est un dispositif gratuit de résolution amiable des litiges, obligatoirement proposé par tout professionnel. Le consommateur saisit le médiateur après une réclamation écrite restée sans réponse satisfaisante ; la proposition du médiateur ne lie personne, mais elle règle une majorité des dossiers sans recours au juge.

Le surendettement est l'impossibilité manifeste de faire face à l'ensemble de ses dettes non professionnelles. La procédure, gratuite, se conduit devant une commission départementale présidée par la Banque de France, qui peut rééchelonner, geler les intérêts, effacer partiellement, ou prononcer un rétablissement personnel effaçant les dettes lorsque la situation est irrémédiablement compromise.

Le fichier des incidents de remboursement des crédits aux particuliers recense les défauts de paiement et les mesures de surendettement. Consulté obligatoirement par les banques avant tout crédit, il joue un rôle préventif — et son inscription rend l'accès au crédit très difficile pendant plusieurs années.

Le droit au compte bancaire garantit enfin que toute personne à qui les banques refusent l'ouverture d'un compte puisse faire désigner un établissement par la Banque de France, qui devra fournir gratuitement des services bancaires de base. C'est une réponse directe à l'exclusion bancaire, un compte étant devenu indispensable pour percevoir un salaire ou une prestation.`],
  ],

  "ie3-monde-travail": [
    ["Des formes d'emploi diversifiées", `Les formes d'emploi se sont fortement diversifiées depuis les années 1980. Le contrat à durée indéterminée à temps plein reste largement majoritaire dans l'emploi total — plus des trois quarts des salariés — mais il ne représente qu'une petite minorité des embauches, l'essentiel des recrutements passant par des contrats courts.

Un contrat à durée déterminée est conclu pour une durée limitée et doit répondre à un motif prévu par la loi : remplacement, accroissement temporaire d'activité, emploi saisonnier. Il ne peut avoir pour objet de pourvoir durablement un emploi lié à l'activité normale de l'entreprise, et sa requalification en contrat à durée indéterminée sanctionne ce détournement.

L'intérim repose sur une relation triangulaire : une agence de travail temporaire embauche le salarié et le met à disposition d'une entreprise utilisatrice. Le salarié est lié à l'agence, travaille sous l'autorité de l'entreprise, et perçoit une indemnité de précarité.

Le temps partiel subi est un temps partiel imposé faute d'emploi à temps plein disponible. Il concerne majoritairement des femmes et se concentre dans quelques secteurs — commerce, nettoyage, aide à domicile —, où le morcellement des horaires rend en outre difficile le cumul de plusieurs employeurs.`],
    ["Travailler à distance", `Le télétravail est un travail effectué hors des locaux de l'employeur grâce aux outils numériques. Marginal avant 2020, il s'est généralisé en quelques semaines puis stabilisé sous forme hybride, quelques jours par semaine, pour les métiers qui le permettent — soit environ un tiers des emplois, ce qui constitue en soi un facteur d'inégalité entre professions.

Son cadre juridique repose sur le volontariat, la réversibilité, et le maintien intégral des droits du salarié : mêmes obligations de sécurité pour l'employeur, même durée du travail, prise en charge des frais professionnels.

Le droit à la déconnexion, inscrit dans le code du travail en 2017, garantit le droit de ne pas être joignable en dehors du temps de travail. Sa mise en œuvre passe par une négociation ou une charte, et son effectivité dépend moins des textes que des pratiques managériales — un courriel envoyé le soir par un supérieur crée une attente indépendamment de toute obligation formelle.`],
    ["La santé au travail", `Un risque psychosocial est un risque pour la santé mentale et physique lié à l'organisation du travail : charge excessive, absence d'autonomie, conflits de valeurs, insécurité, manque de soutien. Le point important est qu'il s'agit d'un risque organisationnel et non d'une fragilité individuelle — c'est l'organisation qui est évaluée, non la résistance des personnes.

L'épuisement professionnel est un état d'épuisement émotionnel, physique et mental résultant d'une exposition prolongée à un stress professionnel. Il associe classiquement épuisement, distanciation vis-à-vis du travail et sentiment d'inefficacité. Il n'est pas reconnu comme maladie professionnelle en France dans un tableau dédié, ce qui oblige à une reconnaissance au cas par cas, longue et incertaine.

Le document unique d'évaluation des risques professionnels est obligatoire dans toute entreprise, quelle que soit sa taille, dès le premier salarié. Il recense les risques par unité de travail et sert de base au plan de prévention. Son absence est sanctionnée, et il constitue en pratique le premier document consulté en cas d'accident.`],
    ["Les obligations de l'employeur", `L'obligation de sécurité de l'employeur lui impose de prendre toutes les mesures nécessaires pour assurer la sécurité et protéger la santé physique et mentale des salariés. Longtemps qualifiée d'obligation de résultat par la jurisprudence — l'employeur étant responsable dès qu'un dommage survenait —, elle a été assouplie en obligation de moyens renforcée : l'employeur peut s'exonérer s'il démontre avoir mis en œuvre toutes les mesures de prévention prévues par la loi.

Cette évolution est importante en pratique : elle valorise la prévention effective plutôt que la seule constatation du dommage, et fait du document unique et des actions de formation des éléments de défense autant que de protection.

La médecine du travail, devenue service de prévention et de santé au travail, est chargée d'éviter toute altération de la santé du fait du travail. Son rôle est exclusivement préventif : elle ne soigne pas et ne prescrit pas. Le médecin du travail peut proposer des aménagements de poste que l'employeur est tenu de prendre en compte, et prononcer une inaptitude, décision aux conséquences considérables puisqu'elle oblige au reclassement ou au licenciement.

La démographie médicale de la spécialité, très défavorable, fragilise l'ensemble du dispositif — plusieurs milliers de postes ne sont pas pourvus, et le suivi périodique a été espacé en conséquence.`],
  ],

  "ie3-retraites": [
    ["La répartition", `Le système de retraite français repose sur la répartition : les cotisations prélevées sur les actifs financent immédiatement les pensions des retraités. Il n'y a pas d'épargne accumulée au nom de chacun — les cotisations d'aujourd'hui sont les pensions d'aujourd'hui, et les droits acquis sont une promesse sur les cotisations de demain.

Ce choix, fait en 1945, s'imposait alors pour une raison pratique : l'épargne accumulée avant guerre avait été anéantie par l'inflation et les destructions, et il fallait verser des pensions immédiatement. Il a une propriété remarquable : il protège de l'inflation et des krachs boursiers, à la différence d'un système par capitalisation.

Sa contrepartie est la sensibilité à la démographie. Le rapport démographique — nombre de cotisants rapporté au nombre de retraités — détermine l'équilibre : il était de quatre pour un dans les années 1960, il approche aujourd'hui un virgule sept. Cette évolution tient à l'allongement de l'espérance de vie et à l'arrivée à la retraite des générations nombreuses de l'après-guerre.

Le système combine par ailleurs plusieurs régimes obligatoires superposés : un régime de base et un ou plusieurs régimes complémentaires, eux aussi obligatoires et fonctionnant par points.`],
    ["Comment se calcule une pension", `La pension de base du régime général se calcule à partir de trois éléments : un salaire annuel moyen établi sur les vingt-cinq meilleures années, un taux, et la durée d'assurance.

La durée d'assurance requise est le nombre de trimestres nécessaires pour obtenir le taux plein, qui augmente progressivement selon les générations. Il ne faut pas la confondre avec l'âge légal de départ, qui est l'âge à partir duquel on peut liquider sa retraite : on peut atteindre l'âge légal sans avoir tous ses trimestres, et l'inverse.

La décote réduit la pension lorsque des trimestres manquent, à raison d'un pourcentage par trimestre absent, dans une limite plafonnée. Elle disparaît automatiquement à l'âge d'annulation de la décote, quelle que soit la carrière — mécanisme essentiel pour les carrières incomplètes, souvent celles des femmes et des personnes entrées tard sur le marché du travail.

Le taux de remplacement rapporte la pension au dernier salaire d'activité. Il est plus élevé pour les bas salaires que pour les hauts, effet de la redistribution intégrée au système et du plafonnement des cotisations retenues.`],
    ["Les correctifs", `Le minimum vieillesse, devenu allocation de solidarité aux personnes âgées, garantit un revenu minimal aux personnes âgées modestes, quel qu'ait été leur parcours professionnel. Ce n'est pas une pension mais une prestation de solidarité, financée par l'impôt et récupérable sur la succession au-delà d'un certain montant.

Le compte professionnel de prévention ouvre des droits liés à l'exposition à certains facteurs de pénibilité — travail de nuit, équipes alternantes, bruit, températures extrêmes, travail répétitif. Les points acquis peuvent financer une formation, un temps partiel sans perte de salaire ou un départ anticipé. Plusieurs facteurs initialement prévus, dont le port de charges lourdes et les postures pénibles, ont été retirés du dispositif en 2017 au motif de la complexité de leur mesure — retrait très critiqué, ces facteurs étant parmi les plus répandus.

Le cumul emploi-retraite permet de travailler tout en percevant sa pension, sous conditions selon qu'il est intégral ou plafonné. La retraite progressive permet à l'inverse de réduire son activité tout en percevant une fraction de sa pension, dispositif favorable au maintien en emploi des seniors et longtemps sous-utilisé faute d'information.`],
    ["Les termes du débat", `Trois leviers seulement permettent d'équilibrer un système par répartition, et tout débat sur les retraites revient à choisir entre eux ou à les combiner : augmenter les cotisations, baisser les pensions, ou allonger la durée d'activité.

Chacun a un coût identifiable. Augmenter les cotisations pèse sur le coût du travail ou sur le salaire net. Baisser les pensions dégrade le niveau de vie des retraités, aujourd'hui comparable à celui des actifs en France, ce qui n'est pas le cas partout. Allonger la durée d'activité se heurte à la faiblesse du taux d'emploi des seniors et à l'inégalité de l'espérance de vie en bonne santé selon les métiers.

Cette dernière donnée est au cœur du désaccord : l'écart d'espérance de vie entre les catégories sociales extrêmes atteint plusieurs années, et davantage encore en espérance de vie sans incapacité. Un même âge de départ pour tous n'a donc pas le même sens selon les carrières — argument qui explique l'attachement aux dispositifs de départ anticipé et la difficulté de toute réforme uniforme.`],
  ],

  "ie3-banque-credit": [
    ["Les crédits font les dépôts", `Une banque commerciale crée de la monnaie en accordant un crédit. La formule qui résume ce mécanisme — les crédits font les dépôts — inverse l'intuition courante selon laquelle une banque prêterait l'argent que d'autres y ont déposé.

Ce qui se passe est différent : lorsqu'une banque accorde un prêt, elle inscrit simultanément une créance à son actif et un dépôt au compte de l'emprunteur à son passif. Cette monnaie n'existait pas avant ; elle est créée par un jeu d'écritures. Symétriquement, le remboursement la détruit.

Cette capacité n'est pas illimitée. Elle est bornée par la demande de crédit solvable, par les réserves que la banque doit détenir auprès de la banque centrale, par les fuites vers les autres banques et vers les billets, et surtout par les exigences réglementaires de fonds propres.

Comprendre ce mécanisme est indispensable pour saisir le rôle des banques centrales : elles n'impriment pas la monnaie qui circule, elles influencent les conditions dans lesquelles les banques commerciales en créent.`],
    ["Le prix de l'argent", `Le taux directeur est le taux auquel les banques se refinancent auprès de la banque centrale. En le modifiant, celle-ci agit sur le coût du crédit dans toute l'économie : un taux plus élevé renchérit les prêts, ralentit la demande et freine l'inflation ; un taux bas produit l'inverse.

C'est l'instrument principal de la politique monétaire, complété depuis 2008 par des achats massifs de titres lorsque les taux ne pouvaient plus baisser.

Le taux d'usure, en France, est un taux maximal légal au-delà duquel un prêt est illégal. Fixé trimestriellement par la Banque de France à partir des taux moyens constatés, il protège contre les prêts abusifs. Son mécanisme de calcul, fondé sur le passé, a montré une limite lors de la remontée rapide des taux en 2022 : le plafond, calculé sur un trimestre écoulé, était devenu inférieur aux conditions de marché, ce qui bloquait l'accès au crédit de nombreux emprunteurs solvables — d'où un passage temporaire à une révision mensuelle.

Un crédit immobilier à taux fixe garde le même taux pendant toute sa durée. C'est la norme en France, contrairement à de nombreux pays où le taux variable domine — différence qui a considérablement protégé les emprunteurs français lors des remontées de taux.`],
    ["Emprunter et épargner", `Le taux d'endettement d'un emprunteur est la part de ses revenus consacrée au remboursement de ses crédits. Le Haut Conseil de stabilité financière a fixé une limite de trente-cinq pour cent assurance comprise, avec une durée maximale de vingt-cinq ans et une marge de dérogation. Cette règle, longtemps une pratique bancaire, est devenue contraignante en 2022 pour prévenir le surendettement et le risque systémique.

L'assurance emprunteur couvre le remboursement en cas de décès, d'invalidité ou parfois de perte d'emploi. Elle représente une part significative du coût total d'un crédit immobilier, et plusieurs lois successives ont libéralisé son choix : l'emprunteur peut désormais la résilier et en changer à tout moment, ce qui a introduit une concurrence longtemps absente.

Le livret A est un compte d'épargne réglementé, défiscalisé, à taux fixé par l'État, disponible à tout moment et plafonné. Sa particularité est l'emploi de son encours : une partie est centralisée à la Caisse des dépôts pour financer le logement social et la politique de la ville. C'est donc un produit d'épargne populaire doublé d'un instrument de financement public.`],
    ["Protéger le système", `La garantie des dépôts protège les avoirs jusqu'à cent mille euros par déposant et par établissement. Son objectif n'est pas seulement d'indemniser mais de prévenir la panique : si chacun sait qu'il sera remboursé, personne ne se précipite au guichet, et la ruée bancaire — qui peut faire tomber une banque solvable par simple perte de confiance — n'a pas lieu.

Le ratio de solvabilité rapporte les fonds propres d'une banque à ses engagements pondérés par le risque. Il détermine combien une banque peut prêter au regard de son capital, et il a été fortement relevé après 2008 par les accords de Bâle III, avec des exigences supplémentaires pour les établissements systémiques.

La supervision bancaire européenne confie depuis 2014 le contrôle direct des plus grandes banques de la zone euro à la Banque centrale européenne. Ce transfert répondait à un constat de la crise de la dette : les superviseurs nationaux étaient trop proches de leurs banques et trop enclins à minimiser les difficultés. Il constitue, avec le mécanisme de résolution des défaillances, l'un des deux piliers de l'union bancaire — le troisième, une garantie européenne des dépôts, restant à ce jour inachevé.`],
  ],

  "ie3-entreprises-formes": [
    ["Choisir un statut", `Le choix du statut juridique conditionne trois choses à la fois : la fiscalité, l'étendue de la responsabilité et la protection sociale du dirigeant. C'est la première décision d'un créateur, et l'une des plus structurantes.

La micro-entreprise est un régime simplifié pour entrepreneur individuel, applicable sous des seuils de chiffre d'affaires : comptabilité réduite à un livre de recettes, cotisations et impôt calculés en pourcentage du chiffre d'affaires encaissé, franchise de TVA sous certains seuils. Sa simplicité en a fait le régime de la majorité des créations d'entreprises en France ; sa limite est qu'aucune charge réelle n'est déductible, ce qui le rend inadapté aux activités nécessitant des achats importants.

La SAS, société par actions simplifiée, offre à l'inverse une très grande liberté statutaire : les associés organisent comme ils l'entendent la direction, les majorités, l'entrée et la sortie du capital. Cette souplesse en a fait la forme dominante des créations de sociétés, notamment pour les projets à plusieurs associés ou destinés à lever des fonds.

La responsabilité limitée signifie que les associés ne risquent que leurs apports : en cas de faillite, leur patrimoine personnel est protégé. Cette protection connaît des exceptions importantes — la caution personnelle exigée par les banques et la faute de gestion.`],
    ["Prévoir et financer", `Un business plan présente le projet, son marché, sa stratégie et ses prévisions financières. Son utilité première n'est pas de convaincre un financeur mais d'obliger le porteur à chiffrer ses hypothèses : combien de clients, à quel prix, pour quel coût, à quelle échéance. Un plan dont les hypothèses ne sont pas explicites ne vaut rien, quelle que soit la qualité de sa présentation.

Le besoin en fonds de roulement mesure le financement nécessaire pour couvrir le décalage entre les décaissements et les encaissements : on paie les fournisseurs et les salaires avant d'être payé par les clients. C'est la principale cause de défaillance des entreprises jeunes, et elle est indépendante de la rentabilité — une entreprise rentable peut mourir de trésorerie. Une activité qui encaisse comptant et paie ses fournisseurs à soixante jours, comme la grande distribution, a un besoin négatif : ses clients financent son exploitation.`],
    ["Lire des comptes", `Le compte de résultat retrace les produits et les charges d'un exercice : c'est un film, qui montre comment s'est formé le résultat sur une période. Le bilan est une photographie du patrimoine à une date donnée : à l'actif ce que l'entreprise possède, au passif ce qu'elle doit et les capitaux apportés.

Les deux documents se répondent — le résultat de l'exercice apparaît au passif du bilan, dans les capitaux propres — et aucun ne suffit seul. Une entreprise peut afficher un beau résultat et un bilan fragile, ou l'inverse.

L'amortissement constate comptablement la perte de valeur d'un bien sur sa durée d'usage. Une machine achetée cent mille euros et utilisée dix ans n'est pas une charge de cent mille euros la première année : elle génère une charge de dix mille euros par an. Ce mécanisme rattache le coût à la période où le bien sert effectivement, ce qui est le principe même de la comptabilité d'exercice. C'est aussi une charge sans décaissement, ce qui explique l'écart entre le résultat comptable et la trésorerie réellement disponible.`],
    ["Difficultés et transmission", `Une procédure de sauvegarde s'adresse à une entreprise en difficulté mais qui n'est pas encore en cessation de paiements. Ouverte à la demande du seul dirigeant, elle gèle les dettes antérieures, suspend les poursuites et permet d'élaborer un plan sous la protection du tribunal.

Son intérêt tient précisément au moment : intervenir avant la cessation de paiements laisse des marges de manœuvre que le redressement judiciaire, ouvert plus tard, n'offre plus. Elle se heurte pourtant à une réticence culturelle forte — recourir au tribunal reste perçu comme un aveu d'échec, alors même que la loi a été conçue pour encourager l'anticipation. Les entreprises qui saisissent tôt s'en sortent nettement mieux, statistique constante depuis vingt ans.

La transmission d'entreprise est le transfert de propriété à un repreneur externe, à un salarié ou à un héritier. C'est un enjeu de masse en France : une part importante des dirigeants de PME approche de l'âge de la retraite, et une transmission ratée détruit une entreprise viable. Sa difficulté est autant humaine que financière — valorisation, financement du repreneur, fiscalité de la transmission, mais aussi préparation du départ d'un dirigeant qui incarne souvent l'entreprise à lui seul.`],
  ],

  "ie3-services-publics": [
    ["Ce qui fait un service public", `Un service public est une activité d'intérêt général assurée ou contrôlée par une personne publique. La définition combine deux critères : une finalité — l'intérêt général — et un lien organique avec une autorité publique, qui l'exerce elle-même ou en contrôle l'exercice.

Ce second critère est décisif : un service public peut être géré directement ou délégué à un opérateur privé sans cesser d'être un service public. L'eau, les transports urbains, les cantines scolaires sont très souvent exploités par des entreprises privées, sous le contrôle de la collectivité qui en reste responsable.

Une régie municipale correspond à la gestion directe : la collectivité assure elle-même le service avec ses agents et ses moyens. Une délégation de service public est un contrat par lequel elle en confie la gestion à un tiers, dont la rémunération est substantiellement liée aux résultats de l'exploitation — critère qui la distingue du marché public, où le prestataire est payé un prix convenu quel que soit le succès.

Le choix entre les deux n'est pas idéologique mais pratique : la régie donne la maîtrise et exige des compétences internes ; la délégation apporte un savoir-faire et suppose une capacité à négocier et à contrôler, faute de quoi l'asymétrie d'information joue contre la collectivité.`],
    ["Le cadre européen", `Le droit européen ignore la catégorie française de service public et raisonne en termes de services d'intérêt économique général : des activités économiques soumises à des obligations particulières que le marché seul n'assurerait pas.

Cette approche autorise des dérogations aux règles de concurrence, à condition qu'elles soient nécessaires et proportionnées à la mission. Elle a néanmoins conduit à l'ouverture progressive à la concurrence des grands services en réseau — télécommunications, énergie, rail, poste.

Cette ouverture repose partout sur le même schéma : séparer l'infrastructure, souvent monopole naturel qu'on ne duplique pas, et les services exploités dessus, ouverts à plusieurs opérateurs. Le réseau reste régulé, l'accès est garanti à tous les opérateurs à des conditions non discriminatoires.

Le service universel des télécommunications illustre la contrepartie exigée : l'obligation d'assurer à tous, sur tout le territoire, un service de base à un prix abordable. De même, un opérateur postal désigné est soumis à des obligations de distribution partout, y compris là où ce n'est pas rentable — obligation dont le financement, à mesure que le courrier décline, est devenu l'un des sujets les plus difficiles du secteur.`],
    ["Le territoire", `La continuité territoriale est le principe selon lequel l'accès aux services publics doit être garanti depuis les territoires éloignés — outre-mer, zones de montagne, îles. Elle se traduit par des aides au transport de personnes et de marchandises, et par des obligations de desserte.

Elle est l'une des déclinaisons du principe d'égalité, et elle entre régulièrement en tension avec la rationalisation budgétaire : fermer une ligne, un guichet ou une maternité peu fréquentés est financièrement défendable et rompt une continuité que la population perçoit comme un droit.

Cette tension explique une part importante des conflits territoriaux des dernières décennies. Elle se joue moins sur le niveau global du service public que sur sa répartition, et les indicateurs nationaux — nombre de médecins, de classes, de bureaux — masquent des écarts locaux considérables.`],
    ["Le guichet devenu écran", `La dématérialisation des services publics fait passer les démarches administratives au format numérique. Elle apporte des gains réels : disponibilité permanente, suppression des déplacements, traitement plus rapide, économies de fonctionnement.

Elle produit aussi une exclusion documentée. Une part significative de la population rencontre des difficultés avec les démarches en ligne, pour des raisons d'équipement, de connexion, de compétences, de langue ou de handicap. Or la dématérialisation s'est souvent accompagnée de la fermeture des guichets physiques, supprimant l'alternative au moment même où elle devenait nécessaire. Le Défenseur des droits a consacré plusieurs rapports à cette question, en rappelant qu'un service inaccessible n'est pas un service rendu.

L'accessibilité numérique des sites publics est une obligation légale d'adapter les sites et applications aux personnes en situation de handicap, selon un référentiel technique précis — navigation au clavier, compatibilité avec les lecteurs d'écran, contrastes suffisants, sous-titrage. Le taux de conformité effective reste faible, et les sanctions prévues sont rarement appliquées. C'est l'un des écarts les plus nets entre l'obligation affichée et la réalité constatée.`],
  ],

  "ie3-economie-comportementale": [
    ["L'agent économique réel", `L'économie comportementale intègre les apports de la psychologie à l'analyse économique pour expliquer les décisions réellement observées. Son point de départ est un constat : les individus ne se comportent pas comme l'agent parfaitement rationnel des manuels, capable de calculer sans erreur, de traiter toute l'information disponible et de maintenir des préférences cohérentes.

Ces écarts ne sont pas des erreurs aléatoires qui se compenseraient : ce sont des biais systématiques, prévisibles et reproductibles. C'est ce caractère systématique qui les rend scientifiquement intéressants et opérationnellement utiles.

Le champ s'est constitué à partir des travaux de Daniel Kahneman et Amos Tversky dans les années 1970, et a été consacré par plusieurs prix Nobel d'économie — attribués à des chercheurs dont l'un était psychologue de formation et n'avait jamais suivi de cours d'économie.`],
    ["Les biais liés à la possession", `L'aversion à la perte désigne le fait qu'une perte est ressentie environ deux fois plus intensément qu'un gain de même montant. Perdre cinquante euros affecte davantage que gagner cinquante euros ne réjouit.

Cette asymétrie a des conséquences en cascade. Elle explique l'effet de dotation : on surévalue ce que l'on possède déjà, parce que s'en séparer est vécu comme une perte. Des expériences classiques montrent que des personnes à qui l'on offre un objet réclament pour le vendre bien plus qu'elles n'auraient accepté de payer pour l'acquérir quelques minutes plus tôt.

Elle explique aussi le biais du statu quo, préférence pour l'état actuel des choses : tout changement comporte des pertes identifiables et des gains incertains, et l'asymétrie fait pencher la balance vers l'inaction. C'est l'un des obstacles les mieux documentés aux réformes, indépendamment de leur contenu.

L'escalade d'engagement relève d'une logique voisine : on poursuit une action désastreuse en raison des investissements déjà consentis, alors que ceux-ci sont perdus quoi qu'il arrive. Économiquement, un coût irrécupérable ne devrait jamais entrer dans une décision ; psychologiquement, il pèse énormément.`],
    ["Les biais de jugement et de temps", `Le biais de disponibilité conduit à surestimer la probabilité des événements dont des exemples viennent facilement à l'esprit. Une catastrophe médiatisée paraît plus probable qu'un risque statistiquement bien supérieur mais discret — on craint davantage l'accident d'avion que l'accident domestique, alors que le second est infiniment plus fréquent.

La comptabilité mentale décrit le fait de traiter l'argent différemment selon son origine ou sa destination, alors qu'un euro est un euro. On dépense plus facilement une prime qu'un salaire, on maintient un livret d'épargne tout en payant les intérêts d'un découvert, on répartit son budget en enveloppes dont on ne veut pas déplacer le contenu.

La procrastination s'analyse, du point de vue économique, comme un décalage entre les préférences présentes et futures : on souhaite sincèrement épargner, faire du sport ou arrêter de fumer demain, et l'on choisit systématiquement l'inverse aujourd'hui. Ce n'est pas une préférence stable pour le présent — auquel cas il n'y aurait pas de regret — mais une incohérence temporelle, qui explique la demande d'engagement contraignant : on cherche à se lier soi-même à l'avance.`],
    ["Les politiques publiques", `Un nudge est un aménagement du contexte de choix qui oriente les décisions sans contraindre ni modifier les incitations économiques. La définition exige que toutes les options restent disponibles et que le coût de s'écarter du chemin suggéré soit négligeable.

Le levier le plus puissant est l'option par défaut. Dans les pays où le don d'organes suppose une inscription volontaire, les taux de consentement plafonnent ; dans ceux où il est présumé sauf refus exprimé, ils dépassent quatre-vingt-dix pour cent — pour des populations aux valeurs comparables. Le même mécanisme fait varier massivement les taux d'adhésion à un plan d'épargne retraite selon que l'inscription est automatique ou volontaire.

La présentation de l'information compte tout autant : rendre une démarche plus simple, envoyer un rappel au bon moment, indiquer ce que font les autres, formuler un choix en termes de gain ou de perte modifient les comportements pour un coût quasi nul.

Ces outils suscitent une critique sérieuse et légitime : ils exploitent des biais plutôt que de les corriger, et supposent que quelqu'un décide de la direction dans laquelle il est bon d'orienter. Leur défense est qu'aucune présentation n'est neutre — il faut bien une option par défaut — et que le choix reste ouvert. Le débat porte donc moins sur la technique que sur qui la manie et à quelles fins.`],
  ],

  "ie3-collectivites-finances": [
    ["Qui investit en France", `Les collectivités locales réalisent environ deux tiers de l'investissement public civil en France : écoles, collèges, lycées, voirie, réseaux d'eau et d'assainissement, équipements sportifs et culturels, transports urbains. L'État conserve les grandes infrastructures nationales et la défense.

Cette part explique le rôle contracyclique des collectivités : quand leurs finances se contractent, l'investissement public s'effondre, avec des effets immédiats sur le bâtiment et les travaux publics. Le cycle électoral municipal produit d'ailleurs une oscillation régulière et bien documentée, l'investissement culminant en fin de mandat et chutant l'année suivante.

Leur budget obéit à une règle stricte : la règle d'or budgétaire impose de voter un budget en équilibre réel, section de fonctionnement et section d'investissement séparément, et interdit d'emprunter pour financer des dépenses de fonctionnement. Une collectivité ne peut donc s'endetter que pour investir — contrainte que l'État ne s'applique pas à lui-même.`],
    ["Les ressources", `Les principales ressources fiscales des communes sont aujourd'hui la taxe foncière et diverses taxes locales. Leur structure a été profondément modifiée par deux réformes successives : la suppression de la taxe professionnelle en 2010, remplacée par des impositions dont les communes maîtrisent moins les taux, puis la suppression de la taxe d'habitation sur les résidences principales, compensée par des transferts.

Ces compensations posent une question de principe. L'autonomie financière des collectivités est un principe de valeur constitutionnelle depuis 2003 : leurs ressources propres doivent représenter une part déterminante de leurs recettes. Mais une part croissante de ces « ressources propres » consiste en fractions d'impôts nationaux dont elles ne votent pas le taux — ce qui préserve le ratio et vide le principe d'une partie de sa substance, l'autonomie fiscale supposant de pouvoir décider du niveau du prélèvement.

Les dotations de l'État ont par ailleurs été fortement réduites dans les années 2010, dans le cadre du redressement des comptes publics : plusieurs milliards d'euros de baisse cumulée, absorbés par les collectivités surtout au détriment de l'investissement.`],
    ["Gérer et rééquilibrer", `La capacité d'autofinancement est l'excédent dégagé par la section de fonctionnement, disponible pour rembourser la dette et financer l'investissement. C'est l'indicateur central de la santé financière d'une collectivité : une capacité d'autofinancement nulle signifie qu'aucun investissement n'est possible sans emprunt supplémentaire, et qu'un ajustement s'impose.

La péréquation horizontale transfère des ressources entre collectivités riches et pauvres, par opposition à la péréquation verticale opérée par l'État à travers ses dotations. Elle est indispensable parce que les bases fiscales sont extrêmement inégales : une commune accueillant une zone d'activités et une commune résidentielle voisine peuvent avoir des ressources par habitant dans un rapport de plusieurs unités, pour des charges comparables.

Un emprunt toxique est un prêt structuré dont le taux dépend d'un indice complexe — écart entre devises, entre taux longs et courts — et qui peut s'envoler brutalement. Des centaines de collectivités françaises en ont souscrit dans les années 2000, séduites par un taux d'appel très bas, avant de voir leurs charges d'intérêt exploser après 2008. Le contentieux a duré des années et s'est soldé par un fonds de soutien public, c'est-à-dire par une prise en charge collective d'engagements mal évalués de part et d'autre.`],
    ["Les contrôles", `Le contrôle de légalité est exercé par le préfet sur les actes des collectivités. Depuis les lois de décentralisation de 1982, il s'exerce a posteriori : les actes sont exécutoires dès leur transmission, et le préfet qui les estime illégaux ne peut les annuler lui-même mais doit les déférer au tribunal administratif. Le changement est majeur — auparavant, la tutelle administrative approuvait avant exécution.

Ce contrôle porte sur la légalité, jamais sur l'opportunité : un préfet ne peut contester un choix politique, seulement sa conformité au droit.

La chambre régionale des comptes est une juridiction financière qui contrôle les comptes et la gestion des collectivités et de leurs satellites. Elle juge les comptes des comptables publics, et surtout examine la gestion, c'est-à-dire l'économie des moyens, l'efficacité et la régularité des choix. Ses rapports d'observations définitives sont publics et présentés devant l'assemblée délibérante, ce qui en fait un instrument de débat local autant qu'un contrôle. Elle ne peut ni sanctionner un élu ni annuler une décision — sa force est celle de la publicité.`],
  ],

  "ie3-europe-politiques": [
    ["Comment l'Union agit", `L'Union européenne agit surtout par la réglementation et par un budget, non par l'impôt. Elle ne lève pas d'impôt propre : ses ressources proviennent des contributions des États assises sur leur revenu national, de droits de douane et d'une fraction de TVA. Son budget représente environ un pour cent du revenu national brut de l'Union — très peu au regard des budgets nationaux.

Sa puissance est donc ailleurs : dans la norme. Un règlement s'applique directement dans tous les États ; une directive fixe un résultat que chacun transpose. Cette capacité normative, appliquée à un marché de plus de quatre cents millions de consommateurs, produit un effet d'entraînement mondial — les entreprises préférant souvent appliquer partout la norme européenne plutôt que de gérer plusieurs standards.

La politique agricole commune représente encore environ un tiers de ce budget, part en baisse continue mais qui reste la première. Elle est le domaine où l'Union dispose des moyens financiers les plus substantiels, ce qui explique son importance historique et politique.`],
    ["La concurrence, compétence forte", `La politique européenne de concurrence est l'une des rares compétences où la Commission dispose d'un pouvoir de décision direct et immédiat. Elle contrôle trois choses : les ententes entre concurrents, les abus de position dominante, et les concentrations d'entreprises.

Elle contrôle en outre les aides d'État. Une aide d'État est un avantage accordé par une autorité publique, sélectif — bénéficiant à certaines entreprises et pas à d'autres — et susceptible de fausser la concurrence. Elle est en principe interdite, avec de nombreuses dérogations : recherche, régions en difficulté, environnement, services d'intérêt économique général.

Ce contrôle est l'un des plus contestés politiquement. Il empêche les États de soutenir librement leurs entreprises, ce qui est précisément son objet — éviter une surenchère de subventions où gagneraient les États les plus riches. Il a été assoupli en situation de crise, en 2020 puis face aux plans de soutien américains, ce qui a rouvert le débat sur l'articulation entre concurrence et politique industrielle.

La politique commerciale commune est, elle, une compétence exclusive : seule l'Union négocie les accords commerciaux, les États membres n'ayant pas le droit de conclure des accords bilatéraux. C'est ce qui donne à l'Europe son poids dans les négociations mondiales.`],
    ["Former, chercher, verdir", `Le programme Erasmus finance la mobilité étudiante et de formation en Europe. Lancé en 1987, il a concerné plusieurs millions de personnes et constitue probablement la politique européenne la plus populaire et la plus visible. Son effet dépasse la formation : il crée une expérience concrète de l'Europe, et les études montrent un effet mesurable sur les carrières et sur les rencontres.

Le programme-cadre de recherche est le principal instrument de financement de la recherche européenne, doté de plusieurs dizaines de milliards d'euros par cycle. Il finance des projets collaboratifs entre équipes de plusieurs pays, et à travers le Conseil européen de la recherche des projets individuels sélectionnés sur la seule excellence — dispositif qui a considérablement élevé le niveau d'exigence de la recherche européenne.

Le pacte vert européen est une stratégie visant la neutralité climatique de l'Union en 2050, avec un objectif intermédiaire de réduction de cinquante-cinq pour cent des émissions en 2030. Il se décline en dizaines de textes touchant l'énergie, les transports, le bâtiment, l'agriculture et la finance.

Le mécanisme d'ajustement carbone aux frontières en constitue le complément logique : il taxe le contenu carbone de certaines importations — acier, ciment, aluminium, engrais, électricité — pour éviter que la production ne se délocalise vers des pays moins exigeants. C'est la première tentative d'articuler politique climatique et commerce international à cette échelle, et elle est contestée par plusieurs partenaires commerciaux.`],
    ["Coordonner et emprunter", `Le semestre européen est un cycle annuel de coordination des politiques économiques : les États soumettent leurs programmes budgétaires et de réformes, la Commission les évalue et formule des recommandations, le Conseil les adopte. Ces recommandations ne sont pas contraignantes au sens strict, mais elles s'articulent avec les règles budgétaires communes, dont le non-respect peut théoriquement entraîner des sanctions — jamais appliquées à ce jour.

Le plan de relance adopté en 2020 constitue une rupture. Pour financer la reprise après la pandémie, l'Union a emprunté en commun sur les marchés, à hauteur de plusieurs centaines de milliards d'euros, et redistribué ces fonds aux États sous forme de subventions et de prêts, avec un remboursement assuré par le budget européen.

Ce que cela change tient en peu de mots : une dette commune garantie par tous, pour financer des dépenses nationales. C'est ce que plusieurs États refusaient depuis des décennies, et ce qu'un précédent unique ne suffit pas à rendre permanent. La question de savoir si ce mécanisme sera reconduit, et donc si l'Union se dote durablement d'une capacité budgétaire propre, est l'un des débats structurants des prochaines années.`],
  ],

  "ie3-organisation-internationale-economie": [
    ["Deux institutions nées ensemble", `Le Fonds monétaire international et la Banque mondiale ont été créés en 1944 à Bretton Woods, et leurs missions sont distinctes malgré une confusion fréquente.

Le FMI a pour mission d'assurer la stabilité du système monétaire international et de prêter aux États confrontés à une crise de balance des paiements — c'est-à-dire incapables d'honorer leurs paiements extérieurs. Il intervient dans l'urgence, sur des durées courtes, avec des prêts destinés à rétablir un équilibre macroéconomique.

La Banque mondiale finance des projets de développement à long terme dans les pays à faible et moyen revenu : infrastructures, santé, éducation, agriculture. Elle prête sur des décennies, à des conditions concessionnelles pour les plus pauvres.

La formule est commode : le FMI prête aux États en difficulté, la Banque mondiale finance le développement. L'un traite un déséquilibre, l'autre construit.

Les droits de vote y sont répartis selon des quotes-parts liées au poids économique des États, ce qui donne un pouvoir décisif aux pays avancés, avec une minorité de blocage américaine sur les décisions importantes. Cette gouvernance est contestée depuis des décennies par les économies émergentes, dont le poids réel a beaucoup augmenté sans que les quotes-parts suivent au même rythme.`],
    ["Les conditions du prêt", `Un plan d'ajustement structurel est l'ensemble des réformes exigées par le FMI en contrepartie d'un prêt : réduction des déficits publics, libéralisation des prix et du commerce, privatisations, dévaluation.

Ces programmes, appliqués massivement en Amérique latine et en Afrique dans les années 1980 et 1990, ont fait l'objet de critiques durables et en partie reconnues par l'institution elle-même. Leur reproche principal est d'avoir imposé des coupes dans les dépenses de santé et d'éducation, avec des conséquences sociales lourdes et des effets récessifs qui compromettaient le redressement même qu'ils visaient. Le FMI a depuis infléchi sa doctrine, en intégrant des planchers de dépenses sociales et en reconnaissant que les inégalités nuisent à la croissance — évolution notable pour une institution longtemps réputée dogmatique.

Le Club de Paris est d'une autre nature : un groupe informel de créanciers publics — sans traité ni personnalité juridique, avec un secrétariat au Trésor français — qui renégocie collectivement les dettes souveraines. Son efficacité tenait à ce qu'il réunissait l'essentiel des créanciers publics ; elle s'est réduite avec la montée de créanciers extérieurs au Club et de détenteurs privés, qui rend la coordination bien plus difficile.

Le droit de tirage spécial est un actif de réserve international créé par le FMI, dont la valeur repose sur un panier de monnaies. Il n'est pas une monnaie utilisable dans les échanges mais un droit d'obtenir des devises auprès d'autres membres. Une allocation exceptionnelle en 2021 a fourni des liquidités à tous les pays face à la pandémie — mécanisme rare et efficace, dont l'inconvénient est d'être réparti au prorata des quotes-parts, donc majoritairement vers les pays qui en avaient le moins besoin.`],
    ["Les enceintes de coordination", `L'OCDE réunit une quarantaine d'économies développées et émergentes autour d'une activité d'analyse, de comparaison et de coordination. Elle ne dispose d'aucun pouvoir contraignant, et son influence tient à la qualité de ses données et à l'effet de comparaison entre pays — l'enquête PISA sur les acquis des élèves en est l'exemple le plus connu, et sa capacité à déclencher des débats nationaux illustre le pouvoir d'un simple classement.

Elle a par ailleurs porté les négociations sur l'impôt minimum mondial et sur l'échange automatique d'informations fiscales, deux avancées majeures obtenues sans aucun pouvoir de contrainte.

Le G7 est un forum informel réunissant sept grandes économies avancées, sans secrétariat permanent ni pouvoir de décision. Le G20, créé au niveau des chefs d'État en 2008 face à la crise financière, réunit vingt économies majeures représentant l'essentiel du PIB mondial, avancées et émergentes. Son élargissement traduisait un constat : les décisions économiques mondiales ne pouvaient plus se prendre entre pays occidentaux.

Ces forums produisent des communiqués et non des normes. Leur utilité est celle de la coordination : en 2009, l'engagement simultané de relance budgétaire a probablement évité une dépression, ce qu'aucun État n'aurait fait seul de cette ampleur.

L'aide liée, enfin, est une aide conditionnée à l'achat de biens ou de services du pays donateur. Elle réduit mécaniquement la valeur de l'aide pour le bénéficiaire, qui ne peut acheter au meilleur prix, et son déliement fait l'objet de recommandations internationales inégalement suivies.`],
  ],

  "ie3-droit-numerique": [
    ["Un droit venu d'Europe", `Le droit du numérique français repose largement sur des règlements européens directement applicables, sans transposition. Ce choix de l'instrument est significatif : un règlement s'impose de la même façon dans tous les États, là où une directive laisse des marges nationales qui fragmentent le marché — inadapté à des services qui ignorent les frontières.

Le RGPD, entré en application en 2018, en est le pilier. Il définit une donnée à caractère personnel comme toute information se rapportant à une personne identifiée ou identifiable, directement ou indirectement. La définition est volontairement large : une adresse IP, un identifiant publicitaire, une donnée de géolocalisation en relèvent, même sans nom associé.

Une donnée sensible bénéficie d'une protection renforcée : santé, opinions politiques, convictions religieuses, origine, appartenance syndicale, orientation sexuelle, données biométriques et génétiques. Leur traitement est en principe interdit, sauf exceptions strictement encadrées — consentement explicite, motif de santé publique, obligation légale.`],
    ["Consentir et récupérer", `Le consentement au sens du RGPD est une manifestation de volonté libre, spécifique, éclairée et univoque. Chacun de ces quatre adjectifs a une portée précise et écarte des pratiques courantes.

Libre exclut un consentement obtenu sous la menace d'une perte d'accès au service, si celui-ci n'exige pas le traitement. Spécifique interdit un consentement global couvrant des finalités distinctes. Éclairé suppose une information compréhensible. Univoque exige un acte positif — une case pré-cochée ou l'inaction ne valent pas consentement.

Le consentement n'est d'ailleurs que l'une des six bases légales possibles : contrat, obligation légale, intérêt vital, mission d'intérêt public et intérêt légitime en sont les autres. Une confusion répandue veut que tout traitement exige un consentement, alors qu'un employeur traite les données de ses salariés sur une autre base.

Le droit à la portabilité permet de récupérer ses données dans un format structuré et lisible par machine, et de les transmettre à un autre service. Son objectif est autant concurrentiel que protecteur : réduire le coût de sortie d'une plateforme.`],
    ["Qui répond des contenus", `La responsabilité d'un hébergeur est limitée : il n'est pas tenu de surveiller a priori les contenus stockés, et n'engage sa responsabilité que s'il n'a pas agi promptement après avoir eu connaissance d'un contenu manifestement illicite. Ce régime, posé en 2000, distingue l'hébergeur passif de l'éditeur, responsable de ce qu'il publie.

Sa justification est pratique : une obligation de contrôle préalable généralisée conduirait à une censure massive par précaution, l'hébergeur ayant intérêt à retirer au moindre doute.

Le règlement sur les services numériques, applicable depuis 2023, conserve ce principe en l'assortissant d'obligations nouvelles : mécanismes de signalement, motivation des retraits, voies de recours pour les utilisateurs, transparence sur les algorithmes de recommandation, et pour les très grandes plateformes une évaluation annuelle des risques systémiques auditée par des tiers.

Le règlement sur les marchés numériques poursuit un objectif distinct : il désigne des contrôleurs d'accès — plateformes incontournables pour atteindre les utilisateurs — et leur impose des obligations et interdictions précises, définies à l'avance plutôt que sanctionnées après coup.`],
    ["Propriété intellectuelle et intelligence artificielle", `La contrefaçon numérique est la reproduction ou la diffusion non autorisée d'une œuvre protégée. Le droit d'auteur s'applique dès la création, sans dépôt ni formalité, et protège la forme et non l'idée.

Le droit d'auteur appliqué aux logiciels protège le code source comme œuvre de l'esprit, avec un régime particulier : les droits appartiennent automatiquement à l'employeur pour un logiciel créé par un salarié dans ses fonctions, dérogation notable au principe général. Ce choix de protéger le logiciel par le droit d'auteur plutôt que par le brevet est une caractéristique européenne, les brevets logiciels y étant en principe exclus.

Le règlement européen sur l'intelligence artificielle, adopté en 2024, organise les obligations selon le niveau de risque. Certaines pratiques sont interdites — notation sociale généralisée, manipulation exploitant des vulnérabilités, identification biométrique en temps réel dans l'espace public à des fins répressives hors exceptions strictes. Les systèmes à haut risque — recrutement, crédit, éducation, justice, infrastructures — sont soumis à des exigences de données, de documentation, de supervision humaine et de robustesse. Les autres relèvent d'obligations légères de transparence.

Cette approche graduée est l'apport principal du texte : ce n'est pas la technologie qui est réglementée, mais l'usage qui en est fait et les conséquences pour les personnes.`],
  ],

  "ie3-inegalites-france": [
    ["Revenu et patrimoine", `Les inégalités de patrimoine sont bien plus fortes que les inégalités de revenu, et cet écart est la donnée la plus importante du sujet. Le rapport entre les déciles extrêmes se compte en unités pour les revenus et en dizaines pour le patrimoine ; les dix pour cent les mieux dotés détiennent près de la moitié du patrimoine total, tandis que la moitié la moins dotée en possède une part très faible.

Trois raisons expliquent cette différence. Le patrimoine s'accumule sur toute une vie et se transmet, quand le revenu est un flux annuel. Il produit lui-même des revenus, ce qui entretient l'écart. Et il est bien moins redistribué : la France taxe fortement les revenus du travail et modestement les transmissions au regard des masses concernées.

Le niveau de vie médian est le niveau qui sépare la population en deux moitiés égales. Il est préféré à la moyenne, que quelques très hauts revenus suffisent à tirer vers le haut sans que la situation du plus grand nombre ait changé.

Le taux de pauvreté mesure en France la part de la population dont le niveau de vie est inférieur à soixante pour cent du niveau de vie médian. C'est donc une mesure relative : elle décrit un écart à la norme sociale du pays, non un dénuement absolu, et elle peut baisser lors d'une récession qui appauvrit tout le monde.`],
    ["Qui est pauvre", `Les familles monoparentales et les jeunes sont les groupes les plus touchés par la pauvreté en France. Le premier cas s'explique par la combinaison d'un seul revenu, de charges de logement complètes et de contraintes de garde qui limitent l'accès à l'emploi à temps plein — et il concerne très majoritairement des femmes.

Le second tient à l'entrée tardive dans l'emploi stable, à la faiblesse des droits ouverts avant vingt-cinq ans et à l'exclusion des moins de vingt-cinq ans du revenu de solidarité active, singularité française régulièrement discutée.

À l'inverse, les personnes âgées connaissent en France un taux de pauvreté inférieur à la moyenne, résultat de la montée en charge du système de retraite — situation qui distingue nettement la France de plusieurs voisins et qui pourrait s'inverser avec les carrières hachées des générations suivantes.

La redistribution désigne l'effet combiné des prélèvements et des prestations sur les inégalités. Son ampleur en France est parmi les plus fortes de l'OCDE : les inégalités de revenu avant redistribution y sont comparables à celles de nombreux pays, et nettement réduites après. Ce sont les prestations, davantage que la progressivité de l'impôt, qui expliquent l'essentiel de cet effet.`],
    ["Hériter d'une position", `La mobilité sociale est la capacité à occuper une position différente de celle de ses parents. Elle se mesure par des tables comparant l'origine et la destination sociale, et distingue la mobilité structurelle — due à la transformation de la structure des emplois — de la mobilité nette, seule véritablement révélatrice de fluidité.

En France, la mobilité existe mais reste fortement contrainte aux extrémités : les enfants de cadres deviennent très majoritairement cadres, les enfants d'ouvriers accèdent bien plus rarement aux positions supérieures. Le système scolaire, censé corriger ces écarts, les reproduit largement.

Pierre Bourdieu en a proposé l'analyse la plus influente. Selon lui, l'école reproduit les positions sociales tout en les légitimant : elle valorise des dispositions culturelles — langage, rapport au savoir, familiarité avec la culture savante — que les familles favorisées transmettent hors de l'école, et qu'elle traite comme des dons individuels. L'inégalité sociale se convertit ainsi en inégalité de mérite apparent, ce qui la rend acceptable.

Cette analyse a été discutée et nuancée — elle sous-estime les trajectoires ascendantes et l'effet propre de l'école — mais son constat central résiste : l'origine sociale reste en France l'un des prédicteurs les plus forts de la réussite scolaire, avec un poids supérieur à la moyenne des pays comparables.`],
    ["Femmes et hommes", `L'écart salarial entre femmes et hommes en France est d'environ quinze pour cent à temps de travail comparable, et de près d'un quart en tenant compte du temps partiel. Il se décompose en plusieurs effets : différences de secteurs et de métiers, de temps de travail, d'ancienneté et d'interruptions de carrière — et une part résiduelle, de l'ordre de quelques pour cent, qu'aucune caractéristique observable n'explique et qui constitue la discrimination pure.

Le plafond de verre désigne l'obstacle invisible qui limite l'accès des femmes aux postes de direction : elles sont majoritaires parmi les diplômés du supérieur et minoritaires dans les comités exécutifs. L'image du plafond est complétée par celle des parois de verre — la concentration dans certaines fonctions, ressources humaines ou communication, qui mènent moins souvent à la direction générale.

L'index de l'égalité professionnelle, obligatoire depuis 2019 pour les entreprises d'au moins cinquante salariés, note sur cent points cinq indicateurs : écart de rémunération, écart de répartition des augmentations et des promotions, augmentation au retour de congé maternité, et parité parmi les dix plus hautes rémunérations. Les entreprises sous un seuil de soixante-quinze points doivent corriger sous trois ans sous peine de pénalité.

Son mérite est de rendre les écarts publics et comparables ; sa limite est que la moyenne des notes est élevée alors que les écarts persistent — signe que les indicateurs choisis mesurent mal ce qui résiste.`],
  ],

  "ie3-associations-democratie": [
    ["Un tissu considérable", `La France compte plus d'un million et demi d'associations actives et plus de vingt millions de bénévoles, chiffres qui font du secteur associatif l'une des réalités sociales les plus massives et les moins visibles du pays.

Leur répartition est très inégale : le sport, la culture et les loisirs rassemblent le plus grand nombre de structures, l'action sociale et la santé l'essentiel des emplois salariés et des budgets. La grande majorité des associations n'emploie personne et fonctionne entièrement au bénévolat.

Une association reconnue d'utilité publique bénéficie d'un statut accordé par décret en Conseil d'État, après plusieurs années d'existence et un examen approfondi de son objet, de sa gouvernance et de ses finances. Ce statut, obtenu par quelques milliers d'associations seulement, permet notamment de recevoir des legs et des donations — capacité juridique refusée aux associations ordinaires.

Le financement du secteur repose sur un équilibre fragile entre cotisations, dons, produits d'activité et subventions publiques. Le glissement de la subvention vers la commande publique, où l'association répond à un appel d'offres pour exécuter une prestation définie par l'administration, a modifié la relation en profondeur : d'un soutien à un projet associatif, on est passé à l'achat d'un service, avec une perte d'initiative que le secteur signale depuis des années.`],
    ["Faire participer", `Un budget participatif confie aux habitants la décision d'affectation d'une part du budget d'investissement local. Le procédé, né à Porto Alegre au Brésil à la fin des années 1980, s'est diffusé dans des centaines de villes françaises. Les montants concernés restent modestes — souvent quelques pour cent de l'investissement — et son intérêt tient moins à la somme qu'à l'apprentissage de la contrainte budgétaire par les participants.

Une convention citoyenne réunit des citoyens tirés au sort, formés par des experts pendant plusieurs sessions, pour formuler des propositions sur un sujet complexe. La Convention citoyenne pour le climat, en 2019 et 2020, a produit cent quarante-neuf propositions dont le sort a nourri une controverse durable sur l'engagement de reprise « sans filtre » et sur ce qui a effectivement été mis en œuvre.

Le tirage au sort en démocratie n'est pas une nouveauté : c'était le mode de désignation ordinaire des magistratures athéniennes, l'élection étant alors jugée aristocratique parce qu'elle sélectionne les notables. Son retour contemporain se limite à des assemblées consultatives, avec un argument précis : il produit une assemblée statistiquement représentative de la population, ce que l'élection ne fait pas.`],
    ["Les procédures d'initiative", `L'initiative citoyenne européenne permet à un million de citoyens issus d'au moins sept États membres de demander à la Commission de proposer un acte juridique. La Commission n'est pas tenue de le faire, mais doit répondre publiquement et motiver sa position. Quelques initiatives ont abouti à des textes, la plupart n'ont pas dépassé le seuil de signatures.

Le référendum d'initiative partagée, introduit en France en 2008, exige le soutien d'un cinquième des parlementaires puis d'un dixième des électeurs inscrits — soit environ quatre millions et demi de signatures en neuf mois. Ce seuil, l'un des plus élevés au monde, n'a jamais été atteint. Le dispositif existe donc sans avoir jamais fonctionné, ce qui alimente la demande récurrente d'un référendum d'initiative citoyenne aux conditions plus accessibles.

Le débat public est une procédure organisée pour les grands projets d'aménagement, sous l'égide de la Commission nationale du débat public, autorité indépendante. Il intervient en amont, quand le projet peut encore être modifié ou abandonné, et il ne décide de rien : il éclaire. Son bilan montre des projets réellement infléchis, et une frustration constante lorsque la décision finale ignore les enseignements du débat.`],
    ["Alerter", `Un lanceur d'alerte est une personne physique qui signale, de bonne foi et sans contrepartie financière, une menace ou une atteinte à l'intérêt général — crime, délit, violation d'un engagement international, menace grave.

Son statut a été construit progressivement, sous l'effet d'affaires où des salariés ayant révélé des faits graves avaient été licenciés et poursuivis. La loi Sapin II de 2016 puis sa réforme de 2022, transposant une directive européenne, ont abouti à une protection parmi les plus complètes d'Europe : interdiction des représailles, nullité des sanctions, irresponsabilité pénale pour la divulgation, prise en charge des frais de justice, et suppression de l'obligation de signaler d'abord en interne.

La difficulté demeure pratique plutôt que juridique. Le lanceur d'alerte reste exposé à une mise à l'écart informelle, à des procédures longues et à un coût personnel considérable, que la protection légale n'annule pas. Les affaires connues montrent des parcours de plusieurs années, souvent au prix de la carrière — ce qui explique que le statut protège moins qu'il ne dissuade encore de se taire.`],
  ],

  "ie3-crises-contemporaines": [
    ["2008 : la crise financière", `Un crédit subprime est un crédit immobilier accordé à des emprunteurs à faible solvabilité, à taux souvent variable et sur l'hypothèse d'une hausse continue des prix de l'immobilier — hypothèse qui permettait de refinancer le prêt en cas de difficulté.

La titrisation a transformé ces créances en titres négociables : les prêts étaient regroupés, découpés en tranches de risque et vendus à des investisseurs du monde entier. Le mécanisme est légitime en soi — il disperse le risque — mais il a produit deux effets pervers. Il a rompu le lien entre celui qui accorde le crédit et celui qui en supporte le risque, supprimant l'incitation à vérifier la solvabilité. Et il a rendu le risque illisible, les titres étant si complexes que ni les acheteurs ni les agences de notation ne savaient réellement ce qu'ils contenaient.

En septembre 2008, la faillite de Lehman Brothers a provoqué une panique financière mondiale. Le marché interbancaire s'est bloqué, chaque banque soupçonnant les autres de porter des pertes inconnues. Le choc s'est transmis à l'économie réelle par le crédit, et la récession qui a suivi a été la plus grave depuis les années 1930.

La réponse a associé sauvetage bancaire, relance budgétaire coordonnée et politique monétaire non conventionnelle — et une refonte de la régulation, avec des exigences de fonds propres relevées et une supervision renforcée.`],
    ["2010 : la dette souveraine", `La crise de la dette souveraine européenne débute en 2010 avec la révélation de l'ampleur réelle du déficit grec, et s'étend par contagion à l'Irlande, au Portugal, à l'Espagne et à l'Italie.

Son mécanisme est différent de celui de 2008 : c'est une crise de confiance sur la capacité de certains États à rembourser, qui fait diverger brutalement les taux d'intérêt entre pays partageant la même monnaie. Elle révèle un défaut de construction de la zone euro — une monnaie unique sans budget commun, sans mutualisation de la dette, et sans prêteur en dernier ressort clairement désigné pour les États.

Les plans d'aide, assortis de programmes d'austérité sévères, ont produit des effets sociaux lourds et une contraction supplémentaire de l'activité, le multiplicateur budgétaire ayant été sous-estimé — le FMI l'a reconnu publiquement en 2013.

Le tournant vient en juillet 2012, quand Mario Draghi, président de la Banque centrale européenne, déclare qu'elle fera « tout ce qu'il faudra » pour préserver l'euro, et ajoute : « croyez-moi, ce sera suffisant ». Les taux se détendent immédiatement, sans qu'aucun achat n'ait encore eu lieu. C'est la démonstration la plus nette de ce que vaut la crédibilité d'une banque centrale : trois mots ont fait ce que des mois de sommets n'avaient pas obtenu.`],
    ["2020 : l'arrêt volontaire", `La crise de 2020 présente une particularité qui la distingue de toutes les précédentes : un arrêt volontaire de l'activité pour raisons sanitaires. Ce n'est ni un choc financier ni un choc d'offre ordinaire, mais une interruption décidée par les pouvoirs publics.

Cette nature a commandé la réponse. Il ne s'agissait pas de relancer une demande défaillante mais de maintenir en vie un appareil productif temporairement à l'arrêt — d'où une logique d'assurance plutôt que de relance. Le chômage partiel massif a pris en charge les salaires pour éviter les licenciements, préservant le lien entre l'entreprise et ses salariés ; les prêts garantis par l'État ont soutenu la trésorerie ; les reports de charges ont évité les faillites en chaîne.

Le résultat est un rebond rapide, l'appareil productif n'ayant pas été détruit et les compétences n'ayant pas été dispersées. Son coût est un endettement public sans précédent en temps de paix, et un soutien parfois indifférencié — plusieurs évaluations ont relevé qu'une part des aides était allée à des entreprises qui n'en avaient pas besoin, prix payé à la rapidité.`],
    ["2021-2022 : le retour de l'inflation", `La poussée d'inflation de 2021 et 2022 s'explique principalement par des tensions d'approvisionnement et une flambée des prix de l'énergie. La reprise simultanée de toutes les économies après les confinements a saturé les chaînes logistiques et les capacités de production ; l'invasion de l'Ukraine a fait s'envoler les prix du gaz, du pétrole et des céréales.

S'y sont ajoutés des facteurs de demande — l'épargne accumulée pendant les confinements — et, selon plusieurs travaux, une part de reconstitution voire d'accroissement des marges dans certains secteurs.

Les banques centrales ont réagi par une hausse rapide des taux directeurs, la plus brutale depuis quarante ans, après avoir d'abord jugé l'inflation transitoire. Ce diagnostic initial erroné et la vitesse du rattrapage ont produit un choc considérable sur le crédit immobilier et sur l'investissement.

En France, le bouclier tarifaire a limité la hausse des prix de l'énergie pour les consommateurs, par gel puis plafonnement des tarifs réglementés. Il a contenu l'inflation mesurée à un niveau inférieur à celui de la plupart des voisins européens, pour un coût budgétaire de plusieurs dizaines de milliards d'euros, et avec l'objection habituelle à ce type de dispositif : en atténuant le signal-prix, il réduit l'incitation à la sobriété qu'il aurait fallu encourager.

Chaque crise récente a ainsi modifié le rôle attendu des banques centrales et des États — assureur en dernier ressort en 2008, garant de la monnaie unique en 2012, payeur des salaires en 2020, amortisseur des prix en 2022. Le périmètre de ce qui est jugé de leur ressort n'a cessé de s'élargir.`],
  ],
};
