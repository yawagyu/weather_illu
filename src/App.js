import React from 'react';
import './index.css';

//Gives a blank class to the body
function App() {
  return (
    <body class="">
    </body>
  );
}

//This function pulls the weather data from the weather API
function weatherBalloon( cityID ) {
  var key = 'b66159bf91b5fbe629c147082909b174';
   fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
  .then(function(resp) { return resp.json() }) //Converts data to json
  .then(function(data) {
    console.log(data);
    drawWeather(data);
  })
  .catch(function() {
  });
}

//This function chooses a city for the weather data
window.onload = function() {
      weatherBalloon( 2746301 ); //tilburg
    //  weatherBalloon( 5403676 ); //truckee
    //  weatherBalloon( 5983720 ); //Iqualit
    //  weatherBalloon( 5174095 ); //London
}

//This function checks the weather status and assignes a class to the html body, which is tied to a css class of the according weather type
function drawWeather( d ) {
  var main = d.weather[0].main;

  if( main.indexOf('Clear') > -1 ) {
  	document.body.className = 'clear';
  } else if( main.indexOf('Rain') > -1 ) {
  	document.body.className = 'rain';
  } else if( main.indexOf('Clouds') > -1 ) {
  	document.body.className = 'clouds';
  }
    else if( main.indexOf('Thunderstorm') > -1 ) {
    document.body.className = 'rain';
  }
    else if( main.indexOf('Drizzle') > -1 ) {
  	document.body.className = 'rain';
  }
    else if( main.indexOf('Snow') > -1 ) {
    document.body.className = 'snow';
  }
    else if( main.indexOf('Atmosphere') > -1 ) {
    document.body.className = 'clouds';
  }
}

export default App;
