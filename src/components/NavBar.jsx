import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
      <div class="logo">
        <p><a href="#home">GM</a></p>
      </div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="./files/GoutamPatel_Resume.pdf" class="resume" download="">
            Resume
            <img src="./Images/downloadIcon.png" alt="download" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar