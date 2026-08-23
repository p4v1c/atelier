/**
 * Lecture à voix haute des dictées.
 *
 * Quatre pièges de l'API Web Speech, tous rencontrés ici :
 *
 *  1. `getVoices()` renvoie une liste VIDE au premier appel : les voix sont
 *     chargées de façon asynchrone. Le code d'origine cherchait donc une voix
 *     française dans un tableau vide, n'en trouvait jamais, et laissait le
 *     navigateur lire avec sa voix par défaut — souvent anglaise, parfois
 *     muette. C'était la cause du « on n'entend rien ».
 *  2. `cancel()` suivi immédiatement de `speak()` avale l'énoncé sous Chromium :
 *     il faut laisser passer un tour de boucle.
 *  3. Chromium coupe tout énoncé de plus d'une quinzaine de secondes. Sur un
 *     texte long, il faut découper par phrases et relancer la file.
 *  4. La file se met en pause toute seule au bout d'un moment : un
 *     pause/resume périodique la maintient en vie.
 */

import { HORS_LIGNE } from "../hors-ligne";

export type VoixInfo = {
  /** Voix retenue, ou null si le système n'en propose aucune. */
  voix: SpeechSynthesisVoice | null;
  /** true si la voix retenue parle bien français. */
  francaise: boolean;
  /** Nombre total de voix disponibles, pour diagnostiquer. */
  total: number;
};

const DISPONIBLE = typeof window !== "undefined" && "speechSynthesis" in window;

export function synthesePossible(): boolean {
  return DISPONIBLE;
}

/**
 * Attend que le navigateur ait publié ses voix.
 *
 * L'événement `voiceschanged` ne se déclenche pas partout : on complète par
 * une scrutation courte, et on abandonne au bout de trois secondes plutôt que
 * de laisser l'utilisateur devant un bouton qui ne répond pas.
 */
export function chargerVoix(delaiMax = 3000): Promise<SpeechSynthesisVoice[]> {
  if (!DISPONIBLE) return Promise.resolve([]);

  const deja = speechSynthesis.getVoices();
  if (deja.length > 0) return Promise.resolve(deja);

  return new Promise((resolve) => {
    let fini = false;
    const terminer = (force = false) => {
      if (fini) return;
      // `voiceschanged` se déclenche parfois AVANT que la liste soit remplie :
      // résoudre à ce moment-là rendrait un tableau vide et ferait conclure à
      // tort qu'aucune voix n'est installée. On n'accepte donc une réponse vide
      // qu'au terme du délai d'attente.
      const voix = speechSynthesis.getVoices();
      if (voix.length === 0 && !force) return;
      fini = true;
      clearInterval(scrutation);
      clearTimeout(abandon);
      speechSynthesis.removeEventListener("voiceschanged", surChangement);
      resolve(voix);
    };
    const surChangement = () => terminer(false);
    speechSynthesis.addEventListener("voiceschanged", surChangement);
    const scrutation = setInterval(() => terminer(false), 100);
    const abandon = setTimeout(() => terminer(true), delaiMax);
  });
}

/**
 * Choisit la meilleure voix disponible pour une langue.
 *
 * `etiquette` est une étiquette BCP-47 : "fr-FR", "en-GB", "es-ES". On tente
 * d'abord la variante régionale exacte installée localement, puis la même sans
 * exigence de localité, puis n'importe quelle voix de la même langue (fr-BE,
 * en-US…). En dernier recours, on rend la voix par défaut en signalant qu'elle
 * n'est PAS dans la bonne langue — l'appelant doit alors le dire à
 * l'utilisateur plutôt que de lui lire de l'anglais avec un accent français.
 */
export function choisirVoix(voix: SpeechSynthesisVoice[], etiquette = "fr-FR"): VoixInfo {
  const cible = etiquette.toLowerCase();
  const langue = cible.split("-")[0]!;
  const memeLangue = voix.filter((v) => v.lang?.toLowerCase().startsWith(langue));
  // espeak-ng publie des milliers de variantes nommées « French+Alex »,
  // « French+Zac »… La voix de base, sans « + », est la plus neutre.
  const base = (v: SpeechSynthesisVoice) => !v.name.includes("+");
  const exacte = (v: SpeechSynthesisVoice) => v.lang?.toLowerCase().startsWith(cible);
  const parPreference = [
    memeLangue.find((v) => exacte(v) && base(v) && v.localService),
    memeLangue.find((v) => exacte(v) && base(v)),
    memeLangue.find(exacte),
    memeLangue.find((v) => base(v) && v.localService),
    memeLangue.find(base),
    memeLangue[0],
  ];
  const retenue = parPreference.find(Boolean) ?? null;
  if (retenue) return { voix: retenue, francaise: true, total: voix.length };
  return { voix: voix.find((v) => v.default) ?? voix[0] ?? null, francaise: false, total: voix.length };
}

/**
 * Découpe un texte en énoncés courts.
 *
 * On coupe aux fins de phrase, puis, si une phrase reste trop longue, aux
 * virgules. Le seuil de 180 caractères garde chaque énoncé bien en deçà de la
 * limite où Chromium décroche.
 */
export function decouperPourLecture(texte: string, seuil = 180): string[] {
  const phrases = texte
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?…])\s+/)
    .filter(Boolean);

  const morceaux: string[] = [];
  for (const phrase of phrases) {
    if (phrase.length <= seuil) {
      morceaux.push(phrase);
      continue;
    }
    let courant = "";
    for (const bout of phrase.split(/(?<=,)\s+/)) {
      if (courant && (courant + " " + bout).length > seuil) {
        morceaux.push(courant);
        courant = bout;
      } else {
        courant = courant ? `${courant} ${bout}` : bout;
      }
    }
    if (courant) morceaux.push(courant);
  }
  return morceaux.length > 0 ? morceaux : [texte];
}

export type OptionsLecture = {
  /** 0,4 à 1,2 — la dictée se lit plus lentement qu'une conversation. */
  vitesse: number;
  /** 0 à 1. */
  volume: number;
  voix: SpeechSynthesisVoice | null;
  /** Appelé quand toute la file a été lue, ou en cas d'arrêt. */
  onFin?: () => void;
};

let gardeEnVie: number | null = null;

function arreterLaGarde() {
  if (gardeEnVie !== null) {
    clearInterval(gardeEnVie);
    gardeEnVie = null;
  }
}

export function arreterLecture(): void {
  arreterLaGarde();
  if (DISPONIBLE) speechSynthesis.cancel();
}

/**
 * Lit un texte à voix haute, en plusieurs énoncés si besoin.
 *
 * Renvoie une fonction d'arrêt, à appeler quand l'écran disparaît.
 */
export function lire(texte: string, options: OptionsLecture): () => void {
  if (!DISPONIBLE) return () => undefined;

  arreterLecture();
  const morceaux = decouperPourLecture(texte);

  // Un tour de boucle après cancel(), sinon Chromium avale le premier énoncé.
  const depart = window.setTimeout(() => {
    morceaux.forEach((morceau, i) => {
      const u = new SpeechSynthesisUtterance(morceau);
      u.lang = options.voix?.lang ?? "fr-FR";
      u.rate = options.vitesse;
      u.volume = options.volume;
      u.pitch = 1;
      if (options.voix) u.voice = options.voix;
      if (i === morceaux.length - 1) {
        u.onend = () => {
          arreterLaGarde();
          options.onFin?.();
        };
        u.onerror = () => {
          arreterLaGarde();
          options.onFin?.();
        };
      }
      speechSynthesis.speak(u);
    });

    // La file de Chromium s'endort au bout d'une quinzaine de secondes.
    arreterLaGarde();
    gardeEnVie = window.setInterval(() => {
      if (!speechSynthesis.speaking) {
        arreterLaGarde();
        return;
      }
      speechSynthesis.pause();
      speechSynthesis.resume();
    }, 8000);
  }, 60);

  return () => {
    clearTimeout(depart);
    arreterLecture();
  };
}

/* ─────────────────── voix neuronale servie par le serveur ─────────────────── */

export type EtatServeur = {
  disponible: boolean;
  voix: string | null;
  /** Étiquettes que le serveur sait lire : ["fr-FR", "en-GB", "es-MX"…]. */
  langues?: string[];
};

let etatServeurMemo: Promise<EtatServeur> | null = null;

/** Le serveur sait-il synthétiser ? Interrogé une seule fois par session. */
export function etatVoixServeur(): Promise<EtatServeur> {
  // Hors ligne, il n'y a pas de serveur : la question ne se pose pas, et la
  // poser produirait une requête vouée à l'échec au premier écran de dictée.
  if (HORS_LIGNE) return Promise.resolve({ disponible: false, voix: null });
  etatServeurMemo ??= fetch("/api/tts")
    .then((r) => (r.ok ? (r.json() as Promise<EtatServeur>) : { disponible: false, voix: null }))
    .catch(() => ({ disponible: false, voix: null }));
  return etatServeurMemo;
}

/** Les trois vitesses de l'écran, telles que la route les attend. */
export type VitesseServeur = "lent" | "moyen" | "normal";

export function vitesseServeur(vitesse: number): VitesseServeur {
  if (vitesse <= 0.6) return "lent";
  if (vitesse <= 0.85) return "moyen";
  return "normal";
}

export type LectureServeur = {
  arreter: () => void;
  /** Résolue quand la lecture est finie, rejetée si l'audio n'a pas pu être obtenu. */
  finie: Promise<void>;
};

/**
 * Joue la dictée avec la voix du serveur.
 *
 * La première écoute attend la synthèse — deux à trois secondes pour un texte
 * long. Les suivantes sont immédiates : le serveur garde le WAV en cache, et le
 * navigateur aussi.
 */
export function lireParServeur(
  dictationId: string,
  vitesse: VitesseServeur,
  volume: number,
  onFin?: () => void
): LectureServeur {
  return jouerUrl(`/api/tts/${encodeURIComponent(dictationId)}?vitesse=${vitesse}`, volume, onFin);
}

/**
 * L'énoncé d'un exercice, lu par la voix neuronale du serveur.
 *
 * Même mécanique que pour les dictées, et pour la même raison : la voix du
 * navigateur sous Linux est espeak, un synthétiseur à formants qui apprend
 * une mauvaise prononciation. Le client retombe dessus si le serveur ne sait
 * pas lire la langue demandée.
 */
export function lireExerciceParServeur(
  exerciseId: string,
  vitesse: VitesseServeur,
  volume: number,
  onFin?: () => void
): LectureServeur {
  return jouerUrl(`/api/tts/exercice/${encodeURIComponent(exerciseId)}?vitesse=${vitesse}`, volume, onFin);
}

function jouerUrl(url: string, volume: number, onFin?: () => void): LectureServeur {
  const audio = new Audio(url);
  audio.volume = Math.min(1, Math.max(0, volume));
  audio.preload = "auto";

  const finie = new Promise<void>((resolve, reject) => {
    audio.onended = () => {
      onFin?.();
      resolve();
    };
    audio.onerror = () => reject(new Error("audio indisponible"));
    void audio.play().catch(reject);
  });

  return {
    arreter: () => {
      audio.pause();
      audio.currentTime = 0;
    },
    finie,
  };
}
