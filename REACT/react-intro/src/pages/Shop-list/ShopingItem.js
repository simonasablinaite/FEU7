import React from 'react'

const ShopingItem = ({ goods }) => {
   return (
      <div>
         <li className={goods.done && 'done'}>{goods.title}</li>

      </div>
   )
}

export default ShopingItem
