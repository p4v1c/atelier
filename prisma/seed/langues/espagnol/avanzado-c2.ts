/**
 * Espagnol — le C1 élargi, et le C2 qui n'existait pas.
 *
 * Le module s'arrêtait au C1, et son C1 tenait en sept séries : de quoi
 * nuancer et argumenter, pas de quoi lire un roman ou entendre une pique.
 *
 * Le C2 n'est pas « du C1 en plus difficile ». La langue y cesse d'être un
 * instrument pour devenir un objet : on apprend ce qu'une phrase fait en plus
 * de ce qu'elle dit. En espagnol, cela passe beaucoup par le diminutif, le
 * subjonctif et l'ordre des mots — trois outils qui n'ont pas d'équivalent
 * direct en français et qui portent l'essentiel du ton.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_AVANZADO_C2: LotCartes[] = [
  {
    slug: "es-c1-economia",
    category: "Vocabulaire",
    title: "L'économie et les chiffres",
    statement:
      "Crecimiento, recorte, deuda, cotizar. Lire la presse économique hispanophone demande une centaine de mots que personne n'enseigne, et qui reviennent tous les jours.",
    tip: "Un ingreso est une recette, pas un ingrédient ; una renta est un revenu. Ces deux mots reviennent dans tous les articles et n'ont pas le sens qu'on leur prête.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "El crecimiento se frenó en el segundo trimestre.",
        francais: "La croissance a ralenti au deuxième trimestre.",
        note: "Frenarse, ralentir. El trimestre se compte de un à cuatro dans l'exercice comptable.",
      },
      {
        etranger: "La empresa registró beneficios récord.",
        francais: "L'entreprise a affiché un bénéfice record.",
        aussi: ["La société a publié des bénéfices records."],
        note: "Los beneficios, les bénéfices — souvent au pluriel. Registrar, enregistrer un résultat.",
      },
      {
        etranger: "La inflación se está comiendo los salarios.",
        francais: "L'inflation grignote les salaires.",
        aussi: ["L'inflation érode les salaires."],
        note: "Comerse algo, le grignoter. L'image est la même qu'en français.",
      },
      {
        etranger: "Están fuertemente endeudados.",
        francais: "Ils sont lourdement endettés.",
        note: "Endeudarse, s'endetter. La deuda, la dette — le d se prononce, contrairement à l'anglais.",
      },
      {
        etranger: "El banco subió los tipos de interés.",
        francais: "La banque a relevé les taux d'intérêt.",
        aussiEtranger: ["El banco subió las tasas de interés."],
        note: "Los tipos de interés en Espagne, las tasas de interés en Amérique latine.",
      },
      {
        etranger: "La empresa quebró el invierno pasado.",
        francais: "L'entreprise a fait faillite l'hiver dernier.",
        aussi: ["La société a déposé le bilan l'hiver dernier."],
        note: "Quebrar, faire faillite. La quiebra, la faillite. Le concurso de acreedores est la procédure.",
      },
      {
        etranger: "La demanda superó a la oferta.",
        francais: "La demande a dépassé l'offre.",
        note: "L'espagnol dit la oferta y la demanda, dans l'ordre inverse de l'anglais.",
      },
      {
        etranger: "Hay que recortar los gastos fijos.",
        francais: "Il faut réduire les frais fixes.",
        aussi: ["Nous devons réduire les charges fixes."],
        note: "Un recorte, une coupe budgétaire. Le mot domine le vocabulaire politique espagnol.",
      },
      {
        etranger: "El acuerdo se cayó a última hora.",
        francais: "L'accord a échoué au dernier moment.",
        aussi: ["L'accord a capoté au dernier moment."],
        note: "Caerse un acuerdo, tomber à l'eau. A última hora, au dernier moment.",
      },
      {
        etranger: "Las acciones se desplomaron con la noticia.",
        francais: "L'action a chuté brutalement à cette annonce.",
        aussi: ["Le titre s'est effondré à cette nouvelle."],
        note: "Desplomarse, s'effondrer. Cotizar, être coté en bourse.",
      },
    ],
  },

  {
    slug: "es-c1-psicologia",
    category: "Vocabulaire",
    title: "États d'esprit et comportements",
    statement:
      "Sobrellevar, darle vueltas, desahogarse, venirse abajo. L'espagnol dit en un verbe ce que le français met en périphrase, et ces verbes changent immédiatement le niveau.",
    tip: "Beaucoup sont pronominaux et changent de sens en perdant le pronom : venir, venir ; venirse abajo, s'effondrer.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Sobrelleva bien la presión.",
        francais: "Elle gère bien la pression.",
        aussi: ["Elle supporte bien la pression."],
        note: "Sobrellevar, supporter dans la durée. Le préfixe sobre- dit le poids qu'on porte.",
      },
      {
        etranger: "No le des más vueltas.",
        francais: "Ne rumine pas.",
        aussi: ["Ne te repasse pas ça en boucle."],
        note: "Dar vueltas a algo, tourner et retourner une idée. Très employé à l'oral.",
      },
      {
        etranger: "Se desahogó con sus compañeros.",
        francais: "Il s'est confié à ses collègues.",
        aussi: ["Il a vidé son sac auprès de ses collègues."],
        note: "Desahogarse, se soulager en parlant. Le mot vient de ahogarse, se noyer.",
      },
      {
        etranger: "Me bloqueo cuando me desbordan.",
        francais: "Je me bloque quand je suis débordé.",
        aussi: ["Je me ferme quand je suis submergé."],
        note: "Desbordar, déborder au sens propre comme au figuré.",
      },
      {
        etranger: "Es una decisión muy sensata.",
        francais: "C'est une décision très raisonnable.",
        aussi: ["C'est une décision pleine de bon sens."],
        note: "Sensato, raisonnable ; sensible, sensible. Le couple reproduit le faux ami anglais.",
      },
      {
        etranger: "Poco a poco lo va asumiendo.",
        francais: "Il commence peu à peu à l'accepter.",
        aussi: ["Il fait peu à peu son deuil de la situation."],
        note: "Asumir algo, accepter au terme d'un travail intérieur. Ir + gérondif dit le progrès.",
      },
      {
        etranger: "Se lo guarda todo dentro.",
        francais: "Elle garde tout pour elle.",
        aussi: ["Elle refoule tout."],
        note: "Guardarse algo dentro, tout garder à l'intérieur. Le pronom réfléchi est indispensable.",
      },
      {
        etranger: "Dudo de todo lo que decido.",
        francais: "Je doute de tout ce que je décide.",
        aussi: ["Je remets sans cesse mes choix en question."],
        note: "Dudar de algo, douter de. Dudar en + infinitif dirait hésiter à faire.",
      },
      {
        etranger: "Se convenció a sí mismo.",
        francais: "Il s'est convaincu tout seul.",
        note: "A sí mismo insiste sur la réflexivité, que le pronom seul ne marque pas assez.",
      },
      {
        etranger: "Se vino abajo después del examen.",
        francais: "Il s'est effondré après l'examen.",
        aussi: ["Il a craqué après l'examen."],
        note: "Venirse abajo, s'effondrer moralement. Sans le pronom, venir abajo se dit d'un bâtiment.",
      },
    ],
  },

  {
    slug: "es-c1-negociacion",
    category: "Travail et études",
    title: "Négocier sans se découvrir",
    statement:
      "Te entiendo, punto medio, dejarlo encima de la mesa. Une négociation en espagnol se joue sur des formules toutes faites, et employer la mauvaise revient à céder sans le vouloir.",
    tip: "« Te entiendo » n'est pas un accord : c'est un accusé de réception. Le prendre pour un oui est l'erreur la plus coûteuse d'une réunion.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Te entiendo, pero el presupuesto está cerrado.",
        francais: "J'entends bien, mais le budget est arrêté.",
        aussi: ["Je comprends, mais le budget est figé."],
        note: "Te entiendo accuse réception sans concéder. Ce n'est jamais un accord.",
      },
      {
        etranger: "Busquemos un punto medio.",
        francais: "Coupons la poire en deux.",
        aussi: ["Trouvons un compromis à mi-chemin."],
        note: "Un punto medio, un terrain d'entente. Un término medio se dit aussi.",
      },
      {
        etranger: "Quisiera objetar en ese punto.",
        francais: "Je voudrais objecter là-dessus.",
        aussi: ["Je souhaite contester ce point."],
        note: "Quisiera, imparfait du subjonctif employé comme conditionnel de politesse.",
      },
      {
        etranger: "Es nuestra última oferta.",
        francais: "C'est notre dernière proposition.",
        note: "L'annoncer sans y tenir détruit la crédibilité, en espagnol comme ailleurs.",
      },
      {
        etranger: "Estamos dispuestos a levantarnos de la mesa.",
        francais: "Nous sommes prêts à quitter la table.",
        aussi: ["Nous sommes prêts à renoncer à l'accord."],
        note: "Levantarse de la mesa, se retirer d'une négociation. C'est le levier ultime.",
      },
      {
        etranger: "¿Podemos dejarlo encima de la mesa?",
        francais: "Peut-on laisser ce point en suspens ?",
        aussi: ["Peut-on remettre ce sujet à plus tard ?"],
        note: "Dejar algo encima de la mesa, le laisser ouvert. Attention : l'anglais to table a le sens inverse.",
      },
      {
        etranger: "¿Qué haría falta para cerrarlo?",
        francais: "Que faudrait-il pour conclure ?",
        note: "Hacer falta, falloir. Cerrar un acuerdo, conclure.",
      },
      {
        etranger: "No estoy en condiciones de comprometerme.",
        francais: "Je ne suis pas en mesure de m'engager.",
        note: "Estar en condiciones de, être en mesure de. Comprometerse, s'engager — pas compromettre.",
      },
      {
        etranger: "Déjame consultarlo con mi equipo.",
        francais: "Laissez-moi en parler à mon équipe.",
        aussi: ["Je dois en référer à mon équipe."],
        note: "Consultar algo con alguien, soumettre pour avis. Gagne du temps sans fermer la porte.",
      },
      {
        etranger: "En lo esencial estamos de acuerdo.",
        francais: "Nous sommes d'accord sur l'essentiel.",
        note: "En lo esencial dit l'accord tout en réservant le détail. Formule de sortie de réunion.",
      },
    ],
  },

  {
    slug: "es-c1-tecnologia",
    category: "Vocabulaire",
    title: "Technique et défaillance",
    statement:
      "Desplegar, revertir, obsoleto, apaño. L'espagnol technique traduit là où l'anglais emprunte, et connaître les deux registres est indispensable pour travailler.",
    tip: "Un fallo est un défaut, une incidencia un problème signalé. La distinction structure tout le vocabulaire du dépannage.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Desplegamos la actualización anoche.",
        francais: "Nous avons déployé la mise à jour cette nuit.",
        note: "Desplegar, déployer. Le contraire est revertir, revenir en arrière.",
      },
      {
        etranger: "Tuvieron que revertir la versión.",
        francais: "Ils ont dû revenir à la version précédente.",
        aussi: ["Ils ont dû annuler la mise en production."],
        note: "Revertir una versión. Une version livrée est una versión ou una release.",
      },
      {
        etranger: "Ese método está obsoleto.",
        francais: "Cette méthode est obsolète.",
        aussi: ["Cette méthode est dépréciée."],
        note: "Obsoleto dit « encore là mais à ne plus employer ». Ce n'est pas eliminado.",
      },
      {
        etranger: "De momento hay un apaño.",
        francais: "Il y a un bricolage pour l'instant.",
        aussi: ["Il existe une solution de contournement provisoire."],
        note: "Un apaño est familier ; le registre soutenu dit una solución provisional.",
      },
      {
        etranger: "El servidor se cayó a mediodía.",
        francais: "Le serveur est tombé à midi.",
        note: "Caerse un servidor, tomber en panne. La caída, l'indisponibilité.",
      },
      {
        etranger: "¿Puedes reproducir el fallo?",
        francais: "Arrivez-vous à reproduire le problème ?",
        note: "Un fallo en Espagne, una falla en Amérique latine. Reproduire est la première question du dépannage.",
      },
      {
        etranger: "En mi máquina funciona.",
        francais: "Chez moi, ça marche.",
        note: "La phrase la plus célèbre du métier, et rarement un argument recevable.",
      },
      {
        etranger: "Hay que escalarlo.",
        francais: "Il faut passer à l'échelle supérieure.",
        aussi: ["Il faut monter en charge."],
        note: "Escalar dit aussi bien la montée en charge que l'escalade d'un incident : le contexte tranche.",
      },
      {
        etranger: "La función está detrás de un interruptor.",
        francais: "La fonctionnalité est derrière un interrupteur.",
        aussi: ["La fonctionnalité est activable à la demande."],
        note: "Un interruptor de función traduit feature flag ; l'anglais reste plus courant à l'oral.",
      },
      {
        etranger: "Lo sacamos y luego lo pulimos.",
        francais: "Livrons-le et améliorons ensuite.",
        aussi: ["Mettons-le en production, on affinera après."],
        note: "Sacar algo, sortir un produit. Pulir, peaufiner.",
      },
    ],
  },

  {
    slug: "es-c2-ironia",
    category: "Expressions",
    title: "L'ironie et le diminutif",
    statement:
      "« Menudo lío » veut dire un beau bazar. « Ya, claro » veut dire je n'en crois rien. L'espagnol dit souvent le contraire de ce qu'il pense, et le diminutif en est l'outil principal.",
    tip: "Le diminutif espagnol n'est presque jamais une affaire de taille : il porte l'affection, la minimisation ou le mépris selon la situation. « Un problemita » peut être une catastrophe.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cours: {
      titre: "Le diminutif, l'ironie et ce qu'ils font au sens",
      sections: [
        {
          titre: "Le diminutif n'est pas une taille",
          texte:
            "Le suffixe -ito, -ita est l'outil le plus employé de l'espagnol parlé, et le plus mal compris des francophones, qui le lisent comme un « petit ».\n\nIl dit rarement la dimension. Un cafecito n'est pas un café plus petit : c'est un café pris avec quelqu'un, offert, sans façon. Ahorita ne dit pas « dans un tout petit moment » — au Mexique, il peut vouloir dire dans deux heures. Un momentito n'est pas plus court qu'un momento : il est plus poli.\n\nCe que le diminutif porte, c'est un rapport. Affection : mi hermanita, même si la sœur a quarante ans. Atténuation d'une demande : ¿me haces un favorcito? Minimisation stratégique : es un problemita, dit d'un problème qu'on préférerait ne pas voir grossir. Et parfois mépris, quand il s'applique à ce qui devrait être sérieux : un abogadito, un avocaillon.\n\nUn francophone qui traduit systématiquement par « petit » produit un contresens dans les quatre cas.",
          visuels: [
            {
              type: "tableau",
              titre: "Un suffixe, quatre intentions",
              colonnes: ["Forme", "Ce que ce n'est pas", "Ce que c'est"],
              lignes: [
                ["un cafecito", "un café plus petit", "un café partagé, sans façon"],
                ["un momentito", "un instant plus court", "la même attente, en plus poli"],
                ["un problemita", "un souci mineur", "un problème qu'on minimise"],
                ["un abogadito", "un jeune avocat", "un avocat qu'on méprise"],
              ],
              note: "Seul le contexte tranche. Le suffixe, lui, est le même dans les quatre cas.",
            },
          ],
        },
        {
          titre: "Les marqueurs d'ironie",
          texte:
            "L'espagnol dispose de formules quasi exclusivement ironiques, qu'on ne rencontre presque jamais au sens littéral.\n\nMenudo, menuda placé devant un nom en inverse la valeur. Menudo lío, un beau bazar ; menudo amigo, un drôle d'ami. Le mot signifie « menu, petit » : c'est une antiphrase figée.\n\nYa, claro et sí, claro, prononcés à plat, disent l'incrédulité. « Ya, claro, y yo me lo creo » ferme la discussion.\n\nSí, hombre et anda ya expriment le refus moqueur ; ni que fueras + nom introduit une comparaison absurde : ni que fueras el jefe, comme si tu étais le patron.\n\nEnfin, le futur d'hypothèse sert à l'ironie : serás tonto ne dit pas « tu seras bête » mais « tu es vraiment bête ». C'est une valeur du futur que le français n'a pas, et qui surprend même les hispanophones débutants.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même mot, deux emplois",
              colonnes: [
                {
                  titre: "Littéral",
                  points: [
                    "Un trozo menudo de pan.",
                    "Claro que sí, tienes razón.",
                    "Serás profesor algún día.",
                  ],
                },
                {
                  titre: "Ironique",
                  points: [
                    "¡Menudo lío has montado!",
                    "Ya, claro, y yo me lo creo.",
                    "¡Serás tonto!",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Entendre et produire",
          texte:
            "Comprendre l'ironie espagnole est indispensable ; la produire demande de la prudence, et pas pour les raisons qu'on croit.\n\nLe risque n'est pas de choquer : l'espagnol parlé est direct, et l'ironie y circule librement, y compris entre inconnus. Le risque est de ne pas être compris, parce que l'ironie repose sur une connivence de situation que l'on n'a pas encore avec ses interlocuteurs.\n\nDeux repères pratiques. D'abord, l'excès signale presque toujours l'antiphrase : un superlatif sur un fait banal — qué maravilla, estupendo — est ironique neuf fois sur dix. Ensuite, les formules figées ci-dessus sont sûres : elles n'ont pas d'emploi littéral, donc elles ne peuvent pas être mal comprises.\n\nÀ l'inverse, l'ironie construite — dire une chose en pensant l'autre sans marqueur — suppose que l'auditeur connaisse assez la situation pour rétablir. Employée trop tôt dans une relation, elle passe pour de la sottise ou de la méchanceté, exactement comme en français.",
          visuels: [
            {
              type: "etapes",
              titre: "Avant de lancer une pique",
              etapes: [
                {
                  titre: "La formule est-elle figée ?",
                  texte: "Menudo, ya claro, anda ya n'ont pas d'emploi littéral : le risque de contresens est nul.",
                },
                {
                  titre: "La situation est-elle connue des deux ?",
                  texte: "L'ironie construite demande une connivence. Sans elle, elle est prise au mot.",
                },
                {
                  titre: "Le registre s'y prête-t-il ?",
                  texte: "Dans un courriel administratif, l'antiphrase ne se lit pas : il n'y a ni ton ni visage.",
                },
              ],
            },
          ],
        },
      ],
    },
    cartes: [
      {
        etranger: "¡Menudo lío has montado!",
        francais: "Tu as mis un sacré bazar !",
        aussi: ["Quelle pagaille tu as semée !"],
        note: "Menudo signifie « menu » : devant un nom, il en inverse la valeur. Antiphrase figée.",
      },
      {
        etranger: "Ya, claro, y yo me lo creo.",
        francais: "Oui, bien sûr, et je vais te croire.",
        note: "Ya, claro prononcé à plat marque l'incrédulité, jamais l'accord.",
      },
      {
        etranger: "Vaya, qué maravilla.",
        francais: "Eh bien, quelle merveille.",
        aussi: ["Ah, magnifique, vraiment."],
        note: "Un superlatif sur un fait banal ou fâcheux est ironique neuf fois sur dix.",
      },
      {
        etranger: "Anda ya, no me digas.",
        francais: "Allons donc, tu m'étonnes.",
        aussi: ["Arrête, sans blague."],
        note: "Anda ya rejette ce qui vient d'être dit. Sans emploi littéral.",
      },
      {
        etranger: "Ni que fueras el jefe.",
        francais: "Non mais, tu te prends pour le patron.",
        aussi: ["On dirait que tu es le chef."],
        note: "Ni que + imparfait du subjonctif : comparaison absurde, toujours moqueuse.",
      },
      {
        etranger: "Es solo un problemita.",
        francais: "Ce n'est qu'un petit souci.",
        note: "Le diminutif minimise ce qu'on préfère ne pas voir grossir. Rarement une affaire de taille.",
      },
      {
        etranger: "Gracias por avisar, hombre.",
        francais: "Merci de m'avoir prévenu, tiens.",
        aussi: ["C'est gentil de m'avoir prévenu, vraiment."],
        note: "Se dit surtout quand personne n'a prévenu. Hombre en fin de phrase renforce le reproche.",
      },
      {
        etranger: "Sí, hombre, y encima gratis.",
        francais: "Bien sûr, et gratuitement en plus.",
        note: "Sí, hombre marque le refus moqueur, à l'opposé d'un accord.",
      },
      {
        etranger: "Como si eso lo hubiera parado alguna vez.",
        francais: "Comme si ça l'avait jamais arrêté.",
        note: "Como si demande toujours le subjonctif imparfait ou plus-que-parfait.",
      },
      {
        etranger: "Pues nada, todo controlado.",
        francais: "Eh bien voilà, tout est sous contrôle.",
        aussi: ["Parfait, tout va bien alors."],
        note: "Pues nada clôt une situation ratée. La formule est presque toujours résignée.",
      },
    ],
  },

  {
    slug: "es-c2-retorica",
    category: "Expressions",
    title: "Construire un argument",
    statement:
      "Cierto es que, dicho esto, tanto más cuanto que. Les articulations d'un raisonnement espagnol ne sont pas les nôtres, et traduire « cependant » par sin embargo à chaque fois se voit à la première ligne.",
    tip: "Un argument espagnol concède avant d'objecter, comme en français, mais avec des formules propres. Cierto es que… ahora bien… est plus fort qu'une objection frontale.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Cierto es que el método tiene límites.",
        francais: "Certes, la méthode a ses limites.",
        aussi: ["Il est vrai que la méthode a des limites."],
        note: "L'inversion cierto es que appartient à l'écrit soutenu. Es cierto que est plus neutre.",
      },
      {
        etranger: "Dicho esto, los resultados se sostienen.",
        francais: "Cela dit, les résultats tiennent.",
        aussi: ["Ceci étant, les résultats restent valables."],
        note: "Dicho esto articule la concession et la reprise. Plus souple que sin embargo.",
      },
      {
        etranger: "Hay que reconocer que la muestra era pequeña.",
        francais: "Il faut reconnaître que l'échantillon était réduit.",
        note: "Concéder une faiblesse désarme l'objection à venir. La muestra, l'échantillon.",
      },
      {
        etranger: "Tanto más cuanto que estamos en crisis.",
        francais: "D'autant plus que nous sommes en crise.",
        note: "Tanto más cuanto que, formule soutenue. À l'oral, on dit más aún si cabe.",
      },
      {
        etranger: "La cuestión no es si funciona.",
        francais: "La question n'est pas de savoir si cela marche.",
        note: "Déplacer le débat plutôt que le perdre. La cuestión no es… sino…",
      },
      {
        etranger: "Esto plantea una nueva pregunta.",
        francais: "Cela soulève une autre question.",
        aussi: ["Cela appelle une question supplémentaire."],
        note: "Plantear una pregunta, poser un problème. Le verbe est indispensable à l'écrit argumenté.",
      },
      {
        etranger: "Por la misma razón, lo contrario también vale.",
        francais: "Par le même raisonnement, l'inverse est vrai.",
        aussi: ["Selon la même logique, la réciproque est vraie."],
        note: "Por la misma razón applique un principe déjà admis à un nouveau cas.",
      },
      {
        etranger: "De ahí no se sigue que haya que parar.",
        francais: "Il ne s'ensuit nullement qu'il faille arrêter.",
        note: "Seguirse de algo, s'ensuivre. Le que amène le subjonctif après une négation.",
      },
      {
        etranger: "Lejos de zanjar el asunto, lo reabre.",
        francais: "Loin de trancher la question, cela la rouvre.",
        note: "Lejos de + infinitif, structure de renversement. Zanjar, trancher définitivement.",
      },
      {
        etranger: "En suma, el asunto dista de estar cerrado.",
        francais: "Bref, l'affaire est loin d'être close.",
        aussi: ["En somme, le dossier est loin d'être clos."],
        note: "Distar de, être loin de — verbe soutenu, très employé dans la presse sérieuse.",
      },
    ],
  },

  {
    slug: "es-c2-literario",
    category: "Vocabulaire",
    title: "Lire un roman espagnol",
    statement:
      "Ojear, otear, escudriñar, clavar la mirada. Là où le français dit « regarder », l'espagnol littéraire distingue la durée, l'intention et la distance — et un roman est illisible sans ces nuances.",
    tip: "Ojear et hojear ne diffèrent que par un h muet : ojear, c'est parcourir des yeux ; hojear, c'est feuilleter. Aucun correcteur ne les distingue.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Ojeó el reloj de reojo.",
        francais: "Elle jeta un coup d'œil furtif à sa montre.",
        note: "De reojo, du coin de l'œil. Ojear vient de ojo, hojear de hoja.",
      },
      {
        etranger: "Atisbó el mar entre los árboles.",
        francais: "Il entrevit la mer entre les arbres.",
        aussi: ["Il aperçut la mer entre les arbres."],
        note: "Atisbar, entrevoir fugitivement. Un atisbo, une lueur, une trace.",
      },
      {
        etranger: "Escudriñó la oscuridad.",
        francais: "Elle scruta l'obscurité.",
        note: "Escudriñar suppose l'effort et le soupçon. Otear, c'est scruter au loin.",
      },
      {
        etranger: "Le clavó la mirada, incrédulo.",
        francais: "Il la dévisagea, incrédule.",
        note: "Clavar la mirada, planter son regard. L'image du clou est explicite.",
      },
      {
        etranger: "Contemplaban el valle en silencio.",
        francais: "Ils contemplaient la vallée en silence.",
        note: "Contemplar est long et admiratif, à la différence de mirar fijamente.",
      },
      {
        etranger: "Se encogió de hombros y se marchó.",
        francais: "Il haussa les épaules et s'en alla.",
        note: "Encogerse de hombros : l'espagnol nomme les épaules là où l'anglais les sous-entend.",
      },
      {
        etranger: "Su voz se fue apagando.",
        francais: "Sa voix s'éteignit peu à peu.",
        aussi: ["Sa phrase resta en suspens."],
        note: "Ir + gérondif dit le progrès lent. Apagarse, s'éteindre, d'une voix comme d'une lumière.",
      },
      {
        etranger: "Hizo una mueca de dolor.",
        francais: "Il eut une grimace de douleur.",
        aussi: ["Il grimaça de douleur."],
        note: "Una mueca, une grimace. Estremecerse dit le tressaillement de tout le corps.",
      },
      {
        etranger: "La sala enmudeció.",
        francais: "La pièce se tut.",
        aussi: ["Le silence se fit dans la pièce."],
        note: "Enmudecer, devenir muet. Le préfixe en- fabrique des verbes de changement d'état.",
      },
      {
        etranger: "Se demoró en el umbral.",
        francais: "Elle s'attarda sur le seuil.",
        note: "Demorarse, s'attarder. El umbral, le seuil — au propre comme au figuré.",
      },
    ],
  },

  {
    slug: "es-c2-cientifico",
    category: "Vocabulaire",
    title: "L'écrit scientifique",
    statement:
      "Dar cuenta de, controlar por, arrojar, sostenerse. Les verbes de l'article scientifique hispanophone ont un sens technique précis, très éloigné de leur sens courant.",
    tip: "Significativo a ici un sens statistique strict. L'employer au sens d'important, comme en français courant, est la faute la plus visible d'un article traduit.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "El modelo da cuenta de la mayor parte de la varianza.",
        francais: "Le modèle explique l'essentiel de la variance.",
        aussi: ["Le modèle rend compte de la majeure partie de la variance."],
        note: "Dar cuenta de, expliquer une part. La expresión est figée dans l'écrit savant.",
      },
      {
        etranger: "Controlamos por edad e ingresos.",
        francais: "Nous avons neutralisé l'effet de l'âge et du revenu.",
        aussi: ["Nous avons contrôlé les variables d'âge et de revenu."],
        note: "Controlar por, tenir constant. Le e remplace y devant un mot commençant par i.",
      },
      {
        etranger: "El experimento arrojó resultados coherentes.",
        francais: "L'expérience a donné des résultats cohérents.",
        aussi: ["L'expérience a produit des résultats concordants."],
        note: "Arrojar, produire un résultat. Le sens courant de jeter n'a pas cours ici.",
      },
      {
        etranger: "El hallazgo se sostiene en todas las muestras.",
        francais: "Le résultat se vérifie sur tous les échantillons.",
        aussi: ["Le constat reste valable d'un échantillon à l'autre."],
        note: "Un hallazgo, une découverte. Sostenerse, tenir, rester valide.",
      },
      {
        etranger: "La diferencia no fue significativa.",
        francais: "La différence n'était pas significative.",
        note: "Significativo a ici un sens statistique strict, pas celui d'important.",
      },
      {
        etranger: "Estos resultados concuerdan con trabajos previos.",
        francais: "Ces résultats concordent avec les travaux antérieurs.",
        note: "Concordar con, la formule consacrée. Previo est préféré à anterior dans ce sens.",
      },
      {
        etranger: "Se requieren más estudios para confirmarlo.",
        francais: "D'autres travaux sont nécessaires pour le confirmer.",
        note: "La tournure pronominale évite le nous et clôt presque toutes les discussions d'article.",
      },
      {
        etranger: "No podemos descartar un factor de confusión.",
        francais: "Nous ne pouvons exclure un facteur de confusion.",
        note: "Descartar, écarter une hypothèse. Un factor de confusión brouille la relation observée.",
      },
      {
        etranger: "La muestra se tomó al azar.",
        francais: "L'échantillon a été tiré au hasard.",
        aussi: ["L'échantillon a été constitué aléatoirement."],
        note: "Al azar, au hasard. Tomar una muestra, prélever un échantillon.",
      },
      {
        etranger: "La correlación no implica causalidad.",
        francais: "La corrélation n'implique pas la causalité.",
        note: "La formule est figée : la citer autrement se remarque immédiatement.",
      },
    ],
  },
];
