class Inimigo extends Animacao{
    constructor(matriz, imagem, posicaoX, posicaoY, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite, isVoador, velociadeMinima ){
      super(matriz, imagem, posicaoX, posicaoY, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite);
      this.velocidadeMinima = velociadeMinima;
      this.velocidade = velociadeMinima;
      this.velocidadeInicial = velociadeMinima;
      this.isVoador = isVoador;
      this.morrendo = false
      this.yInicial = posicaoY;
    }
    
    move(){
      this.anima();
      this.posicaoX -= this.velocidade;
    }
    
    exibe(){
      if( this.morrendo ){
        this.posicaoY += this.velocidade;
      }
      if(! this.morrendo || (frameCount % 10) > 4){
        super.exibe();
      }
    }
    
    saiuDaTela(){
      var saiu =  ( this.posicaoX < - this.larguraPersonagem ) || this.posicaoY > height;
      if( saiu ){
        this.morrendo = false;
      }
      return saiu;
    }
    
    mudaVelocidade(){
      //console.log('Minima: ' + this.velocidade + '; Velocidade: '+ this.velocidade); 
      this.velocidade = random(this.velocidadeMinima, this.velocidadeMaxima());
    }
    
    aumentaDificuldade(){
      this.velocidadeMinima *= 1.2;
    }
    
    reinicia(){
      this.velocidade = this.velocidadeMinima;
      this.posicaoX = width;
      this.posicaoY = this.yInicial;
    }
    
    morre(){
      this.morrendo = true;
    }
    
    velocidadeMaxima(){
      return this.velocidadeMinima + 10;
    }
  }