class Cenario{
    constructor(arrayImagem, velocidade){
      this.arrayImagem = arrayImagem;
      this.imagem = this.arrayImagem[0];
      this.velocidade = velocidade;
      this.velocidade2 = velocidade * 1.2;
      this.velocidade3 = velocidade * 0.8;
      this.velocidade4 = velocidade * 1.4;
      
      this.y0 = 0;
      
      this.x1 = 0;
      this.x2 = width;
      
      this.y1 = 0;
      this.y2 = 0;
      
      this.x12 = 0;
      this.x22 = width;
      
      this.y12 = 0;
      this.y22 = 0;
      
      this.x13 = 0;
      this.x23 = width;
      
      this.y13 = 0;
      this.y23 = 0;
      
      this.x14 = 0;
      this.x24 = width;
      
      this.y14 = 0;
      this.y24 = 0;
    }
    
    exibe(){
      image(this.arrayImagem[3], this.x1, this.y0, width, height); 
      image(this.arrayImagem[3], this.x2, this.y0, width, height);
      
      image(this.arrayImagem[0], this.x13, this.y13, width, height); 
      image(this.arrayImagem[0], this.x23, this.y13, width, height);
      
      image(this.arrayImagem[2], this.x1, this.y1, width, height); 
      image(this.arrayImagem[2], this.x2, this.y2, width, height);
      
      image(this.arrayImagem[1], this.x12, this.y12, width, height); 
      image(this.arrayImagem[1], this.x22, this.y22, width, height);
    }
    
    exibeGrama(){
      image(this.arrayImagem[4], this.x14, this.y14, width, height); 
      image(this.arrayImagem[4], this.x24, this.y24, width, height);
    }
    
    remove(){
      
      let velocidadeSaida = 10;
      
      this.y14 = this.y14 + velocidadeSaida;
      this.y24 = this.y24 + velocidadeSaida;
      
      if( this.x12 < this.x22 ){
        this.x12 -= velocidadeSaida;
        this.x22 += velocidadeSaida;
      } else {
        this.x12 += velocidadeSaida;
        this.x22 -= velocidadeSaida;
      }
      
      if( this.x13 < this.x23 ){
        this.x13 -= velocidadeSaida;
        this.x23 += velocidadeSaida;
      } else {
        this.x13 += velocidadeSaida;
        this.x23 -= velocidadeSaida;
      }
      
      this.y1 -= velocidadeSaida;
      this.y2 -= velocidadeSaida;
      this.y0 -= velocidadeSaida;
      
      this.exibeGrama();
      this.exibe();
      
      return this._cenarioRemovido();  
    }
    
    removeNovo(){
      
      let velocidadeSaida = 15;
      
      this.y14 = this.y14 + velocidadeSaida;
      this.y24 = this.y24 + velocidadeSaida;
      
      //if( this.y14 > 50 ){
        this.y12 += velocidadeSaida;
        this.y22 += velocidadeSaida;
      //}
      
      //if( this.y12 > 50 ){
        this.y1 += velocidadeSaida;
        this.y2 += velocidadeSaida;
      //}
      
      //if( this.y1 > 50 ){
        this.y13 += velocidadeSaida;
      //}
      
      //if( this.y13 > 50 ){
        this.y0 += velocidadeSaida;
      //}
      
      this.exibeGrama();
      this.exibe();
      
      return this._cenarioRemovido();  
    }
    
    move(){
      this.x1 = this.x1 - this.velocidade;
      this.x2 = this.x2 - this.velocidade;
      
      this.x12 = this.x12 - this.velocidade2;
      this.x22 = this.x22 - this.velocidade2;
      
      this.x13 = this.x13 - this.velocidade3;
      this.x23 = this.x23 - this.velocidade3;
      
      this.x14 = this.x14 - this.velocidade4;
      this.x24 = this.x24 - this.velocidade4;
      
      if( this.x1 <= -width){
        this.x1 = this.x2 + width;
      }
      
      if( this.x2 <= -width){
        this.x2 = this.x1 + width;
      }
      
      if( this.x12 <= -width){
        this.x12 = this.x22 + width;
      }
      
      if( this.x22 <= -width){
        this.x22 = this.x12 + width;
      }
      
      if( this.x13 <= -width){
        this.x13 = this.x23 + width;
      }
      
      if( this.x23 <= -width){
        this.x23 = this.x13 + width;
      }
      
      if( this.x14 <= -width){
        this.x14 = this.x24 + width;;
      }
      
      if( this.x24 <= -width){
        this.x24 = this.x14 + width;;
      }
      
    }
    
    _cenarioRemovido(){
      if( this.y14 <= height || this.y24 <= height ){
        return false;
      }
      
      if( this.x12 >= -width && this.x12 <= width ){
        return false;
      }
      
      if( this.x22 >= -width && this.x22 <= width ){
        return false;
      }
      
      if( this.x13 >= -width && this.x13 <= width ){
        return false;
      }
      
      if( this.x23 >= -width && this.x23 <= width ){
        return false;
      }
      
      if( this.y1 >= - height || this.y2 >= height){
        return false;
      }
      
      if( this.y0 >= - height ){
        return false;
      }
      
      this.x1 = 0;
      this.x2 = width;
      
      this.y1 = 0;
      this.y2 = 0;
      
      this.x12 = 0;
      this.x22 = width;
      
      this.y12 = 0;
      this.y22 = 0;
      
      this.x13 = 0;
      this.x23 = width;
      
      this.y13 = 0;
      this.y23 = 0;
      
      this.x14 = 0;
      this.x24 = width;
      
      this.y14 = 0;
      this.y24 = 0;
      
      this.y0 = 0;
      
      return true;
    }
  }