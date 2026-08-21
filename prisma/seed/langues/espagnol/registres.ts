/**
 * Espagnol — l'espagnol qu'on parle, et où on le parle.
 *
 * Deux séries de niveau B1 sur ce qu'aucune grammaire ne dit : les mots qui
 * changent d'un pays à l'autre — dont un qui vous fera rire à Madrid et rougir
 * à Buenos Aires — et les petits mots qui tiennent la conversation orale et
 * qu'on ne trouve dans aucun manuel.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_REGISTRES: LotCartes[] = [
  {
    slug: "es-regionalismos",
    category: "Expressions",
    title: "Régionalismes : coger, plata, camión",
    statement:
      "Le même objet change de nom tous les deux pays, et le verbe le plus banal d'Espagne est obscène dans la moitié de l'Amérique. Une langue, vingt usages.",
    tip: "Coger est neutre en Espagne et vulgaire dans le Cône Sud et au Mexique. Tomar passe partout : c'est le mot de la prudence.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "L'espagnol et ses vingt et un pays",
      sections: [
        {
          titre: "Une langue, pas un dialecte de référence",
          texte:
            "Cinq cents millions de personnes parlent espagnol, et neuf sur dix ne vivent pas en Espagne. Le castillan de Madrid n'est donc pas la norme dont le reste s'écarterait : c'est une variété parmi d'autres, minoritaire en nombre de locuteurs.\n\nPour un francophone, la conséquence est pratique. Un manuel enseigne presque toujours l'espagnol péninsulaire — vosotros, coche, zumo, ordenador — et l'apprenant se trouve démuni la première fois qu'on lui parle de un carro, un jugo ou una computadora.\n\nLa bonne nouvelle est que ces écarts sont surtout lexicaux, et donc apprenables. La grammaire varie peu : le vosotros disparaît en Amérique au profit d'ustedes, le passé simple y grignote le passé composé, et le voseo argentin remplace tú par vos. Le reste tient debout partout.\n\nLa règle de survie est simple : comprendre large, produire prudemment. On apprend à reconnaître les trois ou quatre variantes d'un mot, et l'on emploie soi-même celle qui passe partout.",
          visuels: [
            {
              type: "tableau",
              titre: "Le même objet, selon l'endroit",
              colonnes: ["En français", "Espagne", "Mexique", "Cône Sud"],
              lignes: [
                ["la voiture", "coche", "carro", "auto"],
                ["le bus", "autobús", "camión", "colectivo / micro"],
                ["le portable", "móvil", "celular", "celular"],
                ["l'ordinateur", "ordenador", "computadora", "computadora"],
                ["le jus", "zumo", "jugo", "jugo"],
                ["l'argent", "dinero", "dinero / lana", "plata"],
                ["la piscine", "piscina", "alberca", "pileta"],
                ["la veste", "chaqueta", "saco", "campera / saco"],
                ["l'avocat (fruit)", "aguacate", "aguacate", "palta"],
                ["prendre (un bus)", "coger", "tomar", "tomar"],
              ],
              note: "Camión veut dire bus au Mexique et poids lourd presque partout ailleurs.",
            },
          ],
        },
        {
          titre: "Le cas coger, et les autres pièges de registre",
          texte:
            "Coger est le verbe le plus utile d'Espagne : on y coge le bus, le téléphone, un rhume, une habitude. En Argentine, en Uruguay, au Mexique et dans plusieurs pays voisins, il désigne l'acte sexuel, et rien d'autre. Dire « voy a coger el autobús » à Buenos Aires provoque au mieux un fou rire.\n\nLa parade est connue de tous les hispanophones : tomar. Tomar el autobús, tomar un taxi, tomar una decisión — le verbe passe partout sans jamais choquer.\n\nD'autres mots demandent la même prudence. Concha désigne un coquillage en Espagne et le sexe féminin dans le Cône Sud — c'est aussi un prénom courant, Concha, diminutif de Concepción, ce qui complique les présentations. Pico, banal en Espagne, est vulgaire au Chili. Bicho change de sens selon les Caraïbes.\n\nRien de tout cela ne s'improvise, et rien ne s'apprend par cœur non plus. Le réflexe utile est de repérer les mots à risque quand on les rencontre, et de garder l'équivalent neutre sous la main.",
          visuels: [
            {
              type: "comparaison",
              titre: "Ce qu'on dit, ce qu'on évite",
              colonnes: [
                {
                  titre: "Passe partout",
                  points: [
                    "tomar el autobús — pour prendre un bus.",
                    "dinero — pour l'argent.",
                    "teléfono — quand on ne sait pas si c'est móvil ou celular.",
                  ],
                },
                {
                  titre: "À manier selon le pays",
                  points: [
                    "coger — neutre en Espagne, obscène ailleurs.",
                    "plata — naturel en Amérique, familier en Espagne.",
                    "camión — bus au Mexique, poids lourd ailleurs.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Reconnaître d'où vient celui qui parle",
          texte:
            "Trois marqueurs suffisent à situer un hispanophone dès la première phrase, et les repérer aide à comprendre le reste.\n\nLe premier est le pronom de deuxième personne du pluriel. Vosotros habláis marque l'Espagne, sauf les Canaries et l'Andalousie occidentale. Partout ailleurs, c'est ustedes hablan, la même forme que pour le vouvoiement.\n\nLe deuxième est le voseo. En Argentine, en Uruguay, au Paraguay et en Amérique centrale, tú devient vos, avec sa propre conjugaison : vos hablás, vos tenés, vos podés. L'accent tombe sur la dernière syllabe, et l'impératif change aussi : vení, mirá.\n\nLe troisième est la prononciation du c et du z. En Espagne, cinco se prononce avec un th anglais ; partout ailleurs, comme un s. C'est le seso contre le ceceo, et il s'entend au premier mot.\n\nUn quatrième indice, plus discret, est le temps du passé. L'Espagne dit hoy he comido ; l'Amérique dit hoy comí. Le passé composé y recule presque partout.",
        },
      ],
    },
    cartes: [
      {
        etranger: "En España cogemos el autobús.",
        francais: "En Espagne, on prend le bus.",
        note: "Coger est banal en Espagne. En Argentine et au Mexique, il est obscène : on dit tomar.",
      },
      {
        etranger: "En México se toma el camión.",
        francais: "Au Mexique, on prend le bus.",
        note: "Camión, c'est le bus au Mexique et le poids lourd ailleurs. Guagua à Cuba.",
      },
      {
        etranger: "No tengo plata para eso.",
        francais: "Je n'ai pas d'argent pour ça.",
        note: "Plata dans presque toute l'Amérique ; dinero partout ; pasta, familier, en Espagne.",
      },
      {
        etranger: "Pásame el celular, por favor.",
        francais: "Passe-moi le portable, s'il te plaît.",
        note: "Celular en Amérique, móvil en Espagne. Deux mots sans recouvrement.",
      },
      {
        etranger: "¿Manejas o conduces tú?",
        francais: "C'est toi qui conduis ?",
        note: "Manejar en Amérique, conducir en Espagne — où manejar veut dire manipuler.",
      },
      {
        etranger: "El carro está en el taller.",
        francais: "La voiture est au garage.",
        note: "Carro en Amérique, coche en Espagne, auto au Chili et en Argentine.",
      },
      {
        etranger: "Me gusta el jugo de naranja.",
        francais: "J'aime le jus d'orange.",
        note: "Jugo en Amérique, zumo en Espagne. Zumo n'est presque pas compris à Mexico.",
      },
      {
        etranger: "Vamos a la pileta esta tarde.",
        francais: "On va à la piscine cet après-midi.",
        note: "Pileta en Argentine, alberca au Mexique, piscina en Espagne.",
      },
      {
        etranger: "Ponte el saco, hace frío.",
        francais: "Mets ta veste, il fait froid.",
        note: "Saco, la veste en Amérique ; chaqueta en Espagne, où saco veut dire sac.",
      },
      {
        etranger: "¿Qué onda, cómo andas?",
        francais: "Quoi de neuf, comment ça va ?",
        note: "¿Qué onda? est mexicain, ¿qué tal? espagnol, ¿qué más? colombien.",
      },
    ],
  },

  {
    slug: "es-conectores-orales",
    category: "Expressions",
    title: "Les connecteurs de l'oral",
    statement:
      "O sea, es que, a ver, en plan, total que. Des mots vides de sens qui organisent toute la conversation espagnole — et dont l'absence fait parler comme un livre.",
    tip: "Aucun de ces mots ne se traduit vraiment. Ils s'apprennent en bloc, dans une phrase entière, comme des formules.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "O sea, no estoy de acuerdo.",
        francais: "C'est-à-dire que je ne suis pas d'accord.",
        note: "O sea reformule. C'est le « c'est-à-dire » de l'oral, employé toutes les trois phrases.",
      },
      {
        etranger: "Bueno, pues eso es todo.",
        francais: "Bon, eh bien c'est tout.",
        note: "Bueno ouvre, pues remplit. Ni l'un ni l'autre ne portent de sens propre.",
      },
      {
        etranger: "Salimos en plan tranquilo.",
        francais: "On est sortis genre tranquillement.",
        note: "En plan, très espagnol et très jeune : l'équivalent exact du « genre » français.",
      },
      {
        etranger: "Es que no me dio tiempo.",
        francais: "C'est que je n'ai pas eu le temps.",
        note: "Es que introduit une justification. Sans lui, la phrase paraît sèche.",
      },
      {
        etranger: "A ver, déjame pensar.",
        francais: "Voyons, laisse-moi réfléchir.",
        note: "A ver ne veut pas dire « à voir » : c'est un « voyons » qui gagne du temps.",
      },
      {
        etranger: "Vamos, que no vale la pena.",
        francais: "Bref, ça n'en vaut pas la peine.",
        note: "Vamos que résume et conclut. Rien à voir avec le verbe aller.",
      },
      {
        etranger: "De todas formas, ya veremos.",
        francais: "De toute façon, on verra bien.",
        aussi: ["Quoi qu'il en soit, on verra bien."],
        note: "De todas formas, de todas maneras, de todos modos : trois variantes équivalentes.",
      },
      {
        etranger: "Total, que al final no fuimos.",
        francais: "Bref, finalement on n'y est pas allés.",
        note: "Total que introduit la chute d'une histoire. Très fréquent dans un récit oral.",
      },
      {
        etranger: "Encima llegó tarde.",
        francais: "En plus, il est arrivé en retard.",
        note: "Encima ajoute un grief : il porte toujours un reproche.",
      },
      {
        etranger: "Ya, pero no es tan fácil.",
        francais: "Oui, mais ce n'est pas si simple.",
        note: "Ya seul veut dire « oui, j'ai compris ». Suivi de pero, il annonce une objection.",
      },
    ],
  },
];
