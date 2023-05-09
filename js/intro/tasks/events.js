/* Užduotis:
1. Sukurti HTML elementą, kurio id „numbers":
2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus:
3. h3 elemento tekstas turėtų būti „5"
4. Mygtukų tekstas turėtų būti „+" ir „-"
5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti
7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled'):
8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)
9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.
10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.
11. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.
12. Sukurti du naujus mygtukus, kurie:
12.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
12.2. Atima dvejetą iš esamos h3 elemento reikšmės.
13. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
13.1. Šio elemento tekstas turėtų būti „Balai:"
14. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
14.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
14.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį prepend'inti prie ul elemento.
*/

// Sukurti kintamieji
const numbersDOM = document.querySelector('#numbers');
const number = document.createElement('h3');
const buttonPlus = document.createElement('button');
const buttonMinus = document.createElement('button');

const resetBtn = document.createElement('button');
const plus2 = document.createElement('button');
const minus2 = document.createElement('button');

// Kintamieji prideti i numbers elementa:
numbersDOM.append(number, buttonPlus, buttonMinus, plus2, minus2);
numbersDOM.after(resetBtn);

// Prideti contentai kintamiesiems:
// Sukuriamas kintamasis stringui pakeisti i skaiciu:
let count = 5;
checkedData(0);
number.textContent = count;


buttonPlus.textContent = '+';
buttonMinus.textContent = '-';
plus2.textContent = '+2';
minus2.textContent = '-2';

resetBtn.textContent = 'Reset';

// EVENTAI ir FUKCIJOS:
// Sukuriami keturi eventai keturiems mygtukams:

buttonPlus.addEventListener('click', checkedData(1));
plus2.addEventListener('click', checkedData(2));
buttonMinus.addEventListener('click', checkedData(-1));
minus2.addEventListener('click', checkedData(-2));

function buttonColor() {
   if (count >= 5) {
      number.style.color = 'green';
   } else {
      number.style.color = 'red';
   }
}

function checkedData(changeNum) {
   count += changeNum;
   number.textContent = count;
   if (count >= 10) {
      buttonPlus.setAttribute('disabled', true);
   } else {
      buttonPlus.removeAttribute('disabled');
   }
   if (count >= 9) {
      plus2.setAttribute('disabled', true);
   } else {
      plus2.removeAttribute('disabled');
   }
   if (count > 1) {
      buttonMinus.removeAttribute('disabled');
   } else {
      buttonMinus.setAttribute('disabled', true);
   }
   if (count > 2) {
      minus2.removeAttribute('disabled');
   } else {
      minus2.setAttribute('disabled', true);
   }
   buttonColor();
}












