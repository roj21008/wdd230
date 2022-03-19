let spot1=document.querySelector('.spot1')
let spot2=document.querySelector('.spot2')
let spot3=document.querySelector('.spot3')
let spots=[spot1,spot2,spot3]

fetch('https://roj21008.github.io/wdd230/chamber/js/data.json')
    .then(function(respone){return respone.json()})
    .then(function(data){
        let companies=data['companies'];
        console.log(companies[0]);
        let golden=companies.filter(function(company){return company.membership==='gold'})
        let silver=companies.filter(function(company){return company.membership==='silver'})
        let bronze=companies.filter(function(company){return company.membership==='bronze'})
        let status=[]
        bronze.map(function(i){status.push(i)})
        silver.map(function(i){status.push(i)})
        golden.map(function(i){status.push(i)})
        console.log(status)
        spots.forEach(function(i){
        let randomBusiness=status[Math.floor(Math.random() * status.length)]
        let name=randomBusiness.name;
        let phone=randomBusiness.tel; 
        let website = randomBusiness.website; 
        let image=randomBusiness.image;
        let slogan=randomBusiness.slogan;
        

        
        i.innerHTML=`<h2>${name}</h2>
                    <img src="${image}" alt="${name}">
                    <p>"${slogan}"</p>
                    <a href="${website}">${website}</a>
                    <p>${phone}</p>`
        })
  
        
    })