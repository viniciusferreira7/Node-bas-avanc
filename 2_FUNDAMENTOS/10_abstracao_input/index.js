const inquirer = require('inquirer')

inquirer.prompt([
  {
    name: 'p1',
    message: 'Qual é sua primeira nota?'
  },
  {
    name: 'p2',
    message: 'Qual é sua segunda nota?'
  }
])
  .then(answers => {
    console.log(answers)
    const media = parseInt(answers.p1) + parseInt(answers.p2) / 2

    console.log(media)
  })
  .catch(err => { console.log(err) })