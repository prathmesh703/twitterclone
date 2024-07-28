import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbMessageDots } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';



const Leftsidebar = () => {

 
  return (
    <div className='flex  w-[20%] flex-col gap-3'>
        <div className='px-4'>
            <img  width={"30px"} src='https://www.freepnglogos.com/elon-musk-twitter-rebrand-x-logo-2.png'/>
        </div>
        <div className='flex  flex-col gap-3'> 
            <Link to={"/"} className='flex w-[60%] px-4 py-2 gap-2 hover:bg-gray-200 rounded-full hover:cursor-pointer items-center'>
                <div  >
                <AiOutlineHome size={"24px"} />
                </div>
            
                <h1 className='font-bold text-lg' >Home</h1>
             </Link>   
             <div className='flex w-[60%] px-4 py-2 gap-2 hover:bg-gray-200 rounded-full hover:cursor-pointer items-center'>
             
             <div >
             <IoIosSearch size={"24px"} />
                </div>
                <h1 className='font-bold text-lg'>Search</h1>
             </div> 
             <div className='flex w-[70%] px-4 py-2 gap-2 hover:bg-gray-200 rounded-full hover:cursor-pointer items-center'>
             <div>
             <IoIosNotificationsOutline size={"24px"} />
             </div>
             <h1 className='font-bold text-lg'>Notification</h1>
             </div> 
             <div className='flex w-[60%] px-4 py-2 gap-2 hover:bg-gray-200 rounded-full hover:cursor-pointer items-center'>
                <div className='flex items-center'>
                <TbMessageDots size={"24px"} />
                    </div>
             
                <h1 className='font-bold text-lg' >Message</h1>
             </div> 
             <Link to={"/profile"} className='flex w-[60%] px-4 py-2 gap-2 hover:bg-gray-200 rounded-full hover:cursor-pointer items-center'>
                <div className='flex items-center'>
                  <CgProfile size={"24px"} />
                </div>
             
                <h1 className='font-bold text-lg' >Profile</h1>
             </Link> 
             <button className='bg-blue-500 ml-2 w-[50%] px-4 py-2 hover:bg-blue-400 text-white rounded-full font-bold text-lg'>Post</button>
              
        </div>
    </div>
  )
}

export default Leftsidebar