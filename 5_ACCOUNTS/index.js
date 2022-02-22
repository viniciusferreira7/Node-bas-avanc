// módulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//módulos internos
const fs = require('fs')

console.log('iniciamos o projeto')

operation()

function operation() {
  inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer?',
    choices: [
      'Criar conta',
      'Consultar saldo',
      'Depositar',
      'Sacar',
      'Sair'
    ]
  }]).then((answer) => {
    const action = answer['action']
    console.log(action)
    if (action == 'Criar conta') createAccount()
  }).catch(err => console.log(err))
}

//Create an account

function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns'))
  console.log(chalk.green('Defina as opções da sua conta a seguir'))

  buildAccount()
}

function buildAccount() {
  inquirer.prompt([{
    name: 'Account name',
    message: 'Digite o nome sa sua conta:'
  }]).then((answer) => {
    const account = answer['accountName']
    console.info(account)

    if (!fs.existsSync('account')) fs.mkdirSync('account')
    if (!fs.existsSync(`account/${accountName}.json`)) console.log(chalk.bgRed.black('Está conta já existe, escolha outra nome'))

  }).catch((err) => console.log(err))
}