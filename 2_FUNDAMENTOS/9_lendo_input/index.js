const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Qual sua linguagem favorita: ', (language) => {
  if (language == 'javascript') console.log(`Muito bem por escolher ${language}`)
  else console.log(`tente de novo, mais dessa vez tente javascript, invés de ${language}`)

  readline.close()
})



