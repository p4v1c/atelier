/**
 * Étape C, troisième passe — lots 003, 004 et 005 portés de 5 à 7 phrases.
 *
 * Rappel pour les « cas discutés » : leurs phrases sont TOUTES correctes, les
 * deux usages se défendant. Ajouter une forme fautive y trancherait un débat
 * que la règle déclare ouvert.
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY3_REGISTRE_PRO: ContentBatch = {
  id: "densify3-registre-pro",
  rules: [],
  additions: [
    /* ── lot 003 : registre et style ── */
    { ruleSlug: "anglicisme-supporter", sentences: [
      { marked: "Le public [supporte] son équipe même dans la défaite.", fix: "soutient" },
      { marked: "Ses proches l'ont [supporté] tout au long du traitement.", fix: "soutenu" },
    ]},
    { ruleSlug: "anglicisme-opportunite", sentences: [
      { marked: "Voilà une [opportunité] à ne surtout pas laisser passer.", fix: "occasion" },
      { marked: "Il attend une [opportunité] de reprendre ses études.", fix: "occasion" },
    ]},
    { ruleSlug: "anglicisme-initier", sentences: [
      { marked: "Le conseil a [initié] une consultation des habitants.", fix: "lancé" },
      { marked: "Ils viennent d'[initier] une refonte complète du site.", fix: "d'engager" },
    ]},
    { ruleSlug: "anglicisme-impacter", sentences: [
      { marked: "La panne a [impacté] toute la chaîne de production.", fix: "paralysé" },
      { marked: "Ces coupes budgétaires vont [impacter] les plus fragiles.", fix: "toucher" },
    ]},
    { ruleSlug: "anglicisme-basique", sentences: [
      { marked: "Il ignore les règles les plus [basiques] du métier.", fix: "élémentaires" },
      { marked: "Un contrôle [basique] aurait suffi à repérer l'erreur.", fix: "élémentaire" },
    ]},
    { ruleSlug: "anglicisme-definitivement", sentences: [
      { marked: "Ce livre est [définitivement] le meilleur de la série.", fix: "assurément" },
      { marked: "Il a [définitivement] plus d'expérience que les autres.", fix: "nettement" },
    ]},
    { ruleSlug: "anglicisme-agenda", sentences: [
      { marked: "Trois points restent à [l'agenda] de la commission.", fix: "l'ordre du jour" },
      { marked: "Merci de diffuser [l'agenda] avant la fin de semaine.", fix: "l'ordre du jour" },
    ]},
    { ruleSlug: "anglicisme-versatile", sentences: [
      { marked: "Ce matériau [versatile] convient à tous les usages.", fix: "polyvalent" },
      { marked: "Nous cherchons une équipe [versatile] et réactive.", fix: "polyvalente" },
    ]},
    { ruleSlug: "anglicisme-adresser", sentences: [
      { marked: "Le rapport n'[adresse] jamais la question du financement.", fix: "n'aborde" },
      { marked: "Il faudra [adresser] ces difficultés dès la rentrée.", fix: "traiter" },
    ]},
    { ruleSlug: "anglicisme-challenge", sentences: [
      { marked: "Le vrai [challenge] sera de tenir les délais annoncés.", fix: "enjeu" },
      { marked: "Elle voit chaque dossier comme un [challenge] personnel.", fix: "défi" },
    ]},
    { ruleSlug: "anglicisme-deadline", sentences: [
      { marked: "La [deadline] du concours tombe le 15 octobre.", fix: "date limite" },
      { marked: "Nous avons repoussé la [deadline] de quinze jours.", fix: "échéance" },
    ]},
    { ruleSlug: "anglicisme-feedback", sentences: [
      { marked: "Le [feedback] des clients est plutôt encourageant.", fix: "retour" },
      { marked: "J'attends ton [feedback] avant d'imprimer la brochure.", fix: "avis" },
    ]},
    { ruleSlug: "anglicisme-planning", sentences: [
      { marked: "Le [planning] du chantier est affiché à l'entrée.", fix: "calendrier" },
      { marked: "Son [planning] de la semaine ne tient pas debout.", fix: "emploi du temps" },
    ]},
    { ruleSlug: "anglicisme-checker", sentences: [
      { marked: "Il faudrait [checker] les références avant l'envoi.", fix: "vérifier" },
      { marked: "Elle a [checké] chaque ligne du contrat deux fois.", fix: "vérifié" },
    ]},
    { ruleSlug: "anglicisme-booster", sentences: [
      { marked: "Cette annonce devrait [booster] les inscriptions.", fix: "relancer" },
      { marked: "Rien ne [booste] mieux l'équipe qu'une victoire nette.", fix: "stimule" },
    ]},
    { ruleSlug: "anglicisme-process", sentences: [
      { marked: "Chaque [process] interne sera revu avant l'été.", fix: "processus" },
      { marked: "Ce [process] de validation comporte cinq étapes.", fix: "processus" },
    ]},
    { ruleSlug: "anglicisme-dispatcher", sentences: [
      { marked: "Il faudra [dispatcher] ces cartons entre les trois sites.", fix: "répartir" },
      { marked: "Le courrier est [dispatché] chaque matin à neuf heures.", fix: "distribué" },
    ]},
    { ruleSlug: "tic-au-final", sentences: [
      { marked: "Au [final], le résultat dépasse toutes nos attentes.", fix: "bout du compte" },
      { marked: "Tout cela, au [final], n'aura servi à rien du tout.", fix: "bout du compte" },
    ]},
    { ruleSlug: "tic-sur-paris", sentences: [
      { marked: "Il intervient [sur] Lille et sur toute la métropole.", fix: "à" },
      { marked: "Nous ouvrons une antenne [sur] Grenoble en septembre.", fix: "à" },
    ]},
    { ruleSlug: "anglicisme-timing", sentences: [
      { marked: "Le [timing] de la campagne était mal calculé.", fix: "calendrier" },
      { marked: "Tout dépend du [timing] entre les deux livraisons.", fix: "moment" },
    ]},
    { ruleSlug: "impropriete-achalande", sentences: [
      { marked: "Cette quincaillerie est bien [achalandée] en outillage.", fix: "fournie" },
      { marked: "Le rayon paraît mal [achalandé] en produits frais.", fix: "approvisionné" },
    ]},
    { ruleSlug: "impropriete-emerite", sentences: [
      { marked: "Voilà un violoniste [émérite] pour ses quinze ans.", fix: "précoce" },
      { marked: "Ce chirurgien émérite opère depuis trente ans.", fix: null },
    ]},
    { ruleSlug: "impropriete-conjecture", sentences: [
      { marked: "Dans cette [conjecture] difficile, tout ralentit.", fix: "conjoncture" },
      { marked: "Il avance des [conjonctures] sans le moindre indice.", fix: "conjectures" },
    ]},
    { ruleSlug: "impropriete-perdurer", sentences: [
      { marked: "Si le blocage [perdure], nous saisirons la direction.", fix: "persiste" },
      { marked: "Ces retards [perdurent] depuis le début du mois.", fix: "persistent" },
    ]},
    { ruleSlug: "impropriete-avoir-lair", sentences: [
      { marked: "Cette hypothèse s'est [avérée] fausse en deux jours.", fix: "révélée" },
      { marked: "Le pronostic s'est avéré [vrai], contre toute attente.", fix: "juste" },
    ]},

    /* ── lot 004 : écrits professionnels ── */
    { ruleSlug: "pro-mail-courriel", sentences: [
      { marked: "Votre [mail] du 3 mars est resté sans réponse.", fix: "courriel" },
      { marked: "Je vous adresse ce [mail] à la demande du directeur.", fix: "message" },
    ]},
    { ruleSlug: "pro-agreer-salutations", sentences: [
      { marked: "Je vous adresse, Madame la Directrice, mes [sentiments] les plus sincères.", fix: "salutations" },
      { marked: "Nous vous prions d'agréer, Monsieur, nos sincères [sentiments].", fix: "salutations" },
    ]},
    { ruleSlug: "pro-formule-appel-virgule", sentences: [
      { marked: "Cher [collègue] je vous écris au sujet du dossier.", fix: "collègue," },
      { marked: "Madame la [Présidente] je sollicite un entretien.", fix: "Présidente," },
    ]},
    { ruleSlug: "pro-monsieur-le-maire", sentences: [
      { marked: "Monsieur le [ministre], je me permets de vous écrire.", fix: "Ministre" },
      { marked: "Veuillez agréer, Madame la [maire], mes salutations.", fix: "Maire" },
    ]},
    { ruleSlug: "pro-cordialement-abrege", sentences: [
      { marked: "[Cdlt], je reste disponible pour tout complément.", fix: "Cordialement" },
      { marked: "Merci encore, [bàv] et bonne fin de semaine.", fix: "bien à vous" },
    ]},
    { ruleSlug: "pro-svp", sentences: [
      { marked: "Merci de confirmer votre venue, [svp], avant jeudi.", fix: "s'il vous plaît" },
      { marked: "[Svp] transmettez ce dossier au service juridique.", fix: "Veuillez" },
    ]},
    { ruleSlug: "pro-asap", sentences: [
      { marked: "Il faudrait signer le contrat [ASAP], le client attend.", fix: "au plus vite" },
      { marked: "Merci de me répondre [asap] pour bloquer la date.", fix: "rapidement" },
    ]},
    { ruleSlug: "pro-revenir-vers", sentences: [
      { marked: "Je vous [reviendrai] dès la fin de l'audit.", fix: "recontacterai" },
      { marked: "Merci de nous [revenir] avant la fin du mois.", fix: "répondre" },
    ]},
    { ruleSlug: "pro-candidater", sentences: [
      { marked: "Je souhaite [candidater] à ce poste de rédacteur.", fix: "postuler" },
      { marked: "Elle a [candidaté] dans cinq établissements différents.", fix: "postulé" },
    ]},
    { ruleSlug: "pro-prier-de-croire", sentences: [
      { marked: "Veuillez croire, Monsieur, [en] mes salutations respectueuses.", fix: "à" },
      { marked: "Nous vous prions de croire [en] notre entier dévouement.", fix: "à" },
    ]},
    { ruleSlug: "pro-dans-lattente", sentences: [
      { marked: "Dans l'attente [pour] votre confirmation, nous patientons.", fix: "de" },
      { marked: "Restant dans l'attente [par] vos instructions, je vous salue.", fix: "de" },
    ]},
    { ruleSlug: "pro-je-reste-disposition", sentences: [
      { marked: "Je demeure à votre [écoute] pour toute question technique.", fix: "disposition" },
      { marked: "Le service reste à votre [écoute] jusqu'à la livraison.", fix: "disposition" },
    ]},
    { ruleSlug: "pro-objet-message", sentences: [
      { marked: "Objet : [résilier] mon contrat d'assurance habitation.", fix: "résiliation de" },
      { marked: "Objet du message : [reporter] notre rendez-vous du 3 juin.", fix: "report de" },
    ]},
    { ruleSlug: "pro-accuser-reception", sentences: [
      { marked: "Nous accusons [la] réception de votre lettre recommandée.", fix: "à supprimer" },
      { marked: "Merci d'accuser [bonne] réception de ces trois pièces.", fix: "à supprimer" },
    ]},
    { ruleSlug: "pro-veuillez-trouver", sentences: [
      { marked: "[Veuiller] trouver ci-joint le règlement intérieur.", fix: "Veuillez" },
      { marked: "Vous [trouverai] ci-joint les justificatifs demandés.", fix: "trouverez" },
    ]},
    { ruleSlug: "pro-second-degre-politesse", sentences: [
      { marked: "Monsieur le Recteur, veuillez agréer, [Monsieur], mes salutations.", fix: "Monsieur le Recteur," },
      { marked: "Madame, Monsieur, recevez, [Monsieur], mes salutations distinguées.", fix: "Madame, Monsieur," },
    ]},
    { ruleSlug: "pro-je-me-permets", sentences: [
      { marked: "Je me permets [pour] vous relancer une dernière fois.", fix: "de" },
      { marked: "Elle s'est permis [à] contacter directement la direction.", fix: "de" },
    ]},
    { ruleSlug: "pro-vous-de-politesse", sentences: [
      { marked: "Monsieur, vous serez [convoqués] le 12 septembre.", fix: "convoqué" },
      { marked: "Madame, vous êtes [inscrits] à la session de printemps.", fix: "inscrite" },
    ]},
    { ruleSlug: "pro-au-plaisir", sentences: [
      { marked: "Au plaisir [que] nous nous revoyions très prochainement.", fix: "de" },
      { marked: "Au plaisir [pour] vous rencontrer lors de ce colloque.", fix: "de" },
    ]},
    { ruleSlug: "pro-excuses", sentences: [
      { marked: "Je [m'excuse] de ce retard tout à fait involontaire.", fix: "vous prie de m'excuser" },
      { marked: "La direction [s'excuse] auprès de tous les usagers.", fix: "vous prie de l'excuser" },
    ]},
    { ruleSlug: "pro-relance-polie", sentences: [
      { marked: "Je [relance] pour la deuxième fois ce dossier bloqué.", fix: "reviens sur" },
      { marked: "Notre comptabilité [relance] votre service depuis mars.", fix: "sollicite" },
    ]},
    { ruleSlug: "pro-bonjour-monsieur", sentences: [
      { marked: "[Bonjour], je vous écris au sujet de votre annonce.", fix: "Madame, Monsieur," },
      { marked: "Il a ouvert sa lettre par un [«Salut»] très déplacé.", fix: "« Monsieur »" },
    ]},
    { ruleSlug: "pro-a-lattention-de", sentences: [
      { marked: "Pli à [l'intention] du service des ressources humaines.", fix: "l'attention" },
      { marked: "Message à [l'intention] de tous les chefs d'équipe.", fix: "l'attention" },
    ]},
    { ruleSlug: "pro-pieces-jointes-accord", sentences: [
      { marked: "Vous trouverez en [pièce] jointes les quatre attestations.", fix: "pièces" },
      { marked: "Ci-joint les [pièce] d'identité des deux titulaires du compte.", fix: "pièces" },
    ]},

    /* ── lot 005 : cas discutés (toutes correctes) et homophones ── */
    { ruleSlug: "discute-apres-que", sentences: [
      { marked: "Après qu'elle eut parlé, plus personne n'osa intervenir.", fix: null },
      { marked: "Il est rentré après que la nuit fut tombée.", fix: null },
    ]},
    { ruleSlug: "discute-moitie-accord", sentences: [
      { marked: "La moitié du personnel travaille encore le samedi.", fix: null },
      { marked: "La moitié des dossiers ont été traités avant midi.", fix: null },
    ]},
    { ruleSlug: "discute-au-temps-pour-moi", sentences: [
      { marked: "Au temps pour moi : la séance était bien à dix heures.", fix: null },
      { marked: "Autant pour moi, j'avais confondu les deux adresses.", fix: null },
    ]},
    { ruleSlug: "discute-par-contre", sentences: [
      { marked: "Le prix est élevé ; par contre, la qualité est là.", fix: null },
      { marked: "Le parcours est long ; en revanche, il est très ombragé.", fix: null },
    ]},
    { ruleSlug: "discute-second-deuxieme", sentences: [
      { marked: "Il occupe le second rang depuis le début du tournoi.", fix: null },
      { marked: "C'est la deuxième réunion annulée en quinze jours.", fix: null },
    ]},
    { ruleSlug: "discute-espece-de", sentences: [
      { marked: "Une espèce de vieux hangar sert d'atelier au menuisier.", fix: null },
      { marked: "Une espèce de bruit sourd montait de la cave.", fix: null },
    ]},
    { ruleSlug: "discute-suite-a", sentences: [
      { marked: "Suite à cet incident, la procédure a été revue.", fix: null },
      { marked: "Comme suite à notre échange, je vous adresse ce devis.", fix: null },
    ]},
    { ruleSlug: "discute-remercier-pour", sentences: [
      { marked: "Je vous remercie de votre accueil chaleureux.", fix: null },
      { marked: "Il l'a remerciée pour les fleurs qu'elle avait apportées.", fix: null },
    ]},
    { ruleSlug: "discute-ainsi-que", sentences: [
      { marked: "Le trésorier ainsi que le secrétaire ont signé le registre.", fix: null },
      { marked: "La pluie, ainsi que le vent, retardait les travaux.", fix: null },
    ]},
    { ruleSlug: "discute-avoir-lair", sentences: [
      { marked: "Ces pommes ont l'air excellentes, prenons-en un kilo.", fix: null },
      { marked: "Cette façade a l'air fraîchement repeint.", fix: null },
    ]},
    { ruleSlug: "discute-cle-clef", sentences: [
      { marked: "La clef de la remise pend derrière la porte.", fix: null },
      { marked: "Le témoin clé de l'affaire n'a jamais été retrouvé.", fix: null },
    ]},
    { ruleSlug: "discute-apres-midi-genre", sentences: [
      { marked: "Nous consacrerons tout un après-midi à ce classement.", fix: null },
      { marked: "Une après-midi entière n'aura pas suffi à tout ranger.", fix: null },
    ]},
    { ruleSlug: "resonner-raisonner", sentences: [
      { marked: "Le hall [raisonnait] du bruit des pas pressés.", fix: "résonnait" },
      { marked: "Personne n'a réussi à le [résonner] ce soir-là.", fix: "raisonner" },
    ]},
    { ruleSlug: "teinter-tinter", sentences: [
      { marked: "Les verres ont [teinté] au moment du toast.", fix: "tinté" },
      { marked: "Le ciel se [tintait] de rouge au-dessus des toits.", fix: "teintait" },
    ]},
    { ruleSlug: "flan-flanc", sentences: [
      { marked: "Le sentier longe le [flan] de la colline sur deux kilomètres.", fix: "flanc" },
      { marked: "Ce [flanc] pâtissier est bien meilleur tiède.", fix: "flan" },
    ]},
    { ruleSlug: "cahot-chaos", sentences: [
      { marked: "Les [chaos] du chemin ont desserré la remorque.", fix: "cahots" },
      { marked: "Le [cahot] a duré jusqu'à l'arrivée des secours.", fix: "chaos" },
    ]},
    { ruleSlug: "tribu-tribut", sentences: [
      { marked: "Cette [tribut] vit encore de la chasse et de la pêche.", fix: "tribu" },
      { marked: "Le village a payé un lourd [tribu] à l'inondation.", fix: "tribut" },
    ]},
    { ruleSlug: "repaire-repere", sentences: [
      { marked: "Le vieux moulin servait de [repère] aux contrebandiers.", fix: "repaire" },
      { marked: "Sans [repaire] visible, on tourne vite en rond.", fix: "repère" },
    ]},
    { ruleSlug: "desert-dessert", sentences: [
      { marked: "La rue était [dessert] à cette heure de la nuit.", fix: "déserte" },
      { marked: "Le [désert] est compris dans le menu du midi.", fix: "dessert" },
    ]},
    { ruleSlug: "golf-golfe", sentences: [
      { marked: "Le [golf] du Morbihan abrite des dizaines d'îles.", fix: "golfe" },
      { marked: "Il pratique le [golfe] depuis sa retraite anticipée.", fix: "golf" },
    ]},
    { ruleSlug: "filtre-philtre", sentences: [
      { marked: "Le [philtre] à air doit être changé chaque année.", fix: "filtre" },
      { marked: "Le conte parle d'un [filtre] préparé à minuit.", fix: "philtre" },
    ]},
    { ruleSlug: "mur-mur-accent", sentences: [
      { marked: "Les figues ne sont pas encore assez [mures].", fix: "mûres" },
      { marked: "Le [mûr] de clôture s'est fissuré cet hiver.", fix: "mur" },
    ]},
    { ruleSlug: "du-du-accent", sentences: [
      { marked: "Elle a [du] renoncer à ce voyage pour raisons de santé.", fix: "dû" },
      { marked: "Les sommes [dûes] figurent au bas du relevé.", fix: "dues" },
    ]},
    { ruleSlug: "sur-sur-accent", sentences: [
      { marked: "Nous sommes [sur] de pouvoir livrer avant vendredi.", fix: "sûrs" },
      { marked: "Le chat dort [sûr] le rebord de la fenêtre.", fix: "sur" },
    ]},
    { ruleSlug: "parti-partie", sentences: [
      { marked: "Une bonne [parti] du public est partie avant la fin.", fix: "partie" },
      { marked: "Il a su tirer [partie] de cette mauvaise nouvelle.", fix: "parti" },
    ]},
  ],
};
