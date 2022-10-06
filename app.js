const socket = io('ws://localhost:8080')

socket.on('message', contenido => {
  const ele = document.createElement('li')
  ele.innerHTML = contenido

  document.querySelector('ul').appendChild(ele)
})

const button = document.querySelector('button')

button.onclick = () => {
  const texto = document.querySelector('input').value
  socket.emit('message', texto)
}
