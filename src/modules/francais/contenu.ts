/**
 * Le contenu du module Français.
 *
 * Il reste écrit au format d'origine — des règles et des phrases à crochets.
 * C'est un bon format pour rédiger de l'orthographe, et 660 Ko de contenu relu
 * n'ont aucune raison d'être réécrits. La traduction vers le format générique
 * du moteur se fait ici, en un seul endroit.
 */
import type { ContentBatch } from "../../lib/content";
import { parseMarkedSentence } from "../../lib/tokenize";
import { loadAllBatches } from "../../../prisma/seed/index";
import { spotError, type SpotErrorPayload } from "../kinds/spot-error";
import type { ModuleBatch, SeedSkill } from "../types";

/** Traduit un lot « règles et phrases » vers le format du moteur. */
export function convertirLot(batch: ContentBatch): ModuleBatch {
  const skills: SeedSkill[] = batch.rules.map((rule) => ({
    slug: rule.slug,
    category: rule.category,
    title: rule.title,
    statement: rule.statement,
    tip: rule.tip,
    difficulty: rule.difficulty,
    status: rule.status,
    exercises: rule.sentences.map((s) => {
      const { text, faultyTokenIndex } = parseMarkedSentence(s.marked);
      const payload: SpotErrorPayload = { text, faultyTokenIndex, correction: s.fix };
      return {
        kind: spotError.id,
        payload,
        difficulty: s.difficulty ?? rule.difficulty,
        status: s.status ?? rule.status,
        batch: s.batch,
      };
    }),
  }));

  return {
    id: batch.id,
    skills,
    dictations: batch.dictations?.map((d) => ({
      text: d.text,
      theme: d.theme,
      difficulty: d.difficulty,
      skillSlugs: d.ruleSlugs,
      status: d.status,
    })),
  };
}

export function chargerContenuFrancais(): ModuleBatch[] {
  return loadAllBatches().map(convertirLot);
}
