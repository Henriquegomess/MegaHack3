class Personagem extends Animacao{
  
    constructor(matriz, matrizEfeitoSuper, imagem, imagemEfeitoSuper, posicaoX, posicaoY, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite ){
      super(matriz, imagem, posicaoX, posicaoY, larguraPersonagem, alturaPersonagem, larguraSprite, alturaSprite);
      
      this.alturaInicial = posicaoY;
      this.velocidadePulo = 0;
      this.gravidade = 2;    
      this.pulos = 2;
      this.vidas = 3;
      this.maxVidas = 5;
      this.invencivel = false;
      this.super = false;
      this.matrizEfeitoSuper = matrizEfeitoSuper;
      this.imagemEfeitoSuper = imagemEfeitoSuper;
      this.framePoder = 0;
      this.achouCaldeirao = false;
      this.achouSapo = false;
      this.achouVeneno = false;
      this.achouAranha = false;
    }
    
    pula(somPulo){
      if( this.pulos > 0 ){
        somPulo.play();
        this.velocidadePulo = - (height * 0.048);
        this.pulos--;
      }
    }
    
    desce(somDesce){
      if( this.pulos < 2 ){
        somDesce.play();
        this.velocidadePulo = + 2 * (height * 0.048);
      }
    }
    
    adicionarVida(){
      if( this.vidas < this.maxVidas )
        this.vidas++;
    }
    
    aplicaGravidade(){
      this.posicaoY += this.velocidadePulo; 
      this.velocidadePulo += this.gravidade;
      
      if( this.posicaoY > this.alturaInicial ){
        this.posicaoY = this.alturaInicial;
        this.framePulo = 0;
        this.pulos = 2;
      }
    }
    
    estaColidindo(inimigo){
        let isInimigo = inimigo instanceof Inimigo;
               
      if(this.invencivel && isInimigo){
        return false;
      }
      
      if ( collideCircleCircle(this.posicaoX + this.larguraPersonagem  / 2, this.posicaoY + this.alturaPersonagem  / 2, this.larguraPersonagem * 0.9 ,inimigo.posicaoX + inimigo.larguraPersonagem / 2, inimigo.posicaoY + inimigo.alturaPersonagem  / 2, inimigo.larguraPersonagem / 2) ){
          if( isInimigo && this.vidas > 1 && !this.super){
            this.ficaInvencivel(1200);
          }
          return true;
        }
      return false;
    }
    
    perdeVida(){
      this.vidas = this.vidas - 1;
    }
    
    ficaInvencivel( tempo ){
      this.invencivel = true;
      setTimeout(() => {
        this.invencivel = false;
      }, tempo);
    }
    
    exibe(){
      if(! this.invencivel || (frameCount % 10) > 4){
        super.exibe();
      }
      
      if( this.super ){
        image(
        this.imagemEfeitoSuper, 
        this.posicaoX, 
        this.posicaoY, 
        this.larguraPersonagem, 
        this.alturaPersonagem, 
        this.matrizEfeitoSuper.posicaoX(this.framePoder),
        this.matrizEfeitoSuper.posicaoY(this.framePoder), 
        this.matrizEfeitoSuper.larguraFrame, 
        this.matrizEfeitoSuper.alturaFrame);
        this.animaPoder();
      }
    }
    
    move(){
      super.anima();
    }
    
    reinicia(){
      this.vidas = 3;
      this.posicaoY = this.alturaInicial;
      this.velocidadePulo = 0;
      this.achouCaldeirao = false;
      this.achouSapo = false;
      this.achouVeneno = false;
      this.achouAranha = false;
    }
    
    animaPoder(){
      this.framePoder++;
      if( this.framePoder >= this.matrizEfeitoSuper.length){
        this.framePoder = 0;
      }
    }
    
    ativarPoder(poder){
      if( !this.super && poder == 'Super'){
        this.super = true;
        if(isSomTocando){
          somDoJogo.stop();
          isSomTocando = false;
        }
        somInvencivel.play();
        setTimeout(() => {
          this.super = false;
          somInvencivel.stop();
          if(! isSomTocando ){
            somDoJogo.loop();
            isSomTocando = true;
          }
      }, 15000);
      }
    }
    
    coletarItem(item){
      item.coletado = true;
      if( this.achouCaldeirao == false ){
        this.achouCaldeirao = true;
      } else if ( this.achouSapo == false ){
        this.achouSapo = true;
      } else if (this.achouVeneno == false ){
        this.achouVeneno = true;
      } else {
        this.achouAranha = true;
      }
    }
    
  }