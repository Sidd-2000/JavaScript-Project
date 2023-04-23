// ! making dynamic on date
const monthEl = document.querySelector('.date h1');
const dayEl = document.querySelector('.date p');

// first date
const monthIndex = new Date().getMonth();
const lastday = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay();
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthEl.innerText = monthNames[monthIndex];
const currentdate = new Date();
currentdate.setDate(currentdate.getDate());
dayEl.innerText = currentdate.toDateString();

// ! create dynamically generated days

let days = "";
const daysEl = document.querySelector('.Days');

// ! STARTING DAY
for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastday; i++) {
    if (i == new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
    }
    days += `<div>${i}</div>`;

}
daysEl.innerHTML = days;