const express = require('express')
const app = express()

const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templetes')

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/usersForm.html`)
})

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())

app.post('/users/save', (req, res) => {
  const { name, age } = req.body
  console.log(`Seu nome de usuário e ${name} e você tem ${age} anos`)
})

app.get('/users/:id', (req, res) => {
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

