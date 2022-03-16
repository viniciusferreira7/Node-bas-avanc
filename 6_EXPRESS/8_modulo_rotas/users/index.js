const express = require('express')
const router = express.Router()


const path = require('path')
const basePath = path.join(__dirname, '../templetes')

router.use(express.urlencoded({
  extended: true
}))

router.use(express.json())

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res) => {
  const { name, age } = req.body
  console.log(`Seu nome da usuário e ${name} e sua idade e de ${age} anos`)
})

module.exports = router
