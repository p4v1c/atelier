// Vérifie la version web : chargement différé, navigation, quiz, progression.
const fs = require('fs'), vm = require('vm'), path = require('path');
const WEB = path.join(__dirname, 'web');
const code = fs.readFileSync(path.join(WEB, 'app.js'), 'utf8');

let store = {};
function mkEl(tag) {
  return { tagName: tag, _html: '', dataset: {}, style: {}, disabled: false,
    classList: { _s: new Set(), add(c){this._s.add(c)}, remove(c){this._s.delete(c)},
                 toggle(c,on){on?this._s.add(c):this._s.delete(c)}, contains(c){return this._s.has(c)} },
    focus(){}, set innerHTML(v){ this._html = String(v); }, get innerHTML(){ return this._html; } };
}
const viewEl = mkEl('main'), byId = { view: viewEl }, handlers = {};
const isAnswered = () => !!(byId.feedback && byId.feedback._html.length > 0);
let fetches = 0;

const sandbox = {
  console,
  // fetch simulé : sert les fichiers du dossier web/
  fetch(url) {
    fetches++;
    const p = path.join(WEB, url);
    if (!fs.existsSync(p)) return Promise.resolve({ ok: false, status: 404 });
    const txt = fs.readFileSync(p, 'utf8');
    return Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve(JSON.parse(txt)) });
  },
  document: {
    addEventListener(t, fn) { handlers[t] = fn; },
    getElementById(id) {
      if (byId[id]) return byId[id];
      const all = Object.values(byId).map(e => e._html).join('');
      if (all.includes(`id="${id}"`)) { byId[id] = mkEl('div'); return byId[id]; }
      return null;
    },
    querySelector(sel) {
      if (sel === '.ans:disabled') return isAnswered() ? mkEl('button') : null;
      const r = this.querySelectorAll(sel); return r.length ? r[0] : null;
    },
    querySelectorAll(sel) {
      if (sel === '.ans') {
        const ois = [...viewEl._html.matchAll(/data-oi="(\d)"/g)].map(x => x[1]);
        return ois.map(oi => { const b = mkEl('button'); b.dataset.oi = oi; return b; });
      }
      if (sel === '.navbtn') return ['home','quiz','cours','stats'].map(n => { const b = mkEl('button'); b.dataset.nav = n; return b; });
      return [];
    },
  },
  localStorage: { getItem: k => (k in store ? store[k] : null), setItem: (k,v) => { store[k] = String(v); } },
  window: { scrollTo(){}, scrollY: 0 },
  setTimeout, clearTimeout, confirm: () => true,
  Math, JSON, Object, Array, String, Number, Date, Promise, Map, Set, Error, isNaN,
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const $ = n => vm.runInContext(n, sandbox);
const call = (n, ...a) => { sandbox.__a = a; return vm.runInContext(`${n}(...__a)`, sandbox); };
const reset = () => { for (const k of Object.keys(byId)) if (k !== 'view') delete byId[k]; };
const attendre = () => new Promise(r => setImmediate(() => setImmediate(() => setImmediate(r))));

function check(label) {
  const h = viewEl._html;
  if (!h || h.length < 50) throw new Error(`écran vide : ${label}`);
  if (h.includes('undefined') || h.includes('NaN') || h.includes('[object Object]'))
    throw new Error(`valeur non résolue dans ${label}`);
  if (/Chargement impossible|n'ont pas pu être chargées/.test(h)) throw new Error(`erreur affichée : ${label}`);
  console.log(`  ${label.padEnd(38)} ${String(h.length).padStart(6)} car.`);
}

(async () => {
  // le démarrage a été lancé par le script lui-même
  for (let i = 0; i < 20 && !$('INDEX').matieres.length; i++) await attendre();
  const idx = $('INDEX');
  console.log(`index chargé : ${idx.matieres.length} matières, ${idx.total_questions} questions, ${idx.total_lecons} leçons`);
  const apresIndex = fetches;
  check('accueil');
  if ($('DATA').length !== 0 && apresIndex > 2) throw new Error('les matières ne devraient pas être chargées au démarrage');
  console.log(`  ${'requêtes au démarrage'.padEnd(38)} ${apresIndex}`);

  call('go', 'quiz'); await attendre(); check('choix de matière');

  // ouvrir une matière déclenche son chargement
  const avant = fetches;
  await call('go', 'cours', 'sport'); reset(); check('cours d\'une matière');
  if (fetches !== avant + 1) throw new Error('la matière aurait dû être chargée à la demande');
  console.log(`  ${'chargement à la demande'.padEnd(38)} OK`);

  await call('go', 'chapitre', 'sport', 0); reset(); check('une leçon');
  if (!viewEl._html.includes('img/') && !viewEl._html.includes('viz')) throw new Error('leçon sans visuel ni image');
  await call('go', 'fiche', 'sport'); reset(); check('fiche de révision');

  // quiz d'une matière déjà chargée : pas de requête supplémentaire
  const avant2 = fetches;
  await call('startQuiz', 'sport'); reset(); check('quiz d\'une matière');
  if (fetches !== avant2) throw new Error('rechargement inutile d\'une matière déjà en mémoire');

  // répondre, y compris faux
  for (let i = 0; i < 12; i++) {
    const cur = $('quizSession').pool[$('quizSession').idx]; if (!cur) break;
    call('answer', i % 3 === 0 ? (cur.q.bonne + 1) % 4 : cur.q.bonne); call('nextQ'); reset();
  }
  check('après 12 réponses');

  // progression calculée sans charger les autres matières
  const p = call('catProgress', 'sport');
  if (!(p.total > 0 && p.done > 0)) throw new Error('progression non calculée');
  console.log(`  ${'progression sport'.padEnd(38)} ${p.done}/${p.total} = ${p.pct} %`);
  const pAutre = call('catProgress', 'geographie');
  if (pAutre.total === 0) throw new Error('progression impossible sur une matière non chargée');
  console.log(`  ${'progression matière non chargée'.padEnd(38)} total ${pAutre.total} connu`);

  call('go', 'stats'); await attendre(); check('bulletin');

  // quiz toutes matières : charge tout
  await call('startQuiz', null); reset(); check('quiz toutes matières');
  if ($('DATA').length !== idx.matieres.length) throw new Error('toutes les matières auraient dû être chargées');
  console.log(`  ${'quiz mixte : matières chargées'.padEnd(38)} ${$('DATA').length}/${idx.matieres.length}`);

  // révision des erreurs
  if (!call('nbErreurs')) throw new Error('des erreurs auraient dû être enregistrées');
  await call('startRevision'); reset(); check('révision des erreurs');

  // clavier
  const kd = handlers['keydown'];
  if (typeof kd !== 'function') throw new Error('pas de gestionnaire clavier');
  kd({ key: '1', target: { tagName: 'BODY' }, preventDefault(){} });
  if (!isAnswered()) throw new Error('la touche 1 aurait dû répondre');

  // sauvegarde
  const saved = JSON.parse(store['cahier-cg-v1']);
  if (!Object.keys(saved.answers).length) throw new Error('progression non sauvegardée');
  console.log(`\nSauvegarde : ${Object.keys(saved.answers).length} questions suivies`);
  console.log(`Requêtes totales : ${fetches}`);
  console.log('\nVERSION WEB : TOUS LES TESTS PASSENT');
})().catch(e => { console.error('\nÉCHEC :', e.message); process.exit(1); });
