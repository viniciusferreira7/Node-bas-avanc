const fs = require('fs')

console.log('Inicio')

fs.writeFile('arquivo.txt', 'Teste assíncrono', () => {
  setTimeout(() => {
    console.log('Arquivo criado')
  }, 2000);
})

console.log('Fim')