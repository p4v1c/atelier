/**
 * GET /api/tts/:dictationId?vitesse=lent
 *
 * Rend la dictée lue par une voix neuronale, en WAV.
 *
 * La route n'accepte PAS de texte arbitraire : elle prend l'identifiant d'une
 * dictée et lit le texte en base. Sans cela, elle deviendrait un service de
 * synthèse ouvert à tout venant.
 *
 * Elle est publique, comme /api/public/content, parce que le mode invité doit
 * pouvoir écouter sans compte. Répond 503 quand Piper n'est pas installé : le
 * client retombe alors sur la voix du navigateur.
 */
import { fail } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { ECHELLES, etatTts, synthetiser, type Vitesse } from "@/lib/server/tts";

export async function GET(request: Request, context: { params: Promise<{ id: string }> }): Promise<Response> {
  const { id } = await context.params;

  if (!etatTts().disponible) {
    return fail(503, "tts_indisponible", "Aucune voix neuronale n'est installée sur ce serveur.");
  }

  const url = new URL(request.url);
  const demandee = url.searchParams.get("vitesse") ?? "moyen";
  const vitesse: Vitesse = demandee in ECHELLES ? demandee : "moyen";

  const dictation = await prisma.dictation.findFirst({
    where: { id, status: "active" },
    select: { text: true },
  });
  if (!dictation) return fail(404, "not_found", "Dictée introuvable.");

  const wav = await synthetiser(dictation.text, vitesse);
  if (!wav) return fail(503, "tts_indisponible", "La synthèse a échoué.");

  return new Response(new Uint8Array(wav), {
    headers: {
      "content-type": "audio/wav",
      "content-length": String(wav.byteLength),
      // Le texte ne change pas : le navigateur peut garder l'audio longtemps.
      "cache-control": "public, max-age=86400, immutable",
    },
  });
}
