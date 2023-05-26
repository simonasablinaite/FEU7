console.clear();

/*
Užduotis 1:
1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
2. Funkcija turi priimti du argumentus (ilgį ir plotį).
3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
4. Į konsolę išvesti šios funkcijos rezultatą.
*/

function rectangle(height, width, units) {
   const answer = width * height;
   return `Staciakampio plotas yra: ${answer} kv. ${units}.`;
}

console.log(rectangle(2, 5, 'm'));

/*
Užduotis 2:
Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.
*/

function triangle(width, height, units) {
   return `Staciojo trikampio plotas yra: ${(width * height) / 2} ${units}`;
}

console.log(triangle(10, 35, 'cm'));

/*
Užduotis 3:
Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.
*/
function allData(width, height, units) {
   const rectgl = rectangle(width, height, units);
   const tringl = triangle(width, height, units);

   return `${rectgl}, o ${tringl}`;
}
console.log(allData(15, 255, 'cm')); 