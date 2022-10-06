const http = require('http').createServer()

const io = require('socket.io')(http, {
  cors: { origin: '*' }
})

io.on('connection', (socket) => {
  console.log('Un nuevo usuario está conectado')

  socket.on('message', (mensaje) => {
    console.log(mensaje)
    io.emit('message', `${socket.id.substr(0, 4)} dice ${mensaje}`)
  })
})

http.listen(8080, () => {
  console.log('Corriendo en el puerto 8080')
})
