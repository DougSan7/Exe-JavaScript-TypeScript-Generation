import leia from 'readline-sync';

let volta = true;
let soma = 0;
let num;

do{
  num = leia.questionInt("Digite uma numero: ");

  if(num > 0){
    soma = soma + num;
  }

  if(num === 0){
    volta = false;
  }
}while(volta);

  console.log(`A soma dos números positivos é: ${soma}`);