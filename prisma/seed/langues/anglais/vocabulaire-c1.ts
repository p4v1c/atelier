/**
 * Anglais — cinq séries de niveau C1.
 *
 * Le module n'allait pas au-delà du B2 : on y apprenait à se faire comprendre,
 * pas à choisir. Le C1 commence là — quand deux formulations sont justes et
 * qu'il faut savoir laquelle porte le bon degré, le bon registre, la bonne
 * distance. Ce sont les séries les plus utiles à qui écrit ou argumente.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_VOCABULAIRE_C1: LotCartes[] = [
  {
    slug: "en-c1-nuance",
    category: "Vocabulaire",
    title: "Nuancer, pondérer, se couvrir",
    statement:
      "Tend to, appear to, largely, by and large. L'anglais savant ne dit presque jamais une chose crûment : il la borne. Sans ces marqueurs, un texte juste paraît naïf.",
    tip: "Un énoncé sans marqueur de degré se lit comme une affirmation universelle. En anglais académique, c'est une faute de méthode avant d'être une faute de style.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Le hedging : borner ce qu'on affirme",
      sections: [
        {
          titre: "Pourquoi l'anglais se couvre",
          texte:
            "Le hedging désigne l'ensemble des procédés par lesquels un locuteur atténue la portée de ce qu'il affirme. Ce n'est ni de la prudence excessive ni de la mollesse : dans l'écrit anglophone, c'est une exigence de méthode.\n\nLa raison est épistémologique. Une affirmation sans réserve prétend valoir toujours et partout. Or presque aucune ne le peut. Écrire « smoking causes cancer » est acceptable ; écrire « students who study abroad become more tolerant » ne l'est pas, parce que l'énoncé dépasse ce que les données permettent. La forme attendue est students who study abroad tend to become more tolerant.\n\nLa conséquence pratique est nette pour un francophone. Le français universitaire assume volontiers la formule tranchée, et le lecteur comprend qu'elle est générale. Le lecteur anglophone, lui, la prend au pied de la lettre et conclut que l'auteur ignore ses propres limites.\n\nÀ l'inverse, un texte entièrement bordé ne dit plus rien. Le C1 consiste précisément à doser : borner ce qui doit l'être, affirmer ce qui peut l'être.",
          visuels: [
            {
              type: "tableau",
              titre: "Les quatre familles de marqueurs",
              colonnes: ["Famille", "Exemples", "Ce qu'ils bornent"],
              lignes: [
                ["verbes", "tend to, appear to, seem to, suggest", "la certitude du fait"],
                ["modaux", "may, might, could, would", "la possibilité"],
                ["adverbes", "arguably, largely, broadly, generally", "l'étendue"],
                ["formules", "it would appear that, there is evidence that", "la source"],
              ],
              note: "On combine rarement plus de deux marqueurs : au-delà, la phrase se dérobe.",
            },
          ],
        },
        {
          titre: "Doser l'étendue : la famille des adverbes",
          texte:
            "Les adverbes de portée sont les outils les plus économiques du hedging : un mot suffit, et il se place avant le verbe ou en tête de phrase.\n\nLargely, broadly et by and large disent « dans l'ensemble, avec des exceptions ». The findings are largely consistent with earlier work.\n\nGenerally et typically disent l'habitude sans l'universalité. Users typically abandon the form at this step.\n\nArguably est le plus subtil : il annonce que ce qui suit est défendable mais contesté. Arguably the most influential essay of the decade.\n\nRelatively et comparatively bornent en posant une référence implicite. The method is relatively straightforward — par rapport aux autres.\n\nÀ l'opposé, quelques adverbes renforcent et doivent donc être employés avec parcimonie : undoubtedly, clearly, evidently, unquestionably. Ils engagent l'auteur entièrement, et un lecteur anglophone les lit comme une promesse. En abuser produit l'effet inverse de celui qu'on cherche : le texte paraît plaider au lieu de démontrer.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même énoncé, deux portées",
              colonnes: [
                {
                  titre: "Sans marqueur — universel",
                  points: [
                    "Remote workers are more productive.",
                    "This approach solves the problem.",
                    "Le lecteur cherche le contre-exemple.",
                  ],
                },
                {
                  titre: "Borné — défendable",
                  points: [
                    "Remote workers tend to be more productive.",
                    "This approach largely solves the problem.",
                    "Le lecteur suit le raisonnement.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les formules impersonnelles",
          texte:
            "La troisième famille déplace la responsabilité de l'affirmation : ce n'est plus l'auteur qui parle, ce sont les données ou l'usage.\n\nThere is evidence that, the data suggest that, research indicates that : la source porte l'énoncé. Noter que data prend un verbe pluriel dans l'écrit soigné — the data suggest, non « suggests ».\n\nIt would appear that et it is widely held that mettent la formulation au conditionnel ou à l'impersonnel : personne ne s'engage nommément.\n\nOne could argue that ouvre une objection sans l'endosser. C'est la forme la plus utile en discussion : elle permet de poser une thèse adverse pour la traiter.\n\nEnfin, deux tournures marquent la limite explicitement. To the best of our knowledge annonce qu'on n'a pas tout vu. Within the scope of this study borne le domaine de validité.\n\nUn conseil de dosage pour finir : dans un paragraphe, une seule affirmation forte, et le reste bordé. C'est ce contraste qui rend l'affirmation forte audible.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Remote workers tend to be more productive.",
        francais: "Les télétravailleurs ont tendance à être plus productifs.",
        note: "Tend to borne l'énoncé sans l'affaiblir. Sans lui, la phrase se lit comme une loi.",
      },
      {
        etranger: "The findings are largely consistent.",
        francais: "Les résultats concordent dans l'ensemble.",
        note: "Largely dit « avec des exceptions » en un mot. Broadly et by and large sont voisins.",
      },
      {
        etranger: "It would appear that the trend has reversed.",
        francais: "Il semblerait que la tendance se soit inversée.",
        note: "La formule impersonnelle : personne ne s'engage nommément.",
      },
      {
        etranger: "The data suggest a different conclusion.",
        francais: "Les données suggèrent une autre conclusion.",
        note: "Data prend un verbe pluriel dans l'écrit soigné : the data suggest, pas « suggests ».",
      },
      {
        etranger: "One could argue that the opposite is true.",
        francais: "On pourrait soutenir que l'inverse est vrai.",
        note: "Ouvre une objection sans l'endosser. Très utile pour poser une thèse adverse.",
      },
      {
        etranger: "This is arguably the strongest argument.",
        francais: "C'est sans doute l'argument le plus fort.",
        note: "Arguably annonce que la thèse est défendable, non qu'elle est acquise.",
      },
      {
        etranger: "Users typically abandon the form here.",
        francais: "Les utilisateurs abandonnent généralement le formulaire ici.",
        note: "Typically dit l'habitude sans prétendre à l'universel.",
      },
      {
        etranger: "To the best of our knowledge, this is new.",
        francais: "À notre connaissance, c'est inédit.",
        note: "Annonce explicitement qu'on n'a pas tout vu. La formule de prudence savante.",
      },
      {
        etranger: "The effect is relatively modest.",
        francais: "L'effet est relativement modeste.",
        note: "Relatively pose une référence implicite : modeste par rapport à quoi.",
      },
      {
        etranger: "There is evidence that both apply.",
        francais: "Certains éléments indiquent que les deux s'appliquent.",
        note: "Evidence est indénombrable. Ici, la source porte l'affirmation à la place de l'auteur.",
      },
    ],
  },

  {
    slug: "en-c1-academique",
    category: "Vocabulaire",
    title: "Le vocabulaire de l'essai et du rapport",
    statement:
      "Outline, address, account for, underpin. Une quarantaine de verbes font tout l'anglais académique — et pas un seul d'entre eux n'est celui que le calque du français propose.",
    tip: "Address a question veut dire traiter une question, jamais « adresser ». C'est le verbe le plus employé et le plus mal traduit du champ.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Écrire un texte argumenté en anglais",
      sections: [
        {
          titre: "Les verbes de l'argumentation",
          texte:
            "L'anglais académique repose sur un noyau restreint de verbes. Les connaître dispense de traduire, et traduire est précisément ce qui produit les textes qui sonnent faux.\n\nPour annoncer : this paper outlines, examines, explores, sets out to show. Outline est plus léger qu'examine, qui est plus léger qu'establish.\n\nPour traiter un point : address a question, tackle an issue, deal with a case. Address ne veut jamais dire adresser.\n\nPour expliquer : account for est le verbe clé — this accounts for the discrepancy, cela explique l'écart. Le calque « explain the discrepancy » existe mais dit moins : account for suppose une explication complète.\n\nPour appuyer : underpin, sous-tendre ; substantiate, étayer ; corroborate, corroborer. Support est le générique.\n\nPour contester : challenge a claim, refute an argument, call into question. Refute est fort : il suppose la démonstration, pas le simple désaccord.\n\nPour conclure : the findings point to, the evidence bears out, this lends weight to.",
          visuels: [
            {
              type: "tableau",
              titre: "Le calque, et le verbe attendu",
              colonnes: ["Ce qu'on veut dire", "Le calque", "Le verbe anglais"],
              lignes: [
                ["traiter une question", "treat a question", "address a question"],
                ["expliquer un écart", "explain a gap", "account for a gap"],
                ["souligner un point", "underline a point", "highlight, stress"],
                ["étayer une thèse", "sustain a thesis", "substantiate a claim"],
                ["sous-tendre", "sub-tend", "underpin"],
                ["remettre en cause", "put in question", "call into question"],
                ["mettre en évidence", "put in evidence", "bring out, reveal"],
                ["s'appuyer sur", "lean on", "draw on, build on"],
              ],
              note: "Underline existe, mais ne se dit que du trait sous un mot.",
            },
          ],
        },
        {
          titre: "Les connecteurs, et leur registre",
          texte:
            "Les connecteurs anglais ne sont pas interchangeables : chacun porte un registre, et mélanger les registres est le défaut le plus visible d'un texte non natif.\n\nPour l'opposition, du plus soutenu au plus courant : notwithstanding, nevertheless, nonetheless, however, though, but. Notwithstanding est presque juridique ; but ne s'écrit pas en tête de phrase dans un texte formel — quoique l'usage se relâche.\n\nPour l'ajout : furthermore, moreover, in addition, also, and. Moreover et furthermore sont interchangeables et appartiennent à l'écrit formel ; dans un courriel ou une note, also et what's more passent mieux.\n\nPour la conséquence : consequently, therefore, thus, hence, so. Thus et hence sont les plus denses et se placent volontiers en incise. So est oral.\n\nPour la concession : admittedly, granted, to be sure. Chacun ouvre un paragraphe où l'on donne raison à l'adversaire avant de reprendre la main.\n\nDeux erreurs fréquentes. In fact ne veut pas dire « en fait » au sens de remplissage : il corrige ce qui précède. Actually corrige aussi, et n'a rien à voir avec « actuellement ».",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même lien, deux registres",
              colonnes: [
                {
                  titre: "Soutenu — l'écrit",
                  points: [
                    "notwithstanding these limits…",
                    "furthermore, the data show…",
                    "consequently, one may conclude…",
                  ],
                },
                {
                  titre: "Courant — l'oral, la note",
                  points: [
                    "even so…",
                    "what's more…",
                    "so we can say…",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "La structure attendue d'un paragraphe",
          texte:
            "L'anglais académique attend une architecture explicite, plus rigide que celle du français, et un lecteur anglophone la cherche activement.\n\nChaque paragraphe s'ouvre par une topic sentence, qui annonce ce qu'il va soutenir. Elle est brève, affirmative, et ne contient pas d'exemple.\n\nViennent ensuite le développement et les preuves — evidence, examples, data — introduits par les verbes vus plus haut.\n\nLe paragraphe se ferme par un lien vers la suite : a linking sentence. C'est ce qui manque le plus souvent dans un texte écrit par un francophone, habitué à laisser le lecteur faire la couture.\n\nAu niveau du texte entier, la même exigence : l'introduction annonce le plan — this essay first examines…, it then turns to… —, et la conclusion ne se contente pas de résumer, elle dit ce qui reste ouvert : further research is needed to establish whether…\n\nLe mot d'ordre est signposting : baliser. Un lecteur anglophone ne doit jamais avoir à deviner où il est.",
        },
      ],
    },
    cartes: [
      {
        etranger: "This paper addresses three questions.",
        francais: "Cet article traite trois questions.",
        note: "Address a question, traiter. Le mot ne veut jamais dire adresser.",
      },
      {
        etranger: "That accounts for the discrepancy.",
        francais: "Cela explique l'écart.",
        note: "Account for suppose une explication complète, là où explain se contente d'éclairer.",
      },
      {
        etranger: "These assumptions underpin the whole model.",
        francais: "Ces hypothèses sous-tendent tout le modèle.",
        note: "Underpin, sous-tendre. Le calque « sub-tend » n'existe pas.",
      },
      {
        etranger: "The results call the theory into question.",
        francais: "Les résultats remettent la théorie en cause.",
        note: "Le complément se place entre call et into : call the theory into question. « Put in question » est un calque.",
      },
      {
        etranger: "Further research is needed here.",
        francais: "Des travaux supplémentaires sont nécessaires ici.",
        note: "Research est indénombrable : jamais « researches » dans ce sens.",
      },
      {
        etranger: "Notwithstanding these limits, the trend holds.",
        francais: "Malgré ces limites, la tendance se maintient.",
        note: "Notwithstanding est presque juridique. However serait plus neutre.",
      },
      {
        etranger: "Furthermore, the sample was too small.",
        francais: "De plus, l'échantillon était trop réduit.",
        note: "Furthermore annonce un argument supplémentaire, souvent décisif.",
      },
      {
        etranger: "The evidence bears out this reading.",
        francais: "Les éléments confirment cette lecture.",
        note: "Bear out, confirmer par les faits. Plus fort que support.",
      },
      {
        etranger: "This essay draws on two earlier studies.",
        francais: "Cet essai s'appuie sur deux études antérieures.",
        note: "Draw on, s'appuyer sur une source. Build on, prolonger un travail.",
      },
      {
        etranger: "In fact, the opposite occurred.",
        francais: "En réalité, c'est l'inverse qui s'est produit.",
        note: "In fact corrige ce qui précède. Ce n'est pas le « en fait » de remplissage.",
      },
    ],
  },

  {
    slug: "en-c1-presse",
    category: "Vocabulaire",
    title: "L'idiome de la presse britannique",
    statement:
      "Les titres de journaux anglais suppriment les articles, mettent le passé au présent et le futur à l'infinitif. Une grammaire à part, qu'il faut savoir lire pour lire la presse.",
    tip: "Dans un titre, le présent simple raconte le passé et to + infinitif annonce le futur : PM to resign veut dire que le Premier ministre va démissionner.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Lire un journal anglais",
      sections: [
        {
          titre: "La grammaire des titres",
          texte:
            "Un titre de presse anglais — headline — obéit à des règles fixes, nées de la contrainte typographique et devenues une convention à part entière.\n\nLes articles disparaissent : Man bitten by dog, et non « A man was bitten by a dog ». Le verbe be disparaît aussi, au passif comme à la copule : Minister accused of fraud, Talks under way.\n\nLe présent simple raconte le passé : Bank raises rates veut dire que la banque a relevé ses taux. C'est le point qui égare le plus, parce que la phrase est parfaitement lisible au présent et donne un contresens de temporalité.\n\nTo + infinitif annonce le futur : PM to resign, le Premier ministre va démissionner. Il n'y a jamais de will dans un titre.\n\nLe participe présent seul marque le déroulement : Talks continuing. Le participe passé seul marque le passif accompli : Suspect arrested.\n\nEnfin les deux-points remplacent le verbe déclaratif : Minister: reform is essential, où l'on comprend « le ministre a déclaré que ».",
          visuels: [
            {
              type: "tableau",
              titre: "Le titre, et ce qu'il dit vraiment",
              colonnes: ["Le titre", "La phrase complète", "Le temps réel"],
              lignes: [
                ["Bank raises rates", "The bank has raised rates.", "passé"],
                ["PM to resign", "The PM is going to resign.", "futur"],
                ["Talks continuing", "Talks are continuing.", "présent"],
                ["Suspect arrested", "A suspect has been arrested.", "passé, passif"],
                ["Minister accused of fraud", "A minister has been accused…", "passé, passif"],
                ["Death toll rises", "The death toll has risen.", "passé"],
                ["Firm in talks over sale", "A firm is in talks about a sale.", "présent"],
              ],
            },
          ],
        },
        {
          titre: "Les mots courts que la presse préfère",
          texte:
            "Les titres emploient un lexique à eux, choisi pour sa brièveté. Ces mots sont rares ailleurs et constants ici : les connaître change complètement la lisibilité d'une une.\n\nPour la hausse et la baisse : soar et surge pour une hausse forte, slump et plunge pour une chute, ease pour un ralentissement. Rise et fall paraissent longs à un titreur.\n\nPour les personnes : PM pour Prime Minister, MP pour Member of Parliament, cop pour policier, boss pour dirigeant, chief pour responsable, aide pour collaborateur.\n\nPour les actions : axe, supprimer ; bid, tenter ou offre ; probe, enquête ; row, querelle ; vow, promettre ; slam et blast, critiquer violemment ; back, soutenir ; quit, démissionner ; oust, évincer ; curb, limiter ; hail, saluer.\n\nCes mots gardent leur sens dans le corps de l'article, mais leur fréquence y chute. Row, par exemple, veut dire rang partout ailleurs ; dans un titre, c'est toujours une dispute — et il se prononce alors comme « now », pas comme « no ».",
          visuels: [
            {
              type: "comparaison",
              titre: "Le mot de la une, le mot ordinaire",
              colonnes: [
                {
                  titre: "Dans un titre",
                  points: [
                    "axe → cut, abolish",
                    "probe → investigation",
                    "row → dispute, argument",
                    "vow → promise",
                    "slam → criticise sharply",
                  ],
                },
                {
                  titre: "Dans l'article",
                  points: [
                    "The company will cut 300 jobs.",
                    "An investigation has been opened.",
                    "A dispute broke out between…",
                    "The minister promised to…",
                    "The union sharply criticised…",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le journal, ses parties, sa ligne",
          texte:
            "Savoir nommer les parties d'un journal permet de citer correctement, et de comprendre ce qu'on lit.\n\nUn article de fait est a news report ou a news story. Un article d'analyse signé est a feature. Un éditorial non signé, qui engage le journal, est a leader au Royaume-Uni et an editorial aux États-Unis. Une tribune d'un auteur extérieur est an op-ed — de opposite the editorial page. Une chronique régulière est a column, et son auteur a columnist.\n\nLe chapeau qui suit le titre est a standfirst au Royaume-Uni, a deck aux États-Unis. La légende d'une photo est a caption. L'accroche de première ligne est the lead, souvent orthographiée lede dans le jargon.\n\nEnfin, deux notions qu'un lecteur français attend et qui se nomment autrement. La ligne éditoriale se dit editorial stance ou editorial line ; le fait qu'un journal soutienne un parti se dit endorsement, et il est explicite au Royaume-Uni comme aux États-Unis : the paper endorsed the candidate.",
        },
      ],
    },
    cartes: [
      {
        etranger: "The headline read: PM to resign.",
        francais: "Le titre disait : le Premier ministre va démissionner.",
        note: "To + infinitif annonce le futur dans un titre. Il n'y a jamais de will.",
      },
      {
        etranger: "Bank raises rates for the third time.",
        francais: "La banque a relevé ses taux pour la troisième fois.",
        note: "Le présent simple d'un titre raconte le passé. C'est le piège principal.",
      },
      {
        etranger: "Shares soared after the announcement.",
        francais: "Les actions ont bondi après l'annonce.",
        note: "Soar et surge pour une hausse forte ; slump et plunge pour une chute.",
      },
      {
        etranger: "The firm plans to axe three hundred jobs.",
        francais: "L'entreprise prévoit de supprimer trois cents postes.",
        note: "Axe, supprimer, dans le lexique de la presse. Ailleurs, on dirait cut.",
      },
      {
        etranger: "Police have launched a probe.",
        francais: "La police a ouvert une enquête.",
        note: "A probe, l'enquête, dans les titres. Police prend un verbe pluriel en anglais britannique.",
      },
      {
        etranger: "There was a row over the funding.",
        francais: "Il y a eu une querelle au sujet du financement.",
        note: "Row au sens de dispute rime avec now ; row au sens de rang rime avec no.",
      },
      {
        etranger: "The minister vowed to resign.",
        francais: "Le ministre a juré de démissionner.",
        note: "Vow, promettre solennellement. Quit et oust complètent le lexique.",
      },
      {
        etranger: "She writes a weekly column.",
        francais: "Elle tient une chronique hebdomadaire.",
        note: "A column, la chronique ; a columnist, son auteur ; an op-ed, la tribune extérieure.",
      },
      {
        etranger: "The paper endorsed the candidate.",
        francais: "Le journal a apporté son soutien au candidat.",
        note: "Endorsement, le soutien affiché d'un journal. La pratique est explicite en anglais.",
      },
      {
        etranger: "The caption named the wrong person.",
        francais: "La légende désignait la mauvaise personne.",
        note: "A caption, la légende d'une photo ; a standfirst, le chapeau sous le titre.",
      },
    ],
  },

  {
    slug: "en-c1-registre",
    category: "Vocabulaire",
    title: "Choisir son registre",
    statement:
      "Buy, purchase, procure. Ask, request, solicit. Trois mots par idée, du saxon court au latin long — et le registre se lit dans la longueur du mot.",
    tip: "Règle empirique : plus le mot est long et d'origine latine, plus il est formel. Le mot saxon court est neutre ou familier.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les trois étages de l'anglais",
      sections: [
        {
          titre: "Saxon, français, latin",
          texte:
            "L'anglais a trois couches lexicales superposées, et elles correspondent presque exactement à trois registres.\n\nLa couche saxonne est la plus ancienne : mots courts, souvent monosyllabiques, verbes à particule. Ask, get, buy, help, start, end, go on. C'est le registre neutre ou familier, celui de la conversation et du bon journalisme.\n\nLa couche française, entrée après 1066, occupe le milieu : mots de deux ou trois syllabes, registre soutenu sans être technique. Request, obtain, purchase, assist, commence, terminate, continue.\n\nLa couche latine et grecque, arrivée par les savants, occupe le haut : mots longs, souvent abstraits, registre technique ou juridique. Solicit, procure, acquire, facilitate, initiate, terminate, perpetuate.\n\nLa conséquence pour un francophone est paradoxale : les mots qui lui viennent naturellement, parce qu'ils ressemblent au français, sont presque toujours trop formels. Écrire commence là où un anglophone écrirait start donne un texte guindé — et un francophone ne l'entend pas, puisque « commencer » est neutre en français.",
          visuels: [
            {
              type: "tableau",
              titre: "La même idée, trois étages",
              colonnes: ["Familier / neutre", "Soutenu", "Formel ou technique"],
              lignes: [
                ["ask", "request", "solicit"],
                ["buy", "purchase", "procure"],
                ["get", "obtain", "acquire"],
                ["start", "begin", "initiate"],
                ["end", "finish", "terminate"],
                ["help", "assist", "facilitate"],
                ["show", "demonstrate", "evidence"],
                ["let", "allow", "authorise"],
                ["ask for", "request", "requisition"],
                ["go up", "increase", "escalate"],
              ],
              note: "Le francophone glisse spontanément vers la colonne du milieu ou de droite.",
            },
          ],
        },
        {
          titre: "Le verbe à particule, marqueur du parlé",
          texte:
            "Le verbe à particule — phrasal verb — est le trait le plus sûr du registre courant, et son absence le trait le plus sûr du registre formel.\n\nPresque tout phrasal verb a un équivalent latin d'un seul mot. Put off donne postpone, find out donne discover, look into donne investigate, go on donne continue, give up donne abandon, set up donne establish, carry out donne perform, cut down on donne reduce.\n\nDans une conversation, l'équivalent latin sonne pompeux : dire I shall postpone our meeting à un collègue est excessif là où I'll put our meeting off passe seul.\n\nÀ l'écrit formel, l'inverse : un rapport qui écrit we found out that paraîtra léger là où we discovered that convient.\n\nLa difficulté pour un francophone est qu'il connaît d'emblée la colonne latine — elle ressemble au français — et ignore la colonne des phrasal verbs, qui est pourtant celle de la langue vivante. Le C1 consiste à posséder les deux et à choisir.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même message, deux registres",
              colonnes: [
                {
                  titre: "À un collègue",
                  points: [
                    "I'll put the meeting off.",
                    "Let's find out what happened.",
                    "We had to cut down on costs.",
                  ],
                },
                {
                  titre: "Dans un rapport",
                  points: [
                    "The meeting has been postponed.",
                    "The cause remains to be determined.",
                    "Costs were reduced accordingly.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les erreurs de registre les plus visibles",
          texte:
            "Trois écarts trahissent immédiatement un locuteur non natif, et aucun n'est une faute de grammaire.\n\nLe premier est le mélange dans une même phrase : Kindly note that we've sorted it out. Kindly appartient au registre commercial ancien, sorted out au registre familier. Le lecteur bute.\n\nLe deuxième est la formule de politesse surdimensionnée. Un courriel professionnel anglophone est bien plus direct qu'un courriel français : Hi Sarah, quick question — passe très bien, là où le francophone écrirait trois lignes d'introduction. Inversement, Dear Sir or Madam, I have the honour to solicit… ne s'écrit plus depuis un demi-siècle.\n\nLe troisième est l'emploi de mots latins rares là où l'anglais courant a un mot simple. Utilise pour use, commence pour start, endeavour pour try : chacun donne une phrase correcte et légèrement ridicule. La règle d'or de l'écriture anglaise, formulée par Orwell, tient en une ligne : never use a long word where a short one will do.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I'll put the meeting off until Monday.",
        francais: "Je vais reporter la réunion à lundi.",
        note: "Put off, registre courant ; postpone, registre écrit. Les deux disent la même chose.",
      },
      {
        etranger: "We need to find out what went wrong.",
        francais: "Nous devons découvrir ce qui a mal tourné.",
        note: "Find out à l'oral, determine ou establish dans un rapport.",
      },
      {
        etranger: "The company purchased the building.",
        francais: "L'entreprise a acheté l'immeuble.",
        note: "Purchase est soutenu ; buy est neutre. Dans une conversation, buy suffit.",
      },
      {
        etranger: "Kindly confirm receipt of this letter.",
        francais: "Veuillez accuser réception de ce courrier.",
        note: "Kindly appartient au registre commercial. Le mélanger au familier fait buter le lecteur.",
      },
      {
        etranger: "They set up a new department.",
        francais: "Ils ont créé un nouveau service.",
        note: "Set up à l'oral, establish à l'écrit. Le phrasal verb marque le registre courant.",
      },
      {
        etranger: "The contract was terminated last month.",
        francais: "Le contrat a été résilié le mois dernier.",
        note: "Terminate est juridique. End serait neutre, et trop léger pour un contrat.",
      },
      {
        etranger: "Never use a long word where a short one will do.",
        francais: "N'employez jamais un mot long là où un mot court suffit.",
        note: "La règle d'Orwell, et le meilleur conseil d'écriture anglaise.",
      },
      {
        etranger: "Could you look into this for me?",
        francais: "Pourriez-vous vous pencher là-dessus pour moi ?",
        note: "Look into à l'oral, investigate à l'écrit formel.",
      },
      {
        etranger: "We had to cut down on costs.",
        francais: "Nous avons dû réduire les coûts.",
        note: "Cut down on à l'oral, reduce à l'écrit. Le francophone connaît d'emblée reduce.",
      },
      {
        etranger: "Hi Sarah, quick question about Friday.",
        francais: "Bonjour Sarah, une question rapide au sujet de vendredi.",
        note: "Le courriel professionnel anglophone est bien plus direct que son équivalent français.",
      },
    ],
  },

  {
    slug: "en-c1-idiomes",
    category: "Vocabulaire",
    title: "Les idiomes qu'on ne devine pas",
    statement:
      "Once in a blue moon, the elephant in the room, to bite the bullet. Des expressions dont le sens ne se déduit d'aucun de leurs mots, et qui traversent la conversation adulte.",
    tip: "Un idiome se retient avec sa situation d'emploi, jamais avec sa traduction : c'est le contexte qui le rappelle, pas le sens des mots.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les expressions opaques",
      sections: [
        {
          titre: "Ce qui fait qu'un idiome est opaque",
          texte:
            "Une expression est idiomatique quand son sens ne se calcule pas à partir de celui de ses mots. Kick the bucket ne parle ni de coup de pied ni de seau : cela veut dire mourir, sur un ton badin.\n\nCette opacité a une conséquence pratique : un idiome ne s'apprend pas comme du vocabulaire. Retenir « bite the bullet = prendre son courage à deux mains » ne suffit pas, parce qu'on ne saura pas quand l'employer. Il faut retenir la situation : bite the bullet se dit d'une décision désagréable qu'on a différée et qu'on finit par prendre.\n\nDeuxième conséquence : les idiomes sont fixes. On ne peut ni changer un mot, ni ajouter un adjectif, ni mettre au pluriel. C'est spill the beans, jamais « spill the peas ». C'est the elephant in the room, jamais « the elephant in the office ».\n\nTroisième conséquence : ils portent un registre. Certains sont neutres et passent partout — at the end of the day, in the long run. D'autres sont familiers et déplacés à l'écrit — kick the bucket, cost an arm and a leg.",
          visuels: [
            {
              type: "tableau",
              titre: "L'idiome, sa situation, son registre",
              colonnes: ["L'idiome", "Ce qu'il veut dire", "Quand", "Registre"],
              lignes: [
                ["the elephant in the room", "le sujet évité", "réunion, débat", "neutre"],
                ["bite the bullet", "s'y résoudre enfin", "décision différée", "neutre"],
                ["once in a blue moon", "très rarement", "fréquence", "courant"],
                ["cut corners", "bâcler pour aller vite", "critique d'un travail", "neutre"],
                ["the ball is in your court", "à toi de jouer", "négociation", "neutre"],
                ["cost an arm and a leg", "coûter très cher", "prix", "familier"],
                ["spill the beans", "vendre la mèche", "secret", "familier"],
                ["a blessing in disguise", "un mal pour un bien", "rétrospective", "neutre"],
              ],
            },
          ],
        },
        {
          titre: "Les familles qui aident à retenir",
          texte:
            "Les idiomes se regroupent par domaine d'origine, et ce classement en facilite la mémorisation.\n\nLa mer et la marine ont beaucoup donné, langue d'île oblige : learn the ropes, apprendre le métier ; give someone a wide berth, éviter quelqu'un ; take the wind out of someone's sails, couper l'herbe sous le pied ; plain sailing, sans difficulté ; all hands on deck, mobilisation générale.\n\nLe sport en a donné autant. Du cricket : it's not cricket, ce n'est pas fair-play ; be on a sticky wicket, être en mauvaise posture. De la boxe : below the belt, déloyal ; throw in the towel, abandonner. Du tennis : the ball is in your court.\n\nLa guerre et la chasse : bite the bullet, jump the gun, partir trop tôt ; a shot in the dark, une supposition hasardeuse.\n\nEt Shakespeare, à lui seul, a fourni des dizaines d'expressions courantes : break the ice, wild-goose chase, in a pickle, a foregone conclusion.",
          visuels: [
            {
              type: "comparaison",
              titre: "La même idée, deux images",
              colonnes: [
                {
                  titre: "L'image anglaise",
                  points: [
                    "It's raining cats and dogs.",
                    "To kill two birds with one stone.",
                    "The straw that broke the camel's back.",
                  ],
                },
                {
                  titre: "L'image française",
                  points: [
                    "Il pleut des cordes.",
                    "Faire d'une pierre deux coups.",
                    "La goutte d'eau qui fait déborder le vase.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Quand ne pas s'en servir",
          texte:
            "Un apprenant qui vient d'apprendre dix idiomes veut les employer tous, et c'est là qu'il se trahit.\n\nPremier écueil : la densité. Un anglophone en place un de temps en temps ; en enfiler trois dans un paragraphe produit un effet de pastiche.\n\nDeuxième écueil : le registre. Cost an arm and a leg n'a pas sa place dans un rapport financier ; on y écrit prohibitively expensive.\n\nTroisième écueil : la fraîcheur. Certains idiomes sont devenus des clichés que les rédacteurs évitent — at the end of the day, think outside the box, a level playing field. Les employer ne fait pas de faute, mais signale une langue apprise dans les manuels.\n\nQuatrième écueil : la variation régionale. It's not cricket ne se dit pas aux États-Unis, où l'on préfère des images de baseball : out of left field, a ballpark figure, touch base. Un francophone qui mélange les deux jeux sonne étrange des deux côtés.\n\nLe bon usage est le même que pour l'euphémisme : comprendre large, produire peu.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Nobody mentioned the elephant in the room.",
        francais: "Personne n'a évoqué le sujet que tout le monde évitait.",
        note: "L'expression est fixe : ni « in the office » ni « in the meeting ».",
      },
      {
        etranger: "We'll have to bite the bullet.",
        francais: "Il va falloir s'y résoudre.",
        note: "Se dit d'une décision désagréable longtemps différée. C'est la situation qui la rappelle.",
      },
      {
        etranger: "He only calls once in a blue moon.",
        francais: "Il n'appelle qu'une fois tous les trente-six du mois.",
        note: "Once in a blue moon, très rarement. Registre courant, écrit compris.",
      },
      {
        etranger: "They cut corners on the safety checks.",
        francais: "Ils ont bâclé les contrôles de sécurité.",
        note: "Cut corners porte toujours une critique : la rapidité au prix de la qualité.",
      },
      {
        etranger: "The ball is in your court now.",
        francais: "La balle est dans ton camp maintenant.",
        note: "Venu du tennis. L'une des rares images que le français partage mot pour mot.",
      },
      {
        etranger: "It cost an arm and a leg.",
        francais: "Ça a coûté les yeux de la tête.",
        note: "Familier : dans un rapport, on écrirait prohibitively expensive.",
      },
      {
        etranger: "Losing that job was a blessing in disguise.",
        francais: "Perdre cet emploi a été un mal pour un bien.",
        note: "S'emploie rétrospectivement, jamais sur le moment.",
      },
      {
        etranger: "She learnt the ropes very quickly.",
        francais: "Elle a appris le métier très vite.",
        note: "Image de marine, comme give a wide berth et plain sailing.",
      },
      {
        etranger: "Don't jump the gun on this.",
        francais: "Ne t'emballe pas trop vite là-dessus.",
        note: "Jump the gun, partir avant le signal. Image d'athlétisme.",
      },
      {
        etranger: "Let's give him a ballpark figure.",
        francais: "Donnons-lui un ordre de grandeur.",
        note: "Image de baseball, donc américaine. It's not cricket est son pendant britannique.",
      },
    ],
  },
];
