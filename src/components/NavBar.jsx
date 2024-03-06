import React from 'react'
import './NavBar.css'
import dowicon from '../assets/images/downloadIcon.png'
import Logo from '../assets/images/Logo.webp'

const NavBar = () => {
  return (
    <nav>
      <div class="logo">
        <img className='w-[100px] h-[50px]' src={Logo} alt="" />
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="./files/GoutamPatel_Resume.pdf" class="resume" download="">
            Resume
            <img src={dowicon} alt="download" />
          </a>
        </li>
      </ul>

      <div>

      </div>
    </nav>
  )
}

export default NavBar