/*
  <acoolsure-academico> · Colegio Militar Acoolsure · sección Académico
  Custom Element para Wix Studio (Add Elements → Embed Code → Custom Element).
  - Tag name: acoolsure-academico
  - Altura del elemento en Studio: unos 1200vh (≈ 12 pantallas). Es el "largo" del scroll.
  - Ancho: a todo el ancho de la sección.
  Funciona con una escena fija (fixed o sticky, se elige solo) que avanza según el scroll.
*/
(function () {
  'use strict';
  var TAG = 'acoolsure-academico';
  if (customElements.get(TAG)) return;

  var TOP_OFFSET = 72;        // px que ocupa el menú de Wix arriba (ajústalo si el menú es más alto/bajo)
  var DEFAULT_HEIGHT = '1200vh';
  var GSAP_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
  var FONTS = 'https://fonts.googleapis.com/css2?family=Fraunces:wght@600;800&family=Inter:wght@400;500;600&display=swap';

  var CSS = `
:host{--bg:#fff;--ink:#14261b;--mut:#55655b;--card:#f3f6f2;--line:#dde4da;--green:#1b3a2a;--gold:#c9a24b;--goldt:#8a6a12;display:block;position:relative;width:100%;height:100%;font:400 17px/1.6 Inter,system-ui,sans-serif;color:var(--ink)}
*{box-sizing:border-box;margin:0}
h1,h2,h3{font-family:Fraunces,Georgia,serif;line-height:1.05}
h2{font-size:clamp(1.5rem,3.6vw,2.8rem);font-weight:800;color:var(--green)}
.st{position:absolute;top:0;left:0;width:100%;height:100vh;height:100dvh;overflow:hidden;background:var(--bg)}
.st.sticky{position:sticky}
.pb{position:absolute;left:0;top:0;height:4px;width:100%;background:var(--gold);transform:scaleX(0);transform-origin:0 50%;z-index:10}
.sc{position:absolute;inset:0;display:grid;align-content:center;padding:var(--top) 0 20px;background:var(--bg);opacity:0;visibility:hidden;overflow:hidden}
#s0{opacity:1;visibility:visible;border-bottom:6px solid var(--gold)}
.in{width:100%;max-width:1100px;margin:0 auto;padding:0 24px}
.ey{display:block;font:600 .74rem/1 Inter,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:var(--goldt);margin-bottom:12px}
.tg{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}.tg span{border:1px solid var(--gold);color:var(--goldt);padding:3px 12px;border-radius:99px;font-size:.8rem}
/* hero */
#ht{display:block;overflow:hidden;padding-bottom:.1em;font-size:clamp(2.4rem,13vw,10rem);font-weight:800;color:var(--green);letter-spacing:-.02em;white-space:nowrap}
.l{display:inline-block}.li{display:inline-block;animation:up 1s cubic-bezier(.2,.8,.2,1) backwards;animation-delay:calc(var(--i)*60ms)}
@keyframes up{from{transform:translateY(110%);opacity:0}}
@keyframes fi{from{opacity:0;transform:translateY(18px)}}
.lead{max-width:50ch;color:var(--mut);margin-top:14px;font-size:1.08rem;animation:fi 1s .6s backwards}
.ruler{display:flex;margin-top:46px;border-top:2px solid var(--green);animation:fi 1s .9s backwards}
.ruler i{flex:1;font:600 .7rem/1 Inter,sans-serif;color:var(--mut);font-style:normal;text-align:center;padding-top:10px;position:relative}
.ruler b{position:absolute;left:50%;top:0;width:2px;height:14px;margin-left:-1px;background:var(--gold)}
.hint{margin-top:26px;font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;color:var(--goldt)}
/* camino */
.cm{display:grid;grid-template-columns:1fr 1fr;gap:26px;align-items:center}
.pns{position:relative;min-height:290px;margin-top:18px}
.pn{position:absolute;inset:0 0 auto 0;opacity:0;transform:translateY(24px);transition:.5s;pointer-events:none}
.pn.on{opacity:1;transform:none}
.pn .g{font:800 clamp(2.2rem,5vw,4rem)/1 Fraunces,serif;color:var(--gold)}
.pn h3{font-size:1.7rem;margin:6px 0 8px;color:var(--green)}.pn p{color:var(--mut);font-size:.98rem}
#sv{width:100%;max-height:calc(100vh - 150px);overflow:visible}
#rd0{fill:none;stroke:var(--line);stroke-width:10;stroke-linecap:round}#rd{fill:none;stroke:var(--green);stroke-width:10;stroke-linecap:round}
.dt{fill:#fff;stroke:var(--gold);stroke-width:5;transition:.3s}.dt.on{fill:var(--gold)}
#sv text{font:600 17px Inter,sans-serif;fill:var(--ink)}#mk circle{fill:var(--green);stroke:#fff;stroke-width:4}
/* rueda */
#s2{background:var(--card);text-align:center}
.wh{position:relative;width:min(86vw,520px,max(220px,calc(100vh - 300px)));aspect-ratio:1;margin:12px auto 0;border:1.5px dashed var(--gold);border-radius:50%}
.it{position:absolute;left:50%;top:50%;width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid var(--gold);display:grid;place-items:center;font:800 1rem Fraunces,serif;color:var(--goldt);transition:background .3s,color .3s}
.it span{position:absolute;top:60px;white-space:nowrap;font:600 .78rem Inter,sans-serif;color:var(--ink);opacity:0;transition:.3s}
.it.on{background:var(--green);color:#fff;border-color:var(--green)}.it.on span{opacity:1}
.ctr{position:absolute;inset:17% 14%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:6px;font-size:.9rem;color:var(--mut)}
.ctr h3{font-size:clamp(1.05rem,2.4vw,1.5rem);color:var(--green)}.ctr .tg{justify-content:center;margin-top:2px}
/* idiomas */
#s3,#s6{background:var(--green);color:#fff}
#s3 .ey,#s6 q{color:var(--gold)}#s3 h2{color:#fff}
.en{position:relative;font:800 clamp(3.2rem,17vw,13rem)/1 Fraunces,serif;margin:14px 0 6px;white-space:nowrap}
.en .o{color:transparent;-webkit-text-stroke:1.5px var(--gold)}.en .f{position:absolute;left:0;top:0;color:var(--gold);clip-path:inset(0 100% 0 0)}
.cp{position:relative;display:flex;justify-content:space-between;padding-top:16px;border-top:3px solid rgba(255,255,255,.2);font-size:.88rem;margin-bottom:22px}
.cp i{position:absolute;left:0;top:-3px;height:3px;width:100%;background:var(--gold);transform-origin:0 50%;transform:scaleX(0)}
.pc{max-width:62ch;margin-bottom:22px;opacity:.9;font-size:.95rem}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.g4 div{border:1px solid rgba(255,255,255,.25);border-radius:16px;padding:16px}
.g4 h3{font-size:1.05rem;margin-bottom:6px;color:var(--gold)}.g4 p{font-size:.85rem;opacity:.9;line-height:1.45}
/* tecnologia */
.row{padding:16px 0;border-top:1px solid var(--line)}.row:last-child{border-bottom:1px solid var(--line)}
.row h3{font-size:clamp(2.3rem,9vw,7rem);font-weight:800;color:transparent;-webkit-text-stroke:1.5px var(--green);white-space:nowrap;width:max-content}
.row p{max-width:60ch;color:var(--mut);margin:6px 24px 0;font-size:.95rem}
/* evaluacion */
.stairs{--H:min(30vh,300px);display:grid;grid-template-columns:repeat(4,1fr);gap:12px;align-items:end;margin-top:18px}
.col{display:flex;flex-direction:column;justify-content:flex-end}.stp{flex:none;border-radius:14px 14px 0 0;transform-origin:50% 100%}
.col:nth-child(1) .stp{height:calc(var(--H)*.24);background:#cfe0cf}.col:nth-child(2) .stp{height:calc(var(--H)*.48);background:#8fb08f}
.col:nth-child(3) .stp{height:calc(var(--H)*.72);background:#2f6a47}.col:nth-child(4) .stp{height:calc(var(--H)*.96);background:var(--gold)}
.lb{padding-top:8px}.lb b{display:block;font:800 1.05rem Fraunces,serif;color:var(--green)}.lb small{color:var(--mut)}
.dm{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:20px}
.dm div{background:var(--card);border-radius:16px;padding:14px 18px}.dm h3{font-size:1.05rem;color:var(--green);margin-bottom:4px}.dm p{font-size:.82rem;color:var(--mut);line-height:1.45}
/* cierre */
#s6{text-align:center}
#s6 q{display:block;font:800 clamp(1.7rem,4.6vw,3.2rem)/1.15 Fraunces,serif;max-width:20ch;margin:0 auto 22px;quotes:"“" "”"}
#s6 p{opacity:.85;font-size:.92rem;padding:0 24px}
@media(max-width:800px){
 .cm{grid-template-columns:1fr;gap:0}.pns{min-height:230px;margin-top:8px}.pn h3{font-size:1.4rem}.pn p{font-size:.9rem}
 #sv{max-height:34vh}.g4{grid-template-columns:1fr 1fr;gap:10px}.g4 div{padding:12px}.g4 p{font-size:.78rem}
 .pc{display:none}.ctr{inset:20% 11%;font-size:.78rem}.ctr .tg span{font-size:.68rem;padding:2px 8px}.dm{grid-template-columns:1fr}.dm p{font-size:.76rem}
 .ruler{margin-top:30px}.cp{font-size:.78rem}
}
@media(prefers-reduced-motion:reduce){.li,.lead,.ruler{animation:none}}
`;

  var HTML = `
<div class="st" id="st"><div class="pb" id="pb"></div>
<section class="sc" id="s0"><div class="in"><span class="ey">Colegio Militar Acoolsure</span><h1 id="ht" aria-label="Académico"></h1>
 <p class="lead">Pensamiento crítico, valores y liderazgo: innovación y disciplina en cada área del conocimiento.</p>
 <div class="ruler" id="ruler"></div><div class="hint">Desliza para explorar ↓</div></div></section>

<section class="sc" id="s1"><div class="in cm"><div><span class="ey">El camino del cadete</span><h2>Catorce grados, un solo recorrido</h2>
 <div class="pns">
  <div class="pn on"><div class="g">PJ · J · T</div><h3>Preescolar</h3><p>Prejardín, Jardín y Transición: un ambiente seguro y estimulante para las habilidades básicas y los valores de respeto, responsabilidad y disciplina.</p><div class="tg"><span>Fuerzas armadas de Colombia</span><span>Grados e himnos</span></div></div>
  <div class="pn"><div class="g">1° – 5°</div><h3>Básica primaria</h3><p>Currículo dinámico que promueve la curiosidad, el trabajo en equipo, el aprendizaje activo y el pensamiento crítico.</p><div class="tg"><span>Historia de cada fuerza</span><span>Disciplina</span></div></div>
  <div class="pn"><div class="g">6° – 8°</div><h3>Secundaria</h3><p>Orientación militar junto a matemáticas, ciencias, lenguaje y estudios sociales. Con el Proyecto de Robótica diseñan, construyen y programan robots.</p><div class="tg"><span>Proyecto de Robótica</span><span>Orientación militar</span></div></div>
  <div class="pn"><div class="g">9° – 11°</div><h3>Media</h3><p>Instrucción militar más formal, con ejercicios de campo y simulacros, junto a asignaturas académicas avanzadas.</p><div class="tg"><span>Orden cerrado</span><span>Tácticas de liderazgo</span><span>Ética militar</span></div></div>
 </div></div>
 <svg id="sv" viewBox="0 0 600 520" aria-hidden="true"><path id="rd0" d="M70 480C70 380 300 440 300 340C300 250 540 300 530 190C520 90 160 150 300 40"/><path id="rd" d="M70 480C70 380 300 440 300 340C300 250 540 300 530 190C520 90 160 150 300 40"/><g id="dg"></g><g id="mk"><circle r="13"/></g></svg>
</div></section>

<section class="sc" id="s2"><div class="in"><span class="ey">Programas</span><h2>Cinco programas giran alrededor del estudiante</h2><div class="wh" id="wh"><div class="ctr" id="ctr"></div></div></div></section>

<section class="sc" id="s3"><div class="in"><span class="ey">Idiomas</span><h2>Inglés con certificación internacional</h2>
 <div class="en"><span class="o">ENGLISH</span><span class="f" id="enf">ENGLISH</span></div>
 <div class="cp" id="cp"><i></i><p>Evaluación al inicio del periodo</p><p style="text-align:right">Evaluación al cierre del periodo</p></div>
 <p class="pc">Certificación anual en alianza con la Universidad de San Diego, avalada por el MCER: dos evaluaciones al año para medir el avance real.</p>
 <div class="g4"><div><h3>Clases diarias</h3><p>Gramática, vocabulario y comunicación con juegos, debates y simulaciones.</p></div><div><h3>Inmersión</h3><p>Presentaciones y proyectos grupales solo en inglés.</p></div><div><h3>Certificaciones</h3><p>Preparación para TOEFL, Cambridge e IELTS.</p></div><div><h3>Knowledge of the World</h3><p>Ciencia, cultura e historia en inglés con metodología CLIL.</p></div></div>
</div></section>

<section class="sc" id="s4"><div class="in"><span class="ey">Tecnología y recursos</span><h2>Aprender con las herramientas de hoy</h2></div>
 <div style="margin-top:22px">
  <div class="row"><h3>Aulas digitales</h3><p>Proyectores, pizarras interactivas y sonido. Tareas y exámenes en línea.</p></div>
  <div class="row"><h3>Laboratorios</h3><p>Robótica, Office avanzado, software educativo y talleres de tecnología aplicada.</p></div>
  <div class="row"><h3>Plataformas</h3><p>Q10, unoi y Richmond, con libros electrónicos, videos educativos y simulaciones.</p></div>
 </div></section>

<section class="sc" id="s5"><div class="in"><span class="ey">Sistema de evaluación</span><h2>Cuatro niveles de desempeño</h2>
 <div class="stairs">
  <div class="col"><div class="stp"></div><div class="lb"><b>Bajo</b><small>1.00 – 6.49</small></div></div>
  <div class="col"><div class="stp"></div><div class="lb"><b>Básico</b><small>6.50 – 7.99</small></div></div>
  <div class="col"><div class="stp"></div><div class="lb"><b>Alto</b><small>8.00 – 9.49</small></div></div>
  <div class="col"><div class="stp"></div><div class="lb"><b>Superior</b><small>9.50 – 10.00</small></div></div>
 </div>
 <div class="dm"><div><h3>Dimensión cognitiva</h3><p>Pensamiento crítico y analítico · pensamiento lógico y numérico · competencias comunicativas · aprendizaje científico y tecnológico.</p></div>
 <div><h3>Dimensión actitudinal</h3><p>Cumplimiento de normas · vivencia de los valores · respeto y buena convivencia · responsabilidad académica y social.</p></div></div>
</div></section>

<section class="sc" id="s6"><div class="in"><q id="q">Juventud en formación desde los valores hacia la excelencia</q><p>Cl. 76 #38C-110, Las Mercedes, Barranquilla · (+57) 3165239111 · secretaria@colmilitaracoolsure.edu.co</p></div></section>
</div>`;

  var P = [
    ['RoboCode · AMCO', 'Robótica, programación y pensamiento lógico-matemático con Lego Education.', ['ScratchJr a Python y C++', 'Robot Challenge', 'Space Experience · NASA']],
    ['Knowledge of the World', 'Inglés bicultural: ciencia, cultura e historia en el idioma, con metodología CLIL.', ['CLIL', 'Tecnología educativa']],
    ['Comprensión Matemática', 'Las matemáticas se entienden desde la experiencia, con materiales concretos.', ['Aprendizaje manipulativo', 'Desafío Matemático · Amco Summit']],
    ['Evo · Lectura inteligente', 'Plataforma con IA que adapta las historias a la edad, el nivel y los intereses de cada estudiante.', ['Biblioteca digital', 'Panel para docentes y padres']],
    ['Impact · Inteligencia Artificial', 'Uso ético, responsable y efectivo de la IA mediante retos y proyectos.', ['Retos de IA', 'Aprendizaje-servicio', 'OnTrack']]
  ];

  var gsapPromise;
  function loadGsap() {
    if (window.gsap) return Promise.resolve();
    if (gsapPromise) return gsapPromise;
    gsapPromise = new Promise(function (ok, fail) {
      var s = document.createElement('script');
      s.src = GSAP_SRC; s.onload = ok; s.onerror = function () { fail(new Error('No se pudo cargar GSAP')); };
      document.head.appendChild(s);
    });
    return gsapPromise;
  }
  function loadFonts() {
    if (document.getElementById('acoolsure-fonts')) return;
    var l = document.createElement('link');
    l.id = 'acoolsure-fonts'; l.rel = 'stylesheet'; l.href = FONTS;
    document.head.appendChild(l);
  }

  class Academico extends HTMLElement {
    constructor() { super(); this._s = this.attachShadow({ mode: 'open' }); }

    connectedCallback() {
      if (this._started) return;
      this._started = true;
      this._s.innerHTML = '<style>' + CSS + '</style>' + HTML;
      loadFonts();
      var self = this;
      loadGsap().then(function () { self._init(); }).catch(function (e) { console.error('[acoolsure-academico]', e); });
    }

    disconnectedCallback() {
      if (this._off) this._off();
      this._started = false;
    }

    _init() {
      var host = this, s = this._s, gsap = window.gsap;
      var E = function (q) { return s.querySelector(q); };
      var A = function (q) { return [].slice.call(s.querySelectorAll(q)); };
      var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var st = E('#st'), pb = E('#pb');
      st.style.setProperty('--top', TOP_OFFSET + 'px');
      s.querySelectorAll('.sc').forEach(function (e) { e.style.setProperty('--top', TOP_OFFSET + 'px'); });

      /* ---------- hero ---------- */
      E('#ht').innerHTML = 'ACADÉMICO'.split('').map(function (c, i) { return '<span class="l"><span class="li" style="--i:' + i + '">' + c + '</span></span>'; }).join('');
      E('#ruler').innerHTML = ['PJ', 'J', 'T', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (g) { return '<i><b></b>' + g + '</i>'; }).join('');

      /* ---------- camino ---------- */
      var path = E('#rd'), L = path.getTotalLength(), ps = [0, 1 / 3, 2 / 3, 1], lab = ['Preescolar', '1°–5°', '6°–8°', '9°–11°'], mk = E('#mk'), pn = A('.pn');
      path.style.strokeDasharray = L; path.style.strokeDashoffset = L;
      E('#dg').innerHTML = ps.map(function (p, i) {
        var t = path.getPointAtLength(L * p), r = t.x > 400;
        return '<circle class="dt" cx="' + t.x + '" cy="' + t.y + '" r="11"/><text x="' + (t.x + (r ? -22 : 22)) + '" y="' + (t.y + 6) + '" text-anchor="' + (r ? 'end' : 'start') + '">' + lab[i] + '</text>';
      }).join('');
      var dts = A('.dt');
      function camino(p) {
        path.style.strokeDashoffset = L * (1 - p);
        var t = path.getPointAtLength(L * p);
        mk.setAttribute('transform', 'translate(' + t.x + ',' + t.y + ')');
        var a = Math.round(p * 3);
        pn.forEach(function (e, i) { e.classList.toggle('on', i === a); });
        dts.forEach(function (d, i) { d.classList.toggle('on', p >= ps[i] - .001); });
      }
      camino(0);

      /* ---------- rueda ---------- */
      var wh = E('#wh'), ctr = E('#ctr'), wa = -1, wp = 0;
      var card = function (o) { return '<h3>' + o[0] + '</h3><p>' + o[1] + '</p><div class="tg">' + o[2].map(function (c) { return '<span>' + c + '</span>'; }).join('') + '</div>'; };
      var its = P.map(function (o, i) { var b = document.createElement('div'); b.className = 'it'; b.innerHTML = '0' + (i + 1) + '<span>' + o[0].split(' ·')[0] + '</span>'; wh.appendChild(b); return b; });
      function rueda(p) {
        wp = p;
        var R = wh.offsetWidth / 2, a = Math.round(p * 4);
        its.forEach(function (b, i) {
          var g = (i * 72 - p * 288) * Math.PI / 180;
          b.style.transform = 'translate(-50%,-50%) translate(' + R * Math.sin(g) + 'px,' + (-R * Math.cos(g)) + 'px) scale(' + (i === a ? 1.2 : 1) + ')';
          b.classList.toggle('on', i === a);
        });
        if (a !== wa) {
          wa = a; ctr.innerHTML = card(P[a]);
          if (!RM) gsap.fromTo(ctr, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .4 });
        }
      }
      rueda(0);

      /* ---------- línea de tiempo maestra (0 a 100) ---------- */
      var tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
      var fade = function (id, t) { tl.fromTo(E(id), { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 }, t); };
      tl.to(A('.l'), { yPercent: -70, autoAlpha: 0, stagger: .2, duration: 3 }, 3.5);
      fade('#s1', 9);
      var pc = { v: 0 }; tl.fromTo(pc, { v: 0 }, { v: 1, duration: 24, onUpdate: function () { camino(pc.v); } }, 11.5);
      fade('#s2', 36);
      var pw = { v: 0 }; tl.fromTo(pw, { v: 0 }, { v: 1, duration: 22, onUpdate: function () { rueda(pw.v); } }, 38.5);
      fade('#s3', 60);
      tl.fromTo(E('#enf'), { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 5 }, 62.5)
        .fromTo(E('#cp i'), { scaleX: 0 }, { scaleX: 1, duration: 4 }, 67)
        .fromTo(A('.g4 div'), { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, stagger: 1, duration: 2 }, 69);
      fade('#s4', 77);
      A('.row').forEach(function (r, i) {
        var d = i % 2 ? 1 : -1;
        tl.fromTo(r.querySelector('h3'), { x: d * 120 }, { x: -d * 120, duration: 10 }, 79)
          .fromTo(r.querySelector('p'), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 2 }, 79.5 + i * 1.2);
      });
      fade('#s5', 89);
      tl.fromTo(A('.stp'), { scaleY: 0 }, { scaleY: 1, stagger: 1.2, duration: 1.4 }, 91)
        .fromTo(A('.lb'), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, stagger: 1.2, duration: 1 }, 91.4)
        .fromTo(A('.dm div'), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, stagger: .6, duration: 1.2 }, 95);
      fade('#s6', 97);
      tl.fromTo(E('#q'), { y: 30 }, { y: 0, duration: 2.5 }, 97.5).to({}, { duration: .001 }, 99.999);

      /* ---------- conducir la línea de tiempo con el scroll ---------- */
      var mode = window.ACOOLSURE_MODE || chooseMode(host), state = '', raf = 0;
      if (mode === 'sticky') st.classList.add('sticky');
      if (host.getBoundingClientRect().height < window.innerHeight * 3) {
        host.style.height = DEFAULT_HEIGHT;
        console.warn('[acoolsure-academico] La altura del elemento es muy pequeña. Ponla en Studio en ~1200vh (o ~9000px).');
      }
      function setPos(name, css) { if (state === name) return; state = name; st.style.cssText = css; }
      function update() {
        raf = 0;
        var r = host.getBoundingClientRect(), vh = window.innerHeight, range = r.height - vh;
        var p = range > 0 ? Math.max(0, Math.min(1, -r.top / range)) : 0;
        if (mode === 'fixed') {
          if (r.top > 0) setPos('top', 'position:absolute;top:0;left:0;width:100%');
          else if (r.bottom <= vh) setPos('bottom', 'position:absolute;bottom:0;left:0;width:100%');
          else { state = ''; st.style.cssText = 'position:fixed;top:0;left:' + r.left + 'px;width:' + r.width + 'px'; }
        }
        pb.style.transform = 'scaleX(' + p + ')';
        gsap.to(tl, { progress: p, duration: RM ? 0 : .35, ease: 'power2.out', overwrite: true });
      }
      function req() { if (!raf) raf = requestAnimationFrame(update); }
      function onResize() { rueda(wp); req(); }
      window.addEventListener('scroll', req, { passive: true });
      window.addEventListener('resize', onResize);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(req);
      update();
      console.info('[acoolsure-academico] modo: ' + mode);
      this._off = function () {
        window.removeEventListener('scroll', req); window.removeEventListener('resize', onResize);
        if (raf) cancelAnimationFrame(raf); tl.kill();
      };
    }
  }

  /* "fixed" funciona aunque Wix recorte el contenido (overflow); falla si un contenedor tiene transform/filter.
     En ese caso se usa "sticky". Se puede forzar con window.ACOOLSURE_MODE = 'fixed' | 'sticky'. */
  function chooseMode(el) {
    while (el) {
      var cs = getComputedStyle(el);
      if ((cs.transform && cs.transform !== 'none') || (cs.filter && cs.filter !== 'none') ||
          (cs.perspective && cs.perspective !== 'none') || /paint|layout|strict|content/.test(cs.contain || '') ||
          /transform|filter|perspective/.test(cs.willChange || '')) return 'sticky';
      el = el.parentElement || (el.getRootNode && el.getRootNode().host) || null;
    }
    return 'fixed';
  }

  customElements.define(TAG, Academico);
})();
