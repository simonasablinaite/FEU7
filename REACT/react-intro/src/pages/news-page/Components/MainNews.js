import React from 'react'
import NewsItem from './NewsItem'

const MainContent = () => {
   return (
      <div className='main-content'>
         <div className='news-wrapper'>
            <h2 className='section-title'>Naujienos</h2>
            <div className='main-news'>
               <NewsItem newsCategory='AI &amp; deep learning' newsTitle='Ar „ChatGPT“ užims mūsų darbo vietas?' newsDate='2023-01-27' />
               <NewsItem newsCategory='AI &amp; deep learning' newsTitle='Ar „ChatGPT“ užims mūsų darbo vietas?' newsDate='2023-01-27' />
            </div>
         </div>
         <div>SECONDARY NEWS</div>
         <div>WIDEO SECION WRAPPER</div>
      </div>
   )
}

export default MainContent
