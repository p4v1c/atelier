/**
 * GET /api/tts
 *
 * Dit simplement si une voix neuronale est disponible, et laquelle. Le client
 * interroge cette route au chargement pour choisir entre la voix du serveur et
 * celle du navigateur.
 */
import { json } from "@/lib/http";
import { etatTts } from "@/lib/server/tts";

export async function GET(): Promise<Response> {
  const etat = etatTts();
  const reponse = json(etat);
  reponse.headers.set("cache-control", "public, max-age=60");
  return reponse;
}
