/*
UŽDUOTIS: sukurti galvosūkį su keletu klausimu
PIRMAS LYGIS:
1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

 

1. Patekai i kita lygi: abu atsakymai teisingi.
2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.
*/

// Pirmas lygis:
// 1. klausimas: "Kiek dienų metuose yra keliamaisiais metais?" 
const firstLevelAnswer1 = 366;

// 2. klausimas: "Kokia proga minima rugsėjo 13d?"
const firstLevelAnswer2 = 'Programuotoju diena';

// Antras lygis:
// 1. klausimas: "Kas yra HTML?"
const secondaryLevelAswer1 = "Kompiuterinė žymėjimo kalba";

// 2. klausimas: "Kaip vadinamas gyvūnas ir programavimo kalba?"
const secondaryLevelAswer2 = 'Python';

let firstLevelPlayerAnwer1 = '';
let firstLevelPlayerAnwer2 = '';

let secondaryLevelPlayerAnwer1 = '';
let secondaryLevelPlayerAnwer2 = '';

if (firstLevelAnswer1 == firstLevelPlayerAnwer1 && firstLevelAnswer2 == firstLevelPlayerAnwer2) {
   console.log('Patekai i kita lygi: abu atsakymai teisingi.');
} else if (firstLevelAnswer1 !== firstLevelPlayerAnwer1 && firstLevelAnswer2 == firstLevelPlayerAnwer2) {
   console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.');
} else if (firstLevelAnswer1 == firstLevelPlayerAnwer1 && firstLevelAnswer2 !== firstLevelPlayerAnwer2) {
   console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.');
} else {
   console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.');
}

