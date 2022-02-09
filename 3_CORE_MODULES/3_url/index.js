const url = require('url')

const address = 'https://www.meusite.com/catalogo?produto=cadeira'

const parseUrl = new url.URL(address)

console.log(parseUrl.host)
console.log(parseUrl.pathname.substring(2))
console.log(parseUrl.searchParams)
console.log(parseUrl.searchParams.get('produto'))
console.log('ola')