"use client";

/**
 * Une dictée : lecture à voix haute, saisie sur l'ardoise, correction mot à mot.
 *
 * La lecture passe par src/lib/client/speech.ts, qui règle les quatre travers
 * de l'API Web Speech (voix chargées trop tard, cancel avalé, énoncés longs
 * coupés, file qui s'endort). Ici on s'occupe seulement des réglages visibles :
 * vitesse, volume, et un diagnostic honnête quand le système n'a aucune voix
 * française à offrir.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import type { DictationDetail, DictationResultPayload, DictationsPayload } from "@/lib/api-types";
import type { ScreenProps } from "../App";
import { Confirmation } from "../Confirmation";
import {
  arreterLecture,
  chargerVoix,
  choisirVoix,
  etatVoixServeur,
  lire,
  lireParServeur,
  synthesePossible,
  vitesseServeur,
  type EtatServeur,
  type LectureServeur,
  type VoixInfo,
} from "@/lib/client/speech";

type Props = ScreenProps & { id: string };

const VITESSES = [
  { valeur: 0.55, libelle: "Très lent" },
  { valeur: 0.75, libelle: "Lent" },
  { valeur: 0.95, libelle: "Normal" },
];

/** Réglages conservés d'une dictée à l'autre : on ne les repose pas dix fois. */
const CLE_REGLAGES = "la-regle:dictee:reglages";

function chargerReglages(): { vitesse: number; volume: number } {
  if (typeof window === "undefined") return { vitesse: 0.75, volume: 1 };
  try {
    const brut = window.localStorage.getItem(CLE_REGLAGES);
    if (!brut) return { vitesse: 0.75, volume: 1 };
    const lu = JSON.parse(brut) as { vitesse?: number; volume?: number };
    return {
      vitesse: VITESSES.some((v) => v.valeur === lu.vitesse) ? lu.vitesse! : 0.75,
      volume: typeof lu.volume === "number" && lu.volume >= 0 && lu.volume <= 1 ? lu.volume : 1,
    };
  } catch {
    return { vitesse: 0.75, volume: 1 };
  }
}

export function Dictee({ engine, id, setScreen, setChrome }: Props) {
  const [dictee, setDictee] = useState<DictationDetail | null>(null);
  const [liste, setListe] = useState<DictationsPayload | null>(null);
  const [saisie, setSaisie] = useState("");
  const [resultat, setResultat] = useState<DictationResultPayload | null>(null);
  const [voixInfo, setVoixInfo] = useState<VoixInfo | null>(null);
  const [serveur, setServeur] = useState<EtatServeur | null>(null);
  const [prepare, setPrepare] = useState(false);
  const lectureServeur = useRef<LectureServeur | null>(null);
  const [enLecture, setEnLecture] = useState(false);
  const [reglages, setReglages] = useState(chargerReglages);
  const [confirmation, setConfirmation] = useState<"liste" | "suivante" | null>(null);
  const zone = useRef<HTMLTextAreaElement>(null);
  const arret = useRef<(() => void) | null>(null);

  const dispo = synthesePossible();

  /* Le serveur a-t-il une voix neuronale à proposer ? Elle prime sur celle du navigateur. */
  useEffect(() => {
    let vivant = true;
    void etatVoixServeur().then((e) => {
      if (vivant) setServeur(e);
    });
    return () => {
      vivant = false;
    };
  }, []);

  /* Les voix du navigateur arrivent de façon asynchrone : on les attend une fois pour toutes. */
  useEffect(() => {
    if (!dispo) return;
    let vivant = true;
    void chargerVoix().then((voix) => {
      if (vivant) setVoixInfo(choisirVoix(voix));
    });
    return () => {
      vivant = false;
    };
  }, [dispo]);

  const enregistrerReglages = (suivant: { vitesse: number; volume: number }) => {
    setReglages(suivant);
    try {
      window.localStorage.setItem(CLE_REGLAGES, JSON.stringify(suivant));
    } catch {
      /* navigation privée : tant pis, les réglages ne survivront pas */
    }
  };

  const stopper = useCallback(() => {
    lectureServeur.current?.arreter();
    lectureServeur.current = null;
    arret.current?.();
    arreterLecture();
    setEnLecture(false);
    setPrepare(false);
  }, []);

  /**
   * Lit le texte : voix neuronale du serveur si elle existe, voix du navigateur
   * sinon. En cas d'échec du serveur, on bascule sans rien dire à l'utilisateur,
   * qui n'a pas à connaître nos ennuis d'infrastructure.
   */
  const dire = useCallback(
    (texte: string, vitesse: number, volume: number, voix: SpeechSynthesisVoice | null, dictationId?: string) => {
      stopper();

      const parNavigateur = () => {
        if (!dispo) return;
        setEnLecture(true);
        arret.current = lire(texte, { vitesse, volume, voix, onFin: () => setEnLecture(false) });
      };

      if (serveur?.disponible && dictationId) {
        setPrepare(true);
        const lecture = lireParServeur(dictationId, vitesseServeur(vitesse), volume, () => {
          setEnLecture(false);
          lectureServeur.current = null;
        });
        lectureServeur.current = lecture;
        setEnLecture(true);
        lecture.finie
          .then(() => setPrepare(false))
          .catch((e: unknown) => {
            setPrepare(false);
            lectureServeur.current = null;
            setEnLecture(false);
            // Le navigateur refuse parfois de jouer un son sans geste de
            // l'utilisateur. Retomber sur la voix du navigateur ne servirait à
            // rien : elle est soumise à la même règle. On attend le clic.
            const refusAutoplay = e instanceof DOMException && e.name === "NotAllowedError";
            if (!refusAutoplay) parNavigateur();
          });
        // La synthèse prend deux à trois secondes la première fois seulement.
        window.setTimeout(() => setPrepare(false), 400);
        return;
      }

      parNavigateur();
    },
    [dispo, serveur, stopper]
  );

  useEffect(() => {
    let vivant = true;
    setSaisie("");
    setResultat(null);
    void Promise.all([engine.dictation(id), engine.dictations()]).then(([d, l]) => {
      if (!vivant) return;
      setDictee(d);
      setListe(l);
      const numero = l.dictations.find((x) => x.id === id)?.number ?? 1;
      setChrome({
        fil: `Dictée ${numero} sur ${l.dictations.length}`,
        accroche: "Écoute, écris, puis compare mot à mot. Les accents comptent.",
      });
      zone.current?.focus();
    });
    return () => {
      vivant = false;
      stopper();
    };
  }, [engine, id, setChrome, stopper]);

  /**
   * Première lecture dès que le texte ET la voix retenue sont connus.
   *
   * Le drapeau est un `ref`, pas un `state` : en state, le rendu déclenché par
   * sa mise à jour relançait l'effet, dont le nettoyage supprimait le minuteur
   * qui venait d'être posé. La lecture automatique ne partait jamais.
   */
  const dejaLu = useRef(false);
  useEffect(() => {
    dejaLu.current = false;
  }, [id]);

  useEffect(() => {
    if (!dictee || dejaLu.current || serveur === null) return;
    if (!serveur.disponible && (!dispo || voixInfo === null)) return;
    dejaLu.current = true;
    const t = window.setTimeout(
      () => dire(dictee.text, reglages.vitesse, reglages.volume, voixInfo?.voix ?? null, dictee.id),
      350
    );
    return () => clearTimeout(t);
  }, [dictee, voixInfo, serveur, dispo, dire, reglages.vitesse, reglages.volume]);

  if (!dictee || !liste) return <p className="legende attente">Chargement de la dictée…</p>;

  const index = liste.dictations.findIndex((d) => d.id === id);
  const courante = liste.dictations[index];
  const suivante = liste.dictations[index + 1];

  const corriger = async () => {
    stopper();
    setResultat(await engine.gradeDictation(id, saisie));
  };

  const relire = () =>
    dire(dictee.text, reglages.vitesse, reglages.volume, voixInfo?.voix ?? null, dictee.id);

  /** Une copie commencée et jamais corrigée serait perdue sans retour possible. */
  const copieEnCours = saisie.trim().length > 0 && resultat === null;

  const partir = (vers: "liste" | "suivante") => {
    if (!copieEnCours) {
      stopper();
      setScreen(vers === "liste" ? { name: "dictees" } : { name: "dictee", id: suivante!.id });
      return;
    }
    setConfirmation(vers);
  };

  return (
    <>
      <div className="ardoise">
        <textarea
          ref={zone}
          value={saisie}
          onChange={(e) => setSaisie(e.target.value)}
          placeholder="Écris le texte que tu entends…"
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
          style={{ minHeight: courante && courante.wordCount > 25 ? 200 : 120 }}
        />
      </div>

      <div className="haut-parleur">
        <button className="creux" onClick={relire} disabled={prepare}>
          {prepare ? "Préparation…" : enLecture ? "Réécouter" : "Écouter"}
        </button>
        {enLecture && (
          <button className="creux" onClick={stopper}>
            Arrêter
          </button>
        )}
        <button className="plein" style={{ marginLeft: "auto" }} onClick={corriger}>
          Corriger
        </button>
      </div>

      <div className="carte reglages">
        <p className="etiquette">Vitesse de lecture</p>
        <div className="puces">
          {VITESSES.map((v) => (
            <button
              key={v.valeur}
              className={`puce ${reglages.vitesse === v.valeur ? "active" : ""}`}
              onClick={() => {
                const suivant = { ...reglages, vitesse: v.valeur };
                enregistrerReglages(suivant);
                dire(dictee.text, suivant.vitesse, suivant.volume, voixInfo?.voix ?? null, dictee.id);
              }}
            >
              {v.libelle}
            </button>
          ))}
        </div>

        <p className="etiquette" style={{ marginTop: 22 }}>
          Volume · {Math.round(reglages.volume * 100)} %
        </p>
        <input
          className="curseur"
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={reglages.volume}
          onChange={(e) => enregistrerReglages({ ...reglages, volume: Number(e.target.value) })}
          onMouseUp={() => dire(dictee.text, reglages.vitesse, reglages.volume, voixInfo?.voix ?? null, dictee.id)}
        />

        <p className="legende voix-info">
          {serveur?.disponible
            ? `Voix neuronale : ${serveur.voix}. Nettement plus naturelle que celle du navigateur.`
            : !dispo
            ? "Ce navigateur ne propose aucune synthèse vocale."
            : voixInfo === null
              ? "Recherche d’une voix…"
              : voixInfo.voix === null
                ? "Aucune voix installée sur cet appareil."
                : voixInfo.francaise
                  ? `Voix : ${voixInfo.voix.name} (${voixInfo.voix.lang})`
                  : `Aucune voix française trouvée. Lecture avec ${voixInfo.voix.name}, qui prononcera mal.`}
        </p>

        {!serveur?.disponible && (
          <p className="legende voix-info" style={{ marginTop: 8 }}>
            Une voix neuronale bien plus naturelle peut être installée en local, sans réseau :
            voir la section « Dictée audio » du README.
          </p>
        )}

        {!serveur?.disponible && dispo && voixInfo && (voixInfo.voix === null || !voixInfo.francaise) && (
          <p className="alerte" style={{ marginTop: 14, marginBottom: 0 }}>
            Sur Linux, les voix viennent de <b>speech-dispatcher</b> et d’<b>espeak-ng</b> :
            <br />
            <code>sudo apt install speech-dispatcher speech-dispatcher-espeak-ng espeak-ng-data</code>
            <br />
            Redémarre ensuite le navigateur. Sinon, demande à quelqu’un de te dicter le texte.
          </p>
        )}
      </div>

      {!dispo && (
        <p className="avert">
          La synthèse vocale est indisponible ici. Demande à quelqu’un de te dicter le texte, ou passe à
          l’entraînement.
        </p>
      )}

      {resultat && (
        <div className={`regle ${resultat.score === 100 ? "juste" : ""}`} style={{ marginTop: 18 }}>
          <p className="verdict">
            <span>
              {resultat.score === 100
                ? "Sans faute"
                : `${resultat.correctWords} mots justes sur ${resultat.totalWords}`}
            </span>
            <span className="palier">{resultat.score} %</span>
          </p>
          <div className="ardoise" style={{ marginTop: 14 }}>
            <p className="correction">
              {resultat.words.map((w, i) => (
                <span key={i}>
                  {w.status === "ok" ? (
                    <span className="ok">{w.expected}</span>
                  ) : w.status === "extra" ? (
                    <span className="ko">{w.given}</span>
                  ) : (
                    <>
                      {w.status === "wrong" && <span className="ko">{w.given}</span>}
                      <span className="vrai">{w.expected}</span>
                    </>
                  )}{" "}
                </span>
              ))}
            </p>
          </div>
          <p className="astuce" style={{ marginTop: 16 }}>
            En rouge barré ce que tu as écrit, en vert la forme attendue.
          </p>
          {suivante && (
            <button className="plein suite" onClick={() => setScreen({ name: "dictee", id: suivante.id })}>
              Dictée suivante
            </button>
          )}
        </div>
      )}

      <div className="bas">
        <button className="creux" onClick={() => partir("liste")}>
          Retour aux dictées
        </button>
        {suivante && resultat === null && (
          <button className="lien" onClick={() => partir("suivante")}>
            Passer cette dictée
          </button>
        )}
      </div>

      {confirmation && (
        <Confirmation
          titre="Abandonner cette dictée ?"
          texte="Ta copie n'a pas été corrigée. Si tu pars maintenant, ce que tu as écrit sera perdu et la dictée restera marquée comme jamais tentée."
          onFermer={() => setConfirmation(null)}
          actions={[
            { libelle: "Continuer d’écrire", onClick: () => setConfirmation(null), style: "plein" },
            {
              libelle: "Corriger maintenant",
              onClick: () => {
                setConfirmation(null);
                void corriger();
              },
            },
            {
              libelle: "Abandonner",
              onClick: () => {
                const vers = confirmation;
                setConfirmation(null);
                stopper();
                setScreen(vers === "liste" ? { name: "dictees" } : { name: "dictee", id: suivante!.id });
              },
              style: "lien",
            },
          ]}
        />
      )}
    </>
  );
}
