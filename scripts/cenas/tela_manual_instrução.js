class TelaManualInstrucao{
    constructor(){
      const funcaoFechar = () => {
        controladorGame.alteraStatus(0);
        this.botao.botao.hide();
      }
      
      this.botao = new BotaoGerenciador('Fechar', width / 2, height / 2);
      this.botao.y = height * 0.85;
      this.botao.atribuiAcao(funcaoFechar);
      this.botao.botao.hide();
    }
  
    draw() {
      this._imagemTelaFundo();
      this._texto();
      this._botao();
    }
    
  
    _imagemTelaFundo() {
      image(imagemTelaInicial, 0, 0, width, height);
      //image(imagemPergaminho, width * 0.25, height * 0.2, width * 0.5, width * 0.35);
      image(imagemSetaCima, width * 0.35, height * 0.45, width * 0.05, width * 0.05);
      image(imagemSetaCima, width * 0.35, height * 0.55, width * 0.05, width * 0.05);
      image(imagemSetaCima, width * 0.40, height * 0.55, width * 0.05, width * 0.05);
      image(imagemSetaBaixo, width * 0.35, height * 0.65, width * 0.05, width * 0.05);
    }
  
    _texto() {
      textFont(fonteTelaInicial);
      textAlign(CENTER);
      color('#000');
      textSize(height * 0.15);
      text('As Aventuras de Hipsta', width / 2, height * .2);
      textSize(height * 0.075);
      text('e a Floresta Encantada', width / 2, height * .27);
      //text('- Manual do Jogo -', width / 2, height * 0.4);
      textAlign(LEFT);
      text('- Pulo', width * 0.46, height * 0.53);
      text('- Pulo Duplo', width * 0.46, height * 0.63);
      text('- Mergulho', width * 0.46, height * 0.73);
  
    }
  
    _botao() {
      this.botao.draw();
      this.botao.botao.center('horizontal');
    }
  }