const leia = require('readline-sync')

let numero1
let numero2
let numero3
let numero4
let Diferenca

numero1 = leia.questionFloat('numero1: ')
numero2 = leia.questionFloat('numero2: ')
numero3 = leia.questionFloat('numero3: ')
numero4 = leia.questionFloat('numero4: ')

diferenca = (numero1 * numero2) - (numero3 * numero4)

console.log('Diferneça: ' + diferenca.toFixed(1))
