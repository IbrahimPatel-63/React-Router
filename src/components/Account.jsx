import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import lock from './images/lock.avif'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Account() {

  const [showPassword,setShowPassword] = useState(false)

const navigate = useNavigate();

function success() {
  navigate('/accountsuccess')
}


  return (
    
          <div className='h-[calc(100vh-70px)] bg-red-500 flex'>
      <div className='h-full w-[50%] '>
        <img src={lock} className='h-full w-full' alt="security" />

      </div>


      <div className='h-full w-[50%] bg-white flex flex-col text-left pl-25 pt-20'>
      <form action="" onSubmit={(e) => {
        e.preventDefault();
        if(e.target.checkValidity()) {
          navigate("/accountsuccess");
        } else {
          e.target.reportValidity();
        }
      }}>
          <p className='text-[14px] font-semibold text-[#00bfff]'>GETTING STARTED</p>
        <h1 className='text-4xl text-[28px] font-bold mt-2 mb-6'>CREATE AN ACCOUNT</h1>
        
      
         <input type="text" placeholder='Full Name' className='border-1 border-black  h-10 w-100 rounded-xl pl-5 outline-0 ' required  />
        <input type="email" placeholder='Email'  className='border-1 border-black h-10 w-100 mt-10 mb-10 rounded-xl pl-5 outline-0' required />
        <input type={showPassword ? "text" : "password"} placeholder='Password' className='border-1 border-black h-10 w-100 rounded-xl pl-5 outline-0' id='hello' required />  <FaEye className='absolute bottom-76.5 right-72 text-xl cursor-pointer' type='button' onClick={() => setShowPassword(!showPassword)}  />

      
      
        <button className='h-10 w-100 bg-[#1e1e1e] text-[#1e90ff] mt-12 rounded-[5px] font-semibold cursor-pointer hover:bg-gray-700 hover:text-white duration-700' type='submit' >Create an Account</button>
        <p className='mt-2 mb-5 ml-46 font-bold'>or</p>
        <div className='flex gap-6'>
          <button className='text-white bg-[#1e1e1e] px-6 py-3 cursor-pointer font-semibold rounded-[5px] flex items-center gap-4 '><FaFacebook className='text-xl text-blue-500' /> Facebook Login</button>
          <button className='text-white bg-[#1e1e1e] px-6 py-3 cursor-pointer font-semibold rounded-[5px] flex items-center gap-4 '><FaGoogle className='text-xl text-red-500' /> Google Login</button>
        </div>
      </form>
       
      </div>
      
    </div>
    
  )
}

export default Account
