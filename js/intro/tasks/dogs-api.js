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
*/

// Task: 1:
// 1.1. Gauti atsitiktines sunu nuotrauka:
function randomDogsImageOnDisplay() {
   const imgContainer = document.querySelector('#img-container');

   fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(images => {
         // console.log(images.message);
         const imgUrl = images.message; // nuotrauku adresu kintamasis
         const dogImageElement = document.createElement('img');
         dogImageElement.src = imgUrl;

         imgContainer.append(dogImageElement);
      })
}

// randomDogsImageOnDisplay();

// 1.2 grazinama viena atsitiktine suniuko nuotrauka pagal veisle
function dogBreeds() {
   const imgContainer = document.querySelector('#img-container');
   const breedsForm = document.querySelector('#dog-breed-form');
   const selectElement = document.querySelector('#dog-breed');
   const dogImageElement = document.createElement('img');

   imgContainer.append(dogImageElement);

   fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(breedsData => {
         // console.log(breedsData.message);
         const breeds = breedsData.message;

         const breedsEntries = Object.entries(breeds);
         breedsEntries.forEach(breedEntry => {
            const mainBreed = breedEntry[0] // gaunama suns veisle
            // console.log(mainBreed);
            const subBreed = breedEntry[1] //gaunama suns subveisle
            // console.log(subBreed);

            if (subBreed.length > 0) {
               subBreed.forEach(oneSubBreed => {
                  const mainBreedText = mainBreed.at(0)
                     .toUpperCase() + mainBreed.slice(1);
                  const optionText = `${mainBreedText} (${oneSubBreed})`;

                  const optionElement = document.createElement('option');
                  optionElement.textContent = optionText;
                  optionElement.value = `${mainBreed}/${oneSubBreed}`;

                  selectElement.append(optionElement);
               })
            } else {
               const optionElement = document.createElement('option');
               optionElement.textContent = mainBreed.at(0).toUpperCase() + mainBreed.slice(1);
               optionElement.value = mainBreed;

               selectElement.append(optionElement);
            }
         })

      })

   breedsForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;

      const breedSelect = form['dog-breed'].value;  //gaunama select reiksme
      console.log(breedSelect);

      const apiUrl = `https://dog.ceo/api/breed/${breedSelect}/images/random`; // API adresas i kuri kreipsimes kad gauti nuotraukas sunu pagal veisle
      // console.log(apiUrl);

      fetch(apiUrl)
         .then(res => res.json())
         .then(images => {

            if (images.code === 404) {
               return;
            }
            const imgUrl = images.message;
            dogImageElement.src = imgUrl;
         })
   })
}
dogBreeds();


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