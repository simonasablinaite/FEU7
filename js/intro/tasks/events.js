//  Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers":
const numbersDOM = document.querySelector('#numbers');

// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus:
const number = document.createElement('h3');
const buttonPlus = document.createElement('button');
const buttonMinus = document.createElement('button');

// 3. h3 elemento tekstas turėtų būti „5"
number.textContent = 5;
buttonColor();

// 4. Mygtukų tekstas turėtų būti „+" ir „-"
buttonPlus.textContent = '+';
buttonMinus.textContent = '-';

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti
buttonPlus.addEventListener('click', () => {
   number.textContent = Number(number.textContent) + 1;
});

buttonMinus.addEventListener('click', () => {
   number.textContent -= 1;
});

numbersDOM.append(number, buttonPlus, buttonMinus);

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled'):
buttonMinus.addEventListener('click', () => {
   if (Number(number.textContent) <= 1) {
      buttonMinus.setAttribute('disabled', true);
   }
   buttonPlus.removeAttribute('disabled')
   buttonColor();
});

// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)
buttonPlus.addEventListener('click', () => {
   if (Number(number.textContent) >= 10) {
      buttonPlus.setAttribute('disabled', true)
   }
   buttonMinus.removeAttribute('disabled')
   buttonColor();
});

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.
function buttonColor() {
   if (Number(number.textContent) >= 5) {
      number.style.color = 'green';
   } else {
      number.style.color = 'red';
   }
}

// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
numbersDOM.after(resetBtn);

resetBtn.addEventListener('click', () => {

})
// 12. Sukurti du naujus mygtukus, kurie:
const plus2 = document.createElement('button');
const minus2 = document.createElement('button');

numbersDOM.append(plus2, minus2);

// 12.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
plus2.textContent = '+2';

function countMinus2() {
   number.textContent = Number(number.textContent) + 2;
}

plus2.addEventListener('click', () => {
   countMinus2();
});

// 12.2. Atima dvejetą iš esamos h3 elemento reikšmės.
minus2.textContent = '-2';

minus2.addEventListener('click', () => {
   number.textContent -= 2;
});










