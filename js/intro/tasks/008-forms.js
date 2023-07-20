/*
PIRMA DALIS:
Sukurti kontaktų formą.
1. Kontaktų formoje turi būti šie laukeliai:
    1. Tekstinis laukelis vardui (privalomas).
    2. Tekstinis laukelis pavardei (privalomas).
    3. Skaičiaus laukelis amžiui (privalomas).
    4. Laukelis įvesti telefono numerį (neprivalomas).
    5. Laukelis įvesti el. paštą (privalomas).
    6. Range tipo laukelis, kuris skirtas įvertinti savo IT žinias nuo 1 iki 10. Galimas vertinimas tik sveikiems skaičiams.
    7. Radio tipo laukeliai, kuriuose pasirenkamas grupės numeris. Turi būti galimybė pasirinkti grupes nuo FEU 1gr. iki FEU 7gr.
    8. Šalia kiekvieno įvesties (input) elemento, pridėti label elementą, kuris žymi laukelio pavadinimą.
*/
/* ANTRA DALIS:
1. Sukurti div elementą, kuris turės id „students-list".
2. Kiekvieną kartą pridavus formą (submit), turi būti sukurtas naujas div elementas su klase „student-item" ir pridedamas į „students-list" elemento pradžią.
3. Duomenys apie studentą turi būti įdėti į „student-item" elementą.

4. Formoje pridėti „checkbox" tipo input'ą, kuriame pateikta galimybė rinktis iš dominančių programavimo kalbų.
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

/*
ŠEŠTA UŽDUOTIS:
1. Sukurti pradinius duomenų masyvą, kuriame būtų bent 5 studentų duomenys (objektų formatu).
2. Sukurti funkciją, kuri priima šiuos duomenis ir užkrovus puslapį į ekraną iškart išveda duomenis iš šio masyvo.
*/

/*
SEPTINTA UŽDUOTIS:
1. Prie kiekvieno studento pridėti mygtuką, kurį paspaudus leistų redaguoti studento duomenis.
2. Redaguojant studentą, submit mygtuko tekstas turėtų pasikeisti į „Save Changes".
3. Pakeitus studento duomenis, turi iššokti <span> elementas, kuris informuoja apie studento duomenų redagavimą: „Studento (Vardas Pavardė) duomenys sėkmingai pakeisti". Šis span elementas dingsta po 5 sekundžių.

1. Sukurti Edit mygtuką.
2. Prie mygtuko pridėti event listener'į.
3. Surinkti studento duomenis ir jais užpildyti formos laukelius.
4. Pakeisti formos submit mygtuko tekstą.
5. Išsaugoti studento HTML elementą kintamąjame.
6. Submit event'o metu patikrinti ar kuriame naują studentą, ar redaguojame jau sukurtą.
7. Jeigu studentas redaguojamas, šį naują (redaguotą) HTML elementą panaudoti perrašant seną studento HTML elementą (kuris išsaugotas 5 žingsnyje).
8. Pakeisti formos submit mygtuko tekstą į pradinį ir pakeisti iššokančio pranešimo tekstą.
*/

// Paselektinama forma ir jos elementai:
const studentForm = document.querySelector('#student-form');

// F-ja range inputo reiksmes keitimui:
function ITknowledgeChange() {
    // Paselektinami range input ir output elementai:
    const ITknowledgeInput = document.querySelector('#ITknowledge');
    const ITknowledgeOutput = document.querySelector('#ITknowledge-output');

    // Kadangi pradzioje paimama pradine inputo reiksme, tai ji nurodoma:
    ITknowledgeOutput.textContent = ITknowledgeInput.value;

    // Range inputo reiksmes atvaizdavimas:
    ITknowledgeInput.addEventListener('input', event => {
        // console.log(event.target.value);
        ITknowledgeOutput.textContent = event.target.value;
    })
}

ITknowledgeChange();

// Tam, kad matyti visa formoje esancia informacija, eventas iskvieciamas formai, o ne mygtukui. Forma turi tureti papildoma eventa "submit":
studentForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.target;

    // Paselektinami klaidos pranesimai, kad veliau butu galima juos issivalyti:
    const inputErrorMessages = form.querySelectorAll('.input-error');
    console.log(inputErrorMessages);

    // Klaidos pranesimai istraukiami po viena ir jie istrinami, kad kas karta nesikartotu:
    inputErrorMessages.forEach(inputErrorMessage => inputErrorMessage.remove());

    // Paselektinami 'required' atributa turintys inputai. Vietoje document, naudojamas form kintamasis tam, kad funkcionalumas veiktu tik sioje formoje. 
    const requiredFields = form.querySelectorAll('input:required');

    // Kintamasis formos tikrinimui (tolimesnio kodo paleidimui/sustabdymui)
    let isValid = true;

    // Paimami visi laukeliai turintys 'requared' atributa ir jiems sukuriamos validacijos:
    requiredFields.forEach(requiredField => {
        requiredField.classList.remove('input-error');

        // Tikrinama ar laukeliai yra neužpildyti
        if (!requiredField.value) {
            validateInputField(requiredField, 'The fiels is empty!')

        } else {

            // Tikrinimai pagal duotas uzduotis:
            if (requiredField.name === 'name') {
                if (requiredField.value.length < 3) {
                    validateInputField(requiredField, 'Name must be 3 symbol at least!')
                }

            } else if (requiredField.name === 'surname') {
                if (requiredField.value.length < 3) {
                    validateInputField(requiredField, 'Surname must be 3 symbol at least!')
                }

            } else if (requiredField.name === 'age') {
                if (requiredField.value < 0) {
                    validateInputField(requiredField, 'Age must be positive number!')
                } else if (requiredField.value >= 120) {
                    validateInputField(requiredField, 'Age is too high!')
                }

            } else if (requiredField.name === 'phone') {
                if (requiredField.value.length < 9 || requiredField.value.length > 12) {
                    validateInputField(requiredField, 'The phone number is incorrect!')
                }

            } else if (requiredField.name === 'email') {
                if (requiredField.value.length < 8 || !requiredField.value.includes('@') || !requiredField.value.includes('.')) {
                    validateInputField(requiredField, 'The email address is incorrect!')
                }
            }
        }

        // jei laukas tuscias, tada tolimesnis kodas sustabdomas
        if (!isValid) {
            return;
        }

        // surenkama visu inputu informacija i konsole:
        const name = form.name.value;
        const surname = form.surname.value;
        const age = form.age.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const ITknowledge = form.ITknowledge.value;
        const group = form.group.value;
        // Checkbox'u reiksmiu issirinkimas pagal 'name' ir kurie yra uzcekinti:
        const interests = form.querySelectorAll('[name="interests"]:checked');

        console.log(name);
        console.log(surname);
        console.log(age);
        console.log(phone);
        console.log(email);
        console.log(ITknowledge);
        console.log(group);
        console.log(interests);

        // paselektinamas students listas is HTML'o
        const studentsList = document.querySelector('#students-list');

        // Sukuriamas naujas div elementas ir jam priskiriama klase "student-item"
        const studentItem = document.createElement('div');
        studentItem.classList.add('student-item');

        // I studentItem elementa pridedama studento informacija:
        const listTitle = document.createElement('h1');
        listTitle.textContent = `New student ${name} ${surname}`;

        const nameElement = document.createElement('p');
        nameElement.innerHTML = `<b>Name:</b> ${name}`;

        const surnameElement = document.createElement('p');
        surnameElement.innerHTML = `<b>Surname:</b> ${surname}`;

        const ageElement = document.createElement('p');
        ageElement.innerHTML = `<b>Age:</b> ${age}`;

        const phoneElement = document.createElement('p');
        phoneElement.innerHTML = '<b>Phone number:</b> *********';

        const emailElement = document.createElement('p');
        emailElement.innerHTML = '<b>Email address:</b> **********';

        const ITknowledgeElement = document.createElement('p');
        ITknowledgeElement.innerHTML = `<b>IT knowledge:</b> ${ITknowledge}`;

        const groupElement = document.createElement('p');
        groupElement.innerHTML = `<b>Group:</b> ${group}`;

        // Sukuriamas elementas student interest pavadinimui:
        const interestsElement = document.createElement('div');
        const interestsTitlte = document.createElement('h2');
        interestsTitlte.textContent = 'Student interests:';

        // Sukuriamas interestsList elementas, i ji pridedamos checkboxo reiksmes ir isvedamos i ekrana:
        const interestsList = document.createElement('ul');
        interests.forEach(interest => {
            const interestElement = document.createElement('li');
            interestElement.textContent = interest.value;
            interestsList.append(interestElement)
        })

        // interestsTitle pridedamas i interestsElementa, pridedamas interestsList'as ir isvedami i ekrana:
        interestsElement.append(interestsTitlte, interestsList);

        // Sukuriamas showPrivateInfo mygtukas, kuri paspaudus, studento informacija pasikeicia i pilna info, o mygtukas patampa hidenInfo. Paspaudus mygtuka dar karta - vel rodoma zvaigzdutemis uzslepta info:
        const privateInfoButton = document.createElement('button');
        privateInfoButton.textContent = 'Show private info';

        // Sukuriamas kintamasis mygtuko reiksmes keitimui:
        let isPrivateInfoHiden = true;

        privateInfoButton.addEventListener('click', () => {
            // Kintamojo isPrivateInfo reiksmes 'true' keitimas i false ir atvirksciai
            isPrivateInfoHiden = !isPrivateInfoHiden;

            // Tikrinama reiksme: jei reikia slepti info ji slepiama, jei reikia rodyti - ji rodoma:
            if (isPrivateInfoHiden) {
                phoneElement.innerHTML = '<b>Phone number:</b> *********';
                emailElement.innerHTML = '<b>Email address:</b> **********';
                privateInfoButton.textContent = 'Show private info';

            } else {
                phoneElement.innerHTML = `<b>Phone number:</b> ${phone}`;
                emailElement.innerHTML = `<b>Email address:</b> ${email}`;
                privateInfoButton.textContent = 'Hide private info';
            }
        })

        // Sukuriamas studento istrynimo mygtukas:
        const deleteStudentButton = document.createElement('button');
        deleteStudentButton.textContent = 'Delete student';

        // Studento istrynimo funkcionalumas:
        deleteStudentButton.addEventListener('click', () => {
            studentItem.remove();

            // Sukuriama zinute studento istrynimo atveju
            const deleteStudentText = `Student ${name} ${surname} was deleted!`;

            // Iskvieciama pranesimo zinutes f-ja ir paduodami parametrai, tekstas ir spalva
            renderAlertMessage(deleteStudentText, 'red');
        })

        // Tam, kad info atsivaizduotu ekrane, apendinu info i studentItema:
        studentItem.append(listTitle, nameElement, surnameElement, ageElement, phoneElement, emailElement, ITknowledgeElement, groupElement, interestsElement, privateInfoButton, deleteStudentButton);

        // Prependinu studentItem i students lista kas karta, kai submitinama forma:
        studentsList.prepend(studentItem);

        // Formos nuresetinimo po submito metodas:
        form.reset();

        // Nuresetinama ir range inputo reiksme:
        ITknowledgeChange();

        // Paselektinamas issokancios zinutes elementas:
        const createdStudentText = `Student ${name} ${surname} was created successfully!`;
        renderAlertMessage(createdStudentText, 'green');
    })

    // Susikuriama pranesimo zinutes f-ja, kuriai paduodami du parametrai: tekstas ir spalva
    function renderAlertMessage(text, color) {
        const alertMessage = document.querySelector('#alert-message');
        alertMessage.textContent = text;

        alertMessage.style.color = color;

        // F-ja nurodanti, kad sekmes zinute bus matoma 3s:
        setTimeout(() => {
            alertMessage.textContent = '';
        }, 3000)
    }

    // Funkcija inputu validacijoms: laukeliui sukuria klase, sukuriamas papildomas span elementas pranesimui, jam pridedama klase, pridedamas klaidos tekstas, klaidos tekstas isvedamas i ekrana, uzbaigiamas vykdyti kodas, jei aptinkama klaida
    function validateInputField(requiredField, errorText) {
        requiredField.classList.add('input-error');

        let errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = errorText;

        requiredField.after(errorMessage);

        // Sugaudomas tuscias laukas:
        isValid = false;
    }

/*
KONSPEKTAI IR PAPILDOMA INFO:
Kiti budai pasiekti norimo elemento value:
    const studentName = document.querySelector('#student-name').value;
    const studentName = document.getElementById('student-name').value;
    const studentName = document.getElementsByName('name')[0].value;
    const studentName = document.querySelector('[name="name"]').value;
    const studentName = form.querySelector('[name="name"]').value;
    const studentName = event.target.elements.name.value;
*/

