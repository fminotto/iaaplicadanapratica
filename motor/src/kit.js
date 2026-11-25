// Peças reutilizáveis dos carrosséis (1080x1350). Carregado por carrossel.mjs antes de src/cN.js.
(()=>{const {C,chip,plane}=window.__engine;
const abs=(top,css,html)=>`<div style="position:absolute;left:70px;right:70px;top:${top}px;${css}">${html}</div>`;
const bookmark=`<svg width="150" height="195" viewBox="0 0 20 26"><path d="M2 1h16v24l-8-6-8 6z" fill="${C.lime}"/></svg>`;
const bubble=`<svg width="200" height="170" viewBox="0 0 30 25"><path d="M3 2h24a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H11l-6 5v-5H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="${C.lime}"/><circle cx="9" cy="10.5" r="1.8" fill="${C.bg}"/><circle cx="15" cy="10.5" r="1.8" fill="${C.bg}"/><circle cx="21" cy="10.5" r="1.8" fill="${C.bg}"/></svg>`;
const K={
 // capa: título grande, subtítulo, chips opcionais
 capa:(t,sub,chips=[])=>`<div class="h" style="top:250px;font-size:112px">${t}</div>`+
   abs(660,'font-size:52px;font-weight:600;line-height:1.25',sub)+
   (chips.length?abs(940,'display:flex;flex-wrap:wrap;gap:18px;font-size:34px',chips.map(([x,c])=>chip(x,c)).join('')):''),
 // item numerado: rótulo, nome grande colorido, subtítulo, cartão de exemplo, porquê
 item:(lbl,nome,c,sub,exLbl,ex,why,size=120)=>abs(210,'font-size:40px;font-weight:700;color:'+C.gray+';letter-spacing:2px',lbl)+
   `<div class="h" style="top:270px;font-size:${size}px;color:${c}">${nome}</div>`+
   abs(size>100?430:400,'font-size:56px;font-weight:700;line-height:1.15',sub)+
   abs(size>100?560:600,'',`<div style="position:relative;border-radius:32px;background:${C.card};border:4px solid ${c};padding:44px 50px 44px 72px;overflow:hidden">
     <div style="position:absolute;left:0;top:0;bottom:0;width:22px;background:${c}"></div>
     <div style="font-size:30px;font-weight:700;color:${C.gray};letter-spacing:2px;margin-bottom:16px">${exLbl}</div>
     <div style="font-size:46px;font-weight:500;line-height:1.3">${ex}</div></div>
     ${why?`<div style="margin-top:52px;display:flex;gap:24px;font-size:44px;font-weight:600;line-height:1.3"><span style="color:${c};font-weight:800">→</span><span>${why}</span></div>`:''}`),
 // prompt pronto pra copiar
 prompt:(t,txt,nota,top=380)=>`<div class="h" style="top:200px;font-size:88px">${t}</div>`+
   abs(top,'',`<div class="card" style="padding:50px 54px;font-size:48px;line-height:1.4;font-weight:500;border-color:${C.lime}">${txt}</div>
     ${nota?`<div style="margin-top:40px;font-size:38px;font-weight:600;color:${C.gray};line-height:1.3">${nota}</div>`:''}`),
 // frase de impacto
 frase:(t,sub,size=104)=>`<div class="h" style="top:330px;font-size:${size}px">${t}</div>`+(sub?abs(800,'font-size:48px;font-weight:600;color:'+C.gray+';line-height:1.3',sub):''),
 // fecho
 cta:(t,sub,icone='salvar')=>`<div class="h" style="top:280px;font-size:112px;text-align:center">${t}</div>`+
   `<div style="position:absolute;left:0;right:0;top:760px;text-align:center">${icone=='salvar'?bookmark:icone=='comentar'?bubble:plane()}</div>`+
   abs(1010,'text-align:center;font-size:46px;font-weight:600;line-height:1.3',sub),
 abs,
};
window.__kit=K;})();
