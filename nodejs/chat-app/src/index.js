const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.port || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

let count = 0

//server (emit) -> client (receive) countUpdated
//client (emit) -> server (receive) increment

io.on('connection', (socket) => {
  console.log('New webSocket conection')

  socket.emit('countUpdated', count)

  socket.on('increment', () => {
    count++

   //socket.emit('countUpdated', count) //emit massege to current connection
  io.emit('countUpdated', count) //emit massege to all active connections
  })
})

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})