import React from 'react'
import Avatar from 'react-avatar';
import { LiaCommentSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";


const Tweet = () => {
  return (
    <div>
      <div className='flex p-2 '>
      <div>
      <Avatar src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' size="40" round={true} />
      </div>
      <div className='flex flex-col w-full justify-center' >
        <div className='flex items-center gap-1'>
        <h1 className='font-semibold text-lg pl-2'>Kolpe</h1>
        <h1 className='text-gray-400'>@kolpemernstack.1m</h1>
        </div>
        <div className='pl-2'> 
          lets connect developers and grow together!
        </div>
        <div className='flex p-2 justify-between'>
     <LiaCommentSolid className='hover:bg-gray-300 rounded-full cursor-pointer ' size={'24px'}/>
     <CiHeart className='hover:bg-gray-300 rounded-full cursor-pointer ' size={'24px'} />
     <CiBookmark className='hover:bg-gray-300 rounded-full cursor-pointer ' size={'24px'} />
     </div>
      </div>
    </div>
     
    </div>
  )
}

export default Tweet