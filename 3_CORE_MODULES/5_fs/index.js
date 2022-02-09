const http = require('http')
const fs = require('fs')


const port = 5000

const server = http.createServer((req, res) => {

  fs.readFile('mensagem.html', (err, data) => {
    fs.write(data)
    res.writeHead(200, { 'content-type': 'text/html' })

    return res.end()
  })
})

server.listen(port, () => {
  console.log('Servidor rodando')
})