/**
 * Étape C — densification des Accords (41 règles, 98 phrases).
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY_ACCORDS: ContentBatch = {
  id: "densify-accords",
  rules: [],
  additions: [
    { ruleSlug: "pp-être", sentences: [
      { marked: "Les feuilles sont [tombé] très tôt cette année.", fix: "tombées" },
    ]},
    { ruleSlug: "adj-distance", sentences: [
      { marked: "Une décision, prise après de longs débats, restée [confidentiel].", fix: "confidentielle" },
      { marked: "Les portes du fond, repeintes l'an dernier, sont [gonflé] par l'humidité.", fix: "gonflées" },
    ]},
    { ruleSlug: "pronominaux", sentences: [
      { marked: "Ils se sont [souris] discrètement pendant toute la cérémonie.", fix: "souri" },
    ]},
    { ruleSlug: "rendu-compte", sentences: [
      { marked: "Elles se sont [rendues] compte de l'erreur bien trop tard.", fix: "rendu" },
      { marked: "Nous nous sommes [rendus] compte que la porte était ouverte.", fix: "rendu" },
    ]},
    { ruleSlug: "fait-infinitif", sentences: [
      { marked: "Les robes qu'elle s'est [faites] coudre coûtent une fortune.", fix: "fait" },
      { marked: "Elle s'est [faite] opérer au début du mois de mars.", fix: "fait" },
    ]},
    { ruleSlug: "pp-infinitif", sentences: [
      { marked: "Les enfants que j'ai [entendu] chanter avaient tous dix ans.", fix: "entendus" },
      { marked: "La chanson que j'ai [entendue] chanter m'a beaucoup émue.", fix: "entendu" },
      { marked: "Les ouvriers que nous avons [vu] travailler méritent des félicitations.", fix: "vus" },
    ]},
    { ruleSlug: "sujet-éloigné", sentences: [
      { marked: "Le panier de fruits mûrs [attendent] sur la table de la cuisine.", fix: "attend" },
      { marked: "La liste des candidats retenus [seront] affichée demain matin.", fix: "sera" },
    ]},
    { ruleSlug: "cest-moi-qui", sentences: [
      { marked: "C'est nous qui [ont] proposé cette date au départ.", fix: "avons" },
      { marked: "Après tout, c'est vous qui [décide] de la suite.", fix: "décidez" },
    ]},
    { ruleSlug: "la-plupart", sentences: [
      { marked: "La plupart des spectateurs [est] resté jusqu'à la fin.", fix: "sont" },
      { marked: "Beaucoup de candidats [a] renoncé avant même l'épreuve orale.", fix: "ont" },
    ]},
    { ruleSlug: "plus-dun", sentences: [
      { marked: "Plus d'un participant se sont [plaints] de l'organisation.", fix: "plaint" },
      { marked: "Depuis cette rencontre, plus d'une année se sont [écoulées].", fix: "écoulée" },
      { marked: "Plus d'un spectateur [sont] repartis avant l'entracte.", fix: "est" },
    ]},
    { ruleSlug: "aucun", sentences: [
      { marked: "Il n'a présenté [aucuns] argument convaincant devant la commission.", fix: "aucun" },
      { marked: "Nous n'avons reçu [aucunes] nouvelle depuis son départ.", fix: "aucune" },
    ]},
    { ruleSlug: "vingt-cent", sentences: [
      { marked: "Le manuscrit compte trois [cents] douze pages numérotées.", fix: "cent" },
      { marked: "Il a payé quatre-[vingt] euros pour cette réparation.", fix: "vingts" },
    ]},
    { ruleSlug: "couleurs", sentences: [
      { marked: "Elle porte des chaussures [marrons] achetées en solde.", fix: "marron" },
      { marked: "Les murs [verts] pâle donnent une impression de calme.", fix: "vert" },
    ]},
    { ruleSlug: "demi", sentences: [
      { marked: "Nous avons attendu deux heures et [demis] sous la pluie.", fix: "demie" },
      { marked: "Il a mangé une [demie-]baguette avant le repas.", fix: "demi-" },
    ]},
    { ruleSlug: "ci-joint", sentences: [
      { marked: "Vous trouverez [ci-jointes] les pièces que vous réclamiez.", fix: "ci-joint" },
      { marked: "Les attestations [ci-joint] complètent votre dossier de candidature.", fix: "ci-jointes" },
    ]},
    { ruleSlug: "pluriel-al", sentences: [
      { marked: "Les [carnavaux] de la région attirent des milliers de visiteurs.", fix: "carnavals" },
      { marked: "Trois [chevals] paissaient au fond de la prairie.", fix: "chevaux" },
    ]},
    { ruleSlug: "pluriel-ou", sentences: [
      { marked: "Il a ramassé des [caillous] tout le long du sentier.", fix: "cailloux" },
      { marked: "Les [hibous] hululent dès la tombée de la nuit.", fix: "hiboux" },
    ]},
    { ruleSlug: "pluriel-eu", sentences: [
      { marked: "Deux [pneux] ont crevé sur la même portion de route.", fix: "pneus" },
      { marked: "Les [feus] de circulation sont en panne depuis ce matin.", fix: "feux" },
    ]},
    { ruleSlug: "noms-composés", sentences: [
      { marked: "Deux [ouvres-boîtes] traînaient au fond du tiroir.", fix: "ouvre-boîtes" },
      { marked: "Les [tires-bouchons] sont rangés dans le buffet du salon.", fix: "tire-bouchons" },
    ]},
    { ruleSlug: "accord-on", sentences: [
      { marked: "On [sont] arrivés bien avant l'ouverture des portes.", fix: "est" },
      { marked: "Quand on [veulent] réussir, on s'en donne les moyens.", fix: "veut" },
      { marked: "On [ont] compris que la réunion serait longue.", fix: "a" },
    ]},
    { ruleSlug: "nu-demi", sentences: [
      { marked: "Elle a traversé le couloir [nus-]pieds sans faire de bruit.", fix: "nu-" },
      { marked: "Les enfants couraient tête [nu] sous le soleil de midi.", fix: "nue" },
    ]},
    { ruleSlug: "pp-impersonnel", sentences: [
      { marked: "La patience qu'il a [fallue] dépasse tout ce qu'on imagine.", fix: "fallu" },
      { marked: "Cette semaine, les averses qu'il a [plues] ont tout inondé.", fix: "plu" },
      { marked: "En août, la chaleur qu'il a [faite] a battu des records.", fix: "fait" },
    ]},
    { ruleSlug: "pp-couté", sentences: [
      { marked: "Les trois heures que ce trajet m'a [coûtées] furent pénibles.", fix: "coûté" },
      { marked: "Les efforts que ce projet m'a [coûté] méritaient mieux.", fix: "coûtés" },
      { marked: "Les kilos qu'il a [pesés] à la naissance sont notés là.", fix: "pesé" },
    ]},
    { ruleSlug: "pp-en", sentences: [
      { marked: "Des erreurs, j'en ai [commises] plus que je ne l'avoue.", fix: "commis" },
      { marked: "Des livres, elle en a [lus] toute sa vie sans compter.", fix: "lu" },
      { marked: "De ces fruits, nous en avons [cueillis] deux pleins paniers.", fix: "cueilli" },
    ]},
    { ruleSlug: "essentiellement-pronominaux", sentences: [
      { marked: "Elles se sont [enfui] dès les premières gouttes de pluie.", fix: "enfuies" },
      { marked: "Elle s'est [souvenu] de son nom au dernier moment.", fix: "souvenue" },
    ]},
    { ruleSlug: "excepté-vu", sentences: [
      { marked: "[Exceptées] les deux dernières pages, tout est relu.", fix: "Excepté" },
      { marked: "La séance sera reportée, [vues] les circonstances actuelles.", fix: "vu" },
      { marked: "Plus personne ne répond au standard, [passées] huit heures.", fix: "passé" },
    ]},
    { ruleSlug: "y-compris", sentences: [
      { marked: "Tout est compris, y [comprises] les charges de copropriété.", fix: "compris" },
      { marked: "Y [comprises] les taxes, la facture atteint mille euros.", fix: "compris" },
      { marked: "Les frais, taxes y [compris], seront réglés en mars.", fix: "comprises" },
    ]},
    { ruleSlug: "possible", sentences: [
      { marked: "Il a rendu le devoir le plus tôt [possibles] ce jour-là.", fix: "possible" },
      { marked: "Prends le moins de bagages [possibles] pour ce voyage.", fix: "possible" },
      { marked: "Elle a posé le plus de questions [possibles] au conférencier.", fix: "possible" },
    ]},
    { ruleSlug: "cest-ce-sont", sentences: [
      { marked: "[C'est] les voisins qui ont prévenu les pompiers.", fix: "Ce sont" },
      { marked: "En réalité, [c'est] eux qui ont trouvé la solution.", fix: "ce sont" },
      { marked: "Ce [sont] moi qui ai réservé la salle pour demain.", fix: "C'est" },
    ]},
    { ruleSlug: "un-des-qui", sentences: [
      { marked: "C'est un des rares livres qui [mérite] d'être relu.", fix: "méritent" },
      { marked: "Voilà une des raisons qui [explique] son départ précipité.", fix: "expliquent" },
      { marked: "C'est un des films qui m'[a] le plus marqué.", fix: "m'ont" },
    ]},
    { ruleSlug: "tout-le-monde", sentences: [
      { marked: "Tout le monde [sont] rentrés avant la nuit tombée.", fix: "est" },
      { marked: "Personne n'[ont] su répondre à cette question simple.", fix: "n'a" },
    ]},
    { ruleSlug: "quelque-chose-de", sentences: [
      { marked: "Il y a quelque chose de [bizarres] dans cette affaire.", fix: "bizarre" },
      { marked: "Elle n'a rien dit de [méchante] à son sujet.", fix: "méchant" },
    ]},
    { ruleSlug: "oeil-yeux", sentences: [
      { marked: "Ses deux [œils] brillaient de fatigue et d'excitation.", fix: "yeux" },
      { marked: "Les [ciels] se sont dégagés en fin d'après-midi.", fix: "cieux" },
      { marked: "Ses [aïeuls] ont fui la guerre au siècle dernier.", fix: "aïeux" },
    ]},
    { ruleSlug: "grand-mere", sentences: [
      { marked: "Nos deux [grand-mères] vivaient dans le même village.", fix: "grands-mères" },
      { marked: "Les [grand-parents] arrivent toujours avec des cadeaux.", fix: "grands-parents" },
      { marked: "Ces [grand-pères] se retrouvent chaque jeudi au café.", fix: "grands-pères" },
    ]},
    { ruleSlug: "adj-invariables", sentences: [
      { marked: "Elles portaient des tenues très [chics] pour l'occasion.", fix: "chic" },
      { marked: "Ces modèles [standards] coûtent bien moins cher.", fix: "standard" },
      { marked: "Nous avons passé des vacances [supers] cette année.", fix: "super" },
    ]},
    { ruleSlug: "mi-semi", sentences: [
      { marked: "Il est resté [mie-]chemin entre les deux villages.", fix: "mi-" },
      { marked: "Les portes [semies-]ouvertes laissaient passer un courant d'air.", fix: "semi-" },
      { marked: "Elle avait les yeux [mis-]clos, presque endormie.", fix: "mi-" },
    ]},
    { ruleSlug: "deux-genres", sentences: [
      { marked: "Un pull et une écharpe [neuves] l'attendaient sur le lit.", fix: "neufs" },
      { marked: "Le chien et la chatte semblaient [inquiètes] devant l'orage.", fix: "inquiets" },
      { marked: "Une lampe et un cadre [dorées] ornaient l'entrée.", fix: "dorés" },
    ]},
    { ruleSlug: "des-plus", sentences: [
      { marked: "Cette démarche est des plus [simple] à comprendre.", fix: "simples" },
      { marked: "L'exercice reste des moins [évident] pour un débutant.", fix: "évidents" },
      { marked: "Sa réponse fut des plus [clair] et des plus nettes.", fix: "claires" },
    ]},
    { ruleSlug: "pluriel-ail", sentences: [
      { marked: "Les [travails] de rénovation dureront tout l'été.", fix: "travaux" },
      { marked: "Il a restauré tous les [vitrails] de la chapelle.", fix: "vitraux" },
    ]},
    { ruleSlug: "leur-possessif", sentences: [
      { marked: "Les enfants ont oublié [leurs] cartable dans le bus.", fix: "leur" },
      { marked: "Ils ont rangé [leur] affaires avant de partir en classe.", fix: "leurs" },
    ]},
    { ruleSlug: "nombreux-sujet", sentences: [
      { marked: "Les Trois Mousquetaires [passe] à la télévision ce soir.", fix: "passent" },
      { marked: "Les Alpes [attire] chaque hiver des millions de skieurs.", fix: "attirent" },
      { marked: "Les Deux-Sèvres [est] un département de l'ouest.", fix: "sont" },
    ]},
  ],
};
