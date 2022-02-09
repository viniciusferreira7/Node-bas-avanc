const http = require('http')


const port = 5000

const server = http.createServer((req, res) => {

  const infoUrl = require('url').parse(req.url, true)
  const name = infoUrl.query.name

  res.statusCode = 200
  res.setHeader('content-type', 'text/html')

  if (!name) {
    res.end(`
      <h1>Digite seu nome:</h1>
      <form method='get'>
        <input type='text' name='name'/>
        <input type='submit' value='Enviar'/>
      </form>
    `)
  } else res.end(`Bem vindo ${name}`)

})

server.listen(port, () => {
  console.log('Servidor rodando')
})