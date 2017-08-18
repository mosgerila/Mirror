var socket_io = require('socket.io');
var io = socket_io();
var maps = require ('../Logic/maps');
var calendar = require('../Logic/calendar');
var weather = require('../Logic/weather');

var mdb = {};


mdb.io=io;





io.on('connection', function (socket) {
    console.log('A user connected');
    
    console.log(calendar);
    
    calendar.geteventts(function(eventts){
        if (!eventts.err) {
            socket.emit('events', eventts);
            console.log('Am trimis evenimentele la frontend')}
        else {console.log(calendar.err)}

    })

    
    maps.comutet(function(time){
        if (!time.err) {
            socket.emit('commute', time);
            console.log(time)}
        else {console.log(time.err)}

    })

    weather.getweather(function(data){
        console.log('Temperature',data);
        socket.emit('weathercurrent', data);
    })
});

 
module.exports=mdb;