/**
 * Anglais — huit derniers champs.
 *
 * Fin de la cinquième passe. Le jardin, les animaux, le ciel, la roche, la
 * santé mentale, la technique de cuisine, l'administration et le monde
 * associatif. Ce sont les derniers domaines fréquents que le module ne
 * couvrait pas, et deux d'entre eux méritent d'être signalés.
 *
 * La santé mentale a son vocabulaire propre, et il change vite : ce qui se
 * disait il y a vingt ans blesse aujourd'hui. L'administration, elle, est
 * l'endroit où un mot mal choisi coûte un rendez-vous.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_DOMAINES_3: LotCartes[] = [
  {
    slug: "en-voc-jardinage",
    category: "Vocabulaire",
    title: "Le jardin",
    statement:
      "Sow, prune, weed, mulch. Le jardinage a un verbe pour chaque geste, et « planter » n'en couvre aucun correctement.",
    tip: "Sow, c'est semer une graine ; plant, c'est mettre en terre ce qui a déjà poussé. Les deux ne s'échangent jamais.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "We sowed the seeds in March.",
        francais: "Nous avons semé les graines en mars.",
        note: "Sow, semer. Le participe est sown. Sew, coudre, se prononce pareil.",
      },
      {
        etranger: "The roses need pruning.",
        francais: "Les rosiers ont besoin d'être taillés.",
        note: "Prune, tailler. Le nom prune veut dire pruneau : aucun rapport.",
      },
      {
        etranger: "I spent the morning weeding.",
        francais: "J'ai passé la matinée à désherber.",
        note: "Weed est nom et verbe : la mauvaise herbe et l'action de l'arracher.",
      },
      {
        etranger: "The soil needs mulching.",
        francais: "Le sol a besoin d'être paillé.",
        note: "Mulch, le paillis. Le mot est passé en français des jardiniers.",
      },
      {
        etranger: "The tomatoes are coming along nicely.",
        francais: "Les tomates poussent bien.",
        note: "Come along, progresser. Se dit d'une plante comme d'un projet.",
      },
      {
        etranger: "Water them sparingly.",
        francais: "Arrose-les avec parcimonie.",
        note: "Sparingly, avec modération. Water est verbe autant que nom.",
      },
      {
        etranger: "The frost killed off the seedlings.",
        francais: "Le gel a détruit les jeunes plants.",
        note: "A seedling, un plant issu de semis. Kill off, détruire entièrement.",
      },
      {
        etranger: "The hedge is getting out of hand.",
        francais: "La haie devient incontrôlable.",
        note: "Get out of hand, échapper à tout contrôle. Vaut aussi pour une situation.",
      },
      {
        etranger: "These plants thrive in shade.",
        francais: "Ces plantes se plaisent à l'ombre.",
        note: "Thrive, prospérer. Le verbe se dit d'une plante, d'un animal ou d'une entreprise.",
      },
      {
        etranger: "The lawn needs mowing again.",
        francais: "La pelouse a encore besoin d'être tondue.",
        note: "Mow, tondre. Le participe est mown. A lawnmower, une tondeuse.",
      },
    ],
  },

  {
    slug: "en-voc-animaux",
    category: "Vocabulaire",
    title: "Les animaux",
    statement:
      "Herd, flock, swarm, litter. L'anglais a un collectif différent pour chaque espèce, et il en fait volontiers un jeu.",
    tip: "Beaucoup d'animaux ont un générique, un mâle, une femelle et un petit : horse / stallion / mare / foal ; sheep / ram / ewe / lamb. Le générique n'est pas le nom du mâle, contrairement au français.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "A flock of sheep blocked the road.",
        francais: "Un troupeau de moutons bloquait la route.",
        note: "A flock pour les moutons et les oiseaux, a herd pour les bovins.",
      },
      {
        etranger: "A swarm of bees settled in the tree.",
        francais: "Un essaim d'abeilles s'est posé dans l'arbre.",
        note: "A swarm pour les insectes. Le verbe swarm dit aussi grouiller.",
      },
      {
        etranger: "The cat had a litter of five.",
        francais: "La chatte a eu une portée de cinq.",
        note: "A litter, une portée. Le mot désigne aussi les détritus jetés au sol.",
      },
      {
        etranger: "The dog kept barking all night.",
        francais: "Le chien a aboyé toute la nuit.",
        note: "Bark, aboyer. Le nom bark désigne aussi l'écorce d'un arbre.",
      },
      {
        etranger: "Foxes are common around here.",
        francais: "Les renards sont fréquents par ici.",
        note: "Fox, renard. Le mot est verbe aussi : foxed veut dire déconcerté.",
      },
      {
        etranger: "The horse threw its rider.",
        francais: "Le cheval a désarçonné son cavalier.",
        note: "Throw a rider, désarçonner. A mare est la jument, a foal le poulain.",
      },
      {
        etranger: "The birds are nesting in the eaves.",
        francais: "Les oiseaux nichent sous le toit.",
        note: "Nest est nom et verbe. The eaves, l'avant-toit — toujours pluriel.",
      },
      {
        etranger: "Deer often cross at dusk.",
        francais: "Les cerfs traversent souvent au crépuscule.",
        note: "Deer est invariable : one deer, two deer. Comme sheep et fish.",
      },
      {
        etranger: "The cattle were driven to market.",
        francais: "Le bétail a été mené au marché.",
        note: "Drive cattle, conduire un troupeau. Le verbe précède l'automobile.",
      },
      {
        etranger: "Don't feed the wildlife.",
        francais: "Ne nourrissez pas les animaux sauvages.",
        note: "Wildlife est indénombrable et collectif : jamais « wildlifes ».",
      },
    ],
  },

  {
    slug: "en-voc-astronomie",
    category: "Vocabulaire",
    title: "Le ciel et l'espace",
    statement:
      "Orbit, eclipse, light-year, launch. Le vocabulaire du ciel revient dans toute la presse scientifique, et plusieurs de ses mots sont des faux amis.",
    tip: "A light-year mesure une distance, pas une durée. L'erreur est si fréquente qu'elle sert de test dans les articles de vulgarisation.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The probe entered orbit last week.",
        francais: "La sonde s'est placée en orbite la semaine dernière.",
        note: "Enter orbit, sans article. Orbit est nom et verbe.",
      },
      {
        etranger: "The eclipse lasted four minutes.",
        francais: "L'éclipse a duré quatre minutes.",
        note: "Eclipse est verbe aussi, et s'emploie au figuré : overshadow en est proche.",
      },
      {
        etranger: "It's four light-years away.",
        francais: "C'est à quatre années-lumière.",
        note: "A light-year est une distance. Le trait d'union est obligatoire.",
      },
      {
        etranger: "The launch was scrubbed.",
        francais: "Le lancement a été annulé.",
        note: "Scrub a launch, annuler. Le terme est propre à l'aérospatiale.",
      },
      {
        etranger: "The telescope picked up a faint signal.",
        francais: "Le télescope a capté un signal faible.",
        note: "Pick up, capter. Le verbe est le même que pour une radio.",
      },
      {
        etranger: "The comet returns every 76 years.",
        francais: "La comète revient tous les 76 ans.",
        note: "Every + nombre + pluriel. L'anglais ne met pas d'article.",
      },
      {
        etranger: "The rover touched down at dawn.",
        francais: "Le rover s'est posé à l'aube.",
        note: "Touch down, se poser. Land se dit aussi, moins technique.",
      },
      {
        etranger: "The star collapsed into a black hole.",
        francais: "L'étoile s'est effondrée en trou noir.",
        note: "Collapse into, s'effondrer en. La préposition marque le résultat.",
      },
      {
        etranger: "The mission overran its budget.",
        francais: "La mission a dépassé son budget.",
        note: "Overrun, dépasser. Le participe est overrun, invariable.",
      },
      {
        etranger: "Solar flares disrupt communications.",
        francais: "Les éruptions solaires perturbent les communications.",
        note: "A flare, une éruption. Le mot dit aussi une fusée éclairante.",
      },
    ],
  },

  {
    slug: "en-voc-geologie",
    category: "Vocabulaire",
    title: "La terre et les roches",
    statement:
      "Bedrock, erosion, fault line, sediment. Le vocabulaire géologique donne à l'anglais courant plusieurs de ses images les plus fortes.",
    tip: "Bedrock au figuré désigne le socle d'une chose : the bedrock of the economy. A fault line, une ligne de fracture sociale autant que tectonique.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "They hit bedrock at ten metres.",
        francais: "Ils ont atteint la roche mère à dix mètres.",
        note: "Bedrock, la roche en place. Au figuré, le socle d'une institution.",
      },
      {
        etranger: "Erosion has widened the gully.",
        francais: "L'érosion a élargi le ravin.",
        note: "Erosion s'emploie au figuré : the erosion of trust, l'érosion de la confiance.",
      },
      {
        etranger: "The city sits on a fault line.",
        francais: "La ville est bâtie sur une faille.",
        note: "Sit on, être posé sur. A fault line dit aussi une fracture sociale.",
      },
      {
        etranger: "The sediment settled overnight.",
        francais: "Les sédiments se sont déposés dans la nuit.",
        note: "Settle, se déposer. Sediment est indénombrable dans ce sens.",
      },
      {
        etranger: "The cliff is crumbling into the sea.",
        francais: "La falaise s'éboule dans la mer.",
        note: "Crumble, s'effondrer par pans. Le mot désigne aussi un dessert.",
      },
      {
        etranger: "The seam runs for three kilometres.",
        francais: "Le filon court sur trois kilomètres.",
        note: "A seam, un filon de charbon ou de minerai. Le mot dit aussi une couture.",
      },
      {
        etranger: "The quarry closed in the fifties.",
        francais: "La carrière a fermé dans les années cinquante.",
        note: "A quarry, une carrière de pierre. Le mot désigne aussi une proie.",
      },
      {
        etranger: "The rock is porous and brittle.",
        francais: "La roche est poreuse et cassante.",
        note: "Porous, poreux. Le mot s'emploie au figuré pour une frontière perméable.",
      },
      {
        etranger: "The layers date back millions of years.",
        francais: "Les couches remontent à des millions d'années.",
        note: "Date back, remonter à. Le verbe ne prend jamais to devant une durée.",
      },
      {
        etranger: "The tremor was barely felt.",
        francais: "La secousse a été à peine ressentie.",
        note: "A tremor, une secousse légère ; an earthquake, un séisme.",
      },
    ],
  },

  {
    slug: "en-voc-sante-mentale",
    category: "Vocabulaire",
    title: "La santé mentale",
    statement:
      "Burnout, coping, overwhelmed, boundaries. Le vocabulaire anglophone de la santé mentale s'est imposé partout, et il évolue vite : ce qui se disait il y a vingt ans blesse aujourd'hui.",
    tip: "On dit a person with depression plutôt que a depressive : l'anglais met la personne avant le diagnostic. C'est une règle d'usage, pas une préciosité.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "He's on sick leave with burnout.",
        francais: "Il est en arrêt pour épuisement professionnel.",
        note: "Burnout est passé tel quel en français. Sick leave, l'arrêt maladie.",
      },
      {
        etranger: "I've been feeling overwhelmed lately.",
        francais: "Je me sens débordé ces temps-ci.",
        note: "Overwhelmed, submergé. Le mot est le plus employé du champ.",
      },
      {
        etranger: "She's setting boundaries at work.",
        francais: "Elle pose des limites au travail.",
        note: "Set boundaries, poser des limites. La formule est passée dans l'usage courant.",
      },
      {
        etranger: "He's seeing a therapist.",
        francais: "Il consulte un psychologue.",
        note: "See a therapist : le verbe see suffit là où le français dirait « aller voir » ou « consulter ».",
      },
      {
        etranger: "She's a big believer in self-care.",
        francais: "Elle croit beaucoup à l'importance de prendre soin de soi.",
        note: "Self-care, prendre soin de soi. Le mot est passé du jargon thérapeutique au langage courant.",
      },
      {
        etranger: "She has been struggling for months.",
        francais: "Elle traverse une période difficile depuis des mois.",
        note: "Struggle, l'euphémisme standard. Il évite de nommer le trouble.",
      },
      {
        etranger: "He opened up about it.",
        francais: "Il s'est confié à ce sujet.",
        note: "Open up about something, se confier. La particule est indispensable.",
      },
      {
        etranger: "Take it one day at a time.",
        francais: "Prends les choses un jour après l'autre.",
        note: "One day at a time, formule de soutien devenue proverbiale.",
      },
      {
        etranger: "There's still a lot of stigma.",
        francais: "Le sujet reste très stigmatisé.",
        note: "Stigma est indénombrable. Le pluriel savant stigmata a un tout autre sens.",
      },
      {
        etranger: "She's doing much better now.",
        francais: "Elle va beaucoup mieux maintenant.",
        note: "Do better pour la santé. Be better dirait la comparaison de qualité.",
      },
    ],
  },

  {
    slug: "en-voc-cuisine-technique",
    category: "Vocabulaire",
    title: "Les gestes de la cuisine",
    statement:
      "Simmer, whisk, fold, season. Une recette anglaise emploie une vingtaine de verbes précis, et les confondre rate le plat.",
    tip: "Boil, c'est à gros bouillons ; simmer, c'est frémir. Une recette qui dit simmer et qu'on fait boil donne un résultat entièrement différent.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Let it simmer for twenty minutes.",
        francais: "Laisse frémir vingt minutes.",
        note: "Simmer, frémir ; boil, bouillir à gros bouillons. La différence change le plat.",
      },
      {
        etranger: "Whisk the eggs until foamy.",
        francais: "Fouette les œufs jusqu'à ce qu'ils moussent.",
        note: "Whisk, fouetter. A whisk est le fouet lui-même.",
      },
      {
        etranger: "Fold in the flour gently.",
        francais: "Incorpore la farine délicatement.",
        note: "Fold in, incorporer sans casser l'air. Le verbe vient du pliage.",
      },
      {
        etranger: "Season to taste.",
        francais: "Assaisonnez selon votre goût.",
        note: "Season, assaisonner. To taste, selon le goût — formule figée des recettes.",
      },
      {
        etranger: "Brown the meat on all sides.",
        francais: "Faites dorer la viande sur toutes les faces.",
        note: "Brown est verbe : faire dorer. Sear dit une saisie très vive.",
      },
      {
        etranger: "Drain and set aside.",
        francais: "Égouttez et réservez.",
        note: "Set aside, réserver. Drain, égoutter, et aussi vider un évier.",
      },
      {
        etranger: "Preheat the oven to 180 degrees.",
        francais: "Préchauffez le four à 180 degrés.",
        note: "Preheat, préchauffer. Les recettes britanniques donnent souvent aussi le gas mark.",
      },
      {
        etranger: "Rest the meat before carving.",
        francais: "Laissez reposer la viande avant de la découper.",
        note: "Rest est transitif ici. Carve, découper une pièce rôtie.",
      },
      {
        etranger: "Bring it to the boil, then reduce.",
        francais: "Portez à ébullition, puis baissez.",
        note: "Bring to the boil en anglais britannique, to a boil en américain.",
      },
      {
        etranger: "The sauce should coat the back of a spoon.",
        francais: "La sauce doit napper le dos d'une cuillère.",
        note: "Coat the back of a spoon : le test de nappage, formule consacrée.",
      },
    ],
  },

  {
    slug: "en-voc-bureaucratie",
    category: "Vie quotidienne",
    title: "L'administration",
    statement:
      "Apply for, fill in, proof of, entitled to. Vivre à l'étranger, c'est d'abord remplir des formulaires, et chaque mot y compte.",
    tip: "Be entitled to veut dire avoir droit à. Le mot revient dans chaque courrier administratif, et le confondre avec « intitulé » fait contresens.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I need to apply for a residence permit.",
        francais: "Je dois demander un titre de séjour.",
        note: "Apply for, faire une demande. La préposition ne s'omet jamais.",
      },
      {
        etranger: "Fill in the form in block capitals.",
        francais: "Remplissez le formulaire en majuscules d'imprimerie.",
        note: "Fill in en anglais britannique, fill out en américain. Block capitals, majuscules.",
      },
      {
        etranger: "You'll need proof of address.",
        francais: "Il vous faudra un justificatif de domicile.",
        note: "Proof of, justificatif de. Le mot est indénombrable dans ce sens.",
      },
      {
        etranger: "You may be entitled to a refund.",
        francais: "Vous avez peut-être droit à un remboursement.",
        note: "Be entitled to, avoir droit à. Rien à voir avec un intitulé.",
      },
      {
        etranger: "The application is still pending.",
        francais: "La demande est toujours en cours d'instruction.",
        note: "Pending, en attente de décision. Le mot est aussi une préposition : pending approval.",
      },
      {
        etranger: "Please allow six weeks for processing.",
        francais: "Comptez six semaines de traitement.",
        note: "Allow + durée, compter. Processing, le traitement d'un dossier.",
      },
      {
        etranger: "Your permit expires in June.",
        francais: "Votre titre expire en juin.",
        note: "Expire, arriver à échéance. Renew, renouveler.",
      },
      {
        etranger: "Enclose a copy, not the original.",
        francais: "Joignez une copie, pas l'original.",
        note: "Enclose, joindre à un envoi papier. Attach pour un courriel.",
      },
      {
        etranger: "The deadline has been extended.",
        francais: "La date limite a été repoussée.",
        note: "Extend a deadline, la repousser. Bring forward dirait l'inverse.",
      },
      {
        etranger: "You'll be notified in writing.",
        francais: "Vous serez informé par écrit.",
        note: "In writing, par écrit. La formule est celle de tout courrier officiel.",
      },
    ],
  },

  {
    slug: "en-voc-social",
    category: "Vocabulaire",
    title: "Associations et solidarité",
    statement:
      "Charity, volunteer, fundraising, outreach. Le monde associatif anglophone a un vocabulaire précis, et « charity » n'a pas la connotation du français « charité ».",
    tip: "A charity est une organisation à but non lucratif, sans nuance religieuse ni condescendante. Le mot est neutre et administratif.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "She works for a local charity.",
        francais: "Elle travaille pour une association locale.",
        note: "A charity, une association à but non lucratif enregistrée comme telle. Le mot n'a rien de la connotation de « charité ».",
      },
      {
        etranger: "He volunteers at the food bank.",
        francais: "Il est bénévole à la banque alimentaire.",
        note: "Volunteer est verbe et nom. Volunteer at pour un lieu, for pour une cause.",
      },
      {
        etranger: "They're fundraising for the school.",
        francais: "Ils collectent des fonds pour l'école.",
        note: "Fundraise, collecter des fonds. A fundraiser est l'événement comme la personne.",
      },
      {
        etranger: "The outreach programme reaches rural areas.",
        francais: "Le programme d'action de proximité touche les zones rurales.",
        note: "Outreach, aller vers les publics éloignés. Pas d'équivalent français d'un seul mot.",
      },
      {
        etranger: "The scheme is means-tested.",
        francais: "Le dispositif est soumis à conditions de ressources.",
        note: "Means-tested, sous condition de ressources. A scheme est un dispositif, pas un stratagème.",
      },
      {
        etranger: "Donations are tax-deductible.",
        francais: "Les dons sont déductibles des impôts.",
        note: "Tax-deductible, déductible. Le trait d'union est obligatoire.",
      },
      {
        etranger: "The trustees meet twice a year.",
        francais: "Le conseil d'administration se réunit deux fois par an.",
        note: "A trustee, un administrateur bénévole. Le mot est propre au droit anglo-saxon.",
      },
      {
        etranger: "They rely on grassroots support.",
        francais: "Ils comptent sur un soutien de terrain.",
        note: "Grassroots, la base militante. L'image est celle des racines de l'herbe.",
      },
      {
        etranger: "The campaign raised awareness.",
        francais: "La campagne a sensibilisé le public.",
        note: "Raise awareness, sensibiliser. La formule est figée et très employée.",
      },
      {
        etranger: "Funding was cut last year.",
        francais: "Les financements ont été réduits l'an dernier.",
        note: "Funding est indénombrable. Cut funding, réduire les crédits.",
      },
    ],
  },
];
