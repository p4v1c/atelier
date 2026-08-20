/**
 * Forme unique des réponses d'API.
 *
 * Une erreur, c'est { error: { code, message, details? } }. Le code est stable
 * et destiné au client ; le message est en français, affichable tel quel.
 */
export type ApiError = {
  error: { code: string; message: string; details?: Record<string, string[]> };
};

export function json<T>(data: T, init: ResponseInit = {}): Response {
  const headers = new Headers(init.headers);
  headers.set("content-type", "application/json; charset=utf-8");
  // Aucune réponse d'API authentifiée ne doit finir dans un cache partagé.
  headers.set("cache-control", "no-store");
  return new Response(JSON.stringify(data), { ...init, headers });
}

export function fail(
  status: number,
  code: string,
  message: string,
  details?: Record<string, string[]>,
  init: ResponseInit = {}
): Response {
  const body: ApiError = { error: { code, message, ...(details ? { details } : {}) } };
  return json(body, { ...init, status });
}

export function withCookie(response: Response, cookie: string | null): Response {
  if (!cookie) return response;
  const headers = new Headers(response.headers);
  headers.append("set-cookie", cookie);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

/** Corps JSON, ou null si le corps est absent ou illisible. */
export async function readJson(request: Request): Promise<unknown | null> {
  try {
    return await request.json();
  } catch {
    return null;
  }
}
