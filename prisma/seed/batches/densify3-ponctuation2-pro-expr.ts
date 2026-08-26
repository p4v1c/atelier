/**
 * Étape C, troisième passe — lots 013, 014 et 015 portés de 5 à 7 phrases.
 *
 * Dernier fichier de la passe : les 375 règles ajoutées après le lot d'origine
 * disposent désormais toutes de sept phrases, comme les 243 premières.
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY3_PONCT2_PRO_EXPR: ContentBatch = {
  id: "densify3-ponct2-pro-expr",
  rules: [],
  additions: [
    /* ── lot 013 : ponctuation et typographie ── */
    { ruleSlug: "virgule-cest-a-dire", sentences: [
      { marked: "Le loyer est mensuel, payable le [1er] c'est-à-dire d'avance.", fix: "1er," },
      { marked: "Il travaille en [nocturne] c'est-à-dire de nuit uniquement.", fix: "nocturne," },
    ]},
    { ruleSlug: "virgule-par-exemple", sentences: [
      { marked: "Certaines [essences] par exemple, supportent mal la sécheresse.", fix: "essences," },
      { marked: "Un [oubli] par exemple, peut coûter très cher au dossier.", fix: "oubli," },
    ]},
    { ruleSlug: "virgule-notamment", sentences: [
      { marked: "Plusieurs points sont [contestés] notamment la clause finale.", fix: "contestés," },
      { marked: "Elle a visité toute la [région] notamment les gorges du nord.", fix: "région," },
    ]},
    { ruleSlug: "deux-points-explication", sentences: [
      { marked: "Nous avons dû [reporter] la salle n'était pas libre.", fix: "reporter :" },
      { marked: "Le train est [bondé] c'est un jour de départ en vacances.", fix: "bondé :" },
    ]},
    { ruleSlug: "guillemets-imbriques", sentences: [
      { marked: "Il rapporte : « elle a crié [«terminé»] et elle est partie ».", fix: "“terminé”" },
      { marked: "« Le mot [«provisoire»] revenait sans cesse », a-t-elle noté.", fix: "“provisoire”" },
    ]},
    { ruleSlug: "virgule-avant-etc", sentences: [
      { marked: "Il collectionne cartes, timbres, [monnaies] etc.", fix: "monnaies," },
      { marked: "Emporte une lampe, un duvet, des [allumettes] etc.", fix: "allumettes," },
    ]},
    { ruleSlug: "espace-apres-virgule", sentences: [
      { marked: "Elle a [hésité] , puis a fini par accepter l'offre.", fix: "hésité," },
      { marked: "Le vent est [tombé] , la pluie a cessé peu après.", fix: "tombé," },
    ]},
    { ruleSlug: "apostrophe-typographique", sentences: [
      { marked: "Le coût de [l'énergie] pèse sur toutes les factures.", fix: "l’énergie" },
      { marked: "Personne ne connaît [l'auteur] de cette lettre anonyme.", fix: "l’auteur" },
    ]},
    { ruleSlug: "trait-union-inversion", sentences: [
      { marked: "« Nous verrons », [conclut-t-il] en rangeant ses papiers.", fix: "conclut-il" },
      { marked: "[Pourra-elle] nous rappeler avant la fin de la matinée ?", fix: "Pourra-t-elle" },
    ]},
    { ruleSlug: "point-interrogation-indirecte", sentences: [
      { marked: "Il ignore encore quand le chantier commencera [?]", fix: "." },
      { marked: "Nous cherchons à savoir qui a signé ce document [?]", fix: "." },
    ]},
    { ruleSlug: "virgule-adverbe-phrase", sentences: [
      { marked: "[Manifestement] personne n'avait relu le compte rendu.", fix: "Manifestement," },
      { marked: "Fort [heureusement] la panne n'a duré qu'une heure.", fix: "heureusement," },
    ]},
    { ruleSlug: "virgule-adjectifs-coordonnes", sentences: [
      { marked: "C'était un texte [long] confus et mal documenté.", fix: "long," },
      { marked: "Il portait un manteau [sombre] usé et trop grand.", fix: "sombre," },
    ]},
    { ruleSlug: "typo-souverains-romains", sentences: [
      { marked: "Par exception, on écrit toujours Charles [5] et non Charles V.", fix: "Quint" },
      { marked: "Le règne de Louis [13] précède celui de son fils.", fix: "XIII" },
    ]},
    { ruleSlug: "typo-italique-mots-etrangers", sentences: [
      { marked: "Il a été nommé [ad-hoc] pour cette mission précise.", fix: "ad hoc" },
      { marked: "Le dossier a été bouclé [in-fine] par le service juridique.", fix: "in fine" },
    ]},
    { ruleSlug: "typo-majuscule-apres-point", sentences: [
      { marked: "Le vote est clos. [les] résultats seront affichés demain.", fix: "Les" },
      { marked: "Tout est réglé. [nous] pouvons passer au point suivant.", fix: "Nous" },
    ]},
    { ruleSlug: "typo-temperature", sentences: [
      { marked: "Le four doit être préchauffé à [180°C] pendant dix minutes.", fix: "180 °C" },
      { marked: "Il faisait [30°] à l'ombre au milieu de l'après-midi.", fix: "30 °C" },
    ]},
    { ruleSlug: "typo-majuscule-journaux", sentences: [
      { marked: "Cet éditorial du [figaro] a fait beaucoup réagir.", fix: "Figaro" },
      { marked: "Elle lit La [gazette] du village tous les vendredis.", fix: "Gazette" },
    ]},
    { ruleSlug: "typo-abrev-pages", sentences: [
      { marked: "Le passage cité figure [pp] 78 à 81 de l'ouvrage.", fix: "p." },
      { marked: "Voir le [tom] 2 pour les annexes cartographiques.", fix: "t." },
    ]},
    { ruleSlug: "typo-majuscule-saints", sentences: [
      { marked: "La chapelle [saint-Roch] domine tout le hameau.", fix: "Saint-Roch" },
      { marked: "Il a lu une biographie de [Saint] Augustin cet été.", fix: "saint" },
    ]},
    { ruleSlug: "typo-majuscule-mots-composes", sentences: [
      { marked: "Nous passons par Saint-Jean-de-[luz] avant la frontière.", fix: "Luz" },
      { marked: "Le collège de Fontenay-[Sous]-Bois vient d'être rénové.", fix: "sous" },
    ]},
    { ruleSlug: "typo-espace-tiret-intervalle", sentences: [
      { marked: "Le chantier court sur la période [2024–2026].", fix: "2024-2026" },
      { marked: "Consultez les articles [12—18] du règlement.", fix: "12-18" },
    ]},
    { ruleSlug: "typo-abrev-etats", sentences: [
      { marked: "Un accord commercial lie la France et les [USA.]", fix: "É.-U." },
      { marked: "Le [UK] applique désormais ses propres normes douanières.", fix: "R.-U." },
    ]},
    { ruleSlug: "typo-marques-minuscule", sentences: [
      { marked: "Il range ses outils dans un vieux [Tupperware] fêlé.", fix: "tupperware" },
      { marked: "Elle a nettoyé la table avec du [Sopalin] humide.", fix: "sopalin" },
    ]},
    { ruleSlug: "typo-numero-telephone", sentences: [
      { marked: "Composez le [02.98.45.67.12] pour joindre la mairie.", fix: "02 98 45 67 12" },
      { marked: "Son numéro est le [0798765432], si tu veux le prévenir.", fix: "07 98 76 54 32" },
    ]},

    /* ── lot 014 : registre et écrits professionnels ── */
    { ruleSlug: "anglicisme-staff", sentences: [
      { marked: "Le [staff] de nuit compte quatre personnes seulement.", fix: "personnel" },
      { marked: "L'[staff] technique a validé tous les réglages avant le concert.", fix: "équipe" },
    ]},
    { ruleSlug: "anglicisme-job", sentences: [
      { marked: "Ce [job] d'été lui permet de payer son loyer.", fix: "travail" },
      { marked: "Il a quitté son [job] après quinze ans de maison.", fix: "emploi" },
    ]},
    { ruleSlug: "anglicisme-business", sentences: [
      { marked: "Le [business] du quartier souffre depuis les travaux.", fix: "commerce" },
      { marked: "Ils veulent développer ce [business] à l'international.", fix: "activité" },
    ]},
    { ruleSlug: "anglicisme-briefer", sentences: [
      { marked: "Merci de [briefer] les stagiaires avant leur arrivée.", fix: "informer" },
      { marked: "Un [briefing] rapide suffira avant l'ouverture.", fix: "point" },
    ]},
    { ruleSlug: "anglicisme-manager", sentences: [
      { marked: "Il [manage] deux ateliers depuis le mois de janvier.", fix: "dirige" },
      { marked: "Le [manager] du rayon change tous les six mois.", fix: "responsable" },
    ]},
    { ruleSlug: "anglicisme-implementer", sentences: [
      { marked: "Le nouveau règlement sera [implémenté] en septembre.", fix: "appliqué" },
      { marked: "Nous devons [implémenter] cette procédure avant l'audit.", fix: "mettre en place" },
    ]},
    { ruleSlug: "anglicisme-updater", sentences: [
      { marked: "Il faudrait [updater] la liste des adhérents.", fix: "actualiser" },
      { marked: "Le site n'a pas été [updaté] depuis deux ans.", fix: "mis à jour" },
    ]},
    { ruleSlug: "anglicisme-canceller", sentences: [
      { marked: "Le concert a été [cancellé] faute de spectateurs.", fix: "annulé" },
      { marked: "Peux-tu [canceller] la commande passée ce matin ?", fix: "annuler" },
    ]},
    { ruleSlug: "anglicisme-partager-information", sentences: [
      { marked: "Elle a [partagé] la note à tous les chefs de service.", fix: "transmis" },
      { marked: "Ces conclusions seront [partagées] au conseil demain.", fix: "communiquées" },
    ]},
    { ruleSlug: "registre-omission-ne", sentences: [
      { marked: "Il [comprend] rien à ce qu'on lui explique.", fix: "ne comprend" },
      { marked: "Elles [ont] jamais reçu la moindre convocation.", fix: "n'ont" },
    ]},
    { ruleSlug: "impropriete-cloturer", sentences: [
      { marked: "Le débat a été [clôturé] avant l'heure prévue.", fix: "clos" },
      { marked: "Nous allons [clôturer] cette discussion sans conclusion.", fix: "clore" },
    ]},
    { ruleSlug: "impropriete-instaurer", sentences: [
      { marked: "La loi a [instauré] un tribunal spécialisé en 2019.", fix: "institué" },
      { marked: "Ce dialogue s'est [institué] peu à peu entre les équipes.", fix: "instauré" },
    ]},
    { ruleSlug: "registre-ca-cela", sentences: [
      { marked: "Comment expliques-tu [ça] à un client mécontent ?", fix: "cela" },
      { marked: "Tout [ça] figurera au compte rendu de la séance.", fix: "cela" },
    ]},
    { ruleSlug: "pro-en-esperant", sentences: [
      { marked: "En espérant que vous [receviez] ce courrier à temps.", fix: "recevrez" },
      { marked: "En espérant que cela vous [aille], je reste disponible.", fix: "ira" },
    ]},
    { ruleSlug: "pro-remercier-avance", sentences: [
      { marked: "Merci [en] avance de votre retour sur ce dossier.", fix: "par" },
      { marked: "Je vous remercie [en] avance de votre diligence.", fix: "d'" },
    ]},
    { ruleSlug: "pro-nous-vous-informons", sentences: [
      { marked: "Nous vous informons [sur] le changement d'horaires.", fix: "du" },
      { marked: "Ils ont été informés [sur] la fermeture par affichage.", fix: "de" },
    ]},
    { ruleSlug: "pro-restant-disposition", sentences: [
      { marked: "À votre écoute et [restants] disponible, je vous salue.", fix: "restant" },
      { marked: "Dans l'attente et demeurant à votre service, nous vous saluons.", fix: null },
    ]},
    { ruleSlug: "pro-signature-prenom-nom", sentences: [
      { marked: "Cordialement, Sophie [GIRARD], cheffe de service.", fix: "Girard" },
      { marked: "Bien à vous, Thomas [LEFÈVRE], chargé de clientèle.", fix: "Lefèvre" },
    ]},
    { ruleSlug: "pro-objet-reference", sentences: [
      { marked: "Objet : [informer] sur la fermeture estivale du service.", fix: "information" },
      { marked: "Réf. : [résiliation] du contrat d'entretien annuel.", fix: "2024-207" },
    ]},
    { ruleSlug: "pro-lettre-recommandee", sentences: [
      { marked: "La demande part en [recommandée] avec avis de réception.", fix: "recommandé" },
      { marked: "Un courrier en [LRRA] vous sera adressé sous huitaine.", fix: "LRAR" },
    ]},
    { ruleSlug: "pro-tutoiement", sentences: [
      { marked: "Bonjour Claire, peux-tu confirmer que tu [viendrez] mardi ?", fix: "viendras" },
      { marked: "Madame, je [te] remercie de votre réponse rapide.", fix: "vous" },
    ]},
    { ruleSlug: "pro-abreviations-interdites", sentences: [
      { marked: "Le devis s'élève à [12K€] pour l'ensemble du lot.", fix: "12 000 euros" },
      { marked: "Merci de me confirmer ce [RDV] avant vendredi soir.", fix: "rendez-vous" },
    ]},
    { ruleSlug: "pro-formule-refus", sentences: [
      { marked: "Nous [refusons] votre offre, jugée trop onéreuse.", fix: "ne pouvons retenir" },
      { marked: "Le comité [refuse] votre demande de subvention.", fix: "ne peut accéder à" },
    ]},
    { ruleSlug: "pro-demande-devis", sentences: [
      { marked: "Pourriez-vous nous [faire] un devis détaillé rapidement ?", fix: "établir" },
      { marked: "Le devis sera [fait] dès la visite du technicien.", fix: "établi" },
    ]},
    { ruleSlug: "pro-relance-facture", sentences: [
      { marked: "Votre facture [non-réglée] date du mois de février.", fix: "impayée" },
      { marked: "Nous vous [demandons] de régulariser sous quinzaine.", fix: "invitons à" },
    ]},
    { ruleSlug: "pro-copie-destinataires", sentences: [
      { marked: "J'ai mis la direction en [cc] de ce message.", fix: "copie" },
      { marked: "Le service juridique figure en [cci] pour information.", fix: "copie invisible" },
    ]},

    /* ── lot 015 : expressions figées ── */
    { ruleSlug: "expr-battre-son-plein", sentences: [
      { marked: "Le marché bat son [pleins] tous les samedis matin.", fix: "plein" },
      { marked: "Les préparatifs battaient leur [pleins] la veille du départ.", fix: "plein" },
    ]},
    { ruleSlug: "expr-maille-a-partir", sentences: [
      { marked: "Nous avons eu [mailles] à partir avec le service des impôts.", fix: "maille" },
      { marked: "Il a eu maille à [repartir] avec ses anciens associés.", fix: "partir" },
    ]},
    { ruleSlug: "expr-sans-coup-ferir", sentences: [
      { marked: "La motion est passée sans coup [ferrir] en fin de séance.", fix: "férir" },
      { marked: "Ils ont pris la position sans coup [faillir].", fix: "férir" },
    ]},
    { ruleSlug: "expr-de-guerre-lasse", sentences: [
      { marked: "De guerre [las], elle a fini par signer le document.", fix: "lasse" },
      { marked: "Ils ont abandonné de guerre [lassés] après trois procès.", fix: "lasse" },
    ]},
    { ruleSlug: "expr-faire-long-feu", sentences: [
      { marked: "Cette réforme a fait [longs] feu dès la première année.", fix: "long" },
      { marked: "Son enthousiasme n'aura pas fait [longue] feu.", fix: "long" },
    ]},
    { ruleSlug: "expr-nen-avoir-cure", sentences: [
      { marked: "Il n'en a [cures] et continue exactement comme avant.", fix: "cure" },
      { marked: "Elle n'en avait [cur] et poursuivait sa lecture.", fix: "cure" },
    ]},
    { ruleSlug: "expr-a-linstar", sentences: [
      { marked: "À l'[instant] de ses collègues, il a refusé de signer.", fix: "l'instar" },
      { marked: "À l'[instars] des grandes villes, la commune se réorganise.", fix: "l'instar" },
    ]},
    { ruleSlug: "expr-pierre-achoppement", sentences: [
      { marked: "La durée du bail est la pierre d'[achopement] du contrat.", fix: "d'achoppement" },
      { marked: "Ce détail devint la pierre d'[achoppemant] des débats.", fix: "d'achoppement" },
    ]},
    { ruleSlug: "expr-couper-court", sentences: [
      { marked: "Elle a coupé [courts] aux rumeurs dès le premier jour.", fix: "court" },
      { marked: "Il faut couper [courte] à cette polémique inutile.", fix: "court" },
    ]},
    { ruleSlug: "expr-donner-le-change", sentences: [
      { marked: "Il a donné le [changement] pendant tout l'entretien.", fix: "change" },
      { marked: "Elle donne les [changes] avec un aplomb remarquable.", fix: "change" },
    ]},
    { ruleSlug: "expr-en-butte-a", sentences: [
      { marked: "L'association est en [but] à des difficultés de trésorerie.", fix: "butte" },
      { marked: "Ils furent en [buttes] à l'hostilité générale du quartier.", fix: "butte" },
    ]},
    { ruleSlug: "expr-etre-de-mise", sentences: [
      { marked: "L'optimisme n'est guère de [mises] en cette période.", fix: "mise" },
      { marked: "La prudence n'est pas de [mie] en pareille circonstance.", fix: "mise" },
    ]},
    { ruleSlug: "expr-faire-fi", sentences: [
      { marked: "Ils ont fait [fis] de toutes les mises en garde.", fix: "fi" },
      { marked: "Elle fait [fit] du qu'en-dira-t-on depuis longtemps.", fix: "fi" },
    ]},
    { ruleSlug: "expr-mettre-a-mal", sentences: [
      { marked: "La sécheresse a mis à [maux] toute la récolte.", fix: "mal" },
      { marked: "Ces retards mettent à [mals] la confiance des clients.", fix: "mal" },
    ]},
    { ruleSlug: "expr-prendre-a-partie", sentences: [
      { marked: "Le conférencier fut pris à [parti] par la salle entière.", fix: "partie" },
      { marked: "Elle a pris à [partis] le représentant du syndicat.", fix: "partie" },
    ]},
    { ruleSlug: "expr-sous-legide", sentences: [
      { marked: "La collecte se fait sous l'[egide] d'une fondation.", fix: "l'égide" },
      { marked: "Le tournoi se joue sous l'[égyde] de la ligue régionale.", fix: "l'égide" },
    ]},
    { ruleSlug: "expr-vaille-que-vaille", sentences: [
      { marked: "L'atelier fonctionne [vaillle] que vaille depuis mars.", fix: "vaille" },
      { marked: "Ils tiennent vaille que [vaillent] jusqu'à la relève.", fix: "vaille" },
    ]},
    { ruleSlug: "expr-a-bon-escient", sentences: [
      { marked: "Ce terme technique est employé à bon [essient].", fix: "escient" },
      { marked: "Les crédits ont été utilisés à bon [éscient].", fix: "escient" },
    ]},
    { ruleSlug: "expr-au-demeurant", sentences: [
      { marked: "Au [demeurent], cette solution ne coûte presque rien.", fix: "demeurant" },
      { marked: "Sa proposition, au [demeurand] sensée, a été écartée.", fix: "demeurant" },
    ]},
    { ruleSlug: "expr-nonobstant", sentences: [
      { marked: "[Nonobstants] les avertissements, il a poursuivi seul.", fix: "Nonobstant" },
      { marked: "Il a signé, [non-obstant] les réserves du notaire.", fix: "nonobstant" },
    ]},
    { ruleSlug: "expr-a-lencontre", sentences: [
      { marked: "Ce choix va à l'encontre de toutes nos habitudes.", fix: null },
      { marked: "Il est parti à l'[encontre] de son frère à l'aéroport.", fix: "la rencontre" },
    ]},
    { ruleSlug: "expr-de-concert", sentences: [
      { marked: "Les deux maires ont agi de [conserve] sur ce dossier.", fix: "concert" },
      { marked: "Les péniches descendaient le fleuve de [concert].", fix: "conserve" },
    ]},
    { ruleSlug: "expr-sen-falloir", sentences: [
      { marked: "Il s'en est [fallut] de peu qu'il manque son avion.", fix: "fallu" },
      { marked: "Rien n'est réglé, tant s'en [fallent] pour l'instant.", fix: "faut" },
    ]},
    { ruleSlug: "expr-en-lespece", sentences: [
      { marked: "En l'[espèces], aucune faute ne peut lui être reprochée.", fix: "l'espèce" },
      { marked: "Le texte est inapplicable en l'[espece] examinée.", fix: "l'espèce" },
    ]},
    { ruleSlug: "expr-tenir-tete", sentences: [
      { marked: "Elle a tenu [têtes] à toute la commission.", fix: "tête" },
      { marked: "Aucun d'eux n'osera lui tenir [têtes] en public.", fix: "tête" },
    ]},
  ],
};
