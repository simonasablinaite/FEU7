console.clear();

/*
Užduotis 1:
1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
2. Funkcija turi priimti du argumentus (ilgį ir plotį).
3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
4. Į konsolę išvesti šios funkcijos rezultatą.
*/

function rectangle(height, width, units = 'vnt') {
   // console.log(`Staciakampio plotas yra: ${length * width} ${units}`);
   const answer = width * height;
   console.log(`Staciakampio plotas yra: ${answer} kv. ${units}.`);
}

rectangle(2, 5, '');

/*
Užduotis 2:
Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.
*/

function triangle(width, height, units) {
   console.log(`Staciojo trikampio plotas yra: ${(width * height) / 2} ${units}`);
}

triangle(10, 35, 'cm');

/*
Užduotis 3:
Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.
*/
function allData(width, height, units) {
   rectangle(width, height, units);
   triangle(width.height, units);
}
allData(10, 15, 'cm')