var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    // socket.emit('createEmail', {
    //     to: 'bob@example.com',
    //     text: 'red sun'
    // });
    socket.emit('createMessage', {
        text: 'sun bathed wings'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function (msg) {
    console.log('Message:', msg);
});