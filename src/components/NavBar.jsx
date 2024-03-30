import React from 'react'
import './NavBar.css'
import dowicon from '../assets/images/downloadIcon.png'
import Logo from '../assets/images/logoo.svg'


const NavBar = () => {
  return (
    <nav>
      <div class="logo">
        <img className='w-[100px] h-[100px]' src={Logo} alt="" />
      </div>
      <ul className="nav-links">
         <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#qualification">Qualification</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div>

      </div>
    </nav>
  )
}

export default NavBar

