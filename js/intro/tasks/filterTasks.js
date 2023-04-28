console.clear();
/*
3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
3.1. Gauti tik teigiamus skaičius.
3.2. Gauti tik neigiamus skaičius.
3.3. Gauti tik skaičius, kurie dalinasi iš 2.
3.4. Gauti tik skaičius, kurie dalinasi iš 3.
3.5. Gauti tik skaičius, kurie dalinasi iš 5.
3.6. Gauti tik skaičius, kurie dalinasi iš 11.
3.7. Gauti tik skaičius, kurie dalinasi iš 31.
3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
*/

const array = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'];

const task1 = array.filter(function (e) {
   return e > 0;
});
console.log(task1);

const task2 = array.filter(function (e) {
   return e < 0;
});
console.log(task2);

const task3 = array.filter(function (e) {
   return e % 2 === 0;
});
console.log(task3);

const task4 = array.filter(function (e) {
   return e % 3 === 0;
});
console.log(task4);

const task5 = array.filter(function (e) {
   return e % 5 === 0;
});
console.log(task5);

const task6 = array.filter(function (e) {
   return e % 11 === 0;
});
console.log(task6);

console.clear();
const task7 = array.filter(function (e) {
   return e % 31 === 0;
});
console.log(task7);

const task8 = array.filter(function (e) {
   return e % 2 === 0 && e % 3 === 0;
});
console.log(task8);

const task9 = array.filter(function (e) {
   return e % 3 === 0 && e % 7 === 0;
});
console.log(task9);

const task10 = array.filter(function (e) {
   return e % 5 === 0 && e % 9 === 0;
});
console.log(task10);

const task11 = array.filter(function (e) {
   return e % 5 === 0 && e % 11 === 0;
});
console.log(task11);

const task12 = array.filter(function (e) {
   return e % 2 === 0 && e % 8 === 0 && e % 12 === 0;
});
console.log(task12);

const task13 = array.filter(function (e) {
   return e % 2 === 0 || e % 3 === 0;
});
console.log(task13);

const task14 = array.filter(function (e) {
   return e % 3 === 0 || e % 5 === 0;
});
console.log(task14);

const task15 = array.filter(function (e) {
   return e % 5 === 0 || e % 6 === 0;
});
console.log(task15);

const task16 = array.filter(function (e) {
   return e % 7 === 0 || e % 8 === 0;
});
console.log(task16);

const task17 = array.filter(function (e) {
   return e % 9 === 0 || e % 13 === 0;
});
console.log(task17);

const task18 = array.filter(function (e) {
   return e % 2 === 0 || e % 3 === 0 || e % 5 === 0;
});
console.log(task18);

const task19 = array.filter(function (e) {
   return e % 5 === 0 || e % 7 === 0 || e % 9 === 0;
});
console.log(task19);

const task20 = array.filter(function (e) {
   return e % 7 === 0 || e % 8 === 0 || e % 11 === 0;
});
console.log(task20);
console.clear();
/*
3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
3.22. Gauti tik skaičius, kurie yra didesni už 100.
3.23. Gauti tik skaičius, kurie yra didesni už 555.
3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
3.26. Gauti tik skaičius, kurie yra mažesni už 50.
3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
*/
const task21 = array.filter(function (e) {
   return e % 9 === 0 || e % 12 === 0 || e % 13 === 0;
});
console.log(task21);

const task22 = array.filter(function (e) {
   return e > 100;
});
console.log(task22);

const task23 = array.filter(function (e) {
   return e > 555;
});
console.log(task23);

const task24 = array.filter(function (e) {
   return e >= 888;
});
console.log(task24);

const task25 = array.filter(function (e) {
   return e >= 6789;
});
console.log(task25);

const task26 = array.filter(function (e) {
   return e < 50;
});
console.log(task26);

const task27 = array.filter(function (e) {
   return e < 1000;
});
console.log(task27);

const task28 = array.filter(function (e) {
   return e <= -1;
});
console.log(task28);

const task29 = array.filter(function (e) {
   return e <= -5564;
});
console.log(task29);

const task30 = array.filter(function (e) {
   return e < 1000 && e > 500;
});
console.log(task30);

const task31 = array.filter(function (e) {
   return e < 100 && e > 0;
});
console.log(task31);

const task32 = array.filter(function (e) {
   return e < 0 && e > -50;
});
console.log(task32);

const task33 = array.filter(function (e) {
   return e <= 0 && e > -100;
});
console.log(task33);

const task34 = array.filter(function (e) {
   return e <= 0 && e < 55;
});
console.log(task34);

const task35 = array.filter(function (e) {
   return e >= 444 && e <= 654;
});
console.log(task35);

const task36 = array.filter(function (e) {
   return e > 0 && e % 2 === 0;
});
console.log(task36);

const task37 = array.filter(function (e) {
   return e > 0 && e % 3 === 0;
});
console.log(task37);

const task38 = array.filter(function (e) {
   return e > 0 && e % 4 === 0;
});
console.log(task38);

const task39 = array.filter(function (e) {
   return e > 0 && e % 11 === 0;
});
console.log(task39);

console.clear();
/*
3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
*/

const task40 = array.filter(e => e > 500 && e % 2 === 0);
console.log(task40);

const task41 = array.filter(e => e > 1000 && e % 3 === 0);
console.log(task41);

const task42 = array.filter(e => e < 1000 && e % 9 === 0);
console.log(task42);

const task43 = array.filter(e => e < 500 && e % 2 === 0);
console.log(task43);

const task44 = array.filter(e => e >= 33 && e % 3 === 0);
console.log(task44);

const task45 = array.filter(e => e >= 444 && e % 12 === 0);
console.log(task45);

const task46 = array.filter(e => e <= 155 && e % 5 === 0);
console.log(task46);

const task47 = array.filter(e => e <= -333 && e % 9 === 0);
console.log(task47);

const task48 = array.filter(e => e > 100 && e < 500 && e % 5 === 0);
console.log(task48);

const task49 = array.filter(e => e >= 888 && e < 1000 && e % 2 === 0);
console.log(task49);

const task50 = array.filter(e => e <= 888 && e > -333 && e % 3 === 0 && e !== 0);
console.log(task50);

/*
3.51. Gauti tik skaičius.
3.52. Gauti tik tekstus (string).
3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
3.55. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
3.56. Gauti tik tekstus (string), kurie turi raidę t.
3.57. Gauti tik tekstus (string), kurie turi raidę y.
3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
3.65. Gauti tik tekstus (string), kurie neturi raidės s.
3.66. Gauti tik tekstus (string), kurie neturi raidės t.
3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
3.69. Gauti tik tekstus (string), kurie prasideda raide s.
3.70. Gauti tik tekstus (string), kurie prasideda raide o.
3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
*/
console.clear();

const task51 = array.filter(e => !isNaN(e));
console.log(task51);

const task52 = array.filter(e => isNaN(e));
console.log(task52);

const task53 = array.filter(e => isNaN(e) && e.length > 5);
console.log(task53);

const task54 = array.filter(e => isNaN(e) && e.length <= 5);
console.log(task54);

const task56 = array.filter(e => isNaN(e) && e.includes('t'));
console.log(task56);

const task57 = array.filter(e => isNaN(e) && e.includes('y'));
console.log(task57);

const task58 = array.filter(e => isNaN(e) && (e.includes('a') || e.includes('e'))); // skliausteliai reikalingi apjungti ARBA operacijas
console.log(task58);

const task59 = array.filter(e => isNaN(e) && (e.includes('t') || e.includes('i')));
console.log(task59);

const task60 = array.filter(e => isNaN(e) && (e.includes('t') && !e.includes('k')));
console.log(task60);

const task61 = array.filter(e => isNaN(e) && (e.includes('a') && !e.includes('s')));
console.log(task61);

const task62 = array.filter(e => isNaN(e) && e.split('t').length - 1 > 1);
console.log(task62);

const task63 = array.filter(e => isNaN(e) && e.includes('st'));
console.log(task63);

const task64 = array.filter(e => isNaN(e) && e.includes('nd'));
console.log(task64);

const task65 = array.filter(e => isNaN(e) && !e.includes('s'));
console.log(task65);

const task66 = array.filter(e => isNaN(e) && !e.includes('t'));
console.log(task66);

const task67 = array.filter(e => isNaN(e) && !e.includes('r') && !e.includes('l'));
console.log(task67);

const task68 = array.filter(e => !isNaN(e[0]));
console.log(task68);

const task69 = array.filter(e => isNaN(e) && e.startsWith('s'));
console.log(task69);

const task70 = array.filter(e => isNaN(e) && e.startsWith('o'));
console.log(task70);

const task70_1 = array.filter(e => isNaN(e) && e.endsWith('d'));
console.log(task70_1);

const task71 = array.filter(e => isNaN(e) && e.endsWith('s'));
console.log(task71);

const task72 = array.filter(e => isNaN(e) && e.length > 4 && e.includes('o'));
console.log(task72);

const task73 = array.filter(e => isNaN(e) && e.length >= 5 && e.includes('a'));
console.log(task73);

const task74 = array.filter(e => isNaN(e) && e.length % 2 === 0);
console.log(task74);

const task75 = array.filter(e => isNaN(e) && e.length % 2 !== 0 && e.includes('s'));
console.log(task75);

const task76 = array.filter(e => isNaN(e) && e[2] === 'a');
console.log(task76);

const task77 = array.filter(e => isNaN(e) && e[3] === 'l');
console.log(task77);

const task79 = array.filter(e => isNaN(e) && e.length > 4 && e[4] !== 't');
console.log(task79);

const task80 = array.filter(e => isNaN(e) && e[0] !== 'e' && e.length < 6 && isNaN(e[0]));
console.log(task80);

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

console.clear();

// 4.1: 
for (let i = 0; i < array.length; i++) {
   if (!isNaN(array[i])) {
      console.log(array[i]);
   }
};

// 4.2:
for (let i = 0; i < array.length; i++) {
   if (isNaN(array[i])) {
      console.log(array[i]);
   }
};

// 4.3:
for (let i = 0; i < array.length; i++) {
   if (!isNaN(array[i])) {
      console.log(array[i] ** 4);
   }
};

// 4.4:
for (let i = 0; i < array.length; i++) {
   if (!isNaN(array[i])) {
      console.log(array[i] + 55);
   }
};

// 4.5:
for (let i = 0; i < array.length; i++) {
   if (!isNaN(array[i])) {
      console.log(array[i] / 2);
   }
};

// 4.6:
for (let i = 0; i < array.length; i++) {
   if (!isNaN(array[i])) {
      console.log('Number: ', + array[i]);
   }
};

// 4.7:
for (let i = 0; i < array.length; i++) {
   if (!isNaN(array[i])) {
      console.log(`Indekas: ${i} Number: ${array[i]}`);
   }
};

// 4.8:
for (let i = 0; i < array.length; i++) {
   if (!isNaN(array[i])) {
      console.log(array[i] * i);
   }
};

// 4.9:
for (let i = 0; i < array.length; i++) {
   if (!isNaN(array[i])) {
      console.log(array[i] * array[i - 1]);
   }
};
console.clear();

// 4.10: 
for (let i = 0; i < array.length; i++) { //grazina ir 155 ir 321 🤔
   if (!isNaN(array[i]) && array[i] * 5 > 350) {
      console.log(array[i]);
   }
};

// 4.11:
for (let i = 0; i < array.length; i++) {
   if (isNaN(array[i])) {
      console.log(`"${array[i]} has ${array[i].length} symbols"`);
   }
};

// 4.12:
for (let i = 0; i < array.length; i++) {
   if (isNaN(array[i])) {
      console.log(array[i].toUpperCase().split('').join('-'));
   }
};

// 4.13:
for (let i = 0; i < array.length; i++) {
   if (isNaN(array[i])) {
      const newArr1 = array[i].split('');
      newArr1[0] = '_';
      newArr1[2] = '_';

      console.log(newArr1.join(''));
   }
};

// 4.14:
for (let i = 0; i < array.length; i++) {
   if (isNaN(array[i])) {
      console.log(array[i].split('').reverse().join(''));
   }
};

// 4.15:
for (let i = 0; i < array.length; i++) {
   if (isNaN(array[i])) {
      console.log(`"Word ${array[i]} is between ${array[i - 1]} and ${array[i + 1]} in the array"`);
   }
};

/*
6. Visoms prieš tai atliktoms užduotims sukurti funkcijas. Jeigu tą pačia funkciją galima panaudoti keletui užduočių - taip ir padaryti.
6.1. Funkcija privalo priimti bent vieną parametrą, t.y. masyvą, su kuriuo dirbama.
6.2. Jeigu įmanoma ir logiška, pridėti ir daugiau parametrų.
*/


// 6 - NEATLIKTA






