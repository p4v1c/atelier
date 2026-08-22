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
};
