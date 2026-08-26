/**
 * Espagnol — le vocabulaire du monde concret.
 *
 * Cinq champs lexicaux, cinq cours. Le vocabulaire était dispersé entre les
 * séries de tournures : on apprenait à commander au restaurant sans jamais
 * apprendre les mots de la cuisine. Ces séries posent un champ entier, avec
 * la règle qui l'organise — et, pour l'espagnol, avec la variante américaine.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_VOCABULAIRE_MUNDO: LotCartes[] = [
  {
    slug: "es-voc-cocina",
    category: "Vocabulaire",
    title: "La cuisine : ingrédients et gestes",
    statement:
      "Cuire, mijoter, faire revenir, éplucher. Les verbes de la cuisine espagnole sont précis, et la moitié des ingrédients changent de nom d'un pays à l'autre.",
    tip: "Cocer, c'est cuire ; cocinar, c'est cuisiner ; coser, c'est coudre. Une lettre sépare la casserole de l'aiguille.",
    difficulty: 1,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les mots de la cuisine espagnole",
      sections: [
        {
          titre: "Les verbes du geste",
          texte:
            "L'espagnol distingue soigneusement les gestes de cuisine, et le français en confond plusieurs sous « faire cuire ».\n\nCocer, c'est cuire par la chaleur humide — à l'eau, à la vapeur. Hervir, c'est bouillir. Freír, c'est frire, à la poêle ou en bain d'huile. Asar, c'est rôtir au four ou à la braise. Hornear, c'est cuire au four sec, pour le pain et les gâteaux. Guisar, c'est mijoter en sauce, et un estofado est un plat mijoté.\n\nSofreír mérite une mention à part : c'est faire revenir doucement à l'huile, et le sofrito qui en résulte — oignon, ail, tomate — est la base de la moitié de la cuisine hispanique.\n\nPour la préparation : pelar, éplucher ; picar, hacher ; cortar, couper ; rallar, râper ; batir, battre ; mezclar, mélanger ; remover, remuer ; escurrir, égoutter ; aliñar, assaisonner une salade.\n\nAttention à deux paires. Cocer et coser sont homophones en Amérique latine, où le c devant e se prononce s : le contexte tranche. Et probar veut dire goûter autant qu'essayer.",
          visuels: [
            {
              type: "tableau",
              titre: "Le geste, et son verbe",
              colonnes: ["En français", "En espagnol", "Exemple"],
              lignes: [
                ["faire bouillir", "hervir", "Hervir el agua."],
                ["cuire à l'eau", "cocer", "Cocer las verduras."],
                ["frire", "freír", "Freír las patatas."],
                ["faire revenir", "sofreír", "Sofreír la cebolla."],
                ["rôtir", "asar", "Asar un pollo."],
                ["cuire au four", "hornear", "Hornear el pan."],
                ["mijoter", "guisar", "Guisar la carne."],
                ["éplucher", "pelar", "Pelar las patatas."],
                ["hacher", "picar", "Picar el ajo."],
                ["battre", "batir", "Batir los huevos."],
              ],
              note: "Le sofrito — oignon, ail, tomate revenus à l'huile — est la base de la cuisine hispanique.",
            },
          ],
        },
        {
          titre: "Les ingrédients qui changent de pays",
          texte:
            "Peu de champs lexicaux varient autant d'une rive à l'autre que celui de la nourriture, et l'écart est parfois total.\n\nLa pomme de terre est patata en Espagne et papa dans presque toute l'Amérique. L'avocat est aguacate au Mexique et en Espagne, palta au Chili, au Pérou et en Argentine. Le haricot est judía en Espagne, frijol au Mexique, poroto dans le Cône Sud, caraota au Venezuela.\n\nLe maïs est maíz partout, mais l'épi se dit mazorca en Espagne, elote au Mexique, choclo dans les Andes.\n\nLa banane est plátano en Espagne, banana en Argentine, guineo dans les Caraïbes — et plátano désigne ailleurs la banane plantain, qui se cuit.\n\nLa fraise est fresa en Espagne et au Mexique, frutilla dans le Cône Sud. Le jus est zumo en Espagne, jugo partout ailleurs.\n\nIl n'y a pas de mot neutre pour tous ces cas : c'est l'un des rares champs où il faut apprendre la variante de la région qu'on fréquente, et reconnaître les autres.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même aliment, deux continents",
              colonnes: [
                {
                  titre: "Espagne",
                  points: [
                    "patata, judía, zumo",
                    "fresa, melocotón, plátano",
                    "mazorca, guisante",
                  ],
                },
                {
                  titre: "Amérique latine",
                  points: [
                    "papa, frijol / poroto, jugo",
                    "frutilla, durazno, banana",
                    "elote / choclo, arveja",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les quantités et la table",
          texte:
            "Pour mesurer, l'espagnol emploie des contenants comme le français, et quelques mots méritent d'être sus.\n\nUna cucharada, une cuillerée à soupe ; una cucharadita, une cuillerée à café — le diminutif fait tout le travail. Un puñado, une poignée ; una pizca, une pincée ; un chorro ou un chorrito, un filet de liquide ; un diente de ajo, une gousse d'ail ; una rodaja, une rondelle ; una loncha, une tranche de charcuterie ; un trozo, un morceau.\n\nPour la table : el plato est l'assiette et le plat, el cuenco le bol, la fuente le plat de service, la sartén la poêle, la olla la marmite, la cazuela la cocotte en terre.\n\nEnfin, trois faux amis de l'assiette. Un plato combinado est un plat unique bon marché, pas un plat composé au sens français. La comida désigne le repas de midi en Espagne, et la nourriture en général ailleurs. Et la cena est le dîner : « la scène » se dit la escena.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Hay que pelar las patatas primero.",
        francais: "Il faut d'abord éplucher les pommes de terre.",
        aussiEtranger: ["Hay que pelar las papas primero."],
        note: "Patata en Espagne, papa en Amérique latine. Hay que + infinitif dit l'obligation impersonnelle.",
      },
      {
        etranger: "Sofríe la cebolla a fuego lento.",
        francais: "Fais revenir l'oignon à feu doux.",
        note: "Sofreír, faire revenir doucement. Le sofrito est la base de la cuisine hispanique.",
      },
      {
        etranger: "Bate los huevos con un poco de sal.",
        francais: "Bats les œufs avec un peu de sel.",
        note: "Batir, battre. Et un poco DE, toujours avec la préposition.",
      },
      {
        etranger: "Deja hervir el agua cinco minutos.",
        francais: "Laisse bouillir l'eau cinq minutes.",
        note: "Hervir, bouillir ; cocer, cuire à l'eau. Les deux ne se remplacent pas.",
      },
      {
        etranger: "Añade una pizca de pimienta.",
        francais: "Ajoute une pincée de poivre.",
        note: "Una pizca, une pincée ; un chorrito, un filet de liquide.",
      },
      {
        etranger: "Necesitamos dos dientes de ajo.",
        francais: "Il nous faut deux gousses d'ail.",
        note: "Un diente de ajo, une gousse d'ail — littéralement une dent d'ail.",
      },
      {
        etranger: "El pollo se asa en el horno.",
        francais: "Le poulet se fait rôtir au four.",
        note: "Asar, rôtir ; hornear, cuire au four sec. Et le se impersonnel des recettes.",
      },
      {
        etranger: "¿Me pasas la sartén, por favor?",
        francais: "Tu me passes la poêle, s'il te plaît ?",
        note: "La sartén, la poêle ; la olla, la marmite ; la cazuela, la cocotte en terre.",
      },
      {
        etranger: "Corta el tomate en rodajas finas.",
        francais: "Coupe la tomate en fines rondelles.",
        note: "Una rodaja, une rondelle ; una loncha, une tranche de charcuterie.",
      },
      {
        etranger: "La cena es a las nueve en España.",
        francais: "Le dîner est à neuf heures en Espagne.",
        note: "La cena, le dîner. « La scène » se dit la escena : le faux ami est proche.",
      },
    ],
  },

  {
    slug: "es-voc-ropa",
    category: "Vocabulaire",
    title: "Les vêtements et l'apparence",
    statement:
      "S'habiller se dit ponerse, porter llevar, essayer probarse. Trois verbes pronominaux ou non selon le sens — et un vocabulaire qui change au passage de l'Atlantique.",
    tip: "Ponerse et quitarse sont pronominaux ; llevar ne l'est jamais dans cet emploi.",
    difficulty: 1,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "S'habiller en espagnol",
      sections: [
        {
          titre: "Quatre verbes, et le pronom qui les distingue",
          texte:
            "Comme l'anglais, l'espagnol distingue le geste de l'état — mais il le fait par le pronom réfléchi, ce qui déroute un francophone.\n\nPonerse, c'est le geste d'enfiler : ponte el abrigo, mets ton manteau. Le verbe est pronominal parce que l'action porte sur soi. Sans pronom, poner veut simplement dire poser.\n\nLlevar, c'est l'état : on l'a sur soi. Lleva un vestido azul, elle porte une robe bleue. Ce verbe n'est jamais réfléchi dans cet emploi, et c'est là que l'erreur se glisse.\n\nProbarse, c'est essayer en magasin : ¿puedo probarme esta chaqueta ? Sans pronom, probar veut dire goûter ou tester.\n\nQuitarse, c'est enlever : quítate los zapatos. Sans pronom, quitar veut dire retirer quelque chose à quelqu'un.\n\nS'y ajoutent vestirse, s'habiller en général, et cambiarse, se changer. Aucun des deux ne prend de complément direct.",
          visuels: [
            {
              type: "etapes",
              titre: "La vie d'un vêtement",
              etapes: [
                { titre: "probárselo", texte: "En cabine : ¿puedo probármelo? — le pronom se colle à l'infinitif." },
                { titre: "ponérselo", texte: "Le matin : ponte el abrigo, hace frío." },
                { titre: "llevarlo", texte: "Toute la journée : lleva un abrigo negro. Pas de pronom ici." },
                { titre: "quitárselo", texte: "En rentrant : quítate el abrigo." },
              ],
            },
          ],
        },
        {
          titre: "Le vêtement, d'une rive à l'autre",
          texte:
            "Le vocabulaire vestimentaire est l'un des plus régionaux de la langue, et l'écart dépasse souvent la simple variante.\n\nLa veste est chaqueta en Espagne, saco en Argentine et au Mexique, chamarra pour un blouson mexicain, campera dans le Cône Sud.\n\nLe pull est jersey en Espagne, suéter au Mexique, buzo en Argentine — mais buzo veut aussi dire plongeur.\n\nLa jupe est falda partout, sauf pollera dans le Cône Sud. Le pantalon est pantalón partout, mais toujours singulier en espagnol, contrairement au français : un pantalón, pas « des pantalons ».\n\nLes chaussures sont zapatos partout ; les baskets sont zapatillas en Espagne, tenis au Mexique, championes en Uruguay, zapatillas de deporte ailleurs.\n\nLe tee-shirt est camiseta en Espagne, playera au Mexique, remera en Argentine, franela au Venezuela.\n\nEnfin un piège célèbre : coger la ropa est banal en Espagne et obscène dans le Cône Sud, où l'on dit agarrar ou tomar.",
          visuels: [
            {
              type: "tableau",
              titre: "Le même vêtement, quatre noms",
              colonnes: ["En français", "Espagne", "Mexique", "Cône Sud"],
              lignes: [
                ["la veste", "chaqueta", "saco / chamarra", "campera"],
                ["le pull", "jersey", "suéter", "buzo"],
                ["le tee-shirt", "camiseta", "playera", "remera"],
                ["les baskets", "zapatillas", "tenis", "zapatillas"],
                ["la jupe", "falda", "falda", "pollera"],
                ["le short", "pantalón corto", "short", "short"],
                ["les lunettes", "gafas", "lentes", "anteojos"],
              ],
            },
          ],
        },
        {
          titre: "Décrire quelqu'un",
          texte:
            "Pour l'apparence, l'espagnol partage la difficulté du français : choisir entre ser et estar, et accorder.\n\nSer pour ce qui définit : es alta, es rubia, es delgada. Estar pour ce qui est momentané ou perçu : está cansada, está guapa hoy — elle est en beauté aujourd'hui, ce qui n'est pas la même chose que es guapa, elle est belle.\n\nCette distinction est plus fine qu'en français, et c'est elle qui rend la description délicate. Es gordo est un jugement sur la personne ; está gordo décrit un état passager, et passe pour plus doux — ou pour plus blessant, selon le ton.\n\nPour les parties du corps, l'espagnol emploie tener avec l'article défini : tiene los ojos verdes, tiene el pelo corto. Le français dit « elle a les yeux verts » de la même façon, ce qui aide.\n\nEnfin, le vocabulaire du caractère réserve deux faux amis. Simpático veut dire sympathique, pas compatissant. Sensible veut dire sensible au sens émotionnel, alors que raisonnable se dit sensato — l'inverse exact de l'anglais.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Ponte el abrigo, hace frío.",
        francais: "Mets ton manteau, il fait froid.",
        note: "Ponerse pour le geste. Sans pronom, poner veut simplement dire poser.",
      },
      {
        etranger: "Lleva un vestido azul.",
        francais: "Elle porte une robe bleue.",
        note: "Llevar pour l'état, et jamais de pronom réfléchi dans cet emploi.",
      },
      {
        etranger: "¿Puedo probarme esta chaqueta?",
        francais: "Je peux essayer cette veste ?",
        note: "Probarse pour l'essayage. Sans pronom, probar veut dire goûter.",
      },
      {
        etranger: "Quítate los zapatos en la entrada.",
        francais: "Enlève tes chaussures à l'entrée.",
        note: "Quitarse pour se dévêtir. Quitar sans pronom, c'est retirer quelque chose à quelqu'un.",
      },
      {
        etranger: "Necesito un pantalón nuevo.",
        francais: "J'ai besoin d'un nouveau pantalon.",
        note: "Pantalón est singulier en espagnol, là où le français hésite.",
      },
      {
        etranger: "Tiene el pelo corto y rizado.",
        francais: "Elle a les cheveux courts et bouclés.",
        note: "Tener + article défini pour les parties du corps, comme en français.",
      },
      {
        etranger: "Hoy estás muy guapa.",
        francais: "Tu es très en beauté aujourd'hui.",
        note: "Estar guapa dit l'état du jour ; ser guapa dit la beauté en général.",
      },
      {
        etranger: "Esta camiseta me queda grande.",
        francais: "Ce tee-shirt est trop grand pour moi.",
        note: "Quedar pour la taille : me queda grande, me queda bien. Construction comme gustar.",
      },
      {
        etranger: "Ese color te sienta muy bien.",
        francais: "Cette couleur te va très bien.",
        note: "Sentar bien pour ce qui va bien ; quedar bien pour la taille et le style.",
      },
      {
        etranger: "Voy a cambiarme antes de salir.",
        francais: "Je vais me changer avant de sortir.",
        note: "Cambiarse, se changer ; cambiar sans pronom, changer quelque chose.",
      },
    ],
  },

  {
    slug: "es-voc-naturaleza",
    category: "Vocabulaire",
    title: "La nature, les animaux, le paysage",
    statement:
      "La sierra, la selva, el llano. L'espagnol nomme des reliefs que le français ne distingue pas — et il a exporté la moitié de ces mots dans le monde entier.",
    tip: "Le genre des animaux se marque souvent par la terminaison : el gato, la gata ; el toro, la vaca. Mais beaucoup sont épicènes : la jirafa mâle reste la jirafa.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Nommer le paysage hispanique",
      sections: [
        {
          titre: "Des reliefs que le français n'a pas",
          texte:
            "L'espagnol a développé un vocabulaire du relief très fin, en partie parce que la péninsule et l'Amérique offrent des paysages que l'Europe du Nord ignore. Plusieurs de ces mots sont passés tels quels dans les autres langues.\n\nLa sierra est une chaîne de montagnes en dents de scie — le mot veut d'abord dire « scie ». La cordillera est une chaîne plus longue et plus haute : la cordillera de los Andes.\n\nLa meseta est un haut plateau ; le centre de l'Espagne en est une. El llano et la llanura sont la plaine ; la pampa est la plaine herbeuse du Cône Sud ; el altiplano le haut plateau andin.\n\nLa selva est la forêt tropicale dense — la selva amazónica —, à distinguer du bosque, la forêt tempérée. El monte est à la fois le mont et le maquis, selon la région.\n\nEl cañón, la gorge, a donné le mot anglais canyon. La quebrada est un ravin ; el arroyo, un ruisseau ; la cuenca, le bassin d'un fleuve.\n\nEnfin, el desierto, la duna, el oasis, et la costa, l'acantilado — la falaise —, la cala, la petite crique.",
          visuels: [
            {
              type: "tableau",
              titre: "Le relief, du haut vers le bas",
              colonnes: ["Le mot", "Ce que c'est", "Où"],
              lignes: [
                ["la cordillera", "longue chaîne haute", "los Andes"],
                ["la sierra", "chaîne en dents de scie", "Sierra Nevada"],
                ["el altiplano", "haut plateau andin", "Bolivie, Pérou"],
                ["la meseta", "haut plateau", "centre de l'Espagne"],
                ["la llanura / el llano", "la plaine", "Venezuela, Colombie"],
                ["la pampa", "plaine herbeuse", "Argentine, Uruguay"],
                ["la selva", "forêt tropicale", "Amazonie"],
                ["el bosque", "forêt tempérée", "Espagne du Nord"],
                ["la quebrada", "ravin", "Andes"],
                ["la cala", "petite crique", "Baléares"],
              ],
            },
          ],
        },
        {
          titre: "Les animaux et leur genre",
          texte:
            "Le genre des animaux espagnols suit trois schémas, et savoir lequel s'applique évite bien des hésitations.\n\nLe premier : le couple régulier en -o et -a. El gato et la gata, el perro et la perra, el niño et la niña. La terminaison suffit.\n\nLe deuxième : le couple lexical, où le mâle et la femelle ont deux mots sans rapport. El toro et la vaca, el caballo et la yegua, el gallo et la gallina, el carnero et la oveja. Ceux-là s'apprennent par paires.\n\nLe troisième : les épicènes, qui n'ont qu'un genre grammatical quel que soit le sexe de l'animal. La jirafa, la ballena, el águila, la serpiente, el ratón. Pour préciser, on ajoute macho ou hembra : una jirafa macho — et l'adjectif reste au féminin, ce qui surprend.\n\nAttention à el águila : le mot est féminin, mais prend el au singulier parce qu'il commence par un a tonique. On dit el águila blanca, avec l'article masculin et l'adjectif féminin. La même règle vaut pour el agua, el hambre, el aula.",
          visuels: [
            {
              type: "comparaison",
              titre: "Trois façons de marquer le genre",
              colonnes: [
                {
                  titre: "Régulier ou lexical",
                  points: [
                    "el gato / la gata",
                    "el toro / la vaca",
                    "el caballo / la yegua",
                    "el gallo / la gallina",
                  ],
                },
                {
                  titre: "Épicène — un seul genre",
                  points: [
                    "la jirafa macho",
                    "el ratón hembra",
                    "la serpiente",
                    "el águila (féminin malgré el)",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le temps qu'il fait, et les verbes impersonnels",
          texte:
            "La météo espagnole se dit de trois façons, et le choix du verbe n'est pas libre.\n\nHacer pour les sensations et les états généraux : hace frío, hace calor, hace sol, hace viento, hace buen tiempo. Le verbe est impersonnel et reste à la troisième personne du singulier.\n\nEstar pour l'état du ciel : está nublado, está despejado, está lloviendo. Ici, c'est un état momentané.\n\nUn verbe propre pour les précipitations : llover, nevar, granizar, tronar, relampaguear. Ces verbes n'ont pas de sujet : llueve, nieva. Et ils diphtonguent au présent : llover donne llueve, nevar donne nieva.\n\nLe vocabulaire lui-même : la lluvia, la pluie ; el chaparrón, l'averse ; la llovizna, le crachin ; la tormenta, l'orage ; el rayo, la foudre ; el trueno, le tonnerre ; la niebla, le brouillard ; la helada, la gelée ; el granizo, la grêle.\n\nEt une nuance utile : el tiempo veut dire le temps qu'il fait autant que le temps qui passe. La météo comme science se dit la meteorología, et le bulletin el parte meteorológico.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Subimos a la sierra el domingo.",
        francais: "Nous sommes montés dans la sierra dimanche.",
        note: "La sierra, chaîne en dents de scie ; la cordillera, chaîne plus longue et plus haute.",
      },
      {
        etranger: "La selva amazónica es inmensa.",
        francais: "La forêt amazonienne est immense.",
        note: "La selva, forêt tropicale dense ; el bosque, forêt tempérée.",
      },
      {
        etranger: "Vimos un águila blanca.",
        francais: "Nous avons vu un aigle blanc.",
        note: "Águila est féminin mais prend el au singulier : le a tonique impose l'article masculin.",
      },
      {
        etranger: "En la granja hay vacas y gallinas.",
        francais: "À la ferme, il y a des vaches et des poules.",
        note: "Couple lexical : el toro et la vaca, el gallo et la gallina.",
      },
      {
        etranger: "Hace mucho viento en la costa.",
        francais: "Il y a beaucoup de vent sur la côte.",
        note: "Hacer pour les états généraux du temps, et le verbe reste impersonnel.",
      },
      {
        etranger: "Está nublado desde esta mañana.",
        francais: "Le ciel est couvert depuis ce matin.",
        note: "Estar pour l'état du ciel ; hacer pour la sensation générale.",
      },
      {
        etranger: "Anoche hubo una tormenta fuerte.",
        francais: "Il y a eu un gros orage cette nuit.",
        note: "La tormenta, l'orage ; el trueno, le tonnerre ; el rayo, la foudre.",
      },
      {
        etranger: "El arroyo pasa detrás del pueblo.",
        francais: "Le ruisseau passe derrière le village.",
        note: "El arroyo, le ruisseau ; el río, la rivière et le fleuve, comme en anglais.",
      },
      {
        etranger: "La pampa se extiende hasta el horizonte.",
        francais: "La pampa s'étend jusqu'à l'horizon.",
        note: "La pampa, plaine herbeuse du Cône Sud. El llano en Colombie et au Venezuela.",
      },
      {
        etranger: "Nieva poco en esta región.",
        francais: "Il neige peu dans cette région.",
        note: "Nevar diphtongue au présent : nieva. Comme llover donne llueve.",
      },
    ],
  },

  {
    slug: "es-voc-ciudad",
    category: "Vocabulaire",
    title: "La ville, les commerces, les services",
    statement:
      "La panadería, la ferretería, el estanco. Les commerces espagnols se nomment presque tous par un suffixe régulier — sauf l'estanco, le bureau de tabac, dont le nom échappe à la règle.",
    tip: "Le suffixe -ería fabrique le commerce à partir du produit : pan donne panadería, carne donne carnicería, libro donne librería.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les lieux d'une ville hispanique",
      sections: [
        {
          titre: "La machine à fabriquer des commerces",
          texte:
            "L'espagnol dispose d'un suffixe productif, -ería, qui transforme presque n'importe quel produit en nom de commerce. Le connaître dispense d'apprendre la liste.\n\nPan donne panadería, la boulangerie. Carne donne carnicería, la boucherie. Pescado donne pescadería, la poissonnerie. Fruta donne frutería. Zapato donne zapatería. Papel donne papelería. Flor donne floristería. Libro donne librería.\n\nAttention à ce dernier : librería est la librairie, et la bibliothèque se dit biblioteca. C'est le seul cas où le suffixe induit un francophone en erreur — parce que le français a exactement le même mot pour autre chose.\n\nUn suffixe voisin, -ero et -era, désigne la personne : el panadero, la carnicera, el pescadero, la florista.\n\nDeux commerces échappent au schéma. La farmacia, la pharmacie, garde le mot savant. Et el estanco est le bureau de tabac espagnol : comme en France, un débit sous monopole d'État, et il vend aussi les timbres.",
          visuels: [
            {
              type: "tableau",
              titre: "Le produit, le commerce, le commerçant",
              colonnes: ["Le produit", "Le commerce", "La personne"],
              lignes: [
                ["el pan", "la panadería", "el panadero"],
                ["la carne", "la carnicería", "el carnicero"],
                ["el pescado", "la pescadería", "el pescadero"],
                ["la fruta", "la frutería", "el frutero"],
                ["el zapato", "la zapatería", "el zapatero"],
                ["el libro", "la librería", "el librero"],
                ["la flor", "la floristería", "el florista"],
                ["el papel", "la papelería", "—"],
                ["—", "la ferretería", "el ferretero"],
                ["—", "el estanco", "el estanquero"],
              ],
              note: "Librería est la librairie ; la bibliothèque se dit biblioteca.",
            },
          ],
        },
        {
          titre: "Se repérer : les prépositions et les lieux",
          texte:
            "Les prépositions de lieu espagnoles sont plus régulières que les anglaises, mais quelques-unes piègent le francophone.\n\nEn couvre à la fois « à », « en » et « dans » : estoy en casa, en el banco, en Madrid, en España. Là où le français hésite entre trois prépositions, l'espagnol en emploie une seule.\n\nA marque le déplacement : voy a casa, voy al banco. La distinction entre estar en et ir a est stricte : on est en un lieu, on va a un lieu.\n\nDe marque l'origine : vengo del trabajo, soy de Sevilla.\n\nPour la position relative : delante de, devant ; detrás de, derrière ; al lado de, à côté de ; enfrente de, en face de ; entre, entre ; dentro de, à l'intérieur de ; fuera de, en dehors de. Toutes prennent de, sauf entre.\n\nEnfin, deux faux amis urbains. La plaza est la place, et non le placement. El barrio est le quartier, mot passé en français avec une connotation qu'il n'a pas en espagnol : un barrio est un quartier quelconque, riche ou pauvre.",
          visuels: [
            {
              type: "comparaison",
              titre: "Être ou aller",
              colonnes: [
                {
                  titre: "EN — la position",
                  points: [
                    "Estoy en el banco.",
                    "Vivo en Madrid.",
                    "Trabaja en una tienda.",
                  ],
                },
                {
                  titre: "A — le déplacement",
                  points: [
                    "Voy al banco.",
                    "Llego a Madrid mañana.",
                    "Entra a la tienda.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les services, et le vocabulaire administratif",
          texte:
            "Les démarches ont leur lexique, et il diffère nettement du français.\n\nEl ayuntamiento est la mairie en Espagne ; la alcaldía ou el municipio en Amérique latine. El alcalde est le maire.\n\nCorreos est la poste, toujours au pluriel. Un sello est un timbre en Espagne, une estampilla en Amérique. Un paquete est un colis.\n\nLa comisaría est le commissariat ; el juzgado, le tribunal ; la delegación, l'antenne administrative — au Mexique, c'est aussi le commissariat.\n\nEl padrón est le registre municipal des habitants, auquel il faut s'inscrire — empadronarse — pour accéder à beaucoup de services en Espagne. Le mot n'a pas d'équivalent français direct.\n\nEnfin la santé et les transports : el ambulatorio ou el centro de salud pour le dispensaire, urgencias pour les urgences, la parada pour l'arrêt de bus, el andén pour le quai, la taquilla pour le guichet, el billete pour le ticket en Espagne — boleto en Amérique.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Voy a la panadería a por pan.",
        francais: "Je vais à la boulangerie chercher du pain.",
        note: "Le suffixe -ería fabrique le commerce. Et « a por » est espagnol d'Espagne.",
      },
      {
        etranger: "La librería está al lado del cine.",
        francais: "La librairie est à côté du cinéma.",
        note: "Librería, la librairie ; biblioteca, la bibliothèque. Le faux ami le plus coûteux du champ.",
      },
      {
        etranger: "Compré sellos en el estanco.",
        francais: "J'ai acheté des timbres au bureau de tabac.",
        note: "El estanco vend tabac et timbres en Espagne. Un sello, une estampilla en Amérique.",
      },
      {
        etranger: "El ayuntamiento abre por la mañana.",
        francais: "La mairie ouvre le matin.",
        note: "El ayuntamiento en Espagne, la alcaldía ou el municipio en Amérique latine.",
      },
      {
        etranger: "Hay una farmacia enfrente de la plaza.",
        francais: "Il y a une pharmacie en face de la place.",
        note: "Enfrente DE, comme delante de et al lado de. Toutes prennent de, sauf entre.",
      },
      {
        etranger: "Espérame en la parada del autobús.",
        francais: "Attends-moi à l'arrêt de bus.",
        note: "La parada, l'arrêt ; el andén, le quai ; la taquilla, le guichet.",
      },
      {
        etranger: "Este barrio es muy tranquilo.",
        francais: "Ce quartier est très calme.",
        note: "El barrio est un quartier quelconque, sans la connotation qu'il a pris en français.",
      },
      {
        etranger: "Necesito ir a la ferretería.",
        francais: "J'ai besoin d'aller à la quincaillerie.",
        note: "La ferretería, de hierro, le fer. Le suffixe reste régulier même sans produit évident.",
      },
      {
        etranger: "El centro de salud cierra a las ocho.",
        francais: "Le dispensaire ferme à huit heures.",
        note: "El centro de salud ou el ambulatorio ; urgencias pour les urgences.",
      },
      {
        etranger: "Saca el billete en la máquina.",
        francais: "Prends le ticket au distributeur.",
        note: "El billete en Espagne, el boleto en Amérique latine. Sacar pour prendre un titre de transport.",
      },
    ],
  },

  {
    slug: "es-voc-movimiento",
    category: "Vocabulaire",
    title: "Les verbes du mouvement",
    statement:
      "Ir, venir, llevar, traer. Quatre verbes gouvernés par un seul principe — où se tient celui qui parle — et que le français emploie exactement à l'envers dans la moitié des cas.",
    tip: "En espagnol, venir signifie toujours « vers moi qui parle ». Répondre « ¡voy! » quand on nous appelle, jamais « ¡vengo! ».",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Aller, venir, porter, apporter",
      sections: [
        {
          titre: "Le point de vue commande",
          texte:
            "Quatre verbes espagnols forment un système parfaitement régulier, et le français en dérègle la moitié.\n\nIr est le mouvement vers un ailleurs ; venir est le mouvement vers le lieu où se trouve celui qui parle. La règle est stricte, sans exception.\n\nC'est ici que le français s'écarte. Quand quelqu'un nous appelle depuis une autre pièce, un francophone répond « j'arrive » ou « je viens ». Un hispanophone répond ¡voy!, parce que le mouvement se fait vers l'autre, pas vers lui-même. Dire ¡vengo! signifierait qu'on revient de quelque part.\n\nLlevar et traer suivent exactement la même logique avec un objet. Llevar, c'est emporter vers ailleurs ; traer, c'est apporter ici. Te llevo el libro mañana veut dire que je te l'apporte là où tu es ; tráeme el libro veut dire apporte-le-moi ici.\n\nLe test infaillible : se demander où se trouve le locuteur au moment où il parle. Si le mouvement va vers lui, c'est venir ou traer. Sinon, c'est ir ou llevar.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le français dérègle le système",
              colonnes: [
                {
                  titre: "En français",
                  points: [
                    "— À table ! — J'arrive !",
                    "Je viens te voir demain.",
                    "Je t'apporte le livre demain.",
                  ],
                },
                {
                  titre: "En espagnol",
                  points: [
                    "— ¡A comer! — ¡Voy!",
                    "Voy a verte mañana.",
                    "Te llevo el libro mañana.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les verbes de déplacement, et leur préposition",
          texte:
            "Chaque verbe de mouvement espagnol impose sa préposition, et l'apprendre avec le verbe évite des années d'hésitation.\n\nIr a, aller à : voy a Madrid. Venir de, venir de : vengo de casa. Salir de, sortir de : salgo de la oficina. Entrar en en Espagne, entrar a en Amérique : entro en la tienda. Llegar a, arriver à : llego a las ocho. Subir a, monter dans : subo al tren. Bajar de, descendre de : bajo del autobús. Acercarse a, s'approcher de. Alejarse de, s'éloigner de.\n\nDeux verbes n'en prennent aucune et surprennent : atravesar et cruzar, traverser, sont directement transitifs. Cruzo la calle, jamais « cruzo por la calle » dans ce sens.\n\nEnfin, quelques verbes de manière que le français rend par une périphrase. Pasear, se promener ; deambular, errer ; correr, courir ; trepar, grimper ; arrastrarse, ramper ; tropezar, trébucher ; cojear, boiter ; recorrer, parcourir.\n\nRecorrer mérite une mention : recorrimos toda la ciudad veut dire « nous avons parcouru toute la ville », en un seul verbe.",
          visuels: [
            {
              type: "tableau",
              titre: "Le verbe et sa préposition",
              colonnes: ["Le verbe", "La préposition", "Exemple"],
              lignes: [
                ["ir", "a", "Voy a la playa."],
                ["venir", "de", "Vengo del trabajo."],
                ["salir", "de", "Salgo de casa."],
                ["entrar", "en (ES) / a (AL)", "Entro en la tienda."],
                ["llegar", "a", "Llego a Sevilla."],
                ["subir", "a", "Sube al coche."],
                ["bajar", "de", "Baja del tren."],
                ["cruzar", "aucune", "Cruzo la calle."],
              ],
              note: "Llegar a pour la destination : llegar a Madrid, jamais « llegar en Madrid ». Avec un moyen de transport, en revanche : llegar en tren.",
            },
          ],
        },
        {
          titre: "Les périphrases du mouvement",
          texte:
            "L'espagnol combine volontiers un verbe de mouvement avec un gérondif, et l'ensemble prend un sens que le verbe seul n'a pas. Ir a + infinitif, ir + gérondif, andar + gérondif et volver a + infinitif sont détaillés dans le cours sur les périphrases verbales ; deux constructions restent propres au mouvement.\n\nSalir + gérondif marque une sortie brusque : salió corriendo, il est sorti en courant. C'est l'une des rares constructions où l'espagnol met, comme l'anglais, la manière dans le gérondif.\n\nVenir + gérondif marque une durée qui se prolonge jusqu'à maintenant : viene diciendo lo mismo desde hace años, il répète la même chose depuis des années.",
        },
      ],
    },
    cartes: [
      {
        etranger: "¡Voy! Espérame un momento.",
        francais: "J'arrive ! Attends-moi un instant.",
        note: "Voy, jamais vengo : le mouvement se fait vers l'autre, pas vers moi.",
      },
      {
        etranger: "Te llevo el libro mañana.",
        francais: "Je t'apporte le livre demain.",
        note: "Llevar vers ailleurs, traer vers ici. Le français dit « apporter » pour les deux.",
      },
      {
        etranger: "Tráeme un vaso de agua.",
        francais: "Apporte-moi un verre d'eau.",
        note: "Traer, vers le locuteur. Et le pronom se colle à l'impératif affirmatif.",
      },
      {
        etranger: "Salió corriendo de la oficina.",
        francais: "Il est sorti en courant du bureau.",
        note: "Salir + gérondif pour une sortie brusque. Salir de pour le lieu qu'on quitte, mais salir a, para ou con selon ce qui suit.",
      },
      {
        etranger: "Llegamos a Sevilla a las ocho.",
        francais: "Nous arrivons à Séville à huit heures.",
        note: "Llegar a pour la destination, jamais « llegar en » ; en revanche, llegar en tren avec un moyen de transport.",
      },
      {
        etranger: "Sube al tren, ya sale.",
        francais: "Monte dans le train, il part.",
        note: "Subir a, bajar de. Les deux prépositions sont fixes.",
      },
      {
        etranger: "Cruza la calle con cuidado.",
        francais: "Traverse la rue avec précaution.",
        note: "Cruzar est directement transitif : pas de préposition.",
      },
      {
        etranger: "Vuelvo a leerlo esta noche.",
        francais: "Je le relis ce soir.",
        note: "Volver a + infinitif dit la répétition, là où le français emploie re-.",
      },
      {
        etranger: "El río va bajando desde el deshielo.",
        francais: "Le fleuve baisse depuis la fonte des neiges.",
        note: "Ir + gérondif marque une progression. Le mouvement y reste ici bien concret.",
      },
      {
        etranger: "Recorrimos toda la ciudad a pie.",
        francais: "Nous avons parcouru toute la ville à pied.",
        note: "Recorrer, parcourir. Un seul verbe pour ce que le français décompose.",
      },
    ],
  },
];
