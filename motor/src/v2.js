const {C,clamp,lerp,easeOut,easeInOut,back,pr,vis,pop,typed,caret,frame,title,dmCta}=window.__engine;
const TOTAL=35;
const rows=[
 {a:2.6,n:'1',t:'Fórmula de planilha que você não lembra',p:'"Crie uma fórmula que some as vendas de março por vendedor"'},
 {a:12.2,n:'2',t:'E-mail difícil pro chefe',p:'"Escreva um e-mail firme e educado pedindo mais prazo"'},
 {a:21.8,n:'3',t:'Ata da reunião com responsáveis',p:'"Transforme estas anotações em ata com responsável e prazo"'},
];
function clock(t){const a=t*720;return `<svg width="420" height="420" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="none" stroke="${C.white}" stroke-width="5"/>
 <line x1="50" y1="50" x2="${50+30*Math.sin(a*Math.PI/180)}" y2="${50-30*Math.cos(a*Math.PI/180)}" stroke="${C.lime}" stroke-width="5" stroke-linecap="round"/>
 <line x1="50" y1="50" x2="${50+20*Math.sin(a/12*Math.PI/180)}" y2="${50-20*Math.cos(a/12*Math.PI/180)}" stroke="${C.white}" stroke-width="6" stroke-linecap="round"/></svg>`;}
window.render=function(t){let h='';
 if(t<2.6){h+=title(t,0,2.6,'Você ainda faz<br>isso <span class="hl">na mão?</span>',420,110);
   h+=`<div style="position:absolute;left:330px;top:900px;${vis(t,0,2.6,0,.2)}">${clock(t)}</div>`;}
 if(t>=2.4&&t<30.4){
   h+=title(t,2.5,30.4,'3 tarefas de <span style="color:'+C.orange+'">1 hora</span><br>que a IA faz em <span class="hl">1 min</span>',320,76);
   rows.forEach((r,i)=>{if(t<r.a)return;const y=560+i*375;const on=i==rows.length-1||t<rows[i+1].a;
     const you=easeInOut(pr(t,r.a+1.0,3.2)), ia=easeOut(pr(t,r.a+1.0,.4));
     h+=`<div class="card" style="position:absolute;left:70px;right:70px;top:${y}px;height:355px;padding:28px 44px;border-color:${on?C.lime:C.line};${vis(t,r.a,30.4,50)}">
      <div style="font-size:50px;font-weight:800;line-height:1.1"><span class="hl">${r.n}.</span> ${r.t}</div>
      <div style="display:flex;align-items:center;margin-top:20px;font-size:34px;font-weight:700;color:${C.orange}"><div style="width:110px">Você</div><div style="flex:1;height:38px;background:${C.line};border-radius:19px"><div style="width:${you*100}%;height:100%;background:${C.orange};border-radius:19px"></div></div><div style="width:110px;text-align:right">~1 h</div></div>
      <div style="display:flex;align-items:center;margin-top:18px;font-size:34px;font-weight:700;color:${C.lime}"><div style="width:110px">IA</div><div style="flex:1;height:38px;background:${C.line};border-radius:19px"><div style="width:${ia*5}%;min-width:${ia?38:0}px;height:100%;background:${C.lime};border-radius:19px"></div></div><div style="width:110px;text-align:right">~1 min</div></div>
      <div style="font-size:29px;color:${C.gray};margin-top:16px;font-style:italic">${typed(r.p,t,r.a+1.5,45)}</div></div>`;});
   h+=`<div style="position:absolute;left:70px;right:70px;top:500px;font-size:26px;color:${C.gray};${vis(t,3,30.4,0)}">Tempos ilustrativos</div>`;
 }
 if(t>=30.2)h+=dmCta(t,30.3,'Manda pra quem vive dizendo que <span class="hl">não tem tempo</span>',TOTAL+1);
 return frame(t,TOTAL,2,h);};
window.TOTAL=TOTAL;
