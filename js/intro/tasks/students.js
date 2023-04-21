console.clear();

// Pagal amžių surašyti į kurią klasę eina mokinys:
let childAge = 11;


if (childAge < 0) {
   console.log('įvestas amžius yra per mažas');
} else if (childAge < 7) {
   console.log('Į mokyklą neina');
} else if (childAge < 11) {
   console.log('Eina Į pradinę klasę');
} else if (childAge < 15) {
   console.log('Eina į pagrindinę');
} else if (childAge < 19) {
   console.log('Eina į gimnaziją');
} else if (childAge > 120) {
   console.log('įvestas amžius yra per didelis.');
} else {
   console.log('Mokyklą baigė.');
}


