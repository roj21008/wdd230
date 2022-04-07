const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=-8.116&lon=-79.03&exclude=minutely&units=imperial&appid=a2f1a61501fd27fd28283d9ea3fb3a7a';      
fetch(apiURL)     
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //PRINCIPAL CARD
      document.querySelector('#current-temp').textContent = jsObject.current.temp;
      const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
      const desc = jsObject.current.weather[0].description;
      const humidity = jsObject.current.humidity;
      document.querySelector('#icon-src').textContent = iconsrc;
      document.querySelector('#weathericon').setAttribute('src', iconsrc);
      document.querySelector('#weathericon').setAttribute('alt', desc);
      document.querySelector('.condition-weather').textContent = desc; 
      document.querySelector('.humidity').textContent = humidity; 
      
    //DAY 0 

    document.querySelector('#current-temp-0-min').textContent = jsObject.daily[0].temp.min;
    document.querySelector('#current-temp-0-max').textContent = jsObject.daily[0].temp.max;

    //DAY 1

    document.querySelector('#current-temp-1-min').textContent = jsObject.daily[1].temp.min;
    document.querySelector('#current-temp-1-max').textContent = jsObject.daily[1].temp.max;

    //DAY 2

    document.querySelector('#current-temp-2-min').textContent = jsObject.daily[2].temp.min;
    document.querySelector('#current-temp-2-max').textContent = jsObject.daily[2].temp.max;
   
   
    
    


  });  
 