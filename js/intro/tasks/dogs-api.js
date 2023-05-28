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
const imgContainer = document.querySelector('#img-container');
const breedsForm = document.querySelector('#dog-breed');
const selectElement = document.querySelector('#dog-breed');


// 1.1. Gauti sunu nuotrauka:
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