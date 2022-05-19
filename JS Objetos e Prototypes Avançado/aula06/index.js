const objA = {
    chaveA: "A"
};

const objB = {
    chaveB: "B"
};

const objC = new Object();
objC.chaveC = "C";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
//console.log(objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.acrescimo = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto("Camiseta", 50);
console.log(p1);

const p2 = {
    nome: "Caneca",
    preco: 10
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.acrescimo(10);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    }
});
p3.acrescimo(10);
console.log(p3);