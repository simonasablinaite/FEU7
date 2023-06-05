import React from 'react'

const Podcast = ({ podcastLength, title, podcastDate }) => {

   return (
      <div className='podcast'>
         <div className='podcast-controls'>
            <img className="podcast-image" src="../img/podcast-image.jpg" alt='podcast-img'></img>
            <span className="podcast-length">{podcastLength}</span>
            <button className="podcast-play">Play</button>
         </div>
         <div className='podcast-content'>
            <h3 className="podcast-title">{title}</h3>
            <span className="podcast-date">{podcastDate}</span>
         </div>
      </div >
   )
}

export default Podcast
