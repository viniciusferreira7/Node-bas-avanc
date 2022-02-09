const path = require('path')

const customPath = '/catalogo/relatorio/pecas/desenho.pdf'

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.resolve(customPath))
console.log(path.extname(customPath))