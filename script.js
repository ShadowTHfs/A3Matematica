const questions = [
  {topic:"Equações", difficulty:"FÁCIL", text:"Uma loja cobra R$ 15 de taxa fixa e R$ 4 por caderno comprado. Se uma pessoa gastou R$ 43, quantos cadernos comprou?", options:["5","6","7","8"], answer:1, hint:"Monte: 15 + 4x = 43.", explain:"15 + 4x = 43 → 4x = 28 → x = 7. Portanto, a resposta é 7 cadernos."},
  {topic:"Expressões", difficulty:"FÁCIL", text:"Se x = 4, qual é o valor de 2x² − 3x + 5?", options:["25","29","21","17"], answer:0, hint:"Substitua x por 4 antes de calcular.", explain:"2(4²) − 3(4) + 5 = 32 − 12 + 5 = 25."},
  {topic:"Equações", difficulty:"MÉDIO", text:"Uma corrida custa R$ 8 de taxa fixa mais R$ 2,50 por quilômetro. Uma viagem custou R$ 28. Quantos quilômetros foram percorridos?", options:["6,8 km","8 km","10 km","12 km"], answer:2, hint:"Use 8 + 2,5x = 28.", explain:"8 + 2,5x = 28 → 2,5x = 20 → x = 8. A resposta correta é 8 km."},
  {topic:"Sistemas", difficulty:"MÉDIO", text:"Em uma papelaria, 2 canetas e 3 cadernos custam R$ 31. Já 1 caneta e 2 cadernos custam R$ 19. Quanto custa um caderno?", options:["R$ 5","R$ 7","R$ 9","R$ 11"], answer:1, hint:"Represente os preços por x e y e elimine uma das incógnitas.", explain:"Do sistema 2x+3y=31 e x+2y=19, obtemos y=7. O caderno custa R$ 7."},
  {topic:"Função afim", difficulty:"MÉDIO", text:"Uma empresa produz peças com custo C(x) = 12x + 500, em que x é o número de peças. Qual é o custo de produzir 100 peças?", options:["R$ 1.200","R$ 1.500","R$ 1.700","R$ 2.000"], answer:2, hint:"Substitua x = 100 na função.", explain:"C(100) = 12(100) + 500 = 1.200 + 500 = R$ 1.700."},
  {topic:"2º grau", difficulty:"DIFÍCIL", text:"A altura de um objeto é dada por h(t) = −5t² + 20t + 1. Em qual instante ele atinge sua altura máxima?", options:["1 s","2 s","3 s","4 s"], answer:1, hint:"Na função quadrática, o x do vértice é −b/(2a).", explain:"t = −20/[2(−5)] = 2 s. O objeto atinge a altura máxima em 2 segundos."},
  {topic:"Função afim", difficulty:"DIFÍCIL", text:"Uma empresa tem receita R(x)=30x e custo C(x)=10x+400. Quantas unidades precisam ser vendidas para que o lucro seja zero?", options:["10","15","20","25"], answer:2, hint:"Lucro zero significa receita igual ao custo.", explain:"30x = 10x + 400 → 20x = 400 → x = 20 unidades."},
  {topic:"Equações", difficulty:"MÉDIO", text:"Um número somado ao seu dobro é igual a 45. Qual é esse número?", options:["10","12","15","18"], answer:2, hint:"Chame o número de x e monte x + 2x = 45.", explain:"3x = 45 → x = 15."},
  {topic:"Sistemas", difficulty:"DIFÍCIL", text:"Em um evento foram vendidos 120 ingressos. Inteiras custavam R$ 20 e meias R$ 10. A arrecadação foi de R$ 1.800. Quantas inteiras foram vendidas?", options:["40","50","60","70"], answer:2, hint:"Use x+y=120 e 20x+10y=1800.", explain:"x+y=120. Dividindo a segunda equação por 10: 2x+y=180. Subtraindo, x=60."},
  {topic:"2º grau", difficulty:"DIFÍCIL", text:"As raízes da equação x² − 7x + 12 = 0 são:", options:["2 e 6","3 e 4","1 e 12","−3 e −4"], answer:1, hint:"Procure dois números cujo produto seja 12 e a soma seja 7.", explain:"x²−7x+12=(x−3)(x−4). Logo, x=3 e x=4."},
  {topic:"Expressões", difficulty:"FÁCIL", text:"Simplifique: 3x + 5 − 2x + 7.", options:["x + 12","5x + 12","x + 2","6x + 12"], answer:0, hint:"Agrupe os termos que possuem x e os termos constantes.", explain:"3x−2x=x e 5+7=12. Resultado: x+12."},
  {topic:"Função afim", difficulty:"MÉDIO", text:"A função f(x)=3x−6 zera quando x é igual a:", options:["−2","0","2","6"], answer:2, hint:"Para encontrar a raiz, faça f(x)=0.", explain:"3x−6=0 → 3x=6 → x=2."}
];

const lessons = [
  {tag:"EXPRESSÕES", title:"Expressões algébricas", body:`<p>Uma expressão algébrica combina números, letras e operações. As letras representam valores que podem variar.</p><div class="example"><strong>Exemplo:</strong><br>2x + 3x − 5 = 5x − 5</div><p>Primeiro, junte termos semelhantes: aqueles que possuem a mesma parte literal.</p>`},
  {tag:"EQUAÇÕES", title:"Equação de 1º grau", body:`<p>Uma equação é uma igualdade que contém uma incógnita. O objetivo é descobrir o valor que torna a igualdade verdadeira.</p><div class="example"><strong>Exemplo:</strong><br>3x + 6 = 21<br>3x = 15<br><strong>x = 5</strong></div>`},
  {tag:"SISTEMAS", title:"Sistemas de equações", body:`<p>Quando existem duas incógnitas relacionadas por duas equações, podemos resolver um sistema.</p><div class="example"><strong>Exemplo:</strong><br>x + y = 10<br>x − y = 2<br><br>Somando as equações: 2x = 12 → x = 6.</div>`},
  {tag:"FUNÇÕES", title:"Função afim", body:`<p>Uma função afim pode ser escrita como <strong>f(x)=ax+b</strong>. O coeficiente a indica a taxa de variação e b é o valor inicial.</p><div class="example"><strong>Exemplo:</strong><br>f(x)=2x+10<br>f(5)=20</div>`},
  {tag:"2º GRAU", title:"Função quadrática", body:`<p>Uma função quadrática tem a forma <strong>f(x)=ax²+bx+c</strong>, com a diferente de zero. Seu gráfico é uma parábola.</p><div class="example"><strong>Vértice:</strong><br>xᵥ = −b/(2a)</div>`},
  {tag:"ENEM", title:"Como interpretar problemas", body:`<p>No ENEM, muitas questões apresentam a matemática dentro de uma situação cotidiana. Uma estratégia é separar o problema em três partes:</p><div class="example"><strong>1.</strong> O que o problema fornece?<br><strong>2.</strong> Qual variável preciso descobrir?<br><strong>3.</strong> Qual relação algébrica conecta as informações?</div>`}
];

let mode="challenge", current=[], currentIndex=0, score=0, lives=3, correct=0, streak=0, bestStreak=0, hintUsed=false, answered=false;

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function updateHeader(){document.getElementById("headerScore").textContent=`⭐ ${score}`;document.getElementById("headerLives").textContent=`❤️ ${lives}`;}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function startChallenge(){
  mode="challenge"; current=shuffle(questions).slice(0,10); resetGame(); showScreen("game"); renderQuestion();
}
function startSimulado(){
  mode="simulado"; current=shuffle(questions).slice(0,10); resetGame(); showScreen("game"); renderQuestion();
}
function resetGame(){currentIndex=0;score=0;lives=3;correct=0;streak=0;bestStreak=0;hintUsed=false;answered=false;updateHeader()}
function renderQuestion(){
  const q=current[currentIndex]; answered=false;hintUsed=false;
  document.getElementById("gameModeLabel").textContent=mode==="simulado"?"SIMULADO ENEM":"DESAFIO";
  document.getElementById("questionCounter").textContent=`${currentIndex+1}/${current.length}`;
  document.getElementById("progressBar").style.width=`${(currentIndex/current.length)*100}%`;
  document.getElementById("gameScore").textContent=score;
  document.getElementById("topicLabel").textContent=q.topic;
  const d=document.getElementById("difficultyBadge");d.textContent=q.difficulty;
  d.style.background=q.difficulty==="FÁCIL"?"#eaf8f2":q.difficulty==="MÉDIO"?"#fff0d9":"#f1edff";
  d.style.color=q.difficulty==="FÁCIL"?"#14744e":q.difficulty==="MÉDIO"?"#a26500":"#6941c6";
  document.getElementById("questionText").textContent=q.text;
  const answers=document.getElementById("answers");answers.innerHTML="";
  q.options.forEach((op,i)=>{const b=document.createElement("button");b.className="answer";b.textContent=String.fromCharCode(65+i)+") "+op;b.onclick=()=>answer(i);answers.appendChild(b)});
  document.getElementById("feedback").className="feedback hidden";document.getElementById("nextBtn").className="next-btn hidden";document.getElementById("hintBtn").className="hint-btn";document.getElementById("hintBtn").innerHTML='💡 Dica <span>-20 pts</span>';
}
function answer(choice){
  if(answered)return; answered=true;
  const q=current[currentIndex], buttons=[...document.querySelectorAll(".answer")];
  buttons.forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add("correct");if(i===choice&&choice!==q.answer)b.classList.add("wrong")});
  const fb=document.getElementById("feedback");fb.classList.remove("hidden");
  if(choice===q.answer){let gain=100+(hintUsed?-20:0)+(q.difficulty==="DIFÍCIL"?50:0);score+=gain;correct++;streak++;bestStreak=Math.max(bestStreak,streak);fb.className="feedback ok";fb.innerHTML=`<strong>✓ Correto!</strong> +${gain} pontos.<br>${q.explain}`}
  else{lives--;streak=0;fb.className="feedback no";fb.innerHTML=`<strong>✕ Ainda não.</strong> ${q.explain}`;if(lives<=0){updateHeader();setTimeout(endGame,800);return}}
  updateHeader();document.getElementById("gameScore").textContent=score;document.getElementById("nextBtn").className="next-btn";
}
function showHint(){
  if(answered)return;
  const q=current[currentIndex];hintUsed=true;score=Math.max(0,score-20);
  const fb=document.getElementById("feedback");fb.className="feedback";fb.innerHTML=`<strong>💡 Dica:</strong> ${q.hint}`;
  document.getElementById("hintBtn").className="hint-btn hidden";document.getElementById("gameScore").textContent=score;updateHeader();
}
function nextQuestion(){currentIndex++;if(currentIndex>=current.length)endGame();else renderQuestion()}
function endGame(){
  document.getElementById("progressBar").style.width="100%";
  const accuracy=Math.round(correct/current.length*100);
  document.getElementById("finalScore").textContent=score;
  document.getElementById("finalCorrect").textContent=`${correct}/${current.length}`;
  document.getElementById("finalAccuracy").textContent=`${accuracy}%`;
  document.getElementById("finalStreak").textContent=bestStreak;
  document.getElementById("resultIcon").textContent=accuracy>=80?"🏆":accuracy>=60?"🎯":"📚";
  document.getElementById("resultTitle").textContent=accuracy>=80?"Excelente desempenho!":accuracy>=60?"Bom trabalho!":"Hora de reforçar a base!";
  document.getElementById("resultSubtitle").textContent=`Você terminou ${mode==="simulado"?"o simulado":"o desafio"} com ${correct} acerto(s).`;
  document.getElementById("resultAdvice").innerHTML=accuracy>=80?"Você demonstrou domínio dos principais conceitos. Tente agora questões mais difíceis.":accuracy>=60?"Você já tem uma boa base. Revise os assuntos em que errou e tente novamente.":"Use o Modo Aprender para revisar os conceitos e depois refaça o desafio.";
  showScreen("result");
}
function showLearn(){
  const grid=document.getElementById("lessonGrid");grid.innerHTML="";
  lessons.forEach((l,i)=>{const el=document.createElement("article");el.className="lesson";el.innerHTML=`<span class="eyebrow">${l.tag}</span><h3>${l.title}</h3><p>${l.body.replace(/<[^>]*>/g," ").slice(0,130)}...</p><button onclick="openLesson(${i})">Ver resumo →</button>`;grid.appendChild(el)});
}
function openLesson(i){const l=lessons[i];document.getElementById("lessonTag").textContent=l.tag;document.getElementById("lessonTitle").textContent=l.title;document.getElementById("lessonBody").innerHTML=l.body;document.getElementById("lessonModal").classList.remove("hidden")}
function closeLesson(){document.getElementById("lessonModal").classList.add("hidden")}
function closeModal(e){if(e.target.id==="lessonModal")closeLesson()}
function confirmExit(){if(confirm("Sair do desafio? Seu progresso desta rodada será perdido."))showScreen("home")}
showLearn();updateHeader();
