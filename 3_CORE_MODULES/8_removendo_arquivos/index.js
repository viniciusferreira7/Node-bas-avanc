const fs = require('fs')

fs.unlink('arquivo.txt', (err) => {
  if (err) throw Error(err)

  console.log('Arquivo apagado')
})