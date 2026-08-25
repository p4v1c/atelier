/**
 * Espagnol — le socle A1.
 *
 * L'espagnol paraît facile à un francophone, et il l'est au début. Le piège
 * est ailleurs : dans les faux amis, dans ser et estar, et dans le fait qu'on
 * se croit compris alors qu'on décalque du français.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_DEBUTANT: LotCartes[] = [
  {
    slug: "es-nombres-heure",
    category: "Les bases",
    title: "Compter, dire l'heure et la date",
    statement:
      "L'heure espagnole se dit avec ser, au pluriel sauf à une heure. Les dates n'emploient pas d'ordinal, contrairement à l'anglais.",
    tip: "Son las tres, mais es la una : le verbe s'accorde avec l'heure, et une heure est singulière.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "Son las tres y media.", francais: "Il est trois heures et demie.", note: "Son au pluriel, parce que « tres » est pluriel." },
      { etranger: "Es la una y cuarto.", francais: "Il est une heure et quart.", note: "Es au singulier : une seule heure." },
      { etranger: "Son las siete menos cuarto.", francais: "Il est sept heures moins le quart." },
      { etranger: "Nací en 1997.", francais: "Je suis né en 1997.", note: "nacer → nací à l'indefinido." },
      { etranger: "Mi cumpleaños es el tres de mayo.", francais: "Mon anniversaire est le trois mai.", note: "Pas d'ordinal, et les mois ne prennent pas de majuscule." },
      { etranger: "Somos doce.", francais: "Nous sommes douze." },
      { etranger: "Cuesta diecinueve euros con cincuenta.", francais: "Ça coûte dix-neuf euros cinquante." },
      { etranger: "Vivo en el primer piso.", francais: "J'habite au premier étage.", note: "primero se raccourcit en primer devant un nom masculin." },
      { etranger: "Hasta el martes.", francais: "À mardi.", note: "L'article est obligatoire : el martes. Et pas de majuscule aux jours." },
      { etranger: "Hoy es veintiuno de junio.", francais: "Nous sommes le vingt et un juin." },
    ],
  },

  {
    slug: "es-gens",
    category: "Les bases",
    title: "La famille et les gens",
    statement:
      "Présenter, décrire, situer les gens. L'espagnol emploie ser pour ce qu'ils sont et estar pour comment ils vont — la distinction commence ici.",
    tip: "La possession se dit avec de : el marido de mi hermana. Il n'existe pas d'équivalent du 's anglais.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "Esta es mi hermana.", francais: "Voici ma sœur.", note: "Esta, féminin, s'accorde avec hermana." },
      { etranger: "Tengo dos hermanos.", francais: "J'ai deux frères.", note: "hermanos peut désigner des frères, ou des frères et sœurs." },
      { etranger: "El marido de mi hermana se llama Tomás.", francais: "Le mari de ma sœur s'appelle Tomás.", note: "La possession passe par de, jamais par un génitif." },
      { etranger: "Es mi mejor amiga.", francais: "C'est ma meilleure amie.", note: "amiga au féminin, et mejor ne s'accorde pas en genre." },
      { etranger: "Está casado y tiene dos hijos.", francais: "Il est marié et a deux enfants.", note: "Casado prend estar : c'est un état, pas une identité." },
      { etranger: "Mis padres viven en Bretaña.", francais: "Mes parents habitent en Bretagne.", note: "padres veut dire les parents ; le père seul est el padre." },
      { etranger: "¿Cuántos años tiene tu hija?", francais: "Quel âge a ta fille ?", note: "L'âge se dit avec tener, comme en français avec « avoir »." },
      { etranger: "Nos llevamos muy bien.", francais: "On s'entend très bien." },
      { etranger: "Soy el menor de tres.", francais: "Je suis le plus jeune de trois.", note: "menor pour l'âge ; más pequeño pour la taille." },
      { etranger: "Se parece a su madre.", francais: "Elle ressemble à sa mère.", note: "parecerse a. Sans le pronom, parecer veut dire sembler." },
    ],
  },

  {
    slug: "es-acheter",
    category: "Vie quotidienne",
    title: "Faire des achats",
    statement:
      "Demander un prix, une taille, essayer, rendre. En Espagne, on tutoie très vite, y compris en magasin.",
    tip: "Pour demander poliment, l'imparfait suffit : quería voir plus doux que quiero, sans être moins clair.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "¿Cuánto cuesta?", francais: "Ça coûte combien ?", note: "costar → cuesta : diphtongue o→ue." },
      { etranger: "¿Lo tiene en una talla más pequeña?", francais: "Vous l'avez en plus petit ?", note: "talla pour les vêtements ; número pour les chaussures." },
      { etranger: "¿Me lo puedo probar?", francais: "Je peux l'essayer ?", note: "probarse pour un vêtement ; probar tout court, c'est goûter." },
      { etranger: "Solo estoy mirando, gracias.", francais: "Je regarde seulement, merci." },
      { etranger: "¿Aceptan tarjeta?", francais: "Vous prenez la carte ?" },
      { etranger: "¿Me da un ticket, por favor?", francais: "Je peux avoir un ticket, s'il vous plaît ?" },
      { etranger: "Quería devolver esto.", francais: "Je voudrais rendre ceci.", note: "L'imparfait de politesse, très courant en Espagne." },
      { etranger: "No me queda bien.", francais: "Ça ne me va pas.", note: "quedar bien pour la taille et l'allure." },
      { etranger: "¿Está de oferta?", francais: "C'est en promotion ?", note: "de oferta, en promotion ; de rebajas, en soldes." },
      { etranger: "Quédese con el cambio.", francais: "Gardez la monnaie." },
    ],
  },

  {
    slug: "es-decrire",
    category: "Les bases",
    title: "Décrire : accords, couleurs, comparaisons",
    statement:
      "Les adjectifs espagnols s'accordent en genre et en nombre, comme en français, et se placent après le nom. C'est plus simple que l'anglais, mais l'accord est impitoyable.",
    tip: "Un coche rojo, una casa roja, unos coches rojos. L'adjectif suit le nom, et s'accorde avec lui.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "un coche rojo", francais: "une voiture rouge", note: "coche est masculin en espagnol, contrairement au français." },
      { etranger: "Es demasiado caro.", francais: "C'est trop cher.", note: "demasiado pour l'excès ; muy pour l'intensité." },
      { etranger: "No es lo bastante grande.", francais: "Ce n'est pas assez grand." },
      { etranger: "Este es más barato.", francais: "Celui-ci est moins cher.", aussi: ["Celui-ci est meilleur marché."], note: "más barato, littéralement plus bon marché." },
      { etranger: "Es el mejor.", francais: "C'est le meilleur.", note: "bueno → mejor → el mejor. Irrégulier, comme en français." },
      { etranger: "Me gusta mucho.", francais: "Ça me plaît beaucoup.", note: "Le sujet de gustar est la chose aimée, pas la personne : littéralement « ça me plaît »." },
      { etranger: "No me gusta demasiado.", francais: "Ça ne me plaît pas trop." },
      { etranger: "Tiene buena pinta.", francais: "Ça a l'air bien.", note: "Expression très courante, surtout à propos de nourriture." },
      { etranger: "¿De qué color es?", francais: "C'est de quelle couleur ?" },
      { etranger: "Es un poco pequeño.", francais: "C'est un peu petit." },
    ],
  },

  {
    slug: "es-meteo-lieux",
    category: "Vie quotidienne",
    title: "Le temps qu'il fait, et où l'on est",
    statement:
      "La météo se dit avec hacer, comme le français avec « faire ». Pour situer une chose ou une personne : estar. Mais un événement se situe avec ser : la fiesta es en mi casa.",
    tip: "Hace frío, hace calor, hace sol. Mais llueve et nieva sont des verbes à eux seuls.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "Otra vez llueve.", francais: "Il pleut encore.", note: "llover → llueve. Un verbe à lui seul, sans hacer." },
      { etranger: "Hace mucho calor hoy.", francais: "Il fait très chaud aujourd'hui.", note: "hacer pour la météo. Et mucho calor, pas « muy calor » : calor est un nom." },
      { etranger: "Hace un frío que pela.", francais: "Il fait un froid de canard.", note: "Expression familière très employée." },
      { etranger: "¿Está lejos de aquí?", francais: "C'est loin d'ici ?" },
      { etranger: "Está aquí al lado.", francais: "C'est juste à côté." },
      { etranger: "Siga todo recto y gire a la izquierda.", francais: "Continuez tout droit et tournez à gauche.", note: "Impératif de vouvoiement : siga, gire." },
      { etranger: "Está enfrente de la estación.", francais: "C'est en face de la gare.", note: "enfrente de, en face ; delante de, devant." },
      { etranger: "Me he perdido.", francais: "Je me suis perdu." },
      { etranger: "¿Cuánto se tarda?", francais: "Ça prend combien de temps ?", note: "tardar pour la durée d'un trajet." },
      { etranger: "Son unos diez minutos andando.", francais: "C'est à environ dix minutes à pied." },
    ],
  },
];
