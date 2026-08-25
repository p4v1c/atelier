/**
 * Étape C, seconde passe — Accords et Conjugaison : de 5 à 7 phrases.
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY2_ACCORDS_CONJ: ContentBatch = {
  id: "densify2-accords-conj",
  rules: [],
  additions: [
    /* ── accords ── */
    { ruleSlug: "pp-avoir", sentences: [
      { marked: "Les lettres que j'ai [reçu] ce matin sont urgentes.", fix: "reçues" },
      { marked: "Elle a [rangée] tous les dossiers avant de partir.", fix: "rangé" },
    ]},
    { ruleSlug: "pp-être", sentences: [
      { marked: "Mes cousines sont [venu] passer le week-end ici.", fix: "venues" },
      { marked: "Les colis sont [arrivé] avec deux jours de retard.", fix: "arrivés" },
    ]},
    { ruleSlug: "adj-distance", sentences: [
      { marked: "Ces routes, tracées au siècle dernier, restent [étroit].", fix: "étroites" },
      { marked: "La lettre, écrite à la hâte, semblait [confus].", fix: "confuse" },
    ]},
    { ruleSlug: "pronominaux", sentences: [
      { marked: "Elles se sont [succédées] à la tête du service.", fix: "succédé" },
      { marked: "Ils se sont [écrits] pendant plus de vingt ans.", fix: "écrit" },
    ]},
    { ruleSlug: "rendu-compte", sentences: [
      { marked: "Elle s'est [rendue] compte de son oubli en arrivant.", fix: "rendu" },
      { marked: "Ils se sont [rendus] compte trop tard de l'erreur.", fix: "rendu" },
    ]},
    { ruleSlug: "fait-infinitif", sentences: [
      { marked: "Elles se sont [faites] livrer un repas complet.", fix: "fait" },
      { marked: "La maison qu'ils ont [faite] construire est terminée.", fix: "fait" },
    ]},
    { ruleSlug: "pp-infinitif", sentences: [
      { marked: "La pièce que j'ai [vue] jouer m'a beaucoup plu.", fix: "vu" },
      { marked: "Les artistes que nous avons [vu] jouer sont revenus.", fix: "vus" },
    ]},
    { ruleSlug: "sujet-éloigné", sentences: [
      { marked: "Le paquet de lettres [attendent] sur le bureau.", fix: "attend" },
      { marked: "L'ensemble des dossiers [seront] archivé cet été.", fix: "sera" },
    ]},
    { ruleSlug: "cest-moi-qui", sentences: [
      { marked: "C'est toi qui [a] ouvert la fenêtre ce matin.", fix: "as" },
      { marked: "C'est moi qui [est] passé prendre les clés.", fix: "suis" },
    ]},
    { ruleSlug: "la-plupart", sentences: [
      { marked: "La plupart d'entre eux [a] déjà répondu au message.", fix: "ont" },
      { marked: "Peu de gens [sait] vraiment ce qui s'est passé.", fix: "savent" },
    ]},
    { ruleSlug: "plus-dun", sentences: [
      { marked: "Plus d'un lecteur [ont] signalé cette coquille.", fix: "a" },
      { marked: "Plus d'une fois, il [ont] failli tout abandonner.", fix: "a" },
    ]},
    { ruleSlug: "aucun", sentences: [
      { marked: "[Aucuns] doute ne subsiste après cette démonstration.", fix: "Aucun" },
      { marked: "Il n'a fait [aucunes] remarque pendant la séance.", fix: "aucune" },
    ]},
    { ruleSlug: "vingt-cent", sentences: [
      { marked: "Le stade compte quatre-[vingt] rangées de sièges.", fix: "vingts" },
      { marked: "Le livre atteint deux [cents] quarante pages exactement.", fix: "cent" },
    ]},
    { ruleSlug: "couleurs", sentences: [
      { marked: "Elle a choisi des rideaux [oranges] pour le salon.", fix: "orange" },
      { marked: "Les feuilles [jaune] annoncent déjà l'automne.", fix: "jaunes" },
    ]},
    { ruleSlug: "demi", sentences: [
      { marked: "Il a attendu trois heures et [demi] sous la pluie.", fix: "demie" },
      { marked: "Une [demie-]journée suffira pour tout ranger.", fix: "demi-" },
    ]},
    { ruleSlug: "ci-joint", sentences: [
      { marked: "[Ci-jointe] le formulaire que vous avez demandé.", fix: "Ci-joint" },
      { marked: "Les copies [ci-joint] complètent votre dossier.", fix: "ci-jointes" },
    ]},
    { ruleSlug: "pluriel-al", sentences: [
      { marked: "Les [festivaux] d'été attirent beaucoup de monde.", fix: "festivals" },
      { marked: "Trois [journals] locaux ont relayé l'information.", fix: "journaux" },
    ]},
    { ruleSlug: "pluriel-ou", sentences: [
      { marked: "Les [genous] du sportif le font souffrir.", fix: "genoux" },
      { marked: "Il a acheté trois [cloux] et deux vis en ferronnerie.", fix: "clous" },
    ]},
    { ruleSlug: "pluriel-eu", sentences: [
      { marked: "Les [cheveus] blancs lui vont plutôt bien.", fix: "cheveux" },
      { marked: "Ces [bleux] au bras datent de sa chute.", fix: "bleus" },
    ]},
    { ruleSlug: "noms-composés", sentences: [
      { marked: "Deux [portes-clés] traînaient dans le tiroir.", fix: "porte-clés" },
      { marked: "Les [chasses-neige] passent dès quatre heures.", fix: "chasse-neige" },
    ]},
    { ruleSlug: "accord-on", sentences: [
      { marked: "On [ont] longtemps hésité avant de se décider.", fix: "a" },
      { marked: "Quand on [sont] pressés, on oublie l'essentiel.", fix: "est" },
    ]},
    { ruleSlug: "nu-demi", sentences: [
      { marked: "Il court [nus-]pieds sur le sable chaud.", fix: "nu-" },
      { marked: "Elle est sortie tête [nu] malgré le froid.", fix: "nue" },
    ]},
    { ruleSlug: "pp-impersonnel", sentences: [
      { marked: "Les efforts qu'il a [fallus] ont épuisé tout le monde.", fix: "fallu" },
      { marked: "La neige qu'il a [neigée] a bloqué toutes les routes.", fix: "neigé" },
    ]},
    { ruleSlug: "pp-couté", sentences: [
      { marked: "Les cent euros que ce livre a [coûtés] étaient bien placés.", fix: "coûté" },
      { marked: "Les vingt ans qu'il a [vécus] là-bas l'ont transformé.", fix: "vécu" },
    ]},
    { ruleSlug: "pp-en", sentences: [
      { marked: "Des fautes, elle en a [faites] beaucoup moins qu'avant.", fix: "fait" },
      { marked: "Des lettres, il en a [écrites] des centaines.", fix: "écrit" },
    ]},
    { ruleSlug: "essentiellement-pronominaux", sentences: [
      { marked: "Elles se sont [absenté] toute la matinée sans prévenir.", fix: "absentées" },
      { marked: "Ils se sont [méfié] de lui dès la première rencontre.", fix: "méfiés" },
    ]},
    { ruleSlug: "excepté-vu", sentences: [
      { marked: "[Attendues] les circonstances, la séance est reportée.", fix: "Attendu" },
      { marked: "[Exceptés] les deux dernières lignes, tout est juste.", fix: "Excepté" },
    ]},
    { ruleSlug: "y-compris", sentences: [
      { marked: "Le prix est ferme, taxes y comprises et livraison incluse.", fix: null },
      { marked: "Toutes les pièces, annexes y [compris], sont bien jointes.", fix: "comprises" },
    ]},
    { ruleSlug: "possible", sentences: [
      { marked: "Il a fait le moins de fautes [possibles] cette fois.", fix: "possible" },
      { marked: "Prends le plus de photos [possibles] pendant le voyage.", fix: "possible" },
    ]},
    { ruleSlug: "cest-ce-sont", sentences: [
      { marked: "[C'est] les enfants qui ont décoré toute la salle.", fix: "Ce sont" },
      { marked: "[C'est] les résultats qui décideront de la suite.", fix: "Ce sont" },
    ]},
    { ruleSlug: "un-des-qui", sentences: [
      { marked: "C'est un des rares peintres qui [sait] encore ce métier.", fix: "savent" },
      { marked: "Voilà une des causes qui [explique] le retard du chantier.", fix: "expliquent" },
    ]},
    { ruleSlug: "tout-le-monde", sentences: [
      { marked: "Tout le monde [ont] son avis sur la question.", fix: "a" },
      { marked: "Chacun [savent] ce qu'il a à faire aujourd'hui.", fix: "sait" },
    ]},
    { ruleSlug: "quelque-chose-de", sentences: [
      { marked: "Il a dit quelque chose de [gentille] à sa voisine.", fix: "gentil" },
      { marked: "Rien de [nouvelle] depuis la dernière réunion.", fix: "nouveau" },
    ]},
    { ruleSlug: "oeil-yeux", sentences: [
      { marked: "Ses [œils] bleus attirent tous les regards.", fix: "yeux" },
      { marked: "Nos [aïeuls] ont défriché ces terres au siècle dernier.", fix: "aïeux" },
    ]},
    { ruleSlug: "grand-mere", sentences: [
      { marked: "Les [grand-oncles] se réunissent chaque été.", fix: "grands-oncles" },
      { marked: "Ces [grand-mères] tricotent ensemble le jeudi.", fix: "grands-mères" },
    ]},
    { ruleSlug: "adj-invariables", sentences: [
      { marked: "Ce sont des solutions [extras] pour ce type de problème.", fix: "extra" },
      { marked: "Elles portaient des tenues [sexys] pour la soirée.", fix: "sexy" },
    ]},
    { ruleSlug: "mi-semi", sentences: [
      { marked: "Nous sommes à [mie-]parcours du programme annuel.", fix: "mi-" },
      { marked: "Un accord [semis-]officiel a été trouvé hier.", fix: "semi-" },
    ]},
    { ruleSlug: "deux-genres", sentences: [
      { marked: "Un frère et une sœur également [douées] pour la musique.", fix: "doués" },
      { marked: "Une pomme et un abricot bien [mûres] attendaient là.", fix: "mûrs" },
    ]},
    { ruleSlug: "des-plus", sentences: [
      { marked: "Cette solution est des plus [élégante] à mon avis.", fix: "élégantes" },
      { marked: "Le raisonnement paraît des moins [rigoureuse] à la relecture.", fix: "rigoureux" },
    ]},
    { ruleSlug: "pluriel-ail", sentences: [
      { marked: "Les [corails] de cette zone sont strictement protégés.", fix: "coraux" },
      { marked: "Trois [bails] ont été signés le même jour.", fix: "baux" },
    ]},
    { ruleSlug: "leur-possessif", sentences: [
      { marked: "Les élèves ont rangé [leurs] cartable au fond.", fix: "leur" },
      { marked: "Elles ont donné [leur] réponses à la fin de l'heure.", fix: "leurs" },
    ]},
    { ruleSlug: "nombreux-sujet", sentences: [
      { marked: "Les Pays-Bas [a] remporté le tournoi cette année.", fix: "ont" },
      { marked: "Les Champs-Élysées [attire] des millions de visiteurs.", fix: "attirent" },
    ]},

    /* ── conjugaison ── */
    { ruleSlug: "é-er", sentences: [
      { marked: "Il vient de [rentré] du travail à l'instant.", fix: "rentrer" },
      { marked: "Le colis a été [livrer] devant la porte.", fix: "livré" },
    ]},
    { ruleSlug: "ez-er", sentences: [
      { marked: "Vous [travailler] trop tard tous les soirs.", fix: "travaillez" },
      { marked: "Il faudra [pensez] à fermer la fenêtre du haut.", fix: "penser" },
    ]},
    { ruleSlug: "pp-i", sentences: [
      { marked: "Le travail est [accomplit] depuis hier midi.", fix: "accompli" },
      { marked: "Il a [réfléchit] longtemps avant de répondre.", fix: "réfléchi" },
    ]},
    { ruleSlug: "futur-cond", sentences: [
      { marked: "Je te [rappellerais] dès que j'aurai des nouvelles.", fix: "rappellerai" },
      { marked: "Si je pouvais, je [partirai] dès demain matin.", fix: "partirais" },
    ]},
    { ruleSlug: "impératif", sentences: [
      { marked: "[Écoutes] bien ce qu'il va t'expliquer.", fix: "Écoute" },
      { marked: "[Fermes] la porte et éteins la lumière en sortant.", fix: "Ferme" },
    ]},
    { ruleSlug: "verbes-ger", sentences: [
      { marked: "Nous [mangons] toujours à la même heure.", fix: "mangeons" },
      { marked: "Il [nagait] chaque matin avant d'aller travailler.", fix: "nageait" },
    ]},
    { ruleSlug: "verbes-cer", sentences: [
      { marked: "Nous [lancons] la campagne au mois de mars.", fix: "lançons" },
      { marked: "Elle [pincait] les lèvres sans rien dire.", fix: "pinçait" },
    ]},
    { ruleSlug: "verbes-yer", sentences: [
      { marked: "Il [emploeye] trois personnes à l'année dans son atelier.", fix: "emploie" },
      { marked: "Elle [aboye] dès qu'on approche du portail.", fix: "aboie" },
    ]},
    { ruleSlug: "subj-falloir", sentences: [
      { marked: "Il faut que vous [venez] avant la fermeture.", fix: "veniez" },
      { marked: "Il faudrait qu'ils [font] un effort supplémentaire.", fix: "fassent" },
    ]},
    { ruleSlug: "subj-bienque", sentences: [
      { marked: "Bien qu'il [fait] froid, ils sont sortis marcher.", fix: "fasse" },
      { marked: "Pour qu'elle [comprend], il faudra tout réexpliquer.", fix: "comprenne" },
    ]},
    { ruleSlug: "si-conditionnel", sentences: [
      { marked: "Si tu [aurais] le temps, passe me voir demain.", fix: "as" },
      { marked: "Si nous [pourrions] choisir, nous resterions ici.", fix: "pouvions" },
    ]},
    { ruleSlug: "imparfait-ions", sentences: [
      { marked: "Nous [crions] moins fort à cette époque-là.", fix: "criions" },
      { marked: "Vous [oubliez] toujours vos clés autrefois.", fix: "oubliiez" },
    ]},
    { ruleSlug: "vaincre", sentences: [
      { marked: "Cette année, l'équipe [vaint] rarement à l'extérieur.", fix: "vainc" },
      { marked: "Rien ne le [convaint], pas même les meilleurs arguments.", fix: "convainc" },
    ]},
    { ruleSlug: "verbes-indre", sentences: [
      { marked: "Il [craind] toujours le pire avant chaque examen.", fix: "craint" },
      { marked: "Le peintre [peind] la façade depuis lundi matin.", fix: "peint" },
    ]},
    { ruleSlug: "participe-présent", sentences: [
      { marked: "Voilà des arguments [convaincant] et bien construits.", fix: "convaincants" },
      { marked: "Des enfants [fatiguants] et bruyants couraient partout.", fix: "fatigants" },
    ]},
    { ruleSlug: "aie-ait", sentences: [
      { marked: "Il faut que j'[ai] terminé avant la nuit.", fix: "j'aie" },
      { marked: "Bien qu'ils [aies] promis, personne n'y croit.", fix: "aient" },
    ]},
    { ruleSlug: "passé-simple", sentences: [
      { marked: "Ce jour-là, je [descendais] au village d'un seul trait.", fix: "descendis" },
      { marked: "Chaque hiver, je [skiai] dans les Alpes du Nord.", fix: "skiais" },
    ]},
    { ruleSlug: "futur-ir", sentences: [
      { marked: "Nous [courrirons] le semi-marathon en octobre.", fix: "courrons" },
      { marked: "Elle [choisiras] son sujet la semaine prochaine.", fix: "choisira" },
    ]},
    { ruleSlug: "accord-verbe-sujet", sentences: [
      { marked: "Dans la cour [résonnait] les cris des enfants.", fix: "résonnaient" },
      { marked: "L'odeur des fleurs [envahissaient] toute la pièce.", fix: "envahissait" },
    ]},
    { ruleSlug: "acheter-geler", sentences: [
      { marked: "Elle [pelle] les pommes avant de les cuire.", fix: "pèle" },
      { marked: "Il [achette] son journal au même kiosque.", fix: "achète" },
    ]},
    { ruleSlug: "verbes-eer", sentences: [
      { marked: "Cette association a été [créé] en 1998.", fix: "créée" },
      { marked: "Les places ont été [créés] pour la rentrée.", fix: "créées" },
    ]},
    { ruleSlug: "faire-dire", sentences: [
      { marked: "Vous [faisez] toujours la même erreur.", fix: "faites" },
      { marked: "Vous [étes] attendus depuis une bonne heure.", fix: "êtes" },
    ]},
    { ruleSlug: "predire", sentences: [
      { marked: "Vous [maudites] ce jour depuis des années.", fix: "maudissez" },
      { marked: "Vous [prédites] toujours le pire avant chaque échéance.", fix: "prédisez" },
    ]},
    { ruleSlug: "resoudre", sentences: [
      { marked: "Le juge l'[absoud] de toute responsabilité.", fix: "l'absout" },
      { marked: "Elle [résous] ce genre de problème en un instant.", fix: "résout" },
    ]},
    { ruleSlug: "battre-rompre", sentences: [
      { marked: "Le cœur lui [batt] très vite avant chaque oral.", fix: "bat" },
      { marked: "La corde [romp] toujours au même endroit.", fix: "rompt" },
    ]},
    { ruleSlug: "verbes-dre", sentences: [
      { marked: "Il [rends] visite à sa mère chaque dimanche après-midi.", fix: "rend" },
      { marked: "Elle [pert] souvent ses affaires dans le train.", fix: "perd" },
    ]},
    { ruleSlug: "futurs-irreguliers", sentences: [
      { marked: "Il [faisera] beau demain sur toute la côte.", fix: "fera" },
      { marked: "Elle [venira] nous chercher à la sortie du travail.", fix: "viendra" },
    ]},
    { ruleSlug: "acquerir", sentences: [
      { marked: "Ils ont [acquéri] cette maison il y a dix ans.", fix: "acquis" },
      { marked: "Nous [aquérons] de l'expérience chaque jour.", fix: "acquérons" },
    ]},
    { ruleSlug: "asseoir", sentences: [
      { marked: "Il [s'assoie] toujours au fond de la salle.", fix: "s'assoit" },
      { marked: "Elle [s'asseye] près de la fenêtre chaque matin.", fix: "s'assied" },
    ]},
    { ruleSlug: "subj-pouvoir", sentences: [
      { marked: "Il faut que tu [peux] venir avant la fermeture.", fix: "puisses" },
      { marked: "Bien qu'elle [sait] la vérité, elle se tait.", fix: "sache" },
    ]},
    { ruleSlug: "esperer-que", sentences: [
      { marked: "J'espère qu'il [fasse] beau pour la sortie.", fix: "fera" },
      { marked: "Elle espère que tout [aille] pour le mieux.", fix: "ira" },
    ]},
    { ruleSlug: "passé-simple-pluriel", sentences: [
      { marked: "Ils [réfléchissèrent] longtemps avant de trancher.", fix: "réfléchirent" },
      { marked: "Les invités [sortèrent] avant la fin du repas.", fix: "sortirent" },
    ]},
    { ruleSlug: "auxiliaire", sentences: [
      { marked: "Elle [est] descendu les escaliers en courant.", fix: "a" },
      { marked: "Il [est] monté les cartons au grenier ce matin.", fix: "a" },
    ]},
    { ruleSlug: "hair", sentences: [
      { marked: "Tu [haïs] les réunions du lundi matin.", fix: "hais" },
      { marked: "Vous [haissez] cette habitude depuis toujours.", fix: "haïssez" },
    ]},
    { ruleSlug: "fatigant", sentences: [
      { marked: "Ce travail est vraiment [fatiguant] à la longue.", fix: "fatigant" },
      { marked: "Un personnage [intriguant] traverse tout le roman.", fix: "intrigant" },
    ]},
    { ruleSlug: "ouvrir-passé", sentences: [
      { marked: "Elle [couvra] la table d'une nappe blanche.", fix: "couvrit" },
      { marked: "Il [souffra] en silence pendant des années.", fix: "souffrit" },
    ]},
    { ruleSlug: "pronominaux-etre", sentences: [
      { marked: "Ils [ont] rencontrés à la sortie du théâtre.", fix: "se sont" },
      { marked: "Elle [a] plainte auprès de la direction.", fix: "s'est" },
    ]},
  ],
};
