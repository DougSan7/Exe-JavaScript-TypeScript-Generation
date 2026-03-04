import leia from 'readline-sync'

let numero;

numero = leia.questionFloat("Digite um numero: ");

if(numero% 2 == 0 && numero > 0){
  console.log(`O ${numero} é par e positivo`);

}else if(numero% 2 == 1 && numero > 0){
  console.log(`O ${numero} é impar e positivo`);

}else if(numero% 2 == 0 && numero < 0){
  console.log(`O ${numero} é impar e positivo`);

}else if(numero% 2 == 0 && numero < 0){
  console.log(`O ${numero} é impar e positivo`);
}
