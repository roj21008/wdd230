const lastmod = document.querySelector('#lastmodified')
lastmod.textContent = `Date last modified: ${document.lastModified}`;

function toogleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toogleMenu