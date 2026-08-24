/**
 * Espagnol — six champs lexicaux de plus, du B1 au C1.
 *
 * Le travail et l'atelier, l'environnement et les arts, puis deux séries C1 :
 * le droit et les mots de la pensée abstraite. Les mêmes champs que côté
 * anglais, parce que ce sont les mêmes trous — mais les pièges n'y sont pas
 * les mêmes : ici, c'est la ressemblance avec le français qui trompe.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_VOCABULAIRE_OFICIOS: LotCartes[] = [
  {
    slug: "es-voc-trabajo-oficios",
    category: "Vocabulaire",
    title: "Le travail : métiers, contrats, carrière",
    statement:
      "Un poste, un contrat, une augmentation, un licenciement. Le vocabulaire de l'emploi espagnol ressemble au français — et c'est exactement ce qui le rend piégeux.",
    tip: "El paro est le chômage en Espagne et la grève en Amérique latine. Le même mot, deux malheurs différents.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les mots de l'emploi",
      sections: [
        {
          titre: "Le poste, le métier, le travail",
          texte:
            "L'espagnol distingue ce que le français confond, et il le fait autrement que l'anglais.\n\nEl trabajo est l'activité et le lieu : voy al trabajo, tengo mucho trabajo. Le mot couvre les deux, comme en français.\n\nUn puesto est le poste précis dans une organisation : solicité un puesto de analista. Un empleo est l'emploi au sens administratif et statistique. Un oficio est le métier manuel appris — carpintero, fontanero. Una profesión suppose un diplôme et un titre.\n\nUna carrera est à la fois le parcours professionnel et — surtout — les études supérieures : estudié la carrera de Derecho. C'est le sens dominant en Espagne, et un francophone qui entend « carrera » pense parcours alors que l'interlocuteur parle de sa licence.\n\nEnfin, el curro et el laburo sont les mots familiers du travail, le premier espagnol, le second argentin. La chamba est mexicaine. Aucun des trois ne voyage.",
          visuels: [
            {
              type: "tableau",
              titre: "Le mot juste selon ce qu'on désigne",
              colonnes: ["Ce qu'on veut dire", "En espagnol", "La remarque"],
              lignes: [
                ["l'activité, le lieu", "el trabajo", "couvre les deux"],
                ["le poste précis", "un puesto", "dans une offre"],
                ["l'emploi statistique", "un empleo", "registre administratif"],
                ["le métier manuel", "un oficio", "appris sur le tas ou en CFA"],
                ["le métier à diplôme", "una profesión", "—"],
                ["les études supérieures", "una carrera", "sens dominant en Espagne"],
                ["le boulot (familier)", "el curro (ES) / el laburo (AR)", "ne voyage pas"],
                ["l'entreprise", "la empresa", "la compañía est plus rare"],
              ],
              note: "Un CV se dit el currículum, souvent abrégé el currículo ou le CV tout court.",
            },
          ],
        },
        {
          titre: "Le contrat et sa fin",
          texte:
            "Le vocabulaire contractuel espagnol est proche du français, mais plusieurs verbes se construisent autrement.\n\nUn contrato indefinido est un contrat à durée indéterminée ; un contrato temporal ou de duración determinada, à durée déterminée. La jornada completa est le temps plein ; la media jornada, le mi-temps. El periodo de prueba est la période d'essai.\n\nPour la fin : dimitir, démissionner — le verbe est intransitif, dimitió de su cargo. Renunciar a, renoncer à un poste, plus employé en Amérique latine. Jubilarse, partir à la retraite, toujours pronominal. Et du côté de l'employeur : despedir, licencier — despedir a alguien, avec le a personnel ; el despido, le licenciement ; un ERE, en Espagne, est un plan social.\n\nLa rémunération : el sueldo est le salaire courant, el salario le terme plus formel, la nómina la fiche de paie — et par métonymie le salaire lui-même. Una subida de sueldo est une augmentation ; una paga extra, une prime — en Espagne, deux sont souvent prévues par convention.\n\nEnfin, cobrar veut dire percevoir son salaire, et pagar payer. Les confondre inverse le sens de la phrase.",
          visuels: [
            {
              type: "comparaison",
              titre: "Quitter son poste, de son fait ou non",
              colonnes: [
                {
                  titre: "De son fait",
                  points: [
                    "dimitir — démissionner.",
                    "renunciar al puesto — renoncer au poste.",
                    "jubilarse — partir à la retraite.",
                  ],
                },
                {
                  titre: "Du fait de l'employeur",
                  points: [
                    "despedir a alguien — licencier.",
                    "el despido — le licenciement.",
                    "un ERE — le plan social espagnol.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Candidater, et les faux amis du bureau",
          texte:
            "La candidature a ses verbes, et aucun ne calque l'anglais ni le français.\n\nSolicitar un puesto, postuler — le verbe standard. Presentarse a una oferta. Echar el currículum, familier et très employé en Espagne. Et postularse a, surtout en Amérique latine.\n\nEnsuite : una entrevista, l'entretien — jamais « un entretien », qui se dirait mantenimiento et désigne la maintenance. Ser preseleccionado, être retenu. Contratar a alguien, embaucher.\n\nLes faux amis sont nombreux. Una carpeta est un dossier ou une chemise, pas un tapis. Un compromiso est un engagement, pas un compromis — celui-ci se dit un acuerdo ou una concesión. Realizar veut dire effectuer, pas se réaliser. Asistir a veut dire assister à, mais asistir a alguien veut dire l'assister au sens d'aider : le a change tout.\n\nEt deux mots trompent complètement. Actualmente veut dire actuellement — celui-là est juste — mais eventualmente veut dire occasionnellement ou le cas échéant, jamais éventuellement au sens de « peut-être », qui se dit posiblemente. Le sens « finalement » est celui de l'anglais eventually, pas de l'espagnol.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Solicité un puesto de analista.",
        francais: "J'ai postulé pour un poste d'analyste.",
        note: "Solicitar un puesto. Un puesto est le poste précis ; un empleo, l'emploi statistique.",
      },
      {
        etranger: "Estudié la carrera de Derecho.",
        francais: "J'ai fait des études de droit.",
        note: "Una carrera désigne d'abord les études supérieures en Espagne, pas le parcours.",
      },
      {
        etranger: "Tiene un contrato indefinido.",
        francais: "Il a un contrat à durée indéterminée.",
        note: "Indefinido pour le CDI ; temporal ou de duración determinada pour le CDD.",
      },
      {
        etranger: "Dimitió de su cargo en marzo.",
        francais: "Il a démissionné de son poste en mars.",
        note: "Dimitir est intransitif et prend de. Renunciar a est plus latino-américain.",
      },
      {
        etranger: "La despidieron sin previo aviso.",
        francais: "Elle a été licenciée sans préavis.",
        note: "Despedir a alguien, avec le a personnel. El despido, le licenciement.",
      },
      {
        etranger: "Cobro el sueldo a final de mes.",
        francais: "Je touche mon salaire en fin de mois.",
        note: "Cobrar, percevoir ; pagar, payer. Les confondre inverse la phrase.",
      },
      {
        etranger: "Pidió una subida de sueldo.",
        francais: "Il a demandé une augmentation.",
        note: "Una subida de sueldo. Una paga extra est la prime conventionnelle espagnole.",
      },
      {
        etranger: "Tengo una entrevista el jueves.",
        francais: "J'ai un entretien jeudi.",
        note: "Una entrevista, l'entretien. Mantenimiento désigne la maintenance.",
      },
      {
        etranger: "Se jubila el año que viene.",
        francais: "Il part à la retraite l'an prochain.",
        note: "Jubilarse est toujours pronominal. La jubilación, la retraite.",
      },
      {
        etranger: "Es un compromiso firme por su parte.",
        francais: "C'est un engagement ferme de sa part.",
        note: "Un compromiso est un engagement. Le compromis se dit un acuerdo.",
      },
    ],
  },

  {
    slug: "es-voc-arreglos",
    category: "Vocabulaire",
    title: "Réparer, entretenir, bricoler",
    statement:
      "Une fuite, une prise, une vis, un tournevis. Le vocabulaire de l'atelier espagnol, celui dont on a besoin le jour où la chaudière lâche et qu'aucun manuel n'enseigne.",
    tip: "Arreglar couvre réparer, ranger et arranger. C'est le verbe à tout faire de la maison espagnole.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "L'espagnol de l'atelier",
      sections: [
        {
          titre: "Les outils et la quincaillerie",
          texte:
            "Le vocabulaire des outils est stable d'un pays à l'autre, contrairement à celui de la cuisine — les objets ont voyagé avec leur nom.\n\nLes indispensables : un martillo, le marteau ; un destornillador, le tournevis — de destornillar, dévisser ; una llave inglesa, la clé à molette ; unos alicates, la pince, toujours au pluriel ; un taladro, la perceuse ; una sierra, la scie ; un nivel, le niveau ; una cinta métrica, le mètre ruban ; una escalera, l'échelle autant que l'escalier.\n\nLa quincaillerie : un tornillo, la vis ; un clavo, le clou ; una tuerca, l'écrou ; una arandela, la rondelle ; una bisagra, la charnière ; un enchufe, la prise — et aussi la fiche, le mot couvre les deux.\n\nLes consommables : el pegamento, la colle ; la cinta adhesiva, le ruban adhésif ; la lija, le papier de verre ; la masilla, le mastic ; la pintura, la peinture.\n\nEt le magasin : una ferretería, la quincaillerie — le mot vient de hierro, le fer, et suit le suffixe -ería vu ailleurs.",
          visuels: [
            {
              type: "tableau",
              titre: "L'outil et le geste",
              colonnes: ["L'outil", "Le verbe", "Ce qu'on en fait"],
              lignes: [
                ["un destornillador", "atornillar / destornillar", "visser, dévisser"],
                ["un martillo", "clavar", "planter un clou"],
                ["un taladro", "taladrar", "percer"],
                ["una sierra", "serrar", "scier"],
                ["una llave inglesa", "apretar / aflojar", "serrer, desserrer"],
                ["unos alicates", "sujetar", "pincer, tenir"],
                ["una brocha", "pintar", "peindre"],
                ["la lija", "lijar", "poncer"],
              ],
              note: "Alicates et tijeras sont toujours au pluriel, comme en français les ciseaux.",
            },
          ],
        },
        {
          titre: "Ce qui casse, et le se involontaire",
          texte:
            "Le vocabulaire de la panne se double ici d'une particularité grammaticale : l'espagnol rapporte presque toujours un accident domestique avec le se involontaire.\n\nOn ne dit pas « he roto el vaso » mais se me rompió el vaso. Pas « he perdido las llaves » dans ce contexte, mais se me perdieron las llaves. La personne devient victime, et c'est la formulation normale — l'autre sonne comme un aveu.\n\nLe lexique. Pour l'eau : una fuga ou un escape, la fuite ; el grifo, le robinet — la llave en Amérique latine ; una tubería, la canalisation ; atascado, bouché ; desatascar, déboucher.\n\nPour l'électricité : un enchufe, la prise ; un fusible ; el cuadro eléctrico, le tableau ; un apagón, une coupure de courant ; la instalación, l'installation.\n\nPour le chauffage : la caldera, la chaudière ; el radiador ; purgar un radiador, le purger — le verbe est le même qu'en français.\n\nEt les verbes généraux : arreglar et reparar, réparer ; funcionar, marcher — no funciona, ça ne marche pas ; estar averiado, être en panne ; una avería, la panne.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux façons de rapporter un dégât",
              colonnes: [
                {
                  titre: "L'aveu — rare",
                  points: [
                    "He roto el vaso.",
                    "He perdido las llaves.",
                    "Le locuteur s'accuse.",
                  ],
                },
                {
                  titre: "Le se involontaire — normal",
                  points: [
                    "Se me rompió el vaso.",
                    "Se me perdieron las llaves.",
                    "Le locuteur est victime.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Faire faire, et appeler l'artisan",
          texte:
            "Comme en anglais, l'espagnol distingue faire et faire faire, mais il le fait plus simplement.\n\nLa construction est mandar ou hacer + infinitif : mandé arreglar la caldera, j'ai fait réparer la chaudière. Hacer arreglar existe aussi, et les deux sont interchangeables. À la différence de l'anglais, il n'y a pas de participe : mandar arreglar, jamais « mandar arreglada ».\n\nLes artisans : un fontanero en Espagne, un plomero en Amérique latine ; un electricista ; un carpintero, le menuisier ; un albañil, le maçon ; un pintor ; un cerrajero, le serrurier — celui qu'on appelle quand la porte claque.\n\nQuelques formules utiles : ¿me puede pasar un presupuesto ?, pouvez-vous me faire un devis ; ¿cuándo puede venir ?, quand pouvez-vous passer ; no tiene arreglo, c'est irréparable ; es una chapuza, c'est du travail bâclé — mot très espagnol, et l'insulte professionnelle par excellence.\n\nEnfin, un faux ami : el desgaste est l'usure normale, celle que mentionne un contrat de location. Et bricolaje traduit bricolage, mais le verbe manque : on dit hacer bricolaje, ou simplement arreglar cosas en casa.",
        },
      ],
    },
    cartes: [
      {
        etranger: "El grifo de la cocina gotea.",
        francais: "Le robinet de la cuisine goutte.",
        note: "El grifo en Espagne, la llave en Amérique latine. Gotear, goutter.",
      },
      {
        etranger: "¿Me pasas el destornillador?",
        francais: "Tu me passes le tournevis ?",
        note: "Destornillador, de destornillar. Le nom de l'outil se forme sur le geste.",
      },
      {
        etranger: "Necesito unos alicates pequeños.",
        francais: "J'ai besoin d'une petite pince.",
        note: "Alicates est toujours pluriel, comme tijeras.",
      },
      {
        etranger: "Se fue la luz durante dos horas.",
        francais: "Il y a eu une coupure de courant de deux heures.",
        note: "Irse la luz, la formule courante. Un apagón est le mot plus technique.",
      },
      {
        etranger: "Mandé arreglar la caldera.",
        francais: "J'ai fait réparer la chaudière.",
        note: "Mandar ou hacer + infinitif pour faire faire. Pas de participe, contrairement à l'anglais.",
      },
      {
        etranger: "La tubería está atascada.",
        francais: "La canalisation est bouchée.",
        note: "Atascado, bouché ; desatascar, déboucher.",
      },
      {
        etranger: "Se me rompió el enchufe.",
        francais: "J'ai cassé la prise.",
        note: "Le se involontaire : c'est la façon normale de rapporter un dégât domestique.",
      },
      {
        etranger: "La lavadora está averiada.",
        francais: "La machine à laver est en panne.",
        note: "Estar averiado, être en panne ; una avería, la panne ; no funciona, ça ne marche pas.",
      },
      {
        etranger: "Llamamos a un fontanero.",
        francais: "Nous avons appelé un plombier.",
        note: "Un fontanero en Espagne, un plomero en Amérique latine.",
      },
      {
        etranger: "Eso es una chapuza.",
        francais: "C'est du travail bâclé.",
        note: "Una chapuza : l'insulte professionnelle espagnole par excellence.",
      },
    ],
  },

  {
    slug: "es-voc-medioambiente",
    category: "Vocabulaire",
    title: "L'environnement et le climat",
    statement:
      "Émissions, déchets, énergies renouvelables. L'espagnol a traduit ce que l'anglais impose, et les calques y sont nombreux — certains admis, d'autres non.",
    tip: "El cambio climático désigne l'ensemble des dérèglements ; el calentamiento global la seule hausse des températures. Les deux ne sont pas synonymes.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Le vocabulaire du climat",
      sections: [
        {
          titre: "Nommer le phénomène",
          texte:
            "Le champ climatique espagnol suit de près le français, ce qui aide — et l'anglais a laissé des traces, ce qui piège.\n\nEl cambio climático désigne l'ensemble des dérèglements ; el calentamiento global, la seule hausse des températures. Le premier a remplacé le second dans l'usage scientifique.\n\nLos gases de efecto invernadero sont les gaz à effet de serre — el invernadero est la serre du jardinier. El dióxido de carbono, souvent CO2 ; el metano.\n\nLas emisiones, presque toujours au pluriel. La huella de carbono, l'empreinte carbone — huella veut dire trace ou empreinte de pas. La neutralidad de carbono, ou cero neto, calque de net zero.\n\nDeux verbes structurent le débat : mitigar, réduire les causes ; adaptarse, s'ajuster aux effets. La mitigación y la adaptación forment le couple des politiques publiques, comme en anglais et en français.\n\nEnfin, un mot spécifiquement hispanique : la sequía, la sécheresse. Elle est au centre du débat espagnol comme la canicule l'est du débat français, et le mot revient constamment dans la presse.",
          visuels: [
            {
              type: "tableau",
              titre: "Le terme, et ce qu'il recouvre",
              colonnes: ["Le terme", "Ce qu'il désigne", "La remarque"],
              lignes: [
                ["el cambio climático", "l'ensemble des dérèglements", "terme retenu"],
                ["el calentamiento global", "la hausse des températures", "plus étroit"],
                ["las emisiones", "les rejets de gaz", "presque toujours pluriel"],
                ["la huella de carbono", "l'empreinte carbone", "huella = trace"],
                ["las energías renovables", "solaire, éolien, hydraulique", "pluriel courant"],
                ["los combustibles fósiles", "charbon, pétrole, gaz", "toujours pluriel"],
                ["la sequía", "la sécheresse", "au cœur du débat espagnol"],
                ["una ola de calor", "une canicule", "littéralement vague de chaleur"],
              ],
              note: "L'espagnol met les énergies renouvelables au pluriel là où l'anglais garde un indénombrable.",
            },
          ],
        },
        {
          titre: "Les déchets et le tri",
          texte:
            "C'est le champ le plus concret, et l'espagnol y est plus régulier que l'anglais.\n\nLos residuos est le terme technique et administratif ; la basura, les ordures ménagères de tous les jours. El contenedor, le conteneur de tri ; el cubo de basura, la poubelle de la cuisine.\n\nLes verbes : reciclar, recycler ; separar ou clasificar, trier — separar la basura est la formule courante ; compostar ; reutilizar ; verter, déverser, d'où el vertedero, la décharge ; incinerar.\n\nDe un solo uso désigne l'usage unique : plásticos de un solo uso. Desechable veut dire jetable. Biodegradable et compostable ne sont pas synonymes, ici comme ailleurs : le premier se décompose, le second seulement dans des conditions définies.\n\nEnfin, deux mots du débat public. El ecopostureo est la traduction espagnole de greenwashing — le mot est récent, imagé, et concurrencé par le calque el greenwashing. Et la economía circular, l'économie circulaire.\n\nUn faux ami à signaler : una planta est une usine autant qu'une plante et un étage. Una planta de reciclaje est un centre de tri.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux mots qu'on croit synonymes",
              colonnes: [
                {
                  titre: "biodegradable",
                  points: [
                    "Se décompose par action biologique.",
                    "Aucun délai garanti.",
                    "Peut demander des décennies.",
                  ],
                },
                {
                  titre: "compostable",
                  points: [
                    "Donne un compost utilisable.",
                    "Souvent en installation industrielle.",
                    "Norme et délai définis.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "L'énergie, et les faux amis de la nature",
          texte:
            "Les sources : la energía solar, la eólica — de Eolo, le dieu des vents —, la hidráulica, la geotérmica, la mareomotriz, la biomasa. Una central est la centrale ; un parque eólico, un parc éolien ; la red eléctrica, le réseau.\n\nLes faux amis du champ sont réels et fréquents.\n\nConservar veut dire garder en l'état ou conserver un aliment ; protéger la nature se dit proteger ou preservar. Una reserva natural est une réserve naturelle, mais una reserva est aussi une réservation d'hôtel.\n\nSensible veut dire sensible au sens émotionnel : un milieu fragile se dit frágil ou vulnerable, jamais « sensible ».\n\nEl petróleo est le pétrole brut ; l'essence se dit la gasolina, et le gazole el gasóleo ou el diésel. Une station-service est una gasolinera.\n\nEnfin, dos mots que le français rend mal. El caudal est le débit d'un fleuve, notion centrale dans un pays où l'eau se compte. Et el regadío désigne l'agriculture irriguée, par opposition à el secano, l'agriculture sèche — une distinction qui structure toute la géographie agricole espagnole.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Las emisiones bajaron un diez por ciento.",
        francais: "Les émissions ont baissé de dix pour cent.",
        note: "Bajar UN diez por ciento : l'espagnol met l'article là où le français met « de ».",
      },
      {
        etranger: "El país quiere ser neutro en carbono.",
        francais: "Le pays veut atteindre la neutralité carbone.",
        note: "Neutro en carbono, ou la neutralidad de carbono. Cero neto calque net zero.",
      },
      {
        etranger: "Las energías renovables ya son más baratas.",
        francais: "Les énergies renouvelables sont déjà moins chères.",
        note: "L'espagnol met le pluriel là où l'anglais garde un indénombrable.",
      },
      {
        etranger: "Prohibieron los plásticos de un solo uso.",
        francais: "Ils ont interdit les plastiques à usage unique.",
        note: "De un solo uso, à usage unique ; desechable, jetable.",
      },
      {
        etranger: "Separamos la basura cada semana.",
        francais: "Nous trions les déchets chaque semaine.",
        note: "Separar la basura est la formule courante ; los residuos est le terme technique.",
      },
      {
        etranger: "La sequía duró todo el verano.",
        francais: "La sécheresse a duré tout l'été.",
        note: "La sequía est au débat espagnol ce que la canicule est au débat français.",
      },
      {
        etranger: "El caudal del río bajó mucho.",
        francais: "Le débit du fleuve a beaucoup baissé.",
        note: "El caudal, le débit : notion centrale dans un pays où l'eau se compte.",
      },
      {
        etranger: "Construyeron un parque eólico enorme.",
        francais: "Ils ont construit un parc éolien immense.",
        note: "Eólico vient d'Éole. Una central est la centrale.",
      },
      {
        etranger: "Es una reserva natural protegida.",
        francais: "C'est une réserve naturelle protégée.",
        note: "Proteger pour la nature ; conservar veut dire garder en l'état.",
      },
      {
        etranger: "El regadío consume mucha agua.",
        francais: "L'agriculture irriguée consomme beaucoup d'eau.",
        note: "El regadío contre el secano : la distinction structure la géographie agricole espagnole.",
      },
    ],
  },

  {
    slug: "es-voc-arte-cultura",
    category: "Vocabulaire",
    title: "L'art, la musique, la littérature",
    statement:
      "Un roman, une toile, un morceau, une pièce. Le vocabulaire de ce dont on parle après le film — et où la proximité avec le français fabrique des contresens élégants.",
    tip: "Una novela est un roman ; le feuilleton télévisé est una telenovela. Et la nouvelle littéraire se dit un cuento ou un relato.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Parler d'une œuvre en espagnol",
      sections: [
        {
          titre: "Nommer l'œuvre et son auteur",
          texte:
            "Chaque art a son mot, et le générique una obra les couvre tous — c'est le mot le plus utile du champ : una obra de teatro, una obra maestra, la obra de Goya.\n\nEn littérature : una novela, le roman ; un cuento ou un relato, la nouvelle ; un ensayo, l'essai ; una obra de teatro, la pièce ; un poema ; un poemario, le recueil de poèmes. L'auteur est un escritor, un novelista, un dramaturgo, un poeta — épicène : el poeta, la poeta.\n\nEn musique : una pieza, le morceau ; una canción, la chanson ; la letra, les paroles — au singulier, contrairement à l'anglais lyrics ; un tema, un titre dans un album, sens propre à la musique ; un disco, un álbum. Le compositeur est un compositor ; l'interprète, un intérprete.\n\nEn arts visuels : un cuadro, la toile — le mot veut d'abord dire cadre ; un dibujo, le dessin ; una escultura ; un grabado, la gravure ; una exposición.\n\nAu cinéma : una película, le film ; el reparto, la distribution ; la banda sonora, la musique du film ; la trama ou el argumento, l'intrigue ; un plano, un plan. Le réalisateur est el director.",
          visuels: [
            {
              type: "tableau",
              titre: "Les faux amis de la culture",
              colonnes: ["Le mot espagnol", "Ce qu'il veut dire", "Le faux ami"],
              lignes: [
                ["una novela", "un roman", "nouvelle → un cuento"],
                ["una librería", "une librairie", "bibliothèque → biblioteca"],
                ["una conferencia", "une conférence", "conférencier → ponente"],
                ["un editor", "un éditeur", "rédacteur en chef → un redactor jefe"],
                ["un cuadro", "une toile", "cadre → un marco"],
                ["la letra", "les paroles", "lettre aussi, selon le contexte"],
                ["un tema", "un titre musical, un sujet", "thème aussi"],
                ["el argumento", "l'intrigue", "argument → un razonamiento"],
                ["un personaje", "un personnage", "caractère → el carácter"],
              ],
              note: "Un cuadro veut d'abord dire cadre, puis tableau, puis schéma. Le contexte tranche.",
            },
          ],
        },
        {
          titre: "Donner un avis",
          texte:
            "Bueno et malo s'épuisent vite. L'espagnol dispose d'un registre étendu, et il aime les superlatifs.\n\nPour l'éloge : impresionante ; conmovedor, émouvant ; sobrio, tout en retenue ; ambicioso ; entretenido, divertissant ; adictivo pour une série ; una maravilla, une merveille ; no tiene desperdicio — littéralement « rien à jeter », le plus bel éloge espagnol.\n\nPour la réserve : irregular, inégal ; sobrevalorado, surestimé ; previsible ; pretencioso ; lento ; se hace larga pour un film qui traîne ; no me dice nada, ça ne me parle pas.\n\nDeux structures rendent l'avis naturel. Me pareció + adjectif : me pareció floja, je l'ai trouvée faible — le verbe parecer, comme gustar, met l'œuvre en sujet. Et es de esas películas que…, c'est un de ces films qui…\n\nEnfin une nuance de construction : gustar exige la personne au complément. On dit me gustó mucho, jamais « yo gusté ». Et encantar est plus fort : me encantó.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même verdict, deux forces",
              colonnes: [
                {
                  titre: "Franc",
                  points: [
                    "Es una maravilla.",
                    "No tiene desperdicio.",
                    "Me encantó de principio a fin.",
                  ],
                },
                {
                  titre: "Réservé",
                  points: [
                    "Me pareció floja.",
                    "Se hace un poco larga.",
                    "No está mal, pero…",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Raconter sans divulgâcher",
          texte:
            "Comme en anglais, l'espagnol résume une intrigue au présent : la novela cuenta la historia de un médico que se traslada a Bilbao. Le passé donnerait l'impression d'un souvenir personnel.\n\nLes verbes du résumé : contar la historia de ; estar ambientada en, se dérouler dans — la película está ambientada en los años veinte ; girar en torno a, tourner autour de ; tratar de, traiter de ; basarse en, être tiré de ; adaptar, adapter.\n\nLes précautions : un spoiler est passé tel quel, et la Real Academia propose destripe — de destripar, éventrer — sans grand succès. On dit sin spoilers, ou no me lo destripes.\n\nLa structure : el principio, le début ; el desenlace, le dénouement ; el giro, le retournement ; el final, la fin — masculin, à ne pas confondre avec la final, la finale sportive.\n\nEt deux mots propres à la tradition hispanique : el realismo mágico, courant littéraire latino-américain ; et la tertulia, la conversation régulière entre amis sur un sujet — littérature, politique, football —, institution culturelle sans équivalent français.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Es una novela, no un cuento.",
        francais: "C'est un roman, pas une nouvelle.",
        note: "Una novela est un roman ; la nouvelle se dit un cuento ou un relato.",
      },
      {
        etranger: "La película está ambientada en Cádiz.",
        francais: "Le film se déroule à Cadix.",
        note: "Estar ambientada en pour situer une œuvre dans un lieu ou une époque.",
      },
      {
        etranger: "La banda sonora es mejor que la trama.",
        francais: "La musique est meilleure que l'intrigue.",
        note: "La banda sonora, la musique de film ; la trama ou el argumento, l'intrigue.",
      },
      {
        etranger: "Me pareció bastante previsible.",
        francais: "Je l'ai trouvé assez prévisible.",
        note: "Parecer met l'œuvre en sujet : me pareció, jamais « yo parecí ».",
      },
      {
        etranger: "Este libro no tiene desperdicio.",
        francais: "Dans ce livre, tout est à garder.",
        note: "No tener desperdicio : le plus bel éloge espagnol, littéralement « rien à jeter ».",
      },
      {
        etranger: "El dramaturgo murió antes del estreno.",
        francais: "Le dramaturge est mort avant la première.",
        note: "El estreno, la première ; estrenar, sortir un film ou une pièce.",
      },
      {
        etranger: "Fue a una conferencia sobre Velázquez.",
        francais: "Elle est allée à une conférence sur Velázquez.",
        note: "Una conferencia, la conférence ; el ponente, celui qui la donne.",
      },
      {
        etranger: "Compró un cuadro en el mercadillo.",
        francais: "Il a acheté une toile au marché aux puces.",
        note: "Un cuadro veut d'abord dire cadre, puis tableau. Un marco est le cadre matériel.",
      },
      {
        etranger: "La exposición dura hasta marzo.",
        francais: "L'exposition se tient jusqu'en mars.",
        note: "Durar pour ce qui s'étend dans le temps ; el estreno pour ce qui commence.",
      },
      {
        etranger: "Sin spoilers, todavía no la he visto.",
        francais: "Pas de divulgâchage, je ne l'ai pas encore vue.",
        note: "Spoiler est passé tel quel. La RAE propose destripe, sans grand succès.",
      },
    ],
  },

  {
    slug: "es-c1-derecho",
    category: "Vocabulaire",
    title: "Le droit, le contrat, la responsabilité",
    statement:
      "Demanda, sentencia, plazo, incumplimiento. Le vocabulaire juridique espagnol ressemble au français de loin — et chaque mot y désigne autre chose de près.",
    tip: "Una demanda est une plainte en justice, pas une demande. Une demande administrative se dit una solicitud.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "L'espagnol juridique",
      sections: [
        {
          titre: "Une langue de précision, et de faux amis",
          texte:
            "L'espagnol juridique partage avec le français une racine latine commune, ce qui donne une impression de familiarité — et c'est exactement le piège. Les mots se ressemblent et ne désignent pas la même chose.\n\nUna demanda est l'acte introductif d'instance, la plainte au civil. Une demande ordinaire se dit una solicitud ou una petición.\n\nUna sentencia est la décision rendue par le tribunal ; une phrase se dit una frase. Un fallo est le dispositif de cette décision — et aussi une panne ou une erreur, selon le contexte.\n\nUn juicio est le procès ; el juzgado, le tribunal de première instance ; el tribunal, la juridiction en général.\n\nEl incumplimiento est le manquement contractuel ; cumplir veut dire respecter un engagement autant qu'avoir un anniversaire — cumplo treinta años.\n\nEt el plazo est le délai, mot central de tout contrat : el plazo vence, le délai expire ; prorrogar el plazo, le proroger.",
          visuels: [
            {
              type: "tableau",
              titre: "Le terme et son sens exact",
              colonnes: ["Le terme", "Ce qu'il veut dire", "Le faux ami"],
              lignes: [
                ["una demanda", "la plainte en justice", "demande → una solicitud"],
                ["una sentencia", "la décision de justice", "phrase → una frase"],
                ["un fallo", "le dispositif, ou une panne", "faille aussi"],
                ["el incumplimiento", "le manquement", "—"],
                ["el plazo", "le délai", "place → el sitio"],
                ["la responsabilidad civil", "la responsabilité civile", "—"],
                ["una cláusula", "une clause", "—"],
                ["la fianza", "la caution", "confiance → la confianza"],
                ["los daños y perjuicios", "les dommages et intérêts", "toujours pluriel"],
                ["el recurso", "le recours", "ressource aussi"],
              ],
              note: "El recurso veut dire recours en droit et ressource en économie. Interponer un recurso, faire appel.",
            },
          ],
        },
        {
          titre: "Les acteurs et les actes",
          texte:
            "Le vocabulaire des personnes est stable dans le monde hispanophone, même si les systèmes diffèrent.\n\nUn abogado est l'avocat — l'espagnol ne coupe pas entre conseil et plaidoirie comme le fait le droit anglais. Un procurador représente la partie devant le tribunal en Espagne, fonction sans équivalent français exact. Un juez, un fiscal — le procureur —, un testigo, un perito, l'expert judiciaire.\n\nLes parties : el demandante, le demandeur ; el demandado, le défendeur au civil ; el acusado, l'accusé au pénal ; la víctima — féminin quel que soit le sexe.\n\nLes actes : demandar a alguien, poursuivre ; interponer una demanda, déposer une plainte ; llegar a un acuerdo, transiger ; recurrir ou interponer un recurso, faire appel ; dictar sentencia, rendre un jugement ; confirmar ou revocar une décision ; archivar, classer sans suite.\n\nEt les issues : una multa, l'amende ; una condena, la condamnation ; la absolución, la relaxe ; los daños y perjuicios, les dommages et intérêts ; una medida cautelar, une mesure conservatoire.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux mots qu'un francophone confond",
              colonnes: [
                {
                  titre: "Au civil",
                  points: [
                    "el demandante / el demandado",
                    "una demanda",
                    "daños y perjuicios",
                  ],
                },
                {
                  titre: "Au pénal",
                  points: [
                    "el fiscal / el acusado",
                    "una denuncia",
                    "una condena, una multa",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Lire une clause sans se tromper",
          texte:
            "Trois habitudes suffisent à ne pas contresens un contrat espagnol.\n\nLa première : repérer le futur d'obligation. El arrendatario abonará la renta ne parle pas de l'avenir : il crée un devoir, exactement comme le shall anglais. Ce futur juridique est systématique dans les contrats espagnols, et un lecteur français y lit une simple prévision.\n\nLa deuxième : lire les définitions et les majuscules. Comme en anglais, les termes définis en tête du contrat gardent leur sens strict dans tout le corps du texte.\n\nLa troisième : reconnaître les formules figées. A los efectos oportunos, aux fins utiles ; sin perjuicio de, sans préjudice de — qui annonce une réserve et non une exception ; salvo pacto en contrario, sauf accord contraire ; a instancia de parte, à la demande d'une partie ; de oficio, d'office.\n\nEnfin, deux verbes du contrat à ne pas confondre. Rescindir, résilier avant terme ; resolver, résoudre un contrat pour manquement — le même verbe veut dire résoudre un problème dans la langue ordinaire, ce qui rend la lecture ambiguë pour qui n'est pas averti.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Interpuso una demanda contra el banco.",
        francais: "Il a déposé une plainte contre la banque.",
        note: "Una demanda est l'acte de justice. Une demande ordinaire est una solicitud.",
      },
      {
        etranger: "El plazo vence el treinta de junio.",
        francais: "Le délai expire le trente juin.",
        note: "El plazo, le délai : mot central de tout contrat espagnol.",
      },
      {
        etranger: "El tribunal dictó sentencia ayer.",
        francais: "Le tribunal a rendu son jugement hier.",
        note: "Dictar sentencia, rendre un jugement. El fallo en est le dispositif.",
      },
      {
        etranger: "Hubo un incumplimiento grave del contrato.",
        francais: "Il y a eu un manquement grave au contrat.",
        note: "El incumplimiento, le manquement ; cumplir, respecter un engagement.",
      },
      {
        etranger: "Llegaron a un acuerdo extrajudicial.",
        francais: "Ils sont parvenus à un accord amiable.",
        note: "Llegar a un acuerdo, transiger. Extrajudicial, hors procédure.",
      },
      {
        etranger: "Decidió recurrir la sentencia.",
        francais: "Il a décidé de faire appel du jugement.",
        note: "Recurrir ou interponer un recurso. El recurso veut aussi dire ressource.",
      },
      {
        etranger: "Le impusieron una multa considerable.",
        francais: "On lui a infligé une amende considérable.",
        note: "Imponer una multa. Una condena est la condamnation pénale.",
      },
      {
        etranger: "El arrendatario abonará la renta mensualmente.",
        francais: "Le locataire s'acquittera du loyer chaque mois.",
        note: "Le futur juridique crée l'obligation, comme le shall anglais.",
      },
      {
        etranger: "Salvo pacto en contrario, se aplica esto.",
        francais: "Sauf accord contraire, cela s'applique.",
        note: "Formule figée. Sin perjuicio de annonce une réserve, pas une exception.",
      },
      {
        etranger: "Reclamó daños y perjuicios.",
        francais: "Il a réclamé des dommages et intérêts.",
        note: "Daños y perjuicios, toujours au pluriel, comme damages en anglais.",
      },
    ],
  },

  {
    slug: "es-c1-abstracto",
    category: "Vocabulaire",
    title: "Les mots de la pensée abstraite",
    statement:
      "Planteamiento, alcance, matiz, sesgo. Une vingtaine de noms abstraits que le français rend par une périphrase — et sans lesquels on ne peut pas raisonner en espagnol.",
    tip: "El planteamiento est la façon de poser un problème. Le mot n'a pas d'équivalent français d'un seul tenant, et il est partout dans l'écrit argumenté.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les noms abstraits sans équivalent",
      sections: [
        {
          titre: "Ceux qui n'ont pas de traduction",
          texte:
            "Comme l'anglais, l'espagnol dispose de noms abstraits que le français doit paraphraser. Ce sont eux qui séparent un texte fluide d'un texte laborieux.\n\nEl planteamiento est la façon de poser un problème : el planteamiento del artículo es discutible. Ni « position », ni « approche » n'en rendent la précision.\n\nEl alcance est la portée ou l'étendue : el alcance de la reforma. El ámbito est le domaine ou le périmètre : en el ámbito educativo.\n\nUn matiz est une nuance, et matizar le verbe qui va avec — il n'a pas d'équivalent français d'un seul mot dans son emploi argumentatif : cabría matizar que.\n\nUn sesgo est un biais, au sens statistique comme au sens cognitif. Un enfoque est l'angle d'approche. Un desfase est un décalage. Un desempeño est la performance ou l'exercice d'une fonction — le mot est très latino-américain.\n\nEt trois mots du raisonnement : el fundamento, ce sur quoi une thèse repose ; la vigencia, le fait d'être encore en vigueur ou d'actualité ; el arraigo, l'enracinement d'une pratique ou d'une personne.",
          visuels: [
            {
              type: "tableau",
              titre: "Le mot, et ce qu'il faut de français pour le dire",
              colonnes: ["Le mot", "Ce qu'il désigne", "En français"],
              lignes: [
                ["el planteamiento", "la façon de poser le problème", "la manière d'aborder"],
                ["el alcance", "la portée, l'étendue", "l'ampleur, la portée"],
                ["el ámbito", "le domaine couvert", "le champ, le périmètre"],
                ["un matiz", "une nuance argumentative", "une nuance"],
                ["un sesgo", "un biais", "un biais"],
                ["un enfoque", "l'angle d'approche", "l'approche, l'optique"],
                ["un desfase", "un décalage", "le décalage, l'écart"],
                ["el desempeño", "l'exercice, la performance", "la performance"],
                ["la vigencia", "le fait d'être en vigueur", "l'actualité, la validité"],
                ["el arraigo", "l'enracinement", "l'ancrage"],
              ],
              note: "Aucun ne se traduit par un seul mot : c'est pourquoi il faut les penser en espagnol.",
            },
          ],
        },
        {
          titre: "Les nuances entre proches",
          texte:
            "Comme en anglais, plusieurs séries de quasi-synonymes demandent un choix que le français ne pose pas.\n\nProblema, cuestión, asunto, tema. Un problema suppose qu'il y a quelque chose à régler. Una cuestión est une question débattue. Un asunto est une affaire à traiter. Un tema est un sujet.\n\nObjetivo, meta, fin, propósito. Un objetivo est mesurable. Una meta est le but visé, souvent lointain. Un fin est la finalité. Un propósito est l'intention, ce qu'on se propose.\n\nSentido, significado, acepción. El sentido est la direction autant que le sens général. El significado est ce qu'un mot veut dire. Una acepción est une entrée précise du dictionnaire.\n\nCapacidad, habilidad, aptitud. La capacidad est la contenance ou la faculté. La habilidad est le savoir-faire acquis. La aptitud est la disposition naturelle.\n\nEnfin, hecho, dato, prueba. Un hecho est un fait. Un dato est une donnée. Una prueba est une preuve — et aussi un examen, ce qui produit des ambiguïtés savoureuses dans les copies d'étudiants.",
          visuels: [
            {
              type: "comparaison",
              titre: "Quatre mots pour « objectif »",
              colonnes: [
                {
                  titre: "Du plus concret",
                  points: [
                    "un objetivo — mesurable.",
                    "una meta — le but visé.",
                  ],
                },
                {
                  titre: "Au plus abstrait",
                  points: [
                    "un fin — la finalité.",
                    "un propósito — l'intention.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Comment les installer",
          texte:
            "Ces mots ne s'apprennent pas par la traduction, puisque le français n'en a pas. Trois habitudes fonctionnent.\n\nLa première : apprendre le mot avec son verbe. On dit plantear una cuestión, ampliar el alcance, introducir un matiz, corregir un sesgo, cambiar de enfoque, perder vigencia, echar raíces pour l'arraigo. Le verbe fixe le mot mieux qu'une définition.\n\nLa deuxième : apprendre la famille. Plantear donne planteamiento ; matizar donne matiz et matizado ; sesgar donne sesgo et sesgado ; enfocar donne enfoque ; desfasar donne desfase et desfasado, qui veut dire dépassé.\n\nLa troisième : les employer à l'écrit d'abord. Ce sont des mots de l'argumentation, et c'est en écrivant qu'on prend le temps de choisir — c'est ce choix répété qui les installe.\n\nUn dernier avertissement, symétrique de celui de l'anglais : plusieurs de ces mots ont un cousin français au sens plus étroit. « Ámbito » n'est pas « ambiance », « desempeño » n'est pas « dépannage », et « vigencia » n'a rien à voir avec la vigie. Repartir du français rétrécit le mot espagnol, ou le fausse.",
        },
      ],
    },
    cartes: [
      {
        etranger: "El planteamiento del artículo es discutible.",
        francais: "La façon dont l'article pose le problème est discutable.",
        note: "El planteamiento : ni « position » ni « approche » n'en rendent la précision.",
      },
      {
        etranger: "Hay que ampliar el alcance del estudio.",
        francais: "Il faut élargir la portée de l'étude.",
        note: "Ampliar el alcance : le verbe fixe le mot mieux qu'une définition.",
      },
      {
        etranger: "En el ámbito educativo funciona bien.",
        francais: "Dans le champ éducatif, cela fonctionne bien.",
        note: "El ámbito, le domaine couvert. Rien à voir avec « ambiance ».",
      },
      {
        etranger: "Cabría introducir un matiz aquí.",
        francais: "Il conviendrait d'introduire une nuance ici.",
        note: "Matizar et un matiz : le couple central de l'argumentation espagnole.",
      },
      {
        etranger: "Los datos presentan un sesgo evidente.",
        francais: "Les données présentent un biais évident.",
        note: "Un sesgo, statistique ou cognitif. Sesgado, biaisé.",
      },
      {
        etranger: "Cambiaron de enfoque a mitad del proyecto.",
        francais: "Ils ont changé d'approche au milieu du projet.",
        note: "Un enfoque, l'angle d'approche ; enfocar, cadrer ou orienter.",
      },
      {
        etranger: "Hay un desfase entre la ley y la práctica.",
        francais: "Il y a un décalage entre la loi et la pratique.",
        note: "Un desfase, le décalage ; desfasado veut dire dépassé.",
      },
      {
        etranger: "Esa norma ya perdió vigencia.",
        francais: "Cette règle n'est plus en vigueur.",
        note: "La vigencia, le fait d'être en vigueur ou d'actualité.",
      },
      {
        etranger: "Es una práctica de mucho arraigo.",
        francais: "C'est une pratique très ancrée.",
        note: "El arraigo, l'enracinement ; echar raíces, prendre racine.",
      },
      {
        etranger: "No es un problema, es una cuestión.",
        francais: "Ce n'est pas un problème, c'est une question.",
        note: "Un problema suppose qu'il y a à régler ; una cuestión se débat.",
      },
    ],
  },
];
