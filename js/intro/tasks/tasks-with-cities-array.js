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
      touristAttractions: ['Laisves statula'],
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

console.log('*****1BUDAS*****');
// Pirmas budas: visos isvestys rasomos atskirame cikle (daug ciklu - nepraktiska)
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
   for (let j = 0; j < cities[i].touristAttractions.length; j++) {
      console.log(cities[i].touristAttractions[j]);
   }
} //budas, kai isvedamos visos masyvo isvestys kartu

console.log('*****2BUDAS*****');
// Antras budas: Panaudoti viena cikla visiems logams issivesti:
for (let i = 0; i < cities.length; i++) {
   console.log(cities[i]);
   console.log(cities[i].name);
   console.log(`${cities[i].name} populiacija yra: ${cities[i].population}`);
   console.log(`${cities[i].name} zemynas yra: ${cities[i].location.continent}`);
   console.log(`${cities[i].name} salis yra: ${cities[i].location.country}`);
   console.log(`Ar ${cities[i].name} yra sostine: ${cities[i].isCapital}`);
   console.log(`${cities[i].name} lankytinos vietos yra: ${cities[i].touristAttractions.join(', ')}`);

   for (let j = 0; j < cities[i].touristAttractions.length; j++) {
      console.log(cities[i].touristAttractions[j]);
   }
}
console.clear();
console.log('*****3BUDAS*****');
// Trecias budas: Panaudoti map visiems logams issivesti:
cities.forEach(city => {
   console.log(city);
   console.log(city.name);
   console.log(`${city.name} populiacija yra: ${city.population}`);
   console.log(`${city.name} zemynas yra: ${city.location.continent}`);
   console.log(`${city.name} salis yra: ${city.location.country}`);
   console.log(`Ar ${city.name} yra sostine: ${city.isCapital}`);
   console.log(`${city.name} lankytinos vietos yra: ${city.touristAttractions.join(', ')}`);

   city.touristAttractions.forEach(attraction => console.log(attraction));
})

console.log('*****4BUDAS*****');
// ketvirtas budas - map metodas su destrukturizavimu:
console.log(cities);
cities.forEach(city => {
   let { name, population, isCapital, touristAttractions } = city;
   let { continent, country } = city.location;

   console.log(name);
   console.log(`${name} populiacija yra: ${population}`);
   console.log(`${name} zemynas yra: ${continent}`);
   console.log(`${name} salis yra: ${country}`);
   console.log(`Ar ${name} yra sostine: ${isCapital}`);
   console.log(`${name} lankytinos vietos yra: ${touristAttractions.join(', ')}`);

   city.touristAttractions.forEach(attraction => console.log(attraction));
})
console.clear();
// 5 budas - mapas analogioja forEachui tik plius, sukurta kaip funkcijos:

// Sestas budas - su funkcijomis:
console.log('*****6BUDAS*****');

const allCities = (cities) => cities.map(city => city);
console.log(allCities(cities));

const cityName1 = (cities) => cities.map(city => city.name);
console.log(cityName1(cities));

const population = (cities) => cities.map(city => city.population);
console.log(population(cities));

const continent = (cities) => cities.map(city => city.location.continent);
console.log(continent(cities));

const country = (cities) => cities.map(city => city.location.country);
console.log(country(cities));

const isCapital = (cities) => cities.map(city => city.isCapital);
console.log(isCapital(cities));

const tourustAttractions = (cities) => cities.map(city => city.touristAttractions);
console.log(tourustAttractions(cities));

function cityName2(cities) {
   for (let i = 0; i < cities.length; i++) {
      console.log(cities[i].name);
   }
}
console.log(cityName2(cities)); // isspausdina kas nurodyta + viena undefined. Kas tas undefined is kur jis ateina ir kodel?

/*
2. HTML faile sukurti tuščią div elementą, kuriame bus atvaizduoti visi miestai.
2.1. Panaudojant ciklą, atvaizduoti visus miestus ekrane pagal nurodytą stilių.
*/

/*
3.1. Jeigu miestas yra sostinė, tai:
3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."
3.1.3. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".
*/

/*
4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.
*/

function citiesList(cities) {
   const citiesList = document.querySelector('#citiesList');

   cities.map(city => {
      const { name, population, isCapital, touristAttractions } = city;
      const { continent, country } = city.location;

      const isCapitalCity = () => city.isCapital ? `${name} (Capital)` : '';
      const cityDescription = () => city.isCapital ? `${name} is the capital of ${country}.` : '';
      const className = 'class="capital"';
      const addClass = () => isCapital ? className : '';

      let attractionsList = [];
      touristAttractions.map(attraction => attractionsList.push(`<li>${(attraction)}</li>`))

      const attractionsText = (text) => {
         if (touristAttractions.length > 1) {
            return text = `Main Tourist attractions of ${name} are:`;
         } else if (touristAttractions.length = 1) {
            return text = `Main Tourist attraction of ${name} is:`
         } else {
            return text = '';
         }
      }

      citiesList.innerHTML += `
                              <div class='cityItem'>
                               <h2 ${addClass()}> ${isCapitalCity()}</h2>
                               <p>${cityDescription()} ${name} city is located in ${continent}, ${country} and has population of ${population} people.</p>
                               <h3>${attractionsText()}</h3>
                               ${attraction}
                               </div>`
   })
}

citiesList(cities);

console.clear();
/*
5. Naudojant tik JavaScript:
5.1. Pakeisti visų sostinių teksto spalvą.
5.2. Pakeisti kas antro miesto fono spalvą.
5.3. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
5.4. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.
*/

function styleCities() {
   let cityTitles = document.querySelectorAll('.capital');
   cityTitles.style.color = 'red'
   console.log(cityTitles.style.color);
}

styleCities();

