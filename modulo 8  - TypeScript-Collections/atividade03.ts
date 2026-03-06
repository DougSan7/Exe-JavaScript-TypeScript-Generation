import readlinesync = require('readline-sync');


const setLista = new Set<number>([]);
let numero;

for (let i = 1; i <= 10; i++){
  numero = readlinesync.questionInt("Digite o numero para o set: ");
  setLista.add(numero);
}
console.log(`\n Lista dos dados do Set: \n`);

const meuarray = Array.from(setLista); 
const ordenado = meuarray.sort((a, b) => a - b);
console.log(ordenado);

