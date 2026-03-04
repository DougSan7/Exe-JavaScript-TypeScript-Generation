import leia from 'readline-sync';

let vetor = [2,5,1,3,4,9,7,8,10,6];
let num, encontrado = null;

num = leia.questionInt("Digite o numero que voce deseja encontrar: ");

//while(posi === null){}

for (let i = 0; i < vetor.length; i++){
 if (vetor[i] === num){
   console.log(`O numero ${num} está localizado na posicao: ${i}`);
   encontrado = 0;
  }
} 
if(encontrado == null){
  console.log(`O numero ${num} nao foi encontrado`);
}
