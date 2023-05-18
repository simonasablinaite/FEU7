// 1. Sukurti mygtuką, kurį paspaudus ekrane atvaizduojamas atsitiktinis juokelis.

const randomJoke = document.querySelector('#joke-paragraph');
const randomJokeButton = document.querySelector('#add-joke');

randomJokeButton.addEventListener('click', () => {
   fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(jokeData => {
         randomJoke.textContent = jokeData.value;

      })
})

/*
2. Sukurti galimybę pasirinkti juokelių kategoriją:
  2.1. Sukurti formą, kurioje bus <select> elementas. 
  2.2. <select> elementas savyje turės <option> elementus. Juose galima pasirinkti juokelių kategoriją. Šie elementai turi susigeneruoti automatiškai, priklausomai nuo to, kokias kategorijas turi API.
 
  2.3. Sukurti mygtuką, kurį paspaudus, sugeneruotų atsitiktinį juokelį pagal pasirinktą kategoriją.
*/

const selectElement = document.querySelector('#categories');


function getOptions() {
   fetch('https://api.chucknorris.io/jokes/categories')
      .then(res => res.json())
      .then((categories) => {
         categories.forEach(category => {
            const optionElement = document.createElement('option');
            optionElement.textContent = '-' + category;
            optionElement.value = category;

            selectElement.append(optionElement);

         })
         const categoryButton = document.querySelector('#category-select-button');
         categoryButton.removeAttribute('disabled');
      })
}

getOptions();

function task23() {
   const formElement = document.querySelector('form');
   formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      const category = event.target.categories.value; // kategorija, kuria norime gauti is API
      fetch('https://api.chucknorris.io/jokes/random?category=' + category) // prie nuorodos pridedama kategorija
         .then(response => response.json())
         .then((jokeData) => {
            randomJoke.textContent = jokeData.value;

         })
   })
}
task23();
