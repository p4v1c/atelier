/**
 * Espagnol — cinq séries d'expressions.
 *
 * La catégorie avait déjà les connecteurs de l'oral, les diminutifs et les
 * modismes. Il manquait ce qui vient avant : demander sans brusquer, prendre
 * position, réagir à une nouvelle. Et ce qui vient après : les proverbes,
 * qu'on entend citer à moitié, et l'argot, qui ne voyage pas d'un pays à
 * l'autre.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_EXPRESIONES: LotCartes[] = [
  {
    slug: "es-expr-cortesia",
    category: "Expressions",
    title: "Demander, remercier, refuser",
    statement:
      "L'espagnol est plus direct que le français, et ce n'est pas de la brusquerie : l'impératif y est courant, et le conditionnel de politesse s'emploie beaucoup moins qu'on ne le croit.",
    tip: "Dame un café n'a rien de grossier entre habitués ; la formule passe-partout reste me pones un café, por favor. Traduire « pourriez-vous me donner » sonne au contraire guindé.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "La politesse espagnole",
      sections: [
        {
          titre: "Plus direct, et pas moins poli",
          texte:
            "Un francophone qui débarque en Espagne est frappé par la brièveté des échanges de service, et il l'interprète souvent comme de la sécheresse. C'est une erreur de lecture.\n\nDans un bar, la commande normale est un impératif : ponme un café, dame una caña. Personne n'y voit d'impolitesse. La politesse ne passe pas par la longueur de la formule mais par le ton, le sourire et le por favor éventuel.\n\nÀ l'inverse, un francophone qui empile les précautions — perdone, no sé si sería posible que me diera — paraît embarrassé plutôt que courtois, et l'échange s'allonge sans que personne y gagne.\n\nDeux nuances tempèrent ce tableau.\n\nLa première est géographique : l'Amérique latine est nettement plus formelle que l'Espagne. Le vouvoiement y est plus fréquent, les formules plus longues, et l'impératif nu moins courant. Ce qui passe à Madrid peut détonner à Bogota.\n\nLa seconde est situationnelle : le registre direct vaut pour les services quotidiens. Face à une administration, un supérieur ou un inconnu plus âgé, l'espagnol redevient formel — et il dispose alors d'un arsenal complet.",
          visuels: [
            {
              type: "tableau",
              titre: "La même demande, trois registres",
              colonnes: ["Registre", "Formule", "Où"],
              lignes: [
                ["direct", "Ponme un café.", "bar, entre proches"],
                ["neutre", "Me pones un café, por favor.", "partout"],
                ["poli", "¿Me puedes poner un café?", "partout"],
                ["formel", "¿Me podría poner un café?", "vouvoiement"],
                ["très formel", "¿Sería tan amable de…?", "administration"],
                ["latino-américain courant", "¿Me regala un café?", "Colombie, Venezuela"],
              ],
              note: "Regalar veut dire offrir : ¿me regala…? est une formule de politesse colombienne, pas une demande de cadeau.",
            },
          ],
        },
        {
          titre: "Remercier, et répondre au remerciement",
          texte:
            "Le remerciement espagnol est court, et la réponse compte autant que lui.\n\nGracias suffit dans la plupart des cas. Muchas gracias renforce. Mil gracias est chaleureux. Te lo agradezco est plus soutenu et plus personnel.\n\nLa réponse, elle, est presque obligatoire — laisser un gracias sans réponse est ce qui paraît impoli. Les formules varient beaucoup selon les pays.\n\nDe nada est universel. No hay de qué est un peu plus soigné. A ti retourne le remerciement. Un placer et con mucho gusto sont chaleureux. No es nada minimise.\n\nAu Mexique, on entend très souvent para servirle ou a la orden ; en Colombie, con mucho gusto est presque systématique, au point de servir aussi de bonjour dans un commerce.\n\nDeux pièges pour un francophone. D'abord, gracias a et gracias por ne sont pas interchangeables : gracias por + chose ou action, gracias a + personne ou cause — gracias por tu ayuda, mais gracias a ti.\n\nEnsuite, agradecer se construit sans préposition : te agradezco tu ayuda, jamais « te agradezco por », qui est un calque de l'anglais très répandu et jugé fautif à l'écrit soigné.",
          visuels: [
            {
              type: "comparaison",
              titre: "Répondre à un merci",
              colonnes: [
                {
                  titre: "Neutre, partout",
                  points: [
                    "De nada.",
                    "No hay de qué.",
                    "A ti.",
                  ],
                },
                {
                  titre: "Marqué régionalement",
                  points: [
                    "Con mucho gusto — Colombie.",
                    "Para servirle — Mexique.",
                    "A la orden — Venezuela, Colombie.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Refuser, et s'excuser",
          texte:
            "Refuser suit le même scénario qu'en français : un regret, une raison brève, et si possible une contre-proposition.\n\nLe regret : lo siento, me temo que, lamentablemente, qué pena. Ce dernier est très employé en Amérique latine et sonne moins lourd que lo siento.\n\nLa raison peut rester vague : es que tengo lío esa tarde, es que ya he quedado. La formule es que introduit toute justification et adoucit considérablement — sans elle, le refus paraît sec.\n\nLa contre-proposition : ¿lo dejamos para otro día?, ¿te va bien la semana que viene?\n\nPour s'excuser, l'espagnol distingue deux verbes que le français confond. Perdona ou perdone s'emploie pour attirer l'attention ou pour une gêne légère : perdone, ¿tiene hora? Lo siento s'emploie pour un vrai regret ou une mauvaise nouvelle : lo siento mucho, no podemos.\n\nDisculpa et disculpe couvrent les deux et dominent en Amérique latine, là où l'Espagne préfère perdona.\n\nEnfin, une formule à connaître pour l'entendre : ya te diré algo — je te tiendrai au courant — signifie souvent, dans un contexte professionnel, que la réponse sera non.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Me pones un café, por favor.",
        francais: "Un café, s'il te plaît.",
        note: "La formule normale au bar. Le présent y remplace l'impératif et suffit à la politesse.",
      },
      {
        etranger: "¿Me podría dar un vaso de agua?",
        francais: "Pourriez-vous me donner un verre d'eau ?",
        note: "Le conditionnel de politesse existe, mais il est réservé au registre formel.",
      },
      {
        etranger: "Muchas gracias por tu ayuda.",
        francais: "Merci beaucoup pour ton aide.",
        note: "Gracias POR une chose ; gracias A une personne. Les deux ne s'échangent pas.",
      },
      {
        etranger: "De nada, no hay de qué.",
        francais: "De rien, il n'y a pas de quoi.",
        note: "Répondre à un merci est presque obligatoire : laisser un gracias sans réponse paraît sec.",
      },
      {
        etranger: "Perdone, ¿tiene hora?",
        francais: "Pardon, avez-vous l'heure ?",
        note: "Perdona pour attirer l'attention ; lo siento pour un vrai regret.",
      },
      {
        etranger: "Lo siento mucho, no puedo.",
        francais: "Je suis vraiment désolé, je ne peux pas.",
        note: "Lo siento marque le regret réel, pas la simple gêne.",
      },
      {
        etranger: "Es que ya había quedado.",
        francais: "C'est que j'avais déjà prévu quelque chose.",
        note: "Es que introduit la justification et adoucit le refus. Sans elle, il paraît sec.",
      },
      {
        etranger: "¿Lo dejamos para otro día?",
        francais: "On remet ça à un autre jour ?",
        note: "La contre-proposition : c'est elle qui distingue un refus d'une fin de non-recevoir.",
      },
      {
        etranger: "Te lo agradezco de verdad.",
        francais: "Je t'en suis vraiment reconnaissant.",
        note: "Agradecer se construit sans préposition : « agradecer por » est un calque de l'anglais.",
      },
      {
        etranger: "Con mucho gusto, para servirle.",
        francais: "Avec plaisir, à votre service.",
        note: "Très latino-américain. En Colombie, con mucho gusto sert même de salutation en commerce.",
      },
    ],
  },

  {
    slug: "es-expr-acuerdo",
    category: "Expressions",
    title: "Approuver, nuancer, refuser",
    statement:
      "Dire oui, dire non, dire « oui mais ». L'espagnol admet le désaccord frontal bien plus que l'anglais — mais il a ses formules, et le subjonctif s'y invite dès qu'on nie.",
    tip: "No creo que appelle toujours le subjonctif : no creo que sea verdad. L'indicatif y serait entendu comme une faute, pas comme une nuance.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Prendre position en espagnol",
      sections: [
        {
          titre: "Un désaccord plus frontal",
          texte:
            "Là où l'anglais amortit systématiquement et où le français hésite, l'espagnol admet le désaccord direct. No estoy de acuerdo se dit sans précaution particulière dans une réunion, et n'est pas entendu comme une agression.\n\nCela ne veut pas dire que tout se vaut. L'échelle existe, et elle compte quatre crans.\n\nL'accord : claro, por supuesto, desde luego, sin duda, estoy totalmente de acuerdo. Claro que sí renforce ; ya lo creo est plus familier.\n\nL'accord partiel : hasta cierto punto, en parte sí, puede ser, bueno, depende. Ce dernier est extrêmement employé et ouvre presque toujours une nuance.\n\nLe désaccord poli : no estoy muy convencido, no lo veo así, yo lo veo de otra manera, no lo tengo tan claro.\n\nLe désaccord ferme : no estoy de acuerdo, me parece que no, en absoluto — ce dernier veut dire « pas du tout » et non « absolument », c'est un faux ami redoutable.\n\nUne remarque de ton : l'espagnol conversationnel se coupe la parole bien plus qu'en français, et l'interruption n'y est pas ressentie comme impolie mais comme une marque d'engagement. Un francophone qui attend son tour poliment peut ne jamais l'obtenir.",
          visuels: [
            {
              type: "tableau",
              titre: "L'échelle, de l'accord au refus",
              colonnes: ["Formule", "Force", "Remarque"],
              lignes: [
                ["Desde luego. / Por supuesto.", "accord franc", "—"],
                ["Claro que sí.", "accord appuyé", "très courant"],
                ["Hasta cierto punto.", "accord partiel", "annonce une nuance"],
                ["Bueno, depende.", "réserve", "ouvre presque toujours un mais"],
                ["No lo veo así.", "désaccord poli", "le standard"],
                ["No estoy de acuerdo.", "désaccord ferme", "acceptable en réunion"],
                ["En absoluto.", "refus total", "faux ami : pas du tout"],
                ["Ni hablar.", "refus catégorique", "familier"],
              ],
              note: "En absoluto veut dire « pas du tout ». Pour dire « absolument », on dit absolutamente ou desde luego.",
            },
          ],
        },
        {
          titre: "Le subjonctif du doute",
          texte:
            "C'est le point grammatical de ce chapitre, et il est incontournable : dès qu'on nie, doute ou refuse un fait, l'espagnol bascule au subjonctif.\n\nCreo que es verdad, à l'indicatif, parce qu'on y croit. Mais no creo que sea verdad, au subjonctif, parce qu'on n'y croit pas. La négation seule suffit à faire basculer le mode.\n\nLa règle vaut pour toute la famille : no pienso que, no me parece que, dudo que, niego que, no es cierto que, no está claro que.\n\nElle vaut aussi pour les expressions d'opinion négatives et pour les jugements de valeur : es posible que venga, es raro que digas eso, me molesta que llegue tarde.\n\nUn francophone la rate régulièrement, parce que le français ne l'applique qu'à moitié : « je ne crois pas que ce soit vrai » prend bien le subjonctif, mais « je ne crois pas qu'il vient » s'entend aussi. L'espagnol, lui, n'a pas d'hésitation.\n\nUne exception utile : dans une question, la négation ne déclenche pas forcément le subjonctif, parce qu'on demande l'avis de l'autre. ¿No crees que es demasiado tarde? se dit couramment à l'indicatif.",
          visuels: [
            {
              type: "comparaison",
              titre: "La négation fait basculer le mode",
              colonnes: [
                {
                  titre: "Affirmatif — indicatif",
                  points: [
                    "Creo que es verdad.",
                    "Me parece que tiene razón.",
                    "Está claro que funciona.",
                  ],
                },
                {
                  titre: "Négatif — subjonctif",
                  points: [
                    "No creo que sea verdad.",
                    "No me parece que tenga razón.",
                    "No está claro que funcione.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Nuancer sans se dédire",
          texte:
            "Trois familles de formules servent à tempérer une position sans l'abandonner, et elles reviennent constamment à l'oral comme à l'écrit.\n\nConcéder d'abord : es verdad que…, tienes razón en que…, estoy de acuerdo en parte. La concession ouvre, exactement comme en anglais, mais elle est moins obligatoire.\n\nPivoter ensuite : pero, sin embargo, ahora bien, dicho esto, aun así. Ahora bien est le plus élégant à l'écrit ; aun así est le plus courant à l'oral.\n\nReprendre enfin : lo que pasa es que…, el problema es que…, yo diría más bien que… Cette dernière formule est particulièrement utile : más bien reformule sans contredire frontalement.\n\nS'y ajoute une tournure très espagnole et sans équivalent français direct : no es que + subjonctif, sino que + indicatif. No es que no me guste, sino que no tengo tiempo — ce n'est pas que ça ne me plaise pas, c'est que je n'ai pas le temps. Elle écarte une objection avant qu'elle soit formulée, et elle est partout dans la conversation adulte.\n\nEnfin, deux mots à ne pas confondre : sino et si no. Le premier oppose — no es rojo, sino azul ; le second est une condition — si no vienes, avísame.",
        },
      ],
    },
    cartes: [
      {
        etranger: "No creo que sea buena idea.",
        francais: "Je ne crois pas que ce soit une bonne idée.",
        note: "La négation appelle le subjonctif : sea, jamais es.",
      },
      {
        etranger: "Estoy totalmente de acuerdo contigo.",
        francais: "Je suis entièrement d'accord avec toi.",
        note: "De acuerdo CON quelqu'un, de acuerdo EN quelque chose.",
      },
      {
        etranger: "Bueno, depende de cómo lo mires.",
        francais: "Bon, ça dépend comment on le regarde.",
        note: "Depende ouvre presque toujours une nuance : c'est le pivot le plus courant.",
      },
      {
        etranger: "Yo no lo veo así.",
        francais: "Moi, je ne le vois pas comme ça.",
        note: "Le désaccord poli standard. Le yo initial marque qu'on donne un avis personnel.",
      },
      {
        etranger: "Tienes razón en parte, pero no del todo.",
        francais: "Tu as raison en partie, mais pas entièrement.",
        note: "Concession puis pivot : la structure vaut aussi en espagnol, sans y être obligatoire.",
      },
      {
        etranger: "En absoluto, no es eso.",
        francais: "Pas du tout, ce n'est pas ça.",
        note: "En absoluto veut dire « pas du tout ». Le faux ami est redoutable.",
      },
      {
        etranger: "No es que esté mal, sino que falta algo.",
        francais: "Ce n'est pas que ce soit mauvais, c'est qu'il manque quelque chose.",
        note: "No es que + subjonctif, sino que + indicatif : la tournure écarte une objection d'avance.",
      },
      {
        etranger: "Yo diría más bien lo contrario.",
        francais: "Je dirais plutôt le contraire.",
        note: "Más bien reformule sans contredire frontalement.",
      },
      {
        etranger: "Desde luego que sí.",
        francais: "Bien sûr que oui.",
        note: "Desde luego, por supuesto et claro : trois accords francs, tous très courants.",
      },
      {
        etranger: "Ahora bien, habría que comprobarlo.",
        francais: "Cela dit, il faudrait le vérifier.",
        note: "Ahora bien est le pivot le plus élégant à l'écrit ; aun así domine à l'oral.",
      },
    ],
  },

  {
    slug: "es-expr-emociones",
    category: "Expressions",
    title: "Réagir : surprise, agacement, soulagement",
    statement:
      "Ce qu'on dit en apprenant une nouvelle, en s'impatientant, en étant soulagé. Des formules courtes, très fréquentes, et dont beaucoup s'appuient sur des tournures figées.",
    tip: "¡No me digas! ne demande pas de se taire : c'est l'équivalent exact de « sans blague ! », et il marque la surprise, pas le refus d'entendre.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les réactions toutes faites",
      sections: [
        {
          titre: "La surprise, du léger au stupéfait",
          texte:
            "L'espagnol réagit par formules figées plus que par phrases construites, et les traduire mot à mot ne donne rien.\n\nPour la surprise ordinaire : ¿ah sí?, ¿en serio?, ¿de verdad? Elles marquent l'intérêt sans engager grand-chose.\n\nPour la surprise forte : ¡no me digas!, ¡anda ya!, ¡qué me dices!, ¡venga ya! Les deux dernières sont très espagnoles et se disent aussi pour marquer l'incrédulité amusée.\n\nPour la stupéfaction : no me lo puedo creer, me dejas de piedra, alucino — ce dernier familier et très employé chez les jeunes locuteurs espagnols.\n\nPour la mauvaise nouvelle : ¡qué pena!, ¡vaya!, ¡qué faena!, ¡qué mala suerte! Vaya est le plus polyvalent des interjections espagnoles : selon le ton, il marque la surprise, la déception ou l'agacement.\n\nUne remarque de registre : l'espagnol conversationnel emploie beaucoup plus de jurons que le français, et leur force y est nettement moindre. Certains mots que le français réserverait à la colère servent en espagnol de simple ponctuation entre amis. Un étranger n'a pas les repères pour doser cela : la prudence est de les reconnaître sans les employer.",
          visuels: [
            {
              type: "tableau",
              titre: "Réagir, selon la nouvelle",
              colonnes: ["Situation", "Formules", "Registre"],
              lignes: [
                ["surprise ordinaire", "¿en serio? ¿de verdad?", "neutre"],
                ["surprise forte", "¡no me digas! ¡anda ya!", "familier"],
                ["stupéfaction", "no me lo puedo creer", "neutre"],
                ["mauvaise nouvelle", "¡qué pena! ¡vaya!", "neutre"],
                ["compassion", "lo siento mucho, te acompaño en el sentimiento", "soigné"],
                ["soulagement", "¡menos mal! ¡uf!", "neutre"],
                ["agacement", "¡qué pesado! ¡ya está bien!", "familier"],
                ["résignation", "qué le vamos a hacer, es lo que hay", "neutre"],
              ],
              note: "Vaya est l'interjection la plus polyvalente : surprise, déception ou agacement selon le ton.",
            },
          ],
        },
        {
          titre: "L'agacement et l'impatience",
          texte:
            "L'agacement espagnol se dit plus franchement qu'en anglais, et souvent avec le corps autant qu'avec les mots.\n\nLes formules directes : ¡ya está bien!, ¡basta ya!, estoy harto de esto, no aguanto más, me tiene frito — cette dernière très imagée, littéralement « il me tient frit ».\n\nLes reproches personnels : ¡qué pesado eres!, no seas pesado, siempre igual, otra vez lo mismo.\n\nLes questions rhétoriques : ¿pero tú qué te has creído?, ¿te parece normal?, ¿cuánto tiempo llevo esperando?\n\nEt une famille très espagnole, celle des verbes pronominaux d'exaspération : me estoy poniendo nervioso, me saca de quicio, me pone de los nervios. Sacar de quicio veut dire littéralement sortir de ses gonds, et l'image est la même qu'en français.\n\nLa résignation, elle, ferme souvent la séquence : qué le vamos a hacer, es lo que hay, así son las cosas, paciencia. Es lo que hay est l'équivalent exact de l'anglais it is what it is, et il est devenu tout aussi courant.\n\nUn conseil pratique : ces formules s'entendent partout et se comprennent facilement, mais elles supposent une proximité. Employées avec un inconnu ou un supérieur, elles détonnent — comme en français.",
          visuels: [
            {
              type: "comparaison",
              titre: "S'agacer, deux registres",
              colonnes: [
                {
                  titre: "Direct — entre proches",
                  points: [
                    "¡Ya está bien!",
                    "Estoy harto de esto.",
                    "¡Qué pesado eres!",
                  ],
                },
                {
                  titre: "Tempéré — au travail",
                  points: [
                    "Esto empieza a ser complicado.",
                    "No es la primera vez que pasa.",
                    "Habría que revisarlo.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Compatir",
          texte:
            "Réagir à un malheur suit un scénario court, et l'espagnol y dispose de formules très codifiées.\n\nLa formule standard est lo siento mucho. Elle convient à presque tout, et siento n'y veut pas dire qu'on s'excuse : c'est le sens de regret.\n\nPour un deuil, la formule consacrée est te acompaño en el sentimiento, ou mi más sentido pésame à l'écrit. Elles sont figées et l'on ne s'en écarte pas.\n\nPour les épreuves ordinaires : qué faena, vaya palo, ánimo, mucho ánimo. Ánimo est le mot de soutien par excellence, et il n'a pas d'équivalent français d'un seul tenant — quelque chose entre « courage » et « tiens bon ».\n\nPour proposer de l'aide : si necesitas algo, aquí estoy ; cualquier cosa, me dices ; cuenta conmigo.\n\nDeux différences avec le français méritent d'être notées. L'espagnol propose l'aide plus vite et plus concrètement, là où l'anglais attend d'abord la reconnaissance de l'émotion. Et le contact physique — main sur l'épaule, embrassade — y accompagne plus souvent les mots, au point que leur absence peut être ressentie comme de la froideur.",
        },
      ],
    },
    cartes: [
      {
        etranger: "¡No me digas! ¿En serio?",
        francais: "Sans blague ! Vraiment ?",
        note: "¡No me digas! ne demande pas de se taire : c'est une marque de surprise.",
      },
      {
        etranger: "No me lo puedo creer.",
        francais: "Je n'arrive pas à y croire.",
        note: "La stupéfaction standard. Alucino est l'équivalent familier espagnol.",
      },
      {
        etranger: "¡Menos mal que llegaste!",
        francais: "Heureusement que tu es arrivé !",
        note: "Menos mal est la formule du soulagement, littéralement « moins mal ».",
      },
      {
        etranger: "¡Qué pena, con lo que te gustaba!",
        francais: "Quel dommage, toi qui aimais tant ça !",
        note: "Qué pena pour le regret. Con lo que… souligne le contraste, tournure très espagnole.",
      },
      {
        etranger: "Vaya, no me lo esperaba.",
        francais: "Tiens donc, je ne m'y attendais pas.",
        note: "Vaya couvre la surprise, la déception et l'agacement selon le ton.",
      },
      {
        etranger: "Estoy harto de esperar.",
        francais: "J'en ai assez d'attendre.",
        note: "Estar harto DE. L'agacement s'exprime plus franchement qu'en anglais.",
      },
      {
        etranger: "Eso me saca de quicio.",
        francais: "Ça me fait sortir de mes gonds.",
        note: "Sacar de quicio : la même image qu'en français, gonds compris.",
      },
      {
        etranger: "Lo siento mucho, de verdad.",
        francais: "Je suis vraiment désolé.",
        note: "Siento y veut dire regret, pas excuse. La formule convient à presque tout.",
      },
      {
        etranger: "Ánimo, ya verás que se arregla.",
        francais: "Courage, tu verras que ça va s'arranger.",
        note: "Ánimo n'a pas d'équivalent français d'un seul tenant : entre « courage » et « tiens bon ».",
      },
      {
        etranger: "Qué le vamos a hacer, es lo que hay.",
        francais: "Que veux-tu, c'est comme ça.",
        note: "Es lo que hay est l'équivalent exact de l'anglais it is what it is.",
      },
    ],
  },

  {
    slug: "es-expr-refranes",
    category: "Expressions",
    title: "Proverbes et dictons",
    statement:
      "Más vale tarde que nunca. Des formules traditionnelles que tout hispanophone reconnaît, souvent citées à moitié — et que l'espagnol emploie plus volontiers que le français.",
    tip: "L'espagnol cite ses proverbes plus souvent que le français, et les tronque autant : on dit « a quien madruga… » et l'interlocuteur complète mentalement.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les refranes",
      sections: [
        {
          titre: "Une tradition vivante",
          texte:
            "Le refranero espagnol — le corpus des proverbes — est l'un des plus riches d'Europe, et surtout l'un des plus vivants. Là où le proverbe français a pris un tour scolaire ou vieilli, le refrán s'emploie couramment, y compris chez de jeunes locuteurs.\n\nSon rôle est le même que partout : ranger une situation dans une catégorie connue, avec l'autorité de la tradition plutôt que celle du locuteur. On le cite pour clore, pour consoler sans s'engager, ou pour conseiller sans en assumer la responsabilité.\n\nDeux traits pratiques.\n\nLe premier : il se cite tronqué. Un hispanophone dit a quien madruga… et s'arrête ; il dit no por mucho madrugar… en laissant la suite. Reconnaître le début suffit donc largement.\n\nLe second : beaucoup de refranes riment, et c'est ce qui les a conservés. La rime est souvent ce qui reste quand le sens s'est obscurci — certains proverbes très employés ne sont plus compris littéralement par ceux qui les citent.\n\nUne mise en garde, la même que pour les idiomes : un apprenant qui vient d'en apprendre dix les emploie tous, et cela s'entend. Un seul suffit, et souvent aucun.",
          visuels: [
            {
              type: "tableau",
              titre: "Le refrán, ce qu'il dit, son équivalent",
              colonnes: ["Le refrán", "Ce qu'il dit", "En français"],
              lignes: [
                ["Más vale tarde que nunca.", "consoler d'un retard", "mieux vaut tard que jamais"],
                ["A quien madruga, Dios le ayuda.", "arriver tôt paie", "l'avenir appartient à ceux qui se lèvent tôt"],
                ["No hay mal que por bien no venga.", "un mal pour un bien", "à quelque chose malheur est bon"],
                ["Más vale pájaro en mano…", "préférer le certain", "un tiens vaut mieux que deux tu l'auras"],
                ["Ojos que no ven, corazón que no siente.", "ignorer épargne", "loin des yeux, loin du cœur"],
                ["En casa del herrero, cuchillo de palo.", "le cordonnier mal chaussé", "les cordonniers sont les plus mal chaussés"],
                ["Del dicho al hecho hay mucho trecho.", "dire n'est pas faire", "il y a loin de la coupe aux lèvres"],
                ["Quien mucho abarca, poco aprieta.", "vouloir trop, réussir peu", "qui trop embrasse mal étreint"],
              ],
              note: "Beaucoup ont un équivalent français, mais l'image change presque toujours.",
            },
          ],
        },
        {
          titre: "Ceux qui n'ont pas d'équivalent",
          texte:
            "Une partie du corpus n'a pas de correspondant français, et ce sont ceux-là qui en disent le plus sur la culture qui les emploie.\n\nNo por mucho madrugar amanece más temprano : ce n'est pas en se levant plus tôt qu'on fait lever le jour plus tôt. Autrement dit, se presser ne fait pas avancer les choses. Le proverbe contredit directement le précédent sur les lève-tôt, et les deux coexistent sans que personne s'en formalise — c'est le propre du refranero.\n\nCría cuervos y te sacarán los ojos : élève des corbeaux et ils te crèveront les yeux. Sur l'ingratitude. Souvent tronqué à cría cuervos…, et connu bien au-delà de l'Espagne grâce au cinéma.\n\nA falta de pan, buenas son tortas : faute de pain, les galettes feront l'affaire. Sur le fait de se contenter de ce qu'on a.\n\nEl que se fue a Sevilla perdió su silla : qui va à Séville perd sa chaise. Dit à quelqu'un qui retrouve sa place occupée. Purement ludique, et employé surtout entre enfants et entre amis.\n\nCamarón que se duerme, se lo lleva la corriente : la crevette qui s'endort est emportée par le courant. Très latino-américain, sur la vigilance.\n\nMás vale prevenir que curar : mieux vaut prévenir que guérir — celui-là a un jumeau français exact.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux refranes qui se contredisent",
              colonnes: [
                {
                  titre: "Se lever tôt paie",
                  points: [
                    "A quien madruga, Dios le ayuda.",
                    "Cité pour encourager l'effort matinal.",
                  ],
                },
                {
                  titre: "Se lever tôt ne sert à rien",
                  points: [
                    "No por mucho madrugar amanece más temprano.",
                    "Cité pour tempérer la précipitation.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Quand s'en servir",
          texte:
            "Trois situations acceptent bien un refrán, et deux le rendent déplacé.\n\nPour clore une discussion qui tourne en rond : es lo que hay, ou más vale tarde que nunca selon le cas.\n\nPour consoler sans minimiser : no hay mal que por bien no venga est la formule consacrée, et elle passe partout.\n\nPour conseiller sans donner d'ordre : la forme proverbiale déplace la responsabilité sur la tradition, ce qui rend le conseil moins intrusif — exactement comme en français.\n\nEn revanche, un refrán n'a pas sa place dans un écrit professionnel : un rapport ou un courriel formel n'en contient pas, et il y sonnerait familier ou condescendant.\n\nEt il ne s'emploie pas avec un supérieur qu'on connaît peu : le proverbe suppose une complicité, et l'employer sans elle crée une familiarité que l'autre n'a pas accordée.\n\nUne dernière remarque utile à l'écoute : le refranero varie beaucoup d'un pays à l'autre. Ceux d'Espagne ne sont pas tous connus au Mexique, et l'inverse est encore plus vrai. Comme pour les régionalismes : comprendre large, produire peu.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Más vale tarde que nunca.",
        francais: "Mieux vaut tard que jamais.",
        note: "Sert à clore : elle accepte le retard sans le commenter davantage.",
      },
      {
        etranger: "No hay mal que por bien no venga.",
        francais: "À quelque chose malheur est bon.",
        note: "La formule consacrée de la consolation. Elle passe dans tous les contextes.",
      },
      {
        etranger: "A quien madruga, Dios le ayuda.",
        francais: "L'avenir appartient à ceux qui se lèvent tôt.",
        note: "Presque toujours tronqué : on dit « a quien madruga… » et l'autre complète.",
      },
      {
        etranger: "Del dicho al hecho hay mucho trecho.",
        francais: "Il y a loin de la coupe aux lèvres.",
        note: "Sur l'écart entre dire et faire. La rime en -echo est ce qui l'a conservé.",
      },
      {
        etranger: "Quien mucho abarca, poco aprieta.",
        francais: "Qui trop embrasse mal étreint.",
        note: "Les deux langues ont le même proverbe, avec la même image du bras qui enserre.",
      },
      {
        etranger: "En casa del herrero, cuchillo de palo.",
        francais: "Les cordonniers sont les plus mal chaussés.",
        note: "Chez le forgeron, un couteau de bois. Même leçon, autre métier.",
      },
      {
        etranger: "Más vale prevenir que curar.",
        francais: "Mieux vaut prévenir que guérir.",
        note: "L'un des rares refranes que le français partage mot pour mot.",
      },
      {
        etranger: "A falta de pan, buenas son tortas.",
        francais: "Faute de grives, on mange des merles.",
        note: "Faute de pain, les galettes font l'affaire. L'image change, la leçon reste.",
      },
      {
        etranger: "Ojos que no ven, corazón que no siente.",
        francais: "Loin des yeux, loin du cœur.",
        note: "L'espagnol insiste sur l'ignorance qui épargne ; le français sur l'oubli.",
      },
      {
        etranger: "El que se fue a Sevilla perdió su silla.",
        francais: "Qui va à la chasse perd sa place.",
        note: "Dit à qui retrouve sa place occupée. Purement ludique dans les deux langues.",
      },
    ],
  },

  {
    slug: "es-expr-jerga",
    category: "Expressions",
    title: "Le familier et ses degrés",
    statement:
      "Guay, chido, bacán, copado. Quatre mots pour dire « génial », et aucun ne voyage. L'argot espagnol est la partie la plus régionale de la langue — et la plus datée.",
    tip: "Un mot d'argot appris dans une série espagnole ne se dit pas au Mexique, et l'inverse est tout aussi vrai. Comprendre large, produire prudemment.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "L'espagnol parlé entre soi",
      sections: [
        {
          titre: "Trois degrés à distinguer",
          texte:
            "Comme en anglais, le mot « familier » recouvre trois réalités très différentes, et les confondre met en difficulté.\n\nLe registre informel : des mots parfaitement standard mais réservés à l'oral détendu. Vale, un montón de, tío, un poco. Ils passent partout sauf dans un texte formel.\n\nL'argot proprement dit : des mots opaques pour qui ne les connaît pas, très régionaux et souvent datés. Guay, molar, currar, flipar, chungo en Espagne ; chido, padre, chamba, neta au Mexique ; copado, laburo, quilombo, bondi en Argentine.\n\nLe vulgaire : les jurons, dont la force est nettement moindre en espagnol qu'en français, et qui servent souvent de simple ponctuation entre amis. C'est précisément ce qui les rend dangereux pour un étranger : le seuil est ailleurs, et il varie selon le pays et le milieu.\n\nLa règle pratique est la même que pour l'anglais : comprendre les trois, produire le premier, n'aborder le deuxième qu'après avoir vécu dans un milieu qui l'emploie, et laisser le troisième de côté tant qu'on n'a pas les repères pour le doser.",
          visuels: [
            {
              type: "tableau",
              titre: "Le même sens, quatre pays",
              colonnes: ["Sens", "Espagne", "Mexique", "Argentine"],
              lignes: [
                ["génial", "guay", "chido, padre", "copado, bárbaro"],
                ["le travail", "el curro", "la chamba", "el laburo"],
                ["travailler", "currar", "chambear", "laburar"],
                ["l'ami", "tío, colega", "güey, cuate", "che, boludo"],
                ["le bazar", "un follón", "un desmadre", "un quilombo"],
                ["ça me plaît", "me mola", "me late", "me copa"],
                ["être stupéfait", "flipar", "alucinar", "flashear"],
                ["louche", "chungo", "gacho", "turbio"],
              ],
              note: "Aucune ligne de ce tableau ne voyage : employer la colonne d'un pays dans un autre situe immédiatement.",
            },
          ],
        },
        {
          titre: "Les mots qui piègent d'un pays à l'autre",
          texte:
            "Au-delà de l'argot proprement dit, quelques mots parfaitement courants changent de valeur en traversant l'Atlantique — et certains passent de l'anodin au vulgaire.\n\nCoger est le cas le plus connu : banal en Espagne, obscène en Argentine, au Mexique et dans plusieurs pays voisins. On dit tomar ou agarrar par prudence.\n\nConcha désigne un coquillage en Espagne et le sexe féminin dans le Cône Sud — où c'est aussi un prénom courant, ce qui complique les présentations.\n\nPico est banal en Espagne et vulgaire au Chili. Bicho change de sens dans les Caraïbes. Pinche est un mot d'insulte au Mexique et désigne un commis de cuisine en Espagne.\n\nBoludo, en Argentine, est une insulte entre inconnus et un terme d'affection entre amis : le même mot, deux valeurs opposées selon la relation. Aucun apprenant ne devrait s'y risquer avant d'avoir passé du temps sur place.\n\nEnfin, l'argot vieillit vite. Guay date des années quatre-vingt, molar aussi ; un locuteur de vingt ans les emploie encore, mais avec une nuance générationnelle. Employer un terme dépassé est plus voyant que de n'en employer aucun.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même mot, deux valeurs",
              colonnes: [
                {
                  titre: "En Espagne",
                  points: [
                    "coger — prendre, banal",
                    "concha — un coquillage",
                    "pinche — un commis de cuisine",
                  ],
                },
                {
                  titre: "En Amérique latine",
                  points: [
                    "coger — obscène dans le Cône Sud",
                    "concha — vulgaire dans le Cône Sud",
                    "pinche — insulte au Mexique",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "La ligne du travail",
          texte:
            "La question utile, pour un apprenant adulte, n'est pas de parler argot : c'est de savoir où passe la ligne au travail.\n\nCe qui passe partout : le tutoiement en Espagne — y compris avec un supérieur, ce qui surprend un francophone —, vale, un montón de, les tournures pronominales, et les connecteurs de l'oral vus ailleurs. L'espagnol professionnel espagnol est nettement moins formel que le français.\n\nCe qui passe entre collègues qu'on connaît : currar, un follón, estar hasta arriba de trabajo, qué palo.\n\nCe qui ne passe pas à l'écrit professionnel : tout l'argot, même bénin. Un courriel qui dit curro au lieu de trabajo décale immédiatement le registre.\n\nCe qui ne passe pas du tout : le vulgaire, dans un contexte dont on ne connaît pas les habitudes.\n\nEt une réserve géographique importante : tout ce qui précède vaut pour l'Espagne. L'Amérique latine est nettement plus formelle au travail — le vouvoiement y est fréquent entre collègues, le titre professionnel s'emploie couramment, et le registre détendu madrilène y détonnerait. Un apprenant qui passe de l'un à l'autre doit remonter d'un cran.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Esa peli está muy guay.",
        francais: "Ce film est super.",
        note: "Guay est espagnol et daté des années quatre-vingt. Au Mexique on dirait chido.",
      },
      {
        etranger: "Mañana tengo que currar.",
        francais: "Demain je dois bosser.",
        note: "Currar en Espagne, chambear au Mexique, laburar en Argentine. Aucun ne voyage.",
      },
      {
        etranger: "Me mola bastante esa idea.",
        francais: "Cette idée me plaît pas mal.",
        note: "Molar est espagnol. Me late au Mexique, me copa en Argentine.",
      },
      {
        etranger: "Fue un follón tremendo.",
        francais: "Ça a été une pagaille monstre.",
        note: "Un follón en Espagne, un desmadre au Mexique, un quilombo en Argentine.",
      },
      {
        etranger: "Estoy hasta arriba de trabajo.",
        francais: "Je suis débordé de travail.",
        note: "Informel mais neutre : passe dans une conversation de bureau espagnole.",
      },
      {
        etranger: "Flipé cuando me lo contaron.",
        francais: "J'ai halluciné quand on me l'a raconté.",
        note: "Flipar en Espagne, alucinar partout, flashear en Argentine.",
      },
      {
        etranger: "Ese asunto es un poco chungo.",
        francais: "Cette affaire est un peu louche.",
        note: "Chungo en Espagne, turbio en Argentine, gacho au Mexique.",
      },
      {
        etranger: "Nos tomamos algo después.",
        francais: "On boit un truc après.",
        note: "Tomar algo : l'invitation la plus courante, et parfaitement neutre.",
      },
      {
        etranger: "Qué palo tener que madrugar.",
        francais: "Quelle plaie de devoir se lever tôt.",
        note: "Qué palo, littéralement « quel bâton » : familier, très employé entre collègues.",
      },
    ],
  },
];
