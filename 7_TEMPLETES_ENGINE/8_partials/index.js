const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
  const itens = ['item a', 'item b', 'item c']
  res.render('dashboard', { itens })
})

app.get('/blog', (req, res) => {
  const posts = [{
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Teste',
    comments: 4
  },
  {
    title: 'Aprender PHP',
    category: 'PHP',
    body: 'Teste',
    comments: 5
  },
  {
    title: 'Aprender Python',
    category: 'Python',
    body: 'Teste',
    comments: 3
  }]

  res.render('blog', { posts })
})


app.get('/', (req, res) => {
  const auth = true
  const user = {
    name: 'vinicius',
    age: '21'
  }

  res.render('home', { user, auth })
})

app.listen(3000, () => {
  console.log('Servidor rodando')
})