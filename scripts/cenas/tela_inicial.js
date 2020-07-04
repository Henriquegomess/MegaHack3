class TelaInicial {
    constructor() {
      
      const funcaoAcao = () => {
        this.botao.botao.hide();
        this.botaoModoInfinito.botao.hide();
        this.botaoManualInstrucao.botao.hide();
        controladorGame.alteraStatus(5);
        if (!isSomHistoriaTocando) {
          somHistoria.loop();
          isSomHistoriaTocando = true;
        }
      }
      
      const funcaoAcaoInfito = () => {
        this.botao.botao.hide();
        this.botaoModoInfinito.botao.hide();
        this.botaoManualInstrucao.botao.hide();
        controladorGame.controladorPersonagem.personagem.maxVidas = 5;
        controladorGame.alteraStatus(1);
        controladorGame.modo = 2;
        if (!isSomTocando) {
          somDoJogo.loop();
          isSomTocando = true;
        }
      }
      
      const funcaoManualInstrucao = ()=>{
        this.botao.botao.hide();
        this.botaoModoInfinito.botao.hide();
        this.botaoManualInstrucao.botao.hide();
        controladorGame.alteraStatus(9);
      }
      
      this.botao = new BotaoGerenciador('Começar', width / 2, height / 2);
      this.botao.atribuiAcao(funcaoAcao);
      this.botao.botao.hide();
      this.botao.y = height * 0.55;
      //this.botao.x = width * 0.28;
      
      this.botaoModoInfinito = new BotaoGerenciador('Escolher bruxinha', width / 2, height / 2);
      this.botaoModoInfinito.atribuiAcao(funcaoAcaoInfito);
      this.botaoModoInfinito.botao.hide();
      this.botaoModoInfinito.y = height * 0.7;
      //this.botaoModoInfinito.x = width * 0.53;
      
      this.botaoManualInstrucao = new BotaoGerenciador('xxx', width / 2, height / 2);
      this.botaoManualInstrucao.atribuiAcao(funcaoManualInstrucao);
      this.botaoManualInstrucao.botao.hide();
      this.botaoManualInstrucao.y = height * 0.85;
      //this.botaoManualInstrucao.x = width * 0.53;
    }  
  
    _botao() {
      this.botaoModoInfinito.draw();
      this.botaoModoInfinito.botao.center('horizontal');
      this.botao.draw();
      this.botao.botao.center('horizontal');
      this.botaoManualInstrucao.draw();
      this.botaoManualInstrucao.botao.center('horizontal');
    }
  
  
  
  }