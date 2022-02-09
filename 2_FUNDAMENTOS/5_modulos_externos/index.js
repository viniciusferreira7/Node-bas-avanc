const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
const name = args['name']
const profession = args['profession']
console.log(`His name is ${name}  his profession is ${profession}`)