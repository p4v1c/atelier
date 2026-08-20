// Exécute le JS du site dans un DOM simulé et vérifie chaque écran.
const fs = require('fs'), vm = require('vm'), path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'site.html'), 'utf8');
const m = html.match(/<script>([\s\S]*)<\/script>/);
if (!m) throw new Error('script introuvable');
const code = m[1];

let store = {};
function mkEl(tag) {
  return {
    tagName: tag, _html: '', dataset: {}, style: {}, disabled: false,
    classList: { _s: new Set(), add(c){this._s.add(c)}, remove(c){this._s.delete(c)},
                 toggle(c,on){on?this._s.add(c):this._s.delete(c)}, contains(c){return this._s.has(c)} },
    focus() {},
    set innerHTML(v) { this._html = String(v); },
    get innerHTML() { return this._html; },
  };
}
const viewEl = mkEl('main'), rendered = [], byId = { view: viewEl }, handlers = {};
const isAnswered = () => !!(byId.feedback && byId.feedback._html.length > 0);
const sandbox = {
  console,
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
  confirm: () => true,
  Math, JSON, Object, Array, String, Number, Date,
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const $ = n => vm.runInContext(n, sandbox);
const call = (n, ...args) => {
  sandbox.__a = args;
  const r = vm.runInContext(`${n}(...__a)`, sandbox);
  if (['renderQuestion','startQuiz','startRevision','startChapterQuiz','nextQ','go'].includes(n))
    for (const k of Object.keys(byId)) if (k !== 'view') delete byId[k];
  return r;
};
function check(label, quiet) {
  // les data URI d'images contiennent du base64 où « NaN » ou « undefined »
  // peuvent apparaître par hasard : on les neutralise avant l'inspection
  const h = viewEl._html.replace(/data:image\/[a-z+]+;base64,[A-Za-z0-9+/=]+/g, 'DATA_URI');
  if (!h || h.length < 50) throw new Error(`écran vide: ${label}`);
  if (h.includes('undefined') || h.includes('NaN') || h.includes('[object Object]'))
    throw new Error(`valeur non résolue dans ${label}`);
  if (!quiet) rendered.push(`${label.padEnd(34)} ${String(h.length).padStart(7)} car.`);
}

const D = $('DATA');
console.log(`Catégories : ${D.length}   Questions : ${$('TOTAL_Q')}   Leçons : ${D.reduce((n,c)=>n+c.cours.length,0)}`);

call('go','home'); check('accueil');
call('go','quiz'); check('choix de matière');
call('startQuiz', null); check('question de quiz');
for (let i = 0; i < 30; i++) {
  const cur = $('quizSession').pool[$('quizSession').idx]; if (!cur) break;
  call('answer', i % 3 === 0 ? (cur.q.bonne + 1) % 4 : cur.q.bonne);   // 1/3 de mauvaises réponses
  call('nextQ');
}
check('après 30 réponses');
$('quizSession').idx = $('quizSession').pool.length;
call('renderQuestion'); check('bilan de fin de quiz');
call('go','cours'); check('accueil cours');

// chaque matière : chaque leçon, chaque section, chaque mini-quiz
let sourcesVues = 0;
D.forEach(cat => {
  call('go','cours', cat.id); check(`cours ${cat.id}`, true);
  call('go','fiche', cat.id); check(`fiche ${cat.id}`, true);
  cat.cours.forEach((c, ci) => {
    call('go','chapitre', cat.id, ci); check(`chapitre ${cat.id}/${ci}`, true);
    if (Array.isArray(c.sources) && c.sources.length) {
      const h = viewEl._html;
      if (!h.includes('Sources consultées')) throw new Error(`sources absentes : ${c.titre}`);
      if (!h.includes('rel="noopener noreferrer"')) throw new Error(`lien non sécurisé : ${c.titre}`);
      sourcesVues++;
    }
    c.sections.forEach((s, si) => call('markRead', cat.id, ci, si));
    call('startChapterQuiz', cat.id, ci);
    while ($('quizSession').idx < $('quizSession').pool.length) {
      call('answer', $('quizSession').pool[$('quizSession').idx].q.bonne); call('nextQ');
    }
  });
});
check('toutes les leçons parcourues');
rendered.push(`fiches + sources (${sourcesVues} leçons)`.padEnd(34) + '     OK');

// révision des erreurs : doit contenir les ratées, puis se vider
if (!call('missedPool').length) throw new Error('le pool de révision devrait contenir les ratées');
call('startRevision'); check('révision des erreurs');
while ($('quizSession').idx < $('quizSession').pool.length) {
  call('answer', $('quizSession').pool[$('quizSession').idx].q.bonne); call('nextQ');
}
if (call('missedPool').length !== 0) throw new Error('les erreurs corrigées devraient sortir du pool');

// tout réussir -> 100 % partout
D.forEach(cat => {
  call('startQuiz', cat.id);
  const qs = $('quizSession');
  while (qs.idx < qs.pool.length) { call('answer', qs.pool[qs.idx].q.bonne); call('nextQ'); }
});
call('go','stats'); check('bulletin (tout acquis)');
D.forEach(cat => {
  const p = call('catProgress', cat);
  if (p.pct !== 100) throw new Error(`${cat.nom} : ${p.pct} % au lieu de 100 %`);
});

// clavier
call('startQuiz', null);
const kd = handlers['keydown'];
if (typeof kd !== 'function') throw new Error('pas de gestionnaire clavier');
const before = $('quizSession').idx;
kd({ key: '1', target: { tagName: 'BODY' }, preventDefault(){} });
if (!isAnswered()) throw new Error('la touche 1 aurait dû répondre');
kd({ key: 'Enter', target: { tagName: 'BODY' }, preventDefault(){} });
for (const k of Object.keys(byId)) if (k !== 'view') delete byId[k];
if ($('quizSession').idx !== before + 1) throw new Error('Entrée aurait dû passer à la suivante');
kd({ key: '2', target: { tagName: 'INPUT' }, preventDefault(){} });
if (isAnswered()) throw new Error('une frappe dans un champ ne doit pas répondre');
rendered.push('clavier 1-4 + Entrée'.padEnd(34) + '     OK');

const saved = JSON.parse(store['cahier-cg-v1']);
if (!saved.answers || !Object.keys(saved.answers).length) throw new Error('progression non sauvegardée');
console.log('\n' + rendered.join('\n'));
console.log(`\nSauvegarde : ${Object.keys(saved.answers).length} questions suivies, ${Object.keys(saved.read).length} leçons`);
console.log('\nTOUS LES ÉCRANS OK');
