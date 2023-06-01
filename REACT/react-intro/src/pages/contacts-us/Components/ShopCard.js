import React from 'react'

const ShopCard = ({ title, phone, email, address }) => {
   return (
      <div className='shop-card'>
         <div className='shop-content'>
            <h2>{title}</h2>

            <div className='references'>
               <a href={phone}><span class="contacts">Phone:</span>{phone}</a>
               <a href={email}><span class="contacts">Email:</span>{email}</a>
               <a href={address}><span class="contacts">Address:</span>{address}</a>
            </div>
         </div>
      </div>
   )
}

export default ShopCard
