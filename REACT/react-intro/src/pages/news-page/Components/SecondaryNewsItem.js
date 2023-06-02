import React from 'react'

const SecondaryNewsItem = ({ newsCategory, newsTitle, newsDate }) => {
   return (
      <div className='secondary-news'>
         <div className='news-item'>
            <a href="secondary-news-ref">
               <div className="image-wrapper">
                  <img
                     src="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" alt='sec-news' />
               </div>
               <div className="news-content">
                  <span className="news-category">{newsCategory}</span>
                  <h3 className="news-title">{newsTitle}</h3>
                  <span className="news-date">{newsDate}</span>
               </div>
            </a>
         </div>
      </div>
   )
}

export default SecondaryNewsItem
