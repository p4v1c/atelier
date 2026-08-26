/**
 * Anglais — huit domaines qu'un manuel ne traite jamais.
 *
 * Suite de la quatrième passe. Ce sont des champs qu'on rencontre en lisant, en
 * regardant un film ou en vivant à l'étranger, et qu'aucune méthode de langue
 * n'aborde parce qu'ils ne correspondent à aucune « situation » : la ferme, le
 * bateau, la catastrophe, l'église, l'armée, la mode, l'enfance, la fin de vie.
 *
 * Ce sont pourtant ceux qui manquent le jour où l'on veut lire un journal
 * entier ou suivre une conversation entre natifs.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_MONDE_2: LotCartes[] = [
  {
    slug: "en-voc-agriculture",
    category: "Vocabulaire",
    title: "La terre et l'élevage",
    statement:
      "Crop, harvest, livestock, fallow. Le vocabulaire agricole revient dans toute la presse économique et environnementale, et personne ne l'enseigne.",
    tip: "Cattle est toujours pluriel : the cattle are, jamais « the cattle is ». C'est l'un des rares collectifs anglais sans singulier.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The crop failed this year.",
        francais: "La récolte a été mauvaise cette année.",
        aussi: ["La récolte a été perdue cette année."],
        note: "A crop est ce qui pousse ; the harvest, le moment où on le ramasse.",
      },
      {
        etranger: "They harvest the wheat in July.",
        francais: "Ils moissonnent le blé en juillet.",
        note: "Harvest est verbe et nom. Reap est littéraire et se dit surtout au figuré.",
      },
      {
        etranger: "The field is lying fallow.",
        francais: "Le champ est en jachère.",
        note: "Lie fallow, être en jachère. L'expression s'emploie au figuré pour un projet en sommeil.",
      },
      {
        etranger: "The cattle are grazing.",
        francais: "Les bovins pâturent.",
        note: "Cattle est toujours pluriel. Une bête se dit a head of cattle.",
      },
      {
        etranger: "The soil is poor here.",
        francais: "La terre est pauvre ici.",
        note: "Soil pour la terre cultivable, earth pour la matière, ground pour le sol qu'on foule.",
      },
      {
        etranger: "They rotate the crops each year.",
        francais: "Ils font tourner les cultures chaque année.",
        aussi: ["Ils pratiquent la rotation des cultures."],
        note: "Crop rotation, la rotation. Le verbe rotate se construit sans préposition.",
      },
      {
        etranger: "The herd was moved to higher ground.",
        francais: "Le troupeau a été déplacé plus haut.",
        note: "A herd pour les bovins, a flock pour les moutons et les oiseaux.",
      },
      {
        etranger: "The drought ruined the yield.",
        francais: "La sécheresse a ruiné le rendement.",
        note: "Yield, le rendement. Le mot est aussi un verbe : produire un résultat.",
      },
      {
        etranger: "They keep free-range hens.",
        francais: "Ils élèvent des poules en plein air.",
        note: "Free-range, en liberté. Keep ou raise pour élever ; breed ne se dit que de la reproduction.",
      },
      {
        etranger: "The barn needs reroofing.",
        francais: "La grange a besoin d'une nouvelle toiture.",
        note: "A barn, la grange. Le préfixe re- se colle librement : reroof, rebuild, repaint.",
      },
    ],
  },

  {
    slug: "en-voc-navigation",
    category: "Vocabulaire",
    title: "La mer et les bateaux",
    statement:
      "Aboard, ashore, adrift, overboard. L'anglais maritime a donné à la langue courante des dizaines d'expressions, et il vaut mieux savoir d'où elles viennent.",
    tip: "Ces mots en a- sont d'anciens « on board », « on shore ». D'où leur emploi figuré : a project adrift, une équipe qui dérive.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Everyone is safely aboard.",
        francais: "Tout le monde est à bord, sain et sauf.",
        note: "Aboard sans préposition. On board se dit aussi, et s'emploie au figuré en entreprise.",
      },
      {
        etranger: "We went ashore at dawn.",
        francais: "Nous avons débarqué à l'aube.",
        note: "Go ashore, débarquer. Le contraire est put out to sea.",
      },
      {
        etranger: "The boat was left adrift.",
        francais: "Le bateau a été laissé à la dérive.",
        note: "Adrift, à la dérive, au propre comme au figuré : a career adrift.",
      },
      {
        etranger: "Man overboard!",
        francais: "Un homme à la mer !",
        note: "La formule est figée. Au figuré, throw something overboard veut dire abandonner.",
      },
      {
        etranger: "The tide is coming in.",
        francais: "La marée monte.",
        note: "Come in pour la marée montante, go out pour la descendante.",
      },
      {
        etranger: "We're sailing against the wind.",
        francais: "Nous naviguons contre le vent.",
        note: "Sail se dit même sans voile. Au figuré, plain sailing veut dire sans encombre.",
      },
      {
        etranger: "The ship ran aground.",
        francais: "Le navire s'est échoué.",
        note: "Run aground, s'échouer. Le verbe run sert à beaucoup d'accidents : run over, run into.",
      },
      {
        etranger: "The crew abandoned ship.",
        francais: "L'équipage a abandonné le navire.",
        note: "Abandon ship sans article : la formule est un ordre figé.",
      },
      {
        etranger: "The harbour was full of trawlers.",
        francais: "Le port était plein de chalutiers.",
        note: "A harbour est un abri naturel ; a port, une infrastructure commerciale.",
      },
      {
        etranger: "We were becalmed for two days.",
        francais: "Nous sommes restés encalminés deux jours.",
        aussi: ["Nous sommes restés sans vent pendant deux jours."],
        note: "Becalmed, immobilisé faute de vent. Le mot ne s'emploie qu'au passif.",
      },
    ],
  },

  {
    slug: "en-voc-catastrophes",
    category: "Vocabulaire",
    title: "Catastrophes et secours",
    statement:
      "Wildfire, flooding, aftermath, relief. Ce sont les mots de la une, et le français n'a pas d'équivalent simple pour « aftermath » ni pour « relief effort ».",
    tip: "The aftermath désigne ce qui suit une catastrophe, pas la catastrophe elle-même. In the aftermath of, au lendemain de.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Wildfires spread across the region.",
        francais: "Des incendies se sont propagés dans la région.",
        note: "A wildfire, un feu de forêt incontrôlé. Spread est invariable au prétérit.",
      },
      {
        etranger: "Flooding cut off three villages.",
        francais: "Les inondations ont isolé trois villages.",
        note: "Flooding est indénombrable ; a flood se compte. Cut off, couper du reste.",
      },
      {
        etranger: "In the aftermath, prices soared.",
        francais: "Au lendemain de la catastrophe, les prix se sont envolés.",
        note: "The aftermath, ce qui suit. Le mot n'a pas d'équivalent français d'un seul mot.",
      },
      {
        etranger: "Relief efforts began at once.",
        francais: "Les secours se sont organisés aussitôt.",
        note: "Relief, l'aide d'urgence. Le mot dit aussi le soulagement.",
      },
      {
        etranger: "The death toll rose to forty.",
        francais: "Le bilan est monté à quarante morts.",
        note: "The death toll, le bilan humain. A toll est un péage : l'image est celle du prix payé.",
      },
      {
        etranger: "Thousands were left homeless.",
        francais: "Des milliers de personnes se sont retrouvées sans abri.",
        note: "Be left + adjectif : se retrouver dans un état après un événement.",
      },
      {
        etranger: "The area was declared a disaster zone.",
        francais: "La zone a été déclarée sinistrée.",
        note: "Declare something a + nom : deux compléments sans préposition.",
      },
      {
        etranger: "Rescuers worked through the night.",
        francais: "Les secouristes ont travaillé toute la nuit.",
        note: "Work through the night. A rescuer, un secouriste ; a survivor, un rescapé.",
      },
      {
        etranger: "Aid is trickling in.",
        francais: "L'aide arrive au compte-gouttes.",
        note: "Trickle in, arriver par petites quantités. Pour l'inverse : pour in.",
      },
      {
        etranger: "The bridge gave way under the weight.",
        francais: "Le pont a cédé sous le poids.",
        note: "Give way, céder. Le verbe s'emploie aussi pour laisser la priorité.",
      },
    ],
  },

  {
    slug: "en-voc-religion",
    category: "Vocabulaire",
    title: "Croyances et rites",
    statement:
      "Faith, worship, congregation, secular. Le champ religieux traverse l'histoire, la politique et la littérature anglophones, et son vocabulaire est très codifié.",
    tip: "Faith désigne la foi et aussi une religion : the three Abrahamic faiths. Religion au singulier désigne plutôt le fait religieux en général.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "He lost his faith in his thirties.",
        francais: "Il a perdu la foi vers la trentaine.",
        note: "Faith, la foi. Le mot désigne aussi une confession : the Jewish faith.",
      },
      {
        etranger: "The congregation stood to sing.",
        francais: "L'assemblée s'est levée pour chanter.",
        note: "A congregation, les fidèles réunis. Le mot ne désigne jamais le bâtiment.",
      },
      {
        etranger: "France is a secular state.",
        francais: "La France est un État laïque.",
        note: "Secular, laïque au sens de non confessionnel. Laicity ne se dit pas en anglais courant.",
      },
      {
        etranger: "They worship at the same church.",
        francais: "Ils fréquentent la même église.",
        note: "Worship, pratiquer un culte. Le nom désigne le culte lui-même.",
      },
      {
        etranger: "The service lasts about an hour.",
        francais: "L'office dure environ une heure.",
        note: "A service, un office religieux. Mass ne se dit que pour le rite catholique.",
      },
      {
        etranger: "He was ordained last spring.",
        francais: "Il a été ordonné au printemps dernier.",
        note: "Ordain, ordonner prêtre. Ne pas confondre avec order, commander.",
      },
      {
        etranger: "The text is open to interpretation.",
        francais: "Le texte est sujet à interprétation.",
        note: "Be open to, prêter à. La formule sert bien au-delà du champ religieux.",
      },
      {
        etranger: "Pilgrims come from all over.",
        francais: "Des pèlerins viennent de partout.",
        note: "A pilgrim, un pèlerin ; a pilgrimage, un pèlerinage.",
      },
      {
        etranger: "The abbey was dissolved in 1539.",
        francais: "L'abbaye a été dissoute en 1539.",
        note: "Dissolve pour la dissolution des monastères anglais, épisode central de leur histoire.",
      },
      {
        etranger: "She takes it on faith.",
        francais: "Elle l'accepte sans preuve.",
        aussi: ["Elle le croit sur parole."],
        note: "Take something on faith, admettre sans vérifier. L'emploi est laïque.",
      },
    ],
  },

  {
    slug: "en-voc-militaire",
    category: "Vocabulaire",
    title: "Armée et conflits",
    statement:
      "Deploy, withdraw, ceasefire, casualty. Le vocabulaire militaire est celui de l'histoire et des dépêches, et « casualty » ne veut pas dire ce qu'on croit.",
    tip: "A casualty n'est pas forcément un mort : c'est toute personne mise hors de combat, blessée ou tuée. Le mot désigne aussi le service des urgences.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Troops were deployed overnight.",
        francais: "Des troupes ont été déployées dans la nuit.",
        note: "Troops est toujours pluriel dans ce sens. A troop désignerait une unité de cavalerie.",
      },
      {
        etranger: "The army withdrew to the border.",
        francais: "L'armée s'est repliée vers la frontière.",
        note: "Withdraw, se retirer. Retreat suppose la défaite, withdraw non.",
      },
      {
        etranger: "A ceasefire came into force at noon.",
        francais: "Un cessez-le-feu est entré en vigueur à midi.",
        note: "Come into force, entrer en vigueur. Ceasefire s'écrit en un mot, parfois avec un trait d'union.",
      },
      {
        etranger: "Casualties were reported on both sides.",
        francais: "Des pertes ont été signalées des deux côtés.",
        note: "A casualty est un blessé ou un mort. Le mot désigne aussi les urgences hospitalières.",
      },
      {
        etranger: "The siege lasted eight months.",
        francais: "Le siège a duré huit mois.",
        note: "A siege, un siège militaire. Lay siege to, assiéger.",
      },
      {
        etranger: "They were taken prisoner.",
        francais: "Ils ont été faits prisonniers.",
        note: "Take someone prisoner, sans article. La formule est figée.",
      },
      {
        etranger: "Supplies were running low.",
        francais: "Les vivres commençaient à manquer.",
        note: "Run low, s'épuiser peu à peu. Supplies est toujours pluriel dans ce sens.",
      },
      {
        etranger: "The regiment was disbanded in 1946.",
        francais: "Le régiment a été dissous en 1946.",
        note: "Disband, dissoudre une unité. Dissolve se dirait d'un parlement.",
      },
      {
        etranger: "He served two tours abroad.",
        francais: "Il a effectué deux missions à l'étranger.",
        note: "A tour of duty, une affectation. Serve, servir sous les drapeaux.",
      },
      {
        etranger: "The front line barely moved.",
        francais: "La ligne de front n'a presque pas bougé.",
        note: "The front line en deux mots ; frontline en un seul comme adjectif.",
      },
    ],
  },

  {
    slug: "en-voc-mode",
    category: "Vocabulaire",
    title: "Vêtements et apparence",
    statement:
      "Fit, suit, match, go with. Quatre verbes que le français rend tous par « aller », et qui ne disent pas du tout la même chose.",
    tip: "Fit, c'est la taille ; suit, c'est ce qui vous avantage ; match et go with, c'est l'accord entre deux pièces. Se tromper de verbe change le compliment.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I had the trousers taken up.",
        francais: "J'ai fait raccourcir le pantalon.",
        note: "Take up, raccourcir ; let down, rallonger. Have something done dit ce qu'on fait faire par un autre.",
      },
      {
        etranger: "They dressed up for the occasion.",
        francais: "Ils se sont mis sur leur trente-et-un.",
        note: "Dress up, s'habiller chic ; dress down, s'habiller décontracté.",
      },
      {
        etranger: "The shoes don't match the belt.",
        francais: "Les chaussures ne vont pas avec la ceinture.",
        note: "Match dit l'accord entre deux pièces. Go with se dit aussi, plus souple.",
      },
      {
        etranger: "She was dressed up for the occasion.",
        francais: "Elle s'était mise sur son trente et un.",
        aussi: ["Elle était habillée pour l'occasion."],
        note: "Dress up, se mettre en tenue. Dress down, s'habiller décontracté.",
      },
      {
        etranger: "The trousers need taking up.",
        francais: "Le pantalon est à raccourcir.",
        note: "Take up, raccourcir un vêtement. Let down dit l'inverse : rallonger.",
      },
      {
        etranger: "It's a bit tight around the waist.",
        francais: "C'est un peu serré à la taille.",
        note: "Tight, serré ; loose, ample. Around the waist, à la taille.",
      },
      {
        etranger: "He looked scruffy at the interview.",
        francais: "Il avait l'air débraillé à l'entretien.",
        note: "Scruffy, négligé ; smart, soigné — smart ne dit pas l'intelligence en anglais britannique.",
      },
      {
        etranger: "She had her hair cut short.",
        francais: "Elle s'est fait couper les cheveux court.",
        note: "Have something done : faire faire. La structure est essentielle et souvent oubliée.",
      },
      {
        etranger: "That style is back in fashion.",
        francais: "Ce style est revenu à la mode.",
        note: "In fashion, out of fashion. Fashionable comme adjectif.",
      },
      {
        etranger: "He looks scruffy today.",
        francais: "Il a l'air négligé aujourd'hui.",
        note: "Scruffy, mal soigné sans être sale. Smart dit l'inverse en anglais britannique.",
      },
    ],
  },

  {
    slug: "en-voc-enfance",
    category: "Vocabulaire",
    title: "L'enfance et l'école",
    statement:
      "Toddler, grow up, tell off, spoil. Le vocabulaire de l'enfance est celui des conversations familiales, et il est plein de verbes à particule.",
    tip: "Grow up veut dire grandir ; grow, pousser. On dit I grew up in Lyon, jamais « I grew in Lyon ».",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I grew up in the countryside.",
        francais: "J'ai grandi à la campagne.",
        note: "Grow up pour une personne. Grow seul se dit d'une plante ou d'une taille.",
      },
      {
        etranger: "She's a toddler now.",
        francais: "C'est un tout-petit maintenant.",
        note: "A toddler, l'enfant qui commence à marcher. Formé sur toddle, marcher en chancelant.",
      },
      {
        etranger: "He got told off at school.",
        francais: "Il s'est fait gronder à l'école.",
        note: "Tell someone off, gronder. Get + participe est la forme passive familière.",
      },
      {
        etranger: "They spoil their grandchildren.",
        francais: "Ils gâtent leurs petits-enfants.",
        note: "Spoil, gâter. Le même verbe dit aussi gâcher : spoil the ending.",
      },
      {
        etranger: "He's teething at the moment.",
        francais: "Il fait ses dents en ce moment.",
        note: "Teethe, faire ses dents. Le verbe est formé sur teeth, pluriel de tooth.",
      },
      {
        etranger: "The children are playing up.",
        francais: "Les enfants font des caprices.",
        aussi: ["Les enfants sont insupportables."],
        note: "Play up, mal se tenir. Se dit aussi d'une machine capricieuse.",
      },
      {
        etranger: "He's grown out of his shoes.",
        francais: "Il ne rentre plus dans ses chaussures.",
        note: "Grow out of, ne plus rentrer dans — se dit aussi d'une habitude qu'on finit par perdre.",
      },
      {
        etranger: "He's a picky eater.",
        francais: "Il fait le difficile à table.",
        note: "Picky, difficile. Formé sur pick, choisir : celui qui trie.",
      },
      {
        etranger: "Wipe your feet before coming in.",
        francais: "Essuie-toi les pieds avant d'entrer.",
        note: "Wipe, essuyer. Le possessif your remplace l'article français.",
      },
      {
        etranger: "She's outgrown all her clothes.",
        francais: "Elle ne rentre plus dans aucun de ses vêtements.",
        note: "Outgrow, devenir trop grand pour. Le préfixe out- dit le dépassement.",
      },
    ],
  },

  {
    slug: "en-voc-fin-de-vie",
    category: "Vocabulaire",
    title: "Vieillir, mourir, hériter",
    statement:
      "Pass away, the late, bereaved, estate. L'anglais entoure la mort d'euphémismes obligatoires, et employer le mot cru là où il faut le voilé est une faute sociale.",
    tip: "Die est neutre à l'écrit et brutal dans une conversation avec un proche. Pass away est le registre attendu ; passed on et lost sont plus doux encore.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Her mother passed away last year.",
        francais: "Sa mère est décédée l'an dernier.",
        note: "Pass away, le registre attendu en conversation. Die serait brutal ici.",
      },
      {
        etranger: "The late Mr Bennet left no will.",
        francais: "Feu M. Bennet n'a pas laissé de testament.",
        note: "The late + nom, feu. A will, un testament — le mot dit aussi la volonté.",
      },
      {
        etranger: "We lost him in the spring.",
        francais: "Nous l'avons perdu au printemps.",
        note: "Lose someone, le registre le plus doux, et celui de la famille.",
      },
      {
        etranger: "The bereaved family asked for privacy.",
        francais: "La famille endeuillée a demandé à être laissée en paix.",
        note: "Bereaved, endeuillé. Bereavement, le deuil comme situation.",
      },
      {
        etranger: "The estate was divided equally.",
        francais: "La succession a été partagée à parts égales.",
        note: "An estate, l'ensemble des biens laissés. Le mot dit aussi un domaine.",
      },
      {
        etranger: "He's well into his eighties.",
        francais: "Il a largement dépassé les quatre-vingts ans.",
        note: "Well into one's eighties, l'euphémisme courant pour dire le grand âge.",
      },
      {
        etranger: "He's in a care home now.",
        francais: "Il est en maison de retraite maintenant.",
        note: "A care home en anglais britannique, a nursing home quand des soins sont donnés.",
      },
      {
        etranger: "The funeral is on Thursday.",
        francais: "L'enterrement a lieu jeudi.",
        note: "A funeral, la cérémonie ; a burial, la mise en terre ; a cremation, l'incinération.",
      },
      {
        etranger: "He inherited the house from an aunt.",
        francais: "Il a hérité de la maison d'une tante.",
        note: "Inherit something from someone, sans préposition devant l'objet.",
      },
      {
        etranger: "They're still coming to terms with it.",
        francais: "Ils sont encore en train de l'accepter.",
        aussi: ["Ils font encore leur deuil."],
        note: "Come to terms with, accepter au terme d'un travail. Grieve dit le chagrin lui-même.",
      },
    ],
  },
];
