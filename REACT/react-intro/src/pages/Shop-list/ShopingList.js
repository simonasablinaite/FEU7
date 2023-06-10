import { useState } from "react";
import ShopingItem from "./ShopingItem";
import './shopingList.css'

const ShopingList = () => {
   const shopingList = [
      {
         title: 'Duona',
         done: false
      },
      {
         title: 'Kiausiniai',
         done: true
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
         done: true
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
                     <ShopingItem
                        key={index}
                        goods={item}


                     />
                  ))}
               </ul>
            )}

         </form>
      </div>

   )
}

export default ShopingList


// neveikia klases .done uzdejimas;