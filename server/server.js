const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMsg} = require('./utils/msg');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New client connected.');

    socket.emit('newMessage', generateMsg('admin', 'Welcome to the chat app!'));

    socket.broadcast.emit('newMessage', generateMsg('admin', 'New user joined!'));

    socket.on('createMessage', (msg) => {
        console.log('Message received:', msg);
        io.emit('newMessage', generateMsg(msg.from, msg.text));
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected.');
    });
});

server.listen(port, () => {
    console.log(`Server up, listening on port ${port}.`);
});