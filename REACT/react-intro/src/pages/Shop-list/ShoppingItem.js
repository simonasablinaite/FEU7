import React from 'react'

const ShoppingItem = ({ item, doneHandler, index }) => {

   const itemDoneHandler = () => {
      doneHandler(index);
   }
   return (
      <div>
         <li onClick={itemDoneHandler} className={`shopping-item ${item.done ? 'done' : ''}`} >{item.title}</li>
      </div>
   )
}

export default ShoppingItem
