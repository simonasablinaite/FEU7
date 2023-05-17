const randomJoke = document.querySelector('#joke-paragraph');
const randomJokeButton = document.querySelector('#add-joke');

// fetch("https://api.chucknorris.io/jokes/random")
//    .then(res => res.json())
//    .then(jokeData => {
//       randomJoke.textContent = jokeData.value;

//    })

randomJokeButton.addEventListener('click', () => {
   fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(jokeData => {
         randomJoke.textContent = jokeData.value;

      })
})


