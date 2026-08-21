/**
 * Anglais — parler, pas seulement écrire.
 *
 * Suite de la cinquième passe. Ce qui reste invisible dans un manuel, c'est ce
 * qui fait qu'une conversation tient : les mots qui n'apportent aucune
 * information mais règlent le tour de parole, la manière de se reprendre, celle
 * de nuancer un refus, celle de lancer une anecdote.
 *
 * Un apprenant qui les ignore parle un anglais correct et froid, où chaque
 * phrase tombe sans transition. Ils s'apprennent tard parce qu'ils ne se
 * traduisent pas : « mind you » n'a pas d'équivalent, il a une fonction.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_ORAL_INTERACTION: LotCartes[] = [
  {
    slug: "en-marqueurs-oral",
    category: "Expressions",
    title: "Les petits mots qui règlent la parole",
    statement:
      "Well, actually, I mean, mind you, then again. Ils ne veulent rien dire et ils font tout : ils annoncent un désaccord, une reprise, une réserve.",
    tip: "Actually ne veut pas dire actuellement : il annonce une correction polie. Le faux ami est le plus fréquent de tous.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Well, it depends.",
        francais: "Eh bien, ça dépend.",
        note: "Well en tête annonce une réponse nuancée, jamais un oui franc.",
      },
      {
        etranger: "Actually, it was the other way round.",
        francais: "En fait, c'était l'inverse.",
        note: "Actually corrige poliment. Il ne veut jamais dire actuellement.",
      },
      {
        etranger: "I mean, it's not that simple.",
        francais: "Enfin, ce n'est pas si simple.",
        note: "I mean annonce une reformulation de ce qu'on vient de dire.",
      },
      {
        etranger: "Mind you, he did warn us.",
        francais: "Cela dit, il nous avait prévenus.",
        note: "Mind you introduit une réserve qui nuance ce qu'on vient d'affirmer.",
      },
      {
        etranger: "Then again, she might be right.",
        francais: "Ceci dit, elle a peut-être raison.",
        note: "Then again annonce un retournement de son propre point de vue.",
      },
      {
        etranger: "Anyway, where were we?",
        francais: "Bref, où en étions-nous ?",
        note: "Anyway clôt une digression et ramène au sujet.",
      },
      {
        etranger: "As it happens, I was there.",
        francais: "Il se trouve que j'y étais.",
        note: "As it happens introduit une coïncidence utile à l'argument.",
      },
      {
        etranger: "To be fair, he had no choice.",
        francais: "Pour être juste, il n'avait pas le choix.",
        note: "To be fair concède un point à l'adversaire avant de poursuivre.",
      },
      {
        etranger: "Right, let's get started.",
        francais: "Bon, on s'y met.",
        note: "Right en tête ouvre une séquence d'action. Très britannique.",
      },
      {
        etranger: "You know what I mean?",
        francais: "Tu vois ce que je veux dire ?",
        note: "Vérification du contact, pas une vraie question. On n'attend pas de réponse.",
      },
    ],
  },

  {
    slug: "en-hesitation",
    category: "Expressions",
    title: "Hésiter et se reprendre",
    statement:
      "Sort of, kind of, or rather, what I'm trying to say. Un locuteur natif se reprend sans arrêt, et ces formules sont ce qui rend l'hésitation acceptable.",
    tip: "Sort of et kind of atténuent tout ce qui suit : it's sort of complicated. À l'écrit ils sont à proscrire, à l'oral ils sont partout.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "It's sort of complicated.",
        francais: "C'est un peu compliqué.",
        note: "Sort of atténue. Se prononce presque sorta à l'oral rapide.",
      },
      {
        etranger: "Or rather, I should say two.",
        francais: "Ou plutôt, je devrais dire deux.",
        note: "Or rather corrige ce qu'on vient de dire, sans le renier.",
      },
      {
        etranger: "What I'm trying to say is this.",
        francais: "Ce que j'essaie de dire, c'est ceci.",
        note: "La formule gagne du temps et annonce une reformulation.",
      },
      {
        etranger: "Let me put it another way.",
        francais: "Je vais le dire autrement.",
        note: "Put it another way, reformuler. Le verbe put suffit à dire « exprimer ».",
      },
      {
        etranger: "How shall I put it?",
        francais: "Comment dire ?",
        note: "La question est rhétorique : on n'attend aucune réponse.",
      },
      {
        etranger: "It's on the tip of my tongue.",
        francais: "Je l'ai sur le bout de la langue.",
        note: "L'image est identique dans les deux langues.",
      },
      {
        etranger: "Give me a second.",
        francais: "Laisse-moi une seconde.",
        note: "La formule pour prendre le temps de réfléchir sans céder la parole.",
      },
      {
        etranger: "I've lost my train of thought.",
        francais: "J'ai perdu le fil de mes idées.",
        note: "A train of thought, un fil de pensée. L'anglais met un train, le français un fil.",
      },
      {
        etranger: "Where was I?",
        francais: "Où en étais-je ?",
        note: "La formule pour reprendre après une interruption.",
      },
      {
        etranger: "That's not quite what I meant.",
        francais: "Ce n'est pas tout à fait ce que je voulais dire.",
        note: "Not quite atténue le désaveu. Not at all serait beaucoup plus sec.",
      },
    ],
  },

  {
    slug: "en-telephone-service",
    category: "Vie quotidienne",
    title: "Au téléphone et au guichet",
    statement:
      "Hold on, put you through, bear with me, get back to you. Le service client anglophone parle une langue à lui, faite de formules qu'on entend cent fois.",
    tip: "Bear with me veut dire « patientez » et n'a rien à voir avec un ours. C'est l'une des formules les plus employées d'un centre d'appels.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Hold on a moment, please.",
        francais: "Un instant, s'il vous plaît.",
        note: "Hold on, patienter au téléphone. Hold the line est plus formel.",
      },
      {
        etranger: "I'll put you through.",
        francais: "Je vous passe le service.",
        note: "Put someone through, transférer un appel. La particule ne se déplace pas.",
      },
      {
        etranger: "Bear with me a second.",
        francais: "Patientez un instant.",
        note: "Bear with someone, faire preuve de patience envers. Rien à voir avec l'ours.",
      },
      {
        etranger: "I'll get back to you tomorrow.",
        francais: "Je vous rappelle demain.",
        note: "Get back to someone, recontacter. Vaut pour le téléphone comme pour le courriel.",
      },
      {
        etranger: "Could you spell that for me?",
        francais: "Pourriez-vous me l'épeler ?",
        note: "Spell, épeler. La question revient dès qu'un nom est en jeu.",
      },
      {
        etranger: "You've reached the wrong department.",
        francais: "Vous n'êtes pas au bon service.",
        note: "Reach, joindre. Le passif est ici la forme naturelle.",
      },
      {
        etranger: "Can I take a message?",
        francais: "Puis-je prendre un message ?",
        note: "Take a message, prendre un message. Leave a message pour celui qui appelle.",
      },
      {
        etranger: "The line is engaged.",
        francais: "La ligne est occupée.",
        note: "Engaged en anglais britannique, busy en américain.",
      },
      {
        etranger: "I'm calling about my order.",
        francais: "J'appelle au sujet de ma commande.",
        note: "Call about something. La formule ouvre presque tout appel de service.",
      },
      {
        etranger: "Sorry, I didn't catch that.",
        francais: "Pardon, je n'ai pas saisi.",
        note: "Catch, saisir ce qui a été dit. Beaucoup plus naturel que understand ici.",
      },
    ],
  },

  {
    slug: "en-desaccord-poli",
    category: "Expressions",
    title: "Dire non sans le dire",
    statement:
      "I see your point, but. I'm not sure I follow. That's one way of looking at it. L'anglais professionnel refuse sans jamais employer le mot no.",
    tip: "Plus la formule est longue et polie, plus le refus est ferme. « With respect » annonce presque toujours une contradiction frontale.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I see your point, but there's a catch.",
        francais: "Je comprends, mais il y a un problème.",
        note: "I see your point concède la forme sans céder le fond.",
      },
      {
        etranger: "I'm not entirely convinced.",
        francais: "Je ne suis pas complètement convaincu.",
        note: "Not entirely convinced signale poliment que l'argument ne tient pas.",
      },
      {
        etranger: "I'd be cautious about that.",
        francais: "Je serais prudent là-dessus.",
        note: "Be cautious about, formule de réserve. Elle signale un désaccord sans le nommer.",
      },
      {
        etranger: "That may be so, but.",
        francais: "C'est possible, mais.",
        note: "May be so concède l'hypothèse pour mieux la contourner.",
      },
      {
        etranger: "I hear you, but the timing is wrong.",
        francais: "J'entends bien, mais le moment est mal choisi.",
        note: "I hear you accuse réception sans accord. Ce n'est jamais un oui.",
      },
      {
        etranger: "Let's agree to differ.",
        francais: "Restons-en à nos positions.",
        aussi: ["Convenons que nous ne sommes pas d'accord."],
        note: "Agree to differ ou agree to disagree : clore poliment un désaccord.",
      },
      {
        etranger: "I'd rather not, if that's all right.",
        francais: "Je préférerais éviter, si cela ne dérange pas.",
        note: "I'd rather not est le refus poli standard. Le if adoucit encore.",
      },
      {
        etranger: "That's not really my call.",
        francais: "Ce n'est pas vraiment à moi d'en décider.",
        note: "Someone's call, la décision qui relève de quelqu'un. Refuser sans dire non.",
      },
      {
        etranger: "I'm afraid that won't be possible.",
        francais: "Je crains que ce ne soit pas possible.",
        note: "I'm afraid annonce une mauvaise nouvelle. Il ne dit aucune peur.",
      },
      {
        etranger: "Can we come back to that?",
        francais: "Peut-on y revenir plus tard ?",
        note: "Come back to something, y revenir. Souvent une façon de ne jamais y revenir.",
      },
    ],
  },

  {
    slug: "en-small-talk",
    category: "Vie quotidienne",
    title: "La conversation de politesse",
    statement:
      "How's it going? Not too bad. Long time no see. Le small talk anglophone a des formules obligatoires, et y répondre littéralement met mal à l'aise.",
    tip: "« How are you? » n'est pas une question sur votre santé : c'est une salutation. La réponse attendue est brève et positive, suivie de la même question.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "How's it going?",
        francais: "Comment ça va ?",
        note: "Salutation, pas question. La réponse attendue tient en trois mots.",
      },
      {
        etranger: "Not too bad, thanks. You?",
        francais: "Pas trop mal, merci. Et toi ?",
        note: "La réponse type : brève, modérément positive, et on renvoie la question.",
      },
      {
        etranger: "Long time no see.",
        francais: "Ça fait un bail.",
        note: "Formule figée et volontairement agrammaticale. Très courante.",
      },
      {
        etranger: "How was your weekend?",
        francais: "Ton week-end s'est bien passé ?",
        note: "La question rituelle du lundi matin dans tout bureau anglophone.",
      },
      {
        etranger: "Lovely weather, isn't it?",
        francais: "Beau temps, n'est-ce pas ?",
        note: "Le cliché est réel : la météo ouvre la moitié des conversations britanniques.",
      },
      {
        etranger: "I won't keep you.",
        francais: "Je ne vais pas te retenir.",
        note: "La formule qui annonce la fin d'une conversation sans la brusquer.",
      },
      {
        etranger: "Give my regards to your family.",
        francais: "Transmets mes amitiés à ta famille.",
        note: "Give my regards to, formule de clôture polie et un peu formelle.",
      },
      {
        etranger: "We must catch up soon.",
        francais: "Il faut qu'on se voie bientôt.",
        note: "Catch up, se retrouver pour prendre des nouvelles. L'engagement est vague à dessein.",
      },
      {
        etranger: "Sorry, I've got to run.",
        francais: "Désolé, il faut que j'y aille.",
        note: "Have got to run, la sortie polie. Dash se dit aussi.",
      },
      {
        etranger: "Nice to see you again.",
        francais: "Content de te revoir.",
        note: "Nice to see you pour quelqu'un qu'on connaît ; nice to meet you la première fois.",
      },
    ],
  },

  {
    slug: "en-raconter",
    category: "Expressions",
    title: "Raconter une anecdote",
    statement:
      "So there I was. The thing is. To cut a long story short. Une histoire orale a une charpente, et ces formules en sont les poutres.",
    tip: "Le présent narratif est très employé à l'oral anglais : « so I'm standing there and this guy comes up ». Il rend le récit vivant, même au passé.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "So there I was, in the middle of nowhere.",
        francais: "Me voilà donc au milieu de nulle part.",
        note: "So there I was ouvre une anecdote. La formule est presque rituelle.",
      },
      {
        etranger: "The thing is, nobody had told me.",
        francais: "Le problème, c'est que personne ne m'avait prévenu.",
        note: "The thing is annonce le nœud de l'histoire.",
      },
      {
        etranger: "To cut a long story short, we missed it.",
        francais: "Bref, on l'a raté.",
        note: "To cut a long story short abrège. Long story short se dit aussi, plus familier.",
      },
      {
        etranger: "You'll never guess what happened.",
        francais: "Tu ne devineras jamais ce qui s'est passé.",
        note: "L'amorce qui garantit l'attention. Elle n'attend aucune tentative de réponse.",
      },
      {
        etranger: "Next thing I know, he's gone.",
        francais: "Et là, sans que je comprenne, il avait disparu.",
        note: "Next thing I know + présent : le récit bascule au présent pour l'effet.",
      },
      {
        etranger: "It turned out to be a mistake.",
        francais: "Il s'est avéré que c'était une erreur.",
        note: "Turn out to be, se révéler être. Formule de dénouement.",
      },
      {
        etranger: "Anyway, that's when it clicked.",
        francais: "Bref, c'est là que ça a fait tilt.",
        note: "Click, comprendre soudain. Le verbe est familier et très employé.",
      },
      {
        etranger: "And that was that.",
        francais: "Et voilà, c'était réglé.",
        note: "That was that clôt un récit sans commentaire. La formule est figée.",
      },
      {
        etranger: "Believe it or not, it worked.",
        francais: "Crois-le ou non, ça a marché.",
        note: "Believe it or not annonce l'invraisemblable qui suit.",
      },
      {
        etranger: "I still can't get over it.",
        francais: "Je n'en reviens toujours pas.",
        note: "Get over something, s'en remettre. La négation dit l'étonnement durable.",
      },
    ],
  },

  {
    slug: "en-instructions",
    category: "Vie quotidienne",
    title: "Expliquer comment faire",
    statement:
      "Make sure, be careful not to, whatever you do. Donner une consigne en anglais demande de choisir entre l'ordre, le conseil et l'avertissement.",
    tip: "Make sure + proposition, jamais + infinitif : make sure you lock the door. La faute est fréquente et s'entend tout de suite.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Make sure you lock the door.",
        francais: "N'oublie pas de fermer à clé.",
        note: "Make sure + proposition. Jamais « make sure to lock » en anglais britannique soigné.",
      },
      {
        etranger: "Be careful not to press that.",
        francais: "Attention à ne pas appuyer là-dessus.",
        note: "Be careful not to + infinitif. La négation se place avant to.",
      },
      {
        etranger: "Whatever you do, don't refresh.",
        francais: "Surtout, ne recharge pas la page.",
        note: "Whatever you do renforce l'interdiction qui suit.",
      },
      {
        etranger: "First off, turn it off at the wall.",
        francais: "D'abord, coupe l'alimentation au mur.",
        note: "First off, familier pour first of all. At the wall dit la prise murale.",
      },
      {
        etranger: "Give it a good shake.",
        francais: "Secoue-le bien.",
        note: "Give something a + nom : le verbe support rend l'instruction plus douce qu'un impératif.",
      },
      {
        etranger: "Leave it to cool for ten minutes.",
        francais: "Laisse refroidir dix minutes.",
        note: "Leave something to + infinitif : laisser faire le temps.",
      },
      {
        etranger: "You might want to save first.",
        francais: "Tu ferais peut-être bien d'enregistrer d'abord.",
        note: "You might want to est un conseil déguisé en suggestion. Très employé au travail.",
      },
      {
        etranger: "Don't bother with that step.",
        francais: "Ne t'embête pas avec cette étape.",
        note: "Don't bother with, ne pas se donner la peine. Familier et courant.",
      },
      {
        etranger: "Once it beeps, you're done.",
        francais: "Dès que ça sonne, c'est fini.",
        note: "Once + présent pour une condition temporelle future. When se dirait aussi.",
      },
      {
        etranger: "Just follow the on-screen prompts.",
        francais: "Suis simplement les indications à l'écran.",
        note: "A prompt, une invite affichée. Le mot est passé du théâtre à l'informatique.",
      },
    ],
  },

  {
    slug: "en-negocier-quotidien",
    category: "Vie quotidienne",
    title: "Demander, obtenir, réclamer",
    statement:
      "Would you mind, any chance, I was wondering if. Obtenir quelque chose en anglais demande une politesse indirecte, et la formule directe passe pour brusque.",
    tip: "Plus la demande est indirecte, plus elle est polie. « I was wondering if you could » est le degré le plus élevé de la vie courante.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Would you mind moving up a bit?",
        francais: "Cela vous ennuierait de vous décaler un peu ?",
        note: "Would you mind + gérondif. Répondre « yes » veut dire refuser : le piège est réel.",
      },
      {
        etranger: "Any chance you could help?",
        francais: "Tu pourrais m'aider, par hasard ?",
        note: "Any chance + proposition, familier. La formule ellipse le « is there ».",
      },
      {
        etranger: "I was wondering if you could take a look.",
        francais: "Je me demandais si tu pourrais y jeter un œil.",
        note: "I was wondering if : le degré de politesse le plus élevé de la vie courante.",
      },
      {
        etranger: "Is there any way we could reschedule?",
        francais: "Y aurait-il moyen de déplacer le rendez-vous ?",
        note: "Is there any way, formule d'ouverture d'une demande difficile.",
      },
      {
        etranger: "I'd appreciate it if you could confirm.",
        francais: "Je vous saurais gré de confirmer.",
        note: "I'd appreciate it if : le it est obligatoire, et souvent oublié.",
      },
      {
        etranger: "Do you think you could manage it?",
        francais: "Penses-tu pouvoir y arriver ?",
        note: "Manage, y arriver malgré la difficulté. Le verbe suppose un obstacle.",
      },
      {
        etranger: "I'd like to make a complaint.",
        francais: "Je voudrais faire une réclamation.",
        note: "Make a complaint, réclamer. File a complaint est plus administratif.",
      },
      {
        etranger: "Could I get a refund?",
        francais: "Puis-je être remboursé ?",
        note: "Get a refund, être remboursé. Refund est nom et verbe.",
      },
      {
        etranger: "That's not what I ordered.",
        francais: "Ce n'est pas ce que j'ai commandé.",
        note: "La formule est directe sans être impolie : elle constate un fait.",
      },
      {
        etranger: "Could you knock something off?",
        francais: "Pourriez-vous faire un geste sur le prix ?",
        note: "Knock something off, réduire le prix. Familier mais courant sur un marché.",
      },
    ],
  },
];
