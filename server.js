const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const activeUsers = new Map();

function formatTime(date) {
  return new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  socket.on('join', (username) => {
    const name = String(username || '').trim() || 'Anonymous';
    activeUsers.set(socket.id, name);

    io.emit('user-list', Array.from(activeUsers.values()));

    io.emit('chat-message', {
      user: 'System',
      text: `${name} joined the chat`,
      time: formatTime(new Date()),
    });
  });

  socket.on('send-message', (message) => {
    const text = String(message || '').trim();

    if (!text) {
      return;
    }

    const user = activeUsers.get(socket.id) || 'Anonymous';

    io.emit('chat-message', {
      user,
      text,
      time: formatTime(new Date()),
    });
  });

  socket.on('disconnect', () => {
    const username = activeUsers.get(socket.id);

    if (username) {
      io.emit('chat-message', {
        user: 'System',
        text: `${username} left the chat`,
        time: formatTime(new Date()),
      });

      activeUsers.delete(socket.id);
      io.emit('user-list', Array.from(activeUsers.values()));
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Real-Time Chat App running on http://localhost:${PORT}`);
});
