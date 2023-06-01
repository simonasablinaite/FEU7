import React from 'react'

const MapContainer = () => {
   return (
      <div className='map-container'>
         <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.3423087089504!2d23.8857853165754!3d54.89691388033314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220ff3184881%3A0x8002872ac9bbdb7c!2sRotu%C5%A1%C4%97s%20a.%201%2C%2044280%20Kaunas!5e0!3m2!1slt!2slt!4v1680176949803!5m2!1slt!2slt"
            width="100%" height="600px" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div >
   )
}

export default MapContainer
