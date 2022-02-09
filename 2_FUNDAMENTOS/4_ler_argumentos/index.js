console.log(process.argv)

const data = process.argv.slice(2)
const name = data[0].split('=')[1]

console.log(name)