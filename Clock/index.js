const HourElement = document.querySelector('.hours');
const MinuteElement = document.querySelector('.minutes');
const SecondElement = document.querySelector('.second');
console.log(HourElement);
console.log(MinuteElement);
console.log(SecondElement);

// ! update time

function updateTime() {
    const date = new Date();
    setTimeout(() => {
        updateTime();
    }, 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hourdeg = (hours / 12) * 360;
    const minutedeg = (minutes / 60) * 360;
    const seconddeg = (seconds / 60) * 360;
    HourElement.style.transform = `rotate(${hourdeg}deg)`;
    MinuteElement.style.transform = `rotate(${minutedeg}deg)`;
    SecondElement.style.transform = `rotate(${seconddeg}deg)`;
}

updateTime();