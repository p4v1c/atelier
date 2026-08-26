/**
 * Anglais — le C1 élargi, et le C2 qui n'existait pas.
 *
 * Le module s'arrêtait au C1, et son C1 tenait en sept séries : de quoi
 * nuancer et argumenter, pas de quoi lire un roman ou entendre une pique.
 *
 * Le C2 n'est pas « du C1 en plus difficile ». C'est autre chose : la langue
 * cesse d'être un instrument pour devenir un objet. On y apprend ce qu'une
 * phrase fait en plus de ce qu'elle dit — l'ironie, la litote, le rythme, la
 * figure. Un francophone très bon en anglais peut manquer tout cela sans s'en
 * apercevoir, puisque le sens littéral, lui, passe.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_AVANCE_C2: LotCartes[] = [
  {
    slug: "en-c1-economie",
    category: "Vocabulaire",
    title: "L'économie et les chiffres",
    statement:
      "Growth, downturn, leverage, hedge. Lire la presse économique anglophone demande une centaine de mots que personne n'enseigne, et qui reviennent tous les jours.",
    tip: "Attention aux faux amis : an economy est une économie nationale, savings sont les économies qu'on met de côté. Benefit n'est pas le bénéfice, qui se dit profit.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Growth slowed in the second quarter.",
        francais: "La croissance a ralenti au deuxième trimestre.",
        note: "A quarter, un trimestre. L'année fiscale se découpe en Q1 à Q4.",
      },
      {
        etranger: "The company posted a record profit.",
        francais: "L'entreprise a affiché un bénéfice record.",
        aussi: ["L'entreprise a publié un bénéfice record."],
        note: "Post a profit, publier un résultat. Benefit ne veut jamais dire bénéfice comptable.",
      },
      {
        etranger: "Inflation is eating into wages.",
        francais: "L'inflation grignote les salaires.",
        aussi: ["L'inflation érode les salaires."],
        note: "Eat into, entamer peu à peu. Wages pour les salaires ouvriers, salary pour les cadres.",
      },
      {
        etranger: "They are heavily in debt.",
        francais: "Ils sont lourdement endettés.",
        note: "Be in debt, être endetté. Debt garde un b muet.",
      },
      {
        etranger: "The bank raised interest rates.",
        francais: "La banque a relevé les taux d'intérêt.",
        note: "Raise rates / cut rates dans la presse ; lower rates se dit aussi, un ton plus neutre.",
      },
      {
        etranger: "The firm went bust last winter.",
        francais: "L'entreprise a fait faillite l'hiver dernier.",
        aussi: ["La société a déposé le bilan l'hiver dernier."],
        note: "Go bust, familier. Le registre soutenu dit go bankrupt ou go into administration.",
      },
      {
        etranger: "Demand outstripped supply.",
        francais: "La demande a dépassé l'offre.",
        note: "Outstrip, dépasser nettement. Supply and demand, dans cet ordre en anglais.",
      },
      {
        etranger: "We need to cut overheads.",
        francais: "Il faut réduire les frais fixes.",
        aussi: ["Nous devons réduire les charges de structure."],
        note: "Overheads en anglais britannique, overhead au singulier en américain.",
      },
      {
        etranger: "The deal fell through at the last minute.",
        francais: "L'accord a échoué au dernier moment.",
        aussi: ["L'accord a capoté au dernier moment."],
        note: "Fall through, échouer avant conclusion. A deal peut être un accord comme une affaire.",
      },
      {
        etranger: "Shares fell sharply on the news.",
        francais: "L'action a chuté brutalement à cette annonce.",
        aussi: ["Le titre a fortement baissé à cette nouvelle."],
        note: "On the news, à l'annonce. Shares au pluriel pour le cours d'une valeur.",
      },
    ],
  },

  {
    slug: "en-c1-psychologie",
    category: "Vocabulaire",
    title: "États d'esprit et comportements",
    statement:
      "Cope, dwell, lash out, shut down. L'anglais a des verbes courts et précis pour ce que le français dit en une périphrase — et les employer change immédiatement le niveau.",
    tip: "Sensible ne veut pas dire sensible mais raisonnable ; sensitive est le sensible français. La confusion est la plus fréquente de tout le champ.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "She copes well under pressure.",
        francais: "Elle gère bien la pression.",
        aussi: ["Elle tient bien le coup sous pression."],
        note: "Cope with something, faire face. Le verbe seul suffit souvent.",
      },
      {
        etranger: "Don't dwell on it.",
        francais: "Ne rumine pas.",
        aussi: ["Ne t'attarde pas là-dessus."],
        note: "Dwell on, s'appesantir sur une pensée. Rien à voir avec habiter, sens archaïque.",
      },
      {
        etranger: "He lashed out at his colleagues.",
        francais: "Il s'en est pris violemment à ses collègues.",
        note: "Lash out at, s'emporter contre. La violence est verbale par défaut.",
      },
      {
        etranger: "I just shut down when I'm overwhelmed.",
        francais: "Je me referme complètement quand je suis submergé.",
        aussi: ["Je me bloque quand je suis dépassé."],
        note: "Shut down se dit d'une personne comme d'une machine, et l'image est la même.",
      },
      {
        etranger: "She's remarkably level-headed.",
        francais: "Elle garde remarquablement la tête froide.",
        aussi: ["Elle est d'un sang-froid remarquable."],
        note: "Level-headed, posé sous la pression. Ne pas confondre sensible, raisonnable, et sensitive, sensible.",
      },
      {
        etranger: "He's coming to terms with it.",
        francais: "Il commence à l'accepter.",
        aussi: ["Il fait son deuil de la situation."],
        note: "Come to terms with, accepter au terme d'un travail intérieur.",
      },
      {
        etranger: "She bottles everything up.",
        francais: "Elle garde tout pour elle.",
        aussi: ["Elle refoule tout."],
        note: "Bottle up, contenir jusqu'à l'excès. L'image est celle d'une bouteille qu'on bouche.",
      },
      {
        etranger: "I'm second-guessing myself.",
        francais: "Je remets sans cesse mes choix en question.",
        aussi: ["Je doute constamment de mes décisions."],
        note: "Second-guess oneself, douter après coup. Second-guess someone, c'est le juger après coup.",
      },
      {
        etranger: "He talked himself into it.",
        francais: "Il s'est convaincu tout seul de le faire.",
        note: "Talk oneself into ou out of something : se convaincre ou se dissuader.",
      },
      {
        etranger: "It's a coping mechanism.",
        francais: "C'est une stratégie d'adaptation.",
        aussi: ["C'est un mécanisme d'adaptation."],
        note: "Ne pas confondre avec defence mechanism, le mécanisme de défense inconscient : coping mechanism est une stratégie consciente.",
      },
    ],
  },

  {
    slug: "en-c1-negociation",
    category: "Travail et études",
    title: "Négocier sans se découvrir",
    statement:
      "Push back, meet halfway, walk away. Une négociation en anglais se joue sur des formules toutes faites, et employer la mauvaise revient à céder sans le vouloir.",
    tip: "« I hear you » n'est pas un accord : c'est un accusé de réception. Le prendre pour un oui est l'erreur la plus coûteuse d'une réunion.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I hear you, but the budget is fixed.",
        francais: "J'entends bien, mais le budget est arrêté.",
        aussi: ["Je comprends, mais le budget est figé."],
        note: "I hear you accuse réception sans concéder. Ce n'est jamais un accord.",
      },
      {
        etranger: "Let's meet halfway.",
        francais: "Coupons la poire en deux.",
        aussi: ["Trouvons un compromis à mi-chemin."],
        note: "Meet halfway, la formule de compromis la plus courante.",
      },
      {
        etranger: "I'd like to push back on that.",
        francais: "Je voudrais objecter là-dessus.",
        aussi: ["Je souhaite contester ce point."],
        note: "Push back, objecter fermement mais poliment. Très répandu en entreprise.",
      },
      {
        etranger: "That's our final offer.",
        francais: "C'est notre dernière proposition.",
        note: "Final offer clôt la discussion. L'annoncer sans y tenir détruit la crédibilité.",
      },
      {
        etranger: "We're prepared to walk away.",
        francais: "Nous sommes prêts à quitter la table.",
        aussi: ["Nous sommes prêts à renoncer à l'accord."],
        note: "Walk away, se retirer. C'est le levier ultime d'une négociation.",
      },
      {
        etranger: "Let's take that offline.",
        francais: "Réglons ce point en dehors de la réunion.",
        aussi: ["Voyons cela à part."],
        note: "Take something offline n'a rien à voir avec le réseau : c'est sortir un sujet de la réunion.",
      },
      {
        etranger: "What would it take to close this?",
        francais: "Que faudrait-il pour conclure ?",
        note: "What would it take to, la question qui force l'autre à chiffrer sa demande.",
      },
      {
        etranger: "I'm not in a position to commit.",
        francais: "Je ne suis pas en mesure de m'engager.",
        note: "Not in a position to, refuser sans dire non. Le registre est neutre, pas froid.",
      },
      {
        etranger: "Let me run that by my team.",
        francais: "Laissez-moi en parler à mon équipe.",
        aussi: ["Je dois en référer à mon équipe."],
        note: "Run something by someone, soumettre pour avis. Gagne du temps sans fermer la porte.",
      },
      {
        etranger: "We're broadly aligned on the principle.",
        francais: "Nous sommes globalement d'accord sur le principe.",
        note: "Broadly aligned dit l'accord tout en réservant le détail. Formule de sortie de réunion.",
      },
    ],
  },

  {
    slug: "en-c1-technologie",
    category: "Vocabulaire",
    title: "Technique et défaillance",
    statement:
      "Roll out, roll back, deprecate, workaround. Le vocabulaire technique anglophone est fait de verbes à particule, et aucun dictionnaire bilingue ne les rend correctement.",
    tip: "Un bug est un défaut, an issue un problème signalé, a feature un comportement voulu. La blague « it's not a bug, it's a feature » repose entièrement sur cette distinction.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "We rolled out the update last night.",
        francais: "Nous avons déployé la mise à jour cette nuit.",
        note: "Roll out, déployer progressivement. Le contraire est roll back, revenir en arrière.",
      },
      {
        etranger: "They had to roll back the release.",
        francais: "Ils ont dû revenir à la version précédente.",
        aussi: ["Ils ont dû annuler la mise en production."],
        note: "Roll back a release. A release est une version livrée.",
      },
      {
        etranger: "That method is deprecated.",
        francais: "Cette méthode est obsolète.",
        aussi: ["Cette méthode est dépréciée."],
        note: "Deprecated dit « encore là mais à ne plus employer ». Ce n'est pas removed.",
      },
      {
        etranger: "There's a workaround for now.",
        francais: "Il y a un contournement pour l'instant.",
        aussi: ["Il existe une solution de contournement provisoire."],
        note: "A workaround n'est pas une correction : il évite le problème sans le régler.",
      },
      {
        etranger: "The server went down at noon.",
        francais: "Le serveur est tombé à midi.",
        note: "Go down, tomber en panne. Be down, être hors service. Downtime, l'indisponibilité.",
      },
      {
        etranger: "Can you reproduce the issue?",
        francais: "Arrivez-vous à reproduire le problème ?",
        note: "Reproduce an issue est la première question de tout dépannage sérieux.",
      },
      {
        etranger: "It works on my machine.",
        francais: "Chez moi, ça marche.",
        note: "La phrase la plus célèbre du métier, et rarement un argument recevable.",
      },
      {
        etranger: "We need to scale this up.",
        francais: "Il faut passer à l'échelle supérieure.",
        aussi: ["Nous devons monter en charge."],
        note: "Scale up, augmenter la capacité. Scale out, répartir sur plusieurs machines.",
      },
      {
        etranger: "The feature is behind a flag.",
        francais: "La fonctionnalité est derrière un interrupteur.",
        aussi: ["La fonctionnalité est activable par un drapeau."],
        note: "A feature flag permet de livrer sans activer. Pas d'équivalent français fixé.",
      },
      {
        etranger: "Let's ship it and iterate.",
        francais: "Livrons-le et améliorons ensuite.",
        aussi: ["Mettons-le en production, on affinera après."],
        note: "Ship, livrer. Le mot vient de l'expédition physique et a gardé son côté irréversible.",
      },
    ],
  },

  {
    slug: "en-c2-ironie",
    category: "Expressions",
    title: "L'ironie et le sarcasme",
    statement:
      "« Well, that went well » se dit après une catastrophe. Le B2 apprend à atténuer ; le C2 apprend à dire exactement le contraire, et à entendre qu'on vous l'a fait.",
    tip: "L'ironie ne se signale ni par un mot ni par une grammaire : elle se signale par l'écart entre la phrase et la situation. C'est la seule figure qu'on ne peut pas repérer en lisant la phrase seule.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cours: {
      titre: "Dire moins, dire le contraire",
      sections: [
        {
          titre: "Pourquoi la langue atténue",
          texte:
            "L'understatement — la litote — consiste à formuler une chose en dessous de ce qu'elle est, et à laisser l'auditeur rétablir. « Not bad » pour excellent, « a bit of a problem » pour une catastrophe, « I'm slightly concerned » pour une inquiétude sérieuse.\n\nCe n'est ni de la modestie ni de la froideur. C'est une règle de politesse négative : en atténuant, le locuteur laisse à l'autre la place de juger lui-même, au lieu de lui imposer une évaluation. Le compliment appuyé, en anglais britannique, met le destinataire en dette ; le compliment atténué le laisse libre.\n\nLe francophone est ici doublement exposé. D'abord parce que le français valorise l'expression pleine : dire « pas mal » d'un travail excellent passerait pour tiède. Ensuite parce que le sens littéral d'une litote est parfaitement grammatical — rien ne signale l'erreur, et l'on repart avec un contresens dont personne ne vous avertira.",
          visuels: [
            {
              type: "tableau",
              titre: "Ce qui est dit, ce qui est entendu",
              colonnes: ["Formule", "Sens littéral", "Sens réel"],
              lignes: [
                ["Not bad at all", "pas mauvais", "vraiment très bien"],
                ["A bit of a problem", "un petit souci", "un problème sérieux"],
                ["I'm slightly concerned", "je m'inquiète un peu", "je suis très inquiet"],
                ["It's not ideal", "ce n'est pas idéal", "c'est inacceptable"],
                ["With the greatest respect", "avec tout mon respect", "vous dites une bêtise"],
              ],
              note: "La dernière est un classique de réunion : elle annonce une contradiction frontale.",
            },
          ],
        },
        {
          titre: "Les trois signaux",
          texte:
            "Trois indices permettent de repérer une litote sans avoir à deviner.\n\nLa négation d'un terme faible. Not bad, not unhelpful, not without merit. Nier le négatif produit un positif fort ; nier le positif produit une condamnation. « He's not the brightest » ne dit pas qu'il est moyen.\n\nL'adverbe atténuant sur une situation grave. Slightly, rather, a bit, somewhat. Leur présence sur un fait objectivement lourd est le signal le plus net : « the building is somewhat on fire » n'est pas une évaluation, c'est une plaisanterie.\n\nL'écart entre le ton et le contenu. Une voix parfaitement calme sur une nouvelle grave indique presque toujours une litote. Inversement, l'emphase britannique — absolutely, terribly, frightfully — sert souvent à la politesse et non à l'intensité : « terribly sorry » est une excuse ordinaire.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux registres pour la même nouvelle",
              colonnes: [
                {
                  titre: "Ce qui est dit",
                  points: [
                    "We've had a slight setback.",
                    "It didn't go entirely to plan.",
                    "I wouldn't say it was a success.",
                  ],
                },
                {
                  titre: "Ce qui est entendu",
                  points: [
                    "Le projet a échoué.",
                    "Tout a mal tourné.",
                    "C'est un désastre complet.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "De la litote à l'ironie",
          texte:
            "La litote atténue ; l'ironie inverse. Ce sont deux points d'un même axe, et l'anglais passe de l'un à l'autre sans changer de grammaire.\n\n« We've had a slight setback » sous-évalue un échec : le sens reste du même côté que la vérité. « Well, that went well », dit après le même échec, est de l'autre côté. Rien dans la phrase ne le signale — ni un mot, ni un temps, ni un ordre des mots. Seul l'écart avec la situation le dit.\n\nC'est ce qui rend l'ironie plus difficile que la litote pour un non-natif. Une litote se repère à ses marqueurs, et l'on peut apprendre la liste. L'ironie demande de tenir en même temps ce qui est dit et ce qui se passe, puis de constater que les deux ne concordent pas. Un francophone très bon en anglais peut suivre une réunion entière sans entendre qu'on s'y moque de lui.\n\nDeux indices aident quand même. Le premier est l'excès : un superlatif sur un fait banal — brilliant, fantastic, perfect — est presque toujours ironique. Le second est la formule figée : as if, tell me about it, that's rich, sure, and pigs might fly n'ont pratiquement pas d'emploi littéral.\n\nÀ produire, la règle de prudence est nette : l'ironie suppose une complicité déjà établie. Employée avec un interlocuteur qu'on connaît mal, elle est comprise au premier degré, et l'on passe pour sot ou pour désagréable.",
          visuels: [
            {
              type: "tableau",
              titre: "Trois figures, un même écart",
              colonnes: ["Figure", "Rapport à la vérité", "Exemple"],
              lignes: [
                ["litote", "en dessous", "We've had a slight setback."],
                ["euphémisme", "à côté", "He's no longer with the company."],
                ["ironie", "à l'opposé", "Well, that went well."],
              ],
              note: "La grammaire est la même dans les trois cas. Seule la situation les sépare.",
            },
          ],
        },
      ],
    },
    cartes: [
      {
        etranger: "Well, that went well.",
        francais: "Eh bien, ça s'est bien passé.",
        aussi: ["Bravo, quel succès."],
        note: "Se dit après un échec. La phrase est littéralement positive : seul le contexte l'inverse.",
      },
      {
        etranger: "Brilliant. Just what we needed.",
        francais: "Génial. Il ne manquait plus que ça.",
        note: "Un superlatif sur un fait banal ou fâcheux est presque toujours ironique.",
      },
      {
        etranger: "Nice of you to join us.",
        francais: "C'est aimable à vous de nous rejoindre.",
        aussi: ["Merci d'avoir daigné venir."],
        note: "Adressé à un retardataire. La politesse de la forme fait tout le reproche.",
      },
      {
        etranger: "Don't strain yourself.",
        francais: "Surtout, ne te fatigue pas.",
        note: "Reproche d'inaction déguisé en sollicitude. Strain oneself, se surmener.",
      },
      {
        etranger: "As if that ever stopped him.",
        francais: "Comme si ça l'avait jamais arrêté.",
        note: "As if seul, en tête de phrase, marque le refus ironique. Sans emploi littéral.",
      },
      {
        etranger: "Tell me about it.",
        francais: "À qui le dis-tu.",
        aussi: ["Ne m'en parle pas."],
        note: "N'invite jamais à raconter : c'est un accord las. L'entendre au premier degré est classique.",
      },
      {
        etranger: "That's rich, coming from him.",
        francais: "Venant de lui, c'est un comble.",
        aussi: ["De sa part, c'est le monde à l'envers."],
        note: "Rich signifie ici « gonflé ». Le sens de riche n'a pas cours dans cette formule.",
      },
      {
        etranger: "Sure, and pigs might fly.",
        francais: "Oui, bien sûr, et les poules auront des dents.",
        note: "L'équivalent français change d'animal : traduire mot à mot ne se comprend pas.",
      },
      {
        etranger: "I'm sure he meant well.",
        francais: "Je suis sûr qu'il partait d'une bonne intention.",
        aussi: ["Il croyait sans doute bien faire."],
        note: "Selon la situation, c'est une excuse sincère ou une condamnation polie.",
      },
      {
        etranger: "Because that worked so well last time.",
        francais: "Parce que ça avait si bien marché la dernière fois.",
        note: "La subordonnée seule, sans principale, est un marqueur d'ironie très courant à l'oral.",
      },
    ],
  },

  {
    slug: "en-c2-rhetorique",
    category: "Expressions",
    title: "Construire un argument",
    statement:
      "Granted, admittedly, that said, all the more so. Les articulations d'un raisonnement anglophone ne sont pas les nôtres, et traduire « cependant » par however à chaque fois se voit à la première ligne.",
    tip: "Un argument anglais concède avant d'objecter. Granted… but… est plus fort qu'une objection frontale, parce qu'il montre qu'on a lu l'autre.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Granted, the method has limits.",
        francais: "Certes, la méthode a ses limites.",
        aussi: ["Il est vrai que la méthode a des limites."],
        note: "Granted ouvre une concession qu'on retournera. Toujours suivi d'un but.",
      },
      {
        etranger: "That said, the results hold.",
        francais: "Cela dit, les résultats tiennent.",
        aussi: ["Ceci étant, les résultats restent valables."],
        note: "That said articule la concession et la reprise. Plus souple que however.",
      },
      {
        etranger: "Admittedly, the sample was small.",
        francais: "Il faut reconnaître que l'échantillon était réduit.",
        note: "Admittedly concède une faiblesse pour désarmer l'objection à venir.",
      },
      {
        etranger: "All the more so in a crisis.",
        francais: "D'autant plus en période de crise.",
        note: "All the more so renforce ce qui précède au lieu de l'ajouter.",
      },
      {
        etranger: "The point is not whether it works.",
        francais: "La question n'est pas de savoir si cela marche.",
        note: "The point is not whether… but whether : déplacer le débat plutôt que le perdre.",
      },
      {
        etranger: "This begs a further question.",
        francais: "Cela soulève une autre question.",
        aussi: ["Cela appelle une question supplémentaire."],
        aussiEtranger: ["This raises a further question."],
        note: "Raise est le verbe sûr ; beg the question au sens de « soulever » reste critiqué, réservé en toute rigueur à la pétition de principe.",
      },
      {
        etranger: "By the same token, the reverse holds.",
        francais: "Par le même raisonnement, l'inverse est vrai.",
        aussi: ["Selon la même logique, la réciproque est vraie."],
        note: "By the same token applique un principe déjà admis à un nouveau cas.",
      },
      {
        etranger: "It hardly follows that we should stop.",
        francais: "Il ne s'ensuit nullement qu'il faille arrêter.",
        note: "It follows that, il s'ensuit. Hardly le nie sans dire not.",
      },
      {
        etranger: "Far from settling the matter, it reopens it.",
        francais: "Loin de trancher la question, cela la rouvre.",
        note: "Far from + -ing, structure de renversement. Très fréquente dans l'écrit argumenté.",
      },
      {
        etranger: "In short, the case is far from closed.",
        francais: "Bref, l'affaire est loin d'être close.",
        aussi: ["En somme, le dossier est loin d'être clos."],
        note: "In short conclut un développement ; in a word annoncerait un seul mot.",
      },
    ],
  },

  {
    slug: "en-c2-litteraire",
    category: "Vocabulaire",
    title: "Lire un roman anglais",
    statement:
      "Glance, glimpse, peer, gaze, stare. Là où le français dit « regarder », l'anglais littéraire distingue la durée, l'intention et la politesse du regard — et un roman est illisible sans ces nuances.",
    tip: "Ces verbes ne sont pas des synonymes stylistiques : chacun porte une information. Stare est impoli, glance est bref, peer suppose qu'on voit mal.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "She glanced at her watch.",
        francais: "Elle jeta un coup d'œil à sa montre.",
        note: "Glance, un regard bref et volontaire. Le plus neutre des cinq.",
      },
      {
        etranger: "He caught a glimpse of the sea.",
        francais: "Il entrevit la mer.",
        aussi: ["Il aperçut la mer un instant."],
        note: "A glimpse est involontaire et fugitif : on ne « prend » pas un glimpse, on le catch.",
      },
      {
        etranger: "She peered into the darkness.",
        francais: "Elle scruta l'obscurité.",
        note: "Peer suppose qu'on voit mal et qu'on force. Souvent suivi de into ou at.",
      },
      {
        etranger: "He stared at her in disbelief.",
        francais: "Il la dévisagea, incrédule.",
        note: "Stare est long et socialement déplacé. Le dire d'un personnage le caractérise.",
      },
      {
        etranger: "They gazed out over the valley.",
        francais: "Ils contemplaient la vallée.",
        note: "Gaze est long mais admiratif : c'est le stare rendu acceptable par la beauté.",
      },
      {
        etranger: "He shrugged and walked off.",
        francais: "Il haussa les épaules et s'éloigna.",
        note: "Shrug seul suffit : les épaules sont sous-entendues, contrairement au français.",
      },
      {
        etranger: "Her voice trailed off.",
        francais: "Sa voix s'éteignit peu à peu.",
        aussi: ["Sa phrase resta en suspens."],
        note: "Trail off décrit une phrase qui s'interrompt d'elle-même, sans être coupée.",
      },
      {
        etranger: "He winced at the sound.",
        francais: "Il eut une grimace de douleur au bruit.",
        aussi: ["Il tressaillit à ce bruit."],
        note: "Wince, la crispation brève de la douleur ou de la gêne. Flinch dit le mouvement de recul.",
      },
      {
        etranger: "The room fell silent.",
        francais: "La pièce se tut.",
        aussi: ["Le silence se fit dans la pièce."],
        note: "Fall + adjectif marque le basculement : fall silent, fall ill, fall asleep.",
      },
      {
        etranger: "She lingered in the doorway.",
        francais: "Elle s'attarda sur le seuil.",
        note: "Linger, s'attarder sans raison avouée. Très fréquent dans le roman anglais.",
      },
    ],
  },

  {
    slug: "en-c2-scientifique",
    category: "Vocabulaire",
    title: "L'écrit scientifique",
    statement:
      "Account for, control for, yield, hold. Les verbes de l'article scientifique anglophone ont un sens technique précis, très éloigné de leur sens courant.",
    tip: "Control for ne veut pas dire contrôler mais neutraliser un facteur. Account for, c'est expliquer une part de variance — pas rendre compte au sens administratif.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The model accounts for most of the variance.",
        francais: "Le modèle explique l'essentiel de la variance.",
        aussi: ["Le modèle rend compte de la majeure partie de la variance."],
        note: "Account for, expliquer une part. Rien à voir avec la reddition de comptes.",
      },
      {
        etranger: "We controlled for age and income.",
        francais: "Nous avons neutralisé l'effet de l'âge et du revenu.",
        aussi: ["Nous avons contrôlé les variables d'âge et de revenu."],
        note: "Control for, tenir constant. Traduire par « contrôler » seul est un contresens.",
      },
      {
        etranger: "The experiment yielded consistent results.",
        francais: "L'expérience a donné des résultats cohérents.",
        aussi: ["L'expérience a produit des résultats concordants."],
        note: "Yield, produire un résultat. Le sens courant de céder n'a pas cours ici.",
      },
      {
        etranger: "The finding holds across samples.",
        francais: "Le résultat se vérifie sur tous les échantillons.",
        aussi: ["Le constat reste valable d'un échantillon à l'autre."],
        note: "Hold, rester vrai. Hold across, se maintenir d'un cas à l'autre.",
      },
      {
        etranger: "The difference was not significant.",
        francais: "La différence n'était pas significative.",
        note: "Significant a ici un sens statistique strict, pas celui d'important.",
      },
      {
        etranger: "These results are in line with earlier work.",
        francais: "Ces résultats concordent avec les travaux antérieurs.",
        note: "In line with, la formule consacrée pour la concordance.",
      },
      {
        etranger: "Further work is needed to confirm this.",
        francais: "D'autres travaux sont nécessaires pour le confirmer.",
        aussiEtranger: ["Further research is needed to confirm this."],
        note: "Further work is needed clôt presque toutes les discussions d'article. Research se dit tout aussi bien : les deux sont indénombrables.",
      },
      {
        etranger: "We cannot rule out a confounding factor.",
        francais: "Nous ne pouvons exclure un facteur de confusion.",
        note: "Rule out, écarter une hypothèse. A confounding factor brouille la relation observée.",
      },
      {
        etranger: "The sample was drawn at random.",
        francais: "L'échantillon a été tiré au hasard.",
        aussi: ["L'échantillon a été constitué aléatoirement."],
        note: "Draw a sample, tirer un échantillon. At random, pas « by random ».",
      },
      {
        etranger: "Correlation does not imply causation.",
        francais: "La corrélation n'implique pas la causalité.",
        note: "La formule est figée : la citer autrement se remarque immédiatement.",
      },
    ],
  },
];
