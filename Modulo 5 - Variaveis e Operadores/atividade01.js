const leia = require('readline-sync')

let salario
let abono
let novoSalario

salario = leia.questionFloat('Digite o Salario: ')
console.log(salario.toFixed(2))

abono = leia.questionFloat('Digite o Abono: ')
console.log(abono.toFixed(2))

novoSalario = salario + abono

console.log(novoSalario.toFixed(2))
