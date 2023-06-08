import React from 'react'
import { useState } from 'react'
import './counter.css'

const Counter = () => {
   // State nagrinejimas:
   //    console.log(useState()); //issiloginame state f-ja
   //    console.log(useState()[0]); //issiloginame abu state f-jos narius
   //    console.log(useState()[1]);

   //    const first = useState()[0]; // state f-jos nariams sukuriame kintamuosius
   //    const second = useState()[1];

   // kadangi state yra fja, grazinanti masyvus, galima pasidestrukturizuoti uzrasyma:
   // const [first, second] = useState;

   const initialValue = 5;
   const [count, setCount] = useState(initialValue);
   const [grades, setGrades] = useState([]);

   const countButtonHandler = num => setCount(prevState => prevState + num); // cia return privalomas, nes tai kas gris is sitoss funkcijos, turi nueiti i setCount'a. Tik esant vienam parametrui, retun zodelis nerasomas ir nededami garbanoti skliausteliai

   const reset = () => setCount(initialValue);

   const changedColor = (item) => {
      let displayClassName = '';

      if (item < 4) {
         displayClassName = 'red';
      } else if (item < 7) {
         displayClassName = 'orange';
      } else {
         displayClassName = 'green';
      }
      return displayClassName;
   }

   const inputHandler = (event) => {
      const inputValue = Number(event.target.value);
      if (inputValue > 10) {
         setCount(10);
      } else if (inputValue < 1) {
         setCount(1)
      } else {
         setCount(inputValue)
      }

   }

   const addGradesHandler = () => {
      setGrades(prevState => {
         const newState = [count, ...prevState] // sukuriama masyvo kopija, o panaudojus rest operatoriu, count reiksme pridedama i prieki
         return newState;
      })
      setCount(initialValue) // graziname i pradine reiksme po pateikimo i lista
   }

   const deleteHandler = (index) => {
      setGrades(prevState => {
         // const newState = prevState.toSpliced(index, 1) // naudojamas naujas metodas toSpliced(). kuris nekeicia seno masyvo, o is karto sukuria seno masyvo kopija
         // return newState;
         return prevState.toSpliced(index, 1) // trumpesnis naujo metodo uzrasymo budas
      })

   }

   return (
      <>
         <div>
            <h3 className={changedColor(count)}>{count}</h3>

            <input type="number" max='10' min='1' value={count} onChange={inputHandler} />

            <button onClick={() => countButtonHandler(-1)} disabled={count <= 1}>-1</button>
            <button onClick={() => countButtonHandler(-2)} disabled={count <= 2}>-2</button>
            <button onClick={() => countButtonHandler(-5)} disabled={count <= 5}>-5</button>
            <button onClick={reset}>Reset</button>
            <button onClick={() => countButtonHandler(5)} disabled={count >= 6}>+5</button>
            <button onClick={() => countButtonHandler(2)} disabled={count >= 9}>+2</button>
            <button onClick={() => countButtonHandler(1)} disabled={count >= 10}>+1</button>

            <button onClick={addGradesHandler}>Add grade</button>
         </div>

         <div className='grades-list-wrapper'>
            {/* Patikrinama, ar masyvas turscias ar ne */}
            <h4>{grades && grades.length > 0 ? 'Grades:' : 'No grades'}</h4>

            {/* Jei nera grades - masyvas nekuriamas */}
            {grades && grades.length > 0 && (
               <ul>
                  {grades && grades.map((grade, index) => (
                     <li key={index} className={changedColor(grade)}>
                        {grade}
                        <button onClick={deleteHandler}>Delete</button>
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </>
   )
}


export default Counter


/*
Jei redaguojame state ir tas redaguojamas state priklauso nuo buvusio state, tai rasome su callback funkcija ir naudojame prevState pavadinima. 
*/