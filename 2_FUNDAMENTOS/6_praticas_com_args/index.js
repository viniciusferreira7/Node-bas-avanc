const minimist = require('minimist')

//externo

const arg = minimist(process.argv.slice(2))

//interno

const soma = require('./soma').soma

const a = parseInt(arg['a'])
const b = parseInt(arg['b'])

soma(a, b)
