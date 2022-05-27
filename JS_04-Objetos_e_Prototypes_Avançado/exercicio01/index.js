//Tempo para fazer: 1h

function validaCPF(cpf) {
    let cpfRegex = cpf.replace(/\D+/g, "");
    let cpfArray = [...cpfRegex];
    let multiplicador = 10;
    let soma1 = 0;
    let soma2 = 0;

    for (let i = 0; i < 9; i++) {
        soma1 += cpfArray[i] * (multiplicador);
        multiplicador--;
    }

    let primeiroDigito = 11 - (soma1 % 11);
    if (primeiroDigito > 9) primeiroDigito = 0;

    multiplicador = 11;
    for (let i = 0; i < 8; i++) {
        soma2 += cpfArray[i] * (multiplicador);
        multiplicador--;
    }

    soma2 = soma2 + (primeiroDigito * 2);

    let segundoDigito = 11 - (soma2 % 11);
    if (segundoDigito > 9) segundoDigito = 0;

    let cpfGerado = cpfArray.map((valor, indice) => {
        if (indice === 9) valor = primeiroDigito;
        if (indice === 10) valor = segundoDigito;
        return valor;
    })

    cpfGerado = cpfGerado.join("");

    if (cpfRegex === cpfGerado.toString()) {
        console.log("CPF Valido");
    } else {
        console.log("CPF Inválido");
    }
}

let cpf = validaCPF('705.484.450-52');
let cpf2 = validaCPF('000.000.000-00');