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
    fix: "orthographe",
    reason: "4 mots, sous le plancher de 5.",
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
];
