/**
 * Mesure des contrastes réels, dans le navigateur.
 * Parcourt tout texte visible, recompose le fond effectif (rgba empilés
 * compris), et rend le ratio WCAG par élément.
 */
import { chromium } from "playwright";

const BASE = process.env.BASE || "http://localhost:3000";
/* Le chromium installé sur cette machine est le 1148 ; la version de
   Playwright du dépôt en réclame un plus récent. On pointe le binaire. */
const CHROME =
  process.env.CHROME_PATH ||
  (process.env.HOME || "") + "/.cache/ms-playwright/chromium-1148/chrome-linux/chrome";

const MESURE = `(() => {
  const parse = (c) => {
    const m = c.match(/rgba?\\(([^)]+)\\)/);
    if (!m) return null;
    const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const over = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  });
  const lum = (c) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  };
  const ratio = (a, b) => {
    const l1 = lum(a), l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  };
  const fondEffectif = (el) => {
    const couches = [];
    let n = el;
    while (n && n.nodeType === 1) {
      const s = getComputedStyle(n);
      const bg = parse(s.backgroundColor);
      if (bg && bg.a > 0) couches.push(bg);
      n = n.parentElement;
    }
    let base = { r: 255, g: 255, b: 255, a: 1 };
    for (let i = couches.length - 1; i >= 0; i--) base = over(couches[i], base);
    return base;
  };
  const nom = (el) => {
    const cls = (el.getAttribute("class") || "").trim().split(/\\s+/).filter(Boolean);
    return el.tagName.toLowerCase() + (cls.length ? "." + cls.join(".") : "");
  };
  const out = [];
  for (const el of document.querySelectorAll("body *")) {
    const direct = Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim());
    if (!direct) continue;
    const s = getComputedStyle(el);
    if (s.visibility === "hidden" || s.display === "none" || parseFloat(s.opacity) === 0) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) continue;
    const fg = parse(s.color);
    if (!fg) continue;
    const bg = fondEffectif(el);
    const compose = over(fg, bg);
    const px = parseFloat(s.fontSize);
    const gras = parseInt(s.fontWeight, 10) >= 700;
    const grand = px >= 24 || (px >= 18.66 && gras);
    out.push({
      nom: nom(el),
      texte: (el.textContent || "").trim().slice(0, 34),
      couleur: s.color,
      fond: "rgb(" + [bg.r, bg.g, bg.b].map((v) => Math.round(v)).join(",") + ")",
      px,
      grand,
      ratio: Math.round(ratio(compose, bg) * 100) / 100,
    });
  }
  return out;
})()`;

const ECRANS = [
  { nom: "accueil-francais", url: "/" },
  { nom: "catalogue-francais", url: "/", onglet: "catalogue" },
  { nom: "stats-francais", url: "/", onglet: "progr" },
  { nom: "stats-francais-ouvert", url: "/", onglet: "progr", clic: ".table-domaines tbody tr" },
  { nom: "dictees-francais", url: "/", onglet: "dict" },
  { nom: "dictee-francais", url: "/", onglet: "dict", clic: ".volet-fiche .plein" },
  { nom: "serie-francais", url: "/", onglet: "série" },
  { nom: "compte", url: "/", clic: ".flanc-pied button" },
  { nom: "accueil-anglais", url: "/", module: "anglais" },
  { nom: "catalogue-anglais", url: "/", module: "anglais", onglet: "programme" },
  { nom: "serie-anglais", url: "/", module: "anglais", onglet: "entraîn" },
  { nom: "accueil-culture-g", url: "/", module: "culture-g" },
  { nom: "catalogue-culture-g", url: "/", module: "culture-g", onglet: "cours" },
  { nom: "lecon-culture-g", url: "/", module: "culture-g", onglet: "cours", clic: ".volet-fiche .creux" },
  { nom: "serie-culture-g", url: "/", module: "culture-g", onglet: "quiz" },
  { nom: "accueil-geographie", url: "/", module: "géographie" },
  { nom: "catalogue-geographie", url: "/", module: "géographie", onglet: "atlas" },
  { nom: "serie-geographie", url: "/", module: "géographie", onglet: "jouer" },
];

async function allerA(page, e) {
  await page.goto(BASE + e.url, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  if (e.module) {
    await page.evaluate((id) => {
      const b = Array.from(document.querySelectorAll(".matiere-lien")).find(
        (x) => (x.textContent || "").toLowerCase().includes(id === "culture-g" ? "culture" : id)
      );
      if (b) b.click();
    }, e.module);
    await page.waitForTimeout(1200);
  }
  if (e.onglet) {
    await page.evaluate((cle) => {
      const b = Array.from(document.querySelectorAll(".onglet")).find((x) =>
        (x.textContent || "").toLowerCase().includes(cle)
      );
      if (b) b.click();
    }, e.onglet.toLowerCase());
    await page.waitForTimeout(1600);
  }
  if (e.clic) {
    const ok = await page.evaluate((sel) => {
      const b = document.querySelector(sel);
      if (!b) return false;
      b.click();
      return true;
    }, e.clic);
    if (!ok) console.error(`  ${e.nom} : rien à cliquer sur « ${e.clic} »`);
    await page.waitForTimeout(1800);
  }
}

const nav = await chromium.launch({ executablePath: CHROME });
const modes = process.env.MODE_CONNECTE ? ["invite", "connecte"] : ["invite"];

/**
 * Le thème change TOUS les fonds de la coque.
 *
 * Mesurer un seul thème et conclure que l'application passe le seuil serait
 * une garantie pour un quart de ce qu'on livre. THEME=ardoise n'en mesure
 * qu'un, THEME=tous les mesure les quatre — c'est la forme à passer avant de
 * toucher à une couleur.
 */
const TOUS = ["nuit", "charbon", "jour", "sepia"];
const themes = process.env.THEME === "tous" ? TOUS : [process.env.THEME ?? "nuit"];
const tout = [];
for (const mode of modes) for (const theme of themes) {
  const ctx = await nav.newContext({ viewport: { width: 1440, height: 950 } });
  const page = await ctx.newPage();
  /* Posé avant le premier chargement : le script inline de layout.tsx le lira
     et l'appliquera dès la première peinture, comme pour un vrai visiteur. */
  await ctx.addInitScript((t) => {
    try {
      localStorage.setItem("atelier:theme", t);
    } catch {
      /* rien à faire : le thème par défaut sera mesuré */
    }
  }, theme);
  if (mode === "connecte") {
    const email = `vitest-contraste-${Date.now()}@exemple.test`;
    await page.goto(BASE, { waitUntil: "networkidle" });
    const r = await page.evaluate(async (em) => {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: em, pseudo: "Contraste", password: "correct-cheval-batterie-92" }),
      });
      return { s: res.status, t: (await res.text()).slice(0, 200) };
    }, email);
    if (r.s !== 200 && r.s !== 201) console.error("inscription:", r);
  }
  for (const e of ECRANS) {
    await allerA(page, e);
    const lignes = await page.evaluate(MESURE);
    for (const l of lignes) tout.push({ mode, theme, ecran: e.nom, ...l });
  }
  await ctx.close();
}
await nav.close();

/* Deux rôles ne portent que de l'accessoire — le tiret « rien à revoir » du
   tableau, les points de difficulté du catalogue — et visent 3:1, le seuil
   des éléments non textuels. Tout le reste est du texte, et vise AA. */
const ACCESSOIRES = ["td.rien", "span.diff"];
const seuil = (l) => (ACCESSOIRES.includes(l.nom) ? 3 : l.grand ? 3 : 4.5);
const rates = tout.filter((l) => l.ratio < seuil(l));
const parNom = new Map();
for (const l of rates) {
  const k = l.nom + " | " + l.couleur + " sur " + l.fond;
  if (!parNom.has(k)) parNom.set(k, { ...l, n: 0, ecrans: new Set(), modes: new Set(), themes: new Set() });
  const e = parNom.get(k);
  e.n++;
  e.ecrans.add(l.ecran);
  e.modes.add(l.mode);
  e.themes.add(l.theme);
  e.ratio = Math.min(e.ratio, l.ratio);
}
const liste = [...parNom.values()].sort((a, b) => a.ratio - b.ratio);
console.log(
  `${tout.length} éléments texte mesurés sur ${themes.length} thème(s) — ` +
    `${rates.length} sous le seuil (${liste.length} distincts)\n`
);
for (const l of liste) {
  console.log(
    `${String(l.ratio).padStart(5)}:1  (seuil ${seuil(l)})  ${l.nom}\n` +
      `         ${l.couleur} sur ${l.fond}  ${l.px}px  ×${l.n}  [${[...l.modes].join(",")}·${[...l.themes].join(",")}] ${[...l.ecrans].join(" ")}\n` +
      `         « ${l.texte} »`
  );
}
