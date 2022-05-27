//return
//Retorna um valor
//Termina a função

//Exemplo de função sem retorno
function soma2(a, b) {
    console.log("soma2: " + (a + b));
}
soma2(5, 2);

//Exemplos de função com retorno

function soma(a, b) {
    return a + b;
}
console.log("soma: " + soma(2, 5));

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}
const p1 = criaPessoa("Geison", "dos Santos");
console.log(typeof (p1), p1)

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + " " + resto;
    }
    return falaResto;
}
const olaMundo = falaFrase("Olá");
console.log(olaMundo("Mundo"));

/* function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
} */

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));