// Escreva uma função que recebe um numero e
// retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    }
    return num;
}

for (let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));
}