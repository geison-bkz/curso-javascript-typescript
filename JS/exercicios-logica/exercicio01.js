//Escreva uma função que receba 2 números e retorne o maior deles

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function maiorEntreDoisNumeros(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

num1 = getRandomInt(1, 100);
num2 = getRandomInt(1, 100);
console.log("Num1: " + num1);
console.log("Num2: " + num2);
console.log("retorno da função: " + maiorEntreDoisNumeros(num1, num2));
