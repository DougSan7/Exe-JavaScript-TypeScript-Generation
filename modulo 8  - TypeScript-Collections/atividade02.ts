import readlinesync = require('readline-sync');


const lista: Array<number> = [2,5,1,3,4,9,7,8,10,6];
let numero = 0;
let posicao;

console.log("\n**********Seu numero está aqui ???************");
numero = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ");


for (let i of lista){
  if(lista[i] == numero){
    posicao = i;
  }
}
if(lista.includes(numero) == true){
  console.log(`O numero ${numero} está localizado na posicao: ${posicao}`);
}else{
  console.log(`O número ${numero} não foi encontrado!`);
}
  