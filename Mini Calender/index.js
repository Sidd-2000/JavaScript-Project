const monthEl = document.querySelector('.top h1')
const bottomEl = document.querySelector('.bottom');

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const date = new Date();

// attaching elements to the calendar

monthEl.innerText = months[date.getMonth()];
bottomEl.innerHTML = `
<h3 class="day">${weekdays[date.getDay()]}</h3>
<div class="Today">${date.getDate()}</div>
<h3 class="year">${date.getFullYear()}</h3>`
    // adding event listeners