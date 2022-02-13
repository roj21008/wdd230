
function wind(t,s){
return 35.74 + 0.6215*t - 35.75*s**(0.16) + 0.4275*t**(0.16)
}
let result = wind(91.4, 1.6);

document.getElementById("windchill").textContent = result;


