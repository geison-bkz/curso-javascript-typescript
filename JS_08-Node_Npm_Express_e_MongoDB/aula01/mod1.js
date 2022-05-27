//const nome = "Geison";
//const sobrenome = "dos Santos";

//const falaNome = () => nome + " " + sobrenome;

//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.falaNome = falaNome;

//exports.ChaveComOutroNome = nome;
//exports.sobrenome = sobrenome;
//exports.falaNome = falaNome;
//this.qualquerCoisa = "O que eu quiser exportar";

//Exportando sobrescrevendo 
//module.exports = {
//    nome, sobrenome, falaNome
//};

//console.log(module.exports);
//console.log(exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;