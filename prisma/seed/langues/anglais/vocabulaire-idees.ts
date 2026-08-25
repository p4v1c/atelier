/**
 * Anglais — le vocabulaire de l'abstrait.
 *
 * Cinq champs de niveau B1 et B2, cinq cours. Ce sont les domaines où l'on
 * comprend tout et où l'on ne sait rien dire : l'argent, le numérique, les
 * émotions, la médecine, la vie publique. Le mot manque au moment précis où
 * il faudrait décider, expliquer ou se défendre.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_VOCABULAIRE_IDEES: LotCartes[] = [
  {
    slug: "en-voc-argent",
    category: "Vocabulaire",
    title: "L'argent, la banque, les prix",
    statement:
      "Un compte, un découvert, un virement, une facture. Le vocabulaire bancaire anglais est plein de mots courts qu'on croit connaître — et de faux amis qui coûtent cher.",
    tip: "A bill est l'addition et la facture ; an invoice est la facture d'entreprise ; a receipt est le ticket de caisse. Trois papiers, trois mots.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Parler d'argent en anglais",
      sections: [
        {
          titre: "Les trois papiers qu'on confond",
          texte:
            "Le français dit « facture » pour trois documents différents ; l'anglais les sépare, et l'erreur se remarque tout de suite dans un courriel professionnel.\n\nA bill, c'est ce qu'on doit payer maintenant : l'addition au restaurant, la facture d'électricité, la note d'hôtel. C'est aussi, en droit, un projet de loi — le contexte tranche sans ambiguïté.\n\nAn invoice, c'est la facture commerciale, celle qu'une entreprise émet et qu'une autre règle à trente jours. Le verbe existe : to invoice a client.\n\nA receipt, c'est la preuve du paiement : le ticket de caisse, le reçu. Attention à la prononciation, le p est muet.\n\nS'y ajoute a quote ou an estimate pour le devis, a statement pour le relevé de compte, et a refund pour le remboursement. Chacun a son verbe : quote for a job, refund a customer.",
          visuels: [
            {
              type: "tableau",
              titre: "Le bon papier, le bon mot",
              colonnes: ["En français", "En anglais", "Quand", "Le verbe"],
              lignes: [
                ["l'addition", "the bill (GB) / the check (US)", "au restaurant", "pay the bill"],
                ["la facture d'entreprise", "an invoice", "à trente jours", "to invoice"],
                ["le ticket de caisse", "a receipt", "après paiement", "keep the receipt"],
                ["le devis", "a quote / an estimate", "avant les travaux", "to quote"],
                ["le relevé", "a statement", "chaque mois", "check your statement"],
                ["le remboursement", "a refund", "après un retour", "to refund"],
              ],
              note: "Aux États-Unis, l'addition du restaurant est the check et non the bill.",
            },
          ],
        },
        {
          titre: "Le compte, le crédit, le découvert",
          texte:
            "La banque anglaise a ses mots, et ils n'ont presque jamais la forme que le français attend.\n\nLe compte courant est a current account au Royaume-Uni, a checking account aux États-Unis. Le compte d'épargne est a savings account partout.\n\nÊtre à découvert se dit be overdrawn, et le découvert autorisé est an overdraft. Le mot n'a pas de rapport avec draft au sens de brouillon, même s'ils partagent une racine.\n\nLe virement est a transfer, et le prélèvement automatique a direct debit au Royaume-Uni, an automatic payment aux États-Unis. Le chèque est a cheque au Royaume-Uni, a check aux États-Unis — même prononciation, deux orthographes.\n\nEnfin les emprunts. A loan est un prêt en général, a mortgage un prêt immobilier, et interest — toujours indénombrable — les intérêts. On dit at three per cent interest, jamais « interests », qui voudrait dire les centres d'intérêt.",
          visuels: [
            {
              type: "comparaison",
              titre: "Faux amis de la caisse",
              colonnes: [
                {
                  titre: "Ce qu'un francophone croit",
                  points: [
                    "actual → actuel",
                    "benefit → bénéfice",
                    "figure → figure",
                    "economy → économie (la science)",
                  ],
                },
                {
                  titre: "Ce que ça veut dire",
                  points: [
                    "actual → réel, effectif",
                    "benefit → avantage, prestation sociale",
                    "figure → le chiffre",
                    "economy → l'économie d'un pays, ou la classe éco",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Dire un prix sans se tromper",
          texte:
            "Trois habitudes suffisent à parler de prix comme un anglophone.\n\nLa première : la monnaie se place avant le chiffre à l'écrit, après à l'oral. On écrit £25, on dit twenty-five pounds. Et l'on ne met pas de pluriel au symbole.\n\nLa deuxième : les prix se lisent par bloc. £3.50 se dit three pounds fifty, ou simply three fifty. $19.99 se dit nineteen ninety-nine. Le mot « cents » est presque toujours omis.\n\nLa troisième : les verbes du prix ne se construisent pas comme en français. Cost n'a pas de complément indirect : it costs twenty euros. Spend prend l'objet dépensé et non l'objet acheté : I spent forty pounds on books. Pay prend la personne ou la somme : pay the plumber, pay fifty euros — et pay FOR l'objet : I paid for the meal.\n\nEnfin, worth est un adjectif et non un verbe : it's worth two hundred euros, it's worth trying. Dire « it worths » est l'une des fautes les plus tenaces chez un francophone.",
        },
      ],
    },
    cartes: [
      {
        etranger: "The invoice is due in thirty days.",
        francais: "La facture est payable à trente jours.",
        note: "An invoice, la facture d'entreprise ; a bill, ce qu'on paie tout de suite. Be due, être exigible.",
      },
      {
        etranger: "Please keep the receipt.",
        francais: "Gardez le ticket de caisse.",
        note: "Receipt, le reçu — le p est muet. Recipe, avec un p qui se prononce, est la recette.",
      },
      {
        etranger: "I'm slightly overdrawn this month.",
        francais: "Je suis légèrement à découvert ce mois-ci.",
        note: "Be overdrawn, être à découvert ; an overdraft, le découvert autorisé.",
      },
      {
        etranger: "They set up a direct debit.",
        francais: "Ils ont mis en place un prélèvement automatique.",
        note: "Direct debit au Royaume-Uni, automatic payment aux États-Unis.",
      },
      {
        etranger: "I spent forty pounds on books.",
        francais: "J'ai dépensé quarante livres en livres.",
        note: "Spend money ON something. La préposition n'est jamais « for » ici.",
      },
      {
        etranger: "Who's paying for the meal?",
        francais: "Qui paie le repas ?",
        note: "Pay FOR une chose, pay quelqu'un sans préposition : pay the plumber.",
      },
      {
        etranger: "It's worth about two hundred euros.",
        francais: "Ça vaut environ deux cents euros.",
        note: "Worth est un adjectif : it IS worth. « It worths » n'existe pas.",
      },
      {
        etranger: "The loan is at three per cent interest.",
        francais: "Le prêt est à trois pour cent d'intérêt.",
        note: "Interest est indénombrable ici. « Interests » désigne les centres d'intérêt.",
      },
      {
        etranger: "They asked for a full refund.",
        francais: "Ils ont demandé un remboursement intégral.",
        note: "Refund, le remboursement d'un achat ; reimburse, le remboursement d'une dépense professionnelle.",
      },
      {
        etranger: "Can you send me a quote?",
        francais: "Pouvez-vous m'envoyer un devis ?",
        note: "A quote ou an estimate. Le mot « devis » n'a pas de cousin anglais.",
      },
    ],
  },

  {
    slug: "en-voc-numerique",
    category: "Vocabulaire",
    title: "Le numérique et l'ordinateur",
    statement:
      "Le français a emprunté ses mots à l'anglais, puis les a détournés. Un « mail », un « spot », un « digital » : trois mots anglais qui ne veulent pas dire ce qu'on croit.",
    tip: "Digital veut dire numérique, jamais « qui concerne les doigts ». Et un « digital » français n'existe pas comme nom en anglais.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les mots du numérique",
      sections: [
        {
          titre: "Les faux anglicismes du français",
          texte:
            "Le français a beaucoup emprunté au vocabulaire informatique anglais, et il l'a souvent tronqué ou déplacé. Les employer tels quels devant un anglophone produit des phrases qui sonnent presque juste, ce qui les rend plus difficiles à corriger.\n\nUn « mail » français est an email en anglais ; mail tout seul désigne le courrier postal. Envoyer un mail se dit send an email.\n\nUn « spot » publicitaire est an advert ou a commercial. Le mot spot en anglais désigne un endroit ou une tache.\n\nLe « digital » français, au sens de numérique, se dit digital en anglais aussi — mais comme adjectif seulement. « Le digital » comme nom n'existe pas : on dit digital technology ou simply digital transformation.\n\nUn « pressing », un « camping », un « parking », un « brushing » et un « relooking » n'existent pas non plus. Ce sont des créations françaises à l'aide de terminaisons anglaises, et un anglophone ne les comprend pas.",
          visuels: [
            {
              type: "tableau",
              titre: "Le mot français, le mot anglais",
              colonnes: ["En français", "Ce qu'on croit", "Le vrai mot anglais"],
              lignes: [
                ["un mail", "a mail", "an email"],
                ["le digital", "the digital", "digital technology"],
                ["un spot publicitaire", "a spot", "an advert / a commercial"],
                ["le replay", "the replay", "catch-up (GB) / on demand"],
                ["un smartphone", "—", "a smartphone (celui-là est juste)"],
                ["une newsletter", "—", "a newsletter (juste aussi)"],
                ["un webinaire", "a webinar", "a webinar (juste)"],
                ["le cloud", "the cloud", "the cloud (juste)"],
              ],
              note: "Tous les emprunts ne sont pas faux : smartphone, newsletter et cloud passent tels quels.",
            },
          ],
        },
        {
          titre: "Les verbes de l'écran",
          texte:
            "Le vocabulaire informatique anglais est fait de verbes courts, et les particules y font tout le travail.\n\nPour ouvrir et fermer : log in et log out — ou sign in et sign out, plus courant sur les sites grand public. Log on to a system, avec to. Et shut down pour éteindre une machine, restart pour la redémarrer.\n\nPour les fichiers : download, télécharger vers soi ; upload, envoyer vers un serveur. Le français dit « télécharger » pour les deux, ce qui produit une confusion permanente. Save pour enregistrer, back up pour sauvegarder au sens de copie de sécurité — deux notions que le français appelle toutes deux « sauvegarder ».\n\nPour les ennuis : crash, planter ; freeze, se figer ; hang, ne plus répondre ; boot up, démarrer. Et troubleshoot, diagnostiquer une panne.\n\nEnfin les gestes : click on, tap on sur un écran tactile, scroll down, swipe left, drag and drop, zoom in.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux sens pour un seul mot français",
              colonnes: [
                {
                  titre: "« télécharger »",
                  points: [
                    "download — du serveur vers soi.",
                    "upload — de soi vers le serveur.",
                    "Le français ne distingue pas.",
                  ],
                },
                {
                  titre: "« sauvegarder »",
                  points: [
                    "save — enregistrer le fichier en cours.",
                    "back up — faire une copie de sécurité.",
                    "Le français ne distingue pas non plus.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le vocabulaire de la sécurité",
          texte:
            "C'est le champ où l'on a le plus besoin d'être précis, et où l'approximation coûte le plus cher.\n\nA password est le mot de passe, en un seul mot. A passphrase est une phrase de passe, plus longue. Two-factor authentication, souvent abrégé 2FA, est l'authentification à deux facteurs.\n\nA breach est une fuite ou une violation de données ; a leak est une fuite au sens large. Hack est le verbe et le nom : they hacked the system, it was a hack.\n\nPhishing, l'hameçonnage, se prononce comme fishing et s'écrit avec ph. Ransomware est le rançongiciel, malware le logiciel malveillant, spyware le logiciel espion.\n\nEnfin, les mots de la confidentialité. Privacy est la vie privée — le faux ami « privauté » n'existe pas. Data protection est la protection des données, et GDPR l'équivalent anglais du RGPD, avec les lettres dans l'autre ordre. Encryption est le chiffrement ; « cryptage » se dit encryption, pas « cryptation ».",
        },
      ],
    },
    cartes: [
      {
        etranger: "I'll send you an email tonight.",
        francais: "Je t'envoie un courriel ce soir.",
        note: "An email. « A mail » désigne le courrier postal, pas le message.",
      },
      {
        etranger: "You need to log in first.",
        francais: "Tu dois d'abord te connecter.",
        note: "Log in ou sign in. Log on TO a system, avec to.",
      },
      {
        etranger: "The file is still uploading.",
        francais: "Le fichier est encore en cours d'envoi.",
        note: "Upload vers le serveur, download vers soi. Le français dit « télécharger » pour les deux.",
      },
      {
        etranger: "Remember to back up your work.",
        francais: "Pense à sauvegarder ton travail.",
        note: "Back up, la copie de sécurité ; save, l'enregistrement du fichier en cours.",
      },
      {
        etranger: "My laptop crashed again.",
        francais: "Mon portable a encore planté.",
        note: "Crash, planter ; freeze, se figer. Laptop, l'ordinateur portable.",
      },
      {
        etranger: "Scroll down to the bottom of the page.",
        francais: "Fais défiler jusqu'en bas de la page.",
        note: "Scroll down, faire défiler ; swipe, balayer du doigt.",
      },
      {
        etranger: "It was a phishing email.",
        francais: "C'était un courriel d'hameçonnage.",
        note: "Phishing s'écrit avec ph et se prononce comme fishing.",
      },
      {
        etranger: "They reported a data breach.",
        francais: "Ils ont signalé une fuite de données.",
        note: "A breach, la violation de données ; a leak, la fuite au sens large.",
      },
      {
        etranger: "Turn on two-factor authentication.",
        francais: "Active l'authentification à deux facteurs.",
        note: "Turn on pour activer une option. Abrégé 2FA à l'écrit.",
      },
      {
        etranger: "The messages are end-to-end encrypted.",
        francais: "Les messages sont chiffrés de bout en bout.",
        note: "Encrypt, chiffrer ; encryption, le chiffrement. « Cryptation » n'existe pas.",
      },
    ],
  },

  {
    slug: "en-voc-emotions",
    category: "Vocabulaire",
    title: "Les émotions et le caractère",
    statement:
      "Bored ou boring, excited ou exciting : une terminaison sépare ce qu'on ressent de ce qu'on provoque. Se tromper fait dire « je suis ennuyeux » au lieu de « je m'ennuie ».",
    tip: "Le participe en -ed dit ce que je ressens ; le participe en -ing dit l'effet que produit la chose. I'm bored, the film is boring.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Dire ce qu'on ressent",
      sections: [
        {
          titre: "La faute la plus coûteuse : -ed contre -ing",
          texte:
            "C'est l'erreur qui identifie un francophone en une phrase, et elle est facile à corriger parce que la règle n'a pas d'exception.\n\nLe participe passé en -ed décrit celui qui éprouve : I'm bored, je m'ennuie ; I'm interested, cela m'intéresse ; I'm surprised, je suis surpris.\n\nLe participe présent en -ing décrit ce qui cause : the film is boring, le film est ennuyeux ; the book is interesting ; the result is surprising.\n\nDire « I am boring » ne veut donc pas dire « je m'ennuie » mais « je suis quelqu'un d'ennuyeux ». La phrase est correcte, ce qui la rend indétectable pour celui qui la prononce — et très remarquable pour celui qui l'entend.\n\nLa liste des couples est longue mais close : bored/boring, interested/interesting, excited/exciting, tired/tiring, surprised/surprising, confused/confusing, embarrassed/embarrassing, frightened/frightening, annoyed/annoying, disappointed/disappointing.",
          visuels: [
            {
              type: "comparaison",
              titre: "Qui ressent, qui provoque",
              colonnes: [
                {
                  titre: "-ED — je ressens",
                  points: [
                    "I'm bored. — je m'ennuie.",
                    "I'm confused. — je ne comprends pas.",
                    "I'm embarrassed. — je suis gêné.",
                  ],
                },
                {
                  titre: "-ING — la chose provoque",
                  points: [
                    "It's boring. — c'est ennuyeux.",
                    "It's confusing. — ce n'est pas clair.",
                    "It's embarrassing. — c'est gênant.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "L'intensité, du tiède au brûlant",
          texte:
            "L'anglais dispose d'adjectifs dits extrêmes, qui contiennent déjà le degré maximal et ne se laissent donc pas modifier par very.\n\nOn ne dit pas « very terrible » ni « very excellent » : ces adjectifs sont déjà au bout de leur échelle. On les renforce par absolutely, utterly ou completely : absolutely terrible, utterly exhausted.\n\nÀ l'inverse, les adjectifs ordinaires prennent very, quite, rather, fairly — mais pas absolutely. On ne dit pas « absolutely good » ; on dit very good, ou l'on remplace l'adjectif par un extrême : absolutely brilliant.\n\nLes couples se retiennent par paires : good et brilliant, bad et awful, tired et exhausted, hungry et starving, cold et freezing, surprised et astonished, angry et furious, big et enormous, small et tiny.\n\nCette mécanique explique aussi pourquoi quite change de sens. Devant un adjectif ordinaire il tempère — quite good, assez bon ; devant un extrême il renforce — quite brilliant, absolument génial.",
          visuels: [
            {
              type: "tableau",
              titre: "L'ordinaire et l'extrême",
              colonnes: ["Ordinaire", "Extrême", "Le renforçateur"],
              lignes: [
                ["good", "brilliant, superb", "absolutely"],
                ["bad", "awful, terrible", "absolutely"],
                ["tired", "exhausted", "utterly"],
                ["hungry", "starving", "absolutely"],
                ["angry", "furious", "absolutely"],
                ["surprised", "astonished", "utterly"],
                ["cold", "freezing", "absolutely"],
                ["big", "enormous, huge", "absolutely"],
              ],
              note: "Very devant un extrême est une faute : very exhausted ne se dit pas.",
            },
          ],
        },
        {
          titre: "Le caractère, et les mots qui jugent",
          texte:
            "Décrire quelqu'un demande de savoir ce que le mot emporte comme jugement, car l'anglais n'a pas de diminutif pour adoucir.\n\nQuelques couples sont proches et opposés en valeur. Confident est un compliment, arrogant ne l'est pas. Determined est positif, stubborn ne l'est pas. Careful est prudent, fussy est tatillon. Generous est généreux, extravagant est dépensier. Quiet est calme, shy est timide — le premier ne juge pas, le second un peu.\n\nD'autres n'ont pas d'équivalent français simple. Reliable, sur qui l'on peut compter ; thoughtful, attentionné ; easy-going, accommodant ; down-to-earth, terre-à-terre au sens positif ; outgoing, sociable.\n\nEt quelques faux amis fréquents : sensible veut dire raisonnable, pas sensible — celui-ci se dit sensitive. Sympathetic veut dire compatissant, pas sympathique — qui se dit nice ou friendly. Enfin, actual veut dire réel, et actually veut dire en fait, jamais actuellement, qui se dit currently.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I'm bored, there's nothing to do.",
        francais: "Je m'ennuie, il n'y a rien à faire.",
        note: "-ed pour celui qui ressent. « I'm boring » voudrait dire que je suis ennuyeux.",
      },
      {
        etranger: "The lecture was really boring.",
        francais: "Le cours magistral était vraiment ennuyeux.",
        note: "-ing pour la chose qui provoque. C'est l'autre moitié du couple.",
      },
      {
        etranger: "She was absolutely exhausted.",
        francais: "Elle était complètement épuisée.",
        note: "Exhausted est un extrême : absolutely, jamais very.",
      },
      {
        etranger: "I'm starving, let's eat something.",
        francais: "Je meurs de faim, mangeons quelque chose.",
        note: "Starving est l'extrême de hungry. L'anglais aime ces paires.",
      },
      {
        etranger: "He's very reliable.",
        francais: "On peut vraiment compter sur lui.",
        note: "Reliable n'a pas d'adjectif français simple : c'est une périphrase de notre côté.",
      },
      {
        etranger: "That's a very sensible decision.",
        francais: "C'est une décision très raisonnable.",
        note: "Sensible veut dire raisonnable. Sensible en français se dit sensitive.",
      },
      {
        etranger: "She was very sympathetic when I told her.",
        francais: "Elle a été très compatissante quand je le lui ai dit.",
        note: "Sympathetic, compatissant. Sympathique se dit nice ou friendly.",
      },
      {
        etranger: "I felt embarrassed in front of everyone.",
        francais: "J'étais gêné devant tout le monde.",
        note: "Embarrassed, gêné ; embarrassing, gênant. Et le mot ne veut jamais dire « embarrassé de paquets ».",
      },
      {
        etranger: "He's stubborn but he means well.",
        francais: "Il est têtu, mais il part d'une bonne intention.",
        note: "Stubborn juge, determined ne juge pas. Le choix du mot est un choix d'opinion.",
      },
      {
        etranger: "They were astonished by the result.",
        francais: "Ils ont été stupéfaits par le résultat.",
        note: "Astonished est l'extrême de surprised. Utterly astonished pour le renforcer.",
      },
    ],
  },

  {
    slug: "en-voc-medecine",
    category: "Vocabulaire",
    title: "Le vocabulaire médical",
    statement:
      "Au-delà de « j'ai mal à la tête » : le diagnostic, l'ordonnance, l'hôpital. Un champ où l'anglais garde deux couches — le mot courant et le mot savant — et où le contexte décide.",
    tip: "Chaque partie du corps a un adjectif savant d'origine grecque ou latine : heart / cardiac, lung / pulmonary, kidney / renal, liver / hepatic.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "L'anglais de la médecine",
      sections: [
        {
          titre: "Deux couches de vocabulaire",
          texte:
            "Comme pour la nourriture, l'anglais garde deux séries de mots : le mot germanique de tous les jours, et le mot gréco-latin du dossier médical. Le patient dit heart attack, le compte rendu dit myocardial infarction.\n\nLa correspondance est régulière et vaut la peine d'être sue, car elle ouvre la moitié du vocabulaire spécialisé. Heart donne cardiac, lung donne pulmonary, kidney donne renal, liver donne hepatic, stomach donne gastric, skin donne dermal, bone donne osseous, blood donne haematic — et donne surtout le préfixe haemo-, orthographié hemo- aux États-Unis.\n\nLe même partage vaut pour les spécialistes : heart doctor n'existe pas, c'est a cardiologist ; skin doctor est a dermatologist ; children's doctor est a paediatrician, pediatrician aux États-Unis.\n\nEn pratique, un patient emploie la couche courante et comprend la couche savante. Un professionnel fait l'inverse. Savoir les deux permet de lire une notice et de parler à un médecin.",
          visuels: [
            {
              type: "tableau",
              titre: "Le mot courant, le mot du dossier",
              colonnes: ["L'organe", "L'adjectif savant", "Le spécialiste"],
              lignes: [
                ["heart", "cardiac", "cardiologist"],
                ["lung", "pulmonary", "pulmonologist"],
                ["kidney", "renal", "nephrologist"],
                ["liver", "hepatic", "hepatologist"],
                ["stomach / gut", "gastric", "gastroenterologist"],
                ["skin", "dermal", "dermatologist"],
                ["bone", "osseous", "orthopaedic surgeon"],
                ["eye", "ocular", "ophthalmologist"],
              ],
              note: "L'orthographe change de rive : paediatric au Royaume-Uni, pediatric aux États-Unis.",
            },
          ],
        },
        {
          titre: "Le parcours de soins, et ses mots",
          texte:
            "Le vocabulaire du système de santé est très différent d'un pays à l'autre, et les mots ne sont pas interchangeables.\n\nAu Royaume-Uni, on est enregistré auprès d'un GP — general practitioner —, le médecin généraliste. On book an appointment, on est référé à un specialist par un referral, et l'hôpital se dit hospital, sans article dans in hospital : she's in hospital, elle est hospitalisée. Les urgences sont A&E, accident and emergency.\n\nAux États-Unis, le généraliste est a primary care physician, les urgences sont the ER, emergency room, et l'article revient : she's in the hospital.\n\nLe reste est commun. A prescription est l'ordonnance ; prescribe est le verbe. A GP surgery est le cabinet médical britannique — surgery ne désigne pas seulement la chirurgie. A ward est un service hospitalier, a nurse une infirmière ou un infirmier, a consultant un médecin hospitalier senior au Royaume-Uni.\n\nEnfin, treatment est indénombrable au sens général, dénombrable pour un traitement précis : a new treatment for asthma.",
          visuels: [
            {
              type: "etapes",
              titre: "Du symptôme à l'ordonnance",
              etapes: [
                { titre: "symptoms", texte: "Ce qu'on ressent : a sore throat, a rash, shortness of breath." },
                { titre: "appointment", texte: "On book an appointment with the GP." },
                { titre: "diagnosis", texte: "Le médecin diagnoses a condition. Le pluriel est diagnoses." },
                { titre: "prescription", texte: "Il prescribes du traitement : tablets, a course of antibiotics." },
                { titre: "follow-up", texte: "Un rendez-vous de contrôle : a follow-up appointment." },
              ],
            },
          ],
        },
        {
          titre: "Les faux amis qui inquiètent pour rien",
          texte:
            "La médecine est pleine de mots trompeurs, et l'erreur y est plus qu'un défaut de style.\n\nA drug est un médicament autant qu'une drogue : prescription drugs sont des médicaments sur ordonnance. Le contexte tranche, mais un francophone entend d'abord la drogue.\n\nA condition est une pathologie — a heart condition, une maladie cardiaque —, pas une condition au sens de circonstance.\n\nIntoxication en anglais veut dire ivresse ; l'intoxication alimentaire se dit food poisoning.\n\nA cure est une guérison ou un remède, pas une cure thermale — celle-ci se dit a spa treatment.\n\nEnfin, deux mots courants trompent. Actually ne veut jamais dire actuellement. Et to assist veut dire aider, pas assister à — qui se dit attend. Un médecin qui attends a conference y assiste ; celui qui assists a surgeon l'aide à opérer.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I'd like to book an appointment with the GP.",
        francais: "Je voudrais prendre rendez-vous avec le généraliste.",
        note: "GP, general practitioner, au Royaume-Uni. Primary care physician aux États-Unis.",
      },
      {
        etranger: "She's in hospital for a few days.",
        francais: "Elle est hospitalisée pour quelques jours.",
        note: "In hospital sans article au Royaume-Uni ; in the hospital aux États-Unis.",
      },
      {
        etranger: "He was prescribed a course of antibiotics.",
        francais: "On lui a prescrit une cure d'antibiotiques.",
        note: "A course of, une cure. Prescribe, prescrire ; a prescription, l'ordonnance.",
      },
      {
        etranger: "The patient has a heart condition.",
        francais: "Le patient souffre d'une maladie cardiaque.",
        note: "A condition, une pathologie. Le mot ne parle jamais de circonstances.",
      },
      {
        etranger: "It was just food poisoning.",
        francais: "Ce n'était qu'une intoxication alimentaire.",
        note: "Food poisoning. Intoxication tout court veut dire ivresse en anglais.",
      },
      {
        etranger: "The side effects wore off quickly.",
        francais: "Les effets secondaires se sont dissipés vite.",
        note: "Side effects, les effets secondaires ; wear off, se dissiper.",
      },
      {
        etranger: "They took a blood sample.",
        francais: "Ils ont fait une prise de sang.",
        note: "A blood sample, l'échantillon ; a blood test, l'analyse.",
      },
      {
        etranger: "He was referred to a specialist.",
        francais: "Il a été adressé à un spécialiste.",
        note: "A referral, la lettre d'adressage. Le mot n'a pas d'équivalent français simple.",
      },
      {
        etranger: "She works on the cardiac ward.",
        francais: "Elle travaille dans le service de cardiologie.",
        note: "A ward, un service hospitalier. Et cardiac est l'adjectif savant de heart.",
      },
      {
        etranger: "These are prescription drugs.",
        francais: "Ce sont des médicaments sur ordonnance.",
        note: "Drug veut dire médicament autant que drogue. Le contexte tranche.",
      },
    ],
  },

  {
    slug: "en-voc-politique",
    category: "Vocabulaire",
    title: "La politique et la société",
    statement:
      "Voter, débattre, légiférer. Un champ où presque tous les mots ressemblent au français et où presque aucun ne se construit pareil — et où les institutions ne se recouvrent pas.",
    tip: "A politician n'est pas « un politicien » au sens péjoratif : le mot est neutre en anglais. Et policy est une politique publique, politics la vie politique.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les mots de la vie publique",
      sections: [
        {
          titre: "Policy, politics, political : trois mots pour un seul",
          texte:
            "Le français dit « politique » pour trois choses différentes, et l'anglais les distingue. C'est la première chose à installer.\n\nPolitics, toujours au pluriel de forme mais construit au singulier, désigne la vie politique et son jeu : politics is a dirty business. Le mot est légèrement péjoratif quand il désigne les manœuvres : office politics, les petites guerres de bureau.\n\nA policy est une ligne de conduite, une politique publique ou d'entreprise : foreign policy, the company's privacy policy. Le pluriel policies est courant.\n\nPolitical est l'adjectif, et a politician la personne — un mot neutre en anglais, là où « politicien » a pris en français une couleur méprisante. Pour l'homme d'État, l'anglais dit statesman, nettement plus élogieux.\n\nDeux mots complètent la série : a policymaker, celui qui décide de la politique publique, et policy-making, le processus.",
          visuels: [
            {
              type: "comparaison",
              titre: "Trois « politiques » en français, trois mots en anglais",
              colonnes: [
                {
                  titre: "Ce qu'on veut dire",
                  points: [
                    "le jeu politique",
                    "une politique publique",
                    "l'adjectif",
                    "la personne",
                  ],
                },
                {
                  titre: "Le mot anglais",
                  points: [
                    "politics (verbe au singulier)",
                    "a policy, policies",
                    "political",
                    "a politician (neutre)",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les institutions ne se recouvrent pas",
          texte:
            "Traduire une institution mot à mot produit presque toujours un contresens, parce que les systèmes ne se correspondent pas.\n\nAu Royaume-Uni, Parliament comprend the House of Commons, élue, et the House of Lords, non élue. Le chef du gouvernement est the Prime Minister ; son gouvernement est the Government, et l'équipe restreinte the Cabinet. L'opposition officielle a son propre gouvernement fantôme, the Shadow Cabinet, sans équivalent français.\n\nAux États-Unis, Congress comprend the House of Representatives et the Senate. Le gouvernement au sens français — l'exécutif — se dit the administration : the Biden administration. Employer government pour désigner l'équipe au pouvoir aux États-Unis est une erreur fréquente ; là-bas, government désigne l'État tout entier.\n\nEnfin, a bill devient an act une fois voté, et a law est la règle qui en résulte. To pass a bill, to enact a law, to repeal a law — trois verbes qui ne se remplacent pas.",
          visuels: [
            {
              type: "tableau",
              titre: "Deux systèmes, deux vocabulaires",
              colonnes: ["En français", "Royaume-Uni", "États-Unis"],
              lignes: [
                ["le parlement", "Parliament", "Congress"],
                ["la chambre basse", "House of Commons", "House of Representatives"],
                ["la chambre haute", "House of Lords", "the Senate"],
                ["le chef du gouvernement", "the Prime Minister", "the President"],
                ["le gouvernement", "the Government", "the administration"],
                ["le député", "an MP", "a Representative"],
                ["la circonscription", "a constituency", "a district"],
                ["le projet de loi", "a bill", "a bill"],
              ],
            },
          ],
        },
        {
          titre: "Le vocabulaire du débat",
          texte:
            "Les mots qui servent à discuter d'un sujet public sont les mêmes dans la presse, en réunion et à l'oral d'examen. Ils valent d'être appris ensemble.\n\nPour poser un sujet : an issue, a matter, a topic et a problem ne se valent pas — la série « Les mots de la pensée abstraite » les sépare un à un. Retiens ici que problem n'est jamais neutre : il annonce qu'il y a quelque chose à réparer.\n\nPour prendre position : argue that, soutenir que ; claim that, prétendre que, avec un soupçon de doute ; point out that, faire remarquer ; acknowledge that, reconnaître ; concede that, concéder.\n\nPour nuancer : arguably, on peut soutenir que ; admittedly, il faut l'admettre ; nevertheless, néanmoins ; whereas, tandis que.\n\nEt trois faux amis à surveiller. To support veut dire soutenir, pas supporter au sens d'endurer, qui se dit put up with. To demand veut dire exiger, pas demander, qui se dit ask. Eventually veut dire finalement, jamais éventuellement, qui se dit possibly.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Foreign policy was the main issue.",
        francais: "La politique étrangère était le principal enjeu.",
        note: "A policy, une politique publique ; politics, la vie politique. An issue, un enjeu débattu.",
      },
      {
        etranger: "The bill was passed by a narrow majority.",
        francais: "Le projet de loi a été adopté à une courte majorité.",
        note: "Pass a bill, adopter. Une fois voté, le bill devient an act.",
      },
      {
        etranger: "She was elected as an MP last year.",
        francais: "Elle a été élue députée l'an dernier.",
        note: "MP, Member of Parliament, au Royaume-Uni. Representative aux États-Unis.",
      },
      {
        etranger: "Turnout was lower than expected.",
        francais: "La participation a été plus faible que prévu.",
        note: "Turnout, le taux de participation. Le mot n'a pas de cousin français.",
      },
      {
        etranger: "The government announced new measures.",
        francais: "Le gouvernement a annoncé de nouvelles mesures.",
        note: "Government au Royaume-Uni ; aux États-Unis, l'équipe au pouvoir se dit administration.",
      },
      {
        etranger: "Many people support the reform.",
        francais: "Beaucoup de gens soutiennent la réforme.",
        note: "Support, soutenir. Supporter au sens d'endurer se dit put up with.",
      },
      {
        etranger: "The unions demanded a pay rise.",
        francais: "Les syndicats ont exigé une augmentation.",
        note: "Demand veut dire exiger. Demander se dit ask.",
      },
      {
        etranger: "He eventually agreed to resign.",
        francais: "Il a fini par accepter de démissionner.",
        note: "Eventually, finalement ; possibly, éventuellement. Le faux ami le plus coûteux du champ.",
      },
      {
        etranger: "It is arguably the best solution.",
        francais: "C'est sans doute la meilleure solution.",
        note: "Arguably nuance : on peut le soutenir, ce n'est pas établi.",
      },
      {
        etranger: "The law was repealed in 2019.",
        francais: "La loi a été abrogée en 2019.",
        note: "Repeal, abroger ; enact, promulguer ; amend, modifier. Trois verbes distincts.",
      },
    ],
  },
];
