console.clear();
/*
FIZZ BUZZ
1. Skaičius nuo 1 iki 100.
2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";

*/

/*
5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";

6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".
7. Skaičiai, kurie dalinasi iš 11, turi būti pakeisti į žodį „Bizz".
*/

var startDate = new Date();
// Do your operations

function fizzBuzz() {
   for (let i = 1; i <= 100; i++) {
      if (i % 7 == 0 && i % 5 == 0 && i % 3 == 0) {
         console.log('FizzBuzzBiff');
      } else if (i % 5 == 0 && i % 3 == 0) {
         console.log('FizzBuzz');
      } else if (i % 7 == 0 && i % 5 == 0) {
         console.log('BuzzBiff');
      } else if (i % 7 == 0 && i % 3 == 0) {
         console.log('FizzBiff');
      } else if (i % 11 == 0) {
         console.log('Bizz');
      } else if (i % 9 == 0) {
         console.log('Fuzz');
      } else if (i % 7 == 0) {
         console.log('Biff');
      } else if (i % 5 == 0) {
         console.log('Buzz');
      } else if (i % 3 == 0) {
         console.log('Fizz');
      } else {
         console.log(i);

      }
   }
}

fizzBuzz();

var endDate = new Date();
var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

console.log(seconds);


var startDate = new Date();
// Optimizavimas NR.1 
function fizzBuzz2() {
   for (let i = 0; i <= 100; i++) {
      let output = '';
      if (i % 11 === 0) {
         output += 'Bizz';
      }
      if (i % 9 === 0) {
         output += 'Fuzz';
      }
      if (i % 7 === 0) {
         output += 'Biff';
      }
      if (i % 5 === 0) {
         output += 'Buzz';
      }
      if (i % 3 === 0) {
         output += 'F1zz';
      }
      if (!output) {
         output = i;
      }
      console.log(output);
   }
}
fizzBuzz2();
var endDate = new Date();
var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
console.log(seconds);

// Optimizavimas NR.2
var startDate = new Date();
function fizzBuzz3() {
   for (let i = 0; i <= 100; i++) {
      let output = '';
      if (i % 11 === 0) output += 'Bizz';

      if (i % 9 === 0) output += 'Fuzz';
      if (i % 7 === 0) output += 'Biff';
      if (i % 5 === 0) output += 'Buzz';
      if (i % 3 === 0) output += 'F1zz';
      if (!output) output = i;
      console.log(output);
   }
}

fizzBuzz3();

var endDate = new Date();
var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
console.log(seconds);

/*
fizzBuzz2() optimizavimo esme - prie turimos salygos (jei ji atitinka) prideti zodi; Veikimo principas:
let str = 'labas';
str += ' rytas';
str += '.'
console.log(str);
*/



