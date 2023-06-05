import React from 'react'
import MainContent from './MainNews'
import SidebarContainer from './SidebarContainer'

const MainContainer = () => {
   return (
      <div className='content-wrapper'>
         <MainContent />
         <SidebarContainer />
      </div>
   )
}

export default MainContainer
