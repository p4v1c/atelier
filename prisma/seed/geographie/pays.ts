/**
 * Géographie — la table des pays.
 *
 * Une fiche par pays, et trois jeux en sortent : le drapeau, la capitale, et
 * la position sur la carte. Écrire trois fois le même pays dans trois fichiers
 * aurait garanti qu'ils finissent par se contredire.
 *
 * `id` est le code ISO 3166-1 numérique — celui des fonds de carte, sans quoi
 * le clic ne trouverait rien. `a2` est le code à deux lettres, dont se déduit
 * le drapeau : les émojis de drapeau sont deux lettres écrites en « symboles
 * indicateurs régionaux », donc PT donne 🇵🇹 sans qu'on ait à les recopier.
 *
 * `ou` répond à « où est-ce ? » et sert de correction au jeu de localisation.
 * `drapeau` et `ville` sont facultatifs : quand il y a quelque chose à dire du
 * dessin ou de la ville, on le dit ; sinon la position fait la correction, et
 * c'est déjà ce que la matière cherche à apprendre.
 */

export type Fiche = {
  id: string;
  a2: string;
  nom: string;
  capitale: string;
  ou: string;
  drapeau?: string;
  ville?: string;
};

/** [id, a2, nom, capitale, où, note sur le drapeau ?, note sur la ville ?] */
type L = [string, string, string, string, string, string?, string?];

const fiches = (lignes: L[]): Fiche[] =>
  lignes.map(([id, a2, nom, capitale, ou, drapeau, ville]) => ({ id, a2, nom, capitale, ou, drapeau, ville }));

/** Le drapeau d'un pays, déduit de son code à deux lettres. */
export const drapeauDe = (a2: string): string =>
  String.fromCodePoint(...[...a2.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));

export const EUROPE = fiches([
  ["8", "AL", "Albanie", "Tirana", "sur l'Adriatique, face au talon de l'Italie, au sud du Monténégro"],
  ["276", "DE", "Allemagne", "Berlin", "au centre du continent, de la mer du Nord aux Alpes ; neuf voisins, le record d'Europe", "Noir, rouge, or : les couleurs des volontaires de 1813, reprises en 1848 puis en 1949."],
  ["20", "AD", "Andorre", "Andorre-la-Vieille", "une principauté de quatre cent soixante-huit kilomètres carrés, dans les Pyrénées entre la France et l'Espagne"],
  ["40", "AT", "Autriche", "Vienne", "sans littoral, dans les Alpes orientales, entre l'Allemagne et la Hongrie", "Rouge, blanc, rouge : l'un des plus anciens d'Europe, attesté au XIIIᵉ siècle.", "Sur le Danube. Assiégée deux fois par les Ottomans, en 1529 et en 1683 — c'est la limite de leur avancée."],
  ["56", "BE", "Belgique", "Bruxelles", "sur la mer du Nord, entre la France et les Pays-Bas", undefined, "Officiellement bilingue, dans une enclave néerlandophone. Elle abrite la Commission européenne."],
  ["112", "BY", "Biélorussie", "Minsk", "sans littoral, entre la Pologne et la Russie, au nord de l'Ukraine"],
  ["70", "BA", "Bosnie-Herzégovine", "Sarajevo", "dans les Balkans occidentaux, presque enclavée : vingt kilomètres de côte adriatique"],
  ["100", "BG", "Bulgarie", "Sofia", "sur la mer Noire, au sud du Danube qui la sépare de la Roumanie", undefined, "Au pied du mont Vitocha, à cinq cents mètres. L'une des plus anciennes villes d'Europe encore habitées."],
  ["196", "CY", "Chypre", "Nicosie", "une île de Méditerranée orientale, au sud de la Turquie", undefined, "La dernière capitale d'Europe coupée en deux par une ligne de démarcation."],
  ["191", "HR", "Croatie", "Zagreb", "en arc, du nord des Balkans jusqu'au long littoral dalmate", "Le damier rouge et blanc, la šahovnica, est l'emblème du pays depuis le Moyen Âge.", "À l'intérieur des terres, loin de la côte à laquelle on associe le pays."],
  ["208", "DK", "Danemark", "Copenhague", "une péninsule et quatre cents îles, entre la mer du Nord et la Baltique", "Le Dannebrog : la croix scandinave la plus ancienne, attestée au XIVᵉ siècle."],
  ["724", "ES", "Espagne", "Madrid", "l'essentiel de la péninsule Ibérique, entre les Pyrénées et Gibraltar", "Rouge et jaune, choisis en 1785 pour que les navires se reconnaissent de loin en mer.", "Au centre géométrique du pays, sur un plateau à six cent cinquante mètres."],
  ["233", "EE", "Estonie", "Tallinn", "le plus au nord des trois États baltes, en face de la Finlande"],
  ["246", "FI", "Finlande", "Helsinki", "entre la Suède et la Russie, sur le golfe de Botnie ; des dizaines de milliers de lacs", undefined, "Sa rade gèle chaque hiver, et des brise-glaces tiennent le port ouvert toute l'année."],
  ["250", "FR", "France", "Paris", "de la Manche à la Méditerranée, seul pays d'Europe occidentale sur les deux façades", "Le bleu et le rouge sont les couleurs de Paris, le blanc celui de la monarchie."],
  ["300", "GR", "Grèce", "Athènes", "à la pointe sud des Balkans, avec des milliers d'îles en mer Égée", "Neuf bandes pour les neuf syllabes de « Eleftheria i thanatos » — la liberté ou la mort.", "Habitée sans interruption depuis plus de trois mille ans, mais capitale seulement depuis 1834."],
  ["348", "HU", "Hongrie", "Budapest", "sans littoral, dans la plaine du Danube, au centre du bassin des Carpates", undefined, "Deux villes réunies en 1873 : Buda sur les collines, Pest sur la plaine."],
  ["372", "IE", "Irlande", "Dublin", "une île à l'ouest de la Grande-Bretagne ; le nord-est appartient au Royaume-Uni", "Vert pour les catholiques, orange pour les protestants, blanc pour la paix entre les deux.", "Fondée par les Vikings au IXᵉ siècle. Son nom irlandais n'a rien à voir avec le nom anglais."],
  ["352", "IS", "Islande", "Reykjavik", "en plein Atlantique nord, posée sur la dorsale médio-atlantique — d'où ses volcans", undefined, "La capitale souveraine la plus au nord du monde."],
  ["380", "IT", "Italie", "Rome", "la botte, de la plaine du Pô à la Sicile, au milieu de la Méditerranée", "Vert, blanc, rouge, adoptés en 1797 sur le modèle du tricolore français."],
  ["428", "LV", "Lettonie", "Riga", "celui du milieu des trois États baltes", undefined, "La plus grande ville des trois États baltes, et la plus grande concentration d'Art nouveau d'Europe."],
  ["438", "LI", "Liechtenstein", "Vaduz", "cent soixante kilomètres carrés entre la Suisse et l'Autriche, dans la vallée du Rhin"],
  ["440", "LT", "Lituanie", "Vilnius", "le plus au sud des trois États baltes, voisin de la Pologne"],
  ["442", "LU", "Luxembourg", "Luxembourg", "sans littoral, entre la Belgique, la France et l'Allemagne"],
  ["807", "MK", "Macédoine du Nord", "Skopje", "sans littoral, au centre des Balkans, au nord de la Grèce"],
  ["470", "MT", "Malte", "La Valette", "un archipel au sud de la Sicile, au milieu de la Méditerranée", undefined, "La plus petite capitale de l'Union européenne : moins d'un kilomètre carré."],
  ["498", "MD", "Moldavie", "Chișinău", "sans littoral, entre la Roumanie et l'Ukraine"],
  ["499", "ME", "Monténégro", "Podgorica", "sur l'Adriatique, entre la Croatie et l'Albanie"],
  ["578", "NO", "Norvège", "Oslo", "toute la façade atlantique de la Scandinavie, jusqu'au-delà du cercle polaire", "Une croix scandinave bleue bordée de blanc sur fond rouge.", "Au fond d'un fjord de cent kilomètres. Elle s'est appelée Christiania pendant trois siècles."],
  ["528", "NL", "Pays-Bas", "Amsterdam", "sur la mer du Nord ; un quart du territoire est sous le niveau de la mer", "La bande du haut était orange ; le pigment virait au rouge en mer, et l'usage a gagné.", "Capitale constitutionnelle — mais le gouvernement, le parlement et le roi siègent à La Haye."],
  ["616", "PL", "Pologne", "Varsovie", "sur la Baltique, entre l'Allemagne et la Biélorussie, dans la plaine d'Europe du Nord", "Blanc au-dessus, rouge en dessous. Retourné, c'est Monaco ou l'Indonésie.", "Rasée à plus de quatre-vingts pour cent en 1944, sa vieille ville a été rebâtie d'après des tableaux."],
  ["620", "PT", "Portugal", "Lisbonne", "à l'ouest de l'Espagne, sur l'Atlantique ; le pays continental le plus occidental d'Europe", "La sphère armillaire est l'instrument des navigateurs : l'outil qui lui a fait connaître le monde.", "Le tremblement de terre de 1755 l'a détruite aux trois quarts et a fait rebâtir son centre en damier."],
  ["642", "RO", "Roumanie", "Bucarest", "sur la mer Noire, autour de l'arc des Carpates, au nord du Danube", undefined, "Son palais du Parlement est le bâtiment administratif le plus lourd du monde."],
  ["826", "GB", "Royaume-Uni", "Londres", "l'île de Grande-Bretagne et le nord-est de l'Irlande", "L'Union Jack superpose les croix d'Angleterre, d'Écosse et d'Irlande — pas celle du pays de Galles."],
  ["688", "RS", "Serbie", "Belgrade", "sans littoral, au centre des Balkans, au confluent de la Save et du Danube"],
  ["703", "SK", "Slovaquie", "Bratislava", "sans littoral, entre la Tchéquie et l'Ukraine, au sud des Carpates", undefined, "La seule capitale au monde qui touche deux pays étrangers : l'Autriche et la Hongrie."],
  ["705", "SI", "Slovénie", "Ljubljana", "entre les Alpes et l'Adriatique, au nord de la Croatie ; quarante-sept kilomètres de côte"],
  ["752", "SE", "Suède", "Stockholm", "l'est de la Scandinavie, sur la Baltique", "La croix scandinave, décalée vers la hampe. C'est ce décalage qui fait la famille nordique.", "Bâtie sur quatorze îles, à l'entrée d'un archipel qui en compte des milliers."],
  ["756", "CH", "Suisse", "Berne", "sans littoral, au cœur des Alpes, entre la France, l'Allemagne et l'Italie", "Carré, ce qui n'arrive qu'à deux États au monde — l'autre est le Vatican.", "Ni la plus grande ville ni la plus riche : un compromis, en 1848, entre Zurich la puissante et Lucerne, vaincue du Sonderbund."],
  ["203", "CZ", "Tchéquie", "Prague", "sans littoral, au centre du continent ; la Bohême est un bassin encadré de montagnes", undefined, "Capitale du Saint-Empire sous Charles IV, elle en garde une université fondée en 1348."],
  ["792", "TR", "Turquie", "Ankara", "à cheval sur deux continents, de part et d'autre du Bosphore", "Croissant et étoile hérités de l'Empire ottoman ; le motif a essaimé de là.", "Atatürk l'a préférée à Istanbul en 1923 : trop exposée, trop ottomane, trop tournée vers l'Europe."],
  ["804", "UA", "Ukraine", "Kyiv", "sur la mer Noire, le plus grand pays entièrement européen", "Bleu sur jaune : le ciel au-dessus des blés, dit-on depuis le XIXᵉ siècle."],
]);

export const AFRIQUE = fiches([
  ["710", "ZA", "Afrique du Sud", "Pretoria", "à la pointe sud du continent, entre l'Atlantique et l'océan Indien", "Six couleurs et un Y couché, adoptés en 1994 : deux histoires qui convergent.", "Capitale administrative seulement : Le Cap est législative, Bloemfontein judiciaire."],
  ["12", "DZ", "Algérie", "Alger", "sur la Méditerranée ; le plus grand pays d'Afrique, aux quatre cinquièmes saharien", undefined, "Sa casbah, bâtie en amphithéâtre, domine la baie."],
  ["24", "AO", "Angola", "Luanda", "sur l'Atlantique, au sud de la République démocratique du Congo"],
  ["204", "BJ", "Bénin", "Porto-Novo", "une bande étroite du golfe de Guinée vers le nord, entre le Togo et le Nigéria", undefined, "Capitale officielle, mais le gouvernement siège à Cotonou."],
  ["72", "BW", "Botswana", "Gaborone", "sans littoral, au nord de l'Afrique du Sud ; le Kalahari en occupe l'essentiel"],
  ["854", "BF", "Burkina Faso", "Ouagadougou", "sans littoral, au sud du Mali, dans la boucle du Niger"],
  ["108", "BI", "Burundi", "Gitega", "sans littoral, au nord du lac Tanganyika, au sud du Rwanda"],
  ["120", "CM", "Cameroun", "Yaoundé", "au fond du golfe de Guinée, à la charnière de l'Afrique de l'Ouest et centrale"],
  ["384", "CI", "Côte d'Ivoire", "Yamoussoukro", "sur le golfe de Guinée, entre le Liberia et le Ghana", undefined, "Capitale politique depuis 1983 ; Abidjan reste la ville économique et la plus peuplée."],
  ["262", "DJ", "Djibouti", "Djibouti", "à l'entrée de la mer Rouge, sur le détroit de Bab el-Mandeb"],
  ["818", "EG", "Égypte", "Le Caire", "à l'angle nord-est du continent, de la Méditerranée à la mer Rouge, le long du Nil", "Rouge, blanc, noir : les couleurs panarabes, avec l'aigle de Saladin au centre.", "Sur le Nil, à la pointe du delta. La plus grande agglomération d'Afrique."],
  ["232", "ER", "Érythrée", "Asmara", "sur la mer Rouge, au nord de l'Éthiopie, à qui elle ferme l'accès à la mer"],
  ["231", "ET", "Éthiopie", "Addis-Abeba", "sans littoral, sur les hauts plateaux de la corne de l'Afrique", "C'est de lui que viennent les couleurs panafricaines : le pays n'a jamais été durablement colonisé.", "À deux mille trois cents mètres, l'une des cinq capitales les plus hautes du monde. Siège de l'Union africaine."],
  ["266", "GA", "Gabon", "Libreville", "sur l'équateur, au bord de l'Atlantique ; forestier aux quatre cinquièmes"],
  ["270", "GM", "Gambie", "Banjul", "un ruban le long de son fleuve, enclavé dans le Sénégal sauf sur l'Atlantique"],
  ["288", "GH", "Ghana", "Accra", "sur le golfe de Guinée, entre la Côte d'Ivoire et le Togo", "Rouge, jaune, vert avec une étoile noire : premier pays d'Afrique subsaharienne indépendant, en 1957.", "Le méridien de Greenwich passe à quelques kilomètres à l'est : la ville est presque à longitude zéro."],
  ["324", "GN", "Guinée", "Conakry", "sur l'Atlantique, au sud du Sénégal ; le Niger et le Sénégal y prennent leur source"],
  ["226", "GQ", "Guinée équatoriale", "Malabo", "en deux morceaux : une île du golfe de Guinée, et un carré de continent", undefined, "Sur l'île de Bioko, à deux cents kilomètres de la partie continentale du pays."],
  ["624", "GW", "Guinée-Bissau", "Bissau", "sur l'Atlantique, entre le Sénégal et la Guinée"],
  ["404", "KE", "Kenya", "Nairobi", "sur l'océan Indien, à cheval sur l'équateur, au sud de l'Éthiopie", "Un bouclier et deux lances masaï. L'Eswatini est le seul autre drapeau national à porter des armes traditionnelles.", "À mille sept cents mètres, ce qui lui donne un climat tempéré à deux degrés de l'équateur."],
  ["426", "LS", "Lesotho", "Maseru", "entièrement enclavé dans l'Afrique du Sud, et entièrement au-dessus de mille mètres"],
  ["430", "LR", "Libéria", "Monrovia", "sur l'Atlantique, entre la Sierra Leone et la Côte d'Ivoire", "Onze bandes et une étoile : fondé par des affranchis américains, il a copié leur drapeau."],
  ["434", "LY", "Libye", "Tripoli", "sur la Méditerranée, entre la Tunisie et l'Égypte ; saharien à quatre-vingt-dix pour cent"],
  ["450", "MG", "Madagascar", "Antananarivo", "une grande île de l'océan Indien, à quatre cents kilomètres du Mozambique", undefined, "Sur les hautes terres centrales, à mille deux cents mètres, loin des côtes."],
  ["454", "MW", "Malawi", "Lilongwe", "sans littoral, tout en longueur le long de son lac, à l'ouest du Mozambique"],
  ["466", "ML", "Mali", "Bamako", "sans littoral, au cœur du Sahel, sur la boucle du Niger"],
  ["504", "MA", "Maroc", "Rabat", "à l'angle nord-ouest du continent, sur l'Atlantique et la Méditerranée", "L'étoile verte à cinq branches, ajoutée en 1915, est un sceau de Salomon.", "Ni Casablanca la plus peuplée, ni Marrakech la plus visitée : le protectorat l'a choisie en 1912."],
  ["478", "MR", "Mauritanie", "Nouakchott", "sur l'Atlantique, entre le Maroc et le Sénégal, aux trois quarts saharienne"],
  ["508", "MZ", "Mozambique", "Maputo", "sur l'océan Indien, en face de Madagascar, tout en longueur", "Le seul drapeau national à porter une arme moderne : une kalachnikov."],
  ["516", "NA", "Namibie", "Windhoek", "sur l'Atlantique, au nord-ouest de l'Afrique du Sud ; le désert du Namib borde la côte"],
  ["562", "NE", "Niger", "Niamey", "sans littoral, au nord du Nigéria, aux deux tiers saharien"],
  ["566", "NG", "Nigéria", "Abuja", "au fond du golfe de Guinée ; le pays le plus peuplé du continent", "Vert, blanc, vert : le vert dit les terres cultivées.", "Construite de toutes pièces à partir de 1980, au centre du pays, pour remplacer Lagos."],
  ["800", "UG", "Ouganda", "Kampala", "sans littoral, au nord du lac Victoria, à cheval sur l'équateur"],
  ["140", "CF", "République Centrafricaine", "Bangui", "sans littoral, au centre exact du continent"],
  ["180", "CD", "République démocratique du Congo", "Kinshasa", "au cœur du bassin du Congo ; le deuxième pays d'Afrique par la superficie", undefined, "Face à Brazzaville, de l'autre côté du fleuve : les deux capitales les plus proches du monde."],
  ["178", "CG", "République du Congo", "Brazzaville", "sur l'Atlantique, à l'ouest de son grand voisin du même nom"],
  ["748", "SZ", "Royaume d'Eswatini", "Mbabane", "un petit royaume enclavé entre l'Afrique du Sud et le Mozambique"],
  ["646", "RW", "Rwanda", "Kigali", "sans littoral, à l'est du Congo ; le pays des mille collines"],
  ["686", "SN", "Sénégal", "Dakar", "à la pointe ouest du continent, sur l'Atlantique", "Vert, jaune, rouge avec une étoile verte, qui le sépare du Mali et de la Guinée.", "Sur la presqu'île du Cap-Vert, le point le plus occidental d'Afrique. En face, l'île de Gorée."],
  ["694", "SL", "Sierra Leone", "Freetown", "sur l'Atlantique, entre la Guinée et le Liberia"],
  ["706", "SO", "Somalie", "Mogadiscio", "toute la corne de l'Afrique ; le plus long littoral du continent"],
  ["729", "SD", "Soudan", "Khartoum", "sur la mer Rouge, au sud de l'Égypte", undefined, "Au confluent du Nil Blanc et du Nil Bleu, qui y forment le Nil."],
  ["728", "SS", "Soudan du Sud", "Djouba", "sans littoral, au sud du Soudan ; le plus jeune État du monde, né en 2011"],
  ["834", "TZ", "Tanzanie", "Dodoma", "sur l'océan Indien, au sud du Kenya ; le Kilimandjaro s'y trouve", undefined, "Capitale officielle depuis 1974 ; Dar es Salaam reste la ville principale."],
  ["148", "TD", "Tchad", "N'Djaména", "sans littoral, au sud de la Libye, autour d'un lac qui a perdu neuf dixièmes de sa surface"],
  ["768", "TG", "Togo", "Lomé", "une bande étroite du golfe de Guinée vers le nord, entre le Ghana et le Bénin"],
  ["788", "TN", "Tunisie", "Tunis", "sur la Méditerranée, entre l'Algérie et la Libye ; le plus petit du Maghreb", "Croissant et étoile rouges dans un disque blanc — un dessin ottoman, adopté dès 1831."],
  ["894", "ZM", "Zambie", "Lusaka", "sans littoral, au nord du Zimbabwe ; les chutes Victoria sont à sa frontière"],
  ["716", "ZW", "Zimbabwe", "Harare", "sans littoral, entre la Zambie et l'Afrique du Sud"],
]);

export const ASIE = fiches([
  ["4", "AF", "Afghanistan", "Kaboul", "sans littoral, entre l'Iran et le Pakistan, barré par l'Hindou Kouch"],
  ["682", "SA", "Arabie Saoudite", "Riyad", "l'essentiel de la péninsule Arabique, entre la mer Rouge et le golfe Persique", "Il porte la profession de foi musulmane et un sabre : jamais mis en berne.", "Au centre du plateau du Nedjd, en plein désert, à sept cents kilomètres de toute côte."],
  ["51", "AM", "Arménie", "Erevan", "sans littoral, dans le Caucase, entre la Turquie et l'Azerbaïdjan"],
  ["31", "AZ", "Azerbaïdjan", "Bakou", "sur la Caspienne, dans le Caucase, à l'est de l'Arménie"],
  ["50", "BD", "Bangladesh", "Dacca", "au fond du golfe du Bengale, sur le plus grand delta du monde"],
  ["64", "BT", "Bhoutan", "Thimphou", "sans littoral, dans l'Himalaya, entre l'Inde et la Chine", "Un dragon blanc tenant des joyaux — le pays s'appelle « la terre du dragon-tonnerre »."],
  ["96", "BN", "Brunei Darussalam", "Bandar Seri Begawan", "deux enclaves sur la côte nord de Bornéo, entourées par la Malaisie"],
  ["116", "KH", "Cambodge", "Phnom Penh", "entre la Thaïlande et le Viêt Nam, autour du grand lac Tonlé Sap", "Le seul drapeau national à représenter un monument : les tours d'Angkor Vat."],
  ["156", "CN", "Chine", "Pékin", "de la Sibérie aux tropiques ; quatorze voisins, autant que la Russie", "Une grande étoile et quatre petites : les classes sociales rassemblées autour du Parti.", "Son nom signifie « capitale du nord », par opposition à Nankin, « capitale du sud »."],
  ["408", "KP", "Corée du Nord", "Pyongyang", "la moitié nord de la péninsule coréenne, entre la Chine et le 38ᵉ parallèle"],
  ["410", "KR", "Corée du Sud", "Séoul", "la moitié sud de la péninsule coréenne, entre la mer Jaune et la mer du Japon", "Le taegeuk au centre, quatre trigrammes du Yi King aux angles : ciel, terre, eau et feu.", "Sur le fleuve Han, à quarante kilomètres de la frontière nord."],
  ["784", "AE", "Émirats arabes unis", "Abou Dabi", "sur le golfe Persique, à la pointe est de la péninsule Arabique", undefined, "La capitale n'est pas Dubaï, qui est seulement la plus grande ville du pays."],
  ["268", "GE", "Géorgie", "Tbilissi", "sur la mer Noire, au sud du Caucase, entre la Russie et la Turquie"],
  ["356", "IN", "Inde", "New Delhi", "un sous-continent en triangle, de l'Himalaya à l'océan Indien", "La roue d'Ashoka, au centre, compte vingt-quatre rayons ; elle a remplacé le rouet de Gandhi en 1947.", "Construite par les Britanniques à partir de 1911 à côté de la vieille Delhi."],
  ["360", "ID", "Indonésie", "Jakarta", "un archipel de dix-sept mille îles, à cheval sur l'équateur", "Rouge sur blanc — presque exactement celui de Monaco, à quelques centimètres près.", "Sur l'île de Java. Elle s'enfonce de plusieurs centimètres par an, d'où une nouvelle capitale à Bornéo."],
  ["368", "IQ", "Irak", "Bagdad", "entre le Tigre et l'Euphrate, avec un débouché étroit sur le golfe Persique"],
  ["364", "IR", "Iran", "Téhéran", "entre la Caspienne et le golfe Persique, sur un haut plateau cerné de montagnes", undefined, "Au pied de l'Elbourz, à mille deux cents mètres. Capitale seulement depuis 1786."],
  ["376", "IL", "Israël", "Jérusalem", "sur la Méditerranée, entre le Liban et l'Égypte", "Les deux bandes bleues rappellent le talit, le châle de prière."],
  ["392", "JP", "Japon", "Tokyo", "un arc de quatre grandes îles au large de la Corée, dans le Pacifique", "Le Hinomaru : un disque rouge, rien d'autre. Le nom du pays s'écrit « origine du soleil ».", "Elle s'appelait Edo jusqu'en 1868 ; son nom signifie « capitale de l'est »."],
  ["400", "JO", "Jordanie", "Amman", "sans véritable littoral, entre Israël, la Syrie, l'Irak et l'Arabie Saoudite"],
  ["398", "KZ", "Kazakhstan", "Astana", "sans littoral, entre la Caspienne et la Chine ; le plus grand pays enclavé du monde", undefined, "Sortie de la steppe en 1997. L'une des capitales les plus froides du monde."],
  ["417", "KG", "Kirghizistan", "Bichkek", "sans littoral, dans les monts Tian Shan, à l'ouest de la Chine"],
  ["414", "KW", "Koweït", "Koweït", "au fond du golfe Persique, entre l'Irak et l'Arabie Saoudite"],
  ["418", "LA", "Laos", "Vientiane", "sans littoral, tout en longueur le long du Mékong, entre la Thaïlande et le Viêt Nam"],
  ["422", "LB", "Liban", "Beyrouth", "une bande de côte méditerranéenne entre Israël et la Syrie", "Le cèdre, exploité depuis l'Antiquité pour la marine phénicienne puis égyptienne."],
  ["458", "MY", "Malaisie", "Kuala Lumpur", "en deux morceaux : la péninsule malaise, et le nord de Bornéo"],
  ["496", "MN", "Mongolie", "Oulan-Bator", "sans littoral, entre la Russie et la Chine ; le pays le moins densément peuplé du monde", undefined, "La capitale la plus froide du monde en moyenne annuelle."],
  ["104", "MM", "Myanmar", "Naypyidaw", "entre l'Inde et la Thaïlande, sur le golfe du Bengale", undefined, "Bâtie à partir de 2005 et inaugurée en 2006 ; Rangoun reste la ville principale."],
  ["524", "NP", "Népal", "Katmandou", "sans littoral, sur le versant sud de l'Himalaya, entre l'Inde et la Chine", "Le seul drapeau national qui ne soit pas rectangulaire : deux fanions superposés.", "Dans une vallée himalayenne à mille trois cents mètres."],
  ["512", "OM", "Oman", "Mascate", "à la pointe sud-est de la péninsule Arabique, sur le détroit d'Ormuz"],
  ["860", "UZ", "Ouzbékistan", "Tachkent", "sans littoral, au centre de l'Asie ; l'un des deux seuls pays doublement enclavés"],
  ["586", "PK", "Pakistan", "Islamabad", "de l'Himalaya à la mer d'Arabie, à l'ouest de l'Inde", undefined, "Construite dans les années 1960 pour remplacer Karachi, trop excentrée."],
  ["608", "PH", "Philippines", "Manille", "un archipel de sept mille îles, à l'est du Viêt Nam", "Le seul drapeau qu'on retourne en temps de guerre : le rouge passe alors en haut."],
  ["634", "QA", "Qatar", "Doha", "une péninsule qui avance dans le golfe Persique depuis l'Arabie Saoudite"],
  ["144", "LK", "Sri Lanka", "Colombo", "une île au sud-est de la pointe de l'Inde", undefined, "Capitale économique ; le parlement siège à Sri Jayawardenepura Kotte, dans sa banlieue."],
  ["760", "SY", "Syrie", "Damas", "sur la Méditerranée, entre la Turquie, l'Irak et la Jordanie", undefined, "L'une des plus anciennes villes habitées sans interruption du monde."],
  ["762", "TJ", "Tadjikistan", "Douchanbé", "sans littoral, montagneux à quatre-vingt-dix pour cent, au sud du Kirghizistan"],
  ["158", "TW", "Taïwan", "Taipei", "une île à cent quatre-vingts kilomètres de la côte chinoise"],
  ["764", "TH", "Thaïlande", "Bangkok", "au centre de la péninsule indochinoise, sur le golfe de Thaïlande", "Cinq bandes, dont la bleue centrale est deux fois plus large : elle représente la monarchie.", "Son nom cérémoniel complet, en thaï, est le plus long nom de lieu du monde."],
  ["795", "TM", "Turkménistan", "Achgabat", "sur la Caspienne, au nord de l'Iran ; le Karakoum en occupe les quatre cinquièmes"],
  ["792", "TR", "Turquie", "Ankara", "à cheval sur deux continents, de part et d'autre du Bosphore"],
  ["704", "VN", "Viêt Nam", "Hanoï", "une longue bande côtière en S, du delta du fleuve Rouge à celui du Mékong", "Une étoile jaune à cinq branches sur fond rouge, adoptée en 1945.", "Dans le nord. Hô Chi Minh-Ville, au sud, est plus peuplée."],
  ["887", "YE", "Yémen", "Sanaa", "à la pointe sud-ouest de la péninsule Arabique, sur Bab el-Mandeb"],
]);

export const AMERIQUES = fiches([
  ["32", "AR", "Argentine", "Buenos Aires", "tout le sud-est du continent, des Andes à l'Atlantique", "Le soleil de Mai rappelle le soulèvement de mai 1810 contre l'Espagne.", "Sur le Río de la Plata, un estuaire si large qu'on n'en voit pas l'autre rive."],
  ["84", "BZ", "Belize", "Belmopan", "sur la mer des Caraïbes, à l'est du Guatemala ; le seul pays anglophone d'Amérique centrale"],
  ["68", "BO", "Bolivie", "Sucre", "sans littoral, sur l'Altiplano andin, entre le Brésil et le Chili", undefined, "Capitale constitutionnelle ; le gouvernement siège à La Paz, à trois mille six cents mètres."],
  ["76", "BR", "Brésil", "Brasília", "la moitié du continent sud-américain, de l'Amazonie aux plaines du Sud", "Le ciel de Rio le 15 novembre 1889 : vingt-sept étoiles à leur position réelle.", "Bâtie en quarante et un mois au milieu du plateau central, inaugurée en 1960. Son plan a la forme d'un avion."],
  ["124", "CA", "Canada", "Ottawa", "tout le nord du continent, de l'Atlantique au Pacifique et jusqu'à l'Arctique", "La feuille d'érable ne date que de 1965 : avant, le pays arborait un pavillon britannique.", "Choisie par la reine Victoria en 1857, entre Toronto l'anglophone et Montréal la francophone."],
  ["152", "CL", "Chili", "Santiago", "une bande de quatre mille kilomètres entre les Andes et le Pacifique", "Une étoile blanche dans un carré bleu ; il précède de trente ans le drapeau du Texas.", "Dans une cuvette entre deux cordillères — d'où une pollution hivernale que le relief retient."],
  ["170", "CO", "Colombie", "Bogota", "à l'angle nord-ouest du continent, seul pays sud-américain sur deux océans", "La bande jaune occupe la moitié du drapeau ; les couleurs viennent de la Grande Colombie.", "Sur un plateau andin à deux mille six cents mètres : quinze degrés toute l'année."],
  ["188", "CR", "Costa Rica", "San José", "en Amérique centrale, entre le Nicaragua et le Panama"],
  ["192", "CU", "Cuba", "La Havane", "la plus grande île des Caraïbes, à l'entrée du golfe du Mexique", "Trois bandes bleues, deux blanches, un triangle rouge à l'étoile solitaire, dessiné en 1849."],
  ["222", "SV", "El Salvador", "San Salvador", "le plus petit d'Amérique centrale, et le seul sans façade caraïbe"],
  ["218", "EC", "Équateur", "Quito", "sur le Pacifique, à cheval sur la ligne qui lui donne son nom", undefined, "À deux mille huit cents mètres, à vingt-cinq kilomètres de l'équateur."],
  ["840", "US", "États-Unis", "Washington", "d'un océan à l'autre, entre le Canada et le Mexique", "Cinquante étoiles pour les États, treize bandes pour les colonies fondatrices."],
  ["320", "GT", "Guatemala", "Guatemala", "au nord de l'Amérique centrale, sous le Mexique, sur deux océans"],
  ["328", "GY", "Guyana", "Georgetown", "sur l'Atlantique, entre le Venezuela et le Suriname"],
  ["332", "HT", "Haïti", "Port-au-Prince", "la moitié ouest de l'île d'Hispaniola, dans les Caraïbes"],
  ["340", "HN", "Honduras", "Tegucigalpa", "au centre de l'Amérique centrale, avec une longue façade caraïbe"],
  ["388", "JM", "Jamaïque", "Kingston", "une île des Caraïbes, au sud de Cuba", "Le seul drapeau national sans rouge, blanc ni bleu."],
  ["484", "MX", "Mexique", "Mexico", "entre les États-Unis et l'Amérique centrale, sur deux océans", "Un aigle dévorant un serpent sur un cactus : la vision qui désignait l'emplacement de Tenochtitlán.", "Bâtie sur un ancien lac asséché, à deux mille deux cents mètres — et elle s'y enfonce."],
  ["558", "NI", "Nicaragua", "Managua", "le plus grand d'Amérique centrale, entre le Honduras et le Costa Rica"],
  ["591", "PA", "Panama", "Panama", "l'isthme qui relie les deux Amériques, coupé par son canal"],
  ["600", "PY", "Paraguay", "Asuncion", "sans littoral, entre la Bolivie, le Brésil et l'Argentine", "Le seul drapeau national dont les deux faces diffèrent."],
  ["604", "PE", "Pérou", "Lima", "sur le Pacifique, des Andes à l'Amazonie", "Rouge, blanc, rouge en bandes verticales ; San Martín les aurait choisies après avoir vu des flamants.", "Sur la côte désertique : quelques millimètres de pluie par an, et un brouillard permanent l'hiver."],
  ["214", "DO", "République Dominicaine", "Saint-Domingue", "la moitié est de l'île d'Hispaniola, à l'est d'Haïti"],
  ["740", "SR", "Suriname", "Paramaribo", "sur l'Atlantique, entre le Guyana et le Brésil ; le plus petit d'Amérique du Sud"],
  ["780", "TT", "Trinité-et-Tobago", "Port-d'Espagne", "deux îles au large du Venezuela, à l'extrémité sud des Caraïbes"],
  ["858", "UY", "Uruguay", "Montevideo", "sur l'Atlantique, coincé entre le Brésil et l'Argentine", undefined, "En face de Buenos Aires. Plus de la moitié des habitants du pays y vivent."],
  ["862", "VE", "Venezuela", "Caracas", "à l'angle nord du continent, sur la mer des Caraïbes"],
]);

/**
 * Ce que seul le planisphère porte.
 *
 * L'Australie et la Russie ne figurent sur aucune des quatre cartes
 * régionales : la première n'a pas de continent jouable ici, la seconde a été
 * retirée de l'Europe parce qu'elle en écrasait l'échelle à elle seule. Elles
 * n'existent donc que pour le jeu mondial.
 */
export const MONDE_SEUL = fiches([
  ["36", "AU", "Australie", "Canberra", "un continent à lui seul, entre l'océan Indien et le Pacifique", "L'Union Jack au canton, la Croix du Sud, et une étoile à sept branches : six États et les territoires.", "Ni Sydney ni Melbourne : une ville bâtie en 1913 pour trancher entre les deux."],
  ["643", "RU", "Russie", "Moscou", "de la Baltique au Pacifique, sur onze fuseaux horaires", "Blanc, bleu, rouge, repris de Pierre le Grand en 1699 et rétabli en 1991."],
  ["554", "NZ", "Nouvelle-Zélande", "Wellington", "deux grandes îles du Pacifique sud, à deux mille kilomètres de l'Australie", undefined, "La capitale souveraine la plus au sud du monde."],
  ["598", "PG", "Papouasie-Nouvelle-Guinée", "Port Moresby", "la moitié est de la Nouvelle-Guinée, au nord de l'Australie"],
]);

/**
 * Ce qu'aucune carte régionale ne porte.
 *
 * Trente États souverains manquaient à l'appel, et pour une raison de dessin :
 * ce sont presque tous des archipels ou des micro-États. Nauru fait vingt et un
 * kilomètres carrés, Monaco deux — à l'échelle d'une carte d'Europe ou du
 * Pacifique, ils tiennent dans un pixel, et Natural Earth ne les trace pas
 * tous. On ne peut donc pas demander de cliquer dessus.
 *
 * Les quiz, eux, n'ont pas besoin de carte. Le drapeau des Seychelles et la
 * capitale de Tuvalu se demandent très bien sans fond, et c'est ce qui permet
 * à la matière de couvrir les cent quatre-vingt-treize États membres de l'ONU
 * plutôt que les cent soixante-quatre qui se laissent dessiner.
 */
export const MONDE_RESTE = fiches([
  ["28", "AG", "Antigua-et-Barbuda", "Saint John's", "deux îles des Petites Antilles, à l'est de la Guadeloupe"],
  ["44", "BS", "Bahamas", "Nassau", "sept cents îles au nord-est de Cuba, dans l'Atlantique"],
  ["48", "BH", "Bahreïn", "Manama", "un archipel du golfe Persique, relié à l'Arabie Saoudite par une digue de vingt-cinq kilomètres"],
  ["52", "BB", "Barbade", "Bridgetown", "la plus orientale des Petites Antilles, seule en plein Atlantique"],
  ["132", "CV", "Cap-Vert", "Praia", "dix îles volcaniques à cinq cents kilomètres au large du Sénégal"],
  ["174", "KM", "Comores", "Moroni", "un archipel du canal du Mozambique, entre Madagascar et le continent"],
  ["212", "DM", "Dominique", "Roseau", "une île montagneuse des Petites Antilles, entre la Guadeloupe et la Martinique"],
  ["242", "FJ", "Fidji", "Suva", "trois cents îles du Pacifique sud, à l'est de l'Australie"],
  ["308", "GD", "Grenade", "Saint-Georges", "au sud des Petites Antilles, à cent cinquante kilomètres de Trinité"],
  ["296", "KI", "Kiribati", "Tarawa", "trente-trois atolls étalés sur trois fuseaux horaires, à cheval sur l'équateur et sur la ligne de changement de date"],
  ["462", "MV", "Maldives", "Malé", "mille deux cents îles de l'océan Indien, au sud-ouest de l'Inde ; le pays le plus plat du monde"],
  ["584", "MH", "Îles Marshall", "Majuro", "des atolls du Pacifique nord, à mi-chemin entre Hawaï et les Philippines"],
  ["480", "MU", "Maurice", "Port-Louis", "une île de l'océan Indien, à huit cents kilomètres à l'est de Madagascar"],
  ["583", "FM", "Micronésie", "Palikir", "six cents îles du Pacifique ouest, au nord de la Nouvelle-Guinée"],
  ["492", "MC", "Monaco", "Monaco", "deux kilomètres carrés sur la Méditerranée, enclavés dans la France", "Rouge sur blanc, comme celui de l'Indonésie à quelques centimètres de proportion près."],
  ["520", "NR", "Nauru", "Yaren", "un seul atoll de vingt et un kilomètres carrés, en plein Pacifique ; le plus petit État insulaire du monde"],
  ["585", "PW", "Palaos", "Ngerulmud", "un archipel du Pacifique ouest, à l'est des Philippines"],
  ["659", "KN", "Saint-Christophe-et-Niévès", "Basseterre", "deux îles des Petites Antilles ; le plus petit État des Amériques"],
  ["674", "SM", "Saint-Marin", "Saint-Marin", "soixante et un kilomètres carrés enclavés dans l'Italie ; la plus ancienne république du monde"],
  ["670", "VC", "Saint-Vincent-et-les-Grenadines", "Kingstown", "une île et un chapelet d'îlots des Petites Antilles"],
  ["662", "LC", "Sainte-Lucie", "Castries", "une île des Petites Antilles, juste au sud de la Martinique"],
  ["90", "SB", "Îles Salomon", "Honiara", "un millier d'îles du Pacifique sud, à l'est de la Papouasie"],
  ["882", "WS", "Samoa", "Apia", "deux grandes îles du Pacifique sud, à l'est des Fidji"],
  ["678", "ST", "São Tomé-et-Principe", "São Tomé", "deux îles du golfe de Guinée, posées sur l'équateur"],
  ["690", "SC", "Seychelles", "Victoria", "cent quinze îles de l'océan Indien, au nord-est de Madagascar"],
  ["702", "SG", "Singapour", "Singapour", "une cité-État à la pointe de la péninsule malaise, sur le détroit de Malacca"],
  ["626", "TL", "Timor oriental", "Dili", "la moitié est de l'île de Timor, au nord de l'Australie"],
  ["776", "TO", "Tonga", "Nuku'alofa", "un archipel du Pacifique sud, au sud des Samoa"],
  ["798", "TV", "Tuvalu", "Funafuti", "neuf atolls du Pacifique ; l'un des pays les plus menacés par la montée des eaux"],
  ["548", "VU", "Vanuatu", "Port-Vila", "quatre-vingts îles du Pacifique sud, à l'est de l'Australie"],
]);

/**
 * L'ARTICLE, PAYS PAR PAYS
 *
 * « Quel est le drapeau de … ? » demande une préposition contractée, et il n'y
 * a pas de règle : du Portugal, de la France, de l'Iran, des Pays-Bas, de Cuba.
 * Le genre ne se déduit pas de la terminaison — le Mexique et le Cambodge
 * finissent par un e, le Zimbabwe aussi — et une trentaine d'États insulaires
 * ne prennent aucun article : Cuba, Malte, Chypre, Israël, Madagascar, Maurice,
 * Singapour, Monaco, Kiribati.
 *
 * La table est donc écrite à la main, une entrée par pays, et un test vérifie
 * qu'aucune fiche n'en manque. C'est plus long qu'une règle, et c'est la seule
 * façon d'écrire des questions en français plutôt qu'en gabarit.
 */
export type Article = "le" | "la" | "l'" | "les" | "";

export const ARTICLE: Record<string, Article> = {
  // Europe
  AL: "l'", DE: "l'", AD: "", AT: "l'", BE: "la", BY: "la", BA: "la", BG: "la",
  CY: "", HR: "la", DK: "le", ES: "l'", EE: "l'", FI: "la", FR: "la", GR: "la",
  HU: "la", IE: "l'", IS: "l'", IT: "l'", LV: "la", LI: "le", LT: "la", LU: "le",
  MK: "la", MT: "", MD: "la", ME: "le", NO: "la", NL: "les", PL: "la", PT: "le",
  RO: "la", GB: "le", RS: "la", SK: "la", SI: "la", SE: "la", CH: "la", CZ: "la",
  TR: "la", UA: "l'",

  // Afrique
  ZA: "l'", DZ: "l'", AO: "l'", BJ: "le", BW: "le", BF: "le", BI: "le", CM: "le",
  CI: "la", DJ: "", EG: "l'", ER: "l'", ET: "l'", GA: "le", GM: "la", GH: "le",
  GN: "la", GQ: "la", GW: "la", KE: "le", LS: "le", LR: "le", LY: "la", MG: "",
  MW: "le", ML: "le", MA: "le", MR: "la", MZ: "le", NA: "la", NE: "le", NG: "le",
  UG: "l'", CF: "la", CD: "la", CG: "la", SZ: "le", RW: "le", SN: "le", SL: "la",
  SO: "la", SD: "le", SS: "le", TZ: "la", TD: "le", TG: "le", TN: "la", ZM: "la",
  ZW: "le",

  // Asie
  AF: "l'", SA: "l'", AM: "l'", AZ: "l'", BD: "le", BT: "le", BN: "le", KH: "le",
  CN: "la", KP: "la", KR: "la", AE: "les", GE: "la", IN: "l'", ID: "l'", IQ: "l'",
  IR: "l'", IL: "", JP: "le", JO: "la", KZ: "le", KG: "le", KW: "le", LA: "le",
  LB: "le", MY: "la", MN: "la", MM: "le", NP: "le", OM: "", UZ: "l'", PK: "le",
  PH: "les", QA: "le", LK: "", SY: "la", TJ: "le", TW: "", TH: "la", TM: "le",
  VN: "le", YE: "le",

  // Amériques
  AR: "l'", BZ: "le", BO: "la", BR: "le", CA: "le", CL: "le", CO: "la", CR: "le",
  CU: "", SV: "", EC: "l'", US: "les", GT: "le", GY: "le", HT: "", HN: "le",
  JM: "la", MX: "le", NI: "le", PA: "le", PY: "le", PE: "le", DO: "la", SR: "le",
  TT: "", UY: "l'", VE: "le",

  // Le reste du monde
  AU: "l'", RU: "la", NZ: "la", PG: "la",
  AG: "", BS: "les", BH: "le", BB: "la", CV: "le", KM: "les", DM: "la", FJ: "les",
  GD: "la", KI: "", MV: "les", MH: "les", MU: "", FM: "la", MC: "", NR: "",
  PW: "les", KN: "", SM: "", VC: "", LC: "", SB: "les", WS: "les", ST: "",
  SC: "les", SG: "", TL: "le", TO: "les", TV: "", VU: "le",
};

/**
 * « du Portugal », « de la France », « de l'Iran », « des Pays-Bas », « de
 * Cuba » — et « d'Israël », parce qu'un pays sans article devant une voyelle
 * élide quand même.
 */
export function de(f: Fiche): string {
  const article = ARTICLE[f.a2];
  if (article === "le") return `du ${f.nom}`;
  if (article === "la") return `de la ${f.nom}`;
  if (article === "l'") return `de l'${f.nom}`;
  if (article === "les") return `des ${f.nom}`;
  return /^[aeiouyàâäéèêëîïôöùûüh]/i.test(f.nom) ? `d'${f.nom}` : `de ${f.nom}`;
}

/** Les quatre continents jouables, dans l'ordre où l'écran les propose. */
export const CONTINENTS = [
  { cle: "europe", nom: "Europe", pays: EUROPE },
  { cle: "afrique", nom: "Afrique", pays: AFRIQUE },
  { cle: "asie", nom: "Asie", pays: ASIE },
  { cle: "ameriques", nom: "Amériques", pays: AMERIQUES },
] as const;
