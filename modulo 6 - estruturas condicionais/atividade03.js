import leia from 'readline-sync'

let nome;
let idade;
let doador;

nome = leia.question("Digite o Nome do doador: ");
idade = leia.questionInt("Digite a Idade do doador:");
doador = leia.question("Primeira doacao de sangue? ");

if(doador == "true"){
  doador = true;
} else {
  doador = false;
}

if (idade >= 18 && idade <= 60 && doador === true){
  console.log(`${nome} está apto para doar sangue!`); 

} else if(idade >= 60 && idade <= 69 && doador === false){
  console.log(`${nome} está apto para doar sangue!`);
}else{
    console.log(`${nome} não está apto para doar sangue!`);
}