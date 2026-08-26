/**
 * Étape C, troisième passe — lots 006 et 007 portés de 5 à 7 phrases.
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY3_ACCORDS_CONJ: ContentBatch = {
  id: "densify3-accords-conj",
  rules: [],
  additions: [
    /* ── lot 006 : accords ── */
    { ruleSlug: "pluriel-au-eau", sentences: [
      { marked: "Les [rideaus] du salon ont été lavés la semaine dernière.", fix: "rideaux" },
      { marked: "Deux [sarraux] pendaient au clou de l'atelier.", fix: "sarraus" },
    ]},
    { ruleSlug: "pluriel-s-x-z", sentences: [
      { marked: "Les [cass] litigieux seront examinés séparément demain.", fix: "cas" },
      { marked: "Trois [choixs] s'offrent encore au conseil municipal.", fix: "choix" },
    ]},
    { ruleSlug: "accord-tel-que", sentences: [
      { marked: "Des animaux [telle] que le renard hantent ces bois.", fix: "tels" },
      { marked: "Des pierres [tel] que le granit résistent au gel.", fix: "telles" },
    ]},
    { ruleSlug: "accord-tel-quel", sentences: [
      { marked: "Il a laissé les lieux [tel] quels après son départ.", fix: "tels" },
      { marked: "Cette phrase, reprends-la [tel] quelle dans ton rapport.", fix: "telle" },
    ]},
    { ruleSlug: "accord-chaque-chacun", sentences: [
      { marked: "Chaque [propositions] sera examinée en commission.", fix: "proposition" },
      { marked: "Chacun des membres [ont] voté à main levée.", fix: "a" },
    ]},
    { ruleSlug: "accord-nul-nulle", sentences: [
      { marked: "[Nuls] preuve ne vient étayer cette accusation.", fix: "Nulle" },
      { marked: "Il n'a rencontré [nulles] difficulté sur ce trajet.", fix: "nulle" },
    ]},
    { ruleSlug: "accord-adjectif-deux-noms", sentences: [
      { marked: "Une lampe et un tapis [neuve] égayaient la pièce.", fix: "neufs" },
      { marked: "Le grand-père et la petite-fille semblaient [ravie].", fix: "ravis" },
    ]},
    { ruleSlug: "accord-gens", sentences: [
      { marked: "De [vieux] gens patientaient devant le guichet fermé.", fix: "vieilles" },
      { marked: "Ces gens sont [bienveillantes] envers les nouveaux venus.", fix: "bienveillants" },
    ]},
    { ruleSlug: "accord-le-peu-de", sentences: [
      { marked: "Le peu de forces qui lui restait [ont] fini par céder.", fix: "a" },
      { marked: "Le peu de gestes qu'il a faits [a] suffi à convaincre.", fix: "ont" },
    ]},
    { ruleSlug: "pluriel-noms-propres", sentences: [
      { marked: "Les [Girauds] passent leurs vacances en Bretagne.", fix: "Giraud" },
      { marked: "Les [Capétien] ont régné pendant plusieurs siècles.", fix: "Capétiens" },
    ]},
    { ruleSlug: "pluriel-noms-etrangers", sentences: [
      { marked: "Deux [referenda] sont prévus dans le courant de l'année.", fix: "référendums" },
      { marked: "Les [media] traitent tous la même information depuis lundi.", fix: "médias" },
    ]},
    { ruleSlug: "accord-pourcentage-verbe", sentences: [
      { marked: "Soixante pour cent des sièges [reste] vacants.", fix: "restent" },
      { marked: "Dix pour cent du budget [ont] été gelé cette année.", fix: "a" },
    ]},
    { ruleSlug: "accord-tout-autre", sentences: [
      { marked: "[Tout] autre réponse aurait provoqué un scandale.", fix: "Toute" },
      { marked: "Il envisage la question d'une [toute] autre façon.", fix: "tout" },
    ]},
    { ruleSlug: "accord-avoir-affaire", sentences: [
      { marked: "Vous aurez [affaires] à un service très pointilleux.", fix: "affaire" },
      { marked: "Ils ont eu [affaires] à un interlocuteur peu commode.", fix: "affaire" },
    ]},
    { ruleSlug: "accord-sans-complement", sentences: [
      { marked: "Une phrase sans [verbes] reste difficile à comprendre.", fix: "verbe" },
      { marked: "Un immeuble sans [ascenseurs] décourage les acheteurs âgés.", fix: "ascenseur" },
    ]},
    { ruleSlug: "accord-verbe-apres-qui", sentences: [
      { marked: "Il fait partie de ceux qui [croit] encore au projet.", fix: "croient" },
      { marked: "Nous qui [avait] tout préparé, nous sommes déçus.", fix: "avions" },
    ]},
    { ruleSlug: "accord-collectif-groupe", sentences: [
      { marked: "Un tas de papiers [encombrent] à lui seul tout le bureau.", fix: "encombre" },
      { marked: "Une bande de gamins [courait] dans les couloirs, les uns derrière les autres.", fix: "couraient" },
    ]},
    { ruleSlug: "accord-titre-oeuvre", sentences: [
      { marked: "Les Fables de La Fontaine se [lit] encore à l'école.", fix: "lisent" },
      { marked: "Guerre et Paix [sont] un roman d'une rare ampleur.", fix: "est" },
    ]},
    { ruleSlug: "accord-moins-de-deux", sentences: [
      { marked: "Moins de deux heures [a] suffi pour tout remettre en ordre.", fix: "ont" },
      { marked: "Moins de deux jours nous [sépare] désormais de l'échéance.", fix: "séparent" },
    ]},
    { ruleSlug: "pluriel-ciel-aieul", sentences: [
      { marked: "Les [cieux] de ce peintre valent le déplacement.", fix: "ciels" },
      { marked: "Ses [aïeuls] reposent tous dans le même caveau.", fix: "aïeux" },
    ]},
    { ruleSlug: "accord-espece-sorte-de", sentences: [
      { marked: "Une sorte de couloir [étroite] menait à la cave.", fix: "étroit" },
      { marked: "Une espèce de nappe [gris] recouvrait toute la table.", fix: "grise" },
    ]},
    { ruleSlug: "accord-adjectif-apres-des-plus", sentences: [
      { marked: "C'est un des plus [ancien] métiers du monde.", fix: "anciens" },
      { marked: "Elle reste une des plus [sûre] alliées du projet.", fix: "sûres" },
    ]},
    { ruleSlug: "accord-quelques-uns", sentences: [
      { marked: "J'en ai relu [quelque-uns] hier soir seulement.", fix: "quelques-uns" },
      { marked: "Il reste [quelques-un] de ces vieilles cartes.", fix: "quelques-unes" },
    ]},
    { ruleSlug: "accord-tous-les-deux", sentences: [
      { marked: "Mes deux tantes sont venues [tous] les deux hier.", fix: "toutes" },
      { marked: "Les deux garçons ont réussi [toutes] les deux leur test.", fix: "tous" },
    ]},

    /* ── lot 007 : conjugaison ── */
    { ruleSlug: "conj-conditionnel-passe-2", sentences: [
      { marked: "Ils auraient [savoir] réagir plus tôt si on les avait prévenus.", fix: "su" },
      { marked: "Nous serions [rester] plus longtemps sans cette pluie.", fix: "restés" },
    ]},
    { ruleSlug: "conj-plus-que-parfait", sentences: [
      { marked: "Si vous [auriez] écouté, vous auriez évité l'erreur.", fix: "aviez" },
      { marked: "S'ils [seraient] partis à l'heure, ils seraient déjà là.", fix: "étaient" },
    ]},
    { ruleSlug: "conj-envoyer-futur", sentences: [
      { marked: "Ils [enveront] le devis avant la fin de la semaine.", fix: "enverront" },
      { marked: "Nous vous [renverions] volontiers le formulaire signé.", fix: "renverrions" },
    ]},
    { ruleSlug: "conj-imperatif-negatif", sentences: [
      { marked: "Ne [parle-lui] pas de cette histoire avant demain.", fix: "lui parle" },
      { marked: "Ne [prends-le] pas mal, ce n'était qu'une plaisanterie.", fix: "le prends" },
    ]},
    { ruleSlug: "conj-subjonctif-vouloir-que", sentences: [
      { marked: "Il veut que nous [venons] avant l'ouverture des portes.", fix: "venions" },
      { marked: "Elle exige que tout [est] prêt pour lundi matin.", fix: "soit" },
    ]},
    { ruleSlug: "conj-subjonctif-doute", sentences: [
      { marked: "Je ne crois pas qu'il [reviendra] avant l'automne.", fix: "revienne" },
      { marked: "Nous doutons que ce délai [sera] tenable.", fix: "soit" },
    ]},
    { ruleSlug: "conj-subjonctif-avant-que", sentences: [
      { marked: "Range tout avant qu'il [arrivera] et voie ce désordre.", fix: "arrive" },
      { marked: "Reste ici jusqu'à ce que je [reviens] te chercher.", fix: "revienne" },
    ]},
    { ruleSlug: "conj-indicatif-apres-que", sentences: [
      { marked: "Puisque tu le [saches], inutile de tout réexpliquer.", fix: "sais" },
      { marked: "Comme la porte [soit] ouverte, il est entré sans frapper.", fix: "était" },
    ]},
    { ruleSlug: "conj-futur-anterieur", sentences: [
      { marked: "Après que vous [terminerez], nous relirons ensemble le texte.", fix: "aurez terminé" },
      { marked: "Une fois qu'elle [partira], nous fermerons toutes les portes.", fix: "sera partie" },
    ]},
    { ruleSlug: "conj-verbes-eler-eter", sentences: [
      { marked: "Elle [époussete] les étagères tous les samedis matin.", fix: "époussette" },
      { marked: "Ils [rapelent] les clients un par un depuis midi.", fix: "rappellent" },
    ]},
    { ruleSlug: "conj-verbes-uire", sentences: [
      { marked: "Le récit a été [réduis] de moitié par l'éditeur.", fix: "réduit" },
      { marked: "Elle a [séduis] tout le jury dès les premières minutes.", fix: "séduit" },
    ]},
    { ruleSlug: "conj-verbes-aitre", sentences: [
      { marked: "Cette revue paraît tous les deux mois seulement.", fix: null },
      { marked: "Nul ne connaît la suite de cette histoire.", fix: null },
    ]},
    { ruleSlug: "conj-verbes-eindre-oindre", sentences: [
      { marked: "Nous [éteindons] les lumières à la fermeture.", fix: "éteignons" },
      { marked: "Ils [atteindent] rarement leurs objectifs annuels.", fix: "atteignent" },
    ]},
    { ruleSlug: "conj-verbes-aller-subjonctif", sentences: [
      { marked: "Il vaut mieux que tu [vas] t'expliquer directement avec lui.", fix: "ailles" },
      { marked: "Je doute qu'ils [allent] jusqu'au bout de leur idée.", fix: "aillent" },
    ]},
    { ruleSlug: "conj-passe-compose-etre-avoir", sentences: [
      { marked: "Elle [est] rentré le linge avant l'averse.", fix: "a" },
      { marked: "Ils [ont] retournés chez eux sans un mot.", fix: "sont" },
    ]},
    { ruleSlug: "conj-verbes-oir-participe", sentences: [
      { marked: "Nous avons [devu] renoncer à cette excursion.", fix: "dû" },
      { marked: "Elle n'a rien [voulut] entendre de nos explications.", fix: "voulu" },
    ]},
    { ruleSlug: "conj-imparfait-subjonctif", sentences: [
      { marked: "Il aurait fallu qu'elle [fut] prévenue à temps.", fix: "fût" },
      { marked: "On craignait qu'il ne [fit] demi-tour au dernier moment.", fix: "fît" },
    ]},
    { ruleSlug: "conj-verbes-tir-participe", sentences: [
      { marked: "Elle a [pressentit] le danger avant tout le monde.", fix: "pressenti" },
      { marked: "Ils ont [repartit] les tâches entre eux ce matin.", fix: "réparti" },
    ]},
    { ruleSlug: "conj-verbe-falloir", sentences: [
      { marked: "Les heures qu'il a [fallues] pour finir m'ont épuisé.", fix: "fallu" },
      { marked: "Il [faudras] revoir ce point avant la signature.", fix: "faudra" },
    ]},
    { ruleSlug: "conj-concordance-temps", sentences: [
      { marked: "Il a promis qu'il [reviendra] avant la fin du mois.", fix: "reviendrait" },
      { marked: "Elle disait qu'elle [a] déjà rendu tous les livres.", fix: "avait" },
    ]},
    { ruleSlug: "conj-verbes-croire-voir-imparfait", sentences: [
      { marked: "Vous [voyez] alors les choses tout autrement.", fix: "voyiez" },
      { marked: "Nous [envoyons] des cartes chaque année à cette époque.", fix: "envoyions" },
    ]},
    { ruleSlug: "conj-verbe-suivre", sentences: [
      { marked: "Nous avons [suivis] ses recommandations à la lettre.", fix: "suivi" },
      { marked: "Tu [suit] un régime particulier depuis ton opération.", fix: "suis" },
    ]},
    { ruleSlug: "conj-participe-passe-pronominaux-cod", sentences: [
      { marked: "Elles se sont [brûlées] les doigts sur la plaque chaude.", fix: "brûlé" },
      { marked: "Ils se sont [fixés] un objectif un peu trop ambitieux.", fix: "fixé" },
    ]},
    { ruleSlug: "conj-verbe-cueillir-futur", sentences: [
      { marked: "Nous [cueillirons] les prunes avant les premières gelées.", fix: "cueillerons" },
      { marked: "Le doute les [assaillera] jusqu'au dernier moment.", fix: "assaillira" },
    ]},
    { ruleSlug: "conj-verbe-repondre-participe", sentences: [
      { marked: "Il a [descendut] les cartons à la cave ce matin.", fix: "descendu" },
      { marked: "Nous avons [tondut] la pelouse avant l'orage.", fix: "tondu" },
    ]},
  ],
};
