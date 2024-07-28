import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios"
import {toast} from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { getUser } from '../redux/slice'
const Login = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const dispatch =useDispatch();

  const navigate=useNavigate();
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div>
        <img className=' ml-2 w-64'  src="https://www.freepnglogos.com/elon-musk-twitter-rebrand-x-logo-2.png"></img>
      </div>
      <div className='flex flex-col justify-between' >
          <form className='flex pb-3.5 flex-col text-center gap-2'>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} className='border border-gray-600 text-center rounded-md' placeholder='Username' />
            <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} className='border border-gray-600 text-center rounded-md' placeholder='Password' />
          </form>
          <div className='flex justify-center items-center pt-5'>
        <button onClick={async()=>{
          const res= await axios.post("http://localhost:3002/api/v1/user/login",{
            username,
            password
          })
          dispatch(getUser(res.data.user))
          if(res.data.success){
            toast.success(res.data.msg)
            
          };
          navigate("/")

        }} className='border border-gray-400 rounded-full px-4 pb-1 hover:bg-gray-300 '>
          Login
        </button>
      </div>
      <div className='flex gap-1 '>
        <p>does not have account create one  </p>
        <Link to={"/signup"}>
        <p className='text-gray-500 underline'> Signup</p>
          </Link>
      </div>
          
      </div>
      
    </div>
  )
}

export default Login