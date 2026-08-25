/**
 * Étape C — densification de la Conjugaison (37 règles, 84 phrases).
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY_CONJUGAISON: ContentBatch = {
  id: "densify-conjugaison",
  rules: [],
  additions: [
    { ruleSlug: "é-er", sentences: [
      { marked: "Il faut [marché] plus vite si nous voulons arriver.", fix: "marcher" },
    ]},
    { ruleSlug: "ez-er", sentences: [
      { marked: "Vous [parler] beaucoup trop fort pour cette petite salle.", fix: "parlez" },
      { marked: "Merci de bien vouloir [signez] le document en bas.", fix: "signer" },
    ]},
    { ruleSlug: "pp-i", sentences: [
      { marked: "Le repas est enfin [finit], nous pouvons débarrasser.", fix: "fini" },
      { marked: "Il a [choisit] la solution la plus économique.", fix: "choisi" },
    ]},
    { ruleSlug: "futur-cond", sentences: [
      { marked: "Demain, je [passerais] te chercher vers huit heures.", fix: "passerai" },
      { marked: "Si j'avais le temps, je [viendrai] volontiers t'aider.", fix: "viendrais" },
    ]},
    { ruleSlug: "impératif", sentences: [
      { marked: "[Regardes] bien avant de traverser cette avenue.", fix: "Regarde" },
      { marked: "Pour une fois, [manges] ta soupe sans protester.", fix: "mange" },
    ]},
    { ruleSlug: "verbes-ger", sentences: [
      { marked: "Nous [rangons] la cuisine avant l'arrivée des invités.", fix: "rangeons" },
      { marked: "Avant la naissance des enfants, il [voyagait] beaucoup.", fix: "voyageait" },
    ]},
    { ruleSlug: "verbes-cer", sentences: [
      { marked: "Nous [avancons] doucement dans les travaux du grenier.", fix: "avançons" },
      { marked: "Autrefois, il [placait] ses invités selon un ordre précis.", fix: "plaçait" },
    ]},
    { ruleSlug: "verbes-yer", sentences: [
      { marked: "Elle [netoye] les vitres au premier rayon de soleil.", fix: "nettoie" },
      { marked: "Après chaque repas, il [essuye] la table sans exception.", fix: "essuie" },
    ]},
    { ruleSlug: "subj-falloir", sentences: [
      { marked: "Il faut que tu [pars] avant la fermeture des portes.", fix: "partes" },
      { marked: "Il faudra qu'elle [prend] une décision avant lundi.", fix: "prenne" },
    ]},
    { ruleSlug: "subj-bienque", sentences: [
      { marked: "Bien qu'il [pleut], la fête a eu lieu dehors.", fix: "pleuve" },
      { marked: "Quoiqu'elle [sait] la vérité, elle n'a rien dit.", fix: "sache" },
    ]},
    { ruleSlug: "si-conditionnel", sentences: [
      { marked: "Si tu [viendrais] plus souvent, elle serait moins seule.", fix: "venais" },
      { marked: "Si nous [serions] partis plus tôt, tout irait bien.", fix: "étions" },
    ]},
    { ruleSlug: "imparfait-ions", sentences: [
      { marked: "Nous [étudions] déjà l'espagnol à l'école primaire.", fix: "étudiions" },
      { marked: "Vous [essayez] toujours de nous convaincre à l'époque.", fix: "essayiez" },
    ]},
    { ruleSlug: "vaincre", sentences: [
      { marked: "Rien ne le [convaint] de changer d'avis sur ce point.", fix: "convainc" },
      { marked: "L'équipe [vaint] rarement à l'extérieur cette saison.", fix: "vainc" },
    ]},
    { ruleSlug: "verbes-indre", sentences: [
      { marked: "Il [plaind] toujours ceux qui ne demandent rien.", fix: "plaint" },
      { marked: "Avec deux mois d'avance, elle [atteind] son objectif.", fix: "atteint" },
    ]},
    { ruleSlug: "participe-présent", sentences: [
      { marked: "Ce sont des enfants [obéissants] à toutes les consignes.", fix: "obéissant" },
      { marked: "Des travaux différant selon les régions ont été engagés.", fix: null },
    ]},
    { ruleSlug: "aie-ait", sentences: [
      { marked: "Il faut que tu [ais] terminé avant la nuit.", fix: "aies" },
      { marked: "Bien qu'il [ai] promis, personne ne le croit vraiment.", fix: "ait" },
    ]},
    { ruleSlug: "passé-simple", sentences: [
      { marked: "Ce matin-là, je [marchais] jusqu'au village d'un seul trait.", fix: "marchai" },
      { marked: "Chaque été, je [nageai] dans la rivière jusqu'au soir.", fix: "nageais" },
      { marked: "Soudain, je [comprenais] tout ce qui s'était passé.", fix: "compris" },
    ]},
    { ruleSlug: "futur-ir", sentences: [
      { marked: "Il [courrira] le marathon de la ville en avril.", fix: "courra" },
      { marked: "Avant la fin du mois, elle [finiras] son mémoire.", fix: "finira" },
    ]},
    { ruleSlug: "accord-verbe-sujet", sentences: [
      { marked: "Sur la place [dormait] deux chiens errants.", fix: "dormaient" },
      { marked: "Le bruit des marteaux [couvraient] toutes les conversations.", fix: "couvrait" },
    ]},
    { ruleSlug: "acheter-geler", sentences: [
      { marked: "Elle [achette] son pain à la boulangerie du coin.", fix: "achète" },
      { marked: "Dès que la température baisse, l'eau [gelle] dans les tuyaux.", fix: "gèle" },
    ]},
    { ruleSlug: "verbes-eer", sentences: [
      { marked: "Une association a été [crée] au printemps dernier.", fix: "créée" },
      { marked: "Ces places ont été [crées] pour la nouvelle promotion.", fix: "créées" },
      { marked: "La chorégraphie a été [agrée] par le jury.", fix: "agréée" },
    ]},
    { ruleSlug: "faire-dire", sentences: [
      { marked: "Vous [faisez] toujours les choses au dernier moment.", fix: "faites" },
      { marked: "Chaque année, vous [disez] cela sans jamais y croire.", fix: "dites" },
    ]},
    { ruleSlug: "predire", sentences: [
      { marked: "Vous [prédites] toujours le pire avant chaque examen.", fix: "prédisez" },
      { marked: "Vous me [contredites] systématiquement en réunion.", fix: "contredisez" },
      { marked: "Vous [interdites] l'accès sans donner la moindre raison.", fix: "interdisez" },
    ]},
    { ruleSlug: "resoudre", sentences: [
      { marked: "Il [résous] les problèmes les uns après les autres.", fix: "résout" },
      { marked: "Le tribunal l'[absous] de toute responsabilité pénale.", fix: "l'absout" },
      { marked: "Elle [résoud] les conflits mieux que quiconque ici.", fix: "résout" },
    ]},
    { ruleSlug: "battre-rompre", sentences: [
      { marked: "Le vent [batt] les volets depuis le début de la nuit.", fix: "bat" },
      { marked: "Le fil [romp] toujours au même endroit.", fix: "rompt" },
    ]},
    { ruleSlug: "verbes-dre", sentences: [
      { marked: "Au bout de dix minutes, il [pert] patience.", fix: "perd" },
      { marked: "Chaque soir, elle [coust] un bouton en attendant le train.", fix: "coud" },
    ]},
    { ruleSlug: "futurs-irreguliers", sentences: [
      { marked: "Il [voira] bien s'il a eu raison de partir.", fix: "verra" },
      { marked: "Avant la fin de la semaine, elle [savra] la réponse.", fix: "saura" },
    ]},
    { ruleSlug: "acquerir", sentences: [
      { marked: "Il a [aquis] une solide expérience en trois ans.", fix: "acquis" },
      { marked: "Ces terrains ont été [acquéris] par la commune.", fix: "acquis" },
      { marked: "Elle [aquiert] chaque jour un peu plus d'assurance.", fix: "acquiert" },
    ]},
    { ruleSlug: "asseoir", sentences: [
      { marked: "Il [s'assoie] toujours à la même place au fond.", fix: "s'assoit" },
      { marked: "Elle [s'assois] près de la fenêtre pour mieux voir.", fix: "s'assied" },
      { marked: "Le chien [s'asseoit] dès qu'on le lui demande.", fix: "s'assoit" },
    ]},
    { ruleSlug: "subj-pouvoir", sentences: [
      { marked: "Il faut que je [peux] terminer ce travail ce soir.", fix: "puisse" },
      { marked: "Bien qu'il [sait] nager, il reste près du bord.", fix: "sache" },
    ]},
    { ruleSlug: "esperer-que", sentences: [
      { marked: "J'espère qu'il [vienne] avant la fin de la journée.", fix: "viendra" },
      { marked: "Nous espérons que tout [soit] réglé avant lundi.", fix: "sera" },
      { marked: "Elle espère que son fils [réussisse] son concours.", fix: "réussira" },
    ]},
    { ruleSlug: "passé-simple-pluriel", sentences: [
      { marked: "Ils [finissèrent] leur repas sans échanger un mot.", fix: "finirent" },
      { marked: "Les invités [partèrent] avant la fin du spectacle.", fix: "partirent" },
      { marked: "Elles [choisissèrent] la route la plus longue.", fix: "choisirent" },
    ]},
    { ruleSlug: "auxiliaire", sentences: [
      { marked: "Elle [a] tombée dans l'escalier sans se blesser.", fix: "est" },
      { marked: "Avant l'orage, il [est] rentré les chaises du jardin.", fix: "a" },
    ]},
    { ruleSlug: "hair", sentences: [
      { marked: "Je [haïs] les réunions qui commencent en retard.", fix: "hais" },
      { marked: "Par-dessus tout, il [haït] qu'on le contredise en public.", fix: "hait" },
      { marked: "Nous [haissons] cette habitude depuis toujours.", fix: "haïssons" },
    ]},
    { ruleSlug: "fatigant", sentences: [
      { marked: "Ce trajet quotidien est vraiment [fatiguant].", fix: "fatigant" },
      { marked: "Le personnel [naviguant] est convoqué à sept heures précises.", fix: "navigant" },
      { marked: "C'est un homme [intriguant] et peu recommandable.", fix: "intrigant" },
    ]},
    { ruleSlug: "ouvrir-passé", sentences: [
      { marked: "Il [ouvra] la porte sans faire le moindre bruit.", fix: "ouvrit" },
      { marked: "Elle lui [offra] un livre pour son anniversaire.", fix: "offrit" },
      { marked: "La neige [couvra] tout le village en une nuit.", fix: "couvrit" },
    ]},
    { ruleSlug: "pronominaux-etre", sentences: [
      { marked: "Ils [ont] souvenus de cette soirée pendant des années.", fix: "se sont" },
      { marked: "Elle [a] trompée de train à la correspondance.", fix: "s'est" },
    ]},
  ],
};
