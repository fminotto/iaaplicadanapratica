// Carrossel 06 — prompt de segunda (derivado do Reel 06).
const {C}=window.__engine, K=window.__kit;
const S=[];
S.push(K.capa('Segunda-feira<br><span style="color:'+C.orange+'">caótica?</span>','O prompt que organiza a semana inteira em 2 minutos.'));
S.push(K.prompt('O prompt que eu<br>uso <span class="hl">toda segunda</span>','"Esta é minha lista de tarefas. Organize por impacto e urgência, sugira o que cortar e monte minha semana em blocos de 90 minutos."','Cola a lista do jeito que está, sem arrumar nada.',470));
const Q=[['Faça já',C.lime,['Proposta cliente','Relatório mensal']],['Agende',C.blue,['Plano do trimestre','Revisar contrato']],['Rápido',C.orange,['Responder e-mails','Pagar boletos']],['Corte',C.red,['Reunião de status','Planilha antiga']]];
S.push(`<div class="h" style="top:200px;font-size:88px">Impacto <span class="hl">×</span> urgência</div>`+
  K.abs(360,'display:grid;grid-template-columns:1fr 1fr;gap:24px',Q.map(([t,c,it],q)=>`<div style="height:390px;border-radius:30px;border:4px solid ${c};background:${c}14;padding:26px 30px"><div style="font-size:44px;font-weight:800;color:${c};margin-bottom:18px">${t}</div>${it.map(x=>`<div class="card" style="padding:16px 22px;margin-bottom:14px;font-size:34px;font-weight:600;${q==3?'text-decoration:line-through;color:'+C.gray:''}">${x}</div>`).join('')}</div>`).join('')));
const D=['Seg','Ter','Qua','Qui','Sex'], B=[['Proposta cliente',0,C.lime],['Relatório mensal',1,C.lime],['Plano do trimestre',2,C.blue],['Revisar contrato',3,C.blue],['<span style="white-space:nowrap">E-mails</span> e boletos',4,C.orange]];
S.push(`<div class="h" style="top:200px;font-size:88px">Sua semana <span class="hl">pronta</span></div>`+
  K.abs(360,'display:flex;gap:16px',D.map((d,j)=>`<div style="flex:1"><div style="text-align:center;font-size:40px;font-weight:800;color:${C.gray};margin-bottom:16px">${d}</div><div style="height:600px;border-radius:24px;border:3px solid ${C.line};padding:12px">${B.filter(b=>b[1]==j).map(([t,,c])=>`<div class="card" style="padding:16px 14px;font-size:28px;font-weight:700;border-color:${c};line-height:1.2">${t}<div style="font-size:24px;color:${C.gray};margin-top:6px">90 min</div></div>`).join('')}</div></div>`).join(''))+
  K.abs(1020,'font-size:28px;color:'+C.gray,'Exemplo fictício.'));
S.push(K.cta('Salva e usa na<br><span class="hl">próxima segunda</span>','2 minutos de prompt,<br>semana inteira mais leve.'));
window.SLIDES=S; window.TEMA='prompt de segunda';
