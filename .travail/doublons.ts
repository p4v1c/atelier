/**
 * Passe complète de détection des redites, sur les questions et sur les cours.
 *
 * Trois familles de contrôles :
 *   1. questions   — empreinte exacte, quasi-doublons, jeux de propositions identiques
 *   2. paragraphes — phrases et paragraphes réemployés d'un cours à l'autre
 *   3. tics        — formules qui reviennent trop souvent d'un cours à l'autre
 */
import { chargerContenuCultureG } from "../src/modules/culture-g/contenu";
import { normalizeForDedupe } from "../src/lib/tokenize";

type Notion = { slug: string; titre: string; matiere: string; lesson?: any; exercises: any[] };

const notions: Notion[] = [];
for (const lecon of chargerContenuCultureG()) {
  for (const s of lecon.skills) {
    notions.push({ slug: s.slug, titre: s.title, matiere: s.category, lesson: (s as any).lesson, exercises: s.exercises });
  }
}

const ligne = "─".repeat(70);
function titre(t: string) { console.log(`\n${ligne}\n${t}\n${ligne}`); }

/* ─── 1. questions ─────────────────────────────────────────────────────── */

titre("1. QUESTIONS");

const parEmpreinte = new Map<string, string[]>();
const parReponse = new Map<string, { slug: string; q: string }[]>();
const parChoix = new Map<string, string[]>();
let nbQ = 0;

for (const n of notions) {
  for (const e of n.exercises) {
    const p: any = e.payload;
    if (!p?.question) continue;
    nbQ++;
    const emp = normalizeForDedupe(p.question);
    (parEmpreinte.get(emp) ?? parEmpreinte.set(emp, []).get(emp)!).push(`${n.slug} — ${p.question}`);
    if (Array.isArray(p.choices)) {
      const bonne = normalizeForDedupe(String(p.choices[p.answerIndex] ?? ""));
      (parReponse.get(bonne) ?? parReponse.set(bonne, []).get(bonne)!).push({ slug: n.slug, q: p.question });
      const jeu = [...p.choices].map((c: string) => normalizeForDedupe(c)).sort().join(" ¦ ");
      (parChoix.get(jeu) ?? parChoix.set(jeu, []).get(jeu)!).push(`${n.slug} — ${p.question}`);
    }
  }
}

const empDouble = [...parEmpreinte.values()].filter((v) => v.length > 1);
console.log(`questions : ${nbQ} · empreintes distinctes : ${parEmpreinte.size} · doublons exacts : ${empDouble.length}`);
empDouble.slice(0, 10).forEach((v) => console.log("  " + v.join("\n  ")));

const choixDouble = [...parChoix.entries()].filter(([, v]) => v.length > 1);
console.log(`\njeux de propositions identiques : ${choixDouble.length}`);
choixDouble.slice(0, 12).forEach(([, v]) => console.log("  " + v.join("\n  ")));

/* quasi-doublons : même bonne réponse ET question très proche */
function mots(s: string): Set<string> {
  return new Set(normalizeForDedupe(s).split(/\s+/).filter((m) => m.length > 3));
}
function jaccard(a: Set<string>, b: Set<string>): number {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter || 1);
}

const quasi: string[] = [];
for (const [rep, liste] of parReponse) {
  if (liste.length < 2 || rep.length < 4) continue;
  for (let i = 0; i < liste.length; i++) {
    for (let j = i + 1; j < liste.length; j++) {
      const s = jaccard(mots(liste[i]!.q), mots(liste[j]!.q));
      if (s >= 0.6) quasi.push(`  ${Math.round(s * 100)}%  ${liste[i]!.slug} — ${liste[i]!.q}\n        ${liste[j]!.slug} — ${liste[j]!.q}`);
    }
  }
}
console.log(`\nquasi-doublons (même réponse, question proche à 60 % ou plus) : ${quasi.length}`);
quasi.slice(0, 30).forEach((q) => console.log(q));

/* ─── 2. paragraphes de cours ──────────────────────────────────────────── */

titre("2. PARAGRAPHES ET PHRASES DES COURS");

type Bloc = { slug: string; section: string; texte: string };
const paragraphes: Bloc[] = [];
const phrases: Bloc[] = [];
let nbCours = 0, nbSections = 0;

for (const n of notions) {
  if (!n.lesson?.sections) continue;
  nbCours++;
  for (const sec of n.lesson.sections) {
    nbSections++;
    for (const par of String(sec.texte).split(/\n\s*\n/)) {
      const t = par.trim();
      if (t.length < 40) continue;
      paragraphes.push({ slug: n.slug, section: sec.titre, texte: t });
      for (const ph of t.split(/(?<=[.!?…])\s+/)) {
        const p = ph.trim();
        if (p.length >= 60) phrases.push({ slug: n.slug, section: sec.titre, texte: p });
      }
    }
  }
}
console.log(`cours : ${nbCours} · sections : ${nbSections} · paragraphes : ${paragraphes.length} · phrases longues : ${phrases.length}`);

function groupes(blocs: Bloc[]) {
  const m = new Map<string, Bloc[]>();
  for (const b of blocs) {
    const k = normalizeForDedupe(b.texte);
    (m.get(k) ?? m.set(k, []).get(k)!).push(b);
  }
  return [...m.values()].filter((v) => v.length > 1 && new Set(v.map((x) => x.slug)).size > 1);
}

const parDouble = groupes(paragraphes);
console.log(`\nparagraphes identiques entre cours différents : ${parDouble.length}`);
parDouble.slice(0, 15).forEach((g) => {
  console.log("  " + g.map((b) => `${b.slug} / ${b.section}`).join("  ↔  "));
  console.log("    « " + g[0]!.texte.slice(0, 150) + " »");
});

const phDouble = groupes(phrases);
console.log(`\nphrases identiques entre cours différents : ${phDouble.length}`);
phDouble.slice(0, 40).forEach((g) => {
  console.log("  " + g.map((b) => b.slug).join("  ↔  "));
  console.log("    « " + g[0]!.texte.slice(0, 170) + " »");
});
