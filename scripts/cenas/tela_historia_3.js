class TelaHistoria03{
  
    constructor(imagem, matriz) {
      
      const funcaoBotao = () => {
        controladorGame.alteraStatus(8);
        this.botao.botao.hide();
        this.reinicia();
      }
      
      this.botao = new BotaoGerenciador('Continuar', width / 2, height / 2);
      this.botao.y = height * 0.8;
      this.botao.atribuiAcao(funcaoBotao);
      this.botao.botao.hide();
      this.imagem = imagem;
      this.matriz = matriz;
      this.frameAtual = 0;
      this.letraAtual = 0;
      this.texto = "Parabéns!!!\n\nVocê ajudou a bruxinha Hipsta a encontrar\ntodos os ingredientes.\n\n- Abracadabra, pé de cabra.\nTransforme de volta estas criaturas que por acidente enfeitiçei.\n\n- Faça-se!!!";
      this.textoEscrito = "P";
    }
    
    reinicia(){
      this.frameAtual = 0;
      this.letraAtual = 0;
      this.texto = "Parabéns!!!\n\nVocê ajudou a bruxinha Hipsta a encontrar\ntodos os ingredientes.\n\n- Abracadabra, pé de cabra.\nTransforme de volta estas criaturas que por acidente enfeitiçei.\n\n- Faça-se!!!";
      this.textoEscrito = "P";
    }
  
    draw() {
      this._imagemTelaFundo();
      this._texto();
      this._botao();
      this._animacao();
    }
    
    _animacao(){
      //image(imagemVitoria, width * 0.6, height * 0.15, height * 0.8, height * 0.8);
      image(this.imagem, width * 0.67, height * 0.30, 
            height * 0.7, 
            height * 0.7, 
            this.matriz.posicaoX(this.frameAtual), 
            this.matriz.posicaoY(this.frameAtual), 
            480, 
            480);
      this.frameAtual++;
      if( this.frameAtual >= this.matriz.length){
        this.frameAtual = 0;
      }
      
    }
  
    _imagemTelaFundo() {
      image(imagemTelaInicial, 0, 0, width, height);
      image(imagemCaldeirao, width * 0.08, height * 0.78, height * 0.13, height * 0.13);
      image(imagemSapo, width * 0.15, height * 0.78, height * 0.13, height * 0.13);
      image(imagemVeneno, width * 0.22, height * 0.78, height * 0.13, height * 0.13);
      image(imagemAranha, width * 0.29, height * 0.78, height * 0.13, height * 0.13);
    }
  
    _texto() {
      textAlign(LEFT);
      textFont(fonteHistoria);
      textSize(height * 0.06);
      fill(0,0,0);
      text(this.textoEscrito, width * 0.08, height * 0.1);
      
      if( this.letraAtual < this.texto.length -1 ){
        if(! isSomDigitandoTocando ){
          somDigitando.loop();
          isSomDigitandoTocando = true;
        }
        this.letraAtual++;
        this.textoEscrito += this.texto[this.letraAtual]; 
      } else {
        if(isSomDigitandoTocando ){
          somDigitando.stop();
          isSomDigitandoTocando = false;
        }
      }
        
    }
  
    _botao() {
      this.botao.draw();
      this.botao.botao.center('horizontal');
    }
    
  }