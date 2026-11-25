// Carrossel 02 — 3 tarefas de 1 hora que a IA faz em 1 minuto (derivado do Reel 02).
const {C}=window.__engine, K=window.__kit;
const bar=(c,w,lbl,val)=>`<div style="display:flex;align-items:center;gap:20px;margin-top:16px;font-size:34px;font-weight:700;color:${c}"><div style="width:90px">${lbl}</div><div style="flex:1;height:34px;background:${C.line};border-radius:17px"><div style="width:${w}%;min-width:34px;height:100%;background:${c};border-radius:17px"></div></div><div style="width:110px;text-align:right">${val}</div></div>`;
const T=[
 ['Fórmula de planilha','Aquela que você nunca lembra','"Crie uma fórmula que some as vendas de março por vendedor. Os dados estão nas colunas A (data), B (vendedor) e C (valor)."','Peça também a explicação da fórmula.'],
 ['E-mail difícil','Pro chefe, pro cliente, pro fornecedor','"Escreva um e-mail firme e educado pedindo mais 5 dias de prazo. Motivo: o fornecedor atrasou a entrega."','Diga o tom e o motivo.'],
 ['Ata da reunião','Com responsável e prazo','"Transforme estas anotações em ata, com decisões, responsável e prazo de cada item: [cole aqui]"','Pode colar bagunçado mesmo.'],
];
const S=[];
S.push(K.capa('Você ainda faz<br>isso <span class="hl">na mão?</span>','3 tarefas que comem <span style="color:'+C.orange+'">1 hora</span> da sua semana e a IA resolve em <span class="hl">1 minuto</span>.'));
T.forEach(([n,sub,ex,why],i)=>S.push(K.item(`TAREFA ${i+1} DE 3`,n,C.lime,sub,'O PROMPT',ex,why,96)+
  K.abs(1100,'',bar(C.orange,100,'Você','~1 h')+bar(C.lime,4,'IA','~1 min'))));
S.push(K.frase('O segredo:<br><span class="hl">dê o contexto</span><br>junto do pedido.','Cole os dados, as anotações ou o e-mail original. Sem isso, ela chuta.<br><br><span style="font-size:34px">Tempos ilustrativos.</span>',100));
S.push(K.cta('Qual você<br>testa <span class="hl">primeiro?</span>','Manda pra quem vive dizendo<br>que não tem tempo.','enviar'));
window.SLIDES=S; window.TEMA='3 tarefas em 1 minuto';
