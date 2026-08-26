/**
 * Anglais — six champs lexicaux qui manquaient.
 *
 * Le module couvrait la cuisine, les vêtements, la nature, la ville, l'argent,
 * le numérique, les émotions, la médecine, la politique, les métiers, le
 * bricolage, l'environnement et l'art. Restaient six domaines dont on parle
 * tous les jours et dont aucun mot n'était enseigné : le sport, les
 * transports, les études, la famille, le droit courant et les médias.
 *
 * Ce sont des séries de phrases, pas de mots isolés : un champ lexical
 * s'apprend par ses collocations. « Take the bus » et « catch the bus » ne
 * s'échangent pas, et aucune liste de mots ne le dit.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_VOCABULAIRE_VIE: LotCartes[] = [
  {
    slug: "en-voc-sport",
    category: "Vocabulaire",
    title: "Le sport et l'effort",
    statement:
      "Play, do ou go : l'anglais choisit le verbe selon le sport, et il n'y a pas de logique à deviner. On dit play football, do yoga, go swimming.",
    tip: "Play pour les sports d'équipe et de balle, go pour ceux qui finissent en -ing, do pour le reste. Se tromper de verbe s'entend immédiatement.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I go swimming twice a week.",
        francais: "Je vais nager deux fois par semaine.",
        aussi: ["Je fais de la natation deux fois par semaine."],
        note: "Go + -ing pour les sports qu'on pratique seul et en mouvement : go running, go cycling, go skiing.",
      },
      {
        etranger: "She plays rugby for the local club.",
        francais: "Elle joue au rugby dans le club de la ville.",
        note: "Play + sport d'équipe, sans article : play rugby, jamais « play the rugby ».",
      },
      {
        etranger: "He does yoga every morning.",
        francais: "Il fait du yoga tous les matins.",
        note: "Do pour ce qui n'est ni collectif ni en -ing : do yoga, do karate, do gymnastics.",
      },
      {
        etranger: "I need to warm up before training.",
        francais: "Je dois m'échauffer avant l'entraînement.",
        aussiEtranger: ["I need to warm up before the session."],
        note: "Warm up est le verbe, a warm-up le nom. Training ne prend pas d'article ici.",
      },
      {
        etranger: "They lost three nil.",
        francais: "Ils ont perdu trois à zéro.",
        note: "Le zéro d'un score se dit nil au football britannique, zero aux États-Unis, love au tennis.",
      },
      {
        etranger: "The match ended in a draw.",
        francais: "Le match s'est terminé par un match nul.",
        aussi: ["Le match s'est soldé par un nul."],
        note: "A draw, un nul. Tie s'emploie surtout en anglais américain.",
      },
      {
        etranger: "I pulled a muscle in my calf.",
        francais: "Je me suis froissé un muscle au mollet.",
        aussi: ["Je me suis fait un claquage au mollet."],
        note: "Pull a muscle, se froisser un muscle. Calf, mollet — pluriel calves.",
      },
      {
        etranger: "He is training for a marathon.",
        francais: "Il s'entraîne pour un marathon.",
        note: "Train for something, sans pronom : l'anglais n'a pas de forme réfléchie ici.",
      },
      {
        etranger: "She beat the record by two seconds.",
        francais: "Elle a battu le record de deux secondes.",
        note: "Beat a record ou break a record. By pour l'écart : by two seconds.",
      },
      {
        etranger: "The referee sent him off.",
        francais: "L'arbitre l'a expulsé.",
        aussi: ["L'arbitre l'a sorti du terrain."],
        note: "Send off, expulser. Le carton rouge se dit a red card.",
      },
    ],
  },

  {
    slug: "en-voc-transports",
    category: "Vocabulaire",
    title: "Se déplacer",
    statement:
      "Take, catch, miss, get on, get off. Le verbe change selon qu'on choisit son transport, qu'on l'attrape de justesse ou qu'on y monte — et le français dit « prendre » pour les trois.",
    tip: "Take dit le trajet, catch dit qu'on l'a eu de peu. On pour ce qu'on enfourche ou ce dans quoi on circule sans être enfermé — on the bus, on the train, on my bike ; in pour l'habitacle fermé — in the car, in a taxi.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I take the bus to work.",
        francais: "Je prends le bus pour aller au travail.",
        note: "Take pour le trajet habituel. To work, sans article : c'est une destination fonctionnelle.",
      },
      {
        etranger: "We just caught the last train.",
        francais: "On a eu le dernier train de justesse.",
        aussi: ["On a attrapé le dernier train de justesse."],
        note: "Catch dit qu'on a failli le rater. Take ne le dirait pas.",
      },
      {
        etranger: "Get off at the third stop.",
        francais: "Descends au troisième arrêt.",
        note: "Get off d'un bus, d'un train, d'un vélo. Get out of pour une voiture.",
      },
      {
        etranger: "The flight was delayed by two hours.",
        francais: "Le vol a eu deux heures de retard.",
        aussi: ["Le vol a été retardé de deux heures."],
        note: "Delayed by pour la durée du retard, delayed until pour l'heure nouvelle.",
      },
      {
        etranger: "I'm stuck in traffic.",
        francais: "Je suis coincé dans les embouteillages.",
        aussi: ["Je suis pris dans les bouchons."],
        note: "Traffic est indénombrable : jamais « traffics ». A traffic jam pour l'embouteillage lui-même.",
      },
      {
        etranger: "This train terminates here.",
        francais: "Ce train ne va pas plus loin.",
        aussi: ["Ce train s'arrête ici, terminus."],
        note: "Terminate est le mot des annonces ferroviaires britanniques. Le terminus se dit the terminus.",
      },
      {
        etranger: "We had to change at Reading.",
        francais: "Il a fallu changer à Reading.",
        note: "Change sans complément pour une correspondance. A connection est la correspondance elle-même.",
      },
      {
        etranger: "The road is closed for roadworks.",
        francais: "La route est fermée pour travaux.",
        note: "Roadworks est toujours pluriel en anglais britannique ; les Américains disent road construction.",
      },
      {
        etranger: "I'd rather walk than drive.",
        francais: "Je préfère marcher que conduire.",
        aussi: ["J'aime mieux marcher que conduire."],
        note: "Would rather + infinitif sans to, than + infinitif sans to également.",
      },
      {
        etranger: "He gave me a lift to the station.",
        francais: "Il m'a déposé à la gare.",
        aussi: ["Il m'a emmené à la gare en voiture."],
        note: "Give someone a lift en anglais britannique, a ride en américain.",
      },
      {
        etranger: "I missed the last train.",
        francais: "J'ai raté le dernier train.",
        note: "Miss, rater un transport de justesse. Le contraire de catch.",
      },
      {
        etranger: "Get on at the front.",
        francais: "Montez à l'avant.",
        note: "Get on, monter dans un bus ou un train ; get off, en descendre.",
      },
    ],
  },

  {
    slug: "en-voc-education",
    category: "Travail et études",
    title: "Étudier, passer, obtenir",
    statement:
      "Pass an exam n'est pas passer un examen : c'est le réussir. Le champ des études est un nid de faux amis, et l'erreur se paie sur un CV.",
    tip: "Take an exam pour le passer, pass an exam pour l'avoir. A degree est le diplôme universitaire, pas le niveau ; a course est un cursus entier, pas une leçon.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I'm taking the exam in June.",
        francais: "Je passe l'examen en juin.",
        note: "Take an exam, le passer. Pass an exam voudrait dire le réussir : le faux ami coûte cher.",
      },
      {
        etranger: "She passed with distinction.",
        francais: "Elle a été reçue avec mention.",
        aussi: ["Elle a réussi avec mention."],
        note: "With distinction, avec mention. Le système britannique dit aussi with honours pour la licence.",
      },
      {
        etranger: "He dropped out in his second year.",
        francais: "Il a abandonné en deuxième année.",
        aussi: ["Il a arrêté ses études en deuxième année."],
        note: "Drop out, abandonner ses études. A dropout désigne la personne.",
      },
      {
        etranger: "I did a degree in history.",
        francais: "J'ai fait des études d'histoire.",
        aussi: ["J'ai fait une licence d'histoire."],
        note: "A degree in something. Do ou take a degree ; jamais « make ».",
      },
      {
        etranger: "The deadline for the essay is Friday.",
        francais: "La dissertation est à rendre vendredi.",
        aussi: ["La date limite pour la dissertation est vendredi."],
        note: "An essay est une dissertation, pas un essai littéraire. Le devoir en général se dit an assignment.",
      },
      {
        etranger: "She is doing a PhD in linguistics.",
        francais: "Elle fait un doctorat en linguistique.",
        note: "Do a PhD. On est a PhD student, jamais « a doctorant ».",
      },
      {
        etranger: "I have a lecture at nine.",
        francais: "J'ai un cours magistral à neuf heures.",
        note: "A lecture est le cours en amphi ; a seminar le travail dirigé ; a class le cours en général.",
      },
      {
        etranger: "He resat the exam in September.",
        francais: "Il a repassé l'examen en septembre.",
        aussi: ["Il a repassé l'épreuve en septembre."],
        note: "Resit, repasser une épreuve. Le nom se dit a resit.",
      },
      {
        etranger: "Attendance is compulsory.",
        francais: "La présence est obligatoire.",
        aussi: ["L'assiduité est obligatoire."],
        note: "Compulsory est le mot de l'école et de l'administration britanniques ; mandatory, plus juridique, s'emploie des deux côtés. Attendance, la présence effective.",
      },
      {
        etranger: "I applied for a scholarship.",
        francais: "J'ai demandé une bourse.",
        aussi: ["J'ai candidaté pour une bourse."],
        note: "Apply for something. A scholarship est au mérite, a grant sur critères.",
      },
    ],
  },

  {
    slug: "en-voc-famille",
    category: "Vocabulaire",
    title: "La famille et les liens",
    statement:
      "In-law, step-, half-, great-. L'anglais compose ses liens de parenté avec trois préfixes et un suffixe, là où le français change de mot ou tourne autour.",
    tip: "-in-law pour l'alliance, step- pour la recomposition, half- pour un seul parent commun, great- pour chaque génération d'écart.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "My sister-in-law is a nurse.",
        francais: "Ma belle-sœur est infirmière.",
        note: "-in-law dit l'alliance. Le pluriel se met sur le premier mot : sisters-in-law.",
      },
      {
        etranger: "My stepmother lives in Bristol.",
        francais: "Ma belle-mère habite à Bristol.",
        note: "Step- pour la famille recomposée, -in-law pour celle du conjoint. Le français dit « belle-mère » pour les deux.",
      },
      {
        etranger: "She has a half-brother in Canada.",
        francais: "Elle a un demi-frère au Canada.",
        note: "Half- quand un seul parent est commun. Sans lien de sang, ce serait a stepbrother.",
      },
      {
        etranger: "My great-grandmother was born in 1910.",
        francais: "Mon arrière-grand-mère est née en 1910.",
        note: "Un great- par génération : great-great-grandfather pour l'arrière-arrière.",
      },
      {
        etranger: "They are expecting their first child.",
        francais: "Ils attendent leur premier enfant.",
        note: "Be expecting sans complément suffit à dire la grossesse.",
      },
      {
        etranger: "We're distantly related.",
        francais: "Nous sommes parents éloignés.",
        aussi: ["Nous avons un lien de parenté lointain."],
        note: "Be related to someone, avoir un lien de parenté. Attention au double sens français : les parents, père et mère, se disent parents ; les parents au sens de la parenté élargie se disent relatives.",
      },
      {
        etranger: "She takes after her mother.",
        francais: "Elle tient de sa mère.",
        note: "Take after pour la ressemblance héritée ; look like pour la seule apparence.",
      },
      {
        etranger: "They split up last year.",
        francais: "Ils se sont séparés l'an dernier.",
        aussi: ["Ils ont rompu l'an dernier."],
        note: "Split up pour un couple. Divorce suppose le mariage et la procédure.",
      },
      {
        etranger: "He was raised by his grandparents.",
        francais: "Il a été élevé par ses grands-parents.",
        note: "Raise pour élever un enfant ; educate ne concerne que l'instruction.",
      },
      {
        etranger: "My cousin is getting married in May.",
        francais: "Mon cousin se marie en mai.",
        note: "Get married sans complément, marry someone avec. « Marry with » n'existe pas.",
      },
    ],
  },

  {
    slug: "en-voc-justice",
    category: "Vocabulaire",
    title: "Contrats, litiges et démarches",
    statement:
      "Signer un bail, résilier un abonnement, porter plainte. Les mots du droit courant, ceux dont on a besoin en vivant à l'étranger — pas ceux d'un tribunal.",
    tip: "Sue veut dire poursuivre en justice, pas « suivre ». Claim est une demande, pas une réclamation au sens français. Deux erreurs qui changent tout un courrier.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I signed a one-year lease.",
        francais: "J'ai signé un bail d'un an.",
        note: "A lease pour un bail, a rental agreement pour une location courte. Le loyer est the rent.",
      },
      {
        etranger: "You can cancel the contract in writing.",
        francais: "Vous pouvez résilier le contrat par écrit.",
        aussi: ["Vous pouvez annuler le contrat par écrit."],
        note: "Cancel a contract. Terminate existe mais appartient au registre juridique.",
      },
      {
        etranger: "I want to file a complaint.",
        francais: "Je veux porter plainte.",
        aussi: ["Je souhaite déposer une plainte."],
        note: "File a complaint auprès d'une administration ; press charges quand la police est saisie.",
      },
      {
        etranger: "The landlord kept the deposit.",
        francais: "Le propriétaire a gardé la caution.",
        aussi: ["Le bailleur a conservé le dépôt de garantie."],
        note: "A deposit, la caution versée. A guarantor est la personne qui se porte garante.",
      },
      {
        etranger: "They threatened to sue the company.",
        francais: "Ils ont menacé de poursuivre l'entreprise en justice.",
        aussi: ["Ils ont menacé d'attaquer l'entreprise en justice."],
        note: "Sue, poursuivre au civil. Rien à voir avec suivre, qui se dit follow.",
      },
      {
        etranger: "I made a claim on my insurance.",
        francais: "J'ai fait une déclaration de sinistre.",
        aussi: ["J'ai déclaré un sinistre à mon assurance."],
        note: "A claim est une demande d'indemnisation. Une réclamation au sens français est a complaint.",
      },
      {
        etranger: "The fine is due within thirty days.",
        francais: "L'amende est à payer sous trente jours.",
        note: "Due dit l'échéance. A fine est l'amende, a fee des frais, a penalty une pénalité.",
      },
      {
        etranger: "Read the small print before signing.",
        francais: "Lisez les clauses en petits caractères avant de signer.",
        note: "The small print en anglais britannique, the fine print en américain.",
      },
      {
        etranger: "He was found not guilty.",
        francais: "Il a été déclaré non coupable.",
        aussi: ["Il a été acquitté."],
        note: "Find someone guilty ou not guilty. Innocent ne s'emploie pas dans un verdict.",
      },
      {
        etranger: "You need to give one month's notice.",
        francais: "Vous devez donner un préavis d'un mois.",
        note: "Notice, le préavis. Le génitif est obligatoire : one month's notice, two months' notice.",
      },
    ],
  },

  {
    slug: "en-voc-medias",
    category: "Vocabulaire",
    title: "Informations et réseaux",
    statement:
      "Coverage, outlet, feed, thread. Le vocabulaire de l'information a changé en vingt ans, et les mots récents n'ont souvent pas d'équivalent français fixé.",
    tip: "News est indénombrable et singulier : the news is, jamais « the news are ». Media est un pluriel, mais l'usage courant l'accorde au singulier.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The news is on at eight.",
        francais: "Le journal est à huit heures.",
        aussi: ["Les informations sont à huit heures."],
        note: "News est indénombrable et prend un verbe singulier. « A news » n'existe pas : a piece of news.",
      },
      {
        etranger: "The story got wide coverage.",
        francais: "L'affaire a été largement couverte.",
        aussi: ["Le sujet a eu une large couverture médiatique."],
        note: "Coverage, la couverture d'un sujet. A story est un sujet traité, pas forcément une histoire.",
      },
      {
        etranger: "She works for an independent outlet.",
        francais: "Elle travaille pour un média indépendant.",
        note: "An outlet désigne un organe de presse. Le mot media reste collectif.",
      },
      {
        etranger: "The post went viral overnight.",
        francais: "La publication est devenue virale du jour au lendemain.",
        note: "Go viral. Overnight dit la brusquerie autant que la nuit.",
      },
      {
        etranger: "I muted the thread.",
        francais: "J'ai coupé les notifications du fil.",
        aussi: ["J'ai mis le fil en sourdine."],
        note: "Mute, couper le son ou les notifications. A thread, un fil de discussion.",
      },
      {
        etranger: "It's in my feed.",
        francais: "C'est dans mon fil d'actualité.",
        note: "A feed, le fil d'actualité qu'on fait défiler.",
      },
      {
        etranger: "The claim was fact-checked.",
        francais: "L'affirmation a été vérifiée.",
        aussi: ["L'affirmation a fait l'objet d'une vérification."],
        note: "Fact-check est devenu un verbe. Le nom, a fact-checker, désigne la personne comme le service.",
      },
      {
        etranger: "The paper ran a front-page story.",
        francais: "Le journal en a fait sa une.",
        aussi: ["Le journal a publié l'affaire en première page."],
        note: "Run a story, publier. The front page, la une.",
      },
      {
        etranger: "He deleted his account.",
        francais: "Il a supprimé son compte.",
        note: "Delete pour effacer définitivement, deactivate pour désactiver sans perdre.",
      },
      {
        etranger: "The interview was off the record.",
        francais: "L'entretien était officieux.",
        aussi: ["L'entretien n'était pas destiné à être publié."],
        note: "Off the record, non publiable. On the record, au contraire, engage la source.",
      },
      {
        etranger: "The article was behind a paywall.",
        francais: "L'article était réservé aux abonnés.",
        aussi: ["L'article était payant."],
        note: "A paywall n'a pas d'équivalent français fixé ; « mur payant » ne se dit pas.",
      },
    ],
  },
];
