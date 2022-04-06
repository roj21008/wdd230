const requestURL = "https://roj21008.github.io/wdd230/project/templeInn/js/temples.json";
const grid = document.querySelector('.grid');
let dataRequest;

fetch(requestURL)
    .then(request => request.json())
    .then( ( data ) => {
        console.log(data);
        const temples = data.temples;
        dataRequest = temples;
        temples.forEach(displayTemple);
    });

function displayTemple(temples){
    let card = document.createElement('div');
    let h2Name =  document.createElement('h2');
    let logo =  document.createElement('img');
    let address = document.createElement('p');
    let tel = document.createElement('p');  
    let services = document.createElement('ul');
    let servicesLine = document.createElement('li');
    let milestones = document.createElement('ul');
    let milestonesLine = document.createElement('li');
    let temple_closure = document.createElement('ul');
    let closureLine = document.createElement('li');
    let session_schedule = document.createElement('ul');
    let sessionLine = document.createElement('li');


    
    
    h2Name.textContent = temples.name;
    //subtitle1 = '<h2> Address</h2>';
    address.textContent = temples.address;
    tel.textContent = temples.tel;
    servicesLine.innerHTML = temples.services[0];
    
    milestones.innerHTML = temples.milestones;
    temple_closure.innerHTML = temples.temple_closure;
    session_schedule.innerHTML = temples.session_schedule;

    
    

    logo.setAttribute('src',temples.image);
    logo.setAttribute('alt',`temple image`);
    logo.setAttribute('loading','lazy');
    logo.classList.add("temple-image");
    card.classList.add("card-info-temple");
    address.classList.add("address");
    tel.classList.add("telephone");
    

    card.appendChild(logo);
    card.appendChild(h2Name);
    //card.appendChild(subtitle1)
    card.appendChild(address)
    card.appendChild(tel)

    card.appendChild(services);
    
    card.appendChild(milestones);
    card.appendChild(temple_closure);
    card.appendChild(session_schedule);


    grid.appendChild(card);
    }
