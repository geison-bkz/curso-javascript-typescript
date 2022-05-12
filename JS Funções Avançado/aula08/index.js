//Factory function

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(valor) {
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join("");
        },
        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura,
        peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa("Geison", "dos Santos", 1.7, 62);
p1.nomeCompleto = "Marcia Engroff";
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala("testando"));