import { useState } from "react";
import './shopingList.css'

const ShopingList = () => {
   const shopingList = [
      {
         title: 'Duona',
         done: false
      },
      {
         title: 'Kiausiniai',
         done: false
      },
      {
         title: 'Pienas',
         done: false
      },
      {
         title: 'Miltai',
         done: false
      },
      {
         title: 'Sviestas',
         done: false
      },
   ]

   const [items, setItems] = useState(shopingList);

   console.log(shopingList);
   console.log(shopingList[0]);
   console.log(shopingList[1]);

   const addedGoog = (inputValue) => {
      setItems(prevState => {
         const newState = [inputValue, ...prevState];
         return newState
      })

   }

   const inputHandler = (event) => {
      const inputValue = event.target.value;
      console.log(inputValue);
      return inputValue;
   }

   return (
      <div className="container">

         <form typeof="submit">
            <h1>Shoping list</h1>
            <input type="text" value={items.value} onChange={inputHandler} />
            <button className="btn" onClick={addedGoog}>Add good</button>

            <h3>{items && items.length > 0 ? 'Goods:' : 'Your shopping list is empty'}</h3>

            {items && items.length > 0 && (
               <ul className="list">
                  {items && items.map((item, index) => (
                     <li key={index}>{item.title}</li>
                  ))}
               </ul>
            )}

         </form>
      </div>
   )
}

export default ShopingList
