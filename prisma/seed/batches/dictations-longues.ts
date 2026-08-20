/**
 * Dictées longues — des textes de plusieurs phrases.
 *
 * Les 250 dictées précédentes tiennent en une phrase de dix à quinze mots :
 * commode pour viser une règle, trop court pour un vrai exercice de dictée.
 * Celles-ci font quarante à quatre-vingt-dix mots et enchaînent plusieurs
 * difficultés, comme une dictée de classe.
 *
 * Elles ne portent, elles non plus, aucune faute : elles sont lues et recopiées.
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DICTATIONS_LONGUES: ContentBatch = {
  id: "dictations-longues",
  rules: [],
  dictations: [
    /* ─────────────── niveau 1 ─────────────── */
    {
      text: "Ce matin, la brume couvrait encore le fond de la vallée. On entendait au loin le bruit d'un tracteur qui remontait le chemin. Les volets des maisons étaient restés fermés, et personne ne semblait pressé de sortir.",
      theme: "Nature", difficulty: 1, ruleSlugs: ["on-ont", "pp-être", "virgule-complement-tete"],
    },
    {
      text: "Elle a rangé ses affaires dans ces cartons avant de partir. Son frère et sa sœur sont venus l'aider pendant tout l'après-midi. À six heures, le camion était chargé et la maison paraissait immense.",
      theme: "Maison", difficulty: 1, ruleSlugs: ["ces-ses", "son-sont", "et-est", "heures-format"],
    },
    {
      text: "Le professeur leur a rendu les copies en début d'heure. Certains ont souri, d'autres ont rangé la leur sans un mot. On a compris, à leur silence, que la note ne les avait pas surpris.",
      theme: "Vie scolaire", difficulty: 1, ruleSlugs: ["leur", "on-ont", "pp-avoir"],
    },
    {
      text: "Il faut marcher encore une bonne heure avant d'atteindre le refuge. Le sentier monte doucement, puis devient plus raide après le pont. Prends une gorgée d'eau maintenant : tu n'en trouveras plus avant le sommet.",
      theme: "Voyage", difficulty: 1, ruleSlugs: ["é-er", "puits-puis", "deux-points-explication"],
    },
    {
      text: "Tous les matins, il part courir avant le lever du soleil. Il dit que le silence de cette heure-là ne se retrouve nulle part ailleurs. Quand il rentre, la maison commence à peine à s'éveiller.",
      theme: "Vie quotidienne", difficulty: 1, ruleSlugs: ["tout-tous", "accord-nul-nulle", "verbes-cer"],
    },
    {
      text: "La salle d'attente était pleine à craquer. Une dame lisait, deux enfants se disputaient un cahier, et le téléphone sonnait sans arrêt. Personne ne savait combien de temps il faudrait patienter.",
      theme: "Vie quotidienne", difficulty: 1, ruleSlugs: ["sale-salle", "ce-se", "virgule-enumeration"],
    },
    {
      text: "Ce livre est vraiment passionnant, mais il se lit très lentement. Chaque page demande de l'attention, et l'on revient souvent en arrière. Je crois qu'il me faudra tout l'hiver pour en venir à bout.",
      theme: "Vie scolaire", difficulty: 1, ruleSlugs: ["ce-se", "mais-mes", "accord-chaque-chacun"],
    },
    {
      text: "Le dessert du jour est une tarte aux abricots du verger voisin. La pâte a été préparée la veille, et les fruits cueillis le matin même. Il n'en restera plus rien avant la fin du service.",
      theme: "Cuisine", difficulty: 1, ruleSlugs: ["desert-dessert", "pp-être", "pp-avoir"],
    },
    {
      text: "Nous commençons à comprendre pourquoi ils ont changé d'avis. Le calendrier ne tenait pas, les délais étaient trop courts, et personne n'osait le dire. Il aura fallu trois réunions pour que la vérité sorte.",
      theme: "Travail", difficulty: 1, ruleSlugs: ["verbes-cer", "on-ont", "conj-verbe-falloir"],
    },
    {
      text: "Regarde bien avant de traverser cette avenue. Les voitures arrivent vite, et le feu passe au vert sans prévenir. Donne-moi la main jusqu'au trottoir d'en face.",
      theme: "Vie quotidienne", difficulty: 1, ruleSlugs: ["impératif", "virgule-mais", "dans-den"],
    },
    {
      text: "Elle peut venir un peu plus tard si cela t'arrange. De toute façon, la séance ne commence jamais à l'heure. Nous l'attendrons devant l'entrée, comme la dernière fois.",
      theme: "Discussion", difficulty: 1, ruleSlugs: ["peu-peut", "plutot", "virgule-complement-tete"],
    },
    {
      text: "Le train arrive voie numéro trois dans quelques minutes. Vérifie ton billet : le contrôleur passe toujours avant le départ. Si tu montes dans le mauvais wagon, tu descendras à la première gare.",
      theme: "Voyage", difficulty: 1, ruleSlugs: ["voie-voix", "quelque-environ", "si-conditionnel"],
    },
    {
      text: "Il a reçu le colis avec deux jours de retard. L'emballage était abîmé, mais rien n'avait bougé à l'intérieur. Il a quand même écrit au transporteur pour signaler l'incident.",
      theme: "Vie quotidienne", difficulty: 1, ruleSlugs: ["cedille", "davantage-2", "virgule-mais"],
    },
    {
      text: "Aujourd'hui, la réunion commence une heure plus tôt que d'habitude. Chacun devra présenter son point en cinq minutes, sans dépasser. Le compte rendu sera envoyé dès demain matin.",
      theme: "Travail", difficulty: 1, ruleSlugs: ["aujourdhui", "plutot", "accord-chaque-chacun"],
    },
    {
      text: "Le mur du jardin est couvert de mûres jusqu'au mois de septembre. Les enfants en remplissent des paniers entiers, et rentrent les doigts violets. Leur mère fait de la confiture pour tout l'hiver.",
      theme: "Nature", difficulty: 1, ruleSlugs: ["mur-mur-accent", "leur-possessif", "tiret-incise"],
    },

    /* ─────────────── niveau 2 ─────────────── */
    {
      text: "Quelles que soient les difficultés rencontrées cette année, l'équipe a tenu bon. Bien qu'elle soit réduite de moitié, elle a livré tous les dossiers dans les délais. La plupart des clients ont d'ailleurs renouvelé leur confiance sans discuter.",
      theme: "Travail", difficulty: 2, ruleSlugs: ["quel-que", "subj-bienque", "la-plupart", "leur-possessif"],
    },
    {
      text: "Si j'avais su, je ne serais jamais venu à cette réunion. On y a parlé pendant deux heures sans rien décider, et chacun est reparti avec ses propres conclusions. Il faudra tout recommencer la semaine prochaine.",
      theme: "Travail", difficulty: 2, ruleSlugs: ["si-conditionnel", "accord-on", "ces-ses"],
    },
    {
      text: "Les fleurs qu'il lui a offertes ont fané en trois jours à peine. Elle les avait pourtant changées d'eau chaque matin. Le fleuriste a proposé de les remplacer, ce qu'elle a refusé poliment.",
      theme: "Maison", difficulty: 2, ruleSlugs: ["pp-avoir", "accord-chaque-chacun", "ce-se"],
    },
    {
      text: "Le panier de fruits mûrs attend sur la table de la cuisine. La liste des courses, elle, est restée dans la voiture. Il faudra bien que quelqu'un redescende avant que le magasin ne ferme.",
      theme: "Cuisine", difficulty: 2, ruleSlugs: ["sujet-éloigné", "mur-mur-accent", "conj-subjonctif-avant-que"],
    },
    {
      text: "Nous voyagions beaucoup avant la naissance des enfants. Nous partions à l'improviste, sans réserver, et nous dormions où nous pouvions. Aujourd'hui, le moindre week-end demande un mois de préparation.",
      theme: "Voyage", difficulty: 2, ruleSlugs: ["verbes-ger", "imparfait-ions", "week-end", "aujourdhui"],
    },
    {
      text: "Vingt pour cent des dossiers ont été rejetés cette année. Le motif est presque toujours le même : une pièce manquante ou une signature oubliée. Le service a donc décidé d'envoyer un rappel avant chaque échéance.",
      theme: "Bureau", difficulty: 2, ruleSlugs: ["accord-pourcentage-verbe", "pourcentage-espace", "deux-points-explication"],
    },
    {
      text: "Il a payé quatre-vingts euros pour cette réparation, pièces comprises. Le garagiste avait annoncé deux cents euros la veille, puis il a revu son devis. Personne ne sait vraiment comment ce prix a été calculé.",
      theme: "Nombres et mesures", difficulty: 2, ruleSlugs: ["vingt-cent", "hyphen-nombres", "y-compris"],
    },
    {
      text: "Le règlement intérieur sera affiché dans le hall dès lundi. Chacun est censé en prendre connaissance avant la fin de la semaine. Passé ce délai, nul ne pourra prétendre l'ignorer.",
      theme: "Travail", difficulty: 2, ruleSlugs: ["accent-grave", "h-aspire", "censé", "excepté-vu"],
    },
    {
      text: "Elle nettoie les vitres dès le premier rayon de soleil. Elle dit que la lumière rasante montre tout ce qu'on ne voit pas le reste du temps. Le résultat tient à peine deux jours, mais elle recommence sans se plaindre.",
      theme: "Maison", difficulty: 2, ruleSlugs: ["verbes-yer", "on-ont", "pronominaux-etre"],
    },
    {
      text: "Ce chien n'est pas le nôtre, il vient du village voisin. Il traverse le pré chaque matin, s'installe devant la porte et attend. Nous avons fini par lui donner un nom, ce qui ne règle rien.",
      theme: "Nature", difficulty: 2, ruleSlugs: ["notre-notre", "accord-chaque-chacun", "pp-avoir"],
    },
    {
      text: "Il faudra deux jours, voire trois, pour terminer ce chantier. Tout dépend de la météo, qui reste très incertaine jusqu'à jeudi. En attendant, le matériel est resté sous bâche derrière la maison.",
      theme: "Maison", difficulty: 2, ruleSlugs: ["voire", "virgule-relative-explicative", "pp-être"],
    },
    {
      text: "Personne n'est censé ignorer la loi, même un homme sensé. Cette formule revient dans tous les manuels, sans jamais convaincre personne. Elle rappelle surtout que l'ignorance ne dispense de rien.",
      theme: "Discussion", difficulty: 2, ruleSlugs: ["censé", "meme", "tout-le-monde"],
    },
    {
      text: "Dès que j'aurai reçu le courrier, je te préviendrai aussitôt. Ne t'inquiète pas si cela prend quelques jours : le service accuse toujours du retard en cette période. Nous aurons largement le temps de répondre.",
      theme: "Écrits professionnels", difficulty: 2, ruleSlugs: ["conj-futur-anterieur", "aussitot", "quelque-environ"],
    },
    {
      text: "Nous vous saurions gré de bien vouloir nous répondre avant vendredi. Votre dossier est complet, à l'exception d'un justificatif de domicile. Dès sa réception, nous procéderons à l'inscription définitive.",
      theme: "Écrits professionnels", difficulty: 2, ruleSlugs: ["savoir-gré", "pro-accuser-reception", "excepté-vu"],
    },
    {
      text: "La plupart des spectateurs sont restés malgré la pluie battante. Le concert s'est terminé avec une heure de retard, sous les applaudissements. Beaucoup ont dit n'avoir jamais vu pareille soirée.",
      theme: "Récit", difficulty: 2, ruleSlugs: ["la-plupart", "parmi-malgré", "pronominaux-etre"],
    },
    {
      text: "Ils ont apporté le dossier et amené leur fille à l'école avant de venir. La matinée avait mal commencé : une panne de réveil, puis un embouteillage interminable. Ils sont arrivés essoufflés, mais à l'heure.",
      theme: "Vie scolaire", difficulty: 2, ruleSlugs: ["amener", "leur-possessif", "deux-points-explication"],
    },
    {
      text: "Le magasin ferme à dix-neuf heures tous les jours sauf le dimanche. En juillet et en août, il reste ouvert jusqu'à vingt heures. Les horaires sont affichés sur la vitrine, à droite de l'entrée.",
      theme: "Vie quotidienne", difficulty: 2, ruleSlugs: ["heures-format", "jours-mois", "tout-tous"],
    },
    {
      text: "Elle porte des chaussures marron achetées en solde l'hiver dernier. Elle les met par tous les temps, et les cire une fois par mois. Elle prétend qu'elles dureront encore dix ans.",
      theme: "Vie quotidienne", difficulty: 2, ruleSlugs: ["couleurs", "tout-tous", "conj-verbe-tenir-venir"],
    },
    {
      text: "Il faut que tu partes avant la fermeture des portes. Bien qu'il soit encore tôt, la file s'allonge déjà devant le guichet. Si tu attends une heure de plus, tu n'entreras jamais.",
      theme: "Vie quotidienne", difficulty: 2, ruleSlugs: ["subj-falloir", "subj-bienque", "si-conditionnel"],
    },
    {
      text: "Le thermomètre indiquait vingt-deux degrés à l'ombre en fin de matinée. À midi, il avait grimpé de six degrés, et la place s'était vidée. Seuls quelques touristes traînaient encore sous les arcades.",
      theme: "Nature", difficulty: 2, ruleSlugs: ["typo-temperature", "hyphen-nombres", "quelque-environ"],
    },

    /* ─────────────── niveau 3 ─────────────── */
    {
      text: "Elles se sont rendu compte de l'erreur bien trop tard. Les pièces qu'elles avaient jointes au dossier ne correspondaient pas à la demande, et personne au guichet ne les avait prévenues. Il aura fallu trois semaines pour que la commission accepte de réexaminer le dossier.",
      theme: "Bureau", difficulty: 3, ruleSlugs: ["rendu-compte", "pp-avoir", "ci-joint", "conj-verbe-falloir"],
    },
    {
      text: "Les enfants que j'ai entendus chanter avaient tous dix ans. La chanson que j'ai entendu chanter, en revanche, remonte au siècle dernier. Personne n'avait songé à en expliquer les paroles, que la moitié d'entre eux ne comprenaient pas.",
      theme: "Vie scolaire", difficulty: 3, ruleSlugs: ["pp-infinitif", "discute-moitie-accord", "discute-par-contre"],
    },
    {
      text: "Veuillez trouver ci-joint les trois attestations que vous réclamiez. Nous accusons réception de votre courrier du douze mars et vous prions de nous excuser pour ce délai. Restant à votre disposition, je vous prie d'agréer, Madame, mes salutations distinguées.",
      theme: "Écrits professionnels", difficulty: 3, ruleSlugs: ["ci-joint", "pro-veuillez-trouver", "pro-accuser-reception", "pro-restant-disposition"],
    },
    {
      text: "Elle s'est lavé les mains avant de passer à table, comme chaque soir. Ses frères, eux, s'étaient déjà assis sans y penser. Leur mère les a renvoyés tous les deux vers l'évier sans hausser la voix.",
      theme: "Cuisine", difficulty: 3, ruleSlugs: ["conj-participe-passe-pronominaux-cod", "asseoir", "accord-tous-les-deux"],
    },
    {
      text: "Des erreurs, j'en ai commis plus que je ne veux l'avouer. Les heures que ce travail m'a coûté ne se comptent plus. Excepté deux ou trois nuits blanches, je ne regrette pourtant rien de ces années-là.",
      theme: "Récit", difficulty: 3, ruleSlugs: ["pp-en", "pp-couté", "excepté-vu"],
    },
    {
      text: "Moins de deux mois séparent les deux événements. Plus d'un observateur s'est étonné d'une coïncidence aussi parfaite, sans qu'aucune enquête vienne l'expliquer. Les trois quarts du dossier restent d'ailleurs inaccessibles au public.",
      theme: "Récit", difficulty: 3, ruleSlugs: ["accord-moins-de-deux", "plus-dun", "accord-fraction", "avenement-evenement"],
    },
    {
      text: "Il aurait dû prévenir avant de partir aussi précipitamment. Si nous avions su, nous serions venus le chercher à la gare, quelle que soit l'heure. De guerre lasse, sa famille a fini par appeler la police.",
      theme: "Récit", difficulty: 3, ruleSlugs: ["conj-conditionnel-passe-2", "conj-plus-que-parfait", "quel-que", "expr-de-guerre-lasse"],
    },
    {
      text: "Une foule de curieux s'étaient massés devant la vitrine brisée. La plupart filmaient la scène, quelques-uns tentaient d'entrer. Les policiers, arrivés en nombre, ont mis près d'une heure à dégager le trottoir.",
      theme: "Récit", difficulty: 3, ruleSlugs: ["accord-collectif-groupe", "accord-quelques-uns", "adj-distance"],
    },
    {
      text: "Le personnel navigant est convoqué à sept heures précises. Un briefing de vingt minutes précédera l'embarquement, comme convenu la semaine dernière. Toute absence devra être signalée par écrit, et non par simple message.",
      theme: "Travail", difficulty: 3, ruleSlugs: ["fatigant", "heures-format", "anglicisme-briefer"],
    },
    {
      text: "Les archéologues ont mis au jour une villa romaine intacte sous la parcelle. Le chantier, interrompu depuis, ne reprendra pas avant l'automne. Nonobstant les réserves du propriétaire, la préfecture a classé le site en urgence.",
      theme: "Récit", difficulty: 3, ruleSlugs: ["mettre-au-jour", "expr-nonobstant", "adj-distance"],
    },
    {
      text: "D'ores et déjà, nous pouvons annoncer une baisse sensible des tarifs. Les modalités seront précisées au fur et à mesure des arbitrages. En l'espèce, aucune décision définitive n'a encore été prise par le conseil.",
      theme: "Écrits professionnels", difficulty: 3, ruleSlugs: ["dores-deja", "au-fur", "expr-en-lespece"],
    },
    {
      text: "En son for intérieur, il savait la vérité depuis longtemps. Il n'en avait cure et laissait dire, à l'instar de son père autrefois. Le calendrier restait la pierre d'achoppement de toute discussion sérieuse.",
      theme: "Récit", difficulty: 3, ruleSlugs: ["for-interieur", "expr-nen-avoir-cure", "expr-a-linstar", "expr-pierre-achoppement"],
    },
    {
      text: "Le mur décrépi abritait un vieillard décrépit et silencieux. Chaque matin, il sortait un tabouret et regardait passer les voitures. Les gens du quartier, qui le saluaient sans jamais s'arrêter, ignoraient jusqu'à son nom.",
      theme: "Récit", difficulty: 3, ruleSlugs: ["decrepit-decrepi", "accord-gens", "virgule-relative-explicative"],
    },
    {
      text: "Le précepteur enseignait pendant que le percepteur réclamait son dû. L'un parlait latin, l'autre comptait, et tous deux mangeaient à la même table. Cette cohabitation, plutôt cocasse, a duré près de vingt ans.",
      theme: "Récit", difficulty: 3, ruleSlugs: ["percepteur-precepteur", "du-du-accent", "accord-tous-les-deux"],
    },
    {
      text: "Stupéfait, il resta muet : la nouvelle l'avait stupéfié au point de lui couper la parole. Il aurait fallu qu'il fût prévenu la veille, comme tout le monde. Sa réaction, au demeurant compréhensible, a surpris jusqu'à ses proches.",
      theme: "Récit", difficulty: 3, ruleSlugs: ["stupefait-stupefie", "conj-imparfait-subjonctif", "expr-au-demeurant"],
    },
    {
      text: "Les Misérables restent son roman préféré depuis l'adolescence. Il en relit deux ou trois chapitres chaque hiver, toujours les mêmes. Quelques-unes des pages qu'il a jugées essentielles sont soulignées au crayon.",
      theme: "Vie scolaire", difficulty: 3, ruleSlugs: ["accord-titre-oeuvre", "accord-quelques-uns", "accord-participe-que-attribut"],
    },
    {
      text: "Le peuple opprimé vivait dans un silence oppressant. Nul n'osait tenir tête aux autorités, et ceux qui le faisaient disparaissaient sans bruit. De guerre lasse, beaucoup ont émigré vers les pays voisins.",
      theme: "Récit", difficulty: 3, ruleSlugs: ["opprimer-oppresser", "expr-tenir-tete", "emigrer"],
    },
    {
      text: "Ni la pluie ni le vent n'ont découragé les marcheurs. De même que l'an dernier, le parcours passait par les gorges du nord. Une dizaine de participants ont pourtant abandonné avant le dernier ravitaillement.",
      theme: "Nature", difficulty: 3, ruleSlugs: ["accord-verbe-ni-ni", "accord-de-meme-que", "accord-dizaine"],
    },
    {
      text: "Feu la reine avait tranché cette question un siècle plus tôt. La feue duchesse, elle, s'était bien gardée de donner son avis. Leurs aïeux reposent aujourd'hui dans la même chapelle, sous des dalles que plus personne ne déchiffre.",
      theme: "Récit", difficulty: 3, ruleSlugs: ["accord-feu-defunt", "oeil-yeux", "essentiellement-pronominaux"],
    },
    {
      text: "Il conclut son exposé sur un accord conclu la veille au soir. Les chiffres qu'il avait annoncés étaient exacts, mais personne ne les avait vérifiés. La commission, de guerre lasse, a voté sans discuter davantage.",
      theme: "Travail", difficulty: 3, ruleSlugs: ["conj-verbe-conclure", "pp-avoir", "davantage"],
    },
    {
      text: "Dès qu'il eut refermé la porte, la pluie se mit à tomber. Ils vinrent tous se réfugier sous l'auvent, trempés jusqu'aux os. Le vent, la pluie, le froid : tout semblait s'être ligué contre eux ce jour-là.",
      theme: "Récit", difficulty: 3, ruleSlugs: ["conj-passe-anterieur", "conj-verbe-tenir-venir", "accord-tout-resume"],
    },
    {
      text: "Une espèce de brouillard épais noyait toute la vallée depuis l'aube. La moitié des habitants n'avaient pas pris la route, et ceux qui l'avaient fait roulaient au pas. Vers midi, tout s'est dissipé aussi vite que c'était venu.",
      theme: "Nature", difficulty: 3, ruleSlugs: ["accord-espece-sorte-de", "discute-moitie-accord", "cest-sest"],
    },
    {
      text: "Elle s'est fait couper les cheveux très court la semaine dernière. Ses collègues, qui l'avaient trouvée changée, n'ont rien osé lui dire. Elle s'en est aperçue, et cela l'a beaucoup amusée.",
      theme: "Vie quotidienne", difficulty: 3, ruleSlugs: ["accord-se-faire-participe", "essentiellement-pronominaux", "sans-sen"],
    },
    {
      text: "Madame la directrice a présenté les résultats du trimestre devant tout le personnel. Monsieur le maire, de même que ses adjoints, assistait à la séance. Aucune des questions posées n'a reçu de réponse vraiment satisfaisante.",
      theme: "Travail", difficulty: 3, ruleSlugs: ["accord-madame-le-titre", "accord-de-meme-que", "aucun"],
    },
    {
      text: "Le champignon vénéneux et la vipère venimeuse ont ceci en commun qu'on les évite. L'un s'ingère, l'autre mord : la confusion entre les deux mots vient de là. Mieux vaut connaître la différence avant la promenade.",
      theme: "Nature", difficulty: 3, ruleSlugs: ["veneneux", "deux-points-explication", "conj-verbe-valoir"],
    },
  ],
};
