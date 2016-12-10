var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Andre',
    text: 'Yup that went through'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from Server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
