class ControladorPersonagem{
  
    constructor( personagem ){
      this.personagem = personagem;
    }
    
    exibe(){
      this.personagem.exibe();
    }
    
    move(){
      this.personagem.anima();
    }
    
    aplicaGravidade(){
      this.personagem.aplicaGravidade();
    }
    
    estaColidindo(item){
      return this.personagem.estaColidindo(item);
    }
    
    reinicia(){
      this.personagem.reinicia();
    }
    
    ativarPoder(poder){
      this.personagem.ativarPoder(poder);
    }
    
    coletarItem(item){
      this.personagem.coletarItem(item);
    }
    
    adicionarVida(){
      this.personagem.adicionarVida();
    }
    
    desce(somDesce){
      this.personagem.desce(somDesce);
    }
    
  }