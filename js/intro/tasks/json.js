function appendMovies() {
   fetch('../movies.json')
      .then((res) => res.json())
      .then((movies) => {
         const moviesList = document.querySelector('.movies-list');

         movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie-item');

            const title = document.createElement('h2');
            title.textContent = movie.title;

            const rating = document.createElement('span');
            rating.textContent = `Raring: ${movie.rating.rating}`;

            const countsOfRating = document.createElement('li');
            countsOfRating.textContent = `Counts Of Rating: ${movie.rating.numberOfRatings}`;

            const releaseDate = document.createElement('h2');
            releaseDate.innerHTML = `Release date: ${movie.releaseDate}`;

            const description = document.createElement('p');
            description.textContent = `Description: ${movie.description}`;

            // const genres = document.createElement('h3');
            // genres.textContent = `Genres: ${genre}`;

            // const director = document.createElement('');
            // .textContent = `Raring: ${movie.rating.rating}`;

            // const mainActors = document.createElement('');



            movieElement.append(title, rating, countsOfRating, releaseDate, description);
            moviesList.append(movieElement);
         })

      })

}
appendMovies();


