import React from 'react'
import contact from './images/contact2.avif'

function Contactus() {
  return (
    <div className='h-[calc(100vh-70px)] bg-black flex'>
          <div className='h-full w-[35%] bg-white flex flex-col pt-25 pl-25'>
            <h1 className='text-6xl font-semibold mb-5'>Contact Us</h1>
            <input type="text" placeholder='Name' className='border-1 border-black  h-10 w-90 rounded-xl pl-4 outline-0'  />
            <input type="text" placeholder='Email' className='border-1 border-black  h-10 w-90 rounded-xl pl-4 outline-0 mt-5 mb-5'  />
            <input type="text" placeholder='Message' className='border-1 border-black  h-25 w-90 rounded-xl pl-4 outline-0 pb-15'  />
            <button className='bg-blue-500 text-white font-semibold h-10 w-[360px] rounded-3xl mt-8 cursor-pointer'>Send Message</button>
          </div>
          <div className='h-full w-[65%] bg-white'>
            <img className='h-[100%] w-[75%]' src={contact} alt="contact us" />
          </div>
      
    </div>
  )
}

export default Contactus
