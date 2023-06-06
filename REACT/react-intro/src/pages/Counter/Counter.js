import React from 'react'
import { useState } from 'react'
import './counter.css'

const Counter = () => {
   const initialValue = 5;
   const [count, setCount] = useState(initialValue);
   // const [color, setColor] = useState('black')

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

   return (
      <div>
         <h3 className={changedColor()}>{count}</h3>

         <input type="number" max='10' min='1' />

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
