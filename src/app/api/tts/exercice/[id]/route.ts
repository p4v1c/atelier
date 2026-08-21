/**
 * GET /api/tts/exercice/:id?vitesse=moyen
 *
 * Rend l'énoncé d'un exercice lu par une voix neuronale, dans SA langue.
 *
 * Comme pour les dictées, la route n'accepte PAS de texte arbitraire : elle
 * prend l'identifiant d'un exercice et lit sa charge utile en base. Sans cela,
 * elle deviendrait un service de synthèse ouvert à tout venant.
 *
 * Elle existe parce que la voix du navigateur ne suffisait pas : sous Linux,
 * c'est espeak, un synthétiseur à formants qui apprend une mauvaise
 * prononciation. Les dictées passaient déjà par Piper ; les cartes, l'écoute
 * et la prononciation restaient au robot. C'était incohérent, et ça s'entendait.
 */
import { fail } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { ECHELLES, etatTts, synthetiser, voixDisponiblePour, type Vitesse } from "@/lib/server/tts";

type Lisible = { recto?: unknown; verso?: unknown; langue?: unknown };

/**
 * Quel côté de la carte est dans la langue étudiée.
 *
 * Pour une carte mémoire, une écoute ou une prononciation, c'est le recto.
 * Pour une traduction, le recto est en FRANÇAIS et c'est le verso qu'il faut
 * lire — sans cette distinction, la route lirait du français avec une voix
 * anglaise, ce qui apprend exactement le contraire de ce qu'on veut.
 */
function texteEtranger(kind: string, payload: Lisible): string {
  const cote = kind === "traduction" ? payload.verso : payload.recto;
  return typeof cote === "string" ? cote.trim() : "";
}

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
): Promise<Response> {
  const { id } = await context.params;

  if (!etatTts().disponible) {
    return fail(503, "tts_indisponible", "Aucune voix neuronale n'est installée sur ce serveur.");
  }

  const url = new URL(request.url);
  const demandee = url.searchParams.get("vitesse") ?? "moyen";
  const vitesse: Vitesse = demandee in ECHELLES ? demandee : "moyen";

  const exercice = await prisma.exercise.findFirst({
    where: { id, status: { in: ["active", "disputed"] } },
    select: { kind: true, payload: true },
  });
  if (!exercice) return fail(404, "not_found", "Exercice introuvable.");

  const payload = exercice.payload as Lisible;
  const texte = texteEtranger(exercice.kind, payload);
  const langue = typeof payload.langue === "string" ? payload.langue : "";

  // Un exercice sans texte étranger n'a rien à faire lire : c'est le cas du
  // repérage de faute et du QCM, qui se lisent à l'écran.
  if (!texte || !langue) return fail(404, "rien_a_lire", "Cet exercice n'a rien à lire.");

  // Lire de l'anglais avec une voix française apprendrait à mal prononcer :
  // mieux vaut renvoyer 503 et laisser le client décider.
  if (!voixDisponiblePour(langue)) {
    return fail(503, "tts_indisponible", `Aucune voix « ${langue} » sur ce serveur.`);
  }

  const wav = await synthetiser(texte, vitesse, langue);
  if (!wav) return fail(503, "tts_indisponible", "La synthèse a échoué.");

  return new Response(new Uint8Array(wav), {
    headers: {
      "content-type": "audio/wav",
      "content-length": String(wav.byteLength),
      // Le texte d'un exercice ne change pas : le cache navigateur peut tenir.
      "cache-control": "public, max-age=86400",
    },
  });
}
