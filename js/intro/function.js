console.clear();
console.log('labas');

/*UŽDUOTIS:

Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:

1. 10 ilgis ir 10 plotis.

2. 10 ilgis ir 25 plotis.

3. 10 ilgis ir 30 plotis.

4. 10 ilgis ir 35 plotis.

5. 10 ilgis ir 40 plotis.

6. 10 ilgis ir 45 plotis.

7. 10 ilgis ir 50 plotis.

8. 10 ilgis ir 55 plotis.

9. 10 ilgis ir 60 plotis.

10. 10 ilgis ir 120 plotis.
*/

console.log('Perimetras: ' + (10 + 10) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 25) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 30) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 35) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 40) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 45) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 50) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 55) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 60) * 2 + ' cm.');
console.log('Perimetras: ' + (10 + 120) * 2 + ' cm.');

// DRY - dont repeat yourself

// Funkcijos:
// FUNKCIJOS SUKURIMAS:
// 1. iniciavimo zodis (function);
// 2. funkcijos pavadinimas;
// 3. Parametru/argumentu blokas ();
// 4. Logikos blokas/ funkcijos apibrezimas {};

function hello() {
   console.log('Hello!');
}

hello();

// FUNKCIJOS ISKVIETIMAS:
// 1. funkcijos pavadinimas;
// 2. paprasti skliaustai;

function helloWithName(userName, userLastName) {
   console.log(`Hello, ${userName} ${userLastName}`);
}

helloWithName('Jonai', 'Jonaiti');
helloWithName('Petrai', 'Petraiti');
helloWithName('Maryte', 'Melnikaite');

function perimetras(ilgis, plotis, units) {

   console.log(`Perimetras: ${ilgis} + ${plotis} * 2 ${units}. = ${(ilgis + plotis) * 2} ${units}`);
}

perimetras(10, 10, 'cm');
perimetras(10, 25, 'cm');
perimetras(10, 30, 'cm');
perimetras(10, 35, 'cm');
perimetras(10, 40, 'cm');
perimetras(10, 45, 'cm');
perimetras(10, 50, 'cm');
perimetras(10, 55, 'cm');
perimetras(10, 60, 'cm');
perimetras(10, 120, 'cm');


