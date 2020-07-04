class TelaHistoria01 {
    constructor() {
      
      const funcaoAcaoIniciarJogo = () => {
        controladorGame.alteraStatus(6);
        this.botao.botao.hide();
        if(isSomDigitandoTocando ){
          somDigitando.stop();
          isSomDigitandoTocando = false;
        }
        this.reinicia();
      }
      
      this.botao = new BotaoGerenciador('Próximo', width / 2, height / 2);
      this.botao.atribuiAcao(funcaoAcaoIniciarJogo);
      this.botao.y = height * 0.8;
      this.botao.botao.hide();
      this.frameAtual = 0;
      this.letraAtual = 0;
      this.texto = "    A Hipsta é uma bruxinha aprendiz, em\numa de suas aulas de feitiço ela\nacidentalmente transformou os\naldeões da vila em terríveis criaturas.\n\n    Agora ela deverá encontrar os \ningredientes secretos para que \ntodos voltem a ser como antes.";
      this.textoEscrito = " ";
    }

    draw() {
        this._imagemTelaFundo();
        this._texto();
        this._botao();
      }
      
      reinicia(){
        this.frameAtual = 0;
        this.letraAtual = 0;
        this.texto = "    A Hipsta é uma bruxinha aprendiz, em\numa de suas aulas de feitiço ela\nacidentalmente transformou os\naldeões da vila em terríveis criaturas.\n\n    Agora ela deverá encontrar os \ningredientes secretos para que \ntodos voltem a ser como antes.";
        this.textoEscrito = " ";
      }
    
      _imagemTelaFundo() {
        image(imagemTelaHistoria01, 0, 0, width, height);
      }
    
      _texto() {
        textAlign(LEFT);
        textFont(fonteHistoria);
        textSize(height * 0.06);
        fill(0,0,0);
        text(this.textoEscrito, width * 0.08, height * 0.18);
        
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