/**
 * Anglais — le socle A1.
 *
 * Ce qu'il faut savoir avant tout le reste : compter, dire l'heure, parler des
 * gens, manger, acheter, décrire. Sans ce socle, on sait discuter de politique
 * et pas commander un café.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_DEBUTANT: LotCartes[] = [
  {
    slug: "en-nombres-heure",
    category: "Les bases",
    title: "Compter, dire l'heure et la date",
    statement:
      "Les nombres, l'heure et les dates suivent des règles différentes du français, et on s'en sert tous les jours. Les apprendre mal coûte cher longtemps.",
    tip: "L'anglais dit les heures à l'envers du français : half past four, c'est quatre heures et demie, pas quatre heures et demie de retard.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "It's half past four.", francais: "Il est quatre heures et demie.", note: "Half past + l'heure passée. Jamais « half five » pour quatre heures et demie." },
      { etranger: "It's a quarter to seven.", francais: "Il est sept heures moins le quart.", note: "To pour ce qui reste, past pour ce qui est passé." },
      { etranger: "The meeting is at ten to three.", francais: "La réunion est à trois heures moins dix." },
      { etranger: "I was born in 1997.", francais: "Je suis né en 1997.", note: "In devant une année. On dit nineteen ninety-seven, par paires." },
      { etranger: "My birthday is on the third of May.", francais: "Mon anniversaire est le trois mai.", note: "Ordinal obligatoire : the third, pas the three." },
      { etranger: "There are twelve of us.", francais: "Nous sommes douze.", note: "L'anglais dit « il y a douze de nous », le français « nous sommes douze »." },
      { etranger: "It costs nineteen euros fifty.", francais: "Ça coûte dix-neuf euros cinquante." },
      { etranger: "The first floor, please.", francais: "Le premier étage, s'il vous plaît.", note: "Au Royaume-Uni, le first floor est notre premier ; aux États-Unis, c'est le rez-de-chaussée." },
      { etranger: "See you on Tuesday.", francais: "À mardi.", note: "On devant un jour de la semaine, et la majuscule est obligatoire." },
      { etranger: "It's the twenty-first of June.", francais: "Nous sommes le vingt et un juin." },
    ],
  },

  {
    slug: "en-gens",
    category: "Les bases",
    title: "La famille et les gens",
    statement:
      "Parler de ceux qui vous entourent : la famille, les amis, l'âge, la situation. C'est le premier sujet de toute conversation.",
    tip: "L'anglais possède avec 's : my sister's husband, le mari de ma sœur. L'ordre est inverse du français.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "This is my sister.", francais: "Voici ma sœur.", note: "This is pour présenter quelqu'un, jamais « it is »." },
      { etranger: "I have two brothers.", francais: "J'ai deux frères." },
      { etranger: "My sister's husband is called Tom.", francais: "Le mari de ma sœur s'appelle Tom.", note: "Le 's marque la possession, et l'ordre s'inverse par rapport au français." },
      { etranger: "She's my best friend.", francais: "C'est ma meilleure amie.", note: "Pour parler d'une personne, on dit she's et non « it's »." },
      { etranger: "He's married with two children.", francais: "Il est marié et a deux enfants.", note: "Married WITH children ; married TO quelqu'un." },
      { etranger: "My parents live in Brittany.", francais: "Mes parents habitent en Bretagne." },
      { etranger: "How old is your daughter?", francais: "Quel âge a ta fille ?" },
      { etranger: "We get on very well.", francais: "On s'entend très bien." },
      { etranger: "I'm the youngest of three.", francais: "Je suis le plus jeune de trois." },
      { etranger: "She looks like her mother.", francais: "Elle ressemble à sa mère.", note: "Look like, ressembler ; look after, s'occuper de." },
    ],
  },

  {
    slug: "en-manger",
    category: "Vie quotidienne",
    title: "Manger et boire",
    statement:
      "Commander, refuser, demander l'addition. Les formules sont courtes et figées : on les reconnaît plus qu'on ne les invente.",
    tip: "En anglais, on commande avec could I have, jamais avec I want, qui sonne comme un ordre d'enfant.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "Could I have a coffee, please?", francais: "Je voudrais un café, s'il vous plaît.", note: "Could I have est la formule polie standard. « I want » sonne brutal." },
      { etranger: "I'm just having a look, thanks.", francais: "Je regarde seulement, merci." },
      { etranger: "Could we have the bill, please?", francais: "L'addition, s'il vous plaît.", note: "Bill au Royaume-Uni, check aux États-Unis." },
      { etranger: "I don't eat meat.", francais: "Je ne mange pas de viande." },
      { etranger: "I'm allergic to nuts.", francais: "Je suis allergique aux fruits à coque." },
      { etranger: "What do you recommend?", francais: "Qu'est-ce que vous me conseillez ?" },
      { etranger: "Is it spicy?", francais: "C'est épicé ?" },
      { etranger: "Still or sparkling?", francais: "Plate ou gazeuse ?", note: "Question rituelle au restaurant, à propos de l'eau." },
      { etranger: "It was delicious, thank you.", francais: "C'était délicieux, merci." },
      { etranger: "Can I have it to take away?", francais: "C'est possible à emporter ?", note: "To go aux États-Unis." },
    ],
  },

  {
    slug: "en-decrire",
    category: "Les bases",
    title: "Décrire : couleurs, tailles, opinions",
    statement:
      "Les adjectifs anglais ne s'accordent jamais, mais ils se rangent dans un ordre précis. Dire « a red big car » se remarque immédiatement.",
    tip: "L'ordre est : opinion, taille, âge, forme, couleur, origine, matière. A nice big old round red Italian wooden table.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "a big red car", francais: "une grosse voiture rouge", note: "Taille avant couleur, et jamais d'accord : big, pas bigs." },
      { etranger: "It's too expensive.", francais: "C'est trop cher.", note: "Too pour l'excès ; very pour l'intensité." },
      { etranger: "It's not big enough.", francais: "Ce n'est pas assez grand.", note: "Enough se place APRÈS l'adjectif : big enough, jamais « enough big »." },
      { etranger: "This one is cheaper.", francais: "Celui-ci est moins cher.", note: "Comparatif court : -er. Pour les longs adjectifs, more expensive." },
      { etranger: "It's the best one.", francais: "C'est le meilleur.", note: "good, better, best. Irrégulier, et partout." },
      { etranger: "I like it a lot.", francais: "Ça me plaît beaucoup.", aussi: ["J'aime beaucoup."] },
      { etranger: "I don't really like it.", francais: "Ça ne me plaît pas trop." },
      { etranger: "It looks nice.", francais: "Ça a l'air bien.", note: "Look + adjectif, sans like : « it looks like nice » serait fautif." },
      { etranger: "What colour is it?", francais: "C'est de quelle couleur ?", note: "Colour au Royaume-Uni, color aux États-Unis." },
      { etranger: "It's a bit small.", francais: "C'est un peu petit.", note: "A bit atténue ; a lot renforce." },
    ],
  },

  {
    slug: "en-acheter",
    category: "Vie quotidienne",
    title: "Faire des achats",
    statement:
      "Demander un prix, une taille, essayer, rendre. Ces phrases servent partout, du marché au magasin de chaussures.",
    tip: "Le mot magic en anglais commercial est would : I would like, would you mind, would it be possible.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "How much is it?", francais: "Ça coûte combien ?", note: "How much pour un prix ; how many pour un nombre." },
      { etranger: "Do you have this in a smaller size?", francais: "Vous l'avez en plus petit ?" },
      { etranger: "Can I try it on?", francais: "Je peux l'essayer ?", note: "Try ON pour un vêtement ; try tout court, c'est goûter ou tenter." },
      { etranger: "I'm just looking, thanks.", francais: "Je regarde, merci." },
      { etranger: "Do you take card?", francais: "Vous prenez la carte ?" },
      { etranger: "Could I have a receipt?", francais: "Je peux avoir un reçu ?" },
      { etranger: "I'd like to return this.", francais: "Je voudrais rendre ceci." },
      { etranger: "It doesn't fit.", francais: "Ça ne me va pas.", note: "Fit pour la taille ; suit pour le style. « It doesn't suit me » veut dire que ça ne me flatte pas." },
      { etranger: "Is it on sale?", francais: "C'est en solde ?", note: "On sale, en promotion ; for sale, à vendre." },
      { etranger: "Keep the change.", francais: "Gardez la monnaie." },
    ],
  },

  {
    slug: "en-meteo-lieux",
    category: "Vie quotidienne",
    title: "Le temps qu'il fait, et où l'on est",
    statement:
      "La météo est le sujet d'ouverture par excellence en anglais, et il n'est pas ironique : c'est vraiment ainsi qu'on entre en conversation.",
    tip: "La météo se dit avec it's : it's raining, it's cold. Jamais « he rains » ni « the weather is raining ».",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "It's raining again.", francais: "Il pleut encore.", note: "It, sujet impersonnel obligatoire pour la météo." },
      { etranger: "Lovely weather today, isn't it?", francais: "Beau temps aujourd'hui, non ?", note: "Le question tag, isn't it, ouvre la conversation. C'est un rituel, pas une vraie question." },
      { etranger: "It's freezing.", francais: "Il fait un froid glacial." },
      { etranger: "Is it far from here?", francais: "C'est loin d'ici ?" },
      { etranger: "It's just around the corner.", francais: "C'est juste à côté.", aussi: ["C'est au coin de la rue."] },
      { etranger: "Go straight on, then turn left.", francais: "Continuez tout droit, puis tournez à gauche." },
      { etranger: "It's opposite the station.", francais: "C'est en face de la gare.", note: "Opposite, en face ; in front of, devant. Les deux ne sont pas la même chose." },
      { etranger: "I'm lost.", francais: "Je suis perdu." },
      { etranger: "How long does it take?", francais: "Ça prend combien de temps ?", note: "Take pour la durée : it takes ten minutes." },
      { etranger: "It's about ten minutes on foot.", francais: "C'est à environ dix minutes à pied." },
    ],
  },
];
