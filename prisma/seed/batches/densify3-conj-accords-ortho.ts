/**
 * Étape C, troisième passe — lots 010, 011 et 012 portés de 5 à 7 phrases.
 */
import type { ContentBatch } from "../../../src/lib/content";

export const DENSIFY3_CONJ_ACC_ORTHO: ContentBatch = {
  id: "densify3-conj-acc-ortho",
  rules: [],
  additions: [
    /* ── lot 010 : conjugaison ── */
    { ruleSlug: "conj-verbes-ir-groupes", sentences: [
      { marked: "Nous [dormissons] mal depuis le début de la canicule.", fix: "dormons" },
      { marked: "Les feuilles [rougent] dès les premières gelées.", fix: "rougissent" },
    ]},
    { ruleSlug: "conj-passe-anterieur", sentences: [
      { marked: "Quand il [avait] achevé son récit, tous se turent.", fix: "eut" },
      { marked: "Dès qu'elle [était] sortie, la salle se vida d'un coup.", fix: "fut" },
    ]},
    { ruleSlug: "conj-subjonctif-passe", sentences: [
      { marked: "Il est possible qu'ils [ont] déjà quitté la ville.", fix: "aient" },
      { marked: "Je regrette qu'elle [est] partie sans nous prévenir.", fix: "soit" },
    ]},
    { ruleSlug: "conj-verbe-mourir", sentences: [
      { marked: "Les abeilles [mourrent] par milliers chaque été.", fix: "meurent" },
      { marked: "Nous [mourirons] de froid si le chauffage lâche.", fix: "mourrons" },
    ]},
    { ruleSlug: "conj-verbe-courir", sentences: [
      { marked: "Elle [courrait] tous les matins avant son travail.", fix: "courait" },
      { marked: "Vous [courirez] le relais avec l'équipe du club.", fix: "courrez" },
    ]},
    { ruleSlug: "conj-verbe-savoir-imperatif", sentences: [
      { marked: "[Savez] que ce document est strictement confidentiel.", fix: "Sachez" },
      { marked: "[Sais] te taire quand la situation l'exige.", fix: "Sache" },
    ]},
    { ruleSlug: "conj-verbe-vouloir-imperatif", sentences: [
      { marked: "[Voulez] recevoir, Madame, mes salutations distinguées.", fix: "Veuillez" },
      { marked: "Mesdames, [voulez] excuser ce retard indépendant de nous.", fix: "veuillez" },
    ]},
    { ruleSlug: "conj-verbe-etre-subjonctif", sentences: [
      { marked: "Il faudrait qu'ils [sont] prévenus avant demain soir.", fix: "soient" },
      { marked: "Pourvu que nous [soyions] à l'heure au rendez-vous.", fix: "soyons" },
    ]},
    { ruleSlug: "conj-verbe-valoir", sentences: [
      { marked: "Ces terres [vallent] aujourd'hui trois fois leur prix.", fix: "valent" },
      { marked: "Il faudrait que l'effort en [vaut] la peine.", fix: "vaille" },
    ]},
    { ruleSlug: "conj-verbe-plaire", sentences: [
      { marked: "Ce quartier me [plait] moins depuis les travaux.", fix: "plaît" },
      { marked: "Sa franchise [deplait] à plus d'un dans le service.", fix: "déplaît" },
    ]},
    { ruleSlug: "conj-verbe-croitre", sentences: [
      { marked: "Le nombre d'abonnés [crois] chaque trimestre.", fix: "croît" },
      { marked: "La tension a [cru] tout au long de la réunion.", fix: "crû" },
    ]},
    { ruleSlug: "conj-verbe-fuir", sentences: [
      { marked: "Vous [fuiez] les conversations sérieuses depuis toujours.", fix: "fuyez" },
      { marked: "Le réservoir [fuie] depuis le dernier hiver.", fix: "fuit" },
    ]},
    { ruleSlug: "conj-verbe-mouvoir", sentences: [
      { marked: "Ces engins sont [mues] par un moteur électrique.", fix: "mus" },
      { marked: "Elle était [mu] par une curiosité toute sincère.", fix: "mue" },
    ]},
    { ruleSlug: "conj-verbes-guer", sentences: [
      { marked: "Nous [distingons] à peine la côte dans la brume.", fix: "distinguons" },
      { marked: "Ces trajets répétés le [fatigaient] beaucoup trop.", fix: "fatiguaient" },
    ]},
    { ruleSlug: "conj-verbes-quer", sentences: [
      { marked: "Nous [communicons] mal entre les deux services.", fix: "communiquons" },
      { marked: "En [applicant] la consigne, tout serait plus simple.", fix: "appliquant" },
    ]},
    { ruleSlug: "conj-verbe-ecrire", sentences: [
      { marked: "Vous [écrisez] toujours au dos des enveloppes.", fix: "écrivez" },
      { marked: "Ils ont [écrivé] trois versions du même rapport.", fix: "écrit" },
    ]},
    { ruleSlug: "conj-verbe-boire", sentences: [
      { marked: "Vous [boivez] toujours votre café sans sucre.", fix: "buvez" },
      { marked: "Nous avons [boit] toute la carafe en dix minutes.", fix: "bu" },
    ]},
    { ruleSlug: "conj-verbe-recevoir", sentences: [
      { marked: "Nous [recevrons] peu de visites en cette saison creuse.", fix: "recevons" },
      { marked: "Ce résultat les a beaucoup [decu] cette année.", fix: "déçus" },
    ]},
    { ruleSlug: "conj-verbe-conclure", sentences: [
      { marked: "L'expert [conclue] à un défaut de fabrication.", fix: "conclut" },
      { marked: "Le bail a été [conclut] pour une durée de six ans.", fix: "conclu" },
    ]},
    { ruleSlug: "conj-verbe-exclure-inclure", sentences: [
      { marked: "Les frais de port sont [inclue] dans le prix affiché.", fix: "inclus" },
      { marked: "Deux joueurs ont été [exclues] pour comportement antisportif.", fix: "exclus" },
    ]},
    { ruleSlug: "conj-verbe-tenir-venir", sentences: [
      { marked: "Ils [tenirent] bon jusqu'à l'arrivée des secours.", fix: "tinrent" },
      { marked: "Nous [venirons] vous chercher à la descente du train.", fix: "viendrons" },
    ]},
    { ruleSlug: "conj-imperatif-s-euphonique", sentences: [
      { marked: "Prends du gâteau et [coupe-en] une part pour ton frère.", fix: "coupes-en" },
      { marked: "Le jardin est sec : [pense-y] avant de partir.", fix: "penses-y" },
    ]},
    { ruleSlug: "conj-verbe-naitre", sentences: [
      { marked: "Un soupçon [nait] chaque fois qu'il change de version.", fix: "naît" },
      { marked: "Elle [naîssit] au petit matin, un jour de tempête.", fix: "naquit" },
    ]},
    { ruleSlug: "conj-verbe-prevoir-futur", sentences: [
      { marked: "Ils [préverront] une salle plus grande la prochaine fois.", fix: "prévoiront" },
      { marked: "Nous [préverrions] volontiers un délai supplémentaire.", fix: "prévoirions" },
    ]},
    { ruleSlug: "conj-verbe-rire-sourire", sentences: [
      { marked: "Elle avait [sourit] avant même de comprendre la question.", fix: "souri" },
      { marked: "Nous nous sommes [souris] en nous croisant dans le couloir.", fix: "souri" },
    ]},

    /* ── lot 011 : accords ── */
    { ruleSlug: "accord-verbe-ni-ni", sentences: [
      { marked: "Ni l'un ni l'autre ne [seront] retenu pour le poste.", fix: "sera" },
      { marked: "Ni son père ni sa mère ne [comprit] sa décision.", fix: "comprirent" },
    ]},
    { ruleSlug: "accord-verbe-ou", sentences: [
      { marked: "Un froid ou une averse [gâcheront] la fête de samedi.", fix: "gâchera" },
      { marked: "Le train ou l'autocar vous [conduiront] jusqu'au village.", fix: "conduira" },
    ]},
    { ruleSlug: "accord-fraction", sentences: [
      { marked: "Les trois quarts du personnel [est] en congé cette semaine.", fix: "sont" },
      { marked: "Un dixième de la surface [ont] été replanté au printemps.", fix: "a" },
    ]},
    { ruleSlug: "accord-dizaine", sentences: [
      { marked: "Une quinzaine d'élèves [manque] à l'appel ce matin.", fix: "manquent" },
      { marked: "Un millier de visiteurs [afflue] dès le premier jour.", fix: "affluent" },
    ]},
    { ruleSlug: "accord-attribut-cod", sentences: [
      { marked: "On les a trouvés bien [silencieuse] pendant le trajet.", fix: "silencieux" },
      { marked: "Le jury les a déclarées [admissible] à l'unanimité.", fix: "admissibles" },
    ]},
    { ruleSlug: "accord-de-meme-que", sentences: [
      { marked: "Le vent, de même que la pluie, [ont] retardé les travaux.", fix: "a" },
      { marked: "La sœur, aussi bien que le frère, [savent] toute la vérité.", fix: "sait" },
    ]},
    { ruleSlug: "pluriel-composes-nom-adjectif", sentences: [
      { marked: "Les [chauve-souris] nichent sous le toit de la grange.", fix: "chauves-souris" },
      { marked: "Deux [beau-frères] tenaient la boutique ensemble.", fix: "beaux-frères" },
    ]},
    { ruleSlug: "pluriel-composes-preposition", sentences: [
      { marked: "Ces [eau-de-vies] vieillissent dans des fûts de chêne.", fix: "eaux-de-vie" },
      { marked: "Deux [tête-à-têtes] ont suffi pour tout régler.", fix: "tête-à-tête" },
    ]},
    { ruleSlug: "pluriel-composes-invariables", sentences: [
      { marked: "Trois [tirent-bouchons] traînaient dans le tiroir.", fix: "tire-bouchons" },
      { marked: "Les [coupes-papier] sont rangés avec les ciseaux.", fix: "coupe-papier" },
    ]},
    { ruleSlug: "pluriel-adjectifs-composes", sentences: [
      { marked: "Les [dernier-nés] de la portée sont toujours plus fragiles.", fix: "derniers-nés" },
      { marked: "Des enfants [aveugle-nés] fréquentent cet établissement.", fix: "aveugles-nés" },
    ]},
    { ruleSlug: "accord-couleur-composee", sentences: [
      { marked: "Elle porte une veste bleu [marines] achetée en solde.", fix: "marine" },
      { marked: "Ces carreaux [rouges] brique datent de la construction.", fix: "rouge" },
    ]},
    { ruleSlug: "accord-quel-attribut", sentences: [
      { marked: "[Quels] sont vos disponibilités pour la semaine prochaine ?", fix: "Quelles" },
      { marked: "Dis-moi [quelle] seront les documents à fournir.", fix: "quels" },
    ]},
    { ruleSlug: "accord-participe-ayant", sentences: [
      { marked: "Les demandes [ayantes] reçu un avis favorable seront traitées.", fix: "ayant" },
      { marked: "Les pièces [étantes] manquantes, le dossier reste bloqué.", fix: "étant" },
    ]},
    { ruleSlug: "accord-nom-propre-marque", sentences: [
      { marked: "Deux [Fiats] étaient garées devant le portail.", fix: "Fiat" },
      { marked: "Le concessionnaire a vendu quatre [Teslas] au mois de juin.", fix: "Tesla" },
    ]},
    { ruleSlug: "accord-feu-defunt", sentences: [
      { marked: "[Feue] le roi avait pourtant tranché cette question.", fix: "Feu" },
      { marked: "Sa [feu] grand-mère lui a laissé cette pendule.", fix: "feue" },
    ]},
    { ruleSlug: "accord-adverbe-invariable", sentences: [
      { marked: "Les invités sont restés [debouts] toute la soirée.", fix: "debout" },
      { marked: "Elles ont voyagé [ensembles] pendant tout l'été.", fix: "ensemble" },
    ]},
    { ruleSlug: "cest-moi-qui", sentences: [
      { marked: "C'est vous qui [prend] la parole en premier.", fix: "prenez" },
      { marked: "C'est nous qui [sera] responsables du matériel.", fix: "serons" },
      { marked: "C'est vous qui [sera] responsable en cas de problème.", fix: "serez" },
      { marked: "En réalité, c'est nous qui [paye] l'addition ce soir.", fix: "payons" },
    ]},
    { ruleSlug: "accord-comparatif-que", sentences: [
      { marked: "Ces explications sont plus [clair] que les précédentes.", fix: "claires" },
      { marked: "La seconde version paraît moins [lourd] que la première.", fix: "lourde" },
    ]},
    { ruleSlug: "accord-ordinal", sentences: [
      { marked: "Les [dernier] arrivés n'ont pas eu de place assise.", fix: "derniers" },
      { marked: "Elle occupe la [second] loge à droite de la scène.", fix: "seconde" },
    ]},
    { ruleSlug: "accord-tout-resume", sentences: [
      { marked: "Les couleurs, les odeurs, tout [rappelaient] l'enfance.", fix: "rappelait" },
      { marked: "Ni la fatigue ni la peur, rien ne l'[ont] arrêté.", fix: "l'a" },
    ]},
    { ruleSlug: "accord-se-faire-participe", sentences: [
      { marked: "Elles se sont [faites] rembourser sans la moindre difficulté.", fix: "fait" },
      { marked: "Il s'est [faits] recaler à l'oral pour la deuxième fois.", fix: "fait" },
    ]},
    { ruleSlug: "accord-participe-que-attribut", sentences: [
      { marked: "Les preuves qu'il a [estimé] suffisantes ont convaincu.", fix: "estimées" },
      { marked: "Ces mesures, que nous avons [jugé] utiles, entrent en vigueur.", fix: "jugées" },
    ]},
    { ruleSlug: "accord-nom-nombre-precis", sentences: [
      { marked: "Trois heures et demie [a] suffi pour tout démonter.", fix: "ont" },
      { marked: "Un mois et demi [séparent] les deux versions du texte.", fix: "sépare" },
    ]},
    { ruleSlug: "accord-madame-le-titre", sentences: [
      { marked: "Monsieur le maire et son adjointe [signera] l'arrêté.", fix: "signeront" },
      { marked: "Madame la juge [ont] rendu son délibéré ce matin.", fix: "a" },
    ]},
    { ruleSlug: "accord-nom-apres-des", sentences: [
      { marked: "Il rapporte toujours [des] jolies cartes de ses voyages.", fix: "de" },
      { marked: "Nous avons goûté [des] excellents fromages fermiers.", fix: "d'" },
    ]},

    /* ── lot 012 : orthographe d'usage ── */
    { ruleSlug: "ortho-abattre-abbaye", sentences: [
      { marked: "L'orage a fait [abbattre] deux peupliers du parc.", fix: "abattre" },
      { marked: "Les moines de l'[abaye] cultivaient déjà la vigne.", fix: "l'abbaye" },
    ]},
    { ruleSlug: "ortho-apercevoir-apparaitre", sentences: [
      { marked: "Un doute commence à [apparaitre] dans son témoignage.", fix: "apparaître" },
      { marked: "Nous avons [appercu] la maison depuis le sommet.", fix: "aperçu" },
    ]},
    { ruleSlug: "ortho-agrafe-aggraver", sentences: [
      { marked: "L'humidité risque d'[agraver] les fissures du mur.", fix: "d'aggraver" },
      { marked: "Il a fixé les feuilles avec deux [aggrafes].", fix: "agrafes" },
    ]},
    { ruleSlug: "ortho-alourdir-allonger", sentences: [
      { marked: "Il faudrait [alonger] les rideaux de dix centimètres.", fix: "allonger" },
      { marked: "Ces annexes vont [allourdir] inutilement le rapport.", fix: "alourdir" },
    ]},
    { ruleSlug: "ortho-balade-ballon", sentences: [
      { marked: "Le [balon] d'eau chaude est tombé en panne hier.", fix: "ballon" },
      { marked: "Une longue [ballade] à vélo nous attend dimanche.", fix: "balade" },
    ]},
    { ruleSlug: "ortho-dilemme-dilettante", sentences: [
      { marked: "Ce [dilemne] revient à chaque conseil d'administration.", fix: "dilemme" },
      { marked: "Il peint en [dilétante] depuis sa retraite.", fix: "dilettante" },
    ]},
    { ruleSlug: "ortho-exigeant-e-devant-a", sentences: [
      { marked: "Sa réponse était courtoise et plutôt [engagante].", fix: "engageante" },
      { marked: "Le poisson agitait sa [nagoire] caudale sans relâche.", fix: "nageoire" },
    ]},
    { ruleSlug: "ortho-gageure", sentences: [
      { marked: "Tenir un tel délai serait une [gajure] insensée.", fix: "gageure" },
      { marked: "Cette [gagure] a pourtant été relevée sans peine.", fix: "gageure" },
    ]},
    { ruleSlug: "ortho-hasard-h", sentences: [
      { marked: "Il a rencontré son ancien voisin par pur [hazard].", fix: "hasard" },
      { marked: "Ces placements sont jugés trop [hazardeux] par la banque.", fix: "hasardeux" },
    ]},
    { ruleSlug: "ortho-irriter-irrigation", sentences: [
      { marked: "Cette décision paraît [irationnelle] à tout le monde.", fix: "irrationnelle" },
      { marked: "Le canal d'[irigation] traverse tout le domaine.", fix: "d'irrigation" },
    ]},
    { ruleSlug: "ortho-parallele", sentences: [
      { marked: "Il mène une activité [paralèle] à son emploi principal.", fix: "parallèle" },
      { marked: "Le [parralélisme] des deux textes saute aux yeux.", fix: "parallélisme" },
    ]},
    { ruleSlug: "ortho-personnel-personnage", sentences: [
      { marked: "Le [personel] de nuit assure la surveillance du site.", fix: "personnel" },
      { marked: "Ce [personage] disparaît au milieu du deuxième acte.", fix: "personnage" },
    ]},
    { ruleSlug: "ortho-sculpter-muettes", sentences: [
      { marked: "Il faut [conter] les bulletins avant de proclamer.", fix: "compter" },
      { marked: "Le [scultpeur] travaille la pierre depuis trente ans.", fix: "sculpteur" },
    ]},
    { ruleSlug: "ortho-lettres-grecques-rh", sentences: [
      { marked: "Ce [rododendron] fleurit tous les ans en mai.", fix: "rhododendron" },
      { marked: "Le [rinocéros] du zoo attire tous les enfants.", fix: "rhinocéros" },
    ]},
    { ruleSlug: "ortho-tranquille", sentences: [
      { marked: "Ils cherchent un coin [tranquile] pour pique-niquer.", fix: "tranquille" },
      { marked: "La [tranquilité] du dimanche matin lui manque déjà.", fix: "tranquillité" },
    ]},
    { ruleSlug: "ortho-vaccin-vacance", sentences: [
      { marked: "Le logement est [vaccant] depuis le mois de mars.", fix: "vacant" },
      { marked: "La campagne de [vacination] débute lundi prochain.", fix: "vaccination" },
    ]},
    { ruleSlug: "ortho-noms-en-ee", sentences: [
      { marked: "La [journé] a été longue et particulièrement chargée.", fix: "journée" },
      { marked: "Une [gorgé] d'eau fraîche suffira à le remettre.", fix: "gorgée" },
    ]},
    { ruleSlug: "ortho-noms-en-te", sentences: [
      { marked: "Sa [générositée] est connue dans tout le quartier.", fix: "générosité" },
      { marked: "La [fidélitée] de ses clients ne se dément pas.", fix: "fidélité" },
    ]},
    { ruleSlug: "ortho-mots-en-tion-ption", sentences: [
      { marked: "L'[interuption] de séance a duré vingt minutes.", fix: "L'interruption" },
      { marked: "Sa [démition] a surpris toute la rédaction.", fix: "démission" },
    ]},
    { ruleSlug: "ortho-mots-en-ien", sentences: [
      { marked: "La [chirurgiene] opère trois fois par semaine.", fix: "chirurgienne" },
      { marked: "Cette [électricienn] intervient dans toute la vallée.", fix: "électricienne" },
    ]},
    { ruleSlug: "ortho-mots-en-isme", sentences: [
      { marked: "Le [journalissme] local vit des heures difficiles.", fix: "journalisme" },
      { marked: "Son [optimysme] finit par gagner tout le groupe.", fix: "optimisme" },
    ]},
    { ruleSlug: "ortho-abreger-accents", sentences: [
      { marked: "Nous [assiégons] la question depuis des semaines.", fix: "assiégeons" },
      { marked: "Ce store [protége] mal la vitrine du soleil.", fix: "protège" },
    ]},
    { ruleSlug: "ortho-consonnes-finales-muettes", sentences: [
      { marked: "Le [rebor] de la fenêtre a besoin d'être repeint.", fix: "rebord" },
      { marked: "Un [sursau] l'a réveillé au milieu de la nuit.", fix: "sursaut" },
    ]},
    { ruleSlug: "ortho-mots-en-cial-tial", sentences: [
      { marked: "Le budget [provinciel] a été voté sans débat.", fix: "provincial" },
      { marked: "Un traitement [confidenciel] leur a été réservé.", fix: "confidentiel" },
    ]},
    { ruleSlug: "ortho-mots-en-oire-oir", sentences: [
      { marked: "Le [tiroire] du bas contient tous les papiers.", fix: "tiroir" },
      { marked: "Cette [armoir] normande date du siècle dernier.", fix: "armoire" },
    ]},
  ],
};
