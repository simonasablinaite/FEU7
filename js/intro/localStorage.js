// Local storage sukurimas:
localStorage.setItem('test', 'labas🖐');

// localStorage gavimas:
localStorage.getItem('test');
console.log(localStorage.getItem('test'));

// localStorage istrynimas:
localStorage.removeItem('test');

// Kad vel gauti istrinta reiksme, nurodomo getItem:
console.log(localStorage.getItem('test'));


// PVZ SU FORMA:
// 1. Paselektinamas input elementas:
const input = document.querySelector('input');

// 3. Gauname reiksme atgal i forma:
input.value = localStorage.getItem('input-field');

// 2. inputui sukuriamas eventas, kuriuo, parasius reiksme i inputa, bus automatiskai sukurtas localStorage
input.addEventListener('input', (event) => {
   localStorage.setItem('input-field', event.target.value)
})

// 4. Nuresetinami formos duomenys po submitinimo:
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
   event.preventDefault();
   localStorage.removeItem('input-field');
})

// Keletas niuansu su kito tipo duomenimis: 

// Local storage priimas string tipo duomenis ir grazina tik string tipo duomenis, del to, siunciant skaicius, objektus, masyvus, reiktu naudoti JSON.stringify ir JSON.parse metodus duomenu konvertavimui:

let personAge = 25;
console.log(personAge, typeof personAge);
localStorage.setItem('age', personAge); // sukuriame local storage

// Gaunama reiksme yra string tipo:
let personAgeLocalStorage = localStorage.getItem('age');
console.log(personAgeLocalStorage, typeof personAgeLocalStorage);

// Su objektais:
let person = {
   age: 25,
   name: 'Jonas',
};

console.log(person, typeof person);

// pasiverciame objekta i JSON stringa:
const personObjStr = JSON.stringify(person);
localStorage.setItem('person-obj', personObjStr);

// Gauname localStorage reiskme:
const personLocalStorageStr = localStorage.getItem('person-obj');
console.log(personLocalStorageStr, typeof personLocalStorageStr);

// JSON objektas paverciamas iprastu objektu:
const personLocalObj = JSON.parse(personLocalStorageStr);
console.log(personLocalObj, typeof personLocalObj);
// dabar galima issitraukti objekto reiksmes:
console.log(personLocalObj.age);
console.log(personLocalObj.name);

// Su array tipo duomenimis:
const arr = [1, 2, 'labas', [5, 10, '15'], true, { test: 'labas' }];

console.log(arr);

localStorage.setItem('new-arr', JSON.stringify(arr));

const arrLocalStr = localStorage.getItem('new-arr');
console.log(arrLocalStr);

const arrLocal = JSON.parse(arrLocalStr);
console.log(arrLocal);


