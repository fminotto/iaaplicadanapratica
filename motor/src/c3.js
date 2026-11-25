// Carrossel 03 — a IA mente (derivado do Reel 03).
const {C}=window.__engine, K=window.__kit;
const S=[];
S.push(K.capa('A IA mente.<br><span style="color:'+C.red+'">Com toda a<br>confiança.</span>','Por que isso acontece, 3 sinais pra desconfiar e o prompt que reduz o problema.').replace('top:660px','top:800px'));
const opt=[['azul',78,C.lime],['cinza',12,C.gray],['laranja',6,C.gray]];
S.push(`<div class="h" style="top:200px;font-size:88px">Ela completa<br><span class="hl">padrões</span>, não<br>consulta a verdade</div>`+
  K.abs(580,'',`<div class="card" style="padding:50px">
   <div style="font-size:54px;font-weight:700;margin-bottom:30px">"O céu é <span class="hl">___</span>"</div>
   ${opt.map(([w,p,c])=>`<div style="display:flex;align-items:center;gap:24px;margin:20px 0;font-size:42px;font-weight:600"><div style="width:170px">${w}</div><div style="flex:1;height:44px;background:${C.line};border-radius:22px"><div style="width:${p}%;height:100%;background:${c};border-radius:22px"></div></div><div style="width:100px;text-align:right">${p}%</div></div>`).join('')}
   <div style="font-size:32px;color:${C.gray};margin-top:20px">Ela escolhe a palavra mais provável, não a confirmada. (Números ilustrativos.)</div></div>`));
const F=[
 ['Números exatos sem fonte','"73,4% das empresas já usam IA no dia a dia."','Precisão demais sem origem é sinal de chute.'],
 ['Leis, artigos e citações muito específicos','"Conforme o artigo 12, parágrafo 3º, da lei…"','Confira no texto oficial antes de usar.'],
 ['Links que você não abriu','"Fonte: site.com/estudo-completo-2024"','Link inventado parece real. Clica antes de citar.'],
];
F.forEach(([n,ex,why],i)=>S.push(K.item(`SINAL ${i+1} DE 3`,n,C.red,'','EXEMPLO DO QUE DESCONFIAR',ex,why,84).replace(/top:430px;font-size:56px[^>]*><\/div>/,'')));
S.push(K.prompt('Peça <span class="hl">sempre:</span>','"Cite a fonte de cada dado e diga o quanto você tem certeza. Se não souber, diga que não sabe."','Não elimina o erro, mas deixa claro o que você precisa conferir.'));
S.push(K.cta('Comenta a pior<br>que a IA já<br><span class="hl">te contou</span>','','comentar'));
window.SLIDES=S; window.TEMA='a IA mente';
