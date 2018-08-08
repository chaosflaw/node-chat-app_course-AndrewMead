const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New client connected.');

    socket.emit('newMessage', {
        from: 'admin',
        text: 'Welcome to the chat!'
    });

    socket.broadcast.emit('newMessage', {
        from: 'admin',
        text: 'New user joined!'
    });

    socket.on('createMessage', (msg) => {
        console.log('Message received:', msg);
        io.emit('newMessage', {
            from: msg.from,
            text: msg.text,
            createdAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', {
        //     from: msg.from,
        //     text: msg.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected.');
    });
});

server.listen(port, () => {
    console.log(`Server up, listening on port ${port}.`);
});