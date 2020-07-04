let imagemCenario_1;
let imagemCenario_2;
let imagemCenario_3;
let imagemCenario_4;
let imagemCenario_5;

let imagemCenario_1_2;
let imagemCenario_2_2;
let imagemCenario_3_2;
let imagemCenario_4_2;
let imagemCenario_5_2;

let imagemCenario_1_3;
let imagemCenario_2_3;
let imagemCenario_3_3;
let imagemCenario_4_3;
let imagemCenario_5_3;

let imagemCenario_1_4;
let imagemCenario_2_4;
let imagemCenario_3_4;
let imagemCenario_4_4;
let imagemCenario_5_4;

let imagemSetaCima;
let imagemSetaBaixo;

let imagemPersonagem;
let imagemInimigo;
let imagemTroll;
let imagemTrollFeio;
let imagemGotinhaVoadora;
let imagemMoedaOuro;
let imagemVida;
let imagemVidaNao;
let imagemVarinha;
let imagemEfeitoSuper;
let imagemCaldeirao;
let imagemVeneno;
let imagemSapo;
let imagemAranha;
let imagemCaldeiraoNao;
let imagemVenenoNao;
let imagemSapoNao;
let imagemAranhaNao;
let imagemGafanhoto;
let imagemMorcego;
let imagemTrollCapa;
let imagemVitoriaHipsta;
let imagemGuerreiro;
let imagemCavaleiro;
let imagemSoldado;
let imagemVidaExtra;
let imagemPergaminho;

let matrizGotinha;
let matrizPersonagem;
let matrizTroll;
let matrizTrollFeio;
let matrizGotinhaVoadora;
let matrizMoeda;
let matrizVarinha;
let matrizEfeitoSuper;
let matrizGafanhoto;
let matrizMorcego;
let matrizVitoriaHipsta;

let somPulo;
let somGameOver;
let somMoeda;
let somImpacto;
let somTransicaoCenario;
let somDoJogo;
let somInvencivel;
let somHitInimigo;
let somHistoria;
let somVitoriaInicio;
let somVitoriaFim;
let somDigitando;
let somDash;

let isSomTocando;
let isSomHistoriaTocando;
let isSomVitoriaInicioTocando;
let isSomVitoriaFimTocando;
let isSomDigitandoTocando;

let imagemGameOver;
let imagemTelaInicial;
let imagemVitoria;

let cenario_nivel_1;
let cenario_nivel_2;
let cenario_nivel_3;
let cenario_nivel_4;
let personagem;
let inimigo;
let inimigoTroll;
let inimigoGotinhaVoadora;
let inimigoTrollFeio;
let moedaOuro;
let moedaPrata;
let moedaBronze;
let varinha;
let caldeirao;
let veneno;
let sapo;
let aranha;
let gafanhoto;
let morcego;
let vidaExtra;

let controladorInimigo;
let controladorPontuacao;
let controladorGame;
let controladorCenario;
let controladorPersonagem;
let controladorItem;
let cenas;

let telaInicial;
let telaHistoria01;
let telaHistoria02;
let telaHistoria03;

let imagemTelaHistoria01;
let imagemTelaHistoria02;

let fonteTelaInicial;
let fonteHistoria;

let botaoGerenciador;
let jsonRanking;
let objetoRanking;
let meuJson = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const pontuacaoFase = 1000;

class ControladorGame {
  constructor(controladorPontuacao, controladorInimigo, controladorCenario, controladorPersonagem, controladorItem, somDoJogo, somGameOver, imagemVida, somImpacto, somImpacto2, somTransicaoCenario) {
    this.status = 0;
    this.fase = 1;
    this.controladorPontuacao = controladorPontuacao;
    this.controladorInimigo = controladorInimigo;
    this.controladorCenario = controladorCenario;
    this.controladorPersonagem = controladorPersonagem;
    this.controladorItem = controladorItem;
    this.somDoJogo = somDoJogo;
    this.somGameOver = somGameOver;
    this.imagemVida = imagemVida;
    this.somImpacto = somImpacto;
    this.somImpacto2 = somImpacto2;
    this.somTransicaoCenario = somTransicaoCenario;
    this.modo = 1; //1 - História  2 - Infinite Run
  }

  alteraStatus(status) {
    this.status = status;
  }

  adicionarPonto() {
    this.controladorPontuacao.adicionarPonto();
  }

  adicionarPontuacao(pontos) {
    this.controladorPontuacao.adicionarPontuacao(pontos);
  }

  exibeFase() {
    textAlign(LEFT);
    fill('#FFF');
    textSize(50);
    text('Nível: ' + parseInt(this.fase), 10, 50);
  }

  vidas() {
    return this.controladorPersonagem.personagem.vidas;
  }

  exibeVidas() {
    var x;
    for (x = 0; x < this.controladorPersonagem.personagem.maxVidas; x++) {
      if( this.vidas() >= x + 1)
        image(this.imagemVida, 10 + (x * (width / 15) + 2), 0, width / 15, width / 15);
      else
        image(imagemVidaNao, 10 + (x * (width / 15) + 2), 0, width / 15, width / 15);
        
    }
  }

  mudaCenario() {
    if (this.status == 1) {
      if (isSomTocando) {
        this.somDoJogo.stop();
        isSomTocando = false;
      }
      this.somTransicaoCenario.play();
      //if( this.modo == 1 )
      this.alteraStatus(2);
      //else if (this.modo ==2 )
      //  atualizaFase();
    }
  }

  atualizaFase() {
    if( this.modo == 2){
      let faseAtual = floor(this.controladorPontuacao.pontuacao / pontuacaoFase) + 1;

      if (this.status == 1 && faseAtual != this.fase) {
        if (isSomTocando) {
          this.somDoJogo.stop();
          isSomTocando = false;
        }
        this.somTransicaoCenario.play();
        this.alteraStatus(2);
      }
    }
  }

  reiniciaGame() {
    this.status = 0;
    this.fase = 1;
    this.controladorPontuacao.zera();
    this.controladorPersonagem.reinicia();
    this.controladorInimigo.reset();
    this.controladorItem.reset();
    this.controladorCenario.reinicia();
    loop();
  }

  inimigoAtual() {
    return this.controladorInimigo.inimigo;
  }

  move() {
    if (this.status != 2) {
      this.adicionarPonto();
      this.controladorPersonagem.move();
      this.controladorInimigo.move();
      this.controladorCenario.move();
      this.controladorItem.move();
    }
  }

  exibe() {

    if (this.status == 2) {
      if (this.controladorCenario.transicaoFase(this.fase + 1)) {
        this.alteraStatus(1);
        this.somTransicaoCenario.stop();
        if (!isSomTocando) {
          this.somDoJogo.loop();
          isSomTocando = true;
        }
        this.fase += 1;
        this.controladorInimigo.aumentaDificuldade();
      }
    } else {
      this.controladorCenario.atualizaCenarioAtual((this.fase % 3));
      this.controladorCenario.exibe();
      this.atualizaFase();
    }
    this.exibeVidas();
    if (this.modo == 2) {
      this.controladorPontuacao.exibe();
    } else if (this.modo == 1) {
      this.controladorPontuacao.exibeItensColetados(this.controladorPersonagem.personagem);
    }
    this.controladorInimigo.exibe();
    this.controladorPersonagem.exibe();
    if (this.status != 2)
      this.controladorCenario.exibeGrama();
    this.controladorItem.exibe();
  }

  aplicaGravidade() {
    if (this.status != 2) {
      this.controladorPersonagem.aplicaGravidade();
    }
  }

  trataColisoes() {

    if (!this.controladorInimigo.inimigo.morrendo) {
      if (this.controladorPersonagem.estaColidindo(this.inimigoAtual())) {
        if (!this.controladorPersonagem.personagem.super) {
          this.controladorPersonagem.personagem.perdeVida();
          this.somImpacto.play();
          if (this.vidas() == 0) {
            if (isSomTocando) {
              this.somDoJogo.stop();
              isSomTocando = false;
            }
            this.alteraStatus(4);
          }
        } else {
          this.somImpacto.play();
          this.controladorInimigo.morre();
          this.adicionarPontuacao(50);
        }
      }
    }

    if (this.controladorPersonagem.estaColidindo(this.controladorItem.itemAtual)) {
      this.controladorItem.itemAtual.som.play();
      this.adicionarPontuacao(this.controladorItem.itemAtual.pontos);
      if (this.controladorItem.itemAtual.tipoItem == 'Super') {
        this.controladorPersonagem.ativarPoder(this.controladorItem.itemAtual.tipoItem);
      } else if(this.controladorItem.itemAtual.tipoItem == 'VidaExtra'){
        this.controladorPersonagem.adicionarVida();
      } else if (this.controladorItem.itemAtual.tipoItem == 'Coletavel') {
        this.controladorPersonagem.coletarItem(this.controladorItem.itemAtual);
        if (!this.controladorPersonagem.personagem.achouAranha) {
          this.mudaCenario();
        } else {
          this.animaFinal();
        }
      }
      this.controladorItem.reinicia();
    }
  }

  animaFinal() {
    noLoop();
    if (isSomTocando) {
      this.somDoJogo.stop();
      isSomTocando = false;
    }
    if (!isSomVitoriaInicioTocando) {
      somVitoriaInicio.play();
      isSomVitoriaInicioTocando = true;
    }
    setTimeout(() => {
      isSomVitoriaInicioTocando = false;
      somVitoriaFim.loop();
      isSomVitoriaFimTocando = true;
      this.alteraStatus(7);
      loop();
    }, 6000);
  }

}