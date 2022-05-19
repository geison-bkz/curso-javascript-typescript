//Filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos.
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//function callBackFilter(valor, indice, array) {
//    return valor > 10;
//}

//const numerosFiltrados = numeros.filter(callBackFilter);

//const numerosFiltrados = numeros.filter((valor, indice, array) => {
//    console.log(valor);
//    return valor > 10;
//})

//console.log(numerosFiltrados);

const pessoas = [
    { nome: "Geison", idade: 34 },
    { nome: "Marcia", idade: 28 },
    { nome: "Bernardo", idade: 13 },
    { nome: "Kalel", idade: 9 },
    { nome: "Zoe", idade: 1 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length > 5);
console.log(pessoasComNomeGrande);

const pessoasMenorDezAnos = pessoas.filter(obj => obj.idade < 10);
console.log(pessoasMenorDezAnos);

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith("a"));
console.log(nomeTerminaComA);