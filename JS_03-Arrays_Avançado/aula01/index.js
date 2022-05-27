const nomes = new Array("Geison", "Marcia", "Bernardo");
const nomes1 = ["Geison", "Marcia", "Bernardo"];
nomes[2] = "Kalel";
delete nomes[2];
console.log(nomes, nomes.length);

const novo = [...nomes];
novo.pop();
console.log(novo);

const nomes2 = ["Geison", "Marcia", "Bernardo"];
const removido = nomes2.pop();
const removidoInicio = nomes2.shift();
console.log(nomes2, removido);

const nomes3 = ["Geison", "Marcia", "Bernardo"];
nomes3.push("Kalel");
nomes3.unshift("Zoe");
console.log(nomes3);

const nomes4 = ["Geison", "Marcia", "Bernardo", "Kalel", "Zoe"];
const novo4 = nomes4.slice(1, 3);
console.log(novo4);

const nome5 = "Geison dos Santos";
const nomes5 = nome5.split(" ");
console.log(nomes5);

const nomes6 = ["Geison", "dos", "Santos"];
const nome6 = nomes6.join(" ");
console.log(nome6);