import Koa from 'koa';
import http from 'http';
import { Server } from 'socket.io';

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
    console.log(`[SOCKET] Chat.Message => ${data.user} / ${data.message}`);
    io.emit('chat.message', data);
  });

  socket.on('disconnect', () => {
    console.log('[IO] Disconnect => Disconnecting');
  });
});

server.listen(
  process.env.NEXT_PUBLIC_SERVER_PORT,
  process.env.NEXT_PUBLIC_SERVER_HOST,
  () => {
    console.log(
      `[HTTP] Listen => Server is running at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
    );
    console.log(`[HTTP] Listen => Press CTRL + C to stop the server`);
  },
);
