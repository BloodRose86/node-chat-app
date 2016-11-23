const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Lasy Lusie',
        text: 'Hey. What is going on. Lasy',
        createdAt: 123123
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User was Disconnected from Server');
        });
});

// io.of('connection', (socket) =>{
//     console.log('Disconnected from Server');
// });

server.listen(port, () =>{
    console.log(`Server is up on port ${port}`);
});