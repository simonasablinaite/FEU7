const studentForm = document.querySelector('#student-form');


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

   studentItem.append(nameElement, lastNameElement, ageElement, phoneElement, emailElement, ITknowledgeElement, groupElement) //i studento itema prideda sukurta elementa

   studentsList.prepend(studentItem) //i studento lista idedame studento itema
})


