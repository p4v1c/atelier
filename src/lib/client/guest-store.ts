/**
 * Progression du mode invité, dans localStorage.
 *
 * Mêmes champs que SkillProgress en base, pour que le transfert vers un compte
 * ne soit qu'une recopie. La clé de rattachement est le SLUG, pas
 * l'identifiant : les identifiants changent à chaque reseed, pas les slugs.
 *
 * Le format v2 range la progression PAR MODULE. Une sauvegarde v1, écrite quand
 * le français était la seule matière, est reprise telle quelle et rangée sous
 * « francais » : personne ne perd sa progression au passage.
 */
const KEY = "la-regle:invite:v1";

export type GuestSkill = {
  slug: string;
  box: number;
  dueAtCounter: number;
  seenCount: number;
  correctCount: number;
  lastExerciseId: string | null;
};

export type GuestModuleState = {
  skills: Record<string, GuestSkill>;
  /** Meilleur score par dictée. */
  dictations: Record<string, number>;
};

export type GuestState = {
  version: 2;
  answerCounter: number;
  placementDone: boolean;
  seriesLength: number;
  modules: Record<string, GuestModuleState>;
  sessions: { total: number; correct: number; at: string; module?: string }[];
};

/** Ancien format, à ne plus écrire — seulement à relire. */
type GuestStateV1 = {
  version: 1;
  answerCounter: number;
  placementDone: boolean;
  seriesLength: number;
  rules: Record<string, { slug: string; box: number; dueAtCounter: number; seenCount: number; correctCount: number; lastSentenceId: string | null }>;
  dictations: Record<string, number>;
  sessions: { total: number; correct: number; at: string }[];
};

export const MODULE_PAR_DEFAUT = "francais";

export function emptyGuestState(): GuestState {
  return {
    version: 2,
    answerCounter: 0,
    placementDone: false,
    seriesLength: 20,
    modules: {},
    sessions: [],
  };
}

export function emptyModuleState(): GuestModuleState {
  return { skills: {}, dictations: {} };
}

/** Reprend une sauvegarde v1 sans rien perdre : tout appartenait au français. */
function migrerV1(v1: GuestStateV1): GuestState {
  const skills: Record<string, GuestSkill> = {};
  for (const [slug, r] of Object.entries(v1.rules ?? {})) {
    skills[slug] = {
      slug: r.slug ?? slug,
      box: r.box,
      dueAtCounter: r.dueAtCounter,
      seenCount: r.seenCount,
      correctCount: r.correctCount,
      lastExerciseId: r.lastSentenceId ?? null,
    };
  }
  return {
    version: 2,
    answerCounter: v1.answerCounter ?? 0,
    placementDone: v1.placementDone ?? false,
    seriesLength: v1.seriesLength ?? 20,
    modules: { [MODULE_PAR_DEFAUT]: { skills, dictations: v1.dictations ?? {} } },
    sessions: (v1.sessions ?? []).map((s) => ({ ...s, module: MODULE_PAR_DEFAUT })),
  };
}

export function loadGuestState(): GuestState {
  if (typeof window === "undefined") return emptyGuestState();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return emptyGuestState();
    const parsed = JSON.parse(raw) as GuestState | GuestStateV1;
    if (parsed.version === 1) return migrerV1(parsed);
    if (parsed.version !== 2) return emptyGuestState();
    return { ...emptyGuestState(), ...parsed, modules: parsed.modules ?? {} };
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

/** L'état d'un module, créé à la volée s'il n'a jamais servi. */
export function guestModule(state: GuestState, moduleId: string): GuestModuleState {
  return (state.modules[moduleId] ??= emptyModuleState());
}

export function guestSkill(state: GuestState, moduleId: string, slug: string): GuestSkill {
  return (
    guestModule(state, moduleId).skills[slug] ?? {
      slug,
      box: 0,
      dueAtCounter: 0,
      seenCount: 0,
      correctCount: 0,
      lastExerciseId: null,
    }
  );
}

export function hasGuestProgress(state: GuestState): boolean {
  return Object.values(state.modules).some((m) => Object.keys(m.skills).length > 0);
}

/** Charge utile attendue par /api/auth/register pour la reprise. */
export function toTransferPayload(state: GuestState) {
  return {
    answerCounter: state.answerCounter,
    placementDone: state.placementDone,
    rules: Object.values(state.modules).flatMap((m) =>
      Object.values(m.skills).map((r) => ({
        slug: r.slug,
        box: r.box,
        dueAtCounter: r.dueAtCounter,
        seenCount: r.seenCount,
        correctCount: r.correctCount,
      }))
    ),
  };
}
