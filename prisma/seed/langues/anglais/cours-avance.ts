/**
 * Anglais — les cours de niveau intermédiaire et avancé.
 *
 * Conditionnels, passif, discours rapporté, relatives : les structures qui
 * séparent un anglais scolaire d'un anglais qui se tient.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_COURS_AVANCE: LotCartes[] = [
  {
    slug: "en-cours-conditionnels",
    category: "Grammaire en contexte",
    title: "Les conditionnelles : si, et alors",
    statement:
      "Quatre structures selon qu'on parle d'une vérité, d'une éventualité, d'une hypothèse ou d'un regret. Le français en a moins, et les mélange plus.",
    tip: "Jamais de will après if. « If it will rain » n'existe pas : c'est if it rains.",
    difficulty: 3,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les quatre conditionnelles",
      sections: [
        {
          titre: "Le principe : le temps recule d'un cran",
          texte:
            "L'anglais marque l'irréel en reculant le temps. Plus l'hypothèse est éloignée du réel, plus le verbe recule dans le passé — même quand on parle du présent ou du futur.\n\nC'est pourquoi if I were rich parle d'aujourd'hui : le prétérit ne dit pas le passé, il dit l'irréel. Et if I had known parle d'hier avec un past perfect : un cran de plus en arrière, pour un regret.\n\nRègle absolue, qui vaut pour les quatre : pas de will, pas de would dans la proposition en if. Le futur et le conditionnel restent dans l'autre moitié de la phrase.",
          visuels: [
            {
              type: "tableau",
              titre: "Les quatre structures",
              colonnes: ["Type", "Proposition en if", "Résultat", "Ce qu'on dit"],
              lignes: [
                ["zéro", "if + présent", "présent", "une vérité générale"],
                ["première", "if + présent", "will + base", "une éventualité réelle"],
                ["deuxième", "if + prétérit", "would + base", "une hypothèse irréelle"],
                ["troisième", "if + past perfect", "would have + participe", "un regret sur le passé"],
              ],
            },
          ],
        },
        {
          titre: "Laquelle choisir",
          texte:
            "La conditionnelle zéro énonce ce qui est toujours vrai : if you heat water, it boils. On pourrait remplacer if par when sans rien changer.\n\nLa première parle d'un futur possible : if it rains, we'll stay in. C'est une éventualité réelle, on prend ses dispositions.\n\nLa deuxième parle d'un présent ou d'un futur contraire aux faits : if I had more time, I would read more. Je n'ai pas plus de temps. On y trouve souvent were à toutes les personnes — if I were you — reste d'un ancien subjonctif, et c'est la forme attendue dans un conseil.\n\nLa troisième parle d'un passé qu'on ne peut plus changer : if I had known, I would have come. C'est le regret, ou le reproche.",
          visuels: [
            {
              type: "etapes",
              titre: "Quelle conditionnelle, en deux questions",
              etapes: [
                {
                  titre: "Est-ce que ça peut arriver ?",
                  texte: "Oui, c'est une vraie éventualité → première : if it rains, we'll stay in.",
                },
                {
                  titre: "Non, c'est contraire aux faits. Quand ?",
                  texte: "Maintenant ou plus tard → deuxième : if I had time, I would come. Dans le passé → troisième : if I had had time, I would have come.",
                },
              ],
            },
          ],
        },
        {
          titre: "Ce qui gravite autour",
          texte:
            "Unless veut dire « sauf si » : il pose la seule circonstance qui annulerait la phrase. Il équivaut souvent à if… not, mais pas toujours, et il ne se cumule jamais avec une négation.\n\nI wish et if only introduisent le regret avec le même recul de temps : I wish I knew, je voudrais savoir, et je ne sais pas ; I wish I had known, si seulement j'avais su.\n\nEnfin, les mélanges sont permis quand le sens l'exige : if I had studied medicine, I would be a doctor now — un passé irréel, une conséquence au présent.",
        },
      ],
    },
    cartes: [
      { etranger: "If you heat water, it boils.", francais: "Si on chauffe l'eau, elle bout.", note: "Vérité générale : présent des deux côtés." },
      { etranger: "If it rains, we'll stay in.", francais: "S'il pleut, on restera à la maison.", note: "Présent après if, will dans l'autre moitié. Jamais « if it will rain »." },
      { etranger: "If I had more time, I would read more.", francais: "Si j'avais plus de temps, je lirais davantage.", note: "Hypothèse contraire aux faits : prétérit après if." },
      { etranger: "If I were you, I'd wait.", francais: "À ta place, j'attendrais.", note: "Were à toutes les personnes : la forme attendue dans un conseil." },
      { etranger: "If I had known, I would have come.", francais: "Si j'avais su, je serais venu.", note: "Regret sur le passé : past perfect après if." },
      { etranger: "Unless you hurry, we'll be late.", francais: "À moins que tu ne te dépêches, on sera en retard.", note: "Unless pose l'exception qui annulerait la phrase. Il contient déjà la négation : pas de not en plus." },
      { etranger: "I wish I knew.", francais: "Je voudrais bien savoir.", note: "Le prétérit après wish marque l'irréel du présent." },
      { etranger: "I wish I had said something.", francais: "J'aurais voulu dire quelque chose.", note: "Past perfect après wish : le regret d'un passé." },
      { etranger: "What would you do in my place?", francais: "Qu'est-ce que tu ferais à ma place ?" },
      { etranger: "If I'd studied medicine, I'd be a doctor now.", francais: "Si j'avais étudié la médecine, je serais médecin.", note: "Mélange assumé : passé irréel, conséquence au présent." },
    ],
  },

  {
    slug: "en-cours-passif",
    category: "Grammaire en contexte",
    title: "Le passif, et pourquoi l'anglais l'aime",
    statement:
      "L'anglais emploie le passif bien plus que le français, surtout à l'écrit. Le refuser par réflexe fait sonner les textes comme des traductions.",
    tip: "be conjugué + participe passé. C'est le temps de be qui porte tout : is made, was made, has been made, will be made.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "La voix passive",
      sections: [
        {
          titre: "La mécanique",
          texte:
            "Le passif se forme avec be au temps voulu, suivi du participe passé. Le complément d'objet de la phrase active devient sujet, et l'ancien sujet disparaît ou se retrouve après by.\n\nSomeone stole my bike devient my bike was stolen. On remarque tout de suite l'intérêt : on n'a plus besoin de nommer le voleur, qu'on ne connaît pas.\n\nC'est là l'usage principal du passif en anglais : quand l'auteur de l'action est inconnu, évident, ou sans importance. English is spoken here — peu importe par qui.",
          visuels: [
            {
              type: "tableau",
              titre: "Le passif à tous les temps",
              colonnes: ["Temps", "Actif", "Passif"],
              lignes: [
                ["présent", "they make it", "it is made"],
                ["prétérit", "they made it", "it was made"],
                ["present perfect", "they have made it", "it has been made"],
                ["futur", "they will make it", "it will be made"],
                ["modal", "they must make it", "it must be made"],
                ["continu", "they are making it", "it is being made"],
              ],
              note: "Seul be change ; le participe passé reste identique partout.",
            },
          ],
        },
        {
          titre: "Le double passif, que le français ne peut pas faire",
          texte:
            "Les verbes à deux compléments — give, send, tell, offer, show — acceptent deux passifs en anglais. They gave me a prize donne I was given a prize, ou a prize was given to me.\n\nLa première forme n'a pas d'équivalent en français : on ne peut pas dire « je fus donné un prix ». C'est pourtant la plus employée en anglais, et savoir la produire change beaucoup le naturel.\n\nMême mécanique avec ask, teach, pay, promise : I was asked to leave, she was taught by her father.",
        },
        {
          titre: "Quand l'employer, et quand s'en passer",
          texte:
            "Le passif est de rigueur dans l'écrit scientifique et administratif, où l'auteur s'efface : the samples were analysed, applications must be submitted by Friday.\n\nIl sert aussi à garder le sujet constant d'une phrase à l'autre, ce qui rend un paragraphe plus fluide : she wrote the report and was praised for it.\n\nEn revanche, à l'oral et dans un récit, l'actif reste plus vif. Et l'anglais dispose d'une échappatoire élégante : le they impersonnel — they say it's going to snow — qui évite le passif sans nommer personne.",
        },
      ],
    },
    cartes: [
      { etranger: "My bike was stolen.", francais: "On m'a volé mon vélo.", note: "Le français emploie « on » là où l'anglais passive." },
      { etranger: "English is spoken here.", francais: "On parle anglais ici." },
      { etranger: "The report has been sent.", francais: "Le rapport a été envoyé.", note: "Present perfect passif : has been + participe." },
      { etranger: "It must be done today.", francais: "Ça doit être fait aujourd'hui.", note: "Après un modal : be + participe." },
      { etranger: "I was given a second chance.", francais: "On m'a donné une seconde chance.", note: "Ce passif-là n'a pas d'équivalent français." },
      { etranger: "I was asked to leave.", francais: "On m'a demandé de partir." },
      { etranger: "The house is being renovated.", francais: "La maison est en cours de rénovation.", note: "Passif continu : is being + participe." },
      { etranger: "Applications must be submitted by Friday.", francais: "Les candidatures doivent être déposées avant vendredi." },
      { etranger: "They say it's going to snow.", francais: "On dit qu'il va neiger.", note: "Le they impersonnel évite le passif sans nommer personne." },
      { etranger: "Nothing was decided.", francais: "Rien n'a été décidé." },
    ],
  },

  {
    slug: "en-cours-discours",
    category: "Grammaire en contexte",
    title: "Rapporter ce qui a été dit",
    statement:
      "Passer du direct au rapporté fait reculer tous les temps d'un cran, change les pronoms et les repères de temps. Mécanique, mais impitoyable.",
    tip: "He said : « I am tired » devient he said he was tired. Le présent recule au prétérit, et le pronom suit celui qui rapporte.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Le discours rapporté",
      sections: [
        {
          titre: "Le recul des temps",
          texte:
            "Quand le verbe introducteur est au passé — said, told, asked — tout ce qui suit recule d'un cran. Le présent devient prétérit, le prétérit devient past perfect, will devient would, can devient could, must devient had to.\n\nLe past perfect, lui, ne peut plus reculer : il reste tel quel. C'est le plancher.\n\nSi le verbe introducteur est au présent — he says — rien ne bouge : he says he is tired.",
          visuels: [
            {
              type: "tableau",
              titre: "Ce qui recule, et vers quoi",
              colonnes: ["Direct", "Rapporté"],
              lignes: [
                ["I am tired", "he was tired"],
                ["I work here", "he worked there"],
                ["I saw her", "he had seen her"],
                ["I will call", "he would call"],
                ["I can swim", "he could swim"],
                ["I must go", "he had to go"],
                ["I had finished", "he had finished"],
              ],
              note: "Le past perfect ne recule plus : c'est le dernier cran.",
            },
          ],
        },
        {
          titre: "Les repères qui bougent avec",
          texte:
            "Rapporter, c'est parler d'ailleurs et plus tard : les repères se déplacent en conséquence.\n\nNow devient then, today devient that day, tomorrow devient the next day, yesterday devient the day before, here devient there, this devient that.\n\nHe said : « I'll see you tomorrow » devient he said he would see me the next day. Trois changements dans une phrase de six mots — d'où la difficulté.",
        },
        {
          titre: "Say, tell, ask : trois verbes qui ne se construisent pas pareil",
          texte:
            "Say n'a pas de destinataire direct : he said he was tired, ou he said to me. Jamais « he said me ».\n\nTell en exige un : he told me he was tired. Jamais « he told that ».\n\nAsk introduit les questions. Pour une question ouverte, on garde le mot interrogatif et on remet l'ordre normal : she asked where I lived, jamais « where did I live ». Pour une question fermée, on emploie if ou whether : she asked if I was ready.\n\nEnfin, pour rapporter un ordre, l'anglais emploie l'infinitif : he told me to wait, she asked me not to leave.",
        },
      ],
    },
    cartes: [
      { etranger: "He said he was tired.", francais: "Il a dit qu'il était fatigué.", note: "Le présent du direct recule au prétérit." },
      { etranger: "She told me she would call.", francais: "Elle m'a dit qu'elle appellerait.", note: "Tell exige un destinataire ; will recule en would." },
      { etranger: "He said he had already seen it.", francais: "Il a dit qu'il l'avait déjà vu.", note: "Le prétérit recule au past perfect." },
      { etranger: "She asked where I lived.", francais: "Elle m'a demandé où j'habitais.", note: "Question rapportée : ordre normal, pas d'inversion." },
      { etranger: "He asked if I was ready.", francais: "Il m'a demandé si j'étais prêt.", note: "If ou whether pour une question fermée." },
      { etranger: "She told me to wait.", francais: "Elle m'a dit d'attendre.", note: "Un ordre rapporté passe par l'infinitif." },
      { etranger: "He asked me not to leave.", francais: "Il m'a demandé de ne pas partir.", note: "La négation se place devant to." },
      { etranger: "She said she would come the next day.", francais: "Elle a dit qu'elle viendrait le lendemain.", note: "Tomorrow devient the next day." },
      { etranger: "He says he's on his way.", francais: "Il dit qu'il arrive.", note: "Verbe introducteur au présent : rien ne recule." },
      { etranger: "They admitted they had been wrong.", francais: "Ils ont admis qu'ils s'étaient trompés." },
    ],
  },

  {
    slug: "en-cours-relatives",
    category: "Grammaire en contexte",
    title: "Who, which, that : lier deux idées",
    statement:
      "Les relatives anglaises se passent souvent du pronom, ce que le français ne fait jamais. Savoir quand l'omettre est ce qui fait la fluidité.",
    tip: "Si le pronom est complément, il peut disparaître : the book I read. S'il est sujet, jamais : the man who called.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les propositions relatives",
      sections: [
        {
          titre: "Qui, que, dont : les équivalences",
          texte:
            "Who pour une personne, which pour une chose, that pour les deux dans une relative déterminative. Whose pour la possession, où le français dit « dont ».\n\nWhere pour un lieu, when pour un moment : the town where I grew up, the day when we met.\n\nAttention à « dont » : il se traduit selon son rôle. Possession → whose ; complément d'un verbe → of which ou une construction avec la préposition rejetée en fin. C'est un des points où la traduction mot à mot ne marche jamais.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le pronom peut-il disparaître ?",
              colonnes: [
                {
                  titre: "Sujet — il reste",
                  points: [
                    "The man who called was polite.",
                    "The bus which goes to Lyon.",
                    "Retirer who laisserait la phrase sans sujet.",
                  ],
                },
                {
                  titre: "Complément — il peut partir",
                  points: [
                    "The book (that) I read.",
                    "The man (who) I met.",
                    "The town (which) we visited.",
                    "L'omettre est même plus naturel à l'oral.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Déterminative ou explicative : la virgule change tout",
          texte:
            "Une relative déterminative identifie de qui ou de quoi on parle. Elle ne prend pas de virgule, et accepte that. My sister who lives in Lyon — sous-entendu : j'en ai plusieurs, celle-là habite Lyon.\n\nUne relative explicative ajoute un détail sur quelqu'un déjà identifié. Elle prend des virgules, refuse that, et refuse aussi l'omission du pronom. My sister, who lives in Lyon, is a teacher — je n'ai qu'une sœur, et au passage elle habite Lyon.\n\nLa virgule seule fait donc la différence entre « une de mes sœurs » et « ma sœur ». C'est rare qu'une ponctuation porte autant.",
        },
        {
          titre: "La préposition rejetée",
          texte:
            "Le français dit « la personne à qui je parlais ». L'anglais courant rejette la préposition en fin de relative et supprime le pronom : the person I was talking to.\n\nLa forme soutenue existe — the person to whom I was talking — mais elle sonne très formelle, presque juridique. À l'écrit ordinaire comme à l'oral, la préposition finale est la norme.\n\nOn entend parfois que finir une phrase par une préposition serait fautif : c'est une superstition du XVIIIᵉ siècle, démentie par tous les usages.",
        },
      ],
    },
    cartes: [
      { etranger: "The man who called was polite.", francais: "L'homme qui a appelé était poli.", note: "Pronom sujet : il ne peut pas disparaître." },
      { etranger: "The book I read was good.", francais: "Le livre que j'ai lu était bon.", note: "Pronom complément : l'omettre est même plus naturel." },
      { etranger: "That's the woman whose son I know.", francais: "C'est la femme dont je connais le fils.", note: "Whose pour la possession." },
      { etranger: "This is the town where I grew up.", francais: "C'est la ville où j'ai grandi." },
      { etranger: "The person I was talking to.", francais: "La personne à qui je parlais.", note: "Préposition rejetée en fin : c'est la norme." },
      { etranger: "My sister, who lives in Lyon, is a teacher.", francais: "Ma sœur, qui habite Lyon, est professeure.", note: "Les virgules disent que je n'ai qu'une sœur." },
      { etranger: "The bus that goes to Lyon leaves at six.", francais: "Le bus qui va à Lyon part à six heures." },
      { etranger: "I remember the day when we met.", francais: "Je me souviens du jour où on s'est rencontrés." },
      { etranger: "Everything you said was true.", francais: "Tout ce que tu as dit était vrai.", note: "Après everything, le pronom relatif s'omet couramment." },
      { etranger: "She's the one I trust.", francais: "C'est elle en qui j'ai confiance." },
    ],
  },
];
