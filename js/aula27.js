window.onload = function() {
    // Trabalhando com Ajax
    // var ajax = new XMLHttpRequest();
    //
    // ajax.onreadystatechange = function(){
    //     if(ajax.readyState == 4 && ajax.status == 200) {
    //         document.getElementById("retorno").innerHTML = ajax.responseText;
    //     }
    // };
    //
    // ajax.open("GET", "js/aula26_informacoes.txt", true);
    // ajax.send();

    var ajax = new XMLHttpRequest();
    var links = document.getElementsByClassName("abrePagina");

    ajax.onreadystatechange = function(){

        console.log(ajax.status);
        console.log(ajax.readyState);

        if(ajax.readyState == 4 && ajax.status == 200) {
            document.getElementById("retorno").innerHTML = ajax.responseText;
        }

        if(ajax.readyState == 4 && ajax.status == 404) {
            alert("Página não encontrada!");
            return false;
        }
    };

    ajax.onerror = function(){
        alert("Página não encontrada!");
    };

    for(var i=0; i<links.length; i++) {
        links[i].onclick = function(evento) {
            evento.preventDefault(); // Javascript previna o comportamento padrão do objeto
            ajax.open("GET", this.getAttribute('href'), true);
            ajax.send();
        };
    };
};
