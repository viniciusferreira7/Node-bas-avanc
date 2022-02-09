const http = require('http')

const port = 5000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'text/html')

  res.end('<h1>Colocando HTML, pelo Node.js</h1>')
})

server.listen(port, () => {
  console.log('Servidor funcionando')
})