//deixar visivel
document.getElementById("senha").addEventListener("focus", function() {
    document.getElementById("mensagem").style.display = "block";
});

//não deixar visivel
document.getElementById("senha").addEventListener("blur", function() {
    document.getElementById("mensagem").style.display = "none";
});

//redefinindo variáveis do html
document.getElementById("senha").addEventListener("input", function() {
    var senha = document.getElementById("senha");
    var minuscula = document.getElementById("minuscula");
    var maiuscula = document.getElementById("maiuscula");
    var numero= document.getElementById("numero");
    var tamanho = document.getElementById("tamanho");

// Validações

    //minuscula minuscula
    var lowerCaseLetters = /[a-z]/g;
    if (senha.value.match(lowerCaseLetters)) {
        minuscula.classList.remove("invalido");
        minuscula.classList.add("valido");
    } else {
        minuscula.classList.remove("valido");
        minuscula.classList.add("invalido");
    }

    //letra maiuscula
    var upperCaseLetters = /[A-Z]/g;
    if (senha.value.match(upperCaseLetters)) {
        maiuscula.classList.remove("invalido");
        maiuscula.classList.add("valido");
    } else {
        maiuscula.classList.remove("valido");
        maiuscula.classList.add("invalido");
    }

    //número
    var numbers = /[0-9]/g;
    if (senha.value.match(numbers)) {
        numero.classList.remove("invalido");
        numero.classList.add("valido");
    } else {
        numero.classList.remove("valido");
        numero.classList.add("invalido");
    }

    //tamanho
    if (senha.value.length >= 8) {
        tamanho.classList.remove("invalido");
        tamanho.classList.add("valido");
    } else {
        tamanho.classList.remove("valido");
        tamanho.classList.add("invalido");
    }
});

