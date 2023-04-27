console.clear();

// FILTER() metodas

const originalNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(originalNums);

//f-ja be pavadinimo vadinama anonimine f-ja: function() {}:
// I funkcijos skliaustelius galima rasyti tris parametrus: elementa, indeksa, array. Dazniausiai bus naudojamas element.

// Filter metodas nemodifikuoja originalaus masyvo;
// const filteredNum = originalNums.filter(function (element) {
//    console.log(element, index);
// });

const filteredNums2 = originalNums.filter(function (num) {
   return num < 5 && num % 2 === 0;
});

console.log(filteredNums2);
