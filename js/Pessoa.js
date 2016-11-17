function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Criando um Método
    this.nomeCompleto = function(){
        return this.nome + " " + this.sobrenome;
    };


    // Setter
    this.setNome = function(pnome){ // O p é apenas uma abreviação para Parâmetro
        this.nome = pnome;
    };

    this.setSobrenome = function(psobrenome){
        this.sobrenome = psobrenome;
    };


    // Getter
    this.getNome = function() {
        return this.nome;
    };

    this.getSobrenome = function() {
        return this.sobrenome;
    };
};
