/**
 * Étape C, troisième passe — lots 001 et 002 portés de 5 à 7 phrases.
 *
 * Les 375 règles ajoutées après le lot d'origine rattrapent ici les 243
 * premières, qui disposent déjà de sept phrases chacune.
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY3_PONCTUATION_TYPO: ContentBatch = {
  id: "densify3-ponctuation-typo",
  rules: [],
  additions: [
    /* ── lot 001 : ponctuation ── */
    { ruleSlug: "espace-exclamation", sentences: [
      { marked: "Quelle [horreur!] Le vase était dans la famille depuis toujours.", fix: "horreur !" },
      { marked: "Il a crié [bravo!] avant même la fin du morceau.", fix: "bravo !" },
    ]},
    { ruleSlug: "espace-interrogation", sentences: [
      { marked: "Sais-tu où il a rangé les [clés?] Je les cherche partout.", fix: "clés ?" },
      { marked: "[Comment?] Je n'ai rien entendu de ce qu'il a dit.", fix: "Comment ?" },
    ]},
    { ruleSlug: "espace-point-virgule", sentences: [
      { marked: "Il avait tout [prévu;] la pluie a bouleversé le programme.", fix: "prévu ;" },
      { marked: "Le premier acte est [réussi;] le second traîne en longueur.", fix: "réussi ;" },
    ]},
    { ruleSlug: "espace-deux-points", sentences: [
      { marked: "Une chose l'inquiétait [vraiment:] la date de livraison.", fix: "vraiment :" },
      { marked: "Il a posé la [question:] qui paiera les travaux ?", fix: "question :" },
    ]},
    { ruleSlug: "guillemets-francais", sentences: [
      { marked: "Le contrat parle d'un [\"délai\"] sans jamais le chiffrer.", fix: "« délai »" },
      { marked: "Elle a soufflé [\"enfin\"] en refermant le dernier carton.", fix: "« enfin »" },
    ]},
    { ruleSlug: "espace-guillemets", sentences: [
      { marked: "Le témoin a répété [«jamais»] devant toute la cour.", fix: "« jamais »" },
      { marked: "L'affiche annonçait [«complet»] dès le premier jour.", fix: "« complet »" },
    ]},
    { ruleSlug: "virgule-mais", sentences: [
      { marked: "Le devis était [correct] mais les délais restaient intenables.", fix: "correct," },
      { marked: "Nous avons tout [essayé] mais rien n'a fonctionné.", fix: "essayé," },
    ]},
    { ruleSlug: "virgule-car", sentences: [
      { marked: "Le vol a été [annulé] car la piste était verglacée.", fix: "annulé," },
      { marked: "Emporte un pull, la soirée sera [fraîche] car le vent tourne.", fix: "fraîche," },
    ]},
    { ruleSlug: "virgule-donc-intercale", sentences: [
      { marked: "Le dossier [partira] donc, dès la signature du directeur.", fix: "partira," },
      { marked: "Nous [reviendrons] donc, sur ce point à la prochaine séance.", fix: "reviendrons," },
    ]},
    { ruleSlug: "virgule-apposition", sentences: [
      { marked: "Camille, ma cousine de [Rennes] arrive demain matin.", fix: "Rennes," },
      { marked: "Ce village, célèbre depuis le [film] attire des touristes.", fix: "film," },
    ]},
    { ruleSlug: "virgule-relative-explicative", sentences: [
      { marked: "Ma voisine, qui travaille de [nuit] dort toute la journée.", fix: "nuit," },
      { marked: "Ce chemin, que personne n'emprunte [plus] mène à la rivière.", fix: "plus," },
    ]},
    { ruleSlug: "virgule-complement-tete", sentences: [
      { marked: "Au petit [matin] la brume recouvrait toute la vallée.", fix: "matin," },
      { marked: "Faute de [temps] nous avons renoncé à la visite du musée.", fix: "temps," },
    ]},
    { ruleSlug: "virgule-vocatif", sentences: [
      { marked: "[Docteur] pourriez-vous me réexpliquer ce traitement ?", fix: "Docteur," },
      { marked: "Attends une seconde [Thomas] je n'ai pas fini de parler.", fix: "Thomas," },
    ]},
    { ruleSlug: "virgule-enumeration", sentences: [
      { marked: "Il a emporté un [duvet] une lampe et deux cordes.", fix: "duvet," },
      { marked: "Le menu propose une [entrée] un plat et un dessert.", fix: "entrée," },
    ]},
    { ruleSlug: "virgule-incise", sentences: [
      { marked: "Cette histoire, [dit-on] remonte au siècle dernier.", fix: "dit-on," },
      { marked: "Le résultat, [croyait-il] ne faisait aucun doute.", fix: "croyait-il," },
    ]},
    { ruleSlug: "virgule-cependant", sentences: [
      { marked: "[Néanmoins] la décision revient au conseil d'administration.", fix: "Néanmoins," },
      { marked: "En [définitive] personne n'a voulu prendre la parole.", fix: "définitive," },
    ]},
    { ruleSlug: "virgule-si-conditionnel", sentences: [
      { marked: "Si le colis n'arrive pas [demain] réclame un remboursement.", fix: "demain," },
      { marked: "Si tu veux mon [avis] mieux vaut attendre encore un peu.", fix: "avis," },
    ]},
    { ruleSlug: "deux-points-enumeration", sentences: [
      { marked: "Le sac contenait [ceci] un carnet, un stylo et deux clés.", fix: "ceci :" },
      { marked: "Deux choses [manquent] la signature et le cachet.", fix: "manquent :" },
    ]},
    { ruleSlug: "points-suspension", sentences: [
      { marked: "Elle a hésité, cherché ses [mots.....] puis renoncé.", fix: "mots…" },
      { marked: "Il murmura quelque chose [d'inaudible..] avant de sortir.", fix: "d'inaudible…" },
    ]},
    { ruleSlug: "parentheses-ponctuation", sentences: [
      { marked: "Tout était prêt (ou presque [enfin.)] Personne n'a rien vu.", fix: "enfin)." },
      { marked: "La visite dure une heure (guide [compris.)] Réservez tôt.", fix: "compris)." },
    ]},
    { ruleSlug: "tiret-incise", sentences: [
      { marked: "Son idée — pourtant très [ancienne] revient à la mode.", fix: "ancienne —" },
      { marked: "Le rapport — remis en [juin] dort encore dans un tiroir.", fix: "juin —" },
    ]},
    { ruleSlug: "virgule-oui-non", sentences: [
      { marked: "[Oui] tout est prêt pour la réunion de demain matin.", fix: "Oui," },
      { marked: "[Non] rien ne justifie un tel retard de livraison.", fix: "Non," },
    ]},
    { ruleSlug: "deux-points-citation", sentences: [
      { marked: "Le juge a [tranché] « l'affaire est close ».", fix: "tranché :" },
      { marked: "Elle a [soupiré] « je n'y peux vraiment rien ».", fix: "soupiré :" },
    ]},
    { ruleSlug: "virgule-gerondif-tete", sentences: [
      { marked: "En arrivant à la [gare] il a vu partir son train.", fix: "gare," },
      { marked: "Poussé par la [curiosité] il a ouvert la vieille malle.", fix: "curiosité," },
    ]},
    { ruleSlug: "virgule-lieu-date", sentences: [
      { marked: "Établi à [Dijon] le 4 février, ce document fait foi.", fix: "Dijon," },
      { marked: "Le procès-verbal a été dressé à [Reims] le 18 mars.", fix: "Reims," },
    ]},

    /* ── lot 002 : typographie ── */
    { ruleSlug: "majuscule-points-cardinaux", sentences: [
      { marked: "Il est parti travailler dans le [sud-]ouest de la France.", fix: "Sud-" },
      { marked: "Le vent d'[Est] souffle depuis trois jours sans faiblir.", fix: "est" },
    ]},
    { ruleSlug: "majuscule-institutions", sentences: [
      { marked: "Le Conseil [Constitutionnel] rendra sa décision jeudi.", fix: "constitutionnel" },
      { marked: "La [banque] de France publie ses prévisions demain.", fix: "Banque" },
    ]},
    { ruleSlug: "majuscule-fonctions", sentences: [
      { marked: "Le [Recteur] d'académie a visité l'établissement lundi.", fix: "recteur" },
      { marked: "Nous attendons le [Secrétaire] général du syndicat.", fix: "secrétaire" },
    ]},
    { ruleSlug: "majuscule-rues", sentences: [
      { marked: "Le cabinet se trouve [Rue] Sainte-Catherine, au numéro douze.", fix: "rue" },
      { marked: "Ils habitent [Impasse] des Lilas depuis leur mariage.", fix: "impasse" },
    ]},
    { ruleSlug: "majuscule-accentuee", sentences: [
      { marked: "[Elève] de troisième, il prépare déjà son orientation.", fix: "Élève" },
      { marked: "Le mot [EPOUSE] figure en capitales sur l'acte notarié.", fix: "ÉPOUSE" },
    ]},
    { ruleSlug: "majuscule-apres-deux-points", sentences: [
      { marked: "Le motif est simple : [Le] budget ne suit pas.", fix: "le" },
      { marked: "Reste une inconnue : [Quand] les travaux commenceront-ils ?", fix: "quand" },
    ]},
    { ruleSlug: "majuscule-fetes", sentences: [
      { marked: "Le lundi de [pentecôte] est férié dans certaines entreprises.", fix: "Pentecôte" },
      { marked: "Les enfants attendent la [chandeleur] avec impatience.", fix: "Chandeleur" },
    ]},
    { ruleSlug: "siecles-chiffres-romains", sentences: [
      { marked: "Cette abbaye remonte au [11e] siècle, d'après les archives.", fix: "XIe" },
      { marked: "La peinture du [16ème] siècle occupe toute une aile.", fix: "XVIe" },
    ]},
    { ruleSlug: "abrev-numero", sentences: [
      { marked: "Le lot [No] 12 sera adjugé en fin de vente.", fix: "n°" },
      { marked: "Reportez-vous à la note de bas de page [n.] 4.", fix: "n°" },
    ]},
    { ruleSlug: "abrev-premier", sentences: [
      { marked: "Il est le [1ère] de sa promotion pour la troisième fois.", fix: "1er" },
      { marked: "La [1èrE] séance se tiendra le lundi suivant.", fix: "1re" },
    ]},
    { ruleSlug: "abrev-ordinaux", sentences: [
      { marked: "Nous en sommes au [7ème] essai depuis ce matin.", fix: "7e" },
      { marked: "Le train part du [21ème] quai, tout au fond.", fix: "21e" },
    ]},
    { ruleSlug: "abrev-civilites-francaises", sentences: [
      { marked: "[Mrs] Lambert nous recevra jeudi à quinze heures.", fix: "Mme" },
      { marked: "Écrivez à [Mr.] Girard, service des ressources humaines.", fix: "M." },
    ]},
    { ruleSlug: "sigles-sans-points", sentences: [
      { marked: "Le [S.M.I.C.] a été revalorisé au premier janvier.", fix: "SMIC" },
      { marked: "Elle travaille à la [C.A.F.] depuis huit ans.", fix: "CAF" },
    ]},
    { ruleSlug: "abrev-confer", sentences: [
      { marked: "Voir la démonstration complète, [cf] chapitre suivant.", fix: "cf." },
      { marked: "Trois pièces sont requises, [c-à-d] les trois justificatifs.", fix: "c.-à-d." },
    ]},
    { ruleSlug: "heures-format", sentences: [
      { marked: "Le rendez-vous est fixé à [16h45] au premier étage.", fix: "16 h 45" },
      { marked: "L'atelier se termine vers [12h] tous les mercredis.", fix: "12 h" },
    ]},
    { ruleSlug: "nombres-milliers", sentences: [
      { marked: "La commune compte [8.400] habitants au dernier recensement.", fix: "8 400" },
      { marked: "Le prix affiché atteint [24,900] euros hors options.", fix: "24 900" },
    ]},
    { ruleSlug: "nombres-decimale", sentences: [
      { marked: "Le tissu mesure [1.80] mètre de large exactement.", fix: "1,80" },
      { marked: "La note moyenne s'établit à [14.5] sur vingt.", fix: "14,5" },
    ]},
    { ruleSlug: "unites-espace", sentences: [
      { marked: "Le sac de ciment pèse [35kg] et se porte à deux.", fix: "35 kg" },
      { marked: "La planche fait [180cm] de long sur quarante de large.", fix: "180 cm" },
    ]},
    { ruleSlug: "pourcentage-espace", sentences: [
      { marked: "Le taux d'occupation atteint [92%] en pleine saison.", fix: "92 %" },
      { marked: "Une hausse de [3%] est prévue au premier trimestre.", fix: "3 %" },
    ]},
    { ruleSlug: "euro-place", sentences: [
      { marked: "L'abonnement annuel coûte [€120] pour les étudiants.", fix: "120 €" },
      { marked: "Le repas revient à [18€] par personne, boisson comprise.", fix: "18 €" },
    ]},
    { ruleSlug: "date-premier-jour", sentences: [
      { marked: "Le bail commence le [1] avril, comme convenu.", fix: "1er" },
      { marked: "L'exposition ouvre le [1] mai et ferme fin juin.", fix: "1er" },
    ]},
    { ruleSlug: "nombres-en-lettres", sentences: [
      { marked: "Elle a posé [5] questions successives au conférencier.", fix: "cinq" },
      { marked: "Le texte tient en [7] paragraphes bien construits.", fix: "sept" },
    ]},
    { ruleSlug: "titres-oeuvres-majuscule", sentences: [
      { marked: "Il relit chaque hiver Les [Trois] Mousquetaires.", fix: "trois" },
      { marked: "Elle a emprunté Le [Père] Goriot à la bibliothèque.", fix: "père" },
    ]},
    { ruleSlug: "espace-insecable-guillemet-ouvrant", sentences: [
      { marked: "Le texte parle d'un [«effort] collectif » sans le définir.", fix: "« effort" },
      { marked: "On lui reproche son [«absence] de méthode » depuis un an.", fix: "« absence" },
    ]},
    { ruleSlug: "million-milliard-symbole", sentences: [
      { marked: "L'investissement atteint [8M€] sur cinq exercices.", fix: "8 millions d'euros" },
      { marked: "La dette dépasse [15Md€] selon le dernier rapport.", fix: "15 milliards d'euros" },
    ]},
  ],
};
