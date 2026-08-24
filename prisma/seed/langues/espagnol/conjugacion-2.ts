/**
 * Espagnol — huit chapitres de conjugaison de plus.
 *
 * Le module en comptait six, tous sur les temps. Ces huit-là portent sur la
 * mécanique : les deux verbes « avoir », le gérondif, le participe, les
 * familles d'irréguliers, les pronominaux, les périphrases, l'antériorité et
 * la voix passive. Du socle A1 jusqu'au C1.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_CONJUGACION_2: LotCartes[] = [
  {
    slug: "es-conj-haber-tener",
    category: "Conjugaison",
    title: "Haber et tener : deux verbes pour « avoir »",
    statement:
      "L'espagnol a coupé notre « avoir » en deux : haber pour l'auxiliaire et l'existence, tener pour la possession. Les intervertir est la faute la plus visible d'un francophone.",
    tip: "Hay veut dire « il y a » et ne se met jamais au pluriel : hay un problema, hay dos problemas.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les deux « avoir » de l'espagnol",
      sections: [
        {
          titre: "Le partage des rôles",
          texte:
            "Le français emploie « avoir » pour trois choses : posséder, former les temps composés, et dire l'existence — « il y a ». L'espagnol a réparti ces trois emplois entre deux verbes, et le partage ne souffre aucune exception.\n\nTener dit la possession et l'état : tengo un coche, tengo hambre, tengo veinte años, tengo frío, tengo razón. C'est le seul verbe possible dans ce sens ; « haber un coche » ne veut rien dire.\n\nHaber est l'auxiliaire des temps composés : he comido, había salido, habrá terminado. Il ne se traduit jamais seul et n'a pas de sens propre dans cet emploi.\n\nHaber est aussi le verbe de l'existence, sous la forme impersonnelle hay : hay un problema. C'est là que le francophone hésite le plus, parce que le français dit « il y a » avec avoir lui aussi.\n\nUne quatrième forme complète le tableau : hay que + infinitif, qui exprime l'obligation impersonnelle — hay que salir, il faut sortir. À distinguer de tener que + infinitif, l'obligation personnelle : tengo que salir, je dois sortir.",
          visuels: [
            {
              type: "tableau",
              titre: "Qui fait quoi",
              colonnes: ["Ce qu'on veut dire", "Le verbe", "Exemple"],
              lignes: [
                ["posséder", "tener", "Tengo dos hermanos."],
                ["l'âge, la faim, le froid", "tener", "Tengo veinte años."],
                ["auxiliaire du passé composé", "haber", "He comido ya."],
                ["il y a", "hay (haber impersonnel)", "Hay un problema."],
                ["il fallait", "había que", "Había que esperar."],
                ["je dois", "tener que", "Tengo que salir."],
                ["il faut", "hay que", "Hay que salir."],
              ],
              note: "Hay ne se met jamais au pluriel : hay dos problemas, jamais « hayn ».",
            },
          ],
        },
        {
          titre: "Hay, l'invariable",
          texte:
            "La forme hay est un fossile : c'est l'ancien ha suivi du pronom adverbial y, comme dans le français « il y a ». Elle a fusionné et ne se conjugue plus qu'à la troisième personne du singulier.\n\nD'où la règle la plus utile : hay ne s'accorde jamais. Hay un coche, hay tres coches, hay mucha gente. Le pluriel « hayn » n'existe pas, et l'erreur s'entend immédiatement.\n\nAux autres temps, le verbe redevient régulier mais reste au singulier : había un problema, había dos problemas ; hubo un accidente, hubo tres accidentes ; habrá tiempo. La faute la plus répandue, y compris chez des hispanophones, est habían dos problemas — corrigée dans tout usage soigné.\n\nHay s'emploie avec un nom indéterminé : hay un libro, hay libros, hay algunos libros. Quand le nom est déterminé, l'espagnol passe à estar : el libro está en la mesa, jamais « hay el libro ».\n\nCette distinction — hay pour l'indéterminé, estar pour le déterminé — n'a pas d'équivalent français, et c'est celle qu'il faut installer en premier.",
          visuels: [
            {
              type: "comparaison",
              titre: "Hay ou estar",
              colonnes: [
                {
                  titre: "HAY — indéterminé",
                  points: [
                    "Hay un libro en la mesa.",
                    "Hay dos farmacias aquí.",
                    "¿Hay alguien?",
                  ],
                },
                {
                  titre: "ESTAR — déterminé",
                  points: [
                    "El libro está en la mesa.",
                    "Las farmacias están cerradas.",
                    "¿Está Marta?",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les expressions avec tener",
          texte:
            "Tener porte une longue série d'expressions où le français emploie « être », et elles s'apprennent d'un bloc.\n\nLes sensations : tener hambre, sed, frío, calor, sueño, miedo, prisa, cuidado. Toutes se construisent sans article : tengo hambre, jamais « tengo un hambre ».\n\nL'âge : tener veinte años, avec años obligatoire — contrairement au français qui peut dire « il a vingt ans » mais aussi « il est âgé de vingt ans ».\n\nLe jugement : tener razón, avoir raison ; no tener razón, avoir tort ; tener suerte, avoir de la chance ; tener ganas de, avoir envie de.\n\nDeux constructions méritent une mention. Tener que + infinitif dit l'obligation personnelle : tengo que estudiar. Et tener + participe passé accordé dit le résultat accumulé : tengo escritas tres cartas, j'ai trois lettres d'écrites — le participe s'accorde ici, contrairement à haber escrito.\n\nEnfin, la modulation par le degré : tengo mucha hambre, avec mucho accordé — mucha, parce que hambre est féminin malgré son article el.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Hay dos problemas con esto.",
        francais: "Il y a deux problèmes avec ça.",
        note: "Hay ne s'accorde jamais. « Hayn » n'existe pas, et « habían dos » est fautif au passé.",
      },
      {
        etranger: "Tengo dos hermanos mayores.",
        francais: "J'ai deux frères aînés.",
        note: "Tener pour la possession. Haber ne s'emploie jamais dans ce sens.",
      },
      {
        etranger: "He comido demasiado hoy.",
        francais: "J'ai trop mangé aujourd'hui.",
        note: "Haber comme auxiliaire des temps composés : il n'a pas de sens propre ici.",
      },
      {
        etranger: "El libro está en la mesa.",
        francais: "Le livre est sur la table.",
        note: "Estar pour un nom déterminé ; hay pour un nom indéterminé.",
      },
      {
        etranger: "Tenemos mucha prisa ahora.",
        francais: "Nous sommes très pressés maintenant.",
        note: "Tener prisa, être pressé. Sans article, comme tener hambre et tener frío.",
      },
      {
        etranger: "Hay que salir antes de las ocho.",
        francais: "Il faut partir avant huit heures.",
        note: "Hay que dit l'obligation impersonnelle ; tener que, l'obligation personnelle.",
      },
      {
        etranger: "Tengo que estudiar esta noche.",
        francais: "Je dois travailler ce soir.",
        note: "Tener que + infinitif : l'obligation qui pèse sur quelqu'un de précis.",
      },
      {
        etranger: "Había mucha gente en la plaza.",
        francais: "Il y avait beaucoup de monde sur la place.",
        note: "Había reste au singulier, même devant un pluriel. La faute est fréquente.",
      },
      {
        etranger: "No tienes razón en esto.",
        francais: "Tu as tort là-dessus.",
        note: "Tener razón, avoir raison ; no tener razón, avoir tort. Sans article.",
      },
      {
        etranger: "Tengo ganas de verte.",
        francais: "J'ai envie de te voir.",
        note: "Tener ganas DE, toujours avec la préposition.",
      },
    ],
  },

  {
    slug: "es-conj-gerundio",
    category: "Conjugaison",
    title: "Le gérondif et les temps progressifs",
    statement:
      "Estar comiendo, ir mejorando, seguir hablando. Le gérondif espagnol se combine à cinq verbes et change de sens à chaque fois — et il ne remplace jamais un infinitif.",
    tip: "Le gérondif ne peut pas être sujet ni complément de nom. « Fumar es malo », jamais « fumando es malo ».",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Le gérondif espagnol",
      sections: [
        {
          titre: "La forme, et ses irrégularités",
          texte:
            "Le gérondif se forme en remplaçant la terminaison de l'infinitif : -ar donne -ando, -er et -ir donnent -iendo. Hablar donne hablando, comer comiendo, vivir viviendo.\n\nTrois séries d'irrégularités méritent d'être connues.\n\nLes verbes en -ir à changement vocalique : le e devient i, le o devient u. Pedir donne pidiendo, sentir sintiendo, dormir durmiendo, morir muriendo, poder pudiendo. Cette liste recoupe exactement celle du passé simple irrégulier, ce qui permet de l'apprendre une seule fois.\n\nLes verbes dont le radical finit par une voyelle : le i de -iendo devient y. Leer donne leyendo, oír oyendo, caer cayendo, construir construyendo, ir yendo.\n\nEnfin, les pronoms se collent au gérondif : estoy leyéndolo, se está duchando ou está duchándose — les deux places sont correctes avec un auxiliaire. Et l'accent écrit apparaît dès qu'on ajoute un pronom : leyendo devient leyéndolo.",
          visuels: [
            {
              type: "tableau",
              titre: "Les gérondifs irréguliers",
              colonnes: ["L'infinitif", "Le gérondif", "La raison"],
              lignes: [
                ["pedir", "pidiendo", "e → i"],
                ["sentir", "sintiendo", "e → i"],
                ["dormir", "durmiendo", "o → u"],
                ["morir", "muriendo", "o → u"],
                ["poder", "pudiendo", "o → u"],
                ["leer", "leyendo", "i → y après voyelle"],
                ["oír", "oyendo", "i → y après voyelle"],
                ["construir", "construyendo", "i → y après voyelle"],
                ["ir", "yendo", "irrégulier"],
              ],
            },
          ],
        },
        {
          titre: "Les cinq périphrases",
          texte:
            "Le gérondif seul est rare : il vit surtout associé à un verbe, et chaque combinaison a son sens propre.\n\nEstar + gérondif : l'action en cours. Estoy comiendo, je suis en train de manger. C'est la plus fréquente, et la seule que le français rende par une périphrase équivalente.\n\nIr + gérondif : la progression graduelle. Va mejorando, cela s'améliore peu à peu. Le français ajoute un adverbe ; l'espagnol le met dans le verbe.\n\nSeguir ou continuar + gérondif : la continuation. Sigue lloviendo, il pleut toujours. Attention : le français dit « continuer à faire », avec un infinitif ; l'espagnol impose le gérondif. « Seguir a hablar » est une faute.\n\nLlevar + durée + gérondif : la durée écoulée. Llevo dos horas esperando, j'attends depuis deux heures. La construction n'a pas d'équivalent français direct et rend inutile le « depuis ».\n\nAndar + gérondif : l'activité dispersée, souvent avec un reproche. Anda buscando piso, il cherche un appartement — sans grande méthode.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le français infinitif, l'espagnol gérondif",
              colonnes: [
                {
                  titre: "En français : infinitif",
                  points: [
                    "Il continue à parler.",
                    "J'attends depuis deux heures.",
                    "Il passe son temps à se plaindre.",
                  ],
                },
                {
                  titre: "En espagnol : gérondif",
                  points: [
                    "Sigue hablando.",
                    "Llevo dos horas esperando.",
                    "Se pasa el tiempo quejándose.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Ce que le gérondif ne peut pas faire",
          texte:
            "C'est ici que le francophone se trompe le plus, parce que le français emploie son participe présent bien plus largement.\n\nLe gérondif espagnol ne peut pas être sujet. On dit fumar es malo para la salud, avec l'infinitif — jamais « fumando es malo ». La règle vaut pour tout emploi nominal : ver es creer, leer cansa.\n\nIl ne peut pas être complément de nom. Le français dit « une boîte contenant des outils » ; l'espagnol dit una caja que contiene herramientas, avec une relative. La seule exception admise est agua hirviendo, eau bouillante, figée par l'usage.\n\nIl ne peut pas exprimer une action postérieure. « Il est sorti, prenant un taxi » se dit salió y tomó un taxi, ou salió para tomar un taxi. Le gérondif espagnol dit la simultanéité ou l'antériorité immédiate, jamais la suite.\n\nEn revanche, il exprime très bien la manière — llegó corriendo, il est arrivé en courant — et la cause : estando enfermo, no salió, étant malade, il n'est pas sorti.\n\nEn cas de doute, le réflexe le plus sûr : remplacer par une relative ou par un infinitif.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Estoy leyendo un libro muy bueno.",
        francais: "Je suis en train de lire un très bon livre.",
        note: "Leer donne leyendo : le i devient y après voyelle.",
      },
      {
        etranger: "Sigue lloviendo desde ayer.",
        francais: "Il continue de pleuvoir depuis hier.",
        note: "Seguir + gérondif, jamais + infinitif. « Seguir a llover » est une faute.",
      },
      {
        etranger: "Llevo dos horas esperando aquí.",
        francais: "J'attends ici depuis deux heures.",
        note: "Llevar + durée + gérondif : la construction rend inutile le « depuis ».",
      },
      {
        etranger: "Los niños están durmiendo ya.",
        francais: "Les enfants dorment déjà.",
        note: "Dormir donne durmiendo : le o devient u, comme au passé simple.",
      },
      {
        etranger: "Madrugar cuesta mucho en invierno.",
        francais: "Se lever tôt coûte beaucoup en hiver.",
        note: "Le gérondif ne peut pas être sujet : c'est l'infinitif qui l'est. Madrugar, se lever tôt.",
      },
      {
        etranger: "Llegó corriendo a la estación.",
        francais: "Il est arrivé en courant à la gare.",
        note: "Le gérondif exprime très bien la manière et la simultanéité.",
      },
      {
        etranger: "El paciente va recuperándose.",
        francais: "Le patient se rétablit peu à peu.",
        note: "Ir + gérondif marque la progression graduelle.",
      },
      {
        etranger: "Está pidiendo la cuenta.",
        francais: "Il est en train de demander l'addition.",
        note: "Pedir donne pidiendo : le e devient i.",
      },
      {
        etranger: "Anda buscando piso desde marzo.",
        francais: "Il cherche un appartement depuis mars.",
        note: "Andar + gérondif : activité dispersée, souvent avec un soupçon de reproche.",
      },
      {
        etranger: "Se está duchando ahora mismo.",
        francais: "Il est sous la douche en ce moment.",
        note: "Avec un auxiliaire, le pronom peut se placer avant ou après : está duchándose.",
      },
    ],
  },

  {
    slug: "es-conj-participio",
    category: "Conjugaison",
    title: "Le participe et les temps composés",
    statement:
      "Escrito, dicho, hecho, puesto. Une douzaine de participes irréguliers, et une règle d'accord qui dépend entièrement de l'auxiliaire employé.",
    tip: "Après haber, le participe ne s'accorde jamais : hemos escrito las cartas. Après ser, estar ou tener, il s'accorde toujours.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Le participe passé espagnol",
      sections: [
        {
          titre: "La forme, et les douze irréguliers",
          texte:
            "Le participe se forme en -ado pour les verbes en -ar et en -ido pour ceux en -er et -ir. Hablado, comido, vivido. La régularité est presque totale.\n\nDouze verbes courants font exception, et ils s'apprennent d'un bloc parce qu'ils reviennent sans cesse : abrir donne abierto, cubrir cubierto, decir dicho, escribir escrito, freír frito, hacer hecho, morir muerto, poner puesto, resolver resuelto, romper roto, ver visto, volver vuelto.\n\nLeurs composés suivent : descubrir donne descubierto, componer compuesto, devolver devuelto, describir descrito, deshacer deshecho.\n\nQuelques verbes ont deux participes, un régulier pour les temps composés et un irrégulier employé comme adjectif : freír donne freído et frito — he freído los huevos, mais huevos fritos ; imprimir donne imprimido et impreso ; soltar donne soltado et suelto ; despertar donne despertado et despierto.\n\nEnfin, un accent écrit apparaît quand le radical finit par une voyelle forte : leer donne leído, oír oído, caer caído, traer traído.",
          visuels: [
            {
              type: "tableau",
              titre: "Les douze participes irréguliers",
              colonnes: ["L'infinitif", "Le participe", "Composés courants"],
              lignes: [
                ["abrir", "abierto", "cubrir → cubierto"],
                ["decir", "dicho", "predecir → predicho"],
                ["escribir", "escrito", "describir → descrito"],
                ["hacer", "hecho", "deshacer → deshecho"],
                ["morir", "muerto", "—"],
                ["poner", "puesto", "componer → compuesto"],
                ["resolver", "resuelto", "disolver → disuelto"],
                ["romper", "roto", "—"],
                ["ver", "visto", "prever → previsto"],
                ["volver", "vuelto", "devolver → devuelto"],
              ],
            },
          ],
        },
        {
          titre: "L'accord, réglé par l'auxiliaire",
          texte:
            "C'est le point où le français, avec ses règles d'accord complexes, induit en erreur : l'espagnol est bien plus simple, à condition de regarder l'auxiliaire.\n\nAprès haber, le participe est invariable, sans aucune exception. Hemos escrito las cartas, jamais « escritas ». Le complément d'objet placé avant n'y change rien : las cartas que hemos escrito. Un francophone qui applique la règle du COD antéposé se trompe systématiquement.\n\nAprès ser, dans le passif, le participe s'accorde avec le sujet : la carta fue escrita, las cartas fueron escritas.\n\nAprès estar, il s'accorde de même, et décrit un état résultant : la puerta está cerrada, las puertas están cerradas.\n\nAprès tener, il s'accorde avec le complément et décrit un résultat accumulé : tengo escritas tres cartas, j'ai trois lettres d'écrites. Cette construction insiste sur le nombre obtenu, là où he escrito tres cartas insiste sur l'action.\n\nEt comme adjectif ordinaire, il s'accorde évidemment : una ventana rota, unos platos sucios.",
          visuels: [
            {
              type: "comparaison",
              titre: "Invariable ou accordé",
              colonnes: [
                {
                  titre: "HABER — jamais d'accord",
                  points: [
                    "Hemos escrito las cartas.",
                    "Las cartas que he escrito.",
                    "Han abierto las ventanas.",
                  ],
                },
                {
                  titre: "SER, ESTAR, TENER — accord",
                  points: [
                    "Las cartas fueron escritas.",
                    "Las ventanas están abiertas.",
                    "Tengo escritas tres cartas.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les temps composés, et leur emploi",
          texte:
            "Haber + participe forme cinq temps, et le partage entre eux diffère nettement du français.\n\nLe pretérito perfecto — he comido — correspond à notre passé composé, mais son emploi est plus restreint : il ne s'utilise que pour une période qui n'est pas close. Hoy he comido, esta semana he trabajado mucho, este año hemos viajado. Dès que la période est close — ayer, la semana pasada, en 2019 — l'espagnol d'Espagne passe au passé simple : ayer comí.\n\nEn Amérique latine, le passé simple a presque entièrement mangé le passé composé : on y dit hoy comí sans que cela choque.\n\nLe pluscuamperfecto — había comido — dit l'antériorité dans le passé, exactement comme notre plus-que-parfait.\n\nLe futuro perfecto — habré comido — dit l'action achevée avant un point futur, et sert aussi à supposer sur le passé : habrá salido ya, il doit être déjà sorti.\n\nLe condicional compuesto — habría comido — dit l'hypothèse non réalisée.\n\nEt le subjonctif composé — haya comido, hubiera comido — suit la concordance des temps.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Hemos escrito las cartas ya.",
        francais: "Nous avons déjà écrit les lettres.",
        note: "Après haber, le participe ne s'accorde jamais, même avec le complément avant.",
      },
      {
        etranger: "Las ventanas están abiertas.",
        francais: "Les fenêtres sont ouvertes.",
        note: "Après estar, accord obligatoire. Abrir donne abierto.",
      },
      {
        etranger: "Tengo escritas tres páginas.",
        francais: "J'ai trois pages d'écrites.",
        note: "Tener + participe accordé : la construction insiste sur le résultat accumulé.",
      },
      {
        etranger: "Ha dicho que vendría mañana.",
        francais: "Il a dit qu'il viendrait demain.",
        note: "Decir donne dicho, l'un des douze participes irréguliers.",
      },
      {
        etranger: "El plato está roto.",
        francais: "L'assiette est cassée.",
        note: "Romper donne roto. Et estar décrit ici l'état résultant.",
      },
      {
        etranger: "Esta semana hemos avanzado bastante.",
        francais: "Cette semaine, nous avons pas mal avancé.",
        note: "Le passé composé espagnol suppose une période non close : hoy, esta semana, este año.",
      },
      {
        etranger: "Ya había salido cuando llamaste.",
        francais: "Il était déjà sorti quand tu as appelé.",
        note: "El pluscuamperfecto dit l'antériorité dans le passé, comme notre plus-que-parfait.",
      },
      {
        etranger: "Habrá salido ya, supongo.",
        francais: "Il doit être déjà sorti, je suppose.",
        note: "Le futur composé sert aussi à supposer sur un passé proche.",
      },
      {
        etranger: "Comimos huevos fritos anoche.",
        francais: "Nous avons mangé des œufs au plat hier soir.",
        note: "Freír a deux participes : freído pour le temps composé, frito comme adjectif.",
      },
      {
        etranger: "No he leído ese informe todavía.",
        francais: "Je n'ai pas encore lu ce rapport.",
        note: "Leído prend un accent écrit : le radical finit par une voyelle forte.",
      },
    ],
  },

  {
    slug: "es-conj-irregulares-familias",
    category: "Conjugaison",
    title: "Les irréguliers par familles",
    statement:
      "Les verbes irréguliers espagnols ne sont pas irréguliers au hasard : ils se rangent en cinq familles, et connaître la famille donne toutes les formes du verbe.",
    tip: "La diphtongue e → ie et o → ue ne touche que les syllabes accentuées. D'où le fameux « botte » : les quatre formes du singulier plus la troisième du pluriel.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Ranger les verbes irréguliers espagnols",
      sections: [
        {
          titre: "La botte, et pourquoi elle a cette forme",
          texte:
            "Le premier groupe d'irrégularités espagnoles n'en est pas vraiment une : c'est une règle phonétique parfaitement régulière, qui frappe seulement les syllabes portant l'accent tonique.\n\nLe e du radical devient ie quand il est accentué : pensar donne pienso, piensas, piensa, pensamos, pensáis, piensan. Le o devient ue : poder donne puedo, puedes, puede, podemos, podéis, pueden.\n\nOr, au présent, l'accent tombe sur le radical à toutes les personnes sauf nosotros et vosotros — là, il tombe sur la terminaison. D'où ce dessin en forme de botte quand on écrit le tableau : les quatre formes du haut et celle du bas changent, les deux du milieu non.\n\nCette même diphtongaison se retrouve au subjonctif présent et à l'impératif, aux mêmes personnes.\n\nUn troisième schéma complète la série pour les verbes en -ir : le e devient i sans diphtonguer. Pedir donne pido, pides, pide, pedimos, pedís, piden. Et celui-là s'étend au gérondif — pidiendo — et au passé simple, ce que la diphtongaison ne fait pas.",
          visuels: [
            {
              type: "tableau",
              titre: "Les cinq familles",
              colonnes: ["Le schéma", "Exemple", "Autres membres"],
              lignes: [
                ["e → ie", "pensar → pienso", "querer, empezar, cerrar, sentir, entender"],
                ["o → ue", "poder → puedo", "dormir, volver, contar, encontrar, morir"],
                ["e → i (verbes en -ir)", "pedir → pido", "servir, repetir, seguir, vestir, reír"],
                ["1re pers. en -go", "tener → tengo", "poner, salir, venir, hacer, decir, traer"],
                ["u → ue (un seul verbe)", "jugar → juego", "—"],
              ],
              note: "Les verbes en -go ont presque tous un subjonctif régulier bâti sur cette forme : tenga, ponga, salga.",
            },
          ],
        },
        {
          titre: "Les verbes en -go, et leur descendance",
          texte:
            "Une deuxième famille rassemble les verbes dont la première personne du singulier du présent finit par -go, sans que les autres personnes changent : tengo, pongo, salgo, vengo, hago, digo, traigo, caigo, oigo, valgo.\n\nCette forme n'est pas un caprice isolé : elle commande tout le subjonctif présent, qui se construit dessus. Tengo donne tenga, tengas, tenga… ; hago donne haga ; digo donne diga ; salgo donne salga.\n\nEt le subjonctif présent commande à son tour l'impératif négatif et les formes de politesse : no tengas, tenga usted.\n\nApprendre la première personne d'un de ces verbes revient donc à apprendre six formes du subjonctif, plus l'impératif. Le rendement est considérable.\n\nLa même logique vaut pour les verbes en -zco — conocer donne conozco, conduzco, traduzco, produzco — dont le subjonctif suit : conozca, conduzca.\n\nSeuls cinq verbes échappent à cette régularité au subjonctif : ser donne sea, ir donne vaya, haber donne haya, saber donne sepa, dar donne dé. Ceux-là s'apprennent par cœur, et il n'y en a que cinq.",
          visuels: [
            {
              type: "etapes",
              titre: "De la première personne au subjonctif",
              etapes: [
                { titre: "Prendre le yo du présent", texte: "tener → tengo · hacer → hago · conocer → conozco" },
                { titre: "Retirer le -o", texte: "teng- · hag- · conozc-" },
                { titre: "Ajouter les terminaisons du subjonctif", texte: "tenga, tengas, tenga, tengamos, tengáis, tengan" },
                { titre: "L'impératif suit", texte: "no tengas, tenga usted, tengamos" },
              ],
            },
          ],
        },
        {
          titre: "Les passés simples forts",
          texte:
            "La dernière famille est celle des pretéritos fuertes — les passés simples forts —, ainsi nommés parce que l'accent y tombe sur le radical au lieu de la terminaison.\n\nIls changent de radical et prennent des terminaisons propres, sans accent écrit : -e, -iste, -o, -imos, -isteis, -ieron. Tener donne tuve, tuviste, tuvo. Estar donne estuve. Poder donne pude. Poner donne puse. Saber donne supe. Querer donne quise. Venir donne vine. Hacer donne hice — avec un c qui devient z à la troisième personne : hizo. Decir donne dije, et la troisième du pluriel perd son i : dijeron, comme traer donne trajeron.\n\nCes radicaux servent à autre chose, et c'est ce qui rend leur apprentissage rentable : ils commandent tout le subjonctif imparfait. Tuvieron donne tuviera ; dijeron donne dijera ; pudieron donne pudiera.\n\nEnfin, deux verbes partagent le même passé simple, ce qui surprend toujours : ser et ir font tous deux fui, fuiste, fue. Seul le contexte les distingue — fui médico, j'étais médecin ; fui a Madrid, je suis allé à Madrid.",
        },
      ],
    },
    cartes: [
      {
        etranger: "No puedo ir esta tarde.",
        francais: "Je ne peux pas y aller cet après-midi.",
        note: "Poder diphtongue o → ue quand l'accent tombe sur le radical : puedo, podemos.",
      },
      {
        etranger: "Pienso que tienes razón.",
        francais: "Je pense que tu as raison.",
        note: "Pensar diphtongue e → ie. Et tener est un verbe en -go : tengo, tienes.",
      },
      {
        etranger: "Siempre pido lo mismo.",
        francais: "Je commande toujours la même chose.",
        note: "Pedir change e → i sans diphtonguer, et le changement gagne le gérondif : pidiendo.",
      },
      {
        etranger: "Salgo del trabajo a las seis.",
        francais: "Je sors du travail à dix-huit heures.",
        note: "Salir est un verbe en -go, et son subjonctif suit : salga.",
      },
      {
        etranger: "Conozco bien esta ciudad.",
        francais: "Je connais bien cette ville.",
        note: "Conocer donne conozco, et le subjonctif conozca. Même schéma que conducir.",
      },
      {
        etranger: "Ayer tuve mucho trabajo.",
        francais: "Hier, j'ai eu beaucoup de travail.",
        note: "Passé simple fort : tuve, sans accent écrit, et l'accent tombe sur le radical.",
      },
      {
        etranger: "Ellos dijeron que no vendrían.",
        francais: "Ils ont dit qu'ils ne viendraient pas.",
        note: "Decir donne dije, et la troisième du pluriel perd son i : dijeron.",
      },
      {
        etranger: "Fui médico durante veinte años.",
        francais: "J'ai été médecin pendant vingt ans.",
        note: "Ser et ir partagent le même passé simple : fui. Seul le contexte les distingue.",
      },
      {
        etranger: "Espero que tengas suerte.",
        francais: "J'espère que tu auras de la chance.",
        note: "Le subjonctif se bâtit sur le yo du présent : tengo donne tenga.",
      },
      {
        etranger: "Juego al ajedrez los martes.",
        francais: "Je joue aux échecs le mardi.",
        note: "Jugar est le seul verbe à diphtonguer u → ue.",
      },
    ],
  },

  {
    slug: "es-conj-reflexivos",
    category: "Conjugaison",
    title: "Les verbes pronominaux",
    statement:
      "Ir ou irse, dormir ou dormirse, quedar ou quedarse. Le pronom ne rend pas le verbe réfléchi : il en change le sens, et souvent complètement.",
    tip: "Beaucoup de pronominaux espagnols marquent le passage à un état : dormir, c'est dormir ; dormirse, c'est s'endormir.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Le pronom qui change le verbe",
      sections: [
        {
          titre: "Cinq valeurs du pronom",
          texte:
            "Le pronom réfléchi espagnol ne dit pas toujours que l'action retombe sur le sujet. Il a cinq emplois, et confondre le premier avec les autres est la source de la plupart des erreurs.\n\nRéfléchi véritable : l'action porte sur soi. Me lavo, me visto, se peina. Le français fait pareil.\n\nRéciproque : l'action est mutuelle. Se escriben, ils s'écrivent ; nos vemos mañana. Là encore, le français suit.\n\nChangement d'état : le pronom marque le passage d'un état à un autre. Dormir, c'est être en train de dormir ; dormirse, c'est s'endormir. Ir, c'est aller ; irse, c'est partir. C'est la valeur la plus fréquente, et le français ne la marque pas toujours.\n\nIntensif ou aspectuel : le pronom ajoute de la complétude, sans changer le sens de base. Comer, manger ; comerse un pastel, manger un gâteau tout entier. Beber, boire ; beberse la botella. Saber, savoir ; saberse la lección, la savoir par cœur.\n\nImpersonnel ou passif : se habla español, se venden pisos. Le pronom n'a alors plus rien de réfléchi.",
          visuels: [
            {
              type: "tableau",
              titre: "Le même verbe, avec et sans pronom",
              colonnes: ["Sans pronom", "Avec pronom", "L'écart"],
              lignes: [
                ["dormir — dormir", "dormirse — s'endormir", "passage à l'état"],
                ["ir — aller", "irse — partir", "l'éloignement"],
                ["quedar — rester (convenir)", "quedarse — rester (demeurer)", "sens différent"],
                ["llevar — porter", "llevarse — emporter", "l'éloignement"],
                ["poner — poser", "ponerse — se mettre, devenir", "changement d'état"],
                ["acordar — décider", "acordarse de — se souvenir", "sens différent"],
                ["parecer — sembler", "parecerse a — ressembler à", "sens différent"],
                ["comer — manger", "comerse — manger entièrement", "intensif"],
              ],
              note: "Quedar veut dire donner rendez-vous ; quedarse, rester quelque part. La confusion est fréquente.",
            },
          ],
        },
        {
          titre: "Où se place le pronom",
          texte:
            "La position du pronom obéit à trois règles fixes, et il n'y a pas d'exception.\n\nDevant un verbe conjugué : me levanto, se fue, nos vimos. La négation passe encore devant : no me levanto.\n\nCollé à un infinitif, à un gérondif ou à un impératif affirmatif : levantarse, levantándose, levántate. Le pronom fait alors corps avec le verbe, et un accent écrit apparaît souvent pour préserver l'accentuation.\n\nAvec une périphrase — auxiliaire plus infinitif ou gérondif — les deux positions sont admises et strictement équivalentes : me voy a levantar ou voy a levantarme ; se está duchando ou está duchándose.\n\nÀ l'impératif négatif, le pronom repasse devant : no te levantes, jamais « no levántate ».\n\nDeux détails d'orthographe. À la première personne du pluriel de l'impératif, le s tombe devant nos : levantémonos, jamais « levantémosnos ». Et à la deuxième du pluriel, le d tombe devant os : levantaos, jamais « levantados » — sauf pour irse, qui garde son d : idos.",
          visuels: [
            {
              type: "comparaison",
              titre: "Devant ou collé",
              colonnes: [
                {
                  titre: "Devant — verbe conjugué",
                  points: [
                    "Me levanto a las siete.",
                    "No te preocupes.",
                    "Se fueron temprano.",
                  ],
                },
                {
                  titre: "Collé — infinitif, gérondif, impératif",
                  points: [
                    "Voy a levantarme.",
                    "Está duchándose.",
                    "¡Levántate!",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le se de l'accident, et le datif éthique",
          texte:
            "Deux constructions pronominales n'ont pas d'équivalent français, et elles sont partout dans la langue parlée.\n\nLa première est le se involontaire, qui déplace la responsabilité d'un accident. Au lieu de dire « j'ai cassé le verre », l'espagnol dit se me rompió el vaso — littéralement « le verre s'est cassé sur moi ». Le locuteur n'est plus l'auteur mais la victime.\n\nLa structure est fixe : se + pronom indirect + verbe accordé avec la chose. Se me olvidó la llave, j'ai oublié la clé. Se nos acabó el pan, nous n'avons plus de pain. Se le cayó el móvil, il a fait tomber son téléphone.\n\nCette tournure n'est pas une échappatoire : c'est la manière normale de rapporter un accident, et l'employer rend un espagnol beaucoup plus naturel.\n\nLa seconde est le datif éthique, qui ajoute un pronom sans nécessité grammaticale, pour marquer l'implication affective. No me llores, ne me pleure pas ; se me ha hecho mayor, il a grandi — sous mes yeux, et cela me touche. Le français connaît la même chose : « il m'a mangé toute la tarte ».",
        },
      ],
    },
    cartes: [
      {
        etranger: "Me dormí en el sofá.",
        francais: "Je me suis endormi sur le canapé.",
        note: "Dormir, c'est dormir ; dormirse, c'est s'endormir. Le pronom marque le passage à l'état.",
      },
      {
        etranger: "Se fueron sin decir nada.",
        francais: "Ils sont partis sans rien dire.",
        note: "Ir, c'est aller ; irse, c'est partir. Le pronom ajoute l'éloignement.",
      },
      {
        etranger: "Quedamos a las siete en la plaza.",
        francais: "On se donne rendez-vous à sept heures sur la place.",
        note: "Quedar, se donner rendez-vous ; quedarse, rester quelque part.",
      },
      {
        etranger: "Se me rompió el vaso.",
        francais: "J'ai cassé le verre.",
        note: "Le se involontaire : le locuteur devient victime. C'est la façon normale de rapporter un accident.",
      },
      {
        etranger: "Se nos acabó el pan.",
        francais: "Nous n'avons plus de pain.",
        note: "Même structure : se + pronom indirect + verbe accordé avec la chose.",
      },
      {
        etranger: "No te preocupes por eso.",
        francais: "Ne t'en fais pas pour ça.",
        note: "À l'impératif négatif, le pronom repasse devant le verbe.",
      },
      {
        etranger: "Voy a levantarme temprano.",
        francais: "Je vais me lever tôt.",
        note: "Avec une périphrase, les deux places sont admises : me voy a levantar aussi.",
      },
      {
        etranger: "Se parece mucho a su padre.",
        francais: "Il ressemble beaucoup à son père.",
        note: "Parecer, sembler ; parecerse A, ressembler à. La préposition est obligatoire.",
      },
      {
        etranger: "Se comió toda la tarta.",
        francais: "Il a mangé toute la tarte.",
        note: "Le pronom intensif marque que l'action a été menée jusqu'au bout.",
      },
      {
        etranger: "Acuérdate de llamarla.",
        francais: "Pense à l'appeler.",
        note: "Acordarse DE, se souvenir ; acordar sans pronom veut dire décider.",
      },
    ],
  },

  {
    slug: "es-conj-perifrasis",
    category: "Conjugaison",
    title: "Les périphrases : ir a, volver a, dejar de",
    statement:
      "L'espagnol dit avec deux verbes ce que le français dit avec un préfixe ou un adverbe. Volver a leer, c'est relire ; acabar de llegar, c'est venir d'arriver.",
    tip: "Ir a + infinitif est le futur de la langue parlée : il est bien plus employé que le futur simple, en Espagne comme en Amérique.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les périphrases verbales",
      sections: [
        {
          titre: "Ce qu'une périphrase remplace",
          texte:
            "Une périphrase verbale associe un verbe conjugué, souvent une préposition, et un infinitif ou un gérondif. L'ensemble prend un sens que le verbe seul n'a pas.\n\nL'intérêt pour un francophone est direct : là où le français dispose de préfixes — relire, revenir — ou d'adverbes — venir de, être sur le point de —, l'espagnol emploie une périphrase, et il faut la connaître pour ne pas calquer.\n\nVolver a + infinitif dit la répétition : vuelvo a leerlo, je le relis. Le français ajoute re- ; l'espagnol n'a pas ce préfixe productif.\n\nAcabar de + infinitif dit le passé très proche : acabo de llegar, je viens d'arriver. Noter que le français emploie « venir de » et l'espagnol « finir de » : les deux images sont inverses.\n\nEstar a punto de + infinitif dit l'imminence : está a punto de salir.\n\nPonerse a + infinitif dit le début brusque : se puso a llover. Empezar a est plus neutre.\n\nDejar de + infinitif dit l'arrêt : dejé de fumar. Et no dejar de dit l'insistance : no dejes de llamarme.",
          visuels: [
            {
              type: "tableau",
              titre: "La périphrase, et ce qu'elle rend",
              colonnes: ["La périphrase", "Ce qu'elle dit", "En français"],
              lignes: [
                ["ir a + inf.", "futur proche", "je vais faire"],
                ["acabar de + inf.", "passé très proche", "je viens de faire"],
                ["volver a + inf.", "répétition", "re- (relire, refaire)"],
                ["ponerse a + inf.", "début brusque", "se mettre à"],
                ["empezar a + inf.", "début neutre", "commencer à"],
                ["dejar de + inf.", "arrêt", "arrêter de"],
                ["estar a punto de + inf.", "imminence", "être sur le point de"],
                ["llegar a + inf.", "aller jusqu'à", "en arriver à"],
                ["tener que + inf.", "obligation personnelle", "devoir"],
                ["deber de + inf.", "probabilité", "devoir (supposition)"],
              ],
              note: "Deber + infinitif dit l'obligation ; deber DE + infinitif dit la probabilité. Le de fait tout.",
            },
          ],
        },
        {
          titre: "Deber ou deber de, et autres paires",
          texte:
            "Trois paires de périphrases se distinguent par une seule préposition, et la nuance est réelle.\n\nDeber + infinitif exprime l'obligation morale : debes estudiar más, tu dois travailler davantage. Deber de + infinitif exprime la supposition : debe de estar en casa, il doit être chez lui. Beaucoup d'hispanophones les confondent, mais l'usage soigné les tient distincts.\n\nHaber de + infinitif est une obligation d'un registre soutenu ou régional — he de reconocer que, je dois reconnaître que. Et hay que + infinitif est l'obligation impersonnelle.\n\nAcabar de a deux sens selon le temps. Au présent et au passé composé, il dit le passé proche : acabo de llegar. Aux autres temps, il retrouve son sens propre — finir de : acabé de leerlo ayer, j'ai fini de le lire hier. C'est un piège classique.\n\nEnfin, llegar a + infinitif dit qu'on est allé jusqu'à un point extrême : llegó a insultarme, il est allé jusqu'à m'insulter. Et no llegar a dit qu'on n'y est pas parvenu : no llegué a verlo, je n'ai pas réussi à le voir.",
          visuels: [
            {
              type: "comparaison",
              titre: "Une préposition change tout",
              colonnes: [
                {
                  titre: "Sans DE — l'obligation",
                  points: [
                    "Debes estudiar más.",
                    "Debemos avisarles.",
                    "C'est un devoir.",
                  ],
                },
                {
                  titre: "Avec DE — la supposition",
                  points: [
                    "Debe de estar en casa.",
                    "Deben de ser las tres.",
                    "C'est une hypothèse.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le futur de la langue parlée",
          texte:
            "Une périphrase mérite un traitement à part : ir a + infinitif.\n\nElle est le futur réel de la langue parlée. Voy a llamarte mañana est infiniment plus courant que te llamaré mañana, en Espagne comme en Amérique latine. Le futur simple s'est en grande partie retiré vers deux autres emplois.\n\nLe premier est le futur de probabilité : serán las tres, il doit être trois heures. Ce n'est plus du futur mais de la conjecture sur le présent.\n\nLe second est le futur de la promesse solennelle ou de l'écrit : la ley entrará en vigor el 1 de enero.\n\nPour un apprenant, la conséquence est pratique : il faut apprendre le futur simple pour lire et pour comprendre les suppositions, mais employer ir a pour parler. Un francophone qui n'emploie que le futur simple sonne livresque.\n\nIr a se conjugue à tous les temps, ce qui donne aussi le futur dans le passé : iba a llamarte, j'allais t'appeler. Cette forme-là est très employée et n'a pas d'équivalent aussi léger en français.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Vamos a hablarlo el lunes.",
        francais: "Nous en parlerons lundi.",
        note: "Ir a + infinitif est le futur réel de la langue parlée, bien plus que hablaremos.",
      },
      {
        etranger: "Acabo de llegar a casa.",
        francais: "Je viens d'arriver à la maison.",
        note: "Le français « vient de », l'espagnol « finit de » : les deux images sont inverses.",
      },
      {
        etranger: "Vuelve a explicármelo, por favor.",
        francais: "Réexplique-le-moi, s'il te plaît.",
        note: "Volver a remplace notre préfixe re-, que l'espagnol n'a pas de façon productive.",
      },
      {
        etranger: "Dejé de fumar hace tres años.",
        francais: "J'ai arrêté de fumer il y a trois ans.",
        note: "Dejar de + infinitif pour l'arrêt. Et hace + durée pour « il y a ».",
      },
      {
        etranger: "Se puso a gritar sin motivo.",
        francais: "Il s'est mis à crier sans raison.",
        note: "Ponerse a marque le début brusque ; empezar a est neutre.",
      },
      {
        etranger: "Está a punto de salir el tren.",
        francais: "Le train est sur le point de partir.",
        note: "Estar a punto de + infinitif pour l'imminence.",
      },
      {
        etranger: "Debe de estar en casa ya.",
        francais: "Il doit déjà être chez lui.",
        note: "Deber DE dit la supposition ; deber sans de dit l'obligation.",
      },
      {
        etranger: "Debes avisarles cuanto antes.",
        francais: "Tu dois les prévenir au plus vite.",
        note: "Sans de, c'est bien une obligation. La préposition fait tout.",
      },
      {
        etranger: "Iba a llamarte cuando llegaste.",
        francais: "J'allais t'appeler quand tu es arrivé.",
        note: "Ir a à l'imparfait donne le futur dans le passé, très employé à l'oral.",
      },
      {
        etranger: "Llegó a insultarme delante de todos.",
        francais: "Il est allé jusqu'à m'insulter devant tout le monde.",
        note: "Llegar a + infinitif marque le point extrême atteint.",
      },
    ],
  },

  {
    slug: "es-conj-anterioridad",
    category: "Conjugaison",
    title: "Dire l'antériorité",
    statement:
      "Había salido, hubo salido, habría salido. Trois formes pour dire ce qui s'est passé avant autre chose — et deux d'entre elles ne s'emploient presque jamais.",
    tip: "Le pretérito anterior — hubo salido — n'existe plus qu'à l'écrit littéraire, après apenas, en cuanto ou así que. Le reconnaître suffit.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "L'antériorité dans le récit",
      sections: [
        {
          titre: "Le plus-que-parfait, seul vraiment vivant",
          texte:
            "Pour dire qu'une action précède une autre dans le passé, l'espagnol emploie presque toujours el pluscuamperfecto : había + participe.\n\nSa formation est régulière et sans piège : había, habías, había, habíamos, habíais, habían, suivis du participe invariable. Cuando llegué, ya se había ido.\n\nSon emploi recouvre celui du plus-que-parfait français, à un détail près : l'espagnol l'emploie aussi là où le français emploie parfois un passé antérieur ou un passé simple. Después de que hubiera terminado, salimos — mais l'usage courant dirait después de que terminó.\n\nUne particularité mérite attention : au discours rapporté, un passé composé ou un passé simple devient plus-que-parfait. « He terminado » donne dijo que había terminado.\n\nEnfin, le plus-que-parfait du subjonctif — hubiera ou hubiese + participe — sert dans les hypothèses irréelles du passé : si hubiera sabido. C'est de loin son emploi le plus fréquent, et il vaut d'être maîtrisé.",
          visuels: [
            {
              type: "tableau",
              titre: "Les trois formes de l'antériorité",
              colonnes: ["La forme", "L'exemple", "Vivant ?"],
              lignes: [
                ["pluscuamperfecto", "Ya se había ido.", "oui, partout"],
                ["pretérito anterior", "Apenas hubo salido, llovió.", "écrit littéraire seulement"],
                ["condicional compuesto", "Habría salido antes.", "oui, hypothèse"],
                ["pluscuamperfecto de subj.", "Si hubiera sabido…", "oui, très fréquent"],
                ["futuro perfecto", "Habrá salido ya.", "oui, supposition"],
              ],
              note: "Le pretérito anterior ne s'emploie plus qu'après apenas, en cuanto, así que, no bien.",
            },
          ],
        },
        {
          titre: "Le passé antérieur, et pourquoi il a disparu",
          texte:
            "El pretérito anterior — hube salido, hubiste salido — exprime une action immédiatement antérieure à une autre dans le passé. Apenas hubo terminado, se marchó.\n\nIl a presque entièrement disparu de la langue vivante, pour une raison simple : le passé simple suffit à dire la même chose. Apenas terminó, se marchó veut exactement la même chose, et c'est ce que tout le monde dit.\n\nIl ne survit que dans deux contextes. D'abord la prose littéraire du dix-neuvième siècle et ses imitations. Ensuite, après une poignée de conjonctions de temps immédiat : apenas, en cuanto, tan pronto como, así que, no bien, después de que.\n\nPour un apprenant, la conclusion est nette : il faut savoir le reconnaître en lisant, et ne jamais l'employer. Le produire dans une conversation sonne comme si un francophone employait le passé antérieur — « dès qu'il eut fini » — au café.\n\nCe cas illustre un principe utile : toutes les formes d'une conjugaison n'ont pas le même statut. Certaines sont à produire, d'autres seulement à reconnaître, et confondre les deux fait perdre du temps.",
          visuels: [
            {
              type: "comparaison",
              titre: "Ce qu'on dit vraiment",
              colonnes: [
                {
                  titre: "Le livre",
                  points: [
                    "Apenas hubo salido, empezó a llover.",
                    "En cuanto hubo terminado, se fue.",
                    "Registre littéraire.",
                  ],
                },
                {
                  titre: "La conversation",
                  points: [
                    "Apenas salió, empezó a llover.",
                    "En cuanto terminó, se fue.",
                    "Le passé simple suffit.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "L'antériorité au futur et à l'hypothèse",
          texte:
            "Deux autres formes composées disent l'antériorité, dans d'autres domaines temporels.\n\nEl futuro perfecto — habré terminado — dit qu'une action sera achevée avant un point futur : para el viernes habré terminado el informe. Le français dit exactement la même chose avec le futur antérieur.\n\nMais il a un second emploi, plus fréquent et propre à l'espagnol : la supposition sur un passé proche. Habrá salido ya, il doit être déjà sorti. ¿Qué le habrá pasado?, que peut-il bien lui être arrivé ? C'est le pendant du futur de probabilité pour le passé.\n\nEl condicional compuesto — habría terminado — dit l'hypothèse non réalisée : habría venido si me lo hubieras dicho. Il forme couple avec le plus-que-parfait du subjonctif.\n\nEt il sert lui aussi à supposer, mais sur un passé plus lointain : serían las tres cuando llegó, il devait être trois heures quand il est arrivé.\n\nCette symétrie — futur pour supposer sur le présent, futur composé pour le passé proche, conditionnel pour supposer sur le passé — n'a pas d'équivalent en français, et elle est l'une des élégances de l'espagnol.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Cuando llegué, ya se había ido.",
        francais: "Quand je suis arrivé, il était déjà parti.",
        note: "El pluscuamperfecto : la seule forme d'antériorité vraiment vivante.",
      },
      {
        etranger: "Nos contó que ya lo había leído.",
        francais: "Il nous a raconté qu'il l'avait déjà lu.",
        note: "Au discours rapporté, le passé composé devient plus-que-parfait.",
      },
      {
        etranger: "Apenas hubo salido, empezó a llover.",
        francais: "À peine était-il sorti qu'il se mit à pleuvoir.",
        note: "El pretérito anterior : à reconnaître en lisant, jamais à produire.",
      },
      {
        etranger: "Para el viernes habré terminado.",
        francais: "D'ici vendredi, j'aurai fini.",
        note: "El futuro perfecto, exactement comme notre futur antérieur.",
      },
      {
        etranger: "¿Qué le habrá pasado?",
        francais: "Que peut-il bien lui être arrivé ?",
        note: "Le futur composé sert aussi à supposer sur un passé proche.",
      },
      {
        etranger: "Serían las tres cuando llegó.",
        francais: "Il devait être trois heures quand il est arrivé.",
        note: "Le conditionnel suppose sur le passé, comme le futur suppose sur le présent.",
      },
      {
        etranger: "Nunca había visto algo así.",
        francais: "Je n'avais jamais rien vu de tel.",
        note: "Le participe reste invariable après haber, quel que soit le complément.",
      },
      {
        etranger: "En cuanto terminó, se marchó.",
        francais: "Dès qu'il a eu fini, il est parti.",
        note: "L'usage courant emploie le passé simple là où le livre mettrait hubo terminado.",
      },
      {
        etranger: "Habría llamado si hubiera podido.",
        francais: "J'aurais appelé si j'avais pu.",
        note: "Le conditionnel composé forme couple avec le plus-que-parfait du subjonctif.",
      },
      {
        etranger: "Ya habían cerrado cuando fuimos.",
        francais: "Ils avaient déjà fermé quand nous y sommes allés.",
        note: "Ya renforce l'antériorité, et se place devant l'auxiliaire.",
      },
    ],
  },

  {
    slug: "es-conj-voz-pasiva",
    category: "Conjugaison",
    title: "La voix passive, et pourquoi l'espagnol l'évite",
    statement:
      "Ser cerrada, estar cerrada, cerrarse. Trois façons de dire un passif — et l'espagnol préfère systématiquement celle que le français n'a pas.",
    tip: "Ser + participe dit l'action ; estar + participe dit l'état qui en résulte. La puerta fue cerrada, on l'a fermée ; la puerta está cerrada, elle est fermée.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Le passif espagnol",
      sections: [
        {
          titre: "Deux passifs, et une différence d'aspect",
          texte:
            "L'espagnol construit deux passifs avec un participe, et ils ne disent pas la même chose.\n\nLa pasiva de proceso emploie ser : la carta fue escrita por Ana. Elle décrit l'action elle-même, au moment où elle a lieu. Le complément d'agent est introduit par por.\n\nLa pasiva de resultado emploie estar : la carta está escrita. Elle décrit l'état obtenu, sans dire qui l'a produit ni quand. On ne peut généralement pas y ajouter d'agent.\n\nLe français ne distingue pas les deux : « la lettre est écrite » peut vouloir dire l'un ou l'autre, et seul le contexte tranche. L'espagnol tranche par le verbe.\n\nDans les deux cas, le participe s'accorde avec le sujet : las cartas fueron escritas, las puertas están cerradas.\n\nUne troisième forme, plus rare, emploie quedar pour marquer un état définitif : el asunto quedó resuelto, l'affaire a été réglée — et le reste.",
          visuels: [
            {
              type: "tableau",
              titre: "Les trois passifs",
              colonnes: ["La forme", "Ce qu'elle dit", "Exemple"],
              lignes: [
                ["ser + participe", "l'action, en train de se faire", "La ley fue aprobada ayer."],
                ["estar + participe", "l'état résultant", "La ley está aprobada."],
                ["quedar + participe", "l'état définitif", "El asunto quedó resuelto."],
                ["se + verbe", "le passif réfléchi, sans agent", "Se aprobó la ley."],
                ["3e pers. pluriel", "l'impersonnel actif", "Aprobaron la ley."],
              ],
              note: "Le participe s'accorde toujours avec le sujet dans les trois premières formes.",
            },
          ],
        },
        {
          titre: "Pourquoi l'espagnol l'évite",
          texte:
            "Le passif en ser existe, il est correct, et pourtant un texte espagnol naturel l'emploie beaucoup moins qu'un texte français ou anglais. Trois raisons à cela.\n\nD'abord, l'espagnol dispose du passif réfléchi, plus léger : se aprobó la ley plutôt que la ley fue aprobada. La construction ne nomme pas l'agent et n'en a pas besoin.\n\nEnsuite, il dispose de l'impersonnel actif à la troisième personne du pluriel : aprobaron la ley. Sans sujet exprimé, l'agent reste indéterminé, et la phrase reste active.\n\nEnfin, le passif en ser au présent sonne franchement étrange dans la plupart des contextes : la ley es aprobada por el Congreso est grammatical mais inhabituel. Il vit surtout au passé simple et au futur, et dans la presse.\n\nLa conséquence pour un francophone est nette : traduire un passif français par un passif espagnol donne un texte correct et raide. Le réflexe à installer est de passer par se ou par la troisième personne du pluriel.\n\nUn seul cas favorise vraiment ser : quand l'agent est nommé et qu'il compte. La novela fue escrita por García Márquez.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même fait, trois façons",
              colonnes: [
                {
                  titre: "Raide — passif en ser",
                  points: [
                    "La ley fue aprobada.",
                    "El coche fue robado.",
                    "Correct, mais lourd sans agent.",
                  ],
                },
                {
                  titre: "Naturel — se ou 3e pluriel",
                  points: [
                    "Se aprobó la ley.",
                    "Robaron el coche.",
                    "C'est ce qu'on dit vraiment.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les cas où le passif est impossible",
          texte:
            "Deux restrictions valent d'être connues, parce qu'elles produisent des fautes chez des apprenants avancés.\n\nLa première : le complément d'objet indirect ne peut pas devenir sujet d'un passif espagnol. L'anglais dit I was given a book ; le français dit « on m'a donné un livre » ; l'espagnol ne peut dire ni l'un ni l'autre au passif. Il faut passer par l'actif : me dieron un libro.\n\nCette règle interdit beaucoup de traductions littérales de l'anglais, et elle est absolue.\n\nLa seconde : le passif réfléchi ne s'emploie pas quand le complément est une personne déterminée introduite par a. On dit se detuvo a los sospechosos — au singulier, impersonnel —, jamais « se detuvieron a los sospechosos ».\n\nS'y ajoute une préférence stylistique : quand le sujet du passif est une personne, l'espagnol préfère presque toujours l'actif impersonnel. Fue detenido por la policía est correct, mais lo detuvieron est bien plus courant.\n\nEnfin, un détail utile : par est por pour l'agent, mais de pour un sentiment — es querido por todos, mais es conocido de todos s'entend aussi. La préposition por l'emporte largement dans l'usage moderne.",
        },
      ],
    },
    cartes: [
      {
        etranger: "La ley fue aprobada el martes.",
        francais: "La loi a été adoptée mardi.",
        note: "Ser + participe décrit l'action. Le participe s'accorde avec le sujet.",
      },
      {
        etranger: "La ley ya está aprobada.",
        francais: "La loi est déjà adoptée.",
        note: "Estar + participe décrit l'état résultant, sans dire qui l'a produit.",
      },
      {
        etranger: "Se aprobó la ley sin debate.",
        francais: "La loi a été adoptée sans débat.",
        note: "Le passif réfléchi, plus léger : c'est la forme que l'espagnol préfère.",
      },
      {
        etranger: "Robaron el coche esta noche.",
        francais: "La voiture a été volée cette nuit.",
        note: "Troisième personne du pluriel sans sujet : l'impersonnel actif remplace le passif.",
      },
      {
        etranger: "Me dieron un libro de regalo.",
        francais: "On m'a donné un livre en cadeau.",
        note: "Le complément indirect ne peut jamais devenir sujet d'un passif espagnol.",
      },
      {
        etranger: "El asunto quedó resuelto ayer.",
        francais: "L'affaire a été réglée hier.",
        note: "Quedar + participe marque un état définitif, plus fort qu'estar.",
      },
      {
        etranger: "Se detuvo a los sospechosos.",
        francais: "Les suspects ont été arrêtés.",
        note: "Avec a + personne, le verbe reste au singulier : c'est l'impersonnel, pas le passif réfléchi.",
      },
      {
        etranger: "La novela fue escrita por una mujer.",
        francais: "Le roman a été écrit par une femme.",
        note: "Le seul cas qui favorise ser : quand l'agent est nommé et qu'il compte.",
      },
      {
        etranger: "Las puertas estaban cerradas.",
        francais: "Les portes étaient fermées.",
        note: "Estar décrit l'état ; ser aurait décrit le moment où on les a fermées.",
      },
      {
        etranger: "Es querido por todos sus alumnos.",
        francais: "Il est aimé de tous ses élèves.",
        note: "L'agent se marque par por. Le de s'entend, mais recule dans l'usage moderne.",
      },
    ],
  },
];
