import readlinesync = require('readline-sync');

const cores: string[] = [];
let cor: string;
do{
  cor = readlinesync.question("Digite uma cor: ");
  cores.push(cor);
}while(cores.length < 5); 

console.log("A cores escritas sao: " + cores);
console.log("Agora por ordem lexicográfica fica: " + cores.sort());