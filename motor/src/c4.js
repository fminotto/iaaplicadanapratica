// Carrossel 04 — PDF de 80 páginas (derivado do Reel 04).
const {C}=window.__engine, K=window.__kit;
const S=[];
S.push(K.capa('<span class="hl">80 páginas</span><br>pra ler até<br>amanhã?','Não peça "resume". Peça exatamente o que você vai usar.').replace('top:660px','top:760px'));
S.push(K.prompt('O prompt:','"Leia o documento e me dê:<br><span class="hl">5 decisões</span>, <span style="color:'+C.red+'">3 riscos</span>, <span style="color:'+C.blue+'"><span style="white-space:nowrap">2 números-chave</span></span><br>e o que eu preciso fazer até sexta."','Funciona com PDF, contrato, relatório ou ata. Anexa o arquivo e cola o prompt.'));
const G=[[C.lime,'5 decisões',['Lançar em março','Cortar plano básico','Contratar suporte','Novo fornecedor','Rever metas Q2']],[C.red,'3 riscos',['Atraso na entrega','Custo de nuvem','Concorrente local']],[C.blue,'2 números-chave',['R$ 1,2 mi de orçamento','Margem de 18%']]];
S.push(`<div class="h" style="top:200px;font-size:88px">O resultado:<br><span class="hl">1 cartão</span></div>`+
  K.abs(440,'',G.map(([c,t,it])=>`<div class="card" style="padding:24px 40px;margin-bottom:20px;border-color:${c}"><div style="font-size:42px;font-weight:800;color:${c};margin-bottom:6px">${t}</div><div style="font-size:34px;font-weight:500;line-height:1.45">${it.join(' · ')}</div></div>`).join('')+`<div style="font-size:28px;color:${C.gray}">Exemplo fictício.</div>`));
const A=[['Contrato','multas, prazos, renovação automática e o que eu estou assinando'],['Estudo ou artigo','a pergunta, o método, o resultado e a principal limitação'],['Relatório de resultados','o que melhorou, o que piorou e por quê']];
S.push(`<div class="h" style="top:200px;font-size:88px">Adapte ao<br><span class="hl">seu documento</span></div>`+
  K.abs(470,'',A.map(([d,p])=>`<div class="card" style="padding:30px 44px;margin-bottom:24px"><div style="font-size:42px;font-weight:800;color:${C.lime}">${d}</div><div style="font-size:38px;font-weight:500;margin-top:8px;line-height:1.3">"Me dê ${p}."</div></div>`).join('')));
S.push(K.frase('Dica de ouro:<br>peça <span class="hl">a página</span><br>de cada item.','Assim você confere em segundos se ela não inventou nada.'));
S.push(K.cta('Salva pro<br>próximo<br><span class="hl">relatório</span>','',  'salvar').replace('top:760px','top:820px'));
window.SLIDES=S; window.TEMA='PDF de 80 páginas';
