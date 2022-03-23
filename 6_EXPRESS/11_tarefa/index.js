const express = require('express')
const app = express()

const port = 5000

const path = require('path')
const basePath = path.join(__dirname, 'templetes')
const users = require('./users')

app.use('/users', users)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/home.html`)
})

app.use((req, res, next) => {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`Servidor na porta ${port}`)
})