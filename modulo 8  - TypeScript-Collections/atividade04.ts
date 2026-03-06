import readlinesync = require('readline-sync');


const setLista = new Set<number>([2,5,1,3,4,9,7,8,10,6]);
let numero = 0;
let localizado;

console.log("\n**********Seu numero está aqui ???************");
numero = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ");


 for (let i of setLista){
  if(setLista.has(numero) == true){
    localizado = true;
  }
}

if(localizado == true){
  console.log(`O numero ${numero} foi encontrado!`);
}else{
  console.log(`O número ${numero} não foi encontrado!`);
}