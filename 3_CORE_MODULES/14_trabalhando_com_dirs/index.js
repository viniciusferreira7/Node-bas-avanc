const fs = require('fs')

if (!fs.existsSync('./minhaPasta')) {
  console.log('Não exite')
  fs.mkdirSync('minhaPasta')
} else {
  console.log('Exite')
}