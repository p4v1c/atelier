/**
 * La voix du téléphone, et son oreille.
 *
 * POURQUOI CE FICHIER EXISTE. La vue web d'Android — celle qui affiche
 * l'application — n'implémente PAS l'API vocale du web. Ni `speechSynthesis`,
 * ni la reconnaissance : ce sont des fonctions de Chrome, pas de la vue web
 * qu'un APK embarque. L'application affichait donc « Aucune voix en-GB n'est
 * installée sur cet appareil », ce qui accusait le téléphone à tort — la voix
 * y était, c'est la vue web qui ne savait pas y accéder. Conséquence : la
 * moitié des exercices de langue (écoute, prononciation) et les trois cent dix
 * dictées du français ne fonctionnaient pas dans l'APK.
 *
 * Android, lui, sait parler et écouter depuis toujours. Deux greffons donnent
 * accès à ces services natifs, et ce fichier les enveloppe derrière la même
 * forme que l'API du navigateur, pour que les écrans n'aient pas à savoir sur
 * quoi ils tournent.
 *
 * CE QUI RESTE À LA CHARGE DE LA PERSONNE : la langue doit être installée dans
 * le moteur de synthèse d'Android. `languesNatives()` dit lesquelles le sont,
 * et l'écran peut alors donner la marche à suivre au lieu d'un message vague.
 */
import { Capacitor } from "@capacitor/core";

/** Sommes-nous dans l'application Android, et non dans un navigateur ? */
export const NATIF = typeof window !== "undefined" && Capacitor.isNativePlatform();

/*
 * Les greffons sont chargés à la demande. Dans un navigateur, ils ne servent à
 * rien et n'ont pas à peser dans le paquet ; en cas d'absence — un APK bâti
 * sans eux —, l'application doit continuer de fonctionner sans voix plutôt que
 * de tomber en panne au premier écran.
 */
type ModuleTts = typeof import("@capacitor-community/text-to-speech");
type ModuleReco = typeof import("@capacitor-community/speech-recognition");

let tts: Promise<ModuleTts | null> | null = null;
let reco: Promise<ModuleReco | null> | null = null;

const chargerTts = (): Promise<ModuleTts | null> =>
  (tts ??= NATIF
    ? import("@capacitor-community/text-to-speech").catch(() => null)
    : Promise.resolve(null));

const chargerReco = (): Promise<ModuleReco | null> =>
  (reco ??= NATIF
    ? import("@capacitor-community/speech-recognition").catch(() => null)
    : Promise.resolve(null));

/* ─────────────────────────────── parler ─────────────────────────────── */

let languesMemo: Promise<string[]> | null = null;

/**
 * Les étiquettes de langue que le moteur du téléphone sait prononcer,
 * normalisées en minuscules : ["fr-fr", "en-us", "en-gb"…].
 *
 * Interrogé une seule fois : la liste ne change pas en cours de session, et
 * l'appel traverse le pont natif.
 */
export function languesNatives(): Promise<string[]> {
  languesMemo ??= chargerTts()
    .then(async (m) => {
      if (!m) return [];
      const { languages } = await m.TextToSpeech.getSupportedLanguages();
      return languages.map((l) => l.toLowerCase().replace("_", "-"));
    })
    .catch(() => []);
  return languesMemo;
}

/** Cette langue est-elle prononçable par le téléphone ? */
export async function langueNativeDisponible(etiquette: string): Promise<boolean> {
  const cible = etiquette.toLowerCase().replace("_", "-");
  const langue = cible.split("-")[0]!;
  const liste = await languesNatives();
  // La variante régionale exacte d'abord, la langue ensuite : un anglais
  // américain lit un texte britannique bien mieux qu'une voix française.
  return liste.some((l) => l === cible) || liste.some((l) => l.startsWith(`${langue}-`) || l === langue);
}

export type OptionsNatives = {
  langue: string;
  /** 0,4 à 1,2, comme dans le navigateur. */
  vitesse: number;
  volume: number;
};

/** Lit un texte par le moteur du téléphone. La promesse se résout à la fin. */
export async function lireNatif(texte: string, o: OptionsNatives): Promise<void> {
  const m = await chargerTts();
  if (!m) throw new Error("synthèse native indisponible");
  await m.TextToSpeech.speak({
    text: texte,
    lang: o.langue,
    rate: o.vitesse,
    volume: o.volume,
    pitch: 1,
    // Attendre la fin plutôt que d'empiler : sans cela, deux clics rapides
    // font parler deux voix en même temps.
    queueStrategy: 0,
  });
}

export async function arreterNatif(): Promise<void> {
  const m = await chargerTts();
  await m?.TextToSpeech.stop().catch(() => undefined);
}

/* ─────────────────────────────── écouter ────────────────────────────── */

/** Le téléphone sait-il transcrire la parole ? */
export async function reconnaissanceNativeDisponible(): Promise<boolean> {
  const m = await chargerReco();
  if (!m) return false;
  try {
    const { available } = await m.SpeechRecognition.available();
    return available;
  } catch {
    return false;
  }
}

export type EcouteNative = { arreter: () => void };

/**
 * Écoute une phrase et rend sa transcription, par le moteur du téléphone.
 *
 * La permission du micro est demandée ici : Android la refuse silencieusement
 * si on ne la réclame pas, et l'écran afficherait « rien entendu » sans jamais
 * dire pourquoi.
 */
export async function ecouterNatif(options: {
  langue: string;
  onPartiel?: (texte: string) => void;
  onFinal: (texte: string) => void;
  onErreur?: (message: string) => void;
}): Promise<EcouteNative | null> {
  const m = await chargerReco();
  if (!m) return null;
  const { SpeechRecognition } = m;

  try {
    const perm = await SpeechRecognition.checkPermissions();
    if (perm.speechRecognition !== "granted") {
      const demande = await SpeechRecognition.requestPermissions();
      if (demande.speechRecognition !== "granted") {
        options.onErreur?.("Le micro est refusé. Autorise-le dans les réglages de l’application.");
        options.onFinal("");
        return null;
      }
    }
  } catch {
    /* certaines versions n'exposent pas les permissions : on tente quand même */
  }

  let dernier = "";
  let rendu = false;
  const rendre = () => {
    if (rendu) return;
    rendu = true;
    void SpeechRecognition.removeAllListeners();
    options.onFinal(dernier.trim());
  };

  await SpeechRecognition.addListener("partialResults", (data: { matches: string[] }) => {
    dernier = data.matches?.[0] ?? dernier;
    options.onPartiel?.(dernier.trim());
  });

  try {
    // `partialResults` fait remonter la transcription au fil de la parole ;
    // `popup: false` garde l'écoute dans l'application, sans la fenêtre
    // système qui masquerait la phrase à lire.
    void SpeechRecognition.start({
      language: options.langue,
      maxResults: 3,
      partialResults: true,
      popup: false,
    })
      .then((r: { matches?: string[] } | undefined) => {
        if (r?.matches?.[0]) dernier = r.matches[0];
        rendre();
      })
      .catch(() => rendre());
  } catch {
    rendre();
    return null;
  }

  return {
    arreter: () => {
      void SpeechRecognition.stop()
        .catch(() => undefined)
        .finally(rendre);
    },
  };
}
