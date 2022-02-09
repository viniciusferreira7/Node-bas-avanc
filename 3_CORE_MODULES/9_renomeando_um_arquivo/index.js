const fs = require('fs')

fs.rename('mensagem.txt', 'readme.md', (err) => {
  if (err) throw Error(err)

  console.log('Renomeado')
})