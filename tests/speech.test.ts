/**
 * Choix de la voix et découpage des textes longs.
 *
 * C'est exactement le genre de code qui échoue en silence : le navigateur ne
 * proteste pas, il lit simplement avec une voix anglaise — ou ne lit rien.
 */
import { describe, expect, it } from "vitest";
import { choisirVoix, decouperPourLecture, type Voix } from "@/lib/client/speech";

/** Une voix du navigateur, telle que `chargerVoix` l'enrobe. */
function voix(name: string, lang: string, localService = true): Voix {
  return {
    lang,
    nom: name,
    brute: { name, lang, localService, default: false, voiceURI: name } as SpeechSynthesisVoice,
  };
}

describe("choisirVoix", () => {
  it("préfère une voix fr-FR à toute autre variante française", () => {
    const info = choisirVoix([voix("French (Belgium)", "fr-BE"), voix("French (France)", "fr-FR")]);
    expect(info.voix?.lang).toBe("fr-FR");
    expect(info.francaise).toBe(true);
  });

  it("écarte les milliers de variantes d'espeak au profit de la voix de base", () => {
    // espeak-ng publie « French (France)+Alex », « French (France)+Zac »…
    const liste = [
      voix("French (France)+Alex espeak-ng", "fr-FR"),
      voix("French (France)+Zac espeak-ng", "fr-FR"),
      voix("French (France) espeak-ng", "fr-FR"),
    ];
    expect(choisirVoix(liste).voix?.nom).toBe("French (France) espeak-ng");
  });

  it("se rabat sur une autre variante française si fr-FR manque", () => {
    const info = choisirVoix([voix("English", "en-US"), voix("French (Canada)", "fr-CA")]);
    expect(info.voix?.lang).toBe("fr-CA");
    expect(info.francaise).toBe(true);
  });

  it("signale l'absence de français plutôt que de lire en anglais sans prévenir", () => {
    const info = choisirVoix([voix("English", "en-US"), voix("Deutsch", "de-DE")]);
    expect(info.francaise).toBe(false);
    expect(info.voix?.lang).toBe("en-US");
  });

  it("rend une voix nulle quand le système n'en propose aucune", () => {
    expect(choisirVoix([])).toEqual({ voix: null, francaise: false, total: 0 });
  });
});

describe("decouperPourLecture", () => {
  it("laisse une phrase courte entière", () => {
    expect(decouperPourLecture("Il pleut sur la ville.")).toEqual(["Il pleut sur la ville."]);
  });

  it("coupe un texte suivi phrase par phrase", () => {
    const texte = "Le vent soufflait. Les volets claquaient. Personne ne sortait.";
    expect(decouperPourLecture(texte)).toEqual([
      "Le vent soufflait.",
      "Les volets claquaient.",
      "Personne ne sortait.",
    ]);
  });

  it("garde chaque morceau sous le seuil, en coupant aux virgules si besoin", () => {
    const longue =
      "Il marchait depuis des heures, sans jamais s'arrêter, sans jamais regarder derrière lui, " +
      "et le chemin se perdait dans une brume que rien ne semblait pouvoir dissiper avant la nuit.";
    const morceaux = decouperPourLecture(longue, 80);
    expect(morceaux.length).toBeGreaterThan(1);
    for (const m of morceaux) expect(m.length).toBeLessThanOrEqual(110);
    // Rien ne doit se perdre au découpage.
    expect(morceaux.join(" ")).toBe(longue);
  });

  it("ne rend jamais une liste vide", () => {
    expect(decouperPourLecture("Bonjour")).toEqual(["Bonjour"]);
  });

  it("découpe les dictées longues de la base en énoncés lisibles", () => {
    const dictee =
      "Elles se sont rendu compte de l'erreur bien trop tard. Les pièces qu'elles avaient jointes " +
      "au dossier ne correspondaient pas à la demande, et personne au guichet ne les avait prévenues. " +
      "Il aura fallu trois semaines pour que la commission accepte de réexaminer le dossier.";
    const morceaux = decouperPourLecture(dictee);
    expect(morceaux.length).toBeGreaterThanOrEqual(3);
    for (const m of morceaux) expect(m.length).toBeLessThanOrEqual(180);
  });
});
