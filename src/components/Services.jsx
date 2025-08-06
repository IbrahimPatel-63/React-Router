import React from 'react'
import service from './images/service.jpg'

function Services() {
  return (
    <div className='h-[calc(100vh-70px)] bg-white flex'>
                <div className='h-full w-[50%]  flex justify-center flex-col pl-15'>
                    <h1 className='text-7xl font-semibold'>Customer <br />Service</h1>
                    <p className='text-[18px] text-gray-800 pt-8 pb-7'> We don't just build websites;We craft digital experience that engage and <br />covert.Our priority is seamless design, smooth funcationality,and exceptional <br />customer service.From concept launch, We ensure a hassle-free journey.Your <br />vision,our expertise-let's create something amazing.Quality websites,responsive <br />support,and a commitment to your success.</p>
                    <button className='bg-[#007bff] text-white px-6 py-2 rounded-3xl font-semibold cursor-pointer w-40'>Learn More</button>
                </div>
                <div className='h-full w-[50%] bg-white'>
                <img className='h-[80%] w-[80%]' src={service} alt="service" />
                </div>
      
    </div>
  )
}

export default Services
