const requestURL = "https://roj21008.github.io/wdd230/chamber/js/data.json";
const grid = document.querySelector('.grid');
const tables = document.querySelector('.table');
let dataRequest;
let gridBtn = document.getElementById('grid').classList.add('selected');
let tableBtn = document.getElementById('table').classList.add('selected');
fetch(requestURL)
    .then((request) => request.json())
    .then( ( data ) => {
        console.log(data)
        const companies = data.companies;
        dataRequest = companies;
        /*companies.forEach(displayCompany)
        companies.forEach(displayTable);*/

    });



function displayCompany(company){
    let card = document.createElement('section');
    let h2Name =  document.createElement('h2');
    let logo =  document.createElement('img');
    let Address = document.createElement('p');
    let Telephone = document.createElement('p');  
    let Website = document.createElement('a');

    
    h2Name.textContent = company.name;
    Address.textContent = company.address;
    Telephone.textContent = company.tel;
    Website.innerHTML = company.website;

     
    logo.setAttribute('src',company.image);
    logo.setAttribute('alt',`Company Logo`);
    logo.setAttribute('loading','lazy');
    logo.classList.add("logo_img-directory");
    card.classList.add("section_company");
    Address.classList.add("address");
    Telephone.classList.add("telephone");
    Website.classList.add("website");

    card.appendChild(logo);
    card.appendChild(h2Name);
    card.appendChild(Address)
    card.appendChild(Telephone)
    card.appendChild(Website);
    
    grid.appendChild(card);


}
    
function displayTable(company){
    
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdAddress = document.createElement('td');
    let tdTel = document.createElement('td');
    let tdWebsite = document.createElement('td');
    
    tdName.textContent = company.name;
    tdAddress.textContent = company.address;
    tdTel.textContent = company.tel;
    tdWebsite.textContent = company.website;
    
    
    tr.appendChild(tdName);
    tr.appendChild(tdAddress);
    tr.appendChild(tdTel)
    tr.appendChild(tdWebsite)
    
    tables.appendChild(tr);


}

gridBtn.addEventListener('click',function(){
grid.classList.remove('ocultar');
tables.classList.add('ocultar');
companies.forEach(displayCompany);
});

tableBtn.addEventListener('click',function(){
    grid.classList.add('ocultar');
    tables.classList.remove('ocultar');
    companies.forEach(displayTable);
    });