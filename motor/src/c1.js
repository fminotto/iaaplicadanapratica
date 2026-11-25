// Carrossel 01 — prompt em 4 blocos (derivado do Reel 01). 1080x1350, um slide por item de SLIDES.
const {C,chip}=window.__engine;
const blocks=[
 {k:'PAPEL',c:C.blue,q:'Quem a IA deve ser',ex:'Você é um gerente de projetos sênior.',why:'Define o nível e o vocabulário da resposta.'},
 {k:'CONTEXTO',c:C.purple,q:'O que ela precisa saber',ex:'Tive uma reunião de 1 h com o cliente sobre o novo app. Seguem minhas anotações: [cole aqui]',why:'Sem contexto, ela preenche as lacunas com o genérico.'},
 {k:'TAREFA',c:C.orange,q:'O que exatamente fazer',ex:'Liste as decisões tomadas e os próximos passos.',why:'"Resume" é vago. Diga o que você vai usar.'},
 {k:'FORMATO',c:C.lime,q:'Como entregar',ex:'Em tabela, com responsável e prazo de cada item.',why:'Pronto pra colar no e-mail ou na planilha.'},
];
const blur=(n,ws)=>ws.slice(0,n).map(w=>`<div style="height:30px;border-radius:15px;background:${C.gray};opacity:.35;width:${w}%;margin-bottom:24px;filter:blur(6px)"></div>`).join('');
const S=[];
// 1 capa
S.push(`<div class="h" style="top:250px;font-size:112px">Seu prompt<br>tá <span style="color:${C.red}">incompleto.</span></div>
 <div style="position:absolute;left:70px;right:70px;top:620px;font-size:52px;font-weight:600;line-height:1.25;color:${C.white}">Os <span class="hl">4 blocos</span> que transformam uma resposta genérica numa resposta pronta pra usar.</div>
 <div style="position:absolute;left:70px;top:900px;display:flex;gap:18px;font-size:34px">${blocks.map(b=>chip(b.k,b.c)).join('')}</div>`);
// 2 problema
S.push(`<div class="h" style="top:200px;font-size:92px">Você pede<br><span class="hl">"resume isso"</span>…</div>
 <div class="card" style="position:absolute;left:70px;right:70px;top:500px;height:150px;display:flex;align-items:center;padding:0 46px;font-size:56px;font-weight:500"><span style="color:${C.gray};margin-right:22px">›</span>resume isso<span style="position:absolute;right:44px;font-size:100px;font-weight:900;color:${C.red}">✕</span></div>
 <div class="card" style="position:absolute;left:70px;right:70px;top:690px;padding:40px 46px 16px">${blur(5,[92,80,96,70,88,60])}</div>
 <div style="position:absolute;left:70px;right:70px;top:1040px;font-size:46px;font-weight:700;color:${C.gray}">…e recebe um texto genérico. O problema não é a IA.</div>`);
// 3-6 blocos
blocks.forEach((b,i)=>S.push(`<div style="position:absolute;left:70px;top:210px;font-size:40px;font-weight:700;color:${C.gray};letter-spacing:2px">BLOCO ${i+1} DE 4</div>
 <div class="h" style="top:270px;font-size:128px;color:${b.c}">${b.k}</div>
 <div style="position:absolute;left:70px;right:70px;top:430px;font-size:58px;font-weight:700">${b.q}</div>
 <div style="position:absolute;left:70px;right:70px;top:560px"><div style="position:relative;border-radius:32px;background:${C.card};border:4px solid ${b.c};padding:44px 50px 44px 72px;overflow:hidden">
   <div style="position:absolute;left:0;top:0;bottom:0;width:22px;background:${b.c}"></div>
   <div style="font-size:30px;font-weight:700;color:${C.gray};letter-spacing:2px;margin-bottom:16px">EXEMPLO</div>
   <div style="font-size:48px;font-weight:500;line-height:1.3">"${b.ex}"</div></div>
 <div style="margin-top:56px;display:flex;gap:24px;align-items:flex-start;font-size:46px;font-weight:600;color:${C.white};line-height:1.3"><span style="color:${b.c};font-weight:800">→</span><span>${b.why}</span></div></div>`));
// 7 prompt completo
S.push(`<div class="h" style="top:200px;font-size:88px">Junta tudo e <span class="hl">copia:</span></div>
 <div class="card" style="position:absolute;left:70px;right:70px;top:340px;padding:44px 50px;font-size:40px;line-height:1.4;font-weight:500;border-color:${C.lime}">
  ${blocks.map(b=>`<div style="margin-bottom:22px"><span style="color:${b.c};font-weight:800">${b.k} ·</span> ${b.ex}</div>`).join('')}</div>
 <div style="position:absolute;left:70px;right:70px;top:1140px;font-size:38px;font-weight:600;color:${C.gray}">Troque o exemplo pelo seu caso. Funciona no ChatGPT, Claude ou Gemini.</div>`);
// 8 CTA
S.push(`<div class="h" style="top:300px;font-size:120px;text-align:center">Salva pra usar<br>no <span class="hl">próximo prompt</span></div>
 <div style="position:absolute;left:0;right:0;top:760px;text-align:center"><svg width="150" height="195" viewBox="0 0 20 26"><path d="M2 1h16v24l-8-6-8 6z" fill="${C.lime}"/></svg></div>
 <div style="position:absolute;left:70px;right:70px;top:1010px;text-align:center;font-size:46px;font-weight:600;color:${C.white}">E manda pra quem ainda reclama<br>que a IA "só fala o óbvio".</div>`);
window.SLIDES=S;
