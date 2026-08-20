/**
 * Validation des entrées d'authentification.
 *
 * Tout ce qui vient du client passe par ici. Aucune route ne lit un champ brut.
 */
import { z } from "zod";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "./password";

export const emailSchema = z
  .string()
  .trim()
  .min(3, "Adresse trop courte.")
  .max(254, "Adresse trop longue.")
  .email("Adresse électronique invalide.");

export const passwordSchema = z
  .string()
  .min(MIN_PASSWORD_LENGTH, `Le mot de passe doit faire au moins ${MIN_PASSWORD_LENGTH} caractères.`)
  .max(MAX_PASSWORD_LENGTH, `Le mot de passe ne peut pas dépasser ${MAX_PASSWORD_LENGTH} caractères.`);

export const pseudoSchema = z
  .string()
  .trim()
  .min(1, "Le pseudo ne peut pas être vide.")
  .max(40, "Le pseudo ne peut pas dépasser 40 caractères.");

/**
 * Progression d'un invité, envoyée à l'inscription.
 *
 * Elle vient du navigateur : le serveur ne peut pas la vérifier, il peut
 * seulement la borner. Chaque valeur est plafonnée, les règles inconnues sont
 * ignorées et le nombre de réussites ne peut pas dépasser le nombre de vues.
 * L'enjeu est faible — c'est sa propre progression — mais rien n'entre en base
 * sans avoir été passé au tamis.
 */
export const guestRuleProgressSchema = z.object({
  slug: z.string().trim().min(1).max(80),
  box: z.number().int().min(0).max(5),
  dueAtCounter: z.number().int().min(0).max(1_000_000),
  seenCount: z.number().int().min(0).max(100_000),
  correctCount: z.number().int().min(0).max(100_000),
});

export const guestProgressSchema = z.object({
  answerCounter: z.number().int().min(0).max(1_000_000).default(0),
  placementDone: z.boolean().default(false),
  rules: z.array(guestRuleProgressSchema).max(5_000).default([]),
});

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  pseudo: pseudoSchema,
  guestProgress: guestProgressSchema.optional(),
});

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Mot de passe requis.").max(MAX_PASSWORD_LENGTH),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Mot de passe actuel requis.").max(MAX_PASSWORD_LENGTH),
  newPassword: passwordSchema,
});

export type GuestProgress = z.infer<typeof guestProgressSchema>;

/** Aplatit une erreur Zod en { champ: [messages] }, prêt pour l'affichage. */
export function fieldErrors(error: z.ZodError): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const key = issue.path.join(".") || "_";
    (out[key] ??= []).push(issue.message);
  }
  return out;
}

/** Clé d'unicité de l'adresse : insensible à la casse. */
export function emailKey(email: string): string {
  return email.trim().toLowerCase();
}
