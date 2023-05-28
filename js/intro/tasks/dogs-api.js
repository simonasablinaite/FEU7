console.log('labas🖐');
/*UŽDUOTIS (https://dog.ceo/dog-api/):
1. Sukurti formą, kuri leidžia pasirinkti šuns veislę ir grąžina atsitiktinę tos veislės nuotrauką.
 
2. Jeigu šuns veislė yra išvestinė (sub-breed), tai šalia ji turėtų būti atvaizduojama parašant pagrindinės veislės pavadinimą (breed) ir šalia išvestinės veislės pavainimą (sub-breed).
 
viena kategorija
antra kategorija
Bulldog (French)
Bulldog (English)
Bulldog (Boston)
ketvirta kategorija
 
DIRBTINIO INTELEKTO API UŽDUOTIS:
1. Sukurti formą, kurioje galima įrašyti asmens vardą.
2. Formos submit metu, pagal įrašytą vardą, ekrane atvaizduoti tikėtiną asmens lyti, amžių ir tautybę. Naudoti šiuos API:
Amžiui - https://agify.io/
Tautybei - https://nationalize.io/
Lyčiai - https://genderize.io/
*/

// Task: 1:
// 1.1. Gauti atsitiktines sunu nuotrauka:
function dogsImageOnDisplay() {
   fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(images => {
         console.log(images.message);
         const imgUrl = images.message // nuotrauku adresu kintamasis
         const dogImageElement = document.createElement('img');
         dogImageElement.src = imgUrl;

         imgContainer.append(dogImageElement);
      })
}

// dogsImageOnDisplay();

// 1.2 grazinama viena atsitiktine suniuko nuotrauka pagal veisle
function dogBdreeds() {
   console.log('veikia✅');
   const imgContainer = document.querySelector('#img-container');
   const breedsForm = document.querySelector('#dog-breed-form');
   const selectElement = document.querySelector('#dog-breed');
   const dogImageElement = document.createElement('img');


   fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(breeds => {
         console.log(breeds.message);

         for (const breed in breeds.message) {
            console.log(breed); // suns veisle
            console.log(breeds.message[breed]); // suns veisles subveisle

            const optionElement = document.createElement('option');

            optionElement.textContent = `${breed}${breeds.message[breed]}`;

            selectElement.append(optionElement);
         }

      })
   breedsForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
      const breedSelect = form['dog-breed'].value;  //gaunama select reiksme
      console.log(breedSelect);

      const apiUrl = `https://dog.ceo/api/breed/${breedSelect}/images/random`; // API adresas i kuri kreipsimes kad gauti nuotraukas sunu pagal veisle
      console.log(apiUrl);

      fetch(apiUrl)
         .then(res => res.json())
         .then(images => {
            const imgUrl = images.message
            dogImageElement.src = imgUrl;

            imgContainer.append(dogImageElement);
         })
   })

}
dogBdreeds();


// Kiti budai issitraukti duomenis is masyvo ir sudeti elementus i select elementa:

/*
1. OBJECT KEYS() ir OBJECT.VALUES() metodas
 const breed = Object.keys(breeds.message)
         console.log(breed);

         breed.forEach(oneBreed => {
            console.log(oneBreed)
            const optionElement = document.createElement('option');
            optionElement.textContent = oneBreed;
            selectElement.append(optionElement);


         });
2. OBJECT.ENTRIES():
const breedsEntries = Object.entries(breeds.message); //gauname masyva su duomenimis

breedsEntries.forEach(breedEntry => {
   console.log(breedEntry) // masyvas turintis du narius: parg veisle ir subveisle;
   console.log(breedEntry[0]);
   console.log(breedEntry[1])

   const mainBreed = breedEntry[0];
   const subBreed = breedEntry[1]
})
*/