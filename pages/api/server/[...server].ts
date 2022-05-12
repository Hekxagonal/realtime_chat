export {};

// import { Server } from 'socket.io';

// const SocketHandler = (req, res) => {
//   if (res.socket.server.io) {
//     console.log('Server is already running');
//   } else {
//     console.log(`[HTTP] Listen => Server is running`);
//     console.log(`[HTTP] Listen => Press CTRL + C to stop the server`);
//     const io = new Server(res.socket.server);
//     res.socket.server.io = io;

//     io.on('connection', (socket) => {
//       console.log('[IO] Connection => Connected');

//       //socket.emit('session', { userId: socket.userId, username: socket.username });

//       socket.on('chat.message', (data) => {
//         console.log(
//           `[SOCKET] Chat.Message => ${data.message} (by ${data.user})`,
//         );
//         io.emit('chat.message', data);
//       });

//       socket.on('disconnect', () => {
//         console.log('[IO] Disconnect => Disconnecting');
//       });
//     });
//   }

//   res.end();
// };

// export default SocketHandler;
