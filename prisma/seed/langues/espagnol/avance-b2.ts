/**
 * Espagnol — cinq séries de niveau B2.
 *
 * Le module s'arrêtait presque au B1 : quatre séries B2 pour dix B1. Ces
 * cinq-là couvrent le haut de la langue — le subjonctif imparfait et son
 * conditionnel passé, la concordance des temps, le se qui n'a pas de sujet,
 * l'espagnol du travail vu d'Amérique latine, et les faux amis techniques.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_AVANCE_B2: LotCartes[] = [
  {
    slug: "es-subjuntivo-imperfecto",
    category: "Conjugaison",
    title: "Subjonctif imparfait et conditionnel passé",
    statement:
      "Si tuviera, si hubiera. Le couple qui porte l'hypothèse, le regret et la politesse — et que le français rend par un imparfait de l'indicatif, ce qui égare tout le monde.",
    tip: "Après si, jamais de conditionnel en espagnol. Si tuviera tiempo, iría : le subjonctif d'un côté, le conditionnel de l'autre.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Le subjonctif imparfait et ses emplois",
      sections: [
        {
          titre: "Deux formes pour un seul temps",
          texte:
            "Le subjonctif imparfait espagnol a la particularité d'exister en double : hablara ou hablase, tuviera ou tuviese, fuera ou fuese. Les deux séries sont interchangeables dans tous leurs emplois, sans la moindre nuance de sens.\n\nL'usage les répartit tout de même. La forme en -ra domine largement à l'oral et en Amérique latine ; la forme en -se garde un parfum littéraire et se rencontre surtout à l'écrit péninsulaire. Un apprenant peut donc n'apprendre que -ra à produire, et se contenter de reconnaître -se.\n\nLa formation, elle, est entièrement régulière — et c'est une bonne nouvelle, car elle vaut aussi pour les verbes irréguliers. On part de la troisième personne du pluriel du passé simple, on retire -ron, on ajoute la terminaison. Hablaron donne habla- puis hablara. Tuvieron donne tuvie- puis tuviera. Dijeron donne dije- puis dijera.\n\nAucune exception. Tous les caprices du passé simple — tuve, dije, fui, pude, quise — se transmettent tels quels au subjonctif imparfait.",
          visuels: [
            {
              type: "etapes",
              titre: "Former le subjonctif imparfait, en trois gestes",
              etapes: [
                {
                  titre: "Prendre la troisième personne du pluriel du passé simple",
                  texte: "hablar → hablaron · tener → tuvieron · decir → dijeron · ir → fueron",
                },
                {
                  titre: "Retirer -ron",
                  texte: "habla- · tuvie- · dije- · fue-",
                },
                {
                  titre: "Ajouter -ra, -ras, -ra, -ramos, -rais, -ran",
                  texte:
                    "hablara, hablaras, hablara, habláramos, hablarais, hablaran. La première personne du pluriel prend un accent écrit.",
                },
              ],
            },
          ],
        },
        {
          titre: "L'hypothèse et le regret",
          texte:
            "L'emploi le plus visible est la phrase hypothétique, et c'est là que le francophone se trompe le plus.\n\nPour une hypothèse au présent, contraire aux faits : si + subjonctif imparfait, puis conditionnel présent. Si tuviera tiempo, iría contigo. Le français dit « si j'avais le temps, j'irais », avec un imparfait de l'indicatif — d'où le réflexe de mettre tenía. C'est une faute.\n\nPour un regret sur le passé : si + plus-que-parfait du subjonctif, puis conditionnel passé. Si hubiéramos salido antes, no habríamos perdido el tren. Le français dit « si nous étions partis… nous n'aurions pas raté », avec un plus-que-parfait de l'indicatif. Même piège.\n\nLa règle qui sauve tient en une ligne : après si, jamais de conditionnel ni de futur. Ni « si tendría », ni « si tendré ». Le français a exactement la même règle — « si j'aurais » y est tout aussi fautif —, ce qui rend celle-ci facile à retenir.\n\nOjalá suit la même logique : ojalá viniera pour un souhait sur le présent, ojalá hubiera venido pour un regret sur le passé.",
          visuels: [
            {
              type: "tableau",
              titre: "Les deux moitiés de l'hypothèse",
              colonnes: ["Ce qu'on dit", "Après si", "Dans l'autre moitié", "Exemple"],
              lignes: [
                [
                  "hypothèse au présent",
                  "subjonctif imparfait",
                  "conditionnel présent",
                  "Si tuviera tiempo, iría.",
                ],
                [
                  "regret sur le passé",
                  "plus-que-parfait du subjonctif",
                  "conditionnel passé",
                  "Si hubiera sabido, habría venido.",
                ],
                [
                  "condition réelle",
                  "présent de l'indicatif",
                  "futur ou présent",
                  "Si tengo tiempo, iré.",
                ],
                ["souhait", "ojalá + subjonctif", "—", "Ojalá viniera."],
                ["regret", "ojalá + plus-que-parfait", "—", "Ojalá hubiera venido."],
              ],
              note: "Après le si de condition, ni conditionnel ni futur. Le si qui veut dire « oui ou non » est un autre mot : no sé SI vendrá, me preguntó SI vendría — là, futur et conditionnel sont normaux.",
            },
          ],
        },
        {
          titre: "Les deux emplois qu'on oublie",
          texte:
            "Au-delà de l'hypothèse, le subjonctif imparfait sert deux fois par jour dans une conversation ordinaire, et le francophone l'ignore.\n\nLe premier emploi est la concordance. Si la principale est au passé et qu'elle appelle un subjonctif, la subordonnée passe à l'imparfait du subjonctif. Me pidió que le ayudara. No creí que fuera tan difícil. Le mécanisme est automatique, et c'est celui qui revient le plus souvent.\n\nLe second est la politesse. Quisiera hacerle una pregunta est plus courtois que quiero, et même que querría. De même, quisiera pedirle un favor. La forme ¿pudiera usted…? existe mais reste rare : on dit plutôt ¿podría usted ayudarme? Cette valeur-là n'a rien d'hypothétique : c'est un simple recul poli.\n\nS'y ajoute como si, qui n'accepte jamais l'indicatif : como si nada hubiera pasado, como si no lo supiera. La construction est fixe, et l'erreur s'entend immédiatement.\n\nEnfin, le conditionnel passé sert aussi à supposer sur le passé : ya lo habrían terminado ayer — ils avaient sans doute fini hier. Le français emploie exactement la même tournure, ce qui la rend facile à installer.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Si tuviera tiempo, iría contigo.",
        francais: "Si j'avais le temps, j'irais avec toi.",
        aussiEtranger: ["Si tuviese tiempo, iría contigo."],
        note: "Si + subjonctif imparfait, puis conditionnel. « Si tendría » est une faute. Tuviera ou tuviese : les deux sont corrects.",
      },
      {
        etranger: "Ojalá hubiera venido.",
        francais: "Si seulement il était venu.",
        aussiEtranger: ["Ojalá hubiese venido."],
        note: "Ojalá + plus-que-parfait du subjonctif pour un regret sur le passé. Hubiera ou hubiese : les deux sont corrects.",
      },
      {
        etranger: "Me pidió que le ayudara.",
        francais: "Il m'a demandé de l'aider.",
        aussiEtranger: ["Me pidió que le ayudase."],
        note: "Principale au passé, subordonnée au subjonctif imparfait. La concordance est mécanique. Ayudara ou ayudase : les deux sont corrects.",
      },
      {
        etranger: "Habría venido si me lo hubieras dicho.",
        francais: "Je serais venu si tu me l'avais dit.",
        aussiEtranger: ["Habría venido si me lo hubieses dicho."],
        note: "Le couple du regret : conditionnel passé d'un côté, plus-que-parfait du subjonctif de l'autre. Hubieras ou hubieses : les deux sont corrects.",
      },
      {
        etranger: "No creí que fuera tan difícil.",
        francais: "Je ne pensais pas que ce serait si difficile.",
        aussiEtranger: ["No creí que fuese tan difícil."],
        note: "Fuera ou fuese : les deux sont corrects. Fuera domine à l'oral, fuese à l'écrit.",
      },
      {
        etranger: "Como si nada hubiera pasado.",
        francais: "Comme si de rien n'était.",
        aussiEtranger: ["Como si nada hubiese pasado."],
        note: "Como si n'accepte jamais l'indicatif : toujours l'imparfait ou le plus-que-parfait du subjonctif. Hubiera ou hubiese : les deux sont corrects.",
      },
      {
        etranger: "Quisiera hacerle una pregunta.",
        francais: "Je voudrais vous poser une question.",
        note: "Quisiera, subjonctif imparfait de politesse. Plus courtois encore que querría.",
      },
      {
        etranger: "Aunque lloviera, saldríamos igual.",
        francais: "Même s'il pleuvait, nous sortirions quand même.",
        aussiEtranger: ["Aunque lloviese, saldríamos igual."],
        note: "Aunque + subjonctif pour une hypothèse ; + indicatif pour un fait admis. Lloviera ou lloviese : les deux sont corrects.",
      },
      {
        etranger: "Ya lo habrían terminado ayer.",
        francais: "Ils l'auraient déjà fini hier.",
        aussi: ["Ils l'avaient sans doute déjà fini hier."],
        note: "Le conditionnel passé sert aussi à supposer sur le passé, comme en français.",
      },
      {
        etranger: "No sé si vendrá mañana.",
        francais: "Je ne sais pas s'il viendra demain.",
        note: "Le si qui veut dire « oui ou non » n'est pas le si de condition : ici, le futur est normal.",
      },
      {
        etranger: "Si hubiéramos salido antes, no habríamos perdido el tren.",
        francais: "Si nous étions partis plus tôt, nous n'aurions pas raté le train.",
        aussiEtranger: ["Si hubiésemos salido antes, no habríamos perdido el tren."],
        note: "Le regret complet : plus-que-parfait du subjonctif après si, conditionnel passé ensuite. Hubiéramos ou hubiésemos : les deux sont corrects.",
      },
    ],
  },

  {
    slug: "es-concordancia",
    category: "Grammaire en contexte",
    title: "La concordance des temps",
    statement:
      "Quiero que vengas devient quería que vinieras. Dès que la principale recule dans le passé, la subordonnée recule avec elle — et l'espagnol ne pardonne pas l'oubli.",
    tip: "Principale au présent : subjonctif présent. Principale au passé : subjonctif imparfait. Le décalage est mécanique, pas une question de sens.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "La concordance des temps en espagnol",
      sections: [
        {
          titre: "Une horloge à deux aiguilles",
          texte:
            "La concordance des temps est le mécanisme par lequel le temps de la subordonnée dépend de celui de la principale. Le français l'a assoupli au fil du temps, jusqu'à le rendre presque facultatif ; l'espagnol l'a gardé strict, et l'oublier fait immédiatement étranger.\n\nLe principe tient en une image : deux aiguilles liées. Quand la principale avance ou recule dans le temps, la subordonnée suit du même pas.\n\nPrincipale au présent, au futur ou à l'impératif : la subordonnée prend le subjonctif présent. Quiero que vengas. Te diré que vengas. Dile que venga.\n\nPrincipale à un temps du passé — imparfait, passé simple, conditionnel : la subordonnée prend le subjonctif imparfait. Quería que vinieras. Le dije que viniera. Me gustaría que vinieras.\n\nIl n'y a rien à interpréter. C'est une règle de forme, et c'est ce qui la rend apprenable.",
          visuels: [
            {
              type: "tableau",
              titre: "Le tableau qu'il suffit de connaître",
              colonnes: ["Principale", "Subordonnée", "Exemple"],
              lignes: [
                ["présent", "subjonctif présent", "Quiero que vengas."],
                ["futur", "subjonctif présent", "Te pediré que vengas."],
                ["impératif", "subjonctif présent", "Dile que venga."],
                ["imparfait", "subjonctif imparfait", "Quería que vinieras."],
                ["passé simple", "subjonctif imparfait", "Le pedí que viniera."],
                ["conditionnel", "subjonctif imparfait", "Me gustaría que vinieras."],
                ["présent + action achevée", "subjonctif passé", "Espero que hayas dormido."],
                ["passé + action antérieure", "plus-que-parfait du subj.", "Esperaba que hubieras dormido."],
              ],
            },
          ],
        },
        {
          titre: "Le discours rapporté",
          texte:
            "Rapporter les paroles de quelqu'un applique la même horloge, à l'indicatif cette fois.\n\nUn présent devient imparfait : « estoy cansado » donne dijo que estaba cansado. Un futur devient conditionnel : « llegaré tarde » donne dijo que llegaría tarde. Un passé composé devient plus-que-parfait : « he terminado » donne dijo que había terminado. Un passé simple reste, ou devient plus-que-parfait selon l'insistance.\n\nLe français fait exactement la même chose, ce qui rend cette moitié facile. La difficulté n'est pas le mécanisme mais son entretien : dans une phrase longue, on oublie de reculer le deuxième verbe.\n\nDeux détails achèvent le tableau. Les marqueurs de temps reculent aussi : hoy devient aquel día, mañana devient al día siguiente, ayer devient el día anterior. Et les pronoms suivent le changement de locuteur : « yo no lo sabía » devient dijo que él no lo sabía.",
          visuels: [
            {
              type: "comparaison",
              titre: "Ce qui a été dit, ce qu'on rapporte",
              colonnes: [
                {
                  titre: "Discours direct",
                  points: [
                    "« Estoy cansado. »",
                    "« Llegaré tarde. »",
                    "« He terminado. »",
                    "« Ven mañana. »",
                  ],
                },
                {
                  titre: "Discours rapporté",
                  points: [
                    "Dijo que estaba cansado.",
                    "Dijo que llegaría tarde.",
                    "Dijo que había terminado.",
                    "Dijo que viniera al día siguiente.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Là où le français lâche prise",
          texte:
            "Deux points séparent nettement les deux langues, et ce sont ceux qui coûtent le plus cher. (Le choix entre infinitif et subjonctif selon que le sujet change ou non — « je veux que tu viennes » contre « je veux venir » — est traité à part dans « Infinitif ou subjonctif ».)\n\nLe premier : cuando au sens du futur demande le subjonctif présent, jamais le futur. Cuando llegues, avísame. Le français met un futur — « quand tu arriveras » — et le calque produit « cuando llegarás », qui n'existe pas. La même règle vaut pour en cuanto, mientras, hasta que, después de que.\n\nLe second : après une négation, l'espagnol bascule au subjonctif là où le français reste souvent à l'indicatif. No creo que sea verdad. No sabía que estuvieras aquí. La négation suffit à faire entrer le doute dans la phrase, et le doute appelle le subjonctif.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Quiero que vengas mañana.",
        francais: "Je veux que tu viennes demain.",
        note: "Principale au présent, subordonnée au subjonctif présent. Le cas de base.",
      },
      {
        etranger: "Quería que vinieras ayer.",
        francais: "Je voulais que tu viennes hier.",
        aussiEtranger: ["Quería que vinieses ayer."],
        note: "La même phrase au passé fait glisser la subordonnée au subjonctif imparfait. Vinieras ou vinieses : les deux sont corrects.",
      },
      {
        etranger: "Dijo que llegaría tarde.",
        francais: "Il a dit qu'il arriverait tard.",
        note: "Au discours rapporté, le futur du discours direct devient conditionnel.",
      },
      {
        etranger: "Me dijo que había terminado.",
        francais: "Il m'a dit qu'il avait fini.",
        note: "Le passé composé du discours direct devient plus-que-parfait.",
      },
      {
        etranger: "Es posible que ya lo sepa.",
        francais: "Il est possible qu'il le sache déjà.",
        note: "Es posible que + subjonctif présent quand la principale est au présent.",
      },
      {
        etranger: "Era posible que ya lo supiera.",
        francais: "Il était possible qu'il le sache déjà.",
        aussiEtranger: ["Era posible que ya lo supiese."],
        note: "Principale à l'imparfait : la subordonnée passe au subjonctif imparfait. Supiera ou supiese : les deux sont corrects.",
      },
      {
        etranger: "Espero que hayas dormido bien.",
        francais: "J'espère que tu as bien dormi.",
        note: "Subjonctif passé : l'action est achevée, la principale reste au présent.",
      },
      {
        etranger: "Le pedí que me llamara.",
        francais: "Je lui ai demandé de m'appeler.",
        note: "L'espagnol garde un verbe conjugué là où le français passe à l'infinitif.",
      },
      {
        etranger: "En cuanto termines, dímelo.",
        francais: "Dès que tu auras fini, dis-le-moi.",
        note: "En cuanto, mientras et hasta que suivent la règle de cuando : subjonctif pour le futur.",
      },
      {
        etranger: "No sabía que estuvieras aquí.",
        francais: "Je ne savais pas que tu étais là.",
        note: "Après une négation au passé, le subjonctif imparfait marque la surprise.",
      },
    ],
  },

  {
    slug: "es-se-impersonal",
    category: "Grammaire en contexte",
    title: "Le se impersonnel et le passif réfléchi",
    statement:
      "Se vende ou se venden ? Une seule lettre sépare deux constructions différentes, et l'accord est le seul indice. Le panneau d'agence immobilière se trompe une fois sur deux.",
    tip: "S'il y a un complément d'objet, le verbe s'accorde avec lui : se venden pisos. S'il n'y en a pas, le verbe reste au singulier : aquí se vive bien.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les deux se sans sujet",
      sections: [
        {
          titre: "Deux constructions, une même apparence",
          texte:
            "L'espagnol dispose de deux façons de dire ce que le français exprime par « on », et toutes deux commencent par se. Elles se ressemblent à s'y méprendre, et pourtant elles ne s'accordent pas de la même manière.\n\nLa première est le passif réfléchi, ou pasiva refleja. Elle s'emploie avec un verbe transitif suivi d'un complément d'objet inanimé. Ce complément devient le sujet grammatical, et le verbe s'accorde avec lui : se vende un piso, se venden pisos. Se busca camarero, se buscan camareros.\n\nLa seconde est le se impersonnel. Elle s'emploie avec un verbe intransitif, ou avec un verbe transitif dont le complément est une personne introduite par a. Il n'y a alors aucun sujet, et le verbe reste invariablement au singulier : aquí se vive bien, se trabaja mucho, se recibió a los invitados.\n\nLe test est simple : y a-t-il un complément d'objet inanimé ? Si oui, accord. Sinon, singulier.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le test de l'accord",
              colonnes: [
                {
                  titre: "Passif réfléchi — le verbe s'accorde",
                  points: [
                    "Se vende un piso. / Se venden pisos.",
                    "Se necesita voluntario. / Se necesitan voluntarios.",
                    "Le complément inanimé devient sujet.",
                  ],
                },
                {
                  titre: "Se impersonnel — toujours singulier",
                  points: [
                    "Aquí se vive muy bien.",
                    "Se trabaja mucho en esta empresa.",
                    "Se recibió a los invitados.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le a qui change tout",
          texte:
            "La ligne de partage la plus fine passe par le a personnel — cette préposition que l'espagnol place devant un complément d'objet direct désignant une personne déterminée.\n\nSans a, on est dans le passif réfléchi et le verbe s'accorde : se contratan empleados, on embauche des employés — indéterminés, vus comme une quantité.\n\nAvec a, on bascule dans l'impersonnel et le verbe reste au singulier : se contrató a los empleados, on a embauché les employés — désignés, identifiés. Écrire « se contrataron a los empleados » est une faute courante, y compris chez des hispanophones.\n\nLa raison est logique : dès que le complément porte un a, il ne peut plus jouer le rôle de sujet, et la phrase se retrouve sans sujet du tout. Le verbe se rabat alors sur la forme neutre, la troisième personne du singulier.\n\nCe même a explique aussi se le dice, se les llama : le complément étant une personne, il prend un pronom indirect.",
          visuels: [
            {
              type: "tableau",
              titre: "Accord ou singulier, cas par cas",
              colonnes: ["La phrase", "Type", "Pourquoi"],
              lignes: [
                ["Se venden pisos.", "passif réfléchi", "pisos est sujet, donc pluriel"],
                ["Se busca camarero.", "passif réfléchi", "camarero est singulier"],
                ["Se necesitan voluntarios.", "passif réfléchi", "voluntarios est sujet"],
                ["Se recibió a los invitados.", "impersonnel", "le a interdit le rôle de sujet"],
                ["Aquí se vive bien.", "impersonnel", "vivir n'a pas de complément"],
                ["No se puede fumar aquí.", "impersonnel", "poder + infinitif, pas de sujet"],
                ["Se dice que va a llover.", "impersonnel", "la subordonnée n'est pas un sujet pluriel"],
              ],
              note: "« Se venden a los pisos » n'existe pas : le complément direct d'un passif réfléchi ne prend pas de a. Le a reste possible ailleurs, devant un complément indirect : se le dice palta al aguacate.",
            },
          ],
        },
        {
          titre: "Les autres façons de dire « on »",
          texte:
            "Le se n'est pas la seule ressource, et savoir alterner évite la lourdeur.\n\nLa troisième personne du pluriel, sans sujet exprimé, désigne un agent inconnu ou peu important : me llamaron ayer, on m'a appelé hier ; dicen que va a llover, on dit qu'il va pleuvoir. C'est la tournure la plus courante à l'oral.\n\nUno ou una sert quand le locuteur se range lui-même dans le « on » : uno nunca sabe, on ne sait jamais. Une femme dira una nunca sabe.\n\nLa deuxième personne du singulier généralise, exactement comme le « tu » du français parlé : cuando llegas allí, ves el mar. Ce n'est pas un tutoiement, c'est une généralité.\n\nEnfin, la gente + verbe au singulier reste très employée : la gente piensa que… Attention, gente est un singulier en espagnol, malgré son sens collectif.\n\nAucune de ces tournures n'est meilleure : elles se relaient, et c'est leur alternance qui rend un texte naturel.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Se venden pisos en esta calle.",
        francais: "On vend des appartements dans cette rue.",
        note: "Venden au pluriel : pisos est le sujet. « Se vende pisos » est la faute courante.",
      },
      {
        etranger: "Se habla español en veintiún países.",
        francais: "On parle espagnol dans vingt et un pays.",
        note: "Passif réfléchi : le verbe s'accorde avec español, sujet grammatical. Vingt États souverains ont l'espagnol pour langue officielle, plus Porto Rico — d'où le compte à vingt et un.",
      },
      {
        etranger: "Se busca camarero con experiencia.",
        francais: "On cherche un serveur expérimenté.",
        note: "Singulier, car camarero l'est. L'annonce type des vitrines espagnoles.",
      },
      {
        etranger: "Aquí se vive muy bien.",
        francais: "Ici, on vit très bien.",
        note: "Se impersonnel : vivir n'a pas de complément, donc pas de sujet, donc singulier.",
      },
      {
        etranger: "Se trabaja mucho en esta empresa.",
        francais: "On travaille beaucoup dans cette entreprise.",
        note: "Verbe intransitif : impersonnel, toujours au singulier.",
      },
      {
        etranger: "Se recibió a los invitados.",
        francais: "On a reçu les invités.",
        note: "Le a personnel interdit à invitados d'être sujet : le verbe reste au singulier.",
      },
      {
        etranger: "Se necesitan voluntarios.",
        francais: "On a besoin de volontaires.",
        note: "Necesitan au pluriel : voluntarios est sujet. L'accord distingue les deux constructions.",
      },
      {
        etranger: "No se puede fumar aquí.",
        francais: "On ne peut pas fumer ici.",
        note: "Impersonnel avec poder + infinitif : la formule des panneaux d'interdiction.",
      },
      {
        etranger: "Se dice que va a llover.",
        francais: "On dit qu'il va pleuvoir.",
        note: "Se dice que + indicatif : la rumeur rapportée sans en désigner la source.",
      },
      {
        etranger: "En Chile se le dice palta al aguacate.",
        francais: "Au Chili, on appelle l'avocat palta.",
        note: "Impersonnel avec pronom indirect, parce que le complément est introduit par a.",
      },
    ],
  },

  {
    slug: "es-trabajo-latam",
    category: "Travail et études",
    title: "L'espagnol du travail en Amérique latine",
    statement:
      "Un devis se dit cotización, un fichier archivo, et l'on n'écrit pas quedo a la espera, courant en Espagne, mais quedo atento. Les formules du bureau changent de continent en même temps que le vocabulaire.",
    tip: "Beaucoup de tournures du bureau latino-américain calquent l'anglais — dar seguimiento, aplicar a un puesto. Elles sont passées dans l'usage, et refuser de les employer sonne pédant.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Le agradezco su pronta respuesta.",
        francais: "Je vous remercie de votre réponse rapide.",
        note: "Agradecer prend la chose sans préposition : agradezco su respuesta. En Amérique latine, agradecer por s'entend aussi.",
      },
      {
        etranger: "Quedo atento a sus comentarios.",
        francais: "Je reste à votre écoute pour vos remarques.",
        aussiEtranger: ["Quedo a la espera de sus comentarios."],
        note: "Formule de clôture latino-américaine. En Espagne : quedo a la espera de sus comentarios.",
      },
      {
        etranger: "Adjunto el archivo solicitado.",
        francais: "Ci-joint le fichier demandé.",
        aussiEtranger: ["Adjunto el fichero solicitado."],
        note: "Archivo, le fichier ; fichero surtout en Espagne. Anexo dans certains pays.",
      },
      {
        etranger: "Coordinemos una reunión para el jueves.",
        francais: "Organisons une réunion pour jeudi.",
        aussiEtranger: ["Convoquemos una reunión para el jueves."],
        note: "Coordinar une réunion est très latino-américain. En Espagne, on dit convocar.",
      },
      {
        etranger: "Por favor, confirme su asistencia.",
        francais: "Merci de confirmer votre présence.",
        note: "Asistencia, la présence à une réunion. Le faux ami « assistance » se dit ayuda.",
      },
      {
        etranger: "Estamos a la orden para lo que necesite.",
        francais: "Nous sommes à votre disposition pour tout besoin.",
        note: "A la orden : formule de service très courante en Colombie et au Venezuela.",
      },
      {
        etranger: "El plazo se venció la semana pasada.",
        francais: "Le délai a expiré la semaine dernière.",
        aussiEtranger: ["El plazo venció la semana pasada."],
        note: "Vencerse, arriver à échéance — la forme pronominale est américaine ; vencer seul (sans se) est celle qu'emploie l'Espagne. Le mot du contrat et de la facture.",
      },
      {
        etranger: "Vamos a darle seguimiento al caso.",
        francais: "Nous allons assurer le suivi du dossier.",
        note: "Dar seguimiento : un calque de l'anglais follow up, entré dans l'usage courant.",
      },
      {
        etranger: "¿Me puede pasar la cotización?",
        francais: "Pouvez-vous m'envoyer le devis ?",
        aussiEtranger: ["¿Me puede pasar el presupuesto?"],
        note: "Cotización, le devis en Amérique latine ; presupuesto en Espagne.",
      },
      {
        etranger: "Trabajo en la sucursal de Bogotá.",
        francais: "Je travaille à l'agence de Bogota.",
        note: "Sucursal, l'agence ou la succursale. Le mot est le même partout.",
      },
    ],
  },

  {
    slug: "es-falsos-amigos-tecnicos",
    category: "Faux amis",
    title: "Faux amis des sciences et du droit",
    statement:
      "Demanda n'est pas une demande, sentencia n'est pas une phrase, et datos n'a rien à voir avec les dates. Les mots du rapport et du contrat, ceux où le contresens engage.",
    tip: "Ces faux amis-là ne font pas sourire : ils passent inaperçus dans un texte plausible, et survivent à la relecture.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Presentó una demanda contra la empresa.",
        francais: "Il a porté plainte contre l'entreprise.",
        note: "Demanda, la plainte en justice. Une demande se dit solicitud ou petición.",
      },
      {
        etranger: "El juicio duró tres semanas.",
        francais: "Le procès a duré trois semaines.",
        note: "Juicio, le procès. Le jugement rendu se dit sentencia ou fallo.",
      },
      {
        etranger: "La sentencia fue favorable.",
        francais: "Le jugement a été favorable.",
        note: "Sentencia, la décision du tribunal. Une phrase se dit frase ; sentencia ne s'emploie pour « phrase » qu'au sens littéraire d'une maxime.",
      },
      {
        etranger: "Firmó el contrato sin leerlo.",
        francais: "Il a signé le contrat sans le lire.",
        note: "Firmar, signer ; firma, la signature — et aussi l'entreprise, selon le contexte.",
      },
      {
        etranger: "Los datos no son concluyentes.",
        francais: "Les données ne sont pas concluantes.",
        note: "Datos, les données ; une date se dit fecha. Le rapprochement est trompeur.",
      },
      {
        etranger: "Hicieron un ensayo clínico.",
        francais: "Ils ont mené un essai clinique.",
        note: "Ensayo, l'essai scientifique ou littéraire. Essayer se dit probar ou intentar.",
      },
      {
        etranger: "El experimento salió mal.",
        francais: "L'expérience a mal tourné.",
        note: "Experimento, l'expérience scientifique ; experiencia, le vécu. Le français dit « expérience » pour les deux : c'est là qu'est le piège.",
      },
      {
        etranger: "Necesitamos más evidencia.",
        francais: "Il nous faut davantage de preuves.",
        note: "Evidencia, calquée sur l'anglais, s'emploie en Amérique ; en Espagne on dit pruebas.",
      },
      {
        etranger: "Registró la patente el año pasado.",
        francais: "Il a déposé le brevet l'an dernier.",
        note: "Patente, le brevet ; registrar, enregistrer — ou fouiller. Deux faux amis d'un coup.",
      },
      {
        etranger: "El informe es muy extenso.",
        francais: "Le rapport est très long.",
        note: "Informe, le rapport — c'est le nom qui piège. L'adjectif informe existe aussi, avec le même sens qu'en français : una masa informe.",
      },
    ],
  },
];
