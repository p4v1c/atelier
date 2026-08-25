/**
 * Espagnol — cinq séries de niveau C1.
 *
 * Le module s'arrêtait au B2 : on y apprenait à se faire comprendre, pas à
 * choisir. Le C1 commence quand deux formulations sont justes et qu'il faut
 * savoir laquelle porte le bon degré, le bon registre, la bonne distance.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_VOCABULAIRE_C1: LotCartes[] = [
  {
    slug: "es-c1-matices",
    category: "Vocabulaire",
    title: "Pondérer : le degré et la probabilité",
    statement:
      "Quizá venga, quizá viene. Le même adverbe, deux modes, deux degrés de certitude. L'espagnol savant borne ses affirmations par la grammaire autant que par le lexique.",
    tip: "Après quizá, tal vez et posiblemente, l'indicatif dit qu'on y croit, le subjonctif qu'on en doute. Le choix du mode est un choix de degré.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Dire le degré de certitude",
      sections: [
        {
          titre: "Le mode comme thermomètre",
          texte:
            "L'espagnol dispose d'un outil que le français a perdu : le choix du mode après un adverbe de doute. Là où le français dit « peut-être qu'il vient » sans nuance possible, l'espagnol module.\n\nQuizá viene, avec l'indicatif, signale que le locuteur y croit assez : la probabilité est haute. Quizá venga, avec le subjonctif, signale qu'il en doute : la probabilité est basse. Le même vaut pour tal vez, posiblemente, probablemente, seguramente.\n\nDeux adverbes échappent à ce jeu et imposent leur mode. A lo mejor prend toujours l'indicatif : a lo mejor viene. Et puede que prend toujours le subjonctif : puede que venga.\n\nS'y ajoute le futur de probabilité, propre à l'espagnol et sans équivalent français : ¿qué hora será? veut dire « quelle heure peut-il bien être ? », et serán las tres, « il doit être trois heures ». Le futur ne parle plus d'avenir mais de conjecture sur le présent.\n\nEt le conditionnel joue le même rôle pour le passé : serían las tres cuando llegó, il devait être trois heures quand il est arrivé.",
          visuels: [
            {
              type: "tableau",
              titre: "L'échelle de la certitude",
              colonnes: ["La forme", "Le mode", "Le degré"],
              lignes: [
                ["seguro que viene", "indicatif", "quasi certain"],
                ["seguramente viene", "indicatif", "très probable"],
                ["a lo mejor viene", "indicatif obligatoire", "probable"],
                ["quizá viene", "indicatif", "assez probable"],
                ["quizá venga", "subjonctif", "peu probable"],
                ["puede que venga", "subjonctif obligatoire", "possible"],
                ["dudo que venga", "subjonctif", "improbable"],
                ["es imposible que venga", "subjonctif", "exclu"],
              ],
              note: "Seguramente veut dire « très probablement », pas « sûrement » au sens de certitude.",
            },
          ],
        },
        {
          titre: "Le lexique de la nuance",
          texte:
            "Au-delà du mode, l'espagnol savant borne ses énoncés par un lexique précis, qu'un francophone gagne à posséder pour l'écrit.\n\nPour l'étendue : en gran medida, dans une large mesure ; en términos generales, d'une manière générale ; por lo general, généralement ; en su mayoría, pour la plupart ; salvo excepciones, sauf exceptions.\n\nPour la source : según parece, à ce qu'il semble ; al parecer, apparemment ; todo apunta a que, tout indique que ; los datos sugieren que, les données suggèrent que.\n\nPour l'atténuation : hasta cierto punto, dans une certaine mesure ; en principio, en principe — attention, cela veut dire « a priori », pas « au début » ; a priori, employé tel quel ; en buena medida, pour une bonne part.\n\nPour concéder : si bien, quoique ; aun cuando, même si ; por más que, quel que soit ; no cabe duda de que — celui-là au contraire affirme fortement.\n\nEt deux verbes de prudence : cabría matizar que, il faudrait nuancer que ; convendría precisar que, il conviendrait de préciser que. Le conditionnel y fait tout le travail d'atténuation.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même énoncé, deux portées",
              colonnes: [
                {
                  titre: "Sans marqueur — universel",
                  points: [
                    "Los jóvenes leen menos.",
                    "Este método resuelve el problema.",
                    "Le lecteur cherche le contre-exemple.",
                  ],
                },
                {
                  titre: "Borné — défendable",
                  points: [
                    "Por lo general, los jóvenes leen menos.",
                    "Este método resuelve en gran medida el problema.",
                    "Le lecteur suit le raisonnement.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les degrés de l'adjectif",
          texte:
            "L'espagnol module aussi par le degré, et il dispose pour cela d'outils que le français rend par des adverbes.\n\nLe suffixe -ísimo dit le degré maximal : carísimo, facilísimo, buenísimo. Il est plus vivant que muy dans la langue parlée, et parfaitement acceptable à l'écrit courant — moins dans un texte académique.\n\nLes préfixes intensifs : super-, mega-, hiper- appartiennent à l'oral jeune. Re- et requete- sont très employés en Amérique latine : reguapo, requetebueno.\n\nPour atténuer : algo, un peu ; un tanto, quelque peu ; más bien, plutôt ; relativamente ; no del todo, pas tout à fait ; poco — attention, poco inteligente veut dire « peu intelligent », et non « un peu intelligent », qui se dirait un poco inteligente. La présence de l'article change le sens du tout au tout.\n\nEnfin, deux tournures utiles. De lo más + adjectif : es de lo más interesante, c'est on ne peut plus intéressant. Et lo + adjectif + que : no sabes lo difícil que es, tu ne sais pas à quel point c'est difficile — une structure sans équivalent direct en français.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Quizá venga, pero lo dudo.",
        francais: "Il viendra peut-être, mais j'en doute.",
        note: "Subjonctif après quizá : le locuteur signale qu'il n'y croit pas beaucoup.",
      },
      {
        etranger: "A lo mejor viene esta tarde.",
        francais: "Il viendra peut-être cet après-midi.",
        note: "A lo mejor impose l'indicatif. Puede que impose le subjonctif.",
      },
      {
        etranger: "Serán las tres más o menos.",
        francais: "Il doit être trois heures environ.",
        note: "Le futur de probabilité : il ne parle pas d'avenir mais de conjecture sur le présent.",
      },
      {
        etranger: "Todo apunta a que se equivocaron.",
        francais: "Tout indique qu'ils se sont trompés.",
        note: "Todo apunta a que + indicatif : la source porte l'affirmation.",
      },
      {
        etranger: "En gran medida, el problema persiste.",
        francais: "Dans une large mesure, le problème persiste.",
        note: "En gran medida borne l'étendue sans affaiblir l'énoncé.",
      },
      {
        etranger: "Cabría matizar esa afirmación.",
        francais: "Il faudrait nuancer cette affirmation.",
        note: "Le conditionnel fait tout le travail d'atténuation.",
      },
      {
        etranger: "Es un tanto arriesgado, según parece.",
        francais: "C'est quelque peu risqué, à ce qu'il semble.",
        note: "Un tanto atténue ; según parece déplace la source.",
      },
      {
        etranger: "No sabes lo difícil que fue.",
        francais: "Tu ne sais pas à quel point ce fut difficile.",
        note: "Lo + adjectif + que : une structure sans équivalent direct en français.",
      },
      {
        etranger: "Es poco probable, aunque no imposible.",
        francais: "C'est peu probable, quoique pas impossible.",
        note: "Poco sans article veut dire « peu » ; un poco voudrait dire « un peu ».",
      },
      {
        etranger: "Si bien tiene razón, exagera.",
        francais: "Quoiqu'il ait raison, il exagère.",
        note: "Si bien concède. Suivi de l'indicatif ici, contrairement à aunque hypothétique.",
      },
    ],
  },

  {
    slug: "es-c1-academico",
    category: "Vocabulaire",
    title: "Le vocabulaire de l'essai et du rapport",
    statement:
      "Plantear, abordar, esbozar, sustentar. Une quarantaine de verbes font tout l'espagnol académique, et le calque du français en propose rarement le bon.",
    tip: "Plantear une question veut dire la poser ou la soulever. C'est le verbe le plus employé du champ, et il n'a pas de cousin français direct.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Écrire un texte argumenté en espagnol",
      sections: [
        {
          titre: "Les verbes de l'argumentation",
          texte:
            "L'espagnol académique repose sur un noyau restreint de verbes, et les connaître dispense de traduire.\n\nPour annoncer : este trabajo aborda, examina, analiza, expone, se propone demostrar. Esbozar est plus léger — esquisser ; profundizar plus lourd — approfondir.\n\nPour poser une question : plantear est le verbe clé. Este artículo plantea tres preguntas. Il veut dire à la fois poser, soulever et formuler.\n\nPour expliquer : dar cuenta de, rendre compte de ; explicar ; justificar ; obedecer a — cette différence obedece a dos factores, cet écart tient à deux facteurs.\n\nPour appuyer : sustentar, étayer ; respaldar, appuyer ; corroborar ; avalar, cautionner. Apoyar est le générique.\n\nPour contester : cuestionar, remettre en question ; rebatir, réfuter ; refutar ; poner en tela de juicio, mettre en doute.\n\nPour conclure : los resultados apuntan a, se desprende que — il ressort que —, cabe concluir que.",
          visuels: [
            {
              type: "tableau",
              titre: "Le calque, et le verbe attendu",
              colonnes: ["Ce qu'on veut dire", "Le calque", "Le verbe espagnol"],
              lignes: [
                ["soulever une question", "levantar una pregunta", "plantear una pregunta"],
                ["traiter un sujet", "tratar un sujeto", "abordar un tema"],
                ["rendre compte de", "rendir cuenta de", "dar cuenta de"],
                ["étayer une thèse", "soportar una tesis", "sustentar o respaldar una tesis"],
                ["remettre en cause", "poner en causa", "poner en tela de juicio"],
                ["il ressort que", "sale que", "se desprende que"],
                ["tenir à deux facteurs", "tener a dos factores", "obedecer a dos factores"],
                ["mettre en évidence", "poner en evidencia", "poner de manifiesto"],
              ],
              note: "Poner en evidencia existe, mais veut dire « ridiculiser quelqu'un ». Le piège est réel.",
            },
          ],
        },
        {
          titre: "Les connecteurs, et leur registre",
          texte:
            "Comme en anglais, les connecteurs espagnols portent chacun un registre, et les mélanger se voit.\n\nPour l'opposition, du plus soutenu au plus courant : no obstante, sin embargo, ahora bien, en cambio, pero. No obstante appartient à l'écrit ; pero ne s'écrit pas en tête de phrase dans un texte formel.\n\nPour l'ajout : asimismo, de igual modo, además, también. Asimismo est nettement soutenu et souvent mal orthographié — un seul mot, et à distinguer de así mismo, qui veut dire « de cette même façon ».\n\nPour la conséquence : por consiguiente, por lo tanto, así pues, de ahí que — celui-ci appelle le subjonctif : de ahí que sea difícil.\n\nPour la concession : si bien, aun cuando, por más que, aunque. Aunque + indicatif pour un fait admis, + subjonctif pour une hypothèse : aunque llueve, on sait qu'il pleut ; aunque llueva, il pleuvra peut-être.\n\nPour reformuler : es decir, o sea, dicho de otro modo, en otras palabras. O sea est oral et n'a pas sa place à l'écrit soutenu.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même lien, deux registres",
              colonnes: [
                {
                  titre: "Soutenu — l'écrit",
                  points: [
                    "no obstante estos límites…",
                    "asimismo, los datos muestran…",
                    "por consiguiente, cabe concluir…",
                  ],
                },
                {
                  titre: "Courant — l'oral, la note",
                  points: [
                    "aun así…",
                    "y además…",
                    "o sea que podemos decir…",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Ce que l'espagnol académique attend",
          texte:
            "Trois traits distinguent un texte espagnol soigné, et deux d'entre eux surprennent un francophone.\n\nLe premier : l'impersonnalité. L'espagnol académique emploie massivement le se impersonnel et la troisième personne — se analiza, se observa, cabe destacar — là où le français admet volontiers « nous montrerons ». La première personne du pluriel existe, mais elle est moins fréquente.\n\nLe deuxième : la longueur de phrase. La tradition rhétorique hispanique tolère des périodes plus longues que l'anglaise, avec des subordonnées enchâssées. Un texte espagnol traduit trop court sonne sec.\n\nLe troisième : le subjonctif comme marqueur de position. Nier, douter ou refuser un fait appelle le subjonctif — no creo que sea así, niego que exista tal relación. Employer l'indicatif y change le sens : no creo que es así serait une faute qui s'entend.\n\nEt une convention typographique : les citations longues se composent en retrait, les guillemets espagnols sont les « angulaires », et l'italique s'emploie pour les mots étrangers comme en français.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Este artículo plantea tres preguntas.",
        francais: "Cet article soulève trois questions.",
        note: "Plantear veut dire poser, soulever et formuler. Le verbe clé du champ.",
      },
      {
        etranger: "El estudio aborda un tema poco tratado.",
        francais: "L'étude traite un sujet peu abordé.",
        note: "Abordar un tema. « Tratar un sujeto » est un calque : sujeto veut dire le sujet grammatical.",
      },
      {
        etranger: "Esa diferencia obedece a dos factores.",
        francais: "Cet écart tient à deux facteurs.",
        note: "Obedecer a, tenir à. Le verbe n'a rien à voir avec l'obéissance ici.",
      },
      {
        etranger: "Los datos sustentan esta hipótesis.",
        francais: "Les données étayent cette hypothèse.",
        note: "Sustentar, étayer ; respaldar, appuyer ; avalar, cautionner.",
      },
      {
        etranger: "De ahí que sea tan difícil medirlo.",
        francais: "D'où la difficulté de le mesurer.",
        note: "De ahí que appelle toujours le subjonctif : sea, jamais es.",
      },
      {
        etranger: "No obstante, conviene ser prudentes.",
        francais: "Néanmoins, il convient d'être prudent.",
        note: "No obstante appartient à l'écrit soutenu. Pero ne s'écrit pas en tête de phrase formelle.",
      },
      {
        etranger: "Se desprende que el método falla.",
        francais: "Il en ressort que la méthode échoue.",
        note: "Desprenderse que, il ressort que. Une tournure impersonnelle typique de l'écrit.",
      },
      {
        etranger: "Cabe destacar dos puntos aquí.",
        francais: "Il convient de souligner deux points ici.",
        note: "Cabe + infinitif : la formule impersonnelle standard de l'écrit académique.",
      },
      {
        etranger: "No creo que sea la mejor solución.",
        francais: "Je ne crois pas que ce soit la meilleure solution.",
        note: "La négation appelle le subjonctif. « No creo que es » s'entend comme une faute.",
      },
      {
        etranger: "Estos resultados ponen de manifiesto un sesgo.",
        francais: "Ces résultats mettent en évidence un biais.",
        note: "Poner de manifiesto. « Poner en evidencia » voudrait dire ridiculiser quelqu'un.",
      },
    ],
  },

  {
    slug: "es-c1-prensa",
    category: "Vocabulaire",
    title: "L'idiome de la presse hispanophone",
    statement:
      "Les titres espagnols suppriment les articles, mettent le passé au présent et gardent l'ordre verbe-sujet. Une grammaire à part, qu'il faut lire pour lire la presse.",
    tip: "Dans un titre, le présent raconte le passé et l'ordre s'inverse volontiers : Aprueba el Congreso la reforma — le sujet passe après le verbe.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Lire un journal en espagnol",
      sections: [
        {
          titre: "La grammaire des titres",
          texte:
            "Le titular espagnol obéit à des conventions fixes, différentes de celles de l'anglais et tout aussi tranchées.\n\nLes articles tombent souvent, mais moins systématiquement qu'en anglais : Detienen a dos sospechosos, on arrête deux suspects. La forme impersonnelle à la troisième personne du pluriel — sans sujet exprimé — est extrêmement fréquente et remplace le passif.\n\nLe présent raconte le passé : El Congreso aprueba la reforma veut dire que le Congrès a adopté la réforme. C'est le même piège qu'en anglais.\n\nL'ordre verbe-sujet est courant, surtout dans la presse mexicaine : Aprueba el Congreso la reforma. La construction est parfaitement grammaticale et déroute un francophone habitué au sujet en tête.\n\nLe passif réfléchi remplace le passif : Se investiga a tres empresas. Et l'infinitif seul annonce parfois une intention : El Gobierno, a punto de dimitir.\n\nEnfin, les deux points remplacent le verbe déclaratif : Sánchez: la reforma es urgente.",
          visuels: [
            {
              type: "tableau",
              titre: "Le titre, et ce qu'il dit vraiment",
              colonnes: ["Le titre", "La phrase complète", "Le temps réel"],
              lignes: [
                ["El Banco sube los tipos", "El Banco ha subido los tipos.", "passé"],
                ["Detienen a dos sospechosos", "Han detenido a dos sospechosos.", "passé, impersonnel"],
                ["Aprueba el Congreso la ley", "El Congreso aprobó la ley.", "passé, ordre inversé"],
                ["Se investiga a tres empresas", "Tres empresas están siendo investigadas.", "présent, passif réfléchi"],
                ["Dimite el ministro", "El ministro ha dimitido.", "passé"],
                ["Sube el paro en octubre", "El paro ha subido en octubre.", "passé"],
              ],
              note: "La troisième personne du pluriel sans sujet remplace le passif : detienen, investigan, acusan.",
            },
          ],
        },
        {
          titre: "Le lexique de la une",
          texte:
            "La presse hispanophone emploie un vocabulaire à elle, choisi pour sa densité.\n\nPour la hausse et la baisse : dispararse, s'envoler ; desplomarse et hundirse, s'effondrer ; repuntar, repartir à la hausse ; moderarse, ralentir ; frenar, freiner.\n\nPour les personnes : el mandatario, le dirigeant ; el edil, le conseiller municipal ; el letrado, l'avocat ; el galeno, le médecin — ces trois derniers sont des synonymes de style, employés pour éviter la répétition, procédé beaucoup plus systématique en espagnol qu'en français.\n\nPour les actions : dimitir, démissionner ; cesar, révoquer ; imputar et procesar, mettre en examen ; querellarse, porter plainte ; recortar, réduire ; blindar, protéger ; aplazar, reporter ; zanjar, trancher une affaire ; desvelar, révéler.\n\nPour les affaires : la trama, le réseau ; el sumario, le dossier d'instruction ; la fianza, la caution ; el fallo, le jugement — et aussi la panne, selon le contexte.\n\nLa recherche du synonyme mérite d'être signalée : un article espagnol appellera successivement le même homme el presidente, el mandatario, el jefe del Ejecutivo. Le lecteur français, qui accepte la répétition, s'y perd d'abord.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le mot de la une, le mot ordinaire",
              colonnes: [
                {
                  titre: "Dans un titre",
                  points: [
                    "dispararse → subir mucho",
                    "desplomarse → bajar de golpe",
                    "zanjar → resolver definitivamente",
                    "desvelar → revelar",
                  ],
                },
                {
                  titre: "Dans l'article",
                  points: [
                    "Los precios han subido mucho.",
                    "La bolsa bajó de golpe.",
                    "El tribunal resolvió el asunto.",
                    "El informe reveló que…",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le journal, ses parties, sa ligne",
          texte:
            "Nommer les parties d'un journal permet de citer correctement.\n\nLa noticia est la dépêche ou l'information ; el reportaje, le reportage ; la crónica, le récit signé — mot central de la tradition hispanique, à mi-chemin du reportage et de l'essai ; el editorial, l'éditorial non signé ; la columna, la chronique d'opinion ; la tribuna, la tribune extérieure ; la entrevista, l'entretien.\n\nLe chapeau se dit la entradilla ; l'accroche, el lead ou la entrada ; le pied de photo, el pie de foto ; le titre, el titular ; le sous-titre, el subtítulo ou el antetítulo selon qu'il précède ou suit.\n\nLa première page est la portada ; le supplément, el suplemento ; la rubrique, la sección.\n\nDeux mots portent la ligne du journal : la línea editorial et el posicionamiento. Et la presse à sensation s'appelle la prensa amarilla — jaune, comme en anglais yellow press, et non « à scandale ».\n\nEnfin, deux faux amis : una crónica n'est pas une chronique au sens français de billet régulier, mais un récit journalistique ; et un cronista est celui qui l'écrit.",
        },
      ],
    },
    cartes: [
      {
        etranger: "El titular decía: dimite el ministro.",
        francais: "Le titre disait : le ministre démissionne.",
        note: "Le présent d'un titre raconte le passé, et l'ordre verbe-sujet est courant.",
      },
      {
        etranger: "Detienen a dos sospechosos en Madrid.",
        francais: "Deux suspects ont été arrêtés à Madrid.",
        note: "Troisième personne du pluriel sans sujet : l'espagnol remplace ainsi le passif.",
      },
      {
        etranger: "Los precios se dispararon en verano.",
        francais: "Les prix se sont envolés cet été.",
        note: "Dispararse, s'envoler ; desplomarse, s'effondrer. Le lexique de la une.",
      },
      {
        etranger: "El tribunal zanjó el asunto ayer.",
        francais: "Le tribunal a tranché l'affaire hier.",
        note: "Zanjar, trancher définitivement. El fallo, le jugement — et aussi la panne.",
      },
      {
        etranger: "El informe desveló una trama de sobornos.",
        francais: "Le rapport a révélé un réseau de pots-de-vin.",
        note: "Desvelar, révéler ; la trama, le réseau ; el soborno, le pot-de-vin.",
      },
      {
        etranger: "El mandatario aplazó la visita.",
        francais: "Le dirigeant a reporté la visite.",
        note: "El mandatario évite la répétition de el presidente : le procédé est systématique.",
      },
      {
        etranger: "Publicaron una crónica desde Bogotá.",
        francais: "Ils ont publié un reportage depuis Bogota.",
        note: "La crónica est un récit journalistique, pas une chronique au sens français.",
      },
      {
        etranger: "Salió en portada el martes.",
        francais: "C'est paru en une mardi.",
        note: "La portada, la première page ; la sección, la rubrique.",
      },
      {
        etranger: "El pie de foto estaba equivocado.",
        francais: "La légende de la photo était erronée.",
        note: "El pie de foto, la légende ; la entradilla, le chapeau.",
      },
      {
        etranger: "Lo publicó la prensa amarilla.",
        francais: "C'est la presse à sensation qui l'a publié.",
        note: "La prensa amarilla, jaune comme en anglais — et non « à scandale ».",
      },
    ],
  },

  {
    slug: "es-c1-registro",
    category: "Vocabulaire",
    title: "Choisir son registre",
    statement:
      "Comprar, adquirir, hacerse con. Pedir, solicitar, requerir. Trois mots par idée — et le registre se lit dans l'origine du mot autant que dans sa longueur.",
    tip: "L'espagnol soutenu préfère le mot latin savant et le nom au verbe. Proceder a la apertura est administratif ; abrir est humain.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les trois étages de l'espagnol",
      sections: [
        {
          titre: "Le mot courant et le mot cultivé",
          texte:
            "L'espagnol, comme le français, a deux couches issues du latin : le mot hérité, transformé par des siècles d'usage, et le mot savant, réemprunté tel quel par les clercs.\n\nLe couple le plus visible est celui des adjectifs de relation. Le nom courant est populaire, l'adjectif est savant : ojo donne ocular, leche donne lácteo, hijo donne filial, agua donne acuático, hueso donne óseo, sangre donne sanguíneo, dedo donne digital.\n\nCes doublets structurent tout le registre soutenu. Un texte médical parlera de vía ocular là où la conversation dit por el ojo.\n\nLe même partage vaut pour les verbes. Comprar est neutre, adquirir est soutenu, hacerse con est familier. Pedir est neutre, solicitar est administratif, requerir est technique. Empezar est neutre, comenzar un peu plus soigné, iniciar administratif.\n\nPour un francophone, la difficulté est inverse de celle de l'anglais : le mot savant espagnol ressemble au mot français courant, si bien qu'on écrit spontanément trop soutenu — solicitar là où pedir suffirait.",
          visuels: [
            {
              type: "tableau",
              titre: "La même idée, trois étages",
              colonnes: ["Familier", "Neutre", "Soutenu ou administratif"],
              lignes: [
                ["hacerse con", "comprar", "adquirir"],
                ["pillar", "coger / tomar", "obtener"],
                ["currar", "trabajar", "desempeñar"],
                ["dar el sí", "aceptar", "acceder a"],
                ["echar", "despedir", "cesar"],
                ["pedir", "solicitar", "requerir"],
                ["empezar", "comenzar", "iniciar"],
                ["acabar", "terminar", "concluir"],
                ["decir", "afirmar", "manifestar"],
                ["ver", "observar", "constatar"],
              ],
              note: "Un francophone glisse spontanément vers la colonne de droite : le mot savant lui est familier.",
            },
          ],
        },
        {
          titre: "La nominalisation, marque de l'administratif",
          texte:
            "Le trait le plus reconnaissable de l'espagnol administratif n'est pas le lexique mais la syntaxe : il remplace les verbes par des noms.\n\nAu lieu de « antes de abrir », il écrit con anterioridad a la apertura. Au lieu de « cuando llegue », a su llegada. Au lieu de « si no paga », en caso de impago. Au lieu de « para que lo sepa », a los efectos oportunos.\n\nCe style, appelé lenguaje administrativo, est massivement critiqué en Espagne, où plusieurs campagnes officielles ont tenté de le simplifier. Il reste omniprésent dans les documents publics.\n\nPour un apprenant, deux conseils. Le reconnaître, car il faut lire des formulaires. Et ne pas l'imiter : un courriel professionnel espagnol moderne est bien plus direct qu'on ne l'imagine, et proche du registre courant.\n\nDeux autres marqueurs du soutenu méritent d'être connus. Le futur de subjonctif — si alguien lo supiere — n'existe plus que dans les textes juridiques. Et le pronom cuyo, dont, appartient à l'écrit : à l'oral, on le contourne systématiquement par que su.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même message, deux registres",
              colonnes: [
                {
                  titre: "À un collègue",
                  points: [
                    "Te paso el informe mañana.",
                    "¿Puedes mirarlo antes del viernes?",
                    "Al final no pudimos.",
                  ],
                },
                {
                  titre: "Dans un document officiel",
                  points: [
                    "Se remitirá el informe con fecha de mañana.",
                    "Se ruega su revisión con anterioridad al viernes.",
                    "No fue posible llevarlo a cabo.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le familier, et ses limites",
          texte:
            "Le registre familier espagnol est riche, et fortement régional — c'est ce qui le rend dangereux pour un apprenant.\n\nEn Espagne : tío et tía comme interpellation ; vale pour d'accord ; molar, plaire ; currar, travailler ; flipar, être stupéfait ; pillar, attraper ; guay, chouette ; chungo, louche ou difficile ; pijo, bourgeois.\n\nAu Mexique : güey, l'équivalent de tío ; chido, chouette ; padre comme adjectif — está padre, c'est super ; neta, la vérité ; chamba, le travail.\n\nEn Argentine : che comme interpellation ; laburo, le travail ; quilombo, le bazar ; copado, chouette ; bondi, le bus.\n\nAucun de ces mots ne voyage. Employer molar à Mexico ou chido à Madrid produit le même effet qu'un mot d'argot marseillais à Montréal : on est compris à moitié, et situé immédiatement.\n\nLa règle de prudence est la même que pour les idiomes : comprendre large, produire peu — et ne prendre le registre familier d'une région qu'après y avoir vécu.",
        },
      ],
    },
    cartes: [
      {
        etranger: "La empresa adquirió el edificio.",
        francais: "L'entreprise a acquis l'immeuble.",
        note: "Adquirir est soutenu ; comprar est neutre. Dans une conversation, comprar suffit.",
      },
      {
        etranger: "Se ruega no fumar en la sala.",
        francais: "Il est prié de ne pas fumer dans la salle.",
        note: "Se ruega : la formule impersonnelle des avis publics.",
      },
      {
        etranger: "Solicité una cita por internet.",
        francais: "J'ai demandé un rendez-vous sur internet.",
        note: "Solicitar est administratif ; pedir serait neutre et suffirait souvent.",
      },
      {
        etranger: "Con anterioridad a la reunión, revísalo.",
        francais: "Avant la réunion, relis-le.",
        note: "La nominalisation est la marque de l'administratif espagnol : antes de suffirait.",
      },
      {
        etranger: "El autor cuyo libro leímos vendrá.",
        francais: "L'auteur dont nous avons lu le livre viendra.",
        note: "Cuyo appartient à l'écrit. À l'oral, on le contourne par que su.",
      },
      {
        etranger: "Me hice con dos entradas.",
        francais: "Je me suis procuré deux billets.",
        note: "Hacerse con est familier ; conseguir serait neutre, obtener soutenu.",
      },
      {
        etranger: "Ese plan me mola bastante.",
        francais: "Ce plan me plaît pas mal.",
        note: "Molar est espagnol d'Espagne, et ne voyage pas. Au Mexique, on dirait está chido.",
      },
      {
        etranger: "Manifestó su desacuerdo por escrito.",
        francais: "Il a exprimé son désaccord par écrit.",
        note: "Manifestar est soutenu ; decir serait familier ici, afirmar neutre.",
      },
      {
        etranger: "Cabe recordar que el plazo terminó.",
        francais: "Rappelons que le délai est écoulé.",
        note: "Cabe + infinitif : la tournure impersonnelle du registre soutenu.",
      },
      {
        etranger: "Al final no pudimos llevarlo a cabo.",
        francais: "Finalement, nous n'avons pas pu le mener à bien.",
        note: "Llevar a cabo, mener à bien : neutre, et employable partout.",
      },
    ],
  },

  {
    slug: "es-c1-modismos",
    category: "Vocabulaire",
    title: "Les expressions opaques",
    statement:
      "Estar en las nubes, tomar el pelo, ponerse las pilas. Des tournures dont le sens ne se déduit d'aucun de leurs mots, et qui traversent toute conversation adulte.",
    tip: "Un modisme se retient avec sa situation d'emploi, jamais avec sa traduction : c'est le contexte qui le rappelle, pas le sens des mots.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les modismes espagnols",
      sections: [
        {
          titre: "Ce qui les rend opaques",
          texte:
            "Une expression est idiomatique quand son sens ne se calcule pas à partir de ses mots. Tomar el pelo ne parle pas de cheveux : cela veut dire se moquer de quelqu'un, le faire marcher.\n\nComme en anglais, trois conséquences en découlent.\n\nD'abord, le modisme s'apprend avec sa situation. Ponerse las pilas — littéralement se mettre les piles — se dit à quelqu'un qui doit se secouer et s'y mettre sérieusement. Retenir la traduction ne dit pas quand l'employer.\n\nEnsuite, la forme est fixe. C'est estar en las nubes, jamais « estar en la nube ». C'est meterse en un jardín, pas « en un parque ».\n\nEnfin, chacun porte un registre. Certains passent partout — a fin de cuentas, en resumidas cuentas. D'autres sont familiers et déplacés à l'écrit — estar hasta las narices, costar un riñón.\n\nUne quatrième particularité est propre à l'espagnol : beaucoup de modismes sont régionaux, et la version mexicaine d'une idée n'a rien à voir avec l'argentine.",
          visuels: [
            {
              type: "tableau",
              titre: "Le modisme, sa situation, son registre",
              colonnes: ["Le modisme", "Ce qu'il veut dire", "Quand", "Registre"],
              lignes: [
                ["tomar el pelo", "se moquer, faire marcher", "quelqu'un exagère", "courant"],
                ["estar en las nubes", "être distrait", "on n'écoute pas", "courant"],
                ["ponerse las pilas", "se secouer", "il faut s'y mettre", "familier"],
                ["meter la pata", "faire une gaffe", "après une bourde", "familier"],
                ["dar en el clavo", "taper juste", "on a vu juste", "neutre"],
                ["costar un riñón", "coûter très cher", "un prix", "familier"],
                ["hacerse el sueco", "faire la sourde oreille", "on ignore volontairement", "familier"],
                ["a fin de cuentas", "en fin de compte", "conclusion", "neutre"],
              ],
            },
          ],
        },
        {
          titre: "Les familles d'images",
          texte:
            "Les modismes espagnols se regroupent par domaine d'origine, ce qui aide à les retenir.\n\nLe corps fournit le contingent le plus large : no tener pelos en la lengua, ne pas mâcher ses mots ; costar un ojo de la cara ; echar una mano, donner un coup de main ; estar hasta las narices, en avoir par-dessus la tête ; hablar por los codos, être bavard ; tener la mosca detrás de la oreja, avoir un doute.\n\nLa nourriture vient ensuite : ser pan comido, être du gâteau ; importar un pimiento, s'en moquer ; estar de mala leche, être de mauvaise humeur ; dar calabazas, éconduire quelqu'un.\n\nLa tauromachie a beaucoup donné en Espagne : coger el toro por los cuernos, prendre le taureau par les cornes ; ver los toros desde la barrera, regarder sans s'engager ; a toro pasado, après coup.\n\nEt la religion, en creux : armarse la de Dios es Cristo, un beau désordre ; no saber de la misa la media, n'y rien comprendre.\n\nBeaucoup de ces images ont un équivalent français, mais pas le même animal ni la même partie du corps : c'est précisément ce décalage qui les rend mémorables.",
          visuels: [
            {
              type: "comparaison",
              titre: "La même idée, deux images",
              colonnes: [
                {
                  titre: "L'image espagnole",
                  points: [
                    "Ser pan comido.",
                    "Llueve a cántaros.",
                    "No tener pelos en la lengua.",
                    "Dar calabazas a alguien.",
                  ],
                },
                {
                  titre: "L'image française",
                  points: [
                    "C'est du gâteau.",
                    "Il pleut des cordes.",
                    "Ne pas mâcher ses mots.",
                    "Envoyer promener quelqu'un.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le piège régional",
          texte:
            "L'espagnol est parlé dans vingt et un pays, et les modismes voyagent encore moins bien que le vocabulaire.\n\nPour dire « faire la fête » : irse de juerga en Espagne, irse de parranda en Colombie, irse de farra en Argentine et au Pérou, irse de reventón au Mexique.\n\nPour dire « c'est génial » : ¡qué guay! en Espagne, ¡qué chido! au Mexique, ¡qué bacán! au Chili et au Pérou, ¡qué copado! en Argentine, ¡qué chévere! dans les Caraïbes et en Colombie.\n\nPour dire « travailler dur » : currar en Espagne, chambear au Mexique, laburar en Argentine.\n\nCertains modismes espagnols sont franchement incompréhensibles ailleurs : hacerse el sueco — faire le Suédois, c'est-à-dire l'ignorant — ne se dit pas en Amérique. Et ponerse las pilas, au contraire, est panhispanique.\n\nLa conclusion est la même que pour les régionalismes : il faut comprendre large et produire prudemment. Un modisme employé au bon endroit vaut un an d'apprentissage ; employé au mauvais, il signale seulement qu'on a appris la langue dans un manuel écrit ailleurs.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Me estás tomando el pelo.",
        francais: "Tu te moques de moi.",
        note: "Tomar el pelo, faire marcher quelqu'un. L'image du cheveu n'a aucun rapport.",
      },
      {
        etranger: "Hoy está en las nubes.",
        francais: "Il est dans la lune aujourd'hui.",
        note: "La forme est fixe : las nubes au pluriel, jamais la nube.",
      },
      {
        etranger: "Tienes que ponerte las pilas.",
        francais: "Tu dois te secouer.",
        note: "L'un des rares modismes panhispaniques : il se comprend partout.",
      },
      {
        etranger: "Metí la pata delante de todos.",
        francais: "J'ai fait une gaffe devant tout le monde.",
        note: "Meter la pata, faire une gaffe. Familier, mais très courant.",
      },
      {
        etranger: "Diste en el clavo con esa idea.",
        francais: "Tu as tapé juste avec cette idée.",
        note: "Dar en el clavo, viser juste. Registre neutre, écrit compris.",
      },
      {
        etranger: "El examen fue pan comido.",
        francais: "L'examen était du gâteau.",
        note: "Ser pan comido. L'image change d'aliment d'une langue à l'autre.",
      },
      {
        etranger: "Hay que coger el toro por los cuernos.",
        francais: "Il faut prendre le taureau par les cornes.",
        note: "Image taurine, très espagnole. En Amérique, on dirait agarrar el toro.",
      },
      {
        etranger: "Se hizo el sueco cuando se lo dije.",
        francais: "Il a fait la sourde oreille quand je le lui ai dit.",
        note: "Hacerse el sueco est incompréhensible hors d'Espagne.",
      },
      {
        etranger: "No tiene pelos en la lengua.",
        francais: "Il ne mâche pas ses mots.",
        note: "Le corps fournit le plus gros contingent de modismes espagnols.",
      },
      {
        etranger: "A fin de cuentas, salió bien.",
        francais: "En fin de compte, ça s'est bien passé.",
        note: "A fin de cuentas est neutre et passe à l'écrit, contrairement à la plupart des modismes.",
      },
    ],
  },
];
