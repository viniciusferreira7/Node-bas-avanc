const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')

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

 pool.query(sql, (err)=> {
    if(err) console.log(err)
    res.redirect('/')
  })
})



app.get('/books', (req, res) => {

  const sql = 'SELECT * FROM books'

 pool.query(sql, (err, data)=> {
    const books = data

    if(err) console.log(err)
    console.log(books)
    res.render('books', {books})
  })
})

app.get('/books/:id', (req,res) => {
  const id = req.params.id


  const sql = `SELECT * FROM books WHERE id = ${id}`

 pool.query(sql, (err, data) => {
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

 pool.query(sql, (err, data) => {
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

 pool.query(sql, (err, data) => {
    if(err){
      console.log(err)
      return
    }

    res.redirect(`/books`)
  })
})

app.post('/books/delete/:id', (req,res)=>{
  const id = req.params.id

  const sql = `DELETE FROM books WHERE id = ${id}`

 pool.query(sql, (err, data) => {
    if(err){
      console.log(err)
      return
    }

    res.redirect(`/books`)
  })
})

app.listen(3000)
