/**
 * Verificación de interacciones reales contra el server de Next.js (CDP).
 * Cada chequeo hace la acción, espera a que React re-renderice y recién ahí lee.
 */
const ENDPOINT = 'http://127.0.0.1:9222/json/list';
const SITE = process.env.SITE || 'http://127.0.0.1:3100/'; // pnpm dev: 3100 · pnpm preview: 8080
const wait = 'await new Promise(r=>setTimeout(r,220));';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function connect() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(ENDPOINT);
      const targets = await res.json();
      const page = targets.find((t) => t.type === 'page' && /127\.0\.0\.1|localhost/.test(t.url));
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error('no encontré el target de la página');
}

function client(url) {
  const ws = new WebSocket(url);
  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
  });
  const ready = new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve);
    ws.addEventListener('error', reject);
  });
  const send = (method, params = {}) => new Promise((resolve) => {
    const mid = ++id; pending.set(mid, resolve);
    ws.send(JSON.stringify({ id: mid, method, params }));
  });
  return { ready, send, close: () => ws.close() };
}

async function main() {
  const ws = client(await connect());
  await ws.ready;
  await ws.send('Runtime.enable');
  await ws.send('Page.enable');

  const evaluate = async (expression) => {
    const res = await ws.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (res.result?.exceptionDetails) {
      throw new Error(res.result.exceptionDetails.exception?.description ?? 'error de evaluación');
    }
    return res.result?.result?.value;
  };

  const results = [];
  const check = async (name, expression, expected) => {
    const value = await evaluate(expression);
    const ok = typeof expected === 'function' ? expected(value) : value === expected;
    results.push({ name, value, ok });
  };
  const byText = (sel, text) =>
    `[...document.querySelectorAll('${sel}')].find(e=>e.textContent.trim().includes('${text}'))`;

  await check('el mostrador lista los 12 cortes',
    `document.querySelectorAll('#productGrid .card').length`, 12);

  await check('el filtro "Res" deja 6 productos',
    `(async()=>{${byText('.chip','Res')}.click();${wait}return document.querySelectorAll('#productGrid .card').length})()`, 6);

  await check('la pestaña activa del filtro se marca sola',
    `(async()=>{${wait}return ${byText('.chip','Res')}.getAttribute('aria-selected')})()`, 'true');

  await check('el filtro "Todo" vuelve a 12',
    `(async()=>{document.querySelectorAll('.chip')[0].click();${wait}return document.querySelectorAll('#productGrid .card').length})()`, 12);

  await check('agregar un corte abre la bandeja con su nombre',
    `(async()=>{document.querySelector('.add').click();${wait}const t=document.querySelector('.tray');return t?t.innerText.replace(/\\s+/g,' ').trim():'sin bandeja'})()`,
    (v) => typeof v === 'string' && v.includes('1 corte') && v.includes('Lomito'));

  await check('el botón pasa a "En el pedido"',
    `(async()=>{${wait}return document.querySelector('.add').textContent.trim()})()`, 'En el pedido');

  await check('la bandeja se vacía',
    `(async()=>{document.querySelector('.tray__clear').click();${wait}return document.querySelector('.tray')?'visible':'oculta'})()`, 'oculta');

  await check('la carta de la res cambia al tocar la región 9',
    `(async()=>{document.querySelector('.cut[data-cut="pecho"]').dispatchEvent(new MouseEvent('click',{bubbles:true}));${wait}return document.querySelector('.chart__detail h3').textContent})()`, 'Pecho');

  await check('la carta de la res actualiza la ficha técnica',
    `(async()=>{${wait}return document.querySelector('.chart__facts').innerText.replace(/\\s+/g,' ').trim()})()`,
    (v) => typeof v === 'string' && v.includes('Olla · 2 horas') && v.includes('Pecho'));

  await check('la lista lateral y la lámina quedan sincronizadas',
    `(async()=>{${wait}const b=[...document.querySelectorAll('.chart__list button')].find(x=>x.getAttribute('aria-selected')==='true');const g=document.querySelector('.cut.is-active');return b.textContent.trim()+'|'+g.dataset.cut})()`,
    (v) => typeof v === 'string' && v.includes('Pecho') && v.endsWith('pecho'));

  await check('la carta responde al teclado (Enter)',
    `(async()=>{const g=document.querySelector('.cut[data-cut="rabo"]');g.focus();g.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));${wait}return document.querySelector('.chart__detail h3').textContent})()`, 'Rabo');

  await check('los contadores llegan a su valor al entrar en pantalla',
    `(async()=>{document.querySelector('.stats').scrollIntoView({block:'center'});await new Promise(r=>setTimeout(r,2800));return [...document.querySelectorAll('[data-count]')].map(e=>e.textContent).join(',')})()`, '38,42,900');

  await check('el estado del local se calcula con la hora real',
    `document.querySelector('#openState').textContent`,
    (v) => typeof v === 'string' && /(Abierto hasta las \d|Cerrado)/.test(v));

  await check('el menú móvil abre y cierra',
    `(async()=>{const b=document.querySelector('.burger');b.click();${wait}const abierto=!document.querySelector('#mobileMenu').hidden;b.click();${wait}return abierto+','+document.querySelector('#mobileMenu').hidden})()`, 'true,true');

  await check('ningún bloque queda invisible después de recorrer la página',
    `(async()=>{window.scrollTo(0,document.body.scrollHeight);await new Promise(r=>setTimeout(r,2600));const r=[...document.querySelectorAll('.reveal')];return r.filter(e=>e.classList.contains('is-in')).length+'/'+r.length})()`,
    (v) => v.split('/')[0] === v.split('/')[1]);

  await check('la newsletter rechaza un mail inválido',
    `(async()=>{const i=document.querySelector('#newsEmail');const f=document.querySelector('.news');const set=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;set.call(i,'mal-mail');i.dispatchEvent(new Event('input',{bubbles:true}));f.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));${wait}return document.querySelector('.news__msg').textContent})()`,
    (v) => typeof v === 'string' && v.includes('no parece válido'));

  await check('la newsletter acepta un mail válido',
    `(async()=>{const i=document.querySelector('#newsEmail');const f=document.querySelector('.news');const set=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;set.call(i,'aldo@lamediares.com.ar');i.dispatchEvent(new Event('input',{bubbles:true}));f.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));${wait}return document.querySelector('.news__msg').textContent})()`,
    (v) => typeof v === 'string' && v.includes('Listo'));

  await check('los CTA de WhatsApp usan el número del local',
    `[...document.querySelectorAll('a[href*="wa.me/50687120198"]')].length`,
    (v) => typeof v === 'number' && v >= 3);

  console.log(`\nSitio verificado: ${SITE}\n`);
  for (const r of results) console.log(`${r.ok ? '  OK  ' : ' FALLA'} │ ${r.name} → ${JSON.stringify(r.value)}`);
  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} verificaciones OK\n`);
  ws.close();
  process.exit(failed.length ? 1 : 0);
}

main().catch((err) => { console.error('error en la verificación:', err.message); process.exit(1); });
