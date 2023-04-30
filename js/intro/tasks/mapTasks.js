console.clear();
const array = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'];

// 3.1:
const task1 = array.map((item) => {
   if (!isNaN(item) && item > 0) {
      return item;
   }
})
console.log(task1);

const task1_forEach = array.forEach((item) => {
   if (!isNaN(item) && item > 0) {
      return item;
   }
})

console.log(task1_forEach); // forEach grazina undefined, nes jis negrazina pakeistu masyvo elementu reiksmiu

/*
4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
4.1. Tik skaičius (number tipo duomenis).
4.2. Tik tekstą (string tipo duomenis).
4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
  "Index: 0, Number: 2"
  "Index: 1, Number: 3"
  "Index: 2, Number: 5"
  Ir t.t.
4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
  - Pirmo skaičiaus dauginti nereikia.
  - Antrą skaičių dauginti iš pirmo.
  - Trečią skaičių dauginti iš antro.
  - Ketvirta skaičių dauginti iš trečio.
  - Penktą skaičių dauginti iš ketvirto.
  Ir t.t.
4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".
*/

// 4.1:
function task41(array) {
   for (let i = 0; i < array.length; i++) {
      if (!isNaN(array[i])) {
         console.log(array[i]);
      }
   };
}

array.forEach((item))