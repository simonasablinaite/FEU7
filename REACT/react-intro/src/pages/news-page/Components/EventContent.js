import React from 'react'

const EventContent = ({ day, month, location, title }) => {
   return (
      <div className="event-content">
         <div className="event-date">
            <span className="event-day">{day}</span>
            <span className="event-month">{month}</span>
         </div>

         <div className="event-info">
            <span className="event location">{location}</span>
            <h3 className="event-title">{title}</h3>
         </div>
      </div>
   )
}

export default EventContent
