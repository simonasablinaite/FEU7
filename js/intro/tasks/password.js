/* 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."
*/

const password = '   542 8hyt4i 4l2po557  2553   ';
const passwordLength = password.length;

if (passwordLength < 16) {
   console.log('Slaptažodis yra per trumpas.');
} else if (passwordLength > 15) {
   if (passwordLength > 20) {
      console.log('Slaptažodis tinkamas.');
   } else {
      console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
   }
}
console.log(passwordLength);

console.log('***antras variantas***');
const trimmedPassword = password.trim();
const lengthWithTrim = trimmedPassword.length;

if (lengthWithTrim < 16) {
   console.log('Slaptažodis yra per trumpas.');
} else if (lengthWithTrim > 15) {
   if (lengthWithTrim > 20) {
      console.log('Slaptažodis tinkamas.');
   } else {
      console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
   }
}
console.log(lengthWithTrim);

console.log('***trecias variantas***');
const passwordRegexp = password.replace(/\s/g, '');
const passwordRegexpLength = passwordRegexp.length;

if (passwordRegexpLength < 16) {
   console.log('Slaptažodis yra per trumpas.');
} else if (passwordRegexpLength > 15) {
   if (passwordRegexpLength > 20) {
      console.log('Slaptažodis tinkamas.');
   } else {
      console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
   }
}
console.log(passwordRegexpLength);