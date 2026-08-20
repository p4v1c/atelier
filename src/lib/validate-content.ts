/**
 * Le validateur de contenu.
 *
 * Il ne connaît aucune matière. Il vérifie ce qui est vrai de tout module —
 * identifiants uniques, catégories déclarées, difficultés dans les clous,
 * exercices non jumeaux — et délègue le reste :
 *
 *   · ExerciseKind.validate()      → ce qui se juge sur un exercice seul
 *   · LearningModule.validateSkill() → ce qui demande de voir la compétence entière
 *
 * Deux niveaux :
 *   - `error` : bloque le seed.
 *   - `warn`  : n'empêche rien, mais figure au compte-rendu.
 *
 * `--strict` transforme les avertissements en erreurs.
 */
import { normalizeForDedupe } from "./tokenize";
import { kindOf } from "../modules";
import type { LearningModule, ModuleBatch } from "../modules/types";

export const MIN_EXERCISES = 2;
export const TARGET_EXERCISES = 5;

export type Severity = "error" | "warn";

export type Finding = {
  severity: Severity;
  code: string;
  batch: string;
  /** Slug de la compétence, ou libellé de la dictée. */
  skill: string;
  /** L'exercice en cause, résumé. */
  exercise?: string;
  message: string;
};

export type Report = {
  module: string;
  findings: Finding[];
  errorCount: number;
  warnCount: number;
  skillCount: number;
  exerciseCount: number;
  dictationCount: number;
  byCategory: Record<string, { skills: number; exercises: number }>;
  byDifficulty: Record<number, number>;
  byStatus: Record<string, number>;
  byKind: Record<string, number>;
  thinSkills: { skill: string; exercises: number }[];
};

const ALLOWED_TAGS = /<(?!\/?b>)[^>]*>/; // tout sauf <b> et </b>

/** Un résumé lisible d'une charge utile, pour les messages d'anomalie. */
function resumer(payload: unknown): string {
  if (payload && typeof payload === "object") {
    const p = payload as Record<string, unknown>;
    for (const champ of ["text", "question", "recto"]) {
      const v = p[champ];
      if (typeof v === "string") return v.length > 70 ? `${v.slice(0, 70)}…` : v;
    }
  }
  return JSON.stringify(payload).slice(0, 70);
}

export function validateModule(mod: LearningModule, batches: ModuleBatch[]): Report {
  const findings: Finding[] = [];
  const seenSlugs = new Map<string, string>();
  const seenFingerprints = new Map<string, string>();
  const seenDictations = new Map<string, string>();
  const byCategory: Report["byCategory"] = {};
  const byDifficulty: Record<number, number> = {};
  const byStatus: Record<string, number> = {};
  const byKind: Record<string, number> = {};
  const thinSkills: Report["thinSkills"] = [];
  let exerciseCount = 0;
  let skillCount = 0;
  let dictationCount = 0;

  const categoryNames = new Set(mod.categories.map((c) => c.name));
  const nonNotees = new Set(mod.categoriesNonNotees ?? []);
  const allSlugs = new Set(batches.flatMap((b) => b.skills.map((s) => s.slug)));

  for (const batch of batches) {
    for (const skill of batch.skills) {
      skillCount++;
      const add = (severity: Severity, code: string, message: string, exercise?: string) =>
        findings.push({ severity, code, batch: batch.id, skill: skill.slug, exercise, message });

      /* ── identité et métadonnées ── */
      const previous = seenSlugs.get(skill.slug);
      if (previous !== undefined) {
        add("error", "duplicate-slug", `identifiant déjà utilisé dans le lot « ${previous} »`);
      }
      seenSlugs.set(skill.slug, batch.id);

      if (!categoryNames.has(skill.category)) {
        add("error", "unknown-category", `catégorie inconnue dans ce module : « ${skill.category} »`);
      }
      if (![1, 2, 3].includes(skill.difficulty)) {
        add("error", "bad-difficulty", `difficulté ${skill.difficulty} hors de 1-3`);
      }
      if (!skill.statement?.trim()) add("error", "empty-statement", "énoncé vide");
      if (!skill.tip?.trim()) add("error", "empty-tip", "astuce vide");
      if (!skill.title?.trim()) add("error", "empty-title", "titre vide");
      if (skill.statement && ALLOWED_TAGS.test(skill.statement)) {
        add("error", "html-not-allowed", "l'énoncé contient une balise autre que <b>");
      }

      const status = skill.status ?? "active";
      byStatus[status] = (byStatus[status] ?? 0) + 1;
      const nonNotee = nonNotees.has(skill.category);
      if (nonNotee && status !== "disputed") {
        add("error", "disputed-status", `catégorie non notée « ${skill.category} » sans status "disputed"`);
      }
      if (!nonNotee && status === "disputed") {
        add("error", "disputed-category", `status "disputed" hors d'une catégorie non notée`);
      }

      /* ── exercices ── */
      if (skill.exercises.length < MIN_EXERCISES) {
        add("error", "too-few-exercises", `${skill.exercises.length} exercice(s), minimum ${MIN_EXERCISES}`);
      }
      if (skill.exercises.length < TARGET_EXERCISES) {
        add("warn", "thin-skill", `${skill.exercises.length} exercices, cible ${TARGET_EXERCISES}`);
        thinSkills.push({ skill: skill.slug, exercises: skill.exercises.length });
      }

      for (const ex of skill.exercises) {
        exerciseCount++;
        byKind[ex.kind] = (byKind[ex.kind] ?? 0) + 1;
        const label = resumer(ex.payload);

        let kind;
        try {
          kind = kindOf(mod, ex.kind);
        } catch (e) {
          add("error", "unknown-kind", e instanceof Error ? e.message : String(e), label);
          continue;
        }

        for (const message of kind.validate?.(ex.payload) ?? []) {
          add("error", `${ex.kind}:invalide`, message, label);
        }

        if (ex.difficulty !== undefined && ![1, 2, 3].includes(ex.difficulty)) {
          add("error", "bad-difficulty", `difficulté d'exercice ${ex.difficulty} hors de 1-3`, label);
        }

        // L'empreinte porte un index unique en base : un doublon serait avalé
        // en silence au seed, et le compte annoncé deviendrait faux.
        let fingerprint: string;
        try {
          fingerprint = kind.fingerprint(ex.payload);
        } catch (e) {
          add("error", "bad-fingerprint", e instanceof Error ? e.message : String(e), label);
          continue;
        }
        const owner = seenFingerprints.get(fingerprint);
        if (owner !== undefined) {
          add("error", "duplicate-exercise", `exercice déjà présent dans « ${owner} »`, label);
        }
        seenFingerprints.set(fingerprint, skill.slug);

        (byCategory[skill.category] ??= { skills: 0, exercises: 0 }).exercises++;
      }

      /* ── contrôles propres au module ── */
      for (const f of mod.validateSkill?.(skill) ?? []) {
        add(f.severity, f.code, f.message, f.exercise);
      }

      (byCategory[skill.category] ??= { skills: 0, exercises: 0 }).skills++;
      byDifficulty[skill.difficulty] = (byDifficulty[skill.difficulty] ?? 0) + 1;
    }

    /* ── dictées ── */
    for (const d of batch.dictations ?? []) {
      dictationCount++;
      const label = d.text.slice(0, 40);
      const push = (severity: Severity, code: string, message: string) =>
        findings.push({ severity, code, batch: batch.id, skill: label, message });

      const key = normalizeForDedupe(d.text);
      const twin = seenDictations.get(key);
      if (twin !== undefined) push("error", "duplicate-dictation", `dictée déjà présente : « ${twin} »`);
      seenDictations.set(key, label);

      // Une dictée reprise mot pour mot d'un exercice n'apprend rien de neuf :
      // on l'a déjà lue à l'écran.
      const jumelle = seenFingerprints.get(key);
      if (jumelle !== undefined) {
        push("warn", "dictation-echoes-exercise", `reprend l'exercice de « ${jumelle} »`);
      }
      if (!d.theme?.trim()) push("error", "dictation-no-theme", "thème vide");
      if (![1, 2, 3].includes(d.difficulty)) {
        push("error", "dictation-difficulty", `difficulté ${d.difficulty} hors de 1-3`);
      }
      if (d.skillSlugs.length === 0) push("warn", "dictation-no-skill", "aucune compétence associée");
      for (const slug of d.skillSlugs) {
        if (!allSlugs.has(slug)) {
          push("error", "dictation-unknown-skill", `compétence associée inconnue : « ${slug} »`);
        }
      }
      if (/[[\]]/.test(d.text)) push("error", "dictation-marker", "une dictée ne porte pas de marqueur");
    }
  }

  return {
    module: mod.id,
    findings,
    errorCount: findings.filter((f) => f.severity === "error").length,
    warnCount: findings.filter((f) => f.severity === "warn").length,
    skillCount,
    exerciseCount,
    dictationCount,
    byCategory,
    byDifficulty,
    byStatus,
    byKind,
    thinSkills: thinSkills.sort((a, b) => a.exercises - b.exercises),
  };
}

/** Garde-fou appelé par le seed : rien n'entre en base sans être passé par là. */
export function assertValid(mod: LearningModule, batches: ModuleBatch[], strict = false): Report {
  const report = validateModule(mod, batches);
  const blocking = strict ? report.errorCount + report.warnCount : report.errorCount;
  if (blocking > 0) {
    const lines = report.findings
      .filter((f) => strict || f.severity === "error")
      .slice(0, 40)
      .map((f) => `  [${f.code}] ${f.skill}${f.exercise ? ` — « ${f.exercise} »` : ""} : ${f.message}`);
    throw new Error(
      `Contenu invalide dans « ${mod.id} » (${blocking} anomalie(s) bloquante(s)) :\n${lines.join("\n")}`
    );
  }
  return report;
}
