function paginar(id) {
    var elementos = document.getElementsByClassName('item');
    
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].classList.remove('active');
    }

    var pagina = document.getElementById(id);
    pagina.classList.add('active');
}
