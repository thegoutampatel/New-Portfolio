import React from 'react'
import './Footer.css'
import heart from '../assets/images/heart.svg'
const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center min-h-32 mb-24 lg:mb-0'>
      {/* <p>
        Thank You for checking out my Work!
        Made by <strong>Goutam Patel, 2023</strong>
      </p> */}
      <p className=' text-[10px] lg:text-[15px] text-white'>It was nice to have you here, see you around !!</p>
      <p className=' text-[8px] lg:text-[12px] text-white mt-5'>Developed with ❤️ by Goutam Patel </p>
       <p className=' text-[10px] lg:text-[15px] text-white font-semibold'>Copyright ©️ 2024 | All Rights Reserved</p>
    </footer>
  )
}

export default Footer