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

   const minusOne = () => setCount(count - 1);
   const minusTwo = () => setCount(count - 2);
   const minusFive = () => setCount(count - 5);
   const plusOne = () => setCount(count + 1);
   const plusTwo = () => setCount(count + 2);
   const plusFive = () => setCount(count + 5);
   const reset = () => setCount(initialValue);

   const changedColor = () => {
      let displayClassName = '';

      if (count < 4) {
         displayClassName = 'red';
      } else if (count < 7) {
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

   return (
      <div>
         <h3 className={changedColor()}>{count}</h3>

         <input type="number" max='10' min='1' value={count} onChange={inputHandler} />

         <button onClick={minusOne} disabled={count <= 1}>-1</button>
         <button onClick={minusTwo} disabled={count <= 2}>-2</button>
         <button onClick={minusFive} disabled={count <= 5}>-5</button>
         <button onClick={reset}>Reset</button>
         <button onClick={plusFive} disabled={count >= 6}>+5</button>
         <button onClick={plusTwo} disabled={count >= 9}>+2</button>
         <button onClick={plusOne} disabled={count >= 10}>+1</button>
      </div>
   )
}

export default Counter
