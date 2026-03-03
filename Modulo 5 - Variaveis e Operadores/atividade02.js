const leia = require('readline-sync')

let Nota1
let Nota2
let Nota3
let Nota4
let media

Nota1 = leia.questionFloat('Nota 1: ')
Nota2 = leia.questionFloat('Nota 2: ')
Nota3 = leia.questionFloat('Nota 3: ')
Nota4 = leia.questionFloat('Nota 4: ')

media = (Nota1 + Nota2 + Nota3 + Nota4) / 4

console.log('Média final: ' + media.toFixed(1))
