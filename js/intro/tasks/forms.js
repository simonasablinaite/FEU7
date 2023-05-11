/* ANTRA DALIS:
1. Sukurti div elementą, kuris turės id „students-list".
2. Kiekvieną kartą pridavus formą (submit), turi būti sukurtas naujas div elementas su klase „student-item" ir pridedamas į „students-list" elemento pradžią.
3. Duomenys apie studentą turi būti įdėti į „student-item" elementą. 

4. Formoje pridėti „checkbox" tipo input'ą, kuriame pateikta galimybę rinktis iš dominančių programavimo kalbų.
5. Dominančias programavimo kalbas atvaizduoti „student-item" elemente. */
/*
TREČIA DALIS:
1. Vietoje el. pašto rodyti tik žvaigždutes „****".
2. Kiekviename „student-item" elemente sukurti mygtuką „Rodyti asmens duomenis".
3. Paspaudus šį mygtuką:
    3.1. Parodyti to studento el. paštą.
    3.2. Pakeist mygtuko tekstą į „Slėpti asmens duomenis".
4. Jeigu asmens duomenys yra rodomi, tai paspaudus mygtuką:
    4.1. Paslėpti asmens el. paštą.
    4.2. Mygtuko tekstą pakeisti į „Rodyti asmens duomenis".
*/

// 6. Sukūrus studentą, turi iššokti <span> elementas, kuris informuoja apie studento sukūrimą: „Sukurtas studentas (Vardas Pavardė)". Šis span elementas dingsta po 5 sekundžių.

// 7. Range reikšmės atvaizdavimas naujame elemente.

/*
KETVIRTA DALIS (studento ištrynimas):
1. Prie kiekvieno sukurto studento elemento pridėti mygtuką „Ištrinti studentą".
2. Paspaudus šį mygtuką, studento elementas yra ištrinamas.
3. Ištrynus studentą, turi iššokti <span> elementas, kuris informuoja apie studento ištrynimą: „Studentas (Vardas Pavardė) sėkmingai ištrintas.". Šis span elementas dingsta po 5 sekundžių.

PENKTA UŽDUOTIS (formos validacija naudojant JavaScript):
1. Priduodant formą (submit) patikrinti ar privalomi laukeliai nėra tušti.
2. Jeigu bent vienas privalomas formos laukelis yra tuščias:
    2.1. Formos alert žinutėje reikia parašyti, jog ne visi laukeliai yra užpildyti. Šis tekstas turi būti raudonos spalvos.
    2.2. Kiekvienas privalomas input laukelis, kuris nėra užpildytas:
        2.2.1. Turi būti apvestas raudonu rėmeliu.
        2.2.2. Šalia laukelio turi būti parašytas raudonas tekstas: „Šis laukelis yra privalomas".
*/

/*
PAPILDOMA UŽDUOTIS (formos validacija naudojant JavaScript):
Papildyti formos validaciją. Jeigu:
1. Vardas yra trumpesnis nei 3 simboliai, parašyti: „Vardas privalo būti bent 3 simbolių ilgumo".
2. Pavardė yra trumpesnė nei 3 simboliai, parašyti: „Pavardė privalo būti bent 3 simbolių ilgumo".
3. Amžius yra neigamas, parašyti: „Amžius privalo būti teigiamas skaičius".
4. Amžius yra daugiau nei 120 metų, parašyti: „Įvestas amžius yra per didelis".
5. Telefono numeris yra mažiau nei 9 arba daugiau nei 12 simbolių, parašyti: „Įvestas telefono numeris yra neteisingas".
6. Elektroninis paštas yra trumpesnis nei 8 simboliai ir jame nėra panaudotas @ ir . simboliai, parašyti: „Įvestas elektroninis paštas yra neteisingas".
*/

const studentForm = document.querySelector('#student-form');
// eventas kas vyksta submitinant forma

studentForm.addEventListener('submit', (event) => {
   event.preventDefault();

   // Inputo reiksmes gavimas is formos:
   // 1. sukurti kintamaji inputo reiksmei gauti;
   // 2. Issitraukiame inputo reiksme:
   const form = event.target;

   const inputErrorMsgs = form.querySelectorAll('.error-msg');
   console.log(inputErrorMsgs);
   inputErrorMsgs.forEach(msg => msg.remove());

   const requiredFields = document.querySelectorAll('input:required');

   let isValid = true;
   // kadangi grazinamas masyvas su duomenimis, sukamas ciklas gauti kiekvienam nariui:
   requiredFields.forEach((requiredField) => {

      requiredField.classList.remove('error-input');


      if (!requiredField.value) { //sugaudome ar value yra tuscias
         requiredField.classList.add('error-input');

         let errorMsg = document.createElement('span');
         errorMsg.classList.add('error-msg');
         errorMsg.textContent = 'Required requiredField';

         requiredField.after(errorMsg);

         const errorMsgtext = 'The field is filled in incorrectly';
         renderAlertMsg(errorMsgtext, 'red');
         isValid = false;
      }
   })

   if (!isValid) {
      return;
   }

   console.log('laukeliai uzpildyti teisingai');

   const name = form.name.value; //studento vardo reiksmes gavimas
   const lastName = form['last-name'].value;
   const age = form.age.value;
   const phone = form.phone.value;
   const email = form.email.value;
   const ITknowledge = form.rangeInput.value;
   const group = form.group.value;

   console.log(name, lastName, age, phone, email, ITknowledge, group);

   const studentsList = document.querySelector('#students-list') // paselektinam sukurta diva
   const studentItem = document.createElement('div'); // sukuriamas naujas div kuriame bus sukelta studento info po submitinimo
   studentItem.classList.add('student-item'); // pridedama klase 

   const nameElement = document.createElement('p'); //sukuriamas elementas kiekvienai studento inputo reiksmei atvaizduoti liste
   nameElement.innerHTML = `<span style='font-weight:900'>Name:</span> ${name}`; // elementui priskiriame reiksme

   const lastNameElement = document.createElement('p');
   lastNameElement.innerHTML = `<span style='font-weight:900'>Last Name:</span> ${lastName}`;

   const ageElement = document.createElement('p');
   ageElement.innerHTML = `<span style='font-weight:900'>Age:</span> ${age}`;

   const phoneElement = document.createElement('p');
   phoneElement.innerHTML = `<span style='font-weight:900'>Phone: </span>*****`;

   const emailElement = document.createElement('p');
   emailElement.innerHTML = `<span style='font-weight:900'>Email: </span>*****`;

   const ITknowledgeElement = document.createElement('p');
   ITknowledgeElement.innerHTML = `<span style='font-weight:900'>IT knowledge:</span> ${ITknowledge}`;

   const groupElement = document.createElement('p');
   groupElement.innerHTML = `<span style='font-weight:900'>Group:</span> ${group}`;

   studentsList.prepend(studentItem) //i studento lista idedame studento itema

   // checkboxo reiksmiu gavimas:
   const interests = document.querySelectorAll('[name="interests"]:checked');

   // reiksmes isvedimas i ekrana:
   const interestsWrapper = document.createElement('div'); //sukuriamas konteineris duomenims talpinti
   const interestTitle = document.createElement('p'); //sukuriamas duoments kintamasis
   interestTitle.textContent = 'Strudents interests:'; // suteikiamas tekstas

   const interestList = document.createElement('ul');

   interests.forEach(interest => {
      const interestElement = document.createElement('li');
      interestElement.textContent = interest.value;
      interestList.append(interestElement)
   })

   interestsWrapper.append(interestTitle, interestList); // kintamasis idedamas i interestu konteineri

   const privateInfoBtn = document.createElement('button');
   privateInfoBtn.textContent = 'Show info';
   let hiddenPrivateInfo = true;

   privateInfoBtn.addEventListener('click', () => { //mygtukui suteikiamas funkcionalumas rodyti/paslepti privacia info
      if (hiddenPrivateInfo) {
         phoneElement.innerHTML = `<span style='font-weight:900'>Phone: </span> ${phone}`;
         emailElement.innerHTML = `<span style='font-weight:900'>Email: </span> ${email}`;
         privateInfoBtn.textContent = 'Hide info';
      } else {
         phoneElement.innerHTML = `<span style='font-weight:900'>Phone: </span>*****`;
         emailElement.innerHTML = `<span style='font-weight:900'>Email: </span>*****`;
         privateInfoBtn.textContent = 'Show info';
      }
      hiddenPrivateInfo = !hiddenPrivateInfo;
   })

   const deleteStudentBtn = document.createElement('button');
   deleteStudentBtn.textContent = 'Remove student';

   deleteStudentBtn.addEventListener('click', () => {
      studentItem.remove();
      const deletedStudentText = `Student deleted (${name} ${lastName})`;
      renderAlertMsg(deletedStudentText, 'red');
   })

   studentItem.append(nameElement, lastNameElement, ageElement, phoneElement, emailElement, ITknowledgeElement, groupElement, interestsWrapper, privateInfoBtn, deleteStudentBtn) //i studento itema prideda sukurta elementa
   form.reset() //formos duomenu nuresetinimas po submitinimo

   const createdStudentText = `Student created (${name} ${lastName})`; // zinutes teksto kintamasis (kai studentas sukurtas)
   renderAlertMsg(createdStudentText, 'green'); //issokancio pranesimo apie sukurta studenta f-jos panaudojimas

   studentItem.after(alertMsg);
})

// Issokancios zinutes sukurimo f-ja
function renderAlertMsg(text, color) {
   const alertMsg = document.querySelector('#alert-msg');
   alertMsg.textContent = text;
   alertMsg.style.color = color;

   setTimeout(() => {
      alertMsg.textContent = '';
   }, 5000)
}
