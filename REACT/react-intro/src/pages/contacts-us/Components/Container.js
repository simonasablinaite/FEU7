import React from 'react'
import '../style/container.css'

const Container = ({ children }) => {
   console.log(children);
   return (
      <div className='container'>
         {children}
      </div>
   )
}

export default Container

