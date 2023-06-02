import React from 'react'
import '../style/shops.css'

const ShopCard = ({ title, phone, email, address, addressLink }) => {
   console.log(title, phone, email, address);
   let addressElement = '';

   if (!title) {
      return ''
   }

   // Patikriname, ar yra adresas, ar yra linkas ir jei nera - nieko neatvaizduojame, o jei yra - atvaizduojame pagal salygas:
   if (address && addressLink) {
      addressElement = address && <a href={addressLink}><span className="contacts">Address:</span>{address}</a>;
   } else {
      addressElement = <span className="contacts">Address: {address}</span>;
   }

   return (
      <div className='shop-card'>
         <div className='shop-content'>
            <h2>{title}</h2>

            <div className='references'>
               {/* Patikrinama, jei nėra vieno ar kito elemento, tada jis nėra sukuriamas ir neatvaizduojamas ekrane  */}
               {phone && <a href={phone}><span className="contacts">Phone:</span>{phone}</a>}
               {email && <a href={email}><span className="contacts">Email:</span>{email}</a>}
               {addressElement}
            </div>
         </div>
      </div>
   )
}

export default ShopCard
