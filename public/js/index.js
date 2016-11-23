var socket = io();

socket.on('connect', function () {
console.log('Connected to server');

socket.emit ('createMessage', {
        from: 'Andre',
        text: 'Hey. This is MEEEE',
    });
});

socket.on('disconnect', function () {
console.log('Disconnected from Server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});