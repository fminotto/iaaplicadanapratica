// Carrossel 07 — 5 usos de IA que quase ninguém faz (derivado do Reel 07).
const {C}=window.__engine, K=window.__kit;
const U=[
 ['Treinar uma conversa difícil','"Faça o papel do meu chefe. Vou pedir aumento. Seja duro nas objeções."','Ensaiar antes tira o nervoso da hora H.'],
 ['Achar pegadinhas no contrato','"Liste as cláusulas deste contrato de aluguel que me prejudicam e explique cada uma."','Não substitui advogado, mas mostra o que perguntar.'],
 ['Cardápio com o que tem na geladeira','"Tenho ovo, arroz, tomate e queijo. Me dê 3 jantares rápidos."','Menos desperdício, menos delivery.'],
 ['Foto do quadro branco vira tarefas','"Transforme esta foto em lista de tarefas com responsáveis."','Tira a foto no fim da reunião e pronto.'],
 ['Explicar qualquer assunto','"Me explique juros compostos como se eu tivesse 12 anos."','Depois peça um exemplo com números reais.'],
];
const S=[];
S.push(K.capa('Você usa IA<br>só como <span class="hl">Google?</span>','5 usos que quase ninguém faz, com o prompt pronto de cada um.'));
U.forEach(([n,ex,why],i)=>S.push(K.item(`USO ${i+1} DE 5`,n,C.lime,'','O PROMPT',ex,why,88).replace(/top:430px;font-size:56px[^>]*><\/div>/,'')));
S.push(K.cta('Qual desses você<br><span class="hl">não conhecia?</span>','Manda pra quem ainda usa IA<br>só como Google.','enviar'));
window.SLIDES=S; window.TEMA='5 usos de IA';
