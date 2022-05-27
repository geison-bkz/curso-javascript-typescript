const pessoa = {
    nome: "Geison",
    sobrenome: "dos Santos"
}
//console.log(pessoa.nome);
//console.log(pessoa["sobrenome"]);
const chave = "sobrenome";
//console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = "Marcia";
pessoa1.sobrenome = "Engroff";
pessoa1.idade = 29;
pessoa1.falarNome = function () {
    console.log(`Meu nome é ${this.nome}.`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

//console.log(pessoa1);
//pessoa1.falarNome();
//console.log(pessoa1.getDataNascimento());

//delete pessoa1.nome;
//console.log(pessoa1);

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

//factory functions / constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get NomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa("Geison", "dos Santos");
console.log(p1.NomeCompleto());

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);//metodo para tornar os atributos do objeto inalteraveis.
}

const p2 = new Pessoa("Geison", "dos Santos");
console.log(p2);