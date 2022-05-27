//Map
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor, indice, array) => {
    return valor * 2;
});

const pessoas = [
    { nome: "Geison", idade: 34 },
    { nome: "Marcia", idade: 28 },
    { nome: "Bernardo", idade: 13 },
    { nome: "Kalel", idade: 9 },
    { nome: "Zoe", idade: 1 },
];

const nomePessoas = pessoas.map(obj => obj.nome.toString());
const objIdades = pessoas.map(obj => ({ idade: obj.idade }));
const objComId = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice + 1;
    return newObj;
})

console.log(objComId);

