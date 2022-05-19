//               -5        -4         -3         -2      -1
//                1         2          3          4       5
const nomes = ["Geison", "Marcia", "Bernardo", "Kalel", "Zoe"];
//nomes.splice(indice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(3, 2, "nome substituido", "outro nome");
console.log(nomes, removidos);