import leia from 'readline-sync'

let quantidade;
let opcao;
let valorT;


let brl = new Intl.NumberFormat('pt-BR', {
 style: 'currency',
 currency: 'BRL'
});

console.log("|   Codigo do Produto    |     Produto            |    Preco Unitario         |");
console.log("|          1             |Cachorro Quente         | R$ 10.00                  |");
console.log("|          2             |X-Salada                | R$ 15.00                  |");
console.log("|          3             |X-Bacon                 | R$ 18.00                  |");
console.log("|          4             |Bauru                   | R$ 12.00                  |");
console.log("|          5             |Refrigerante            | R$ 8.00                   |");
console.log("|          6             |Suco de laranja         | R$ 13.00                  |");

opcao = leia.questionInt("\nDigite o codigo de um produto de 1 a 6: ");
quantidade = leia.questionInt("Digite a quantidade do produto: ");

switch(opcao) {
  case 1:
    valorT = quantidade * 10.00;
    console.log("\nProduto: Cachorro Quente");
    console.log("\nValor total: " + brl.format(valorT.toFixed(2)));
    break;
  case 2:
    valorT = quantidade * 15.00;
    console.log("\nProduto: X-Salada");
    console.log("\nValor total: " + brl.format(valorT.toFixed(2)));
    break;
  case 3:
    valorT = quantidade * 18.00;
    console.log("\nProduto: X-Bacon");
    console.log("\nValor total: " + brl.format(valorT.toFixed(2)));
    break;
  case 4:
    valorT = quantidade * 12.00;
    console.log("\nProduto: Bauru");
    console.log("\nValor total: " + brl.format(valorT.toFixed(2)));
    break;
  case 5:
    valorT = quantidade * 8.00;
    console.log("\nProduto: Refrigerante");
    console.log("\nValor total: " + brl.format(valorT.toFixed(2)));
    break;
  case 6:
    valorT = quantidade * 13.00;
    console.log("\nProduto: Suco de laranja");
    console.log("\nValor total: " + brl.format(valorT.toFixed(2)));
    break;

  default:
    console.log("Codigo invalido");
    
}