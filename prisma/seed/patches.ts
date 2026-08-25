/**
 * Corrections ponctuelles du contenu d'origine.
 *
 * La consigne était « aucune perte, aucune reformulation ». Ces six phrases
 * échouent pourtant au validateur que tu as toi-même spécifié. Plutôt que de
 * modifier legacy.json (qui doit rester la copie fidèle du fichier HTML) ou
 * d'affaiblir le validateur, chaque correction est listée ici, avec son motif.
 *
 * Pour revenir au contenu d'origine : vider PATCHES et lancer
 * `npm run validate:content` — les six anomalies réapparaissent en clair.
 */

export type SentencePatch = {
  ruleSlug: string;
  /** Phrase d'origine, au format marqué, telle qu'elle est dans legacy.json. */
  from: string;
  /** Phrase corrigée, au format marqué. */
  to: string;
  /** Nouvelle correction attendue, `null` si la phrase est correcte. */
  fix: string | null;
  reason: string;
};

export const PATCHES: SentencePatch[] = [
  {
    ruleSlug: "mettre-au-jour",
    from: "Les fouilles ont mis à [jour] une nécropole.",
    to: "Les fouilles ont mis [à] jour une nécropole.",
    fix: "au",
    reason:
      "La correction valait le mot marqué (« jour » → « jour ») : l'exercice ne corrigeait rien. " +
      "La faute réelle porte sur « à », qui doit devenir « au ».",
  },
  {
    ruleSlug: "quand-quant",
    from: "[Quant] tu voudras, préviens-moi.",
    to: "[Quant] tu voudras, préviens-moi de ton arrivée.",
    fix: "Quand",
    reason: "4 mots, sous le plancher de 5 fixé par le validateur.",
  },
  {
    ruleSlug: "peut-etre",
    from: "Elle [peut-être] absente demain.",
    to: "Elle [peut-être] absente demain, personne ne le sait.",
    fix: "peut être",
    reason: "4 mots, sous le plancher de 5.",
  },
  {
    ruleSlug: "accord-verbe-sujet",
    from: "Ainsi [commence] les difficultés.",
    to: "Ainsi [commence] les difficultés de la seconde année.",
    fix: "commencent",
    reason: "4 mots, sous le plancher de 5. L'inversion du sujet, qui fait tout l'intérêt, est conservée.",
  },
  {
    ruleSlug: "aussitot",
    from: "Aussitôt dit, aussitôt fait.",
    to: "Aussitôt dit, aussitôt fait, le dossier était bouclé.",
    fix: null,
    reason: "4 mots, sous le plancher de 5. Phrase correcte, elle le reste.",
  },
  {
    ruleSlug: "orthographe",
    from: "L'[ortographe] française est difficile.",
    to: "L'[ortographe] française décourage bien des élèves étrangers.",
    fix: "L'orthographe",
    reason:
      "4 mots, sous le plancher de 5. Et la correction emportait l'élision : « L'[ortographe] » " +
      "est un seul token, un fix « orthographe » donnait « orthographe française décourage ».",
  },
  {
    ruleSlug: "pronominaux",
    from: "Elles se sont [téléphonées] tous les soirs.",
    to: "Tous les soirs, elles se sont [téléphonées].",
    fix: "téléphoné",
    reason:
      "Seule règle où les trois phrases fautives plaçaient la faute au même rang (4e mot) : " +
      "on apprenait la position, pas la règle. Le complément passe en tête pour décaler la faute.",
  },

  /* ── Le piège d'élision : « à l'[attention] » est un seul token, et un fix
     « intention » donnait « à intention de sa mère ». La correction reprend
     le préfixe élidé. Treize phrases du lot d'origine, sur cent dix-sept
     trouvées dans tout le module. ── */
  {
    ruleSlug: "si-conditionnel",
    from: "Si j'[aurais] su, je serais resté.",
    to: "Si j'[aurais] su, je serais resté.",
    fix: "j'avais",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "aie-ait",
    from: "Il faut que j'[ai] plus de courage.",
    to: "Il faut que j'[ai] plus de courage.",
    fix: "j'aie",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "emmener",
    from: "N'oublie pas d'[emmener] ton parapluie.",
    to: "N'oublie pas d'[emmener] ton parapluie.",
    fix: "d'emporter",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "attention-intention",
    from: "Il a acheté ce livre à l'[attention] de sa mère.",
    to: "Il a acheté ce livre à l'[attention] de sa mère.",
    fix: "l'intention",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "air-aire",
    from: "Ils se garent sur l'[air] de repos.",
    to: "Ils se garent sur l'[air] de repos.",
    fix: "l'aire",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "futurs-irreguliers",
    from: "Elle t'[envoiera] le document ce soir.",
    to: "Elle t'[envoiera] le document ce soir.",
    fix: "t'enverra",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "asseoir",
    from: "Il s'[assois] sur le banc du parc.",
    to: "Il s'[assois] sur le banc du parc.",
    fix: "s'assoit",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "pronominaux-etre",
    from: "Elle s'[a] lavé les mains avant de manger.",
    to: "Elle s'[a] lavé les mains avant de manger.",
    fix: "s'est",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "adresse",
    from: "Il a changé d'[addresse] le mois dernier.",
    to: "Il a changé d'[addresse] le mois dernier.",
    fix: "d'adresse",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "honneur",
    from: "Il faut l'[honnorer] pour son courage.",
    to: "Il faut l'[honnorer] pour son courage.",
    fix: "l'honorer",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "imbecile",
    from: "Ne fais pas l'[imbécille] devant les invités.",
    to: "Ne fais pas l'[imbécille] devant les invités.",
    fix: "l'imbécile",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "eminent-2",
    from: "Il y a beaucoup d'[influence] dans le magasin.",
    to: "Il y a beaucoup d'[influence] dans le magasin.",
    fix: "d'affluence",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "a-lenvi",
    from: "Ils en parlent à l'[envie] depuis des semaines.",
    to: "Ils en parlent à l'[envie] depuis des semaines.",
    fix: "l'envi",
    reason: "La correction emportait l'élision du mot marqué.",
  },
  {
    ruleSlug: "h-aspire",
    from: "Je l'ai croisé par [l'hasard] dans la rue.",
    to: "Je l'ai croisé par [l'hasard] le plus complet.",
    fix: "le hasard",
    reason:
      "La correction « le hasard » donnait « par le hasard dans la rue », qui ne se dit pas. " +
      "La fin de phrase change pour que le tour soit celui qu'on emploie : « par le hasard le plus complet ».",
  },
  {
    ruleSlug: "elision",
    from: "Il attend [le] arrivée du train de Lyon.",
    to: "Il attend [larrivée] du train de Lyon, comme convenu.",
    fix: "l'arrivée",
    reason:
      "La correction « l' » laissait « l' arrivée », avec une espace après l'apostrophe : " +
      "le marqueur ne portait que sur « le », le nom restait un token séparé. La faute " +
      "exercée tient maintenant en un mot, l'apostrophe oubliée.",
  },
  {
    ruleSlug: "plus-dun",
    from: "Plus d'un candidat [sont] venus se plaindre.",
    to: "Plus d'un candidat [renoncent] avant l'épreuve orale.",
    fix: "renonce",
    reason:
      "La correction « est » laissait « est venus » : l'auxiliaire et le participe devaient " +
      "changer ensemble, et un seul mot peut être marqué. Le verbe simple lève la difficulté.",
  },
  {
    ruleSlug: "tout-le-monde",
    from: "Tout le monde [sont] venus à la fête.",
    to: "Tout le monde [partent] avant la fin du spectacle.",
    fix: "part",
    reason: "Même défaut : « est venus ». Le participe ne pouvait pas suivre l'auxiliaire.",
  },
];
