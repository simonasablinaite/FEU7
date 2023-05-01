console.clear();

/*
4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant map ir forEach  metodus. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
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

const arr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'];

// with MAP()
const taskMap41 = arr.map((num) => {
   if (!isNaN(num)) {
      console.log(num)
   }
});

const taskMap42 = arr.map((e) => {
   if (isNaN(e)) {
      console.log(e)
   }
});

const taskMap43 = arr.map((num) => {
   if (!isNaN(num)) {
      console.log(num ** 4)
   }
});

const taskMap44 = arr.map((num) => {
   if (!isNaN(num)) {
      console.log(num + 55)
   }
});

const taskMap45 = arr.map((num) => {
   if (!isNaN(num)) {
      console.log(num / 2)
   }
});

const taskMap46 = arr.map((num) => {
   if (!isNaN(num)) {
      console.log(`"Number: ${num}"`)
   }
});

const taskMap47 = arr.map((num, index) => {
   if (!isNaN(num)) {
      console.log(`"Index: ${index}, Number: ${num}"`)
   }
});

const taskMap48 = arr.map((num, i) => {
   if (!isNaN(num)) {
      console.log(num * i)
   }
});

const taskMap49 = arr.map((num) => {
   if (!isNaN(num)) {
      console.log(num * (num - 1))
   }
});

const taskMap410 = arr.map((num) => {
   if (!isNaN(num) * 5 > 350) {
      console.log(num)
   }
});

const taskMap411 = arr.map((e) => {
   if (isNaN(e)) {
      console.log(`"${e} has ${e.length} symbols"`)
   }
});

const taskMap412 = arr.map((e) => {
   if (isNaN(e)) {
      console.log(e.toUpperCase().split('').join('-'))
   }
});

const taskMap413 = arr.map((e) => {
   if (isNaN(e)) {
      const newArr1 = e.split('');
      newArr1[0] = '_';
      newArr1[2] = '_';

      console.log(newArr1.join(''));
   }
});

const taskMap414 = arr.map((e) => {
   if (isNaN(e)) {
      console.log(e.split('').reverse().join(''));
   }
});

const taskMap415 = arr.map((e, i, arr) => {
   if (isNaN(e)) {
      console.log(`"Word ${e} is between ${arr[i - 1]} and ${arr[i + 1]} in the array"`);
   }
});

// with FOREACH():
const taskForEach41 = arr.forEach((num) => {
   if (!isNaN(num)) {
      console.log(num)
   }
});

const taskForEach42 = arr.forEach((e) => {
   if (isNaN(e)) {
      console.log(e)
   }
});

const taskForEach43 = arr.forEach((num) => {
   if (!isNaN(num)) {
      console.log(num ** 4)
   }
});

const taskForEach44 = arr.forEach((num) => {
   if (!isNaN(num)) {
      console.log(num + 55)
   }
});

const taskForEach45 = arr.forEach((num) => {
   if (!isNaN(num)) {
      console.log(num / 2)
   }
});

const taskForEach46 = arr.forEach((num) => {
   if (!isNaN(num)) {
      console.log(`"Number: ${num}"`)
   }
});

const taskForEach47 = arr.forEach((num, index) => {
   if (!isNaN(num)) {
      console.log(`"Index: ${index}, Number: ${num}"`)
   }
});

const taskForEach48 = arr.forEach((num, i) => {
   if (!isNaN(num)) {
      console.log(num * i)
   }
});

const taskForEach49 = arr.forEach((num) => {
   if (!isNaN(num)) {
      console.log(num * (num - 1))
   }
});

const taskForEach410 = arr.forEach((num) => {
   if (!isNaN(num) * 5 > 350) {
      console.log(num)
   }
});

const taskForEach411 = arr.forEach((e) => {
   if (isNaN(e)) {
      console.log(`"${e} has ${e.length} symbols"`)
   }
});

const taskForEach412 = arr.forEach((e) => {
   if (isNaN(e)) {
      console.log(e.toUpperCase().split('').join('-'))
   }
});

const taskForEach413 = arr.forEach((e) => {
   if (isNaN(e)) {
      const newArr1 = e.split('');
      newArr1[0] = '_';
      newArr1[2] = '_';

      console.log(newArr1.join(''));
   }
});

const taskForEach414 = arr.forEach((e) => {
   if (isNaN(e)) {
      console.log(e.split('').reverse().join(''));
   }
});

const taskForEach415 = arr.forEach((e, i, arr) => {
   if (isNaN(e)) {
      console.log(`"Word ${e} is between ${arr[i - 1]} and ${arr[i + 1]} in the array"`);
   }
});

// Variantai su ternary operatoriumi:
console.log('***TERNARY VARIANTAI');

const taskMapAbbreviated41 = arr.map(num => !isNaN(num) ? num : null);
console.log(taskMapAbbreviated41);

const taskMapAbbreviated42 = arr.map(e => isNaN(e) ? e : null);
console.log(taskMapAbbreviated42);

const taskMapAbbreviated43 = arr.map(num => !isNaN(num) ? num ** 4 : null);
console.log(taskMapAbbreviated43);

const taskMapAbbreviated44 = arr.map(num => !isNaN(num) ? num + 55 : null);
console.log(taskMapAbbreviated44);

const taskMapAbbreviated45 = arr.map(num => !isNaN(num) ? num / 2 : null);
console.log(taskMapAbbreviated45);

const taskMapAbbreviated46 = arr.map(num => !isNaN(num) ? `"Number: ${num}"` : null);
console.log(taskMapAbbreviated46);

const taskMapAbbreviated47 = arr.map((num, index) => !isNaN(num) ? `"Index: ${index}, Number: ${num}"` : null);
console.log(taskMapAbbreviated47);

const taskMapAbbreviated48 = arr.map((num, i) => !isNaN(num) ? num * i : null);
console.log(taskMapAbbreviated48);

const taskMapAbbreviated49 = arr.map(num => !isNaN(num) ? num * (num - 1) : null);
console.log(taskMapAbbreviated49);

const taskMapAbbreviated410 = arr.map((num) => !isNaN(num) * 5 > 350 ? num : null);
console.log(taskMapAbbreviated410);

const taskMapAbbreviated411 = arr.map((e) => isNaN(e) ? `"${e} has ${e.length} symbols"` : null);
console.log(taskMapAbbreviated411);

const taskMapAbbreviated412 = arr.map((e) => isNaN(e) ? e.toUpperCase().split('').join('-') : null);
console.log(taskMapAbbreviated412);

// const taskMapAbbreviated413 = arr.map((e) => {
//    if (isNaN(e)) {
//       const newArr1 = e.split('');
//       newArr1[0] = '_';
//       newArr1[2] = '_';

//       console.log(newArr1.join(''));
//    }
// });

const taskMapAbbreviated414 = arr.map(e => isNaN(e) ? e.split('').reverse().join('') : null);
console.log(taskMapAbbreviated414);

const taskMapAbbreviated415 = arr.map((e, i, arr) => isNaN(e) ? `"Word ${e} is between ${arr[i - 1]} and ${arr[i + 1]} in the array"` : null);
console.log(taskMapAbbreviated415);
















