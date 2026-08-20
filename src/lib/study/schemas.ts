import { z } from "zod";
import { SERIES_SIZES, TEST_SIZE } from "./scheduler";

export const modeSchema = z.enum(["test", "training", "targeted", "weakness", "rule"]).default("training");

/** Longueurs proposées par l'interface, plus celle du test. Rien d'autre. */
const allowedSizes = [...SERIES_SIZES, TEST_SIZE] as number[];

export const nextSessionQuerySchema = z.object({
  size: z.coerce.number().int().refine((n) => allowedSizes.includes(n), {
    message: `Longueur de série non autorisée (${allowedSizes.join(", ")}).`,
  }),
  category: z.string().trim().min(1).max(60).nullable().default(null),
  /** Slug de la règle à travailler seule ; requis par le mode « rule ». */
  rule: z.string().trim().min(1).max(80).nullable().default(null),
  mode: modeSchema,
}).refine((q) => q.mode !== "rule" || q.rule !== null, {
  message: "Le mode « rule » demande le slug d'une règle.",
  path: ["rule"],
});

export const answerSchema = z.object({
  studySessionId: z.string().min(1).max(60),
  sentenceId: z.string().min(1).max(60),
  /** -1 pour « Aucune faute ». */
  answerIndex: z.number().int().min(-1).max(200),
});

export const finishSchema = z.object({ studySessionId: z.string().min(1).max(60) });

export const dictationAttemptSchema = z.object({
  text: z.string().max(2_000),
});
