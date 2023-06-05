import React from 'react'
import Event from './Event'

const EventsContainer = () => {
   return (
      <div className='event-wrapper'>
         <h2 className="section-title">Renginiai</h2>
         <div className='events-list'>
            <Event />
         </div>
      </div >
   )
}

export default EventsContainer
