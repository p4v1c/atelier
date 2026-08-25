/**
 * Étape C, troisième passe — lots 008 et 009 portés de 5 à 7 phrases.
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY3_HOMO_PARO: ContentBatch = {
  id: "densify3-homo-paro",
  rules: [],
  additions: [
    /* ── lot 008 : homophones lexicaux ── */
    { ruleSlug: "cru-cru-accent", sentences: [
      { marked: "La demande a [cru] de vingt pour cent en un an.", fix: "crû" },
      { marked: "Il n'a pas [crû] un traître mot de cette version.", fix: "cru" },
    ]},
    { ruleSlug: "mal-male", sentences: [
      { marked: "Le [mal] reproducteur est plus petit que la femelle.", fix: "mâle" },
      { marked: "Elle a [mâle] à la tête depuis le début de l'après-midi.", fix: "mal" },
    ]},
    { ruleSlug: "cote-cote-cotte", sentences: [
      { marked: "La [cote] amalfitaine est classée au patrimoine mondial.", fix: "côte" },
      { marked: "Sa [côte] auprès des électeurs remonte lentement.", fix: "cote" },
    ]},
    { ruleSlug: "boue-bout", sentences: [
      { marked: "Le tracteur s'est enlisé dans la [bout] du chemin creux.", fix: "boue" },
      { marked: "Il tenait le [boue] de la ficelle entre deux doigts.", fix: "bout" },
    ]},
    { ruleSlug: "sang-cent-sans", sentences: [
      { marked: "Une tache de [cent] maculait la manche de sa chemise.", fix: "sang" },
      { marked: "Elle est repartie [cent] avoir obtenu de réponse.", fix: "sans" },
    ]},
    { ruleSlug: "chaine-chene", sentences: [
      { marked: "La table en [chaîne] massif pèse plus de cent kilos.", fix: "chêne" },
      { marked: "La [chêne] du puits s'est rompue en pleine remontée.", fix: "chaîne" },
    ]},
    { ruleSlug: "dans-dent", sentences: [
      { marked: "Il a une [dans] de sagesse qui le fait souffrir.", fix: "dent" },
      { marked: "Le chat s'est glissé [dent] le carton du déménagement.", fix: "dans" },
    ]},
    { ruleSlug: "mets-mai-mais", sentences: [
      { marked: "Le muguet fleurit au début du mois de [mets].", fix: "mai" },
      { marked: "Ce [mais] raffiné se déguste avec un vin blanc sec.", fix: "mets" },
    ]},
    { ruleSlug: "mer-mere-maire", sentences: [
      { marked: "La [mère] a inauguré la nouvelle école la semaine dernière.", fix: "maire" },
      { marked: "Il a passé toute son enfance au bord de la [mère].", fix: "mer" },
    ]},
    { ruleSlug: "mot-maux", sentences: [
      { marked: "Elle souffre de [mots] de dos depuis son déménagement.", fix: "maux" },
      { marked: "Il n'a pas trouvé le [maux] juste pour la consoler.", fix: "mot" },
    ]},
    { ruleSlug: "ni-nid", sentences: [
      { marked: "Le [ni] de guêpes s'est formé sous la gouttière.", fix: "nid" },
      { marked: "Il n'a voulu [nid] aide ni conseil de personne.", fix: "ni" },
    ]},
    { ruleSlug: "panser-penser", sentences: [
      { marked: "Le palefrenier vient [penser] les chevaux chaque matin.", fix: "panser" },
      { marked: "Il faut [panser] à réserver bien avant la haute saison.", fix: "penser" },
    ]},
    { ruleSlug: "pause-pose", sentences: [
      { marked: "La [pause] du parquet commence dès lundi matin.", fix: "pose" },
      { marked: "Une [pose] de dix minutes est prévue à mi-parcours.", fix: "pause" },
    ]},
    { ruleSlug: "pouce-pousse", sentences: [
      { marked: "Le lierre [pouce] très vite le long de ce mur.", fix: "pousse" },
      { marked: "Il a levé le [pousse] pour signifier son accord.", fix: "pouce" },
    ]},
    { ruleSlug: "reine-renne", sentences: [
      { marked: "L'attelage de [reines] traversait la toundra gelée.", fix: "rennes" },
      { marked: "La [renne] mère surveillait toute la ruche.", fix: "reine" },
    ]},
    { ruleSlug: "roder-roder-accent", sentences: [
      { marked: "Deux silhouettes [rodaient] autour du chantier désert.", fix: "rôdaient" },
      { marked: "Il faut [rôder] la nouvelle machine avant de la lancer.", fix: "roder" },
    ]},
    { ruleSlug: "selle-celle-scelle", sentences: [
      { marked: "Cette maison est [selle] de mes grands-parents maternels.", fix: "celle" },
      { marked: "Le maçon [selle] la pierre avec du mortier frais.", fix: "scelle" },
    ]},
    { ruleSlug: "taule-tole", sentences: [
      { marked: "Une plaque de [taule] rouillée ferme la brèche du mur.", fix: "tôle" },
      { marked: "Le vent a arraché toute la [taule] du poulailler.", fix: "tôle" },
    ]},
    { ruleSlug: "thon-ton", sentences: [
      { marked: "Le [ton] pêché à la ligne coûte bien plus cher.", fix: "thon" },
      { marked: "Change de [thon] si tu veux qu'on t'écoute.", fix: "ton" },
    ]},
    { ruleSlug: "vain-vin-vingt", sentences: [
      { marked: "Il a plaidé en [vin] devant une salle indifférente.", fix: "vain" },
      { marked: "Ce [vingt] de garde se bonifie encore après dix ans.", fix: "vin" },
    ]},
    { ruleSlug: "laid-lait", sentences: [
      { marked: "Le [laid] cru se conserve très peu de temps.", fix: "lait" },
      { marked: "Ce meuble est [lait] mais il rend bien service.", fix: "laid" },
    ]},
    { ruleSlug: "tante-tente", sentences: [
      { marked: "La [tante] a résisté à la bourrasque de la nuit.", fix: "tente" },
      { marked: "Sa [tente] maternelle habite au-dessus de la pharmacie.", fix: "tante" },
    ]},
    { ruleSlug: "chair-chere-cher", sentences: [
      { marked: "La [chère] de la pêche était encore un peu ferme.", fix: "chair" },
      { marked: "Cette réparation coûte bien trop [chère] pour le budget.", fix: "cher" },
    ]},
    { ruleSlug: "poids-pois", sentences: [
      { marked: "Le [pois] du colis a été mal calculé au départ.", fix: "poids" },
      { marked: "La [poids] servait autrefois à calfater les coques.", fix: "poix" },
    ]},
    { ruleSlug: "puits-puis", sentences: [
      { marked: "Le [puis] communal a été comblé il y a trente ans.", fix: "puits" },
      { marked: "Elle a réfléchi, [puits] a fini par accepter l'offre.", fix: "puis" },
    ]},

    /* ── lot 009 : paronymes ── */
    { ruleSlug: "affleurer-effleurer", sentences: [
      { marked: "Une souche [effleure] au milieu du chemin forestier.", fix: "affleure" },
      { marked: "Le vent a à peine [affleuré] la surface de l'étang.", fix: "effleuré" },
    ]},
    { ruleSlug: "agonir-agoniser", sentences: [
      { marked: "Le vieux cheval [agonit] au fond de l'écurie.", fix: "agonise" },
      { marked: "Il s'est fait [agoniser] de reproches par sa hiérarchie.", fix: "agonir" },
    ]},
    { ruleSlug: "amoral-immoral", sentences: [
      { marked: "Un tel procédé est franchement [amoral] et malhonnête.", fix: "immoral" },
      { marked: "Le marché est [immoral] par nature : il ignore le bien.", fix: "amoral" },
    ]},
    { ruleSlug: "anoblir-ennoblir", sentences: [
      { marked: "Napoléon a [ennobli] plusieurs de ses généraux.", fix: "anobli" },
      { marked: "L'effort [anoblit] même les tâches les plus ingrates.", fix: "ennoblit" },
    ]},
    { ruleSlug: "avenement-evenement", sentences: [
      { marked: "L'[événement] de l'imprimerie a tout bouleversé.", fix: "L'avènement" },
      { marked: "Cet [avènement] culturel revient chaque printemps.", fix: "événement" },
    ]},
    { ruleSlug: "decrepit-decrepi", sentences: [
      { marked: "Le crépi [décrépit] tombe par plaques entières.", fix: "décrépi" },
      { marked: "Ce chien [décrépi] ne quitte plus son panier.", fix: "décrépit" },
    ]},
    { ruleSlug: "desaffection-desaffectation", sentences: [
      { marked: "La [désaffectation] des jeunes pour ce sport inquiète.", fix: "désaffection" },
      { marked: "La [désaffection] de la caserne date de l'an dernier.", fix: "désaffectation" },
    ]},
    { ruleSlug: "egailler-egayer", sentences: [
      { marked: "Les poules se sont [égayées] dans tout le jardin.", fix: "égaillées" },
      { marked: "Un bouquet de tulipes [égaillerait] cette entrée sombre.", fix: "égaierait" },
    ]},
    { ruleSlug: "emerger-immerger", sentences: [
      { marked: "L'épave [immerge] à peine à marée très basse.", fix: "émerge" },
      { marked: "Il faut [émerger] la pièce dans l'eau bouillante.", fix: "immerger" },
    ]},
    { ruleSlug: "enduire-induire", sentences: [
      { marked: "Ce titre risque d'[enduire] le lecteur en erreur.", fix: "d'induire" },
      { marked: "Il a [induit] la coque d'une couche de résine.", fix: "enduit" },
    ]},
    { ruleSlug: "esquisser-esquiver", sentences: [
      { marked: "Le ministre a [esquissé] toutes les questions gênantes.", fix: "esquivé" },
      { marked: "Elle a [esquivé] un plan sur un coin de nappe.", fix: "esquissé" },
    ]},
    { ruleSlug: "evasion-invasion", sentences: [
      { marked: "L'[invasion] du détenu a duré moins de dix minutes.", fix: "L'évasion" },
      { marked: "Une [évasion] de sauterelles a ravagé les cultures.", fix: "invasion" },
    ]},
    { ruleSlug: "exalter-exulter", sentences: [
      { marked: "Les supporters [exaltaient] après le but de la victoire.", fix: "exultaient" },
      { marked: "Ce monument [exulte] la mémoire des disparus.", fix: "exalte" },
    ]},
    { ruleSlug: "inanition-inanite", sentences: [
      { marked: "Le chat perdu est mort d'[inanité] sous un hangar.", fix: "d'inanition" },
      { marked: "Chacun mesure aujourd'hui l'[inanition] de ces promesses.", fix: "l'inanité" },
    ]},
    { ruleSlug: "infliger-inflechir", sentences: [
      { marked: "La commission lui a [infléchi] un blâme sévère.", fix: "infligé" },
      { marked: "Rien ne parvient à [infliger] la courbe des dépenses.", fix: "infléchir" },
    ]},
    { ruleSlug: "justesse-justice", sentences: [
      { marked: "La [justice] du ton fait toute la valeur de ce texte.", fix: "justesse" },
      { marked: "Il compte porter l'affaire devant la [justesse].", fix: "justice" },
    ]},
    { ruleSlug: "luxure-luxe", sentences: [
      { marked: "Ce restaurant affiche un [luxure] un peu tapageur.", fix: "luxe" },
      { marked: "La [luxe] du jardin surprend en plein mois d'août.", fix: "luxuriance" },
    ]},
    { ruleSlug: "munificence-magnificence", sentences: [
      { marked: "Sa [magnificence] a permis de sauver l'orphelinat.", fix: "munificence" },
      { marked: "La [munificence] des fresques laisse sans voix.", fix: "magnificence" },
    ]},
    { ruleSlug: "oiseux-oisif", sentences: [
      { marked: "Ces débats [oisifs] durent depuis des heures.", fix: "oiseux" },
      { marked: "Il traîne une existence [oiseuse] depuis son licenciement.", fix: "oisive" },
    ]},
    { ruleSlug: "ombrageux-ombrage", sentences: [
      { marked: "Le parc [ombrageux] est très prisé les jours de canicule.", fix: "ombragé" },
      { marked: "Ce caractère [ombragé] rend toute discussion difficile.", fix: "ombrageux" },
    ]},
    { ruleSlug: "opprimer-oppresser", sentences: [
      { marked: "Cette dictature [oppresse] son peuple depuis trente ans.", fix: "opprime" },
      { marked: "Une chaleur lourde les [opprimait] depuis le matin.", fix: "oppressait" },
    ]},
    { ruleSlug: "pecheur-pecheur-accent", sentences: [
      { marked: "Le [pécheur] a remonté ses casiers avant l'aube.", fix: "pêcheur" },
      { marked: "Le prêtre reçoit chaque [pêcheur] sans jamais le juger.", fix: "pécheur" },
    ]},
    { ruleSlug: "percepteur-precepteur", sentences: [
      { marked: "Le [précepteur] réclame le solde de l'impôt foncier.", fix: "percepteur" },
      { marked: "Un [percepteur] instruisait les enfants du château.", fix: "précepteur" },
    ]},
    { ruleSlug: "stupefait-stupefie", sentences: [
      { marked: "Ils sont restés [stupéfiés] devant l'ampleur du chantier.", fix: "stupéfaits" },
      { marked: "La révélation les a tous [stupéfaits] sur le moment.", fix: "stupéfiés" },
    ]},
    { ruleSlug: "suggestion-sujetion", sentences: [
      { marked: "Sa [sujétion] mérite d'être étudiée par le comité.", fix: "suggestion" },
      { marked: "Ce poste comporte de lourdes [suggestions] horaires.", fix: "sujétions" },
    ]},
  ],
};
