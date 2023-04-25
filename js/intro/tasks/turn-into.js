console.clear();

/*
Sukurti:
1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
1.1. Funkcija priima vieną parametrą: žmogaus amžius.
1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.
*/

function humanYearsToDogs(humanYears) {
   const dogYear = 7;
   console.log(`${humanYears} zmogaus metai yra ${humanYears * dogYear} suns metai`);
}

humanYearsToDogs(5);
/*
2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.
*/

function howLongToRead(numberOfReadBooks) {
   console.log(`Norint perskaityti ${numberOfReadBooks} knygas, (-u) per metus, vienai knygai perskaityti turesi ${(366 / numberOfReadBooks).toFixed(0)} dienas, (-u).`);
}

howLongToRead(3);

/*
3. Funkciją, kuri konvertuoja dienas į savaites:
3.1. Funkcija priima vieną argumentą: dienų skaičių.
3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.
*/

function daysToWeek(days) {
   console.log(`${days} dienos, (-u) yra ${days / 7} savaite, (-es)`);
}

daysToWeek(14);
/*
4. Funkciją, kuri konvertuoja dienas į metus:
4.1. Funkcija priima vieną argumentą: dienų skaičių.
4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.
*/

function daysToYears(days) {
   console.log(`${days} dienos yra ${(days / 365).toFixed(0)} metai, (-u)`);
}

daysToYears(45768);

/*
5. Funkciją, kuri konvertuoja metus į valandas:
5.1. Funkcija priima vieną argumentą: metų skaičių.
5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.
*/

function yearsToHours(years) {
   console.log(`${years} metai turi ${years * 365 * 24} valandas`);
}
yearsToHours(8);

/*
6. Funkciją, kuri konvertuoja mėnesius į valandas:
6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.
*/

function monthToHours(months) {
   console.log(`${months} menesiai turi ${(months * 30.42 * 24).toFixed(0)} valandas`);
}

monthToHours(3);

/*
7. Funkciją, kuri konvertuoja mėnesius į minutes:
7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.
*/

function monthsToMinutes(months) {
   console.log(`${months} menesiai turi ${(months * 30.42 * 24 * 60).toFixed(0)}`);
}

monthsToMinutes(2);

console.log('*************************');
/*
8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
8.1. Funkcija priima du argumentus: 
  8.1.1. Dienų skaičių.
  8.1.2. Formatą. Galimos formato reikšmės yra:
    8.1.2.1. minutes
    8.1.2.2. hours
    8.1.2.3. weeks
    8.1.2.4. months
    8.1.2.5. years
8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.
*/

function convertedDays(days, format = '') {
   const minutes = days * 24 * 60;
   const hours = days * 24;
   const weeks = days / 7;
   const months = days / 30.42;
   const years = days / 365;

   if (format == 'minutes') {
      return `Days to minutes: ${days} days - ${minutes} minutes`;
   } else if (format == 'hours') {
      return `Days to hours: ${days} days - ${hours} minutes`;
   } else if (format == 'week') {
      return `Days to week: ${days} days - ${weeks} minutes`;
   } else if (format == 'months') {
      return `Days to months: ${days} days - ${months} minutes`;
   } else if (format == 'years') {
      return `Days to years: ${days} days - ${years} minutes`;
   }
}

console.log(convertedDays(5, 'minutes'));

/*
9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
9.1. Funkcija priima du argumentus: 
  9.1.1. Skaičių, kuris bus dalinamas (dalinys).
  9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
9.2. Funkcija grąžina atsakymą tokiu formatu:
  9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
  9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.
*/

function isDivisible(dalinys, daliklis) {
   if (dalinys % daliklis == 0) {
      return `${dalinys} dalijasi is ${daliklis}`;
   } else {
      return `skaicius ${dalinys} nesidalina is ${daliklis}. Liekana yra ${dalinys % daliklis}`;
   }
}

console.log(isDivisible(11, 5));
/*
10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.
*/

function oddOrEven(str) {
   let input = str.toUpperCase().replace(/ /, '');

   if (input.length % 2 == 0) {
      return `'${input}' turi porini raidziu skaiciu`;
   } else {
      return `'${input}' turi neporini raidziu skaiciu`
   }
}

console.log(oddOrEven('Labas rytas'));

/*
11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio. 
11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".
11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.
11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.
*/

function isWhichSymbol(str, symbol = '') {
   if (symbol > str.length) {
      return `Tekstas "${str}" turi ${str.length} simbolius, o Jus nurodete grazinti ${symbol}`
   }

   if (str) {
      return `Teksto "${str}" ${symbol} raide yra "${str.charAt(symbol - 1) || str.at(symbol)}"`
   }
}
console.log(isWhichSymbol('Labas', -1));

