// Função construtora

function Pessoa(nome, sobrenome) {
    //Atributos ou metodos privados
    const ID = 123456;
    const metodoInterno = () => { };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log("Sou um metodo");
    };
}

const p1 = new Pessoa("Geison", "dos Santos");
console.log(`${p1.nome} ${p1.sobrenome}`);
p1.metodo();