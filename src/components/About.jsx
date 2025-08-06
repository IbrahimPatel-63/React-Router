import React from 'react'
import mobile from './images/mobile.jpg'

function About() {
  return (
    <div className='h-[calc(100vh-70px)] bg-black flex'>
        <div className='h-full w-[40%] bg-white flex justify-center flex-col pl-25'>
          <h1 className='text-5xl font-bold mb-4'>Grow your business <br />faster with <span className='text-purple-600'>Devkit.</span></h1>
          <p className='text-[18px] text-gray-800'>Powerful,self serve product analytics to help you convert, <br />engage and retain more users.</p>
          <div className='flex gap-10 mt-15 mb-15'>
            <button className='bg-blue-600 text-white px-8 rounded-[5px] py-2 font-semibold cursor-pointer'>Get Demo</button>
            <button className='border-1 text-blue-600 px-8 rounded-[5px] py-2 font-semibold cursor-pointer'>Sign up</button>
            </div>

           <div className='flex items-center gap-2 text-gray-500'>
            <div className='h-3 w-3 bg-green-500 rounded-2xl'></div>
            <p>No credit card required</p>
           </div>

           <div className='flex items-center gap-2 text-gray-500 mt-2 '>
            <div className='h-3 w-3 bg-green-500 rounded-2xl'></div>
            <p>Web based,No installation</p>
           </div>
         
        </div>



        <div className='h-full w-[60%] bg-white'>
          <img className='h-[90%] w-[80%]' src={mobile} alt="About Us" />
        </div>
      
    </div>
  )
}

export default About
