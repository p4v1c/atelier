/**
 * Validateur de contenu.
 *
 * Deux niveaux :
 *   - `error` : bloque le seed. Ce sont les anomalies de la spécification.
 *   - `warn`  : n'empêche rien, mais figure au compte-rendu. Réservé à ce qui
 *               se règle à l'étape C (densification), pas à ce qui est faux.
 *
 * `--strict` transforme les avertissements en erreurs.
 */
import {
  CATEGORY_BY_NAME,
  DISPUTED_CATEGORY,
  type ContentBatch,
  type SeedRule,
} from "./content";
import { normalizeForDedupe, parseMarkedSentence, ParseError, tokenize, wordCount } from "./tokenize";

export const MIN_WORDS = 5;
export const MAX_WORDS = 25;
export const MIN_SENTENCES = 2;
export const TARGET_SENTENCES = 5;

export type Severity = "error" | "warn";

export type Finding = {
  severity: Severity;
  code: string;
  batch: string;
  rule: string;
  sentence?: string;
  message: string;
};

export type Report = {
  findings: Finding[];
  errorCount: number;
  warnCount: number;
  ruleCount: number;
  sentenceCount: number;
  dictationCount: number;
  byCategory: Record<string, { rules: number; sentences: number }>;
  byDifficulty: Record<number, number>;
  byStatus: Record<string, number>;
  thinRules: { rule: string; sentences: number }[];
};

const ALLOWED_TAGS = /<(?!\/?b>)[^>]*>/; // tout sauf <b> et </b>

export function validateBatches(batches: ContentBatch[]): Report {
  const findings: Finding[] = [];
  const seenSlugs = new Map<string, string>();
  const seenSentences = new Map<string, string>();
  const seenDictations = new Map<string, string>();
  const byCategory: Report["byCategory"] = {};
  const byDifficulty: Record<number, number> = {};
  const byStatus: Record<string, number> = {};
  const thinRules: Report["thinRules"] = [];
  let sentenceCount = 0;
  let ruleCount = 0;
  let dictationCount = 0;

  const allSlugs = new Set(batches.flatMap((b) => b.rules.map((r) => r.slug)));

  for (const batch of batches) {
    for (const rule of batch.rules) {
      ruleCount++;
      const add = (severity: Severity, code: string, message: string, sentence?: string) =>
        findings.push({ severity, code, batch: batch.id, rule: rule.slug, sentence, message });

      /* ── identité et métadonnées ── */
      const previous = seenSlugs.get(rule.slug);
      if (previous !== undefined) {
        add("error", "duplicate-rule-slug", `identifiant déjà utilisé dans le lot « ${previous} »`);
      }
      seenSlugs.set(rule.slug, batch.id);

      if (!CATEGORY_BY_NAME.has(rule.category)) {
        add("error", "unknown-category", `catégorie inconnue : « ${rule.category} »`);
      }
      if (![1, 2, 3].includes(rule.difficulty)) {
        add("error", "bad-difficulty", `difficulté ${rule.difficulty} hors de 1-3`);
      }
      if (!rule.statement?.trim()) add("error", "empty-statement", "énoncé de règle vide");
      if (!rule.tip?.trim()) add("error", "empty-tip", "astuce vide");
      if (!rule.title?.trim()) add("error", "empty-title", "titre vide");
      if (rule.statement && ALLOWED_TAGS.test(rule.statement)) {
        add("error", "html-not-allowed", "l'énoncé contient une balise autre que <b>");
      }

      const status = rule.status ?? "active";
      byStatus[status] = (byStatus[status] ?? 0) + 1;
      const inDisputed = rule.category === DISPUTED_CATEGORY;
      if (inDisputed && status !== "disputed") {
        add("error", "disputed-status", `règle de « ${DISPUTED_CATEGORY} » sans status "disputed"`);
      }
      if (!inDisputed && status === "disputed") {
        add("error", "disputed-category", `status "disputed" hors de la catégorie « ${DISPUTED_CATEGORY} »`);
      }

      /* ── phrases ── */
      if (rule.sentences.length < MIN_SENTENCES) {
        add("error", "too-few-sentences", `${rule.sentences.length} phrase(s), minimum ${MIN_SENTENCES}`);
      }
      if (!rule.sentences.some((s) => s.fix === null)) {
        add("error", "no-correct-sentence", "aucune phrase sans faute");
      }
      if (rule.sentences.length < TARGET_SENTENCES) {
        add("warn", "thin-rule", `${rule.sentences.length} phrases, cible ${TARGET_SENTENCES} (étape C)`);
        thinRules.push({ rule: rule.slug, sentences: rule.sentences.length });
      }

      const faultyIndexes: number[] = [];

      for (const sentence of rule.sentences) {
        sentenceCount++;
        const raw = sentence.marked;

        let parsed;
        try {
          parsed = parseMarkedSentence(raw);
        } catch (e) {
          if (e instanceof ParseError) {
            add("error", "bad-markers", e.message, raw);
            continue;
          }
          throw e;
        }

        const isCorrect = parsed.faultyTokenIndex === -1;

        if (isCorrect && sentence.fix !== null) {
          add("error", "fix-without-marker", "phrase sans marqueur mais avec une correction", raw);
        }
        if (!isCorrect && sentence.fix === null) {
          add("error", "marker-without-fix", "phrase marquée mais sans correction", raw);
        }
        if (!isCorrect && sentence.fix !== null) {
          if (!sentence.fix.trim()) {
            add("error", "empty-fix", "correction vide", raw);
          } else if (sentence.fix === parsed.faultyWord) {
            add("error", "fix-equals-word", `la correction vaut le mot marqué : « ${sentence.fix} »`, raw);
          }
          faultyIndexes.push(parsed.faultyTokenIndex);
        }

        // La correction remplace un token : le résultat doit rester une phrase.
        // On ne sait pas analyser le français, mais on sait repérer une
        // duplication — « je vous prie d'agréer » substitué à « veuillez »
        // devant « agréer » donnait « je vous prie d'agréer agréer ».
        if (!isCorrect && sentence.fix) {
          const tokens = tokenize(parsed.text);
          const suivant = tokens[parsed.faultyTokenIndex + 1]?.word.toLowerCase();
          const dernierDuFix = sentence.fix.trim().split(/\s+/).pop()?.toLowerCase().replace(/[.,;:!?]/g, "");
          if (suivant && dernierDuFix && suivant === dernierDuFix) {
            add(
              "error",
              "correction-duplique",
              `la correction se terminerait par « ${dernierDuFix} », juste avant le mot « ${suivant} »`,
              raw
            );
          }
          const precedent = tokens[parsed.faultyTokenIndex - 1]?.word.toLowerCase();
          const premierDuFix = sentence.fix.trim().split(/\s+/)[0]?.toLowerCase().replace(/[.,;:!?]/g, "");
          if (precedent && premierDuFix && precedent === premierDuFix) {
            add(
              "error",
              "correction-duplique",
              `la correction commencerait par « ${premierDuFix} », juste après le mot « ${precedent} »`,
              raw
            );
          }
        }

        const words = wordCount(parsed.text);
        if (words < MIN_WORDS || words > MAX_WORDS) {
          add("error", "bad-length", `${words} mots, attendu ${MIN_WORDS}-${MAX_WORDS}`, raw);
        }

        // La tokenisation doit retomber sur ses pieds : l'index stocké doit
        // désigner un token réel, sinon la phrase est inservable côté client.
        if (!isCorrect && tokenize(parsed.text)[parsed.faultyTokenIndex] === undefined) {
          add("error", "index-out-of-range", `index ${parsed.faultyTokenIndex} hors tokens`, raw);
        }

        const key = normalizeForDedupe(parsed.text);
        const owner = seenSentences.get(key);
        if (owner !== undefined) {
          add("error", "duplicate-sentence", `phrase déjà présente dans « ${owner} »`, raw);
        }
        seenSentences.set(key, rule.slug);

        const bucket = (byCategory[rule.category] ??= { rules: 0, sentences: 0 });
        bucket.sentences++;
      }

      (byCategory[rule.category] ??= { rules: 0, sentences: 0 }).rules++;
      byDifficulty[rule.difficulty] = (byDifficulty[rule.difficulty] ?? 0) + 1;

      /* ── répartition des positions ── */
      if (faultyIndexes.length >= 3 && new Set(faultyIndexes).size === 1) {
        add(
          "error",
          "same-position",
          `les ${faultyIndexes.length} phrases fautives placent la faute au même rang (${faultyIndexes[0]})`
        );
      } else if (faultyIndexes.length === 2 && new Set(faultyIndexes).size === 1) {
        add("warn", "same-position", `les 2 phrases fautives ont la faute au même rang (${faultyIndexes[0]})`);
      }
    }

    /* ── dictées ── */
    for (const d of batch.dictations ?? []) {
      dictationCount++;
      const label = d.text.slice(0, 40);
      // Dictation.text porte un index unique : un doublon serait avalé
      // silencieusement au seed, et le compte annoncé deviendrait faux.
      const dictationKey = normalizeForDedupe(d.text);
      const twin = seenDictations.get(dictationKey);
      if (twin !== undefined) {
        findings.push({ severity: "error", code: "duplicate-dictation", batch: batch.id, rule: label, message: `dictée déjà présente : « ${twin} »` });
      }
      seenDictations.set(dictationKey, label);
      // Une dictée reprise mot pour mot d'une phrase d'exercice n'apprend rien
      // de neuf : on l'a déjà lue à l'écran.
      if (seenSentences.has(dictationKey)) {
        findings.push({ severity: "warn", code: "dictation-echoes-sentence", batch: batch.id, rule: label, message: `reprend la phrase de la règle « ${seenSentences.get(dictationKey)} »` });
      }
      if (!d.theme?.trim()) {
        findings.push({ severity: "error", code: "dictation-no-theme", batch: batch.id, rule: label, message: "thème vide" });
      }
      if (![1, 2, 3].includes(d.difficulty)) {
        findings.push({ severity: "error", code: "dictation-difficulty", batch: batch.id, rule: label, message: `difficulté ${d.difficulty} hors de 1-3` });
      }
      if (d.ruleSlugs.length === 0) {
        findings.push({ severity: "warn", code: "dictation-no-rule", batch: batch.id, rule: label, message: "aucune règle associée" });
      }
      for (const slug of d.ruleSlugs) {
        if (!allSlugs.has(slug)) {
          findings.push({ severity: "error", code: "dictation-unknown-rule", batch: batch.id, rule: label, message: `règle associée inconnue : « ${slug} »` });
        }
      }
      if (/[[\]]/.test(d.text)) {
        findings.push({ severity: "error", code: "dictation-marker", batch: batch.id, rule: label, message: "une dictée ne porte pas de marqueur" });
      }
    }
  }

  return {
    findings,
    errorCount: findings.filter((f) => f.severity === "error").length,
    warnCount: findings.filter((f) => f.severity === "warn").length,
    ruleCount,
    sentenceCount,
    dictationCount,
    byCategory,
    byDifficulty,
    byStatus,
    thinRules: thinRules.sort((a, b) => a.sentences - b.sentences),
  };
}

/** Garde-fou appelé par le seed : rien n'entre en base sans être passé par là. */
export function assertValid(batches: ContentBatch[], strict = false): Report {
  const report = validateBatches(batches);
  const blocking = strict ? report.errorCount + report.warnCount : report.errorCount;
  if (blocking > 0) {
    const lines = report.findings
      .filter((f) => strict || f.severity === "error")
      .slice(0, 40)
      .map((f) => `  [${f.code}] ${f.rule}${f.sentence ? ` — « ${f.sentence} »` : ""} : ${f.message}`);
    throw new Error(`Contenu invalide (${blocking} anomalie(s) bloquante(s)) :\n${lines.join("\n")}`);
  }
  return report;
}

export type { SeedRule };
