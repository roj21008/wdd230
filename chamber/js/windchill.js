
let temperatureInt = ""
let wSpeedInt = ""
let temperature = document.getElementById("temperature").textContent;
let windSpeed = document.getElementById("speed").textContent;

wSpeedInt = parseFloat(windSpeed);
temperatureInt = parseInt(temperature,10)

function windChillCalculator(t,s){

if (t <= 10 && s >= 4.8){
    let wind = 35.74 + 0.6215*t - 35.75*(s**(0.16)) + 0.4275*t**(0.16);
    return wind
    
}else{
    return "N/A"
}
}

document.getElementById("windchill").innerHTML = windChillCalculator(temperature,wSpeedInt).toFixed(2);  



