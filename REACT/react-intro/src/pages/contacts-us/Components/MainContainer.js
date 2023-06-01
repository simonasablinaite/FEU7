import React from 'react'
import MapContainer from './MapContainer'
import ShopsContainer from './ShopsContainer'
import '../style/mainContainer.css';

const MainContainer = () => {
   return (
      <div className='container'>
         <ShopsContainer mainTitle='Find Us' />
         <MapContainer />
      </div>
   )
}

export default MainContainer
