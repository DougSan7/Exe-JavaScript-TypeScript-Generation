const leia = require('readline-sync')

let salarioBruto
let adicNoturno
let HE
let Desconto
let salarioLiquido

salarioBruto = leia.questionFloat('Salário Bruto: ')
adicNoturno = leia.questionFloat('Adicional Noturno: ')
HE = leia.questionFloat('Horas Extras: ')
Desconto = leia.questionFloat('Descontos: ')

salarioLiquido = salarioBruto + adicNoturno + (HE * 5) - Desconto

console.log('Salário Líquido:' + salarioLiquido.toFixed(2))
