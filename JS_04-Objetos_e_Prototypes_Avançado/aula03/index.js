function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== "number") {
                throw new TypeError("Não é um numero");
            }
            estoquePrivado = valor;
        }
    });
}

const produto1 = new Produto("Camiseta", 20, 3);
produto1.estoque = 10;
console.log(produto1.estoque);