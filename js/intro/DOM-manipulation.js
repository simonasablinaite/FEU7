// HTML elemento paselektinimas:
const paragraph = document.querySelector('p');
paragraph.textContent = 'Labas';
paragraph.innerHTML = 'Laba <span style="color: red"; class="test"</span>diena';

// HTML elemento sukurimas:
const spanElement = document.createElement('span');
console.log(spanElement); //su siuo elementu jau galima is karto darbuotis, pvz:
spanElement.textContent = '!'

// APPEND - prideda su JS sukurta HTML elementa i kito elemento PABAIGA:
paragraph.append(spanElement);

// PREPEND  - prideda su JS sugeneruota HTML elementa i kito elemento pradzia:
paragraph.prepend(spanElement);

// AFTER  - prideda su JS sugeneruota HTML elementa po kitu elementu:
paragraph.after(spanElement);

// BEFORE  - prideda su JS sugeneruota HTML elementa virs kito elemento:
paragraph.before(spanElement);

// REMOVE  - pasalina su JS sugeneruota HTML elementa :
spanElement.remove();

// Sukuriamas naujas paragrafo elementas:
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magni ipsam recusandae esse itaque ullam neque, commodi rerum voluptatum praesentium perferendis necessitatibus modi placeat ab deserunt! Fuga delectus nemo reprehenderit distinctio unde assumenda adipisci rem impedit veniam asperiores! Amet eveniet minus maiores quasi, dolorem dolorum alias. Eligendi, corrupti praesentium. Modi?';

// po pirmu paragrafu ideti antra paragrafa:
paragraph.after(newParagraph);

// prideti/pakeisti elemento KLASES pavadinima:
newParagraph.className = 'pirma-klase antra-klase';

// prie jau esamos klases prideti daugiau klasiu:
newParagraph.className = newParagraph.className + ' trecia-klase';