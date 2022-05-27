//Funçoes para Object
//Object.values
//Object.entries
//Object.assign(des, any)
//Object.getOwnPropertyDescriptor(o, 'prop')
//... (spread)

//Object.keys (retorna as chaves)
//Object.freeze (congela o objeto)
//Object.defineProperties (define varias propriedades)
//Object.defineProperty (define uma propriedade)

const produto = { nome: "Caneca", preco: 1.8 };
const outraCoisa = produto;
const produtoCopiado = { ...produto };
const produtoModificado = { ...produto, material: "porcelana" };
const produtoCopiadoComAssing = Object.assign({}, produto);
const produtoModificadoComAssing = Object.assign({}, produto, { material: "porcelana" });

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;

console.log(produto);
console.log(outraCoisa);
console.log(produtoCopiado);
console.log(produtoModificado);
console.log(produtoCopiadoComAssing);
console.log(produtoModificadoComAssing);
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}