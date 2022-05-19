const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor, indice, array) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

//console.log(total);

const pessoas = [
    { nome: "Geison", idade: 34 },
    { nome: "Marcia", idade: 28 },
    { nome: "Bernardo", idade: 13 },
    { nome: "Kalel", idade: 9 },
    { nome: "Zoe", idade: 1 },
];

const maiorIdade = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maiorIdade);