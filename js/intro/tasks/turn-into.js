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