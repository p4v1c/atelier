/**
 * Espagnol — choisir le mot exact.
 *
 * La seconde moitié de la troisième passe. Ce qui reste après le vocabulaire
 * et les collocations, c'est la PRÉCISION : lequel de quatre synonymes
 * convient, quelle préposition suit quel verbe, ce qui se compte, et ce qu'un
 * mot fait entendre en plus de ce qu'il dit.
 *
 * Ces séries ne s'apprennent pas en lisant : elles s'apprennent en comparant
 * deux phrases qui ne diffèrent que d'un mot.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_PRECISION: LotCartes[] = [
  {
    slug: "es-sinonimos-cambiar",
    category: "Verbes",
    title: "Cambiar, modificar, alterar, ajustar",
    statement:
      "Quatre verbes pour « changer », et le choix dit ce qu'on change, de combien, et si l'on en avait le droit.",
    tip: "Alterar suppose souvent qu'on a dénaturé quelque chose : alterar un documento, c'est le falsifier. Le faux ami avec « altérer » est traître.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Modificamos ligeramente el diseño.",
        francais: "Nous avons légèrement modifié le dessin.",
        note: "Modificar, changer partiellement sans dénaturer. Neutre et technique.",
      },
      {
        etranger: "Alteraron el documento original.",
        francais: "Ils ont falsifié le document original.",
        note: "Alterar suppose souvent la dénaturation. Le mot n'est presque jamais neutre.",
      },
      {
        etranger: "Ajusta la configuración si hace falta.",
        francais: "Ajuste les réglages si besoin.",
        note: "Ajustar, régler finement. Le complément est presque toujours technique.",
      },
      {
        etranger: "No ha cambiado nada desde entonces.",
        francais: "Rien n'a changé depuis.",
        note: "Cambiar à l'intransitif : le sujet subit le changement.",
      },
      {
        etranger: "Las cifras se revisaron al alza.",
        francais: "Les chiffres ont été révisés à la hausse.",
        note: "Revisar al alza ou a la baja. La préposition change avec le sens.",
      },
      {
        etranger: "Se intercambiaron los puestos.",
        francais: "Ils ont échangé leurs postes.",
        note: "Intercambiar, échanger l'un contre l'autre. Cambiar seul serait ambigu.",
      },
      {
        etranger: "El plan se desechó por completo.",
        francais: "Le projet a été purement et simplement abandonné.",
        note: "Desechar, mettre au rebut. Bien plus fort qu'anular.",
      },
      {
        etranger: "Hay que replantear el proceso.",
        francais: "Il faut repenser entièrement le processus.",
        note: "Replantear, reposer le problème depuis le début. Formé sur plantear.",
      },
      {
        etranger: "Retocaron la redacción.",
        francais: "Ils ont retouché la formulation.",
        note: "Retocar, retoucher légèrement. La redacción, la façon dont un texte est écrit.",
      },
      {
        etranger: "Las circunstancias han variado.",
        francais: "Les circonstances ont évolué.",
        note: "Variar, changer par degrés. Moins brutal que cambiar, plus lent.",
      },
    ],
  },

  {
    slug: "es-regimen-preposicional",
    category: "Pièges du français",
    title: "La préposition qu'exige le verbe",
    statement:
      "Depender de, consistir en, contar con, soñar con. Chaque verbe impose sa préposition, elle ne se déduit pas du sens, et le français en met souvent une autre.",
    tip: "Ces couples s'apprennent avec le verbe, comme le genre d'un nom. Traduire la préposition française donne faux presque à chaque fois.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Depende del tiempo que haga.",
        francais: "Cela dépend du temps qu'il fera.",
        note: "Depender de. Le subjonctif après que haga : le temps n'est pas encore connu.",
      },
      {
        etranger: "El curso consta de cinco módulos.",
        francais: "Le cours comporte cinq modules.",
        note: "Constar de, se composer de. Consistir en dit en quoi consiste une chose.",
      },
      {
        etranger: "Cuento contigo para el sábado.",
        francais: "Je compte sur toi pour samedi.",
        note: "Contar con alguien. Contar sobre n'existe pas.",
      },
      {
        etranger: "Sueña con volver algún día.",
        francais: "Il rêve de revenir un jour.",
        note: "Soñar con, rêver de. La préposition ne se traduit jamais littéralement.",
      },
      {
        etranger: "Está casada con un médico.",
        francais: "Elle est mariée à un médecin.",
        note: "Casarse con. L'espagnol emploie con là où le français met à.",
      },
      {
        etranger: "Se disculpó por el retraso.",
        francais: "Il s'est excusé du retard.",
        note: "Disculparse por algo, con alguien. Les deux prépositions coexistent.",
      },
      {
        etranger: "Eso se debe a la lluvia.",
        francais: "Cela est dû à la pluie.",
        note: "Deberse a, être dû à. La forme pronominale est obligatoire dans ce sens.",
      },
      {
        etranger: "Insistieron en pagar ellos.",
        francais: "Ils ont insisté pour payer eux-mêmes.",
        note: "Insistir en + infinitif. Insistir para est fautif.",
      },
      {
        etranger: "No me acostumbro a este horario.",
        francais: "Je ne m'habitue pas à cet horaire.",
        note: "Acostumbrarse a. Le verbe est pronominal, contrairement à son cousin acostumbrar.",
      },
      {
        etranger: "La decisión corresponde al consejo.",
        francais: "La décision revient au conseil.",
        note: "Corresponder a alguien, incomber à. Formule de règlement intérieur.",
      },
    ],
  },

  {
    slug: "es-contables",
    category: "Pièges du français",
    title: "Ce qui se compte et ce qui ne se compte pas",
    statement:
      "La gente, el consejo, la información. L'espagnol met au singulier ce que le français met au pluriel, et inversement pour d'autres.",
    tip: "La gente est singulier : la gente dice, jamais « la gente dicen ». La faute est la plus repérable d'un francophone.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "La gente dice muchas cosas.",
        francais: "Les gens disent beaucoup de choses.",
        note: "La gente est un collectif singulier. Le verbe ne se met jamais au pluriel.",
      },
      {
        etranger: "Es un buen consejo.",
        francais: "C'est un bon conseil.",
        note: "Un consejo se compte, contrairement à l'anglais advice. Le français aussi.",
      },
      {
        etranger: "Necesito más información.",
        francais: "J'ai besoin de plus d'informations.",
        note: "La información reste au singulier là où le français pluralise volontiers.",
      },
      {
        etranger: "Las pruebas son escasas.",
        francais: "Les preuves sont minces.",
        note: "Una prueba se compte. L'anglais evidence, non : les trois langues diffèrent.",
      },
      {
        etranger: "Los muebles ya estaban allí.",
        francais: "Les meubles étaient déjà là.",
        note: "Un mueble se compte. El mobiliario est le collectif.",
      },
      {
        etranger: "Hemos hecho grandes progresos.",
        francais: "Nous avons fait de grands progrès.",
        note: "Los progresos se comptent, à la différence de l'anglais progress.",
      },
      {
        etranger: "Las noticias eran peores de lo previsto.",
        francais: "Les nouvelles étaient pires que prévu.",
        note: "Las noticias au pluriel prend un verbe pluriel, contrairement à l'anglais news.",
      },
      {
        etranger: "Había tres personas de guardia.",
        francais: "Il y avait trois personnes de service.",
        note: "El personal est le collectif ; tres personas se compte.",
      },
      {
        etranger: "Dos cafés, por favor.",
        francais: "Deux cafés, s'il vous plaît.",
        note: "Un indénombrable se compte quand il désigne une portion : deux tasses.",
      },
      {
        etranger: "Se hizo mucho daño.",
        francais: "Il s'est beaucoup blessé.",
        aussi: ["Il s'est fait très mal."],
        note: "El daño est indénombrable : mucho daño, jamais « muchos daños » dans ce sens.",
      },
    ],
  },

  {
    slug: "es-articulos-trampa",
    category: "Pièges du français",
    title: "L'article que l'espagnol met, et celui qu'il retire",
    statement:
      "Me duele la cabeza. Soy profesor. L'espagnol met l'article là où le français met un possessif, et le retire là où le français en met un.",
    tip: "Devant une partie du corps, l'espagnol met l'article défini : me lavo las manos, je me lave les mains — et jamais « mis manos ».",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Me lavo las manos antes de comer.",
        francais: "Je me lave les mains avant de manger.",
        note: "Article défini devant une partie du corps, jamais le possessif.",
      },
      {
        etranger: "Soy profesor de historia.",
        francais: "Je suis professeur d'histoire.",
        note: "Pas d'article devant une profession après ser, comme en français.",
      },
      {
        etranger: "Es un profesor excelente.",
        francais: "C'est un excellent professeur.",
        note: "L'article revient dès que la profession est qualifiée.",
      },
      {
        etranger: "Se quitó el abrigo.",
        francais: "Il a enlevé son manteau.",
        note: "Article défini pour un vêtement qu'on porte : le pronom réfléchi dit à qui il est.",
      },
      {
        etranger: "Los gatos son independientes.",
        francais: "Les chats sont indépendants.",
        note: "L'espagnol garde l'article pour une généralité, à la différence de l'anglais.",
      },
      {
        etranger: "Vamos a casa.",
        francais: "Rentrons à la maison.",
        note: "A casa sans article quand c'est chez soi. A la casa désignerait un bâtiment précis.",
      },
      {
        etranger: "Estudia medicina en Madrid.",
        francais: "Elle étudie la médecine à Madrid.",
        note: "Pas d'article devant une discipline après estudiar.",
      },
      {
        etranger: "El agua está fría.",
        francais: "L'eau est froide.",
        note: "Agua est féminin mais prend el au singulier, pour l'oreille. L'adjectif reste féminin.",
      },
      {
        etranger: "Tiene el pelo largo.",
        francais: "Elle a les cheveux longs.",
        note: "El pelo au singulier en espagnol, là où le français pluralise.",
      },
      {
        etranger: "Habla español muy bien.",
        francais: "Il parle très bien espagnol.",
        note: "Pas d'article après hablar. Avec un adverbe intercalé, il réapparaît parfois.",
      },
    ],
  },

  {
    slug: "es-adverbios-matiz",
    category: "Grammaire en contexte",
    title: "Ya, todavía, aún, recién",
    statement:
      "Quatre adverbes qui disent le temps par rapport à une attente, et que le français rend tous par « déjà » ou « encore ».",
    tip: "Ya dit que la chose est arrivée plus tôt que prévu ; todavía, qu'elle dure plus longtemps que prévu. Les deux se définissent par l'attente, pas par l'horloge.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Ya ha llegado.",
        francais: "Il est déjà arrivé.",
        note: "Ya dit que c'est fait, souvent plus tôt qu'attendu.",
      },
      {
        etranger: "Aún no lo hemos decidido.",
        francais: "Nous ne l'avons pas encore décidé.",
        note: "Aún no est la négation de ya. Todavía no se dit également.",
      },
      {
        etranger: "Todavía queda mucho por hacer.",
        francais: "Il reste encore beaucoup à faire.",
        note: "Todavía pour une durée qui se prolonge. Ya no dirait que c'est terminé.",
      },
      {
        etranger: "Ya no vive aquí.",
        francais: "Il n'habite plus ici.",
        note: "Ya no traduit « ne plus ». La forme est figée et très fréquente.",
      },
      {
        etranger: "Aún más importante es el coste.",
        francais: "Plus important encore, il y a le coût.",
        note: "Aún avec accent renforce un comparatif. Aun sans accent veut dire même.",
      },
      {
        etranger: "Aun sabiéndolo, no dijo nada.",
        francais: "Tout en le sachant, il n'a rien dit.",
        note: "Aun sans accent équivaut à incluso. L'accent sépare deux mots distincts.",
      },
      {
        etranger: "Recién llegado, ya quería irse.",
        francais: "À peine arrivé, il voulait déjà repartir.",
        note: "Recién + participe en Espagne. En Amérique latine, recién s'emploie seul comme adverbe.",
      },
      {
        etranger: "Ya veremos.",
        francais: "On verra bien.",
        note: "Formule figée qui repousse la décision sans la refuser.",
      },
      {
        etranger: "¿Ya está?",
        francais: "C'est fait ?",
        aussi: ["Ça y est ?"],
        note: "Ya está clôt une tâche. Employé seul, il veut dire « voilà, c'est fini ».",
      },
      {
        etranger: "Apenas se nota.",
        francais: "Ça se remarque à peine.",
        note: "Apenas, à peine. Placé en tête d'une subordonnée, il veut dire « dès que ».",
      },
    ],
  },

  {
    slug: "es-c2-connotacion",
    category: "Expressions",
    title: "Ce qu'un mot fait entendre",
    statement:
      "Delgado, flaco, esquelético. Trois mots pour la même silhouette, du compliment à l'insulte. Le sens est identique ; la connotation ne l'est pas.",
    tip: "Un dictionnaire bilingue donne le sens, jamais la charge. C'est elle qui décide si une phrase est aimable ou blessante.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Está muy delgada.",
        francais: "Elle est très mince.",
        note: "Delgado est neutre ou flatteur, flaco familier, esquelético franchement méchant.",
      },
      {
        etranger: "Es bastante testarudo.",
        francais: "Il est plutôt têtu.",
        note: "Testarudo condamne ; tenaz loue la même qualité, firme la relève.",
      },
      {
        etranger: "Es una solución barata.",
        francais: "C'est une solution au rabais.",
        aussi: ["C'est une solution bon marché."],
        note: "Barato dit souvent la piètre qualité. Económico ne dit que le prix.",
      },
      {
        etranger: "El informe es exhaustivo.",
        francais: "Le rapport est complet.",
        note: "Exhaustivo loue ; largo, en parlant d'un rapport, condamne.",
      },
      {
        etranger: "Es un negociador astuto.",
        francais: "C'est un négociateur habile.",
        note: "Astuto loue l'astuce ; ladino dit la ruse et devient un reproche.",
      },
      {
        etranger: "Es una mejora modesta.",
        francais: "C'est une amélioration modeste.",
        note: "Modesto atténue avec égard ; marginal atténue avec dédain.",
      },
      {
        etranger: "Es un equipo ambicioso.",
        francais: "C'est une équipe ambitieuse.",
        note: "Ambicioso loue plus systématiquement en espagnol qu'en français.",
      },
      {
        etranger: "La respuesta fue comedida.",
        francais: "La réponse a été mesurée.",
        note: "Comedido loue la retenue ; tímido dirait la même retenue en la condamnant.",
      },
      {
        etranger: "Es una elección curiosa.",
        francais: "C'est un choix curieux.",
        note: "Selon le ton, intérêt sincère ou réserve polie. L'ambiguïté est volontaire.",
      },
      {
        etranger: "Es una afirmación atrevida.",
        francais: "C'est une affirmation audacieuse.",
        note: "Atrevido loue le courage et signale en même temps qu'on n'est pas convaincu.",
      },
    ],
  },

  {
    slug: "es-c2-modal",
    category: "Grammaire en contexte",
    title: "Le degré exact d'une obligation",
    statement:
      "Deber, deber de, tener que, haber de. L'espagnol distingue l'obligation de la supposition par une préposition d'une lettre, et l'usage courant les confond.",
    tip: "Deber + infinitif dit le devoir ; deber de + infinitif dit la supposition. Debe estar en casa, il doit être chez lui — et l'on ne le lui ordonne pas.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Debe de rondar los cincuenta.",
        francais: "Il doit avoir dans les cinquante ans.",
        note: "Deber de + infinitif : une supposition. La norme le distingue de l'obligation.",
      },
      {
        etranger: "Debes avisarles hoy.",
        francais: "Tu dois les prévenir aujourd'hui.",
        note: "Deber sans de : l'obligation morale. C'est la distinction que l'usage efface.",
      },
      {
        etranger: "Tuvo que salir corriendo.",
        francais: "Il a dû partir en courant.",
        note: "Tener que dit une contrainte concrète, imposée par la situation.",
      },
      {
        etranger: "No puede haberlo sabido.",
        francais: "Il ne peut pas l'avoir su.",
        note: "Poder + haber + participe : une déduction sur le passé.",
      },
      {
        etranger: "Podrías haberme avisado.",
        francais: "Tu aurais pu me prévenir.",
        note: "Conditionnel de poder + haber : le reproche doux, la possibilité manquée.",
      },
      {
        etranger: "Deberían habérnoslo dicho.",
        francais: "Ils auraient dû nous le dire.",
        note: "Le reproche ferme : l'action attendue n'a pas eu lieu. Les pronoms se soudent à l'infinitif.",
      },
      {
        etranger: "No hacía falta que vinieras.",
        francais: "Tu n'avais pas besoin de venir.",
        note: "Hacer falta que + subjonctif. La personne est venue quand même.",
      },
      {
        etranger: "Ha de llegar esta tarde.",
        francais: "Il doit arriver cet après-midi.",
        note: "Haber de, littéraire et régional. Le sens oscille entre obligation et prévision.",
      },
      {
        etranger: "Eso lo explicaría todo.",
        francais: "Cela expliquerait tout.",
        note: "Conditionnel pour une hypothèse qui s'ajuste aux faits. Le futur serait une prédiction.",
      },
      {
        etranger: "Puede resultar difícil al principio.",
        francais: "Ça peut se révéler difficile au début.",
        note: "Poder pour une possibilité générale. Resultar, se révéler être.",
      },
    ],
  },

  {
    slug: "es-c1-aspecto",
    category: "Conjugaison",
    title: "Ser, estar et les états qui changent",
    statement:
      "Es guapo, está guapo. Ser dit ce qu'on est, estar ce qu'on paraît à cet instant — et l'adjectif change de sens entre les deux.",
    tip: "Au-delà de ser et estar, l'espagnol dispose d'une famille de verbes de devenir — ponerse, volverse, hacerse, quedarse, llegar a ser — que le français rend tous par « devenir ».",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Está muy guapo hoy.",
        francais: "Il est très beau aujourd'hui.",
        note: "Estar guapo dit l'allure du jour ; ser guapo, la beauté comme trait durable.",
      },
      {
        etranger: "Se puso rojo de vergüenza.",
        francais: "Il est devenu rouge de honte.",
        note: "Ponerse + adjectif, changement rapide et involontaire.",
      },
      {
        etranger: "Se volvió desconfiado con los años.",
        francais: "Il est devenu méfiant avec les années.",
        note: "Volverse, changement durable du caractère, souvent en mal.",
      },
      {
        etranger: "Se hizo médico a los treinta.",
        francais: "Il est devenu médecin à trente ans.",
        note: "Hacerse, changement voulu et construit : profession, religion, conviction.",
      },
      {
        etranger: "Se quedó sordo tras el accidente.",
        francais: "Il est devenu sourd après l'accident.",
        note: "Quedarse, changement subi qui laisse dans un état. Souvent une perte.",
      },
      {
        etranger: "Llegó a ser un referente.",
        francais: "Il est devenu une référence.",
        note: "Llegar a ser dit l'aboutissement d'un parcours, pas un basculement.",
      },
      {
        etranger: "La reunión es en la sala grande.",
        francais: "La réunion a lieu dans la grande salle.",
        note: "Ser pour un événement qui se tient quelque part. Estar dirait où se trouve un objet.",
      },
      {
        etranger: "La sala está al fondo.",
        francais: "La salle est au fond.",
        note: "Estar pour la localisation d'une chose. Le contraste avec la carte précédente est net.",
      },
      {
        etranger: "Es aburrido, no habla nunca.",
        francais: "Il est ennuyeux, il ne parle jamais.",
        note: "Ser aburrido, être ennuyeux ; estar aburrido, s'ennuyer. L'adjectif change de sens.",
      },
      {
        etranger: "Está listo para salir.",
        francais: "Il est prêt à partir.",
        note: "Estar listo, être prêt ; ser listo, être malin. Même mot, deux sens.",
      },
    ],
  },
];
