const fs = require('fs')

console.log('inicio')

fs.writeFileSync('arquivo.txt', 'Teste síncrono')

console.log('Fim')
