/*const apiURL = `api.openweathermap.org/data/2.5/weather?id=2172797&appid=a2f1a61501fd27fd28283d9ea3fb3a7a`;*/
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=Trujillo&units=imperial&APPID=a2f1a61501fd27fd28283d9ea3fb3a7a';      
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc; 
  });

    