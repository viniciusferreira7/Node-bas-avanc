const express = require('express')
const app = express()

const port = 5000

const path = require('path')
const basePath = path.join(__dirname, 'templetes')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/home.html`)
})

app.listen(port, () => {
  console.log(`Servidor na porta ${port}`)
})