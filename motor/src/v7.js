const {C,clamp,lerp,easeOut,easeInOut,back,pr,vis,pop,typed,caret,frame,title,dmCta}=window.__engine;
const TOTAL=38;
const items=[['Treinar uma conversa difícil','"Faça o papel do meu chefe. Vou pedir aumento."'],['Achar pegadinhas no contrato de aluguel','"Liste cláusulas que me prejudicam."'],['Cardápio com o que tem na geladeira','"Tenho ovo, arroz, tomate. 3 jantares."'],['Foto do quadro branco vira tarefas','"Transforme esta foto em lista com responsáveis."'],['Explicar qualquer assunto','"Me explique juros compostos como se eu tivesse 12 anos."']];
function search(t,strike){const s=easeOut(pr(t,1.2,.5));return `<div class="card" style="position:absolute;left:70px;right:70px;top:1000px;height:170px;border-radius:85px;display:flex;align-items:center;padding:0 60px;font-size:56px;color:${C.gray}">
 <svg width="64" height="64" viewBox="0 0 24 24" style="margin-right:30px"><circle cx="10" cy="10" r="7" stroke="${C.gray}" stroke-width="2.5" fill="none"/><path d="M15 15l6 6" stroke="${C.gray}" stroke-width="2.5"/></svg>Pesquisar...
 ${strike?`<div style="position:absolute;left:40px;top:80px;height:12px;border-radius:6px;background:${C.red};width:${s*860}px"></div>`:''}</div>`;}
window.render=function(t){let h='';
 if(t<2.6){h+=title(t,0,2.6,'Você usa IA<br>só como <span class="hl">Google?</span>',420,116);h+=`<div style="${vis(t,0,2.6,0,.2)}">${search(t,true)}</div>`;}
 if(t>=2.4&&t<32.4){h+=title(t,2.5,32.4,'5 usos de IA que<br><span class="hl">quase ninguém faz</span>',320,80);
  items.forEach((it,i)=>{const a=2.8+i*5.9,b=a+5.9;if(t<a-.1||t>b+.1)return;const n=5-i;
   h+=`<div style="position:absolute;left:0;right:0;top:620px;text-align:center;font-size:400px;font-weight:900;color:${C.lime};line-height:1;${pop(t,a)};opacity:${clamp(pr(t,a,.15))*(1-clamp(pr(t,b-.3,.3)))}">${n}</div>`;
   h+=`<div class="h" style="top:1060px;font-size:76px;text-align:center;${vis(t,a+.3,b)}">${it[0]}</div>`;
   h+=`<div class="card" style="position:absolute;left:70px;right:70px;top:1330px;padding:34px 44px;font-size:38px;font-style:italic;color:${C.gray};${vis(t,a+.9,b,30)}">${typed(it[1],t,a+1.1,40)}</div>`;});
  // dots
  h+=`<div style="position:absolute;left:0;right:0;top:560px;text-align:center;${vis(t,2.8,32.4,0)}">`+[0,1,2,3,4].map(i=>`<span style="display:inline-block;width:22px;height:22px;border-radius:11px;margin:0 10px;background:${t>=2.8+i*5.9?C.lime:C.line}"></span>`).join('')+`</div>`;}
 if(t>=32.2){h+=dmCta(t,32.3,'Manda pra quem ainda usa IA <span class="hl">só como Google</span>',TOTAL-.4);h+=`<div style="opacity:${easeInOut(pr(t,36.6,1.2))}">${search(t,false)}</div>`;}
 return frame(t,TOTAL,7,h);};
window.TOTAL=TOTAL;
