import { z } from "zod";
import { SERIES_SIZES, TEST_SIZE } from "./scheduler";

export const modeSchema = z
  .enum(["test", "training", "targeted", "weakness", "skill"])
  .default("training");

/** Identifiant de module : minuscules, chiffres et tirets. */
export const moduleIdSchema = z
  .string()
  .trim()
  .regex(/^[a-z0-9-]{1,40}$/, "Identifiant de module invalide.")
  .default("francais");

/** Longueurs proposées par l'interface, plus celle du test. Rien d'autre. */
const allowedSizes = [...SERIES_SIZES, TEST_SIZE] as number[];

export const nextSessionQuerySchema = z.object({
  size: z.coerce.number().int().refine((n) => allowedSizes.includes(n), {
    message: `Longueur de série non autorisée (${allowedSizes.join(", ")}).`,
  }),
  category: z.string().trim().min(1).max(60).nullable().default(null),
  /** Slug de la compétence à travailler seule ; requis par le mode « skill ». */
  skill: z.string().trim().min(1).max(80).nullable().default(null),
  mode: modeSchema,
  moduleId: moduleIdSchema,
}).refine((q) => q.mode !== "skill" || q.skill !== null, {
  message: "Ce mode demande le slug d'une compétence.",
  path: ["skill"],
});

/**
 * La réponse est libre de forme : un rang pour un repérage ou un QCM, un
 * booléen pour une carte mémoire, une chaîne pour une traduction. Le serveur
 * borne ce qu'il accepte — le type d'exercice décide ensuite du sens.
 */
export const answerValueSchema = z.union([
  z.number().int().min(-1).max(500),
  z.boolean(),
  z.string().max(500),
  z.null(),
]);

export const answerSchema = z.object({
  studySessionId: z.string().min(1).max(60),
  exerciseId: z.string().min(1).max(60),
  answer: answerValueSchema,
});

export const finishSchema = z.object({ studySessionId: z.string().min(1).max(60) });

export const dictationAttemptSchema = z.object({
  text: z.string().max(2_000),
});
