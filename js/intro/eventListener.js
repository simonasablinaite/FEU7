const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const h5 = document.querySelector('h5');

const button = document.querySelector('button')

h1.addEventListener('click', () => {
   h1.style.backgroundColor = 'pink';
   h1.style.color = 'green';
   h1.textContent = 'Clicked';

});

h2.addEventListener('click', changeBorder);

h3.addEventListener('click', () => {
   h3.style.color = 'purple';
   h1.style.color = 'purple';
});

function changeBorder() {
   h4.style.border = '2px solid black';
   h2.style.border = '2px solid black';
}

button.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
   button.classList.toggle('active');
})

