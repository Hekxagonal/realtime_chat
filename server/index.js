const dotenv = require('dotenv');
dotenv.config();
const Koa = require('koa');
const http = require('http');
const { Server } = require('socket.io');

const app = new Koa();
const server = http.createServer(app.callback());
const io = new Server(server, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

// io.use((socket, next) => {
//   const username = socket.handshake.auth.username;
//   if (!username) return next(new Error('Invalid username'));

//   socket.username = username;
//   socket.userId = id();

//   next();
// });

io.on('connection', (socket) => {
  console.log('[IO] Connection => Connected');

  //socket.emit('session', { userId: socket.userId, username: socket.username });

  socket.on('chat.message', (data) => {
    console.log(`[SOCKET] Chat.Message => ${data.message} (by ${data.user})`);
    io.emit('chat.message', data);
  });

  socket.on('disconnect', () => {
    console.log('[IO] Disconnect => Disconnecting');
  });
});

server.listen(8080, 'localhost', () => {
  console.log(`[HTTP] Listen => Server is running at ${8080}:${'localhost'}`);
  console.log(`[HTTP] Listen => Press CTRL + C to stop the server`);
});
