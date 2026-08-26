/**
 * Anglais — les idiotismes, et les mots du jugement.
 *
 * Fin de la quatrième passe. Les idiotismes sont ce qui reste incompréhensible
 * quand on connaît tous les mots d'une phrase : « to have a chip on one's
 * shoulder » ne se déduit d'aucun de ses termes. Ils s'apprennent par familles
 * d'images — le corps, les animaux, l'argent et le temps — parce que l'image
 * aide à retenir ce que la logique ne prédit pas.
 *
 * Les trois dernières séries portent sur le jugement : décrire un caractère,
 * porter une appréciation, nommer une notion abstraite. C'est ce qu'on demande
 * à un C1 et que le vocabulaire concret ne permet jamais.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_IDIOMES_CARACTERE: LotCartes[] = [
  {
    slug: "en-verbes-parole",
    category: "Verbes",
    title: "Toutes les façons de dire",
    statement:
      "Mutter, murmur, snap, blurt, drawl. Un roman anglais ne dit presque jamais « he said » : le verbe porte le ton, et le ton porte le personnage.",
    tip: "Ces verbes remplacent say tout en le qualifiant. Les traduire par « dire » plus un adverbe fait perdre exactement ce qu'ils apportent.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "He muttered something under his breath.",
        francais: "Il a marmonné quelque chose entre ses dents.",
        note: "Mutter, parler bas et de mauvaise humeur. Under one's breath, à mi-voix.",
      },
      {
        etranger: "She murmured a reply.",
        francais: "Elle a murmuré une réponse.",
        note: "Murmur est doux, mutter est maussade. La différence est de ton, pas de volume.",
      },
      {
        etranger: "Don't snap at me.",
        francais: "Ne me réponds pas si sèchement.",
        aussi: ["Ne t'énerve pas contre moi."],
        note: "Snap at someone, répondre sèchement. Le verbe dit aussi le claquement.",
      },
      {
        etranger: "He blurted out the whole story.",
        francais: "Il a lâché toute l'histoire d'un coup.",
        note: "Blurt out, dire sans réfléchir ce qu'on aurait dû taire.",
      },
      {
        etranger: "She stammered an apology.",
        francais: "Elle a bredouillé une excuse.",
        note: "Stammer et stutter sont synonymes ; stammer est le terme britannique, stutter l'américain. Tous deux servent pour l'hésitation passagère comme pour le trouble installé.",
      },
      {
        etranger: "He rambled on for an hour.",
        francais: "Il a divagué pendant une heure.",
        aussi: ["Il a parlé sans fin pendant une heure."],
        note: "Ramble on, parler longuement et sans suite. On insiste sur la durée.",
      },
      {
        etranger: "They chatted away happily.",
        francais: "Ils bavardaient gaiement.",
        note: "Chat away, bavarder sans se soucier du temps. Away marque la continuité.",
      },
      {
        etranger: "She snapped back without thinking.",
        francais: "Elle a répliqué du tac au tac.",
        note: "Snap back, riposter aussitôt. Back marque la réplique.",
      },
      {
        etranger: "He trailed off mid-sentence.",
        francais: "Il s'est interrompu au milieu de sa phrase.",
        note: "Trail off, laisser une phrase s'éteindre d'elle-même, sans être coupé.",
      },
      {
        etranger: "She whispered it in my ear.",
        francais: "Elle me l'a chuchoté à l'oreille.",
        note: "Whisper, chuchoter sans voix. Murmur garde un filet de voix.",
      },
    ],
  },

  {
    slug: "en-adjectifs-caractere",
    category: "Vocabulaire",
    title: "Décrire quelqu'un",
    statement:
      "Easy-going, down-to-earth, thoughtful, needy. L'anglais décrit le caractère par des adjectifs composés, et le français doit souvent faire une phrase.",
    tip: "Les composés à traits d'union se lisent littéralement : down-to-earth, les pieds sur terre ; easy-going, qui prend les choses comme elles viennent.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "She's very easy-going.",
        francais: "Elle est très accommodante.",
        aussi: ["Elle prend les choses comme elles viennent."],
        note: "Easy-going, sans exigences ni tension. Le trait d'union est obligatoire.",
      },
      {
        etranger: "He's quite down-to-earth.",
        francais: "Il a les pieds sur terre.",
        note: "Down-to-earth, réaliste et sans prétention. Toujours un compliment.",
      },
      {
        etranger: "That was thoughtful of you.",
        francais: "C'est attentionné de ta part.",
        note: "Thoughtful, qui pense aux autres. Thoughtless dit l'inverse : étourdi.",
      },
      {
        etranger: "He can be a bit needy.",
        francais: "Il peut être un peu collant.",
        aussi: ["Il a un peu trop besoin des autres."],
        note: "Needy, en demande d'attention. Le mot est un reproche.",
      },
      {
        etranger: "She's a good listener.",
        francais: "Elle sait écouter.",
        note: "A good listener : l'anglais nominalise là où le français emploie un verbe.",
      },
      {
        etranger: "He's set in his ways.",
        francais: "Il a ses habitudes et n'en démord pas.",
        note: "Set in one's ways, figé dans ses habitudes. Se dit surtout d'une personne âgée.",
      },
      {
        etranger: "She doesn't suffer fools gladly.",
        francais: "Elle n'a aucune patience pour les imbéciles.",
        note: "Formule figée, souvent employée comme éloge déguisé de la franchise.",
      },
      {
        etranger: "He's rather self-effacing.",
        francais: "Il s'efface volontiers.",
        aussi: ["Il est très discret sur lui-même."],
        note: "Self-effacing, qui se met en retrait. Compliment dans l'usage britannique.",
      },
      {
        etranger: "They're a close-knit family.",
        francais: "C'est une famille très soudée.",
        note: "Close-knit, tricoté serré. L'image du tricot est explicite.",
      },
      {
        etranger: "She's got a lot of nerve.",
        francais: "Elle a un sacré culot.",
        aussi: ["Elle ne manque pas de cran."],
        note: "Selon le ton, admiration ou reproche. Nerve dit ici l'audace, pas le nerf.",
      },
    ],
  },

  {
    slug: "en-adjectifs-jugement",
    category: "Expressions",
    title: "Porter une appréciation",
    statement:
      "Sound, patchy, half-baked, watertight. L'anglais juge une idée, un texte ou un plan avec des adjectifs très imagés, et beaucoup viennent de la cuisine ou de la mer.",
    tip: "Sound veut dire solide quand il qualifie un raisonnement, et n'a rien à voir avec le son. C'est l'un des adjectifs les plus employés de l'évaluation.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The reasoning is sound.",
        francais: "Le raisonnement est solide.",
        note: "Sound comme adjectif, solide. Rien à voir avec le son : l'homonymie est totale.",
      },
      {
        etranger: "The evidence is patchy.",
        francais: "Les preuves sont inégales.",
        aussi: ["Les éléments sont lacunaires."],
        note: "Patchy, en pièces et morceaux. Formé sur patch, la pièce de tissu.",
      },
      {
        etranger: "It's a half-baked idea.",
        francais: "C'est une idée mal ficelée.",
        note: "Half-baked, à moitié cuit. L'image culinaire dit l'inachèvement.",
      },
      {
        etranger: "The argument is watertight.",
        francais: "L'argument est inattaquable.",
        note: "Watertight, étanche. L'image navale : rien ne peut s'y infiltrer.",
      },
      {
        etranger: "The plan is far-fetched.",
        francais: "Le projet est tiré par les cheveux.",
        note: "Far-fetched, cherché trop loin. L'image diffère de celle du français.",
      },
      {
        etranger: "That's a sweeping statement.",
        francais: "C'est une généralisation abusive.",
        note: "Sweeping, qui balaie tout. Le mot est presque toujours un reproche.",
      },
      {
        etranger: "The report is thin on detail.",
        francais: "Le rapport manque de précisions.",
        note: "Thin on something, pauvre en. Formule très employée dans les critiques.",
      },
      {
        etranger: "It's a moot point.",
        francais: "C'est un point discutable.",
        aussi: ["La question reste ouverte."],
        note: "Moot, discutable — et en anglais américain, devenu sans objet. Les deux sens coexistent.",
      },
      {
        etranger: "The findings are inconclusive.",
        francais: "Les résultats ne permettent pas de conclure.",
        note: "Inconclusive, qui ne tranche pas. Le mot ne dit pas que le résultat est négatif.",
      },
      {
        etranger: "That's beside the point.",
        francais: "C'est hors sujet.",
        aussi: ["Ça n'a rien à voir."],
        note: "Beside the point, à côté de la question. Besides veut dire par ailleurs.",
      },
    ],
  },

  {
    slug: "en-noms-abstraits-2",
    category: "Vocabulaire",
    title: "Nommer une notion",
    statement:
      "Scope, extent, stance, rationale. Les noms abstraits de l'écrit anglophone sont peu nombreux et reviennent partout, et le français en traduit plusieurs par le même mot.",
    tip: "Scope est l'étendue de ce qu'on couvre, extent le degré auquel une chose est vraie. Le premier délimite, le second mesure.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "That's beyond the scope of this study.",
        francais: "Cela dépasse le cadre de cette étude.",
        note: "The scope, le périmètre couvert. Beyond the scope of est une formule figée.",
      },
      {
        etranger: "To what extent is this true?",
        francais: "Dans quelle mesure est-ce vrai ?",
        note: "To what extent, dans quelle mesure. La question type d'une dissertation anglaise.",
      },
      {
        etranger: "What is their stance on this?",
        francais: "Quelle est leur position là-dessus ?",
        note: "A stance, une position prise publiquement. Position se dit aussi, plus neutre.",
      },
      {
        etranger: "The rationale is not explained.",
        francais: "La logique sous-jacente n'est pas expliquée.",
        aussi: ["Le raisonnement qui le justifie n'est pas exposé."],
        note: "A rationale, la justification raisonnée d'un choix. Le mot n'a pas d'équivalent simple.",
      },
      {
        etranger: "There's a growing body of work.",
        francais: "Les travaux se multiplient.",
        note: "A body of work, un ensemble constitué. A body of evidence se dit de même.",
      },
      {
        etranger: "The gist of it is simple.",
        francais: "L'essentiel est simple.",
        aussi: ["En substance, c'est simple."],
        note: "The gist, l'idée générale. Get the gist, saisir l'essentiel.",
      },
      {
        etranger: "It has serious implications.",
        francais: "Cela a de sérieuses conséquences.",
        note: "Implications, les conséquences non dites. Consequences serait plus direct.",
      },
      {
        etranger: "That's the gist of it.",
        francais: "C'est l'essentiel de l'affaire.",
        aussi: ["Voilà l'idée générale."],
        note: "The gist, la substance d'un propos. Get the gist, saisir l'essentiel sans tout comprendre.",
      },
      {
        etranger: "The premise is questionable.",
        francais: "Le postulat est discutable.",
        note: "A premise, une prémisse. Le pluriel premises désigne des locaux : le faux ami guette.",
      },
      {
        etranger: "It's a matter of emphasis.",
        francais: "C'est une question d'accent.",
        aussi: ["C'est affaire de priorité."],
        note: "Emphasis, l'insistance. Place emphasis on, mettre l'accent sur.",
      },
    ],
  },

  {
    slug: "en-idiomes-corps",
    category: "Expressions",
    title: "Idiotismes du corps",
    statement:
      "Keep an eye on, get cold feet, a chip on one's shoulder. Le corps fournit les images les plus fréquentes de l'anglais, et presque aucune ne se traduit mot à mot.",
    tip: "Quand une phrase mentionne une partie du corps sans raison apparente, c'est presque toujours un idiotisme. Le sens littéral n'a alors aucune valeur.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Keep an eye on the kettle.",
        francais: "Surveille la bouilloire.",
        note: "Keep an eye on, surveiller. Au pluriel, keep your eyes peeled : ouvrir l'œil.",
      },
      {
        etranger: "He got cold feet at the last minute.",
        francais: "Il s'est dégonflé au dernier moment.",
        aussi: ["Il a pris peur au dernier moment."],
        note: "Get cold feet, renoncer par peur. Se dit surtout d'un engagement.",
      },
      {
        etranger: "She has a chip on her shoulder.",
        francais: "Elle est aigrie.",
        aussi: ["Elle a une revanche à prendre."],
        note: "A chip on one's shoulder, un ressentiment ancien qu'on porte partout.",
      },
      {
        etranger: "It slipped my mind completely.",
        francais: "Ça m'est complètement sorti de la tête.",
        note: "Slip one's mind : le sujet est la chose oubliée, jamais la personne.",
      },
      {
        etranger: "She kept her head throughout.",
        francais: "Elle a gardé son sang-froid du début à la fin.",
        note: "Keep one's head, garder son calme. Lose one's head dit l'inverse.",
      },
      {
        etranger: "He's pulling your leg.",
        francais: "Il te fait marcher.",
        note: "Pull someone's leg, taquiner. Rien à voir avec tirer.",
      },
      {
        etranger: "I'll give you a hand.",
        francais: "Je vais te donner un coup de main.",
        note: "Give someone a hand, avec ou sans with : give me a hand with this box.",
      },
      {
        etranger: "That's off the top of my head.",
        francais: "Ça me vient comme ça, sans vérifier.",
        note: "Off the top of one's head, de mémoire et sans garantie.",
      },
      {
        etranger: "She turned a blind eye to it.",
        francais: "Elle a fermé les yeux là-dessus.",
        note: "Turn a blind eye, ignorer volontairement. L'expression viendrait de Nelson.",
      },
      {
        etranger: "He's got a sweet tooth.",
        francais: "Il aime beaucoup les sucreries.",
        aussi: ["Il est très porté sur le sucré.", "Il a un faible pour le sucré."],
        note: "A sweet tooth, le goût du sucré. Aucun équivalent français d'un seul mot.",
      },
    ],
  },

  {
    slug: "en-idiomes-animaux",
    category: "Expressions",
    title: "Idiotismes animaliers",
    statement:
      "Let the cat out of the bag, a dark horse, straight from the horse's mouth. Les animaux fournissent la deuxième famille d'images de l'anglais, et le français choisit d'autres bêtes.",
    tip: "Traduire l'animal donne presque toujours faux : « it's raining cats and dogs » n'a rien à voir avec des chats. Il faut retenir l'expression entière.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "He let the cat out of the bag.",
        francais: "Il a vendu la mèche.",
        note: "Let the cat out of the bag, révéler un secret par mégarde.",
      },
      {
        etranger: "She's a bit of a dark horse.",
        francais: "Elle cache bien son jeu.",
        note: "A dark horse, quelqu'un dont on ignore les talents jusqu'au moment décisif.",
      },
      {
        etranger: "I heard it straight from the horse's mouth.",
        francais: "Je le tiens de source sûre.",
        note: "L'image vient de l'examen des dents d'un cheval pour en connaître l'âge.",
      },
      {
        etranger: "Don't count your chickens.",
        francais: "Ne vends pas la peau de l'ours.",
        note: "La version complète ajoute before they hatch. Les deux langues changent d'animal.",
      },
      {
        etranger: "I smell a rat.",
        francais: "Je sens qu'il y a anguille sous roche.",
        aussi: ["Ça sent le coup fourré."],
        note: "Smell a rat, flairer une entourloupe. Les deux langues changent d'animal : anguille contre rat.",
      },
      {
        etranger: "He's the black sheep of the family.",
        francais: "C'est le mouton noir de la famille.",
        note: "The black sheep of the family : toujours avec of the family dans ce sens-là.",
      },
      {
        etranger: "That's a red herring.",
        francais: "C'est une fausse piste.",
        note: "A red herring, une fausse piste. L'image viendrait du hareng fumé qu'on traînait sur une piste — l'étymologie est discutée.",
      },
      {
        etranger: "She took to it like a duck to water.",
        francais: "Elle s'y est mise comme si elle avait fait ça toute sa vie.",
        note: "Take to something like a duck to water : l'aisance immédiate.",
      },
      {
        etranger: "Hold your horses.",
        francais: "Doucement, pas si vite.",
        note: "Hold your horses, ralentir quelqu'un qui s'emballe.",
      },
      {
        etranger: "It's raining cats and dogs.",
        francais: "Il pleut des cordes.",
        note: "L'expression est un peu vieillie en anglais. Pouring down est plus courant.",
      },
    ],
  },

  {
    slug: "en-idiomes-argent-temps",
    category: "Expressions",
    title: "Idiotismes de l'argent et du temps",
    statement:
      "Break even, tighten one's belt, in the nick of time, buy time. L'argent et le temps se disent avec les mêmes verbes en anglais, et l'un sert souvent d'image à l'autre.",
    tip: "Spend, save, waste, run out of : quatre verbes qui s'emploient indifféremment pour l'argent et le temps. Le français change de verbe pour le temps.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "We're just about breaking even.",
        francais: "Nous rentrons tout juste dans nos frais.",
        note: "Break even, atteindre l'équilibre. The break-even point, le seuil de rentabilité.",
      },
      {
        etranger: "Everyone is tightening their belts.",
        francais: "Tout le monde se serre la ceinture.",
        note: "Their reprend everyone ; belts reste au pluriel — un belt par personne, même si everyone est singulier.",
      },
      {
        etranger: "He arrived in the nick of time.",
        francais: "Il est arrivé juste à temps.",
        note: "In the nick of time, à la dernière seconde utile. La formule est figée.",
      },
      {
        etranger: "They're trying to buy time.",
        francais: "Ils cherchent à gagner du temps.",
        note: "Buy time, temporiser. L'anglais achète là où le français gagne.",
      },
      {
        etranger: "We're running out of time.",
        francais: "Le temps nous manque.",
        note: "Run out of s'emploie pour le temps comme pour l'argent ou l'essence.",
      },
      {
        etranger: "That was money well spent.",
        francais: "C'était de l'argent bien employé.",
        note: "Money well spent, formule figée. Time well spent se dit de même.",
      },
      {
        etranger: "It cost me a fortune.",
        francais: "Ça m'a coûté une fortune.",
        note: "Cost a fortune est neutre ; cost the earth se dit aussi, plus familier et plus imagé.",
      },
      {
        etranger: "We're on borrowed time.",
        francais: "Nos jours sont comptés.",
        aussi: ["Le temps nous est compté."],
        note: "On borrowed time : du temps qu'on n'aurait plus dû avoir.",
      },
      {
        etranger: "He's living beyond his means.",
        francais: "Il vit au-dessus de ses moyens.",
        note: "Beyond one's means. Means au sens de moyens financiers est toujours pluriel.",
      },
      {
        etranger: "That ship has sailed.",
        francais: "C'est trop tard, l'occasion est passée.",
        aussi: ["Le train est passé."],
        note: "That ship has sailed : l'occasion manquée, définitivement.",
      },
    ],
  },

  {
    slug: "en-voc-humour",
    category: "Expressions",
    title: "Le rire et la moquerie",
    statement:
      "Banter, tease, take the mickey, deadpan. L'humour britannique a un vocabulaire propre, et confondre l'amical et le méchant coûte cher en société.",
    tip: "Banter est une taquinerie entre égaux qui suppose l'affection. Mock est une moquerie qui blesse. Le même geste, deux mots, deux relations.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "It's just banter.",
        francais: "Ce ne sont que des taquineries.",
        note: "Banter suppose l'affection et l'égalité. Le mot sert souvent d'excuse, à tort.",
      },
      {
        etranger: "They were teasing him about it.",
        francais: "Ils le taquinaient là-dessus.",
        note: "Tease, taquiner. Plus doux que mock, plus appuyé que joke.",
      },
      {
        etranger: "Are you taking the mickey?",
        francais: "Tu te moques de moi ?",
        note: "Take the mickey, familier et très britannique. La version crue emploie un autre mot.",
      },
      {
        etranger: "He said it completely deadpan.",
        francais: "Il l'a dit sans se départir de son sérieux.",
        note: "Deadpan, le visage impassible d'un pince-sans-rire. Adjectif et adverbe.",
      },
      {
        etranger: "The joke fell flat.",
        francais: "La blague est tombée à plat.",
        note: "Fall flat, ne produire aucun effet — se dit d'une blague, d'un discours, d'une tentative en général.",
      },
      {
        etranger: "She has a dry sense of humour.",
        francais: "Elle a un humour pince-sans-rire.",
        note: "Dry, sec et sans démonstration. C'est le compliment britannique par excellence.",
      },
      {
        etranger: "He can't take a joke.",
        francais: "Il ne supporte pas qu'on le taquine.",
        note: "Take a joke, encaisser la plaisanterie. La négation est l'emploi habituel.",
      },
      {
        etranger: "They were poking fun at the accent.",
        francais: "Ils se moquaient de l'accent.",
        note: "Poke fun at, se moquer sans méchanceté. Mock serait franchement hostile.",
      },
      {
        etranger: "That's a running joke here.",
        francais: "C'est une blague récurrente ici.",
        note: "A running joke, une plaisanterie qui revient. Running dit la continuité.",
      },
      {
        etranger: "I was only kidding.",
        francais: "Je plaisantais, c'est tout.",
        note: "Kid comme verbe, plaisanter. Le nom veut dire enfant : aucune parenté de sens.",
      },
    ],
  },
];
