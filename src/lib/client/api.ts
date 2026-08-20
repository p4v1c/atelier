/**
 * Client HTTP. Une seule fonction, un seul endroit où traiter les erreurs.
 */
export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
    readonly details?: Record<string, string[]>
  ) {
    super(message);
  }
}

export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(path, {
    ...init,
    headers: {
      ...(init.body ? { "content-type": "application/json" } : {}),
      ...init.headers,
    },
    credentials: "same-origin",
  });

  const text = await response.text();
  const body = text ? (JSON.parse(text) as unknown) : null;

  if (!response.ok) {
    const error = (body as { error?: { code: string; message: string; details?: Record<string, string[]> } })?.error;
    throw new ApiError(
      response.status,
      error?.code ?? "unknown",
      error?.message ?? "Quelque chose s'est mal passé.",
      error?.details
    );
  }
  return body as T;
}

export const apiGet = <T>(path: string) => api<T>(path);
export const apiPost = <T>(path: string, body?: unknown) =>
  api<T>(path, { method: "POST", body: body === undefined ? undefined : JSON.stringify(body) });
