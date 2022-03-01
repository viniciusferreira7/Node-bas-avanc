// módulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//módulos internos
const fs = require('fs')

operation()

function operation() {
  inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer ?',
    choices: [
      'Criar conta',
      'Depositar',
      'Sacar',
      'Sair'
    ]
  }]).then(answer => {
    console.log(answer['action'])
  })
    .catch(err => console.log(err))
}