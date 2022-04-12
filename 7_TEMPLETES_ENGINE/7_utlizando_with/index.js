const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
  const itens = ['item a', 'item b', 'item c']
  res.render('dashboard', { itens })
})

app.get('/posts', (req, res) => {
  const posts = {
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Este artigo vai de ajudar a aprender Node.js...',
    comments: 4
  }
  res.render('blogPosts', { posts })
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