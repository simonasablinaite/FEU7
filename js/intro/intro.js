/* Kintamojo sukūrimas:
 1. Iniciavimo žodelis (var, let, const);
 2. Kintamojo pavadinimas;
 3. Lygybės ženklas;
 4. Kintamojo reikšmė;
 5. Kabliataškis operacijos pabaigai
 
*/


var vardas = 'Steve'; // String (tekstas) duomenų tipas;
let pavarde = "Doe"; // String (tekstas) duomenų tipas;
let miestas = `Kaunas`; // String (tekstas) duomenų tipas
const asmensKodas = 5466546131; // Number (skaičius) duomenų tipas;
let yraStudentas = false; // Boolean (true/false) duomenų tipas;
let amzius = 25;

console.log(vardas);
console.log(pavarde);
console.log(miestas);
console.log(vardas, typeof vardas);
console.log(asmensKodas);
console.log(typeof asmensKodas);

console.log('*****kintamojo reikšmės pakeitimas******');

pavarde = 'Johnson';
console.log(pavarde);

vardas = 'Jonas';
console.log(vardas);

console.log(yraStudentas);
console.log(typeof yraStudentas);
console.log(amzius);
console.log(typeof amzius);
amzius = 26;
console.log(amzius);
amzius = amzius + 1;
console.log(amzius);
console.log('Hello, ' + vardas + ' ' + pavarde + '.');
console.log("Hello, " + vardas + " " + pavarde + ".");

// MATEMATINIAI OPERATORIAI:
console.log('***Matematiniai operatoriai***');
let num1 = 22;
let num2 = 10;
let num3 = '10';
console.log(num1 + num2); //32
console.log(num1 - num2); //12
console.log(num1 * num2); //220
console.log(num1 / num2); //2,2
console.log(num1 % num2); //2
console.log(num1 + num2 * num2); //122
console.log((num1 + num2) * num2); //320
// Matematinės operacijos su string tipo skaičiumi:
console.log(num1 + num3); // string tipas 2210. Jei vienas iš kintamųjų, kurį pridedame prie skaičiaus yra string, tai visa reikšmė paverčiama string
console.log(num1 - num3); //12
console.log(num1 * num3); //220
console.log(num1 / num3); //2,2
console.log(num1 % num3); // 2 
// visos kitos operacijos su strig tipo skaičiumi - veikia.

/*
Analizė, kaip JS atlieka logiką su matematiniais veiksmais, kuriame vienas iš skaičių yra string tipo:

console.log(num1 + num3 * num3);
console.log(num1 + '10' * '10');
console.log(22 + 100);
console.log(122);
*/

/*
Dar vienas analizės pavyzdys:

console.log((num1 + num3) * num3);
console.log((22 + '10') * num3);
console.log('2210' * '10');
console.log(22100);
*/


// SĄLYGOS
// Dviguba lygybė (loosely equal ==): tikrina TIK reikšmes ir nekreipia dėmesio į duomenų tipą.
console.log(10 == 10); // true
console.log('vienas' == 'vienas'); // true
console.log('10' == '10'); // true
console.log(10 == '10'); // true

// Triguba lygybė (strictly qual ===): pirmiausiai tikrina ar sutampa duomenų tipai, o tada tikrina reikšmes.
console.log(10 === 10); // true
console.log('vienas' === 'vienas'); // true
console.log('10' === '10'); // true
console.log(10 === '10'); // false
console.log(10 > 10); // false
console.log(10 < 10); // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true
console.log(10 == 10); // true
console.log(10 != 10); // false
console.log(10 === 10); // true
console.log(10 !== 10); // false
console.log(true);
console.log(!true);
console.log(!!true);

// IF, ELSE IF, ELSE
let originalLight = 'YeLLow';
console.log(originalLight)
let light = originalLight.toLowerCase();
console.log(light);

// OR operator - ARBA operatorius ||
if (light === 'green') {
   console.log('Galima eiti!');
} else if (light === 'yellow') {
   console.log('Pasiruošk');
} else if (light === 'red') {
   console.log('STOP');
} else {
   console.log('Sugedo :(');
}