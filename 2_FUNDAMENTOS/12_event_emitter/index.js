const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
  console.log('Durante')
})

console.log('Antes')
console.log('Antes')
console.log('Antes')
console.log('Antes')

eventEmitter.emit('start')

console.log('depois')
console.log('depois')
console.log('depois')
console.log('depois')