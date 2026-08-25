/**
 * Espagnol — ce que les sens perçoivent.
 *
 * Quatrième passe. Un apprenant de B2 sait dire ce qu'il pense ; il ne sait
 * souvent pas dire ce qu'il voit, ce qu'il entend et ce qu'il touche. C'est le
 * vocabulaire le plus fréquent d'un roman et le plus absent des manuels, parce
 * qu'il ne sert à aucune situation type. Il ne sert qu'à décrire, ce qui est
 * précisément le niveau C1.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_SENSACIONES: LotCartes[] = [
  {
    slug: "es-voc-colores-materias",
    category: "Vocabulaire",
    title: "Couleurs et matières",
    statement:
      "Azul marino, verdoso, curtido, desgastado. L'espagnol fabrique ses nuances avec toute une famille de suffixes — -oso, -izo, -áceo, -ado — et nomme les autres par des objets.",
    tip: "Chaque couleur a son suffixe d'approximation, et ils ne s'échangent pas : verdoso, rojizo, grisáceo, azulado. On ne dit ni « verdizo » ni « rojoso ».",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Llevaba un abrigo azul marino.",
        francais: "Elle portait un manteau bleu marine.",
        note: "Azul marino reste invariable : abrigos azul marino, jamais « azules marinos ».",
      },
      {
        etranger: "Las paredes eran de un blanco grisáceo.",
        francais: "Les murs étaient d'un blanc grisâtre.",
        note: "Grisáceo, rojizo, verdoso, azulado : chaque couleur a son suffixe d'approximation.",
      },
      {
        etranger: "El cuero se ha ido curtiendo con los años.",
        francais: "Le cuir s'est patiné avec les années.",
        note: "Ir + gérondif dit le progrès lent. Curtir, tanner et patiner à la fois.",
      },
      {
        etranger: "Es de roble macizo.",
        francais: "C'est en chêne massif.",
        note: "Ser de + matière. Macizo, massif par opposition à plaqué.",
      },
      {
        etranger: "El metal estaba oxidado de parte a parte.",
        francais: "Le métal était rouillé de part en part.",
        note: "Oxidarse, rouiller. El óxido, la rouille comme l'oxyde.",
      },
      {
        etranger: "La tela es un poco transparente.",
        francais: "Le tissu est un peu transparent.",
        note: "Transparente, translúcido : le second laisse passer la lumière sans l'image.",
      },
      {
        etranger: "La pintura se está descascarillando.",
        francais: "La peinture s'écaille.",
        note: "Descascarillarse, s'écailler. Formé sur cáscara, la coquille.",
      },
      {
        etranger: "Un bolso de cuero color canela.",
        francais: "Un sac en cuir couleur cannelle.",
        note: "Color + nom reste invariable : dos bolsos color canela.",
      },
      {
        etranger: "La madera se ha oscurecido con el tiempo.",
        francais: "Le bois a foncé avec le temps.",
        note: "Oscurecerse, foncer. Le suffixe -ecer fabrique des verbes de changement d'état, souvent avec le préfixe en- : ennegrecer, envejecer.",
      },
      {
        etranger: "Es un muro de piedra desgastado.",
        francais: "C'est un mur de pierre usé par le temps.",
        note: "Desgastado, usé par le frottement ou les intempéries.",
      },
    ],
  },

  {
    slug: "es-voc-formas-medidas",
    category: "Vocabulaire",
    title: "Formes, tailles et mesures",
    statement:
      "Escaso, largo, apenas, cerca de. L'espagnol approxime avec précision, et « un largo cuarto de hora » ne dit pas la même chose qu'« un escaso cuarto de hora ».",
    tip: "Largo devant une durée veut dire « bien », escaso veut dire « à peine ». Le chiffre est le même, l'écart change de côté.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Tardó dos largas horas.",
        francais: "Ça a bien pris deux heures.",
        note: "Largo devant une durée : au moins ce chiffre, sans doute davantage.",
      },
      {
        etranger: "Tiene apenas veinte años.",
        francais: "Il a tout juste vingt ans.",
        note: "Apenas, à peine, avec l'idée qu'on est en dessous plutôt qu'au-dessus.",
      },
      {
        etranger: "La sala es más o menos cuadrada.",
        francais: "La pièce est à peu près carrée.",
        note: "Más o menos, l'approximation la plus courante à l'oral.",
      },
      {
        etranger: "Me llega más o menos a la cintura.",
        francais: "Ça m'arrive à peu près à la taille.",
        note: "Llegar a, arriver à. Le corps sert d'étalon comme en français.",
      },
      {
        etranger: "El camino se estrecha más adelante.",
        francais: "Le chemin se rétrécit plus loin.",
        note: "Estrecharse, se rétrécir. Ensancharse dit l'inverse.",
      },
      {
        etranger: "La caja es el doble de profunda.",
        francais: "La boîte est deux fois plus profonde.",
        note: "El doble de + adjectif. La mitad de dit la moitié.",
      },
      {
        etranger: "No es del todo lo bastante grande.",
        francais: "Ce n'est pas tout à fait assez grand.",
        note: "Lo bastante + adjectif, assez. No del todo, pas tout à fait.",
      },
      {
        etranger: "Córtalo a lo largo.",
        francais: "Coupe-le dans la longueur.",
        note: "A lo largo, dans la longueur ; a lo ancho, dans la largeur.",
      },
      {
        etranger: "El hueco es de un par de centímetros.",
        francais: "L'écart fait quelques centimètres.",
        note: "Un par de dit deux ou trois, sans précision. Un hueco, un creux ou un vide.",
      },
      {
        etranger: "No pesa casi nada.",
        francais: "Ça ne pèse presque rien.",
        note: "Casi nada, presque rien. La formule vaut pour le poids comme pour le prix.",
      },
    ],
  },

  {
    slug: "es-voc-olores-sabores",
    category: "Vocabulaire",
    title: "Odeurs et saveurs",
    statement:
      "Soso, ácido, rancio, contundente. Le vocabulaire du goût espagnol est riche, et « soso » n'a pas d'équivalent français d'un seul mot.",
    tip: "Oler a et saber a désignent la source : huele a humo, sabe a limón. Sans la préposition, on décrit l'impression : huele bien, sabe raro.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "La sopa está bastante sosa.",
        francais: "La soupe est plutôt fade.",
        aussi: ["La soupe manque de goût."],
        note: "Soso dit le manque de sel autant que le manque de caractère. Le mot se dit aussi d'une personne.",
      },
      {
        etranger: "Huele a leña quemada.",
        francais: "Ça sent le feu de bois.",
        note: "Oler a + la source. Le verbe est irrégulier : huelo, hueles, huele.",
      },
      {
        etranger: "El pan está duro.",
        francais: "Le pain est rassis.",
        note: "Duro pour le pain sec ; rancio pour ce qui a tourné, surtout un corps gras.",
      },
      {
        etranger: "Deja un regusto ácido.",
        francais: "Ça laisse un arrière-goût acide.",
        note: "Un regusto, un arrière-goût. Le préfixe re- dit ce qui revient.",
      },
      {
        etranger: "La salsa es demasiado contundente.",
        francais: "La sauce est trop lourde.",
        note: "Contundente pour un plat dense et nourrissant. Le mot dit aussi accablant.",
      },
      {
        etranger: "Hay un ligero olor a humedad.",
        francais: "Il y a une légère odeur d'humidité.",
        note: "Un olor a, une odeur de. La humedad, l'humidité d'un mur.",
      },
      {
        etranger: "Sabe un poco a quemado.",
        francais: "Ça a un léger goût de brûlé.",
        note: "Saber a + participe ou nom. Saber veut aussi dire savoir : le contexte tranche.",
      },
      {
        etranger: "El queso es bastante fuerte.",
        francais: "Le fromage est assez fort.",
        note: "Fuerte pour une odeur ou un goût puissant. Le mot est neutre, pas péjoratif.",
      },
      {
        etranger: "Te deja la boca seca.",
        francais: "Ça assèche la bouche.",
        note: "Dejar + complément + adjectif : la structure décrit l'effet laissé.",
      },
      {
        etranger: "La fruta no está del todo madura.",
        francais: "Le fruit n'est pas tout à fait mûr.",
        note: "Maduro, mûr. Madurar dit le mûrissement, au propre comme au figuré.",
      },
    ],
  },

  {
    slug: "es-voc-sonidos",
    category: "Vocabulaire",
    title: "Bruits et silences",
    statement:
      "Crujir, retumbar, zumbar, chirriar. L'espagnol a un verbe pour chaque bruit, et beaucoup sont des onomatopées devenues verbes.",
    tip: "Ces verbes s'emploient à l'imparfait pour un bruit qui dure dans un récit, au passé simple pour un bruit unique. C'est l'aspect qui tranche.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "El suelo crujía bajo los pies.",
        francais: "Le plancher craquait sous les pas.",
        note: "Crujir, craquer. Le verbe se dit du bois, de la neige et des articulations.",
      },
      {
        etranger: "Las ventanas retumbaban con el viento.",
        francais: "Les fenêtres tremblaient dans le vent.",
        note: "Retumbar, résonner sourdement. Le verbe suppose du volume.",
      },
      {
        etranger: "La nevera zumba toda la noche.",
        francais: "Le réfrigérateur ronronne toute la nuit.",
        note: "Zumbar, bourdonner. Le mot se dit d'un insecte comme d'un appareil.",
      },
      {
        etranger: "Algo cayó con un golpe seco.",
        francais: "Quelque chose est tombé avec un bruit sourd.",
        note: "Un golpe seco, un choc mat. L'espagnol qualifie le coup plutôt que le bruit.",
      },
      {
        etranger: "La lluvia repiqueteaba en el tejado.",
        francais: "La pluie tambourinait sur le toit.",
        note: "Repiquetear, tambouriner. Formé sur repicar, sonner les cloches.",
      },
      {
        etranger: "La sala enmudeció de golpe.",
        francais: "La salle s'est tue d'un coup.",
        note: "Enmudecer, devenir muet. De golpe, d'un coup.",
      },
      {
        etranger: "Los neumáticos chirriaron en el asfalto.",
        francais: "Les pneus ont crissé sur le bitume.",
        note: "Chirriar, crisser. Le verbe se dit des gonds comme des freins.",
      },
      {
        etranger: "Lo oía murmurar algo.",
        francais: "Je l'entendais marmonner quelque chose.",
        note: "Murmurar, parler bas — et aussi médire, selon le contexte.",
      },
      {
        etranger: "La casa resonaba con las risas.",
        francais: "La maison résonnait de rires.",
        note: "Resonar con, résonner de. La préposition est con, jamais de.",
      },
      {
        etranger: "No se oía ni un ruido.",
        francais: "On n'entendait pas un bruit.",
        note: "Ni un + nom dans une négation vaut « pas le moindre ».",
      },
    ],
  },

  {
    slug: "es-voc-luz",
    category: "Vocabulaire",
    title: "Lumière et obscurité",
    statement:
      "Brillar, relucir, parpadear, deslumbrar. Quatre verbes pour ce que le français dit avec « briller », et chacun décrit une lumière différente.",
    tip: "Deslumbrar est une lumière qui blesse l'œil ; relucir une lumière qui flatte. Le premier est presque toujours un reproche, le second un éloge.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Las brasas brillaban en la oscuridad.",
        francais: "Les braises rougeoyaient dans le noir.",
        note: "Brillar, luire. Le verbe couvre le plus large éventail de lumières.",
      },
      {
        etranger: "El sol deslumbraba en el agua.",
        francais: "Le soleil éblouissait en se reflétant sur l'eau.",
        note: "Deslumbrar, éblouir. Le préfixe des- dit ici l'excès, pas la privation.",
      },
      {
        etranger: "La bombilla parpadeó y se apagó.",
        francais: "L'ampoule a vacillé puis s'est éteinte.",
        note: "Parpadear, cligner et vaciller. Formé sur párpado, la paupière.",
      },
      {
        etranger: "¿Puedes bajar las luces?",
        francais: "Peux-tu baisser les lumières ?",
        note: "Bajar las luces. Atenuar est le terme technique du variateur.",
      },
      {
        etranger: "La luz se derramaba por la puerta.",
        francais: "La lumière se déversait par la porte.",
        note: "Derramarse, se répandre comme un liquide. L'image vaut dans les deux langues.",
      },
      {
        etranger: "La sala estaba a oscuras.",
        francais: "La pièce était plongée dans le noir.",
        note: "A oscuras, sans lumière. La formule est figée et invariable.",
      },
      {
        etranger: "La pantalla no dejaba de deslumbrarme.",
        francais: "L'écran n'arrêtait pas de m'éblouir.",
        note: "No dejar de + infinitif dit la répétition agaçante.",
      },
      {
        etranger: "Las sombras se alargaban sobre el césped.",
        francais: "Les ombres s'allongeaient sur la pelouse.",
        note: "Alargarse, s'allonger. Le verbe appartient surtout au récit.",
      },
      {
        etranger: "Un haz de luz atravesaba el polvo.",
        francais: "Un rai de lumière traversait la poussière.",
        note: "Un haz de luz, un faisceau. Le pluriel est haces.",
      },
      {
        etranger: "Habían salido las estrellas.",
        francais: "Les étoiles étaient sorties.",
        aussi: ["Le ciel était étoilé."],
        note: "Salir se dit des astres qui apparaissent : sale el sol, salen las estrellas.",
      },
    ],
  },

  {
    slug: "es-voc-texturas",
    category: "Vocabulaire",
    title: "Le toucher",
    statement:
      "Pegajoso, resbaladizo, áspero, quebradizo. Le vocabulaire du toucher est celui qu'on emploie le plus dans une cuisine et un atelier, et le moins dans un manuel.",
    tip: "Beaucoup de ces adjectifs se forment en -oso ou -izo : pegajoso de pegar, resbaladizo de resbalar. Le procédé est productif et se devine.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Tengo las manos pegajosas.",
        francais: "J'ai les mains collantes.",
        note: "Pegajoso, formé sur pegar, coller. Le suffixe -oso est très productif.",
      },
      {
        etranger: "Los escalones están resbaladizos.",
        francais: "Les marches sont glissantes.",
        note: "Resbaladizo, formé sur resbalar, glisser. C'est le mot des panneaux.",
      },
      {
        etranger: "La tela es áspera al tacto.",
        francais: "Le tissu est rêche au toucher.",
        note: "Al tacto, au toucher. Áspero s'oppose à suave.",
      },
      {
        etranger: "Los huesos se vuelven quebradizos.",
        francais: "Les os deviennent cassants.",
        note: "Quebradizo, cassant. Formé sur quebrar, briser.",
      },
      {
        etranger: "La superficie es completamente lisa.",
        francais: "La surface est parfaitement lisse.",
        note: "Liso s'oppose à rugoso. Alisar, lisser.",
      },
      {
        etranger: "La masa está demasiado desmenuzable.",
        francais: "La pâte est trop friable.",
        note: "Desmenuzable, friable. Le verbe desmenuzar veut dire émietter.",
      },
      {
        etranger: "La hoja está afiladísima.",
        francais: "La lame est extrêmement tranchante.",
        note: "Afilado, aiguisé. Le superlatif en -ísimo est très employé à l'oral.",
      },
      {
        etranger: "La lana pica en la piel.",
        francais: "La laine gratte la peau.",
        note: "Picar, gratter ou piquer. Le verbe se dit aussi d'un piment.",
      },
      {
        etranger: "La pintura todavía está pegajosa.",
        francais: "La peinture est encore poisseuse.",
        note: "Le même adjectif qu'à la première carte, dans un autre contexte.",
      },
      {
        etranger: "Tiene una textura granulosa.",
        francais: "Ça a une texture granuleuse.",
        note: "Granuloso, formé sur grano. Le mot se dit aussi d'une image.",
      },
    ],
  },

  {
    slug: "es-verbos-movimiento-2",
    category: "Verbes",
    title: "Toutes les façons de marcher",
    statement:
      "Pasear, caminar a zancadas, arrastrarse, cojear. Là où le français dit « marcher », l'espagnol impose de choisir — et le choix dit l'humeur et l'état.",
    tip: "Ces verbes ne se distinguent pas par la vitesse mais par ce qu'ils révèlent. Arrastrar los pies dit la fatigue ou l'ennui, jamais la lenteur seule.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Paseamos junto al río.",
        francais: "Nous nous sommes promenés au bord de la rivière.",
        note: "Pasear, marcher sans but ni hâte. Dar un paseo se dit de même.",
      },
      {
        etranger: "Entró a grandes zancadas.",
        francais: "Il est entré à grands pas.",
        note: "Una zancada, une enjambée. A grandes zancadas dit l'assurance ou la hâte.",
      },
      {
        etranger: "Avanzaban penosamente por la nieve.",
        francais: "Ils avançaient péniblement dans la neige.",
        note: "Penosamente, avec peine. L'adverbe est formé sur pena.",
      },
      {
        etranger: "Cojea de la pierna izquierda.",
        francais: "Elle boite de la jambe gauche.",
        note: "Cojear de, boiter de. Cojo comme adjectif dit boiteux.",
      },
      {
        etranger: "Salí corriendo para coger el autobús.",
        francais: "Je suis parti en courant pour attraper le bus.",
        note: "Salir corriendo, partir en courant. Le gérondif dit la manière.",
      },
      {
        etranger: "Arrastraba los pies hasta la puerta.",
        francais: "Il traînait les pieds jusqu'à la porte.",
        note: "Arrastrar los pies, traîner les pieds — au propre et au figuré.",
      },
      {
        etranger: "Deambularon una hora sin rumbo.",
        francais: "Ils ont erré une heure sans but.",
        note: "Deambular, errer. Sin rumbo, sans direction.",
      },
      {
        etranger: "Pasó de puntillas por delante.",
        francais: "Elle est passée devant sur la pointe des pieds.",
        note: "De puntillas, sur la pointe des pieds. La formule est figée au pluriel.",
      },
      {
        etranger: "Se levantó tambaleándose.",
        francais: "Il s'est relevé en titubant.",
        note: "Tambalearse, tituber. Le gérondif dit la manière du relèvement.",
      },
      {
        etranger: "Volvimos despacio a casa.",
        francais: "Nous sommes rentrés lentement à la maison.",
        note: "Despacio, lentement. L'adverbe ne prend jamais de -mente.",
      },
    ],
  },

  {
    slug: "es-verbos-manipulacion",
    category: "Verbes",
    title: "Prendre, tenir, lâcher",
    statement:
      "Agarrar, aferrarse, arrebatar, soltar. Quatre verbes pour ce que le français dit avec « prendre » et « tenir », et chacun dit une force et une intention.",
    tip: "Agarrar est rapide et sans façon, arrebatar est un vol, aferrarse dit la peur de lâcher. Le même geste, trois jugements.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Agarró el abrigo y se fue.",
        francais: "Il a attrapé son manteau et il est parti.",
        note: "Agarrar, saisir vite. Coger se dit en Espagne, à éviter en Amérique latine.",
      },
      {
        etranger: "Se aferró a la barandilla.",
        francais: "Elle s'est agrippée à la rampe.",
        note: "Aferrarse a, s'accrocher. Le verbe dit la peur de lâcher.",
      },
      {
        etranger: "Alguien le arrebató el bolso.",
        francais: "Quelqu'un lui a arraché son sac.",
        note: "Arrebatar, arracher des mains. Le verbe suppose presque toujours le vol.",
      },
      {
        etranger: "Sujeta bien el mango.",
        francais: "Tiens bien la poignée.",
        note: "Sujetar, maintenir fermement. Le verbe dit aussi fixer un objet.",
      },
      {
        etranger: "Suéltame el brazo.",
        francais: "Lâche-moi le bras.",
        note: "Soltar, lâcher. L'impératif soltar + pronom soude les deux mots.",
      },
      {
        etranger: "Me tendió el expediente.",
        francais: "Il m'a tendu le dossier.",
        note: "Tender algo a alguien, tendre. Le verbe est irrégulier : tiendo, tiendes.",
      },
      {
        etranger: "Se lo metió en el bolsillo.",
        francais: "Il l'a glissé dans sa poche.",
        note: "Meterse algo en el bolsillo. Le pronom se dit que c'est pour soi.",
      },
      {
        etranger: "No se te caiga.",
        francais: "Ne le fais pas tomber.",
        note: "Caérsele algo a alguien : la construction dit que c'est involontaire.",
      },
      {
        etranger: "Empujó la caja a un lado.",
        francais: "Il a poussé la caisse sur le côté.",
        note: "Empujar, pousser. A un lado, sur le côté.",
      },
      {
        etranger: "Alargó la mano hacia la sal.",
        francais: "Elle a tendu la main vers le sel.",
        note: "Alargar la mano hacia, tendre la main vers, sans forcément atteindre.",
      },
    ],
  },
];
