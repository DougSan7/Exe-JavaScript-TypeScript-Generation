import leia from 'readline-sync'

let num;
let par = 0;
let impar = 0;


for(let i = 1; i <= 10; i++){
  num = leia.questionInt(`Digite o ${i} numero do intervalo: `); 
  if(num % 2 == 0){
    par = ++par;
  }else{
    impar = ++impar;
  }
}
console.clear();

console.log(`Total de números pares: ${par}`);
console.log(`Total de números impares: ${impar}`);