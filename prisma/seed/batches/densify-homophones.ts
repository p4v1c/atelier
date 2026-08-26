/**
 * Étape C — densification des Homophones.
 *
 * Ajoute des phrases aux 60 règles d'homophones du lot legacy pour les porter
 * à cinq. Les règles elles-mêmes ne sont pas touchées : ni énoncé, ni astuce,
 * ni difficulté. On allonge seulement la réserve de phrases, pour qu'elles ne
 * se reconnaissent plus par cœur au bout de trois semaines.
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY_HOMOPHONES: ContentBatch = {
  id: "densify-homophones",
  rules: [],
  additions: [
    { ruleSlug: "a-à", sentences: [
      { marked: "Le train [à] déjà quitté la gare de Lyon.", fix: "a" },
    ]},
    { ruleSlug: "ou-où", sentences: [
      { marked: "Dis-moi [ou] tu ranges habituellement les clés de la voiture.", fix: "où" },
      { marked: "Il faudra choisir : le train [où] la voiture.", fix: "ou" },
    ]},
    { ruleSlug: "ce-se", sentences: [
      { marked: "Personne ne [ce] souvient du nom de ce village.", fix: "se" },
    ]},
    { ruleSlug: "ces-ses", sentences: [
      { marked: "Elle a perdu [ces] lunettes pour la troisième fois.", fix: "ses" },
      { marked: "Regarde [ses] nuages au-dessus de la colline.", fix: "ces" },
    ]},
    { ruleSlug: "leur", sentences: [
      { marked: "Il [leurs] a promis une réponse avant la fin du mois.", fix: "leur" },
    ]},
    { ruleSlug: "on-ont", sentences: [
      { marked: "Les élèves [on] rendu leur copie avec dix minutes d'avance.", fix: "ont" },
      { marked: "Depuis hier, [ont] ne sait plus quoi penser de cette affaire.", fix: "on" },
    ]},
    { ruleSlug: "son-sont", sentences: [
      { marked: "Les volets de la maison [son] restés fermés tout l'hiver.", fix: "sont" },
      { marked: "Elle range toujours [sont] carnet dans la poche intérieure.", fix: "son" },
    ]},
    { ruleSlug: "et-est", sentences: [
      { marked: "La route [et] longue mais le paysage vaut le détour.", fix: "est" },
      { marked: "Il a pris son manteau [est] son écharpe avant de sortir.", fix: "et" },
    ]},
    { ruleSlug: "ni-ny", sentences: [
      { marked: "Elle n'a [n'y] le temps ni l'envie de recommencer.", fix: "ni" },
      { marked: "Ce dossier est complet : il [ni] manque pourtant rien.", fix: "n'y" },
    ]},
    { ruleSlug: "si-sy", sentences: [
      { marked: "Le chat a trouvé un carton et [si] est installé.", fix: "s'y" },
      { marked: "Préviens-moi [s'y] tu passes par la maison ce soir.", fix: "si" },
    ]},
    { ruleSlug: "la-là-la", sentences: [
      { marked: "Reste [l'a], je reviens dans deux minutes à peine.", fix: "là" },
      { marked: "Il [là] cherchée partout sans jamais la retrouver.", fix: "l'a" },
    ]},
    { ruleSlug: "cest-sest", sentences: [
      { marked: "Le verre [c'est] brisé en tombant sur le carrelage.", fix: "s'est" },
      { marked: "[S'est] à toi de décider, personne ne le fera.", fix: "C'est" },
    ]},
    { ruleSlug: "sais-sait", sentences: [
      { marked: "Elle [c'est] parfaitement où se trouve le dossier manquant.", fix: "sait" },
      { marked: "Je crois que [sais] une bonne idée, finalement.", fix: "c'est" },
    ]},
    { ruleSlug: "ça-sa", sentences: [
      { marked: "Il a oublié [ça] carte d'identité sur le comptoir.", fix: "sa" },
      { marked: "Tout [sa] pour arriver en retard malgré tout.", fix: "ça" },
    ]},
    { ruleSlug: "quand-quant", sentences: [
      { marked: "Personne ne sait [quant] il rentrera de son voyage.", fix: "quand" },
      { marked: "[Quand] au reste, nous en reparlerons demain matin.", fix: "Quant" },
    ]},
    { ruleSlug: "quelle-quelle", sentences: [
      { marked: "Dis-moi ce [quelle] a bien pu inventer cette fois.", fix: "qu'elle" },
      { marked: "Sais-tu [qu'elle] route mène au village voisin ?", fix: "quelle" },
    ]},
    { ruleSlug: "peu-peut", sentences: [
      { marked: "Elle mange trop [peut] depuis le début du printemps.", fix: "peu" },
      { marked: "Ce chemin [peu] devenir dangereux après une forte pluie.", fix: "peut" },
    ]},
    { ruleSlug: "plutot", sentences: [
      { marked: "Rentre [plutôt] pour éviter les embouteillages du soir.", fix: "plus tôt" },
      { marked: "Le magasin ouvre [plutôt] le samedi que les autres jours.", fix: "plus tôt" },
    ]},
    { ruleSlug: "quel-que", sentences: [
      { marked: "[Quelque] soit la météo, la course aura bien lieu.", fix: "Quelle que" },
      { marked: "Il partira, [quelques] soient les difficultés rencontrées.", fix: "quelles que" },
    ]},
    { ruleSlug: "quoi-que", sentences: [
      { marked: "[Quoiqu']il arrive, préviens-moi avant de prendre ta décision.", fix: "Quoi qu'il" },
      { marked: "Il ira jusqu'au bout, quoique cela lui coûte cher.", fix: null },
      { marked: "Nous partirons demain, [quoiqu']en dise la météo.", fix: "quoi qu'en" },
    ]},
    { ruleSlug: "censé", sentences: [
      { marked: "Ce raisonnement paraît [censé] à première vue.", fix: "sensé" },
      { marked: "Nous étions [sensés] recevoir le colis avant vendredi.", fix: "censés" },
    ]},
    { ruleSlug: "dans-den", sentences: [
      { marked: "Il n'a pas fini [dans] discuter avec le comptable.", fix: "d'en" },
      { marked: "Le chat dort [d'en] le panier près du radiateur.", fix: "dans" },
    ]},
    { ruleSlug: "pres-pret", sentences: [
      { marked: "Elles sont [près] à défendre leur projet devant le jury.", fix: "prêtes" },
      { marked: "Le village le plus [prêt] se trouve à dix kilomètres.", fix: "près" },
    ]},
    { ruleSlug: "tout-tous", sentences: [
      { marked: "[Tout] les matins, il part courir avant le lever du soleil.", fix: "Tous" },
      { marked: "Ils ont [tout] compris la consigne, chacun à sa manière.", fix: "tous" },
    ]},
    { ruleSlug: "tout-adverbe", sentences: [
      { marked: "La petite est revenue [toute] émue de sa première leçon.", fix: "tout" },
      { marked: "Les feuilles sont [tout] jaunes depuis la semaine dernière.", fix: "toutes" },
    ]},
    { ruleSlug: "meme", sentences: [
      { marked: "Nous avons repris les [même] arguments qu'à la réunion précédente.", fix: "mêmes" },
      { marked: "Les enseignants eux-[même] reconnaissent la difficulté de l'exercice.", fix: "mêmes" },
    ]},
    { ruleSlug: "sans-sen", sentences: [
      { marked: "Elle a signé [s'en] même lire les conditions générales.", fix: "sans" },
      { marked: "Il a compris son erreur et [sans] mord les doigts.", fix: "s'en" },
    ]},
    { ruleSlug: "mais-mes", sentences: [
      { marked: "J'ai retrouvé [mais] clés au fond de la poche.", fix: "mes" },
      { marked: "Le repas était bon, [mes] un peu trop copieux.", fix: "mais" },
    ]},
    { ruleSlug: "notre-notre", sentences: [
      { marked: "Ce chien n'est pas le [notre], il vient du voisinage.", fix: "nôtre" },
      { marked: "[Nôtre] voiture est au garage depuis mardi dernier.", fix: "Notre" },
    ]},
    { ruleSlug: "peut-etre", sentences: [
      { marked: "Ce document [peut-être] consulté par tous les adhérents.", fix: "peut être" },
      { marked: "Le résultat [peut-être] meilleur que ce qu'on espérait.", fix: "peut être" },
    ]},
    { ruleSlug: "voie-voix", sentences: [
      { marked: "Sa [voie] tremblait au moment de prononcer le discours.", fix: "voix" },
      { marked: "Cette découverte ouvre une [voix] entièrement nouvelle.", fix: "voie" },
    ]},
    { ruleSlug: "cour-cours", sentences: [
      { marked: "Les enfants jouent dans la [cours] de l'immeuble.", fix: "cour" },
      { marked: "Le trajet est trop [cours] pour prendre le métro.", fix: "court" },
    ]},
    { ruleSlug: "compte-conte", sentences: [
      { marked: "Le [compte] de Monte-Cristo est un roman très long.", fix: "comte" },
      { marked: "Elle raconte un [compte] différent chaque soir aux enfants.", fix: "conte" },
    ]},
    { ruleSlug: "champ-chant", sentences: [
      { marked: "Le [chant] de colza jaunit dès le mois d'avril.", fix: "champ" },
      { marked: "Son [champ] préféré revient toujours en fin de messe.", fix: "chant" },
      { marked: "Il a labouré tout le [chant] avant les premières pluies.", fix: "champ" },
    ]},
    { ruleSlug: "faim-fin", sentences: [
      { marked: "La [faim] du film a surpris tous les spectateurs.", fix: "fin" },
      { marked: "Après cette marche, nous avions une [fin] terrible.", fix: "faim" },
    ]},
    { ruleSlug: "mettre-maitre", sentences: [
      { marked: "Le [mètre] d'école corrigeait les copies chaque soir.", fix: "maître" },
      { marked: "Il faudra [maître] les papiers en ordre avant lundi.", fix: "mettre" },
    ]},
    { ruleSlug: "seau-sceau", sentences: [
      { marked: "Un grand [sceau] de peinture attendait dans le couloir.", fix: "seau" },
      { marked: "Il a franchi le fossé d'un [sceau] impressionnant.", fix: "saut" },
    ]},
    { ruleSlug: "tant-temps", sentences: [
      { marked: "Le [tant] passe vite quand on est occupé.", fix: "temps" },
      { marked: "Elle a [temps] insisté qu'il a fini par céder.", fix: "tant" },
    ]},
    { ruleSlug: "verre-vers", sentences: [
      { marked: "Le portail donne [verre] le jardin de derrière.", fix: "vers" },
      { marked: "Un [verre] de terre traversait lentement l'allée.", fix: "ver" },
    ]},
    { ruleSlug: "amande-amende", sentences: [
      { marked: "La pâte d'[amende] parfume délicieusement ce gâteau.", fix: "d'amande" },
      { marked: "Le stationnement gênant coûte une [amande] salée.", fix: "amende" },
    ]},
    { ruleSlug: "air-aire", sentences: [
      { marked: "Nous nous sommes arrêtés sur une [air] de repos.", fix: "aire" },
      { marked: "L'[aire] de la montagne est vif au petit matin.", fix: "L'air" },
    ]},
    { ruleSlug: "cane-canne", sentences: [
      { marked: "Il marche avec une [cane] depuis son accident.", fix: "canne" },
      { marked: "La [canne] et ses canetons traversent le chemin.", fix: "cane" },
    ]},
    { ruleSlug: "date-datte", sentences: [
      { marked: "La [datte] de la réunion a changé trois fois.", fix: "date" },
      { marked: "Il achète des [dates] séchées au marché du samedi.", fix: "dattes" },
      { marked: "Note la [datte] limite dans ton agenda.", fix: "date" },
    ]},
    { ruleSlug: "foi-foie", sentences: [
      { marked: "Sa [foie] en la justice reste intacte malgré tout.", fix: "foi" },
      { marked: "Il a mal au [foi] depuis les fêtes de fin d'année.", fix: "foie" },
    ]},
    { ruleSlug: "pain-pin", sentences: [
      { marked: "Le [pin] de campagne sort du four à six heures.", fix: "pain" },
      { marked: "Une odeur de [pain] flottait dans toute la forêt.", fix: "pin" },
    ]},
    { ruleSlug: "paire-pere", sentences: [
      { marked: "Il a acheté une [père] de chaussures neuves.", fix: "paire" },
      { marked: "Son [paire] travaillait autrefois à la scierie du village.", fix: "père" },
    ]},
    { ruleSlug: "port-porc", sentences: [
      { marked: "Les bateaux rentrent au [porc] avant la tempête.", fix: "port" },
      { marked: "Le rôti de [port] mijote depuis deux bonnes heures.", fix: "porc" },
    ]},
    { ruleSlug: "sale-salle", sentences: [
      { marked: "La [sale] de réunion est occupée jusqu'à midi.", fix: "salle" },
      { marked: "Ce torchon est trop [salle] pour être réutilisé.", fix: "sale" },
    ]},
    { ruleSlug: "cygne-signe", sentences: [
      { marked: "Un [signe] blanc glissait sur l'étang immobile.", fix: "cygne" },
      { marked: "Il m'a fait un [cygne] discret depuis l'autre bout.", fix: "signe" },
    ]},
    { ruleSlug: "choeur-coeur", sentences: [
      { marked: "Le [cœur] de l'église a chanté pendant la cérémonie.", fix: "chœur" },
      { marked: "Il connaît ce poème par [chœur] depuis l'enfance.", fix: "cœur" },
    ]},
    { ruleSlug: "hors-or", sentences: [
      { marked: "Ce modèle est [or] de prix pour un étudiant.", fix: "hors" },
      { marked: "Il affirmait être seul ; [hors] deux témoins l'ont vu.", fix: "or" },
      { marked: "La bague en [hors] a été retrouvée sous le meuble.", fix: "or" },
    ]},
    { ruleSlug: "pourquoi", sentences: [
      { marked: "Voilà [pourquoi] il a voté, et non pour qui.", fix: "pour quoi" },
      { marked: "Je me demande [pourquoi] il opte finalement cette année.", fix: "pour quoi" },
      { marked: "Dis-moi [pourquoi] tu te bats : la reconnaissance ou l'argent ?", fix: "pour quoi" },
    ]},
    { ruleSlug: "aussitot", sentences: [
      { marked: "Jamais je ne me suis levé [aussitôt] qu'aujourd'hui.", fix: "aussi tôt" },
      { marked: "Nous partirons [aussitôt] que son collègue, à la même heure.", fix: "aussi tôt" },
      { marked: "Elle est arrivée [aussitôt] que son frère hier soir.", fix: "aussi tôt" },
    ]},
    { ruleSlug: "sitot", sentences: [
      { marked: "Personne ne se lève [sitôt] dans cette maison.", fix: "si tôt" },
      { marked: "Je ne pensais pas te voir [sitôt] ce matin.", fix: "si tôt" },
      { marked: "Pourquoi partir [sitôt] alors que rien ne presse ?", fix: "si tôt" },
    ]},
    { ruleSlug: "quelque-environ", sentences: [
      { marked: "Il reste [quelques] deux cents mètres avant l'arrivée.", fix: "quelque" },
      { marked: "Le trajet dure [quelques] trois heures sans les pauses.", fix: "quelque" },
      { marked: "Nous avons marché [quelques] vingt kilomètres aujourd'hui.", fix: "quelque" },
    ]},
    { ruleSlug: "ma-ma", sentences: [
      { marked: "Il [ma] prêté sa voiture pour le week-end.", fix: "m'a" },
      { marked: "[M'a] sœur habite au-dessus de la boulangerie.", fix: "Ma" },
    ]},
    { ruleSlug: "ta-ta", sentences: [
      { marked: "Elle [ta] promis de venir dès qu'elle pourrait.", fix: "t'a" },
      { marked: "[T'a] veste est restée sur le dossier de la chaise.", fix: "Ta" },
      { marked: "Qui [ta] raconté cette histoire invraisemblable ?", fix: "t'a" },
    ]},
    { ruleSlug: "différend", sentences: [
      { marked: "Un vieux [différent] les oppose depuis des années.", fix: "différend" },
      { marked: "Le résultat est bien [différend] de ce qu'on espérait.", fix: "différent" },
      { marked: "Ils ont réglé leur [différent] devant un médiateur.", fix: "différend" },
    ]},
    { ruleSlug: "plan-plant", sentences: [
      { marked: "Il a repiqué chaque [plan] de tomate au printemps.", fix: "plant" },
      { marked: "Le [plant] du quartier date des années soixante.", fix: "plan" },
      { marked: "Les [plans] de salade ont gelé pendant la nuit.", fix: "plants" },
    ]},
    { ruleSlug: "davantage-2", sentences: [
      { marked: "Il a réussi [quand-même] à terminer avant l'heure.", fix: "quand même" },
      { marked: "[Quand-même] fatiguée, elle a tenu jusqu'au bout.", fix: "Quand même" },
      { marked: "C'est [quand-même] surprenant de la part d'un professionnel.", fix: "quand même" },
    ]},
  ],
};
