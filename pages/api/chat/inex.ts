// import { NextApiRequest, NextApiResponse } from 'next';
// import { Server, WebSocket } from 'ws';
// import { createServer, IncomingMessage } from 'http';

// // Create a WebSocket server
// const wsServer = new Server({ noServer: true });

// wsServer.on('connection', (socket: WebSocket, request: IncomingMessage) => {
//   console.log('Client connected');

//   // Listen to messages from the client
//   socket.on('message', (message: string) => {
//     console.log(`Received: ${message}`);
//     // Save the chat data to a Mongoose model (assuming you have a Mongoose model named Chat)
//     // const chat = new Chat({ message });
//     // chat.save();
//   });

//   socket.send('Hello from server!');

//   // Handle disconnection
//   socket.on('close', () => {
//     console.log('Client disconnected');
//   });
// });

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (!res.socket) {
//     return res.status(500).end('Server error');
//   }

//   // Upgrade HTTP request to WebSocket
//   wsServer.handleUpgrade(req, res.socket, Buffer.alloc(0), (socket) => {
//     wsServer.emit('connection', socket, req);
//   });

//   res.status(200).end();
// };

// // Create an HTTP server
// const httpServer = createServer((req, res) => {
//   res.writeHead(404);
//   res.end();
// });

// // Attach WebSocket server to the HTTP server
// httpServer.on('upgrade', (request: IncomingMessage, socket, head) => {
//   wsServer.handleUpgrade(request, socket, head, (socket) => {
//     wsServer.emit('connection', socket, request);
//   });
// });

// // Start the HTTP server on the specified port
// const PORT = process.env.PORT || 3001;
// httpServer.listen(PORT, () => {
//   console.log(`WebSocket server listening on port ${PORT}`);
// });
