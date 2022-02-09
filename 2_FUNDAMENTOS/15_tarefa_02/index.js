const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
  {
    name: 'nome',
    message: 'Qual é o seu nome?'
  },
  {
    name: 'idade',
    message: 'Qual sua idade?'
  }
])
  .then(answer => {
    const respostaNome = chalk.bgYellow.black(answer.nome)
    const respostaIdade = chalk.bgYellow.black(answer.idade)

    if (!answer.nome || !answer.idade) throw Error('As repostas são obrigatória')

    console.log(chalk.bgRed.white(`Seu nome é ${respostaNome} e você tem ${respostaIdade} anos`))


  })
  .catch(error => {
    console.log(`Erro: ${error}`)
  })