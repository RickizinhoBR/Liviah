$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});
//Adicionando o atraso de tempo
document.getElementById("carta").addEventListener("click", function(event) {
    // Prevenir o comportamento padrão do link
    event.preventDefault();
    // Aguardar o tempo especificado antes de redirecionar
    setTimeout(function() {
      // Redirecionar para outra página
      window.location.href = "../flower-by-my-love/flower.html";
    }, 3000);
  });