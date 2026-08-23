/**
 * Reconnaissance vocale du navigateur.
 *
 * Ce que c'est, et ce que ce n'est pas
 * ────────────────────────────────────
 * C'est de la TRANSCRIPTION : le navigateur écoute et rend du texte. Ce n'est
 * pas de l'évaluation phonétique — on ne mesure pas ton accent, on mesure si un
 * logiciel te comprend. C'est un révélateur honnête (dire « sheep » quand on
 * visait « ship » se voit immédiatement) mais ce n'est pas un professeur.
 *
 * Trois limites, à dire à l'utilisateur plutôt qu'à cacher :
 *   · dans un navigateur, seuls Chrome et Edge l'implémentent ;
 *   · Chrome envoie l'audio à ses serveurs pour le transcrire ;
 *   · la ponctuation et les majuscules ne sont pas fiables — la correction en
 *     tient compte.
 *
 * DANS L'APPLICATION ANDROID, rien de tout cela n'existe : la vue web n'a pas
 * l'API du web. C'est le moteur de reconnaissance du système qui écoute, par
 * le greffon enveloppé dans `voix-native`. Ce fichier aiguille vers l'un ou
 * l'autre ; les écrans ne voient qu'une seule fonction.
 */

import { NATIF, ecouterNatif, reconnaissanceNativeDisponible, type EcouteNative } from "./voix-native";

type Alternative = { transcript: string; confidence: number };
type ResultatBrut = { isFinal: boolean; 0: Alternative; length: number };

type MoteurReconnaissance = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: { results: ArrayLike<ResultatBrut> & { length: number } }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
};

type FenetreAvecReconnaissance = Window & {
  SpeechRecognition?: new () => MoteurReconnaissance;
  webkitSpeechRecognition?: new () => MoteurReconnaissance;
};

/**
 * Réponse immédiate, pour le premier rendu.
 *
 * Sur le téléphone, elle est optimiste : le moteur système existe presque
 * toujours, et `reconnaissanceUtilisable()` le confirmera juste après. Répondre
 * non ici ferait clignoter l'écran entre deux états.
 */
export function reconnaissancePossible(): boolean {
  if (typeof window === "undefined") return false;
  if (NATIF) return true;
  const w = window as FenetreAvecReconnaissance;
  return Boolean(w.SpeechRecognition ?? w.webkitSpeechRecognition);
}

/** La réponse vérifiée, qui demande au système sur le téléphone. */
export async function reconnaissanceUtilisable(): Promise<boolean> {
  if (typeof window === "undefined") return false;
  if (NATIF) return reconnaissanceNativeDisponible();
  return reconnaissancePossible();
}

export type Ecoute = {
  /** Arrête l'écoute et rend ce qui a été compris jusque-là. */
  arreter: () => void;
};

export type OptionsEcoute = {
  /** Étiquette BCP-47 : "en-GB", "es-MX". Sans elle, le moteur écouterait la mauvaise langue. */
  langue: string;
  /** Transcription en cours, mise à jour au fil de la parole. */
  onPartiel?: (texte: string) => void;
  /** Transcription finale. Appelé une seule fois. */
  onFinal: (texte: string) => void;
  /** Erreur lisible, déjà traduite. */
  onErreur?: (message: string) => void;
};

/** Les erreurs du moteur, dites en français et sans jargon. */
function traduireErreur(code: string): string {
  switch (code) {
    case "not-allowed":
    case "service-not-allowed":
      return "Le micro est refusé. Autorise-le dans la barre d’adresse, puis réessaie.";
    case "no-speech":
      return "Rien n’a été entendu. Parle un peu plus fort, ou rapproche-toi du micro.";
    case "audio-capture":
      return "Aucun micro n’a été trouvé sur cet appareil.";
    case "network":
      return "La reconnaissance a besoin du réseau, et il n’a pas répondu.";
    case "aborted":
      return "";
    default:
      return `La reconnaissance a échoué (${code}).`;
  }
}

/**
 * Écoute une phrase et rend sa transcription.
 *
 * Le moteur s'arrête tout seul après un silence ; `arreter()` permet de le
 * couper avant. Dans les deux cas, `onFinal` est appelé une fois exactement.
 */
export function ecouter(options: OptionsEcoute): Ecoute | null {
  // Sur le téléphone, l'écoute passe par le système. Le démarrage est
  // asynchrone — permission du micro à demander —, alors qu'ici on doit rendre
  // tout de suite : on rend donc une poignée qui relaiera l'arrêt dès que la
  // session native existe.
  if (NATIF) {
    let session: EcouteNative | null = null;
    let arreteAvant = false;
    void ecouterNatif(options).then((s) => {
      session = s;
      if (arreteAvant) s?.arreter();
    });
    return {
      arreter: () => {
        arreteAvant = true;
        session?.arreter();
      },
    };
  }

  const w = window as FenetreAvecReconnaissance;
  const Moteur = w.SpeechRecognition ?? w.webkitSpeechRecognition;
  if (!Moteur) return null;

  const moteur = new Moteur();
  moteur.lang = options.langue;
  moteur.continuous = false;
  moteur.interimResults = true;
  moteur.maxAlternatives = 3;

  let dernier = "";
  let rendu = false;
  const rendre = () => {
    if (rendu) return;
    rendu = true;
    options.onFinal(dernier.trim());
  };

  moteur.onresult = (e) => {
    let texte = "";
    for (let i = 0; i < e.results.length; i++) {
      const r = e.results[i];
      if (r) texte += r[0].transcript;
    }
    dernier = texte;
    options.onPartiel?.(texte.trim());
  };

  moteur.onerror = (e) => {
    const message = traduireErreur(e.error);
    if (message) options.onErreur?.(message);
    // Une erreur clôt l'écoute : on rend ce qu'on a, fût-ce rien.
    rendre();
  };

  moteur.onend = rendre;

  try {
    moteur.start();
  } catch {
    // start() jette si une écoute est déjà en cours ; on ne double pas.
    return null;
  }

  return {
    arreter: () => {
      try {
        moteur.stop();
      } catch {
        /* déjà arrêté */
      }
    },
  };
}
