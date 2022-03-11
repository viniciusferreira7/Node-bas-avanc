const express = require('express')
const app = express()

const path = require('path')
const pathBase = path.join(__dirname, 'templetes')

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, () => {
  console.log('Servidor rodando')
})