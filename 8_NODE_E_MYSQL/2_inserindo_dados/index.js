const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(express.urlencoded({
  extended:true,
}))

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))


app.get('/', (req,res) =>{
  res.render('home')
})

app.post('/books/insertBook', (req,res) => {

  const title = req.body.title
  const pagesqty = req.body.pagesqty

  const sql = `INSERT INTO books (title, pagesqty) VALUES ('${title}', '${pagesqty}')`

  conn.query(sql, (err)=> {
    if(err) console.log(err)
    console.log('Dados inseridos')
    res.redirect('/')
   })
  
})

const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'FPeBbNYC*T2*',
  database:'nodemysql'
})

conn.connect((err)=> {
  if(err) console.log(err)
  console.log('Conectado')
  app.listen(3000)
})