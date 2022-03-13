const express = require('express')
const app = express()

const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templetes')

app.get('/user/:id', (req, res) => {
  const id = req.params.id

  console.log(`Buscando o usuário: ${id}`)

  res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log('Servidor rodando')
})