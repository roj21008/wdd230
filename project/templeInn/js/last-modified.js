const lastmod = document.querySelector('#lastmodified')
lastmod.textContent = `Last Modified: ${document.lastModified}`;


/*HAM BUTTON*/ 

function toogleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toogleMenu

