console.clear();
console.log('**********');
let num = 1;
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');
console.log('-', num++ + '!');

function count(num) {
   console.log('-', num + '!');
}

count(1);

/*
// FOR CIKLAS (LOOP)
1. Iniciavimo zodelis - for
2. Paprasti skliaustai - ();
2.1. Sukuriamas kintamasis (dazniausiai vadinamas i). Seka kelinta dabar yra iteracija;
2.2. Salyga. Ties kuria vieta nutraukti cikla.
2.3. Kintamojo vertes keitimas. Didinimas vienu vienetu iki kol tenkins salyga (i++)
3. Riestiniai skliaustai - {};

for (kintamasis; salyga; kintamojo vertes pakeitimas) {
   
}
*/
console.clear();

console.log('-----------');
for (let i = 1; i <= 20; ++i) {
   console.log(i);
};

console.log('-----------');
for (let i = 1; i <= 20; ++i) {
   return `- i!`;
};



