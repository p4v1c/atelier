/**
 * Espagnol — huit derniers champs.
 *
 * Fin de la cinquième passe. Le jardin, les animaux, le ciel, la roche, la
 * santé mentale, la technique de cuisine, l'administration et le monde
 * associatif. Les derniers domaines fréquents que le module ne couvrait pas.
 *
 * Deux méritent d'être signalés : la santé mentale, dont le vocabulaire change
 * vite, et l'administration, où un mot mal choisi coûte un rendez-vous.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_DOMINIOS_3: LotCartes[] = [
  {
    slug: "es-voc-jardineria",
    category: "Vocabulaire",
    title: "Le jardin",
    statement:
      "Sembrar, podar, desbrozar, acolchar. Le jardinage a un verbe pour chaque geste, et « planter » n'en couvre aucun correctement.",
    tip: "Sembrar, c'est semer une graine ; plantar, c'est mettre en terre ce qui a déjà poussé. Les deux s'échangent rarement.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Sembramos las semillas en marzo.",
        francais: "Nous avons semé les graines en mars.",
        note: "Sembrar, semer. Le verbe diphtongue : siembro, siembras, siembra.",
      },
      {
        etranger: "Hay que podar los rosales.",
        francais: "Il faut tailler les rosiers.",
        note: "Podar, tailler. La poda est la taille elle-même.",
      },
      {
        etranger: "Pasé la mañana quitando malas hierbas.",
        francais: "J'ai passé la matinée à désherber.",
        aussiEtranger: ["Pasé la mañana desherbando."],
        note: "Las malas hierbas, les mauvaises herbes. Desherbar existe, moins courant.",
      },
      {
        etranger: "El suelo necesita acolchado.",
        francais: "Le sol a besoin de paillis.",
        note: "El acolchado, le paillis. Le mot vient de colcha, le couvre-lit.",
      },
      {
        etranger: "Plantamos los tomates ya crecidos.",
        francais: "Nous avons planté les tomates déjà poussées.",
        note: "Plantar, mettre en terre ce qui a déjà poussé — à l'inverse de sembrar, semer une graine.",
      },
      {
        etranger: "Riégalas con moderación.",
        francais: "Arrose-les avec modération.",
        note: "Regar, arroser. Le verbe diphtongue : riego, riegas, riega.",
      },
      {
        etranger: "La helada acabó con los plantones.",
        francais: "Le gel a détruit les jeunes plants.",
        note: "Un plantón, un jeune plant. Acabar con, venir à bout de.",
      },
      {
        etranger: "Hay que desbrozar el camino.",
        francais: "Il faut débroussailler le chemin.",
        note: "Desbrozar, débroussailler : dégager la végétation envahissante, plus radical que quitar malas hierbas.",
      },
      {
        etranger: "Estas plantas prosperan a la sombra.",
        francais: "Ces plantes se plaisent à l'ombre.",
        note: "Prosperar, prospérer. Le verbe se dit d'une plante comme d'une entreprise.",
      },
      {
        etranger: "Hay que cortar el césped otra vez.",
        francais: "Il faut retondre la pelouse.",
        aussiEtranger: ["Hay que cortar el pasto otra vez."],
        note: "Cortar el césped, tondre en Espagne ; el pasto en Amérique latine. Un cortacésped, une tondeuse.",
      },
    ],
  },

  {
    slug: "es-voc-animales",
    category: "Vocabulaire",
    title: "Les animaux",
    statement:
      "Manada, rebaño, enjambre, camada. L'espagnol a un collectif différent pour chaque espèce, et les mots ne s'échangent pas.",
    tip: "Beaucoup d'animaux ont un mâle, une femelle et un petit distincts : caballo, yegua, potro ; carnero, oveja, cordero. Le générique n'est pas toujours le masculin.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Un rebaño de ovejas cortaba la carretera.",
        francais: "Un troupeau de moutons bloquait la route.",
        note: "Un rebaño pour les moutons, una manada pour les fauves et les bovins.",
      },
      {
        etranger: "Un enjambre de abejas se posó en el árbol.",
        francais: "Un essaim d'abeilles s'est posé dans l'arbre.",
        note: "Un enjambre pour les abeilles. Una plaga se dit d'une invasion nuisible.",
      },
      {
        etranger: "La gata tuvo una camada de cinco.",
        francais: "La chatte a eu une portée de cinq.",
        note: "Una camada, une portée. Le mot vient de cama, le lit.",
      },
      {
        etranger: "El perro estuvo ladrando toda la noche.",
        francais: "Le chien a aboyé toute la nuit.",
        note: "Ladrar, aboyer. Un ladrido, un aboiement.",
      },
      {
        etranger: "Por aquí hay muchos zorros.",
        francais: "Il y a beaucoup de renards par ici.",
        note: "Un zorro, un renard. Le mot dit aussi un homme rusé.",
      },
      {
        etranger: "El caballo derribó al jinete.",
        francais: "Le cheval a désarçonné son cavalier.",
        note: "Derribar a alguien, le jeter à terre — c'est le verbe du cheval qui désarçonne. Una yegua, la jument ; un potro, le poulain.",
      },
      {
        etranger: "Los pájaros anidan bajo el alero.",
        francais: "Les oiseaux nichent sous l'avant-toit.",
        note: "Anidar, nicher. El alero, l'avant-toit.",
      },
      {
        etranger: "Los ciervos cruzan al anochecer.",
        francais: "Les cerfs traversent au crépuscule.",
        note: "Un ciervo, un cerf. Al anochecer, à la tombée du jour.",
      },
      {
        etranger: "Llevaron el ganado al mercado.",
        francais: "Ils ont mené le bétail au marché.",
        note: "Llevar el ganado. El ganado reste un collectif singulier.",
      },
      {
        etranger: "No den de comer a los animales.",
        francais: "Ne nourrissez pas les animaux.",
        note: "Dar de comer a, nourrir. La formule est celle des panneaux de parcs.",
      },
    ],
  },

  {
    slug: "es-voc-astronomia",
    category: "Vocabulaire",
    title: "Le ciel et l'espace",
    statement:
      "Órbita, eclipse, año luz, lanzamiento. Le vocabulaire du ciel revient dans toute la presse scientifique, et plusieurs de ses mots piègent.",
    tip: "Un año luz mesure une distance, pas une durée. L'erreur est si fréquente qu'elle sert de test dans les articles de vulgarisation.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "La sonda entró en órbita la semana pasada.",
        francais: "La sonde s'est placée en orbite la semaine dernière.",
        note: "Entrar en órbita, se placer en orbite. Le verbe orbitar existe aussi : orbita alrededor de Marte.",
      },
      {
        etranger: "El eclipse duró cuatro minutos.",
        francais: "L'éclipse a duré quatre minutes.",
        note: "Un eclipse est masculin, alors que le français dit « une éclipse ». Eclipsar s'emploie au figuré.",
      },
      {
        etranger: "Está a cuatro años luz.",
        francais: "C'est à quatre années-lumière.",
        note: "Un año luz est une distance. L'espagnol n'y met pas de trait d'union.",
      },
      {
        etranger: "Se canceló el lanzamiento.",
        francais: "Le lancement a été annulé.",
        note: "El lanzamiento, le lancement. Le verbe est lanzar.",
      },
      {
        etranger: "El telescopio captó una señal débil.",
        francais: "Le télescope a capté un signal faible.",
        note: "Captar, capter. Le verbe est le même que pour une radio.",
      },
      {
        etranger: "El cometa vuelve cada setenta y seis años.",
        francais: "La comète revient tous les soixante-seize ans.",
        note: "Un cometa, masculin, est la comète ; una cometa, féminin, est un cerf-volant.",
      },
      {
        etranger: "El róver amartizó al amanecer.",
        francais: "Le robot s'est posé sur Mars à l'aube.",
        note: "Amartizar existe pour Mars, alunizar pour la Lune ; aterrizar reste réservé à la Terre.",
      },
      {
        etranger: "La estrella colapsó en un agujero negro.",
        francais: "L'étoile s'est effondrée en trou noir.",
        note: "Colapsar en, s'effondrer en. Un agujero negro, un trou noir.",
      },
      {
        etranger: "La misión superó el presupuesto.",
        francais: "La mission a dépassé son budget.",
        aussiEtranger: ["La misión rebasó el presupuesto."],
        note: "Superar el presupuesto. Rebasar se dit aussi.",
      },
      {
        etranger: "Las erupciones solares afectan a las comunicaciones.",
        aussiEtranger: ["Las erupciones solares afectan las comunicaciones."],
        francais: "Les éruptions solaires perturbent les communications.",
        note: "Una erupción solar. Afectar a est la construction courante en Espagne ; on entend aussi afectar seul, surtout en Amérique.",
      },
    ],
  },

  {
    slug: "es-voc-geologia",
    category: "Vocabulaire",
    title: "La terre et les roches",
    statement:
      "Lecho rocoso, erosión, falla, sedimento. Le vocabulaire géologique donne à l'espagnol courant plusieurs de ses images les plus fortes.",
    tip: "Una falla est une faille géologique, mais aussi une faute et, à Valence, une figure brûlée pendant les fêtes. Le contexte tranche largement.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Alcanzaron el lecho rocoso a diez metros.",
        francais: "Ils ont atteint la roche mère à dix mètres.",
        note: "El lecho rocoso, la roche en place. El lecho est aussi le lit d'une rivière.",
      },
      {
        etranger: "La erosión ha ensanchado el barranco.",
        francais: "L'érosion a élargi le ravin.",
        note: "La erosión s'emploie au figuré : la erosión de la confianza.",
      },
      {
        etranger: "La ciudad se asienta sobre una falla.",
        francais: "La ville est bâtie sur une faille.",
        note: "Asentarse sobre, reposer sur. Una falla dit aussi une faute.",
      },
      {
        etranger: "El sedimento se depositó durante la noche.",
        francais: "Le sédiment s'est déposé pendant la nuit.",
        aussiEtranger: ["Los sedimentos se depositaron durante la noche."],
        note: "Depositarse, se déposer. El sedimento au singulier pour la matière, los sedimentos pour les couches.",
      },
      {
        etranger: "El acantilado se desmorona hacia el mar.",
        francais: "La falaise s'effrite vers la mer.",
        note: "Un acantilado, une falaise. Desmoronarse, s'effriter.",
      },
      {
        etranger: "El filón se extiende tres kilómetros.",
        francais: "Le filon court sur trois kilomètres.",
        note: "Un filón, un filon. Le mot s'emploie au figuré : une mine d'or.",
      },
      {
        etranger: "La cantera cerró en los cincuenta.",
        francais: "La carrière a fermé dans les années cinquante.",
        note: "Una cantera, une carrière de pierre. Le mot dit aussi un vivier de jeunes talents.",
      },
      {
        etranger: "La roca es porosa y quebradiza.",
        francais: "La roche est poreuse et cassante.",
        note: "Poroso s'emploie au figuré pour une frontière perméable.",
      },
      {
        etranger: "Los estratos se remontan a millones de años.",
        francais: "Les couches remontent à des millions d'années.",
        note: "Remontarse a, remonter à. Un estrato, une couche géologique ou sociale.",
      },
      {
        etranger: "El temblor apenas se notó.",
        francais: "La secousse a été à peine ressentie.",
        note: "Un temblor, une secousse ; un terremoto, un séisme.",
      },
    ],
  },

  {
    slug: "es-voc-salud-mental",
    category: "Vocabulaire",
    title: "La santé mentale",
    statement:
      "Desgaste, sobrepasado, límites, acompañamiento. Le vocabulaire de la santé mentale s'est imposé partout, et il évolue vite.",
    tip: "On dit una persona con depresión plutôt que un depresivo : l'espagnol met la personne avant le diagnostic, comme le français administratif. C'est une règle d'usage.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Está de baja por desgaste profesional.",
        francais: "Il est en arrêt pour épuisement professionnel.",
        note: "El desgaste profesional traduit burnout. Estar de baja, être en arrêt.",
      },
      {
        etranger: "Últimamente me siento desbordado.",
        francais: "Je me sens débordé ces temps-ci.",
        aussiEtranger: ["Últimamente me siento sobrepasado."],
        note: "Desbordado, dépassé, se comprend partout ; sobrepasado se dit aussi.",
      },
      {
        etranger: "Está poniendo límites en el trabajo.",
        francais: "Elle pose des limites au travail.",
        note: "Poner límites, poser des limites. La formule est passée dans l'usage courant.",
      },
      {
        etranger: "Va al psicólogo desde enero.",
        francais: "Il va chez le psychologue depuis janvier.",
        aussiEtranger: ["Consulta a un psicólogo desde enero."],
        note: "Là où le français dit « consulter », l'espagnol dit ir al psicólogo, ir al médico, ir al dentista.",
      },
      {
        etranger: "Es una estrategia de afrontamiento común.",
        francais: "C'est une stratégie d'adaptation courante.",
        note: "El afrontamiento traduit coping. Le mot est technique et passé dans l'usage.",
      },
      {
        etranger: "Lleva meses pasándolo mal.",
        francais: "Elle traverse une période difficile depuis des mois.",
        note: "Pasarlo mal, l'euphémisme standard. Il évite de nommer le trouble.",
      },
      {
        etranger: "Se abrió y contó lo que le pasaba.",
        francais: "Il s'est confié et a raconté ce qui lui arrivait.",
        note: "Abrirse, se confier. Le verbe pronominal suffit.",
      },
      {
        etranger: "Vamos día a día.",
        francais: "On prend les choses un jour après l'autre.",
        note: "Día a día, formule de soutien devenue proverbiale.",
      },
      {
        etranger: "Todavía hay mucho estigma.",
        francais: "Le sujet reste très stigmatisé.",
        note: "El estigma, masculin malgré le a final, comme tous les mots grecs en -ma.",
      },
      {
        etranger: "Está mucho mejor ahora.",
        francais: "Elle va beaucoup mieux maintenant.",
        note: "Estar mejor pour la santé. Ser mejor dirait la comparaison de qualité.",
      },
    ],
  },

  {
    slug: "es-voc-cocina-tecnica",
    category: "Vocabulaire",
    title: "Les gestes de la cuisine",
    statement:
      "Sofreír, batir, incorporar, salpimentar. Une recette espagnole emploie une vingtaine de verbes précis, et les confondre rate le plat.",
    tip: "Sofreír n'est ni freír ni saltear : c'est faire revenir doucement dans un peu d'huile, base de presque toute la cuisine espagnole.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Déjalo cocer a fuego lento veinte minutos.",
        francais: "Laisse mijoter vingt minutes.",
        note: "A fuego lento, à feu doux ; a fuego vivo, à feu vif. La différence change le plat.",
      },
      {
        etranger: "Bate los huevos hasta que blanqueen.",
        francais: "Bats les œufs jusqu'à ce qu'ils blanchissent.",
        note: "Batir, battre. Une batidora est un batteur ou un mixeur.",
      },
      {
        etranger: "Incorpora la harina con cuidado.",
        francais: "Incorpore la farine délicatement.",
        note: "Incorporar, incorporer sans casser l'air. Le mot est celui des recettes.",
      },
      {
        etranger: "Salpimenta al gusto.",
        francais: "Salez et poivrez selon votre goût.",
        note: "Salpimentar, saler et poivrer en un seul verbe. Al gusto, selon le goût.",
      },
      {
        etranger: "Dora la carne por todos los lados.",
        francais: "Fais dorer la viande sur toutes les faces.",
        note: "Dorar, faire dorer. Sellar dit une saisie très vive.",
      },
      {
        etranger: "Escurre y reserva.",
        francais: "Égoutte et réserve.",
        note: "Escurrir, égoutter ; reservar, réserver. Les deux verbes des recettes.",
      },
      {
        etranger: "Sofríe la cebolla a fuego lento.",
        francais: "Fais revenir l'oignon à feu doux.",
        note: "Sofreír, faire revenir doucement — ni freír (frire) ni saltear (faire sauter) : la base de presque toute la cuisine espagnole.",
      },
      {
        etranger: "Precalienta el horno a ciento ochenta grados.",
        francais: "Préchauffe le four à cent quatre-vingts degrés.",
        note: "Precalentar, préchauffer. Le verbe diphtongue : precaliento.",
      },
      {
        etranger: "Deja reposar la carne antes de trincharla.",
        francais: "Laisse reposer la viande avant de la découper.",
        note: "Trinchar, découper une pièce rôtie. Cortar serait plus général.",
      },
      {
        etranger: "Lleva a ebullición y luego baja el fuego.",
        francais: "Porte à ébullition, puis baisse le feu.",
        note: "Llevar a ebullición, porter à ébullition. Hervir est le verbe simple.",
      },
      {
        etranger: "La salsa debe napar la cuchara.",
        francais: "La sauce doit napper la cuillère.",
        note: "Napar, napper. Le test de nappage est le même dans les deux cuisines.",
      },
    ],
  },

  {
    slug: "es-voc-burocracia",
    category: "Vie quotidienne",
    title: "L'administration",
    statement:
      "Solicitar, rellenar, justificante, tener derecho a. Vivre en Espagne, c'est d'abord remplir des formulaires, et chaque mot y compte.",
    tip: "Un justificante est un justificatif ; un comprobante, un reçu. Les deux mots se rencontrent dans tous les guichets et ne s'échangent pas.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Tengo que solicitar el permiso de residencia.",
        francais: "Je dois demander un titre de séjour.",
        note: "Solicitar, demander formellement. Une solicitud est la demande écrite.",
      },
      {
        etranger: "Rellene el formulario en mayúsculas.",
        francais: "Remplissez le formulaire en majuscules.",
        note: "Rellenar un formulario. Llenar seul se dit d'un récipient.",
      },
      {
        etranger: "Necesitará un justificante de domicilio.",
        francais: "Il vous faudra un justificatif de domicile.",
        note: "Un justificante, un justificatif. Le plus demandé est el certificado de empadronamiento — el volante en est la version simplifiée.",
      },
      {
        etranger: "Puede que tenga derecho a una devolución.",
        francais: "Vous avez peut-être droit à un remboursement.",
        note: "Tener derecho a, avoir droit à. La devolución, le remboursement.",
      },
      {
        etranger: "La solicitud sigue pendiente.",
        francais: "La demande est toujours en instance.",
        note: "Pendiente, en attente. Le mot est adjectif et nom : una pendiente est une pente.",
      },
      {
        etranger: "El plazo de tramitación es de seis semanas.",
        francais: "Le délai de traitement est de six semaines.",
        note: "La tramitación, le traitement d'un dossier. Un trámite, une démarche.",
      },
      {
        etranger: "Su permiso caduca en junio.",
        francais: "Votre titre expire en juin.",
        note: "Caducar, arriver à échéance. Renovar, renouveler.",
      },
      {
        etranger: "Adjunte una copia, no el original.",
        francais: "Joignez une copie, pas l'original.",
        note: "Adjuntar, joindre. Le mot vaut pour le papier comme pour le courriel.",
      },
      {
        etranger: "Se ha ampliado el plazo.",
        francais: "Le délai a été prolongé.",
        note: "Ampliar el plazo, le prolonger. Reducir dirait l'inverse.",
      },
      {
        etranger: "Se le notificará por escrito.",
        francais: "Vous serez informé par écrit.",
        note: "Por escrito, par écrit. La formule est celle de tout courrier officiel.",
      },
    ],
  },

  {
    slug: "es-voc-social",
    category: "Vocabulaire",
    title: "Associations et solidarité",
    statement:
      "ONG, voluntariado, recaudación, acompañamiento. Le monde associatif hispanophone a un vocabulaire précis, et una asociación ou una ONG en sont les mots courants.",
    tip: "Una caridad existe mais garde une couleur religieuse : la caridad, la charité comme vertu, pas comme organisme. Pour une association, on dit una asociación ou una ONG.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Trabaja en una ONG local.",
        francais: "Elle travaille dans une ONG locale.",
        note: "Una ONG, féminin, se prononce lettre par lettre. Le pluriel est las ONG.",
      },
      {
        etranger: "Es voluntario en el banco de alimentos.",
        francais: "Il est bénévole à la banque alimentaire.",
        note: "Un voluntario, un bénévole. El voluntariado désigne l'activité.",
      },
      {
        etranger: "Están recaudando fondos para el colegio.",
        francais: "Ils collectent des fonds pour l'école.",
        note: "Recaudar fondos, collecter. Una recaudación est la collecte elle-même.",
      },
      {
        etranger: "El programa llega a zonas rurales.",
        francais: "Le programme touche les zones rurales.",
        note: "Llegar a, atteindre un public. El alcance dit la portée obtenue.",
      },
      {
        etranger: "La ayuda está condicionada al nivel de ingresos.",
        francais: "L'aide est soumise à conditions de ressources.",
        note: "Condicionado a, soumis à. Los ingresos, les revenus.",
      },
      {
        etranger: "Las donaciones desgravan.",
        francais: "Les dons sont déductibles des impôts.",
        note: "Desgravar, ouvrir droit à déduction fiscale. Le verbe est intransitif ici.",
      },
      {
        etranger: "El patronato se reúne dos veces al año.",
        francais: "Le conseil d'administration se réunit deux fois par an.",
        note: "El patronato, le conseil d'une fondation. Un patrono, un administrateur.",
      },
      {
        etranger: "Cuentan con el apoyo de las bases.",
        francais: "Ils comptent sur un soutien de terrain.",
        note: "El apoyo de las bases, avec l'article et le pluriel. Contar con, compter sur.",
      },
      {
        etranger: "La campaña sirvió para concienciar.",
        francais: "La campagne a servi à sensibiliser.",
        aussiEtranger: ["La campaña sirvió para concientizar."],
        note: "Concienciar en Espagne, concientizar en Amérique latine.",
      },
      {
        etranger: "Recortaron la financiación el año pasado.",
        francais: "Les financements ont été réduits l'an dernier.",
        note: "La financiación, le financement. Recortar, opérer une coupe budgétaire.",
      },
    ],
  },
];
