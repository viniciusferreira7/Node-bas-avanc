const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/ps5', (req, res) => {
  res.render('ps5')
})


app.get('/samsung', (req, res) => {
  res.render('samsung')
})


app.get('/barra', (req, res) => {
  res.render('barra')
})

app.get('/', (req, res) => {
  const products = [
    {
      product: 'PS5',
      price: '4700',
    },
    {
      product: "Samsung Watch Class 47mm",
      price: '1750'
    },
    {
      product: 'barra fixa',
      price: "150"
    }
  ]
  res.render('home', { products })
})

app.listen(3000, () => {
  console.log('App rodando')
})