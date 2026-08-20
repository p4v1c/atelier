/**
 * Étape C — densification du Vocabulaire (64 règles, 190 phrases).
 *
 * C'est la catégorie la plus démunie du lot d'origine : la plupart de ses
 * règles n'avaient que deux phrases, dont une correcte — autant dire une seule
 * question, apprise par cœur en trois passages.
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY_VOCABULAIRE: ContentBatch = {
  id: "densify-vocabulaire",
  rules: [],
  additions: [
    { ruleSlug: "conjoncture", sentences: [
      { marked: "Dans la [conjecture] actuelle, aucun recrutement n'est prévu.", fix: "conjoncture" },
      { marked: "Ce ne sont que des [conjonctures] sans aucune preuve.", fix: "conjectures" },
      { marked: "La [conjecture] économique s'améliore doucement depuis mars.", fix: "conjoncture" },
    ]},
    { ruleSlug: "irruption", sentences: [
      { marked: "Il a fait [éruption] dans la salle en pleine réunion.", fix: "irruption" },
      { marked: "Une [irruption] cutanée l'a conduit chez le dermatologue.", fix: "éruption" },
      { marked: "L'[éruption] des manifestants a surpris le service d'ordre.", fix: "irruption" },
    ]},
    { ruleSlug: "voire", sentences: [
      { marked: "Il faudra deux jours, [voir] trois, pour tout terminer.", fix: "voire" },
      { marked: "Le trajet dure trois heures, [voir] davantage en été.", fix: "voire" },
      { marked: "Nous allons [voire] ce que donne cette nouvelle méthode.", fix: "voir" },
    ]},
    { ruleSlug: "davantage", sentences: [
      { marked: "Il faudrait travailler [d'avantage] pour rattraper le retard.", fix: "davantage" },
      { marked: "Cette offre présente peu [davantage] pour un débutant.", fix: "d'avantage" },
      { marked: "Nous en reparlerons [d'avantage] à la rentrée prochaine.", fix: "davantage" },
    ]},
    { ruleSlug: "savoir-gré", sentences: [
      { marked: "Je vous [serais] gré de bien vouloir me répondre.", fix: "saurais" },
      { marked: "Nous vous [serions] gré de bien vouloir nous répondre.", fix: "saurions" },
      { marked: "De son intervention rapide, elle lui [était] gré.", fix: "savait" },
    ]},
    { ruleSlug: "amener", sentences: [
      { marked: "Peux-tu [amener] le dossier à la réunion de demain ?", fix: "apporter" },
      { marked: "Il a [apporté] son fils à l'école ce matin.", fix: "amené" },
      { marked: "N'oublie pas d'[amener] du pain en rentrant ce soir.", fix: "apporter" },
    ]},
    { ruleSlug: "emmener", sentences: [
      { marked: "Il a [emmené] son parapluie sans même y penser.", fix: "emporté" },
      { marked: "Ce week-end, elle veut [emporter] les enfants à la mer.", fix: "emmener" },
      { marked: "Pour la randonnée, pense à [emmener] une bouteille d'eau.", fix: "emporter" },
    ]},
    { ruleSlug: "éminent", sentences: [
      { marked: "Le danger paraît [éminent] à tous les observateurs.", fix: "imminent" },
      { marked: "Nous avons consulté un [imminent] spécialiste du sujet.", fix: "éminent" },
    ]},
    { ruleSlug: "collision", sentences: [
      { marked: "La [collusion] entre les deux camions a bloqué la route.", fix: "collision" },
      { marked: "Une [collision] entre les deux sociétés a été soupçonnée.", fix: "collusion" },
      { marked: "L'enquête a révélé une [collision] avec l'ancien maire.", fix: "collusion" },
    ]},
    { ruleSlug: "effraction", sentences: [
      { marked: "Les voleurs sont entrés par [infraction] pendant la nuit.", fix: "effraction" },
      { marked: "Ce stationnement constitue une [effraction] au code de la route.", fix: "infraction" },
      { marked: "La serrure porte des traces d'[infraction] évidentes.", fix: "effraction" },
    ]},
    { ruleSlug: "original", sentences: [
      { marked: "Le péché [original] est un concept théologique ancien.", fix: "originel" },
      { marked: "Elle a proposé une idée vraiment [originelle] au comité.", fix: "originale" },
      { marked: "Le projet [original] a été profondément modifié depuis.", fix: "originel" },
    ]},
    { ruleSlug: "littéral", sentences: [
      { marked: "La zone [littérale] est protégée par une loi de 1986.", fix: "littorale" },
      { marked: "Voici la traduction [littorale] du passage en question.", fix: "littérale" },
      { marked: "Le sentier [littéral] longe la côte sur trente kilomètres.", fix: "littoral" },
    ]},
    { ruleSlug: "tache", sentences: [
      { marked: "Cette [tâche] de café ne partira jamais complètement.", fix: "tache" },
      { marked: "La [tache] la plus ingrate revient toujours au dernier arrivé.", fix: "tâche" },
    ]},
    { ruleSlug: "cession", sentences: [
      { marked: "La [session] du terrain a été signée chez le notaire.", fix: "cession" },
      { marked: "La [cession] de rattrapage aura lieu en septembre.", fix: "session" },
      { marked: "Il assiste à toutes les [cessions] du conseil municipal.", fix: "sessions" },
    ]},
    { ruleSlug: "dessein", sentences: [
      { marked: "Il l'a fait à [dessin], personne n'en doute vraiment.", fix: "dessein" },
      { marked: "Son [dessin] était clair dès le premier jour.", fix: "dessein" },
      { marked: "Ce [dessein] d'enfant est affiché dans le couloir.", fix: "dessin" },
    ]},
    { ruleSlug: "balade", sentences: [
      { marked: "Nous avons fait une [ballade] au bord de la rivière.", fix: "balade" },
      { marked: "Cette [balade] irlandaise se chante depuis des siècles.", fix: "ballade" },
      { marked: "Une petite [ballade] digestive nous ferait le plus grand bien.", fix: "balade" },
    ]},
    { ruleSlug: "acception", sentences: [
      { marked: "Dans cette [acceptation] du terme, il a raison.", fix: "acception" },
      { marked: "Son [acception] du poste a surpris tout le service.", fix: "acceptation" },
      { marked: "Le mot a plusieurs [acceptations] dans le dictionnaire.", fix: "acceptions" },
    ]},
    { ruleSlug: "compréhensif", sentences: [
      { marked: "Son explication n'était guère [compréhensive] pour un novice.", fix: "compréhensible" },
      { marked: "Le directeur s'est montré très [compréhensible] avec elle.", fix: "compréhensif" },
      { marked: "Ce texte reste peu [compréhensif] malgré plusieurs relectures.", fix: "compréhensible" },
    ]},
    { ruleSlug: "perpétrer", sentences: [
      { marked: "Cette famille [perpètre] la tradition depuis quatre générations.", fix: "perpétue" },
      { marked: "Le crime a été [perpétué] en plein jour.", fix: "perpétré" },
      { marked: "Il veut [perpétrer] le souvenir de son grand-père.", fix: "perpétuer" },
    ]},
    { ruleSlug: "recouvrer", sentences: [
      { marked: "Il a fini par [recouvrir] la vue après l'opération.", fix: "recouvrer" },
      { marked: "La neige a [recouvré] tout le village pendant la nuit.", fix: "recouvert" },
      { marked: "Le trésor public doit [recouvrir] cette créance ancienne.", fix: "recouvrer" },
    ]},
    { ruleSlug: "inclinaison", sentences: [
      { marked: "L'[inclination] du toit facilite l'écoulement de la pluie.", fix: "inclinaison" },
      { marked: "Il a toujours eu une [inclinaison] pour la musique ancienne.", fix: "inclination" },
      { marked: "Mesure l'[inclination] de la pente avant de creuser.", fix: "inclinaison" },
    ]},
    { ruleSlug: "notable", sentences: [
      { marked: "Sa mauvaise foi est [notable] dans toute la profession.", fix: "notoire" },
      { marked: "On observe une amélioration [notoire] depuis trois mois.", fix: "notable" },
      { marked: "Ce fait [notable] est pourtant connu de tout le village.", fix: "notoire" },
    ]},
    { ruleSlug: "pallier", sentences: [
      { marked: "Il faut pallier [à] ce manque de personnel dès lundi.", fix: "à supprimer" },
      { marked: "Rien ne peut pallier [à] cette absence totale de préparation.", fix: "à supprimer" },
      { marked: "Elle a pallié [à] la panne avec un système provisoire.", fix: "à supprimer" },
    ]},
    { ruleSlug: "se-rappeler", sentences: [
      { marked: "Je me rappelle [de] ce voyage comme si c'était hier.", fix: "à supprimer" },
      { marked: "Elle se rappelle parfaitement [de] cette conversation ancienne.", fix: "à supprimer" },
      { marked: "Te rappelles-tu [de] son visage après tant d'années ?", fix: "à supprimer" },
    ]},
    { ruleSlug: "attention-intention", sentences: [
      { marked: "Ce courrier est à l'[intention] du service comptable.", fix: "attention" },
      { marked: "Une fête a été organisée à l'[attention] des retraités.", fix: "intention" },
      { marked: "Note à l'[intention] de tous les chefs de service.", fix: "attention" },
    ]},
    { ruleSlug: "en-termes", sentences: [
      { marked: "En [terme] de délais, la situation reste tendue.", fix: "termes" },
      { marked: "Il s'exprime en [terme] très clairs sur ce point.", fix: "termes" },
      { marked: "En [terme] de qualité, rien à redire sur ce lot.", fix: "termes" },
    ]},
    { ruleSlug: "espèce", sentences: [
      { marked: "[Un] espèce de vieux hangar servait d'atelier.", fix: "Une" },
      { marked: "Il portait [un] espèce de manteau trop grand pour lui.", fix: "une" },
      { marked: "C'était [un] espèce de silence gêné, très pesant.", fix: "une" },
    ]},
    { ruleSlug: "prodige", sentences: [
      { marked: "Ce fils [prodige] a dilapidé tout l'héritage familial.", fix: "prodigue" },
      { marked: "Le jeune [prodigue] du violon a joué devant mille personnes.", fix: "prodige" },
      { marked: "Il se montre [prodige] de son temps comme de son argent.", fix: "prodigue" },
    ]},
    { ruleSlug: "évoquer", sentences: [
      { marked: "Il a [invoqué] son enfance pendant tout le repas.", fix: "évoqué" },
      { marked: "Pour justifier son refus, elle a [évoqué] la loi.", fix: "invoqué" },
      { marked: "Sans les développer, le rapport [invoque] plusieurs pistes.", fix: "évoque" },
    ]},
    { ruleSlug: "martyr", sentences: [
      { marked: "Ce [martyre] est mort pour ses convictions religieuses.", fix: "martyr" },
      { marked: "Il a enduré le [martyr] pendant toute sa convalescence.", fix: "martyre" },
      { marked: "Cette attente est un véritable [martyr] pour la famille.", fix: "martyre" },
    ]},
    { ruleSlug: "acquit", sentences: [
      { marked: "Il a vérifié par [acquis] de conscience, sans y croire.", fix: "acquit" },
      { marked: "Ses [acquits] professionnels sont reconnus par tous.", fix: "acquis" },
      { marked: "La facture porte la mention « pour [acquis] » du fournisseur.", fix: "acquit" },
    ]},
    { ruleSlug: "consumer", sentences: [
      { marked: "L'incendie a [consommé] toute la charpente en une heure.", fix: "consumé" },
      { marked: "Nous avons [consumé] deux bouteilles pendant le repas.", fix: "consommé" },
      { marked: "Le chagrin le [consomme] à petit feu depuis des mois.", fix: "consume" },
    ]},
    { ruleSlug: "decennie", sentences: [
      { marked: "Cette [décade] de croissance s'est achevée en 2008.", fix: "décennie" },
      { marked: "Trois [décades] se sont écoulées depuis leur rencontre.", fix: "décennies" },
      { marked: "La [décade] à venir sera décisive pour ce secteur.", fix: "décennie" },
    ]},
    { ruleSlug: "detonant", sentences: [
      { marked: "Cette cravate rouge [détonait] avec son costume gris.", fix: "détonnait" },
      { marked: "Le mélange [détonnant] a fait exploser tout le laboratoire.", fix: "détonant" },
      { marked: "Sa remarque [détonante] a jeté un froid dans la salle.", fix: "détonnante" },
    ]},
    { ruleSlug: "emigrer", sentences: [
      { marked: "Ses grands-parents ont [immigré] d'Italie en 1930.", fix: "émigré" },
      { marked: "Beaucoup ont [émigré] en France après cette période.", fix: "immigré" },
      { marked: "Il a décidé d'[immigrer] pour fuir la crise économique.", fix: "émigrer" },
    ]},
    { ruleSlug: "elucider", sentences: [
      { marked: "Le juge a [éludé] cette affaire en quelques semaines.", fix: "élucidé" },
      { marked: "Il a [élucidé] la question en changeant de sujet.", fix: "éludé" },
      { marked: "Rien n'a permis d'[éluder] les circonstances de sa disparition.", fix: "élucider" },
    ]},
    { ruleSlug: "habilete", sentences: [
      { marked: "Son [habilité] manuelle impressionne tous ses collègues.", fix: "habileté" },
      { marked: "Il conteste l'[habileté] du tribunal à juger cette affaire.", fix: "habilité" },
      { marked: "L'[habilité] du chirurgien a sauvé le patient.", fix: "habileté" },
    ]},
    { ruleSlug: "hiberner", sentences: [
      { marked: "Les marmottes [hivernent] pendant six mois d'affilée.", fix: "hibernent" },
      { marked: "Le bateau [hiberne] au port jusqu'au mois de mars.", fix: "hiverne" },
      { marked: "Les troupeaux [hibernent] dans les étables de la vallée.", fix: "hivernent" },
    ]},
    { ruleSlug: "infester", sentences: [
      { marked: "La plaie s'est [infestée] faute de soins appropriés.", fix: "infectée" },
      { marked: "Toutes les caves ont été [infectées] par les rats.", fix: "infestées" },
      { marked: "Depuis l'automne, ce grenier est [infecté] de mites.", fix: "infesté" },
    ]},
    { ruleSlug: "partiel", sentences: [
      { marked: "Le jury s'est montré [partiel] envers ce candidat.", fix: "partial" },
      { marked: "Nous n'avons qu'un résultat [partial] pour le moment.", fix: "partiel" },
      { marked: "Ce compte rendu est manifestement [partiel] et orienté.", fix: "partial" },
    ]},
    { ruleSlug: "pecuniaire", sentences: [
      { marked: "Il traverse de graves difficultés [pécunières].", fix: "pécuniaires" },
      { marked: "L'aide [pécunière] sera versée en trois fois.", fix: "pécuniaire" },
      { marked: "Aucun avantage [pécunier] n'est prévu par le contrat.", fix: "pécuniaire" },
    ]},
    { ruleSlug: "prescrire", sentences: [
      { marked: "Le médecin a [proscrit] trois semaines de repos complet.", fix: "prescrit" },
      { marked: "Le règlement [prescrit] formellement l'usage du téléphone.", fix: "proscrit" },
      { marked: "Ces méthodes ont été [prescrites] par la commission.", fix: "proscrites" },
    ]},
    { ruleSlug: "prolongation", sentences: [
      { marked: "Le [prolongement] du délai a été accordé sans difficulté.", fix: "prolongation" },
      { marked: "La [prolongation] de la ligne atteindra la banlieue nord.", fix: "prolongement" },
      { marked: "Il a obtenu une [prolongement] de son congé maladie.", fix: "prolongation" },
    ]},
    { ruleSlug: "rebattre", sentences: [
      { marked: "Il nous [rabat] les oreilles avec cette histoire ancienne.", fix: "rebat" },
      { marked: "On m'a [rabattu] les oreilles de ce projet pendant des mois.", fix: "rebattu" },
      { marked: "Cesse de me [rabattre] les oreilles avec tes exploits.", fix: "rebattre" },
    ]},
    { ruleSlug: "somptuaire", sentences: [
      { marked: "Ils ont donné un dîner [somptuaire] pour leurs noces d'or.", fix: "somptueux" },
      { marked: "Cette dépense [somptueuse] a été jugée injustifiable.", fix: "somptuaire" },
      { marked: "Le palais [somptuaire] domine toute la baie.", fix: "somptueux" },
    ]},
    { ruleSlug: "subvenir", sentences: [
      { marked: "Il peine à [survenir] aux besoins de sa famille.", fix: "subvenir" },
      { marked: "Un incident a [subvenu] pendant la démonstration.", fix: "survenu" },
      { marked: "Cette aide permet de [survenir] aux dépenses courantes.", fix: "subvenir" },
    ]},
    { ruleSlug: "veneneux", sentences: [
      { marked: "Ce champignon est [venimeux], ne le ramasse surtout pas.", fix: "vénéneux" },
      { marked: "La vipère est un serpent [vénéneux] de nos régions.", fix: "venimeux" },
      { marked: "Ces baies rouges sont hautement [venimeuses].", fix: "vénéneuses" },
    ]},
    { ruleSlug: "eminent-2", sentences: [
      { marked: "L'[influence] de touristes bloque tout le centre-ville.", fix: "affluence" },
      { marked: "Son [affluence] sur le conseil reste considérable.", fix: "influence" },
      { marked: "On note une forte [influence] aux caisses le samedi.", fix: "affluence" },
    ]},
    { ruleSlug: "alternative", sentences: [
      { marked: "Il ne reste aucune autre [alternative] à ce stade.", fix: "solution" },
      { marked: "Nous cherchons une [alternative] supplémentaire à ces deux-là.", fix: "solution" },
      { marked: "Quelles sont les autres [alternatives] envisageables ?", fix: "solutions" },
    ]},
    { ruleSlug: "conséquent", sentences: [
      { marked: "Le budget est [conséquent] pour une structure de cette taille.", fix: "important" },
      { marked: "Une somme [conséquente] a été versée dès la signature.", fix: "importante" },
      { marked: "Des moyens [conséquents] seront nécessaires dès janvier.", fix: "importants" },
    ]},
    { ruleSlug: "realiser", sentences: [
      { marked: "Il a [réalisé] trop tard qu'il s'était trompé de train.", fix: "compris" },
      { marked: "Je [réalise] seulement maintenant l'ampleur du problème.", fix: "mesure" },
      { marked: "Elle n'a pas [réalisé] que la réunion avait été avancée.", fix: "compris" },
    ]},
    { ruleSlug: "digital", sentences: [
      { marked: "La transformation [digitale] de l'entreprise a pris trois ans.", fix: "numérique" },
      { marked: "Il travaille dans le marketing [digital] depuis cinq ans.", fix: "numérique" },
      { marked: "Les outils [digitaux] ont remplacé le papier au bureau.", fix: "numériques" },
    ]},
    { ruleSlug: "solutionner", sentences: [
      { marked: "Il faudra [solutionner] ce problème avant la livraison.", fix: "résoudre" },
      { marked: "Nous avons [solutionné] la panne en moins d'une heure.", fix: "résolu" },
      { marked: "Rien ne se [solutionne] tout seul dans ce dossier.", fix: "résout" },
    ]},
    { ruleSlug: "voire-meme", sentences: [
      { marked: "Il faudra deux jours, voire [même] trois selon la météo.", fix: "à supprimer" },
      { marked: "Le trajet coûte cent euros, voire [même] davantage encore.", fix: "à supprimer" },
      { marked: "Elle viendra samedi, voire [même] dès le vendredi soir.", fix: "à supprimer" },
    ]},
    { ruleSlug: "malgre-que", sentences: [
      { marked: "[Malgré] qu'il pleuve, la fête aura lieu dehors.", fix: "Bien" },
      { marked: "Elle est venue [malgré] qu'elle soit très fatiguée.", fix: "bien" },
      { marked: "[Malgré] que tu insistes, ma réponse ne changera pas.", fix: "Bien" },
    ]},
    { ruleSlug: "savérer", sentences: [
      { marked: "Cette rumeur s'est [avérée] fausse dès le lendemain.", fix: "révélée" },
      { marked: "Le diagnostic s'est [avéré] vrai après plusieurs examens.", fix: "confirmé" },
      { marked: "Ses prévisions se sont [avérées] fausses une fois de plus.", fix: "révélées" },
    ]},
    { ruleSlug: "affaire-a", sentences: [
      { marked: "Tu auras [affaires] à un interlocuteur très exigeant.", fix: "affaire" },
      { marked: "Nous avons eu [affaires] à forte partie ce jour-là.", fix: "affaire" },
      { marked: "Elle a compris à qui elle avait [affaires] dès le début.", fix: "affaire" },
    ]},
    { ruleSlug: "plain-pied", sentences: [
      { marked: "La maison est de [plein-pied] avec le jardin.", fix: "plain-pied" },
      { marked: "Nous cherchons un logement de [plein-pied] sans escalier.", fix: "plain-pied" },
      { marked: "Il est entré de [plein-pied] dans le sujet dès l'introduction.", fix: "plain-pied" },
    ]},
    { ruleSlug: "for-interieur", sentences: [
      { marked: "En son [fort] intérieur, il savait la vérité depuis longtemps.", fix: "for" },
      { marked: "Elle s'est répété, en son [fors] intérieur, qu'elle avait raison.", fix: "for" },
      { marked: "Chacun juge en son [fort] intérieur sans jamais le dire.", fix: "for" },
    ]},
    { ruleSlug: "a-lenvi", sentences: [
      { marked: "Ils se sont vantés à l'[envie] toute la soirée.", fix: "envi" },
      { marked: "Les orateurs se citaient à l'[envie] les uns les autres.", fix: "envi" },
      { marked: "On répète à l'[envie] que rien ne changera jamais.", fix: "envi" },
    ]},
    { ruleSlug: "dores-deja", sentences: [
      { marked: "Nous pouvons [d'hors] et déjà annoncer la bonne nouvelle.", fix: "d'ores" },
      { marked: "Le résultat est [d'or] et déjà acquis pour l'équipe.", fix: "d'ores" },
      { marked: "Il est [dors] et déjà trop tard pour s'inscrire.", fix: "d'ores" },
    ]},
    { ruleSlug: "au-fur", sentences: [
      { marked: "Nous corrigerons [à] fur et à mesure des retours.", fix: "au" },
      { marked: "Il range ses affaires [à] fur et à mesure de l'avancée.", fix: "au" },
      { marked: "Les résultats tombent [à] fur et à mesure de la soirée.", fix: "au" },
    ]},
    { ruleSlug: "mettre-au-jour", sentences: [
      { marked: "Les archéologues ont mis [à] jour une villa romaine.", fix: "au" },
      { marked: "Il faut mettre [au] jour le logiciel avant de continuer.", fix: "à" },
      { marked: "Ces fouilles ont mis [à] jour des vestiges du Moyen Âge.", fix: "au" },
    ]},
    { ruleSlug: "chez-le", sentences: [
      { marked: "Elle est allée [au] coiffeur en sortant du travail.", fix: "chez le" },
      { marked: "Il passera [au] médecin avant de rentrer à la maison.", fix: "chez le" },
      { marked: "Nous nous retrouvons [au] boulanger à huit heures.", fix: "chez le" },
    ]},
  ],
};
