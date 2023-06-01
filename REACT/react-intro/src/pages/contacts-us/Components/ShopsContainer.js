import React from 'react'
import ShopCard from './ShopCard'
import '../style/shops.css'

const ShopsContainer = ({ mainTitle }) => {
   return (
      <div className='shops-container'>
         <div className='main-title'>
            <h1>{mainTitle}</h1>
         </div>

         <div className='shops-list'>
            <ShopCard title='Parduotuvė 1' phone='+3761234561' email='shop1@parduotuve.lt' address='Rotušės aikštė 1, Kaunas' />
            <ShopCard title='Parduotuvė 2' phone='+3761234562' email='shop2@parduotuve.lt' address='Rotušės aikštė 2, Kaunas' />
            <ShopCard title='Parduotuvė 3' phone='+3761234563' email='shop3@parduotuve.lt' address='Rotušės aikštė 3, Kaunas' />
            <ShopCard title='Parduotuvė 4' phone='+3761234564' email='shop4@parduotuve.lt' address='Rotušės aikštė 4, Kaunas' />
         </div>
      </div>
   )
}

export default ShopsContainer
