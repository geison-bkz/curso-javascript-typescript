//Promisses
//Promisse.all - Promisse.race - Promisse.resolve - Promisse.reject
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") reject(new Error("Erro"));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject("Pagina em cache");
    } else {
        return esperaAi("Baixe a pagina", 3000);
    }
}

/* const promises = [
    "Primeiro valor",
    esperaAi("Promise 1", 3000),
    esperaAi("Promise 2", 500),
    esperaAi("Promise 3", 1000),
    "Outro valor"
]

Promise.all(promises)
    .then((valor) => {
        console.log(valor);
    })
    .catch((erro) => {
        console.log(erro);
    }); */

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log("Erro", e));