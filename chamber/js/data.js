const requestURL = "https://roj21008.github.io/wdd230/chamber/js/data.json";
const cards = document.querySelector('.cards');
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then( function(response){
        return response.json();
    })
    .then( function(jsonObject){
        
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
});


function displayProphets(prophet){
let card = document.createElement('section');
let h2 =  document.createElement('h2');
let portrait =  document.createElement('img');
let dateBirth = document.createElement('p');
let placeBirth = document.createElement('p');

h2.textContent = `${prophet.name} ${prophet.lastname}`;
dateBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

portrait.setAttribute('src',prophet.imageurl);
portrait.setAttribute('alt',`Portrait of ${prophet.name} - ${prophet.order}th Latter-day President`);
portrait.setAttribute('loading','lazy')

card.appendChild(h2);
card.appendChild(dateBirth)
card.appendChild(placeBirth)
card.appendChild(portrait);

cards.appendChild(card);
}





/*let dataRequest;


fetch(requestURL) 
    .then(request => request.json())
    .then( ( data ) => {
        const companies = data.companies;
        dataRequest = companies;
        companies.forEach(displayCompany);
    });


displayCompany = (company) => {
    // Create elements to add to the document
    let card = document.createElement("section");
    let logo = document.createElement("img");
    let name = document.createElement("h3");
    let address = document.createElement("p");
    let tel = document.createElement("p");
    let website = document.createElement("a");
    
    logo.setAttribute('src', company.image);
    logo.setAttribute('alt', `Logo of ${company.name}`);
    logo.setAttribute('loading', 'lazy');

    name.textContent = company.name;
    address.textContent = `Address: ${company.address}`;
    tel.textContent = `Telephone: ${(company.tel == null) ? 'Not available' : company.tel}`;
    website.setAttribute("href", company.website);
    website.setAttribute('target', "_blank");
    website.textContent = company.website;


    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(tel);
    card.appendChild(website);

    cards.appendChild(card);
}

document.getElementById('list').addEventListener('click', function () {
    document.getElementById('list').classList.add('selected');
    document.getElementById('grid').classList.remove('selected');
    cards.classList.add('list')
    table = `<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Telephone</th>
                <th>website</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>`;

    cards.innerHTML = table;
    dataRequest.forEach((c) => {
        let tr = document.createElement('tr');
        let name = document.createElement('th');
        let address = document.createElement('th');
        let tel = document.createElement('th');
        let website = document.createElement('th');

        name.textContent = c.name;
        address.textContent = c.address;
        tel.textContent = (c.tel == null) ? 'Not available' : c.tel;
        website.textContent = c.website;

        tr.appendChild(name);
        tr.appendChild(address);
        tr.appendChild(tel);
        tr.appendChild(website);

        document.querySelector('table > tbody').appendChild(tr);
    });
    
});

document.getElementById('grid').addEventListener('click', function(){
    document.getElementById('grid').classList.add('selected');
    document.getElementById('list').classList.remove('selected');
    cards.classList.remove('list');
    cards.innerHTML="";
    dataRequest.forEach(displayCompany);
})*/
