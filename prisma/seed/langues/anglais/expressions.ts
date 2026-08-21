/**
 * Anglais — cinq séries d'expressions.
 *
 * La catégorie n'en comptait que deux. Or c'est elle qui décide si une
 * conversation se tient ou s'arrête : on peut connaître mille mots et rester
 * muet faute de savoir relancer, nuancer, ou dire qu'on n'a pas compris.
 *
 * Ces séries vont du B1 au C1 et suivent une progression : d'abord tenir la
 * conversation, puis prendre position, puis réagir, puis citer, puis choisir
 * son degré de familiarité.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_EXPRESSIONS: LotCartes[] = [
  {
    slug: "en-expr-conversation",
    category: "Expressions",
    title: "Tenir la conversation",
    statement:
      "Relancer, gagner du temps, faire répéter, couper court. Les formules qui font qu'un échange dure — et sans lesquelles on répond par oui et par non.",
    tip: "Un anglophone ne laisse presque jamais un silence : il place un mot de relance. Ne rien dire passe pour du désintérêt, pas pour de la politesse.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les formules de la conversation",
      sections: [
        {
          titre: "Ce que le silence dit en anglais",
          texte:
            "Une conversation anglophone tolère mal le vide. Là où le français admet une pause pendant qu'on réfléchit, l'anglais attend un signal — un mot, un son, une relance — qui dit que l'échange continue.\n\nCela s'appelle le backchannelling, et c'est ce qui manque le plus à un francophone. Right, sure, I see, uh-huh, really, exactly, absolutely : ces mots ne veulent rien dire en eux-mêmes. Ils disent : je suis là, je suis d'accord pour que tu continues.\n\nUn locuteur qui les omet paraît distrait ou désapprobateur. Un locuteur qui les place trop peu souvent est régulièrement interrompu par un « are you still there ? » au téléphone.\n\nLa deuxième famille est celle des mots qui gagnent du temps : well, actually, I mean, you know, let me think, that's a good question. Ils remplacent le silence pendant qu'on cherche. Un francophone qui traduit son « euh » par « euh » se signale immédiatement ; l'hésitation anglaise se dit er ou erm, et surtout well.\n\nLa troisième est celle des relances : and then ? really ? how come ? what happened next ? Elles demandent la suite et prouvent qu'on écoute.",
          visuels: [
            {
              type: "tableau",
              titre: "Les quatre familles",
              colonnes: ["Fonction", "Formules", "Quand"],
              lignes: [
                ["accuser réception", "right, sure, I see, exactly", "pendant que l'autre parle"],
                ["gagner du temps", "well, I mean, let me think", "avant de répondre"],
                ["relancer", "and then? really? how come?", "pour faire continuer"],
                ["faire répéter", "sorry? come again? say that again?", "quand on n'a pas saisi"],
                ["reformuler", "so you're saying that…", "pour vérifier qu'on a compris"],
                ["couper court", "anyway, right then, I'd better go", "pour finir"],
              ],
              note: "Pardon ? est américain, sorry ? britannique. What ? seul passe pour brusque dans les deux.",
            },
          ],
        },
        {
          titre: "Faire répéter sans se vexer ni vexer",
          texte:
            "C'est la situation la plus fréquente et la plus mal gérée. Un apprenant qui n'a pas compris se tait, hoche la tête, et perd la conversation entière.\n\nLes formules existent, et elles sont graduées.\n\nLa plus neutre : sorry ? avec une intonation montante. Elle suffit dans la plupart des cas. Come again ? est plus familière ; say that again ? aussi.\n\nQuand c'est le débit : could you speak a bit more slowly, please ? Quand c'est un mot précis : sorry, what does « redundancy » mean ? — demander le mot est bien plus efficace que demander toute la phrase.\n\nQuand on a compris à moitié, la meilleure formule est la reformulation : so you're saying we should wait ? Elle montre où est le trou, et l'interlocuteur corrige exactement le point manquant.\n\nDeux choses à éviter. What ? seul, qui sonne brusque dans les deux variantes. Et je-ne-comprends-pas répété : I don't understand n'indique pas quoi reprendre, et l'interlocuteur ne peut que répéter à l'identique, ce qui ne sert à rien.\n\nUne dernière formule sauve souvent la mise : I'm not sure I follow — je ne suis pas sûr de suivre. Elle est polie, elle est vague, et elle invite à reprendre autrement.",
          visuels: [
            {
              type: "comparaison",
              titre: "Ce qui marche, ce qui bloque",
              colonnes: [
                {
                  titre: "Ce qui relance",
                  points: [
                    "Sorry, what does that mean?",
                    "So you're saying we should wait?",
                    "I'm not sure I follow.",
                  ],
                },
                {
                  titre: "Ce qui bloque",
                  points: [
                    "What?",
                    "I don't understand.",
                    "Le silence et le hochement de tête.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Ouvrir et fermer",
          texte:
            "Les deux moments les plus codifiés d'une conversation anglophone sont son début et sa fin, et ils suivent un scénario fixe.\n\nÀ l'ouverture, la question rituelle — how are you ? how's it going ? all right ? — n'appelle pas une réponse détaillée. Fine, thanks, and you ? suffit, et déborder passe pour lourd. All right ? en anglais britannique est un bonjour, pas une question sur la santé.\n\nSuit le small talk, qui n'est pas une perte de temps mais un préalable obligatoire : la météo, le trajet, le week-end. Aller droit au sujet sans passer par là paraît abrupt, surtout au Royaume-Uni.\n\nÀ la fermeture, le scénario est encore plus fixe. On annonce qu'on va partir — anyway, right then, I'd better get going —, on justifie brièvement, on remercie, on projette une prochaine fois : see you soon, let's catch up. Partir sans cette séquence laisse une impression de fuite.\n\nAu téléphone, la même séquence se contracte : right, I'll let you go. Cette formule est particulièrement utile parce qu'elle rend service à l'autre — c'est lui qu'on libère, pas soi qu'on sauve.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Sorry, I didn't quite catch that.",
        francais: "Pardon, je n'ai pas bien saisi.",
        note: "Catch pour saisir au vol. Plus précis que « I don't understand », qui n'indique rien à reprendre.",
      },
      {
        etranger: "So you're saying we should wait.",
        francais: "Si je comprends bien, il faut attendre.",
        note: "La reformulation montre où est le trou : l'interlocuteur corrige le point exact.",
      },
      {
        etranger: "I'm not sure I follow.",
        francais: "Je ne suis pas sûr de suivre.",
        note: "Polie et vague : elle invite à reprendre autrement, sans accuser personne.",
      },
      {
        etranger: "Let me think about that for a second.",
        francais: "Laisse-moi y réfléchir une seconde.",
        note: "Gagner du temps à voix haute. Le silence pur passe pour du désintérêt.",
      },
      {
        etranger: "Really? And then what happened?",
        francais: "Vraiment ? Et ensuite ?",
        note: "La relance : elle prouve qu'on écoute et fait continuer l'autre.",
      },
      {
        etranger: "That's a good question, actually.",
        francais: "C'est une bonne question, d'ailleurs.",
        note: "Formule de temporisation. Actually corrige ou nuance, il ne veut pas dire « actuellement ».",
      },
      {
        etranger: "Anyway, I'd better get going.",
        francais: "Bon, je vais devoir y aller.",
        note: "Anyway ouvre la séquence de clôture. Partir sans elle laisse une impression de fuite.",
      },
      {
        etranger: "Right, I'll let you go.",
        francais: "Bon, je te laisse.",
        note: "Au téléphone : la formule rend service à l'autre plutôt que de s'échapper soi-même.",
      },
      {
        etranger: "How's it going? All right?",
        francais: "Comment ça va ? Ça va ?",
        note: "All right ? britannique est un bonjour, pas une question sur la santé.",
      },
      {
        etranger: "Let's catch up next week.",
        francais: "On se rappelle la semaine prochaine.",
        note: "Catch up : reprendre contact. La projection d'une prochaine fois clôt la conversation.",
      },
    ],
  },

  {
    slug: "en-expr-accord",
    category: "Expressions",
    title: "Approuver, nuancer, refuser",
    statement:
      "Dire oui, dire non, et surtout dire « oui mais ». Un désaccord anglophone s'ouvre presque toujours par un accord partiel — et le refuser fait passer pour agressif.",
    tip: "Un désaccord direct — you're wrong, I disagree — est nettement plus dur en anglais qu'en français. La formule attendue commence par une concession.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Prendre position sans braquer",
      sections: [
        {
          titre: "La structure en trois temps",
          texte:
            "Un désaccord anglophone suit presque toujours le même mouvement, et le connaître dispense de chercher ses mots.\n\nPremier temps, la concession : on reconnaît quelque chose. I see what you mean, that's a fair point, I take your point, you're right that…\n\nDeuxième temps, le pivot : un mot signale que le désaccord arrive. But, however, although, that said, having said that, still.\n\nTroisième temps, la position : on dit ce qu'on pense, et on peut y aller franchement une fois les deux premiers temps posés.\n\nCette séquence n'est pas de l'hypocrisie. Elle remplit une fonction : elle prouve qu'on a écouté avant de répondre. Un désaccord qui ne commence pas par une concession est entendu comme un refus d'écouter, indépendamment de son contenu.\n\nD'où l'erreur classique du francophone : traduire directement « je ne suis pas d'accord ». La phrase est correcte, et elle arrive comme une gifle dans une réunion anglophone. La version attendue est I'm not sure I agree, ou I see it slightly differently — le contenu est identique, la porte reste ouverte.",
          visuels: [
            {
              type: "tableau",
              titre: "L'échelle du désaccord",
              colonnes: ["Formule", "Force", "Contexte"],
              lignes: [
                ["I couldn't agree more.", "accord total", "—"],
                ["Absolutely. / Exactly.", "accord franc", "courant"],
                ["I see your point, but…", "désaccord doux", "réunion"],
                ["I'm not sure I agree.", "désaccord poli", "le standard"],
                ["I see it slightly differently.", "désaccord poli", "le standard"],
                ["I'm afraid I disagree.", "désaccord ferme", "assumé"],
                ["With respect, that's not right.", "désaccord dur", "alerte"],
                ["You're wrong.", "franchement brutal", "à éviter"],
              ],
              note: "With the greatest respect annonce toujours un désaccord ferme, jamais un compliment.",
            },
          ],
        },
        {
          titre: "Approuver, à tous les degrés",
          texte:
            "L'accord aussi se gradue, et employer toujours yes appauvrit considérablement.\n\nPour l'accord plein : absolutely, exactly, definitely, that's right, couldn't agree more. Cette dernière formule surprend un francophone parce qu'elle est négative : I couldn't agree more veut dire qu'on est totalement d'accord, pas le contraire.\n\nPour l'accord modéré : I suppose so, I guess so, fair enough, that makes sense. Fair enough est particulièrement utile : elle accepte un argument sans le partager entièrement.\n\nPour l'accord de principe : in theory, yes ; up to a point ; broadly speaking, yes.\n\nUne nuance que les francophones ratent régulièrement : répondre à une question négative. « You don't like it, do you ? » — répondre no confirme qu'on n'aime pas ; répondre yes contredit. Le français fait l'inverse avec son « si », qui n'existe pas en anglais. Dans le doute, on répète le verbe : no, I don't ; yes, I do.\n\nEnfin, l'accord silencieux n'existe pas. Ne pas répondre à une proposition est lu comme un refus, pas comme une acceptation tacite.",
          visuels: [
            {
              type: "comparaison",
              titre: "Répondre à une question négative",
              colonnes: [
                {
                  titre: "En français",
                  points: [
                    "— Tu n'aimes pas ? — Si !",
                    "Le « si » contredit la négation.",
                    "Pas d'équivalent en anglais.",
                  ],
                },
                {
                  titre: "En anglais",
                  points: [
                    "— You don't like it? — Yes, I do.",
                    "— You don't like it? — No, I don't.",
                    "On répète le verbe pour lever le doute.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Refuser une demande",
          texte:
            "Refuser est la situation où le francophone paraît le plus abrupt, et où quelques formules changent tout.\n\nLa structure attendue comporte trois éléments : un regret, la raison, et une contre-proposition. I'm afraid I can't make Tuesday — I've got a client meeting — but Wednesday would work.\n\nLe regret est presque obligatoire : I'm afraid, unfortunately, sadly. Un refus qui ne commence pas par l'un des trois paraît sec.\n\nLa raison peut être brève, et elle n'a pas besoin d'être détaillée : un anglophone ne demandera pas de justification.\n\nLa contre-proposition est ce qui distingue un refus d'une fin de non-recevoir. Même vague — maybe another time, let's see next month — elle maintient la relation.\n\nQuelques formules toutes faites méritent d'être sues. I'd love to, but… ouvre un refus chaleureux. I'll have to pass on this one est un refus décontracté. Can I get back to you on that ? diffère sans refuser, et c'est souvent la meilleure réponse quand on ne sait pas encore.\n\nEt une à connaître pour l'entendre plutôt que pour l'employer : let me think about it, dans un contexte professionnel, veut souvent dire non.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I see your point, but I'm not convinced.",
        francais: "Je vois ce que tu veux dire, mais je ne suis pas convaincu.",
        note: "La structure en trois temps : concession, pivot, position.",
      },
      {
        etranger: "I'm not sure I agree with that.",
        francais: "Je ne suis pas sûr d'être d'accord.",
        note: "Le désaccord standard. « I disagree » tout court arrive comme une gifle en réunion.",
      },
      {
        etranger: "I couldn't agree more.",
        francais: "Je suis entièrement d'accord.",
        note: "La forme négative dit l'accord total : on ne pourrait pas être plus d'accord.",
      },
      {
        etranger: "Fair enough, I hadn't thought of that.",
        francais: "C'est juste, je n'y avais pas pensé.",
        note: "Fair enough accepte un argument sans le partager entièrement.",
      },
      {
        etranger: "I see it slightly differently.",
        francais: "Je vois les choses un peu autrement.",
        note: "Slightly atténue à peine : le désaccord est réel, la porte reste ouverte.",
      },
      {
        etranger: "You don't like it? Yes, I do.",
        francais: "Tu n'aimes pas ? Si.",
        note: "Le « si » français n'existe pas : on répond yes et on répète le verbe.",
      },
      {
        etranger: "I'm afraid I can't make Tuesday.",
        francais: "Je crains de ne pas pouvoir mardi.",
        note: "I'm afraid ouvre le refus. Sans regret initial, la phrase paraît sèche.",
      },
      {
        etranger: "I'd love to, but I'm away that week.",
        francais: "J'aimerais beaucoup, mais je suis absent cette semaine-là.",
        note: "Le refus chaleureux : regret, raison brève, et la relation tient.",
      },
      {
        etranger: "Can I get back to you on that?",
        francais: "Je peux te répondre plus tard là-dessus ?",
        note: "Diffère sans refuser. Souvent la meilleure réponse quand on ne sait pas encore.",
      },
      {
        etranger: "Up to a point, yes.",
        francais: "Jusqu'à un certain point, oui.",
        note: "L'accord partiel : il annonce que la suite va nuancer.",
      },
    ],
  },

  {
    slug: "en-expr-emotions",
    category: "Expressions",
    title: "Réagir : surprise, agacement, soulagement",
    statement:
      "Ce qu'on dit quand on apprend une nouvelle, quand on s'impatiente, quand on est soulagé. Des formules courtes, très fréquentes, et qu'aucun manuel ne réunit.",
    tip: "L'anglais réagit par des formules figées plus que par des phrases construites : you're kidding, no way, thank goodness. Les traduire mot à mot ne donne rien.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les réactions toutes faites",
      sections: [
        {
          titre: "La surprise et l'incrédulité",
          texte:
            "L'anglais a plus de formules de surprise que le français, et elles se gradent.\n\nPour la surprise ordinaire : really ? oh right ? is that so ? Elles marquent l'intérêt sans engager grand-chose.\n\nPour la surprise forte : you're kidding, you're joking, no way, seriously ? get out of here — cette dernière très américaine et purement incrédule, elle ne demande à personne de sortir.\n\nPour la stupéfaction : I can't believe it, that's incredible, well I never — cette dernière vieillie et britannique, employée aujourd'hui avec une pointe d'ironie.\n\nPour la mauvaise surprise : oh no, that's awful, what a shame, that's rotten luck.\n\nUne remarque de registre : les jurons anglais couvrent une large part de ce terrain, et leur force varie beaucoup entre les deux rives. Bloody est modéré au Royaume-Uni et incompris aux États-Unis ; certains mots courants dans une conversation britannique entre amis sont franchement offensants ailleurs. La prudence consiste à les reconnaître sans les employer tant qu'on ne maîtrise pas le contexte.\n\nEnfin, une formule utile pour amortir une mauvaise nouvelle qu'on annonce : you might want to sit down for this.",
          visuels: [
            {
              type: "tableau",
              titre: "Réagir, selon la nouvelle",
              colonnes: ["Situation", "Formules", "Registre"],
              lignes: [
                ["surprise ordinaire", "really? oh right?", "neutre"],
                ["surprise forte", "you're kidding, no way", "familier"],
                ["stupéfaction", "I can't believe it", "neutre"],
                ["mauvaise nouvelle", "oh no, what a shame", "neutre"],
                ["compassion", "I'm so sorry to hear that", "soigné"],
                ["soulagement", "thank goodness, what a relief", "neutre"],
                ["agacement", "for goodness' sake, honestly", "familier"],
                ["résignation", "oh well, never mind, it is what it is", "neutre"],
              ],
              note: "What a shame veut dire « quel dommage », pas « quelle honte » — qui se dirait what a disgrace.",
            },
          ],
        },
        {
          titre: "L'agacement, et la façon anglaise de le dire",
          texte:
            "C'est le domaine où l'écart culturel est le plus grand. Le français exprime volontiers l'agacement de front ; l'anglais, surtout britannique, le fait passer par l'euphémisme, l'ironie ou une formule figée.\n\nLes formules directes existent : for goodness' sake, honestly, this is ridiculous, I've had enough. Elles sont fortes.\n\nMais l'agacement courant passe plutôt par la litote : that's not ideal, this is a bit much, I'm not thrilled about it, that's rather inconvenient. Un francophone les prend pour des remarques tièdes ; ce sont des reproches.\n\nIl passe aussi par la question rhétorique : are you serious ? is this a joke ? do you have any idea how long I've been waiting ?\n\nEt par le soupir verbalisé : oh, come on. Cette formule à elle seule couvre l'incrédulité, l'agacement et la protestation, selon l'intonation.\n\nDeux formules de résignation ferment souvent la séquence : never mind, qui range l'affaire, et it is what it is, très employée depuis une vingtaine d'années — elle accepte sans approuver, et sert d'issue quand il n'y a plus rien à dire.",
          visuels: [
            {
              type: "comparaison",
              titre: "L'agacement, deux registres",
              colonnes: [
                {
                  titre: "Direct — fort",
                  points: [
                    "This is ridiculous.",
                    "I've had enough of this.",
                    "For goodness' sake!",
                  ],
                },
                {
                  titre: "Par litote — courant",
                  points: [
                    "That's not ideal.",
                    "This is a bit much.",
                    "I'm not thrilled about it.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Compatir, et ce qu'il faut éviter",
          texte:
            "Réagir à un malheur suit un scénario court et fixe, et s'en écarter met mal à l'aise.\n\nLa formule standard est I'm so sorry to hear that. Elle convient à presque tout, du deuil à la panne de voiture, et sorry n'y veut pas dire qu'on s'excuse — c'est le sens de regret, pas de faute.\n\nSuivent des formules d'accompagnement : that must be hard, if there's anything I can do, do let me know, thinking of you.\n\nTrois choses sont à éviter, et elles sont contre-intuitives pour un francophone.\n\nD'abord, proposer une solution immédiatement. Le réflexe français d'aider concrètement est perçu comme minimisant : l'anglais attend d'abord la reconnaissance de l'émotion, la solution ensuite.\n\nEnsuite, comparer avec sa propre expérience. « La même chose m'est arrivée » est lu comme une reprise de la parole, pas comme une marque de solidarité.\n\nEnfin, relativiser. It could be worse, look on the bright side sont admis entre proches mais ferment la conversation avec un collègue.\n\nLa règle générale tient en une phrase : d'abord reconnaître, ensuite proposer. Et quand on ne sait pas quoi dire, I don't know what to say est une réponse parfaitement acceptable, souvent meilleure qu'une formule creuse.",
        },
      ],
    },
    cartes: [
      {
        etranger: "You're kidding, that can't be true.",
        francais: "Tu plaisantes, ce n'est pas possible.",
        note: "You're kidding et no way : l'incrédulité familière, très fréquente à l'oral.",
      },
      {
        etranger: "I'm so sorry to hear that.",
        francais: "Je suis vraiment désolé d'apprendre ça.",
        note: "Sorry y veut dire regret, pas excuse. La formule convient à presque toute mauvaise nouvelle.",
      },
      {
        etranger: "Thank goodness for that.",
        francais: "Dieu merci.",
        note: "Thank goodness évite thank God, que certains locuteurs préfèrent ne pas employer.",
      },
      {
        etranger: "What a shame, I was looking forward to it.",
        francais: "Quel dommage, je m'en réjouissais.",
        note: "What a shame veut dire « quel dommage ». La honte se dirait what a disgrace.",
      },
      {
        etranger: "Oh come on, you can't be serious.",
        francais: "Allez, tu ne peux pas être sérieux.",
        note: "Oh come on couvre l'incrédulité, l'agacement et la protestation, selon l'intonation.",
      },
      {
        etranger: "That's not ideal, to be honest.",
        francais: "Ce n'est pas idéal, pour être honnête.",
        note: "Litote : c'est un reproche, pas une remarque tiède.",
      },
      {
        etranger: "Never mind, it is what it is.",
        francais: "Tant pis, c'est comme ça.",
        note: "It is what it is accepte sans approuver : l'issue quand il n'y a plus rien à dire.",
      },
      {
        etranger: "That must be really hard for you.",
        francais: "Ça doit être vraiment dur pour toi.",
        note: "Reconnaître l'émotion avant de proposer une solution : l'ordre compte.",
      },
      {
        etranger: "I don't know what to say.",
        francais: "Je ne sais pas quoi dire.",
        note: "Réponse parfaitement acceptable, souvent meilleure qu'une formule creuse.",
      },
      {
        etranger: "What a relief, I was worried.",
        francais: "Quel soulagement, j'étais inquiet.",
        note: "What a relief et thank goodness : les deux formules du soulagement.",
      },
    ],
  },

  {
    slug: "en-expr-proverbes",
    category: "Expressions",
    title: "Proverbes et dictons",
    statement:
      "Better late than never, practice makes perfect. Des formules traditionnelles que tout anglophone reconnaît, souvent citées à moitié — et qu'il vaut mieux comprendre que produire.",
    tip: "Un proverbe se cite rarement en entier : l'anglophone en dit la première moitié et laisse l'autre en suspens. Reconnaître le début suffit donc.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les formules traditionnelles",
      sections: [
        {
          titre: "Ce qu'un proverbe fait dans une conversation",
          texte:
            "Un proverbe n'apporte aucune information. Il fait autre chose : il range une situation dans une catégorie connue, et il le fait avec l'autorité de la tradition plutôt que celle du locuteur.\n\nC'est ce qui explique son emploi. On cite un proverbe pour clore une discussion — well, better late than never —, pour consoler sans s'engager, ou pour donner un conseil sans en assumer la responsabilité.\n\nDeux traits pratiques en découlent.\n\nLe premier : le proverbe se cite presque toujours tronqué. Un anglophone dit when in Rome… et s'arrête ; il dit speak of the devil… en laissant la suite. Reconnaître le début est donc plus utile que connaître la fin.\n\nLe second : citer un proverbe entier, lentement, avec application, produit un effet scolaire. C'est le défaut le plus reconnaissable d'un apprenant qui vient d'en apprendre une liste.\n\nLa position raisonnable est celle qui vaut pour les idiomes : les comprendre tous, en produire très peu, et seulement ceux qui viennent naturellement.",
          visuels: [
            {
              type: "tableau",
              titre: "Le proverbe, sa situation, son équivalent",
              colonnes: ["Le proverbe", "Ce qu'il dit", "En français"],
              lignes: [
                ["Better late than never.", "consoler d'un retard", "mieux vaut tard que jamais"],
                ["Practice makes perfect.", "encourager l'effort répété", "c'est en forgeant qu'on devient forgeron"],
                ["Actions speak louder than words.", "juger sur les actes", "les actes valent mieux que les mots"],
                ["Don't judge a book by its cover.", "se méfier de l'apparence", "l'habit ne fait pas le moine"],
                ["When in Rome…", "s'adapter aux usages locaux", "à Rome, fais comme les Romains"],
                ["Speak of the devil…", "la personne dont on parlait arrive", "quand on parle du loup"],
                ["The early bird catches the worm.", "arriver tôt paie", "l'avenir appartient à ceux qui se lèvent tôt"],
                ["Two heads are better than one.", "demander de l'aide", "deux avis valent mieux qu'un"],
              ],
              note: "Beaucoup n'ont pas d'équivalent français exact : l'image change, la leçon reste.",
            },
          ],
        },
        {
          titre: "Ceux qui n'ont pas d'équivalent",
          texte:
            "Une partie du corpus anglais n'a pas de correspondant français, et ce sont ceux-là qui apprennent le plus sur la culture qui les emploie.\n\nIt's no use crying over spilt milk : inutile de se lamenter sur ce qui est fait. Le français dit « ce qui est fait est fait », sans l'image.\n\nThe grass is always greener on the other side : on envie toujours la situation d'en face. Très employé, souvent tronqué à the grass is always greener.\n\nDon't put all your eggs in one basket : ne pas tout miser au même endroit. Le français dit « ne pas mettre tous ses œufs dans le même panier » — celui-là a voyagé.\n\nA watched pot never boils : le temps paraît long quand on attend.\n\nIf it ain't broke, don't fix it : ne pas réparer ce qui marche. Très américain, très employé en entreprise, et l'un des rares proverbes qui gardent une forme grammaticalement fautive — ain't — comme partie de la formule.\n\nCuriosity killed the cat, avec sa suite ironique but satisfaction brought it back, souvent ajoutée pour retourner l'avertissement.\n\nEt une formule moderne devenue proverbiale : you can't have your cake and eat it, qui reproche de vouloir deux choses incompatibles.",
          visuels: [
            {
              type: "comparaison",
              titre: "La même leçon, deux images",
              colonnes: [
                {
                  titre: "L'image anglaise",
                  points: [
                    "Don't judge a book by its cover.",
                    "The early bird catches the worm.",
                    "A watched pot never boils.",
                  ],
                },
                {
                  titre: "L'image française",
                  points: [
                    "L'habit ne fait pas le moine.",
                    "L'avenir appartient à ceux qui se lèvent tôt.",
                    "Le temps paraît long à qui attend.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Quand s'en servir, et quand se taire",
          texte:
            "Trois situations acceptent bien un proverbe, et une le rend déplacé.\n\nPour clore, quand la discussion tourne en rond : well, it is what it is, ou better late than never selon le cas. Le proverbe met un point final sans trancher.\n\nPour consoler sans minimiser : these things happen, worse things happen at sea — cette dernière très britannique et ironique.\n\nPour conseiller sans donner d'ordre : la forme proverbiale déplace la responsabilité sur la tradition, ce qui rend le conseil moins intrusif.\n\nEn revanche, un proverbe est déplacé dans un écrit professionnel. Un rapport, un courriel formel, un article n'en contiennent pas : ils sonneraient familiers, voire condescendants.\n\nDeux erreurs enfin, faciles à éviter. Traduire un proverbe français mot à mot ne donne jamais rien — « the habit does not make the monk » ne veut rien dire. Et enchaîner deux proverbes dans la même conversation produit un effet de pastiche immédiat : un seul suffit, et souvent aucun.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Better late than never.",
        francais: "Mieux vaut tard que jamais.",
        note: "Sert à clore : elle accepte le retard sans le commenter davantage.",
      },
      {
        etranger: "Practice makes perfect.",
        francais: "C'est en forgeant qu'on devient forgeron.",
        note: "Practice est un nom au Royaume-Uni, practise le verbe ; les États-Unis écrivent practice pour les deux.",
      },
      {
        etranger: "Actions speak louder than words.",
        francais: "Les actes valent mieux que les paroles.",
        note: "Employé pour juger quelqu'un sur ce qu'il fait, pas sur ce qu'il promet.",
      },
      {
        etranger: "Don't judge a book by its cover.",
        francais: "L'habit ne fait pas le moine.",
        note: "Même leçon, autre image. Traduire le proverbe français mot à mot ne donne rien.",
      },
      {
        etranger: "When in Rome, do as the Romans do.",
        francais: "À Rome, fais comme les Romains.",
        note: "Presque toujours tronqué : un anglophone dit « when in Rome… » et s'arrête.",
      },
      {
        etranger: "The grass is always greener.",
        francais: "L'herbe est toujours plus verte ailleurs.",
        note: "Version courte de the grass is always greener on the other side.",
      },
      {
        etranger: "Don't put all your eggs in one basket.",
        francais: "Ne mets pas tous tes œufs dans le même panier.",
        note: "L'un des rares proverbes que les deux langues partagent mot pour mot.",
      },
      {
        etranger: "If it isn't broken, don't fix it.",
        francais: "Si ça marche, n'y touche pas.",
        note: "La forme courante garde un ain't fautif : if it ain't broke, don't fix it.",
      },
      {
        etranger: "You can't have it both ways.",
        francais: "Il faut choisir.",
        note: "Reproche de vouloir deux choses incompatibles. Voisine de have your cake and eat it.",
      },
      {
        etranger: "Two heads are better than one.",
        francais: "Deux avis valent mieux qu'un.",
        note: "Employée pour justifier qu'on demande de l'aide, sans en faire un aveu de faiblesse.",
      },
    ],
  },

  {
    slug: "en-expr-familier",
    category: "Expressions",
    title: "Le familier et ses degrés",
    statement:
      "Knackered, chuffed, gutted, dodgy. L'anglais familier britannique, ses équivalents américains, et la ligne au-delà de laquelle un mot cesse d'être employable au travail.",
    tip: "Un mot familier voyage mal : chuffed est incompréhensible aux États-Unis, et bummed l'est au Royaume-Uni. Comprendre large, produire prudemment.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "L'anglais parlé entre soi",
      sections: [
        {
          titre: "Trois degrés à distinguer",
          texte:
            "Le mot « familier » recouvre trois choses très différentes, et les confondre est ce qui met un apprenant en difficulté.\n\nLe registre informel : des mots parfaitement standard mais réservés à l'oral et à l'écrit détendu. Kids pour children, a bit pour rather, loads of pour a lot of, mate pour friend. Ils passent partout sauf dans un texte formel.\n\nL'argot proprement dit : des mots opaques pour qui ne les connaît pas, souvent régionaux et souvent datés. Knackered pour exhausted, chuffed pour pleased, gutted pour very disappointed, dodgy pour suspicious, gobsmacked pour astonished. Ils marquent l'appartenance à un groupe et à une génération.\n\nLe vulgaire : les jurons, dont la force varie énormément d'un pays à l'autre et d'un contexte à l'autre. Un même mot peut être une ponctuation anodine entre amis britanniques et une insulte grave dans un bureau américain.\n\nLa règle pratique pour un apprenant tient en deux temps : comprendre les trois, produire le premier, et n'aborder le deuxième qu'après avoir vécu dans un milieu qui l'emploie. Le troisième s'apprend en dernier, ou jamais — le coût d'une erreur y est disproportionné.",
          visuels: [
            {
              type: "tableau",
              titre: "Le mot familier et son équivalent neutre",
              colonnes: ["Familier (GB)", "Sens", "Neutre", "Aux États-Unis"],
              lignes: [
                ["knackered", "épuisé", "exhausted", "beat, wiped out"],
                ["chuffed", "ravi", "delighted", "stoked"],
                ["gutted", "très déçu", "devastated", "bummed"],
                ["dodgy", "louche", "suspicious", "sketchy"],
                ["gobsmacked", "stupéfait", "astonished", "floored"],
                ["skint", "fauché", "broke", "broke"],
                ["mate", "ami", "friend", "buddy, dude"],
                ["cheers", "merci, salut", "thanks, bye", "thanks"],
              ],
              note: "Cheers est le mot britannique le plus polyvalent : merci, au revoir, et santé.",
            },
          ],
        },
        {
          titre: "Ce qui voyage et ce qui ne voyage pas",
          texte:
            "L'argot est la partie la plus régionale d'une langue, et l'anglais y est particulièrement fragmenté.\n\nUn mot britannique courant peut être totalement opaque aux États-Unis. Chuffed, gutted, knackered, naff, dodgy sont dans ce cas. À l'inverse, bummed, stoked, sketchy, bail on someone ne disent rien à beaucoup de Britanniques.\n\nCertains mots existent des deux côtés avec des sens différents, et c'est là que le risque est réel. Pants désigne un pantalon aux États-Unis et un sous-vêtement au Royaume-Uni — où l'adjectif pants veut en outre dire « nul ». Fanny est anodin aux États-Unis et vulgaire au Royaume-Uni. Rubber est une gomme au Royaume-Uni et un préservatif aux États-Unis.\n\nD'autres varient à l'intérieur d'un même pays. L'argot de Londres, celui de Glasgow et celui de Newcastle diffèrent au point d'être mutuellement difficiles.\n\nEnfin l'argot vieillit vite. Groovy date des années soixante, wicked des années quatre-vingt-dix, sick des années deux mille. Employer un terme dépassé est plus voyant que de n'en employer aucun — c'est la façon la plus sûre de sonner comme un manuel de langue périmé.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même mot, deux rives",
              colonnes: [
                {
                  titre: "Royaume-Uni",
                  points: [
                    "pants — sous-vêtement, ou « nul »",
                    "rubber — une gomme",
                    "chips — des frites",
                  ],
                },
                {
                  titre: "États-Unis",
                  points: [
                    "pants — un pantalon",
                    "rubber — un préservatif",
                    "chips — des chips",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "La ligne du travail",
          texte:
            "La question pratique, pour un apprenant adulte, n'est pas de savoir parler argot : c'est de savoir où passe la ligne au travail.\n\nCe qui passe partout : les contractions — I'll, don't, we've —, les phrasal verbs, les mots informels neutres comme kids, a bit, loads of, et les formules de conversation vues plus haut. Un courriel professionnel anglophone est nettement plus détendu qu'un courriel français.\n\nCe qui passe entre collègues qu'on connaît : knackered, dodgy, a nightmare, absolutely gutted. Ils marquent la proximité et sont courants dans une conversation de couloir britannique.\n\nCe qui ne passe pas à l'écrit professionnel : tout l'argot, même bénin. Un courriel qui dit knackered au lieu d'exhausted décale immédiatement le registre.\n\nCe qui ne passe pas du tout : le vulgaire, dans un contexte où l'on ne connaît pas les habitudes du groupe. La tolérance varie énormément — un chantier britannique et un bureau américain n'ont pas les mêmes normes — et un étranger n'a pas les repères pour la jauger.\n\nLe conseil final est celui qui vaut pour l'euphémisme et pour l'idiome : comprendre large, produire peu. On ne perd rien à employer un mot neutre ; on perd beaucoup à employer le mauvais mot familier.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I'm absolutely knackered.",
        francais: "Je suis complètement épuisé.",
        note: "Knackered est britannique. Aux États-Unis on dirait beat ou wiped out.",
      },
      {
        etranger: "She was chuffed with the result.",
        francais: "Elle était ravie du résultat.",
        note: "Chuffed est incompréhensible pour beaucoup d'Américains. Stoked est l'équivalent.",
      },
      {
        etranger: "He was gutted about the news.",
        francais: "Il était effondré par la nouvelle.",
        note: "Gutted : très déçu. L'équivalent américain est bummed.",
      },
      {
        etranger: "That looks a bit dodgy to me.",
        francais: "Ça m'a l'air un peu louche.",
        note: "Dodgy au Royaume-Uni, sketchy aux États-Unis. Le mot passe entre collègues.",
      },
      {
        etranger: "Cheers, see you tomorrow.",
        francais: "Merci, à demain.",
        note: "Cheers est le mot britannique le plus polyvalent : merci, au revoir, et santé.",
      },
      {
        etranger: "I'm skint until Friday.",
        francais: "Je suis fauché jusqu'à vendredi.",
        note: "Skint est britannique ; broke marche des deux côtés.",
      },
      {
        etranger: "It was an absolute nightmare.",
        francais: "Ç'a été un vrai cauchemar.",
        note: "Informel mais neutre : passe dans une conversation de bureau.",
      },
      {
        etranger: "Loads of people turned up.",
        francais: "Plein de gens sont venus.",
        note: "Loads of pour a lot of : informel, employable à l'oral professionnel.",
      },
      {
        etranger: "I was gobsmacked when I heard.",
        francais: "J'étais sidéré en l'apprenant.",
        note: "Gobsmacked, très britannique. Floored est l'équivalent américain.",
      },
      {
        etranger: "Give me a shout if you need anything.",
        francais: "Fais-moi signe si tu as besoin de quoi que ce soit.",
        note: "Give someone a shout : informel neutre, très employé au travail.",
      },
    ],
  },
];
