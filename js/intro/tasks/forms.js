const studentForm = document.querySelector('#student-form');
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

studentForm.addEventListener('submit', (event) => {
   event.preventDefault();
   // Inputo reiksmes gavimas is formos:
   // 1. sukurti kintamaji inputo reiksmei gauti;
   // 2. Issitraukiame inputo reiksme:
   const form = event.target;

   const name = form.name.value; //studento vardo reiksmes gavimas
   const lastName = form['last-name'].value;
   const age = form.age.value;
   const phone = form.phone.value;
   const email = form.email.value;
   const ITknowledge = form['IT-knowledge'].value;
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
   phoneElement.innerHTML = `<span style='font-weight:900'>Phone:</span> ${phone}`;

   const emailElement = document.createElement('p');
   emailElement.innerHTML = `<span style='font-weight:900'>Email:</span> ${email}`;

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





   studentItem.append(nameElement, lastNameElement, ageElement, phoneElement, emailElement, ITknowledgeElement, groupElement, interestsWrapper) //i studento itema prideda sukurta elementa

})


