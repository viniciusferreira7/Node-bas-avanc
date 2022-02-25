// // módulos externos
// const inquirer = require('inquirer')
// const chalk = require('chalk')

// //módulos internos
// const fs = require('fs')

// console.log('iniciamos o projeto')

// operation()

// function operation() {
//   inquirer.prompt([{
//     type: 'list',
//     name: 'action',
//     message: 'O que você deseja fazer?',
//     choices: [
//       'Criar conta',
//       'Consultar saldo',
//       'Depositar',
//       'Sacar',
//       'Sair'
//     ]
//   }]).then((answer) => {
//     const action = answer['action']
//     console.log(action)
//     if (action === 'Criar conta') createAccount()
//     else if (action === 'Consultar saldo') {
//     } else if (action === 'Depositar') {
//       return deposit()
//     } else if (action === 'Sacar') {
//     } else if (action === 'Sair') {
//       console.log(chalk.bgBlue.black('Obrigado por usar o Accounts'))
//       process.exit()
//     }
//   }).catch(err => console.log(err))
// }

// //Create an account

// function createAccount() {
//   console.log(chalk.bgGreen.black('Parabéns'))
//   console.log(chalk.green('Defina as opções da sua conta a seguir'))

//   buildAccount()
// }

// function buildAccount() {
//   inquirer.prompt([{
//     name: 'accountName',
//     message: 'Digite o nome sa sua conta:'
//   }]).then((answer) => {
//     const accountName = answer['accountName']
//     console.info(accountName)

//     if (!fs.existsSync('accounts')) fs.mkdirSync('accounts')
//     if (fs.existsSync(`accounts/${accountName}.json`)) {
//       console.log(chalk.bgRed.black('Está conta já existe, escolha outro nome'))
//       buildAccount()
//       return
//     }

//     fs.writeFileSync(`accounts/${accountName}.json`, '{"balance":0}', (err) => console.log(err))
//     operation()

//   }).catch((err) => console.log(err))
// }

// //add an amount to user account

// function deposit() {

//   inquirer.prompt([{
//     name: 'accountName',
//     message: 'Qual e o nome da sua conta'
//   }])
//     .then(answer => {
//       const accountName = answer['accountName']

//       //verify if account exits
//       if (!checkAccount(accountName)) {
//         return deposit()
//       }

//     })
//     .catch(err => console.log(err))
// }

// function checkAccount(accountName) {

//   if (!fs.existsSync(`accounts/${accountName}.json`)) {
//     console.log(chalk.bgRed.black('Está conta não existe'))
//     return false
//   }

//   return true
// }


const inquirer = require('inquirer')
const chalk = require("chalk")

const fs = require('fs')

operation()

function operation() {
  inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer',
    choices: [
      'Criar conta', 'Consultar saldo', 'Depositar', 'Saldo', 'Sair'
    ]
  }])
    .then((answer) => {
      if (!createAccount()) fs.m
    })
    .catch((err) => console.log(err))
}

function createAccount() {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Qual e o nome sa sua conta ?'
  }])
    .then((answer) => {
      const accountName = answer['accountName']

        (!fs.existsSync('accounts')) return fs.mkdirSync('accounts')
    })
    .catch((err) => console.log(err))
}