/**
 * Anglais — huit champs de plus, de la musique à la démographie.
 *
 * Deuxième passe d'élargissement. La première avait comblé les manques de la
 * vie courante — sport, transports, études, famille, démarches, médias. Celle-ci
 * vise ce qu'on lit et ce qu'on écoute : la culture, la ville bâtie, le travail
 * industriel, et deux domaines dont la presse ne parle plus qu'en anglais,
 * l'énergie et la démographie.
 *
 * Toujours des phrases : un champ lexical s'apprend par ses collocations.
 * « Break a record » et « set a record » ne veulent pas dire la même chose, et
 * aucune liste de mots ne le signale.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_VOCABULAIRE_SOCIETE: LotCartes[] = [
  {
    slug: "en-voc-musique",
    category: "Vocabulaire",
    title: "La musique",
    statement:
      "Play, perform, release, gig. L'anglais distingue jouer d'un instrument, se produire en concert et sortir un disque — et le français dit « jouer » pour les trois premiers.",
    tip: "Play the piano prend l'article ; play football n'en prend pas. La règle vaut pour tous les instruments et tous les sports.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "She plays the cello.",
        francais: "Elle joue du violoncelle.",
        note: "Play + the + instrument. L'article tombe pour les sports : play tennis.",
      },
      {
        etranger: "The band released their third album.",
        francais: "Le groupe a sorti son troisième album.",
        note: "Release, sortir un disque. Un groupe prend souvent le pluriel en anglais britannique.",
      },
      {
        etranger: "They're playing a gig on Friday.",
        francais: "Ils font un concert vendredi.",
        aussi: ["Ils jouent vendredi soir."],
        note: "A gig, un concert de petite taille. A concert est plus formel, a show plus large.",
      },
      {
        etranger: "The song got stuck in my head.",
        francais: "La chanson m'est restée en tête.",
        aussi: ["J'ai eu cette chanson dans la tête."],
        note: "Get stuck in one's head. Le nom pour ce phénomène est an earworm.",
      },
      {
        etranger: "He can't carry a tune.",
        francais: "Il chante faux.",
        aussi: ["Il n'a aucune oreille."],
        note: "Carry a tune, chanter juste. La négation est la forme la plus employée.",
      },
      {
        etranger: "The chorus comes in after eight bars.",
        francais: "Le refrain arrive après huit mesures.",
        note: "A bar, une mesure — a measure en anglais américain. The chorus, le refrain.",
      },
      {
        etranger: "The album was recorded live.",
        francais: "L'album a été enregistré en public.",
        note: "Live se prononce comme life quand c'est un adjectif, comme give quand c'est le verbe.",
      },
      {
        etranger: "She played by ear.",
        francais: "Elle jouait à l'oreille.",
        note: "Play by ear, sans partition. Au figuré, play it by ear signifie improviser.",
      },
      {
        etranger: "The track went straight to number one.",
        francais: "Le morceau est entré directement premier au classement.",
        aussi: ["Le titre a atteint la première place d'emblée."],
        note: "A track, un morceau. The charts, le classement des ventes.",
      },
      {
        etranger: "Turn it down, please.",
        francais: "Baisse le son, s'il te plaît.",
        note: "Turn down pour baisser, turn up pour monter. Le complément se glisse entre les deux mots.",
      },
    ],
  },

  {
    slug: "en-voc-cinema",
    category: "Vocabulaire",
    title: "Films et scène",
    statement:
      "Shoot, cast, plot, spoiler. Le vocabulaire du cinéma anglophone est passé tel quel dans le français des salles, mais avec des sens décalés qu'il faut connaître.",
    tip: "A film et a movie disent la même chose de part et d'autre de l'Atlantique. En revanche, the pictures et the movies désignent la salle, pas le film.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The film was shot in Morocco.",
        francais: "Le film a été tourné au Maroc.",
        note: "Shoot a film, tourner. Un tournage est a shoot ou filming.",
      },
      {
        etranger: "She was cast as the lead.",
        francais: "Elle a été choisie pour le rôle principal.",
        aussi: ["Elle a obtenu le premier rôle."],
        note: "Cast someone as, distribuer un rôle. The cast, la distribution.",
      },
      {
        etranger: "Don't spoil the ending.",
        francais: "Ne dévoile pas la fin.",
        aussi: ["Ne raconte pas la fin."],
        note: "Spoil, gâcher en révélant. A spoiler est la révélation elle-même.",
      },
      {
        etranger: "The plot doesn't hold together.",
        francais: "L'intrigue ne tient pas debout.",
        aussi: ["Le scénario ne tient pas la route."],
        note: "The plot, l'intrigue. The script est le texte, the screenplay le scénario écrit.",
      },
      {
        etranger: "It's showing at the local cinema.",
        francais: "Il passe au cinéma du quartier.",
        note: "Be showing, être à l'affiche. Cinema en anglais britannique, theater en américain.",
      },
      {
        etranger: "The film is dubbed into French.",
        francais: "Le film est doublé en français.",
        note: "Dub into, doubler. Subtitles pour les sous-titres, subtitled pour le film.",
      },
      {
        etranger: "He stole every scene he was in.",
        francais: "Il a éclipsé tout le monde dans chacune de ses scènes.",
        aussi: ["Il a volé la vedette dans toutes ses scènes."],
        note: "Steal the scene, éclipser les autres acteurs. L'image du vol est la même qu'en français.",
      },
      {
        etranger: "The play sold out in a day.",
        francais: "La pièce a affiché complet en un jour.",
        note: "Sell out, faire salle comble. A play est une pièce de théâtre, pas un jeu.",
      },
      {
        etranger: "The sequel came out last year.",
        francais: "La suite est sortie l'an dernier.",
        note: "A sequel suit, a prequel précède, a spin-off dérive.",
      },
      {
        etranger: "It's based on a true story.",
        francais: "C'est inspiré de faits réels.",
        aussi: ["C'est tiré d'une histoire vraie."],
        note: "Based on, tiré de. Inspired by est plus lâche et se dit quand la fiction domine.",
      },
    ],
  },

  {
    slug: "en-voc-histoire",
    category: "Vocabulaire",
    title: "Histoire et société",
    statement:
      "Reign, rule, overthrow, settlement. Lire un article d'histoire en anglais demande des verbes précis, et plusieurs sont des faux amis pour un francophone.",
    tip: "A century se compte comme en français, mais on écrit the 19th century sans « ème ». Attention : the 1900s désigne la décennie 1900-1909 autant que le XXᵉ siècle, selon le contexte.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "She reigned for sixty years.",
        francais: "Elle régna soixante ans.",
        note: "Reign pour un monarque, rule pour tout pouvoir. A reign, un règne.",
      },
      {
        etranger: "The regime was overthrown in 1974.",
        francais: "Le régime fut renversé en 1974.",
        note: "Overthrow, renverser. Le prétérit est overthrew, le participe overthrown.",
      },
      {
        etranger: "The treaty was signed in Vienna.",
        francais: "Le traité fut signé à Vienne.",
        note: "A treaty, un traité. An agreement est plus large et moins solennel.",
      },
      {
        etranger: "The city was besieged for two years.",
        francais: "La ville fut assiégée pendant deux ans.",
        note: "Besiege, assiéger. A siege, un siège — le meuble se dit a seat.",
      },
      {
        etranger: "The settlement dates from the Bronze Age.",
        francais: "Le site d'habitat date de l'âge du bronze.",
        aussi: ["L'agglomération remonte à l'âge du bronze."],
        note: "A settlement est un lieu de peuplement ; le mot dit aussi un règlement de litige.",
      },
      {
        etranger: "The empire collapsed within a decade.",
        francais: "L'empire s'effondra en dix ans.",
        note: "Collapse, s'effondrer. Within a decade dit « en moins de dix ans ».",
      },
      {
        etranger: "The revolt was brutally suppressed.",
        francais: "La révolte fut brutalement réprimée.",
        note: "Suppress a revolt, réprimer. Repress se dit plutôt d'un peuple ou d'un sentiment.",
      },
      {
        etranger: "He was exiled to a remote island.",
        francais: "Il fut exilé sur une île reculée.",
        note: "Exile someone to a place. Remote dit l'éloignement, pas la petitesse.",
      },
      {
        etranger: "Historians still disagree on the causes.",
        francais: "Les historiens restent divisés sur les causes.",
        aussi: ["Les historiens ne s'accordent pas sur les causes."],
        note: "Disagree on something. La phrase est la formule type d'une conclusion prudente.",
      },
      {
        etranger: "The archive was destroyed in the fire.",
        francais: "Les archives furent détruites dans l'incendie.",
        note: "An archive est un fonds ; the archives désigne aussi bien le fonds que le lieu qui le conserve.",
      },
    ],
  },

  {
    slug: "en-voc-architecture",
    category: "Vocabulaire",
    title: "Bâtiments et chantiers",
    statement:
      "Storey, plot, estate, listed. Le vocabulaire du bâti est plein de faux amis, et « estate » ou « plot » n'ont pas du tout le sens qu'un francophone leur prête.",
    tip: "En anglais britannique, le rez-de-chaussée est the ground floor, et the first floor est notre premier étage. Aux États-Unis, the first floor est le rez-de-chaussée : le décalage vaut aux ascenseurs.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The building has six storeys.",
        francais: "L'immeuble compte six niveaux.",
        note: "A storey en anglais britannique, a story en américain ; pluriel storeys. Attention au décalage : six storeys font cinq étages en français, le rez-de-chaussée ne comptant pas.",
      },
      {
        etranger: "They bought a plot of land.",
        francais: "Ils ont acheté un terrain.",
        aussi: ["Ils ont acheté une parcelle."],
        note: "A plot est ici une parcelle. Le même mot désigne l'intrigue d'un roman et un complot.",
      },
      {
        etranger: "The house is a listed building.",
        francais: "La maison est classée.",
        aussi: ["La maison est un monument protégé."],
        note: "Listed, inscrit à l'inventaire. Rien à voir avec une simple liste.",
      },
      {
        etranger: "They're extending the kitchen.",
        francais: "Ils agrandissent la cuisine.",
        note: "Extend a room, agrandir. An extension est l'agrandissement lui-même.",
      },
      {
        etranger: "Planning permission was refused.",
        francais: "Le permis de construire a été refusé.",
        note: "Planning permission en anglais britannique, a building permit en américain.",
      },
      {
        etranger: "The roof needs replacing.",
        francais: "Le toit est à refaire.",
        aussi: ["La toiture doit être remplacée."],
        note: "Need + -ing équivaut ici à un passif. La structure marche aussi avec want : the roof wants replacing, plus rare mais correct.",
      },
      {
        etranger: "The flats overlook the park.",
        francais: "Les appartements donnent sur le parc.",
        note: "Overlook, donner sur. Le même verbe signifie aussi négliger, selon le contexte.",
      },
      {
        etranger: "The walls are load-bearing.",
        francais: "Les murs sont porteurs.",
        note: "Load-bearing, porteur. A partition wall est une simple cloison.",
      },
      {
        etranger: "The estate was built in the sixties.",
        francais: "La cité a été construite dans les années soixante.",
        aussi: ["Le lotissement date des années soixante."],
        note: "A housing estate, un ensemble de logements. Le mot dit aussi un domaine et une succession.",
      },
      {
        etranger: "The site has been derelict for years.",
        francais: "Le site est à l'abandon depuis des années.",
        aussi: ["Le terrain est en friche depuis des années."],
        note: "Derelict, laissé à l'abandon. A brownfield site est un terrain industriel désaffecté.",
      },
    ],
  },

  {
    slug: "en-voc-securite",
    category: "Vocabulaire",
    title: "Urgences et sécurité",
    statement:
      "Safety, security, hazard, breach. Deux mots pour « sécurité » et deux pour « risque » : l'anglais sépare ce que le français confond, et l'erreur se voit dans un rapport.",
    tip: "Safety, c'est la protection contre l'accident ; security, contre l'intention hostile. Un extincteur relève de safety, un badge d'accès de security.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Safety comes first on site.",
        francais: "La sécurité passe avant tout sur le chantier.",
        note: "Safety contre l'accident. Security contre la malveillance : les deux ne s'échangent pas.",
      },
      {
        etranger: "There was a serious data breach.",
        francais: "Il y a eu une grave fuite de données.",
        aussi: ["Il y a eu une violation de données importante."],
        note: "A breach, une brèche dans une protection. Breach of contract, rupture de contrat.",
      },
      {
        etranger: "The chemical poses a fire hazard.",
        francais: "Le produit présente un risque d'incendie.",
        note: "A hazard est un danger potentiel ; a risk, la probabilité qu'il se réalise.",
      },
      {
        etranger: "Call an ambulance right away.",
        francais: "Appelle une ambulance tout de suite.",
        note: "Right away, immédiatement. Le numéro d'urgence britannique est le 999, l'européen le 112.",
      },
      {
        etranger: "Evacuate the building by the nearest exit.",
        francais: "Évacuez le bâtiment par la sortie la plus proche.",
        note: "Evacuate a building. En anglais soigné, on évacue le lieu, pas les personnes.",
      },
      {
        etranger: "He was treated for smoke inhalation.",
        francais: "Il a été soigné pour inhalation de fumée.",
        note: "Treat someone for something. Le passif est la forme habituelle des comptes rendus.",
      },
      {
        etranger: "The alarm went off at three.",
        francais: "L'alarme s'est déclenchée à trois heures.",
        note: "Go off dit le déclenchement, pas l'arrêt. Le contraire piège tous les francophones.",
      },
      {
        etranger: "Wear a helmet at all times.",
        francais: "Portez un casque en permanence.",
        note: "At all times, en permanence. Formule standard des consignes de sécurité.",
      },
      {
        etranger: "The area has been cordoned off.",
        francais: "Le secteur a été bouclé.",
        aussi: ["Le périmètre a été fermé."],
        note: "Cordon off, boucler un périmètre. A cordon est le cordon de sécurité.",
      },
      {
        etranger: "Report any suspicious behaviour.",
        francais: "Signalez tout comportement suspect.",
        note: "Report, signaler. Behaviour en anglais britannique, behavior en américain.",
      },
    ],
  },

  {
    slug: "en-voc-industrie",
    category: "Travail et études",
    title: "Production et logistique",
    statement:
      "Supply chain, lead time, backlog, shortage. Le vocabulaire industriel anglophone s'est imposé partout, et le connaître mal coûte cher en réunion.",
    tip: "Un backlog n'est pas un retard : c'est une file d'attente de travail. Un lead time n'est pas un délai de livraison mais le temps total entre commande et disponibilité.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The supply chain broke down.",
        francais: "La chaîne d'approvisionnement s'est rompue.",
        note: "Break down, se rompre. Supply chain est passé tel quel dans le français des entreprises.",
      },
      {
        etranger: "Lead times have doubled since spring.",
        francais: "Les délais ont doublé depuis le printemps.",
        note: "Lead time va de la commande à la disponibilité, pas seulement du transport.",
      },
      {
        etranger: "We're clearing the backlog.",
        francais: "Nous résorbons le retard accumulé.",
        aussi: ["Nous rattrapons la file d'attente."],
        note: "A backlog est un stock de travail en attente, pas un retard sur une échéance.",
      },
      {
        etranger: "There's a shortage of raw materials.",
        francais: "Il y a une pénurie de matières premières.",
        note: "A shortage of. Raw materials est toujours au pluriel dans ce sens.",
      },
      {
        etranger: "The plant runs three shifts.",
        francais: "L'usine tourne en trois-huit.",
        aussi: ["L'usine fonctionne en trois équipes."],
        note: "A shift, une équipe de travail. The night shift, l'équipe de nuit.",
      },
      {
        etranger: "Output fell by twelve per cent.",
        francais: "La production a baissé de douze pour cent.",
        note: "Output, la production réalisée ; capacity, ce qu'on pourrait produire.",
      },
      {
        etranger: "The batch failed quality control.",
        francais: "Le lot a été refusé au contrôle qualité.",
        note: "A batch, un lot de fabrication. Fail quality control, sans article, ne pas passer le contrôle qualité.",
      },
      {
        etranger: "We source locally where possible.",
        francais: "Nous nous approvisionnons localement quand c'est possible.",
        note: "Source comme verbe : s'approvisionner. Where possible, dans la mesure du possible.",
      },
      {
        etranger: "The order is on back order.",
        francais: "La commande est en attente de réapprovisionnement.",
        aussi: ["L'article est en rupture et sera livré plus tard."],
        note: "On back order : commandé, payé, pas encore disponible.",
      },
      {
        etranger: "They scaled back production.",
        francais: "Ils ont réduit la production.",
        note: "Scale back, réduire la voilure. Scale up dit l'inverse.",
      },
    ],
  },

  {
    slug: "en-voc-energie",
    category: "Vocabulaire",
    title: "Énergie et climat",
    statement:
      "Grid, baseload, offset, phase out. Le débat énergétique se mène en anglais, et ses mots-clés n'ont souvent aucune traduction française stabilisée.",
    tip: "Power et energy ne s'échangent pas : power est une puissance instantanée, en watts ; energy une quantité, en watt-heures. Confondre les deux invalide un raisonnement entier.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The grid struggled to cope with demand.",
        francais: "Le réseau a eu du mal à absorber la demande.",
        note: "The grid, le réseau électrique. Cope with, faire face à.",
      },
      {
        etranger: "Coal is being phased out by 2035.",
        francais: "Le charbon sera abandonné progressivement d'ici 2035.",
        aussi: ["Le charbon sera supprimé par étapes d'ici 2035."],
        note: "Phase out, éliminer par étapes. Phase in dit l'introduction progressive.",
      },
      {
        etranger: "Some wind output is curtailed on windy days.",
        francais: "Une partie de la production éolienne est écrêtée les jours de grand vent.",
        note: "Curtailment : on bride une production qui dépasse ce que le réseau peut absorber. Terme technique sans équivalent français d'un seul mot.",
      },
      {
        etranger: "The plant provides baseload power.",
        francais: "La centrale fournit une puissance de base.",
        note: "Baseload, la production continue qui couvre le socle de la demande.",
      },
      {
        etranger: "Emissions are offset by reforestation.",
        francais: "Les émissions sont compensées par du reboisement.",
        note: "Offset, compenser. A carbon offset est un crédit de compensation.",
      },
      {
        etranger: "Insulation cuts consumption sharply.",
        francais: "L'isolation réduit fortement la consommation.",
        note: "Insulation, isolation thermique. Isolation en anglais veut dire l'isolement.",
      },
      {
        etranger: "The tariff is capped until April.",
        francais: "Le tarif est plafonné jusqu'en avril.",
        note: "Cap, plafonner. A price cap, un plafond de prix.",
      },
      {
        etranger: "Storage remains the bottleneck.",
        francais: "Le stockage reste le goulet d'étranglement.",
        note: "A bottleneck, un goulot. L'image est celle du col de bouteille.",
      },
      {
        etranger: "Output is intermittent by nature.",
        francais: "La production est par nature intermittente.",
        note: "Intermittent renewables : la formule consacrée du débat sur l'éolien et le solaire.",
      },
      {
        etranger: "They pledged to halve emissions.",
        francais: "Ils se sont engagés à réduire de moitié les émissions.",
        note: "Pledge to, s'engager publiquement. Halve, réduire de moitié — le l est muet.",
      },
    ],
  },

  {
    slug: "en-voc-demographie",
    category: "Vocabulaire",
    title: "Population et statistiques",
    statement:
      "Rate, ratio, share, per capita. Les mots des chiffres sont les plus mal traduits de tous, et un taux n'est pas une part.",
    tip: "A rate est un rapport rapporté au temps ou à une population ; a share une fraction d'un total. « Le taux de chômage » est unemployment rate, « la part des jeunes » the share of young people.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The birth rate has fallen steadily.",
        francais: "Le taux de natalité baisse régulièrement.",
        note: "A rate se rapporte à une population et à une période. Steadily, régulièrement.",
      },
      {
        etranger: "Their share of the market is shrinking.",
        francais: "Leur part de marché se réduit.",
        note: "A share est une fraction d'un total, jamais un taux.",
      },
      {
        etranger: "Income per capita has stagnated.",
        francais: "Le revenu par habitant stagne.",
        note: "Per capita, latin, invariable. Per head est plus familier.",
      },
      {
        etranger: "The population is ageing rapidly.",
        francais: "La population vieillit rapidement.",
        note: "Ageing en anglais britannique, aging en américain. Le verbe est intransitif.",
      },
      {
        etranger: "Net migration turned negative.",
        francais: "Le solde migratoire est devenu négatif.",
        note: "Net, une fois les départs déduits. Gross dirait le contraire.",
      },
      {
        etranger: "The figures are seasonally adjusted.",
        francais: "Les chiffres sont corrigés des variations saisonnières.",
        note: "Seasonally adjusted, la mention obligatoire des séries mensuelles.",
      },
      {
        etranger: "The gap has narrowed since 2010.",
        francais: "L'écart s'est réduit depuis 2010.",
        note: "Narrow, se resserrer. Widen dit l'inverse. A gap, un écart.",
      },
      {
        etranger: "One in five households lives alone.",
        francais: "Un ménage sur cinq est composé d'une personne seule.",
        note: "One in five prend un verbe singulier dans l'écrit soigné. A household, un ménage.",
      },
      {
        etranger: "The sample is not representative.",
        francais: "L'échantillon n'est pas représentatif.",
        note: "Representative of something. Le mot désigne aussi un délégué.",
      },
      {
        etranger: "Life expectancy has plateaued.",
        francais: "L'espérance de vie stagne.",
        aussi: ["L'espérance de vie a cessé de progresser."],
        note: "Plateau est passé verbe : atteindre un palier et s'y tenir.",
      },
    ],
  },
];
