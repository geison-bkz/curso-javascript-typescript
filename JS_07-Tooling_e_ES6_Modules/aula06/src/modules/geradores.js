const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geranNumero = () => String.fromCharCode(rand(48, 58));
const sibolos = ",.;~^[]{}!@#$%*()_+=-'";
const geraSimbolo = () => sibolos[rand(0, sibolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);

    for (let i = 0; i <= qtd; i++) {
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geranNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join("").slice(0, qtd);
}