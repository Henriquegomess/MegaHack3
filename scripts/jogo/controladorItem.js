class ControladorItem{
    constructor(arrayItem){
      this.arrayItem = arrayItem;
      this.itemAtual = this.arrayItem[0];
      this.itensEntregues = 1;
    }
    
    exibe(){
      this.itemAtual.exibe();
    }
    
    anima(){
      this.itemAtual.anima();
    }
    
    move(){
      this.itemAtual.move();
      if(this.itemAtual.saiuDaTela())
        this.reinicia();
    }
    
    reinicia(){
      var indice = floor(random(0, 3));
      
      if( controladorGame.modo == 1 ){
      
        if( this.itensEntregues % 25 == 0){
          if(! this.arrayItem[4].coletado )
            this.itemAtual = this.arrayItem[4];
          else if ( ! this.arrayItem[5].coletado )
            this.itemAtual = this.arrayItem[5];
          else if ( ! this.arrayItem[6].coletado )
            this.itemAtual = this.arrayItem[6];
          else if ( ! this.arrayItem[7].coletado )
            this.itemAtual = this.arrayItem[7];
        }
        else if( this.itensEntregues % 15 == 0 ){
          this.itemAtual = this.arrayItem[3];
        } else {
          this.itemAtual = this.arrayItem[indice];
        }
      } else if ( controladorGame.modo == 2 ) {
        if( this.itensEntregues % 50 == 0 ){
          this.itemAtual = this.arrayItem[8];
        } else if( this.itensEntregues % 20 == 0 ){
          this.itemAtual = this.arrayItem[3];
        } else {
          this.itemAtual = this.arrayItem[indice];
        }
      }
      this.itensEntregues++;
      this.itemAtual.reinicia();
    }
    
    reset(){
      for(var x = 0; x < this.arrayItem.length; x++){
        this.arrayItem[x].coletado = false;
      }
      this.itensEntregues = 1;
      this.reinicia();
    }
  }