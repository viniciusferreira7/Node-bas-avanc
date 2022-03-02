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
      'Consultar saldo',
      'Sacar',
      'Sair'
    ]
  }]).then(answer => {
    const action = answer['action']

    if (action === 'Criar conta') {
      createAccount()
    }
    else if (action === "Depositar") {
      deposit()
    }
    else if (action === "Consultar saldo") {
      getAccountBalance()
    }
    else if (action === "Sacar") {
      widthDraw()
    }
    else if (action === "Sair") {
      console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
      process.exit()
    }
  })
    .catch(err => console.log(err))
}

// Create an Account
function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco'))
  console.log(chalk.green('Defina as opções da sua conta a seguir'))

  buildAccount()
}

function buildAccount() {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Digite o nome para sua conta:'
  }])
    .then(answer => {
      const accountName = answer['accountName']
      console.info(accountName)

      if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts')
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Está conta já existe, escolha outro nome'))
        buildAccount()
        return
      }

      fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', (e) => {
        console.log(e)
      })

      console.log(chalk.green('Parabéns sua conta foi criada'))
      operation()

    })
    .catch(e => {
      console.log(e)
    })
}

//add an amount to user account
function deposit() {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Em qual o nome da sua conta?'
  }])
    .then(answer => {
      const accountName = answer['accountName']

      //verify is account exits
      if (!checkAccount(accountName)) {
        return deposit()
      }

      inquirer.prompt([{
        name: 'amount',
        message: 'Quando você deseja depositar'
      }])
        .then(answer => {
          const amount = answer['amount']

          //add an amount
          addAmount(accountName, amount)
          operation()
        })
        .catch(e => {
          console.log(e)
        })

    })
    .catch(e => {
      console.log(e)
    })
}

function checkAccount(accountName) {

  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black('Está conta não existe, escolha outra conta'))
    return false
  }

  return true
}

function addAmount(accountName, amount) {

  const accountData = getAccount(accountName)

  if (!amount) {
    console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente'))
    return deposit()
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

  fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (e) => {
    console.log(e)
  })

  console.log(chalk.green(`Foi depositado o valor R$${amount}`))
}


function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: 'utf-8',
    flag: 'r'
  })

  return JSON.parse(accountJSON)
}

//show account balance

function getAccountBalance() {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Qual o nome da sua conta ?'
  }])
    .then(answer => {
      const accountName = answer['accountName']

      //verify if account exist
      if (!checkAccount(accountName)) {
        return getAccountBalance()
      }

      const accountData = getAccount(accountName)

      console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é de R$${accountData.balance}`))
      operation()
    })
    .catch(e => {
      console.log(e)
    })
}

//widthDraw an amount from user account
function widthDraw() {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Qual o nome da sua conta?'
  }])
    .then(answer => {
      const accountName = answer['accountName']

      if (!checkAccount(accountName)) {
        return widthDraw()
      }

      inquirer.prompt([{
        name: 'amount',
        message: 'Quando você deseja sacar?'
      }])
        .then(answer => {
          const amount = answer['amount']

          removeAmount(accountName, amount)
        })
        .catch(e => {
          console.log(e)
        })

    })
    .catch(e => {
      console.log(e)
    })
}

function removeAmount(accountName, amount) {

  const accountData = getAccount(accountName)

  if (!amount) {
    console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
    return widthDraw()
  }

  if (accountData.balance < amount) {
    console.log(chalk.bgRed.black('Valor indisponível'))
    return widthDraw()
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

  fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (e) => {
    console.log(e)
  })
  console.log(chalk.green.(`Foi realizado um sace de R$${accountData.balance} da sua conta`))
  operation()
}