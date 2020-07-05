class Item{
    constructor( matrizMovimento, imagem, som, posicaoX, posicaoY, pontos, tipoItem, proporcao ){
      this.matrizMovimento = matrizMovimento;
      this.imagem = imagem;
      this.som = som;
      this.posicaoX = posicaoX;
      this.posicaoY = posicaoY;
      this.pontos = pontos;
      this.frameAtual = 0;
      this.larguraPersonagem = height / ( proporcao || 10 );
      this.alturaPersonagem = height / ( proporcao || 10 );
      this.velocidadeMinima = 15;
      this.velocidade = 15;
      this.tipoItem = tipoItem;
      this.coletado = false;
    }
    
    exibe(){
      image(this.imagem, this.posicaoX, this.posicaoY, this.larguraPersonagem, this.alturaPersonagem, this.matrizMovimento.posicaoX(this.frameAtual), this.matrizMovimento.posicaoY(this.frameAtual), this.matrizMovimento.larguraFrame, this.matrizMovimento.alturaFrame);
      this.anima();
    }
    
    anima(){
      this.frameAtual++;
      if( this.frameAtual >= this.matrizMovimento.length){
        this.frameAtual = 0;
      }
    }
    
    reinicia(){
      this.velocidade = random (this.velocidadeMinima, 30);
      this.posicaoX = width + random( 100, 1200);
      this.posicaoY = height - random(120,350);
    }
    
    move(){
      this.posicaoX -= this.velocidade;
    }
    
    saiuDaTela(){
      return this.posicaoX < - this.larguraPersonagem;
    }
  }