//I assign the value new date to the variable latestDate
var latestDate = new Date(document.lastModified);

var lastDate = latestDate.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
var lastTime = latestDate.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
var dateUpdate = `Last Update: ${lastDate} ${lastTime}`;

document.getElementById("lastModified").innerHTML = dateUpdate; 


