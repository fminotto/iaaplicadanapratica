const {C,clamp,lerp,easeOut,easeInOut,back,pr,vis,pop,typed,caret,frame}=window.__engine;
const TOTAL=32;
const blocks=[
 {k:'PAPEL',c:C.blue,ex:'"Você é um gerente de projetos sênior"',a:7.0},
 {k:'CONTEXTO',c:C.purple,ex:'"Reunião de 1 h com o cliente sobre o novo app"',a:10.5},
 {k:'TAREFA',c:C.orange,ex:'"Liste as decisões e os próximos passos"',a:14.0},
 {k:'FORMATO',c:C.lime,ex:'"Tabela com responsável e prazo"',a:17.5},
];
function chatBox(t,text,y,showX){
  const x = showX? pop(t,1.35,.35):'opacity:0';
  return `<div class="card" style="position:absolute;left:70px;right:70px;top:${y}px;height:190px;display:flex;align-items:center;padding:0 50px;font-size:62px;font-weight:500">
    <span style="color:${C.gray};margin-right:24px">›</span>${text}${caret(t)}
    <div style="position:absolute;right:40px;top:30px;font-size:130px;font-weight:900;color:${C.red};${x}">✕</div></div>`;
}
function blurLines(n,w0,op=1,blur=6){let s='';for(let i=0;i<n;i++){s+=`<div style="height:34px;border-radius:17px;background:${C.gray};opacity:${.35*op};width:${w0[i%w0.length]}%;margin-bottom:28px;filter:blur(${blur}px)"></div>`}return s;}
window.render=function(t){
  let h='';
  // S1 0-2.2 hook
  if(t<2.4){
    h+=`<div class="h" style="top:420px;font-size:104px;${vis(t,0,2.4,30,.25)}">Você pede<br><span class="hl">"resume isso"</span><br>pra IA?</div>`;
    h+=`<div style="${vis(t,0,2.4,0,.2)}">${chatBox(t,typed('resume isso',t,.15,14),1020,true)}</div>`;
  }
  // S2 2.2-6.2
  if(t>=2.2&&t<6.4){
    h+=`<div class="h" style="top:420px;font-size:96px;${vis(t,2.3,6.4)}">Por isso a resposta<br>vem <span style="color:${C.gray}">genérica.</span></div>`;
    h+=`<div class="card" style="position:absolute;left:70px;right:70px;top:820px;padding:60px;${vis(t,2.7,6.4,60)}">${blurLines(7,[92,80,96,70,88,60,84],1,7)}</div>`;
  }
  // S3 6.2-22.4 blocks
  if(t>=6.2&&t<22.6){
    h+=`<div class="h" style="top:330px;font-size:84px;${vis(t,6.3,22.6)}">Monte o prompt<br>em <span class="hl">4 blocos</span></div>`;
    blocks.forEach((b,i)=>{
      const p=back(pr(t,b.a,.5)); const op=clamp(pr(t,b.a,.2))*(1-easeInOut(pr(t,22.2,.4)));
      const y=620+i*265;
      const active = t>=b.a && (i==3 || t<blocks[i+1].a);
      h+=`<div style="position:absolute;left:70px;right:70px;top:${y}px;height:235px;border-radius:32px;background:${C.card};border:4px solid ${active?b.c:C.line};
        opacity:${op};transform:translateX(${(1-p)*-500}px);padding:34px 44px;overflow:hidden">
        <div style="position:absolute;left:0;top:0;bottom:0;width:22px;background:${b.c}"></div>
        <div style="font-size:58px;font-weight:800;color:${b.c};letter-spacing:2px">${i+1}. ${b.k}</div>
        <div style="font-size:44px;font-weight:500;margin-top:16px;color:${C.white};line-height:1.25">${typed(b.ex,t,b.a+.35,40)}</div></div>`;
    });
  }
  // S4 22.4-28.2 antes x depois
  if(t>=22.4&&t<28.4){
    h+=`<div class="h" style="top:380px;font-size:96px;${vis(t,22.5,28.4)}">Mesma IA.<br><span class="hl">Outra resposta.</span></div>`;
    const L=vis(t,22.9,28.4,60), R=vis(t,23.5,28.4,60);
    h+=`<div style="position:absolute;top:760px;left:70px;width:440px;${L}">
      <div style="font-size:44px;font-weight:700;color:${C.red};margin-bottom:24px">ANTES</div>
      <div class="card" style="padding:40px 34px;height:720px">${blurLines(9,[95,78,90,66,85,72,93,58,80],1,6)}</div></div>`;
    let rows=[['Decisão','Resp.','Prazo'],['Lançar beta','Ana','05/12'],['Ajustar login','Rui','08/12'],['Testes iOS','Bia','10/12'],['Revisar preço','Léo','12/12']];
    let tb=rows.map((r,i)=>`<div style="display:flex;gap:10px;padding:22px 0;border-bottom:2px solid ${C.line};font-size:${i?32:30}px;font-weight:${i?500:800};color:${i?C.white:C.lime};opacity:${clamp(pr(t,23.9+i*.25,.25))}">
       <div style="flex:2">${r[0]}</div><div style="flex:1">${r[1]}</div><div style="flex:1">${r[2]}</div></div>`).join('');
    h+=`<div style="position:absolute;top:760px;right:70px;width:440px;${R}">
      <div style="font-size:44px;font-weight:700;color:${C.lime};margin-bottom:24px">DEPOIS</div>
      <div class="card" style="padding:30px 30px;height:720px;border-color:${C.lime}">${tb}</div></div>`;
  }
  // S5 28.2-32 CTA + loop
  if(t>=28.2){
    const out=pr(t,31.2,.8);
    h+=`<div class="h" style="top:520px;font-size:120px;text-align:center;${vis(t,28.3,31.6)}">Salva<br>pra usar<br><span class="hl">amanhã</span></div>`;
    h+=`<div style="position:absolute;left:0;right:0;top:1040px;text-align:center;font-size:220px;${pop(t,28.7)};opacity:${1-easeInOut(pr(t,31.0,.6))}"><svg width="200" height="260" viewBox="0 0 20 26"><path d="M2 1h16v24l-8-6-8 6z" fill="${C.lime}"/></svg></div>`;
    // loop back into the opening chat box
    h+=`<div style="opacity:${easeInOut(out)}">${chatBox(t,'',1020,false)}</div>`;
  }
  return frame(t,TOTAL,1,h);
};
window.TOTAL=TOTAL;
