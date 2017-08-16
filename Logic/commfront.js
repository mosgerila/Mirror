var socket_io = require('socket.io');
var io = socket_io();
var calendar = require('../Logic/calendar');
var mdb = {};


mdb.io=io;

module.exports=mdb;



io.on('connection', function (socket) {
    console.log('A user connected');
    console.log(calendar);
    var obj = { time: "23", val: "BOK" };
    //obj.time = 
    //console.log('Calendar length: ', calendar.events.length)
    socket.emit('events', calendar.events);


});