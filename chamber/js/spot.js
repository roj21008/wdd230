const requestURL = "https://roj21008.github.io/wdd230/chamber/js/data.json";
const grid = document.querySelector('.grid');
let dataRequest;
fetch(requestURL)
    .then(request => request.json())
    .then( ( data ) => {
        console.log(data);
        const companies = data.companies;
        dataRequest = companies;
        companies.forEach(spotCompanies);
    });

    function spotCompanies(company){
        let spotTitle1 = document.getElementsByClassName('spot-title-1');
        spotTitle1.textContent = data.company[2].name;
    }