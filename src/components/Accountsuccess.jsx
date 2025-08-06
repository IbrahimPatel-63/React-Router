import React from 'react'
import { useNavigate } from 'react-router-dom'

function Accountsuccess() {
    const navigate = useNavigate();

    function gotoaccount() {
      navigate('/account')
    }



  return (
    <div className='h-screen w-full bg-black text-white flex items-center justify-center flex-col'>
        <p className='text-5xl text-center font-semibold text-green-400 leading-16 '>Congratulations! Your account has been <br /> successfully created.</p>
        <button className='bg-blue-600 px-5 py-2 font-semibold rounded-xl mt-10 cursor-pointer hover:bg-blue-400 duration-700' onClick={gotoaccount}>Go to Account</button>
      
    </div>
  )
}

export default Accountsuccess
