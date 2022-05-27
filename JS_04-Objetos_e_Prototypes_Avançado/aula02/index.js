// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    //this.nome = nome;
    //this.preco = preco;

    Object.defineProperty(this, "estoque", {
        enumerable: false, //mostra a chave
        value: estoque, //valor
        writable: false, //pode alterar
        configurable: true //configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
}

const produto1 = new Produto("Camiseta", 20, 3);
console.log(produto1);
console.log(Object.keys(produto1));