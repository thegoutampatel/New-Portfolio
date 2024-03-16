import React, {useState } from 'react'
import './Contact.css';
import axios from 'axios';
import EmailForm from './EmailForm';
import chat from '../assets/images/chat.svg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";



const Contact = () => {
  
  return (
    <section id="contact">
    <div class="custom-shape-divider-top-1639343571">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>
    <div class="custom-shape-divider-bottom-1639370022">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
      </svg>
  </div>
    <div class="contact--left">
      <div className=' flex'>
        <h2 className='text-[30px] font-semibold'>Contact Me</h2> 
        <img src={chat} alt="" className='w-[30px]'/>
      </div>
      <p>Feel free to get in touch, If you have any suggestions or any oppurtunities please Email me and I'll get back to you soon</p>
      <div className='flex gap-12 mt-8'>
        <a href=""><FaLinkedin className=' text-[30px] hover:text-[#ff5722]'/></a>
        <a href=""><FaGithub className=' text-[30px] hover:text-[#ff5722]'/></a>
        <a href=""><FaXTwitter className=' text-[30px] hover:text-[#ff5722]'/></a>
        <a href=""><FiInstagram className=' text-[30px] hover:text-[#ff5722]'/></a>
        
      </div>
    </div>
    <div class="contact--right">

    <EmailForm/>
      
    </div>
</section>
  )
}

export default Contact