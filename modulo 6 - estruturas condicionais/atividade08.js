import leia from 'readline-sync'

let cod;
let saldo = 1000.00;
let valor = saldo;
let nValor;

let brl = new Intl.NumberFormat('pt-BR', {
 style: 'currency',
 currency: 'BRL'
});

console.log("|   Codigo      |        Operação     |");
console.log("|      1        | Saldo               |");
console.log("|      2        | Saque               |");
console.log("|      3        | Deposito            |");


cod = leia.questionInt("Operacao: ");


switch(cod){
  case 1:
    console.log("\nOperação - Saldo");
    console.log(brl.format(saldo.toFixed(2)));
  break;
  case 2:
    console.log("\nOperação - Saque");
    valor = leia.questionFloat("Valor: R$ ");

    if(valor > saldo){
      console.log("\nSaldo Insuficiente!");
    }else{
      nValor = saldo - valor;
      console.log(brl.format(nValor.toFixed(2)));
    }
  break; 
  case 3:
    console.log("\nOperação - Depósito");
    valor = leia.questionFloat("Valor: R$ ");

    nValor = valor + saldo
    console.log(brl.format(nValor.toFixed(2)));  
  break;
  default:
    console.log("\nOperação Inválida!");
}
