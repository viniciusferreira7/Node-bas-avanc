const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/', (req, res) => {
  const auth = true
  const user = {
    name: 'vinicius',
    age: '21'
  }
  const list = [1, 2, 3, 4, 5]

  res.render('home', { user, auth, list })
})

app.listen(3000, () => {
  console.log('Servidor rodando')
})