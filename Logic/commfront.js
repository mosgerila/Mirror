var socket_io = require('socket.io');
var io = socket_io();

var mdb = {};

mdb.io=io;

module.exports=mdb;

io.on('connection', function (socket) {
    console.log('A user connected');
    
});