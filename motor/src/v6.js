const {C,clamp,lerp,easeOut,easeInOut,back,pr,vis,pop,typed,caret,frame,title}=window.__engine;
const TOTAL=31;
// task: name, quadrant (0 imp+urg,1 imp,2 urg,3 cortar), day slot
const tk=[['Proposta cliente',0,0],['Relatório mensal',1,1],['Responder e-mails',2,0],['Reunião de status',3,-1],['Plano do trimestre',1,2],['Pagar boletos',2,3],['Revisar contrato',0,1],['Planilha antiga',3,-1]];
const pos0=[[90,720,-8],[560,780,6],[140,930,5],[600,1010,-7],[80,1150,-4],[560,1240,8],[180,1380,7],[580,1470,-6]];
function messy(t,shake){return tk.map((x,i)=>{const [px,py,r]=pos0[i];const s=shake?Math.sin(t*40+i)*6:0;return `<div class="card" style="position:absolute;left:${px+s}px;top:${py}px;padding:18px 28px;font-size:36px;font-weight:600;transform:rotate(${r}deg)">${x[0]}</div>`}).join('');}
const QC=[C.lime,C.blue,C.orange,C.red], QN=['Faça já','Agende','Rápido','Corte'];
const days=['Seg','Ter','Qua','Qui'];
window.render=function(t){let h='';
 if(t<2.6){h+=title(t,0,2.6,'Segunda-feira<br><span style="color:'+C.red+'">caótica?</span>',380,120);h+=`<div style="${vis(t,0,2.6,0,.2)}">${messy(t,true)}</div>`;}
 if(t>=2.4&&t<16.4){h+=title(t,2.5,16.4,'O prompt que eu<br>uso <span class="hl">toda segunda</span>',320,88);
  h+=`<div class="card" style="position:absolute;left:70px;right:70px;top:580px;padding:50px;border-color:${C.lime};font-size:46px;font-weight:500;line-height:1.4;${vis(t,2.8,16.4,40)}">${typed('"Esta é minha lista de tarefas. Organize por impacto e urgência, sugira o que cortar e monte minha semana em blocos de 90 minutos."',t,3.2,14)}${caret(t)}</div>`;}
 if(t>=16.2&&t<26.4){
  const toQ=easeInOut(pr(t,16.6,1.4)), toCal=easeInOut(pr(t,21.2,1.4));
  h+=title(t,16.3,21.4,'Impacto × urgência',330,84);h+=title(t,21.2,26.4,'Sua semana pronta',330,84);
  // quadrants
  h+=`<div style="opacity:${clamp(pr(t,16.4,.3))*(1-toCal)}">`+[0,1,2,3].map(q=>`<div style="position:absolute;left:${70+(q%2)*480}px;top:${520+Math.floor(q/2)*560}px;width:460px;height:540px;border-radius:30px;border:4px solid ${QC[q]};background:${QC[q]}14"><div style="padding:24px 30px;font-size:40px;font-weight:800;color:${QC[q]}">${QN[q]}</div></div>`).join('')+`</div>`;
  h+=`<div style="opacity:${toCal}">`+days.map((d,j)=>`<div style="position:absolute;left:${70+j*240}px;top:500px;width:220px;text-align:center;font-size:44px;font-weight:800;color:${C.gray}">${d}</div><div style="position:absolute;left:${70+j*240}px;top:570px;width:220px;height:1000px;border-radius:24px;border:3px solid ${C.line}"></div>`).join('')+`</div>`;
  const cnt=[0,0,0,0];
  tk.forEach((x,i)=>{const q=x[1];const k=cnt[q]++;const qx=70+(q%2)*480+30, qy=520+Math.floor(q/2)*560+100+k*130;
   const [px,py]=pos0[i];let X=lerp(px,qx,toQ),Y=lerp(py,qy,toQ),W=lerp(380,400,toQ),op=1,fs=36;
   if(x[2]>=0){const dk=tk.filter((y,j)=>j<i&&y[2]==x[2]).length;X=lerp(X,80+x[2]*240,toCal);Y=lerp(Y,600+dk*230,toCal);W=lerp(W,200,toCal);fs=lerp(36,30,toCal);}else{op=1-toCal;}
   h+=`<div class="card" style="position:absolute;left:${X}px;top:${Y}px;width:${W}px;padding:18px 22px;font-size:${fs}px;font-weight:600;border-color:${QC[q]};opacity:${op*clamp(pr(t,16.4,.3))};${q==3&&toQ>.9&&toCal<.1?'text-decoration:line-through;color:'+C.gray:''}">${x[0]}${x[2]>=0&&toCal>.8?`<div style="font-size:24px;color:${C.gray};margin-top:6px">90 min</div>`:''}</div>`;});}
 if(t>=26.2){h+=title(t,26.3,29.6,'Salva e usa na<br><span class="hl">próxima segunda</span>',460,104);h+=`<div style="opacity:${easeInOut(pr(t,29.2,1.2))}">${messy(t,false)}</div>`;}
 return frame(t,TOTAL,6,h);};
window.TOTAL=TOTAL;
