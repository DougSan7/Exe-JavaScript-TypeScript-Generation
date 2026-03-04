import leia from 'readline-sync'

let A;
let B;
let C;
let maior;

A =  leia.questionInt("Digite o número A: ");

B =  leia.questionInt("Digite o número B: ");

C =  leia.questionInt("Digite o número C: ");

if ((A + B) > C){
  console.log("A Soma de A + B é Maior do que C");

}else if((A + B) < C){
  console.log("A Soma de A + B é Menor do que C");

}else{
  console.log("A Soma de A + B é Igual a C");
}
