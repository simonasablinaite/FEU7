console.clear();

/*
Užduotis 1:
1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
2. Funkcija turi priimti du argumentus (ilgį ir plotį).
3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
4. Į konsolę išvesti šios funkcijos rezultatą.
*/

function rectangle(length, width, measurement) {
   console.log(`Staciakampio plotas yra: ${length * width} ${measurement}`);
}

rectangle(2, 5, 'kv. vnt');

