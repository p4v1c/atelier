/**
 * Progression du mode invité, dans localStorage.
 *
 * Mêmes champs que RuleProgress en base, pour que le transfert vers un compte
 * ne soit qu'une recopie. La clé de rattachement est le SLUG de la règle, pas
 * son identifiant : les identifiants changent à chaque reseed, pas les slugs.
 */
const KEY = "la-regle:invite:v1";

export type GuestRule = {
  slug: string;
  box: number;
  dueAtCounter: number;
  seenCount: number;
  correctCount: number;
  lastSentenceId: string | null;
};

export type GuestState = {
  version: 1;
  answerCounter: number;
  placementDone: boolean;
  seriesLength: number;
  rules: Record<string, GuestRule>;
  dictations: Record<string, number>;
  sessions: { total: number; correct: number; at: string }[];
};

export function emptyGuestState(): GuestState {
  return {
    version: 1,
    answerCounter: 0,
    placementDone: false,
    seriesLength: 20,
    rules: {},
    dictations: {},
    sessions: [],
  };
}

export function loadGuestState(): GuestState {
  if (typeof window === "undefined") return emptyGuestState();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return emptyGuestState();
    const parsed = JSON.parse(raw) as GuestState;
    if (parsed.version !== 1) return emptyGuestState();
    return { ...emptyGuestState(), ...parsed };
  } catch {
    // localStorage refusé (navigation privée, réglages stricts) : on continue
    // sans mémoire plutôt que d'empêcher de jouer.
    return emptyGuestState();
  }
}

export function saveGuestState(state: GuestState): boolean {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function clearGuestState(): void {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* rien à faire */
  }
}

export function guestRule(state: GuestState, slug: string): GuestRule {
  return (
    state.rules[slug] ?? { slug, box: 0, dueAtCounter: 0, seenCount: 0, correctCount: 0, lastSentenceId: null }
  );
}

export function hasGuestProgress(state: GuestState): boolean {
  return Object.keys(state.rules).length > 0;
}

/** Charge utile attendue par /api/auth/register pour la reprise. */
export function toTransferPayload(state: GuestState) {
  return {
    answerCounter: state.answerCounter,
    placementDone: state.placementDone,
    rules: Object.values(state.rules).map((r) => ({
      slug: r.slug,
      box: r.box,
      dueAtCounter: r.dueAtCounter,
      seenCount: r.seenCount,
      correctCount: r.correctCount,
    })),
  };
}
