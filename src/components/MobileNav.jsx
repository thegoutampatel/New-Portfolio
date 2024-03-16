import React, { useState } from 'react'
import Logo from '../assets/images/Logo.webp'
import { PiCirclesFour } from "react-icons/pi";

const MobileNav = () => {

  const [toggle, setToggle] = useState(false);
  
  return (
    <div>
      <div className=' w-full fixed bottom-0 flex  flex-col z-50 bg-[#222831] justify-between px-[1rem] py-[1rem]'>
      
       {toggle && (
          <div className="flex w-full z-50 bg-[#222831] justify-between px-[1rem] py-[5rem] rounded-lg">
          <ul className="nav-links ml-10">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact">Education</a></li>
          </ul>

          <button onClick={() => setToggle(!toggle)}>close</button>
        </div>
        )
       }

        {!toggle && <div className='flex justify-between'>
          <div>
              <img className='w-[80px] h-[30px]' src={Logo} alt="" />
          </div>
          <div>
              <div><PiCirclesFour className='text-[30px] text-white' onClick={() => setToggle(!toggle)} /></div>
          </div>
        </div>}
    </div>
  </div>
  )
}

export default MobileNav