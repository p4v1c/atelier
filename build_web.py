#!/usr/bin/env python3
"""Génère la version « site web » dans web/ : fichiers séparés, chargement à la demande.

    python3 build_web.py

Différences avec build.py (qui produit le fichier unique site.html) :
  - les données de chaque matière vont dans web/data/<id>.json, chargées à la demande
  - les images deviennent de vrais fichiers web/img/<slug>.webp (fini le base64, -33 %)
  - web/index.html ne pèse que la coquille de l'appli
"""
import base64, json, os, re, shutil, sys
import build as noyau            # on réutilise le chargement et la validation

BASE = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.join(BASE, "web")


def charge_tout():
    """rejoue la logique de build.py mais renvoie les catégories au lieu d'écrire le site"""
    cats, errors, seen = [], [], set()
    images = noyau.charge_images()
    manquantes = set()
    fichiers = {os.path.splitext(os.path.basename(p))[0]: p
                for p in __import__("glob").glob(os.path.join(BASE, "data", "*.json"))}
    for cid in noyau.ORDER:
        if cid not in fichiers:
            continue
        with open(fichiers[cid], encoding="utf-8") as f:
            cat = json.load(f)
        extra = sorted(__import__("glob").glob(os.path.join(BASE, "data", "lecons", cid, "*.json")))
        titres = {c["titre"].strip().lower() for c in cat["cours"]}
        for path in extra:
            try:
                with open(path, encoding="utf-8") as f:
                    lec = json.load(f)
            except Exception:
                continue
            if not all(k in lec for k in ("titre", "sections", "quiz")):
                continue
            if lec["titre"].strip().lower() in titres:
                continue
            titres.add(lec["titre"].strip().lower())
            cat["cours"].append(lec)
        noyau.resout_images(cat, images, manquantes)
        errors += noyau.validate(cat, cid)
        for c in cat["cours"]:
            garde = []
            for q in c["quiz"]:
                k = noyau.cle(q["q"])
                if k in seen: continue
                seen.add(k); garde.append(q)
            c["quiz"] = garde
        kept = []
        for q in cat["questions"]:
            k = noyau.cle(q["q"])
            if k in seen: continue
            seen.add(k); kept.append(q)
        cat["questions"] = kept
        cats.append(cat)
    if errors:
        print("\n".join(errors)); sys.exit(1)
    return cats


def extrait_images(cats):
    """remplace les data URI par des chemins de fichiers, et écrit les .webp"""
    os.makedirs(os.path.join(WEB, "img"), exist_ok=True)
    vus, poids = {}, 0
    for cat in cats:
        for c in cat["cours"]:
            for s in c.get("sections", []):
                for v in s.get("visuels", []):
                    if v.get("type") != "image" or not v.get("data"):
                        continue
                    slug = v.get("image") or "img"
                    if slug not in vus:
                        octets = base64.b64decode(v["data"].split(",", 1)[1])
                        with open(os.path.join(WEB, "img", slug + ".webp"), "wb") as f:
                            f.write(octets)
                        vus[slug] = len(octets)
                    v["src"] = f"img/{slug}.webp"
                    del v["data"]
    poids = sum(vus.values())
    return len(vus), poids



# --------------------------------------------------------------------------
# Génération de la coquille : index.html + style.css + app.js
# Le JS vient de app_template.html, adapté au chargement à la demande.
# --------------------------------------------------------------------------

REMPLACEMENTS = [
    # 1. les données ne sont plus injectées : on les charge
    ("const DATA = /*__DATA__*/[];",
     """let DATA = [];               // matières réellement chargées
let INDEX = { matieres: [], total_questions: 0, total_lecons: 0 };
const chargees = new Map();  // id -> promesse de chargement"""),

    # 2. identifiants attribués à la réception, et chargement d'une matière
    ("""/* ids */
DATA.forEach(cat => {
  cat.questions.forEach((q, i) => q.id = cat.id + ':q' + i);
  (cat.cours || []).forEach((c, ci) => {
    c.key = cat.id + ':c' + ci;
    c.quiz.forEach((q, qi) => q.id = c.key + ':q' + qi);
  });
});

const TOTAL_Q = DATA.reduce((n, c) => n + c.questions.length + c.cours.reduce((m, x) => m + x.quiz.length, 0), 0);""",
     """let TOTAL_Q = 0;

/* attribue les identifiants stables d'une matière fraîchement chargée */
function indexer(cat) {
  cat.questions.forEach((q, i) => q.id = cat.id + ':q' + i);
  (cat.cours || []).forEach((c, ci) => {
    c.key = cat.id + ':c' + ci;
    c.quiz.forEach((q, qi) => q.id = c.key + ':q' + qi);
  });
  return cat;
}

/* charge une matière si elle ne l'est pas déjà */
function charger(id) {
  if (chargees.has(id)) return chargees.get(id);
  const p = fetch('data/' + id + '.json')
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(cat => {
      indexer(cat);
      DATA.push(cat);
      DATA.sort((a, b) => INDEX.matieres.findIndex(m => m.id === a.id)
                        - INDEX.matieres.findIndex(m => m.id === b.id));
      return cat;
    });
  chargees.set(id, p);
  return p;
}
const chargerTout = () => Promise.all(INDEX.matieres.map(m => charger(m.id)));
const trouver = id => DATA.find(c => c.id === id);

function patienter(message) {
  view.innerHTML = `<p class="eyebrow">Un instant</p>
    <h1>${esc(message)}</h1>
    <div class="bar" style="margin-top:20px"><i style="width:35%"></i></div>`;
}"""),

    # 3. progression calculée depuis les identifiants, sans charger la matière
    ("""function catProgress(cat) {
  let done = 0, total = 0;
  cat.questions.forEach(q => { total++; if (S.answers[q.id] && S.answers[q.id].ok) done++; });
  cat.cours.forEach(c => {
    c.sections.forEach((s, i) => { total++; if ((S.read[c.key] || []).includes(i)) done++; });
    c.quiz.forEach(q => { total++; if (S.answers[q.id] && S.answers[q.id].ok) done++; });
  });
  return { done, total, pct: total ? Math.round(100 * done / total) : 0 };
}""",
     """/* la progression se calcule à partir des identifiants, sans charger la matière :
   ils sont préfixés par l'id de la matière (« sport:q12 », « sport:c3:q1 ») */
function catProgress(cat) {
  const id = typeof cat === 'string' ? cat : cat.id;
  const meta = INDEX.matieres.find(m => m.id === id);
  if (!meta) return { done: 0, total: 0, pct: 0 };
  const prefixe = id + ':';
  let done = 0;
  for (const k in S.answers) if (k.startsWith(prefixe) && S.answers[k].ok) done++;
  for (const k in S.read) if (k.startsWith(prefixe)) done += S.read[k].length;
  const total = meta.n_questions + meta.n_sections;
  return { done, total, pct: total ? Math.round(100 * done / total) : 0 };
}"""),

    # 4. écrans de liste : l'index suffit
    ("""    <div class="catgrid">${DATA.map(cat => {
      const p = catProgress(cat);
      return `<button class="catcard" onclick="startQuiz('${cat.id}')">
        <span class="head"><span class="emoji">${cat.emoji}</span><span class="name">${esc(cat.nom)}</span></span>
        <span class="meta">${cat.questions.length} questions · ${cat.cours.length} leçons · ${p.pct}% acquis</span>
        <span class="bar"><i style="width:${p.pct}%"></i></span>
      </button>`;
    }).join('')}</div>`;""",
     """    <div class="catgrid">${INDEX.matieres.map(m => {
      const p = catProgress(m.id);
      return `<button class="catcard" onclick="startQuiz('${m.id}')">
        <span class="head"><span class="emoji">${m.emoji}</span><span class="name">${esc(m.nom)}</span></span>
        <span class="meta">${m.n_questions} questions · ${m.n_lecons} leçons · ${p.pct}% acquis</span>
        <span class="bar"><i style="width:${p.pct}%"></i></span>
      </button>`;
    }).join('')}</div>`;"""),

    ("""      ${DATA.map(cat => {
        const p = catProgress(cat);
        return `<button class="catcard" onclick="startQuiz('${cat.id}')">
          <span class="head"><span class="emoji">${cat.emoji}</span><span class="name">${esc(cat.nom)}</span></span>
          <span class="meta">${cat.questions.length} questions · ${p.pct}% acquis</span>
          <span class="bar"><i style="width:${p.pct}%"></i></span>
        </button>`;
      }).join('')}""",
     """      ${INDEX.matieres.map(m => {
        const p = catProgress(m.id);
        return `<button class="catcard" onclick="startQuiz('${m.id}')">
          <span class="head"><span class="emoji">${m.emoji}</span><span class="name">${esc(m.nom)}</span></span>
          <span class="meta">${m.n_questions} questions · ${p.pct}% acquis</span>
          <span class="bar"><i style="width:${p.pct}%"></i></span>
        </button>`;
      }).join('')}"""),

    ("""      <div class="catgrid" style="margin-top:22px">${DATA.map(cat => {
        const p = catProgress(cat);
        return `<button class="catcard" onclick="go('cours','${cat.id}')">
          <span class="head"><span class="emoji">${cat.emoji}</span><span class="name">${esc(cat.nom)}</span></span>
          <span class="meta">${cat.cours.length} leçons · ${p.pct}% acquis</span>
          <span class="bar"><i style="width:${p.pct}%"></i></span>
        </button>`;
      }).join('')}</div>`;""",
     """      <div class="catgrid" style="margin-top:22px">${INDEX.matieres.map(m => {
        const p = catProgress(m.id);
        return `<button class="catcard" onclick="go('cours','${m.id}')">
          <span class="head"><span class="emoji">${m.emoji}</span><span class="name">${esc(m.nom)}</span></span>
          <span class="meta">${m.n_lecons} leçons · ${p.pct}% acquis</span>
          <span class="bar"><i style="width:${p.pct}%"></i></span>
        </button>`;
      }).join('')}</div>`;"""),

    ("""    <div class="chapters">${DATA.map(cat => {
      const p = catProgress(cat);
      return `<div class="card plain chapter" style="cursor:default">
        <span class="row"><h3>${cat.emoji} ${esc(cat.nom)}</h3>""",
     """    <div class="chapters">${INDEX.matieres.map(cat => {
      const p = catProgress(cat.id);
      return `<div class="card plain chapter" style="cursor:default">
        <span class="row"><h3>${cat.emoji} ${esc(cat.nom)}</h3>"""),

    # 5. routeur : charge la matière avant les écrans de contenu
    ("""function go(screen, arg, arg2) {
  document.querySelectorAll('.navbtn').forEach(b => b.classList.toggle('active', b.dataset.nav === screen));
  window.scrollTo(0, 0);
  if (screen === 'home') renderHome();""",
     """async function go(screen, arg, arg2) {
  document.querySelectorAll('.navbtn').forEach(b => b.classList.toggle('active', b.dataset.nav === screen));
  window.scrollTo(0, 0);
  if (['cours', 'chapitre', 'fiche'].includes(screen) && arg && !trouver(arg)) {
    patienter('Chargement de la matière…');
    try { await charger(arg); }
    catch (e) { return erreurChargement(arg); }
  }
  if (screen === 'home') renderHome();"""),

    ("""  else if (screen === 'stats') renderStats();
}""",
     """  else if (screen === 'stats') renderStats();
}

function erreurChargement(id) {
  view.innerHTML = `<p class="eyebrow" style="color:var(--ko)">Chargement impossible</p>
    <h1>Cette matière n'a pas pu être chargée</h1>
    <p class="muted" style="margin-top:10px;max-width:60ch">Vérifie ta connexion, puis réessaie.</p>
    <div class="btnrow">
      <button class="btn blue" onclick="chargees.delete('${id}');go('cours','${id}')">Réessayer</button>
      <button class="btn ghost" onclick="go('home')">Retour à l'accueil</button>
    </div>`;
}"""),

    # 6. quiz et révision : charger ce qu'il faut
    ("""function startQuiz(catId) {
  document.querySelectorAll('.navbtn').forEach(b => b.classList.toggle('active', b.dataset.nav === 'quiz'));
  let pool = [];""",
     """async function startQuiz(catId) {
  document.querySelectorAll('.navbtn').forEach(b => b.classList.toggle('active', b.dataset.nav === 'quiz'));
  window.scrollTo(0, 0);
  try {
    if (catId) { if (!trouver(catId)) { patienter('Chargement de la matière…'); await charger(catId); } }
    else if (DATA.length < INDEX.matieres.length) {
      patienter('Préparation du quiz toutes matières…');
      await chargerTout();
    }
  } catch (e) { return erreurChargement(catId || INDEX.matieres[0].id); }
  let pool = [];"""),

    ("""function startRevision() {
  const pool = shuffle(missedPool());""",
     """async function startRevision() {
  if (DATA.length < INDEX.matieres.length) {
    patienter('Rassemblement de tes erreurs…');
    try { await chargerTout(); } catch (e) { return erreurChargement(INDEX.matieres[0].id); }
  }
  const pool = shuffle(missedPool());"""),

    ("""/* questions déjà ratées au moins une fois et pas encore acquises */""",
     """/* nombre d'erreurs connu sans charger les matières : les identifiants suffisent */
function nbErreurs() {
  let n = 0;
  for (const k in S.answers) if (!S.answers[k].ok) n++;
  return n;
}

/* questions déjà ratées au moins une fois et pas encore acquises */"""),

    ("  const missed = missedPool();", "  const missed = { length: nbErreurs() };"),

    ("""      ${missedPool().length ? `<button class="btn blue" onclick="startRevision()">Réviser mes ${missedPool().length} erreurs →</button>` : ''}""",
     """      ${nbErreurs() ? `<button class="btn blue" onclick="startRevision()">Réviser mes ${nbErreurs()} erreurs →</button>` : ''}"""),

    # 7. images : fichiers séparés
    ("  } else if (v.type === 'image' && v.data) {",
     "  } else if (v.type === 'image' && (v.src || v.data)) {"),
    ("""        <img src="${esc(v.data)}" alt=""",
     """        <img src="${esc(v.src || v.data)}" alt="""),

    # 8. démarrage
    ("go('home');\n",
     """/* ---------- démarrage ---------- */
async function boot() {
  patienter('Chargement…');
  try {
    const r = await fetch('data/index.json');
    if (!r.ok) throw new Error(r.status);
    INDEX = await r.json();
    TOTAL_Q = INDEX.total_questions;
  } catch (e) {
    view.innerHTML = `<p class="eyebrow" style="color:var(--ko)">Erreur</p>
      <h1>Les données n'ont pas pu être chargées</h1>
      <p class="muted" style="margin-top:10px">Vérifie ta connexion et recharge la page.</p>`;
    return;
  }
  go('home');
  if ('requestIdleCallback' in window) requestIdleCallback(() => chargerTout().catch(() => {}));
  else setTimeout(() => chargerTout().catch(() => {}), 3000);
}

boot();
"""),
]


def genere_coquille():
    """écrit web/index.html, web/style.css et web/app.js"""
    tpl = open(os.path.join(BASE, "app_template.html"), encoding="utf-8").read()
    style = re.search(r"<style>(.*?)</style>", tpl, re.S).group(1)
    script = re.search(r"<script>(.*?)</script>", tpl, re.S).group(1)
    corps = re.search(r"(<div class=\"wrap\">.*?</div>)\s*<script>", tpl, re.S).group(1)

    for vieux, neuf in REMPLACEMENTS:
        if script.count(vieux) != 1:
            raise SystemExit(f"adaptation impossible, motif introuvable ou ambigu :\n{vieux[:90]}…")
        script = script.replace(vieux, neuf, 1)

    html = ('<!doctype html>\n<html lang="fr">\n<head>\n'
            '<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
            '<title>Le Cahier de culture G</title>\n'
            '<meta name="description" content="Réviser la culture générale : '
            '2200 questions avec mini-cours, 280 leçons illustrées, 14 matières.">\n'
            '<meta name="theme-color" content="#FAFAF8">\n'
            "<link rel=\"icon\" href=\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' "
            "viewBox='0 0 100 100'><text y='.9em' font-size='90'>📘</text></svg>\">\n"
            '<link rel="stylesheet" href="style.css">\n</head>\n<body>\n'
            + corps + '\n<script src="app.js"></script>\n</body>\n</html>\n')

    open(os.path.join(WEB, "index.html"), "w", encoding="utf-8").write(html)
    open(os.path.join(WEB, "style.css"), "w", encoding="utf-8").write(style)
    open(os.path.join(WEB, "app.js"), "w", encoding="utf-8").write(script)
    return len(html), len(style), len(script)


def main():
    cats = charge_tout()
    if os.path.isdir(WEB):
        shutil.rmtree(WEB)
    os.makedirs(os.path.join(WEB, "data"), exist_ok=True)

    n_img, poids_img = extrait_images(cats)

    # index léger : ce qu'il faut pour afficher l'accueil sans charger le contenu
    index = {"matieres": [], "total_questions": 0, "total_lecons": 0}
    for cat in cats:
        nq = len(cat["questions"]) + sum(len(c["quiz"]) for c in cat["cours"])
        index["matieres"].append({
            "id": cat["id"], "nom": cat["nom"], "emoji": cat["emoji"],
            "n_questions": nq, "n_lecons": len(cat["cours"]),
            "n_sections": sum(len(c["sections"]) for c in cat["cours"]),
        })
        index["total_questions"] += nq
        index["total_lecons"] += len(cat["cours"])
        with open(os.path.join(WEB, "data", cat["id"] + ".json"), "w", encoding="utf-8") as f:
            json.dump(cat, f, ensure_ascii=False, separators=(",", ":"))
    with open(os.path.join(WEB, "data", "index.json"), "w", encoding="utf-8") as f:
        json.dump(index, f, ensure_ascii=False, separators=(",", ":"))

    nh, ns, nj = genere_coquille()
    tailles = {c["id"]: os.path.getsize(os.path.join(WEB, "data", c["id"] + ".json")) for c in cats}
    print(f"{len(cats)} matieres, {index['total_questions']} questions, {index['total_lecons']} lecons")
    print(f"  coquille        {(nh+ns+nj)/1024:6.1f} Ko  (index.html + style.css + app.js)")
    print(f"  index.json      {os.path.getsize(os.path.join(WEB,'data','index.json'))/1024:6.1f} Ko  (charge au demarrage)")
    print(f"  matiere moyenne {sum(tailles.values())/len(tailles)/1024:6.1f} Ko  (chargee a la demande)")
    print(f"  {n_img} images    {poids_img/1048576:6.2f} Mo  (chargees quand affichees)")
    return cats, index


if __name__ == "__main__":
    main()
