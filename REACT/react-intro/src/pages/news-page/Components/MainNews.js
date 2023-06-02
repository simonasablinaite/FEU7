import React from 'react'
import ButtonLarge from './ButtonLarge'
import NewsItem from './NewsItem'
import SecondaryNewsItem from './SecondaryNewsItem'
import VideoContainer from './VideoContainer'

const MainContent = () => {

   return (
      <div className='main-content'>
         <div className='news-wrapper'>
            <h2 className='section-title'>Naujienos</h2>
            <div className='main-news'>
               <NewsItem newsCategory='AI &amp; deep learning' newsTitle='Ar „ChatGPT“ užims mūsų darbo vietas?' newsDate='2023-01-27' />
               <NewsItem newsCategory='AI &amp; deep learning' newsTitle='Ar „ChatGPT“ užims mūsų darbo vietas?' newsDate='2023-01-27' />
            </div>
            <div>
               <SecondaryNewsItem newsCategory='AI &amp; deep learning' newsTitle='Ar „ChatGPT“ užims mūsų darbo vietas?' newsDate='2023-01-27' />
               <SecondaryNewsItem newsCategory='AI &amp; deep learning' newsTitle='Ar „ChatGPT“ užims mūsų darbo vietas?' newsDate='2023-01-27' />
               <SecondaryNewsItem newsCategory='AI &amp; deep learning' newsTitle='Ar „ChatGPT“ užims mūsų darbo vietas?' newsDate='2023-01-27' />
               <SecondaryNewsItem newsCategory='AI &amp; deep learning' newsTitle='Ar „ChatGPT“ užims mūsų darbo vietas?' newsDate='2023-01-27' />
            </div>
            <ButtonLarge title='Visos naujienos' />
         </div>

         <div><VideoContainer title='Vaizdo įrašai' extraText='Jei galiu aš – gali ir tu!' /></div>
      </div>
   )
}

export default MainContent
