// Carrossel 05 — IA e emprego (derivado do Reel 05).
const {C}=window.__engine, K=window.__kit;
const S=[];
S.push(K.capa('A IA vai<br>roubar seu<br><span class="hl">emprego?</span>','A resposta curta: ela não vem atrás do seu cargo. Vem atrás de algumas tarefas.').replace('top:660px','top:780px'));
S.push(K.frase('Ela não substitui<br>cargos. Substitui<br><span class="hl">tarefas.</span>','Todo cargo é um pacote de tarefas. Algumas são repetitivas. Outras exigem você.'));
const col=(t,c,it)=>`<div style="flex:1"><div style="font-size:46px;font-weight:800;color:${c};margin-bottom:20px;text-align:center">${t}</div>${it.map(x=>`<div class="card" style="padding:26px 20px;margin-bottom:18px;text-align:center;font-size:40px;font-weight:700;color:${c};border-color:${c}">${x}</div>`).join('')}</div>`;
S.push(`<div class="h" style="top:200px;font-size:84px">Repetitivas → <span class="hl">IA</span><br>Julgamento → <span style="color:${C.orange}">você</span></div>`+
  K.abs(470,'display:flex;gap:40px',col('IA faz',C.lime,['Relatórios','Planilhas','E-mails padrão','Resumos'])+col('Você faz',C.orange,['Decidir','Negociar','Liderar','Criar relações'])));
S.push(K.prompt('Faça o <span class="hl">teste:</span>','"Esta é a lista das minhas tarefas da semana. Separe o que a IA pode fazer por mim, o que ela pode me ajudar a fazer e o que só eu posso fazer."','Cola a sua lista real. O resultado mostra onde ganhar tempo.'));
S.push(K.frase('O risco real<br>não é a IA.','É ficar parado enquanto outros aprendem a usar nas tarefas certas, e sobem de nível.',112));
S.push(K.cta('Manda pro colega<br>que tá <span class="hl">com medo</span>','Concorda? Comenta aí.','enviar').replace('font-size:112px','font-size:92px'));
window.SLIDES=S; window.TEMA='IA e emprego';
