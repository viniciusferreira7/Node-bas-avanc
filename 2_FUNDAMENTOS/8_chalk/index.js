const chalk = require('chalk')

const nota = 9

const res = nota >= 5 ? chalk.bgBlue.black('Parabens') : chalk.bgRed.yellow('Reprovado')

console.log(res)