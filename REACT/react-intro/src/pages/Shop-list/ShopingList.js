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
   const [newListItem, setNewListItem] = useState('');

   console.log(shopingList);
   console.log(shopingList[0]);
   console.log(shopingList[1]);

   const inputHandler = (event) => {
      event.preventDefault();
      console.log(event.target.value);

      setNewListItem('')
   }

   const addedGoog = (event) => {
      console.log(event.target.value);
      setNewListItem(event.target.value)

   }

   return (

      <div className="container">

         <form onSubmit={inputHandler}>
            <h1>Shoping list</h1>

            <label htmlFor="input-value">Enter good:</label>
            <input type="text" value={newListItem.value} name='input-value' id="input-value" onChange={inputHandler} />
            <button className="btn" onClick={addedGoog}>Add good</button>

            <h2>{items && items.length > 0 ? 'Goods:' : 'Your shopping list is empty'}</h2>

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

// Key paliekamas cia, nes pagal reacto logika, ShopingItem yra pirmas elementas liste, o ne li.