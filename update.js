
//Day names array
const dayNames=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
//Long months names array
const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Thursday",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const update = dayName + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();

document.getElementbyId("update").textcontent = update;


