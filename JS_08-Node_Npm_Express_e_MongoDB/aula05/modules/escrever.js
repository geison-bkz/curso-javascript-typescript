const fs = require("fs").promises;
const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "..", "teste.json");

const pessoas = [
    { nome: "Geison" },
    { nome: "Marcia" },
    { nome: "Bernardo" },
    { nome: "Kalel" },
    { nome: "Zoe" },
]
const json = JSON.stringify(pessoas, "", 2);

fs.writeFile(caminhoArquivo, json, { flag: "w" });