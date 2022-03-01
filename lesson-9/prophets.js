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





