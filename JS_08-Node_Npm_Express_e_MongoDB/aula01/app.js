//const mod1 = require("./mod1");
//console.log(mod1.falaNome());

//importando apenas a função
//const falaNome = require("./mod1").falaNome;
//console.log(falaNome());

//atraves da desestruturação
//const { ChaveComOutroNome, sobrenome, falaNome } = require("./mod1");
//console.log(ChaveComOutroNome, sobrenome, falaNome());

const path = require("path");
const axios = require("axios");
const { Pessoa } = require("./mod1");

axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
    .then(response => console.log(response.data))
    .catch(e => console.log(e));