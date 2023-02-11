$(document).ready(function() {
    $("#telefone").mask("(00) 0000-0000");
    $("#celular").mask("(00) 00000-0000");
  });
  


document.getElementById('form').addEventListener('submit', function(evento){
  evento.preventDefault()
  var nome = document.querySelector('input[id="nome"]').value;
  var telefone = document.querySelector('input[id="telefone"]').value;
  var celular = document.querySelector('input[id="celular"]').value;
  var email = document.querySelector('input[id="email"]').value;
  var numero = document.querySelector('input[id="numero"]').value;

  window.location = "resposta.html?nome=" + nome + "&telefone=" + telefone + "&celular=" + celular + "&email=" + email + "&numero=" + numero;

})

