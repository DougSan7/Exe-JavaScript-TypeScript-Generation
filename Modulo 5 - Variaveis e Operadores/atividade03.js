const leia = require('readline-sync')

let salarioBruto
let adicNoturno
let he
let desconto
let salarioLiquido

salarioBruto = leia.questionFloat('Salário Bruto: ')
adicNoturno = leia.questionFloat('Adicional Noturno: ')
he = leia.questionFloat('Horas Extras: ')
desconto = leia.questionFloat('Descontos: ')

salarioLiquido = salarioBruto + adicNoturno + (he * 5) - desconto

console.log('Salário Líquido:' + salarioLiquido.toFixed(2))
