
import { FaArrowRight } from "react-icons/fa6";
import people from './images/people.avif'


function Home() {



  return (
    <div className='h-[calc(100vh-70px)] bg-white flex'>

        <div className='h-full w-[50%] bg- flex justify-center flex-col pl-25'>
            <h1 className='text-5xl font-semibold' id='h1'>Welcome to Devkit <br />Develop anything.</h1>
            <p className='text-[18px] text-gray-700 mt-8 mb-10'>Build a beautiful,modern website with flexible <br />components build from scratch.</p>
            <div className=' flex gap-10'> 
                <button className=' text-white px-6 py- flex items-center gap-4 rounded-xl bg-blue-700 cursor-pointer'>View All Pages <  FaArrowRight className='mt-1' /></button>
                <button className='bg-black text-white px-6 py-3 rounded-xl cursor-pointer'>Documentation</button>
            </div>
        </div>


        <div className='h-full w-[50%] bg-green-600'>
          <img className='h-full w-full' src={people} alt="" />
        </div>
        
      
    </div>
  )
}

export default Home
