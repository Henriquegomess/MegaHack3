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

}