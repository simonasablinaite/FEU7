import React from 'react'
import podcastImage from '../img/podcast-image.jpg';

console.log(podcastImage);

const Podcast = ({ podcastLength, title, podcastDate }) => {

   return (
      <div className='podcast'>
         <div className='podcast-controls'>
            <img className="podcast-image" src={podcastImage} alt='podcast host'></img>
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
