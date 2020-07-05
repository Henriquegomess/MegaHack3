class ControladorInimigo {

    constructor(listaInimigo) {
      //console.log('Criou controlador');
      this.listaInimigo = listaInimigo;
      this.inimigo = this.sorteiaInimigo();
    }
  
    obtemInimigo() {
      return this.inimigo;
    }
  
    move() {
      this.inimigo.move();
      if (this.inimigo.saiuDaTela()) {
        this.inimigo = this.sorteiaInimigo();
        this.inimigo.posicaoX = width;
        this.inimigo.mudaVelocidade();
  
        if (this.inimigo.isVoador) {
          this.inimigo.posicaoY = random(height * 0.4, (height * 0.75));
        } else {
          this.inimigo.posicaoY = this.inimigo.yInicial;
        }
      }
    }
  
    sorteiaInimigo() {
      return this.listaInimigo[Math.floor(random(0, this.listaInimigo.length))];
    }
  
    exibe() {
      this.inimigo.exibe();
    }
  
    aumentaDificuldade() {
      //console.log('Aumentou a velocidade');
      for (var x = 0; x < this.listaInimigo.length; x++)
        this.listaInimigo[x].aumentaDificuldade();
    }
  
    reinicia() {
      this.inimigo.reinicia();
    }
  
    reset() {
      for (var x = 0; x < this.listaInimigo.length; x++) {
        this.listaInimigo[x].velocidadeMinima = this.listaInimigo[x].velocidadeInicial;
        this.listaInimigo[x].velocidade = this.listaInimigo[x].velocidadeInicial;
        this.listaInimigo[x].reinicia();
      }
  
    }
  
    morre() {
      this.inimigo.morre();
    }
  
  }