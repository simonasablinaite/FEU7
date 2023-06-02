import React from 'react'

const NewsItem = ({ newsCategory, newsTitle, newsDate }) => {
   return (

      <div className='news-item'>
         <a href="news-item-ref">
            <div className="image-wrapper">
               <img
                  src="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" alt='foto-1' />
            </div>
            <div className="news-content">
               <span className="news-category">{newsCategory}</span>
               <h3 className="news-title">{newsTitle}</h3>
               <span className="news-date">{newsDate}</span>
            </div>
         </a>
      </div>

   )
}

export default NewsItem
