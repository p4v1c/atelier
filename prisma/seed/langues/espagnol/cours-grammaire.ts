/**
 * Espagnol — les cours de grammaire.
 *
 * L'espagnol paraît proche du français, et l'est souvent. Les cours portent
 * donc sur les endroits où il s'en écarte : les pronoms, gustar, l'impératif,
 * le genre, et l'accent tonique qu'un francophone n'entend pas.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_COURS_GRAMMAIRE: LotCartes[] = [
  {
    slug: "es-cours-gustar",
    category: "Grammaire en contexte",
    title: "Gustar, et les verbes qui renversent la phrase",
    statement:
      "« J'aime le café » se dit littéralement « le café me plaît ». Le sujet change de côté, et une famille entière de verbes fonctionne ainsi.",
    tip: "Ce n'est pas toi le sujet, c'est la chose : me gusta el café, me gustan los libros. Le verbe s'accorde avec ce qui plaît.",
    difficulty: 2,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "Gustar et les verbes à construction inverse",
      sections: [
        {
          titre: "Le renversement",
          texte:
            "Gustar ne veut pas dire « aimer » : il veut dire « plaire ». La phrase espagnole ne dit donc pas « j'aime le café » mais « le café me plaît » — me gusta el café.\n\nLa conséquence est double. D'abord, la personne n'est pas sujet mais complément : me, te, le, nos, os, les. Ensuite, le verbe s'accorde avec la chose qui plaît, pas avec la personne : me gusta el café, une chose ; me gustan los libros, plusieurs.\n\nC'est la faute la plus tenace du francophone, parce qu'elle demande de reconstruire la phrase et pas seulement de traduire des mots.",
          visuels: [
            {
              type: "tableau",
              titre: "La conjugaison, qui n'en est pas vraiment une",
              colonnes: ["Personne", "Une chose", "Plusieurs choses"],
              lignes: [
                ["moi", "me gusta", "me gustan"],
                ["toi", "te gusta", "te gustan"],
                ["lui, elle, vous", "le gusta", "le gustan"],
                ["nous", "nos gusta", "nos gustan"],
                ["vous (Espagne)", "os gusta", "os gustan"],
                ["eux, elles", "les gusta", "les gustan"],
              ],
              note: "Le verbe ne prend que deux formes : gusta et gustan. C'est le pronom qui change.",
            },
          ],
        },
        {
          titre: "Toute une famille",
          texte:
            "Gustar n'est pas seul. Encantar, dire qu'on adore. Interesar, intéresser. Doler, faire mal. Faltar, manquer. Quedar, rester. Parecer, sembler. Molestar, déranger. Apetecer, avoir envie de. Tous se construisent pareil.\n\nMe duele la cabeza : la tête me fait mal. Me faltan dos euros : deux euros me manquent, et faltan est au pluriel parce qu'il y a deux euros. Me quedan tres : il m'en reste trois.\n\nUne fois le mécanisme compris pour gustar, toute la famille suit.",
        },
        {
          titre: "Insister, et répondre",
          texte:
            "Pour insister sur qui aime, l'espagnol ajoute a mí, a ti, a él en tête : a mí me gusta, mais pas à toi. Le pronom complément reste obligatoire : on ne dit pas « a mí gusta ».\n\nC'est aussi ce qui permet de lever une ambiguïté : le gusta pourrait désigner lui, elle ou vous. A ella le gusta tranche.\n\nEnfin, pour approuver ou contredire : a mí también, moi aussi ; a mí tampoco, moi non plus ; a mí sí, moi si ; a mí no, pas moi. Ces quatre formules répondent à tout.",
        },
      ],
    },
    cartes: [
      { etranger: "Me gusta el café.", francais: "J'aime le café.", note: "Littéralement, le café me plaît. Le café est sujet." },
      { etranger: "Me gustan los libros.", francais: "J'aime les livres.", note: "Gustan au pluriel : ce sont les livres qui plaisent." },
      { etranger: "¿Te gusta bailar?", francais: "Tu aimes danser ?", note: "Devant un infinitif, toujours le singulier." },
      { etranger: "Me encanta esta canción.", francais: "J'adore cette chanson.", note: "Encantar suit la même construction que gustar." },
      { etranger: "Me duele la cabeza.", francais: "J'ai mal à la tête.", note: "Littéralement, la tête me fait mal." },
      { etranger: "Me faltan dos euros.", francais: "Il me manque deux euros.", note: "Faltan au pluriel : deux euros manquent." },
      { etranger: "Nos quedan tres días.", francais: "Il nous reste trois jours." },
      { etranger: "A mí me gusta mucho.", francais: "Moi, j'aime beaucoup.", note: "A mí insiste, mais me reste obligatoire." },
      { etranger: "A mí también.", francais: "Moi aussi.", note: "Pour approuver. Pour contredire une négation : a mí sí." },
      { etranger: "No me apetece salir.", francais: "Je n'ai pas envie de sortir.", note: "Apetecer, très employé, se construit comme gustar." },
    ],
  },

  {
    slug: "es-cours-pronoms",
    category: "Grammaire en contexte",
    title: "Les pronoms compléments : me, te, lo, le, se",
    statement:
      "Où les placer, dans quel ordre, et quand le lui devient se. C'est la difficulté grammaticale la plus tenace de l'espagnol pour un francophone.",
    tip: "Devant un verbe conjugué, après un infinitif, un gérondif ou un impératif affirmatif — et collés au verbe dans ce cas.",
    difficulty: 3,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les pronoms compléments",
      sections: [
        {
          titre: "Deux séries, deux fonctions",
          texte:
            "Le complément direct — celui qu'on peut remplacer par « le, la, les » — se dit lo, la, los, las. Le complément indirect — « lui, leur » — se dit le, les. Aux autres personnes, les deux séries se confondent : me, te, nos, os.\n\nLa distinction compte, parce qu'elle décide de la forme. Veo a Juan devient lo veo. Doy el libro a Juan devient le doy el libro.\n\nEn Espagne, on entend souvent le pour une personne masculine à l'accusatif — le veo pour lo veo. C'est le leísmo, admis par l'Académie pour le masculin singulier de personne, et seulement là.",
          visuels: [
            {
              type: "tableau",
              titre: "Les deux séries",
              colonnes: ["Personne", "Direct", "Indirect"],
              lignes: [
                ["moi", "me", "me"],
                ["toi", "te", "te"],
                ["lui, elle, vous", "lo / la", "le"],
                ["nous", "nos", "nos"],
                ["vous (Espagne)", "os", "os"],
                ["eux, elles", "los / las", "les"],
              ],
              note: "Seule la troisième personne distingue vraiment les deux séries.",
            },
          ],
        },
        {
          titre: "Où les mettre",
          texte:
            "Devant un verbe conjugué, ils se placent avant et séparés : lo veo, me lo dio.\n\nAprès un infinitif, un gérondif ou un impératif affirmatif, ils se collent au verbe : quiero verlo, estoy haciéndolo, dímelo.\n\nAvec une périphrase — un verbe conjugué suivi d'un infinitif ou d'un gérondif — les deux places sont correctes : lo quiero ver ou quiero verlo, disent exactement la même chose.\n\nÀ l'impératif négatif, en revanche, ils repassent devant : no me lo digas. Jamais « no dímelo ».\n\nAttention à l'accent écrit : coller un ou deux pronoms déplace l'accent tonique, qu'il faut alors noter. dime, mais dímelo ; haciendo, mais haciéndolo.",
          visuels: [
            {
              type: "etapes",
              titre: "Deux pronoms ensemble : l'ordre",
              etapes: [
                { titre: "L'indirect d'abord", texte: "me lo dio — il me l'a donné. Jamais « lo me dio »." },
                {
                  titre: "Si les deux commencent par l, le premier devient se",
                  texte: "« le lo di » est imprononçable : on dit se lo di. Même chose pour les los, les la…",
                },
                {
                  titre: "Se est alors ambigu : on lève le doute si besoin",
                  texte: "se lo di a él, se lo di a ella, se lo di a usted.",
                },
              ],
            },
          ],
        },
        {
          titre: "Le se universel",
          texte:
            "Se ne sert pas qu'à remplacer le. Il est aussi le pronom réfléchi de la troisième personne : se lava, il se lave.\n\nIl forme les tournures impersonnelles, très courantes : se habla español, on parle espagnol ; se vende, à vendre ; ¿cómo se dice ? comment dit-on ?\n\nEt il change parfois le sens du verbe : ir, aller, contre irse, s'en aller ; dormir, dormir, contre dormirse, s'endormir ; llevar, porter, contre llevarse, emporter. Ces paires se retiennent une à une.",
        },
      ],
    },
    cartes: [
      { etranger: "Lo veo todos los días.", francais: "Je le vois tous les jours.", note: "Complément direct : lo. Devant le verbe conjugué." },
      { etranger: "Le doy el libro.", francais: "Je lui donne le livre.", note: "Complément indirect : le." },
      { etranger: "Me lo dio ayer.", francais: "Il me l'a donné hier.", note: "L'indirect avant le direct : me lo, jamais « lo me »." },
      { etranger: "Se lo di a ella.", francais: "Je le lui ai donné.", note: "« Le lo » est imprononçable : le devient se." },
      { etranger: "Prefiero hacerlo yo.", francais: "Je préfère le faire moi-même.", note: "Collé à l'infinitif. « Lo prefiero hacer » est aussi correct." },
      { etranger: "Estoy haciéndolo.", francais: "Je suis en train de le faire.", note: "Collé au gérondif, avec l'accent écrit qui suit." },
      { etranger: "Dímelo otra vez.", francais: "Redis-le-moi.", aussi: ["Dis-le-moi encore une fois."], note: "Impératif affirmatif : les deux pronoms collés, et l'accent écrit qui apparaît." },
      { etranger: "No me lo digas.", francais: "Ne me le dis pas.", note: "À l'impératif négatif, les pronoms repassent devant." },
      { etranger: "Se habla español.", francais: "On parle espagnol.", note: "Le se impersonnel, très courant sur les enseignes." },
      { etranger: "Me voy.", francais: "Je m'en vais.", note: "irse, s'en aller, contre ir, aller. Le pronom change le sens." },
    ],
  },

  {
    slug: "es-cours-genre",
    category: "Grammaire en contexte",
    title: "Le genre, les articles, et les faux réflexes",
    statement:
      "Beaucoup de mots n'ont pas le même genre qu'en français, et quelques-uns changent de genre sans changer de forme. Le réflexe français induit en erreur.",
    tip: "En -o, presque toujours masculin ; en -a, presque toujours féminin. Mais el problema, el día, la mano sont des exceptions à connaître.",
    difficulty: 2,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "Genre et articles",
      sections: [
        {
          titre: "La règle, et ses exceptions célèbres",
          texte:
            "Les noms en -o sont masculins, ceux en -a féminins. La règle couvre l'essentiel, mais ses exceptions sont parmi les mots les plus fréquents de la langue.\n\nMasculins malgré leur -a : el problema, el sistema, el tema, el idioma, el clima, el día, el mapa, el programa. La plupart viennent du grec, ce qui explique leur résistance.\n\nFéminins malgré leur -o : la mano, la foto (abrégé de fotografía), la moto, la radio.\n\nEt une famille à part : les noms féminins commençant par un a tonique prennent l'article masculin au singulier, pour éviter deux a qui se heurtent. El agua, el aula, el hambre — mais ils restent féminins : el agua está fría, et au pluriel las aguas.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le genre ne suit pas le français",
              colonnes: [
                {
                  titre: "Masculin en espagnol",
                  points: [
                    "el coche — la voiture",
                    "el problema — le problème (comme en français)",
                    "el viaje — le voyage",
                    "el árbol — l'arbre",
                    "el minuto — la minute",
                  ],
                },
                {
                  titre: "Féminin en espagnol",
                  points: [
                    "la sangre — le sang",
                    "la leche — le lait",
                    "la sal — le sel",
                    "la nariz — le nez",
                    "la sonrisa — le sourire",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les articles, et deux contractions",
          texte:
            "Quatre formes définies : el, la, los, las. Quatre indéfinies : un, una, unos, unas — unos et unas se traduisant par « quelques » plutôt que par « des ».\n\nDeux contractions obligatoires, et deux seulement : a + el donne al, de + el donne del. Voy al cine, vengo del trabajo. Elles ne se font pas devant un nom propre : voy a El Escorial.\n\nL'espagnol met l'article là où le français n'en met pas : devant les jours — el lunes, le lundi ; les heures — a las tres ; les pourcentages — el veinte por ciento ; et les titres quand on parle de quelqu'un — el señor García. En revanche il l'omet devant un métier attribut : soy profesor, sans article.",
        },
        {
          titre: "Lo, l'article neutre",
          texte:
            "L'espagnol dispose d'un article que le français n'a pas : lo, qui ne s'emploie jamais devant un nom mais devant un adjectif ou une proposition, pour désigner une notion abstraite.\n\nLo importante es participar : l'important, c'est de participer. Lo mejor, le mieux. Lo que dijiste, ce que tu as dit.\n\nLo bueno, lo malo, lo peor, lo mismo : autant de tournures quotidiennes qui n'existent que grâce à lui.",
        },
      ],
    },
    cartes: [
      { etranger: "el problema", francais: "le problème", note: "Masculin malgré le -a. Comme el tema, el sistema, el idioma." },
      { etranger: "la mano", francais: "la main", note: "Féminin malgré le -o. Comme la foto, la moto." },
      { etranger: "el agua fría", francais: "l'eau froide", note: "Article masculin pour éviter deux a, mais l'adjectif reste féminin." },
      { etranger: "Voy al cine.", francais: "Je vais au cinéma.", note: "a + el donne al. Contraction obligatoire." },
      { etranger: "Vengo del trabajo.", francais: "Je reviens du travail.", note: "de + el donne del." },
      { etranger: "Los lunes trabajo.", francais: "Le lundi, je travaille.", note: "L'article marque l'habitude, là où le français emploie le singulier." },
      { etranger: "Soy profesor.", francais: "Je suis professeur.", note: "Pas d'article devant un métier attribut, contrairement à l'anglais." },
      { etranger: "Lo importante es participar.", francais: "L'important, c'est de participer.", note: "Lo neutre, devant un adjectif : le français n'a pas d'équivalent direct." },
      { etranger: "Lo que dijiste es cierto.", francais: "Ce que tu as dit est vrai." },
      { etranger: "la sangre", francais: "le sang", note: "Féminin en espagnol, masculin en français. Comme la leche et la sal." },
    ],
  },

  {
    slug: "es-cours-imperatif",
    category: "Conjugaison",
    title: "L'impératif : demander, ordonner, interdire",
    statement:
      "L'affirmatif et le négatif ne se construisent pas du tout pareil : le second emprunte au subjonctif. C'est la particularité qui surprend le plus.",
    tip: "Habla ! mais no hables ! L'affirmatif a ses formes propres, le négatif passe par le subjonctif.",
    difficulty: 3,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "L'impératif espagnol",
      sections: [
        {
          titre: "L'affirmatif",
          texte:
            "Au tutoiement singulier, l'impératif affirmatif est la troisième personne du présent, tout simplement : él habla donne habla. Come, vive, escucha.\n\nHuit verbes très courants ont une forme brève et irrégulière, qu'il faut savoir : di (decir), haz (hacer), ve (ir), pon (poner), sal (salir), sé (ser), ten (tener), ven (venir). Toutes d'une syllabe.\n\nAu vouvoiement, on emprunte au subjonctif : hable usted, coma usted. Et au pluriel espagnol, vosotros, l'impératif se forme sur l'infinitif dont on remplace le -r par un -d : hablad, comed, venid.",
          visuels: [
            {
              type: "tableau",
              titre: "Affirmatif et négatif, côte à côte",
              colonnes: ["Personne", "Affirmatif", "Négatif"],
              lignes: [
                ["tú", "habla", "no hables"],
                ["usted", "hable", "no hable"],
                ["nosotros", "hablemos", "no hablemos"],
                ["vosotros", "hablad", "no habléis"],
                ["ustedes", "hablen", "no hablen"],
              ],
              note: "Seule la deuxième personne change vraiment de forme entre les deux colonnes.",
            },
          ],
        },
        {
          titre: "Le négatif, emprunté au subjonctif",
          texte:
            "Dès qu'on interdit, l'impératif disparaît et le subjonctif prend le relais. No hables, no comas, no vengas.\n\nLa conséquence pratique est que les formes brèves ne servent plus : ven devient no vengas, haz devient no hagas, di devient no digas. Rien ne se devine, tout se déduit du subjonctif.\n\nEt les pronoms changent de place en même temps : collés à l'affirmatif — dímelo — mais devant au négatif — no me lo digas.",
        },
        {
          titre: "Adoucir un ordre",
          texte:
            "L'impératif nu sonne sec, en espagnol comme ailleurs. La langue courante l'entoure de plusieurs adoucissants.\n\nPor favor, évidemment. Mais surtout la question à la place de l'ordre : ¿me pasas la sal? plutôt que pásame la sal. C'est la formule la plus employée entre proches.\n\nOu l'imparfait de politesse dans une demande : quería un café. Ou encore ¿podrías… ? au conditionnel, l'équivalent exact de notre « pourrais-tu ».\n\nÀ l'inverse, l'impératif nu est parfaitement normal pour un conseil ou une invitation : pasa, entre ; siéntate, assieds-toi ; dime, dis-moi. Il n'a alors rien de brutal.",
        },
      ],
    },
    cartes: [
      { etranger: "Habla más despacio.", francais: "Parle plus lentement.", note: "L'impératif tú est la troisième personne du présent." },
      { etranger: "No hables tan rápido.", francais: "Ne parle pas si vite.", note: "Le négatif emprunte au subjonctif : hables, pas habla." },
      { etranger: "Ven aquí.", francais: "Viens ici.", note: "Forme brève irrégulière : venir → ven." },
      { etranger: "No vengas ahora.", francais: "Ne viens pas maintenant.", note: "La forme brève disparaît au négatif : subjonctif vengas." },
      { etranger: "Dime la verdad.", francais: "Dis-moi la vérité.", note: "di + me. Pronom collé à l'affirmatif." },
      { etranger: "No me digas eso.", francais: "Ne me dis pas ça.", note: "Au négatif, le pronom repasse devant." },
      { etranger: "Siéntate, por favor.", francais: "Assieds-toi, s'il te plaît.", note: "Impératif pronominal, avec l'accent écrit que le pronom fait apparaître." },
      { etranger: "Tenga cuidado.", francais: "Faites attention.", note: "Vouvoiement : forme du subjonctif." },
      { etranger: "¿Me pasas la sal?", francais: "Tu me passes le sel ?", note: "La question remplace l'ordre : c'est la formule courante entre proches." },
      { etranger: "Vamos a empezar.", francais: "Commençons.", note: "Vamos a + infinitif remplace couramment l'impératif nosotros." },
    ],
  },

  {
    slug: "es-cours-futur",
    category: "Conjugaison",
    title: "Le futur et le conditionnel",
    statement:
      "Deux temps qui se conjuguent sur l'infinitif entier, avec les mêmes douze irréguliers. Les apprendre ensemble divise le travail par deux.",
    tip: "Terminaisons ajoutées à l'infinitif complet : hablaré, comeré, viviré. Aucun verbe n'y échappe, sauf par son radical.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Futur et conditionnel",
      sections: [
        {
          titre: "Une seule mécanique pour deux temps",
          texte:
            "Le futur et le conditionnel se construisent sur l'infinitif entier, auquel on ajoute des terminaisons. C'est le seul cas en espagnol où l'on ne retire pas la terminaison de l'infinitif avant de conjuguer.\n\nFutur : -é, -ás, -á, -emos, -éis, -án. Hablaré, hablarás, hablará.\nConditionnel : -ía, -ías, -ía, -íamos, -íais, -ían. Hablaría, hablarías, hablaría.\n\nLes terminaisons du conditionnel sont exactement celles de l'imparfait des verbes en -er et -ir, ce qui aide à les retenir.",
          visuels: [
            {
              type: "tableau",
              titre: "Les douze radicaux irréguliers, communs aux deux temps",
              colonnes: ["Infinitif", "Radical", "Futur", "Conditionnel"],
              lignes: [
                ["tener", "tendr-", "tendré", "tendría"],
                ["poner", "pondr-", "pondré", "pondría"],
                ["venir", "vendr-", "vendré", "vendría"],
                ["salir", "saldr-", "saldré", "saldría"],
                ["poder", "podr-", "podré", "podría"],
                ["saber", "sabr-", "sabré", "sabría"],
                ["querer", "querr-", "querré", "querría"],
                ["hacer", "har-", "haré", "haría"],
                ["decir", "dir-", "diré", "diría"],
                ["haber", "habr-", "habré", "habría"],
              ],
              note: "Le radical irrégulier vaut pour les deux temps : le connaître une fois suffit.",
            },
          ],
        },
        {
          titre: "Ce que le futur dit vraiment",
          texte:
            "L'espagnol emploie moins le futur que le français pour parler de l'avenir : ir a + infinitif le remplace largement à l'oral. Voy a llamarte, je vais t'appeler, plutôt que te llamaré.\n\nEn revanche, le futur sert à un usage que le français n'a pas : la supposition sur le présent. ¿Qué hora es ? — Serán las tres. Il doit être trois heures. Estará en casa : il doit être chez lui.\n\nC'est un emploi très courant, et il surprend toujours au début : le futur ne parle pas du futur, il exprime une conjecture.",
        },
        {
          titre: "Le conditionnel, et son usage de politesse",
          texte:
            "Le conditionnel exprime l'hypothèse, comme en français : si tuviera tiempo, iría. Remarquer le subjonctif imparfait après si — jamais le conditionnel.\n\nIl sert aussi de politesse : ¿podría ayudarme ? pourriez-vous m'aider ; me gustaría, je voudrais. C'est le registre standard d'une demande à un inconnu.\n\nEt, symétriquement au futur, il exprime la supposition sur le passé : serían las tres cuando llegó, il devait être trois heures quand il est arrivé.",
        },
      ],
    },
    cartes: [
      { etranger: "Te llamaré mañana.", francais: "Je t'appellerai demain.", note: "Terminaison ajoutée à l'infinitif entier : llamar + é." },
      { etranger: "Voy a llamarte luego.", francais: "Je vais t'appeler tout à l'heure.", note: "Ir a + infinitif, plus courant que le futur à l'oral." },
      { etranger: "Tendré que salir pronto.", francais: "Je devrai partir tôt.", note: "tener → tendr-, radical irrégulier partagé avec le conditionnel." },
      { etranger: "¿Podría ayudarme?", francais: "Pourriez-vous m'aider ?", note: "Le conditionnel de politesse, registre standard avec un inconnu." },
      { etranger: "Me gustaría verte.", francais: "J'aimerais te voir." },
      { etranger: "Serán las tres.", francais: "Il doit être trois heures.", note: "Le futur exprime une supposition sur le présent." },
      { etranger: "Estará en casa.", francais: "Il doit être chez lui.", note: "Même usage : conjecture, pas futur." },
      { etranger: "Si tuviera tiempo, iría.", francais: "Si j'avais le temps, j'irais.", note: "Subjonctif imparfait après si, conditionnel dans l'autre moitié." },
      { etranger: "Dijo que vendría.", francais: "Il a dit qu'il viendrait.", note: "Le conditionnel comme futur du passé, comme en français." },
      { etranger: "No sabría decirte.", francais: "Je ne saurais te dire.", note: "saber → sabr-." },
    ],
  },
];
