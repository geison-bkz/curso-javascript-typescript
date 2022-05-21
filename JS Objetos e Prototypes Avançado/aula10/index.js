const pessoas = [
    { id: 3, nome: "Geison" },
    { id: 2, nome: "Marcia" },
    { id: 1, nome: "Bernardo" }
];

/* const novasPessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
} */

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

//opção de destructure
for (const [identifier, { id, nome }] of novasPessoas) {
    console.log(identifier, id, nome);
}

/* console.log(novasPessoas);
console.log(novasPessoas.get(2)); */