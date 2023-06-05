import React from 'react'
import EventContent from './EventContent'

const Event = () => {
   const eventsData = [
      {
         title: 'CodeAcademy Talents',
         day: 17,
         month: 'Sau',
         location: 'Online',
      },
      {
         title: 'CodeAcademy Talents',
         day: 17,
         month: 'Sau',
         location: 'Online',
      },
      {
         title: 'CodeAcademy Talents',
         day: 17,
         month: 'Sau',
         location: 'Online',
      },
      {
         title: 'CodeAcademy Talents',
         day: 17,
         month: 'Sau',
         location: 'Online',
      },
   ]

   return (
      <div className="event">
         <a href="/#">
            <div className="image-wrapper">
               <img className="event-image"
                  src="https://codeacademy.lt/wp-content/uploads/2023/01/Screenshot-2023-01-13-150320-300x298.png" alt='courses' />
            </div>
            {eventsData.map((eventData, index) => (
               <EventContent
                  key={index}
                  day={eventData.day}
                  month={eventData.month}
                  location={eventData.location}
                  title={eventData.title}
               />
            ))}

         </a>
      </div>
   )
}

export default Event
