const request = require('request')

request('http://www.google.com', (err, res, body) => {
  console.log('erro', err)
  console.log('response', res && res.statusCode)
  console.log('body', body)
})