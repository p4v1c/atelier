/**
 * Étape C — densification de l'Orthographe d'usage (40 règles, 93 phrases).
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY_ORTHOGRAPHE: ContentBatch = {
  id: "densify-orthographe",
  rules: [],
  additions: [
    { ruleSlug: "parmi-malgré", sentences: [
      { marked: "Il a retrouvé son nom [parmis] les inscrits de dernière minute.", fix: "parmi" },
      { marked: "Nous sortirons [malgrés] le vent et la pluie annoncés.", fix: "malgré" },
    ]},
    { ruleSlug: "appeler", sentences: [
      { marked: "Nous [appellons] le médecin dès l'ouverture du cabinet.", fix: "appelons" },
      { marked: "Vous [jettez] les papiers dans la mauvaise poubelle.", fix: "jetez" },
    ]},
    { ruleSlug: "ent-ant", sentences: [
      { marked: "Ce raisonnement est [cohérant] du début à la fin.", fix: "cohérent" },
      { marked: "Son témoignage paraît [pertinant] à tous les membres du jury.", fix: "pertinent" },
    ]},
    { ruleSlug: "amment-emment", sentences: [
      { marked: "Il agit [prudament] dans toutes les situations délicates.", fix: "prudemment" },
      { marked: "Elle a répondu [savament] à chacune des questions posées.", fix: "savamment" },
    ]},
    { ruleSlug: "circonflexe", sentences: [
      { marked: "Ces poires ne sont pas encore [mures] pour la tarte.", fix: "mûres" },
      { marked: "Il n'est pas [sur] de pouvoir venir avant midi.", fix: "sûr" },
    ]},
    { ruleSlug: "connexion", sentences: [
      { marked: "La [connection] internet est coupée depuis ce matin.", fix: "connexion" },
      { marked: "En réunion, cette [réflection] mérite d'être approfondie.", fix: "réflexion" },
    ]},
    { ruleSlug: "professionnel", sentences: [
      { marked: "Le [dévelopement] du quartier a pris cinq ans.", fix: "développement" },
    ]},
    { ruleSlug: "accueillir", sentences: [
      { marked: "L'[acceuil] des visiteurs se fait au premier étage.", fix: "accueil" },
      { marked: "Son [orgeuil] l'empêche de reconnaître ses erreurs.", fix: "orgueil" },
    ]},
    { ruleSlug: "langage", sentences: [
      { marked: "Il verse un [accompte] de trois cents euros à la commande.", fix: "acompte" },
    ]},
    { ruleSlug: "week-end", sentences: [
      { marked: "Nous partons ce [weekend] dans les Cévennes.", fix: "week-end" },
      { marked: "Le miroir est accroché [vis] à vis de la fenêtre.", fix: "vis-à-vis" },
    ]},
    { ruleSlug: "t-euphonique", sentences: [
      { marked: "[Viendra-t'il] finalement à la réunion de demain ?", fix: "Viendra-t-il" },
      { marked: "Où [va-t'on] trouver une salle à cette heure-ci ?", fix: "va-t-on" },
    ]},
    { ruleSlug: "majuscule-nationalité", sentences: [
      { marked: "Il apprend le [Portugais] depuis deux ans à peine.", fix: "portugais" },
      { marked: "Les [italiens] sont réputés pour leur cuisine régionale.", fix: "Italiens" },
    ]},
    { ruleSlug: "etc", sentences: [
      { marked: "Il faut des vis, des clous, des chevilles, [etc...] rien ne manque.", fix: "etc." },
      { marked: "Elle collectionne timbres, pièces, cartes, [etc] sans jamais trier.", fix: "etc." },
      { marked: "On y trouve romans, essais, manuels, [ect.] et bien d'autres.", fix: "etc." },
    ]},
    { ruleSlug: "cent-mille", sentences: [
      { marked: "Le stade contient trente [milles] places assises.", fix: "mille" },
      { marked: "Plusieurs [million] de personnes ont suivi l'émission.", fix: "millions" },
    ]},
    { ruleSlug: "sceptique", sentences: [
      { marked: "La fosse [sceptique] doit être vidangée tous les quatre ans.", fix: "septique" },
      { marked: "Il reste [septique] devant ces résultats trop beaux.", fix: "sceptique" },
      { marked: "Le personnel médical redoute le choc [sceptique].", fix: "septique" },
    ]},
    { ruleSlug: "quelquefois", sentences: [
      { marked: "Il lui arrive [quelquefois] de rentrer avant la nuit.", fix: "quelques fois" },
      { marked: "Nous nous sommes croisés seulement [quelquefois] cette année-là.", fix: "quelques fois" },
      { marked: "Il a essayé trois ou [quelquefois] quatre fois de suite.", fix: "quelques" },
    ]},
    { ruleSlug: "bientot", sentences: [
      { marked: "Il s'est levé [bientôt] ce matin, avant le jour.", fix: "bien tôt" },
      { marked: "Elle est arrivée [bientôt] ce matin, avant tout le monde.", fix: "bien tôt" },
      { marked: "Vingt ans, c'est [bientôt] pour prendre une telle décision.", fix: "bien tôt" },
    ]},
    { ruleSlug: "hyphen-nombres", sentences: [
      { marked: "Il a compté vingt et [un] cartons dans le garage.", fix: "vingt-et-un" },
      { marked: "La salle contient cent quatre [vingts] places numérotées.", fix: "cent-quatre-vingts" },
      { marked: "Le devis atteint trois cent [cinquante] euros au total.", fix: "trois-cent-cinquante" },
    ]},
    { ruleSlug: "accent-grave", sentences: [
      { marked: "Le [reglement] intérieur sera affiché dans le hall.", fix: "règlement" },
      { marked: "Elle enseigne au [college] depuis maintenant douze ans.", fix: "collège" },
    ]},
    { ruleSlug: "cedille", sentences: [
      { marked: "Il a [recu] le colis avec deux jours de retard.", fix: "reçu" },
      { marked: "Cette [facon] de faire ne convient à personne ici.", fix: "façon" },
    ]},
    { ruleSlug: "h-aspire", sentences: [
      { marked: "Il ne faut rien laisser au [l'hasard] dans cette affaire.", fix: "hasard" },
      { marked: "Le concert se tient dans [l'hall] de la mairie.", fix: "le hall" },
      { marked: "Elle a mesuré [l'hauteur] du mur avant de commander.", fix: "la hauteur" },
    ]},
    { ruleSlug: "elision", sentences: [
      { marked: "Il attend [que] il réponde avant de partir.", fix: "qu'il" },
      { marked: "Je crois [que] elle a raison sur ce point précis.", fix: "qu'elle" },
      { marked: "Personne [ne] a compris la consigne du premier coup.", fix: "n'a" },
    ]},
    { ruleSlug: "aujourdhui", sentences: [
      { marked: "[Aujourdhui], la réunion commence une heure plus tôt.", fix: "Aujourd'hui" },
      { marked: "Il pleut depuis [aujourd] hui sans la moindre accalmie.", fix: "aujourd'hui" },
      { marked: "Nous verrons [aujoud'hui] si le colis est arrivé.", fix: "aujourd'hui" },
    ]},
    { ruleSlug: "adresse", sentences: [
      { marked: "Il a changé d'[addresse] sans prévenir personne.", fix: "adresse" },
      { marked: "Elle vient d'[appercevoir] son collègue à l'autre bout.", fix: "apercevoir" },
      { marked: "Nous allons [aggrandir] la terrasse au printemps prochain.", fix: "agrandir" },
    ]},
    { ruleSlug: "nourrir", sentences: [
      { marked: "Il faut [nourir] le chat avant de partir travailler.", fix: "nourrir" },
      { marked: "Les fruits vont [pourir] si tu les laisses là.", fix: "pourrir" },
    ]},
    { ruleSlug: "souffrir", sentences: [
      { marked: "L'arbitre a [siflé] la fin du match trop tôt.", fix: "sifflé" },
      { marked: "Deux heures ne [sufisent] pas pour tout ranger.", fix: "suffisent" },
    ]},
    { ruleSlug: "honneur", sentences: [
      { marked: "Il faut [honnorer] la mémoire de ceux qui sont partis.", fix: "honorer" },
      { marked: "Cette conduite n'est guère [honnorable] pour un responsable.", fix: "honorable" },
      { marked: "Elle exerce ces fonctions à titre [honnoraire].", fix: "honoraire" },
    ]},
    { ruleSlug: "national", sentences: [
      { marked: "Ce choix ne paraît pas très [rationel] à l'usage.", fix: "rationnel" },
      { marked: "Le repas de Noël suit un menu [traditionel] et copieux.", fix: "traditionnel" },
    ]},
    { ruleSlug: "occasion", sentences: [
      { marked: "Il a acheté cette voiture d'[ocasion] l'an dernier.", fix: "occasion" },
      { marked: "Les travaux vont [ocuper] la rue pendant trois mois.", fix: "occuper" },
      { marked: "Cette [ocurrence] du mot n'apparaît qu'une fois.", fix: "occurrence" },
    ]},
    { ruleSlug: "chariot", sentences: [
      { marked: "Le [charriot] de supermarché grince à chaque virage.", fix: "chariot" },
      { marked: "La [charette] est restée au fond de la grange.", fix: "charrette" },
      { marked: "Il faut réparer la [charue] avant les labours.", fix: "charrue" },
    ]},
    { ruleSlug: "combatif", sentences: [
      { marked: "Elle reste [combattive] malgré les mauvaises nouvelles.", fix: "combative" },
      { marked: "Son esprit [combattif] force le respect de tous.", fix: "combatif" },
      { marked: "La [combattivité] de l'équipe a impressionné le public.", fix: "combativité" },
    ]},
    { ruleSlug: "imbecile", sentences: [
      { marked: "Il faut [aterrir] avant la tombée de la nuit.", fix: "atterrir" },
      { marked: "Son [imbécilité] a fini par lasser tout le monde.", fix: "imbécillité" },
    ]},
    { ruleSlug: "emment", sentences: [
      { marked: "Il a [apparament] oublié notre rendez-vous de mardi.", fix: "apparemment" },
      { marked: "Elle répond [inteligemment] à toutes les objections.", fix: "intelligemment" },
    ]},
    { ruleSlug: "decision", sentences: [
      { marked: "La [discution] a duré plus de trois heures.", fix: "discussion" },
      { marked: "Cette [expretion] revient dans tous ses textes.", fix: "expression" },
    ]},
    { ruleSlug: "orthographe", sentences: [
      { marked: "La [filosophie] antique reste au programme de terminale.", fix: "philosophie" },
      { marked: "La [farmacie] du village ferme le lundi matin.", fix: "pharmacie" },
      { marked: "Il collectionne les vieilles [fotographies] de famille.", fix: "photographies" },
    ]},
    { ruleSlug: "gymnastique", sentences: [
      { marked: "Le [rithme] de la phrase compte autant que le sens.", fix: "rythme" },
      { marked: "Ce [simbole] figure sur tous les documents officiels.", fix: "symbole" },
    ]},
    { ruleSlug: "consequence", sentences: [
      { marked: "Son [absance] a été remarquée par tout le service.", fix: "absence" },
      { marked: "Chez un enseignant, la [patiance] passe avant tout.", fix: "patience" },
    ]},
    { ruleSlug: "monsieur-abrev", sentences: [
      { marked: "[M] Dupont vous recevra dans un instant.", fix: "M." },
      { marked: "Les [Mrs] Bernard et Leroy président la séance.", fix: "MM." },
      { marked: "Bonjour [Mrs] Lefèvre, votre dossier est prêt.", fix: "Mme" },
    ]},
    { ruleSlug: "jours-mois", sentences: [
      { marked: "La réunion se tiendra [Mardi] prochain à dix heures.", fix: "mardi" },
      { marked: "Nous partons en vacances début [Juillet] cette année.", fix: "juillet" },
    ]},
    { ruleSlug: "trema", sentences: [
      { marked: "Il a semé du [mais] au fond du potager.", fix: "maïs" },
      { marked: "Sa question était [naive] mais pleine de bon sens.", fix: "naïve" },
    ]},
  ],
};
