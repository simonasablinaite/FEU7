console.clear();

// Pagal amžių surašyti į kurią klasę eina mokinys:
// Jei nurodytas ne skaicius grazinti zinute - amzius privalo buti skaicius:
// let childAge = 5

// let childAge = prompt("Įveskite amžių", "");
let childAge = 5;

if (isNaN(childAge)) {
   console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.');
}
else if (childAge < 0) {
   console.log('įvestas amžius yra per mažas');
} else if (childAge < 6) {
   console.log('Į mokyklą neina');
} else if (childAge < 7) {
   console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
} else if (childAge < 10) {
   console.log('Eina Į pradinę klasę');
} else if (childAge < 11) {
   console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas');
} else if (childAge < 14) {
   console.log('Eina į pagrindinę');
} else if (childAge < 15) {
   console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
} else if (childAge < 18) {
   console.log('Eina į gimnaziją');
} else if (childAge < 19) {
   console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
} else if (childAge > 120) {
   console.log('įvestas amžius yra per didelis.');
} else {
   console.log('Mokyklą baigė.');
}


