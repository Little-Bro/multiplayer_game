const socket = require('socket.io');
const express = require('express');
const app = express();


const port = 3000;
const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
app.use(express.static('public'));

const io = socket(server);

io.on('connection', (socket) => {
  console.log(`new connection : ${socket.id}`);

  socket.on('player', (data) => {
    socket.broadcast.emit('player', data);
  })

  socket.on('bullet', (data) => {
    socket.broadcast.emit('bullet', data);
  })
})