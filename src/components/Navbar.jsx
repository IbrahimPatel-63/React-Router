import React from "react";
import { NavLink } from "react-router-dom";
import gsap from 'gsap'

function Navbar() {

  const tl = gsap.timeline()



  return (
    <div>
      <div className="h-[70px] w-full bg-white flex items-center justify-between px-25  border-gray-">
        <h1 className="text-[28px] font-semibold text-purple-600" ><span>D</span><span>e</span><span>v</span><span>k</span><span>i</span><span>t</span><span>.</span></h1>
        <div className="flex gap-15 text-[18px] text-gray-500 font-semibold ">
          <NavLink to="/" id='same' className={({isActive}) => `${isActive ?  'text-orange-500' : ''}`}>Home</NavLink>
          <NavLink to="/account" id='same'  className={({isActive}) => `${isActive ? 'text-orange-500' : ''}`}>Account</NavLink>
          <NavLink to="/about" id='same'  className={({isActive}) => `${isActive ? 'text-orange-500' : ''}`}>About</NavLink>
          <NavLink to="/services" id='same' className={({isActive}) => `${isActive ? 'text-orange-500' : ''}`}>Services</NavLink>
          <NavLink to="/contact" id='same' className={({isActive}) => `${isActive ? 'text-orange-500' : ''}`}>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
