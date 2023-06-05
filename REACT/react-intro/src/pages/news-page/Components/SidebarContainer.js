import React from 'react'
import EventsContainer from './EventsContainer'
import Podcast from './Podcast'

const SidebarContainer = () => {

   const podcastsData = [
      {
         title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
         podcastLength: 'Trukmė: 7:55',
         podcastDate: '2021-09-02'
      },
      {
         title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
         podcastLength: 'Trukmė: 7:55',
         podcastDate: '2021-09-02',
      },
      {
         title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
         podcastLength: 'Trukmė: 7:55',
         podcastDate: '2021-09-02',
      },
      {
         title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
         podcastLength: 'Trukmė: 7:55',
         podcastDate: '2021-09-02',
      }
   ]

   return (
      <div className='sidebar-content'>
         <div className='podcasts-wrapper'>
            <h2 className='section-title'>Podcastai</h2>
            <div className="podcasts-wrapper">
               {podcastsData.map((podcast, index) => (
                  <Podcast
                     key={index}
                     title={podcast.title}
                     podcastLength={podcast.podcastLength}
                     podcastDate={podcast.podcastDate}
                  />
               ))}

            </div>
         </div>

         <EventsContainer />

      </div>
   )
}

export default SidebarContainer
