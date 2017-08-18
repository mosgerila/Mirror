var weather = require('openweather-apis');

	weather.setLang('ro');
	// set city by name
	//weather.setCity('Chisinau');
 	// or set the coordinates (latitude,longitude)
	//weather.setCoordinate(50.0467656, 20.0048731);
	// or set city by ID (recommended by OpenWeatherMap)
	weather.setCityId(618426);

	// 'metric'  'internal'  'imperial'
 	weather.setUnits('metric');

	// check http://openweathermap.org/appid#get for get the APPID
	 weather.setAPPID('1516451ae3f1b857fcbfd10a0f4e7e48');

module.exports={	 
  getweather:function(data){
	var obj={};  
	weather.getTemperature(function(err, temp){
		if (err){
			console.log(err);
		}
		obj.temp=temp;
        //return data(temp);
		//console.log(temp);
		
		weather.getHumidity(function(err, hum){
		    if (err){
			    console.log(err);
			}
			obj.hum=hum;	
            //return data(obj);
        });
       
	});

	weather.getAllWeather(function(err, datas1){
		if (err){
			console.log(err);
		}
		obj.current=datas1;

		weather.getWeatherForecastForDays(3, function(err, datas2){
		    if (err){
			console.log(err);
		    }
		    obj.forecast=datas2;
			console.log(datas2.list[0]);
			
			return data(obj);
	    });
		//console.log(JSONObj);
	});

	

	// get the Description of the weather condition
	weather.getDescription(function(err, desc){
		console.log(desc);
	});

	weather.getWeatherForecastForDays(3, function(err, obj){
		console.log(obj.list[1].temp.day);
		
	});
  }
}	