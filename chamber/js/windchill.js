
function wind(t,s){

return 35.74 + 0.6215*t - 35.75*(s**(0.16)) + 0.4275*t**(0.16)}
/*
function showWind(){

let weather = document.parseFloat(getElementsById("weather").value);
let speed = document.parseFloat(getElementById("speed").value);
let result = wind(weather,speed);*/


document.getElementById("windchill").textContent = wind(73,13).toFixed(2);  


