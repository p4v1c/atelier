/**
 * Tokenisation des phrases — RÉFÉRENCE UNIQUE.
 *
 * Écrite une seule fois, côté serveur. Le client ne tokenise jamais : l'API lui
 * envoie le tableau de tokens déjà découpé. `faultyTokenIndex` en base est un
 * index dans le tableau produit ici ; toute modification de cette fonction
 * invalide les index déjà stockés (voir tests/tokenize.test.ts).
 *
 * Reprend à l'identique le découpage du fichier d'origine (`decouper`) :
 * séparation sur l'espace simple, puis détachement des guillemets ouvrants
 * avant le mot et de la ponctuation fermante après.
 */

export type Token = {
  /** Guillemet ou apostrophe ouvrante collée devant le mot, ex. « » */
  before: string;
  /** Le mot cliquable. */
  word: string;
  /** Ponctuation collée derrière le mot, ex. « , » « . » « ... » */
  after: string;
};

const LEADING = /^[«"']*/;
const TRAILING = /[.,;:!?»"']*$/;

/** Découpe une phrase PROPRE (sans crochets) en tokens cliquables. */
export function tokenize(text: string): Token[] {
  return text.split(" ").map((raw) => {
    const before = raw.match(LEADING)?.[0] ?? "";
    const rest = raw.slice(before.length);
    const after = rest.match(TRAILING)?.[0] ?? "";
    const word = rest.slice(0, rest.length - after.length);
    // Un token entièrement fait de ponctuation reste un mot : on ne le vide pas.
    return word.length > 0 ? { before, word, after } : { before: "", word: raw, after: "" };
  });
}

/** Nombre de mots d'une phrase propre, pour les contrôles de longueur. */
export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export class ParseError extends Error {}

export type ParsedSentence = {
  /** Texte propre, sans crochets — c'est ce qui part en base. */
  text: string;
  /** Index du token fautif, -1 si la phrase est correcte. */
  faultyTokenIndex: number;
  /** Mot tel qu'il est écrit dans la phrase, crochets retirés (pour les contrôles). */
  faultyWord: string | null;
};

/**
 * Convertit le format d'IMPORT (`"Il commence [a] comprendre."`) vers le format
 * de STOCKAGE. Lève ParseError sur tout ce qui est ambigu — le validateur
 * s'appuie sur ces exceptions.
 */
export function parseMarkedSentence(marked: string): ParsedSentence {
  const opens = (marked.match(/\[/g) ?? []).length;
  const closes = (marked.match(/\]/g) ?? []).length;

  if (opens === 0 && closes === 0) {
    return { text: marked, faultyTokenIndex: -1, faultyWord: null };
  }
  if (opens !== 1 || closes !== 1) {
    throw new ParseError(`marqueurs mal formés (${opens} « [ », ${closes} « ] »)`);
  }
  const m = marked.match(/\[([^\]]*)\]/);
  if (!m || m.index === undefined) throw new ParseError("crochets non appariés");
  const inside = m[1]!;
  if (inside.length === 0) throw new ParseError("marqueur vide");
  if (/\s/.test(inside)) throw new ParseError(`le marqueur contient une espace : « ${inside} »`);

  const text = marked.replace("[", "").replace("]", "");
  // Le token fautif est celui du mot d'origine, marqueurs compris.
  const rawTokens = marked.split(" ");
  const faultyTokenIndex = rawTokens.findIndex((t) => t.includes("["));
  if (faultyTokenIndex === -1) throw new ParseError("marqueur introuvable après découpage");

  return { text, faultyTokenIndex, faultyWord: tokenize(text)[faultyTokenIndex]?.word ?? null };
}

/**
 * Chemin inverse : reconstruit un format d'import depuis le stockage
 * (export JSON, débogage, relecture d'un lot).
 *
 * Les crochets entourent le MOT CLIQUABLE, ponctuation exclue :
 * « …se sont [téléphonées]. » et non « …se sont [téléphonées.] ».
 *
 * Ce n'est pas forcément la graphie d'origine au caractère près — le fichier
 * source écrivait « L'[ortographe] », on réécrit « [L'ortographe] » — mais
 * c'est bien la même phrase et le même token fautif. La propriété garantie est
 * la stabilité du format de STOCKAGE, pas celle du format d'import
 * (voir tests/tokenize.test.ts).
 */
export function toMarkedSentence(text: string, faultyTokenIndex: number): string {
  if (faultyTokenIndex < 0) return text;
  const tokens = tokenize(text);
  const target = tokens[faultyTokenIndex];
  if (target === undefined) throw new ParseError(`index ${faultyTokenIndex} hors phrase`);
  const parts = text.split(" ");
  parts[faultyTokenIndex] = `${target.before}[${target.word}]${target.after}`;
  return parts.join(" ");
}

/**
 * Forme normalisée servant de garde-fou anti-doublon en base :
 * minuscules, ponctuation retirée, espaces réduites.
 *
 * Les ACCENTS SONT CONSERVÉS, volontairement : « Il a mangé » et « Il à mangé »
 * sont deux phrases différentes ici — c'est même exactement ce que l'application
 * enseigne. Les confondre reviendrait à interdire à une règle d'homophones de
 * proposer la version fautive et la version correcte d'une même tournure.
 *
 * Cette fonction alimente l'index unique Sentence.textNormalized : la changer
 * impose de recalculer la colonne (migration + reseed).
 */
export function normalizeForDedupe(text: string): string {
  return text
    .normalize("NFC")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}
