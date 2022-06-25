const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', 'FPeBbNYC*T2*', {
  host:'localhost',
  dialect:'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com sucesso com o sequelize')
} catch (error) {
  console.log('Ocorreu um erro', error)
}

module.exports = sequelize