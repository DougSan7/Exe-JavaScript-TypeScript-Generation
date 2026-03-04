import leia from 'readline-sync'

let volta = true;
let jovem = 0;
let old = 0;
let idade;

while(volta){
  idade = leia.questionInt("Digite uma idade: ");

  if(idade > 0  && idade < 21){
    jovem = ++jovem;
  
  }else if(idade > 50){
    old = ++old; 
  }

  if(idade < 0){
    volta = false;
  }
}
console.log(`Total de pessoas menores de 21 anos: ${jovem}`);
console.log(`Total de pessoas maiores de 50 anos: ${old}`);