"use client";

/**
 * « Mon application » — l'écran de l'APK, à la place de « Mon compte ».
 *
 * Hors ligne, il n'y a pas de compte : rien à créer, rien à synchroniser,
 * personne à qui demander quoi que ce soit. Restent trois choses dont la
 * personne qui tient le téléphone est seule responsable, et qui n'ont
 * d'endroit nulle part ailleurs :
 *
 *   — sa PROGRESSION, qui vit dans le téléphone et disparaît avec lui. D'où
 *     la sauvegarde dans un fichier, et la restauration depuis un fichier :
 *     c'est le seul filet quand il n'y a pas de serveur ;
 *   — son CONTENU, figé le jour où l'APK a été construit, que GitHub peut
 *     rafraîchir sans réinstaller l'application ;
 *   — l'APPLICATION elle-même, qu'Android ne laisse remplacer que par un
 *     geste explicite — et c'est bien ainsi.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { loadGuestState, saveGuestState, type GuestState } from "@/lib/client/guest-store";
import {
  DEPOT,
  VERSION_APPLICATION,
  VERSION_EMBARQUEE,
  chercher,
  installer,
  urlPublications,
  versionCourante,
  type EtatMiseAJour,
} from "@/lib/client/mise-a-jour";
import { versionInstallee, viderDepot } from "@/lib/client/depot-hors-ligne";
import { ecrireSauvegarde } from "@/lib/client/sauvegarde";
import type { ScreenProps } from "../App";

const mo = (o: number) => `${(o / 1024 / 1024).toFixed(1)} Mo`;

/** Ce que pèse la progression, en clair : nombre de notions travaillées. */
function compter(etat: GuestState): { notions: number; reponses: number; series: number } {
  let notions = 0;
  for (const m of Object.values(etat.modules)) notions += Object.keys(m.skills).length;
  return { notions, reponses: etat.answerCounter, series: etat.sessions.length };
}

export function Application({ setChrome, setScreen }: ScreenProps) {
  const [etat, setEtat] = useState<GuestState>(() => loadGuestState());
  const [contenu, setContenu] = useState<string>("…");
  const [telecharge, setTelecharge] = useState(false);
  const [maj, setMaj] = useState<EtatMiseAJour>({ etat: "inconnu" });
  const [message, setMessage] = useState<string | null>(null);
  const fichier = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setChrome({
      fil: "Mon application",
      accroche: "Ta progression, ton contenu, et ce que l’application sait faire sans réseau.",
    });
  }, [setChrome]);

  useEffect(() => {
    void versionCourante().then(setContenu);
    void versionInstallee().then((v) => setTelecharge(v !== null));
  }, []);

  const chiffres = compter(etat);

  /* ── sauvegarder ── */

  const sauvegarder = useCallback(async () => {
    setMessage(null);
    // La date dans le nom : on retrouve la bonne sauvegarde sans l'ouvrir.
    const jour = new Date().toLocaleDateString("sv-SE");
    try {
      const ou = await ecrireSauvegarde(
        `atelier-progression-${jour}.json`,
        JSON.stringify(loadGuestState(), null, 1)
      );
      setMessage(
        ou.ou === "documents"
          ? `Sauvegarde écrite dans ${ou.chemin}. Mets-en une copie ailleurs que sur ce téléphone.`
          : "Sauvegarde enregistrée dans tes téléchargements."
      );
    } catch {
      setMessage("Le téléphone a refusé d’écrire le fichier.");
    }
  }, []);

  const restaurer = useCallback(async (f: File) => {
    setMessage(null);
    try {
      const lu = JSON.parse(await f.text()) as GuestState;
      if (lu.version !== 2 || typeof lu.modules !== "object") {
        setMessage("Ce fichier n’est pas une sauvegarde de l’Atelier.");
        return;
      }
      if (!saveGuestState(lu)) {
        setMessage("Le téléphone a refusé d’écrire la sauvegarde.");
        return;
      }
      setEtat(lu);
      setMessage("Progression restaurée. Les écrans se rechargeront à la prochaine série.");
    } catch {
      setMessage("Fichier illisible.");
    }
  }, []);

  /* ── mettre à jour le contenu ── */

  const rechercher = useCallback(async () => {
    setMaj({ etat: "recherche" });
    setMaj(await chercher());
  }, []);

  const lancer = useCallback(async () => {
    if (maj.etat !== "disponible") return;
    const m = maj.manifeste;
    setMaj({ etat: "telechargement", fait: 0, total: m.fichiers.length });
    const fin = await installer(m, (fait, total) => setMaj({ etat: "telechargement", fait, total }));
    setMaj(fin);
    if (fin.etat === "installe") {
      setContenu(fin.version);
      setTelecharge(true);
    }
  }, [maj]);

  const revenirALAPK = useCallback(async () => {
    await viderDepot();
    setContenu(VERSION_EMBARQUEE);
    setTelecharge(false);
    setMaj({ etat: "inconnu" });
    setMessage("Contenu téléchargé effacé : l’application repart sur celui de l’APK.");
  }, []);

  return (
    <div className="plateau">
      <div className="appli-page">
        {message && <p className="alerte bonne">{message}</p>}

        {/* ── la progression ── */}
        <section className="appli-bloc">
          <p className="mono-titre">Ta progression</p>
          <p className="appli-texte">
            Elle est enregistrée dans ce téléphone, et nulle part ailleurs : aucun compte, aucun
            serveur, rien qui parte sur internet. Ce qui veut dire aussi qu’elle disparaît si tu
            effaces les données de l’application ou si tu changes d’appareil.
          </p>

          <dl className="appli-chiffres">
            <div>
              <dt>Notions travaillées</dt>
              <dd>{chiffres.notions}</dd>
            </div>
            <div>
              <dt>Réponses données</dt>
              <dd>{chiffres.reponses}</dd>
            </div>
            <div>
              <dt>Séries terminées</dt>
              <dd>{chiffres.series}</dd>
            </div>
          </dl>

          <div className="appli-actions">
            <button className="plein" onClick={() => void sauvegarder()}>
              Sauvegarder dans un fichier
            </button>
            <button className="creux" onClick={() => fichier.current?.click()}>
              Restaurer une sauvegarde
            </button>
            <input
              ref={fichier}
              type="file"
              accept="application/json,.json"
              className="visuellement-cache"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void restaurer(f);
                e.target.value = "";
              }}
            />
          </div>
          <p className="appli-note">
            Une restauration remplace la progression actuelle. Sauvegarde-la d’abord si tu tiens aux
            deux.
          </p>
        </section>

        {/* ── le contenu ── */}
        <section className="appli-bloc">
          <p className="mono-titre">Le contenu</p>
          <p className="appli-texte">
            Les questions et les cours sont embarqués dans l’application : ils fonctionnent en avion,
            dans le métro, sans forfait. Une version neuve se télécharge depuis GitHub sans
            réinstaller l’application — c’est le seul moment où elle a besoin d’internet.
          </p>

          <dl className="appli-chiffres">
            <div>
              <dt>Version en service</dt>
              <dd className="petit">{contenu}</dd>
            </div>
            <div>
              <dt>Version de l’APK</dt>
              <dd className="petit">{VERSION_EMBARQUEE}</dd>
            </div>
            <div>
              <dt>Source</dt>
              <dd className="petit">{DEPOT}</dd>
            </div>
          </dl>

          <div className="appli-actions">
            <button
              className="plein"
              onClick={rechercher}
              disabled={maj.etat === "recherche" || maj.etat === "telechargement"}
            >
              {maj.etat === "recherche" ? "Recherche…" : "Chercher une mise à jour"}
            </button>
            {maj.etat === "disponible" && (
              <button className="creux" onClick={lancer}>
                Télécharger {mo(maj.octets)}
              </button>
            )}
            {telecharge && (
              <button className="lien" onClick={revenirALAPK}>
                Revenir au contenu d’origine
              </button>
            )}
          </div>

          {maj.etat === "a-jour" && (
            <p className="appli-note">Le contenu est à jour ({maj.version}).</p>
          )}
          {maj.etat === "disponible" && (
            <p className="appli-note">
              Version {maj.manifeste.version} disponible, {maj.manifeste.fichiers.length} fichiers,{" "}
              {mo(maj.octets)}. À faire en wifi.
            </p>
          )}
          {maj.etat === "telechargement" && (
            <>
              <div className="appli-jauge">
                <i style={{ transform: `scaleX(${maj.fait / maj.total})` }} />
              </div>
              <p className="appli-note">
                Fichier {maj.fait} sur {maj.total}. Ne quitte pas l’écran.
              </p>
            </>
          )}
          {maj.etat === "installe" && (
            <p className="appli-note">
              Contenu {maj.version} installé. Rouvre une matière pour le voir.
            </p>
          )}
          {maj.etat === "echec" && <p className="alerte">{maj.message}</p>}
        </section>

        {/* ── l'application ── */}
        <section className="appli-bloc">
          <p className="mono-titre">L’application</p>
          <p className="appli-texte">
            Version {VERSION_APPLICATION}. Android ne laisse pas une application se remplacer toute
            seule : quand une version neuve paraît, elle se télécharge et s’installe à la main,
            depuis la page des publications.
          </p>
          <div className="appli-actions">
            <a className="creux" href={urlPublications()} target="_blank" rel="noopener noreferrer">
              Voir les publications
            </a>
            <button className="lien" onClick={() => setScreen({ name: "accueil" })}>
              Retour
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
