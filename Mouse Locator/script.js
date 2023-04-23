const containerEl = document.querySelector('.container');

// adding event listeners

window.addEventListener('mousemove', (event) => {
    containerEl.innerHTML = `<div class="mouseEvent">${event.clientX}
    <h4>Mouse X Position(px)</h4>
</div>
<div class="mouseEvent">${event.clientY}
    <h4>Mouse Y Position(px)</h4>

</div>`

})