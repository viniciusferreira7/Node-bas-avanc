const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit:10,
  host:'localhost',
  user:'root',
  password:'FPeBbNYC*T2*',
  database:'testenode',
})

module.exports = pool