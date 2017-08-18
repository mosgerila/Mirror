

module.exports={
   
    comutet: function(time){
      try{
     
      var google = require('googleapis');

      var googleMapsClient = require('@google/maps').createClient({
        key: 'AIzaSyBc3eeE2HI3L4GVn5FEHPmwg-721aJHhro'
      });  
         
      googleMapsClient.distanceMatrix({
  
        destinations: 'Strada Iazului 4, Chisinau, Moldova',
        origins: 'Strada Columna 131, Chisinau, Moldova',

      }, function(err, response) {
           if (!err) {
           //console.log('Timpul pina acasa:',response.json.rows[0].elements[0].duration.text);
           //exports.comute = response.json.rows[0].elements[0].duration.text;
           return time(response.json.rows[0].elements[0].duration.text); 
           }
           else return time(err); 
           console.log(err); 

        })
      }catch(err){console.log(err);}
    }
    
}        