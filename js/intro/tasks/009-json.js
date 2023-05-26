// iprastinis objektas:
const obj = {
   name: 'John',
   age: 28,
   nextAge: 28 + 1,
   children: ['Child 1', 'Child 2'],
   address: {
      street: 'Vilniaus st.',
      city: 'Vilnius',
      country: 'Lithuania',
   },
   married: true,
   getAddress() {
      return `Address is: ${this.address.street} ${this.address.city} ${this.address.country}.`
   },
   test: undefined,
   test2: null,
}

// objekto psiekimas:
console.log(obj);
// objekte esanciu reiksmiu gavimas:
console.log(obj.name);
console.log(obj.age);
console.log(obj.children); //vaiku masyvas
console.log(obj.children[0]); //pirmo vaiko gavimas
console.log(obj.children[1]); //antro vaiko gavimas
console.log(obj.getAddress()); //funkcijos gavimas

// Iprasto objekto pavertimas JSON objektu:
let json = JSON.stringify(obj);
console.log(json);

/*
JSON formatas skirtas TIK duomenu dalinimuisi, o ne logikos rasymui;
JSON failo pletinys - .json;
Skirtumai tarp iprasto objekto ir JSON:
* VISAS JSON objektas yra stringas;
* VISADA naudojamos TIK "" kabutes;
* NEGALI PRIIMTI METODU;
* NEPRIIMA undefined;
* PASKUTINIS propertis NETURI kablelio (trailing comma);
* NERA galimybes KOMENTUOTI
* Dirbama kaip su iprastu objektu
* Js'e duomenis is JSON f-lo gauname naudodami FETCH
*/

/*
JSON formatas atrodo taip:

   {
   "name": "John",
   "age": 28,
   "nextAge": 29,
   "children": ["Child 1", "Child 2"],
   "address": {
      "street": "Vilniaus st.",
      "city": "Vilnius",
      "country": "Lithuania"
   },
   "married": true,
   "test2": null
 }

*/

// JSON objekto konvertavimas atgal i iprasta objekta:
const convertedToNormalObject = JSON.parse(json);
console.log(convertedToNormalObject);

/*
Objektas grazintas be metodu ir undefined reiksmiu. Nes grazinamas toks objektas, koks buvo JSON formatu, o ne pirminis variantas
*/

// Teorija apie Fetch'a:
/*
FETCH - leidzia siusti uzklausas. Nusiuntus uzklausa - laukia atsakymo (response)
fetch('') - skliausteliuose rasomas uzklausos adresas; -> grazina promise (pazada) ir kai pazadas yra grazinamas, vykdoma sekanti funkcija ->
.then((response) => { return response.json() - o tada, kai fetch grazins atsakyma, vykdyk sita funkcija. Cia priimamas tik vienas parametras callback su "response" -> Callback f-ja gauna atsakyma is fetcho ir mes tam atsakymui paleidziama json f-ja ->
})
.then((data) => { - o cia jau galime isstitraukti duomenis (data) ir su jais vykdyti logika
console.log(data);
})

TRUMPESNIS UZRASYMO BUDAS KURI NAUDOSIME:
fetch('./movies.json')
   .then((res) => res.json())
   .then((data) => {
      consile.log(data);
      console.log(data.name);
      console.log(data.age) ir t.t...
})
*/

fetch('./person.json') // grazina promise
   .then(response => console.log(response.json())) // promise, kuris savyje turi duomenis is person.json failo
// .then(item => {
//    console.log('veikia-1'); // suveikia antras, nes laukia atsakymo
// })
console.log('veikia-2'); // isloginamas pirmas, nes suveikia greiciau. Kol laukia veikia-1 atsakymo - suveikia veikia-2

fetch('./person.json')
   .then(res => res.json())
   .then(item => {
      console.log(item); // cia vykdoma logika, issitraukiami duomenys
      console.log(item.name); //John
      console.log(item.age); //28
      console.log(item.children);
      console.log(item.children[0], item.children[1]);
   })



function appendMovies() {
   fetch('../movies.json') // siunciama uzklausa i faila
      .then((res) => res.json()) // grazina pazada, kad duomenis pateiks
      .then((movies) => { // pateikiamas parametras duomenims paimti
         const moviesList = document.querySelector('.movies-list'); //sukuriamas listas duomenims talpinti

         movies.map(movie => { //sukamas ciklas per filmu sarasa, kad pasiekti kiekviena filma atskirai
            const movieElement = document.createElement('div'); // sukuriamas elementas atvaizduojantis viena filma
            movieElement.classList.add('movie-item'); // pridedama klase

            const title = document.createElement('h2'); // filmo elementu sukurimas ir atvaizdavimas
            title.textContent = `${movie.title} (${movie.releaseDate})`;

            const rating = document.createElement('span');
            rating.innerHTML = `Raring: <span style="font-weight: 900">${movie.rating.rating}</span> / Total: <span style="font-weight: 900">${movie.rating.numberOfRatings}</span>`;

            const description = document.createElement('p');
            description.innerHTML = `<p style="font-size:18px; font-style: italic">Description: ${movie.description}</p>`;

            const genresElement = document.createElement('ul');

            const genresTitle = document.createElement('p');
            genresTitle.innerHTML = `<p style="font-size:14spanx; font-style: italic; font-weight: 900">Genres: </p>`

            movie.genres.map(genre => { // kadangi sarasas - sukamas ciklas per si sarasa ir paimamas kiekvienas elementas atkirai
               const genreItem = document.createElement('li');
               genreItem.innerHTML = `${genre}`;
               genresElement.append(genreItem);
            })
            const director = document.createElement('span');
            director.innerHTML = `<span style="font-size:18spanx; font-style: italic; font-weight: 900">Director: </span> ${movie.director}`;

            const actorsElementTitle = document.createElement('p');
            actorsElementTitle.innerHTML = `<p style="font-size:14spanx; font-style: italic; font-weight: 900">Main actors: </p>`
            const mainActorsElement = document.createElement('ul');

            movie.mainActors.map(actor => {
               const actorItem = document.createElement('li');
               actorItem.textContent = `${actor}`;
               mainActorsElement.append(actorItem);
            })

            movieElement.append(title, rating, genresTitle, genresElement, description, director, actorsElementTitle, mainActorsElement); // pridedami elementai, kurie sudarys viena filmo elementa
            moviesList.append(movieElement); // i filmu sarasa sudedami filmai ir isvedami i ekrane
         })
      })
}
appendMovies();


