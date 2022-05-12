//IIFE - Immediately invoked function expression

(function (idade, peso, altura) {
    const sobrenome = "dos Santos";
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criaNome("Geison"));
    }

    falaNome();
    console.log(`idade: ${idade} \npeso: ${peso} \naltura: ${altura}`);
})(34, 62, 1.70);

const nome = "Qualquer outro nome";