import leia from 'readline-sync'

let primeiro;
let segundo;
let terceiro;

primeiro = leia.question("Primeira caracteristica: ");
segundo = leia.question("\nSegunda caracteristica: ");
terceiro = leia.question("\nTerceira caracteristica: ");

if (primeiro == "vertebrado"){
  if(segundo == "ave" && terceiro == "carnivoro"){
   console.log("Águia");
  } else if(segundo == "ave" && terceiro == "onivoro"){
    console.log("Pomba");
  }else if(segundo == "mamifero" && terceiro == "onivoro"){
    console.log("Homem");
  }else if(segundo == "mamifero" && terceiro == "herbivoro"){
    console.log("Vaca");
  }
}
if (primeiro == "invertebrado"){
  if(segundo == "inseto" && terceiro == "hematofago"){
   console.log("Pulga");
  } else if(segundo == "inseto" && terceiro == "herbivoro"){
    console.log("Lagarta");
  }else if(segundo == "anelideo" && terceiro == "hematofago"){
    console.log("Sanguessuga");
  }else if(segundo == "anelideo" && terceiro == "onivoro"){
    console.log("Minhoca");
  }
}