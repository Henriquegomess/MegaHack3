class ControladorPontuacao{
  
    constructor(){
      this.pontuacao = 0;
    }
    
    exibe(){
      textAlign(RIGHT);
      fill('#FFF');
      textSize(50);
      text(parseInt(this.pontuacao), width - 10, 50);
    }
    
    exibeItensColetados(personagem){
      if(personagem.achouCaldeirao ){
        image(imagemCaldeirao, width * 0.80, height * 0.02, height * 0.09, height * 0.09);
      } else {
        image(imagemCaldeiraoNao, width * 0.80, height * 0.02, height * 0.09, height * 0.09);
      }
      if(personagem.achouSapo ){
        image(imagemSapo, width * 0.85, height * 0.02, height * 0.09, height * 0.09);
      } else {
        image(imagemSapoNao, width * 0.85, height * 0.02, height * 0.09, height * 0.09);
      }
      if(personagem.achouVeneno ){
        image(imagemVeneno, width * 0.90, height * 0.02, height * 0.09, height * 0.09);
      } else {
        image(imagemVenenoNao, width * 0.90, height * 0.02, height * 0.09, height * 0.09);
      }
      if(personagem.achouAranha ){
        image(imagemAranha, width * 0.95, height * 0.02, height * 0.09, height * 0.09);
      } else {
        image(imagemAranhaNao, width * 0.95, height * 0.02, height * 0.09, height * 0.09);
      }
    }
    
    adicionarPonto(){
      this.pontuacao += 0.2;
    }
    
    adicionarPontuacao(pontos){
      this.pontuacao += pontos;
    }
    
    zera(){
      this.pontuacao = 0;
    }
  }