import leia from 'readline-sync'

let nome;
let opcao;
let salario;
let novoSal;

let brl = new Intl.NumberFormat('pt-BR', {
 style: 'currency',
 currency: 'BRL'
});

console.log("|   Codigo do Cargo      |     Cargo        |    Percentual do Rajuste     |");
console.log("|          1             |Gerente           |           10%                |");
console.log("|          2             |Vendedor          |            7%                |");
console.log("|          3             |Supervisor        |            9%                |");
console.log("|          4             |Motorista         |            6%                |");
console.log("|          5             |Estoquista        |            5%                |");
console.log("|          6             |Tecnico de TI     |            8%                |");

nome = leia.question("\nDigite o nome do Colaborador: ");
opcao = leia.questionInt("Digite um codigo do cargo de 1 a 6: ");
salario = leia.questionFloat("Digite o salario: ");



switch(opcao) {
  case 1:
    novoSal = salario + (0.10 * salario);
    console.log("Nome do colaborador: " + nome )
    console.log("\nCargo: Gerente");
    console.log("\nSalario: " + brl.format(novoSal.toFixed(2)));
    break;
  case 2:
    novoSal = salario + (0.07 * salario);
    console.log("Nome do colaborador: " + nome )
    console.log("\nCargo: Vendedor");
    console.log("\nSalario: " + brl.format(novoSal.toFixed(2)));
    break;
  case 3:
    novoSal = salario + (0.09 * salario);
    console.log("Nome do colaborador: " + nome )
    console.log("\nCargo: Supervisor");
    console.log("\nSalario: " + brl.format(novoSal.toFixed(2)));
    break;
  case 4:
    novoSal = salario + (0.06 * salario);
    console.log("Nome do colaborador: " + nome )
    console.log("\nCargo: Motorista");
    console.log("\nSalario: " + brl.format(novoSal.toFixed(2)));
    break;
  case 5:
    novoSal = salario + (0.05 * salario);
    console.log("Nome do colaborador: " + nome )
    console.log("\nCargo: Estoquista");
    console.log("\nSalario: " + brl.format(novoSal.toFixed(2)));
    break;
  case 6:
    novoSal = salario + (0.08 * salario);
    console.log("Nome do colaborador: " + nome )
    console.log("\nCargo: Tecnico de TI");
    console.log("\nSalario: " + brl.format(novoSal.toFixed(2)));
    break;

  default:
    console.log("Codigo invalido");
}