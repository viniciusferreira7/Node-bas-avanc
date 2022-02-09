const fs = require('fs')

const newFile = 'newFile.txt'

if (fs.existsSync(newFile)) {
  fs.stat(newFile, (err, stats) => {
    if (err) throw Error(err)

    console.log(stats.isDirectory())
    console.log(stats.isFile())
    console.log(stats.isSymbolicLink())
    console.log(stats.size)
    console.log(stats.ctime)
  })
} else {
  fs.writeFile(newFile, 'gfgdfgdfgdfgdfgfdgdfggdfgdfgdgdgdfg', (err, data) => {
    console.log(data)
  })
}