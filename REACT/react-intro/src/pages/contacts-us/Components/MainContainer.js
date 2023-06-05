import React from 'react'
import MapContainer from './MapContainer'
import ShopsContainer from './ShopsContainer'
import '../style/mainContainer.css'
import Container from './Container.js'

const MainContainer = () => {
   return (
      <Container>
         <ShopsContainer mainTitle='Find Us' />
         <MapContainer />
      </Container>
   )
}

export default MainContainer


/* 
Children yra komponentas, kuriam sukuriame tam tikra stiliu, o i jo vidu galime ideti bet ka. Pvyzdziui, vietoje elemento su klase container, padarome komponenta, pavadinimu Container.
Children yra propsas, apimantis visa turini, esanti, siuo atveju, container komponente. 
*/