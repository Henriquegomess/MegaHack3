/*function setup() {
 
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  jogo = new Jogo();
  jogo.setup();
  telaInicial= new TelaInicial();
  gameover=new GameOver();
  botaoGerenciador = new BotaoGerenciador('Iniciar',width/2, height/2, 'jogo','botao-tela-inicial');
  cena1 = new Cena1();
  cena2 = new Cena2();
  cena3 = new Cena3();
  fim = new Fim();
  somDoJogo.loop();
  cenas = {
    jogo,
    telaInicial,
    cena1,
    cena2,
    cena3,
    gameover,
    fim
  }
  
}

function mouseClicked(){
  jogo.salto('ArrowUp');
}
function keyPressed(){
  jogo.salto(key);
}

function draw() {
  
  cenas[cenaAtual].draw();
  
}


*/