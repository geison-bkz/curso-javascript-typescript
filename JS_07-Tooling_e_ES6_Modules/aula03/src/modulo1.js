export const nome = "Geison";
export const sobrenome = "dos Santos";
export const idade = 34;

export default function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
