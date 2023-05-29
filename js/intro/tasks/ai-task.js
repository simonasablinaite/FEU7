/* 
DIRBTINIO INTELEKTO API UŽDUOTIS:
1. Sukurti formą, kurioje galima įrašyti asmens vardą.
2. Formos submit metu, pagal įrašytą vardą, ekrane atvaizduoti tikėtiną asmens lyti, amžių ir tautybę. Naudoti šiuos API:
Amžiui - https://agify.io/
Tautybei - https://nationalize.io/
Lyčiai - https://genderize.io/
*/


function personAge() {
   const personForm = document.querySelector('#person-name-form'); // paselektinu forma
   let outputText = document.querySelector('#output-text'); // paselektinu teksto atvaizdavimo elementa
   personForm.addEventListener('submit', (event) => {  //formai sukuriu ebemtListener'i
      event.preventDefault();
      const form = event.target; // gaunu pacia forma
      console.log(form.elements); // gaunu formos elementus

      const inputValue = form.name.value; // gaunu inputo reiksme
      console.log(inputValue);

      let ageText = '';
      let nationalityText = '';
      let genderText = '';

      outputText.textContent = `${ageText} ${nationalityText} ${genderText}`

      //siunciu uzklausa i API:
      fetch(`https://api.agify.io?name=${inputValue}`)
         .then(res => res.json())
         .then(ageData => {
            // console.log(ageData);
            console.log(ageData.age); // issitraukiu metus
            const age = ageData.age
            const text = `The probable age of ${inputValue} is ${age}`;

            console.log(text);
            outputText.textContent += text;

         })

      fetch(`https://api.nationalize.io?name=${inputValue}`)
         .then(res => res.json())
         .then(nationalityData => {
            // console.log(nationalityData);
            // console.log(nationalityData.country);
            console.log(nationalityData.country[0].country_id);
            const nationality = nationalityData.country[0].country_id;
            const text = `The probably ${inputValue} is from ${nationality}`;
            console.log(text);
            outputText.textContent += text;

         })

      fetch(`https://api.genderize.io?name=${inputValue}`)
         .then(res => res.json())
         .then(genderData => {
            // console.log(genderData);
            console.log(genderData.gender);
            const gender = genderData.gender;
            const text = `${inputValue} gender is ${gender}`;
            console.log(text);
            outputText.textContent += text;

         })
   })

}


personAge();

/*
Teksto sujungimo ir isvedimo i ekrana zingsniai, kai tekstai skirtinguose fetch'uose, kad tekstai eitu is eiles:

1. Susikurti HTML'e elementa, pvz <p>;
2. Paselektinti elementa JS f-le;
3. Virs fetch'u susikurti tuscius stringus teksto atvaizdavimui;
4. Kiekviename fetche paselektintam elementui priskirti fetche esancio teksto reiksme;
5. Sujungti sakini i viena visuma;
*/

/*
ASYNC AWAIT:
pvz:

function regularFetch() {
   fetch('https://api.agify.io?name=peter')
   .then(res => res.json)
   .then(data => {
      return data
   })
}
console.log(regularFetch()) // taip uzrasyta f-ja atsakymo negrazins. Dar negautas atsakymas

async function asynAwaitFetch() { 
  const response = await fetch('https://api.agify.io?name=peter');
  const data = await response.json();

  return data;

}
console.log(asyncAwaitFetch());

// async pries f-ja nurodo, kad ji yra asinchronine;

// await pries fetcha nurodo, kad palauktu atsakymo ir ji grazintu tik tada, kada gaus;

// await pries response.json() nuroso, kad palauktu, kol gris duomenys is jsono

  AWAIT visada naudojamas tik funkcijose.
  Is principo zodis await pakeicia zodi then
  VISADA bus kuriami kintamieji ir pries ju reiksmes bus rasomas await. 
  VISADA pries f-ja bus rasomas async
*/