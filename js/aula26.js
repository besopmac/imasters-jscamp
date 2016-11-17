window.onload = function() {

    // Trabalhando com Ajax
    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200) {
            document.getElementById("retorno").innerHTML = ajax.responseText;
        }
    };

    ajax.open("GET", "js/aula26_informacoes.txt", true);  // Abre conexão
    ajax.send();                                          // Executa o Objeto
};
