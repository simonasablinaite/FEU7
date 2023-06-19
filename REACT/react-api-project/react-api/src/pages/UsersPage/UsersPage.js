/*
API nuoroda: https://jsonplaceholder.typicode.com

1. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
  1.1. Prie vartotojo turėtu būti jo vardas.
  1.2. Paspaudus ant vartotojo - nukreipiama į jo user.html puslapį.
  1.3. Prie vartotojo vardo turėtų būti parašytų post'ų skaičius.

2. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
  2.1. Pavadinimą. Tai turi būti nuoroda. Ji turi vesti į post.html puslapį.
  2.2. Autorių. Tai turi būti nuoroda. Ji turi vesti į user.html puslapį.
  2.3. Prie pavadinimo pridėti įrašo komentarų skaičių.

3. Tokiu pačiu principu, kaip ir vartotojų bei įrašų puslapiams, sukurti puslapį albumams (albums.html). Prie kiekvieno albumo turi būti:
  3.1. Parašytas jo pavadinimas.
  3.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
  3.3. Albume esančių nuotraukų skaičius.
  3.4. Viena nuotrauka.
  3.5. Šis elementas turi būti nuoroda.

4. Sukurti navigacijos elementą, kuris nukreips į puslapius:
  4.1. Home / pagrindinis puslapis.
  4.2. Users / vartotojų puslapis.
  4.3. Albums / albumų puslapis.
  4.4. Posts / pranešimų puslapis.
  4.5. Pakeisti aktyvaus puslapio nuorodos stilių.

5. Sukurti naują puslapį user.html, kuriame bus atvaizduojama vartotojo informacija:
  5.1. Pilnas vardas.
  5.2. Vartotojo vardas / nick'as.
  5.3. El. paštas.
  5.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps.
  5.5. Telefono numeris.
  5.6. Internetinio puslapio adresas.
  5.7. Įmonės, kurioje dirba, pavadinimas.

6. Šiame puslapyje (user.html) turi būti atvaizduojama:
  6.1. Visi vartotojo parašyti įrašai (posts). Kiekvienas post'as turi turėti nuorodą.
  6.2. Visi vartotojo sukurti foto albumai. Kiekvienas albumas turės pavadinimą, kuris turi būti nuoroda.

7. Sukurti naują puslapį post.html ir jame atvaizduoti:
  7.1. Įrašo (post) pavadinimą.
  7.2. Autoriaus vardą. Paspaudus ant autoriaus vardo, turėtų atidaryti autoriaus puslapį.
  7.3. Įrašo turinį.
  7.4. Įrašo komentarus. Kiekvienas komentaras turi:
    7.4.1. Komentaro pavadinimą.
    7.4.2. Komentaro turinį - pastraipą.
    7.4.3. Komentarą parašiusio asmens el. pašto adresą.
  7.5. Nuoroda „Kiti autoriaus įrašai", kurią paspaudus bus nukreipiama į puslapį posts.html. Jame vėliau bus atvaizduojami visi šio vartotojo įrašai.

8. Sukurti naują puslapį album.html ir jame atvaizduoti:
  8.1. Albumo pavadinimą.
  8.2. Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.
  8.3. Skiltis, kurioje atvaizduojamos visos albumo nuotraukos. Panaudoti library (biblioteką), kuri skirta gražiam galerijos atvaizdavimui, pvz.:
    8.3.1. https://photoswipe.com/
    8.3.2. https://nanogallery2.nanostudio.org/
    8.3.3. https://sachinchoolur.github.io/lightgallery.js/
    8.3.4. Arba bet kurią kitą.

9. Sukurti paieškos funkcionalumą navigacijos elemente:
9.1. Navigacijos elemente sukurti formą, kuri turi text tipo input elementą (nepamiršti pridėti name atributą).
9.2. Formos submit metu, naudojant action atributą, nukreipti į naują puslapį (search.html).
9.3. Šiame puslapyje atvaizduoti paieškos rezultatą.
9.3.1. Jeigu nėra tinkamų rezultatų, tai parašyti jog rezultatų pagal užklausą nerasta.

Papildoma: 
9.4. Search puslapyje turi būti paieškos forma, kuri veikia neperkraunant puslapio.
9.5. Search puslapyje sukurtoje paieškos formoje pridėti galimybė ieškoti pagal pasirinktą kategoriją: posts, users, comments, albums, photos.

10. Sukurti pagrindinį puslapį (index.html). Jame laisva forma turi būti atvaizduoti:
  1.1. Įrašai (post).
  1.2. Albumai.
  1.3. Vartotojai.



PAGINATION:
15.1. Puslapiuose, kuriuose atvaizuojami post'ai, atvaizduoti pirmus 25 post'us. Tai bus pirmas post'ų puslapis.
15.2.1. Post'ų sąrašo apačioje pridėti nuorodas, kurios leidžia perjungti kitą post'ų puslapį. Pvz. antras puslapis rodys post'us nuo 26 iki 50, trečias puslapis rodys nuo 51 iki 75 ir t.t.
15.2.2. Puslapių nuorodų turi būti tiek, kad būtų galimybė atvaizduoti visus post'us.
15.2.3. Galima paspausti ant visų nuorodų, išskyrus tą, kurios puslapyje šiuo metu esama.

15.3.1. Sukurti nuorodas pirmam ir paskutiniam puslapiui.
15.3.2. Jeigu šiuo metu esama pirmame puslapyje, tai jo nuorodos paspausti negalima.
15.3.3. Jeigu šiuo metu esama paskutiniame puslapyje, tai jo nuorodos paspausti negalima.

16. Panaudoti pagination kituose puslapiuose, kuriuose yra sąrašas duomenų.

17. Sukurti select elementą, kuriame būtų galimybė pasirinkti po kiek postų (arba kitų duomenų) yra atvaizduojama viename puslapyje.
*/

import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';

const UsersPage = () => {

  const [users, setUsers] = useState([]);

  // Duomenu gavimas is API:
  useEffect(() => {
    fetch(API_URL + '/users') // importuojamas url is config f-lo;
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
  }, []);

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>))}
      </ul>
    </div>
  )
}

export default UsersPage

/*
useEffect(() => {}) pirmas paramentas callBack f-ja, antras - dependencies [];
callBac'e turi buti fetchas kuriame kreipiamasi i puslapi. Tam, kad nereiketu kas karta atnaujinti internetio adreso, jis iskeliamas i configo f-la.
*/
