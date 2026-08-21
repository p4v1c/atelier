/**
 * Anglais — ce que les sens perçoivent.
 *
 * Quatrième passe. Un apprenant de B2 sait dire ce qu'il pense ; il ne sait
 * souvent pas dire ce qu'il voit, ce qu'il entend et ce qu'il touche. C'est le
 * vocabulaire le plus fréquent d'un roman et le plus absent des manuels, parce
 * qu'il ne sert à aucune situation type — ni à la gare, ni à l'hôtel, ni en
 * réunion. Il ne sert qu'à décrire, ce qui est précisément le niveau C1.
 *
 * Les verbes de mouvement et de manipulation ferment la série : là où le
 * français dit « marcher » et « prendre », l'anglais impose de choisir, et
 * chaque choix informe sur l'état de celui qui agit.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_SENSATIONS: LotCartes[] = [
  {
    slug: "en-voc-couleurs-matieres",
    category: "Vocabulaire",
    title: "Couleurs et matières",
    statement:
      "Navy, tan, greyish, weathered. L'anglais nomme les nuances par des objets — le sable, la marine, la rouille — et fabrique des approximations avec -ish.",
    tip: "Le suffixe -ish sur une couleur veut dire « tirant sur » : greenish, reddish. Sur un nombre, il veut dire « environ » : fortyish.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "She wore a navy coat.",
        francais: "Elle portait un manteau bleu marine.",
        note: "Navy seul suffit : navy blue est possible mais redondant.",
      },
      {
        etranger: "The walls were a greyish white.",
        francais: "Les murs étaient d'un blanc grisâtre.",
        note: "-ish dit l'approximation. Greyish en anglais britannique, grayish en américain.",
      },
      {
        etranger: "The leather has worn smooth.",
        francais: "Le cuir s'est patiné.",
        aussi: ["Le cuir est devenu lisse à l'usage."],
        note: "Wear + adjectif : évoluer vers un état par l'usage. Wear thin, wear smooth.",
      },
      {
        etranger: "It's made of solid oak.",
        francais: "C'est en chêne massif.",
        note: "Made of quand la matière reste visible ; made from quand elle est transformée.",
      },
      {
        etranger: "The metal had rusted through.",
        francais: "Le métal était rouillé de part en part.",
        note: "Through dit que la corrosion a traversé. Rust est verbe autant que nom.",
      },
      {
        etranger: "The fabric is slightly see-through.",
        francais: "Le tissu est légèrement transparent.",
        note: "See-through, familier et courant. Sheer se dit d'un tissu fin et voulu tel.",
      },
      {
        etranger: "The paint is peeling off.",
        francais: "La peinture s'écaille.",
        note: "Peel off pour ce qui se détache en plaques. Flake off pour de petits éclats.",
      },
      {
        etranger: "A tan leather bag.",
        francais: "Un sac en cuir fauve.",
        note: "Tan, le brun clair du cuir tanné. Le mot dit aussi le bronzage.",
      },
      {
        etranger: "The wood has gone dark with age.",
        francais: "Le bois a foncé avec le temps.",
        note: "Go + adjectif marque un changement souvent subi : go dark, go grey, go bad.",
      },
      {
        etranger: "It's a weathered stone wall.",
        francais: "C'est un mur de pierre patiné par les intempéries.",
        note: "Weathered, marqué par le temps qu'il fait. Rien à voir avec l'usure d'usage.",
      },
    ],
  },

  {
    slug: "en-voc-formes-mesures",
    category: "Vocabulaire",
    title: "Formes, tailles et mesures",
    statement:
      "Roughly, barely, a good, a solid. L'anglais approxime avec une précision étonnante, et chacun de ces mots dit un sens différent de l'écart.",
    tip: "A good ten minutes veut dire au moins dix, sans doute plus. Barely ten veut dire tout juste dix, sans doute moins. Le nombre est le même.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "It took a good two hours.",
        francais: "Ça a bien pris deux heures.",
        note: "A good + nombre : au moins ce chiffre, probablement davantage.",
      },
      {
        etranger: "He's barely twenty.",
        francais: "Il a tout juste vingt ans.",
        note: "Barely, à peine, avec l'idée qu'on est en dessous plutôt qu'au-dessus.",
      },
      {
        etranger: "The room is roughly square.",
        francais: "La pièce est à peu près carrée.",
        note: "Roughly pour une approximation neutre. About se dit aussi, plus familier.",
      },
      {
        etranger: "It's about waist-high.",
        francais: "Ça m'arrive à peu près à la taille.",
        note: "Waist-high, knee-deep, shoulder-width : le corps sert d'étalon.",
      },
      {
        etranger: "The path narrows further on.",
        francais: "Le chemin se rétrécit plus loin.",
        note: "Narrow est verbe autant qu'adjectif. Widen dit l'inverse.",
      },
      {
        etranger: "The box is twice as deep.",
        francais: "La boîte est deux fois plus profonde.",
        note: "Twice as + adjectif + as. Half as dit la moitié.",
      },
      {
        etranger: "It's not quite big enough.",
        francais: "Ce n'est pas tout à fait assez grand.",
        note: "Not quite dit qu'on approche sans y être. Not nearly dirait qu'on en est loin.",
      },
      {
        etranger: "Cut it lengthways.",
        francais: "Coupe-le dans la longueur.",
        note: "Lengthways ou lengthwise. Crossways pour la largeur.",
      },
      {
        etranger: "The gap is a couple of inches.",
        francais: "L'écart fait quelques centimètres.",
        note: "A couple of dit deux ou trois, sans précision. L'anglais britannique mesure encore en pouces.",
      },
      {
        etranger: "It weighs next to nothing.",
        francais: "Ça ne pèse presque rien.",
        note: "Next to nothing, presque rien. La formule vaut pour le poids comme pour le prix.",
      },
    ],
  },

  {
    slug: "en-voc-odeurs-gouts",
    category: "Vocabulaire",
    title: "Odeurs et saveurs",
    statement:
      "Bland, tangy, stale, rich. Le vocabulaire du goût anglais est plus précis que le nôtre, et « bland » n'a pas d'équivalent français d'un seul mot.",
    tip: "Smell et taste s'emploient sans complément pour dire l'impression : it smells nice, it tastes odd. Avec of, ils désignent la source : it smells of smoke.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The soup is rather bland.",
        francais: "La soupe est plutôt fade.",
        aussi: ["La soupe manque de goût."],
        note: "Bland dit l'absence de caractère, pas l'absence de sel. Tasteless serait plus dur.",
      },
      {
        etranger: "It smells of woodsmoke.",
        francais: "Ça sent le feu de bois.",
        note: "Smell of + la source. Smell like dirait la ressemblance avec autre chose.",
      },
      {
        etranger: "The bread has gone stale.",
        francais: "Le pain est rassis.",
        note: "Stale pour ce qui a séché ; off pour ce qui a tourné. Les deux ne s'échangent pas.",
      },
      {
        etranger: "It has a tangy aftertaste.",
        francais: "Ça laisse un arrière-goût acidulé.",
        note: "Tangy, acidulé et vif. An aftertaste, ce qui reste après.",
      },
      {
        etranger: "The sauce is too rich for me.",
        francais: "La sauce est trop lourde pour moi.",
        note: "Rich pour un plat gras et dense. Le mot n'est pas un reproche en soi.",
      },
      {
        etranger: "There's a faint smell of damp.",
        francais: "Il y a une légère odeur d'humidité.",
        note: "Faint, à peine perceptible. Damp comme nom désigne l'humidité d'un mur.",
      },
      {
        etranger: "It tastes slightly burnt.",
        francais: "Ça a un léger goût de brûlé.",
        note: "Taste + adjectif, sans of. Avec of, il faudrait un nom : taste of burning.",
      },
      {
        etranger: "The cheese is quite pungent.",
        francais: "Le fromage est assez fort.",
        aussi: ["Le fromage a une odeur puissante."],
        note: "Pungent se dit d'une odeur ou d'un goût qui pique. Strong serait plus vague.",
      },
      {
        etranger: "It leaves your mouth dry.",
        francais: "Ça assèche la bouche.",
        note: "Leave + complément + adjectif : la structure décrit l'effet laissé.",
      },
      {
        etranger: "The fruit is not quite ripe.",
        francais: "Le fruit n'est pas tout à fait mûr.",
        note: "Ripe, mûr. Overripe, trop mûr. Le verbe ripen dit le mûrissement.",
      },
    ],
  },

  {
    slug: "en-voc-sons",
    category: "Vocabulaire",
    title: "Bruits et silences",
    statement:
      "Creak, rattle, hum, thud. L'anglais a un mot pour chaque bruit, et ces mots sont souvent des onomatopées devenues verbes — ce que le français ne fait presque jamais.",
    tip: "Ces verbes s'emploient au continu pour un bruit qui dure : the fridge is humming. Au prétérit simple, ils désignent un bruit unique : the door creaked.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The floorboards creaked underfoot.",
        francais: "Le plancher craquait sous les pas.",
        note: "Creak, le grincement du bois ou d'un gond. Underfoot, sous les pieds.",
      },
      {
        etranger: "The windows rattled in the wind.",
        francais: "Les fenêtres tremblaient dans le vent.",
        note: "Rattle, le bruit de ce qui vibre sans être fixé. Le nom a rattle est aussi un hochet.",
      },
      {
        etranger: "The fridge hums all night.",
        francais: "Le réfrigérateur ronronne toute la nuit.",
        note: "Hum, un bourdonnement continu et grave. Le verbe dit aussi fredonner.",
      },
      {
        etranger: "Something landed with a thud.",
        francais: "Quelque chose est tombé avec un bruit sourd.",
        note: "A thud, le choc mat d'un objet lourd. A thump serait plus violent.",
      },
      {
        etranger: "The rain drummed on the roof.",
        francais: "La pluie tambourinait sur le toit.",
        note: "Drum on, tambouriner. L'instrument est devenu verbe.",
      },
      {
        etranger: "The crowd fell silent.",
        francais: "La foule s'est tue.",
        note: "Fall silent : le basculement, pas l'état. Be silent dirait l'état.",
      },
      {
        etranger: "The tyres screeched on the tarmac.",
        francais: "Les pneus ont crissé sur le bitume.",
        note: "Screech, un cri strident, de pneus ou d'oiseau. Tyre en anglais britannique.",
      },
      {
        etranger: "I could hear him muttering.",
        francais: "Je l'entendais marmonner.",
        note: "Mutter, parler bas et pour soi, souvent de mauvaise humeur.",
      },
      {
        etranger: "The room echoed with laughter.",
        francais: "La pièce résonnait de rires.",
        note: "Echo with, résonner de. La préposition est with, jamais of.",
      },
      {
        etranger: "There wasn't a sound.",
        francais: "On n'entendait pas un bruit.",
        note: "A sound dans une négation vaut « le moindre bruit ». Not a sound seul suffit.",
      },
    ],
  },

  {
    slug: "en-voc-lumiere",
    category: "Vocabulaire",
    title: "Lumière et obscurité",
    statement:
      "Glare, glow, flicker, dim. Cinq verbes pour ce que le français dit avec « briller », et chacun décrit une lumière différente.",
    tip: "Glow est une lumière chaude et sans source visible ; glare une lumière qui blesse l'œil. Le second est presque toujours un reproche.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The embers glowed in the dark.",
        francais: "Les braises rougeoyaient dans le noir.",
        note: "Glow, une lueur chaude et continue, sans flamme.",
      },
      {
        etranger: "The sun glared off the water.",
        francais: "Le soleil se réverbérait sur l'eau.",
        aussi: ["Le soleil éblouissait en se reflétant sur l'eau."],
        note: "Glare, une lumière qui blesse. Le nom a glare est aussi un regard noir.",
      },
      {
        etranger: "The bulb flickered and went out.",
        francais: "L'ampoule a vacillé puis s'est éteinte.",
        note: "Flicker, vaciller par intermittence. Le verbe se dit aussi d'un espoir.",
      },
      {
        etranger: "Could you dim the lights?",
        francais: "Peux-tu baisser les lumières ?",
        note: "Dim, verbe et adjectif. A dimmer est le variateur.",
      },
      {
        etranger: "Light spilled from the doorway.",
        francais: "La lumière se déversait par la porte.",
        note: "Spill, se répandre comme un liquide. L'image est très employée pour la lumière.",
      },
      {
        etranger: "The room was pitch dark.",
        francais: "La pièce était plongée dans le noir complet.",
        note: "Pitch dark, noir comme la poix. La collocation est figée.",
      },
      {
        etranger: "The screen kept glaring at me.",
        francais: "L'écran m'éblouissait sans arrêt.",
        note: "Keep + gérondif dit la répétition agaçante.",
      },
      {
        etranger: "Shadows lengthened across the lawn.",
        francais: "Les ombres s'allongeaient sur la pelouse.",
        note: "Lengthen, s'allonger. Le verbe appartient surtout au récit.",
      },
      {
        etranger: "A shaft of light cut through the dust.",
        francais: "Un rai de lumière traversait la poussière.",
        note: "A shaft of light, un rai. L'image est celle d'une hampe.",
      },
      {
        etranger: "The stars were out.",
        francais: "Les étoiles étaient sorties.",
        aussi: ["Le ciel était étoilé."],
        note: "Be out se dit des astres visibles : the sun is out, the moon is out.",
      },
    ],
  },

  {
    slug: "en-voc-textures",
    category: "Vocabulaire",
    title: "Le toucher",
    statement:
      "Sticky, slippery, coarse, brittle. Le vocabulaire du toucher est celui qu'on emploie le plus dans une cuisine et un atelier, et le moins dans un manuel.",
    tip: "Beaucoup de ces adjectifs se forment sur un nom plus -y : sticky de stick, grainy de grain, silky de silk. Le procédé est productif et se devine.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "My hands are sticky.",
        francais: "J'ai les mains collantes.",
        note: "Sticky, formé sur stick, coller. Le procédé -y est très productif.",
      },
      {
        etranger: "The steps are slippery when wet.",
        francais: "Les marches sont glissantes quand elles sont mouillées.",
        note: "Slippery, formé sur slip, glisser. La formule est celle des panneaux.",
      },
      {
        etranger: "The cloth feels coarse.",
        francais: "Le tissu est rêche au toucher.",
        note: "Feel + adjectif pour l'impression tactile, sans complément.",
      },
      {
        etranger: "The bones become brittle with age.",
        francais: "Les os deviennent cassants avec l'âge.",
        note: "Brittle, cassant sans se déformer. Fragile serait plus large.",
      },
      {
        etranger: "The surface is perfectly smooth.",
        francais: "La surface est parfaitement lisse.",
        note: "Smooth s'oppose à rough. Le verbe smooth out veut dire aplanir.",
      },
      {
        etranger: "The dough is too crumbly.",
        francais: "La pâte est trop friable.",
        note: "Crumbly, formé sur crumb, la miette. Le verbe crumble dit l'effritement.",
      },
      {
        etranger: "The blade is razor-sharp.",
        francais: "La lame est tranchante comme un rasoir.",
        note: "Razor-sharp, collocation figée. Blunt dit l'inverse : émoussé.",
      },
      {
        etranger: "The wool is scratchy on the skin.",
        francais: "La laine gratte la peau.",
        note: "Scratchy, qui gratte. Itchy dit plutôt la démangeaison ressentie.",
      },
      {
        etranger: "The paint is still tacky.",
        francais: "La peinture est encore poisseuse.",
        note: "Tacky, à peine collant, pas encore sec. Le mot dit aussi le mauvais goût.",
      },
      {
        etranger: "It has a grainy texture.",
        francais: "Ça a une texture granuleuse.",
        note: "Grainy, formé sur grain. Le mot se dit aussi d'une image floue.",
      },
    ],
  },

  {
    slug: "en-verbes-mouvement-2",
    category: "Verbes",
    title: "Toutes les façons de marcher",
    statement:
      "Stroll, stride, trudge, limp, dash. Là où le français dit « marcher », l'anglais impose de choisir — et le choix dit l'humeur, l'état et la hâte.",
    tip: "Ces verbes ne se distinguent pas par la vitesse mais par ce qu'ils révèlent : stride dit l'assurance, trudge la fatigue, shuffle l'usure ou l'embarras.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "They ambled back to the car.",
        francais: "Ils sont revenus tranquillement à la voiture.",
        note: "Amble, marcher sans but ni hâte. Proche de stroll, un peu plus lent encore.",
      },
      {
        etranger: "He strode into the room.",
        francais: "Il est entré à grands pas.",
        note: "Stride dit l'assurance. Prétérit strode, participe stridden.",
      },
      {
        etranger: "They trudged through the snow.",
        francais: "Ils avançaient péniblement dans la neige.",
        note: "Trudge, marcher lourdement et à contrecœur.",
      },
      {
        etranger: "She's limping on her left leg.",
        francais: "Elle boite de la jambe gauche.",
        note: "Limp, boiter. Le mot comme adjectif veut dire mou, ce qui n'a aucun rapport.",
      },
      {
        etranger: "I dashed to catch the bus.",
        francais: "J'ai piqué un sprint pour attraper le bus.",
        aussi: ["J'ai couru pour attraper le bus."],
        note: "Dash, se précipiter sur une courte distance. A dash est aussi un tiret.",
      },
      {
        etranger: "He shuffled to the door.",
        francais: "Il a traîné les pieds jusqu'à la porte.",
        note: "Shuffle, marcher sans lever les pieds. Le verbe dit aussi battre les cartes.",
      },
      {
        etranger: "They wandered around for an hour.",
        francais: "Ils ont erré pendant une heure.",
        note: "Wander, aller sans direction. Wonder, avec un o, veut dire se demander.",
      },
      {
        etranger: "She tiptoed past the door.",
        francais: "Elle est passée devant la porte sur la pointe des pieds.",
        note: "Tiptoe, verbe formé sur la pointe du pied. Past comme préposition de passage.",
      },
      {
        etranger: "He staggered to his feet.",
        francais: "Il s'est relevé en titubant.",
        note: "Stagger, tituber. To one's feet, la formule pour se remettre debout.",
      },
      {
        etranger: "We made our way back slowly.",
        francais: "Nous sommes rentrés lentement.",
        note: "Make one's way, se frayer un chemin. La formule sous-entend l'effort.",
      },
    ],
  },

  {
    slug: "en-verbes-manipulation",
    category: "Verbes",
    title: "Prendre, tenir, lâcher",
    statement:
      "Grab, clutch, grip, snatch, let go. Cinq verbes pour ce que le français dit avec « prendre » et « tenir », et chacun dit une force et une intention.",
    tip: "Grab est rapide et sans façon, snatch est un vol, clutch dit la peur de lâcher. Le même geste, trois jugements différents.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "He grabbed his coat and left.",
        francais: "Il a attrapé son manteau et il est parti.",
        note: "Grab, saisir vite et sans soin. Neutre dans ce contexte.",
      },
      {
        etranger: "She clutched the railing.",
        francais: "Elle s'est agrippée à la rampe.",
        note: "Clutch dit la peur de lâcher. Le nom désigne aussi l'embrayage.",
      },
      {
        etranger: "Someone snatched her bag.",
        francais: "Quelqu'un lui a arraché son sac.",
        note: "Snatch, arracher des mains. Le verbe suppose presque toujours le vol.",
      },
      {
        etranger: "Grip the handle firmly.",
        francais: "Tiens fermement la poignée.",
        note: "Grip, serrer pour ne pas glisser. Le nom dit aussi la prise d'un pneu.",
      },
      {
        etranger: "Let go of my arm.",
        francais: "Lâche-moi le bras.",
        note: "Let go of + complément. La préposition of ne s'omet pas.",
      },
      {
        etranger: "He handed me the file.",
        francais: "Il m'a tendu le dossier.",
        note: "Hand someone something : deux compléments, sans préposition.",
      },
      {
        etranger: "She slipped it into her pocket.",
        francais: "Elle l'a glissé dans sa poche.",
        note: "Slip something into, glisser discrètement. Le verbe dit aussi déraper.",
      },
      {
        etranger: "Don't drop it.",
        francais: "Ne le fais pas tomber.",
        note: "Drop, laisser tomber, transitif. Fall serait intransitif et involontaire.",
      },
      {
        etranger: "He shoved the box aside.",
        francais: "Il a poussé la caisse sur le côté.",
        note: "Shove, pousser brusquement. Push serait neutre, nudge très léger.",
      },
      {
        etranger: "She reached for the salt.",
        francais: "Elle a tendu la main vers le sel.",
        note: "Reach for, tendre la main vers, sans forcément atteindre.",
      },
    ],
  },
];
