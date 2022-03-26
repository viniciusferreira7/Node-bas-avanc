// const express = require('express')
// const exphbs = require('express-handlebars')
// const app = express()

// app.engine('handlebars', exphbs.engine())
// app.set('view engine', 'handlebars')

// app.get('/', (req, res) => {
//   res.render('home', { layout: false })
// })

// app.listen(3000, () => {
//   console.log('Servindo rodando')
// })

const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  const user = {
    name: 'Vinicius',
    surname: 'Ferreira'
  }
  res.render('home', { user })
})

app.listen(3000, () => {
  console.log('Servidor rodando')
})