/**
 * Étape C, seconde passe — Homophones : de 5 à 7 phrases par règle.
 *
 * Objectif : ne plus reconnaître une phrase avant de l'avoir lue. Avec sept
 * phrases par règle, une règle revue tous les trois mois ne se répète plus.
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY2_HOMOPHONES: ContentBatch = {
  id: "densify2-homophones",
  rules: [],
  additions: [
    { ruleSlug: "a-à", sentences: [
      { marked: "Cette question [a] laquelle personne ne répond reste ouverte.", fix: "à" },
      { marked: "Le facteur [à] déposé un colis devant la porte.", fix: "a" },
    ]},
    { ruleSlug: "ou-où", sentences: [
      { marked: "Je cherche l'endroit [ou] nous nous sommes rencontrés.", fix: "où" },
      { marked: "Prends le bus [où] le tramway, comme tu préfères.", fix: "ou" },
    ]},
    { ruleSlug: "ce-se", sentences: [
      { marked: "Il [ce] plaint de tout depuis le début du voyage.", fix: "se" },
      { marked: "[Se] dossier attend une signature depuis trois semaines.", fix: "Ce" },
    ]},
    { ruleSlug: "ces-ses", sentences: [
      { marked: "Chacun range [ces] outils dans son propre coffre.", fix: "ses" },
      { marked: "[Ses] arbres-là ont été plantés par mon grand-père.", fix: "Ces" },
    ]},
    { ruleSlug: "leur", sentences: [
      { marked: "Nous [leurs] avons répondu dès le lendemain matin.", fix: "leur" },
      { marked: "Ils ont laissé [leur] bagages à la consigne de la gare.", fix: "leurs" },
    ]},
    { ruleSlug: "on-ont", sentences: [
      { marked: "Les enfants [on] fini leurs devoirs avant le dîner.", fix: "ont" },
      { marked: "Quand [ont] veut vraiment, on finit toujours par pouvoir.", fix: "on" },
    ]},
    { ruleSlug: "son-sont", sentences: [
      { marked: "Les magasins [son] fermés le lundi dans ce quartier.", fix: "sont" },
      { marked: "Il a perdu [sont] portefeuille dans le métro.", fix: "son" },
    ]},
    { ruleSlug: "et-est", sentences: [
      { marked: "Le café [et] froid depuis un bon quart d'heure.", fix: "est" },
      { marked: "Il aime le pain [est] le fromage par-dessus tout.", fix: "et" },
    ]},
    { ruleSlug: "ni-ny", sentences: [
      { marked: "Personne [ni] comprend rien depuis le début.", fix: "n'y" },
      { marked: "Il n'a [n'y] faim ni soif à cette heure-ci.", fix: "ni" },
    ]},
    { ruleSlug: "si-sy", sentences: [
      { marked: "Il [si] prend toujours à la dernière minute.", fix: "s'y" },
      { marked: "Passe me voir [s'y] tu as un moment demain.", fix: "si" },
    ]},
    { ruleSlug: "la-là-la", sentences: [
      { marked: "Elle [la] posée sur le buffet en rentrant.", fix: "l'a" },
      { marked: "Assieds-toi [l'a], près de la fenêtre du fond.", fix: "là" },
    ]},
    { ruleSlug: "cest-sest", sentences: [
      { marked: "Il [c'est] endormi devant la télévision hier soir.", fix: "s'est" },
      { marked: "[S'est] toujours la même histoire avec lui.", fix: "C'est" },
    ]},
    { ruleSlug: "sais-sait", sentences: [
      { marked: "Je [c'est] bien qu'il ne viendra pas ce soir.", fix: "sais" },
      { marked: "Personne ne [c'est] comment il a réussi ce tour.", fix: "sait" },
    ]},
    { ruleSlug: "ça-sa", sentences: [
      { marked: "Il range [ça] chambre une fois par mois.", fix: "sa" },
      { marked: "Tout [sa] pour finir par renoncer au dernier moment.", fix: "ça" },
    ]},
    { ruleSlug: "quand-quant", sentences: [
      { marked: "Préviens-moi [quant] tu seras arrivé à destination.", fix: "quand" },
      { marked: "[Quand] à cette proposition, elle mérite réflexion.", fix: "Quant" },
    ]},
    { ruleSlug: "quelle-quelle", sentences: [
      { marked: "Je pense [quelle] a raison sur ce point précis.", fix: "qu'elle" },
      { marked: "[Qu'elle] est la meilleure route pour rejoindre la côte ?", fix: "Quelle" },
    ]},
    { ruleSlug: "peu-peut", sentences: [
      { marked: "Ce moteur [peu] tomber en panne à tout moment.", fix: "peut" },
      { marked: "Il reste très [peut] de places pour la représentation.", fix: "peu" },
    ]},
    { ruleSlug: "plutot", sentences: [
      { marked: "Nous partirons [plutôt] que prévu à cause du trafic.", fix: "plus tôt" },
      { marked: "Il se lève [plutôt] que les autres chaque matin.", fix: "plus tôt" },
    ]},
    { ruleSlug: "quel-que", sentences: [
      { marked: "[Quelque] soit ton avis, la décision est prise.", fix: "Quel que" },
      { marked: "Il ira jusqu'au bout, [quelque] soient les difficultés.", fix: "quelles que" },
    ]},
    { ruleSlug: "quoi-que", sentences: [
      { marked: "[Quoiqu']on en pense, la mesure sera appliquée.", fix: "Quoi qu'on" },
      { marked: "Il persévère, quoiqu'il soit épuisé depuis des jours.", fix: null },
    ]},
    { ruleSlug: "censé", sentences: [
      { marked: "Vous êtes [sensé] connaître le règlement intérieur.", fix: "censé" },
      { marked: "Voilà un raisonnement parfaitement [censé] et solide.", fix: "sensé" },
    ]},
    { ruleSlug: "dans-den", sentences: [
      { marked: "Il vient [dans] finir avec la comptabilité du mois.", fix: "d'en" },
      { marked: "Les documents sont [d'en] le classeur bleu du bureau.", fix: "dans" },
    ]},
    { ruleSlug: "pres-pret", sentences: [
      { marked: "Le repas est [près] à être servi dans dix minutes.", fix: "prêt" },
      { marked: "La boulangerie se trouve tout [prêt] de chez moi.", fix: "près" },
    ]},
    { ruleSlug: "tout-tous", sentences: [
      { marked: "[Tout] les jours, il relit ses notes avant de dormir.", fix: "Tous" },
      { marked: "Ils sont [tout] partis avant la fin du spectacle.", fix: "tous" },
    ]},
    { ruleSlug: "tout-adverbe", sentences: [
      { marked: "Elle est arrivée [toute] essoufflée du troisième étage.", fix: "tout" },
      { marked: "Les branches sont [tout] cassées après la tempête.", fix: "toutes" },
    ]},
    { ruleSlug: "meme", sentences: [
      { marked: "Ils ont fait les [même] remarques que la fois précédente.", fix: "mêmes" },
      { marked: "Les élèves eux-[même] ont proposé cette solution.", fix: "mêmes" },
    ]},
    { ruleSlug: "sans-sen", sentences: [
      { marked: "Il est reparti [s'en] même dire au revoir.", fix: "sans" },
      { marked: "Elle [sans] est aperçue beaucoup trop tard.", fix: "s'en" },
    ]},
    { ruleSlug: "mais-mes", sentences: [
      { marked: "J'ai oublié [mais] lunettes sur la table de la cuisine.", fix: "mes" },
      { marked: "Il a essayé, [mes] sans jamais y parvenir vraiment.", fix: "mais" },
    ]},
    { ruleSlug: "notre-notre", sentences: [
      { marked: "Ce terrain est le [notre] depuis quatre générations.", fix: "nôtre" },
      { marked: "[Nôtre] fils termine ses études cette année.", fix: "Notre" },
    ]},
    { ruleSlug: "peut-etre", sentences: [
      { marked: "Le colis [peut-être] livré dès demain matin.", fix: "peut être" },
      { marked: "Ce délai [peut-être] prolongé sur simple demande écrite.", fix: "peut être" },
    ]},
    { ruleSlug: "voie-voix", sentences: [
      { marked: "Il a perdu la [voie] à force de crier dans le vent.", fix: "voix" },
      { marked: "Cette découverte ouvre la [voix] à de nouveaux traitements.", fix: "voie" },
    ]},
    { ruleSlug: "cour-cours", sentences: [
      { marked: "Le [court] d'eau traverse tout le village.", fix: "cours" },
      { marked: "La [cours] de l'immeuble est fermée la nuit.", fix: "cour" },
    ]},
    { ruleSlug: "compte-conte", sentences: [
      { marked: "Elle a ouvert un [conte] dans une banque en ligne.", fix: "compte" },
      { marked: "Ce [compte] traditionnel se raconte depuis des siècles.", fix: "conte" },
    ]},
    { ruleSlug: "champ-chant", sentences: [
      { marked: "Le [chant] de tournesols s'étend sur trois hectares.", fix: "champ" },
      { marked: "Son [champ] a résonné dans toute l'église.", fix: "chant" },
    ]},
    { ruleSlug: "faim-fin", sentences: [
      { marked: "Il souffre de la [fin] depuis plusieurs jours.", fix: "faim" },
      { marked: "La [faim] de l'histoire surprend tous les lecteurs.", fix: "fin" },
    ]},
    { ruleSlug: "mettre-maitre", sentences: [
      { marked: "Il faut [maître] la table avant l'arrivée des invités.", fix: "mettre" },
      { marked: "Le [mètre] nageur surveille toute la plage.", fix: "maître" },
    ]},
    { ruleSlug: "seau-sceau", sentences: [
      { marked: "Elle a rempli un [sceau] d'eau pour laver la terrasse.", fix: "seau" },
      { marked: "Le document porte le [seau] officiel de la préfecture.", fix: "sceau" },
    ]},
    { ruleSlug: "tant-temps", sentences: [
      { marked: "Il pleut depuis [temps] de jours que la rivière déborde.", fix: "tant" },
      { marked: "Le [tant] de trajet dépasse deux heures chaque matin.", fix: "temps" },
    ]},
    { ruleSlug: "verre-vers", sentences: [
      { marked: "Il a cassé un [vers] en débarrassant la table.", fix: "verre" },
      { marked: "Le chemin monte [verre] le col en pente douce.", fix: "vers" },
    ]},
    { ruleSlug: "amande-amende", sentences: [
      { marked: "Le gâteau contient de la poudre d'[amende] douce.", fix: "d'amande" },
      { marked: "Il a écopé d'une [amande] pour excès de vitesse.", fix: "amende" },
    ]},
    { ruleSlug: "air-aire", sentences: [
      { marked: "L'[aire] est irrespirable dans ce couloir sans fenêtre.", fix: "L'air" },
      { marked: "Nous nous sommes garés sur l'[air] de repos suivante.", fix: "l'aire" },
    ]},
    { ruleSlug: "cane-canne", sentences: [
      { marked: "La [canne] traverse la route suivie de ses petits.", fix: "cane" },
      { marked: "Il s'appuie sur une [cane] depuis son opération.", fix: "canne" },
    ]},
    { ruleSlug: "date-datte", sentences: [
      { marked: "Il a noté la [datte] du rendez-vous sur son agenda.", fix: "date" },
      { marked: "Ces [dates] du désert se vendent au poids.", fix: "dattes" },
    ]},
    { ruleSlug: "foi-foie", sentences: [
      { marked: "Il l'a dit de bonne [foie], sans vouloir tromper personne.", fix: "foi" },
      { marked: "Une crise de [foi] l'a cloué au lit trois jours.", fix: "foie" },
    ]},
    { ruleSlug: "pain-pin", sentences: [
      { marked: "Le [pin] de mie sèche vite s'il reste à l'air.", fix: "pain" },
      { marked: "La forêt de [pains] borde toute la dune.", fix: "pins" },
    ]},
    { ruleSlug: "paire-pere", sentences: [
      { marked: "Il a perdu une [père] de gants dans le train.", fix: "paire" },
      { marked: "Le [paire] de la mariée a prononcé un discours.", fix: "père" },
    ]},
    { ruleSlug: "port-porc", sentences: [
      { marked: "Le [porc] de commerce accueille des cargos chaque jour.", fix: "port" },
      { marked: "Une côte de [port] mijote dans la cocotte.", fix: "porc" },
    ]},
    { ruleSlug: "sale-salle", sentences: [
      { marked: "La [sale] d'attente est pleine depuis ce matin.", fix: "salle" },
      { marked: "Ce chiffon est trop [salle] pour essuyer la table.", fix: "sale" },
    ]},
    { ruleSlug: "cygne-signe", sentences: [
      { marked: "Le [signe] noir a traversé tout l'étang.", fix: "cygne" },
      { marked: "Il n'a donné aucun [cygne] de vie depuis mardi.", fix: "signe" },
    ]},
    { ruleSlug: "choeur-coeur", sentences: [
      { marked: "Tous ont répondu en [cœur] à la question posée.", fix: "chœur" },
      { marked: "Son [chœur] battait très vite avant l'examen oral.", fix: "cœur" },
    ]},
    { ruleSlug: "hors-or", sentences: [
      { marked: "Ce modèle est [or] série et coûte une fortune.", fix: "hors" },
      { marked: "Il jurait être seul ; [hors] la caméra le contredit.", fix: "or" },
    ]},
    { ruleSlug: "pourquoi", sentences: [
      { marked: "Personne ne sait [pourquoi] il a finalement opté.", fix: "pour quoi" },
      { marked: "Dis-moi [pourquoi] tu milites : le climat ou l'emploi ?", fix: "pour quoi" },
    ]},
    { ruleSlug: "aussitot", sentences: [
      { marked: "Il n'a jamais rendu sa copie [aussitôt] qu'aujourd'hui.", fix: "aussi tôt" },
      { marked: "Elle est partie [aussitôt] que sa sœur ce matin-là.", fix: "aussi tôt" },
    ]},
    { ruleSlug: "sitot", sentences: [
      { marked: "Nous ne l'attendions pas [sitôt] dans la matinée.", fix: "si tôt" },
      { marked: "Personne ne se couche [sitôt] dans cette maison.", fix: "si tôt" },
    ]},
    { ruleSlug: "quelque-environ", sentences: [
      { marked: "Le colis pèse [quelques] cinq kilos, à peu près.", fix: "quelque" },
      { marked: "Il reste [quelques] cent mètres avant le sommet.", fix: "quelque" },
    ]},
    { ruleSlug: "ma-ma", sentences: [
      { marked: "Elle [ma] rendu le livre que je lui avais prêté.", fix: "m'a" },
      { marked: "[M'a] voisine arrose mes plantes pendant les vacances.", fix: "Ma" },
    ]},
    { ruleSlug: "ta-ta", sentences: [
      { marked: "Qui [ta] donné cette information invraisemblable ?", fix: "t'a" },
      { marked: "[T'a] chambre est en désordre depuis une semaine.", fix: "Ta" },
    ]},
    { ruleSlug: "différend", sentences: [
      { marked: "Leur [différent] remonte à plus de dix ans.", fix: "différend" },
      { marked: "Le résultat est très [différend] de ce qu'on attendait.", fix: "différent" },
    ]},
    { ruleSlug: "plan-plant", sentences: [
      { marked: "Chaque [plan] de tomate demande un tuteur solide.", fix: "plant" },
      { marked: "Le [plant] de la ville est affiché à l'entrée.", fix: "plan" },
    ]},
    { ruleSlug: "davantage-2", sentences: [
      { marked: "Il a [quand-même] réussi à terminer avant les autres.", fix: "quand même" },
      { marked: "C'est [quand-même] étrange, cette absence de réponse.", fix: "quand même" },
    ]},
  ],
};
