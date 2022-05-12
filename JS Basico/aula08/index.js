/*
Geison dos Santos tem 34 anos, pesaa 62 kg
tem 1.7 de altura e seu IMC é de 
*/

let data = new Date();
const nome = 'Jose';
const sobrenome = 'dos Santos';
let idade = 64;
let peso = 67.0;
const altura = 1.58;
let imc = peso / (altura * altura);
let anoNascimento = data.getFullYear() - idade;

console.log(nome + " " + sobrenome + " tem " + idade + ", pesa " + peso + " kg\n tem " + altura + " e seu IMC é de " + imc + ".");