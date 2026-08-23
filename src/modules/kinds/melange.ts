/**
 * Le mélange des propositions, une bonne fois, à la source.
 *
 * Un QCM dont la bonne réponse est toujours la première ne teste plus rien :
 * il suffit de cliquer en haut. C'est pourtant l'état naturel d'un contenu
 * écrit à la main — on pose la question, on écrit la vraie réponse, puis on
 * invente trois leurres. Sur les 6 639 questions de culture générale rédigées
 * ainsi, la bonne réponse était au rang 0 dans 100 % des cas ; sur l'ensemble
 * du module, dans 83,6 %. À l'écran, répondre systématiquement « la première »
 * donnait 55 % de bonnes réponses, contre 25 % au hasard.
 *
 * Deux commentaires du dépôt se renvoyaient la responsabilité — celui du type
 * d'exercice disait que l'écran mélangeait, celui de l'écran disait que le
 * seed mélangeait. Personne ne mélangeait. Voici le mélange, à l'endroit que
 * l'écran désignait : à la source, pour que les données soient saines quel que
 * soit ce qui les lit — l'écran, l'export hors ligne, ou un futur module qui
 * imprimerait une fiche de révision.
 *
 * TROIS PROPRIÉTÉS, et elles comptent toutes les trois :
 *
 *  — DÉTERMINISTE. La permutation dépend de l'énoncé, et de rien d'autre. Le
 *    même contenu rend toujours le même ordre : le seed reste idempotent, les
 *    diffs restent lisibles, et une question ne se réordonne pas dans le dos
 *    de quelqu'un qui l'a déjà vue.
 *  — INDÉPENDANTE DE L'ORDRE REÇU. Les propositions sont d'abord remises dans
 *    un ordre canonique — l'ordre alphabétique — puis permutées. L'ordre
 *    d'arrivée n'entre donc jamais dans le calcul : appliquer la fonction deux
 *    fois donne le même résultat, et réordonner les propositions à la main
 *    dans un fichier de contenu ne produit aucun changement en base. Sans
 *    cette remise à plat, permuter un contenu déjà permuté le rebrasserait,
 *    et chaque passage donnerait un ordre différent.
 *  — RESPECTUEUSE DE L'ORDRE VOULU. Une liste de nombres déjà rangée du plus
 *    petit au plus grand — quatre dates, quatre altitudes — a été écrite ainsi
 *    exprès, et sa bonne réponse se trouve déjà à un rang quelconque. On n'y
 *    touche pas.
 */

type AvecPropositions = { choices: string[]; answerIndex: number };

/** FNV-1a 32 bits : court, stable, sans dépendance. */
function empreinte(texte: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < texte.length; i++) {
    h ^= texte.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** mulberry32 : un générateur minuscule, à état sur 32 bits. */
function tirage(graine: number): () => number {
  let a = graine;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const nombre = (s: string): number | null => {
  const m = s.replace(/[\s ]/g, "").match(/^-?\d+(?:[.,]\d+)?$/);
  return m ? Number(m[0].replace(",", ".")) : null;
};

/** La liste est-elle une suite de nombres déjà rangée ? */
function dejaRangee(choix: string[]): boolean {
  const n = choix.map(nombre);
  if (n.some((x) => x === null)) return false;
  const v = n as number[];
  return (
    v.every((x, i) => i === 0 || x > v[i - 1]!) || v.every((x, i) => i === 0 || x < v[i - 1]!)
  );
}

/**
 * Rend une charge utile aux propositions permutées, avec `answerIndex` remis
 * en face de la bonne. `graine` doit identifier la question : c'est elle qui
 * rend le résultat reproductible.
 */
export function melangerPropositions<T extends AvecPropositions>(payload: T, graine: string): T {
  const { choices, answerIndex } = payload;
  if (choices.length < 2 || answerIndex < 0 || answerIndex >= choices.length) return payload;
  if (dejaRangee(choices)) return payload;

  // Remise à plat : on repart de l'ordre alphabétique, quel que soit l'ordre
  // reçu. Les propositions d'un même exercice sont garanties distinctes par la
  // validation du type, donc ce tri est sans ambiguïté.
  const canonique = choices.map((_, i) => i).sort((a, b) => choices[a]!.localeCompare(choices[b]!, "fr"));

  const rnd = tirage(empreinte(graine));
  for (let i = canonique.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [canonique[i], canonique[j]] = [canonique[j]!, canonique[i]!];
  }

  return {
    ...payload,
    choices: canonique.map((r) => choices[r]!),
    answerIndex: canonique.indexOf(answerIndex),
  };
}

/**
 * De quoi identifier la question, sans dépendre de l'ordre actuel des
 * propositions — sinon la permutation changerait à chaque passage. L'énoncé
 * s'appelle `question` ici, `text` ou `recto` ailleurs ; à défaut, les
 * propositions RANGÉES suffisent à distinguer une question d'une autre.
 */
export function graineDe(payload: AvecPropositions): string {
  const p = payload as AvecPropositions & Record<string, unknown>;
  for (const champ of ["question", "text", "recto", "enonce"]) {
    const v = p[champ];
    if (typeof v === "string" && v.trim()) return v;
  }
  return [...payload.choices].sort().join("\u0000");
}

/** Vrai si la charge utile est un choix multiple : elle a des propositions et un rang. */
export function aDesPropositions(payload: unknown): payload is AvecPropositions {
  const p = payload as AvecPropositions | null;
  return (
    !!p &&
    Array.isArray(p.choices) &&
    p.choices.every((c) => typeof c === "string") &&
    typeof p.answerIndex === "number"
  );
}
