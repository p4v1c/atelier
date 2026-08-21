/**
 * Espagnol — six chapitres de prononciation.
 *
 * Le module n'en comptait qu'un, sur l'accent tonique. Or l'espagnol a la
 * réputation d'être « facile à prononcer », et cette réputation coûte cher :
 * elle dispense de travailler les trois ou quatre choses qui font vraiment la
 * différence — la stabilité des voyelles, la jota, le R roulé, et surtout
 * l'enchaînement, qui rend l'espagnol parlé si rapide à l'oreille française.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_PRONUNCIACION: LotCartes[] = [
  {
    slug: "es-pron-vocales",
    category: "Prononciation",
    title: "Les cinq voyelles, qui ne bougent jamais",
    statement:
      "L'espagnol a cinq voyelles, et elles se prononcent toujours pareil. C'est sa plus grande facilité — et le piège du francophone, qui en connaît seize et les applique par réflexe.",
    tip: "Le e espagnol est toujours fermé, jamais muet. Le o est toujours pur, jamais « ou ». Le u se prononce « ou », jamais « u » français.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "Le système à cinq voyelles",
      sections: [
        {
          titre: "Cinq sons, et pas un de plus",
          texte:
            "Le français compte seize voyelles, l'espagnol cinq : a, e, i, o, u. Chacune a une seule prononciation, quelle que soit sa position dans le mot, quelle que soit l'orthographe autour.\n\nCette régularité rend l'espagnol facile à lire : qui connaît les cinq sons peut prononcer correctement un mot qu'il n'a jamais vu. Aucune autre langue romane n'offre cela.\n\nMais elle piège le francophone, pour trois raisons.\n\nLe e espagnol est toujours prononcé, et toujours à peu près fermé — entre notre « é » et notre « è ». Il n'est jamais muet. Dans noche, madre, siete, chaque e s'entend. Le francophone qui les avale dit noch, madr, syet.\n\nLe o est toujours pur et bref. Il ne se ferme jamais en « ou » et ne se nasalise jamais. Son, con, bien se prononcent avec un o et un n distincts, jamais comme le « on » français.\n\nLe u se prononce « ou ». Le son « u » du français n'existe pas en espagnol : mucho se dit « moutcho », jamais « mucho » à la française.",
          visuels: [
            {
              type: "tableau",
              titre: "Les cinq voyelles, et le réflexe français à éteindre",
              colonnes: ["Lettre", "Son espagnol", "Le réflexe français", "Exemple"],
              lignes: [
                ["a", "toujours « a » clair", "l'assourdir en fin de mot", "casa, mañana"],
                ["e", "toujours « é » fermé", "le rendre muet", "noche, madre, siete"],
                ["i", "toujours « i »", "aucun problème", "vivir, sí"],
                ["o", "toujours « o » pur et bref", "le nasaliser en « on »", "son, con, bombón"],
                ["u", "toujours « ou »", "le dire « u » français", "mucho, luna, uno"],
                ["u après q ou g", "muet", "le prononcer", "que, guerra"],
              ],
              note: "Le u se prononce dans güe et güi, où le tréma sert précisément à le réveiller : vergüenza, pingüino.",
            },
          ],
        },
        {
          titre: "Les nasales, qui n'existent pas",
          texte:
            "C'est le piège le plus tenace, et le plus reconnaissable.\n\nLe français a quatre voyelles nasales : « an », « in », « on », « un ». L'espagnol n'en a aucune. Quand un mot espagnol s'écrit an, en, in, on, un, la voyelle et la consonne se prononcent séparément : la voyelle reste pure, et le n s'articule ensuite.\n\nBanco se dit « ban-co » avec un a clair suivi d'un n, jamais comme le français « banc ». Son se dit « sonn », pas « son ». Cinco se dit « sinn-co ». Un se dit « ounn ».\n\nLe test est simple : si l'air passe par le nez pendant la voyelle, c'est faux. En espagnol, l'air ne passe par le nez qu'au moment du n, pas avant.\n\nUn francophone qui nasalise reste compris — le contexte sauve presque toujours — mais c'est le trait qui signale immédiatement son origine, devant même la jota et le R.\n\nL'exercice qui corrige : allonger la voyelle avant de fermer. Baaaa-nco. Soooo-n. Une fois la voyelle bien tenue et pure, on raccourcit progressivement sans la laisser se nasaliser.",
          visuels: [
            {
              type: "comparaison",
              titre: "La nasale française contre la voyelle espagnole",
              colonnes: [
                {
                  titre: "Ce que dit un francophone",
                  points: [
                    "banco → « banc-co »",
                    "son → « son » nasal",
                    "cinco → « sain-co »",
                    "un → « eun »",
                  ],
                },
                {
                  titre: "Ce qu'il faut dire",
                  points: [
                    "ba-n-co, voyelle pure puis n",
                    "so-n, o pur puis n",
                    "si-n-co",
                    "u-n, « ou » puis n",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Ce que la régularité permet",
          texte:
            "La contrepartie de cette rigueur est un avantage considérable, et il vaut la peine d'en tirer parti consciemment.\n\nPremièrement, l'espagnol se lit. Un mot inconnu se prononce correctement à la première lecture, ce qui n'est vrai ni de l'anglais ni du français. Un apprenant peut donc lire à voix haute sans dictionnaire, et cet exercice est rentable dès le premier mois.\n\nDeuxièmement, l'espagnol s'écrit. Un mot entendu s'orthographie presque toujours correctement, aux quelques ambiguïtés près : b et v se prononcent pareil, h est muet, et selon les régions s, c et z se confondent. Ces quatre exceptions mises à part, la correspondance est biunivoque.\n\nTroisièmement, la dictée devient un exercice utile très tôt, alors qu'en anglais elle suppose un vocabulaire déjà installé.\n\nUne conséquence pratique pour l'oreille : puisque les voyelles ne se réduisent jamais, l'espagnol ne « mange » pas ses syllabes comme l'anglais. Ce qui rend l'espagnol difficile à suivre n'est donc pas la réduction mais la vitesse et l'enchaînement — deux choses très différentes, et qui se travaillent autrement.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Esta noche vamos a casa de mi madre.",
        francais: "Ce soir, nous allons chez ma mère.",
        note: "Quatre e, tous prononcés et tous fermés. Aucun n'est muet.",
      },
      {
        etranger: "Hay mucho ruido en la calle.",
        francais: "Il y a beaucoup de bruit dans la rue.",
        note: "Mucho se dit « moutcho » : le u espagnol est toujours « ou ».",
      },
      {
        etranger: "El banco abre a las nueve.",
        francais: "La banque ouvre à neuf heures.",
        note: "Ban-co, voyelle pure puis n. La nasale française n'existe pas en espagnol.",
      },
      {
        etranger: "Son las cinco en punto.",
        francais: "Il est cinq heures pile.",
        note: "Son et cinco : deux occasions de nasaliser, deux fois à éviter.",
      },
      {
        etranger: "La luna está muy blanca.",
        francais: "La lune est très blanche.",
        note: "Luna se dit « louna ». Le son « u » français n'existe pas ici.",
      },
      {
        etranger: "Quiero un poco de agua.",
        francais: "Je veux un peu d'eau.",
        note: "Le u de quiero est muet après le q ; celui de un se prononce « ou ».",
      },
      {
        etranger: "Me da vergüenza decírselo.",
        francais: "Cela me gêne de le lui dire.",
        note: "Le tréma réveille le u : vergüenza se dit « ver-goué-nsa ».",
      },
      {
        etranger: "Siete días a la semana.",
        francais: "Sept jours par semaine.",
        note: "Chaque e s'entend, y compris celui de siete en fin de mot.",
      },
      {
        etranger: "El pingüino vive en el hielo.",
        francais: "Le manchot vit sur la glace.",
        note: "Pingüino avec tréma, et hielo avec un h parfaitement muet.",
      },
      {
        etranger: "Con mi hermano y con mi prima.",
        francais: "Avec mon frère et avec ma cousine.",
        note: "Deux con, deux o purs. Et deux h muets dans hermano.",
      },
    ],
  },

  {
    slug: "es-pron-jota-erre",
    category: "Prononciation",
    title: "La jota et le R roulé",
    statement:
      "Les deux sons que le français n'a pas, et les deux qu'on croit impossibles. Le premier s'obtient en une minute, le second demande une semaine — mais aucun ne bloque la compréhension.",
    tip: "La jota se produit tout au fond de la gorge, comme un raclement doux. Le R roulé se produit tout devant, la pointe de la langue battant contre les alvéoles.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Deux sons à installer",
      sections: [
        {
          titre: "La jota : où et comment",
          texte:
            "La jota, notée /x/, s'écrit j devant toutes les voyelles, et g devant e et i seulement. Jamón, jefe, hijo, gente, gigante, mujer, trabajo.\n\nLe son se produit au voile du palais, très en arrière : le dos de la langue se rapproche du palais mou et l'air frotte. C'est la même position que le « ch » allemand de Bach ou le « ch » écossais de loch.\n\nUn francophone n'a pas ce son, mais il en a un très proche : le r français de « rue », qui se produit presque au même endroit. Le geste de départ consiste donc à dire un r français prolongé, puis à le rendre sourd — à arrêter la vibration des cordes tout en gardant le frottement.\n\nSon intensité varie beaucoup selon les régions. Elle est très marquée en Espagne, notamment en Castille ; elle s'adoucit en Amérique latine jusqu'à ressembler à un simple h aspiré aux Caraïbes et dans plusieurs régions andines. Toutes ces réalisations sont correctes.\n\nDeux pièges d'orthographe. Le g devant a, o, u se prononce comme un g français : gato, gota, gustar. Pour garder ce son devant e et i, on écrit gue et gui, avec un u muet : guerra, guitarra. Et pour prononcer ce u, il faut le tréma : güe, güi.",
          visuels: [
            {
              type: "tableau",
              titre: "Quelle lettre, quel son",
              colonnes: ["Écrit", "Son", "Exemples"],
              lignes: [
                ["ja, jo, ju", "jota /x/", "jamón, joven, jugar"],
                ["je, ji", "jota /x/", "jefe, jirafa"],
                ["ge, gi", "jota /x/", "gente, gigante"],
                ["ga, go, gu", "g dur", "gato, gota, gustar"],
                ["gue, gui", "g dur, u muet", "guerra, guitarra"],
                ["güe, güi", "g dur + « ou »", "vergüenza, pingüino"],
                ["h", "toujours muet", "hola, hermano, hielo"],
              ],
              note: "Le h espagnol ne se prononce jamais, sauf dans le groupe ch, qui est un son à part entière.",
            },
          ],
        },
        {
          titre: "Le R simple et le R roulé",
          texte:
            "L'espagnol a deux r, et ils distinguent des mots. Ce ne sont pas deux variantes d'un même son mais deux phonèmes différents.\n\nLe r simple, dit battu, est un seul coup de langue contre les alvéoles — juste derrière les dents du haut. Il apparaît entre voyelles et après consonne : pero, caro, para, tres, cristal. Ce son existe en français, dans certaines prononciations rapides de « Paris », et il s'obtient facilement.\n\nLe R roulé, dit vibrant, est le même geste répété deux à cinq fois. Il apparaît en début de mot, après n, l ou s, et s'écrit rr entre voyelles : rojo, perro, carro, Enrique, alrededor, Israel.\n\nLa paire minimale la plus célèbre est pero, mais, contre perro, chien. S'y ajoutent caro et carro, para et parra, coro et corro.\n\nLes deux sons se produisent à l'avant de la bouche, exactement là où le r français ne se produit pas. C'est pourquoi le r français ne peut pas les remplacer : il se produit dans la gorge, au même endroit que la jota — un hispanophone qui entend un r français comprend une jota.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux mots que le R sépare",
              colonnes: [
                {
                  titre: "R simple — un coup",
                  points: [
                    "pero — mais",
                    "caro — cher",
                    "coro — chœur",
                    "para — pour",
                  ],
                },
                {
                  titre: "R roulé — plusieurs coups",
                  points: [
                    "perro — chien",
                    "carro — voiture",
                    "corro — je cours",
                    "parra — treille",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Apprendre à rouler le R",
          texte:
            "Le R roulé n'est pas une question de force ni de talent : c'est un réglage de position et de souffle, et il s'obtient par étapes.\n\nPremière étape, trouver le point. Dites « tada tada tada » de plus en plus vite. La langue frappe exactement l'endroit où le R doit vibrer. C'est le seul point à mémoriser.\n\nDeuxième étape, obtenir un battement. Le mot anglais butter dit à l'américaine contient exactement le r simple espagnol. Le mot para aussi, une fois qu'on a le point.\n\nTroisième étape, laisser vibrer. La langue doit être détendue et posée près du palais, sans le toucher, et le souffle doit être fort et continu. C'est le souffle qui fait vibrer la langue, pas le muscle : plus on force, moins ça marche. L'erreur la plus commune est de crisper la langue.\n\nQuatrième étape, l'amorce. Beaucoup y arrivent en partant d'un t ou d'un d : « tttrrr », « ddrrr ». Le groupe tres, cuatro, drama sert de rampe.\n\nUne semaine de dix minutes par jour suffit à la plupart des apprenants. Et une consolation utile : ne pas rouler le R n'empêche jamais d'être compris. Beaucoup d'hispanophones natifs ne le roulent pas non plus — c'est un défaut d'élocution courant, appelé rotacismo, et personne n'en fait un drame.",
        },
      ],
    },
    cartes: [
      {
        etranger: "El jefe trabaja los jueves.",
        francais: "Le chef travaille le jeudi.",
        note: "Trois jotas. Le son se produit au fond, comme le ch allemand de Bach.",
      },
      {
        etranger: "La gente joven come jamón.",
        francais: "Les jeunes gens mangent du jambon.",
        note: "Gente s'écrit avec g mais se prononce comme jamón : g devant e vaut jota.",
      },
      {
        etranger: "El gato está en la guitarra.",
        francais: "Le chat est sur la guitare.",
        note: "Gato a un g dur ; guitarra garde ce g dur grâce au u muet.",
      },
      {
        etranger: "Pero el perro no ladra.",
        francais: "Mais le chien n'aboie pas.",
        note: "La paire minimale la plus célèbre : un battement contre plusieurs.",
      },
      {
        etranger: "El carro es muy caro.",
        francais: "La voiture est très chère.",
        note: "Carro roulé, caro battu. Le R porte à lui seul la différence de sens.",
      },
      {
        etranger: "Enrique corre alrededor del parque.",
        francais: "Enrique court autour du parc.",
        note: "Le R roule après n et après l, même écrit avec un seul r.",
      },
      {
        etranger: "Tres tristes tigres.",
        francais: "Trois tristes tigres.",
        note: "Le groupe tr sert de rampe : beaucoup obtiennent leur premier R roulé ici.",
      },
      {
        etranger: "Hola, ¿hay hielo en casa?",
        francais: "Bonjour, y a-t-il de la glace à la maison ?",
        note: "Trois h, tous muets. Le h espagnol ne se prononce jamais seul.",
      },
      {
        etranger: "La mujer roja lleva un reloj.",
        francais: "La femme en rouge porte une montre.",
        note: "Deux R roulés en début de mot, deux jotas. Le reloj final est presque muet en Espagne.",
      },
      {
        etranger: "Un gigante con una jirafa.",
        francais: "Un géant avec une girafe.",
        note: "Gigante et jirafa : g devant i et j devant i donnent le même son.",
      },
    ],
  },

  {
    slug: "es-pron-seseo",
    category: "Prononciation",
    title: "Seseo, ceceo, yeísmo : les accents",
    statement:
      "Le c de cinco, le ll de calle, le s final de más. Trois points où l'espagnol se partage entre régions — et où aucune prononciation n'est plus correcte qu'une autre.",
    tip: "Le seseo — prononcer c et z comme un s — est la norme pour plus de neuf hispanophones sur dix. C'est la Castille qui fait exception, pas l'inverse.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Une langue, plusieurs prononciations",
      sections: [
        {
          titre: "Le seseo, et qui le pratique",
          texte:
            "En castillan de Castille, le c devant e ou i et le z se prononcent comme le th anglais de think : cinco, zapato, gracias. C'est ce qu'on appelle la distinción, puisque ce son se distingue du s.\n\nPartout ailleurs — toute l'Amérique latine, les Canaries, une grande partie de l'Andalousie —, ce son n'existe pas : c, z et s se prononcent tous s. C'est le seseo.\n\nUne remarque de proportion s'impose. Plus de neuf hispanophones sur dix pratiquent le seseo. La distinción castillane, souvent enseignée comme la norme en Europe, est donc minoritaire à l'échelle de la langue.\n\nPour un apprenant, la conséquence est libératrice : les deux sont corrects, et il faut choisir selon la région qu'on fréquente. Un francophone qui apprend avec des ressources d'Espagne prendra la distinción ; celui qui travaille avec l'Amérique latine prendra le seseo.\n\nCe qu'il ne faut pas faire, en revanche, c'est mélanger : prononcer cinco à la castillane et gracias au seseo dans la même phrase sonne faux partout.\n\nExiste enfin le ceceo, propre à certaines zones d'Andalousie, où c'est l'inverse : le s se prononce comme le z. Il est très marqué régionalement et ne s'apprend pas.",
          visuels: [
            {
              type: "tableau",
              titre: "Les trois systèmes",
              colonnes: ["Système", "c/z", "s", "Où"],
              lignes: [
                ["distinción", "th de think", "s", "Castille, nord de l'Espagne"],
                ["seseo", "s", "s", "Amérique latine, Canaries, Andalousie"],
                ["ceceo", "th", "th", "certaines zones d'Andalousie"],
              ],
              note: "Le seseo concerne plus de neuf locuteurs sur dix : c'est la distinción qui fait exception.",
            },
          ],
        },
        {
          titre: "Le yeísmo, et le sort du s final",
          texte:
            "Deux autres points partagent le monde hispanophone, et ils s'entendent tous les jours.\n\nLe yeísmo concerne le ll. Il se prononçait autrefois comme le « ill » de « fille » ; aujourd'hui, l'immense majorité des locuteurs le prononce comme le y de yo. Calle, llamar, lluvia sonnent donc « caye », « yamar », « yuvia ». La distinction ancienne ne survit que dans quelques zones rurales des Andes et de Castille.\n\nÀ Buenos Aires et Montevideo, le phénomène va plus loin : le ll et le y se prononcent « ch » comme dans le français « je ». Calle devient « caje », yo devient « jo ». C'est le rehilamiento, et c'est le trait le plus reconnaissable de l'accent rioplatense.\n\nLe s final, lui, s'aspire ou disparaît dans une large moitié du monde hispanophone : Andalousie, Caraïbes, côtes, Chili, Argentine. Más se dit « mah », los libros devient « loh libroh », estamos devient « ehtamoh ».\n\nC'est ce qui rend certains accents si difficiles à un francophone : les marques du pluriel s'effacent, et il faut les déduire de l'article et du verbe. Comprendre cela change tout à l'écoute des Caraïbes ou du sud de l'Espagne.",
          visuels: [
            {
              type: "comparaison",
              titre: "La même phrase, deux accents",
              colonnes: [
                {
                  titre: "Castille",
                  points: [
                    "Los zapatos están en la calle.",
                    "th pour zapatos, s finaux nets",
                    "calle avec un y",
                  ],
                },
                {
                  titre: "Caraïbes",
                  points: [
                    "Loh sapatoh ehtán en la caye.",
                    "seseo, s aspirés",
                    "calle avec un y",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Que choisir, et pourquoi cela compte peu",
          texte:
            "La question que se pose tout apprenant — quel accent adopter — a une réponse courte : celui de la région dont il écoute les ressources, et surtout, pas de mélange.\n\nCe qui compte bien davantage, c'est de comprendre les autres. Un apprenant qui n'a jamais entendu un s aspiré ne comprendra pas un Cubain, même s'il parle un castillan irréprochable. La compréhension est asymétrique : elle demande d'avoir entendu, la production non.\n\nLa recommandation pratique est donc de produire un accent, mais d'écouter les autres délibérément. Choisir des podcasts et des séries de plusieurs pays, alterner Espagne, Mexique, Argentine et Colombie, et accepter de ne pas tout comprendre au début.\n\nUn dernier point rassurant : l'intercompréhension entre hispanophones est excellente. Un Chilien et un Espagnol se comprennent sans effort, même s'ils s'amusent de leurs accents respectifs. Les écarts sont bien moindres qu'entre un Marseillais et un Québécois.\n\nUn étranger n'est donc jamais pénalisé par son choix d'accent. Il l'est, en revanche, par un accent français appliqué à l'espagnol — nasales, r de gorge, e muets — et c'est là que l'effort est rentable.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Cinco zapatos en la caja.",
        francais: "Cinq chaussures dans la boîte.",
        note: "Trois occasions de c ou z : th en Castille, s partout ailleurs.",
      },
      {
        etranger: "Muchas gracias por todo.",
        francais: "Merci beaucoup pour tout.",
        note: "Le c de gracias suit le même partage. L'important est de ne pas mélanger les deux systèmes.",
      },
      {
        etranger: "La lluvia cae en la calle.",
        francais: "La pluie tombe dans la rue.",
        note: "Le ll se dit comme un y presque partout. À Buenos Aires, il se dit « ch » à la française.",
      },
      {
        etranger: "Me llamo Yolanda.",
        francais: "Je m'appelle Yolanda.",
        note: "Le ll et le y se prononcent pareil : c'est le yeísmo, désormais majoritaire.",
      },
      {
        etranger: "Los libros están en la mesa.",
        francais: "Les livres sont sur la table.",
        note: "Aux Caraïbes et en Andalousie, les trois s finaux s'aspirent : loh libroh ehtán.",
      },
      {
        etranger: "¿Tienes más pesos?",
        francais: "As-tu plus de pesos ?",
        note: "Más se dit « mah » dans une large moitié du monde hispanophone.",
      },
      {
        etranger: "Estamos en la plaza.",
        francais: "Nous sommes sur la place.",
        note: "Estamos et plaza : deux traits régionaux dans une phrase de quatre mots.",
      },
      {
        etranger: "El cielo está azul.",
        francais: "Le ciel est bleu.",
        note: "Cielo et azul : le c et le z suivent le même partage régional.",
      },
      {
        etranger: "Ella se llama Cecilia.",
        francais: "Elle s'appelle Cecilia.",
        note: "Yeísmo pour llama, et deux c pour Cecilia : la phrase teste les deux traits.",
      },
      {
        etranger: "Hace mucho calor en marzo.",
        francais: "Il fait très chaud en mars.",
        note: "Hace et marzo. Et le h de hace reste muet, quel que soit l'accent.",
      },
    ],
  },

  {
    slug: "es-pron-enlaces",
    category: "Prononciation",
    title: "L'enchaînement et le débit",
    statement:
      "L'espagnol ne réduit pas ses syllabes, mais il les soude. C'est ce qui le rend si rapide à l'oreille française — et ce qui explique qu'on n'entende qu'un seul long mot.",
    tip: "Un groupe de souffle espagnol se prononce d'un trait, sans coupure entre les mots. El agua está aquí devient « e-la-guaes-ta-quí ».",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Pourquoi l'espagnol paraît si rapide",
      sections: [
        {
          titre: "Une syllabation qui ignore les mots",
          texte:
            "L'espagnol se découpe en syllabes sans tenir compte des frontières entre mots. À l'intérieur d'un groupe de souffle, la chaîne se resyllabifie du début à la fin.\n\nUne consonne finale s'attache à la voyelle qui suit : el agua se prononce « e-la-gua ». Los amigos devient « lo-sa-mi-gos ». Un hombre devient « u-nom-bre ».\n\nDeux voyelles identiques fusionnent en une seule : la agenda devient « la-gen-da », de este devient « des-te », mi hijo devient « mi-jo ».\n\nDeux voyelles différentes se soudent en diphtongue : está aquí devient « es-taa-quí » puis « es-ta-quí ».\n\nC'est ce phénomène, et non la vitesse d'articulation, qui rend l'espagnol difficile à découper. Un francophone entend un flux continu et cherche des mots isolés qui n'existent pas dans la chaîne sonore.\n\nLa bonne nouvelle est qu'il s'agit exactement de ce que fait le français avec ses liaisons et ses enchaînements — « les amis » se dit « lé-za-mi ». L'espagnol applique simplement ce principe partout, et sans exception.",
          visuels: [
            {
              type: "tableau",
              titre: "Ce qui est écrit, ce qui est dit",
              colonnes: ["Écrit", "Prononcé", "Le mécanisme"],
              lignes: [
                ["el agua", "e-la-gua", "consonne attachée"],
                ["los amigos", "lo-sa-mi-gos", "consonne attachée"],
                ["un hombre", "u-nom-bre", "h muet, n attaché"],
                ["la agenda", "la-gen-da", "voyelles fusionnées"],
                ["de este", "des-te", "voyelles fusionnées"],
                ["está aquí", "es-ta-quí", "voyelles fusionnées"],
                ["mi hijo", "mi-jo", "h muet, voyelles fusionnées"],
              ],
              note: "Le même mécanisme joue en français dans « les amis » ou « il est ici ». L'espagnol l'applique sans exception.",
            },
          ],
        },
        {
          titre: "Le rythme syllabique",
          texte:
            "L'espagnol, comme le français, est une langue à rythme syllabique : ses syllabes durent à peu près le même temps, et le débit se mesure en syllabes par seconde.\n\nCela le distingue radicalement de l'anglais, qui comprime tout ce qui n'est pas accentué. En espagnol, aucune voyelle ne se réduit : le a de casa dure autant que celui de casas, et un mot de quatre syllabes prend deux fois le temps d'un mot de deux.\n\nD'où une conséquence contre-intuitive : l'espagnol n'est pas plus rapide que le français en information transmise, mais il l'est en syllabes par seconde. Ses syllabes portent en moyenne moins d'information, il en faut donc davantage, et le débit monte pour compenser. Les mesures situent l'espagnol parmi les langues les plus rapides du monde à ce compte-là.\n\nPour l'apprenant, deux conclusions.\n\nÀ la production : ne pas chercher à parler vite. Un espagnol lent et bien syllabé se comprend parfaitement ; un espagnol rapide et mal syllabé ne se comprend pas.\n\nÀ l'écoute : ne pas chercher à identifier chaque mot. Il faut s'habituer à saisir des groupes entiers, et accepter un flou sur les mots grammaticaux — exactement comme un francophone n'entend pas chaque mot d'une phrase française rapide.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux façons de rater l'écoute",
              colonnes: [
                {
                  titre: "Ce que fait l'apprenant",
                  points: [
                    "Il cherche les mots un par un.",
                    "Il s'arrête au premier mot inconnu.",
                    "Il attend des pauses entre les mots.",
                  ],
                },
                {
                  titre: "Ce qu'il faut faire",
                  points: [
                    "Saisir des groupes de souffle entiers.",
                    "Laisser passer et reprendre au suivant.",
                    "Accepter qu'il n'y ait aucune pause.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Travailler l'enchaînement",
          texte:
            "Trois exercices installent l'enchaînement, et le troisième est le plus efficace.\n\nLe premier est la lecture à voix haute en groupes. On marque au crayon les frontières de groupes de souffle — généralement à la virgule et aux articulations logiques — puis on lit chaque groupe d'un seul trait, sans coupure interne. L'espagnol s'y prête parfaitement puisqu'il se lit sans surprise.\n\nLe deuxième est la transcription. On écoute une phrase courte en boucle et on écrit ce qu'on entend, puis on compare. L'écart entre ce qu'on croyait entendre et ce qui était dit montre exactement où l'oreille découpe mal.\n\nLe troisième est le shadowing : on répète en même temps que le locuteur, avec un décalage d'une demi-seconde, sans chercher à comprendre. C'est un exercice de rythme pur, et il installe l'enchaînement bien plus vite que la répétition consciente, parce qu'il ne laisse pas le temps de resegmenter mentalement.\n\nUn quart d'heure de shadowing par jour pendant un mois change nettement la fluidité — et la compréhension avec, puisque les deux reposent sur le même découpage.",
        },
      ],
    },
    cartes: [
      {
        etranger: "El agua está muy fría.",
        francais: "L'eau est très froide.",
        note: "E-la-gua-es-ta : la consonne s'attache à la voyelle suivante, les mots disparaissent.",
      },
      {
        etranger: "Los amigos de mi hermana.",
        francais: "Les amis de ma sœur.",
        note: "Lo-sa-mi-gos, et mi hermana devient « mier-mana » : le h ne bloque rien.",
      },
      {
        etranger: "Un hombre alto y delgado.",
        francais: "Un homme grand et mince.",
        note: "U-nom-bral-to : deux enchaînements dans quatre mots.",
      },
      {
        etranger: "Está en el otro lado.",
        francais: "C'est de l'autre côté.",
        note: "Es-taen-elo-tro : trois soudures d'affilée.",
      },
      {
        etranger: "Vamos a hablar de esto.",
        francais: "Nous allons parler de ça.",
        note: "A hablar devient « ablar », de esto devient « desto ».",
      },
      {
        etranger: "Mi hijo tiene ocho años.",
        francais: "Mon fils a huit ans.",
        note: "Mi hijo se dit « mi-jo » : le h muet laisse les voyelles fusionner.",
      },
      {
        etranger: "Se ha ido esta mañana.",
        francais: "Il est parti ce matin.",
        note: "Se ha ido se soude en « seaído ». Les mots grammaticaux fusionnent en premier.",
      },
      {
        etranger: "Todo el mundo lo sabe.",
        francais: "Tout le monde le sait.",
        note: "To-doel-mun-do : la fusion vocalique fait perdre une syllabe.",
      },
      {
        etranger: "Está aquí desde ayer.",
        francais: "Il est ici depuis hier.",
        note: "Está aquí devient « estaquí », desde ayer devient « desdeayer ».",
      },
      {
        etranger: "No lo he visto nunca.",
        francais: "Je ne l'ai jamais vu.",
        note: "Lo he devient « loé ». Les mots grammaticaux se soudent en premier.",
      },
    ],
  },

  {
    slug: "es-pron-diptongos",
    category: "Prononciation",
    title: "Diphtongues et hiatus",
    statement:
      "Deux voyelles côte à côte forment tantôt une syllabe, tantôt deux. Ce n'est pas un détail : la règle décide du nombre de syllabes, donc de la place de l'accent, donc de l'orthographe.",
    tip: "Deux voyelles fortes — a, e, o — font toujours deux syllabes. Une forte et une faible font une seule syllabe, sauf si l'accent écrit sépare les deux.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Quand deux voyelles font une syllabe",
      sections: [
        {
          titre: "Fortes et faibles",
          texte:
            "L'espagnol classe ses cinq voyelles en deux groupes, et toute la règle en découle.\n\nLes fortes, ou ouvertes : a, e, o. Les faibles, ou fermées : i, u.\n\nDeux fortes qui se suivent forment toujours deux syllabes distinctes. C'est un hiatus : le-er, ca-os, te-a-tro, po-e-ma, a-ho-ra — le h muet ne compte pas.\n\nUne forte et une faible forment une seule syllabe. C'est une diphtongue, et la forte porte le son principal : bai-le, cau-sa, pei-ne, bue-no, tie-ne, sie-te, ciu-dad.\n\nDeux faibles forment aussi une seule syllabe : ciu-dad, cui-da-do, viu-da.\n\nTrois voyelles peuvent même se grouper en triphtongue quand une forte est encadrée de deux faibles : U-ru-guay, es-tu-diáis.\n\nCette classification n'a rien de théorique. Elle décide du nombre de syllabes du mot, donc de la syllabe qui porte l'accent tonique, donc de la présence ou non d'un accent écrit. Un apprenant qui compte mal les syllabes accentue mal et orthographie mal.",
          visuels: [
            {
              type: "tableau",
              titre: "Le groupe, et le nombre de syllabes",
              colonnes: ["Combinaison", "Résultat", "Exemples", "Syllabes"],
              lignes: [
                ["forte + forte", "hiatus", "le-er, ca-os, po-e-ma", "deux"],
                ["forte + faible", "diphtongue", "bai-le, cau-sa, pei-ne", "une"],
                ["faible + forte", "diphtongue", "bue-no, tie-ne, sie-te", "une"],
                ["faible + faible", "diphtongue", "ciu-dad, cui-da-do", "une"],
                ["faible accentuée + forte", "hiatus", "dí-a, rí-o, pa-ís", "deux"],
                ["faible + forte + faible", "triphtongue", "U-ru-guay", "une"],
              ],
              note: "Le h muet entre deux voyelles ne les sépare pas : ahora se syllabe a-ho-ra, prohibir se lit proi-bir.",
            },
          ],
        },
        {
          titre: "L'accent qui casse la diphtongue",
          texte:
            "C'est le point le plus utile de tout le chapitre, et celui qui explique la moitié des accents écrits espagnols.\n\nQuand une voyelle faible — i ou u — porte l'accent tonique alors qu'elle est collée à une forte, la diphtongue se brise : les deux voyelles forment deux syllabes. Et pour signaler cette rupture, l'espagnol met obligatoirement un accent écrit, même si les règles générales ne le demanderaient pas.\n\nDía se syllabe dí-a, deux syllabes. Sans accent, dia ferait une seule syllabe et se prononcerait comme la fin de media.\n\nDe même : río, país, oír, baúl, reír, caída, todavía, panadería, María.\n\nCet accent-là n'a rien à voir avec celui qui marque la syllabe tonique irrégulière. Il a une fonction purement orthographique : dire que deux voyelles ne se soudent pas. C'est ce qu'on appelle l'accent diacritique de hiatus.\n\nUn contraste éclaire tout : hacia, vers, fait deux syllabes — ha-cia — parce que le i n'est pas accentué ; hacía, il faisait, en fait trois — ha-cí-a — parce qu'il l'est. Un seul accent sépare une préposition d'un imparfait.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même groupe de lettres, deux mots",
              colonnes: [
                {
                  titre: "Sans accent — diphtongue",
                  points: [
                    "hacia — vers (2 syllabes)",
                    "continuo — continu (3 syllabes)",
                    "secretaria — secrétaire",
                  ],
                },
                {
                  titre: "Avec accent — hiatus",
                  points: [
                    "hacía — il faisait (3 syllabes)",
                    "continúo — je continue (4 syllabes)",
                    "secretaría — secrétariat",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Ce que le francophone doit désapprendre",
          texte:
            "Le français a lui aussi des diphtongues graphiques, mais il les traite tout autrement, et trois réflexes doivent s'éteindre.\n\nPremier réflexe : lire ou comme un son unique. En espagnol, ou n'existe pratiquement pas comme groupe, et le son « ou » s'écrit u. Un francophone qui lit bueno en cherchant un « ou » se trompe : c'est bu-e-no, soudé en « boué-no ».\n\nDeuxième réflexe : lire ai, ei, au comme en français. Baile ne se dit pas « bèle » mais « ba-i-le » soudé, avec les deux voyelles audibles. Causa n'est pas « cauza » mais « ca-ou-sa ». Peine n'est pas « pène » mais « pé-i-ne ». La règle est constante : en espagnol, chaque voyelle écrite se prononce.\n\nTroisième réflexe : avaler le e final. Siete a deux syllabes et le e final s'entend nettement.\n\nLe principe qui les résume tous : l'espagnol n'a pas de digramme vocalique. Deux voyelles écrites font deux sons, qu'ils tiennent dans une syllabe ou dans deux. C'est cette transparence qui rend la langue lisible à haute voix dès le premier jour — à condition de ne pas y projeter l'orthographe française.",
        },
      ],
    },
    cartes: [
      {
        etranger: "El baile empieza a las nueve.",
        francais: "Le bal commence à neuf heures.",
        note: "Bai-le et nue-ve : deux diphtongues, chaque voyelle audible.",
      },
      {
        etranger: "Hace un día muy bonito.",
        francais: "Il fait une très belle journée.",
        note: "Día a deux syllabes : l'accent brise la diphtongue et l'orthographe le signale.",
      },
      {
        etranger: "Voy a leer un poema.",
        francais: "Je vais lire un poème.",
        note: "Le-er et po-e-ma : deux fortes qui se suivent font toujours deux syllabes.",
      },
      {
        etranger: "El río pasa por el país.",
        francais: "La rivière traverse le pays.",
        note: "Rí-o et pa-ís : dans les deux cas, l'accent écrit dit que les voyelles se séparent.",
      },
      {
        etranger: "La causa del ruido es el viento.",
        francais: "La cause du bruit est le vent.",
        note: "Cau-sa, rui-do, vien-to : trois diphtongues, aucune voyelle avalée.",
      },
      {
        etranger: "Iba hacia la salida.",
        francais: "Il allait vers la sortie.",
        note: "Hacia sans accent fait deux syllabes : ha-cia. Avec accent, hacía en ferait trois.",
      },
      {
        etranger: "Todavía no ha llegado.",
        francais: "Il n'est pas encore arrivé.",
        note: "To-da-ví-a : quatre syllabes, grâce à l'accent qui casse la diphtongue.",
      },
      {
        etranger: "Vivimos en una ciudad tranquila.",
        francais: "Nous vivons dans une ville tranquille.",
        note: "Ciu-dad : deux faibles forment une seule syllabe.",
      },
      {
        etranger: "Ten cuidado con el aceite.",
        francais: "Fais attention avec l'huile.",
        note: "Cui-da-do et a-cei-te : les deux groupes tiennent en une syllabe.",
      },
      {
        etranger: "Ahora tengo que reír.",
        francais: "Maintenant je dois rire.",
        note: "A-ho-ra : le h muet ne soude pas les voyelles. Re-ír : l'accent les sépare.",
      },
    ],
  },

  {
    slug: "es-pron-entonacion",
    category: "Prononciation",
    title: "L'intonation : question, ordre, ironie",
    statement:
      "L'espagnol pose ses questions sans inverser le verbe ni ajouter de mot : seule la mélodie les distingue d'une affirmation. C'est le ¿ à l'écrit, et rien d'autre à l'oral.",
    tip: "Le point d'interrogation inversé n'est pas une coquetterie : il prévient le lecteur qu'il doit monter la voix, ce que l'espagnol ne signale par aucun autre moyen.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "La mélodie de la phrase",
      sections: [
        {
          titre: "Pourquoi l'espagnol écrit ¿ et ¡",
          texte:
            "L'espagnol est la seule grande langue à ouvrir ses questions et ses exclamations par un signe inversé. Ce n'est pas un ornement : c'est une nécessité de son système.\n\nEn français, une question se signale par l'inversion — « viens-tu ? » —, par « est-ce que », ou par un mot interrogatif. Le lecteur sait dès les premiers mots qu'il lit une question.\n\nEn espagnol, rien de tout cela n'est obligatoire. Vienes mañana et ¿Vienes mañana? ont exactement les mêmes mots dans le même ordre. Seule l'intonation les sépare à l'oral, et seul le ¿ les sépare à l'écrit.\n\nSans ce signe, un lecteur devrait aller jusqu'au point final pour découvrir qu'il lisait une question — et recommencer sa lecture avec la bonne mélodie. L'Académie l'a donc rendu obligatoire au XVIIIᵉ siècle, précisément pour cette raison.\n\nLa conséquence pour l'apprenant est directe : l'intonation n'est pas un raffinement de fin de parcours mais un élément grammatical. Une question posée avec une mélodie plate est entendue comme une affirmation, et l'interlocuteur ne répond pas.",
          visuels: [
            {
              type: "tableau",
              titre: "Les quatre mélodies de base",
              colonnes: ["Type", "Mélodie", "Exemple"],
              lignes: [
                ["affirmation", "descend à la fin", "Viene mañana."],
                ["question par oui ou non", "monte à la fin", "¿Viene mañana?"],
                ["question avec mot interrogatif", "descend à la fin", "¿Cuándo viene?"],
                ["énumération", "monte à chaque item, descend au dernier", "Pan, leche y aceite."],
                ["exclamation", "monte puis descend fort", "¡Qué frío hace!"],
                ["question de confirmation", "descend puis remonte sur ¿no?", "Viene mañana, ¿no?"],
              ],
              note: "Contre-intuitif : une question en cuándo, dónde ou qué DESCEND, comme une affirmation.",
            },
          ],
        },
        {
          titre: "La question qui monte et celle qui descend",
          texte:
            "C'est le point que les francophones ratent le plus, parce que le français fait presque l'inverse.\n\nUne question fermée — celle qui appelle oui ou non — monte à la fin en espagnol. ¿Vienes mañana ? ¿Tienes hambre ? ¿Lo has visto ? La voix s'élève sur la dernière syllabe accentuée et reste haute.\n\nUne question ouverte — celle qui commence par un mot interrogatif — descend à la fin, exactement comme une affirmation. ¿Cuándo vienes ? ¿Dónde está ? ¿Qué quieres ? Le mot interrogatif porte déjà l'information ; la mélodie n'a rien à ajouter, et la faire monter sonne étrangement insistant, voire agressif.\n\nUn francophone qui applique une montée générale à toutes ses questions donne donc l'impression de répéter avec impatience.\n\nS'y ajoute la question de confirmation, très fréquente : on affirme, puis on ajoute ¿no?, ¿verdad? ou ¿cierto? avec une montée sur ce seul mot. Viene mañana, ¿no? C'est l'équivalent du question tag anglais, et l'espagnol s'en sert autant.\n\nEnfin, ¿o no? en fin de phrase durcit nettement : il presse l'interlocuteur de trancher.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux questions, deux mélodies opposées",
              colonnes: [
                {
                  titre: "Monte — question fermée",
                  points: [
                    "¿Vienes mañana?",
                    "¿Tienes hambre?",
                    "¿Lo has terminado?",
                  ],
                },
                {
                  titre: "Descend — question ouverte",
                  points: [
                    "¿Cuándo vienes?",
                    "¿Dónde está el libro?",
                    "¿Qué quieres hacer?",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Ordre, prière, ironie",
          texte:
            "Trois autres mélodies méritent d'être connues, parce qu'elles portent la politesse.\n\nL'impératif espagnol est brutal sans amortisseur, comme en anglais. Ven aquí, dit avec une mélodie descendante et une attaque forte, est un ordre. La même forme, dite avec une mélodie plus plate et suivie de por favor, devient une demande.\n\nLes amortisseurs habituels sont trois : por favor en fin de phrase ; la question à la place de l'ordre — ¿me pasas la sal? plutôt que pásame la sal ; et le conditionnel de politesse — ¿podrías…?, ¿te importaría…?\n\nL'exclamation, elle, monte fortement sur le mot porteur puis retombe : ¡Qué frío hace! ¡Qué bien! Les deux points d'exclamation encadrants signalent exactement l'étendue de cette montée, ce qui est plus précis que le système français.\n\nQuant à l'ironie, elle se marque en espagnol par un allongement et une mélodie plate là où on attendrait une montée : ¡Qué bien…, dit lentement et à plat, veut dire le contraire. C'est le même procédé qu'en français, et il se transpose sans effort — l'un des rares cas où l'intuition française est un bon guide.",
        },
      ],
    },
    cartes: [
      {
        etranger: "¿Vienes mañana por la tarde?",
        francais: "Tu viens demain après-midi ?",
        note: "Question fermée : la voix monte sur la dernière syllabe accentuée.",
      },
      {
        etranger: "¿Cuándo vienes exactamente?",
        francais: "Tu viens quand exactement ?",
        note: "Question ouverte : la voix descend, comme dans une affirmation. Monter sonne insistant.",
      },
      {
        etranger: "Viene mañana, ¿verdad?",
        francais: "Il vient demain, n'est-ce pas ?",
        note: "La question de confirmation : seule la fin monte, sur le ¿verdad?",
      },
      {
        etranger: "¡Qué frío hace hoy!",
        francais: "Qu'est-ce qu'il fait froid aujourd'hui !",
        note: "Les deux points d'exclamation encadrent exactement l'étendue de la montée.",
      },
      {
        etranger: "¿Me pasas la sal, por favor?",
        francais: "Tu me passes le sel, s'il te plaît ?",
        note: "La question remplace l'impératif : c'est l'amortisseur le plus courant.",
      },
      {
        etranger: "¿Podrías ayudarme un momento?",
        francais: "Pourrais-tu m'aider un instant ?",
        note: "Le conditionnel de politesse. Ayúdame seul serait un ordre.",
      },
      {
        etranger: "¿Dónde has puesto las llaves?",
        francais: "Où as-tu mis les clés ?",
        note: "Dónde porte déjà la question : la mélodie descend.",
      },
      {
        etranger: "Compré pan, leche y aceite.",
        francais: "J'ai acheté du pain, du lait et de l'huile.",
        note: "L'énumération monte à chaque élément et descend sur le dernier.",
      },
      {
        etranger: "¿Lo has terminado ya o no?",
        francais: "Tu l'as fini, oui ou non ?",
        note: "Le ¿o no? final durcit nettement : il presse l'interlocuteur de trancher.",
      },
      {
        etranger: "¡Qué bien, otra reunión!",
        francais: "Génial, encore une réunion !",
        note: "Dit lentement et à plat, l'exclamation devient ironique — comme en français.",
      },
    ],
  },
];
