let params = new URLSearchParams(window.location.search);
let nome = params.get("nome");
let telefone = params.get("telefone");
let celular = params.get("celular");
let email = params.get("email");
let numero = params.get("numero");

let listas = []
listas[0] = document.getElementById('tres');
listas[1] = document.getElementById('cinco');
listas[2] = document.getElementById('sete');
listas[3] = document.getElementById('resto');
listas[0].style.display = "none";
listas[1].style.display = "none";
listas[2].style.display = "none";
listas[3].style.display = "none";


if(numero % 3 === 0){
    listas[0].style.display = "inline-block";
    let primeiroNome = nome.split(" ")[0]
    document.querySelector("#nome").innerHTML = primeiroNome;
}
else if(numero % 5 === 0){
    listas[1].style.display = "inline-block";
    document.querySelector("#telefone").innerHTML = telefone[1] + telefone[2];
    document.querySelector("#celular").innerHTML = celular[1] + celular[2];
}
else if(numero % 7 === 0){
    listas[2].style.display = "inline-block";
    let dominio = email.split("@")[1];
    document.querySelector("#email").innerHTML = dominio;
}
else{
    listas[3].style.display = "inline-block";
    let nomeSeparado = nome.split(" ");
    let nomeEmail = email.split("@")[0];
    let dominioSemPontos = email.split("@")[1].split(".");
    let letrasNome = 0;
    let caracteresEmail = nomeEmail.length;
    
    nomeSeparado.forEach(element => {
        letrasNome += element.length;
    });

    dominioSemPontos.forEach(element => {
        caracteresEmail += element.length
    });

    document.querySelector("#qtd_nome").innerHTML = letrasNome;
    document.querySelector("#qtd_email").innerHTML = caracteresEmail;
}

document.getElementById("return-button").addEventListener("click", function() {
    window.location.href = "index.html";
});