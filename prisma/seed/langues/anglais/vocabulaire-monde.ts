/**
 * Anglais — le vocabulaire du monde concret.
 *
 * Cinq champs lexicaux, cinq cours. Le vocabulaire était jusqu'ici dispersé
 * entre les tournures : on apprenait « I'd like a coffee » sans jamais
 * apprendre les mots de la cuisine. Ces séries font l'inverse — elles posent
 * un champ entier, avec la règle qui l'organise.
 *
 * Chaque carte reste une phrase : un mot appris seul ne se replace pas, et
 * c'est ce qui permet l'écoute et la prononciation.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_VOCABULAIRE_MONDE: LotCartes[] = [
  {
    slug: "en-voc-cuisine",
    category: "Vocabulaire",
    title: "La cuisine : ingrédients et gestes",
    statement:
      "Commander un plat est une chose, le préparer en est une autre. Les verbes de la cuisine anglaise sont précis là où le français dit « faire cuire » pour tout.",
    tip: "L'anglais a un verbe par mode de cuisson : boil, fry, roast, bake, grill, steam. « Cook » ne désigne que l'acte général de cuisiner.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les mots de la cuisine",
      sections: [
        {
          titre: "Un verbe par cuisson",
          texte:
            "Le français se contente de « faire cuire » et précise ensuite : à l'eau, à la poêle, au four. L'anglais a choisi l'inverse — un verbe entier pour chaque mode, et pas de complément.\n\nBoil, c'est l'eau bouillante : boil an egg, boil the pasta. Fry, c'est la matière grasse dans une poêle : fry an onion. Deep-fry, c'est la friture. Roast, c'est le four avec de la matière grasse, pour une viande ou des légumes : roast chicken. Bake, c'est le four sec, pour le pain et les gâteaux : bake a cake. Grill, c'est la chaleur par le dessus — broil aux États-Unis. Steam, c'est la vapeur.\n\nCook, lui, ne désigne aucun mode : c'est cuisiner en général. I'm cooking dinner ne dit rien de la méthode. Et to cook someone est une plaisanterie, pas une recette.\n\nDeux verbes complètent le tableau et n'ont pas d'équivalent simple : simmer, laisser frémir, et stir, remuer. Stir-fry, le sauté au wok, combine les deux idées.",
          visuels: [
            {
              type: "tableau",
              titre: "Le mode de cuisson, en un mot",
              colonnes: ["Le verbe", "Ce que c'est", "Exemple", "En français"],
              lignes: [
                ["boil", "eau bouillante", "boil the potatoes", "faire bouillir"],
                ["fry", "poêle et matière grasse", "fry the onions", "faire revenir"],
                ["roast", "four, avec gras", "roast a chicken", "rôtir"],
                ["bake", "four, sec", "bake bread", "cuire au four"],
                ["grill", "chaleur par-dessus", "grill the fish", "griller"],
                ["steam", "vapeur", "steam the vegetables", "cuire à la vapeur"],
                ["simmer", "petit frémissement", "let it simmer", "laisser mijoter"],
                ["cook", "aucun mode précis", "I'm cooking dinner", "cuisiner"],
              ],
              note: "Grill se dit broil aux États-Unis, où grill désigne plutôt le barbecue.",
            },
          ],
        },
        {
          titre: "Ce qui se compte et ce qui ne se compte pas",
          texte:
            "La cuisine est le domaine où le dénombrable et l'indénombrable se heurtent le plus, parce que le même produit change de camp selon sa forme.\n\nBread, rice, pasta, cheese, butter, sugar, salt, water, milk sont indénombrables : pas de pluriel, pas de a. On dit some bread, a lot of rice, much cheese. Pour en compter, il faut une unité : a loaf of bread, a slice of cheese, a grain of rice, a bottle of milk.\n\nApple, egg, potato, onion, tomato sont dénombrables : an apple, three eggs.\n\nCertains basculent selon le sens. Chicken indénombrable, c'est la viande ; a chicken, c'est l'animal entier. Coffee indénombrable, c'est la boisson en général ; two coffees, ce sont deux tasses commandées au comptoir.\n\nLe piège le plus fréquent chez un francophone reste advice, information et news, tous trois indénombrables : some good news, jamais « a good news ».",
          visuels: [
            {
              type: "comparaison",
              titre: "La bonne unité",
              colonnes: [
                {
                  titre: "Indénombrable — il faut une unité",
                  points: [
                    "a loaf of bread — un pain.",
                    "a slice of cheese — une tranche de fromage.",
                    "a clove of garlic — une gousse d'ail.",
                  ],
                },
                {
                  titre: "Dénombrable — on compte tout court",
                  points: [
                    "three eggs — trois œufs.",
                    "two onions — deux oignons.",
                    "a lemon — un citron.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les faux amis de l'assiette",
          texte:
            "Quelques mots de cuisine ressemblent au français et ne veulent pas dire la même chose. Ce sont ceux qu'on emploie de travers avec assurance.\n\nA course est un plat dans un repas — a three-course meal, un repas en trois plats. Le plat lui-même, l'objet, est a dish, et c'est aussi le nom du mets. Un « cours » de cuisine se dit a class.\n\nA menu est la carte du restaurant, pas la formule. La formule à prix fixe se dit a set menu ou a prix fixe menu.\n\nA librairie n'a rien à voir, mais a receipt non plus : c'est le ticket de caisse. La recette de cuisine est a recipe.\n\nEnfin, entrée est un piège transatlantique complet. Au Royaume-Uni, a starter est l'entrée ; aux États-Unis, an entrée est le plat principal. Commander un entrée à New York en croyant prendre une entrée fait arriver un steak.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Boil the potatoes for twenty minutes.",
        francais: "Fais bouillir les pommes de terre vingt minutes.",
        note: "Boil, c'est l'eau bouillante. Chaque mode de cuisson a son verbe en anglais.",
      },
      {
        etranger: "Fry the onions in a little oil.",
        francais: "Fais revenir les oignons dans un peu d'huile.",
        note: "Fry, la poêle et la matière grasse. Deep-fry, c'est la friture.",
      },
      {
        etranger: "She baked a cake for her birthday.",
        francais: "Elle a fait un gâteau pour son anniversaire.",
        note: "Bake, le four sec : le pain, les gâteaux, les biscuits.",
      },
      {
        etranger: "Let it simmer for an hour.",
        francais: "Laisse mijoter une heure.",
        note: "Simmer, le frémissement. Boil serait trop fort.",
      },
      {
        etranger: "Could I have a slice of bread?",
        francais: "Je peux avoir une tranche de pain ?",
        note: "Bread est indénombrable : pour en compter, il faut une unité — slice, loaf.",
      },
      {
        etranger: "We need two cloves of garlic.",
        francais: "Il nous faut deux gousses d'ail.",
        note: "Clove, la gousse d'ail — et aussi le clou de girofle, selon le contexte.",
      },
      {
        etranger: "It was a three-course meal.",
        francais: "C'était un repas en trois plats.",
        note: "Course, le plat dans un repas ; dish, le mets ou l'assiette. Ni l'un ni l'autre n'est un cours.",
      },
      {
        etranger: "The recipe calls for fresh cream.",
        francais: "La recette demande de la crème fraîche.",
        note: "Recipe, la recette ; receipt, le ticket de caisse. Deux mots très proches.",
      },
      {
        etranger: "Add a pinch of salt.",
        francais: "Ajoute une pincée de sel.",
        note: "A pinch of, une pincée. L'anglais mesure l'indénombrable par des contenants.",
      },
      {
        etranger: "I'll have the starter and the fish.",
        francais: "Je prendrai l'entrée et le poisson.",
        note: "Starter, l'entrée au Royaume-Uni. Aux États-Unis, entrée désigne le plat principal.",
      },
    ],
  },

  {
    slug: "en-voc-vetements",
    category: "Vocabulaire",
    title: "Les vêtements et l'apparence",
    statement:
      "S'habiller se dit avec quatre verbes différents selon qu'on met, porte, essaie ou enlève. Et la moitié des vêtements anglais ne prennent jamais le singulier.",
    tip: "Trousers, jeans, shorts, glasses sont toujours au pluriel : a pair of trousers pour en compter un seul.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "S'habiller en anglais",
      sections: [
        {
          titre: "Quatre verbes pour un seul « mettre »",
          texte:
            "Le français dit « mettre un manteau » et « porter un manteau » avec deux verbes ; l'anglais en distingue quatre, et chacun désigne un moment différent.\n\nPut on, c'est le geste : l'action d'enfiler. Put your coat on, it's cold. C'est un verbe à particule séparable — put it on, jamais « put on it » quand le complément est un pronom.\n\nWear, c'est l'état : on l'a sur soi. She's wearing a blue dress. Wear ne dit rien du geste, seulement du résultat.\n\nTry on, c'est l'essayage en magasin. Can I try this on?\n\nTake off, c'est l'inverse de put on. Take your shoes off at the door.\n\nS'y ajoute get dressed, s'habiller en général, et get changed, se changer. Aucun de ces deux-là ne prend de complément.",
          visuels: [
            {
              type: "etapes",
              titre: "La journée d'un vêtement",
              etapes: [
                { titre: "try it on", texte: "En cabine, avant d'acheter : can I try this jacket on?" },
                { titre: "put it on", texte: "Le geste du matin : put your coat on." },
                { titre: "wear it", texte: "L'état, toute la journée : she's wearing a coat." },
                { titre: "take it off", texte: "En rentrant : take your coat off." },
              ],
            },
          ],
        },
        {
          titre: "Les vêtements qui n'ont pas de singulier",
          texte:
            "Tout ce qui a deux jambes ou deux verres est un pluriel permanent en anglais : trousers, jeans, shorts, pyjamas, tights, glasses, sunglasses, scissors.\n\nCes mots ne prennent jamais a ni le singulier. On ne dit pas « a trouser » : on dit some trousers, ou a pair of trousers pour en désigner un seul exemplaire. Le verbe s'accorde au pluriel : my jeans are dirty.\n\nÀ l'inverse, clothes est toujours pluriel mais ne se compte pas : on dit some clothes, jamais « a clothe ». Pour un vêtement isolé, l'anglais dit an item of clothing ou, plus simplement, nomme la pièce.\n\nDeux mots séparent aussi les continents. Trousers au Royaume-Uni, pants aux États-Unis — et pants au Royaume-Uni désigne le sous-vêtement, ce qui rend la phrase « I like your pants » très différente selon la rive de l'Atlantique. De même, jumper britannique et sweater américain.",
          visuels: [
            {
              type: "tableau",
              titre: "Le même vêtement, deux rives",
              colonnes: ["En français", "Royaume-Uni", "États-Unis", "Le piège"],
              lignes: [
                ["le pantalon", "trousers", "pants", "pants = slip au Royaume-Uni"],
                ["le pull", "jumper", "sweater", "—"],
                ["les baskets", "trainers", "sneakers", "—"],
                ["le gilet", "waistcoat", "vest", "vest = maillot de corps au R.-U."],
                ["les bottes", "wellies", "rain boots", "familier des deux côtés"],
                ["le sac à main", "handbag", "purse", "purse = porte-monnaie au R.-U."],
              ],
            },
          ],
        },
        {
          titre: "Décrire quelqu'un sans le vexer",
          texte:
            "Pour l'apparence, l'anglais emploie trois verbes et il faut choisir le bon.\n\nBe pour ce qui est stable : she is tall, he is blond. Have got pour les parties du corps : she's got green eyes, he's got short hair. Look pour l'impression donnée : you look tired, she looks happy.\n\nL'ordre des adjectifs est fixe et ne se discute pas : opinion, taille, âge, forme, couleur, origine, matière. A lovely long red woollen scarf. Un francophone les met dans le désordre et cela s'entend immédiatement, même si la phrase reste compréhensible.\n\nEnfin, quelques adjectifs sont des mines. Fat est brutal ; on dit big, large ou, plus prudemment, on ne dit rien. Old se remplace par elderly quand on parle de quelqu'un. Skinny est péjoratif là où slim est un compliment. Le choix du mot pèse plus lourd en anglais qu'en français, parce que la langue n'a pas de diminutif pour adoucir.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Put your coat on, it's cold outside.",
        francais: "Mets ton manteau, il fait froid dehors.",
        note: "Put on, c'est le geste. Wear, c'est l'état. Le français dit « mettre » pour les deux.",
      },
      {
        etranger: "She's wearing a blue dress.",
        francais: "Elle porte une robe bleue.",
        note: "Wear décrit ce qu'on a sur soi, sans rien dire du geste.",
      },
      {
        etranger: "Can I try this jacket on?",
        francais: "Je peux essayer cette veste ?",
        note: "Try on, l'essayage. Et le pronom se glisse entre les deux : try it on.",
      },
      {
        etranger: "Take your shoes off at the door.",
        francais: "Enlève tes chaussures à l'entrée.",
        note: "Take off, l'inverse de put on. Verbe à particule séparable, lui aussi.",
      },
      {
        etranger: "My jeans are too tight.",
        francais: "Mon jean est trop serré.",
        note: "Jeans est toujours pluriel, et le verbe suit : my jeans ARE.",
      },
      {
        etranger: "I need a new pair of trousers.",
        francais: "J'ai besoin d'un nouveau pantalon.",
        note: "A pair of pour compter un vêtement à deux jambes. Trousers au R.-U., pants aux É.-U.",
      },
      {
        etranger: "He's got short brown hair.",
        francais: "Il a les cheveux bruns et courts.",
        note: "Hair est indénombrable au sens de chevelure : jamais « hairs » ici.",
      },
      {
        etranger: "You look tired this morning.",
        francais: "Tu as l'air fatigué ce matin.",
        note: "Look pour l'impression donnée ; be pour ce qui est stable.",
      },
      {
        etranger: "That colour really suits you.",
        francais: "Cette couleur te va vraiment bien.",
        note: "Suit pour ce qui va bien à quelqu'un ; fit pour ce qui est à la bonne taille.",
      },
      {
        etranger: "These shoes don't fit me.",
        francais: "Ces chaussures ne sont pas à ma taille.",
        note: "Fit parle de la taille, suit du style. Confondre les deux change le compliment.",
      },
    ],
  },

  {
    slug: "en-voc-nature",
    category: "Vocabulaire",
    title: "La nature, les animaux, le paysage",
    statement:
      "Un pays où il pleut a vingt mots pour la pluie. L'anglais nomme le temps, le relief et les bêtes avec une précision que le français règle par des adjectifs.",
    tip: "Les animaux ont souvent trois mots : l'animal, sa viande, et son cri. Pig, pork, grunt. Cow, beef, moo.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Nommer le dehors",
      sections: [
        {
          titre: "L'animal, sa viande, son petit",
          texte:
            "L'anglais garde deux couches lexicales héritées de 1066 : le mot saxon pour la bête vivante, le mot d'origine française pour la viande servie à table. Le paysan élevait des cows, le seigneur mangeait du beef.\n\nLa liste est courte et vaut la peine d'être sue d'un bloc. Cow donne beef, pig donne pork, sheep donne mutton — ou lamb pour l'agneau —, deer donne venison, calf donne veal. Chicken et fish, plus tardifs, n'ont pas de doublet.\n\nS'y ajoutent les petits, qui ont chacun leur nom : a calf pour la vache, a lamb pour la brebis, a piglet pour la truie, a puppy pour la chienne, a kitten pour la chatte, a foal pour la jument, a chick pour la poule.\n\nEt les collectifs, qui changent selon l'espèce : a herd of cows, a flock of birds, a school of fish, a swarm of bees, a pack of wolves. Le français dit « un troupeau » pour presque tout.",
          visuels: [
            {
              type: "tableau",
              titre: "La bête, la viande, le petit",
              colonnes: ["L'animal", "La viande", "Le petit", "Le collectif"],
              lignes: [
                ["cow", "beef", "calf", "a herd"],
                ["pig", "pork", "piglet", "a herd"],
                ["sheep", "mutton / lamb", "lamb", "a flock"],
                ["chicken", "chicken", "chick", "a flock"],
                ["deer", "venison", "fawn", "a herd"],
                ["fish", "fish", "fry", "a school"],
                ["bee", "—", "larva", "a swarm"],
                ["wolf", "—", "cub", "a pack"],
              ],
              note: "Sheep et fish sont invariables : one sheep, ten sheep.",
            },
          ],
        },
        {
          titre: "La pluie, et tout ce qui tombe du ciel",
          texte:
            "L'anglais britannique a fait de la météo un art conversationnel, et le vocabulaire suit.\n\nPour la pluie, l'échelle monte de drizzle — le crachin — à shower, l'averse brève, puis downpour, l'averse violente, et enfin pouring, où le verbe suffit : it's pouring. L'expression it's raining cats and dogs existe, mais elle est aujourd'hui perçue comme scolaire ; les anglophones disent plutôt it's bucketing down.\n\nPour la brume, mist est légère et fog est épaisse ; smog est la brume urbaine chargée. Pour le vent, breeze est agréable, gale est un coup de vent, et storm est la tempête.\n\nLe froid a lui aussi ses degrés : chilly, cold, freezing, bitter. Et le chaud : warm, hot, boiling, scorching.\n\nLa règle grammaticale qui les gouverne tous : la météo se dit avec it, sujet impersonnel obligatoire. It's raining, jamais « is raining ».",
          visuels: [
            {
              type: "comparaison",
              titre: "L'échelle de la pluie et du froid",
              colonnes: [
                {
                  titre: "Il pleut, de peu à beaucoup",
                  points: [
                    "drizzle — le crachin.",
                    "shower — l'averse brève.",
                    "downpour — l'averse violente.",
                    "it's bucketing down — le déluge.",
                  ],
                },
                {
                  titre: "Il fait froid, de peu à beaucoup",
                  points: [
                    "chilly — frisquet.",
                    "cold — froid.",
                    "freezing — glacial.",
                    "bitter — mordant, avec le vent.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le relief et l'eau",
          texte:
            "Le paysage anglais se nomme avec des mots courts et anciens, et les nuances y sont fines.\n\nPour la hauteur : hill est une colline, mountain une montagne, cliff une falaise, peak un sommet. Il n'y a pas de seuil officiel entre hill et mountain, mais l'usage britannique commence la montagne vers six cents mètres.\n\nPour l'eau douce : stream est le ruisseau, brook un plus petit encore, river la rivière et le fleuve — l'anglais ne distingue pas les deux —, lake le lac, pond la mare, puddle la flaque.\n\nPour la mer : coast est la côte vue de la terre, shore le rivage, beach la plage, tide la marée, wave la vague, bay la baie.\n\nDeux détails de préposition valent d'être retenus. On dit in the mountains mais on the coast ; at the seaside pour le bord de mer britannique. Et in the countryside pour la campagne, jamais « in the country », qui veut dire « dans le pays ».",
        },
      ],
    },
    cartes: [
      {
        etranger: "We saw a herd of cows.",
        francais: "Nous avons vu un troupeau de vaches.",
        note: "A herd pour les gros animaux, a flock pour les moutons et les oiseaux.",
      },
      {
        etranger: "They served roast beef and lamb.",
        francais: "Ils ont servi du rôti de bœuf et de l'agneau.",
        note: "Cow donne beef, sheep donne mutton ou lamb : la bête et la viande ont deux mots.",
      },
      {
        etranger: "There are ten sheep in the field.",
        francais: "Il y a dix moutons dans le champ.",
        note: "Sheep est invariable : one sheep, ten sheep. Comme fish et deer.",
      },
      {
        etranger: "It's only drizzling, we can walk.",
        francais: "Ce n'est qu'un crachin, on peut marcher.",
        note: "Drizzle, le crachin ; shower, l'averse ; downpour, le déluge.",
      },
      {
        etranger: "The fog was too thick to drive.",
        francais: "Le brouillard était trop épais pour conduire.",
        note: "Mist est légère, fog est épaisse. Smog est la brume urbaine polluée.",
      },
      {
        etranger: "A cold wind was blowing from the sea.",
        francais: "Un vent froid soufflait depuis la mer.",
        note: "Blow pour le vent. Breeze est agréable, gale est un coup de vent.",
      },
      {
        etranger: "We walked along the shore at low tide.",
        francais: "Nous avons marché sur le rivage à marée basse.",
        note: "Shore, le rivage ; coast, la côte vue de loin ; beach, la plage.",
      },
      {
        etranger: "They live in the countryside.",
        francais: "Ils vivent à la campagne.",
        note: "In the countryside, la campagne. « In the country » veut dire dans le pays.",
      },
      {
        etranger: "The stream runs behind the house.",
        francais: "Le ruisseau passe derrière la maison.",
        note: "Stream, le ruisseau ; river, la rivière et le fleuve — l'anglais ne les sépare pas.",
      },
      {
        etranger: "We climbed to the top of the hill.",
        francais: "Nous sommes montés en haut de la colline.",
        note: "Hill, la colline ; mountain à partir de six cents mètres environ, dans l'usage britannique.",
      },
    ],
  },

  {
    slug: "en-voc-ville",
    category: "Vocabulaire",
    title: "La ville, les commerces, les services",
    statement:
      "Où l'on achète du pain, où l'on poste une lettre, où l'on prend un train. Les lieux d'une ville anglaise, et les prépositions qui les accompagnent sans logique apparente.",
    tip: "L'anglais dit at the bakery pour le lieu et to the baker's pour le commerçant : le 's sous-entend « shop ».",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "Se repérer dans une ville anglaise",
      sections: [
        {
          titre: "Le commerce et le commerçant",
          texte:
            "L'anglais dispose de deux façons de nommer un commerce, et elles cohabitent.\n\nLa première nomme le lieu : the bakery, the butcher's shop, the pharmacy. La seconde nomme le commerçant au génitif, et sous-entend shop : the baker's, the butcher's, the chemist's, the newsagent's. I'm going to the baker's, je vais chez le boulanger.\n\nLa forme au génitif est la plus courante en anglais britannique parlé, et elle s'étend aux personnes : at the doctor's, at the dentist's, at my aunt's. C'est exactement le « chez » du français, qui n'a pas d'équivalent direct.\n\nDeux commerces changent de nom selon la rive. La pharmacie est the chemist's au Royaume-Uni et the drugstore ou pharmacy aux États-Unis. Le bureau de tabac-presse est the newsagent's au Royaume-Uni ; l'équivalent américain n'existe pas vraiment.\n\nEt le supermarché a ses propres mots : trolley au Royaume-Uni, cart aux États-Unis, pour le chariot ; till ou checkout pour la caisse.",
          visuels: [
            {
              type: "tableau",
              titre: "Où l'on va, et pour quoi",
              colonnes: ["Le lieu", "Le génitif", "Ce qu'on y trouve"],
              lignes: [
                ["the bakery", "the baker's", "bread, pastries"],
                ["the butcher's shop", "the butcher's", "meat"],
                ["the pharmacy", "the chemist's", "medicine, toiletries"],
                ["the post office", "—", "stamps, parcels"],
                ["the newsagent's", "the newsagent's", "papers, sweets"],
                ["the hardware shop", "—", "tools, paint"],
                ["the launderette", "—", "washing machines"],
                ["the off-licence", "—", "alcohol, GB uniquement"],
              ],
              note: "Off-licence est britannique : un commerce autorisé à vendre de l'alcool à emporter.",
            },
          ],
        },
        {
          titre: "Les prépositions de lieu, qu'il faut apprendre par cœur",
          texte:
            "Aucune logique ne gouverne le choix entre at, in et on devant un lieu. Il y a des tendances, et beaucoup d'usage.\n\nAt désigne un point, une adresse, une fonction : at the station, at the bank, at school, at work, at home. C'est la préposition par défaut quand on pense à l'endroit comme à un repère.\n\nIn désigne un volume, un intérieur : in the building, in the shop, in town, in the street au Royaume-Uni. L'américain dit on the street.\n\nOn désigne une surface ou une ligne : on the corner, on the left, on the bus, on the train. Les transports collectifs prennent on ; la voiture prend in, parce qu'on y est enfermé.\n\nQuelques expressions figées échappent à toute règle et se retiennent d'un bloc : at the seaside, in hospital sans article au Royaume-Uni, in the hospital aux États-Unis, at university, on holiday au Royaume-Uni, on vacation aux États-Unis.",
          visuels: [
            {
              type: "comparaison",
              titre: "In ou on, dans les transports",
              colonnes: [
                {
                  titre: "ON — on y circule debout",
                  points: [
                    "on the bus, on the train",
                    "on the plane, on a boat",
                    "on my bike",
                  ],
                },
                {
                  titre: "IN — on y est enfermé assis",
                  points: [
                    "in the car",
                    "in a taxi",
                    "in a lift (ascenseur)",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les mots de la rue qui trompent",
          texte:
            "Quelques faux amis urbains valent d'être signalés, parce qu'on les emploie de travers sans jamais être corrigé.\n\nA library est une bibliothèque, pas une librairie — celle-ci est a bookshop, ou a bookstore aux États-Unis.\n\nA store est un magasin en anglais américain et un grand magasin en britannique ; le magasin ordinaire y est a shop.\n\nA cave est une grotte, pas une cave. La cave d'une maison est a cellar, ou a basement pour un sous-sol habitable.\n\nA parking n'existe pas comme nom en anglais : le lieu est a car park au Royaume-Uni, a parking lot aux États-Unis.\n\nEnfin, the pavement est le trottoir au Royaume-Uni et la chaussée aux États-Unis, où le trottoir est the sidewalk. Dire « walk on the pavement » à un Américain revient à conseiller de marcher au milieu de la route.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I'm going to the baker's.",
        francais: "Je vais chez le boulanger.",
        note: "Le génitif sous-entend shop. C'est l'équivalent exact du « chez » français.",
      },
      {
        etranger: "The post office closes at five.",
        francais: "La poste ferme à dix-sept heures.",
        note: "Post office en deux mots. Et l'anglais dit at five, sans « hours ».",
      },
      {
        etranger: "Is there a chemist's near here?",
        francais: "Y a-t-il une pharmacie près d'ici ?",
        note: "Chemist's au Royaume-Uni, pharmacy ou drugstore aux États-Unis.",
      },
      {
        etranger: "The library is next to the town hall.",
        francais: "La bibliothèque est à côté de la mairie.",
        note: "Library, la bibliothèque ; bookshop, la librairie. Le faux ami classique.",
      },
      {
        etranger: "We left the car in the car park.",
        francais: "Nous avons laissé la voiture au parking.",
        note: "Car park au Royaume-Uni, parking lot aux États-Unis. « A parking » n'existe pas.",
      },
      {
        etranger: "Wait for me at the bus stop.",
        francais: "Attends-moi à l'arrêt de bus.",
        note: "At pour un point de repère. Et wait FOR someone, jamais « wait someone ».",
      },
      {
        etranger: "There's a bank on the corner.",
        francais: "Il y a une banque au coin de la rue.",
        note: "On the corner pour l'angle vu de l'extérieur ; in the corner pour l'intérieur d'une pièce.",
      },
      {
        etranger: "She works in a bookshop.",
        francais: "Elle travaille dans une librairie.",
        note: "Bookshop au Royaume-Uni, bookstore aux États-Unis.",
      },
      {
        etranger: "Don't walk on the road, use the pavement.",
        francais: "Ne marche pas sur la route, prends le trottoir.",
        note: "Pavement, le trottoir au Royaume-Uni. Aux États-Unis, c'est sidewalk.",
      },
      {
        etranger: "The market is held on Saturdays.",
        francais: "Le marché a lieu le samedi.",
        note: "Be held pour un événement qui se tient. Et on + jour au pluriel pour l'habitude.",
      },
    ],
  },

  {
    slug: "en-voc-mouvement",
    category: "Vocabulaire",
    title: "Les verbes du mouvement",
    statement:
      "Walk, stroll, wander, march, rush. Là où le français dit « marcher » et ajoute un adverbe, l'anglais change de verbe — et le verbe porte l'humeur.",
    tip: "Un verbe de mouvement anglais dit souvent la manière autant que le déplacement. Il n'a donc pas besoin d'adverbe.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Bouger, en anglais",
      sections: [
        {
          titre: "Le verbe porte la manière",
          texte:
            "C'est l'une des différences structurelles les plus nettes entre les deux langues. Le français décrit le déplacement par le verbe et la manière par un complément : il est entré en courant. L'anglais fait l'inverse : il met la manière dans le verbe et la direction dans une particule — he ran in.\n\nLa conséquence pratique est immédiate. Un anglophone dispose de dizaines de verbes de marche, chacun avec sa nuance, et il les emploie tous. Stroll, c'est flâner ; wander, errer sans but ; stride, marcher à grands pas décidés ; march, marcher au pas ou d'un air fâché ; tiptoe, marcher sur la pointe des pieds ; stagger, tituber ; limp, boiter ; trudge, avancer péniblement.\n\nPour un francophone, l'effort n'est pas de comprendre — le contexte y suffit — mais de produire. Dire he walked slowly and happily n'est pas faux, mais he strolled dit la même chose en un mot, et sonne juste.\n\nLa règle à retenir : quand on s'entend ajouter un adverbe à walk ou à go, il existe probablement un verbe qui le contient déjà.",
          visuels: [
            {
              type: "tableau",
              titre: "Marcher, en dix nuances",
              colonnes: ["Le verbe", "La manière", "Ce qu'il suppose"],
              lignes: [
                ["stroll", "sans se presser", "le plaisir, le dimanche"],
                ["wander", "sans but", "l'errance, parfois l'égarement"],
                ["stride", "à grands pas", "la décision, l'assurance"],
                ["march", "au pas", "l'armée, ou la colère"],
                ["tiptoe", "sur la pointe des pieds", "le silence"],
                ["stagger", "en titubant", "la fatigue, l'ivresse"],
                ["limp", "en boitant", "la blessure"],
                ["trudge", "péniblement", "la boue, la neige, le découragement"],
                ["pace", "de long en large", "l'attente nerveuse"],
                ["sneak", "furtivement", "on ne veut pas être vu"],
              ],
            },
          ],
        },
        {
          titre: "Les particules qui donnent la direction",
          texte:
            "Puisque le verbe porte la manière, c'est la particule qui porte la direction. Elle se colle à presque n'importe quel verbe de mouvement, et le résultat est immédiatement compréhensible.\n\nIn et out pour l'intérieur et l'extérieur : run in, walk out. Up et down pour la hauteur : climb up, go down. Away pour l'éloignement : drive away, walk away. Back pour le retour : come back, go back. Along pour le parcours d'une ligne : walk along the river. Across pour la traversée : swim across the lake. Through pour la pénétration : walk through the park. Round ou around pour le contournement : go round the corner.\n\nLa combinaison verbe + particule multiplie le vocabulaire sans rien ajouter à mémoriser : à partir de dix verbes et dix particules, on dispose de cent déplacements différents.\n\nUne seule difficulté demeure : certaines combinaisons sont figées et ont pris un sens qui n'a plus rien de spatial. Get over, se remettre de ; run into, tomber sur quelqu'un ; come across, découvrir par hasard. Celles-là s'apprennent comme des mots.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le français et l'anglais, inversés",
              colonnes: [
                {
                  titre: "Français : verbe = direction",
                  points: [
                    "Il est entré en courant.",
                    "Elle est sortie en titubant.",
                    "Ils ont traversé à la nage.",
                  ],
                },
                {
                  titre: "Anglais : verbe = manière",
                  points: [
                    "He ran in.",
                    "She staggered out.",
                    "They swam across.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Aller, venir, apporter, emmener",
          texte:
            "Quatre verbes s'organisent autour d'un seul principe : le point de vue de celui qui parle.\n\nCome désigne un mouvement vers le locuteur ou vers son interlocuteur ; go désigne un mouvement dans une autre direction. La différence est la même qu'en français entre venir et aller — sauf sur un point : quand on se rend vers son interlocuteur, l'anglais dit come, comme le français. I'm coming, j'arrive.\n\nBring et take suivent la même logique avec un objet. Bring, c'est apporter vers le point de référence ; take, c'est emporter ailleurs. Bring me the book, take the book to your brother.\n\nLe piège pour un francophone est ailleurs : take someone somewhere veut dire emmener quelqu'un, et bring someone veut dire amener. Le français hésite entre les deux ; l'anglais tranche selon la destination, pas selon le trajet.\n\nDernier point : fetch, aller chercher et rapporter, condense les deux mouvements en un seul verbe. Can you fetch the keys? — un mot pour « va chercher les clés et rapporte-les ».",
        },
      ],
    },
    cartes: [
      {
        etranger: "We strolled along the river.",
        francais: "Nous avons flâné le long de la rivière.",
        note: "Stroll contient déjà la lenteur : inutile d'ajouter slowly.",
      },
      {
        etranger: "He wandered around for an hour.",
        francais: "Il a erré pendant une heure.",
        note: "Wander, marcher sans but. Wonder, avec un o, veut dire se demander.",
      },
      {
        etranger: "She rushed out without a word.",
        francais: "Elle est sortie précipitamment sans un mot.",
        note: "Le verbe porte la manière, la particule porte la direction. Le français fait l'inverse.",
      },
      {
        etranger: "They tiptoed past the bedroom.",
        francais: "Ils sont passés devant la chambre sur la pointe des pieds.",
        note: "Tiptoe dit en un mot ce que le français met en six.",
      },
      {
        etranger: "The old man limped across the road.",
        francais: "Le vieil homme a traversé la route en boitant.",
        note: "Limp, boiter ; across, la traversée. Un verbe, une particule.",
      },
      {
        etranger: "I'll come to your place at eight.",
        francais: "Je viendrai chez toi à huit heures.",
        note: "Come vers l'interlocuteur, go ailleurs. Le point de vue décide.",
      },
      {
        etranger: "Can you bring me the keys?",
        francais: "Tu peux m'apporter les clés ?",
        note: "Bring vers le locuteur, take ailleurs. Fetch condense aller et rapporter.",
      },
      {
        etranger: "He climbed up the ladder carefully.",
        francais: "Il a monté l'échelle avec précaution.",
        note: "Climb up pour la montée. Climb down existe aussi : le verbe ne dit pas le sens.",
      },
      {
        etranger: "She walked away without looking back.",
        francais: "Elle est partie sans se retourner.",
        note: "Away pour l'éloignement définitif ; off pour le départ tout court.",
      },
      {
        etranger: "We drove through the forest.",
        francais: "Nous avons traversé la forêt en voiture.",
        note: "Drive porte le moyen, through porte la traversée. Le français ajoute « en voiture ».",
      },
    ],
  },
];
