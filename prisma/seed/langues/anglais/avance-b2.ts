/**
 * Anglais — quatre séries de niveau B2.
 *
 * Le module s'arrêtait presque au B1 : six séries B2 pour douze B1. Ces
 * quatre-là visent ce qui distingue un anglais correct d'un anglais adulte —
 * commenter des chiffres, éviter les faux amis techniques, entendre ce que
 * l'euphémisme britannique ne dit pas, et annoncer une mauvaise nouvelle par
 * écrit sans se faire détester.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_AVANCE_B2: LotCartes[] = [
  {
    slug: "en-chiffres-graphiques",
    category: "Travail et études",
    title: "Commenter des chiffres et un graphique",
    statement:
      "Une hausse, une baisse, un palier, un creux. Le vocabulaire d'une réunion de résultats, où deux prépositions — by et to — suffisent à dire une chose ou son contraire.",
    tip: "Fall BY dit l'écart parcouru, fall TO dit le niveau atteint. Les confondre multiplie ou divise le chiffre annoncé.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Dire une courbe en anglais",
      sections: [
        {
          titre: "Le verbe, l'adverbe, la préposition",
          texte:
            "Commenter un graphique en anglais tient en trois briques posées dans le même ordre : ce qui bouge, comment il bouge, et de combien.\n\nLe verbe dit le sens. Vers le haut : rise, increase, grow, climb. Vers le bas : fall, drop, decline, decrease. À plat : remain stable, level off, plateau. Deux verbes du haut demandent de l'attention : rise est intransitif — prices rise, sans complément — tandis que raise en demande un : they raised prices. Un francophone les échange régulièrement, et la faute s'entend.\n\nL'adverbe dit la manière. Sharply, brutalement ; steadily, régulièrement ; slightly, légèrement ; gradually, peu à peu. Trois adverbes bien placés valent un paragraphe d'explication.\n\nLa préposition dit la quantité, et c'est là qu'on se trompe. By introduit l'écart : sales fell by twelve per cent, elles ont perdu douze points. To introduit le point d'arrivée : sales fell to twelve million, elles sont descendues à ce niveau. From … to donne les deux bornes.",
          visuels: [
            {
              type: "tableau",
              titre: "Les trois briques",
              colonnes: ["Ce qui bouge", "Comment", "De combien", "Phrase complète"],
              lignes: [
                ["rose", "sharply", "by 12%", "Sales rose sharply by 12%."],
                ["fell", "slightly", "to 3 million", "Revenue fell slightly to 3 million."],
                ["increased", "steadily", "from 4 to 9", "Costs increased steadily from 4 to 9."],
                ["remained", "—", "stable", "Margins remained stable."],
                ["dropped", "suddenly", "by half", "Traffic dropped suddenly by half."],
              ],
              note: "Per cent en deux mots au Royaume-Uni, percent en un seul aux États-Unis.",
            },
          ],
        },
        {
          titre: "Les pièges de nombre et de dénombrement",
          texte:
            "L'anglais des chiffres est plein de noms indénombrables, et le francophone leur ajoute un s par réflexe.\n\nRevenue, au sens de chiffre d'affaires, ne se met pas au pluriel. Information, advice, research, feedback, staff non plus. On dit a piece of advice, some information, a lot of research.\n\nÀ l'inverse, data est un pluriel d'origine latine : the data show, pas « shows » — même si l'usage américain courant admet aujourd'hui le singulier. Dans un rapport, mieux vaut la forme prudente.\n\nLes nombres composés qui font adjectif restent au singulier : a ten-year contract, a five-per-cent increase, a two-hour meeting. Le s reviendrait si le nombre était sujet : the contract lasts ten years.\n\nEnfin les proportions. One in three, un sur trois — jamais « one on three », qui est un calque direct du français. Twice as many, deux fois plus nombreux. Half as much, moitié moins.",
          visuels: [
            {
              type: "comparaison",
              titre: "By ou to : la faute qui coûte le plus cher",
              colonnes: [
                {
                  titre: "BY — l'écart parcouru",
                  points: [
                    "Profits fell by 12%. — ils ont perdu douze points.",
                    "It grew by two million. — deux de plus qu'avant.",
                    "Réponse à : « de combien ? »",
                  ],
                },
                {
                  titre: "TO — le niveau atteint",
                  points: [
                    "Profits fell to 12%. — ils sont maintenant à douze.",
                    "It grew to two million. — le total fait deux millions.",
                    "Réponse à : « jusqu'où ? »",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Présenter, pas seulement décrire",
          texte:
            "Lire une courbe à voix haute n'intéresse personne : l'auditoire a le graphique sous les yeux. Ce qu'on attend de vous, c'est le commentaire — ce qui a changé, pourquoi, et ce qu'il faut en faire.\n\nTrois formules structurent une présentation et s'apprennent d'un bloc. Let me walk you through the figures ouvre : on va détailler pas à pas. As you can see attire l'œil sur le point qui compte. The key takeaway is… ferme : voici ce qu'il faut retenir.\n\nEntre les deux, on nuance. Roughly, approximately et around disent l'à-peu-près sans se déjuger. Just over et just under encadrent : just over half, un peu plus de la moitié.\n\nEt l'on évite la fausse précision : annoncer 12,4 % quand l'échantillon est de trente personnes fait douter du reste. Around one in eight est plus honnête, et se retient mieux.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Sales rose sharply in the second quarter.",
        francais: "Les ventes ont fortement augmenté au deuxième trimestre.",
        note: "Rise est intransitif : rose, risen. Raise demande un complément : they raised prices.",
      },
      {
        etranger: "Profits fell by twelve per cent.",
        francais: "Les bénéfices ont chuté de douze pour cent.",
        note: "Fall BY dit l'écart parcouru. C'est la réponse à « de combien ».",
      },
      {
        etranger: "The figure dropped to three million.",
        francais: "Le chiffre est tombé à trois millions.",
        note: "Drop TO dit le niveau atteint. Confondre by et to change le sens du tout au tout.",
      },
      {
        etranger: "Costs remained stable throughout the year.",
        francais: "Les coûts sont restés stables toute l'année.",
        aussi: ["Les coûts sont demeurés stables toute l'année."],
      },
      {
        etranger: "The chart shows a steady increase.",
        francais: "Le graphique montre une hausse régulière.",
        note: "Steady, régulier ; sharp, brutal ; slight, léger. Trois adjectifs font tout le commentaire.",
      },
      {
        etranger: "Roughly one in three customers renewed.",
        francais: "Environ un client sur trois a renouvelé.",
        note: "One in three, un sur trois. « One on three » est un calque direct du français.",
      },
      {
        etranger: "The numbers speak for themselves.",
        francais: "Les chiffres parlent d'eux-mêmes.",
      },
      {
        etranger: "There was a slight dip in July.",
        francais: "Il y a eu un léger creux en juillet.",
        note: "Dip, le creux passager ; slump, l'effondrement durable. Le choix engage.",
      },
      {
        etranger: "Revenue doubled between 2019 and 2022.",
        francais: "Le chiffre d'affaires a doublé entre 2019 et 2022.",
        note: "Revenue au sens de chiffre d'affaires est indénombrable : jamais « revenues ».",
      },
      {
        etranger: "Let me walk you through the figures.",
        francais: "Laissez-moi vous détailler les chiffres.",
        note: "Walk someone through : présenter pas à pas. La formule d'ouverture la plus courante.",
      },
    ],
  },

  {
    slug: "en-faux-amis-technique",
    category: "Faux amis",
    title: "Faux amis des sciences et du droit",
    statement:
      "Evidence, trial, significant, bill. Des mots qu'un francophone croit connaître parce qu'ils lui ressemblent, et qui font dire l'inverse dans un rapport ou un contrat.",
    tip: "Significant en science veut dire statistiquement établi, pas important. C'est le contresens le plus répandu en traduction technique.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les faux amis techniques",
      sections: [
        {
          titre: "Pourquoi ceux-là sont les plus dangereux",
          texte:
            "Un faux ami de la vie courante se rattrape : dire « I'm bored » pour « je suis énervé » fait sourire, et l'interlocuteur corrige. Un faux ami technique, lui, passe inaperçu — parce que la phrase reste plausible.\n\nSi un rapport annonce que les résultats sont significant alors qu'ils sont seulement importants en volume, personne n'arrête la réunion : le mot existe, la phrase est grammaticale, et le lecteur comprend autre chose que ce qui était écrit. C'est un contresens silencieux, et il survit à la relecture.\n\nDeux familles concentrent le danger : le vocabulaire de la preuve — evidence, experiment, experience, record — et celui de la justice — trial, sentence, bill, dismiss. Ce sont aussi les deux domaines où l'écrit engage.",
          visuels: [
            {
              type: "tableau",
              titre: "Le mot, le piège, et ce qu'il fallait dire",
              colonnes: ["Le mot anglais", "Ce qu'il veut dire", "Le faux ami", "Le vrai mot"],
              lignes: [
                ["evidence", "les preuves (indénombrable)", "évidence", "obviousness"],
                ["experiment", "l'expérience scientifique", "expérience vécue", "experience"],
                ["significant", "statistiquement établi", "important en volume", "substantial, large"],
                ["record", "le registre, le dossier", "record sportif", "record (mais autre emploi)"],
                ["trial", "le procès, l'essai clinique", "travail", "work"],
                ["sentence", "la peine prononcée", "phrase (grammaire)", "sentence aussi — le verbe tranche"],
                ["bill", "le projet de loi, l'addition", "bille, billet", "marble, ticket"],
                ["dismiss", "rejeter, licencier", "démissionner", "resign"],
                ["patent", "le brevet", "patient, patenté", "patient, obvious"],
                ["compound", "le composé chimique", "composer", "compose"],
              ],
              note: "Evidence ne prend jamais d'article : a piece of evidence, some evidence, jamais « an evidence ».",
            },
          ],
        },
        {
          titre: "La preuve, l'essai, le dossier",
          texte:
            "Evidence est indénombrable, comme information et advice. On ne dit pas « an evidence » mais a piece of evidence, ou some evidence. Le pluriel « evidences » n'existe pas en anglais moderne. Et le mot ne traduit jamais « évidence » : ce qui va de soi se dit obvious.\n\nExperiment et experience se partagent l'expérience française. L'experiment est le protocole qu'on monte au laboratoire ; l'experience est ce qu'on a vécu ou acquis. We ran three experiments et she has ten years' experience ne se remplacent pas.\n\nRecord, au singulier, est un enregistrement ou un dossier tenu dans la durée : medical records, criminal record. Le sens sportif existe aussi, mais le contexte le distingue sans ambiguïté. Le verbe to record veut dire enregistrer, jamais battre un record.\n\nEnfin trial. En sciences, a clinical trial est un essai clinique ; en droit, the trial est le procès. Le mot n'a rien à voir avec « travail », que le français retrouve pourtant à l'oreille.",
        },
        {
          titre: "Le droit, où le mot engage",
          texte:
            "En droit, le faux ami ne fait pas sourire : il change l'acte.\n\nA bill est un projet de loi tant qu'il n'est pas voté ; une fois adopté, il devient an act. Le même mot désigne aussi l'addition au restaurant, et rien d'autre : une facture d'entreprise est an invoice.\n\nTo dismiss a case, c'est rejeter une affaire ; to dismiss an employee, c'est le licencier. Ce n'est jamais démissionner, qui se dit resign — un faux ami d'autant plus traître que « démission » et dismiss se ressemblent.\n\nA sentence est la peine prononcée par le tribunal. Le mot désigne aussi la phrase en grammaire, mais le verbe to sentence ne parle que de justice : he was sentenced to two years.\n\nEnfin faith. To act in good faith, agir de bonne foi. Le mot ne traduit jamais « fait », qui se dit fact — et in fact veut dire en réalité, pas « en fait » au sens de remplissage oral.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux mots, deux mondes",
              colonnes: [
                {
                  titre: "Ce que le francophone entend",
                  points: [
                    "evidence → une évidence",
                    "significant → considérable",
                    "dismiss → démissionner",
                    "bill → un billet",
                  ],
                },
                {
                  titre: "Ce que l'anglophone lit",
                  points: [
                    "evidence → des preuves versées au dossier",
                    "significant → au-dessus du seuil statistique",
                    "dismiss → rejeter, ou licencier",
                    "bill → un projet de loi, ou l'addition",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    cartes: [
      {
        etranger: "The experiment gave conclusive evidence.",
        francais: "L'expérience a donné des preuves concluantes.",
        note: "Evidence est indénombrable : jamais « an evidence ». Et experiment, c'est l'expérience scientifique.",
      },
      {
        etranger: "She has no criminal record.",
        francais: "Elle n'a pas de casier judiciaire.",
        note: "Record, le registre ou le dossier tenu dans la durée. Le sens sportif se déduit du contexte.",
      },
      {
        etranger: "The trial lasted three weeks.",
        francais: "Le procès a duré trois semaines.",
        note: "Trial, le procès en droit et l'essai clinique en sciences. Jamais « travail ».",
      },
      {
        etranger: "The court dismissed the case.",
        francais: "Le tribunal a rejeté l'affaire.",
        note: "Dismiss, rejeter ou licencier. Démissionner se dit resign.",
      },
      {
        etranger: "He was sentenced to two years.",
        francais: "Il a été condamné à deux ans.",
        note: "Le nom sentence désigne aussi la phrase, mais le verbe to sentence ne parle que de justice.",
      },
      {
        etranger: "The compound is highly unstable.",
        francais: "Le composé est très instable.",
        note: "Compound, le composé chimique. Composer de la musique se dit compose.",
      },
      {
        etranger: "These results are not significant.",
        francais: "Ces résultats ne sont pas significatifs.",
        note: "Significant veut dire statistiquement établi, pas « important ». Le contresens le plus fréquent.",
      },
      {
        etranger: "The patent expires next year.",
        francais: "Le brevet expire l'an prochain.",
        note: "Patent, le brevet. Rien à voir avec patient, ni avec « patenté ».",
      },
      {
        etranger: "She acted in good faith.",
        francais: "Elle a agi de bonne foi.",
        note: "Faith, la foi ou la confiance. « Fait » se dit fact.",
      },
      {
        etranger: "The bill was passed last month.",
        francais: "La loi a été adoptée le mois dernier.",
        note: "Bill, le projet de loi — et aussi l'addition. Une facture se dit invoice.",
      },
    ],
  },

  {
    slug: "en-euphemisme",
    category: "Expressions",
    title: "L'euphémisme britannique",
    statement:
      "Not bad est un compliment, a slight problem une catastrophe, et « certainly one way of looking at it » un refus. Une grammaire de la politesse qu'aucun dictionnaire ne donne.",
    tip: "Devant un mot négatif, slight et slightly amplifient au lieu d'atténuer. Devant un mot positif, ils atténuent vraiment.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "La litote britannique",
      sections: [
        {
          titre: "Une politesse qui passe par la grammaire",
          texte:
            "L'anglais britannique évite l'affirmation nue. Là où le français dit « c'est très bien » ou « c'est faux », il pose un modérateur — quite, rather, a bit, slightly, I'm afraid, perhaps — et laisse l'interlocuteur reconstituer la force réelle du propos.\n\nCe n'est ni de l'hypocrisie ni de la timidité : c'est un système, et il est cohérent. Le locuteur retire de la force à ses mots pour en laisser à l'autre, qui garde la possibilité de ne pas être d'accord sans que personne perde la face.\n\nPour un francophone, le risque est double. À l'écoute, il prend l'atténuation au pied de la lettre et n'entend pas le message — « a slight problem » lui paraît mineur. À l'oral, il traduit son « c'est nul » ou son « je ne suis pas d'accord » directement, et passe pour brutal sans l'avoir voulu.",
          visuels: [
            {
              type: "tableau",
              titre: "Ce qui se dit, ce qui se comprend",
              colonnes: ["La formule", "Ce qu'un francophone entend", "Ce que ça veut dire"],
              lignes: [
                ["Not bad at all.", "moyen", "franchement bon"],
                ["A slight problem.", "un détail", "un vrai ennui"],
                ["It's a bit chilly.", "il fait frais", "il fait glacial"],
                ["Certainly one way of looking at it.", "on retient l'idée", "non, poliment"],
                ["With the greatest respect…", "on va me flatter", "je vais vous contredire"],
                ["I'll bear it in mind.", "il va s'en occuper", "il ne fera rien"],
                ["I'm sure it's fine, but…", "il est rassuré", "il ne l'est pas du tout"],
                ["Quite good.", "assez bon (GB) / très bon (US)", "l'accent change le sens"],
              ],
              note: "Quite est le plus traître : au Royaume-Uni il tempère, aux États-Unis il renforce.",
            },
          ],
        },
        {
          titre: "Le mécanisme : l'inversion de l'atténuateur",
          texte:
            "La clé du système tient en une règle contre-intuitive. Un atténuateur posé devant un adjectif positif atténue vraiment : quite good est en dessous de good. Posé devant un adjectif négatif, il amplifie : a slight problem est au-dessus d'un problem, et we were slightly disappointed dit une vraie déception.\n\nLa raison est logique. Si le locuteur prend la peine de minimiser un ennui, c'est que l'ennui vaut la peine d'être minimisé. L'atténuation devient le signal.\n\nLe second mécanisme est la litote proprement dite : la négation du contraire. Not bad, not unlike, I wouldn't say no. Nier le contraire d'une chose est une façon de l'affirmer sans en avoir l'air. Not bad at all est un compliment plein.\n\nLe troisième est le préfixe annonciateur. I'm afraid, with the greatest respect, I'm sure it's fine but, correct me if I'm wrong — quatre formules qui annoncent toutes une mauvaise nouvelle ou un désaccord. Ce qui suit but est le vrai message ; ce qui précède est l'emballage.",
          visuels: [
            {
              type: "comparaison",
              titre: "L'atténuateur, selon ce qu'il précède",
              colonnes: [
                {
                  titre: "Devant du positif — il atténue",
                  points: [
                    "quite good — bon, sans plus (GB).",
                    "rather nice — plutôt agréable.",
                    "not bad — le seul qui remonte : c'est bien.",
                  ],
                },
                {
                  titre: "Devant du négatif — il amplifie",
                  points: [
                    "a slight problem — un ennui sérieux.",
                    "slightly disappointed — très déçu.",
                    "a bit chilly — un froid de canard.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "S'en servir sans en faire trop",
          texte:
            "Un francophone n'a pas besoin de maîtriser toute la gamme. Trois réflexes suffisent à ne plus paraître brusque, et ils s'installent vite.\n\nD'abord, ouvrir les désaccords. Au lieu de « you're wrong », dire I'm not sure I agree, ou I see it slightly differently. Le contenu ne change pas ; la porte reste ouverte.\n\nEnsuite, annoncer les mauvaises nouvelles avec I'm afraid. I'm afraid we can't do that est ferme et courtois à la fois, là où we can't do that sonne comme une fin de non-recevoir.\n\nEnfin, employer perhaps et might pour proposer. Perhaps we could try another approach dit exactement la même chose que we should try another approach, mais laisse à l'autre le mérite d'accepter.\n\nÀ l'inverse, en écoute : quand une phrase paraît anormalement douce, chercher le vrai message. Il est presque toujours après le but.",
        },
      ],
    },
    cartes: [
      {
        etranger: "That's not bad at all.",
        francais: "Ce n'est pas mal du tout.",
        note: "Litote : dit sans ironie, c'est un franc compliment — l'équivalent de « c'est très bien ».",
      },
      {
        etranger: "I'm afraid there's been a slight problem.",
        francais: "Je crains qu'il y ait eu un léger problème.",
        note: "Slight devant un mot négatif amplifie : plus l'ennui est grave, plus l'adjectif est petit.",
      },
      {
        etranger: "It's a bit chilly, isn't it?",
        francais: "Il fait un peu frais, non ?",
        note: "Dit en janvier sous la pluie, cela veut dire qu'il fait un froid de canard.",
      },
      {
        etranger: "I might have made a small mistake.",
        francais: "J'ai peut-être fait une petite erreur.",
        note: "Might have et small ensemble : l'aveu d'une grosse bourde, dit à voix basse.",
      },
      {
        etranger: "With the greatest respect, I disagree.",
        francais: "Sauf votre respect, je ne suis pas d'accord.",
        note: "With the greatest respect annonce toujours un désaccord ferme. C'est une alerte, pas une flatterie.",
      },
      {
        etranger: "I'm sure it's fine, but could we check?",
        francais: "Je suis sûr que c'est bon, mais on vérifie ?",
        note: "Tout ce qui suit but est le vrai message : le locuteur n'est pas sûr du tout.",
      },
      {
        etranger: "That's certainly one way of looking at it.",
        francais: "C'est une façon de voir les choses.",
        note: "Le désaccord poli par excellence : rien n'y est approuvé, et l'interlocuteur l'entend.",
      },
      {
        etranger: "We were slightly disappointed.",
        francais: "Nous avons été légèrement déçus.",
        note: "Slightly devant un mot négatif l'amplifie : la déception est bien réelle.",
      },
      {
        etranger: "I'll bear it in mind.",
        francais: "J'y penserai.",
        note: "Range poliment une suggestion. I'll look into it engage nettement plus.",
      },
      {
        etranger: "It could be worse.",
        francais: "Ça pourrait être pire.",
        note: "Réponse standard à « comment ça va ». Ni plainte ni enthousiasme : l'optimisme n'y est pour rien.",
      },
    ],
  },

  {
    slug: "en-mauvaise-nouvelle",
    category: "Travail et études",
    title: "Annoncer une mauvaise nouvelle par écrit",
    statement:
      "Un refus, un retard, une décision qui fâche. L'anglais professionnel a des formules figées pour ça, et s'en écarter fait plus de dégâts que la nouvelle elle-même.",
    tip: "L'ordre est toujours le même : le contexte, la nouvelle, la raison, l'excuse, l'ouverture. Annoncer d'abord et expliquer ensuite passe pour de la brutalité.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I'm writing to let you know about a change of plan.",
        francais: "Je vous écris pour vous informer d'un changement de programme.",
        note: "I'm writing to… ouvre le courriel en annonçant son objet. Jamais d'entrée en matière plus longue.",
      },
      {
        etranger: "Unfortunately, we won't be able to meet the deadline.",
        francais: "Malheureusement, nous ne pourrons pas tenir le délai.",
        note: "Unfortunately en tête de phrase : l'annonce standard d'une mauvaise nouvelle à l'écrit.",
      },
      {
        etranger: "After careful consideration, we have decided not to proceed.",
        francais: "Après mûre réflexion, nous avons décidé de ne pas donner suite.",
        note: "Formule figée du refus. Not to proceed évite le mot « no » sans rien adoucir sur le fond.",
      },
      {
        etranger: "I'm afraid the project has been put on hold.",
        francais: "Je crains que le projet ne soit suspendu.",
        note: "I'm afraid est plus doux qu'unfortunately, et passe mieux dans un courriel court.",
      },
      {
        etranger: "We apologise for any inconvenience this may cause.",
        francais: "Nous vous prions de nous excuser pour la gêne occasionnée.",
        note: "Apologise au Royaume-Uni, apologize aux États-Unis. La formule de clôture attendue.",
      },
      {
        etranger: "This was not an easy decision to make.",
        francais: "Cette décision n'a pas été facile à prendre.",
      },
      {
        etranger: "Please let me know if you would like to discuss this.",
        francais: "N'hésitez pas à me dire si vous souhaitez en discuter.",
        note: "Une porte laissée ouverte : le paragraphe qui manque le plus souvent, et celui qui sauve la relation.",
      },
      {
        etranger: "We regret that we cannot offer you the position.",
        francais: "Nous regrettons de ne pouvoir vous proposer le poste.",
        note: "Regret + that + proposition : le registre le plus formel du refus.",
      },
      {
        etranger: "I take full responsibility for the delay.",
        francais: "J'assume l'entière responsabilité du retard.",
        note: "Take responsibility FOR. « Take the responsibility of » est un calque du français.",
      },
      {
        etranger: "Thank you for your patience on this matter.",
        francais: "Merci de votre patience sur ce dossier.",
        note: "On this matter clôt un courriel d'excuse sans relancer le sujet.",
      },
    ],
  },
];
