// 1. Sukurti mygtuką, kurį paspaudus ekrane atvaizduojamas atsitiktinis juokelis.

const randomJoke = document.querySelector('#joke-paragraph');
const randomJokeButton = document.querySelector('#get-joke');

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




function getOptions() {
   fetch('https://api.chucknorris.io/jokes/categories')
      .then(res => res.json())
      .then((categories) => {
         const selectElement = document.querySelector('#categories');

         categories.forEach(category => {
            const optionElement = document.createElement('option');
            optionElement.textContent = '-' + category;
            optionElement.value = category; //gaunamos visos kategorijos kokios yra API
            selectElement.append(optionElement); //i select elementa pridedamos kategorijos
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
      const category = event.target.categories.textContent; // gaunama konkreti kategorija
      fetch('https://api.chucknorris.io/jokes/random?category=' + category) // prie nuorodos pridedama kategorija
         .then(response => response.json())
         .then((jokeData) => {
            console.log(jokeData.value);
            randomJoke.textContent = jokeData.value;
         })
   })
}
task23();

// 3. Sukurti galimybę ieškoti juokelių pagal užklausos frazę.
function task3() {
   const searchForm = document.querySelector('#search-form');
   // inputo value gavimas, kuris bus panaudotas nuorodos tekste
   searchForm.addEventListener('submit', (event) => {
      event.preventDefault();

      console.log(event.target['search-input'].value);
      const searchValue = event.target['search-input'].value;

      fetch('https://api.chucknorris.io/jokes/search?query=' + searchValue)
         .then(res => res.json())
         .then((searchData) => {
            console.log(searchData);
         })
   })
}
task3();