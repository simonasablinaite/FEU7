import React from 'react'
import ShopCard from './ShopCard'
import '../style/shops.css'

const ShopsContainer = ({ mainTitle }) => {

   const shopsData = [
      {
         title: 'Parduotuvė 1',
         phone: '+3761234561',
         email: 'shop1@parduotuve.lt',
         address: 'Rotušės aikštė 1, Kaunas',
         addressLink: '/#',
      },
      {
         title: 'Parduotuvė 2',
         phone: '+3761234562',
         email: 'shop2@parduotuve.lt',
         address: 'Rotušės aikštė 2, Kaunas',
         addressLink: '/#',
      },
      {
         title: 'Parduotuvė 3',
         phone: '+3761234563',
         email: 'shop3@parduotuve.lt',
         address: 'Rotušės aikštė 3, Kaunas',
         addressLink: '/#',
      },
      {
         title: 'Parduotuvė 4',
         phone: '+3761234564',
         email: 'shop4@parduotuve.lt',
         address: 'Rotušės aikštė 4, Kaunas',
         addressLink: '/#',
      }

   ]

   return (
      <div className='shops-container'>
         <div className='main-title'>
            <h1>{mainTitle}</h1>
         </div>

         <div className='shops-list'>

            {shopsData.map((shop, index) => (<ShopCard
               key={index}
               title={shop.title}
               phone={shop.phone}
               email={shop.email}
               address={shop.address}
               addressLink={shop.addressLink}
            />
            ))}
         </div>
      </div>
   )
}

export default ShopsContainer
