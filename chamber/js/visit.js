const bannerMessage = (day)=>{
	const meet = document.querySelector(".meet");
	const banner = document.createElement("h3");
	banner.innerText = `Come join us for the chamber meet and greet ${day} at 7:00 p.m.`
	meet.appendChild(banner)
}

const dayName = new Date();
switch (dayName.getDay()){
	case 1:
		bannerMessage("Wednesday")
		break;
	case 2:
		bannerMessage("Wednesday")
		break;
}







//MUBER OF VISITS

// initialize display elements

const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.

