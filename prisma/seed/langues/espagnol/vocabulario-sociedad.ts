/**
 * Espagnol — huit champs de plus, de la musique à la démographie.
 *
 * Deuxième passe d'élargissement. La première avait comblé les manques de la
 * vie courante — sport, transports, études, famille, démarches, médias. Celle-ci
 * vise ce qu'on lit et ce qu'on écoute : la culture, la ville bâtie, le travail
 * industriel, et deux domaines dont la presse parle tous les jours, l'énergie et
 * la démographie.
 *
 * Toujours des phrases : un champ lexical s'apprend par ses collocations.
 * « Tocar el piano » et « jugar al fútbol » emploient deux verbes différents
 * pour ce que le français appelle jouer, et aucune liste de mots ne le dit.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_VOCABULARIO_SOCIEDAD: LotCartes[] = [
  {
    slug: "es-voc-musica",
    category: "Vocabulaire",
    title: "La musique",
    statement:
      "Tocar, sonar, estrenar, ensayar. L'espagnol dit tocar pour jouer d'un instrument et jugar pour jouer à un jeu : les deux ne se confondent jamais.",
    tip: "Tocar el piano, jugar al ajedrez. Employer jugar pour un instrument est l'erreur la plus repérable d'un francophone.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Toca el violonchelo.",
        francais: "Elle joue du violoncelle.",
        note: "Tocar pour un instrument, jugar pour un jeu. Le français dit jouer dans les deux cas.",
      },
      {
        etranger: "El grupo sacó su tercer disco.",
        francais: "Le groupe a sorti son troisième album.",
        note: "Sacar un disco, sortir un album. El álbum s'emploie aussi, avec accent.",
      },
      {
        etranger: "Dan un concierto el viernes.",
        francais: "Ils font un concert vendredi.",
        aussi: ["Ils jouent vendredi soir."],
        note: "Dar un concierto, donner un concert. Un bolo est le concert de petite salle, familier.",
      },
      {
        etranger: "Se me ha quedado la canción pegada.",
        francais: "La chanson m'est restée en tête.",
        note: "Quedarse pegada, rester collée. La construction avec se me marque l'involontaire.",
      },
      {
        etranger: "Canta fatal, la verdad.",
        francais: "Il chante vraiment faux.",
        aussi: ["Franchement, il chante mal."],
        note: "Cantar fatal, familier. Desafinar est le terme exact pour chanter faux.",
      },
      {
        etranger: "El estribillo entra tras ocho compases.",
        francais: "Le refrain arrive après huit mesures.",
        note: "El estribillo, le refrain. Un compás, une mesure — pluriel compases.",
      },
      {
        etranger: "Esa canción me suena mucho.",
        francais: "Cette chanson me dit quelque chose.",
        note: "Sonar, avoir un air familier — ou, pour un instrument, résonner : suena bien la guitarra.",
      },
      {
        etranger: "El grupo estrena disco la próxima semana.",
        francais: "Le groupe sort un nouvel album la semaine prochaine.",
        note: "Estrenar, lancer quelque chose de nouveau pour la première fois — un disque, un film, une chanson.",
      },
      {
        etranger: "Ensayan todos los jueves por la tarde.",
        francais: "Ils répètent tous les jeudis après-midi.",
        note: "Ensayar, répéter ; el ensayo, la répétition.",
      },
      {
        etranger: "Baja el volumen, por favor.",
        francais: "Baisse le son, s'il te plaît.",
        note: "Bajar el volumen. Subir pour monter. Le mot volumen prend un accent au pluriel : volúmenes.",
      },
    ],
  },

  {
    slug: "es-voc-cine",
    category: "Vocabulaire",
    title: "Films et scène",
    statement:
      "Rodar, estrenar, doblar, guion. L'Espagne double presque tout, et son vocabulaire du cinéma est plus riche que le nôtre sur ce point précis.",
    tip: "Estrenar veut dire sortir pour la première fois : un film, mais aussi une chemise qu'on met pour la première fois. Le verbe n'a pas d'équivalent français simple.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "La película se rodó en Marruecos.",
        francais: "Le film a été tourné au Maroc.",
        note: "Rodar, tourner. El rodaje, le tournage. La película est féminin.",
      },
      {
        etranger: "La eligieron para el papel principal.",
        francais: "Elle a été choisie pour le rôle principal.",
        aussi: ["Elle a obtenu le premier rôle."],
        note: "Un papel, un rôle — le mot dit aussi le papier. El reparto, la distribution.",
      },
      {
        etranger: "No me destripes el final.",
        francais: "Ne me dévoile pas la fin.",
        aussi: ["Ne me raconte pas la fin."],
        note: "Destripar, éventer une intrigue. Familier et très employé ; spoilear existe aussi.",
      },
      {
        etranger: "El guion no se sostiene.",
        francais: "Le scénario ne tient pas debout.",
        aussi: ["L'intrigue ne tient pas la route."],
        aussiEtranger: ["El guión no se sostiene."],
        note: "El guion s'écrit sans accent depuis 2010, mais l'ancienne graphie guión reste courante.",
      },
      {
        etranger: "La ponen en el cine del barrio.",
        francais: "Il passe au cinéma du quartier.",
        note: "Poner una película, la projeter. El cine désigne la salle comme l'art.",
      },
      {
        etranger: "La película está doblada al español.",
        francais: "Le film est doublé en espagnol.",
        note: "Doblar al, doubler vers une langue. En versión original, en version originale.",
      },
      {
        etranger: "Se comió la pantalla en cada escena.",
        francais: "Il a crevé l'écran dans chaque scène.",
        aussi: ["Il a éclipsé tout le monde à chaque scène."],
        note: "Comerse la pantalla, littéralement dévorer l'écran. L'image diffère du français.",
      },
      {
        etranger: "La obra colgó el cartel de no hay billetes.",
        francais: "La pièce a affiché complet.",
        note: "Una obra de teatro, une pièce. La formule no hay billetes est celle des guichets.",
      },
      {
        etranger: "La secuela se estrenó el año pasado.",
        francais: "La suite est sortie l'an dernier.",
        note: "Una secuela suit, una precuela précède. Estrenarse, sortir en salle.",
      },
      {
        etranger: "Está basada en hechos reales.",
        francais: "C'est inspiré de faits réels.",
        aussi: ["C'est tiré d'une histoire vraie."],
        note: "Basada en, tirée de. L'accord se fait avec película, féminin.",
      },
    ],
  },

  {
    slug: "es-voc-historia",
    category: "Vocabulaire",
    title: "Histoire et société",
    statement:
      "Reinar, derrocar, asediar, poblado. Lire un article d'histoire en espagnol demande des verbes précis, et plusieurs sont des faux amis pour un francophone.",
    tip: "Les siècles s'écrivent en chiffres romains : el siglo XIX se lit el siglo diecinueve. Écrire « el siglo 19 » est fautif à l'écrit soigné.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Reinó durante sesenta años.",
        francais: "Elle régna soixante ans.",
        note: "Reinar pour un monarque, gobernar pour tout pouvoir. El reinado, le règne.",
      },
      {
        etranger: "El régimen fue derrocado en 1974.",
        francais: "Le régime fut renversé en 1974.",
        note: "Derrocar, renverser un pouvoir. Derribar se dit plutôt d'un bâtiment ou d'un avion.",
      },
      {
        etranger: "El tratado se firmó en Viena.",
        francais: "Le traité fut signé à Vienne.",
        note: "Un tratado, un traité. Un acuerdo est plus large et moins solennel.",
      },
      {
        etranger: "La ciudad estuvo asediada dos años.",
        francais: "La ville fut assiégée pendant deux ans.",
        note: "Asediar, assiéger. El asedio ou el sitio, le siège militaire.",
      },
      {
        etranger: "El poblado data de la Edad del Bronce.",
        francais: "Le site d'habitat date de l'âge du bronze.",
        aussi: ["L'agglomération remonte à l'âge du bronze."],
        note: "Un poblado, un lieu habité ancien. Datar de, remonter à.",
      },
      {
        etranger: "El imperio se derrumbó en una década.",
        francais: "L'empire s'effondra en dix ans.",
        note: "Derrumbarse, s'effondrer. Una década, une décennie ; los años veinte, les années vingt.",
      },
      {
        etranger: "La revuelta fue reprimida con dureza.",
        francais: "La révolte fut durement réprimée.",
        note: "Reprimir, réprimer. Con dureza, avec dureté — formule courante des récits historiques.",
      },
      {
        etranger: "Lo desterraron a una isla remota.",
        francais: "Il fut exilé sur une île reculée.",
        note: "Desterrar, bannir. El destierro, l'exil forcé ; el exilio peut être volontaire.",
      },
      {
        etranger: "Los historiadores siguen sin ponerse de acuerdo.",
        francais: "Les historiens ne s'accordent toujours pas.",
        aussi: ["Les historiens restent divisés."],
        note: "Seguir sin + infinitif, continuer à ne pas. Tournure très espagnole.",
      },
      {
        etranger: "El archivo se destruyó en el incendio.",
        francais: "Les archives furent détruites dans l'incendie.",
        aussiEtranger: ["Los archivos se destruyeron en el incendio."],
        note: "El archivo au singulier pour le fonds entier. Los archivos dit plutôt les documents.",
      },
      {
        etranger: "Se construyó en el siglo XVIII.",
        francais: "Il fut construit au XVIIIe siècle.",
        note: "Chiffres romains, et on lit el siglo dieciocho.",
      },
    ],
  },

  {
    slug: "es-voc-arquitectura",
    category: "Vocabulaire",
    title: "Bâtiments et chantiers",
    statement:
      "Planta, solar, obra, catalogado. Le vocabulaire du bâti espagnol est plein de faux amis : un solar n'est pas solaire et una planta n'est pas une plante.",
    tip: "En Espagne, la planta baja est le rez-de-chaussée et la primera planta notre premier étage — même décalage qu'en anglais britannique, mais l'inverse du système américain.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "El edificio tiene seis plantas.",
        francais: "L'immeuble compte six étages.",
        note: "Una planta, un niveau de bâtiment. Le mot dit aussi une plante et une usine.",
      },
      {
        etranger: "Compraron un solar en las afueras.",
        francais: "Ils ont acheté un terrain en périphérie.",
        aussi: ["Ils ont acheté une parcelle en banlieue."],
        note: "Un solar, un terrain à bâtir : le nom vient de suelo, pas de sol. L'adjectif solar, lui, veut bien dire solaire — energía solar.",
      },
      {
        etranger: "La casa está catalogada.",
        francais: "La maison est classée.",
        aussi: ["La maison est un bâtiment protégé."],
        note: "Catalogado, inscrit à l'inventaire du patrimoine. Le mot dit aussi simplement catalogué.",
      },
      {
        etranger: "Están ampliando la cocina.",
        francais: "Ils agrandissent la cuisine.",
        note: "Ampliar, agrandir. Una ampliación, un agrandissement.",
      },
      {
        etranger: "Les denegaron la licencia de obras.",
        francais: "Le permis de construire leur a été refusé.",
        note: "La licencia de obras, le permis de construire. Denegar, refuser officiellement.",
      },
      {
        etranger: "Hay que rehacer el tejado.",
        francais: "Le toit est à refaire.",
        aussi: ["La toiture doit être refaite."],
        note: "El tejado est la toiture vue de dehors, el techo le plafond vu de dedans.",
      },
      {
        etranger: "Los pisos dan al parque.",
        francais: "Les appartements donnent sur le parc.",
        note: "Dar a, donner sur. Un piso en Espagne, un departamento en Amérique latine.",
      },
      {
        etranger: "Esos muros son de carga.",
        francais: "Ces murs sont porteurs.",
        note: "De carga, porteur. Un tabique est une simple cloison.",
      },
      {
        etranger: "La urbanización se construyó en los sesenta.",
        francais: "Le lotissement a été construit dans les années soixante.",
        aussi: ["L'ensemble résidentiel date des années soixante."],
        note: "Una urbanización, un ensemble résidentiel. Le mot dit aussi l'urbanisation.",
      },
      {
        etranger: "El terreno lleva años abandonado.",
        francais: "Le terrain est à l'abandon depuis des années.",
        aussi: ["Le site est en friche depuis des années."],
        note: "Llevar + durée + participe : être dans cet état depuis. Tournure très fréquente.",
      },
    ],
  },

  {
    slug: "es-voc-seguridad",
    category: "Vocabulaire",
    title: "Urgences et sécurité",
    statement:
      "Seguridad, riesgo, avería, siniestro. L'espagnol emploie un seul mot là où l'anglais en a deux, mais il distingue finement la panne, l'accident et le sinistre.",
    tip: "Un siniestro est un sinistre au sens de l'assurance, mais l'adjectif siniestro veut dire sinistre au sens de lugubre. Le nom et l'adjectif ne se recouvrent pas.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "La seguridad es lo primero en obra.",
        francais: "La sécurité passe avant tout sur le chantier.",
        note: "Lo primero, ce qui vient en premier. La obra, le chantier.",
      },
      {
        etranger: "El seguro cubrió el siniestro total del coche.",
        francais: "L'assurance a couvert la perte totale de la voiture.",
        note: "Un siniestro, un sinistre au sens de l'assurance ; siniestro adjectif veut dire lugubre. Les deux ne se recouvrent pas.",
      },
      {
        etranger: "El producto supone un riesgo de incendio.",
        francais: "Le produit présente un risque d'incendie.",
        note: "Suponer un riesgo, présenter un risque. Un peligro est le danger lui-même.",
      },
      {
        etranger: "Llama a una ambulancia ahora mismo.",
        francais: "Appelle une ambulance tout de suite.",
        note: "Ahora mismo, immédiatement — à ne pas confondre avec ahorita, qui peut dire bien plus tard.",
      },
      {
        etranger: "Desalojen el edificio por la salida más cercana.",
        francais: "Évacuez le bâtiment par la sortie la plus proche.",
        note: "Desalojar, évacuer un lieu. Evacuar existe mais s'emploie surtout pour les personnes.",
      },
      {
        etranger: "Lo atendieron por inhalación de humo.",
        francais: "Il a été soigné pour inhalation de fumée.",
        note: "Atender a alguien, prendre en charge un patient. Le verbe ne veut jamais dire attendre.",
      },
      {
        etranger: "La alarma saltó a las tres.",
        francais: "L'alarme s'est déclenchée à trois heures.",
        note: "Saltar une alarme, se déclencher. L'image est celle du ressort qui saute.",
      },
      {
        etranger: "Hay que llevar casco en todo momento.",
        francais: "Il faut porter un casque en permanence.",
        note: "En todo momento, en permanence. Llevar pour porter un vêtement ou un équipement.",
      },
      {
        etranger: "La zona ha sido acordonada.",
        francais: "Le secteur a été bouclé.",
        aussi: ["Le périmètre a été fermé."],
        note: "Acordonar, boucler un périmètre. El cordón policial, le cordon de police.",
      },
      {
        etranger: "Avisen de cualquier conducta sospechosa.",
        francais: "Signalez tout comportement suspect.",
        note: "Avisar de, signaler. Cualquier + singulier traduit ici « tout » au sens de n'importe lequel.",
      },
    ],
  },

  {
    slug: "es-voc-industria",
    category: "Travail et études",
    title: "Production et logistique",
    statement:
      "Cadena de suministro, plazo, lote, desabastecimiento. L'espagnol traduit là où le français emprunte à l'anglais, et connaître ses termes propres est indispensable en entreprise.",
    tip: "Un plazo est un délai imparti, une demora un retard subi. Les confondre change complètement le sens d'un courriel de relance.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "La cadena de suministro se rompió.",
        francais: "La chaîne d'approvisionnement s'est rompue.",
        note: "El suministro, l'approvisionnement. Suministrar, fournir.",
      },
      {
        etranger: "Los plazos se han duplicado desde primavera.",
        francais: "Les délais ont doublé depuis le printemps.",
        note: "Un plazo est un délai fixé d'avance ; una demora, un retard qu'on subit.",
      },
      {
        etranger: "Estamos poniéndonos al día con los pedidos.",
        francais: "Nous rattrapons le retard sur les commandes.",
        note: "Ponerse al día, se remettre à jour. Un pedido, une commande.",
      },
      {
        etranger: "Hay desabastecimiento de materias primas.",
        francais: "Il y a une pénurie de matières premières.",
        note: "El desabastecimiento, la rupture d'approvisionnement. Escasez dit la rareté en général.",
      },
      {
        etranger: "La fábrica trabaja a tres turnos.",
        francais: "L'usine tourne en trois-huit.",
        aussi: ["L'usine fonctionne en trois équipes."],
        note: "Un turno, une équipe de travail. El turno de noche, l'équipe de nuit.",
      },
      {
        etranger: "La producción cayó un doce por ciento.",
        francais: "La production a baissé de douze pour cent.",
        note: "Caer un + pourcentage, sans préposition de. La formule surprend les francophones.",
      },
      {
        etranger: "El lote no pasó el control de calidad.",
        francais: "Le lot a été refusé au contrôle qualité.",
        note: "Un lote, un lot de fabrication. No pasar un control, ne pas passer un contrôle.",
      },
      {
        etranger: "Nos abastecemos localmente cuando podemos.",
        francais: "Nous nous approvisionnons localement quand nous le pouvons.",
        note: "Abastecerse, s'approvisionner. Le verbe est pronominal dans ce sens.",
      },
      {
        etranger: "El artículo está pendiente de reposición.",
        francais: "L'article est en attente de réapprovisionnement.",
        aussi: ["L'article est en rupture et sera réapprovisionné."],
        note: "Pendiente de, en attente de. La reposición, le réassort.",
      },
      {
        etranger: "Han reducido la producción.",
        francais: "Ils ont réduit la production.",
        note: "Reducir, réduire. Recortar dit la coupe budgétaire, pas la baisse de volume.",
      },
    ],
  },

  {
    slug: "es-voc-energia",
    category: "Vocabulaire",
    title: "Énergie et climat",
    statement:
      "Red, potencia, compensar, eliminar por fases. Le débat énergétique hispanophone a ses termes propres, et l'espagnol distingue potencia et energía là où le français dit souvent l'un pour l'autre.",
    tip: "La potencia est une puissance instantanée, en watts ; la energía une quantité, en watts-heures. Confondre les deux invalide un raisonnement entier.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "La red no daba abasto con la demanda.",
        francais: "Le réseau n'arrivait pas à absorber la demande.",
        note: "No dar abasto, ne pas suffire à la tâche. La red eléctrica, le réseau.",
      },
      {
        etranger: "El carbón se eliminará por fases hasta 2035.",
        francais: "Le charbon sera abandonné progressivement d'ici 2035.",
        aussi: ["Le charbon sera supprimé par étapes jusqu'en 2035."],
        note: "Eliminar por fases traduit phase out ; l'espagnol préfère la périphrase à l'emprunt.",
      },
      {
        etranger: "Las renovables cubren ya un tercio del mix.",
        francais: "Les renouvelables couvrent déjà un tiers du mix.",
        note: "Las renovables, nom pluriel formé sur l'adjectif. El mix energético est passé tel quel.",
      },
      {
        etranger: "La central aporta potencia de base.",
        francais: "La centrale fournit une puissance de base.",
        note: "Aportar, apporter une contribution. La potencia de base, le socle de production.",
      },
      {
        etranger: "Las emisiones se compensan con reforestación.",
        francais: "Les émissions sont compensées par du reboisement.",
        note: "Compensar, compenser. Un bono de carbono est un crédit de compensation.",
      },
      {
        etranger: "El aislamiento reduce mucho el consumo.",
        francais: "L'isolation réduit fortement la consommation.",
        note: "El aislamiento dit l'isolation thermique comme l'isolement d'une personne.",
      },
      {
        etranger: "La tarifa está topada hasta abril.",
        francais: "Le tarif est plafonné jusqu'en avril.",
        note: "Topar, plafonner. El tope, le plafond. Le verbe est propre au vocabulaire des prix.",
      },
      {
        etranger: "El almacenamiento sigue siendo el cuello de botella.",
        francais: "Le stockage reste le goulet d'étranglement.",
        note: "El cuello de botella, littéralement le col de bouteille. L'image est la même qu'en français.",
      },
      {
        etranger: "La producción es intermitente por naturaleza.",
        francais: "La production est par nature intermittente.",
        note: "Por naturaleza, par nature. La formule revient dans tout le débat sur l'éolien.",
      },
      {
        etranger: "Se comprometieron a reducir a la mitad las emisiones.",
        francais: "Ils se sont engagés à réduire de moitié les émissions.",
        note: "Comprometerse a, s'engager à. A la mitad, de moitié.",
      },
    ],
  },

  {
    slug: "es-voc-demografia",
    category: "Vocabulaire",
    title: "Population et statistiques",
    statement:
      "Tasa, proporción, saldo, per cápita. Les mots des chiffres sont les plus mal traduits de tous, et une tasa n'est pas une proporción.",
    tip: "Una tasa rapporte à une population et à une période ; una proporción est une fraction d'un total. « Le taux de chômage » est la tasa de paro, « la part des jeunes » la proporción de jóvenes.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "La tasa de natalidad no deja de bajar.",
        francais: "Le taux de natalité ne cesse de baisser.",
        note: "No dejar de + infinitif, ne pas cesser de. Una tasa se rapporte à une population.",
      },
      {
        etranger: "Su cuota de mercado se reduce.",
        francais: "Leur part de marché se réduit.",
        note: "Una cuota de mercado, une part de marché. Une cuota est aussi une cotisation.",
      },
      {
        etranger: "La renta per cápita lleva años estancada.",
        francais: "Le revenu par habitant stagne depuis des années.",
        note: "Per cápita, latin, invariable. La renta, le revenu — et le loyer en Amérique latine. Une rente viagère se dit una renta vitalicia.",
      },
      {
        etranger: "La población envejece rápidamente.",
        francais: "La population vieillit rapidement.",
        note: "Envejecer, vieillir. El envejecimiento, le vieillissement.",
      },
      {
        etranger: "El saldo migratorio se volvió negativo.",
        francais: "Le solde migratoire est devenu négatif.",
        note: "El saldo, le solde, une fois les départs déduits. Volverse, devenir par changement d'état.",
      },
      {
        etranger: "Los datos están desestacionalizados.",
        francais: "Les données sont corrigées des variations saisonnières.",
        note: "Desestacionalizar : le mot est long mais c'est le terme officiel des séries statistiques.",
      },
      {
        etranger: "La brecha se ha reducido desde 2010.",
        francais: "L'écart s'est réduit depuis 2010.",
        note: "Una brecha, un écart ou une brèche. La brecha de género, l'écart entre les sexes — une extension récente du mot.",
      },
      {
        etranger: "Uno de cada cinco hogares vive solo.",
        francais: "Un ménage sur cinq est composé d'une personne seule.",
        note: "Uno de cada cinco, un sur cinq. Un hogar, un ménage — le mot dit aussi le foyer.",
      },
      {
        etranger: "La muestra no es representativa.",
        francais: "L'échantillon n'est pas représentatif.",
        note: "Representativo de algo. Una muestra est aussi un échantillon commercial.",
      },
      {
        etranger: "La esperanza de vida se ha estancado.",
        francais: "L'espérance de vie stagne.",
        aussi: ["L'espérance de vie a cessé de progresser."],
        note: "Estancarse, stagner. Un estancamiento, une stagnation.",
      },
    ],
  },
];
