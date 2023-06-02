import React from 'react'
import ButtonLarge from './ButtonLarge'

const VideoContainer = ({ title, extraText }) => {
   return (
      <div className="video-section-wrapper">
         <h2 className="section-title">{title}</h2>
         <div className="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA"
               title="YouTube video player" frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen></iframe>
         </div>
         <span className="video-extra-text">{extraText}</span>
         <ButtonLarge title='Visi vaizdo įrašai' />
      </div>
   )
}

export default VideoContainer
