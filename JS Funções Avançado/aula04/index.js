//Escopo Lexico

const nome = "Geison";

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Marcia';
    falaNome();
}
usaFalaNome();