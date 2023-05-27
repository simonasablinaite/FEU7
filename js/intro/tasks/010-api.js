/*
API - budas kompiuteriams tarpusavyje dalintis informacija;
Pagrinde yra REST API standartas;
Jei yra API - jis turi tureti dokumentacija, kaip naudotis juo;
API nuorodos turi endpoint'us - /persons, /pages ir pan.

UZKLAUSU TIPAI:
GET - nurodome, kad norime gauti duomenis;
POST - nurodome, kad norime kazka sukurti;
PUT/PATCH - nurodome, kad norime redaguoti duomenis;
DELETE - nurodome, kad norime istrinti duomenis;

API adresas: https://api.chucknorris.io;
API adresas: https://api.chucknorris.io/jokes/random?category={category} -> ? papildomi parametrai, kuriuos galima perduoti i endpointa

*/

// Uzklausos siuntimas i API-aju ir duomenu isvedimas i ekrana:
const jokeParagraph = document.querySelector('#joke-paragraph');

fetch("https://api.chucknorris.io/jokes/random")
   .then(res => res.json())
   .then(jokeData => {
      jokeParagraph.textContent = jokeData.value;
   })

// 1. Sukurti mygtuką, kurį paspaudus ekrane atvaizduojamas atsitiktinis juokelis:

const randomJokeBtn = document.querySelector('#random-joke');

randomJokeBtn.addEventListener('click', () => {

   fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(randJoke => {
         jokeParagraph.textContent = randJoke.value;
      })
})

/*
2. Sukurti galimybę pasirinkti juokelių kategoriją:
  2.1. Sukurti formą, kurioje bus <select> elementas.
  2.2. <select> elementas savyje turės <option> elementus. Juose galima pasirinkti juokelių kategoriją. Šie elementai turi susigeneruoti automatiškai, priklausomai nuo to, kokias kategorijas turi API.

*/

const formElement = document.querySelector('form');
const selectOptions = document.querySelector('#select-category');


fetch('https://api.chucknorris.io/jokes/categories')
   .then(res => res.json())
   .then(categories => {
      categories.forEach(category => {
         const categoryOptions = document.createElement('option'); // kodel kategoriju atvaizdavimas neveikia, kai kintamasis yra iskeliamas is ciklo? Atvaizduoja tik viena travel kategorija? Kodel option elementa reikia kurti kategories ciklo viduje?

         categoryOptions.textContent = '-' + category;
         categoryOptions.value = category; // leidzia rasti kategorija net ir nurodzius papildomus simbolius pavadinime, pvz "-"
         selectOptions.append(categoryOptions);
      })
      const forCategoryBtn = document.querySelector('#for-category');
      forCategoryBtn.removeAttribute('disabled'); //panaikinamas disabled atributas is mygtuko esancio HTML'o f-le
   })
//   2.3. Sukurti mygtuką, kurį paspaudus, sugeneruotų atsitiktinį juokelį pagal pasirinktą kategoriją.
formElement.addEventListener('submit', (event) => {
   event.preventDefault();

   form = event.target // issitraukiame event.target'a (pacia forma)
   console.log(form.elements); // grazina visus formos elementus i konsole

   console.log(form['rand-joke'].value); // grazina pasirinkta kateegorija
   const category = form['rand-joke'].value;


   fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then(res => res.json())
      .then(randJoke => {
         console.log(randJoke.value);
         jokeParagraph.textContent = randJoke.value; // isvedama i ekrana
      })
})

// 3. Sukurti galimybę ieškoti juokelių pagal užklausos frazę.
// 3.1 Pasubmitiname forma, kurioje gauname inputo teksta

const searchForm = document.querySelector('#search-text');
const getPhraseBtn = document.querySelector('get-phrase');
const inputText = document.querySelector('for-text');

searchForm.addEventListener('submit', (event) => {

   event.preventDefault();
   const form = event.target;
   console.log(form); // gaunu formos elementus
   const inputText = form['for-text'].value; //pasiekiu inputo ivesta reiksme
   console.log(inputText);

   fetch(`https://api.chucknorris.io/jokes/search?query=${inputText}`)
      .then(res => res.json())
      .then(searchData => {
         console.log(searchData);
         // console.log(searchData.result[0].value); // visada bus gaunamas tik pirmas zodi atitinkantis juokelis
         // jokeParagraph.textContent = searchData.result[0].value;
         function getRandomJoke(min, max) {
            min = Math.ceil(0);
            max = Math.floor(searchData.result.length - 1);
            return Math.floor(Math.random() * (max - min) + min)
         }
         const index = getRandomJoke();
         const jokeData = searchData.result[index];

         jokeParagraph.textContent = jokeData.value;
      })
})






