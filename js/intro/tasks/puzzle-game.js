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
const secondaryLevelAswer1 = "Kompiuterine zymejimo kalba";

// 2. klausimas: "Kaip vadinamas gyvūnas ir programavimo kalba?"
const secondaryLevelAswer2 = 'Python';

let firstLevelPlayerAnwer1 = 366;
let firstLevelPlayerAnwer2 = 'Programuotoju diena';

let secondaryLevelPlayerAnwer1 = 'Kompiuterine zymejimo kalba';
let secondaryLevelPlayerAnwer2 = 'Python';

console.log('****************************');
if (firstLevelAnswer1 == firstLevelPlayerAnwer1 && firstLevelAnswer2 == firstLevelPlayerAnwer2) {
   console.log('Patekai i kita lygi: abu atsakymai teisingi.');
} else if (firstLevelAnswer1 == firstLevelPlayerAnwer1) {
   console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.');
} else if (firstLevelAnswer2 == firstLevelPlayerAnwer2) {
   console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras teisingas.');
} else {
   console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.');
}

/* 
ANTRAS LYGIS:
1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.
*/

if (secondaryLevelAswer1 == secondaryLevelPlayerAnwer1 && secondaryLevelAswer2 == secondaryLevelPlayerAnwer2) {
   console.log('Patekai i kita lygi: abu atsakymai teisingi.');
} else if (secondaryLevelAswer2 == secondaryLevelPlayerAnwer2) {
   console.log('Pirmas atsakymas buvo neteisingas: "Kompiuterine zymejimo kalba');
} else if (secondaryLevelAswer1 == secondaryLevelPlayerAnwer1) {
   console.log('Antras atsakymas buvo neteisingas: "Python"');
} else {
   console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.');
}

/*
TREČIAS LYGIS: 
1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.
*/
console.clear();
const thirdAnswer1 = 1;
const thirdAnswer2 = '2';
const thirdAnswer3 = 3;

const thirdPlayerAnswer1 = 1;
const thirdPlayerAnswer2 = '';
const thirdPlayerAnswer3 = '';

if (thirdAnswer1 == thirdPlayerAnswer1 && thirdAnswer2 == thirdPlayerAnswer2 && thirdAnswer3 == thirdPlayerAnswer3) {
   console.log('Patekai i kita lygi: visi atsakymai teisingi.');
} else if (thirdAnswer1 == thirdPlayerAnswer1 && thirdAnswer2 == thirdPlayerAnswer2) {
   console.log('Neatsakytas trecias klausimas');
} else if (thirdAnswer1 == thirdPlayerAnswer1 && thirdAnswer3 == thirdPlayerAnswer3) {
   console.log('Neatsakytas antras klausimas');
} else if (thirdAnswer2 == thirdPlayerAnswer2 && thirdAnswer3 == thirdPlayerAnswer3) {
   console.log('Neatsakytas pirmas klausimas');
} else if (thirdAnswer1 == thirdPlayerAnswer1) {
   console.log('Atsakytas pirmas klausimas');
} else if (thirdAnswer2 == thirdPlayerAnswer2) {
   console.log('Atsakytas antras klausimas');
} else if (thirdAnswer3 == thirdPlayerAnswer3) {
   console.log('Atsakytas trecias klausimas');
} else {
   console.log('NEATSAKYTAS NEI VIENAS KLAUSIMAS');
}
