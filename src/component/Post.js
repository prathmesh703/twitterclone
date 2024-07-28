import React from 'react'
import Avatar from 'react-avatar';
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlinePoll } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";


const Post = () => {
  return (
    <div  >
        <div className='flex  items-center   justify-around border-b border-gray-200 '>
            <div className='hover:bg-slate-200 hover:cursor-pointer pb-2 flex justify-center w-[50%]'  >
                <h1 className='font-semibold'>For you</h1>
            </div>
            <div className='hover:bg-slate-200 hover:cursor-pointer pb-2 flex justify-center w-[50%]'>
                <h1 className='font-semibold'>Following</h1>
            </div>
            
        </div>
        <div >
          <div className='p-2 flex gap-2 '>
          <div  >
            <Avatar src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' size="40" round={true} />
          </div>
             <input className='w-full outline-none text-lg' type='text' placeholder='What is happening?!'/>
          </div>   
          <div className='flex border pb-3 boder-gray-200 justify-between items-center pt-3 pr-2'>
            <div className='flex gap-1 pl-14'>
            <HiOutlinePhotograph color='' size={'20px'} />
            <MdOutlineGifBox size={'20px'} />
            <MdOutlinePoll size={'20px'} />
            <MdOutlineEmojiEmotions size={'20px'} />

            </div>
            <button className='bg-blue-500  px-2 hover:bg-blue-400 text-white rounded-full font-bold text-lg' >Post</button>  
          </div> 
        </div>
    </div>
  )
}

export default Post