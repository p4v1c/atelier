/**
 * Étape C, seconde passe — Orthographe d'usage et Vocabulaire : de 5 à 7 phrases.
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY2_ORTHO_VOCAB: ContentBatch = {
  id: "densify2-ortho-vocab",
  rules: [],
  additions: [
    /* ── orthographe d'usage ── */
    { ruleSlug: "parmi-malgré", sentences: [
      { marked: "Son nom figure [parmis] les lauréats du concours.", fix: "parmi" },
      { marked: "Il est sorti [malgrés] l'interdiction du médecin.", fix: "malgré" },
    ]},
    { ruleSlug: "appeler", sentences: [
      { marked: "Elle [apele] ses parents tous les dimanches soir.", fix: "appelle" },
      { marked: "Nous [jettons] les vieux journaux au recyclage.", fix: "jetons" },
    ]},
    { ruleSlug: "ent-ant", sentences: [
      { marked: "Son témoignage semble peu [cohérant] à la relecture.", fix: "cohérent" },
      { marked: "Ce détail paraît [négligant] mais il compte beaucoup.", fix: "négligent" },
    ]},
    { ruleSlug: "amment-emment", sentences: [
      { marked: "Il conduit [prudament] depuis son accident de moto.", fix: "prudemment" },
      { marked: "Elle parle [couramant] trois langues étrangères.", fix: "couramment" },
    ]},
    { ruleSlug: "circonflexe", sentences: [
      { marked: "Le fruit n'est pas encore [mur] pour être cueilli.", fix: "mûr" },
      { marked: "Elle a [du] renoncer avant la fin de la course.", fix: "dû" },
    ]},
    { ruleSlug: "connexion", sentences: [
      { marked: "La [flection] du genou reste douloureuse.", fix: "flexion" },
      { marked: "Sa [reflection] mérite d'être approfondie.", fix: "réflexion" },
    ]},
    { ruleSlug: "professionnel", sentences: [
      { marked: "Son parcours [profesionnel] est exemplaire.", fix: "professionnel" },
      { marked: "Le [dévelopement] durable figure au programme.", fix: "développement" },
    ]},
    { ruleSlug: "accueillir", sentences: [
      { marked: "Il faut [cueuillir] les cerises avant les pluies.", fix: "cueillir" },
      { marked: "Le [receuil] de poèmes paraît en septembre.", fix: "recueil" },
    ]},
    { ruleSlug: "langage", sentences: [
      { marked: "Son [languague] est très soutenu pour son âge.", fix: "langage" },
      { marked: "Le [dilème] reste entier après deux heures de débat.", fix: "dilemme" },
    ]},
    { ruleSlug: "week-end", sentences: [
      { marked: "Nous partons ce [weekend] à la campagne.", fix: "week-end" },
      { marked: "Il habite au numéro huit, [cest-à-dire] juste en face.", fix: "c'est-à-dire" },
    ]},
    { ruleSlug: "t-euphonique", sentences: [
      { marked: "[Parlera-t'il] enfin de ce qui le préoccupe ?", fix: "Parlera-t-il" },
      { marked: "Que [pense-t'on] de cette proposition au bureau ?", fix: "pense-t-on" },
    ]},
    { ruleSlug: "majuscule-nationalité", sentences: [
      { marked: "Les [suédois] apprécient beaucoup ce genre de musique.", fix: "Suédois" },
      { marked: "Elle enseigne le [Chinois] depuis quinze ans.", fix: "chinois" },
    ]},
    { ruleSlug: "etc", sentences: [
      { marked: "Il faut des clous, des vis, des chevilles, [etc..].", fix: "etc." },
      { marked: "On y trouve du pain, du lait, des œufs, [ect].", fix: "etc." },
    ]},
    { ruleSlug: "cent-mille", sentences: [
      { marked: "Le concert a réuni dix [milles] spectateurs.", fix: "mille" },
      { marked: "Trois [milliard] d'euros ont été débloqués.", fix: "milliards" },
    ]},
    { ruleSlug: "sceptique", sentences: [
      { marked: "Le médecin redoute un choc [sceptique] grave.", fix: "septique" },
      { marked: "Elle demeure [septique] devant ces promesses.", fix: "sceptique" },
    ]},
    { ruleSlug: "quelquefois", sentences: [
      { marked: "Nous nous sommes vus [quelquefois], deux fois tout au plus.", fix: "quelques fois" },
      { marked: "Je l'ai relu [quelquefois], trois ou quatre au plus.", fix: "quelques fois" },
    ]},
    { ruleSlug: "bientot", sentences: [
      { marked: "Il s'est couché [bientôt] hier soir, vers vingt heures.", fix: "bien tôt" },
      { marked: "Vingt ans, c'est [bientôt] pour partir en retraite.", fix: "bien tôt" },
    ]},
    { ruleSlug: "hyphen-nombres", sentences: [
      { marked: "Le devis atteint [quatrecentdouze] euros au total.", fix: "quatre-cent-douze" },
      { marked: "Elle a compté [trenteetun] cartons dans le garage.", fix: "trente-et-un" },
    ]},
    { ruleSlug: "accent-grave", sentences: [
      { marked: "Ce [problemes] revient à chaque conseil de classe.", fix: "problème" },
      { marked: "Il enseigne au [lycee] depuis maintenant huit ans.", fix: "lycée" },
    ]},
    { ruleSlug: "cedille", sentences: [
      { marked: "Nous avons commencé les travaux en [remplacant] la toiture.", fix: "remplaçant" },
      { marked: "Il a [apercu] la voiture au bout de la rue.", fix: "aperçu" },
    ]},
    { ruleSlug: "h-aspire", sentences: [
      { marked: "Le concert a lieu dans [l'hall] de la mairie.", fix: "le hall" },
      { marked: "Elle a mesuré [l'hauteur] du plafond avant d'acheter.", fix: "la hauteur" },
    ]},
    { ruleSlug: "elision", sentences: [
      { marked: "Il attend [lautorisation] du propriétaire pour commencer.", fix: "l'autorisation" },
      { marked: "Le maire [na] rien dit de cette décision.", fix: "n'a" },
    ]},
    { ruleSlug: "aujourdhui", sentences: [
      { marked: "[Aujourdhui], la réunion commence à neuf heures précises.", fix: "Aujourd'hui" },
      { marked: "Il pleut depuis [aujourdhui] sans la moindre accalmie.", fix: "aujourd'hui" },
    ]},
    { ruleSlug: "adresse", sentences: [
      { marked: "Elle a noté son [addresse] au dos de l'enveloppe.", fix: "adresse" },
      { marked: "Nous allons [aggrandir] le séjour cet hiver.", fix: "agrandir" },
    ]},
    { ruleSlug: "nourrir", sentences: [
      { marked: "Il faut [courrir] pour attraper le dernier train.", fix: "courir" },
      { marked: "Les fruits vont [pourir] si on les laisse là.", fix: "pourrir" },
    ]},
    { ruleSlug: "souffrir", sentences: [
      { marked: "Il a [souffrert] du dos pendant plus de dix ans.", fix: "souffert" },
      { marked: "Deux heures ne [sufiront] pas pour tout ranger.", fix: "suffiront" },
    ]},
    { ruleSlug: "honneur", sentences: [
      { marked: "Il a reçu la médaille d'[honeur] de la ville.", fix: "d'honneur" },
      { marked: "Ce comportement n'est guère [honnorable].", fix: "honorable" },
    ]},
    { ruleSlug: "national", sentences: [
      { marked: "Ce raisonnement n'a rien de [rationel] à mes yeux.", fix: "rationnel" },
      { marked: "La fête [nationnale] tombe un dimanche cette année.", fix: "nationale" },
    ]},
    { ruleSlug: "occasion", sentences: [
      { marked: "Il a trouvé un vélo d'[ocasion] au marché.", fix: "d'occasion" },
      { marked: "Cette [ocurence] du mot est la seule du texte.", fix: "occurrence" },
    ]},
    { ruleSlug: "chariot", sentences: [
      { marked: "Le [charriot] à bagages grince à chaque virage.", fix: "chariot" },
      { marked: "Il faut atteler la [charue] avant les labours.", fix: "charrue" },
    ]},
    { ruleSlug: "combatif", sentences: [
      { marked: "Son esprit [combattif] force l'admiration.", fix: "combatif" },
      { marked: "Ils vont [combatre] cette décision devant le tribunal.", fix: "combattre" },
    ]},
    { ruleSlug: "imbecile", sentences: [
      { marked: "L'avion va [aterrir] dans une vingtaine de minutes.", fix: "atterrir" },
      { marked: "Une telle [imbécilité] laisse tout le monde sans voix.", fix: "imbécillité" },
    ]},
    { ruleSlug: "emment", sentences: [
      { marked: "Il a [évidament] oublié de prévenir le service.", fix: "évidemment" },
      { marked: "Elle répond [patiement] à toutes les questions.", fix: "patiemment" },
    ]},
    { ruleSlug: "decision", sentences: [
      { marked: "Cette [décition] a surpris tout le personnel.", fix: "décision" },
      { marked: "La [mition] de contrôle dure trois semaines.", fix: "mission" },
    ]},
    { ruleSlug: "orthographe", sentences: [
      { marked: "La [farmacie] de garde se trouve à deux rues d'ici.", fix: "pharmacie" },
      { marked: "Sa [filosophie] de vie tient en trois phrases.", fix: "philosophie" },
    ]},
    { ruleSlug: "gymnastique", sentences: [
      { marked: "Le [sistème] de chauffage date des années soixante.", fix: "système" },
      { marked: "Ce [rithme] de travail est intenable à la longue.", fix: "rythme" },
    ]},
    { ruleSlug: "consequence", sentences: [
      { marked: "Son [absance] prolongée inquiète toute l'équipe.", fix: "absence" },
      { marked: "La [prudance] est de mise dans ce genre d'affaire.", fix: "prudence" },
    ]},
    { ruleSlug: "monsieur-abrev", sentences: [
      { marked: "Bonjour [Mr] Bernard, votre dossier est prêt.", fix: "M." },
      { marked: "Les [Mrs] Petit et Durand président la séance.", fix: "MM." },
    ]},
    { ruleSlug: "jours-mois", sentences: [
      { marked: "Le rendez-vous est fixé au [Jeudi] 12 septembre.", fix: "jeudi" },
      { marked: "Il est né un dimanche de [Novembre] pluvieux.", fix: "novembre" },
    ]},
    { ruleSlug: "trema", sentences: [
      { marked: "Cette remarque un peu [naive] a fait sourire.", fix: "naïve" },
      { marked: "La soupe de [mais] accompagne le poulet grillé.", fix: "maïs" },
    ]},

    /* ── vocabulaire ── */
    { ruleSlug: "conjoncture", sentences: [
      { marked: "La [conjecture] internationale reste très instable.", fix: "conjoncture" },
      { marked: "Ce ne sont là que de simples [conjonctures].", fix: "conjectures" },
    ]},
    { ruleSlug: "irruption", sentences: [
      { marked: "Les manifestants ont fait [éruption] dans la salle.", fix: "irruption" },
      { marked: "Une [irruption] volcanique menace le village voisin.", fix: "éruption" },
    ]},
    { ruleSlug: "voire", sentences: [
      { marked: "Le trajet coûte cent euros, [voir] davantage en été.", fix: "voire" },
      { marked: "Nous allons [voire] ce que cette méthode donne.", fix: "voir" },
    ]},
    { ruleSlug: "davantage", sentences: [
      { marked: "Il faudrait dormir [d'avantage] pour tenir le rythme.", fix: "davantage" },
      { marked: "Cette formule présente peu [davantage] pour un débutant.", fix: "d'avantage" },
    ]},
    { ruleSlug: "savoir-gré", sentences: [
      { marked: "Je vous [serais] gré de me répondre rapidement.", fix: "saurais" },
      { marked: "Nous lui [étions] gré de son intervention rapide.", fix: "savions" },
    ]},
    { ruleSlug: "amener", sentences: [
      { marked: "Peux-tu [amener] le dossier à la réunion de mardi ?", fix: "apporter" },
      { marked: "Il a [apporté] sa fille chez le dentiste ce matin.", fix: "amené" },
    ]},
    { ruleSlug: "emmener", sentences: [
      { marked: "N'oublie pas d'[emmener] ton parapluie demain.", fix: "d'emporter" },
      { marked: "Elle veut [emporter] les enfants au cinéma dimanche.", fix: "emmener" },
    ]},
    { ruleSlug: "éminent", sentences: [
      { marked: "Le départ paraît [éminent] à tout le personnel.", fix: "imminent" },
      { marked: "Un [imminent] historien préside le colloque.", fix: "éminent" },
    ]},
    { ruleSlug: "collision", sentences: [
      { marked: "Une [collusion] a bloqué l'autoroute deux heures.", fix: "collision" },
      { marked: "L'enquête soupçonne une [collision] entre les deux sociétés.", fix: "collusion" },
    ]},
    { ruleSlug: "effraction", sentences: [
      { marked: "Ils sont entrés par [infraction] pendant la nuit.", fix: "effraction" },
      { marked: "Ce dépassement constitue une [effraction] au code.", fix: "infraction" },
    ]},
    { ruleSlug: "original", sentences: [
      { marked: "Le manuscrit original a été perdu dans l'incendie.", fix: null },
      { marked: "Voilà une idée vraiment [originelle] et bien vue.", fix: "originale" },
    ]},
    { ruleSlug: "littéral", sentences: [
      { marked: "La zone [littérale] fait l'objet d'une protection.", fix: "littorale" },
      { marked: "Il en donne une lecture [littorale] et sans nuance.", fix: "littérale" },
    ]},
    { ruleSlug: "tache", sentences: [
      { marked: "Cette [tâche] d'encre a traversé toute la page.", fix: "tache" },
      { marked: "La [tache] de relecture lui revient chaque semaine.", fix: "tâche" },
    ]},
    { ruleSlug: "cession", sentences: [
      { marked: "La [session] du fonds de commerce est signée.", fix: "cession" },
      { marked: "La [cession] parlementaire s'ouvre en octobre.", fix: "session" },
    ]},
    { ruleSlug: "dessein", sentences: [
      { marked: "Il a agi à [dessin], en toute connaissance de cause.", fix: "dessein" },
      { marked: "Ce [dessein] d'enfant orne toute la cuisine.", fix: "dessin" },
    ]},
    { ruleSlug: "balade", sentences: [
      { marked: "Une [ballade] en forêt nous ferait le plus grand bien.", fix: "balade" },
      { marked: "Cette [balade] écossaise se chante depuis trois siècles.", fix: "ballade" },
    ]},
    { ruleSlug: "acception", sentences: [
      { marked: "Dans cette [acceptation] du mot, il a raison.", fix: "acception" },
      { marked: "Son [acception] du poste a surpris la direction.", fix: "acceptation" },
    ]},
    { ruleSlug: "compréhensif", sentences: [
      { marked: "Ce texte reste peu [compréhensif] pour un débutant.", fix: "compréhensible" },
      { marked: "Le jury s'est montré très [compréhensible] avec elle.", fix: "compréhensif" },
    ]},
    { ruleSlug: "perpétrer", sentences: [
      { marked: "Cette famille [perpètre] la tradition depuis toujours.", fix: "perpétue" },
      { marked: "Le vol a été [perpétué] en plein jour.", fix: "perpétré" },
    ]},
    { ruleSlug: "recouvrer", sentences: [
      { marked: "Il a fini par [recouvrir] toutes ses facultés.", fix: "recouvrer" },
      { marked: "La neige avait [recouvré] toute la vallée.", fix: "recouvert" },
    ]},
    { ruleSlug: "inclinaison", sentences: [
      { marked: "L'[inclination] du terrain complique la construction.", fix: "L'inclinaison" },
      { marked: "Il a toujours eu une [inclinaison] pour les langues.", fix: "inclination" },
    ]},
    { ruleSlug: "notable", sentences: [
      { marked: "Sa générosité est [notable] dans tout le quartier.", fix: "notoire" },
      { marked: "Un progrès [notoire] a été enregistré ce trimestre.", fix: "notable" },
    ]},
    { ruleSlug: "pallier", sentences: [
      { marked: "Rien ne peut pallier [à] ce manque de moyens.", fix: "à supprimer" },
      { marked: "Le service a pallié [à] cette absence sans difficulté.", fix: "à supprimer" },
    ]},
    { ruleSlug: "se-rappeler", sentences: [
      { marked: "Je me rappelle [de] cette soirée comme si c'était hier.", fix: "à supprimer" },
      { marked: "Il se rappelle [de] son visage avec une grande précision.", fix: "à supprimer" },
    ]},
    { ruleSlug: "attention-intention", sentences: [
      { marked: "Ce pli est à l'[intention] du service juridique.", fix: "l'attention" },
      { marked: "Une fête est organisée à l'[attention] des retraités.", fix: "l'intention" },
    ]},
    { ruleSlug: "en-termes", sentences: [
      { marked: "En [terme] de délais, rien n'est encore acquis.", fix: "termes" },
      { marked: "Il s'exprime en [terme] très mesurés sur le sujet.", fix: "termes" },
    ]},
    { ruleSlug: "espèce", sentences: [
      { marked: "[Un] espèce de hangar sert d'atelier au menuisier.", fix: "Une" },
      { marked: "Il portait [un] espèce de chapeau très étrange.", fix: "une" },
    ]},
    { ruleSlug: "prodige", sentences: [
      { marked: "Ce fils [prodige] a dilapidé tout son héritage.", fix: "prodigue" },
      { marked: "Le jeune [prodigue] du violon a ébloui la salle.", fix: "prodige" },
    ]},
    { ruleSlug: "évoquer", sentences: [
      { marked: "Il a [invoqué] ses souvenirs d'enfance toute la soirée.", fix: "évoqué" },
      { marked: "Elle a [évoqué] l'article 12 pour justifier son refus.", fix: "invoqué" },
    ]},
    { ruleSlug: "martyr", sentences: [
      { marked: "Ce [martyre] est mort pour ses convictions.", fix: "martyr" },
      { marked: "Il a enduré le [martyr] pendant sa convalescence.", fix: "martyre" },
    ]},
    { ruleSlug: "acquit", sentences: [
      { marked: "Elle a relu le contrat par [acquis] de conscience.", fix: "acquit" },
      { marked: "Ses [acquits] professionnels sont largement reconnus.", fix: "acquis" },
    ]},
    { ruleSlug: "consumer", sentences: [
      { marked: "Le feu a [consommé] toute la charpente en une heure.", fix: "consumé" },
      { marked: "Ils ont [consumé] trois bouteilles au cours du dîner.", fix: "consommé" },
    ]},
    { ruleSlug: "decennie", sentences: [
      { marked: "La [décade] écoulée a vu doubler le nombre d'inscrits.", fix: "décennie" },
      { marked: "Deux [décades] ont passé depuis leur rencontre.", fix: "décennies" },
    ]},
    { ruleSlug: "detonant", sentences: [
      { marked: "Sa cravate [détonait] avec son costume sombre.", fix: "détonnait" },
      { marked: "Un mélange [détonnant] a fait exploser le laboratoire.", fix: "détonant" },
    ]},
    { ruleSlug: "emigrer", sentences: [
      { marked: "Ses parents ont [immigré] du Portugal en 1965.", fix: "émigré" },
      { marked: "Nombre d'entre eux ont [émigré] en Belgique à cette époque.", fix: "immigré" },
    ]},
    { ruleSlug: "elucider", sentences: [
      { marked: "L'enquêteur a [éludé] le mystère en trois jours.", fix: "élucidé" },
      { marked: "Le témoin a [élucidé] la question par une pirouette.", fix: "éludé" },
    ]},
    { ruleSlug: "habilete", sentences: [
      { marked: "Son [habilité] manuelle impressionne ses collègues.", fix: "habileté" },
      { marked: "On conteste l'[habileté] du tribunal à juger l'affaire.", fix: "l'habilité" },
    ]},
    { ruleSlug: "hiberner", sentences: [
      { marked: "Les ours [hivernent] plusieurs mois d'affilée.", fix: "hibernent" },
      { marked: "Le voilier [hiberne] au port jusqu'en avril.", fix: "hiverne" },
    ]},
    { ruleSlug: "infester", sentences: [
      { marked: "La plaie s'est [infestée] faute de soins.", fix: "infectée" },
      { marked: "Les souris ont [infecté] tout le grenier.", fix: "infesté" },
    ]},
    { ruleSlug: "partiel", sentences: [
      { marked: "Le rapport se montre franchement [partiel] envers l'accusé.", fix: "partial" },
      { marked: "Nous n'avons qu'un bilan [partial] à ce stade.", fix: "partiel" },
    ]},
    { ruleSlug: "pecuniaire", sentences: [
      { marked: "Il traverse des difficultés [pécunières] sérieuses.", fix: "pécuniaires" },
      { marked: "Aucun avantage [pécunier] n'est prévu au contrat.", fix: "pécuniaire" },
    ]},
    { ruleSlug: "prescrire", sentences: [
      { marked: "Le médecin a [proscrit] un traitement de trois semaines.", fix: "prescrit" },
      { marked: "Le règlement [prescrit] désormais tout téléphone en salle d'examen.", fix: "proscrit" },
    ]},
    { ruleSlug: "prolongation", sentences: [
      { marked: "Le [prolongement] du délai a été accordé sans discussion.", fix: "prolongation" },
      { marked: "La [prolongation] de la ligne atteindra la banlieue.", fix: "prolongement" },
    ]},
    { ruleSlug: "rebattre", sentences: [
      { marked: "Il nous [rabat] les oreilles avec cette histoire.", fix: "rebat" },
      { marked: "On m'a [rabattu] les oreilles de ce projet.", fix: "rebattu" },
    ]},
    { ruleSlug: "somptuaire", sentences: [
      { marked: "Ils ont donné un dîner [somptuaire] pour l'occasion.", fix: "somptueux" },
      { marked: "Une loi [somptueuse] limitait autrefois le luxe des particuliers.", fix: "somptuaire" },
    ]},
    { ruleSlug: "subvenir", sentences: [
      { marked: "Elle peine à [survenir] aux besoins des siens.", fix: "subvenir" },
      { marked: "Un incident est [subvenu] pendant la présentation publique.", fix: "survenu" },
    ]},
    { ruleSlug: "veneneux", sentences: [
      { marked: "Ce champignon est [venimeux], ne le touche pas.", fix: "vénéneux" },
      { marked: "Le scorpion est un animal [vénéneux] très redouté.", fix: "venimeux" },
    ]},
    { ruleSlug: "eminent-2", sentences: [
      { marked: "L'[influence] de visiteurs sature tout le musée.", fix: "L'affluence" },
      { marked: "Son [affluence] sur le conseil reste déterminante.", fix: "influence" },
    ]},
    { ruleSlug: "alternative", sentences: [
      { marked: "Il ne reste aucune autre [alternative] envisageable.", fix: "solution" },
      { marked: "Quelles autres [alternatives] avons-nous à ce stade ?", fix: "solutions" },
    ]},
    { ruleSlug: "conséquent", sentences: [
      { marked: "Le budget alloué est très [conséquent] cette année.", fix: "important" },
      { marked: "Une somme [conséquente] a été versée à la signature.", fix: "importante" },
    ]},
    { ruleSlug: "realiser", sentences: [
      { marked: "Il a [réalisé] trop tard qu'il s'était trompé d'adresse.", fix: "compris" },
      { marked: "Je [réalise] seulement maintenant l'ampleur du dégât.", fix: "mesure" },
    ]},
    { ruleSlug: "digital", sentences: [
      { marked: "La transformation [digitale] a duré trois ans.", fix: "numérique" },
      { marked: "Les outils [digitaux] ont remplacé le papier.", fix: "numériques" },
    ]},
    { ruleSlug: "solutionner", sentences: [
      { marked: "Il faudra [solutionner] ce point avant la livraison.", fix: "résoudre" },
      { marked: "Nous avons [solutionné] la panne en une heure.", fix: "résolu" },
    ]},
    { ruleSlug: "voire-meme", sentences: [
      { marked: "Cela prendra trois jours, voire [même] quatre.", fix: "à supprimer" },
      { marked: "Elle viendra samedi, voire [même] dès vendredi.", fix: "à supprimer" },
    ]},
    { ruleSlug: "malgre-que", sentences: [
      { marked: "[Malgré] qu'il pleuve, le marché se tiendra dehors.", fix: "Bien" },
      { marked: "Il a insisté [malgré] qu'on lui ait déjà répondu.", fix: "bien" },
    ]},
    { ruleSlug: "savérer", sentences: [
      { marked: "Cette nouvelle s'est [avérée] fausse au bout de deux jours.", fix: "révélée" },
      { marked: "Le calcul s'est avéré [vrai] après vérification.", fix: "juste" },
    ]},
    { ruleSlug: "affaire-a", sentences: [
      { marked: "Tu auras [affaires] à un interlocuteur exigeant.", fix: "affaire" },
      { marked: "Ils ont eu [affaires] à forte partie durant la négociation.", fix: "affaire" },
    ]},
    { ruleSlug: "plain-pied", sentences: [
      { marked: "Ce pavillon est de [plein-pied], sans la moindre marche.", fix: "plain-pied" },
      { marked: "Il est entré de [plein-pied] dans le sujet.", fix: "plain-pied" },
    ]},
    { ruleSlug: "for-interieur", sentences: [
      { marked: "En son [fort] intérieur, il savait déjà la vérité.", fix: "for" },
      { marked: "Chacun juge en son [fors] intérieur sans le dire.", fix: "for" },
    ]},
    { ruleSlug: "a-lenvi", sentences: [
      { marked: "Les candidats se citaient à l'[envie] pendant le débat.", fix: "l'envi" },
      { marked: "On répète à l'[envie] que rien ne changera.", fix: "l'envi" },
    ]},
    { ruleSlug: "dores-deja", sentences: [
      { marked: "Nous pouvons [d'hors] et déjà annoncer la nouvelle.", fix: "d'ores" },
      { marked: "Il est [dors] et déjà trop tard pour changer d'avis.", fix: "d'ores" },
    ]},
    { ruleSlug: "au-fur", sentences: [
      { marked: "Nous corrigerons [à] fur et à mesure de la relecture.", fix: "au" },
      { marked: "Les résultats tombent [à] fur et à mesure du dépouillement.", fix: "au" },
    ]},
    { ruleSlug: "mettre-au-jour", sentences: [
      { marked: "Les fouilles ont mis [à] jour une villa romaine.", fix: "au" },
      { marked: "Il faut mettre [au] jour le système avant toute installation.", fix: "à" },
    ]},
    { ruleSlug: "chez-le", sentences: [
      { marked: "Elle est allée [au] dentiste en sortant du bureau.", fix: "chez le" },
      { marked: "Nous nous retrouvons [au] boucher à dix heures.", fix: "chez le" },
    ]},
  ],
};
