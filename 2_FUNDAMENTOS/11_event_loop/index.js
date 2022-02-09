function a() {
  console.log('Função a()')
}
function b() {
  console.log('Função b()')
}
function c() {
  console.log('Função c()')
  a()
  b()
}

c()

