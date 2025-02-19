const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const searchRoutes = require('./routes/searchRoutes');

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', recipeRoutes);
app.use('/api', searchRoutes);

app.get('/', (req, res) => {
  res.send('API di Ricette funzionante!');
});

io.on('connection', (socket) => {
  console.log('Un utente si è connesso');

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Un utente si è disconnesso');
  });
});

server.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
