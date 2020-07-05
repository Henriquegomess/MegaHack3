class ControladorCenario{

    constructor(arrayCenarios){
      this.arrayCenarios = arrayCenarios;
      this.cenarioAtual = arrayCenarios[1];
      this.transicaoCenario = false;
    }
    
    move(){
      this.cenarioAtual.move();
    }
    
    exibe(){
      this.cenarioAtual.exibe();
    }
    
    exibeGrama(){
      this.cenarioAtual.exibeGrama();
    }
    
    transicaoFase(proximaFase){
      let indiceProximaFase = proximaFase % this.arrayCenarios.length; 
      this.arrayCenarios[indiceProximaFase].exibe();
      this.arrayCenarios[indiceProximaFase].exibeGrama();
      if( this.cenarioAtual.remove() ){
        this.cenarioAtual = this.arrayCenarios[indiceProximaFase];
        
        return true;
      }
    }
    
    atualizaCenarioAtual(indiceCenarioAtual){
      let indiceProximaFase = indiceCenarioAtual % this.arrayCenarios.length; 
      if(this.cenarioAtual != this.arrayCenarios[indiceProximaFase] ){
        this.transicaoCenario = true;
      } else {
        this.cenarioAtual = this.arrayCenarios[indiceProximaFase];
      }
    }
    
    reinicia(){
      this.cenarioAtual = this.arrayCenarios[1];
      this.transicaoCenario = false;
    }
  }