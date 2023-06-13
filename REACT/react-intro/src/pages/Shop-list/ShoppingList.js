import { useState } from "react"
import ShoppingItem from "./ShoppingItem"
import './shoppingList.css'

const ShoppingList = () => {
   // const shoppingListData = [
   //    {
   //       title: 'Duona',
   //       done: false
   //    },
   //    {
   //       title: 'Kiausiniai',
   //       done: false
   //    },
   //    {
   //       title: 'Pienas',
   //       done: false
   //    },
   //    {
   //       title: 'Miltai',
   //       done: false
   //    },
   //    {
   //       title: 'Sviestas',
   //       done: false
   //    },
   // ]

   const [shoppingList, setShoppingList] = useState([])
   const [newItem, setNewItem] = useState('');

   const newItemHandler = (event) => {
      event.preventDefault();

      setShoppingList(prevState => {
         const newShoppingItem = {
            title: newItem,
            done: false
         };

         const newState = [newShoppingItem, ...prevState]
         return newState;
      })

      setNewItem('') //nuresetinama 
   }

   const inputHandler = (event) => {
      setNewItem(event.target.value)
   }

   const itemDoneHandler = (index) => {
      setShoppingList(prevState => {
         const prevShoppingItem = prevState[index];

         const newEditItem = { ...prevState[index] };

         newEditItem.done = !newEditItem.done;

         console.log(newEditItem.done);
         console.log(prevShoppingItem);

         // const newState = [...prevState];
         // newState.splice(index, 1, newEditItem);

         // return newState

         return prevState.toSpliced(index, 1, newEditItem)

      })
   }
   return (

      <div className="container">
         {
            shoppingList && shoppingList.length > 0 ? (
               <ul className="list">
                  {shoppingList.map((item, index) => <ShoppingItem key={index} index={index} item={item} doneHandler={itemDoneHandler} />)}
               </ul>
            ) : (
               <h2>Your shopping list is empty</h2>
            )
         }

         <form onSubmit={newItemHandler}>
            <label htmlFor="shopping-item">New good:</label>
            <input type="text" id="shopping-item" name="shopping-item" value={newItem} onChange={inputHandler} />

            <button className="btn">Add good</button>
         </form>
      </div >
   )
}


export default ShoppingList

// Key paliekamas cia, nes pagal reacto logika, ShopingItem yra pirmas elementas liste, o ne li, nes jis yra giliau esantis elementas

// Ar sarass yra tuscias ar ne, galima tikrinti ir su ifais:
/*
1. sukuriame kintamaji ir jam priskiriame teksta, pvz:
let shoppingListSection = <h3>Your list is empty</h3>

2. tikriname su ifu:
if (shoppingList && shoppingList.length > 0) {
   shoppingListSection = (
      <ul>
      {shoppingList.map((item, index) => <shoppingItem key={index} item={item})}
      </ul>
   )
}
*/


//setShoppingList() logika, esancia newItemHandleryje galima uzrasyti ir vienoje eilute, taip:
// setShoppingList(prevState => [{title: newItem, done: false}, ...prevState])