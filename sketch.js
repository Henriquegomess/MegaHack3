function preload() {
  imagemCenario_1 = loadImage('imagens/cenario/fase_1/BG_Decor.png');
  imagemCenario_2 = loadImage('imagens/cenario/fase_1/Foreground.png');
  imagemCenario_3 = loadImage('imagens/cenario/fase_1/Middle_Decor.png');
  imagemCenario_4 = loadImage('imagens/cenario/fase_1/Sky.png');
  imagemCenario_5 = loadImage('imagens/cenario/fase_1/Ground.png');

  imagemCenario_1_2 = loadImage('imagens/cenario/fase_2/BG_Decor.png');
  imagemCenario_2_2 = loadImage('imagens/cenario/fase_2/Foreground.png');
  imagemCenario_3_2 = loadImage('imagens/cenario/fase_2/Middle_Decor.png');
  imagemCenario_4_2 = loadImage('imagens/cenario/fase_2/Sky.png');
  imagemCenario_5_2 = loadImage('imagens/cenario/fase_2/Ground.png');

  imagemCenario_1_3 = loadImage('imagens/cenario/fase_3/BG_Decor.png');
  imagemCenario_2_3 = loadImage('imagens/cenario/fase_3/Foreground.png');
  imagemCenario_3_3 = loadImage('imagens/cenario/fase_3/Middle_Decor.png');
  imagemCenario_4_3 = loadImage('imagens/cenario/fase_3/Sky.png');
  imagemCenario_5_3 = loadImage('imagens/cenario/fase_3/Ground.png');

  imagemCenario_1_4 = loadImage('imagens/cenario/fase_4/BG_Decor.png');
  imagemCenario_2_4 = loadImage('imagens/cenario/fase_4/Foreground.png');
  imagemCenario_3_4 = loadImage('imagens/cenario/fase_4/Middle_Decor.png');
  imagemCenario_4_4 = loadImage('imagens/cenario/fase_4/Sky.png');
  imagemCenario_5_4 = loadImage('imagens/cenario/fase_4/Ground.png');
  
  imagemTelaHistoria01 = loadImage('imagens/assets/tela_historia_01.jpg');
  imagemTelaHistoria02 = loadImage('imagens/assets/tela_inicial_4.png');
  imagemSetaCima = loadImage('imagens/assets/arrow_up.png');
  imagemSetaBaixo = loadImage('imagens/assets/arrow_down.png');

  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemEfeitoSuper = loadImage('imagens/personagem/efeito_super.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemTroll = loadImage('imagens/inimigos/troll.png');
  imagemTrollFeio = loadImage('imagens/inimigos/troll_01_andando.png');
  imagemGotinhaVoadora = loadImage('imagens/inimigos/dropy-flying.png');
  imagemGafanhoto = loadImage('imagens/inimigos/bat2.png');
  imagemMorcego = loadImage('imagens/inimigos/bat.png');
  imagemVitoria = loadImage('imagens/personagem/imagem_vitoria.png');
  imagemTrollCapa = loadImage('imagens/personagem/troll.png');
  imagemGuerreiro = loadImage('imagens/personagem/knight.png');
  imagemCavaleiro = loadImage('imagens/personagem/roman.png');
  imagemSoldado = loadImage('imagens/personagem/warrior.png');
  imagemPergaminho = loadImage('imagens/assets/pergaminho2_hor.png');

  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  somGameOver = loadSound('sons/game-over-sound-effect.mp3');
  somMoeda = loadSound('sons/moeda.wav');
  somImpacto = loadSound('sons/impacto_2.mp3');
  somTransicaoCenario = loadSound('sons/transicaoFase.mp3');
  somInvencivel = loadSound('sons/invencible_cutted.mp3');
  somHitInimigo = loadSound('sons/hit_inimigo.mp3');
  somHistoria = loadSound('sons/som_historia.mp3');
  somVitoriaInicio = loadSound('sons/melodia_vitoria_inicio.mp3');
  somVitoriaFim = loadSound('sons/melodia_vitoria_fim.mp3');
  somDigitando  = loadSound('sons/digitando.mp3');
  somDash = loadSound('sons/dash.mp3');

  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
  imagemMoedaOuro = loadImage('imagens/itens/gold_star_sprite.png');
  imagemMoedaPrata = loadImage('imagens/itens/silver_star_sprite.png');
  imagemMoedaBronze = loadImage('imagens/itens/bronze_star_sprite.png');
  imagemVida = loadImage('imagens/assets/heartCheio.png');
  imagemVidaNao = loadImage('imagens/assets/heartApagado.png');
  imagemVidaExtra = loadImage('imagens/itens/uma_vida.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemVarinha = loadImage('imagens/itens/varinha.png');
  imagemCaldeirao = loadImage('imagens/itens/letraVCheio.png');
  imagemVeneno = loadImage('imagens/itens/letraVCheio.png');
  imagemSapo = loadImage('imagens/itens/letraOCheio.png');
  imagemAranha = loadImage('imagens/itens/letraOCheio.png');
  imagemCaldeiraoNao = loadImage('imagens/itens/letraVApagado.png');
  imagemVenenoNao = loadImage('imagens/itens/letraVApagado.png');
  imagemSapoNao = loadImage('imagens/itens/letraOApagado.png');
  imagemAranhaNao = loadImage('imagens/itens/letraOApagado.png');
  imagemVitoriaHipsta = loadImage('imagens/personagem/victory_sprite.png');
  
  fonteTelaInicial = loadFont('fonts/fonteTelaInicial.otf');
  fonteHistoria = loadFont('fonts/fonte_historia.ttf');
  
  /*setInterval(function(){ 
    jsonRanking = loadJSON('record.json'); 
    //console.log(jsonRanking); 
  }, 5000);*/
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario_nivel_1 = new Cenario([imagemCenario_1, imagemCenario_2, imagemCenario_3, imagemCenario_4, imagemCenario_5], 3);

  cenario_nivel_2 = new Cenario([imagemCenario_1_2, imagemCenario_2_2, imagemCenario_3_2, imagemCenario_4_2, imagemCenario_5_2], 3);

  cenario_nivel_3 = new Cenario([imagemCenario_1_3, imagemCenario_2_3, imagemCenario_3_3, imagemCenario_4_3, imagemCenario_5_3], 3);

  cenario_nivel_4 = new Cenario([imagemCenario_1_4, imagemCenario_2_4, imagemCenario_3_4, imagemCenario_4_4, imagemCenario_5_4], 3);

  controladorCenario = new ControladorCenario([cenario_nivel_4, cenario_nivel_1, cenario_nivel_2, cenario_nivel_3]);


  matrizGotinha = new MatrizPersonagem(104, 104, 4, 4);
  inimigo = new Inimigo(matrizGotinha, imagemInimigo, width, height - (height * 0.17), height * 0.12, height * 0.12, 104, 104, false, width * 0.01);

  matrizTroll = new MatrizPersonagem(480, 480, 5, 6, 28);
  inimigoTroll = new Inimigo(matrizTroll, imagemTroll, width, height - ((height / 5) * 2.2), (height / 5) * 2.5, (height / 5) * 2.5, 480, 480, false, width * 0.01);

  matrizGotinhaVoadora = new MatrizPersonagem(200, 150, 3, 6, 16);
  inimigoGotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width, height - 270, (height * 0.2), (height * 0.15), 200, 150, true, width * 0.01);

  matrizGafanhoto = new MatrizPersonagem(165, 124, 12, 1);
  gafanhoto = new Inimigo(matrizGafanhoto, imagemGafanhoto, width, height - 270, (height * 0.2), (height * 0.15), 165, 124, true, width * 0.01);

  matrizMorcego = new MatrizPersonagem(293.1428, 212, 7, 1);
  morcego = new Inimigo(matrizMorcego, imagemMorcego, width, height - 270, height * 0.304, height * 0.22, 293.1428, 212, true, width * 0.012);

  matrizTrollFeio = new MatrizPersonagem(822, 557, 7, 1);
  inimigoTrollFeio = new Inimigo(matrizTrollFeio, imagemTrollFeio, width, height - (height * 0.45), (height * 0.664), (height * 0.45), 822, 557, false, width * 0.012);

  controladorInimigo = new ControladorInimigo([inimigo, inimigoGotinhaVoadora, inimigoTroll, gafanhoto, inimigoTrollFeio, morcego ]);

  matrizPersonagem = new MatrizPersonagem(220, 270, 4, 4);
  matrizEfeitoSuper = new MatrizPersonagem(480, 480, 5, 4, 17);
  personagem = new Personagem(matrizPersonagem, matrizEfeitoSuper, imagemPersonagem, imagemEfeitoSuper, 15, height - (height * 0.35), (height * 0.245), (height * 0.3), 220, 270);
  controladorPersonagem = new ControladorPersonagem(personagem);

  matrizMoeda = new MatrizPersonagem(120, 120, 6, 1);
  moedaOuro = new Item(matrizMoeda, imagemMoedaOuro, somMoeda, width, height / 10 * 6, 50, 'Moeda');
  moedaPrata = new Item(matrizMoeda, imagemMoedaPrata, somMoeda, width, height / 10 * 6, 25, 'Moeda');
  moedaBronze = new Item(matrizMoeda, imagemMoedaBronze, somMoeda, width, height / 10 * 6, 10, 'Moeda');

  matrizVarinha = new MatrizPersonagem(512, 512, 1, 1);
  varinha = new Item(matrizVarinha, imagemVarinha, somMoeda, height * 0.03, height * 0.03, 0, 'Super');
  caldeirao = new Item(matrizVarinha, imagemCaldeirao, somMoeda, height * 0.03, height * 0.03, 0, 'Coletavel');
  sapo = new Item(matrizVarinha, imagemSapo, somMoeda, height * 0.03, height * 0.03, 0, 'Coletavel');
  veneno = new Item(matrizVarinha, imagemVeneno, somMoeda, height * 0.03, height * 0.03, 0, 'Coletavel');
  aranha = new Item(matrizVarinha, imagemAranha, somMoeda, height * 0.03, height * 0.03, 0, 'Coletavel');
  vidaExtra = new Item(matrizVarinha, imagemVida, somMoeda, height * 0.03, height * 0.03, 0, 'VidaExtra', 5.5);
  
  controladorItem = new ControladorItem([moedaOuro, moedaPrata, moedaBronze, varinha, caldeirao, sapo, veneno, aranha, vidaExtra]);
  
  matrizVitoriaHipsta = new MatrizPersonagem(480, 480, 5, 4, 17 );
  

  isSomTocando = false;
  
  //botaoGerenciador = new BotaoGerenciador('Modo História', width/2, height/2);
  telaInicial = new TelaInicial();
  telaHistoria01 = new TelaHistoria01();
  telaHistoria02 = new TelaHistoria02();
  telaHistoria03 = new TelaHistoria03(imagemVitoriaHipsta, matrizVitoriaHipsta);
  telaHistoria04 = new TelaHistoria04(imagemVitoriaHipsta, matrizVitoriaHipsta);
  telaManualInstrucao = new TelaManualInstrucao();

  frameRate(40);
  controladorPontuacao = new ControladorPontuacao();
  controladorGame = new ControladorGame(
    controladorPontuacao,
    controladorInimigo,
    controladorCenario,
    controladorPersonagem,
    controladorItem,
    somDoJogo,
    somGameOver,
    imagemVida,
    somImpacto,
    somHitInimigo,
    somTransicaoCenario
  );
}

function draw() {
  if (controladorGame.status == 0) {
    telaInicial.draw();
    //telaHistoria03.draw();
  } else if (controladorGame.status == 4) {
    controladorGame.exibe();
    noLoop();
    controladorGame.somGameOver.play();
    image(imagemGameOver, (width / 2) - 206, (height / 2) - 39, 412, 78);
    //if( controladorGame.modo == 2 ){
    //  console.log(jsonRanking);
    //  saveJSON(jsonRanking, 'record2.json');
    //  console.log('ok');
    //}
  } else if ( controladorGame.status == 5 ){
    telaHistoria01.draw();
  }else if ( controladorGame.status == 6 ){
    telaHistoria02.draw();
  } else if ( controladorGame.status == 7 ){
    telaHistoria03.draw();
  } else if( controladorGame.status == 8){
    telaHistoria04.draw();
  } else if( controladorGame.status == 9){
    telaManualInstrucao.draw();
  }else {
    controladorGame.exibe();
    controladorGame.aplicaGravidade();
    controladorGame.trataColisoes();
    controladorGame.move();
  }
}

function keyPressed() {
  if (controladorGame.status ==1 && key === 'ArrowUp') {
    personagem.pula(somPulo); 
  } else if (controladorGame.status == 1 && key === 'ArrowDown'){
    controladorGame.controladorPersonagem.desce(somDash);
  } else if (key === 'Enter') {
     if (controladorGame.status == 4) {
      controladorGame.reiniciaGame();
      telaInicial.draw();
    }
  }
  
  function mouseClicked(){
    if (controladorGame.status ==1 && key === 'ArrowUp') {
      personagem.pula(somPulo); 
    } else if (controladorGame.status == 1 && key === 'ArrowDown'){
      controladorGame.controladorPersonagem.desce(somDash);
    } 
  }
}