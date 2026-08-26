/**
 * Espagnol — la grammaire du haut niveau, et trois domaines de plus.
 *
 * Ce qui sépare un bon B2 d'un C1 en espagnol n'est presque jamais du
 * vocabulaire : c'est le SUBJONCTIF là où le français met un indicatif, et
 * l'ORDRE DES MOTS, beaucoup plus libre qu'en français et donc porteur de sens.
 *
 * Trois séries de grammaire, chacune avec son cours : le subjonctif au-delà des
 * règles apprises en classe, la place des mots dans la phrase, et les temps du
 * récit — où le passé simple, mort à l'oral français, est bien vivant.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_GRAMATICA_C1: LotCartes[] = [
  {
    slug: "es-cours-subjuntivo-avanzado",
    category: "Grammaire en contexte",
    title: "Le subjonctif au-delà des règles",
    statement:
      "Aunque llueva, iré. Aunque llueve, iré. Les deux phrases sont correctes et ne disent pas la même chose : le mode y porte le sens, pas la grammaire.",
    tip: "Après aunque, l'indicatif présente le fait comme acquis, le subjonctif comme envisagé. C'est le locuteur qui choisit, et son choix informe.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Quand le mode devient un choix",
      sections: [
        {
          titre: "Un mode qui informe",
          texte:
            "Les manuels enseignent le subjonctif comme une contrainte : après querer que, après es necesario que, après para que. Ces règles sont justes, et elles ne couvrent qu'une moitié de la question.\n\nL'autre moitié est celle où les deux modes sont possibles. Le subjonctif cesse alors d'être une obéissance et devient une information : il dit comment le locuteur situe ce qu'il énonce.\n\nAunque llueve, iré suppose qu'il pleut, et que j'irai quand même. Aunque llueva, iré envisage la pluie sans l'affirmer. Rien dans la grammaire n'impose l'un ou l'autre ; le locuteur choisit, et son auditeur en tire une conclusion sur ce qu'il sait.\n\nPour un francophone, la difficulté est double. Le français a réduit son subjonctif à quelques emplois obligatoires, si bien qu'on ne l'entend plus comme porteur de sens. Et là où il subsiste — « bien qu'il pleuve » — il est obligatoire, donc muet.",
          visuels: [
            {
              type: "tableau",
              titre: "Le même mot, deux modes, deux sens",
              colonnes: ["Phrase", "Mode", "Ce que ça dit"],
              lignes: [
                ["Aunque llueve, iré.", "indicatif", "il pleut, et j'irai"],
                ["Aunque llueva, iré.", "subjonctif", "même s'il pleut, j'irai"],
                ["Busco a la traductora que sabe ruso.", "indicatif", "je sais qui c'est"],
                ["Busco a alguien que sepa ruso.", "subjonctif", "n'importe qui, pourvu qu'il sache"],
              ],
              note: "Dans les quatre cas la grammaire autorise les deux. Seul le sens diffère.",
            },
          ],
        },
        {
          titre: "La relative : connu ou cherché",
          texte:
            "L'emploi le plus rentable du subjonctif espagnol est la relative, et le français ne le connaît pratiquement pas.\n\nLa règle tient en une phrase : si l'antécédent existe et qu'on le connaît, indicatif ; s'il est seulement souhaité ou hypothétique, subjonctif.\n\nBusco la casa que tiene jardín : cette maison-là, je l'ai vue, je la cherche. Busco una casa que tenga jardín : je cherche une maison, n'importe laquelle, pourvu qu'elle ait un jardin. La seconde est de loin la plus fréquente, et un francophone dit spontanément la première.\n\nLa négation force le subjonctif, puisqu'un antécédent nié n'existe pas : No hay nadie que sepa. De même après les expressions de quantité nulle : No conozco a ninguno que lo haya leído.\n\nEnfin, cette valeur explique une tournure très espagnole : lo que sea, donde quieras, como puedas. Le subjonctif y dit l'indétermination — quoi que ce soit, où tu voudras, comme tu pourras.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux recherches, deux modes",
              colonnes: [
                {
                  titre: "Indicatif : je sais laquelle",
                  points: [
                    "Busco la casa que tiene jardín.",
                    "Quiero al médico que me atendió.",
                    "Necesito el libro que está allí.",
                  ],
                },
                {
                  titre: "Subjonctif : n'importe laquelle",
                  points: [
                    "Busco una casa que tenga jardín.",
                    "Quiero un médico que hable francés.",
                    "Necesito un libro que explique esto.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Concessives et temporelles",
          texte:
            "Deux familles de conjonctions demandent une attention particulière parce que le français y met l'indicatif.\n\nLes concessives d'abord. Aunque, a pesar de que, si bien acceptent les deux modes selon que le fait est donné ou envisagé. À cela s'ajoutent des tournures figées au subjonctif : por mucho que insistas, digas lo que digas, sea como sea. Le redoublement du verbe — digas lo que digas — n'a pas d'équivalent français et sert à dire « quoi que ».\n\nLes temporelles ensuite, et c'est la faute la plus fréquente. Cuando, en cuanto, mientras, hasta que exigent le subjonctif dès que l'action est à venir. Cuando llegues, llámame — et jamais « cuando llegas ». Le français emploie ici un futur ou un présent, ce qui n'aide pas.\n\nLa règle est nette : action passée ou habituelle, indicatif ; action encore à venir, subjonctif. Cuando llego a casa, ceno se dit d'une habitude ; cuando llegue a casa, cenaré se dit de ce soir.",
          visuels: [
            {
              type: "etapes",
              titre: "Choisir le mode en trois questions",
              etapes: [
                {
                  titre: "La règle impose-t-elle un mode ?",
                  texte: "Après querer que, para que, es necesario que, le subjonctif est obligatoire : aucun choix à faire.",
                },
                {
                  titre: "L'antécédent ou le fait est-il connu ?",
                  texte: "Dans une relative ou après aunque : connu, indicatif ; seulement envisagé, subjonctif.",
                },
                {
                  titre: "L'action est-elle encore à venir ?",
                  texte: "Après cuando, en cuanto, hasta que : à venir, subjonctif. Passée ou habituelle, indicatif.",
                },
              ],
            },
          ],
        },
      ],
    },
    cartes: [
      {
        etranger: "Aunque llueva, iré.",
        francais: "Même s'il pleut, j'irai.",
        note: "Le subjonctif envisage la pluie sans l'affirmer. Avec llueve, elle serait donnée pour acquise.",
      },
      {
        etranger: "Busco una casa que tenga jardín.",
        francais: "Je cherche une maison qui ait un jardin.",
        note: "Antécédent indéterminé : subjonctif. Avec tiene, je parlerais d'une maison précise.",
      },
      {
        etranger: "Cuando llegues, llámame.",
        francais: "Quand tu arriveras, appelle-moi.",
        note: "Après cuando, une action à venir demande le subjonctif. « Cuando llegas » est fautif ici.",
      },
      {
        etranger: "No hay nadie que sepa la respuesta.",
        francais: "Il n'y a personne qui connaisse la réponse.",
        note: "L'antécédent nié n'existe pas : le subjonctif est obligatoire.",
      },
      {
        etranger: "Digas lo que digas, no cambiaré.",
        francais: "Quoi que tu dises, je ne changerai pas.",
        note: "Le redoublement du verbe au subjonctif traduit « quoi que ». Tournure sans équivalent français.",
      },
      {
        etranger: "Por mucho que insistas, es que no.",
        francais: "Tu auras beau insister, c'est non.",
        note: "Por mucho que + subjonctif, concessive figée. Es que introduit une explication ferme.",
      },
      {
        etranger: "Lo haré en cuanto pueda.",
        francais: "Je le ferai dès que je pourrai.",
        note: "En cuanto + subjonctif pour une action à venir, comme après cuando.",
      },
      {
        etranger: "Sea como sea, hay que decidir.",
        francais: "Quoi qu'il en soit, il faut décider.",
        note: "Sea como sea, formule figée. Le subjonctif y dit l'indétermination complète.",
      },
      {
        etranger: "Espera aquí hasta que vuelva.",
        francais: "Attends ici jusqu'à ce que je revienne.",
        note: "Hasta que + subjonctif quand le retour est à venir. Au passé, l'indicatif reprend ses droits.",
      },
      {
        etranger: "Cuando llego a casa, ceno.",
        francais: "Quand je rentre, je dîne.",
        note: "Habitude, donc indicatif. Le contre-exemple qui montre que cuando n'impose rien à lui seul.",
      },
    ],
  },

  {
    slug: "es-cours-orden-palabras",
    category: "Grammaire en contexte",
    title: "L'ordre des mots et l'insistance",
    statement:
      "Llegó Juan. Juan llegó. Les deux sont correctes, et l'espagnol s'en sert pour dire ce que le français dirait avec « c'est… qui ».",
    tip: "L'espagnol place à la fin ce qui est nouveau. Llegó Juan répond à « qui est arrivé ? » ; Juan llegó répond à « qu'a fait Juan ? ».",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Ce que la place d'un mot fait dire",
      sections: [
        {
          titre: "La fin de phrase est la place forte",
          texte:
            "L'espagnol a un ordre des mots beaucoup plus libre que le français, et cette liberté n'est pas gratuite : elle sert à distinguer ce qui est connu de ce qui est neuf.\n\nLa règle générale est que l'information nouvelle va à la fin. Llegó Juan met Juan en position d'information : c'est la réponse à « qui est arrivé ? ». Juan llegó traite Juan comme déjà connu et met l'arrivée en relief : c'est la réponse à « qu'a fait Juan ? ».\n\nLe français, lui, a un ordre rigide et compense par le clivage : « C'est Jean qui est arrivé ». L'espagnol connaît aussi cette construction — Fue Juan quien llegó — mais il l'emploie beaucoup moins, parce que l'inversion lui suffit.\n\nD'où une conséquence pratique pour un francophone : à force de garder l'ordre sujet-verbe, on écrit un espagnol grammaticalement juste où rien n'est jamais mis en avant. Le texte est correct et plat.",
          visuels: [
            {
              type: "tableau",
              titre: "La même phrase, trois ordres",
              colonnes: ["Ordre", "Ce qui est neuf", "Question à laquelle il répond"],
              lignes: [
                ["Juan llegó ayer.", "ayer", "Quand Juan est-il arrivé ?"],
                ["Ayer llegó Juan.", "Juan", "Qui est arrivé hier ?"],
                ["Llegó ayer Juan.", "Juan", "annonce d'un fait entier"],
              ],
              note: "Les trois sont correctes. Choisir au hasard, c'est répondre à une question qu'on n'a pas posée.",
            },
          ],
        },
        {
          titre: "Le complément placé en tête",
          texte:
            "L'espagnol peut placer un complément en tête de phrase, et il le fait très souvent — mais à une condition que les francophones oublient : le complément d'objet direct doit alors être repris par un pronom.\n\nEl libro lo compré ayer. Le complément el libro passe devant, et lo le reprend devant le verbe. Sans ce pronom, la phrase est fautive.\n\nCette reprise est obligatoire pour l'objet direct et indirect déplacé, et elle n'a pas d'équivalent français : « Le livre, je l'ai acheté hier » emploie bien un pronom.\n\nL'effet produit est celui d'un cadre : on annonce de quoi on va parler, puis on en parle. A María no la he visto. Eso no lo sabía. C'est la construction la plus économique de l'espagnol pour changer de sujet de conversation.\n\nÀ noter qu'un complément de temps ou de lieu, lui, ne demande aucune reprise : Ayer compré el libro est parfaitement correct.",
          visuels: [
            {
              type: "comparaison",
              titre: "Avec ou sans reprise",
              colonnes: [
                {
                  titre: "Correct",
                  points: [
                    "El libro lo compré ayer.",
                    "A María no la he visto.",
                    "Ayer compré el libro.",
                  ],
                },
                {
                  titre: "Fautif",
                  points: [
                    "El libro compré ayer.",
                    "A María no he visto.",
                    "—",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Adjectif avant ou après le nom",
          texte:
            "Le dernier levier est la place de l'adjectif, et lui non plus n'est pas décoratif.\n\nAprès le nom, l'adjectif distingue : un coche viejo, une voiture vieille par opposition à une neuve. C'est la position par défaut, et celle que le français emploie presque toujours.\n\nAvant le nom, l'adjectif qualifie sans distinguer : un viejo amigo, un vieil ami — l'amitié est ancienne, l'ami ne l'est pas forcément. La position antéposée dit une évidence ou un jugement, pas un tri.\n\nQuelques adjectifs changent franchement de sens selon la place. Un gran hombre est un grand homme ; un hombre grande est un homme de haute taille. Un pobre hombre est un homme à plaindre ; un hombre pobre n'a pas d'argent. Una cierta noticia est une nouvelle vague ; una noticia cierta est une nouvelle avérée.\n\nLe français connaît la même alternance — « un ancien élève » contre « un vase ancien » — mais sur beaucoup moins d'adjectifs. En espagnol, le réflexe à prendre est de postposer par défaut et de n'antéposer qu'à dessein.",
          visuels: [
            {
              type: "tableau",
              titre: "Ces adjectifs changent de sens",
              colonnes: ["Avant le nom", "Après le nom"],
              lignes: [
                ["un gran hombre — un grand homme", "un hombre grande — un homme de haute taille"],
                ["un pobre hombre — un homme à plaindre", "un hombre pobre — un homme sans argent"],
                ["un viejo amigo — un ami de longue date", "un amigo viejo — un ami âgé"],
                ["una cierta noticia — une nouvelle vague, mal établie", "una noticia cierta — une nouvelle avérée"],
              ],
              note: "Postposer par défaut, antéposer à dessein : le réflexe inverse du français pour ces mots.",
            },
          ],
        },
      ],
    },
    cartes: [
      {
        etranger: "Llegó Juan, no Pedro.",
        francais: "C'est Juan qui est arrivé, pas Pedro.",
        note: "Le sujet placé en fin de phrase est l'information nouvelle. L'espagnol n'a pas besoin de cliver.",
      },
      {
        etranger: "El libro lo compré ayer.",
        francais: "Le livre, je l'ai acheté hier.",
        note: "Un objet direct placé en tête doit être repris par un pronom. Sans lo, la phrase est fautive.",
      },
      {
        etranger: "A María no la he visto.",
        francais: "Marie, je ne l'ai pas vue.",
        note: "Même règle pour un complément de personne : a María en tête, la devant le verbe.",
      },
      {
        etranger: "Ayer compré el libro.",
        francais: "Hier, j'ai acheté le livre.",
        note: "Un complément de temps en tête ne demande aucune reprise. Le contraste avec la carte précédente.",
      },
      {
        etranger: "Es un gran hombre.",
        francais: "C'est un grand homme.",
        note: "Antéposé, gran juge. Postposé, un hombre grande dit seulement la taille.",
      },
      {
        etranger: "Es un hombre grande.",
        francais: "C'est un homme de grande taille.",
        note: "La place de l'adjectif fait tout le sens. Le couple avec la carte précédente est le plus clair.",
      },
      {
        etranger: "Pobre hombre, no sabía nada.",
        francais: "Le pauvre, il ne savait rien.",
        note: "Antéposé, pobre exprime la pitié. Un hombre pobre parlerait d'argent.",
      },
      {
        etranger: "Fue ella quien lo decidió.",
        francais: "C'est elle qui l'a décidé.",
        note: "La phrase clivée existe en espagnol, avec quien pour une personne. Elle est moins employée qu'en français.",
      },
      {
        etranger: "Eso no lo sabía.",
        francais: "Ça, je ne le savais pas.",
        note: "Eso en tête, lo en reprise. La construction la plus économique pour changer de sujet.",
      },
      {
        etranger: "En ese caso, no cuentes conmigo.",
        francais: "Dans ce cas, ne compte pas sur moi.",
        note: "Un circonstanciel en tête pose le cadre. Contar con alguien, compter sur quelqu'un.",
      },
    ],
  },

  {
    slug: "es-cours-narrativo",
    category: "Conjugaison",
    title: "Raconter : les temps du récit",
    statement:
      "Llegué, llegaba, había llegado. Le passé simple espagnol est vivant à l'oral, contrairement au français — et c'est lui qui fait avancer tout récit.",
    tip: "L'indefinido fait avancer, l'imperfecto plante le décor, le pluscuamperfecto remonte en arrière. Trois fonctions, jamais interchangeables.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Trois temps, trois fonctions",
      sections: [
        {
          titre: "Un passé simple bien vivant",
          texte:
            "La première chose à comprendre est que l'espagnol n'a pas fait le même choix que le français. Le passé simple français est mort à l'oral : personne ne dit « je mangeai ». Le pretérito indefinido espagnol, lui, est le temps ordinaire du récit parlé. Ayer comí en casa de mi madre se dit tous les jours.\n\nSon rival n'est donc pas l'imparfait mais le passé composé, et la frontière entre les deux varie selon les régions. En Espagne, le pretérito perfecto — he comido — s'emploie pour ce qui appartient à la période en cours : hoy he comido, esta semana he trabajado mucho. L'indefinido prend le relais dès que la période est close : ayer comí, el año pasado trabajé.\n\nEn Amérique latine, l'indefinido couvre presque tout, y compris ce qui s'est passé il y a une heure. Hoy comí en casa y est parfaitement normal, là où un Espagnol dirait hoy he comido.\n\nCette différence est la plus visible entre les deux rives, et elle ne s'apprend pas par une règle : elle s'entend.",
          visuels: [
            {
              type: "tableau",
              titre: "Chaque temps à sa place",
              colonnes: ["Temps", "Rôle", "Exemple"],
              lignes: [
                ["indefinido", "fait avancer", "Abrió la puerta y entró."],
                ["imperfecto", "plante le décor", "Llovía cuando salí."],
                ["pluscuamperfecto", "remonte en arrière", "Cuando llegué, ya se había ido."],
                ["perfecto", "rattache au présent", "Hoy he trabajado mucho."],
              ],
              note: "La dernière ligne est celle qui change d'une rive de l'Atlantique à l'autre.",
            },
          ],
        },
        {
          titre: "L'imparfait fait plus de choses qu'en français",
          texte:
            "L'imperfecto couvre les mêmes emplois que l'imparfait français — le décor, l'habitude, la description — et deux de plus qui surprennent.\n\nIl sert à la politesse : quería preguntarte algo, je voulais te demander quelque chose. Le passé n'y a aucune valeur temporelle ; il adoucit la demande, exactement comme le conditionnel français.\n\nIl sert aussi à rapporter ce qu'on avait compris : creía que venías mañana, je croyais que tu venais demain. Ici encore, l'imparfait dit une distance, pas un moment.\n\nEnfin, il s'emploie dans les récits d'enfance et les résumés de films là où le français passerait au présent : en la película, el protagonista era un espía. L'espagnol tient l'imparfait beaucoup plus longtemps que nous.\n\nLa faute symétrique du francophone est d'employer l'imperfecto pour ce qui fait avancer le récit. Ayer llovía todo el día ne se dit pas si l'on veut dire qu'il a plu et que c'est fini : il faut llovió.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le résumé de film : deux temps différents",
              colonnes: [
                {
                  titre: "Espagnol : imparfait",
                  points: [
                    "En la película, el protagonista era un espía.",
                  ],
                },
                {
                  titre: "Français : présent",
                  points: [
                    "Dans le film, le personnage principal est un espion.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le plus-que-parfait, et l'erreur d'en mettre partout",
          texte:
            "Le pluscuamperfecto — había llegado — sert à une seule chose : signaler qu'un fait précède un moment déjà passé. Cuando llegué, ya se había ido.\n\nLa faute la plus répandue chez les francophones avancés est d'en mettre partout. Si les événements sont racontés dans l'ordre, l'indefinido suffit : terminó el café y se fue. Employer le plus-que-parfait ici suggérerait à tort qu'on remonte le temps.\n\nÀ l'inverse, l'omettre crée une vraie ambiguïté. Cuando llegué, se fue dit qu'elle est partie après mon arrivée ; cuando llegué, se había ido dit qu'elle était déjà partie. Les deux phrases sont correctes et racontent des histoires opposées.\n\nUn dernier point propre à l'espagnol : la concordance des temps est stricte dans le discours rapporté. Dijo que vendría, et non « dijo que vendrá ». Le français relâche volontiers cette règle à l'oral ; l'espagnol beaucoup moins, et l'écart s'entend.",
          visuels: [
            {
              type: "etapes",
              titre: "Choisir son temps",
              etapes: [
                {
                  titre: "L'action fait-elle avancer le récit ?",
                  texte: "Si oui, indefinido. C'est le cas par défaut, et il couvre la majorité des verbes d'un récit.",
                },
                {
                  titre: "Décrit-elle un décor, une habitude, une politesse ?",
                  texte: "Alors imperfecto, y compris pour adoucir une demande : quería preguntarte algo.",
                },
                {
                  titre: "Remonte-t-elle avant un moment déjà passé ?",
                  texte: "Pluscuamperfecto, mais seulement si l'ordre du récit est rompu.",
                },
              ],
            },
          ],
        },
      ],
    },
    cartes: [
      {
        etranger: "Llovía cuando salí de casa.",
        francais: "Il pleuvait quand je suis sorti.",
        note: "L'imperfecto plante le décor, l'indefinido apporte l'événement.",
      },
      {
        etranger: "Nadie sabía lo que había pasado.",
        francais: "Personne ne savait ce qui s'était passé.",
        note: "Le pluscuamperfecto dans une subordonnée : l'événement précède le moment du récit.",
      },
      {
        etranger: "Terminó el café y se fue.",
        francais: "Il a fini son café et il est parti.",
        note: "Deux indefinidos suffisent : l'ordre du récit suit l'ordre des faits.",
      },
      {
        etranger: "Íbamos allí todos los veranos.",
        francais: "Nous y allions chaque été.",
        note: "L'imperfecto dit l'habitude passée, comme l'imparfait français.",
      },
      {
        etranger: "Quería preguntarte algo.",
        francais: "Je voulais te demander quelque chose.",
        note: "Imparfait de politesse : le passé n'a ici aucune valeur temporelle.",
      },
      {
        etranger: "Creía que venías mañana.",
        francais: "Je croyais que tu venais demain.",
        note: "L'imperfecto rapporte ce qu'on avait compris. Le mañana montre qu'il ne s'agit pas du passé.",
      },
      {
        etranger: "Esta semana he ido tres veces.",
        francais: "Cette semaine, j'y suis allé trois fois.",
        note: "En Espagne, le perfecto pour une période en cours. En Amérique latine, on dirait fui.",
      },
      {
        etranger: "El año pasado trabajé en Madrid.",
        francais: "L'an dernier, j'ai travaillé à Madrid.",
        note: "Période close : l'indefinido s'impose des deux côtés de l'Atlantique.",
      },
      {
        etranger: "Dijo que vendría al día siguiente.",
        francais: "Il a dit qu'il viendrait le lendemain.",
        note: "Concordance stricte dans le discours rapporté : dijo que vendría, jamais vendrá.",
      },
      {
        etranger: "Llevaba una hora esperando.",
        francais: "Elle attendait depuis une heure.",
        note: "Llevar + durée + gérondif : la durée qui court jusqu'au moment du récit.",
      },
    ],
  },

  {
    slug: "es-c1-diplomacia",
    category: "Vocabulaire",
    title: "Relations internationales",
    statement:
      "Lamentar, deplorar, condenar, instar. Le langage diplomatique hispanophone est une échelle de gravité codifiée, et chaque verbe y occupe un barreau précis.",
    tip: "Du plus faible au plus fort : tomar nota, lamentar, deplorar, condenar. Un communiqué qui passe de lamentar à deplorar vient de durcir sa position.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "El consejo deploró el ataque.",
        francais: "Le conseil a déploré l'attaque.",
        note: "Deplorar est plus fort que lamentar, plus faible que condenar. L'échelle est codifiée.",
      },
      {
        etranger: "Instaron a ambas partes a la moderación.",
        francais: "Ils ont exhorté les deux parties à la retenue.",
        note: "Instar a alguien a algo, exhorter. Ambas partes, les deux parties.",
      },
      {
        etranger: "Las negociaciones se rompieron por la cuestión fronteriza.",
        francais: "Les négociations ont échoué sur la question des frontières.",
        aussi: ["Les pourparlers ont achoppé sur les frontières."],
        note: "Romperse unas negociaciones, échouer ; el escollo, l'achoppement.",
      },
      {
        etranger: "Las sanciones se levantaron en marzo.",
        francais: "Les sanctions ont été levées en mars.",
        note: "Levantar sanciones, lever. Imponer, les instaurer. Suavizar, les alléger.",
      },
      {
        etranger: "El embajador fue llamado a consultas.",
        francais: "L'ambassadeur a été rappelé pour consultations.",
        note: "Llamar a consultas est la formule qui signale une crise sans rompre les relations.",
      },
      {
        etranger: "Ambos Estados reanudaron relaciones.",
        francais: "Les deux États ont rétabli leurs relations.",
        note: "Reanudar, reprendre. Romper relaciones, les rompre. Estado prend une majuscule ici.",
      },
      {
        etranger: "La reforma salió adelante con tres abstenciones.",
        francais: "La réforme a été adoptée avec trois abstentions.",
        note: "Salir adelante se dit d'un texte, d'une loi — pas du vote lui-même. Una abstención ne compte ni pour ni contre.",
      },
      {
        etranger: "El acuerdo no es vinculante.",
        francais: "L'accord n'a pas de valeur contraignante.",
        note: "Vinculante, contraignant en droit. Un texte no vinculante engage la parole, pas les tribunaux.",
      },
      {
        etranger: "La cumbre terminó sin comunicado.",
        francais: "Le sommet s'est achevé sans communiqué.",
        note: "Una cumbre, un sommet. L'absence de communiqué final dit le désaccord.",
      },
      {
        etranger: "Pidieron la dimisión del Gobierno.",
        francais: "Ils ont demandé la démission du gouvernement.",
        note: "Pedir la dimisión de alguien, réclamer sa démission. Dimitir se dit d'une personne, jamais d'un régime.",
      },
    ],
  },

  {
    slug: "es-c1-marketing",
    category: "Travail et études",
    title: "Marque et audience",
    statement:
      "Alcance, interacción, embudo, fuga. L'espagnol traduit le vocabulaire du marketing là où le français emprunte, et il faut connaître les deux registres.",
    tip: "El alcance est le nombre de personnes touchées, la interacción celui de celles qui ont réagi. Confondre les deux fausse toute lecture d'un tableau de bord.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "La campaña tuvo poco alcance.",
        francais: "La campagne a touché peu de monde.",
        aussi: ["La campagne a eu une faible portée."],
        note: "El alcance, le nombre de personnes touchées au moins une fois.",
      },
      {
        etranger: "La interacción bajó tras el rediseño.",
        francais: "L'interaction a chuté après la refonte.",
        aussi: ["Le taux d'engagement a baissé après la refonte."],
        note: "La interacción mesure les réactions, pas l'exposition. El rediseño, la refonte graphique.",
      },
      {
        etranger: "Perdemos usuarios en el segundo paso.",
        francais: "Nous perdons des utilisateurs à la deuxième étape.",
        note: "El embudo de conversión décrit ce parcours ; chaque paso a son taux d'abandon.",
      },
      {
        etranger: "La fuga de clientes es del cinco por ciento.",
        francais: "Le taux de résiliation est de cinq pour cent.",
        aussi: ["L'attrition atteint cinq pour cent."],
        note: "La fuga de clientes traduit churn. La tasa de bajas se dit aussi.",
      },
      {
        etranger: "La marca se reposicionó en la gama alta.",
        francais: "La marque s'est repositionnée sur le haut de gamme.",
        note: "La gama alta, le haut de gamme. La gama baja dit l'inverse.",
      },
      {
        etranger: "Estamos probando dos versiones del titular.",
        francais: "Nous testons deux versions du titre.",
        note: "El titular, le titre d'un article ou d'une annonce. Probar, tester.",
      },
      {
        etranger: "El boca a boca hizo el resto.",
        francais: "Le bouche-à-oreille a fait le reste.",
        note: "El boca a boca, sans trait d'union en espagnol. La formule est figée.",
      },
      {
        etranger: "El lanzamiento se aplazó un trimestre.",
        francais: "Le lancement a été repoussé d'un trimestre.",
        note: "Aplazar, repousser dans le temps. Adelantar dit l'inverse.",
      },
      {
        etranger: "Su presentación no caló.",
        francais: "Leur présentation n'a pas pris.",
        aussi: ["Leur argumentaire est tombé à plat."],
        note: "Calar, faire son effet en profondeur. La négation est l'emploi le plus fréquent.",
      },
      {
        etranger: "Hacemos seguimiento semanal.",
        francais: "Nous suivons cet indicateur chaque semaine.",
        note: "Hacer seguimiento, assurer un suivi. Le nom seguimiento est très employé en entreprise.",
      },
    ],
  },

  {
    slug: "es-c1-filosofia",
    category: "Vocabulaire",
    title: "Idées, croyances et morale",
    statement:
      "Sostener, entrañar, avalar, plantear. Les verbes du raisonnement philosophique espagnol ont un sens technique strict, et leur sens courant induit en erreur.",
    tip: "Una tesis est une thèse soutenue, un planteamiento la façon dont on pose un problème. Ces deux mots structurent tout l'écrit universitaire hispanophone.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Sostiene que la libertad exige igualdad.",
        francais: "Il soutient que la liberté suppose l'égalité.",
        note: "Sostener que, soutenir une thèse. Le verbe est courant dans tout l'écrit philosophique.",
      },
      {
        etranger: "La tesis es difícil de defender.",
        francais: "La thèse est difficile à défendre.",
        note: "Difícil de + infinitif, sans pronom. Una tesis est aussi le mémoire de doctorat.",
      },
      {
        etranger: "Eso no entraña lo que usted cree.",
        francais: "Cela n'implique pas ce que vous croyez.",
        note: "Entrañar, impliquer logiquement. Causar dirait la causalité, ce qui est autre chose.",
      },
      {
        etranger: "Las pruebas no avalan esa conclusión.",
        francais: "Les preuves ne justifient pas cette conclusion.",
        note: "Avalar, cautionner, appuyer. Un aval est une garantie, financière ou intellectuelle.",
      },
      {
        etranger: "La distinción se desmorona al examinarla.",
        francais: "La distinction s'effondre à l'examen.",
        note: "Desmoronarse, s'effriter. Al + infinitif traduit « en » ou « à » suivi d'un nom d'action.",
      },
      {
        etranger: "Esto es una petición de principio.",
        francais: "C'est une pétition de principe.",
        aussi: ["Le raisonnement est circulaire."],
        note: "Petición de principio, le terme exact du sophisme. Le calque anglais n'a pas cours ici.",
      },
      {
        etranger: "El argumento parte de una premisa falsa.",
        francais: "L'argument repose sur une prémisse fausse.",
        note: "Partir de, reposer sur. Una premisa, une prémisse.",
      },
      {
        etranger: "Estableció una distinción tajante.",
        francais: "Il a établi une distinction nette.",
        note: "Tajante, tranchant. L'adjectif vient de tajar, trancher.",
      },
      {
        etranger: "Es una diferencia de grado, no de naturaleza.",
        francais: "C'est une différence de degré, non de nature.",
        note: "De grado contre de naturaleza : l'opposition classique de tout raisonnement philosophique.",
      },
      {
        etranger: "La objeción no da en el clavo.",
        francais: "L'objection passe à côté du problème.",
        note: "Dar en el clavo, taper juste. La négation dit qu'on manque l'essentiel.",
      },
    ],
  },

  {
    slug: "es-c2-registro",
    category: "Expressions",
    title: "Choisir son registre à l'écrit",
    statement:
      "Conseguir, obtener, lograr, alcanzar. L'espagnol a quatre verbes pour ce que le français dit avec « obtenir », et le choix entre eux fait tout le registre.",
    tip: "Conseguir est neutre et convient partout. Obtener sonne administratif, lograr souligne l'effort, alcanzar suppose une cible chiffrée.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Necesitamos conseguir más datos.",
        francais: "Il nous faut plus de données.",
        note: "Conseguir est neutre et convient partout. Obtener, ici, sonnerait administratif.",
      },
      {
        etranger: "Logró terminar el proyecto a tiempo.",
        francais: "Il a réussi à terminer le projet à temps.",
        note: "Lograr souligne l'effort fourni pour obtenir le résultat, à la différence de conseguir, neutre.",
      },
      {
        etranger: "Necesita obtener un permiso especial.",
        francais: "Il doit obtenir une autorisation spéciale.",
        note: "Obtener sonne administratif : le mot des formulaires et des démarches.",
      },
      {
        etranger: "La decisión se revocó posteriormente.",
        francais: "La décision a par la suite été annulée.",
        note: "Posteriormente appartient à l'écrit formel. À l'oral, on dirait después ou luego.",
      },
      {
        etranger: "Lo arreglamos mañana y ya está.",
        francais: "On règle ça demain et c'est bon.",
        note: "Arreglar est familier et parfaitement idiomatique. Resolver serait raide entre collègues.",
      },
      {
        etranger: "Los resultados se exponen a continuación.",
        francais: "Les résultats sont exposés ci-dessous.",
        note: "A continuación, ci-après. La tournure pronominale évite le nous, comme dans tout l'écrit formel.",
      },
      {
        etranger: "Cualquier comentario será bienvenido.",
        francais: "Toute remarque sera la bienvenue.",
        aussi: ["Vos retours seront les bienvenus."],
        note: "Poli sans être guindé : le juste milieu du courriel professionnel.",
      },
      {
        etranger: "El asunto ya está tramitado.",
        francais: "L'affaire a été traitée.",
        note: "Tramitar, traiter un dossier administratif. Un trámite, une démarche.",
      },
      {
        etranger: "La empresa alcanzó los objetivos previstos.",
        francais: "L'entreprise a atteint les objectifs prévus.",
        note: "Alcanzar suppose une cible fixée d'avance, souvent chiffrée.",
      },
      {
        etranger: "Se ruega abstenerse de fumar.",
        francais: "Merci de vous abstenir de fumer.",
        note: "Se ruega + infinitif appartient à l'écriteau. À l'oral, la formule sonne franchement sèche.",
      },
    ],
  },

  {
    slug: "es-c2-ambiguedad",
    category: "Pièges du français",
    title: "Les phrases qui disent deux choses",
    statement:
      "L'espagnol omet les pronoms sujets et déplace librement : deux libertés qui produisent des ambiguïtés que le français ne connaît pas.",
    tip: "Sans pronom sujet, la troisième personne du singulier peut désigner él, ella ou usted. C'est la source d'ambiguïté la plus fréquente, et l'espagnol ne la lève que par le contexte.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Ayer llamó y no dejó recado.",
        francais: "Il a appelé hier et n'a pas laissé de message.",
        aussi: ["Elle a appelé hier et n'a pas laissé de message."],
        note: "Sans pronom sujet, la troisième personne ne dit ni le genre ni s'il s'agit d'un vouvoiement.",
      },
      {
        etranger: "Vio a la mujer con el telescopio.",
        francais: "Il a vu la femme au télescope.",
        aussi: ["Il a vu la femme qui tenait un télescope."],
        note: "Le complément peut porter sur le verbe ou sur le nom. L'espagnol ne tranche pas.",
      },
      {
        etranger: "Le dijo a su hermano que su coche estaba roto.",
        francais: "Il a dit à son frère que sa voiture était en panne.",
        note: "Su renvoie à l'un ou à l'autre. Pour lever le doute : el coche de este, la voiture de ce dernier.",
      },
      {
        etranger: "Solo la vi el martes.",
        francais: "Je ne l'ai vue que mardi.",
        aussi: ["Mardi, je n'ai vu qu'elle."],
        note: "Solo porte sur ce qui suit ou sur toute la phrase. Le déplacer lève le doute.",
      },
      {
        etranger: "Encontró a la niña llorando.",
        francais: "Il a trouvé la petite fille en pleurs.",
        aussi: ["Il a trouvé la petite fille alors qu'il pleurait."],
        note: "Le gérondif peut se rattacher au sujet ou au complément. Ambiguïté classique.",
      },
      {
        etranger: "Los alumnos que aprobaron se fueron.",
        francais: "Les élèves qui ont réussi sont partis.",
        aussi: ["Les élèves, qui avaient réussi, sont partis."],
        note: "Sans virgules, la relative détermine ; avec, elle explique. La ponctuation fait tout.",
      },
      {
        etranger: "No vino porque tuviera miedo.",
        francais: "Il n'est pas venu parce qu'il aurait eu peur.",
        note: "Le subjonctif nie la cause : ce n'est pas la peur qui l'a retenu. Avec tenía, il aurait eu peur.",
      },
      {
        etranger: "Ha dejado de fumar en la oficina.",
        francais: "Il a arrêté de fumer au bureau.",
        aussi: ["Il ne fume plus lorsqu'il est au bureau."],
        note: "En la oficina peut porter sur dejar ou sur fumar. Deux histoires différentes.",
      },
      {
        etranger: "Se lo dije a Juan.",
        francais: "Je l'ai dit à Juan.",
        note: "Se remplace le à Juan par euphonie devant lo. La reprise a Juan lève l'ambiguïté du se.",
      },
      {
        etranger: "Bebió medio litro de agua fría.",
        francais: "Il a bu un demi-litre d'eau froide.",
        aussi: ["Il a bu la moitié d'un litre d'eau, qui était froide."],
        note: "L'adjectif peut porter sur agua ou sur litro. La prosodie tranche à l'oral, pas à l'écrit.",
      },
    ],
  },
];
