// TODO: increment and decrement the count when the buttons are clicked

document.addEventListener('DOMContentLoaded', () => {

    const countDisplay = document.getElementById('count');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    let count = 0;


    incrementButton.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    });


    decrementButton.addEventListener('click', () => {
        count--;
        countDisplay.textContent = count;
    });
});