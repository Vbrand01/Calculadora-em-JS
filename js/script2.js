// Seta a jogada 
$('.row div').click(function() {
    
    // Pega o conteudo da div clicada
    var conteudo = $(this).html();
      
    if (conteudo == ""){
      
       // retorna o id da div clicada
      var posicaoJogada = $(this).attr('id');
      
      if (parseInt(get('jogada')) == 1) {
        $(this).html('<i class="icon-circle-blank"></i>');
        set('jogada', 2);
        set(posicaoJogada, 2);
      } else {
        $(this).html('<i class="icon-remove"></i>');
        set('jogada', 1);
        set(posicaoJogada, 1);
      }
    }
    
    // Verifica Jogda 1
    if (get('1') == 1 && get('2') == 1 && get('3') == 1){
      alert("ganhou"); limparDados();
    }
    
    if (get('4') == 1 && get('5') == 1 && get('6') == 1){
      alert("ganhou"); limparDados();
    }
    
    if (get('7') == 1 && get('8') == 1 && get('9') == 1){
      alert("ganhou"); limparDados();
    }
    
     if (get('1') == 1 && get('4') == 1 && get('7') == 1){
      alert("ganhou"); limparDados();
    }
    
    if (get('2') == 1 && get('5') == 1 && get('8') == 1){
      alert("ganhou"); limparDados();
    }
    
    if (get('3') == 1 && get('6') == 1 && get('9') == 1){
      alert("ganhou"); limparDados();
    }
    
    if (get('1') == 1 && get('5') == 1 && get('9') == 1){
      alert("ganhou"); limparDados();
    }
    
    if (get('3') == 1 && get('5') == 1 && get('7') == 1){
      alert("ganhou"); limparDados();
    }
    
    // Verificacao jogada 2
    if (get('1') == 2 && get('2') == 2 && get('3') == 2){
      alert("ganhou"); limparDados();
    }
    
    if (get('4') == 2 && get('5') == 2 && get('6') == 2){
      alert("ganhou"); limparDados();
    }
    
    if (get('7') == 2 && get('8') == 2 && get('9') == 2){
      alert("ganhou"); limparDados();
    }
    
     if (get('1') == 2 && get('4') == 2 && get('7') == 2){
      alert("ganhou"); limparDados();
    }
    
    if (get('2') == 2 && get('5') == 2 && get('8') == 2){
      alert("ganhou"); limparDados();
    }
    
    if (get('3') == 2 && get('6') == 2 && get('9') == 2){
      alert("ganhou"); limparDados();
    }
    
    if (get('1') == 2 && get('5') == 2 && get('9') == 2){
      alert("ganhou"); limparDados();
    }
    
    if (get('3') == 2 && get('5') == 2 && get('7') == 2){
      alert("ganhou"); limparDados();
    }
    
  })
  
  // Função para setar a jogada.
  // 1 para Bolinha. 2 para X
  function set(key, dados) {
    sessionStorage.setItem(key, dados);
  }
  
  // Função para retornar os dados inseridos
  function get(key) {
    return sessionStorage.getItem(key);
  }
  
  // Função para limpar todos os dados 
  function limparDados() {
    sessionStorage.clear();
  }
  