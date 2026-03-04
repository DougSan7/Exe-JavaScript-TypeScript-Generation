import leia from 'readline-sync'

let cod;
let numero1;
let numero2;
let resul;


console.log("|   Codigo      |        Operação     |");
console.log("|      1        | Soma                |");
console.log("|      2        | Substituição        |");
console.log("|      3        | Multiplicação       |");
console.log("|      4        | Divisão             |");

numero1 = leia.questionFloat("\nDigite o 1 numero: ");
numero2 = leia.questionFloat("Digite o 2 numero: ");
cod = leia.questionInt("Operacao: ");

switch(cod) {
  case 1:
    resul = numero1 + numero2;
    console.log(`\n${numero1.toFixed(1)} + ${numero2.toFixed(1)} = ${resul.toFixed(1)} `);
  break;
  case 2:
    resul = numero1 - numero2;
    console.log(`\n${numero1.toFixed(1)} - ${numero2.toFixed(1)} = ${resul.toFixed(1)} `);
  break;
  case 3:
    resul = numero1 * numero2;
    console.log(`\n${numero1.toFixed(1)} * ${numero2.toFixed(1)} = ${resul.toFixed(1)} `);
  break;
  case 4:
    resul = numero1 / numero2;
    console.log(`\n${numero1.toFixed(1)} / ${numero2.toFixed(1)} = ${resul.toFixed(1)} `);
  break;
  default:
    console.log("Operação Inválida!");
}