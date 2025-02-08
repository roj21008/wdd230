const requestURL = "https://roj21008.github.io/wdd230/chamber/js/data.json";
const grid = document.querySelector('.grid');
let dataRequest;

fetch(requestURL)
    .then(request => request.json())
    .then( ( data ) => {
        console.log(data);
        const companies = data.companies;
        dataRequest = companies;
        companies.forEach(displayCompany);
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
    



document.getElementById('table').addEventListener('click', function () {
   document.getElementById('grid').classList.remove('selected-directory');
   document.getElementById('table').classList.add('selected-directory'); 
    
    table = `<table>
                <tbody>
                </tbody> 
            </table>`;

   grid.innerHTML = table;
    dataRequest.forEach((c) => {
        let tr = document.createElement('tr');
        let name = document.createElement('th');
        let address = document.createElement('th');
        let tel = document.createElement('th');
        let website = document.createElement('th');

        name.textContent = c.name;
        address.textContent = c.address;
        tel.textContent = c.tel;
        website.textContent = c.website;

        tr.appendChild(name);
        tr.appendChild(address);
        tr.appendChild(tel);
        tr.appendChild(website);
        
        document.querySelector('table ').appendChild(tr);
    });
    
});

document.getElementById('grid').addEventListener('click', function(){
    document.getElementById('grid').classList.add('selected-directory');
    document.getElementById('table').classList.remove('selected-directory');     
    
    
    grid.innerHTML = " ";
    dataRequest.forEach(displayCompany);
})