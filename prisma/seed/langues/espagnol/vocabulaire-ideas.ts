/**
 * Espagnol — le vocabulaire de l'abstrait.
 *
 * Cinq champs de niveau B1 et B2, cinq cours. L'argent, le numérique, les
 * émotions, la médecine, la vie publique : les domaines où l'on comprend le
 * journal et où l'on ne sait pas se défendre au guichet.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_VOCABULAIRE_IDEAS: LotCartes[] = [
  {
    slug: "es-voc-dinero",
    category: "Vocabulaire",
    title: "L'argent, la banque, les prix",
    statement:
      "Un compte, un découvert, un virement, une facture. Le vocabulaire bancaire espagnol est régulier — et truffé de faux amis qui font signer autre chose que prévu.",
    tip: "La factura est la facture, el recibo le reçu, la cuenta l'addition et le compte. Trois papiers, trois mots, et une seule confusion possible.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Parler d'argent en espagnol",
      sections: [
        {
          titre: "Les papiers et les comptes",
          texte:
            "La cuenta a deux sens qu'il faut tenir ensemble : l'addition au restaurant et le compte en banque. Le contexte tranche sans peine, mais le mot revient constamment.\n\nLa factura est la facture — d'électricité, d'entreprise, de téléphone. El recibo est le reçu ou la quittance ; el tique ou el ticket, le ticket de caisse. El presupuesto est le devis en Espagne, la cotización en Amérique latine.\n\nCôté banque : la cuenta corriente est le compte courant, la cuenta de ahorro le compte d'épargne. Une transferencia est un virement ; una domiciliación, un prélèvement automatique ; un ingreso, un versement ; un reintegro, un retrait.\n\nÊtre à découvert se dit estar en números rojos — littéralement « être dans les chiffres rouges » — ou tener la cuenta en descubierto, plus technique.\n\nPour l'emprunt : un préstamo est un prêt, una hipoteca un prêt immobilier, los intereses les intérêts, el plazo l'échéance et la mensualité. Et amortizar veut dire rembourser un capital — et aussi amortir au sens comptable, comme en français.",
          visuels: [
            {
              type: "tableau",
              titre: "Le bon papier, le bon mot",
              colonnes: ["En français", "En espagnol", "Quand"],
              lignes: [
                ["l'addition", "la cuenta", "au restaurant"],
                ["le compte en banque", "la cuenta", "le même mot"],
                ["la facture", "la factura", "électricité, entreprise"],
                ["le reçu", "el recibo", "après paiement"],
                ["le ticket de caisse", "el tique / el ticket", "au magasin"],
                ["le devis", "el presupuesto (ES)", "avant les travaux"],
                ["le devis", "la cotización (AL)", "idem, Amérique"],
                ["le virement", "la transferencia", "d'un compte à l'autre"],
                ["le prélèvement", "la domiciliación", "automatique, mensuel"],
              ],
            },
          ],
        },
        {
          titre: "Les verbes du prix",
          texte:
            "Les verbes de l'argent espagnols ne se construisent pas comme leurs équivalents français, et trois d'entre eux méritent d'être appris avec leur préposition.\n\nCostar est impersonnel et s'accorde avec la chose : cuesta veinte euros, cuestan veinte euros. Il se conjugue comme gustar quand on ajoute la personne : me cuesta mucho, cela me coûte beaucoup — au sens propre comme au figuré.\n\nGastar veut dire dépenser : gasté cuarenta euros en libros, avec en et non « para ». Le verbe veut aussi dire user : gastar los zapatos.\n\nPagar prend la chose sans préposition et la personne avec a : pagar la cuenta, pagar al fontanero. Pagar por s'emploie quand on insiste sur la contrepartie : pagué cien euros por esa silla.\n\nAhorrar, économiser ; deber, devoir de l'argent ; cobrar, encaisser ou percevoir un salaire ; ingresar, verser sur un compte ; sacar dinero, retirer.\n\nEnfin, valer est le verbe de la valeur : vale cien euros. Et ¿cuánto vale? est aussi courant que ¿cuánto cuesta? pour demander un prix en Espagne.",
          visuels: [
            {
              type: "comparaison",
              titre: "Faux amis de la caisse",
              colonnes: [
                {
                  titre: "Ce qu'un francophone croit",
                  points: [
                    "la renta → la rente",
                    "el salario → le salaire (juste)",
                  ],
                },
                {
                  titre: "Ce que ça veut dire",
                  points: [
                    "la renta → le revenu, ou le loyer en Amérique",
                    "el salario → le salaire, registre plus formel",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Dire un prix, et négocier",
          texte:
            "Trois habitudes suffisent pour parler d'argent naturellement.\n\nLa première : la monnaie se place après le chiffre, et se prononce entièrement. Veinte euros, tres mil pesos, quinientas coronas. Les décimales se lisent avec con : tres euros con cincuenta, ou plus simplement tres cincuenta.\n\nLa deuxième : les expressions de la dépense. Salir caro, revenir cher ; estar por las nubes, être hors de prix ; costar un ojo de la cara, coûter les yeux de la tête — l'image est presque la même qu'en français ; estar tirado, être donné, coûter trois fois rien ; una ganga, une bonne affaire.\n\nLa troisième : les formules du marchandage, courantes sur un marché latino-américain et rares en Espagne. ¿Me hace un descuento?, ¿cuál es su último precio?, ¿me lo deja en…? Le verbe dejar y sert de « faire un prix ».\n\nEt une nuance à connaître : barato dit d'abord le prix bas, mais glisse facilement vers la piètre qualité, comme « bon marché » en français. Económico ne dit que le prix ; de mala calidad, ou familièrement cutre en Espagne, ne disent que la qualité.",
        },
      ],
    },
    cartes: [
      {
        etranger: "¿Nos trae la cuenta, por favor?",
        francais: "Vous nous apportez l'addition, s'il vous plaît ?",
        note: "La cuenta, l'addition et le compte en banque. Le contexte tranche sans peine.",
      },
      {
        etranger: "La factura llega cada dos meses.",
        francais: "La facture arrive tous les deux mois.",
        note: "La factura, la facture ; el recibo, le reçu ; el tique, le ticket de caisse.",
      },
      {
        etranger: "Estoy en números rojos otra vez.",
        francais: "Je suis encore à découvert.",
        note: "Estar en números rojos : l'image du chiffre rouge sur le relevé.",
      },
      {
        etranger: "Gasté cuarenta euros en libros.",
        francais: "J'ai dépensé quarante euros en livres.",
        note: "Gastar EN, jamais « para ». Et gastar veut aussi dire user.",
      },
      {
        etranger: "¿Cuánto vale este cuadro?",
        francais: "Combien vaut ce tableau ?",
        aussiEtranger: ["¿Cuánto cuesta este cuadro?"],
        note: "¿Cuánto vale? est aussi courant que ¿cuánto cuesta? en Espagne.",
      },
      {
        etranger: "Cobro a final de mes.",
        francais: "Je suis payé en fin de mois.",
        note: "Cobrar, percevoir son salaire ou encaisser. El sueldo, le salaire ; la nómina, la fiche de paie.",
      },
      {
        etranger: "Los pisos están por las nubes.",
        francais: "Les appartements sont hors de prix.",
        note: "Estar por las nubes se dit des prix : littéralement « être dans les nuages », au sens de « monté très haut ». À ne pas confondre avec estar EN las nubes, être dans la lune.",
      },
      {
        etranger: "Pagué cien euros por esa silla.",
        francais: "J'ai payé cent euros pour cette chaise.",
        note: "Pagar POR quand on insiste sur la contrepartie ; pagar la cuenta sans préposition.",
      },
      {
        etranger: "Fue una auténtica ganga.",
        francais: "C'était une vraie bonne affaire.",
        note: "Una ganga, une affaire. Barato dit le prix bas, et souvent, par glissement, la piètre qualité.",
      },
      {
        etranger: "Hicimos una transferencia ayer.",
        francais: "Nous avons fait un virement hier.",
        note: "La transferencia, le virement ; la domiciliación, le prélèvement automatique.",
      },
    ],
  },

  {
    slug: "es-voc-tecnologia",
    category: "Vocabulaire",
    title: "Le numérique et l'ordinateur",
    statement:
      "L'espagnol a traduit ce que le français a emprunté : ratón pour souris, ordenador pour ordinateur, correo electrónico pour courriel. Un champ où il faut désapprendre l'anglais.",
    tip: "Ordenador en Espagne, computadora en Amérique latine. Aucun des deux ne comprend spontanément le mot de l'autre.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les mots du numérique",
      sections: [
        {
          titre: "Une langue qui traduit",
          texte:
            "Là où le français a gardé « souris », « logiciel » et « ordinateur » mais emprunté « mail », « cloud » et « spam », l'espagnol a traduit plus systématiquement — et l'anglicisme y sonne souvent négligé.\n\nEl ratón est la souris. El teclado, le clavier. La pantalla, l'écran. El disco duro, le disque dur. La nube, le cloud. El correo electrónico, le courriel — abrégé en correo dans l'usage courant. La contraseña, le mot de passe. El corrector, le correcteur. La copia de seguridad, la sauvegarde. El cortafuegos, le pare-feu.\n\nQuelques emprunts subsistent, surtout en Amérique latine : el mouse y concurrence el ratón, la computadora l'emporte sur el ordenador, et el email s'entend partout.\n\nLa Real Academia recommande les formes hispanisées : tuit pour tweet, tuitear pour tweeter, wifi au masculin ou au féminin selon le pays, cederrón pour CD-ROM — celle-ci n'a jamais pris.\n\nEnfin, deux calques à éviter : « aplicar para un trabajo » vient de l'anglais et devrait être solicitar un puesto ; « accesar » n'existe pas, on dit acceder a.",
          visuels: [
            {
              type: "tableau",
              titre: "L'objet, et son nom selon la rive",
              colonnes: ["En français", "Espagne", "Amérique latine"],
              lignes: [
                ["l'ordinateur", "el ordenador", "la computadora"],
                ["la souris", "el ratón", "el mouse / el ratón"],
                ["le portable", "el portátil", "la laptop"],
                ["le téléphone", "el móvil", "el celular"],
                ["le courriel", "el correo", "el email / el correo"],
                ["le mot de passe", "la contraseña", "la clave / la contraseña"],
                ["le disque dur", "el disco duro", "el disco duro"],
                ["l'écran", "la pantalla", "la pantalla"],
                ["le cloud", "la nube", "la nube"],
              ],
              note: "Ordenador vient du français « ordinateur » ; computadora, de l'anglais computer.",
            },
          ],
        },
        {
          titre: "Les verbes de l'écran",
          texte:
            "Les verbes du numérique espagnol sont réguliers, et beaucoup sont des créations récentes formées sur le modèle du premier groupe.\n\nPour se connecter : iniciar sesión, ouvrir une session ; cerrar sesión, la fermer ; conectarse, se connecter ; registrarse, s'inscrire ; darse de baja, se désinscrire.\n\nPour les fichiers : descargar, télécharger vers soi ; subir, envoyer vers un serveur — l'espagnol distingue là où le français confond ; guardar, enregistrer ; hacer una copia de seguridad, sauvegarder ; borrar, effacer ; adjuntar, joindre un fichier.\n\nPour les ennuis : bloquearse, se figer ; colgarse, planter ; reiniciar, redémarrer ; apagar, éteindre ; formatear, formater.\n\nPour les gestes : hacer clic ou pinchar en Espagne, cliquer ; pulsar, appuyer ; deslizar, faire glisser ; arrastrar y soltar, glisser-déposer ; desplazarse, faire défiler.\n\nEt deux verbes nouveaux passés dans l'usage : chatear, tchatter ; googlear, chercher sur un moteur — la RAE préfère buscar en internet, sans succès.",
          visuels: [
            {
              type: "comparaison",
              titre: "Là où l'espagnol distingue mieux que le français",
              colonnes: [
                {
                  titre: "« télécharger »",
                  points: [
                    "descargar — du serveur vers soi.",
                    "subir — de soi vers le serveur.",
                    "Le français dit un seul mot.",
                  ],
                },
                {
                  titre: "« sauvegarder »",
                  points: [
                    "guardar — enregistrer le fichier.",
                    "hacer una copia de seguridad — copie de sécurité.",
                    "Le français dit un seul mot ici aussi.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Sécurité et vie privée",
          texte:
            "C'est le champ où la précision compte le plus, et où l'espagnol a forgé ses propres mots.\n\nLa contraseña est le mot de passe ; la clave, la clé ou le code — les deux s'emploient. La autenticación en dos pasos ou de doble factor est l'authentification à deux facteurs.\n\nUna filtración de datos est une fuite de données ; una brecha de seguridad, une faille. El hackeo est le piratage, et hackear le verbe — préférés aujourd'hui à pirateo, qui évoque plutôt la contrefaçon.\n\nEl phishing garde son nom anglais, parfois traduit par suplantación de identidad. El programa malicioso ou el malware ; el secuestro de datos ou el ransomware ; el programa espía, le logiciel espion.\n\nEl cifrado est le chiffrement ; cifrar, chiffrer. Attention : encriptar existe et s'emploie, mais les puristes lui préfèrent cifrar.\n\nEnfin la vie privée. La privacidad est la confidentialité au sens des données ; la intimidad, la vie privée au sens personnel. Le RGPD s'y appelle el RGPD, et la loi espagnole la LOPDGDD, souvent abrégée LOPD dans l'usage courant.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Se me ha bloqueado el ordenador.",
        francais: "Mon ordinateur s'est figé.",
        note: "Ordenador en Espagne, computadora en Amérique. Et la tournure met la personne en victime.",
      },
      {
        etranger: "Tienes que iniciar sesión primero.",
        francais: "Tu dois d'abord ouvrir une session.",
        note: "Iniciar sesión, cerrar sesión. L'espagnol traduit là où le français emprunte.",
      },
      {
        etranger: "El archivo todavía se está subiendo.",
        francais: "Le fichier est encore en cours d'envoi.",
        note: "Subir vers le serveur, descargar vers soi. L'espagnol distingue mieux que le français.",
      },
      {
        etranger: "Haz una copia de seguridad ahora.",
        francais: "Fais une sauvegarde maintenant.",
        note: "Copia de seguridad pour la copie de sécurité ; guardar pour enregistrer.",
      },
      {
        etranger: "Cambia la contraseña cada tres meses.",
        francais: "Change le mot de passe tous les trois mois.",
        aussiEtranger: ["Cambia la clave cada tres meses."],
        note: "La contraseña en Espagne ; la clave s'emploie aussi, surtout en Amérique.",
      },
      {
        etranger: "Pincha en el enlace de abajo.",
        francais: "Clique sur le lien ci-dessous.",
        aussiEtranger: ["Haz clic en el enlace de abajo."],
        note: "Pinchar en Espagne, hacer clic partout. El enlace, le lien.",
      },
      {
        etranger: "Fue una filtración de datos grave.",
        francais: "Ce fut une grave fuite de données.",
        note: "Una filtración pour une fuite d'information, una fuga pour un liquide ou un gaz ; una brecha de seguridad, la faille.",
      },
      {
        etranger: "Los mensajes van cifrados de extremo a extremo.",
        francais: "Les messages sont chiffrés de bout en bout.",
        note: "Cifrar est préféré à encriptar par les puristes. Les deux s'entendent.",
      },
      {
        etranger: "Te adjunto el documento en el correo.",
        francais: "Je te joins le document dans le courriel.",
        note: "Adjuntar, joindre. El correo suffit pour dire courriel dans l'usage courant.",
      },
      {
        etranger: "Solicité el puesto por internet.",
        francais: "J'ai postulé pour le poste sur internet.",
        note: "Solicitar un puesto. « Aplicar para » est un calque de l'anglais à éviter.",
      },
    ],
  },

  {
    slug: "es-voc-emociones",
    category: "Vocabulaire",
    title: "Les émotions et le caractère",
    statement:
      "Estar aburrido ou ser aburrido : le même adjectif dit « je m'ennuie » ou « je suis ennuyeux » selon l'auxiliaire. Le choix de ser ou estar y change tout.",
    tip: "Avec un adjectif de caractère, ser décrit la personne et estar décrit son état du moment. Es nervioso, il est d'un naturel nerveux ; está nervioso, il est nerveux là, maintenant.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Dire ce qu'on ressent en espagnol",
      sections: [
        {
          titre: "Ser ou estar : la faute qui inverse le sens",
          texte:
            "Beaucoup d'adjectifs espagnols changent de sens selon l'auxiliaire, et le champ des émotions en concentre l'essentiel. C'est l'équivalent exact du couple anglais bored / boring, mais joué sur le verbe au lieu du suffixe.\n\nSer aburrido veut dire être ennuyeux ; estar aburrido, s'ennuyer. Ser listo, être malin ; estar listo, être prêt. Ser vivo, être vif d'esprit ; estar vivo, être en vie. Ser bueno, être bon ou gentil ; estar bueno, être savoureux — ou séduisant, familièrement. Ser malo, être méchant ; estar malo, être souffrant. Ser orgulloso, être orgueilleux ; estar orgulloso, être fier de quelque chose.\n\nLa logique est constante : ser attribue une propriété stable, estar décrit un état ou une perception du moment. Une fois cette clé posée, la liste n'est plus à apprendre par cœur : elle se déduit.\n\nUne difficulté demeure : certains états que le français traite comme permanents sont perçus comme temporaires en espagnol. Estar muerto, être mort, prend estar — parce que c'est un état, si définitif soit-il. Estar casado, être marié, également.",
          visuels: [
            {
              type: "tableau",
              titre: "Le même adjectif, deux verbes",
              colonnes: ["L'adjectif", "Avec ser", "Avec estar"],
              lignes: [
                ["aburrido", "ennuyeux", "qui s'ennuie"],
                ["listo", "malin", "prêt"],
                ["bueno", "bon, gentil", "savoureux, en forme"],
                ["malo", "méchant", "souffrant"],
                ["rico", "riche", "délicieux"],
                ["vivo", "vif d'esprit", "en vie"],
                ["orgulloso", "orgueilleux", "fier de"],
                ["despierto", "éveillé d'esprit", "réveillé"],
                ["verde", "vert, ou grivois", "pas mûr"],
              ],
              note: "Ser attribue une propriété, estar décrit un état. Le reste se déduit.",
            },
          ],
        },
        {
          titre: "Les verbes qui renversent la phrase",
          texte:
            "L'espagnol exprime beaucoup d'émotions avec des verbes construits comme gustar : ce n'est pas la personne qui est sujet, mais la chose qui provoque le sentiment.\n\nMe da miedo, cela me fait peur. Me da pena, cela m'attriste. Me da vergüenza, cela me fait honte. Me da rabia, cela m'agace. Me da igual, cela m'est égal. Me da lo mismo, même chose.\n\nSur le même modèle : me encanta, cela m'enchante ; me molesta, cela me dérange ; me preocupa, cela m'inquiète ; me sorprende, cela me surprend ; me apetece, cela me tente ; me fastidia, cela m'ennuie.\n\nLa règle d'accord est constante : le verbe s'accorde avec la chose, pas avec la personne. Me molestan los ruidos, les bruits me dérangent — molestan au pluriel.\n\nS'y ajoutent les verbes pronominaux d'émotion, qui décrivent le passage à un état : enfadarse, se fâcher ; alegrarse, se réjouir ; asustarse, prendre peur ; sorprenderse, s'étonner ; aburrirse, s'ennuyer ; preocuparse, s'inquiéter. Ceux-là prennent la personne pour sujet, et se construisent avec de ou por : me alegro de verte, me preocupo por ti.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux façons de dire la peur",
              colonnes: [
                {
                  titre: "La chose est sujet",
                  points: [
                    "Me da miedo la oscuridad.",
                    "Me molestan los ruidos.",
                    "Le verbe s'accorde avec la chose.",
                  ],
                },
                {
                  titre: "La personne est sujet",
                  points: [
                    "Me asusto con facilidad.",
                    "Me enfado enseguida.",
                    "Le verbe s'accorde avec moi.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "L'intensité, et les faux amis du caractère",
          texte:
            "L'espagnol renforce ses adjectifs par le suffixe -ísimo, plus vivant que muy dans la langue parlée : buenísimo, carísimo, facilísimo, guapísima. La construction est régulière, avec quelques ajustements orthographiques — rico donne riquísimo, largo donne larguísimo, feliz donne felicísimo.\n\nPour les adjectifs déjà extrêmes, muy est superflu et sonne redondant : on préfère absolutamente horrible, verdaderamente estupendo, ou l'adjectif seul.\n\nDeux faux amis reviennent constamment. Sensible veut dire sensible au sens émotionnel ; raisonnable se dit sensato — exactement l'inverse de l'anglais sensible, ce qui produit des allers-retours cocasses chez qui pratique les deux langues.\n\nSimpático veut dire sympathique, et compatissant se dit comprensivo ou compasivo. Là, c'est l'anglais qui fait exception : sympathetic n'est pas simpático.\n\nEnfin, deux mots utiles sans équivalent français simple. Majo, en Espagne, décrit quelqu'un d'agréable et de chaleureux. Y ser un pesado veut dire être lourd, insistant — l'un des reproches les plus courants de la langue parlée.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Estoy aburrido, no hay nada que hacer.",
        francais: "Je m'ennuie, il n'y a rien à faire.",
        note: "Estar aburrido, s'ennuyer ; ser aburrido, être ennuyeux. L'auxiliaire inverse le sens.",
      },
      {
        etranger: "Esa película es aburridísima.",
        francais: "Ce film est extrêmement ennuyeux.",
        note: "Ser pour la propriété, et le suffixe -ísimo pour l'intensité.",
      },
      {
        etranger: "Me da miedo la oscuridad.",
        francais: "L'obscurité me fait peur.",
        note: "Construction comme gustar : le verbe s'accorde avec la chose, pas avec moi.",
      },
      {
        etranger: "Me molestan mucho los ruidos.",
        francais: "Les bruits me dérangent beaucoup.",
        note: "Molestan au pluriel : ce sont les bruits qui sont sujets.",
      },
      {
        etranger: "Me alegro mucho de verte.",
        francais: "Je suis très content de te voir.",
        note: "Alegrarse DE. Ici, c'est la personne qui est sujet.",
      },
      {
        etranger: "Está malo desde el lunes.",
        francais: "Il est souffrant depuis lundi.",
        note: "Estar malo, être souffrant ; ser malo, être méchant.",
      },
      {
        etranger: "Es una persona muy sensata.",
        francais: "C'est quelqu'un de très raisonnable.",
        note: "Sensato veut dire raisonnable ; sensible veut dire sensible. L'inverse de l'anglais.",
      },
      {
        etranger: "Tu hermana es muy maja.",
        francais: "Ta sœur est très agréable.",
        note: "Majo, très espagnol, décrit quelqu'un de chaleureux. Pas d'équivalent français exact.",
      },
      {
        etranger: "No seas pesado, por favor.",
        francais: "Ne sois pas lourd, s'il te plaît.",
        note: "Ser un pesado, être insistant. L'un des reproches les plus courants de la langue parlée.",
      },
      {
        etranger: "Me da vergüenza pedírselo.",
        francais: "Cela me gêne de le lui demander.",
        note: "Dar vergüenza, faire honte ou gêner. Et les deux pronoms se collent à l'infinitif.",
      },
    ],
  },

  {
    slug: "es-voc-medicina",
    category: "Vocabulaire",
    title: "Le vocabulaire médical",
    statement:
      "Au-delà de « j'ai mal au dos » : le diagnostic, l'ordonnance, l'hôpital. Un champ où l'espagnol garde le mot savant latin — souvent plus proche du français que de l'anglais.",
    tip: "La receta est l'ordonnance et la recette de cuisine. Le contexte tranche, mais le mot surprend la première fois.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "L'espagnol de la médecine",
      sections: [
        {
          titre: "Le parcours de soins",
          texte:
            "Le vocabulaire du système de santé change d'un pays hispanophone à l'autre, mais son ossature reste stable.\n\nLe généraliste est el médico de cabecera en Espagne, el médico general ou el médico de familia ailleurs. Le cabinet est la consulta ; le dispensaire public espagnol, el centro de salud ou el ambulatorio.\n\nPrendre rendez-vous se dit pedir cita ou pedir hora. La cita est le rendez-vous. Les urgences sont urgencias, toujours au pluriel, et la sala de urgencias en Amérique.\n\nÀ l'hôpital : la planta est l'étage ou le service en Espagne, el piso ailleurs ; el quirófano, le bloc opératoire ; la UCI, l'unité de soins intensifs ; el ingreso, l'admission ; el alta, la sortie — noter el alta, féminin avec article masculin à cause du a tonique.\n\nEnfin, la Seguridad Social espagnole couvre la plupart des soins, et la tarjeta sanitaria en est la carte. En Amérique latine, le système varie du tout au tout : obra social en Argentine, IMSS au Mexique, EPS en Colombie.",
          visuels: [
            {
              type: "etapes",
              titre: "Du symptôme à l'ordonnance",
              etapes: [
                { titre: "los síntomas", texte: "Fiebre, tos, dolor de garganta, mareo, náuseas." },
                { titre: "pedir cita", texte: "On demande un rendez-vous au centro de salud." },
                { titre: "el diagnóstico", texte: "Le médecin diagnostica una dolencia. Le mot est masculin." },
                { titre: "la receta", texte: "Il receta un traitement : pastillas, jarabe, un antibiótico." },
                { titre: "la revisión", texte: "Un rendez-vous de contrôle : una revisión ou un seguimiento." },
              ],
            },
          ],
        },
        {
          titre: "Dire la douleur et les symptômes",
          texte:
            "L'espagnol a plusieurs façons de dire où l'on a mal, et elles ne sont pas interchangeables.\n\nTener dolor de + partie du corps : tengo dolor de cabeza, de muelas, de espalda, de garganta. C'est la forme la plus neutre.\n\nDoler, construit comme gustar : me duele la cabeza, me duelen las piernas. Le verbe s'accorde avec la partie du corps, et l'article est défini, jamais possessif — jamais « me duele mi cabeza ».\n\nTener + nom pour les états : tener fiebre, tener tos, tener náuseas, tener mareo, tener escalofríos.\n\nEncontrarse pour l'état général : no me encuentro bien, je ne me sens pas bien. Sentirse fonctionne aussi : me siento débil.\n\nQuelques symptômes utiles : la fiebre, la fièvre ; la tos, la toux ; el mareo, le vertige ou le mal des transports ; el sarpullido, l'éruption cutanée ; la hinchazón, le gonflement ; el picor, la démangeaison ; la falta de aire, l'essoufflement.\n\nEt trois verbes du corps : hincharse, gonfler ; sangrar, saigner ; desmayarse, s'évanouir.",
          visuels: [
            {
              type: "tableau",
              titre: "Trois façons de dire la douleur",
              colonnes: ["La forme", "L'exemple", "La remarque"],
              lignes: [
                ["tener dolor de", "Tengo dolor de cabeza.", "la plus neutre"],
                ["doler", "Me duele la cabeza.", "s'accorde avec la partie du corps"],
                ["doler pluriel", "Me duelen los ojos.", "duelen, car los ojos est sujet"],
                ["tener + nom", "Tengo fiebre y tos.", "pour les états"],
                ["encontrarse", "No me encuentro bien.", "état général"],
              ],
              note: "L'article est toujours défini : me duele LA cabeza, jamais « mi cabeza ».",
            },
          ],
        },
        {
          titre: "Les faux amis, et le mot savant",
          texte:
            "L'espagnol médical est plus proche du français que l'anglais, ce qui le rend traître : la ressemblance masque quelques écarts nets.\n\nLa receta est l'ordonnance — et aussi la recette de cuisine. Recetar est le verbe : le médecin receta un medicamento.\n\nEl remedio est le remède, mais en Amérique latine il désigne couramment le médicament lui-même.\n\nLa droga veut dire drogue au sens de stupéfiant ; le médicament se dit el medicamento ou la medicina. C'est l'inverse de l'anglais drug, qui couvre les deux.\n\nUna intoxicación couvre l'intoxication au sens français, alimentaire comprise : una intoxicación alimentaria.\n\nEstar constipado veut dire être enrhumé, et non constipé — qui se dit estreñido. Le faux ami est célèbre, et l'erreur mémorable.\n\nEnfin, quelques adjectifs savants proches du français : cardíaco, pulmonar, renal, hepático, gástrico, cutáneo, óseo. Et les spécialistes en -ólogo : cardiólogo, dermatólogo, neurólogo, oncólogo. Le pédiatre est el pediatra, sans -ólogo, et le mot est épicène : el pediatra, la pediatra.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Lo llevaron a urgencias en ambulancia.",
        francais: "On l'a emmené aux urgences en ambulance.",
        note: "Urgencias, toujours au pluriel en Espagne ; la sala de urgencias en Amérique.",
      },
      {
        etranger: "Pasó dos días en la UCI.",
        francais: "Il a passé deux jours en réanimation.",
        note: "La UCI, l'unité de soins intensifs — l'équivalent espagnol de la réanimation.",
      },
      {
        etranger: "Me recetó un jarabe para la tos.",
        francais: "Il m'a prescrit un sirop contre la toux.",
        note: "Recetar, prescrire. La receta est l'ordonnance — et la recette de cuisine.",
      },
      {
        etranger: "Estoy constipado desde el viernes.",
        francais: "Je suis enrhumé depuis vendredi.",
        note: "Estar constipado veut dire être enrhumé. Constipé se dit estreñido.",
      },
      {
        etranger: "Le dieron el alta esta mañana.",
        francais: "Il a eu son bon de sortie ce matin.",
        aussi: ["Il est sorti de l'hôpital ce matin."],
        note: "El alta est féminin malgré l'article masculin : le a tonique impose el.",
      },
      {
        etranger: "Tiene fiebre y escalofríos.",
        francais: "Il a de la fièvre et des frissons.",
        note: "Tener + nom pour les états. Los escalofríos, les frissons.",
      },
      {
        etranger: "La hinchazón bajó en dos días.",
        francais: "Le gonflement a diminué en deux jours.",
        note: "La hinchazón, le gonflement ; hincharse, gonfler.",
      },
      {
        etranger: "Fue una intoxicación alimentaria.",
        francais: "C'était une intoxication alimentaire.",
        note: "Intoxicación se construit avec por : intoxicación por alimentos en mal estado. Dans la conversation, on dit plutôt me sentó mal la comida.",
      },
      {
        etranger: "El cardiólogo pidió más pruebas.",
        francais: "Le cardiologue a demandé d'autres examens.",
        note: "Las pruebas, les examens médicaux. Et les spécialistes se forment en -ólogo.",
      },
      {
        etranger: "Lo operaron esta mañana en el quirófano tres.",
        francais: "On l'a opéré ce matin au bloc opératoire trois.",
        note: "El quirófano, le bloc opératoire ; operar, opérer.",
      },
    ],
  },

  {
    slug: "es-voc-politica",
    category: "Vocabulaire",
    title: "La politique et la société",
    statement:
      "Vingt et un pays, vingt et un systèmes. Le vocabulaire politique espagnol est stable, mais les institutions qu'il désigne ne se ressemblent pas d'un pays à l'autre.",
    tip: "La política, c'est la vie politique ET la politique publique : l'espagnol ne fait pas la distinction que l'anglais impose entre politics et policy.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les mots de la vie publique",
      sections: [
        {
          titre: "Le vocabulaire électoral",
          texte:
            "Les élections ont un lexique dense et régulier, presque identique d'un pays à l'autre.\n\nLas elecciones, les élections ; los comicios, terme journalistique plus soutenu. La campaña, la campagne ; el candidato, le candidat ; la papeleta, le bulletin de vote ; la urna, l'urne ; el colegio electoral, le bureau de vote — noter que colegio ne veut pas dire collège ici.\n\nVotar a alguien, voter pour quelqu'un — c'est la construction la plus fréquente en Espagne ; votar por s'entend surtout en Amérique latine, mais les deux sont corrects partout.\n\nLa participación, le taux de participation ; la abstención, l'abstention ; el escrutinio, le dépouillement ; el recuento, le décompte ; los escaños, les sièges au parlement.\n\nUne majorité est mayoría absoluta ou mayoría simple ; une coalition, una coalición ; un remaniement, una remodelación ; une motion de censure, una moción de censura — outil central de la vie politique espagnole.\n\nEnfin, deux mots que le français n'a pas : el sondeo a pie de urna, le sondage sortie des urnes, et el pucherazo, la fraude électorale — mot familier et imagé.",
          visuels: [
            {
              type: "tableau",
              titre: "Les institutions, d'un pays à l'autre",
              colonnes: ["En français", "Espagne", "Mexique", "Argentine"],
              lignes: [
                ["le parlement", "las Cortes", "el Congreso", "el Congreso"],
                ["la chambre basse", "el Congreso de los Diputados", "la Cámara de Diputados", "la Cámara de Diputados"],
                ["la chambre haute", "el Senado", "el Senado", "el Senado"],
                ["le chef de l'État", "el Rey", "el Presidente", "el Presidente"],
                ["le chef du gouvernement", "el Presidente del Gobierno", "el Presidente", "el Presidente"],
                ["la région", "la comunidad autónoma", "el estado", "la provincia"],
                ["le maire", "el alcalde", "el presidente municipal", "el intendente"],
              ],
              note: "En Espagne, le chef de l'État est le roi ; le chef du gouvernement s'appelle Presidente del Gobierno.",
            },
          ],
        },
        {
          titre: "Le vocabulaire du débat",
          texte:
            "Les mots qui servent à discuter d'un sujet public sont les mêmes dans la presse, en réunion et à l'oral d'examen.\n\nPour poser un sujet : un tema, un sujet ; una cuestión, une question ; un asunto, une affaire ; un debate, un débat ; una polémica, une controverse.\n\nPour prendre position : sostener que, soutenir ; afirmar que, affirmer ; señalar que, faire remarquer ; reconocer que, reconnaître ; admitir que, admettre ; negar que — suivi du subjonctif : niego que sea cierto.\n\nPour nuancer : sin embargo, cependant ; no obstante, néanmoins ; en cambio, en revanche ; por el contrario, au contraire ; ahora bien, cela dit ; cabe señalar que, il convient de noter que.\n\nPour conclure : en definitiva, en fin de compte ; en resumen, en résumé ; por lo tanto, par conséquent ; de ahí que — suivi du subjonctif.\n\nEt deux verbes très employés que le français rend par des périphrases : plantear, poser un problème ou soulever une question ; suponer, impliquer autant que supposer — esto supone un cambio importante veut dire « cela implique un changement important ».",
          visuels: [
            {
              type: "comparaison",
              titre: "Faux amis de la vie publique",
              colonnes: [
                {
                  titre: "Ce qu'un francophone croit",
                  points: [
                    "el diputado → le député (juste)",
                    "la diputación → la députation",
                    "el gobierno → le gouvernement (juste)",
                    "el colegio → le collège",
                  ],
                },
                {
                  titre: "Ce que ça veut dire",
                  points: [
                    "el diputado → le député",
                    "la diputación → le conseil provincial",
                    "el gobierno → le gouvernement",
                    "el colegio → l'école primaire, ou le bureau de vote",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "La société, et ce dont on débat",
          texte:
            "Le vocabulaire social espagnol est riche, et quelques mots reviennent dans tous les débats.\n\nEl paro est le chômage en Espagne — le mot vient de parar, s'arrêter ; en Amérique latine, on dit el desempleo, et el paro y désigne plutôt la grève. Estar en paro, être au chômage.\n\nLa huelga est la grève ; el sindicato, le syndicat ; el convenio colectivo, la convention collective ; el despido, le licenciement ; la jubilación, la retraite ; la nómina, la fiche de paie.\n\nLa sanidad est le système de santé, la enseñanza l'enseignement, la vivienda le logement — trois mots qui reviennent à chaque élection espagnole.\n\nLa brecha désigne l'écart : la brecha salarial, l'écart salarial ; la brecha digital, la fracture numérique.\n\nEt quelques mots du débat contemporain : la desigualdad, l'inégalité ; el medio ambiente, l'environnement ; la sostenibilidad, la durabilité ; la inmigración ; el envejecimiento, le vieillissement ; la despoblación, la désertification rurale — sujet majeur de l'Espagne intérieure, qu'on y appelle la España vaciada.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Las elecciones son el domingo.",
        francais: "Les élections ont lieu dimanche.",
        note: "Las elecciones, toujours au pluriel. Los comicios est le terme journalistique.",
      },
      {
        etranger: "La participación fue muy baja.",
        francais: "La participation a été très faible.",
        note: "La participación, le taux de participation ; la abstención, l'abstention.",
      },
      {
        etranger: "El partido perdió veinte escaños.",
        francais: "Le parti a perdu vingt sièges.",
        note: "Los escaños, les sièges au parlement. El escrutinio, le dépouillement.",
      },
      {
        etranger: "Presentaron una moción de censura.",
        francais: "Ils ont déposé une motion de censure.",
        note: "Outil central de la vie politique espagnole, bien plus employé qu'en France.",
      },
      {
        etranger: "El paro subió el mes pasado.",
        francais: "Le chômage a augmenté le mois dernier.",
        note: "El paro en Espagne ; en Amérique latine, el desempleo — et el paro y veut dire la grève.",
      },
      {
        etranger: "Los sindicatos convocaron una huelga.",
        francais: "Les syndicats ont appelé à la grève.",
        note: "Convocar una huelga, appeler à la grève. El convenio colectivo, la convention collective.",
      },
      {
        etranger: "Se debatió la brecha salarial.",
        francais: "L'écart salarial a été débattu.",
        note: "La brecha désigne l'écart : brecha salarial, brecha digital.",
      },
      {
        etranger: "Esto supone un cambio importante.",
        francais: "Cela implique un changement important.",
        note: "Suponer veut dire impliquer autant que supposer.",
      },
      {
        etranger: "El sondeo a pie de urna acertó esta vez.",
        francais: "Le sondage sortie des urnes a vu juste, cette fois.",
        note: "El sondeo a pie de urna, réalisé à la sortie du bureau de vote — mot que le français n'a pas.",
      },
      {
        etranger: "La despoblación golpea a la España vaciada.",
        francais: "La désertification rurale frappe l'Espagne dépeuplée.",
        note: "La España vaciada, expression consacrée pour l'Espagne intérieure en déclin démographique.",
      },
    ],
  },
];
