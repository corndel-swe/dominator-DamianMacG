// TODO: get a reference to the .box element and log it to the console
    const box = document.querySelector('.box');
    console.log(box);

// TODO: add an event listener to the .box element that toggles the .left class
document.addEventListener('DOMContentLoaded', () => {
    box.addEventListener('click', () => {
        box.classList.toggle("left");
    });
});

// TODO: get a reference to #button, #txt and #output
const button = document.getElementById('button');
const txt = document.getElementById('txt');
const output = document.getElementById('output');

// TODO: add an event listener to the #button that changes the text in #output to the lowercase value of #txt
button.addEventListener('click', () => {
    output.textContent = txt.value.toLowerCase();
});
