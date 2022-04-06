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
    let addressSubt = document.createElement('h3');
    let telSubt = document.createElement('h3');

    let services = document.createElement('h3');
    let servicesList = document.createElement('ul');
    let servicesLine0 = document.createElement('li');
    let servicesLine1 = document.createElement('li');
    let servicesLine2 = document.createElement('li');
    let servicesLine3 = document.createElement('li');

    let milestones = document.createElement('h3');
    let milestonesList = document.createElement('ul');
    let milestonesLine0 = document.createElement('li');
    let milestonesLine1 = document.createElement('li');
    let milestonesLine2 = document.createElement('li');
   

    let closures = document.createElement('h3');
    let closuresList = document.createElement('ul');
    let closuresLine0 = document.createElement('li');
    let closuresLine1 = document.createElement('li');
    let closuresLine2 = document.createElement('li');
    let closuresLine3 = document.createElement('li');
    

    
    let session = document.createElement('h3');
    let sessionList = document.createElement('ul');
    let sessionLine0 = document.createElement('li');
    let sessionLine1 = document.createElement('li');
    let sessionLine2 = document.createElement('li');
    let sessionLine3 = document.createElement('li');


    
    
    h2Name.textContent = temples.name;
    addressSubt.textContent = 'Address'
    address.textContent = temples.address;
    telSubt.textContent = 'Telephone'
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
    
    
    closures.textContent = 'Temple Closures'
    closuresLine0.innerHTML = temples.temple_closures[0];
    closuresLine1.innerHTML = temples.temple_closures[1];
    closuresLine2.innerHTML = temples.temple_closures[2];
    closuresLine3.innerHTML = temples.temple_closures[3];  
    

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
    card.appendChild(addressSubt);
    card.appendChild(address)
    card.appendChild(telSubt);
    card.appendChild(tel)

    card.appendChild(services)
    servicesList.appendChild(servicesLine0)
    servicesList.appendChild(servicesLine1)
    servicesList.appendChild(servicesLine2)
    servicesList.appendChild(servicesLine3)
    card.appendChild(servicesList)

    card.appendChild(milestones)
    milestonesList.appendChild(milestonesLine0)
    milestonesList.appendChild(milestonesLine1)
    milestonesList.appendChild(milestonesLine2)
    milestonesList.appendChild(milestonesLine3)
    card.appendChild(milestonesList)

    card.appendChild(closures)
    closuresList.appendChild(closuresLine0)
    closuresList.appendChild(closuresLine1)
    closuresList.appendChild(closuresLine2)
    closuresList.appendChild(closuresLine3)
    closuresList.appendChild(closuresLine4)
    closuresList.appendChild(closuresLine5)
    card.appendChild(closuresList)
 
    card.appendChild(session)
    sessionList.appendChild(sessionLine0)
    sessionList.appendChild(sessionLine1)
    sessionList.appendChild(sessionLine2)
    sessionList.appendChild(sessionLine3)
    card.appendChild(sessionList)
    
    


    grid.appendChild(card);
    }
