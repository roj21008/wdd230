const requestURL = "https://roj21008.github.io/wdd230/project/practica/temples.json";
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
    let services = document.createElement('p');  
    let milestones = document.createElement('p');  
    let closures = document.createElement('p');
    let session = document.createElement('p');

    h2Name.textContent = temples.name[0];
    card.appendChild(h2Name)



/*
    let services = document.createElement('h3');
    let servicesLine0 = document.createElement('li');
    let servicesLine1 = document.createElement('li');
    let servicesLine2 = document.createElement('li');
    let servicesLine3 = document.createElement('li');

    let milestones = document.createElement('h3');
    let milestonesLine0 = document.createElement('li');
    let milestonesLine1 = document.createElement('li');
    let milestonesLine2 = document.createElement('li');
    let milestonesLine3 = document.createElement('li');
    let milestonesLine4 = document.createElement('li');

    let closures = document.createElement('h3');
    let closuresLine0 = document.createElement('li');
    let closuresLine1 = document.createElement('li');
    let closuresLine2 = document.createElement('li');
    let closuresLine3 = document.createElement('li');
    let closuresLine4 = document.createElement('li');
    let closuresLine5 = document.createElement('li');

    
    let session = document.createElement('h3');
    let sessionLine0 = document.createElement('li');
    let sessionLine1 = document.createElement('li');
    let sessionLine2 = document.createElement('li');
    let sessionLine3 = document.createElement('li');


    
    
    h2Name.textContent = temples.name;
    address.textContent = temples.address;
    tel.textContent = temples.tel;
    
    services.textContent = 'Services'
    servicesLine0.innerHTML = temples.services[0];
    servicesLine1.innerHTML = temples.services[1];
    servicesLine2.innerHTML = temples.services[2];
    servicesLine3.innerHTML = temples.services[3];
    
    milestones.textContent = 'Milestones'
    milestonesLine0.innerHTML = temples.milestones[0];
    milestonesLine1.innerHTML = temples.milestones[1];
    milestonesLine2.innerHTML = temples.milestones[2];
    milestonesLine3.innerHTML = temples.milestones[3];
    milestonesLine4.innerHTML = temples.milestones[4];
    
    closures.textContent = 'Temple Closures'
    closuresLine0.innerHTML = temples.temple_closures[0];
    closuresLine1.innerHTML = temples.temple_closures[1];
    closuresLine2.innerHTML = temples.temple_closures[2];
    closuresLine3.innerHTML = temples.temple_closures[3];  
    closuresLine4.innerHTML = temples.temple_closures[4];
    closuresLine5.innerHTML = temples.temple_closures[5];

    session.textContent = 'Session Schedule'
    sessionLine0.innerHTML = temples.session_schedule[0];
    sessionLine1.innerHTML = temples.session_schedule[1];
    sessionLine2.innerHTML = temples.session_schedule[2];
    sessionLine3.innerHTML = temples.session_schedule[3];  

    
    

    logo.setAttribute('src',temples.image);
    logo.setAttribute('alt',`temple image`);
    logo.setAttribute('loading','lazy');
    logo.classList.add("temple-image");
    card.classList.add("card-info-temple");
    address.classList.add("address");
    tel.classList.add("telephone");
    services.classList.add("services-title")

    card.appendChild(logo);
    card.appendChild(h2Name);
    card.appendChild(address)
    card.appendChild(tel)

    card.appendChild(services)
    card.appendChild(servicesLine0)
    card.appendChild(servicesLine1)
    card.appendChild(servicesLine2)
    card.appendChild(servicesLine3)

    card.appendChild(milestones)
    card.appendChild(milestonesLine0)
    card.appendChild(milestonesLine1)
    card.appendChild(milestonesLine2)
    card.appendChild(milestonesLine3)

    card.appendChild(closures)
    card.appendChild(closuresLine0)
    card.appendChild(closuresLine1)
    card.appendChild(closuresLine2)
    card.appendChild(closuresLine3)
    card.appendChild(closuresLine4)
    card.appendChild(closuresLine5)
 
    card.appendChild(session)
    card.appendChild(sessionLine0)
    card.appendChild(sessionLine1)
    card.appendChild(sessionLine2)
    card.appendChild(sessionLine3)*/
    
    
    


    grid.appendChild(card);
    }
