console.clear();
/*
1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
1.1. name - miesto pavadinimas (string)
1.2. population - miesto populiacija (number)
1.3. location - (object)
   1.3.1. continent - žemynas (string)
   1.3.2. country - šalis (string)
1.4. touristAttractions - lankytinos vietos (array)
1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)
*/

const cities = [
   {
      name: 'Vilnius',
      population: 581475,
      location: {
         continent: 'Europa',
         country: 'Lietuva',
      },
      touristAttractions: ['Gedimino pilis', 'Tv bokstas', 'Stiklo kvartalas'],
      isCapital: true,
   },
   {
      name: 'Nida',
      population: 3903,
      location: {
         continent: 'Europa',
         country: 'Lietuva',
      },
      touristAttractions: ['Parnidzio kopa', 'Nidos svyturys', 'Benas'],
      isCapital: false,
   },
   {
      name: 'Roma',
      population: 4298,
      location: {
         continent: 'Europa',
         country: 'Italija',
      },
      touristAttractions: ['Koliziejus', 'Panteonas', 'Trevi fontanas'],
      isCapital: true,
   },
   {
      name: 'Tokijas',
      population: 37339804,
      location: {
         continent: 'Azija',
         country: 'Japonija',
      },
      touristAttractions: ['Imperatoriskieji rumai', 'Sintoistu sventykla', 'Tokio Sky Tree'],
      isCapital: true,
   },
   {
      name: 'Venecija',
      population: 639000,
      location: {
         continent: 'Europa',
         country: 'Italija',
      },
      touristAttractions: ['Rialto tiltas', 'Sv. Morkaus bazilika', 'Dozu rumai'],
      isCapital: false,
   },
   {
      name: 'Kairas',
      population: 21750020,
      location: {
         continent: 'Afrika',
         country: 'Egiptas',
      },
      touristAttractions: ['Gizos piramides', 'Sfinkso skulpturos', 'Kairo bokstas'],
      isCapital: true,
   },
   {
      name: 'Niujorkas',
      population: 23000000,
      location: {
         continent: 'Amerika',
         country: 'JAV',
      },
      touristAttractions: ['Centrinis parkas', 'Empire State Building', 'Laisves statula'],
      isCapital: false,
   },
   {
      name: 'San Paulas',
      population: 12330000,
      location: {
         continent: 'Pietu Amerika',
         country: 'Brazilija',
      },
      touristAttractions: ['Zoologijos sodas', 'Ibirapueros parkas', 'San Paulo meno muziejus'],
      isCapital: false,
   },
   {
      name: 'Havajai',
      population: 1442000,
      location: {
         continent: 'Amerika',
         country: 'JAV',
      },
      touristAttractions: ['Havaju ugnikalniu nacionalinis parkas', 'Four Seasons Resort Hualalai', 'Iolani Palace'],
      isCapital: false,
   },
   {
      name: 'Kreta',
      population: 623065,
      location: {
         continent: 'Europa',
         country: 'Graikija',
      },
      touristAttractions: ['Elafonisi papludimys', 'Arkadijaus vienuolynas', 'Seitan Limania'],
      isCapital: false,
   },
]


// 1.6. Visus miestų masyvų narius išvesti į konsolę.
for (let i = 0; i < cities.length; i++) {
   console.log(cities[i]);
};

// 1.6.1. Visų miestų pavadinimus išvesti į konsolę.
for (let i = 0; i < cities.length; i++) {
   console.log(cities[i].name);
};

// 1.6.2. Visų miestų populiaciją išvesti į konsolę.
for (let i = 0; i < cities.length; i++) {
   console.log(`${cities[i].name} populiacija yra: ${cities[i].population}`);
}
// 1.6.3. Visų miestų žemyną išvesti į konsolę.
for (let i = 0; i < cities.length; i++) {
   console.log(`${cities[i].name} zemynas yra: ${cities[i].location.continent}`);
}
// 1.6.4. Visų miestų šalį išvesti į konsolę.
for (let i = 0; i < cities.length; i++) {
   console.log(`${cities[i].name} salis yra: ${cities[i].location.country}`);
}
// 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
for (let i = 0; i < cities.length; i++) {
   console.log(`Ar ${cities[i].name} yra sostine: ${cities[i].isCapital}`);
}
// 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.
for (let i = 0; i < cities.length; i++) {
   console.log(`${cities[i].name} lankytinos vietos yra: ${cities[i].touristAttractions.join(', ')}`);
}


