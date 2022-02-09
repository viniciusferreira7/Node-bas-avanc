const path = require('path')

//path absolute

console.log(path.resolve('mensagem.txt'))

//formar path

const midFolter = 'relatorio'
const fileName = 'catalogo'

const finalPath = 'n.txt'

console.log(path.join('/', midFolter, fileName, finalPath))