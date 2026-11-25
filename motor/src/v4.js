const {C,clamp,lerp,easeOut,easeInOut,back,pr,vis,pop,typed,caret,frame,title,chip}=window.__engine;
const TOTAL=30;
function pages(t,a,yBase,fall=true){let s='';for(let i=0;i<9;i++){const p=fall?easeOut(pr(t,a+i*.08,.5)):1;const rot=(i%2?1:-1)*(3+i*1.3);
 s+=`<div style="position:absolute;left:${300+(i%3-1)*30}px;top:${yBase+i*-14+(1-p)*-900}px;width:480px;height:620px;background:#E8ECF4;border-radius:14px;transform:rotate(${rot}deg);box-shadow:0 10px 40px #0008;padding:50px 40px">
 ${[90,75,85,60,80,70].map(w=>`<div style="height:18px;background:#B9C0CE;border-radius:9px;width:${w}%;margin-bottom:26px"></div>`).join('')}</div>`;}return s;}
const out=[[C.lime,'5 decisões',['Lançar em março','Cortar plano básico','Contratar suporte','Novo fornecedor','Rever metas Q2']],[C.red,'3 riscos',['Atraso na entrega','Custo de nuvem','Concorrente local']],[C.blue,'2 números-chave',['R$ 1,2 mi de orçamento','Margem de 18%']]];
window.render=function(t){let h='';
 if(t<2.6){h+=title(t,0,2.6,'<span class="hl">80 páginas</span><br>pra ler até<br>amanhã?',380,116);h+=`<div style="${vis(t,0,2.6,0,.2)}">${pages(t,.2,1050)}</div>`;}
 if(t>=2.4&&t<16.4){h+=title(t,2.5,16.4,'Não peça "resume".<br>Peça <span class="hl">o que vai usar</span>:',330,80);
  const a=3.2;
  h+=`<div class="card" style="position:absolute;left:70px;right:70px;top:620px;padding:56px;font-size:54px;font-weight:500;line-height:1.5;${vis(t,2.9,16.4,40)}">
   ${typed('"Leia o documento e me dê:',t,a,30)}${t>a+1.2?'<br>':''}
   ${t>a+1.6?chip('5 decisões',C.lime,`transform:scale(${back(pr(t,a+1.6,.4))})`):''}
   ${t>a+3.6?chip('3 riscos',C.red,`transform:scale(${back(pr(t,a+3.6,.4))})`):''}<br>
   ${t>a+5.6?chip('2 números-chave',C.blue,`transform:scale(${back(pr(t,a+5.6,.4))})`):''}<br>
   ${typed('e o que eu preciso fazer até sexta."',t,a+7.6,30)}${caret(t)}</div>`;}
 if(t>=16.2&&t<26.4){h+=title(t,16.3,26.4,'O resultado',330,96);
  const f=easeInOut(pr(t,16.6,1.2));
  h+=`<div style="position:absolute;top:470px;left:70px;right:70px;display:flex;align-items:center;justify-content:center;gap:30px;font-size:40px;font-weight:800;${vis(t,16.5,26.4,0)}">
   <div class="card" style="padding:16px 34px">PDF</div><div style="color:${C.lime}">→</div><div class="card" style="padding:16px 34px;border-color:${C.lime};color:${C.lime}">IA</div><div style="color:${C.lime}">→</div><div class="card" style="padding:16px 34px">1 cartão</div></div>`;
  let y=620;
  out.forEach((g,gi)=>{const a=17.4+gi*2.2;h+=`<div class="card" style="position:absolute;left:70px;right:70px;top:${y}px;padding:30px 44px;border-color:${g[0]};${vis(t,a,26.4,50)}"><div style="font-size:46px;font-weight:800;color:${g[0]};margin-bottom:12px">${g[1]}</div>`+
   g[2].map((x,i)=>`<div style="font-size:38px;font-weight:500;margin:8px 0;opacity:${clamp(pr(t,a+.3+i*.2,.2))}">• ${x}</div>`).join('')+`</div>`;y+=g[2].length*62+130;});
  h+=`<div style="position:absolute;left:70px;top:1640px;font-size:26px;color:${C.gray};${vis(t,17,26.4,0)}">Exemplo fictício</div>`;}
 if(t>=26.2){h+=title(t,26.3,29.2,'Salva pro<br>próximo<br><span class="hl">relatório</span>',460,120);
  h+=`<div style="opacity:${easeInOut(pr(t,28.6,1.2))}">${pages(t,0,1050,false)}</div>`;}
 return frame(t,TOTAL,4,h);};
window.TOTAL=TOTAL;
