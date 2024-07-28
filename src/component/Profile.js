import React from 'react'
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import useGetprofile from '../hooks/useGetprofile'
import { useSelector } from 'react-redux'
import store from '../redux/store'

const Profile = () => {

    
    

  return (
    <div className='w-[50%] border-l border-r border-gray-200'>
        <div>
            <div className='flex items-center'>
                <Link to="/" className='p-2 rounded-full hover:bg-gray-100'>
                    <IoChevronBackOutline />
                </Link>
                <div className='pl-2'>
                    <h1 className='text-lg font-semibold'>hii</h1>
                    <p className='text-sm text-gray-500'>0 Post</p>
                </div>

            </div>
            <img src='https://static.vecteezy.com/system/resources/previews/000/686/680/original/modern-colorful-wave-banner-template-background-vector.jpg' alt='banner'/>
            <div className=' ml-2  absolute top-52 border-4 border-white rounded-full'>
            <Avatar   src=' https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' size="120" round={true} />
            </div >
            <div className='flex justify-end'>
            <button className='m-4 p-2 border rounded-full border-gray-400 hover:bg-gray-200' >
                Edit Profile
            </button>
            </div>
            <div className='px-5'>
                <h1 className=' text-xl font-bold'>
                 hello
                </h1>
                <p className='text-gray-500'>
                    username
                </p>
            </div>
            <div className='p-5'>
                <p>
                DESCRIPTION this is the place where all description about me will come|  Hii | Hello
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Profile