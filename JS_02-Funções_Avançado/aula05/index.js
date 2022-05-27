//Closures

function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao("Geison");
const funcao2 = retornaFuncao("Marcia");
console.log(funcao());
console.log(funcao2());