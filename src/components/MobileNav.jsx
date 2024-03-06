import React from 'react'
import Logo from '../assets/images/Logo.webp'
import { PiCirclesFour } from "react-icons/pi";

const MobileNav = () => {
  return (
    <div className='w-full min-w-[10vh] fixed bottom-0 flex z-50 bg-[#222831] justify-between'>
        <div>
            <img className='w-[80px] h-[30px]' src={Logo} alt="" />
        </div>
        <div>
            <div><PiCirclesFour className=' text-[30px] text-white' /></div>
        </div>
    </div>
  )
}

export default MobileNav