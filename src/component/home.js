import React from 'react'
import Leftsidebar from './leftsidebar'

import Rightsidebar from './rightsidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  
  
  return (
    <div className='flex mt-2 justify-between w-[80%] mx-auto'>
        <Leftsidebar/>
       <Outlet/> 
       <Rightsidebar/>
    </div>
  )
}

export default Home