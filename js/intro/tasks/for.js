console.clear();
console.log('*******1 ir 2*************')
/*
Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
1. Padaugina skaičių iš 2.
2. Padaugina skaičių iš 5.
*/

// Be f-jos pakaktu parasyti taip:
/*
for (let i = 1; i <= 100; i++) {
   console.log(`${i} * 2 = ${i * 2}`)
}*/

function task1(start, end, numb) {
   let num = 2;
   for (let i = start; i <= end; i++) {
      console.log(`${start} * ${end} = ${start * end}`)
   }
}

task1(0, 5);
console.log('end...');

console.log('***********************');
function task2() {
   let num = 5;
   for (let i = 1; i <= 100; i++) {
      console.log(`${i} * ${num} = ${i * num}`)
   }
}
task2();
console.log('end...');

console.log('******3 ir 4********');

/*
3. Prideda prie skaičiaus 5.
4. Atima iš skaičiaus 2.
*/

function task3() {
   let num = 5;
   for (let i = 1; i <= 100; i++) {
      console.log(`${i} + ${num} = ${i + num}`)
   }
}
task3();
console.log('end...');

console.log('***********************');
function task4() {
   let num = 2;
   for (let i = 1; i <= 100; i++) {
      console.log(`${i} - ${num} = ${i - num}`)
   }
}
task4();
console.log('end...');

console.log('***********************');
/*
5. Pakelia skaičių kvadratu.
6. Pakelia skaičių kūbu.
*/

function task5() {
   let num = 2;
   for (let i = 1; i <= 100; i++) {
      console.log(`${i} ** ${num} = ${i ** num}`)
   }
}
task5();
console.log('end...');

console.log('***********************');
function task6() {
   let num = 3;
   for (let i = 1; i <= 100; i++) {
      console.log(`${i} ** ${num} = ${i ** num}`)
   }
}
task6();
console.log('end...');

console.log('***********************');

/*
7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.
*/

function task7_1() {
   let num = 2;
   for (let i = 100; i > 0; i--) {
      console.log(`${i} * ${num} = ${i * num}`)
   }
}

task7_1();
console.log('end...');


console.log('***********************');
function task7_2() {
   let num = 5;
   for (let i = 100; i > 0; i--) {
      console.log(`${i} * ${num} = ${i * num}`)
   }
}
task7_2();
console.log('end...');

console.log('***********************');
function task7_3() {
   let num = 5;
   for (let i = 100; i > 0; i--) {
      console.log(`${i} + ${num} = ${i + num}`)
   }
}
task7_3();
console.log('end...');

console.log('***********************');
function task7_4() {
   let num = 2;
   for (let i = 100; i > 0; i--) {
      console.log(`${i} - ${num} = ${i - num}`)
   }
}
task7_4();
console.log('end...');

console.log('***********************');
function task7_5() {
   let num = 2;
   for (let i = 100; i > 0; i--) {
      console.log(`${i} ** ${num} = ${i ** num}`)
   }
}
task7_5();
console.log('end...');

console.log('***********************');
function task7_6() {
   let num = 3;
   for (let i = 100; i > 0; i--) {
      console.log(`${i} ** ${num} = ${i ** num}`)
   }
}
task7_6();
console.log('end...');

/*
9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:
9.1. Nusakytų nuo kokio skaičiaus prasidės ciklas.
9.2. Nusakytų iki kokio skaičiaus veiks ciklas.
9.3. Nusakytų kelinto ciklo metu turi išvesti atsakymą į konsolę.
*/

