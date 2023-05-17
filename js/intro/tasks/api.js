const randomJoke = document.querySelector('#joke-paragraph');
const randomJokeButton = document.querySelector('#add-joke');

randomJokeButton.addEventListener('click', () => {
   fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(jokeData => {
         randomJoke.textContent = jokeData.value;

      })
})


