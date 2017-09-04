

module.exports={
   
    comutet: function(destination_addr,time){
      try{
     
      var google = require('googleapis');

      var googleMapsClient = require('@google/maps').createClient({
        key: 'AIzaSyBc3eeE2HI3L4GVn5FEHPmwg-721aJHhro'
      });  
         
      googleMapsClient.distanceMatrix({
  
        //destinations: 'Strada Iazului 4, Chisinau, Moldova',
        destinations: destination_addr,
        origins: 'Strada Columna 131, Chisinau, Moldova',
        language: 'ro',
        departure_time: 'now',
        //traffic_model: 'pessimistic'

      }, function(err, response) {
           if (!err) {
          //console.log('Timpul pina acasa:',response.json.rows[0].elements[0]);
           //exports.comute = response.json.rows[0].elements[0].duration.text;
           return time(response.json.rows[0].elements[0].duration_in_traffic.text); 
           }
           else return time(err); 
           console.log(err); 

        })
      }catch(err){console.log(err);} 
    }
    
}        