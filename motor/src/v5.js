const {C,clamp,lerp,easeOut,easeInOut,back,pr,vis,pop,typed,caret,frame,title,dmCta}=window.__engine;
const TOTAL=36;
const tasks=[['Relatórios',0],['Decidir',1],['Planilhas',0],['Negociar',1],['E-mails padrão',0],['Liderar',1],['Resumos',0],['Criar relações',1]];
window.render=function(t){let h='';
 if(t<2.6){h+=title(t,0,2.6,'A IA vai<br>roubar seu<br><span class="hl">emprego?</span>',400,120);
  h+=`<div style="position:absolute;left:300px;top:1060px;width:480px;height:200px;border:10px solid ${C.red};border-radius:24px;color:${C.red};font-size:110px;font-weight:900;display:flex;align-items:center;justify-content:center;transform:rotate(${-8+(1-back(pr(t,.5,.5)))*-40}deg) scale(${lerp(2,1,easeOut(pr(t,.5,.4)))});opacity:${clamp(pr(t,.5,.15))*(1-pr(t,2.3,.3))}">MITO?</div>`;}
 if(t>=2.4&&t<26.4){
  h+=title(t,2.5,14.2,'Ela não substitui<br>cargos. Substitui<br><span class="hl">tarefas.</span>',330,92);
  h+=title(t,14.2,26.4,'Repetitivas → <span class="hl">IA</span><br>Julgamento → <span style="color:'+C.orange+'">você</span>',330,88);
  const split=easeInOut(pr(t,5.5,1.2)), sort=easeInOut(pr(t,15,1.6));
  // whole job block
  h+=`<div style="position:absolute;left:70px;right:70px;top:700px;height:900px;border-radius:40px;border:6px solid ${C.white};opacity:${(1-split)*clamp(pr(t,2.8,.3))};display:flex;align-items:center;justify-content:center;font-size:110px;font-weight:900">SEU CARGO</div>`;
  if(split>0){
   if(sort>0) h+=`<div style="position:absolute;top:640px;left:70px;width:450px;text-align:center;font-size:52px;font-weight:800;color:${C.lime};opacity:${sort}">IA</div><div style="position:absolute;top:640px;right:70px;width:450px;text-align:center;font-size:52px;font-weight:800;color:${C.orange};opacity:${sort}">VOCÊ</div>`;
   tasks.forEach(([n,k],i)=>{const gx=70+(i%2)*490, gy=720+Math.floor(i/2)*220;
    const idx=tasks.filter((x,j)=>j<i&&x[1]==k).length; const sx=k?560:70, sy=730+idx*220;
    const x=lerp(gx,sx,sort), y=lerp(gy,sy,sort); const c=sort>.5?(k?C.orange:C.lime):C.white;
    h+=`<div class="card" style="position:absolute;left:${x}px;top:${y}px;width:450px;height:190px;display:flex;align-items:center;justify-content:center;font-size:48px;font-weight:700;color:${c};border-color:${sort>.5?c:C.line};opacity:${clamp(pr(t,5.5+i*.08,.3))};transform:scale(${lerp(.7,1,back(pr(t,5.5+i*.08,.45)))})">${n}</div>`;});
  }}
 if(t>=26.2&&t<32.4){h+=title(t,26.3,32.4,'Quem usa IA nas<br>tarefas certas<br><span class="hl">sobe de nível</span>',400,100);
  const g=easeOut(pr(t,27,1.6));
  h+=`<div style="position:absolute;left:390px;bottom:${330}px;width:300px;height:${200+g*500}px;background:linear-gradient(${C.lime},${C.lime}55);border-radius:30px 30px 0 0;${vis(t,26.6,32.4,0)}"></div>
   <div style="position:absolute;left:440px;top:${1590-(200+g*500)+10}px;font-size:160px;font-weight:900;color:${C.bg};${vis(t,26.8,32.4,0)}">↑</div>`;}
 if(t>=32.2)h+=dmCta(t,32.3,'Manda pro colega<br>que tá <span class="hl">com medo</span>',TOTAL+1);
 return frame(t,TOTAL,5,h);};
window.TOTAL=TOTAL;
