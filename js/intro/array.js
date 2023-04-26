console.clear();

const array = [5, 100, -5, 54.45, 'labas'];

for (let i = 0; i < array.length; i++) {
   console.log(array[i]);
}

let numsArr = [1, 5, 10, 15];

console.log(numsArr);
console.log(numsArr[1]);

// Masyve esancios reiksmes pakeitimas
numsArr[1] = 50;

// Naujo nario pridejimas i masyva:
numsArr[numsArr.length] = 100;
console.log(numsArr);

// Metodai reiksmes pridejimui i masyva: pop(). push(), shift(), unshift():
const cities = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys'];
console.log(cities);
// POP() - pasalina paskutini masyvo nari
const lastCity = cities.pop();
console.log(lastCity);

// Grazina pasalinta elemeta
console.log(cities.pop());
console.log(cities);

// Masyvas jau be pasalinto elemento
console.log(cities);

// SHIFT() metodas pasalina pirma masyvo nari.
const firstCity = cities.shift();
console.log(firstCity);
console.log(cities);

// Push() prideda nauja masyvo nari ar narius i masyvo gala ir grazina nauja masyva jau su pridetais elementais:
cities.push('Mazeikiai');
console.log(cities);

cities.push('Alytus', 'Marijampole');
console.log(cities);

// UNSHIFT() metodas prideda nauja nari/narius i masyvo pradzia:
cities.unshift('Palanga');
console.log(cities);

cities.unshift('Vilnius', 'Pasvalys');
console.log(cities);

console.log('***********************************');
// SLICE() - grazina nauja masyva ir nemodifikuoja originalaus masyvo

let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
console.log(countries);

let slicedCountries1 = countries.slice();
console.log(slicedCountries1);

let slicedCountries2 = countries.slice(0);
console.log(slicedCountries2);

let slicedCountries3 = countries.slice(2);
console.log(slicedCountries3);

let slicedCountries4 = countries.slice(2, 4);
console.log(slicedCountries4);

let slicedCountries5 = countries.slice(0, 3);
console.log(slicedCountries5);

let slicedCountries6 = countries.slice(-4);
console.log(slicedCountries6);

let slicedCountries7 = countries.slice(-4, -2);
console.log(slicedCountries7);

let slicedCountries8 = countries.slice(-4, 2);
console.log(slicedCountries8);

let slicedCountries9 = countries.slice(-3, 2);
console.log(slicedCountries9);

let slicedCountries10 = countries.slice(2, -2);
console.log(slicedCountries10);

let slicedCountries11 = countries.slice(-2, -4);
console.log(slicedCountries11);

let slicedCountries12 = countries.slice(4, 2);
console.log(slicedCountries12);

/*
UZDUOTIS dirbant su pirkinių sąrašu (bent 7 pirkiniai):
Kiekvienam iš punktų sukurti po atskirą kintamąjį ir jame išsaugoti reikšmę. Šią reikšmę atvaizduoti konsolėje.
1. Išimti pirmus du pirkinius.
2. Išimti tris paskutinius pirkinius.
3. Išimti ketvirtą ir penktą pirkinį.
4. Išimti antrą ir trečią pirkinį.
5. Išimti visus, išskyrus pirmą pirkinį.
*/
console.clear();
const purchases = ['pienas', 'kiausiniai', 'sviestas', 'uogiene', 'duona', 'pomidorai', 'salotos'];
console.log('************************');
const task1 = purchases.slice(0, 2); // 0,2
console.log(task1);

const task2 = purchases.slice(-3);
console.log(task2);

const task3 = purchases.slice(3, 5);
console.log(task3); //netinka

const task4 = purchases.slice(1, 3);
console.log(task4); // netinka

const task5 = purchases.slice(1);
console.log(task5);


// SPLICE - modifikuoja originalu masyva
// pirmas skaicius nuo kur skaiciuoti, antras - kiek iskirpti i desine puse
const num = [1, 2, 3, 4, 5, 6, 7, 10];
console.log(num);

const splicedNums = num.splice(-3, 2, 2)
console.log(splicedNums);

/*
Sukurti 10-ties filmų masyvą ir iš jo:

1. Išimti pirmus 5 filmus.
2. Išimti 4 paskutinius filmus.
3. Išimti nuo trečio iki septinto filmo.
4. Išimti antrą ir trečią filmą.
5. Išimti visus, išskyrus pirmą filmą.
6. Išimti 5 filmus skaičiuojant nuo trečio.
7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.

8. Vietoje penkto filmo įrašyti du naujus filmus.
9. Pašalinti pirmą filmą.
10. Įrašyti naują filmą į masyvo pradžią.
*/
;
const filmai = ['Pjuklo ketera', 'Vakaru fronte nieko naujo', 'Simpsonu filmas', 'Avataras', 'Kakes makes filmas😂', 'Juodoji pantera. Vakanda', 'Zalioji mylia', 'Greiti ir isiute', 'Baltasis varnas']
console.log(filmai);

const filmai1 = filmai.slice(0, 5);
console.log(filmai1);

const filmai2 = filmai.slice(-4);
console.log(filmai2);

const filmai3 = filmai.slice(2, 7);
console.log(filmai3);

const filmai4 = filmai.slice(1, 3);
console.log(filmai4);

const filmai5 = filmai.slice(1);
console.log(filmai5);

const filmai6 = filmai.slice(2, 7);
console.log(filmai6);

const filmai7 = filmai.slice(-4, -1);
console.log(filmai7);

const filmai8 = filmai.splice(4, 1, "Vanga", 'Filmas12');
console.log(filmai8);
console.log(filmai);

const filmai9 = filmai.shift();
console.log(filmai9);
console.log(filmai);

const filmai10 = filmai.unshift('Zero');
console.log(filmai10);
console.log(filmai);

console.clear();
/*
11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.
*/

const filmai11 = filmai.slice(1, 4);
console.log(filmai11);

const filmai12 = filmai.slice(-4, -1);
console.log(filmai12);

// const joinMoves = filmai11.concat(filmai12).reverse();

const joinMoves = [...filmai11, ...filmai12].reverse();
console.log(joinMoves);


// Dirbti su šiuo masyvu:

[4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

/*
1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.

1.1. Pašalinti pirmą masyvo narį.

1.2. Pašalinti paskutinį masyvo narį.

1.3. Rasti vidurinį masyvo narį ir jį pašalinti.

1.4. Pašalinti priešpaskutinį masyvo narį.

1.5. Pašalinti antrą masyvo narį.

1.6. Pašalinti 7 ir 8 masyvo narius.

1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.

1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.

1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.

1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.

1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.

1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.

1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.

1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.

1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.

1.16. Į masyvo vidurį pridėti skaičių 0.

1.17. Pašalinti pirmą masyvo narį.

1.18. Pašalinti paskutinį masyvo narį.

1.19. Į masyvo pradžią pridėti žodį "start".

1.20. Į masyvo pabaigą pridėti žodį "end".

 

Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:

['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']






*/
