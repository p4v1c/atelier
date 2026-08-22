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
};
