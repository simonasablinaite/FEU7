/*
5. Atlikti ta patį, kaip ir ketvirtoje užduotyje, tačiau atsakymus išvesti ne į konsolę, o į ul elementus.
5.1. Kiekvienai užduočiai HTML faile sukurti naują ul elementą ir jam priskirti unikalų id, pvz.:
<ul id="task-41"></ul>
<ul id="task-42"></ul>
<ul id="task-43"></ul>
  Ir t.t.
5.2. JavaScript'e paselektinti šiuos elementus.
5.3. Kiekvienas ketvirtos užduoties ciklo atsakymas turėtų būti įdėtas į li elementą.
5.4. Kiekvienas li elementas turėtų būti įdėtas į atitinkamą ul elementą.
*/

const array = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'];


// 4.1
function task41() {
   array.map((e) => {
      if (!isNaN(e)) {
         const ul1 = document.querySelector('#task41');
         ul1.innerHTML += `<li>${e}</li>`;
      }
   })
}

// task41();

// 4.2
function task42() {
   array.map((e) => {
      if (isNaN(e)) {
         const ul2 = document.querySelector('#task42');
         ul2.innerHTML += `<li>${e}</li>`;
      }
   })
}
// task42();

// 4.3
function task43() {
   array.map((e) => {
      if (!isNaN(e)) {
         const ul3 = document.querySelector('#task41');
         ul3.innerHTML += `<li>${e ** 4}</li>`;
      }
   })
}

// task43();

// 4.4
function task44() {
   array.map((e) => {
      if (!isNaN(e)) {
         const ul4 = document.querySelector('#task41');
         ul4.innerHTML += `<li>${e + 55}</li>`;
      }
   })
}

// task44();

// task 4.5
function task45() {
   array.map((e) => {
      if (!isNaN(e)) {
         const ul5 = document.querySelector('#task45');
         ul5.innerHTML += `<li>${e / 2}</li>`
      }
   })
}

// task45();

// task 4.6
function task46() {
   array.map((e) => {
      if (!isNaN(e)) {
         const ul6 = document.querySelector('#task46');
         ul6.innerHTML += `<li>Number: ${e}</li>`
      }
   })
}
// task46();

// 4.7;
function task47() {
   array.map((numb, index) => {
      if (!isNaN(numb)) {
         const ul47 = document.querySelector('#task47');
         ul47.innerHTML += `<li>"Index: ${index}, Number: ${numb}"</li>`
      }
   })
}

// task47();

// 4.8
function task48() {
   array.map((numb, i) => {
      if (!isNaN(numb)) {
         const ul48 = document.querySelector('#task48');
         ul48.innerHTML += `<li>${numb * i}</li>`
      }
   })
}

// task48();

// 4.9
function task49() {
   array.map((e) => {
      if (!isNaN(e)) {
         const ul49 = document.querySelector('#task49');
         ul49.innerHTML += `<li>${e * (e - 1)}</li>`
      }
   })
}
// task49();

// 4.10
function task410() {
   array.map((e) => {
      if (!isNaN(e) && e * 5 > 350) {
         const ul410 = document.querySelector('#task410');
         ul410.innerHTML += `<li>${e}</li>`
      }
   })
}
// task410();

// 4.11
function task411() {
   array.map((e) => {
      if (isNaN(e)) {
         const ul411 = document.querySelector('#task411');
         ul411.innerHTML += `<li>"${e} has ${e.length} symbols"</li>`
      }
   })
}
// task411();

// 4.12
function task412() {
   array.map((e) => {
      if (isNaN(e)) {
         const ul412 = document.querySelector('#task412');
         ul412.innerHTML += `<li>${e.toUpperCase().split('').join('-')}</li>`
      }
   })
}
// task412();

// 4.13
function task413() {
   array.map((e) => {
      if (isNaN(e)) {
         const ul413 = document.querySelector('#task413');
         const splitedArr = e.split('');
         splitedArr[0] = '_';
         splitedArr[2] = '_';
         ul413.innerHTML += `<li>"${splitedArr.join('')}"</li>`
      }
   })
}

// task413();

// 4.14
function task414() {
   array.map((e) => {
      if (isNaN(e)) {
         const ul414 = document.querySelector('#task414');
         ul414.innerHTML += `<li>${e.split('').reverse().join('')}</li>`

      }
   })
}

task414();

/*
12. Filmų sąrašą išvesti į ekraną (ul - li elementuose). Prie filmo pavadinimo pridėti filmo eilės numerį.
*/

const filmai1 = ['Pjuklo ketera', 'Vakaru fronte nieko naujo', 'Simpsonu filmas', 'Avataras', 'Liuteris', 'Juodoji pantera. Vakanda', 'Zalioji mylia', 'Greiti ir isiute', 'Baltasis varnas']
const filmai2 = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'The Godfather Part II',];
const filmai3 = ['12 Angry Men', "Schindler's List", 'The Lord of the Rings: The Return of the King', 'Pulp Fiction', 'The Lord of the Rings: The Fellowship of the Ring', 'The Good, the Bad and the Ugly',];

function allList(listName) {
   const ul416 = document.querySelector(`#task416`);
   let moveIndex = 0;
   listName.forEach(item => {
      item.forEach(e => {
         moveIndex++;
         ul416.innerHTML += `<li>${moveIndex} ${e}</li>`
      })
   })
}

allList([filmai1, filmai2, filmai3]);

/*
12.2. Sukurti dar 2 naujus masyvus, kuriuose būtų po keletą filmų ir:
12.3. Išvesti visuose 3 masyvuose esančius filmus į ekraną kaip vieną sąrašą.
*/

// filmai2.forEach((item, i) => {
//    const ul416 = document.querySelector('#task416');
//    ul416.innerHTML += `<li>${i + 1} ${item}</li>`
// })

// filmai3.forEach((item, i) => {
//    const ul416 = document.querySelector('#task416');
//    ul416.innerHTML += `<li>${i + 1} ${item}</li>`
// })

const movieYears = [2001, 2019, 2022, 2023, 2020, 2009, 2010, 2007, 2009, 2012]

function listMoviesWithYears(movies, years) {
   movies.map((element, index) => {
      console.log(years[index]);

      let year = years[index];

      let liElement = `<li>${element} ${year}</li>`
   })
}

listMoviesWithYears(moviesList, movieYears)