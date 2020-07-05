class TelaHistoria04{
  
    constructor(imagem, matriz) {
      
      const funcaoBotao = () => {
        controladorGame.reiniciaGame();
        this.reinicia();
        controladorGame.alteraStatus(0);
        this.botao.botao.hide();
        if(isSomDigitandoTocando ){
          somDigitando.stop();
          isSomDigitandoTocando = false;
        }
        
        if( isSomVitoriaFimTocando ){
          somVitoriaFim.stop();
          isSomVitoriaFimTocando = false;
        }
      }
      
      this.botao = new BotaoGerenciador('Jogar Novamente', width / 2, height / 2);
      this.botao.y = height * 0.8;
      this.botao.atribuiAcao(funcaoBotao);
      this.botao.botao.hide();
      this.imagem = imagem;
      this.matriz = matriz;
      this.frameAtual = 0;
      this.letraAtual = 0;
      this.texto = "Assim foi feito e todos os aldeões retornaram à sua forma original.\n Graças à você e à Hipsta tudo voltou a ser como era antes!";
      this.textoEscrito = "A";
      this.fimTexto = false;
      this.tocouSomMoeda = false;
    }
    
    reinicia(){
      this.frameAtual = 0;
      this.letraAtual = 0;
      this.texto = "Assim foi feito e todos os aldeões retornaram à sua forma original.\n Graças à você e à Hipsta tudo voltou a ser como era antes!";
      this.textoEscrito = "A";
      this.fimTexto = false;
      this.tocouSomMoeda = false;
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
      if( this.fimTexto ){
        if(! this.tocouSomMoeda ){
          somMoeda.play();
          this.tocouSomMoeda = true;
        }
        image(imagemGuerreiro, width * 0.29, height * 0.3, height * 0.2, height * 0.2);
        image(imagemCavaleiro, width * 0.44, height * 0.3, height * 0.2, height * 0.2);
        image(imagemSoldado, width * 0.59, height * 0.3, height * 0.2, height * 0.2);
      }
    }
  
    _texto() {
      textAlign(CENTER);
      textFont(fonteHistoria);
      textSize(height * 0.06);
      fill(0,0,0);
      text(this.textoEscrito, width / 2, height * 0.1);
      
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
          this.fimTexto = true;
        }
      }
        
    }
  
    _botao() {
      this.botao.draw();
      this.botao.botao.center('horizontal');
    }
    
  }class TelaHistoria04{
  
  constructor(imagem, matriz) {
    
    const funcaoBotao = () => {
      controladorGame.reiniciaGame();
      this.reinicia();
      controladorGame.alteraStatus(0);
      this.botao.botao.hide();
      if(isSomDigitandoTocando ){
        somDigitando.stop();
        isSomDigitandoTocando = false;
      }
      
      if( isSomVitoriaFimTocando ){
        somVitoriaFim.stop();
        isSomVitoriaFimTocando = false;
      }
    }
    
    this.botao = new BotaoGerenciador('Jogar Novamente', width / 2, height / 2);
    this.botao.y = height * 0.8;
    this.botao.atribuiAcao(funcaoBotao);
    this.botao.botao.hide();
    this.imagem = imagem;
    this.matriz = matriz;
    this.frameAtual = 0;
    this.letraAtual = 0;
    this.texto = "Assim foi feito e todos os aldeões retornaram à sua forma original.\n Graças à você e à Hipsta tudo voltou a ser como era antes!";
    this.textoEscrito = "A";
    this.fimTexto = false;
    this.tocouSomMoeda = false;
  }
  
  reinicia(){
    this.frameAtual = 0;
    this.letraAtual = 0;
    this.texto = "Assim foi feito e todos os aldeões retornaram à sua forma original.\n Graças à você e à Hipsta tudo voltou a ser como era antes!";
    this.textoEscrito = "A";
    this.fimTexto = false;
    this.tocouSomMoeda = false;
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
    if( this.fimTexto ){
      if(! this.tocouSomMoeda ){
        somMoeda.play();
        this.tocouSomMoeda = true;
      }
      image(imagemGuerreiro, width * 0.29, height * 0.3, height * 0.2, height * 0.2);
      image(imagemCavaleiro, width * 0.44, height * 0.3, height * 0.2, height * 0.2);
      image(imagemSoldado, width * 0.59, height * 0.3, height * 0.2, height * 0.2);
    }
  }

  _texto() {
    textAlign(CENTER);
    textFont(fonteHistoria);
    textSize(height * 0.06);
    fill(0,0,0);
    text(this.textoEscrito, width / 2, height * 0.1);
    
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
        this.fimTexto = true;
      }
    }
      
  }

  _botao() {
    this.botao.draw();
    this.botao.botao.center('horizontal');
  }
  
}