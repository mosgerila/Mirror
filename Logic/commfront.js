var socket_io = require('socket.io');
var io = socket_io();
var maps = require ('../Logic/maps');
var calendar = require('../Logic/calendar');
var weather = require('../Logic/weather');

var mdb = {};


mdb.io=io;


calendare=function(socket){
  calendar.geteventts(function(eventts){
    var destination_adrr='';    
        if (!eventts.err) {
            socket.emit('events', eventts);
            console.log('Am trimis evenimentele la frontend')
            if (eventts.length == 0) {
            console.log('No upcoming events found.');
            } else {
                var i=0;
                while (eventts[i].start.dateTime == null && i<eventts.length) {i++}
                if (i==eventts.length) i=0;                

                destination_adrr=eventts[i].location;
                console.log(destination_adrr);
                maps.comutet(destination_adrr,function(time){
                    if (!time.err) { 
                        socket.emit('commute', time);
                        console.log(time)}
                    else {console.log(time.err)}

                })
            }    
        }    
        else {console.log(calendar.err)}
        
        
        setTimeout(calendare, 600000, socket);
    })  
}


io.on('connection', function (socket) {
    console.log('A user connected');
    
    console.log(calendar);
    
    calendare(socket);
   
      
   /* 
    maps.comutet(function(time){
        if (!time.err) { 
            socket.emit('commute', time);
            console.log(time)}
        else {console.log(time.err)}

    })
    */

    weather.getweather(function(data){
        //console.log('Temperature',data);
        socket.emit('weathercurrent', data);
    })
});

 
module.exports=mdb;