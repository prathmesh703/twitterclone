import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {

  const [name,setName]=useState("");
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div>
        <img className=' ml-2 w-80'  src="https://www.freepnglogos.com/elon-musk-twitter-rebrand-x-logo-2.png"></img>
      </div>
      <div className='flex flex-col justify-between' >
          <form  className='flex pb-3.5 flex-col text-center gap-2'>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)} className='border border-gray-600 text-center rounded-md' placeholder='Name' />
            <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} className='border border-gray-600 text-center rounded-md' placeholder='Username' />
            <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} className='border border-gray-600 text-center rounded-md' placeholder='Email' />
            <input type='text' value={password} onChange={(e)=> setPassword(e.target.value)} className='border border-gray-600 text-center rounded-md' placeholder='Password' />
          </form>
          <div className='flex justify-center items-center pt-5'>
        <button onClick={ async () => {
    try {
      const response = await axios.post("http://localhost:3002/api/v1/user/signup", {
        name,
        email,
        username,
        password
      });
      if (response.data.success) {
        toast.success(response.data.msg);
      } else {
        toast.error(response.data.msg || 'Signup failed');
      }
    } catch (error) {
      toast.error('An error occurred during signup');
    }
  }} className='border border-gray-400 rounded-full px-4 pb-1 hover:bg-gray-300 '>
          Signup
        </button>
      </div>
      <div className='flex gap-1 '>
        <p>Already have one?</p>
        <Link to={"/login"}>
        <p className='text-gray-500 underline'> Login</p></Link>
      </div>
          
      </div>
      
    </div>
  )
}

export default Signup