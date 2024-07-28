import React from 'react'
import { IoSearch } from "react-icons/io5";
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux'
import useOtherusers from '../hooks/useOtherusers';

const Rightsidebar = () => {

  

  return (
    <div className='w-auto'>
      <div className='p-2 flex gap-2 items-center bg-gray-200 rounded-full outline-none '>
      <IoSearch size={"22px"} />

        <input  type='text'  placeholder='Search' className='bg-gray-200 w-[100%] outline-none'  />
      </div>
      <div className='p-2 border bg-gray-200 mt-2 border-gray-200 rounded-lg' >
        <div >
        <h1 className='font-bold
        '>WHO TO FOLLOW</h1>

        </div >
        
        <div className='flex'>
        <div>
      <Avatar src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' size="40" round={true} />
      </div>
      <div className='flex flex-col  '>
        <h1 className='font-semibold  pl-2'>Kolpe</h1>
        <h1 className='text-gray-400 pl-2'>@kolpemernstack</h1>
      </div>
      <div className='flex items-center'>
        <button className='text-white bg-black h-[50%] ml-2 px-2 rounded-full '>
          Profile
        </button>
      </div>
        </div>
        
        
        </div>
    </div>
  )
}

export default Rightsidebar