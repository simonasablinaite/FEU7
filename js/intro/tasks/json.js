// Teorija apie Fetch'a:

/*
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

function appendMovies() {
   fetch('../movies.json')
      .then((res) => res.json())
      .then((movies) => {
         const moviesList = document.querySelector('.movies-list');

         movies.map(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie-item');

            const title = document.createElement('h2');
            title.textContent = `${movie.title} (${movie.releaseDate})`;

            const rating = document.createElement('span');
            rating.innerHTML = `Raring: <span style="font-weight: 900">${movie.rating.rating}</span> / Total: <span style="font-weight: 900">${movie.rating.numberOfRatings}</span>`;

            const description = document.createElement('p');
            description.innerHTML = `<p style="font-size:18px; font-style: italic">Description: ${movie.description}</p>`;

            const genresElement = document.createElement('ul');

            const genresTitle = document.createElement('p');
            genresTitle.innerHTML = `<p style="font-size:14spanx; font-style: italic; font-weight: 900">Genres: </p>`

            movie.genres.map(genre => {
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



            movieElement.append(title, rating, genresTitle, genresElement, description, director, actorsElementTitle, mainActorsElement);
            moviesList.append(movieElement);
         })

      })

}
appendMovies();


