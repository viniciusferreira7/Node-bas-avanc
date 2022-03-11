const express = require('express')
const app = express()

const port = 3000

const path = require('path')
const pathBase = path.join(__dirname, 'templetes')

const checkAuth = (req, res, next) => {
  req.authStatus = false

  if (req.authStatus) {
    console.log('Está logado pode continuar')
    next()
  } else {
    console.log('Não está logado, faça o login para continuar')
    next()
  }
}


app.use(checkAuth)

app.get('/', (req, res) => {
  res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, () => {
  console.log('Servidor rodando')
})