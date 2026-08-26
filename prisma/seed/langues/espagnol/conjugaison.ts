/**
 * Espagnol — la conjugaison, en cours suivis.
 *
 * L'espagnol conjugue davantage que l'anglais, et de façon plus proche du
 * français : la difficulté n'est donc pas la même. Elle est dans les
 * irrégularités, dans le subjonctif, et dans le passé simple qui s'emploie
 * encore à l'oral.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_CONJUGAISON: LotCartes[] = [
  {
    slug: "es-conj-present",
    category: "Conjugaison",
    title: "Le présent : les trois groupes et leurs révoltes",
    statement:
      "Trois terminaisons régulières — ar, er, ir — et une poignée d'irrégularités qui suivent des schémas. Une fois les schémas vus, l'essentiel est acquis.",
    tip: "L'irrégularité épargne presque toujours nosotros et vosotros : pensar donne pienso, mais pensamos reste sage.",
    difficulty: 2,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "Le présent de l'indicatif",
      sections: [
        {
          titre: "Les trois groupes",
          texte:
            "Tout verbe espagnol se termine à l'infinitif par -ar, -er ou -ir. Cette terminaison décide de toute la conjugaison. Le premier groupe, en -ar, est de loin le plus fourni : hablar, trabajar, estudiar, comprar. Les deux autres sont moins nombreux mais très fréquents : comer, beber, vivir, escribir.\n\nContrairement au français, le pronom sujet se dit rarement. La terminaison suffit à dire qui parle : hablo ne peut être que « je parle ». On n'ajoute yo que pour insister ou pour opposer — yo trabajo, tú no.",
          visuels: [
            {
              type: "tableau",
              titre: "Les trois conjugaisons régulières",
              colonnes: ["", "hablar (parler)", "comer (manger)", "vivir (vivre)"],
              lignes: [
                ["yo", "hablo", "como", "vivo"],
                ["tú", "hablas", "comes", "vives"],
                ["él / ella / usted", "habla", "come", "vive"],
                ["nosotros", "hablamos", "comemos", "vivimos"],
                ["vosotros", "habláis", "coméis", "vivís"],
                ["ellos / ustedes", "hablan", "comen", "viven"],
              ],
              note: "Les groupes -er et -ir ne diffèrent qu'à nosotros et vosotros.",
            },
          ],
        },
        {
          titre: "Les irrégularités, et leurs schémas",
          texte:
            "Les verbes irréguliers ne le sont pas au hasard : trois schémas couvrent la grande majorité.\n\nLa diphtongue e → ie : pensar donne pienso, piensas, piensa, mais pensamos et pensáis restent réguliers. Même chose pour querer, empezar, entender, cerrar.\n\nLa diphtongue o → ue : poder donne puedo, dormir donne duermo, volver donne vuelvo. Un seul verbe diphtongue u → ue, et c'est jugar : juego.\n\nLe -go de la première personne : tener donne tengo, hacer donne hago, poner donne pongo, salir donne salgo, venir donne vengo. Certains cumulent : decir donne digo, avec le -go ET le passage e → i.",
          visuels: [
            {
              type: "comparaison",
              titre: "Trois schémas à reconnaître",
              colonnes: [
                {
                  titre: "e → ie",
                  points: ["pensar → pienso", "querer → quiero", "empezar → empiezo", "entender → entiendo", "Mais : pensamos, queremos."],
                },
                {
                  titre: "o → ue",
                  points: ["poder → puedo", "dormir → duermo", "volver → vuelvo", "encontrar → encuentro", "Mais : podemos, dormimos."],
                },
                {
                  titre: "-go à la 1re personne",
                  points: ["tener → tengo", "hacer → hago", "poner → pongo", "salir → salgo", "venir → vengo"],
                },
              ],
            },
          ],
        },
        {
          titre: "Ser, estar, ir, haber : les quatre à part",
          texte:
            "Quatre verbes ne suivent aucun schéma et sont partout. Il faut les savoir par cœur, il n'y a pas d'autre chemin.\n\nSer : soy, eres, es, somos, sois, son. Estar : estoy, estás, está, estamos, estáis, están — remarquer les accents, qui déplacent l'accent tonique. Ir : voy, vas, va, vamos, vais, van, dont le vamos sert aussi d'exhortation, « allons-y ». Haber : he, has, ha, hemos, habéis, han, qui ne s'emploie presque jamais seul mais construit tous les passés composés.",
        },
      ],
    },
    cartes: [
      { etranger: "Hablo español.", francais: "Je parle espagnol.", note: "Le sujet yo ne se dit pas : la terminaison suffit." },
      { etranger: "¿Dónde vives?", francais: "Tu habites où ?", note: "vivir, deuxième personne : vives." },
      { etranger: "Pienso que sí.", francais: "Je pense que oui.", note: "pensar → pienso : diphtongue e → ie." },
      { etranger: "No puedo ahora.", francais: "Je ne peux pas maintenant.", note: "poder → puedo : diphtongue o → ue." },
      { etranger: "Tengo mucha hambre.", francais: "J'ai très faim.", note: "tener → tengo, le -go de la première personne. Et mucha hambre, pas « muy hambre » : hambre est un nom." },
      { etranger: "Hago la comida.", francais: "Je fais à manger.", note: "hacer → hago." },
      { etranger: "Vamos al cine.", francais: "On va au cinéma.", note: "ir → vamos, qui sert aussi à dire « allons-y »." },
      { etranger: "Somos cuatro.", francais: "Nous sommes quatre.", note: "ser → somos. À apprendre par cœur." },
      { etranger: "Están en casa.", francais: "Ils sont à la maison.", note: "estar pour situer une personne ou une chose ; un événement, lui, prend ser." },
      { etranger: "Empiezo a las nueve.", francais: "Je commence à neuf heures.", note: "empezar → empiezo, et empezar a devant un infinitif." },
    ],
  },

  {
    slug: "es-conj-passes",
    category: "Conjugaison",
    title: "Les passés : composé, simple, imparfait",
    statement:
      "L'espagnol emploie encore le passé simple à l'oral, là où le français l'a abandonné. Choisir le mauvais passé est audible immédiatement.",
    tip: "Hoy, esta semana, este año appellent le passé composé. Ayer, el año pasado appellent le passé simple — en Espagne ; l'Amérique latine emploie l'indefinido dans les deux cas.",
    difficulty: 3,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Trois passés, trois usages",
      sections: [
        {
          titre: "Le pretérito perfecto : ce qui touche encore au présent",
          texte:
            "Formé de haber au présent plus le participe passé : he comido, has visto, hemos llegado. C'est l'équivalent formel de notre passé composé, mais son usage est plus étroit.\n\nOn l'emploie quand la période n'est pas close — hoy, esta mañana, esta semana, este año — ou quand aucun repère temporel n'est donné : ¿Has visto la película ? Il domine en Espagne ; en Amérique latine, le passé simple le remplace souvent.\n\nLes participes irréguliers sont peu nombreux mais très fréquents : visto (ver), hecho (hacer), dicho (decir), puesto (poner), escrito (escribir), vuelto (volver), abierto (abrir), muerto (morir).",
          visuels: [
            {
              type: "tableau",
              titre: "Quel passé, selon le repère",
              colonnes: ["Repère", "Temps", "Exemple"],
              lignes: [
                ["hoy, esta semana", "perfecto", "Hoy he comido tarde."],
                ["ayer, anoche", "indefinido", "Ayer comí tarde."],
                ["el año pasado", "indefinido", "El año pasado fui a México."],
                ["nunca, todavía no", "perfecto", "Nunca he estado allí."],
                ["antes, todos los días", "imperfecto", "Antes vivía en Madrid."],
                ["description, décor", "imperfecto", "Hacía frío y llovía."],
              ],
            },
          ],
        },
        {
          titre: "Le pretérito indefinido : le passé fermé",
          texte:
            "C'est notre passé simple, mais vivant : un Espagnol l'emploie en conversation courante. Dès que la période est close — ayer, la semana pasada, en 2019 — c'est lui qu'il faut, même là où le français dirait « j'ai mangé ».\n\nLes formes régulières : hablé, hablaste, habló, hablamos, hablasteis, hablaron pour le premier groupe ; comí, comiste, comió, comimos, comisteis, comieron pour les deux autres. L'accent écrit sur la dernière syllabe distingue hablo (je parle) de habló (il parla) : ce n'est pas un détail.\n\nLes irréguliers les plus fréquents ne portent pas d'accent : tuve, estuve, hice, dije, vine, pude, puse, quise. Et ser et ir ont la même forme : fui, fuiste, fue.",
        },
        {
          titre: "L'imparfait : le décor et l'habitude",
          texte:
            "Il fonctionne comme le français, ce qui en fait le plus facile des trois. Il décrit un décor — hacía frío, la casa era grande — ou une habitude — antes vivía en Madrid, todos los días iba al mercado.\n\nSa formation est presque sans exception : -aba pour le premier groupe (hablaba), -ía pour les deux autres (comía, vivía). Trois verbes seulement sont irréguliers : ir donne iba, ser donne era, ver donne veía.\n\nDans un récit, l'imparfait pose le décor et l'indefinido fait avancer l'action : Hacía frío cuando salí — il faisait froid, et je suis sorti.",
        },
      ],
    },
    cartes: [
      { etranger: "Hoy he trabajado mucho.", francais: "Aujourd'hui j'ai beaucoup travaillé.", note: "Hoy : la journée n'est pas finie, donc perfecto." },
      { etranger: "Ayer trabajé mucho.", francais: "Hier j'ai beaucoup travaillé.", note: "Ayer ferme la période : indefinido, même si le français dit « j'ai travaillé »." },
      { etranger: "Antes vivía en Madrid.", francais: "Avant, j'habitais à Madrid.", note: "Une habitude passée : imparfait, comme en français." },
      { etranger: "Hacía frío cuando salí.", francais: "Il faisait froid quand je suis sorti.", note: "L'imparfait pose le décor, l'indefinido fait avancer l'action." },
      { etranger: "Nunca he estado en Perú.", francais: "Je ne suis jamais allé au Pérou.", note: "Nunca appelle le perfecto." },
      { etranger: "Fui yo quien lo dijo.", francais: "C'est moi qui l'ai dit.", note: "fui : ser et ir ont la même forme à l'indefinido." },
      { etranger: "¿Has visto mi teléfono?", francais: "Tu as vu mon téléphone ?", note: "Participe irrégulier : visto." },
      { etranger: "Le dije la verdad.", francais: "Je lui ai dit la vérité.", note: "dije, irrégulier et sans accent écrit." },
      { etranger: "Éramos muy jóvenes.", francais: "Nous étions très jeunes.", note: "ser à l'imparfait : era, eras, era, éramos." },
      { etranger: "Todavía no lo he terminado.", francais: "Je ne l'ai pas encore fini.", note: "Todavía no appelle le perfecto, en Espagne." },
    ],
  },

  {
    slug: "es-conj-subjonctif",
    category: "Conjugaison",
    title: "Le subjonctif, sans le redouter",
    statement:
      "L'espagnol emploie le subjonctif bien plus que le français, mais dans des cas repérables. Une poignée de déclencheurs couvre l'essentiel.",
    tip: "Volonté, émotion, doute, but, futur incertain : dès qu'on sort du fait établi, le subjonctif s'impose.",
    difficulty: 3,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Quand l'espagnol passe au subjonctif",
      sections: [
        {
          titre: "La forme, à partir du présent",
          texte:
            "Le subjonctif présent se fabrique à partir de la PREMIÈRE personne du présent de l'indicatif : on retire le -o final et on échange les terminaisons. Les verbes en -ar prennent celles en -e, les autres celles en -a.\n\nHablar : hablo → hable, hables, hable, hablemos, habléis, hablen. Comer : como → coma, comas, coma, comamos, comáis, coman.\n\nL'avantage de cette règle est qu'elle emporte les irrégularités avec elle : tener donne tengo, donc tenga ; hacer donne hago, donc haga ; decir donne digo, donc diga. Il n'y a rien de plus à mémoriser.\n\nSix verbes ne se construisent pas sur la première personne du présent : dar (dé), estar (esté), haber (haya), ir (vaya), saber (sepa), ser (sea). Ils s'apprennent par cœur.",
          visuels: [
            {
              type: "etapes",
              titre: "Fabriquer un subjonctif en trois gestes",
              etapes: [
                { titre: "Prendre la première personne du présent", texte: "tener → tengo" },
                { titre: "Retirer le -o", texte: "teng-" },
                { titre: "Ajouter les terminaisons inverses", texte: "tenga, tengas, tenga, tengamos, tengáis, tengan" },
              ],
            },
          ],
        },
        {
          titre: "Les déclencheurs",
          texte:
            "Le subjonctif n'apparaît presque jamais seul : il suit une expression qui le réclame. Cinq familles couvrent l'essentiel.\n\nLa volonté et l'influence : quiero que vengas, dile que espere, es necesario que lo hagas. Le français fait pareil, ce cas ne surprend personne.\n\nL'émotion et le jugement : me alegro de que estés aquí, es una pena que no puedas venir.\n\nLe doute et la négation d'opinion : no creo que sea verdad. À l'affirmative, creo que es verdad reste à l'indicatif — la nuance est exactement là.\n\nLe but : para que entiendas, a fin de que sepas.\n\nEnfin, et c'est le cas que les francophones oublient : le futur incertain après cuando, en cuanto, hasta que, mientras. Cuando llegues, avísame — quand tu arriveras, préviens-moi. Le français met le futur, l'espagnol le subjonctif.",
          visuels: [
            {
              type: "comparaison",
              titre: "Indicatif ou subjonctif : la nuance",
              colonnes: [
                {
                  titre: "Indicatif — fait établi",
                  points: [
                    "Creo que es verdad. — je le crois.",
                    "Cuando llego, siempre llueve. — habitude constatée.",
                    "Es verdad que viene. — c'est un fait.",
                  ],
                },
                {
                  titre: "Subjonctif — non établi",
                  points: [
                    "No creo que sea verdad. — je ne le crois pas.",
                    "Cuando llegues, avísame. — ce n'est pas encore arrivé.",
                    "Es posible que venga. — ce n'est qu'une possibilité.",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    cartes: [
      { etranger: "Quiero que vengas.", francais: "Je veux que tu viennes.", note: "Volonté : subjonctif, comme en français." },
      { etranger: "No creo que sea verdad.", francais: "Je ne crois pas que ce soit vrai.", note: "À l'affirmative, creo que es verdad reste à l'indicatif." },
      { etranger: "Cuando llegues, avísame.", francais: "Quand tu arriveras, préviens-moi.", note: "Le futur incertain après cuando : subjonctif, là où le français met le futur." },
      { etranger: "Me alegro de que estés aquí.", francais: "Je suis content que tu sois là.", note: "Émotion : subjonctif." },
      { etranger: "Es posible que llueva.", francais: "Il est possible qu'il pleuve.", note: "La possibilité n'est pas un fait." },
      { etranger: "Te lo digo para que lo sepas.", francais: "Je te le dis pour que tu le saches.", note: "Le but : para que + subjonctif. saber → sepa, irrégulier." },
      { etranger: "Espero que todo vaya bien.", francais: "J'espère que tout ira bien.", note: "ir → vaya. Esperar que appelle le subjonctif." },
      { etranger: "Dile que espere.", francais: "Dis-lui d'attendre.", note: "Influence sur autrui : subjonctif." },
      { etranger: "No hay nadie que lo sepa.", francais: "Personne ne le sait.", note: "Un antécédent inexistant entraîne le subjonctif." },
      { etranger: "Ojalá tengas razón.", francais: "Pourvu que tu aies raison.", note: "Ojalá, de l'arabe, appelle toujours le subjonctif." },
    ],
  },
];
