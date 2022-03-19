const companiesURL = "https://roj21008.github.io/wdd230/chamber/js/data.json";

const spot1name = document.querySelector('#spot1name');
const spot1image = document.querySelector('#spot1image');
const spot1slogan = document.querySelector('#spot1slogan');
const spot1website = document.querySelector('#spot1website');
const spot1tel = document.querySelector('#spot1tel');

const spot2name = document.querySelector('#spot2name');
const spot2image = document.querySelector('#spot2image');
const spot2slogan = document.querySelector('#spot2slogan');
const spot2website = document.querySelector('#spot2website');
const spot2tel = document.querySelector('#spot2tel');

const spot3name = document.querySelector('#spot3name');
const spot3image = document.querySelector('#spot3image');
const spot3slogan = document.querySelector('#spot3slogan');
const spot3website = document.querySelector('#spot3website');
const spot3tel = document.querySelector('#spot3tel');

fetch(companiesURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const companies = jsonObject["companies"];
        let sortedCompanies = companies.sort(function () {
            return 0.5 - Math.random();
        });
        sortedCompanies.forEach(SpotlightCompanies);
    });

  
let bronzeMembers = {};
let silverMembers = {};
let goldMembers = {};

function SpotlightCompanies(company) {
    if (company.membership == "bronze") {
        Object.assign(bronzeMembers, company);
    }
    if (company.membership == "silver") {
        Object.assign(silverMembers, company);
    }
    if (company.membership == "gold") {
        Object.assign(goldMembers, company);
    }

spot1name.textContent = goldMembers.name;
spot1image.setAttribute('src', goldMembers.logo);
spot1image.setAttribute('alt', `logo of ${goldMembers.name}`);
spot1image.setAttribute('loading', 'lazy');
spot1slogan.textContent = `"${goldMembers.slogan}"`;
spot1website.textContent = goldMembers.website;
spot1tel.textContent = goldMembers.tel;

spot2name.textContent = silver.name;
spot2image.setAttribute('src', silver.logo);
spot2image.setAttribute('alt', `logo of ${silver.name}`);
spot2image.setAttribute('loading', 'lazy');
spot2slogan.textContent = `"${silver.slogan}"`;
spot2website.textContent = silver.website;
spot2tel.textContent = silver.tel;

spot3name.textContent = bronze.name;
spot3image.setAttribute('src', bronze.logo);
spot3image.setAttribute('alt', `logo of ${bronze.name}`);
spot3image.setAttribute('loading', 'lazy');
spot3slogan.textContent = `"${bronze.slogan}"`;
spot3website.textContent = bronze.website;
spot3tel.textContent = bronze.tel;
}