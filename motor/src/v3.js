const {C,clamp,lerp,easeOut,easeInOut,back,pr,vis,pop,typed,caret,frame,title,chip}=window.__engine;
const TOTAL=33;
const flags=[{a:9.2,t:'Números exatos sem fonte'},{a:14.6,t:'Citações, leis e artigos muito específicos'},{a:20.0,t:'Links que você não abriu'}];
const probs=[['azul',78],['cinza',12],['lindo',6],['verde',4]];
window.render=function(t){let h='';
 if(t<2.6){const sh=t<1.4?Math.sin(t*60)*6*(1-t/1.4):0;
  h+=`<div class="h" style="top:420px;font-size:116px;${vis(t,0,2.6,0,.2)};transform:translateX(${sh}px)">A IA mente.<br><span style="color:${C.red}">Com toda a<br>confiança.</span></div>`;
  const m=easeOut(pr(t,.6,1.2));
  h+=`<div class="card" style="position:absolute;left:70px;right:70px;top:1050px;padding:40px 50px;${vis(t,.3,2.6,40)}"><div style="font-size:40px;font-weight:700;color:${C.gray}">CONFIANÇA</div>
   <div style="display:flex;align-items:center;gap:30px;margin-top:20px"><div style="flex:1;height:50px;background:${C.line};border-radius:25px"><div style="width:${m*100}%;height:100%;background:${C.red};border-radius:25px"></div></div><div style="font-size:64px;font-weight:800">${Math.round(m*100)}%</div></div></div>`;}
 if(t>=2.4&&t<8.4){h+=title(t,2.5,8.4,'Ela completa<br><span class="hl">padrões</span>, não<br>consulta a verdade',380,96);
  h+=`<div class="card" style="position:absolute;left:70px;right:70px;top:900px;padding:50px;${vis(t,3.0,8.4,50)}"><div style="font-size:54px;font-weight:700;margin-bottom:36px">"O céu é <span class="hl">___</span>"</div>`+
   probs.map((p,i)=>{const g=easeOut(pr(t,3.6+i*.35,.8));return `<div style="display:flex;align-items:center;gap:24px;margin:22px 0;font-size:42px;font-weight:600"><div style="width:170px">${p[0]}</div><div style="flex:1;height:44px;background:${C.line};border-radius:22px"><div style="width:${g*p[1]}%;height:100%;background:${i?C.gray:C.lime};border-radius:22px"></div></div><div style="width:110px;text-align:right">${Math.round(g*p[1])}%</div></div>`}).join('')+
   `<div style="font-size:32px;color:${C.gray};margin-top:24px">Ela escolhe a palavra mais provável, não a confirmada.</div></div>`;}
 if(t>=8.2&&t<26.4){h+=title(t,8.3,26.4,'3 sinais pra<br><span style="color:'+C.red+'">desconfiar</span>',380,104);
  flags.forEach((f,i)=>{if(t<f.a)return;h+=`<div class="card" style="position:absolute;left:70px;right:70px;top:${700+i*270}px;height:230px;display:flex;align-items:center;gap:40px;padding:0 50px;border-color:${C.red};${vis(t,f.a,26.4,0)};transform:scale(${lerp(.85,1,back(pr(t,f.a,.45)))})">
   <div style="flex:none;width:110px;height:110px;border-radius:55px;background:${C.red};display:flex;align-items:center;justify-content:center;font-size:70px;font-weight:900;color:${C.bg}">!</div>
   <div style="font-size:52px;font-weight:700;line-height:1.15">${f.t}</div></div>`;});}
 if(t>=26.2&&t<30.4){h+=title(t,26.3,30.4,'Peça sempre:',420,96);
  h+=`<div class="card" style="position:absolute;left:70px;right:70px;top:640px;padding:60px;border-color:${C.lime};font-size:64px;font-weight:600;line-height:1.25;${vis(t,26.5,30.4,40)}">${typed('"Cite a fonte e diga o quanto você tem certeza."',t,26.7,26)}${caret(t)}</div>`;}
 if(t>=30.2){h+=title(t,30.3,TOTAL+1,'Comenta a pior<br>que a IA já<br><span class="hl">te contou</span>',460,110);
  const s=1+Math.sin(t*6)*.05;
  h+=`<div style="position:absolute;left:390px;top:1060px;${pop(t,30.7)}"><svg width="300" height="260" viewBox="0 0 30 26" style="transform:scale(${s})"><path d="M3 2h24a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H11l-6 5v-5H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="${C.lime}"/><circle cx="9" cy="10.5" r="1.8" fill="${C.bg}"/><circle cx="15" cy="10.5" r="1.8" fill="${C.bg}"/><circle cx="21" cy="10.5" r="1.8" fill="${C.bg}"/></svg></div>`;}
 return frame(t,TOTAL,3,h);};
window.TOTAL=TOTAL;
