const counterEl = document.querySelector('.counter');
const precentageEl = document.querySelector('.loading-bar-front');
let count = 0;
setInterval(() => {
    counterEl.innerHTML = `<div class="counter">${count}%</div>`
    precentageEl.style.width = `${count}%`;
    if (count == 100) {
        return;
    }
    count++;
}, 5)