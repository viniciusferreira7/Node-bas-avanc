const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(express.urlencoded({
  extended:true
}))

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.post('/books/insertBook', (req, res)=>{
  const title = req.body.title
  const pagesqty = req.body.pagesqty

  const sql = `INSERT INTO books (title, pagesqty) VALUES ('${title}','${pagesqty}')`

  conn.query(sql, (err)=> {
    if(err) console.log(err)
    res.redirect('/')
  })
})



app.get('/books', (req, res) => {

  const sql = 'SELECT * FROM books'

  conn.query(sql, (err, data)=> {
    const books = data

    if(err) console.log(err)
    console.log(books)
    res.render('books', {books})
  })
})

app.get('/books/:id', (req,res) => {
  const id = req.params.id


  const sql = `SELECT * FROM books WHERE id = ${id}`

  conn.query(sql, (err, data) => {
    if(err) {
      console.log(err)
      return
    }

    const book = data[0]

    res.render('book', {book} )
  })
})

app.get('/books/edit/:id', (req,res)=>{
  const id = req.params.id

  const sql = `SELECT * FROM books WHERE id = ${id}`

  conn.query(sql, (err, data) => {
    if(err){
      console.log(err)
      return
    }

    const book = data[0]

    console.log(data)

    res.render('editBook',{book})
  })
})

app.post('/books/updateBook', (req,res)=>{
  const id = req.body.id
  const title = req.body.title
  const pagesqty = req.body.pagesqty

  const sql = `UPDATE books SET title = '${title}', pagesqty = '${pagesqty}' WHERE id = ${id}`

  conn.query(sql, (err, data) => {
    if(err){
      console.log(err)
      return
    }

    res.redirect(`/books`)
  })
})

const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'FPeBbNYC*T2*',
  database:'testenode',
})

conn.connect((err) => {
  if(err) console.log(err)
  console.log('Conectando')
  app.listen(3000)
})