/*
Pasisveikinimas
1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning...".
3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
3.1. 5-12 val. „Good Morning"
3.2. 13-18 val. „Good Afternoon"
3.3. 19-4 val. „Good Evening"
4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"
*/

console.clear();
const userName = 'Luk';
const isLoggedIn = true;
let time = 22;
const isBirthday = true;

const morning = time > 4 && time < 13;
const afternoon = time > 12 && time < 19;
const evening = time < 5 && time > 0 || time > 18 && time < 24;

if (isLoggedIn && morning) {
   if (isBirthday) {
      console.log(`„Good Morning, ${userName} and have a great birthday!"`);
   } else {
      console.log(`„Good Morning, ${userName}."`);
   }
} else if (isLoggedIn && afternoon) {
   if (isBirthday) {
      console.log(`„Good Afternoon, ${userName} and have a great birthday!"`);
   } else {
      console.log(`„Good Afternoon, ${userName}"`);
   }
} else if (isLoggedIn && evening) {
   if (isBirthday) {
      console.log(`„Good Evening, ${userName} and have a great birthday!"`);
   } else {
      console.log(`„Good Evening, ${userName}"`);
   }
} else {
   console.log('Hello..');
}